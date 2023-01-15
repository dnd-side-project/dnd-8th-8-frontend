import { Layout } from './Button.styled'
import { ButtonProps } from './Button.types'

const Button = ({ children, disabled = false, ...rest }: ButtonProps) => (
  <Layout disabled={disabled} {...rest}>
    {children}
  </Layout>
)

export default Button
