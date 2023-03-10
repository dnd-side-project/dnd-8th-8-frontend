'use client'

import { Button, Calendar, Header, Icon, Modal, Text } from '@/components'
import { useCalendar } from '@/hooks'
import { ContentBox, TimePicker } from '@/layouts/checklist'
import { ParamsProps } from '@/types/param'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import styled from 'styled-components'

const DetailChecklist = ({ params: { id } }: ParamsProps) => {
  const router = useRouter()
  const [isCalendarOpen, setIsCalendarOpen] = useState(false)
  const [isTimeOpen, setIsTimeOpen] = useState(false)
  const [time, setTime] = useState<string>('00:00')

  const [title, setTitle] = useState<string>('')
  const [date, setDate] = useState<string>('')

  const handleTimeChange = (newTime: string) => {
    setTime(newTime)
  }

  const { month, year, calendar, nextMonth, prevMonth, handleSelected } =
    useCalendar(new Date())

  return (
    <Layout>
      <Header
        handleBackBtnClick={() => router.push('/checklist')}
        rightBtn={
          <div onClick={() => null}>
            <Text as="t4" color="neutral800">
              편집
            </Text>
          </div>
        }
        title="체크리스트 작성"
      />

      <ContentLayout>
        <ContentBox
          title="제목"
          input={title}
          placeholder="제목을 작성해주세요"
          onChange={(e) => setTitle(e.target.value)}
        />

        <ContentBox
          title="세부일정명"
          content={
            <DetailTodoBox>
              <div>
                <Text as="t3" color="neutral500">
                  세부 일정을 작성해주세요.
                </Text>

                <Divider />
              </div>

              <div>
                <Text as="t3">날짜 확인</Text>

                <Divider />
              </div>

              <AddItemSection>
                <Icon name="plus" color="neutral500" />
                <Text as="t3" color="neutral500">
                  항목 추가
                </Text>
              </AddItemSection>
            </DetailTodoBox>
          }
        />

        <ContentBox
          title="일정날짜"
          content={
            date === '' ? (
              <Text as="t3" color="neutral500">
                일정을 선택해주세요.
              </Text>
            ) : (
              <Text as="t3" color="neutral800">
                {date}
              </Text>
            )
          }
          iconSection={
            <>
              <CalendarButtonSection
                onClick={() => setIsCalendarOpen(!isCalendarOpen)}
              >
                <Icon name="calendar" color="neutral800" />
              </CalendarButtonSection>
              {isCalendarOpen && (
                <Modal
                  isOpen={isCalendarOpen}
                  onClose={() => setIsCalendarOpen(false)}
                >
                  <Calendar
                    month={month}
                    year={year}
                    calendar={calendar}
                    nextMonth={nextMonth}
                    prevMonth={prevMonth}
                    handleSelected={handleSelected}
                  />
                </Modal>
              )}
            </>
          }
        />

        <ContentBox
          title="일정시간"
          content={
            <TimeSection>
              <div>
                <Text as="t3" color="neutral500">
                  {time}
                </Text>

                <TimeSectionButton onClick={() => setIsTimeOpen(!isTimeOpen)}>
                  <Icon name="chevron-down" color="neutral500" size={12} />
                </TimeSectionButton>

                {isTimeOpen && (
                  <Modal
                    isOpen={isTimeOpen}
                    onClose={() => setIsTimeOpen(false)}
                  >
                    <TimePicker
                      value={time}
                      onChange={handleTimeChange}
                      onClose={() => setIsTimeOpen(false)}
                    />
                  </Modal>
                )}

                <TimeSectionRight>
                  <Text as="t3" color="neutral800">
                    부터
                  </Text>
                </TimeSectionRight>
              </div>

              <div>
                <Text as="t3" color="neutral500">
                  00:00
                </Text>

                <TimeSectionButton>
                  <Icon name="chevron-down" color="neutral500" size={12} />
                </TimeSectionButton>

                <TimeSectionRight>
                  <Text as="t3" color="neutral800">
                    까지
                  </Text>
                </TimeSectionRight>
              </div>
            </TimeSection>
          }
        />

        <ContentBox
          title="일정장소"
          input=""
          placeholder="장소명을 작성해주세요."
        />
      </ContentLayout>

      <TextAreaSection
        placeholder="메모 추가 (100자 이하 작성 가능)"
        maxLength={100}
      />

      <ButtonSection>
        <Button fullWidth backgroundColor="secondary0">
          <Text as="h5" color="neutral500">
            완료
          </Text>
        </Button>
      </ButtonSection>
    </Layout>
  )
}

export default DetailChecklist

const Layout = styled.div`
  padding: 2rem;
`

const ContentLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 4rem;
`
const DetailTodoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  margin-right: 2rem;
`

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.color.neutral400};
`

const TimeSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`

const TimeSectionButton = styled.button`
  margin-left: 0.6rem;
  cursor: pointer;
  background-color: transparent;
  border: none;
`

const CalendarButtonSection = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
`

const TimeSectionRight = styled.span`
  margin-left: 2rem;
`

const TextAreaSection = styled.textarea`
  width: 100%;
  height: 16rem;
  padding: 1.4rem 1.8rem;
  margin-top: 12rem;
  resize: none;
  border: 1px solid ${({ theme }) => theme.color.neutral300};
  border-radius: 0.4rem;

  ::placeholder {
    color: ${({ theme }) => theme.color.neutral500};
  }

  :focus {
    border: 1px solid ${({ theme }) => theme.color.neutral500};
    outline: none;
  }
`

const AddItemSection = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`

const ButtonSection = styled.div`
  margin-top: 4rem;
`
