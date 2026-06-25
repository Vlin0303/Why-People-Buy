import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge Tailwind classes safely without conflicts.
 * Usage: cn("px-4 py-2", isActive && "bg-black", className)
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
