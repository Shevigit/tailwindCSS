import React from "react";
import { cn } from "../../lib/utils";
import { useLocation } from "react-router-dom";

export interface SidebarProps extends React.HTMLAttributes<HTMLElement> {
  variant?: "default" | "minimal" | "boxed";
}

interface NavItem {
  label: string;
  href: string;
  isSectionTitle?: boolean;
}

const navItems: NavItem[] = [
  { label: "בית", href: "/home" },
  { label: "סימולציה", href: "/simulation" },
  { label: "דשבורד", href: "/dashboard" },
  { label: "הקלטות שלי", href: "/my-recordings" },
  { label: "הקלטות ששיתפו", href: "/shared-recordings" },
  { label: "מאגר מידע", href: "/knowledge-base" },
  { label: "ניהול", href: "", isSectionTitle: true },
  { label: "ניהול שאלות", href: "/manage-questions" },
  { label: "ניהול משתמשים", href: "/manage-users" },
  { label: "ניהול מאגר", href: "/manage-knowledge" },
];

export const SidebarNavigation = React.forwardRef<HTMLElement, SidebarProps>(
  ({ className, variant = "default", ...props }, ref) => {
    const location = useLocation();

    const base = "text-right";
    const variants = {
      default: "bg-white w-64 p-4 shadow-md",
      minimal: "bg-transparent w-56 p-2",
      boxed: "bg-muted border rounded-xl w-64 p-4 shadow-sm",
    };

    return (
      <aside
        ref={ref}
        className={cn(base, variants[variant], className)}
        {...props}
      >
        <h1 className="text-xl font-bold text-[--text-main] mb-6">Interview Pro</h1>
        <nav className="flex flex-col gap-2">
          {navItems.map(({ label, href, isSectionTitle }) =>
            isSectionTitle ? (
              <div
                key={label}
                className="text-[--text-secondary] text-sm mt-4 mb-1 font-medium"
              >
                {label}
              </div>
            ) : (
              <a
                key={label}
                href={href}
                className={cn(
                  "block px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200",
                  location.pathname === href
                    ? "bg-[--color-primary] text-white"
                    : "text-[--text-main] hover:bg-[--color-primary] hover:text-white"
                )}
              >
                {label}
              </a>
            )
          )}
        </nav>
      </aside>
    );
  }
);
SidebarNavigation.displayName = "SidebarNavigation";
