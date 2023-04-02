import ArrowLeft from './ArrowLeft'
import ArrowRight from './ArrowRight'
import Bride from './Bride'
import Calendar from './Calendar'
import Card from './Card'
import Check from './Check'
import Checkbox from './Checkbox'
import ChevronDown from './ChevronDown'
import ChevronLeft from './ChevronLeft'
import ChevronRight from './ChevronRight'
import ChevronUp from './ChevronUp'
import Close from './Close'
import Contract from './Contract'
import ContractCheck from './ContractCheck'
import Expand from './Expand'
import Flower from './Flower'
import Google from './Google'
import Groom from './Groom'
import Heart from './Heart'
import Hide from './Hide'
import Inform from './Inform'
import Island from './Island'
import Kakao from './Kakao'
import Maple from './Maple'
import Minus from './Minus'
import Money from './Money'
import MoreHorizontal from './MoreHorizontal'
import MoreVertical from './MoreVertical'
import O from './O'
import Pencil from './Pencil'
import Picture from './Picture'
import Pin from './Pin'
import Play from './Play'
import Plus from './Plus'
import Roadmap1 from './Roadmap1'
import Roadmap2 from './Roadmap2'
import Roadmap3 from './Roadmap3'
import Roadmap4 from './Roadmap4'
import Roadmap5 from './Roadmap5'
import Roadmap6 from './Roadmap6'
import Search from './Search'
import Slash from './Slash'
import Snowman from './Snowman'
import Trash from './Trash'
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
import X from './X'

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
  "contract":Contract,
  "contract-check":ContractCheck,
  "expand": Expand,
  "google": Google,
  "hide": Hide,
  "inform": Inform,
  "kakao": Kakao,
  "minus": Minus,
  "more-horizontal": MoreHorizontal,
  "more-vertical": MoreVertical,
  "pencil": Pencil,
  "picture": Picture,
  "play": Play,
  "plus": Plus,
  "search": Search,
  "slash": Slash,
  "view": View,
  "o": O,
  "x": X,
  "warning": Warning,
  "bride": Bride,
  "groom": Groom,
  "heart": Heart,
  "flower": Flower,
  "card": Card,
  "island": Island,
  "maple": Maple,
  "money": Money,
  "pin": Pin,
  "snowman": Snowman,
  "trash": Trash,
  "roadmap-1": Roadmap1,
  "roadmap-2": Roadmap2,
  "roadmap-3": Roadmap3,
  "roadmap-4": Roadmap4,
  "roadmap-5": Roadmap5,
  "roadmap-6": Roadmap6,
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
