import React, { useState } from "react";
import { HISTORIAS } from "../../../data/historias";
import ListaHistorias from "../components/ListaHistorias";
import FormHistoria from "../components/FormHistoria";
import DetalleHistoria from "../components/DetalleHistoria";

function HistoriasClinicasPage() {
  const [historias, setHistorias] = useState(HISTORIAS);
  const [historiaEditando, setHistoriaEditando] = useState(null); // Historia seleccionada para edición
  const [historiaSeleccionada, setHistoriaSeleccionada] = useState(null); // Historia seleccionada para visualizar

  // Crear nueva historia clínica
  const agregarHistoria = (nuevaHistoria) => {
    nuevaHistoria.id = Date.now(); // Generar un ID único
    setHistorias([...historias, nuevaHistoria]);
  };

  // Editar una historia existente
  const actualizarHistoria = (historiaActualizada) => {
    setHistorias(
      historias.map((historia) =>
        historia.id === historiaActualizada.id ? historiaActualizada : historia
      )
    );
    setHistoriaEditando(null); // Reiniciar el estado de edición
  };

  // Eliminar una historia clínica
  const eliminarHistoria = (id) => {
    setHistorias(historias.filter((historia) => historia.id !== id));
  };

  // Cerrar vista detallada
  const cerrarDetalle = () => {
    setHistoriaSeleccionada(null);
  };

  return (
    <div className="space-y-6 bg-gray-50 p-6 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-gray-700 mb-6">
        Gestión de Historias Clínicas
      </h2>

      {historiaSeleccionada ? (
        <div className="bg-white p-6 rounded-lg shadow">
          <DetalleHistoria
            historia={historiaSeleccionada}
            onCerrar={cerrarDetalle}
          />
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Lista de historias */}
          <div className="bg-white p-6 rounded-lg shadow">
            <ListaHistorias
              historias={historias}
              onEditar={setHistoriaEditando} // Selecciona una historia para editar
              onEliminar={eliminarHistoria}
              onVerDetalle={setHistoriaSeleccionada} // Selecciona una historia para visualizar
            />
          </div>

          {/* Formulario de historia */}
          <div className="bg-white p-6 rounded-lg shadow">
            <FormHistoria
              onAgregar={agregarHistoria}
              onActualizar={actualizarHistoria}
              historiaEditando={historiaEditando}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default HistoriasClinicasPage;
