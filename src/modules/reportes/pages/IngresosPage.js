// src/modules/reportes/pages/IngresosPage.js
import React from "react";
import ReporteTabla from "../components/ReporteTabla";
import FiltrosReporte from "../components/FiltrosReporte";
import { INGRESOS } from "../../../data/reportes";

function IngresosPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Reporte de Ingresos</h2>
      <FiltrosReporte />
      <ReporteTabla datos={INGRESOS} columnas={["Fecha", "Cliente", "Monto"]} />
    </div>
  );
}

export default IngresosPage;
