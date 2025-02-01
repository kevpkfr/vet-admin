import React from "react";
import { useParams } from "react-router-dom";
import { HISTORIAS } from "../../../data/historias";

function DetalleHistoriaClinicaPage() {
  const { id } = useParams();
  const historia = HISTORIAS.find((h) => h.id === parseInt(id));

  if (!historia) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md text-center">
        <h3 className="text-2xl font-bold text-red-500">
          Historia clínica no encontrada
        </h3>
        <p className="text-gray-600 mt-2">
          Verifica que el ID ingresado sea correcto.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
      <h2 className="text-3xl font-bold text-blue-600">Detalle de la Historia Clínica</h2>
      <hr className="border-gray-300" />
      <div className="text-gray-800 space-y-2">
        <p>
          <strong className="text-gray-600">Mascota:</strong> {historia.mascota}
        </p>
        <p>
          <strong className="text-gray-600">Propietario:</strong> {historia.propietario}
        </p>
        <p>
          <strong className="text-gray-600">Diagnóstico:</strong> {historia.diagnostico}
        </p>
        <p>
          <strong className="text-gray-600">Fecha:</strong> {historia.fecha}
        </p>
      </div>
    </div>
  );
}

export default DetalleHistoriaClinicaPage;
