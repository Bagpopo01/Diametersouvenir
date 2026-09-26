import ProductCard from "./ProductCard";

export default function ProductList({ products = [] }) {
  return (
    <section
      id="products"
      className="py-12 bg-[#F8FAFC] relative overflow-hidden"
    >
      {/* Background Ambient Glow Halus */}
      <div className="absolute top-1/4 right-1/4 w-[450px] h-[450px] bg-blue-100/50 rounded-full blur-[130px] pointer-events-none -z-0" />
      <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-amber-100/40 rounded-full blur-[110px] pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Grid Responsive dengan Gap Seimbang & Max-width Proporsional */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-5 md:gap-6 justify-center items-stretch">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
