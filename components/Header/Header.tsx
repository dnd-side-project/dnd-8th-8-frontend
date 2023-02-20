import styled from 'styled-components'
import { Text } from '../Text'
import { HeaderProps } from './Header.types'

const Header = ({
  handleBackBtnClick,
  rightBtn,
  title,
  hideBackBtn = false,
}: HeaderProps) => {
  return (
    <HeaderLayout>
      <BtnSection>
        {!hideBackBtn && <button onClick={handleBackBtnClick}>back</button>}
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
