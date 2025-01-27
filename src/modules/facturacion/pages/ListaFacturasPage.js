import React, { useState } from "react";
import { FACTURAS } from "../../../data/facturas";
import ListaFacturas from "../components/ListaFacturas";

function ListaFacturasPage() {
  const [facturas, setFacturas] = useState(FACTURAS);

  const handleEliminar = (id) => {
    setFacturas(facturas.filter((factura) => factura.id !== id));
  };

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-4 text-blue-600">
        Lista de Facturas
      </h2>
      <ListaFacturas facturas={facturas} onEliminar={handleEliminar} />
    </div>
  );
}

export default ListaFacturasPage;
