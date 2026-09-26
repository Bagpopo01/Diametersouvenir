import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Search } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/Logo DHS.png";

export default function Navbar({ isMenuOpen, setIsMenuOpen }) {
  const location = useLocation();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const isActive = (path) => location.pathname === path;

  const menuItems = [
    { name: "Beranda", path: "/" },
    { name: "Kategori", path: "/kategori" },
    { name: "Galeri", path: "/galeri" },
    { name: "Kontak", path: "/kontak" },
  ];

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 z-50 bg-[#071526]/90 backdrop-blur-xl border-b border-[#0F2744]/70 shadow-lg w-full transition-all"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Identity */}
          <div className="flex-shrink-0 flex items-center">
            {!isSearchOpen && (
              <Link to="/" className="flex items-center gap-3 group">
                <img
                  src={logo}
                  alt="Diameter Souvenir Logo"
                  className="h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </Link>
            )}
          </div>

          {/* Navigasi Desktop (Editorial Minimalist) */}
          {!isSearchOpen && (
            <nav className="hidden md:flex flex-1 justify-center space-x-1 lg:space-x-2">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative px-4 py-2 text-xs uppercase tracking-widest font-medium transition-colors duration-200 ${
                    isActive(item.path)
                      ? "text-sky-400 font-semibold"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  {item.name}
                  {isActive(item.path) && (
                    <motion.div
                      layoutId="underline"
                      className="absolute bottom-0 left-3 right-3 h-[2px] bg-gradient-to-r from-sky-400 to-blue-600 rounded-full"
                    />
                  )}
                </Link>
              ))}
            </nav>
          )}

          {/* Search, Action CTA & Menu Mobile */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            {/* Search Input Bar */}
            <div className="flex items-center relative">
              <AnimatePresence>
                {isSearchOpen && (
                  <motion.input
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: 220, opacity: 1 }}
                    exit={{ width: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Cari souvenir pilihan..."
                    className="bg-[#0F2744]/90 text-white placeholder-slate-400 text-xs px-4 py-2 rounded-full outline-none border border-sky-500/40 focus:border-sky-400 focus:ring-1 focus:ring-sky-400 shadow-inner"
                    autoFocus
                  />
                )}
              </AnimatePresence>

              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className={`p-2 ml-1 rounded-full transition-all duration-200 ${
                  isSearchOpen
                    ? "text-rose-400 hover:bg-rose-500/10"
                    : "text-slate-300 hover:text-white hover:bg-white/5"
                }`}
                aria-label="Cari Produk"
              >
                {isSearchOpen ? <X size={18} /> : <Search size={18} />}
              </button>
            </div>

            {/* Tombol Konsultasi CTA */}
            {!isSearchOpen && (
              <a
                href="https://wa.me/6281259724486?text=Halo%20Diameter%20Souvenir%2C%20saya%20ingin%20konsultasi%20tentang%20pemesanan%20katalog%20souvenir."
                target="_blank"
                rel="noopener noreferrer"
                className="hidden lg:inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-sky-600 text-white px-5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase shadow-md hover:shadow-sky-500/25 hover:from-blue-500 hover:to-sky-500 active:scale-95 transition-all"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Konsultasi
              </a>
            )}

            {/* Tombol Hamburger Mobile */}
            <button
              className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu"
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-[#071526] border-t border-[#0F2744] px-6 py-5 space-y-2 shadow-2xl"
          >
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 rounded-xl text-sm font-medium tracking-wide transition-all ${
                  isActive(item.path)
                    ? "bg-blue-600/15 text-sky-400 font-semibold border-l-2 border-sky-400"
                    : "text-slate-300 hover:bg-white/5 hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            ))}

            <div className="pt-2">
              <a
                href="https://wa.me/6281259724486?text=Halo%20Diameter%20Souvenir%2C%20saya%20ingin%20konsultasi%20tentang%20pemesanan%20katalog%20souvenir."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex justify-center items-center gap-2 bg-blue-600 text-white py-3 rounded-xl text-xs font-semibold tracking-wider uppercase shadow-md active:scale-95"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Hubungi via WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
