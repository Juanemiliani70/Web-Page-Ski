import React, { useState, useEffect } from "react";
import { getAllClases } from "../utils/FuncionesApi";
import ClasesExistentes from "./ClasesExistentes"; 

const ClasesContainer = () => {
  const [clases, setClases] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    async function fetchClases() {
      try {
        const data = await getAllClases();
        setClases(data);
      } catch (error) {
        console.error(error);
      } finally {
        setCargando(false);
      }
    }
    fetchClases();
  }, []);

  return <ClasesExistentes clases={clases} cargando={cargando} />;
};

export default ClasesContainer;
