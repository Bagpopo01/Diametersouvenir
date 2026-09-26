import React, { useState, useEffect, useMemo } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import {
  LayoutGrid,
  List,
  ChevronLeft,
  ChevronRight,
  Search,
  SlidersHorizontal,
  Box,
  ChevronDown,
  Sparkles,
} from "lucide-react";
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
    const API_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000";
    const fetchData = async () => {
      setLoading(true);
      try {
        const [resCat, resProd] = await Promise.all([
          fetch(`${API_URL}/api/categories`),
          fetch(`${API_URL}/api/products`),
        ]);
        const dataCat = await resCat.json();
        const dataProd = await resProd.json();
        setCategories(Array.isArray(dataCat) ? dataCat : dataCat.data || []);
        setProducts(Array.isArray(dataProd) ? dataProd : dataProd.data || []);
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
        (c) =>
          c.name.toLowerCase() === filterFromUrl.toLowerCase() ||
          c.slug === filterFromUrl.toLowerCase(),
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
        p.name.toLowerCase().includes(searchTerm.toLowerCase()),
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
    currentPage * productsPerPage,
  );

  if (loading)
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#F8FAFC]">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-slate-200 border-t-[#0F2744] rounded-full animate-spin mx-auto mb-4" />
          <p className="text-[#0F2744] font-semibold tracking-widest uppercase text-xs">
            Memuat Katalog...
          </p>
        </div>
      </div>
    );

  return (
    <div className="bg-[#F8FAFC] min-h-screen pb-24 text-slate-900 font-sans relative overflow-hidden">
      {/* Background Ambient Blur */}
      <div className="absolute top-28 right-1/4 w-[480px] h-[480px] bg-blue-100/50 rounded-full blur-[140px] pointer-events-none -z-0" />
      <div className="absolute top-96 left-10 w-[400px] h-[400px] bg-amber-100/40 rounded-full blur-[120px] pointer-events-none -z-0" />

      {/* --- HERO HEADER --- */}
      <div className="bg-gradient-to-b from-[#0b1c33] via-[#071526] to-[#040d18] pt-32 pb-24 px-6 text-center relative overflow-hidden border-b border-[#0F2744]">
        <div className="absolute -top-16 -right-16 w-72 h-72 bg-sky-500/15 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-72 h-72 bg-amber-400/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center justify-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-blue-500/10 text-sky-400 border border-sky-400/30 mb-6 backdrop-blur-sm"
          >
            <Sparkles size={14} className="text-amber-400 fill-amber-400" />
            <span>Curated Inventory</span>
            <Sparkles size={14} className="text-amber-400 fill-amber-400" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extralight text-white tracking-tight"
          >
            Katalog{" "}
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-200 to-white italic">
              Diameter Souvenir.
            </span>
          </motion.h1>

          <p className="text-slate-400 text-xs sm:text-sm font-light tracking-wide mt-4 max-w-lg mx-auto">
            Temukan ragam koleksi cenderamata korporat kustom, gift set
            eksekutif, dan plakat penghargaan presisi.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 -mt-8 relative z-20">
        {/* --- TOOLBAR --- */}
        <div className="bg-white p-4 rounded-2xl shadow-[0_4px_25px_rgba(15,39,68,0.08)] border border-slate-200/90 flex flex-col md:flex-row gap-4 items-center justify-between mb-12">
          {/* Input Search */}
          <div className="relative w-full md:w-96">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              size={17}
            />
            <input
              type="text"
              placeholder="Cari souvenir atau produk..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200/80 rounded-xl focus:border-[#0F2744] focus:ring-2 focus:ring-[#0F2744]/10 text-xs sm:text-sm text-slate-800 placeholder-slate-400 transition-all outline-none"
            />
          </div>

          {/* Sorter & View Switcher */}
          <div className="flex items-center gap-3 w-full md:w-auto">
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="flex-1 md:flex-none bg-slate-50 border border-slate-200/80 rounded-xl px-4 py-3 text-xs sm:text-sm font-semibold text-slate-700 focus:border-[#0F2744] focus:ring-2 focus:ring-[#0F2744]/10 transition-all outline-none cursor-pointer"
            >
              <option>Terbaru</option>
              <option>Harga Termurah</option>
              <option>Harga Termahal</option>
            </select>

            <button
              onClick={() => setViewMode(viewMode === "grid" ? "list" : "grid")}
              aria-label="Ubah Tampilan"
              className="p-3 bg-[#0F2744] text-white rounded-xl hover:bg-blue-700 transition-all shadow-sm active:scale-95 flex items-center justify-center"
            >
              {viewMode === "grid" ? (
                <LayoutGrid size={18} />
              ) : (
                <List size={18} />
              )}
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
          {/* --- SIDEBAR SIDE --- */}
          <aside className="w-full lg:w-72 flex-shrink-0">
            <div className="sticky top-24">
              <div className="flex items-center gap-2 mb-4 px-2">
                <SlidersHorizontal size={15} className="text-[#0F2744]" />
                <h2 className="font-semibold text-xs uppercase tracking-wider text-slate-800">
                  Filter Kategori
                </h2>
              </div>

              <div className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(15,39,68,0.04)] border border-slate-200/90 overflow-hidden p-2 space-y-1.5">
                {/* Opsi Semua Produk */}
                <button
                  onClick={() => {
                    setSelectedCategory("all");
                    setSelectedSubCategory(null);
                    setExpandedCat(null);
                    setCurrentPage(1);
                  }}
                  className={`w-full text-left px-5 py-3.5 rounded-xl text-xs transition-all flex items-center justify-between ${
                    selectedCategory === "all"
                      ? "bg-[#0F2744] text-white font-semibold shadow-md shadow-blue-950/20"
                      : "hover:bg-slate-50 text-slate-600 font-medium"
                  }`}
                >
                  <span>Semua Produk</span>
                  <Box
                    size={14}
                    className={
                      selectedCategory === "all"
                        ? "text-amber-400"
                        : "text-slate-400"
                    }
                  />
                </button>

                {/* List Kategori Utama */}
                {categories.map((cat) => (
                  <div key={cat.id} className="flex flex-col gap-1">
                    <button
                      onClick={() => {
                        setSelectedCategory(cat.id);
                        setSelectedSubCategory(null);
                        setExpandedCat(expandedCat === cat.id ? null : cat.id);
                        setCurrentPage(1);
                      }}
                      className={`w-full text-left px-5 py-3.5 rounded-xl text-xs transition-all flex items-center justify-between ${
                        selectedCategory === cat.id
                          ? "bg-[#0F2744] text-white font-semibold shadow-md shadow-blue-950/20"
                          : "hover:bg-slate-50 text-slate-700 font-medium bg-white"
                      }`}
                    >
                      <span className="truncate pr-2">{cat.name}</span>
                      {cat.sub_categories?.length > 0 && (
                        <ChevronDown
                          size={14}
                          className={`transition-transform duration-300 flex-shrink-0 ${expandedCat === cat.id ? "rotate-180" : ""}`}
                        />
                      )}
                    </button>

                    {/* Sub-Kategori Dropdown */}
                    <AnimatePresence>
                      {expandedCat === cat.id &&
                        cat.sub_categories?.length > 0 && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="flex flex-col gap-1 ml-4 border-l-2 border-slate-200 pl-3 overflow-hidden py-1.5"
                          >
                            {cat.sub_categories.map((sub) => (
                              <button
                                key={sub.id}
                                onClick={() => {
                                  setSelectedSubCategory(sub.id);
                                  setCurrentPage(1);
                                }}
                                className={`group text-left py-1.5 px-2.5 text-[11px] font-medium rounded-lg transition-all flex justify-between items-center ${
                                  selectedSubCategory === sub.id
                                    ? "text-blue-700 bg-blue-50 font-semibold"
                                    : "text-slate-500 hover:text-slate-900"
                                }`}
                              >
                                <span className="truncate pr-2">
                                  • {sub.name}
                                </span>
                                <span className="text-[9px] bg-slate-100 px-1.5 py-0.5 rounded text-slate-400 group-hover:bg-blue-100 group-hover:text-blue-700 font-semibold">
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
                  key={
                    selectedCategory +
                    selectedSubCategory +
                    searchTerm +
                    sortOption
                  }
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className={
                    viewMode === "grid"
                      ? "grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 md:gap-6"
                      : "flex flex-col gap-4"
                  }
                >
                  {currentProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </motion.div>
              ) : (
                <div className="text-center py-28 bg-white rounded-3xl border border-dashed border-slate-200 max-w-lg mx-auto shadow-sm">
                  <Box size={32} className="mx-auto text-slate-300 mb-3" />
                  <p className="text-slate-700 font-semibold text-sm">
                    Produk Tidak Ditemukan
                  </p>
                  <p className="text-slate-400 text-xs mt-1">
                    Coba gunakan kata kunci pencarian lain atau pilih kategori
                    berbeda.
                  </p>
                </div>
              )}
            </AnimatePresence>

            {/* --- PAGINATION --- */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2 mt-16">
                <button
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage((p) => p - 1)}
                  aria-label="Halaman Sebelumnya"
                  className="p-2.5 rounded-xl bg-white border border-slate-200/90 disabled:opacity-30 text-slate-700 transition-all hover:bg-[#0F2744] hover:text-white shadow-sm"
                >
                  <ChevronLeft size={18} />
                </button>

                <span className="text-xs font-semibold text-slate-700 mx-3 tracking-wide">
                  Halaman {currentPage}{" "}
                  <span className="text-slate-400 font-normal">dari</span>{" "}
                  {totalPages}
                </span>

                <button
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage((p) => p + 1)}
                  aria-label="Halaman Berikutnya"
                  className="p-2.5 rounded-xl bg-white border border-slate-200/90 disabled:opacity-30 text-slate-700 transition-all hover:bg-[#0F2744] hover:text-white shadow-sm"
                >
                  <ChevronRight size={18} />
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
