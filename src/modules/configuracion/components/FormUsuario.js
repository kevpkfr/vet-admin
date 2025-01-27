import React, { useState, useEffect } from "react";

function FormUsuario({ onAgregar, usuarioEditado }) {
  const [formData, setFormData] = useState({ nombre: "", correo: "", rol: "" });

  // Efecto para cargar los datos del usuario editado en el formulario
  useEffect(() => {
    if (usuarioEditado) {
      setFormData(usuarioEditado);
    }
  }, [usuarioEditado]);

  // Manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    onAgregar(formData); // Agregar o actualizar usuario
    setFormData({ nombre: "", correo: "", rol: "" }); // Resetear formulario
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-xl font-bold mb-4">
        {usuarioEditado ? "Editar Usuario" : "Registrar Usuario"}
      </h2>
      <div className="mb-4">
        <label className="block text-gray-700">Nombre</label>
        <input
          type="text"
          value={formData.nombre}
          onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Correo</label>
        <input
          type="email"
          value={formData.correo}
          onChange={(e) => setFormData({ ...formData, correo: e.target.value })}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Rol</label>
        <select
          value={formData.rol}
          onChange={(e) => setFormData({ ...formData, rol: e.target.value })}
          className="w-full p-2 border rounded"
        >
          <option value="">Seleccione un rol</option>
          <option value="Administrador">Administrador</option>
          <option value="Veterinario">Veterinario</option>
          <option value="Recepcionista">Recepcionista</option>
        </select>
      </div>
      <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
        {usuarioEditado ? "Guardar Cambios" : "Registrar"}
      </button>
    </form>
  );
}

export default FormUsuario;
