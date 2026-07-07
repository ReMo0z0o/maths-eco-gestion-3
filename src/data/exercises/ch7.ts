import type { Exercise } from "./types";

export const exercises: Exercise[] = [
  {
    id: "7.1",
    chapter: 7,
    title: "Forme diagonale et maximum sous contrainte",
    examType: true,
    statement: String.raw`Soit $Q(X) = 3x_1^2 + 2x_1x_2 + 3x_2^2$.`,
    method: String.raw`Commence par identifier la matrice symétrique $A$ telle que $Q(X) = X^T A X$ : les coefficients des carrés vont sur la diagonale, et chaque coefficient croisé est partagé en deux moitiés symétriques. Ensuite, diagonalise $A$ : les valeurs propres donnent directement la forme diagonale, et la plus grande valeur propre donne le maximum de $Q$ sur les vecteurs de norme 1.`,
    theoryRefs: ["Matrice symétrique associée", "Forme diagonale", "Optimisation sous contrainte"],
    parts: [
      {
        label: "a",
        statement: String.raw`Écrivez $Q$ sous forme diagonale.`,
        steps: [
          {
            title: "Identifier la matrice symétrique associée",
            content: String.raw`📖 **Rappel du cours :** toute forme quadratique s'écrit $Q(X) = X^T A X$ où $A$ est une matrice **symétrique**. Le coefficient de $x_i^2$ se place en position $(i,i)$, et le coefficient du terme croisé $x_i x_j$ se répartit en deux moitiés égales en positions $(i,j)$ et $(j,i)$.

Ici, le coefficient de $x_1^2$ est 3, celui de $x_2^2$ est 3, et le coefficient croisé $2x_1x_2$ se partage en $1 + 1$ :

$$A = \begin{pmatrix} 3 & 1 \\ 1 & 3 \end{pmatrix}$$

Tu peux vérifier : $X^T A X = 3x_1^2 + x_1x_2 + x_2x_1 + 3x_2^2 = 3x_1^2 + 2x_1x_2 + 3x_2^2 = Q(X)$ ✓`,
          },
          {
            title: "Calculer les valeurs propres de A",
            content: String.raw`📖 **Rappel du cours :** pour écrire $Q$ sous forme diagonale, on diagonalise $A$ par une matrice orthogonale $S$ : les valeurs propres de $A$ deviennent les coefficients des nouveaux carrés.

On résout $\det(A - \lambda I) = 0$ :

$$\det\begin{pmatrix} 3-\lambda & 1 \\ 1 & 3-\lambda \end{pmatrix} = (3-\lambda)^2 - 1 = \lambda^2 - 6\lambda + 8 = (\lambda - 2)(\lambda - 4)$$

Les valeurs propres sont donc $\lambda_1 = 2$ et $\lambda_2 = 4$.`,
          },
          {
            title: "Trouver les vecteurs propres orthonormés",
            content: String.raw`**Pour $\lambda_1 = 2$ :** on résout $(A - 2I)X = 0$, c'est-à-dire $\begin{pmatrix} 1 & 1 \\ 1 & 1 \end{pmatrix}X = 0$, donc $x_1 + x_2 = 0$. Un vecteur propre est $(1, -1)^T$, et après normalisation (on divise par sa norme $\sqrt{2}$) :

$$v_1 = \frac{1}{\sqrt{2}}\begin{pmatrix} 1 \\ -1 \end{pmatrix}$$

**Pour $\lambda_2 = 4$ :** on résout $(A - 4I)X = 0$, c'est-à-dire $-x_1 + x_2 = 0$. On obtient :

$$v_2 = \frac{1}{\sqrt{2}}\begin{pmatrix} 1 \\ 1 \end{pmatrix}$$

Remarque que $v_1 \bullet v_2 = \frac{1}{2}(1 - 1) = 0$ : les deux vecteurs sont bien orthogonaux, comme toujours pour des valeurs propres distinctes d'une matrice symétrique.`,
          },
          {
            title: "Écrire la forme diagonale",
            content: String.raw`On pose la matrice orthogonale $S = \frac{1}{\sqrt{2}}\begin{pmatrix} 1 & 1 \\ -1 & 1 \end{pmatrix}$ et le changement de variables $Y = S^T X$, c'est-à-dire :

$$y_1 = \frac{x_1 - x_2}{\sqrt{2}}, \qquad y_2 = \frac{x_1 + x_2}{\sqrt{2}}$$

📖 **Rappel du cours :** dans les nouvelles variables, la forme quadratique devient $Q = Y^T (S^T A S) Y$ avec $S^T A S = \operatorname{diag}(\lambda_1, \lambda_2)$. Donc :

$$Q = 2y_1^2 + 4y_2^2$$`,
          },
          {
            title: "Vérifier en revenant aux variables de départ",
            content: String.raw`En remplaçant $y_1$ et $y_2$ par leurs expressions, la forme diagonale s'écrit aussi directement en fonction de $x_1$ et $x_2$ :

$$2y_1^2 + 4y_2^2 = 2 \cdot \frac{(x_1 - x_2)^2}{2} + 4 \cdot \frac{(x_1 + x_2)^2}{2} = (x_1 - x_2)^2 + 2(x_1 + x_2)^2$$

C'est exactement la même forme diagonale, écrite avec les variables d'origine (le facteur $\frac{1}{\sqrt{2}}$ de la normalisation a été absorbé dans les coefficients).

**Vérification :** développons.

$$(x_1 - x_2)^2 + 2(x_1 + x_2)^2 = x_1^2 - 2x_1x_2 + x_2^2 + 2x_1^2 + 4x_1x_2 + 2x_2^2 = 3x_1^2 + 2x_1x_2 + 3x_2^2 = Q(X) \checkmark$$`,
          },
        ],
        answer: String.raw`$Q = 2y_1^2 + 4y_2^2$ avec $y_1 = \frac{x_1 - x_2}{\sqrt{2}}$ et $y_2 = \frac{x_1 + x_2}{\sqrt{2}}$, ce qui s'écrit aussi $Q = (x_1 - x_2)^2 + 2(x_1 + x_2)^2$.`,
      },
      {
        label: "b",
        statement: String.raw`Déterminez la valeur maximale de $Q$ sous la contrainte $\lVert X \rVert = 1$ et un vecteur propre en lequel ce maximum est atteint.`,
        steps: [
          {
            title: "Rappeler le lien entre extrema et valeurs propres",
            content: String.raw`📖 **Rappel du cours :** sur l'ensemble des vecteurs de norme 1, une forme quadratique $Q(X) = X^T A X$ atteint

- son **maximum** en la plus grande valeur propre $\lambda_{\max}$ de $A$, atteint en un vecteur propre unitaire associé ;
- son **minimum** en la plus petite valeur propre $\lambda_{\min}$, atteint en un vecteur propre unitaire associé.

Intuition : sous forme diagonale, $Q = 2y_1^2 + 4y_2^2$ avec $y_1^2 + y_2^2 = 1$ (le changement de variables orthogonal conserve la norme). Pour maximiser, on met tout le « poids » sur le coefficient le plus grand : $y_1 = 0$, $y_2 = \pm 1$.`,
          },
          {
            title: "Identifier le maximum et le vecteur propre",
            content: String.raw`D'après la question a), les valeurs propres de $A$ sont 2 et 4. Donc :

$$\max_{\lVert X \rVert = 1} Q(X) = \lambda_{\max} = 4$$

atteint en le vecteur propre unitaire associé à $\lambda = 4$ :

$$X = \frac{1}{\sqrt{2}}\begin{pmatrix} 1 \\ 1 \end{pmatrix}$$

(son opposé convient aussi).`,
          },
          {
            title: "Vérifier",
            content: String.raw`**Vérification :** on réinjecte $x_1 = x_2 = \frac{1}{\sqrt{2}}$ dans $Q$ :

$$Q = 3 \cdot \frac{1}{2} + 2 \cdot \frac{1}{2} + 3 \cdot \frac{1}{2} = \frac{3}{2} + 1 + \frac{3}{2} = 4 \checkmark$$

Et la norme vaut bien $\sqrt{\frac{1}{2} + \frac{1}{2}} = 1$ ✓`,
          },
        ],
        answer: String.raw`Valeur maximale $= \lambda_2 = 4$, atteinte au vecteur propre $\frac{1}{\sqrt{2}}(1, 1)^T$.`,
      },
    ],
  },
  {
    id: "7.2",
    chapter: 7,
    title: "Diagonalisation orthogonale, genre et minimum sous contrainte",
    examType: true,
    statement: String.raw`Soit $A = \begin{pmatrix} -2 & 0 & 1 \\ 0 & -1 & 0 \\ 1 & 0 & -2 \end{pmatrix}$.`,
    method: String.raw`La matrice $A$ est symétrique : elle est donc diagonalisable par une matrice orthogonale $S$ dont les colonnes forment une base orthonormée de vecteurs propres. Calcule d'abord les valeurs propres via le polynôme caractéristique, puis les vecteurs propres, que tu normalises. Le genre se lit sur les signes des valeurs propres, et le minimum sous $\lVert X \rVert = 1$ est la plus petite valeur propre.`,
    theoryRefs: [
      "Matrice symétrique associée",
      "Forme diagonale",
      "Genre",
      "Optimisation sous contrainte",
    ],
    parts: [
      {
        label: "a",
        statement: String.raw`Diagonaliser $A$ par une matrice orthogonale.`,
        steps: [
          {
            title: "Rappeler la méthode de diagonalisation orthogonale",
            content: String.raw`📖 **Rappel du cours :** toute matrice symétrique réelle est diagonalisable par une matrice **orthogonale** $S$ (c'est-à-dire $S^T S = I$, donc $S^{-1} = S^T$) :

$$S^T A S = D = \operatorname{diag}(\lambda_1, \lambda_2, \lambda_3)$$

Les colonnes de $S$ sont des vecteurs propres de $A$, **orthonormés** : de norme 1 et deux à deux orthogonaux. Les vecteurs propres associés à des valeurs propres distinctes sont automatiquement orthogonaux ; il ne reste qu'à normaliser (et, au besoin, à choisir des vecteurs orthogonaux à l'intérieur d'un même sous-vectoriel propre).`,
          },
          {
            title: "Calculer le polynôme caractéristique",
            content: String.raw`On développe $\det(A - \lambda I)$ selon la deuxième ligne, qui ne contient qu'un seul élément non nul :

$$\det\begin{pmatrix} -2-\lambda & 0 & 1 \\ 0 & -1-\lambda & 0 \\ 1 & 0 & -2-\lambda \end{pmatrix} = (-1-\lambda)\det\begin{pmatrix} -2-\lambda & 1 \\ 1 & -2-\lambda \end{pmatrix}$$

Le déterminant $2 \times 2$ vaut $(2+\lambda)^2 - 1 = \lambda^2 + 4\lambda + 3 = (\lambda + 1)(\lambda + 3)$. Donc :

$$\det(A - \lambda I) = -(\lambda + 1)^2(\lambda + 3)$$

Les valeurs propres sont $\lambda = -1$ (**double**) et $\lambda = -3$.`,
          },
          {
            title: "Chercher les vecteurs propres pour λ = −1",
            content: String.raw`On résout $(A + I)X = 0$ :

$$\begin{pmatrix} -1 & 0 & 1 \\ 0 & 0 & 0 \\ 1 & 0 & -1 \end{pmatrix}\begin{pmatrix} x \\ y \\ z \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix}$$

La seule contrainte est $x = z$ ($y$ est libre) : le sous-vectoriel propre est de dimension 2, engendré par

$$u_1 = \begin{pmatrix} 0 \\ 1 \\ 0 \end{pmatrix} \quad \text{et} \quad u_2 = \begin{pmatrix} 1 \\ 0 \\ 1 \end{pmatrix}$$

Bonne nouvelle : $u_1 \bullet u_2 = 0$, ils sont déjà orthogonaux (pas besoin du procédé de Gram–Schmidt). On les normalise : $u_1$ a déjà une norme 1, et $\lVert u_2 \rVert = \sqrt{2}$, donc on prend $v_1 = (0, 1, 0)^T$ et $v_2 = \frac{1}{\sqrt{2}}(1, 0, 1)^T$.`,
          },
          {
            title: "Chercher le vecteur propre pour λ = −3",
            content: String.raw`On résout $(A + 3I)X = 0$ :

$$\begin{pmatrix} 1 & 0 & 1 \\ 0 & 2 & 0 \\ 1 & 0 & 1 \end{pmatrix}\begin{pmatrix} x \\ y \\ z \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix} \quad \Longrightarrow \quad x = -z, \; y = 0$$

Un vecteur propre est $(-1, 0, 1)^T$, de norme $\sqrt{2}$ ; on prend

$$v_3 = \frac{1}{\sqrt{2}}\begin{pmatrix} -1 \\ 0 \\ 1 \end{pmatrix}$$

**Contrôle rapide :** $A v_3 = \frac{1}{\sqrt{2}}(2+1,\; 0,\; -1-2)^T = \frac{1}{\sqrt{2}}(3, 0, -3)^T = -3\,v_3$ ✓`,
          },
          {
            title: "Assembler S et vérifier",
            content: String.raw`On place les vecteurs propres orthonormés en colonnes (dans l'ordre des valeurs propres $-1, -1, -3$) :

$$S = \frac{1}{\sqrt{2}}\begin{pmatrix} 0 & 1 & -1 \\ \sqrt{2} & 0 & 0 \\ 0 & 1 & 1 \end{pmatrix}, \qquad S^T A S = \begin{pmatrix} -1 & 0 & 0 \\ 0 & -1 & 0 \\ 0 & 0 & -3 \end{pmatrix}$$

**Vérification :** les colonnes sont de norme 1 et deux à deux orthogonales, donc $S^T S = I$. Par exemple, colonne 2 $\bullet$ colonne 3 $= \frac{1}{2}(-1 + 0 + 1) = 0$ ✓`,
          },
        ],
        answer: String.raw`$S = \frac{1}{\sqrt{2}}\begin{pmatrix} 0 & 1 & -1 \\ \sqrt{2} & 0 & 0 \\ 0 & 1 & 1 \end{pmatrix}$ et $S^T A S = \operatorname{diag}(-1, -1, -3)$.`,
      },
      {
        label: "b",
        statement: String.raw`Donnez explicitement la forme quadratique associée à la base orthonormée et déterminez son genre.`,
        steps: [
          {
            title: "Écrire la forme quadratique de départ",
            content: String.raw`La forme quadratique associée à $A$ dans la base canonique est $Q(X) = X^T A X$. En développant avec $X = (x, y, z)^T$ :

$$Q(X) = -2x^2 - y^2 - 2z^2 + 2xz$$

(les termes diagonaux donnent les carrés, et l'élément $a_{13} = a_{31} = 1$ donne le terme croisé $2xz$).`,
          },
          {
            title: "Passer à la base orthonormée de vecteurs propres",
            content: String.raw`📖 **Rappel du cours :** dans la base orthonormée des vecteurs propres, avec le changement de variables $Y = S^T X$, la forme quadratique devient diagonale : $Q = \lambda_1 y_1^2 + \lambda_2 y_2^2 + \lambda_3 y_3^2$.

Avec les valeurs propres trouvées en a) :

$$Q = -y_1^2 - y_2^2 - 3y_3^2$$

où $y_1 = y$, $y_2 = \frac{x + z}{\sqrt{2}}$, $y_3 = \frac{-x + z}{\sqrt{2}}$ (chaque $y_i$ est le produit scalaire $v_i \bullet X$).

**Vérification :** en variables d'origine, $-y_1^2 - y_2^2 - 3y_3^2 = -y^2 - \frac{1}{2}(x+z)^2 - \frac{3}{2}(-x+z)^2 = -2x^2 + 2xz - 2z^2 - y^2 = Q(X)$ ✓`,
          },
          {
            title: "Déterminer le genre",
            content: String.raw`📖 **Rappel du cours :** le genre d'une forme quadratique se lit sur les signes des valeurs propres de sa matrice symétrique :

- toutes $> 0$ : **définie positive** ;
- toutes $\geq 0$ avec au moins un zéro : **semi-définie positive** ;
- toutes $< 0$ : **définie négative** ;
- toutes $\leq 0$ avec au moins un zéro : **semi-définie négative** ;
- des signes des deux côtés : **indéfinie**.

Ici, les valeurs propres sont $-1, -1, -3$ : toutes strictement négatives. La forme quadratique est donc **définie négative** ($Q(X) < 0$ pour tout $X \neq 0$).`,
          },
        ],
        answer: String.raw`$Q = -y_1^2 - y_2^2 - 3y_3^2$, soit en variables d'origine $Q(X) = -2x^2 - y^2 - 2z^2 + 2xz$. La forme est **définie négative**.`,
      },
      {
        label: "c",
        statement: String.raw`Déterminez la valeur minimale de $Q(X) = X^T A X$ sous la contrainte $\lVert X \rVert = 1$ et un vecteur propre en lequel ce minimum est atteint.`,
        steps: [
          {
            title: "Rappeler le résultat d'optimisation sous contrainte",
            content: String.raw`📖 **Rappel du cours :** sous la contrainte $\lVert X \rVert = 1$, le minimum de $Q(X) = X^T A X$ vaut la **plus petite valeur propre** $\lambda_{\min}$ de $A$, et il est atteint en un vecteur propre unitaire associé.

En effet, sous forme diagonale $Q = -y_1^2 - y_2^2 - 3y_3^2$ avec $y_1^2 + y_2^2 + y_3^2 = 1$ : pour rendre $Q$ le plus petit possible, on met tout le poids sur le coefficient le plus négatif, c'est-à-dire $y_3 = \pm 1$.`,
          },
          {
            title: "Conclure et vérifier",
            content: String.raw`Les valeurs propres sont $-1$, $-1$ et $-3$, donc :

$$\min_{\lVert X \rVert = 1} Q(X) = -3$$

atteint au vecteur propre unitaire $X = \frac{1}{\sqrt{2}}(-1, 0, 1)^T$ (ou son opposé).

**Vérification :** avec $x = -\frac{1}{\sqrt{2}}$, $y = 0$, $z = \frac{1}{\sqrt{2}}$ :

$$Q = -2 \cdot \frac{1}{2} - 0 - 2 \cdot \frac{1}{2} + 2 \cdot \left(-\frac{1}{2}\right) = -1 - 1 - 1 = -3 \checkmark$$`,
          },
        ],
        answer: String.raw`Valeur minimale $= \lambda_{\min} = -3$, atteinte au vecteur propre $\frac{1}{\sqrt{2}}(-1, 0, 1)^T$.`,
      },
    ],
  },
  {
    id: "7.3",
    chapter: 7,
    title: "Genre de formes quadratiques",
    examType: false,
    statement: String.raw`Déterminez le genre des formes quadratiques ci-dessous.`,
    method: String.raw`Pour chaque forme, écris d'abord la matrice symétrique associée (attention : les coefficients croisés se partagent en deux). Ensuite calcule ses valeurs propres : leur signe détermine complètement le genre. Si 0 apparaît parmi les valeurs propres, la forme n'est que « semi-définie ».`,
    theoryRefs: ["Matrice symétrique associée", "Genre"],
    parts: [
      {
        label: "a",
        statement: String.raw`$Q(x, y) = 2x^2 - 4xy + 5y^2$.`,
        steps: [
          {
            title: "Poser la matrice symétrique associée",
            content: String.raw`📖 **Rappel du cours :** dans $Q(X) = X^T A X$, le coefficient de $x^2$ va en position $(1,1)$, celui de $y^2$ en $(2,2)$, et le coefficient croisé $-4$ de $xy$ se partage en $-2$ et $-2$ :

$$A = \begin{pmatrix} 2 & -2 \\ -2 & 5 \end{pmatrix}$$`,
          },
          {
            title: "Calculer les valeurs propres",
            content: String.raw`$$\det(A - \lambda I) = (2-\lambda)(5-\lambda) - 4 = \lambda^2 - 7\lambda + 6 = (\lambda - 1)(\lambda - 6)$$

Les valeurs propres sont $\lambda_1 = 1$ et $\lambda_2 = 6$.`,
          },
          {
            title: "Conclure sur le genre",
            content: String.raw`Les deux valeurs propres sont **strictement positives**, donc la forme quadratique est **définie positive** : $Q(X) > 0$ pour tout $X \neq 0$.

**Vérification :** on peut confirmer par une mise sous forme de carrés : $Q = 2(x - y)^2 + 3y^2$, qui est bien $> 0$ dès que $(x, y) \neq (0, 0)$ ✓`,
          },
        ],
        answer: String.raw`**Définie positive** (valeurs propres $1$ et $6$, toutes deux $> 0$).`,
      },
      {
        label: "b",
        statement: String.raw`$Q(x, y, z) = -x^2 + 2xy + 2xz - 3y^2 - 2yz - z^2$.`,
        steps: [
          {
            title: "Poser la matrice symétrique associée",
            content: String.raw`Les coefficients des carrés vont sur la diagonale : $-1$, $-3$, $-1$. Chaque coefficient croisé se partage en deux : $2xy$ donne $1$ en positions $(1,2)$ et $(2,1)$ ; $2xz$ donne $1$ en $(1,3)$ et $(3,1)$ ; $-2yz$ donne $-1$ en $(2,3)$ et $(3,2)$ :

$$A = \begin{pmatrix} -1 & 1 & 1 \\ 1 & -3 & -1 \\ 1 & -1 & -1 \end{pmatrix}$$`,
          },
          {
            title: "Calculer le polynôme caractéristique",
            content: String.raw`On développe $\det(A - \lambda I)$ selon la première ligne :

$$\det\begin{pmatrix} -1-\lambda & 1 & 1 \\ 1 & -3-\lambda & -1 \\ 1 & -1 & -1-\lambda \end{pmatrix}$$

- premier cofacteur : $(-1-\lambda)\left[(-3-\lambda)(-1-\lambda) - 1\right] = (-1-\lambda)(\lambda^2 + 4\lambda + 2)$
- deuxième : $-1 \cdot \left[1 \cdot (-1-\lambda) - (-1) \cdot 1\right] = -1 \cdot (-\lambda) = \lambda$
- troisième : $1 \cdot \left[1 \cdot (-1) - (-3-\lambda) \cdot 1\right] = 2 + \lambda$

En sommant :

$$\det(A - \lambda I) = -(1+\lambda)(\lambda^2 + 4\lambda + 2) + \lambda + 2 + \lambda = -\lambda^3 - 5\lambda^2 - 4\lambda$$`,
          },
          {
            title: "Trouver les valeurs propres",
            content: String.raw`On factorise :

$$-\lambda^3 - 5\lambda^2 - 4\lambda = -\lambda(\lambda^2 + 5\lambda + 4) = -\lambda(\lambda + 1)(\lambda + 4)$$

Les valeurs propres sont donc $\lambda = 0$, $\lambda = -1$ et $\lambda = -4$.

Remarque : la présence de la valeur propre 0 était prévisible, car $\det A = 0$ (le déterminant est le produit des valeurs propres).`,
          },
          {
            title: "Conclure sur le genre",
            content: String.raw`📖 **Rappel du cours :** si toutes les valeurs propres sont $\leq 0$ et qu'au moins une vaut 0, la forme est **semi-définie négative** : $Q(X) \leq 0$ pour tout $X$, mais $Q$ s'annule aussi en certains vecteurs non nuls (les vecteurs propres associés à 0).

Ici les valeurs propres sont $0$, $-1$ et $-4$ : toutes $\leq 0$, avec un zéro. La forme quadratique est donc **semi-définie négative** — elle n'est pas définie négative, car $Q$ s'annule sur tout le sous-vectoriel propre associé à $\lambda = 0$.`,
          },
        ],
        answer: String.raw`**Semi-définie négative** (valeurs propres $0$, $-1$ et $-4$ : toutes $\leq 0$, avec la valeur propre $0$).`,
      },
    ],
  },
  {
    id: "7.4",
    chapter: 7,
    title: "Retrouver une forme quadratique à partir de sa forme diagonale",
    examType: false,
    statement: String.raw`Une forme quadratique $Q(x, y, z)$ est transformée en $y_1^2 + y_2^2 + 4y_3^2$ par la matrice

$$S = \frac{1}{\sqrt{6}}\begin{pmatrix} \sqrt{3} & -1 & -\sqrt{2} \\ \sqrt{3} & 1 & \sqrt{2} \\ 0 & -2 & \sqrt{2} \end{pmatrix}.$$`,
    method: String.raw`C'est le problème habituel « à l'envers » : on connaît la forme diagonale $S^T A S = D = \operatorname{diag}(1, 1, 4)$ et on cherche $A$. Comme $S$ est orthogonale ($S^{-1} = S^T$), on isole $A = S D S^T$ et on calcule le produit. Pour la question b), on « corrige » chaque colonne de $S$ en la divisant par $\sqrt{\lambda_i}$ pour ramener tous les coefficients à 1.`,
    theoryRefs: ["Forme diagonale", "Matrice symétrique associée"],
    parts: [
      {
        label: "a",
        statement: String.raw`Recherchez $Q(x, y, z)$ et la matrice symétrique $A$ associée.`,
        steps: [
          {
            title: "Traduire l'énoncé en une équation matricielle",
            content: String.raw`📖 **Rappel du cours :** dire que $S$ transforme $Q$ en $y_1^2 + y_2^2 + 4y_3^2$ signifie qu'avec le changement de variables $Y = S^T X$, on a $Q = Y^T D Y$ où

$$D = S^T A S = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 4 \end{pmatrix}$$

Les coefficients $1, 1, 4$ de la forme diagonale sont donc les valeurs propres de $A$, et les colonnes de $S$ sont les vecteurs propres orthonormés associés.

**Contrôle préalable :** $S$ est bien orthogonale — chaque colonne est de norme 1 (par exemple la première : $\frac{3 + 3 + 0}{6} = 1$) et les colonnes sont deux à deux orthogonales (par exemple colonnes 1 et 2 : $\frac{-\sqrt{3} + \sqrt{3} + 0}{6} = 0$) ✓`,
          },
          {
            title: "Isoler A",
            content: String.raw`Comme $S$ est orthogonale, $S^{-1} = S^T$. On multiplie $S^T A S = D$ par $S$ à gauche et par $S^T$ à droite :

$$A = S\,D\,S^T$$

C'est la formule clé : elle « reconstruit » la matrice symétrique à partir de ses valeurs propres et de ses vecteurs propres.`,
          },
          {
            title: "Calculer le produit S D puis A",
            content: String.raw`Multiplier $S$ par $D$ à droite revient à multiplier chaque **colonne** de $S$ par la valeur propre correspondante ($1$, $1$, $4$) :

$$S D = \frac{1}{\sqrt{6}}\begin{pmatrix} \sqrt{3} & -1 & -4\sqrt{2} \\ \sqrt{3} & 1 & 4\sqrt{2} \\ 0 & -2 & 4\sqrt{2} \end{pmatrix}$$

Puis on multiplie par $S^T$ (le facteur $\frac{1}{\sqrt{6}}$ apparaît deux fois, donc $\frac{1}{6}$ au total). Par exemple, l'élément $(1,1)$ vaut $\frac{1}{6}(\sqrt{3}\cdot\sqrt{3} + (-1)(-1) + (-4\sqrt{2})(-\sqrt{2})) = \frac{3 + 1 + 8}{6} = 2$, et l'élément $(1,2)$ vaut $\frac{1}{6}(3 - 1 - 8) = -1$. En complétant tous les éléments :

$$A = \frac{1}{6}\begin{pmatrix} 12 & -6 & -6 \\ -6 & 12 & 6 \\ -6 & 6 & 12 \end{pmatrix} = \begin{pmatrix} 2 & -1 & -1 \\ -1 & 2 & 1 \\ -1 & 1 & 2 \end{pmatrix}$$

Remarque : $A$ est bien symétrique, comme il se doit ✓`,
          },
          {
            title: "Écrire la forme quadratique",
            content: String.raw`De $Q(X) = X^T A X$ avec $X = (x, y, z)^T$ : les éléments diagonaux donnent les carrés, et chaque élément hors diagonale compte deux fois pour le terme croisé :

$$Q(x, y, z) = 2x^2 + 2y^2 + 2z^2 - 2xy - 2xz + 2yz$$

**Vérification :** la trace de $A$ vaut $2 + 2 + 2 = 6$, égale à la somme des valeurs propres $1 + 1 + 4 = 6$ ✓ Et $\det A = 4$, égal au produit $1 \cdot 1 \cdot 4$ ✓`,
          },
        ],
        answer: String.raw`$Q(x, y, z) = 2x^2 + 2y^2 + 2z^2 - 2xy - 2xz + 2yz$, avec $A = \begin{pmatrix} 2 & -1 & -1 \\ -1 & 2 & 1 \\ -1 & 1 & 2 \end{pmatrix}$.`,
      },
      {
        label: "b",
        statement: String.raw`Trouvez une matrice $P$ telle que $P^T A P = I$.`,
        steps: [
          {
            title: "Comprendre l'idée : normaliser les coefficients",
            content: String.raw`On a déjà $S^T A S = \operatorname{diag}(1, 1, 4)$. Il reste à transformer les coefficients $1, 1, 4$ en $1, 1, 1$. L'astuce : diviser chaque colonne de $S$ par $\sqrt{\lambda_i}$, c'est-à-dire poser

$$P = S\,C \qquad \text{avec} \qquad C = \begin{pmatrix} \frac{1}{\sqrt{\lambda_1}} & 0 & 0 \\ 0 & \frac{1}{\sqrt{\lambda_2}} & 0 \\ 0 & 0 & \frac{1}{\sqrt{\lambda_3}} \end{pmatrix} = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & \frac{1}{2} \end{pmatrix}$$

puisque $\lambda_1 = \lambda_2 = 1$ et $\lambda_3 = 4$. Ceci n'est possible que parce que toutes les valeurs propres sont strictement positives ($A$ est définie positive).`,
          },
          {
            title: "Démontrer que P convient",
            content: String.raw`On calcule, en utilisant $C^T = C$ (matrice diagonale) :

$$P^T A P = (SC)^T A\, (SC) = C^T\,(S^T A S)\,C = C\,\operatorname{diag}(1, 1, 4)\,C = \operatorname{diag}\left(1,\; 1,\; \frac{1}{2} \cdot 4 \cdot \frac{1}{2}\right) = I \checkmark$$

Chaque coefficient $\lambda_i$ est bien divisé par $(\sqrt{\lambda_i})^2 = \lambda_i$.`,
          },
          {
            title: "Écrire P explicitement",
            content: String.raw`Multiplier $S$ par $C$ à droite divise la troisième colonne par 2 :

$$P = \frac{1}{\sqrt{6}}\begin{pmatrix} \sqrt{3} & -1 & -\frac{\sqrt{2}}{2} \\ \sqrt{3} & 1 & \frac{\sqrt{2}}{2} \\ 0 & -2 & \frac{\sqrt{2}}{2} \end{pmatrix}$$

Remarque : $P$ n'est **plus orthogonale** (sa troisième colonne est de norme $\frac{1}{2}$, pas 1), mais c'est exactement ce qu'il faut pour ramener la forme quadratique à la somme de carrés $y_1^2 + y_2^2 + y_3^2$.`,
          },
        ],
        answer: String.raw`$P = SC$ avec $C = \operatorname{diag}\left(\frac{1}{\sqrt{\lambda_1}}, \frac{1}{\sqrt{\lambda_2}}, \frac{1}{\sqrt{\lambda_3}}\right) = \operatorname{diag}\left(1, 1, \frac{1}{2}\right)$, soit $P = \frac{1}{\sqrt{6}}\begin{pmatrix} \sqrt{3} & -1 & -\frac{\sqrt{2}}{2} \\ \sqrt{3} & 1 & \frac{\sqrt{2}}{2} \\ 0 & -2 & \frac{\sqrt{2}}{2} \end{pmatrix}$. En effet $P^T A P = C\,\operatorname{diag}(1,1,4)\,C = I$.`,
      },
    ],
  },
  {
    id: "7.5",
    chapter: 7,
    title: "Propriétés des matrices définies positives (preuves)",
    examType: false,
    statement: String.raw`Démontrez les affirmations suivantes.`,
    method: String.raw`Dans les trois preuves, la seule arme dont tu as besoin est la **définition** : $A$ est définie positive si $A$ est symétrique et $X^T A X > 0$ pour tout $X \neq 0$ (et semi-définie positive si $X^T A X \geq 0$). Prends un vecteur $X \neq 0$ quelconque et montre que la quantité demandée est strictement positive, en te ramenant à la forme quadratique de $A$.`,
    theoryRefs: ["Genre", "Matrice symétrique associée"],
    parts: [
      {
        label: "a",
        statement: String.raw`Si $A$ est définie positive et si $B$ est semi-définie positive, alors $A + B$ est définie positive.`,
        steps: [
          {
            title: "Écrire ce qu'on sait et ce qu'on veut",
            content: String.raw`📖 **Rappel du cours :** $A$ **définie positive** signifie : $A$ symétrique et $X^T A X > 0$ pour tout $X \neq 0$. $B$ **semi-définie positive** signifie : $B$ symétrique et $X^T B X \geq 0$ pour tout $X$.

On veut montrer que $A + B$ est définie positive, c'est-à-dire : $A + B$ est symétrique et $X^T (A + B) X > 0$ pour tout $X \neq 0$.`,
          },
          {
            title: "Vérifier la symétrie",
            content: String.raw`La somme de deux matrices symétriques est symétrique :

$$(A + B)^T = A^T + B^T = A + B$$`,
          },
          {
            title: "Montrer la positivité stricte",
            content: String.raw`Soit $X \neq 0$ quelconque. La forme quadratique de la somme se décompose (le produit matriciel est distributif) :

$$X^T (A + B) X = X^T A X + X^T B X$$

Or $X^T A X > 0$ (car $A$ est définie positive et $X \neq 0$) et $X^T B X \geq 0$ (car $B$ est semi-définie positive). La somme d'un nombre strictement positif et d'un nombre positif ou nul est strictement positive :

$$X^T (A + B) X > 0$$

Comme $X \neq 0$ était quelconque, $A + B$ est définie positive. $\blacksquare$`,
          },
        ],
        answer: String.raw`Pour tout $X \neq 0$ : $X^T(A+B)X = X^T A X + X^T B X > 0$ car le premier terme est $> 0$ et le second $\geq 0$. Donc $A + B$ est définie positive.`,
      },
      {
        label: "b",
        statement: String.raw`Si $A$ est définie positive, alors $A^{-1}$ existe et est définie positive.`,
        steps: [
          {
            title: "Montrer que A est inversible (par l'absurde)",
            content: String.raw`Supposons que $A$ ne soit **pas** inversible. Alors le système $AX = 0$ admet une solution non triviale : il existe $X \neq 0$ tel que $AX = 0$. Mais alors

$$X^T A X = X^T \cdot 0 = 0$$

ce qui contredit la définition de « définie positive » ($X^T A X > 0$ pour tout $X \neq 0$). Donc $A$ est inversible : $A^{-1}$ existe.

(Autre lecture : les valeurs propres de $A$ sont toutes $> 0$, donc $\det A = \lambda_1 \cdots \lambda_n > 0 \neq 0$.)`,
          },
          {
            title: "Montrer que l'inverse est symétrique",
            content: String.raw`📖 **Rappel du cours :** $(A^{-1})^T = (A^T)^{-1}$ (transposer et inverser commutent).

Comme $A$ est symétrique ($A^T = A$) :

$$(A^{-1})^T = (A^T)^{-1} = A^{-1}$$

Donc $A^{-1}$ est bien symétrique — première condition remplie.`,
          },
          {
            title: "Ramener la forme quadratique de l'inverse à celle de A",
            content: String.raw`Soit $X \neq 0$ quelconque. L'astuce : poser $Y = A^{-1}X$. Comme $A^{-1}$ est inversible et $X \neq 0$, on a $Y \neq 0$. Calculons $Y^T A Y$ :

$$Y^T A Y = (A^{-1}X)^T A\,(A^{-1}X) = X^T (A^{-1})^T \underbrace{A\,A^{-1}}_{= I} X = X^T (A^{-1})^T X = X^T A^{-1} X$$

où l'on a utilisé la symétrie de $A^{-1}$ à la dernière étape. Donc

$$X^T A^{-1} X = Y^T A Y > 0$$

car $A$ est définie positive et $Y \neq 0$. Comme $X \neq 0$ était quelconque, $A^{-1}$ est définie positive. $\blacksquare$

(Autre lecture : les valeurs propres de $A^{-1}$ sont les $\frac{1}{\lambda_i}$, toutes $> 0$ puisque les $\lambda_i > 0$.)`,
          },
        ],
        answer: String.raw`$A$ est inversible (sinon $AX = 0$ avec $X \neq 0$ donnerait $X^T A X = 0$, contradiction), $A^{-1}$ est symétrique, et pour $X \neq 0$ : $X^T A^{-1} X = (A^{-1}X)^T A (A^{-1}X) > 0$. Donc $A^{-1}$ est définie positive.`,
      },
      {
        label: "c",
        statement: String.raw`Si $A$ est définie positive, alors elle le reste si l'on effectue une même permutation de ses lignes et de ses colonnes.`,
        steps: [
          {
            title: "Traduire la permutation en produit matriciel",
            content: String.raw`📖 **Rappel du cours :** permuter les **lignes** de $A$ revient à multiplier à gauche par une matrice de permutation ; permuter les **colonnes** revient à multiplier à droite. Une matrice de permutation $P$ (l'identité dont on a permuté les colonnes) est **orthogonale** : $P^T P = I$.

Effectuer la même permutation sur les lignes et les colonnes de $A$ donne donc la matrice

$$B = P^T A\,P$$

où $P$ est la matrice de la permutation choisie.`,
          },
          {
            title: "Vérifier la symétrie de B",
            content: String.raw`$$B^T = (P^T A P)^T = P^T A^T (P^T)^T = P^T A\,P = B$$

car $A^T = A$. Donc $B$ est symétrique.`,
          },
          {
            title: "Montrer la positivité stricte",
            content: String.raw`Soit $X \neq 0$ quelconque. Posons $Y = PX$. Comme $P$ est inversible (c'est une matrice orthogonale) et $X \neq 0$, on a $Y \neq 0$. Alors :

$$X^T B X = X^T P^T A\,P X = (PX)^T A\,(PX) = Y^T A\,Y > 0$$

car $A$ est définie positive et $Y \neq 0$.

Comme $X \neq 0$ était quelconque, $B = P^T A P$ est définie positive : la matrice permutée reste définie positive. $\blacksquare$

Intuition : permuter lignes et colonnes de la même façon revient simplement à renuméroter les variables $x_1, \dots, x_n$ de la forme quadratique — ce qui ne change évidemment pas le signe de $Q(X)$.`,
          },
        ],
        answer: String.raw`La matrice permutée s'écrit $B = P^T A P$ avec $P$ une matrice de permutation (orthogonale). $B$ est symétrique et, pour $X \neq 0$, $X^T B X = (PX)^T A (PX) > 0$ car $PX \neq 0$. Donc $B$ est définie positive.`,
      },
    ],
  },
];
