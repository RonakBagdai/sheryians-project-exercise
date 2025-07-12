/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "fade-in-up": "fadeInUp 0.6s ease-out",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        shimmer: "shimmer 2s infinite",
        dots: "dots 1.5s steps(5, end) infinite",
      },
      keyframes: {
        fadeInUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        shimmer: {
          "0%": {
            backgroundPosition: "-200px 0",
          },
          "100%": {
            backgroundPosition: "calc(200px + 100%) 0",
          },
        },
        dots: {
          "0%, 20%": {
            content: '""',
          },
          "40%": {
            content: '"."',
          },
          "60%": {
            content: '".."',
          },
          "80%, 100%": {
            content: '"..."',
          },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".glass": {
          background: "rgba(255, 255, 255, 0.05)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
        },
        ".hover-lift": {
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          "&:hover": {
            transform: "translateY(-4px)",
            boxShadow:
              "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
          },
        },
        ".focus-ring": {
          "@apply focus:outline-none focus:ring-4 focus:ring-blue-500/30 focus:border-blue-500":
            {},
        },
        ".loading-dots::after": {
          content: '""',
          animation: "dots 1.5s steps(5, end) infinite",
        },
        ".shimmer-bg": {
          background:
            "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)",
          backgroundSize: "200px 100%",
          animation: "shimmer 2s infinite",
        },
      });
    },
  ],
};
