import React, { useState } from "react";
import { FiEdit, FiTrash2, FiSave } from "react-icons/fi";

function ListaPrescripciones({ prescripciones, onEditar, onEliminar }) {
  const [editable, setEditable] = useState(null); // Controla qué prescripción se está editando
  const [form, setForm] = useState({ medicamento: "", dosis: "", paciente: "" });

  // Manejar cambios en el formulario de edición
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Guardar cambios de la prescripción editada
  const handleSave = (e) => {
    e.preventDefault();
    onEditar(form);
    setEditable(null);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-2xl font-bold text-gray-800 mb-4">Lista de Prescripciones</h3>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left border border-gray-300">Medicamento</th>
              <th className="px-4 py-2 text-left border border-gray-300">Dosis</th>
              <th className="px-4 py-2 text-left border border-gray-300">Paciente</th>
              <th className="px-4 py-2 text-left border border-gray-300">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {prescripciones.map((p) => (
              <tr key={p.id} className="hover:bg-gray-100">
                {editable === p.id ? (
                  <>
                    <td className="border px-4 py-2">
                      <input
                        type="text"
                        name="medicamento"
                        value={form.medicamento}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded px-2 py-1"
                      />
                    </td>
                    <td className="border px-4 py-2">
                      <input
                        type="text"
                        name="dosis"
                        value={form.dosis}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded px-2 py-1"
                      />
                    </td>
                    <td className="border px-4 py-2">
                      <input
                        type="text"
                        name="paciente"
                        value={form.paciente}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded px-2 py-1"
                      />
                    </td>
                    <td className="border px-4 py-2 flex gap-2">
                      <button
                        onClick={handleSave}
                        className="flex items-center gap-1 bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 transition"
                      >
                        <FiSave />
                        Guardar
                      </button>
                    </td>
                  </>
                ) : (
                  <>
                    <td className="border px-4 py-2">{p.medicamento}</td>
                    <td className="border px-4 py-2">{p.dosis}</td>
                    <td className="border px-4 py-2">{p.paciente}</td>
                    <td className="border px-4 py-2 flex gap-2">
                      <button
                        onClick={() => {
                          setEditable(p.id);
                          setForm(p); // Carga la prescripción actual en el formulario de edición
                        }}
                        className="flex items-center gap-1 bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition"
                      >
                        <FiEdit />
                        Editar
                      </button>
                      <button
                        onClick={() => onEliminar(p.id)}
                        className="flex items-center gap-1 bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition"
                      >
                        <FiTrash2 />
                        Eliminar
                      </button>
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListaPrescripciones;
