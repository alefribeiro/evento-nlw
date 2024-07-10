import { ComponentProps, ReactNode } from "react";
import { tv, VariantProps } from "tailwind-variants";

const buttonVariant = tv({
  base: "rounded px-5 py-2 font-medium flex items-center gap-2",
  variants: {
    variant: {
      primary: "bg-lime-300 text-lime-950 hover:bg-lime-400",
      secondary: "bg-zinc-800 text-zinc-200  hover:bg-zinc-700",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

interface ButtonProps
  extends ComponentProps<"button">,
    VariantProps<typeof buttonVariant> {
  children: ReactNode;
}

export function Button({ children, variant, ...props }: ButtonProps) {
  return (
    <button {...props} className={buttonVariant({ variant })}>
      {children}
    </button>
  );
}
