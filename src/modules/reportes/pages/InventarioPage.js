// src/modules/reportes/pages/InventarioPage.js
import React from "react";
import ReporteTabla from "../components/ReporteTabla";
import FiltrosReporte from "../components/FiltrosReporte";
import { INVENTARIO } from "../../../data/reportes";

function InventarioPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Reporte de Inventario</h2>
      <FiltrosReporte />
      <ReporteTabla datos={INVENTARIO} columnas={["Producto", "Cantidad", "Precio Unitario"]} />
    </div>
  );
}

export default InventarioPage;
