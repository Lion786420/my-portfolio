import React from "react";
import Header from "./components/Header.js";
import Card from "./components/Card.js";
import Hero from "./components/Hero.js";
import Footer from "./components/Footer.js";
import "./index.css";

function App() {
  return (
    <React.Fragment>
      <Card>
        <Header />
        <Hero />
      </Card>
      <Footer />
    </React.Fragment>
  );
}

export default App;
