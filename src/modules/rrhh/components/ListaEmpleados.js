import React from "react";

function ListaEmpleados({ empleados, onEditar, onEliminar }) {
  return (
    <table className="table-auto w-full bg-white rounded shadow">
      <thead className="bg-blue-100">
        <tr>
          <th className="px-4 py-2 text-left">ID</th>
          <th className="px-4 py-2 text-left">Nombre</th>
          <th className="px-4 py-2 text-left">Cargo</th>
          <th className="px-4 py-2 text-left">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {empleados.map((empleado) => (
          <tr key={empleado.id} className="hover:bg-gray-100">
            <td className="border px-4 py-2">{empleado.id}</td>
            <td className="border px-4 py-2">{empleado.nombre}</td>
            <td className="border px-4 py-2">{empleado.cargo}</td>
            <td className="border px-4 py-2">
              <button
                onClick={() => onEditar(empleado)}
                className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 mr-2"
              >
                Editar
              </button>
              <button
                onClick={() => onEliminar(empleado.id)}
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

export default ListaEmpleados;
