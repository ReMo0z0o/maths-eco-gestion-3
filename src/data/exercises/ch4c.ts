import type { Exercise } from "./types";

export const exercises: Exercise[] = [
  {
    id: "4.11",
    chapter: 4,
    title:
      "Transformation linéaire donnée sur une base : matrice, image, noyau, changement de base",
    examType: true,
    statement: String.raw`Considérons les vecteurs $Z_1 = (0, 1, 0)^T$, $Z_2 = (1, 0, 1)^T$, $Z_3 = (0, 1, 1)^T$ et la transformation linéaire $f : \mathbb{R}^3 \to \mathbb{R}^3$ définie par $f(Z_1) = (3, 0, 1)^T$, $f(Z_2) = (1, 2, 0)^T$, $f(Z_3) = (0, 6, -1)^T$.`,
    method: String.raw`La transformation $f$ n'est pas donnée sur la base canonique mais sur la base $Z_1, Z_2, Z_3$. Pose $S$ la matrice dont les colonnes sont les $Z_i$ et $U$ la matrice dont les colonnes sont les images $f(Z_i)$ : la matrice de $f$ dans la base canonique est alors $A = U S^{-1}$. L'image et le noyau se lisent ensuite sur $A$ (colonnes et système homogène), et la matrice dans la base $Z$ s'obtient par la formule de changement de base $A' = S^{-1} A S$.`,
    theoryRefs: [
      "Transformations linéaires",
      "Matrice représentative",
      "Image et noyau",
      "Changement de base",
    ],
    parts: [
      {
        label: "a",
        statement: String.raw`Quelle est la matrice qui représente $f$ dans la base canonique ?`,
        steps: [
          {
            title: "Comprendre ce qu'on cherche",
            content: String.raw`📖 **Rappel du cours :** la matrice représentative $A$ d'une transformation linéaire $f$ dans la base canonique est la matrice telle que $f(X) = AX$ pour tout $X \in \mathbb{R}^3$. Ses colonnes sont les images des vecteurs de la base canonique : $A = \big(f(E_1) \; f(E_2) \; f(E_3)\big)$.

Ici, le problème est qu'on ne connaît pas $f(E_1)$, $f(E_2)$, $f(E_3)$ : on connaît seulement les images des vecteurs $Z_1, Z_2, Z_3$. Il faut donc « traduire » l'information de la base $Z$ vers la base canonique.`,
          },
          {
            title: "Poser les matrices S et U",
            content: String.raw`On range les données en colonnes :

$$S = \big(Z_1 \; Z_2 \; Z_3\big) = \begin{pmatrix} 0 & 1 & 0 \\ 1 & 0 & 1 \\ 0 & 1 & 1 \end{pmatrix}, \qquad U = \big(f(Z_1) \; f(Z_2) \; f(Z_3)\big) = \begin{pmatrix} 3 & 1 & 0 \\ 0 & 2 & 6 \\ 1 & 0 & -1 \end{pmatrix}$$

La condition « $A$ envoie chaque $Z_i$ sur $f(Z_i)$ » s'écrit d'un coup pour les trois vecteurs :

$$AS = U$$

En effet, la $i$-ème colonne du produit $AS$ est exactement $A Z_i$, qui doit valoir $f(Z_i)$, c'est-à-dire la $i$-ème colonne de $U$.

Comme $Z_1, Z_2, Z_3$ forment une base de $\mathbb{R}^3$ (vérifie que $\det S = -1 \neq 0$), la matrice $S$ est inversible et on peut isoler $A$ :

$$A = U S^{-1}$$`,
          },
          {
            title: "Calculer l'inverse de S par Gauss–Jordan",
            content: String.raw`On applique la méthode de Gauss–Jordan à la matrice augmentée $\left(\, S \mid I \,\right)$ :

$$\left(\begin{array}{ccc|ccc} 0 & 1 & 0 & 1 & 0 & 0 \\ 1 & 0 & 1 & 0 & 1 & 0 \\ 0 & 1 & 1 & 0 & 0 & 1 \end{array}\right) \xrightarrow{L_1 \leftrightarrow L_2} \left(\begin{array}{ccc|ccc} 1 & 0 & 1 & 0 & 1 & 0 \\ 0 & 1 & 0 & 1 & 0 & 0 \\ 0 & 1 & 1 & 0 & 0 & 1 \end{array}\right)$$

$$\xrightarrow{L_3 \leftarrow L_3 - L_2} \left(\begin{array}{ccc|ccc} 1 & 0 & 1 & 0 & 1 & 0 \\ 0 & 1 & 0 & 1 & 0 & 0 \\ 0 & 0 & 1 & -1 & 0 & 1 \end{array}\right) \xrightarrow{L_1 \leftarrow L_1 - L_3} \left(\begin{array}{ccc|ccc} 1 & 0 & 0 & 1 & 1 & -1 \\ 0 & 1 & 0 & 1 & 0 & 0 \\ 0 & 0 & 1 & -1 & 0 & 1 \end{array}\right)$$

Donc :

$$S^{-1} = \begin{pmatrix} 1 & 1 & -1 \\ 1 & 0 & 0 \\ -1 & 0 & 1 \end{pmatrix}$$

**Vérification rapide :** $S \cdot S^{-1} = I$ (fais au moins la première ligne : $(0, 1, 0)$ fois les colonnes de $S^{-1}$ donne $(1, 0, 0)$ ✓).`,
          },
          {
            title: "Calculer A = U·S⁻¹",
            content: String.raw`On effectue le produit ligne par colonne :

$$A = U S^{-1} = \begin{pmatrix} 3 & 1 & 0 \\ 0 & 2 & 6 \\ 1 & 0 & -1 \end{pmatrix} \begin{pmatrix} 1 & 1 & -1 \\ 1 & 0 & 0 \\ -1 & 0 & 1 \end{pmatrix}$$

Détaillons par exemple la première ligne : $(3 \cdot 1 + 1 \cdot 1 + 0, \; 3 \cdot 1 + 0 + 0, \; -3 + 0 + 0) = (4, 3, -3)$. De même pour les deux autres lignes :

$$A = \begin{pmatrix} 4 & 3 & -3 \\ -4 & 0 & 6 \\ 2 & 1 & -2 \end{pmatrix}$$`,
          },
          {
            title: "Vérifier sur les données de l'énoncé",
            content: String.raw`**Vérification :** on réinjecte les $Z_i$ dans $A$ :

- $A Z_1 = A(0, 1, 0)^T$ = deuxième colonne de $A$ = $(3, 0, 1)^T = f(Z_1)$ ✓
- $A Z_2 = A(1, 0, 1)^T$ = première + troisième colonne = $(4-3, -4+6, 2-2)^T = (1, 2, 0)^T = f(Z_2)$ ✓
- $A Z_3 = A(0, 1, 1)^T$ = deuxième + troisième colonne = $(0, 6, -1)^T = f(Z_3)$ ✓

La matrice $A$ reproduit bien les trois images imposées : c'est la bonne.`,
          },
        ],
        answer: String.raw`$$A = U S^{-1} = \begin{pmatrix} 4 & 3 & -3 \\ -4 & 0 & 6 \\ 2 & 1 & -2 \end{pmatrix}$$`,
      },
      {
        label: "b",
        statement: String.raw`Quelle est la dimension de l'image de $f$ ? Donner une base.`,
        steps: [
          {
            title: "Rappeler ce qu'est l'image",
            content: String.raw`📖 **Rappel du cours :** l'image de $f$ est l'ensemble $\operatorname{Im} f = \lbrace f(X) : X \in \mathbb{R}^3 \rbrace$. C'est un sous-vectoriel de l'espace d'arrivée, engendré par les colonnes de la matrice $A$. Sa dimension est donc le **rang** de $A$.

Astuce : comme $Z_1, Z_2, Z_3$ forment une base de $\mathbb{R}^3$, l'image est aussi engendrée par $f(Z_1)$, $f(Z_2)$, $f(Z_3)$ — les colonnes de $U$, qui sont plus simples que celles de $A$.`,
          },
          {
            title: "Chercher une dépendance entre les images",
            content: String.raw`Testons si $f(Z_3)$ est une combinaison linéaire de $f(Z_1)$ et $f(Z_2)$ : on cherche $a, b$ tels que

$$a \begin{pmatrix} 3 \\ 0 \\ 1 \end{pmatrix} + b \begin{pmatrix} 1 \\ 2 \\ 0 \end{pmatrix} = \begin{pmatrix} 0 \\ 6 \\ -1 \end{pmatrix}$$

La deuxième composante donne $2b = 6$, donc $b = 3$. La troisième donne $a = -1$. On vérifie la première : $3 \cdot (-1) + 3 = 0$ ✓. Donc :

$$f(Z_3) = -f(Z_1) + 3 f(Z_2)$$

Le troisième vecteur est redondant : l'image est engendrée par $f(Z_1)$ et $f(Z_2)$ seulement.`,
          },
          {
            title: "Conclure sur la dimension et la base",
            content: String.raw`Les deux vecteurs restants, $(3, 0, 1)^T$ et $(1, 2, 0)^T$, ne sont pas proportionnels (regarde les deuxièmes composantes : $0$ et $2$), donc ils sont linéairement indépendants.

Conclusion : $\dim \operatorname{Im} f = 2$ et une base de l'image est $\lbrace (3, 0, 1)^T, (1, 2, 0)^T \rbrace$.

**Vérification :** le rang de $A$ vaut bien 2, car $\det A = 4(0 \cdot (-2) - 6 \cdot 1) - 3(8 - 12) - 3(-4 - 0) = -24 + 12 + 12 = 0$, donc le rang est $< 3$, et il vaut au moins 2 puisque deux colonnes de $A$ sont indépendantes.`,
          },
        ],
        answer: String.raw`$\dim \operatorname{Im} f = 2$ ; une base de l'image est $\lbrace (3, 0, 1)^T, \; (1, 2, 0)^T \rbrace$ (deux des vecteurs images, par exemple $f(Z_1)$ et $f(Z_2)$).`,
      },
      {
        label: "c",
        statement: String.raw`Quel est le noyau de $f$ ? Quelle est sa dimension ?`,
        steps: [
          {
            title: "Rappeler ce qu'est le noyau",
            content: String.raw`📖 **Rappel du cours :** le noyau de $f$ est l'ensemble des vecteurs envoyés sur le vecteur nul :

$$N(f) = \lbrace X \in \mathbb{R}^3 : f(X) = O \rbrace = \lbrace X : AX = O \rbrace$$

C'est un sous-vectoriel de l'espace de départ. Pour le trouver, on résout le système homogène $AX = O$.

Avant de calculer, on peut prédire sa dimension grâce au théorème des dimensions : $\dim N(f) + \dim \operatorname{Im} f = \dim \mathbb{R}^3 = 3$. Comme $\dim \operatorname{Im} f = 2$ (point b), on attend $\dim N(f) = 1$.`,
          },
          {
            title: "Résoudre le système homogène",
            content: String.raw`Le système $AX = O$ s'écrit :

$$\begin{cases} 4x + 3y - 3z = 0 \\ -4x + 6z = 0 \\ 2x + y - 2z = 0 \end{cases}$$

La deuxième équation est la plus simple : $-4x + 6z = 0$, donc $x = \tfrac{3}{2} z$.

On substitue dans la troisième : $2 \cdot \tfrac{3}{2} z + y - 2z = 0$, soit $3z + y - 2z = 0$, donc $y = -z$.

On vérifie que la première équation est automatiquement satisfaite : $4 \cdot \tfrac{3}{2} z + 3(-z) - 3z = 6z - 3z - 3z = 0$ ✓. Le système est simplement indéterminé : il reste un paramètre libre, $z$.`,
          },
          {
            title: "Écrire le noyau et conclure",
            content: String.raw`Pour éviter les fractions, pose $z = 2\alpha$ : alors $x = 3\alpha$ et $y = -2\alpha$, c'est-à-dire

$$N(f) = \lbrace (x, y, z)^T \in \mathbb{R}^3 : (x, y, z)^T = \alpha \, (3, -2, 2)^T, \; \alpha \in \mathbb{R} \rbrace$$

Le noyau est la droite vectorielle engendrée par $(3, -2, 2)^T$, donc $\dim N(f) = 1$ — comme prévu par le théorème des dimensions.

**Vérification :** $A \, (3, -2, 2)^T = (12 - 6 - 6, \; -12 + 12, \; 6 - 2 - 4)^T = (0, 0, 0)^T$ ✓`,
          },
        ],
        answer: String.raw`$N(f) = \lbrace (x, y, z)^T \in \mathbb{R}^3 : (x, y, z)^T = \alpha \, (3, -2, 2)^T, \; \alpha \in \mathbb{R} \rbrace$, de dimension 1.`,
      },
      {
        label: "d",
        statement: String.raw`Quelle est la matrice qui représente $f$ dans la base $Z_1, Z_2, Z_3$ ?`,
        steps: [
          {
            title: "Rappeler la formule de changement de base",
            content: String.raw`📖 **Rappel du cours :** si $A$ représente $f$ dans la base canonique et si $S$ est la matrice de passage dont les colonnes sont les vecteurs de la nouvelle base, alors la matrice de $f$ dans la nouvelle base est

$$A' = S^{-1} A S$$

Intuition de la formule (lue de droite à gauche) : $S$ traduit les coordonnées de la base $Z$ vers la base canonique, $A$ applique $f$, puis $S^{-1}$ retraduit le résultat en coordonnées dans la base $Z$.`,
          },
          {
            title: "Utiliser le raccourci AS = U",
            content: String.raw`Ici on peut s'épargner un produit : au point a) on a établi que $AS = U$. Donc

$$A' = S^{-1} A S = S^{-1} (AS) = S^{-1} U$$

Il ne reste qu'un seul produit de matrices à calculer, avec $S^{-1}$ déjà obtenu au point a).`,
          },
          {
            title: "Calculer A' = S⁻¹·U",
            content: String.raw`$$A' = S^{-1} U = \begin{pmatrix} 1 & 1 & -1 \\ 1 & 0 & 0 \\ -1 & 0 & 1 \end{pmatrix} \begin{pmatrix} 3 & 1 & 0 \\ 0 & 2 & 6 \\ 1 & 0 & -1 \end{pmatrix}$$

Ligne 1 : $(3 + 0 - 1, \; 1 + 2 - 0, \; 0 + 6 + 1) = (2, 3, 7)$.

Ligne 2 : $(3, 1, 0)$ (elle recopie la première ligne de $U$).

Ligne 3 : $(-3 + 0 + 1, \; -1 + 0 + 0, \; 0 + 0 - 1) = (-2, -1, -1)$.

$$A' = \begin{pmatrix} 2 & 3 & 7 \\ 3 & 1 & 0 \\ -2 & -1 & -1 \end{pmatrix}$$`,
          },
          {
            title: "Interpréter et vérifier",
            content: String.raw`**Vérification :** la première colonne de $A'$ doit donner les coordonnées de $f(Z_1)$ dans la base $Z$. Elle affirme que

$$f(Z_1) = 2 Z_1 + 3 Z_2 - 2 Z_3 = 2 \begin{pmatrix} 0 \\ 1 \\ 0 \end{pmatrix} + 3 \begin{pmatrix} 1 \\ 0 \\ 1 \end{pmatrix} - 2 \begin{pmatrix} 0 \\ 1 \\ 1 \end{pmatrix} = \begin{pmatrix} 3 \\ 0 \\ 1 \end{pmatrix}$$

C'est bien $f(Z_1) = (3, 0, 1)^T$ ✓. Les colonnes 2 et 3 se vérifient de la même façon.

Remarque : $A$ et $A'$ représentent la **même** transformation $f$, vue dans deux bases différentes — c'est tout le sens du changement de base.`,
          },
        ],
        answer: String.raw`$$A' = S^{-1} A S = \begin{pmatrix} 2 & 3 & 7 \\ 3 & 1 & 0 \\ -2 & -1 & -1 \end{pmatrix}$$`,
      },
    ],
  },
  {
    id: "4.12",
    chapter: 4,
    title: "Deuxième transformation sur la même base Z : matrice, image, noyau, changement de base",
    examType: false,
    statement: String.raw`Considérons les vecteurs $Z_1 = (0, 1, 0)^T$, $Z_2 = (1, 0, 1)^T$, $Z_3 = (0, 1, 1)^T$ et la transformation linéaire $g : \mathbb{R}^3 \to \mathbb{R}^3$ définie par $g(Z_1) = (0, 2, 1)^T$, $g(Z_2) = (0, 1, 0)^T$, $g(Z_3) = (0, 3, 1)^T$.`,
    method: String.raw`Même stratégie qu'à l'exercice 4.11, avec la même base $Z$ : tu peux réutiliser $S$ et $S^{-1}$ tels quels ! Seule la matrice des images change : $U = \big(g(Z_1) \; g(Z_2) \; g(Z_3)\big)$. Calcule $A = U S^{-1}$ pour la base canonique, lis l'image et le noyau sur $A$, puis $B' = S^{-1} A S = S^{-1} U$ pour la base $Z$.`,
    theoryRefs: [
      "Transformations linéaires",
      "Matrice représentative",
      "Image et noyau",
      "Changement de base",
    ],
    parts: [
      {
        label: "a",
        statement: String.raw`Quelle est la matrice qui représente $g$ dans la base canonique ?`,
        steps: [
          {
            title: "Réutiliser S⁻¹ et poser U",
            content: String.raw`📖 **Rappel du cours :** si $g(Z_i)$ est connu pour une base $Z_1, Z_2, Z_3$, la matrice canonique $A$ de $g$ vérifie $AS = U$, donc $A = U S^{-1}$, où $S$ contient les $Z_i$ en colonnes et $U$ les images $g(Z_i)$ en colonnes.

Les vecteurs $Z_i$ sont les mêmes qu'à l'exercice 4.11, donc on récupère directement :

$$S = \begin{pmatrix} 0 & 1 & 0 \\ 1 & 0 & 1 \\ 0 & 1 & 1 \end{pmatrix}, \qquad S^{-1} = \begin{pmatrix} 1 & 1 & -1 \\ 1 & 0 & 0 \\ -1 & 0 & 1 \end{pmatrix}$$

Seules les images changent :

$$U = \big(g(Z_1) \; g(Z_2) \; g(Z_3)\big) = \begin{pmatrix} 0 & 0 & 0 \\ 2 & 1 & 3 \\ 1 & 0 & 1 \end{pmatrix}$$`,
          },
          {
            title: "Calculer A = U·S⁻¹",
            content: String.raw`$$A = U S^{-1} = \begin{pmatrix} 0 & 0 & 0 \\ 2 & 1 & 3 \\ 1 & 0 & 1 \end{pmatrix} \begin{pmatrix} 1 & 1 & -1 \\ 1 & 0 & 0 \\ -1 & 0 & 1 \end{pmatrix}$$

Ligne 1 : que des zéros dans $U$, donc $(0, 0, 0)$.

Ligne 2 : $(2 + 1 - 3, \; 2 + 0 + 0, \; -2 + 0 + 3) = (0, 2, 1)$.

Ligne 3 : $(1 + 0 - 1, \; 1 + 0 + 0, \; -1 + 0 + 1) = (0, 1, 0)$.

$$A = \begin{pmatrix} 0 & 0 & 0 \\ 0 & 2 & 1 \\ 0 & 1 & 0 \end{pmatrix}$$`,
          },
          {
            title: "Vérifier sur les données",
            content: String.raw`**Vérification :** on contrôle les trois images imposées :

- $A Z_1 = A(0, 1, 0)^T$ = deuxième colonne = $(0, 2, 1)^T = g(Z_1)$ ✓
- $A Z_2 = A(1, 0, 1)^T$ = colonne 1 + colonne 3 = $(0, 0, 0)^T + (0, 1, 0)^T = (0, 1, 0)^T = g(Z_2)$ ✓
- $A Z_3 = A(0, 1, 1)^T$ = colonne 2 + colonne 3 = $(0, 3, 1)^T = g(Z_3)$ ✓

Remarque : la première ligne de $A$ est nulle, ce qui traduit le fait que toutes les images $g(Z_i)$ ont une première composante nulle — l'image de $g$ vit dans le plan $x = 0$.`,
          },
        ],
        answer: String.raw`$$A = U S^{-1} = \begin{pmatrix} 0 & 0 & 0 \\ 0 & 2 & 1 \\ 0 & 1 & 0 \end{pmatrix}$$`,
      },
      {
        label: "b",
        statement: String.raw`Quelle est la dimension de l'image de $g$ ? Donner une base.`,
        steps: [
          {
            title: "Identifier les générateurs de l'image",
            content: String.raw`📖 **Rappel du cours :** l'image de $g$ est engendrée par les images d'une base de l'espace de départ. Comme $Z_1, Z_2, Z_3$ est une base de $\mathbb{R}^3$ :

$$\operatorname{Im} g = \operatorname{vect}\lbrace g(Z_1), g(Z_2), g(Z_3) \rbrace = \operatorname{vect}\lbrace (0, 2, 1)^T, (0, 1, 0)^T, (0, 3, 1)^T \rbrace$$

Il reste à extraire de ces trois générateurs un sous-ensemble linéairement indépendant maximal.`,
          },
          {
            title: "Éliminer le vecteur redondant",
            content: String.raw`Remarque que le troisième vecteur est la somme des deux premiers :

$$(0, 2, 1)^T + (0, 1, 0)^T = (0, 3, 1)^T = g(Z_3)$$

Donc $g(Z_3) = g(Z_1) + g(Z_2)$ : il n'apporte rien de neuf et l'image est engendrée par $g(Z_1)$ et $g(Z_2)$.`,
          },
          {
            title: "Conclure",
            content: String.raw`Les vecteurs $(0, 2, 1)^T$ et $(0, 1, 0)^T$ ne sont pas proportionnels (troisièmes composantes $1$ et $0$), donc ils sont linéairement indépendants.

Conclusion : $\dim \operatorname{Im} g = 2$ et une base de l'image est $\lbrace (0, 2, 1)^T, (0, 1, 0)^T \rbrace$.

Géométriquement, l'image est le plan d'équation $x = 0$ dans $\mathbb{R}^3$.`,
          },
        ],
        answer: String.raw`$\dim \operatorname{Im} g = 2$ ; une base de l'image est $\lbrace (0, 2, 1)^T, \; (0, 1, 0)^T \rbrace$ (deux des vecteurs images).`,
      },
      {
        label: "c",
        statement: String.raw`Quel est le noyau de $g$ ? Quelle est sa dimension ?`,
        steps: [
          {
            title: "Poser le système homogène",
            content: String.raw`📖 **Rappel du cours :** $N(g) = \lbrace X \in \mathbb{R}^3 : AX = O \rbrace$. Le théorème des dimensions annonce $\dim N(g) = 3 - \dim \operatorname{Im} g = 3 - 2 = 1$.

Le système $AX = O$ s'écrit :

$$\begin{cases} 0 = 0 \\ 2y + z = 0 \\ y = 0 \end{cases}$$

(la première ligne de $A$ étant nulle, elle ne donne aucune contrainte).`,
          },
          {
            title: "Résoudre",
            content: String.raw`La troisième équation donne $y = 0$. En substituant dans la deuxième : $z = 0$.

La variable $x$ n'apparaît dans aucune équation : elle est libre. Le système est simplement indéterminé, avec $x = \alpha$ comme paramètre.`,
          },
          {
            title: "Conclure et vérifier",
            content: String.raw`$$N(g) = \lbrace (x, y, z)^T \in \mathbb{R}^3 : (x, y, z)^T = \alpha \, (1, 0, 0)^T, \; \alpha \in \mathbb{R} \rbrace$$

C'est la droite engendrée par $(1, 0, 0)^T$, donc $\dim N(g) = 1$, en accord avec le théorème des dimensions.

**Vérification :** $A \, (1, 0, 0)^T$ = première colonne de $A$ = $(0, 0, 0)^T$ ✓ — le premier vecteur de la base canonique est bien écrasé par $g$.`,
          },
        ],
        answer: String.raw`$N(g) = \lbrace (x, y, z)^T \in \mathbb{R}^3 : (x, y, z)^T = \alpha \, (1, 0, 0)^T, \; \alpha \in \mathbb{R} \rbrace$, de dimension 1.`,
      },
      {
        label: "d",
        statement: String.raw`Quelle est la matrice qui représente $g$ dans la base $Z_1, Z_2, Z_3$ ?`,
        steps: [
          {
            title: "Appliquer la formule de changement de base",
            content: String.raw`📖 **Rappel du cours :** la matrice de $g$ dans la base $Z$ est $B' = S^{-1} A S$. Comme $AS = U$ (c'est la définition même de $A$ au point a), on a le raccourci

$$B' = S^{-1} U$$`,
          },
          {
            title: "Calculer B' = S⁻¹·U",
            content: String.raw`$$B' = S^{-1} U = \begin{pmatrix} 1 & 1 & -1 \\ 1 & 0 & 0 \\ -1 & 0 & 1 \end{pmatrix} \begin{pmatrix} 0 & 0 & 0 \\ 2 & 1 & 3 \\ 1 & 0 & 1 \end{pmatrix}$$

Ligne 1 : $(0 + 2 - 1, \; 0 + 1 - 0, \; 0 + 3 - 1) = (1, 1, 2)$.

Ligne 2 : la ligne 2 de $S^{-1}$ est $(1, 0, 0)$ ; elle sélectionne la première ligne de $U$, qui est nulle, donc $(0, 0, 0)$.

Ligne 3 : $(0 + 0 + 1, \; 0 + 0 + 0, \; 0 + 0 + 1) = (1, 0, 1)$.

$$B' = \begin{pmatrix} 1 & 1 & 2 \\ 0 & 0 & 0 \\ 1 & 0 & 1 \end{pmatrix}$$`,
          },
          {
            title: "Vérifier colonne par colonne",
            content: String.raw`**Vérification :** la première colonne de $B'$ dit que $g(Z_1) = 1 \cdot Z_1 + 0 \cdot Z_2 + 1 \cdot Z_3$. Calculons :

$$Z_1 + Z_3 = \begin{pmatrix} 0 \\ 1 \\ 0 \end{pmatrix} + \begin{pmatrix} 0 \\ 1 \\ 1 \end{pmatrix} = \begin{pmatrix} 0 \\ 2 \\ 1 \end{pmatrix} = g(Z_1) \checkmark$$

Colonne 2 : $g(Z_2) = 1 \cdot Z_1 = (0, 1, 0)^T$ ✓. Colonne 3 : $g(Z_3) = 2 Z_1 + Z_3 = (0, 2, 0)^T + (0, 1, 1)^T = (0, 3, 1)^T$ ✓.

Tout concorde : $B'$ est bien la matrice de $g$ dans la base $Z$.`,
          },
        ],
        answer: String.raw`$$B' = S^{-1} A S = \begin{pmatrix} 1 & 1 & 2 \\ 0 & 0 & 0 \\ 1 & 0 & 1 \end{pmatrix}$$`,
      },
    ],
  },
  {
    id: "4.13",
    chapter: 4,
    title: "Image et noyau d'une application linéaire de R⁴ dans R³",
    examType: true,
    statement: String.raw`Considérons l'application linéaire $f : \mathbb{R}^4 \to \mathbb{R}^3$ telle que

$$f(x, y, z, t) = (x - y + z + t, \; x + 2z - t, \; x + y + 3z - 3t)$$`,
    method: String.raw`Commence par écrire la matrice $A$ de $f$ dans les bases canoniques (chaque colonne = image d'un vecteur de la base canonique de $\mathbb{R}^4$). Ensuite, échelonne $A$ par la méthode de Gauss : le rang donne la dimension de l'image (base = colonnes pivots), et le système homogène échelonné donne le noyau. Le théorème des dimensions $\dim N(f) + \dim \operatorname{Im} f = 4$ te permet de contrôler tes résultats.`,
    theoryRefs: ["Transformations linéaires", "Matrice représentative", "Image et noyau"],
    parts: [
      {
        label: "a",
        statement: String.raw`Donnez la dimension et une base de l'image de $f$, $f(\mathbb{R}^4)$.`,
        steps: [
          {
            title: "Écrire la matrice de f",
            content: String.raw`📖 **Rappel du cours :** la matrice de $f$ dans les bases canoniques s'obtient en lisant les coefficients de $x, y, z, t$ dans chaque composante de $f$. Ici $f$ va de $\mathbb{R}^4$ vers $\mathbb{R}^3$, donc $A$ est de taille $3 \times 4$ :

$$A = \begin{pmatrix} 1 & -1 & 1 & 1 \\ 1 & 0 & 2 & -1 \\ 1 & 1 & 3 & -3 \end{pmatrix}$$

L'image $f(\mathbb{R}^4)$ est le sous-vectoriel de $\mathbb{R}^3$ engendré par les 4 colonnes de $A$, et sa dimension est le rang de $A$.`,
          },
          {
            title: "Échelonner A par Gauss",
            content: String.raw`On élimine les coefficients sous le premier pivot :

$$A \xrightarrow[L_3 \leftarrow L_3 - L_1]{L_2 \leftarrow L_2 - L_1} \begin{pmatrix} 1 & -1 & 1 & 1 \\ 0 & 1 & 1 & -2 \\ 0 & 2 & 2 & -4 \end{pmatrix} \xrightarrow{L_3 \leftarrow L_3 - 2L_2} \begin{pmatrix} 1 & -1 & 1 & 1 \\ 0 & 1 & 1 & -2 \\ 0 & 0 & 0 & 0 \end{pmatrix}$$

La troisième ligne s'annule complètement : il ne reste que 2 lignes non nulles, donc $\operatorname{rg} A = 2$.`,
          },
          {
            title: "Extraire une base de l'image",
            content: String.raw`📖 **Rappel du cours :** une base de l'image est donnée par les colonnes de la matrice **de départ** $A$ qui correspondent aux colonnes pivots de la forme échelonnée.

Les pivots sont dans les colonnes 1 et 2, donc les deux premières colonnes de $A$ forment une base de l'image :

$$f(\mathbb{R}^4) = \operatorname{vect}\left\lbrace \begin{pmatrix} 1 \\ 1 \\ 1 \end{pmatrix}, \begin{pmatrix} -1 \\ 0 \\ 1 \end{pmatrix} \right\rbrace$$

Ces deux vecteurs sont bien linéairement indépendants (ils ne sont pas proportionnels), et $\dim f(\mathbb{R}^4) = 2$.

**Vérification :** les colonnes 3 et 4 doivent s'exprimer en fonction des deux premières. Colonne 3 : $(1, 2, 3)^T = 2 \, (1, 1, 1)^T + 1 \cdot (-1, 0, 1)^T$ ✓. Colonne 4 : $(1, -1, -3)^T = -(1, 1, 1)^T - 2 \, (-1, 0, 1)^T = (-1 + 2, \; -1, \; -1 - 2)^T$ ✓`,
          },
        ],
        answer: String.raw`$\dim f(\mathbb{R}^4) = 2$ ; une base de l'image est $\lbrace (1, 1, 1)^T, \; (-1, 0, 1)^T \rbrace$ (deux colonnes indépendantes de la matrice de $f$).`,
      },
      {
        label: "b",
        statement: String.raw`Donnez la dimension et une base du noyau de $f$, $N(f)$.`,
        steps: [
          {
            title: "Prédire la dimension du noyau",
            content: String.raw`📖 **Rappel du cours (théorème des dimensions) :** pour une application linéaire $f : \mathbb{R}^4 \to \mathbb{R}^3$,

$$\dim N(f) + \dim \operatorname{Im} f = \dim \mathbb{R}^4 = 4$$

Comme $\dim \operatorname{Im} f = 2$ (point a), on sait déjà que $\dim N(f) = 4 - 2 = 2$ : on doit trouver **deux** paramètres libres, c'est-à-dire un système doublement indéterminé.`,
          },
          {
            title: "Résoudre le système homogène échelonné",
            content: String.raw`Le noyau est l'ensemble des solutions de $AX = O$. Grâce à l'échelonnement du point a), ce système équivaut à :

$$\begin{cases} x - y + z + t = 0 \\ y + z - 2t = 0 \end{cases}$$

Les inconnues pivots sont $x$ et $y$ ; les inconnues libres sont $z = \alpha$ et $t = \beta$.

De la deuxième équation : $y = -z + 2t = -\alpha + 2\beta$.

De la première : $x = y - z - t = (-\alpha + 2\beta) - \alpha - \beta = -2\alpha + \beta$.`,
          },
          {
            title: "Écrire la solution sous forme vectorielle",
            content: String.raw`On regroupe selon les paramètres $\alpha$ et $\beta$ :

$$\begin{pmatrix} x \\ y \\ z \\ t \end{pmatrix} = \begin{pmatrix} -2\alpha + \beta \\ -\alpha + 2\beta \\ \alpha \\ \beta \end{pmatrix} = \alpha \begin{pmatrix} -2 \\ -1 \\ 1 \\ 0 \end{pmatrix} + \beta \begin{pmatrix} 1 \\ 2 \\ 0 \\ 1 \end{pmatrix}$$

Les deux vecteurs $(-2, -1, 1, 0)^T$ et $(1, 2, 0, 1)^T$ engendrent le noyau, et ils sont linéairement indépendants (regarde les deux dernières composantes : $(1, 0)$ et $(0, 1)$ ne peuvent pas être proportionnelles).`,
          },
          {
            title: "Conclure et vérifier",
            content: String.raw`Conclusion : $\dim N(f) = 2$ et une base du noyau est $\lbrace (-2, -1, 1, 0)^T, \; (1, 2, 0, 1)^T \rbrace$ — cohérent avec la prédiction du théorème des dimensions.

**Vérification :** on réinjecte $(-2, -1, 1, 0)$ dans $f$ :

$$f(-2, -1, 1, 0) = (-2 + 1 + 1 + 0, \; -2 + 2 - 0, \; -2 - 1 + 3 - 0) = (0, 0, 0) \checkmark$$

Et $(1, 2, 0, 1)$ : $f(1, 2, 0, 1) = (1 - 2 + 0 + 1, \; 1 + 0 - 1, \; 1 + 2 + 0 - 3) = (0, 0, 0)$ ✓`,
          },
        ],
        answer: String.raw`$\dim N(f) = 2$ ; une base du noyau est $\lbrace (-2, -1, 1, 0)^T, \; (1, 2, 0, 1)^T \rbrace$.`,
      },
    ],
  },
  {
    id: "4.14",
    chapter: 4,
    title: "Base et dimension du noyau d'une application de R³ dans R³",
    examType: false,
    statement: String.raw`Considérons l'application linéaire $g : \mathbb{R}^3 \to \mathbb{R}^3$ telle que

$$g(x, y, z) = (x + 2y - z, \; y + z, \; x + y - 2z)$$

Trouver une base et la dimension du noyau de $g$.`,
    method: String.raw`Écris la matrice $A$ de $g$ dans la base canonique, puis résous le système homogène $AX = O$ par la méthode de Gauss. Si une ligne s'annule pendant l'échelonnement, le système est indéterminé et le noyau n'est pas réduit au vecteur nul : exprime la solution en fonction du paramètre libre pour obtenir un vecteur générateur.`,
    theoryRefs: ["Transformations linéaires", "Matrice représentative", "Image et noyau"],
    parts: [
      {
        label: null,
        steps: [
          {
            title: "Écrire la matrice de g et poser le système",
            content: String.raw`📖 **Rappel du cours :** le noyau de $g$ est $N(g) = \lbrace X \in \mathbb{R}^3 : g(X) = O \rbrace$. En lisant les coefficients de $x, y, z$ dans chaque composante de $g$, la matrice de $g$ dans la base canonique est

$$A = \begin{pmatrix} 1 & 2 & -1 \\ 0 & 1 & 1 \\ 1 & 1 & -2 \end{pmatrix}$$

et le noyau est l'ensemble des solutions du système homogène :

$$\begin{cases} x + 2y - z = 0 \\ y + z = 0 \\ x + y - 2z = 0 \end{cases}$$`,
          },
          {
            title: "Échelonner par Gauss",
            content: String.raw`On élimine $x$ de la troisième équation :

$$\begin{pmatrix} 1 & 2 & -1 \\ 0 & 1 & 1 \\ 1 & 1 & -2 \end{pmatrix} \xrightarrow{L_3 \leftarrow L_3 - L_1} \begin{pmatrix} 1 & 2 & -1 \\ 0 & 1 & 1 \\ 0 & -1 & -1 \end{pmatrix} \xrightarrow{L_3 \leftarrow L_3 + L_2} \begin{pmatrix} 1 & 2 & -1 \\ 0 & 1 & 1 \\ 0 & 0 & 0 \end{pmatrix}$$

La troisième ligne s'annule : $\operatorname{rg} A = 2 < 3$, donc le système est simplement indéterminé et le noyau est de dimension $3 - 2 = 1$ (théorème des dimensions : $\dim N(g) = \dim \mathbb{R}^3 - \dim \operatorname{Im} g = 3 - 2$).`,
          },
          {
            title: "Résoudre en fonction du paramètre libre",
            content: String.raw`Le système échelonné se réduit à :

$$\begin{cases} x + 2y - z = 0 \\ y + z = 0 \end{cases}$$

On choisit $z = \alpha$ comme paramètre libre.

De la deuxième équation : $y = -z = -\alpha$.

De la première : $x = -2y + z = 2\alpha + \alpha = 3\alpha$.

D'où la solution générale :

$$\begin{pmatrix} x \\ y \\ z \end{pmatrix} = \alpha \begin{pmatrix} 3 \\ -1 \\ 1 \end{pmatrix}, \qquad \alpha \in \mathbb{R}$$`,
          },
          {
            title: "Conclure et vérifier",
            content: String.raw`Le noyau est la droite vectorielle engendrée par $(3, -1, 1)^T$ :

$$N(g) = \operatorname{vect}\lbrace (3, -1, 1)^T \rbrace, \qquad \dim N(g) = 1$$

Un seul vecteur non nul suffit comme base d'un sous-vectoriel de dimension 1.

**Vérification :** on réinjecte $(3, -1, 1)$ dans la définition de $g$ :

$$g(3, -1, 1) = (3 - 2 - 1, \; -1 + 1, \; 3 - 1 - 2) = (0, 0, 0) \checkmark$$`,
          },
        ],
        answer: String.raw`$\dim N(g) = 1$ ; une base du noyau est $\lbrace (3, -1, 1)^T \rbrace$.`,
      },
    ],
  },
];
