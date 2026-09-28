import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  ArrowRight,
  Send,
  Sparkles,
} from "lucide-react";

function ContactSection() {
  const contactInfo = [
    {
      title: "Email",
      text: "Kirim konsep, brief desain, atau penawaran proyek",
      link: "mailto:hello@diametersouvenir.com",
      icon: <Mail size={24} />,
      color: "bg-blue-600/20 text-sky-400 border border-sky-400/30",
    },
    {
      title: "Telepon / WhatsApp",
      text: "Konsultasi langsung bersama tim konsultan kami",
      link: "https://wa.me/6285183010279?text=Halo%20Diameter%20Souvenir%2C%20saya%20ingin%20konsultasi%20pemesanan%20katalog%20souvenir.",
      icon: <Phone size={24} />,
      color:
        "bg-gradient-to-tr from-blue-600 to-sky-500 text-white shadow-lg shadow-blue-500/25",
    },
    {
      title: "Studio & Workshop",
      text: "Kunjungi workshop & sample display room kami",
      link: "https://maps.app.goo.gl/Uk6WCW4DQP8b7frB9",
      icon: <MapPin size={24} />,
      color: "bg-[#0F2744] text-sky-400 border border-sky-500/30",
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 bg-[#071526] overflow-hidden relative text-white border-t border-[#0F2744]"
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-[140px] pointer-events-none -z-0" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-blue-500/10 text-sky-400 border border-sky-400/30 mb-6 backdrop-blur-sm">
            <Sparkles size={13} className="text-sky-400 animate-pulse" />
            <span>Connect With Us</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-extralight tracking-tight leading-tight">
            Siap Mewujudkan Cenderamata <br className="hidden md:block" />
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-200 to-white italic">
              Eksklusif Perusahaan Anda?
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300/80 mt-6 max-w-2xl mx-auto font-light leading-relaxed">
            Diskusikan kebutuhan merchandise korporat, plakat penghargaan, gift
            set eksekutif, atau cinderamata kustom Anda bersama tim desainer
            Diameter Souvenir.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {contactInfo.map((item, i) => (
            <motion.a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="group relative p-10 bg-[#0F2744]/40 backdrop-blur-xl border border-sky-500/20 rounded-[2.5rem] shadow-lg hover:shadow-[0_20px_40px_-15px_rgba(56,189,248,0.25)] hover:border-sky-400/60 transition-all duration-500 flex flex-col items-center text-center overflow-hidden"
            >
              {/* Subtle Card Glow Effect saat Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div
                className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform duration-300 relative z-10`}
              >
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold text-white mb-2 tracking-tight relative z-10">
                {item.title}
              </h3>

              <p className="text-slate-300/80 font-light mb-8 leading-relaxed text-sm relative z-10">
                {item.text}
              </p>

              <div className="mt-auto flex items-center gap-2 text-sky-400 font-semibold text-xs uppercase tracking-widest group-hover:gap-3 transition-all relative z-10">
                <span>Hubungi Sekarang</span>
                <ArrowRight size={15} />
              </div>
            </motion.a>
          ))}
        </div>

        {/* Floating Contact Card (CTA Proyek Besar Korporasi) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-20 bg-gradient-to-br from-[#0b1c33] via-[#071526] to-[#040d18] rounded-[3rem] p-10 md:p-16 text-center text-white relative overflow-hidden border border-sky-500/25 shadow-2xl"
        >
          {/* Decorative Sapphire Glows */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-sky-500/15 rounded-full blur-[110px] pointer-events-none animate-pulse" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/15 rounded-full blur-[100px] pointer-events-none" />

          <h3 className="text-3xl md:text-5xl font-light mb-6 relative z-10 leading-tight tracking-tight">
            Kebutuhan Pengadaan Massal <br />
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-200 to-white">
              Atau Desain Khusus Skala Besar?
            </span>
          </h3>

          <p className="text-slate-300/80 mb-10 max-w-2xl mx-auto relative z-10 font-light text-base md:text-lg leading-relaxed">
            Kami siap melayani kebutuhan instansi pemerintah, BUMN, perbankan,
            dan korporasi swasta dengan kapasitas produksi teruji, ketepatan
            waktu, dan garansi standar mutu.
          </p>

          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href="https://wa.me/6285183010279?text=Halo%20Diameter%20Souvenir%2C%20kami%20ingin%20konsultasi%20proyek%20pengadaan%20souvenir%20dan%20merchandise%20korporat."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-sky-600 text-white px-10 py-5 rounded-2xl font-semibold text-xs uppercase tracking-widest shadow-xl shadow-blue-950/50 hover:from-blue-500 hover:to-sky-500 transition-all relative z-10 group active:scale-95"
          >
            <MessageCircle
              size={20}
              className="fill-current text-sky-200 group-hover:rotate-12 transition-transform"
            />
            <span>KONSULTASI VIA WHATSAPP</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

export default ContactSection;
