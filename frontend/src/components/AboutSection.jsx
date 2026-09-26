import { motion } from 'framer-motion';
import { MapPin, Box, Users, ArrowRight, Target } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-gradient-to-br from-slate-900 via-slate-900 to-orange-950 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Teks Kiri */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 bg-orange-500/20 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-[0.2em] mb-8 border border-orange-500/30 text-orange-400">
              <Target size={14} className="animate-pulse" />
              <span>Spesialis Miniature</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tight">
              Rumpun Art Work <br /> 
              <span className="text-orange-500 italic">& Detail Presisi.</span>
            </h2>
            
            <p className="text-lg text-slate-300 mb-10 leading-relaxed max-w-xl">
             Selain scale model, kami juga menyediakan jasa laser cutting.
Kami memberikan standar kualitas produk, keunikan variasi desain dan
kemiripan dengan unit asli mencapai 99%. Kami juga memiliki kapasitas
yang memadai. Kami berharap produk - produk yang kami tawarkan
sesuai taste dan target perusahaan.

            </p>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-6 mb-12">
              <motion.div 
                whileHover={{ y: -8, backgroundColor: "rgba(249, 115, 22, 0.1)" }}
                className="bg-white/5 backdrop-blur-md p-8 rounded-[2rem] border border-white/10 transition-all shadow-lg"
              >
                <Box className="w-8 h-8 text-orange-500 mb-4" />
                <div className="text-4xl font-black text-white italic">100%</div>
                <div className="text-slate-400 text-xs font-bold uppercase tracking-widest mt-2">Detail Handmade</div>
              </motion.div>

              <motion.div 
                whileHover={{ y: -8, backgroundColor: "rgba(249, 115, 22, 0.1)" }}
                className="bg-white/5 backdrop-blur-md p-8 rounded-[2rem] border border-white/10 transition-all shadow-lg"
              >
                <Users className="w-8 h-8 text-orange-500 mb-4" />
                <div className="text-4xl font-black text-white italic">500+</div>
                <div className="text-slate-400 text-xs font-bold uppercase tracking-widest mt-2">Proyek Custom</div>
              </motion.div>
            </div>

            <button 
              onClick={() => window.open('https://wa.me/6281259724486?text=Halo%20Rumpun%20Artwork%2C%20saya%20ingin%20konsultasi%20tentang%20produk%20dan%20layanan%20Anda.', '_blank')}
              className="flex items-center space-x-3 bg-orange-500 text-white px-10 py-5 rounded-2xl font-black hover:bg-orange-600 transition-all group shadow-xl shadow-orange-950/40"
            >
              <span>Konsultasi Proyek</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </button>
          </motion.div>

          {/* Sisi Kanan: Peta Workshop (Update Link Baru) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -top-10 -right-10 w-72 h-72 bg-orange-500/20 rounded-full blur-[100px] animate-pulse"></div>
            
            <div className="relative bg-white p-3 rounded-[2.5rem] shadow-2xl overflow-hidden border border-white/10">
              <div className="rounded-[2rem] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.2785919908324!2d110.16850377500026!3d-7.32257179268561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a829a11ffc29d%3A0xe56536f4f2eace33!2sMiniatur%20Art%20Work!5e0!3m2!1sen!2sid!4v1776425622803!5m2!1sen!2sid"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokasi Miniatur Art Work"
                ></iframe>
              </div>
              
              <div className="mt-6 flex items-center justify-between px-4 pb-4">
                <div className="flex items-center text-slate-800">
                  <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center mr-4">
                    <MapPin className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter leading-none">Workshop & Studio</p>
                    <p className="text-sm font-black">Miniatur Art Work, Jawa Tengah</p>
                  </div>
                </div>
                <a 
                  href="https://goo.gl" // Ganti dengan shortlink maps yang sesuai jika ada
                  target="_blank"
                  className="bg-slate-900 text-white px-5 py-2.5 rounded-xl text-xs font-bold hover:bg-orange-500 transition-colors"
                >
                  Lihat Lokasi
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
