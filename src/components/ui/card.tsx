import { cn } from "../../lib/utils";
import * as React from "react";

export const CardSimple=({ className, children }: React.HTMLAttributes<HTMLDivElement>)=> {
  return (
    <div className={cn("bg-white rounded-lg shadow-sm border border-[--color-border] p-4", className)}>
      {children}
    </div>
  );
}




export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  category?: string;
  description: string;
  actionLabel?: string;
}
export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ title, category, description, actionLabel = "הורדה", className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-xl border border-gray-200 bg-white shadow-md p-6 flex flex-col justify-between min-h-[240px] max-w-sm w-full",
          className
        )}
        {...props}
      >
        <div className="mb-6 space-y-2">
          <div className="text-sm text-primary font-semibold flex items-center gap-1">
            <span className="text-xl">:page_facing_up:</span> {category || "מידע"}
          </div>
          <h3 className="text-xl font-bold text-gray-900 leading-tight">
            {title}
          </h3>
          <p className="text-sm text-slate-500 leading-snug">
            {description}
          </p>
        </div>
        <button className="mt-auto w-full bg-primary hover:bg-primary-dark text-white py-2.5 rounded-xl text-sm font-semibold transition">
          {actionLabel}
        </button>
      </div>
    );
  }
);
Card.displayName = "Card";

