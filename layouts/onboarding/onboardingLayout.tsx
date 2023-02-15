'use client'

import React from 'react'
import styled from 'styled-components'

interface onboardingLayoutPropsType {
  children: React.ReactNode
  title: string
  subTitle: string
  handleSkipBtnClick: () => void
  handleNextBtnClick: () => void
}

const OnBoardingLayout = (props: onboardingLayoutPropsType) => {
  const { children, title, subTitle, handleSkipBtnClick, handleNextBtnClick } =
    props

  return (
    <OnBoardingLayoutStyle>
      <OnBoardingNavigationSection>
        <div></div>
        <span onClick={handleSkipBtnClick}>건너뛰기기</span>
      </OnBoardingNavigationSection>
      <OnBoardingQuestionSection>
        <h1>{title}</h1>
        <h1>{subTitle}</h1>
      </OnBoardingQuestionSection>
      <OnBoardingContentSection>{children}</OnBoardingContentSection>
      <OnBoardingButtonSection>
        <button onClick={handleNextBtnClick}>다음</button>
      </OnBoardingButtonSection>
    </OnBoardingLayoutStyle>
  )
}

export default OnBoardingLayout

const OnBoardingLayoutStyle = styled.div`
  width: 100%;
  padding: 2rem;
`

const OnBoardingNavigationSection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 3rem;
`

const OnBoardingQuestionSection = styled.div`
  width: 100%;
  height: 14rem;

  h1:nth-child(1) {
    margin-bottom: 2rem;
  }
`

const OnBoardingContentSection = styled.div`
  width: 100%;
  height: calc(100vh - 3rem - 14rem - 8rem - 4rem);

  /* padding: 2.5rem; */
  background-color: pink;
`

const OnBoardingButtonSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 7rem;
`
