import type { Config } from "tailwindcss";

/**
 * Brand palette (from the school's palette card) and the role each colour plays:
 *
 *  yale    #173B64  Primary. Headings, buttons, menu states, tagline band, footer.
 *  naples  #FFDE70  Accent, used sparingly. Calls to action, ticker, highlight bars.
 *                   Contrast on white is only ~1.3:1, so it is NEVER used for text or thin
 *                   lines on light backgrounds; it is always a fill with Yale text on it (~8.6:1).
 *  powder  #A3C4EB  Secondary. Dividers, rules, icon circles, alternating tiles (with Yale text).
 *  alice   #F6FAFF  Surface. Alternating section backgrounds.
 *
 * Shades and tints below are derived from those four only.
 */
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        yale: { DEFAULT: "#173B64", light: "#24548A", deep: "#0E2846" },
        naples: { DEFAULT: "#FFDE70", dark: "#F5CC45", soft: "#FFF4CF" },
        powder: { DEFAULT: "#A3C4EB", soft: "#E3EDF9", line: "#CADCF2" },
        alice: "#F6FAFF",
        line: "#DCE6F2",
        ink: "#13253B",
        muted: "#4C5F78",
      },
      fontFamily: {
        display: ["var(--font-body)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        crest: ["var(--font-crest)", "Georgia", "serif"],
        deva: ["var(--font-deva)", "serif"],
      },
      maxWidth: { prose: "68ch" },
      boxShadow: {
        card: "0 6px 24px rgba(23, 59, 100, 0.08)",
        lift: "0 14px 34px rgba(23, 59, 100, 0.18)",
        frame: "0 2px 12px rgba(23, 59, 100, 0.22)",
      },
    },
  },
  plugins: [],
};

export default config;
