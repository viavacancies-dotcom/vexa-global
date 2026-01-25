import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    fontFamily: {
      garet: ["Garet", "system-ui", "-apple-system", "sans-serif"],
      serif: ["Garet", "system-ui", "-apple-system", "sans-serif"],
      sans: ["Garet", "system-ui", "-apple-system", "sans-serif"],
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          light: "hsl(var(--primary-light))",
          dark: "hsl(var(--primary-dark))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
          geopolitics: "hsl(var(--accent-geopolitics))",
          relations: "hsl(var(--accent-relations))",
          economics: "hsl(var(--accent-economics))",
          technology: "hsl(var(--accent-technology))",
          energy: "hsl(var(--accent-energy))",
          regional: "hsl(var(--accent-regional))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "fade-in": {
          from: {
            opacity: "0",
          },
          to: {
            opacity: "1",
          },
        },
        "fade-in-up": {
          from: {
            opacity: "0",
            transform: "translateY(24px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-in-up-subtle": {
          from: {
            opacity: "0",
            transform: "translateY(8px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-in-down": {
          from: {
            opacity: "0",
            transform: "translateY(-12px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-in-left": {
          from: {
            opacity: "0",
            transform: "translateX(-12px)",
          },
          to: {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        "fade-in-right": {
          from: {
            opacity: "0",
            transform: "translateX(12px)",
          },
          to: {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        "scale-in": {
          from: {
            opacity: "0",
            transform: "scale(0.92)",
          },
          to: {
            opacity: "1",
            transform: "scale(1)",
          },
        },
        "scale-in-bounce": {
          "0%": {
            opacity: "0",
            transform: "scale(0.88)",
          },
          "60%": {
            opacity: "1",
            transform: "scale(1.02)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)",
          },
        },
        "slide-in-left": {
          from: {
            opacity: "0",
            transform: "translateX(-16px)",
          },
          to: {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        "slide-in-right": {
          from: {
            opacity: "0",
            transform: "translateX(16px)",
          },
          to: {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        "bounce-in": {
          "0%": {
            opacity: "0",
            transform: "scale(0.3)",
          },
          "50%": {
            opacity: "1",
            transform: "scale(1.05)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)",
          },
        },
        "slide-up": {
          from: {
            transform: "translateY(20px)",
          },
          to: {
            transform: "translateY(0)",
          },
        },
        "glow-pulse": {
          "0%, 100%": {
            boxShadow: "0 0 0 0 rgba(var(--primary), 0.3)",
          },
          "50%": {
            boxShadow: "0 0 0 8px rgba(var(--primary), 0)",
          },
        },
        "caret-blink": {
          "0%, 100%": {
            opacity: "1",
          },
          "50%": {
            opacity: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
        "accordion-up": "accordion-up 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
        "fade-in": "fade-in 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",
        "fade-in-up": "fade-in-up 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",
        "fade-in-up-subtle": "fade-in-up-subtle 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
        "fade-in-down": "fade-in-down 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",
        "fade-in-left": "fade-in-left 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)",
        "fade-in-right": "fade-in-right 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)",
        "scale-in": "scale-in 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)",
        "scale-in-bounce": "scale-in-bounce 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",
        "slide-in-left": "slide-in-left 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)",
        "slide-in-right": "slide-in-right 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)",
        "bounce-in": "bounce-in 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)",
        "slide-up": "slide-up 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)",
        "glow-pulse": "glow-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "caret-blink": "caret-blink 1s steps(1, end) infinite",
      },
      scale: {
        102: "1.02",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
