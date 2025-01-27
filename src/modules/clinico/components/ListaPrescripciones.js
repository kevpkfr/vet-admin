import React, { useState } from "react";

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
    <div className="bg-white p-4 rounded shadow">
      <h3 className="text-xl font-bold mb-4">Lista de Prescripciones</h3>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left">Medicamento</th>
            <th className="px-4 py-2 text-left">Dosis</th>
            <th className="px-4 py-2 text-left">Paciente</th>
            <th className="px-4 py-2 text-left">Acciones</th>
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
                  <td className="border px-4 py-2">
                    <button
                      onClick={handleSave}
                      className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
                    >
                      Guardar
                    </button>
                  </td>
                </>
              ) : (
                <>
                  <td className="border px-4 py-2">{p.medicamento}</td>
                  <td className="border px-4 py-2">{p.dosis}</td>
                  <td className="border px-4 py-2">{p.paciente}</td>
                  <td className="border px-4 py-2">
                    <button
                      onClick={() => {
                        setEditable(p.id);
                        setForm(p); // Carga la prescripción actual en el formulario de edición
                      }}
                      className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 mr-2"
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => onEliminar(p.id)}
                      className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                    >
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
  );
}

export default ListaPrescripciones;
