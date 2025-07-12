import React from "react";
import Banner50Off from "./Banner50off";
import NavBar from "../layout/NavBar";
import videoFondo from "../../videos/video_sche.mp4";

const Parallax = () => {
  return (
    <div style={{ position: "relative", height: "105vh", overflow: "hidden" }}>
      <Banner50Off />
      <NavBar />

      {/* VIDEO DE FONDO */}
      <video
        src={videoFondo}
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
        }}
      />

      {/* TEXTO PRINCIPAL CENTRADO */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "#fff",
          textAlign: "center",
          textShadow: "2px 2px 6px rgba(0,0,0,0.8)",
          zIndex: 1,
          padding: "0 1rem",
        }}
      >
        <h1 style={{ fontSize: "3.5rem", fontWeight: "bold", marginBottom: "1rem" }}>
          Clases de ski en Colorado
        </h1>
        <p style={{ fontSize: "1.8rem" }}>Vení a disfrutar en familia</p>
      </div>
    </div>
  );
};

export default Parallax;
