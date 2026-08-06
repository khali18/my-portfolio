/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                navy: {
                    950: '#070a12',
                    900: '#0b0f19',
                    850: '#111726',
                    800: '#161f36',
                    700: '#1e293b',
                    600: '#334155',
                },
                electric: {
                    400: '#60a5fa',
                    500: '#38bdf8',
                    600: '#2563eb',
                    700: '#1d4ed8',
                    glow: 'rgba(56, 189, 248, 0.35)',
                },
                emerald: {
                    accent: '#10b981',
                    glow: 'rgba(16, 185, 129, 0.3)',
                }
            },
            fontFamily: {
                sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
                mono: ['"JetBrains Mono"', 'monospace'],
            },
            boxShadow: {
                'glow-blue': '0 0 25px -5px rgba(56, 189, 248, 0.4)',
                'glow-emerald': '0 0 25px -5px rgba(16, 185, 129, 0.4)',
                'glass-light': '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
                'glass-dark': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
            },
            animation: {
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'float': 'float 6s ease-in-out infinite',
                'glow-spin': 'spin 12s linear infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-12px)' },
                }
            }
        },
    },
    plugins: [],
}
