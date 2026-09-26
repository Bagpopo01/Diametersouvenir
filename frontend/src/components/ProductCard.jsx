import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
  const API_URL = import.meta.env.VITE_API_URL;

  const imagePath = Array.isArray(product.images) && product.images.length > 0 
    ? product.images[0] 
    : product.image || product.image_url;

  const placeholderUrl = '/placeholder-product.png';

  const imageUrl = imagePath
    ? `${API_URL}/storage/${imagePath.replace(/^public\//, "")}`
    : placeholderUrl;

  // Format angka views riil (default minimal 1000)
  const viewsDisplay = Number(product.views_count ?? 1000).toLocaleString('id-ID');

  return (
    <Link
      to={`/produk/${product.id}`}
      className="group bg-white border border-gray-100 rounded-lg p-2 hover:border-blue-900 transition-all cursor-pointer shadow-sm hover:shadow-md flex flex-col h-full max-w-[210px] mx-auto w-full"
    >
      <div className="relative aspect-square bg-[#f8f8f8] mb-2 flex items-center justify-center overflow-hidden rounded-sm">
        <div className="absolute top-1.5 left-1.5 bg-white px-1 py-0.5 text-[7px] font-black border border-gray-50 shadow-sm z-10 uppercase text-blue-900">
          {product.sku || `PL ${product.id}`}
        </div>

        <img
          src={imageUrl}
          alt={product.name}
          className="w-full h-full object-contain p-3 mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
          onError={(e) => { 
            e.target.onerror = null; 
            e.target.src = placeholderUrl;
          }}
        />
      </div>

      <div className="flex flex-col gap-0.5 text-left flex-grow px-0.5">
        <span className="text-[7px] font-bold text-gray-400 tracking-[0.1em] uppercase">
          Rumpun Artwork
        </span>

        <h3 className="text-[10px] font-bold text-gray-800 leading-tight line-clamp-2 uppercase min-h-[28px] group-hover:text-blue-800 transition-colors">
          {product.name}
        </h3>

        {/* FOOTER KARTU: INDIKATOR VIEWS & TOMBOL DETAIL */}
        <div className="flex justify-between items-center mt-auto pt-2 border-t border-gray-100">
          {/* Label Jumlah Views */}
          <div className="flex items-center gap-1 text-[8px] text-gray-400 font-medium">
            <svg 
              className="w-3 h-3 text-gray-400" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            <span>{viewsDisplay} dilihat</span>
          </div>

          {/* Tombol Detail */}
          <span className="text-[8px] text-blue-800 font-black uppercase tracking-tighter group-hover:underline">
            DETAIL
          </span>
        </div>
      </div>
    </Link>
  );
}