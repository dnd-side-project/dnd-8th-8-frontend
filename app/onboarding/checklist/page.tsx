'use client'

import userState from '@/atoms/userAtom'
import { Icon, Text } from '@/components'
import { OnBoardingLayout } from '@/layouts/onboarding'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

import { useSetRecoilState } from 'recoil'
import styled from 'styled-components'

const CATEGORY_ARR: { [key: string]: any } = [
  { name: '상견례', id: '0' },
  { name: '예식장', id: '1' },
  { name: '신혼여행', id: '2' },
  { name: '스튜디오', id: '3' },
  { name: '드레스', id: '4' },
  { name: '메이크업', id: '5' },
  { name: '예단', id: '6' },
]

const Checklist = () => {
  const router = useRouter()
  const setUserInfo = useSetRecoilState(userState)
  const [checkedCategory, setCheckedCategory] = useState<string[]>([])
  const handleCategoryClick = (e: React.MouseEvent<HTMLElement>) => {
    const id = e.currentTarget.id
    console.log(id)
    if (checkedCategory.includes(id)) {
      setCheckedCategory(
        checkedCategory.filter((categoryId) => categoryId !== id),
      )
    } else {
      checkedCategory.push(id)
      setCheckedCategory([...checkedCategory])
    }
  }

  return (
    <OnBoardingLayout
      title={`확정된 일정이\n있으신가요?`}
      subTitle={`확정된 일정을 체크해주세요.\n메인화면에서도 확인할 수 있어요.`}
      handleSkipBtnClick={() => router.push('/home')}
      handleBackBtnClick={() => router.push('/onboarding/budget')}
      handleNextBtnClick={() => {
        setUserInfo((prev) => ({ ...prev, checklist: ['예식장', '상견례'] }))
        router.push('/home')
      }}
    >
      <CategorySection>
        {CATEGORY_ARR.map((category: { name: string; id: string }) => (
          <SingleCategory
            key={category.name}
            id={category.id}
            onClick={handleCategoryClick}
            isChecked={checkedCategory.includes(category.id)}
          >
            <CategoryContentSection>
              <Text
                as="t3"
                color={
                  checkedCategory.includes(category.id)
                    ? 'neutral0'
                    : 'secondary400'
                }
              >
                {category.name}
              </Text>
              <Icon
                name="checkbox"
                color={
                  checkedCategory.includes(category.id)
                    ? 'neutral0'
                    : 'neutral100'
                }
              />
            </CategoryContentSection>
          </SingleCategory>
        ))}
      </CategorySection>
    </OnBoardingLayout>
  )
}

export default Checklist

const CategorySection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 4rem;
`

const SingleCategory = styled.div<{ isChecked: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 5rem;
  padding: 0 2.2rem 0 3rem;
  background-color: ${({ isChecked, theme }) =>
    isChecked ? theme.color.secondary500 : theme.color.neutral0};
  border: ${({ isChecked, theme }) =>
    isChecked ? 'none' : `1px solid ${theme.color.secondary300}`};
  border-radius: 5.3rem;
`

const CategoryContentSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`
