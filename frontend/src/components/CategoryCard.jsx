import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function CategoryCard({ category }) {
  const navigate = useNavigate();

  const handleCategoryClick = () => {
    navigate(
      `/kategori?filter=${category.slug || category.name.toLowerCase()}`,
    );
  };

  return (
    <motion.div
      onClick={handleCategoryClick}
      whileHover={{ y: -6 }}
      whileTap={{ scale: 0.96 }}
      className="group cursor-pointer flex flex-col items-center justify-center p-6 bg-[#0F2744]/40 backdrop-blur-xl rounded-3xl border border-sky-500/20 hover:border-sky-400/60 shadow-lg hover:shadow-[0_15px_30px_-10px_rgba(56,189,248,0.25)] transition-all duration-500 w-48 h-64 relative overflow-hidden"
    >
      {/* Background Hover Glow Subtil */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-600/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Container Gambar Kategori */}
      <div className="w-28 h-28 bg-[#071526]/80 rounded-2xl overflow-hidden mb-5 flex items-center justify-center border border-sky-500/20 group-hover:border-sky-400/50 shadow-inner transition-colors duration-300">
        <img
          src={`${import.meta.env.VITE_API_URL || ""}/storage/${category.image?.replace(/^public\//, "")}`}
          alt={category.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
          onError={(e) => {
            e.target.onerror = null;
            // Fallback placeholder elegan jika gambar belum diupload di backend
            e.target.src =
              "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=300&auto=format&fit=crop&q=60";
          }}
        />
      </div>

      {/* Detail Teks & Indikator Aksi */}
      <div className="text-center space-y-1 relative z-10 w-full px-2">
        <span className="block font-semibold text-xs text-slate-200 group-hover:text-sky-300 uppercase tracking-wider transition-colors duration-300 line-clamp-2 leading-snug">
          {category.name}
        </span>
        <span className="block text-[9px] text-sky-400/80 font-medium uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0">
          Lihat Koleksi →
        </span>
      </div>
    </motion.div>
  );
}
