import { SvgProps } from '../Icon'

const Expand = (props: SvgProps) => (
  <svg {...props}>
    <path
      d="M11 3L3 11"
      stroke="currentColor"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11 7L7 11"
      stroke="currentColor"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default Expand
