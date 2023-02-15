import { Meta, Story } from '@storybook/react'

import { Text, TextProps } from '@/components'

export default {
  title: 'Typography/Text',
  parameters: {
    docs: {
      description: {
        component: 'A Text Component.',
      },
    },
  },
} as Meta

export const Default: Story<TextProps> = (args) => {
  return <Text {...args} />
}

Default.args = {
  children: 'Text',
  as: 't1',
}

export const Family = () => {
  return (
    <>
      <Text as="h1">Wedding map (h1)</Text>
      <Text as="h2">Wedding map (h2)</Text>
      <Text as="h3">Wedding map (h3)</Text>
      <Text as="h4">Wedding map (h4)</Text>
      <Text as="h5">Wedding map (h5)</Text>

      <Text as="t1">Wedding map (t1)</Text>
      <Text as="t2">Wedding map (t2)</Text>
      <Text>Wedding map (t3)</Text>
      <Text as="t4">Wedding map (t4)</Text>
      <Text as="t5">Wedding map (t5)</Text>
    </>
  )
}

export const Color = () => {
  return (
    <>
      <Text as="t1" color="neutral0">
        color neutral0
      </Text>
      <Text as="t1" color="neutral100">
        color neutral100
      </Text>
      <Text as="t1" color="neutral300">
        color neutral300
      </Text>
      <Text as="t1" color="neutral400">
        color neutral400
      </Text>
      <Text as="t1" color="neutral500">
        color neutral500
      </Text>
      <Text as="t1" color="neutral800">
        color neutral800
      </Text>
      <Text as="t1">color neutral900</Text>

      <Text as="t1" color="primary0">
        color primary0
      </Text>
      <Text as="t1" color="primary500">
        color primary500
      </Text>
      <Text as="t1" color="primary900">
        color primary900
      </Text>

      <Text as="t1" color="secondary0">
        color secondary0
      </Text>
      <Text as="t1" color="secondary500">
        color secondary500
      </Text>
      <Text as="t1" color="secondary900">
        color secondary900
      </Text>
    </>
  )
}
