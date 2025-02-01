import React, { useState } from "react";
import { FiClipboard } from "react-icons/fi";

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
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow-lg max-w-3xl mx-auto"
    >
      {/* Encabezado con Icono */}
      <div className="flex items-center justify-center space-x-2">
        <FiClipboard className="text-blue-600 text-3xl" />
        <h3 className="text-2xl font-bold text-gray-700">
          Nueva Prescripción
        </h3>
      </div>

      <hr className="border-gray-300 my-4" />

      {/* Campos del formulario organizados en una grilla responsiva */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Medicamento */}
        <div>
          <label className="block text-sm font-medium text-gray-600">Medicamento</label>
          <input
            type="text"
            name="medicamento"
            value={form.medicamento}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:ring focus:ring-blue-200 focus:outline-none"
            required
          />
        </div>

        {/* Dosis */}
        <div>
          <label className="block text-sm font-medium text-gray-600">Dosis</label>
          <input
            type="text"
            name="dosis"
            value={form.dosis}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:ring focus:ring-blue-200 focus:outline-none"
            required
          />
        </div>

        {/* Paciente */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-600">Paciente</label>
          <input
            type="text"
            name="paciente"
            value={form.paciente}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:ring focus:ring-blue-200 focus:outline-none"
            required
          />
        </div>
      </div>

      {/* Botón de Registro */}
      <div className="flex justify-end mt-6">
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-bold transition-all"
        >
          Guardar Prescripción
        </button>
      </div>
    </form>
  );
}

export default FormPrescripcion;
