export default function Contact() {
  return (
    <section id="contact" className="container mx-auto px-6 py-20">
      <div className="max-w-4xl mx-auto text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-black text-red-800 mb-6">
          Bize Ulaşın
        </h2>
        <p className="text-xl text-gray-600">
          Soru ve önerileriniz için her zaman buradayız
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="bg-white rounded-2xl p-8 shadow-xl">
          <form className="space-y-6">
            <div>
              <label className="block text-gray-700 mb-2">Adınız</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">E-posta</label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Mesajınız</label>
              <textarea
                rows={4}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 outline-none"></textarea>
            </div>
            <button className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition-colors">
              Gönder
            </button>
          </form>
        </div>

        <div className="space-y-8">
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-xl font-bold mb-4">İletişim Bilgileri</h3>
            <ul className="space-y-3 text-gray-600">
              <li>📍 İstiklal Caddesi No:123, İstanbul</li>
              <li>📞 0850 123 45 67</li>
              <li>📧 info@burgercraft.com</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.279115108735!2d28.97885831572025!3d41.04010277929705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab1d021adf417%3A0xba3aa9c55955e3b3!2s%C4%B0stiklal%20Caddesi!5e0!3m2!1str!2str!4v1623337895833!5m2!1str!2str"
              className="w-full h-64 border-0"
              allowFullScreen
              loading="lazy"></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
