'use client'

import { Button, Header, Icon, Text } from '@/components'
import { ContentBox } from '@/layouts/checklist'
import { ParamsProps } from '@/types/param'
import { useRouter } from 'next/navigation'
import styled from 'styled-components'

const DetailChecklist = ({ params: { id } }: ParamsProps) => {
  const router = useRouter()

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
        <ContentBox title="제목" placeholder="제목을 작성해주세요" />

        <ContentBox
          title="세부일정명"
          content={
            <DetailTodoBox>
              <Text as="t3" color="neutral500">
                세부 일정을 작성해주세요.
              </Text>

              <Divider />
            </DetailTodoBox>
          }
        />

        <ContentBox
          title="일정날짜"
          placeholder="일정을 선택해주세요."
          iconSection={<Icon name="calendar" color="neutral800" />}
        />

        <ContentBox
          title="일정시간"
          content={
            <TimeSection>
              <div>
                <Text as="t3" color="neutral500">
                  00:00
                </Text>

                <TimeSectionButton>
                  <Icon name="chevron-down" color="neutral500" size={12} />
                </TimeSectionButton>

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

        <ContentBox title="일정장소" placeholder="장소명을 작성해주세요." />
      </ContentLayout>

      <TextAreaSection
        placeholder="메모 추가 (100자 이하 작성 가능)"
        maxLength={100}
      />

      <ButtonSection>
        <Button fullWidth backgroundColor="secondary0">
          <Text as="t3" color="neutral500">
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

const ButtonSection = styled.div`
  position: fixed;
  bottom: 8rem;
  width: calc(100% - 4rem);
`
