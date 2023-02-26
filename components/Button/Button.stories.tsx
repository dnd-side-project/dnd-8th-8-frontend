import { Meta, Story } from '@storybook/react'

import { Button, ButtonProps } from '@/components'

export default {
  title: 'Forms/Button',
  parameters: {
    docs: {
      description: {
        component: 'A Button Component.',
      },
    },
    layout: 'centered',
  },
} as Meta

export const Default: Story<ButtonProps> = (args) => {
  return <Button {...args} />
}

Default.args = {
  children: 'Button',
  backgroundColor: 'secondary500',
}

export const Shadow = () => {
  return (
    <>
      <Button>Default</Button>
      <Button shadow>Shadow</Button>
    </>
  )
}

export const Disabled = () => {
  return (
    <>
      <Button>Default</Button>
      <Button disabled>Disabled</Button>
    </>
  )
}

export const FullWidth = () => {
  return (
    <>
      <Button>Default</Button>
      <Button fullWidth>Full Width</Button>
    </>
  )
}
