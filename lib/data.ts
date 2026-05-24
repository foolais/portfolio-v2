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
