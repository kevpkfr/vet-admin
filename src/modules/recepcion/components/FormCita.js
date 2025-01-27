import React, { useState } from "react";
import { MEDICOS } from "../../../data/medicos";
import { PACIENTES } from "../../../data/pacientes";

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
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow space-y-4">
      <h3 className="text-xl font-bold">Nueva Cita</h3>
      <div>
        <label className="block text-sm font-medium">Fecha</label>
        <input
          type="date"
          name="fecha"
          value={form.fecha}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-2 py-1"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Hora</label>
        <input
          type="time"
          name="hora"
          value={form.hora}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-2 py-1"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Paciente</label>
        <select
          name="paciente"
          value={form.paciente}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-2 py-1"
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
      <div>
        <label className="block text-sm font-medium">Médico</label>
        <select
          name="medico"
          value={form.medico}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-2 py-1"
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
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Guardar Cita
      </button>
    </form>
  );
}

export default FormCita;
