import React, { useRef } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const Contacto = () => {
  const form = useRef();

  const enviarEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8mpmccs",
        "template_hsuwcs6",  // ← Aquí va tu Template ID real
        form.current,
        "9VHDCkX0e3iwNer7O"  // ← Tu Public Key
      )
      .then(
        () => { 
          alert("¡Mensaje enviado con éxito!");
          form.current.reset();
        },
        (error) => {
          alert("Hubo un error al enviar el mensaje.");
          console.error(error);
        }
      );
  };

  return (
    <section
      id="contacto"
      style={{
        padding: "4rem 2rem",
        backgroundColor: "#000",
        color: "#ddd",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
    
      <Container style={{ maxWidth: "700px" }}>
        <h2 style={{ marginBottom: "2rem", fontWeight: "bold", color: "#fff" }}>
          Contacto
        </h2>

        <p style={{ marginBottom: "2rem", color: "#ccc", fontSize: "1.1rem" }}>
          Consultas por precios, horarios y reservas.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "2rem",
            marginBottom: "2rem",
          }}
        >
          <a
            href="https://wa.me/5491198765432"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#25D366", textDecoration: "none" }}
          >
            <FaWhatsapp size={32} />
          </a>
          <a
            href="https://www.instagram.com/santischenone/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#E1306C", textDecoration: "none" }}
          >
            <FaInstagram size={32} />
          </a>
        </div>

        <Form ref={form} onSubmit={enviarEmail} className="mt-4 text-start">
          <Form.Group controlId="formNombre" className="mb-3">
            <Form.Label style={{ color: "#ccc" }}>Nombre</Form.Label>
            <Form.Control
              type="text"
              name="name"
              required
              placeholder="Tu nombre"
            />
          </Form.Group>

          <Form.Group controlId="formEmail" className="mb-3">
            <Form.Label style={{ color: "#ccc" }}>Email</Form.Label>
            <Form.Control
              type="email"
              name="user_email"
              required
              placeholder="nombre@ejemplo.com"
            />
          </Form.Group>

          <Form.Group controlId="formMensaje" className="mb-3">
            <Form.Label style={{ color: "#ccc" }}>Mensaje</Form.Label>
            <Form.Control
              as="textarea"
              name="message"
              rows={4}
              required
              placeholder="Contame en qué puedo ayudarte..."
            />
          </Form.Group>

          <input
            type="hidden"
            name="time"
            value={new Date().toLocaleString()}
          />

          <div className="text-center">
            <Button type="submit" variant="secondary">
              Enviar mensaje
            </Button>
          </div>
        </Form>
      </Container>
    </section>
  );
};

export default Contacto;
