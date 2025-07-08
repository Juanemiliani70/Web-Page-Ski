import React, { useState, useEffect } from "react";
import FiltrarClases from "../common/FiltrarClases"; // Componente para filtrar por nivel
import { borrarClase } from "../utils/FuncionesApi"; // Función API para borrar clase
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEdit, FaTrashAlt } from "react-icons/fa";

const ClasesExistentes = ({ clases, cargando }) => {
  const [clasesFiltradas, setClasesFiltradas] = useState(clases);
  const [mensajeExito, setMensajeExito] = useState("");
  const [mensajeError, setMensajeError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setClasesFiltradas(clases);
  }, [clases]);

  const manejarBorrarClase = async (claseId) => {
    try {
      const result = await borrarClase(claseId);
      if (result === "") {
        setMensajeExito(`La clase con ID ${claseId} fue eliminada con éxito`);
      } else {
        setMensajeError(result.message);
      }
    } catch (error) {
      setMensajeError(error.message);
    }
    setTimeout(() => {
      setMensajeExito("");
      setMensajeError("");
    }, 3000);
  };

  return (
    <div className="mt-0">
      <h2 className="text-dark mb-3">Clases de Ski</h2>
      <div className="mb-3">
        <button
          className="btn btn-success"
          onClick={() => navigate("/clases/agregar")}
        >
          Agregar Nueva Clase
        </button>
      </div>

      {mensajeExito && <div className="alert alert-success">{mensajeExito}</div>}
      {mensajeError && <div className="alert alert-danger">{mensajeError}</div>}

      <FiltrarClases
        data={clases}
        onFiltrar={(nivel) => {
          if (!nivel) {
            setClasesFiltradas(clases);
          } else {
            setClasesFiltradas(clases.filter((c) => c.nivelClase === nivel));
          }
        }}
      />

      {cargando ? (
        <p>Cargando clases...</p>
      ) : clasesFiltradas.length === 0 ? (
        <p>No se encontraron clases.</p>
      ) : (
        <table className="table table-striped table-bordered">
          <thead className="table-primary">
            <tr>
              <th>ID</th>
              <th>Nivel</th>
              <th>Días</th>
              <th>Horario</th>
              <th>Precio</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {clasesFiltradas.map((clase) => (
              <tr key={clase.id}>
                <td>{clase.id}</td>
                <td>{clase.nivelClase}</td>
                <td>{clase.dias}</td>
                <td>{clase.horario}</td>
                <td>${clase.precio}</td>
                <td className="d-flex gap-2">
                  <Link to={`/clases/ver/${clase.id}`} className="btn btn-info btn-sm me-2">
                    <FaEye />
                  </Link>
                  <Link to={`/clases/editar/${clase.id}`} className="btn btn-warning btn-sm me-2">
                    <FaEdit />
                  </Link>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => manejarBorrarClase(clase.id)}
                  >
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ClasesExistentes;
