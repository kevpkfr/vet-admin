import React from "react";

function ListaPagos({ pagos, onEliminar }) {
  return (
    <table className="table-auto w-full bg-white rounded shadow">
      <thead>
        <tr>
          <th className="px-4 py-2">ID</th>
          <th className="px-4 py-2">Factura</th>
          <th className="px-4 py-2">Monto</th>
          <th className="px-4 py-2">Fecha</th>
          <th className="px-4 py-2">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {pagos.map((pago) => (
          <tr key={pago.id} className="hover:bg-gray-100">
            <td className="border px-4 py-2">{pago.id}</td>
            <td className="border px-4 py-2">{pago.facturaId}</td>
            <td className="border px-4 py-2">${pago.monto.toFixed(2)}</td>
            <td className="border px-4 py-2">{pago.fecha}</td>
            <td className="border px-4 py-2">
              <button
                onClick={() => onEliminar(pago.id)}
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

export default ListaPagos;
