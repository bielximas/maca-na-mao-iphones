/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          purple: "#6624D8",
          "purple-hover": "#541cb8",
          "purple-light": "#894bf5",
          "purple-soft": "#F3EBFF",
          pink: "#FF3C91",
          "pink-hover": "#e6267b",
          "pink-soft": "#FFEBF4",
          orange: "#FF9B32",
          "orange-hover": "#e8861d",
          blue: "#0870B4",
          "blue-hover": "#065990",
          yellow: "#FFC72C",
          bg: "#FFF7FB",
          dark: "#161329",
          "dark-card": "#211D3B",
          "dark-border": "#2E2950",
          text: "#201B32",
          muted: "#726B82",
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      boxShadow: {
        'apple-sm': '0 2px 8px -2px rgba(102, 36, 216, 0.08), 0 1px 4px -1px rgba(0, 0, 0, 0.04)',
        'apple-md': '0 8px 24px -4px rgba(102, 36, 216, 0.12), 0 4px 12px -2px rgba(0, 0, 0, 0.05)',
        'apple-lg': '0 16px 40px -8px rgba(102, 36, 216, 0.18), 0 8px 20px -4px rgba(0, 0, 0, 0.08)',
        'apple-glow': '0 0 35px -5px rgba(102, 36, 216, 0.45)',
        'pink-glow': '0 0 35px -5px rgba(255, 60, 145, 0.45)',
      },
      borderRadius: {
        '2xl': '1.25rem',
        '3xl': '1.75rem',
        '4xl': '2.25rem',
      },
    },
  },
  plugins: [],
}
