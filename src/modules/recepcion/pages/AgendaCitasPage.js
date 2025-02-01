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
      citas.map((cita) => (cita.id === citaEditada.id ? citaEditada : cita))
    );
  };

  return (
    <div className="p-6 space-y-6">
      {/* Encabezado con Icono */}
      <div className="flex items-center gap-2">
        <span className="text-3xl">📅</span>
        <h2 className="text-3xl font-bold text-gray-800">Agenda de Citas</h2>
      </div>

      {/* Diseño Responsivo: Dos Columnas en Pantallas Grandes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Lista de Citas */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-4">Citas Programadas</h3>
          <ListaCitas citas={citas} onEliminar={eliminarCita} onEditar={editarCita} />
        </div>

        {/* Formulario de Nueva Cita */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-4">Agregar Nueva Cita</h3>
          <FormCita onAgregar={agregarCita} />
        </div>
      </div>
    </div>
  );
}

export default AgendaCitasPage;
