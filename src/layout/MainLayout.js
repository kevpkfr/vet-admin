import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  FiHome,
  FiMenu,
  FiX,
  FiCalendar,
  FiUsers,
  FiFileText,
  FiShoppingBag,
  FiPlus,
  FiCreditCard,
  FiClock,
  FiTrendingUp,
  FiActivity,
  FiUser,
  FiSettings,
  FiSearch,
  FiBell,
  FiSun,
} from "react-icons/fi";
import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const modules = {
  recepcion: [
    { path: "agenda", name: "Agenda de Citas", icon: <FiCalendar /> },
    { path: "registro-pacientes", name: "Registro de Pacientes", icon: <FiUsers /> },
  ],
  clinico: [
    { path: "historias", name: "Historial Clínico", icon: <FiFileText /> },
    { path: "consultas", name: "Consultas", icon: <FiShoppingBag /> },
  ],
  hospital: [
    { path: "pacientes", name: "Pacientes Hospitalizados", icon: <FiUsers /> },
    { path: "cirugias", name: "Cirugías Programadas", icon: <FiPlus /> },
  ],
  inventario: [
    { path: "productos", name: "Lista de Productos", icon: <FiShoppingBag /> },
    { path: "agregar", name: "Agregar Producto", icon: <FiPlus /> },
  ],
  facturacion: [
    { path: "facturas", name: "Facturas", icon: <FiFileText /> },
    { path: "pagos", name: "Pagos", icon: <FiCreditCard /> },
  ],
  rrhh: [
    { path: "empleados", name: "Lista de Empleados", icon: <FiUsers /> },
    { path: "horarios", name: "Gestión de Horarios", icon: <FiClock /> },
  ],
  reportes: [
    { path: "ingresos", name: "Reporte de Ingresos", icon: <FiTrendingUp /> },
    { path: "servicios", name: "Reporte de Servicios", icon: <FiActivity /> },
  ],
  configuracion: [
    { path: "general", name: "Configuración General", icon: <FiSettings /> },
    { path: "usuario", name: "Gestión de Usuarios", icon: <FiUser /> },
  ],
};

const dashboardGeneralData = [
  { mes: "Enero", ingresos: 10000, egresos: 5000 },
  { mes: "Febrero", ingresos: 12000, egresos: 6000 },
  { mes: "Marzo", ingresos: 15000, egresos: 8000 },
  { mes: "Abril", ingresos: 13000, egresos: 7000 },
];

function MainLayout({ children }) {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname.split("/");
  const currentModule = currentPath[1];
  const submodules = modules[currentModule] || [];
  const isDashboard = location.pathname === "/";

  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const cerrarSesion = () => {
    alert("Cerrando sesión...");
    navigate("/login");
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {isSidebarOpen && (
        <aside className="w-64 bg-dark text-white fixed h-screen z-10">
          <nav className="flex-1 px-4">
            {submodules.length > 0 ? (
              <>
                <h3 className="mt-4 text-lg font-semibold">Submódulos</h3>
                <ul className="space-y-2 mt-2">
                  {submodules.map((submodule) => (
                    <li key={submodule.path}>
                      <Link
                        to={`/${currentModule}/${submodule.path}`}
                        className="flex items-center gap-2 px-4 py-2 rounded hover:bg-orange-500 transition"
                      >
                        {submodule.icon}
                        {submodule.name}
                      </Link>
                    </li>
                  ))}
                </ul>
                <hr className="my-4 border-gray-600" />
                <Link
                  to="/"
                  className="flex items-center gap-2 px-4 py-2 rounded hover:bg-orange-500 transition"
                >
                  <FiHome />
                  Volver al Menú Principal
                </Link>
              </>
            ) : (
              <>
                <h3 className="mt-4 text-lg font-semibold">Módulos</h3>
                <ul className="space-y-2 mt-2">
                  {Object.keys(modules).map((module) => (
                    <li key={module}>
                      <Link
                        to={`/${module}`}
                        className="flex items-center gap-2 px-4 py-2 rounded hover:bg-orange-500 transition"
                      >
                        {modules[module][0]?.icon}
                        {module.charAt(0).toUpperCase() + module.slice(1)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </nav>

          <div className="p-4">
            <button
              className="w-full py-2 bg-orange-500 hover:bg-orange-600 rounded font-bold text-white"
              onClick={cerrarSesion}
            >
              Cerrar Sesión
            </button>
          </div>
        </aside>
      )}

      <header
        className={`flex items-center justify-between ${
          isSidebarOpen ? "ml-64" : "ml-0"
        } bg-dark text-white px-6 py-3 fixed w-full transition-all z-20`}
      >
        <button className="text-2xl" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
          {isSidebarOpen ? <FiX /> : <FiMenu />}
        </button>

        <div className="flex items-center gap-4">
          <img src="/assets/images/logo.png" alt="Pet Pocket" className="h-8 w-8" />
          <h1 className="text-lg font-bold">PET POCKET</h1>
        </div>

        <div className="flex items-center bg-gray-200 text-dark rounded-lg px-3 py-1">
          <FiSearch className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Búsqueda"
            className="bg-transparent focus:outline-none"
          />
        </div>

        <div className="flex items-center gap-4 relative">
          <FiSun className="text-gray-300 cursor-pointer" />
          <div className="relative">
            <FiBell
              className="text-gray-300 cursor-pointer"
              onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
            />
            {isNotificationsOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white text-dark shadow-lg rounded-lg">
                <ul className="py-2">
                  <li className="px-4 py-2 hover:bg-gray-100">Notificación 1</li>
                  <li className="px-4 py-2 hover:bg-gray-100">Notificación 2</li>
                  <li className="px-4 py-2 hover:bg-gray-100">Notificación 3</li>
                </ul>
              </div>
            )}
          </div>
          <div className="relative">
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
            >
              <span className="text-sm font-medium">PET_POT14</span>
              <FiUser className="text-gray-300" />
            </div>
            {isProfileMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white text-dark shadow-lg rounded-lg">
                <ul className="py-2">
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <button
                      className="w-full text-left"
                      onClick={() => navigate("/perfil")}
                    >
                      Ver Perfil
                    </button>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <Link to="/configuracion/general">Configuración</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <button className="w-full text-left" onClick={cerrarSesion}>
                      Cerrar Sesión
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </header>

      <main className={`flex-1 p-6 pt-20 ${isSidebarOpen ? "ml-64" : "ml-0"} transition-all`}>
        {isDashboard && (
          <div className="bg-gradient-to-r from-orange-400 to-orange-500 text-white p-4 rounded-lg shadow-md mb-6">
            <h1 className="text-3xl font-bold mb-2">Dashboard General</h1>
            <p className="text-md mb-4">Resumen de ingresos y egresos.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white text-dark p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-bold">Ingresos vs Egresos</h3>
                <ResponsiveContainer width="100%" height={200}>
                  <BarChart data={dashboardGeneralData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="mes" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="ingresos" fill="#82ca9d" />
                    <Bar dataKey="egresos" fill="#ff7300" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        )}
        {children}
      </main>
    </div>
  );
}

export default MainLayout;
