import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { actualizarClase, getClaseById } from "../utils/FuncionesApi";

const EditarClase = () => {
  const { claseId } = useParams();
  const navigate = useNavigate();

  const [clase, setClase] = useState({
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

  const cambiarImagen = (e) => {
    const imagenSeleccionada = e.target.files[0];
    setClase({ ...clase, imagen: imagenSeleccionada });
    setVistaImagenPrevia(URL.createObjectURL(imagenSeleccionada));
  };

  const manejarCambioCampoClase = (event) => {
    const { name, value } = event.target;
    setClase({ ...clase, [name]: value });
  };

  useEffect(() => {
    const obtenerClase = async () => {
      try {
        const claseData = await getClaseById(claseId);
        setClase(claseData);
        setVistaImagenPrevia(claseData.imagen);
      } catch (error) {
        console.error(error);
      }
    };
    obtenerClase();
  }, [claseId]);

  const manejarEnvio = async (event) => {
    event.preventDefault();
    try {
      const response = await actualizarClase(claseId, clase);
      if (response.status === 200) {
        setMensajeExito("Clase actualizada con éxito!");
        const claseActualizadaData = await getClaseById(claseId);
        setClase(claseActualizadaData);
        setVistaImagenPrevia(claseActualizadaData.imagen);
        setMensajeError("");
      } else {
        setMensajeError("Error al actualizar la clase");
      }
    } catch (error) {
      console.error(error);
      setMensajeError(error.message);
    }
  };

  return (
    <div className="container mt-3 mb-5">
      <h2 className="text-center mb-3 mt-3">Editar Clase</h2>
      <div className="row justify-content-center">
        <div className="col-md-16 col-lg-12">
          {mensajeExito && (
            <div className="alert alert-success" role="alert">
              {mensajeExito}
            </div>
          )}
          {mensajeError && (
            <div className="alert alert-danger" role="alert">
              {mensajeError}
            </div>
          )}
          <form onSubmit={manejarEnvio}>
            <div className="mb-3">
              <label className="form-label">Nivel de Clase</label>
              <input
                type="text"
                className="form-control"
                name="nivelClase"
                value={clase.nivelClase}
                onChange={manejarCambioCampoClase}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Tipo de Clase</label>
              <input
                type="text"
                className="form-control"
                name="tipoClase"
                value={clase.tipoClase}
                onChange={manejarCambioCampoClase}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Rango de Días</label>
              <input
                type="text"
                className="form-control"
                name="rangoDias"
                value={clase.rangoDias}
                onChange={manejarCambioCampoClase}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Lugar</label>
              <input
                type="text"
                className="form-control"
                name="lugar"
                value={clase.lugar}
                onChange={manejarCambioCampoClase}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Precio de la Clase</label>
              <input
                type="number"
                className="form-control"
                name="precioClase"
                value={clase.precioClase}
                onChange={manejarCambioCampoClase}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Imagen</label>
              <input
                type="file"
                className="form-control"
                onChange={cambiarImagen}
              />
              {vistaImagenPrevia && (
                <div className="text-center mt-3">
                  <img
                    src={`data:image/jpeg;base64, ${vistaImagenPrevia}`}
                    alt="Vista previa"
                    style={{ maxHeight: "300px" }}
                    className="img-fluid rounded shadow-sm"
                  />
                </div>
              )}
            </div>
            <div className="d-flex justify-content-between mt-4">
              <Link to="/clases" className="btn btn-info w-50 me-2">
                Volver
              </Link>
              <button className="btn btn-warning w-50 ms-2" type="submit">
                Editar Clase
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditarClase;
