import { Color } from 'styled-components'
import { Layout } from './Button.styled'

export interface ButtonProps {
  icon?: React.ReactNode
  backgroundColor?: keyof Color | '#F6DB4F' // kakao
  color?: keyof Color
  disabled?: boolean
  shadow?: boolean
  fullWidth?: boolean
  children: React.ReactNode
  onClick?: () => void
}

const Button = ({
  icon,
  backgroundColor = 'secondary500',
  color = 'neutral0',
  disabled = false,
  shadow = false,
  fullWidth = false,
  children,
  onClick,
}: ButtonProps) => (
  <Layout
    backgroundColor={backgroundColor}
    color={color}
    disabled={disabled}
    shadow={shadow}
    fullWidth={fullWidth}
    onClick={onClick}
  >
    {icon}
    {children}
  </Layout>
)

export default Button
