import React, { useState } from "react";
import { EMPLEADOS } from "../../../data/empleados";
import ListaEmpleados from "../components/ListaEmpleados";
import FormEmpleado from "../components/FormEmpleado";

function ListaEmpleadosPage() {
  const [empleados, setEmpleados] = useState(EMPLEADOS);
  const [editableEmpleado, setEditableEmpleado] = useState(null);

  const handleAgregarEmpleado = (nuevoEmpleado) => {
    setEmpleados([...empleados, { ...nuevoEmpleado, id: empleados.length + 1 }]);
  };

  const handleEditarEmpleado = (empleadoEditado) => {
    setEmpleados(
      empleados.map((empleado) =>
        empleado.id === empleadoEditado.id ? empleadoEditado : empleado
      )
    );
    setEditableEmpleado(null);
  };

  const handleEliminarEmpleado = (id) => {
    setEmpleados(empleados.filter((empleado) => empleado.id !== id));
  };

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-4 text-blue-600">Gestión de Empleados</h2>
      <div className="mb-6">
        {editableEmpleado ? (
          <FormEmpleado
            empleado={editableEmpleado}
            onSubmit={handleEditarEmpleado}
          />
        ) : (
          <FormEmpleado onSubmit={handleAgregarEmpleado} />
        )}
      </div>
      <ListaEmpleados
        empleados={empleados}
        onEditar={(empleado) => setEditableEmpleado(empleado)}
        onEliminar={handleEliminarEmpleado}
      />
    </div>
  );
}

export default ListaEmpleadosPage;
