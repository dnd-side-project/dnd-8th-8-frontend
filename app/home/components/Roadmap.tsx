import { Icon, IconName, Text } from '@/components'
import styled from 'styled-components'

interface RoadmapData {
  id: number
  title: string
  checkDate: string
  startTime: string
  endTime: string
  place: string
  memo: string
}

interface RoadmapProps {
  data: RoadmapData[]
}

const Roadmap = ({ data }: RoadmapProps) => {
  const startDate = data[0].checkDate
  const endDate = data[data.length - 1].checkDate

  const dataObject = data.reduce((acc, cur) => {
    const { checkDate } = cur
    const yyyymm = checkDate.slice(0, 7)
    if (acc[yyyymm]) {
      acc[yyyymm].push(cur)
    } else {
      acc[yyyymm] = [cur]
    }
    return acc
  }, {} as { [key: string]: RoadmapData[] })

  const getLength = () => {
    const startObj = new Date(startDate)
    const endObj = new Date(endDate)

    return (
      (endObj.getFullYear() - startObj.getFullYear()) * 12 +
      (endObj.getMonth() - startObj.getMonth()) +
      2
    )
  }

  const getRoadmapIcon = (index: number) => {
    let iconNumber = 0

    switch (true) {
      case index <= 2:
        iconNumber = 1
        break
      case index <= 4:
        iconNumber = 2
        break
      case index <= 6:
        iconNumber = 3
        break
      case index <= 8:
        iconNumber = 4
        break
      case index <= 10:
        iconNumber = 5
        break
      case index <= 12:
        iconNumber = 6
        break
    }

    const iconName = `roadmap-${iconNumber}` as IconName

    return <Icon name={iconName} />
  }

  const pinPosition = [
    { top: '-0.4rem', right: '4.8rem' },
    { top: '11.6rem', left: '4.8rem' },
    { top: '11.6rem', right: '4.8rem' },
    { top: '23.9rem', left: '4.8rem' },
    { top: '23.9rem', right: '4.8rem' },
    { top: '36.2rem', left: '4.8rem' },
    { top: '36.2rem', right: '4.8rem' },
    { top: '48.5rem', left: '4.8rem' },
    { top: '48.5rem', right: '4.8rem' },
    { top: '60.8rem', left: '4.8rem' },
    { top: '60.8rem', right: '4.8rem' },
    { top: '73.1rem', left: '4.8rem' },
  ]

  return (
    <Layout>
      {getRoadmapIcon(getLength())}

      <RoadmapPinBox>
        <div>
          <StartPin>
            <Text as="t2" color="secondary400">
              Start
            </Text>
          </StartPin>
          <StartPinDate>
            <Text as="t4" color="neutral800">
              {startDate}
            </Text>
          </StartPinDate>
        </div>

        <MonthPin index={0} {...pinPosition[0]}>
          <Text as="t2" color="neutral0">
            0
          </Text>
        </MonthPin>

        <MonthPin index={1} {...pinPosition[1]}>
          <Text as="t2" color="neutral0">
            1
          </Text>
        </MonthPin>

        <MonthPin index={2} {...pinPosition[2]}>
          <Text as="t2" color="neutral0">
            2
          </Text>
        </MonthPin>

        <MonthPin index={3} {...pinPosition[3]}>
          <Text as="t2" color="neutral0">
            3
          </Text>
        </MonthPin>

        <MonthPin index={4} {...pinPosition[4]}>
          <Text as="t2" color="neutral0">
            4
          </Text>
        </MonthPin>

        <MonthPin index={5} {...pinPosition[5]}>
          <Text as="t2" color="neutral0">
            5
          </Text>
        </MonthPin>

        <MonthPin index={6} {...pinPosition[6]}>
          <Text as="t2" color="neutral0">
            6
          </Text>
        </MonthPin>

        <MonthPin index={7} {...pinPosition[7]}>
          <Text as="t2" color="neutral0">
            7
          </Text>
        </MonthPin>

        <MonthPin index={8} {...pinPosition[8]}>
          <Text as="t2" color="neutral0">
            8
          </Text>
        </MonthPin>

        <MonthPin index={9} {...pinPosition[9]}>
          <Text as="t2" color="neutral0">
            9
          </Text>
        </MonthPin>

        <MonthPin index={10} {...pinPosition[10]}>
          <Text as="t2" color="neutral0">
            10
          </Text>
        </MonthPin>

        <MonthPin index={11} {...pinPosition[11]}>
          <Text as="t2" color="neutral0">
            11
          </Text>
        </MonthPin>

        <EndPin
          position={
            getLength() % 4 === 1 || getLength() % 4 === 2 ? 'right' : 'left'
          }
        >
          <Text as="t2" color="secondary400">
            End
          </Text>
        </EndPin>
        <EndPinDate
          position={
            getLength() % 4 === 1 || getLength() % 4 === 2 ? 'right' : 'left'
          }
        >
          <Text as="t4" color="neutral800">
            {endDate}
          </Text>
        </EndPinDate>

        <EndIcon
          position={
            getLength() % 4 === 1 || getLength() % 4 === 2 ? 'right' : 'left'
          }
        >
          <Icon name="end-point" />
        </EndIcon>
      </RoadmapPinBox>
    </Layout>
  )
}

export default Roadmap

const Layout = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin-bottom: 8rem;
`

const RoadmapPinBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

const StartPin = styled.div`
  position: absolute;
  top: calc(-1.5rem / 2);
  left: 0.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 6.5rem;
  height: 6.5rem;
  background-color: ${({ theme }) => theme.color.neutral0};
  border: 3px solid ${({ theme }) => theme.color.secondary400};
  border-radius: 50%;
`

const StartPinDate = styled.div`
  margin-top: 6rem;
`

const MonthPin = styled.div<{
  index: number
  top: string
  left?: string
  right?: string
}>`
  position: absolute;
  top: ${({ top }) => top};
  right: ${({ right }) => right};
  left: ${({ left }) => left};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 6.5rem;
  height: 6.5rem;
  background-color: ${({ theme }) => theme.color.secondary400};
  border-radius: 50%;
`

const EndPin = styled.div<{
  position: 'left' | 'right'
}>`
  position: absolute;
  ${({ position }) => position}: 0.4rem;

  bottom: calc(-1.5rem / 2);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 6.5rem;
  height: 6.5rem;
  background-color: ${({ theme }) => theme.color.neutral0};
  border: 3px solid ${({ theme }) => theme.color.secondary400};
  border-radius: 50%;
`

const EndIcon = styled.div<{ position: 'left' | 'right' }>`
  position: absolute;
  ${({ position }) => position}: 0;

  bottom: 3.4rem;
`

const EndPinDate = styled.div<{ position: 'left' | 'right' }>`
  position: absolute;
  ${({ position }) => position}: 0;

  bottom: -3rem;
`
