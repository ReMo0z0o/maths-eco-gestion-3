import type { Demonstration } from "./types";

export const demos: Demonstration[] = [
  {
    id: "3.1",
    chapter: 3,
    title: "Les deux lois des cofacteurs et A𝒜ᵀ = (dét A)·I",
    slideRef: "Slides 113–114",
    exam: "Donner les deux lois des cofacteurs (sans preuve) et prouver que A·𝒜ᵀ = (dtm A)·I",
    statement: String.raw`Soit $A$ une matrice carrée de dimension $p$. On note $M_{ij}$ le mineur de l'élément $a_{ij}$, $c_{ij} = (-1)^{i+j} M_{ij}$ son cofacteur, et $\mathcal{A}$ la **matrice des cofacteurs** (comatrice) de $A$, dont l'élément $(i,j)$ est $c_{ij}$.

**Première loi des cofacteurs (slide 113).** Le déterminant d'une matrice carrée est égal à la somme des produits des éléments d'une ligne (ou d'une colonne) quelconque par leurs cofacteurs respectifs : pour toute ligne $i$,

$$\det A = \sum_{k=1}^{p} a_{ik}\, c_{ik}.$$

**Deuxième loi des cofacteurs (slide 113).** La somme des produits des éléments d'une ligne (resp. d'une colonne) par les cofacteurs des éléments correspondants d'une **autre** ligne (resp. colonne) est nulle : pour $i \neq j$,

$$\sum_{k=1}^{p} a_{ik}\, c_{jk} = 0.$$

**Théorème (slide 114).** Ces deux lois se résument en une seule égalité matricielle :

$$A\,\mathcal{A}^{T} = (\det A)\, I = \mathcal{A}^{T} A.$$

À l'examen : énoncer les deux lois **sans preuve**, puis prouver la première égalité $A\,\mathcal{A}^{T} = (\det A)\, I$.`,
    intuition: String.raw`L'élément $(i,j)$ du produit $A\,\mathcal{A}^{T}$ est une somme « éléments de la ligne $i$ × cofacteurs de la ligne $j$ » : la première loi lui donne la valeur $\det A$ quand $i = j$, la deuxième loi l'annule quand $i \neq j$. La matrice obtenue porte donc $\det A$ sur la diagonale et $0$ ailleurs — c'est exactement $(\det A)\, I$.`,
    steps: [
      {
        title: "Les acteurs : mineur, cofacteur, comatrice",
        content: String.raw`Avant de te lancer, assure-toi que les définitions sont solides — toute la preuve n'est qu'un jeu de définitions plus les deux lois.

📖 **Rappels.** Pour une matrice carrée $A$ de dimension $p$ :

- le **mineur** $M_{ij}$ est le déterminant de la sous-matrice obtenue en barrant la ligne $i$ et la colonne $j$ de $A$ ;
- le **cofacteur** de $a_{ij}$ est $c_{ij} = (-1)^{i+j} M_{ij}$ : le mineur affecté du signe du « damier » ;
- la **comatrice** $\mathcal{A}$ (lue « A ronde ») est la matrice dont l'élément $(i,j)$ est le cofacteur $c_{ij}$.

Exemple en dimension 2 : pour $A = \begin{pmatrix} a & b \\ c & d \end{pmatrix}$, le mineur de $a$ est $d$ (signe $+$), celui de $b$ est $c$ (signe $-$), etc., d'où $\mathcal{A} = \begin{pmatrix} d & -c \\ -b & a \end{pmatrix}$.

Note de notation : les slides écrivent $\operatorname{dtm} A$ pour le déterminant ; on écrit ici $\det A$, c'est exactement la même chose.`,
      },
      {
        title: "Comprendre les deux lois (et d'où vient la deuxième)",
        content: String.raw`La **première loi** généralise la définition du déterminant : au lieu de développer obligatoirement selon la première ligne, tu peux développer selon **n'importe quelle** ligne ou colonne — toutes donnent la même valeur. (Stratégie de calcul : choisis celle qui contient le plus de zéros, chaque zéro tue un terme.)

La **deuxième loi** est plus surprenante : éléments d'une ligne $i$ multipliés par les cofacteurs d'une **autre** ligne $j$ → total nul. L'intuition donnée au cours : les cofacteurs de la ligne $j$ ne « voient » pas la ligne $j$, puisqu'elle est barrée dans chacun de leurs mineurs. La somme $\sum_k a_{ik}\, c_{jk}$ est donc exactement le développement, selon sa ligne $j$, de la matrice où l'on a **remplacé la ligne $j$ par la ligne $i$**. Cette matrice a deux lignes égales, donc son déterminant est nul.

À l'examen, ces deux lois sont à **énoncer sans preuve** — mais comprendre d'où vient la deuxième t'évitera de la déformer.`,
      },
      {
        title: "La stratégie : comparer élément par élément",
        content: String.raw`Deux matrices sont égales quand tous leurs éléments correspondants coïncident. La stratégie est donc limpide : calculer l'élément $(i,j)$ **quelconque** du produit $A\,\mathcal{A}^{T}$ et montrer qu'il vaut $\det A$ si $i = j$, et $0$ sinon — c'est mot pour mot la description de la matrice $(\det A)\, I$.

📖 **Rappel (produit matriciel).** L'élément $(i,j)$ d'un produit $MN$ s'obtient en parcourant la ligne $i$ de $M$ et la colonne $j$ de $N$ :

$$(MN)_{ij} = \sum_{k=1}^{p} (M)_{ik}\, (N)_{kj}.$$

Toute la preuve consiste à appliquer cette définition, puis à reconnaître les sommes dont parlent les deux lois.`,
      },
      {
        title: "Le calcul : retourner la transposée",
        content: String.raw`Applique la définition du produit à $M = A$ et $N = \mathcal{A}^{T}$ :

$$\big(A\,\mathcal{A}^{T}\big)_{ij} = \sum_{k=1}^{p} a_{ik}\, \big(\mathcal{A}^{T}\big)_{kj}.$$

📖 **Rappel (transposée).** Transposer échange les indices : $\big(\mathcal{A}^{T}\big)_{kj} = (\mathcal{A})_{jk}$. Et par définition de la comatrice, $(\mathcal{A})_{jk} = c_{jk}$, le cofacteur de $a_{jk}$. La somme devient

$$\big(A\,\mathcal{A}^{T}\big)_{ij} = \sum_{k=1}^{p} a_{ik}\, c_{jk}.$$

Lis bien cette somme, c'est le moment clé de la preuve : **éléments de la ligne $i$**, **cofacteurs de la ligne $j$**. On parcourt la ligne $i$ de $A$ en multipliant chaque élément par le cofacteur de l'élément situé juste en dessous ou au-dessus, dans la ligne $j$.`,
      },
      {
        title: "Deux cas, deux lois : diagonale et hors diagonale",
        content: String.raw`**Cas $i = j$ (éléments diagonaux).** La somme devient $\sum_k a_{ik}\, c_{ik}$ : éléments de la ligne $i$ multipliés par leurs **propres** cofacteurs. C'est mot pour mot la première loi : la somme vaut $\det A$.

**Cas $i \neq j$ (hors diagonale).** Éléments de la ligne $i$, cofacteurs d'une **autre** ligne $j$ : mot pour mot la deuxième loi, la somme est nulle.

Conclusion : $A\,\mathcal{A}^{T}$ porte $\det A$ sur toute la diagonale et $0$ partout ailleurs, c'est-à-dire $(\det A)\, I$. La seconde égalité $\mathcal{A}^{T} A = (\det A)\, I$ se prouve de la même façon en travaillant sur les **colonnes**.

Vérifie tout en dimension 2 :

$$A\,\mathcal{A}^{T} = \begin{pmatrix} a & b \\ c & d \end{pmatrix} \begin{pmatrix} d & -b \\ -c & a \end{pmatrix} = \begin{pmatrix} ad - bc & 0 \\ 0 & ad - bc \end{pmatrix} = (\det A)\, I.$$`,
      },
      {
        title: "Le trésor immédiat : la formule de l'inverse",
        content: String.raw`Cette démonstration rapporte tout de suite une formule fermée pour l'inverse, valable en toute dimension (slide 115) : si $\det A \neq 0$, divise l'égalité $A\,\mathcal{A}^{T} = (\det A)\, I$ par le **nombre** $\det A$ :

$$A \cdot \Big( \frac{1}{\det A}\, \mathcal{A}^{T} \Big) = I, \qquad \text{donc} \qquad A^{-1} = \frac{1}{\det A}\, \mathcal{A}^{T}.$$

En dimension 2, tu retrouves exactement la formule « magique » du chapitre 1 : $A^{-1} = \frac{1}{ad - bc} \begin{pmatrix} d & -b \\ -c & a \end{pmatrix}$ — sauf que maintenant tu sais d'où elle vient. Cette formule resservira dans la démo 3.2 (Cramer) et pour inverser la matrice de Leontief.`,
      },
    ],
    examProof: String.raw`**Première loi des cofacteurs.** Le déterminant d'une matrice carrée est égal à la somme des produits des éléments d'une ligne (ou d'une colonne) quelconque par leurs cofacteurs respectifs : si $A$ est carrée de dimension $p$, pour toute ligne $i$,

$$\det A = \sum_{k=1}^{p} a_{ik}\, c_{ik},$$

où $c_{ik}$ désigne le cofacteur de $a_{ik}$.

**Deuxième loi des cofacteurs.** La somme des produits des éléments d'une ligne (resp. d'une colonne) par les cofacteurs des éléments correspondants d'une autre ligne (resp. colonne) est nulle : pour $i \neq j$,

$$\sum_{k=1}^{p} a_{ik}\, c_{jk} = 0.$$

**Théorème.** Soit $A$ une matrice carrée de dimension $p$ et $\mathcal{A}$ sa matrice des cofacteurs. Alors

$$A\,\mathcal{A}^{T} = (\det A)\, I.$$

**Preuve.** Soient $i$ et $j$ deux indices entre $1$ et $p$. Par définition du produit matriciel,

$$\big(A\,\mathcal{A}^{T}\big)_{ij} = \sum_{k=1}^{p} (A)_{ik}\, \big(\mathcal{A}^{T}\big)_{kj}.$$

Par définition de la transposée, $\big(\mathcal{A}^{T}\big)_{kj} = (\mathcal{A})_{jk}$, et par définition de la matrice des cofacteurs, $(\mathcal{A})_{jk} = c_{jk}$, le cofacteur de $a_{jk}$. Donc

$$\big(A\,\mathcal{A}^{T}\big)_{ij} = \sum_{k=1}^{p} a_{ik}\, c_{jk}.$$

Cette somme est la somme des produits des éléments de la ligne $i$ de $A$ par les cofacteurs des éléments correspondants de la ligne $j$.

**Cas $i = j$.** La somme s'écrit $\sum_{k=1}^{p} a_{ik}\, c_{ik}$ : les éléments de la ligne $i$ sont multipliés par leurs propres cofacteurs. Par la première loi des cofacteurs,

$$\big(A\,\mathcal{A}^{T}\big)_{ii} = \det A.$$

**Cas $i \neq j$.** Les éléments de la ligne $i$ sont multipliés par les cofacteurs des éléments correspondants d'une autre ligne $j$. Par la deuxième loi des cofacteurs,

$$\big(A\,\mathcal{A}^{T}\big)_{ij} = 0.$$

La matrice $A\,\mathcal{A}^{T}$ a donc tous ses éléments diagonaux égaux à $\det A$ et tous ses éléments hors diagonale nuls, c'est-à-dire

$$A\,\mathcal{A}^{T} = (\det A)\, I.$$

(La seconde égalité $\mathcal{A}^{T} A = (\det A)\, I$ se démontre de la même manière en travaillant sur les colonnes.) $\blacksquare$`,
    pitfalls: [
      String.raw`Oublier la transposée : c'est $A\,\mathcal{A}^{T}$, et non $A\,\mathcal{A}$, qui vaut $(\det A)\, I$. Le passage $(\mathcal{A}^{T})_{kj} = (\mathcal{A})_{jk} = c_{jk}$ doit apparaître explicitement dans ta copie — et le même oubli rend fausse la formule de l'inverse $A^{-1} = \frac{1}{\det A}\, \mathcal{A}^{T}$.`,
      String.raw`Ne traiter que la diagonale : montrer $(A\,\mathcal{A}^{T})_{ii} = \det A$ ne suffit pas. Sans le cas $i \neq j$ (deuxième loi → zéros hors diagonale), tu n'as pas prouvé l'égalité des deux matrices.`,
      String.raw`Se lancer dans la preuve des deux lois : l'examen les demande **sans preuve**. En revanche, énonce-les complètement (« ligne **ou colonne** quelconque », cofacteurs « d'une **autre** ligne ») — un énoncé tronqué coûte des points.`,
      String.raw`Confondre mineur et cofacteur : $c_{ij} = (-1)^{i+j} M_{ij}$, pas $M_{ij}$ tout seul. Sans le signe du damier, la comatrice — donc tout le théorème — est fausse. Vérifie en dimension 2 : $\mathcal{A} = \begin{pmatrix} d & -c \\ -b & a \end{pmatrix}$.`,
    ],
  },
  {
    id: "3.2",
    chapter: 3,
    title: "La règle de Cramer",
    slideRef: "Slide 121",
    exam: "Énoncer et prouver la règle de Cramer",
    statement: String.raw`Soit $AX = B$ un système de $n$ équations linéaires à $n$ inconnues, et notons $A = (C_1, \dots, C_n)$ le découpage de $A$ selon ses colonnes. Si $\det A \neq 0$, alors le système possède une solution unique, donnée par

$$AX = B \;\Leftrightarrow\; \begin{cases} x_1 = \dfrac{1}{\det A} \det(B, C_2, \dots, C_n) \\[6pt] x_2 = \dfrac{1}{\det A} \det(C_1, B, \dots, C_n) \\[2pt] \;\; \vdots \\[2pt] x_n = \dfrac{1}{\det A} \det(C_1, \dots, C_{n-1}, B) \end{cases}$$

En français : pour trouver $x_k$, on **remplace la $k$-ième colonne de $A$ par $B$**, on prend le déterminant, et on divise par $\det A$. En notant $A_k$ la matrice ainsi obtenue, la formule s'écrit $x_k = \dfrac{\det A_k}{\det A}$.`,
    intuition: String.raw`Le produit $AX$ n'est rien d'autre que la combinaison linéaire $x_1 C_1 + \dots + x_n C_n$ des colonnes de $A$. En glissant cette expression de $B$ à la place de la colonne $k$ d'un déterminant, la linéarité éclate la somme et tous les termes à colonnes répétées s'annulent : il ne survit que $x_k \det A$, qu'on divise par $\det A \neq 0$.`,
    steps: [
      {
        title: "Le déclic : AX est une combinaison des colonnes",
        content: String.raw`📖 **Rappel.** Si $C_1, \dots, C_n$ sont les colonnes de $A$, alors

$$AX = x_1 C_1 + x_2 C_2 + \dots + x_n C_n.$$

Vérifie-le en dimension 2 : $\begin{pmatrix} 2 & 1 \\ 1 & -1 \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 2x + y \\ x - y \end{pmatrix} = x \begin{pmatrix} 2 \\ 1 \end{pmatrix} + y \begin{pmatrix} 1 \\ -1 \end{pmatrix}$.

Résoudre $AX = B$, c'est donc chercher les coefficients qui expriment $B$ comme combinaison linéaire des colonnes de $A$ :

$$AX = B \iff x_1 C_1 + x_2 C_2 + \dots + x_n C_n = B.$$

Toute la preuve de Cramer repose sur cette lecture « colonnes » du système.`,
      },
      {
        title: "L'arsenal : trois résultats du cours",
        content: String.raw`La preuve mobilise trois résultats déjà vus dans le chapitre — vérifie que tu sais les citer :

- **Linéarité par rapport à une colonne** (propriété 3) : si une colonne est une somme, le déterminant se découpe en autant de déterminants ; et un facteur scalaire dans une colonne sort du déterminant, $\det(r U, C_2, \dots, C_n) = r \det(U, C_2, \dots, C_n)$.
- **Colonne répétée** : un déterminant dont deux colonnes sont égales (ou proportionnelles) est nul.
- **Théorème de la solution unique** (slide 120) : le système carré $AX = B$ possède une solution unique $\iff \det A \neq 0$.

Le troisième garantit l'**existence** de la solution ; les deux premiers vont fabriquer la **formule**.`,
      },
      {
        title: "Partir de l'existence de la solution",
        content: String.raw`Comme $\det A \neq 0$, le théorème de la solution unique affirme que $AX = B$ possède une (unique) solution $(x_1, \dots, x_n)$. Autrement dit, il existe des nombres $x_1, \dots, x_n$ tels que

$$x_1 C_1 + x_2 C_2 + \dots + x_n C_n = B.$$

Ce point de départ est indispensable : dans toute la suite, on manipule ces $x_k$ — encore faut-il qu'ils existent ! La règle de Cramer ne crée pas la solution : elle donne une **formule** pour la solution dont l'existence est déjà acquise.`,
      },
      {
        title: "L'idée : glisser B dans un déterminant",
        content: String.raw`On veut isoler $x_1$. L'astuce : calculer le déterminant de la matrice $(B, C_2, \dots, C_n)$ — celle où $B$ remplace la première colonne de $A$ — en y **substituant** l'expression de $B$ obtenue à l'étape précédente :

$$\det(B, C_2, \dots, C_n) = \det\big(x_1 C_1 + x_2 C_2 + \dots + x_n C_n,\; C_2, \dots, C_n\big).$$

Pourquoi cette idée ? Parce que le déterminant adore les combinaisons linéaires placées dans une colonne : la linéarité va tout éclater, et les colonnes $C_2, \dots, C_n$ déjà présentes dans le déterminant vont tuer presque tous les morceaux.`,
      },
      {
        title: "Éclater par linéarité : les doublons meurent",
        content: String.raw`La première colonne est une somme de $n$ termes : par linéarité, le déterminant se découpe en $n$ morceaux et chaque coefficient $x_k$ sort de son déterminant :

$$x_1 \det(C_1, C_2, \dots, C_n) + x_2 \det(C_2, C_2, \dots, C_n) + \dots + x_n \det(C_n, C_2, \dots, C_n).$$

Regarde chaque morceau à partir du deuxième : dans $\det(C_k, C_2, \dots, C_n)$ avec $k \geq 2$, la colonne $C_k$ figure **deux fois** (en première position et à sa place d'origine). Deux colonnes égales → déterminant nul. Tous ces morceaux meurent ; seul le premier survit.

Exemple en dimension 3 pour bien voir :

$$\det(B, C_2, C_3) = x_1 \underbrace{\det(C_1, C_2, C_3)}_{=\, \det A} + x_2 \underbrace{\det(C_2, C_2, C_3)}_{=\, 0} + x_3 \underbrace{\det(C_3, C_2, C_3)}_{=\, 0}.$$`,
      },
      {
        title: "Diviser, puis recommencer colonne par colonne",
        content: String.raw`Il reste $\det(B, C_2, \dots, C_n) = x_1 \det A$. Comme $\det A \neq 0$, on peut diviser :

$$x_1 = \frac{\det(B, C_2, \dots, C_n)}{\det A}.$$

Rien de spécial à la colonne 1 : le même raisonnement, avec $B$ glissé en colonne $k$, donne $\det(C_1, \dots, C_{k-1}, B, C_{k+1}, \dots, C_n) = x_k \det A$, d'où la formule pour chaque inconnue. La preuve tient en cinq lignes de calcul et trois résultats du cours.`,
      },
      {
        title: "Recul : l'autre chemin et l'usage en pratique",
        content: String.raw`**Autre regard (lien démo 3.1).** Puisque $\det A \neq 0$, on sait aussi que $X = A^{-1} B = \frac{1}{\det A}\, \mathcal{A}^{T} B$. La $k$-ième coordonnée vaut $x_k = \frac{1}{\det A} \sum_{i=1}^{n} c_{ik}\, b_i$, et cette somme est exactement le développement de $\det A_k$ selon sa $k$-ième colonne (celle qui contient $B$) : les cofacteurs de cette colonne dans $A_k$ sont ceux de $A$, car toutes les autres colonnes sont inchangées. Les deux chemins mènent à la même formule.

**En pratique.** Cramer est l'outil roi des systèmes à paramètre (slide 123) : un seul calcul de déterminant, par exemple $\det A = (a-1)^2 (a+1)$, sépare les valeurs « gentilles » du paramètre (solution unique, formules directes) des valeurs critiques à traiter une par une avec Gauss–Jordan. Pense aussi à **vérifier** ta solution dans une équation du système : dix secondes pour sécuriser tous les points.`,
      },
    ],
    examProof: String.raw`**Théorème (règle de Cramer).** Soit $AX = B$ un système de $n$ équations linéaires à $n$ inconnues, où l'on note $C_1, \dots, C_n$ les colonnes de $A$, de sorte que $A = (C_1, \dots, C_n)$. Si $\det A \neq 0$, alors le système possède une solution unique, donnée par

$$x_k = \frac{\det(C_1, \dots, C_{k-1}, B, C_{k+1}, \dots, C_n)}{\det A}, \qquad k = 1, \dots, n,$$

c'est-à-dire que $x_k$ s'obtient en remplaçant la $k$-ième colonne de $A$ par $B$, en prenant le déterminant et en divisant par $\det A$.

**Preuve.** Comme $\det A \neq 0$, le système $AX = B$ possède une solution unique $(x_1, \dots, x_n)$ (théorème de la solution unique d'un système carré). Par définition du produit matriciel, $AX$ est la combinaison linéaire des colonnes de $A$ de coefficients $x_1, \dots, x_n$ ; l'égalité $AX = B$ s'écrit donc

$$x_1 C_1 + x_2 C_2 + \dots + x_n C_n = B.$$

Calculons le déterminant obtenu en remplaçant la première colonne de $A$ par $B$, en y substituant cette expression de $B$ :

$$\det(B, C_2, \dots, C_n) = \det\big(x_1 C_1 + x_2 C_2 + \dots + x_n C_n,\; C_2, \dots, C_n\big).$$

Le déterminant est linéaire par rapport à sa première colonne : il se décompose en $n$ termes et les scalaires $x_k$ sortent,

$$\det(B, C_2, \dots, C_n) = x_1 \det(C_1, C_2, \dots, C_n) + x_2 \det(C_2, C_2, \dots, C_n) + \dots + x_n \det(C_n, C_2, \dots, C_n).$$

Pour $k \geq 2$, le déterminant $\det(C_k, C_2, \dots, C_n)$ possède deux colonnes égales (la colonne $C_k$ y figure deux fois) : il est donc nul. Il ne reste que le premier terme :

$$\det(B, C_2, \dots, C_n) = x_1 \det(C_1, C_2, \dots, C_n) = x_1 \det A.$$

Comme $\det A \neq 0$, on en déduit

$$x_1 = \frac{\det(B, C_2, \dots, C_n)}{\det A}.$$

Le même calcul, mené en remplaçant la $k$-ième colonne de $A$ par $B$, donne pour tout $k$

$$\det(C_1, \dots, C_{k-1}, B, C_{k+1}, \dots, C_n) = x_k \det A,$$

d'où la formule annoncée pour chaque inconnue $x_k$. $\blacksquare$`,
    pitfalls: [
      String.raw`Appliquer Cramer sans l'hypothèse $\det A \neq 0$ : la formule n'a aucun sens si $\det A = 0$ (division par zéro). Dans ce cas, le système a une infinité de solutions ou aucune, et c'est Gauss–Jordan qui tranche — jamais Cramer.`,
      String.raw`Remplacer une **ligne** au lieu d'une **colonne** : c'est la $k$-ième colonne qu'on remplace par $B$, parce que $AX$ est une combinaison linéaire des **colonnes** de $A$ — et c'est bien la colonne $k$ qu'on remplace pour calculer $x_k$, pas une autre.`,
      String.raw`Ne pas justifier la disparition des autres termes : chaque $\det(C_k, C_2, \dots, C_n)$ avec $k \geq 2$ est nul **parce que deux de ses colonnes sont égales**. Cette justification doit figurer dans la copie, sinon le passage de $n$ termes à un seul semble magique.`,
      String.raw`Sauter l'existence de la solution : la preuve commence par « comme $\det A \neq 0$, le système possède une solution unique » (théorème du slide 120). Sans cette étape, les $x_k$ que l'on manipule ne sont même pas définis.`,
    ],
  },
  {
    id: "3.3",
    chapter: 3,
    title: "Formule alternative de (I − A)⁻¹",
    slideRef: "Slide 134",
    exam: "Prouver la formule (I − A)⁻¹ = I + A + A² + …",
    statement: String.raw`**Théorème (slide 134).** Soit $A$ une matrice carrée telle que $A^m \to O$ lorsque $m \to \infty$ (chaque élément de $A^m$ tend vers $0$). Alors la matrice $I - A$ est **inversible** et

$$(I - A)^{-1} = I + A + A^2 + A^3 + \dots$$`,
    intuition: String.raw`C'est la série géométrique $\frac{1}{1-a} = 1 + a + a^2 + \dots$ transposée aux matrices, l'hypothèse $A^m \to O$ jouant le rôle de $|a| < 1$. Deux temps : le système homogène $(I - A)X = O$ force $X = A^m X \to O$, donc $I - A$ est inversible ; puis l'identité télescopique $(I - A)(I + A + \dots + A^m) = I - A^{m+1}$ donne la formule en passant à la limite.`,
    steps: [
      {
        title: "Pourquoi cette formule ? Le contexte Leontief",
        content: String.raw`Cette démonstration est la conclusion théorique du modèle de Leontief. Dans une économie à $n$ secteurs, la production totale $X$ nécessaire pour satisfaire une demande finale $D$ vérifie $(I - A)X = D$, où $A$ est la matrice input-output et $I - A$ la **matrice de Leontief**. Si $I - A$ est inversible, $X = (I - A)^{-1} D$.

La formule du théorème donne alors la lecture économique en « boule de neige » (slide 135) :

$$X = (I + A + A^2 + \dots) D = D + AD + A^2 D + \dots$$

- $D$ : ce que les consommateurs demandent ;
- $AD$ : les inputs nécessaires pour produire $D$ ;
- $A^2 D$ : les inputs nécessaires pour produire ces inputs… et ainsi de suite.

L'hypothèse $A^m \to O$ n'a rien d'exotique : le cours montre (slide 132) que toute matrice **productive** (éléments $\geq 0$ et somme de chaque colonne $< 1$) la vérifie. Bonus : tous les termes de la somme sont $\geq 0$, donc $X \geq 0$ — heureusement, une production négative n'aurait aucun sens.`,
      },
      {
        title: "L'analogie qui guide tout : la série géométrique",
        content: String.raw`📖 **Rappel.** Pour un nombre réel $a$ :

$$\frac{1}{1-a} = 1 + a + a^2 + a^3 + \dots \qquad \text{si } |a| < 1.$$

Le théorème en est la version matricielle : $1$ devient $I$, $a$ devient $A$, et la condition $|a| < 1$ — qui équivaut à $a^m \to 0$ — devient $A^m \to O$. La preuve copie d'ailleurs celle du cas réel, fondée sur l'identité $(1-a)(1 + a + \dots + a^m) = 1 - a^{m+1}$.

Sens précis de $A^m \to O$ : **chaque élément** de la matrice $A^m$ tend vers $0$ quand $m \to \infty$. Exemple : $A = \begin{pmatrix} 0{,}5 & 0 \\ 0 & 0{,}5 \end{pmatrix}$ donne $A^m = \begin{pmatrix} 0{,}5^m & 0 \\ 0 & 0{,}5^m \end{pmatrix} \to O$.`,
      },
      {
        title: "Le plan en deux temps (et l'ordre compte)",
        content: String.raw`La preuve du cours est en **deux temps** :

- **Temps 1** : montrer que $I - A$ est inversible ;
- **Temps 2** : établir l'identité télescopique, la multiplier par $(I - A)^{-1}$ et passer à la limite $m \to \infty$.

Pourquoi cet ordre n'est pas négociable ? Parce que le temps 2 **utilise** $(I - A)^{-1}$ : impossible de multiplier par l'inverse tant qu'on ne sait pas qu'il existe. Foncer sur la télescopie et « diviser par $I - A$ » sans justification est l'erreur de logique classique sur cette démo.`,
      },
      {
        title: "Temps 1 : traduire l'inversibilité en système homogène",
        content: String.raw`📖 **Rappel (chaîne d'équivalences du chapitre).** Pour une matrice carrée $M$ :

$$M \text{ inversible} \iff \det M \neq 0 \iff MX = O \text{ admet } X = O \text{ pour unique solution.}$$

La deuxième équivalence est le théorème de la solution unique (slide 120) appliqué au second membre $B = O$ : le système homogène possède toujours la solution $X = O$ ; elle est **unique** exactement quand le déterminant est non nul.

Pour prouver que $I - A$ est inversible, il suffit donc de montrer que $(I - A)X = O$ entraîne $X = O$.`,
      },
      {
        title: "Temps 1 (suite) : la réinjection X = AX",
        content: String.raw`Suppose $(I - A)X = O$, c'est-à-dire $X = AX$. L'astuce : **réinjecter sans cesse** cette égalité dans elle-même. Comme $X = AX$, on a $AX = A(AX) = A^2 X$, puis $A^2 X = A^3 X$, etc. :

$$X = AX = A^2 X = A^3 X = \dots = A^m X \qquad \text{pour tout } m.$$

Fais tendre $m \to \infty$ : comme $A^m \to O$, le membre de droite $A^m X$ tend vers $O$. Mais le membre de gauche vaut $X$, qui **ne dépend pas de $m$** ! La seule issue : $X = O$.

Le système homogène $(I - A)X = O$ n'a donc que la solution nulle : $\det(I - A) \neq 0$ et $I - A$ est inversible. Premier temps acquis.`,
      },
      {
        title: "Temps 2 : l'identité télescopique",
        content: String.raw`Développe le produit $(I - A)(I + A + A^2 + \dots + A^m)$ en distribuant $I$ puis $-A$ :

$$(I - A)(I + A + \dots + A^m) = (I + A + A^2 + \dots + A^m) - (A + A^2 + \dots + A^m + A^{m+1}).$$

Tout se simplifie deux à deux — chaque puissance $A, A^2, \dots, A^m$ apparaît une fois avec le signe $+$ et une fois avec le signe $-$ — sauf les deux extrémités :

$$(I - A)(I + A + \dots + A^m) = I - A^{m+1}.$$

Vérifie sur $m = 1$ : $(I - A)(I + A) = I + A - A - A^2 = I - A^2$. C'est l'identité remarquable $(1-a)(1+a) = 1 - a^2$, version matrices.`,
      },
      {
        title: "Temps 2 (fin) : isoler la somme et passer à la limite",
        content: String.raw`Comme $I - A$ est inversible (temps 1), multiplie l'identité à gauche par $(I - A)^{-1}$ :

$$I + A + A^2 + \dots + A^m = (I - A)^{-1} (I - A^{m+1}).$$

Fais tendre $m \to \infty$ : $A^{m+1} \to O$, donc $I - A^{m+1} \to I$, et le membre de droite tend vers $(I - A)^{-1}$. Les sommes partielles $I + A + \dots + A^m$ convergent donc, et leur limite — c'est le sens de la somme infinie — vaut

$$I + A + A^2 + A^3 + \dots = (I - A)^{-1}.$$

En pratique (exercice 3.9), une somme tronquée comme $I + A + A^2$ fournit une **approximation par défaut** de $(I - A)^{-1}$ — utile pour estimer la production sans inverser la matrice.`,
      },
      {
        title: "Recul : pourquoi l'hypothèse est indispensable",
        content: String.raw`Sans l'hypothèse $A^m \to O$, tout s'écroule. Prends $A = 2I$ : la matrice $I - A = -I$ est pourtant inversible, mais la série $I + A + A^2 + \dots = (1 + 2 + 4 + 8 + \dots) I$ diverge — la formule n'a aucun sens. C'est l'analogue exact de $\frac{1}{1-2} = -1$, que la série divergente $1 + 2 + 4 + \dots$ est incapable de retrouver.

Moralité pour ta copie : cite l'hypothèse **dès la première ligne**, et utilise-la aux deux endroits précis où elle sert — $A^m X \to O$ au temps 1, $A^{m+1} \to O$ au temps 2.`,
      },
    ],
    examProof: String.raw`**Théorème.** Soit $A$ une matrice carrée telle que $A^m \to O$ lorsque $m \to \infty$. Alors $I - A$ est inversible et

$$(I - A)^{-1} = I + A + A^2 + A^3 + \dots$$

**Preuve.**

**Première étape : $I - A$ est inversible.** On sait que $I - A$ est inversible si et seulement si $\det(I - A) \neq 0$, ce qui équivaut à dire que le système homogène $(I - A)X = O$ admet $X = O$ pour unique solution.

Soit donc $X$ tel que $(I - A)X = O$, c'est-à-dire $X = AX$. En réinjectant cette égalité dans elle-même, on obtient pour tout entier $m$ :

$$X = AX = A(AX) = A^2 X = \dots = A^m X.$$

Or $A^m \to O$ lorsque $m \to \infty$, donc $A^m X \to O$. Comme $X = A^m X$ pour tout $m$ et que $X$ ne dépend pas de $m$, il vient $X = O$.

Le système $(I - A)X = O$ n'admet donc que la solution nulle : $\det(I - A) \neq 0$ et $I - A$ est inversible.

**Deuxième étape : la formule.** Pour tout entier $m$, on développe le produit :

$$(I - A)\big(I + A + A^2 + \dots + A^m\big) = \big(I + A + A^2 + \dots + A^m\big) - \big(A + A^2 + \dots + A^m + A^{m+1}\big) = I - A^{m+1},$$

tous les termes intermédiaires se simplifiant deux à deux. Comme $I - A$ est inversible (première étape), on peut multiplier cette égalité à gauche par $(I - A)^{-1}$ :

$$I + A + A^2 + \dots + A^m = (I - A)^{-1} \big(I - A^{m+1}\big).$$

Lorsque $m \to \infty$, on a $A^{m+1} \to O$, donc $I - A^{m+1} \to I$, et le membre de droite tend vers $(I - A)^{-1}$. Les sommes partielles $I + A + \dots + A^m$ convergent donc vers $(I - A)^{-1}$, c'est-à-dire

$$I + A + A^2 + A^3 + \dots = (I - A)^{-1}. \qquad \blacksquare$$`,
    pitfalls: [
      String.raw`Oublier l'hypothèse $A^m \to O$, ou oublier de l'utiliser : sans elle, le théorème est faux — pour $A = 2I$, la matrice $I - A = -I$ est inversible mais la série $I + A + A^2 + \dots$ diverge. L'hypothèse sert exactement deux fois : $A^m X \to O$ (inversibilité) et $A^{m+1} \to O$ (limite).`,
      String.raw`Utiliser $(I - A)^{-1}$ avant d'avoir prouvé son existence : l'ordre des deux étapes n'est pas décoratif. Une copie qui part de l'identité télescopique et « divise par $I - A$ » sans avoir établi l'inversibilité est un raisonnement incomplet.`,
      String.raw`Affirmer la télescopie sans la montrer : développe explicitement $(I + A + \dots + A^m) - (A + \dots + A^{m+1})$ et précise que les termes se simplifient deux à deux. Le correcteur veut voir le calcul, pas seulement le résultat $I - A^{m+1}$.`,
      String.raw`Conclure $X = O$ trop vite au temps 1 : l'argument complet est « $X = A^m X$ pour **tout** $m$, le membre de droite tend vers $O$, et $X$ ne dépend pas de $m$, donc $X = O$ ». Écrire seulement $X = AX$ puis affirmer $X = O$ ne prouve rien.`,
    ],
  },
];
