import { Badge } from '@/components'

export interface DDayBadgeProps {
  day: number
}

const DDayBadge = ({ day }: DDayBadgeProps) => {
  const getBackgroundColor = (day: number) => {
    if (day > 50) {
      return 'secondary500'
    } else if (day > 20) {
      return 'secondary500'
    } else if (day > 7) {
      return 'green'
    } else {
      return 'primary600'
    }
  }

  return (
    <Badge backgroundColor={getBackgroundColor(day)}>{`D-${
      day === 0 ? 'day' : day
    }`}</Badge>
  )
}

export default DDayBadge
