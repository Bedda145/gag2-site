import type { Rarity } from "../types";
import { rarityColors } from "../data/rarityColors";

export default function RarityBadge({ rarity }: { rarity: Rarity }) {
  if (rarity === "super") {
    return <span className="rarity-badge rarity-super super-gradient">super</span>;
  }
  const s = rarityColors[rarity];
  return (
    <span className="rarity-badge" style={{ backgroundColor: s.bg, borderColor: s.border }}>
      {rarity}
    </span>
  );
}