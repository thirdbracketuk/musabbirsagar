import { IconType } from "react-icons";

import {
  HiArrowUpRight,
  HiOutlineLink,
  HiArrowTopRightOnSquare,
  HiEnvelope,
  HiCalendarDays,
  HiArrowRight,
  HiOutlineEye,
  HiOutlineEyeSlash,
  HiOutlineDocument,
  HiOutlineGlobeAsiaAustralia,
  HiOutlineRocketLaunch,
} from "react-icons/hi2";

import {
  PiHouseDuotone,
  PiUserCircleDuotone,
  PiGridFourDuotone,
  PiBookBookmarkDuotone,
  PiImageDuotone,
} from "react-icons/pi";

import {
  SiJavascript,
  SiNextdotjs,
  SiFigma,
  SiSupabase,
  SiNpm,
  SiPayloadcms,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

import {
  FaDiscord,
  FaGithub,
  FaLinkedin,
  FaX,
  FaThreads,
  FaInstagram,
  FaXTwitter,
  FaFacebook,
  FaPinterest,
  FaWhatsapp,
  FaReddit,
  FaTelegram,
  FaNpm,
} from "react-icons/fa6";
import {
  RiBook2Fill,
  RiBook3Fill,
  RiBookFill,
  RiBookLine,
  RiGridFill,
  RiHome9Fill,
  RiHome9Line,
  RiImage2Fill,
  RiImage2Line,
  RiUser6Fill,
} from "react-icons/ri";

export const iconLibrary: Record<string, IconType> = {
  arrowUpRight: HiArrowUpRight,
  arrowRight: HiArrowRight,
  email: HiEnvelope,
  globe: HiOutlineGlobeAsiaAustralia,
  person: RiUser6Fill,
  grid: RiGridFill,
  book: RiBookLine,
  openLink: HiOutlineLink,
  calendar: HiCalendarDays,
  home: RiHome9Fill,
  gallery: RiImage2Line,
  discord: FaDiscord,
  eye: HiOutlineEye,
  eyeOff: HiOutlineEyeSlash,
  github: FaGithub,
  linkedin: FaLinkedin,
  npm: SiNpm,
  x: FaX,
  twitter: FaXTwitter,
  threads: FaThreads,
  arrowUpRightFromSquare: HiArrowTopRightOnSquare,
  document: HiOutlineDocument,
  rocket: HiOutlineRocketLaunch,
  javascript: SiJavascript,
  nextjs: SiNextdotjs,
  supabase: SiSupabase,
  figma: SiFigma,
  payload: SiPayloadcms,
  typescript: SiTypescript,
  react: SiReact,
  tailwindcss: SiTailwindcss,
  facebook: FaFacebook,
  pinterest: FaPinterest,
  whatsapp: FaWhatsapp,
  reddit: FaReddit,
  telegram: FaTelegram,
  instagram: FaInstagram,
};

export type IconLibrary = typeof iconLibrary;
export type IconName = keyof IconLibrary;
