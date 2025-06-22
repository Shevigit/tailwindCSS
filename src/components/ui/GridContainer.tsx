// src/components/ui/GridContainer.tsx (או כל נתיב אחר שמתאים לך)
import * as React from "react";
import { cn } from "../../lib/utils"; // וודא שהנתיב נכון ל-cn

// הגדרת ממשק הפרופסים של הקונטיינר
interface GridContainerProps extends React.HTMLAttributes<HTMLDivElement> {

  maxWidth?: "full" | "sm" | "md" | "lg" | "xl";

  gridClasses?: string;
  /**
   * Sets the gap between grid items. Example: "gap-4".
   */
  gap?: string;
  /**
   * Adds top margin. Useful for spacing sections.
   */
  mt?: string;
  /**
   * Adds bottom margin. Useful for spacing sections.
   */
  mb?: string;
  /**
   * Applies padding to the container. Default is often px-4 or px-6.
   */
  padding?: string;
}

export const GridContainer = React.forwardRef<HTMLDivElement, GridContainerProps>(
  (
    {
      className,
      children,
      maxWidth = "lg", // ברירת מחדל: רוחב גדול יחסית
      gridClasses, // קלאסים עבור פריסת הגריד הפנימית
      gap = "gap-4", // ברירת מחדל: מרווח של 1rem (16px)
      mt = "mt-8", // ברירת מחדל: מרווח עליון
      mb = "mb-8", // ברירת מחדל: מרווח תחתון
      padding = "px-4 sm:px-6 lg:px-8", // ריפוד בצדדים
      ...props
    },
    ref
  ) => {
    // הגדרת קלאסים עבור רוחב מקסימלי ומרכוז
    const maxWidthClasses = {
      full: "w-full",
      sm: "max-w-xl", // 512px
      md: "max-w-4xl", // 896px
      lg: "max-w-6xl", // 1152px - נראה מתאים לרוב התמונות ששלחת
      xl: "max-w-7xl", // 1280px
    };

    return (
      <div
        ref={ref}
        className={cn(
          "mx-auto", // מרכוז אופקי
          padding, // ריפוד צדדי
          mt, // מרווח עליון
          mb, // מרווח תחתון
          maxWidthClasses[maxWidth],
          gridClasses && "grid", // אם יש gridClasses, הפוך את הקונטיינר לגריד
          gridClasses, // יישום קלאסי הגריד (לדוגמה: grid-cols-2)
          gap, // מרווחים בין אלמנטים בגריד
          className // קלאסים מותאמים אישית נוספים
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

GridContainer.displayName = "GridContainer";

//זה גריד לאיזה גודל כל אחד בשורהי