import styled from 'styled-components'

export const Layout = styled.div`
  width: 100%;
  height: 100%;
  padding: 3rem 2rem;
`

export const InfoSection = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding-bottom: 4rem;
`

export const AttachedFileSection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 15rem;

  div:nth-child(1) {
    display: flex;
    flex-direction: column;
    row-gap: 5px;
  }
`

export const ImageSection = styled.div`
  display: flex;
  column-gap: 0.5rem;
  align-items: flex-end;

  div {
    width: 1.6rem;
    height: 1.6rem;
  }
`

export const ButtonSection = styled.div`
  width: 100%;
  padding: 2rem 0;
`

export const FormSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`

export const SingleRow = styled.div`
  display: grid;
  grid-template-columns: 10rem 14rem;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

export const DateWrapper = styled.div`
  display: flex;
  column-gap: 1rem;
  align-items: center;
  justify-content: flex-end;
  padding-right: 1.5rem;
`
