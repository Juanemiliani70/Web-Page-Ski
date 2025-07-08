import React, { useState } from "react";

const FiltrarClases = ({ niveles, onFiltrar }) => {
  const [filtro, setFiltro] = useState("");

  const manejarCambioSeleccion = (e) => {
    const nivelSeleccionado = e.target.value;
    setFiltro(nivelSeleccionado);
    onFiltrar(nivelSeleccionado || "");
  };

  const limpiarFiltro = () => {
    setFiltro("");
    onFiltrar("");
  };

  return (
    <div className="input-group mb-3">
      <span className="input-group-text">Filtrar clases por nivel</span>
      <select
        className="form-select"
        value={filtro}
        onChange={manejarCambioSeleccion}
      >
        <option value="">Selecciona un nivel</option>
        {niveles.map(({ nivel }) => (
          <option key={nivel} value={nivel}>
            {nivel}
          </option>
        ))}
      </select>
      <button className="btn btn-secondary" onClick={limpiarFiltro}>
        Limpiar Filtro
      </button>
    </div>
  );
};

export default FiltrarClases;
