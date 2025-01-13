import "./ScrollButton.css";

const ScrollButton = ({ handleClick }) => {
  return (
    <button className="mouse-scroll" onClick={handleClick}>
      <span className="scroll-arrow"></span>
      <span className="scroll-arrow"></span>
      <span className="scroll-arrow"></span>
    </button>
  );
};

export default ScrollButton;
