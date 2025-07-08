import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "../../NavBar.css";

const NavBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [menuAbierto, setMenuAbierto] = useState(false);

  const esContacto = location.pathname === "/contacto";

  const volver = () => navigate("/");

  const handleScrollToInicio = () => {
    if (location.pathname !== "/") {
      navigate("/", { replace: false });
      setTimeout(() => {
        const elem = document.getElementById("inicio");
        if (elem) elem.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const elem = document.getElementById("inicio");
      if (elem) elem.scrollIntoView({ behavior: "smooth" });
    }
    setMenuAbierto(false);
  };

  return (
    <>
      <nav
        style={{
          backgroundColor: "#fff",
          color: "#000",
          padding: "0.8rem 1.2rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "56px",
          zIndex: 9999,
        }}
      >
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            handleScrollToInicio();
          }}
          style={{
            margin: 0,
            fontWeight: "bold",
            color: "#000",
            textDecoration: "none",
            cursor: "pointer",
            fontSize: "1.5rem",
          }}
        >

          

          S.S

        </a>

        {!esContacto && (
          <>
            {/* Botones sólo desktop */}
            <div className="botones-desktop" style={estiloBotonesDesktop}>
              <button
                onClick={() => setMenuAbierto(!menuAbierto)}
                style={estiloBoton}
              >
                Menú
              </button>
              <Link to="/contacto" style={estiloBoton}>
                Contacto
              </Link>
            </div>

            {/* Hamburguesa sólo mobile */}
            <div
              className="hamburguesa"
              onClick={() => setMenuAbierto(!menuAbierto)}
              style={estiloHamburguesa}
            >
              {menuAbierto ? <FaTimes size={24} /> : <FaBars size={24} />}
            </div>
          </>
        )}

        {esContacto && (
          <button onClick={volver} style={estiloBoton}>
            Volver
          </button>
        )}
      </nav>

      {/* Menú expandido */}
      {!esContacto && menuAbierto && (
        <div className="menu-expandido" style={estiloMenuExpandido}>
          <div
            style={{
              width: "100%",
              height: "1px",
              backgroundColor: "#ccc",
              marginBottom: "0.6rem",
            }}
          />
          <a href="#sobre-nosotros" style={estiloLinkMenu}>
            Sobre nosotros
          </a>
          <a href="#centros-de-ski" style={estiloLinkMenu}>
            Centros de ski
          </a>
          <a href="#que-ofrecemos" style={estiloLinkMenu}>
            ¿Qué ofrecemos?
          </a>
          <a href="#precios" style={estiloLinkMenu}>
            Precios y horarios
          </a>
          <a href="#niveles" style={estiloLinkMenu}>
            Niveles
          </a>

          {/* Contacto sólo en mobile */}
          <Link to="/contacto" className="link-mobile-contacto" style={estiloLinkMenu}>
            Contacto
          </Link>
        </div>
      )}
    </>
  );
};

const estiloBoton = {
  color: "#000",
  background: "none",
  border: "none",
  padding: "0.5rem 1rem",
  fontSize: "1rem",
  textDecoration: "none",
  cursor: "pointer",
};

const estiloBotonesDesktop = {
  display: "flex",
  gap: "1rem",
  marginLeft: "auto",
};

const estiloHamburguesa = {
  display: "none", // mostrar sólo con CSS en mobile
  cursor: "pointer",
  marginLeft: "auto",
};

const estiloMenuExpandido = {
  position: "fixed",
  top: "56px",
  left: 0,
  right: 0,
  backgroundColor: "#fff",
  padding: "0.5rem 1.2rem",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "3rem",
  zIndex: 9998,
};

const estiloLinkMenu = {
  color: "#000",
  textDecoration: "none",
  fontSize: "1.1rem",
};

export default NavBar;
