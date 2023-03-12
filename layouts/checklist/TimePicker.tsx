import { Button, Text } from '@/components'
import React, { useState } from 'react'
import styled from 'styled-components'

interface TimePickerProps {
  value: string
  onChange: (newValue: string) => void
  onClose: () => void
}

const TimePicker = ({ value, onChange, onClose }: TimePickerProps) => {
  const [hours, setHours] = useState<string>(value.split(':')[0] || '00')
  const [minutes, setMinutes] = useState<string>(value.split(':')[1] || '00')

  const handleHoursChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setHours(event.target.value)
  }

  const handleMinutesChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setMinutes(event.target.value)
  }

  const handleConfirm = () => {
    onChange(`${hours}:${minutes}`)
    onClose()
  }

  return (
    <Layout>
      <TimeSection>
        <Select value={hours} onChange={handleHoursChange}>
          {[
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
            19, 20, 21, 22, 23,
          ].map((hour) => (
            <Option key={hour} value={hour < 10 ? `0${hour}` : `${hour}`}>
              {hour < 10 ? `0${hour}` : `${hour}`}
            </Option>
          ))}
        </Select>

        <Text as="h3">:</Text>

        <Select value={minutes} onChange={handleMinutesChange}>
          {[0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55].map((minute) => (
            <Option
              key={minute}
              value={minute < 10 ? `0${minute}` : `${minute}`}
            >
              {minute < 10 ? `0${minute}` : `${minute}`}
            </Option>
          ))}
        </Select>
      </TimeSection>

      <ButtonSection>
        <Button fullWidth onClick={handleConfirm}>
          <Text as="t4" color="neutral0">
            입력
          </Text>
        </Button>
      </ButtonSection>
    </Layout>
  )
}

export default TimePicker

const Layout = styled.div``

const TimeSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`
const ButtonSection = styled.div`
  margin-top: 2rem;
`

const Select = styled.select`
  width: 8rem;
  padding: 1rem;
  font-size: 2.8rem;
  font-weight: 700;
  border: none;
`

const Option = styled.option`
  max-height: 3rem;
  overflow: hidden;
`
