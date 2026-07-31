import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

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

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
