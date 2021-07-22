import { createTheme } from "@material-ui/core"

const colors = {
  black: '#131315',
  white: '#ffffff',
  gray: '#808080',
  blue: '#0388fc',
  red: '#f9104a',
  yellow: '#ffdd00',
  pink: '#e88da3',
  turquoise: '#00f5c4',
  orange: '#ff871f',
  copy: '#aaaaaf',
}

const fonts = {
  sans: [
    '-apple-system',
    'system-ui',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
  ].join(','),
}

const fontSizes = {
  '1': '12px',
  '2': '14px',
  '3': '16px',
  '4': '20px',
  '5': '24px',
  '6': '32px',
  '7': '48px',
  '8': '64px',
  '9': '72px',
}

const lineHeights = {
  '1': '18px',
  '2': '21px',
  '3': '24px',
  '4': '30px',
  '5': '36px',
  '6': '48px',
  '7': '72px',
  '8': '96px',
  '9': '108px',
}

const sizes = {
  '1': '4px',
  '2': '8px',
  '3': '16px',
  '4': '32px',
  '5': '64px',
  '6': '128px',
  '7': '256px',
  '8': '512px',
}

const radii = {
  '1': '2px',
  '2': '4px',
  '3': '8px',
  'round': '9999px',
}

const materialOverride = createTheme({
  typography: {
    fontFamily: fonts.sans,
  },
})

export const theme = {
  ...materialOverride,
  colors,
  fonts,
  fontSizes,
  lineHeights,
  sizes,
  radii,
}
