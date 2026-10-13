# FNAF Archive

Arquivo de fãs em português com jogos, histórias e um catálogo de animatrônicos.

## Executar

Com Node.js e npm instalados, abra a pasta do projeto e execute:

```sh
npm install
npm run dev
```

## Organização

```text
src/
  routes/                  Páginas e navegação
  components/fnaf/
    site-layout.tsx        Cabeçalho e rodapé
    home.tsx               Página inicial e jogos
    lore-page.tsx          História de cada jogo
    animatronic-list.tsx   Lista alfabética
    character-catalog.tsx  Catálogo com busca e filtros
    character-modal.tsx    Detalhes do personagem
    character-portraits.tsx Retratos dos personagens e crianças
  components/ui/           Controles compartilhados
  lib/fnaf-data.ts          Histórias e associações dos personagens
  lib/fnaf-catalog.ts       Catálogo com imagens de referência
  lib/fnaf-pending.ts       Registros sem imagem verificada
  assets/                  Imagens e referências do acervo
  styles.css               Estilos do site
  test/                    Testes
```

Os arquivos `.asset.json` são referências às imagens hospedadas, não cópias das imagens. As imagens hospedadas precisam estar acessíveis para aparecerem no site.

## Verificações

```sh
npm test
npm run build
```

## Créditos e acervo

Five Nights at Freddy’s pertence a Scott Cawthon e aos respectivos criadores. As fontes das imagens de referência aparecem no catálogo; fan art e retratos simbólicos são identificados separadamente.

O acervo é parcial. Registros sem imagens verificadas permanecem separados, e ligações confirmadas não são confundidas com teorias.

## Tecnologias

TanStack Start, React, TypeScript e Tailwind CSS.
