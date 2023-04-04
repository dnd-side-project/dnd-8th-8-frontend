'use client'

import { useEffect, useState } from 'react'
import { Icon } from '../Icon'
import { Text } from '../Text'
import { SelectButton, SelectLayout, StyledSelect } from './Select.styled'
import { optionType, SelectProps } from './Select.type'

const Select = ({
  options,
  selectedValue,
  handleChange,
  style,
}: SelectProps) => {
  const [openOptions, setOpenOptions] = useState(false)
  const [value, setValue] = useState<string | number>('')

  useEffect(() => {
    if (selectedValue) {
      setValue(
        options.filter(
          (option: optionType) => option.value === selectedValue,
        )[0].label,
      )
    }
  }, [selectedValue, options])

  return (
    <SelectLayout openOptions={openOptions} style={style}>
      <SelectButton
        onClick={() => setOpenOptions(!openOptions)}
        openOptions={openOptions}
      >
        <Text as="t3" color="secondary900">
          {value}
        </Text>{' '}
        <Icon name="chevron-down" />
      </SelectButton>
      <StyledSelect openOptions={openOptions}>
        {options.map((option: optionType, idx: number) => (
          <li
            value={option.value}
            key={idx}
            onClick={() => {
              handleChange(option.value)
              setOpenOptions(false)
            }}
          >
            <Text as="t3" color="secondary900">
              {option.label}
            </Text>
          </li>
        ))}
      </StyledSelect>
    </SelectLayout>
  )
}

export default Select
