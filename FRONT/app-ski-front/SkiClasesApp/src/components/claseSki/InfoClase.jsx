import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const InfoClase = ({ clase }) => {
  return (
    <Col xs={12} md={6} lg={4} className="mb-4">
      <Card className="shadow-sm h-100">
        <Card.Body className="d-flex flex-column">
          {/* Título con nivel */}
          <Card.Title className="mb-2" style={{ color: "#007bff", fontWeight: "bold" }}>
            Nivel: {clase.nivelClase}
          </Card.Title>

          {/* Detalles */}
          <Card.Text>
            <strong>Días:</strong> {clase.dias.join(", ")} <br />
            <strong>Horario:</strong> {clase.horario} <br />
            <strong>Precio:</strong> ${clase.precio}
          </Card.Text>

          {/* Botón reservar */}
          <div className="mt-auto">
            <Link
              to={`/reservar-clase/${clase.id}`}
              className="btn btn-primary w-100"
            >
              Reservar Clase
            </Link>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default InfoClase;
