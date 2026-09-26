import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { X, LayoutGrid, Sparkles } from "lucide-react";

export default function Clients() {
  const [clients, setClients] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const API_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000";

  useEffect(() => {
    fetch(`${API_URL}/api/clients`)
      .then((res) => res.json())
      .then((data) => setClients(Array.isArray(data) ? data : data.data || []))
      .catch((err) => console.error("Error loading clients:", err));
  }, [API_URL]);

  const duplicatedClients =
    clients.length > 0 ? [...clients, ...clients, ...clients] : [];

  return (
    <section
      id="clients"
      className="py-24 bg-[#071526] overflow-hidden relative text-white border-t border-[#0F2744]"
    >
      {/* Ambient Glow Latar Belakang */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[600px] h-[300px] bg-sky-500/10 rounded-full blur-[140px] pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-blue-500/10 text-sky-400 border border-sky-400/30 mb-6 backdrop-blur-sm">
            <Sparkles size={13} className="text-sky-400 animate-pulse" />
            <span>Trusted Partnerships</span>
          </div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-extralight tracking-tight leading-tight">
            Telah Dipercaya Oleh <br className="hidden md:block" />
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-200 to-white italic">
              Berbagai Instansi & Perusahaan.
            </span>
          </h2>
        </motion.div>

        {/* Infinite Scroll Container Marquee */}
        <div className="relative flex overflow-hidden group mb-14">
          {/* Subtle Edge Fade Gradien Midnight */}
          <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-[#071526] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-[#071526] to-transparent z-10 pointer-events-none" />

          {clients.length > 0 ? (
            <motion.div
              className="flex gap-16 md:gap-24 items-center py-6"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 35, ease: "linear", repeat: Infinity }}
            >
              {duplicatedClients.map((client, index) => (
                <div
                  key={`${client.id}-${index}`}
                  className="flex-shrink-0 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 hover:scale-105 p-3 rounded-2xl bg-white/5 border border-white/5 hover:border-sky-500/30 backdrop-blur-sm"
                >
                  <img
                    src={`${API_URL}/storage/${client.image}`}
                    alt={client.name}
                    className="h-10 md:h-12 w-auto object-contain filter invert brightness-200 contrast-100 hover:filter-none transition-all duration-300"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = `https://placehold.co/120x45/0F2744/38BDF8?text=${encodeURIComponent(client.name || "Client")}`;
                    }}
                  />
                </div>
              ))}
            </motion.div>
          ) : (
            <div className="w-full text-center text-sky-400/60 animate-pulse text-xs uppercase tracking-widest py-10 font-medium">
              Memuat Mitra Rekanan...
            </div>
          )}
        </div>

        {/* Action Button - LIHAT SEMUA LOGO */}
        <div className="flex flex-col items-center gap-5">
          <button
            onClick={() => setIsModalOpen(true)}
            className="group flex items-center gap-3 bg-[#0F2744]/70 border border-sky-500/30 hover:border-sky-400 px-8 py-4 rounded-2xl shadow-lg hover:shadow-sky-500/20 hover:bg-blue-600/20 backdrop-blur-xl transition-all duration-300 active:scale-95"
          >
            <LayoutGrid
              size={18}
              className="text-sky-400 group-hover:rotate-90 transition-transform duration-500"
            />
            <span className="text-xs font-semibold text-slate-200 group-hover:text-white uppercase tracking-widest">
              Lihat Semua Mitra
            </span>
          </button>

          <p className="text-[11px] font-medium text-slate-400 tracking-wider">
            Serta <span className="text-sky-400 font-semibold">100+</span>{" "}
            Instansi Korporasi & Pemerintahan Lainnya
          </p>
        </div>
      </div>

      {/* MODAL OVERLAY - Menampilkan Semua Logo dalam Grid Glassmorphism */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
          >
            {/* Backdrop Gelap Blur */}
            <div
              className="absolute inset-0 bg-[#040d18]/80 backdrop-blur-xl"
              onClick={() => setIsModalOpen(false)}
            />

            {/* Modal Content Frame */}
            <motion.div
              initial={{ scale: 0.94, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.94, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-5xl bg-[#0b1c33] rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col max-h-[90vh] border border-sky-500/25"
            >
              {/* Modal Header */}
              <div className="p-8 border-b border-[#0F2744] flex justify-between items-center bg-[#071526]/95 backdrop-blur-md sticky top-0 z-10">
                <div>
                  <h4 className="text-2xl font-light text-white tracking-tight">
                    Mitra{" "}
                    <span className="font-semibold text-sky-400">
                      Diameter Souvenir
                    </span>
                  </h4>
                  <p className="text-xs text-slate-400 font-medium uppercase tracking-widest mt-1">
                    Daftar Lengkap Instansi, BUMN & Perusahaan
                  </p>
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-3 bg-[#0F2744] text-slate-300 hover:text-white rounded-full hover:bg-rose-500/20 hover:text-rose-400 transition-all"
                  aria-label="Tutup"
                >
                  <X size={22} />
                </button>
              </div>

              {/* Modal Body - Grid Logo dengan Minimalist Scrollbar */}
              <div
                className="p-8 md:p-12 overflow-y-auto 
                           [&::-webkit-scrollbar]:w-1.5
                           [&::-webkit-scrollbar-track]:bg-[#071526]/50
                           [&::-webkit-scrollbar-track]:rounded-full
                           [&::-webkit-scrollbar-thumb]:bg-blue-600/50
                           [&::-webkit-scrollbar-thumb]:rounded-full
                           hover:[&::-webkit-scrollbar-thumb]:bg-sky-400"
                style={{
                  scrollbarWidth: "thin",
                  scrollbarColor: "#2563EB40 transparent",
                }}
              >
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8 items-center justify-items-center">
                  {clients.map((client) => (
                    <motion.div
                      key={client.id}
                      whileHover={{ scale: 1.05 }}
                      className="w-full flex items-center justify-center p-5 rounded-2xl bg-[#0F2744]/40 border border-sky-500/15 hover:border-sky-400/60 shadow-md hover:shadow-sky-500/10 transition-all duration-300"
                    >
                      <img
                        src={`${API_URL}/storage/${client.image}`}
                        alt={client.name}
                        title={client.name}
                        className="max-h-12 md:max-h-14 w-auto object-contain filter invert brightness-200 contrast-100 hover:filter-none transition-all duration-300"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = `https://placehold.co/120x45/0F2744/38BDF8?text=${encodeURIComponent(client.name || "Client")}`;
                        }}
                      />
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-5 bg-[#071526] border-t border-[#0F2744] text-center">
                <p className="text-[11px] text-slate-400 font-medium uppercase tracking-[0.2em]">
                  Diameter Souvenir Portfolio © {new Date().getFullYear()}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
