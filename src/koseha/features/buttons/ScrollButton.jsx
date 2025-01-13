import "./ScrollButton.css";

const ScrollButton = ({ to }) => {
  const handleClick = () => {
    const targetElement = document.querySelector(to);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <a className="mouse-scroll" onClick={handleClick}>
      <span className="scroll-arrow"></span>
      <span className="scroll-arrow"></span>
      <span className="scroll-arrow"></span>
    </a>
  );
};

export default ScrollButton;
