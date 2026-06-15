import { Link } from "react-router-dom";
import { Leaf, Gift, Calculator, type LucideIcon } from "lucide-react";
import RarityBadge from "../components/RarityBadge";
import type { Rarity } from "../types";

interface Tool {
  to: string;
  icon: LucideIcon;
  title: string;
  description: string;
  ready: boolean;
}

const tools: Tool[] = [
  {
    to: "/seeds",
    icon: Leaf,
    title: "Plants",
    description: "Every plant in the game — values, rarities and where to get them.",
    ready: true,
  },
  {
    to: "/packs",
    icon: Gift,
    title: "Packs",
    description: "Shop packs with full drop chances, so you know what you're rolling for.",
    ready: true,
  },
  {
    to: "/",
    icon: Calculator,
    title: "Calculators",
    description: "Profit and odds calculators. Coming once the economy settles.",
    ready: false,
  },
];

const rarityOrder: Rarity[] = [
  "super",
  "mythic",
  "legendary",
  "epic",
  "rare",
  "uncommon",
  "common",
];

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-4">
      <section className="grid items-center gap-12 py-16 md:grid-cols-[1.2fr_1fr] md:py-24">
        <div>
          <p className="mb-3 font-bold uppercase tracking-widest text-leaf-dim">
            Grow a Garden 2
          </p>
          <h1 className="font-display text-5xl font-bold leading-tight md:text-6xl">
            Everything you need, <span className="text-leaf">all in one garden.</span>
          </h1>
          <p className="mt-5 max-w-lg text-lg text-cream/60">
            Plant data, pack odds and tools for Grow a Garden 2 — built by
            players, updated as the game grows.
          </p>
          <Link
            to="/seeds"
            className="plate plate-interactive mt-8 inline-block px-6 py-3 font-display text-lg font-semibold text-leaf"
          >
            Browse plants
          </Link>
        </div>

        <div className="plate p-5">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-cream/40">
            Rarity scale
          </p>
          <ul className="flex flex-col items-start gap-2.5">
            {rarityOrder.map((r) => (
              <li key={r}>
                <RarityBadge rarity={r} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="grid gap-6 pb-24 sm:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool) => (
          <Link
            key={tool.title}
            to={tool.ready ? tool.to : "/"}
            className={`plate relative p-6 ${
              tool.ready ? "plate-interactive" : "opacity-55 cursor-default"
            }`}
          >
            <div className="mb-4 inline-flex rounded-xl bg-bark-800 p-3 text-leaf">
              <tool.icon size={28} strokeWidth={2.25} />
            </div>

            {!tool.ready && (
              <span className="absolute top-5 right-5 rounded-full bg-bark-800 px-3 py-1 text-xs font-extrabold tracking-wide text-cream/50">
                COMING SOON
              </span>
            )}

            <h2 className="font-display text-2xl font-semibold">{tool.title}</h2>
            <p className="mt-2 text-cream/60">{tool.description}</p>
          </Link>
        ))}
      </section>
    </div>
  );
}