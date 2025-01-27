import React from "react";
import { Routes, Route } from "react-router-dom";
import HistoriasClinicasPage from "./pages/HistoriasClinicasPage";
import DetalleHistoriaClinicaPage from "./pages/DetalleHistoriaClinicaPage";
import PrescripcionesPage from "./pages/PrescripcionesPage";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid, ResponsiveContainer } from "recharts";

const data = [
  { mes: "Enero", consultas: 30 },
  { mes: "Febrero", consultas: 45 },
  { mes: "Marzo", consultas: 50 },
  { mes: "Abril", consultas: 60 },
];

function ClinicoModule() {
  return (
    <Routes>
      <Route path="historias" element={<HistoriasClinicasPage />} />
      <Route path="historias/:id" element={<DetalleHistoriaClinicaPage />} />
      <Route path="consultas" element={<PrescripcionesPage />} />
      <Route
        path=""
        element={
          <div className="p-6 space-y-6">
            {/* Mensaje de Bienvenida */}
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-lg shadow-md">
              <h1 className="text-3xl font-bold mb-2">¡Bienvenido al Módulo Clínico!</h1>
              <p className="text-lg">
                Administra las historias clínicas, consultas y prescripciones de tus pacientes.
              </p>
            </div>

            {/* Gráfico de Estadísticas */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Estadísticas de Consultas</h2>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="mes" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="consultas" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        }
      />
    </Routes>
  );
}

export default ClinicoModule;
