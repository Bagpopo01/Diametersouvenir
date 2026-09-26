import { motion } from 'framer-motion';
import { Search, Filter } from 'lucide-react';

export default function SearchBar({
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
  categories,
}) {
  return (
    <section className="py-12 bg-white/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between mb-8">
            {/* Input Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Cari produk souvenir..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border-2 border-blue-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
              />
            </div>

            {/* Dropdown Filter */}
            <div className="flex items-center gap-2">
              <Filter className="text-blue-600 w-5 h-5" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border-2 border-blue-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors bg-white"
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}