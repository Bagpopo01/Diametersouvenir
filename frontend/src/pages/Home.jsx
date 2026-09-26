import HeroSection from '../components/HeroSection';
import SearchBar from '../components/SearchBar';
import FeaturedProducts from '../components/FeaturedProducts';
import Clients from '../components/Clients';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import { Toaster } from '@/components/ui/toaster';
import Categories from "../components/Categories";
import VideoShort from "../components/VideoShort";
import WhyChooseUs from '../components/WhychooseUs';
import HowToOrder from '../components/HowToOrder';
import CatalogSection from '../components/CatalogSection';



export default function Home({
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
  categories,
  filteredProducts,
  favorites,
  toggleFavorite,
  addToCart,
  formatPrice,
  clients,
}) {
  return (
    <>
      <HeroSection />
      <Categories />
      
    
      <VideoShort />
      <CatalogSection />
      <FeaturedProducts
        filteredProducts={filteredProducts}
        favorites={favorites}
        toggleFavorite={toggleFavorite}
        addToCart={addToCart}
        formatPrice={formatPrice}
      />

      <Clients clients={clients} />
      <AboutSection />
      <WhyChooseUs />
      <HowToOrder />
      <ContactSection />
      <Footer />
      <Toaster />
    </>
  );
}