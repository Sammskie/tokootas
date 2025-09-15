import Navbar from "./components/Navbar";
import HeroCarousel from "./components/HeroCarousel";
import ProductList from "./components/ProductList";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <HeroCarousel />
      <ProductList />
      <footer className="bg-black text-white text-center py-6 mt-8">
        <p>© 2025 TokoTas. Semua Hak Dilindungi.</p>
      </footer>
    </div>
  );
}
