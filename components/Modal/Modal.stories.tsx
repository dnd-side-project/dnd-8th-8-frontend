import { Meta, Story } from '@storybook/react'

import { Modal, ModalProps } from '@/components'

export default {
  title: 'Forms/Modal',
  parameters: {
    docs: {
      description: {
        component: 'A Modal component.',
      },
    },
  },
} as Meta

export const Default: Story<ModalProps> = (args) => {
  return <Modal {...args} />
}

Default.args = {
  children: 'Modal',
  disabled: false,
}
