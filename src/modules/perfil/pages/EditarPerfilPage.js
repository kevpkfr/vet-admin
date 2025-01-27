import React from "react";
import FormActualizarPerfil from "../components/FormActualizarPerfil";

function EditarPerfilPage() {
  const user = JSON.parse(localStorage.getItem("user")) || {
    name: "Admin",
    email: "admin@example.com",
  };

  const handleSave = (updatedUser) => {
    localStorage.setItem("user", JSON.stringify(updatedUser));
    alert("Perfil actualizado con éxito");
  };

  return <FormActualizarPerfil user={user} onSave={handleSave} />;
}

export default EditarPerfilPage;
