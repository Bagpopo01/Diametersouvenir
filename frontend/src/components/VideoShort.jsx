import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X, Clapperboard } from "lucide-react"; // Tambah ikon Clapperboard

export default function VideoShorts() {
  const [shorts, setShorts] = useState([]);
  const [activeVideo, setActiveVideo] = useState(null);

 useEffect(() => {
  const API_URL = import.meta.env.VITE_API_URL; 
  // contoh: https://admin.rumpunartwork.id/api

 fetch(`${API_URL}/api/video-shorts`)
    .then(res => res.json())
    .then(data => setShorts(data.data || data))
    .catch(err => console.error("Error fetch shorts:", err));
}, []);


  return (
    <section id="video-short" className="py-24 bg-white relative overflow-hidden">
      {/* Aksen Background Orange Soft */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-50 rounded-full blur-[120px] -z-10 opacity-60" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <Clapperboard className="text-orange-500" size={20} />
            <span className="text-orange-600 font-black text-xs uppercase tracking-[0.3em]">Cinematic Showcase</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight"
          >
            Koleksi Produk dalam <span className="text-orange-500 italic">Video.</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 mt-6 max-w-2xl mx-auto text-lg leading-relaxed"
          >
            Saksikan keindahan presisi dan detail setiap karya kami melalui perspektif yang lebih nyata.
          </motion.p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8">
          {shorts.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -12 }}
              className="relative group cursor-pointer aspect-[9/16] rounded-[2rem] overflow-hidden shadow-xl shadow-slate-200/50 bg-slate-100 border-4 border-white"
              onClick={() => setActiveVideo(item.video_full_url)}
            >
              {/* Thumbnail */}
              <img
                src={item.thumbnail_url}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              
              {/* Overlay with Orange Gradient & Play Button */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-orange-950/40 group-hover:to-orange-600/40 transition-all duration-500 flex items-center justify-center">
                <motion.div 
                  whileHover={{ scale: 1.2 }}
                  className="w-14 h-14 bg-orange-500 text-white rounded-full flex items-center justify-center shadow-2xl shadow-orange-500/50 opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100"
                >
                  <Play className="fill-current w-6 h-6 ml-1" />
                </motion.div>
              </div>

              {/* Title Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent">
                <p className="text-white text-xs font-black uppercase tracking-widest leading-snug">
                  {item.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Fullscreen Video Modal - TETAP DENGAN AKSEN ORANGE */}
        <AnimatePresence>
          {activeVideo && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-slate-950/95 flex items-center justify-center z-[100] p-4 backdrop-blur-md"
              onClick={() => setActiveVideo(null)}
            >
              <motion.div
                initial={{ scale: 0.8, y: 50 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.8, y: 50 }}
                className="relative bg-black rounded-[2.5rem] overflow-hidden w-full max-w-[380px] aspect-[9/16] shadow-[0_0_50px_rgba(249,115,22,0.3)] border border-white/20"
                onClick={(e) => e.stopPropagation()}
              >
                <video
                  src={activeVideo}
                  controls
                  autoPlay
                  className="w-full h-full object-cover"
                />
                
                {/* Close Button - Orange Hover */}
                <button
                  onClick={() => setActiveVideo(null)}
                  className="absolute top-6 right-6 bg-white/10 hover:bg-orange-500 backdrop-blur-md text-white p-3 rounded-full transition-all duration-300 border border-white/20 shadow-xl"
                >
                  <X size={24} />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
