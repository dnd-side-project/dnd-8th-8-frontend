import { Color } from 'styled-components'
import { Layout } from './Text.styled'

export interface TextProps {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 't1' | 't2' | 't3' | 't4' | 't5'
  color?: keyof Color
  children?: React.ReactNode
}

const Text = ({ as = 't3', color = 'neutral900', children }: TextProps) => {
  return (
    <Layout as={as} color={color}>
      {children}
    </Layout>
  )
}

export default Text
