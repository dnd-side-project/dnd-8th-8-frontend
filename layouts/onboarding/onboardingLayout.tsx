'use client'

import { Button, Text } from '@/components'
import { Header } from '@/components/Header'
import React from 'react'
import styled from 'styled-components'

interface onboardingLayoutPropsType {
  children: React.ReactNode
  title: string
  subTitle: string
  hideBackBtn?: boolean
  hideSkipBtn?: boolean
  handleSkipBtnClick?: () => void
  handleNextBtnClick: () => void
  handleBackBtnClick?: () => void
}

const OnBoardingLayout = (props: onboardingLayoutPropsType) => {
  const {
    children,
    title,
    subTitle,
    hideBackBtn = false,
    hideSkipBtn = false,
    handleSkipBtnClick,
    handleBackBtnClick,
    handleNextBtnClick,
  } = props

  return (
    <OnBoardingLayoutStyle>
      <Header
        hideBackBtn={hideBackBtn}
        handleBackBtnClick={handleBackBtnClick}
        rightBtn={
          !hideSkipBtn && (
            <div onClick={handleSkipBtnClick}>
              <Text as="t4">건너뛰기</Text>
            </div>
          )
        }
      />
      <OnBoardingQuestionSection>
        <Text as="h2">{title}</Text>
        <Text as="t5" color="neutral500">
          {subTitle}
        </Text>
      </OnBoardingQuestionSection>
      <OnBoardingContentSection>{children}</OnBoardingContentSection>
      <OnBoardingButtonSection>
        <Button fullWidth onClick={handleNextBtnClick}>
          다음
        </Button>
      </OnBoardingButtonSection>
    </OnBoardingLayoutStyle>
  )
}

export default OnBoardingLayout

const OnBoardingLayoutStyle = styled.div`
  width: 100%;
  padding: 2rem;
`

const OnBoardingQuestionSection = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  width: 100%;
  height: 14rem;
`

const OnBoardingContentSection = styled.div`
  width: 100%;
  height: calc(100vh - 5rem - 14rem - 8rem - 4rem);
  overflow-y: scroll;

  /* padding: 2.5rem; */
`

const OnBoardingButtonSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 7rem;
`
