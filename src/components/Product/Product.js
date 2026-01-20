import React from "react";
import productoImg from "../../assets/smartband_bwn.png";


function Product() {
  return (
    <section
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "80px 20px",
        color: "white",
        maxWidth: "1200px",
        margin: "0 auto",
        gap: "60px",
        flexWrap: "wrap",
      }}
    >
      {/* Imagen SmartBand */}
      <div>
        <img 
  src={productoImg} 
  alt="Producto pulsetrack" 
  style={{ width: "300px", borderRadius: "12px" }}

        />
      </div>

      {/* Información */}
      <div style={{ maxWidth: "500px" }}>
        <h2 style={{ fontSize: "2.5rem", marginBottom: "20px" }}>
          SmartBand Pulsetrack
        </h2>

        <p style={{ fontSize: "1.1rem", marginBottom: "25px", lineHeight: "1.6" }}>
          Diseñado para cuidar tu salud en todo momento. La SmartBand Pulsetrack
          monitorea tu pulso, oxígeno en sangre y presión arterial con sensores
          avanzados de última generación.
        </p>

        <ul
          style={{
            listStyle: "none",
            padding: 0,
            marginBottom: "30px",
            lineHeight: "1.8",
          }}
        >
          <li>✔ Monitoreo continuo 24/7</li>
          <li>✔ Alertas de ritmo cardíaco elevado</li>
          <li>✔ Registro histórico y análisis de tendencias</li>
          <li>✔ Sincronización con la app móvil</li>
        </ul>

        <button
          style={{
            backgroundColor: "#7C3AED",
            border: "none",
            padding: "12px 28px",
            borderRadius: "8px",
            fontSize: "1rem",
            cursor: "pointer",
            color: "white",
          }}
        >
          Conocer más
        </button>
      </div>
    </section>
  );
}

export default Product;
