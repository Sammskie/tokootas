import { useState } from "react";
import { FaSearch, FaShoppingBag, FaUser, FaFlag, FaChevronDown } from "react-icons/fa";

export default function Navbar() {
  const [lang, setLang] = useState("ID");
  const [openLang, setOpenLang] = useState(false);
  const [openBags, setOpenBags] = useState(false);

  return (
<nav className="bg-white text-black shadow font-raleway uppercase">
  {/* Bagian Atas - Logo & Icon */}
  <div className="px-6 py-3 flex justify-between items-center">
    {/* Logo */}
    <h1 className="text-xl font-bold">TokoTas</h1>

    {/* Icon kanan */}
    <div className="flex items-center gap-5">
      <FaSearch className="w-5 h-5 cursor-pointer hover:text-gray-600" />

      {/* Bahasa */}
      <div className="relative">
        <button
          onClick={() => setOpenLang(!openLang)}
          className="flex items-center gap-1 hover:text-gray-600"
        >
          <FaFlag className="w-5 h-5" /> {lang}
        </button>
        {openLang && (
          <div className="absolute right-0 mt-2 bg-white border rounded shadow-lg z-10">
            <button
              onClick={() => {
                setLang("ID");
                setOpenLang(false);
              }}
              className="block px-4 py-2 hover:bg-gray-100 w-full text-left"
            >
              🇮🇩 Indonesia
            </button>
            <button
              onClick={() => {
                setLang("EN");
                setOpenLang(false);
              }}
              className="block px-4 py-2 hover:bg-gray-100 w-full text-left"
            >
              🇬🇧 English
            </button>
          </div>
        )}
      </div>

      <FaShoppingBag className="w-5 h-5 cursor-pointer hover:text-gray-600" />
      <FaUser className="w-5 h-5 cursor-pointer hover:text-gray-600" />
    </div>
  </div>

  {/* Bagian Bawah - Menu kiri */}
  <div className="px-6 py-1 flex gap-6 font-medium">
    <button className="hover:text-gray-700">HOME</button>
    <button className="hover:text-gray-700">BEST SELLER</button>

    {/* Dropdown Bags */}
    <div className="relative">
      <button
        onClick={() => setOpenBags(!openBags)}
        className="flex items-center gap-1 hover:text-gray-700"
      >
        BAGS <FaChevronDown className="w-3 h-3" />
      </button>
      {openBags && (
        <div className="absolute mt-2 bg-white border rounded shadow-lg z-10 w-40">
          <button className="block px-4 py-2 hover:bg-gray-100 w-full text-left">
            RANSEL
          </button>
          <button className="block px-4 py-2 hover:bg-gray-100 w-full text-left">
            SLING BAG
          </button>
          <button className="block px-4 py-2 hover:bg-gray-100 w-full text-left">
            TOTE BAG
          </button>
          <button className="block px-4 py-2 hover:bg-gray-100 w-full text-left">
            MINI BAG
          </button>
          <button className="block px-4 py-2 hover:bg-gray-100 w-full text-left">
            POUCH & WALLET
          </button>
          <button className="block px-4 py-2 hover:bg-gray-100 w-full text-left">
            GIFT
          </button>
        </div>
      )}
    </div>

    <button className="hover:text-gray-700">BLOG</button>

    {/* SALE dengan animasi geter */}
    <span className="text-red-600 font-bold animate-wiggle">SALE</span>

    <button className="hover:text-gray-700">TESTIMONI</button>
  </div>
</nav>

  );
}
