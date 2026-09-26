import { motion } from "framer-motion";
import { MapPin, Box, Users, ArrowRight, Target } from "lucide-react";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-br from-[#071526] via-[#0b1c33] to-[#071526] text-white overflow-hidden relative"
    >
      {/* Subtle Ambient Background Light */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-sky-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Teks Kiri */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge Pill */}
            <div className="inline-flex items-center space-x-2 bg-blue-500/10 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-[0.2em] mb-8 border border-sky-400/30 text-sky-400 backdrop-blur-sm">
              <Target size={14} className="animate-pulse text-sky-400" />
              <span>Dedicated Craftsmanship</span>
            </div>

            {/* Headline Editorial */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight mb-8 leading-tight tracking-tight">
              Diameter Souvenir <br />
              <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-200 to-white">
                & Detail Presisi.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-300/80 mb-10 leading-relaxed max-w-xl font-light">
              Kami memadukan teknik pengerjaan presisi dengan kurasi material
              terbaik untuk menghasilkan cenderamata kustom bernilai estetika
              tinggi. Setiap detail dirancang untuk merepresentasikan identitas
              brand serta menyempurnakan momen penting perusahaan Anda dengan
              standar kualitas tanpa kompromi.
            </p>

            {/* Stats Cards Glassmorphism */}
            <div className="grid grid-cols-2 gap-6 mb-12">
              <motion.div
                whileHover={{ y: -6, backgroundColor: "rgba(15, 39, 68, 0.6)" }}
                className="bg-[#0F2744]/40 backdrop-blur-xl p-8 rounded-3xl border border-sky-500/20 transition-all shadow-lg shadow-black/20"
              >
                <Box className="w-8 h-8 text-sky-400 mb-4" />
                <div className="text-4xl font-extrabold text-white tracking-tight">
                  100%
                </div>
                <div className="text-slate-400 text-xs font-medium uppercase tracking-widest mt-2">
                  Detail Handmade
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -6, backgroundColor: "rgba(15, 39, 68, 0.6)" }}
                className="bg-[#0F2744]/40 backdrop-blur-xl p-8 rounded-3xl border border-sky-500/20 transition-all shadow-lg shadow-black/20"
              >
                <Users className="w-8 h-8 text-sky-400 mb-4" />
                <div className="text-4xl font-extrabold text-white tracking-tight">
                  500+
                </div>
                <div className="text-slate-400 text-xs font-medium uppercase tracking-widest mt-2">
                  Proyek Custom
                </div>
              </motion.div>
            </div>

            {/* CTA Button Konsultasi */}
            <button
              onClick={() =>
                window.open(
                  "https://wa.me/6281259724486?text=Halo%20Diameter%20Souvenir%2C%20saya%20ingin%20konsultasi%20tentang%20proyek%20souvenir%20dan%20merchandise.",
                  "_blank",
                )
              }
              className="flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-sky-600 text-white px-10 py-5 rounded-2xl font-semibold tracking-wide hover:from-blue-500 hover:to-sky-500 transition-all group shadow-xl shadow-blue-900/40 active:scale-95"
            >
              <span>Konsultasi Proyek</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </button>
          </motion.div>

          {/* Sisi Kanan: Peta Workshop Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -top-10 -right-10 w-72 h-72 bg-sky-500/15 rounded-full blur-[90px] animate-pulse pointer-events-none" />

            <div className="relative bg-[#0F2744]/60 backdrop-blur-xl p-3.5 rounded-[2.5rem] shadow-2xl overflow-hidden border border-sky-500/20">
              <div className="rounded-[2rem] overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.2785919908324!2d110.16850377500026!3d-7.32257179268561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a829a11ffc29d%3A0xe56536f4f2eace33!2sMiniatur%20Art%20Work!5e0!3m2!1sen!2sid!4v1776425622803!5m2!1sen!2sid"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokasi Diameter Souvenir Workshop"
                />
              </div>

              <div className="mt-5 flex items-center justify-between px-4 pb-3">
                <div className="flex items-center text-slate-200">
                  <div className="w-10 h-10 bg-blue-500/20 border border-sky-400/30 rounded-xl flex items-center justify-center mr-4 shadow-sm">
                    <MapPin className="w-5 h-5 text-sky-400" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider leading-none">
                      Workshop & Studio
                    </p>
                    <p className="text-sm font-bold text-white mt-1">
                      Diameter Souvenir Studio
                    </p>
                  </div>
                </div>
                <a
                  href="https://goo.gl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-sky-500 text-white px-5 py-2.5 rounded-xl text-xs font-semibold tracking-wider uppercase transition-colors shadow-sm"
                >
                  Buka Peta
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
