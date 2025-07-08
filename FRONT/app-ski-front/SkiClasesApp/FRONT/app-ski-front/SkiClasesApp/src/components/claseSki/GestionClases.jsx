import React, { useState, useEffect } from "react";
import AgregarClase from "./AgregarClase";
import ClasesExistentes from "./ClasesExistentes";
import { getAllClases } from '../utils/FuncionesApi';

const GestionClases = () => {
  const [clases, setClases] = useState([]);
  const [cargando, setCargando] = useState(false);
  const [mensajeError, setMensajeError] = useState("");

  const cargarClases = async () => {
    setCargando(true);
    setMensajeError("");
    try {
      const data = await getAllClases();
      setClases(data);
    } catch (error) {
      setMensajeError("Error al cargar clases: " + error.message);
    } finally {
      setCargando(false);
    }
  };

  useEffect(() => {
    cargarClases();
  }, []);

  return (
    <section className="container mt-5 mb-5">
      <h1 className="mb-4 text-primary">Gestión de Clases de Ski</h1>

      <AgregarClase onAgregarExitosa={cargarClases} />

      {mensajeError && (
        <div className="alert alert-danger mt-3">{mensajeError}</div>
      )}

      <ClasesExistentes clases={clases} cargando={cargando} />
    </section>
  );
};

export default GestionClases;