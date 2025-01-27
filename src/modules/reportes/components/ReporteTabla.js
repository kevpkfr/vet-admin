// src/modules/reportes/components/ReporteTabla.js
import React from "react";

function ReporteTabla({ datos, columnas }) {
  return (
    <table className="table-auto w-full bg-white shadow rounded">
      <thead>
        <tr className="bg-gray-200">
          {columnas.map((columna, index) => (
            <th key={index} className="px-4 py-2 text-left">{columna}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {datos.map((fila, index) => (
          <tr key={index} className="hover:bg-gray-100">
            {Object.values(fila).map((valor, index) => (
              <td key={index} className="border px-4 py-2">{valor}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ReporteTabla;
