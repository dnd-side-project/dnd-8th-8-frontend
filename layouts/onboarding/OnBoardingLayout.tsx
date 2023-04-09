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
  buttonActive?: boolean
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
    buttonActive = true,
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
        {buttonActive ? (
          <Button fullWidth onClick={handleNextBtnClick}>
            <Text as="h5" color="neutral0">
              다음
            </Text>
          </Button>
        ) : (
          <Button fullWidth backgroundColor="secondary100">
            <Text as="h5" color="neutral500">
              다음
            </Text>
          </Button>
        )}
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
`

const OnBoardingBottomTextSection = styled.div`
  position: fixed;
  bottom: 10rem;
  left: 0;
  width: 100%;
  text-align: center;
`

const OnBoardingButtonSection = styled.div`
  position: fixed;
  bottom: 2rem;
  left: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc(100% - 4rem);
  height: 7rem;
`
