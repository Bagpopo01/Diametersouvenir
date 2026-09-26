import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Search } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/Logo DHS.png';

export default function Navbar({ isMenuOpen, setIsMenuOpen }) {
  const location = useLocation();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const isActive = (path) => location.pathname === path;

  const menuItems = [
    { name: 'Beranda', path: '/' },
    { name: 'Kategori', path: '/kategori' },
    { name: 'Galeri', path: '/galeri' },
    { name: 'Kontak', path: '/kontak' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm w-full"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            {!isSearchOpen && (
              <Link to="/">
                <img src={logo} alt="Logo" className="h-12 w-auto object-contain" />
              </Link>
            )}
          </div>

          {/* Navigasi Desktop */}
          {!isSearchOpen && (
            <nav className="hidden md:flex flex-1 justify-center space-x-2">
              {menuItems.map((item) => (
                <Link 
                  key={item.path}
                  to={item.path}
                  className={`relative px-4 py-2 text-sm font-semibold transition-all hover:text-orange-600 ${
                    isActive(item.path) ? 'text-orange-600' : 'text-gray-500'
                  }`}
                >
                  {item.name}
                  {isActive(item.path) && (
                    <motion.div 
                      layoutId="underline" 
                      className="absolute bottom-0 left-4 right-4 h-0.5 bg-orange-600" 
                    />
                  )}
                </Link>
              ))}
            </nav>
          )}

          {/* Search & Tombol */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center relative">
              <AnimatePresence>
                {isSearchOpen && (
                  <motion.input
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: 200, opacity: 1 }}
                    exit={{ width: 0, opacity: 0 }}
                    type="text"
                    placeholder="Cari..."
                    className="bg-gray-100 px-4 py-2 rounded-full text-sm outline-none border border-gray-200 focus:ring-2 focus:ring-orange-500"
                    autoFocus
                  />
                )}
              </AnimatePresence>
              
              <button 
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className={`p-2 ml-1 rounded-full transition-colors ${isSearchOpen ? 'text-red-500 hover:bg-red-50' : 'text-gray-500 hover:bg-gray-100'}`}
              >
                {isSearchOpen ? <X size={20} /> : <Search size={20} />}
              </button>
            </div>

{!isSearchOpen && (
  <a 
    href="https://wa.me/6281259724486?text=Halo%20Rumpun%20Artwork%2C%20saya%20ingin%20konsultasi%20tentang%20produk%20dan%20layanan%20Anda."
    target="_blank"
    rel="noopener noreferrer"
    className="hidden lg:block bg-orange-600 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-orange-700 shadow-md transition-all active:scale-95 text-center"
  >
    Konsultasi
  </a>
)}



            <button
              className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white border-t border-gray-100 px-6 py-4 space-y-2 shadow-xl"
          >
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 rounded-xl font-medium ${
                  isActive(item.path) ? 'bg-orange-50 text-orange-600' : 'text-gray-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
