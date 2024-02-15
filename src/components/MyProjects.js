import "../index.css";
import Project from "./Project";
import Expense from "../assets/Expense.png";
import Investment from "../assets/Investment.png";
import Course from "../assets/Course.png";
import "../responsive.css";

const data = [
  {
    image: Expense,
    title: "Expense Tracker",
    description:
      "An Expense tracking app where you can enter your expenses through different times and compare between the other expenses.",
    github: "https://github.com/Lion786420/Expense_app",
  },
  {
    image: Investment,
    title: "Investment Calculator",
    description:
      "A calculator app that can track your investments and calculate your money over given period of time",
    github: "https://github.com/Lion786420/Investment-Calculator",
  },
  {
    image: Course,
    title: "Goal manager",
    description:
      "A goal managing app where you can set different goals for yourself and remove and add new ones whenever necessary",
    github: "https://github.com/Lion786420/CourseGoal",
  },
];

const MyProjects = () => {
  return (
    <div className="projects">
      <h2 className="projects-heading">My Projects</h2>
      <hr className="projects-hr" />
      <div className="projects-grid">
        {data.map((each) => (
          <Project
            key={Math.random()}
            image={each.image}
            title={each.title}
            github={each.github}
            description={each.description}
          />
        ))}
      </div>
    </div>
  );
};

export default MyProjects;
