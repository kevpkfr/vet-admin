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
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Prescripciones</h2>
      <ListaPrescripciones
        prescripciones={prescripciones}
        onEditar={actualizarPrescripcion}
        onEliminar={eliminarPrescripcion}
      />
      <FormPrescripcion onAgregar={agregarPrescripcion} />
    </div>
  );
}

export default PrescripcionesPage;
