export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: '#407bff',
        dark: '#1b1f28',
        light: '#dee9ff',
        page: '#f0f4ff',
        card: '#ffffff',
        'text-primary': '#1a1a2e',
        'text-muted': '#6b7280',
        'accent-hover': '#1a7fe0',
        border: '#e2e8f0',
      },
      borderRadius: {
        sm: '6px',
        md: '12px',
        lg: '20px',
      },
      boxShadow: {
        base: '0 4px 24px rgba(64, 123, 255, 0.08)',
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Raleway', 'sans-serif'],
      },
    },
  },
};
