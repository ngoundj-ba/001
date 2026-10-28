# Projet 001 : CV en React avec Vite

Petit projet créé avec **Vite** et **React**. Il affiche un CV avec 3 composants : informations personnelles, expérience et compétences.

# Vite

Vite est un outil de développement web. Il crée un projet React déjà configuré, affiche les changements en direct dans le navigateur et prépare le site pour la mise en ligne.

# Prérequis

Il faut avoir **Node.js** (qui inclut **npm**) et **Git** installés. Pour vérifier :

```bash
node -v
npm -v
git --version
```

# Étape 1 : Créer le projet avec Vite

```bash
npm create vite@latest 001
```

- `npm create vite@latest` : lance l'assistant de création de Vite (dernière version)
- `001` : nom du dossier du projet

Dans l'assistant, choisir :

1. Framework : **React**
2. Variante : **JavaScript**

# Étape 2 : Entrer dans le dossier

```bash
cd 001
```

- `cd` : change de dossier (change directory)

# Étape 3 : Installer les dépendances

```bash
npm install
```

- Télécharge les paquets listés dans `package.json`
- Crée le dossier `node_modules`

# Étape 4 : Lancer le projet

```bash
npm run dev
```

- Démarre le serveur de développement
- Ouvrir le lien affiché dans le terminal (souvent `http://localhost:5173`)
- La page se met à jour à chaque sauvegarde

# Étape 5 : Créer les 3 composants

Créer le dossier `src/components` avec 3 fichiers :

- `InfoPerso.jsx` : nom, titre, email, ville
- `Experience.jsx` : liste des expériences
- `Competences.jsx` : liste des compétences

# Composant

Un composant est une fonction JavaScript qui retourne du JSX (du HTML dans du JavaScript). Son nom commence par une majuscule.

```jsx
function Competences() {
  return <h2>Compétences</h2>
}

export default Competences
```

- `function` : déclare le composant
- `return` : ce qui sera affiché
- `export default` : permet d'utiliser le composant dans un autre fichier

# Import

Dans `App.jsx`, on importe puis on utilise les composants :

```jsx
import InfoPerso from './components/InfoPerso'

function App() {
  return <InfoPerso />
}
```

- `import ... from ...` : récupère un composant d'un autre fichier
- `<InfoPerso />` : affiche le composant

# JSX

Le JSX ressemble à du HTML, avec quelques différences :

- `className` au lieu de `class`
- Les variables JavaScript s'écrivent entre accolades : `{nom}`
- Un composant ne retourne qu'un seul élément parent

# map

`map` permet d'afficher une liste. Chaque élément a besoin d'une `key` unique.

```jsx
{competences.map((c) => (
  <li key={c}>{c}</li>
))}
```

# Étape 6 : Envoyer sur GitHub

1. Créer un dépôt vide sur github.com (par exemple `001`)
2. Dans le dossier du projet :

```bash
git init
git add .
git commit -m "Premier commit"
git branch -M main
git remote add origin https://github.com/ngoundj-ba/001.git
git push -u origin main
```

- `git init` : initialise Git dans le dossier
- `git add .` : prépare tous les fichiers
- `git commit -m "..."` : enregistre une version avec un message
- `git branch -M main` : nomme la branche principale `main`
- `git remote add origin URL` : relie le dossier au dépôt GitHub
- `git push -u origin main` : envoie le code sur GitHub

# Cloner le projet

Pour récupérer le projet depuis GitHub sur un autre ordinateur :

```bash
git clone https://github.com/ngoundj-ba/001.git
cd 001
npm install
npm run dev
```

- `git clone` : copie le dépôt GitHub sur l'ordinateur
- `npm install` est obligatoire après un clone, car `node_modules` n'est pas envoyé sur GitHub

# Structure du projet

```
001/
├── node_modules/
├── public/
├── src/
│   ├── components/
│   │   ├── InfoPerso.jsx
│   │   ├── Experience.jsx
│   │   └── Competences.jsx
│   ├── App.css
│   ├── App.jsx
│   └── main.jsx
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

# node_modules

Contient tous les paquets installés par `npm install`. On ne le modifie jamais et on ne l'envoie pas sur GitHub.

# public

Contient les fichiers statiques (images, icônes) servis tels quels.

# src

Contient tout le code du projet. C'est le dossier où on travaille.

# components

Dossier créé pour ranger nos composants (`InfoPerso`, `Experience`, `Competences`).

# index.html

Page HTML unique du projet. Elle contient `<div id="root"></div>`, l'endroit où React affiche l'application, et charge `main.jsx`.

# main.jsx

Point d'entrée de React. Il prend le composant `App` et l'affiche dans le `div` `root`.

# App.jsx

Composant principal. Il regroupe les 3 composants du projet.

# App.css

Fichier de styles (couleurs, marges, mise en page).

# package.json

Carte d'identité du projet :

- `name` : nom du projet
- `scripts` : commandes (`dev`, `build`, `preview`)
- `dependencies` : paquets nécessaires pour faire tourner l'application (`react`, `react-dom`)
- `devDependencies` : outils de développement (`vite`)

# vite.config.js

Fichier de configuration de Vite. Il active le plugin React.

# .gitignore

Liste les fichiers que Git doit ignorer (`node_modules`, `dist`).

# README.md

Ce fichier : il explique le projet et ses étapes.

# Commandes utiles

| Commande | Rôle |
| --- | --- |
| `npm install` | Installe les dépendances |
| `npm run dev` | Lance le serveur de développement |
| `npm run build` | Crée la version finale dans `dist/` |
| `npm run preview` | Teste la version finale |