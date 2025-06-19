import { cn } from "../../lib/utils";
import * as React from "react";

export function Card({ className, children }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("bg-white rounded-lg shadow-sm border border-[--color-border] p-4", className)}>
      {children}
    </div>
  );
}
