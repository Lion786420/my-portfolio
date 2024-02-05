import "../index.css";

const About = () => {
  return (
    <div className="about">
      <div className="about-heading">About me</div>
      <hr className="about-hr" />
      <div className="about-grid">
        <div className="about-section">
          <h2 className="about-sub">Frontend and Backend Developer</h2>
          <hr className="about-hr2" />
          <p className="about-description">
            Hey, I'm Aniket Thapa, a final-year student deeply immersed in the
            world of web development. I love transforming concepts into engaging
            online experiences. Join me on this digital journey where innovation
            meets functionality. My portfolio is not just a showcase, it's an
            invitation to explore the exciting realm of web development
            together. Welcome aboard!
          </p>
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
            <div className="stats-fill" style={{ width: "50%" }}></div>
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
