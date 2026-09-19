import type { IconType } from "react-icons";
import {
  FaHeart,
  FaBirthdayCake,
  FaBaby,
  FaCameraRetro,
  FaHome,
  FaGem,
} from "react-icons/fa";

export interface Service {
  title: string;
  description: string;
  icon: IconType;
}

export const services: Service[] = [
  {
    title: "Marriage & Haldi Functions",
    description:
      "Candid and traditional coverage of your wedding rituals and haldi ceremony, capturing every colour and emotion.",
    icon: FaHeart,
  },
  {
    title: "Birthday Celebrations",
    description:
      "Fun, vibrant photography for birthday parties of all ages — from milestone birthdays to kids' theme parties.",
    icon: FaBirthdayCake,
  },
  {
    title: "Baby Shower & Naming Ceremony",
    description:
      "Warm, joyful frames of baby showers and naming ceremonies to preserve these tender family milestones.",
    icon: FaBaby,
  },
  {
    title: "Pre- & Post-Wedding Shoots",
    description:
      "Cinematic outdoor and studio shoots that tell your love story before and after the big day.",
    icon: FaCameraRetro,
  },
  {
    title: "House Warming Functions",
    description:
      "Elegant coverage of griha pravesh and house warming ceremonies, capturing rituals and family togetherness.",
    icon: FaHome,
  },
  {
    title: "Half Saree & Traditional Events",
    description:
      "Beautifully styled photography for half saree functions and other traditional cultural celebrations.",
    icon: FaGem,
  },
];
