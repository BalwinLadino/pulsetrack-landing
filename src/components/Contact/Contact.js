import React, { useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.nombre || !formData.email || !formData.mensaje) {
      setStatus("Por favor completa todos los campos.");
      return;
    }

    const templateParams = {
      user_name: formData.nombre,
      user_email: formData.email,
      message: formData.mensaje,
    };

    emailjs
      .send(
        "service_yirrrtt",      // Service ID
        "template_w799sjo",     // Template ID
        templateParams,
        "mp9MenfkojgyLllWc"     // Public Key
      )
      .then(
        () => {
          setStatus("¡Mensaje enviado correctamente!");
          setFormData({ nombre: "", email: "", mensaje: "" });
        },
        (error) => {
          console.error("Error al enviar:", error);
          setStatus("Ocurrió un error. Intenta de nuevo.");
        }
      );
  };

  return (
    <section
      style={{
        padding: "80px 20px",
        color: "white",
        maxWidth: "800px",
        margin: "0 auto",
      }}
    >
      <h2
        style={{
          fontSize: "2.5rem",
          marginBottom: "20px",
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        Contáctanos
      </h2>

      <p style={{ textAlign: "center", opacity: 0.7, marginBottom: "40px" }}>
        ¿Tienes preguntas sobre Pulsetrack? Escríbenos y te responderemos.
      </p>

      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          backgroundColor: "#0B1220",
          padding: "40px",
          borderRadius: "12px",
        }}
      >
        <input
          type="text"
          name="nombre"
          placeholder="Tu nombre"
          value={formData.nombre}
          onChange={handleChange}
          style={{
            padding: "15px",
            borderRadius: "8px",
            border: "none",
            outline: "none",
            fontSize: "1rem",
          }}
        />

        <input
          type="email"
          name="email"
          placeholder="Tu correo"
          value={formData.email}
          onChange={handleChange}
          style={{
            padding: "15px",
            borderRadius: "8px",
            border: "none",
            outline: "none",
            fontSize: "1rem",
          }}
        />

        <textarea
          name="mensaje"
          placeholder="Tu mensaje"
          value={formData.mensaje}
          onChange={handleChange}
          rows="6"
          style={{
            padding: "15px",
            borderRadius: "8px",
            border: "none",
            outline: "none",
            fontSize: "1rem",
          }}
        ></textarea>

        <button
          type="submit"
          style={{
            backgroundColor: "#7C3AED",
            color: "white",
            padding: "15px",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "1rem",
            fontWeight: "bold",
          }}
        >
          Enviar mensaje
        </button>

        {status && (
          <p style={{ marginTop: "10px", color: "#A78BFA", textAlign: "center" }}>
            {status}
          </p>
        )}
      </form>
    </section>
  );
}

export default Contact;
