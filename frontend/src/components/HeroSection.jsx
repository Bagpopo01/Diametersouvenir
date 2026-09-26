import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, MessageCircle, ShieldCheck, Zap } from 'lucide-react';

// 1. IMPORT GAMBAR DARI ASSETS
// Sesuaikan nama file 'hero-miniature.png' dengan nama file asli di folder assets kamu
import heroImg from '../assets/3.png'; 

export default function HeroSection() {
  return (
    <section className="relative bg-[#FAFAFA] overflow-hidden pt-10 pb-20">
      {/* Ornamen Background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-100/40 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* SISI KIRI: TEKS */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-orange-600 text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
              <Zap size={14} className="fill-orange-500" /> Premium Miniature Studio
            </div>
            
            <h1 className="text-6xl lg:text-7xl font-black leading-[1.1] mb-6 text-slate-900">
              Rumpun Art <br />
              <span className="text-orange-500 italic">Work.</span>
            </h1>
            
            <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-lg">
             Rumpun Art Work memiliki bidang usaha yang bergerak di bidang handycraft. Produk
              kami berupa heavy utility model, terkhusus miniatur kapal dan produk-produk yang
              berhubungan dengan dunia maritim dan masih banyak scale model lainnya sesuai
              permintaan. Bahan utama dari material resin, fiber, dan acrilyc.
              Sebagai gift ataupun koleksi pribadi, mari wujudkan bersama Rumpun Art Work. 
            </p>

           <div className="flex flex-wrap gap-4">
  <Button
    className="bg-orange-500 hover:bg-orange-600 text-white h-14 px-8 rounded-2xl text-md font-bold shadow-xl shadow-orange-200 transition-all hover:-translate-y-1 gap-2"
  >
    Jelajahi Produk <ArrowRight size={18} />
  </Button>

  <a
    href="https://wa.me/6281259724486?text=Halo%20Rumpun%20Artwork%2C%20saya%20ingin%20konsultasi%20tentang%20produk%20dan%20layanan%20Anda."
    target="_blank"
    rel="noreferrer"
    className="h-14 px-8 rounded-2xl text-md font-bold border-2 border-slate-200 hover:border-orange-500 hover:text-orange-500 transition-all bg-white flex items-center justify-center"
  >
    Hubungi Kami
  </a>
</div>

          </motion.div>

          {/* Visual Kanan - Compact & Modern */}
<motion.div
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8 }}
  className="relative w-full flex justify-center lg:justify-end items-center"
>
  {/* Glow Background - Diperkecil agar tidak terlalu menyebar */}
  <div className="absolute w-[80%] h-[80%] bg-orange-100/50 rounded-full blur-[80px] -z-10" />

  <div className="relative w-full max-w-[550px]"> {/* Lebar maksimal dikurangi sedikit */}
    
    {/* Frame Gambar - Dibuat lebih rendah (Landscape) */}
    <motion.div 
      whileHover={{ y: -5 }}
      className="relative z-10 bg-white p-2 md:p-3 rounded-[2rem] shadow-[0_15px_40px_rgba(0,0,0,0.08)] border border-slate-100"
    >
      {/* Menggunakan aspect-video agar kontainer mengikuti bentuk horizontal miniatur */}
      <div className="overflow-hidden rounded-[1.5rem] bg-slate-50 aspect-video flex items-center justify-center">
        <img
          className="w-full h-full object-cover" // Gunakan object-cover agar gambar penuh & pas
          alt="Rumpun Art Work Miniature"
          src={heroImg} 
        />
      </div>
    </motion.div>

    {/* Badge Kiri Atas - Ukuran disesuaikan */}
    <motion.div 
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="absolute -top-4 -left-4 md:-left-8 bg-white/95 backdrop-blur-sm p-3 rounded-xl shadow-lg z-20 flex items-center gap-3 border border-orange-100"
    >
      <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center text-white">
        <ShieldCheck size={18} />
      </div>
      <div className="pr-2">
        <p className="text-[9px] text-slate-400 font-bold uppercase tracking-tighter">Premium</p>
        <p className="text-xs font-bold text-slate-800">Detail Presisi</p>
      </div>
    </motion.div>

    {/* Badge Kanan Bawah - Dibuat lebih kecil & elegan */}
    <motion.div 
      animate={{ y: [0, 8, 0] }}
      transition={{ duration: 4, delay: 1, repeat: Infinity, ease: "easeInOut" }}
      className="absolute -bottom-4 -right-4 md:-right-6 bg-slate-900 px-4 py-3 rounded-2xl shadow-xl z-20 text-white border border-slate-700"
    >
      <div className="text-center">
        <span className="block text-orange-400 font-black text-xl leading-none">100%</span>
        <span className="text-[8px] uppercase font-bold tracking-widest text-slate-400 mt-1 block">Handmade</span>
      </div>
    </motion.div>

    {/* Dekorasi tipis di belakang */}
    <div className="absolute -bottom-2 -left-2 w-16 h-16 bg-orange-500/10 rounded-xl -z-10 rotate-6" />
  </div>
</motion.div>


        </div>
      </div>
    </section>
  );
}
