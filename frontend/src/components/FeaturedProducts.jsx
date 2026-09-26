import ProductCard from './ProductCard';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export default function FeaturedProducts({
  filteredProducts,
  favorites,
  toggleFavorite,
  formatPrice,
}) {
  return (
    <section id="products" className="py-24 bg-white relative overflow-hidden">
      {/* Background Decor - Menjaga konsistensi tema */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-orange-50/50 rounded-full blur-[100px] -z-10" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header Section Modern */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <Star className="text-orange-500 fill-orange-500" size={16} />
            <span className="text-orange-600 font-black text-xs uppercase tracking-[0.3em]">Top Collections</span>
            <Star className="text-orange-500 fill-orange-500" size={16} />
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight"
          >
            Produk <span className="text-orange-500 italic">Unggulan.</span>
          </motion.h2>
          
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1.5 bg-orange-500 mx-auto mt-6 rounded-full"
          />
        </div>

        {/* Grid Responsive yang Rapi */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 md:gap-8 justify-items-center">
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

        {/* Empty State dengan tema Orange */}
        {filteredProducts.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-24 bg-slate-50 rounded-[3rem] border-2 border-dashed border-slate-200"
          >
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
               <Star className="text-orange-500" size={32} />
            </div>
            <p className="text-slate-400 font-medium italic">
              Belum ada produk untuk kategori ini.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
