import React, { useEffect, useState } from "react";
import { agregarClase } from "../utils/FuncionesApi.jsx";
import { useNavigate, Link } from "react-router-dom";

const AgregarClase = ({ onAgregarExitosa }) => {
  const navigate = useNavigate();

  const [nuevaClase, setNuevaClase] = useState({
    imagen: null,
    nivelClase: "",
    tipoClase: "",
    rangoDias: "",
    lugar: "",
    precioClase: ""
  });

  const [vistaImagenPrevia, setVistaImagenPrevia] = useState("");
  const [mensajeExito, setMensajeExito] = useState("");
  const [mensajeError, setMensajeError] = useState("");

  const cambiarInputClase = (e) => {
    const { name, value } = e.target;
    setNuevaClase({ ...nuevaClase, [name]: value });
  };

  const cambiarImagen = (e) => {
    const imagenSeleccionada = e.target.files[0];
    setNuevaClase({ ...nuevaClase, imagen: imagenSeleccionada });
    setVistaImagenPrevia(URL.createObjectURL(imagenSeleccionada));
  };

  const manejarEnvio = async (e) => {
    e.preventDefault();
    setMensajeExito("");
    setMensajeError("");

    const { imagen, nivelClase, tipoClase, rangoDias, lugar, precioClase } = nuevaClase;

    if (!nivelClase || !tipoClase || !rangoDias || !lugar || !precioClase) {
      setMensajeError("Todos los campos son obligatorios");
      return;
    }

    if (!imagen) {
      setMensajeError("Debe seleccionar una imagen");
      return;
    }

    try {
      const exito = await agregarClase(imagen, nivelClase, tipoClase, rangoDias, lugar, precioClase);
      if (exito) {
        setMensajeExito("Clase agregada con éxito");
        setNuevaClase({ imagen: null, nivelClase: "", tipoClase: "", rangoDias: "", lugar: "", precioClase: "" });
        setVistaImagenPrevia("");
        if (onAgregarExitosa) onAgregarExitosa();
        navigate("/clases");
      } else {
        setMensajeError("Error al agregar la clase");
      }
    } catch (error) {
      setMensajeError(error.message);
    }
  };

  return (
    <div className="card shadow p-4 mb-5 bg-white rounded">
      <h2 className="mb-4 text-dark">Agregar Nueva Clase de Ski</h2>

      {mensajeExito && <div className="alert alert-success">{mensajeExito}</div>}
      {mensajeError && <div className="alert alert-danger">{mensajeError}</div>}

      <form onSubmit={manejarEnvio}>
        <div className="mb-3">
          <label className="form-label">Nivel de Clase</label>
          <input
            type="text"
            name="nivelClase"
            value={nuevaClase.nivelClase}
            onChange={cambiarInputClase}
            className="form-control"
            placeholder="Ej: Principiante"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Tipo de Clase</label>
          <input
            type="text"
            name="tipoClase"
            value={nuevaClase.tipoClase}
            onChange={cambiarInputClase}
            className="form-control"
            placeholder="Ej: Particular"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Rango de Días</label>
          <input
            type="text"
            name="rangoDias"
            value={nuevaClase.rangoDias}
            onChange={cambiarInputClase}
            className="form-control"
            placeholder="Ej: 3-5 días"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Lugar</label>
          <input
            type="text"
            name="lugar"
            value={nuevaClase.lugar}
            onChange={cambiarInputClase}
            className="form-control"
            placeholder="Ej: Cerro Catedral"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Precio de la Clase</label>
          <input
            type="number"
            name="precioClase"
            value={nuevaClase.precioClase}
            onChange={cambiarInputClase}
            className="form-control"
            placeholder="Ej: 15000"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Imagen</label>
          <input
            type="file"
            name="imagen"
            className="form-control"
            onChange={cambiarImagen}
          />
          {vistaImagenPrevia && (
            <div className="text-center mt-3">
              <img src={vistaImagenPrevia} alt="Vista previa" className="img-fluid rounded shadow-sm" style={{ maxHeight: "300px" }} />
            </div>
          )}
        </div>

        <div className="d-flex justify-content-between mt-4">
          <Link to="/clases" className="btn btn-info w-50 me-2">Volver</Link>
          <button className="btn btn-success w-50 ms-2" type="submit">Guardar Clase</button>
        </div>
      </form>
    </div>
  );
};

export default AgregarClase;
