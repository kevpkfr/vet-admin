import React from "react";
import DetallesPerfil from "../components/DetallesPerfil";
import { Link } from "react-router-dom";

function PerfilPage() {
  const user = JSON.parse(localStorage.getItem("user")) || {
    name: "Admin",
    email: "admin@example.com",
    phone: "No especificado",
    role: "Administrador",
  };

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">
          Perfil de Usuario
        </h1>
        {/* Detalles del perfil */}
        <DetallesPerfil user={user} />
        {/* Opciones de edición */}
        <div className="mt-6 flex justify-center gap-6">
          <Link
            to="/perfil/editar"
            className="bg-orange-500 text-white py-2 px-6 rounded-lg shadow hover:bg-orange-600 transition"
          >
            Editar Perfil
          </Link>
          <Link
            to="/perfil/cambiar-contraseña"
            className="bg-gray-500 text-white py-2 px-6 rounded-lg shadow hover:bg-gray-600 transition"
          >
            Cambiar Contraseña
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PerfilPage;
