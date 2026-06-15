export type Rarity =
  | "common" | "uncommon" | "rare" | "epic"
  | "legendary" | "mythic" | "super";

export type Obtain = "shop" | "pack" | "unknown";

export interface Seed {
  id: string;
  name: string;          // also the wiki page title
  rarity: Rarity;
  cost: number | null;   // null = not yet known (TBA)
  obtain: Obtain;
}

export interface PackDrop {
  seedId: string;   // references Seed.id
  chance: number;   // percent, e.g. 50 = 50%
}

export interface RollTier {
  rolls: number;
  cost: number;
  rarity: Rarity;   // NEW — colors the tier
}

export interface Pack {
  id: string;
  name: string;
  drops: PackDrop[];
  tiers: RollTier[];
}