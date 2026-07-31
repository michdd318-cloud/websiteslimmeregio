import animate from "tailwindcss-animate";

/**
 * Colors, radii and shadows are driven by CSS custom properties defined in
 * src/index.css. Those tokens flip for light/dark (via prefers-color-scheme and
 * [data-theme]), so utilities like `bg-surface text-ink` are theme-aware without
 * needing the `dark:` variant.
 * @type {import('tailwindcss').Config}
 */
export default {
  darkMode: ["selector", '[data-theme="dark"]'],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        surface: "var(--surface)",
        "surface-2": "var(--surface-2)",
        ink: "var(--ink)",
        "ink-soft": "var(--ink-soft)",
        muted: "var(--muted)",
        line: "var(--line)",
        "line-strong": "var(--line-strong)",
        accent: "var(--accent)",
        "accent-strong": "var(--accent-strong)",
        "accent-tint": "var(--accent-tint)",
        "accent-contrast": "var(--accent-contrast)",
      },
      borderRadius: {
        token: "var(--radius)",
        "token-sm": "var(--radius-sm)",
        "token-lg": "var(--radius-lg)",
      },
      boxShadow: {
        token: "var(--shadow-sm)",
        "token-md": "var(--shadow-md)",
        halo: "var(--shadow-halo)",
      },
      maxWidth: {
        wrap: "1160px",
        "wrap-narrow": "800px",
      },
      fontFamily: {
        sans: [
          '"Segoe UI"',
          "system-ui",
          "-apple-system",
          '"Helvetica Neue"',
          "Arial",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [animate],
};
