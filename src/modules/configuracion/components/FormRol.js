// src/modules/configuracion/components/FormRol.js
import React, { useState } from "react";

function FormRol() {
  const [rol, setRol] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Nuevo Rol:", rol);
    setRol("");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow space-y-2">
      <h3 className="font-semibold">Nuevo Rol</h3>
      <input
        type="text"
        value={rol}
        onChange={(e) => setRol(e.target.value)}
        placeholder="Nombre del Rol"
        className="border border-gray-300 rounded w-full px-2 py-1"
        required
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
      >
        Agregar Rol
      </button>
    </form>
  );
}

export default FormRol;
