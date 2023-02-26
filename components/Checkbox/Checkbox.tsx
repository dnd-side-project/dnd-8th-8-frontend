'use client'

import { useState } from 'react'

import { Icon, Text } from '@/components'
import { HiddenCheckbox, Label, LabelLayout, Layout } from './Checkbox.styled'

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
  const [isChecked, setIsChecked] = useState(defaultChecked)

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked)
    onChange(e)
  }

  return (
    <Layout>
      <Icon name="checkbox" />

      <LabelLayout>
        <Label>
          <HiddenCheckbox
            value={value}
            defaultChecked={isChecked}
            onChange={handleOnChange}
          />

          <Text as="h4">{children}</Text>
        </Label>

        {description && (
          <Text as="t4" color="neutral500">
            {description}
          </Text>
        )}
      </LabelLayout>
    </Layout>
  )
}

export default Checkbox
