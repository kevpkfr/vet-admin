import React from "react";
import { Routes, Route } from "react-router-dom";
import PerfilPage from "./pages/PerfilPage";
import EditarPerfilPage from "./pages/EditarPerfilPage";
import CambiarContraseñaPage from "./pages/CambiarContraseñaPage";

function PerfilModule() {
  return (
    <Routes>
      <Route path="/" element={<PerfilPage />} />
      <Route path="/editar" element={<EditarPerfilPage />} />
      <Route path="/cambiar-contraseña" element={<CambiarContraseñaPage />} />
    </Routes>
  );
}

export default PerfilModule;
