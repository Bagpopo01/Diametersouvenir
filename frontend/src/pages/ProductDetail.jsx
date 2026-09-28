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
  Eye,
  Sparkles,
  Award,
} from "lucide-react";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [loading, setLoading] = useState(true);

  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";
  const placeholderUrl = "/default.png";

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

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen bg-[#F8FAFC]">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-slate-200 border-t-[#0F2744] rounded-full animate-spin mx-auto mb-4" />
          <p className="text-[#0F2744] font-semibold tracking-widest uppercase text-xs">
            Memuat Detail Produk...
          </p>
        </div>
      </div>
    );

  if (!product) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-32 text-center">
        <div className="bg-white p-12 rounded-3xl border border-slate-200/90 shadow-sm max-w-md mx-auto">
          <Info size={40} className="text-slate-400 mx-auto mb-4" />
          <h2 className="text-xl font-bold text-slate-800 mb-2">
            Produk Tidak Ditemukan
          </h2>
          <p className="text-slate-500 text-xs mb-6">
            Produk yang Anda tuju mungkin telah dihapus atau tautan tidak valid.
          </p>
          <button
            onClick={() => navigate("/kategori")}
            className="bg-[#0F2744] text-white px-8 py-3.5 rounded-xl font-semibold text-xs tracking-wider uppercase hover:bg-blue-700 transition-all shadow-md active:scale-95"
          >
            Kembali ke Katalog
          </button>
        </div>
      </div>
    );
  }

  // Logika Gambar & Fallback
  const images = Array.isArray(product.images) ? product.images : [];

  const getFullImageUrl = (path) => {
    if (!path) return placeholderUrl;
    return `${API_URL}/storage/${path.replace(/^public\//, "")}`;
  };

  const mainImage =
    images.length > 0 ? getFullImageUrl(images[selectedImage]) : placeholderUrl;

  const handleWhatsApp = () => {
    const message = `Halo Diameter Souvenir, saya tertarik dengan cenderamata: ${product.name} (SKU: ${product.sku || "DHS-PROD"}). Mohon informasi penawaran dan spesifikasi detailnya.`;
    window.open(
      `https://wa.me/6285183010279?text=${encodeURIComponent(message)}`,
      "_blank",
    );
  };

  // Format angka views riil (default minimal 1000)
  const viewsDisplay = Number(product.views_count ?? 1000).toLocaleString(
    "id-ID",
  );

  return (
    <div className="bg-[#F8FAFC] min-h-screen font-sans antialiased text-slate-900 pb-16 relative overflow-hidden">
      {/* Dynamic Background Blur */}
      <div className="absolute top-10 right-1/4 w-[480px] h-[480px] bg-blue-100/50 rounded-full blur-[140px] pointer-events-none -z-0" />
      <div className="absolute top-96 left-10 w-[400px] h-[400px] bg-amber-100/40 rounded-full blur-[120px] pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        {/* TOP NAVIGATION BREADCRUMB */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 border-b border-slate-200/90 pb-4 gap-4">
          <nav className="text-xs uppercase tracking-wider text-slate-400 flex flex-wrap gap-2 items-center font-medium">
            <Link to="/" className="hover:text-blue-700 transition-colors">
              Beranda
            </Link>
            <span>/</span>
            <Link
              to="/kategori"
              className="hover:text-blue-700 transition-colors"
            >
              Katalog
            </Link>
            <span>/</span>
            <span className="text-slate-800 font-semibold">{product.name}</span>
          </nav>

          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-1.5 text-xs font-semibold text-[#0F2744] hover:text-blue-700 uppercase tracking-wider transition-all group"
          >
            <ChevronLeft
              size={16}
              className="group-hover:-translate-x-1 transition-transform"
            />
            <span>Kembali</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* KOLOM 1: VISUAL SHOWCASE */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white border border-slate-200/90 rounded-3xl overflow-hidden aspect-[4/5] flex items-center justify-center shadow-[0_4px_25px_rgba(15,39,68,0.06)] p-6 group relative">
              <img
                src={mainImage}
                alt={product.name}
                className="w-full h-full object-contain transition-transform duration-700 ease-out group-hover:scale-105"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = placeholderUrl;
                }}
              />

              {/* SKU Pill Badge */}
              <div className="absolute top-4 left-4 bg-[#0F2744] text-amber-300 px-2.5 py-1 text-[9px] font-bold rounded-lg shadow-sm uppercase tracking-wider">
                {product.sku || "DHS-PROD"}
              </div>
            </div>

            {/* Thumbnail Switcher */}
            {images.length > 1 && (
              <div className="grid grid-cols-4 gap-3">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`aspect-square rounded-2xl border-2 overflow-hidden bg-white transition-all shadow-sm ${
                      selectedImage === idx
                        ? "border-[#0F2744] ring-2 ring-[#0F2744]/20 scale-95"
                        : "border-slate-200/80 opacity-60 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={getFullImageUrl(img)}
                      className="w-full h-full object-cover"
                      alt="Thumbnail produk"
                      onError={(e) => {
                        e.target.src = placeholderUrl;
                      }}
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* KOLOM 2: INFORMASI PRODUK */}
          <div className="lg:col-span-4 space-y-6">
            <div>
              <span className="text-[11px] font-bold text-amber-600 tracking-[0.2em] uppercase mb-1.5 block">
                DIAMETER SOUVENIR
              </span>

              <h1 className="text-2xl sm:text-3xl font-light text-slate-950 uppercase leading-snug tracking-tight mb-4">
                {product.name}
              </h1>

              {/* Indikator Views & Trust Badge */}
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-1.5 px-3 py-1 bg-blue-50 border border-blue-200/60 rounded-full text-blue-800 font-semibold text-[11px]">
                  <Eye size={13} className="text-blue-700" />
                  <span>{viewsDisplay} dilihat</span>
                </div>

                <div className="flex items-center gap-1.5 bg-amber-50 border border-amber-200/60 px-3 py-1 rounded-full text-amber-900 text-[11px] font-semibold">
                  <Star size={12} className="fill-amber-500 text-amber-500" />
                  <span>Standar Presisi Mutu</span>
                </div>
              </div>
            </div>

            {/* Spesifikasi Detail */}
            <div className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-[0_4px_20px_rgba(15,39,68,0.04)] space-y-4">
              <h3 className="text-xs font-semibold text-slate-800 uppercase tracking-wider border-b border-slate-100 pb-3 flex items-center gap-2">
                <Sparkles size={14} className="text-amber-500" />
                Spesifikasi Teknis
              </h3>

              <div className="space-y-3 text-xs">
                {[
                  { label: "Dimensi / Ukuran", value: product.size },
                  { label: "Material Utama", value: product.material },
                  { label: "Teknik Finishing", value: product.technique },
                  { label: "Opsi Kemasan / Box", value: product.box },
                ].map((spec, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center border-b border-slate-50 pb-2.5"
                  >
                    <span className="font-medium text-slate-400">
                      {spec.label}
                    </span>
                    <span className="text-slate-800 font-semibold text-right">
                      {spec.value || "-"}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Model SKU & Kategori */}
            <div className="text-xs font-medium space-y-2 bg-slate-100/70 p-4 rounded-xl border border-slate-200/70">
              <div className="flex justify-between">
                <span className="text-slate-400">Kode SKU:</span>
                <span className="text-[#0F2744] font-semibold">
                  {product.sku || "DHS-PROD"}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Kategori Koleksi:</span>
                <span className="text-[#0F2744] font-semibold uppercase">
                  {product.category_name || "Cenderamata Kustom"}
                </span>
              </div>
            </div>
          </div>

          {/* KOLOM 3: CTA & PEMESANAN */}
          <div className="lg:col-span-3 space-y-5">
            <div className="bg-white border border-slate-200/90 p-6 sm:p-7 rounded-3xl shadow-[0_4px_25px_rgba(15,39,68,0.06)] border-t-4 border-t-[#0F2744]">
              <ul className="text-xs space-y-3.5 mb-7 font-medium text-slate-600">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Asistensi Desain & Mockup Logo</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Estimasi Timeline Terukur</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-amber-500 shrink-0" />
                  <span>Garansi Standar Kualitas</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Info className="w-4 h-4 text-slate-400 shrink-0" />
                  <span>Siap Produksi Skala Besar</span>
                </li>
              </ul>

              <div className="space-y-3">
                <button
                  onClick={handleWhatsApp}
                  className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white flex items-center justify-center gap-2.5 py-3.5 rounded-xl font-semibold text-xs uppercase tracking-wider hover:from-emerald-500 hover:to-teal-500 transition-all shadow-md active:scale-95 cursor-pointer"
                >
                  <MessageCircle size={18} />
                  <span>Chat via WhatsApp</span>
                </button>
                <p className="text-[10px] text-center text-slate-400 leading-tight">
                  Konsultasikan jumlah pesanan, penyesuaian logo, dan estimasi
                  waktu.
                </p>
              </div>
            </div>

            {/* Official Quotation Box */}
            <div className="p-5 bg-blue-50/80 rounded-2xl border border-blue-200/60">
              <h4 className="text-xs font-bold text-[#0F2744] uppercase tracking-wide mb-1.5 flex items-center gap-1.5">
                <Award size={15} className="text-blue-700" />
                Penawaran Instansi Resmi
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Membutuhkan dokumen invoice penawaran resmi (quotation) untuk
                administrasi pengadaan instansi? Hubungi konsultan kami melalui
                tombol WhatsApp di atas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
