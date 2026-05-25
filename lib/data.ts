type IHeaderItem = {
  title: string;
  href: string;
};

export const dataHeader: IHeaderItem[] = [
  {
    title: "Home",
    href: "/home",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Project",
    href: "/project",
  },
];

type IOpenToWork = {
  message: string;
};

const isOpenToWork: boolean = true;

export const openToWork: IOpenToWork = {
  message: isOpenToWork ? "Available for Hire" : "Stay Connected",
};

type IProfile = {
  fullName: string;
  highlightedName: string[];
  description: string;
  highlightedDesc: string[];
  contact: {
    linkedin: string;
    gmail: string;
    github: string;
  };
};

export const dataProfile: IProfile = {
  fullName: "Wahyu Esya Nasution",
  highlightedName: ["Wahyu"],
  description:
    "Computer Science graduate with 1+ year of professional experience as a Frontend Developer, specializing in React.js and Next.js.",
  highlightedDesc: ["Frontend Developer", "1+ year", "React.js", "Next.js"],
  contact: {
    linkedin: "https://www.linkedin.com/in/wahyu-en/",
    gmail: "HdHt2@example.com",
    github: "https://github.com/wahyu-en",
  },
};

export type IProject = {
  title: string;
  description: string; //min 100 characters
  github: string;
  demoLink: string;
  techStack: string[]; // max 5 items
  image: string;
};

export const dataProjects: IProject[] = [
  {
    title: "Portfolio",
    description:
      "The Slider Mobile App is a React Native project featuring two sliders on a single screen, where images automatically slide, while videos are displayed without sliding functionality.",
    github: "https://github.com/wahyu-en/next-portfolio",
    demoLink: "https://next-portfolio.vercel.app/",
    techStack: ["Next.js", "Typescript", "Tailwind CSS", "Supabase"],
    image:
      "https://img.magnific.com/free-photo/beautiful-view-sunset-sea_23-2148019892.jpg?size=626&ext=jpg",
  },
  {
    title: "Portfolio",
    description:
      "This project is a web-based tool management system built with Next.js. It allows users to manage tools, track loans, and view history. Key features include user authentication, tool and loan management, search, pagination, and responsive UI components like tables, forms, and modals for easy interaction.",
    github: "https://github.com/wahyu-en/next-portfolio",
    demoLink: "https://next-portfolio.vercel.app/",
    techStack: ["Next.js", "Tailwind CSS"],
    image:
      "https://img.magnific.com/free-photo/beautiful-view-sunset-sea_23-2148019892.jpg?size=626&ext=jpg",
  },
  {
    title: "Portfolio",
    description:
      "A personal finance tracker with secure authentication and real-time data visualization for income and expense analytics",
    github: "https://github.com/wahyu-en/next-portfolio",
    demoLink: "https://next-portfolio.vercel.app/",
    techStack: ["Next.js", "Tailwind CSS"],
    image:
      "https://img.magnific.com/free-photo/beautiful-view-sunset-sea_23-2148019892.jpg?size=626&ext=jpg",
  },
];
