import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../common/Header"; // Ajusta el path si es necesario

const ReservaExitosa = () => {
  const location = useLocation();
  const message = location.state?.message;
  const error = location.state?.error;

  return (
    <div className="container mt-5">
      <Header title="Reserva Exitosa" />
      <div className="mt-4">
        {message && (
          <div>
            <h3 className="text-success">¡Reserva Exitosa!</h3>
            <p className="text-success">{message}</p>
          </div>
        )}
        {error && (
          <div>
            <h3 className="text-danger">Error en la Reserva</h3>
            <p className="text-danger">{error}</p>
          </div>
        )}
        {!message && !error && (
          <p>No hay información para mostrar sobre la reserva.</p>
        )}
      </div>
    </div>
  );
};

export default ReservaExitosa;
