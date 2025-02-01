import React, { useState } from "react";
import ListaPrescripciones from "../components/ListaPrescripciones";
import FormPrescripcion from "../components/FormPrescripcion";

function PrescripcionesPage() {
  const [prescripciones, setPrescripciones] = useState([
    { id: 1, medicamento: "Amoxicilina", dosis: "500mg", paciente: "Max" },
    { id: 2, medicamento: "Metronidazol", dosis: "250mg", paciente: "Luna" },
  ]);

  // Crear nueva prescripción
  const agregarPrescripcion = (nuevaPrescripcion) => {
    nuevaPrescripcion.id = Date.now(); // Generar ID único
    setPrescripciones([...prescripciones, nuevaPrescripcion]);
  };

  // Actualizar una prescripción existente
  const actualizarPrescripcion = (prescripcionActualizada) => {
    setPrescripciones(
      prescripciones.map((p) =>
        p.id === prescripcionActualizada.id ? prescripcionActualizada : p
      )
    );
  };

  // Eliminar una prescripción
  const eliminarPrescripcion = (id) => {
    setPrescripciones(prescripciones.filter((p) => p.id !== id));
  };

  return (
    <div className="space-y-6 bg-gray-50 p-6 rounded-lg shadow-lg">
      {/* Encabezado */}
      <h2 className="text-3xl font-bold text-gray-700 mb-6">Gestión de Prescripciones</h2>

      {/* Contenedor principal */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Lista de prescripciones */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-4">Lista de Prescripciones</h3>
          <ListaPrescripciones
            prescripciones={prescripciones}
            onEditar={actualizarPrescripcion}
            onEliminar={eliminarPrescripcion}
          />
        </div>

        {/* Formulario de prescripción */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-4">Nueva Prescripción</h3>
          <FormPrescripcion onAgregar={agregarPrescripcion} />
        </div>
      </div>
    </div>
  );
}

export default PrescripcionesPage;
