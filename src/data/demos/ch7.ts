import type { Demonstration } from "./types";

export const demos: Demonstration[] = [
  {
    id: "7.1",
    chapter: 7,
    title: "Toute forme quadratique se représente par une matrice symétrique",
    slideRef: "Slides 244–245",
    exam: "Prouver que toute forme quadratique se représente par une matrice symétrique",
    statement: String.raw`**Théorème (slide 244).** Toute forme quadratique dans $\mathbb{R}^n$ peut se représenter par

$$Q(X) = X^T A X,$$

où $A$ est une matrice symétrique réelle — et cette matrice symétrique est **unique**. On dit que $A$ **représente** la forme quadratique $Q$.`,
    intuition: String.raw`$Q(X) = X^T B X$ est une matrice $1 \times 1$, donc un nombre égal à sa propre transposée : $Q(X) = X^T B^T X$. En prenant la moyenne de ces deux écritures, on fait apparaître $A = \frac{1}{2}\left(B + B^T\right)$, qui représente encore $Q$ et qui, elle, est symétrique.`,
    steps: [
      {
        title: "Comprendre le problème : plusieurs matrices pour une même forme",
        content: String.raw`Une forme quadratique est un polynôme homogène du second degré :

$$Q(X) = \sum_{i=1}^{n} \sum_{j=1}^{n} b_{ij}\, x_i x_j = X^T B X,$$

pour au moins une matrice carrée $B$. Mais cette matrice n'est **pas unique**. Exemple du cours (slide 244) : $Q(X) = 4x_1^2 + 2x_1x_2$ est représentée aussi bien par

$$\begin{pmatrix} 4 & 2 \\ 0 & 0 \end{pmatrix}, \qquad \begin{pmatrix} 4 & 0 \\ 2 & 0 \end{pmatrix}, \qquad \begin{pmatrix} 4 & 1 \\ 1 & 0 \end{pmatrix},$$

car seule la **somme** $b_{12} + b_{21} = 2$ compte pour le coefficient du terme croisé $x_1 x_2$. Le théorème affirme qu'on peut toujours choisir le représentant **symétrique** (ici la troisième matrice). Objectif de la preuve : partir d'une matrice $B$ quelconque et fabriquer une matrice symétrique $A$ qui donne exactement la même fonction $Q$.`,
      },
      {
        title: "L'astuce de départ : Q(X) est un scalaire, égal à sa propre transposée",
        content: String.raw`Contrôle des dimensions du produit $X^T B X$ : $(1 \times n) \cdot (n \times n) \cdot (n \times 1) = 1 \times 1$. Autrement dit, $Q(X)$ est un **nombre réel**, vu comme une matrice $1 \times 1$. Or transposer une matrice $1 \times 1$ ne change rien :

$$Q(X) = Q(X)^T$$

C'est l'astuce à retrouver le jour J — elle est notée en marge du slide 245. Pourquoi transposer un nombre, geste qui semble ne rien apporter ? Parce que la transposée du **produit** $X^T B X$ va faire apparaître $B^T$ à la place de $B$, et livrer gratuitement une deuxième écriture de la même fonction $Q$.

📖 **Rappel (ch. 1).** La transposée $M^T$ échange lignes et colonnes ; une matrice carrée est **symétrique** lorsque $M^T = M$, c'est-à-dire lorsque $m_{ij} = m_{ji}$ pour tous $i, j$.`,
      },
      {
        title: "Transposer le produit : l'ordre s'inverse",
        content: String.raw`📖 **Rappel (ch. 1).** $(MNP)^T = P^T N^T M^T$ — la transposée d'un produit inverse l'ordre des facteurs — et $(X^T)^T = X$.

On applique ces deux règles à $Q(X)^T$ :

$$Q(X) = Q(X)^T = \left(X^T B X\right)^T = X^T B^T \left(X^T\right)^T = X^T B^T X$$

Conclusion remarquable : la **même** fonction $Q$ est aussi représentée par $B^T$. On dispose maintenant de deux écritures de $Q(X)$, à savoir $X^T B X$ et $X^T B^T X$ — deux matrices différentes (si $B$ n'est pas symétrique) pour une seule et même forme quadratique.`,
      },
      {
        title: "Moyenner les deux écritures",
        content: String.raw`Si deux expressions sont toutes deux égales à $Q(X)$, leur moyenne l'est aussi :

$$Q(X) = \frac{1}{2}\left(X^T B X + X^T B^T X\right) = X^T \left[\frac{1}{2}\left(B + B^T\right)\right] X$$

La factorisation par $X^T$ à gauche et $X$ à droite, c'est la distributivité du produit matriciel (ch. 1). On pose donc

$$A = \frac{1}{2}\left(B + B^T\right),$$

et par construction $Q(X) = X^T A X$ pour tout $X \in \mathbb{R}^n$.

Pourquoi la moyenne ? Parce que $B$ et $B^T$ sont images miroir l'une de l'autre par rapport à la diagonale : leur demi-somme gomme l'asymétrie — exactement comme la moyenne de $b_{ij}$ et $b_{ji}$ répartit équitablement le coefficient croisé entre les positions $(i, j)$ et $(j, i)$.`,
      },
      {
        title: "Vérifier que A est bien symétrique",
        content: String.raw`Étape courte mais **obligatoire** — c'est elle qui établit la conclusion du théorème :

$$A^T = \frac{1}{2}\left(B + B^T\right)^T = \frac{1}{2}\left(B^T + \left(B^T\right)^T\right) = \frac{1}{2}\left(B^T + B\right) = A$$

📖 **Rappel (ch. 1).** La transposée d'une somme est la somme des transposées, et $(B^T)^T = B$.

On a donc $A^T = A$ : la matrice $A$ est symétrique et représente $Q$. Le théorème est prouvé.`,
      },
      {
        title: "La version « coefficients » et un mini-exemple",
        content: String.raw`En composantes, la construction $A = \frac{1}{2}\left(B + B^T\right)$ se lit : $a_{ij} = \frac{b_{ij} + b_{ji}}{2}$. Sur la diagonale, $a_{ii} = b_{ii}$ (inchangée : c'est le coefficient de $x_i^2$) ; hors diagonale, le coefficient de $x_i x_j$ se répartit en deux moitiés égales $a_{ij} = a_{ji} = \frac{b_{ij} + b_{ji}}{2}$. C'est la recette pratique du cours : « diagonale entière, croisés coupés en deux ».

Mini-exemple (auto-test du cours) avec $B = \begin{pmatrix} 4 & 2 \\ 0 & 0 \end{pmatrix}$ :

$$B + B^T = \begin{pmatrix} 8 & 2 \\ 2 & 0 \end{pmatrix} \qquad \Longrightarrow \qquad A = \frac{1}{2}\left(B + B^T\right) = \begin{pmatrix} 4 & 1 \\ 1 & 0 \end{pmatrix}$$

Vérification : $X^T A X = 4x_1^2 + (1 + 1)\,x_1 x_2 + 0 \cdot x_2^2 = 4x_1^2 + 2x_1x_2 = Q(X)$. La preuve n'est donc pas abstraite : c'est un véritable **algorithme de symétrisation**.

(Le cours précise aussi que la matrice symétrique est **unique** : $a_{ii}$ est forcé par le coefficient de $x_i^2$, et $a_{ij} = a_{ji}$ par la moitié du coefficient de $x_i x_j$, puisque $a_{ij} + a_{ji} = 2a_{ij}$ doit égaler ce coefficient. La partie exigée à l'examen est la construction de $A$ ci-dessus.)`,
      },
    ],
    examProof: String.raw`**Théorème.** Toute forme quadratique dans $\mathbb{R}^n$ peut se représenter par

$$Q(X) = X^T A X,$$

où $A$ est une matrice symétrique réelle.

**Preuve.** Soit $Q$ une forme quadratique dans $\mathbb{R}^n$. Par définition, il existe une matrice carrée $B$, non nécessairement symétrique, telle que

$$Q(X) = X^T B X \qquad \text{pour tout } X \in \mathbb{R}^n.$$

Le produit $X^T B X$ est de dimensions $(1 \times n)(n \times n)(n \times 1) = 1 \times 1$ : $Q(X)$ est un nombre réel, donc égal à sa propre transposée. En utilisant $(MNP)^T = P^T N^T M^T$ puis $(X^T)^T = X$, on obtient, pour tout $X$ :

$$Q(X) = Q(X)^T = \left(X^T B X\right)^T = X^T B^T \left(X^T\right)^T = X^T B^T X.$$

En prenant la demi-somme de ces deux expressions de $Q(X)$, puis en factorisant par $X^T$ à gauche et par $X$ à droite :

$$Q(X) = \frac{1}{2}\left(X^T B X + X^T B^T X\right) = X^T \left[\frac{1}{2}\left(B + B^T\right)\right] X = X^T A X, \qquad \text{où } A = \frac{1}{2}\left(B + B^T\right).$$

La matrice $A$ est symétrique, car

$$A^T = \frac{1}{2}\left(B + B^T\right)^T = \frac{1}{2}\left(B^T + \left(B^T\right)^T\right) = \frac{1}{2}\left(B^T + B\right) = A.$$

Toute forme quadratique se représente donc par la matrice symétrique $A = \frac{1}{2}\left(B + B^T\right)$. $\blacksquare$`,
    pitfalls: [
      String.raw`Oublier la vérification finale $A^T = A$ : construire $A = \frac{1}{2}(B + B^T)$ sans prouver sa symétrie laisse la conclusion du théorème sans justification — c'est la dernière ligne qui rapporte les points.`,
      String.raw`Se tromper dans la transposée du produit : $\left(X^T B X\right)^T = X^T B^T X$ (l'ordre des facteurs s'inverse, puis $(X^T)^T = X$), et non $X B^T X^T$, dont les dimensions ne sont même pas compatibles.`,
      String.raw`Affirmer $Q(X) = Q(X)^T$ sans le justifier : la raison est l'argument de dimensions — $Q(X)$ est une matrice $1 \times 1$, c'est-à-dire un scalaire, invariant par transposition. Cette phrase doit figurer sur la copie.`,
      String.raw`Côté calcul (construction directe de $A$ à partir de $Q$) : oublier de diviser par $2$ les coefficients croisés — $a_{ij} = a_{ji} = \frac{b_{ij} + b_{ji}}{2}$, tandis que les coefficients diagonaux restent tels quels.`,
    ],
  },
];
