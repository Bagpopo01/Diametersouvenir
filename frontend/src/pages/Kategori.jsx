import React, { useState, useEffect, useMemo } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { LayoutGrid, List, ChevronLeft, ChevronRight, Search, SlidersHorizontal, Box, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Kategori = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  // --- DATA STATES ---
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // --- FILTER & UI STATES ---
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  const [expandedCat, setExpandedCat] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(12);
  const [viewMode, setViewMode] = useState("grid");
  const [sortOption, setSortOption] = useState("Terbaru");
  const [searchTerm, setSearchTerm] = useState("");

  // --- FETCH DATA FROM LARAVEL ---
  useEffect(() => {
    const API_URL = import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000';
    const fetchData = async () => {
      setLoading(true);
      try {
        const [resCat, resProd] = await Promise.all([
          fetch(`${API_URL}/api/categories`),
          fetch(`${API_URL}/api/products`),
        ]);
        const dataCat = await resCat.json();
        const dataProd = await resProd.json();
        setCategories(dataCat);
        setProducts(dataProd);
      } catch (err) {
        console.error("Gagal sinkronisasi data:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // --- URL FILTER HANDLING ---
  useEffect(() => {
    const filterFromUrl = searchParams.get("filter");
    if (filterFromUrl && categories.length > 0) {
      const matchedCategory = categories.find(
        (c) => c.name.toLowerCase() === filterFromUrl.toLowerCase()
      );
      if (matchedCategory) {
        setSelectedCategory(matchedCategory.id);
        setExpandedCat(matchedCategory.id);
        setCurrentPage(1);
      }
    } else if (!filterFromUrl) {
      setSelectedCategory("all");
    }
  }, [searchParams, categories]);

  // --- LOGIC: FILTERING & SORTING ---
  const processedProducts = useMemo(() => {
    let result = [...products];
    
    if (selectedCategory !== "all") {
      result = result.filter((p) => p.category_id === selectedCategory);
    }
    
    if (selectedSubCategory) {
      result = result.filter((p) => p.sub_category_id === selectedSubCategory);
    }

    if (searchTerm) {
      result = result.filter((p) =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (sortOption === "Harga Termurah") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortOption === "Harga Termahal") {
      result.sort((a, b) => b.price - a.price);
    } else {
      result.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    }
    return result;
  }, [selectedCategory, selectedSubCategory, products, sortOption, searchTerm]);

  // --- LOGIC: PAGINATION ---
  const totalPages = Math.ceil(processedProducts.length / productsPerPage);
  const currentProducts = processedProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  if (loading) return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="text-center">
        <div className="w-12 h-12 border-4 border-orange-100 border-t-orange-500 rounded-full animate-spin mx-auto mb-4" />
        <p className="text-slate-900 font-black italic tracking-widest uppercase text-[10px]">Loading Catalog...</p>
      </div>
    </div>
  );

  return (
    <div className="bg-[#FAFAFA] min-h-screen pb-24">
      {/* --- HERO HEADER --- */}
      <div className="bg-slate-950 pt-32 pb-20 px-6 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-[100px]" />
        <motion.h1 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-black text-white relative z-10 uppercase tracking-tighter"
        >
          Katalog <span className="text-orange-500 italic">Miniature.</span>
        </motion.h1>
      </div>

      <div className="max-w-7xl mx-auto px-6 -mt-10 relative z-20">
        {/* --- TOOLBAR --- */}
        <div className="bg-white p-4 rounded-[2rem] shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col md:flex-row gap-4 items-center justify-between mb-12">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" placeholder="Cari karya..." value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-orange-500 text-sm font-medium"
            />
          </div>
          
          <div className="flex items-center gap-3 w-full md:w-auto">
            <select 
              value={sortOption} onChange={(e) => setSortOption(e.target.value)}
              className="flex-1 md:flex-none bg-slate-50 border-none rounded-2xl px-6 py-3 text-sm font-bold text-slate-700 focus:ring-2 focus:ring-orange-500"
            >
              <option>Terbaru</option>
              <option>Harga Termurah</option>
              <option>Harga Termahal</option>
            </select>
            <button 
              onClick={() => setViewMode(viewMode === 'grid' ? 'list' : 'grid')}
              className="p-3 bg-slate-900 text-white rounded-2xl hover:bg-orange-500 transition-colors"
            >
              {viewMode === 'grid' ? <LayoutGrid size={20} /> : <List size={20} />}
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* --- SIDEBAR SIDE --- */}
          <aside className="w-full lg:w-72 flex-shrink-0">
            <div className="sticky top-24">
              <div className="flex items-center gap-2 mb-6 px-2">
                <SlidersHorizontal size={16} className="text-orange-500" />
                <h2 className="font-black text-[10px] uppercase tracking-[0.3em] text-slate-900">Filter Category</h2>
              </div>
              
              <div className="bg-white rounded-[2rem] shadow-sm border border-slate-100 overflow-hidden p-2 space-y-1">
                <button
                  onClick={() => { setSelectedCategory("all"); setSelectedSubCategory(null); setExpandedCat(null); setCurrentPage(1); }}
                  className={`w-full text-left px-6 py-4 rounded-2xl text-xs transition-all flex items-center justify-between ${selectedCategory === "all" ? "bg-orange-500 text-white font-black shadow-lg shadow-orange-200" : "hover:bg-slate-50 text-slate-600 font-bold"}`}
                >
                  Semua Produk <Box size={14} />
                </button>

                {categories.map((cat) => (
  <div key={cat.id} className="flex flex-col gap-1">
    {/* Tombol Kategori Utama */}
    <button
      onClick={() => { 
        setSelectedCategory(cat.id); 
        setSelectedSubCategory(null); // Reset sub saat ganti kategori
        setExpandedCat(expandedCat === cat.id ? null : cat.id); // Toggle buka/tutup
        setCurrentPage(1); 
      }}
      className={`w-full text-left px-6 py-4 rounded-2xl text-sm transition-all flex items-center justify-between ${
        selectedCategory === cat.id 
          ? "bg-orange-500 text-white font-black shadow-lg shadow-orange-200" 
          : "hover:bg-slate-50 text-slate-600 font-bold bg-white border border-slate-100"
      }`}
    >
      <span>{cat.name}</span>
      {/* Munculkan icon panah jika ada sub-kategori */}
      {cat.sub_categories?.length > 0 && (
        <ChevronDown 
          size={14} 
          className={`transition-transform duration-300 ${expandedCat === cat.id ? "rotate-180" : ""}`} 
        />
      )}
    </button>

    {/* List Sub-Kategori (Hanya muncul jika diklik) */}
    <AnimatePresence>
      {expandedCat === cat.id && cat.sub_categories?.length > 0 && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="flex flex-col gap-1 ml-4 border-l-2 border-orange-100 pl-3 overflow-hidden py-2"
        >
          {cat.sub_categories.map((sub) => (
            <button
              key={sub.id}
              onClick={() => { setSelectedSubCategory(sub.id); setCurrentPage(1); }}
              className={`group text-left py-2 px-3 text-[10px] uppercase font-black rounded-lg transition-all flex justify-between items-center ${
                selectedSubCategory === sub.id 
                  ? "text-orange-600 bg-orange-50" 
                  : "text-slate-400 hover:text-orange-500"
              }`}
            >
              <span>• {sub.name}</span>
              {/* Badge Jumlah Produk */}
              <span className="text-[9px] bg-slate-50 px-1.5 py-0.5 rounded text-slate-300 group-hover:bg-orange-100 group-hover:text-orange-400">
                {sub.products_count || 0}
              </span>
            </button>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  </div>
))}

              </div>
            </div>
          </aside>

         {/* --- MAIN PRODUCT GRID --- */}
<main className="flex-1">
  <AnimatePresence mode="wait">
    {currentProducts.length > 0 ? (
      <motion.div 
        key={selectedCategory + selectedSubCategory + searchTerm + sortOption}
        initial={{ opacity: 0, y: 10 }} 
        animate={{ opacity: 1, y: 0 }} 
        exit={{ opacity: 0, y: -10 }}
        // UBAH BAGIAN INI:
        className={
          viewMode === "grid" 
            ? "grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6" 
            : "flex flex-col gap-6"
        }
      >
        {currentProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </motion.div>
    ) : (
                <div className="text-center py-32 bg-white rounded-[3rem] border border-dashed border-slate-200">
                   <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">Karya Tidak Ditemukan</p>
                </div>
              )}
            </AnimatePresence>

            {/* --- PAGINATION --- */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-3 mt-16">
                <button 
                  disabled={currentPage === 1} onClick={() => setCurrentPage(p => p - 1)}
                  className="p-3 rounded-2xl bg-white border border-slate-100 disabled:opacity-30 text-slate-900 transition-all hover:bg-orange-500 hover:text-white"
                >
                  <ChevronLeft size={20} />
                </button>
                <span className="text-xs font-black text-slate-900 mx-4 tracking-tighter">
                  PAGE {currentPage} <span className="text-slate-300 mx-1">OF</span> {totalPages}
                </span>
                <button 
                  disabled={currentPage === totalPages} onClick={() => setCurrentPage(p => p + 1)}
                  className="p-3 rounded-2xl bg-white border border-slate-100 disabled:opacity-30 text-slate-900 transition-all hover:bg-orange-500 hover:text-white"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Kategori;
