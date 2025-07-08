import React, { useState } from "react";

const FormularioReservaSki = () => {
  const [reserva, setReserva] = useState({
    nombreCliente: "",
    emailCliente: "",
    nivelClase: "",
    fechaClase: "",
    cantidadHoras: "",
  });

  const [mensajeError, setMensajeError] = useState("");
  const [mensajeExito, setMensajeExito] = useState("");

  const textosMotivacionales = {
    "Never Ever": "¡Primera vez en la nieve? Aquí te acompañamos paso a paso.",
    Principiante: "Aprende las bases para deslizarte con confianza.",
    Intermedio: "Mejora tu técnica y domina nuevas pistas.",
    Avanzado: "Prepárate para desafíos mayores y diversión asegurada.",
    "Experto (fuera de pista, freestyle)":
      "¡Para quienes buscan adrenalina con fuera de pista y freestyle!",
  };

  const manejarCambioInput = (e) => {
    const { name, value } = e.target;
    setReserva({ ...reserva, [name]: value });
    setMensajeError("");
    setMensajeExito("");
  };

  const validarFormulario = () => {
    if (!reserva.nombreCliente.trim()) {
      setMensajeError("Debe ingresar su nombre");
      return false;
    }
    if (!reserva.emailCliente.trim()) {
      setMensajeError("Debe ingresar su email");
      return false;
    }
    if (!reserva.nivelClase) {
      setMensajeError("Debe seleccionar un nivel de clase");
      return false;
    }
    if (!reserva.fechaClase) {
      setMensajeError("Debe seleccionar la fecha de la clase");
      return false;
    }
    if (!reserva.cantidadHoras || isNaN(reserva.cantidadHoras) || reserva.cantidadHoras <= 0) {
      setMensajeError("Debe ingresar una cantidad válida de horas");
      return false;
    }
    return true;
  };

  const manejarEnvio = (e) => {
    e.preventDefault();
    if (!validarFormulario()) return;

    // Aquí iría la lógica para enviar la reserva (API, etc)
    setMensajeExito(`Reserva realizada para ${reserva.nombreCliente}. ¡Gracias!`);
    setReserva({
      nombreCliente: "",
      emailCliente: "",
      nivelClase: "",
      fechaClase: "",
      cantidadHoras: "",
    });
  };

  return (
    <div className="card p-4 shadow-sm">
      <h2 className="mb-3">Reserva tu clase de Ski</h2>

      {mensajeError && <div className="alert alert-danger">{mensajeError}</div>}
      {mensajeExito && <div className="alert alert-success">{mensajeExito}</div>}

      <form onSubmit={manejarEnvio}>
        <div className="mb-3">
          <label htmlFor="nombreCliente" className="form-label">Nombre completo</label>
          <input
            type="text"
            id="nombreCliente"
            name="nombreCliente"
            className="form-control"
            value={reserva.nombreCliente}
            onChange={manejarCambioInput}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="emailCliente" className="form-label">Email</label>
          <input
            type="email"
            id="emailCliente"
            name="emailCliente"
            className="form-control"
            value={reserva.emailCliente}
            onChange={manejarCambioInput}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="nivelClase" className="form-label">Nivel de la clase</label>
          <select
            id="nivelClase"
            name="nivelClase"
            className="form-select"
            value={reserva.nivelClase}
            onChange={manejarCambioInput}
            required
          >
            <option value="">-- Seleccione nivel --</option>
            <option value="Never Ever">Never Ever</option>
            <option value="Principiante">Principiante</option>
            <option value="Intermedio">Intermedio</option>
            <option value="Avanzado">Avanzado</option>
            <option value="Experto (fuera de pista, freestyle)">
              Experto (fuera de pista, freestyle)
            </option>
          </select>
          {reserva.nivelClase && (
            <small className="text-muted mt-1 d-block">
              {textosMotivacionales[reserva.nivelClase]}
            </small>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="fechaClase" className="form-label">Fecha de la clase</label>
          <input
            type="date"
            id="fechaClase"
            name="fechaClase"
            className="form-control"
            value={reserva.fechaClase}
            onChange={manejarCambioInput}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="cantidadHoras" className="form-label">Cantidad de horas</label>
          <input
            type="number"
            id="cantidadHoras"
            name="cantidadHoras"
            className="form-control"
            min="1"
            value={reserva.cantidadHoras}
            onChange={manejarCambioInput}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Reservar Clase
        </button>
      </form>
    </div>
  );
};

export default FormularioReservaSki;
