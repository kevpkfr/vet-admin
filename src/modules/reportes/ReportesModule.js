import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import IngresosPage from "./pages/IngresosPage";
import ServiciosPage from "./pages/ServiciosPage";
import InventarioPage from "./pages/InventarioPage";
import GeneralPage from "./pages/GeneralPage";
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

// Datos de ejemplo para las estadísticas
const ingresosData = [
  { mes: "Enero", ingresos: 15000 },
  { mes: "Febrero", ingresos: 20000 },
  { mes: "Marzo", ingresos: 18000 },
  { mes: "Abril", ingresos: 22000 },
];

const serviciosData = [
  { servicio: "Consulta General", cantidad: 120 },
  { servicio: "Vacunación", cantidad: 80 },
  { servicio: "Cirugías", cantidad: 45 },
  { servicio: "Otros", cantidad: 30 },
];

function ReportesModule() {
  const location = useLocation();
  const isModuleRoot = location.pathname === "/reportes"; // Mostrar bienvenida solo en la raíz del módulo

  return (
    <div className="space-y-6">
      {/* Mostrar bienvenida y estadísticas solo en la raíz del módulo */}
      {isModuleRoot && (
        <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white p-6 rounded-lg shadow-md mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-4xl font-bold">Bienvenido al Módulo de Reportes</h2>
            <span className="text-6xl">📊</span>
          </div>
          <p className="text-md mb-4">
            Analiza los ingresos, servicios, inventarios y reportes generales de tu clínica.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Gráfico de ingresos */}
            <div className="bg-white text-dark p-4 rounded-lg shadow-lg">
              <h3 className="text-lg font-bold mb-4">Ingresos Mensuales</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={ingresosData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="mes" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="ingresos" fill="#4caf50" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            {/* Gráfico de servicios */}
            <div className="bg-white text-dark p-4 rounded-lg shadow-lg">
              <h3 className="text-lg font-bold mb-4">Servicios Prestados</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={serviciosData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="servicio" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="cantidad" fill="#2196f3" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      )}

      {/* Rutas del módulo */}
      <Routes>
        <Route path="ingresos" element={<IngresosPage />} />
        <Route path="servicios" element={<ServiciosPage />} />
        <Route path="inventario" element={<InventarioPage />} />
        <Route path="general" element={<GeneralPage />} />
        <Route
          path=""
          element={
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-gray-800">
                Bienvenido al Módulo de Reportes
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

export default ReportesModule;
