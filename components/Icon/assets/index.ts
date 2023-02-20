import ArrowLeft from './ArrowLeft'
import ArrowRight from './ArrowRight'
import Calendar from './Calendar'
import Check from './Check'
import Checkbox from './Checkbox'
import ChevronDown from './ChevronDown'
import ChevronLeft from './ChevronLeft'
import ChevronRight from './ChevronRight'
import ChevronUp from './ChevronUp'
import Close from './Close'
import Expand from './Expand'
import Google from './Google'
import Hide from './Hide'
import Inform from './Inform'
import Kakao from './Kakao'
import Minus from './Minus'
import MoreHorizontal from './MoreHorizontal'
import MoreVertical from './MoreVertical'
import Picture from './Picture'
import Play from './Play'
import Search from './Search'
import Slash from './Slash'
import View from './View'
import Warning from './Warning'
import WChecklist from './WChecklist'
import WChecklistDisable from './WChecklistDisable'
import WCollection from './WCollection'
import WCollectionDisable from './WCollectionDisable'
import WCommunity from './WCommunity'
import WCommunityDisable from './WCommunityDisable'
import WHome from './WHome'
import WHomeDisable from './WHomeDisable'
import WMyPage from './WMyPage'
import WMyPageDisable from './WMyPageDisable'

// prettier-ignore
const icons = {
  "arrow-left": ArrowLeft,
  "arrow-right": ArrowRight,
  "calendar": Calendar,
  "check": Check,
  "checkbox": Checkbox,
  "chevron-down": ChevronDown,
  "chevron-left": ChevronLeft,
  "chevron-right": ChevronRight,
  "chevron-up": ChevronUp,
  "close": Close,
  "expand": Expand,
  "google": Google,
  "hide": Hide,
  "inform": Inform,
  "kakao": Kakao,
  "minus": Minus,
  "more-horizontal": MoreHorizontal,
  "more-vertical": MoreVertical,
  "picture": Picture,
  "play": Play,
  "search": Search,
  "slash": Slash,
  "view": View,
  "warning": Warning,
  "w-checklist": WChecklist,
  "w-checklist-disable": WChecklistDisable,
  "w-collection": WCollection,
  "w-collection-disable": WCollectionDisable,
  "w-community": WCommunity,
  "w-community-disable": WCommunityDisable,
  "w-home": WHome,
  "w-home-disable": WHomeDisable,
  "w-my-page": WMyPage,
  "w-my-page-disable": WMyPageDisable,
}

export type IconName = keyof typeof icons

export default icons
