import { Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    product: "Eloise Ransel Sekolah Tas Wanita by ermybag",
    customer: "Evi Muhapilah",
    review:
      "Koleksi ermy bag emang bikin galau, semuanya bagus dan gemes2 banget. Tapi langsung jatuh cinta pada pandangan pertama sama eloise bag. Thank you ermy bag dan team sudah menciptakan tas secantik ini. Bahannya bagus lembut, ukurannya medium tp dalamnya luas. Pokoknya mantap banget deh. Love ermy bag❤",
    image: "https://picsum.photos/80/80?random=41",
    rating: 5,
  },
  {
    id: 2,
    product: "Oyya Ransel by ermybag backpack tas sekolah",
    customer: "Kusumo Wardani",
    review:
      "Tasnya bagus, tinggal diuji kualitas jahitan. Kl bisa produksi yg ukurannya lbh besar",
    image: "https://picsum.photos/80/80?random=42",
    rating: 4,
  },
  {
    id: 3,
    product: "Molly Ransel Sekolah Tas Wanita by ermybag",
    customer: "Indah Nirmala",
    review: "Pas muat banyak",
    image: "https://picsum.photos/80/80?random=43",
    rating: 4,
  },
];

export default function Reviews() {
  return (
    <section className="px-6 py-12 bg-gray-50">
      <h2 className="text-2xl font-semibold text-center mb-10">
        Apa Kata Mereka :
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.map((rev) => (
          <div
            key={rev.id}
            className="bg-white rounded-xl shadow-md p-6 flex flex-col gap-3"
          >
            {/* Gambar + Produk */}
            <div className="flex items-center gap-4">
              <img
                src={rev.image}
                alt={rev.product}
                className="w-16 h-16 object-cover rounded-lg border"
              />
              <div>
                {/* Rating */}
                <div className="flex text-yellow-500">
                  {Array.from({ length: rev.rating }).map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <h3 className="text-sm font-semibold mt-1">{rev.product}</h3>
              </div>
            </div>

            {/* Customer */}
            <p className="font-semibold text-gray-700">{rev.customer}</p>

            {/* Ulasan */}
            <p className="text-gray-600 text-sm">"{rev.review}"</p>
          </div>
        ))}
      </div>
    </section>
  );
}
