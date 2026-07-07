import type { Demonstration } from "./types";

export const demos: Demonstration[] = [
  {
    id: "1.1",
    chapter: 1,
    title: "Associativité du produit matriciel",
    slideRef: "Slide 31",
    exam: "Prouver l'associativité du produit matriciel : (AB)C = A(BC)",
    statement: String.raw`**Théorème (associativité du produit matriciel).** Soient $A$ une matrice de dimension $(p \times n)$, $B$ une matrice de dimension $(n \times q)$ et $C$ une matrice de dimension $(q \times r)$. Alors les produits $(AB)C$ et $A(BC)$ sont définis, de même dimension $(p \times r)$, et

$$ (AB)C = A(BC). $$

On peut donc écrire ce produit $ABC$, sans parenthèses.`,
    intuition: String.raw`On compare les deux membres élément par élément : chacun se déplie en une **double somme** des mêmes nombres $a_{ik}\, b_{kl}\, c_{lj}$. Comme il s'agit de sommes **finies** de nombres réels, on peut permuter l'ordre des deux sommations — et les deux parenthésages donnent exactement le même élément $(i, j)$.`,
    steps: [
      {
        title: "La stratégie : montrer une égalité de matrices",
        content: String.raw`📖 **Rappel du cours :** deux matrices sont égales si et seulement si elles ont la **même dimension** et le **même élément en chaque position** $(i, j)$.

Le plan de la preuve découle directement de ce rappel :

- **Étape A** — vérifier que $(AB)C$ et $A(BC)$ existent et ont la même dimension ;
- **Étape B** — montrer que $[(AB)C]_{ij} = [A(BC)]_{ij}$ pour tout couple $(i, j)$.

C'est la « méthode universelle » des preuves du chapitre 1 : on écrit l'élément général avec la définition du produit, on manipule la somme, puis on reconnaît le membre de droite. Presque toutes les démonstrations d'examen de ce chapitre suivent ce squelette — autant le maîtriser ici une fois pour toutes.`,
      },
      {
        title: "Étape A — poser les dimensions et vérifier la compatibilité",
        content: String.raw`On pose $A$ de dimension $(p \times n)$, $B$ de dimension $(n \times q)$ et $C$ de dimension $(q \times r)$ : chaque paire consécutive est compatible.

📖 **Rappel :** le produit $(p \times n)(n \times q)$ existe parce que les deux $n$ du milieu coïncident, et le résultat prend les dimensions extérieures : $(p \times q)$.

- À gauche : $AB$ est de dimension $(p \times q)$, donc $(AB)C$ est $(p \times q)(q \times r) \to (p \times r)$.
- À droite : $BC$ est de dimension $(n \times r)$, donc $A(BC)$ est $(p \times n)(n \times r) \to (p \times r)$.

Les deux membres ont bien la même dimension $(p \times r)$. Ce petit paragraphe **doit** figurer sur ta copie : sans lui, l'égalité des éléments de l'étape B ne suffirait pas à conclure que les matrices sont égales.`,
      },
      {
        title: "Étape B — écrire l'élément général du membre de gauche",
        content: String.raw`📖 **Rappel (définition du produit) :** si $C = AB$, alors $c_{ij} = \sum_{k=1}^{n} a_{ik}\, b_{kj}$ — ligne $i$ de $A$ contre colonne $j$ de $B$.

On applique cette définition au produit de $(AB)$ par $C$. Les colonnes de $AB$ et les lignes de $C$ sont numérotées par un indice $l$ qui va de $1$ à $q$ :

$$ [(AB)C]_{ij} = \sum_{l=1}^{q} (AB)_{il}\, c_{lj} $$

Puis on remplace $(AB)_{il}$ par sa propre définition — une somme sur un indice $k$ allant de $1$ à $n$, le nombre de colonnes de $A$ :

$$ [(AB)C]_{ij} = \sum_{l=1}^{q} \Bigl( \sum_{k=1}^{n} a_{ik}\, b_{kl} \Bigr) c_{lj} $$

Remarque l'hygiène des indices : $k$ relie $A$ et $B$, $l$ relie $B$ et $C$, et il faut **deux lettres différentes** pour les deux sommes. Utiliser la même lettre deux fois est l'erreur d'indices la plus fréquente sur cette preuve.`,
      },
      {
        title: "Mettre la double somme à plat",
        content: String.raw`Dans la parenthèse, $\sum_{k=1}^{n} a_{ik}\, b_{kl}$ est un **nombre**, multiplié par le nombre $c_{lj}$. La distributivité dans $\mathbb{R}$ permet de faire entrer $c_{lj}$ dans la somme :

$$ \Bigl( \sum_{k=1}^{n} a_{ik}\, b_{kl} \Bigr) c_{lj} = \sum_{k=1}^{n} a_{ik}\, b_{kl}\, c_{lj} $$

d'où, en réinjectant dans la somme sur $l$ :

$$ [(AB)C]_{ij} = \sum_{l=1}^{q} \sum_{k=1}^{n} a_{ik}\, b_{kl}\, c_{lj} $$

Lis bien ce que dit cette formule : on additionne le nombre $a_{ik}\, b_{kl}\, c_{lj}$ pour **toutes les paires** $(k, l)$ possibles — soit un tableau de $n \times q$ termes. À partir de là, la façon de regrouper ces termes n'a plus aucune importance : c'est exactement ce qu'on exploite à l'étape suivante.`,
      },
      {
        title: "L'étape clé — permuter les deux sommes (et le justifier)",
        content: String.raw`C'est le cœur de la preuve. La double somme porte sur un nombre **fini** de termes, qui sont des **nombres réels** : comme l'addition dans $\mathbb{R}$ est commutative et associative, on peut additionner ces $n \times q$ termes dans n'importe quel ordre.

Image mentale : range les termes dans un tableau, $k$ pour les lignes et $l$ pour les colonnes. Sommer colonne par colonne ($\sum_l$ puis $\sum_k$) ou ligne par ligne ($\sum_k$ puis $\sum_l$) donne le même total. Mini-exemple avec un tableau $2 \times 2$ de termes $t_{kl}$ : $(t_{11} + t_{21}) + (t_{12} + t_{22}) = (t_{11} + t_{12}) + (t_{21} + t_{22})$.

$$ \sum_{l=1}^{q} \sum_{k=1}^{n} a_{ik}\, b_{kl}\, c_{lj} = \sum_{k=1}^{n} \sum_{l=1}^{q} a_{ik}\, b_{kl}\, c_{lj} $$

**Attention :** on permute ici des sommes de **nombres**, jamais des **matrices**. Le produit matriciel n'est pas commutatif ($AB \neq BA$ en général), mais cela n'intervient pas : à l'intérieur des sommes, $a_{ik}$, $b_{kl}$ et $c_{lj}$ sont de simples réels. Cette phrase de justification vaut des points — écris-la toujours.`,
      },
      {
        title: "Factoriser, reconnaître A(BC) et conclure",
        content: String.raw`Dans la somme intérieure $\sum_{l=1}^{q} a_{ik}\, b_{kl}\, c_{lj}$, le facteur $a_{ik}$ ne dépend pas de l'indice $l$ : on peut le mettre en évidence (distributivité, encore) :

$$ \sum_{k=1}^{n} \sum_{l=1}^{q} a_{ik}\, b_{kl}\, c_{lj} = \sum_{k=1}^{n} a_{ik} \Bigl( \sum_{l=1}^{q} b_{kl}\, c_{lj} \Bigr) $$

Et là, coup d'œil de pro : la parenthèse est **exactement** la définition de l'élément $(k, j)$ du produit $BC$ (ligne $k$ de $B$ contre colonne $j$ de $C$). Donc

$$ [(AB)C]_{ij} = \sum_{k=1}^{n} a_{ik}\, (BC)_{kj} = [A(BC)]_{ij} $$

où la dernière égalité est, une fois de plus, la définition du produit — ligne $i$ de $A$ contre colonne $j$ de $BC$. Les éléments coïncident en toute position $(i, j)$, les dimensions aussi : les deux matrices sont égales.

C'est ce théorème qui autorise à écrire $ABC$ sans parenthèses, et qui donne un sens aux puissances d'une matrice carrée : $A^3 = A^2 A = A A^2$.`,
      },
    ],
    examProof: String.raw`**Théorème (associativité du produit matriciel).** Soient $A$ de dimension $(p \times n)$, $B$ de dimension $(n \times q)$ et $C$ de dimension $(q \times r)$. Alors

$$ (AB)C = A(BC). $$

**Preuve.** Le produit $AB$ est défini et de dimension $(p \times q)$, donc $(AB)C$ est défini et de dimension $(p \times r)$. De même, $BC$ est défini et de dimension $(n \times r)$, donc $A(BC)$ est défini et de dimension $(p \times r)$. Les deux membres ayant la même dimension, il suffit de montrer que leurs éléments coïncident en toute position $(i, j)$, avec $1 \le i \le p$ et $1 \le j \le r$.

Notons $a_{ik}$, $b_{kl}$ et $c_{lj}$ les éléments généraux de $A$, $B$ et $C$. Par définition du produit matriciel,

$$ [(AB)C]_{ij} = \sum_{l=1}^{q} (AB)_{il}\, c_{lj} = \sum_{l=1}^{q} \Bigl( \sum_{k=1}^{n} a_{ik}\, b_{kl} \Bigr) c_{lj}. \qquad (1) $$

En distribuant $c_{lj}$ sur la somme intérieure, il vient

$$ [(AB)C]_{ij} = \sum_{l=1}^{q} \sum_{k=1}^{n} a_{ik}\, b_{kl}\, c_{lj} = \sum_{k=1}^{n} \sum_{l=1}^{q} a_{ik}\, b_{kl}\, c_{lj}, \qquad (2) $$

la permutation des deux sommations étant licite puisqu'il s'agit de sommes finies de nombres réels (commutativité et associativité de l'addition dans $\mathbb{R}$).

Dans la somme sur $l$, le facteur $a_{ik}$ ne dépend pas de $l$ ; on le met en évidence :

$$ [(AB)C]_{ij} = \sum_{k=1}^{n} a_{ik} \Bigl( \sum_{l=1}^{q} b_{kl}\, c_{lj} \Bigr) = \sum_{k=1}^{n} a_{ik}\, (BC)_{kj} = [A(BC)]_{ij}, \qquad (3) $$

où l'on reconnaît successivement la définition de l'élément $(k, j)$ du produit $BC$, puis celle de l'élément $(i, j)$ du produit $A(BC)$.

Les éléments $(i, j)$ des deux membres coïncident pour tous les indices $i$ et $j$. Les deux matrices, de même dimension $(p \times r)$, sont donc égales : $(AB)C = A(BC)$. $\blacksquare$`,
    pitfalls: [
      String.raw`Oublier l'argument des **dimensions** : avant de comparer les éléments, il faut dire que $(AB)C$ et $A(BC)$ existent et ont la même dimension $(p \times r)$. Une égalité de matrices sans égalité des dimensions n'a pas de sens — ce paragraphe d'ouverture rapporte des points faciles.`,
      String.raw`Permuter les deux sommes **sans justification**. La phrase attendue : « sommes finies de nombres réels, donc l'ordre de sommation est indifférent (commutativité et associativité de l'addition dans $\mathbb{R}$) ». Sans elle, l'étape centrale de la preuve n'est pas justifiée.`,
      String.raw`Utiliser la **même lettre** pour les deux indices de sommation, ou intervertir leurs bornes : $k$ relie $A$ et $B$ et va de $1$ à $n$ (colonnes de $A$), $l$ relie $B$ et $C$ et va de $1$ à $q$ (colonnes de $B$). Une seule lettre pour deux sommes rend le calcul illisible et faux.`,
      String.raw`Croire (ou laisser croire) qu'on a utilisé la commutativité **des matrices** : nulle part on n'échange $A$, $B$ ou $C$ entre elles. On ne réarrange que des **nombres** à l'intérieur de sommes — le produit matriciel, lui, reste non commutatif ($AB \neq BA$ en général).`,
    ],
  },
  {
    id: "1.2",
    chapter: 1,
    title: "Transposée d'un produit : (AB)ᵀ = BᵀAᵀ",
    slideRef: "Slide 39",
    exam: "Démontrer que (AB)ᵀ = BᵀAᵀ",
    statement: String.raw`**Théorème (transposée d'un produit).** Soient $A$ de dimension $(p \times n)$ et $B$ de dimension $(n \times q)$. Alors

$$ (AB)^T = B^T A^T. $$

La transposée d'un produit est le produit des transposées, **dans l'ordre inverse**.`,
    intuition: String.raw`On calcule l'élément $(i, j)$ des deux membres : à gauche, la définition de la transposée échange les indices, puis celle du produit donne $\sum_k a_{jk}\, b_{ki}$. En réécrivant chaque facteur à l'aide de $A^T$ et $B^T$, on voit apparaître le motif $(\cdot)_{ik}\,(\cdot)_{kj}$ qui définit un produit — et ce motif ne peut se lire que dans l'ordre $B^T A^T$.`,
    steps: [
      {
        title: "Comprendre pourquoi l'ordre doit s'inverser",
        content: String.raw`📖 **Rappel (transposée) :** $A^T$ s'obtient en écrivant les lignes de $A$ en colonnes. Si $A$ est de dimension $(p \times n)$, alors $A^T$ est de dimension $(n \times p)$, et l'élément général vérifie $(A^T)_{ij} = a_{ji}$ : les deux indices s'échangent.

Avant tout calcul, regarde les dimensions — elles montrent que l'ordre inversé est **le seul possible** :

- $AB$ est de dimension $(p \times q)$, donc $(AB)^T$ est de dimension $(q \times p)$ ;
- $B^T$ est $(q \times n)$ et $A^T$ est $(n \times p)$ : le produit $B^T A^T$ existe et est de dimension $(q \times p)$ — parfait ;
- au contraire, $A^T B^T$ serait $(n \times p)(q \times n)$ : produit **impossible** dès que $p \neq q$.

La formule « naïve » $(AB)^T = A^T B^T$ ne peut donc même pas s'écrire en général. Retiens le parallèle avec l'inverse : $(AB)^{-1} = B^{-1} A^{-1}$ — même renversement de l'ordre.`,
      },
      {
        title: "Le plan : encore la méthode élément par élément",
        content: String.raw`📖 **Rappel :** deux matrices de même dimension sont égales si et seulement si tous leurs éléments correspondants coïncident.

Les deux membres ont la même dimension $(q \times p)$. Pour prouver l'égalité, il suffit donc de montrer que, pour tout $i$ entre $1$ et $q$ et tout $j$ entre $1$ et $p$ :

$$ [(AB)^T]_{ij} = [B^T A^T]_{ij} $$

Fais attention au rôle inhabituel des lettres : à cause de la transposée, $i$ repère ici une **colonne** de $AB$ et $j$ une **ligne** de $AB$. C'est précisément ce chassé-croisé d'indices que la preuve exploite — pose-le proprement dès le départ pour ne pas te perdre.`,
      },
      {
        title: "Membre de gauche : dérouler les deux définitions",
        content: String.raw`On part de $[(AB)^T]_{ij}$ et on applique les définitions, une par une.

D'abord la **transposée** : l'élément $(i, j)$ de $M^T$ est l'élément $(j, i)$ de $M$. Donc $[(AB)^T]_{ij} = (AB)_{ji}$.

Ensuite le **produit** : l'élément $(j, i)$ de $AB$ se calcule avec la ligne $j$ de $A$ et la colonne $i$ de $B$ :

$$ [(AB)^T]_{ij} = (AB)_{ji} = \sum_{k=1}^{n} a_{jk}\, b_{ki} $$

Prends dix secondes pour vérifier les indices : c'est bien $a_{jk}$ (ligne $j$ de $A$) et $b_{ki}$ (colonne $i$ de $B$), puisqu'on calcule l'élément en position $(j, i)$ du produit $AB$. Écrire ici $a_{ik}\, b_{kj}$ — comme d'habitude — est l'erreur classique qui fait échouer toute la preuve.`,
      },
      {
        title: "Réécrire chaque facteur avec les transposées",
        content: String.raw`Le but final est de faire apparaître $B^T$ et $A^T$. On retraduit donc chaque facteur grâce à la relation $(M^T)_{ij} = m_{ji}$, lue cette fois « à l'envers » :

- $a_{jk}$ est l'élément $(j, k)$ de $A$, donc c'est l'élément $(k, j)$ de $A^T$ : on écrit $a_{jk} = (A^T)_{kj}$ ;
- $b_{ki}$ est l'élément $(k, i)$ de $B$, donc c'est l'élément $(i, k)$ de $B^T$ : on écrit $b_{ki} = (B^T)_{ik}$.

Pourquoi ces réécritures précises ? Parce que la définition d'un produit $MN$ a un motif bien déterminé : $[MN]_{ij} = \sum_k m_{ik}\, n_{kj}$ — premier facteur indicé $(i, k)$, second facteur indicé $(k, j)$, l'indice de sommation $k$ au milieu. Toute la fin de la preuve consiste à recoller notre somme sur ce motif exact.`,
      },
      {
        title: "Permuter les nombres et reconnaître le produit",
        content: String.raw`Dans chaque terme de la somme, $a_{jk}$ et $b_{ki}$ sont des **nombres réels** : on peut échanger leur ordre — commutativité de la multiplication dans $\mathbb{R}$, pas celle des matrices, qui est fausse ! Donc :

$$ \sum_{k=1}^{n} a_{jk}\, b_{ki} = \sum_{k=1}^{n} b_{ki}\, a_{jk} = \sum_{k=1}^{n} (B^T)_{ik}\, (A^T)_{kj} $$

Et maintenant, lis le motif : $(B^T)_{ik}$ puis $(A^T)_{kj}$, sommé sur $k$ — c'est mot pour mot la définition de l'élément $(i, j)$ du produit $B^T A^T$, où $k$ parcourt les colonnes de $B^T$ et les lignes de $A^T$ (il y en a $n$ dans les deux cas). Donc :

$$ [(AB)^T]_{ij} = [B^T A^T]_{ij} $$

Le motif $(\cdot)_{ik}\,(\cdot)_{kj}$ impose l'ordre : la matrice écrite en premier est celle qui porte l'indice de ligne $i$ — ici $B^T$. Il est **impossible** d'y lire $A^T B^T$.`,
      },
      {
        title: "Conclure et mémoriser",
        content: String.raw`L'égalité des éléments $(i, j)$ vaut pour tous $i$ et $j$, et les deux membres ont la même dimension $(q \times p)$ : les matrices sont donc égales, $(AB)^T = B^T A^T$.

Pour ancrer le résultat :

- l'ordre **se renverse** sous la transposée, exactement comme sous l'inverse : $(AB)^{-1} = B^{-1} A^{-1}$ ;
- la formule se généralise de proche en proche : $(ABC)^T = C^T B^T A^T$ ;
- vérifie une fois sur un mini-exemple $2 \times 2$ chez toi, pour t'en convaincre définitivement.

En examen, cette preuve tient en cinq lignes : l'essentiel des points se gagne sur les deux définitions bien appliquées (transposée puis produit) et sur la phrase de justification « ce sont des nombres réels ».`,
      },
    ],
    examProof: String.raw`**Théorème (transposée d'un produit).** Soient $A$ de dimension $(p \times n)$ et $B$ de dimension $(n \times q)$. Alors

$$ (AB)^T = B^T A^T. $$

**Preuve.** Le produit $AB$ est défini et de dimension $(p \times q)$, donc $(AB)^T$ est de dimension $(q \times p)$. Par ailleurs, $B^T$ est de dimension $(q \times n)$ et $A^T$ de dimension $(n \times p)$ : le produit $B^T A^T$ est donc défini, de dimension $(q \times p)$. Les deux membres ayant la même dimension, il suffit de montrer l'égalité de leurs éléments en toute position $(i, j)$, avec $1 \le i \le q$ et $1 \le j \le p$.

Par définition de la transposée, puis par définition du produit matriciel,

$$ [(AB)^T]_{ij} = (AB)_{ji} = \sum_{k=1}^{n} a_{jk}\, b_{ki}. \qquad (1) $$

Par définition de la transposée, $a_{jk} = (A^T)_{kj}$ et $b_{ki} = (B^T)_{ik}$. Les facteurs $a_{jk}$ et $b_{ki}$ étant des nombres réels, on peut permuter les deux facteurs de chaque terme de la somme (commutativité de la multiplication dans $\mathbb{R}$) :

$$ \sum_{k=1}^{n} a_{jk}\, b_{ki} = \sum_{k=1}^{n} b_{ki}\, a_{jk} = \sum_{k=1}^{n} (B^T)_{ik}\, (A^T)_{kj}. \qquad (2) $$

Le membre de droite de (2) est, par définition du produit matriciel, l'élément $(i, j)$ du produit $B^T A^T$ — l'indice de sommation $k$ parcourt les colonnes de $B^T$ et les lignes de $A^T$, au nombre de $n$ dans les deux cas. Ainsi

$$ [(AB)^T]_{ij} = [B^T A^T]_{ij}. \qquad (3) $$

Cette égalité valant pour tous les indices $i$ et $j$, les deux matrices, de même dimension $(q \times p)$, sont égales : $(AB)^T = B^T A^T$. $\blacksquare$`,
    pitfalls: [
      String.raw`Écrire $(AB)^T = A^T B^T$ : c'est **faux** en général — et le produit $A^T B^T$, de format $(n \times p)(q \times n)$, n'existe même pas dès que $p \neq q$. L'ordre s'inverse obligatoirement : $B^T A^T$.`,
      String.raw`Se tromper au premier pas : $[(AB)^T]_{ij} = (AB)_{ji}$ — c'est l'élément $(j, i)$ du produit, pas $(i, j)$. Si tu écris $\sum_k a_{ik}\, b_{kj}$ au lieu de $\sum_k a_{jk}\, b_{ki}$, toute la suite s'effondre.`,
      String.raw`Permuter $a_{jk}$ et $b_{ki}$ sans dire pourquoi : la justification « ce sont des nombres réels, la multiplication dans $\mathbb{R}$ est commutative » est exigée. Sans elle, le correcteur peut croire que tu utilises $AB = BA$, qui est faux pour des matrices.`,
      String.raw`Mal lire le motif du produit à la fin : dans $\sum_k (B^T)_{ik}\, (A^T)_{kj}$, la matrice qui porte l'indice de **ligne** $i$ (ici $B^T$) s'écrit en premier. Conclure $[A^T B^T]_{ij}$ à cette étape est l'erreur de lecture typique — vérifie le schéma « $ik$ puis $kj$ ».`,
    ],
  },
];
