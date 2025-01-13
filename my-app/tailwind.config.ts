import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Roboto", "Noto Sans", "ui-sans-serif", "system-ui"],
      serif: ["ui-serif", "Georgia"],
      mono: ["ui-monospace", "SFMono-Regular"],
    },
    extend: {
      backgroundImage: {
        "stars-img": "url('/images/stars.jpg')",
        "astronaut-img": "url('/images/astronaut.png')",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      boxShadow: {
        "text-shadow": "3px 0px #DA0463",
      },
      borderWidth: {
        "10": "10px",
      },
    },
  },
  plugins: [],
};

export default config;
