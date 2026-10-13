import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { type Character } from "@/lib/fnaf-data";
import { Portraits } from "./character-portraits";

export function CharacterModal({
  character,
  onClose,
}: {
  character: Character;
  onClose: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const previous = document.activeElement;
    closeRef.current?.focus();
    const handler = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "Tab") {
        event.preventDefault();
        closeRef.current?.focus();
      }
    };
    document.addEventListener("keydown", handler);
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = original;
      if (previous instanceof HTMLElement) previous.focus();
    };
  }, [onClose]);
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="character-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="character-name"
        onClick={(e) => e.stopPropagation()}
      >
        <Button
          ref={closeRef}
          variant="ghost"
          size="icon"
          className="modal-close"
          onClick={onClose}
          aria-label="Fechar detalhes"
        >
          <X />
        </Button>
        <Portraits character={character} />
        <div className="modal-info">
          <div className="section-code">DOSSIÊ DO ANIMATRÔNICO</div>
          <h2 id="character-name">{character.name}</h2>
          <p className="soul-name">{character.soul}</p>
          <div className="cast-status">{character.status}</div>
          <p>{character.description}</p>
          <div className="art-note">
            {character.imageKind === "reference"
              ? "Imagem de referência do personagem. Créditos aos criadores de FNAF e ao acervo indicado."
              : "Fan art e retratos simbólicos; não são imagens oficiais."}
          </div>
        </div>
      </div>
    </div>
  );
}
