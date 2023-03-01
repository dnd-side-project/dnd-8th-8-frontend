export interface InputProps {
  placeholder?: string
  handleChange: (e: React.FormEvent<HTMLInputElement>) => void
  searchIcon?: boolean
  borderStyle?: boolean
  style?: React.CSSProperties
}
