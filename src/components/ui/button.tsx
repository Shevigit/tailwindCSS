import { cn } from "../../lib/utils";
import * as React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "danger";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", ...props }, ref) => {
    const base = "px-4 py-2 rounded-md font-medium text-sm transition";
    const variants = {
      primary: "bg-[--color-primary] hover:bg-[--color-primary-dark] text-white",
      outline: "border border-[--color-primary] text-[--color-primary] hover:bg-[--color-primary]/10",
      danger: "bg-red-600 hover:bg-red-700 text-white"
    };
    return (
      <button
        ref={ref}
        className={cn(base, variants[variant], className)}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";