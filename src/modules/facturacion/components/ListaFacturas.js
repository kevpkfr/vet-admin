import React from "react";
import { Link } from "react-router-dom";

function ListaFacturas({ facturas, onEliminar }) {
  return (
    <table className="table-auto w-full bg-white rounded shadow">
      <thead className="bg-blue-100">
        <tr>
          <th className="px-4 py-2 text-left">ID</th>
          <th className="px-4 py-2 text-left">Cliente</th>
          <th className="px-4 py-2 text-left">Monto</th>
          <th className="px-4 py-2 text-left">Fecha</th>
          <th className="px-4 py-2 text-left">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {facturas.map((factura) => (
          <tr key={factura.id} className="hover:bg-gray-100">
            <td className="border px-4 py-2">{factura.id}</td>
            <td className="border px-4 py-2">{factura.cliente}</td>
            <td className="border px-4 py-2">${factura.monto.toFixed(2)}</td>
            <td className="border px-4 py-2">{factura.fecha}</td>
            <td className="border px-4 py-2">
              <Link
                to={`/facturacion/facturas/${factura.id}`}
                className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 mr-2"
              >
                Ver Detalle
              </Link>
              <button
                onClick={() => onEliminar(factura.id)}
                className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
              >
                Eliminar
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ListaFacturas;
