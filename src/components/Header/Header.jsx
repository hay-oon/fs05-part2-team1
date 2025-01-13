import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  // 스크롤 이동을 위한 함수
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="header">
      <div className="header-container">
        <nav className="nav-menu">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <a
                href="#team"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("team");
                }}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#careers"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("careers");
                }}
              >
                Careers
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("contact");
                }}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
