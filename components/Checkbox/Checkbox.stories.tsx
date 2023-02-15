import { Meta, Story } from '@storybook/react'

import { Checkbox, CheckboxProps } from '@/components'

export default {
  title: 'Forms/Checkbox',
  parameters: {
    docs: {
      description: {
        component: 'A Checkbox component.',
      },
    },
  },
} as Meta

export const Default: Story<CheckboxProps> = (args) => {
  return <Checkbox {...args} />
}

Default.args = {
  children: 'Checkbox',
  value: 'checkbox',
  description: 'Description',
}
