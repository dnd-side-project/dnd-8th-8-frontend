import { Meta, Story } from '@storybook/react'
import styled from 'styled-components'

import { Icon, IconProps, icons } from '@/components'

export default {
  title: 'Media And Icons/Icon',
  parameters: {
    docs: {
      description: {
        component: 'A Icon component.',
      },
    },
    layout: 'centered',
  },
} as Meta

export const Default: Story<IconProps> = (args) => {
  return <Icon {...args} />
}

Default.args = {
  name: 'arrow-left',
  color: 'secondary500',
}

export const Icons: Story<IconProps> = () => {
  return (
    <>
      {Object.keys(icons).map((icon) => (
        <IconBox key={icon}>
          <Icon name={icon as keyof typeof icons} />
          <br />
          <p>{icon}</p>
        </IconBox>
      ))}
    </>
  )
}

const IconBox = styled.div`
  display: flex;
  width: 200px;
  height: 50px;
`
