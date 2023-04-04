'use client'

import { Badge, Icon, Text } from '@/components'
import styled from 'styled-components'

const MyPage = () => {
  return (
    <Layout>
      <HeaderSection>
        <AvatarSection>
          <Avatar src="https://as2.ftcdn.net/v2/jpg/04/10/43/77/1000_F_410437733_hdq4Q3QOH9uwh0mcqAhRFzOKfrCR24Ta.jpg"></Avatar>
          <AvatarAddButton>
            <Icon name="camera" color="neutral0" />
          </AvatarAddButton>
        </AvatarSection>

        <Text as="h4">이석현님</Text>

        <Badge color="secondary500" backgroundColor="secondary100">
          예비신랑
        </Badge>
      </HeaderSection>

      <MenuSection>dd</MenuSection>
    </Layout>
  )
}

export default MyPage

const Layout = styled.div`
  padding: 2rem;
`

const HeaderSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  align-items: center;
  margin-bottom: 4.4rem;
`

const AvatarSection = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 6rem;
`

const Avatar = styled.img`
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
`

const AvatarAddButton = styled.button`
  position: absolute;
  right: calc(50% - 4rem);
  bottom: calc(50% - 6rem);
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.8rem;
  height: 2.8rem;
  background-color: ${({ theme }) => theme.color.neutral800};
  border: none;
  border-radius: 50%;
  transform: translate(50%, -50%);
`

const MenuSection = styled.div`
  height: 20rem;
`
