import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowLeft, ChevronRight } from "lucide-react";
import { games, getGameCharacters, type Game } from "@/lib/fnaf-data";
import { Portraits } from "./character-portraits";

export function LorePage({ game }: { game: Game }) {
  const index = games.findIndex((entry) => entry.slug === game.slug);
  const previous = games[index - 1];
  const next = games[index + 1];
  return (
    <main className="lore-main container">
      <div className="breadcrumb">
        <Link to="/">Arquivo</Link>
        <ChevronRight size={12} />
        <span>{game.short}</span>
      </div>
      <div className="lore-cover">
        <img src={game.image} alt={`Fan art de ${game.short}`} width={512} height={512} />
        <div className="lore-title">
          <div className="eyebrow">
            ARQUIVO {game.number} · {game.group}
          </div>
          <h1>{game.title}</h1>
          <p>{game.subtitle}</p>
        </div>
      </div>
      <div className="lore-layout">
        <article className="story">
          <div className="section-code">O QUE ACONTECEU NESSA ÉPOCA</div>
          <h2>{game.event}</h2>
          {game.story.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          <div className="canon-note">
            <strong>FATOS, PISTAS E INTERPRETAÇÕES</strong>
            {game.caveat}
          </div>
        </article>
        <aside className="lore-aside">
          <dl>
            <dt>LANÇAMENTO</dt>
            <dd>{game.release}</dd>
            <dt>ÉPOCA DA HISTÓRIA</dt>
            <dd>{game.era}</dd>
            <dt>REGISTRO PRINCIPAL</dt>
            <dd>{game.event}</dd>
            <dt>CONTINUIDADE</dt>
            <dd>{game.group === "Extras" ? "Spin-off / história paralela" : "Jogos principais"}</dd>
          </dl>
        </aside>
      </div>
      <section className="cast-section">
        <div className="section-code">POR TRÁS DAS MÁSCARAS</div>
        <h2>Os animatrônicos e suas almas</h2>
        <div className="cast-grid">
          {getGameCharacters(game).map((c) => {
            return (
              <article className="cast-card" key={c.id}>
                <Portraits character={c} />
                <div className="cast-info">
                  <h3>{c.name}</h3>
                  <p className="soul-name">{c.soul}</p>
                  <p className="cast-status">{c.status}</p>
                  <p>{c.description}</p>
                </div>
              </article>
            );
          })}
        </div>
        {getGameCharacters(game).length === 0 && (
          <p className="art-note">
            Nenhuma associação com uma criança é confirmada para a criatura central deste jogo.
          </p>
        )}
        <p className="art-note">
          Retratos de referência e fan art dos personagens disponíveis. Imagens das crianças são
          representações simbólicas. O catálogo continua parcial, especialmente nos jogos recentes.
        </p>
      </section>
      <div className="next-games">
        {previous ? (
          <Link to="/jogos/$slug" params={{ slug: previous.slug }}>
            <ArrowLeft size={15} />
            {previous.short}
          </Link>
        ) : (
          <Link to="/">
            <ArrowLeft size={15} />
            Todos os jogos
          </Link>
        )}
        {next && (
          <Link to="/jogos/$slug" params={{ slug: next.slug }}>
            {next.short}
            <ArrowRight size={15} />
          </Link>
        )}
      </div>
    </main>
  );
}
