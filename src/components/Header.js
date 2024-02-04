import Logo from "../assets/Logo";
import "../index.css";

const Header = () => {
  return (
    <header>
      <div class="logo-div">
        <Logo />
      </div>
      <div class="links">
        <span>
          <a href="./">Home</a>
        </span>
        <span>
          <a href="./">About me</a>
        </span>
        <span>
          <a href="./">Contact</a>
        </span>
      </div>
      <button class="hire-button">Hire me</button>
    </header>
  );
};

export default Header;
