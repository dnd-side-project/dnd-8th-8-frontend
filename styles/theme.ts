import {
  Color,
  DefaultTheme,
  FontSize,
  FontWeight,
  LineHeight,
} from 'styled-components'

const color: Color = {
  neutral0: '#ffffff',
  neutral100: '#f4f4f4',
  neutral300: '#d8dae5',
  neutral400: '#cdcfdc',
  neutral500: '#b4b6c5',
  neutral800: '#474d66',
  neutral900: '#0f0e2d',

  primary0: '#fff6fd',
  primary500: '#F693E1',
  primary900: '#900072',

  secondary0: '#EAEDFF',
  secondary500: '#283FBC',
  secondary900: '#192EA1',
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
}

const theme: DefaultTheme = {
  color,
  fontSize,
  fontWeight,
  lineHeight,
}

export default theme
