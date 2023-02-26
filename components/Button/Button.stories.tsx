import { Meta, Story } from '@storybook/react'

import { Button, ButtonProps, Text } from '@/components'
import styled from 'styled-components'

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
  children: <Text color="neutral0">Button</Text>,
}

export const Shadow = () => {
  return (
    <StoryLayout>
      <Button>
        <Text color="neutral0">Default</Text>
      </Button>

      <Button shadow>
        <Text color="neutral0">Shadow</Text>
      </Button>
    </StoryLayout>
  )
}

export const Disabled = () => {
  return (
    <StoryLayout>
      <Button>
        <Text color="neutral0">Default</Text>
      </Button>
      <Button disabled>
        <Text color="neutral0">Disabled</Text>
      </Button>
    </StoryLayout>
  )
}

export const FullWidth = () => {
  return (
    <StoryLayout>
      <Button>
        <Text color="neutral0">Default</Text>
      </Button>
      <Button fullWidth>
        <Text color="neutral0">Full Width</Text>
      </Button>
    </StoryLayout>
  )
}

export const StoryLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  width: calc(100vw - 2rem);
  height: calc(100vh - 2rem);
`
