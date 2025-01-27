import React, { useRef } from "react";
import { useParams } from "react-router-dom";

const CIRUGIAS_PROGRAMADAS = [
  { id: 1, paciente: "Max", medico: "Dr. Pérez", fecha: "2025-01-22", estado: "Programada", detalles: "Cirugía de fractura en pata." },
  { id: 2, paciente: "Luna", medico: "Dra. Gómez", fecha: "2025-01-23", estado: "Completada", detalles: "Extracción de tumor benigno." },
];

function DetalleCirugiaPage() {
  const { id } = useParams();
  const cirugia = CIRUGIAS_PROGRAMADAS.find((c) => c.id === parseInt(id));
  const printRef = useRef(); // Referencia para los detalles

  if (!cirugia) {
    return <p>Cirugía no encontrada.</p>;
  }

  const handlePrint = () => {
    const printContents = printRef.current.innerHTML;
    const originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
    window.location.reload(); // Recargar para restaurar el estado original
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold mb-4">Detalle de Cirugía</h2>
        <button
          onClick={handlePrint}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Imprimir Detalles
        </button>
      </div>
      <div ref={printRef} className="bg-white p-6 rounded shadow-md">
        <p className="mb-2"><strong>Paciente:</strong> {cirugia.paciente}</p>
        <p className="mb-2"><strong>Médico:</strong> {cirugia.medico}</p>
        <p className="mb-2"><strong>Fecha:</strong> {cirugia.fecha}</p>
        <p className="mb-2"><strong>Estado:</strong> {cirugia.estado}</p>
        <p><strong>Detalles:</strong> {cirugia.detalles}</p>
      </div>
    </div>
  );
}

export default DetalleCirugiaPage;
