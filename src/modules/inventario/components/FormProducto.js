import React from "react";

function FormProducto({ form, onChange, onSubmit, categorias, productos, modoEdicion }) {
  return (
    <form
      onSubmit={onSubmit}
      className="bg-white p-4 rounded shadow space-y-4"
    >
      <h3 className="text-xl font-bold">
        {modoEdicion ? "Editar Producto" : "Agregar Producto"}
      </h3>

      {/* Seleccionar producto del catálogo */}
      <div>
        <label className="block text-sm font-medium">Seleccionar Producto (Catálogo)</label>
        <select
          name="productoCatalogo"
          onChange={onChange}
          className="w-full border border-gray-300 rounded px-2 py-1"
        >
          <option value="">Selecciona un producto del catálogo</option>
          {productos.map((producto) => (
            <option key={producto.id} value={producto.nombre}>
              {producto.nombre} - {producto.categoria}
            </option>
          ))}
        </select>
      </div>

      {/* Formulario para agregar/editar producto */}
      <div>
        <label className="block text-sm font-medium">Nombre</label>
        <input
          type="text"
          name="nombre"
          value={form.nombre}
          onChange={onChange}
          className="w-full border border-gray-300 rounded px-2 py-1"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Categoría</label>
        <select
          name="categoria"
          value={form.categoria}
          onChange={onChange}
          className="w-full border border-gray-300 rounded px-2 py-1"
          required
        >
          <option value="">Selecciona una categoría</option>
          {categorias.map((categoria) => (
            <option key={categoria.id} value={categoria.nombre}>
              {categoria.nombre}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium">Stock</label>
        <input
          type="number"
          name="stock"
          value={form.stock}
          onChange={onChange}
          className="w-full border border-gray-300 rounded px-2 py-1"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Precio</label>
        <input
          type="number"
          step="0.01"
          name="precio"
          value={form.precio}
          onChange={onChange}
          className="w-full border border-gray-300 rounded px-2 py-1"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        {modoEdicion ? "Guardar Cambios" : "Agregar Producto"}
      </button>
    </form>
  );
}

export default FormProducto;
