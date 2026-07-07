import type { Exercise } from "./types";

export const exercises: Exercise[] = [
  {
    id: "3.1",
    chapter: 3,
    title: "Preuves : inversibilité et déterminant",
    examType: false,
    statement: String.raw`Soient $A$ et $B$ des matrices carrées. Prouvez les propositions suivantes.`,
    method: String.raw`Toutes ces preuves reposent sur le même levier : une matrice carrée est inversible si et seulement si son déterminant est non nul. Combine ce critère avec les propriétés du déterminant ($\det(AB) = \det A \cdot \det B$, $\det A^T = \det A$, déterminant d'une matrice triangulaire) et chaque preuve tient en quelques lignes.`,
    theoryRefs: ["Propriétés du déterminant", "Matrice inverse", "Matrices orthogonales"],
    parts: [
      {
        label: "1",
        statement: String.raw`$AB$ est inversible $\iff$ $A$ et $B$ le sont.`,
        steps: [
          {
            title: "Identifier l'outil clé",
            content: String.raw`📖 **Rappel du cours :** une matrice carrée $M$ est inversible si et seulement si $\det M \neq 0$. De plus, le déterminant d'un produit est le produit des déterminants :

$$\det(AB) = \det A \cdot \det B.$$

Ces deux propriétés vont nous permettre de transformer une question sur l'inversibilité en une question sur des nombres réels, beaucoup plus facile à manipuler.`,
          },
          {
            title: "Traduire l'inversibilité en condition sur le déterminant",
            content: String.raw`On veut montrer une équivalence. Traduisons chaque côté à l'aide du critère du déterminant :

- $AB$ inversible $\iff \det(AB) \neq 0$
- $A$ et $B$ inversibles $\iff \det A \neq 0$ **et** $\det B \neq 0$

Il reste donc à montrer que $\det(AB) \neq 0$ si et seulement si $\det A \neq 0$ et $\det B \neq 0$.`,
          },
          {
            title: "Conclure avec la règle du produit",
            content: String.raw`Grâce à la propriété $\det(AB) = \det A \cdot \det B$, on raisonne sur un produit de deux **nombres réels** :

$$\det(AB) \neq 0 \iff \det A \cdot \det B \neq 0 \iff \det A \neq 0 \text{ et } \det B \neq 0.$$

En effet, un produit de deux réels est non nul si et seulement si chacun des deux facteurs est non nul. En remontant la chaîne d'équivalences :

$$AB \text{ inversible} \iff A \text{ et } B \text{ inversibles.} \; \blacksquare$$`,
          },
        ],
        answer: String.raw`Comme $\det(AB) = \det A \cdot \det B$, on a $\det(AB) \neq 0 \iff \det A \neq 0$ et $\det B \neq 0$, c'est-à-dire : $AB$ inversible $\iff$ $A$ et $B$ inversibles.`,
      },
      {
        label: "2",
        statement: String.raw`$A^T$ est inversible $\iff$ $A$ l'est.`,
        steps: [
          {
            title: "Rappeler la propriété de la transposée",
            content: String.raw`📖 **Rappel du cours :** transposer une matrice ne change pas son déterminant :

$$\det A^T = \det A.$$

Intuitivement, c'est parce que développer $A$ selon une ligne revient exactement à développer $A^T$ selon la colonne correspondante.`,
          },
          {
            title: "Enchaîner les équivalences",
            content: String.raw`On utilise à nouveau le critère du déterminant :

$$A^T \text{ inversible} \iff \det A^T \neq 0 \iff \det A \neq 0 \iff A \text{ inversible.} \; \blacksquare$$

Remarque : la deuxième équivalence est légitime précisément parce que $\det A^T$ et $\det A$ sont **le même nombre** — l'un est non nul exactement quand l'autre l'est.`,
          },
        ],
        answer: String.raw`Puisque $\det A^T = \det A$, les deux déterminants sont non nuls en même temps : $A^T$ est inversible $\iff$ $A$ est inversible.`,
      },
      {
        label: "3",
        statement: String.raw`Une matrice triangulaire est inversible $\iff$ tous ses éléments diagonaux sont non nuls.`,
        steps: [
          {
            title: "Rappeler le déterminant d'une matrice triangulaire",
            content: String.raw`📖 **Rappel du cours :** le déterminant d'une matrice triangulaire (supérieure ou inférieure) est le **produit de ses éléments diagonaux** :

$$\det A = a_{11} \, a_{22} \cdots a_{nn}.$$

Pour t'en convaincre : développe selon la première colonne (si $A$ est triangulaire supérieure), il n'y a qu'un seul terme non nul, celui en $a_{11}$, et le mineur associé est à nouveau triangulaire. En répétant l'opération, on « épluche » toute la diagonale.`,
          },
          {
            title: "Traduire la condition d'inversibilité",
            content: String.raw`Soit $A$ triangulaire. Par le critère du déterminant :

$$A \text{ inversible} \iff \det A \neq 0 \iff a_{11} \, a_{22} \cdots a_{nn} \neq 0.$$

Or un produit de $n$ nombres réels est non nul si et seulement si **chaque facteur** est non nul (dès qu'un seul facteur vaut $0$, tout le produit s'annule).`,
          },
          {
            title: "Conclure",
            content: String.raw`On obtient donc :

$$A \text{ inversible} \iff a_{ii} \neq 0 \text{ pour tout } i = 1, \dots, n. \; \blacksquare$$

**Vérification sur un exemple :** $\begin{pmatrix} 2 & 5 \\ 0 & 0 \end{pmatrix}$ a un zéro sur la diagonale, et en effet $\det = 2 \cdot 0 = 0$ : elle n'est pas inversible.`,
          },
        ],
        answer: String.raw`Pour une matrice triangulaire, $\det A = a_{11} a_{22} \cdots a_{nn}$. Ce produit est non nul $\iff$ chaque $a_{ii} \neq 0$, donc $A$ est inversible $\iff$ tous ses éléments diagonaux sont non nuls.`,
      },
      {
        label: "4",
        statement: String.raw`Si $A$ est orthogonale ($A^T A = I$), alors $\det A = 1$ ou $\det A = -1$.`,
        steps: [
          {
            title: "Partir de la définition et appliquer le déterminant",
            content: String.raw`📖 **Rappel du cours :** une matrice $A$ est **orthogonale** lorsque $A^T A = I$.

L'astuce : deux matrices égales ont le même déterminant. On applique donc $\det$ aux deux membres de l'égalité $A^T A = I$ :

$$\det(A^T A) = \det I = 1,$$

car le déterminant de la matrice identité vaut $1$ (matrice triangulaire dont tous les éléments diagonaux valent $1$).`,
          },
          {
            title: "Développer le membre de gauche",
            content: String.raw`On utilise successivement la règle du produit puis la propriété de la transposée :

$$\det(A^T A) = \det A^T \cdot \det A = \det A \cdot \det A = (\det A)^2.$$

L'équation devient donc :

$$(\det A)^2 = 1.$$`,
          },
          {
            title: "Résoudre et conclure",
            content: String.raw`Le nombre réel $\det A$ vérifie $(\det A)^2 = 1$. Les seules solutions de cette équation sont :

$$\det A = 1 \quad \text{ou} \quad \det A = -1. \; \blacksquare$$

**Vérification :** la matrice de rotation $\begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}$ est orthogonale et son déterminant vaut $0 \cdot 0 - (-1) \cdot 1 = 1$ ✓ ; la matrice de réflexion $\begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}$ est orthogonale et son déterminant vaut $-1$ ✓. Les deux valeurs sont donc bien possibles.`,
          },
        ],
        answer: String.raw`En prenant le déterminant de $A^T A = I$ : $(\det A)^2 = 1$, donc $\det A = 1$ ou $\det A = -1$.`,
      },
    ],
  },
  {
    id: "3.2",
    chapter: 3,
    title: "Calcul de déterminants 3×3",
    examType: false,
    statement: String.raw`Calculez les déterminants des matrices suivantes.`,
    method: String.raw`Pour un déterminant $3 \times 3$, développe par cofacteurs selon la ligne ou la colonne qui contient **le plus de zéros** : chaque zéro est un terme de moins à calculer. N'oublie pas la règle des signes en damier $\begin{pmatrix} + & - & + \\ - & + & - \\ + & - & + \end{pmatrix}$.`,
    theoryRefs: ["Développement par cofacteurs", "Propriétés du déterminant"],
    parts: [
      {
        label: "a",
        statement: String.raw`$$\begin{vmatrix} 2 & 5 & 0 \\ -1 & -4 & 3 \\ 0 & -3 & 6 \end{vmatrix}$$`,
        steps: [
          {
            title: "Choisir la ligne de développement",
            content: String.raw`📖 **Rappel du cours :** le développement par cofacteurs selon la ligne $i$ s'écrit

$$\det A = \sum_{j} (-1)^{i+j} \, a_{ij} \, M_{ij},$$

où $M_{ij}$ est le mineur obtenu en supprimant la ligne $i$ et la colonne $j$ de $A$.

Ici, la première ligne contient un zéro en dernière position. Développons selon la **première ligne** : le terme en $a_{13} = 0$ disparaît, il ne reste que deux mineurs à calculer.`,
          },
          {
            title: "Développer selon la première ligne",
            content: String.raw`$$\begin{vmatrix} 2 & 5 & 0 \\ -1 & -4 & 3 \\ 0 & -3 & 6 \end{vmatrix} = +2 \begin{vmatrix} -4 & 3 \\ -3 & 6 \end{vmatrix} - 5 \begin{vmatrix} -1 & 3 \\ 0 & 6 \end{vmatrix} + 0.$$

Attention au signe « $-$ » devant le deuxième terme : c'est la position $(1,2)$ du damier des signes.`,
          },
          {
            title: "Calculer les mineurs 2×2",
            content: String.raw`📖 **Rappel du cours :** $\begin{vmatrix} a & b \\ c & d \end{vmatrix} = ad - bc$.

- $\begin{vmatrix} -4 & 3 \\ -3 & 6 \end{vmatrix} = (-4)(6) - (3)(-3) = -24 + 9 = -15$
- $\begin{vmatrix} -1 & 3 \\ 0 & 6 \end{vmatrix} = (-1)(6) - (3)(0) = -6$

Donc :

$$\det A = 2 \cdot (-15) - 5 \cdot (-6) = -30 + 30 = 0.$$`,
          },
          {
            title: "Interpréter et vérifier le résultat",
            content: String.raw`Le déterminant est nul : la matrice **n'est pas inversible**. Ce n'est pas un hasard : ses lignes sont linéairement dépendantes.

**Vérification :** on cherche $\alpha, \beta$ tels que $L_3 = \alpha L_1 + \beta L_2$. Avec $\alpha = 1$ et $\beta = 2$ :

$$1 \cdot (2, 5, 0) + 2 \cdot (-1, -4, 3) = (2 - 2, \; 5 - 8, \; 0 + 6) = (0, -3, 6) = L_3 \; ✓$$

Une ligne est combinaison linéaire des autres, ce qui **confirme** que $\det A = 0$.`,
          },
        ],
        answer: String.raw`$\det A = 0$ (la matrice n'est pas inversible : $L_3 = L_1 + 2L_2$).`,
      },
      {
        label: "b",
        statement: String.raw`$$\begin{vmatrix} 1 & 2 & 0 \\ 3 & 0 & 2 \\ 1 & 1 & 0 \end{vmatrix}$$`,
        steps: [
          {
            title: "Repérer la colonne la plus avantageuse",
            content: String.raw`La **troisième colonne** contient deux zéros : $(0, 2, 0)^T$. En développant selon cette colonne, un seul terme survit — celui associé à $a_{23} = 2$. C'est le développement le plus économique possible.`,
          },
          {
            title: "Développer selon la troisième colonne",
            content: String.raw`📖 **Rappel du cours :** le signe du cofacteur en position $(i,j)$ est $(-1)^{i+j}$. Pour la position $(2,3)$ : $(-1)^{2+3} = -1$.

$$\begin{vmatrix} 1 & 2 & 0 \\ 3 & 0 & 2 \\ 1 & 1 & 0 \end{vmatrix} = -2 \begin{vmatrix} 1 & 2 \\ 1 & 1 \end{vmatrix}.$$

Le mineur s'obtient en barrant la ligne 2 et la colonne 3.`,
          },
          {
            title: "Calculer et conclure",
            content: String.raw`$$\begin{vmatrix} 1 & 2 \\ 1 & 1 \end{vmatrix} = 1 \cdot 1 - 2 \cdot 1 = -1,$$

donc

$$\det B = -2 \cdot (-1) = 2.$$

**Vérification** par la règle de Sarrus : $\det B = (1 \cdot 0 \cdot 0 + 2 \cdot 2 \cdot 1 + 0 \cdot 3 \cdot 1) - (0 \cdot 0 \cdot 1 + 2 \cdot 1 \cdot 1 + 0 \cdot 3 \cdot 2) = 4 - 2 = 2$ ✓`,
          },
        ],
        answer: String.raw`$\det B = 2$.`,
      },
      {
        label: "c",
        statement: String.raw`$$\begin{vmatrix} a & 1 & 1 \\ 1 & a & 1 \\ 1 & 1 & a \end{vmatrix}$$`,
        steps: [
          {
            title: "Développer selon la première ligne",
            content: String.raw`Ici il n'y a pas de zéro : peu importe la ligne choisie. Développons selon la première ligne, en traitant $a$ comme un simple nombre :

$$\det C = a \begin{vmatrix} a & 1 \\ 1 & a \end{vmatrix} - 1 \begin{vmatrix} 1 & 1 \\ 1 & a \end{vmatrix} + 1 \begin{vmatrix} 1 & a \\ 1 & 1 \end{vmatrix}.$$`,
          },
          {
            title: "Calculer les trois mineurs",
            content: String.raw`- $\begin{vmatrix} a & 1 \\ 1 & a \end{vmatrix} = a^2 - 1$
- $\begin{vmatrix} 1 & 1 \\ 1 & a \end{vmatrix} = a - 1$
- $\begin{vmatrix} 1 & a \\ 1 & 1 \end{vmatrix} = 1 - a$

En recollant les morceaux :

$$\det C = a(a^2 - 1) - (a - 1) + (1 - a) = a^3 - a - a + 1 + 1 - a = a^3 - 3a + 2.$$`,
          },
          {
            title: "Factoriser le résultat",
            content: String.raw`Il est souvent utile de factoriser un déterminant qui dépend d'un paramètre (par exemple pour discuter l'inversibilité). On remarque que $a = 1$ est racine : $1 - 3 + 2 = 0$. En divisant $a^3 - 3a + 2$ par $(a - 1)$ :

$$a^3 - 3a + 2 = (a - 1)(a^2 + a - 2) = (a - 1)^2 (a + 2).$$

La matrice est donc inversible si et seulement si $a \neq 1$ et $a \neq -2$.

**Vérification :** pour $a = 1$, la matrice a ses trois lignes identiques, donc son déterminant est bien nul ✓. Pour $a = 0$, la formule donne $\det C = 2$, et le calcul direct aussi : $0 \cdot (0 - 1) - (0 - 1) + (1 - 0) = 0 + 1 + 1 = 2$ ✓`,
          },
        ],
        answer: String.raw`$\det C = a^3 - 3a + 2 = (a-1)^2(a+2)$.`,
      },
    ],
  },
  {
    id: "3.3",
    chapter: 3,
    title: "Déterminants nuls sans développement",
    examType: false,
    statement: String.raw`Sans les développer, établissez que les déterminants des matrices suivantes sont nuls.`,
    method: String.raw`Il faut trouver une **propriété structurelle** de chaque matrice qui force le déterminant à s'annuler, sans aucun calcul de développement. Pense aux propriétés du déterminant : $\det A^T = \det A$, $\det(kA) = k^n \det A$, et surtout : un déterminant est nul dès que deux lignes (ou colonnes) sont proportionnelles.`,
    theoryRefs: ["Propriétés du déterminant", "Transformations élémentaires"],
    parts: [
      {
        label: "a",
        statement: String.raw`$$\begin{pmatrix} 0 & a & b \\ -a & 0 & c \\ -b & -c & 0 \end{pmatrix}$$`,
        steps: [
          {
            title: "Reconnaître une matrice antisymétrique",
            content: String.raw`Observe la structure : notons $A$ cette matrice. En la transposant (échanger lignes et colonnes), chaque élément change de signe :

$$A^T = \begin{pmatrix} 0 & -a & -b \\ a & 0 & -c \\ b & c & 0 \end{pmatrix} = -A.$$

Une matrice vérifiant $A^T = -A$ est dite **antisymétrique**. C'est cette propriété qu'on va exploiter, sans jamais développer le déterminant.`,
          },
          {
            title: "Appliquer les propriétés du déterminant",
            content: String.raw`📖 **Rappel du cours :** deux propriétés du déterminant :

- $\det A^T = \det A$ (la transposée conserve le déterminant) ;
- $\det(kA) = k^n \det A$ pour une matrice $n \times n$ (multiplier **toute** la matrice par $k$ revient à multiplier chacune des $n$ lignes par $k$, et chaque ligne multipliée par $k$ multiplie le déterminant par $k$).

On prend le déterminant des deux membres de $A^T = -A$, avec ici $n = 3$ et $k = -1$ :

$$\det A = \det A^T = \det(-A) = (-1)^3 \det A = -\det A.$$`,
          },
          {
            title: "Conclure",
            content: String.raw`L'équation $\det A = -\det A$ donne $2\det A = 0$, donc

$$\det A = 0. \; \blacksquare$$

Remarque : l'argument fonctionne pour **toute** matrice antisymétrique de dimension **impaire** — c'est le facteur $(-1)^3 = -1$ qui fait tout. En dimension paire, $(-1)^n = 1$ et on ne peut rien conclure de cette manière.`,
          },
        ],
        answer: String.raw`La matrice est antisymétrique ($A^T = -A$), donc $\det A = \det A^T = \det(-A) = (-1)^3 \det A = -\det A$, d'où $\det A = 0$.`,
      },
      {
        label: "b",
        statement: String.raw`$$\begin{pmatrix} a^2 & ab & ac \\ ab & b^2 & bc \\ ac & bc & c^2 \end{pmatrix}$$`,
        steps: [
          {
            title: "Chercher une structure dans les colonnes",
            content: String.raw`Écris chaque colonne en mettant un facteur commun en évidence :

$$C_1 = \begin{pmatrix} a^2 \\ ab \\ ac \end{pmatrix} = a \begin{pmatrix} a \\ b \\ c \end{pmatrix}, \quad C_2 = \begin{pmatrix} ab \\ b^2 \\ bc \end{pmatrix} = b \begin{pmatrix} a \\ b \\ c \end{pmatrix}, \quad C_3 = \begin{pmatrix} ac \\ bc \\ c^2 \end{pmatrix} = c \begin{pmatrix} a \\ b \\ c \end{pmatrix}.$$

Les trois colonnes sont toutes des multiples du **même vecteur** $(a, b, c)^T$ : elles sont proportionnelles entre elles.`,
          },
          {
            title: "Sortir les facteurs communs des colonnes",
            content: String.raw`📖 **Rappel du cours :** multiplier une colonne par $k$ multiplie le déterminant par $k$ ; on peut donc « sortir » un facteur commun d'une colonne. Et un déterminant dont deux colonnes sont égales (ou proportionnelles) est nul.

En sortant les facteurs $a$, $b$ et $c$ des colonnes $C_1$, $C_2$, $C_3$ :

$$\det B = abc \begin{vmatrix} a & a & a \\ b & b & b \\ c & c & c \end{vmatrix}.$$`,
          },
          {
            title: "Conclure",
            content: String.raw`Le déterminant restant a **trois colonnes identiques** — en particulier deux colonnes égales — donc il vaut $0$ :

$$\det B = abc \cdot 0 = 0. \; \blacksquare$$

Remarque : si l'un des réels $a$, $b$, $c$ est nul, la colonne correspondante de la matrice de départ est entièrement nulle et le déterminant est nul aussi — la conclusion tient dans tous les cas, sans avoir jamais développé.`,
          },
        ],
        answer: String.raw`Chaque colonne est un multiple du vecteur $(a, b, c)^T$ : $\det B = abc \begin{vmatrix} a & a & a \\ b & b & b \\ c & c & c \end{vmatrix} = 0$ car les colonnes sont identiques.`,
      },
    ],
  },
  {
    id: "3.4",
    chapter: 3,
    title: "Résolution de systèmes par la méthode de Cramer",
    examType: true,
    statement: String.raw`Résolvez les systèmes suivants par la méthode de Cramer. Ici, $m \in \mathbb{R}$ est un paramètre.`,
    method: String.raw`La méthode de Cramer ne s'applique que si le déterminant de la matrice des coefficients est non nul : calcule d'abord $\det A$. Ensuite, chaque inconnue s'obtient comme un quotient de déterminants : au numérateur, on remplace la colonne de l'inconnue par la colonne des termes indépendants. Termine toujours par une vérification en réinjectant la solution dans le système.`,
    theoryRefs: ["Méthode de Cramer", "Développement par cofacteurs", "Propriétés du déterminant"],
    parts: [
      {
        label: "a",
        statement: String.raw`$$\begin{cases} 4x + 3y - 2z = 7 \\ x + y = 5 \\ 3x + z = 4 \end{cases}$$`,
        steps: [
          {
            title: "Poser la matrice des coefficients et calculer son déterminant",
            content: String.raw`📖 **Rappel du cours (méthode de Cramer) :** pour un système $AX = b$ avec $A$ carrée et $\det A \neq 0$, la solution unique est donnée par

$$x_j = \frac{\det A_j}{\det A},$$

où $A_j$ est la matrice $A$ dans laquelle on a remplacé la $j$-ième colonne par $b$.

Ici, en écrivant le système sous forme matricielle (attention aux coefficients nuls : pas de $z$ dans la 2ᵉ équation, pas de $y$ dans la 3ᵉ) :

$$A = \begin{pmatrix} 4 & 3 & -2 \\ 1 & 1 & 0 \\ 3 & 0 & 1 \end{pmatrix}, \qquad b = \begin{pmatrix} 7 \\ 5 \\ 4 \end{pmatrix}.$$

Développons $\det A$ selon la **deuxième ligne** (elle contient un zéro) :

$$\det A = -1 \begin{vmatrix} 3 & -2 \\ 0 & 1 \end{vmatrix} + 1 \begin{vmatrix} 4 & -2 \\ 3 & 1 \end{vmatrix} = -1(3 - 0) + 1(4 + 6) = -3 + 10 = 7.$$

Comme $\det A = 7 \neq 0$, la méthode de Cramer s'applique : le système possède une solution unique.`,
          },
          {
            title: "Calculer x",
            content: String.raw`On remplace la **première colonne** de $A$ par $b$, puis on développe selon la troisième ligne (elle contient un zéro) :

$$\det A_x = \begin{vmatrix} 7 & 3 & -2 \\ 5 & 1 & 0 \\ 4 & 0 & 1 \end{vmatrix} = 4 \begin{vmatrix} 3 & -2 \\ 1 & 0 \end{vmatrix} + 1 \begin{vmatrix} 7 & 3 \\ 5 & 1 \end{vmatrix} = 4(0 + 2) + (7 - 15) = 8 - 8 = 0.$$

Donc :

$$x = \frac{\det A_x}{\det A} = \frac{0}{7} = 0.$$`,
          },
          {
            title: "Calculer y",
            content: String.raw`On remplace la **deuxième colonne** de $A$ par $b$, et on développe selon la deuxième ligne :

$$\det A_y = \begin{vmatrix} 4 & 7 & -2 \\ 1 & 5 & 0 \\ 3 & 4 & 1 \end{vmatrix} = -1 \begin{vmatrix} 7 & -2 \\ 4 & 1 \end{vmatrix} + 5 \begin{vmatrix} 4 & -2 \\ 3 & 1 \end{vmatrix} = -(7 + 8) + 5(4 + 6) = -15 + 50 = 35.$$

Donc :

$$y = \frac{\det A_y}{\det A} = \frac{35}{7} = 5.$$`,
          },
          {
            title: "Calculer z",
            content: String.raw`On remplace la **troisième colonne** de $A$ par $b$, et on développe selon la troisième ligne :

$$\det A_z = \begin{vmatrix} 4 & 3 & 7 \\ 1 & 1 & 5 \\ 3 & 0 & 4 \end{vmatrix} = 3 \begin{vmatrix} 3 & 7 \\ 1 & 5 \end{vmatrix} + 4 \begin{vmatrix} 4 & 3 \\ 1 & 1 \end{vmatrix} = 3(15 - 7) + 4(4 - 3) = 24 + 4 = 28.$$

Donc :

$$z = \frac{\det A_z}{\det A} = \frac{28}{7} = 4.$$`,
          },
          {
            title: "Vérifier la solution",
            content: String.raw`**Vérification :** on réinjecte $(x, y, z)^T = (0, 5, 4)^T$ dans les trois équations :

- $4 \cdot 0 + 3 \cdot 5 - 2 \cdot 4 = 15 - 8 = 7$ ✓
- $0 + 5 = 5$ ✓
- $3 \cdot 0 + 4 = 4$ ✓

La solution est confirmée.`,
          },
        ],
        answer: String.raw`$\det A = 7 \neq 0$ : solution unique $(x, y, z)^T = (0, 5, 4)^T$.`,
      },
      {
        label: "b",
        statement: String.raw`$$\begin{cases} x + my - z = 0 \\ 2x - my + z = 3 \\ -mx + 2y = 3 \end{cases}$$`,
        steps: [
          {
            title: "Poser le système matriciel et calculer le déterminant",
            content: String.raw`La présence du paramètre $m$ ne change rien à la méthode : on calcule les déterminants en traitant $m$ comme un nombre. La matrice des coefficients et le second membre sont :

$$A = \begin{pmatrix} 1 & m & -1 \\ 2 & -m & 1 \\ -m & 2 & 0 \end{pmatrix}, \qquad b = \begin{pmatrix} 0 \\ 3 \\ 3 \end{pmatrix}.$$

Développons $\det A$ selon la **troisième ligne** (elle contient un zéro) :

$$\det A = -m \begin{vmatrix} m & -1 \\ -m & 1 \end{vmatrix} - 2 \begin{vmatrix} 1 & -1 \\ 2 & 1 \end{vmatrix} = -m(m - m) - 2(1 + 2) = 0 - 6 = -6.$$

Résultat remarquable : $\det A = -6 \neq 0$ **quel que soit** $m$. Le système possède donc toujours une solution unique — aucune discussion de cas n'est nécessaire.`,
          },
          {
            title: "Calculer x",
            content: String.raw`On remplace la première colonne par $b$ et on développe selon la **première ligne** (elle commence par un zéro) :

$$\det A_x = \begin{vmatrix} 0 & m & -1 \\ 3 & -m & 1 \\ 3 & 2 & 0 \end{vmatrix} = -m \begin{vmatrix} 3 & 1 \\ 3 & 0 \end{vmatrix} + (-1) \begin{vmatrix} 3 & -m \\ 3 & 2 \end{vmatrix} = -m(0 - 3) - (6 + 3m) = 3m - 6 - 3m = -6.$$

Donc :

$$x = \frac{\det A_x}{\det A} = \frac{-6}{-6} = 1.$$

Remarque : le paramètre $m$ s'est simplifié — $x$ ne dépend pas de $m$.`,
          },
          {
            title: "Calculer y",
            content: String.raw`On remplace la deuxième colonne par $b$ et on développe selon la première ligne :

$$\det A_y = \begin{vmatrix} 1 & 0 & -1 \\ 2 & 3 & 1 \\ -m & 3 & 0 \end{vmatrix} = 1 \begin{vmatrix} 3 & 1 \\ 3 & 0 \end{vmatrix} + (-1) \begin{vmatrix} 2 & 3 \\ -m & 3 \end{vmatrix} = (0 - 3) - (6 + 3m) = -9 - 3m.$$

Donc :

$$y = \frac{\det A_y}{\det A} = \frac{-9 - 3m}{-6} = \frac{3(m + 3)}{6} = \frac{m + 3}{2}.$$`,
          },
          {
            title: "Calculer z",
            content: String.raw`On remplace la troisième colonne par $b$ et on développe selon la première ligne :

$$\det A_z = \begin{vmatrix} 1 & m & 0 \\ 2 & -m & 3 \\ -m & 2 & 3 \end{vmatrix} = 1 \begin{vmatrix} -m & 3 \\ 2 & 3 \end{vmatrix} - m \begin{vmatrix} 2 & 3 \\ -m & 3 \end{vmatrix} = (-3m - 6) - m(6 + 3m) = -3m^2 - 9m - 6.$$

Donc :

$$z = \frac{\det A_z}{\det A} = \frac{-3m^2 - 9m - 6}{-6} = \frac{m^2 + 3m + 2}{2} = \frac{(m+1)(m+2)}{2}.$$`,
          },
          {
            title: "Vérifier la solution",
            content: String.raw`**Vérification** dans les trois équations, avec $x = 1$, $y = \dfrac{m+3}{2}$, $z = \dfrac{m^2 + 3m + 2}{2}$ :

- Équation 1 : $1 + m \cdot \dfrac{m+3}{2} - \dfrac{m^2 + 3m + 2}{2} = 1 + \dfrac{m^2 + 3m - m^2 - 3m - 2}{2} = 1 - 1 = 0$ ✓
- Équation 2 : $2 - \dfrac{m^2 + 3m}{2} + \dfrac{m^2 + 3m + 2}{2} = 2 + \dfrac{2}{2} = 3$ ✓
- Équation 3 : $-m + 2 \cdot \dfrac{m+3}{2} = -m + m + 3 = 3$ ✓

La solution est confirmée pour toute valeur de $m$.`,
          },
        ],
        answer: String.raw`$\det A = -6 \neq 0$ pour tout $m$ : solution unique $x = 1$, $y = \dfrac{m+3}{2}$, $z = \dfrac{m^2 + 3m + 2}{2}$.`,
      },
    ],
  },
  {
    id: "3.5",
    chapter: 3,
    title: "Unicité de la solution d'un système homogène",
    examType: false,
    statement: String.raw`Sans le résoudre, déterminez si chacun des systèmes suivants possède une solution unique.`,
    method: String.raw`Les deux systèmes sont **homogènes** (second membre nul) : ils admettent toujours au moins la solution nulle. La question de l'unicité se ramène donc à un simple calcul de déterminant : solution unique si et seulement si $\det A \neq 0$. Inutile de résoudre quoi que ce soit — un déterminant suffit.`,
    theoryRefs: ["Propriétés du déterminant", "Transformations élémentaires", "Méthode de Cramer"],
    parts: [
      {
        label: "a",
        statement: String.raw`$$\begin{cases} x + 2y + 3z = 0 \\ 4x + 5y + 6z = 0 \\ 7x + 8y + 9z = 0 \end{cases}$$`,
        steps: [
          {
            title: "Ramener la question à un déterminant",
            content: String.raw`📖 **Rappel du cours :** un système carré $AX = b$ possède une solution unique si et seulement si $\det A \neq 0$. Pour un système **homogène** ($b = 0$), la solution nulle $X = 0$ existe toujours ; donc :

- si $\det A \neq 0$ : la solution nulle est **la seule** solution ;
- si $\det A = 0$ : le système est **indéterminé** (une infinité de solutions).

Il suffit donc de calculer le déterminant de $A = \begin{pmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \\ 7 & 8 & 9 \end{pmatrix}$.`,
          },
          {
            title: "Calculer le déterminant par transformations élémentaires",
            content: String.raw`📖 **Rappel du cours :** ajouter à une ligne un multiple d'une autre ligne ne change pas le déterminant.

$$\begin{vmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \\ 7 & 8 & 9 \end{vmatrix} \xrightarrow{L_2 \leftarrow L_2 - L_1} \; \xrightarrow{L_3 \leftarrow L_3 - L_1} \begin{vmatrix} 1 & 2 & 3 \\ 3 & 3 & 3 \\ 6 & 6 & 6 \end{vmatrix}.$$

Les lignes 2 et 3 sont devenues **proportionnelles** ($L_3 = 2L_2$) : le déterminant est nul.

$$\det A = 0.$$

(On peut aussi remarquer directement que $L_1 + L_3 = 2L_2$ : $(1+7, \; 2+8, \; 3+9) = (8, 10, 12) = 2(4, 5, 6)$, donc les lignes sont linéairement dépendantes.)`,
          },
          {
            title: "Conclure",
            content: String.raw`Comme $\det A = 0$, le système homogène ne possède **pas** de solution unique : il est **indéterminé**, avec une infinité de solutions en plus de la solution nulle $(0, 0, 0)^T$.

**Vérification :** on peut exhiber une solution non nulle, par exemple $(x, y, z)^T = (1, -2, 1)^T$ : $1 - 4 + 3 = 0$ ✓, $4 - 10 + 6 = 0$ ✓, $7 - 16 + 9 = 0$ ✓ — la solution nulle n'est donc effectivement pas unique.`,
          },
        ],
        answer: String.raw`$\det A = 0$ : pas de solution unique — le système homogène est indéterminé (une infinité de solutions).`,
      },
      {
        label: "b",
        statement: String.raw`$$\begin{cases} x + 5y - 2z = 0 \\ x + 2y - z = 0 \\ 2x + 7y - 3z = 0 \end{cases}$$`,
        steps: [
          {
            title: "Poser la matrice des coefficients",
            content: String.raw`Même stratégie qu'au point a : le système est homogène, donc tout se joue sur le déterminant de

$$A = \begin{pmatrix} 1 & 5 & -2 \\ 1 & 2 & -1 \\ 2 & 7 & -3 \end{pmatrix}.$$

Avant de développer, cherche une relation évidente entre les lignes : c'est souvent plus rapide qu'un développement par cofacteurs.`,
          },
          {
            title: "Repérer la dépendance entre les lignes",
            content: String.raw`Additionne les deux premières lignes :

$$L_1 + L_2 = (1 + 1, \; 5 + 2, \; -2 - 1) = (2, 7, -3) = L_3.$$

La troisième ligne est la somme des deux premières : les lignes sont **linéairement dépendantes**.

📖 **Rappel du cours :** si une ligne est combinaison linéaire des autres, le déterminant est nul. (En effet, l'opération $L_3 \leftarrow L_3 - L_1 - L_2$ ne change pas le déterminant et produit une ligne entièrement nulle : le développement selon cette ligne nulle donne $0$.)

Donc $\det A = 0$.`,
          },
          {
            title: "Confirmer par le calcul et conclure",
            content: String.raw`**Vérification** par développement selon la première ligne :

$$\det A = 1 \begin{vmatrix} 2 & -1 \\ 7 & -3 \end{vmatrix} - 5 \begin{vmatrix} 1 & -1 \\ 2 & -3 \end{vmatrix} + (-2) \begin{vmatrix} 1 & 2 \\ 2 & 7 \end{vmatrix} = (-6 + 7) - 5(-3 + 2) - 2(7 - 4) = 1 + 5 - 6 = 0 \; ✓$$

Conclusion : $\det A = 0$, donc le système homogène est **indéterminé** — il ne possède pas de solution unique, mais une infinité de solutions.`,
          },
        ],
        answer: String.raw`$\det A = 0$ (car $L_3 = L_1 + L_2$) : pas de solution unique — le système homogène est indéterminé.`,
      },
    ],
  },
];
