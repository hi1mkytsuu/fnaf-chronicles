import { createFileRoute } from "@tanstack/react-router";
import { CharacterCatalog } from "@/components/fnaf/character-catalog";
export const Route = createFileRoute("/animatronicos")({
  head: () => ({
    meta: [
      { title: "Animatrônicos, variantes e continuidades — FNAF Archive" },
      {
        name: "description",
        content:
          "Catálogo de animatrônicos FNAF com retratos individuais, famílias, jogos e registros separados de livros, filmes e skins.",
      },
      { property: "og:title", content: "Animatrônicos — FNAF Archive" },
      {
        property: "og:description",
        content:
          "Explore os personagens, suas variantes e os registros de cada continuidade de FNAF.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CharacterCatalog,
});
