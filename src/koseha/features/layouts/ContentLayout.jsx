import "./ContentLayout.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire } from "@fortawesome/free-solid-svg-icons";

const ContentLayout = ({
  children,
  id,
  title,
  color = "#000",
  backgroundColor = "#fff",
  titleBorderColor = "#000",
}) => {
  const styleSection = {
    backgroundColor: backgroundColor,
  };
  const styleTitle = {
    color: color,
    borderBottom: `1px solid ${titleBorderColor}`,
  };

  return (
    <section className={`content-layout`} id={id} style={styleSection}>
      <div className="layout-wrapper">
        <div className="content-layout-title">
          <FontAwesomeIcon icon={faFire} className="custom-icon" />
          <h2 style={styleTitle}>{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
};

export default ContentLayout;
