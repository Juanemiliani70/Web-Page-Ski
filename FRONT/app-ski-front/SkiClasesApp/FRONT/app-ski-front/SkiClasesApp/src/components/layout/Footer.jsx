import React from "react";

const Footer = () => {
  const hoy = new Date();
  return (
    <footer
      style={{
        backgroundColor: "#000", // fondo negro
        color: "#ccc",           // texto gris claro
        padding: "0.8rem 0",
        marginTop: "0",
        width: "100%",
        textAlign: "center",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        fontSize: "0.9rem",
        userSelect: "none",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <p style={{ margin: 0 }}>
          &copy; {hoy.getFullYear()} Todos los derechos reservados
        </p>
      </div>
    </footer>
  );
};

export default Footer;

