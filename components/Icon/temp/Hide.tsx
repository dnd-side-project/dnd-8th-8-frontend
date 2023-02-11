import type { SvgProps } from '../'

const View = (props: SvgProps) => (
  <svg {...props}>
    <g clipPath="url(#clip0_764_5528)">
      <path
        d="M0.5 8C0.5 8 3.5 2.5 8 2.5C12.5 2.5 15.5 8 15.5 8C15.5 8 12.5 13.5 8 13.5C3.5 13.5 0.5 8 0.5 8Z"
        stroke="currentColor"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 8C5 6.343 6.343 5 8 5"
        stroke="currentColor"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 8C11 9.657 9.657 11 8 11"
        stroke="currentColor"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1 15L15 1"
        stroke="currentColor"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_764_5528">
        <rect width="16" height="16" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default View
