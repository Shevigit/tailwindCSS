
import * as React from "react";
import { cn } from "../../lib/utils"; // וודא שהנתיב נכון ל-cn
import { CloudUpload, StopCircle } from "lucide-react"; // דוגמאות לאייקונים מ-lucide-react

// הגדרת ממשק הפרופסים של הכפתור
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary-dark" | "danger" | "outline" | "ghost"; // סוגי עיצוב שונים
  size?: "sm" | "md" | "lg"; // גודל הכפתור
  isLoading?: boolean; // מצב טעינה
  icon?: React.ReactNode; // אייקון
  iconPosition?: "left" | "right"; // מיקום האייקון
  fullWidth?: boolean; // האם הכפתור יתפרס לרוחב המלא
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      children,
      variant = "primary-dark", // ברירת מחדל: ירוק
      size = "md", // ברירת מחדל: בינוני
      isLoading = false, // ברירת מחדל: לא בטעינה
      icon,
      iconPosition = "left", // ברירת מחדל: אייקון משמאל
      fullWidth = false, // ברירת מחדל: לא רוחב מלא
      disabled, // מקבל את הפרופ disabled
      ...props
    },
    ref
  ) => {
    // הגדרת קלאסים לפי הווריאנט
    const variantClasses = {
      primary: "bg-primary-dark text-white hover:bg-primary-dark focus:ring-primary-dark",
      danger: "bg-danger text-white hover:bg-red-700 focus:ring-danger", // השתמש ב-red-700 או ב-danger-dark אם תגדיר
      outline: "bg-white text-text-main border border-border hover:bg-muted focus:ring-gray-300",
      ghost: "bg-transparent text-text-main hover:bg-muted focus:ring-gray-300",
    };

    // הגדרת קלאסים לפי הגודל
    const sizeClasses = {
      // sm: "px-4 py-2 text-sm",
      sm: "px-3 py-0.25 text-sm",  
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };

    const isDisabled = disabled || isLoading; 

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-lg font-semibold whitespace-nowrap",
          "transition-colors duration-200 ease-in-out",
          "focus:outline-none focus:ring-2 focus:ring-opacity-50",
          "gap-2", 
          variantClasses[variant],
          sizeClasses[size],
          fullWidth && "w-full", 
          isDisabled && "opacity-70 cursor-not-allowed",
          className
        )}
        disabled={isDisabled}
        {...props}
      >
        {isLoading ? (
          <span className="animate-spin h-5 w-5 border-b-2 border-white rounded-full"></span>
        ) : (
          icon && iconPosition === "left" && icon
        )}

        {isLoading ? "טוען..." : children}

        {!isLoading && icon && iconPosition === "right" && icon}
      </button>
    );
  }
);


Button.displayName = "Button";