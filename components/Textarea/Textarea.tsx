import { StyledTextarea } from './Textarea.styled'
import { TextareaProps } from './Textarea.type'

const Textarea = ({ handleChange, placeholder, style }: TextareaProps) => {
  return (
    <StyledTextarea
      placeholder={placeholder}
      onChange={handleChange}
      style={style}
    />
  )
}

export default Textarea
