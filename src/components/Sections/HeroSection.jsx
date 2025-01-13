import React from "react";
import { Link } from "react-router-dom";
import "./HeroSection.css";

const TeamCard = ({ member, index }) => (
  <div key={index} className="team-card">
    <div className="team-card-inner">
      <div className="team-card-front">
        <img src={member.image} alt={member.name} />
        <div className="team-card-content">
          <h3>{member.name}</h3>
        </div>
      </div>
      <div className="team-card-back">
        <div className="team-card-back-content">
          <h3>{member.name}</h3>
          <p className="position">{member.position}</p>
          <p className="more">자세히 보기</p>
        </div>
      </div>
    </div>
  </div>
);

const HiringStep = ({ step }) => (
  <div className="process-step">
    <div className="step-number">{step.number}</div>
    <div className="step-content">
      <h3>{step.title}</h3>
      <p>{step.description}</p>
    </div>
  </div>
);

const HeroSection = () => {
  return (
    <>
      <section className="hero-section" id="home">
        <div className="hero-content">
          <h1>Hello, World.</h1>
          <p>저희 팀은 모두 코딩을 좋아하는 사람들입니다</p>
          <button className="cta-button">자세히 알아보기</button>
        </div>
      </section>

      <section className="team-section" id="team">
        <div className="section-container">
          <h2>Meet our team</h2>
          <p className="section-subtitle">
            실력과 열정을 가진 사람들이 모여 만든 팀입니다
          </p>
          <div className="team-grid">
            <Link to="/hay-oon">
              <TeamCard
                member={{
                  name: "HAYOON JEONG",
                  position: "CEO",
                  image:
                    "https://littledeep.com/wp-content/uploads/2019/04/littledeep_person_style1.png",
                }}
              />
            </Link>
            <TeamCard
              member={{
                name: "SEUNGYEON GA",
                position: "CTO",
                image:
                  "https://littledeep.com/wp-content/uploads/2019/04/littledeep_person_style1.png",
              }}
            />
            <TeamCard
              member={{
                name: "HANSAEM JEONG",
                position: "CTO",
                image:
                  "https://littledeep.com/wp-content/uploads/2019/04/littledeep_person_style1.png",
              }}
            />
            <TeamCard
              member={{
                name: "YURI CHOI",
                position: "CTO",
                image:
                  "https://i.pinimg.com/736x/e3/ff/87/e3ff87b0270bd011a8670e85e22e8bc7.jpg",
              }}
            />
            <Link to='/hyuk'>
            <TeamCard
              member={{
                name: "DONGHYUK LEE",
                position: "CTO",
                image:
                  "https://littledeep.com/wp-content/uploads/2019/04/littledeep_person_style1.png",
              }}
            />
            </Link>
            <TeamCard
              member={{
                name: "EUNBI CHOI",
                position: "CTO",
                image:
                  "https://i.pinimg.com/736x/e3/ff/87/e3ff87b0270bd011a8670e85e22e8bc7.jpg",
              }}
            />
          </div>
        </div>
      </section>

      <section className="features-section" id="careers">
        <div className="section-container">
          <h2>Join our team</h2>
          <p className="section-subtitle">
            함께 성장하고 혁신을 만들어갈 동료를 찾습니다
          </p>
          <div className="hiring-process">
            <HiringStep
              step={{
                number: "01",
                title: "서류 지원",
                description:
                  "이력서와 포트폴리오를 제출해 주세요.\n7일 이내 검토 후 연락드립니다.",
              }}
            />
            <HiringStep
              step={{
                number: "02",
                title: "기술 면접",
                description:
                  "실무진과 함께하는 기술 면접을 통해\n서로를 이해하는 시간을 가집니다.",
              }}
            />
            <HiringStep
              step={{
                number: "03",
                title: "최종 면접",
                description:
                  "회사의 비전과 가치관을 공유하고\n함께할 수 있는지 이야기합니다.",
              }}
            />
          </div>
        </div>
      </section>

      <section className="device-section">
        <div className="section-container">
          <h2>Real-time Career Chat</h2>
          <p className="section-subtitle">
            실시간 채용 상담으로 여러분의 커리어를 함께 고민합니다
          </p>
          <div className="device-showcase">
            <div className="device-content">
              <h3>Smart Career Support</h3>
              <p>
                언제 어디서나 편리하게
                <br />
                채용 관련 상담을 진행하실 수 있습니다
              </p>
              <ul className="feature-list">
                <li>24/7 실시간 채용 상담</li>
                <li>맞춤형 포지션 추천</li>
                <li>즉각적인 피드백</li>
              </ul>
            </div>
            <div className="device-image">
              <div className="iphone">
                <div className="iphone-inner">
                  <div className="chat-interface">
                    <div className="chat-header">
                      <h4>채용 상담</h4>
                      <p>채용 담당자와 연결중입니다...</p>
                    </div>
                    <div className="chat-messages">
                      <div className="message received">
                        <p>
                          안녕하세요! 채용 관련 문의 사항을 도와드리겠습니다.
                          무엇을 도와드릴까요? 👋
                        </p>
                        <span className="time">09:41</span>
                      </div>
                      <div className="message sent">
                        <p>
                          안녕하세요, 개발자 포지션 지원을 고려중인데 자세한
                          정보를 알고 싶습니다.
                        </p>
                        <span className="time">09:42</span>
                      </div>
                      <div className="message received">
                        <p>현재 저희는 다음 포지션의 개발자를 찾고 있습니다:</p>
                        <p>
                          • 프론트엔드 개발자 (React/TypeScript)
                          <br />
                          • 백엔드 개발자 (Node.js/Next.js)
                          <br />
                          • DevOps 엔지니어
                          <br />
                          <br />
                          어떤 포지션에 관심이 있으신가요?
                        </p>
                        <span className="time">09:42</span>
                      </div>
                      <div className="message received typing">
                        <div className="typing-indicator">
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                      </div>
                    </div>
                    <div className="chat-input">
                      <input type="text" placeholder="메시지를 입력하세요..." />
                      <button>전송</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
