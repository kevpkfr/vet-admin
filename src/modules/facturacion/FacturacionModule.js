import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import DashboardFacturacionPage from "./pages/DashboardFacturacionPage";
import ListaFacturasPage from "./pages/ListaFacturasPage";
import DetalleFacturaPage from "./pages/DetalleFacturaPage";
import PagosPage from "./pages/PagosPage";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

// Datos de ejemplo para la gráfica
const datosFacturacion = [
  { mes: "Enero", ingresos: 5000, gastos: 3000 },
  { mes: "Febrero", ingresos: 6000, gastos: 3500 },
  { mes: "Marzo", ingresos: 7000, gastos: 4000 },
  { mes: "Abril", ingresos: 8000, gastos: 4500 },
];

function FacturacionModule() {
  const location = useLocation();
  const isModuleRoot = location.pathname === "/facturacion"; // Mostrar gráfica solo en el módulo raíz

  return (
    <div className="space-y-6">
      {/* Mostrar mensaje y gráfica solo en la raíz del módulo */}
      {isModuleRoot && (
        <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white p-6 rounded-lg shadow-md mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-4xl font-bold">
              Bienvenido al Módulo de Facturación
            </h2>
            <span className="text-6xl">💰</span>
          </div>
          <p className="text-md mb-4">
            Administra tus ingresos, gastos y pagos de forma eficiente.
          </p>
          {/* Gráfica de estadísticas */}
          <div className="bg-white text-dark p-4 rounded-lg shadow-lg">
            <h3 className="text-lg font-bold mb-4">Resumen Financiero</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={datosFacturacion}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="mes" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="ingresos"
                  stroke="#4caf50"
                  strokeWidth={2}
                  dot={{ fill: "#4caf50", r: 4 }}
                />
                <Line
                  type="monotone"
                  dataKey="gastos"
                  stroke="#f44336"
                  strokeWidth={2}
                  dot={{ fill: "#f44336", r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}

      {/* Rutas del módulo */}
      <Routes>
        <Route path="dashboard" element={<DashboardFacturacionPage />} />
        <Route path="facturas" element={<ListaFacturasPage />} />
        <Route path="facturas/:id" element={<DetalleFacturaPage />} />
        <Route path="pagos" element={<PagosPage />} />
        <Route
          path=""
          element={
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-gray-800">
                Bienvenido al Módulo de Facturación
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

export default FacturacionModule;
