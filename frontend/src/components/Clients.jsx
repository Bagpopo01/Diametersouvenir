import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { X, LayoutGrid } from 'lucide-react'; // Tambah icon untuk UI lebih keren

export default function Clients() {
  const [clients, setClients] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false); // State untuk Modal
  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';
useEffect(() => {
  fetch(`${API_URL}/api/clients`)
    .then((res) => res.json())
    .then((data) => setClients(data))
    .catch((err) => console.error("Error loading clients:", err));
}, [API_URL]);

  const duplicatedClients = clients.length > 0 ? [...clients, ...clients, ...clients] : [];

  return (
    <section id="clients" className="py-24 bg-[#FAFAFA] overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-orange-600 font-black text-sm uppercase tracking-[0.3em] mb-4">
            Trusted Partnerships
          </h3>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
            Telah Dipercaya Oleh <br className="hidden md:block" />
            <span className="text-orange-500 italic">Berbagai Instansi & Perusahaan.</span>
          </h2>
        </motion.div>

        {/* Infinite Scroll Container */}
        <div className="relative flex overflow-hidden group mb-12">
          <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-[#FAFAFA] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-[#FAFAFA] to-transparent z-10 pointer-events-none"></div>

          {clients.length > 0 ? (
            <motion.div 
              className="flex gap-16 md:gap-24 items-center py-4"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 40, ease: "linear", repeat: Infinity }}
            >
              {duplicatedClients.map((client, index) => (
                <div key={`${client.id}-${index}`} className="flex-shrink-0 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                  <img
                    src={`${API_URL}/storage/${client.image}`}
                    alt={client.name}
                    className="h-10 md:h-12 w-auto object-contain"
                    onError={(e) => { e.target.src = `https://placehold.co/100x40?text=${encodeURIComponent(client.name)}`; }}
                  />
                </div>
              ))}
            </motion.div>
          ) : (
            <div className="w-full text-center text-orange-200 animate-pulse text-xs uppercase tracking-widest py-10">Memuat Mitra...</div>
          )}
        </div>

        {/* Action Button - LIHAT SEMUA LOGO */}
        <div className="flex flex-col items-center gap-6">
          <button 
            onClick={() => setIsModalOpen(true)}
            className="group flex items-center gap-3 bg-white border border-slate-200 px-8 py-4 rounded-2xl shadow-xl shadow-slate-200/50 hover:border-orange-500 transition-all active:scale-95"
          >
            <LayoutGrid size={18} className="text-orange-500 group-hover:rotate-90 transition-transform duration-500" />
            <span className="text-xs font-black text-slate-700 uppercase tracking-widest">Lihat Semua Mitra</span>
          </button>

          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            Dan <span className="text-orange-600">100+</span> Instansi Lainnya
          </p>
        </div>
      </div>

      {/* MODAL OVERLAY - Menampilkan Semua Logo dalam Grid */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10"
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-md" onClick={() => setIsModalOpen(false)}></div>
            
            {/* Modal Content */}
            <motion.div 
              initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-5xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
            >
              {/* Modal Header */}
              <div className="p-8 border-b border-slate-50 flex justify-between items-center bg-white sticky top-0 z-10">
                <div>
                  <h4 className="text-xl font-black text-slate-900 tracking-tighter">Our Partners</h4>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-1">Daftar Lengkap Instansi & Perusahaan</p>
                </div>
                <button onClick={() => setIsModalOpen(false)} className="p-3 bg-slate-50 rounded-full hover:bg-orange-500 hover:text-white transition-all">
                  <X size={24} />
                </button>
              </div>

              {/* Modal Body - Grid Logo */}
              <div className="p-8 md:p-12 overflow-y-auto custom-scrollbar">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-12 items-center justify-items-center">
                  {clients.map((client) => (
                    <motion.div 
                      key={client.id}
                      whileHover={{ scale: 1.1 }}
                      className="w-full flex items-center justify-center p-4 rounded-2xl border border-slate-50 hover:border-orange-100 hover:shadow-lg hover:shadow-orange-50 transition-all duration-300"
                    >
                      <img
                        src={`${API_URL}/storage/${client.image}`}
                        alt={client.name}
                        title={client.name}
                        className="max-h-12 md:max-h-16 w-auto object-contain"
                        
                      />
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-6 bg-slate-50 text-center">
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em]">Rumpun Artwork Portfolio © 2024</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
