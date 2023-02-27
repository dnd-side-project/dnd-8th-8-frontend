import { HeaderProps, Icon, Text } from '@/components'
import {
  BtnSection,
  HeaderButton,
  HeaderLayout,
  TitleSection,
} from './Header.styled'

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
            <Icon name="chevron-left" color="neutral900" />
          </HeaderButton>
        )}
      </BtnSection>
      <TitleSection>
        <Text as="t3" color="neutral800">
          {title}
        </Text>
      </TitleSection>
      <BtnSection>{rightBtn}</BtnSection>
    </HeaderLayout>
  )
}

export default Header
