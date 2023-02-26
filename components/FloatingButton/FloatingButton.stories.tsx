import { Meta, Story } from '@storybook/react'

import { FloatingButton, FloatingButtonProps } from '@/components'

export default {
  title: 'Forms/FloatingButton',
  parameters: {
    docs: {
      description: {
        component: 'A FloatingButton component.',
      },
    },
  },
} as Meta

export const Default: Story<FloatingButtonProps> = (args) => {
  return <FloatingButton {...args} />
}

Default.args = {
  icon: 'pencil',
}
