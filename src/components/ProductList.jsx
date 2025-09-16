import { useEffect, useState } from "react";
import { Heart } from "lucide-react";

const ProductCard = ({ product }) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) =>
        prev === product.images.length - 1 ? 0 : prev + 1
      );
    }, 2500);
    return () => clearInterval(interval);
  }, [product.images.length]);

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden relative group">
      {/* Badge */}
      {product.badge && (
        <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
          {product.badge}
        </span>
      )}

      {/* Gambar */}
      <div className="relative">
        <img
          src={product.images[currentImage]}
          alt={product.name}
          className="w-full h-56 object-cover transition-all duration-500"
        />

        {/* Tombol Wishlist */}
        <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md transition group hover:bg-red-100">
          <Heart className="w-5 h-5 text-gray-500 group-hover:text-red-600 group-hover:fill-red-600 transition" />
        </button>
      </div>

      {/* Info Produk */}
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-gray-600">Rp {product.price.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default function ProductList() {
  const dummyProducts = [
    {
      id: 1,
      name: "Tas Ransel Stylish",
      price: 250000,
      images: [
        "https://picsum.photos/300/200?random=11",
        "https://picsum.photos/300/200?random=12",
      ],
      badge: "SALE",
    },
    {
      id: 2,
      name: "Tas Slempang Casual",
      price: 180000,
      images: [
        "https://picsum.photos/300/200?random=13",
        "https://picsum.photos/300/200?random=14",
      ],
      badge: "NEW",
    },
    {
      id: 3,
      name: "Tote Bag Elegan",
      price: 200000,
      images: [
        "https://picsum.photos/300/200?random=15",
        "https://picsum.photos/300/200?random=16",
      ],
    },
    {
      id: 4,
      name: "Mini Bag Cute",
      price: 150000,
      images: [
        "https://picsum.photos/300/200?random=17",
        "https://picsum.photos/300/200?random=18",
      ],
    },
    {
      id: 5,
      name: "Handbag Premium",
      price: 320000,
      images: [
        "https://picsum.photos/300/200?random=19",
        "https://picsum.photos/300/200?random=20",
      ],
      badge: "HOT",
    },
    {
      id: 6,
      name: "Clutch Party",
      price: 175000,
      images: [
        "https://picsum.photos/300/200?random=21",
        "https://picsum.photos/300/200?random=22",
      ],
    },
    {
      id: 7,
      name: "Travel Bag Besar",
      price: 400000,
      images: [
        "https://picsum.photos/300/200?random=23",
        "https://picsum.photos/300/200?random=24",
      ],
    },
    {
      id: 8,
      name: "Waist Bag Sporty",
      price: 120000,
      images: [
        "https://picsum.photos/300/200?random=25",
        "https://picsum.photos/300/200?random=26",
      ],
      badge: "NEW",
    },
  ];

  return (
    <div className="p-6 mt-28">
      {/* Grid Card */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {dummyProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

{/* Tombol Lihat Semua */}
<div className="flex justify-center mt-8">
  <button className="px-6 py-2 border-2 border-blue-600 text-blue-600 rounded-xl shadow-md hover:bg-blue-600 hover:text-white transition duration-300">
    Tampilkan Semua
  </button>
</div>
    </div>
  );
}
