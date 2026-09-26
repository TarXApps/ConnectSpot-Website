import { Zap, Bus, Bot, Cog, Rocket, Truck } from "lucide-react";
import CrossedSwords from "../components/icons/CrossedSwords";

import ev1 from "../assets/events/ev-1.jpg";
import ev2 from "../assets/events/ev-2.jpg";
import ev3 from "../assets/events/ev-3.jpg";
import evAutoShow from "../assets/portfolio/ev-auto-show.jpg";

export const editions = [
  { title: "1st Edition — EV Auto Show", image: ev1 },
  { title: "2nd Edition — EV Auto Show", image: ev2 },
  { title: "3rd Edition — EV Auto Show", image: ev3 },
  { title: "4th Edition — EV Auto Show", image: evAutoShow },
];

export const comingSoon = [
  {
    title: "5th Edition — EV Auto Show",
    url: "https://evautoshowonline.com/",
    icon: Zap,
  },
  {
    title: "Saudi Alive",
    url: null,
    icon: CrossedSwords,
  },
  {
    title: "Bus Expo",
    url: null,
    icon: Bus,
  },
  {
    title: "Autonomous Mobility Expo",
    url: null,
    icon: Bot,
  },
  {
    title: "Autotech",
    url: null,
    icon: Cog,
  },
  {
    title: "Space Tech",
    url: null,
    icon: Rocket,
  },
  {
    title: "Saudi Logistics Expo",
    url: null,
    icon: Truck,
  },
];
