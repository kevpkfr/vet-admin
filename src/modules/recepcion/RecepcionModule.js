import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import AgendaCitasPage from "./pages/AgendaCitasPage";
import RegistroPacientesPage from "./pages/RegistroPacientesPage";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
} from "recharts";

// Datos de ejemplo para la gráfica
const citasData = [
  { name: "Citas Completadas", value: 60 },
  { name: "Citas Pendientes", value: 40 },
];

const COLORS = ["#82ca9d", "#ff7300"];

function RecepcionModule() {
  const location = useLocation();
  const isModuleRoot = location.pathname === "/recepcion"; // Mostrar bienvenida solo en la raíz del módulo

  return (
    <div className="space-y-6">
      {/* Mostrar mensaje y gráfica solo en la raíz del módulo */}
      {isModuleRoot && (
        <div className="bg-gradient-to-r from-orange-400 to-orange-500 text-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-3xl font-bold mb-2">Bienvenido al Módulo de Recepción</h2>
          <p className="text-md mb-4">
            Administra las citas y registra nuevos pacientes con facilidad.
          </p>
          {/* Gráfica de estadísticas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white text-dark p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-bold mb-4">Estado de Citas</h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={citasData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    fill="#8884d8"
                  >
                    {citasData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="flex flex-col justify-center items-center text-center">
              <h3 className="text-lg font-bold mb-2">Datos Clave</h3>
              <p className="text-gray-700 mb-1">
                <strong>60</strong> Citas completadas
              </p>
              <p className="text-gray-700 mb-1">
                <strong>40</strong> Citas pendientes
              </p>
              <p className="text-gray-700">
                Registra pacientes para mantener la información actualizada.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Rutas del módulo */}
      <Routes>
        <Route path="agenda" element={<AgendaCitasPage />} />
        <Route path="registro-pacientes" element={<RegistroPacientesPage />} />
      </Routes>
    </div>
  );
}

export default RecepcionModule;
