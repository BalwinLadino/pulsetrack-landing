import React from "react";

function Benefits() {
  return (
    <section
      style={{
        padding: "60px 20px",
        color: "white",
        textAlign: "center",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      <h2 style={{ fontSize: "2.5rem", marginBottom: "40px" }}>
        ¿Por qué usar Pulsetrack?
      </h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          flexWrap: "wrap",
        }}
      >
        {/* Tarjeta 1 */}
        <div
          style={{
            backgroundColor: "#111827",
            padding: "30px",
            borderRadius: "12px",
            width: "300px",
            textAlign: "center",
            border: "1px solid #1f2937",
          }}
        >
          <h3 style={{ fontSize: "1.4rem", marginBottom: "15px" }}>
            Monitoreo en tiempo real
          </h3>
          <p>
            Obtén tus signos vitales al instante con sensores avanzados y gran
            precisión.
          </p>
        </div>

        {/* Tarjeta 2 */}
        <div
          style={{
            backgroundColor: "#111827",
            padding: "30px",
            borderRadius: "12px",
            width: "300px",
            textAlign: "center",
            border: "1px solid #1f2937",
          }}
        >
          <h3 style={{ fontSize: "1.4rem", marginBottom: "15px" }}>
            Alertas inteligentes
          </h3>
          <p>
            Recibe avisos cuando tu pulso o presión arterial presenten cambios
            inesperados.
          </p>
        </div>

        {/* Tarjeta 3 */}
        <div
          style={{
            backgroundColor: "#111827",
            padding: "30px",
            borderRadius: "12px",
            width: "300px",
            textAlign: "center",
            border: "1px solid #1f2937",
          }}
        >
          <h3 style={{ fontSize: "1.4rem", marginBottom: "15px" }}>
            Historial de salud
          </h3>
          <p>
            Guarda tu información y sigue el progreso de tu salud en gráficos
            sencillos.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Benefits;
