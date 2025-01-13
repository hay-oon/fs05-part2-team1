import "./style.css";
import logoGithub from "assets/images/seha__logo-github.png";
import logoTistory from "assets/images/seha__logo-tistory.png";

const Archiving = () => {
  return (
    <div className="seha__archiving">
      <div className="archiving-wrapper">
        <a
          className="archiving-item"
          href="https://github.com/koseha"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div>
            <img src={logoGithub} alt="GitHub logo" loading="lazy" />
          </div>
          <div>github.com/koseha</div>
          <div>소스 코드 저장소</div>
        </a>
        <a
          className="archiving-item"
          href="https://se-ha.tistory.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div>
            <img src={logoTistory} alt="Tistory logo" loading="lazy" />
          </div>
          <div>se-ha.tistory.com</div>
          <div>공부 및 지식 공유 목적의 블로그</div>
        </a>
      </div>
    </div>
  );
};

export default Archiving;
