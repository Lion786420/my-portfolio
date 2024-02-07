import React, { useState } from "react";
import Header from "./components/Header.js";
import Card from "./components/Card.js";
import Hero from "./components/Hero.js";
import About from "./components/About.js";
import Services from "./components/Services.js";
import Touch from "./components/Touch.js";
import Footer from "./components/Footer.js";
import "./index.css";
import Contact from "./components/Contact.js";
import MyProject from "./components/MyProjects.js";

function App() {
  const [section, switcher] = useState("Home");
  const switchHandler = (data) => {
    switcher(data);
  };
  return (
    <React.Fragment>
      <Card>
        <Header switcher={switchHandler} />
        {section === "Contact" && <Contact />}
        {section === "Home" && <Hero switcher={switchHandler} />}
      </Card>
      {section === "About" && <About />}
      {section === "About" && <MyProject />}
      {section === "Home" && <Services />}
      {!(section === "Contact") && <Touch />}
      <Footer />
    </React.Fragment>
  );
}

export default App;
