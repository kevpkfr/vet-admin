import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AgregarProductoPage({ onAgregar }) {
  const [form, setForm] = useState({
    nombre: "",
    stock: "",
    precio: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const nuevoProducto = {
      id: Date.now(),
      nombre: form.nombre,
      categoria: "Sin categoría",
      stock: parseInt(form.stock),
      precio: parseFloat(form.precio),
    };

    onAgregar(nuevoProducto);
    alert(`Producto agregado: ${form.nombre}`);
    navigate("/inventario/productos");
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <h2 className="text-3xl font-bold mb-6 text-center text-orange-500">
        Agregar Producto
      </h2>
      <div className="bg-white shadow-lg rounded-lg p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Nombre */}
          <div>
            <label
              htmlFor="nombre"
              className="block text-lg font-medium text-gray-700"
            >
              Nombre del Producto
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={form.nombre}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 px-3 py-2"
              placeholder="Ej. Vacuna antirrábica"
              required
            />
          </div>

          {/* Stock */}
          <div>
            <label
              htmlFor="stock"
              className="block text-lg font-medium text-gray-700"
            >
              Stock Disponible
            </label>
            <input
              type="number"
              id="stock"
              name="stock"
              value={form.stock}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 px-3 py-2"
              placeholder="Ej. 50"
              required
            />
          </div>

          {/* Precio */}
          <div>
            <label
              htmlFor="precio"
              className="block text-lg font-medium text-gray-700"
            >
              Precio por Unidad
            </label>
            <input
              type="number"
              id="precio"
              name="precio"
              value={form.precio}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 px-3 py-2"
              placeholder="Ej. 20.50"
              step="0.01"
              required
            />
          </div>

          {/* Botón */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-md shadow focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
            >
              Guardar Producto
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AgregarProductoPage;
