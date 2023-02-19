import { Color } from 'styled-components'

import { Text } from '@/components'
import { Layout } from './Badge.styled'

export interface BadgeProps {
  children: React.ReactNode
  backgroundColor: keyof Color
}

const Badge = ({ children, backgroundColor }: BadgeProps) => {
  return (
    <Layout backgroundColor={backgroundColor}>
      <Text as="t5" color="neutral100">
        {children}
      </Text>
    </Layout>
  )
}

export default Badge
