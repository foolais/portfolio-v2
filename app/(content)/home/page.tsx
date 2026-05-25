import ContentHero from "@/components/contentHero";
import ContentProject from "@/components/contentProject";
import ButtonScrollTo from "@/components/buttonScrollTo";
import { ArrowUp } from "lucide-react";

const HomePage = () => {
  return (
    <div className="relative">
      <ContentHero />
      <ContentProject />
      <div className="fixed bottom-5 right-5 md:bottom-10 md:right-10">
        <ButtonScrollTo id="hero">
          <ArrowUp className="size-8" />
        </ButtonScrollTo>
      </div>
    </div>
  );
};

export default HomePage;
