import React from "react";
import { Container } from "react-bootstrap";

const PreciosHorarios = () => {
  return (
    <section
      id="precios"
      style={{
        padding: "80px 20px 40px", // Reducido para subir el contenido
        backgroundColor: "#000",
        color: "#000",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "start", // Alineado arriba en lugar de center
      }}
    >
      <Container style={{ maxWidth: "900px" }}>
        <h2
          className="text-center"
          style={{
            fontWeight: "bold",
            color: "#fff",
            marginBottom: "2rem",
          }}
        >
          Precios
        </h2>

        <h4
          className="text-center mb-4"
          style={{ fontWeight: "bold", color: "#fff" }}
        >
          Horarios
        </h4>

        <p
          className="text-center mb-5"
          style={{ fontSize: "1.1rem", color: "#fff" }}
        >
          Horario flexible de 10 a 15:30 hs
        </p>

        <div className="table-responsive">
          <table
            className="table table-bordered text-center shadow rounded"
            style={{ backgroundColor: "#fff", color: "#000" }}
          >
            <thead className="table-dark" style={{ backgroundColor: "#ddd", color: "#000" }}>
              <tr>
                <th>Modalidad</th>
                <th>1 a 3 días</th>
                <th>3 a 5 días</th>
                <th>5 o más días</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Half Day</th>
                <td>$500 USD</td>
                <td>$450 USD</td>
                <td>$400 USD</td>
              </tr>
              <tr>
                <th>Full Day</th>
                <td>$750 USD</td>
                <td>$700 USD</td>
                <td>$650 USD</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Container>
    </section>
  );
};

export default PreciosHorarios;
