import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  const API_URL = import.meta.env.VITE_API_URL;

  const imagePath =
    Array.isArray(product.images) && product.images.length > 0
      ? product.images[0]
      : product.image || product.image_url;

  const placeholderUrl = "/placeholder-product.png";

  const imageUrl = imagePath
    ? `${API_URL}/storage/${imagePath.replace(/^public\//, "")}`
    : placeholderUrl;

  // Format angka views riil (default minimal 1000)
  const viewsDisplay = Number(product.views_count ?? 1000).toLocaleString(
    "id-ID",
  );

  return (
    <Link
      to={`/produk/${product.id}`}
      className="group bg-white border border-slate-200/90 rounded-2xl p-3 hover:border-blue-700/60 transition-all duration-300 cursor-pointer shadow-[0_4px_20px_rgba(15,39,68,0.05)] hover:shadow-[0_12px_30px_rgba(15,39,68,0.12)] hover:-translate-y-1 flex flex-col h-full max-w-[220px] mx-auto w-full relative overflow-hidden"
    >
      {/* Container Gambar Produk dengan Soft Surface Contrast */}
      <div className="relative aspect-square bg-[#F1F5F9]/70 mb-3 flex items-center justify-center overflow-hidden rounded-xl border border-slate-100">
        {/* Badge SKU / Code dengan sentuhan Gold & Dark Navy */}
        <div className="absolute top-2 left-2 bg-[#0F2744] text-amber-300 px-2 py-0.5 text-[8px] font-bold rounded-md shadow-sm z-10 uppercase tracking-wider">
          {product.sku || `PL ${product.id}`}
        </div>

        <img
          src={imageUrl}
          alt={product.name}
          className="w-full h-full object-contain p-3 group-hover:scale-108 transition-transform duration-500 ease-out"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = placeholderUrl;
          }}
        />

        {/* Hover Ambient Overlay tipis */}
        <div className="absolute inset-0 bg-blue-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>

      {/* Detail Informasi Produk */}
      <div className="flex flex-col gap-1 text-left flex-grow px-1">
        <span className="text-[8px] font-bold text-amber-600/90 tracking-[0.15em] uppercase">
          Diameter Souvenir
        </span>

        <h3 className="text-xs font-semibold text-slate-900 leading-snug line-clamp-2 uppercase min-h-[32px] group-hover:text-blue-700 transition-colors">
          {product.name}
        </h3>

        {/* Footer Kartu: Indikator Views & Tombol Detail */}
        <div className="flex justify-between items-center mt-auto pt-2.5 border-t border-slate-100">
          {/* Label Jumlah Views */}
          <div className="flex items-center gap-1.5 text-[9px] text-slate-400 font-medium">
            <svg
              className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
            <span>{viewsDisplay} dilihat</span>
          </div>

          {/* Tombol Detail */}
          <span className="text-[9px] text-blue-700 font-bold uppercase tracking-wider group-hover:text-blue-900 group-hover:underline flex items-center gap-0.5">
            Detail →
          </span>
        </div>
      </div>
    </Link>
  );
}
