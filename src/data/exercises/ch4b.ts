import type { Exercise } from "./types";

export const exercises: Exercise[] = [
  {
    id: "4.6",
    chapter: 4,
    title: "Discussion du rang avec paramètre",
    examType: true,
    statement: String.raw`Discutez le rang des matrices suivantes en fonction des valeurs du paramètre $m \in \mathbb{R}$.`,
    method: String.raw`Pour une matrice carrée, calcule le déterminant en fonction de $m$ et factorise-le : le rang vaut $3$ exactement quand le déterminant est non nul. Pour les valeurs de $m$ qui annulent le déterminant, redescends d'un cran : cherche un mineur d'ordre $2$ non nul. Pour une matrice non carrée $3 \times 4$, le rang vaut au plus $3$ : il suffit de trouver un mineur d'ordre $3$ non nul — idéalement un mineur qui ne contient pas $m$.`,
    theoryRefs: ["Rang avec paramètre", "Rang et systèmes"],
    parts: [
      {
        label: "a",
        statement: String.raw`$$A = \begin{pmatrix} m & 1 & 1 \\ 1 & m & 1 \\ 1 & 1 & m \end{pmatrix}$$`,
        steps: [
          {
            title: "Relier le rang au déterminant",
            content: String.raw`📖 **Rappel du cours :** le rang d'une matrice est l'ordre du plus grand mineur (sous-déterminant) non nul qu'on peut en extraire. Pour une matrice carrée $3 \times 3$, cela donne un critère très pratique :

- $\operatorname{rg}(A) = 3 \iff \det A \neq 0$
- si $\det A = 0$ mais qu'il existe un mineur d'ordre $2$ non nul, alors $\operatorname{rg}(A) = 2$
- si tous les mineurs d'ordre $2$ sont nuls mais que $A \neq 0$, alors $\operatorname{rg}(A) = 1$.

La stratégie est donc : calculer $\det A$ en fonction de $m$, le factoriser, puis discuter selon les valeurs de $m$ qui l'annulent.`,
          },
          {
            title: "Calculer et factoriser le déterminant",
            content: String.raw`Remarque que la somme des éléments de chaque colonne vaut toujours $m + 2$ : c'est le signe qu'une astuce va simplifier le calcul. Ajoute les lignes $2$ et $3$ à la ligne $1$ (opération élémentaire qui ne change pas le déterminant) :

$$\det A = \begin{vmatrix} m & 1 & 1 \\ 1 & m & 1 \\ 1 & 1 & m \end{vmatrix} \xrightarrow{L_1 \leftarrow L_1 + L_2 + L_3} \begin{vmatrix} m+2 & m+2 & m+2 \\ 1 & m & 1 \\ 1 & 1 & m \end{vmatrix} = (m+2)\begin{vmatrix} 1 & 1 & 1 \\ 1 & m & 1 \\ 1 & 1 & m \end{vmatrix}$$

On a mis $(m+2)$ en évidence dans la première ligne. Ensuite, soustrais la colonne $1$ des colonnes $2$ et $3$ pour créer des zéros :

$$\det A = (m+2)\begin{vmatrix} 1 & 0 & 0 \\ 1 & m-1 & 0 \\ 1 & 0 & m-1 \end{vmatrix} = (m+2)(m-1)^2$$

(le dernier déterminant est triangulaire : produit des éléments diagonaux).`,
          },
          {
            title: "Traiter le cas général",
            content: String.raw`Le déterminant $(m+2)(m-1)^2$ s'annule uniquement pour $m = -2$ et $m = 1$.

Donc si $m \neq 1$ et $m \neq -2$, on a $\det A \neq 0$ et $\operatorname{rg}(A) = 3$.

Il reste à examiner un par un les deux cas particuliers.`,
          },
          {
            title: "Étudier le cas m = 1",
            content: String.raw`Pour $m = 1$, la matrice devient

$$A = \begin{pmatrix} 1 & 1 & 1 \\ 1 & 1 & 1 \\ 1 & 1 & 1 \end{pmatrix}$$

Toutes les lignes sont identiques : n'importe quel mineur d'ordre $2$ vaut $1 \cdot 1 - 1 \cdot 1 = 0$. Comme la matrice n'est pas nulle (il existe un mineur d'ordre $1$ non nul, par exemple l'élément $1$), on conclut que $\operatorname{rg}(A) = 1$.`,
          },
          {
            title: "Étudier le cas m = −2 et conclure",
            content: String.raw`Pour $m = -2$, la matrice devient

$$A = \begin{pmatrix} -2 & 1 & 1 \\ 1 & -2 & 1 \\ 1 & 1 & -2 \end{pmatrix}$$

Le déterminant est nul (c'est pour ça qu'on est ici), donc $\operatorname{rg}(A) \leq 2$. Cherche un mineur d'ordre $2$ non nul, par exemple celui du coin supérieur gauche :

$$\begin{vmatrix} -2 & 1 \\ 1 & -2 \end{vmatrix} = 4 - 1 = 3 \neq 0$$

Donc $\operatorname{rg}(A) = 2$.

**Vérification :** pour $m = -2$, la somme des trois lignes donne bien la ligne nulle ($-2+1+1 = 0$ dans chaque colonne), ce qui confirme que les lignes sont liées et que le rang est strictement inférieur à $3$. ✓`,
          },
        ],
        answer: String.raw`$\det A = (m+2)(m-1)^2$.

- Si $m \neq 1$ et $m \neq -2$ : $\operatorname{rg}(A) = 3$.
- Si $m = 1$ : $\operatorname{rg}(A) = 1$.
- Si $m = -2$ : $\operatorname{rg}(A) = 2$.`,
      },
      {
        label: "b",
        statement: String.raw`$$A = \begin{pmatrix} 1 & 2 & m \\ 0 & 1 & 2 \\ m & 0 & 1 \end{pmatrix}$$`,
        steps: [
          {
            title: "Calculer le déterminant en fonction de m",
            content: String.raw`Même stratégie qu'au point a) : le rang vaut $3$ si et seulement si $\det A \neq 0$.

Développe selon la première colonne (elle contient déjà un zéro, ce qui réduit le travail) :

$$\det A = 1 \cdot \begin{vmatrix} 1 & 2 \\ 0 & 1 \end{vmatrix} - 0 + m \cdot \begin{vmatrix} 2 & m \\ 1 & 2 \end{vmatrix} = 1 \cdot (1 - 0) + m(4 - m) = -m^2 + 4m + 1$$`,
          },
          {
            title: "Chercher les racines du déterminant",
            content: String.raw`Résous $-m^2 + 4m + 1 = 0$, c'est-à-dire $m^2 - 4m - 1 = 0$. Le discriminant vaut

$$\Delta = (-4)^2 - 4 \cdot 1 \cdot (-1) = 16 + 4 = 20$$

donc

$$m = \frac{4 \pm \sqrt{20}}{2} = \frac{4 \pm 2\sqrt{5}}{2} = 2 \pm \sqrt{5}$$

Le déterminant s'annule uniquement pour $m = 2 + \sqrt{5}$ et $m = 2 - \sqrt{5}$.`,
          },
          {
            title: "Conclure le cas général",
            content: String.raw`Si $m \neq 2 + \sqrt{5}$ et $m \neq 2 - \sqrt{5}$, alors $\det A \neq 0$ et $\operatorname{rg}(A) = 3$.`,
          },
          {
            title: "Étudier les deux valeurs critiques",
            content: String.raw`Pour $m = 2 \pm \sqrt{5}$, on a $\det A = 0$, donc $\operatorname{rg}(A) \leq 2$. Plutôt que de remplacer $m$ par ces valeurs peu sympathiques, choisis astucieusement un mineur d'ordre $2$ **qui ne contient pas $m$** : celui formé des deux premières lignes et des deux premières colonnes,

$$\begin{vmatrix} 1 & 2 \\ 0 & 1 \end{vmatrix} = 1 \neq 0$$

Ce mineur est non nul quelle que soit la valeur de $m$, donc dans les deux cas critiques $\operatorname{rg}(A) = 2$.`,
          },
        ],
        answer: String.raw`$\det A = -m^2 + 4m + 1$, qui s'annule pour $m = 2 \pm \sqrt{5}$.

- Si $m \neq 2 + \sqrt{5}$ et $m \neq 2 - \sqrt{5}$ : $\operatorname{rg}(A) = 3$.
- Si $m = 2 + \sqrt{5}$ ou $m = 2 - \sqrt{5}$ : $\operatorname{rg}(A) = 2$.`,
      },
      {
        label: "c",
        statement: String.raw`$$A = \begin{pmatrix} 1 & 2 & -1 & 3 \\ 1 & 4 & 1 & 2 \\ 2 & 3 & 0 & m \end{pmatrix}$$`,
        steps: [
          {
            title: "Borner le rang d'une matrice non carrée",
            content: String.raw`📖 **Rappel du cours :** le rang d'une matrice de dimension $(p \times q)$ vaut au plus $\min(p, q)$. Ici la matrice est $3 \times 4$, donc

$$\operatorname{rg}(A) \leq \min(3, 4) = 3$$

On ne peut pas calculer « le » déterminant de $A$ (elle n'est pas carrée), mais on peut extraire des mineurs d'ordre $3$ en choisissant $3$ colonnes parmi les $4$. S'il en existe un non nul, le rang vaut $3$.`,
          },
          {
            title: "Choisir un mineur d'ordre 3 sans le paramètre",
            content: String.raw`L'astuce décisive : le paramètre $m$ n'apparaît que dans la **quatrième colonne**. Si on choisit le mineur formé des colonnes $1$, $2$ et $3$, il ne contient pas $m$ du tout — sa valeur sera la même pour tous les $m$ :

$$\begin{vmatrix} 1 & 2 & -1 \\ 1 & 4 & 1 \\ 2 & 3 & 0 \end{vmatrix} = 1(4 \cdot 0 - 1 \cdot 3) - 2(1 \cdot 0 - 1 \cdot 2) + (-1)(1 \cdot 3 - 4 \cdot 2) = -3 + 4 + 5 = 6$$`,
          },
          {
            title: "Conclure sans discussion",
            content: String.raw`Ce mineur d'ordre $3$ vaut $6 \neq 0$ quelle que soit la valeur de $m$. Donc

$$\operatorname{rg}(A) = 3 \quad \text{pour tout } m \in \mathbb{R}$$

Il n'y a ici **aucune discussion** à mener : le paramètre $m$ n'influence pas le rang. C'est un piège classique d'examen — ne force pas une discussion là où il n'y en a pas !`,
          },
        ],
        answer: String.raw`$\operatorname{rg}(A) = 3$ pour tout $m \in \mathbb{R}$ : le mineur formé des colonnes $1$, $2$, $3$ vaut $6 \neq 0$ et ne dépend pas de $m$.`,
      },
    ],
  },
  {
    id: "4.7",
    chapter: 4,
    title: "Base et dimension d'un sous-vectoriel engendré",
    examType: true,
    statement: String.raw`On considère le sous-vectoriel de $\mathbb{R}^3$ engendré par les vecteurs $(6, -1, -3)^T$, $(2, 0, 1)^T$, $(8, -1, -2)^T$, $(4, -1, -4)^T$, $(-4, 1, 4)^T$.`,
    method: String.raw`La dimension du sous-vectoriel engendré est le rang de la matrice formée par les cinq vecteurs : échelonne-la par la méthode de Gauss pour repérer combien de vecteurs sont réellement « utiles » et lesquels sont des combinaisons linéaires des autres. Pour le point b), traduis l'appartenance au sous-vectoriel en un système linéaire dont les inconnues sont les coefficients de la combinaison linéaire.`,
    theoryRefs: ["Sous-vectoriels", "Base et dimension", "Rang et systèmes"],
    parts: [
      {
        label: "a",
        statement: String.raw`Donnez une base et la dimension de ce sous-vectoriel.`,
        steps: [
          {
            title: "Rappeler ce qu'on cherche",
            content: String.raw`📖 **Rappel du cours :** le sous-vectoriel engendré par $V_1, \dots, V_5$ est l'ensemble de toutes leurs combinaisons linéaires. Une **base** de ce sous-vectoriel est une famille de vecteurs à la fois **génératrice** (toute combinaison des cinq vecteurs peut s'écrire avec eux seuls) et **libre** (linéairement indépendante). La **dimension** est le nombre de vecteurs d'une base — et c'est exactement le **rang** de la matrice dont les lignes sont $V_1, \dots, V_5$.

Notons $V_1 = (6, -1, -3)^T$, $V_2 = (2, 0, 1)^T$, $V_3 = (8, -1, -2)^T$, $V_4 = (4, -1, -4)^T$, $V_5 = (-4, 1, 4)^T$.`,
          },
          {
            title: "Échelonner la matrice des vecteurs",
            content: String.raw`Place les cinq vecteurs en lignes et échelonne avec Gauss. Utilise $L_1$ pour nettoyer les lignes $3$, $4$ et $5$, puis $L_2$ :

$$\begin{pmatrix} 6 & -1 & -3 \\ 2 & 0 & 1 \\ 8 & -1 & -2 \\ 4 & -1 & -4 \\ -4 & 1 & 4 \end{pmatrix} \xrightarrow{\substack{L_3 \leftarrow L_3 - L_1 \\ L_4 \leftarrow L_4 - L_1 \\ L_5 \leftarrow L_5 + L_1}} \begin{pmatrix} 6 & -1 & -3 \\ 2 & 0 & 1 \\ 2 & 0 & 1 \\ -2 & 0 & -1 \\ 2 & 0 & 1 \end{pmatrix} \xrightarrow{\substack{L_3 \leftarrow L_3 - L_2 \\ L_4 \leftarrow L_4 + L_2 \\ L_5 \leftarrow L_5 - L_2}} \begin{pmatrix} 6 & -1 & -3 \\ 2 & 0 & 1 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix}$$

Trois lignes se sont annulées : seuls deux vecteurs « comptent ». Le rang de la matrice vaut $2$.`,
          },
          {
            title: "Interpréter : trois vecteurs sont superflus",
            content: String.raw`Les opérations ci-dessus traduisent des relations de dépendance linéaire :

- $V_3 = V_1 + V_2$ (en effet $(6+2, -1+0, -3+1)^T = (8, -1, -2)^T$ ✓)
- $V_4 = V_1 - V_2$ (en effet $(6-2, -1-0, -3-1)^T = (4, -1, -4)^T$ ✓)
- $V_5 = -V_4 = V_2 - V_1$ (en effet $(-4, 1, 4)^T = -(4, -1, -4)^T$ ✓)

Donc $V_3$, $V_4$ et $V_5$ sont des combinaisons linéaires de $V_1$ et $V_2$ : tout ce que les cinq vecteurs engendrent, $V_1$ et $V_2$ l'engendrent déjà à eux seuls.`,
          },
          {
            title: "Vérifier que la famille restante est libre et conclure",
            content: String.raw`Il reste à vérifier que $\{V_1, V_2\}$ est une famille **libre**. Pour deux vecteurs, c'est simple : ils sont linéairement dépendants si et seulement si l'un est un multiple de l'autre. Or il n'existe pas de $\lambda$ tel que $(6, -1, -3)^T = \lambda\,(2, 0, 1)^T$ (la deuxième composante imposerait $-1 = \lambda \cdot 0 = 0$, absurde). Donc $V_1$ et $V_2$ sont linéairement indépendants.

La famille $\{V_1, V_2\}$ est libre et génératrice : c'est une **base** du sous-vectoriel, qui est donc de **dimension 2** (géométriquement, un plan passant par l'origine dans $\mathbb{R}^3$).`,
          },
        ],
        answer: String.raw`Le sous-vectoriel est de dimension $2$ ; une base est $\left\{ (6, -1, -3)^T,\; (2, 0, 1)^T \right\}$ (les trois autres vecteurs en sont des combinaisons linéaires).`,
      },
      {
        label: "b",
        statement: String.raw`Déterminez $a$ pour que le vecteur $(2, -2, a)^T$ lui appartienne.`,
        steps: [
          {
            title: "Traduire l'appartenance en système",
            content: String.raw`📖 **Rappel du cours :** un vecteur appartient à un sous-vectoriel si et seulement s'il s'écrit comme combinaison linéaire d'une base de ce sous-vectoriel.

Ici : $(2, -2, a)^T$ appartient au sous-vectoriel si et seulement s'il existe $\alpha, \beta \in \mathbb{R}$ tels que

$$\alpha \begin{pmatrix} 6 \\ -1 \\ -3 \end{pmatrix} + \beta \begin{pmatrix} 2 \\ 0 \\ 1 \end{pmatrix} = \begin{pmatrix} 2 \\ -2 \\ a \end{pmatrix} \iff \begin{cases} 6\alpha + 2\beta = 2 \\ -\alpha = -2 \\ -3\alpha + \beta = a \end{cases}$$`,
          },
          {
            title: "Résoudre le système",
            content: String.raw`La deuxième équation donne immédiatement $\alpha = 2$.

En reportant dans la première : $12 + 2\beta = 2$, donc $\beta = -5$.

La troisième équation impose alors la valeur de $a$ :

$$a = -3\alpha + \beta = -6 - 5 = -11$$`,
          },
          {
            title: "Vérifier",
            content: String.raw`**Vérification :** recalcule la combinaison linéaire complète avec $\alpha = 2$ et $\beta = -5$ :

$$2 \begin{pmatrix} 6 \\ -1 \\ -3 \end{pmatrix} - 5 \begin{pmatrix} 2 \\ 0 \\ 1 \end{pmatrix} = \begin{pmatrix} 12 - 10 \\ -2 - 0 \\ -6 - 5 \end{pmatrix} = \begin{pmatrix} 2 \\ -2 \\ -11 \end{pmatrix} \checkmark$$

On retrouve bien $(2, -2, -11)^T$ : le vecteur appartient au sous-vectoriel exactement quand $a = -11$.`,
          },
        ],
        answer: String.raw`$a = -11$ (avec $\alpha = 2$ et $\beta = -5$ : $(2, -2, -11)^T = 2\,(6, -1, -3)^T - 5\,(2, 0, 1)^T$).`,
      },
    ],
  },
  {
    id: "4.8",
    chapter: 4,
    title: "Sous-vectoriels de R² : oui ou non ?",
    examType: false,
    statement: String.raw`Chacun des ensembles suivants est-il un sous-vectoriel de $\mathbb{R}^2$ ? Si oui, donnez la dimension et une base.`,
    method: String.raw`Applique systématiquement le critère du cours : un sous-vectoriel doit contenir le vecteur nul, être stable pour l'addition et stable pour la multiplication par un scalaire. Le test le plus rapide est de vérifier d'abord si $(0, 0)^T$ appartient à l'ensemble : si non, c'est terminé, ce n'est pas un sous-vectoriel. Pour conclure « oui », il faut vérifier les trois conditions ; pour conclure « non », un seul contre-exemple suffit.`,
    theoryRefs: ["Sous-vectoriels", "Base et dimension"],
    parts: [
      {
        label: "a",
        statement: String.raw`$\{(0, x)^T : x \in \mathbb{R}\}$`,
        steps: [
          {
            title: "Rappeler le critère de sous-vectoriel",
            content: String.raw`📖 **Rappel du cours :** un ensemble $F \subseteq \mathbb{R}^n$ est un **sous-vectoriel** de $\mathbb{R}^n$ si et seulement si

- le vecteur nul appartient à $F$ ;
- $F$ est stable pour l'addition : $X, Y \in F \Rightarrow X + Y \in F$ ;
- $F$ est stable pour la multiplication scalaire : $X \in F$ et $\lambda \in \mathbb{R} \Rightarrow \lambda X \in F$.

Ici, l'ensemble $E = \{(0, x)^T : x \in \mathbb{R}\}$ est l'axe vertical du plan (tous les vecteurs dont la première composante est nulle).`,
          },
          {
            title: "Vérifier les trois conditions",
            content: String.raw`- **Vecteur nul :** en prenant $x = 0$, on obtient $(0, 0)^T \in E$. ✓
- **Addition :** $(0, x)^T + (0, x')^T = (0, x + x')^T$, qui est bien de la forme voulue (première composante nulle). ✓
- **Multiplication scalaire :** $\lambda\,(0, x)^T = (0, \lambda x)^T \in E$. ✓

Les trois conditions sont satisfaites : $E$ est un sous-vectoriel de $\mathbb{R}^2$.`,
          },
          {
            title: "Donner une base et la dimension",
            content: String.raw`Tout élément de $E$ s'écrit

$$(0, x)^T = x\,(0, 1)^T$$

Le vecteur $(0, 1)^T$ engendre donc $E$ à lui seul, et une famille d'un seul vecteur non nul est toujours libre. Donc $\{(0, 1)^T\}$ est une base de $E$ et $\dim E = 1$ : c'est une droite vectorielle (l'axe des ordonnées).`,
          },
        ],
        answer: String.raw`**Oui**, c'est un sous-vectoriel de $\mathbb{R}^2$, de dimension $1$, de base $\{(0, 1)^T\}$.`,
      },
      {
        label: "b",
        statement: String.raw`$\{(x, 2x)^T : x \in \mathbb{R}\}$`,
        steps: [
          {
            title: "Vérifier le critère",
            content: String.raw`L'ensemble $E = \{(x, 2x)^T : x \in \mathbb{R}\}$ est la droite d'équation $y = 2x$ dans le plan. Applique le critère :

- **Vecteur nul :** pour $x = 0$, $(0, 0)^T \in E$. ✓
- **Addition :** $(x, 2x)^T + (x', 2x')^T = (x + x', 2(x + x'))^T$, qui est de la forme $(u, 2u)^T$ avec $u = x + x'$. ✓
- **Multiplication scalaire :** $\lambda\,(x, 2x)^T = (\lambda x, 2\lambda x)^T$, de la forme $(u, 2u)^T$ avec $u = \lambda x$. ✓

Donc $E$ est un sous-vectoriel de $\mathbb{R}^2$.`,
          },
          {
            title: "Extraire une base et la dimension",
            content: String.raw`Tout élément de $E$ s'écrit

$$(x, 2x)^T = x\,(1, 2)^T$$

Donc $E$ est engendré par le seul vecteur non nul $(1, 2)^T$, qui forme à lui seul une famille libre : $\{(1, 2)^T\}$ est une base et $\dim E = 1$.

**Vérification :** $(1, 2)^T$ appartient bien à $E$ (prends $x = 1$ : la deuxième composante vaut $2 \cdot 1 = 2$). ✓`,
          },
        ],
        answer: String.raw`**Oui**, c'est un sous-vectoriel de $\mathbb{R}^2$ (la droite $y = 2x$), de dimension $1$, de base $\{(1, 2)^T\}$.`,
      },
      {
        label: "c",
        statement: String.raw`$\{(x, 2x + 1)^T : x \in \mathbb{R}\}$`,
        steps: [
          {
            title: "Tester le vecteur nul en premier",
            content: String.raw`📖 **Rappel du cours :** tout sous-vectoriel contient obligatoirement le vecteur nul. C'est donc le premier test à faire — s'il échoue, on peut conclure immédiatement.

Le vecteur $(0, 0)^T$ appartient-il à $E = \{(x, 2x + 1)^T : x \in \mathbb{R}\}$ ? Il faudrait un $x$ tel que $x = 0$ **et** $2x + 1 = 0$. Or $x = 0$ donne $2 \cdot 0 + 1 = 1 \neq 0$ : impossible.`,
          },
          {
            title: "Conclure avec un contre-exemple",
            content: String.raw`Le vecteur nul n'appartient pas à $E$, donc $E$ **n'est pas** un sous-vectoriel de $\mathbb{R}^2$.

Géométriquement, $E$ est la droite $y = 2x + 1$ : une droite **affine** qui ne passe pas par l'origine. Remarque qu'en plus, la stabilité échoue aussi : $(0, 1)^T \in E$ et $(1, 3)^T \in E$, mais leur somme $(1, 4)^T \notin E$ car $2 \cdot 1 + 1 = 3 \neq 4$. Un seul contre-exemple suffit pour conclure.`,
          },
        ],
        answer: String.raw`**Non** : le vecteur nul $(0,0)^T$ n'appartient pas à l'ensemble (pour $x = 0$ on obtient $(0, 1)^T$). C'est une droite affine qui ne passe pas par l'origine.`,
      },
      {
        label: "d",
        statement: String.raw`$\{(x, y)^T \in \mathbb{R}^2 : x + y + 1 = 0\}$`,
        steps: [
          {
            title: "Tester le vecteur nul",
            content: String.raw`Teste d'abord si $(0, 0)^T$ vérifie l'équation qui définit l'ensemble :

$$0 + 0 + 1 = 1 \neq 0$$

Le vecteur nul ne satisfait pas la condition $x + y + 1 = 0$, donc il n'appartient pas à l'ensemble.`,
          },
          {
            title: "Conclure et comprendre pourquoi",
            content: String.raw`L'ensemble **n'est pas** un sous-vectoriel de $\mathbb{R}^2$.

📖 **Rappel du cours :** l'ensemble des solutions d'un système linéaire est un sous-vectoriel uniquement quand le système est **homogène** (second membre nul). Ici l'équation $x + y = -1$ a un second membre non nul : c'est la droite affine $y = -x - 1$, parallèle à la droite vectorielle $x + y = 0$ mais décalée hors de l'origine.

Pour t'en convaincre autrement : $(-1, 0)^T$ et $(0, -1)^T$ appartiennent tous deux à l'ensemble, mais leur somme $(-1, -1)^T$ donne $-1 - 1 + 1 = -1 \neq 0$ : la stabilité pour l'addition échoue aussi.`,
          },
        ],
        answer: String.raw`**Non** : $(0, 0)^T$ ne vérifie pas $x + y + 1 = 0$ (on obtient $1 \neq 0$). L'équation n'est pas homogène.`,
      },
      {
        label: "e",
        statement: String.raw`$\{(x, y)^T \in \mathbb{R}^2 : x > 0, x = y\}$`,
        steps: [
          {
            title: "Tester le vecteur nul",
            content: String.raw`L'ensemble $E$ est la demi-droite $y = x$ restreinte à $x > 0$ (inégalité **stricte**).

Le vecteur nul $(0, 0)^T$ vérifie bien $x = y$, mais **pas** $x > 0$ (car « $0 > 0$ » est faux). Donc $(0, 0)^T \notin E$ : cela suffit déjà pour conclure que $E$ n'est pas un sous-vectoriel.`,
          },
          {
            title: "Illustrer avec la stabilité scalaire",
            content: String.raw`Pour bien voir ce qui cloche, regarde aussi la multiplication par un scalaire négatif : $(1, 1)^T \in E$ (on a $1 > 0$ et $1 = 1$), mais

$$(-1) \cdot (1, 1)^T = (-1, -1)^T \notin E \quad \text{car } -1 > 0 \text{ est faux}$$

Une demi-droite n'est jamais stable par multiplication par $-1$ : $E$ **n'est pas** un sous-vectoriel de $\mathbb{R}^2$.`,
          },
        ],
        answer: String.raw`**Non** : le vecteur nul n'appartient pas à l'ensemble (l'inégalité $x > 0$ est stricte), et la stabilité échoue : $(1,1)^T$ est dans l'ensemble mais $-(1,1)^T = (-1,-1)^T$ n'y est pas.`,
      },
    ],
  },
  {
    id: "4.9",
    chapter: 4,
    title: "Sous-vectoriels de R³ : dimension et base",
    examType: true,
    statement: String.raw`Chacun des ensembles suivants est-il un sous-vectoriel de $\mathbb{R}^3$ ? Si oui, donnez la dimension et une base.`,
    method: String.raw`Deux réflexes du cours : (1) un ensemble décrit par des paramètres est un sous-vectoriel s'il s'écrit comme ensemble des combinaisons linéaires de vecteurs fixes — décompose l'expression pour faire apparaître ces vecteurs générateurs ; (2) un ensemble décrit par des équations est un sous-vectoriel si les équations sont linéaires et homogènes. Dans tous les cas, teste d'abord le vecteur nul : s'il manque, c'est non. Pour la base, paramètre l'ensemble et lis les vecteurs générateurs.`,
    theoryRefs: ["Sous-vectoriels", "Base et dimension"],
    parts: [
      {
        label: "a",
        statement: String.raw`$\{(x, 2y, 3z)^T : x, y, z \in \mathbb{R}\}$`,
        steps: [
          {
            title: "Faire apparaître des vecteurs générateurs",
            content: String.raw`Décompose un élément générique de $E = \{(x, 2y, 3z)^T : x, y, z \in \mathbb{R}\}$ selon les paramètres :

$$\begin{pmatrix} x \\ 2y \\ 3z \end{pmatrix} = x \begin{pmatrix} 1 \\ 0 \\ 0 \end{pmatrix} + y \begin{pmatrix} 0 \\ 2 \\ 0 \end{pmatrix} + z \begin{pmatrix} 0 \\ 0 \\ 3 \end{pmatrix}$$

📖 **Rappel du cours :** l'ensemble de toutes les combinaisons linéaires de vecteurs fixes est toujours un sous-vectoriel (c'est le sous-vectoriel **engendré** par ces vecteurs). Donc $E$ est bien un sous-vectoriel de $\mathbb{R}^3$.`,
          },
          {
            title: "Reconnaître R³ tout entier",
            content: String.raw`Attention au piège : les coefficients $2$ et $3$ ne « réduisent » rien du tout, car $y$ et $z$ parcourent **tout** $\mathbb{R}$. N'importe quel vecteur $(u, v, w)^T$ de $\mathbb{R}^3$ appartient à $E$ : il suffit de choisir

$$x = u, \qquad y = \frac{v}{2}, \qquad z = \frac{w}{3}$$

Donc $E = \mathbb{R}^3$ tout entier.`,
          },
          {
            title: "Conclure : dimension et base",
            content: String.raw`Comme $E = \mathbb{R}^3$, on a $\dim E = 3$ et on peut prendre comme base la **base canonique**

$$\left\{ (1, 0, 0)^T,\; (0, 1, 0)^T,\; (0, 0, 1)^T \right\}$$

(les trois générateurs $(1,0,0)^T$, $(0,2,0)^T$, $(0,0,3)^T$ conviennent aussi : leur déterminant vaut $1 \cdot 2 \cdot 3 = 6 \neq 0$, ils sont donc linéairement indépendants).`,
          },
        ],
        answer: String.raw`**Oui** : l'ensemble est $\mathbb{R}^3$ tout entier, de dimension $3$ ; une base est la base canonique $\{(1,0,0)^T, (0,1,0)^T, (0,0,1)^T\}$.`,
      },
      {
        label: "b",
        statement: String.raw`$\{(x, 0, x + 1)^T : x \in \mathbb{R}\}$`,
        steps: [
          {
            title: "Tester le vecteur nul",
            content: String.raw`📖 **Rappel du cours :** tout sous-vectoriel contient le vecteur nul — c'est le test à faire en premier.

Pour que $(x, 0, x+1)^T = (0, 0, 0)^T$, il faudrait simultanément $x = 0$ et $x + 1 = 0$, c'est-à-dire $x = 0$ et $x = -1$ : impossible. Le vecteur nul n'appartient donc pas à l'ensemble.`,
          },
          {
            title: "Conclure",
            content: String.raw`L'ensemble **n'est pas** un sous-vectoriel de $\mathbb{R}^3$.

Géométriquement, $(x, 0, x+1)^T = (0, 0, 1)^T + x\,(1, 0, 1)^T$ : c'est une droite **affine**, translatée de la droite vectorielle engendrée par $(1, 0, 1)^T$, qui ne passe pas par l'origine à cause du terme constant $(0, 0, 1)^T$.`,
          },
        ],
        answer: String.raw`**Non** : le vecteur nul n'appartient pas à l'ensemble ($x = 0$ et $x + 1 = 0$ sont incompatibles). C'est une droite affine ne passant pas par l'origine.`,
      },
      {
        label: "c",
        statement: String.raw`$\{(x, y, z)^T \in \mathbb{R}^3 : x + y + z = 0\}$`,
        steps: [
          {
            title: "Reconnaître un système homogène",
            content: String.raw`📖 **Rappel du cours :** l'ensemble des solutions d'un système linéaire **homogène** (second membre nul) est toujours un sous-vectoriel de $\mathbb{R}^n$.

Ici, $E$ est l'ensemble des solutions de l'unique équation homogène $x + y + z = 0$ : c'est donc un sous-vectoriel de $\mathbb{R}^3$. On peut aussi le vérifier à la main : $(0,0,0)^T$ vérifie l'équation ; si $X$ et $X'$ la vérifient, alors $X + X'$ et $\lambda X$ aussi.`,
          },
          {
            title: "Paramétrer l'ensemble",
            content: String.raw`Résous l'équation : une équation, trois inconnues, donc deux paramètres libres. Choisis $x$ et $y$ libres, alors $z = -x - y$ :

$$\begin{pmatrix} x \\ y \\ -x - y \end{pmatrix} = x \begin{pmatrix} 1 \\ 0 \\ -1 \end{pmatrix} + y \begin{pmatrix} 0 \\ 1 \\ -1 \end{pmatrix}$$

Les deux vecteurs $(1, 0, -1)^T$ et $(0, 1, -1)^T$ engendrent donc $E$.`,
          },
          {
            title: "Vérifier la liberté et conclure",
            content: String.raw`Les deux vecteurs ne sont pas proportionnels (regarde les deux premières composantes : $(1, 0)$ n'est pas un multiple de $(0, 1)$), donc ils forment une famille libre.

$\{(1, 0, -1)^T, (0, 1, -1)^T\}$ est une base de $E$ et $\dim E = 2$ : c'est un plan vectoriel de $\mathbb{R}^3$.

**Vérification :** chaque vecteur de base satisfait bien l'équation : $1 + 0 + (-1) = 0$ ✓ et $0 + 1 + (-1) = 0$ ✓.`,
          },
        ],
        answer: String.raw`**Oui** : sous-vectoriel de dimension $2$ (un plan), de base $\{(1, 0, -1)^T, (0, 1, -1)^T\}$.`,
      },
      {
        label: "d",
        statement: String.raw`$\{(x, y, z)^T \in \mathbb{R}^3 : 2x - z = 0\}$`,
        steps: [
          {
            title: "Reconnaître un système homogène",
            content: String.raw`Même situation qu'au point c) : $E$ est l'ensemble des solutions de l'équation linéaire **homogène** $2x - z = 0$, donc c'est un sous-vectoriel de $\mathbb{R}^3$ (le vecteur nul vérifie $2 \cdot 0 - 0 = 0$, et les combinaisons linéaires de solutions restent solutions).`,
          },
          {
            title: "Paramétrer l'ensemble",
            content: String.raw`L'équation donne $z = 2x$, et $y$ n'est soumis à aucune contrainte : $x$ et $y$ sont libres. Un élément générique s'écrit

$$\begin{pmatrix} x \\ y \\ 2x \end{pmatrix} = x \begin{pmatrix} 1 \\ 0 \\ 2 \end{pmatrix} + y \begin{pmatrix} 0 \\ 1 \\ 0 \end{pmatrix}$$`,
          },
          {
            title: "Base et dimension",
            content: String.raw`Les vecteurs $(1, 0, 2)^T$ et $(0, 1, 0)^T$ engendrent $E$ et ne sont pas proportionnels : famille libre et génératrice, donc base.

$$\dim E = 2 \qquad \text{(un plan vectoriel de } \mathbb{R}^3\text{)}$$

**Vérification :** $2 \cdot 1 - 2 = 0$ ✓ pour le premier vecteur, $2 \cdot 0 - 0 = 0$ ✓ pour le second.`,
          },
        ],
        answer: String.raw`**Oui** : sous-vectoriel de dimension $2$ (un plan), de base $\{(1, 0, 2)^T, (0, 1, 0)^T\}$.`,
      },
    ],
  },
  {
    id: "4.10",
    chapter: 4,
    title: "Rang et existence de solutions d'un système",
    examType: false,
    statement: String.raw`Dans les systèmes suivants, déterminez le rang de la matrice des coefficients et celui de la matrice complétée. Existe-t-il une solution, et si oui, est-ce qu'elle est unique ?`,
    method: String.raw`C'est un exercice de drill sur le théorème du rang : pour chaque système, calcule $\operatorname{rg}(A)$ (matrice des coefficients) et $\operatorname{rg}(A|B)$ (matrice complétée), puis compare. Si $\operatorname{rg}(A) < \operatorname{rg}(A|B)$, le système est impossible. Si $\operatorname{rg}(A) = \operatorname{rg}(A|B) = r$, il y a des solutions : une solution unique si $r$ égale le nombre d'inconnues $n$, sinon une infinité de solutions dépendant de $n - r$ paramètres (simplement indéterminé si $n - r = 1$, doublement si $n - r = 2$).`,
    theoryRefs: ["Rang et systèmes", "Base et dimension"],
    parts: [
      {
        label: "a",
        statement: String.raw`$$\begin{cases} x + y - z = 2 \\ 3x - y + 2z = 1 \\ x + 2y - z = 3 \end{cases}$$`,
        steps: [
          {
            title: "Rappeler le théorème du rang",
            content: String.raw`📖 **Rappel du cours :** pour un système $AX = B$ à $n$ inconnues,

- si $\operatorname{rg}(A) \neq \operatorname{rg}(A|B)$ : le système est **impossible** ;
- si $\operatorname{rg}(A) = \operatorname{rg}(A|B) = n$ : **solution unique** ;
- si $\operatorname{rg}(A) = \operatorname{rg}(A|B) = r < n$ : **infinité de solutions** à $n - r$ paramètres.

Ici la matrice des coefficients est $A = \begin{pmatrix} 1 & 1 & -1 \\ 3 & -1 & 2 \\ 1 & 2 & -1 \end{pmatrix}$ et $n = 3$.`,
          },
          {
            title: "Calculer le rang de A",
            content: String.raw`La matrice est carrée : commence par son déterminant (développement selon la première ligne) :

$$\det A = 1\,\begin{vmatrix} -1 & 2 \\ 2 & -1 \end{vmatrix} - 1\,\begin{vmatrix} 3 & 2 \\ 1 & -1 \end{vmatrix} + (-1)\,\begin{vmatrix} 3 & -1 \\ 1 & 2 \end{vmatrix} = 1(1 - 4) - 1(-3 - 2) - 1(6 + 1) = -3 + 5 - 7 = -5$$

Comme $\det A = -5 \neq 0$, on a $\operatorname{rg}(A) = 3$.`,
          },
          {
            title: "Comparer et conclure",
            content: String.raw`La matrice complétée $(A|B)$ a $3$ lignes, donc $\operatorname{rg}(A|B) \leq 3$. Comme de plus $\operatorname{rg}(A) \leq \operatorname{rg}(A|B)$ (ajouter une colonne ne peut pas faire baisser le rang), on a nécessairement

$$\operatorname{rg}(A) = \operatorname{rg}(A|B) = 3 = n$$

Le système possède donc une **solution unique**.`,
          },
        ],
        answer: String.raw`$\operatorname{rg}(A) = \operatorname{rg}(A|B) = 3 = n$ : le système possède une solution **unique** (car $\det A = -5 \neq 0$).`,
      },
      {
        label: "b",
        statement: String.raw`$$\begin{cases} x + y + z = 1 \\ 2x + y + 3z = 6 \\ x + 2y - z = -5 \\ -x - y + 2z = 8 \end{cases}$$`,
        steps: [
          {
            title: "Calculer le rang de A",
            content: String.raw`Ici $A$ est de dimension $(4 \times 3)$, donc $\operatorname{rg}(A) \leq 3$. Extrais le mineur d'ordre $3$ formé des trois premières lignes :

$$\begin{vmatrix} 1 & 1 & 1 \\ 2 & 1 & 3 \\ 1 & 2 & -1 \end{vmatrix} = 1(-1 - 6) - 1(-2 - 3) + 1(4 - 1) = -7 + 5 + 3 = 1 \neq 0$$

Donc $\operatorname{rg}(A) = 3$.`,
          },
          {
            title: "Calculer le rang de la matrice complétée",
            content: String.raw`La matrice complétée $(A|B)$ est carrée $(4 \times 4)$ : calcule son déterminant en créant des zéros dans la première colonne,

$$\begin{vmatrix} 1 & 1 & 1 & 1 \\ 2 & 1 & 3 & 6 \\ 1 & 2 & -1 & -5 \\ -1 & -1 & 2 & 8 \end{vmatrix} \xrightarrow{\substack{L_2 \leftarrow L_2 - 2L_1 \\ L_3 \leftarrow L_3 - L_1 \\ L_4 \leftarrow L_4 + L_1}} \begin{vmatrix} 1 & 1 & 1 & 1 \\ 0 & -1 & 1 & 4 \\ 0 & 1 & -2 & -6 \\ 0 & 0 & 3 & 9 \end{vmatrix} = 1 \cdot \begin{vmatrix} -1 & 1 & 4 \\ 1 & -2 & -6 \\ 0 & 3 & 9 \end{vmatrix}$$

En développant ce dernier selon la première colonne :

$$= -1(-18 + 18) - 1(9 - 12) = 0 + 3 = 3 \neq 0$$

Donc $\operatorname{rg}(A|B) = 4$.`,
          },
          {
            title: "Comparer et conclure",
            content: String.raw`On obtient

$$\operatorname{rg}(A|B) = 4 \neq 3 = \operatorname{rg}(A)$$

Les rangs diffèrent : le système est **impossible** (aucune solution). Intuitivement, la colonne des seconds membres $B$ « sort » de l'espace engendré par les colonnes de $A$ : aucune combinaison des colonnes de $A$ ne peut produire $B$.`,
          },
        ],
        answer: String.raw`$\operatorname{rg}(A) = 3$ mais $\operatorname{rg}(A|B) = 4$ : le système est **impossible**.`,
      },
      {
        label: "c",
        statement: String.raw`$$\begin{cases} x - y + z = 0 \\ 2x + y - z = 3 \\ 4x - y + z = 3 \end{cases}$$`,
        steps: [
          {
            title: "Calculer le rang de A",
            content: String.raw`$$\det A = \begin{vmatrix} 1 & -1 & 1 \\ 2 & 1 & -1 \\ 4 & -1 & 1 \end{vmatrix} = 1(1 - 1) + 1(2 + 4) + 1(-2 - 4) = 0 + 6 - 6 = 0$$

Le déterminant est nul, donc $\operatorname{rg}(A) \leq 2$. Le mineur $\begin{vmatrix} 1 & -1 \\ 2 & 1 \end{vmatrix} = 1 + 2 = 3 \neq 0$, donc $\operatorname{rg}(A) = 2$.`,
          },
          {
            title: "Calculer le rang de la matrice complétée",
            content: String.raw`Cherche la relation entre les lignes **complètes** (seconds membres compris). Remarque que

$$L_3 = L_2 + 2L_1 : \quad (2 + 2,\; 1 - 2,\; -1 + 2 \;|\; 3 + 0) = (4, -1, 1 \,|\, 3) \checkmark$$

La troisième ligne de $(A|B)$ est une combinaison des deux premières, y compris pour le second membre : $\operatorname{rg}(A|B) = 2$ également.`,
          },
          {
            title: "Conclure",
            content: String.raw`$$\operatorname{rg}(A) = \operatorname{rg}(A|B) = 2 < 3 = n$$

Le système est compatible mais le rang est inférieur au nombre d'inconnues : **infinité de solutions**, dépendant de $n - r = 3 - 2 = 1$ paramètre. Le système est **simplement indéterminé**.`,
          },
        ],
        answer: String.raw`$\operatorname{rg}(A) = \operatorname{rg}(A|B) = 2 < 3$ : infinité de solutions (système **simplement indéterminé**, $1$ paramètre libre).`,
      },
      {
        label: "d",
        statement: String.raw`$$\begin{cases} x + y - z = 2 \\ 2x + 2y - 2z = 4 \end{cases}$$`,
        steps: [
          {
            title: "Repérer la ligne redondante",
            content: String.raw`Observe que la deuxième équation est exactement le double de la première, **second membre compris** :

$$L_2 = 2L_1 : \quad 2(x + y - z) = 2 \cdot 2$$

Les deux équations disent donc la même chose : il n'y a en réalité qu'une seule contrainte.`,
          },
          {
            title: "En déduire les deux rangs",
            content: String.raw`Dans $A = \begin{pmatrix} 1 & 1 & -1 \\ 2 & 2 & -2 \end{pmatrix}$, les deux lignes sont proportionnelles : tous les mineurs d'ordre $2$ sont nuls, et il existe un élément non nul, donc $\operatorname{rg}(A) = 1$.

Comme la proportionnalité vaut aussi pour la colonne des seconds membres, $\operatorname{rg}(A|B) = 1$ également.`,
          },
          {
            title: "Conclure",
            content: String.raw`$$\operatorname{rg}(A) = \operatorname{rg}(A|B) = 1 < 3 = n$$

Le système est compatible avec $n - r = 3 - 1 = 2$ paramètres libres : **infinité de solutions**, système **doublement indéterminé** (géométriquement, l'ensemble des solutions est un plan).`,
          },
        ],
        answer: String.raw`$\operatorname{rg}(A) = \operatorname{rg}(A|B) = 1 < 3$ : infinité de solutions (système **doublement indéterminé**, $2$ paramètres libres).`,
      },
      {
        label: "e",
        statement: String.raw`$$\begin{cases} x - y + z = 2 \\ x + y + 2z = 0 \end{cases}$$`,
        steps: [
          {
            title: "Calculer le rang de A",
            content: String.raw`$A = \begin{pmatrix} 1 & -1 & 1 \\ 1 & 1 & 2 \end{pmatrix}$ est de dimension $(2 \times 3)$, donc $\operatorname{rg}(A) \leq 2$. Le mineur

$$\begin{vmatrix} 1 & -1 \\ 1 & 1 \end{vmatrix} = 1 + 1 = 2 \neq 0$$

donne $\operatorname{rg}(A) = 2$ (les deux lignes ne sont pas proportionnelles).`,
          },
          {
            title: "Rang de la matrice complétée",
            content: String.raw`La matrice complétée $(A|B)$ n'a que $2$ lignes, donc $\operatorname{rg}(A|B) \leq 2$. Et comme $\operatorname{rg}(A|B) \geq \operatorname{rg}(A) = 2$, on conclut $\operatorname{rg}(A|B) = 2$ sans aucun calcul supplémentaire.`,
          },
          {
            title: "Conclure",
            content: String.raw`$$\operatorname{rg}(A) = \operatorname{rg}(A|B) = 2 < 3 = n$$

Le système possède une **infinité de solutions** dépendant de $3 - 2 = 1$ paramètre : il est **simplement indéterminé**.`,
          },
        ],
        answer: String.raw`$\operatorname{rg}(A) = \operatorname{rg}(A|B) = 2 < 3$ : infinité de solutions (système **simplement indéterminé**, $1$ paramètre libre).`,
      },
      {
        label: "f",
        statement: String.raw`$$\begin{cases} x + 2y - z + s = 0 \\ x + y + z + 2s = 0 \\ 2x + 3y + 3s = 0 \\ x + 2z = 0 \end{cases}$$`,
        steps: [
          {
            title: "Exploiter l'homogénéité",
            content: String.raw`📖 **Rappel du cours :** un système **homogène** ($B = 0$) est toujours compatible — il admet au moins la solution nulle. La colonne des seconds membres est nulle, donc elle n'apporte rien au rang :

$$\operatorname{rg}(A|B) = \operatorname{rg}(A)$$

La seule question est donc : $\operatorname{rg}(A) = 4$ (solution unique $X = 0$) ou $\operatorname{rg}(A) < 4$ (infinité de solutions) ? Ici il y a $n = 4$ inconnues ($x$, $y$, $z$, $s$).`,
          },
          {
            title: "Calculer le déterminant de A",
            content: String.raw`$$A = \begin{pmatrix} 1 & 2 & -1 & 1 \\ 1 & 1 & 1 & 2 \\ 2 & 3 & 0 & 3 \\ 1 & 0 & 2 & 0 \end{pmatrix}$$

Remarque que $L_3 = L_1 + L_2$ : composante par composante, $(1+1,\; 2+1,\; -1+1,\; 1+2) = (2, 3, 0, 3)$ ✓. Une ligne est combinaison des autres, donc $\det A = 0$ et $\operatorname{rg}(A) \leq 3$.`,
          },
          {
            title: "Trouver un mineur d'ordre 3 non nul",
            content: String.raw`Prends les lignes $1$, $2$, $4$ (on écarte la ligne redondante $L_3$) et les colonnes $1$, $2$, $3$ :

$$\begin{vmatrix} 1 & 2 & -1 \\ 1 & 1 & 1 \\ 1 & 0 & 2 \end{vmatrix} = 1(2 - 0) - 2(2 - 1) + (-1)(0 - 1) = 2 - 2 + 1 = 1 \neq 0$$

Donc $\operatorname{rg}(A) = 3$, et $\operatorname{rg}(A|B) = 3$ aussi (système homogène).`,
          },
          {
            title: "Conclure",
            content: String.raw`$$\operatorname{rg}(A) = \operatorname{rg}(A|B) = 3 < 4 = n$$

**Infinité de solutions** dépendant de $4 - 3 = 1$ paramètre : le système est **simplement indéterminé**. (En particulier, il existe des solutions non nulles en plus de la solution triviale $X = 0$.)`,
          },
        ],
        answer: String.raw`$\operatorname{rg}(A) = \operatorname{rg}(A|B) = 3 < 4$ : infinité de solutions (système homogène **simplement indéterminé**, $1$ paramètre libre).`,
      },
      {
        label: "g",
        statement: String.raw`$$\begin{cases} x + y - z = 2 \\ 2x - 4y + z = 1 \end{cases}$$`,
        steps: [
          {
            title: "Calculer le rang de A",
            content: String.raw`$A = \begin{pmatrix} 1 & 1 & -1 \\ 2 & -4 & 1 \end{pmatrix}$ : les deux lignes ne sont pas proportionnelles, ce que confirme le mineur

$$\begin{vmatrix} 1 & 1 \\ 2 & -4 \end{vmatrix} = -4 - 2 = -6 \neq 0$$

Donc $\operatorname{rg}(A) = 2$.`,
          },
          {
            title: "Rang de la matrice complétée",
            content: String.raw`Comme au point e) : $(A|B)$ n'a que $2$ lignes, donc $2 = \operatorname{rg}(A) \leq \operatorname{rg}(A|B) \leq 2$, d'où $\operatorname{rg}(A|B) = 2$.`,
          },
          {
            title: "Conclure",
            content: String.raw`$$\operatorname{rg}(A) = \operatorname{rg}(A|B) = 2 < 3 = n$$

Le système possède une **infinité de solutions** à $3 - 2 = 1$ paramètre : il est **simplement indéterminé** (intersection de deux plans non parallèles = une droite).`,
          },
        ],
        answer: String.raw`$\operatorname{rg}(A) = \operatorname{rg}(A|B) = 2 < 3$ : infinité de solutions (système **simplement indéterminé**, $1$ paramètre libre).`,
      },
      {
        label: "h",
        statement: String.raw`$$\begin{cases} x + 3y - z = 1 \\ 2x + 6y - 2z = 2 \end{cases}$$`,
        steps: [
          {
            title: "Repérer la ligne redondante",
            content: String.raw`La deuxième équation est le double de la première, second membre compris :

$$L_2 = 2L_1 : \quad 2(x + 3y - z) = 2 \cdot 1$$

Il n'y a donc en réalité qu'une seule équation.`,
          },
          {
            title: "En déduire les deux rangs",
            content: String.raw`Les lignes de $A$ sont proportionnelles (tous les mineurs d'ordre $2$ sont nuls) et $A \neq 0$, donc $\operatorname{rg}(A) = 1$. La proportionnalité s'étend à la colonne $B$, donc $\operatorname{rg}(A|B) = 1$ aussi.`,
          },
          {
            title: "Conclure",
            content: String.raw`$$\operatorname{rg}(A) = \operatorname{rg}(A|B) = 1 < 3 = n$$

Le système est compatible avec $3 - 1 = 2$ paramètres libres : **infinité de solutions**, système **doublement indéterminé** (l'ensemble des solutions est le plan $x + 3y - z = 1$).`,
          },
        ],
        answer: String.raw`$\operatorname{rg}(A) = \operatorname{rg}(A|B) = 1 < 3$ : infinité de solutions (système **doublement indéterminé**, $2$ paramètres libres).`,
      },
    ],
  },
];
