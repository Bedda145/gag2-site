import type { Pack } from "../types";

export const packs: Pack[] = [
  {
    id: "ghost-pepper",
    name: "Ghost Pepper Pack",
    drops: [
      { seedId: "baby-cactus", chance: 50 },
      { seedId: "horned-melon", chance: 30 },
      { seedId: "glow-mushroom", chance: 15 },
      { seedId: "poison-ivy", chance: 4 },
      { seedId: "ghost-pepper", chance: 1 },
    ],
    tiers: [
      { rolls: 1, cost: 99, rarity: "uncommon" },
      { rolls: 3, cost: 249, rarity: "uncommon" },
      { rolls: 10, cost: 799, rarity: "legendary" },
      { rolls: 50, cost: 4499, rarity: "super" },
    ],
  },
];