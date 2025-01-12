import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faServer,
  faLaptopCode,
  faWindowMaximize,
} from "@fortawesome/free-solid-svg-icons";

const Skills = () => {
  return (
    <div className="seha__skills">
      <div className="skill-wrapper">
        <div className="category">
          <FontAwesomeIcon icon={faLaptopCode} />
          <span>Language</span>
        </div>
        <div className="skills">
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default Skills;
