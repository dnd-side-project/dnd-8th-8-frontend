import { useState } from 'react'
import { ServerStyleSheet, StyleSheetManager } from 'styled-components'

const useStyledComponentsRegistry = () => {
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet())

  const styledComponentsFlushEffect = () => {
    const styles = styledComponentsStyleSheet.getStyleElement()
    styledComponentsStyleSheet.seal()
    return <>{styles}</>
  }

  function StyledComponentsRegistry({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
        {children}
      </StyleSheetManager>
    )
  }

  return [StyledComponentsRegistry, styledComponentsFlushEffect] as const
}

export default useStyledComponentsRegistry
