import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import ListaProductosPage from "./pages/ListaProductosPage";
import AgregarProductoPage from "./pages/AgregarProductoPage";
import { PRODUCTOS } from "../../data/productos";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

function InventarioModule() {
  const [productos, setProductos] = useState(PRODUCTOS);
  const location = useLocation(); // Hook para obtener la ubicación actual
  const isModuleRoot = location.pathname === "/inventario"; // Verifica si estamos exactamente en "/inventario"

  const agregarProducto = (nuevoProducto) => {
    setProductos([...productos, nuevoProducto]);
  };

  const editarProducto = (productoActualizado) => {
    setProductos(
      productos.map((producto) =>
        producto.id === productoActualizado.id ? productoActualizado : producto
      )
    );
  };

  const eliminarProducto = (id) => {
    setProductos(productos.filter((producto) => producto.id !== id));
  };

  const productosPorCategoria = productos.reduce((acc, producto) => {
    acc[producto.categoria] = (acc[producto.categoria] || 0) + producto.stock;
    return acc;
  }, {});

  const graficaDatos = Object.keys(productosPorCategoria).map((categoria) => ({
    categoria,
    stock: productosPorCategoria[categoria],
  }));

  return (
    <div className="space-y-6">
      {/* Mostrar mensaje y gráfica solo en el módulo padre */}
      {isModuleRoot && (
        <div className="bg-gradient-to-r from-orange-400 to-orange-500 text-white p-6 rounded-lg shadow-md mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-3xl font-bold flex items-center">
              <span role="img" aria-label="Inventario" className="mr-2">
                📦
              </span>
              Bienvenido al Módulo de Inventario
            </h2>
          </div>
          <p className="text-md mb-4">
            Administra tus productos veterinarios, mantén el control del stock y los precios de forma eficiente.
          </p>
          {/* Gráfica de estadísticas */}
          <div className="bg-white text-dark p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-bold mb-4">Stock por Categoría</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={graficaDatos}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="categoria" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="stock" fill="#ffa726" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}

      {/* Rutas del Módulo */}
      <Routes>
        <Route
          path="productos"
          element={
            <ListaProductosPage
              productos={productos}
              onEditar={editarProducto}
              onEliminar={eliminarProducto}
            />
          }
        />
        <Route
          path="agregar"
          element={<AgregarProductoPage onAgregar={agregarProducto} />}
        />
        <Route
          path=""
          element={
            <div className="text-center">
              <h3 className="text-2xl font-semibold">
                Bienvenido al Módulo de Inventario
              </h3>
              <p className="text-gray-600">
                Selecciona una opción del menú lateral para comenzar.
              </p>
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default InventarioModule;
