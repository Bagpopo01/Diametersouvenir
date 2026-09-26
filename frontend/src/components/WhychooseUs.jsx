import { motion } from 'framer-motion';
import { ShieldCheck, Clock, CheckCircle2, Sparkles, Box } from 'lucide-react';

const ReasonCard = ({ reason, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.2 }}
    whileHover={{ x: 10 }}
    className="group flex items-start gap-5 bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-orange-100/50 transition-all duration-300"
  >
    <div className={`flex-shrink-0 w-14 h-14 flex items-center justify-center rounded-2xl ${reason.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
      {reason.icon}
    </div>
    <div>
      <h3 className="text-lg font-black text-slate-900 mb-1 group-hover:text-orange-500 transition-colors">
        {reason.title}
      </h3>
      <p className="text-sm text-slate-500 leading-relaxed font-medium">
        {reason.description}
      </p>
    </div>
  </motion.div>
);

export default function WhyChooseUs() {
  const reasons = [
    {
      id: 1,
      title: "Presisi Tanpa Batas",
      description: "Setiap detail dikerjakan secara akurat sesuai dengan desain asli dan skala yang diinginkan.",
      icon: <Box className="w-7 h-7" />,
      color: "bg-gradient-to-br from-orange-400 to-orange-600"
    },
    {
      id: 2,
      title: "Timeline Terukur",
      description: "Proses pengerjaan terstruktur untuk memastikan proyek miniature Anda selesai tepat waktu.",
      icon: <Clock className="w-7 h-7" />,
      color: "bg-gradient-to-br from-slate-700 to-slate-900"
    },
    {
      id: 3,
      title: "Kualitas Material",
      description: "Menggunakan bahan pilihan yang tahan lama untuk menjaga nilai estetika karya seni Anda.",
      icon: <CheckCircle2 className="w-7 h-7" />,
      color: "bg-gradient-to-br from-orange-500 to-orange-700"
    },
  ];

  return (
    <section className="relative py-24 bg-[#FAFAFA] overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-100/40 rounded-full blur-[100px] -z-10" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Kiri: Headline (Span 5) */}
          <div className="lg:col-span-5 space-y-8 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 border border-orange-100 text-orange-600 text-[10px] font-black uppercase tracking-[0.3em] mb-6">
                <Sparkles size={14} /> Expert Craftsmanship
              </span>
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-[1.1]">
                Masterpiece <br />
                <span className="text-orange-500 italic">Miniature Studio.</span>
              </h2>
              <p className="mt-8 text-lg text-slate-600 leading-relaxed font-medium max-w-md">
                Kami menggabungkan seni tangan tradisional dengan teknologi modern untuk menciptakan miniatur yang memukau.
              </p>
              
              <div className="pt-6 hidden lg:block">
                 <div className="h-1 w-24 bg-orange-500 rounded-full"></div>
              </div>
            </motion.div>
          </div>

          {/* Tengah: Animasi (Span 3) */}
          <div className="lg:col-span-3 hidden lg:flex justify-center relative">
            <motion.div
              animate={{ 
                y: [0, -30, 0],
                opacity: [0.1, 0.3, 0.1]
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="text-[18rem] font-black text-orange-500 select-none opacity-10 italic"
            >
              R
            </motion.div>
          </div>

          {/* Kanan: List (Span 4) */}
          <div className="lg:col-span-4 space-y-6">
            {reasons.map((reason, index) => (
              <ReasonCard key={reason.id} reason={reason} index={index} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
