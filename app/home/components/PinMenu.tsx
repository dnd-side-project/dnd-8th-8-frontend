import { Text } from '@/components'
import styled from 'styled-components'
import { RoadmapData } from './Roadmap'

interface PinMenuProps {
  data: RoadmapData[]
  position: 'left' | 'right'
}

const PinMenu = ({ data, position }: PinMenuProps) => {
  return (
    <Layout position={position}>
      {data.map(({ checkDate, title }) => {
        return (
          <ItemLayout key={checkDate}>
            <div>
              <Text as="h5">02</Text>
              <MonthText>
                <Text as="t6" color="neutral500">
                  3월
                </Text>
              </MonthText>
            </div>

            <Divider />

            <Text as="t4">{title}</Text>
          </ItemLayout>
        )
      })}
    </Layout>
  )
}

export default PinMenu

const Layout = styled.div<{
  position: 'left' | 'right'
}>`
  position: absolute;
  top: 1.8rem;
  z-index: 1;

  ${({ position }) => (position === 'left' ? 'left: 4.8rem;' : 'right: 0;')}

  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  min-width: 18rem;
  padding: 1.2rem 1.2rem 1.2rem 1.8rem;
  background-color: ${({ theme }) => theme.color.neutral0};
  border-radius: 1rem;
  box-shadow: 6px 4px 18px 3px rgb(0 0 0 / 11%);
`

const ItemLayout = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`

const MonthText = styled.div`
  margin-top: -0.4rem;
`

const Divider = styled.div`
  width: 0.11rem;
  height: 2.6rem;
  margin: 0 1.2rem;
  background-color: ${({ theme }) => theme.color.neutral300};
`
