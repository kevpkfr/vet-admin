import React, { useState } from "react";
import { FiUser } from "react-icons/fi";

function FormPaciente({ onAgregar }) {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    onAgregar(form);
    setForm({ nombre: "", propietario: "", especie: "", raza: "", edad: "" }); // Reinicia el formulario
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow-lg max-w-3xl mx-auto"
    >
      {/* Encabezado con Icono */}
      <div className="flex items-center justify-center space-x-2">
        <FiUser className="text-blue-600 text-3xl" />
        <h3 className="text-2xl font-bold text-gray-700">
          Registrar Nuevo Paciente
        </h3>
      </div>

      <hr className="border-gray-300 my-4" />

      {/* Campos del formulario organizados en una grilla responsiva */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Nombre */}
        <div>
          <label className="block text-sm font-medium text-gray-600">Nombre</label>
          <input
            type="text"
            name="nombre"
            value={form.nombre}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:ring focus:ring-blue-200 focus:outline-none"
            required
          />
        </div>
        
        {/* Propietario */}
        <div>
          <label className="block text-sm font-medium text-gray-600">Propietario</label>
          <input
            type="text"
            name="propietario"
            value={form.propietario}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:ring focus:ring-blue-200 focus:outline-none"
            required
          />
        </div>

        {/* Especie */}
        <div>
          <label className="block text-sm font-medium text-gray-600">Especie</label>
          <input
            type="text"
            name="especie"
            value={form.especie}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:ring focus:ring-blue-200 focus:outline-none"
            required
          />
        </div>

        {/* Raza */}
        <div>
          <label className="block text-sm font-medium text-gray-600">Raza</label>
          <input
            type="text"
            name="raza"
            value={form.raza}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:ring focus:ring-blue-200 focus:outline-none"
            required
          />
        </div>

        {/* Edad */}
        <div>
          <label className="block text-sm font-medium text-gray-600">Edad</label>
          <input
            type="number"
            name="edad"
            value={form.edad}
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
          Registrar
        </button>
      </div>
    </form>
  );
}

export default FormPaciente;
