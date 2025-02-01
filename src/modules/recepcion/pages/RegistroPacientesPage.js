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
    <div className="p-6 space-y-6">
      {/* Encabezado con Icono */}
      <div className="flex items-center gap-2">
        <span className="text-3xl">🐾</span>
        <h2 className="text-3xl font-bold text-gray-800">
          Registro de Pacientes
        </h2>
      </div>

      {/* Diseño Responsivo: Dos Columnas en Pantallas Grandes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Lista de Pacientes */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-4">Pacientes Registrados</h3>
          <ListaPacientes
            pacientes={pacientes}
            onEditar={editarPaciente}
            onEliminar={eliminarPaciente}
          />
        </div>

        {/* Formulario de Nuevo Paciente */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-4">Registrar Nuevo Paciente</h3>
          <FormPaciente onAgregar={agregarPaciente} />
        </div>
      </div>
    </div>
  );
}

export default RegistroPacientesPage;
