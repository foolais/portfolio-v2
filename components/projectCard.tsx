import { IProject } from "@/lib/data";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import { Button } from "./ui/button";
import { CodeXml, Globe, ArrowUpRight } from "lucide-react";

type IProps = {
  item: IProject;
};

const ProjectCard = ({ item }: IProps) => {
  return (
    <Card className="group h-full flex flex-col overflow-hidden p-0 gap-0 transition-all duration-300 hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
      <div className="relative h-56 overflow-hidden">
        <Image
          alt={item.title}
          src={item.image}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            {item.title}
            <Button variant="ghost" size="xs" className="cursor-pointer">
              <ArrowUpRight className="size-4" />
            </Button>
          </h3>
        </div>
      </div>
      <CardContent className="flex flex-col flex-1 px-6 py-4">
        <p className="text-sm text-muted-foreground leading-6 line-clamp-3 min-h-[72px] mb-5">
          {item.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {item.techStack.map((tech) => (
            <Button
              key={tech}
              variant="outline"
              size="xs"
              className="cursor-pointer"
            >
              {tech}
            </Button>
          ))}
        </div>
        <div className="flex items-center justify-end mt-auto gap-4">
          <Button variant="secondary" className="cursor-pointer" size="sm">
            <CodeXml className="btn-icon-sm" />
            Github
          </Button>
          <Button className="cursor-pointer" size="sm">
            <Globe className="btn-icon-sm" />
            Demo
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
