import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import ListaEmpleadosPage from "./pages/ListaEmpleadosPage";
import DetalleEmpleadoPage from "./pages/DetalleEmpleadoPage";
import HorariosPage from "./pages/HorariosPage";
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

// Datos de ejemplo para estadísticas
const empleadosData = [
  { mes: "Enero", empleados: 50 },
  { mes: "Febrero", empleados: 60 },
  { mes: "Marzo", empleados: 55 },
  { mes: "Abril", empleados: 58 },
];

function RRHHModule() {
  const location = useLocation();
  const isModuleRoot = location.pathname === "/rrhh"; // Mostrar bienvenida solo en la raíz del módulo

  return (
    <div className="space-y-6">
      {/* Mostrar bienvenida y estadísticas solo en la raíz del módulo */}
      {isModuleRoot && (
        <div className="bg-gradient-to-r from-purple-500 to-purple-700 text-white p-6 rounded-lg shadow-md mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-4xl font-bold">Bienvenido al Módulo de RRHH</h2>
            <span className="text-6xl">👥</span>
          </div>
          <p className="text-md mb-4">
            Administra tu equipo de trabajo, gestiona turnos y asigna horarios
            de forma eficiente.
          </p>
          {/* Estadísticas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Gráfica de barras */}
            <div className="bg-white text-dark p-4 rounded-lg shadow-lg">
              <h3 className="text-lg font-bold mb-4">Empleados por Mes</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={empleadosData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="mes" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="empleados" fill="#6b5b95" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            {/* Información Clave */}
            <div className="flex flex-col justify-center items-center text-center bg-white p-4 rounded-lg shadow-lg">
              <h3 className="text-lg font-bold mb-4">Datos Clave</h3>
              <p className="text-gray-800 text-2xl font-bold mb-2">58</p>
              <p className="text-gray-700 mb-1">Empleados Activos</p>
              <p className="text-gray-800 text-2xl font-bold mb-2">12</p>
              <p className="text-gray-700 mb-1">Horarios Asignados</p>
              <p className="text-gray-600">
                Mantén una gestión organizada de tu equipo y sus horarios.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Rutas del módulo */}
      <Routes>
        <Route path="empleados" element={<ListaEmpleadosPage />} />
        <Route path="empleados/:id" element={<DetalleEmpleadoPage />} />
        <Route path="horarios" element={<HorariosPage />} />
        <Route
          path=""
          element={
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-gray-800">
                Bienvenido al Módulo de RRHH
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

export default RRHHModule;
