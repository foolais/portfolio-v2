import { dataProfile } from "@/lib/data";
import { Button } from "./ui/button";
import { ArrowDown, CircleUserRound, Code, FileText, Mail } from "lucide-react";
import HighlightedText from "./highlightedText";
import ButtonScrollTo from "./buttonScrollTo";

const ContentHero = () => {
  const { fullName, highlightedName, description, highlightedDesc } =
    dataProfile;

  return (
    <section id="hero" className="w-full h-dvh">
      <div className="flex flex-col justify-center items-center h-full">
        <h1 className="text-4xl md:text-6xl font-semibold text-center text-primary-foreground">
          Hi, I&apos;m
          <HighlightedText text={fullName} highlights={highlightedName} />
        </h1>
        <h3 className="text-sm md:text-base text-muted-foreground text-center max-w-3xl mt-6 mb-10">
          <HighlightedText
            text={description}
            highlights={highlightedDesc}
            size="sm"
            variant="accent"
          />
        </h3>
        <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
          <Button
            className="cursor-pointer col-span-3 md:col-span-1 max-w-max mx-auto"
            variant="secondary"
            size="sm"
          >
            <FileText className="btn-icon-sm" />
            Resume
          </Button>
          {Object.entries(dataProfile.contact).map(([key, value]) => (
            <Button
              key={value}
              className="cursor-pointer capitalize"
              variant="outline"
              size="sm"
            >
              {key === "linkedin" && (
                <CircleUserRound className="btn-icon-sm" />
              )}
              {key === "gmail" && <Mail className="btn-icon-sm" />}
              {key === "github" && <Code className="btn-icon-sm" />}
              {key}
            </Button>
          ))}
        </div>
        <div className="mt-10">
          <ButtonScrollTo id="project" isAnimated>
            <ArrowDown className="size-8" />
          </ButtonScrollTo>
        </div>
      </div>
    </section>
  );
};

export default ContentHero;
