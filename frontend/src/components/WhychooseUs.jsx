import { motion } from "framer-motion";
import {
  ShieldCheck,
  Clock,
  CheckCircle2,
  Sparkles,
  Box,
  Award,
} from "lucide-react";

const ReasonCard = ({ reason, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.15, duration: 0.5 }}
    whileHover={{ x: 8 }}
    className="group flex items-start gap-5 bg-white p-6 rounded-3xl border border-slate-200/90 shadow-[0_4px_20px_rgba(15,39,68,0.04)] hover:shadow-[0_12px_30px_rgba(15,39,68,0.1)] hover:border-blue-600/40 transition-all duration-300"
  >
    <div
      className={`flex-shrink-0 w-13 h-13 flex items-center justify-center rounded-2xl ${reason.color} text-white shadow-md group-hover:scale-105 transition-transform duration-300`}
    >
      {reason.icon}
    </div>
    <div>
      <h3 className="text-base font-bold text-slate-900 mb-1 group-hover:text-blue-700 transition-colors">
        {reason.title}
      </h3>
      <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
        {reason.description}
      </p>
    </div>
  </motion.div>
);

export default function WhyChooseUs() {
  const reasons = [
    {
      id: 1,
      title: "Presisi & Detil Kustom",
      description:
        "Setiap cenderamata dikerjakan secara presisi mengikuti spesifikasi brand, logo perusahaan, dan standar kurasi material.",
      icon: <Box className="w-6 h-6" />,
      color: "bg-gradient-to-br from-blue-600 to-sky-500",
    },
    {
      id: 2,
      title: "Timeline & Produksi Terukur",
      description:
        "Manajemen alur kerja terstruktur untuk memastikan pesanan souvenir instansi Anda selesai tepat waktu sesuai tenggat acara.",
      icon: <Clock className="w-6 h-6" />,
      color: "bg-gradient-to-br from-slate-800 to-[#0F2744]",
    },
    {
      id: 3,
      title: "Material Berkualitas Tinggi",
      description:
        "Menggunakan bahan baku premium tahan lama guna menjaga nilai prestisius dan estetika cenderamata Anda.",
      icon: <CheckCircle2 className="w-6 h-6" />,
      color: "bg-gradient-to-br from-amber-500 to-amber-600",
    },
  ];

  return (
    <section className="relative py-28 bg-[#F8FAFC] overflow-hidden border-t border-slate-200/80">
      {/* Background Decor - Ambient Blur Halus */}
      <div className="absolute top-0 right-1/4 w-[480px] h-[480px] bg-blue-100/50 rounded-full blur-[130px] pointer-events-none -z-0" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-amber-100/40 rounded-full blur-[120px] pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Kiri: Headline Editorial (Span 5) */}
          <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/80 text-[#0F2744] text-[11px] font-semibold uppercase tracking-[0.2em] mb-6 shadow-sm">
                <Sparkles size={14} className="text-amber-500 fill-amber-500" />{" "}
                Curated Craftsmanship
              </span>

              <h2 className="text-4xl md:text-5xl font-light text-slate-950 leading-[1.15] tracking-tight">
                Standar Kualitas <br />
                <span className="font-semibold text-[#0F2744] italic underline decoration-amber-400 decoration-2 underline-offset-8">
                  Diameter Souvenir.
                </span>
              </h2>

              <p className="mt-6 text-base text-slate-600 leading-relaxed font-normal max-w-md">
                Mengombinasikan sentuhan keterampilan perajin berpengalaman
                dengan ketelitian kontrol mutu untuk menghadirkan cinderamata
                korporat yang prestisius.
              </p>

              <div className="pt-6 hidden lg:block">
                <div className="h-1 w-20 bg-gradient-to-r from-[#0F2744] to-sky-500 rounded-full"></div>
              </div>
            </motion.div>
          </div>

          {/* Tengah: Monogram / Watermark Dinamis (Span 3) */}
          <div className="lg:col-span-3 hidden lg:flex justify-center relative">
            <motion.div
              animate={{
                y: [0, -20, 0],
                opacity: [0.06, 0.12, 0.06],
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="text-[17rem] font-light text-[#0F2744] select-none pointer-events-none leading-none tracking-tighter"
            >
              D
            </motion.div>
          </div>

          {/* Kanan: List Kartu Alasan (Span 4) */}
          <div className="lg:col-span-4 space-y-4">
            {reasons.map((reason, index) => (
              <ReasonCard key={reason.id} reason={reason} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
