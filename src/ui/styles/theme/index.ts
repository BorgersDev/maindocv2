const colors = {
  white: '#fff',
  blue: {
    400: '#3b82f6',
    500: '#2563eb',
    600: '#1d4ed8',
    700: '#1e40af',
    800: '#1e3a8a',
    900: '#172554',
  },
  gray: {
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827',
  },
  black: {
    600: '#1e293b',
    700: '#18181b',
    800: '#09090b',
    900: '#000000',
  },
  error: '#ff0000',
  success: '#22c55e',
} as const;

const fontFamily = {
  sans: {
    regular: 'HostGrotesk_400Regular',
    medium: 'HostGrotesk_500Medium',
    semiBold: 'HostGrotesk_600SemiBold',
  }
} as const;

const fontSize ={
  xs: 12,
  sm: 14,
  base: 16,
  lg: 20,
  xl: 24,
  '2xl': 28,
  '3xl': 32,
  '4xl': 36,
  '5xl': 40,
} as const;

export const theme = {
  colors, fontFamily, fontSize
} as const;