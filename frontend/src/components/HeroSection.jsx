import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Award,
} from "lucide-react";

// 1. IMPORT GAMBAR DARI ASSETS
import heroImg from "../assets/3.png";

export default function HeroSection() {
  return (
    <section className="relative bg-[#F8FAFC] overflow-hidden pt-12 pb-24 border-b border-slate-200/80">
      {/* Dynamic Ambient Blur Layer (Memberi Depth & Kehangatan agar tidak flat) */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-100/60 rounded-full blur-[130px] pointer-events-none -z-0" />
      <div className="absolute bottom-5 left-10 w-[420px] h-[420px] bg-amber-100/50 rounded-full blur-[110px] pointer-events-none -z-0" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* SISI KIRI: TEKS EDITORIAL BERKELAS */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Curated Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/80 text-[#0F2744] text-[11px] font-semibold uppercase tracking-[0.2em] mb-6 shadow-sm">
              <Sparkles size={14} className="text-amber-500 fill-amber-500" />
              <span>Curated Corporate Merchandise</span>
            </div>

            {/* Headline Editorial */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light leading-[1.1] mb-6 text-slate-950 tracking-tight">
              Diameter <br />
              <span className="font-semibold text-[#0F2744] italic relative inline-block">
                Souvenir.
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3 text-amber-400/70"
                  viewBox="0 0 200 8"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M1 5.5C40 2 120 2 199 5.5"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 mb-10 leading-relaxed max-w-xl font-normal">
              Spesialis pengadaan cenderamata korporat kustom, gift set
              eksklusif, dan plakat presisi tinggi. Menggabungkan kurasi
              material pilihan dengan pengerjaan detail untuk menyempurnakan
              impresi prestisius brand dan instansi Anda.
            </p>

            {/* Tombol Tindakan / CTA */}
            <div className="flex flex-wrap gap-4 items-center">
              <Button
                onClick={() => {
                  const elem = document.getElementById("products");
                  if (elem) elem.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-[#0F2744] hover:bg-[#1D4ED8] text-white h-14 px-8 rounded-2xl text-sm font-semibold shadow-xl shadow-blue-950/15 transition-all duration-300 hover:-translate-y-1 flex items-center gap-2"
              >
                <span>Jelajahi Katalog</span>
                <ArrowRight size={18} />
              </Button>

              <a
                href="https://wa.me/6281259724486?text=Halo%20Diameter%20Souvenir%2C%20saya%20ingin%20konsultasi%20tentang%20pemesanan%20katalog%20souvenir."
                target="_blank"
                rel="noreferrer"
                className="h-14 px-8 rounded-2xl text-sm font-semibold border-2 border-slate-200 hover:border-[#0F2744] hover:text-[#0F2744] transition-all bg-white text-slate-700 flex items-center justify-center gap-2 shadow-sm"
              >
                <MessageCircle size={18} className="text-emerald-500" />
                <span>Konsultasi WhatsApp</span>
              </a>
            </div>

            {/* Quick Metrics Trust Bar */}
            <div className="mt-12 pt-8 border-t border-slate-200/80 flex flex-wrap items-center gap-6 text-xs text-slate-500 font-medium">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Kapasitas Produksi Skala Besar
              </div>
              <span>•</span>
              <div>Custom Logo & Finishing Presisi</div>
              <span>•</span>
              <div>Garansi Standar Mutu</div>
            </div>
          </motion.div>

          {/* SISI KANAN: FRAME VISUAL PORTOFOLIO */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative w-full flex justify-center lg:justify-end items-center"
          >
            {/* Ambient Backlight */}
            <div className="absolute w-[85%] h-[85%] bg-blue-100/70 rounded-full blur-[80px] -z-10" />

            <div className="relative w-full max-w-[540px]">
              {/* Frame Foto Utama bergaya Gallery Canvas */}
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="relative z-10 bg-white p-3 md:p-4 rounded-[2.5rem] shadow-[0_20px_50px_rgba(15,39,68,0.08)] border border-slate-200/90"
              >
                <div className="overflow-hidden rounded-[2rem] bg-slate-100 aspect-video flex items-center justify-center relative group">
                  <img
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    alt="Diameter Souvenir Showcase"
                    src={heroImg}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F2744]/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>

              {/* Badge Kiri Atas - Garansi Presisi */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-4 -left-3 md:-left-6 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl z-20 flex items-center gap-3 border border-slate-100"
              >
                <div className="w-9 h-9 bg-blue-50 border border-blue-100 rounded-xl flex items-center justify-center text-blue-700">
                  <ShieldCheck size={20} />
                </div>
                <div className="pr-2">
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                    Kualitas
                  </p>
                  <p className="text-xs font-bold text-slate-900">
                    Kurasi Presisi
                  </p>
                </div>
              </motion.div>

              {/* Badge Kanan Bawah - Luxury Dark Pill Kontras */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{
                  duration: 4,
                  delay: 0.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-4 -right-3 md:-right-6 bg-[#0F2744] px-5 py-3 rounded-2xl shadow-xl z-20 text-white border border-[#1E3A8A]"
              >
                <div className="flex items-center gap-3">
                  <Award size={20} className="text-amber-400" />
                  <div>
                    <span className="block text-amber-400 font-extrabold text-sm leading-none">
                      100% Premium
                    </span>
                    <span className="text-[9px] uppercase font-medium tracking-widest text-slate-300 mt-1 block">
                      Craftsmanship
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
