import React from "react";
import fotoPrincipal from "../../img/Ski_1.jpeg"

const HeaderPrincipal = () => {
  return (
    <header
      className="header-banner"
      style={{
        position: "relative",
        height: "60vh",
        background: "url('/Ski_1.jpeg') center/cover no-repeat",
      }}
    >
      <div
        className="overlay"
        style={{
          position: "absolute",
          top: "10%",  // Moverlo más arriba (antes 0)
          left: "50%",
          transform: "translateX(-50%)", // centrar horizontalmente
          maxWidth: "600px", // ancho máximo para que no ocupe todo
          width: "90%", // responsive
          backgroundColor: "rgba(0, 0, 50, 0.5)", // un poco más transparente para que se vea más la foto
          padding: "2rem 1.5rem",
          borderRadius: "12px",
          boxShadow: "0 0 15px rgba(0, 0, 0, 0.5)",
          color: "white",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "0.8rem",
        }}
      >
        <h1
          style={{
            fontSize: "3rem",
            fontWeight: "bold",
            marginBottom: "0.3rem",
          }}
        >
          Clases de Ski
        </h1>
        <p
          style={{
            fontSize: "1.2rem",
            fontStyle: "italic",
            marginBottom: "1rem",
          }}
        >
          ¡Aprende a esquiar y disfruta de la nieve de Colorado!
        </p>
        <div
          style={{
            fontSize: "3.5rem",
            fontWeight: "900",
            backgroundColor: "#e63946",
            padding: "0.3rem 1.5rem",
            borderRadius: "8px",
            boxShadow: "0 0 10px rgba(230, 57, 70, 0.7)",
            lineHeight: "1.1",
          }}
        >
          50% OFF
          <br />
          en todos los precios oficiales
        </div>
      </div>
    </header>
  );
};

export default HeaderPrincipal;
