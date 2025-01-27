import React from "react";
import { FiUser, FiMail, FiPhone, FiBriefcase } from "react-icons/fi";

function DetallesPerfil({ user }) {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white p-8 rounded-lg shadow-md max-w-3xl mx-auto">
      <div className="flex items-center gap-4 mb-6">
        <div className="bg-white p-4 rounded-full shadow-lg">
          <FiUser className="text-blue-500 text-4xl" />
        </div>
        <div>
          <h2 className="text-3xl font-bold">{user.name}</h2>
          <p className="text-lg">{user.email}</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md text-gray-800 space-y-4">
        <h3 className="text-xl font-semibold mb-4">Información del Perfil</h3>
        <div className="flex items-center gap-4">
          <FiMail className="text-blue-500 text-xl" />
          <p>
            <strong>Correo Electrónico:</strong> {user.email}
          </p>
        </div>
        <div className="flex items-center gap-4">
          <FiBriefcase className="text-blue-500 text-xl" />
          <p>
            <strong>Rol:</strong> {user.role || "Usuario"}
          </p>
        </div>
        <div className="flex items-center gap-4">
          <FiPhone className="text-blue-500 text-xl" />
          <p>
            <strong>Teléfono:</strong> {user.phone || "No especificado"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default DetallesPerfil;
