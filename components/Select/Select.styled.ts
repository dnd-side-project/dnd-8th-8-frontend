import { theme } from '@/styles'
import styled from 'styled-components'

export const SelectLayout = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 10rem;
  background-color: ${theme.color.neutral0};
  border: ${(props: { openOptions: boolean }) =>
    props.openOptions
      ? `1px solid ${theme.color.secondary100}`
      : '1px solid transparent'};
  border-radius: 0.8rem 0.8rem 0 0;
  box-shadow: ${(props: { openOptions: boolean }) =>
    props.openOptions
      ? `0.4rem 0.5rem 1.8rem 0.3rem rgb(0 0 0 / 11%)`
      : 'none'};
`

export const SelectButton = styled.button`
  position: relative;
  display: flex;
  column-gap: 0.5rem;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 3.5rem;
  padding: 0.7rem;
  background-color: transparent;
  border: none;
  border-bottom: ${(props: { openOptions: boolean }) =>
    props.openOptions ? `1px solid ${theme.color.secondary100}` : 'none'};
`

export const StyledSelect = styled.ul`
  position: absolute;
  top: 3.5rem;
  display: ${(props: { openOptions: boolean }) =>
    props.openOptions ? `block` : 'none'};
  width: 10rem;
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 2.4rem;
  color: ${theme.color.secondary900};
  background-color: ${theme.color.neutral0};
  border: 1px solid ${theme.color.secondary100};
  border-top: 0;
  border-radius: 0 0 0.8rem 0.8rem;
  box-shadow: 0.4rem 0.8rem 1.8rem 0.1rem rgb(0 0 0 / 11%);

  li {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 10rem;
    height: 4.5rem;
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 2.4rem;
    border-bottom: 1px solid ${theme.color.secondary100};
  }
`
