import { createFileRoute, notFound } from "@tanstack/react-router";
import { games } from "@/lib/fnaf-data";
import { LorePage } from "@/components/fnaf/lore-page";
export const Route = createFileRoute("/jogos/$slug")({
  loader: ({ params }) => {
    const game = games.find((g) => g.slug === params.slug);
    if (!game) throw notFound();
    return game;
  },
  head: ({ loaderData }) => ({
    meta: [
      {
        title: loaderData
          ? `${loaderData.short}: história e almas — FNAF Archive`
          : "Arquivo não encontrado — FNAF Archive",
      },
      {
        name: "description",
        content: loaderData
          ? `${loaderData.subtitle} Conheça a história de ${loaderData.title}, seus animatrônicos e as ligações com as crianças.`
          : "O arquivo solicitado não foi encontrado.",
      },
      {
        property: "og:title",
        content: loaderData ? `${loaderData.short} — FNAF Archive` : "Arquivo não encontrado",
      },
      { property: "og:description", content: loaderData?.subtitle ?? "Arquivo indisponível." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: GamePage,
});
function GamePage() {
  const game = Route.useLoaderData();
  return <LorePage game={game} />;
}
