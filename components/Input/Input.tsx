import { Icon } from '../Icon'
import { Layout, StyledInput } from './Input.styled'
import { InputProps } from './Input.types'

const Input = ({
  placeholder,
  handleChange,
  searchIcon = false,
  borderStyle = false,
  style,
}: InputProps) => {
  return (
    <Layout borderStyle={borderStyle}>
      {searchIcon && <Icon name="search" color="neutral800" />}
      <StyledInput
        placeholder={placeholder}
        onChange={handleChange}
        style={style}
      />
    </Layout>
  )
}

export default Input
