import { useState } from "react";
import {
  FaSearch,
  FaShoppingBag,
  FaUser,
  FaFlag,
  FaChevronDown,
  FaBars,
  FaTimes,
} from "react-icons/fa";

export default function Navbar() {
  const [lang, setLang] = useState("ID");
  const [openLang, setOpenLang] = useState(false);
  const [openBags, setOpenBags] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white text-black shadow font-raleway uppercase">
      {/* Bagian Atas - Logo & Icon */}
      <div className="px-6 py-3 flex justify-between items-center">
        <div className="flex items-center gap-3">
          {/* Hamburger di mobile */}
          <button
            className="md:hidden text-xl"
            onClick={() => setOpenMenu(!openMenu)}
          >
            {openMenu ? <FaTimes /> : <FaBars />}
          </button>
          {/* Logo */}
          <h1 className="text-xl font-bold">TokoTas</h1>
        </div>

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

      <div
  className={`${
    openMenu ? "flex" : "hidden"
  } md:flex py-2 gap-6 font-medium flex-col md:flex-row items-center justify-center md:justify-start text-center`}
>
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

  {/* SALE - tetap di tengah di HP */}
  <span className="text-red-600 font-bold w-full md:w-auto">
    SALE
  </span>

  <button className="hover:text-gray-700">TESTIMONI</button>
</div>

    </nav>
  );
}
