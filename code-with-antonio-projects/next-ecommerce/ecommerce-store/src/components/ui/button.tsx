import { forwardRef } from "react";

import { cn } from "@/libs/utils";

export interface ButtomProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = forwardRef<HTMLButtonElement, ButtomProps>(
  ({ className, children, disabled, type = "button", ...props }, ref) => {
    return (
      <button
        className={cn(
          `w-auto rounded-full border-transparent 
        bg-black px-5 py-3 font-semibold 
        text-white transition hover:opacity-75 disabled:cursor-not-allowed disabled:opacity-50`,
          className,
        )}
        disabled={disabled}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";
