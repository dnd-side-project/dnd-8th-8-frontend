'use client'

import { Button, Calendar, Header, Icon, Modal, Text } from '@/components'
import { useCalendar } from '@/hooks'
import { ContentBox, TimePicker } from '@/layouts/checklist'
import { useCreateChecklist } from '@/queries/checklist/useCreateChecklist'
import { Checklist } from '@/types/api/checklist'
import { ParamsProps } from '@/types/param'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import styled from 'styled-components'

const CreateChecklist = ({ params: { id } }: ParamsProps) => {
  const router = useRouter()
  const [dateModal, setDateModal] = useState(false)
  const [isStartTimeOpen, setIsStartTimeOpen] = useState(false)
  const [isEndTimeOpen, setIsEndTimeOpen] = useState(false)
  const [formData, setFormData] = useState<Checklist>({
    checklistItem: {
      title: '',
      checkDate: '',
      startTime: '00:00',
      endTime: '00:00',
      place: '',
      memo: '',
    },
    checklistSubItems: [],
  })

  const {
    month,
    year,
    calendar,
    nextMonth,
    prevMonth,
    handleSelected,
    selected,
  } = useCalendar(new Date())

  const selectedDate = selected.length > 0 ? selected[0].id : null

  const handleDate = () => {
    if (!selectedDate) return

    setFormData({
      ...formData,
      checklistItem: {
        ...formData.checklistItem,
        checkDate: selectedDate,
      },
    })
    setDateModal(false)
  }

  const { mutate } = useCreateChecklist()

  const handleTimeChange = (newTime: string, type: 'start' | 'end') => {
    setFormData({
      ...formData,
      checklistItem: {
        ...formData.checklistItem,
        [type === 'start' ? 'startTime' : 'endTime']: newTime,
      },
    })
  }

  const onAddItem = () => {
    //
  }

  return (
    <Layout>
      <Header
        handleBackBtnClick={() => router.push('/checklist')}
        title="체크리스트 작성"
      />

      <ContentLayout>
        <ContentBox
          title="제목"
          input={formData.checklistItem.title}
          placeholder="제목을 작성해주세요"
          onChange={(e) =>
            setFormData({
              ...formData,
              checklistItem: {
                ...formData.checklistItem,
                title: e.target.value,
              },
            })
          }
        />

        <ContentBox
          title="세부일정명"
          content={
            <DetailTodoBox>
              {formData.checklistSubItems.length === 0 && (
                <div>
                  <ItemInput
                    placeholder="세부일정을 작성해주세요"
                    onChange={(e) => {}}
                  ></ItemInput>

                  <Divider />
                </div>
              )}

              {formData.checklistSubItems.map((item, index) => (
                <div key={index}>
                  <Text as="t3" color="neutral800">
                    {item.contents}
                  </Text>

                  <Divider />
                </div>
              ))}

              <AddItemSection onClick={onAddItem}>
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
            formData.checklistItem.checkDate === '' ? (
              <Text as="t3" color="neutral500">
                일정을 선택해주세요.
              </Text>
            ) : (
              <Text as="t3" color="neutral800">
                {formData.checklistItem.checkDate}
              </Text>
            )
          }
          iconSection={
            <>
              <CalendarButtonSection onClick={() => setDateModal(true)}>
                <Icon name="calendar" color="neutral800" />
              </CalendarButtonSection>
              {dateModal && (
                <Modal isOpen={dateModal} onClose={() => setDateModal(false)}>
                  <Calendar
                    month={month}
                    year={year}
                    calendar={calendar}
                    nextMonth={nextMonth}
                    prevMonth={prevMonth}
                    handleSelected={handleSelected}
                  />

                  <ButtonBox>
                    <Button fullWidth onClick={handleDate}>
                      <Text as="t3" color="neutral0">
                        확인
                      </Text>
                    </Button>
                  </ButtonBox>
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
                <Text as="t3" color="neutral800">
                  {formData.checklistItem.startTime}
                </Text>

                <TimeSectionButton
                  onClick={() => setIsStartTimeOpen(!isStartTimeOpen)}
                >
                  <Icon name="chevron-down" color="neutral800" size={12} />
                </TimeSectionButton>

                {isStartTimeOpen && (
                  <Modal
                    isOpen={isStartTimeOpen}
                    onClose={() => setIsStartTimeOpen(false)}
                  >
                    <TimePicker
                      value={formData.checklistItem.startTime}
                      onChange={(e) => handleTimeChange(e, 'start')}
                      onClose={() => setIsStartTimeOpen(false)}
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
                <Text as="t3" color="neutral800">
                  {formData.checklistItem.endTime}
                </Text>

                <TimeSectionButton
                  onClick={() => setIsEndTimeOpen(!isEndTimeOpen)}
                >
                  <Icon name="chevron-down" color="neutral800" size={12} />
                </TimeSectionButton>

                {isEndTimeOpen && (
                  <Modal
                    isOpen={isEndTimeOpen}
                    onClose={() => setIsEndTimeOpen(false)}
                  >
                    <TimePicker
                      value={formData.checklistItem.endTime}
                      onChange={(e) => handleTimeChange(e, 'end')}
                      onClose={() => setIsEndTimeOpen(false)}
                    />
                  </Modal>
                )}

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

export default CreateChecklist

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

const ButtonBox = styled.div`
  margin-top: 1rem;
`

const ItemInput = styled.input``
