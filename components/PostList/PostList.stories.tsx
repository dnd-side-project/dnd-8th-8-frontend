import { Meta, Story } from '@storybook/react'

import { PostList, PostListProps } from '@/components'

export default {
  title: 'Forms/PostList',
  parameters: {
    docs: {
      description: {
        component: 'A postList component.',
      },
    },
  },
} as Meta

export const Default: Story<PostListProps> = (args) => {
  return <PostList {...args} />
}

Default.args = {
  children: 'PostList',
}
