import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { characters, type Character } from "@/lib/fnaf-data";
import { CharacterModal } from "./character-modal";

export function AnimatronicList() {
  const [selected, setSelected] = useState<Character | null>(null);
  const sorted = [...characters].sort((a, b) => a.name.localeCompare(b.name, "pt"));
  return (
    <section className="tier-section roster-section" id="lista">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="section-code">02 / ARQUIVO DE ANIMATRÔNICOS</div>
            <h2>Cada rosto, um por um.</h2>
            <p>
              Todos os animatrônicos do arquivo, em ordem alfabética. Clique para abrir o dossiê.
            </p>
          </div>
          <span className="roster-count">{sorted.length} REGISTROS</span>
        </div>
        <ul className="roster-list">
          {sorted.map((c) => (
            <li key={c.id}>
              <button
                type="button"
                className="roster-row"
                onClick={() => setSelected(c)}
                aria-label={`Ver detalhes de ${c.name}`}
              >
                <img src={c.image} alt="" width={52} height={52} loading="lazy" />
                <span className="roster-name">{c.name}</span>
                <span className="roster-soul">{c.soul}</span>
                <span className="roster-meta">
                  {[c.continuity ?? "Jogos", c.group].filter(Boolean).join(" · ")}
                </span>
                <ChevronRight className="roster-arrow" />
              </button>
            </li>
          ))}
        </ul>
        <p className="tier-note">
          REGISTROS DO ARQUIVO · FAN ART E IMAGENS DE REFERÊNCIA ROTULADAS
        </p>
      </div>
      {selected && <CharacterModal character={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
