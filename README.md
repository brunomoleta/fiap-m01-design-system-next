# 🌟💻 Design System e Aplicação financeira 💻🌟

Esse projeto é referente ao Módulo 01 da Especialização em Front end da FIAP 2024-2025.

Boas-vindas ao nosso Design System e app financeiro 💸!


## Índice

- [Links importantes](#-links-importantes)
- [Scripts](#-scripts)
- [Arquitetura geral do projeto](#-arquitetura-geral-do-projeto)
- [Como executar o projeto](#-ds-como-executar-o-projeto)
  - [Requisitos](#requisitos)
- [Design System](#-design-system)
  - [Tecnologias utilizadas](#-ds-tecnologias-utilizadas)
      - [ds-Principais](#ds-principais)
      - [Relacionadas ao Storybook](#relacionadas-ao-storybook)
  - [Arquitetura do Design System](#-arquitetura-do-design-system)
    - [Design System Geral](#-design-system-geral) 
    - [Components](#-components) 
    - [Documentação](#-documentação) 
    - [Tokens](#-tokens) 
- [Aplicação Financeira](#-aplicação-financeira)


<hr style="border-top: 3px solid #bbb;">


# 🔗 Links importantes

- [Pós Tech Front end Engineering](https://postech.fiap.com.br/curso/front-end-engineering/)
- [Handoff do Design](https://www.figma.com/design/ns5TC3X5Xr8V7I3LYKg9KA/Projeto-Financeiro?node-id=503-4264)
- [Nosso Storybook em ambiente de produção](#)

---

# 🗵 Scripts

- Inicializar o Design System no Storybook: ``pnpm storybook``
- Inicializar a aplicação em modo de desenvolvimento: ``pnpm dev``

# 🏗️ Arquitetura geral do projeto

Esse projeto foi pensado como um [monorepo](https://ggdaltoso.dev/posts/monolito-multirepo-ou-monorepo/).

- `.github/`: Configurações de CI/CD vinculadas ao Github.
- `packages/`: 🌟 onde a magia acontece. Aqui existem as pastas do `design-system` e da `aplicacao-financeira`.
- `.gitignore`: arquivo que lista os arquivos que não devem ser versionados no git.
- `lerna.json`: Controla a maneira do gestor de repos chamado `Lerna` se comporta.
- `LICENSE`: arquivo de licença do projeto.
- `package.json`: arquivo que lista as dependências do projeto.
- `pnpm-lock.yaml`: contém os pacotes e versões das dependências instaladas.
- `pnpm-workspace.yaml`: configura a possibilidade de um `package` consumir outro.
- `README.md`: Você está aqui 😺.

```bash
.
├── README.md # Você está aqui!
├── .github/
├── node_modules
├── .gitignore
├── lerna.json
├── LICENSE
├── package.json
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
└── packages
    ├── design-system
    └── aplicacao-financeira
```

## 🚀 DS Como executar o projeto

### Requisitos

- Certifique que você tem o Node.js instalado em sua máquina.
  Caso você não tenha, por favor siga as instruções no [site oficial](https://nodejs.org/) 😉

#### Instalando o ``pnpm``

É recomendado que você instale-o globalmente. Você pode fazê-lo com o comando:

````bash
    npm npm install -g pnpm 
    # ou
    npm install -g @pnpm/exe
````

O comando acima fará o ``pnpm`` disponível a partir de qualquer terminal em seu Sistema.

Após fechar o terminal onde ocorreu a instalação, abra outro e rode o seguinte para garantir que a instalação foi um sucesso:
````bash
    pnpm -v
````

Caso tudo tenha dado certo o ``Bash`` retornará a versão instalada (ex: `9.9.0.`)


### Ativar o Design System localmente
```
# ✨ Para iniciar o servidor localmente
pnpm storybook
```

<hr style="border-top: 3px solid #bbb;">


---

# 🖼️ Design System

Esse repositório tem o propósito de padronizar e unificar implementações de components,
design tokens e até mesmo assets estáticos (como ilustrações em SVG, PNG, fontes...)
para que possamos reusar entre os projetos e também mapearmos 1:1 (ou o mais próximo disso)
na programação o que temos na parte do Design em nosso Figma.

## 📚 DS Tecnologias utilizadas

### DS Principais
- [React](https://react.dev/): É uma biblioteca JavaScript para construir interfaces de usuário reativas e escaláveis.
- [Next.js](https://nextjs.org/): Framework de React que possibilita a utilização do Front end no Back end.
- [React DOM](https://www.npmjs.com/package/react-dom): É um pacote para manipular elementos do DOM no React, fornecendo uma maneira fácil de renderizar componentes React no navegador.
- [Storybook](https://storybook.js.org/): Ambiente front end usado para criar, testar e validar componentes UI.
- [Tailwind CSS](https://tailwindcss.com/): Framework de CSS onde se aplica a estilização diretamente no HTML através de _utilities_.
- [Typescript](https://www.typescriptlang.org/docs/): Superset de Javascript para torná-lo mais robusto em ambiente de desenvolvimento.

### Relacionadas ao Storybook
- [@chromatic-com/storybook](https://www.chromatic.com/storybook): Ferramenta para teste visual de componentes para Storybook;
- [@storybook/addon-essentials](https://www.npmjs.com/package/@storybook/addon-essentials);
- [@storybook/addon-interactions](https://www.npmjs.com/package/@storybook/addon-interactions): dependência para debugging visual de interações e testes no Storybook;
- [@storybook/addon-links](https://www.npmjs.com/package/@storybook/addon-links): Usado para criar links que navegam entre Stories dentro do Storybook;
- [@storybook/addon-onboarding](https://www.npmjs.com/package/@storybook/addon-onboarding): Oferece um guia para aplicar funcionalidades do Storybook; ajudando a colocar a mão na massa na ferramenta;
- [@storybook/addon-themes](https://www.npmjs.com/package/@storybook/addon-themes): Aplica temas no seu Storybook (ex: Dark Theme);
- [@storybook/blocks](https://www.npmjs.com/package/@storybook/blocks): Usado para produzir Documentação de componentes no Storybook;
- [@storybook/react](https://www.npmjs.com/package/@storybook/react): Necessário para usar o React junto ao Storybook;
- [@storybook/react-vite](https://www.npmjs.com/package/@storybook/react-vite): Build para React e Storybook;
- [@storybook/test](https://www.npmjs.com/package/@storybook/test): Contém ferramentas para testar `stories`;

---

## 🏗️ Arquitetura do Design System

> Partindo do pressuposto que estamos em ``./packages/design-system/`` 👀


```bash
├── .storybook
│   ├── components
│   │   ├── main.ts
│   │   └── preview.ts
├── src
│   ├── assets
│   │   ├── illustrations
│   │   ├── typography
│   ├── components
│   │   ├── DataDisplay 
│   │   ├── Navigation 
│   │   │   └── Link
│   │   ├── Form 
│   │   │   ├── Button
│   │   │   └── Dropdown
│   │   ├── Exemplo
│   │   │   ├── index.stories.tsx
│   │   │   ├── index.ts
│   │   │   └── styles.ts
│   │   ├── Utils
│   │   │   └── Divider
│   │   └── index.ts
│   ├── docs
│   │   ├── foundations
│   │   │   ├── breakpoints
│   │   │   ├── colors
│   │   │   ├── icons
│   │   │   ├── illustrations
│   │   │   ├── spacing
│   │   │   └── typography
│   │   ├── comecePorAqui.mdx
│   │   └── Configure.mdx
│   └── tokens
│       ├── colors.ts
│       ├── grid.ts
│       ├── spacing.ts
│       ├── typography.ts
│       └── index.ts
├── .eslintrc.json
├── .gitignore
├── .chromatic.config.json
├── next.config.mjs
├── package.json
├── postcss.config.js
├── tailwind.config.ts
└── tsconfig.json
```
### 📷 Design System Geral

- `packages/design-system/`: O nosso pacote "core", onde todo o design system de fato está;
- `packages/design-system/.storybook`: Pasta que contém a configuração do `Storybook`. Se houve erro no `build` é possível que o problema esteja aqui;

### 🧩 Components

- `src/assets`: Arquivos externos que ajuda a formar componentes como `.png` e `.svg`;
- `src/components/Buttons`: Componentes que visualmente parecem botões;
- `src/components/Form`: Componentes vinculados a formulários;
- `src/components/Navigation`: Componentes vinculados a redirecionamento de páginas;
- `src/components/DataDisplay`: Componentes não interativas como Títulos de página;
- `src/components/Utils`: Componentes auxiliares;

### 📚 Documentação

- ``src/docs/foundations``: Contém os elementos básicos das Foundations como _cores_, _tipografia_ etc;
  - Dentro destas existem arquivos ``.mdx``. Estes são um misto de componentes `.tsx` com markdown `.md`.
  - Pode conter também uma pasta de `assets` e de `components`;
- ``src/docs/components``: Componentes-base usados na documentação;

### 💳 Tokens

> Arquivos vinculados com os valores específicos passados pelo time de Design no Figma.


<hr style="border-top: 3px solid #bbb;">

# 💸️ Aplicação financeira

