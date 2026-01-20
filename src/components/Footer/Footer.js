import React from "react";

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#0B1220",
        padding: "40px 20px",
        color: "white",
        marginTop: "80px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "40px",
        }}
      >
        {/* Logo y descripción */}
        <div style={{ maxWidth: "300px" }}>
          <h2 style={{ fontSize: "1.6rem", marginBottom: "15px" }}>Pulsetrack</h2>
          <p style={{ opacity: 0.7, lineHeight: "1.7" }}>
            Tecnología diseñada para ayudarte a mantener tus signos vitales bajo supervisión,
            brindando bienestar y seguridad en todo momento.
          </p>
        </div>

        {/* Enlaces rápidos */}
        <div>
          <h3 style={{ fontSize: "1.2rem", marginBottom: "15px" }}>Enlaces</h3>
          <ul style={{ listStyle: "none", padding: 0, lineHeight: "2" }}>
            <li><a href="#" style={{ color: "white", opacity: 0.7 }}>Inicio</a></li>
            <li><a href="#" style={{ color: "white", opacity: 0.7 }}>Producto</a></li>
            <li><a href="#" style={{ color: "white", opacity: 0.7 }}>Beneficios</a></li>
            <li><a href="#" style={{ color: "white", opacity: 0.7 }}>Contacto</a></li>
          </ul>
        </div>

        {/* Información legal */}
        <div>
          <h3 style={{ fontSize: "1.2rem", marginBottom: "15px" }}>Legal</h3>
          <ul style={{ listStyle: "none", padding: 0, lineHeight: "2" }}>
            <li><a href="#" style={{ color: "white", opacity: 0.7 }}>Política de privacidad</a></li>
            <li><a href="#" style={{ color: "white", opacity: 0.7 }}>Términos y condiciones</a></li>
          </ul>
        </div>

        {/* Redes sociales */}
        <div>
          <h3 style={{ fontSize: "1.2rem", marginBottom: "15px" }}>Síguenos</h3>
          <div style={{ display: "flex", gap: "15px" }}>
            <a href="#" style={{ color: "white", opacity: 0.8, fontSize: "1.3rem" }}>📘</a>
            <a href="#" style={{ color: "white", opacity: 0.8, fontSize: "1.3rem" }}>📸</a>
            <a href="#" style={{ color: "white", opacity: 0.8, fontSize: "1.3rem" }}>🐦</a>
          </div>
        </div>
      </div>

      {/* Línea inferior */}
      <div
        style={{
          textAlign: "center",
          marginTop: "40px",
          opacity: 0.5,
          fontSize: "0.85rem",
        }}
      >
        © {new Date().getFullYear()} Pulsetrack — Todos los derechos reservados.
      </div>
    </footer>
  );
}

export default Footer;
