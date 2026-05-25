import ButtonShowMore from "./buttonShowMore";
import HighlightedText from "./highlightedText";
import ProjectCardContainer from "./projectCardContainer";

const ContentProject = () => {
  return (
    <section id="project" className="h-dvh w-full section-padding">
      <h2 className="text-2xl font-semibold text-center mb-8">
        <HighlightedText
          text="Featured Project"
          highlights={["Featured"]}
          variant="secondary"
        />
      </h2>
      <ProjectCardContainer />
      <div className="w-full flex items-center justify-center mt-8">
        <ButtonShowMore href="/project" />
      </div>
    </section>
  );
};

export default ContentProject;
