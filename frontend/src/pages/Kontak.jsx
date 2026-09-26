import React, { useEffect, useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  FileText,
  CreditCard,
  PenTool,
  Package,
  Wallet,
  CheckCircle2,
  ChevronRight,
  PhoneCall, // Mengganti Headset menjadi PhoneCall agar aman
  Sparkles
} from "lucide-react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";

export default function Kontak() {
  const [officers, setOfficers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const API_URL = import.meta.env.VITE_API_URL;
    fetch(`${API_URL}/api/contacts`)
      .then((res) => res.json())
      .then((data) => {
        setOfficers(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetch contacts:", err);
        setLoading(false);
      });
  }, []);

  const steps = [
    { icon: <MessageCircle className="w-5 h-5" />, title: "Hubungi CS" },
    { icon: <FileText className="w-5 h-5" />, title: "Blueprint / Penawaran" },
    { icon: <CreditCard className="w-5 h-5" />, title: "DP Minimal 40%" },
    { icon: <PenTool className="w-5 h-5" />, title: "Proses Produksi" },
    { icon: <Package className="w-5 h-5" />, title: "QC & Pengepakan" },
    { icon: <Wallet className="w-5 h-5" />, title: "Pelunasan" },
  ];

  return (
    <div className="bg-[#FAFAFA] min-h-screen font-sans text-slate-900 pb-10">
      {/* HEADER SECTION */}
      <div className="bg-slate-950 pt-32 pb-20 px-6 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-[100px] pointer-events-none" />
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-center gap-2 mb-4"
        >
          <PhoneCall size={16} className="text-orange-500" />
          <span className="text-orange-500 font-black text-xs uppercase tracking-[0.3em]">Direct Support</span>
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-black text-white tracking-tight"
        >
          CONTACT <span className="text-orange-500 italic">OFFICERS.</span>
        </motion.h1>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 -mt-10 relative z-20">
        
        {/* CUSTOMER RELATION OFFICERS */}
        <section className="mb-24">
          <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl shadow-slate-200/50 border border-slate-100">
            <div className="flex items-center gap-4 mb-12">
              <h2 className="text-xs font-black uppercase tracking-[0.3em] text-slate-900 shrink-0">Official Staff</h2>
              <div className="h-px bg-slate-100 w-full"></div>
            </div>

            {loading ? (
              <div className="text-center py-20 text-slate-400 font-bold uppercase tracking-widest text-xs">Loading contacts...</div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                {officers.map((officer, index) => (
                  <motion.div key={index} whileHover={{ y: -10 }} className="flex flex-col items-center text-center group">
                    <div className="w-24 h-24 bg-slate-50 rounded-full mb-6 border-2 border-dashed border-slate-200 group-hover:border-orange-500 transition-colors flex items-center justify-center overflow-hidden">
                      {officer.image ? (
                        <img src={`${import.meta.env.VITE_API_URL}/storage/${officer.image}`} className="w-full h-full object-cover" />
                      ) : (
                        <span className="font-black text-slate-300">RAW</span>
                      )}
                    </div>
                    <h3 className="font-black text-slate-900 text-sm mb-1">{officer.title}</h3>
                    <p className="text-[10px] text-slate-400 uppercase font-black mb-6 tracking-widest">{officer.text}</p>
<a 
  href={`https://api.whatsapp.com/send/?phone=${officer.phone}&text=${encodeURIComponent("Halo, saya ingin konsultasi.")}&type=phone_number&app_absent=0`} 
  target="_blank" 
  rel="noreferrer" 
  className="w-full py-3 bg-slate-900 hover:bg-orange-500 text-white text-[10px] font-black rounded-xl transition-all"
>
  WHATSAPP
</a>



                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* ALUR PEMESANAN */}
        <section className="mb-24">
          <div className="bg-slate-900 rounded-[3rem] p-10 md:p-16 shadow-2xl relative overflow-hidden text-center border border-white/5">
            <h2 className="text-white text-2xl md:text-3xl font-black mb-12 italic uppercase tracking-tight relative z-10">
              Alur Pemesanan <span className="text-orange-500">Mudah.</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 relative z-10">
              {steps.map((step, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-orange-500 mb-4 border border-white/10">{step.icon}</div>
                  <h3 className="text-[10px] font-black text-slate-100 uppercase tracking-widest">{step.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* INFO GRID & STANDAR LAYANAN */}
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7 space-y-4">
             <h2 className="text-xs font-black uppercase tracking-[0.3em] mb-4 text-slate-900">Company Details</h2>
             {[
               { icon: <Phone size={20}/>, label: "Call Center", value: "+62 851 8301 0279" },
               { icon: <Mail size={20}/>, label: "Official Email", value: "rumpunartwork@gmail.com" },
               { icon: <MapPin size={20}/>, label: "Workshop", value: "Miniatur Art Work, Jawa Tengah" }
             ].map((item, idx) => (
               <div key={idx} className="bg-white border border-slate-100 p-6 rounded-[2rem] flex items-center gap-6 shadow-sm">
                 <div className="p-4 bg-slate-50 rounded-2xl text-orange-500">{item.icon}</div>
                 <div>
                   <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{item.label}</p>
                   <p className="text-sm font-black text-slate-800">{item.value}</p>
                 </div>
               </div>
             ))}
          </div>

          <div className="lg:col-span-5">
            <div className="bg-white border border-slate-100 rounded-[2.5rem] p-10 shadow-sm border-t-4 border-t-orange-500 h-full">
              <h3 className="text-xs font-black text-slate-900 mb-8 uppercase tracking-[0.3em] flex items-center gap-2">
                <Sparkles size={14} className="text-orange-500" /> Layanan Premium
              </h3>
              <ul className="space-y-6">
                {["Dukungan blueprint teknis.", "Privasi proyek terjamin.", "Konsultasi skala profesional.", "Garansi pengiriman aman."].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4 text-[11px] font-bold text-slate-500 uppercase tracking-tighter">
                    <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
