import type { Seed } from "../types";
import RarityBadge from "./RarityBadge";

interface SeedRowProps {
  seed: Seed;
  imageUrl?: string;
}

export default function SeedRow({ seed, imageUrl }: SeedRowProps) {
  return (
    <li className="plate plate-interactive flex items-center gap-4 p-3">
      <div className="flex size-16 shrink-0 items-center justify-center rounded-lg border-2 border-bark-700 bg-bark-800">
        {imageUrl ? (
          <img src={imageUrl} alt={seed.name} className="size-12 object-contain" loading="lazy" />
        ) : (
          <span className="font-display text-2xl text-cream/30">?</span>
        )}
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <h3 className="truncate font-display text-xl font-semibold">{seed.name}</h3>
          {seed.obtain === "pack" && (
            <span className="rounded bg-bark-700 px-1.5 py-0.5 text-xs font-bold text-cream/60">
              PACK
            </span>
          )}
        </div>
        <p className="font-bold text-leaf">
          {seed.cost !== null ? `${seed.cost.toLocaleString()}¢` : "TBA"}
        </p>
      </div>

      <RarityBadge rarity={seed.rarity} />
    </li>
  );
}