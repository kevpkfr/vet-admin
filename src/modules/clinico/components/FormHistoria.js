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

  // Cargar los datos de la historia para edición
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

    // Validar campos obligatorios
    if (!form.paciente || !form.motivo || !form.diagnostico) {
      setError("Por favor, completa todos los campos obligatorios.");
      return;
    }

    setError("");

    // Determinar si es una nueva historia o una actualización
    if (historiaEditando) {
      onActualizar(form);
    } else {
      onAgregar(form);
    }

    // Reiniciar el formulario
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
    <form onSubmit={handleSubmit} className="bg-white shadow rounded-lg p-6 space-y-4">
      <h3 className="text-lg font-bold mb-4">
        {historiaEditando ? "Editar Historia Clínica" : "Agregar Historia Clínica"}
      </h3>
      {error && <p className="text-red-500">{error}</p>}
      <div>
        <label className="block text-gray-700">Nombre del Paciente</label>
        <input
          type="text"
          name="paciente"
          value={form.paciente}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <label className="block text-gray-700">Especie</label>
        <input
          type="text"
          name="especie"
          value={form.especie}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <label className="block text-gray-700">Raza</label>
        <input
          type="text"
          name="raza"
          value={form.raza}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <label className="block text-gray-700">Fecha de Nacimiento</label>
        <input
          type="date"
          name="fechaNacimiento"
          value={form.fechaNacimiento}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <label className="block text-gray-700">Motivo de Consulta</label>
        <textarea
          name="motivo"
          value={form.motivo}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <label className="block text-gray-700">Diagnóstico</label>
        <textarea
          name="diagnostico"
          value={form.diagnostico}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <label className="block text-gray-700">Tratamiento</label>
        <textarea
          name="tratamiento"
          value={form.tratamiento}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <label className="block text-gray-700">Notas Adicionales</label>
        <textarea
          name="notas"
          value={form.notas}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <button
        type="submit"
        className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
      >
        {historiaEditando ? "Guardar Cambios" : "Guardar Historia"}
      </button>
    </form>
  );
}

export default FormHistoria;
