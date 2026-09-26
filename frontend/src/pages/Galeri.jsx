import React, { useState, useEffect } from "react";
import {
  Factory,
  Box,
  Maximize2,
  X,
  Camera,
  Sparkles,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Galeri() {
  const [galleryData, setGalleryData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const API_URL = import.meta.env.VITE_API_URL;
    fetch(`${API_URL}/api/galleries`)
      .then((res) => res.json())
      .then((data) =>
        setGalleryData(Array.isArray(data) ? data : data.data || []),
      )
      .catch((err) => console.error("Error fetch galleries:", err));
  }, []);

  const filteredImages =
    filter === "all"
      ? galleryData
      : galleryData.filter((item) => item.type === filter);

  return (
    <div className="bg-[#F8FAFC] min-h-screen text-slate-900 font-sans pb-24 relative overflow-hidden">
      {/* Background Ambient Blurs */}
      <div className="absolute top-20 right-1/4 w-[480px] h-[480px] bg-blue-100/50 rounded-full blur-[140px] pointer-events-none -z-0" />
      <div className="absolute top-96 left-10 w-[420px] h-[420px] bg-amber-100/40 rounded-full blur-[120px] pointer-events-none -z-0" />

      {/* HEADER - Editorial Luxury Navy Canvas */}
      <div className="relative pt-32 pb-24 text-center bg-gradient-to-b from-[#0b1c33] via-[#071526] to-[#040d18] overflow-hidden border-b border-[#0F2744]">
        {/* Glow Halus Emas & Safir */}
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-sky-500/15 rounded-full blur-[110px] pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-amber-400/10 rounded-full blur-[110px] pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center justify-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-blue-500/10 text-sky-400 border border-sky-400/30 mb-6 backdrop-blur-sm"
          >
            <Sparkles size={14} className="text-amber-400 fill-amber-400" />
            <span>Visual Showcase</span>
            <Sparkles size={14} className="text-amber-400 fill-amber-400" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl font-extralight text-white tracking-tight leading-tight"
          >
            Galeri{" "}
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-200 to-white italic">
              Souvenir.
            </span>
          </motion.h1>

          <p className="text-slate-400 text-xs md:text-sm uppercase tracking-[0.3em] font-medium mt-6 max-w-xl mx-auto leading-relaxed">
            Dokumentasi Workshop Produksi & Karya Kustom Diameter Souvenir
          </p>
        </div>
      </div>

      {/* FILTER TAB - Floating Glass Card */}
      <div className="container mx-auto px-6 -mt-7 relative z-20">
        <div className="flex justify-center mb-16">
          <div className="inline-flex p-1.5 bg-white rounded-2xl shadow-[0_4px_25px_rgba(15,39,68,0.08)] border border-slate-200/90 gap-1.5">
            {[
              { id: "all", label: "Semua", icon: <Camera size={14} /> },
              {
                id: "produksi",
                label: "Produksi",
                icon: <Factory size={14} />,
              },
              { id: "produk", label: "Produk", icon: <Box size={14} /> },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`flex items-center gap-2 px-6 sm:px-8 py-3 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-300 active:scale-95 ${
                  filter === tab.id
                    ? "bg-[#0F2744] text-white shadow-md shadow-blue-950/20"
                    : "text-slate-500 hover:text-slate-900 hover:bg-slate-50"
                }`}
              >
                {tab.icon} {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* GRID GALERI */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-7">
          <AnimatePresence mode="popLayout">
            {filteredImages.map((item, i) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group relative rounded-3xl overflow-hidden bg-white border border-slate-200/90 cursor-pointer shadow-[0_4px_20px_rgba(15,39,68,0.05)] hover:shadow-[0_16px_35px_rgba(15,39,68,0.12)] hover:-translate-y-1 transition-all duration-300"
                onClick={() => setCurrentIndex(i)}
              >
                <div className="aspect-square overflow-hidden bg-slate-100 flex items-center justify-center">
                  <img
                    src={`${import.meta.env.VITE_API_URL}/storage/${item.url}`}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=500&auto=format&fit=crop&q=60";
                    }}
                  />
                </div>

                {/* Hover Overlay Bergaya Navy & Sky Blue Glass */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#071526]/90 via-[#071526]/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-5">
                  <span className="text-[10px] font-semibold text-amber-300 uppercase tracking-widest mb-1">
                    {item.type}
                  </span>
                  <div className="flex justify-between items-center text-white">
                    <h3 className="text-xs sm:text-sm font-semibold uppercase tracking-tight truncate pr-3">
                      {item.title}
                    </h3>
                    <div className="w-8 h-8 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/20">
                      <Maximize2 size={14} className="text-white" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty State */}
        {filteredImages.length === 0 && (
          <div className="text-center py-20 bg-white rounded-3xl border border-slate-200/80 max-w-md mx-auto shadow-sm mt-8">
            <Camera size={32} className="mx-auto text-slate-400 mb-3" />
            <h4 className="text-slate-800 font-semibold text-sm">
              Belum Ada Dokumentasi
            </h4>
            <p className="text-slate-400 text-xs mt-1">
              Belum ada foto yang tersedia untuk kategori ini.
            </p>
          </div>
        )}
      </div>

      {/* LIGHTBOX MODAL */}
      <AnimatePresence>
        {currentIndex !== null && (
          <div
            className="fixed inset-0 bg-[#040d18]/90 backdrop-blur-xl flex items-center justify-center z-[100] p-4"
            onClick={() => setCurrentIndex(null)}
          >
            <div className="relative max-w-5xl w-full flex items-center justify-center">
              {/* Close Button */}
              <button
                className="absolute -top-14 right-0 text-slate-300 hover:text-white transition-colors bg-white/10 hover:bg-rose-600/80 p-2.5 rounded-full border border-white/15"
                onClick={() => setCurrentIndex(null)}
                aria-label="Tutup Galeri"
              >
                <X size={20} />
              </button>

              {/* Tombol Prev */}
              <button
                className="absolute -left-3 md:-left-16 w-11 h-11 flex items-center justify-center bg-[#0F2744]/80 border border-sky-400/30 rounded-2xl text-white hover:bg-blue-600 transition-all z-20 backdrop-blur-md active:scale-95 shadow-lg"
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(
                    (currentIndex - 1 + filteredImages.length) %
                      filteredImages.length,
                  );
                }}
                aria-label="Sebelumnya"
              >
                <ChevronLeft size={22} />
              </button>

              {/* Gambar Aktif Frame */}
              <motion.div
                initial={{ scale: 0.92, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.92, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="rounded-3xl overflow-hidden shadow-2xl border border-sky-500/25 bg-[#071526] p-2"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={`${import.meta.env.VITE_API_URL}/storage/${filteredImages[currentIndex].url}`}
                  alt={filteredImages[currentIndex].title}
                  className="max-w-full max-h-[72vh] rounded-2xl object-contain"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=800&auto=format&fit=crop&q=80";
                  }}
                />

                {/* Info Title in Lightbox */}
                <div className="pt-3 pb-1 text-center">
                  <p className="text-amber-400 font-semibold text-xs uppercase tracking-wider">
                    {filteredImages[currentIndex].title}
                  </p>
                  <p className="text-slate-400 text-[10px] uppercase tracking-widest mt-0.5">
                    Kategori: {filteredImages[currentIndex].type}
                  </p>
                </div>
              </motion.div>

              {/* Tombol Next */}
              <button
                className="absolute -right-3 md:-right-16 w-11 h-11 flex items-center justify-center bg-[#0F2744]/80 border border-sky-400/30 rounded-2xl text-white hover:bg-blue-600 transition-all z-20 backdrop-blur-md active:scale-95 shadow-lg"
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex((currentIndex + 1) % filteredImages.length);
                }}
                aria-label="Berikutnya"
              >
                <ChevronRight size={22} />
              </button>
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
