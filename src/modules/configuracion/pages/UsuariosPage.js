import React, { useState } from "react";
import ListaUsuarios from "../components/ListaUsuarios";
import FormUsuario from "../components/FormUsuario";

// Datos quemados de ejemplo
const usuariosMock = [
  { id: 1, nombre: "Juan Pérez", correo: "juan@example.com", rol: "Administrador" },
  { id: 2, nombre: "Ana López", correo: "ana@example.com", rol: "Veterinario" },
];

function UsuariosPage() {
  const [usuarios, setUsuarios] = useState(usuariosMock); // Lista de usuarios
  const [usuarioEditado, setUsuarioEditado] = useState(null); // Usuario seleccionado para editar

  // Función para agregar o actualizar un usuario
  const agregarUsuario = (nuevoUsuario) => {
    if (nuevoUsuario.id) {
      // Si existe ID, actualizamos el usuario
      setUsuarios(
        usuarios.map((usuario) =>
          usuario.id === nuevoUsuario.id ? nuevoUsuario : usuario
        )
      );
    } else {
      // Si no existe ID, es un nuevo usuario
      setUsuarios([
        ...usuarios,
        { ...nuevoUsuario, id: usuarios.length + 1 },
      ]);
    }
    setUsuarioEditado(null); // Limpia el formulario después de guardar
  };

  // Función para eliminar un usuario
  const eliminarUsuario = (id) => {
    setUsuarios(usuarios.filter((usuario) => usuario.id !== id));
  };

  // Función para seleccionar un usuario y cargarlo en el formulario
  const editarUsuario = (usuario) => {
    setUsuarioEditado(usuario);
  };

  return (
    <div className="space-y-6">
      {/* Lista de usuarios */}
      <ListaUsuarios
        usuarios={usuarios}
        onEliminar={eliminarUsuario}
        onEditar={editarUsuario}
      />

      {/* Formulario para agregar o editar usuarios */}
      <FormUsuario onAgregar={agregarUsuario} usuarioEditado={usuarioEditado} />
    </div>
  );
}

export default UsuariosPage;
