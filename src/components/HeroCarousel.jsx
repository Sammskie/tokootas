import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaSearch } from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function HeroCarousel() {
  return (
    <div className="relative w-full">
      {/* Carousel */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        className="w-full h-[400px]"
      >
        <SwiperSlide>
          <div className="bg-gradient-to-r from-purple-600 to-pink-500 text-white flex flex-col justify-center items-center h-full">
            <h2 className="text-4xl font-extrabold mb-2">Temukan Tas Impianmu</h2>
            <p className="mb-4">Kualitas premium, harga terjangkau.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white flex flex-col justify-center items-center h-full">
            <h2 className="text-4xl font-extrabold mb-2">Diskon Spesial</h2>
            <p className="mb-4">Jangan lewatkan promo terbaik bulan ini!</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-gradient-to-r from-green-600 to-lime-500 text-white flex flex-col justify-center items-center h-full">
            <h2 className="text-4xl font-extrabold mb-2">Koleksi Terbaru</h2>
            <p className="mb-4">Tas trendy untuk gaya masa kini.</p>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Search Box */}
      <div className="absolute bottom-[-70px] left-1/2 transform -translate-x-1/2 w-3/4 sm:w-1/2">
        <div className="flex items-center bg-white shadow-lg rounded-full px-4 py-2">
          <input
            type="text"
            placeholder="Cari tas favoritmu..."
            className="flex-grow px-2 py-1 outline-none text-gray-700"
          />
          <button className="bg-black text-white p-2 rounded-full hover:bg-gray-800 transition">
            <FaSearch className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
