'use client'

import { Badge, Header, Icon, Text } from '@/components'
import { useRouter } from 'next/navigation'
import styled from 'styled-components'

const UserSetting = () => {
  const router = useRouter()

  return (
    <Layout>
      <Header
        handleBackBtnClick={() => router.push('/my-page')}
        title="회원정보 수정"
      />

      <HeaderSection>
        <AvatarSection>
          <Avatar src="https://as2.ftcdn.net/v2/jpg/04/10/43/77/1000_F_410437733_hdq4Q3QOH9uwh0mcqAhRFzOKfrCR24Ta.jpg"></Avatar>
          <AvatarAddButton>
            <Icon name="camera" color="neutral0" size={14} />
          </AvatarAddButton>
        </AvatarSection>

        <AvatarTitle>
          <AvatarTitleName>
            <Text as="h4">이석현님</Text>

            <EditButton onClick={() => null}>
              <Icon name="edit" color="neutral800" />
            </EditButton>
          </AvatarTitleName>

          <Badge color="secondary500" backgroundColor="secondary100">
            예비신랑
          </Badge>
        </AvatarTitle>
      </HeaderSection>

      <BodySection>asd</BodySection>
    </Layout>
  )
}

export default UserSetting

const Layout = styled.div`
  padding: 2rem;
`

const HeaderSection = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
  margin-top: 3rem;
  margin-bottom: 4.4rem;
`

const AvatarSection = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Avatar = styled.img`
  width: 7.5rem;
  height: 7.5rem;
  border-radius: 50%;
`

const AvatarAddButton = styled.button`
  position: absolute;
  right: calc(50% - 3rem);
  bottom: calc(50% - 4.5rem);
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.2rem;
  height: 2.2rem;
  background-color: ${({ theme }) => theme.color.neutral800};
  border: none;
  border-radius: 50%;
  transform: translate(50%, -50%);
`

const AvatarTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`

const AvatarTitleName = styled.div`
  display: flex;
  gap: 0.8rem;

  svg {
    margin-top: 0.6rem;
  }
`

const EditButton = styled.button`
  background-color: transparent;
  border: none;
`

const BodySection = styled.div``
