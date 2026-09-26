import ProductCard from "./ProductCard";

export default function ProductList({ products }) {
  return (
    <section id="products" className="py-4">
      <div 
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-0 justify-center max-w-fit mx-auto"
      >
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}