import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import LoginPage from "../layout/LoginPage";
import RegisterPage from "../layout/RegisterPage";

// Importa los módulos
import RecepcionModule from "../modules/recepcion/RecepcionModule";
import ClinicoModule from "../modules/clinico/ClinicoModule";
import HospitalModule from "../modules/hospital/HospitalModule";
import InventarioModule from "../modules/inventario/InventarioModule";
import FacturacionModule from "../modules/facturacion/FacturacionModule";
import RRHHModule from "../modules/rrhh/RRHHModule";
import ReportesModule from "../modules/reportes/ReportesModule";
import ConfiguracionModule from "../modules/configuracion/ConfiguracionModule";
import PerfilModule from "../modules/perfil/PerfilModule";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  LineChart,
  Line,
} from "recharts";

// 📊 **Datos de Ejemplo para Estadísticas**
const citasData = [
  { mes: "Enero", citas: 30 },
  { mes: "Febrero", citas: 45 },
  { mes: "Marzo", citas: 50 },
  { mes: "Abril", citas: 40 },
  { mes: "Mayo", citas: 60 },
];

const ingresosData = [
  { mes: "Enero", ingresos: 3000 },
  { mes: "Febrero", ingresos: 4500 },
  { mes: "Marzo", ingresos: 5200 },
  { mes: "Abril", ingresos: 4100 },
  { mes: "Mayo", ingresos: 6200 },
];

// 📌 **Página de Bienvenida con Gráficos Responsivos**
// Página de Bienvenida (Dashboard General)
function WelcomePage() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Dashboard General</h1>
      <p className="text-gray-600">
        Aquí encontrarás un resumen de las estadísticas más relevantes.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Gráfica de Citas */}
        <div className="bg-white p-4 md:p-6 rounded-lg shadow-md w-full">
          <h3 className="text-lg font-bold mb-4">Citas por Mes</h3>
          <div className="w-full h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={citasData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="mes" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="citas" fill="#4CAF50" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Gráfica de Ingresos */}
        <div className="bg-white p-4 md:p-6 rounded-lg shadow-md w-full">
          <h3 className="text-lg font-bold mb-4">Ingresos por Mes</h3>
          <div className="w-full h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={ingresosData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="mes" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="ingresos" stroke="#FF5733" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}


// 📌 **Página de Error 404**
function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-800">
      <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
      <p className="text-xl font-semibold mb-2">Página no encontrada</p>
      <p className="text-gray-600 mb-6">
        Lo sentimos, la página que estás buscando no existe o fue movida.
      </p>
      <a
        href="/"
        className="bg-red-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-red-700 transition"
      >
        Volver al Inicio
      </a>
    </div>
  );
}

// 📌 **Componente de Ruta Privada**
function PrivateRoute({ element }) {
  const isAuthenticated = true; // Lógica de autenticación
  return isAuthenticated ? element : <LoginPage />;
}

// 📌 **Rutas de la Aplicación**
function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rutas Públicas */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registro" element={<RegisterPage />} />

        {/* Rutas Privadas */}
        <Route
          path="/"
          element={
            <MainLayout>
              <WelcomePage />
            </MainLayout>
          }
        />
        <Route
          path="/recepcion/*"
          element={
            <MainLayout>
              <PrivateRoute element={<RecepcionModule />} />
            </MainLayout>
          }
        />
        <Route
          path="/clinico/*"
          element={
            <MainLayout>
              <PrivateRoute element={<ClinicoModule />} />
            </MainLayout>
          }
        />
        <Route
          path="/hospital/*"
          element={
            <MainLayout>
              <PrivateRoute element={<HospitalModule />} />
            </MainLayout>
          }
        />
        <Route
          path="/inventario/*"
          element={
            <MainLayout>
              <PrivateRoute element={<InventarioModule />} />
            </MainLayout>
          }
        />
        <Route
          path="/facturacion/*"
          element={
            <MainLayout>
              <PrivateRoute element={<FacturacionModule />} />
            </MainLayout>
          }
        />
        <Route
          path="/rrhh/*"
          element={
            <MainLayout>
              <PrivateRoute element={<RRHHModule />} />
            </MainLayout>
          }
        />
        <Route
          path="/reportes/*"
          element={
            <MainLayout>
              <PrivateRoute element={<ReportesModule />} />
            </MainLayout>
          }
        />
        <Route
          path="/perfil/*"
          element={
            <MainLayout>
              <PrivateRoute element={<PerfilModule />} />
            </MainLayout>
          }
        />
        <Route
          path="/configuracion/*"
          element={
            <MainLayout>
              <PrivateRoute element={<ConfiguracionModule />} />
            </MainLayout>
          }
        />

        {/* Ruta para manejar 404 */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
