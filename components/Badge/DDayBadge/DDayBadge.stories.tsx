import { Meta, Story } from '@storybook/react'

import { DDayBadge, DDayBadgeProps } from '@/components'

export default {
  title: 'Forms/DDayBadge',
  parameters: {
    docs: {
      description: {
        component: 'A DDayBadge component.',
      },
    },
  },
} as Meta

export const Default: Story<DDayBadgeProps> = (args) => {
  return <DDayBadge {...args} />
}

Default.args = {
  day: 7,
}
