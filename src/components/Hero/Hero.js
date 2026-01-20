import React from "react";

function Hero() {
  return (
    <section
      style={{
        height: "85vh",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "20px"
      }}
    >
      <h1 style={{ fontSize: "3rem", marginBottom: "20px" }}>
        Mantén tu corazón bajo control
      </h1>

      <p style={{ fontSize: "1.2rem", maxWidth: "600px", marginBottom: "30px" }}>
        Pulsetrack te ayuda a monitorear tus signos vitales en tiempo real,
        ofreciéndote datos precisos y alertas inteligentes para tu bienestar.
      </p>

      <button
        style={{
          padding: "15px 30px",
          fontSize: "1.2rem",
          backgroundColor: "#6b46c1",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer"
        }}
      >
        Empezar ahora
      </button>
    </section>
  );
}

export default Hero;
