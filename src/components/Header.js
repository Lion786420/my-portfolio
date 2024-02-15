import Logo from "../assets/Logo";
import "../index.css";
import "../responsive.css";

const Header = (props) => {
  const homeSwitcher = () => {
    props.switcher("Home");
  };
  const aboutSwitcher = () => {
    props.switcher("About");
  };
  const contactSwitcher = () => {
    props.switcher("Contact");
  };
  return (
    <header>
      <div>
        <Logo />
      </div>
      <div className="links">
        <span onClick={homeSwitcher}>Home</span>
        <span onClick={aboutSwitcher}>About me</span>
        <span onClick={contactSwitcher}>Contact</span>
      </div>
      <button className="hire-button">Hire me</button>
    </header>
  );
};

export default Header;
