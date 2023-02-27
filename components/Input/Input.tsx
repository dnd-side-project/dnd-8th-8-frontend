import { Icon } from '../Icon'
import { Layout, StyledInput } from './Input.styled'
import { InputProps } from './Input.types'

const Header = ({ placeholder, handleChange }: InputProps) => {
  return (
    <Layout>
      <Icon name="search" color="neutral800" />
      <StyledInput placeholder={placeholder} onChange={handleChange} />
    </Layout>
  )
}

export default Header
