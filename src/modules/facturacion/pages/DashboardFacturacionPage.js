import React from "react";

function DashboardFacturacionPage() {
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-4 text-blue-600">
        Dashboard de Facturación
      </h2>
      <p className="text-gray-700">
        Bienvenido al módulo de facturación. Desde aquí puedes gestionar tus
        facturas y pagos de manera eficiente.
      </p>
      <div className="grid grid-cols-2 gap-6 mt-6">
        <div className="p-4 bg-white rounded shadow hover:shadow-md">
          <h3 className="text-xl font-bold text-gray-800">Facturas</h3>
          <p className="text-gray-600">Gestiona y revisa las facturas emitidas.</p>
        </div>
        <div className="p-4 bg-white rounded shadow hover:shadow-md">
          <h3 className="text-xl font-bold text-gray-800">Pagos</h3>
          <p className="text-gray-600">Visualiza y administra los pagos realizados.</p>
        </div>
      </div>
    </div>
  );
}

export default DashboardFacturacionPage;
