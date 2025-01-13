import "./page.css";
import LondonWeather from "./components/LondonWeather";
import ExchangeRate from "./components/ExchangeRate";
import GithubActivity from "./components/GithubActivity";
import LondonTransport from "./components/LondonTransport";
import DevNews from "./components/DevNews";

export default function Hayoon() {
  return (
    <section className="container">
      <div className="featuredSection">
        <div className="nameLogoWrapper">
          <div className="nameWrapper">
            <div className="nameLine">
              <span className="nameChar black">H</span>
              <span className="nameChar black">A</span>
              <span className="nameChar black">Y</span>
              <span className="nameChar navy">O</span>
              <span className="nameChar navy">O</span>
              <span className="nameChar black">N</span>
            </div>
            <div className="nameLine">
              <span className="nameChar gray">J</span>
              <span className="nameChar pastelBlue">E</span>
              <span className="nameChar gray">O</span>
              <span className="nameChar gray">N</span>
              <span className="nameChar gray">G</span>
            </div>
            <p className="featuredSubtitle">
              Frontend Developer (..in progress)
            </p>
          </div>
          <div className="logoWrapper">
            <img
              src="https://cdn-icons-png.flaticon.com/512/528/528256.png"
              alt="Logo"
              className="logoImage"
            />
          </div>
        </div>
      </div>

      <div className="grayBackground">
        <div className="graySectionCard">
          <h2 className="graySectionTitle">About Me</h2>
          <p className="featuredSubtitle">
            "I enjoy taking on challenges that seem impossible"
          </p>
          <div className="featuredContent">
            <p>🇰🇷 Born in Ulsan, South Korea</p>
            <p>🎓 Bachelor in Management</p>
            <p>🇬🇧 in 2019, moved to UK after leaving my previous job</p>
            <p>🍴 in 2021, started a restaurant business in London</p>
            <p>
              💻 in 2024, started learning programming, attending fullstack
              developer bootcamp
            </p>
            <p>🛫 in 2025, what will I be doing?</p>
          </div>
        </div>
        <div className="interSection">
          <div className="interSectionInner">
            <div className="interSectionLeft">
              <h3 className="interSectionTitle">London Life</h3>
              <div className="londonInfoContainer">
                <LondonWeather />
                <ExchangeRate />
                <LondonTransport />
              </div>
            </div>

            <div className="interSectionRight">
              <h3 className="interSectionTitle">Dev Life</h3>
              <div className="devInfoContainer">
                <GithubActivity />
                <DevNews />
              </div>
            </div>
          </div>
        </div>
        <div className="graySectionCard">
          <h2 className="graySectionTitle">What I'm into</h2>
          <p className="featuredSubtitle">
            These are the things I'm interested in these days.
          </p>
          <div className="featuredContent">
            <p>🇩🇪 Learning German</p>
            <p>🎧 Coding while listening to NewJeans playlists</p>
            <p>🧠 Neuroscience</p>
            <p>📰 Reading articles about various IT technologies</p>
          </div>
        </div>

        <div className="graySectionCard">
          <p className="featuredSubtitle">
            "My life has been about overcoming insecurities"
          </p>
        </div>
        <div>
          <h2 className="featuredTitle">Skills</h2>
          <p className="featuredSubtitle">
            I'm currently learning these skills
          </p>
        </div>
        <div className="flexGridWrapper">
          <div className="flexGridCard">
            <h3 className="flexGridCardTitle">HTML / CSS / JavaScript</h3>
            <p className="flexGridCardSubtitle">
              A brief description of the project.
            </p>
            <div className="flexGridCardImage">
              <img
                src="data:image/png;base64,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"
                alt="HTML / CSS / JavaScript"
              />
            </div>
          </div>
          <div className="flexGridCard">
            <h3 className="flexGridCardTitle">Node.js / React</h3>
            <p className="flexGridCardSubtitle">
              A brief description of the project.
            </p>
            <div className="flexGridCardImage">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLcCB8b2xLv8BxFaPbdxmg0-OSrhRCBvRhYw&s"
                alt="Node.js / React"
              />
            </div>
          </div>
          <div className="flexGridCard">
            <h3 className="flexGridCardTitle">Next.js </h3>
            <p className="flexGridCardSubtitle">
              A brief description of the project.
            </p>
            <div className="flexGridCardImage">
              <img
                src="data:image/png;base64,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"
                alt="Next.js"
              />
            </div>
          </div>
          <div className="flexGridCard">
            <h3 className="flexGridCardTitle">Typscript</h3>
            <p className="flexGridCardSubtitle">
              A brief description of the project.
            </p>
            <div className="flexGridCardImage">
              <img
                src="data:image/png;base64,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"
                alt="Typescript"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="contactSection">
        <h2>Contact</h2>
        <ul>
          <li>
            <a href="https://github.com/hay-oon">GitHub</a>
          </li>
          <li>
            <a href="mailto:hayooncode@gmail.com">Email</a>
          </li>
          <li>
            <a href="https://velog.io/@hayooncode/">Blog</a>
          </li>
        </ul>
      </div>
    </section>
  );
}
