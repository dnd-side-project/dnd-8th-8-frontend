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
  border?: boolean
  borderColor?: keyof Color
  borderRadius?: string
  onClick?: () => void
}

const Button = ({
  icon,
  backgroundColor = 'secondary500',
  color = 'neutral0',
  disabled = false,
  shadow = false,
  fullWidth = false,
  border = false,
  borderColor = 'secondary300',
  borderRadius = '10px',
  children,
  onClick,
}: ButtonProps) => (
  <Layout
    backgroundColor={backgroundColor}
    color={color}
    disabled={disabled}
    shadow={shadow}
    fullWidth={fullWidth}
    border={border}
    borderColor={borderColor}
    borderRadius={borderRadius}
    onClick={onClick}
  >
    {icon}
    {children}
  </Layout>
)

export default Button
