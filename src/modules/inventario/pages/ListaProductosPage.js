import React, { useState } from "react";
import ProductoCard from "../components/ProductoCard";

function ListaProductosPage({ productos, onEditar, onEliminar }) {
  const [productoEditando, setProductoEditando] = useState(null);

  const guardarProductoEditado = (productoActualizado) => {
    onEditar(productoActualizado);
    setProductoEditando(null); // Limpiar estado de edición
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-4">Lista de Productos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {productos.map((producto) => (
          <ProductoCard
            key={producto.id}
            producto={producto}
            onEliminar={onEliminar}
            onEditar={setProductoEditando}
          />
        ))}
      </div>
      {productoEditando && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Editar Producto</h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                guardarProductoEditado(productoEditando);
              }}
            >
              <div className="mb-4">
                <label className="block text-sm font-medium">Nombre</label>
                <input
                  type="text"
                  value={productoEditando.nombre}
                  onChange={(e) =>
                    setProductoEditando({
                      ...productoEditando,
                      nombre: e.target.value,
                    })
                  }
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium">Categoría</label>
                <select
                  value={productoEditando.categoria}
                  onChange={(e) =>
                    setProductoEditando({
                      ...productoEditando,
                      categoria: e.target.value,
                    })
                  }
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  required
                >
                  <option value="Vacunas">Vacunas</option>
                  <option value="Medicamentos">Medicamentos</option>
                  <option value="Accesorios">Accesorios</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium">Stock</label>
                <input
                  type="number"
                  value={productoEditando.stock}
                  onChange={(e) =>
                    setProductoEditando({
                      ...productoEditando,
                      stock: e.target.value,
                    })
                  }
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium">Precio</label>
                <input
                  type="number"
                  step="0.01"
                  value={productoEditando.precio}
                  onChange={(e) =>
                    setProductoEditando({
                      ...productoEditando,
                      precio: e.target.value,
                    })
                  }
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  required
                />
              </div>
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setProductoEditando(null)}
                  className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  Guardar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default ListaProductosPage;
