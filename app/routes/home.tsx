import type { Route } from "./+types/home";
import { BirthdayApp } from "../components/BirthdayApp";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Happy Birthday! 💖" },
    { name: "description", content: "A special birthday journey through time and love" },
  ];
}

export default function Home() {
  return <BirthdayApp />;
}
