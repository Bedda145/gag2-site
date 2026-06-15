import type { Seed } from "../types";


// cost: null = TBA. Update as the game/wiki updates.
export const seeds: Seed[] = [
  // shop
  { id: "carrot", name: "Carrot", rarity: "common", cost: 1, obtain: "shop" },
  { id: "strawberry", name: "Strawberry", rarity: "common", cost: 10, obtain: "shop" },
  { id: "blueberry", name: "Blueberry", rarity: "common", cost: 25, obtain: "shop" },
  { id: "tulip", name: "Tulip", rarity: "uncommon", cost: 40, obtain: "shop" },
  { id: "tomato", name: "Tomato", rarity: "uncommon", cost: 200, obtain: "shop" },
  { id: "apple", name: "Apple", rarity: "uncommon", cost: 400, obtain: "shop" },
  { id: "bamboo", name: "Bamboo", rarity: "rare", cost: 700, obtain: "shop" },
  { id: "corn", name: "Corn", rarity: "rare", cost: 2500, obtain: "shop" },
  { id: "cactus", name: "Cactus", rarity: "rare", cost: 5000, obtain: "shop" },
  { id: "pineapple", name: "Pineapple", rarity: "rare", cost: 10000, obtain: "shop" },
  { id: "mushroom", name: "Mushroom", rarity: "epic", cost: 15000, obtain: "shop" },
  { id: "green-bean", name: "Green Bean", rarity: "epic", cost: 20000, obtain: "shop" },
  { id: "banana", name: "Banana", rarity: "epic", cost: 30000, obtain: "shop" },
  { id: "grape", name: "Grape", rarity: "epic", cost: 50000, obtain: "shop" },
  { id: "coconut", name: "Coconut", rarity: "epic", cost: 70000, obtain: "shop" },
  { id: "mango", name: "Mango", rarity: "epic", cost: 300000, obtain: "shop" },
  { id: "dragon-fruit", name: "Dragon Fruit", rarity: "legendary", cost: 120000, obtain: "shop" },
  { id: "acorn", name: "Acorn", rarity: "legendary", cost: 700000, obtain: "shop" },
  { id: "cherry", name: "Cherry", rarity: "legendary", cost: 1200000, obtain: "shop" },
  { id: "sunflower", name: "Sunflower", rarity: "legendary", cost: 5000000, obtain: "shop" },
  { id: "venus-fly-trap", name: "Venus Fly Trap", rarity: "mythic", cost: 7000000, obtain: "shop" },
  { id: "pomegranate", name: "Pomegranate", rarity: "mythic", cost: 12000000, obtain: "shop" },
  { id: "poison-apple", name: "Poison Apple", rarity: "mythic", cost: 25000000, obtain: "shop" },
  { id: "moon-bloom", name: "Moon Bloom", rarity: "super", cost: 65000000, obtain: "shop" },
  { id: "dragons-breath", name: "Dragon's Breath", rarity: "super", cost: 90000000, obtain: "shop" },

  // Ghost Pepper Pack
  { id: "horned-melon", name: "Horned Melon", rarity: "rare", cost: null, obtain: "pack" },
  { id: "baby-cactus", name: "Baby Cactus", rarity: "rare", cost: null, obtain: "pack" },
  { id: "glow-mushroom", name: "Glow Mushroom", rarity: "epic", cost: null, obtain: "pack" },
  { id: "poison-ivy", name: "Poison Ivy", rarity: "legendary", cost: null, obtain: "pack" },
  { id: "ghost-pepper", name: "Ghost Pepper", rarity: "mythic", cost: null, obtain: "pack" },
];

// quick lookup by id, built once
const seedsById = new Map(seeds.map((s) => [s.id, s]));
export const getSeed = (id: string) => seedsById.get(id);