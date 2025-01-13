import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faLocationDot,
  faHeadphones,
  faSquarePollHorizontal,
  faEnvelope,
  faFilm,
} from "@fortawesome/free-solid-svg-icons";

const categories = [
  {
    icon: faUser,
    category: "이름",
    content: "정한샘",
  },
  {
    icon: faLocationDot,
    category: "위치",
    content: "용인특례시 수지구",
  },
  {
    icon: faEnvelope,
    category: "이메일",
    content: "hansaemj20@gmail.com",
  },
  {
    icon: faSquarePollHorizontal,
    category: "MBTI",
    content: "ISTP",
  },
  {
    icon: faHeadphones,
    category: "Hobby",
    content: "노래 듣기",
  },
  {
    icon: faFilm,
    category: "좋아하는 영화",
    content: "The Martian (2015)",
  },
];

const AboutMe = () => {
  return (
    <div className="seha__aboutme">
      {categories.map((item, i) => (
        <div key={i} className="aboutme-item">
          <div className="aboutme-item__wrapper">
            <FontAwesomeIcon icon={item.icon} className="custom-icon" />
            <div className="aboutme-text">
              <div>{item.category}</div>
              <div>{item.content}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutMe;
