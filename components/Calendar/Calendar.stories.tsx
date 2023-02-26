import { Meta, Story } from '@storybook/react'

import { Calendar, CalendarProps } from './'

export default {
  title: 'Components/Calendar',
  component: Calendar,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta

export const Default: Story<CalendarProps> = (args) => {
  return <Calendar {...args} />
}

Default.args = {}
