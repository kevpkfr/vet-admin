import React, { useRef } from "react";
import { Link } from "react-router-dom";

const CIRUGIAS_PROGRAMADAS = [
  { id: 1, paciente: "Max", medico: "Dr. Pérez", fecha: "2025-01-22", estado: "Programada" },
  { id: 2, paciente: "Luna", medico: "Dra. Gómez", fecha: "2025-01-23", estado: "Completada" },
];

function CirugiasProgramadasPage() {
  const tableRef = useRef(); // Referencia para la tabla

  const handlePrint = () => {
    const printContents = tableRef.current.innerHTML;
    const originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
    window.location.reload(); // Recargar para restaurar el estado original
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold mb-4">Cirugías Programadas</h2>
        <button
          onClick={handlePrint}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Imprimir Tabla
        </button>
      </div>
      <div ref={tableRef}>
        <table className="table-auto w-full bg-white rounded shadow">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left">Paciente</th>
              <th className="px-4 py-2 text-left">Médico</th>
              <th className="px-4 py-2 text-left">Fecha</th>
              <th className="px-4 py-2 text-left">Estado</th>
              <th className="px-4 py-2 text-left">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {CIRUGIAS_PROGRAMADAS.map((cirugia) => (
              <tr key={cirugia.id} className="hover:bg-gray-100">
                <td className="border px-4 py-2">{cirugia.paciente}</td>
                <td className="border px-4 py-2">{cirugia.medico}</td>
                <td className="border px-4 py-2">{cirugia.fecha}</td>
                <td className="border px-4 py-2">{cirugia.estado}</td>
                <td className="border px-4 py-2">
                  <Link
                    to={`/hospital/cirugias/${cirugia.id}`}
                    className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
                  >
                    Ver Detalle
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CirugiasProgramadasPage;
