import React from "react";

import Parallax from "../common/Parallax";
import SobreNosotros from "../common/SobreNosotros";
import NivelesAlumnos from "../common/NivelesAlumnos";
import CentrosDeSki from "../common/CentrosDeSki"; 
import PreciosHorarios from "../common/PreciosHorarios";



const HomeSki = () => {
  return (
    <>
      <section id="inicio">
        <Parallax/>
      </section>

      <section id="sobre-nosotros">
        <SobreNosotros />
      </section>

      <section id="centros-de-ski">
        <CentrosDeSki />
      </section>

      <section id="precios">
        <PreciosHorarios />
      </section>


      <section id="niveles">
        <NivelesAlumnos />
      </section>

      

    </>
  );
};

export default HomeSki;
