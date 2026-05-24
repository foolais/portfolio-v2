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
