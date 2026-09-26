import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Galeri from './pages/Galeri';
import Kontak from './pages/Kontak';
import Kategori from './pages/Kategori';
import { useCart } from './hooks/useCart';
import { useFavorites } from './hooks/useFavorites';

function App() {
  const { addToCart, getTotalItems } = useCart();
  const { favorites, toggleFavorite } = useFavorites();

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([{ id: 'all', name: 'Semua' }]);
  
  // PERBAIKAN 1: Tambahkan state untuk mengontrol menu mobile di sini
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const API_URL = import.meta.env.VITE_API_URL || 'https://admin.diametersouvenir.co.id';

    // Fetch Products
    fetch(`${API_URL}/api/products`)
      .then(res => res.json())
      .then(data => setProducts(Array.isArray(data) ? data : []))
      .catch(err => console.error("Error products:", err));

    // Fetch Categories
    fetch(`${API_URL}/api/categories`)
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setCategories([{ id: 'all', name: 'Semua' }, ...data]);
        }
      })
      .catch(err => console.error("Error categories:", err));
  }, []);

  const filteredProducts = products.filter((p) => {
    const matchesSearch = (p.name || '').toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = 
      selectedCategory === 'all' || 
      p.category_id == selectedCategory || 
      p.category_name === selectedCategory;
    return matchesSearch && matchesCategory;
  });
  const featuredProducts = filteredProducts.slice(0, 6);
  const clients = [
    { id: 1, name: "PT. ABC", logo: "abc-logo.png" },
    { id: 2, name: "PT. XYZ", logo: "xyz-logo.png" },
  ];

  const formatPrice = (price) =>
    new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
    }).format(price);

  return (
    <div className="min-h-screen bg-white">
      {/* PERBAIKAN 2: Kirimkan props isMenuOpen dan setIsMenuOpen ke Navbar */}
      <Navbar 
        getTotalItems={getTotalItems} 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen} 
      />
      
      <Routes>
        <Route path="/" element={
          <Home
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            categories={categories}
            filteredProducts={featuredProducts}
            favorites={favorites}
            toggleFavorite={toggleFavorite}
            addToCart={addToCart}
            formatPrice={formatPrice}
            clients={clients}
          />
        } />
        <Route path="/produk/:id" element={<ProductDetail />} />
        <Route path="/galeri" element={<Galeri />} />
        <Route path="/kontak" element={<Kontak />} />
        <Route path="/kategori" element={<Kategori />} />
      </Routes>
    </div>
  );
}

export default App;
