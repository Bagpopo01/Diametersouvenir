import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  ChevronRight,
  ChevronLeft,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import CategoryCard from "./CategoryCard";

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const scrollRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Sesuaikan URL dengan backend Laravel kamu (Port 8000)
    const API_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000";

    fetch(`${API_URL}/api/categories`)
      .then((res) => res.json())
      .then((data) => {
        // Jika data dari Laravel berformat { data: [...] } gunakan data.data
        setCategories(Array.isArray(data) ? data : data.data || []);
      })
      .catch(() => {
        // Data Fallback jika API belum nyala
        setCategories([
          {
            id: 1,
            name: "Corporate Gift Set",
            image_url:
              "https://images.unsplash.com/photo-1549465220-1a8b9238cd48",
          },
          {
            id: 2,
            name: "Plakat & Trophy Eksklusif",
            image_url:
              "https://images.unsplash.com/photo-1589829545856-d10d557cf95f",
          },
          {
            id: 3,
            name: "Custom Drinkware & Tumbler",
            image_url:
              "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd",
          },
          {
            id: 4,
            name: "Premium Leather Goods",
            image_url:
              "https://images.unsplash.com/photo-1524805444758-089113d48a6d",
          },
        ]);
      });
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.8;
      const scrollTo =
        direction === "left"
          ? scrollLeft - scrollAmount
          : scrollLeft + scrollAmount;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section
      id="categories"
      className="py-24 bg-[#071526] relative overflow-hidden text-white border-t border-[#0F2744]"
    >
      {/* Background Ambient Glow Safir */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[550px] h-[550px] bg-sky-500/10 rounded-full blur-[140px] pointer-events-none -z-0" />
      <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-blue-500/10 text-sky-400 border border-sky-400/30 mb-6 backdrop-blur-sm">
              <Sparkles size={13} className="text-sky-400 animate-pulse" />
              <span>Curated Collections</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-extralight tracking-tight leading-tight">
              Eksplorasi{" "}
              <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-200 to-white italic">
                Kategori
              </span>
              <br />
              Souvenir Eksklusif.
            </h2>
          </motion.div>

          {/* Tombol Kontrol Geser */}
          <div className="flex gap-3 mt-8 md:mt-0">
            <button
              onClick={() => scroll("left")}
              aria-label="Scroll Kiri"
              className="p-3.5 rounded-2xl border border-sky-500/20 bg-[#0F2744]/70 text-slate-300 hover:text-white hover:border-sky-400/50 hover:bg-blue-600/30 transition-all duration-300 backdrop-blur-md active:scale-95 shadow-sm"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={() => scroll("right")}
              aria-label="Scroll Kanan"
              className="p-3.5 rounded-2xl border border-sky-500/20 bg-[#0F2744]/70 text-slate-300 hover:text-white hover:border-sky-400/50 hover:bg-blue-600/30 transition-all duration-300 backdrop-blur-md active:scale-95 shadow-sm"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Carousel Section Container */}
        <div className="relative">
          {/* Subtle Edge Fade */}
          <div className="absolute right-0 top-0 bottom-0 w-28 bg-gradient-to-l from-[#071526] to-transparent z-10 pointer-events-none hidden md:block" />

          {/* Scroll Area dengan Custom Minimalist Scrollbar */}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto gap-6 pb-6 pt-2 items-stretch snap-x touch-pan-x
                       [&::-webkit-scrollbar]:h-1
                       [&::-webkit-scrollbar-track]:bg-[#0F2744]/30
                       [&::-webkit-scrollbar-track]:rounded-full
                       [&::-webkit-scrollbar-thumb]:bg-blue-600/50
                       [&::-webkit-scrollbar-thumb]:rounded-full
                       hover:[&::-webkit-scrollbar-thumb]:bg-sky-400/80"
            style={{
              scrollbarWidth: "thin",
              scrollbarColor: "#2563EB40 transparent",
            }}
          >
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="flex-shrink-0 snap-start"
              >
                <CategoryCard category={category} />
              </motion.div>
            ))}

            {/* Explore More Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex-shrink-0 snap-start pr-8"
            >
              <button
                onClick={() => navigate("/kategori")}
                className="group relative flex flex-col items-center justify-center 
                           w-52 h-full min-h-[260px] rounded-3xl 
                           border-2 border-dashed border-sky-500/30 hover:border-sky-400 
                           bg-[#0F2744]/40 backdrop-blur-xl transition-all duration-500 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-blue-700/80 to-sky-600/80 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />

                <div className="relative z-10 p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-white/20 group-hover:rotate-45 transition-all duration-500 mb-4 shadow-sm">
                  <ArrowUpRight
                    size={28}
                    className="text-sky-300 group-hover:text-white transition-colors"
                  />
                </div>

                <div className="relative z-10 text-center px-4">
                  <p className="font-semibold text-sm uppercase tracking-wider text-white">
                    Lihat Semua
                  </p>
                  <p className="text-xs font-light text-slate-400 group-hover:text-sky-100 transition-colors mt-1">
                    Semua Kategori ({categories.length})
                  </p>
                </div>
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
