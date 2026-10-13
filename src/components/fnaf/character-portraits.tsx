import { type Character } from "@/lib/fnaf-data";

export function Portraits({ character }: { character: Character }) {
  return (
    <div
      className={`cast-images ${character.imageKind === "reference" ? "reference" : ""} ${character.child ? "paired" : ""}`}
    >
      <img src={character.image} alt={character.name} width={512} height={512} loading="lazy" />
      {character.child && (
        <img
          src={character.child}
          alt={`Representação artística de ${character.soul}`}
          width={512}
          height={512}
          loading="lazy"
        />
      )}
    </div>
  );
}
