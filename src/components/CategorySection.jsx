import Image from "../assets/tas.webp"; // pastikan tas.webp disimpan di folder src/assets

const categories = [
  { id: 1, name: "Ransel", img: "https://picsum.photos/300/200?random=31" },
  { id: 2, name: "Tote Bag", img: "https://picsum.photos/300/200?random=32" },
  { id: 3, name: "Mini Bag", img: "https://picsum.photos/300/200?random=33" },
  { id: 4, name: "Gift", img: "https://picsum.photos/300/200?random=34" },
];

export default function CategorySection() {
  return (
    <section className="px-6 mt-16">
      {/* Foto Besar */}
      <div className="overflow-hidden rounded-xl shadow-lg">
        <img
          src={Image}
          alt="Zolly Backpack"
          className="w-full h-[1000px] object-cover transform transition duration-500 hover:scale-105"
        />
      </div>

      {/* 4 Card Kecil */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className="relative overflow-hidden rounded-xl shadow-md group cursor-pointer"
          >
            <img
              src={cat.img}
              alt={cat.name}
              className="w-full h-40 object-cover transform transition duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
              <p className="text-white text-lg font-semibold">{cat.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
