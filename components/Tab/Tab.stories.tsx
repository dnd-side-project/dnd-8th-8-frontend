import { Meta, Story } from '@storybook/react'

import { Tab, TabProps } from '@/components'

export default {
  title: 'Forms/Tab',
  parameters: {
    docs: {
      description: {
        component: 'A Tab component.',
      },
    },
  },
} as Meta

export const Default: Story<TabProps> = (args) => {
  return <Tab {...args} />
}

Default.args = {
  tabs: [
    { label: 'Tab 1', path: '/tab1' },
    { label: 'Tab 2', path: '/tab2' },
  ],
}
