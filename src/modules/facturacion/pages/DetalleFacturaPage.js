import React from "react";
import { useParams } from "react-router-dom";
import { FACTURAS } from "../../../data/facturas";

function DetalleFacturaPage() {
  const { id } = useParams();
  const factura = FACTURAS.find((factura) => factura.id === parseInt(id));

  if (!factura) {
    return <p>Factura no encontrada.</p>;
  }

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-4 text-blue-600">
        Detalle de Factura #{factura.id}
      </h2>
      <div className="space-y-4 bg-white p-6 rounded shadow">
        <p>
          <strong className="text-gray-700">Cliente:</strong>{" "}
          {factura.cliente}
        </p>
        <p>
          <strong className="text-gray-700">Monto:</strong> $
          {factura.monto.toFixed(2)}
        </p>
        <p>
          <strong className="text-gray-700">Fecha:</strong> {factura.fecha}
        </p>
        <p>
          <strong className="text-gray-700">Descripción:</strong>{" "}
          {factura.descripcion || "Sin descripción"}
        </p>
      </div>
    </div>
  );
}

export default DetalleFacturaPage;
