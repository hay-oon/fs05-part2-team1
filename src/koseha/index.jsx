import "./style.css";
import Summary from "./sections/Summary";
import ScrollButton from "./features/buttons/ScrollButton";
import AboutMe from "./sections/AboutMe";
import ContentLayout from "./features/layouts/ContentLayout";
import Skills from "./sections/Skills";

const Seha = () => {
  return (
    <div class="seha">
      <Summary>
        <ScrollButton />
      </Summary>
      {/* header-nav : sticky */}
      <ContentLayout title="ABOUT ME" id="aboutMe">
        <AboutMe />
      </ContentLayout>
      {/* skills */}
      <ContentLayout title="SKILLS" id="skills" backgroundColor="#f9c51d">
        <Skills />
      </ContentLayout>
      {/* projects */}
    </div>
  );
};

export default Seha;
