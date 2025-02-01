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
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-5xl mx-auto">
      <h3 className="text-2xl font-bold text-gray-700 mb-4 text-center">
        Lista de Pacientes
      </h3>

      {/* Tabla Responsiva */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left border">Nombre</th>
              <th className="px-4 py-2 text-left border">Propietario</th>
              <th className="px-4 py-2 text-left border">Especie</th>
              <th className="px-4 py-2 text-left border">Raza</th>
              <th className="px-4 py-2 text-left border">Edad</th>
              <th className="px-4 py-2 text-center border">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {pacientes.map((paciente) => (
              <tr
                key={paciente.id}
                className="hover:bg-gray-100 transition-all duration-200"
              >
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
                    <td className="border px-4 py-2 text-center">
                      <button
                        onClick={handleSave}
                        className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 transition-all mr-2"
                      >
                        Guardar
                      </button>
                      <button
                        onClick={() => setEditable(null)}
                        className="bg-gray-500 text-white px-3 py-1 rounded hover:bg-gray-600 transition-all"
                      >
                        Cancelar
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
                    <td className="border px-4 py-2 text-center">
                      <button
                        onClick={() => {
                          setEditable(paciente.id);
                          setForm(paciente); // Carga los datos actuales en el formulario de edición
                        }}
                        className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition-all mr-2"
                      >
                        Editar
                      </button>
                      <button
                        onClick={() => onEliminar(paciente.id)}
                        className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition-all"
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
    </div>
  );
}

export default ListaPacientes;
