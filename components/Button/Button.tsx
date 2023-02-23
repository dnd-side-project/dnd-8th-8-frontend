import { Color } from 'styled-components'
import { Layout } from './Button.styled'

export interface ButtonProps {
  icon?: React.ReactNode
  backgroundColor?: keyof Color | '#F6DB4F' // kakao
  disabled?: boolean
  shadow?: boolean
  fullWidth?: boolean
  children: React.ReactNode
  border?: boolean
  borderColor?: keyof Color
  borderRadius?: string
  active?: boolean
  width?: string
  height?: string
  onClick?: () => void
}

const Button = ({
  icon,
  backgroundColor = 'secondary500',
  disabled = false,
  shadow = false,
  fullWidth = false,
  border = false,
  borderColor = 'secondary300',
  borderRadius = '10px',
  active = false,
  width = 'auto',
  height = 'auto',
  children,
  onClick,
}: ButtonProps) => (
  <Layout
    backgroundColor={backgroundColor}
    disabled={disabled}
    shadow={shadow}
    fullWidth={fullWidth}
    border={border}
    borderColor={borderColor}
    borderRadius={borderRadius}
    active={active}
    width={width}
    height={height}
    onClick={onClick}
  >
    {icon}
    {children}
  </Layout>
)

export default Button
