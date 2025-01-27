import React, { useState } from "react";

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
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow space-y-4">
      <h3 className="text-xl font-bold">Registrar Nuevo Paciente</h3>
      <div>
        <label className="block text-sm font-medium">Nombre</label>
        <input
          type="text"
          name="nombre"
          value={form.nombre}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-2 py-1"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Propietario</label>
        <input
          type="text"
          name="propietario"
          value={form.propietario}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-2 py-1"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Especie</label>
        <input
          type="text"
          name="especie"
          value={form.especie}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-2 py-1"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Raza</label>
        <input
          type="text"
          name="raza"
          value={form.raza}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-2 py-1"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Edad</label>
        <input
          type="number"
          name="edad"
          value={form.edad}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-2 py-1"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Registrar
      </button>
    </form>
  );
}

export default FormPaciente;
