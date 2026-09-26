import React, { useState, useEffect } from "react";
import { Factory, Box, Maximize2, X, Camera, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Galeri() {
  const [galleryData, setGalleryData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(null); 
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const API_URL = import.meta.env.VITE_API_URL;
    fetch(`${API_URL}/api/galleries`)
      .then(res => res.json())
      .then(data => setGalleryData(data))
      .catch(err => console.error("Error fetch galleries:", err));
  }, []);

  const filteredImages =
    filter === "all"
      ? galleryData
      : galleryData.filter(item => item.type === filter);

  return (
    <div className="bg-[#FAFAFA] min-h-screen text-slate-900 font-sans pb-24">
      
      {/* HEADER - Updated to Slate & Orange */}
      <div className="relative pt-32 pb-20 text-center bg-slate-950 overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <Sparkles size={16} className="text-orange-500" />
            <span className="text-orange-500 font-black text-xs uppercase tracking-[0.3em]">Visual Showcase</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-white tracking-tight"
          >
            ART <span className="text-orange-500 italic">GALLERY.</span>
          </motion.h1>
          <p className="text-slate-500 text-[10px] md:text-xs uppercase tracking-[0.4em] font-bold mt-6">
            Inovasi Produksi & Hasil Karya Miniatur Terbaik
          </p>
        </div>
      </div>

      {/* FILTER TAB - Updated UI */}
      <div className="container mx-auto px-6 -mt-8 relative z-20">
        <div className="flex justify-center mb-16">
          <div className="inline-flex p-2 bg-white rounded-[1.5rem] shadow-xl shadow-slate-200/50 border border-slate-100">
            {[
              { id: "all", label: "Semua", icon: <Camera size={14} /> },
              { id: "produksi", label: "Produksi", icon: <Factory size={14} /> },
              { id: "produk", label: "Produk", icon: <Box size={14} /> },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`flex items-center gap-2 px-8 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all duration-300 ${
                  filter === tab.id
                    ? "bg-orange-500 text-white shadow-lg shadow-orange-200"
                    : "text-slate-400 hover:text-orange-500"
                }`}
              >
                {tab.icon} {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* GRID GALERI - More Professional Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <AnimatePresence mode='popLayout'>
            {filteredImages.map((item, i) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="group relative rounded-[2rem] overflow-hidden bg-white border border-slate-100 cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500"
                onClick={() => setCurrentIndex(i)}
              >
                <div className="aspect-square overflow-hidden bg-slate-50">
                  <img
                    src={`${import.meta.env.VITE_API_URL}/storage/${item.url}`}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                {/* Hover Overlay with Orange Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-orange-600/80 via-orange-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                  <span className="text-[9px] font-black text-white/80 uppercase tracking-widest mb-1">
                    {item.type}
                  </span>
                  <div className="flex justify-between items-center text-white">
                    <h3 className="text-sm font-black uppercase tracking-tight truncate pr-4">
                      {item.title}
                    </h3>
                    <div className="w-8 h-8 bg-white/20 backdrop-blur-md rounded-lg flex items-center justify-center">
                      <Maximize2 size={14} className="text-white" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* LIGHTBOX - Updated to Dark Theme with Orange Accents */}
      {currentIndex !== null && (
        <div
          className="fixed inset-0 bg-slate-950/95 backdrop-blur-xl flex items-center justify-center z-[100] p-4"
          onClick={() => setCurrentIndex(null)}
        >
          <div className="relative max-w-5xl w-full flex items-center justify-center">
            {/* Close Button */}
            <button
              className="absolute -top-16 right-0 text-white hover:text-orange-500 transition-colors bg-white/5 p-3 rounded-full border border-white/10"
              onClick={() => setCurrentIndex(null)}
            >
              <X size={24} />
            </button>

            {/* Tombol Prev */}
            <button
              className="absolute -left-4 md:left-4 w-12 h-12 flex items-center justify-center bg-white/5 border border-white/10 rounded-full text-white hover:bg-orange-500 hover:border-orange-500 transition-all text-2xl z-20"
              onClick={(e) => {
                e.stopPropagation();
                setCurrentIndex(
                  (currentIndex - 1 + filteredImages.length) % filteredImages.length
                );
              }}
            >
              ‹
            </button>

            {/* Gambar aktif */}
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              src={`${import.meta.env.VITE_API_URL}/storage/${filteredImages[currentIndex].url}`}
              alt={filteredImages[currentIndex].title}
              className="max-w-full max-h-[75vh] rounded-[2.5rem] shadow-[0_0_50px_rgba(249,115,22,0.2)] border border-white/10 object-contain bg-slate-900"
            />

            {/* Info Title in Lightbox */}
            <div className="absolute -bottom-16 left-0 right-0 text-center">
               <p className="text-orange-500 font-black text-sm uppercase tracking-widest">{filteredImages[currentIndex].title}</p>
            </div>

            {/* Tombol Next */}
            <button
              className="absolute -right-4 md:right-4 w-12 h-12 flex items-center justify-center bg-white/5 border border-white/10 rounded-full text-white hover:bg-orange-500 hover:border-orange-500 transition-all text-2xl z-20"
              onClick={(e) => {
                e.stopPropagation();
                setCurrentIndex((currentIndex + 1) % filteredImages.length);
              }}
            >
              ›
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
