import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ShieldCheck } from "lucide-react";

const HeroImage = () => {
  return (
    <div className="relative flex justify-center items-center w-full max-w-xl mx-auto py-8">
      {/* 1. Dynamic Ambient Light Layer (Aksen Sapphire & Warm Champagne Glow) */}
      <div className="absolute -top-6 -right-6 w-72 h-72 bg-sky-500/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-8 -left-6 w-80 h-80 bg-amber-400/10 rounded-full blur-[110px] pointer-events-none" />

      {/* 2. Floating Image Container */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10 w-full"
      >
        {/* Frame Card Editorial dengan Soft Layered Shadow */}
        <div className="relative rounded-[2.5rem] p-3 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-md border border-white/10 shadow-[0_30px_70px_-15px_rgba(7,21,38,0.5)] overflow-hidden group">
          {/* Gambar Hero Utama */}
          <div className="relative rounded-[2rem] overflow-hidden bg-[#0F2744]">
            <img
              src="https://imagedelivery.net/LqiWLm-3MGbYHtFuUbcBtA/119580eb-abd9-4191-b93a-f01938786700/public"
              alt="Diameter Souvenir Showcase"
              className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            {/* Subtle Gradient Vignette di atas gambar */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#071526]/40 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Floating Pill Badge Kiri Bawah (Eksklusivitas) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="absolute bottom-6 left-6 z-20 flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#071526]/90 backdrop-blur-xl border border-sky-400/30 shadow-lg text-white"
          >
            <ShieldCheck size={16} className="text-sky-400" />
            <span className="text-[11px] font-semibold tracking-wider uppercase">
              Standar Presisi Ekspor
            </span>
          </motion.div>

          {/* Floating Pill Badge Kanan Atas (Aksen Champagne/Gold) */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="absolute top-6 right-6 z-20 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 backdrop-blur-xl border border-amber-400/40 shadow-md text-amber-300"
          >
            <Sparkles size={13} className="text-amber-400 animate-pulse" />
            <span className="text-[10px] font-bold tracking-widest uppercase">
              Bespoke Quality
            </span>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroImage;
