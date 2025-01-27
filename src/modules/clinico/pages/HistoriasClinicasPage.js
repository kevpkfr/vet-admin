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
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-4">Historias Clínicas</h2>

      {historiaSeleccionada ? (
        <DetalleHistoria
          historia={historiaSeleccionada}
          onCerrar={cerrarDetalle}
        />
      ) : (
        <>
          <ListaHistorias
            historias={historias}
            onEditar={setHistoriaEditando} // Selecciona una historia para editar
            onEliminar={eliminarHistoria}
            onVerDetalle={setHistoriaSeleccionada} // Selecciona una historia para visualizar
          />
          <FormHistoria
            onAgregar={agregarHistoria}
            onActualizar={actualizarHistoria}
            historiaEditando={historiaEditando}
          />
        </>
      )}
    </div>
  );
}

export default HistoriasClinicasPage;
