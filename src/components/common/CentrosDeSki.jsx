import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

import vail from "../../img_centros/vail.jpg";
import beaver from "../../img_centros/beaver.jpg";
import breckenridge from "../../img_centros/breckenridge.jpg";
import keystone from "../../img_centros/keystone.jpg";
import winterpark from "../../img_centros/winterpark.jpg";
import copper from "../../img_centros/copper.jpg";
import aspen from "../../img_centros/aspen.jpg";
import snowmass from "../../img_centros/snowmass.jpg";
import buttermilk from "../../img_centros/buttermilk.jpg";

const centros = [
  { nombre: "Vail", mapa: "https://www.google.com/maps/place/Vail,+CO,+USA/", imagen: vail },
  { nombre: "Beaver Creek", mapa: "https://www.google.com/maps/place/Beaver+Creek,+CO,+USA/", imagen: beaver },
  { nombre: "Breckenridge", mapa: "https://www.google.com/maps/place/Breckenridge,+CO,+USA/", imagen: breckenridge },
  { nombre: "Keystone", mapa: "https://www.google.com/maps/place/Keystone,+CO,+USA/", imagen: keystone },
  { nombre: "Winter Park", mapa: "https://www.google.com/maps/place/Winter+Park,+CO,+USA/", imagen: winterpark },
  { nombre: "Copper Mountain", mapa: "https://www.google.com/maps/place/Copper+Mountain,+CO,+USA/", imagen: copper },
  { nombre: "Aspen", mapa: "https://www.google.com/maps/place/Aspen,+CO,+USA/", imagen: aspen },
  { nombre: "Snowmass", mapa: "https://www.google.com/maps/place/Snowmass,+CO,+USA/", imagen: snowmass },
  { nombre: "Buttermilk", mapa: "https://www.google.com/maps/place/Buttermilk+Ski+Area,+Aspen,+CO,+USA/", imagen: buttermilk },
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
      <div
        id="centros"
        style={{
          scrollMarginTop: "100px",
          maxWidth: "1100px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontWeight: "bold",
            fontSize: "2rem",
            marginBottom: "3rem",
          }}
        >
          Centros de Ski
        </h2>
      </div>

      <div style={estilosGrid}>
        {centros.map(({ nombre, mapa, imagen }) => (
          <div
            key={nombre}
            style={estiloTarjeta}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.03)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "scale(1)")
            }
          >
            <div style={{ position: "relative" }}>
              <img
                src={imagen}
                alt={`Imagen de ${nombre}`}
                style={{
                  width: "100%",
                  height: "160px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />

              {/* Contenedor del nombre + ícono */}
              <div style={{
                position: "absolute",
                top: "10px",
                left: "50%",
                transform: "translateX(-50%)",
                textAlign: "center",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                padding: "0.3rem 1rem",
                borderRadius: "8px",
              }}>
                <div style={{
                  color: "#fff",
                  fontWeight: "bold",
                  fontSize: "1rem",
                  marginBottom: "0.2rem",
                }}>
                  {nombre}
                </div>

                <a
                  href={mapa}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Ver en Google Maps"
                  style={{
                    color: "#fdd835",
                    fontSize: "1.4rem",
                    display: "inline-block",
                  }}
                >
                  <FaMapMarkerAlt />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// Estilos
const estilosGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "2rem",
  justifyItems: "center",
  maxWidth: "1100px",
  margin: "0 auto",
};

const estiloTarjeta = {
  backgroundColor: "#111",
  padding: "1rem",
  borderRadius: "12px",
  boxShadow: "0 0 12px rgba(255, 255, 255, 0.05)",
  width: "100%",
  maxWidth: "280px",
  transition: "transform 0.3s ease",
};

export default CentrosDeSki;
