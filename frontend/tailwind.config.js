import daisyui from 'daisyui';
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["light", 
             "dark", 
             "cupcake", 
             "retro", 
             "cyberpunk", 
             "halloween", 
             "forest", 
             "aqua", 
             "coffee", 
             "winter", 
             "dracula",
             "luxury",
             "lemonade",
             "dim",
             "sunset",
             "valentine",
             "garden",
             "synthwave",
            ]
  },
};

