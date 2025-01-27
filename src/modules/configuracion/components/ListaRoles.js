// src/modules/configuracion/components/ListaRoles.js
import React from "react";

function ListaRoles() {
  const roles = ["Admin", "Veterinario", "Recepcionista"];
  return (
    <ul className="space-y-2">
      {roles.map((rol, index) => (
        <li key={index} className="bg-gray-100 p-2 rounded">
          {rol}
        </li>
      ))}
    </ul>
  );
}

export default ListaRoles;
