import React, { useState } from "react";
import { EMPLEADOS } from "../../../data/empleados";

function FormHorario({ onSubmit, horario, horariosCatalogo }) {
  const [form, setForm] = useState(
    horario || { empleado: "", horario: horariosCatalogo[0] || "" }
  );

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...form, id: horario ? horario.id : undefined });
    setForm({ empleado: "", horario: horariosCatalogo[0] || "" });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow">
      <div>
        <label className="block text-sm font-medium">Empleado</label>
        <select
          name="empleado"
          value={form.empleado}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-2 py-1"
          required
        >
          <option value="">Selecciona un empleado</option>
          {EMPLEADOS.map((empleado) => (
            <option key={empleado.id} value={empleado.nombre}>
              {empleado.nombre}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium">Horario</label>
        <select
          name="horario"
          value={form.horario}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-2 py-1"
          required
        >
          {horariosCatalogo.map((horario, index) => (
            <option key={index} value={horario}>
              {horario}
            </option>
          ))}
        </select>
      </div>
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        {horario ? "Guardar Cambios" : "Asignar Horario"}
      </button>
    </form>
  );
}

export default FormHorario;
