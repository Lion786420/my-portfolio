import React from "react";
import Header from "./components/Header.js";
import Card from "./components/Card.js";
import Hero from "./components/Hero.js";
import Services from "./components/Services.js";
import Touch from "./components/Touch.js";
import Footer from "./components/Footer.js";
import "./index.css";

function App() {
  return (
    <React.Fragment>
      <Card>
        <Header />
        <Hero />
      </Card>
      <Services />
      <Touch />
      <Footer />
    </React.Fragment>
  );
}

export default App;
