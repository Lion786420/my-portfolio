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
          <FaFacebook size="2rem" />
          <FaTwitter size="2rem" />
          <FaInstagram size="2rem" />
          <FaGithub size="2rem" />
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
