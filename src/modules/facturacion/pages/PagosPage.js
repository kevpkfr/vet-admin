import React, { useState } from "react";
import { PAGOS } from "../../../data/pagos";
import ListaPagos from "../components/ListaPagos";
import FormPago from "../components/FormPago";

function PagosPage() {
  const [pagos, setPagos] = useState(PAGOS);

  const handleEliminar = (id) => {
    setPagos(pagos.filter((pago) => pago.id !== id));
  };

  const handleAgregarPago = (nuevoPago) => {
    setPagos([...pagos, { ...nuevoPago, id: pagos.length + 1 }]);
  };

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-4 text-blue-600">
        Pagos Registrados
      </h2>
      <div className="mb-6">
        <FormPago onSubmit={handleAgregarPago} />
      </div>
      <ListaPagos pagos={pagos} onEliminar={handleEliminar} />
    </div>
  );
}

export default PagosPage;
