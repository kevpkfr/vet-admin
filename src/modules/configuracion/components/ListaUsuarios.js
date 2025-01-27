import React from "react";

function ListaUsuarios({ usuarios, onEliminar, onEditar }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-xl font-bold mb-4">Usuarios Registrados</h2>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr>
            <th className="border-b py-2 px-4">Nombre</th>
            <th className="border-b py-2 px-4">Correo</th>
            <th className="border-b py-2 px-4">Rol</th>
            <th className="border-b py-2 px-4">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario) => (
            <tr key={usuario.id}>
              <td className="border-b py-2 px-4">{usuario.nombre}</td>
              <td className="border-b py-2 px-4">{usuario.correo}</td>
              <td className="border-b py-2 px-4">{usuario.rol}</td>
              <td className="border-b py-2 px-4">
                <button
                  onClick={() => onEditar(usuario)}
                  className="text-blue-500 hover:underline mr-2"
                >
                  Editar
                </button>
                <button
                  onClick={() => onEliminar(usuario.id)}
                  className="text-red-500 hover:underline"
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListaUsuarios;
