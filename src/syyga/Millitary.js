import React from "react";
import "./Millitary.css";
import titleImg from "./123.svg";

function Military() {
  const portfolio = [
    {
      title: "주요 업무",
      description: [
        "전략체계 서버 관리",
        "사이버 침해 대응 및 정책 취약점 관리",
      ],
    },
    {
      title: "주요 훈련 경력",
      description: [
        "KCTC 2회 ( KDA : 0킬 2데스 )",
        "한미연합 BCTP 3회",
        "2023 대화력 격멸 시범 훈련 ( 대통령 )",
        "호국훈련 2회 (총 56박 58일)",
        "BCT 공격 게임어 5회",
        "행군, 유격은 경험 없음 >_0",
      ],
    },
    {
      title: "표창",
      description: [
        "통신학교 초급 간부 성적우수",
        "보안감사 우수 부대",
        "부대 내 웹 취약점 조치",
        "신 체계 서버장비 도입 유공",
        "BCT 게임어 공격 훈련 성과 우수",
        "사단 특급전사 선정",
      ],
    },
  ];

  return (
    <div className="military-container">
      <img src={titleImg} className="titleImg" />
      <h1>최정예 오뚜기</h1>
      <div className="info">
        <div>2018. 02. 26 ~ 2024. 10. 26 ( 중사 5호봉 )</div>
        <div>육군 8사단, 경기도 양주시</div>
        <div>사이버정보체계 ( 175 )</div>
      </div>
      <ul className="portfolio-list">
        {portfolio.map((item, index) => (
          <li key={index} className="portfolio-item">
            <h2>{item.title}</h2>
            {/* 주요 업무가 배열일 경우 리스트로 출력 */}
            {Array.isArray(item.description) ? (
              <ul>
                {item.description.map((task, idx) => (
                  <li key={idx}>{task}</li>
                ))}
              </ul>
            ) : (
              <p>{item.description}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Military;
