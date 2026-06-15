import type { Pack } from "../types";
import { getSeed } from "../data/seeds";
import { rarityColors } from "../data/rarityColors";
import RarityBadge from "./RarityBadge";
import { useWikiImages } from "../hooks/useWikiImages";
import { useMemo } from "react";
import { Eye } from "lucide-react";
import crateImg from "../assets/ghost-pepper-pack.png";

export default function PackCard({ pack }: { pack: Pack }) {
  const titles = useMemo(
    () => pack.drops.map((d) => getSeed(d.seedId)?.name ?? "").filter(Boolean),
    [pack]
  );
  const images = useWikiImages(titles);

  return (
    <section className="plate overflow-hidden">
      <header className="bg-linear-to-b from-[#e23c3c] to-[#a51f1f] px-5 py-3">
        <h2 className="font-display text-2xl font-bold text-white [text-shadow:0_2px_0_rgb(0_0_0/0.35)]">
          {pack.name}
        </h2>
      </header>

      <div className="flex flex-col gap-5 p-5 lg:flex-row">
        {/* crate image on the left */}
        <div className="flex shrink-0 items-center justify-center lg:w-44">
          <div className="flex aspect-square w-40 items-center justify-center rounded-xl border-2 border-bark-700 bg-bark-800">
            <img src={crateImg} alt={`${pack.name} crate`} className="size-32 object-contain" />
          </div>
        </div>

        <div className="flex-1">
          {/* drops */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {pack.drops.map((drop) => {
              const seed = getSeed(drop.seedId);
              if (!seed) return null;
              const img = images[seed.name];
              const color = rarityColors[seed.rarity];

              return (
                <div
                  key={drop.seedId}
                  className="flex flex-col items-center justify-between gap-2 rounded-xl border-2 border-bark-700 bg-bark-800 p-3"
                >
                  {/* fixed height so 1-line and 2-line names align */}
                  <p className="flex h-9 items-center text-center font-display text-sm font-semibold leading-tight">
                    {seed.name}
                  </p>

                  <div className="relative flex size-28 items-center justify-center rounded-lg bg-bark-900">
                    {img ? (
                      <img src={img} alt={seed.name} className="size-24 object-contain" loading="lazy" />
                    ) : (
                      <span className="font-display text-4xl text-cream/30">?</span>
                    )}

                    <Eye size={16} className="absolute bottom-1 left-1 text-cream/40" />

                    <span
                      className={`absolute bottom-1 right-1 crosshatch overflow-hidden rounded-md border-2 px-1.5 font-display text-xs font-bold text-white [text-shadow:0_1px_0_rgb(0_0_0/0.6)] ${
                        seed.rarity === "super" ? "super-gradient" : ""
                      }`}
                      style={{
                        backgroundColor: seed.rarity === "super" ? undefined : color.bg,
                        borderColor: color.border,
                      }}
                    >
                      <span className="relative z-10">{drop.chance}%</span>
                    </span>
                  </div>

                  <RarityBadge rarity={seed.rarity} />
                </div>
              );
            })}
          </div>

          {/* roll tiers, rarity-colored */}
          <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {pack.tiers.map((tier) => {
              const color = rarityColors[tier.rarity];
              const isSuper = tier.rarity === "super";
              return (
                <div
                  key={tier.rolls}
                  className={`relative crosshatch rounded-xl border-2 p-3 text-center ${
                    isSuper ? "super-gradient" : ""
                  }`}
                  style={{
                    backgroundColor: isSuper ? undefined : color.bg,
                    borderColor: color.border,
                  }}
                >
                  <p className="relative z-10 font-display text-sm font-bold text-white [text-shadow:0_1px_0_rgb(0_0_0/0.5)]">
                    {tier.rolls} {tier.rolls === 1 ? "Roll" : "Rolls"}
                  </p>
                  <p className="relative z-10 mt-1 font-display text-lg font-bold text-white [text-shadow:0_1px_0_rgb(0_0_0/0.5)]">
                    R$ {tier.cost.toLocaleString()}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}