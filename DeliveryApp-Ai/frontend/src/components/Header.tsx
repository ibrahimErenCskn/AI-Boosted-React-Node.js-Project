import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router";

export default function Header() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsCartOpen(false);
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  // Mobil menü için dış tıklama
  const handleClickOutside = (event: MouseEvent, modalId: string) => {
    const modalElement = document.querySelector(`#${modalId}`);
    if (modalElement && !modalElement.contains(event.target as Node)) {
      if (modalId === "cart-modal") setIsCartOpen(false);
      if (modalId === "mobile-menu") setIsMenuOpen(false);
    }
  };
  return (
    <>
      <header className="bg-gradient-to-r from-red-700 to-red-600 shadow-lg sticky top-0 z-50">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link to={"/"} className="text-3xl font-bold flex items-center gap-2">
            <span className="bg-white text-red-600 p-2 rounded-full">🍔</span>
            <span className="text-white">BurgerCraft</span>
          </Link>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2 cursor-pointer">
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <div className="hidden md:flex space-x-8 items-center">
            <Link to={"/menu"} className="relative group text-lg">
              <span className="text-white">Menüler</span>
              <span className="absolute -bottom-1 left-0 w-0 h-1 bg-red-200 transition-all group-hover:w-full"></span>
            </Link>
            <Link to={"hakkimizda"} className="relative group text-lg">
              <span className="text-white">Hakkımızda</span>
              <span className="absolute -bottom-1 left-0 w-0 h-1 bg-red-200 transition-all group-hover:w-full"></span>
            </Link>
            <Link to={"iletisim"} className="relative group text-lg">
              <span className="text-white">İletişim</span>
              <span className="absolute -bottom-1 left-0 w-0 h-1 bg-red-200 transition-all group-hover:w-full"></span>
            </Link>
            <button
              onClick={() => setIsCartOpen(!isCartOpen)}
              className="relative p-2 hover:bg-red-700 rounded-full transition-colors cursor-pointer">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 bg-opacity-50 z-40 flex"
            onClick={(e) => handleClickOutside(e.nativeEvent, "mobile-menu")}>
            <motion.div
              id="mobile-menu"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="bg-white w-3/4 max-w-xs h-screen p-6 shadow-xl">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-xl font-bold">Menü</h3>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-500 hover:text-red-600 text-2xl">
                  &times;
                </button>
              </div>

              <nav className="space-y-4 py-4">
                <a
                  href="#menu"
                  className="block p-3 hover:bg-red-50 rounded-lg">
                  Menü
                </a>
                <a
                  href="#about"
                  className="block p-3 hover:bg-red-50 rounded-lg">
                  Hakkımızda
                </a>
                <a
                  href="#contact"
                  className="block p-3 hover:bg-red-50 rounded-lg">
                  İletişim
                </a>
                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    setIsCartOpen(true);
                  }}
                  className="w-full p-3 text-left hover:bg-red-50 rounded-lg flex items-center gap-2">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  Sepetim
                </button>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isCartOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(e) => handleClickOutside(e.nativeEvent, "cart-modal")}
            className="fixed inset-0 bg-black/40 bg-opacity-50 z-50 flex justify-end">
            <motion.div
              id="cart-modal"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="bg-white w-full max-w-md h-screen p-6 shadow-xl">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold">Sepetiniz</h3>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="text-gray-500 hover:text-red-600 text-2xl">
                  &times;
                </button>
              </div>

              {/* Sepet içeriği (aynı kaldı) */}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
