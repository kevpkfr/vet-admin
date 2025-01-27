// src/modules/hospital/components/ListaCirugias.js
import React from "react";
import { Link } from "react-router-dom";

function ListaCirugias({ cirugias, onEliminar }) {
  return (
    <ul className="space-y-2">
      {cirugias.map((cirugia) => (
        <li
          key={cirugia.id}
          className="bg-white shadow p-4 rounded flex justify-between"
        >
          <div>
            <p className="font-semibold">Paciente: {cirugia.paciente}</p>
            <p>Fecha: {cirugia.fecha}</p>
          </div>
          <div className="flex space-x-2">
            <Link
              to={`/hospital/cirugias/${cirugia.id}`}
              className="text-blue-600 hover:text-blue-800"
            >
              Ver
            </Link>
            <button
              onClick={() => onEliminar(cirugia.id)}
              className="text-red-600 hover:text-red-800"
            >
              Eliminar
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default ListaCirugias;
