import HeroSection from "../components/HeroSection";
import SearchBar from "../components/SearchBar";
import FeaturedProducts from "../components/FeaturedProducts";
import Clients from "../components/Clients";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import { Toaster } from "@/components/ui/toaster";
import Categories from "../components/Categories";
import VideoShort from "../components/VideoShort";
import WhyChooseUs from "../components/WhychooseUs";
import HowToOrder from "../components/HowToOrder";
import CatalogSection from "../components/CatalogSection";

export default function Home({
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
  categories = [],
  filteredProducts = [],
  favorites,
  toggleFavorite,
  addToCart,
  formatPrice,
  clients,
}) {
  return (
    <div className="bg-[#F8FAFC] min-h-screen text-slate-900 font-sans">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Search & Filter Bar (Wajib dipasang agar input pencarian aktif) */}
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        categories={categories}
      />

      {/* 3. Carousel Kategori */}
      <Categories />

      {/* 4. Cinematic Video Showcase */}
      <VideoShort />

      {/* 5. Download E-Catalog */}
      <CatalogSection />

      {/* 6. Featured Products (Diberi id="products" agar tombol Jelajahi Katalog di Hero langsung scroll ke sini) */}
      <div id="products">
        <FeaturedProducts
          filteredProducts={filteredProducts}
          favorites={favorites}
          toggleFavorite={toggleFavorite}
          addToCart={addToCart}
          formatPrice={formatPrice}
        />
      </div>

      {/* 7. Partner Rekanan & Profil Perusahaan */}
      <Clients clients={clients} />
      <AboutSection />

      {/* 8. Keunggulan & Alur Pemesanan */}
      <WhyChooseUs />
      <HowToOrder />

      {/* 9. Kontak, Footer & Toaster Notification */}
      <ContactSection />
      <Footer />
      <Toaster />
    </div>
  );
}
