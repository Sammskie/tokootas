import Navbar from "./components/Navbar";
import HeroCarousel from "./components/HeroCarousel";
import ProductList from "./components/ProductList";
import CategorySection from "./components/CategorySection";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";


export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <HeroCarousel />
      <ProductList />
      <CategorySection />
      <Reviews />
      <Footer />
    </div>
  );
}
