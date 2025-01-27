import React, { useState } from "react";

function FormPrescripcion({ onAgregar }) {
  const [form, setForm] = useState({
    medicamento: "",
    dosis: "",
    paciente: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAgregar(form);
    setForm({ medicamento: "", dosis: "", paciente: "" }); // Reinicia el formulario
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow space-y-4">
      <h3 className="text-xl font-bold">Nueva Prescripción</h3>
      <div>
        <label className="block text-sm font-medium">Medicamento</label>
        <input
          type="text"
          name="medicamento"
          value={form.medicamento}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-2 py-1"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Dosis</label>
        <input
          type="text"
          name="dosis"
          value={form.dosis}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-2 py-1"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Paciente</label>
        <input
          type="text"
          name="paciente"
          value={form.paciente}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-2 py-1"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Guardar Prescripción
      </button>
    </form>
  );
}

export default FormPrescripcion;
