import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded-lg border-[3px] border-primary-foreground text-sm font-semibold transition-all duration-150 select-none outline-none shadow-neo active:translate-x-1 active:translate-y-1 active:shadow-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-neo-lg",
        outline:
          "bg-background text-primary-foreground hover:bg-accent hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-neo-lg",
        secondary:
          "bg-secondary text-primary-foreground hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-neo-lg",
        accent:
          "bg-accent text-primary-foreground hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-neo-lg",
        ghost:
          "bg-muted text-primary-foreground hover:bg-accent hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-neo-lg",
        destructive:
          "bg-red-400 text-destructive-foreground hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-neo-lg",
        link: "shadow-none bg-transparent underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-5",
        xs: "h-7 px-2 text-xs",
        sm: "h-9 px-3 text-sm",
        lg: "h-12 px-6 text-base",
        icon: "size-10",
        "icon-xs": "size-7",
        "icon-sm": "size-9",
        "icon-lg": "size-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot.Root : "button";

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
