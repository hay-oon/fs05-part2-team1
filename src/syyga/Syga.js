import React from "react";
import { Link } from "react-router-dom";
import "./Syga.css"; // CSS 파일 추가
import proimg from "./proimg.jpg";

const Syga = () => {
  return (
    <div>
      {/* 내비게이션 바 */}
      <nav className="nav-bar">
        <Link to="/">메인화면 돌아가기</Link>
      </nav>

      {/* 3x3 그리드 레이아웃 */}
      <div className="grid-container">
        {/* 1번 그리드 */}
        <div className="grid-item">
          <h2>성격</h2>
          <div>1. 낙관적임</div>
          <div>2. 그래서 게으름</div>
          <div></div>
        </div>

        {/* 2번 그리드 */}
        <div className="grid-item">
          <h1>가 승 연</h1>
          <h2>99. 04. 17</h2>
        </div>

        {/* 3번 그리드 */}
        <div className="grid-item">
          <h2>취미</h2>
          <div>1. 야구 직관</div>
          <div>2. 요리</div>
          <div>3. 소소한 즉흥 드라이브</div>
        </div>

        {/* 4번 그리드 */}
        <div className="grid-item">
          <h2>좋아하는 것</h2>
          <div>1. 경관 보면서 멍때리기</div>
          <div>2. 귀여운 거</div>
        </div>

        {/* 5번 그리드 */}
        <div className="grid-item">
          <img src={proimg} className="proimg" />
        </div>

        {/* 6번 그리드 */}
        <div className="grid-item">
          <h2>싫어하는 것</h2>
          <div>1. 사람많고 시끄러운 곳</div>
          <div>2. 토마토 주스</div>
        </div>

        {/* 7번 그리드 */}
        <div className="grid-item">
          <Link to="/intro">인생 히스토리</Link>
        </div>

        {/* 8번 그리드 */}
        <div className="grid-item">
          <h2>버킷리스트</h2>
          <div>1. MLB 월시 직관</div>
          <div>2. 일식 자격증 취득</div>
          <div>3. 골프 필드 나가기</div>
        </div>

        {/* 9번 그리드 */}
        <div className="grid-item">
          <Link to="/millitary">군생활 자랑 → → →</Link>
        </div>
      </div>
    </div>
  );
};

export default Syga;
