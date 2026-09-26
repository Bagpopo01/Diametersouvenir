import {
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  Send,
  MapPin,
  Phone,
  Box,
  Sparkles,
} from "lucide-react";
// Pastikan path logo sudah sesuai
import LogoDHS from "../assets/Logo DHS.png";

const BrandLogo = () => (
  <div className="flex items-center space-x-3 group">
    <img
      src={LogoDHS}
      alt="Diameter Souvenir Logo"
      className="w-12 h-12 object-contain transition-transform duration-300 group-hover:scale-105"
    />
    <div className="flex flex-col">
      <span className="text-xl font-bold tracking-tight leading-none text-white">
        Diameter <span className="text-sky-400 font-light">Souvenir</span>
      </span>
      <span className="text-[10px] uppercase tracking-[0.25em] text-amber-400 font-semibold mt-1">
        Custom Merchandise
      </span>
    </div>
  </div>
);

export default function Footer() {
  return (
    <footer className="relative bg-[#060D17] text-white pt-24 pb-12 overflow-hidden border-t border-slate-800/80">
      {/* Garis Aksen Halus Emas & Biru Safir di Bagian Atas */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-amber-400/40 to-transparent" />

      {/* Dekorasi Background - Subtle Warm & Cool Ambient Glow */}
      <div className="absolute -bottom-24 -left-20 w-80 h-80 bg-blue-600/10 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute top-10 right-0 w-72 h-72 bg-amber-400/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 mb-20">
          {/* Kolom Brand */}
          <div className="lg:col-span-4 space-y-6">
            <BrandLogo />
            <p className="text-slate-400 leading-relaxed max-w-sm text-sm font-light">
              Studio kreatif penyedia cinderamata korporat kustom, gift set
              eksklusif, plakat, dan merchandise bernilai estetika tinggi untuk
              memperkuat impresi instansi serta momen berharga Anda.
            </p>
            <div className="flex items-center gap-3 pt-2">
              {[
                { Icon: Instagram, link: "https://instagram.com" },
                { Icon: Facebook, link: "https://facebook.com" },
                { Icon: Twitter, link: "https://twitter.com" },
                { Icon: Youtube, link: "https://youtube.com" },
              ].map(({ Icon, link }, idx) => (
                <a
                  key={idx}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/[0.04] flex items-center justify-center hover:bg-sky-500 hover:text-white text-slate-400 hover:-translate-y-1 transition-all duration-300 border border-white/5 shadow-sm"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Kolom Koleksi Kategori */}
          <div className="lg:col-span-2 space-y-5">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-400">
              Kategori
            </h4>
            <div className="space-y-3 text-sm font-light text-slate-300">
              <p className="hover:text-sky-400 cursor-pointer transition-colors">
                Corporate Gift Set
              </p>
              <p className="hover:text-sky-400 cursor-pointer transition-colors">
                Plakat & Trophy
              </p>
              <p className="hover:text-sky-400 cursor-pointer transition-colors">
                Custom Tumbler
              </p>
              <p className="hover:text-sky-400 cursor-pointer transition-colors">
                Leather Goods
              </p>
              <p className="hover:text-sky-400 cursor-pointer transition-colors">
                Eco Merchandise
              </p>
            </div>
          </div>

          {/* Kolom Navigasi */}
          <div className="lg:col-span-2 space-y-5">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-400">
              Navigasi
            </h4>
            <div className="space-y-3 text-sm font-light text-slate-300">
              <p className="hover:text-sky-400 cursor-pointer transition-colors">
                Tentang Kami
              </p>
              <p className="hover:text-sky-400 cursor-pointer transition-colors">
                Katalog Lengkap
              </p>
              <p className="hover:text-sky-400 cursor-pointer transition-colors">
                Mitra Rekanan
              </p>
              <p className="hover:text-sky-400 cursor-pointer transition-colors">
                Hubungi Kami
              </p>
            </div>
          </div>

          {/* Kolom Newsletter / Quick Inquiries */}
          <div className="lg:col-span-4 space-y-5">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-400">
              Katalog & Penawaran
            </h4>
            <p className="text-sm text-slate-400 font-light leading-relaxed">
              Dapatkan pembaruan katalog musiman dan penawaran korporat khusus
              langsung ke kotak masuk email Anda.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="relative">
              <input
                type="email"
                placeholder="Alamat email Anda..."
                className="w-full bg-white/[0.04] border border-white/10 rounded-2xl px-5 py-3.5 pr-14 text-sm focus:outline-none focus:border-sky-400 transition-colors text-white placeholder-slate-500"
              />
              <button
                type="submit"
                aria-label="Kirim Email"
                className="absolute right-2 top-2 bottom-2 px-3.5 bg-gradient-to-r from-blue-600 to-sky-500 rounded-xl hover:from-blue-500 hover:to-sky-400 transition-all flex items-center justify-center text-white shadow-sm active:scale-95"
              >
                <Send size={15} />
              </button>
            </form>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-[11px] tracking-wider uppercase font-medium">
            © {new Date().getFullYear()} DIAMETER SOUVENIR. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-6 text-[11px] font-medium tracking-wider text-slate-500">
            <span className="hover:text-sky-400 cursor-pointer transition-colors">
              Kebijakan Privasi
            </span>
            <span className="hover:text-sky-400 cursor-pointer transition-colors">
              Syarat & Ketentuan
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
