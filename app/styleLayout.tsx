'use client'

import { useServerInsertedHTML } from 'next/navigation'

import { useStyledComponentsRegistry } from '@/hooks'

const RootStyleLayout = ({ children }: { children: React.ReactNode }) => {
  const [StyledComponentsRegistry, styledComponentsFlushEffect] =
    useStyledComponentsRegistry()

  useServerInsertedHTML(() => <>{styledComponentsFlushEffect()}</>)

  return <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
}

export default RootStyleLayout
