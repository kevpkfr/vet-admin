// src/modules/reportes/components/FiltrosReporte.js
import React from "react";

function FiltrosReporte() {
  const handleFilter = (e) => {
    e.preventDefault();
    console.log("Aplicar filtros");
  };

  return (
    <form onSubmit={handleFilter} className="space-y-2">
      <div className="flex space-x-2">
        <input
          type="date"
          name="fechaInicio"
          className="border border-gray-300 rounded px-2 py-1"
        />
        <input
          type="date"
          name="fechaFin"
          className="border border-gray-300 rounded px-2 py-1"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Filtrar
        </button>
      </div>
    </form>
  );
}

export default FiltrosReporte;
