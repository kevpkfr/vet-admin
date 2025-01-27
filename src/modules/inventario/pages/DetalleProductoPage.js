import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { PRODUCTOS_INICIALES } from "../../../data/productos";

function DetalleProductoPage() {
  const { id } = useParams();
  const producto = PRODUCTOS_INICIALES.find((p) => p.id === parseInt(id));
  const [form, setForm] = useState(producto || {});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = (e) => {
    e.preventDefault();
    alert(`Producto actualizado: ${JSON.stringify(form, null, 2)}`);
  };

  if (!producto) {
    return <p>Producto no encontrado.</p>;
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-4">Detalle de Producto</h2>
      <form
        onSubmit={handleSave}
        className="bg-white p-4 rounded shadow space-y-4"
      >
        <div>
          <label className="block text-sm font-medium">Nombre</label>
          <input
            type="text"
            name="nombre"
            value={form.nombre}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-2 py-1"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Categoría</label>
          <input
            type="text"
            name="categoria"
            value={form.categoria}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-2 py-1"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Stock</label>
          <input
            type="number"
            name="stock"
            value={form.stock}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-2 py-1"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Precio</label>
          <input
            type="number"
            step="0.01"
            name="precio"
            value={form.precio}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-2 py-1"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Guardar Cambios
        </button>
      </form>
    </div>
  );
}

export default DetalleProductoPage;
