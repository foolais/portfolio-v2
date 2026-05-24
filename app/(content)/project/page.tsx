import HighlightedText from "@/components/highlightedText";

const ProjectPage = () => {
  return (
    <section id="project" className="h-dvh w-full section-padding">
      <h2 className="text-2xl font-semibold text-center">
        <HighlightedText
          text="Featured Project"
          highlights={["Featured"]}
          variant="secondary"
        />
      </h2>
    </section>
  );
};

export default ProjectPage;
