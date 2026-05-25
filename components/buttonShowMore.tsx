import Link from "next/link";
import { Button } from "./ui/button";

type IProps = {
  href: string;
};

const ButtonShowMore = ({ href }: IProps) => {
  return (
    <Button variant="outline" size="sm" asChild>
      <Link href={href} scroll>
        Show More
      </Link>
    </Button>
  );
};

export default ButtonShowMore;
