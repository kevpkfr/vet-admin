import React, { useState } from "react";

function ConfiguracionGeneralPage() {
  const [config, setConfig] = useState({
    horarioApertura: "08:00",
    horarioCierre: "18:00",
    idioma: "es",
    moneda: "USD",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setConfig((prevConfig) => ({
      ...prevConfig,
      [name]: value,
    }));
  };

  const guardarCambios = () => {
    alert("Configuraciones guardadas correctamente.");
    console.log("Nuevas configuraciones:", config);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 space-y-6">
      <h2 className="text-xl font-bold mb-4">Configuración General</h2>

      {/* Horario de atención */}
      <div>
        <label className="block text-gray-700 mb-2">Horario de Apertura</label>
        <input
          type="time"
          name="horarioApertura"
          value={config.horarioApertura}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
        />
      </div>

      <div>
        <label className="block text-gray-700 mb-2">Horario de Cierre</label>
        <input
          type="time"
          name="horarioCierre"
          value={config.horarioCierre}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
        />
      </div>

      {/* Idioma */}
      <div>
        <label className="block text-gray-700 mb-2">Idioma</label>
        <select
          name="idioma"
          value={config.idioma}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
        >
          <option value="es">Español</option>
          <option value="en">Inglés</option>
        </select>
      </div>

      {/* Moneda */}
      <div>
        <label className="block text-gray-700 mb-2">Moneda</label>
        <select
          name="moneda"
          value={config.moneda}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
        >
          <option value="USD">Dólar (USD)</option>
          <option value="EUR">Euro (EUR)</option>
          <option value="MXN">Peso Mexicano (MXN)</option>
        </select>
      </div>

      {/* Botón para guardar */}
      <button
        onClick={guardarCambios}
        className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
      >
        Guardar Cambios
      </button>
    </div>
  );
}

export default ConfiguracionGeneralPage;
