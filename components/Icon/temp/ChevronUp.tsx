import type { SvgProps } from '../'

const ChevronUp = (props: SvgProps) => (
  <svg {...props}>
    <path
      d="M2.5 11L8 6L13.5 11"
      stroke="currentColor"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default ChevronUp
