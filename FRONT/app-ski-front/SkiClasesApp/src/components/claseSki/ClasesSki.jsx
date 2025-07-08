import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { getAllClases } from "../utils/FuncionesApi";
import InfoClase from "./InfoClase";
import FiltrarClases from "../common/FiltrarClases";

const ClasesSki = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [cargando, setCargando] = useState(false);
  const [filtroData, setFiltroData] = useState([]);

  useEffect(() => {
    setCargando(true);
    getAllClases()
      .then((data) => {
        setData(data);
        setFiltroData(data);
        setCargando(false);
      })
      .catch((error) => {
        setError(error.message);
        setCargando(false);
      });
  }, []);

  if (cargando) return <div>Cargando clases...</div>;
  if (error) return <div className="text-danger">Error: {error}</div>;

  const manejarFiltro = (nivelSeleccionado) => {
    if (!nivelSeleccionado) {
      setFiltroData(data);
    } else {
      const filtrado = data.filter(
        (clase) => clase.nivelClase === nivelSeleccionado
      );
      setFiltroData(filtrado);
    }
  };

  return (
    <Container>
      <Row className="mb-4">
        <Col md={12}>
          <FiltrarClases data={data} onFiltrar={manejarFiltro} />
        </Col>
      </Row>

      <Row>
        {filtroData.map((clase) => (
          <InfoClase key={clase.id} clase={clase} />
        ))}
      </Row>
    </Container>
  );
};

export default ClasesSki;
