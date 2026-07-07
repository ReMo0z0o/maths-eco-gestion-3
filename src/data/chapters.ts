export interface Chapter {
  /** 1 à 8 */
  id: number;
  /** Titre court, ex. « Matrices » */
  title: string;
  /** Phrase d'accroche pédagogique */
  tagline: string;
  /** Description un peu plus longue pour la carte d'accueil */
  description: string;
  /** Objectifs officiels : « À la fin de ce chapitre, vous devrez être capables de … » */
  objectives: string[];
  /** Notions clés (étiquettes) */
  notions: string[];
  /** Fichier du cours interactif dans public/theorie/ */
  theoryFile: string;
  /** Classe Tailwind de la pastille couleur du chapitre */
  color: string;
  /** Emoji illustratif */
  emoji: string;
}

export const chapters: Chapter[] = [
  {
    id: 1,
    title: "Matrices",
    tagline: "Le langage de base : tableaux de nombres et opérations",
    description:
      "Découvrez les matrices, leurs familles (carrées, symétriques, diagonales, triangulaires…), les opérations (somme, produit, transposée, inverse) et comment traduire un problème concret en matrice.",
    objectives: [
      "Répondre aux propositions logiques portant sur des propriétés de base des matrices (carrées, symétriques, diagonales, triangulaires…)",
      "Traduire un énoncé en français vers une matrice",
    ],
    notions: [
      "Produit matriciel",
      "Transposée",
      "Matrice inverse",
      "Matrices particulières",
      "Matrices de transition",
    ],
    theoryFile: "/theorie/chapitre1.html",
    color: "bg-sky-500",
    emoji: "🔢",
  },
  {
    id: 2,
    title: "Systèmes linéaires",
    tagline: "Résoudre plusieurs équations à la fois avec Gauss–Jordan",
    description:
      "Apprenez à traduire un problème en système d'équations linéaires et à le résoudre méthodiquement par la méthode de Gauss–Jordan, y compris lorsqu'un paramètre s'invite dans le système.",
    objectives: [
      "Traduire un énoncé en français vers un système d'équations linéaires",
      "Résoudre un système d'équations linéaires (avec ou sans paramètre) par la méthode de Gauss–Jordan",
      "Calculer l'inverse d'une matrice par la méthode de Gauss–Jordan",
    ],
    notions: [
      "Méthode de Gauss–Jordan",
      "Systèmes avec paramètre",
      "Discussion de solutions",
      "Inverse par Gauss–Jordan",
    ],
    theoryFile: "/theorie/chapitre2.html",
    color: "bg-emerald-500",
    emoji: "⚖️",
  },
  {
    id: 3,
    title: "Déterminants",
    tagline: "Un nombre qui dit tout : inversibilité, Cramer et Leontief",
    description:
      "Le déterminant condense une matrice en un seul nombre. Calculez-le efficacement, utilisez-le pour décider si un système a une solution unique (Cramer) et appliquez-le au modèle économique de Leontief.",
    objectives: [
      "Répondre aux propositions logiques portant sur des propriétés de base des déterminants",
      "Calculer le déterminant d'une matrice (avec ou sans paramètre), en simplifiant d'abord la matrice si utile",
      "Déterminer si un système possède une solution unique et l'identifier avec la méthode de Cramer",
      "Appliquer le modèle de Leontief (tableau d'échanges inter-industriels, matrice input-output, effet d'une hausse de demande finale…)",
    ],
    notions: [
      "Développement par cofacteurs",
      "Transformations élémentaires",
      "Méthode de Cramer",
      "Modèle de Leontief",
    ],
    theoryFile: "/theorie/chapitre3.html",
    color: "bg-amber-500",
    emoji: "🎯",
  },
  {
    id: 4,
    title: "Espaces vectoriels",
    tagline: "Indépendance, bases, dimension et applications linéaires",
    description:
      "Le cœur de l'algèbre linéaire : vecteurs linéairement (in)dépendants, rang d'une matrice, sous-espaces vectoriels, bases et dimension, puis les transformations linéaires avec leur image et leur noyau.",
    objectives: [
      "Déterminer si une collection de vecteurs (avec ou sans paramètre) est linéairement dépendante ou indépendante",
      "Calculer le rang d'une matrice (avec ou sans paramètre)",
      "Déterminer si un ensemble est un sous-vectoriel de Rⁿ",
      "Identifier une base d'un sous-vectoriel et donner sa dimension",
      "Déterminer si un système (avec ou sans paramètre) possède une solution unique, une infinité de solutions, ou s'il est impossible",
      "Identifier la matrice qui représente une transformation linéaire, dans la base canonique ou dans une base donnée",
      "Donner une base (et sa dimension) pour l'image et pour le noyau d'une transformation linéaire",
    ],
    notions: [
      "Indépendance linéaire",
      "Rang",
      "Sous-espaces vectoriels",
      "Base et dimension",
      "Transformations linéaires",
      "Image et noyau",
    ],
    theoryFile: "/theorie/chapitre4.html",
    color: "bg-violet-500",
    emoji: "🧭",
  },
  {
    id: 5,
    title: "Produit scalaire",
    tagline: "Longueurs, angles droits et bases orthonormées",
    description:
      "Le produit scalaire mesure longueurs et orthogonalité. Apprenez le procédé de Gram–Schmidt pour transformer n'importe quelle base en une base orthonormée, l'outil clé des chapitres suivants.",
    objectives: [
      "Appliquer le procédé de Gram–Schmidt à une collection de vecteurs linéairement indépendants afin d'obtenir une collection de vecteurs orthonormés",
      "Donner une base orthonormée (et sa dimension) d'un sous-vectoriel",
    ],
    notions: [
      "Produit scalaire",
      "Norme",
      "Orthogonalité",
      "Procédé de Gram–Schmidt",
      "Bases orthonormées",
    ],
    theoryFile: "/theorie/chapitre5.html",
    color: "bg-rose-500",
    emoji: "📐",
  },
  {
    id: 6,
    title: "Valeurs propres",
    tagline: "Les directions privilégiées d'une matrice, et Markov",
    description:
      "Vecteurs et valeurs propres révèlent la structure cachée d'une matrice. Diagonalisez, y compris orthogonalement pour les matrices symétriques, et prédisez le long terme avec les chaînes de Markov.",
    objectives: [
      "Calculer les valeurs propres et les vecteurs propres d'une matrice",
      "Déterminer si une matrice quelconque est diagonalisable et effectuer la diagonalisation si c'est le cas",
      "Diagonaliser une matrice symétrique par une matrice orthogonale",
      "Appliquer le modèle de Markov (utiliser la matrice de transition afin de calculer l'état d'équilibre)",
    ],
    notions: [
      "Polynôme caractéristique",
      "Vecteurs propres",
      "Diagonalisation",
      "Diagonalisation orthogonale",
      "Chaînes de Markov",
      "PageRank",
    ],
    theoryFile: "/theorie/chapitre6.html",
    color: "bg-cyan-500",
    emoji: "🌀",
  },
  {
    id: 7,
    title: "Formes quadratiques",
    tagline: "Optimiser des expressions du second degré sous contrainte",
    description:
      "Les formes quadratiques généralisent les paraboles à plusieurs variables. Écrivez-les sous forme diagonale, déterminez leur genre (définie positive, négative…) et optimisez-les sous contrainte de norme 1.",
    objectives: [
      "Identifier la matrice symétrique qui représente une forme quadratique donnée",
      "Écrire une forme quadratique sous forme diagonale",
      "Effectuer une optimisation sous contraintes (minimum ou maximum d'une forme quadratique sur l'ensemble des vecteurs de norme 1)",
      "Déterminer le genre d'une forme quadratique",
    ],
    notions: [
      "Matrice symétrique associée",
      "Forme diagonale",
      "Genre d'une forme quadratique",
      "Optimisation sous contrainte",
    ],
    theoryFile: "/theorie/chapitre7.html",
    color: "bg-orange-500",
    emoji: "🏔️",
  },
  {
    id: 8,
    title: "Intégrales doubles",
    tagline: "Calculer des volumes en intégrant sur des régions du plan",
    description:
      "Étendez l'intégrale à deux variables : intégrales itérées, domaines délimités par des droites et des courbes, choix de l'ordre d'intégration et représentation graphique du domaine.",
    objectives: [
      "Déterminer les bornes d'une intégrale double pour une région bivariée délimitée par des droites d'équations",
      "Calculer une intégrale double et représenter graphiquement le domaine d'intégration",
    ],
    notions: [
      "Intégrales itérées",
      "Théorème de Fubini",
      "Domaines d'intégration",
      "Ordre d'intégration",
    ],
    theoryFile: "/theorie/chapitre8.html",
    color: "bg-lime-600",
    emoji: "🗺️",
  },
];

export function getChapter(id: number): Chapter | undefined {
  return chapters.find((c) => c.id === id);
}
