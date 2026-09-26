import { motion } from 'framer-motion';
import { Send, Palette, Settings, Truck, ArrowRight, MousePointer2 } from 'lucide-react';

export default function WorkflowSteps() {
  const steps = [
    {
      id: 1,
      icon: <MousePointer2 className="w-8 h-8" />,
      title: "Konsultasi Ide",
      description: "Sampaikan konsep, skala, atau referensi objek yang ingin Anda jadikan miniature.",
      color: "from-orange-400 to-orange-600",
    },
    {
      id: 2,
      icon: <Palette className="w-8 h-8" />,
      title: "Proses Desain",
      description: "Tim ahli kami menyiapkan cetak biru (blueprint) digital untuk memastikan akurasi detail.",
      color: "from-slate-700 to-slate-900",
    },
    {
      id: 3,
      icon: <Settings className="w-8 h-8" />,
      title: "Produksi Presisi",
      description: "Proses pengerjaan tangan (handmade) dimulai dengan ketelitian tinggi di setiap sudutnya.",
      color: "from-orange-500 to-orange-700",
    },
    {
      id: 4,
      icon: <Truck className="w-8 h-8" />,
      title: "Pengiriman Aman",
      description: "Miniature dikemas dengan proteksi ekstra dan dikirim aman hingga ke alamat Anda.",
      color: "from-slate-800 to-black",
    },
  ];

  return (
    <section id="workflow" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-8 h-[2px] bg-orange-500"></span>
            <span className="text-orange-600 font-black text-xs uppercase tracking-[0.3em]">Easy Process</span>
            <span className="w-8 h-[2px] bg-orange-500"></span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 tracking-tight">
            Cara Kami Mewujudkan <br className="hidden md:block" />
            <span className="text-orange-500 italic">Miniature Impian Anda.</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">
            Proses kolaboratif dan transparan untuk memastikan setiap detail karya seni Anda terwujud dengan sempurna.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="relative">
          {/* Garis Penghubung Desktop dengan Gradasi Orange */}
          <div className="hidden lg:block absolute top-[28%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-orange-100 to-transparent -z-10"></div>

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
                <div className="absolute top-0 right-1/4 lg:right-10 w-12 h-12 bg-white border-2 border-orange-50 rounded-2xl flex items-center justify-center font-black text-orange-600 shadow-xl shadow-orange-100/50 z-20 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                  0{step.id}
                </div>

                {/* Icon Container - Glassmorphism touch */}
                <div className={`w-28 h-28 mb-10 rounded-[2.5rem] bg-gradient-to-br ${step.color} flex items-center justify-center text-white shadow-2xl shadow-orange-200 group-hover:rotate-12 transition-all duration-500 ring-8 ring-white`}>
                  {step.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-black text-slate-900 mb-4 group-hover:text-orange-600 transition-colors">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed font-medium px-4">
                  {step.description}
                </p>

                {/* Arrow Icon for Mobile/Tablet */}
                {index !== steps.length - 1 && (
                  <div className="lg:hidden mt-10 text-orange-200">
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
            onClick={() => window.open('https://wa.me', '_blank')}
            className="group relative bg-slate-900 text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] overflow-hidden transition-all hover:bg-orange-500 hover:shadow-[0_20px_40px_rgba(249,115,22,0.3)] shadow-xl"
          >
            <span className="relative z-10 flex items-center gap-3">
              Mulai Konsultasi Gratis <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
          <p className="mt-6 text-slate-400 text-xs font-bold italic">
            *Waktu pengerjaan bergantung pada tingkat kerumitan desain.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
