'use client'

import { useEffect } from 'react'
import { Content, Overlay } from './Modal.styled'

export interface ModalProps {
  children: React.ReactNode
  onClose: () => void
  isOpen: boolean
}

const Modal = ({ isOpen, children, onClose }: ModalProps) => {
  const handleTouchMove = (e: TouchEvent) => {
    e.stopPropagation()
  }

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      document.addEventListener('touchmove', handleTouchMove)
    } else {
      document.body.style.overflow = 'null'
      document.removeEventListener('touchmove', handleTouchMove)
    }
    return () => {
      document.body.style.overflow = 'null'
      document.removeEventListener('touchmove', handleTouchMove)
    }
  }, [isOpen])

  return (
    <Overlay onClick={onClose}>
      <Content onClick={handleTouchMove}>{children}</Content>
    </Overlay>
  )
}

export default Modal
