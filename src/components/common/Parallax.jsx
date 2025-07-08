import React from "react";
import videoFondo from "../../videos/video_sche.mp4"; // Asegurate que la ruta es correcta

const Parallax = () => {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "105vh",
        overflow: "hidden",
        zIndex: 0,
      }}
    >
      {/* VIDEO DE FONDO */}
      <video
        src={videoFondo}
        autoPlay
        loop
        muted
        playsInline
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center 50%",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 0,
        }}
      />

      {/* TEXTO SUPERPUESTO */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 2,
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          padding: "2rem 3rem",
          borderRadius: "12px",
          color: "white",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "3rem", fontWeight: "bold", marginBottom: "1rem" }}>
          50% OFF
        </h1>
        <p style={{ fontSize: "1.3rem", fontStyle: "italic", margin: 0 }}>
          Disfrutá de la nieve de Colorado con nuestras clases
        </p>
      </div>
    </div>
  );
};

export default Parallax;
