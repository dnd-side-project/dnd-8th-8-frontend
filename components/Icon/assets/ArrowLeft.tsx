import { SvgProps } from '../Icon'

const ArrowLeft = (props: SvgProps) => (
  <svg {...props}>
    <path
      d="M15.5 8.5H0.5"
      stroke="currentColor"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.5 3.5L0.5 8.5L5.5 13.5"
      stroke="currentColor"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default ArrowLeft
