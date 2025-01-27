import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  FiHome,
  FiMenu,
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
  FiBell,
  FiSearch,
} from "react-icons/fi";

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

function MainLayout({ children }) {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname.split("/");
  const currentModule = currentPath[1];
  const submodules = modules[currentModule] || [];
  const isDashboard = location.pathname === "/";
  const isModuleRoot = currentPath.length === 2 && currentModule;

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  const cerrarSesion = () => {
    alert("Cerrando sesión...");
    navigate("/login");
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full bg-dark text-white transition-all duration-300 z-20 ${
          isSidebarOpen ? "w-64" : "w-16"
        }`}
      >
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-600">
          <button
            onClick={toggleSidebar}
            className="text-white text-xl focus:outline-none"
          >
            <FiMenu />
          </button>
          {isSidebarOpen && <h1 className="text-lg font-bold">PET POCKET</h1>}
        </div>
        <nav className="mt-4">
          {submodules.length > 0 ? (
            <>
              <h3
                className={`px-4 text-sm font-semibold text-gray-400 ${
                  isSidebarOpen ? "block" : "hidden"
                }`}
              >
                Submódulos
              </h3>
              <ul className="space-y-2 mt-2">
                {submodules.map((submodule) => (
                  <li key={submodule.path}>
                    <Link
                      to={`/${currentModule}/${submodule.path}`}
                      className="flex items-center gap-2 px-4 py-2 rounded hover:bg-orange-500 transition"
                    >
                      {submodule.icon}
                      <span
                        className={`${
                          isSidebarOpen ? "block" : "hidden"
                        } transition-all`}
                      >
                        {submodule.name}
                      </span>
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
                <span
                  className={`${
                    isSidebarOpen ? "block" : "hidden"
                  } transition-all`}
                >
                  Volver al Dashboard
                </span>
              </Link>
            </>
          ) : (
            <>
              <h3
                className={`px-4 text-sm font-semibold text-gray-400 ${
                  isSidebarOpen ? "block" : "hidden"
                }`}
              >
                Módulos
              </h3>
              <ul className="space-y-2 mt-2">
                {Object.keys(modules).map((module) => (
                  <li key={module}>
                    <Link
                      to={`/${module}`}
                      className="flex items-center gap-2 px-4 py-2 rounded hover:bg-orange-500 transition"
                    >
                      {modules[module][0]?.icon}
                      <span
                        className={`${
                          isSidebarOpen ? "block" : "hidden"
                        } transition-all`}
                      >
                        {module.charAt(0).toUpperCase() + module.slice(1)}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          )}
        </nav>

        {isSidebarOpen && (
          <div className="p-4">
            <button
              className="w-full py-2 bg-orange-500 hover:bg-orange-600 rounded font-bold text-white text-center"
              onClick={cerrarSesion}
            >
              Cerrar Sesión
            </button>
          </div>
        )}
      </aside>

      {/* Main Content */}
      <div
        className={`flex-1 flex flex-col ${
          isSidebarOpen ? "ml-64" : "ml-16"
        } transition-all duration-300`}
      >
        {/* Topbar */}
        <header className="bg-dark text-white px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="relative bg-gray-200 text-dark rounded-lg px-3 py-1">
              <FiSearch className="absolute top-3 left-2 text-gray-500" />
              <input
                type="text"
                placeholder="Búsqueda"
                className="pl-8 pr-2 py-1 bg-transparent focus:outline-none w-full"
              />
            </div>
          </div>
          <div className="flex items-center gap-4 relative">
            <FiBell
              className="text-white text-xl cursor-pointer"
              onClick={() => alert("Notificaciones")}
            />
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => setIsProfileMenuOpen((prev) => !prev)}
            >
              <span className="text-sm font-medium">PET_POT14</span>
              <FiUser />
            </div>
            {isProfileMenuOpen && (
              <div
                className="absolute right-0 mt-10 bg-white text-dark shadow-lg rounded-lg p-4 z-30"
                onMouseLeave={() => setIsProfileMenuOpen(false)} // Cerrarlo al salir del área
              >
                <ul className="space-y-2">
                  <li>
                    <Link
                      to="/perfil"
                      className="block px-4 py-2 hover:bg-gray-100 rounded"
                    >
                      Ver Perfil
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/configuracion/general"
                      className="block px-4 py-2 hover:bg-gray-100 rounded"
                    >
                      Configuración
                    </Link>
                  </li>
                  <li>
                    <button
                      className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded"
                      onClick={cerrarSesion}
                    >
                      Cerrar Sesión
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </header>

        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}

export default MainLayout;
