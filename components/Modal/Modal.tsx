import { Content, Overlay } from './Modal.styled'

export interface ModalProps {
  children: React.ReactNode
  onClose: () => void
}

const Modal = ({ children, onClose }: ModalProps) => {
  return (
    <Overlay onClick={onClose}>
      <Content>{children}</Content>
    </Overlay>
  )
}

export default Modal
