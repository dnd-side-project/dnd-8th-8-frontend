import { Icon, Text } from '@/components'
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
      1
    )
  }

  const getRoadmapIcon = (index: number) => {
    if (index === 1 || index === 2) {
      return <Icon name="roadmap-1" />
    } else if (index === 3 || index === 4) {
      return <Icon name="roadmap-2" />
    } else if (index === 5 || index === 6) {
      return <Icon name="roadmap-3" />
    } else if (index === 7 || index === 8) {
      return <Icon name="roadmap-4" />
    } else if (index === 9 || index === 10) {
      return <Icon name="roadmap-5" />
    } else if (index === 11 || index === 12) {
      return <Icon name="roadmap-6" />
    }
  }

  console.log('여기', data)
  console.log('여기', dataObject)
  console.log('여기', getLength())

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
      </RoadmapPinBox>
    </Layout>
  )
}

export default Roadmap

const Layout = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`

const RoadmapPinBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
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
