# Portfolio - Adrien Lassus

Portfolio personnel pour la recherche d'alternance et de stage.

## Stack Technique

- **Framework**: Next.js 14 (App Router)
- **Langage**: TypeScript
- **Styles**: Tailwind CSS
- **Animations**: Framer Motion
- **Déploiement**: Vercel (recommandé)

## Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Build pour la production
npm run build

# Lancer la version production
npm start
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

## Structure du Projet

```
Portfolio/
├── app/                      # Pages Next.js
│   ├── layout.tsx           # Layout principal
│   ├── page.tsx             # Page d'accueil
│   └── globals.css          # Styles globaux
├── components/
│   ├── sections/            # Sections du portfolio
│   │   ├── HeroSection.tsx
│   │   ├── FlagshipProject.tsx
│   │   ├── InfrastructureLab.tsx
│   │   ├── SecurityJourney.tsx
│   │   ├── TechStack.tsx
│   │   └── ContactFooter.tsx
│   └── ui/                  # Composants UI réutilisables
│       └── Button.tsx
├── lib/
│   └── utils/
│       └── constants.ts     # Constantes et données
└── public/
    └── images/              # Images du portfolio
```

## Sections

1. **Hero Section**: Présentation avec photo, tagline et boutons CTA
2. **Flagship Project**: Présentation de PrepAvenir avec stack technique
3. **Infrastructure Lab**: Projets DynFi et DaVinciCode
4. **Security Journey**: Parcours cybersécurité avec Root-Me, HTB, TryHackMe
5. **Tech Stack**: Compétences techniques organisées par catégories
6. **Contact Footer**: Disponibilité et liens de contact

## Personnalisation

Les informations personnelles sont dans `lib/utils/constants.ts`. Modifiez ce fichier pour mettre à jour :
- Liens (GitHub, LinkedIn, Root-Me, etc.)
- Informations personnelles
- Stack technique
- Détails des projets

## Déploiement

Le projet est prêt à être déployé sur Vercel :

1. Pousser le code sur GitHub
2. Connecter le repository à Vercel
3. Vercel détectera automatiquement Next.js et configurera le déploiement

## Licence

Tous droits réservés © 2026 Adrien Lassus
