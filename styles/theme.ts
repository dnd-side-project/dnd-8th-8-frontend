import {
  Color,
  DefaultTheme,
  FontSize,
  FontWeight,
  LetterSpacing,
  LineHeight,
} from 'styled-components'

const color: Color = {
  neutral0: '#ffffff',
  neutral100: '#f4f4f4',
  neutral300: '#d8dae5',
  neutral400: '#cdcfdc',
  neutral500: '#b4b6c5',
  neutral600: '#767C95',
  neutral800: '#474d66',
  neutral900: '#0f0e2d',

  primary0: '#fff6fd',
  primary100: '#ffd4f6',
  primary500: '#F693E1',
  primary600: '#f152c5',
  primary900: '#900072',

  secondary0: '#f5f6ff',
  secondary100: '#eaedff',
  secondary300: '#b5bff2',
  secondary400: '#6a7de0',
  secondary500: '#283FBC',
  secondary800: '#192EA1',
  secondary900: '#0d1b27',

  green: '#34CB8C',
}

const fontSize: FontSize = {
  h1: 40,
  h2: 30,
  h3: 24,
  h4: 18,
  h5: 14,
  t1: 24,
  t2: 18,
  t3: 16,
  t4: 14,
  t5: 12,
  t6: 10,
}

const MEDIUM = 500
const SEMI_BOLD = 600
const BOLD = 700

const fontWeight: FontWeight = {
  h1: SEMI_BOLD,
  h2: BOLD,
  h3: SEMI_BOLD,
  h4: SEMI_BOLD,
  h5: SEMI_BOLD,
  t1: MEDIUM,
  t2: MEDIUM,
  t3: MEDIUM,
  t4: MEDIUM,
  t5: MEDIUM,
  t6: BOLD,
}

const lineHeight: LineHeight = {
  h1: 64,
  h2: 36,
  h3: 32,
  h4: 24,
  h5: 18,
  t1: 32,
  t2: 24,
  t3: 24,
  t4: 20,
  t5: 18,
  t6: 18,
}

const letterSpacing: LetterSpacing = {
  h1: -1.5,
  h2: -1.5,
  h3: -1,
  h4: -0.5,
  h5: -0.5,
  t1: -0.5,
  t2: -0.5,
  t3: -0.5,
  t4: -0.5,
  t5: -0.5,
  t6: -0.5,
}

const theme: DefaultTheme = {
  color,
  fontSize,
  fontWeight,
  lineHeight,
  letterSpacing,
}

export default theme
