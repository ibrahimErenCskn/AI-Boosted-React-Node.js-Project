import { Link } from "react-router";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-red-100">
      {/*Hero Section */}
      <div className="relative h-[600px] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://st2.depositphotos.com/1000504/8866/i/450/depositphotos_88666210-stock-photo-fresh-tasty-burger.jpg"
            alt="Burger background"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="container mx-auto px-6 h-full flex items-center">
          <div className="text-center relative z-10">
            <h2 className="text-5xl md:text-7xl font-black mb-8 bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
              Lezzet <span className="whitespace-nowrap">Patlaması!</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-2xl mx-auto leading-relaxed">
              Özel köftemiz ve el yapımı soslarımızla hazırlanan,{" "}
              <br className="hidden md:block" />
              sadece sizin için üretilen nefis burgerler
            </p>
            <Link
              to={"/menu"}
              className="bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-full text-xl font-semibold transform transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-red-300">
              🚀 Hemen Keşfet
            </Link>
          </div>
        </div>
      </div>

      {/* Menü */}
      <section id="menu" className="container mx-auto px-6 py-20">
        <h3 className="text-4xl font-black text-center mb-16 relative">
          <span className="bg-red-600 text-white px-8 py-3 rounded-full inline-block">
            Şefin Önerileri
          </span>
        </h3>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-12">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm">
                %15 İNDİRİM
              </div>
              <img
                src={`https://st2.depositphotos.com/1000504/8866/i/450/depositphotos_88666210-stock-photo-fresh-tasty-burger.jpg`}
                alt="Burger"
                className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-300"
              />
              <div className="p-8">
                <h4 className="text-2xl font-bold mb-3 text-gray-800">
                  Gourmet Burger #{item}
                </h4>
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 fill-current"
                        viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="ml-2 text-gray-600">(128)</span>
                </div>
                <p className="text-gray-600 mb-6">
                  {item % 2 === 0
                    ? "Çift katlı dana köfte, cheddar peyniri, crispy soğan, özel BBQ sos"
                    : "Avokadolu özel sos, marul, domates, turşu, el yapımı köfte"}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex flex-col">
                    <span className="text-red-600 font-black text-2xl">
                      ₺{item * 25 + 50}
                    </span>
                    <span className="text-gray-400 line-through text-sm">
                      ₺{item * 25 + 70}
                    </span>
                  </div>
                  <button className="cursor-pointer bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition duration-300">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    Sepete Ekle
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
