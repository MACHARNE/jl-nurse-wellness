import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        // Your original colors
        primary: '#0B1F3A',      // Dark navy blue
        gold: '#C9A14A',          // Gold accent
        background: '#F6F3EF',     // Off-white background
        
        // Extended variations
        'primary-dark': '#08162B',
        'primary-light': '#1A2F4D',
        'gold-dark': '#B08A3A',
        'gold-light': '#D4B16B',
        
        // Additional colors from the new config
        secondary: '#10B981',
        accent: '#C4B5FD',
        'cta-blue': '#2563EB',
        'dark': '#111827',
        'gradient-start': '#0B1F3A',  // Updated to match primary
        'gradient-end': '#C9A14A',     // Updated to match gold
      },
      backgroundColor: {
        DEFAULT: '#F6F3EF',
      },
      borderRadius: {
        'btn': '8px',
      },
      animation: {
        'fadeIn': 'fadeIn 0.8s ease-out',
        'slideUp': 'slideUp 0.6s ease-out',
        'slideInLeft': 'slideInLeft 0.8s ease-out',
        'slideInRight': 'slideInRight 0.8s ease-out',
        'bounce-slow': 'bounce 3s infinite',
        'bounceSlow': 'bounce 3s infinite',  // Added for compatibility
        'pulse-slow': 'pulse 4s infinite',
        'pulseSlow': 'pulse 4s infinite',    // Added for compatibility
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(201, 161, 74, 0.3)' }, // Updated to gold
          '50%': { boxShadow: '0 0 40px rgba(201, 161, 74, 0.6)' },      // Updated to gold
        },
      },
      screens: {
        'xs': '475px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
};

export default config;