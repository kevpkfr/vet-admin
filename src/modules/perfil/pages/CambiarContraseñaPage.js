import React from "react";
import FormCambiarContraseña from "../components/FormCambiarContraseña";

function CambiarContraseñaPage() {
  const handleSave = (form) => {
    alert("Contraseña actualizada con éxito");
  };

  return <FormCambiarContraseña onSave={handleSave} />;
}

export default CambiarContraseñaPage;
