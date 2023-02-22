import { Icon, Text } from '@/components'
import styled from 'styled-components'
export interface HeaderProps {
  hideBackBtn?: boolean
  handleBackBtnClick?: () => void
  rightBtn?: React.ReactNode
  title?: string
}

const Header = ({
  handleBackBtnClick,
  rightBtn,
  title,
  hideBackBtn = false,
}: HeaderProps) => {
  return (
    <HeaderLayout>
      <BtnSection>
        {!hideBackBtn && (
          <HeaderButton onClick={handleBackBtnClick}>
            <Icon as="chevron-left" color="neutral900" />
          </HeaderButton>
        )}
      </BtnSection>
      <TitleSection>
        <Text as="t3" color={'neutral800'}>
          {title}
        </Text>
      </TitleSection>
      <BtnSection>{rightBtn}</BtnSection>
    </HeaderLayout>
  )
}

export default Header

const HeaderLayout = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 4rem;
  margin-bottom: 1rem;
`

const BtnSection = styled.div`
  display: flex;
  align-items: center;
  width: 6rem;
  height: 100%;
`

const TitleSection = styled.div`
  display: flex;
  align-items: center;
`

const HeaderButton = styled.button`
  background-color: transparent;
  border: none;
`
