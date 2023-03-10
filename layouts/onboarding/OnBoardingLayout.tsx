'use client'

import { Button, Text } from '@/components'
import { Header } from '@/components/Header'
import React from 'react'
import styled from 'styled-components'

interface onboardingLayoutPropsType {
  children: React.ReactNode
  title: string
  subTitle: string
  bottomText?: string
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
    bottomText,
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
              <Text as="t4" color="neutral500">
                건너뛰기
              </Text>
            </div>
          )
        }
      />
      <OnBoardingQuestionSection>
        <Text as="h2">{title}</Text>
        <Text as="t3" color="neutral500">
          {subTitle}
        </Text>
      </OnBoardingQuestionSection>
      <OnBoardingContentSection>{children}</OnBoardingContentSection>

      {bottomText && (
        <OnBoardingBottomTextSection>
          <Text as="t4" color="neutral500">
            {bottomText}
          </Text>
        </OnBoardingBottomTextSection>
      )}

      <OnBoardingButtonSection>
        <Button fullWidth onClick={handleNextBtnClick}>
          <Text as="h5" color="neutral0">
            다음
          </Text>
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
`

const OnBoardingBottomTextSection = styled.div`
  text-align: center;
`

const OnBoardingButtonSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 7rem;
`
