import "../index.css";

const About = () => {
  return (
    <div className="about">
      <div className="filler">
        <div className="about-heading">About me</div>
        <hr className="about-hr" />
      </div>
      <div className="about-grid">
        <div className="about-section">
          <h2 className="about-sub">Frontend and Backend Developer</h2>
          <hr className="about-hr2" />
          <p className="about-description">
            I'm Aniket Thapa, a front-end developer that is enthusiastic about
            using slick aesthetics and simple user interfaces to create engaging
            user experiences. I specialize in creating aesthetically pleasing
            websites that capture customers' attention from the moment they
            land, thanks to my proficiency in HTML, CSS, and JavaScript. I have
            some experience in backend development as well, which rounds out my
            knowledge of the entire web development process.
          </p>
          <a href="../assets/cv.pdf" download>
            <button className="cv">Download CV</button>
          </a>
        </div>
        <div className="about-stats">
          <div className="stats-container">
            <span className="stats-indicator">Html</span>
            <div className="stats-fill" style={{ width: "80%" }}></div>
          </div>
          <div className="stats-container">
            <span className="stats-indicator">CSS</span>
            <div className="stats-fill" style={{ width: "70%" }}></div>
          </div>
          <div className="stats-container">
            <span className="stats-indicator">Javascript</span>
            <div className="stats-fill" style={{ width: "65%" }}></div>
          </div>
          <div className="stats-container">
            <span className="stats-indicator">React</span>
            <div className="stats-fill" style={{ width: "55%" }}></div>
          </div>
          <div className="stats-container">
            <span className="stats-indicator">Node</span>
            <div className="stats-fill" style={{ width: "30%" }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
