import "../index.css";
import MainImage from "../assets/image.jpg";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Hero = (props) => {
  const updateHandler = () => {
    props.switcher("Contact");
  };
  return (
    <div className="hero">
      <div className="description">
        <h1 className="greetings">Hello, I'm a Web Developer</h1>
        <h2 className="name">Aniket Thapa</h2>
        <button className="hero-button" onClick={updateHandler}>
          Contact me
        </button>
        <div className="footer-links">
          <FaFacebook
            size="4rem"
            onClick={() =>
              window.open("https://www.facebook.com/aniket.thapa.372/")
            }
          />
          <FaTwitter
            size="4rem"
            onClick={() => window.open("https://twitter.com/Lion_786_420")}
          />
          <FaInstagram
            size="4rem"
            onClick={() =>
              window.open("https://www.instagram.com/aniket.thapa786")
            }
          />
          <FaGithub
            size="4rem"
            onClick={() => window.open("https://github.com/Lion786420")}
          />
        </div>
      </div>
      <div className="image">
        <img src={MainImage} alt="Aniket Thapa" className="hero-img" />
      </div>
    </div>
  );
};

export default Hero;
