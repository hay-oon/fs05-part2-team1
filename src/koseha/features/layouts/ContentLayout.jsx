import "./ContentLayout.css";
import { FlameOutline } from "react-ionicons";

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
      <div className="content-layout-title">
        <FlameOutline width="44px" height="44px" color={"#f4623a"} />
        <h2 style={styleTitle}>{title}</h2>
      </div>
      {children}
    </section>
  );
};

export default ContentLayout;
