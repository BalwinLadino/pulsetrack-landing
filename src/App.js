import React from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Benefits from "./components/Benefits/Benefits";
import Product from "./components/Product/Product";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";



function App() {
  return (
    <div style={{ backgroundColor: "#0a0a18", height: "100vh", color: "white" }}>
      <Header />
      <Hero />
      <Benefits />
      <Product />
      <Contact />
      <Footer />

    </div>
  );
}

export default App;
