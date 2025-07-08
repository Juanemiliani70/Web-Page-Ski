import React from "react";
import { FaInstagram, FaLinkedin, FaWhatsapp, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#000",
        color: "#fff",
        padding: "0.8rem 0",
        marginTop: "0",
        width: "100%",
        textAlign: "center",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        fontSize: "0.9rem",
        userSelect: "none",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "0.8rem",
          flexWrap: "wrap",
        }}
      >
        <p style={{ margin: 0 }}>Desarrollado por Juan Emiliani</p>
        <a
          href="https://juanemiliani.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#ccc", textDecoration: "none" }}
        >
          | Portfolio
        </a>
        <a
          href="https://www.instagram.com/juanmaemiliani_?igsh=MW01czAxbTM1NDU="
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#ccc" }}
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/juan-manuel-emiliani-7a1212322/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#ccc" }}
        >
          <FaLinkedin />
        </a>
        <a
          href="https://wa.me/541136842559"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#ccc" }}
        >
          <FaWhatsapp />
        </a>
        <a
          href="https://github.com/Juanemiliani70"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#ccc" }}
        >
          <FaGithub />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
