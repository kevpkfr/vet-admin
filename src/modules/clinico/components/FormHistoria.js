import React, { useState, useEffect } from "react";

function FormHistoria({ onAgregar, onActualizar, historiaEditando }) {
  const [form, setForm] = useState({
    paciente: "",
    especie: "",
    raza: "",
    fechaNacimiento: "",
    motivo: "",
    diagnostico: "",
    tratamiento: "",
    notas: "",
  });

  const [error, setError] = useState("");

  useEffect(() => {
    if (historiaEditando) {
      setForm(historiaEditando);
    } else {
      setForm({
        paciente: "",
        especie: "",
        raza: "",
        fechaNacimiento: "",
        motivo: "",
        diagnostico: "",
        tratamiento: "",
        notas: "",
      });
    }
  }, [historiaEditando]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.paciente || !form.motivo || !form.diagnostico) {
      setError("Por favor, completa todos los campos obligatorios.");
      return;
    }

    setError("");

    if (historiaEditando) {
      onActualizar(form);
    } else {
      onAgregar(form);
    }

    setForm({
      paciente: "",
      especie: "",
      raza: "",
      fechaNacimiento: "",
      motivo: "",
      diagnostico: "",
      tratamiento: "",
      notas: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-lg rounded-lg p-6 max-w-3xl mx-auto space-y-4"
    >
      <h3 className="text-2xl font-bold text-gray-700 mb-6 text-center">
        {historiaEditando ? "Editar Historia Clínica" : "Agregar Historia Clínica"}
      </h3>
      {error && (
        <p className="text-red-500 text-center font-medium">{error}</p>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Nombre del Paciente
          </label>
          <input
            type="text"
            name="paciente"
            value={form.paciente}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:ring focus:ring-orange-300 focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1">Especie</label>
          <input
            type="text"
            name="especie"
            value={form.especie}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:ring focus:ring-orange-300 focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1">Raza</label>
          <input
            type="text"
            name="raza"
            value={form.raza}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:ring focus:ring-orange-300 focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Fecha de Nacimiento
          </label>
          <input
            type="date"
            name="fechaNacimiento"
            value={form.fechaNacimiento}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:ring focus:ring-orange-300 focus:outline-none"
          />
        </div>
      </div>
      <div>
        <label className="block text-gray-700 font-medium mb-1">
          Motivo de Consulta
        </label>
        <textarea
          name="motivo"
          value={form.motivo}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded focus:ring focus:ring-orange-300 focus:outline-none"
        />
      </div>
      <div>
        <label className="block text-gray-700 font-medium mb-1">Diagnóstico</label>
        <textarea
          name="diagnostico"
          value={form.diagnostico}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded focus:ring focus:ring-orange-300 focus:outline-none"
        />
      </div>
      <div>
        <label className="block text-gray-700 font-medium mb-1">Tratamiento</label>
        <textarea
          name="tratamiento"
          value={form.tratamiento}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded focus:ring focus:ring-orange-300 focus:outline-none"
        />
      </div>
      <div>
        <label className="block text-gray-700 font-medium mb-1">
          Notas Adicionales
        </label>
        <textarea
          name="notas"
          value={form.notas}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded focus:ring focus:ring-orange-300 focus:outline-none"
        />
      </div>
      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 transition font-bold"
        >
          {historiaEditando ? "Guardar Cambios" : "Guardar Historia"}
        </button>
      </div>
    </form>
  );
}

export default FormHistoria;
