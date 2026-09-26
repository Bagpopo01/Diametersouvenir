import { motion } from "framer-motion";
import {
  Send,
  Palette,
  Settings,
  Truck,
  ArrowRight,
  MousePointer2,
} from "lucide-react";

export default function WorkflowSteps() {
  const steps = [
    {
      id: 1,
      icon: <MousePointer2 className="w-8 h-8" />,
      title: "Konsultasi Ide",
      description:
        "Sampaikan konsep, skala, atau referensi objek yang ingin Anda jadikan miniature.",
      color: "from-blue-600 to-sky-500",
    },
    {
      id: 2,
      icon: <Palette className="w-8 h-8" />,
      title: "Proses Desain",
      description:
        "Tim ahli kami menyiapkan cetak biru (blueprint) digital untuk memastikan akurasi detail.",
      color: "from-slate-800 to-[#0F2744]",
    },
    {
      id: 3,
      icon: <Settings className="w-8 h-8" />,
      title: "Produksi Presisi",
      description:
        "Proses pengerjaan tangan (handmade) dimulai dengan ketelitian tinggi di setiap sudutnya.",
      color: "from-amber-500 to-amber-600",
    },
    {
      id: 4,
      icon: <Truck className="w-8 h-8" />,
      title: "Pengiriman Aman",
      description:
        "Miniature dikemas dengan proteksi ekstra dan dikirim aman hingga ke alamat Anda.",
      color: "from-[#0F2744] to-slate-900",
    },
  ];

  return (
    <section
      id="workflow"
      className="py-24 bg-[#F8FAFC] overflow-hidden relative border-t border-slate-200/80"
    >
      {/* Background Decor - Ambient Blur Halus */}
      <div className="absolute top-0 right-1/4 w-[450px] h-[450px] bg-blue-100/50 rounded-full blur-[130px] pointer-events-none -z-0" />
      <div className="absolute bottom-0 left-10 w-[380px] h-[380px] bg-amber-100/40 rounded-full blur-[120px] pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-8 h-[2px] bg-amber-400"></span>
            <span className="text-[#0F2744] font-bold text-xs uppercase tracking-[0.3em]">
              Easy Process
            </span>
            <span className="w-8 h-[2px] bg-amber-400"></span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 tracking-tight">
            Cara Kami Mewujudkan <br className="hidden md:block" />
            <span className="text-blue-700 italic">Miniature Impian Anda.</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
            Proses kolaboratif dan transparan untuk memastikan setiap detail
            karya seni Anda terwujud dengan sempurna.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="relative">
          {/* Garis Penghubung Desktop */}
          <div className="hidden lg:block absolute top-[28%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent -z-10"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="relative group flex flex-col items-center text-center"
              >
                {/* Number Badge Modern */}
                <div className="absolute top-0 right-1/4 lg:right-10 w-12 h-12 bg-white border border-slate-200 rounded-2xl flex items-center justify-center font-black text-[#0F2744] shadow-md z-20 group-hover:bg-[#0F2744] group-hover:text-amber-400 transition-all duration-300">
                  0{step.id}
                </div>

                {/* Icon Container */}
                <div
                  className={`w-28 h-28 mb-10 rounded-[2.5rem] bg-gradient-to-br ${step.color} flex items-center justify-center text-white shadow-xl shadow-slate-200 group-hover:rotate-12 transition-all duration-500 ring-8 ring-white`}
                >
                  {step.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-700 transition-colors">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed font-normal px-4">
                  {step.description}
                </p>

                {/* Arrow Icon for Mobile/Tablet */}
                {index !== steps.length - 1 && (
                  <div className="lg:hidden mt-10 text-slate-300">
                    <ArrowRight className="rotate-90 md:rotate-0 w-8 h-8" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24 flex flex-col items-center"
        >
          <button
            onClick={() => window.open("https://wa.me", "_blank")}
            className="group relative bg-[#0F2744] text-white px-10 py-5 rounded-2xl font-bold text-xs uppercase tracking-[0.2em] overflow-hidden transition-all hover:bg-blue-700 shadow-xl active:scale-95"
          >
            <span className="relative z-10 flex items-center gap-3">
              Mulai Konsultasi Gratis{" "}
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </span>
          </button>
          <p className="mt-6 text-slate-400 text-xs font-medium italic">
            *Waktu pengerjaan bergantung pada tingkat kerumitan desain.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
