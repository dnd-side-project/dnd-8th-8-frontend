export type optionType = { value: string | number; label: string }

export interface SelectProps {
  options: optionType[]
  selectedValue: string | number
  handleChange: (value: string | number) => void
  style?: React.CSSProperties
}
