import { createFileRoute } from "@tanstack/react-router";
import { Home } from "@/components/fnaf/home";
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FNAF Archive — Jogos, histórias e animatrônicos" },
      {
        name: "description",
        content:
          "Explore as histórias de Five Nights at Freddy’s, as almas dos animatrônicos e a lista completa de animatrônicos.",
      },
      { property: "og:title", content: "FNAF Archive — Por trás de cada máscara" },
      {
        property: "og:description",
        content:
          "As histórias dos jogos FNAF, seus animatrônicos e as crianças por trás das máscaras.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});
