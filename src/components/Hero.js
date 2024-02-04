import "../index.css";
import MainImage from "../assets/image.jpg";

const Hero = () => {
  return (
    <div class="hero">
      <div class="description">
        <h1 class="greetings">Hello, I'm a Web Developer</h1>
        <h2 class="name">Aniket Thapa</h2>
        <p class="elaboration">
          Hey, I'm Aniket Thapa, a final-year student deeply immersed in the
          world of web development. I love transforming concepts into engaging
          online experiences. Join me on this digital journey where innovation
          meets functionality. My portfolio is not just a showcase, it's an
          invitation to explore the exciting realm of web development together.
          Welcome aboard!
        </p>
      </div>
      <div class="image">
        <img src={MainImage} alt="Aniket Thapa" class="hero-img" />
      </div>
    </div>
  );
};

export default Hero;
