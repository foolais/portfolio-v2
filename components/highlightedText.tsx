type IProps = {
  text: string;
  highlights: string[];
  variant?: "primary" | "secondary" | "accent";
  size?: "default" | "sm";
};

const HighlightedText = ({
  text,
  highlights,
  variant = "primary",
  size = "default",
}: IProps) => {
  // so 1+ can hightlighted
  const escapedHighlights = highlights.map((word) =>
    word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
  );
  const regex = new RegExp(`(${escapedHighlights.join("|")})`, "gi");

  const parts = text.split(regex);

  return (
    <>
      {parts.map((part, index) => {
        const isHighlighted = highlights.some(
          (word) => word.toLowerCase() === part.toLowerCase()
        );

        const variantClass = {
          primary: "bg-primary",
          secondary: "bg-secondary",
          accent: "bg-accent",
        };

        const backgroundColor = variantClass[variant];
        const sizeClass = size === "default" ? "py-2 px-3" : "p-0.5";

        return (
          <span
            key={index}
            className={
              isHighlighted
                ? `-rotate-4 shadow-neo inline-flex shadow-neo-press cursor-pointer hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-300 ease-in-out ${backgroundColor} ${sizeClass}`
                : ""
            }
          >
            {part}
          </span>
        );
      })}
    </>
  );
};

export default HighlightedText;
