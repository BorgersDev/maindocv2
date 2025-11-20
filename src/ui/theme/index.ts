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
  error: '#ef4444',
  success: '#22c55e',
} as const;

export const theme = {
  colors,
} as const;