import type { Exercise } from "./types";

export const exercises: Exercise[] = [
  // ---------------------------------------------------------------- 6.1
  {
    id: "6.1",
    chapter: 6,
    title: "Paramètres imposant des valeurs propres données",
    examType: false,
    statement: String.raw`Soit $A = \begin{pmatrix} 4 & a & 0 \\ 1 & b & 1 \\ 0 & c & 3 \end{pmatrix}$. Déterminez les valeurs des paramètres réels $a, b, c \in \mathbb{R}$ pour que $A$ possède $3$, $5$ et $2$ comme valeurs propres.`,
    method: String.raw`Un nombre $\lambda$ est valeur propre de $A$ si et seulement s'il annule le polynôme caractéristique $\det(A - \lambda I)$. Calcule donc ce déterminant en fonction de $a$, $b$, $c$, puis exige qu'il s'annule en $\lambda = 3$, $\lambda = 5$ et $\lambda = 2$ : tu obtiens trois équations pour trois inconnues.`,
    theoryRefs: ["Polynôme caractéristique", "Vecteurs propres"],
    parts: [
      {
        label: null,
        steps: [
          {
            title: "Rappeler le lien valeur propre – polynôme caractéristique",
            content: String.raw`📖 **Rappel du cours :** $\lambda$ est une **valeur propre** de $A$ s'il existe un vecteur $X \neq 0$ tel que $AX = \lambda X$, c'est-à-dire $(A - \lambda I)X = 0$. Ce système homogène a une solution non nulle si et seulement si

$$\det(A - \lambda I) = 0.$$

Le polynôme $\det(A - \lambda I)$ s'appelle le **polynôme caractéristique** de $A$.

Ici on nous impose que $3$, $5$ et $2$ soient valeurs propres : chacun de ces trois nombres doit donc annuler le polynôme caractéristique. Cela nous donnera **trois équations** pour les trois inconnues $a$, $b$, $c$.`,
          },
          {
            title: "Calculer le polynôme caractéristique en fonction de a, b, c",
            content: String.raw`On développe $\det(A - \lambda I)$ selon la **première ligne** (elle contient un zéro, ça limite les calculs) :

$$\det(A - \lambda I) = \begin{vmatrix} 4-\lambda & a & 0 \\ 1 & b-\lambda & 1 \\ 0 & c & 3-\lambda \end{vmatrix} = (4-\lambda)\begin{vmatrix} b-\lambda & 1 \\ c & 3-\lambda \end{vmatrix} - a\begin{vmatrix} 1 & 1 \\ 0 & 3-\lambda \end{vmatrix}$$

soit, en calculant les deux déterminants $2 \times 2$ :

$$\det(A - \lambda I) = (4-\lambda)\big[(b-\lambda)(3-\lambda) - c\big] - a(3-\lambda).$$`,
          },
          {
            title: "Imposer que 3 soit valeur propre",
            content: String.raw`On remplace $\lambda = 3$ dans le polynôme caractéristique. Remarque que le facteur $(3-\lambda)$ s'annule, ce qui simplifie tout :

$$\det(A - 3I) = (4-3)\big[(b-3)\cdot 0 - c\big] - a \cdot 0 = -c.$$

Pour que $3$ soit valeur propre, il faut $\det(A - 3I) = 0$, donc

$$c = 0.$$`,
          },
          {
            title: "Imposer que 5 et 2 soient valeurs propres",
            content: String.raw`On procède de la même façon avec $\lambda = 5$ puis $\lambda = 2$, en utilisant déjà $c = 0$.

Pour $\lambda = 5$ :

$$\det(A - 5I) = (4-5)\big[(b-5)(3-5)\big] - a(3-5) = -(-2b+10) + 2a = 2a + 2b - 10.$$

L'équation $\det(A - 5I) = 0$ donne $a + b = 5$.

Pour $\lambda = 2$ :

$$\det(A - 2I) = (4-2)\big[(b-2)(3-2)\big] - a(3-2) = 2b - 4 - a.$$

L'équation $\det(A - 2I) = 0$ donne $2b - a = 4$.`,
          },
          {
            title: "Résoudre le petit système et vérifier",
            content: String.raw`Il reste à résoudre

$$\begin{cases} a + b = 5 \\ -a + 2b = 4 \end{cases}$$

En additionnant les deux équations : $3b = 9$, donc $b = 3$, puis $a = 5 - b = 2$. Avec $c = 0$ trouvé plus haut :

$$a = 2, \qquad b = 3, \qquad c = 0.$$

**Vérification :** avec ces valeurs, $A = \begin{pmatrix} 4 & 2 & 0 \\ 1 & 3 & 1 \\ 0 & 0 & 3 \end{pmatrix}$. En développant selon la troisième ligne :

$$\det(A - \lambda I) = (3-\lambda)\big[(4-\lambda)(3-\lambda) - 2\big] = (3-\lambda)(\lambda^2 - 7\lambda + 10) = (3-\lambda)(\lambda-5)(\lambda-2),$$

dont les racines sont bien $3$, $5$ et $2$ ✓. Autre contrôle rapide : la somme des valeurs propres doit égaler la trace, et $3+5+2 = 10 = 4+3+3$ ✓.`,
          },
        ],
        answer: String.raw`$a = 2$, $b = 3$, $c = 0$. Le polynôme caractéristique devient alors $\det(A - \lambda I) = (3-\lambda)(\lambda-5)(\lambda-2)$.`,
      },
    ],
  },

  // ---------------------------------------------------------------- 6.2
  {
    id: "6.2",
    chapter: 6,
    title: "Diagonalisabilité selon un paramètre",
    examType: true,
    statement: String.raw`Soit $A = \begin{pmatrix} 1 & 0 & 0 \\ a & -2 & 3 \\ 1 & -1 & 2 \end{pmatrix}$. Pour quelle(s) valeur(s) du paramètre $a \in \mathbb{R}$ est $A$ diagonalisable ? Pourquoi ? Diagonaliser $A$ lorsque $a = 3$.`,
    method: String.raw`Calcule d'abord le polynôme caractéristique : tu verras qu'il ne dépend pas de $a$ et qu'il possède une racine double. Pour une racine double, la diagonalisabilité exige que l'espace propre associé soit de dimension 2 : étudie donc le rang de $A - I$ en fonction de $a$. Enfin, pour $a = 3$, assemble les vecteurs propres dans une matrice $S$ telle que $S^{-1}AS = D$.`,
    theoryRefs: ["Polynôme caractéristique", "Vecteurs propres", "Diagonalisation"],
    parts: [
      {
        label: null,
        steps: [
          {
            title: "Calculer le polynôme caractéristique",
            content: String.raw`On développe $\det(A - \lambda I)$ selon la **première ligne**, qui contient deux zéros :

$$\det(A - \lambda I) = \begin{vmatrix} 1-\lambda & 0 & 0 \\ a & -2-\lambda & 3 \\ 1 & -1 & 2-\lambda \end{vmatrix} = (1-\lambda)\begin{vmatrix} -2-\lambda & 3 \\ -1 & 2-\lambda \end{vmatrix}.$$

Le déterminant $2 \times 2$ vaut $(-2-\lambda)(2-\lambda) + 3 = \lambda^2 - 4 + 3 = \lambda^2 - 1$, donc

$$\det(A - \lambda I) = (1-\lambda)(\lambda^2 - 1) = -(\lambda - 1)^2(\lambda + 1).$$

Remarque importante : le paramètre $a$ a **disparu** du calcul (il était multiplié par un cofacteur nul). Quelle que soit la valeur de $a$, les valeurs propres sont donc $\lambda_1 = 1$ (racine **double**) et $\lambda_2 = -1$ (racine simple).`,
          },
          {
            title: "Rappeler le critère de diagonalisabilité",
            content: String.raw`📖 **Rappel du cours :** une matrice $3 \times 3$ est **diagonalisable** si et seulement si elle possède **3 vecteurs propres linéairement indépendants** (qui formeront les colonnes de $S$).

- Pour la valeur propre simple $\lambda = -1$, on trouve toujours exactement 1 vecteur propre indépendant.
- Pour la valeur propre double $\lambda = 1$, il faut trouver **2** vecteurs propres indépendants, c'est-à-dire que l'espace propre $E_1 = \ker(A - I)$ doit être de dimension 2.

Comme $\dim E_1 = 3 - \operatorname{rang}(A - I)$, la condition est : $\operatorname{rang}(A - I) = 1$. C'est ici que le paramètre $a$ va jouer.`,
          },
          {
            title: "Étudier le rang de A − I en fonction de a",
            content: String.raw`On calcule

$$A - I = \begin{pmatrix} 0 & 0 & 0 \\ a & -3 & 3 \\ 1 & -1 & 1 \end{pmatrix}.$$

La première ligne est nulle, donc le rang est au plus 2. Le rang vaut $1$ si et seulement si la deuxième ligne est un multiple de la troisième : $(a, -3, 3) = k\,(1, -1, 1)$ impose $k = 3$ (à cause des deuxième et troisième composantes), donc $a = 3$.

- Si $a = 3$ : $\operatorname{rang}(A - I) = 1$, donc $\dim E_1 = 2$ et $A$ possède $2 + 1 = 3$ vecteurs propres indépendants : $A$ est **diagonalisable**.
- Si $a \neq 3$ : $\operatorname{rang}(A - I) = 2$, donc $\dim E_1 = 1$ ; on ne dispose que de $1 + 1 = 2$ vecteurs propres indépendants, c'est insuffisant : $A$ n'est **pas diagonalisable**.`,
          },
          {
            title: "Déterminer l'espace propre E₁ pour a = 3",
            content: String.raw`Posons désormais $a = 3$, donc $A = \begin{pmatrix} 1 & 0 & 0 \\ 3 & -2 & 3 \\ 1 & -1 & 2 \end{pmatrix}$.

L'espace propre $E_1$ est l'ensemble des solutions de $(A - I)X = 0$. Les lignes $(3, -3, 3)$ et $(1, -1, 1)$ donnent toutes deux la même équation :

$$x - y + z = 0 \quad\Longleftrightarrow\quad x = y - z.$$

C'est un système **doublement indéterminé** : on choisit librement $y$ et $z$.

- Avec $y = 1$, $z = 0$ : le vecteur propre $(1, 1, 0)^T$.
- Avec $y = 0$, $z = 1$ : le vecteur propre $(-1, 0, 1)^T$.

Ces deux vecteurs sont linéairement indépendants : $\dim E_1 = 2$, comme prévu.`,
          },
          {
            title: "Déterminer l'espace propre E₋₁",
            content: String.raw`On résout $(A + I)X = 0$ avec

$$A + I = \begin{pmatrix} 2 & 0 & 0 \\ 3 & -1 & 3 \\ 1 & -1 & 3 \end{pmatrix}.$$

La première ligne donne $2x = 0$, donc $x = 0$. La troisième ligne devient $-y + 3z = 0$, donc $y = 3z$ (et la deuxième ligne, $-y + 3z = 0$, est alors automatiquement satisfaite).

En prenant $z = 1$ : le vecteur propre est $(0, 3, 1)^T$.`,
          },
          {
            title: "Assembler S et D, puis vérifier",
            content: String.raw`📖 **Rappel du cours :** diagonaliser $A$, c'est trouver $S$ inversible et $D$ diagonale telles que $S^{-1} A S = D$. Les colonnes de $S$ sont les vecteurs propres, et $D$ contient les valeurs propres correspondantes **dans le même ordre**.

$$S = \begin{pmatrix} 1 & -1 & 0 \\ 1 & 0 & 3 \\ 0 & 1 & 1 \end{pmatrix}, \qquad D = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & -1 \end{pmatrix}.$$

($\det S = -2 \neq 0$ : les trois colonnes sont bien indépendantes.)

**Vérification :** il suffit de contrôler $AS = SD$, c'est-à-dire $AX = \lambda X$ colonne par colonne :

- $A\,(1, 1, 0)^T = (1,\; 3-2,\; 1-1)^T = (1, 1, 0)^T$ ✓ (valeur propre $1$)
- $A\,(-1, 0, 1)^T = (-1,\; -3+3,\; -1+2)^T = (-1, 0, 1)^T$ ✓ (valeur propre $1$)
- $A\,(0, 3, 1)^T = (0,\; -6+3,\; -3+2)^T = (0, -3, -1)^T = -(0, 3, 1)^T$ ✓ (valeur propre $-1$)`,
          },
        ],
        answer: String.raw`$\det(A - \lambda I) = -(\lambda-1)^2(\lambda+1)$ pour tout $a$. La matrice $A$ est diagonalisable **si et seulement si $a = 3$** (c'est la seule valeur pour laquelle la valeur propre double $\lambda = 1$ fournit deux vecteurs propres indépendants). Pour $a = 3$ :

$$S = \begin{pmatrix} 1 & -1 & 0 \\ 1 & 0 & 3 \\ 0 & 1 & 1 \end{pmatrix}, \qquad S^{-1} A S = D = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & -1 \end{pmatrix}.$$`,
      },
    ],
  },

  // ---------------------------------------------------------------- 6.3
  {
    id: "6.3",
    chapter: 6,
    title: "Diagonalisation orthogonale de matrices symétriques",
    examType: true,
    statement: String.raw`Diagonalisez les matrices $A$ suivantes par une matrice orthogonale $S$, et vérifiez en calculant $S^T A S$.`,
    method: String.raw`Les deux matrices sont symétriques : le cours garantit qu'elles sont diagonalisables par une matrice orthogonale. Calcule les valeurs propres, puis une base de chaque espace propre. Les vecteurs propres associés à des valeurs propres distinctes sont automatiquement orthogonaux ; à l'intérieur d'un espace propre de dimension 2, applique le procédé de Gram–Schmidt. Termine en normant tous les vecteurs pour que les colonnes de $S$ soient de norme 1.`,
    theoryRefs: [
      "Diagonalisation orthogonale",
      "Polynôme caractéristique",
      "Vecteurs propres",
      "Procédé de Gram–Schmidt",
    ],
    parts: [
      {
        label: "a",
        statement: String.raw`$A = \begin{pmatrix} 10 & 2 & 2 \\ 2 & 7 & 1 \\ 2 & 1 & 7 \end{pmatrix}$`,
        steps: [
          {
            title: "Rappeler la diagonalisation orthogonale",
            content: String.raw`📖 **Rappel du cours :** toute matrice **symétrique** $A$ est diagonalisable par une matrice **orthogonale** $S$ (c'est-à-dire $S^T S = I$, donc $S^{-1} = S^T$) :

$$S^T A S = D.$$

De plus, des vecteurs propres associés à des valeurs propres **distinctes** d'une matrice symétrique sont automatiquement orthogonaux entre eux. Il ne reste donc qu'à orthogonaliser à l'intérieur de chaque espace propre (Gram–Schmidt si sa dimension dépasse 1), puis à **normer** tous les vecteurs.

Ici $A$ est bien symétrique ($A^T = A$) : la méthode s'applique.`,
          },
          {
            title: "Calculer le polynôme caractéristique",
            content: String.raw`Astuce : les lignes 2 et 3 de $A$ se ressemblent beaucoup. L'opération $L_2 \leftarrow L_2 - L_3$ (qui ne change pas le déterminant) fait apparaître un facteur commun :

$$\det(A - \lambda I) = \begin{vmatrix} 10-\lambda & 2 & 2 \\ 2 & 7-\lambda & 1 \\ 2 & 1 & 7-\lambda \end{vmatrix} \xrightarrow{L_2 \leftarrow L_2 - L_3} \begin{vmatrix} 10-\lambda & 2 & 2 \\ 0 & 6-\lambda & \lambda-6 \\ 2 & 1 & 7-\lambda \end{vmatrix} = (6-\lambda)\begin{vmatrix} 10-\lambda & 2 & 2 \\ 0 & 1 & -1 \\ 2 & 1 & 7-\lambda \end{vmatrix}.$$

Puis $C_3 \leftarrow C_3 + C_2$ (le déterminant ne change pas) crée un second zéro sur la ligne 2 :

$$\det(A - \lambda I) = (6-\lambda)\begin{vmatrix} 10-\lambda & 2 & 4 \\ 0 & 1 & 0 \\ 2 & 1 & 8-\lambda \end{vmatrix} = (6-\lambda)\big[(10-\lambda)(8-\lambda) - 8\big] = (6-\lambda)(\lambda^2 - 18\lambda + 72).$$

Comme $\lambda^2 - 18\lambda + 72 = (\lambda - 6)(\lambda - 12)$, on obtient

$$\det(A - \lambda I) = -(\lambda - 6)^2(\lambda - 12).$$

Les valeurs propres sont $\lambda = 6$ (double) et $\lambda = 12$ (simple). Contrôle : $6 + 6 + 12 = 24 = 10 + 7 + 7$, la trace de $A$ ✓.`,
          },
          {
            title: "Déterminer l'espace propre E₆ et l'orthogonaliser",
            content: String.raw`On résout $(A - 6I)X = 0$ :

$$A - 6I = \begin{pmatrix} 4 & 2 & 2 \\ 2 & 1 & 1 \\ 2 & 1 & 1 \end{pmatrix}.$$

Les trois lignes sont proportionnelles : le système se réduit à la seule équation

$$2x + y + z = 0.$$

C'est un plan (dimension 2), comme l'exige la diagonalisabilité. En choisissant les inconnues libres :

- $x = 1$, $y = 0$ : $u_1 = (1, 0, -2)^T$ ;
- $x = 0$, $y = 1$ : $u_2 = (0, 1, -1)^T$.

Ces deux vecteurs ne sont pas orthogonaux ($u_1 \bullet u_2 = 2 \neq 0$) : on applique le **procédé de Gram–Schmidt**. On garde $v_1 = u_1$ et on retire de $u_2$ sa composante le long de $v_1$ :

$$v_2 = u_2 - \frac{u_2 \bullet v_1}{v_1 \bullet v_1}\, v_1 = (0, 1, -1)^T - \frac{2}{5}(1, 0, -2)^T = \left(-\tfrac{2}{5},\, 1,\, -\tfrac{1}{5}\right)^T.$$

Pour éviter les fractions, on prend le multiple $v_2 = (-2, 5, -1)^T$ (toujours dans $E_6$ car $2 \cdot (-2) + 5 - 1 = 0$ ✓, et toujours orthogonal à $v_1$ car $v_1 \bullet v_2 = -2 + 0 + 2 = 0$ ✓).`,
          },
          {
            title: "Déterminer l'espace propre E₁₂",
            content: String.raw`On résout $(A - 12I)X = 0$ :

$$A - 12I = \begin{pmatrix} -2 & 2 & 2 \\ 2 & -5 & 1 \\ 2 & 1 & -5 \end{pmatrix}.$$

La première ligne donne $x = y + z$. En substituant dans la deuxième : $2(y+z) - 5y + z = -3y + 3z = 0$, donc $y = z$, puis $x = 2z$. Avec $z = 1$ :

$$v_3 = (2, 1, 1)^T.$$

Comme annoncé par la théorie, $v_3$ est orthogonal au plan $E_6$ : $v_3 \bullet v_1 = 2 - 2 = 0$ ✓ et $v_3 \bullet v_2 = -4 + 5 - 1 = 0$ ✓.`,
          },
          {
            title: "Normer les vecteurs et assembler S",
            content: String.raw`On divise chaque vecteur par sa norme :

$$\|v_1\| = \sqrt{1 + 0 + 4} = \sqrt{5}, \qquad \|v_2\| = \sqrt{4 + 25 + 1} = \sqrt{30}, \qquad \|v_3\| = \sqrt{4 + 1 + 1} = \sqrt{6}.$$

En mettant les trois colonnes au même dénominateur $\sqrt{30}$ (car $1/\sqrt{5} = \sqrt{6}/\sqrt{30}$ et $1/\sqrt{6} = \sqrt{5}/\sqrt{30}$) :

$$S = \frac{1}{\sqrt{30}}\begin{pmatrix} \sqrt{6} & -2 & 2\sqrt{5} \\ 0 & 5 & \sqrt{5} \\ -2\sqrt{6} & -1 & \sqrt{5} \end{pmatrix}, \qquad D = \begin{pmatrix} 6 & 0 & 0 \\ 0 & 6 & 0 \\ 0 & 0 & 12 \end{pmatrix}.$$`,
          },
          {
            title: "Vérifier que S^T A S = D",
            content: String.raw`Comme les colonnes $c_1, c_2, c_3$ de $S$ sont **orthonormées**, on a $S^T S = I$ ; et comme ce sont des vecteurs propres, $AS = SD$. Donc

$$S^T A S = S^T S D = D.$$

Concrètement, l'élément $(i, j)$ de $S^T A S$ vaut $c_i \bullet (A c_j) = \lambda_j \,(c_i \bullet c_j)$ : il vaut $\lambda_j$ si $i = j$ et $0$ sinon. Contrôle numérique d'une colonne :

$$A\,(2, 1, 1)^T = (20 + 2 + 2,\; 4 + 7 + 1,\; 4 + 1 + 7)^T = (24, 12, 12)^T = 12\,(2, 1, 1)^T \;✓$$

**Vérification finale :** $S^T A S = \operatorname{diag}(6, 6, 12) = D$ ✓`,
          },
        ],
        answer: String.raw`Valeurs propres : $6$ (double) et $12$. Une matrice orthogonale qui diagonalise $A$ est

$$S = \frac{1}{\sqrt{30}}\begin{pmatrix} \sqrt{6} & -2 & 2\sqrt{5} \\ 0 & 5 & \sqrt{5} \\ -2\sqrt{6} & -1 & \sqrt{5} \end{pmatrix}, \qquad S^T A S = \begin{pmatrix} 6 & 0 & 0 \\ 0 & 6 & 0 \\ 0 & 0 & 12 \end{pmatrix}.$$`,
      },
      {
        label: "b",
        statement: String.raw`$A = \begin{pmatrix} 3 & 0 & 0 \\ 0 & 4 & \sqrt{3} \\ 0 & \sqrt{3} & 0 \end{pmatrix}$`,
        steps: [
          {
            title: "Calculer les valeurs propres",
            content: String.raw`$A$ est symétrique, donc diagonalisable par une matrice orthogonale. On développe le polynôme caractéristique selon la première ligne (deux zéros) :

$$\det(A - \lambda I) = \begin{vmatrix} 3-\lambda & 0 & 0 \\ 0 & 4-\lambda & \sqrt{3} \\ 0 & \sqrt{3} & -\lambda \end{vmatrix} = (3-\lambda)\big[(4-\lambda)(-\lambda) - 3\big] = (3-\lambda)(\lambda^2 - 4\lambda - 3).$$

La première valeur propre est $\lambda_1 = 3$. Les deux autres sont les racines de $\lambda^2 - 4\lambda - 3 = 0$ :

$$\lambda = \frac{4 \pm \sqrt{16 + 12}}{2} = \frac{4 \pm 2\sqrt{7}}{2} = 2 \pm \sqrt{7}.$$

Trois valeurs propres distinctes : $\lambda_1 = 3$, $\lambda_2 = 2 + \sqrt{7}$, $\lambda_3 = 2 - \sqrt{7}$. Contrôle : leur somme vaut $3 + 4 = 7$, la trace de $A$ ✓.`,
          },
          {
            title: "Déterminer l'espace propre E₃",
            content: String.raw`On résout $(A - 3I)X = 0$ :

$$A - 3I = \begin{pmatrix} 0 & 0 & 0 \\ 0 & 1 & \sqrt{3} \\ 0 & \sqrt{3} & -3 \end{pmatrix}.$$

La deuxième ligne donne $y = -\sqrt{3}\, z$ ; en substituant dans la troisième : $\sqrt{3}\,(-\sqrt{3}\,z) - 3z = -6z = 0$, donc $z = 0$ puis $y = 0$. La variable $x$ est libre :

$$v_1 = (1, 0, 0)^T,$$

déjà de norme 1 — c'était prévisible, vu la structure « par blocs » de $A$.`,
          },
          {
            title: "Déterminer les espaces propres de 2 ± √7",
            content: String.raw`Posons $\lambda = 2 + \sqrt{7}$. Dans $(A - \lambda I)X = 0$, la première ligne donne $(3 - \lambda)x = (1 - \sqrt{7})\,x = 0$, donc $x = 0$. Restent les équations

$$(4-\lambda)\,y + \sqrt{3}\, z = 0 \qquad \text{et} \qquad \sqrt{3}\, y - \lambda\, z = 0.$$

La deuxième donne $z = \dfrac{\sqrt{3}\,y}{\lambda}$. En choisissant $y = \lambda = 2 + \sqrt{7}$, on obtient $z = \sqrt{3}$, d'où le vecteur propre

$$v_2 = \left(0,\; 2 + \sqrt{7},\; \sqrt{3}\right)^T.$$

Contrôle avec la première équation : $(4 - \lambda)(2+\sqrt{7}) + 3 = (2 - \sqrt{7})(2 + \sqrt{7}) + 3 = (4 - 7) + 3 = 0$ ✓.

Le même calcul avec $\lambda = 2 - \sqrt{7}$ donne

$$v_3 = \left(0,\; 2 - \sqrt{7},\; \sqrt{3}\right)^T.$$

Comme la théorie le prédit pour une matrice symétrique, $v_2 \bullet v_3 = (2+\sqrt{7})(2-\sqrt{7}) + 3 = -3 + 3 = 0$ : ils sont orthogonaux ✓ (et tous deux orthogonaux à $v_1$, leur première composante étant nulle).`,
          },
          {
            title: "Normer les vecteurs et assembler S",
            content: String.raw`Calcul des normes :

$$\|v_2\|^2 = (2+\sqrt{7})^2 + 3 = 4 + 4\sqrt{7} + 7 + 3 = 14 + 4\sqrt{7}, \qquad \|v_3\|^2 = (2-\sqrt{7})^2 + 3 = 14 - 4\sqrt{7}.$$

D'où la matrice orthogonale

$$S = \begin{pmatrix} 1 & 0 & 0 \\ 0 & \dfrac{2+\sqrt{7}}{\sqrt{14+4\sqrt{7}}} & \dfrac{2-\sqrt{7}}{\sqrt{14-4\sqrt{7}}} \\ 0 & \dfrac{\sqrt{3}}{\sqrt{14+4\sqrt{7}}} & \dfrac{\sqrt{3}}{\sqrt{14-4\sqrt{7}}} \end{pmatrix}, \qquad D = \begin{pmatrix} 3 & 0 & 0 \\ 0 & 2+\sqrt{7} & 0 \\ 0 & 0 & 2-\sqrt{7} \end{pmatrix}.$$

(Toute permutation des colonnes de $S$ — accompagnée de la même permutation sur la diagonale de $D$ — convient aussi.)`,
          },
          {
            title: "Vérifier que S^T A S = D",
            content: String.raw`Les colonnes de $S$ sont orthonormées (normes 1, produits scalaires nuls vérifiés à l'étape 3), donc $S^T S = I$, et ce sont des vecteurs propres, donc $AS = SD$. Par conséquent

$$S^T A S = S^T S D = D = \operatorname{diag}\big(3,\; 2+\sqrt{7},\; 2-\sqrt{7}\big).$$

**Vérification** sur la deuxième colonne (avant normalisation) : avec $v_2 = (0,\; 2+\sqrt{7},\; \sqrt{3})^T$,

$$A v_2 = \big(0,\; 4(2+\sqrt{7}) + 3,\; \sqrt{3}\,(2+\sqrt{7})\big)^T = \big(0,\; 11 + 4\sqrt{7},\; \sqrt{3}\,(2+\sqrt{7})\big)^T,$$

et $(2+\sqrt{7})^2 = 11 + 4\sqrt{7}$, donc $A v_2 = (2+\sqrt{7})\, v_2$ ✓.`,
          },
        ],
        answer: String.raw`Valeurs propres : $3$, $2 + \sqrt{7}$ et $2 - \sqrt{7}$. Une matrice orthogonale qui diagonalise $A$ est

$$S = \begin{pmatrix} 1 & 0 & 0 \\ 0 & \dfrac{2+\sqrt{7}}{\sqrt{14+4\sqrt{7}}} & \dfrac{2-\sqrt{7}}{\sqrt{14-4\sqrt{7}}} \\ 0 & \dfrac{\sqrt{3}}{\sqrt{14+4\sqrt{7}}} & \dfrac{\sqrt{3}}{\sqrt{14-4\sqrt{7}}} \end{pmatrix}, \qquad S^T A S = \operatorname{diag}\big(3,\; 2+\sqrt{7},\; 2-\sqrt{7}\big).$$

(Le solutionnaire donne une $S$ équivalente : mêmes espaces propres, mais colonnes 2 et 3 échangées — donc $D = \operatorname{diag}(3,\; 2-\sqrt{7},\; 2+\sqrt{7})$ — et vecteurs propres choisis au signe près.)`,
      },
    ],
  },

  // ---------------------------------------------------------------- 6.4
  {
    id: "6.4",
    chapter: 6,
    title: "Reconstruire une matrice à partir de sa diagonalisation",
    examType: false,
    statement: String.raw`Une matrice carrée $A$ de dimension 3 a comme valeurs propres $1$ (de multiplicité 2) et $-2$ (de multiplicité 1). Elle est diagonalisée par la matrice $S = \begin{pmatrix} 1 & 0 & -1 \\ 0 & 0 & -1 \\ 0 & 1 & 2 \end{pmatrix}$. Déterminez la matrice $A$.`,
    method: String.raw`C'est le problème de diagonalisation « à l'envers » : au lieu de partir de $A$ pour trouver $S$ et $D$, on te donne $S$ et les valeurs propres, et tu dois reconstruire $A = S D S^{-1}$. Écris $D$ (les valeurs propres dans l'ordre des colonnes de $S$), calcule $S^{-1}$ par Gauss–Jordan, puis effectue le double produit.`,
    theoryRefs: ["Diagonalisation", "Vecteurs propres"],
    parts: [
      {
        label: null,
        steps: [
          {
            title: "Traduire les données : A = S D S⁻¹",
            content: String.raw`📖 **Rappel du cours :** dire que $A$ est **diagonalisée par $S$** signifie $S^{-1} A S = D$, où $D$ est la matrice diagonale des valeurs propres et où la $j$-ième colonne de $S$ est un vecteur propre associé à la $j$-ième valeur propre de $D$. En isolant $A$ :

$$A = S\, D\, S^{-1}.$$

La valeur propre $1$ est de multiplicité 2 et $-2$ de multiplicité 1 : les deux premières colonnes de $S$ portent la valeur propre $1$, la troisième porte $-2$, donc

$$D = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & -2 \end{pmatrix}.$$

Il ne reste « que » deux calculs : inverser $S$, puis effectuer le double produit.`,
          },
          {
            title: "Calculer S⁻¹ par Gauss–Jordan",
            content: String.raw`On réduit la matrice augmentée $\left(\, S \mid I \,\right)$ jusqu'à obtenir $\left(\, I \mid S^{-1} \,\right)$ :

$$\left(\begin{array}{ccc|ccc} 1 & 0 & -1 & 1 & 0 & 0 \\ 0 & 0 & -1 & 0 & 1 & 0 \\ 0 & 1 & 2 & 0 & 0 & 1 \end{array}\right) \xrightarrow{L_2 \leftrightarrow L_3} \left(\begin{array}{ccc|ccc} 1 & 0 & -1 & 1 & 0 & 0 \\ 0 & 1 & 2 & 0 & 0 & 1 \\ 0 & 0 & -1 & 0 & 1 & 0 \end{array}\right)$$

On normalise le troisième pivot ($L_3 \leftarrow -L_3$), puis on annule la troisième colonne au-dessus du pivot ($L_1 \leftarrow L_1 + L_3$ et $L_2 \leftarrow L_2 - 2L_3$) :

$$\left(\begin{array}{ccc|ccc} 1 & 0 & -1 & 1 & 0 & 0 \\ 0 & 1 & 2 & 0 & 0 & 1 \\ 0 & 0 & 1 & 0 & -1 & 0 \end{array}\right) \longrightarrow \left(\begin{array}{ccc|ccc} 1 & 0 & 0 & 1 & -1 & 0 \\ 0 & 1 & 0 & 0 & 2 & 1 \\ 0 & 0 & 1 & 0 & -1 & 0 \end{array}\right)$$

Donc

$$S^{-1} = \begin{pmatrix} 1 & -1 & 0 \\ 0 & 2 & 1 \\ 0 & -1 & 0 \end{pmatrix}.$$

**Contrôle rapide :** $S \cdot S^{-1} = I$ (par exemple, ligne 3 de $S$ fois colonne 2 de $S^{-1}$ : $0 \cdot (-1) + 1 \cdot 2 + 2 \cdot (-1) = 0$ ✓).`,
          },
          {
            title: "Effectuer le double produit S D S⁻¹",
            content: String.raw`Astuce : multiplier $S^{-1}$ à gauche par la matrice diagonale $D$ revient simplement à multiplier la $i$-ième **ligne** de $S^{-1}$ par le $i$-ième élément diagonal :

$$D\, S^{-1} = \begin{pmatrix} 1 & -1 & 0 \\ 0 & 2 & 1 \\ 0 & 2 & 0 \end{pmatrix} \quad \text{(lignes 1 et 2 inchangées, ligne 3 multipliée par } -2\text{)}.$$

Puis on calcule $A = S \cdot (D S^{-1})$ :

$$A = \begin{pmatrix} 1 & 0 & -1 \\ 0 & 0 & -1 \\ 0 & 1 & 2 \end{pmatrix} \begin{pmatrix} 1 & -1 & 0 \\ 0 & 2 & 1 \\ 0 & 2 & 0 \end{pmatrix} = \begin{pmatrix} 1 & -1-2 & 0 \\ 0 & -2 & 0 \\ 0 & 2+4 & 1 \end{pmatrix} = \begin{pmatrix} 1 & -3 & 0 \\ 0 & -2 & 0 \\ 0 & 6 & 1 \end{pmatrix}.$$`,
          },
          {
            title: "Vérifier le résultat",
            content: String.raw`**Vérification** par trois contrôles indépendants :

- **Trace :** la somme des valeurs propres doit valoir la trace de $A$ : $1 + 1 - 2 = 0$ et $1 - 2 + 1 = 0$ ✓.
- **Déterminant :** le produit des valeurs propres doit valoir $\det A$ : $1 \cdot 1 \cdot (-2) = -2$ et, en développant selon la première colonne, $\det A = 1 \cdot (-2 \cdot 1 - 0 \cdot 6) = -2$ ✓.
- **Vecteur propre :** la troisième colonne de $S$, $(-1, -1, 2)^T$, doit vérifier $AX = -2X$ : $A\,(-1, -1, 2)^T = (-1 + 3,\; 2,\; -6 + 2)^T = (2, 2, -4)^T = -2\,(-1, -1, 2)^T$ ✓.`,
          },
        ],
        answer: String.raw`$$A = S D S^{-1} = \begin{pmatrix} 1 & -3 & 0 \\ 0 & -2 & 0 \\ 0 & 6 & 1 \end{pmatrix}$$`,
      },
    ],
  },

  // ---------------------------------------------------------------- 6.5
  {
    id: "6.5",
    chapter: 6,
    title: "Diagonalisation, noyau et image par vecteurs propres",
    examType: false,
    statement: String.raw`Diagonalisez la matrice $A = \begin{pmatrix} 2 & 0 & 4 \\ 3 & -4 & 12 \\ 1 & -2 & 5 \end{pmatrix}$ si possible. Donnez des bases du noyau et de l'image de l'application linéaire représentée par $A$, bases constituées de vecteurs propres de $A$. Justifiez.`,
    method: String.raw`Calcule le polynôme caractéristique (indice : $0$ est valeur propre, ce qui annonce un noyau non trivial). Si les trois valeurs propres sont distinctes, la diagonalisabilité est automatique. Le noyau est exactement l'espace propre de $0$ ; pour l'image, montre que les vecteurs propres des valeurs propres non nulles appartiennent à l'image et compare les dimensions.`,
    theoryRefs: ["Polynôme caractéristique", "Vecteurs propres", "Diagonalisation"],
    parts: [
      {
        label: null,
        steps: [
          {
            title: "Calculer le polynôme caractéristique",
            content: String.raw`On développe selon la première ligne (elle contient un zéro) :

$$\det(A - \lambda I) = \begin{vmatrix} 2-\lambda & 0 & 4 \\ 3 & -4-\lambda & 12 \\ 1 & -2 & 5-\lambda \end{vmatrix} = (2-\lambda)\begin{vmatrix} -4-\lambda & 12 \\ -2 & 5-\lambda \end{vmatrix} + 4\begin{vmatrix} 3 & -4-\lambda \\ 1 & -2 \end{vmatrix}.$$

Calcul des deux mineurs :

$$(-4-\lambda)(5-\lambda) + 24 = \lambda^2 - \lambda - 20 + 24 = \lambda^2 - \lambda + 4, \qquad -6 + 4 + \lambda = \lambda - 2.$$

Donc

$$\det(A - \lambda I) = (2-\lambda)(\lambda^2 - \lambda + 4) - 4(2-\lambda) = (2-\lambda)(\lambda^2 - \lambda) = -\lambda(\lambda - 1)(\lambda - 2).$$

Les valeurs propres sont $\lambda_1 = 0$, $\lambda_2 = 1$ et $\lambda_3 = 2$. Contrôle : $0 + 1 + 2 = 3 = 2 - 4 + 5$, la trace de $A$ ✓.`,
          },
          {
            title: "Conclure que A est diagonalisable",
            content: String.raw`📖 **Rappel du cours :** des vecteurs propres associés à des valeurs propres **distinctes** sont linéairement indépendants. Une matrice $3 \times 3$ qui possède 3 valeurs propres distinctes est donc **toujours diagonalisable**.

C'est le cas ici ($0$, $1$ et $2$ sont distinctes) : $A$ est diagonalisable, sans qu'on doive vérifier les dimensions des espaces propres. Remarque au passage : $0$ est valeur propre, donc $\det A = 0 \cdot 1 \cdot 2 = 0$, la matrice n'est **pas inversible** et son noyau n'est pas réduit au vecteur nul.`,
          },
          {
            title: "Espace propre E₀ (= noyau de A)",
            content: String.raw`$E_0 = \ker(A - 0 \cdot I) = \ker A$ : l'espace propre de la valeur propre $0$ est exactement le **noyau** de $A$. On résout $AX = 0$ :

- $L_1$ : $2x + 4z = 0$, donc $x = -2z$ ;
- $L_2$ : $3x - 4y + 12z = 0$, soit $-6z - 4y + 12z = 0$, donc $y = \tfrac{3}{2}z$ ;
- $L_3$ : $x - 2y + 5z = -2z - 3z + 5z = 0$ ✓ (automatiquement satisfaite).

Système **simplement indéterminé** : avec $z = 2$ (pour éviter les fractions),

$$v_1 = (-4, 3, 2)^T.$$`,
          },
          {
            title: "Espaces propres E₁ et E₂",
            content: String.raw`Pour $\lambda = 1$, on résout $(A - I)X = 0$ avec $A - I = \begin{pmatrix} 1 & 0 & 4 \\ 3 & -5 & 12 \\ 1 & -2 & 4 \end{pmatrix}$ :

$L_1$ donne $x = -4z$ ; en substituant dans $L_2$ : $-12z - 5y + 12z = -5y = 0$, donc $y = 0$ ; $L_3$ : $-4z - 0 + 4z = 0$ ✓. Avec $z = 1$ :

$$v_2 = (-4, 0, 1)^T.$$

Pour $\lambda = 2$, on résout $(A - 2I)X = 0$ avec $A - 2I = \begin{pmatrix} 0 & 0 & 4 \\ 3 & -6 & 12 \\ 1 & -2 & 3 \end{pmatrix}$ :

$L_1$ donne $z = 0$ ; $L_3$ devient $x - 2y = 0$, donc $x = 2y$ ($L_2$ donne la même équation). Avec $y = 1$ :

$$v_3 = (2, 1, 0)^T.$$`,
          },
          {
            title: "Écrire la diagonalisation",
            content: String.raw`On range les vecteurs propres en colonnes dans $S$ et les valeurs propres dans le même ordre dans $D$ :

$$S = \begin{pmatrix} -4 & -4 & 2 \\ 3 & 0 & 1 \\ 2 & 1 & 0 \end{pmatrix}, \qquad S^{-1} A S = D = \begin{pmatrix} 0 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 2 \end{pmatrix}.$$

**Vérification** colonne par colonne de $AS = SD$ :

- $A v_1 = (-8 + 8,\; -12 - 12 + 24,\; -4 - 6 + 10)^T = (0, 0, 0)^T = 0 \cdot v_1$ ✓
- $A v_2 = (-8 + 4,\; -12 + 12,\; -4 + 5)^T = (-4, 0, 1)^T = 1 \cdot v_2$ ✓
- $A v_3 = (4,\; 6 - 4,\; 2 - 2)^T = (4, 2, 0)^T = 2 \cdot v_3$ ✓`,
          },
          {
            title: "Base du noyau constituée de vecteurs propres",
            content: String.raw`Le noyau de $A$ est exactement l'espace propre $E_0$ (vu à l'étape 3) : c'est un sous-vectoriel de dimension 1 et

$$\ker A = \left\lbrace t\,(-4, 3, 2)^T : t \in \mathbb{R} \right\rbrace.$$

Donc $\lbrace (-4, 3, 2)^T \rbrace$ est une base du noyau, et c'est bien un vecteur propre de $A$ (associé à $\lambda = 0$).`,
          },
          {
            title: "Base de l'image constituée de vecteurs propres",
            content: String.raw`📖 **Rappel du cours :** l'image de $A$ est $\operatorname{Im} A = \lbrace AX : X \in \mathbb{R}^3 \rbrace$, et le théorème du rang donne $\dim \operatorname{Im} A = 3 - \dim \ker A = 3 - 1 = 2$.

**Argument clé :** si $v$ est un vecteur propre de valeur propre $\lambda \neq 0$, alors

$$v = A\left(\tfrac{1}{\lambda}\, v\right) \in \operatorname{Im} A.$$

Autrement dit, tout vecteur propre d'une valeur propre **non nulle** appartient à l'image. Ici, $v_2 = (-4, 0, 1)^T$ (pour $\lambda = 1$) et $v_3 = (2, 1, 0)^T$ (pour $\lambda = 2$) sont donc dans $\operatorname{Im} A$. Ils sont linéairement indépendants (valeurs propres distinctes), et l'image est un sous-vectoriel de dimension 2 : deux vecteurs indépendants suffisent donc à en former une base.

**Conclusion :** $\lbrace (-4, 0, 1)^T,\; (2, 1, 0)^T \rbrace$ est une base de l'image constituée de vecteurs propres de $A$.`,
          },
        ],
        answer: String.raw`$\det(A - \lambda I) = -\lambda(\lambda - 1)(\lambda - 2)$ : trois valeurs propres distinctes $0$, $1$, $2$, donc $A$ est diagonalisable :

$$S = \begin{pmatrix} -4 & -4 & 2 \\ 3 & 0 & 1 \\ 2 & 1 & 0 \end{pmatrix}, \qquad S^{-1} A S = \operatorname{diag}(0, 1, 2).$$

Base du noyau : $\lbrace (-4, 3, 2)^T \rbrace$ (vecteur propre de $0$ ; c'est le multiple entier du $(-2, 3/2, 1)^T$ du solutionnaire). Base de l'image : $\lbrace (-4, 0, 1)^T,\; (2, 1, 0)^T \rbrace$ (vecteurs propres de $1$ et $2$).`,
      },
    ],
  },
];
