import type { Exam } from "./types";

export const exam: Exam = {
  id: "janvier-2026",
  title: "Examen de janvier 2026",
  subtitle: "Sujet complet avec correction officielle",
  official: true,
  pdf: "/pdf/examens/janvier-2026-correction.pdf",
  durationMin: 180,
  totalPoints: 40,
  questions: [
    {
      id: "q1",
      number: 1,
      title: "Rouché-Fontené : rang et nombre de solutions",
      points: 3,
      chapters: [4],
      kind: "demo",
      statement: String.raw`Considérons le système linéaire $AX = B$ de $p$ équations à $n$ inconnues. Discutez le lien entre le nombre de solutions de ce système, $\operatorname{rang}(A)$ et $\operatorname{rang}(A \mid B)$.`,
      hints: [
        String.raw`C'est une pure question de restitution du cours (chapitre 4) : on te demande le théorème qui prédit le nombre de solutions d'un système à partir de deux rangs. Retrouve son nom — il porte celui de deux mathématiciens français.`,
        String.raw`Commence par le critère d'**existence** d'une solution : compare $\operatorname{rg}(A \mid B)$ à $\operatorname{rg} A$. Ajouter la colonne $B$ à droite de $A$ ne peut faire que deux choses au rang — lesquelles, et qu'est-ce que cela signifie pour $B$ vis-à-vis des colonnes de $A$ ?`,
        String.raw`Ta discussion doit distinguer exactement **trois cas** ; dans le cas « infinité de solutions », le nombre de paramètres libres vaut $n - \operatorname{rg} A$. Structure ta réponse autour de ces trois cas, avec une justification pour chacun.`,
      ],
      steps: [
        {
          title: "Identifier la question : le théorème de Rouché-Fontené",
          content: String.raw`Cette question demande d'énoncer et de commenter le **théorème de Rouché-Fontené** (slide 165), le sommet du chapitre 4 : deux rangs et le nombre d'inconnues suffisent à prédire le comportement d'un système **sans le résoudre**.

📖 **Rappel — pourquoi le rang est le bon outil :** résoudre $AX = B$, c'est chercher des coefficients $x_1, \dots, x_n$ tels que

$$x_1 C_1 + x_2 C_2 + \dots + x_n C_n = B,$$

où $C_1, \dots, C_n$ sont les **colonnes** de $A$. Autrement dit : le système possède une solution si et seulement si $B$ appartient au sous-vectoriel engendré par les colonnes de $A$. Or $\operatorname{rg} A$ est précisément la dimension de ce sous-vectoriel : tout se jouera donc sur les rangs.`,
        },
        {
          title: "Le critère d'existence : comparer rg(A|B) et rg A",
          content: String.raw`Quand on accole la colonne $B$ à droite de $A$ pour former la matrice complétée $(A \mid B)$, le rang ne peut que rester identique ou augmenter de 1 :

- si $\operatorname{rg}(A \mid B) = \operatorname{rg} A$ : la colonne $B$ n'apporte aucune direction nouvelle, elle est **combinaison linéaire des colonnes de** $A$ — le système possède au moins une solution ;
- si $\operatorname{rg}(A \mid B) = \operatorname{rg} A + 1$ : $B$ sort du sous-vectoriel engendré par les colonnes de $A$, aucune combinaison linéaire ne peut l'atteindre — le système est **impossible** ($S = \emptyset$).

Le critère central du théorème est donc :

$$AX = B \text{ possède au moins une solution} \iff \operatorname{rg}(A \mid B) = \operatorname{rg} A.$$`,
        },
        {
          title: "Cas « solution unique » : les deux rangs valent n",
          content: String.raw`Supposons $\operatorname{rg} A = \operatorname{rg}(A \mid B) = n$ (le nombre d'inconnues). Une solution existe (les rangs sont égaux), et elle est **unique** : les $n$ colonnes de $A$ sont linéairement indépendantes (rang $n$ pour $n$ colonnes), donc l'écriture de $B$ comme combinaison linéaire des colonnes est unique — deux jeux de coefficients différents contrediraient l'indépendance.

📖 **Lien avec le chapitre 3 :** pour une matrice carrée ($p = n$), $\operatorname{rg} A = n \iff \det A \neq 0$. La règle de Cramer (« $\det A \neq 0 \Rightarrow$ solution unique ») est donc un cas particulier de ce théorème.`,
        },
        {
          title: "Cas « infinité de solutions » : rangs égaux mais < n",
          content: String.raw`Supposons $\operatorname{rg} A = \operatorname{rg}(A \mid B) = k < n$. Une solution $X_0$ existe, mais elle n'est plus unique : le système est **indéterminé**, avec une infinité de solutions décrites par $n - k$ paramètres libres. L'ensemble des solutions s'écrit

$$S = \{X_0 + \lambda_1 X_1 + \dots + \lambda_{n-k} X_{n-k} \; : \; \lambda_1, \dots, \lambda_{n-k} \in \mathbb{R}\},$$

où $X_1, \dots, X_{n-k}$ forment une base de l'ensemble des solutions du système homogène associé $AX = O$ (le noyau de $A$, de dimension $n - k$).

📖 **Vocabulaire du cours :** si $n - k = 1$, le système est **simplement indéterminé** ; si $n - k = 2$, **doublement indéterminé**, etc. Géométriquement, $S$ est un translaté d'un sous-vectoriel de dimension $n - k$ (et $S$ n'est un sous-vectoriel que si le système est homogène).`,
        },
        {
          title: "Cas « impossible » et lecture sur Gauss-Jordan",
          content: String.raw`Enfin, si $\operatorname{rg}(A \mid B) = \operatorname{rg} A + 1$, le système est **incompatible** : $S = \emptyset$.

C'est exactement ce que tu observais au chapitre 2 : après réduction de Gauss-Jordan de la matrice complétée, une ligne de la forme $(0 \; 0 \; \dots \; 0 \mid c)$ avec $c \neq 0$ (l'équation absurde « $0 = c$ ») est une ligne qui augmente le rang de la matrice complétée sans augmenter celui de $A$. Comme les opérations élémentaires conservent les rangs, la discussion « à l'œil » du chapitre 2 et la discussion « par les rangs » du chapitre 4 sont une seule et même chose.`,
        },
        {
          title: "Récapitulatif : l'énoncé complet à restituer",
          content: String.raw`**Théorème de Rouché-Fontené.** Le système $AX = B$ de $p$ équations à $n$ inconnues possède au moins une solution $\iff \operatorname{rg}(A \mid B) = \operatorname{rg} A$. De plus :

$$\begin{array}{l|l}
\text{Comparaison des rangs} & \text{Nombre de solutions} \\
\hline
\operatorname{rg}(A \mid B) = \operatorname{rg} A + 1 & \text{aucune solution : } S = \emptyset \\
\operatorname{rg}(A \mid B) = \operatorname{rg} A = n & \text{solution unique} \\
\operatorname{rg}(A \mid B) = \operatorname{rg} A = k < n & \text{infinité de solutions, } n - k \text{ paramètres libres}
\end{array}$$

Vérification de cohérence : le rang de la matrice complétée vaut toujours $\operatorname{rg} A$ ou $\operatorname{rg} A + 1$, et ces trois cas couvrent donc bien toutes les situations possibles — la discussion est complète.`,
        },
      ],
      answer: String.raw`Il s'agit du **théorème de Rouché-Fontené** : le système possède au moins une solution $\iff \operatorname{rg}(A \mid B) = \operatorname{rg} A$. Si $\operatorname{rg}(A \mid B) = \operatorname{rg} A = n$ : solution unique. Si $\operatorname{rg}(A \mid B) = \operatorname{rg} A = k < n$ : infinité de solutions, avec $n - k$ paramètres libres ($S = X_0 + $ combinaisons d'une base du noyau). Si $\operatorname{rg}(A \mid B) = \operatorname{rg} A + 1$ : aucune solution.`,
      examTips: [
        String.raw`3 points pour une question de cours : cite le **nom** du théorème, l'équivalence d'existence ET les trois cas — un énoncé incomplet (sans le nombre de paramètres $n - \operatorname{rg} A$) laisse des points en route.`,
        String.raw`« Discutez le lien » signifie : énonce le théorème puis commente chaque cas en une phrase (pourquoi les rangs égaux donnent l'existence, pourquoi rang $= n$ force l'unicité). Une simple liste sèche sans justification risque d'être jugée non justifiée (instruction 1 du sujet).`,
        String.raw`Gère ton temps : c'est une question de restitution, elle ne devrait pas dépasser 10 minutes. Écris-la d'un trait en début d'examen pendant que ta mémoire est fraîche.`,
      ],
      exerciseRefs: ["4.10", "2.2"],
    },
    {
      id: "q2",
      number: 2,
      title: "Matrice de Markov et valeur propre 1",
      points: 3,
      chapters: [6],
      kind: "demo",
      statement: String.raw`Soit $A$ une matrice carrée.

- (a) Donnez la définition de « $A$ est une matrice de Markov ».
- (b) Démontrez que, si $A$ est une matrice de Markov, alors $A$ possède au moins une valeur propre égale à 1.`,
      hints: [
        String.raw`Question de cours du chapitre 6 : la définition et la démonstration (slides 228–229) font partie des démonstrations à connaître — c'est la fiche 6.3 du site. Souviens-toi : la définition porte sur les **colonnes** de $A$.`,
        String.raw`Pour (b) : l'hypothèse parle des colonnes, mais un produit matrice-vecteur calcule des sommes le long des **lignes**. Quel outil échange lignes et colonnes ? Et quel vecteur, multiplié à droite, calcule les sommes de lignes ?`,
        String.raw`Calcule $A^T \mathbf{1}$ avec $\mathbf{1} = (1, \dots, 1)^T$ : tu devrais trouver exactement $\mathbf{1}$. Il restera à justifier que $A$ et $A^T$ ont les mêmes valeurs propres (pense au polynôme caractéristique et à $\det M = \det M^T$).`,
      ],
      steps: [
        {
          title: "(a) La définition demandée",
          content: String.raw`**Définition (slide 228).** Une matrice carrée $A$ est une **matrice de Markov** (ou matrice de transition) si :

- tous ses éléments sont non négatifs : $a_{ij} \geq 0$ ;
- la somme des éléments de **chaque colonne** vaut 1 : $a_{1j} + a_{2j} + \dots + a_{nj} = 1$ pour tout $j$.

Lecture probabiliste : $a_{ij}$ est la probabilité de passer à l'état $i$ quand on est dans l'état $j$ ; la colonne $j$ liste toutes les destinations possibles depuis l'état $j$, d'où la somme égale à 1.`,
        },
        {
          title: "(b) La stratégie : passer par la transposée",
          content: String.raw`L'hypothèse porte sur les colonnes de $A$, mais la composante $i$ d'un produit $AX$ est une somme le long de la **ligne** $i$. Pour exploiter l'hypothèse, on transpose : « chaque colonne de $A$ somme à 1 » devient « chaque ligne de $A^T$ somme à 1 ».

Or multiplier une matrice par le vecteur $\mathbf{1} = (1, 1, \dots, 1)^T$ rempli de 1 calcule exactement ses sommes de lignes. Le plan de la preuve est donc : **1)** montrer que 1 est valeur propre de $A^T$ avec le vecteur propre $\mathbf{1}$, puis **2)** transférer ce résultat à $A$.`,
        },
        {
          title: "Étape 1 de la preuve : A^T fixe le vecteur rempli de 1",
          content: String.raw`On calcule le produit ($A^T$ a pour lignes les colonnes de $A$) :

$$A^T \mathbf{1} = \begin{pmatrix} a_{11} & \dots & a_{n1} \\ \vdots & \ddots & \vdots \\ a_{1n} & \dots & a_{nn} \end{pmatrix} \begin{pmatrix} 1 \\ \vdots \\ 1 \end{pmatrix} = \begin{pmatrix} a_{11} + \dots + a_{n1} \\ \vdots \\ a_{1n} + \dots + a_{nn} \end{pmatrix} = \begin{pmatrix} 1 \\ \vdots \\ 1 \end{pmatrix} = 1 \cdot \mathbf{1}.$$

La composante $j$ du produit est la somme des éléments de la colonne $j$ de $A$, égale à 1 par définition d'une matrice de Markov. Comme $\mathbf{1} \neq O$, c'est un vecteur propre légitime : **1 est valeur propre de $A^T$**. Attention, on n'a encore rien dit de $A$ elle-même !`,
        },
        {
          title: "Étape 2 de la preuve : A et A^T ont les mêmes valeurs propres",
          content: String.raw`📖 **Rappels :** $\det M = \det M^T$ (chapitre 3), et $(A - \lambda I)^T = A^T - \lambda I^T = A^T - \lambda I$ car $I^T = I$.

Donc, pour tout $\lambda$ :

$$\det(A - \lambda I) = \det\big( (A - \lambda I)^T \big) = \det(A^T - \lambda I).$$

Les polynômes caractéristiques de $A$ et $A^T$ sont identiques : les deux matrices ont exactement les **mêmes valeurs propres** (mais pas les mêmes vecteurs propres en général).`,
        },
        {
          title: "Conclusion — et où réviser cette démonstration",
          content: String.raw`On assemble : 1 est valeur propre de $A^T$ (étape 1), et $A$ possède les mêmes valeurs propres que $A^T$ (étape 2). Donc **1 est valeur propre de $A$**.

Lecture économique : il existe $X \neq O$ tel que $AX = X$, c'est-à-dire un **état d'équilibre** de la chaîne de Markov (les probabilités à long terme de la question 7 de ce même examen !).

📖 Cette démonstration est la **fiche 6.3** du référentiel des démonstrations : retiens sa structure en trois temps — **transposer** l'hypothèse, **exhiber** le vecteur propre $\mathbf{1}$ de $A^T$, **transférer** à $A$ via le polynôme caractéristique.`,
        },
      ],
      answer: String.raw`(a) $A$ est de Markov si ses éléments sont non négatifs et si chaque **colonne** somme à 1. (b) $A^T \mathbf{1} = \mathbf{1}$ avec $\mathbf{1} = (1, \dots, 1)^T \neq O$ (chaque ligne de $A^T$ somme à 1), donc 1 est valeur propre de $A^T$ ; comme $\det(A - \lambda I) = \det(A^T - \lambda I)$, les matrices $A$ et $A^T$ ont les mêmes valeurs propres, donc 1 est valeur propre de $A$.`,
      examTips: [
        String.raw`Les deux points faciles sont dans la rigueur : n'oublie ni « éléments **non négatifs** » dans la définition, ni la vérification $\mathbf{1} \neq O$ (un vecteur propre doit être non nul).`,
        String.raw`Le passage clé que le correcteur attend : la justification que $A$ et $A^T$ ont les mêmes valeurs propres ($\det M = \det M^T$ appliqué à $A - \lambda I$). Sans ce pont, la preuve ne porte que sur $A^T$.`,
        String.raw`Piège classique : conclure que $\mathbf{1}$ est vecteur propre de $A$ — c'est faux en général ! Seule la **valeur propre** 1 se transfère, pas le vecteur propre.`,
      ],
      demoRef: "6.3",
      exerciseRefs: ["6.7", "6.8"],
    },
    {
      id: "q3",
      number: 3,
      title: "QCM : matrices, systèmes, sous-vectoriels et vecteurs propres",
      points: 6,
      chapters: [1, 2, 4, 6, 7],
      kind: "qcm",
      statement: String.raw`Pour chacune des questions ci-dessous, déterminez l'unique réponse correcte.

**1.** Soit $A$ une matrice de dimension $(n \times n)$.

- (a) Si $A$ est orthogonale, alors $A^{-1} = A$.
- (b) Si $A$ est orthogonale, alors $\det(A) = 1$.
- (c) Si $A$ est orthogonale, alors $A$ est symétrique.
- (d) Si $A$ est orthogonale, alors $A$ est inversible.

**2.** Soient $A$ et $B$ deux matrices de dimension $(n \times n)$.

- (a) Si $A$ est symétrique et $B$ est symétrique alors $AB$ est symétrique.
- (b) $\operatorname{trace}((AB)^T) = \operatorname{trace}(AB)$.
- (c) Si $X$ est dans le noyau de $B$, alors $X$ est dans le noyau de $BA$.
- (d) $\det((AB)^T) = -\det(AB)$.

**3.** Soit $AX = B$ un système de $p$ équations linéaires à $n$ inconnues.

- (a) Si $B = 0$ alors le système est inhomogène.
- (b) Si $B = 0$ alors le système est incompatible.
- (c) Si $B = 0$ alors le système est indéterminé.
- (d) Aucune des autres propositions n'est correcte.

**4.** Soit $V$ un espace vectoriel et $v_1, \dots, v_n \in V$. On suppose $L(v_1, \dots, v_n) = V$.

- (a) L'ensemble $\{v_1, \dots, v_n\}$ contient une base de $V$.
- (b) La dimension de $V$ est égale à $n$.
- (c) Les vecteurs $v_1, \dots, v_n$ sont linéairement indépendants.
- (d) Aucune des autres propositions n'est correcte.

**5.** Soit $A$ une matrice de dimension $(p \times n)$ et soit $f$ la transformation linéaire telle que $f(X) = AX$ pour $X \in \mathbb{R}^n$.

- (a) $N(A)$ est un sous-espace vectoriel de $\mathbb{R}^p$.
- (b) Si $p > n$, alors $N(A) \neq \{0\}$.
- (c) Si $p < n$, alors $N(A) \neq \{0\}$.
- (d) Il y a deux propositions correctes ci-dessus.

**6.** Soit $A$ une matrice de dimension $(n \times n)$ et soit $v$ un vecteur propre de $A$, de valeur propre $\lambda$. Soit $r \neq 0$.

- (a) $v$ est un vecteur propre de $rA$, de même valeur propre $\lambda$.
- (b) $rv$ est un vecteur propre de $rA$, de valeur propre $r\lambda$.
- (c) $rv$ est un vecteur propre de $rA$, de même valeur propre $\lambda$.
- (d) $v$ est un vecteur propre de $rA$, de valeur propre $r\lambda$.`,
      hints: [
        String.raw`Chaque item se tranche avec une **définition précise** du cours, éventuellement complétée d'un contre-exemple $2 \times 2$. Avant de lire les propositions, récite-toi la définition concernée : matrice orthogonale ($A^T A = I$), noyau, $L(v_1, \dots, v_n)$, vecteur propre ($Av = \lambda v$, $v \neq O$).`,
        String.raw`Pour éliminer une affirmation générale, un seul contre-exemple suffit : pense aux rotations et aux matrices de permutation (item 1), et aux identités $(AB)^T = B^T A^T$, $\operatorname{trace}(M^T) = \operatorname{trace}(M)$, $\det(M^T) = \det M$ (item 2).`,
        String.raw`Item 3 : que vaut $X = O$ dans un système homogène ? Item 5 : utilise $\dim N(A) = n - \operatorname{rg} A$ avec $\operatorname{rg} A \leq \min(p, n)$. Item 6 : applique brutalement la définition à la matrice $rA$ : que vaut $(rA)v$ ?`,
      ],
      steps: [
        {
          title: "Item 1 — orthogonale ⟹ inversible : réponse (d)",
          content: String.raw`📖 **Rappel :** $A$ est orthogonale si $A^T A = I$, c'est-à-dire $A^{-1} = A^T$.

La définition même dit que $A$ possède une inverse (à savoir $A^T$) : **(d) est correcte**. On peut aussi le voir par le déterminant : $\det(A^T A) = (\det A)^2 = \det I = 1$, donc $\det A = \pm 1 \neq 0$.

Pourquoi les autres sont fausses :

- (a) $A^{-1} = A^T$, pas $A$ en général. Contre-exemple : la rotation $A = \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}$ est orthogonale mais $A^2 = -I \neq I$.
- (b) $\det A = \pm 1$ : la valeur $-1$ est possible, par exemple pour la permutation $\begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$, dont le déterminant vaut $-1$.
- (c) la même rotation n'est pas symétrique ($a_{12} = -1 \neq 1 = a_{21}$).`,
        },
        {
          title: "Item 2 — la trace ne voit pas la transposée : réponse (b)",
          content: String.raw`📖 **Rappel :** la transposition ne touche pas la diagonale (chaque $m_{ii}$ reste en position $(i, i)$), donc $\operatorname{trace}(M^T) = \operatorname{trace}(M)$ pour toute matrice carrée $M$ — en particulier pour $M = AB$ : **(b) est correcte**.

Pourquoi les autres sont fausses :

- (a) $(AB)^T = B^T A^T = BA$ pour $A, B$ symétriques : $AB$ n'est symétrique que si $A$ et $B$ commutent. Contre-exemple : $A = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$ et $B = \begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix}$ sont symétriques mais $AB = \begin{pmatrix} 0 & 0 \\ 1 & 0 \end{pmatrix}$ ne l'est pas.
- (c) l'ordre est le mauvais : $BX = O$ donne $(AB)X = A(BX) = O$, donc $N(B) \subseteq N(AB)$ — mais pour $BA$ rien ne marche : avec les mêmes $A$, $B$ et $X = (0, 1)^T$, on a $BX = O$ mais $BAX = B(1, 0)^T = (1, 0)^T \neq O$.
- (d) $\det(M^T) = \det M$ (chapitre 3) : il n'y a jamais de signe moins.`,
        },
        {
          title: "Item 3 — un système homogène est toujours compatible : réponse (d)",
          content: String.raw`📖 **Rappel :** un système est **homogène** si $B = O$ ; il admet toujours au moins la solution triviale $X = O$.

- (a) fausse : $B = 0$ est précisément la définition d'un système **homogène** (« inhomogène » est le contraire).
- (b) fausse : $X = O$ est toujours solution, le système est donc toujours **compatible**.
- (c) fausse **en général** : le système homogène est indéterminé seulement si $\operatorname{rg} A < n$ ; si $\operatorname{rg} A = n$ (par exemple $A$ carrée avec $\det A \neq 0$), la solution $X = O$ est unique — le système est déterminé.

Aucune des trois n'est correcte : **(d)**.`,
        },
        {
          title: "Item 4 — d'une famille génératrice on extrait une base : réponse (a)",
          content: String.raw`📖 **Rappel :** $L(v_1, \dots, v_n) = V$ signifie que la famille est **génératrice** de $V$. Le cours montre qu'en retirant un à un les vecteurs qui sont combinaison linéaire des autres, on aboutit à une sous-famille libre et toujours génératrice : une **base** de $V$ contenue dans $\{v_1, \dots, v_n\}$. **(a) est correcte** — c'est d'ailleurs exactement ce que tu fais à la question 4 de cet examen ($v_4$ est redondant, les trois autres forment une base).

Pourquoi les autres sont fausses :

- (b) on peut seulement dire $\dim V \leq n$ ; s'il y a des redondances, $\dim V < n$ (exemple : $v_1 = v_2$).
- (c) génératrice n'implique pas libre : rien n'empêche $v_2 = 2 v_1$.
- (d) exclue puisque (a) est vraie.`,
        },
        {
          title: "Item 5 — plus d'inconnues que d'équations ⟹ noyau non trivial : réponse (c)",
          content: String.raw`📖 **Rappel :** $N(A) = \{X \in \mathbb{R}^n : AX = O\}$ et $\dim N(A) = n - \operatorname{rg} A$, avec $\operatorname{rg} A \leq \min(p, n)$.

Si $p < n$ : $\operatorname{rg} A \leq p < n$, donc $\dim N(A) = n - \operatorname{rg} A \geq n - p > 0$ : le noyau contient un vecteur non nul. **(c) est correcte.**

Pourquoi les autres sont fausses :

- (a) le noyau est fait de vecteurs $X \in \mathbb{R}^n$ (l'espace de départ de $f$) : c'est un sous-vectoriel de $\mathbb{R}^n$, pas de $\mathbb{R}^p$ — c'est l'**image** qui vit dans $\mathbb{R}^p$.
- (b) avec $p > n$ le noyau peut très bien être réduit à $\{0\}$ : par exemple $A = \begin{pmatrix} 1 \\ 0 \end{pmatrix}$ ($p = 2$, $n = 1$) vérifie $AX = O \Rightarrow X = 0$.
- (d) une seule proposition est correcte, pas deux.`,
        },
        {
          title: "Item 6 — multiplier la matrice multiplie la valeur propre : réponse (d)",
          content: String.raw`On applique la définition à $rA$ : puisque $Av = \lambda v$ avec $v \neq O$,

$$(rA)v = r(Av) = r(\lambda v) = (r\lambda)v.$$

Donc $v$ est vecteur propre de $rA$ pour la valeur propre $r\lambda$ : **(d) est la réponse attendue** (celle du corrigé officiel).

- (a) et (c) sont fausses comme propriétés générales : la valeur propre devient $r\lambda$, elle ne resterait égale à $\lambda$ que dans le cas particulier $r = 1$ — or l'affirmation doit valoir pour tout $r \neq 0$.
- (b) mérite une remarque d'honnêteté : comme $r \neq 0$, le vecteur $rv$ est un multiple **non nul** d'un vecteur propre, donc il est lui aussi vecteur propre de $rA$ pour $r\lambda$ ($ (rA)(rv) = r^2 \lambda v = (r\lambda)(rv)$) — l'affirmation est mathématiquement défendable. La réponse (d) reste la formulation directe et canonique (le vecteur $v$ lui-même, sans multiple superflu) : au QCM, choisis la réponse qui découle immédiatement du calcul $(rA)v = (r\lambda)v$.

📖 **À retenir :** multiplier la matrice par $r$ multiplie toutes les valeurs propres par $r$, mais ne change ni les vecteurs propres ni les espaces propres.`,
        },
      ],
      answer: String.raw`Réponses : **1(d)** (orthogonale $\Rightarrow$ inversible, $A^{-1} = A^T$) ; **2(b)** ($\operatorname{trace}(M^T) = \operatorname{trace}(M)$) ; **3(d)** ($B = O$ : homogène, toujours compatible, pas forcément indéterminé) ; **4(a)** (une famille génératrice contient une base) ; **5(c)** ($p < n \Rightarrow \dim N(A) \geq n - p > 0$) ; **6(d)** ($(rA)v = (r\lambda)v$).`,
      examTips: [
        String.raw`6 items pour 6 points : environ 1 point et 3–4 minutes par item. Ne t'enlise pas : si un item résiste, note ta meilleure réponse et reviens-y à la fin.`,
        String.raw`Méthode fiable : pour chaque proposition « générale », cherche un contre-exemple $2 \times 2$ (rotation, permutation, matrice avec une ligne nulle). Si tu n'en trouves pas en 30 secondes, essaie plutôt de la démontrer à partir de la définition.`,
        String.raw`Méfie-toi des options « Aucune des autres » et « Il y a deux propositions correctes » : elles t'obligent à statuer sur TOUTES les propositions, pas seulement à en trouver une vraie.`,
        String.raw`Les pièges récurrents de ce QCM : confondre $A^{-1} = A^T$ avec $A^{-1} = A$, oublier que $\det A = \pm 1$ pour une orthogonale, croire qu'homogène implique indéterminé, et confondre l'espace d'arrivée ($\mathbb{R}^p$) avec l'espace de départ ($\mathbb{R}^n$) pour le noyau.`,
      ],
    },
    {
      id: "q4",
      number: 4,
      title: "Sous-vectoriel de R⁵ : base, dimension et orthonormalisation",
      points: 5,
      chapters: [4, 5],
      kind: "exercice",
      statement: String.raw`Dans $\mathbb{R}^5$, considérons le sous-vectoriel

$$V = \{(x + z + t, \; y + z - t, \; x - z + t, \; y + z - t, \; 2y + z - 2t) \; : \; x, y, z, t \in \mathbb{R}\}.$$

- (a) Donnez une base et la dimension de $V$. (2 points)
- (b) Est-ce que la base de (a) est orthonormée ? Si non, donnez une base orthonormée de $V$. (3 points)`,
      hints: [
        String.raw`Sépare les paramètres : écris le vecteur générique de $V$ sous la forme $x \, v_1 + y \, v_2 + z \, v_3 + t \, v_4$. Tu obtiens $V = L(v_1, v_2, v_3, v_4)$, et le travail devient : trier cette famille génératrice (chapitre 4).`,
        String.raw`Les quatre vecteurs ne sont pas indépendants : cherche une relation évidente entre $v_1$, $v_2$ et $v_4$ (compare les signes composante par composante). Puis justifie que les trois restants sont libres, par exemple avec un déterminant $3 \times 3$ extrait de leurs composantes.`,
        String.raw`Contrôles : tu devrais trouver $\dim V = 3$ (le déterminant extrait des trois premières composantes vaut $-2$), et pour (b) : $v_1 \bullet v_2 = 0$, $v_1 \bullet v_3 = 0$ mais $v_2 \bullet v_3 = 4$ — Gram–Schmidt n'aura donc qu'un seul vecteur à corriger.`,
      ],
      steps: [
        {
          title: "Réécrire V comme sous-vectoriel engendré",
          content: String.raw`Le vecteur générique de $V$ dépend linéairement des quatre paramètres : on le décompose en isolant chacun d'eux.

$$\begin{pmatrix} x + z + t \\ y + z - t \\ x - z + t \\ y + z - t \\ 2y + z - 2t \end{pmatrix} = x \begin{pmatrix} 1 \\ 0 \\ 1 \\ 0 \\ 0 \end{pmatrix} + y \begin{pmatrix} 0 \\ 1 \\ 0 \\ 1 \\ 2 \end{pmatrix} + z \begin{pmatrix} 1 \\ 1 \\ -1 \\ 1 \\ 1 \end{pmatrix} + t \begin{pmatrix} 1 \\ -1 \\ 1 \\ -1 \\ -2 \end{pmatrix}.$$

Donc $V = L(v_1, v_2, v_3, v_4)$ avec $v_1 = (1, 0, 1, 0, 0)^T$, $v_2 = (0, 1, 0, 1, 2)^T$, $v_3 = (1, 1, -1, 1, 1)^T$ et $v_4 = (1, -1, 1, -1, -2)^T$ : c'est une famille **génératrice** de $V$. Pour en faire une base, il faut la rendre libre.`,
        },
        {
          title: "Trier la famille : v₄ est redondant",
          content: String.raw`En comparant les composantes, on remarque une relation simple :

$$v_1 - v_2 = (1 - 0, \; 0 - 1, \; 1 - 0, \; 0 - 1, \; 0 - 2)^T = (1, -1, 1, -1, -2)^T = v_4.$$

📖 **Rappel :** retirer d'une famille génératrice un vecteur qui est combinaison linéaire des autres ne change pas le sous-vectoriel engendré. Donc $V = L(v_1, v_2, v_3)$, et la famille $\{v_1, v_2, v_3, v_4\}$ n'était pas libre.`,
        },
        {
          title: "v₁, v₂, v₃ sont linéairement indépendants",
          content: String.raw`Pour justifier l'indépendance, on extrait un déterminant $3 \times 3$ des composantes : en gardant les trois **premières** composantes de chaque vecteur,

$$\begin{vmatrix} 1 & 0 & 1 \\ 0 & 1 & 1 \\ 1 & 0 & -1 \end{vmatrix} = 1 \cdot \begin{vmatrix} 1 & 1 \\ 0 & -1 \end{vmatrix} - 0 + 1 \cdot \begin{vmatrix} 0 & 1 \\ 1 & 0 \end{vmatrix} = (-1) + (-1) = -2 \neq 0.$$

📖 **Rappel :** si un déterminant extrait d'ordre 3 est non nul, les trois vecteurs sont linéairement indépendants — toute combinaison linéaire nulle devrait déjà annuler ces trois composantes, ce qui force les trois coefficients à être nuls.

**Conclusion (a) :** $\{v_1, v_2, v_3\}$ est une famille libre et génératrice de $V$ : c'est une **base**, et $\dim V = 3$.`,
        },
        {
          title: "(b) La base est-elle orthonormée ?",
          content: String.raw`📖 **Rappel :** une base est orthonormée si les vecteurs sont deux à deux orthogonaux (produits scalaires nuls) ET tous de norme 1.

On calcule les produits scalaires :

- $v_1 \bullet v_2 = 0 + 0 + 0 + 0 + 0 = 0$ : orthogonaux ;
- $v_1 \bullet v_3 = 1 + 0 - 1 + 0 + 0 = 0$ : orthogonaux ;
- $v_2 \bullet v_3 = 0 + 1 + 0 + 1 + 2 = 4 \neq 0$ : **pas orthogonaux**.

De plus $\|v_1\| = \sqrt{2} \neq 1$. La base n'est donc **pas orthonormée** : il faut appliquer le procédé de Gram–Schmidt, puis normer.`,
        },
        {
          title: "Gram–Schmidt : Y₁ et Y₂ sont déjà en place",
          content: String.raw`📖 **Rappel (Gram–Schmidt) :** on pose $Y_1 = v_1$, puis on construit chaque $Y_k$ en retirant de $v_k$ ses projections sur les $Y$ précédents : $Y_k = v_k - \sum_{i < k} \frac{v_k \bullet Y_i}{Y_i \bullet Y_i} Y_i$.

Ici :

- $Y_1 = v_1 = (1, 0, 1, 0, 0)^T$ ;
- $Y_2 = v_2 - \frac{v_2 \bullet Y_1}{Y_1 \bullet Y_1} Y_1 = v_2 - 0 = (0, 1, 0, 1, 2)^T$, car $v_2 \bullet Y_1 = 0$ : $v_2$ était déjà orthogonal à $Y_1$.

Le seul vrai travail sera $Y_3$, puisque $v_3$ n'est pas orthogonal à $Y_2$.`,
        },
        {
          title: "Gram–Schmidt : correction de v₃",
          content: String.raw`Avec $v_3 \bullet Y_1 = 0$, $v_3 \bullet Y_2 = 4$ et $Y_2 \bullet Y_2 = 0 + 1 + 0 + 1 + 4 = 6$ :

$$Y_3 = v_3 - \frac{v_3 \bullet Y_1}{Y_1 \bullet Y_1} Y_1 - \frac{v_3 \bullet Y_2}{Y_2 \bullet Y_2} Y_2 = \begin{pmatrix} 1 \\ 1 \\ -1 \\ 1 \\ 1 \end{pmatrix} - \frac{4}{6} \begin{pmatrix} 0 \\ 1 \\ 0 \\ 1 \\ 2 \end{pmatrix} = \begin{pmatrix} 1 \\ 1/3 \\ -1 \\ 1/3 \\ -1/3 \end{pmatrix} = \frac{1}{3} \begin{pmatrix} 3 \\ 1 \\ -3 \\ 1 \\ -1 \end{pmatrix}.$$

**Vérification immédiate** (réflexe indispensable) : $Y_3 \bullet Y_1 = \frac{1}{3}(3 - 3) = 0$ ✓ et $Y_3 \bullet Y_2 = \frac{1}{3}(0 + 1 + 0 + 1 - 2) = 0$ ✓. Les trois vecteurs $Y_1, Y_2, Y_3$ sont bien deux à deux orthogonaux.

⚠️ **Coquille dans le corrigé officiel (PDF) :** le document imprime ici $Y_3 = \frac{1}{3}(-2, 1, -3, 1, -1)^T$ puis $U_3 = \frac{1}{4}(-2, 1, -3, 1, -1)^T$ — c'est une erreur de soustraction (la première composante vaut $1 - \frac{4}{6} \cdot 0 = 1$, pas $-2/3$). Ce vecteur est certes unitaire ($\sqrt{4 + 1 + 9 + 1 + 1} = 4$), mais il n'est ni orthogonal à $U_1$ ($(-2) \cdot 1 + (-3) \cdot 1 = -5 \neq 0$), ni dans $V$ (ses composantes 2 et 4 devraient être égales). Le calcul correct est celui ci-dessus.`,
        },
        {
          title: "Normer les trois vecteurs",
          content: String.raw`On pose $U_i = Y_i / \|Y_i\|$ :

- $\|Y_1\| = \sqrt{1 + 1} = \sqrt{2}$, donc $U_1 = \frac{1}{\sqrt{2}} (1, 0, 1, 0, 0)^T = \frac{\sqrt{2}}{2} (1, 0, 1, 0, 0)^T$ ;
- $\|Y_2\| = \sqrt{1 + 1 + 4} = \sqrt{6}$, donc $U_2 = \frac{\sqrt{6}}{6} (0, 1, 0, 1, 2)^T$ ;
- $\|Y_3\| = \frac{1}{3} \|(3, 1, -3, 1, -1)^T\| = \frac{1}{3} \sqrt{9 + 1 + 9 + 1 + 1} = \frac{\sqrt{21}}{3}$, donc $U_3 = \frac{1}{\sqrt{21}} (3, 1, -3, 1, -1)^T = \frac{\sqrt{21}}{21} (3, 1, -3, 1, -1)^T$.

📖 **Rappel :** normer $Y_3$ ou normer $3 Y_3 = (3, 1, -3, 1, -1)^T$ donne le même vecteur unitaire (multiplier par un scalaire positif ne change pas la direction) — on norme la version « débarrassée » de ses fractions, c'est plus confortable.`,
        },
        {
          title: "Vérification finale",
          content: String.raw`Triple contrôle de la base $\{U_1, U_2, U_3\}$ :

- **normes** : $\|U_1\| = \frac{1}{\sqrt{2}} \sqrt{2} = 1$ ✓, $\|U_2\| = \frac{1}{\sqrt{6}} \sqrt{6} = 1$ ✓, $\|U_3\| = \frac{1}{\sqrt{21}} \sqrt{21} = 1$ ✓ ;
- **orthogonalité** : les produits scalaires deux à deux sont nuls (vérifiés à l'étape 6 ; normer ne les change pas) ✓ ;
- **appartenance à $V$** : chaque $U_i$ est combinaison linéaire de $v_1, v_2, v_3$ — par exemple $(3, 1, -3, 1, -1)^T = -2 v_2 + 3 v_3$ ; on peut aussi observer que tout vecteur de $V$ a ses composantes 2 et 4 égales, ce qui est le cas des trois $U_i$ ✓.

La famille $\{U_1, U_2, U_3\}$ est donc une base orthonormée de $V$.`,
        },
      ],
      answer: String.raw`(a) $V = L(v_1, v_2, v_3, v_4)$ avec $v_4 = v_1 - v_2$ ; une base est $\{v_1, v_2, v_3\} = \{(1,0,1,0,0)^T, \; (0,1,0,1,2)^T, \; (1,1,-1,1,1)^T\}$ et $\dim V = 3$. (b) Non ($v_2 \bullet v_3 = 4 \neq 0$). Après Gram–Schmidt et normalisation : $U_1 = \frac{\sqrt{2}}{2}(1,0,1,0,0)^T$, $U_2 = \frac{\sqrt{6}}{6}(0,1,0,1,2)^T$, $U_3 = \frac{\sqrt{21}}{21}(3,1,-3,1,-1)^T$.`,
      examTips: [
        String.raw`Le correcteur attend une **justification** de l'indépendance de $v_1, v_2, v_3$ (déterminant extrait non nul, ou Gauss sur les composantes) : affirmer « ils sont indépendants » sans preuve coûte des points.`,
        String.raw`Avant de lancer Gram–Schmidt, calcule TOUS les produits scalaires deux à deux : ici deux sont déjà nuls, ce qui réduit énormément les calculs. Réutilise ces valeurs dans les projections au lieu de les recalculer.`,
        String.raw`Réflexe de vérification qui sauve : après chaque $Y_k$, contrôle $Y_k \bullet Y_i = 0$ pour les $i < k$. Une erreur de fraction se détecte en 15 secondes ici, mais coûte tout le point (b) si elle passe inaperçue.`,
        String.raw`Budget temps : environ 20 minutes ((a) : 8 min, (b) : 12 min). Garde les racines carrées telles quelles ($\sqrt{21}$ ne se simplifie pas) — le sujet autorise les fractions irréductibles et les radicaux.`,
      ],
      exerciseRefs: ["5.3", "5.2", "4.7"],
    },
    {
      id: "q5",
      number: 5,
      title: "Forme quadratique : diagonalisation orthogonale, genre et minimum",
      points: 6,
      chapters: [6, 7],
      kind: "exercice",
      statement: String.raw`Soit la forme quadratique

$$Q(x, y, z) = 2x^2 + 2y^2 + 2z^2 - 2xy + 2xz - 2yz.$$

- (a) Écrivez $Q(x, y, z)$ sous la forme $Q(X) = X^T A X$, pour $X = (x, y, z)^T$ et $A$ une matrice symétrique. (1 point)
- (b) Diagonalisez $A$ à l'aide d'une matrice orthogonale $P$. Précisez les matrices $P$ et $D$ telles que $P^T A P = D$. (3 points)
- (c) Déterminez le genre de $Q$. (1 point)
- (d) Déterminez la valeur minimale de $Q(X)$ sous la contrainte $\|X\| = 1$ et un vecteur $X$ pour lequel cette valeur minimale est atteinte. (1 point)`,
      hints: [
        String.raw`(a) Les coefficients des carrés vont sur la diagonale de $A$ ; chaque coefficient croisé se partage en deux moitiés symétriques : $-2xy$ donne $a_{12} = a_{21} = -1$.`,
        String.raw`(b) Résous $\det(A - \lambda I) = 0$. Contrôle : tu devrais trouver $\lambda = 1$ (racine double) et $\lambda = 4$ — vérifie avec la trace ($1 + 1 + 4 = 6$) et le déterminant ($1 \cdot 1 \cdot 4 = 4 = \det A$).`,
        String.raw`Pour $\lambda = 1$, l'espace propre est un **plan** : choisis-y directement deux vecteurs orthogonaux entre eux (sinon il faudra un Gram–Schmidt). Avant d'écrire $P$, teste l'orthogonalité de tes trois colonnes deux à deux.`,
        String.raw`(c) et (d) se lisent sur $D$ : le signe des valeurs propres donne le genre, et sous $\|X\| = 1$ la forme est coincée entre $\lambda_{\min}$ et $\lambda_{\max}$ — le minimum est atteint sur l'espace propre de $\lambda_{\min}$.`,
      ],
      steps: [
        {
          title: "(a) De la forme quadratique à la matrice symétrique",
          content: String.raw`📖 **Rappel :** dans $X^T A X$ avec $A$ symétrique, le coefficient de $x_i^2$ est $a_{ii}$ et le coefficient du produit croisé $x_i x_j$ ($i \neq j$) est $a_{ij} + a_{ji} = 2 a_{ij}$. On place donc les coefficients des carrés sur la diagonale et la **moitié** de chaque coefficient croisé hors diagonale.

Ici : carrés $2, 2, 2$ ; termes croisés $-2xy \Rightarrow a_{12} = -1$, $+2xz \Rightarrow a_{13} = 1$, $-2yz \Rightarrow a_{23} = -1$. D'où

$$Q(x, y, z) = \begin{pmatrix} x & y & z \end{pmatrix} \begin{pmatrix} 2 & -1 & 1 \\ -1 & 2 & -1 \\ 1 & -1 & 2 \end{pmatrix} \begin{pmatrix} x \\ y \\ z \end{pmatrix}, \qquad A = \begin{pmatrix} 2 & -1 & 1 \\ -1 & 2 & -1 \\ 1 & -1 & 2 \end{pmatrix}.$$

Contrôle rapide : en redéveloppant $X^T A X$, les doubles produits $2 a_{ij} x_i x_j$ redonnent bien $-2xy + 2xz - 2yz$ ✓.`,
        },
        {
          title: "(b) L'équation caractéristique",
          content: String.raw`On développe $\det(A - \lambda I)$ selon la première ligne :

$$\det(A - \lambda I) = \begin{vmatrix} 2 - \lambda & -1 & 1 \\ -1 & 2 - \lambda & -1 \\ 1 & -1 & 2 - \lambda \end{vmatrix} = (2 - \lambda)\big[(2 - \lambda)^2 - 1\big] + 1 \cdot \big[ -(2 - \lambda) + 1 \big] + 1 \cdot \big[ 1 - (2 - \lambda) \big].$$

Les deux derniers crochets valent chacun $\lambda - 1$, et $(2 - \lambda)^2 - 1 = (1 - \lambda)(3 - \lambda)$. Donc

$$\det(A - \lambda I) = (2 - \lambda)(1 - \lambda)(3 - \lambda) + 2(\lambda - 1) = (1 - \lambda)\big[(2 - \lambda)(3 - \lambda) - 2\big] = (1 - \lambda)(\lambda^2 - 5\lambda + 4).$$

Comme $\lambda^2 - 5\lambda + 4 = (\lambda - 1)(\lambda - 4)$, on obtient

$$\det(A - \lambda I) = (1 - \lambda)^2 (4 - \lambda) :$$

les valeurs propres sont $\lambda = 1$ (**multiplicité 2**) et $\lambda = 4$ (multiplicité 1).

**Vérifications :** somme $1 + 1 + 4 = 6 = \operatorname{trace}(A)$ ✓ ; produit $1 \cdot 1 \cdot 4 = 4 = \det A$ (calcul direct : $2 \cdot 3 - (-1) \cdot (-1) + 1 \cdot (-1) = 6 - 1 - 1 = 4$) ✓.`,
        },
        {
          title: "L'espace propre de λ = 1 : un plan",
          content: String.raw`On résout $(A - I)X = O$ avec

$$A - I = \begin{pmatrix} 1 & -1 & 1 \\ -1 & 1 & -1 \\ 1 & -1 & 1 \end{pmatrix}.$$

Les trois lignes sont proportionnelles : le système se réduit à l'unique équation $x - y + z = 0$. L'espace propre est un plan (dimension 2 = multiplicité de la racine ✓ : la diagonalisation est possible).

Comme on veut une matrice $P$ **orthogonale**, on choisit dans ce plan deux vecteurs orthogonaux **entre eux** :

- $v_1 = (1, 1, 0)^T$ (contrôle : $1 - 1 + 0 = 0$ ✓) ;
- $v_2 = (1, -1, -2)^T$ (contrôle : $1 + 1 - 2 = 0$ ✓ et $v_1 \bullet v_2 = 1 - 1 + 0 = 0$ ✓).

📖 **Rappel :** pour une matrice symétrique, les vecteurs propres de valeurs propres **différentes** sont automatiquement orthogonaux ; mais à l'intérieur d'un même espace propre, c'est à toi d'assurer l'orthogonalité (choix direct comme ici, ou Gram–Schmidt).`,
        },
        {
          title: "L'espace propre de λ = 4 : une droite",
          content: String.raw`On résout $(A - 4I)X = O$ avec

$$A - 4I = \begin{pmatrix} -2 & -1 & 1 \\ -1 & -2 & -1 \\ 1 & -1 & -2 \end{pmatrix}.$$

En additionnant les deux premières lignes : $-3x - 3y = 0$, donc $y = -x$. En reportant dans la première ligne : $-2x - (-x) + z = -2x + x + z = 0$, donc $z = x$. La troisième ligne est alors automatiquement satisfaite : $x - (-x) - 2x = 0$ ✓. L'espace propre est la droite dirigée par

$$v_3 = (1, -1, 1)^T.$$

**Vérifications :** $A v_3 = (2 + 1 + 1, \; -1 - 2 - 1, \; 1 + 1 + 2)^T = (4, -4, 4)^T = 4 v_3$ ✓ ; orthogonalité automatique avec l'autre espace propre : $v_3 \bullet v_1 = 1 - 1 + 0 = 0$ ✓ et $v_3 \bullet v_2 = 1 + 1 - 2 = 0$ ✓.

⚠️ **Coquille dans le corrigé officiel (PDF) :** le document affirme « le système est équivalent à $x = y = z$ » et prend $v_3 = (1, 1, 1)^T$. C'est faux : $A (1, 1, 1)^T = (2, 0, 2)^T \neq 4 \, (1, 1, 1)^T$, et $(1, 1, 1)^T$ n'est même pas orthogonal à $v_1 = (1, 1, 0)^T$ — la matrice $P$ du PDF (3e colonne $\frac{1}{\sqrt{3}}(1, 1, 1)^T$) n'est donc pas orthogonale et ne diagonalise pas $A$. La résolution correcte est celle ci-dessus : $v_3 = (1, -1, 1)^T$.`,
        },
        {
          title: "Construire P et D",
          content: String.raw`On norme les trois vecteurs : $\|v_1\| = \sqrt{2}$, $\|v_2\| = \sqrt{6}$, $\|v_3\| = \sqrt{3}$, puis on les place **en colonnes** dans $P$, dans le même ordre que les valeurs propres dans $D$ :

$$P = \begin{pmatrix} 1/\sqrt{2} & 1/\sqrt{6} & 1/\sqrt{3} \\ 1/\sqrt{2} & -1/\sqrt{6} & -1/\sqrt{3} \\ 0 & -2/\sqrt{6} & 1/\sqrt{3} \end{pmatrix}, \qquad D = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 4 \end{pmatrix}, \qquad P^T A P = D.$$

$P$ est orthogonale : ses colonnes sont orthonormées (produits scalaires deux à deux nuls, normes 1 — vérifiés aux étapes précédentes), donc $P^T P = I$ et $P^{-1} = P^T$. C'est ce qui permet d'écrire $P^T A P = D$ au lieu de $P^{-1} A P = D$.`,
        },
        {
          title: "(c) Le genre de Q",
          content: String.raw`📖 **Rappel :** le genre d'une forme quadratique se lit sur les signes des valeurs propres de $A$ : toutes $> 0$ : **définie positive** ; toutes $\geq 0$ avec au moins une nulle : semi-définie positive ; des signes des deux côtés : indéfinie (et symétriquement pour le côté négatif).

Ici $\lambda = 1 > 0$ et $\lambda = 4 > 0$ : toutes les valeurs propres sont strictement positives, donc $Q$ est **définie positive** ($Q(X) > 0$ pour tout $X \neq O$).

Contre-vérification sans valeurs propres : les mineurs principaux dominants de $A$ valent $2 > 0$, $\begin{vmatrix} 2 & -1 \\ -1 & 2 \end{vmatrix} = 3 > 0$ et $\det A = 4 > 0$ — même conclusion ✓.`,
        },
        {
          title: "(d) Le minimum sous la contrainte ||X|| = 1",
          content: String.raw`Posons $Y = P^T X$ (changement de coordonnées orthogonal : il préserve la norme, $\|Y\| = \|X\|$). Alors

$$Q(X) = X^T A X = Y^T D Y = y_1^2 + y_2^2 + 4 y_3^2 \geq 1 \cdot (y_1^2 + y_2^2 + y_3^2) = \|X\|^2 = 1,$$

avec égalité dès que $y_3 = 0$. Sous la contrainte $\|X\| = 1$, la valeur minimale de $Q$ est donc la **plus petite valeur propre** :

$$\min_{\|X\| = 1} Q(X) = \lambda_{\min} = 1,$$

atteinte pour tout vecteur **unitaire** de l'espace propre associé à $\lambda = 1$, par exemple

$$X = \frac{1}{\sqrt{2}} (1, 1, 0)^T.$$

**Vérification finale :** $Q\big(\tfrac{1}{\sqrt{2}}, \tfrac{1}{\sqrt{2}}, 0\big) = 2 \cdot \tfrac{1}{2} + 2 \cdot \tfrac{1}{2} + 0 - 2 \cdot \tfrac{1}{2} + 0 - 0 = 1$ ✓ et $\|X\| = 1$ ✓.`,
        },
      ],
      answer: String.raw`(a) $A = \begin{pmatrix} 2 & -1 & 1 \\ -1 & 2 & -1 \\ 1 & -1 & 2 \end{pmatrix}$. (b) $\det(A - \lambda I) = (1 - \lambda)^2 (4 - \lambda)$ : $\lambda = 1$ (double) et $\lambda = 4$ ; $P = \begin{pmatrix} 1/\sqrt{2} & 1/\sqrt{6} & 1/\sqrt{3} \\ 1/\sqrt{2} & -1/\sqrt{6} & -1/\sqrt{3} \\ 0 & -2/\sqrt{6} & 1/\sqrt{3} \end{pmatrix}$, $D = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 4 \end{pmatrix}$, $P^T A P = D$. (c) $Q$ est **définie positive**. (d) $\min_{\|X\| = 1} Q(X) = 1$, atteint par exemple en $X = \frac{1}{\sqrt{2}}(1, 1, 0)^T$.`,
      examTips: [
        String.raw`Le point (b) vaut 3 des 6 points : soigne le calcul du polynôme caractéristique et **vérifie** trace et déterminant avant de chercher les vecteurs propres — une racine fausse ruine toute la suite.`,
        String.raw`Piège n°1 de la diagonalisation orthogonale : pour une valeur propre double, deux vecteurs propres quelconques du plan ne suffisent pas — il les faut orthogonaux **entre eux**. Teste les produits scalaires des colonnes de $P$ avant de conclure.`,
        String.raw`Vérifie chaque vecteur propre par le produit direct ($A v_3 = 4 v_3$ se contrôle en quelques secondes) : c'est la vérification que le correcteur adore voir et qui t'évite de diagonaliser avec un vecteur faux.`,
        String.raw`(c) et (d) valent 2 points pour 3 lignes de rédaction : ne les sacrifie pas par manque de temps. Même si (b) n'est pas terminé, tu peux énoncer le principe (genre lu sur les signes des $\lambda$, minimum $= \lambda_{\min}$ atteint sur son espace propre).`,
      ],
      exerciseRefs: ["7.2", "7.1", "7.4"],
    },
    {
      id: "q6",
      number: 6,
      title: "Système paramétrique : Cramer puis Gauss-Jordan",
      points: 8,
      chapters: [2, 3],
      kind: "exercice",
      statement: String.raw`Pour $a \in \mathbb{R}$, on considère le système d'équations linéaires

$$\begin{cases} ax + y + z = 3a + 1 \\ x + ay - z = 2 \\ 2x + (2 - a)y = 6 - a \end{cases}$$

- (a) Pour quelle(s) valeur(s) du paramètre $a$, ce système possède-t-il une solution unique ? Recherchez cette solution en utilisant la règle de Cramer. (4 points)
- (b) Pour les autres valeurs de $a$ (i.e. différentes de celles obtenues au point (a) ci-dessus), recherchez l'ensemble des solutions sous forme vectorielle à l'aide de la méthode de Gauss-Jordan. Précisez chaque fois le rang de $A$ et de $(A \mid B)$. (4 points)`,
      hints: [
        String.raw`Écris le système sous forme matricielle $AX = B$ : l'existence d'une solution unique se lit sur $\det A$ (chapitre 3). Développe le déterminant selon la **troisième colonne** — elle contient un zéro, c'est deux cofacteurs au lieu de trois.`,
        String.raw`Contrôle : tu devrais trouver $\det A = -a - a^2 = -a(a + 1)$. La discussion se joue donc en $a = 0$ et $a = -1$.`,
        String.raw`Pour Cramer, chaque déterminant du numérateur doit se factoriser par $a(a + 1)$ — si rien ne se simplifie, recontrôle ton développement. La solution unique obtenue est remarquablement simple (deux composantes ne dépendent même pas de $a$).`,
        String.raw`Pour (b), remplace $a$ par sa valeur numérique AVANT de réduire : deux petits Gauss-Jordan numériques valent mieux qu'un Gauss-Jordan paramétrique. Dans les deux cas tu dois aboutir à une ligne entièrement nulle (rangs égaux à 2 : système simplement indéterminé).`,
      ],
      steps: [
        {
          title: "Forme matricielle du système",
          content: String.raw`On écrit $AX = B$ avec

$$A = \begin{pmatrix} a & 1 & 1 \\ 1 & a & -1 \\ 2 & 2 - a & 0 \end{pmatrix}, \qquad B = \begin{pmatrix} 3a + 1 \\ 2 \\ 6 - a \end{pmatrix}.$$

Stratégie imposée par l'énoncé : la règle de Cramer pour le cas régulier ($\det A \neq 0$), Gauss-Jordan pour les cas dégénérés. La frontière entre les deux est donnée par $\det A$.`,
        },
        {
          title: "(a) Calcul de det A et discussion",
          content: String.raw`On développe selon la **troisième colonne** (elle contient un 0, donc seulement deux cofacteurs) :

$$\det A = +1 \cdot \begin{vmatrix} 1 & a \\ 2 & 2 - a \end{vmatrix} - (-1) \cdot \begin{vmatrix} a & 1 \\ 2 & 2 - a \end{vmatrix} = (2 - a - 2a) + (2a - a^2 - 2) = -a - a^2 = -a(a + 1).$$

📖 **Rappel des signes :** l'élément en position $(1, 3)$ porte le signe $(-1)^{1+3} = +$, celui en $(2, 3)$ le signe $(-1)^{2+3} = -$.

**Discussion :** $\det A \neq 0 \iff a \neq 0$ et $a \neq -1$. Le système possède donc une solution unique pour $a \in \mathbb{R} \setminus \{-1, 0\}$ (c'est le cas $\operatorname{rg} A = \operatorname{rg}(A \mid B) = 3 = n$ du théorème de Rouché-Fontené).`,
        },
        {
          title: "Cramer : la composante x",
          content: String.raw`📖 **Rappel (règle de Cramer) :** $x = \det A_x / \det A$, où $A_x$ est la matrice $A$ dont la colonne des coefficients de $x$ est remplacée par $B$.

Développement selon la troisième colonne :

$$\det A_x = \begin{vmatrix} 3a + 1 & 1 & 1 \\ 2 & a & -1 \\ 6 - a & 2 - a & 0 \end{vmatrix} = +1 \cdot \begin{vmatrix} 2 & a \\ 6 - a & 2 - a \end{vmatrix} + 1 \cdot \begin{vmatrix} 3a + 1 & 1 \\ 6 - a & 2 - a \end{vmatrix}.$$

Premier cofacteur : $2(2 - a) - a(6 - a) = a^2 - 8a + 4$. Second : $(3a + 1)(2 - a) - (6 - a) = (-3a^2 + 5a + 2) - 6 + a = -3a^2 + 6a - 4$. Somme :

$$\det A_x = -2a^2 - 2a = -2a(a + 1), \qquad x = \frac{-2a(a + 1)}{-a(a + 1)} = 2.$$`,
        },
        {
          title: "Cramer : les composantes y et z",
          content: String.raw`De même, en développant selon la troisième colonne pour $y$ :

$$\det A_y = \begin{vmatrix} a & 3a + 1 & 1 \\ 1 & 2 & -1 \\ 2 & 6 - a & 0 \end{vmatrix} = +1 \cdot \begin{vmatrix} 1 & 2 \\ 2 & 6 - a \end{vmatrix} + 1 \cdot \begin{vmatrix} a & 3a + 1 \\ 2 & 6 - a \end{vmatrix} = (2 - a) + (-a^2 - 2) = -a(a + 1),$$

d'où $y = \dfrac{-a(a + 1)}{-a(a + 1)} = 1$. Pour $z$, en développant selon la première colonne :

$$\det A_z = \begin{vmatrix} a & 1 & 3a + 1 \\ 1 & a & 2 \\ 2 & 2 - a & 6 - a \end{vmatrix} = a(-a^2 + 8a - 4) - (3a^2 - 6a + 4) + 2(2 - 3a^2 - a) = -a^3 - a^2 = -a^2(a + 1),$$

d'où $z = \dfrac{-a^2(a + 1)}{-a(a + 1)} = a$.

**Conclusion (a) :** pour $a \in \mathbb{R} \setminus \{-1, 0\}$, la solution unique est $(x, y, z) = (2, 1, a)$.

**Vérification par réinjection** (valable pour tout $a$) : $2a + 1 + a = 3a + 1$ ✓ ; $2 + a - a = 2$ ✓ ; $4 + (2 - a) \cdot 1 = 6 - a$ ✓.`,
        },
        {
          title: "(b) Cas a = 0 : Gauss-Jordan",
          content: String.raw`Pour $a = 0$, la matrice complétée se réduit ainsi :

$$\left(\begin{array}{ccc|c} 0 & 1 & 1 & 1 \\ 1 & 0 & -1 & 2 \\ 2 & 2 & 0 & 6 \end{array}\right) \xrightarrow{L_1 \leftrightarrow L_2} \left(\begin{array}{ccc|c} 1 & 0 & -1 & 2 \\ 0 & 1 & 1 & 1 \\ 2 & 2 & 0 & 6 \end{array}\right) \xrightarrow{L_3 \leftarrow L_3 - 2L_1} \left(\begin{array}{ccc|c} 1 & 0 & -1 & 2 \\ 0 & 1 & 1 & 1 \\ 0 & 2 & 2 & 2 \end{array}\right) \xrightarrow{L_3 \leftarrow L_3 - 2L_2} \left(\begin{array}{ccc|c} 1 & 0 & -1 & 2 \\ 0 & 1 & 1 & 1 \\ 0 & 0 & 0 & 0 \end{array}\right).$$

Deux lignes non nulles, à gauche comme dans la matrice complétée : $\operatorname{rg} A = \operatorname{rg}(A \mid B) = 2 < 3 = n$, le système est **simplement indéterminé** (cohérent avec Rouché-Fontené : une infinité de solutions à $3 - 2 = 1$ paramètre).

On lit $x = 2 + z$ et $y = 1 - z$ avec $z$ libre :

$$S = \left\{ \begin{pmatrix} x \\ y \\ z \end{pmatrix} = \begin{pmatrix} 2 \\ 1 \\ 0 \end{pmatrix} + z \begin{pmatrix} 1 \\ -1 \\ 1 \end{pmatrix}, \; z \in \mathbb{R} \right\}.$$`,
        },
        {
          title: "(b) Cas a = −1 : Gauss-Jordan",
          content: String.raw`Pour $a = -1$, le système devient $-x + y + z = -2$, $x - y - z = 2$, $2x + 3y = 7$ — les deux premières équations sont opposées !

$$\left(\begin{array}{ccc|c} -1 & 1 & 1 & -2 \\ 1 & -1 & -1 & 2 \\ 2 & 3 & 0 & 7 \end{array}\right) \xrightarrow{L_2 \leftarrow L_2 + L_1} \left(\begin{array}{ccc|c} -1 & 1 & 1 & -2 \\ 0 & 0 & 0 & 0 \\ 2 & 3 & 0 & 7 \end{array}\right) \xrightarrow[L_2 \leftrightarrow L_3]{L_1 \leftarrow -L_1} \left(\begin{array}{ccc|c} 1 & -1 & -1 & 2 \\ 2 & 3 & 0 & 7 \\ 0 & 0 & 0 & 0 \end{array}\right).$$

On achève la réduction :

$$\xrightarrow{L_2 \leftarrow L_2 - 2L_1} \left(\begin{array}{ccc|c} 1 & -1 & -1 & 2 \\ 0 & 5 & 2 & 3 \\ 0 & 0 & 0 & 0 \end{array}\right) \xrightarrow{L_2 \leftarrow L_2 / 5} \left(\begin{array}{ccc|c} 1 & -1 & -1 & 2 \\ 0 & 1 & 2/5 & 3/5 \\ 0 & 0 & 0 & 0 \end{array}\right) \xrightarrow{L_1 \leftarrow L_1 + L_2} \left(\begin{array}{ccc|c} 1 & 0 & -3/5 & 13/5 \\ 0 & 1 & 2/5 & 3/5 \\ 0 & 0 & 0 & 0 \end{array}\right).$$

À nouveau $\operatorname{rg} A = \operatorname{rg}(A \mid B) = 2 < 3$ : système **simplement indéterminé**. On lit $x = \frac{13}{5} + \frac{3}{5} z$ et $y = \frac{3}{5} - \frac{2}{5} z$ :

$$S = \left\{ \begin{pmatrix} x \\ y \\ z \end{pmatrix} = \begin{pmatrix} 13/5 \\ 3/5 \\ 0 \end{pmatrix} + z \begin{pmatrix} 3/5 \\ -2/5 \\ 1 \end{pmatrix}, \; z \in \mathbb{R} \right\}.$$`,
        },
        {
          title: "Vérifications finales",
          content: String.raw`**Cas $a = 0$ :** la solution particulière $(2, 1, 0)$ vérifie $y + z = 1$ ✓, $x - z = 2$ ✓, $2x + 2y = 6$ ✓ ; le vecteur directeur $(1, -1, 1)$ annule les trois premiers membres : $-1 + 1 = 0$, $1 - 1 = 0$, $2 - 2 = 0$ ✓ (c'est un vecteur du noyau de $A$).

**Cas $a = -1$ :** $(13/5, \; 3/5, \; 0)$ donne $-\frac{13}{5} + \frac{3}{5} = -2$ ✓, $\frac{13}{5} - \frac{3}{5} = 2$ ✓, $\frac{26}{5} + \frac{9}{5} = 7$ ✓ ; et le vecteur directeur $(3/5, \; -2/5, \; 1)$ : $-\frac{3}{5} - \frac{2}{5} + 1 = 0$ ✓, $\frac{3}{5} + \frac{2}{5} - 1 = 0$ ✓, $\frac{6}{5} - \frac{6}{5} = 0$ ✓.

Cohérence globale : quand $a \to 0$, la solution unique $(2, 1, a)$ du cas régulier tend vers $(2, 1, 0)$, qui est exactement la solution particulière trouvée pour $a = 0$ — tout se recolle.`,
        },
      ],
      answer: String.raw`(a) $\det A = -a(a + 1)$ : solution unique $\iff a \in \mathbb{R} \setminus \{-1, 0\}$, et par Cramer $(x, y, z) = (2, 1, a)$. (b) Pour $a = 0$ : $\operatorname{rg} A = \operatorname{rg}(A \mid B) = 2 < 3$, système simplement indéterminé, $S = \{(2, 1, 0)^T + z(1, -1, 1)^T, \; z \in \mathbb{R}\}$. Pour $a = -1$ : $\operatorname{rg} A = \operatorname{rg}(A \mid B) = 2 < 3$, système simplement indéterminé, $S = \{(13/5, \; 3/5, \; 0)^T + z(3/5, \; -2/5, \; 1)^T, \; z \in \mathbb{R}\}$.`,
      examTips: [
        String.raw`8 points, la plus grosse question du sujet : compte 30–35 minutes. Répartis : déterminant + discussion (8 min), les trois déterminants de Cramer (12 min), les deux Gauss-Jordan (12 min).`,
        String.raw`L'énoncé impose les méthodes : Cramer en (a), Gauss-Jordan en (b). Résoudre (a) par Gauss-Jordan ne rapportera pas les points de méthode — et n'oublie pas de donner explicitement les **rangs** demandés en (b).`,
        String.raw`Les factorisations sont ton fil d'Ariane : chaque numérateur de Cramer doit contenir le facteur $a(a + 1)$. Un numérateur qui ne se factorise pas = une erreur de calcul quasi certaine.`,
        String.raw`Réflexe payant : réinjecte $(2, 1, a)$ dans les trois équations de départ (10 secondes par équation). C'est une vérification que tu peux écrire sur la copie — le correcteur y voit la maîtrise, et toi tu dors tranquille.`,
      ],
      exerciseRefs: ["2.2", "3.4", "3.7"],
    },
    {
      id: "q7",
      number: 7,
      title: "Chaîne de Markov : la neige à Namur",
      points: 5,
      chapters: [6],
      kind: "exercice",
      statement: String.raw`En ce mois de janvier fort enneigé, le service météorologie namurois estime qu'un jour de neige est suivi d'un autre jour de neige avec probabilité 0.3. Pour un jour sans neige, la probabilité de rester sans neige est de 0.8. Ce lundi, il n'a pas neigé.

- (a) Donnez la matrice de transition $A$ correspondant aux probabilités données ci-dessus. Calculez la probabilité qu'il n'y ait pas de neige mercredi.
- (b) Déterminez les probabilités à long terme d'avoir un jour sans neige.`,
      hints: [
        String.raw`Chaîne de Markov à deux états (chapitre 6) : « neige » et « pas de neige ». Dans la convention du cours, chaque **colonne** correspond à l'état actuel, doit sommer à 1, et l'évolution s'écrit $X_{t+1} = A X_t$.`,
        String.raw`Complète les colonnes par différence à 1 : depuis « neige », demain il neige avec 0.3 donc pas de neige avec 0.7 ; depuis « pas de neige », 0.8 et 0.2. Le point de départ est $X_0 = (0, 1)^T$ (lundi : pas de neige, avec certitude).`,
        String.raw`Mercredi, c'est deux jours après lundi : calcule $A^2 X_0$, ou plus simplement $A(A X_0)$. Contrôle intermédiaire : mardi, $A X_0 = (0.2, \; 0.8)^T$.`,
        String.raw`Long terme : cherche un vecteur propre associé à la valeur propre 1 (elle existe toujours pour une matrice de Markov — question 2 !) et normalise-le pour que ses composantes somment à 1.`,
      ],
      steps: [
        {
          title: "(a) Poser la matrice de transition",
          content: String.raw`On ordonne les états : état 1 = « neige », état 2 = « pas de neige ». Dans la convention du cours, l'élément $a_{ij}$ est la probabilité de passer à l'état $i$ demain sachant qu'on est à l'état $j$ aujourd'hui : chaque **colonne** décrit un état de départ.

- Colonne 1 (aujourd'hui : neige) : neige demain avec $0.3$, donc pas de neige avec $1 - 0.3 = 0.7$ ;
- Colonne 2 (aujourd'hui : pas de neige) : pas de neige demain avec $0.8$, donc neige avec $1 - 0.8 = 0.2$.

$$A = \begin{pmatrix} 0.3 & 0.2 \\ 0.7 & 0.8 \end{pmatrix}.$$

**Vérification :** chaque colonne somme à 1 ($0.3 + 0.7 = 1$ et $0.2 + 0.8 = 1$) et tous les éléments sont non négatifs : $A$ est bien une matrice de Markov.

⚠️ **Incohérence du document officiel (PDF) :** l'énoncé imprimé donne la probabilité $0.3$, mais le corrigé du même PDF utilise $A = \begin{pmatrix} 0.4 & 0.2 \\ 0.6 & 0.8 \end{pmatrix}$ (soit $0.4$), d'où ses résultats $0.76$ (mercredi) et $3/4$ (long terme) — sa rédaction intervertit d'ailleurs les étiquettes « neige »/« pas de neige » ($X = (0, 1)^T$ y est appelé « jour de neige »). Nous résolvons ici l'énoncé **tel qu'il est imprimé** (avec $0.3$) : mêmes méthodes, valeurs numériques légèrement différentes ($0.78$ et $7/9$). Avec $0.4$ à la place de $0.3$, le même calcul redonne exactement les valeurs du PDF.`,
        },
        {
          title: "Du lundi au mardi",
          content: String.raw`Lundi, il n'a pas neigé : l'état est connu avec certitude, donc

$$X_0 = \begin{pmatrix} 0 \\ 1 \end{pmatrix} \quad \text{(première composante : neige, seconde : pas de neige).}$$

📖 **Rappel :** l'évolution d'une chaîne de Markov s'écrit $X_{t+1} = A X_t$. L'état probabiliste de mardi est donc

$$X_1 = A X_0 = \begin{pmatrix} 0.3 & 0.2 \\ 0.7 & 0.8 \end{pmatrix} \begin{pmatrix} 0 \\ 1 \end{pmatrix} = \begin{pmatrix} 0.2 \\ 0.8 \end{pmatrix}.$$

Logique : partant d'un jour sans neige, on lit simplement la deuxième colonne de $A$.`,
        },
        {
          title: "Mercredi : appliquer A une seconde fois",
          content: String.raw`Mercredi est à deux jours de lundi : $X_2 = A X_1 = A^2 X_0$.

$$X_2 = \begin{pmatrix} 0.3 & 0.2 \\ 0.7 & 0.8 \end{pmatrix} \begin{pmatrix} 0.2 \\ 0.8 \end{pmatrix} = \begin{pmatrix} 0.3 \cdot 0.2 + 0.2 \cdot 0.8 \\ 0.7 \cdot 0.2 + 0.8 \cdot 0.8 \end{pmatrix} = \begin{pmatrix} 0.06 + 0.16 \\ 0.14 + 0.64 \end{pmatrix} = \begin{pmatrix} 0.22 \\ 0.78 \end{pmatrix}.$$

**Vérification :** les composantes somment à $0.22 + 0.78 = 1$ ✓ (un vecteur de probabilités doit toujours sommer à 1 — contrôle express après chaque produit).

**Conclusion (a) :** la probabilité qu'il n'y ait pas de neige mercredi (seconde composante) est $0.78$.`,
        },
        {
          title: "(b) Les valeurs propres de A",
          content: String.raw`Le comportement à long terme est porté par la valeur propre 1 (elle existe pour toute matrice de Markov — c'est le théorème de la question 2). Calculons les valeurs propres :

$$\det(A - \lambda I) = \begin{vmatrix} 0.3 - \lambda & 0.2 \\ 0.7 & 0.8 - \lambda \end{vmatrix} = (0.3 - \lambda)(0.8 - \lambda) - 0.2 \cdot 0.7 = \lambda^2 - 1.1 \lambda + 0.1 = (\lambda - 1)(\lambda - 0.1).$$

Les valeurs propres sont $\lambda = 1$ et $\lambda = 0.1$. **Vérifications :** somme $1.1 = \operatorname{trace}(A)$ ✓ ; produit $0.1 = \det A = 0.24 - 0.14$ ✓ ; la valeur propre 1 est bien au rendez-vous ✓.`,
        },
        {
          title: "Le vecteur d'équilibre",
          content: String.raw`On cherche un vecteur propre pour $\lambda = 1$ : $(A - I)v = O$, soit

$$\begin{pmatrix} -0.7 & 0.2 \\ 0.7 & -0.2 \end{pmatrix} \begin{pmatrix} v_1 \\ v_2 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix} \iff -0.7 \, v_1 + 0.2 \, v_2 = 0 \iff v_2 = \tfrac{7}{2} v_1.$$

On peut prendre $v = (2, 7)^T$. Pour en faire un vecteur de probabilités, on le normalise pour que la somme de ses composantes vaille 1 :

$$X_\infty = \frac{1}{2 + 7} \begin{pmatrix} 2 \\ 7 \end{pmatrix} = \begin{pmatrix} 2/9 \\ 7/9 \end{pmatrix}.$$

**Conclusion (b) :** à long terme, la probabilité d'un jour **sans neige** est $\dfrac{7}{9} \approx 0.78$ (et celle d'un jour de neige $\frac{2}{9} \approx 0.22$).`,
        },
        {
          title: "Vérifications et interprétation",
          content: String.raw`**Équilibre :** $A X_\infty = \begin{pmatrix} 0.3 \cdot \frac{2}{9} + 0.2 \cdot \frac{7}{9} \\ 0.7 \cdot \frac{2}{9} + 0.8 \cdot \frac{7}{9} \end{pmatrix} = \begin{pmatrix} 2/9 \\ 7/9 \end{pmatrix}$ ✓ : le vecteur est bien invariant ($AX = X$).

**Pourquoi la convergence a lieu :** la seconde valeur propre vérifie $|0.1| < 1$, donc la composante de l'état initial sur son vecteur propre s'éteint géométriquement — quel que soit le jour de départ, $X_t \to X_\infty$.

**Cohérence :** dès mercredi, $X_2 = (0.22, \; 0.78)^T$ est déjà tout proche de l'équilibre $(2/9, \; 7/9)^T \approx (0.22, \; 0.78)^T$ — avec un facteur d'amortissement de $0.1$ par jour, la convergence est fulgurante.`,
        },
      ],
      answer: String.raw`(a) $A = \begin{pmatrix} 0.3 & 0.2 \\ 0.7 & 0.8 \end{pmatrix}$ (états : neige, pas de neige ; colonnes = état actuel). Avec $X_0 = (0, 1)^T$ : $X_2 = A^2 X_0 = (0.22, \; 0.78)^T$, donc probabilité $0.78$ de ne pas avoir de neige mercredi. (b) Valeurs propres $1$ et $0.1$ ; vecteur propre d'équilibre $(2, 7)^T$, normalisé en $(2/9, \; 7/9)^T$ : à long terme, un jour est sans neige avec probabilité $7/9 \approx 0.78$.`,
      examTips: [
        String.raw`Le piège classique : mettre les probabilités en lignes au lieu de colonnes. Contrôle imparable : dans la convention du cours ($X_{t+1} = A X_t$), ce sont les **colonnes** qui somment à 1. Écris ce contrôle sur ta copie, il montre que ta matrice est cohérente.`,
        String.raw`Lis bien le calendrier : lundi $\to$ mercredi = **deux** applications de $A$, pas trois. Pose $X_0$, $X_1$, $X_2$ explicitement pour éviter le décalage d'un jour.`,
        String.raw`Après chaque produit matrice-vecteur, vérifie que les composantes somment à 1 : cette vérification de 5 secondes détecte presque toutes les fautes de calcul.`,
        String.raw`Pour le long terme, n'inverse pas les composantes au moment de conclure : identifie clairement quelle composante est « sans neige » (ici la seconde). Une réponse juste mais mal étiquetée perd des points.`,
      ],
      exerciseRefs: ["6.8", "6.7"],
    },
    {
      id: "q8",
      number: 8,
      title: "Intégrale double sur un trapèze",
      points: 4,
      chapters: [8],
      kind: "exercice",
      statement: String.raw`Soit $R$ la région du plan délimitée par les 4 droites $x = 1$, $x = 2$, $y = 1$ et $y = x + 1$. Pour l'intégrale suivante :

$$\iint_R \frac{2(y + 1)}{x + 4} \, dA$$

- (a) Représentez graphiquement le domaine d'intégration.
- (b) Calculez l'intégrale.`,
      hints: [
        String.raw`Trace d'abord les quatre droites : deux verticales ($x = 1$, $x = 2$), une horizontale ($y = 1$) et une oblique ($y = x + 1$). Le domaine est le quadrilatère coincé entre elles — détermine ses quatre sommets (intersections deux à deux).`,
        String.raw`Décris $R$ en « tranches verticales » : pour $x$ fixé entre 1 et 2, $y$ court de la droite du bas ($y = 1$) à la droite du haut ($y = x + 1$). Cela impose d'intégrer d'abord en $y$, ensuite en $x$ — et le facteur $\frac{2}{x + 4}$ sort de l'intégrale intérieure.`,
        String.raw`Contrôle après l'intégrale intérieure : tu devrais arriver à $\int_1^2 \frac{x^2 + 4x}{x + 4} \, dx$. Si c'est le cas, factorise le numérateur : la fraction se simplifie miraculeusement.`,
      ],
      steps: [
        {
          title: "(a) Identifier le domaine",
          content: String.raw`Cherchons les sommets du quadrilatère (intersections des droites deux à deux) :

- $x = 1$ et $y = 1$ : sommet $(1, 1)$ ;
- $x = 2$ et $y = 1$ : sommet $(2, 1)$ ;
- $x = 2$ et $y = x + 1$ : sommet $(2, 3)$ ;
- $x = 1$ et $y = x + 1$ : sommet $(1, 2)$.

Sur ta feuille : trace les deux verticales $x = 1$ et $x = 2$, l'horizontale $y = 1$, puis la droite $y = x + 1$ (elle passe par $(1, 2)$ et $(2, 3)$, et reste au-dessus de $y = 1$ sur tout l'intervalle). Le domaine $R$ est le **trapèze** de sommets $(1, 1)$, $(2, 1)$, $(2, 3)$, $(1, 2)$ : côtés verticaux de longueurs 1 (en $x = 1$) et 2 (en $x = 2$), bord inférieur horizontal, bord supérieur oblique.

En tranches verticales :

$$R = \{(x, y) \in \mathbb{R}^2 \; : \; 1 \leq x \leq 2, \; 1 \leq y \leq x + 1\}.$$`,
        },
        {
          title: "(b) Poser l'intégrale itérée",
          content: String.raw`Les bornes en $y$ dépendent de $x$ (et pas l'inverse) : on intègre donc **d'abord en $y$, puis en $x$** :

$$\iint_R \frac{2(y + 1)}{x + 4} \, dA = \int_1^2 \left( \int_1^{x+1} \frac{2(y + 1)}{x + 4} \, dy \right) dx = \int_1^2 \frac{2}{x + 4} \left( \int_1^{x+1} (y + 1) \, dy \right) dx.$$

📖 **Rappel :** dans l'intégrale intérieure, $x$ est une constante — tout facteur qui ne dépend que de $x$ (ici $\frac{2}{x + 4}$) sort de l'intégrale en $y$. C'est ce qui rend le calcul confortable.`,
        },
        {
          title: "L'intégrale intérieure (en y)",
          content: String.raw`$$\int_1^{x+1} (y + 1) \, dy = \left[ \frac{y^2}{2} + y \right]_1^{x+1} = \left( \frac{(x + 1)^2}{2} + x + 1 \right) - \left( \frac{1}{2} + 1 \right) = \frac{x^2 + 2x + 1 + 2x + 2 - 3}{2} = \frac{x^2 + 4x}{2}.$$

En multipliant par le facteur $\frac{2}{x + 4}$ :

$$\iint_R \frac{2(y + 1)}{x + 4} \, dA = \int_1^2 \frac{2}{x + 4} \cdot \frac{x^2 + 4x}{2} \, dx = \int_1^2 \frac{x^2 + 4x}{x + 4} \, dx.$$`,
        },
        {
          title: "La simplification miracle",
          content: String.raw`Le numérateur se factorise : $x^2 + 4x = x(x + 4)$. Donc

$$\frac{x^2 + 4x}{x + 4} = \frac{x(x + 4)}{x + 4} = x \qquad (x + 4 \neq 0 \text{ sur } [1, 2]).$$

C'est le signal que le sujet était bien conçu : le facteur $\frac{2}{x + 4}$ de l'intégrand était taillé pour se simplifier avec le résultat de l'intégrale intérieure. Si tu n'obtiens pas cette simplification, recontrôle l'intégrale en $y$ (erreur typique : oublier d'évaluer la borne inférieure $y = 1$).`,
        },
        {
          title: "L'intégrale extérieure et la conclusion",
          content: String.raw`$$\int_1^2 x \, dx = \left[ \frac{x^2}{2} \right]_1^2 = 2 - \frac{1}{2} = \frac{3}{2}.$$

**Vérification de plausibilité :** sur $R$, on a $y + 1 \geq 2 > 0$ et $x + 4 > 0$ : l'intégrand est strictement positif, le résultat devait être positif ✓. Ordre de grandeur : l'aire du trapèze vaut $\int_1^2 (x + 1 - 1) \, dx = \frac{3}{2}$, et l'intégrand vaut environ 1 au centre du domaine (par exemple $\frac{2 \cdot 3}{5.5} \approx 1.1$ au point $(1.5, \; 2)$) : un résultat proche de $\frac{3}{2}$ est tout à fait cohérent ✓.

$$\iint_R \frac{2(y + 1)}{x + 4} \, dA = \frac{3}{2}.$$`,
        },
      ],
      figure: {
        window: { xMin: -0.5, xMax: 2.8, yMin: -0.5, yMax: 3.4 },
        regions: [{ xFrom: 1, xTo: 2, yLow: "1", yHigh: "x+1" }],
        curves: [{ fn: "x+1", domain: [-0.4, 2.3], label: "y = x + 1", labelAt: [1.25, 2.9] }],
        segments: [
          { from: [1, 1], to: [1, 2], label: "x = 1", labelAt: [0.55, 1.62], dashed: true },
          { from: [2, 1], to: [2, 3], label: "x = 2", labelAt: [2.06, 1.6], dashed: true },
          { from: [-0.3, 1], to: [2.6, 1], label: "y = 1", labelAt: [0.12, 0.72], dashed: true },
        ],
        points: [
          { at: [1, 1], label: "(1, 1)", offset: [-46, 18] },
          { at: [2, 1], label: "(2, 1)", offset: [8, 18] },
          { at: [1, 2], label: "(1, 2)", offset: [-46, -8] },
          { at: [2, 3], label: "(2, 3)", offset: [8, -6] },
        ],
        caption:
          "Le domaine (en violet) est le trapèze entre les verticales x = 1 et x = 2, le plancher y = 1 et la droite oblique y = x + 1 : pour chaque x entre 1 et 2, y va de 1 à x + 1 — ce sont les bornes utilisées dans le calcul.",
      },
      answer: String.raw`(a) $R$ est le trapèze $\{1 \leq x \leq 2, \; 1 \leq y \leq x + 1\}$, de sommets $(1, 1)$, $(2, 1)$, $(2, 3)$ et $(1, 2)$. (b) En intégrant d'abord en $y$ : l'intégrale intérieure donne $\frac{x^2 + 4x}{2}$, la fraction se simplifie en $x$, et $\int_1^2 x \, dx = \frac{3}{2}$. L'intégrale vaut $\frac{3}{2}$.`,
      examTips: [
        String.raw`La représentation graphique est notée : place les 4 sommets avec leurs coordonnées et hachure le domaine. Un dessin propre justifie aussi tes bornes d'intégration — double dividende.`,
        String.raw`Choisis l'ordre d'intégration en regardant quelles bornes dépendent de quelle variable : ici $y$ va de 1 à $x + 1$, donc $y$ d'abord. L'ordre inverse exigerait de découper $R$ en deux morceaux — piège à temps.`,
        String.raw`Quand une intégrale d'examen semble mener à une fraction rationnelle compliquée, cherche une factorisation avant de te lancer dans de longues divisions : les sujets sont presque toujours construits pour se simplifier.`,
        String.raw`Question courte (4 points) en fin de sujet : garde-lui 15 minutes. Si le temps manque, écris au minimum le domaine et l'intégrale itérée avec les bonnes bornes — c'est déjà une bonne partie des points.`,
      ],
      exerciseRefs: ["8.4", "8.5", "8.6"],
    },
  ],
};
