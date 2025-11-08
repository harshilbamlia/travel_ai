/**
 * LAYLA-INSPIRED DESIGN SYSTEM
 * Premium travel platform design tokens and utilities
 */

export const colors = {
  primary: {
    50: '#fdf4ff',
    100: '#fae8ff',
    200: '#f5d0fe',
    300: '#f0abfc',
    400: '#e879f9',
    500: '#d946ef',
    600: '#c026d3',
    700: '#a21caf',
    800: '#86198f',
    900: '#701a75',
  },
  secondary: {
    50: '#f0fdfa',
    100: '#ccfbf1',
    200: '#99f6e4',
    300: '#5eead4',
    400: '#2dd4bf',
    500: '#14b8a6',
    600: '#0d9488',
    700: '#0f766e',
    800: '#115e59',
    900: '#134e4a',
  },
  accent: {
    coral: '#FF6B6B',
    lavender: '#C5A3FF',
    sky: '#4FACFE',
    mint: '#43E97B',
    peach: '#FFBE76',
    rose: '#FF88DC',
  },
  glow: {
    purple: 'rgba(217, 70, 239, 0.5)',
    blue: 'rgba(79, 172, 254, 0.5)',
    pink: 'rgba(255, 136, 220, 0.5)',
    teal: 'rgba(45, 212, 191, 0.5)',
  }
} as const

export const typography = {
  fonts: {
    display: 'var(--font-display)',
    heading: 'var(--font-heading)',
    body: 'var(--font-body)',
  },
  sizes: {
    hero: '6rem',
    displayXl: '5rem',
    displayLg: '4rem',
    displayMd: '3rem',
    h1: '3rem',
    h2: '2.25rem',
    h3: '1.875rem',
    h4: '1.5rem',
    h5: '1.25rem',
    h6: '1rem',
    body: '1rem',
    small: '0.875rem',
    tiny: '0.75rem',
  },
  weights: {
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  }
} as const

export const spacing = {
  xs: '0.5rem',
  sm: '0.75rem',
  md: '1rem',
  lg: '1.5rem',
  xl: '2rem',
  '2xl': '3rem',
  '3xl': '4rem',
  '4xl': '6rem',
  '5xl': '8rem',
} as const

export const borderRadius = {
  sm: '0.5rem',
  md: '0.75rem',
  lg: '1rem',
  xl: '1.5rem',
  '2xl': '2rem',
  '3xl': '3rem',
  full: '9999px',
} as const

export const shadows = {
  soft: '0 2px 40px rgba(0, 0, 0, 0.08)',
  softLg: '0 4px 60px rgba(0, 0, 0, 0.1)',
  float: '0 10px 40px rgba(0, 0, 0, 0.12)',
  floatLg: '0 20px 60px rgba(0, 0, 0, 0.15)',
  glowPurple: '0 0 40px rgba(217, 70, 239, 0.3)',
  glowBlue: '0 0 40px rgba(79, 172, 254, 0.3)',
  glowPink: '0 0 40px rgba(255, 136, 220, 0.3)',
} as const

export const gradients = {
  primary: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  sunset: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
  ocean: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
  mint: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
  peach: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
  lavender: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
  hero: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
} as const

export const animations = {
  durations: {
    fast: '150ms',
    normal: '300ms',
    slow: '500ms',
    slower: '700ms',
  },
  easings: {
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
  }
} as const

// Utility function for class names
export const cn = (...classes: (string | undefined | null | boolean)[]) => {
  return classes.filter(Boolean).join(' ')
}

// Breakpoints
export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const
