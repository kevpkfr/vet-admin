import React, { useState } from "react";

function FormPago({ onSubmit }) {
  const [form, setForm] = useState({
    facturaId: "",
    monto: "",
    fecha: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
    setForm({ facturaId: "", monto: "", fecha: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 rounded shadow space-y-4"
    >
      <div>
        <label className="block text-sm font-medium">ID de Factura</label>
        <input
          type="text"
          name="facturaId"
          value={form.facturaId}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-2 py-1"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Monto</label>
        <input
          type="number"
          step="0.01"
          name="monto"
          value={form.monto}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-2 py-1"
          required
        />
      </div>
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
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Registrar Pago
      </button>
    </form>
  );
}

export default FormPago;
