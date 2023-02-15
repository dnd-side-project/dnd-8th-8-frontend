import { Meta, Story } from '@storybook/react'

import { AAA, AAAProps } from '@/components'

export default {
  title: 'Forms/AAA',
  parameters: {
    docs: {
      description: {
        component: 'A AAA component.',
      },
    },
  },
} as Meta

export const Default: Story<AAAProps> = (args) => {
  return <AAA {...args} />
}

Default.args = {
  children: 'AAA',
  disabled: false,
}
