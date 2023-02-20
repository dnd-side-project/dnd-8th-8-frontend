import icons, { IconName } from './assets'

export interface IconProps {
  as: IconName
}

const Icon = ({ as }: IconProps) => {
  const Icon = icons[as]

  return <Icon />
}

export default Icon
