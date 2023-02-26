import { Color } from 'styled-components'
import icons, { IconName } from './assets'
import { Svg } from './Icon.styled'

export interface IconProps {
  name: IconName
  size?: number
  color?: keyof Color
}

export interface SvgProps extends Omit<IconProps, 'name'> {}

export interface StyledSvgProps
  extends Omit<React.SVGProps<SVGSVGElement>, 'color'> {
  color?: keyof Color
}

const Icon = ({
  name,
  size = 16,
  color = 'secondary500',
  ...props
}: IconProps): React.ReactElement<SVGElement> => {
  const scaleFactor = size / 16

  return (
    <Svg
      as={icons[name]}
      width={size}
      height={size}
      color={color}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g transform={`scale(${scaleFactor})`} />
    </Svg>
  )
}

export default Icon
