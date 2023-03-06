export interface TextareaProps {
  handleChange: (e: React.FormEvent<HTMLTextAreaElement>) => void
  placeholder?: string
  style?: React.CSSProperties
}
