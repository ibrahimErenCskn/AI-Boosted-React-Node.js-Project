import { useState } from "react";

export default function Menu() {
  const menuCategories = [
    {
      name: "Klasik Burgerler",
      items: [
        {
          id: 1,
          name: "Klasik Beef",
          price: 85,
          desc: "150gr dana köfte, cheddar, marul, domates",
          isVeg: false,
        },
        {
          id: 2,
          name: "Çift Katlı",
          price: 115,
          desc: "İki dana köfte, çift cheddar, özel sos",
          isVeg: false,
        },
        {
          id: 3,
          name: "Barbekü",
          price: 95,
          desc: "Barbekü sos, soğan halkası, turşu",
          isVeg: false,
        },
      ],
    },
    {
      name: "Vejetaryen Seçenekler",
      items: [
        {
          id: 4,
          name: "Mantar Burger",
          price: 90,
          desc: "Izgara mantar, avokado, roka",
          isVeg: true,
        },
        {
          id: 5,
          name: "Falafel",
          price: 80,
          desc: "Ev yapımı falafel, humus, salata",
          isVeg: true,
        },
      ],
    },
    {
      name: "Özel Menüler",
      items: [
        {
          id: 6,
          name: "Chef Special",
          price: 135,
          desc: "Wagyu köfte, truffle mayonez, roka",
          isVeg: false,
        },
        {
          id: 7,
          name: "Breakfast Burger",
          price: 95,
          desc: "Yumurta, pastırma, kaşar peyniri",
          isVeg: false,
        },
      ],
    },
  ];
  const [sortBy, setSortBy] = useState("popular");
  const [showVegOnly, setShowVegOnly] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Filtreleme ve sıralama mantığı
  const filteredCategories = menuCategories
    .map((category) => ({
      ...category,
      items: category.items
        .filter(
          (item) =>
            (item.isVeg || !showVegOnly) &&
            item.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .sort((a, b) => {
          if (sortBy === "price-asc") return a.price - b.price;
          if (sortBy === "price-desc") return b.price - a.price;
          return 0;
        }),
    }))
    .filter((category) => category.items.length > 0);
  return (
    <>
      <section id="menu" className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-red-800 mb-4">
            Burger Kataloğu
          </h2>
        </div>
        <div className="sticky top-20 bg-white shadow-lg rounded-xl p-6 mb-12 z-30 border border-gray-100">
          <div className="flex flex-wrap gap-6 items-center">
            <select
              className="bg-white border-2 border-gray-200 text-gray-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all"
              onChange={(e) => setSortBy(e.target.value)}>
              <option value="popular">Sırala: Popülerlik</option>
              <option value="price-asc">Fiyat: Düşükten Yükseğe</option>
              <option value="price-desc">Fiyat: Yüksekten Düşüğe</option>
            </select>

            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="vegan"
                className="w-5 h-5 accent-red-600"
                onChange={(e) => setShowVegOnly(e.target.checked)}
              />
              <label htmlFor="vegan" className="text-gray-700 font-medium">
                Sadece Vejetaryen
              </label>
            </div>

            <div className="relative flex-1 max-w-md">
              <input
                type="text"
                placeholder="Burger ara..."
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl bg-white focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <svg
                className="w-5 h-5 absolute right-3 top-3 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Güncellenmiş Menü Görünümü */}
        {filteredCategories.map((category) => (
          <div key={category.name} className="mb-20">
            <div className="flex items-center gap-4 mb-8">
              <h3 className="text-3xl font-black bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
                {category.name}
              </h3>
              <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-medium">
                {category.items.length} çeşit
              </span>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.items.map((item) => (
                <div
                  key={item.id}
                  className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
                  <div className="relative overflow-hidden rounded-t-2xl">
                    <img
                      src={`https://st2.depositphotos.com/1000504/8866/i/450/depositphotos_88666210-stock-photo-fresh-tasty-burger.jpg`}
                      alt={item.name}
                      className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                    {item.isVeg && (
                      <span className="absolute top-3 left-3 bg-green-100 text-green-800 px-3 py-1.5 rounded-full text-sm font-medium shadow-sm">
                        🌱 Vejetaryen
                      </span>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h4 className="text-xl font-bold text-gray-800">
                        {item.name}
                      </h4>
                      <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full font-medium">
                        ₺{item.price}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {item.desc}
                    </p>
                    <div className="flex justify-between items-center">
                      <button className="cursor-pointer bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition duration-300">
                        <svg
                          className="w-5 h-5 fill-current"
                          viewBox="0 0 24 24">
                          <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        Sepete Ekle
                      </button>
                      <button className="text-gray-400 hover:text-red-600 transition-colors">
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
