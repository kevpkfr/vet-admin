import React from "react";

function ProductoCard({ producto, onEliminar, onEditar }) {
  return (
    <div className="bg-white p-4 rounded shadow space-y-2">
      <h3 className="text-lg font-bold">{producto.nombre}</h3>
      <p><strong>Categoría:</strong> {producto.categoria}</p>
      <p><strong>Stock:</strong> {producto.stock}</p>
      <p><strong>Precio:</strong> ${producto.precio.toFixed(2)}</p>
      <div className="flex space-x-2">
        <button
          onClick={() => onEditar(producto)}
          className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
        >
          Editar
        </button>
        <button
          onClick={() => onEliminar(producto.id)}
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}

export default ProductoCard;
