import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, ArrowRight, Search, ShieldAlert } from "lucide-react";
import { Button } from "@/components/ui/button";
import { characters, games } from "@/lib/fnaf-data";
import stage from "@/assets/fnaf-stage.jpg";
import { AnimatronicList } from "./animatronic-list";

export function Home() {
  const [filter, setFilter] = useState("Todos");
  const [query, setQuery] = useState("");
  const visible = games.filter(
    (g) =>
      (filter === "Todos" || g.group === filter) &&
      `${g.title} ${g.short}`.toLowerCase().includes(query.toLowerCase()),
  );
  return (
    <>
      <section className="hero">
        <img
          className="hero-img"
          src={stage}
          alt="Freddy, Bonnie e Chica no palco abandonado da pizzaria"
          width={1536}
          height={1024}
          fetchPriority="high"
        />
        <div className="container">
          <div className="hero-copy">
            <div className="eyebrow">ARQUIVO RESTRITO · FAZBEAR ENTERTAINMENT</div>
            <h1>
              Five Nights
              <br />
              at <span>Freddy’s.</span>
            </h1>
            <p>
              Por trás de cada máscara, uma história.
              <br />
              Por trás de cada história, alguém que nunca foi embora.
            </p>
            <div className="hero-actions">
              <Button asChild>
                <Link to="/" hash="jogos">
                  Explorar os jogos <ArrowRight />
                </Link>
              </Button>
              <span className="quiet">{games.length} ARQUIVOS ENCONTRADOS</span>
            </div>
          </div>
        </div>
        <div className="camera-label">
          <span className="rec">
            <i />
            REC
          </span>
          <span>CAM 01 · SHOW STAGE</span>
        </div>
      </section>
      <section className="archive container" id="jogos">
        <div className="section-head">
          <div>
            <div className="section-code">01 / OS JOGOS</div>
            <h2>Cada noite guarda um segredo.</h2>
            <p>Uma história fragmentada. Todas as peças estão aqui.</p>
          </div>
          <div className="archive-tools">
            {["Todos", "Clássicos", "Nova era", "Extras"].map((f) => (
              <Button
                variant="ghost"
                key={f}
                className={`filter ${filter === f ? "selected" : ""}`}
                aria-pressed={filter === f}
                onClick={() => setFilter(f)}
              >
                {f}
              </Button>
            ))}
            <div className="search-wrap">
              <Search />
              <input
                aria-label="Buscar jogo"
                placeholder="Buscar jogo..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="games-grid">
          {visible.map((g) => (
            <Link
              key={g.slug}
              to="/jogos/$slug"
              params={{ slug: g.slug }}
              className="game-card"
              aria-label={`Abrir história de ${g.short}`}
            >
              <div className="game-image">
                <img
                  src={g.image}
                  alt={`Fan art de personagem de ${g.short}`}
                  width={512}
                  height={512}
                  loading="lazy"
                />
                <span className="game-index">
                  {g.number === "EX" ? "EXTRA" : `ARQUIVO ${g.number}`}
                </span>
                <span className="game-release">{g.release}</span>
                <h3 className="game-image-title">{g.short}</h3>
              </div>
              <div className="game-meta">
                <p>{g.subtitle}</p>
                <div className="card-bottom">
                  <span>{g.group.toUpperCase()}</span>
                  <ArrowUpRight />
                </div>
              </div>
            </Link>
          ))}
        </div>
        {!visible.length && <div className="empty">Nenhum arquivo encontrado para “{query}”.</div>}
        <div className="archive-end">
          <ShieldAlert size={12} />
          <span>AS HISTÓRIAS CONTÊM SPOILERS DOS JOGOS</span>
        </div>
      </section>
      <section className="container catalog-invitation">
        <div>
          <div className="section-code">DOSSIÊS / ANIMATRÔNICOS</div>
          <h2>{characters.length} rostos. Nenhuma máscara igual.</h2>
          <p>Toys, Withereds, Phantoms, Nightmares, Funtimes, Rockstars e Adventure.</p>
        </div>
        <Button asChild variant="outline">
          <Link to="/animatronicos">
            Ver o catálogo <ArrowRight />
          </Link>
        </Button>
      </section>
      <AnimatronicList />
    </>
  );
}
