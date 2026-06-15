# 🌱 GrowHub

A fan-made companion site for **Grow a Garden 2** — plant data, pack odds, and tools, all in one place. Built by players, updated as the game grows.

> ⚠️ GrowHub is a fan-made project and is **not** affiliated with or endorsed by the developers of Grow a Garden 2.

## ✨ Features

- **Seeds / Plants browser** — every plant in the game with its value, rarity, and where to get it, plus search and rarity filtering.
- **Packs** — every shop pack with full drop chances and roll costs.
- **Rarity scale** — Common through Super, color-coded across the whole site.
- **Live wiki images** — item art is pulled automatically from the game wiki via the MediaWiki API.
- **Calculators** *(coming soon)* — profit and odds calculators.

## 🛠️ Tech Stack

- [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) — build tool & dev server
- [Tailwind CSS](https://tailwindcss.com/) v4
- MediaWiki API for item images

## 🚀 Getting Started

You'll need [Node.js](https://nodejs.org/) (v18 or newer) and npm installed.

```bash
# 1. Clone the repo
git clone https://github.com/Bedda145/gag2-site.git

# 2. Go into the project folder
cd gag2-site

# 3. Install dependencies
npm install

# 4. Start the dev server
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173) in your browser.

### Other commands

```bash
npm run build    # build for production (output goes to /dist)
npm run preview  # preview the production build locally
```

## 📁 Project Structure

```
src/
├── assets/        # logo, pack images, etc.
├── components/    # reusable UI (SeedRow, PackCard, Navbar, RarityBadge...)
├── data/          # typed game data (seeds, packs, pets, mutations)
├── hooks/         # custom hooks (useWikiImages, useLocalStorage)
├── pages/         # route pages (Home, Seeds, Packs, Mutations, Pets...)
├── types/         # shared TypeScript types
└── utils/         # helpers (calcProfit, formatNumber)
```

## 🤝 Contributing

This is a two-person project. If you're picking it up:

1. Clone the repo and follow the **Getting Started** steps above.
2. Create a branch for your work: `git checkout -b feature/your-feature`
3. Commit your changes, push the branch, and open a pull request when it's ready.
4. Keep your branch up to date with `main` to avoid messy merge conflicts.

## 👥 Authors

- **Kristoffer** — [@Bedda145](https://github.com/Bedda145)
- **Sigge** — [@friend-github-handle](https://github.com/friend-github-handle)
