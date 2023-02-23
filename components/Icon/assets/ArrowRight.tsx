import { SvgProps } from '../Icon'

const ArrowRight = (props: SvgProps) => (
  <svg {...props}>
    <path
      d="M0.5 8.5H15.5"
      stroke="currentColor"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.5 3.5L15.5 8.5L10.5 13.5"
      stroke="currentColor"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default ArrowRight
