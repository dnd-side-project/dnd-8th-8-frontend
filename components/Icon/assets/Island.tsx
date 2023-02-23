import { SvgProps } from '../Icon'

const Island = (props: SvgProps) => (
  <svg {...props} width="72" height="72" viewBox="0 0 72 72">
    <rect width="72" height="72" fill="url(#pattern0)" />
    <defs>
      <pattern
        id="pattern0"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use xlinkHref="#image0_15_416" transform="scale(0.0138889)" />
      </pattern>
      <image
        id="image0_15_416"
        width="72"
        height="72"
        xlinkHref="data:image/png;base64,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"
      />
    </defs>
  </svg>
)

export default Island
