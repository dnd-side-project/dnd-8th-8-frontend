'use client'

import { Icon, Text } from '@/components'

import { theme } from '@/styles'
import { useEffect, useRef, useState } from 'react'
import styled, { Color } from 'styled-components'

interface ScheduleCardProps {
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

const ScheduleCard = ({ cardTheme }: ScheduleCardProps) => {
  const [collapse, setCollapse] = useState<string>('close')
  const menuRef = useRef<HTMLDivElement>(null)
  const [openMenu, setOpenMenu] = useState(false)

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

  const handleCardClick = () => {
    setCollapse(collapse === 'open' ? 'close' : 'open')
  }

  return (
    <Layout onClick={handleCardClick}>
      <CardSection cardTheme={cardTheme}>
        <MoreBtnWrapper onClick={() => setOpenMenu(true)}>
          <Icon
            name="more-vertical"
            color={COLOR_PALETTE[cardTheme].smallTextColor}
          />
        </MoreBtnWrapper>
        <DateSection cardTheme={cardTheme}>
          <Text as="h3" color={COLOR_PALETTE[cardTheme].colorName}>
            02
          </Text>
          <Text as="t4" color={COLOR_PALETTE[cardTheme].colorName}>
            3???
          </Text>
        </DateSection>
        <ContentSection cardTheme={cardTheme}>
          <Text as="h4" color={COLOR_PALETTE[cardTheme].colorName}>
            ????????? ??????????????????
          </Text>
          <ContentRow>
            <LocationSection>
              <Text as="t5" color={COLOR_PALETTE[cardTheme].smallTextColor}>
                <Icon
                  name="pin"
                  size={6}
                  color={COLOR_PALETTE[cardTheme].iconColor}
                />
                ?????? ??????
              </Text>
            </LocationSection>
            <Divider color={COLOR_PALETTE[cardTheme].smallTextColor} />
            <div>
              <Text as="t5" color={COLOR_PALETTE[cardTheme].smallTextColor}>
                ?????? ??????
              </Text>
            </div>
          </ContentRow>
        </ContentSection>
      </CardSection>
      {/* <DetailSection collapse={collapse}>
        <div>
          <Text as="t3" color="neutral800">
            - ?????? ??????
          </Text>
        </div>
      </DetailSection> */}
      <Menu ref={menuRef} openMenu={openMenu}>
        <MenuItem
          style={{ borderBottom: `1px solid ${theme.color.secondary100}` }}
        >
          <Text as="t3" color="secondary900">
            ??????
          </Text>
        </MenuItem>
        <MenuItem>
          <Text as="t3" color="secondary900">
            ??????
          </Text>
        </MenuItem>
      </Menu>
    </Layout>
  )
}

export default ScheduleCard

const Layout = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 7rem;
`

const CardSection = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  padding: 1rem 1rem 1rem 2rem;
  background-color: ${(props: { cardTheme: string }) =>
    COLOR_PALETTE[props.cardTheme].backgroundColor};
  border: ${(props: { cardTheme: string }) =>
    COLOR_PALETTE[props.cardTheme].border};
  border-radius: 1rem;
`

const DateSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 5rem;
  height: 100%;
  padding-right: 2rem;
  color: ${(props: { cardTheme: string }) =>
    COLOR_PALETTE[props.cardTheme].color};
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
  border-left: ${(props: { cardTheme: string }) =>
    `1px solid ${COLOR_PALETTE[props.cardTheme].dividerColor}`};
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
`
const Divider = styled.div`
  width: 0.1rem;
  height: 50%;
  background-color: ${(props: { color: keyof Color }) =>
    theme.color[props.color]};
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
// const DetailSection = styled.div`
//   width: 100%;
//   height: ${(props: { collapse: string }) => {
//     if (props.collapse === 'open') {
//       return '10rem'
//     } else if (props.collapse === 'close') {
//       return '0rem'
//     }
//   }};
//   padding: 1rem 2.5rem;
//   border-radius: 1rem;
//   box-shadow: 0 1px 7px rgb(0 0 0 / 15%);
//   animation: ${(props: { collapse: string }) => {
//     if (props.collapse === 'open') {
//       return css`
//         ${openDetailSectionAnimation} 0.5s
//       `
//     } else if (props.collapse === 'close') {
//       return css`
//         ${closeDetailSectionAnimation} 0.5s
//       `
//     }
//   }};

/* stylelint-disable-next-line selector-type-no-unknown */

/* div {
    display: ${(props: { collapse: string }) => {
    if (props.collapse === 'open') {
      return 'block'
    } else if (props.collapse === 'close') {
      return 'none'
    }
  }};
  } */
//`
