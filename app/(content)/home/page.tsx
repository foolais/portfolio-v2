import ContentHero from "@/components/contentHero";
import ProjectPage from "../project/page";
import ButtonScrollTo from "@/components/buttonScrollTo";
import { ArrowUp } from "lucide-react";

const HomePage = () => {
  return (
    <div className="relative">
      <ContentHero />
      <ProjectPage />
      <div className="fixed bottom-5 right-5 md:bottom-10 md:right-10">
        <ButtonScrollTo id="hero">
          <ArrowUp className="size-8" />
        </ButtonScrollTo>
      </div>
    </div>
  );
};

export default HomePage;
