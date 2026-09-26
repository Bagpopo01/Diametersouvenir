import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function CategoryCard({ category }) {
  const navigate = useNavigate();

  // Placeholder URL yang benar (menggunakan template literal ``)


  const handleCategoryClick = () => {
    navigate(`/kategori?filter=${category.slug || category.name.toLowerCase()}`);
  };

  return (
    <motion.div
      onClick={handleCategoryClick}
      whileHover={{ y: -8 }}
      whileTap={{ scale: 0.95 }}
      // Perubahan: w-48 (lebar) dan h-64 (tinggi tetap) agar seragam
      className="group cursor-pointer flex flex-col items-center justify-center p-6 bg-white rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-orange-100 transition-all duration-500 w-48 h-64"
    >
      {/* Container Gambar yang lebih besar dan konsisten */}
      <div className="w-28 h-28 bg-slate-50 rounded-[1.5rem] overflow-hidden mb-5 flex items-center justify-center border border-slate-50 group-hover:border-orange-100 transition-colors">
        <img
          src={`${import.meta.env.VITE_API_URL || ""}/storage/${category.image?.replace(/^public\//, "")}`}
          alt={category.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
          onError={(e) => {
           
           
          }}
        />
      </div>

      <div className="text-center space-y-1">
        <span className="block font-black text-[11px] text-slate-800 group-hover:text-orange-500 uppercase tracking-widest transition-colors px-2 line-clamp-2">
          {category.name}
        </span>
        <span className="block text-[8px] text-slate-400 font-medium uppercase tracking-tighter opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
          Lihat Produk
        </span>
      </div>
    </motion.div>
  );
}
