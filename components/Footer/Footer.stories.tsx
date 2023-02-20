import { Meta, Story } from '@storybook/react'
import styled from 'styled-components'

import { Footer, Text } from '@/components'

export default {
  title: 'Navigation/Footer',
  parameters: {
    docs: {
      description: {
        component: 'A Footer component.',
      },
    },
  },
} as Meta

export const Default: Story = () => (
  <Layout>
    <Text>Content</Text>

    <FooterBox>
      <Footer />
    </FooterBox>
  </Layout>
)

// Default.parameters = {
//   nextRouter: {
//     path: '/home',
//     asPath: '/profile/lifeiscontent',
//     query: {
//       id: 'lifeiscontent',
//     },
//   },
// }

const Layout = styled.div`
  width: 100%;
  height: calc(100vh - 60px - 2rem);
  background-color: #b5bff2;
`

const FooterBox = styled.div`
  position: fixed;
  left: 0;
`
