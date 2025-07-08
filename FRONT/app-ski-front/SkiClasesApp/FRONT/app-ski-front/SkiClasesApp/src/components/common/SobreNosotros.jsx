import React from "react";
import { Container } from "react-bootstrap";
import imagenFondo from "../../img/Ski_2.jpeg"; // Ruta a tu imagen

const SobreNosotros = () => {
  return (
    <section
      id="sobre-nosotros"
      style={{
        position: "relative",
        height: "100vh",
        backgroundImage: `url(${imagenFondo})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "#eee", // texto claro y uniforme
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        scrollMarginTop: "56px",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
          width: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.6)", // overlay más oscuro
          zIndex: 1,
        }}
      />

      <Container
        className="text-center"
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "700px",
          fontSize: "1.1rem",
          lineHeight: "1.6",
          padding: "2rem",
          textShadow: "1px 1px 5px rgba(0,0,0,0.7)", // mejor contraste con fondo
        }}
      >
        <h2 className="mb-4" style={{ fontWeight: "bold", fontSize: "2rem" }}>
          Sobre Nosotros
        </h2>
        <p>
          Creemos que la pasión por la montaña se vive mejor cuando se comparte.
          Te acompañaremos en cada paso de tu aprendizaje, ya seas principiante o busques perfeccionar tu técnica.
          Nos dedicamos a brindar clases seguras, personalizadas y llenas de diversión para que puedas disfrutar de la nieve al máximo.
          Únete a nosotros y vive una experiencia única en la montaña.
        </p>
      </Container>
    </section>
  );
};

export default SobreNosotros;
