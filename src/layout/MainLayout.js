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
  const currentModule = currentPath[1]; // Detecta el módulo actual
  const submodules = modules[currentModule] || [];
  const isModuleRoot = currentPath.length === 2; // Detecta si estás en la raíz del módulo

  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const cerrarSesion = () => {
    alert("Cerrando sesión...");
    navigate("/login");
  };

  const handleToggleNotifications = () => {
    setIsNotificationsOpen(!isNotificationsOpen);
  };

  const handleClickOutside = (e) => {
    if (!e.target.closest("#notification-menu")) {
      setIsNotificationsOpen(false);
    }
  };

  return (
    <div className="flex h-screen bg-gray-100" onClick={handleClickOutside}>
      {/* Sidebar */}
      <aside
        className={`${
          isSidebarOpen ? "w-64" : "w-16"
        } bg-dark text-white fixed h-screen z-10 transition-width duration-300 overflow-auto`}
      >
        <nav className="flex-1 py-4">
          {submodules.length > 0 && isModuleRoot ? (
            <>
              <h3 className="mt-4 text-lg font-semibold px-4">Submódulos</h3>
              <ul className="space-y-2 mt-2">
                {submodules.map((submodule) => (
                  <li key={submodule.path}>
                    <Link
                      to={`/${currentModule}/${submodule.path}`}
                      className="flex items-center gap-2 px-4 py-2 rounded hover:bg-orange-500 transition"
                    >
                      {submodule.icon}
                      <span className="hidden md:inline">{submodule.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <>
              <h3 className="mt-4 text-lg font-semibold px-4">Módulos</h3>
              <ul className="space-y-2 mt-2">
                {Object.keys(modules).map((module) => (
                  <li key={module}>
                    <Link
                      to={`/${module}`}
                      className="flex items-center gap-2 px-4 py-2 rounded hover:bg-orange-500 transition"
                    >
                      {modules[module][0]?.icon}
                      <span className="hidden md:inline">
                        {module.charAt(0).toUpperCase() + module.slice(1)}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          )}
        </nav>
        <button
          className="absolute bottom-0 w-full py-2 bg-orange-500 hover:bg-orange-600 rounded font-bold text-white text-center"
          onClick={cerrarSesion}
        >
          Cerrar Sesión
        </button>
      </aside>

      {/* Main Content */}
      <div
        className={`flex-1 flex flex-col ${
          isSidebarOpen ? "ml-64" : "ml-16"
        } transition-margin duration-300`}
      >
        {/* Topbar */}
        <header className="bg-dark text-white px-6 py-3 flex items-center justify-between w-full fixed top-0 right-0 z-20">
          <button
            className="text-2xl"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            {isSidebarOpen ? <FiX /> : <FiMenu />}
          </button>

          <div className="flex items-center gap-4">
            <img
              src="/assets/images/logo.png"
              alt="Pet Pocket"
              className="h-8 w-8"
            />
            <h1 className="text-lg font-bold">PET POCKET</h1>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center bg-gray-200 text-dark rounded-lg px-3 py-1">
              <FiSearch className="text-gray-500 mr-2" />
              <input
                type="text"
                placeholder="Búsqueda"
                className="bg-transparent focus:outline-none"
              />
            </div>
            <FiSun className="text-gray-300 cursor-pointer" />
            <FiBell
              className="text-gray-300 cursor-pointer"
              onClick={handleToggleNotifications}
            />
            {isNotificationsOpen && (
              <div
                id="notification-menu"
                className="absolute right-10 mt-12 w-48 bg-white text-dark shadow-lg rounded-lg"
              >
                <ul className="py-2">
                  <li className="px-4 py-2 hover:bg-gray-100">Notificación 1</li>
                  <li className="px-4 py-2 hover:bg-gray-100">Notificación 2</li>
                  <li className="px-4 py-2 hover:bg-gray-100">Notificación 3</li>
                </ul>
              </div>
            )}
            <div className="relative">
              <div
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
              >
                <span className="text-sm font-medium">PET_POT14</span>
                <FiUser className="text-gray-300" />
              </div>
              {isProfileMenuOpen && (
                <div className="absolute right-0 mt-12 w-48 bg-white text-dark shadow-lg rounded-lg">
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

        {/* Content Area */}
        <main
          className={`flex-1 pt-16 p-6 bg-gray-100 ${
            isSidebarOpen ? "pl-64" : "pl-16"
          } transition-all`}
        >
          {children}
        </main>
      </div>
    </div>
  );
}

export default MainLayout;
