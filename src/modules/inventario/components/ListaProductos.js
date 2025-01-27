import React, { useState } from "react";
import { CATEGORIAS } from "../../../data/productos";

function ListaProductos({ productos, onEditar, onEliminar }) {
  const [editable, setEditable] = useState(null);
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    onEditar(form);
    setEditable(null);
  };

  return (
    <table className="table-auto w-full bg-white rounded shadow">
      <thead>
        <tr>
          <th className="px-4 py-2 text-left">Nombre</th>
          <th className="px-4 py-2 text-left">Categoría</th>
          <th className="px-4 py-2 text-left">Stock</th>
          <th className="px-4 py-2 text-left">Precio</th>
          <th className="px-4 py-2 text-left">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {productos.map((producto) => (
          <tr key={producto.id} className="hover:bg-gray-100">
            {editable === producto.id ? (
              <>
                <td className="border px-4 py-2">
                  <input
                    type="text"
                    name="nombre"
                    value={form.nombre}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded px-2 py-1"
                  />
                </td>
                <td className="border px-4 py-2">
                  <select
                    name="categoria"
                    value={form.categoria}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded px-2 py-1"
                  >
                    {CATEGORIAS.map((categoria) => (
                      <option key={categoria.id} value={categoria.nombre}>
                        {categoria.nombre}
                      </option>
                    ))}
                  </select>
                </td>
                <td className="border px-4 py-2">
                  <input
                    type="number"
                    name="stock"
                    value={form.stock}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded px-2 py-1"
                  />
                </td>
                <td className="border px-4 py-2">
                  <input
                    type="number"
                    step="0.01"
                    name="precio"
                    value={form.precio}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded px-2 py-1"
                  />
                </td>
                <td className="border px-4 py-2">
                  <button
                    onClick={handleSave}
                    className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
                  >
                    Guardar
                  </button>
                </td>
              </>
            ) : (
              <>
                <td className="border px-4 py-2">{producto.nombre}</td>
                <td className="border px-4 py-2">{producto.categoria}</td>
                <td className="border px-4 py-2">{producto.stock}</td>
                <td className="border px-4 py-2">${producto.precio.toFixed(2)}</td>
                <td className="border px-4 py-2">
                  <button
                    onClick={() => {
                      setEditable(producto.id);
                      setForm(producto);
                    }}
                    className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 mr-2"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => onEliminar(producto.id)}
                    className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                  >
                    Eliminar
                  </button>
                </td>
              </>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ListaProductos;
