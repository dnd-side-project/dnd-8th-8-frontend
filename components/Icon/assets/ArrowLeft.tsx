import { SvgProps } from '../Icon'

const ArrowLeft = (props: SvgProps) => (
  <svg {...props} width="20" height="18" viewBox="0 0 20 18">
    <path
      d="M18.5 8.5H1M1 8.5L9 1M1 8.5L9 16.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default ArrowLeft
