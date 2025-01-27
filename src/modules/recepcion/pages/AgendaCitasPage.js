import React, { useState } from "react";
import { CITAS } from "../../../data/citas";
import ListaCitas from "../components/ListaCitas";
import FormCita from "../components/FormCita";

function AgendaCitasPage() {
  const [citas, setCitas] = useState(CITAS);

  // Agregar nueva cita
  const agregarCita = (nuevaCita) => {
    nuevaCita.id = Date.now(); // Generar ID único
    setCitas([...citas, nuevaCita]);
  };

  // Eliminar cita
  const eliminarCita = (id) => {
    setCitas(citas.filter((cita) => cita.id !== id));
  };

  // Editar cita
  const editarCita = (citaEditada) => {
    setCitas(
      citas.map((cita) =>
        cita.id === citaEditada.id ? citaEditada : cita
      )
    );
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-4">Agenda de Citas</h2>

      {/* Lista de citas */}
      <ListaCitas
        citas={citas}
        onEliminar={eliminarCita}
        onEditar={editarCita}
      />

      {/* Formulario para agregar nuevas citas */}
      <FormCita onAgregar={agregarCita} />
    </div>
  );
}

export default AgendaCitasPage;
