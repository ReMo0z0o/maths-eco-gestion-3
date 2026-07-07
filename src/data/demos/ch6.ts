import type { Demonstration } from "./types";

export const demos: Demonstration[] = [
  // ---------------------------------------------------------------- 6.1
  {
    id: "6.1",
    chapter: 6,
    title: "Indépendance des vecteurs propres",
    slideRef: "Slide 211",
    exam: "Prouver que des vecteurs propres relatifs à des valeurs propres différentes sont linéairement indépendants",
    statement: String.raw`**Théorème (slide 211).** Des vecteurs propres relatifs à des valeurs propres différentes sont linéairement indépendants.

En clair : si $X_1, \dots, X_p$ sont des vecteurs propres d'une même matrice $A$, relatifs aux valeurs propres $\lambda_1, \dots, \lambda_p$ **toutes différentes**, alors la famille $(X_1, \dots, X_p)$ est libre.`,
    intuition: String.raw`On raisonne par l'absurde : si $X_1$ était combinaison linéaire des autres vecteurs propres, le calcul de $AX_1 - \lambda_1 X_1$ (qui vaut $O$) ferait apparaître des facteurs $(\lambda_i - \lambda_1) \neq 0$ forçant tous les coefficients à être nuls — donc $X_1 = O$, interdit pour un vecteur propre.`,
    steps: [
      {
        title: "Comprendre l'énoncé (et le vocabulaire)",
        content: String.raw`📖 **Rappels indispensables.**

- Un **vecteur propre** de $A$ de valeur propre $\lambda$ est un vecteur $X \neq O$ tel que $AX = \lambda X$. Retiens bien : un vecteur propre est **non nul par définition** — c'est cette clause qui fournira la contradiction finale.
- Des vecteurs $X_1, \dots, X_p$ sont **linéairement indépendants** (famille **libre**) si la seule combinaison linéaire nulle est la combinaison triviale : $\alpha_1 X_1 + \dots + \alpha_p X_p = O$ force $\alpha_1 = \dots = \alpha_p = 0$. Sinon la famille est **liée**, et l'un des vecteurs s'écrit comme combinaison linéaire des autres (chapitre 4).

Le théorème dit : si tu prends des vecteurs propres $X_1, \dots, X_p$ associés à des valeurs propres $\lambda_1, \dots, \lambda_p$ **toutes différentes**, alors cette famille est automatiquement libre. C'est ce résultat qui garantit par exemple qu'une matrice $n \times n$ possédant $n$ valeurs propres distinctes est diagonalisable : ses $n$ vecteurs propres forment une base.`,
      },
      {
        title: "La stratégie : raisonner par l'absurde",
        content: String.raw`On veut montrer que la famille est libre. La technique du cours : supposer le contraire et aboutir à une absurdité.

Supposons donc la famille **liée**. Alors l'un des vecteurs est combinaison linéaire des autres ; quitte à renuméroter, appelons-le $X_1$ :

$$X_1 = \alpha_2 X_2 + \dots + \alpha_p X_p$$

**Point crucial** (souvent oublié) : on peut choisir cette écriture de sorte que $X_2, \dots, X_p$ soient **linéairement indépendants**. Pourquoi ? Si une famille est liée, on peut toujours en extraire une sous-famille libre et exprimer l'un des vecteurs restants en fonction d'elle. Cette précision n'est pas décorative : c'est elle qui permettra de dire, à la fin, « donc tous les coefficients sont nuls ».

Et garde sous la main ce que donnent les hypothèses : $AX_k = \lambda_k X_k$ pour chaque $k$, avec des $\lambda_k$ tous différents.`,
      },
      {
        title: "Le calcul central : appliquer A puis soustraire",
        content: String.raw`Voici le cœur de la preuve. On calcule la quantité $AX_1 - \lambda_1 X_1$ **de deux façons**.

**Première façon** (directe) : $X_1$ est vecteur propre de valeur propre $\lambda_1$, donc $AX_1 = \lambda_1 X_1$, donc

$$AX_1 - \lambda_1 X_1 = O$$

**Deuxième façon** (en substituant la combinaison) : on remplace $X_1$ par $\alpha_2 X_2 + \dots + \alpha_p X_p$ dans **chacun** des deux termes :

$$AX_1 - \lambda_1 X_1 = \underbrace{\alpha_2 AX_2 + \dots + \alpha_p AX_p}_{A \, \times \, \text{la combinaison}} \; - \; \underbrace{\big( \alpha_2 \lambda_1 X_2 + \dots + \alpha_p \lambda_1 X_p \big)}_{\lambda_1 \, \times \, \text{la combinaison}}$$

**Pourquoi appliquer $A$ ?** Parce que c'est le seul outil dont on dispose : la relation $AX_k = \lambda_k X_k$ transforme chaque $X_k$ en $\lambda_k X_k$, avec **sa propre** valeur propre. **Pourquoi soustraire $\lambda_1$ fois la combinaison ?** Pour faire apparaître des différences $\lambda_k - \lambda_1$ : c'est là que l'hypothèse « valeurs propres toutes différentes » va enfin pouvoir servir.`,
      },
      {
        title: "Regrouper terme à terme : les facteurs magiques",
        content: String.raw`On utilise maintenant $AX_2 = \lambda_2 X_2$, ..., $AX_p = \lambda_p X_p$ et on regroupe les termes en $X_2$, puis les termes en $X_3$, etc. :

$$O = \alpha_2 (\lambda_2 - \lambda_1) X_2 + \alpha_3 (\lambda_3 - \lambda_1) X_3 + \dots + \alpha_p (\lambda_p - \lambda_1) X_p$$

Prends le temps de vérifier le regroupement sur le terme en $X_2$ : il reste $\alpha_2 \lambda_2 X_2$ (venant de $A$ appliqué à la combinaison) moins $\alpha_2 \lambda_1 X_2$ (venant de la soustraction), soit $\alpha_2 (\lambda_2 - \lambda_1) X_2$.

**Attention au piège de calcul :** $A(\alpha_2 X_2) = \alpha_2 \lambda_2 X_2$, et surtout pas $\alpha_2 \lambda_1 X_2$ — chaque vecteur propre est étiré par **sa** valeur propre.

On a donc obtenu une **combinaison linéaire nulle** des vecteurs $X_2, \dots, X_p$.`,
      },
      {
        title: "La contradiction finale",
        content: String.raw`Souviens-toi de la précision de l'étape 2 : $X_2, \dots, X_p$ sont linéairement indépendants. Par définition d'une famille libre, une combinaison linéaire nulle force **tous** ses coefficients à être nuls :

$$\alpha_2 (\lambda_2 - \lambda_1) = \dots = \alpha_p (\lambda_p - \lambda_1) = 0$$

Or les valeurs propres sont toutes différentes : $\lambda_i - \lambda_1 \neq 0$ pour tout $i = 2, \dots, p$. Chaque produit est nul avec un facteur non nul, donc l'autre facteur est nul :

$$\alpha_2 = \alpha_3 = \dots = \alpha_p = 0$$

Mais alors la combinaison de départ donne $X_1 = 0 \cdot X_2 + \dots + 0 \cdot X_p = O$. **Impossible** : un vecteur propre est non nul par définition ! L'hypothèse « famille liée » est donc absurde : la famille est libre.

Note bien que la toute dernière phrase (« $X_1 = O$, ce qui est impossible ») n'est pas un détail : c'est **la** contradiction. Sans elle, la preuve n'est pas terminée.`,
      },
      {
        title: "Vois le mécanisme sur un exemple 2 × 2",
        content: String.raw`Prenons $A = \begin{pmatrix} 4 & 2 \\ 2 & 1 \end{pmatrix}$ (slide 209 du cours) : $\lambda_1 = 0$ avec $X_1 = (1, -2)^T$ et $\lambda_2 = 5$ avec $X_2 = (2, 1)^T$.

Déroulons la preuve avec $p = 2$. Supposons la famille liée : $X_1 = \alpha_2 X_2$ avec $\alpha_2 \neq 0$. Alors :

$$O = AX_1 - \lambda_1 X_1 = \alpha_2 AX_2 - \alpha_2 \lambda_1 X_2 = \alpha_2 (\lambda_2 - \lambda_1) X_2 = 5 \alpha_2 X_2$$

Comme $X_2 \neq O$, il faut $5 \alpha_2 = 0$, donc $\alpha_2 = 0$, donc $X_1 = O$ : absurde. Les deux vecteurs sont bien indépendants — ce que tu vois géométriquement : $(1, -2)^T$ et $(2, 1)^T$ ne sont pas colinéaires. (Ils sont même orthogonaux ici... normal : $A$ est symétrique, c'est exactement la démo 6.2 !)`,
      },
    ],
    examProof: String.raw`**Théorème.** Des vecteurs propres relatifs à des valeurs propres différentes sont linéairement indépendants.

**Démonstration.** Soient $X_1, \dots, X_p$ des vecteurs propres de la matrice $A$, relatifs aux valeurs propres $\lambda_1, \dots, \lambda_p$, supposées toutes différentes. On a donc

$$AX_1 = \lambda_1 X_1, \quad \dots, \quad AX_p = \lambda_p X_p \qquad (1)$$

avec $X_i \neq O$ pour tout $i$ (un vecteur propre est non nul par définition).

Raisonnons par l'absurde et supposons la famille liée. Alors l'un des vecteurs — disons $X_1$, quitte à renuméroter — est combinaison linéaire des autres :

$$X_1 = \alpha_2 X_2 + \dots + \alpha_p X_p \qquad (2)$$

où l'on peut supposer $X_2, \dots, X_p$ linéairement indépendants (on exprime $X_1$ en fonction d'une sous-famille libre).

Calculons $AX_1 - \lambda_1 X_1$. D'une part, par (1), $AX_1 - \lambda_1 X_1 = O$. D'autre part, en remplaçant $X_1$ par la combinaison (2) dans chacun des deux termes :

$$O = AX_1 - \lambda_1 X_1 = \big( \alpha_2 AX_2 + \dots + \alpha_p AX_p \big) - \big( \alpha_2 \lambda_1 X_2 + \dots + \alpha_p \lambda_1 X_p \big)$$

Or, par (1), $AX_2 = \lambda_2 X_2$, ..., $AX_p = \lambda_p X_p$. En regroupant terme à terme :

$$\alpha_2 (\lambda_2 - \lambda_1) X_2 + \dots + \alpha_p (\lambda_p - \lambda_1) X_p = O$$

Les vecteurs $X_2, \dots, X_p$ étant linéairement indépendants, tous les coefficients de cette combinaison linéaire nulle sont nuls :

$$\alpha_2 (\lambda_2 - \lambda_1) = \dots = \alpha_p (\lambda_p - \lambda_1) = 0$$

Comme les valeurs propres sont toutes différentes, $\lambda_i - \lambda_1 \neq 0$ pour $i = 2, \dots, p$. Donc $\alpha_2 = \dots = \alpha_p = 0$, et la relation (2) donne $X_1 = O$ : impossible, car un vecteur propre est non nul par définition.

Cette contradiction montre que la famille $(X_1, \dots, X_p)$ est linéairement indépendante. $\blacksquare$`,
    pitfalls: [
      String.raw`Oublier de préciser que $X_2, \dots, X_p$ sont **linéairement indépendants** dans l'hypothèse absurde : sans cette précision, l'étape « tous les coefficients sont nuls » ne tient pas, et la preuve s'écroule.`,
      String.raw`Oublier la toute dernière phrase : « donc $X_1 = O$, ce qui est impossible car un vecteur propre est non nul par définition ». C'est elle qui porte la contradiction — sans elle, la démonstration est inachevée.`,
      String.raw`Écrire $A(\alpha_2 X_2) = \alpha_2 \lambda_1 X_2$ au lieu de $\alpha_2 \lambda_2 X_2$ : chaque $X_i$ est transformé avec **sa** valeur propre $\lambda_i$, pas avec $\lambda_1$.`,
      String.raw`Confondre avec la démo 6.2 : ici, aucune hypothèse de symétrie sur $A$, et la conclusion est l'indépendance — pas l'orthogonalité.`,
    ],
  },

  // ---------------------------------------------------------------- 6.2
  {
    id: "6.2",
    chapter: 6,
    title: "Orthogonalité des vecteurs propres d'une matrice symétrique",
    slideRef: "Slide 217",
    exam: "Prouver que des vecteurs propres relatifs à des valeurs propres différentes d'une matrice symétrique sont orthogonaux",
    statement: String.raw`**Théorème (slide 217).** Des vecteurs propres relatifs à des valeurs propres différentes d'une matrice symétrique réelle sont orthogonaux.

En clair : si $A^T = A$ (matrice réelle), si $AX_1 = \lambda_1 X_1$ et $AX_2 = \lambda_2 X_2$ avec $X_1, X_2 \neq O$ et $\lambda_1 \neq \lambda_2$, alors $X_1 \bullet X_2 = 0$.`,
    intuition: String.raw`On calcule la même quantité $X_2 \bullet AX_1$ de deux façons : directement, elle vaut $\lambda_1 \, (X_2 \bullet X_1)$ ; en faisant « passer $A$ de l'autre côté » grâce à $X \bullet Y = X^T Y$ et à la symétrie $A^T = A$, elle vaut $\lambda_2 \, (X_1 \bullet X_2)$. D'où $(\lambda_1 - \lambda_2)(X_1 \bullet X_2) = 0$, et comme $\lambda_1 \neq \lambda_2$, le produit scalaire est nul.`,
    steps: [
      {
        title: "Comprendre l'énoncé : orthogonal, plus fort qu'indépendant",
        content: String.raw`📖 **Rappels indispensables.**

- Deux vecteurs $X_1, X_2$ de $\mathbb{R}^n$ sont **orthogonaux** lorsque leur produit scalaire est nul : $X_1 \bullet X_2 = 0$.
- Une matrice $A$ est **symétrique** lorsque $A^T = A$ (elle est égale à sa transposée).
- Un **vecteur propre** : $X \neq O$ et $AX = \lambda X$.

La démo 6.1 dit que des vecteurs propres de valeurs propres différentes sont **indépendants** — pour n'importe quelle matrice. Ici, on ajoute une hypothèse ($A$ symétrique) et on obtient une conclusion plus forte : les vecteurs sont carrément **perpendiculaires**. C'est ce théorème qui rend possible la diagonalisation **orthogonale** des matrices symétriques (slides 218 et suivants) : les vecteurs propres normés forment directement les colonnes d'une matrice orthogonale $S$.`,
      },
      {
        title: "L'outil clé : le produit scalaire écrit matriciellement",
        content: String.raw`📖 **Rappel (manuscrit du cours) :** le produit scalaire de deux vecteurs colonnes s'écrit comme un produit matriciel :

$$X \bullet Y = X^T Y$$

(une matrice $1 \times n$ fois une matrice $n \times 1$ : le résultat est un nombre). Deux propriétés vont servir :

- la **symétrie du produit scalaire** : $X \bullet Y = Y \bullet X$ ;
- la **transposée d'un produit** (chapitre 1) : $(BC)^T = C^T B^T$ — attention, l'ordre s'inverse !

C'est cette écriture matricielle qui permet de « faire passer $A$ d'un côté à l'autre » du produit scalaire. Toute la preuve tient dans cette manœuvre.`,
      },
      {
        title: "Le plan : évaluer une même quantité de deux façons",
        content: String.raw`On pose les hypothèses : $A$ est symétrique réelle ($A^T = A$) et

$$AX_1 = \lambda_1 X_1, \qquad AX_2 = \lambda_2 X_2, \qquad \lambda_1 \neq \lambda_2$$

L'idée : choisir une quantité qui contient à la fois $X_1$, $X_2$ et $A$, puis la calculer de deux manières. La bonne candidate : $X_2 \bullet AX_1$.

**Première évaluation** (directe) : on remplace $AX_1$ par $\lambda_1 X_1$ et on sort le scalaire du produit :

$$X_2 \bullet AX_1 = X_2 \bullet (\lambda_1 X_1) = \lambda_1 \, (X_2 \bullet X_1)$$

De la même façon, $X_1 \bullet AX_2 = \lambda_2 \, (X_1 \bullet X_2)$. Pour l'instant, ces deux quantités n'ont aucune raison d'être égales... c'est la symétrie de $A$ qui va les relier à l'étape suivante.`,
      },
      {
        title: "La chaîne du milieu : où la symétrie sert exactement",
        content: String.raw`Voici le cœur de la preuve — cinq égalités, à écrire **toutes** :

$$X_2 \bullet AX_1 = (AX_1) \bullet X_2 = (AX_1)^T X_2 = X_1^T A^T X_2 = X_1^T A X_2 = X_1 \bullet AX_2$$

Justifie chaque maillon :

- (i) $X_2 \bullet AX_1 = (AX_1) \bullet X_2$ : symétrie du produit scalaire ;
- (ii) $(AX_1) \bullet X_2 = (AX_1)^T X_2$ : écriture matricielle $X \bullet Y = X^T Y$ ;
- (iii) $(AX_1)^T X_2 = X_1^T A^T X_2$ : règle $(BC)^T = C^T B^T$ appliquée à $B = A$ et $C = X_1$ ;
- (iv) $X_1^T A^T X_2 = X_1^T A X_2$ : **c'est ici, et seulement ici, que la symétrie $A^T = A$ intervient** ;
- (v) $X_1^T A X_2 = X_1^T (AX_2) = X_1 \bullet AX_2$ : relecture matricielle du produit scalaire.

Sans l'hypothèse de symétrie, le maillon (iv) casse et le théorème devient faux (contre-exemple à l'étape 6).`,
      },
      {
        title: "La soustraction finale",
        content: String.raw`La chaîne de l'étape 4 dit que $X_2 \bullet AX_1 = X_1 \bullet AX_2$. En remplaçant chaque membre par sa valeur calculée à l'étape 3 :

$$\lambda_1 \, (X_2 \bullet X_1) = \lambda_2 \, (X_1 \bullet X_2)$$

Comme $X_2 \bullet X_1 = X_1 \bullet X_2$ (symétrie du produit scalaire), on met tout du même côté et on factorise :

$$(\lambda_1 - \lambda_2)(X_1 \bullet X_2) = 0$$

Un produit de deux **nombres** est nul, donc l'un des deux est nul. Or $\lambda_1 \neq \lambda_2$ par hypothèse, donc $\lambda_1 - \lambda_2 \neq 0$. Conclusion forcée :

$$X_1 \bullet X_2 = 0$$

Les deux vecteurs sont orthogonaux. Note bien la justification « on peut simplifier par $\lambda_1 - \lambda_2$ car il est non nul » : à l'examen, elle doit être écrite noir sur blanc.`,
      },
      {
        title: "Un exemple et un contre-exemple en 2 × 2",
        content: String.raw`**Exemple symétrique.** $A = \begin{pmatrix} 2 & -1 \\ -1 & 2 \end{pmatrix}$ : valeurs propres $\lambda_1 = 1$ avec $X_1 = (1, 1)^T$ et $\lambda_2 = 3$ avec $X_2 = (1, -1)^T$. Vérifie : $X_1 \bullet X_2 = 1 \cdot 1 + 1 \cdot (-1) = 0$. Orthogonaux, comme promis par le théorème.

**Contre-exemple sans symétrie.** $B = \begin{pmatrix} 1 & 1 \\ 0 & 2 \end{pmatrix}$ n'est pas symétrique. Ses valeurs propres sont $1$ et $2$ (différentes !), avec vecteurs propres $(1, 0)^T$ et $(1, 1)^T$. Produit scalaire : $1 \cdot 1 + 0 \cdot 1 = 1 \neq 0$. Indépendants (démo 6.1), mais **pas** orthogonaux : l'hypothèse de symétrie n'est pas décorative.`,
      },
    ],
    examProof: String.raw`**Théorème.** Des vecteurs propres relatifs à des valeurs propres différentes d'une matrice symétrique réelle sont orthogonaux.

**Démonstration.** Soit $A$ une matrice symétrique réelle, c'est-à-dire $A^T = A$. Soient $X_1$ et $X_2$ des vecteurs propres de $A$ relatifs aux valeurs propres $\lambda_1$ et $\lambda_2$, avec $\lambda_1 \neq \lambda_2$ :

$$AX_1 = \lambda_1 X_1, \qquad AX_2 = \lambda_2 X_2 \qquad (1)$$

On rappelle que le produit scalaire s'écrit matriciellement $X \bullet Y = X^T Y$ et qu'il est symétrique : $X \bullet Y = Y \bullet X$.

On calcule la quantité $X_2 \bullet AX_1$ de deux façons.

D'une part, par (1) :

$$X_2 \bullet AX_1 = X_2 \bullet (\lambda_1 X_1) = \lambda_1 \, (X_2 \bullet X_1) \qquad (2)$$

D'autre part, en utilisant la symétrie de $A$ :

$$X_2 \bullet AX_1 = (AX_1) \bullet X_2 = (AX_1)^T X_2 = X_1^T A^T X_2 = X_1^T A X_2 = X_1 \bullet AX_2 = \lambda_2 \, (X_1 \bullet X_2) \qquad (3)$$

où l'on a utilisé successivement : la symétrie du produit scalaire ; l'écriture matricielle $X \bullet Y = X^T Y$ ; la règle $(BC)^T = C^T B^T$ ; l'hypothèse $A^T = A$ ; de nouveau l'écriture matricielle ; et la relation (1).

En égalant (2) et (3), et puisque $X_2 \bullet X_1 = X_1 \bullet X_2$ :

$$\lambda_1 \, (X_1 \bullet X_2) = \lambda_2 \, (X_1 \bullet X_2), \qquad \text{d'où} \qquad (\lambda_1 - \lambda_2)(X_1 \bullet X_2) = 0$$

Or $\lambda_1 \neq \lambda_2$, donc $\lambda_1 - \lambda_2 \neq 0$. On en déduit

$$X_1 \bullet X_2 = 0$$

Les vecteurs $X_1$ et $X_2$ sont donc orthogonaux. $\blacksquare$`,
    pitfalls: [
      String.raw`La chaîne d'égalités centrale doit être écrite **maillon par maillon**. Le plus souvent oublié : $(AX_1)^T X_2 = X_1^T A^T X_2$, qui vient de la règle $(BC)^T = C^T B^T$ — elle-même démonstration d'examen du chapitre 1 (révise les deux ensemble).`,
      String.raw`Ne pas montrer où la symétrie intervient : c'est exactement le maillon $X_1^T A^T X_2 = X_1^T A X_2$. Si tu n'écris pas « car $A^T = A$ », le correcteur ne voit pas que tu as utilisé l'hypothèse.`,
      String.raw`Confondre avec la démo 6.1 : pour une matrice quelconque, des vecteurs propres de valeurs propres différentes sont indépendants mais **pas orthogonaux en général** — ce théorème exige $A$ symétrique.`,
      String.raw`Conclure $X_1 \bullet X_2 = 0$ sans justification : il faut dire qu'on peut simplifier par $\lambda_1 - \lambda_2$ **parce qu'il est non nul** ($\lambda_1 \neq \lambda_2$).`,
    ],
  },

  // ---------------------------------------------------------------- 6.3
  {
    id: "6.3",
    chapter: 6,
    title: "La valeur propre 1 d'une matrice de Markov",
    slideRef: "Slide 229",
    exam: "Prouver le théorème sur les valeurs propres d'une matrice de Markov (existence de la valeur propre 1)",
    statement: String.raw`**Théorème (slide 229).** Si $A$ est une matrice de Markov, alors ses valeurs propres $\lambda_1, \dots, \lambda_n$ sont toutes $\leq 1$. En particulier, il y a au moins une valeur propre qui est égale à 1.

Le cours — et donc l'examen — ne démontre que la **seconde partie** de l'énoncé : l'existence d'une valeur propre égale à 1.`,
    intuition: String.raw`« Chaque colonne de $A$ somme à 1 » se traduit par « chaque ligne de $A^T$ somme à 1 », c'est-à-dire $A^T \mathbf{1} = \mathbf{1}$ avec $\mathbf{1} = (1, \dots, 1)^T$ : le nombre 1 est valeur propre de $A^T$. Or $A$ et $A^T$ ont le même polynôme caractéristique ($\det M = \det M^T$), donc les mêmes valeurs propres : 1 est aussi valeur propre de $A$.`,
    steps: [
      {
        title: "Comprendre l'énoncé (et ce que l'on démontre vraiment)",
        content: String.raw`📖 **Rappel — matrice de Markov (slide 227) :** une **matrice de transition** (ou **matrice de Markov**) est une matrice dont les éléments sont non négatifs et dont la somme des éléments de **chaque colonne** vaut 1. Lecture : $a_{ij}$ est la probabilité de passer vers l'état $i$ quand on est dans l'état $j$ ; la colonne $j$ liste toutes les destinations possibles depuis $j$, d'où la somme 1.

Le théorème a deux parties : (a) toutes les valeurs propres sont $\leq 1$ ; (b) il existe au moins une valeur propre **égale** à 1. Le cours — et donc l'examen — ne démontre que la partie (b) : l'existence de la valeur propre 1.

Enjeu économique : la valeur propre 1 correspond à un vecteur $X \neq O$ tel que $AX = X$, c'est-à-dire un **état d'équilibre** du système (des parts de marché stables, par exemple). Le théorème garantit qu'un tel équilibre existe toujours.`,
      },
      {
        title: "Pourquoi passer par la transposée ?",
        content: String.raw`L'hypothèse porte sur les **colonnes** de $A$ : chaque colonne somme à 1. Le problème, c'est qu'un produit matrice-vecteur calcule des sommes le long des **lignes** : la composante $i$ de $AX$ vaut $\sum_{j=1}^{n} a_{ij} x_j$, une somme sur la ligne $i$.

En particulier, multiplier une matrice par le vecteur $\mathbf{1} = (1, \dots, 1)^T$ rempli de 1 calcule exactement ses **sommes de lignes**.

📖 **Rappel :** la transposée échange lignes et colonnes — l'élément d'indice $(i, j)$ de $A^T$ est le $a_{ji}$ de $A$.

Pour exploiter une hypothèse sur les colonnes, il suffit donc de transposer : « chaque colonne de $A$ somme à 1 » devient « chaque **ligne** de $A^T$ somme à 1 » — et ça, le produit $A^T \mathbf{1}$ sait le lire. Voilà tout le sens du détour par $A^T$.`,
      },
      {
        title: "Le calcul : la transposée fixe le vecteur rempli de 1",
        content: String.raw`Écrivons le produit en entier ($A^T$ a pour lignes les colonnes de $A$) :

$$A^T \mathbf{1} = \begin{pmatrix} a_{11} & \dots & a_{n1} \\ \vdots & \ddots & \vdots \\ a_{1n} & \dots & a_{nn} \end{pmatrix} \begin{pmatrix} 1 \\ \vdots \\ 1 \end{pmatrix} = \begin{pmatrix} a_{11} + \dots + a_{n1} \\ \vdots \\ a_{1n} + \dots + a_{nn} \end{pmatrix} = \begin{pmatrix} 1 \\ \vdots \\ 1 \end{pmatrix} = 1 \cdot \mathbf{1}$$

La composante $j$ du produit vaut $a_{1j} + \dots + a_{nj}$ : c'est la somme des éléments de la **colonne** $j$ de $A$, qui vaut 1 par hypothèse.

Dernier détail à ne pas oublier : $\mathbf{1} \neq O$, c'est donc un vecteur propre **légitime**. On a prouvé : 1 est valeur propre de $A^T$, avec $\mathbf{1}$ comme vecteur propre. Attention : on n'a encore rien dit de $A$ elle-même !`,
      },
      {
        title: "Le pont : A et sa transposée ont les mêmes valeurs propres",
        content: String.raw`📖 **Rappels :** les valeurs propres de $M$ sont les racines du **polynôme caractéristique** $\det(M - \lambda I)$ ; et une matrice et sa transposée ont le même déterminant : $\det M = \det M^T$ (chapitre 3).

Il reste un petit calcul de transposée : $(A - \lambda I)^T = A^T - (\lambda I)^T = A^T - \lambda I$ (la transposée d'une somme est la somme des transposées, et $I^T = I$). Donc, pour tout $\lambda$ :

$$\det(A - \lambda I) = \det\big( (A - \lambda I)^T \big) = \det(A^T - \lambda I)$$

Les polynômes caractéristiques de $A$ et de $A^T$ sont **identiques**, donc ils ont les mêmes racines : $A$ et $A^T$ ont exactement les **mêmes valeurs propres**. (Mais pas les mêmes vecteurs propres en général !)`,
      },
      {
        title: "Conclusion et lecture économique",
        content: String.raw`On assemble les deux étapes : 1 est valeur propre de $A^T$ (étape 3), et $A$ a les mêmes valeurs propres que $A^T$ (étape 4). Donc 1 est valeur propre de $A$.

Conclusion notée au cours : il existe toujours (au moins) un état d'équilibre ! Concrètement, il existe $X \neq O$ tel que $AX = X$ ; en le normalisant pour que ses composantes somment à 1, on obtient le vecteur d'équilibre du modèle (celui que tu calcules dans les exercices 6.7 et 6.8).

Garde en tête la structure logique en trois temps — **transposer** l'hypothèse (colonnes de $A$ vers lignes de $A^T$), **exhiber** le vecteur propre $\mathbf{1}$ pour $A^T$, **transférer** à $A$ via le polynôme caractéristique. C'est court, mais chaque temps doit apparaître sur la copie.`,
      },
      {
        title: "Vois-le sur le marché des boissons (2 × 2)",
        content: String.raw`Prenons la matrice du cours $A = \begin{pmatrix} 0{,}7 & 0{,}2 \\ 0{,}3 & 0{,}8 \end{pmatrix}$ : les colonnes somment à $0{,}7 + 0{,}3 = 1$ et $0{,}2 + 0{,}8 = 1$, c'est bien une matrice de Markov.

Transposée : $A^T = \begin{pmatrix} 0{,}7 & 0{,}3 \\ 0{,}2 & 0{,}8 \end{pmatrix}$, et

$$A^T \begin{pmatrix} 1 \\ 1 \end{pmatrix} = \begin{pmatrix} 0{,}7 + 0{,}3 \\ 0{,}2 + 0{,}8 \end{pmatrix} = \begin{pmatrix} 1 \\ 1 \end{pmatrix}$$

le vecteur $\mathbf{1}$ est bien vecteur propre de $A^T$ pour la valeur propre 1.

En revanche, $A \, (1, 1)^T = (0{,}9 \; ; \; 1{,}1)^T \neq 1 \cdot (1, 1)^T$ : $\mathbf{1}$ n'est **pas** vecteur propre de $A$. La valeur propre 1 de $A$ a son propre vecteur propre, $(2, 3)^T$ — vérifie : $A \, (2, 3)^T = (1{,}4 + 0{,}6 \; ; \; 0{,}6 + 2{,}4)^T = (2, 3)^T$ — qui, normalisé, donne l'équilibre $(0{,}4 \; ; \; 0{,}6)^T$ : 40 % du marché pour la marque $a$ à long terme.`,
      },
    ],
    examProof: String.raw`**Théorème.** Si $A$ est une matrice de Markov, alors ses valeurs propres $\lambda_1, \dots, \lambda_n$ sont toutes $\leq 1$. En particulier, il y a au moins une valeur propre qui est égale à 1.

**Démonstration** (de la seconde partie, seule démontrée au cours : l'existence de la valeur propre 1).

Soit $A = (a_{ij})$ une matrice de Markov de taille $n$ : ses éléments sont non négatifs et la somme des éléments de chaque colonne vaut 1,

$$a_{1j} + a_{2j} + \dots + a_{nj} = 1 \qquad \text{pour tout } j = 1, \dots, n \qquad (1)$$

**Étape 1.** Montrons que 1 est valeur propre de $A^T$. La transposition échange lignes et colonnes : par (1), la somme des éléments de chaque ligne de $A^T$ vaut 1. Posons $\mathbf{1} = (1, 1, \dots, 1)^T \neq O$. En effectuant le produit ($A^T$ a pour élément d'indice $(i, j)$ le nombre $a_{ji}$) :

$$A^T \mathbf{1} = \begin{pmatrix} a_{11} & \dots & a_{n1} \\ \vdots & \ddots & \vdots \\ a_{1n} & \dots & a_{nn} \end{pmatrix} \begin{pmatrix} 1 \\ \vdots \\ 1 \end{pmatrix} = \begin{pmatrix} a_{11} + \dots + a_{n1} \\ \vdots \\ a_{1n} + \dots + a_{nn} \end{pmatrix} = \begin{pmatrix} 1 \\ \vdots \\ 1 \end{pmatrix} = 1 \cdot \mathbf{1}$$

car chaque composante du produit est la somme des éléments d'une colonne de $A$, égale à 1 par (1). Comme $\mathbf{1} \neq O$, le vecteur $\mathbf{1}$ est un vecteur propre de $A^T$ relatif à la valeur propre 1.

**Étape 2.** Montrons que $A$ et $A^T$ ont les mêmes valeurs propres. Une matrice et sa transposée ont le même déterminant ($\det M = \det M^T$), et $(A - \lambda I)^T = A^T - \lambda I^T = A^T - \lambda I$ puisque $I^T = I$. Donc, pour tout $\lambda$ :

$$\det(A - \lambda I) = \det\big( (A - \lambda I)^T \big) = \det(A^T - \lambda I)$$

Les matrices $A$ et $A^T$ ont donc le même polynôme caractéristique, et par conséquent les mêmes valeurs propres.

**Étape 3.** Conclusion : 1 est valeur propre de $A^T$ (étape 1) et $A$ possède les mêmes valeurs propres que $A^T$ (étape 2). Donc 1 est valeur propre de $A$ : toute matrice de Markov admet au moins une valeur propre égale à 1. $\blacksquare$`,
    pitfalls: [
      String.raw`Attention au sens : $\mathbf{1} = (1, \dots, 1)^T$ est vecteur propre de $A^T$, **pas de $A$** en général. $A$ possède bien la valeur propre 1, mais avec un autre vecteur propre — celui que l'on calcule en pratique pour trouver l'état d'équilibre.`,
      String.raw`Sauter l'étape « $A$ et $A^T$ ont les mêmes valeurs propres » : sans elle, on a seulement prouvé quelque chose sur $A^T$, pas sur $A$ — la démonstration est incomplète.`,
      String.raw`Ne pas justifier le passage $(A - \lambda I)^T = A^T - \lambda I$ (transposée d'une somme, et $I^T = I$) : c'est lui qui autorise l'égalité des polynômes caractéristiques.`,
      String.raw`Oublier de préciser ce que l'on démontre (le cours ne prouve que l'existence de la valeur propre 1, pas la partie « toutes $\leq 1$ »), ou oublier de mentionner $\mathbf{1} \neq O$ — sans quoi $\mathbf{1}$ n'est pas un vecteur propre légitime.`,
    ],
  },
];
