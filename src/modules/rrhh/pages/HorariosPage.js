import React, { useState } from "react";
import { HORARIOS_ASIGNADOS, HORARIOS_CATALOGO } from "../../../data/horarios";
import ListaHorarios from "../components/ListaHorarios";
import FormHorario from "../components/FormHorario";

function HorariosPage() {
  const [horariosAsignados, setHorariosAsignados] = useState(HORARIOS_ASIGNADOS);
  const [horariosCatalogo, setHorariosCatalogo] = useState(HORARIOS_CATALOGO);
  const [editableHorario, setEditableHorario] = useState(null);

  const handleAgregarHorario = (nuevoHorario) => {
    setHorariosAsignados([
      ...horariosAsignados,
      { ...nuevoHorario, id: horariosAsignados.length + 1 },
    ]);
  };

  const handleEditarHorario = (horarioEditado) => {
    setHorariosAsignados(
      horariosAsignados.map((horario) =>
        horario.id === horarioEditado.id ? horarioEditado : horario
      )
    );
    setEditableHorario(null);
  };

  const handleEliminarHorario = (id) => {
    setHorariosAsignados(horariosAsignados.filter((horario) => horario.id !== id));
  };

  const handleAgregarHorarioCatalogo = (nuevoHorario) => {
    setHorariosCatalogo([...horariosCatalogo, nuevoHorario]);
  };

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-4 text-green-600">Gestión de Horarios</h2>

      <div className="mb-6">
        {editableHorario ? (
          <FormHorario
            horario={editableHorario}
            onSubmit={handleEditarHorario}
            horariosCatalogo={horariosCatalogo}
          />
        ) : (
          <FormHorario
            onSubmit={handleAgregarHorario}
            horariosCatalogo={horariosCatalogo}
          />
        )}
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-bold mb-2">Agregar Nuevo Horario al Catálogo</h3>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const nuevoHorario = e.target.elements.nuevoHorario.value.trim();
            if (nuevoHorario && !horariosCatalogo.includes(nuevoHorario)) {
              handleAgregarHorarioCatalogo(nuevoHorario);
              e.target.reset();
            } else {
              alert("Horario ya existe o está vacío.");
            }
          }}
          className="bg-white p-4 rounded shadow"
        >
          <input
            type="text"
            name="nuevoHorario"
            placeholder="Ejemplo: Lunes a Jueves: 8:00 AM - 4:00 PM"
            className="w-full border border-gray-300 rounded px-2 py-1 mb-2"
            required
          />
          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Agregar al Catálogo
          </button>
        </form>
      </div>

      <ListaHorarios
        horarios={horariosAsignados}
        onEditar={(horario) => setEditableHorario(horario)}
        onEliminar={handleEliminarHorario}
      />
    </div>
  );
}

export default HorariosPage;
