import ArrowLeft from './ArrowLeft'
import ArrowRight from './ArrowRight'
import Calendar from './Calendar'
import Check from './Check'
import CheckBox from './CheckBox'
import ChevronDown from './ChevronDown'
import ChevronLeft from './ChevronLeft'
import ChevronRight from './ChevronRight'
import ChevronUp from './ChevronUp'
import Close from './Close'
import Expand from './Expand'
import Hide from './Hide'
import Inform from './Inform'
import Minus from './Minus'
import MoreHorizontal from './MoreHorizontal'
import MoreVertical from './MoreVertical'
import Picture from './Picture'
import Play from './Play'
import Search from './Search'
import Slash from './Slash'
import View from './View'
import Warning from './Warning'
import WCheckList from './WCheckList'
import WCollection from './WCollection'
import WCommunity from './WCommunity'
import WHome from './WHome'
import WMyPage from './WMyPage'

// prettier-ignore
const icons = {
  "arrow-left": ArrowLeft,
  "arrow-right": ArrowRight,
  "calendar": Calendar,
  "check": Check,
  "check-box": CheckBox,
  "chevron-down": ChevronDown,
  "chevron-left": ChevronLeft,
  "chevron-right": ChevronRight,
  "chevron-up": ChevronUp,
  "close": Close,
  "expand": Expand,
  "hide": Hide,
  "inform": Inform,
  "minus": Minus,
  "more-horizontal": MoreHorizontal,
  "more-vertical": MoreVertical,
  "picture": Picture,
  "play": Play,
  "search": Search,
  "slash": Slash,
  "view": View,
  "warning": Warning,
  "w-check-list": WCheckList,
  "w-collection": WCollection,
  "w-community": WCommunity,
  "w-home": WHome,
  "w-my-page": WMyPage,
};

export type IconName = keyof typeof icons

export const iconList = Object.keys(icons) as IconName[]

export default icons
