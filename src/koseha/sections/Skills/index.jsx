import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faServer,
  faLaptopCode,
  faWindowMaximize,
  faCloud,
} from "@fortawesome/free-solid-svg-icons";

const Skills = () => {
  return (
    <div className="seha__skills">
      <div className="skill-wrapper">
        <div className="category">
          <FontAwesomeIcon icon={faLaptopCode} className="skill-icon" />
          <span>Language</span>
        </div>
        <div className="skills">
          <span style={{ background: "#007396", color: "#ffffff" }}>Java</span>
          <span style={{ background: "#F7DF1E", color: "#000000" }}>
            JavaScript
          </span>
          <span style={{ background: "#A8B9CC ", color: "#FFFFFF " }}>C</span>
        </div>
      </div>
      <div className="skill-wrapper">
        <div className="category">
          <FontAwesomeIcon icon={faWindowMaximize} className="skill-icon" />
          <span>Frontend</span>
        </div>
        <div className="skills">
          <span style={{ background: "#61DAFB", color: "#20232A" }}>React</span>
        </div>
      </div>
      <div className="skill-wrapper">
        <div className="category">
          <FontAwesomeIcon icon={faServer} className="skill-icon" />
          <span>Backend</span>
        </div>
        <div className="skills">
          <span style={{ background: "#6DB33F", color: "#ffffff" }}>
            Spring
          </span>
          <span style={{ background: "#F29111", color: "#ffffff" }}>MySQL</span>
        </div>
      </div>
      <div className="skill-wrapper">
        <div className="category">
          <FontAwesomeIcon icon={faCloud} className="skill-icon" />
          <span>DevOps</span>
        </div>
        <div className="skills"></div>
      </div>
    </div>
  );
};

export default Skills;
