import type { Exercise } from "./types";

export const exercises: Exercise[] = [
  {
    id: "6.6",
    chapter: 6,
    title: "Quatre propriétés des valeurs propres (preuves)",
    examType: false,
    statement: String.raw`Démontrez les propositions suivantes.`,
    method: String.raw`Quatre preuves courtes qui reposent toujours sur les mêmes deux points de départ : la définition d'une valeur propre ($AV = aV$ avec $V \neq O$) et la décomposition $A = SDS^{-1}$ d'une matrice diagonalisable. Ajoute à cela les propriétés du déterminant ($\det(AB) = \det A \cdot \det B$) et le critère d'inversibilité ($A$ inversible $\iff \det A \neq 0$), et tout se déroule en quelques lignes.`,
    theoryRefs: ["Propriétés des valeurs propres", "Diagonalisation"],
    parts: [
      {
        label: "a",
        statement: String.raw`Une matrice diagonalisable dont toutes les valeurs propres sont égales est un multiple de la matrice identité.`,
        steps: [
          {
            title: "Écrire ce que signifie « diagonalisable »",
            content: String.raw`📖 **Rappel du cours :** une matrice $A$ est diagonalisable s'il existe une matrice inversible $S$ (dont les colonnes sont des vecteurs propres de $A$) et une matrice diagonale $D$ (dont la diagonale contient les valeurs propres) telles que

$$A = S D S^{-1}.$$

On veut montrer que si toutes les valeurs propres valent le même nombre $a$, alors $A = aI$.`,
          },
          {
            title: "Identifier la matrice diagonale",
            content: String.raw`Par hypothèse, toutes les valeurs propres sont égales à un même nombre $a$. La diagonale de $D$ ne contient donc que des $a$ :

$$D = \begin{pmatrix} a & 0 & \cdots & 0 \\ 0 & a & \cdots & 0 \\ \vdots & & \ddots & \vdots \\ 0 & 0 & \cdots & a \end{pmatrix} = aI.$$

C'est le point clé : une matrice diagonale dont tous les éléments diagonaux sont identiques n'est rien d'autre qu'un multiple de l'identité.`,
          },
          {
            title: "Conclure par le calcul",
            content: String.raw`On remplace $D$ par $aI$ dans la décomposition et on utilise le fait que le scalaire $a$ « sort » du produit matriciel :

$$A = S(aI)S^{-1} = a\,(S I S^{-1}) = a\,(S S^{-1}) = aI.$$

Donc $A = aI$ : c'est bien un multiple de la matrice identité. $\blacksquare$

**Remarque :** l'hypothèse « diagonalisable » est indispensable. La matrice $\begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$ a une seule valeur propre (à savoir $1$, doublée) mais n'est pas un multiple de $I$ — justement parce qu'elle n'est pas diagonalisable.`,
          },
        ],
        answer: String.raw`Si toutes les valeurs propres valent $a$, alors $D = aI$ et donc $A = S(aI)S^{-1} = aI$.`,
      },
      {
        label: "b",
        statement: String.raw`Si $a$ est une valeur propre de la matrice inversible $A$, alors $a^{-1}$ est une valeur propre de $A^{-1}$.`,
        steps: [
          {
            title: "Partir de la définition d'une valeur propre",
            content: String.raw`📖 **Rappel du cours :** $a$ est une valeur propre de $A$ s'il existe un vecteur $V \neq O$ (un vecteur propre) tel que

$$AV = aV.$$

C'est cette égalité que l'on va transformer pour faire apparaître $A^{-1}$.`,
          },
          {
            title: "Vérifier que a est non nul",
            content: String.raw`Avant d'écrire $a^{-1}$, il faut s'assurer que $a \neq 0$ !

Si on avait $a = 0$, alors $AV = 0 \cdot V = O$ avec $V \neq O$ : le système homogène $AX = O$ aurait une solution non triviale, donc $\det A = 0$ et $A$ ne serait pas inversible. Cela contredit l'hypothèse.

Donc $a \neq 0$ et $a^{-1}$ a bien un sens. (C'est exactement la proposition du point d) ci-dessous.)`,
          },
          {
            title: "Multiplier par l'inverse et conclure",
            content: String.raw`On multiplie les deux membres de $AV = aV$ à gauche par $A^{-1}$ :

$$A^{-1}(AV) = A^{-1}(aV) \quad\Longrightarrow\quad (A^{-1}A)V = a\,A^{-1}V \quad\Longrightarrow\quad V = a\,A^{-1}V.$$

Comme $a \neq 0$, on peut diviser par $a$ :

$$A^{-1}V = \frac{1}{a}\,V = a^{-1}V.$$

Le vecteur $V$ est toujours non nul : $a^{-1}$ est donc une valeur propre de $A^{-1}$, avec **le même vecteur propre** $V$. $\blacksquare$`,
          },
        ],
        answer: String.raw`De $AV = aV$ (avec $V \neq O$ et $a \neq 0$ car $A$ est inversible), on tire $V = a\,A^{-1}V$, donc $A^{-1}V = a^{-1}V$ : $a^{-1}$ est valeur propre de $A^{-1}$ (avec le même vecteur propre).`,
      },
      {
        label: "c",
        statement: String.raw`Si $A$ est diagonalisable, alors le produit des valeurs propres vaut $\det A$.`,
        steps: [
          {
            title: "Poser la décomposition et le plan",
            content: String.raw`Puisque $A$ est diagonalisable, on écrit $A = SDS^{-1}$ où $D$ est diagonale et contient les valeurs propres $\lambda_1, \lambda_2, \ldots, \lambda_n$ de $A$.

L'idée : prendre le déterminant des deux membres, et utiliser le fait que le déterminant d'une matrice diagonale est le produit de ses éléments diagonaux.`,
          },
          {
            title: "Utiliser la multiplicativité du déterminant",
            content: String.raw`📖 **Rappel du cours :** $\det(AB) = \det A \cdot \det B$, et par conséquent $\det(S^{-1}) = \dfrac{1}{\det S}$ (car $\det S \cdot \det S^{-1} = \det(SS^{-1}) = \det I = 1$).

On calcule :

$$\det A = \det(SDS^{-1}) = \det S \cdot \det D \cdot \det S^{-1} = \det S \cdot \det D \cdot \frac{1}{\det S} = \det D.$$

Remarque le petit miracle : les déterminants de $S$ et de $S^{-1}$ se compensent exactement — le déterminant ne change pas quand on change de base.`,
          },
          {
            title: "Calculer le déterminant de D et conclure",
            content: String.raw`La matrice $D$ est diagonale, avec les valeurs propres sur la diagonale. Le déterminant d'une matrice diagonale est le produit de ses éléments diagonaux :

$$\det D = \lambda_1 \cdot \lambda_2 \cdots \lambda_n.$$

En combinant les deux étapes :

$$\det A = \det D = \lambda_1 \lambda_2 \cdots \lambda_n. \qquad \blacksquare$$

**Vérification sur un exemple :** $A = \begin{pmatrix} 2 & 0 \\ 0 & 3 \end{pmatrix}$ a pour valeurs propres $2$ et $3$, et $\det A = 6 = 2 \cdot 3$ ✓`,
          },
        ],
        answer: String.raw`$\det A = \det(SDS^{-1}) = \det S \cdot \det D \cdot \dfrac{1}{\det S} = \det D = \lambda_1 \lambda_2 \cdots \lambda_n$, le produit des valeurs propres.`,
      },
      {
        label: "d",
        statement: String.raw`Une matrice carrée $A$ est inversible si et seulement si $0$ n'est pas valeur propre de $A$.`,
        steps: [
          {
            title: "Traduire « 0 est valeur propre »",
            content: String.raw`📖 **Rappel du cours :** $\lambda$ est valeur propre de $A$ si et seulement si $\det(A - \lambda I) = 0$ (c'est la caractérisation via le polynôme caractéristique).

Appliquons cela à $\lambda = 0$ :

$$0 \text{ est valeur propre de } A \iff \det(A - 0 \cdot I) = 0 \iff \det A = 0.$$

Le cas $\lambda = 0$ est donc particulièrement simple : le polynôme caractéristique évalué en $0$ vaut exactement $\det A$.`,
          },
          {
            title: "Relier au critère d'inversibilité et conclure",
            content: String.raw`📖 **Rappel du cours :** une matrice carrée $A$ est inversible si et seulement si $\det A \neq 0$.

Il suffit de mettre les deux équivalences bout à bout :

$$A \text{ inversible} \iff \det A \neq 0 \iff 0 \text{ n'est pas valeur propre de } A. \qquad \blacksquare$$

**Autre façon de le voir** (sans déterminant) : $0$ est valeur propre $\iff$ il existe $V \neq O$ tel que $AV = O$ $\iff$ le système homogène $AX = O$ a une solution non triviale $\iff$ $A$ n'est pas inversible. Les deux raisonnements sont équivalents.`,
          },
        ],
        answer: String.raw`$A$ inversible $\iff \det A \neq 0 \iff \det(A - 0 \cdot I) \neq 0 \iff 0$ n'est pas valeur propre de $A$.`,
      },
    ],
  },
  {
    id: "6.7",
    chapter: 6,
    title: "Chaîne de Markov : le marché automobile",
    examType: false,
    statement: String.raw`Pour une partie donnée du marché automobile, les résultats d'une enquête ont montré que 80 % des personnes qui possèdent une voiture japonaise achètent à nouveau, lors de leur achat suivant, une voiture japonaise, et 20 % une autre voiture, tandis que, parmi les personnes qui possèdent une voiture non-japonaise, 40 % achètent une non-japonaise et 60 % une japonaise.`,
    method: String.raw`C'est une chaîne de Markov à deux états (japonaise / non-japonaise). Commence par traduire l'énoncé en une matrice de transition $M$ dont les colonnes somment à 1, puis applique $X_{t+1} = MX_t$. Pour le long terme, diagonalise $M$ : la valeur propre $1$ donne l'état d'équilibre, et l'autre valeur propre (de module strictement inférieur à 1) explique pourquoi on converge vers cet équilibre.`,
    theoryRefs: ["Chaînes de Markov", "État d'équilibre", "Propriétés des valeurs propres"],
    parts: [
      {
        label: "a",
        statement: String.raw`Si on estime qu'au départ, 60 % des personnes détiennent une voiture japonaise, quelle sera la répartition deux achats plus tard ?`,
        steps: [
          {
            title: "Modéliser : construire la matrice de transition",
            content: String.raw`📖 **Rappel du cours :** dans une chaîne de Markov, l'état du système au temps $t$ est un vecteur $X_t$ de proportions (qui somment à 1), et l'évolution est donnée par $X_{t+1} = M X_t$, où $M$ est la **matrice de transition** : la colonne $j$ de $M$ contient les probabilités de passage **depuis** l'état $j$ vers chaque état. Chaque colonne de $M$ somme à 1.

Ici, deux états : $J$ = « possède une japonaise », $N$ = « possède une non-japonaise ». On note $X_t = (j_t,\ n_t)^T$ les proportions au $t$-ième achat.

Traduisons l'énoncé colonne par colonne :

- depuis $J$ : 80 % rachètent une japonaise, 20 % une non-japonaise, d'où la colonne $(0{,}8,\ 0{,}2)^T$ ;
- depuis $N$ : 60 % passent à une japonaise, 40 % restent en non-japonaise, d'où la colonne $(0{,}6,\ 0{,}4)^T$.

$$M = \begin{pmatrix} 0{,}8 & 0{,}6 \\ 0{,}2 & 0{,}4 \end{pmatrix}$$

**Vérification :** chaque colonne somme bien à 1 : $0{,}8 + 0{,}2 = 1$ et $0{,}6 + 0{,}4 = 1$ ✓`,
          },
          {
            title: "Calculer la répartition après le premier achat",
            content: String.raw`Au départ : $X_0 = (0{,}6,\ 0{,}4)^T$ (60 % de japonaises, donc 40 % de non-japonaises).

Après un achat :

$$X_1 = M X_0 = \begin{pmatrix} 0{,}8 & 0{,}6 \\ 0{,}2 & 0{,}4 \end{pmatrix} \begin{pmatrix} 0{,}6 \\ 0{,}4 \end{pmatrix} = \begin{pmatrix} 0{,}8 \cdot 0{,}6 + 0{,}6 \cdot 0{,}4 \\ 0{,}2 \cdot 0{,}6 + 0{,}4 \cdot 0{,}4 \end{pmatrix} = \begin{pmatrix} 0{,}48 + 0{,}24 \\ 0{,}12 + 0{,}16 \end{pmatrix} = \begin{pmatrix} 0{,}72 \\ 0{,}28 \end{pmatrix}.$$

Après le premier achat : 72 % de japonaises, 28 % de non-japonaises.`,
          },
          {
            title: "Calculer la répartition après le deuxième achat",
            content: String.raw`On applique $M$ une deuxième fois :

$$X_2 = M X_1 = \begin{pmatrix} 0{,}8 & 0{,}6 \\ 0{,}2 & 0{,}4 \end{pmatrix} \begin{pmatrix} 0{,}72 \\ 0{,}28 \end{pmatrix} = \begin{pmatrix} 0{,}576 + 0{,}168 \\ 0{,}144 + 0{,}112 \end{pmatrix} = \begin{pmatrix} 0{,}744 \\ 0{,}256 \end{pmatrix}.$$

(On aurait aussi pu calculer $X_2 = M^2 X_0$ : c'est exactement le même calcul.)

**Vérification :** $0{,}744 + 0{,}256 = 1$ ✓ — les proportions somment toujours à 1, comme il se doit pour une chaîne de Markov.`,
          },
        ],
        answer: String.raw`$X_2 = (0{,}744,\ 0{,}256)^T$ : deux achats plus tard, 74,4 % des personnes détiennent une voiture japonaise et 25,6 % une non-japonaise.`,
      },
      {
        label: "b",
        statement: String.raw`Recherchez les vecteurs propres et valeurs propres de la matrice de transition et donnez la répartition à long terme. Existe-t-il une répartition d'équilibre ?`,
        steps: [
          {
            title: "Calculer le polynôme caractéristique",
            content: String.raw`📖 **Rappel du cours :** les valeurs propres de $M$ sont les racines du polynôme caractéristique $\det(M - \lambda I)$. Une matrice de Markov admet **toujours** $1$ comme valeur propre : c'est elle qui porte l'état d'équilibre.

$$\det(M - \lambda I) = \begin{vmatrix} 0{,}8 - \lambda & 0{,}6 \\ 0{,}2 & 0{,}4 - \lambda \end{vmatrix} = (0{,}8 - \lambda)(0{,}4 - \lambda) - 0{,}6 \cdot 0{,}2 = \lambda^2 - 1{,}2\lambda + 0{,}2.$$

Ce trinôme se factorise : $\lambda^2 - 1{,}2\lambda + 0{,}2 = (\lambda - 1)(\lambda - 0{,}2)$.

Les valeurs propres sont $\lambda_1 = 1$ et $\lambda_2 = 0{,}2$. Comme prévu, $1$ est bien valeur propre ✓`,
          },
          {
            title: "Chercher les vecteurs propres",
            content: String.raw`**Pour $\lambda_1 = 1$ :** on résout $(M - I)V = O$ :

$$\begin{pmatrix} -0{,}2 & 0{,}6 \\ 0{,}2 & -0{,}6 \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix} \quad\Longrightarrow\quad -0{,}2x + 0{,}6y = 0 \quad\Longrightarrow\quad x = 3y.$$

Vecteur propre : $V_1 = (3,\ 1)^T$.

**Pour $\lambda_2 = 0{,}2$ :** on résout $(M - 0{,}2\,I)V = O$ :

$$\begin{pmatrix} 0{,}6 & 0{,}6 \\ 0{,}2 & 0{,}2 \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix} \quad\Longrightarrow\quad x + y = 0.$$

Vecteur propre : $V_2 = (1,\ -1)^T$.`,
          },
          {
            title: "Décomposer l'état initial dans la base de vecteurs propres",
            content: String.raw`L'intérêt des vecteurs propres : si on écrit $X_0 = \alpha V_1 + \beta V_2$, alors

$$X_t = M^t X_0 = \alpha \cdot 1^t \, V_1 + \beta \cdot (0{,}2)^t \, V_2,$$

car appliquer $M$ à un vecteur propre revient simplement à le multiplier par sa valeur propre.

Cherchons $\alpha$ et $\beta$ tels que $\alpha\,(3,\ 1)^T + \beta\,(1,\ -1)^T = (0{,}6,\ 0{,}4)^T$ :

$$\begin{cases} 3\alpha + \beta = 0{,}6 \\ \alpha - \beta = 0{,}4 \end{cases}$$

En additionnant les deux équations : $4\alpha = 1$, donc $\alpha = 0{,}25$ et $\beta = 0{,}25 - 0{,}4 = -0{,}15$.`,
          },
          {
            title: "Passer à la limite : la répartition à long terme",
            content: String.raw`On a donc, pour tout $t$ :

$$X_t = 0{,}25\,(3,\ 1)^T + (0{,}2)^t \cdot (-0{,}15)\,(1,\ -1)^T.$$

Comme $|0{,}2| < 1$, le terme $(0{,}2)^t$ tend vers $0$ quand $t \to \infty$. Il reste :

$$X_t \longrightarrow 0{,}25\,(3,\ 1)^T = (0{,}75,\ 0{,}25)^T.$$

À long terme, 75 % des personnes détiennent une voiture japonaise et 25 % une non-japonaise — et ce **quelle que soit la répartition de départ** (seul le coefficient $\alpha$ survit à la limite, et il est fixé par le fait que les proportions somment à 1).`,
          },
          {
            title: "Conclure sur l'état d'équilibre et vérifier",
            content: String.raw`📖 **Rappel du cours :** un **état d'équilibre** est un vecteur de proportions $X^*$ (composantes positives, de somme 1) tel que $MX^* = X^*$, c'est-à-dire un vecteur propre de valeur propre $1$ normalisé pour que ses composantes somment à 1.

Ici : $V_1 = (3,\ 1)^T$ a une somme de composantes égale à $4$, donc $X^* = \frac{1}{4}\,(3,\ 1)^T = (0{,}75,\ 0{,}25)^T$. Oui, la répartition d'équilibre existe, et c'est précisément la limite trouvée à l'étape précédente.

**Vérification :**

$$MX^* = \begin{pmatrix} 0{,}8 & 0{,}6 \\ 0{,}2 & 0{,}4 \end{pmatrix} \begin{pmatrix} 0{,}75 \\ 0{,}25 \end{pmatrix} = \begin{pmatrix} 0{,}6 + 0{,}15 \\ 0{,}15 + 0{,}1 \end{pmatrix} = \begin{pmatrix} 0{,}75 \\ 0{,}25 \end{pmatrix} = X^* \ \checkmark$$`,
          },
        ],
        answer: String.raw`Valeurs propres : $\lambda_1 = 1$ (vecteur propre $(3,\ 1)^T$) et $\lambda_2 = 0{,}2$ (vecteur propre $(1,\ -1)^T$). À long terme, la répartition tend vers $(0{,}75,\ 0{,}25)^T$ : 75 % de voitures japonaises, 25 % de non-japonaises. Oui, c'est la répartition d'équilibre, obtenue en normalisant le vecteur propre associé à $\lambda = 1$.`,
      },
    ],
  },
  {
    id: "6.8",
    chapter: 6,
    title: "Chaîne de Markov : prévisions météorologiques",
    examType: true,
    statement: String.raw`L'institut météorologique a fait les observations suivantes. Chaque jour, il y a trois états : il peut faire ensoleillé (S), nuageux (N), ou pluvieux (P). On n'a jamais vu deux jours ensoleillés consécutifs. S'il y a du soleil un jour, alors il y a autant de chance que le lendemain soit nuageux ou pluvieux. Si un jour est nuageux ou pluvieux, il y a une chance sur deux que le temps se maintienne le lendemain et une chance sur quatre qu'il y ait du soleil le lendemain.`,
    method: String.raw`C'est une chaîne de Markov à trois états. Toute la difficulté est dans la modélisation : traduis chaque phrase de l'énoncé en une colonne de la matrice de transition $M$ (colonne = état d'aujourd'hui, chaque colonne somme à 1). Ensuite, pour mercredi, applique deux fois $X_{t+1} = MX_t$ ; pour le long terme, cherche le vecteur propre de valeur propre $1$ et normalise-le pour que ses composantes somment à 1.`,
    theoryRefs: ["Chaînes de Markov", "État d'équilibre", "Propriétés des valeurs propres"],
    parts: [
      {
        label: "a",
        statement: String.raw`Sachant qu'il y a du soleil aujourd'hui (lundi), quelles sont les prévisions pour mercredi ?`,
        steps: [
          {
            title: "Modéliser : traduire l'énoncé en matrice de transition",
            content: String.raw`📖 **Rappel du cours :** dans la matrice de transition $M$ d'une chaîne de Markov, la colonne $j$ donne les probabilités du temps de **demain** sachant l'état $j$ d'**aujourd'hui**. Chaque colonne somme à 1. L'état du jour $t$ est le vecteur de probabilités $X_t = (s_t,\ n_t,\ p_t)^T$ et $X_{t+1} = MX_t$.

Traduisons phrase par phrase, dans l'ordre des états $(S,\ N,\ P)$ :

- **après un jour ensoleillé** : jamais deux jours ensoleillés consécutifs, donc probabilité $0$ pour S ; « autant de chance que le lendemain soit nuageux ou pluvieux » : $\tfrac{1}{2}$ et $\tfrac{1}{2}$. Colonne S : $\left(0,\ \tfrac{1}{2},\ \tfrac{1}{2}\right)^T$ ;
- **après un jour nuageux** : le temps se maintient (reste N) avec probabilité $\tfrac{1}{2}$, soleil avec probabilité $\tfrac{1}{4}$ ; il reste $1 - \tfrac{1}{2} - \tfrac{1}{4} = \tfrac{1}{4}$ pour la pluie. Colonne N : $\left(\tfrac{1}{4},\ \tfrac{1}{2},\ \tfrac{1}{4}\right)^T$ ;
- **après un jour pluvieux** : même logique, le temps se maintient (reste P) avec probabilité $\tfrac{1}{2}$, soleil $\tfrac{1}{4}$, et donc nuageux $\tfrac{1}{4}$. Colonne P : $\left(\tfrac{1}{4},\ \tfrac{1}{4},\ \tfrac{1}{2}\right)^T$.

$$M = \begin{pmatrix} 0 & \frac{1}{4} & \frac{1}{4} \\ \frac{1}{2} & \frac{1}{2} & \frac{1}{4} \\ \frac{1}{2} & \frac{1}{4} & \frac{1}{2} \end{pmatrix}$$

**Vérification :** chaque colonne somme à 1 ✓ (c'est LE réflexe à avoir : si une colonne ne somme pas à 1, la modélisation est fausse).`,
          },
          {
            title: "Prévoir mardi",
            content: String.raw`Lundi, il fait soleil avec certitude : $X_0 = (1,\ 0,\ 0)^T$.

Mardi :

$$X_1 = M X_0 = \begin{pmatrix} 0 & \frac{1}{4} & \frac{1}{4} \\ \frac{1}{2} & \frac{1}{2} & \frac{1}{4} \\ \frac{1}{2} & \frac{1}{4} & \frac{1}{2} \end{pmatrix} \begin{pmatrix} 1 \\ 0 \\ 0 \end{pmatrix} = \begin{pmatrix} 0 \\ \frac{1}{2} \\ \frac{1}{2} \end{pmatrix}.$$

(Multiplier $M$ par $(1,\ 0,\ 0)^T$ extrait simplement la première colonne de $M$ : logique, puisque la colonne S décrit justement le lendemain d'un jour de soleil.)`,
          },
          {
            title: "Prévoir mercredi",
            content: String.raw`On applique $M$ une deuxième fois :

$$X_2 = M X_1 = \begin{pmatrix} 0 & \frac{1}{4} & \frac{1}{4} \\ \frac{1}{2} & \frac{1}{2} & \frac{1}{4} \\ \frac{1}{2} & \frac{1}{4} & \frac{1}{2} \end{pmatrix} \begin{pmatrix} 0 \\ \frac{1}{2} \\ \frac{1}{2} \end{pmatrix} = \begin{pmatrix} \frac{1}{8} + \frac{1}{8} \\ \frac{1}{4} + \frac{1}{8} \\ \frac{1}{8} + \frac{1}{4} \end{pmatrix} = \begin{pmatrix} \frac{1}{4} \\ \frac{3}{8} \\ \frac{3}{8} \end{pmatrix}.$$

En décimales : $X_2 = (0{,}25\ ;\ 0{,}375\ ;\ 0{,}375)^T$.

**Vérification :** $0{,}25 + 0{,}375 + 0{,}375 = 1$ ✓`,
          },
        ],
        answer: String.raw`$X_2 = \left(\frac{1}{4},\ \frac{3}{8},\ \frac{3}{8}\right)^T = (0{,}25\ ;\ 0{,}375\ ;\ 0{,}375)^T$ : mercredi, 25 % de chances de soleil, 37,5 % de nuages et 37,5 % de pluie.`,
      },
      {
        label: "b",
        statement: String.raw`Sachant qu'il y a du soleil aujourd'hui, donnez les prévisions météorologiques à long terme.`,
        steps: [
          {
            title: "Poser le problème de l'état d'équilibre",
            content: String.raw`📖 **Rappel du cours :** l'**état d'équilibre** d'une chaîne de Markov est un vecteur de probabilités $X^*$ tel que $MX^* = X^*$ : c'est un vecteur propre de $M$ pour la valeur propre $1$ (qui existe toujours pour une matrice de Markov), normalisé pour que ses composantes somment à 1.

On cherche donc les solutions non triviales de $(M - I)V = O$, avec

$$M - I = \begin{pmatrix} -1 & \frac{1}{4} & \frac{1}{4} \\ \frac{1}{2} & -\frac{1}{2} & \frac{1}{4} \\ \frac{1}{2} & \frac{1}{4} & -\frac{1}{2} \end{pmatrix}.$$`,
          },
          {
            title: "Résoudre le système homogène",
            content: String.raw`Le système $(M - I)V = O$ s'écrit (en multipliant chaque équation par 4 pour chasser les fractions) :

$$\begin{cases} -4x + y + z = 0 \\ 2x - 2y + z = 0 \\ 2x + y - 2z = 0 \end{cases}$$

En soustrayant la troisième équation de la deuxième : $-3y + 3z = 0$, donc $z = y$.

En reportant dans la première : $-4x + 2y = 0$, donc $y = 2x$ (et $z = 2x$).

**Contrôle dans la deuxième équation :** $2x - 4x + 2x = 0$ ✓

Les solutions sont donc les multiples de $V_1 = (1,\ 2,\ 2)^T$. (Le système est simplement indéterminé, comme toujours quand on cherche un vecteur propre : tout multiple d'un vecteur propre est encore un vecteur propre.)`,
          },
          {
            title: "Normaliser pour obtenir des probabilités",
            content: String.raw`Un vecteur de probabilités doit avoir des composantes qui somment à 1. La somme des composantes de $(1,\ 2,\ 2)^T$ vaut $5$, donc :

$$X^* = \frac{1}{5}\,(1,\ 2,\ 2)^T = \left(\frac{1}{5},\ \frac{2}{5},\ \frac{2}{5}\right)^T = (0{,}20\ ;\ 0{,}40\ ;\ 0{,}40)^T.$$

**Vérification :**

$$MX^* = \begin{pmatrix} 0 & \frac{1}{4} & \frac{1}{4} \\ \frac{1}{2} & \frac{1}{2} & \frac{1}{4} \\ \frac{1}{2} & \frac{1}{4} & \frac{1}{2} \end{pmatrix} \begin{pmatrix} 0{,}2 \\ 0{,}4 \\ 0{,}4 \end{pmatrix} = \begin{pmatrix} 0{,}1 + 0{,}1 \\ 0{,}1 + 0{,}2 + 0{,}1 \\ 0{,}1 + 0{,}1 + 0{,}2 \end{pmatrix} = \begin{pmatrix} 0{,}2 \\ 0{,}4 \\ 0{,}4 \end{pmatrix} = X^* \ \checkmark$$`,
          },
          {
            title: "Justifier la convergence vers l'équilibre",
            content: String.raw`Pourquoi les prévisions **convergent**-elles vers $X^*$ ? À cause des autres valeurs propres. Le polynôme caractéristique de $M$ se factorise :

$$\det(M - \lambda I) = -(\lambda - 1)\left(\lambda - \tfrac{1}{4}\right)\left(\lambda + \tfrac{1}{4}\right),$$

donc les valeurs propres sont $1$, $\tfrac{1}{4}$ et $-\tfrac{1}{4}$. (Contrôle rapide : leur somme vaut $1 = \operatorname{tr} M$ ✓ et leur produit vaut $-\tfrac{1}{16} = \det M$ ✓)

En décomposant $X_0 = (1,\ 0,\ 0)^T$ dans une base de vecteurs propres, $X_t = M^t X_0$ contient les facteurs $\left(\tfrac{1}{4}\right)^t$ et $\left(-\tfrac{1}{4}\right)^t$, qui tendent vers $0$ car $\left|\pm\tfrac{1}{4}\right| < 1$. Seule survit la composante selon $V_1$ :

$$X_t \longrightarrow (0{,}20\ ;\ 0{,}40\ ;\ 0{,}40)^T.$$

À long terme, il fera donc soleil 20 % du temps, nuageux 40 % et pluvieux 40 % — indépendamment du temps qu'il fait aujourd'hui : la condition initiale « soleil lundi » finit par être oubliée.`,
          },
        ],
        answer: String.raw`À long terme, les prévisions tendent vers l'état d'équilibre $X^* = \left(\frac{1}{5},\ \frac{2}{5},\ \frac{2}{5}\right)^T = (0{,}20\ ;\ 0{,}40\ ;\ 0{,}40)^T$ : 20 % de soleil, 40 % de nuages, 40 % de pluie (quel que soit le temps initial).`,
      },
    ],
  },
  {
    id: "6.9",
    chapter: 6,
    title: "PageRank : peut-on manipuler les scores de pertinence ?",
    examType: false,
    statement: String.raw`Dans cet exercice, nous étudions les scores de pertinence $X$ obtenus comme solution de l'équation $A^T X = X$, où $A$ est la matrice de connectivité ajustée. (Les graphes des figures du syllabus sont décrits ci-dessous par la liste de leurs liens.)`,
    method: String.raw`Reprends la recette PageRank du cours : construis la matrice de connectivité ajustée $A$ (la ligne $i$ décrit les liens sortants de $P_i$, chacun pesant $1/(\text{nombre de liens sortants de } P_i)$), puis résous le système homogène $A^T X = X$, c'est-à-dire cherche les vecteurs propres de $A^T$ pour la valeur propre $1$. Compare ensuite les scores obtenus avant et après la modification du graphe.`,
    theoryRefs: ["PageRank", "Chaînes de Markov", "État d'équilibre"],
    parts: [
      {
        label: "a",
        statement: String.raw`Considérons le premier exemple étudié : quatre pages web reliées par les liens $P_1 \to P_2$, $P_1 \to P_3$, $P_1 \to P_4$ ; $P_2 \to P_3$, $P_2 \to P_4$ ; $P_3 \to P_1$ ; $P_4 \to P_1$, $P_4 \to P_3$.

Supposons que les propriétaires de la page $P_3$ ne sont pas contents du fait que leur site soit considéré comme moins pertinent que la page $P_1$. Est-ce qu'ils peuvent remédier à ce problème en créant une nouvelle page $P_5$ telle que $P_3 \to P_5$ et $P_5 \to P_3$ ?`,
        steps: [
          {
            title: "Rappeler la méthode PageRank",
            content: String.raw`📖 **Rappel du cours :** pour classer des pages web, on construit la **matrice de connectivité ajustée** $A$ : la ligne $i$ décrit les liens sortants de la page $P_i$, et chaque lien sortant reçoit le poids $\frac{1}{n_i}$, où $n_i$ est le nombre de liens sortants de $P_i$ (chaque ligne somme donc à 1). Le vecteur des scores de pertinence $X = (x_1, \ldots, x_n)^T$ est solution de

$$A^T X = X,$$

c'est-à-dire que $X$ est un vecteur propre de $A^T$ pour la valeur propre $1$. Interprétation : le score de $P_i$ est la somme des scores des pages qui pointent vers elle, chaque page « votante » partageant son propre score entre tous ses liens sortants. Comme $A^T$ est une matrice de Markov (ses colonnes somment à 1), la valeur propre $1$ existe toujours : $X$ est l'état d'équilibre d'un « surfeur aléatoire » qui clique au hasard.`,
          },
          {
            title: "Situation initiale : construire A et poser le système",
            content: String.raw`Comptons les liens sortants : $P_1$ en a 3 (vers $P_2$, $P_3$, $P_4$), $P_2$ en a 2 (vers $P_3$, $P_4$), $P_3$ en a 1 (vers $P_1$), $P_4$ en a 2 (vers $P_1$, $P_3$). D'où :

$$A = \begin{pmatrix} 0 & \frac{1}{3} & \frac{1}{3} & \frac{1}{3} \\ 0 & 0 & \frac{1}{2} & \frac{1}{2} \\ 1 & 0 & 0 & 0 \\ \frac{1}{2} & 0 & \frac{1}{2} & 0 \end{pmatrix}$$

Le système $A^T X = X$ s'écrit ligne par ligne (score de chaque page = ce que lui versent les pages qui pointent vers elle) :

$$\begin{cases} x_1 = x_3 + \frac{1}{2}x_4 \\ x_2 = \frac{1}{3}x_1 \\ x_3 = \frac{1}{3}x_1 + \frac{1}{2}x_2 + \frac{1}{2}x_4 \\ x_4 = \frac{1}{3}x_1 + \frac{1}{2}x_2 \end{cases}$$`,
          },
          {
            title: "Résoudre : les scores initiaux",
            content: String.raw`Le système est homogène et simplement indéterminé (normal : un vecteur propre est défini à un multiple près). Posons $x_1 = t$ et exprimons tout en fonction de $t$ :

- $x_2 = \frac{t}{3}$ ;
- $x_4 = \frac{t}{3} + \frac{1}{2} \cdot \frac{t}{3} = \frac{t}{2}$ ;
- de la première équation : $x_3 = t - \frac{1}{2} \cdot \frac{t}{2} = \frac{3t}{4}$.

**Contrôle dans la troisième équation :** $\frac{t}{3} + \frac{t}{6} + \frac{t}{4} = \frac{4t + 2t + 3t}{12} = \frac{3t}{4}$ ✓

En choisissant $t = 12$ pour avoir des nombres entiers :

$$X = (12,\ 4,\ 9,\ 6)^T.$$

On retrouve les scores de l'exemple du cours : $P_1$ (score 12) est jugée plus pertinente que $P_3$ (score 9) — d'où le mécontentement des propriétaires de $P_3$.`,
          },
          {
            title: "Nouveau graphe : ajouter la page P5",
            content: String.raw`Les propriétaires de $P_3$ créent une page $P_5$ avec $P_3 \to P_5$ et $P_5 \to P_3$. Attention aux deux conséquences :

- $P_3$ a maintenant **2** liens sortants ($P_3 \to P_1$ et $P_3 \to P_5$) : sa ligne devient $\left(\frac{1}{2},\ 0,\ 0,\ 0,\ \frac{1}{2}\right)$ ;
- $P_5$ a 1 seul lien sortant, vers $P_3$ : sa ligne est $(0,\ 0,\ 1,\ 0,\ 0)$.

$$A = \begin{pmatrix} 0 & \frac{1}{3} & \frac{1}{3} & \frac{1}{3} & 0 \\ 0 & 0 & \frac{1}{2} & \frac{1}{2} & 0 \\ \frac{1}{2} & 0 & 0 & 0 & \frac{1}{2} \\ \frac{1}{2} & 0 & \frac{1}{2} & 0 & 0 \\ 0 & 0 & 1 & 0 & 0 \end{pmatrix}$$

Le système $A^T X = X$ devient :

$$\begin{cases} x_1 = \frac{1}{2}x_3 + \frac{1}{2}x_4 \\ x_2 = \frac{1}{3}x_1 \\ x_3 = \frac{1}{3}x_1 + \frac{1}{2}x_2 + \frac{1}{2}x_4 + x_5 \\ x_4 = \frac{1}{3}x_1 + \frac{1}{2}x_2 \\ x_5 = \frac{1}{2}x_3 \end{cases}$$`,
          },
          {
            title: "Résoudre le nouveau système",
            content: String.raw`Même stratégie : posons $x_1 = t$.

- $x_2 = \frac{t}{3}$ ;
- $x_4 = \frac{t}{3} + \frac{t}{6} = \frac{t}{2}$ (inchangé) ;
- de la première équation : $\frac{1}{2}x_3 = t - \frac{1}{2} \cdot \frac{t}{2} = \frac{3t}{4}$, donc $x_3 = \frac{3t}{2}$ ;
- $x_5 = \frac{1}{2} \cdot \frac{3t}{2} = \frac{3t}{4}$.

**Contrôle dans la troisième équation :** $\frac{t}{3} + \frac{t}{6} + \frac{t}{4} + \frac{3t}{4} = \frac{3t}{4} + \frac{3t}{4} = \frac{3t}{2}$ ✓

Avec $t = 12$ :

$$X = (12,\ 4,\ 18,\ 6,\ 9)^T.$$`,
          },
          {
            title: "Conclure : la manipulation fonctionne",
            content: String.raw`Comparons : le score de $P_3$ est passé de $9$ à $18$, alors que celui de $P_1$ est resté à $12$. La page $P_3$ est maintenant **la plus pertinente** du réseau.

Donc **oui**, les propriétaires de $P_3$ peuvent remédier à leur problème en créant $P_5$. Le mécanisme : $P_5$ ne reçoit de score que de $P_3$, et le lui reverse intégralement — la boucle $P_3 \leftrightarrow P_5$ fait « rebondir » le score vers $P_3$ au lieu de le partager avec le reste du réseau.

**Remarque :** c'est exactement le genre de manipulation (« ferme de liens ») contre lequel les vrais moteurs de recherche doivent se protéger — d'où les raffinements de l'algorithme PageRank réel par rapport au modèle simple vu au cours.`,
          },
        ],
        answer: String.raw`Oui. Avant : $X = (12,\ 4,\ 9,\ 6)^T$, donc $P_3$ (9) est moins pertinente que $P_1$ (12). Après ajout de $P_5$ : $X = (12,\ 4,\ 18,\ 6,\ 9)^T$, et $P_3$ (18) devient la page la plus pertinente du réseau.`,
      },
      {
        label: "b",
        statement: String.raw`Considérons le deuxième exemple étudié : cinq pages web reliées par les liens $P_1 \to P_2$, $P_2 \to P_1$ ; $P_3 \to P_4$, $P_4 \to P_3$ ; $P_5 \to P_3$, $P_5 \to P_4$ (aucune page ne pointe vers $P_5$).

Si on ajoute un lien de la page $P_5$ vers la page $P_1$, les pages ne sont plus déconnectées. Calculez la dimension de $V_1(A^T)$. Est-ce que ce lien $P_5 \to P_1$ aide pour décider quelle page est la plus pertinente ?`,
        steps: [
          {
            title: "Construire la matrice de connectivité ajustée",
            content: String.raw`Avec le nouveau lien $P_5 \to P_1$, comptons les liens sortants : $P_1$ en a 1 (vers $P_2$), $P_2$ en a 1 (vers $P_1$), $P_3$ en a 1 (vers $P_4$), $P_4$ en a 1 (vers $P_3$), et $P_5$ en a désormais **3** (vers $P_1$, $P_3$ et $P_4$), chacun de poids $\frac{1}{3}$ :

$$A = \begin{pmatrix} 0 & 1 & 0 & 0 & 0 \\ 1 & 0 & 0 & 0 & 0 \\ 0 & 0 & 0 & 1 & 0 \\ 0 & 0 & 1 & 0 & 0 \\ \frac{1}{3} & 0 & \frac{1}{3} & \frac{1}{3} & 0 \end{pmatrix}$$

Chaque ligne somme bien à 1 ✓`,
          },
          {
            title: "Écrire le système des scores",
            content: String.raw`Le système $A^T X = X$ s'écrit (score de chaque page = somme des contributions des pages qui pointent vers elle) :

$$\begin{cases} x_1 = x_2 + \frac{1}{3}x_5 \\ x_2 = x_1 \\ x_3 = x_4 + \frac{1}{3}x_5 \\ x_4 = x_3 + \frac{1}{3}x_5 \\ x_5 = 0 \end{cases}$$

La dernière équation saute aux yeux : **aucune page ne pointe vers $P_5$**, donc la cinquième ligne de $A^T$ (ce que reçoit $P_5$) est nulle, et $x_5 = 0$ directement.`,
          },
          {
            title: "Résoudre et calculer la dimension de l'espace propre",
            content: String.raw`📖 **Rappel du cours :** $V_1(A^T)$ est le sous-vectoriel propre de $A^T$ associé à la valeur propre $1$, c'est-à-dire l'ensemble des solutions de $A^T X = X$ ; sa dimension mesure le nombre de « directions » indépendantes de scores d'équilibre.

En injectant $x_5 = 0$ dans les autres équations :

- $x_1 = x_2$ (les équations 1 et 2 deviennent identiques) ;
- $x_3 = x_4$ (les équations 3 et 4 deviennent identiques).

Les solutions sont donc, avec $x_1 = x$ et $x_3 = z$ comme paramètres libres :

$$(x_1,\ x_2,\ x_3,\ x_4,\ x_5)^T = x\,(1,\ 1,\ 0,\ 0,\ 0)^T + z\,(0,\ 0,\ 1,\ 1,\ 0)^T.$$

Le système est **doublement indéterminé** : $V_1(A^T)$ est engendré par les deux vecteurs linéairement indépendants $(1,\ 1,\ 0,\ 0,\ 0)^T$ et $(0,\ 0,\ 1,\ 1,\ 0)^T$, donc

$$\dim V_1(A^T) = 2.$$`,
          },
          {
            title: "Interpréter : pas de classement univoque",
            content: String.raw`Non, ce lien n'aide pas. Comme $\dim V_1(A^T) = 2$, le vecteur des scores n'est **pas** unique à un multiple près : selon le choix des paramètres $x$ et $z$, on peut rendre le bloc formé de $P_1$ et $P_2$ ou le bloc formé de $P_3$ et $P_4$ arbitrairement plus « pertinent » que l'autre. Impossible de faire un classement univoque des pages.

L'interprétation par le surfeur aléatoire est parlante : un utilisateur qui commence par la page $P_5$ n'y reviendra jamais (personne ne pointe vers $P_5$, d'où $x_5 = 0$), et un utilisateur pris dans la boucle $P_1 \leftrightarrow P_2$ ne visitera jamais $P_3$ ni $P_4$ (et réciproquement) : les deux boucles restent « étanches » du point de vue du classement, même si le graphe est connexe.

**Moralité :** il ne suffit pas que $A^T$ soit une matrice de Markov pour garantir un classement unique — il faut de plus que **tous ses éléments soient strictement positifs** (chaque page doit pouvoir « verser » un peu de score à chaque page). C'est cette condition qui assure $\dim V_1(A^T) = 1$, et c'est pourquoi l'algorithme PageRank réel remplace $A^T$ par une matrice voisine à coefficients tous strictement positifs.`,
          },
        ],
        answer: String.raw`$\dim V_1(A^T) = 2$ : les solutions sont $(x_1,\ x_2,\ x_3,\ x_4,\ x_5)^T = x\,(1,\ 1,\ 0,\ 0,\ 0)^T + z\,(0,\ 0,\ 1,\ 1,\ 0)^T$, avec en particulier $x_5 = 0$. Non, le lien $P_5 \to P_1$ n'aide pas : aucun classement univoque n'est possible. Il ne suffit pas que $A^T$ soit une matrice de Markov, il faut aussi que tous ses éléments soient strictement positifs.`,
      },
    ],
  },
];
