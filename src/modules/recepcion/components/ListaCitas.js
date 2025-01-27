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
    <div className="bg-white p-4 rounded shadow">
      <h3 className="text-xl font-bold mb-4">Lista de Citas</h3>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left">Fecha</th>
            <th className="px-4 py-2 text-left">Hora</th>
            <th className="px-4 py-2 text-left">Paciente</th>
            <th className="px-4 py-2 text-left">Médico</th>
            <th className="px-4 py-2 text-left">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {citas.map((cita) => (
            <tr key={cita.id} className="hover:bg-gray-100">
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
                  <td className="border px-4 py-2">{cita.fecha}</td>
                  <td className="border px-4 py-2">{cita.hora}</td>
                  <td className="border px-4 py-2">{cita.paciente}</td>
                  <td className="border px-4 py-2">{cita.medico}</td>
                  <td className="border px-4 py-2">
                    <button
                      onClick={() => {
                        setEditable(cita.id);
                        setForm(cita); // Carga los datos actuales en el formulario de edición
                      }}
                      className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 mr-2"
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => onEliminar(cita.id)}
                      className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                    >
                      Cancelar
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

export default ListaCitas;
