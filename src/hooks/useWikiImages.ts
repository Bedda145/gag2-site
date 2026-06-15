import { useEffect, useState } from "react";

const API = "https://growagarden2.fandom.com/api.php";

interface WikiPage {
  title: string;
  thumbnail?: { source: string };
}

/** Fetches the main image of each wiki page (by title) in one batched call.
 *  Returns a map of title -> image URL. Titles with no real image are absent. */
export function useWikiImages(titles: string[]) {
  const [images, setImages] = useState<Record<string, string>>({});

  useEffect(() => {
    if (titles.length === 0) return;

    const controller = new AbortController();

    const params = new URLSearchParams({
      action: "query",
      format: "json",
      origin: "*",                 // enables CORS on Fandom — no proxy needed
      prop: "pageimages",
      piprop: "thumbnail",
      pithumbsize: "128",
      titles: titles.join("|"),    // batch: one request for all pages
    });

    fetch(`${API}?${params}`, { signal: controller.signal })
      .then((res) => res.json())
      .then((data) => {
        const result: Record<string, string> = {};
        const pages: Record<string, WikiPage> = data?.query?.pages ?? {};

        for (const page of Object.values(pages)) {
          const url = page.thumbnail?.source;
          // skip missing images and the wiki's literal Placeholder.png
          if (url && !url.includes("Placeholder")) {
            result[page.title] = url;
          }
        }
        setImages(result);
      })
      .catch((err) => {
        if (err.name !== "AbortError") console.error("Wiki image fetch failed:", err);
      });

    return () => controller.abort();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [titles.join("|")]);

  return images;
}