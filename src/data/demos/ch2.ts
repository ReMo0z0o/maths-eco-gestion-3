import type { Demonstration } from "./types";

export const demos: Demonstration[] = [
  {
    id: "2.1",
    chapter: 2,
    title: "Nombre de solutions d'un système linéaire",
    slideRef: "Slide 78",
    exam: "Expliquer le nombre de solutions d'un système linéaire en fonction de la matrice transformée (A′ | B′)",
    statement: String.raw`Soit un système linéaire de $p$ équations à $n$ inconnues, écrit sous forme matricielle $AX = B$. La méthode de Gauss-Jordan transforme sa matrice complétée $(A \mid B)$ en une matrice échelonnée réduite $(A' \mid B')$, qui possède exactement les mêmes solutions. Notons $r$ le nombre de pivots de $A'$, c'est-à-dire le nombre de lignes non nulles de $A'$. Trois cas mutuellement exclusifs se présentent :

- **Système impossible** ($0$ solution) si $(A' \mid B')$ contient une ligne dont la partie gauche est nulle et le second membre non nul ;
- **Système déterminé** (solution unique) sinon, lorsque $r = n$ ;
- **Système indéterminé** (infinité de solutions) sinon, lorsque $r < n$ : les solutions dépendent de $n - r$ paramètres (simplement indéterminé si $n - r = 1$, doublement indéterminé si $n - r = 2$).

Un système linéaire admet donc $0$, $1$ ou une infinité de solutions — jamais un autre nombre.`,
    intuition: String.raw`Les transformations élémentaires de Gauss-Jordan sont réversibles, donc elles ne changent pas l'ensemble des solutions : tout se lit sur $(A' \mid B')$, où chaque ligne est devenue une équation limpide. Une ligne « $0 = b'$ avec $b' \neq 0$ » rend le système impossible ; sinon, on compare le nombre de pivots $r$ au nombre d'inconnues $n$ pour savoir s'il reste des inconnues libres.`,
    steps: [
      {
        title: "La mise en place : du système à la matrice (A′ | B′)",
        content: String.raw`📖 **Rappel du cours :** un système de $p$ équations à $n$ inconnues s'écrit $AX = B$, où $A$ est la matrice $(p \times n)$ des coefficients, $X$ la colonne des $n$ inconnues et $B$ la colonne des $p$ seconds membres. La **matrice complétée** (ou augmentée) $(A \mid B)$ juxtapose $A$ et $B$, séparés par une barre verticale.

La méthode de Gauss-Jordan enchaîne les trois transformations élémentaires sur les lignes — permuter deux lignes, multiplier une ligne par un nombre non nul, ajouter à une ligne un multiple d'une autre ligne — jusqu'à obtenir la forme **échelonnée réduite** $(A' \mid B')$ : chaque pivot vaut $1$ et est seul dans sa colonne.

Le point qui justifie toute la discussion : chaque transformation élémentaire est **réversible** (on peut la défaire par une transformation du même type). Les systèmes $AX = B$ et $A'X = B'$ ont donc exactement les **mêmes solutions**. Compter les solutions de l'un, c'est compter celles de l'autre — et sur $(A' \mid B')$, tout se voit à l'œil nu. Sans cette phrase, rien ne t'autorise à raisonner sur la matrice transformée : écris-la toujours en premier.`,
      },
      {
        title: "Le nombre clé : r, le nombre de pivots de A′",
        content: String.raw`On note $r$ le nombre de **pivots** de $A'$, c'est-à-dire le nombre de **lignes non nulles** de $A'$ — chaque ligne non nulle porte exactement un pivot.

Deux inégalités gratuites mais essentielles :

- $r \le p$ : au plus un pivot par ligne, et il y a $p$ lignes ;
- $r \le n$ : chaque pivot occupe une colonne différente de $A'$, et il n'y a que $n$ colonnes.

Chaque colonne de $A'$ correspond à une inconnue. Une inconnue dont la colonne contient un pivot est une **inconnue pivot** ; les autres sont les **variables libres** (il y en a $n - r$). Toute la discussion tient dans la comparaison entre $r$ et $n$ — précédée d'un test d'impossibilité, à faire en premier.`,
      },
      {
        title: "Cas (i) — la ligne absurde : système impossible",
        content: String.raw`Premier réflexe : chercher dans $(A' \mid B')$ une ligne du type

$$ \left(\begin{array}{cccc|c} 0 & 0 & \cdots & 0 & b' \end{array}\right) \qquad \text{avec } b' \neq 0 $$

c'est-à-dire une ligne **nulle dans la partie $A'$** mais dont le second membre $b'$ est non nul — le « pivot » de cette ligne est passé dans la colonne de $B'$. Retraduite en équation, cette ligne dit $0 x_1 + 0 x_2 + \cdots + 0 x_n = b'$, autrement dit $0 = b'$ : c'est faux **quelles que soient** les valeurs données aux inconnues. Aucun $X$ ne peut satisfaire cette équation, donc a fortiori le système entier : $0$ solution, système **impossible** (incompatible).

Exemple éclair du cours : dans le système $x + y = 1$, $2x + 2y = 5$, l'opération $L_2 \to L_2 - 2L_1$ produit la ligne $(0 \;\; 0 \mid 3)$, qui se lit $0 = 3$ : impossible.

**Attention :** ce test se fait **avant** de compter les pivots. Les deux cas suivants supposent qu'aucune ligne de ce type n'existe.`,
      },
      {
        title: "Cas (ii) — r = n : la solution unique",
        content: String.raw`Supposons maintenant qu'il n'y a **aucune ligne absurde** et que $r = n$ : autant de pivots que d'inconnues, donc **chaque inconnue est une inconnue pivot**.

Comme $(A' \mid B')$ est échelonnée réduite, chaque pivot vaut $1$ et est seul dans sa colonne : les $r = n$ lignes non nulles de $A'$ forment la matrice identité $I_n$. Ligne par ligne, le système se lit alors directement — par exemple avec $n = 3$ :

$$ \left(\begin{array}{ccc|c} 1 & 0 & 0 & b'_1 \\ 0 & 1 & 0 & b'_2 \\ 0 & 0 & 1 & b'_3 \end{array}\right) \iff x_1 = b'_1, \quad x_2 = b'_2, \quad x_3 = b'_3 $$

Les éventuelles lignes entièrement nulles, du type $(0 \;\, \cdots \;\, 0 \mid 0)$, se lisent $0 = 0$ : toujours vrai, aucune information — on les ignore. Chaque inconnue est donc **imposée** par sa ligne : il existe une solution et une seule. Le système est **compatible et déterminé**, et la solution se lit directement dans la colonne $B'$.`,
      },
      {
        title: "Cas (iii) — r < n : l'infinité de solutions",
        content: String.raw`Toujours sans ligne absurde, supposons $r < n$ : il y a **moins de pivots que d'inconnues**, donc $n - r \ge 1$ colonnes de $A'$ sans pivot. Les inconnues correspondantes sont les **variables libres**.

Chaque ligne non nulle de $(A' \mid B')$ exprime son inconnue pivot en fonction du second membre et des variables libres. Donne n'importe quelles valeurs réelles aux $n - r$ variables libres : les inconnues pivots se calculent alors de façon unique, et on obtient une solution du système. Des choix différents donnent des solutions différentes — et il y a une infinité de choix possibles dans $\mathbb{R}$ : le système a une **infinité de solutions**.

Exemple du cours : après Gauss-Jordan, il reste $x + 2y = -1$ et $z = 1$ (soit $n = 3$ inconnues et $r = 2$ pivots). L'inconnue $y$ n'a pas de pivot : elle est libre, et $x = -1 - 2y$, $z = 1$. Chaque valeur de $y$ fournit une solution différente.

Vocabulaire du cours : le système est **indéterminé**, et le nombre $n - r$ de variables libres donne le degré d'indétermination — **simplement indéterminé** si $n - r = 1$ (une droite de solutions), **doublement indéterminé** si $n - r = 2$ (un plan de solutions). En exercice, on écrit alors les solutions sous forme vectorielle, avec un paramètre par variable libre, sans oublier de préciser « $y \in \mathbb{R}$ ».`,
      },
      {
        title: "Pourquoi 0, 1 ou une infinité — et jamais rien d'autre",
        content: String.raw`Les trois cas sont **exclusifs** et **couvrent toutes les situations** : soit il existe une ligne absurde (cas i), soit il n'en existe pas — et alors, puisque $r \le n$ toujours, on a soit $r = n$ (cas ii), soit $r < n$ (cas iii). Aucun système linéaire ne peut donc avoir, par exemple, exactement $2$ solutions : dès qu'il en existe deux distinctes, c'est qu'une variable libre traîne quelque part, et il y en a aussitôt une infinité.

Géométriquement, avec $n = 2$ : chaque équation est une droite du plan. Deux droites se coupent en un point ($1$ solution), sont parallèles distinctes ($0$ solution) ou confondues (infinité). Les trois cas de la discussion sont la version algébrique de cette image.

Deux conséquences à connaître par cœur :

- si $p < n$ (moins d'équations que d'inconnues), alors $r \le p < n$ : le cas (ii) est exclu — **jamais de solution unique**, c'est impossible ou indéterminé ;
- un système **homogène** ($B = 0$) garde un second membre nul pendant tout Gauss-Jordan ($B' = 0$), donc aucune ligne absurde ne peut apparaître : il est toujours compatible, avec au minimum la solution triviale $X = 0$.`,
      },
      {
        title: "Structurer ta réponse le jour J",
        content: String.raw`La question « expliquer le nombre de solutions en fonction de $(A' \mid B')$ » attend une **discussion complète et structurée**, pas trois mots. Le plan qui rapporte tous les points :

- annoncer que Gauss-Jordan conserve l'ensemble des solutions (transformations élémentaires réversibles) — c'est ce qui légitime de raisonner sur $(A' \mid B')$ ;
- définir $r$, le nombre de pivots (lignes non nulles) de $A'$ ;
- dérouler les trois cas **dans cet ordre** : ligne absurde donc impossible ; sinon $r = n$ donc solution unique ; sinon $r < n$ donc infinité à $n - r$ paramètres — en justifiant la lecture de chaque cas par la traduction des lignes en équations ;
- conclure : $0$, $1$ ou une infinité de solutions, avec le vocabulaire du cours (incompatible, déterminé, simplement ou doublement indéterminé).

La rédaction modèle ci-dessous suit exactement ce plan : entraîne-toi à la reproduire sans regarder.`,
      },
    ],
    examProof: String.raw`Soit un système linéaire de $p$ équations à $n$ inconnues $x_1, \dots, x_n$, écrit sous forme matricielle $AX = B$, où $A$ est la matrice $(p \times n)$ des coefficients, $X$ la colonne des inconnues et $B$ celle des seconds membres. La méthode de Gauss-Jordan transforme la matrice complétée $(A \mid B)$, par transformations élémentaires sur les lignes, en une matrice échelonnée réduite $(A' \mid B')$. Chaque transformation élémentaire étant réversible, les systèmes $AX = B$ et $A'X = B'$ possèdent exactement le même ensemble de solutions : le nombre de solutions du système se lit donc sur $(A' \mid B')$.

Notons $r$ le nombre de pivots de $A'$, c'est-à-dire le nombre de lignes non nulles de $A'$. Chaque pivot occupant une colonne distincte, on a $r \le n$ (et $r \le p$). Trois cas mutuellement exclusifs se présentent.

**(1) Système impossible — aucune solution.** Supposons que $(A' \mid B')$ contienne une ligne de la forme

$$ \left(\begin{array}{cccc|c} 0 & 0 & \cdots & 0 & b' \end{array}\right), \qquad b' \neq 0, $$

c'est-à-dire une ligne nulle de $A'$ à second membre non nul. Cette ligne équivaut à l'équation $0 x_1 + 0 x_2 + \cdots + 0 x_n = b'$, soit $0 = b'$ avec $b' \neq 0$, qui n'est vérifiée par aucune valeur des inconnues. Le système n'admet alors aucune solution : il est incompatible (impossible).

**(2) Si $r = n$, et qu'aucune ligne du type (1) n'apparaît — solution unique.** Chaque inconnue correspond alors à une colonne pivot. La matrice étant échelonnée réduite, chaque pivot vaut $1$ et est seul dans sa colonne : les $n$ lignes non nulles de $(A' \mid B')$ se lisent

$$ x_1 = b'_1, \quad x_2 = b'_2, \quad \dots, \quad x_n = b'_n, $$

tandis que les éventuelles lignes nulles restantes se lisent $0 = 0$ et n'imposent aucune contrainte. Chaque inconnue est ainsi déterminée de manière unique : le système admet une et une seule solution. Il est compatible et déterminé.

**(3) Si $r < n$, et qu'aucune ligne du type (1) n'apparaît — infinité de solutions.** Les $n - r \ge 1$ inconnues dont la colonne ne contient pas de pivot sont les variables libres. Chaque ligne non nulle exprime son inconnue pivot en fonction du second membre et des variables libres. Pour tout choix des $n - r$ variables libres dans $\mathbb{R}$, les $r$ inconnues pivots sont alors déterminées de manière unique, ce qui fournit une solution du système ; deux choix distincts fournissent deux solutions distinctes. Le système admet donc une infinité de solutions, décrites par $n - r$ paramètres réels : il est compatible et indéterminé — simplement indéterminé si $n - r = 1$, doublement indéterminé si $n - r = 2$.

**Conclusion.** Ces trois cas s'excluent mutuellement et épuisent toutes les possibilités : en l'absence de ligne du type (1), on a nécessairement $r = n$ ou $r < n$, puisque $r \le n$. Un système linéaire admet donc $0$, $1$ ou une infinité de solutions, et la lecture de $(A' \mid B')$ tranche : une ligne nulle de $A'$ à second membre non nul rend le système impossible ; sinon, $r = n$ donne une solution unique et $r < n$ donne une infinité de solutions à $n - r$ paramètres. $\blacksquare$`,
    pitfalls: [
      String.raw`Discuter « $r = n$ ou $r < n$ » **sans avoir d'abord exclu la ligne impossible**. Exemple : pour $x + y = 1$ et $2x + 2y = 5$, on trouve $r = 1 < n = 2$, mais il n'y a pas une infinité de solutions — il y en a zéro, à cause de la ligne $(0 \;\; 0 \mid 3)$. Le test d'impossibilité se fait toujours en premier.`,
      String.raw`Compter comme pivot de $A'$ un « pivot » situé dans la colonne de $B'$ : $r$ ne compte que les lignes non nulles de la partie **gauche** $A'$. Une ligne $(0 \;\; 0 \mid 3)$ n'apporte aucun pivot à $A'$ — elle signale au contraire l'impossibilité du système.`,
      String.raw`Confondre ligne nulle et ligne absurde : une ligne **entièrement** nulle, second membre compris, se lit $0 = 0$ — elle est simplement inutile et ne rend rien impossible. Seule une ligne nulle de $A'$ avec un second membre **non nul** dans $B'$ rend le système incompatible.`,
      String.raw`Conclure « infinité de solutions » sans préciser le **nombre de paramètres** : la réponse complète mentionne les $n - r$ variables libres et le vocabulaire du cours (simplement ou doublement indéterminé) — et, dans un exercice concret, l'écriture vectorielle des solutions avec « $y \in \mathbb{R}$ » pour chaque paramètre.`,
    ],
  },
];
