import { create } from '@storybook/theming'

const theme = {
  fontBase: 'pretendard, sans-serif',
}

export const light = create({
  ...theme,
  base: 'light',
})

export const dark = create({
  ...theme,
  base: 'dark',
})
