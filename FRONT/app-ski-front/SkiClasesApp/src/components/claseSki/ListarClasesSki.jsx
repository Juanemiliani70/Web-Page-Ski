import React from "react";
import ClasesSki from "./ClasesSki";

const ListarClasesSki = () => {
  return (
    <section
      className="bg-light p-2 mt-3 shadow"
      style={{
        marginTop: "-50px",
        paddingTop: "80px",
        paddingBottom: "2rem",
        minHeight: "calc(100vh - 200px)",
      }}
    >
      <ClasesSki />
    </section>
  );
};

export default ListarClasesSki;
