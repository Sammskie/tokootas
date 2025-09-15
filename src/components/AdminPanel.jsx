import { useState } from "react";

const API_BASE = "/api/products"; // pakai proxy di vite.config.js

export default function AdminPanel({ products, setProducts }) {
  const [form, setForm] = useState({ id: null, name: "", price: "", description: "", image: "" });
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  // Tambah produk (POST)
  const handleAdd = async () => {
    if (!form.name || !form.price) return alert("Nama & Harga wajib diisi");
    try {
      const res = await fetch(API_BASE, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          price: Number(form.price),
          description: form.description,
          image: form.image,
        }),
      });
      const newProd = await res.json();
      setProducts([newProd, ...products]); // update frontend
      setForm({ id: null, name: "", price: "", description: "", image: "" });
    } catch (err) {
      console.error("Add product error:", err);
      alert("Gagal tambah produk");
    }
  };

  const handleEdit = (p) => {
    setForm({
      id: p._id,
      name: p.name,
      price: p.price,
      description: p.description || "",
      image: p.image || "",
    });
    setIsEditing(true);
  };

  const handleUpdate = async () => {
    if (!form.name || !form.price) return alert("Nama & Harga wajib diisi");
    try {
      const res = await fetch(`${API_BASE}/${form.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          price: Number(form.price),
          description: form.description,
          image: form.image,
        }),
      });
      const updated = await res.json();
      setProducts(products.map((p) => (p._id === updated._id ? updated : p)));
      setForm({ id: null, name: "", price: "", description: "", image: "" });
      setIsEditing(false);
    } catch (err) {
      console.error("Update product error:", err);
      alert("Gagal update produk");
    }
  };

  const handleDelete = async (id) => {
    const ok = confirm("Yakin ingin menghapus produk ini?");
    if (!ok) return;
    try {
      await fetch(`${API_BASE}/${id}`, { method: "DELETE" });
      setProducts(products.filter((p) => p._id !== id));
    } catch (err) {
      console.error("Delete error:", err);
      alert("Gagal hapus produk");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6">Admin Panel - Kelola Produk</h1>

      {/* Form */}
      <div className="bg-white p-6 rounded-xl shadow mb-6">
        <h2 className="text-xl font-semibold mb-4">{isEditing ? "Edit Produk" : "Tambah Produk"}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <input name="name" value={form.name} onChange={handleChange} placeholder="Nama Produk" className="p-2 border rounded" />
          <input name="price" value={form.price} onChange={handleChange} placeholder="Harga (angka saja)" className="p-2 border rounded" />
          <input name="image" value={form.image} onChange={handleChange} placeholder="URL Gambar (opsional)" className="p-2 border rounded md:col-span-2" />
          <textarea name="description" value={form.description} onChange={handleChange} placeholder="Deskripsi (opsional)" className="p-2 border rounded md:col-span-2" />
        </div>

        <div className="flex gap-3">
          {isEditing ? (
            <>
              <button onClick={handleUpdate} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Update</button>
              <button
                onClick={() => {
                  setIsEditing(false);
                  setForm({ id: null, name: "", price: "", description: "", image: "" });
                }}
                className="px-4 py-2 border rounded"
              >
                Batal
              </button>
            </>
          ) : (
            <button onClick={handleAdd} className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
              Tambah
            </button>
          )}
        </div>
      </div>

      {/* Tabel Produk */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-4">Daftar Produk</h2>
        {products.length === 0 ? (
          <p className="text-gray-500">Belum ada produk</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full table-auto border-collapse">
              <thead>
                <tr className="bg-gray-200 text-left">
                  <th className="p-3 border">Gambar</th>
                  <th className="p-3 border">Nama</th>
                  <th className="p-3 border">Harga</th>
                  <th className="p-3 border">Deskripsi</th>
                  <th className="p-3 border">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {products.map((p) => (
                  <tr key={p._id} className="hover:bg-gray-50 align-top">
                    <td className="p-3 border w-28">
                      <img src={p.image || "https://picsum.photos/200/150"} alt={p.name} className="w-full h-20 object-cover rounded" />
                    </td>
                    <td className="p-3 border">{p.name}</td>
                    <td className="p-3 border">Rp {Number(p.price || 0).toLocaleString()}</td>
                    <td className="p-3 border">{p.description}</td>
                    <td className="p-3 border flex gap-2">
                      <button onClick={() => handleEdit(p)} className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600">Edit</button>
                      <button onClick={() => handleDelete(p._id)} className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700">Hapus</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
