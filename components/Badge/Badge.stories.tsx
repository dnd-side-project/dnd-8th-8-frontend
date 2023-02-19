import { Meta, Story } from '@storybook/react'

import { Badge, BadgeProps } from '@/components'

export default {
  title: 'Data Display/Badge',
  parameters: {
    docs: {
      description: {
        component: 'A Badge component.',
      },
      layout: 'centered',
    },
  },
} as Meta

export const Default: Story<BadgeProps> = (args) => {
  return <Badge {...args} />
}

Default.args = {
  children: 'Badge',
  backgroundColor: 'secondary500',
}
