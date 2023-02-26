import { Color } from 'styled-components'

import { Text } from '@/components'
import { Layout } from './Badge.styled'

export interface BadgeProps {
  children: React.ReactNode
  backgroundColor: keyof Color
  color?: keyof Color
}

const Badge = ({
  children,
  backgroundColor,
  color = 'neutral100',
}: BadgeProps) => {
  return (
    <Layout backgroundColor={backgroundColor}>
      <Text as="t5" color={color}>
        {children}
      </Text>
    </Layout>
  )
}

export default Badge
