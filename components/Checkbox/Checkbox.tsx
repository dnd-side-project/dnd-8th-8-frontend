import { Text } from '@/components'

import { IconWrapper, Input, Label, Layout } from './Checkbox.styled'

export interface CheckboxProps {
  value: string
  children: React.ReactNode
  description?: string
  defaultChecked?: boolean
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Checkbox = ({
  value,
  children,
  description,
  defaultChecked = false,
  onChange,
}: CheckboxProps) => {
  return (
    <Layout>
      <IconWrapper>icon</IconWrapper>
      <Input
        type="checkbox"
        value={value}
        defaultChecked={defaultChecked}
        onChange={onChange}
      ></Input>
      <Label>
        <Text>{children}</Text>
      </Label>

      {description && (
        <Text as="t4" color="neutral500">
          {description}
        </Text>
      )}
    </Layout>
  )
}

export default Checkbox
