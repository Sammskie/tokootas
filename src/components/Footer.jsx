// src/components/Footer.jsx
import { useState } from "react";
import { ChevronDown } from "lucide-react";

// Import logo toko
import logo from "../assets/logo.jpg"; // ganti sesuai logo kamu

// Import logo pembayaran
import visa from "../assets/payment/Visa_Inc._logo.svg.png";
import mastercard from "../assets/payment/MasterCard_Logo.svg.png";
import bni from "../assets/payment/original-789c5ee0d0b7837d21987693d9f9ed56.webp";
import bri from "../assets/payment/Logo-BRI-Bank-Rakyat-Indonesia-PNG-Terbaru.png";
import mandiri from "../assets/payment/Logo-Bank-Mandiri.png";
import linkaja from "../assets/payment/LinkAja.svg.png";
import jcb from "../assets/payment/jcb_emblem_logo.png";
import alfamart from "../assets/payment/img-logo-dos-1.png";
import ovo from "../assets/payment/EUbePLEU0AIpder.jpg";
import akulaku from "../assets/payment/22154933a70e0da1329af859669eee47.jpg";
import prima from "../assets/payment/ATM_PRIMA.png";
import bsi from "../assets/payment/Bank_Syariah_Indonesia.svg.png";
import cimb from "../assets/payment/cimb-bank-logo-png_seeklogo-30387.png";
import danamon from "../assets/payment/Danamon.svg";

export default function Footer() {
  const [open, setOpen] = useState(null);

  const toggle = (section) => {
    setOpen(open === section ? null : section);
  };

  const paymentLogos = [
    { src: bri, alt: "BRI" },
    { src: ovo, alt: "OVO" },
    { src: akulaku, alt: "Akulaku" },
    { src: alfamart, alt: "Alfamart" },
    { src: mandiri, alt: "Mandiri" },
    { src: bni, alt: "BNI" },
    { src: prima, alt: "ATM Prima" },
    { src: bsi, alt: "BSI" },
    { src: cimb, alt: "CIMB" },
    { src: danamon, alt: "Danamon" },
    { src: visa, alt: "Visa" },
    { src: jcb, alt: "JCB" },
    { src: mastercard, alt: "MasterCard" },
  ];

  return (
    <footer className="bg-white text-gray-700 mt-10 border-t">
      {/* Desktop */}
      <div className="hidden md:grid max-w-7xl mx-auto px-4 py-12 grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo */}
        <div>
          <img src={logo} alt="TokoTas" className="h-10 mb-4" />
        </div>

        {/* Help */}
        <div>
          <h3 className="font-semibold mb-3">HELP</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#">Cara Belanja</a></li>
            <li><a href="#">Testimoni & Rating</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        {/* About Us */}
        <div>
          <h3 className="font-semibold mb-3">ABOUT US</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#">Persyaratan Layanan</a></li>
            <li><a href="#">Kebijakan Privasi</a></li>
            <li><a href="#">Kebijakan Pengiriman</a></li>
            <li><a href="#">Kebijakan Pengembalian</a></li>
            <li><a href="#">Kebijakan Kekayaan Intelektual</a></li>
          </ul>
        </div>

        {/* Payment */}
        <div>
          <h3 className="font-semibold mb-3">Metode Pembayaran</h3>
          <div className="grid grid-cols-4 gap-3">
            {paymentLogos.map((p, i) => (
              <img key={i} src={p.src} alt={p.alt} className="h-6 object-contain" />
            ))}
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden px-4 py-6">
        {/* Accordion Terms */}
        <div>
          <button
            onClick={() => toggle("terms")}
            className="w-full flex justify-between items-center py-3 border-b"
          >
            <span className="font-semibold">Terms & Conditions</span>
            <ChevronDown
              className={`h-5 w-5 transform transition-transform ${
                open === "terms" ? "rotate-180" : ""
              }`}
            />
          </button>
          {open === "terms" && (
            <ul className="mt-2 space-y-2 text-sm pl-2">
              <li><a href="#">Persyaratan Layanan</a></li>
              <li><a href="#">Kebijakan Privasi</a></li>
              <li><a href="#">Kebijakan Pengiriman</a></li>
              <li><a href="#">Kebijakan Pengembalian</a></li>
              <li><a href="#">Kebijakan Kekayaan Intelektual</a></li>
            </ul>
          )}
        </div>

        {/* Accordion Payment */}
        <div>
          <button
            onClick={() => toggle("payment")}
            className="w-full flex justify-between items-center py-3 border-b"
          >
            <span className="font-semibold">Metode Pembayaran</span>
            <ChevronDown
              className={`h-5 w-5 transform transition-transform ${
                open === "payment" ? "rotate-180" : ""
              }`}
            />
          </button>
          {open === "payment" && (
            <div className="mt-2 grid grid-cols-4 gap-3">
              {paymentLogos.map((p, i) => (
                <img key={i} src={p.src} alt={p.alt} className="h-6 object-contain" />
              ))}
            </div>
          )}
        </div>

        {/* Logo + Help */}
        <div className="mt-6">
          <img src={logo} alt="TokoTas" className="h-8 mb-3" />
          <ul className="space-y-2 text-sm">
            <li><a href="#">Cara Belanja</a></li>
            <li><a href="#">Testimoni & Rating</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t text-center py-4 text-xs text-gray-500">
        © 2025 TokoTas. Semua Hak Dilindungi.
      </div>
    </footer>
  );
}
