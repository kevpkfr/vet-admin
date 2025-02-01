import React, { useState } from "react";
import { MEDICOS } from "../../../data/medicos";
import { PACIENTES } from "../../../data/pacientes";

function ListaCitas({ citas, onEliminar, onEditar }) {
  const [editable, setEditable] = useState(null); // Controla qué cita está en modo edición
  const [form, setForm] = useState({
    fecha: "",
    hora: "",
    paciente: "",
    medico: "",
  });

  // Manejar cambios en el formulario de edición
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Guardar los cambios en la cita editada
  const handleSave = (e) => {
    e.preventDefault();
    onEditar(form);
    setEditable(null); // Salir del modo edición
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-5xl mx-auto">
      <h3 className="text-2xl font-bold text-gray-700 mb-4 text-center">
        Lista de Citas
      </h3>

      {/* Tabla responsiva */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left border">Fecha</th>
              <th className="px-4 py-2 text-left border">Hora</th>
              <th className="px-4 py-2 text-left border">Paciente</th>
              <th className="px-4 py-2 text-left border">Médico</th>
              <th className="px-4 py-2 text-left border">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {citas.map((cita) => (
              <tr
                key={cita.id}
                className="hover:bg-gray-100 transition-all duration-200"
              >
                {editable === cita.id ? (
                  <>
                    <td className="border px-4 py-2">
                      <input
                        type="date"
                        name="fecha"
                        value={form.fecha}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded px-2 py-1"
                      />
                    </td>
                    <td className="border px-4 py-2">
                      <input
                        type="time"
                        name="hora"
                        value={form.hora}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded px-2 py-1"
                      />
                    </td>
                    <td className="border px-4 py-2">
                      <select
                        name="paciente"
                        value={form.paciente}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded px-2 py-1"
                      >
                        <option value="">Selecciona un paciente</option>
                        {PACIENTES.map((paciente) => (
                          <option key={paciente.id} value={paciente.nombre}>
                            {paciente.nombre} - {paciente.propietario}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td className="border px-4 py-2">
                      <select
                        name="medico"
                        value={form.medico}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded px-2 py-1"
                      >
                        <option value="">Selecciona un médico</option>
                        {MEDICOS.map((medico) => (
                          <option key={medico.id} value={medico.nombre}>
                            {medico.nombre} - {medico.especialidad}
                          </option>
                        ))}
                      </select>
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
                    <td className="border px-4 py-2">{cita.fecha}</td>
                    <td className="border px-4 py-2">{cita.hora}</td>
                    <td className="border px-4 py-2">{cita.paciente}</td>
                    <td className="border px-4 py-2">{cita.medico}</td>
                    <td className="border px-4 py-2 text-center">
                      <button
                        onClick={() => {
                          setEditable(cita.id);
                          setForm(cita); // Carga los datos actuales en el formulario de edición
                        }}
                        className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition-all mr-2"
                      >
                        Editar
                      </button>
                      <button
                        onClick={() => onEliminar(cita.id)}
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

export default ListaCitas;
