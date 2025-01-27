import React, { useState } from "react";
import { PACIENTES } from "../../../data/pacientes";
import ListaPacientes from "../components/ListaPacientes";
import FormPaciente from "../components/FormPaciente";

function RegistroPacientesPage() {
  const [pacientes, setPacientes] = useState(PACIENTES);

  // Agregar nuevo paciente
  const agregarPaciente = (nuevoPaciente) => {
    nuevoPaciente.id = Date.now(); // Generar ID único
    setPacientes([...pacientes, nuevoPaciente]);
  };

  // Editar paciente existente
  const editarPaciente = (pacienteEditado) => {
    setPacientes(
      pacientes.map((paciente) =>
        paciente.id === pacienteEditado.id ? pacienteEditado : paciente
      )
    );
  };

  // Eliminar paciente
  const eliminarPaciente = (id) => {
    setPacientes(pacientes.filter((paciente) => paciente.id !== id));
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-4">Registro de Pacientes</h2>

      {/* Lista de pacientes */}
      <ListaPacientes
        pacientes={pacientes}
        onEditar={editarPaciente}
        onEliminar={eliminarPaciente}
      />

      {/* Formulario para agregar nuevos pacientes */}
      <FormPaciente onAgregar={agregarPaciente} />
    </div>
  );
}

export default RegistroPacientesPage;
