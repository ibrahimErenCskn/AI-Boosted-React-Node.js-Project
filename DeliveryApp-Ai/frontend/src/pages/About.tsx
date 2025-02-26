export default function About() {
  return (
    <section id="about" className="container mx-auto px-6 py-20">
      <div className="max-w-4xl mx-auto text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-black text-red-800 mb-6">
          Biz Kimiz?
        </h2>
        <p className="text-xl text-gray-600">
          2010'dan beri en iyi burger deneyimini sunmak için çalışıyoruz
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mb-20">
        <div className="bg-white rounded-2xl p-8 shadow-xl">
          <h3 className="text-2xl font-bold mb-4">Vizyonumuz</h3>
          <p className="text-gray-600 leading-relaxed">
            Lezzetin sınırlarını zorlayarak, her bir burgerde unutulmaz bir
            deneyim yaşatmayı hedefliyoruz. Kaliteli malzemeler ve yaratıcı
            tariflerle gastronomi dünyasında fark yaratıyoruz.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-xl">
          <h3 className="text-2xl font-bold mb-4">Değerlerimiz</h3>
          <ul className="space-y-3 text-gray-600">
            <li>✅ %100 Doğal Malzemeler</li>
            <li>✅ Hijyenik Üretim</li>
            <li>✅ Deneyimli Şefler</li>
            <li>✅ Müşteri Memnuniyeti</li>
          </ul>
        </div>
      </div>

      <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-3xl p-8 text-white">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <div className="text-4xl font-bold mb-2">10+</div>
            <div className="text-sm">Yıllık Deneyim</div>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold mb-2">500K+</div>
            <div className="text-sm">Mutlu Müşteri</div>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold mb-2">50+</div>
            <div className="text-sm">Ödül & Başarı</div>
          </div>
        </div>
      </div>
    </section>
  );
}
