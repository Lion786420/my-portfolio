import "../index.css";
import MainImage from "../assets/image.jpg";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Hero = () => {
  return (
    <div class="hero">
      <div class="description">
        <h1 class="greetings">Hello, I'm a Web Developer</h1>
        <h2 class="name">Aniket Thapa</h2>
        <button className="hero-button">Contact me</button>
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
      <div class="image">
        <img src={MainImage} alt="Aniket Thapa" class="hero-img" />
      </div>
    </div>
  );
};

export default Hero;
