import { Meta, Story } from '@storybook/react'

import { Menu, MenuProps } from '@/components'

export default {
  title: 'Forms/Menu',
  parameters: {
    docs: {
      description: {
        component: 'A Menu component.',
      },
    },
  },
} as Meta

export const Default: Story<MenuProps> = (args) => {
  return <Menu {...args} />
}

Default.args = {
  items: [
    {
      label: 'Item 1',
      onClick: () => console.log('Item 1'),
    },
    {
      label: 'Item 2',
      onClick: () => console.log('Item 2'),
    },
  ],
}
