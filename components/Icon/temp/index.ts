export { default as ArrowLeft } from './ArrowLeft'
export { default as ArrowRight } from './ArrowRight'
export { default as Calendar } from './Calendar'
export { default as CheckBox } from './CheckBox'
export { default as ChevronDown } from './ChevronDown'
export { default as ChevronLeft } from './ChevronLeft'
export { default as ChevronRight } from './ChevronRight'
export { default as ChevronUp } from './ChevronUp'
export { default as Close } from './Close'
export { default as Hide } from './Hide'
export { default as Inform } from './Inform'
export { default as Search } from './Search'
export { default as View } from './View'
export { default as Warning } from './Warning'

// prettier-ignore
const icons = {
  "chevron-left": ChevronLeft,
  "chevron-right": ChevronRight,
  "gps": Gps,
  "edit": Edit,
  "list": List,
  "map-pin": MapPin,
  "menu": Menu,
  "more-horizontal": MoreHorizontal,
  "more-vertical": MoreVertical,
  "search": Search,
  "share": Share,
  "share2": Share2,
  "stack": Stack,
  "x": X,
};

export type IconName = keyof typeof icons

export const iconList = Object.keys(icons) as IconName[]

export default icons
