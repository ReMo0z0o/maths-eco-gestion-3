import type { Exam } from "./types";

export const exam: Exam = {
  id: "exemple-1",
  title: "Exemple d'examen",
  subtitle: "Sujet d'entraînement avec éléments de correction manuscrits",
  official: false,
  pdf: "/pdf/examens/exemple-examen-corrige.pdf",
  durationMin: 180,
  totalPoints: 41,
  questions: [
    {
      id: "q1",
      number: 1,
      title: "Démonstration : transposée d'un produit",
      points: 3,
      chapters: [1],
      kind: "demo",
      statement: String.raw`Soit $A$ une matrice de dimension $(p \times n)$ et soit $B$ une matrice de dimension $(n \times q)$. Prouvez que $(AB)^T = B^T A^T$.`,
      hints: [
        String.raw`C'est la démonstration 1.2 du référentiel. Pour prouver une égalité de matrices, la méthode standard du chapitre 1 : vérifier que les deux membres ont la **même dimension**, puis montrer qu'ils ont le **même élément général** en position $(i, j)$.`,
        String.raw`Commence par fixer $i \in \{1, \dots, q\}$ et $j \in \{1, \dots, p\}$, puis déroule les définitions : $[(AB)^T]_{ij} = (AB)_{ji}$, et $(AB)_{ji}$ est une somme sur $k$ (définition du produit matriciel).`,
        String.raw`Résultat intermédiaire de contrôle : tu dois arriver à $\sum_{k=1}^{n} a_{jk} b_{ki}$. Il reste alors à réécrire chaque facteur avec les transposées ($b_{ki} = (B^T)_{ik}$, $a_{jk} = (A^T)_{kj}$) et à reconnaître un produit matriciel — dans le bon ordre.`,
      ],
      steps: [
        {
          title: "Comprendre l'enjeu : pourquoi l'ordre s'inverse",
          content: String.raw`Avant de calculer, vérifie que la formule est **cohérente au niveau des dimensions** — c'est aussi la première chose qu'un correcteur regarde.

- $AB$ est de dimension $(p \times q)$, donc $(AB)^T$ est de dimension $(q \times p)$.
- $B^T$ est $(q \times n)$ et $A^T$ est $(n \times p)$ : le produit $B^T A^T$ existe et est bien $(q \times p)$. ✓
- En revanche, $A^T B^T$ serait un produit $(n \times p)(q \times n)$ : il n'existe même pas dès que $p \neq q$. L'inversion de l'ordre n'est donc pas un caprice, elle est **imposée** par les dimensions.

📖 **Rappel (méthode).** Deux matrices sont égales si elles ont la même dimension et le même élément général : on va donc montrer que $[(AB)^T]_{ij} = [B^T A^T]_{ij}$ pour tous $i \in \{1, \dots, q\}$ et $j \in \{1, \dots, p\}$.`,
        },
        {
          title: "Élément général du membre de gauche",
          content: String.raw`Fixons $i \in \{1, \dots, q\}$ et $j \in \{1, \dots, p\}$. Par définition de la transposée, puis du produit matriciel :

$$[(AB)^T]_{ij} = (AB)_{ji} = \sum_{k=1}^{n} a_{jk}\, b_{ki}.$$

La somme porte sur $k = 1, \dots, n$ : c'est la dimension commune (colonnes de $A$ = lignes de $B$) qui « se contracte » dans le produit.`,
        },
        {
          title: "Réécrire avec les transposées et permuter",
          content: String.raw`Chaque facteur se réécrit à l'aide des matrices transposées :

$$a_{jk} = (A^T)_{kj} \qquad \text{et} \qquad b_{ki} = (B^T)_{ik}.$$

Comme $a_{jk}$ et $b_{ki}$ sont des **nombres réels**, leur produit commute, et on peut réordonner :

$$\sum_{k=1}^{n} a_{jk}\, b_{ki} = \sum_{k=1}^{n} (B^T)_{ik}\, (A^T)_{kj}.$$

📖 **Point clé.** C'est la commutativité du produit des *nombres* qui autorise le réarrangement — pas celle du produit des matrices (qui est fausse en général). Le correcteur attend cette justification.`,
        },
        {
          title: "Reconnaître le produit et conclure",
          content: String.raw`La somme $\sum_{k=1}^{n} (B^T)_{ik} (A^T)_{kj}$ est **exactement** la définition de l'élément $(i, j)$ du produit $B^T A^T$ (ligne $i$ de $B^T$ contre colonne $j$ de $A^T$) :

$$[(AB)^T]_{ij} = [B^T A^T]_{ij} \qquad \text{pour tous } i \in \{1, \dots, q\},\ j \in \{1, \dots, p\}.$$

Les deux matrices ont la même dimension $(q \times p)$ et le même élément général : elles sont égales,

$$(AB)^T = B^T A^T. \qquad \blacksquare$$

Pour la preuve commentée pas à pas (avec la discussion des dimensions et les pièges de rédaction), va voir la fiche **démo 1.2** du référentiel.`,
        },
      ],
      answer: String.raw`Pour tous $i, j$ : $[(AB)^T]_{ij} = (AB)_{ji} = \sum_k a_{jk} b_{ki} = \sum_k (B^T)_{ik} (A^T)_{kj} = [B^T A^T]_{ij}$, et les dimensions concordent ($(q \times p)$ des deux côtés), donc $(AB)^T = B^T A^T$.`,
      examTips: [
        String.raw`C'est une question de restitution : 3 points quasi gratuits si tu as appris la démo 1.2. Écris-la en 5 lignes propres, chaque égalité justifiée (« par définition de la transposée », « par définition du produit », « les $a_{jk} b_{ki}$ sont des réels, donc commutent »).`,
        String.raw`N'oublie pas d'annoncer les dimensions au début ($AB$ est $(p \times q)$, donc $(AB)^T$ est $(q \times p)$, comme $B^T A^T$) et de quantifier « pour tous $i, j$ » à la fin : ce sont les deux points de rédaction les plus souvent sanctionnés.`,
        String.raw`Piège classique : écrire $(AB)^T = A^T B^T$. Un contrôle de dimensions de 10 secondes suffit à l'éliminer — ce produit n'existe même pas si $p \neq q$.`,
      ],
      demoRef: "1.2",
    },
    {
      id: "q2",
      number: 2,
      title: "Démonstration : orthogonalité des vecteurs propres d'une matrice symétrique",
      points: 4,
      chapters: [5, 6],
      kind: "demo",
      statement: String.raw`Montrez que des vecteurs propres relatifs à des valeurs propres différentes d'une matrice symétrique réelle sont orthogonaux.`,
      hints: [
        String.raw`C'est la démonstration 6.2 du référentiel. Pose proprement les hypothèses : $A$ symétrique, $AX_1 = \lambda_1 X_1$, $AX_2 = \lambda_2 X_2$ avec $\lambda_1 \neq \lambda_2$, et l'objectif : $X_1 \bullet X_2 = 0$.`,
        String.raw`L'idée maîtresse : calcule le **même** produit scalaire $X_2 \bullet (AX_1)$ de deux façons — une fois avec $AX_1 = \lambda_1 X_1$, une fois en faisant « passer » $A$ de l'autre côté grâce à $A^T = A$ (écris le produit scalaire sous forme matricielle $X \bullet Y = X^T Y$).`,
        String.raw`Résultat intermédiaire de contrôle : tu dois obtenir $\lambda_1 (X_1 \bullet X_2) = \lambda_2 (X_1 \bullet X_2)$, c'est-à-dire $(\lambda_1 - \lambda_2)(X_1 \bullet X_2) = 0$. Il reste un argument d'une ligne pour conclure.`,
      ],
      steps: [
        {
          title: "Mise en place : hypothèses et objectif",
          content: String.raw`Soit $A$ une matrice symétrique réelle de dimension $(n \times n)$. Soient $\lambda_1$ et $\lambda_2$ deux valeurs propres de $A$ avec $\lambda_1 \neq \lambda_2$, et $X_1$, $X_2$ des vecteurs propres associés :

$$AX_1 = \lambda_1 X_1, \qquad AX_2 = \lambda_2 X_2, \qquad X_1 \neq O,\ X_2 \neq O.$$

**Objectif :** montrer que $X_1 \bullet X_2 = 0$, c'est-à-dire que $X_1$ et $X_2$ sont orthogonaux.

📖 **Rappel.** Le produit scalaire du cours s'écrit matriciellement $X \bullet Y = X^T Y$, et il est symétrique : $X \bullet Y = Y \bullet X$.`,
        },
        {
          title: "Calculer un même produit scalaire de deux façons",
          content: String.raw`On évalue $X_2 \bullet (AX_1)$ et $X_1 \bullet (AX_2)$ en utilisant les équations aux valeurs propres et la bilinéarité du produit scalaire :

$$X_2 \bullet (AX_1) = X_2 \bullet (\lambda_1 X_1) = \lambda_1 (X_2 \bullet X_1),$$

$$X_1 \bullet (AX_2) = X_1 \bullet (\lambda_2 X_2) = \lambda_2 (X_1 \bullet X_2). \qquad (\ast)$$

Pour l'instant, ce sont deux quantités a priori différentes. Toute la démonstration consiste à montrer qu'elles sont **égales** grâce à la symétrie de $A$.`,
        },
        {
          title: "L'étape clé : faire passer A de l'autre côté grâce à A = Aᵀ",
          content: String.raw`On écrit le premier produit scalaire sous forme matricielle et on utilise $(MN)^T = N^T M^T$ (question 1 !) :

$$X_2 \bullet (AX_1) = (AX_1) \bullet X_2 = (AX_1)^T X_2 = X_1^T A^T X_2.$$

Comme $A$ est **symétrique**, $A^T = A$, donc

$$X_1^T A^T X_2 = X_1^T (A X_2) = X_1 \bullet (AX_2).$$

Conclusion de l'étape :

$$X_2 \bullet (AX_1) = X_1 \bullet (AX_2).$$

📖 **À retenir.** Pour une matrice symétrique, on peut « déplacer » $A$ d'un côté à l'autre du produit scalaire : $ (AX) \bullet Y = X \bullet (AY)$. C'est LA propriété qui rend les matrices symétriques si agréables au chapitre 6 (théorème spectral, diagonalisation orthogonale).`,
        },
        {
          title: "Combiner et conclure",
          content: String.raw`En remplaçant chaque membre par son expression $(\ast)$ :

$$\lambda_1 (X_2 \bullet X_1) = \lambda_2 (X_1 \bullet X_2).$$

Par symétrie du produit scalaire, $X_2 \bullet X_1 = X_1 \bullet X_2$, d'où

$$(\lambda_1 - \lambda_2)(X_1 \bullet X_2) = 0.$$

Un produit de réels est nul si et seulement si l'un des facteurs est nul. Or $\lambda_1 \neq \lambda_2$ par hypothèse, donc $\lambda_1 - \lambda_2 \neq 0$, et nécessairement

$$X_1 \bullet X_2 = 0 :$$

$X_1$ et $X_2$ sont orthogonaux. $\blacksquare$

La version longuement commentée de cette preuve est la fiche **démo 6.2** du référentiel.`,
        },
      ],
      answer: String.raw`En calculant $X_2 \bullet (AX_1)$ de deux façons (via $AX_1 = \lambda_1 X_1$, puis via $A^T = A$ qui donne $X_2 \bullet (AX_1) = X_1 \bullet (AX_2) = \lambda_2 (X_1 \bullet X_2)$), on obtient $(\lambda_1 - \lambda_2)(X_1 \bullet X_2) = 0$ ; comme $\lambda_1 \neq \lambda_2$, on conclut $X_1 \bullet X_2 = 0$ : les vecteurs propres sont orthogonaux.`,
      examTips: [
        String.raw`Encore une restitution du référentiel (démo 6.2) : 4 points qui se préparent avant l'examen, pas pendant. Le squelette tient en 4 lignes — apprends le squelette, pas le texte mot à mot.`,
        String.raw`Les trois justifications que le correcteur veut voir noir sur blanc : (1) les équations $AX_i = \lambda_i X_i$, (2) l'endroit précis où tu utilises $A^T = A$, (3) l'argument final « $\lambda_1 - \lambda_2 \neq 0$ donc $X_1 \bullet X_2 = 0$ ». Si l'une manque, des points sautent.`,
        String.raw`Piège de rédaction : ne divise jamais par $X_1 \bullet X_2$ (il pourrait être nul — c'est justement ce qu'on veut montrer !). C'est bien par $\lambda_1 - \lambda_2$ qu'on peut « diviser », car il est non nul par hypothèse.`,
      ],
      demoRef: "6.2",
      exerciseRefs: ["6.3", "6.6"],
    },
    {
      id: "q3",
      number: 3,
      title: "Vrai ou faux : matrices, systèmes, formes quadratiques, produit scalaire",
      points: 6,
      chapters: [1, 2, 3, 4, 5, 6, 7],
      kind: "vraifaux",
      statement: String.raw`Les affirmations suivantes, sont-elles vraies ou fausses ?

**Attention :** vous obtenez $+\frac{1}{2}$ point par bonne réponse et $-\frac{1}{4}$ point par mauvaise réponse. Ne cochez donc pas au hasard ! Si la somme de tous les points obtenus est négative, vous auriez 0 point pour cette question.

**1.** Soient $A$ et $B$ deux matrices de dimension $(n \times n)$.

- Si $A$ et $B$ sont symétriques, alors $A + B$ est une matrice symétrique
- Si $A$ et $B$ sont orthogonales, alors $AB$ est une matrice orthogonale
- Si $B = 2A$, alors $\det B = 2 \det A$
- $\det(AA^T) = (\det A)^2$

**2.** Soit $AX = B$ un système de $p$ équations linéaires à $n$ inconnues.

- Si $p = n$, alors le système possède une solution unique
- Si $B = O$ et $\det A = 0$, alors le système possède une infinité de solutions
- Si $n > p$, alors le système possède au plus une solution

**3.** Soit $A$ une matrice symétrique de dimension $(n \times n)$ et soit $\mathcal{A}$ la forme quadratique représentée par $A$.

- Si les colonnes de $A$ sont lin. indép., alors elles forment une base pour $\mathbb{R}^n$
- Si $A$ n'a que des valeurs propres $> 0$, alors $\mathcal{A}$ est semi-définie positive

**4.** Soient $X$, $Y$ deux vecteurs-colonnes de $\mathbb{R}^n$.

- $\|X - Y\| \leq \|X\| - \|Y\|$
- Si $X$ et $Y$ sont orthogonales, alors $\alpha X$ et $\beta Y$ le sont aussi pour toutes $\alpha, \beta \in \mathbb{R}$
- Si $X$ et $Y$ sont orthonormés et si $n = 2$, alors $X, Y$ forment une base pour $\mathbb{R}^2$`,
      hints: [
        String.raw`Règle d'or du vrai/faux : « vrai » exige un argument général (une propriété du cours), « faux » exige **un seul** contre-exemple — et les petits contre-exemples $2 \times 2$ ou même $1 \times 2$ suffisent presque toujours. Vu le barème négatif, ne coche que ce que tu sais justifier.`,
        String.raw`Groupe 1 : passe tout à la transposée ou au déterminant avec les règles du cours — $(A+B)^T$, $(AB)^T (AB)$, $\det(kA) = k^n \det A$, $\det(A^T) = \det A$, $\det(MN) = \det M \cdot \det N$.`,
        String.raw`Groupe 2 : pense au théorème de Rouché-Fontené (comparer $\text{rg}(A)$, $\text{rg}(A|B)$ et $n$). Un système carré peut-il être impossible ? Un système homogène est-il toujours compatible ? Et si $n > p$, le rang peut-il atteindre $n$ ?`,
        String.raw`Groupes 3 et 4 : $n$ vecteurs linéairement indépendants dans $\mathbb{R}^n$, ça te rappelle quel théorème du chapitre 4 ? Pour la norme, teste l'inégalité avec $X = O$. Pour l'orthogonalité, calcule $(\alpha X) \bullet (\beta Y)$.`,
      ],
      steps: [
        {
          title: "Groupe 1 : sommes, produits, déterminants",
          content: String.raw`📖 **Notation.** Le sujet imprimé note « dtm » le déterminant : c'est le $\det$ du cours.

**« Si $A$ et $B$ sont symétriques, alors $A + B$ est symétrique » : VRAI.**

La transposée d'une somme est la somme des transposées :

$$(A + B)^T = A^T + B^T = A + B,$$

en utilisant $A^T = A$ et $B^T = B$. Donc $A + B$ est symétrique. (Attention, le même énoncé avec le **produit** $AB$ serait faux en général, car $(AB)^T = B^T A^T = BA \neq AB$.)

**« Si $A$ et $B$ sont orthogonales, alors $AB$ est orthogonale » : VRAI.**

📖 **Rappel.** $M$ est orthogonale si $M^T M = I$ (colonnes orthonormées). On vérifie :

$$(AB)^T (AB) = B^T A^T A B = B^T (A^T A) B = B^T I B = B^T B = I.$$

Le produit de deux matrices orthogonales est donc orthogonal.

**« Si $B = 2A$, alors $\det B = 2 \det A$ » : FAUX.**

Multiplier **une** ligne par $2$ multiplie le déterminant par $2$ ; or $2A$ multiplie les $n$ lignes par $2$, donc

$$\det(2A) = 2^n \det A,$$

et $2^n \neq 2$ dès que $n \geq 2$. Contre-exemple : $A = I$ en dimension $2$ : $\det(2I) = 4 \neq 2 = 2\det I$.

**« $\det(AA^T) = (\det A)^2$ » : VRAI.**

Le déterminant d'un produit est le produit des déterminants, et $\det(A^T) = \det A$ :

$$\det(AA^T) = \det A \cdot \det(A^T) = (\det A)^2.$$`,
        },
        {
          title: "Groupe 2 : nombre de solutions d'un système",
          content: String.raw`📖 **Rappel (Rouché-Fontené).** Le système $AX = B$ est compatible si et seulement si $\text{rg}(A) = \text{rg}(A|B)$ ; il a alors une solution unique si ce rang vaut $n$, et une infinité de solutions si ce rang est $< n$.

**« Si $p = n$, alors le système possède une solution unique » : FAUX.**

Un système carré n'a une solution unique que si $\det A \neq 0$. Contre-exemple ($p = n = 2$) :

$$\begin{cases} x + y = 0 \\ x + y = 1 \end{cases}$$

est impossible (et le même membre de gauche avec deux fois $0$ à droite aurait une infinité de solutions).

**« Si $B = O$ et $\det A = 0$, alors le système possède une infinité de solutions » : VRAI.**

Un système homogène est toujours compatible (il possède la solution triviale $X = O$, et $\text{rg}(A) = \text{rg}(A|O)$). Parler de $\det A$ suppose $A$ carrée ($p = n$) ; $\det A = 0$ signifie alors $\text{rg}(A) < n$ : système compatible avec un rang $< n$, donc une infinité de solutions (il est indéterminé).

**« Si $n > p$, alors le système possède au plus une solution » : FAUX.**

C'est le contraire qui se produit : avec plus d'inconnues que d'équations, $\text{rg}(A) \leq p < n$, donc dès que le système est compatible il a une **infinité** de solutions. Contre-exemple ($p = 1$, $n = 2$) : $x + y = 0$ a la droite de solutions $x(1, -1)^T$. (« Au plus une » n'est vrai que si le système est impossible — mais l'affirmation prétend l'être toujours.)`,
        },
        {
          title: "Groupe 3 : colonnes indépendantes et genre d'une forme quadratique",
          content: String.raw`**« Si les colonnes de $A$ sont lin. indép., alors elles forment une base pour $\mathbb{R}^n$ » : VRAI.**

📖 **Rappel (chapitre 4).** $\mathbb{R}^n$ est de dimension $n$ : toute famille de $n$ vecteurs linéairement indépendants de $\mathbb{R}^n$ est automatiquement génératrice, donc est une base (conséquence du théorème de Steinitz). Ici $A$ est $(n \times n)$ : ses $n$ colonnes indépendantes forment bien une base de $\mathbb{R}^n$.

**« Si $A$ n'a que des valeurs propres $> 0$, alors $\mathcal{A}$ est semi-définie positive » : VRAI.**

📖 **Rappel (chapitre 7).** Le genre d'une forme quadratique se lit sur les valeurs propres de sa matrice symétrique : toutes $> 0$ $\Rightarrow$ définie positive ($\mathcal{A}(X) > 0$ pour tout $X \neq O$). Or « définie positive » entraîne a fortiori « semi-définie positive » ($\mathcal{A}(X) \geq 0$ pour tout $X$) : l'affirmation est donc vraie — elle est même plus faible que ce que l'hypothèse permet de conclure.`,
        },
        {
          title: "Groupe 4 : normes et orthogonalité",
          content: String.raw`**« $\|X - Y\| \leq \|X\| - \|Y\|$ » : FAUX.**

Le membre de droite peut être **négatif** alors qu'une norme est toujours $\geq 0$. Contre-exemple : $X = O$ et $Y \neq O$ :

$$\|X - Y\| = \|Y\| > 0 > -\|Y\| = \|X\| - \|Y\|.$$

📖 Les inégalités correctes du cours sont l'inégalité triangulaire (Minkowski) $\|X + Y\| \leq \|X\| + \|Y\|$, dont on déduit $\|X - Y\| \geq \big|\, \|X\| - \|Y\| \,\big|$ — l'inégalité proposée est dans le mauvais sens.

**« Si $X$ et $Y$ sont orthogonales, alors $\alpha X$ et $\beta Y$ le sont aussi pour toutes $\alpha, \beta \in \mathbb{R}$ » : VRAI.**

Par bilinéarité du produit scalaire :

$$(\alpha X) \bullet (\beta Y) = \alpha \beta\, (X \bullet Y) = \alpha \beta \cdot 0 = 0.$$

**« Si $X$ et $Y$ sont orthonormés et si $n = 2$, alors $X, Y$ forment une base pour $\mathbb{R}^2$ » : VRAI.**

Des vecteurs orthonormés (orthogonaux deux à deux et de norme $1$) sont non nuls et linéairement indépendants : si $\alpha X + \beta Y = O$, le produit scalaire avec $X$ donne $\alpha \|X\|^2 = \alpha = 0$, et avec $Y$ : $\beta = 0$. Deux vecteurs indépendants dans $\mathbb{R}^2$ (dimension $2$) forment une base — même argument qu'au groupe 3.`,
        },
      ],
      answer: String.raw`**Groupe 1 :** vrai, vrai, faux ($\det(2A) = 2^n \det A$), vrai. **Groupe 2 :** faux (il faut $\det A \neq 0$), vrai, faux (compatible $\Rightarrow$ infinité). **Groupe 3 :** vrai, vrai (définie positive $\Rightarrow$ semi-définie positive). **Groupe 4 :** faux (le membre de droite peut être négatif), vrai, vrai.`,
      examTips: [
        String.raw`Avec $+\frac{1}{2}$ / $-\frac{1}{4}$, coche seulement ce que tu peux justifier au brouillon en une ligne : à partir de deux bonnes réponses sur trois cochées, tu gagnes ; en cochant au hasard, tu perds. Laisse blanc ce dont tu doutes vraiment.`,
        String.raw`Réflexe « faux » : cherche d'abord un contre-exemple minuscule ($X = O$, matrice nulle, $I$, systèmes $1$ ou $2$ équations). Réflexe « vrai » : cite la propriété du cours ($\det(MN) = \det M \det N$, Rouché-Fontené, Steinitz…).`,
        String.raw`Deux pièges récurrents de ce sujet : $\det(kA) = k^n \det A$ (et pas $k \det A$) et le sens des inégalités de normes ($\|X - Y\| \geq \|X\| - \|Y\|$, jamais $\leq$ en général).`,
        String.raw`Budget temps : 6 points, mais 12 items — environ 12 à 15 minutes. Ne rédige pas de longues justifications sur ta copie si le sujet ne demande que de cocher, mais garde tes brouillons d'arguments.`,
      ],
      exerciseRefs: ["3.1", "6.6", "4.10"],
    },
    {
      id: "q4",
      number: 4,
      title: "Système paramétrique : Cramer puis Gauss-Jordan et rang",
      points: 7,
      chapters: [2, 3],
      kind: "exercice",
      statement: String.raw`Pour $a \in \mathbb{R}$, on considère le système d'équations linéaires

$$\begin{cases} (a-2)x - y + 3z = 0 \\ 3x + y - 2z = 1 \\ 6x + 2y + (a+1)z = 6 \end{cases}$$

**(a)** Pour quelle(s) valeur(s) du paramètre $a$, ce système possède-t-il une solution unique ? Recherchez cette solution en utilisant la règle de Cramer (3 points).

**(b)** Pour les autres valeurs de $a$, recherchez l'ensemble des solutions sous forme vectorielle à l'aide de la méthode de Gauss-Jordan, et vérifiez votre solution grâce à la notion de rang (4 points).`,
      hints: [
        String.raw`(a) Un système carré $3 \times 3$ a une solution unique si et seulement si $\det A \neq 0$. Commence donc par calculer $\det A$ **en fonction de $a$** (développe selon une ligne ou une colonne), puis factorise le polynôme obtenu.`,
        String.raw`Contrôle intermédiaire : tu devrais trouver $\det A = a^2 + 6a + 5 = (a+1)(a+5)$. Les valeurs à exclure pour (a) — et à traiter dans (b) — sont donc les racines de ce polynôme.`,
        String.raw`Pour Cramer, remplace successivement chaque colonne de $A$ par le second membre $(0, 1, 6)^T$. Chaque déterminant obtenu doit contenir un facteur $(a+1)$ qui se simplifie avec le dénominateur — si ça ne se simplifie pas, cherche l'erreur de calcul.`,
        String.raw`(b) Traite séparément les deux valeurs trouvées : pour l'une, l'échelonnement de la matrice complétée $(A|B)$ laisse une inconnue libre (système simplement indéterminé) ; pour l'autre, une ligne du type $(0\ 0\ 0\ |\ c)$ avec $c \neq 0$ apparaît (système impossible). Conclus avec les rangs.`,
      ],
      steps: [
        {
          title: "(a) Calculer le déterminant en fonction de a",
          content: String.raw`Le système s'écrit $AX = B$ avec

$$A = \begin{pmatrix} a-2 & -1 & 3 \\ 3 & 1 & -2 \\ 6 & 2 & a+1 \end{pmatrix}, \qquad B = \begin{pmatrix} 0 \\ 1 \\ 6 \end{pmatrix}.$$

📖 **Rappel.** Un système carré possède une solution unique si et seulement si $\det A \neq 0$ — c'est exactement le cadre d'application de la règle de Cramer.

Développons $\det A$ selon la première ligne :

$$\det A = (a-2)\begin{vmatrix} 1 & -2 \\ 2 & a+1 \end{vmatrix} - (-1)\begin{vmatrix} 3 & -2 \\ 6 & a+1 \end{vmatrix} + 3\begin{vmatrix} 3 & 1 \\ 6 & 2 \end{vmatrix}.$$

Calcul des trois mineurs :

$$\begin{vmatrix} 1 & -2 \\ 2 & a+1 \end{vmatrix} = a + 1 + 4 = a + 5, \qquad \begin{vmatrix} 3 & -2 \\ 6 & a+1 \end{vmatrix} = 3(a+1) + 12 = 3a + 15, \qquad \begin{vmatrix} 3 & 1 \\ 6 & 2 \end{vmatrix} = 6 - 6 = 0.$$

D'où

$$\det A = (a-2)(a+5) + (3a + 15) = a^2 + 3a - 10 + 3a + 15 = a^2 + 6a + 5.$$`,
        },
        {
          title: "(a) Factoriser et discuter",
          content: String.raw`On factorise le trinôme (racines évidentes $-1$ et $-5$, ou discriminant $36 - 20 = 16$) :

$$\det A = a^2 + 6a + 5 = (a+1)(a+5).$$

Donc $\det A \neq 0 \iff a \neq -1$ **et** $a \neq -5$.

**Le système possède une solution unique si et seulement si $a \notin \{-1, -5\}$.** Pour ces valeurs de $a$, la règle de Cramer s'applique :

$$x = \frac{\det A_x}{\det A}, \qquad y = \frac{\det A_y}{\det A}, \qquad z = \frac{\det A_z}{\det A},$$

où $A_x$, $A_y$, $A_z$ sont obtenues en remplaçant respectivement la 1re, 2e, 3e colonne de $A$ par $B$.`,
        },
        {
          title: "(a) Cramer : calcul de x",
          content: String.raw`$$\det A_x = \begin{vmatrix} 0 & -1 & 3 \\ 1 & 1 & -2 \\ 6 & 2 & a+1 \end{vmatrix} = 0 \cdot \begin{vmatrix} 1 & -2 \\ 2 & a+1 \end{vmatrix} + 1 \cdot \begin{vmatrix} 1 & -2 \\ 6 & a+1 \end{vmatrix} + 3\begin{vmatrix} 1 & 1 \\ 6 & 2 \end{vmatrix}$$

(développement selon la première ligne, avec les signes $+,-,+$ : le $-(-1)$ donne $+1$). Les mineurs valent $a + 1 + 12 = a + 13$ et $2 - 6 = -4$, donc

$$\det A_x = (a + 13) + 3(-4) = a + 1.$$

D'où, pour $a \notin \{-1, -5\}$ :

$$x = \frac{a+1}{(a+1)(a+5)} = \frac{1}{a+5}.$$

Le facteur $(a+1)$ se simplifie — bon signe : la solution n'explose qu'aux valeurs singulières du paramètre.`,
        },
        {
          title: "(a) Cramer : calcul de y et z",
          content: String.raw`$$\det A_y = \begin{vmatrix} a-2 & 0 & 3 \\ 3 & 1 & -2 \\ 6 & 6 & a+1 \end{vmatrix} = (a-2)\begin{vmatrix} 1 & -2 \\ 6 & a+1 \end{vmatrix} - 0 + 3\begin{vmatrix} 3 & 1 \\ 6 & 6 \end{vmatrix} = (a-2)(a+13) + 3 \cdot 12.$$

Développons : $(a-2)(a+13) + 36 = a^2 + 11a - 26 + 36 = a^2 + 11a + 10 = (a+1)(a+10)$, donc

$$y = \frac{(a+1)(a+10)}{(a+1)(a+5)} = \frac{a+10}{a+5}.$$

$$\det A_z = \begin{vmatrix} a-2 & -1 & 0 \\ 3 & 1 & 1 \\ 6 & 2 & 6 \end{vmatrix} = (a-2)\begin{vmatrix} 1 & 1 \\ 2 & 6 \end{vmatrix} + 1 \cdot \begin{vmatrix} 3 & 1 \\ 6 & 6 \end{vmatrix} + 0 = 4(a-2) + 12 = 4a + 4 = 4(a+1),$$

d'où

$$z = \frac{4(a+1)}{(a+1)(a+5)} = \frac{4}{a+5}.$$

**Solution unique pour $a \notin \{-1, -5\}$ :**

$$X = \frac{1}{a+5}\begin{pmatrix} 1 \\ a+10 \\ 4 \end{pmatrix}.$$

**Vérification** (équation 2) : $3x + y - 2z = \frac{3 + (a+10) - 8}{a+5} = \frac{a+5}{a+5} = 1.$ ✓ (Les équations 1 et 3 se vérifient de la même façon.)`,
        },
        {
          title: "(b) Cas a = −1 : Gauss-Jordan",
          content: String.raw`Pour $a = -1$, le système devient

$$\left(\begin{array}{ccc|c} -3 & -1 & 3 & 0 \\ 3 & 1 & -2 & 1 \\ 6 & 2 & 0 & 6 \end{array}\right).$$

Échelonnons la matrice complétée :

$$\xrightarrow{L_2 \leftarrow L_2 + L_1} \left(\begin{array}{ccc|c} -3 & -1 & 3 & 0 \\ 0 & 0 & 1 & 1 \\ 6 & 2 & 0 & 6 \end{array}\right) \xrightarrow{L_3 \leftarrow L_3 + 2L_1} \left(\begin{array}{ccc|c} -3 & -1 & 3 & 0 \\ 0 & 0 & 1 & 1 \\ 0 & 0 & 6 & 6 \end{array}\right) \xrightarrow{L_3 \leftarrow L_3 - 6L_2} \left(\begin{array}{ccc|c} -3 & -1 & 3 & 0 \\ 0 & 0 & 1 & 1 \\ 0 & 0 & 0 & 0 \end{array}\right).$$

Remontée (Jordan) : $L_1 \leftarrow L_1 - 3L_2$ puis $L_1 \leftarrow -\frac{1}{3}L_1$ donne $x + \frac{1}{3}y = 1$, $z = 1$. Le système équivaut donc à

$$\begin{cases} 3x + y = 3 \\ z = 1 \end{cases}$$

avec **une inconnue libre** (par exemple $x$). En posant $x = t$, $t \in \mathbb{R}$ : $y = 3 - 3t$, $z = 1$, soit sous forme vectorielle

$$X = \begin{pmatrix} 0 \\ 3 \\ 1 \end{pmatrix} + t\begin{pmatrix} 1 \\ -3 \\ 0 \end{pmatrix}, \qquad t \in \mathbb{R}.$$

**Vérification rapide** avec $t = 0$ : $(0, 3, 1)$ donne $-3 \cdot 0 - 3 + 3 = 0$ ✓, $0 + 3 - 2 = 1$ ✓, $0 + 6 + 0 = 6$ ✓.`,
        },
        {
          title: "(b) Cas a = −1 : contrôle par le rang",
          content: String.raw`📖 **Rappel (Rouché-Fontené).** Le système est compatible ssi $\text{rg}(A) = \text{rg}(A|B)$ ; il est alors indéterminé d'ordre $n - \text{rg}(A)$.

Sur la forme échelonnée : deux pivots (colonnes de $x$ et de $z$), et aucune ligne absurde, donc

$$\text{rg}(A) = \text{rg}(A|B) = 2 < 3 = n.$$

Le système est **simplement indéterminé** ($n - \text{rg} = 1$ paramètre libre) : c'est bien cohérent avec la droite de solutions trouvée (un seul paramètre $t$). ✓`,
        },
        {
          title: "(b) Cas a = −5 : Gauss-Jordan et conclusion par le rang",
          content: String.raw`Pour $a = -5$, le système devient

$$\left(\begin{array}{ccc|c} -7 & -1 & 3 & 0 \\ 3 & 1 & -2 & 1 \\ 6 & 2 & -4 & 6 \end{array}\right).$$

Avant de calculer, **observe** les lignes 2 et 3 : les membres de gauche vérifient $L_3 = 2L_2$, mais les seconds membres non ($6 \neq 2 \cdot 1$). L'échelonnement le confirme :

$$\xrightarrow{L_3 \leftarrow L_3 - 2L_2} \left(\begin{array}{ccc|c} -7 & -1 & 3 & 0 \\ 3 & 1 & -2 & 1 \\ 0 & 0 & 0 & 4 \end{array}\right).$$

La ligne $(0\ 0\ 0\ |\ 4)$ correspond à l'équation $0 = 4$ : **le système est impossible** — l'ensemble des solutions est vide, $S = \emptyset$.

**Contrôle par le rang :** les lignes $(-7, -1, 3)$ et $(3, 1, -2)$ sont indépendantes et la 3e ligne de $A$ vaut $2L_2$, donc $\text{rg}(A) = 2$ ; mais la matrice complétée a trois lignes indépendantes (la ligne absurde en témoigne), donc

$$\text{rg}(A|B) = 3 \neq 2 = \text{rg}(A).$$

Par Rouché-Fontené, le système est incompatible. ✓`,
        },
      ],
      answer: String.raw`(a) $\det A = (a+1)(a+5)$ : solution unique ssi $a \notin \{-1, -5\}$, et alors $X = \frac{1}{a+5}(1,\ a+10,\ 4)^T$ par Cramer. (b) Pour $a = -1$ : système simplement indéterminé ($\text{rg}(A) = \text{rg}(A|B) = 2 < 3$), $X = (0, 3, 1)^T + t(1, -3, 0)^T$, $t \in \mathbb{R}$. Pour $a = -5$ : système impossible ($\text{rg}(A) = 2 \neq 3 = \text{rg}(A|B)$), $S = \emptyset$.`,
      examTips: [
        String.raw`7 points, la plus grosse question du sujet : compte 25 à 30 minutes. Le plan est imposé par l'énoncé (Cramer en (a), Gauss-Jordan + rang en (b)) — utiliser une autre méthode fait perdre des points même avec le bon résultat.`,
        String.raw`Factorise $\det A$ **avant** de foncer dans Cramer : les valeurs critiques de (b) et les simplifications des quotients tombent toutes de cette factorisation. Un $\det A$ non factorisé est le signal d'un (b) qui va mal se passer.`,
        String.raw`Contrôle gratuit : dans un système de Cramer paramétrique bien mené, chaque $\det A_i$ contient le facteur singulier ($a+1$ ici) qui se simplifie. Et réinjecte toujours ta solution dans une équation non utilisée pour l'échelonnement.`,
        String.raw`En (b), n'oublie pas la **conclusion en français** demandée : « simplement indéterminé » / « impossible », avec les rangs à l'appui. Beaucoup d'étudiants donnent la forme vectorielle mais oublient la vérification par le rang, explicitement exigée (et notée).`,
      ],
      exerciseRefs: ["3.6", "2.2", "3.4"],
    },
    {
      id: "q5",
      number: 5,
      title: "Chaîne de Markov : motivation pendant le blocus",
      points: 4,
      chapters: [6],
      kind: "exercice",
      statement: String.raw`Chaque jour de son blocus, un étudiant s'estime soit fortement motivé ($F$), soit moins motivé ($M$). Il remarque que, s'il est fortement motivé un jour, le lendemain, il y a 9 chances sur 10 qu'il le soit encore, tandis que, s'il est moins motivé, il y a 3 chances sur 10 qu'il soit fort motivé le lendemain. Le premier jour du blocus, il a 8 chances sur 10 d'être fortement motivé.

**(a)** Quelle est la probabilité que cet étudiant soit fortement motivé lors du 3ième jour de son blocus ? (1 point)

**(b)** En recherchant les vecteurs propres et les valeurs propres de la matrice de transition, décrivez l'évolution de ces probabilités à long terme. (3 points)`,
      hints: [
        String.raw`C'est une chaîne de Markov à deux états (chapitre 6). Pose la matrice de transition $A$ dont la **colonne $j$** contient les probabilités de transition *depuis* l'état $j$ (chaque colonne somme à 1), et le vecteur d'état initial $X^{(1)}$. La dynamique est $X^{(t+1)} = AX^{(t)}$.`,
        String.raw`(a) Attention au décompte : du jour 1 au jour 3, il n'y a que **deux** applications de $A$ : $X^{(3)} = A^2 X^{(1)}$. Calcule $X^{(2)}$ puis $X^{(3)}$ (deux produits matrice-vecteur, pas besoin de calculer $A^2$).`,
        String.raw`Contrôle intermédiaire : $X^{(2)} = (0{,}78,\ 0{,}22)^T$. Et à chaque étape, les deux composantes doivent sommer à 1.`,
        String.raw`(b) Les valeurs propres d'une matrice de transition : l'une vaut toujours $1$ (démo du cours), l'autre se lit sur la trace. Décompose $X^{(1)}$ dans la base des vecteurs propres et regarde ce qui survit quand $t \to \infty$.`,
      ],
      steps: [
        {
          title: "Modéliser : matrice de transition et état initial",
          content: String.raw`Numérotons les états : état 1 = $F$ (fortement motivé), état 2 = $M$ (moins motivé). La colonne $j$ de la matrice de transition contient les probabilités d'aller vers chaque état **depuis** l'état $j$ :

$$A = \begin{pmatrix} 0{,}9 & 0{,}3 \\ 0{,}1 & 0{,}7 \end{pmatrix}, \qquad X^{(1)} = \begin{pmatrix} 0{,}8 \\ 0{,}2 \end{pmatrix}.$$

- Colonne 1 (depuis $F$) : reste $F$ avec probabilité $0{,}9$, passe à $M$ avec $0{,}1$.
- Colonne 2 (depuis $M$) : devient $F$ avec probabilité $0{,}3$, reste $M$ avec $0{,}7$.

📖 **Contrôle immédiat.** Chaque colonne somme à $1$ ($0{,}9 + 0{,}1 = 1$, $0{,}3 + 0{,}7 = 1$) : c'est bien une matrice de transition de Markov, et la dynamique est $X^{(t+1)} = AX^{(t)}$.`,
        },
        {
          title: "(a) Itérer deux fois jusqu'au jour 3",
          content: String.raw`Du jour 1 au jour 3, on applique $A$ deux fois : $X^{(3)} = A^2 X^{(1)}$. Le plus simple est d'itérer :

$$X^{(2)} = AX^{(1)} = \begin{pmatrix} 0{,}9 & 0{,}3 \\ 0{,}1 & 0{,}7 \end{pmatrix}\begin{pmatrix} 0{,}8 \\ 0{,}2 \end{pmatrix} = \begin{pmatrix} 0{,}72 + 0{,}06 \\ 0{,}08 + 0{,}14 \end{pmatrix} = \begin{pmatrix} 0{,}78 \\ 0{,}22 \end{pmatrix},$$

$$X^{(3)} = AX^{(2)} = \begin{pmatrix} 0{,}9 & 0{,}3 \\ 0{,}1 & 0{,}7 \end{pmatrix}\begin{pmatrix} 0{,}78 \\ 0{,}22 \end{pmatrix} = \begin{pmatrix} 0{,}702 + 0{,}066 \\ 0{,}078 + 0{,}154 \end{pmatrix} = \begin{pmatrix} 0{,}768 \\ 0{,}232 \end{pmatrix}.$$

(Contrôle : $0{,}768 + 0{,}232 = 1$ ✓.)

**La probabilité d'être fortement motivé le 3ième jour vaut $0{,}768$** (soit environ $0{,}77$ avec deux chiffres significatifs).`,
        },
        {
          title: "(b) Valeurs propres de la matrice de transition",
          content: String.raw`$$\det(A - \lambda I) = \begin{vmatrix} 0{,}9 - \lambda & 0{,}3 \\ 0{,}1 & 0{,}7 - \lambda \end{vmatrix} = (0{,}9 - \lambda)(0{,}7 - \lambda) - 0{,}03 = \lambda^2 - 1{,}6\lambda + 0{,}6.$$

Résolvons $\lambda^2 - \frac{8}{5}\lambda + \frac{3}{5} = 0$, soit $5\lambda^2 - 8\lambda + 3 = 0$ : discriminant $\rho = 64 - 60 = 4$, d'où

$$\lambda = \frac{8 \pm 2}{10}, \qquad \lambda_1 = 1, \quad \lambda_2 = \frac{3}{5}.$$

📖 **Rappel.** Une matrice de Markov admet toujours $1$ comme valeur propre (ses colonnes somment à $1$ — c'est la démo 6.3 du référentiel), et ses autres valeurs propres sont de module $< 1$ dans les cas réguliers : ici $\lambda_2 = 0{,}6$. La trace fournit un contrôle : $\lambda_1 + \lambda_2 = 1{,}6 = 0{,}9 + 0{,}7$ ✓, et $\lambda_1 \lambda_2 = 0{,}6 = \det A$ ✓.`,
        },
        {
          title: "(b) Vecteurs propres",
          content: String.raw`**Pour $\lambda_1 = 1$ :** $(A - I)X = O$ donne

$$\begin{cases} -0{,}1x + 0{,}3y = 0 \\ 0{,}1x - 0{,}3y = 0 \end{cases} \iff x = 3y, \qquad C_1 = \begin{pmatrix} 3 \\ 1 \end{pmatrix}.$$

**Pour $\lambda_2 = \frac{3}{5}$ :** $(A - 0{,}6 I)X = O$ donne

$$\begin{cases} 0{,}3x + 0{,}3y = 0 \\ 0{,}1x + 0{,}1y = 0 \end{cases} \iff x = -y, \qquad C_2 = \begin{pmatrix} -1 \\ 1 \end{pmatrix}.$$

(Contrôle rapide : $AC_1 = (2{,}7 + 0{,}3,\ 0{,}3 + 0{,}7)^T = (3, 1)^T = C_1$ ✓.)`,
        },
        {
          title: "(b) Décomposer l'état initial sur les vecteurs propres",
          content: String.raw`Cherchons $\alpha_1, \alpha_2$ tels que $X^{(1)} = \alpha_1 C_1 + \alpha_2 C_2$ :

$$\begin{cases} 3\alpha_1 - \alpha_2 = 0{,}8 \\ \alpha_1 + \alpha_2 = 0{,}2 \end{cases}$$

En additionnant : $4\alpha_1 = 1$, donc $\alpha_1 = \frac{1}{4}$ et $\alpha_2 = 0{,}2 - 0{,}25 = -\frac{1}{20}$.

Vérification : $\frac{1}{4}(3, 1)^T - \frac{1}{20}(-1, 1)^T = (0{,}75 + 0{,}05,\ 0{,}25 - 0{,}05)^T = (0{,}8,\ 0{,}2)^T$ ✓.`,
        },
        {
          title: "(b) Passage à la limite et interprétation",
          content: String.raw`Chaque application de $A$ multiplie la composante sur $C_i$ par $\lambda_i$ :

$$X^{(t)} = A^{t-1}X^{(1)} = \alpha_1 \lambda_1^{t-1} C_1 + \alpha_2 \lambda_2^{t-1} C_2 = \frac{1}{4}\begin{pmatrix} 3 \\ 1 \end{pmatrix} - \frac{1}{20}\left(\frac{3}{5}\right)^{t-1}\begin{pmatrix} -1 \\ 1 \end{pmatrix}.$$

Comme $\left(\frac{3}{5}\right)^{t-1} \to 0$ quand $t \to \infty$, la composante sur $C_2$ s'éteint géométriquement et

$$\lim_{t \to \infty} X^{(t)} = \frac{1}{4}\begin{pmatrix} 3 \\ 1 \end{pmatrix} = \begin{pmatrix} 0{,}75 \\ 0{,}25 \end{pmatrix}.$$

**Interprétation :** à long terme, quelle que soit la motivation initiale, l'étudiant est fortement motivé avec une probabilité qui se stabilise à $0{,}75$ (et moins motivé avec probabilité $0{,}25$). L'état limite est le vecteur propre de $\lambda = 1$ normalisé pour sommer à $1$ — c'est l'état stationnaire : $A(0{,}75,\ 0{,}25)^T = (0{,}75,\ 0{,}25)^T$ ✓.`,
        },
      ],
      answer: String.raw`(a) $X^{(3)} = A^2 X^{(1)} = (0{,}768,\ 0{,}232)^T$ : probabilité $0{,}768 \approx 0{,}77$ d'être fortement motivé le 3ième jour. (b) Valeurs propres $\lambda_1 = 1$ (vecteur propre $(3, 1)^T$) et $\lambda_2 = \frac{3}{5}$ (vecteur propre $(-1, 1)^T$) ; $X^{(t)} = \frac{1}{4}(3,1)^T - \frac{1}{20}(\frac{3}{5})^{t-1}(-1,1)^T \to (0{,}75,\ 0{,}25)^T$ : à long terme, l'étudiant est fortement motivé avec probabilité $0{,}75$.`,
      examTips: [
        String.raw`Le piège n° 1 de ce type d'énoncé : le décompte des jours. « Premier jour » = $X^{(1)}$, donc « 3ième jour » = $X^{(3)} = A^2X^{(1)}$ : seulement **deux** multiplications. Écris explicitement la correspondance jour/exposant sur ta copie.`,
        String.raw`Vérifie systématiquement : colonnes de $A$ qui somment à 1, composantes de chaque $X^{(t)}$ qui somment à 1, et $\lambda = 1$ qui doit apparaître dans tes valeurs propres. Si l'un de ces contrôles échoue, l'erreur est en amont.`,
        String.raw`En (b), la question dit « en recherchant les vecteurs propres et les valeurs propres » : la réponse attendue est la décomposition spectrale complète (valeurs propres, vecteurs propres, décomposition de $X^{(1)}$, limite), pas juste « ça converge vers l'état stationnaire ». Le barème de 3 points couvre ces quatre éléments.`,
        String.raw`Donne la conclusion en une phrase d'interprétation (probabilité limite $0{,}75$) : dans les questions appliquées, la phrase finale en français fait partie de la réponse.`,
      ],
      exerciseRefs: ["6.7", "6.8"],
    },
    {
      id: "q6",
      number: 6,
      title: "Valeurs propres selon un paramètre et diagonalisation",
      points: 6,
      chapters: [6],
      kind: "exercice",
      statement: String.raw`Pour $a \in \mathbb{R}$, on considère la matrice

$$A = \begin{pmatrix} -2 & a & 0 \\ -1 & 1 & 0 \\ 0 & 0 & -2 \end{pmatrix}$$

**(a)** Combien de valeurs propres réelles possède la matrice $A$ ? Expliquez en fonction du paramètre $a$. (2,5 points)

**(b)** Sous quelle(s) condition(s) peut-on diagonaliser la matrice $A$ ? Déduisez votre réponse du point (a). Vous ne devez pas faire de calculs supplémentaires. (1 point)

**(c)** Pour $a = 0$, calculez la matrice $S$ qui diagonalise $A$. (2,5 points)`,
      hints: [
        String.raw`(a) La troisième ligne et la troisième colonne de $A - \lambda I$ sont presque vides : développe $\det(A - \lambda I)$ selon la troisième colonne. Une valeur propre se lit alors immédiatement, et il reste un trinôme du second degré en $\lambda$.`,
        String.raw`Contrôle intermédiaire : $\det(A - \lambda I) = (-2 - \lambda)(\lambda^2 + \lambda + a - 2)$, et le discriminant du trinôme vaut $\rho = 9 - 4a$. Discute son signe… mais ce n'est pas tout : demande-toi aussi quand une racine du trinôme vaut $-2$ (valeur propre déjà connue).`,
        String.raw`(b) Rappel : $n$ valeurs propres réelles **distinctes** $\Rightarrow$ $n$ vecteurs propres indépendants $\Rightarrow$ diagonalisable. Quand une valeur propre est double, on ne peut rien conclure sans compter ses vecteurs propres — et l'énoncé t'interdit ce calcul en (b).`,
        String.raw`(c) Pour $a = 0$, tu dois trouver une valeur propre double et une simple. Si la valeur propre double fournit un plan de vecteurs propres (deux vecteurs indépendants), la diagonalisation marche : $S$ = matrice des trois vecteurs propres en colonnes.`,
      ],
      steps: [
        {
          title: "(a) Factoriser le polynôme caractéristique",
          content: String.raw`La structure « par blocs » de $A$ (troisième ligne et colonne presque nulles) invite à développer selon la **troisième colonne** :

$$\det(A - \lambda I) = \begin{vmatrix} -2-\lambda & a & 0 \\ -1 & 1-\lambda & 0 \\ 0 & 0 & -2-\lambda \end{vmatrix} = (-2-\lambda)\begin{vmatrix} -2-\lambda & a \\ -1 & 1-\lambda \end{vmatrix}.$$

Le mineur $2 \times 2$ vaut

$$(-2-\lambda)(1-\lambda) - a \cdot (-1) = \lambda^2 + \lambda - 2 + a,$$

d'où la factorisation

$$\det(A - \lambda I) = (-2-\lambda)\left(\lambda^2 + \lambda + a - 2\right).$$

Une première valeur propre est donc $\lambda_1 = -2$, **quelle que soit la valeur de $a$** ; les autres sont les racines du trinôme $\lambda^2 + \lambda + a - 2$.`,
        },
        {
          title: "(a) Discuter le trinôme : discriminant et coïncidences",
          content: String.raw`Le discriminant du trinôme $\lambda^2 + \lambda + (a - 2)$ vaut

$$\rho = 1 - 4(a-2) = 9 - 4a.$$

- Si $a < \frac{9}{4}$ : $\rho > 0$, deux racines réelles distinctes $\lambda_{2,3} = \dfrac{-1 \pm \sqrt{9-4a}}{2}$.
- Si $a = \frac{9}{4}$ : $\rho = 0$, une racine réelle double $\lambda = -\frac{1}{2}$.
- Si $a > \frac{9}{4}$ : $\rho < 0$, aucune racine réelle.

Mais il faut aussi vérifier si une racine du trinôme **coïncide avec $\lambda_1 = -2$** : en substituant, $(-2)^2 + (-2) + a - 2 = a$, donc $-2$ est racine du trinôme si et seulement si $a = 0$. (Pour $a = 0$, les racines du trinôme sont $\frac{-1 \pm 3}{2}$, soit $1$ et $-2$.)

Notons enfin que $\lambda_2 = \lambda_3 = -\frac{1}{2} \neq -2$ pour $a = \frac{9}{4}$ : pas de triple coïncidence possible.`,
        },
        {
          title: "(a) Bilan : nombre de valeurs propres réelles selon a",
          content: String.raw`En croisant les deux discussions :

- **Si $a < \frac{9}{4}$ et $a \neq 0$ :** trois valeurs propres réelles **distinctes** : $-2$ et $\frac{-1 \pm \sqrt{9-4a}}{2}$.
- **Si $a = 0$ :** deux valeurs propres réelles distinctes : $-2$ (double, car racine du trinôme en plus du facteur $(-2-\lambda)$) et $1$ (simple).
- **Si $a = \frac{9}{4}$ :** deux valeurs propres réelles distinctes : $-\frac{1}{2}$ (double) et $-2$ (simple).
- **Si $a > \frac{9}{4}$ :** une seule valeur propre réelle, $\lambda = -2$ (les deux autres racines du polynôme caractéristique sont complexes conjuguées).

📖 **Réflexe.** Dans une discussion de valeurs propres avec paramètre, il y a toujours **deux** sources de dégénérescence : le discriminant qui s'annule ET la coïncidence d'une racine avec une valeur propre « fixe ». Oublier la seconde est l'erreur la plus fréquente.`,
        },
        {
          title: "(b) Conditions de diagonalisabilité, sans calcul supplémentaire",
          content: String.raw`📖 **Rappel.** Une matrice $(3 \times 3)$ est diagonalisable (sur $\mathbb{R}$) si et seulement si elle possède trois vecteurs propres linéairement indépendants. Trois valeurs propres réelles **distinctes** suffisent (les vecteurs propres associés à des valeurs propres différentes sont indépendants — démo 6.1).

- **Si $a < \frac{9}{4}$ et $a \neq 0$ :** trois valeurs propres réelles distinctes $\Rightarrow$ $A$ est **diagonalisable**, sans autre vérification.
- **Si $a > \frac{9}{4}$ :** une seule valeur propre réelle (simple) $\Rightarrow$ au plus une direction propre réelle indépendante par valeur propre réelle : impossible d'obtenir trois vecteurs propres réels indépendants, $A$ n'est **pas diagonalisable** sur $\mathbb{R}$.
- **Si $a = 0$ ou $a = \frac{9}{4}$ :** une valeur propre double — on ne peut **pas conclure** à partir de (a) seul : tout dépend du nombre de vecteurs propres indépendants associés à la valeur propre double (2 $\Rightarrow$ diagonalisable, 1 $\Rightarrow$ non). C'est exactement ce que le point (c) tranchera pour $a = 0$.`,
        },
        {
          title: "(c) a = 0 : vecteurs propres de la valeur propre double −2",
          content: String.raw`Pour $a = 0$ :

$$A = \begin{pmatrix} -2 & 0 & 0 \\ -1 & 1 & 0 \\ 0 & 0 & -2 \end{pmatrix}, \qquad \text{valeurs propres } \lambda_{1} = -2 \text{ (double)}, \quad \lambda_2 = 1 \text{ (simple)}.$$

**Pour $\lambda = -2$ :** on résout $(A + 2I)X = O$ :

$$A + 2I = \begin{pmatrix} 0 & 0 & 0 \\ -1 & 3 & 0 \\ 0 & 0 & 0 \end{pmatrix} \implies -x + 3y = 0 \iff x = 3y, \quad z \text{ libre}.$$

L'espace propre est de dimension 2 :

$$X = y\begin{pmatrix} 3 \\ 1 \\ 0 \end{pmatrix} + z\begin{pmatrix} 0 \\ 0 \\ 1 \end{pmatrix}, \qquad y, z \in \mathbb{R}, \qquad \text{d'où } C_1 = \begin{pmatrix} 3 \\ 1 \\ 0 \end{pmatrix}, \quad C_2 = \begin{pmatrix} 0 \\ 0 \\ 1 \end{pmatrix}.$$

La valeur propre double fournit bien **deux** vecteurs propres indépendants : la diagonalisation est possible.`,
        },
        {
          title: "(c) Vecteur propre de λ = 1, matrice S et vérification",
          content: String.raw`**Pour $\lambda = 1$ :** on résout $(A - I)X = O$ :

$$A - I = \begin{pmatrix} -3 & 0 & 0 \\ -1 & 0 & 0 \\ 0 & 0 & -3 \end{pmatrix} \implies x = 0, \quad z = 0, \quad y \text{ libre}, \qquad C_3 = \begin{pmatrix} 0 \\ 1 \\ 0 \end{pmatrix}.$$

On range les trois vecteurs propres en colonnes :

$$S = \begin{pmatrix} 3 & 0 & 0 \\ 1 & 0 & 1 \\ 0 & 1 & 0 \end{pmatrix}, \qquad S^{-1}AS = \begin{pmatrix} -2 & 0 & 0 \\ 0 & -2 & 0 \\ 0 & 0 & 1 \end{pmatrix}.$$

(L'ordre des colonnes est libre, à condition que la diagonale suive le même ordre.)

**Vérification sans inverser $S$ :** il suffit de contrôler $AS = S\Lambda$ colonne par colonne : $AC_1 = (-6, -2, 0)^T = -2C_1$ ✓, $AC_2 = (0, 0, -2)^T = -2C_2$ ✓, $AC_3 = (0, 1, 0)^T = 1 \cdot C_3$ ✓. Et $\det S = 3 \cdot (0 \cdot 0 - 1 \cdot 1) = -3 \neq 0$ : les trois colonnes sont bien indépendantes, $S$ est inversible.`,
        },
      ],
      answer: String.raw`(a) $\det(A - \lambda I) = (-2-\lambda)(\lambda^2 + \lambda + a - 2)$, discriminant $9 - 4a$ : pour $a < \frac{9}{4}$ et $a \neq 0$, trois valeurs propres réelles distinctes ; pour $a = 0$, deux ($-2$ double et $1$) ; pour $a = \frac{9}{4}$, deux ($-\frac{1}{2}$ double et $-2$) ; pour $a > \frac{9}{4}$, une seule ($-2$). (b) Diagonalisable à coup sûr si $a < \frac{9}{4}$ et $a \neq 0$ ; non diagonalisable sur $\mathbb{R}$ si $a > \frac{9}{4}$ ; pour $a \in \{0, \frac{9}{4}\}$, indécidable sans calcul supplémentaire. (c) Pour $a = 0$ : $S = \begin{pmatrix} 3 & 0 & 0 \\ 1 & 0 & 1 \\ 0 & 1 & 0 \end{pmatrix}$ avec $S^{-1}AS = \text{diag}(-2, -2, 1)$ — l'espace propre de $-2$ est de dimension 2, donc $A$ est bien diagonalisable pour $a = 0$.`,
      examTips: [
        String.raw`Ne développe jamais brutalement un déterminant $3 \times 3$ paramétrique quand une ligne ou colonne contient deux zéros : le développement selon la 3e colonne donne ici la factorisation toute faite, et c'est elle qui structure toute la discussion.`,
        String.raw`En (a), la réponse attendue est une **discussion exhaustive** : les quatre cas ($a$ avant/après $\frac{9}{4}$, $a = \frac{9}{4}$, $a = 0$). Le cas caché $a = 0$ (racine du trinôme égale à la valeur propre $-2$) et le cas $a > \frac{9}{4}$ (racines complexes) sont les deux oublis qui coûtent le plus cher.`,
        String.raw`En (b), respecte la consigne « sans calculs supplémentaires » : cite le théorème « valeurs propres distinctes $\Rightarrow$ diagonalisable » et dis honnêtement que les cas à valeur propre double restent indécidés. Cette réponse nuancée EST la réponse attendue (1 point facile).`,
        String.raw`En (c), vérifie $AS = S\Lambda$ colonne par colonne (10 secondes par colonne) plutôt que de calculer $S^{-1}$ : même contrôle, dix fois moins de calculs.`,
      ],
      exerciseRefs: ["6.2", "6.1", "6.5"],
    },
    {
      id: "q7",
      number: 7,
      title: "Modèle de Leontief à deux secteurs",
      points: 4,
      chapters: [3],
      kind: "exercice",
      statement: String.raw`On considère une économie composée de deux secteurs $S_1$ et $S_2$. Pour produire une unité, $S_1$ utilise 0,3 unité du bien qu'il produit et 0,1 unité du bien produit par $S_2$, tandis que $S_2$ utilise 0,4 unité du bien qu'il produit et 0,2 unité du bien produit par $S_1$. La demande finale est de 12 et 8 unités des biens produits par $S_1$ et $S_2$ respectivement.

**(a)** Donnez la matrice de Leontief et recherchez les productions totales de ces deux secteurs (2,5 points)

**(c)** Construisez le tableau d'échanges inter-industriels pour les deux secteurs (1,5 points)`,
      hints: [
        String.raw`Convention du cours : dans la matrice technologique $A$, l'élément $a_{ij}$ est la quantité du bien $i$ consommée par $S_j$ **pour produire une unité**. La phrase « $S_1$ utilise 0,3 unité du bien qu'il produit et 0,1 unité du bien produit par $S_2$ » remplit donc la **colonne 1** : $(0{,}3,\ 0{,}1)^T$. Attention à ne pas transposer !`,
        String.raw`L'équilibre s'écrit $X = AX + D$, c'est-à-dire $(I - A)X = D$ où $I - A$ est la matrice de Leontief. Pour une $2 \times 2$, l'inverse se calcule avec la formule $\frac{1}{\det}\begin{pmatrix} d & -b \\ -c & a \end{pmatrix}$.`,
        String.raw`Contrôle intermédiaire : $\det(I - A) = 0{,}4$. Les productions totales doivent être **supérieures** aux demandes finales (12 et 8) — sinon, erreur de convention quelque part.`,
        String.raw`Pour le tableau d'échanges : le flux du secteur $i$ vers le secteur $j$ vaut $x_{ij} = a_{ij} \cdot x_j$ (coefficient technique fois production totale de l'acheteur). Chaque ligne doit alors sommer à la production totale du secteur.`,
      ],
      steps: [
        {
          title: "(a) Poser la matrice technologique (attention à la convention)",
          content: String.raw`📖 **Rappel (convention du cours).** $a_{ij}$ = quantité du bien $i$ nécessaire à $S_j$ pour produire **une** unité. Les besoins d'un secteur se lisent donc **en colonne**.

- $S_1$ consomme, par unité produite : $0{,}3$ de son propre bien et $0{,}1$ du bien de $S_2$ $\Rightarrow$ colonne 1 $= (0{,}3,\ 0{,}1)^T$.
- $S_2$ consomme, par unité produite : $0{,}2$ du bien de $S_1$ et $0{,}4$ de son propre bien $\Rightarrow$ colonne 2 $= (0{,}2,\ 0{,}4)^T$.

$$A = \begin{pmatrix} 0{,}3 & 0{,}2 \\ 0{,}1 & 0{,}4 \end{pmatrix}, \qquad D = \begin{pmatrix} 12 \\ 8 \end{pmatrix}.$$

L'équilibre production = consommations intermédiaires + demande finale s'écrit $X = AX + D$, où $X = (x_1, x_2)^T$ est le vecteur des productions totales.`,
        },
        {
          title: "(a) La matrice de Leontief et son inverse",
          content: String.raw`$X = AX + D \iff (I - A)X = D$. La **matrice de Leontief** est

$$I - A = \begin{pmatrix} 0{,}7 & -0{,}2 \\ -0{,}1 & 0{,}6 \end{pmatrix}.$$

Son déterminant : $\det(I - A) = 0{,}7 \cdot 0{,}6 - (-0{,}2)(-0{,}1) = 0{,}42 - 0{,}02 = 0{,}4 \neq 0$, donc elle est inversible et

$$(I - A)^{-1} = \frac{1}{0{,}4}\begin{pmatrix} 0{,}6 & 0{,}2 \\ 0{,}1 & 0{,}7 \end{pmatrix} = \begin{pmatrix} \frac{3}{2} & \frac{1}{2} \\ \frac{1}{4} & \frac{7}{4} \end{pmatrix}.$$

📖 **Rappel.** Pour une matrice $2 \times 2$, on échange les éléments diagonaux, on change le signe des deux autres, et on divise par le déterminant.`,
        },
        {
          title: "(a) Productions totales",
          content: String.raw`$$X = (I - A)^{-1}D = \begin{pmatrix} \frac{3}{2} & \frac{1}{2} \\ \frac{1}{4} & \frac{7}{4} \end{pmatrix}\begin{pmatrix} 12 \\ 8 \end{pmatrix} = \begin{pmatrix} 18 + 4 \\ 3 + 14 \end{pmatrix} = \begin{pmatrix} 22 \\ 17 \end{pmatrix}.$$

**Les productions totales sont $x_1 = 22$ unités pour $S_1$ et $x_2 = 17$ unités pour $S_2$.**

**Vérification** (réinjection dans $X = AX + D$) :

$$AX = \begin{pmatrix} 0{,}3 \cdot 22 + 0{,}2 \cdot 17 \\ 0{,}1 \cdot 22 + 0{,}4 \cdot 17 \end{pmatrix} = \begin{pmatrix} 6{,}6 + 3{,}4 \\ 2{,}2 + 6{,}8 \end{pmatrix} = \begin{pmatrix} 10 \\ 9 \end{pmatrix}, \qquad AX + D = \begin{pmatrix} 22 \\ 17 \end{pmatrix} = X. ✓$$`,
        },
        {
          title: "(c) Tableau d'échanges inter-industriels",
          content: String.raw`Le flux du bien $i$ livré au secteur $j$ vaut $x_{ij} = a_{ij}\, x_j$ (coefficient technique multiplié par la production totale de l'acheteur) :

- $x_{11} = 0{,}3 \cdot 22 = 6{,}6$ (bien 1 consommé par $S_1$)
- $x_{12} = 0{,}2 \cdot 17 = 3{,}4$ (bien 1 consommé par $S_2$)
- $x_{21} = 0{,}1 \cdot 22 = 2{,}2$ (bien 2 consommé par $S_1$)
- $x_{22} = 0{,}4 \cdot 17 = 6{,}8$ (bien 2 consommé par $S_2$)

$$\begin{array}{c|cc|c|c} & S_1 & S_2 & \text{Demande finale} & \text{Production totale} \\ \hline S_1 & 6{,}6 & 3{,}4 & 12 & 22 \\ S_2 & 2{,}2 & 6{,}8 & 8 & 17 \end{array}$$

**Vérification ligne par ligne** (livraisons intermédiaires + demande finale = production totale) :

- Ligne $S_1$ : $6{,}6 + 3{,}4 + 12 = 22$ ✓
- Ligne $S_2$ : $2{,}2 + 6{,}8 + 8 = 17$ ✓

Le tableau boucle parfaitement : c'est LA vérification à écrire sur ta copie.`,
        },
      ],
      answer: String.raw`(a) $A = \begin{pmatrix} 0{,}3 & 0{,}2 \\ 0{,}1 & 0{,}4 \end{pmatrix}$, matrice de Leontief $I - A = \begin{pmatrix} 0{,}7 & -0{,}2 \\ -0{,}1 & 0{,}6 \end{pmatrix}$, et $X = (I-A)^{-1}D = (22,\ 17)^T$ : $S_1$ produit 22 unités, $S_2$ en produit 17. (c) Tableau d'échanges : $x_{11} = 6{,}6$, $x_{12} = 3{,}4$, $x_{21} = 2{,}2$, $x_{22} = 6{,}8$, avec demandes finales 12 et 8 — chaque ligne somme bien à la production totale (22 et 17).`,
      examTips: [
        String.raw`L'unique vrai piège est la **convention par colonnes** : les consommations d'un secteur remplissent sa colonne, pas sa ligne. Relis l'énoncé en te demandant « qui consomme ? » — le consommateur indexe la colonne. Une transposition accidentelle donne ici $X = (20,\ 20)^T$ : un résultat d'apparence tout à fait plausible (les vérifications de réinjection et de bouclage passent aussi avec la matrice transposée !) — seule une lecture attentive de l'énoncé t'en protège.`,
        String.raw`Deux contrôles rapides à écrire : la réinjection $AX + D = X$ et le bouclage des lignes du tableau. Ils prennent 30 secondes et sécurisent les 4 points.`,
        String.raw`Dans le tableau d'échanges, les flux se calculent avec $x_{ij} = a_{ij}x_j$ : c'est la production totale de **l'acheteur** $x_j$ qui multiplie, pas celle du vendeur. C'est l'erreur classique de la sous-question (c).`,
        String.raw`Question courte et très standard (4 points en 10-12 minutes) : si tu maîtrises les exercices 3.8 et 3.9 des TP, c'est du point quasi garanti — fais-la tôt dans l'examen.`,
      ],
      exerciseRefs: ["3.8", "3.9"],
    },
    {
      id: "q8",
      number: 8,
      title: "Transformation linéaire : matrice, noyau et image",
      points: 4,
      chapters: [4],
      kind: "exercice",
      statement: String.raw`On considère la transformation linéaire $f : \mathbb{R}^2 \to \mathbb{R}^2$ définie par

$$f\begin{pmatrix} 3 \\ 2 \end{pmatrix} = \begin{pmatrix} 1 \\ 0 \end{pmatrix}, \qquad f\begin{pmatrix} 1 \\ 2 \end{pmatrix} = \begin{pmatrix} 1 \\ 2 \end{pmatrix}.$$

**(a)** Rechercher la matrice $A$ qui représente cette transformation linéaire (1,5 points)

**(b)** Recherchez le noyau de $A$ et l'image de $A$. Quelles sont les dimensions du noyau et de l'image ? (2,5 points)`,
      hints: [
        String.raw`(a) La matrice cherchée (dans la base canonique) doit vérifier $AZ_1 = f(Z_1)$ et $AZ_2 = f(Z_2)$ avec $Z_1 = (3, 2)^T$, $Z_2 = (1, 2)^T$. Deux stratégies équivalentes : poser $A = \begin{pmatrix} a & b \\ c & d \end{pmatrix}$ et résoudre les 4 équations, ou utiliser $A\,(Z_1\ Z_2) = (f(Z_1)\ f(Z_2))$ et inverser.`,
        String.raw`Avec la seconde stratégie : $A = \big(f(Z_1)\ f(Z_2)\big)\,\big(Z_1\ Z_2\big)^{-1}$, et $\det\begin{pmatrix} 3 & 1 \\ 2 & 2 \end{pmatrix} = 4$. Vérifie ensuite ton $A$ en recalculant $AZ_1$ et $AZ_2$.`,
        String.raw`(b) Avant de résoudre $AX = O$, regarde $\det A$ : s'il est non nul, le noyau est réduit au vecteur nul et l'image est tout $\mathbb{R}^2$ — il ne reste qu'à le justifier proprement (noyau = solutions du système homogène, image = sous-vectoriel engendré par les colonnes).`,
      ],
      steps: [
        {
          title: "(a) Traduire les deux conditions en équations",
          content: String.raw`📖 **Rappel (chapitre 4).** Toute transformation linéaire de $\mathbb{R}^2$ dans $\mathbb{R}^2$ s'écrit $f(X) = AX$ pour une unique matrice $A$ $(2 \times 2)$ (dans la base canonique). Il suffit de deux images de vecteurs **indépendants** pour déterminer $A$ entièrement.

Posons $A = \begin{pmatrix} a & b \\ c & d \end{pmatrix}$. Les deux conditions donnent

$$A\begin{pmatrix} 3 \\ 2 \end{pmatrix} = \begin{pmatrix} 3a + 2b \\ 3c + 2d \end{pmatrix} = \begin{pmatrix} 1 \\ 0 \end{pmatrix}, \qquad A\begin{pmatrix} 1 \\ 2 \end{pmatrix} = \begin{pmatrix} a + 2b \\ c + 2d \end{pmatrix} = \begin{pmatrix} 1 \\ 2 \end{pmatrix},$$

soit deux petits systèmes découplés (un pour la ligne $(a, b)$, un pour la ligne $(c, d)$) :

$$\begin{cases} 3a + 2b = 1 \\ a + 2b = 1 \end{cases} \qquad \begin{cases} 3c + 2d = 0 \\ c + 2d = 2 \end{cases}$$`,
        },
        {
          title: "(a) Résoudre et vérifier",
          content: String.raw`Premier système : en soustrayant, $2a = 0$, donc $a = 0$, puis $2b = 1$, $b = \frac{1}{2}$.

Second système : en soustrayant, $2c = -2$, donc $c = -1$ ; en reportant dans $c + 2d = 2$ : $2d = 3$, donc $d = \frac{3}{2}$.

$$A = \begin{pmatrix} 0 & \frac{1}{2} \\ -1 & \frac{3}{2} \end{pmatrix}.$$

**Variante (même résultat).** Avec $Z = (Z_1\ Z_2) = \begin{pmatrix} 3 & 1 \\ 2 & 2 \end{pmatrix}$, $\det Z = 4$, $Z^{-1} = \frac{1}{4}\begin{pmatrix} 2 & -1 \\ -2 & 3 \end{pmatrix}$ :

$$A = \begin{pmatrix} 1 & 1 \\ 0 & 2 \end{pmatrix} \cdot \frac{1}{4}\begin{pmatrix} 2 & -1 \\ -2 & 3 \end{pmatrix} = \frac{1}{4}\begin{pmatrix} 0 & 2 \\ -4 & 6 \end{pmatrix} = \begin{pmatrix} 0 & \frac{1}{2} \\ -1 & \frac{3}{2} \end{pmatrix}.$$

**Vérification** : $A(3, 2)^T = (0 + 1,\ -3 + 3)^T = (1, 0)^T$ ✓ et $A(1, 2)^T = (0 + 1,\ -1 + 3)^T = (1, 2)^T$ ✓.`,
        },
        {
          title: "(b) Le noyau de A",
          content: String.raw`📖 **Rappel.** Le noyau est l'ensemble des solutions du système homogène : noyau$(A) = \{X \in \mathbb{R}^2 : AX = O\}$. C'est un sous-vectoriel de $\mathbb{R}^2$.

$$AX = O \iff \begin{cases} \frac{1}{2}y = 0 \\ -x + \frac{3}{2}y = 0 \end{cases} \iff y = 0 \text{ puis } x = 0.$$

Donc

$$\text{noyau}(A) = \left\{ \begin{pmatrix} 0 \\ 0 \end{pmatrix} \right\}, \qquad \dim \text{noyau}(A) = 0.$$

On pouvait le prévoir : $\det A = 0 \cdot \frac{3}{2} - \frac{1}{2} \cdot (-1) = \frac{1}{2} \neq 0$, donc le système homogène n'a que la solution triviale.`,
        },
        {
          title: "(b) L'image de A et le bilan des dimensions",
          content: String.raw`📖 **Rappel.** L'image de $A$ est le sous-vectoriel engendré par les **colonnes** de $A$ : image$(A) = \mathcal{L}\big((0, -1)^T,\ (\frac{1}{2}, \frac{3}{2})^T\big)$.

Les deux colonnes sont linéairement indépendantes (elles ne sont pas proportionnelles — ou directement : $\det A = \frac{1}{2} \neq 0$), donc elles engendrent un sous-vectoriel de dimension 2 de $\mathbb{R}^2$, c'est-à-dire $\mathbb{R}^2$ tout entier :

$$\text{image}(A) = \mathbb{R}^2, \qquad \dim \text{image}(A) = 2.$$

**Cohérence finale :** $\dim \text{noyau}(A) + \dim \text{image}(A) = 0 + 2 = 2 = n$ : le théorème des dimensions est respecté. ✓ ($f$ est ici une bijection de $\mathbb{R}^2$ sur $\mathbb{R}^2$.)`,
        },
      ],
      answer: String.raw`(a) $A = \begin{pmatrix} 0 & \frac{1}{2} \\ -1 & \frac{3}{2} \end{pmatrix}$ (vérifié : $AZ_1 = (1,0)^T$, $AZ_2 = (1,2)^T$). (b) Comme $\det A = \frac{1}{2} \neq 0$ : noyau$(A) = \{O\}$ de dimension 0, et image$(A) = \mathbb{R}^2$ (engendrée par les colonnes, indépendantes) de dimension 2 ; on a bien $0 + 2 = 2$.`,
      examTips: [
        String.raw`La vérification $AZ_1 = f(Z_1)$, $AZ_2 = f(Z_2)$ prend 20 secondes et détecte toute erreur de (a) — erreur qui, sinon, se propage dans tout le (b). C'est LE réflexe attendu ici.`,
        String.raw`En (b), calcule $\det A$ d'abord : il pilote les deux réponses (noyau trivial, image totale). Mais ne te contente pas d'écrire « $\det A \neq 0$ donc c'est bon » — définis le noyau comme solutions de $AX = O$ et l'image comme sous-vectoriel engendré par les colonnes : les définitions font partie du barème.`,
        String.raw`Termine par le contrôle $\dim \text{noyau} + \dim \text{image} = n$ : une ligne qui montre au correcteur que tu connais le théorème des dimensions, et qui t'aurait alerté en cas d'incohérence.`,
      ],
      exerciseRefs: ["4.11", "4.12"],
    },
    {
      id: "q9",
      number: 9,
      title: "Aire d'une région entre trois droites",
      points: 3,
      chapters: [8],
      kind: "exercice",
      statement: String.raw`Calculez $\displaystyle\iint_R 1\, dA$ où $R$ est la région délimitée par les trois droites d'équation $y = x$, $y = 1$ et $y = 2x$. Représentez graphiquement le domaine d'intégration.`,
      hints: [
        String.raw`Commence par dessiner les trois droites et cherche leurs points d'intersection deux à deux : c'est la seule façon de voir la région. Rappelle-toi aussi ce que représente $\iint_R 1\, dA$ : intégrer la fonction constante $1$ sur $R$ donne exactement **l'aire** de $R$.`,
        String.raw`Les trois sommets sont $(0,0)$ (intersection de $y = x$ et $y = 2x$), $\left(\tfrac{1}{2}, 1\right)$ (intersection de $y = 2x$ et $y = 1$) et $(1,1)$ (intersection de $y = x$ et $y = 1$). Choisis maintenant ton ordre d'intégration : en tranches **horizontales**, les bornes en $x$ sont les deux droites obliques réécrites $x = \frac{y}{2}$ et $x = y$ — une seule intégrale suffit.`,
        String.raw`Avec les tranches horizontales : pour $y$ fixé entre $0$ et $1$, $x$ va de $\frac{y}{2}$ à $y$, donc l'intégrale intérieure vaut $y - \frac{y}{2} = \frac{y}{2}$. Il ne reste qu'à intégrer $\frac{y}{2}$ de $0$ à $1$.`,
      ],
      steps: [
        {
          title: "Comprendre la question : une aire déguisée",
          content: String.raw`📖 **Rappel du cours :** $\displaystyle\iint_R 1\, dA$ mesure le volume sous la surface constante $z = 1$ au-dessus de $R$… c'est-à-dire $1 \times$ l'aire de $R$ : cette intégrale calcule **l'aire du domaine**.

La vraie difficulté de la question n'est donc pas l'intégrale (la fonction est constante !) mais la **description du domaine** : c'est exactement la compétence « déterminer les bornes d'une région délimitée par des droites » du chapitre 8.`,
        },
        {
          title: "Trouver les sommets et dessiner la région",
          content: String.raw`On cherche les intersections des trois droites deux à deux :

- $y = x$ et $y = 2x$ : $x = 2x$ donne $x = 0$, donc le point $(0, 0)$ ;
- $y = 2x$ et $y = 1$ : $2x = 1$ donne le point $\left(\tfrac{1}{2},\, 1\right)$ ;
- $y = x$ et $y = 1$ : le point $(1, 1)$.

$R$ est donc le **triangle de sommets $(0,0)$, $\left(\tfrac{1}{2}, 1\right)$ et $(1,1)$**. Pour le dessiner : la droite $y = 2x$ (la plus pentue) forme le bord gauche, la droite $y = x$ le bord droit (en dessous), et la droite horizontale $y = 1$ ferme le triangle en haut. Entre les deux obliques, on a bien $\frac{y}{2} \leq x \leq y$ pour chaque hauteur $y \in [0, 1]$.`,
        },
        {
          title: "Choisir l'ordre d'intégration : tranches horizontales",
          content: String.raw`Deux options s'offrent à toi.

- **Tranches verticales** ($dy\,dx$) : le bord supérieur change de nature en $x = \tfrac{1}{2}$ (d'abord la droite $y = 2x$, puis la droite $y = 1$) : il faudrait **couper l'intégrale en deux**.
- **Tranches horizontales** ($dx\,dy$) : pour chaque $y \in [0, 1]$, $x$ va du bord gauche $x = \frac{y}{2}$ (droite $y = 2x$) au bord droit $x = y$ (droite $y = x$) : **une seule intégrale**.

On choisit évidemment les tranches horizontales :

$$\iint_R 1\, dA = \int_0^1 \int_{y/2}^{y} 1\, dx\, dy$$`,
        },
        {
          title: "Calculer l'intégrale",
          content: String.raw`L'intégrale intérieure est immédiate (fonction constante $1$) :

$$\int_{y/2}^{y} 1\, dx = y - \frac{y}{2} = \frac{y}{2}$$

Puis l'intégrale extérieure :

$$\int_0^1 \frac{y}{2}\, dy = \left[ \frac{y^2}{4} \right]_0^1 = \frac{1}{4}$$`,
        },
        {
          title: "Vérifier par l'autre ordre d'intégration (et par la géométrie)",
          content: String.raw`**Vérification 1 — tranches verticales** (comme le corrigé manuscrit du sujet) : on coupe en $x = \tfrac{1}{2}$ :

$$\int_0^{1/2} \int_x^{2x} 1\, dy\, dx + \int_{1/2}^{1} \int_x^{1} 1\, dy\, dx = \int_0^{1/2} x\, dx + \int_{1/2}^{1} (1 - x)\, dx = \frac{1}{8} + \frac{1}{8} = \frac{1}{4} \;✓$$

**Vérification 2 — géométrie pure** : triangle de base le segment de $\left(\tfrac{1}{2}, 1\right)$ à $(1,1)$ (longueur $\tfrac{1}{2}$) et de hauteur $1$ (distance verticale au sommet $(0,0)$) : aire $= \frac{1}{2} \cdot \frac{1}{2} \cdot 1 = \frac{1}{4}$ ✓ Les trois méthodes concordent.`,
        },
      ],
      figure: {
        window: { xMin: -0.4, xMax: 1.45, yMin: -0.3, yMax: 1.4 },
        regions: [
          { xFrom: 0, xTo: 0.5, yLow: "x", yHigh: "2*x" },
          { xFrom: 0.5, xTo: 1, yLow: "x", yHigh: "1" },
        ],
        curves: [
          { fn: "2*x", domain: [-0.15, 0.65], label: "y = 2x", labelAt: [0.08, 0.95] },
          { fn: "x", domain: [-0.2, 1.25], label: "y = x", labelAt: [1.05, 0.88] },
        ],
        segments: [
          { from: [-0.25, 1], to: [1.25, 1], label: "y = 1", labelAt: [1.12, 1.14], dashed: true },
        ],
        points: [
          { at: [0, 0], label: "(0, 0)", offset: [-44, 16] },
          { at: [0.5, 1], label: "(1/2, 1)", offset: [-26, -8] },
          { at: [1, 1], label: "(1, 1)", offset: [10, -4] },
        ],
        caption:
          "Le domaine (en violet) est le triangle de sommets (0,0), (1/2, 1) et (1,1), entre la droite y = 2x (bord gauche), la droite y = x (bord droit) et le plafond y = 1. En tranches verticales il faut couper en x = 1/2 (d'où les deux morceaux) ; en tranches horizontales, une seule intégrale suffit : x va de y/2 à y.",
      },
      answer: String.raw`$\displaystyle\iint_R 1\, dA = \frac{1}{4}$. Le domaine est le triangle de sommets $(0,0)$, $\left(\tfrac{1}{2}, 1\right)$ et $(1,1)$, délimité à gauche par $y = 2x$, à droite par $y = x$ et en haut par $y = 1$.`,
      examTips: [
        String.raw`3 points pour ~10 minutes maximum : l'intégrale est triviale, les points sont dans la **description du domaine** et le **graphique** — dessine-le proprement avec les trois sommets nommés, c'est exigé par l'énoncé.`,
        String.raw`Réflexe à montrer au correcteur : choisir l'ordre d'intégration qui évite de couper le domaine en deux (ici les tranches horizontales), et le dire explicitement en une phrase.`,
        String.raw`Vérification express : $\iint_R 1\,dA$ est une aire de triangle — la formule $\frac{1}{2} \times \text{base} \times \text{hauteur}$ doit redonner ton résultat en 10 secondes.`,
      ],
      exerciseRefs: ["8.5", "8.6"],
    },
  ],
};
