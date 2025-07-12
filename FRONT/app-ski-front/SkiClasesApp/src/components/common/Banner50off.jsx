import React from "react";

const Banner50Off = () => (
  <div
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "30px",
      backgroundColor: "#d32f2f",
      color: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: "bold",
      fontSize: "1rem",
      zIndex: 10000,
      letterSpacing: "1.5px",
      userSelect: "none",
      boxShadow: "0 2px 5px rgba(0,0,0,0.3)",
    }}
  >
    ¡50% OFF en todas las clases de ski!
  </div>
);

export default Banner50Off;
