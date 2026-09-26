import { motion } from "framer-motion";
import { Download, Sparkles, FileText } from "lucide-react";
import Logo from "../assets/Logo DHS.png";

export default function CatalogSection() {
  return (
    <section
      id="catalog"
      className="py-24 bg-[#071526] overflow-hidden relative"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-gradient-to-br from-[#0b1c33] via-[#071526] to-[#040d18] rounded-[3rem] p-8 md:p-20 shadow-2xl overflow-hidden border border-sky-500/20"
        >
          {/* Ornamen Dekoratif - Sapphire & Sky Blue Glow */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.15, 0.35, 0.15],
            }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-20 -right-20 w-80 h-80 bg-sky-500/20 rounded-full blur-[110px] pointer-events-none"
          />
          <motion.div
            animate={{ y: [0, 30, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              delay: 1,
              ease: "easeInOut",
            }}
            className="absolute -bottom-20 -left-20 w-96 h-96 bg-blue-600/15 rounded-full blur-[130px] pointer-events-none"
          />

          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-16 z-10">
            {/* Sisi Kiri: Visual Logo & Glow Ambient */}
            <div className="flex-shrink-0 relative group">
              <div className="absolute inset-0 bg-sky-400/15 rounded-full blur-3xl group-hover:bg-sky-400/25 transition-all duration-500 pointer-events-none" />
              <motion.img
                whileHover={{ rotate: -2, scale: 1.04 }}
                transition={{ duration: 0.3 }}
                src={Logo}
                alt="Logo Diameter Souvenir"
                className="relative w-64 md:w-80 lg:w-96 object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.6)]"
              />

              {/* Floating Badge - Edisi Eksklusif Terbaru */}
              <motion.div
                initial={{ x: 30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                className="absolute -top-6 -right-6 bg-gradient-to-r from-blue-600 to-sky-500 text-white px-5 py-2.5 rounded-2xl font-bold text-xs shadow-xl flex items-center space-x-2 rotate-12 border border-sky-300/40"
              >
                <Sparkles size={16} className="text-sky-200 fill-current" />
                <span className="tracking-wider">EDISI TERBARU</span>
              </motion.div>
            </div>

            {/* Sisi Kanan: Teks Portofolio & Download Action */}
            <div className="flex-1 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="inline-flex items-center space-x-2 bg-blue-500/10 border border-sky-400/30 px-5 py-2 rounded-full text-sky-400 text-[10px] font-semibold uppercase tracking-[0.25em] mb-8 backdrop-blur-sm"
              >
                <FileText size={14} className="text-sky-400" />
                <span>Premium E-Catalog PDF</span>
              </motion.div>

              <h2 className="text-3xl md:text-5xl lg:text-6xl font-extralight text-white mb-6 leading-tight tracking-tight">
                Unduh Katalog Lengkap & <br />
                <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-200 to-white">
                  Pricelist Eksklusif.
                </span>
              </h2>

              <p className="text-base sm:text-lg text-slate-300/80 mb-10 max-w-xl leading-relaxed font-light">
                Jelajahi ragam koleksi cenderamata korporat kustom, gift set
                eksklusif, dan plakat presisi kami. Temukan inspirasi desain
                serta penawaran terbaik untuk kebutuhan instansi dan perhelatan
                istimewa Anda.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.96 }}
                  className="w-full sm:w-auto flex items-center justify-center space-x-3 bg-gradient-to-r from-blue-600 to-sky-600 text-white font-semibold px-10 py-4.5 rounded-2xl shadow-xl shadow-blue-950/40 hover:from-blue-500 hover:to-sky-500 transition-all duration-300 text-base active:scale-95"
                >
                  <Download size={20} />
                  <span>Download Katalog PDF</span>
                </motion.button>

                <div className="flex flex-col items-center lg:items-start">
                  <p className="text-sky-400 text-sm font-semibold tracking-wide">
                    Akses Langsung Gratis
                  </p>
                  <p className="text-slate-400 text-xs font-light">
                    Format PDF • Siap Cetak & Presentasi
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
