const dark = {
  mainBackground: '#292B2E',
  primaryText: '#fff',
  secondaryText: 'rgba(255,255,255,0.45)',
  disable: 'rgba(255,255,255,0.25)',
  border: '#d1d5da',
  divider: 'rgba(255, 255, 255, 0.6)',
  background: 'rgb(217, 223, 226)',
  tableHeader: 'rgba(255,255,255,0.02)',
  themeIcon: '#FBE302',
  blue1: '#f1f8ff',
  blue2: '#c0d3eb',
  blue3: '#00adb5',
  green: '#1fab89',
  gray: '#393e46',
}

const light = {
  mainBackground: '#fff',
  primaryText: '#292B2E',
  secondaryText: 'rgba(0, 0, 0, 0.45)',
  disable: 'rgba(0, 0, 0, 0.25)',
  border: '#d1d5da',
  divider: 'rgba(106, 115, 125, 0.3)',
  background: 'rgb(217, 223, 226)',
  tableHeader: 'rgba(0, 0, 0, 0.02)',
  themeIcon: '#1fab89',
  blue1: '#f1f8ff',
  blue2: '#c0d3eb',
  blue3: '#00adb5',
  green: '#1fab89',
  gray: '#393e46',
}

const theme = (mode: 'dark' | 'light') => ({
  color: mode === 'dark' ? dark : light,
  fontSize: {
    xs: '10px',
    sm: '12px',
    md: '16px',
    lg: '20px',
    xl: '24px',
  },
  fontWeight: {
    regular: 400,
    semiBold: 600,
    bold: 700,
    extraBold: 800,
  },
})

export default theme
