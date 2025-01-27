import React, { useState } from "react";

function FormEmpleado({ onSubmit, empleado }) {
  const [form, setForm] = useState(empleado || { nombre: "", cargo: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...form, id: empleado ? empleado.id : undefined });
    setForm({ nombre: "", cargo: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow">
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
        <label className="block text-sm font-medium">Cargo</label>
        <input
          type="text"
          name="cargo"
          value={form.cargo}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-2 py-1"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        {empleado ? "Guardar Cambios" : "Agregar Empleado"}
      </button>
    </form>
  );
}

export default FormEmpleado;
