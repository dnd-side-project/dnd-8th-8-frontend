import { Meta, Story } from '@storybook/react'

import { Navbar, NavbarProps } from '@/components'

export default {
  title: 'Forms/Navbar',
  parameters: {
    docs: {
      description: {
        component: 'A navbar component.',
      },
    },
  },
} as Meta

export const Default: Story<NavbarProps> = (args) => {
  return <Navbar {...args} />
}

Default.args = {
  children: 'Navbar',
  disabled: false,
}
