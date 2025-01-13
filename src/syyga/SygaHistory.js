import React, { useState } from "react";
import "./SygaHistory.css";
import img3 from "./xogn.jpg";
import img1 from "./img1.png";
import img2 from "./img2.jpg";
import img4 from "./img4.PNG";
import img5 from "./img5.jpg";

function SygaHistory() {
  const [currentPage, setCurrentPage] = useState(0);

  const pages = [
    {
      text: "전성기 시절",
      img: img1,
    },
    {
      text: "어렸을땐 야구 선수 꿈꾸며 야구부 생활",
      img: img2,
    },
    {
      text: "다 때려치고 태양의 후예 보고 멋있어서 막연한 환상 속 입대 ",
      img: img3,
    },
    {
      text: "'어라? 이게 왜 내 노트북에?' 방첩사한테 걸려서 옷 벗을뻔 함",
      img: img4,
    },
    {
      text: "그리고 현재",
      img: img5,
    },
  ];

  const nextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="container">
      <div className="page">
        <img
          src={pages[currentPage].img}
          alt={`Page ${currentPage + 1}`}
          className="page-image"
        />
        <h1>{pages[currentPage].text}</h1>
      </div>
      <div className="navigation">
        {currentPage > 0 && (
          <button className="arrow-button" onClick={prevPage}>
            ⬅ 이전
          </button>
        )}
        {currentPage < pages.length - 1 && (
          <button className="arrow-button" onClick={nextPage}>
            다음 ➡
          </button>
        )}
      </div>
    </div>
  );
}

export default SygaHistory;
