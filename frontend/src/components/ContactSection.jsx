import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, MessageCircle, ArrowRight, Send } from 'lucide-react';

function ContactSection() {
  const contactInfo = [
    {
      title: "Email",
      text: "Kirim konsep atau penawaran proyek",
      link: "mailto:rumpunartwork@gmail.com",
      icon: <Mail size={24} />,
      color: "bg-slate-900"
    },
    {
      title: "Telepon",
      text: "Konsultasi langsung dengan tim teknis",
      link: "tel:+6285183010279",
      icon: <Phone size={24} />,
      color: "bg-orange-500"
    },
    {
      title: "Lokasi",
      text: "Kunjungi workshop & studio kami",
      link: "https://maps.app.goo.gl/Uk6WCW4DQP8b7frB9",
      icon: <MapPin size={24} />,
      color: "bg-slate-800"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Send className="text-orange-500" size={18} />
            <span className="text-orange-600 font-black text-xs uppercase tracking-[0.3em]">Get In Touch</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight">
            Siap Mewujudkan <br className="hidden md:block" />
            <span className="text-orange-500 italic">Miniature Impian Anda?</span>
          </h2>
          <p className="text-lg text-slate-500 mt-8 max-w-2xl mx-auto font-medium leading-relaxed">
            Konsultasikan kebutuhan miniature arsitektur, kendaraan, atau diorama custom Anda secara gratis dengan tim ahli kami.
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
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -12 }}
              className="group relative p-10 bg-white border border-slate-100 rounded-[3rem] shadow-sm hover:shadow-2xl hover:shadow-orange-100/50 transition-all duration-500 flex flex-col items-center text-center"
            >
              <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center text-white mb-8 shadow-xl group-hover:rotate-12 transition-all duration-300`}>
                {item.icon}
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-3 tracking-tight">{item.title}</h3>
              <p className="text-slate-500 font-medium mb-8 leading-relaxed text-sm">{item.text}</p>
              <div className="mt-auto flex items-center text-orange-600 font-black text-[10px] uppercase tracking-[0.2em] group-hover:gap-3 transition-all">
                <span>Hubungi Sekarang</span>
                <ArrowRight size={16} />
              </div>
            </motion.a>
          ))}
        </div>

        {/* Floating Contact Card (CTA Proyek Besar) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-20 bg-slate-950 rounded-[3.5rem] p-10 md:p-20 text-center text-white relative overflow-hidden border border-white/5 shadow-2xl"
        >
          {/* Decorative Orange Glows */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500/10 rounded-full blur-[100px] -mr-40 -mt-40 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-600/5 rounded-full blur-[100px] -ml-32 -mb-32"></div>

          <h3 className="text-3xl md:text-5xl font-black mb-8 relative z-10 leading-tight">
            Punya Proyek Miniature <br /> Skala Besar atau Custom?
          </h3>
          <p className="text-slate-400 mb-12 max-w-2xl mx-auto relative z-10 font-medium text-lg leading-relaxed">
            Kami melayani pengerjaan miniatur kapal, mobil
distribusi minyak, maket bangunan, dan pesanan scale
model lainnya dengan jaminan standar kualitas
          </p>
          
          <motion.a
            whileHover={{ scale: 1.05, backgroundColor: '#f97316' }}
            whileTap={{ scale: 0.95 }}
            href="https://wa.me"
            className="inline-flex items-center gap-4 bg-white text-slate-950 px-12 py-6 rounded-[1.5rem] font-black text-xs uppercase tracking-[0.2em] shadow-2xl hover:text-white transition-all relative z-10 group"
          >
            <MessageCircle size={24} className="fill-current text-orange-500 group-hover:text-white transition-colors" />
            <span>KONSULTASI VIA WHATSAPP</span>
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}

export default ContactSection;
