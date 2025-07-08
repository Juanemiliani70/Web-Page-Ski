import React from "react";
import {
  FaSkiing,
  FaChild,
  FaUserFriends,
  FaLaughBeam,
  FaSnowflake,
  FaFire,
} from "react-icons/fa";
import { GiIceSkate } from "react-icons/gi"; // ✅ Icono correcto

const servicios = [
  {
    icono: <FaSkiing size={40} />,
    titulo: "Clases para todas las edades",
    descripcion: "Clases de esquí y snowboard para niños, jóvenes y adultos.",
  },
  {
    icono: <FaChild size={40} />,
    titulo: "Guardería de nieve",
    descripcion: "Juegos y cuidado para los más peques mientras vos disfrutás.",
  },
  {
    icono: <FaUserFriends size={40} />,
    titulo: "Grupos reducidos",
    descripcion: "Profesores dedicados, atención personalizada y progreso real.",
  },
  {
    icono: <FaLaughBeam size={40} />,
    titulo: "Diversión garantizada",
    descripcion: "Ambiente familiar, seguro y lleno de alegría.",
  },
  {
    icono: <FaSkiing size={40} />,
    titulo: "Motos de nieve",
    descripcion: "¡Viví la aventura de recorrer paisajes nevados a toda velocidad!",
  },
  {
    icono: <FaSnowflake size={40} />,
    titulo: "Caminatas con raquetas",
    descripcion: "Senderismo único en la nieve con raquetas especiales.",
  },
  {
    icono: <GiIceSkate size={40} />, // 🧊 Ícono correcto para patinaje
    titulo: "Patinaje y tubing",
    descripcion: "Disfrutá del hielo y deslizate en pistas especialmente diseñadas.",
  },
  {
    icono: <FaFire size={40} />,
    titulo: "Fogatas bajo las estrellas",
    descripcion: "Chocolate caliente, buena compañía y el cielo estrellado.",
  },
];

const QueOfrecemos = () => {
  return (
    <section
      id="ofrecemos"
      style={{
        backgroundColor: "#000",
        color: "#fff",
        padding: "100px 20px",
        minHeight: "100vh",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto", textAlign: "center" }}>
        <h2 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1rem" }}>
          ¿Qué ofrecemos?
        </h2>
        <p style={{ fontSize: "1.1rem", marginBottom: "3rem", color: "#ccc" }}>
          Una experiencia completa en la nieve, para todas las edades y gustos.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "2rem",
          }}
        >
          {servicios.map((servicio, i) => (
            <div
              key={i}
              style={{
                backgroundColor: "#111",
                padding: "2rem",
                borderRadius: "12px",
                boxShadow: "0 0 12px rgba(255,255,255,0.05)",
                transition: "transform 0.3s ease",
                cursor: "default",
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.04)"}
              onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
            >
              <div style={{ color: "#fdd835", marginBottom: "1rem" }}>
                {servicio.icono}
              </div>
              <h4 style={{ marginBottom: "0.8rem", color: "#fff" }}>{servicio.titulo}</h4>
              <p style={{ color: "#ccc", fontSize: "0.95rem" }}>{servicio.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QueOfrecemos;
