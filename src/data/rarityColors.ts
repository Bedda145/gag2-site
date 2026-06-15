import type { Rarity } from "../types";

// one source of truth for rarity colors, used by badges and roll tiers
export const rarityColors: Record<Rarity, { bg: string; border: string }> = {
  common:    { bg: "#a9aeb4", border: "#dfe3e7" },
  uncommon:  { bg: "#22a838", border: "#5fe06c" },
  rare:      { bg: "#2fa8f0", border: "#83d2ff" },
  epic:      { bg: "#9b59e8", border: "#c9a4f5" },
  legendary: { bg: "#f2c50f", border: "#ffe175" },
  mythic:    { bg: "#e0312f", border: "#ff8a7a" },
  super:     { bg: "", border: "#ffffff" }, // super uses the gradient class
};