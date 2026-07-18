import type { Exam } from "./types";

export const exam: Exam = {
  id: "janvier-2025",
  title: "Examen de janvier 2025",
  subtitle: "Sujet partiel (questions 3 à 8)",
  official: false,
  pdf: "/pdf/examens/janvier-2025-partiel.pdf",
  durationMin: 180,
  totalPoints: 34,
  note: "Le document ne contient que les questions 3 à 8 (les questions 1 et 2, des restitutions de théorie, n'y figurent pas) et inclut les réponses manuscrites d'un étudiant.",
  questions: [
    {
      id: "q3",
      number: 3,
      title: "Vrai ou faux : matrices, systèmes, transformations linéaires",
      points: 6,
      chapters: [1, 2, 4, 6, 7],
      kind: "vraifaux",
      statement: String.raw`Les affirmations suivantes, sont-elles vraies ou fausses ?

**Attention :** vous obtenez $+\frac{1}{2}$ point par bonne réponse et $-\frac{1}{4}$ point par mauvaise réponse. Ne cochez donc pas au hasard ! Si la somme de tous les points obtenus est négative, vous auriez 0 point pour cette question.

**1.** Soient $A$ et $B$ deux matrices de dimension $(n \times n)$.

- Si $(A^T)^T = A$, alors $A$ est symétrique
- $(AB)^2 = A^2B^2$
- Si $X$ est dans le noyau de $A$, alors $X$ est dans le noyau de $AB$
- $\text{dtm}(-A) = \text{dtm}(A)$ si $n$ est pair

**2.** Soit $AX = B$ un système de $p$ équations linéaires à $n$ inconnues.

- Si $p < n$, alors le système possède une infinité de solutions
- Si $B = O$, alors $X = O$
- $\text{rang}(A) \geq \min(p, n)$
- Si $B$ n'est pas combinaison linéaire des colonnes de $A$, alors $AX = B$ n'a aucune solution

**3.** Soit $A$ une matrice de dimension $(n \times n)$ et soit $f$ la transformation linéaire telle que $f(X) = AX$ pour $X \in \mathbb{R}^n$.

- La matrice $A$ est inversible si et seulement si noyau$(f) = \{O\}$
- Si $\lambda$ est une valeur propre de $A$, alors $\lambda \neq 0$
- Il existe une infinité de matrices pour représenter la transformation linéaire $f$
- Il existe une base orthonormée dans laquelle la forme quadratique $Q$ associée à $A$ est diagonale`,
      hints: [
        String.raw`Pour une affirmation **générale** (« pour toutes matrices… »), un seul contre-exemple suffit pour conclure « faux » — et les contre-exemples $2 \times 2$ avec beaucoup de zéros sont tes meilleurs amis. Pour conclure « vrai », il te faut un argument valable dans tous les cas (une propriété du cours).`,
        String.raw`Groupe 1 : demande-toi pour quelles matrices $(A^T)^T = A$ est vérifié, et rappelle-toi que le produit matriciel n'est pas commutatif. Pour le déterminant : que vaut $\det(kA)$ en fonction de $\det A$ ?`,
        String.raw`Groupe 2 : pense au théorème de Rouché-Fontené et au fait que $AX$ est exactement une combinaison linéaire des colonnes de $A$ (avec les $x_i$ comme coefficients). Un système avec moins d'équations que d'inconnues peut-il être impossible ?`,
        String.raw`Groupe 3 : $0$ peut-il être valeur propre d'une matrice non inversible ? Et pour la forme quadratique, repense au théorème spectral : quelle matrice symétrique représente $Q(X) = X^TAX$ même quand $A$ ne l'est pas ?`,
      ],
      steps: [
        {
          title: "Stratégie : contre-exemple ou théorème",
          content: String.raw`Avant de trancher, fixe-toi une discipline : chaque affirmation est **universelle** (elle prétend être vraie pour toutes les matrices ou tous les systèmes concernés).

- Pour répondre « faux », il suffit d'exhiber **un** contre-exemple concret.
- Pour répondre « vrai », il faut invoquer une propriété démontrée au cours — jamais un exemple.

📖 **Rappel.** Les contre-exemples les plus efficaces en dimension $2$ sont les matrices nilpotentes comme $N = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}$ et les matrices diagonales « à trou » comme $\begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix}$ : elles cassent la commutativité, l'inversibilité et la symétrie d'un seul coup.

Le barème ($+\frac{1}{2}$ / $-\frac{1}{4}$) récompense la prudence : ne coche que ce que tu peux justifier.`,
        },
        {
          title: "Groupe 1 : les quatre affirmations sur A et B",
          content: String.raw`**« Si $(A^T)^T = A$, alors $A$ est symétrique » : FAUX.**

Le piège : $(A^T)^T = A$ est vrai pour **toute** matrice (transposer deux fois redonne la matrice de départ). L'hypothèse ne sélectionne donc rien du tout, et l'affirmation reviendrait à dire que toute matrice carrée est symétrique. Contre-exemple :

$$A = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}, \qquad (A^T)^T = A \quad \text{mais} \quad A^T = \begin{pmatrix} 0 & 0 \\ 1 & 0 \end{pmatrix} \neq A.$$

(Être symétrique, c'est $A^T = A$, avec une seule transposition.)

**« $(AB)^2 = A^2B^2$ » : FAUX.**

$(AB)^2 = ABAB$ : pour le transformer en $AABB$, il faudrait permuter le $B$ central avec le $A$ central, ce qui exige $AB = BA$ — or le produit matriciel n'est **pas** commutatif. Contre-exemple :

$$A = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}, \quad B = \begin{pmatrix} 0 & 0 \\ 1 & 0 \end{pmatrix} : \quad AB = \begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix}, \quad (AB)^2 = \begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix},$$

alors que $A^2 = O$ donne $A^2B^2 = O \neq (AB)^2$.

**« Si $X$ est dans le noyau de $A$, alors $X$ est dans le noyau de $AB$ » : FAUX (telle qu'imprimée).**

$(AB)X = A(BX)$ : c'est $B$ qui agit **en premier** sur $X$. Savoir que $AX = O$ ne sert à rien, car $BX$ n'a aucune raison de rester dans le noyau de $A$. Contre-exemple :

$$A = \begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix}, \quad B = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}, \quad X = (0, 1)^T :$$

$AX = O$ (donc $X$ est bien dans le noyau de $A$), mais $BX = (1, 0)^T$ et $(AB)X = A(BX) = (1, 0)^T \neq O$.

📖 **Remarque importante.** Avec « noyau de $B$ » à la place de « noyau de $A$ », l'affirmation devient **vraie** : si $BX = O$, alors $(AB)X = A(BX) = A \cdot O = O$. De même, $X \in \text{noyau}(A)$ entraîne $X \in \text{noyau}(BA)$. Retiens la règle : le noyau de la matrice qui agit **en premier** (celle de droite) est toujours contenu dans le noyau du produit.

**« $\text{dtm}(-A) = \text{dtm}(A)$ si $n$ est pair » : VRAI.**

📖 **Rappel.** Multiplier **une** ligne par $k$ multiplie le déterminant par $k$. Comme $-A$ s'obtient en multipliant chacune des $n$ lignes par $-1$ :

$$\det(-A) = (-1)^n \det A.$$

Si $n$ est pair, $(-1)^n = 1$ et donc $\det(-A) = \det A$.`,
        },
        {
          title: "Groupe 2 : les quatre affirmations sur AX = B",
          content: String.raw`**« Si $p < n$, alors le système possède une infinité de solutions » : FAUX.**

Un système avec moins d'équations que d'inconnues peut très bien être **impossible**. Contre-exemple ($p = 2 < n = 3$) :

$$\begin{cases} x + y + z = 0 \\ x + y + z = 1 \end{cases}$$

n'a aucune solution. 📖 La bonne version du théorème (démo 2.1 du référentiel) : **si** le système est compatible et $\text{rang}(A) < n$, alors il y a une infinité de solutions. L'hypothèse $p < n$ garantit $\text{rang}(A) \leq p < n$, mais pas la compatibilité.

**« Si $B = O$, alors $X = O$ » : FAUX.**

Un système homogène admet toujours la solution triviale $X = O$, mais ce n'est pas forcément la **seule** : dès que $\text{rang}(A) < n$, il y a une infinité de solutions non triviales. Contre-exemple : le système d'une équation $x + y = 0$ (à deux inconnues) admet $X = (1, -1)^T \neq O$.

**« $\text{rang}(A) \geq \min(p, n)$ » : FAUX.**

C'est l'inégalité **inverse** qui est toujours vraie : le rang est au plus égal au nombre de lignes et au nombre de colonnes, donc

$$\text{rang}(A) \leq \min(p, n).$$

Contre-exemple pour l'affirmation : la matrice nulle $(p \times n)$ a un rang $0 < \min(p, n)$ dès que $p, n \geq 1$. (Une matrice non nulle suffit aussi : $\begin{pmatrix} 1 & 1 \\ 1 & 1 \end{pmatrix}$ a un rang $1 < 2$.)

**« Si $B$ n'est pas combinaison linéaire des colonnes de $A$, alors $AX = B$ n'a aucune solution » : VRAI.**

📖 **Rappel clé** (au cœur de la preuve de la règle de Cramer, démo 3.2) : si $C_1, \dots, C_n$ sont les colonnes de $A$, alors

$$AX = x_1 C_1 + x_2 C_2 + \dots + x_n C_n.$$

Une solution $X$ exprimerait donc $B$ **exactement** comme combinaison linéaire des colonnes de $A$. Si une telle combinaison n'existe pas, il ne peut pas y avoir de solution. (C'est aussi le théorème de Rouché-Fontené : $B$ hors du sous-vectoriel engendré par les colonnes signifie $\text{rang}(A \mid B) = \text{rang}(A) + 1$, donc système impossible.)`,
        },
        {
          title: "Groupe 3 : les quatre affirmations sur f(X) = AX",
          content: String.raw`**« $A$ est inversible si et seulement si noyau$(f) = \{O\}$ » : VRAI.**

Pour une matrice **carrée**, toutes ces conditions sont équivalentes :

$$A \text{ inversible} \iff \det A \neq 0 \iff AX = O \text{ n'a que } X = O \iff \text{noyau}(f) = \{O\}.$$

En effet, si $\det A \neq 0$, le système homogène $AX = O$ a une solution unique (Cramer), qui est $O$. Réciproquement, si le noyau est réduit à $\{O\}$, le rang de $A$ vaut $n$ (théorème des dimensions : $\dim \text{noyau} + \dim \text{image} = n$), donc $\det A \neq 0$.

**« Si $\lambda$ est une valeur propre de $A$, alors $\lambda \neq 0$ » : FAUX.**

$0$ est valeur propre de $A$ exactement quand $\det(A - 0 \cdot I) = \det A = 0$, c'est-à-dire quand $A$ n'est pas inversible — ce qui arrive pour beaucoup de matrices. Contre-exemple : $A = \begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix}$ admet $\lambda = 0$ comme valeur propre, avec le vecteur propre $(0, 1)^T$.

**« Il existe une infinité de matrices pour représenter la transformation linéaire $f$ » : VRAI.**

📖 **Rappel.** La matrice qui représente $f$ dépend de la **base** dans laquelle on exprime les vecteurs. $A$ est la représentation de $f$ dans la base canonique ; dans une autre base, de matrice de passage $P$, la représentation devient $P^{-1}AP$. Comme il existe une infinité de bases de $\mathbb{R}^n$ (et qu'on peut même choisir des bases différentes au départ et à l'arrivée), $f$ admet une infinité de représentations matricielles. Une transformation linéaire n'est donc pas « une » matrice : c'est un objet géométrique qui a une matrice **par choix de base**.

**« Il existe une base orthonormée dans laquelle la forme quadratique $Q$ associée à $A$ est diagonale » : VRAI.**

Attention au piège : $A$ n'est pas supposée symétrique, mais ce n'est pas un obstacle.

📖 **Rappel** (démo 7.1 du référentiel) : la forme quadratique $Q(X) = X^TAX$ est **toujours** représentée par la matrice symétrique

$$A_s = \frac{A + A^T}{2}, \qquad Q(X) = X^T A_s X.$$

Le théorème spectral s'applique alors à $A_s$ : elle est diagonalisable par une matrice orthogonale, c'est-à-dire qu'il existe une base **orthonormée** de vecteurs propres de $A_s$. Dans cette base, $Q$ s'écrit sous forme diagonale $\lambda_1 y_1^2 + \dots + \lambda_n y_n^2$. L'affirmation est donc vraie pour toute matrice $A$.`,
        },
      ],
      answer: String.raw`**Groupe 1 :** Faux — Faux — Faux — Vrai.

**Groupe 2 :** Faux — Faux — Faux — Vrai.

**Groupe 3 :** Vrai — Faux — Vrai — Vrai.

Remarque : à la troisième affirmation du groupe 1, telle qu'imprimée (« noyau de $A$ »), la réponse est faux ; avec la variante « si $X$ est dans le noyau de $B$ », elle deviendrait vraie car $(AB)X = A(BX) = A \cdot O = O$.`,
      examTips: [
        String.raw`Avec $+\frac{1}{2}$ par bonne réponse et $-\frac{1}{4}$ par erreur, ne coche une case que si tu as un argument (théorème ou contre-exemple) en tête : sur une affirmation où tu hésites vraiment, t'abstenir vaut mieux que parier.`,
        String.raw`Réflexe chronométrable : pour chaque affirmation universelle, cherche 30 secondes un contre-exemple $2 \times 2$ parmi tes matrices fétiches (nilpotente, diagonale avec un zéro, matrice d'échange). Si aucun ne casse l'affirmation, cherche alors le théorème du cours qui la garantit.`,
        String.raw`Méfie-toi des affirmations dont l'hypothèse est toujours vraie — comme « si $(A^T)^T = A$ » : elles reviennent à affirmer la conclusion pour toutes les matrices, ce qui est presque toujours faux.`,
        String.raw`Les questions 1 et 2 de l'examen portent sur la théorie : réviser les 15 démonstrations du référentiel te fait d'une pierre deux coups, car ces vrai/faux recyclent exactement les mêmes arguments (colonnes de $A$, Rouché-Fontené, théorème spectral).`,
      ],
      exerciseRefs: ["1.2", "3.1", "6.6"],
    },
    {
      id: "q4",
      number: 4,
      title: "Sous-vectoriel de R⁴ : base, dimension et orthonormalisation",
      points: 5,
      chapters: [4, 5],
      kind: "exercice",
      statement: String.raw`Dans $\mathbb{R}^4$, considérons le sous-vectoriel

$$V = \{(x, y, z, t) \in \mathbb{R}^4 : x + z + t = 0 \text{ et } x - y + z = 0\}$$

**(a)** Donnez une base et la dimension de $V$. (2 points)

**(b)** Est-ce que la base de (a) est orthonormée ? Si non, donner une base orthonormée de $V$. (3 points)`,
      hints: [
        String.raw`$V$ est l'ensemble des solutions d'un système **homogène** de 2 équations à 4 inconnues : résous-le comme au chapitre 2 (Gauss-Jordan), exprime les variables pivots en fonction des variables libres, et les vecteurs multipliant les variables libres formeront ta base.`,
        String.raw`Premier geste : écris la matrice du système $\begin{pmatrix} 1 & 0 & 1 & 1 \\ 1 & -1 & 1 & 0 \end{pmatrix}$ et fais $L_2 \leftarrow L_2 - L_1$. Tu obtiens deux pivots (en $x$ et en $y$) et deux variables libres ($z$ et $t$).`,
        String.raw`Contrôle intermédiaire : tu devrais trouver $\dim V = 2$, et le produit scalaire des deux vecteurs de ta base ne devrait pas être nul — donc la base n'est pas orthonormée et il faut lancer Gram–Schmidt.`,
        String.raw`Gram–Schmidt : $Y_1 = X_1$, puis $Y_2 = X_2 - \dfrac{X_2 \bullet Y_1}{Y_1 \bullet Y_1} Y_1$, et enfin normalise ($U_i = Y_i / \|Y_i\|$). Vérifie à la fin que tes deux vecteurs satisfont bien les deux équations de $V$.`,
      ],
      steps: [
        {
          title: "(a) Traduire V en système homogène et le résoudre",
          content: String.raw`$V$ est défini par deux équations linéaires **homogènes** (second membre nul) : c'est l'ensemble des solutions du système de matrice

$$M = \begin{pmatrix} 1 & 0 & 1 & 1 \\ 1 & -1 & 1 & 0 \end{pmatrix}$$

(colonnes dans l'ordre $x, y, z, t$). Appliquons Gauss-Jordan :

$$\begin{pmatrix} 1 & 0 & 1 & 1 \\ 1 & -1 & 1 & 0 \end{pmatrix} \xrightarrow{L_2 \leftarrow L_2 - L_1} \begin{pmatrix} 1 & 0 & 1 & 1 \\ 0 & -1 & 0 & -1 \end{pmatrix} \xrightarrow{L_2 \leftarrow -L_2} \begin{pmatrix} 1 & 0 & 1 & 1 \\ 0 & 1 & 0 & 1 \end{pmatrix}$$

Les pivots portent sur $x$ et $y$ ; les variables **libres** sont $z$ et $t$ :

$$\begin{cases} x = -z - t \\ y = -t \end{cases}$$

📖 **Rappel.** Deux équations indépendantes dans $\mathbb{R}^4$ laissent $4 - 2 = 2$ degrés de liberté : on s'attend à $\dim V = 2$ (le rang de $M$ vaut 2, ses deux lignes n'étant pas proportionnelles).`,
        },
        {
          title: "(a) Extraire la base et conclure sur la dimension",
          content: String.raw`Tout vecteur de $V$ s'écrit

$$\begin{pmatrix} x \\ y \\ z \\ t \end{pmatrix} = \begin{pmatrix} -z - t \\ -t \\ z \\ t \end{pmatrix} = z \begin{pmatrix} -1 \\ 0 \\ 1 \\ 0 \end{pmatrix} + t \begin{pmatrix} -1 \\ -1 \\ 0 \\ 1 \end{pmatrix}, \qquad z, t \in \mathbb{R}.$$

Posons $X_1 = (-1, 0, 1, 0)^T$ et $X_2 = (-1, -1, 0, 1)^T$.

- Ils **engendrent** $V$ (calcul ci-dessus).
- Ils sont **linéairement indépendants** : dans $zX_1 + tX_2 = O$, la troisième composante donne $z = 0$ et la quatrième $t = 0$.

**Vérification** que $X_1, X_2 \in V$ :

- $X_1$ : $x + z + t = -1 + 1 + 0 = 0$ ✓ et $x - y + z = -1 - 0 + 1 = 0$ ✓
- $X_2$ : $x + z + t = -1 + 0 + 1 = 0$ ✓ et $x - y + z = -1 + 1 + 0 = 0$ ✓

**Conclusion :** $\{X_1, X_2\}$ est une base de $V$ et $\dim V = 2$. (Toute autre paire indépendante de solutions convient aussi : la base n'est pas unique.)`,
        },
        {
          title: "(b) La base est-elle orthonormée ?",
          content: String.raw`📖 **Rappel.** Une base est **orthonormée** si ses vecteurs sont deux à deux orthogonaux ($X_i \bullet X_j = 0$ pour $i \neq j$) **et** tous de norme 1.

Testons :

$$X_1 \bullet X_2 = (-1)(-1) + 0 \cdot (-1) + 1 \cdot 0 + 0 \cdot 1 = 1 \neq 0.$$

Les vecteurs ne sont même pas orthogonaux — et de plus $\|X_1\| = \sqrt{(-1)^2 + 0^2 + 1^2 + 0^2} = \sqrt{2} \neq 1$.

**La base de (a) n'est donc pas orthonormée.** Il faut en construire une par le procédé de Gram–Schmidt, qui redresse d'abord $X_2$ (orthogonalisation), puis normalise.`,
        },
        {
          title: "(b) Gram–Schmidt : orthogonaliser",
          content: String.raw`On garde le premier vecteur :

$$Y_1 = X_1 = (-1, 0, 1, 0)^T.$$

Puis on retire de $X_2$ sa composante le long de $Y_1$ :

$$Y_2 = X_2 - \frac{X_2 \bullet Y_1}{Y_1 \bullet Y_1}\, Y_1.$$

Calculs : $X_2 \bullet Y_1 = 1$ (déjà fait) et $Y_1 \bullet Y_1 = \|Y_1\|^2 = 2$, donc

$$Y_2 = \begin{pmatrix} -1 \\ -1 \\ 0 \\ 1 \end{pmatrix} - \frac{1}{2} \begin{pmatrix} -1 \\ 0 \\ 1 \\ 0 \end{pmatrix} = \begin{pmatrix} -\tfrac{1}{2} \\ -1 \\ -\tfrac{1}{2} \\ 1 \end{pmatrix} = \frac{1}{2} \begin{pmatrix} -1 \\ -2 \\ -1 \\ 2 \end{pmatrix}.$$

**Contrôle d'orthogonalité** (à faire systématiquement) :

$$Y_1 \bullet Y_2 = \tfrac{1}{2}\left[(-1)(-1) + 0 \cdot (-2) + 1 \cdot (-1) + 0 \cdot 2\right] = \tfrac{1}{2}(1 - 1) = 0. \checkmark$$

📖 $Y_2$ reste dans $V$ : c'est une combinaison linéaire de $X_1$ et $X_2$, qui appartiennent au sous-vectoriel $V$.`,
        },
        {
          title: "(b) Normaliser",
          content: String.raw`Il reste à diviser chaque vecteur par sa norme. Avec $Y_1 = (-1, 0, 1, 0)^T$ et le représentant entier $W_2 = (-1, -2, -1, 2)^T$ de la direction de $Y_2$ (normaliser $Y_2$ ou $2Y_2$ donne le même vecteur unitaire) :

$$\|Y_1\| = \sqrt{1 + 0 + 1 + 0} = \sqrt{2}, \qquad \|W_2\| = \sqrt{1 + 4 + 1 + 4} = \sqrt{10}.$$

D'où la base orthonormée :

$$U_1 = \frac{1}{\sqrt{2}} \begin{pmatrix} -1 \\ 0 \\ 1 \\ 0 \end{pmatrix}, \qquad U_2 = \frac{1}{\sqrt{10}} \begin{pmatrix} -1 \\ -2 \\ -1 \\ 2 \end{pmatrix}.$$`,
        },
        {
          title: "Vérifications finales",
          content: String.raw`Trois contrôles rapides qui rapportent gros :

- **Appartenance à $V$** : pour $(-1, -2, -1, 2)$ : $x + z + t = -1 - 1 + 2 = 0$ ✓ et $x - y + z = -1 + 2 - 1 = 0$ ✓ (et $U_1$ est un multiple de $X_1 \in V$).
- **Orthogonalité** : $U_1 \bullet U_2 = \frac{1}{\sqrt{20}}\left[(-1)(-1) + 0 + (1)(-1) + 0\right] = 0$ ✓
- **Normes** : $\|U_1\|^2 = \frac{1 + 1}{2} = 1$ ✓ et $\|U_2\|^2 = \frac{1 + 4 + 1 + 4}{10} = 1$ ✓

$\{U_1, U_2\}$ est bien une base orthonormée de $V$. (Elle n'est pas unique : partir d'une autre base de $V$, ou changer les signes, donne d'autres réponses tout aussi correctes.)`,
        },
      ],
      answer: String.raw`**(a)** En résolvant le système homogène : $x = -z - t$, $y = -t$ avec $z, t$ libres, d'où la base $\{(-1, 0, 1, 0)^T,\ (-1, -1, 0, 1)^T\}$ et $\dim V = 2$.

**(b)** Non : $X_1 \bullet X_2 = 1 \neq 0$ (et les normes ne valent pas 1). Gram–Schmidt donne la base orthonormée

$$U_1 = \frac{1}{\sqrt{2}}(-1, 0, 1, 0)^T, \qquad U_2 = \frac{1}{\sqrt{10}}(-1, -2, -1, 2)^T.$$`,
      examTips: [
        String.raw`Le correcteur veut voir la **méthode** : système résolu proprement (variables libres identifiées), indépendance justifiée, formule de Gram–Schmidt écrite avant d'être appliquée. Une base juste sans justification perd des points.`,
        String.raw`Ne normalise qu'à la toute fin : travailler avec $(-1, -2, -1, 2)$ plutôt qu'avec des demis et des racines t'évite 90 pour cent des erreurs de calcul. Tu peux toujours remplacer un vecteur par un multiple non nul avant de le normer.`,
        String.raw`Vérification express (30 secondes) : réinjecte tes vecteurs finaux dans les deux équations de $V$ et calcule leur produit scalaire. Si l'un des deux tests échoue, l'erreur est presque toujours dans le coefficient $\frac{X_2 \bullet Y_1}{Y_1 \bullet Y_1}$.`,
        String.raw`Ta base de (a) peut différer de celle du corrigé (par exemple $(1, 1, 0, -1)^T$ et $(0, 1, 1, -1)^T$ conviennent aussi) : ce n'est pas grave du moment qu'elle vérifie les deux équations et que ta partie (b) est cohérente avec elle.`,
      ],
      exerciseRefs: ["5.3", "5.2", "4.9"],
    },
    {
      id: "q5",
      number: 5,
      title: "Matrice avec paramètre : inversibilité, noyau, image, diagonalisation orthogonale",
      points: 6,
      chapters: [3, 4, 6],
      kind: "exercice",
      statement: String.raw`Pour $a \in \mathbb{R}$, on considère la matrice

$$A = \begin{pmatrix} a & 3 & -1 \\ 3 & 5 & -1 \\ -1 & -1 & 1 \end{pmatrix}$$

**(a)** Pour quelle(s) valeur(s) du paramètre $a$ est-elle inversible ? (1 point)

**(b)** Discutez en fonction du paramètre $a$ la dimension du noyau et de l'image de l'application linéaire associée à $A$. Dans chaque cas, donner des bases du noyau et de l'image (4 points)

**(c)** Pour quelle(s) valeur(s) du paramètre $a$ est-elle diagonalisable par une matrice orthogonale ? Donnez votre réponse sans effectuer la diagonalisation. (1 point)`,
      hints: [
        String.raw`(a) Inversible $\iff \det A \neq 0$ : calcule $\det A$ en fonction de $a$ (développe selon la ligne ou la colonne qui contient $a$, ou utilise Sarrus) et factorise le résultat.`,
        String.raw`Contrôle : tu devrais obtenir $\det A = 4a - 8 = 4(a - 2)$. La discussion de (b) n'a donc que **deux** cas.`,
        String.raw`(b) Utilise le théorème des dimensions : $\dim \text{noyau}(A) + \dim \text{im}(A) = 3$. Quand $\det A \neq 0$, tout est immédiat. Quand $\det A = 0$, résous $AX = O$ par Gauss-Jordan pour le noyau, puis choisis des colonnes indépendantes de $A$ pour l'image.`,
        String.raw`(c) Ne calcule rien : observe la matrice. Compare $A$ et $A^T$ coefficient par coefficient — que remarques-tu, et quel théorème du chapitre 6 fait le lien entre symétrie et diagonalisation orthogonale ?`,
      ],
      steps: [
        {
          title: "(a) Déterminant en fonction de a",
          content: String.raw`Développons $\det A$ selon la première ligne :

$$\det A = a \begin{vmatrix} 5 & -1 \\ -1 & 1 \end{vmatrix} - 3 \begin{vmatrix} 3 & -1 \\ -1 & 1 \end{vmatrix} + (-1) \begin{vmatrix} 3 & 5 \\ -1 & -1 \end{vmatrix}$$

Calcul des trois mineurs $2 \times 2$ :

$$\begin{vmatrix} 5 & -1 \\ -1 & 1 \end{vmatrix} = 5 - 1 = 4, \qquad \begin{vmatrix} 3 & -1 \\ -1 & 1 \end{vmatrix} = 3 - 1 = 2, \qquad \begin{vmatrix} 3 & 5 \\ -1 & -1 \end{vmatrix} = -3 + 5 = 2.$$

Donc

$$\det A = 4a - 6 - 2 = 4a - 8 = 4(a - 2).$$

**Contrôle numérique** : pour $a = 0$, un calcul direct donne $0 \cdot 4 - 3 \cdot 2 - 2 = -8 = 4(0 - 2)$ ✓

**Conclusion (a) :** $A$ est inversible si et seulement si $\det A \neq 0$, c'est-à-dire pour tout $a \neq 2$.`,
        },
        {
          title: "(b) Le cadre : noyau + image = 3",
          content: String.raw`📖 **Rappel** (chapitre 4). Pour l'application linéaire $f(X) = AX$ de $\mathbb{R}^3$ dans $\mathbb{R}^3$ :

- le **noyau** est l'ensemble des solutions de $AX = O$ ;
- l'**image** est le sous-vectoriel engendré par les colonnes de $A$ (car $AX = x_1C_1 + x_2C_2 + x_3C_3$), et $\dim \text{im}(A) = \text{rang}(A)$ ;
- le théorème des dimensions : $\dim \text{noyau}(A) + \dim \text{im}(A) = 3$.

Comme $\det A = 4(a - 2)$, la discussion se réduit à deux cas : $a \neq 2$ et $a = 2$.`,
        },
        {
          title: "(b) Cas a ≠ 2 : noyau trivial, image pleine",
          content: String.raw`Si $a \neq 2$, $\det A \neq 0$ : le système homogène $AX = O$ possède une solution unique (Cramer), qui est $X = O$. Donc

$$\text{noyau}(A) = \{O\}, \qquad \dim \text{noyau}(A) = 0,$$

et le noyau n'admet **pas de base** (la base du sous-espace nul est l'ensemble vide).

Par le théorème des dimensions, $\dim \text{im}(A) = 3 - 0 = 3$. Un sous-vectoriel de dimension 3 dans $\mathbb{R}^3$ est $\mathbb{R}^3$ tout entier :

$$\text{im}(A) = \mathbb{R}^3,$$

dont une base est par exemple la base canonique $\{(1, 0, 0)^T, (0, 1, 0)^T, (0, 0, 1)^T\}$ — ou, si tu préfères, les trois colonnes de $A$, indépendantes puisque $\det A \neq 0$.`,
        },
        {
          title: "(b) Cas a = 2 : Gauss-Jordan pour le noyau",
          content: String.raw`Pour $a = 2$, résolvons $AX = O$ avec $A = \begin{pmatrix} 2 & 3 & -1 \\ 3 & 5 & -1 \\ -1 & -1 & 1 \end{pmatrix}$.

Astuce : place la ligne 3 en premier (pivot $\pm 1$, pas de fractions) :

$$\begin{pmatrix} -1 & -1 & 1 \\ 3 & 5 & -1 \\ 2 & 3 & -1 \end{pmatrix} \xrightarrow{L_1 \leftarrow -L_1} \begin{pmatrix} 1 & 1 & -1 \\ 3 & 5 & -1 \\ 2 & 3 & -1 \end{pmatrix} \xrightarrow[L_3 \leftarrow L_3 - 2L_1]{L_2 \leftarrow L_2 - 3L_1} \begin{pmatrix} 1 & 1 & -1 \\ 0 & 2 & 2 \\ 0 & 1 & 1 \end{pmatrix}$$

$$\xrightarrow{L_2 \leftarrow \frac{1}{2}L_2} \begin{pmatrix} 1 & 1 & -1 \\ 0 & 1 & 1 \\ 0 & 1 & 1 \end{pmatrix} \xrightarrow[L_1 \leftarrow L_1 - L_2]{L_3 \leftarrow L_3 - L_2} \begin{pmatrix} 1 & 0 & -2 \\ 0 & 1 & 1 \\ 0 & 0 & 0 \end{pmatrix}$$

Deux pivots, une variable libre $z$ :

$$\begin{cases} x = 2z \\ y = -z \end{cases} \qquad \Rightarrow \qquad X = z\,(2, -1, 1)^T, \quad z \in \mathbb{R}.$$

**Vérification** : $A(2, -1, 1)^T = (4 - 3 - 1,\ 6 - 5 - 1,\ -2 + 1 + 1)^T = (0, 0, 0)^T$ ✓

Donc pour $a = 2$ : $\text{noyau}(A)$ a pour base $\{(2, -1, 1)^T\}$ et $\dim \text{noyau}(A) = 1$.`,
        },
        {
          title: "(b) Cas a = 2 : l'image",
          content: String.raw`Par le théorème des dimensions : $\dim \text{im}(A) = 3 - 1 = 2$ (cohérent avec les 2 pivots trouvés : $\text{rang}(A) = 2$).

L'image est engendrée par les colonnes de $A$ ; il suffit d'en choisir **deux linéairement indépendantes**, par exemple

$$C_2 = (3, 5, -1)^T \quad \text{et} \quad C_3 = (-1, -1, 1)^T,$$

qui ne sont pas proportionnelles ($3 \cdot (-1) \neq 5 \cdot (-1)$ après réduction : aucune constante $k$ ne donne $C_2 = kC_3$). Donc $\{(3, 5, -1)^T, (-1, -1, 1)^T\}$ est une base de $\text{im}(A)$.

**Contrôle de cohérence** : la colonne restante doit être combinaison des deux autres. Le vecteur du noyau $(2, -1, 1)^T$ encode justement la relation $2C_1 - C_2 + C_3 = O$, c'est-à-dire

$$C_1 = \frac{1}{2}(C_2 - C_3) = \frac{1}{2}\left[(3, 5, -1)^T - (-1, -1, 1)^T\right] = \frac{1}{2}(4, 6, -2)^T = (2, 3, -1)^T. \checkmark$$

📖 Joli lien à retenir : chaque vecteur $(\alpha, \beta, \gamma)^T$ du noyau encode une relation $\alpha C_1 + \beta C_2 + \gamma C_3 = O$ entre les colonnes.`,
        },
        {
          title: "(c) Diagonalisable par une matrice orthogonale : regarder la symétrie",
          content: String.raw`📖 **Rappel** (théorème spectral, chapitre 6). Une matrice est diagonalisable par une matrice orthogonale ($P^{-1} = P^T$) **si et seulement si** elle est symétrique. Le sens direct est le théorème spectral ; réciproquement, si $A = PDP^T$, alors $A^T = (PDP^T)^T = PD^TP^T = PDP^T = A$.

Or ici, pour **tout** $a$ :

$$A^T = \begin{pmatrix} a & 3 & -1 \\ 3 & 5 & -1 \\ -1 & -1 & 1 \end{pmatrix} = A,$$

puisque $a_{12} = a_{21} = 3$, $a_{13} = a_{31} = -1$ et $a_{23} = a_{32} = -1$ (le paramètre $a$ est sur la diagonale, il n'affecte pas la symétrie).

**Conclusion (c) :** $A$ est symétrique pour tout $a$, donc diagonalisable par une matrice orthogonale pour **toutes** les valeurs de $a \in \mathbb{R}$ — y compris $a = 2$ : ne pas être inversible n'empêche pas d'être diagonalisable (cela signifie seulement que $0$ est valeur propre).`,
        },
      ],
      answer: String.raw`**(a)** $\det A = 4(a - 2)$ : $A$ est inversible pour tout $a \neq 2$.

**(b)** Si $a \neq 2$ : $\text{noyau}(A) = \{O\}$ (dimension 0, pas de base) et $\text{im}(A) = \mathbb{R}^3$ (dimension 3, base canonique par exemple). Si $a = 2$ : noyau de dimension 1, de base $\{(2, -1, 1)^T\}$ ; image de dimension 2, de base $\{(3, 5, -1)^T, (-1, -1, 1)^T\}$.

**(c)** $A$ est symétrique quel que soit $a$, donc diagonalisable par une matrice orthogonale pour **tout** $a \in \mathbb{R}$ (théorème spectral).`,
      examTips: [
        String.raw`Le (c) ne vaut qu'1 point et se résout en une phrase (« $A$ symétrique pour tout $a$ + théorème spectral ») : l'énoncé dit explicitement de ne PAS diagonaliser. Si tu te lances dans le polynôme caractéristique, tu perds un temps précieux pour zéro point supplémentaire.`,
        String.raw`En (b), donne **tout** ce qui est demandé dans chaque cas : les deux dimensions ET les deux bases. Beaucoup d'étudiants oublient l'image dans le cas $a \neq 2$ (réponse : $\mathbb{R}^3$, base canonique) parce qu'elle semble « trop évidente ».`,
        String.raw`Vérifie ton vecteur du noyau en 10 secondes en calculant $AX$ : si le résultat n'est pas $O$, inutile de continuer, corrige d'abord ton Gauss-Jordan.`,
        String.raw`La factorisation $\det A = 4(a - 2)$ pilote toute la question : revérifie-la avant d'attaquer (b), par exemple en recalculant le déterminant pour une valeur simple comme $a = 0$.`,
      ],
      exerciseRefs: ["4.6", "4.14", "6.3"],
    },
    {
      id: "q6",
      number: 6,
      title: "Système paramétrique : Cramer puis discussion Gauss-Jordan",
      points: 8,
      chapters: [2, 3],
      kind: "exercice",
      statement: String.raw`Pour $a \in \mathbb{R}$, on considère le système d'équations linéaires

$$\begin{cases} ax - 2z = -2 \\ 3x + 3y - az = -2a \\ ax + ay - 3z = a - 3 \end{cases}$$

**(a)** Pour quelle(s) valeur(s) du paramètre $a$, ce système possède-t-il une solution unique ? Recherchez cette solution en utilisant la règle de Cramer (4 points). NB : simplifiez votre réponse autant que possible.

**(b)** Pour les autres valeurs de $a$, recherchez l'ensemble des solutions sous forme vectorielle à l'aide de la méthode de Gauss-Jordan. Donnez chaque fois le rang de $A$ et de $(A \mid B)$ (4 points).`,
      hints: [
        String.raw`Solution unique $\iff \det A \neq 0$ : commence par calculer $\det A$ en fonction de $a$ (développe selon la première ligne, qui contient déjà un zéro) et **factorise** complètement le résultat.`,
        String.raw`Contrôle : tu devrais trouver $\det A = a(a - 3)(a + 3)$, donc trois valeurs à exclure pour Cramer et trois cas à traiter en (b).`,
        String.raw`Pour Cramer, chaque déterminant $\det A_x$, $\det A_y$, $\det A_z$ doit se factoriser avec des facteurs communs à $\det A$ — c'est le sens du « simplifiez autant que possible ». Contrôle : $\det A_x = 2a(a + 3)$, donc après simplification $x$ n'a plus que $a - 3$ au dénominateur.`,
        String.raw`En (b), traite séparément $a = 0$, $a = 3$ et $a = -3$ avec la matrice complétée $(A \mid B)$. L'un des trois cas produit une ligne du type $(0\ \ 0\ \ 0 \mid c)$ avec $c \neq 0$ : conclus avec Rouché-Fontené.`,
      ],
      steps: [
        {
          title: "(a) Déterminant de la matrice des coefficients",
          content: String.raw`La matrice du système et le second membre sont

$$A = \begin{pmatrix} a & 0 & -2 \\ 3 & 3 & -a \\ a & a & -3 \end{pmatrix}, \qquad B = \begin{pmatrix} -2 \\ -2a \\ a - 3 \end{pmatrix}.$$

(Attention : l'inconnue $y$ est absente de la première équation, d'où le $0$.)

Développons selon la première ligne (elle contient un zéro) :

$$\det A = a \begin{vmatrix} 3 & -a \\ a & -3 \end{vmatrix} - 0 + (-2) \begin{vmatrix} 3 & 3 \\ a & a \end{vmatrix} = a(-9 + a^2) - 2(3a - 3a) = a(a^2 - 9).$$

D'où la factorisation complète :

$$\det A = a(a - 3)(a + 3).$$

📖 **Rappel** (règle de Cramer, démo 3.2) : le système admet une solution unique si et seulement si $\det A \neq 0$.

**Conclusion :** solution unique pour $a \neq 0$, $a \neq 3$ et $a \neq -3$.`,
        },
        {
          title: "(a) Cramer : calcul de x",
          content: String.raw`📖 **Règle de Cramer** : $x = \dfrac{\det A_x}{\det A}$ où $A_x$ est $A$ dont la **première colonne** est remplacée par $B$.

$$\det A_x = \begin{vmatrix} -2 & 0 & -2 \\ -2a & 3 & -a \\ a - 3 & a & -3 \end{vmatrix} = -2 \begin{vmatrix} 3 & -a \\ a & -3 \end{vmatrix} - 0 + (-2) \begin{vmatrix} -2a & 3 \\ a - 3 & a \end{vmatrix}$$

Les deux mineurs : $\begin{vmatrix} 3 & -a \\ a & -3 \end{vmatrix} = -9 + a^2$ et $\begin{vmatrix} -2a & 3 \\ a - 3 & a \end{vmatrix} = -2a^2 - 3(a - 3) = -2a^2 - 3a + 9$.

$$\det A_x = -2(a^2 - 9) - 2(-2a^2 - 3a + 9) = -2a^2 + 18 + 4a^2 + 6a - 18 = 2a^2 + 6a = 2a(a + 3).$$

D'où, en simplifiant par $a(a + 3)$ (licite car $a \neq 0$ et $a \neq -3$) :

$$x = \frac{2a(a + 3)}{a(a - 3)(a + 3)} = \frac{2}{a - 3}.$$`,
        },
        {
          title: "(a) Cramer : calcul de y",
          content: String.raw`$A_y$ remplace la **deuxième colonne** par $B$ :

$$\det A_y = \begin{vmatrix} a & -2 & -2 \\ 3 & -2a & -a \\ a & a - 3 & -3 \end{vmatrix} = a \begin{vmatrix} -2a & -a \\ a - 3 & -3 \end{vmatrix} + 2 \begin{vmatrix} 3 & -a \\ a & -3 \end{vmatrix} - 2 \begin{vmatrix} 3 & -2a \\ a & a - 3 \end{vmatrix}$$

Les trois mineurs :

- $\begin{vmatrix} -2a & -a \\ a - 3 & -3 \end{vmatrix} = 6a + a(a - 3) = a^2 + 3a$
- $\begin{vmatrix} 3 & -a \\ a & -3 \end{vmatrix} = a^2 - 9$
- $\begin{vmatrix} 3 & -2a \\ a & a - 3 \end{vmatrix} = 3(a - 3) + 2a^2 = 2a^2 + 3a - 9$

$$\det A_y = a(a^2 + 3a) + 2(a^2 - 9) - 2(2a^2 + 3a - 9) = a^3 + 3a^2 + 2a^2 - 18 - 4a^2 - 6a + 18 = a^3 + a^2 - 6a.$$

Factorisons : $a^3 + a^2 - 6a = a(a^2 + a - 6) = a(a + 3)(a - 2)$, donc

$$y = \frac{a(a + 3)(a - 2)}{a(a - 3)(a + 3)} = \frac{a - 2}{a - 3}.$$`,
        },
        {
          title: "(a) Cramer : calcul de z",
          content: String.raw`$A_z$ remplace la **troisième colonne** par $B$ :

$$\det A_z = \begin{vmatrix} a & 0 & -2 \\ 3 & 3 & -2a \\ a & a & a - 3 \end{vmatrix} = a \begin{vmatrix} 3 & -2a \\ a & a - 3 \end{vmatrix} - 0 + (-2) \begin{vmatrix} 3 & 3 \\ a & a \end{vmatrix}$$

Le premier mineur vaut $3(a - 3) + 2a^2 = 2a^2 + 3a - 9 = (2a - 3)(a + 3)$ et le second $3a - 3a = 0$, donc

$$\det A_z = a(2a - 3)(a + 3), \qquad z = \frac{a(2a - 3)(a + 3)}{a(a - 3)(a + 3)} = \frac{2a - 3}{a - 3}.$$

**Récapitulatif du cas régulier** ($a \notin \{0, 3, -3\}$) :

$$x = \frac{2}{a - 3}, \qquad y = \frac{a - 2}{a - 3}, \qquad z = \frac{2a - 3}{a - 3}.$$`,
        },
        {
          title: "(a) Vérification par réinjection (les trois équations)",
          content: String.raw`Réinjectons la solution générale — tout se met sur le dénominateur commun $a - 3$ :

- **Équation 1 :** $ax - 2z = \dfrac{2a - 2(2a - 3)}{a - 3} = \dfrac{-2a + 6}{a - 3} = \dfrac{-2(a - 3)}{a - 3} = -2$ ✓
- **Équation 2 :** $3x + 3y - az = \dfrac{6 + 3(a - 2) - a(2a - 3)}{a - 3} = \dfrac{6a - 2a^2}{a - 3} = \dfrac{-2a(a - 3)}{a - 3} = -2a$ ✓
- **Équation 3 :** $ax + ay - 3z = \dfrac{2a + a(a - 2) - 3(2a - 3)}{a - 3} = \dfrac{a^2 - 6a + 9}{a - 3} = \dfrac{(a - 3)^2}{a - 3} = a - 3$ ✓

Les trois équations sont satisfaites pour tout $a$ admissible : la solution de Cramer est confirmée.`,
        },
        {
          title: "(b) Cas a = 0 : Gauss-Jordan, système simplement indéterminé",
          content: String.raw`Pour $a = 0$, la matrice complétée est

$$\left(\begin{array}{ccc|c} 0 & 0 & -2 & -2 \\ 3 & 3 & 0 & 0 \\ 0 & 0 & -3 & -3 \end{array}\right)$$

Échangeons $L_1 \leftrightarrow L_2$ puis normalisons :

$$\left(\begin{array}{ccc|c} 3 & 3 & 0 & 0 \\ 0 & 0 & -2 & -2 \\ 0 & 0 & -3 & -3 \end{array}\right) \xrightarrow[L_2 \leftarrow -\frac{1}{2}L_2]{L_1 \leftarrow \frac{1}{3}L_1} \left(\begin{array}{ccc|c} 1 & 1 & 0 & 0 \\ 0 & 0 & 1 & 1 \\ 0 & 0 & -3 & -3 \end{array}\right) \xrightarrow{L_3 \leftarrow L_3 + 3L_2} \left(\begin{array}{ccc|c} 1 & 1 & 0 & 0 \\ 0 & 0 & 1 & 1 \\ 0 & 0 & 0 & 0 \end{array}\right)$$

Deux pivots (en $x$ et en $z$), pas de ligne absurde :

$$\text{rang}(A) = \text{rang}(A \mid B) = 2 < 3 \text{ inconnues : système simplement indéterminé.}$$

Avec $y$ libre : $x = -y$ et $z = 1$, d'où la forme vectorielle

$$\begin{pmatrix} x \\ y \\ z \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \\ 1 \end{pmatrix} + y \begin{pmatrix} -1 \\ 1 \\ 0 \end{pmatrix}, \qquad y \in \mathbb{R}.$$

**Vérification** (avec $y = 1$, le point $(-1, 1, 1)$) : éq. 1 : $-2 \cdot 1 = -2$ ✓ ; éq. 2 : $-3 + 3 - 0 = 0 = -2a$ ✓ ; éq. 3 : $-3 \cdot 1 = -3 = a - 3$ ✓`,
        },
        {
          title: "(b) Cas a = 3 : système impossible",
          content: String.raw`Pour $a = 3$ :

$$\left(\begin{array}{ccc|c} 3 & 0 & -2 & -2 \\ 3 & 3 & -3 & -6 \\ 3 & 3 & -3 & 0 \end{array}\right) \xrightarrow[L_3 \leftarrow L_3 - L_1]{L_2 \leftarrow L_2 - L_1} \left(\begin{array}{ccc|c} 3 & 0 & -2 & -2 \\ 0 & 3 & -1 & -4 \\ 0 & 3 & -1 & 2 \end{array}\right) \xrightarrow{L_3 \leftarrow L_3 - L_2} \left(\begin{array}{ccc|c} 3 & 0 & -2 & -2 \\ 0 & 3 & -1 & -4 \\ 0 & 0 & 0 & 6 \end{array}\right)$$

La dernière ligne se lit $0x + 0y + 0z = 6$ : **impossible**. (On le voit aussi directement : les équations 2 et 3 ont le même membre de gauche mais des seconds membres différents, $-6 \neq 0$.)

Rangs : la partie $A$ a deux lignes échelonnées non nulles, donc $\text{rang}(A) = 2$ ; la matrice complétée en a trois, donc $\text{rang}(A \mid B) = 3$.

📖 **Rouché-Fontené** : $\text{rang}(A) = 2 < 3 = \text{rang}(A \mid B)$, donc l'ensemble des solutions est **vide** : $S = \emptyset$.`,
        },
        {
          title: "(b) Cas a = −3 : système simplement indéterminé",
          content: String.raw`Pour $a = -3$ :

$$\left(\begin{array}{ccc|c} -3 & 0 & -2 & -2 \\ 3 & 3 & 3 & 6 \\ -3 & -3 & -3 & -6 \end{array}\right) \xrightarrow[L_3 \leftarrow L_3 - L_1]{L_2 \leftarrow L_2 + L_1} \left(\begin{array}{ccc|c} -3 & 0 & -2 & -2 \\ 0 & 3 & 1 & 4 \\ 0 & -3 & -1 & -4 \end{array}\right) \xrightarrow{L_3 \leftarrow L_3 + L_2} \left(\begin{array}{ccc|c} -3 & 0 & -2 & -2 \\ 0 & 3 & 1 & 4 \\ 0 & 0 & 0 & 0 \end{array}\right)$$

(La ligne 3 était l'opposée de la ligne 2 : information redondante.) Terminons la phase de Jordan :

$$\xrightarrow[L_2 \leftarrow \frac{1}{3}L_2]{L_1 \leftarrow -\frac{1}{3}L_1} \left(\begin{array}{ccc|c} 1 & 0 & \tfrac{2}{3} & \tfrac{2}{3} \\ 0 & 1 & \tfrac{1}{3} & \tfrac{4}{3} \\ 0 & 0 & 0 & 0 \end{array}\right)$$

$$\text{rang}(A) = \text{rang}(A \mid B) = 2 < 3 : \text{système simplement indéterminé.}$$

Avec $z$ libre : $x = \frac{2}{3} - \frac{2}{3}z$ et $y = \frac{4}{3} - \frac{1}{3}z$, soit

$$\begin{pmatrix} x \\ y \\ z \end{pmatrix} = \begin{pmatrix} \tfrac{2}{3} \\ \tfrac{4}{3} \\ 0 \end{pmatrix} + z \begin{pmatrix} -\tfrac{2}{3} \\ -\tfrac{1}{3} \\ 1 \end{pmatrix}, \qquad z \in \mathbb{R}.$$

**Vérification** (point $z = 0$) : éq. 1 : $-3 \cdot \frac{2}{3} - 0 = -2$ ✓ ; éq. 2 : $3 \cdot \frac{2}{3} + 3 \cdot \frac{4}{3} + 0 = 6 = -2a$ ✓ ; éq. 3 : $-3 \cdot \frac{2}{3} - 3 \cdot \frac{4}{3} - 0 = -6 = a - 3$ ✓. Et le vecteur directeur est bien solution du système homogène : $-3 \cdot (-\frac{2}{3}) - 2 \cdot 1 = 0$ ✓ et $3 \cdot (-\frac{2}{3}) + 3 \cdot (-\frac{1}{3}) + 3 \cdot 1 = 0$ ✓`,
        },
      ],
      answer: String.raw`**(a)** $\det A = a(a - 3)(a + 3)$ : solution unique pour $a \notin \{0, 3, -3\}$, donnée après simplification par

$$x = \frac{2}{a - 3}, \qquad y = \frac{a - 2}{a - 3}, \qquad z = \frac{2a - 3}{a - 3}.$$

**(b)** Pour $a = 0$ : $\text{rang}(A) = \text{rang}(A \mid B) = 2$, système simplement indéterminé, solutions $(0, 0, 1)^T + y(-1, 1, 0)^T$, $y \in \mathbb{R}$. Pour $a = 3$ : $\text{rang}(A) = 2 < \text{rang}(A \mid B) = 3$, système impossible, $S = \emptyset$. Pour $a = -3$ : $\text{rang}(A) = \text{rang}(A \mid B) = 2$, système simplement indéterminé, solutions $(\tfrac{2}{3}, \tfrac{4}{3}, 0)^T + z(-\tfrac{2}{3}, -\tfrac{1}{3}, 1)^T$, $z \in \mathbb{R}$.`,
      examTips: [
        String.raw`8 points, la plus grosse question du sujet : réserve-lui au moins 35 minutes. Le « simplifiez autant que possible » de l'énoncé est un vrai critère de correction — une réponse du type $x = \frac{2a(a+3)}{a(a-3)(a+3)}$ non simplifiée perd des points.`,
        String.raw`La factorisation systématique est la clé : $\det A$ ET les trois déterminants de Cramer se factorisent tous par des facteurs de $a(a - 3)(a + 3)$. Si un $\det A_i$ ne se simplifie pas du tout, tu as probablement une erreur de signe — recalcule-le avant d'aller plus loin.`,
        String.raw`En (b), n'oublie aucune des **trois** valeurs critiques ($0$, $3$ et $-3$), et donne pour chacune les deux rangs demandés avec la conclusion en vocabulaire du cours (simplement indéterminé / impossible) : c'est ce que le correcteur coche en premier.`,
        String.raw`Vérification éclair de Cramer : injecte ta solution dans l'équation la plus simple (la première : $ax - 2z = -2$). Le numérateur doit se factoriser par $(a - 3)$ — sinon, erreur quelque part.`,
      ],
      exerciseRefs: ["3.4", "3.6", "2.3"],
    },
    {
      id: "q7",
      number: 7,
      title: "Chaîne de Markov : la première place de la rangée",
      points: 6,
      chapters: [6],
      kind: "exercice",
      statement: String.raw`Au cours, trois amis étudiants $E_1$, $E_2$, $E_3$ occupent toujours les trois premières places d'une même rangée. Pour la première place, si un jour, c'est $E_1$ qui s'y assied, le lendemain, il y a 4 chances sur 10 que ce soit encore lui et les deux autres ont autant de chances l'un que l'autre. Si c'est $E_2$, alors le lendemain, il y a 8 chances sur 10 que ce soit encore lui, et il est certain que ce ne sera pas $E_1$. Par contre, si c'est $E_3$ qui occupe la première place, le lendemain, il y a 2 chances sur 10 que ce soit $E_1$ et 3 chances sur 10 que ce soit $E_2$. Lundi, c'est $E_1$ qui occupe cette première place.

**(a)** Donnez la matrice de transition $A$ contenant les probabilités décrites ci-dessous. Quelle est la probabilité que c'est encore $E_1$ qui occupe la première place le mercredi ? (2 points)

**(b)** À long terme, quelles sont les probabilités que chacun des étudiants occupe la première place ? (4 points). NB : vous pouvez utiliser le fait que les trois valeurs propres de $A$ sont tous distincts.`,
      hints: [
        String.raw`Matrice de transition de Markov : la colonne $j$ contient les probabilités de passage depuis l'état $E_j$ (l'occupant d'aujourd'hui), et chaque colonne doit sommer à 1 — utilise cette contrainte pour compléter les probabilités que l'énoncé ne donne qu'implicitement (« autant de chances l'un que l'autre », « il est certain que ce ne sera pas $E_1$ »).`,
        String.raw`(a) De lundi à mercredi il y a **deux** transitions : la réponse est la première composante de $A^2X_0$ avec $X_0 = (1, 0, 0)^T$. Astuce : calcule $A(AX_0)$ — deux produits matrice-vecteur — plutôt que $A^2$ en entier.`,
        String.raw`Contrôle intermédiaire : mardi, tu devrais obtenir le vecteur $(0{,}4,\ 0{,}3,\ 0{,}3)^T$ (c'est la première colonne de $A$).`,
        String.raw`(b) Le comportement à long terme est porté par la valeur propre $\lambda = 1$ (toujours valeur propre d'une matrice de Markov) : résous $(A - I)X = O$ puis normalise la solution pour que la somme des composantes vaille 1.`,
      ],
      steps: [
        {
          title: "(a) Construire la matrice de transition",
          content: String.raw`Notons $X_t = (p_1, p_2, p_3)^T$ le vecteur des probabilités que $E_1, E_2, E_3$ occupent la première place au jour $t$, avec la dynamique $X_{t+1} = AX_t$. 📖 Dans la convention du cours, la **colonne $j$** de $A$ décrit le lendemain d'une journée où c'est $E_j$ qui est assis à la première place ; chaque colonne somme à 1.

- **Depuis $E_1$** : reste $E_1$ avec $0{,}4$ ; « les deux autres ont autant de chances l'un que l'autre » : ils se partagent le reste $0{,}6$, soit $0{,}3$ chacun. Colonne 1 : $(0{,}4,\ 0{,}3,\ 0{,}3)^T$.
- **Depuis $E_2$** : reste $E_2$ avec $0{,}8$ ; « certain que ce ne sera pas $E_1$ » donne $0$ pour $E_1$, et le complément $0{,}2$ pour $E_3$. Colonne 2 : $(0,\ 0{,}8,\ 0{,}2)^T$.
- **Depuis $E_3$** : $0{,}2$ pour $E_1$, $0{,}3$ pour $E_2$, et le complément $1 - 0{,}2 - 0{,}3 = 0{,}5$ pour $E_3$. Colonne 3 : $(0{,}2,\ 0{,}3,\ 0{,}5)^T$.

$$A = \begin{pmatrix} 0{,}4 & 0 & 0{,}2 \\ 0{,}3 & 0{,}8 & 0{,}3 \\ 0{,}3 & 0{,}2 & 0{,}5 \end{pmatrix}$$

**Contrôle** : chaque colonne somme bien à 1 ($0{,}4 + 0{,}3 + 0{,}3 = 1$, $0 + 0{,}8 + 0{,}2 = 1$, $0{,}2 + 0{,}3 + 0{,}5 = 1$) ✓`,
        },
        {
          title: "(a) De lundi à mercredi : deux transitions",
          content: String.raw`Lundi, c'est $E_1$ : $X_0 = (1, 0, 0)^T$. Mercredi est **deux** jours plus tard, donc on veut $X_2 = A^2X_0$. Plutôt que de calculer $A^2$ (9 coefficients), on enchaîne deux produits matrice-vecteur.

**Mardi** : $X_1 = AX_0 =$ première colonne de $A$ :

$$X_1 = (0{,}4,\ 0{,}3,\ 0{,}3)^T.$$

**Mercredi** : $X_2 = AX_1$ :

$$X_2 = \begin{pmatrix} 0{,}4 \cdot 0{,}4 + 0 \cdot 0{,}3 + 0{,}2 \cdot 0{,}3 \\ 0{,}3 \cdot 0{,}4 + 0{,}8 \cdot 0{,}3 + 0{,}3 \cdot 0{,}3 \\ 0{,}3 \cdot 0{,}4 + 0{,}2 \cdot 0{,}3 + 0{,}5 \cdot 0{,}3 \end{pmatrix} = \begin{pmatrix} 0{,}16 + 0{,}06 \\ 0{,}12 + 0{,}24 + 0{,}09 \\ 0{,}12 + 0{,}06 + 0{,}15 \end{pmatrix} = \begin{pmatrix} 0{,}22 \\ 0{,}45 \\ 0{,}33 \end{pmatrix}$$

**Contrôle** : $0{,}22 + 0{,}45 + 0{,}33 = 1$ ✓ (un vecteur de probabilités doit sommer à 1).

**Réponse (a)** : la probabilité que $E_1$ occupe encore la première place mercredi est $0{,}22$, soit 22 pour cent.`,
        },
        {
          title: "(b) Pourquoi le long terme se lit sur la valeur propre 1",
          content: String.raw`📖 **Rappel** (démo 6.3 du référentiel) : toute matrice de transition de Markov admet $\lambda = 1$ comme valeur propre (ses colonnes somment à 1, donc les lignes de $A - I$ somment à la ligne nulle et $\det(A - I) = 0$).

L'énoncé nous autorise à utiliser le fait que les trois valeurs propres $\lambda_1 = 1, \lambda_2, \lambda_3$ sont distinctes : les vecteurs propres associés $C_1, C_2, C_3$ sont alors linéairement indépendants (📖 démo 6.1) et forment une base de $\mathbb{R}^3$. Décomposons l'état initial :

$$X_0 = \alpha_1 C_1 + \alpha_2 C_2 + \alpha_3 C_3 \quad \Rightarrow \quad X_m = A^mX_0 = \alpha_1 \lambda_1^m C_1 + \alpha_2 \lambda_2^m C_2 + \alpha_3 \lambda_3^m C_3.$$

Si $|\lambda_2| < 1$ et $|\lambda_3| < 1$, les deux derniers termes s'éteignent quand $m \to \infty$ et $X_m \to \alpha_1 C_1$ : la limite est portée par le vecteur propre de $\lambda = 1$, calibré pour être un vecteur de probabilités.`,
        },
        {
          title: "(b) Contrôle des deux autres valeurs propres",
          content: String.raw`Vérifions que les deux autres valeurs propres sont bien de module strictement inférieur à 1, grâce à la trace et au déterminant :

$$\text{tr}(A) = 0{,}4 + 0{,}8 + 0{,}5 = 1{,}7 = \lambda_1 + \lambda_2 + \lambda_3, \qquad \det A = \lambda_1\lambda_2\lambda_3.$$

Calcul du déterminant (développement selon la première ligne) :

$$\det A = 0{,}4\,(0{,}8 \cdot 0{,}5 - 0{,}3 \cdot 0{,}2) - 0 + 0{,}2\,(0{,}3 \cdot 0{,}2 - 0{,}8 \cdot 0{,}3) = 0{,}4 \cdot 0{,}34 + 0{,}2 \cdot (-0{,}18) = 0{,}1.$$

Avec $\lambda_1 = 1$ : $\lambda_2 + \lambda_3 = 0{,}7$ et $\lambda_2\lambda_3 = 0{,}1$, donc $\lambda_2$ et $\lambda_3$ sont les racines de $t^2 - 0{,}7t + 0{,}1 = 0$ :

$$t = \frac{0{,}7 \pm \sqrt{0{,}49 - 0{,}4}}{2} = \frac{0{,}7 \pm 0{,}3}{2} \quad \Rightarrow \quad \lambda_2 = 0{,}5, \qquad \lambda_3 = 0{,}2.$$

Les trois valeurs propres $1$, $0{,}5$ et $0{,}2$ sont bien distinctes (comme annoncé par l'énoncé), et les deux autres vérifient $|\lambda_2| = 0{,}5 < 1$ et $|\lambda_3| = 0{,}2 < 1$ : la convergence vers le régime stationnaire est garantie.`,
        },
        {
          title: "(b) Vecteur propre de λ = 1",
          content: String.raw`Résolvons $(A - I)X = O$ :

$$A - I = \begin{pmatrix} -0{,}6 & 0 & 0{,}2 \\ 0{,}3 & -0{,}2 & 0{,}3 \\ 0{,}3 & 0{,}2 & -0{,}5 \end{pmatrix}$$

- **Ligne 1** : $-0{,}6x + 0{,}2z = 0 \Rightarrow z = 3x$.
- **Ligne 2** : $0{,}3x - 0{,}2y + 0{,}3z = 0 \Rightarrow 0{,}3x + 0{,}9x = 0{,}2y \Rightarrow y = 6x$.
- **Ligne 3** (contrôle : elle doit être redondante) : $0{,}3x + 0{,}2 \cdot 6x - 0{,}5 \cdot 3x = 0{,}3x + 1{,}2x - 1{,}5x = 0$ ✓

Le noyau de $A - I$ est la droite engendrée par

$$C_1 = (1,\ 6,\ 3)^T.$$`,
        },
        {
          title: "(b) Normaliser et conclure",
          content: String.raw`La limite $\alpha_1 C_1$ doit être un vecteur de probabilités : chaque $X_m$ a des composantes qui somment à 1, donc la limite aussi. On normalise $C_1$ par la somme de ses composantes ($1 + 6 + 3 = 10$) :

$$X_\infty = \frac{1}{10}(1,\ 6,\ 3)^T = \begin{pmatrix} 0{,}1 \\ 0{,}6 \\ 0{,}3 \end{pmatrix}$$

**Vérification** ($AX_\infty = X_\infty$) :

$$A \begin{pmatrix} 0{,}1 \\ 0{,}6 \\ 0{,}3 \end{pmatrix} = \begin{pmatrix} 0{,}04 + 0 + 0{,}06 \\ 0{,}03 + 0{,}48 + 0{,}09 \\ 0{,}03 + 0{,}12 + 0{,}15 \end{pmatrix} = \begin{pmatrix} 0{,}1 \\ 0{,}6 \\ 0{,}3 \end{pmatrix} \checkmark$$

**Interprétation** : à long terme, $E_1$ occupe la première place 10 pour cent des jours, $E_2$ 60 pour cent et $E_3$ 30 pour cent — indépendamment du fait que ce soit $E_1$ qui commence le lundi. La domination de $E_2$ se lit déjà dans la matrice : une fois installé, il garde sa place 8 fois sur 10.`,
        },
      ],
      answer: String.raw`**(a)** $A = \begin{pmatrix} 0{,}4 & 0 & 0{,}2 \\ 0{,}3 & 0{,}8 & 0{,}3 \\ 0{,}3 & 0{,}2 & 0{,}5 \end{pmatrix}$ (colonnes = occupant du jour, chacune somme à 1). Mercredi : $X_2 = A^2(1, 0, 0)^T = (0{,}22,\ 0{,}45,\ 0{,}33)^T$, donc probabilité $0{,}22$ pour $E_1$.

**(b)** Les valeurs propres sont $1$, $0{,}5$ et $0{,}2$ ; le vecteur propre de $\lambda = 1$ normalisé donne le régime stationnaire $X_\infty = (0{,}1,\ 0{,}6,\ 0{,}3)^T$ : à long terme, $E_1$ occupe la première place avec probabilité $0{,}1$, $E_2$ avec probabilité $0{,}6$ et $E_3$ avec probabilité $0{,}3$.`,
      examTips: [
        String.raw`La grosse source d'erreurs est la **construction** de $A$ : lis chaque phrase comme une colonne (état de départ) et exploite « chaque colonne somme à 1 » pour les probabilités implicites. Une matrice transposée par erreur fausse toute la question — vérifie les sommes de colonnes avant de continuer.`,
        String.raw`« Lundi vers mercredi » = 2 transitions, pas 3 : trace une petite frise lundi/mardi/mercredi si nécessaire. Et calcule $A(AX_0)$ au lieu de $A^2$ : deux fois moins d'opérations, deux fois moins d'occasions de se tromper.`,
        String.raw`En (b), le correcteur attend la **justification** de la convergence (décomposition sur la base de vecteurs propres, extinction des $\lambda^m$ pour $|\lambda| < 1$), pas seulement le vecteur stationnaire : c'est là que se jouent les 4 points, et c'est exactement le rôle du NB de l'énoncé.`,
        String.raw`Double contrôle final qui prend 30 secondes : la somme des composantes de ta réponse doit valoir 1, et $AX_\infty$ doit redonner $X_\infty$. Si l'un des deux échoue, cherche l'erreur dans $(A - I)X = O$.`,
      ],
      exerciseRefs: ["6.7", "6.8", "1.5"],
    },
    {
      id: "q8",
      number: 8,
      title: "Intégrale double sur un triangle",
      points: 3,
      chapters: [8],
      kind: "exercice",
      statement: String.raw`Calculez

$$\iint_R (1 - x)y^2 \, \mathrm{d}y \, \mathrm{d}x$$

où $R$ est la région délimitée par les droites $y = 0$, $x = 0$ et $x + y = 1$. Représentez graphiquement le domaine d'intégration.`,
      hints: [
        String.raw`Commence par dessiner : les trois droites délimitent un triangle. Trouve ses trois sommets (intersections deux à deux des droites) avant d'écrire la moindre intégrale.`,
        String.raw`Pour $x$ fixé entre 0 et 1, la verticale traverse le domaine de $y = 0$ jusqu'à la droite oblique : exprime cette borne supérieure en fonction de $x$, puis intègre d'abord en $y$ (où $(1 - x)$ se comporte comme une constante).`,
        String.raw`Contrôle intermédiaire : l'intégrale intérieure doit valoir $\dfrac{(1 - x)^4}{3}$. Pour la primitive finale, pense à $\int (1 - x)^4 \, \mathrm{d}x = -\frac{(1 - x)^5}{5} + C$ (attention au signe).`,
      ],
      steps: [
        {
          title: "Décrire et représenter le domaine",
          content: String.raw`Les trois droites frontières se coupent deux à deux en :

- $y = 0$ et $x = 0$ : le point $(0, 0)$ ;
- $y = 0$ et $x + y = 1$ : le point $(1, 0)$ ;
- $x = 0$ et $x + y = 1$ : le point $(0, 1)$.

$R$ est donc le **triangle** de sommets $(0, 0)$, $(1, 0)$ et $(0, 1)$ : la partie du premier quadrant située sous la droite $y = 1 - x$ (l'hypoténuse qui descend de $(0, 1)$ vers $(1, 0)$).

Description en tranches verticales :

$$R = \{(x, y) : 0 \leq x \leq 1, \ 0 \leq y \leq 1 - x\}.$$

Sur ta copie, le graphique attendu est ce triangle hachuré, avec l'hypoténuse étiquetée $y = 1 - x$ et les trois sommets marqués.`,
        },
        {
          title: "Poser l'intégrale itérée",
          content: String.raw`📖 **Rappel.** Sur un domaine non rectangulaire décrit en tranches verticales, l'intégrale double se calcule en itérant : $y$ (bornes dépendant de $x$) à l'intérieur, $x$ (bornes fixes) à l'extérieur.

$$\iint_R (1 - x)y^2 \, \mathrm{d}A = \int_0^1 \left( \int_0^{1 - x} (1 - x)\,y^2 \, \mathrm{d}y \right) \mathrm{d}x$$

L'ordre est bien choisi : dans l'intégrale intérieure, la variable est $y$ et le facteur $(1 - x)$ est une **constante** qu'on peut sortir.`,
        },
        {
          title: "Intégrale intérieure (en y)",
          content: String.raw`$$\int_0^{1 - x} (1 - x)\,y^2 \, \mathrm{d}y = (1 - x) \left[ \frac{y^3}{3} \right]_0^{1 - x} = (1 - x) \cdot \frac{(1 - x)^3}{3} = \frac{(1 - x)^4}{3}.$$

C'est le résultat intermédiaire de contrôle : une fonction de $x$ seulement, positive sur $[0, 1]$ (normal : on intègre une fonction positive).`,
        },
        {
          title: "Intégrale extérieure (en x)",
          content: String.raw`$$\int_0^1 \frac{(1 - x)^4}{3} \, \mathrm{d}x = \frac{1}{3} \left[ -\frac{(1 - x)^5}{5} \right]_0^1 = \frac{1}{3} \left( 0 - \left(-\frac{1}{5}\right) \right) = \frac{1}{15}.$$

(La primitive de $(1 - x)^4$ est $-\frac{(1 - x)^5}{5}$ : le signe moins vient de la dérivée intérieure $-1$ ; on peut aussi poser le changement de variable $u = 1 - x$.)

$$\iint_R (1 - x)y^2 \, \mathrm{d}A = \frac{1}{15}$$`,
        },
        {
          title: "Vérification en inversant l'ordre d'intégration",
          content: String.raw`Le même domaine se décrit en tranches horizontales : $0 \leq y \leq 1$ et $0 \leq x \leq 1 - y$.

$$\int_0^{1 - y} (1 - x) \, \mathrm{d}x = \left[ x - \frac{x^2}{2} \right]_0^{1 - y} = (1 - y) - \frac{(1 - y)^2}{2} = (1 - y)\,\frac{1 + y}{2} = \frac{1 - y^2}{2}.$$

Alors

$$\int_0^1 y^2 \cdot \frac{1 - y^2}{2}\, \mathrm{d}y = \frac{1}{2} \int_0^1 (y^2 - y^4) \, \mathrm{d}y = \frac{1}{2}\left( \frac{1}{3} - \frac{1}{5} \right) = \frac{1}{2} \cdot \frac{2}{15} = \frac{1}{15}. \checkmark$$

Les deux ordres d'intégration donnent $\frac{1}{15}$ : le résultat est confirmé. Ordre de grandeur plausible : on intègre une fonction comprise entre 0 et 1 sur un triangle d'aire $\frac{1}{2}$, le résultat devait être un petit nombre positif.`,
        },
      ],
      figure: {
        window: { xMin: -0.4, xMax: 1.45, yMin: -0.35, yMax: 1.35 },
        regions: [{ xFrom: 0, xTo: 1, yLow: "0", yHigh: "1-x" }],
        curves: [{ fn: "1-x", domain: [-0.2, 1.2], label: "x + y = 1", labelAt: [0.6, 0.6] }],
        points: [
          { at: [0, 0], label: "(0, 0)", offset: [-44, 16] },
          { at: [1, 0], label: "(1, 0)", offset: [8, 18] },
          { at: [0, 1], label: "(0, 1)", offset: [-46, -6] },
        ],
        caption:
          "Le domaine (en violet) est le triangle délimité par les deux axes (x = 0 et y = 0) et la droite x + y = 1 : pour chaque x entre 0 et 1, y monte de 0 à 1 − x, ce qui donne directement les bornes de l'intégrale itérée.",
      },
      answer: String.raw`$R$ est le triangle de sommets $(0, 0)$, $(1, 0)$ et $(0, 1)$, décrit par $0 \leq x \leq 1$, $0 \leq y \leq 1 - x$, et

$$\iint_R (1 - x)y^2 \, \mathrm{d}y\,\mathrm{d}x = \int_0^1 \frac{(1 - x)^4}{3}\,\mathrm{d}x = \frac{1}{15}.$$`,
      examTips: [
        String.raw`Le graphique du domaine est **demandé explicitement** : trace-le, hachure le triangle et nomme les trois sommets — c'est une partie du barème quasi gratuite, ne la saute pas.`,
        String.raw`Piège classique de signe : la primitive de $(1 - x)^4$ est $-\frac{(1 - x)^5}{5}$, pas $+\frac{(1 - x)^5}{5}$. Si ton résultat final sort négatif alors que l'intégrande est positive sur $R$, c'est ce signe qui a sauté.`,
        String.raw`3 points seulement : vise 10 à 12 minutes. Si le temps le permet, la vérification par l'ordre d'intégration inverse est le contrôle le plus fiable — même résultat exigé.`,
      ],
      exerciseRefs: ["8.4", "8.5"],
    },
  ],
};
