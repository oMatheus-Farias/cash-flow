/** @type {import('tailwindcss').Config} */
export const darkMode = ["class"]
export const content = [
  "./pages/**/*.{ts,tsx}",
  "./components/**/*.{ts,tsx}",
  "./app/**/*.{ts,tsx}",
  "./src/**/*.{ts,tsx}",
]
export const prefix = ""
export const theme = {
  container: {
    center: true,
    padding: "2rem",
    screens: {
      "2xl": "1400px",
    },
  },
  extend: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    colors: {
      background: "#141414",
    },
    backgroundImage: {
      "radial-gradient-gray":
        "radial-gradient(ellipse at bottom, #A8A8A8 -150%, transparent)",
      "radial-gradient-green":
        "radial-gradient(ellipse at bottom, #55D462 -150%, transparent)",
      "radial-gradient-red":
        "radial-gradient(ellipse at bottom, #FD3E3E -150%, transparent)",
      "radial-gradient-blue":
        "radial-gradient(ellipse at bottom, #589BFF -150%, transparent)",
    },
  },
}
import tailwindcssAnimate from "tailwindcss-animate"

export const plugins = [tailwindcssAnimate]
