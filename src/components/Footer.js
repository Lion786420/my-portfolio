import "../index.css";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Logo from "../assets/Logo";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-upper">
        <div className="footer-links">
          <FaFacebook
            size="2rem"
            onClick={() =>
              window.open("https://www.facebook.com/aniket.thapa.372/")
            }
          />
          <FaTwitter
            size="2rem"
            onClick={() => window.open("https://twitter.com/Lion_786_420")}
          />
          <FaInstagram
            size="2rem"
            onClick={() =>
              window.open("https://www.instagram.com/aniket.thapa786")
            }
          />
          <FaGithub
            size="2rem"
            onClick={() => window.open("https://github.com/Lion786420")}
          />
        </div>
        <div className="footer-logo">
          <Logo />
        </div>
        <h2 className="email">Thapaaniket12345@gmail.com</h2>
      </div>
      <div className="copyright">Copyright © 2024 Aniket Thapa</div>
    </footer>
  );
};

export default Footer;
