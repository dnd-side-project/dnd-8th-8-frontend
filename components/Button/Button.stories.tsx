import { Meta, Story } from '@storybook/react'

import { Button, ButtonProps } from '@/components'

export default {
  title: 'Forms/Button',
  parameters: {
    docs: {
      description: {
        component: 'A button component.',
      },
    },
  },
} as Meta

export const Default: Story<ButtonProps> = (args) => {
  return <Button {...args} />
}

// TODO : disabled 생략시 Controls에서 disabled가 보이지 않음
Default.args = {
  children: 'Button',
  disabled: false,
}

export const Disabled = () => <Button disabled>Disabled</Button>
Disabled.parameters = {
  docs: {
    description: {
      story: 'A disabled button.',
    },
  },
}
