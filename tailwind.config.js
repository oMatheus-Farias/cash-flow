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
    colors: {
      background: "#141414",
    },
  },
}
import tailwindcssAnimate from "tailwindcss-animate"

export const plugins = [tailwindcssAnimate]
