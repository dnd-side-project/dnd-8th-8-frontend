import { create } from '@storybook/theming'

const theme = {
  brandTitle: 'Wedding map',
  fontBase: 'pretendard, sans-serif',
}

export const light = create({
  ...theme,
  base: 'light',
  brandImage: '/images/logo.light.svg',

  colorPrimary: '#F693E1',
  colorSecondary: '#192EA1',
})

export const dark = create({
  ...theme,
  base: 'dark',
  brandImage: '/images/logo.dark.svg',

  colorPrimary: '#192EA1',
  colorSecondary: '#F693E1',

  appBg: '#0D1117',
  barBg: '#161B22',
  appContentBg: '#161B22',
  inputBg: '#0D1117',
})
