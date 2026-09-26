import { motion } from "framer-motion";
import { Download, Sparkles, FileText } from "lucide-react";
import Logo from "../assets/Logo DHS.png";

export default function CatalogSection() {
  return (
    <section id="catalog" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-gradient-to-br from-slate-900 via-slate-900 to-orange-950 rounded-[3rem] p-8 md:p-20 shadow-2xl overflow-hidden border border-slate-800"
        >
          {/* Ornamen Dekoratif - Orange Glow */}
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2] 
            }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute -top-20 -right-20 w-80 h-80 bg-orange-500/20 rounded-full blur-[100px]"
          />
          <motion.div 
            animate={{ y: [0, 30, 0] }}
            transition={{ duration: 5, repeat: Infinity, delay: 1 }}
            className="absolute -bottom-20 -left-20 w-96 h-96 bg-orange-600/10 rounded-full blur-[120px]"
          />

          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-16">
            
            {/* Sisi Kiri: Visual Logo & Glow */}
            <div className="flex-shrink-0 relative group">
              <div className="absolute inset-0 bg-orange-500/20 rounded-full blur-3xl group-hover:bg-orange-500/30 transition-all duration-500"></div>
              <motion.img
                whileHover={{ rotate: -3, scale: 1.05 }}
                src={Logo}
                alt="Logo Rumpun Art Work"
                className="relative w-64 md:w-80 lg:w-96 object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.5)]"
              />
              
              {/* Floating Badge - Edisi Terbaru */}
              <motion.div 
                initial={{ x: 30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                className="absolute -top-6 -right-6 bg-orange-500 text-white px-5 py-3 rounded-2xl font-black text-xs shadow-2xl flex items-center space-x-2 rotate-12 border border-orange-400"
              >
                <Sparkles size={16} className="fill-current" />
                <span>EDISI 2024</span>
              </motion.div>
            </div>

            {/* Sisi Kanan: Teks & Action */}
            <div className="flex-1 text-center lg:text-left z-10">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="inline-flex items-center space-x-2 bg-orange-500/10 border border-orange-500/20 px-5 py-2 rounded-full text-orange-400 text-[10px] font-black uppercase tracking-[0.3em] mb-8"
              >
                <FileText size={14} />
                <span>Premium E-Catalog PDF</span>
              </motion.div>
              
              <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight tracking-tight">
                Dapatkan Pricelist Terbaru Kami<br />
                <span className="text-orange-500 italic">Terbaru Kami!</span>
              </h2>
              
              <p className="text-lg text-slate-300 mb-12 max-w-xl leading-relaxed">
                Harga terbaru untuk semua produk miniatur kapal dan scale model kami, langsung di ujung jari Anda. Unduh katalog lengkap kami dalam format PDF dan temukan penawaran eksklusif serta detail produk yang selalu diperbarui.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
                <motion.button 
                  whileHover={{ scale: 1.05, backgroundColor: '#f97316', color: '#ffffff' }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto flex items-center justify-center space-x-3 bg-white text-slate-950 font-black px-12 py-5 rounded-[1.5rem] shadow-2xl shadow-orange-950/20 transition-all duration-300 text-lg"
                >
                  <Download size={22} />
                  <span>Download PDF</span>
                </motion.button>
                
                <div className="flex flex-col items-center lg:items-start">
                   <p className="text-orange-500/80 text-sm font-bold">Gratis Akses</p>
                   <p className="text-slate-500 text-xs font-medium italic">
                    *Format PDF (2.4 MB)
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
