import { useState } from "react";
import { FaHeart } from "react-icons/fa";

export default function ProductCard({ product }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden relative"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* Gambar produk */}
      <div className="relative w-full h-64 bg-gray-100">
        {product.badge && (
          <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
            {product.badge}
          </span>
        )}

        {/* Wishlist */}
        <button className="absolute top-2 right-2 bg-white p-2 rounded-full shadow hover:bg-gray-100">
          <FaHeart className="w-4 h-4 text-gray-600 hover:text-red-500 transition" />
        </button>

        {/* Gambar swap (hover → gambar kedua muncul) */}
        <img
          src={hover ? product.image2 : product.image1}
          alt={product.name}
          className="object-cover h-full w-full transition-all duration-500"
        />
      </div>

      {/* Detail produk */}
      <div className="p-4 flex flex-col justify-between h-40">
        <h3 className="font-semibold text-lg text-gray-800 truncate">
          {product.name}
        </h3>
        <p className="text-gray-500 text-sm mb-2">
          Rp {product.price.toLocaleString()}
        </p>

        <button className="bg-black text-white py-2 px-4 rounded-full text-sm hover:bg-gray-800 transition">
          Tambah ke Keranjang
        </button>
      </div>
    </div>
  );
}
