import React, { useEffect, useState, useMemo } from "react";

const SelectorNivelClase = ({ setNivelClase }) => {
  const [nivelesClase, setNivelesClase] = useState([]);
  const [nuevoNivel, setNuevoNivel] = useState("");
  const [nivelSeleccionado, setNivelSeleccionado] = useState("");

  useEffect(() => {
    const fetchNivelesClase = async () => {
      try {
        const response = await fetch("http://localhost:5173/clases/niveles");
        if (!response.ok) throw new Error("Error al obtener niveles");
        const data = await response.json();
        setNivelesClase(data);
      } catch (error) {
        console.error("Error fetching niveles:", error);
      }
    };
    fetchNivelesClase();
  }, []);

  // Obtener niveles únicos capitalizados
  const nivelesUnicos = useMemo(() => {
    if (!nivelesClase) return [];
    const nombres = nivelesClase.map(n => n.nombre.toLowerCase());
    return [...new Set(nombres)].map(
      n => n.charAt(0).toUpperCase() + n.slice(1)
    );
  }, [nivelesClase]);

  const handleSelectChange = (e) => {
    const value = e.target.value;
    if (value === "nuevo") {
      setNivelSeleccionado("nuevo");
      setNivelClase("");
      setNuevoNivel("");
    } else {
      setNivelSeleccionado(value);
      setNivelClase(value);
      setNuevoNivel("");
    }
  };

  const handleNuevoNivelChange = (e) => {
    const value = e.target.value;
    setNuevoNivel(value);

    if (value.trim() !== "") {
      const existe = nivelesUnicos.some(
        nivel => nivel.toLowerCase() === value.trim().toLowerCase()
      );
      if (!existe) {
        setNivelClase(value.trim());
      } else {
        setNivelClase(""); // evitar duplicados
      }
    } else {
      setNivelClase("");
    }
  };

  // Nuevos estilos para fondo negro y texto claro
  const textColor = "#eee"; // texto claro para fondo oscuro
  const borderColor = "#444"; // borde oscuro claro
  const bgColor = "#121212"; // fondo negro oscuro

  return (
    <div
      className="input-group mb-3"
      style={{
        maxWidth: "400px",
        margin: "auto",
        gap: "0.5rem",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        backgroundColor: bgColor,
        padding: "1rem",
        borderRadius: "8px",
      }}
    >
      <select
        className="form-select"
        value={nivelSeleccionado}
        onChange={handleSelectChange}
        style={{
          flex: "1",
          padding: "0.5rem 0.75rem",
          borderRadius: "6px",
          border: `1px solid ${borderColor}`,
          backgroundColor: "#222", // input más oscuro que el fondo
          color: textColor,
          fontWeight: "600",
          cursor: "pointer",
          transition: "border-color 0.3s ease",
          appearance: "none", // quitar flecha nativa para estilizar mejor (opcional)
        }}
      >
        <option value="" disabled style={{ color: "#999" }}>
          Seleccione nivel de clase
        </option>
        {nivelesUnicos.map((nivel) => (
          <option key={nivel} value={nivel} style={{ color: textColor }}>
            {nivel}
          </option>
        ))}
        <option value="nuevo" style={{ color: textColor }}>
          Agregar Nuevo
        </option>
      </select>

      {nivelSeleccionado === "nuevo" && (
        <input
          type="text"
          placeholder="Ingrese nuevo nivel"
          value={nuevoNivel}
          onChange={handleNuevoNivelChange}
          autoFocus
          style={{
            flex: "1",
            padding: "0.5rem 0.75rem",
            borderRadius: "6px",
            border: `1px solid ${borderColor}`,
            backgroundColor: "#222",
            color: textColor,
            fontWeight: "600",
            outline: "none",
            transition: "border-color 0.3s ease",
          }}
        />
      )}
    </div>
  );
};

export default SelectorNivelClase;
