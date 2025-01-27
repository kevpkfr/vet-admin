// src/modules/reportes/pages/ServiciosPage.js
import React from "react";
import ReporteTabla from "../components/ReporteTabla";
import FiltrosReporte from "../components/FiltrosReporte";
import { SERVICIOS } from "../../../data/reportes";

function ServiciosPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Reporte de Servicios</h2>
      <FiltrosReporte />
      <ReporteTabla datos={SERVICIOS} columnas={["Fecha", "Servicio", "Cliente", "Monto"]} />
    </div>
  );
}

export default ServiciosPage;
