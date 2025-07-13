import React, { useState, useEffect } from "react";

const mensajes = [
  "¡50% OFF en todas las clases de ski!",
  "¡20% a 50% OFF en equipos y lift tickets!",
  "¡Escribinos para reservar tu clase!",
];

const whatsappLink =
  "https://wa.me/5491167244753?text=Hola%20quiero%20reservar%20una%20clase%20de%20ski";

const Banner50Off = () => {
  const [mensajeIndex, setMensajeIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setMensajeIndex((prevIndex) => (prevIndex + 1) % mensajes.length);
        setVisible(true);
      }, 500);
    }, 5000);

    return () => clearInterval(intervalo);
  }, []);

  const handleClick = () => {
    window.open(whatsappLink, "_blank");
  };

  return (
    <div
      onClick={handleClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "30px",
        backgroundColor: "#d32f2f",
        color: hover ? "#f44336" : "#fff",
        textDecoration: hover ? "underline" : "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: "bold",
        fontSize: "1rem",
        zIndex: 10000,
        letterSpacing: "1.5px",
        userSelect: "none",
        boxShadow: "0 2px 5px rgba(0,0,0,0.3)",
        transition: "color 0.3s ease",
        cursor: "pointer",
      }}
    >
      <span
        style={{
          opacity: visible ? 1 : 0,
          transition: "opacity 0.5s ease-in-out",
        }}
      >
        {mensajes[mensajeIndex]}
      </span>
    </div>
  );
};

export default Banner50Off;
