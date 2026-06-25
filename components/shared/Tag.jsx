import { cn } from "@/lib/utils";

/**
 * Tag / Chip component
 * Used for case study categories, skills, etc.
 *
 * Variants: "default" | "outline" | "dark"
 */
export default function Tag({ children, variant = "default", className }) {
  const variants = {
    default: "bg-muted text-muted-foreground border border-border",
    outline: "bg-transparent text-foreground border border-border",
    dark: "bg-foreground text-background",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium tracking-wide",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
