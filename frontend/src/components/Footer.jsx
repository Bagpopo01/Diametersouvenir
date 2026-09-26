import { Instagram, Facebook, Twitter, Youtube, Send, MapPin, Phone, Box } from 'lucide-react';
// Pastikan path logo sudah sesuai
import LogoDHS from '../assets/Logo DHS.png'; 

const BrandLogo = () => (
  <div className="flex items-center space-x-3">
    <img 
      src={LogoDHS} 
      alt="Rumpun Art Work Logo" 
      className="w-12 h-12 object-contain" 
    />
    <div className="flex flex-col">
      <span className="text-2xl font-black tracking-tight leading-none text-white">
        Rumpun<span className="text-orange-500"> Art Work</span>
      </span>
      <span className="text-[10px] uppercase tracking-[0.3em] text-orange-500 font-bold mt-1">
        Specialist Miniature
      </span>
    </div>
  </div>
);

export default function Footer() {
  return (
    <footer className="relative bg-[#0a0a0a] text-white pt-24 pb-10 overflow-hidden">
      {/* Garis aksen orange di bagian atas */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-50" />
      
      {/* Dekorasi Background - Glow Orange */}
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-orange-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-20">
          
          {/* Kolom Brand */}
          <div className="lg:col-span-4 space-y-8">
            <BrandLogo />
            <p className="text-slate-400 leading-relaxed max-w-sm text-sm font-medium">
              Studio kreatif spesialis pembuatan miniature custom dengan presisi tinggi. Menghadirkan detail tanpa batas untuk setiap proyek eksklusif Anda.
            </p>
            <div className="flex items-center gap-3">
              {[Instagram, Facebook, Twitter, Youtube].map((Icon, idx) => (
                <a 
                  key={idx} 
                  href="#" 
                  className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-orange-500 hover:-translate-y-1 transition-all duration-300 border border-white/5 group"
                >
                  <Icon size={18} className="text-slate-400 group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Kolom Koleksi Miniature */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-orange-500">Kategori</h4>
            <div className="space-y-4 text-sm font-medium text-slate-400">
              <p className="hover:text-orange-500 cursor-pointer transition-colors">Miniatur Kapal</p>
              <p className="hover:text-orange-500 cursor-pointer transition-colors">Maket Arsitektur</p>
              <p className="hover:text-orange-500 cursor-pointer transition-colors">Diorama Custom</p>
              <p className="hover:text-orange-500 cursor-pointer transition-colors">Miniatur Alat Berat</p>
            </div>
          </div>

          {/* Kolom Informasi */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-orange-500">Navigasi</h4>
            <div className="space-y-4 text-sm font-medium text-slate-400">
              <p className="hover:text-orange-500 cursor-pointer transition-colors">Tentang Kami</p>
              <p className="hover:text-orange-500 cursor-pointer transition-colors">Proses Produksi</p>
              <p className="hover:text-orange-500 cursor-pointer transition-colors">E-Katalog</p>
              <p className="hover:text-orange-500 cursor-pointer transition-colors">Kontak</p>
            </div>
          </div>

          {/* Kolom Newsletter */}
          <div className="lg:col-span-4 space-y-6">
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-orange-500">Update Proyek</h4>
            <p className="text-sm text-slate-400 font-medium">
              Dapatkan informasi mengenai proyek terbaru dan penawaran spesial langsung di email Anda.
            </p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Email anda..." 
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:border-orange-500 transition-colors text-white"
              />
              <button className="absolute right-2 top-2 bottom-2 px-4 bg-orange-500 rounded-xl hover:bg-orange-600 transition-all flex items-center justify-center">
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-[10px] tracking-[0.3em] uppercase font-black">
            © {new Date().getFullYear()} RUMPUN ART WORK. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-6 text-[10px] font-black uppercase tracking-widest text-slate-600">
            <span className="hover:text-orange-500 cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-orange-500 cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
