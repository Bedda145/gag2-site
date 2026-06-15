import { packs } from "../data/packs";
import PackCard from "../components/PackCard";

export default function Packs() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="font-display text-4xl font-bold">
        Packs <span className="text-cream/40 text-2xl">({packs.length})</span>
      </h1>
      <p className="mt-2 text-cream/60">
        Every shop pack with full drop chances and roll costs.
      </p>

      <div className="mt-8 flex flex-col gap-8">
        {packs.map((pack) => (
          <PackCard key={pack.id} pack={pack} />
        ))}
      </div>
    </div>
  );
}