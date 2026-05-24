"use client";

import { Button } from "./ui/button";

type IProps = {
  id: string;
  children: React.ReactNode;
  isAnimated?: boolean;
};

const ButtonScrollTo = ({ id, children, isAnimated = false }: IProps) => {
  const handleScrollToProject = () => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={handleScrollToProject}
      className={`cursor-pointer p-1 ${isAnimated && "animate-bounce"}`}
      asChild
    >
      {children}
    </Button>
  );
};

export default ButtonScrollTo;
