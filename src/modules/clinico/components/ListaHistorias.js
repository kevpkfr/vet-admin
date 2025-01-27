import React from "react";

function ListaHistorias({ historias, onEditar, onEliminar, onVerDetalle }) {
  return (
    <div className="space-y-4">
      {historias.map((historia) => (
        <div
          key={historia.id}
          className="bg-white p-4 rounded-lg shadow-md flex flex-col md:flex-row justify-between items-center gap-4 border border-gray-200 hover:shadow-lg transition-shadow"
        >
          {/* Información del paciente */}
          <div className="flex flex-col items-start">
            <h3 className="text-lg font-bold text-gray-800">{historia.paciente}</h3>
            <p className="text-gray-600">
              <strong>Fecha:</strong> {historia.fecha}
            </p>
            <p className="text-gray-600">
              <strong>Médico:</strong> {historia.medico}
            </p>
          </div>

          {/* Botones de acción */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => onVerDetalle(historia)}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
            >
              Ver Detalle
            </button>
            <button
              onClick={() => onEditar(historia)}
              className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition"
            >
              Editar
            </button>
            <button
              onClick={() => onEliminar(historia.id)}
              className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
            >
              Eliminar
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ListaHistorias;
