export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: '#407bff',
        'brand-dark': '#1b1f28',
        'brand-light': '#dee9ff',
        dark: '#1b1f28',
        light: '#dee9ff',
        page: '#fafafa',
        card: '#ffffff',
        'text-primary': '#0f0f12',
        'text-muted': '#5b5f66',
        'text-faint': '#8a8e95',
        'accent-hover': '#1a7fe0',
        border: '#e6e6e8',
      },
      borderRadius: {
        sm: '0px',
        md: '2px',
        lg: '4px',
      },
      fontFamily: {
        heading: ['Cabinet Grotesk', 'Archivo', 'sans-serif'],
        display: ['Cabinet Grotesk', 'Archivo', 'sans-serif'],
        body: ['Switzer', 'system-ui', 'sans-serif'],
      },
    },
  },
};
