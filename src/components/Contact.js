import "../index.css";
import { ImMobile } from "react-icons/im";
import { FaHouse } from "react-icons/fa6";
import { GrDomain } from "react-icons/gr";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import ContactForm from "./ContactForm";
import "../responsive.css";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-upper">
        <h2 className="contact-heading">Contact</h2>
        <hr className="contact-hr" />
      </div>
      <div className="contact-container">
        <div className="contact-inner">
          <div className="contact-detail">
            <ImMobile size="4rem" color="#ec5b53" />
            <h2>+977 9861442294</h2>
            <p>Monday-Friday (8am-6pm)</p>
          </div>
          <div className="contact-detail">
            <FaHouse size="4rem" color="#ec5b53" />
            <h2>Bhaktapur, Nepal</h2>
            <p>Sanothimi</p>
          </div>
          <div className="contact-detail">
            <GrDomain size="4rem" color="#ec5b53" />
            <h2>Thapaaniket12345@gmail.com</h2>
            <p>Contact me any time</p>
          </div>
        </div>
        <div className="contact-lower">
          <ContactForm />
          <div className="contact-message">
            <h2>Message me</h2>
            <hr />
            <p>
              Feel free to reach out to me through any of the social media
              networks or through my given contact details.
            </p>
            <div className="contact-links">
              <FaFacebook
                size="3rem"
                onClick={() =>
                  window.open("https://www.facebook.com/aniket.thapa.372/")
                }
              />
              <FaTwitter
                size="3rem"
                onClick={() => window.open("https://twitter.com/Lion_786_420")}
              />
              <FaInstagram
                size="3rem"
                onClick={() =>
                  window.open("https://www.instagram.com/aniket.thapa786")
                }
              />
              <FaGithub
                size="3rem"
                onClick={() => window.open("https://github.com/Lion786420")}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
