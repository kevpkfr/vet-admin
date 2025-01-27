// src/modules/clinico/pages/DetalleHistoriaClinicaPage.js
import React from "react";
import { useParams } from "react-router-dom";
import { HISTORIAS } from "../../../data/historias";

function DetalleHistoriaClinicaPage() {
  const { id } = useParams();
  const historia = HISTORIAS.find((h) => h.id === parseInt(id));

  if (!historia) {
    return <h3>Historia clínica no encontrada</h3>;
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Detalle de la Historia Clínica</h2>
      <p><strong>Mascota:</strong> {historia.mascota}</p>
      <p><strong>Propietario:</strong> {historia.propietario}</p>
      <p><strong>Diagnóstico:</strong> {historia.diagnostico}</p>
      <p><strong>Fecha:</strong> {historia.fecha}</p>
    </div>
  );
}

export default DetalleHistoriaClinicaPage;
