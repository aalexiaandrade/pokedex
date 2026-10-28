# ⚡ Pokédex 

Uma aplicação web desenvolvida com **React e Vite** para explorar Pokémon, consultar seus atributos, pesquisar por nome ou número e filtrar por tipo. A aplicação também permite visualizar detalhes individuais dos Pokémon e consultar as equipes dos treinadores cadastrados.

## 🎮 Sobre o projeto

Este projeto foi desenvolvido com o objetivo de praticar conceitos fundamentais do desenvolvimento frontend com React, incluindo componentes reutilizáveis, gerenciamento de estado, renderização dinâmica de listas, filtros e organização de dados em JSON.

A interface foi inspirada no universo Pokémon, com uma identidade visual temática, cards interativos e navegação entre a Pokédex e a área de treinadores.

## ✨ Funcionalidades

### 🐾 Pokédex

- **Listagem de Pokémon:** exibe os Pokémon cadastrados na base de dados.
- **Pesquisa:** permite pesquisar por nome ou número de identificação.
- **Filtro por tipo:** permite filtrar os Pokémon por seu tipo, como Grass, Fire, Water e outros.
- **Cards interativos:** apresenta informações resumidas de cada Pokémon.
- **Visualização de detalhes:** permite selecionar um Pokémon para consultar suas informações individuais.
- **Atributos:** exibe HP, ataque, defesa, ataque especial, defesa especial e velocidade.
- **Imagens:** apresenta ilustrações dos Pokémon.

### 🏆 Treinadores

- **Listagem de treinadores:** apresenta os treinadores cadastrados.
- **Pesquisa por nome:** facilita a localização de um treinador.
- **Filtro por insígnias:** permite filtrar treinadores de acordo com a quantidade de insígnias conquistadas.
- **Visualização das equipes:** exibe os Pokémon associados a cada treinador.
- **Informações dos Pokémon:** apresenta imagens, tipos e atributos dos integrantes das equipes.


## 🛠️ Tecnologias utilizadas

- **React:** construção da interface por meio de componentes.
- **Vite:** ferramenta de desenvolvimento e build da aplicação.
- **JavaScript (ES6+):** implementação da lógica e das funcionalidades.
- **HTML5:** estruturação do conteúdo.
- **CSS3:** estilização e responsividade.
- **JSON:** armazenamento local dos dados dos Pokémon e treinadores.
- **Git e GitHub:** versionamento e disponibilização do código-fonte.

## 📂 Estrutura do projeto

A estrutura principal do projeto está organizada da seguinte forma:

```text
pokedex/
├── public/
├── src/
│   ├── components/
│   │   ├── PokemonCard.jsx
│   │   ├── PokemonDetails.jsx
│   │   ├── PokemonList.jsx
│   │   ├── SearchBar.jsx
│   │   ├── TrainerCard.jsx
│   │   ├── TrainerList.jsx
│   │   └── TypeFilter.jsx
│   ├── data/
│   │   └── pokedex-data.json
│   ├── utils/
│   │   └── pokemonImages.js
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

## 📋 Pré-requisitos

Antes de executar o projeto, você precisa ter instalado:

- [Node.js](https://nodejs.org/) — preferencialmente uma versão LTS compatível com a versão do Vite utilizada.
- npm, que normalmente é instalado junto com o Node.js.
- Git, caso queira clonar o repositório.

## ▶️ Como executar o projeto

### 1. Clone o repositório

```bash
git clone https://github.com/aalexiaandrade/pokedex.git
```

### 2. Entre na pasta do projeto

```bash
cd pokedex
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Inicie o servidor de desenvolvimento

```bash
npm run dev
```

### 5. Acesse a aplicação

O terminal exibirá o endereço local disponibilizado pelo Vite. Normalmente, é:

```text
http://localhost:5173
```

Abra esse endereço no navegador para utilizar a aplicação.

## 📊 Dados dos Pokémon

Os dados utilizados pela aplicação estão armazenados no arquivo:

```text
src/data/pokedex-data.json
```

Esse arquivo contém as informações necessárias para exibir os Pokémon, seus tipos, atributos e os treinadores com suas respectivas equipes.

Os dados são importados diretamente na aplicação, permitindo que a interface seja construída dinamicamente a partir do conteúdo do JSON.

## 🖼️ Imagens da aplicação

### Tela principal — Pokédex

![Tela principal da Pokédex](public/images/telas/home.png)

### Detalhes de um Pokémon

![Visualização dos detalhes de um Pokémon](public/images/telas/detalhes.png)

### Página de treinadores

![Listagem de treinadores e suas equipes](public/images/telas/treinador.png)


## 👩‍💻 Autoria

Desenvolvido por **Aléxia Andrade** como projeto de estudo de desenvolvimento frontend com React.

- GitHub: [@aalexiaandrade](https://github.com/aalexiaandrade)

---
