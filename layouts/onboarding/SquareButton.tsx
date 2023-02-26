import { Button, Icon, IconName, Text } from '@/components'
import styled, { Color } from 'styled-components'

interface SquareButtonProps {
  onClick: () => void
  active?: boolean
  icon?: IconName
  iconColor?: keyof Color
  label: string
}

const SquareButton = ({
  onClick,
  active,
  icon,
  iconColor,
  label,
}: SquareButtonProps) => {
  return (
    <Button
      onClick={onClick}
      active={active}
      backgroundColor="neutral0"
      border
      borderColor="secondary300"
      width="120px"
      height="120px"
    >
      <Content>
        {icon && <Icon name={icon} color={active ? 'neutral0' : iconColor} />}

        <Text as="h4" color={active ? 'neutral0' : 'secondary400'}>
          {label}
        </Text>
      </Content>
    </Button>
  )
}

export default SquareButton

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  align-items: center;
`
