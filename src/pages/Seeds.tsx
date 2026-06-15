import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import { seeds } from "../data/seeds";
import type { Rarity } from "../types";
import SeedRow from "../components/SeedRow";
import { useWikiImages } from "../hooks/useWikiImages";


const rarityFilters: (Rarity | "all")[] = [
  "all", "common", "uncommon", "rare", "epic", "legendary", "mythic", "super",
];

export default function Seeds() {
  const [search, setSearch] = useState("");
  const [rarity, setRarity] = useState<Rarity | "all">("all");

  const titles = useMemo(() => seeds.map((s) => s.name), []);
  const images = useWikiImages(titles);

  const visibleSeeds = seeds.filter((seed) => {
    const matchesSearch = seed.name.toLowerCase().includes(search.toLowerCase());
    const matchesRarity = rarity === "all" || seed.rarity === rarity;
    return matchesSearch && matchesRarity;
  });

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="font-display text-4xl font-bold">
        Seeds <span className="text-cream/40 text-2xl">({seeds.length})</span>
      </h1>

      {/* search */}
      <div className="plate mt-6 flex items-center gap-3 px-4 py-3">
        <Search size={20} className="text-cream/40" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search seeds..."
          className="w-full bg-transparent outline-none placeholder:text-cream/30"
        />
      </div>

      {/* rarity filter */}
      <div className="mt-4 flex flex-wrap gap-2">
        {rarityFilters.map((r) => (
          <button
            key={r}
            onClick={() => setRarity(r)}
            className={`rounded-lg px-3 py-1.5 font-display text-sm font-semibold capitalize transition-colors ${
              rarity === r
                ? "bg-leaf-dim text-cream"
                : "bg-bark-800 text-cream/60 hover:text-cream"
            }`}
          >
            {r}
          </button>
        ))}
      </div>

      {/* results */}
      {visibleSeeds.length > 0 ? (
        <ul className="mt-6 flex flex-col gap-3">
          {visibleSeeds.map((seed) => (
             <SeedRow key={seed.id} seed={seed} imageUrl={images[seed.name]} />
          ))}
        </ul>
      ) : (
        <p className="mt-10 text-center text-cream/40">
          No seeds match "{search}". Try a different search or filter.
        </p>
      )}
    </div>
  );
}