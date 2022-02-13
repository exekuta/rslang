import {
  BiArrowToLeft,
  BiArrowToRight,
  BiBookBookmark,
  BiChevronsRight,
  BiHomeCircle,
  BiJoystick,
  BiLineChart,
  BiLogInCircle,
  BiLogOutCircle,
  BiVolumeFull,
} from 'react-icons/bi';
import {
  RiBookMarkLine,
  RiCloseLine,
  RiEyeCloseLine,
  RiEyeLine,
  RiStopFill,
  RiStopLine,
} from 'react-icons/ri';

export const Icon = {
  Home: BiHomeCircle,
  Book: BiBookBookmark,
  BookAlt: RiBookMarkLine,
  Joystick: BiJoystick,
  LogIn: BiLogInCircle,
  LogOut: BiLogOutCircle,
  Chart: BiLineChart,
  ChevronsRight: BiChevronsRight,
  VolumeFull: BiVolumeFull,
  ArrowLeft: BiArrowToLeft,
  ArrowRight: BiArrowToRight,
  Stop: RiStopFill,
  StopLine: RiStopLine,
  Eye: RiEyeLine,
  EyeClose: RiEyeCloseLine,
  Close: RiCloseLine,
} as const;
