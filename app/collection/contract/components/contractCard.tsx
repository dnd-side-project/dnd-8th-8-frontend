import { Icon, Text } from '@/components'
import { theme } from '@/styles'
import { useEffect, useRef, useState } from 'react'
import styled, { Color } from 'styled-components'

export interface ContractCardProps {
  cardTheme: 'active' | 'skeleton' | 'normal'
}

const COLOR_PALETTE: {
  [key: string]: {
    color: string
    colorName: keyof Color
    backgroundColor: string
    border: string
    dividerColor: string
    iconColor: keyof Color
    smallTextColor: keyof Color
  }
} = {
  active: {
    color: `${theme.color.neutral0}`,
    colorName: 'neutral0',
    backgroundColor: `${theme.color.secondary500}`,
    border: 'none',
    iconColor: 'neutral0',
    dividerColor: `${theme.color.neutral0}`,
    smallTextColor: 'neutral0',
  },
  normal: {
    color: '#1F38BC',
    colorName: 'secondary900',
    backgroundColor: `${theme.color.secondary100}`,
    border: 'none',
    iconColor: 'secondary500',
    dividerColor: `${theme.color.neutral300}`,
    smallTextColor: `neutral600`,
  },
  skeleton: {
    color: `${theme.color.neutral500}`,
    colorName: 'neutral500',
    backgroundColor: `${theme.color.neutral0}`,
    border: `1px dashed ${theme.color.secondary300}`,
    iconColor: `neutral500`,
    dividerColor: `${theme.color.neutral500}`,
    smallTextColor: `neutral500`,
  },
}
const ContractCard = ({ cardTheme }: ContractCardProps) => {
  const menuRef = useRef<HTMLDivElement>(null)
  const [openMenu, setOpenMenu] = useState(false)
  const handleCardClick = () => {
    console.log('click')
  }

  useEffect(() => {
    function handleOutside(e: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        openMenu
      ) {
        setOpenMenu(false)
      }
    }
    document.addEventListener('mousedown', handleOutside)
    return () => {
      document.removeEventListener('mousedown', handleOutside)
    }
  }, [menuRef, openMenu])
  return (
    <Layout>
      <CardSection cardTheme={cardTheme} onClick={handleCardClick}>
        <MoreBtnWrapper onClick={() => setOpenMenu(true)}>
          <Icon
            name="more-vertical"
            color={COLOR_PALETTE[cardTheme].smallTextColor}
          />
        </MoreBtnWrapper>
        <IconSection>
          <Icon name="contract" color={COLOR_PALETTE[cardTheme].iconColor} />
        </IconSection>
        <ContentSection>
          <Text as="t3" color={COLOR_PALETTE[cardTheme].colorName}>
            계약서를 등록해주세요
          </Text>
          <ContentRow>
            <LocationSection>
              <Text as="h5" color={COLOR_PALETTE[cardTheme].smallTextColor}>
                날짜 입력
              </Text>
            </LocationSection>
            <Divider color={COLOR_PALETTE[cardTheme].smallTextColor} />
            <div>
              <Text as="h5" color={COLOR_PALETTE[cardTheme].smallTextColor}>
                계약 현황
              </Text>
            </div>
          </ContentRow>
        </ContentSection>
      </CardSection>
      <Menu ref={menuRef} openMenu={openMenu}>
        <MenuItem
          style={{ borderBottom: `1px solid ${theme.color.secondary100}` }}
        >
          <Text as="t3" color="secondary900">
            수정
          </Text>
        </MenuItem>
        <MenuItem>
          <Text as="t3" color="secondary900">
            삭제
          </Text>
        </MenuItem>
      </Menu>
    </Layout>
  )
}

export default ContractCard

const Layout = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 7rem;
`

const CardSection = styled.div`
  position: relative;
  z-index: 20;
  display: flex;
  padding: 1rem 1rem 1rem 2rem;
  background-color: ${(props: { cardTheme: string }) =>
    COLOR_PALETTE[props.cardTheme].backgroundColor};
  border: ${(props: { cardTheme: string }) =>
    COLOR_PALETTE[props.cardTheme].border};
  border-radius: 1rem;
`

const Menu = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 50;
  display: ${(props: { openMenu: boolean }) =>
    props.openMenu ? 'grid' : 'none'};
  grid-template-rows: repeat(2, 1fr);
  width: 10rem;
  height: 9rem;
  background-color: ${theme.color.neutral0};
  border: 1px solid ${theme.color.secondary100};
  border-radius: 0.6rem;
  box-shadow: 0.6rem 0.4rem 1.8rem 0.3rem rgb(0 0 0 / 11%);
`

const MenuItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const IconSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 100%;
`

const LocationSection = styled.div`
  svg {
    margin-right: 0.5rem;
  }
`

const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 20rem;
  height: 100%;
  padding-left: 1.8rem;
`

const MoreBtnWrapper = styled.div`
  position: absolute;
  top: 15px;
  right: -3px;
`

const ContentRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1rem 1fr;
  row-gap: 1rem;
  align-items: center;
  margin-top: 0.6rem;
`
const Divider = styled.div`
  width: 0.1rem;
  height: 50%;
  background-color: ${(props: { color: keyof Color }) =>
    theme.color[props.color]};
`
