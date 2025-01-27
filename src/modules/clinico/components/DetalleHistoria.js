import React from "react";

function DetalleHistoria({ historia, onCerrar }) {
  const imprimirHistoria = () => {
    window.print();
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Detalle de la Historia Clínica
      </h2>
      <div className="space-y-4">
        <p>
          <strong className="text-gray-700">Paciente:</strong>{" "}
          <span className="text-gray-600">{historia.paciente}</span>
        </p>
        <p>
          <strong className="text-gray-700">Médico:</strong>{" "}
          <span className="text-gray-600">{historia.medico}</span>
        </p>
        <p>
          <strong className="text-gray-700">Fecha:</strong>{" "}
          <span className="text-gray-600">{historia.fecha}</span>
        </p>
        <p>
          <strong className="text-gray-700">Diagnóstico:</strong>{" "}
          <span className="text-gray-600">{historia.diagnostico}</span>
        </p>
        <p>
          <strong className="text-gray-700">Tratamiento:</strong>{" "}
          <span className="text-gray-600">{historia.tratamiento}</span>
        </p>
        <p>
          <strong className="text-gray-700">Notas:</strong>{" "}
          <span className="text-gray-600">{historia.notas}</span>
        </p>
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <button
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition"
          onClick={onCerrar}
        >
          Cerrar
        </button>
        <button
          className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition"
          onClick={imprimirHistoria}
        >
          Imprimir
        </button>
      </div>
    </div>
  );
}

export default DetalleHistoria;
