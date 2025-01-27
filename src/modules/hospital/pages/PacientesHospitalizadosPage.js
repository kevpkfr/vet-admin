import React, { useState } from "react";
import { PACIENTES } from "../../../data/pacientes";

const PACIENTES_HOSPITALIZADOS = [
  { id: 1, pacienteId: 1, motivo: "Fractura", estado: "En tratamiento" },
];

function PacientesHospitalizadosPage() {
  const [hospitalizados, setHospitalizados] = useState(PACIENTES_HOSPITALIZADOS);

  // Agregar paciente hospitalizado
  const agregarPaciente = (nuevoPaciente) => {
    setHospitalizados([...hospitalizados, { ...nuevoPaciente, id: Date.now() }]);
  };

  // Cambiar estado del paciente
  const actualizarEstado = (id, nuevoEstado) => {
    setHospitalizados(
      hospitalizados.map((paciente) =>
        paciente.id === id ? { ...paciente, estado: nuevoEstado } : paciente
      )
    );
  };

  // Obtener nombre del paciente desde el catálogo
  const obtenerNombrePaciente = (pacienteId) => {
    const paciente = PACIENTES.find((p) => p.id === pacienteId);
    return paciente ? paciente.nombre : "Desconocido";
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-4">Pacientes Hospitalizados</h2>

      {/* Lista de pacientes hospitalizados */}
      <table className="table-auto w-full bg-white rounded shadow">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left">Nombre</th>
            <th className="px-4 py-2 text-left">Motivo</th>
            <th className="px-4 py-2 text-left">Estado</th>
            <th className="px-4 py-2 text-left">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {hospitalizados.map((paciente) => (
            <tr key={paciente.id} className="hover:bg-gray-100">
              <td className="border px-4 py-2">
                {obtenerNombrePaciente(paciente.pacienteId)}
              </td>
              <td className="border px-4 py-2">{paciente.motivo}</td>
              <td className="border px-4 py-2">{paciente.estado}</td>
              <td className="border px-4 py-2">
                <button
                  onClick={() => actualizarEstado(paciente.id, "Dado de alta")}
                  className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 mr-2"
                >
                  Dar de alta
                </button>
                <button
                  onClick={() => actualizarEstado(paciente.id, "En tratamiento")}
                  className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
                >
                  En tratamiento
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Formulario para agregar nuevos pacientes */}
      <FormPacienteHospitalizado onAgregar={agregarPaciente} />
    </div>
  );
}

function FormPacienteHospitalizado({ onAgregar }) {
  const [form, setForm] = useState({
    pacienteId: "",
    motivo: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.pacienteId || !form.motivo) {
      alert("Por favor, completa todos los campos.");
      return;
    }
    onAgregar(form);
    setForm({ pacienteId: "", motivo: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 rounded shadow space-y-4"
    >
      <h3 className="text-xl font-bold">Agregar Paciente Hospitalizado</h3>
      <div>
        <label className="block text-sm font-medium">Paciente</label>
        <select
          name="pacienteId"
          value={form.pacienteId}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-2 py-1"
          required
        >
          <option value="">Selecciona un paciente</option>
          {PACIENTES.map((paciente) => (
            <option key={paciente.id} value={paciente.id}>
              {paciente.nombre} - {paciente.propietario}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium">Motivo</label>
        <input
          type="text"
          name="motivo"
          value={form.motivo}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-2 py-1"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Agregar
      </button>
    </form>
  );
}

export default PacientesHospitalizadosPage;
