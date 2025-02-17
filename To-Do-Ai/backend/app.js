require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { GoogleGenerativeAI } = require('@google/generative-ai');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Google AI konfigürasyonu
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

// Tarih öncelik hesaplama fonksiyonu
const getDatePriority = (dueDate) => {
  const today = new Date();
  const taskDate = new Date(dueDate);
  const diffDays = Math.ceil((taskDate - today) / (1000 * 60 * 60 * 24));
  
  if (diffDays < 0) return 'expired';
  if (diffDays < 2) return 'high';
  if (diffDays <= 5) return 'medium';
  return 'low';
};

app.post('/api/prioritize', async (req, res) => {
  try {
    const { task, dueDate } = req.body;
    
    // Tarih validasyonu
    if (!/^\d{4}-\d{2}-\d{2}$/.test(dueDate)) {
      return res.status(400).json({ error: "Geçersiz tarih formatı (YYYY-MM-DD olmalı)" });
    }

    const datePriority = getDatePriority(dueDate);
    
    // Google AI için optimize edilmiş prompt
    const prompt = `Görev: "${task}"\nSon Tarih: ${dueDate}\n\n`
      + `Öncelik belirleme kuralları:\n`
      + "1. Su, ilaç, acil sağlık durumları → high\n"
      + "2. Son 2 gün içinde bitecek kritik görevler → high\n"
      + "3. 5 gün içinde tamamlanması gereken önemli görevler → medium\n"
      + "4. Rutin işler ve uzun vadeli hedefler → low\n\n"
      + "Yanıt SADECE şunlardan biri olmalı: high, medium, low";

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const contentPriority = response.text().toLowerCase().trim();
    
    // Geçerli öncelik kontrolü
    if (!['high', 'medium', 'low'].includes(contentPriority)) {
      throw new Error(`Geçersiz öncelik değeri: ${contentPriority}`);
    }

    // Nihai öncelik belirleme
    const finalPriority = 
      datePriority === 'expired' ? 'expired' :
      contentPriority === 'high' || datePriority === 'high' ? 'high' :
      contentPriority === 'medium' || datePriority === 'medium' ? 'medium' : 'low';

    res.json({
      task,
      dueDate,
      priority: finalPriority,
      dateBasedPriority: datePriority,
      contentBasedPriority: contentPriority
    });

  } catch (error) {
    console.error('Google AI Hatası:', {
      error: error.message,
      stack: error.stack,
      requestBody: req.body
    });
    
    res.status(500).json({
      error: "Önceliklendirme hatası",
      ...(process.env.NODE_ENV === 'development' && {
        details: error.message
      })
    });
  }
});

app.listen(5000, () => {
  console.log('Sunucu 5000 portunda çalışıyor');
});