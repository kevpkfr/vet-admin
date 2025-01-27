import React from "react";
import { Routes, Route } from "react-router-dom";
import PacientesHospitalizadosPage from "./pages/PacientesHospitalizadosPage";
import CirugiasProgramadasPage from "./pages/CirugiasProgramadasPage";
import DetalleCirugiaPage from "./pages/DetalleCirugiaPage";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const data = [
  { mes: "Enero", hospitalizados: 20 },
  { mes: "Febrero", hospitalizados: 35 },
  { mes: "Marzo", hospitalizados: 40 },
  { mes: "Abril", hospitalizados: 45 },
];

function HospitalModule() {
  return (
    <Routes>
      <Route path="pacientes" element={<PacientesHospitalizadosPage />} />
      <Route path="cirugias" element={<CirugiasProgramadasPage />} />
      <Route path="cirugias/:id" element={<DetalleCirugiaPage />} />
      <Route
        path=""
        element={
          <div className="p-6 space-y-6">
            {/* Mensaje de Bienvenida */}
            <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-lg shadow-md">
              <h1 className="text-3xl font-bold mb-2">
                ¡Bienvenido al Módulo de Hospital!
              </h1>
              <p className="text-lg">
                Administra los pacientes hospitalizados y las cirugías
                programadas con facilidad.
              </p>
            </div>

            {/* Gráfico de Estadísticas */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">
                Estadísticas de Pacientes Hospitalizados
              </h2>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="mes" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="hospitalizados" fill="#82ca9d" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        }
      />
    </Routes>
  );
}

export default HospitalModule;
