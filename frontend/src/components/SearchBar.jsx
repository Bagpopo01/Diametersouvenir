import { motion } from "framer-motion";
import { Search, Filter, Sparkles } from "lucide-react";

export default function SearchBar({
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
  categories = [],
}) {
  return (
    <section className="py-8 bg-[#F8FAFC] relative overflow-hidden border-b border-slate-200/80">
      {/* Dynamic Ambient Blur Layer Halus */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-32 bg-blue-100/60 rounded-full blur-[90px] pointer-events-none -z-0" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-72 h-32 bg-amber-100/50 rounded-full blur-[90px] pointer-events-none -z-0" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-between">
            {/* Input Search dengan Elevasi Halus & Kontras Jelas */}
            <div className="relative w-full flex-1">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4 pointer-events-none" />
              <input
                type="text"
                placeholder="Cari produk cenderamata..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-11 pr-4 py-3.5 bg-white border border-slate-200/90 rounded-2xl text-xs sm:text-sm text-slate-800 placeholder-slate-400 shadow-[0_2px_12px_rgba(15,39,68,0.04)] focus:border-[#0F2744] focus:ring-2 focus:ring-[#0F2744]/10 focus:outline-none transition-all duration-300"
              />
            </div>

            {/* Dropdown Filter Kategori Bergaya Editorial */}
            <div className="relative w-full sm:w-auto flex items-center">
              <div className="absolute left-3.5 pointer-events-none flex items-center gap-1.5">
                <Filter className="text-slate-400 w-4 h-4" />
              </div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full sm:w-auto pl-10 pr-9 py-3.5 bg-white border border-slate-200/90 rounded-2xl text-xs sm:text-sm text-slate-700 font-medium shadow-[0_2px_12px_rgba(15,39,68,0.04)] focus:border-[#0F2744] focus:ring-2 focus:ring-[#0F2744]/10 focus:outline-none transition-all duration-300 cursor-pointer appearance-none"
              >
                {categories.map((category) => (
                  <option
                    key={category.id}
                    value={category.id}
                    className="text-slate-800 py-1"
                  >
                    {category.name}
                  </option>
                ))}
              </select>
              {/* Panah Custom Dropdown Minimalis */}
              <div className="absolute right-3.5 pointer-events-none text-slate-400 text-[10px]">
                ▼
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
