import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X, Clapperboard, Sparkles } from "lucide-react";

export default function VideoShorts() {
  const [shorts, setShorts] = useState([]);
  const [activeVideo, setActiveVideo] = useState(null);

  useEffect(() => {
    const API_URL = import.meta.env.VITE_API_URL;

    fetch(`${API_URL}/api/video-shorts`)
      .then((res) => res.json())
      .then((data) => setShorts(data.data || data))
      .catch((err) => console.error("Error fetch shorts:", err));
  }, []);

  return (
    <section
      id="video-short"
      className="py-28 bg-[#F8FAFC] relative overflow-hidden text-slate-900 border-t border-slate-200/80"
    >
      {/* Dynamic Ambient Blur Layer (Memberi Depth & Kehangatan) */}
      <div className="absolute top-10 right-1/4 w-[480px] h-[480px] bg-blue-100/60 rounded-full blur-[140px] pointer-events-none -z-0" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-amber-100/40 rounded-full blur-[120px] pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header Section dengan Gaya Editorial */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-blue-50 text-blue-800 border border-blue-200/60 mb-4 shadow-sm"
          >
            <Clapperboard className="text-amber-500" size={16} />
            <span>Cinematic Showcase</span>
            <Sparkles size={13} className="text-amber-500 fill-amber-500" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-light text-slate-950 tracking-tight"
          >
            Koleksi Produk dalam{" "}
            <span className="font-semibold text-[#0F2744] underline decoration-amber-400 decoration-2 underline-offset-8">
              Video.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 mt-6 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed font-normal"
          >
            Saksikan keindahan presisi, tekstur material, dan ketelitian detail
            setiap cenderamata kami melalui perspektif gerak yang nyata.
          </motion.p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 md:gap-7">
          {shorts.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="relative group cursor-pointer aspect-[9/16] rounded-3xl overflow-hidden shadow-[0_4px_20px_rgba(15,39,68,0.08)] hover:shadow-[0_16px_35px_rgba(15,39,68,0.18)] bg-slate-200 border border-slate-200/80 transition-all duration-300"
              onClick={() => setActiveVideo(item.video_full_url)}
            >
              {/* Thumbnail Gambar */}
              <img
                src={item.thumbnail_url}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
              />

              {/* Overlay Gradasi & Tombol Play Sapphire/Amber */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-[#071526]/80 group-hover:to-[#0F2744]/90 transition-all duration-500 flex items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.15 }}
                  className="w-13 h-13 bg-gradient-to-tr from-blue-700 to-sky-500 text-white rounded-full flex items-center justify-center shadow-xl shadow-blue-950/40 opacity-90 group-hover:opacity-100 transition-all duration-300 border border-white/30 backdrop-blur-sm"
                >
                  <Play className="fill-current w-5 h-5 ml-1 text-white" />
                </motion.div>
              </div>

              {/* Title Overlay dengan Tipografi Bersih */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#071526] via-[#071526]/60 to-transparent">
                <p className="text-white text-xs font-semibold uppercase tracking-wider leading-snug line-clamp-2 drop-shadow-sm group-hover:text-amber-300 transition-colors">
                  {item.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Fullscreen Video Modal Bergaya Sapphire/Navy Glassmorphism */}
        <AnimatePresence>
          {activeVideo && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-[#040d18]/85 flex items-center justify-center z-[100] p-4 backdrop-blur-xl"
              onClick={() => setActiveVideo(null)}
            >
              <motion.div
                initial={{ scale: 0.9, y: 30 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 30 }}
                transition={{ duration: 0.3 }}
                className="relative bg-black rounded-3xl overflow-hidden w-full max-w-[380px] aspect-[9/16] shadow-2xl shadow-blue-950/50 border border-sky-500/30"
                onClick={(e) => e.stopPropagation()}
              >
                <video
                  src={activeVideo}
                  controls
                  autoPlay
                  className="w-full h-full object-cover"
                />

                {/* Tombol Tutup Modal */}
                <button
                  onClick={() => setActiveVideo(null)}
                  aria-label="Tutup Video"
                  className="absolute top-5 right-5 bg-[#0F2744]/70 hover:bg-rose-600/80 text-white p-2.5 rounded-full transition-all duration-300 border border-white/20 shadow-lg backdrop-blur-md active:scale-95"
                >
                  <X size={20} />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
