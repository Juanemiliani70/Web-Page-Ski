import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const NavBar = () => {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const location = useLocation();        // ✅ Para saber en qué ruta estás
  const navigate = useNavigate();        // ✅ Para volver atrás

  const mostrarBotonVolver = location.pathname === "/contacto";  // ✅ Mostrar solo en /contacto

  const linkColor = "#555";
  const linkHoverOpacity = 0.7;

  const baseLinkStyle = {
    color: linkColor,
    fontWeight: "600",
    cursor: "pointer",
    textDecoration: "none",
    transition: "opacity 0.3s ease",
  };

  const menuItems = [
    { href: "#sobre-nosotros", label: "Sobre Nosotros" },
    { href: "#centros-de-ski", label: "Centros de Ski" },
    
    { href: "#niveles", label: "Niveles" },
  ];

  const handleClickLink = () => setMenuAbierto(false);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: "#fff",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        zIndex: 9999,
        padding: "0.5rem 1rem",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "nowrap",
        }}
      >
        {/* Logo */}
        <a
          href="#inicio"
          style={{
            ...baseLinkStyle,
            fontSize: "1.5rem",
            marginLeft: "-10px",
          }}
          onClick={handleClickLink}
        >
          S.S
        </a>

        {/* Botones derecha */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            paddingRight: "10px",
          }}
        >
          <button
            onClick={() => setMenuAbierto(!menuAbierto)}
            style={{
              fontSize: "1rem",
              padding: "0.5rem 1rem",
              borderRadius: "6px",
              border: `1px solid ${linkColor}`,
              backgroundColor: "#fff",
              color: linkColor,
              cursor: "pointer",
              fontWeight: "600",
            }}
          >
            Menú
          </button>

          {/* Link Contacto */}
          <Link
            to="/contacto"
            style={{
              fontSize: "1rem",
              padding: "0.5rem 1rem",
              borderRadius: "6px",
              border: `1px solid ${linkColor}`,
              backgroundColor: "#fff",
              color: linkColor,
              cursor: "pointer",
              textDecoration: "none",
              fontWeight: "600",
            }}
            onClick={handleClickLink}
          >
            Contacto
          </Link>

          {/* ✅ Botón Volver SOLO en /contacto */}
          {mostrarBotonVolver && (
            <button
              onClick={() => navigate(-1)}
              style={{
                fontSize: "1rem",
                padding: "0.5rem 1rem",
                borderRadius: "6px",
                border: `1px solid ${linkColor}`,
                backgroundColor: "#fff",
                color: linkColor,
                cursor: "pointer",
                fontWeight: "600",
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
              aria-label="Volver a la página anterior"
            >
              ← Volver
            </button>
          )}
        </div>
      </div>

      {/* Línea separadora */}
      {menuAbierto && (
        <div
          style={{
            height: "1px",
            backgroundColor: "#ccc",
            width: "100vw",
            marginTop: "0.75rem",
            position: "relative",
            left: 0,
            right: 0,
            zIndex: 9998,
          }}
        />
      )}

      {/* Menú desplegable */}
      <div
        style={{
          display: menuAbierto ? "flex" : "none",
          flexDirection: "column",
          backgroundColor: "#f8f9fa",
          padding: "1rem",
          boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
          maxWidth: "1100px",
          margin: "0 auto",
          marginTop: "0.5rem",
          borderRadius: "8px",
          gap: "1rem",
          alignItems: "center",
        }}
        className="menu-desplegable"
      >
        {menuItems.map(({ href, label }) => (
          <a
            key={href}
            href={href}
            style={{
              ...baseLinkStyle,
              fontSize: "1.1rem",
              padding: "0.5rem 0",
              width: "100%",
              maxWidth: "250px",
              textAlign: "center",
              borderBottom: "none",
            }}
            onClick={handleClickLink}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = linkHoverOpacity)}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = 1)}
          >
            {label}
          </a>
        ))}
      </div>

      <style>
        {`
          @media(min-width: 768px) {
            .menu-desplegable {
              flex-direction: row !important;
              justify-content: center !important;
              gap: 2rem !important;
              border-bottom: none !important;
              background-color: transparent !important;
              box-shadow: none !important;
              margin-top: 0 !important;
              padding: 0 !important;
              max-width: none !important;
              margin-left: 3rem !important;
              align-items: center !important;
            }
            .menu-desplegable a {
              border-bottom: none !important;
              padding: 0 !important;
              width: auto !important;
              max-width: none !important;
              text-align: center !important;
            }
          }
        `}
      </style>
    </nav>
  );
};

export default NavBar;
