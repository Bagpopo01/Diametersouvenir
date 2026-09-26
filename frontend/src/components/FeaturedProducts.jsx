import ProductCard from "./ProductCard";
import { motion } from "framer-motion";
import { Sparkles, PackageOpen, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function FeaturedProducts({
  filteredProducts,
  favorites,
  toggleFavorite,
  formatPrice,
}) {
  return (
    <section
      id="products"
      className="py-28 bg-[#F8FAFC] relative overflow-hidden text-slate-900 border-t border-slate-200/80"
    >
      {/* Dynamic Ambient Blur Layer (Memberi Dimensi & Kehangatan) */}
      <div className="absolute top-0 right-1/4 w-[480px] h-[480px] bg-blue-100/60 rounded-full blur-[140px] pointer-events-none -z-0" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-amber-50/70 rounded-full blur-[120px] pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header Section dengan Contrast & Editorial Hierarchy */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-slate-200">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-blue-50 text-blue-800 border border-blue-200/60 mb-4 shadow-sm"
            >
              <Sparkles size={13} className="text-amber-500 fill-amber-500" />
              <span>Curated Catalogue</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-light text-slate-950 tracking-tight"
            >
              Koleksi Produk{" "}
              <span className="font-semibold text-[#0F2744] underline decoration-amber-400 decoration-2 underline-offset-8">
                Unggulan.
              </span>
            </motion.h2>
          </div>

          <p className="mt-4 md:mt-0 text-sm text-slate-500 font-normal max-w-md leading-relaxed">
            Pilihan cinderamata korporat & merchandise kustom dengan standar
            presisi tinggi dan material kurasi terbaik.
          </p>
        </div>

        {/* Grid Responsive Kartu Katalog Produk */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 md:gap-7 justify-items-center">
          {filteredProducts.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              index={index}
              favorites={favorites}
              toggleFavorite={toggleFavorite}
              formatPrice={formatPrice}
            />
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-20 bg-white rounded-3xl border border-slate-200 max-w-xl mx-auto shadow-sm"
          >
            <div className="w-14 h-14 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-3 text-slate-400">
              <PackageOpen size={26} />
            </div>
            <h4 className="text-slate-900 font-semibold text-sm">
              Produk Belum Tersedia
            </h4>
            <p className="text-slate-500 text-xs mt-1">
              Silakan pilih kategori lain atau periksa kembali filter Anda.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
