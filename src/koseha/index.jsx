import "./style.css";
import Summary from "./sections/Summary";
import ScrollButton from "./features/buttons/ScrollButton";
import AboutMe from "./sections/AboutMe";
import ContentLayout from "./features/layouts/ContentLayout";
import Skills from "./sections/Skills";
import Archiving from "./sections/Archiving";
import GitHubYearContributions from "./features/contributions/GitHubContributions";

const Seha = () => {
  return (
    <div className="seha">
      <Summary>
        <ScrollButton to={"#aboutMe"} />
      </Summary>
      {/* header-nav : sticky */}
      <ContentLayout title="ABOUT ME" id="aboutMe">
        <AboutMe />
      </ContentLayout>
      {/* skills */}
      <ContentLayout title="SKILLS" id="skills" backgroundColor="#f9c51d">
        <Skills />
      </ContentLayout>
      {/* archiving */}
      <ContentLayout
        title="ARCHIVING"
        id="archiving"
        backgroundColor="#222222"
        color="#ffffff"
        titleBorderColor="#6c757d"
      >
        <Archiving />
      </ContentLayout>
      <ContentLayout title="WITH CODEIT" id="codeit" backgroundColor="#ebebeb">
        <GitHubYearContributions />
      </ContentLayout>
      {/* projects */}
    </div>
  );
};

export default Seha;
