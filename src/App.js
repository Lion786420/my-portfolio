import React from "react";
import Header from "./components/Header.js";
import Card from "./components/Card.js";
import Hero from "./components/Hero.js";
import About from "./components/About.js";
import Services from "./components/Services.js";
import Touch from "./components/Touch.js";
import Footer from "./components/Footer.js";
import "./index.css";
import Contact from "./components/Contact.js";

function App() {
  return (
    <React.Fragment>
      <Card>
        <Header />
        {/* <Contact /> */}
        <Hero />
      </Card>
      <About />
      <Services />
      <Touch />
      <Footer />
    </React.Fragment>
  );
}

export default App;
