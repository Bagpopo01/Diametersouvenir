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
  PhoneCall,
  Sparkles,
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
    <div className="bg-[#F8FAFC] min-h-screen font-sans text-slate-900 pb-10 relative overflow-hidden">
      {/* Background Ambient Blurs */}
      <div className="absolute top-28 right-1/4 w-[480px] h-[480px] bg-blue-100/50 rounded-full blur-[140px] pointer-events-none -z-0" />
      <div className="absolute top-96 left-10 w-[400px] h-[400px] bg-amber-100/40 rounded-full blur-[120px] pointer-events-none -z-0" />

      {/* HEADER SECTION - Editorial Navy Canvas */}
      <div className="bg-gradient-to-b from-[#0b1c33] via-[#071526] to-[#040d18] pt-32 pb-24 px-6 text-center relative overflow-hidden border-b border-[#0F2744]">
        <div className="absolute -top-16 -right-16 w-72 h-72 bg-sky-500/15 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-72 h-72 bg-amber-400/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center justify-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-blue-500/10 text-sky-400 border border-sky-400/30 mb-6 backdrop-blur-sm"
          >
            <PhoneCall size={14} className="text-amber-400" />
            <span>Direct Support</span>
            <Sparkles size={14} className="text-amber-400 fill-amber-400" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extralight text-white tracking-tight"
          >
            Hubungi{" "}
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-200 to-white italic">
              Konsultan Kami.
            </span>
          </motion.h1>

          <p className="text-slate-400 text-xs sm:text-sm font-light tracking-wide mt-4 max-w-lg mx-auto">
            Tim representatif Diameter Souvenir siap mendampingi perencanaan
            souvenir dan merchandise instansi Anda.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 -mt-8 relative z-20">
        {/* CUSTOMER RELATION OFFICERS */}
        <section className="mb-20">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-[0_4px_25px_rgba(15,39,68,0.08)] border border-slate-200/90">
            <div className="flex items-center gap-4 mb-10">
              <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-900 shrink-0">
                Official Support Team
              </h2>
              <div className="h-px bg-slate-100 w-full"></div>
            </div>

            {loading ? (
              <div className="text-center py-20 text-slate-400 font-medium tracking-wider text-xs">
                Memuat kontak staf...
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
                {officers.map((officer, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -6 }}
                    className="flex flex-col items-center text-center group"
                  >
                    <div className="w-24 h-24 bg-slate-50 rounded-full mb-5 border-2 border-dashed border-slate-200 group-hover:border-sky-500 transition-colors flex items-center justify-center overflow-hidden shadow-inner">
                      {officer.image ? (
                        <img
                          src={`${import.meta.env.VITE_API_URL}/storage/${officer.image}`}
                          alt={officer.title || "Officer"}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      ) : (
                        <span className="font-bold text-xs text-[#0F2744]">
                          DHS
                        </span>
                      )}
                    </div>

                    <h3 className="font-semibold text-slate-900 text-sm mb-1 group-hover:text-blue-700 transition-colors">
                      {officer.title}
                    </h3>
                    <p className="text-[10px] text-slate-400 uppercase font-semibold mb-5 tracking-wider">
                      {officer.text}
                    </p>

                    <a
                      href={`https://api.whatsapp.com/send/?phone=${officer.phone}&text=${encodeURIComponent("Halo, saya ingin konsultasi souvenir.")}&type=phone_number&app_absent=0`}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full py-3 bg-[#0F2744] hover:bg-blue-700 text-white text-[11px] font-semibold tracking-wider rounded-xl transition-all shadow-sm active:scale-95 flex items-center justify-center gap-1.5"
                    >
                      <MessageCircle size={14} className="text-emerald-400" />
                      <span>WHATSAPP</span>
                    </a>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* ALUR PEMESANAN */}
        <section className="mb-20">
          <div className="bg-gradient-to-br from-[#0b1c33] via-[#071526] to-[#040d18] rounded-3xl p-10 md:p-14 shadow-2xl relative overflow-hidden text-center border border-sky-500/25">
            <div className="absolute top-0 right-0 w-80 h-80 bg-sky-500/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-400/5 rounded-full blur-[100px] pointer-events-none" />

            <h2 className="text-white text-2xl md:text-3xl font-light mb-12 tracking-tight relative z-10">
              Alur Pemesanan{" "}
              <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-200 to-white italic">
                Transparan & Mudah.
              </span>
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 relative z-10">
              {steps.map((step, index) => (
                <div key={index} className="flex flex-col items-center group">
                  <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-sky-400 mb-4 border border-white/10 group-hover:scale-105 group-hover:border-sky-400/50 transition-all shadow-md">
                    {step.icon}
                  </div>
                  <h3 className="text-xs font-semibold text-slate-200 uppercase tracking-wider">
                    {step.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* INFO GRID & STANDAR LAYANAN */}
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Company Details */}
          <div className="lg:col-span-7 space-y-4">
            <h2 className="text-xs font-semibold uppercase tracking-wider mb-4 text-slate-900">
              Detail Perusahaan
            </h2>
            {[
              {
                icon: <Phone size={18} />,
                label: "Call Center / WA",
                value: "+62 812 5972 4486",
              },
              {
                icon: <Mail size={18} />,
                label: "Email Resmi",
                value: "hello@diametersouvenir.com",
              },
              {
                icon: <MapPin size={18} />,
                label: "Studio & Workshop",
                value: "Diameter Souvenir Workshop, Indonesia",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200/90 p-5 rounded-2xl flex items-center gap-5 shadow-[0_4px_20px_rgba(15,39,68,0.04)]"
              >
                <div className="p-3.5 bg-blue-50 text-blue-700 rounded-xl">
                  {item.icon}
                </div>
                <div>
                  <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-0.5">
                    {item.label}
                  </p>
                  <p className="text-sm font-semibold text-slate-800">
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Standar Layanan */}
          <div className="lg:col-span-5">
            <div className="bg-white border border-slate-200/90 rounded-3xl p-8 shadow-[0_4px_20px_rgba(15,39,68,0.04)] border-t-4 border-t-[#0F2744] h-full flex flex-col justify-between">
              <div>
                <h3 className="text-xs font-semibold text-slate-900 mb-6 uppercase tracking-wider flex items-center gap-2">
                  <Sparkles
                    size={14}
                    className="text-amber-500 fill-amber-500"
                  />{" "}
                  Jaminan Layanan Kustom
                </h3>
                <ul className="space-y-4">
                  {[
                    "Dukungan asistensi desain & mockup logo.",
                    "Kerahasiaan spesifikasi proyek terjamin.",
                    "Konsultasi fleksibel & ramah anggaran.",
                    "Garansi mutu material dan ketepatan pengiriman.",
                  ].map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-xs font-medium text-slate-600"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400 font-medium">
                <span>Diameter Souvenir Service</span>
                <span className="text-sky-600 font-semibold">
                  100% Quality Assured
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20">
        <Footer />
      </div>
    </div>
  );
}
