import React, { useState } from "react";

function ListaPacientes({ pacientes, onEditar, onEliminar }) {
  const [editable, setEditable] = useState(null); // Controla qué paciente está en modo edición
  const [form, setForm] = useState({
    nombre: "",
    propietario: "",
    especie: "",
    raza: "",
    edad: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = (e) => {
    e.preventDefault();
    onEditar(form);
    setEditable(null); // Salir del modo edición
  };

  return (
    <div className="bg-white p-4 rounded shadow">
      <h3 className="text-xl font-bold mb-4">Lista de Pacientes</h3>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left">Nombre</th>
            <th className="px-4 py-2 text-left">Propietario</th>
            <th className="px-4 py-2 text-left">Especie</th>
            <th className="px-4 py-2 text-left">Raza</th>
            <th className="px-4 py-2 text-left">Edad</th>
            <th className="px-4 py-2 text-left">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {pacientes.map((paciente) => (
            <tr key={paciente.id} className="hover:bg-gray-100">
              {editable === paciente.id ? (
                <>
                  <td className="border px-4 py-2">
                    <input
                      type="text"
                      name="nombre"
                      value={form.nombre}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded px-2 py-1"
                    />
                  </td>
                  <td className="border px-4 py-2">
                    <input
                      type="text"
                      name="propietario"
                      value={form.propietario}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded px-2 py-1"
                    />
                  </td>
                  <td className="border px-4 py-2">
                    <input
                      type="text"
                      name="especie"
                      value={form.especie}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded px-2 py-1"
                    />
                  </td>
                  <td className="border px-4 py-2">
                    <input
                      type="text"
                      name="raza"
                      value={form.raza}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded px-2 py-1"
                    />
                  </td>
                  <td className="border px-4 py-2">
                    <input
                      type="number"
                      name="edad"
                      value={form.edad}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded px-2 py-1"
                    />
                  </td>
                  <td className="border px-4 py-2">
                    <button
                      onClick={handleSave}
                      className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
                    >
                      Guardar
                    </button>
                  </td>
                </>
              ) : (
                <>
                  <td className="border px-4 py-2">{paciente.nombre}</td>
                  <td className="border px-4 py-2">{paciente.propietario}</td>
                  <td className="border px-4 py-2">{paciente.especie}</td>
                  <td className="border px-4 py-2">{paciente.raza}</td>
                  <td className="border px-4 py-2">{paciente.edad}</td>
                  <td className="border px-4 py-2">
                    <button
                      onClick={() => {
                        setEditable(paciente.id);
                        setForm(paciente); // Carga los datos actuales en el formulario de edición
                      }}
                      className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 mr-2"
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => onEliminar(paciente.id)}
                      className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                    >
                      Eliminar
                    </button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListaPacientes;
