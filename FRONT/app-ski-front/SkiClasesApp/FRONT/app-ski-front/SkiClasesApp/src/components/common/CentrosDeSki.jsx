import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const centros = [
  {
    nombre: "Vail",
    mapa: "https://www.google.com/maps/place/Vail,+CO,+USA/",
  },
  {
    nombre: "Beaver Creek",
    mapa: "https://www.google.com/maps/place/Beaver+Creek,+CO,+USA/",
  },
  {
    nombre: "Breckenridge",
    mapa: "https://www.google.com/maps/place/Breckenridge,+CO,+USA/",
  },
  {
    nombre: "Keystone",
    mapa: "https://www.google.com/maps/place/Keystone,+CO,+USA/",
  },
  {
    nombre: "Winter Park",
    mapa: "https://www.google.com/maps/place/Winter+Park,+CO,+USA/",
  },
  {
    nombre: "Copper Mountain",
    mapa: "https://www.google.com/maps/place/Copper+Mountain,+CO,+USA/",
  },
  {
    nombre: "Aspen",
    mapa: "https://www.google.com/maps/place/Aspen,+CO,+USA/",
  },
  {
    nombre: "Snowmass",
    mapa: "https://www.google.com/maps/place/Snowmass,+CO,+USA/",
  },
  {
    nombre: "Buttermilk",
    mapa: "https://www.google.com/maps/place/Buttermilk+Ski+Area,+Aspen,+CO,+USA/",
  },
];

const CentrosDeSki = () => {
  return (
    <section
      id="centros-de-ski"
      style={{
        backgroundColor: "#000",
        padding: "100px 20px",
        color: "#fff",
        minHeight: "100vh",
      }}
    >
     <div id="centros" style={{ scrollMarginTop: "100px", maxWidth: "1100px", margin: "0 auto", textAlign: "center" }}>
  <h2 style={{ fontWeight: "bold", fontSize: "2.4rem", marginBottom: "3rem" }}>
    Centros de Ski
  </h2>
</div>

        
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "2rem",
            justifyItems: "center",
          }}
        >
          {centros.map(({ nombre, mapa }) => (
            <div
              key={nombre}
              style={{
                backgroundColor: "#111",
                padding: "1.5rem",
                borderRadius: "12px",
                boxShadow: "0 0 12px rgba(255, 255, 255, 0.05)",
                width: "100%",
                maxWidth: "280px",
                transition: "transform 0.3s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <p
                style={{
                  fontSize: "1.3rem",
                  fontWeight: "600",
                  marginBottom: "0.75rem",
                  color: "#fff",
                }}
              >
                {nombre}
              </p>
              <a
                href={mapa}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#fdd835",
                  fontSize: "1.8rem",
                }}
                title="Ver en Google Maps"
              >
                <FaMapMarkerAlt />
              </a>
            </div>
          ))}
        </div>
      
    </section>
  );
};

export default CentrosDeSki;
