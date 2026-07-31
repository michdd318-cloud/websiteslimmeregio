import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** shadcn-style className helper: merge conditional classes + de-dupe Tailwind. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Resolve a public asset path, honouring Vite's base (works on subpath hosting). */
export function asset(path: string) {
  const base = import.meta.env.BASE_URL || "/";
  return `${base}${path.replace(/^\/+/, "")}`;
}
