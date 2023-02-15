import { Color } from 'styled-components'

import icons from './assets'

export interface IconProps {
  as: keyof typeof icons
  size?: number
  color?: keyof Color
}

const Icon = ({ as, size = 16, color = 'neutral900' }: IconProps) => {
  const Icon = icons[as]

  return <Icon width={size} height={size} fill={color} />
}

export default Icon
