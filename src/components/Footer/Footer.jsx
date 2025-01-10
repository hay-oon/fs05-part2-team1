import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>회사 소개</h3>
            <p>서울특별시 강남구</p>
            <p>02-1234-5678</p>
            <p>info@Fs05Part2Team2.com</p>
          </div>
          <div className="footer-section">
            <h3>제품</h3>
            <p>서비스 소개</p>
            <p>가격 정책</p>
            <p>고객 사례</p>
          </div>
          <div className="footer-section">
            <h3>지원</h3>
            <p>문의하기</p>
            <p>기술 지원</p>
            <p>개발자 문서</p>
          </div>
          <div className="footer-section">
            <h3>법적 고지</h3>
            <p>개인정보 처리방침</p>
            <p>이용약관</p>
            <p>라이선스</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Copyright © 2025 Fs05Part2Team2. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
