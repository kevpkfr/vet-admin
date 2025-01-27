import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import UsuariosPage from "./pages/UsuariosPage";
import RolesPermisosPage from "./pages/RolesPermisosPage";
import ConfiguracionGeneralPage from "./pages/ConfiguracionGeneralPage";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from "recharts";

// Datos de ejemplo para la gráfica de usuarios
const rolesData = [
  { name: "Administradores", value: 4 },
  { name: "Veterinarios", value: 10 },
  { name: "Recepcionistas", value: 6 },
];

const colores = ["#0088FE", "#00C49F", "#FFBB28"];

function ConfiguracionModule() {
  const location = useLocation();
  const isModuleRoot = location.pathname === "/configuracion"; // Mostrar estadísticas solo en la raíz del módulo

  return (
    <div className="space-y-6">
      {/* Mostrar bienvenida y estadísticas solo en la raíz del módulo */}
      {isModuleRoot && (
        <div className="bg-gradient-to-r from-purple-400 to-purple-600 text-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-3xl font-bold mb-2">
            Bienvenido al Módulo de Configuración
          </h2>
          <p className="text-md mb-4">
            Gestiona usuarios, roles, permisos y ajustes generales del sistema.
          </p>
          {/* Estadísticas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Gráfico de roles */}
            <div className="bg-white text-dark p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-bold mb-4">Distribución de Roles</h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={rolesData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    fill="#8884d8"
                    label
                  >
                    {rolesData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={colores[index]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
            {/* Mensaje de ayuda */}
            <div className="flex flex-col justify-center items-center text-center">
              <h3 className="text-lg font-bold mb-2">Información del Sistema</h3>
              <p className="text-gray-700 mb-1">
                <strong>20</strong> Usuarios activos
              </p>
              <p className="text-gray-700 mb-1">
                <strong>3</strong> Roles configurados
              </p>
              <p className="text-gray-700">
                Mantén el control de accesos y permisos para garantizar la
                seguridad del sistema.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Rutas del módulo */}
      <Routes>
        <Route path="usuario" element={<UsuariosPage />} />
        <Route path="roles" element={<RolesPermisosPage />} />
        <Route path="general" element={<ConfiguracionGeneralPage />} />
        <Route
          path=""
          element={
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-gray-800">
                Bienvenido al Módulo de Configuración
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

export default ConfiguracionModule;
