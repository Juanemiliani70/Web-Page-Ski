import React from "react";
import { Container } from "react-bootstrap";

const PreciosHorarios = () => {
  return (
   
    <section
      id="precios-horarios"
      style={{
        padding: "120px 20px 60px",
        backgroundColor: "#000", 
        color: "#ddd", // texto gris claro
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container style={{ maxWidth: "900px" }}>
        <h2 className="text-center mb-5" style={{ fontWeight: "bold", color: "#ddd" }}>
          Precios & Horarios
        </h2>

        <div className="table-responsive">
          <table
            className="table table-bordered text-center shadow rounded"
            style={{ backgroundColor: "#1e1e1e", color: "#ddd" }}
          >
            <thead className="table-dark" style={{ backgroundColor: "#333" }}>
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

        <div style={{ marginTop: "40px" }}>
          <h4 className="mb-3" style={{ fontWeight: "bold", color: "#ddd" }}>
            Horarios
          </h4>
          <ul
            style={{
              listStyle: "none",
              paddingLeft: 0,
              fontSize: "1.1rem",
              lineHeight: "2rem",
              color: "#ccc",
            }}
          >
            <li>
              🕙 <strong>Horario flexible:</strong> entre las 10:00 y 15:30 hs
            </li>
            <li>
              ⏱️ <strong>Half Day:</strong> 3 horas de clase
            </li>
            <li>
              ⏱️ <strong>Full Day:</strong> 6 horas de clase
            </li>
          </ul>
        </div>
      </Container>
    </section>
    
  );
};

export default PreciosHorarios;
