import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { 
  MessageCircle, 
  CheckCircle2, 
  ChevronLeft, 
  Star,
  ShieldCheck,
  Clock,
  Info,
  Eye
} from "lucide-react";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [loading, setLoading] = useState(true);

  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';
  const placeholderUrl = '/default.png';

  useEffect(() => {
    setLoading(true);
    fetch(`${API_URL}/api/products/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Gagal mengambil data");
        return res.json();
      })
      .then((data) => {
        const finalData = Array.isArray(data) ? data[0] : data;
        if (finalData && (finalData.id || finalData.name)) {
          setProduct(finalData);
        } else {
          setProduct(null);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch Error:", err);
        setProduct(null);
        setLoading(false);
      });
  }, [id, API_URL]);

  if (loading) return (
    <div className="flex justify-center items-center min-h-screen bg-[#fcfcfc]">
      <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-900"></div>
    </div>
  );

  if (!product) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-32 text-center">
        <h2 className="text-2xl font-black text-red-600 mb-6 tracking-widest uppercase italic">PRODUK TIDAK DITEMUKAN</h2>
        <button onClick={() => navigate("/kategori")} className="bg-blue-900 text-white px-10 py-3 rounded-full font-black text-[10px] tracking-[0.3em] uppercase hover:bg-blue-800 transition-all shadow-xl">
          Kembali ke Katalog
        </button>
      </div>
    );
  }

  // Logika Gambar & Fallback
  const images = Array.isArray(product.images) ? product.images : [];

  const getFullImageUrl = (path) => {
    if (!path) return placeholderUrl;
    return `${API_URL}/storage/${path.replace(/^public\//, "")}`;
  };

  const mainImage = images.length > 0 
    ? getFullImageUrl(images[selectedImage]) 
    : placeholderUrl;

  const handleWhatsApp = () => {
    const message = `Halo Rumpun Artwork, saya tertarik dengan produk: ${product.name} (SKU: ${product.sku || 'DHS-PROD'}). Mohon informasi lebih lanjut.`;
    window.open(`https://wa.me/6281259724486?text=${encodeURIComponent(message)}`, '_blank');
  };

  // Format angka views riil (default minimal 1000)
  const viewsDisplay = Number(product.views_count ?? 1000).toLocaleString('id-ID');

  return (
    <div className="bg-[#fcfcfc] min-h-screen font-sans antialiased text-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-8">
        
        {/* TOP NAVIGATION */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 border-b border-gray-100 pb-5 gap-4">
          <nav className="text-[10px] uppercase tracking-[0.3em] text-gray-400 flex flex-wrap gap-2 items-center font-bold">
            <Link to="/" className="hover:text-blue-900">Beranda</Link>
            <span>/</span>
            <Link to="/kategori" className="hover:text-blue-900">Katalog</Link>
            <span>/</span>
            <span className="text-blue-900 font-black">{product.name}</span>
          </nav>
          <button onClick={() => navigate(-1)} className="flex items-center gap-1 text-[10px] font-black text-blue-900 hover:text-blue-700 uppercase tracking-widest transition-all group">
            <ChevronLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> 
            Kembali
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* KOLOM 1: VISUALS */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white border border-gray-100 rounded-3xl overflow-hidden aspect-[4/5] flex items-center justify-center shadow-sm p-8 group relative border-t-4 border-t-blue-900">
              <img
                src={mainImage}
                alt={product.name}
                className="w-full h-full object-contain mix-blend-multiply transition-transform duration-700 group-hover:scale-105"
                onError={(e) => { e.target.src = placeholderUrl; }}
              />
            </div>

            {images.length > 1 && (
              <div className="grid grid-cols-4 gap-4">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`aspect-square rounded-2xl border-2 overflow-hidden bg-white transition-all ${
                      selectedImage === idx ? "border-blue-900 shadow-md scale-95" : "border-transparent opacity-50 hover:opacity-100"
                    }`}
                  >
                    <img src={getFullImageUrl(img)} className="w-full h-full object-cover" alt="thumb" onError={(e) => { e.target.src = placeholderUrl; }} />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* KOLOM 2: INFORMASI */}
          <div className="lg:col-span-4 space-y-8">
            <div>
              <span className="text-[10px] font-black text-blue-600 uppercase tracking-[0.4em] mb-2 block">RUMPUN ARTWORK</span>
              <h1 className="text-3xl font-black text-gray-900 uppercase leading-tight tracking-tighter mb-4">{product.name}</h1>
              
              {/* INDIKATOR METRIK: VIEWS & JAMINAN KUALITAS */}
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-1.5 px-3 py-1 bg-blue-50 border border-blue-100 rounded-full text-blue-900 font-bold text-[10px] uppercase tracking-wider shadow-xs">
                  <Eye size={13} className="text-blue-700" />
                  <span>{viewsDisplay} dilihat</span>
                </div>

                <div className="flex items-center gap-1.5">
                  <div className="flex text-yellow-400 gap-0.5"><Star size={12} fill="currentColor" /></div>
                  <span className="text-xs font-black text-blue-900 uppercase tracking-tighter">Produk Berkualitas Tinggi</span>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm space-y-5">
              <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] border-b border-gray-50 pb-3 italic">Spesifikasi Detail</h3>
              <div className="space-y-4 text-xs">
                {[
                  { label: "Ukuran", value: product.size },
                  { label: "Bahan Utama", value: product.material },
                  { label: "Teknik", value: product.technique },
                  { label: "Packaging", value: product.box }
                ].map((spec, i) => (
                  <div key={i} className="flex justify-between items-center border-b border-gray-50 pb-2">
                    <span className="font-bold text-gray-400 uppercase tracking-tighter">{spec.label}</span> 
                    <span className="text-gray-900 font-black">{spec.value || '-'}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-[11px] font-black space-y-3 pt-2">
               <div className="flex justify-between"><span className="text-gray-400 uppercase tracking-widest">Model SKU</span> <span className="text-blue-900">{product.sku || 'DHS-PROD'}</span></div>
               <div className="flex justify-between"><span className="text-gray-400 uppercase tracking-widest">Kategori</span> <span className="text-blue-900 uppercase tracking-tighter">{product.category_name || 'Plakat'}</span></div>
            </div>
          </div>

          {/* KOLOM 3: CTA */}
          <div className="lg:col-span-3 space-y-6">
            <div className="bg-white border border-gray-100 p-8 rounded-3xl shadow-sm border-b-4 border-b-blue-900">
               <ul className="text-[10px] space-y-4 mb-8 font-black uppercase tracking-widest italic text-gray-500">
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-green-500" /> Custom Desain Gratis</li>
                  <li className="flex items-center gap-3"><Clock className="w-4 h-4 text-blue-500" /> Pengerjaan Cepat</li>
                  <li className="flex items-center gap-3"><ShieldCheck className="w-4 h-4 text-orange-500" /> Garansi Pengiriman</li>
                  <li className="flex items-center gap-3"><Info className="w-4 h-4 text-gray-400" /> Melayani Partai Besar</li>
               </ul>

               <div className="space-y-3">
                 <button 
                  onClick={handleWhatsApp}
                  className="w-full bg-green-600 text-white flex items-center justify-center gap-3 py-4 rounded-xl font-black text-[11px] uppercase tracking-widest hover:bg-green-700 transition-all shadow-lg active:scale-95"
                 >
                   <MessageCircle size={18} /> Chat via WhatsApp
                 </button>
                 <p className="text-[9px] text-center text-gray-400 font-bold uppercase tracking-tighter">
                   Konsultasi gratis mengenai desain & harga
                 </p>
               </div>
            </div>

            <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100">
              <h4 className="text-[10px] font-black text-blue-900 uppercase mb-2">Butuh Penawaran Resmi?</h4>
              <p className="text-[10px] text-blue-700 leading-relaxed font-medium">
                Klik tombol di atas untuk berbicara dengan marketing kami dan dapatkan estimasi harga terbaik untuk kebutuhan instansi Anda.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;