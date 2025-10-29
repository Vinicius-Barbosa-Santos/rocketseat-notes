<p align="center">
  <a href="#-visão-geral">Visão Geral</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-funcionalidades">Funcionalidades</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-executar">Como Executar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-arquitetura--rotas">Arquitetura & Rotas</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-api--autenticação">API & Autenticação</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-tecnologias">Tecnologias</a>
</p>

## 🧭 Visão Geral

Rocket Notes é um aplicativo de notas focado em produtividade. Ele permite criar notas com título, descrição, links úteis e marcadores (tags), além de editar perfil e avatar, com autenticação por e-mail e senha.

- Público-alvo: quem quer organizar referências e links associados a notas.
- Stack: React + Vite no front, API hospedada no Render.
- Navegação protegida: rotas de app só liberadas após login.

## ✨ Funcionalidades

- 📝 Criar, listar e visualizar notas
- 🔗 Adicionar/remover links úteis em cada nota
- 🏷️ Adicionar/remover tags e filtrar notas por tags
- 🔍 Busca por título das notas
- 👤 Edição de perfil (nome, e-mail, senha)
- 📷 Upload de avatar
- 🔐 Autenticação (login/cadastro) e sessão persistida

## 🚀 Como Executar

Pré-requisitos:

- Node.js 18+ recomendado
- `npm` instalado

Passos:

- Clone o repositório
- Instale as dependências:
  - `npm install`
- Execute em desenvolvimento:
  - `npm run dev`
- Acesse: [`http://localhost:5173`](http://localhost:5173)

Build e preview:

- Gerar build:
  - `npm run build`
- Servir a build localmente:
  - `npm run preview`
- Preview padrão: [`http://localhost:4173`](http://localhost:4173)

## 🧱 Arquitetura & Rotas

- Roteamento condicional:
  - `src/routes/index.jsx` seleciona entre rotas autenticadas e públicas com base em `user` do contexto.
- Rotas públicas (`src/routes/authRoutes.jsx`):
  - `/` → Login (SignIn)
  - `/register` → Cadastro (SignOut)
- Rotas autenticadas (`src/routes/appRoutes.jsx`):
  - `/` → Home (lista e filtro de notas)
  - `/new` → Nova Nota
  - `/details/:id` → Detalhes da Nota
  - `/profile` → Perfil do Usuário

Páginas e componentes principais:

- Home: busca, filtro por tags, listagem de notas
- New: criação de título, descrição, links e tags
- Details: exibe descrição, links e tags; permite excluir nota
- Profile: atualização de dados e avatar
- Header: mostra avatar e nome; botão de sair

## 🔌 API & Autenticação

Base da API (`src/services/api.js`):

- `baseURL`: `https://rocketnotes-api-w69u.onrender.com`

Fluxo de autenticação (`src/contexts/AuthContext.jsx`):

- Login:
  - `POST /sessions` → retorna `{ user, token }`
  - Armazena em `localStorage` as chaves `@user` e `@token`
  - Define `Authorization: Bearer <token>` no `axios`
- Persistência:
  - Ao iniciar, lê `@user` e `@token` e reconfigura o `axios`
- Logout:
  - Remove `@user` e `@token` e limpa o contexto
- Perfil:
  - `PATCH /users/avatar` para upload de avatar (via `FormData`)
  - `PUT /users` para atualizar dados do usuário

Principais endpoints usados no app:

- `GET /tags` → lista de tags
- `GET /notes?title=<q>&tags=<lista>` → notas filtradas
- `GET /notes/:id` → detalhes da nota
- `DELETE /notes/:id` → exclui nota
- `POST /users` → cadastro
- `POST /sessions` → login
- `PATCH /users/avatar` → upload avatar
- `PUT /users` → atualização de perfil

Como alterar a API:

- Edite `src/services/api.js` e ajuste `baseURL` para seu backend.

## 🛠️ Scripts

Do `package.json`:

- `npm run dev` → inicia Vite em desenvolvimento
- `npm run build` → gera build de produção
- `npm run preview` → serve a build gerada
- `npm run lint` → executa ESLint

## 🗂️ Estrutura de Pastas

- `src/components/*` → componentes reutilizáveis (Button, Input, Note, Tag, etc.)
- `src/pages/*` → páginas (Home, New, Details, Profile, SignIn, SignOut)
- `src/routes/*` → gerenciamento de rotas e proteção
- `src/contexts/AuthContext.jsx` → contexto de autenticação
- `src/services/api.js` → cliente HTTP (`axios`) com `baseURL`
- `src/styles/*` → tema e estilos globais (styled-components)
- `public/` → assets públicos
- `github/Capa.png` → imagem de capa usada no README

## 🧩 Tecnologias

Esse projeto foi desenvolvido com:

- ⚡ [Vite](https://vitejs.dev/)
- ⚛️ [React](https://reactjs.org)
- 🎨 [styled-components](https://styled-components.com/)
- 🧭 [react-router-dom](https://reactrouter.com/)
- 🔌 [axios](https://axios-http.com/)
- 🎯 [react-icons](https://react-icons.github.io/react-icons/)
- ✅ ESLint (plugins React/Hooks/Refresh)

## 📸 Telas & UX

- Login/Cadastro com layout dividido (banner + formulário)
- Header com avatar, saudação e botão de logout
- Lista de notas com tags e busca incremental
- Detalhes com links clicáveis e marcadores
- Perfil com preview instantâneo do avatar
