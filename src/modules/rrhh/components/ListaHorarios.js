import React from "react";

function ListaHorarios({ horarios, onEditar, onEliminar }) {
  return (
    <table className="table-auto w-full bg-white rounded shadow">
      <thead className="bg-green-100">
        <tr>
          <th className="px-4 py-2 text-left">ID</th>
          <th className="px-4 py-2 text-left">Empleado</th>
          <th className="px-4 py-2 text-left">Horario</th>
          <th className="px-4 py-2 text-left">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {horarios.map((horario) => (
          <tr key={horario.id} className="hover:bg-gray-100">
            <td className="border px-4 py-2">{horario.id}</td>
            <td className="border px-4 py-2">{horario.empleado}</td>
            <td className="border px-4 py-2">{horario.horario}</td>
            <td className="border px-4 py-2">
              <button
                onClick={() => onEditar(horario)}
                className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 mr-2"
              >
                Editar
              </button>
              <button
                onClick={() => onEliminar(horario.id)}
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

export default ListaHorarios;
