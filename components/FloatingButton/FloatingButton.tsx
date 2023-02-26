import { Button, Icon, IconName } from '@/components'
import { Layout } from './FloatingButton.styled'

export interface FloatingButtonProps {
  icon: IconName
  onClick: () => void
}

const FloatingButton = ({ icon, onClick }: FloatingButtonProps) => {
  return (
    <Layout>
      <Button borderRadius="50%" width="6rem" height="6rem" onClick={onClick}>
        <Icon as={icon} color="neutral0" size={24} />
      </Button>
    </Layout>
  )
}

export default FloatingButton
