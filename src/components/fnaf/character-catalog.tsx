import { useState } from "react";
import { Search, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { characters, games, type Character } from "@/lib/fnaf-data";
import { pendingCharacters } from "@/lib/fnaf-pending";
import { CharacterModal } from "./character-modal";
export function CharacterCatalog() {
  const [query, setQuery] = useState("");
  const [continuity, setContinuity] = useState("Todos");
  const [group, setGroup] = useState("Todos");
  const [selected, setSelected] = useState<Character | null>(null);
  const groups = [...new Set(characters.map((c) => c.group ?? "Outros"))];
  const match = (name: string) =>
    name.toLocaleLowerCase("pt-BR").includes(query.toLocaleLowerCase("pt-BR"));
  const visible = characters.filter(
    (c) =>
      match(c.name) &&
      (continuity === "Todos" || c.continuity === continuity) &&
      (group === "Todos" || c.group === group),
  );
  const pending = pendingCharacters.filter(
    (c) =>
      match(c.name) && (continuity === "Todos" || c.continuity === continuity) && group === "Todos",
  );
  return (
    <main className="container catalog-main">
      <div className="section-code">ENCICLOPÉDIA / PERSONAGENS</div>
      <h1>Os animatrônicos</h1>
      <p className="catalog-intro">
        Jogos, variantes, skins, livros e filmes. Cada continuidade guarda seus próprios segredos.
      </p>
      <div className="catalog-coverage">
        <strong>{characters.length} retratos disponíveis</strong>
        <span>
          Acervo parcial: imagens de livros, filmes, skins e alguns jogos recentes ainda não foram
          verificadas.
        </span>
      </div>
      <div className="catalog-toolbar">
        <div className="search-wrap">
          <Search />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Buscar animatrônico"
            placeholder="Buscar animatrônico..."
          />
        </div>
        <select
          className="tier-select"
          aria-label="Filtrar continuidade"
          value={continuity}
          onChange={(e) => {
            setContinuity(e.target.value);
            setGroup("Todos");
          }}
        >
          {["Todos", "Jogos", "Skins AR", "Livros", "Filmes"].map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>
        <select
          className="tier-select"
          aria-label="Filtrar família"
          value={group}
          onChange={(e) => setGroup(e.target.value)}
        >
          <option>Todos</option>
          {groups.map((g) => (
            <option key={g}>{g}</option>
          ))}
        </select>
        <span className="catalog-count">
          {visible.length} retratos · {pending.length} registros sem imagem
        </span>
      </div>
      <div className="catalog-grid">
        {visible.map((c) => (
          <article className="catalog-card" key={c.id}>
            <Button
              variant="ghost"
              className="catalog-open"
              onClick={() => setSelected(c)}
              aria-label={`Abrir ${c.name}`}
            >
              <img src={c.image} alt={c.name} loading="lazy" width={420} height={420} />
              <span className="catalog-open-icon">
                <ArrowUpRight />
              </span>
            </Button>
            <div className="catalog-card-info">
              <p className="section-code">{c.group}</p>
              <h2>{c.name}</h2>
              <p>{c.game ? games.find((g) => g.slug === c.game)?.short : "Jogos principais"}</p>
              <small className="catalog-image-kind">
                {c.imageKind === "fanart" ? "Fan art" : "Imagem de referência"}
              </small>
              <p className="soul-name">{c.soul}</p>
              {c.source && (
                <a className="catalog-source" href={c.source} target="_blank" rel="noreferrer">
                  Fonte da imagem <ArrowUpRight size={10} />
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
      {pending.length > 0 && (
        <section className="catalog-pending">
          <div className="section-head">
            <div>
              <div className="section-code">REGISTROS / IMAGENS PENDENTES</div>
              <h2>Além do acervo atual</h2>
              <p>
                Estes registros ainda não têm imagem própria verificada; nenhuma imagem de outro
                personagem foi usada no lugar.
              </p>
            </div>
          </div>
          <div className="pending-grid">
            {pending.map((c, i) => (
              <article key={`${c.name}-${i}`}>
                <span>{c.continuity}</span>
                <h3>{c.name}</h3>
                <p>{c.origin}</p>
                <small>Imagem pendente</small>
              </article>
            ))}
          </div>
        </section>
      )}
      {!visible.length && !pending.length && <p className="empty">Nenhum personagem encontrado.</p>}
      {selected && <CharacterModal character={selected} onClose={() => setSelected(null)} />}
    </main>
  );
}
