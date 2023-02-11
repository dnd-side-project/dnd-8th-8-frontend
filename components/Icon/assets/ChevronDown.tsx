import type { SvgProps } from '../'

const ChevronDown = (props: SvgProps) => (
  <svg {...props}>
    <path
      d="M13.5 6L8 11L2.5 6"
      stroke="currentColor"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default ChevronDown
