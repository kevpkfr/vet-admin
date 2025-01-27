// src/modules/hospital/components/FormPaciente.js
import React, { useState } from "react";

function FormPaciente({ onAgregar }) {
  const [form, setForm] = useState({
    nombre: "",
    motivo: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAgregar({ id: Date.now(), ...form });
    setForm({ nombre: "", motivo: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow space-y-2">
      <h3 className="font-semibold">Nuevo Paciente</h3>
      <input
        type="text"
        name="nombre"
        placeholder="Nombre"
        value={form.nombre}
        onChange={handleChange}
        className="border border-gray-300 rounded w-full px-2 py-1"
        required
      />
      <input
        type="text"
        name="motivo"
        placeholder="Motivo"
        value={form.motivo}
        onChange={handleChange}
        className="border border-gray-300 rounded w-full px-2 py-1"
        required
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
      >
        Agregar
      </button>
    </form>
  );
}

export default FormPaciente;
