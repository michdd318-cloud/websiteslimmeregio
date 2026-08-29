/** Shared page bootstrap for every entry point (index en voortgang). */
export function boot() {
  // Arm scroll-reveal before first paint (skipped under reduced motion / no JS),
  // so revealed content is hidden up-front without a flash, then animated in.
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document.documentElement.classList.add("reveal-armed");
  }

  // Restore a saved theme choice as early as possible.
  try {
    const saved = localStorage.getItem("aimpact-theme");
    if (saved === "light" || saved === "dark") {
      document.documentElement.setAttribute("data-theme", saved);
    }
  } catch {
    /* localStorage unavailable, fall back to auto */
  }
}
