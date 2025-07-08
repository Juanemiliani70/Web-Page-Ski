import React from "react";
import nivel1 from "../../imgAlumnos/nivel1.jpg";
import nivel2 from "../../imgAlumnos/nivel2.jpg";
import nivel3 from "../../imgAlumnos/nivel3.jpg";
import nivel4 from "../../imgAlumnos/nivel4.jpg";
import nivel5 from "../../imgAlumnos/nivel5.jpg";

const niveles = [
  {
    nombre: "Never Ever",
    texto: "Ideal para quienes quieren empezar desde cero, sin miedo ni prisas. Muy buena atención personalizada.",
    foto: nivel1,
  },
  {
    nombre: "Principiante",
    texto: "Clases perfectas para aprender las bases y ganar confianza en la nieve.",
    foto: nivel2,
  },
  {
    nombre: "Intermedio",
    texto: "Excelente nivel para mejorar técnica y disfrutar más de las pistas clásicas.",
    foto: nivel3,
  },
  {
    nombre: "Avanzado",
    texto: "Preparación para retos más complejos y terrenos difíciles, con un enfoque progresivo y desafiante.",
    foto: nivel4,
  },
  {
    nombre: "Experto (Fuera de pista, Freestyle)",
    texto: "Para quienes buscan adrenalina y técnicas especializadas en freestyle y fuera de pista.",
    foto: nivel5,
  },
];

const NivelesAlumnos = () => {
  return (
    <section
      id="niveles"
      style={{ 
        padding: "4rem 2rem 0.5rem 2rem", 
        backgroundColor: "#000",
      }}
    >
      <div style={{ marginTop: "50px" }}>
        <h2
          style={{
            textAlign: "center",
            color: "#fff", // Título blanco
            fontWeight: "bold",
            marginBottom: "2rem",
          }}
        >
          Todos los niveles
        </h2>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "2rem",
          flexWrap: "wrap",
        }}
      >
        {niveles.map(({ nombre, texto, foto }, i) => (
          <div
            key={i}
            style={{
              backgroundColor: "#222",
              padding: "1.5rem",
              borderRadius: "12px",
              width: "300px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.6)",
              textAlign: "center",
              transition: "transform 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.03)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <img
              src={foto}
              alt={`Nivel ${nombre}`}
              style={{
                width: "120px",
                height: "120px",
                borderRadius: "70%",
                objectFit: "cover",
                marginBottom: "1rem",
                border: "3px solid #fff", // borde blanco
              }}
            />
            <p style={{ fontStyle: "italic", fontSize: "0.95rem", color: "#fff" }}>
              "{texto}"
            </p>
            <strong style={{ display: "block", marginTop: "0.8rem", color: "#fff" }}>
              {nombre}
            </strong>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NivelesAlumnos;
