import "../index.css";

const Project = (props) => {
  return (
    <div className="project">
      <img src={props.image} className="project-image" alt="project preview" />
      <div className="project-title">{props.title}</div>
      <p className="project-description">{props.description}</p>
      <button className="project-github">
        <a href={props.github} target="_blank" rel="noopener noreferrer">
          Github
        </a>
      </button>
    </div>
  );
};

export default Project;
