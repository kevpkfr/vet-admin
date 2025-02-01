import React, { useState } from "react";
import { MEDICOS } from "../../../data/medicos";
import { PACIENTES } from "../../../data/pacientes";
import { FiCalendar } from "react-icons/fi";

function FormCita({ onAgregar }) {
  const [form, setForm] = useState({
    fecha: "",
    hora: "",
    paciente: "",
    medico: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.paciente || !form.medico) {
      alert("Por favor selecciona un paciente y un médico.");
      return;
    }
    onAgregar(form);
    setForm({ fecha: "", hora: "", paciente: "", medico: "" }); // Reiniciar formulario
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow-lg space-y-6 max-w-3xl mx-auto"
    >
      {/* Encabezado */}
      <div className="flex items-center justify-center space-x-2">
        <FiCalendar className="text-blue-600 text-3xl" />
        <h3 className="text-2xl font-bold text-gray-700">Agendar Nueva Cita</h3>
      </div>

      <hr className="border-gray-300" />

      {/* Campos del formulario */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:space-x-4">
          {/* Fecha */}
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-600">Fecha</label>
            <input
              type="date"
              name="fecha"
              value={form.fecha}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:ring focus:ring-blue-200 focus:outline-none"
              required
            />
          </div>
          {/* Hora */}
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-600">Hora</label>
            <input
              type="time"
              name="hora"
              value={form.hora}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:ring focus:ring-blue-200 focus:outline-none"
              required
            />
          </div>
        </div>

        {/* Paciente */}
        <div>
          <label className="block text-sm font-medium text-gray-600">Paciente</label>
          <select
            name="paciente"
            value={form.paciente}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:ring focus:ring-blue-200 focus:outline-none"
            required
          >
            <option value="">Selecciona un paciente</option>
            {PACIENTES.map((paciente) => (
              <option key={paciente.id} value={paciente.nombre}>
                {paciente.nombre} - Propietario: {paciente.propietario}
              </option>
            ))}
          </select>
        </div>

        {/* Médico */}
        <div>
          <label className="block text-sm font-medium text-gray-600">Médico</label>
          <select
            name="medico"
            value={form.medico}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:ring focus:ring-blue-200 focus:outline-none"
            required
          >
            <option value="">Selecciona un médico</option>
            {MEDICOS.map((medico) => (
              <option key={medico.id} value={medico.nombre}>
                {medico.nombre} - {medico.especialidad}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Botón Guardar */}
      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-bold transition-all"
        >
          Guardar Cita
        </button>
      </div>
    </form>
  );
}

export default FormCita;
