// src/modules/rrhh/pages/DetalleEmpleadoPage.js
import React from "react";
import { useParams } from "react-router-dom";
import { EMPLEADOS } from "../../../data/empleados";

function DetalleEmpleadoPage() {
  const { id } = useParams();
  const empleado = EMPLEADOS.find((e) => e.id === parseInt(id));

  if (!empleado) {
    return <h3>Empleado no encontrado</h3>;
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Detalle del Empleado</h2>
      <p><strong>Nombre:</strong> {empleado.nombre}</p>
      <p><strong>Rol:</strong> {empleado.rol}</p>
      <p><strong>Email:</strong> {empleado.email}</p>
    </div>
  );
}

export default DetalleEmpleadoPage;
