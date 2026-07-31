import { useCallback, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const THEME_KEY = "aimpact-theme";

/** Light/dark/auto theme control. Icon state is handled in CSS via [data-theme]. */
export function useThemeToggle() {
  return useCallback(() => {
    const root = document.documentElement;
    const attr = root.getAttribute("data-theme");
    const effective =
      attr === "light" || attr === "dark"
        ? attr
        : window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light";
    const next = effective === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try {
      localStorage.setItem(THEME_KEY, next);
    } catch {
      /* ignore */
    }
  }, []);
}

/** Adds a class to the header once the page is scrolled past the top. */
export function useHeaderScrolled() {
  const sentinelRef = useRef<HTMLDivElement>(null);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const el = sentinelRef.current;
    if (!el || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(([entry]) => setScrolled(!entry.isIntersecting));
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return { sentinelRef, scrolled };
}

/** GSAP scroll-reveal for all `.reveal` elements. Honors reduced motion. */
export function useReveal() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      const els = gsap.utils.toArray<HTMLElement>(".reveal");
      els.forEach((el) => {
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
        });
      });
    });
    ScrollTrigger.refresh();
    return () => ctx.revert();
  }, []);
}
