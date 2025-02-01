import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function RegisterPage() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Obtener usuarios existentes del localStorage o usar una lista vacía
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    // Verificar si el correo ya está registrado
    const userExists = existingUsers.some((u) => u.email === form.email);

    if (userExists) {
      setError("Este correo ya está registrado");
    } else if (form.name && form.email && form.password) {
      // Guardar el nuevo usuario en el localStorage
      const updatedUsers = [...existingUsers, form];
      localStorage.setItem("users", JSON.stringify(updatedUsers));

      alert("Registro exitoso. Ahora puedes iniciar sesión.");
      navigate("/login"); // Redirige al login
    } else {
      setError("Por favor completa todos los campos");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-orange-400 to-orange-500">
      <div className="flex bg-white shadow-lg rounded-lg w-full max-w-4xl">
        {/* Columna izquierda */}
        <div className="flex flex-col items-center justify-center bg-black text-white p-6 w-1/3 rounded-l-lg">
          <img
            src="/assets/images/logo.png"
            alt="PetPocket Logo"
            className="h-16 w-16 mb-4"
          />
          <h1 className="text-2xl font-bold mb-2">PetPocket</h1>
          <p className="text-center mb-6">
            Regístrate usando tus redes sociales
          </p>
          <button className="w-full bg-blue-600 hover:bg-blue-700 py-2 mb-3 rounded">
            Registrarse con Facebook
          </button>
          <button className="w-full bg-sky-500 hover:bg-sky-600 py-2 mb-3 rounded">
            Registrarse con Twitter
          </button>
          <button className="w-full bg-red-600 hover:bg-red-700 py-2 rounded">
            Registrarse con Google
          </button>
        </div>

        {/* Columna derecha */}
        <div className="flex-1 p-8">
          <h2 className="text-2xl font-bold text-center mb-6">Crear Cuenta</h2>
          {error && (
            <p className="text-red-500 text-sm mb-4 text-center">{error}</p>
          )}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700">Nombre</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                placeholder="Tu Nombre Completo"
              />
            </div>
            <div>
              <label className="block text-gray-700">Correo Electrónico</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                placeholder="tucorreo@ejemplo.com"
              />
            </div>
            <div>
              <label className="block text-gray-700">Contraseña</label>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                placeholder="••••••••"
              />
            </div>
            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-gray-600">
                  Acepto los términos y condiciones
                </span>
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600"
            >
              Crear Cuenta
            </button>
          </form>
          <p className="text-center mt-4 text-gray-600">
            ¿Ya tienes cuenta?{" "}
            <Link to="/login" className="text-orange-500 hover:underline">
              Inicia sesión
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
