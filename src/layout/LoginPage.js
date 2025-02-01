import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Obtener usuarios del localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Validar si los datos coinciden con algún usuario registrado
    const user = users.find(
      (u) => u.email === form.email && u.password === form.password
    );

    if (user) {
      alert(`Bienvenido, ${user.name}`);
      navigate("/"); // Redirige al dashboard principal
    } else {
      setError("Correo o contraseña incorrectos");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-orange-400 to-orange-500">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <div className="text-center mb-6">
          <img
            src="/assets/images/logo.png"
            alt="PetPocket Logo"
            className="h-16 w-16 mx-auto"
          />
          <h1 className="text-2xl font-bold text-gray-700 mt-2">PetPocket</h1>
          <p className="text-gray-500">
            Administra tu veterinaria con facilidad
          </p>
        </div>
        <h2 className="text-xl font-bold mb-4 text-center">Iniciar Sesión</h2>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
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
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600"
          >
            Iniciar Sesión
          </button>
        </form>
        <p className="text-center mt-4 text-gray-600">
          ¿No tienes cuenta?{" "}
          <Link to="/registro" className="text-orange-500 hover:underline">
            Regístrate
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
