import { Button, Icon, IconName, Text } from '@/components'
import styled from 'styled-components'

interface SquareButtonProps {
  onClick: () => void
  active?: boolean
  icon?: IconName
  emoji?: string
  label: string
}

const SquareButton = ({
  onClick,
  active,
  icon,
  emoji,
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
        {icon && (
          <Icon as={icon} color={active ? 'neutral0' : 'secondary400'} />
        )}

        {emoji && <Text as="h3">{emoji}</Text>}

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
  gap: 12px;
  align-items: center;
`