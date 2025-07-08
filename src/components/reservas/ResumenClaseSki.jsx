import moment from "moment";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ResumenClaseSki = ({ reserva, pago, formValido, onConfirm }) => {
  const fechaClase = moment(reserva.fechaClase);
  const [reservaConfirmada, setReservaConfirmada] = useState(false);
  const [procesandoPago, setProcesandoPago] = useState(false);
  const navigate = useNavigate();

  const manejarConfirmacionReserva = () => {
    setProcesandoPago(true);
    setTimeout(() => {
      setProcesandoPago(false);
      setReservaConfirmada(true);
      onConfirm();
    }, 3000);
  };

  useEffect(() => {
    if (reservaConfirmada) {
      navigate("/reserva-exitosa");
    }
  }, [reservaConfirmada, navigate]);

  return (
    <div className="card card-body mt-5">
      <h4>Resumen de Reserva de Clase de Ski</h4>
      <p>
        Nombre completo: <strong>{reserva.nombreCliente}</strong>
      </p>
      <p>
        Email: <strong>{reserva.emailCliente}</strong>
      </p>
      <p>
        Fecha de la clase: <strong>{fechaClase.format("DD/MM/YYYY")}</strong>
      </p>
      <p>
        Nivel seleccionado: <strong>{reserva.nivelClase}</strong>
      </p>
      <p>
        Total de alumnos: <strong>{reserva.totalAlumnos}</strong>
      </p>

      {pago > 0 && (
        <>
          <p>
            Pago Total: <strong>${pago}</strong>
          </p>
          {formValido && !reservaConfirmada ? (
            <Button variant="success" onClick={manejarConfirmacionReserva}>
              {procesandoPago ? (
                <>
                  <span
                    className="spinner-border spinner-border-sm me-2"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  Procesando pago...
                </>
              ) : (
                "Confirmar Reserva y proceder al pago"
              )}
            </Button>
          ) : reservaConfirmada ? (
            <div>
              <span className="sr-only">Cargando...</span>
            </div>
          ) : null}
        </>
      )}
    </div>
  );
};

export default ResumenClaseSki;
