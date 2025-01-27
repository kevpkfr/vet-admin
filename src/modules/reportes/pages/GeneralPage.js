// src/modules/reportes/pages/GeneralPage.js
import React from "react";
import ReporteTabla from "../components/ReporteTabla";
import FiltrosReporte from "../components/FiltrosReporte";
import { GENERAL } from "../../../data/reportes";

function GeneralPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Reporte General</h2>
      <FiltrosReporte />
      <ReporteTabla datos={GENERAL} columnas={["Categoría", "Total"]} />
    </div>
  );
}

export default GeneralPage;
