import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, ChevronLeft, ArrowUpRight } from 'lucide-react';
import CategoryCard from './CategoryCard';

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const scrollRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Sesuaikan URL dengan backend Laravel kamu (Port 8000)
    const API_URL = import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000';
    
    fetch(`${API_URL}/api/categories`)
      .then(res => res.json())
      .then(data => {
        // Jika data dari Laravel berformat { data: [...] } gunakan data.data
        setCategories(Array.isArray(data) ? data : data.data || []);
      })
      .catch(() => {
        // Data Fallback jika API belum nyala
        setCategories([
          { id: 1, name: 'Miniatur Kapal', image_url: 'https://unsplash.com' },
          { id: 2, name: 'Arsitektur', image_url: 'https://unsplash.com' },
          { id: 3, name: 'Interior Design', image_url: 'https://unsplash.com' },
          { id: 4, name: 'Handicraft', image_url: 'https://unsplash.com' },
        ]);
      });
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.8; 
      const scrollTo = direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section id="categories" className="py-24 bg-[#FCFCFC] relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-100/30 rounded-full blur-[120px] -z-10" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h4 className="text-orange-500 font-bold tracking-[0.3em] text-sm uppercase mb-4">Discovery</h4>
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-none">
              Pilih <span className="text-orange-500 italic relative inline-block">
                Kategori
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-orange-200" viewBox="0 0 200 8" fill="none" preserveAspectRatio="none">
                  <path d="M1 5.5C40 2 120 2 199 5.5" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
                </svg>
              </span>
              <br />Karyamu.
            </h2>
          </motion.div>

          <div className="flex gap-4 mt-10 md:mt-0">
            <button 
              onClick={() => scroll('left')} 
              className="p-4 rounded-2xl border border-slate-200 bg-white hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all duration-300 shadow-sm active:scale-95"
            >
              <ChevronLeft size={28} />
            </button>
            <button 
              onClick={() => scroll('right')} 
              className="p-4 rounded-2xl border border-slate-200 bg-white hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all duration-300 shadow-sm active:scale-95"
            >
              <ChevronRight size={28} />
            </button>
          </div>
        </div>

        {/* Carousel Section */}
        <div className="relative">
          {/* Edge Fade Effect */}
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#FCFCFC] to-transparent z-10 pointer-events-none hidden md:block" />

          <div 
            ref={scrollRef} 
            className="flex overflow-x-auto gap-8 py-4 items-stretch scrollbar-hide no-scrollbar snap-x touch-pan-x"
          >
            {categories.map((category, index) => (
              <motion.div 
                key={category.id} 
                initial={{ opacity: 0, y: 30 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ delay: index * 0.1 }}
                className="flex-shrink-0 snap-start"
              >
                <CategoryCard category={category} />
              </motion.div>
            ))}

           {/* Explore More Card */}
<motion.div 
  initial={{ opacity: 0, scale: 0.9 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true }}
  className="flex-shrink-0 snap-start pr-10"
>
  <button 
    onClick={() => navigate('/kategori')}
    className="group relative flex flex-col items-center justify-center 
               w-48 h-full min-h-[250px] rounded-[1.5rem] 
               border-2 border-dashed border-slate-200 hover:border-orange-500 
               bg-white transition-all duration-500 overflow-hidden"
  >
    <div className="absolute inset-0 bg-orange-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
    
    <div className="relative z-10 p-4 rounded-full bg-slate-50 group-hover:bg-white/20 group-hover:rotate-45 transition-all duration-500 mb-4">
      <ArrowUpRight size={32} className="text-slate-400 group-hover:text-white transition-colors" />
    </div>
    
    <div className="relative z-10 text-center">
      <p className="font-black text-lg uppercase tracking-tighter text-slate-900 group-hover:text-white transition-colors">
        Lihat Semua
      </p>
      <p className="text-xs font-medium text-slate-400 group-hover:text-orange-100 transition-colors mt-1">
        Explore Categories
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
