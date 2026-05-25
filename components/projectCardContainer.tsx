import { dataProjects } from "@/lib/data";
import ProjectCard from "./projectCard";

const ProjectCardContainer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {dataProjects.map((item, index) => {
        return <ProjectCard key={index} item={item} />;
      })}
    </div>
  );
};

export default ProjectCardContainer;
