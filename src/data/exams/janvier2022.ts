import type { Exam } from "./types";

export const exam: Exam = {
  id: "janvier-2022",
  title: "Examen de janvier 2022",
  subtitle: "Sujet complet avec éléments de correction manuscrits",
  official: false,
  pdf: "/pdf/examens/janvier-2022-corrige.pdf",
  durationMin: 180,
  totalPoints: 40,
  questions: [
    {
      id: "q1",
      number: 1,
      title: "Critère d'indépendance linéaire (démonstration)",
      points: 3,
      chapters: [4],
      kind: "demo",
      statement: String.raw`Des vecteurs $X_1, \dots, X_p$ sont linéairement dépendants $\iff$ il existe $\lambda_1, \dots, \lambda_p \in \mathbb{R}$ non tous nuls tels que $\lambda_1 X_1 + \dots + \lambda_p X_p = O$.

**Démonstration :**`,
      hints: [
        String.raw`C'est la démonstration du **critère d'indépendance linéaire** (chapitre 4, slide 140), l'une des 15 démonstrations du référentiel. L'énoncé est une équivalence « $\iff$ » : ta preuve doit obligatoirement contenir **deux directions**, chacune annoncée par ($\Rightarrow$) ou ($\Leftarrow$).`,
        String.raw`Sens ($\Rightarrow$) : pars de la **définition** de la dépendance (l'un des vecteurs est combinaison linéaire des autres — dis « quitte à renuméroter, c'est $X_1$ ») et fais tout passer du même côté de l'égalité. Quel coefficient apparaît devant $X_1$ ?`,
        String.raw`Sens ($\Leftarrow$) : parmi les $\lambda_i$ non tous nuls, il y en a un non nul — disons $\lambda_1 \neq 0$. Que peux-tu faire avec un coefficient non nul que tu ne peux pas faire avec zéro ? Isole $X_1$.`,
      ],
      steps: [
        {
          title: "Situer la question : la démo 4.1 du référentiel",
          content: String.raw`Cette question de restitution vaut 3 points : c'est le **critère d'indépendance linéaire** (slide 140). La preuve complète, commentée pas à pas, est sur la fiche **Démonstration 4.1** — ici on en résume le squelette, exactement ce qu'il faut écrire sur ta copie.

📖 **Rappel (définition, slide 139).** Des vecteurs $X_1, \dots, X_p$ de $\mathbb{R}^n$ sont **linéairement dépendants** lorsque l'un d'eux est combinaison linéaire des autres ; sinon ils sont linéairement indépendants.

Le théorème remplace cette définition (pénible à tester vecteur par vecteur) par **une seule équation** : existe-t-il une combinaison linéaire nulle à coefficients non tous nuls ? Comme c'est un « $\iff$ », le plan est imposé : deux paragraphes, un par direction.`,
        },
        {
          title: "Sens ⇒ : tout passer du même côté et exhiber le −1",
          content: String.raw`Suppose $X_1, \dots, X_p$ linéairement dépendants. Par définition, l'un d'eux est combinaison linéaire des autres ; **quitte à renuméroter**, on peut supposer que c'est $X_1$ :

$$ X_1 = \alpha_2 X_2 + \dots + \alpha_p X_p. $$

En faisant tout passer dans le membre de gauche :

$$ (-1)X_1 + \alpha_2 X_2 + \dots + \alpha_p X_p = O. $$

C'est une combinaison linéaire nulle de coefficients $\lambda_1 = -1$, $\lambda_2 = \alpha_2, \dots, \lambda_p = \alpha_p$. Le point qui rapporte les points : **justifier « non tous nuls »** en pointant explicitement $\lambda_1 = -1 \neq 0$ (peu importe que les $\alpha_i$ soient nuls ou non, un seul coefficient non nul suffit).`,
        },
        {
          title: "Sens ⇐ : isoler grâce au coefficient non nul",
          content: String.raw`Suppose maintenant $\lambda_1 X_1 + \dots + \lambda_p X_p = O$ avec les $\lambda_i$ **non tous nuls**. Quitte à renuméroter, disons $\lambda_1 \neq 0$. On isole $\lambda_1 X_1$ puis on divise par $\lambda_1$ — division **licite car** $\lambda_1 \neq 0$, et il faut l'écrire :

$$ X_1 = -\frac{\lambda_2}{\lambda_1} X_2 - \dots - \frac{\lambda_p}{\lambda_1} X_p. $$

Ainsi $X_1$ est combinaison linéaire des autres vecteurs : par définition, $X_1, \dots, X_p$ sont linéairement dépendants. Les deux directions sont prouvées, l'équivalence est établie. $\blacksquare$`,
        },
        {
          title: "Vérification express et lien avec la pratique",
          content: String.raw`Mini-test dans $\mathbb{R}^2$ avec $X_1 = (1, 0)^T$ et $X_2 = (3, 0)^T$ : de $X_2 = 3X_1$ on tire $3X_1 + (-1)X_2 = O$, coefficients $(3, -1)$ non tous nuls ✓ ; réciproquement, de $3X_1 - X_2 = O$ avec $3 \neq 0$ on isole $X_1 = \frac{1}{3}X_2$ ✓.

📖 C'est la forme contraposée de ce critère (« indépendants $\iff$ la seule combinaison nulle est la combinaison triviale ») qui justifie la méthode de **tous** les exercices d'indépendance : poser la combinaison nulle, traduire en système homogène, résoudre par Gauss.`,
        },
      ],
      answer: String.raw`Preuve en deux directions. ($\Rightarrow$) Si les vecteurs sont dépendants, l'un d'eux (disons $X_1$) est combinaison linéaire des autres ; en passant tout à gauche on obtient une combinaison nulle dont le coefficient de $X_1$ vaut $-1 \neq 0$, donc des coefficients non tous nuls. ($\Leftarrow$) Si $\lambda_1 X_1 + \dots + \lambda_p X_p = O$ avec, disons, $\lambda_1 \neq 0$, on divise par $\lambda_1$ et $X_1 = -\frac{\lambda_2}{\lambda_1}X_2 - \dots - \frac{\lambda_p}{\lambda_1}X_p$ : les vecteurs sont dépendants. $\blacksquare$`,
      examTips: [
        String.raw`3 points pour une preuve de 6 lignes connue d'avance : c'est le meilleur rapport points/temps du sujet — récite-la en 8 minutes maximum, en début d'examen.`,
        String.raw`Le correcteur vérifie trois choses précises : les deux directions annoncées ($\Rightarrow$/$\Leftarrow$), la justification « non tous nuls car $\lambda_1 = -1 \neq 0$ », et la mention « division licite car $\lambda_1 \neq 0$ ». Chaque oubli coûte des points.`,
        String.raw`Ne confonds pas définition et critère : partir de « il existe des coefficients non tous nuls » pour le sens $\Rightarrow$ reviendrait à supposer ce qu'il faut prouver.`,
      ],
      demoRef: "4.1",
      exerciseRefs: ["4.1", "4.2", "4.3"],
    },
    {
      id: "q2",
      number: 2,
      title: "Inégalité de Minkowski : énoncé et preuve",
      points: 3,
      chapters: [5],
      kind: "demo",
      statement: String.raw`Énoncez et prouvez l'inégalité de Minkowski.

**Démonstration :**`,
      hints: [
        String.raw`Chapitre 5 (produit scalaire). Attention à la consigne : il faut **énoncer** le théorème (pour tous $X, Y \in \mathbb{R}^n$…) avant de le prouver — un énoncé absent ou faux plombe la note. C'est l'autre nom de l'inégalité triangulaire.`,
        String.raw`Une racine carrée ne se développe pas : compare plutôt les **carrés**. Développe $\|X + Y\|^2 = (X+Y)\bullet(X+Y)$ par bilinéarité du produit scalaire et regarde quel terme il faut majorer.`,
        String.raw`La chaîne de majorations à retenir : d'abord $X \bullet Y \leq |X \bullet Y|$ (un réel est majoré par sa valeur absolue), **puis** Cauchy–Schwarz. Tu dois aboutir à $\|X+Y\|^2 \leq (\|X\| + \|Y\|)^2$ avant de prendre la racine — en justifiant pourquoi tu as le droit.`,
      ],
      steps: [
        {
          title: "Énoncer le théorème (exigé par la question)",
          content: String.raw`**Théorème (inégalité de Minkowski, slide 186).** Quels que soient les vecteurs $X, Y \in \mathbb{R}^n$ :

$$ \|X + Y\| \;\leq\; \|X\| + \|Y\|. $$

C'est l'**inégalité triangulaire** : aller « en ligne droite » de l'origine à $X + Y$ coûte moins que le détour par $X$ puis $Y$. La preuve complète et commentée est sur la fiche **Démonstration 5.2** ; voici le résumé fidèle à restituer.`,
        },
        {
          title: "Stratégie : comparer les carrés",
          content: String.raw`On ne sait pas développer $\|X+Y\|$ (racine d'une somme), mais on sait développer son **carré** grâce au produit scalaire. On prouve donc $\|X+Y\|^2 \leq (\|X\| + \|Y\|)^2$, puis on prendra la racine à la fin.

📖 **Rappel.** $\|Z\|^2 = Z \bullet Z$, et le produit scalaire est bilinéaire et commutatif. D'où :

$$ \|X + Y\|^2 = (X+Y) \bullet (X+Y) = \|X\|^2 + 2\, X \bullet Y + \|Y\|^2. $$

Comme $(\|X\| + \|Y\|)^2 = \|X\|^2 + 2\,\|X\|\,\|Y\| + \|Y\|^2$, tout se joue sur le terme du milieu : il faut majorer $X \bullet Y$ par $\|X\|\,\|Y\|$ — le métier de Cauchy–Schwarz.`,
        },
        {
          title: "La chaîne de majorations : valeur absolue puis Cauchy–Schwarz",
          content: String.raw`Deux majorations successives, dans cet ordre :

- $X \bullet Y \leq |X \bullet Y|$, car tout réel est majoré par sa valeur absolue (étape **obligatoire** : Cauchy–Schwarz majore $|X \bullet Y|$, pas $X \bullet Y$ qui peut être négatif) ;
- $|X \bullet Y| \leq \|X\|\,\|Y\|$ par l'**inégalité de Cauchy–Schwarz** (slide 185), à nommer explicitement.

D'où :

$$ \|X+Y\|^2 \leq \|X\|^2 + 2\,\|X\|\,\|Y\| + \|Y\|^2 = \left(\|X\| + \|Y\|\right)^2. $$

On a reconnu l'identité remarquable $a^2 + 2ab + b^2 = (a+b)^2$ avec $a = \|X\|$, $b = \|Y\|$.`,
        },
        {
          title: "Prendre la racine (en justifiant) et conclure",
          content: String.raw`Les deux membres de $\|X+Y\|^2 \leq (\|X\| + \|Y\|)^2$ sont **positifs ou nuls**, et la fonction racine carrée est **croissante** sur $[0, +\infty[$ : elle conserve donc l'ordre, et

$$ \|X + Y\| \leq \|X\| + \|Y\|. \qquad \blacksquare $$

**Vérification express** avec $X = (1,2,3)^T$, $Y = (4,5,6)^T$ : $\|X+Y\| = \sqrt{155} \approx 12{,}45$ et $\|X\| + \|Y\| = \sqrt{14} + \sqrt{77} \approx 12{,}52$ — l'inégalité tient. ✓`,
        },
      ],
      answer: String.raw`**Énoncé :** pour tous $X, Y \in \mathbb{R}^n$, $\|X+Y\| \leq \|X\| + \|Y\|$. **Preuve :** on développe $\|X+Y\|^2 = \|X\|^2 + 2\,X\bullet Y + \|Y\|^2$, on majore $X \bullet Y \leq |X \bullet Y| \leq \|X\|\,\|Y\|$ (valeur absolue puis Cauchy–Schwarz), on reconnaît $(\|X\|+\|Y\|)^2$, et on prend la racine carrée (licite : deux membres positifs, racine croissante). $\blacksquare$`,
      examTips: [
        String.raw`« Énoncez et prouvez » : la moitié des points peut se perdre sur l'énoncé. Écris le quantificateur (« quels que soient $X, Y \in \mathbb{R}^n$ ») et l'inégalité exacte avant toute preuve.`,
        String.raw`Trois justifications que le correcteur traque : la ligne $X \bullet Y \leq |X \bullet Y|$, le nom « Cauchy–Schwarz » cité au bon moment, et l'argument de croissance de la racine pour enlever les carrés.`,
        String.raw`Phrase-mémo de la preuve : « développer, valeur absolue, Cauchy–Schwarz, carré parfait, racine ». Cinq gestes, huit minutes.`,
      ],
      demoRef: "5.2",
      exerciseRefs: ["5.4", "5.1"],
    },
    {
      id: "q3",
      number: 3,
      title: "Vrai ou faux : matrices, systèmes, rangs et valeurs propres",
      points: 6,
      chapters: [1, 2, 3, 4, 6],
      kind: "vraifaux",
      statement: String.raw`Les affirmations suivantes, sont-elles vraies ou fausses ?

**Attention :** vous obtenez $+\frac{1}{2}$ point par bonne réponse et $-\frac{1}{4}$ point par mauvaise réponse. Ne cochez donc pas au hasard ! Si la somme de tous les points obtenus est négative, vous auriez 0 point pour cette question.

**1.** Soit $A$ une matrice de dimension $(n \times p)$ et soit $B$ une matrice de dimension $(q \times r)$.

- Si les produits $AB$ et $BA$ existent, alors $A^T + B$ existe
- Si le produit $AB$ existe, alors $(AB + B^T A^T)$ est symétrique
- Si $A$ et $B$ sont orthogonales, alors le produit $AB$ existe

**2.** Soient $A$ et $B$ deux matrices de dimension $(n \times n)$.

- Si $A$ et $B$ commutent, alors $(AB)^T = A^T B^T$
- Si $A$ est diagonalisable, alors $A$ est inversible
- $\det(-A) = -\det(A)$

**3.** Soit $AX = B$ un système de $p$ équations linéaires à $n$ inconnues.

- Si $\operatorname{rg}(A \mid B) > \operatorname{rg}(A)$, alors le système est impossible
- Si le système possède une solution unique, alors $p = n$
- Si $B = O$, alors soit le système est impossible, soit il possède une infinité de solutions

**4.** Soit $A$ une matrice de dimension $(n \times n)$ et soit $f$ telle que $f(X) = AX$ pour $X \in \mathbb{R}^n$.

- Si $\operatorname{noyau}(f) = \{O\}$, alors la matrice $A$ est inversible
- Si $A$ est inversible, alors ses valeurs propres sont toutes $\neq 0$
- Si $\operatorname{rg}(A) < n$, alors $\det A = 0$`,
      hints: [
        String.raw`Douze affirmations, quatre thèmes : dimensions et produits (ch. 1), matrices carrées et transposée (ch. 1 et 6), théorème de Rouché-Fontené (ch. 2 et 4), noyau/déterminant/valeurs propres (ch. 3, 4, 6). Pour chaque « si… alors… », demande-toi : est-ce un théorème du cours, ou puis-je fabriquer un contre-exemple ?`,
        String.raw`Groupe 1 : traduis chaque existence de produit en égalité de dimensions ($AB$ existe $\iff p = q$, et $AB$ est alors $(n \times r)$). Écris noir sur blanc les dimensions de $A^T$, de $B$, de $AB$ et de $B^T A^T$ — plusieurs pièges du groupe sont purement dimensionnels.`,
        String.raw`Pour casser une affirmation générale, les contre-exemples les plus simples suffisent : la matrice nulle, l'identité $I$ (ou $-I$), une matrice $2 \times 2$ diagonale, ou un système du type « $x = 1$ et $2x = 2$ ».`,
        String.raw`Groupe 4 : tout passe par la chaîne d'équivalences du cours pour $A$ carrée — $\operatorname{noyau} = \{O\} \iff \operatorname{rg} A = n \iff \det A \neq 0 \iff A$ inversible — et par le fait que $\lambda = 0$ est valeur propre $\iff \det A = 0$.`,
      ],
      steps: [
        {
          title: "Groupe 1 — dimensions et produits : V, F, F",
          content: String.raw`📖 **Rappel.** $AB$ existe $\iff$ le nombre de colonnes de $A$ égale le nombre de lignes de $B$ ; ici $A$ est $(n \times p)$, $B$ est $(q \times r)$, donc $AB$ existe $\iff p = q$, et $AB$ est alors de dimension $(n \times r)$.

**Affirmation 1 — VRAI.** $AB$ existe $\Rightarrow p = q$ ; $BA$ existe $\Rightarrow r = n$. Donc $B$ est de dimension $(q \times r) = (p \times n)$, exactement comme $A^T$ : la somme $A^T + B$ existe. ✓

**Affirmation 2 — FAUX.** Si $AB$ existe, $AB$ est $(n \times r)$ et $B^T A^T = (AB)^T$ est $(r \times n)$ : la **somme n'existe que si** $n = r$, ce que l'hypothèse ne garantit pas. Contre-exemple : $A$ de dimension $(2 \times 3)$ et $B$ de dimension $(3 \times 4)$ — $AB$ est $(2 \times 4)$, $B^T A^T$ est $(4 \times 2)$, la somme est indéfinie, donc sûrement pas symétrique. (Le piège : quand $n = r$, $M + M^T$ est bien symétrique — mais l'affirmation prétend que c'est **toujours** le cas.)

**Affirmation 3 — FAUX.** Une matrice orthogonale est **carrée** ($M^T M = I$), donc $A$ est $(n \times n)$ et $B$ est $(q \times q)$ — mais rien n'impose $n = q$. Contre-exemple : $A = I_2$ et $B = I_3$ sont orthogonales et $AB$ n'existe pas.`,
        },
        {
          title: "Groupe 2 — matrices carrées : V, F, F",
          content: String.raw`**Affirmation 1 — VRAI.** 📖 La transposée d'un produit **renverse l'ordre** : $(AB)^T = B^T A^T$. Si $A$ et $B$ commutent ($AB = BA$), alors

$$ (AB)^T = (BA)^T = A^T B^T. \; \checkmark $$

Sans la commutation, ce serait faux en général — c'est elle qui permet d'échanger $A$ et $B$ avant de transposer.

**Affirmation 2 — FAUX.** Diagonalisable ne veut pas dire inversible : la valeur propre $0$ est autorisée. Contre-exemple : $A = \begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix}$ est déjà diagonale (donc diagonalisable), mais $\det A = 0$ : non inversible. (La matrice nulle marche aussi.) Les deux notions sont indépendantes : inversible $\iff$ $0$ n'est pas valeur propre ; diagonalisable $\iff$ il existe une base de vecteurs propres.

**Affirmation 3 — FAUX.** 📖 Multiplier **une** ligne par $c$ multiplie le déterminant par $c$ ; multiplier les $n$ lignes par $-1$ donne

$$ \det(-A) = (-1)^n \det A. $$

L'égalité $\det(-A) = -\det A$ ne vaut que pour $n$ **impair**. Contre-exemple avec $n = 2$ : $A = I_2$, $\det(-I_2) = 1 \neq -1 = -\det I_2$.`,
        },
        {
          title: "Groupe 3 — Rouché-Fontené : V, F, F",
          content: String.raw`📖 **Rappel (théorème de Rouché-Fontené).** $AX = B$ possède au moins une solution $\iff \operatorname{rg}(A \mid B) = \operatorname{rg} A$ ; en cas d'existence, la solution est unique si $\operatorname{rg} A = n$, et il y en a une infinité ($n - \operatorname{rg} A$ paramètres) si $\operatorname{rg} A < n$.

**Affirmation 1 — VRAI.** $\operatorname{rg}(A \mid B) > \operatorname{rg} A$ signifie que la colonne $B$ ajoute une direction nouvelle : $B$ n'est pas combinaison linéaire des colonnes de $A$, aucune solution possible. C'est exactement le critère d'impossibilité du théorème. ✓

**Affirmation 2 — FAUX.** Solution unique $\iff \operatorname{rg} A = \operatorname{rg}(A \mid B) = n$ — cela ne dit rien sur le nombre d'équations $p$, qui peut dépasser $n$ (équations redondantes). Contre-exemple : le système $\{x = 1,\; 2x = 2\}$ a $p = 2$ équations, $n = 1$ inconnue et l'unique solution $x = 1$.

**Affirmation 3 — FAUX.** Un système homogène $AX = O$ n'est **jamais impossible** : $X = O$ est toujours solution. Et il peut très bien n'avoir que celle-là : pour $A = I_n$, la solution est unique. L'alternative proposée (« impossible ou infinité ») oublie précisément le cas de la solution unique triviale.`,
        },
        {
          title: "Groupe 4 — noyau, valeurs propres, déterminant : V, V, V",
          content: String.raw`Les trois affirmations sont trois maillons de la même chaîne d'équivalences pour une matrice carrée $(n \times n)$ :

$$ A \text{ inversible} \iff \det A \neq 0 \iff \operatorname{rg} A = n \iff \operatorname{noyau}(f) = \{O\}. $$

**Affirmation 1 — VRAI.** $\operatorname{noyau}(f) = \{O\}$ signifie que $AX = O$ n'a que la solution triviale, donc $\operatorname{rg} A = n$ (aucune variable libre), donc $\det A \neq 0$ et $A$ est inversible. ✓ (Direct aussi : si $AX = O$ avec $X \neq O$ et si $A^{-1}$ existait, alors $X = A^{-1}O = O$, contradiction.)

**Affirmation 2 — VRAI.** Si $\lambda = 0$ était valeur propre, il existerait $X \neq O$ avec $AX = 0 \cdot X = O$ : le noyau serait non trivial et $A$ non inversible — contradiction. Autre argument : $\det A = \lambda_1 \lambda_2 \cdots \lambda_n \neq 0$ force chaque $\lambda_i \neq 0$. ✓

**Affirmation 3 — VRAI.** $\operatorname{rg} A < n$ signifie que les $n$ colonnes de $A$ sont linéairement dépendantes ; un déterminant à colonnes dépendantes est nul : $\det A = 0$. ✓ (C'est la contraposée de $\det A \neq 0 \Rightarrow \operatorname{rg} A = n$.)`,
        },
        {
          title: "Vérification finale : cohérence d'ensemble",
          content: String.raw`Relis tes douze verdicts d'un bloc : **V F F / V F F / V F F / V V V**.

Contrôle de cohérence : les affirmations du groupe 4 réutilisent les mêmes équivalences que 2.2 (diagonalisable vs inversible) et 3.2 (rang et unicité) — tes réponses doivent raconter la **même histoire** : inversible $\iff \det \neq 0 \iff$ rang plein $\iff$ noyau trivial $\iff$ $0$ n'est pas valeur propre. Si l'un de tes verdicts contredit cette chaîne, c'est lui qu'il faut revoir.

Avec le barème ($+\frac{1}{2}$ par bonne réponse), les douze bonnes réponses donnent bien les 6 points affichés.`,
        },
      ],
      answer: String.raw`**Groupe 1 :** vrai, faux (la somme $AB + B^T A^T$ n'existe que si $n = r$), faux (orthogonales $\Rightarrow$ carrées, mais de tailles possiblement différentes). **Groupe 2 :** vrai ($(AB)^T = (BA)^T = A^T B^T$), faux (contre-exemple $\operatorname{diag}(1,0)$), faux ($\det(-A) = (-1)^n \det A$). **Groupe 3 :** vrai (Rouché-Fontené), faux (contre-exemple $x=1$, $2x=2$), faux ($X = O$ est toujours solution du système homogène). **Groupe 4 :** vrai, vrai, vrai (chaîne inversible $\iff \det \neq 0 \iff$ rang $n$ $\iff$ noyau $\{O\}$, et $0$ n'est pas valeur propre).`,
      examTips: [
        String.raw`Barème négatif : ne coche que si tu as un **argument** (théorème du cours ou contre-exemple explicite). Une case laissée vide vaut 0, une erreur vaut $-\frac{1}{4}$.`,
        String.raw`Réflexe « dimensions d'abord » : sur les affirmations du groupe 1, écris systématiquement les formats de chaque produit et de chaque somme avant de penser aux propriétés — la moitié des pièges est là.`,
        String.raw`Garde en tête ta boîte à contre-exemples : $O$, $I$, $-I$, $\operatorname{diag}(1,0)$ et le système $\{x=1,\; 2x=2\}$ règlent la plupart des « si… alors… » faux du cours.`,
        String.raw`Budget temps : 6 points mais 12 mini-questions — environ 15 minutes. On ne demande que les croix, mais fais tes brouillons de dimensions posément pour éviter les étourderies.`,
      ],
      exerciseRefs: ["1.2", "4.10", "6.6"],
    },
    {
      id: "q4",
      number: 4,
      title: "Sous-vectoriel de R⁴ : base, dimension et Gram–Schmidt",
      points: 6,
      chapters: [4, 5],
      kind: "exercice",
      statement: String.raw`Dans $\mathbb{R}^4$, considérons l'ensemble

$$ V = \{(x, y, z, w) \in \mathbb{R}^4 : 2x + 3z = w\} $$

- (a) Montrez que $V$ est un sous-vectoriel de $\mathbb{R}^4$. (1.5 points)
- (b) Donnez une base et la dimension de $V$. Est-ce que la base trouvée forme également une base pour $\mathbb{R}^4$ ? Pourquoi (pas) ? (1.5 points)
- (c) Est-ce que la base de la question (b) est orthonormée ? Si non, appliquez la procédure de Gram–Schmidt pour obtenir une base orthonormée. (3 points)`,
      hints: [
        String.raw`(a) Un sous-vectoriel se prouve avec **deux conditions de stabilité** (somme et multiple scalaire) — sans oublier de dire que $V$ est non vide ($O \in V$). Prends deux vecteurs génériques de $V$, chacun vérifiant sa contrainte $2x + 3z = w$, et vérifie que la somme et $cX$ la vérifient encore.`,
        String.raw`(b) La contrainte permet d'exprimer $w = 2x + 3z$ : écris un vecteur générique de $V$ en fonction des variables libres $x$, $y$, $z$, puis sépare-le en une combinaison linéaire de trois vecteurs fixes. Compte les variables libres pour deviner la dimension.`,
        String.raw`(c) Teste les trois produits scalaires deux à deux : tu devrais trouver $X_1 \bullet X_2 = 0$, $X_2 \bullet X_3 = 0$ mais $X_1 \bullet X_3 = 6 \neq 0$ (avec l'ordre $X_1 = (1,0,0,2)^T$, $X_2 = (0,1,0,0)^T$, $X_3 = (0,0,1,3)^T$) — Gram–Schmidt est donc obligatoire, mais un seul vecteur devra réellement être corrigé.`,
        String.raw`Contrôle en cours de route : après orthogonalisation, $Y_3$ doit être orthogonal à $Y_1$ **et** rester dans $V$ (sa 4e composante doit valoir $2 \times$ sa 1re $+ \, 3 \times$ sa 3e). Si ce n'est pas le cas, reprends le coefficient $\frac{X_3 \bullet Y_1}{Y_1 \bullet Y_1}$.`,
      ],
      steps: [
        {
          title: "(a) Réécrire la contrainte et annoncer le plan",
          content: String.raw`$V$ est l'ensemble des vecteurs de $\mathbb{R}^4$ dont les composantes vérifient l'équation linéaire homogène $2x + 3z - w = 0$.

📖 **Rappel (critère de sous-vectoriel).** $V \subseteq \mathbb{R}^n$ est un sous-vectoriel $\iff$ $V$ est non vide (on montre $O \in V$) et $V$ est stable pour les **deux** opérations :

- $X_1, X_2 \in V \Rightarrow X_1 + X_2 \in V$ ;
- $X \in V, c \in \mathbb{R} \Rightarrow cX \in V$.

D'abord $O = (0,0,0,0)^T \in V$ car $2 \cdot 0 + 3 \cdot 0 = 0$. ✓ Restent les deux stabilités — c'est le « deux conditions ! » qui rapporte les 1.5 points.`,
        },
        {
          title: "(a) Stabilité pour la somme et pour le multiple scalaire",
          content: String.raw`**Somme.** Soient $X_1 = (x_1, y_1, z_1, w_1)^T \in V$ et $X_2 = (x_2, y_2, z_2, w_2)^T \in V$ : donc $2x_1 + 3z_1 = w_1$ ($L_1$) et $2x_2 + 3z_2 = w_2$ ($L_2$). En additionnant $L_1 + L_2$ :

$$ 2(x_1 + x_2) + 3(z_1 + z_2) = w_1 + w_2, $$

ce qui dit exactement que $X_1 + X_2 = (x_1+x_2,\; y_1+y_2,\; z_1+z_2,\; w_1+w_2)^T$ vérifie la contrainte : $X_1 + X_2 \in V$. ✓

**Multiple scalaire.** Pour $c \in \mathbb{R}$, en multipliant $L_1$ par $c$ : $2(cx_1) + 3(cz_1) = cw_1$, donc $cX_1 \in V$. ✓

Conclusion : $V$ est un sous-vectoriel de $\mathbb{R}^4$. **Variante élégante** (celle du corrigé manuscrit) : $V = \{X \in \mathbb{R}^4 : AX = O\}$ avec $A = \begin{pmatrix} 2 & 0 & 3 & -1 \end{pmatrix}$, c'est le **noyau** de $A$, et un noyau est toujours un sous-vectoriel.`,
        },
        {
          title: "(b) Paramétrer V et extraire une base",
          content: String.raw`Dans $V$, la contrainte donne $w = 2x + 3z$ : les variables $x$, $y$, $z$ sont **libres** et $w$ est déterminée. Un vecteur générique de $V$ s'écrit donc

$$ \begin{pmatrix} x \\ y \\ z \\ 2x + 3z \end{pmatrix} = x \begin{pmatrix} 1 \\ 0 \\ 0 \\ 2 \end{pmatrix} + y \begin{pmatrix} 0 \\ 1 \\ 0 \\ 0 \end{pmatrix} + z \begin{pmatrix} 0 \\ 0 \\ 1 \\ 3 \end{pmatrix}, \qquad x, y, z \in \mathbb{R}. $$

Les trois vecteurs $X_1 = (1,0,0,2)^T$, $X_2 = (0,1,0,0)^T$, $X_3 = (0,0,1,3)^T$ **engendrent** $V$. Ils sont **linéairement indépendants** : une combinaison $x X_1 + y X_2 + z X_3 = O$ a pour trois premières composantes $x = y = z = 0$ (chacun porte un « 1 » là où les autres ont des « 0 »).

Base de $V$ : $\{X_1, X_2, X_3\}$, donc $\dim V = 3$.`,
        },
        {
          title: "(b) Est-ce une base de R⁴ ? Non — argument de dimension",
          content: String.raw`Non. 📖 Toute base de $\mathbb{R}^4$ compte exactement $\dim \mathbb{R}^4 = 4$ vecteurs : trois vecteurs ne peuvent pas engendrer $\mathbb{R}^4$ (ils n'engendrent que $V$, de dimension 3).

Contre-exemple concret : $(0, 0, 0, 1)^T \notin V$ (car $2 \cdot 0 + 3 \cdot 0 = 0 \neq 1$), donc ce vecteur de $\mathbb{R}^4$ n'est pas combinaison linéaire de $X_1, X_2, X_3$. $V$ est un sous-vectoriel **strict** : un hyperplan de $\mathbb{R}^4$.`,
        },
        {
          title: "(c) La base est-elle orthonormée ? Test des produits scalaires",
          content: String.raw`📖 Une base est **orthonormée** si les vecteurs sont deux à deux orthogonaux ($X_i \bullet X_j = 0$ pour $i \neq j$) **et** tous de norme 1.

$$ X_1 \bullet X_2 = 0, \qquad X_2 \bullet X_3 = 0, \qquad X_1 \bullet X_3 = 1 \cdot 0 + 0 + 0 + 2 \cdot 3 = 6 \neq 0. $$

De plus $\|X_1\| = \sqrt{1 + 4} = \sqrt{5} \neq 1$. La base n'est **ni orthogonale ni normée** : on applique Gram–Schmidt. Bonne nouvelle : comme $X_2$ est déjà orthogonal aux deux autres, seul $X_3$ devra vraiment être corrigé.`,
        },
        {
          title: "(c) Gram–Schmidt : orthogonaliser Y₁, Y₂, Y₃",
          content: String.raw`📖 **Procédé de Gram–Schmidt :** on garde le premier vecteur, puis on retire de chaque nouveau vecteur ses composantes le long des $Y$ déjà construits :

$$ Y_1 = X_1 = (1, 0, 0, 2)^T. $$

$$ Y_2 = X_2 - \frac{X_2 \bullet Y_1}{Y_1 \bullet Y_1}\, Y_1 = X_2 - \frac{0}{5}\, Y_1 = (0, 1, 0, 0)^T. $$

$$ Y_3 = X_3 - \frac{X_3 \bullet Y_1}{Y_1 \bullet Y_1}\, Y_1 - \frac{X_3 \bullet Y_2}{Y_2 \bullet Y_2}\, Y_2 = X_3 - \frac{6}{5}\, Y_1 - \frac{0}{1}\, Y_2, $$

$$ Y_3 = \begin{pmatrix} 0 \\ 0 \\ 1 \\ 3 \end{pmatrix} - \frac{6}{5} \begin{pmatrix} 1 \\ 0 \\ 0 \\ 2 \end{pmatrix} = \begin{pmatrix} -6/5 \\ 0 \\ 1 \\ 3/5 \end{pmatrix}. $$

**Contrôles :** $Y_3 \bullet Y_1 = -\frac{6}{5} + 2 \cdot \frac{3}{5} = 0$ ✓, $Y_3 \bullet Y_2 = 0$ ✓, et $Y_3 \in V$ car $2 \cdot \left(-\frac{6}{5}\right) + 3 \cdot 1 = \frac{3}{5}$ = quatrième composante ✓.`,
        },
        {
          title: "(c) Normaliser : la base orthonormée de V",
          content: String.raw`Dernière étape : diviser chaque $Y_i$ par sa norme.

$$ \|Y_1\| = \sqrt{1 + 4} = \sqrt{5}, \qquad \|Y_2\| = 1, \qquad \|Y_3\| = \sqrt{\tfrac{36}{25} + 1 + \tfrac{9}{25}} = \sqrt{\tfrac{70}{25}} = \frac{\sqrt{70}}{5}. $$

Astuce d'écriture : $Y_3 = \frac{1}{5}(-6, 0, 5, 3)^T$ et $\|(-6,0,5,3)^T\| = \sqrt{36 + 25 + 9} = \sqrt{70}$. D'où la base orthonormée de $V$ :

$$ Z_1 = \frac{1}{\sqrt{5}} \begin{pmatrix} 1 \\ 0 \\ 0 \\ 2 \end{pmatrix}, \qquad Z_2 = \begin{pmatrix} 0 \\ 1 \\ 0 \\ 0 \end{pmatrix}, \qquad Z_3 = \frac{1}{\sqrt{70}} \begin{pmatrix} -6 \\ 0 \\ 5 \\ 3 \end{pmatrix}. $$

**Vérification finale :** normes 1 par construction, produits scalaires deux à deux nuls (la normalisation ne change pas l'orthogonalité), et chaque $Z_i$ vérifie encore $2x + 3z = w$ : c'est bien une base orthonormée **de $V$**. ✓`,
        },
      ],
      answer: String.raw`(a) $O \in V$ et $V$ est stable par somme et par multiple scalaire (les contraintes s'additionnent et se multiplient) — ou directement : $V$ est le noyau de la matrice $(2 \;\, 0 \;\, 3 \; -1)$. (b) Base $\{(1,0,0,2)^T,\, (0,1,0,0)^T,\, (0,0,1,3)^T\}$, $\dim V = 3$ ; ce n'est pas une base de $\mathbb{R}^4$, qui exige 4 vecteurs ($\dim \mathbb{R}^4 = 4$). (c) Non orthonormée ($X_1 \bullet X_3 = 6 \neq 0$) ; Gram–Schmidt donne $Z_1 = \frac{1}{\sqrt{5}}(1,0,0,2)^T$, $Z_2 = (0,1,0,0)^T$, $Z_3 = \frac{1}{\sqrt{70}}(-6,0,5,3)^T$.`,
      examTips: [
        String.raw`(a) Les 1.5 points exigent les **deux** stabilités et la non-vacuité : une seule condition vérifiée = moitié des points au mieux. La variante « noyau d'une matrice » est la plus rapide si tu cites le théorème.`,
        String.raw`(c) vaut la moitié de la question : garde 12-15 minutes. Ordonne les vecteurs pour que Gram–Schmidt soit court — ici, avec $X_2$ orthogonal aux deux autres, un seul coefficient est non nul.`,
        String.raw`Après chaque $Y_i$, contrôle 10 secondes : produit scalaire avec les précédents $= 0$, et appartenance à $V$ (la 4e composante vaut $2x + 3z$). Une erreur de fraction détectée là te sauve les points de la normalisation.`,
        String.raw`Laisse les normes en racines exactes ($\sqrt{5}$, $\sqrt{70}$) : une base orthonormée s'écrit proprement avec $\frac{1}{\sqrt{5}}$ et $\frac{1}{\sqrt{70}}$ en facteur devant des vecteurs entiers.`,
      ],
      exerciseRefs: ["5.3", "5.2", "4.9"],
    },
    {
      id: "q5",
      number: 5,
      title: "Matrice avec paramètre : inversibilité, rang, diagonalisation",
      points: 6,
      chapters: [3, 4, 6],
      kind: "exercice",
      statement: String.raw`Pour $a \in \mathbb{R}$, on considère la matrice

$$ A = \begin{pmatrix} -1 & a & -1 \\ -3 & 5 & -1 \\ -3 & a & 1 \end{pmatrix} $$

- (a) Pour quelle(s) valeur(s) du paramètre $a$ est-elle inversible ? Discutez du rang de $A$ en fonction de la/les valeur(s) de $a$ trouvées précédemment. Pouvez-vous en déduire la dimension du noyau de $A$ ? (2 points)
- (b) Pour $a = 3$, calculez une matrice $S$ qui diagonalise $A$. (4 points)`,
      hints: [
        String.raw`(a) Inversible $\iff \det A \neq 0$ : calcule $\det A$ en fonction de $a$ (développement selon une ligne ou règle de Sarrus), puis relie déterminant, rang et dimension du noyau par $\dim \operatorname{noyau}(A) = n - \operatorname{rg} A$.`,
        String.raw`Contrôle du calcul : tu devrais trouver $\det A = 8a - 20$, un polynôme de degré 1 en $a$ — une seule valeur critique. Pour cette valeur, cherche un mineur $2 \times 2$ non nul pour trancher entre rang 1 et rang 2.`,
        String.raw`(b) Diagonaliser = trouver les valeurs propres (racines de $\det(A - \lambda I) = 0$) puis un vecteur propre par valeur propre, et ranger ces vecteurs en colonnes de $S$. Le polynôme caractéristique est de degré 3 : teste $\lambda = 1$ comme racine évidente, puis factorise.`,
        String.raw`Contrôle des valeurs propres avant de chercher les vecteurs : leur somme doit valoir $\operatorname{tr} A = -1 + 5 + 1 = 5$ et leur produit $\det A = 8 \cdot 3 - 20 = 4$. Attention : une valeur propre est double — il te faudra **deux** vecteurs propres indépendants pour elle, sinon pas de diagonalisation.`,
      ],
      steps: [
        {
          title: "(a) Calculer det A en fonction de a",
          content: String.raw`📖 $A$ est inversible $\iff \det A \neq 0$ : tout part du déterminant. Développons selon la **première ligne** :

$$ \det A = -1 \begin{vmatrix} 5 & -1 \\ a & 1 \end{vmatrix} - a \begin{vmatrix} -3 & -1 \\ -3 & 1 \end{vmatrix} + (-1) \begin{vmatrix} -3 & 5 \\ -3 & a \end{vmatrix}. $$

Les trois mineurs : $\begin{vmatrix} 5 & -1 \\ a & 1 \end{vmatrix} = 5 + a$, $\begin{vmatrix} -3 & -1 \\ -3 & 1 \end{vmatrix} = -3 - 3 = -6$, $\begin{vmatrix} -3 & 5 \\ -3 & a \end{vmatrix} = -3a + 15$.

$$ \det A = -(5 + a) - a(-6) - (-3a + 15) = -5 - a + 6a + 3a - 15 = 8a - 20. $$`,
        },
        {
          title: "(a) Inversibilité, rang et dimension du noyau",
          content: String.raw`$$ \det A = 8a - 20 = 0 \iff a = \frac{20}{8} = \frac{5}{2}. $$

**Inversibilité :** $A$ est inversible pour tout $a \neq \frac{5}{2}$, non inversible pour $a = \frac{5}{2}$.

**Rang :** si $a \neq \frac{5}{2}$, $\det A \neq 0$ donc les 3 colonnes sont indépendantes : $\operatorname{rg} A = 3$. Si $a = \frac{5}{2}$, $\operatorname{rg} A \leq 2$ ; or le mineur $\begin{vmatrix} -1 & 5/2 \\ -3 & 5 \end{vmatrix} = -5 + \frac{15}{2} = \frac{5}{2} \neq 0$, donc $\operatorname{rg} A = 2$ exactement.

**Noyau :** 📖 pour une matrice $(n \times n)$, $\dim \operatorname{noyau}(A) = n - \operatorname{rg} A$. Donc

$$ \dim \operatorname{noyau}(A) = 3 - \operatorname{rg} A = \begin{cases} 0 & \text{si } a \neq \frac{5}{2}, \\ 1 & \text{si } a = \frac{5}{2}. \end{cases} $$`,
        },
        {
          title: "(b) Poser le problème pour a = 3 : chercher S telle que S⁻¹AS = D",
          content: String.raw`Pour $a = 3$ :

$$ A = \begin{pmatrix} -1 & 3 & -1 \\ -3 & 5 & -1 \\ -3 & 3 & 1 \end{pmatrix}. $$

📖 **Diagonaliser** $A$, c'est trouver $S$ inversible telle que $S^{-1} A S = D$ diagonale ; les colonnes de $S$ sont des vecteurs propres et $D$ porte les valeurs propres correspondantes. Attention : $A$ n'est **pas symétrique**, donc pas de raccourci $S^{-1} = S^T$ ici — il faut la démarche complète : polynôme caractéristique, valeurs propres, vecteurs propres.`,
        },
        {
          title: "(b) Polynôme caractéristique",
          content: String.raw`$$ \det(A - \lambda I) = \begin{vmatrix} -1-\lambda & 3 & -1 \\ -3 & 5-\lambda & -1 \\ -3 & 3 & 1-\lambda \end{vmatrix}. $$

Développement selon la première ligne :

$$ (-1-\lambda)\big[(5-\lambda)(1-\lambda) + 3\big] - 3\big[-3(1-\lambda) - 3\big] - \big[-9 + 3(5-\lambda)\big]. $$

Calcul des crochets : $(5-\lambda)(1-\lambda) + 3 = \lambda^2 - 6\lambda + 8$ ; $-3(1-\lambda) - 3 = 3\lambda - 6$ ; $-9 + 15 - 3\lambda = 6 - 3\lambda$. Donc

$$ \det(A - \lambda I) = (-1-\lambda)(\lambda^2 - 6\lambda + 8) - 3(3\lambda - 6) - (6 - 3\lambda) = -\lambda^3 + 5\lambda^2 - 8\lambda + 4. $$

L'équation caractéristique est $\lambda^3 - 5\lambda^2 + 8\lambda - 4 = 0$.`,
        },
        {
          title: "(b) Valeurs propres : racine évidente puis factorisation",
          content: String.raw`$\lambda = 1$ est racine évidente : $1 - 5 + 8 - 4 = 0$. ✓ On factorise par $(\lambda - 1)$ :

$$ \lambda^3 - 5\lambda^2 + 8\lambda - 4 = (\lambda - 1)(\lambda^2 - 4\lambda + 4) = (\lambda - 1)(\lambda - 2)^2. $$

(Pour trouver $\lambda^2 - 4\lambda + 4$ : identification des coefficients ou division polynomiale.) Valeurs propres : $\lambda_1 = 1$ (simple) et $\lambda_2 = \lambda_3 = 2$ (**double**).

**Contrôles :** somme $= 1 + 2 + 2 = 5 = \operatorname{tr} A$ ✓ ; produit $= 1 \cdot 2 \cdot 2 = 4 = \det A = 8 \cdot 3 - 20$ ✓. Comme $\lambda = 2$ est double, la diagonalisation exige que son espace propre soit de dimension 2 — à vérifier à l'étape suivante.`,
        },
        {
          title: "(b) Vecteur propre pour λ = 1",
          content: String.raw`On résout $(A - I)X = O$ :

$$ \begin{pmatrix} -2 & 3 & -1 \\ -3 & 4 & -1 \\ -3 & 3 & 0 \end{pmatrix} \begin{pmatrix} x \\ y \\ z \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix}. $$

La troisième ligne donne $-3x + 3y = 0$, soit $y = x$. La première devient $-2x + 3x - z = 0$, soit $z = x$. Contrôle avec la deuxième : $-3x + 4x - x = 0$ ✓. L'espace propre est la droite engendrée par

$$ X_1 = (1, 1, 1)^T. $$

**Vérification :** $A X_1 = (-1+3-1,\; -3+5-1,\; -3+3+1)^T = (1, 1, 1)^T = 1 \cdot X_1$. ✓`,
        },
        {
          title: "(b) Espace propre pour λ = 2 (double) : dimension 2",
          content: String.raw`On résout $(A - 2I)X = O$ :

$$ A - 2I = \begin{pmatrix} -3 & 3 & -1 \\ -3 & 3 & -1 \\ -3 & 3 & -1 \end{pmatrix} : $$

les trois lignes sont **identiques** ! Une seule équation : $-3x + 3y - z = 0$, soit $z = 3y - 3x$, avec $x$ et $y$ libres : l'espace propre est de **dimension 2** — la diagonalisation est possible. Deux vecteurs propres indépendants ($x=1, y=0$ puis $x=0, y=1$) :

$$ X_2 = (1, 0, -3)^T, \qquad X_3 = (0, 1, 3)^T. $$

**Vérifications :** $A X_2 = (-1+0+3,\; -3+0+3,\; -3+0-3)^T = (2, 0, -6)^T = 2X_2$ ✓ ; $A X_3 = (3-3,\; 5-3,\; 3+3)^T = (0, 2, 6)^T = 2X_3$ ✓.`,
        },
        {
          title: "(b) Assembler S et conclure",
          content: String.raw`On range les vecteurs propres en colonnes :

$$ S = \begin{pmatrix} 1 & 1 & 0 \\ 1 & 0 & 1 \\ 1 & -3 & 3 \end{pmatrix}, \qquad S^{-1} A S = D = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 2 & 0 \\ 0 & 0 & 2 \end{pmatrix}. $$

$S$ est bien inversible : $\det S = 1(0 + 3) - 1(3 - 1) + 0 = 3 - 2 = 1 \neq 0$ ✓ (les trois vecteurs propres sont indépendants).

L'ordre des colonnes de $S$ doit correspondre à l'ordre des valeurs propres dans $D$ — toute autre disposition cohérente (ou tout multiple non nul des colonnes) est également correcte.`,
        },
      ],
      answer: String.raw`(a) $\det A = 8a - 20$ : $A$ est inversible $\iff a \neq \frac{5}{2}$. Rang : $\operatorname{rg} A = 3$ si $a \neq \frac{5}{2}$, $\operatorname{rg} A = 2$ si $a = \frac{5}{2}$ (mineur $2\times2$ non nul). Noyau : $\dim \operatorname{noyau}(A) = 3 - \operatorname{rg} A$, soit $0$ si $a \neq \frac{5}{2}$ et $1$ si $a = \frac{5}{2}$. (b) Pour $a = 3$ : valeurs propres $1$ et $2$ (double), et par exemple $S = \begin{pmatrix} 1 & 1 & 0 \\ 1 & 0 & 1 \\ 1 & -3 & 3 \end{pmatrix}$ donne $S^{-1}AS = \operatorname{diag}(1, 2, 2)$.`,
      examTips: [
        String.raw`Recopie la matrice avec le plus grand soin : elle est truffée de signes « moins » et une seule erreur de signe fausse le déterminant, puis toute la suite. Trente secondes de vérification de la copie = 6 points sauvés.`,
        String.raw`(b) vaut 4 points : après le polynôme caractéristique, contrôle immédiatement trace et déterminant ($\sum \lambda_i = \operatorname{tr} A$, $\prod \lambda_i = \det A$) avant d'attaquer les vecteurs propres — c'est le meilleur détecteur d'erreur de calcul du chapitre.`,
        String.raw`Valeur propre double = point de vigilance : vérifie que l'espace propre est de dimension 2 (ici les trois lignes de $A - 2I$ sont identiques) et dis-le explicitement — c'est la justification que $A$ est diagonalisable.`,
        String.raw`Vérifie chaque vecteur propre par un produit $AX = \lambda X$ (10 secondes chacun). Et n'inverse pas $S$ inutilement : la question demande $S$, pas $S^{-1}$.`,
      ],
      exerciseRefs: ["4.6", "6.2", "6.5"],
    },
    {
      id: "q6",
      number: 6,
      title: "Application linéaire donnée sur une base : matrice et image",
      points: 5,
      chapters: [1, 4],
      kind: "exercice",
      statement: String.raw`Considérons les vecteurs

$$ U = \begin{pmatrix} 0 \\ 1 \\ 1 \end{pmatrix}, \qquad V = \begin{pmatrix} 1 \\ 3 \\ 0 \end{pmatrix}, \qquad W = \begin{pmatrix} 2 \\ 0 \\ 2 \end{pmatrix}, $$

et une application linéaire $f : \mathbb{R}^3 \to \mathbb{R}^3$ définie par

$$ f(U) = \begin{pmatrix} 1 \\ 2 \\ -1 \end{pmatrix}, \qquad f(V) = \begin{pmatrix} 7 \\ 3 \\ 4 \end{pmatrix}, \qquad f(W) = \begin{pmatrix} 0 \\ 2 \\ -2 \end{pmatrix}, $$

- (a) Donnez la matrice $A$ qui représente cette transformation linéaire (3.5 points).
- (b) Pour quelle(s) valeur(s) de $a \in \mathbb{R}$ le vecteur $(3a, -2, 1)^T$ appartient-il au sous-vectoriel généré par les colonnes de $A$ (1.5 points) ?`,
      hints: [
        String.raw`(a) $f(X) = AX$ pour une matrice $A$ inconnue. Les trois conditions sur $f(U), f(V), f(W)$ se condensent en **une seule égalité matricielle** $A \cdot S = Y$, où $S$ a pour colonnes $U, V, W$ et $Y$ a pour colonnes leurs images. Comment isoler $A$ ? (Attention à l'ordre : le produit matriciel n'est pas commutatif.)`,
        String.raw`$A = Y S^{-1}$ (et surtout pas $S^{-1} Y$ !). Calcule $S^{-1}$ par Gauss–Jordan sur $(S \mid I)$ ou par la comatrice ; contrôle en route : $\det S = -8$.`,
        String.raw`(b) Commence par calculer $\det A$ : s'il est nul, les colonnes n'engendrent pas $\mathbb{R}^3$ tout entier et l'appartenance devient une vraie condition sur $a$. Repère deux colonnes indépendantes qui engendrent l'image, puis écris $(3a, -2, 1)^T$ comme combinaison de ces deux colonnes : les 2e et 3e composantes déterminent les coefficients, la 1re impose $a$.`,
      ],
      steps: [
        {
          title: "(a) Traduire les trois conditions en une égalité matricielle",
          content: String.raw`📖 Toute application linéaire de $\mathbb{R}^3$ dans $\mathbb{R}^3$ s'écrit $f(X) = AX$ pour une matrice $A$ de dimension $(3 \times 3)$ — c'est le théorème de représentation du chapitre 4. Les trois données $AU = f(U)$, $AV = f(V)$, $AW = f(W)$ se regroupent colonne par colonne :

$$ A \underbrace{\begin{pmatrix} 0 & 1 & 2 \\ 1 & 3 & 0 \\ 1 & 0 & 2 \end{pmatrix}}_{S = (U \; V \; W)} = \underbrace{\begin{pmatrix} 1 & 7 & 0 \\ 2 & 3 & 2 \\ -1 & 4 & -2 \end{pmatrix}}_{Y = (f(U) \; f(V) \; f(W))}. $$

Si $S$ est inversible, alors $A = Y S^{-1}$. **Attention à l'ordre** : on multiplie par $S^{-1}$ **à droite** (car $S$ est à droite de $A$) — écrire $S^{-1}Y$ est l'erreur classique, sanctionnée car le produit n'est pas commutatif.`,
        },
        {
          title: "(a) Inverser S",
          content: String.raw`D'abord $\det S$ (développement selon la première ligne) :

$$ \det S = 0 \begin{vmatrix} 3 & 0 \\ 0 & 2 \end{vmatrix} - 1 \begin{vmatrix} 1 & 0 \\ 1 & 2 \end{vmatrix} + 2 \begin{vmatrix} 1 & 3 \\ 1 & 0 \end{vmatrix} = -2 + 2(-3) = -8 \neq 0 : $$

$S$ est inversible ($U$, $V$, $W$ forment une base de $\mathbb{R}^3$). Par la comatrice (ou par Gauss–Jordan sur $(S \mid I)$) :

$$ S^{-1} = \frac{1}{\det S} \operatorname{com}(S)^T = \frac{1}{8} \begin{pmatrix} -6 & 2 & 6 \\ 2 & 2 & -2 \\ 3 & -1 & 1 \end{pmatrix}. $$

**Contrôle :** $S \cdot S^{-1} = I$ — par exemple, ligne 1 de $S$ fois colonne 1 de $S^{-1}$ : $\frac{1}{8}(0 \cdot (-6) + 1 \cdot 2 + 2 \cdot 3) = \frac{8}{8} = 1$ ✓, et ligne 1 fois colonne 2 : $\frac{1}{8}(0 + 2 - 2) = 0$ ✓.`,
        },
        {
          title: "(a) Calculer A = Y S⁻¹",
          content: String.raw`$$ A = \frac{1}{8} \begin{pmatrix} 1 & 7 & 0 \\ 2 & 3 & 2 \\ -1 & 4 & -2 \end{pmatrix} \begin{pmatrix} -6 & 2 & 6 \\ 2 & 2 & -2 \\ 3 & -1 & 1 \end{pmatrix} = \frac{1}{8} \begin{pmatrix} 8 & 16 & -8 \\ 0 & 8 & 8 \\ 8 & 8 & -16 \end{pmatrix} = \begin{pmatrix} 1 & 2 & -1 \\ 0 & 1 & 1 \\ 1 & 1 & -2 \end{pmatrix}. $$

**Vérification (indispensable, 30 secondes) :** on réinjecte les trois vecteurs de départ.

- $AU = (0 + 2 - 1,\; 0 + 1 + 1,\; 0 + 1 - 2)^T = (1, 2, -1)^T = f(U)$ ✓
- $AV = (1 + 6 + 0,\; 0 + 3 + 0,\; 1 + 3 + 0)^T = (7, 3, 4)^T = f(V)$ ✓
- $AW = (2 + 0 - 2,\; 0 + 0 + 2,\; 2 + 0 - 4)^T = (0, 2, -2)^T = f(W)$ ✓`,
        },
        {
          title: "(b) Identifier le sous-vectoriel engendré par les colonnes de A",
          content: String.raw`Les colonnes de $A$ sont $C_1 = (1, 0, 1)^T$, $C_2 = (2, 1, 1)^T$, $C_3 = (-1, 1, -2)^T$. Engendrent-elles $\mathbb{R}^3$ tout entier ? Calculons $\det A$ :

$$ \det A = 1 \begin{vmatrix} 1 & 1 \\ 1 & -2 \end{vmatrix} - 2 \begin{vmatrix} 0 & 1 \\ 1 & -2 \end{vmatrix} + (-1) \begin{vmatrix} 0 & 1 \\ 1 & 1 \end{vmatrix} = -3 + 2 + 1 = 0. $$

Donc $\operatorname{rg} A < 3$ : l'image de $f$ n'est **pas** $\mathbb{R}^3$, et l'appartenance de $(3a, -2, 1)^T$ est une vraie condition. Comme $C_1$ et $C_2$ ne sont pas proportionnels, $\operatorname{rg} A = 2$ et le sous-vectoriel engendré est le **plan** engendré par $C_1, C_2$. Contrôle de la dépendance : $C_3 = -3C_1 + C_2$ (en effet $-3(1,0,1)^T + (2,1,1)^T = (-1, 1, -2)^T$ ✓), donc $C_3$ n'apporte rien.`,
        },
        {
          title: "(b) Écrire l'appartenance et résoudre en a",
          content: String.raw`$(3a, -2, 1)^T$ appartient au plan $\iff$ il existe $\lambda_1, \lambda_2$ tels que

$$ \begin{pmatrix} 3a \\ -2 \\ 1 \end{pmatrix} = \lambda_1 \begin{pmatrix} 1 \\ 0 \\ 1 \end{pmatrix} + \lambda_2 \begin{pmatrix} 2 \\ 1 \\ 1 \end{pmatrix} \iff \begin{cases} \lambda_1 + 2\lambda_2 = 3a \\ \lambda_2 = -2 \\ \lambda_1 + \lambda_2 = 1 \end{cases} $$

Les deux dernières équations (sans paramètre !) donnent $\lambda_2 = -2$ puis $\lambda_1 = 1 - \lambda_2 = 3$. La première impose alors la condition de compatibilité :

$$ 3a = \lambda_1 + 2\lambda_2 = 3 - 4 = -1 \iff a = -\frac{1}{3}. $$

**Vérification :** $3C_1 - 2C_2 = (3 - 4,\; -2,\; 3 - 2)^T = (-1, -2, 1)^T$, et pour $a = -\frac{1}{3}$ le vecteur cible vaut bien $(-1, -2, 1)^T$. ✓`,
        },
      ],
      answer: String.raw`(a) $A = Y S^{-1} = \begin{pmatrix} 1 & 2 & -1 \\ 0 & 1 & 1 \\ 1 & 1 & -2 \end{pmatrix}$ (avec $S = (U \; V \; W)$, $\det S = -8$). (b) $\det A = 0$, $\operatorname{rg} A = 2$ : le sous-vectoriel engendré par les colonnes est le plan engendré par $(1,0,1)^T$ et $(2,1,1)^T$ ; le vecteur $(3a, -2, 1)^T$ y appartient $\iff a = -\frac{1}{3}$ (avec $\lambda_1 = 3$, $\lambda_2 = -2$).`,
      examTips: [
        String.raw`L'ordre $A = Y S^{-1}$ (et non $S^{-1} Y$) est LE piège de la question — 3.5 points en jeu. Retiens : $AS = Y$, donc on « enlève » $S$ par la droite.`,
        String.raw`La vérification $AU = f(U)$, $AV = f(V)$, $AW = f(W)$ prend 30 secondes et certifie tes 3.5 points : fais-la systématiquement avant de passer à (b).`,
        String.raw`(b) Réflexe : calcule $\det A$ d'abord. S'il était non nul, les colonnes engendreraient $\mathbb{R}^3$ et la réponse serait « tout $a$ » — c'est le déterminant nul qui rend la question intéressante.`,
        String.raw`Résous le petit système en commençant par les équations **sans paramètre** (les 2e et 3e composantes) : les coefficients tombent, et la 1re composante livre directement $a$.`,
      ],
      exerciseRefs: ["4.11", "4.12", "2.4"],
    },
    {
      id: "q7",
      number: 7,
      title: "Chaîne de Markov : probabilité de problème à longue échéance",
      points: 3,
      chapters: [1, 6],
      kind: "exercice",
      statement: String.raw`Dans un processus de production, des problèmes peuvent se présenter. Si un jour, il n'y a pas de problème, il y a une chance sur 10 que le lendemain, un problème surgisse, tandis que s'il y a un problème, il y a une chance sur deux que le lendemain, ce soit aussi le cas. Aujourd'hui, il n'y a pas de problème. Quelle est la probabilité de connaître un problème à longue échéance ?`,
      hints: [
        String.raw`C'est une **chaîne de Markov** à deux états (« pas de problème » / « problème »). Commence par poser la matrice de transition $A$ dont chaque **colonne** décrit le lendemain d'un état et somme à 1, ainsi que l'état initial $X_0$.`,
        String.raw`« À longue échéance » = comportement de $X_t = A^t X_0$ quand $t \to \infty$. Le cours dit que la limite est portée par le vecteur propre associé à la valeur propre $\lambda = 1$. Pour une matrice $2 \times 2$, la seconde valeur propre s'obtient gratuitement via la trace.`,
        String.raw`Résous $(A - I)\pi = O$ et normalise $\pi$ pour que ses composantes somment à 1 (ce sont des probabilités !). Contrôle : tu devrais trouver que l'état stable donne 5 fois plus de poids à « pas de problème » qu'à « problème ».`,
      ],
      steps: [
        {
          title: "Modéliser : matrice de transition et état initial",
          content: String.raw`Deux états : $N$ = « pas de problème », $P$ = « problème ». L'énoncé donne les probabilités de transition d'un jour au lendemain :

- depuis $N$ : problème demain avec probabilité $\frac{1}{10}$, donc pas de problème avec $\frac{9}{10}$ ;
- depuis $P$ : problème demain avec probabilité $\frac{1}{2}$, donc retour à la normale avec $\frac{1}{2}$.

📖 **Matrice de transition de Markov** (convention du cours : la colonne $j$ décrit le lendemain de l'état $j$, chaque colonne somme à 1, et $X_{t+1} = A X_t$) — en ordonnant les états $(N, P)$ :

$$ A = \begin{pmatrix} 0{,}9 & 0{,}5 \\ 0{,}1 & 0{,}5 \end{pmatrix}, \qquad X_0 = \begin{pmatrix} 1 \\ 0 \end{pmatrix} $$

($X_0$ : aujourd'hui, pas de problème avec certitude). **Contrôle :** $0{,}9 + 0{,}1 = 1$ ✓ et $0{,}5 + 0{,}5 = 1$ ✓.`,
        },
        {
          title: "Pourquoi la limite est un vecteur propre de valeur propre 1",
          content: String.raw`On cherche $\lim_{t \to \infty} X_t = \lim_{t \to \infty} A^t X_0$. Décomposons $X_0$ sur une base de vecteurs propres $(X_1, X_2)$ de $A$ : $X_0 = \alpha_1 X_1 + \alpha_2 X_2$, d'où

$$ A^t X_0 = \alpha_1 \lambda_1^t X_1 + \alpha_2 \lambda_2^t X_2. $$

📖 Une matrice de transition admet toujours $\lambda_1 = 1$ ; ici la seconde valeur propre s'obtient par la trace :

$$ \lambda_2 = \operatorname{tr} A - \lambda_1 = (0{,}9 + 0{,}5) - 1 = 0{,}4. $$

Comme $|\lambda_2| = 0{,}4 < 1$, le terme en $\lambda_2^t$ s'éteint : $\lim_{t \to \infty} X_t = \alpha_1 X_1$. La limite est proportionnelle au vecteur propre de $\lambda = 1$ — et comme chaque $X_t$ est un vecteur de probabilités, la limite doit sommer à 1.`,
        },
        {
          title: "Calculer l'état stable",
          content: String.raw`On résout $(A - I)\pi = O$ :

$$ A - I = \begin{pmatrix} -0{,}1 & 0{,}5 \\ 0{,}1 & -0{,}5 \end{pmatrix} \Rightarrow -0{,}1\, \pi_N + 0{,}5\, \pi_P = 0 \iff \pi_N = 5\, \pi_P. $$

(Les deux lignes sont opposées : une seule équation, comme toujours pour $\lambda = 1$.) Avec la normalisation $\pi_N + \pi_P = 1$ : $5\pi_P + \pi_P = 1$, d'où

$$ \pi_P = \frac{1}{6}, \qquad \pi_N = \frac{5}{6}. $$

**Vérification :** $A\pi$ a pour composantes $0{,}9 \cdot \frac{5}{6} + 0{,}5 \cdot \frac{1}{6} = \frac{4{,}5 + 0{,}5}{6} = \frac{5}{6}$ ✓ et $0{,}1 \cdot \frac{5}{6} + 0{,}5 \cdot \frac{1}{6} = \frac{1}{6}$ ✓ : on a bien $A\pi = \pi$.`,
        },
        {
          title: "Conclure (et remarquer que l'état initial ne compte pas)",
          content: String.raw`À longue échéance, la probabilité de connaître un problème vaut

$$ \pi_P = \frac{1}{6} \approx 0{,}17. $$

Remarque : comme $|\lambda_2| < 1$, **tout** état initial converge vers le même état stable — l'information « aujourd'hui, pas de problème » ne change pas la limite (elle intervient seulement dans le coefficient $\alpha_1$, et la conservation de la somme des probabilités garantit que la limite est toujours $\pi$). La réponse serait la même si aujourd'hui il y avait un problème.`,
        },
      ],
      answer: String.raw`Matrice de transition $A = \begin{pmatrix} 0{,}9 & 0{,}5 \\ 0{,}1 & 0{,}5 \end{pmatrix}$ (états : pas de problème / problème), $X_0 = (1, 0)^T$. Valeurs propres $1$ et $0{,}4$ ; l'état stable normalisé est $\pi = \left(\frac{5}{6}, \frac{1}{6}\right)^T$. Probabilité d'un problème à longue échéance : $\frac{1}{6} \approx 0{,}17$.`,
      examTips: [
        String.raw`Vérifie que chaque **colonne** de ta matrice de transition somme à 1 (convention $X_{t+1} = A X_t$ du cours). Une matrice écrite en lignes (convention transposée) inverse tout le calcul.`,
        String.raw`Pour du $2 \times 2$, ne développe pas le polynôme caractéristique : $\lambda_1 = 1$ est garantie pour une matrice de transition, et $\lambda_2 = \operatorname{tr} A - 1$. Gain : trois minutes.`,
        String.raw`N'oublie pas la **normalisation** $\pi_N + \pi_P = 1$ : un vecteur propre n'est défini qu'à un facteur près, et c'est la somme 1 qui en fait des probabilités. Réponse finale en fraction irréductible ($\frac{1}{6}$) ou en décimal à deux chiffres significatifs ($0{,}17$), comme exigé en page de garde.`,
      ],
      exerciseRefs: ["6.8", "6.7", "1.5"],
    },
    {
      id: "q8",
      number: 8,
      title: "Système linéaire avec paramètre : discussion et forme vectorielle",
      points: 5,
      chapters: [2, 3],
      kind: "exercice",
      statement: String.raw`Pour $a \in \mathbb{R}$, on considère le système d'équations linéaire

$$ \begin{cases} x - 2y + z = 1 \\ 2x - y + z = 3 \\ x + y + az = 2 \end{cases} $$

Cherchez les solutions de ce système en fonction du paramètre $a$ et écrivez-les sous forme vectorielle si possible.`,
      hints: [
        String.raw`Méthode standard du chapitre 2 : pose la matrice complétée $(A \mid B)$ et échelonne par Gauss en gardant $a$ en vie dans les calculs. Le pivot de la première colonne vaut déjà 1 : profite-en.`,
        String.raw`Premier geste : $L_2 \leftarrow L_2 - 2L_1$ et $L_3 \leftarrow L_3 - L_1$. Tu devrais voir apparaître deux lignes très semblables — que donne leur différence ?`,
        String.raw`Résultat de contrôle : l'échelonnement mène à la ligne $(0 \;\; 0 \;\; a \mid 0)$. La discussion porte donc sur $a = 0$ ou $a \neq 0$ — et remarque qu'aucun cas n'est impossible (compare les rangs de $A$ et de $(A \mid B)$).`,
      ],
      steps: [
        {
          title: "Poser la matrice complétée et éliminer x",
          content: String.raw`$$ (A \mid B) = \left(\begin{array}{ccc|c} 1 & -2 & 1 & 1 \\ 2 & -1 & 1 & 3 \\ 1 & 1 & a & 2 \end{array}\right) $$

Le pivot $(1,1)$ vaut 1 : on élimine $x$ des lignes 2 et 3.

$$ \xrightarrow{\substack{L_2 \leftarrow L_2 - 2L_1 \\ L_3 \leftarrow L_3 - L_1}} \left(\begin{array}{ccc|c} 1 & -2 & 1 & 1 \\ 0 & 3 & -1 & 1 \\ 0 & 3 & a - 1 & 1 \end{array}\right) $$

Les lignes 2 et 3 ont le même pivot 3 et le même second membre 1 : leur différence va presque tout annuler.`,
        },
        {
          title: "Échelonner : la ligne qui pilote la discussion",
          content: String.raw`$$ \xrightarrow{L_3 \leftarrow L_3 - L_2} \left(\begin{array}{ccc|c} 1 & -2 & 1 & 1 \\ 0 & 3 & -1 & 1 \\ 0 & 0 & a & 0 \end{array}\right) $$

Toute la discussion tient dans la dernière ligne : $a \cdot z = 0$.

📖 **Lecture par Rouché-Fontené :** le second membre de cette ligne est $0$, donc $\operatorname{rg}(A \mid B) = \operatorname{rg} A$ **quel que soit** $a$ : le système n'est jamais impossible. Si $a \neq 0$, $\operatorname{rg} A = 3 = n$ : solution unique. Si $a = 0$, $\operatorname{rg} A = 2 < 3$ : **simplement indéterminé** ($3 - 2 = 1$ paramètre libre).`,
        },
        {
          title: "Cas a ≠ 0 : solution unique par remontée",
          content: String.raw`La ligne 3 donne $az = 0$ avec $a \neq 0$, donc $z = 0$ (division licite car $a \neq 0$). On remonte :

- $L_2$ : $3y - z = 1 \Rightarrow 3y = 1 \Rightarrow y = \frac{1}{3}$ ;
- $L_1$ : $x = 1 + 2y - z = 1 + \frac{2}{3} = \frac{5}{3}$.

$$ S = \left\{ \begin{pmatrix} 5/3 \\ 1/3 \\ 0 \end{pmatrix} \right\} = \left\{ \frac{1}{3} \begin{pmatrix} 5 \\ 1 \\ 0 \end{pmatrix} \right\}. $$

**Vérification** dans le système de départ : $\frac{5}{3} - \frac{2}{3} + 0 = 1$ ✓ ; $\frac{10}{3} - \frac{1}{3} + 0 = 3$ ✓ ; $\frac{5}{3} + \frac{1}{3} + a \cdot 0 = 2$ ✓ (pour tout $a$).`,
        },
        {
          title: "Cas a = 0 : système simplement indéterminé",
          content: String.raw`Pour $a = 0$, la ligne 3 devient $0 = 0$ : il reste deux équations pour trois inconnues, une inconnue libre — prenons $y$.

- $L_2$ : $z = 3y - 1$ ;
- $L_1$ : $x = 1 + 2y - z = 1 + 2y - (3y - 1) = 2 - y$.

Sous **forme vectorielle** :

$$ S = \left\{ \begin{pmatrix} 2 \\ 0 \\ -1 \end{pmatrix} + y \begin{pmatrix} -1 \\ 1 \\ 3 \end{pmatrix} : y \in \mathbb{R} \right\} : $$

une droite de $\mathbb{R}^3$ (point particulier + direction). **Vérification** avec $y = 1$, soit $(1, 1, 2)^T$ : $1 - 2 + 2 = 1$ ✓ ; $2 - 1 + 2 = 3$ ✓ ; $1 + 1 + 0 = 2$ ✓. Et la direction $(-1, 1, 3)^T$ vérifie le système homogène : $-1 - 2 + 3 = 0$ ✓, $-2 - 1 + 3 = 0$ ✓, $-1 + 1 + 0 = 0$ ✓.`,
        },
        {
          title: "Récapituler la discussion",
          content: String.raw`$$ S = \begin{cases} \left\{ \frac{1}{3}(5, 1, 0)^T \right\} & \text{si } a \neq 0 \quad (\text{solution unique}), \\[2mm] \left\{ (2, 0, -1)^T + y(-1, 1, 3)^T : y \in \mathbb{R} \right\} & \text{si } a = 0 \quad (\text{simplement indéterminé}). \end{cases} $$

Cohérence d'ensemble : la solution unique du cas $a \neq 0$ appartient-elle à la droite du cas $a = 0$ ? Avec $y = \frac{1}{3}$ la droite donne $\left(2 - \frac{1}{3},\; \frac{1}{3},\; 3 \cdot \frac{1}{3} - 1\right)^T = \left(\frac{5}{3}, \frac{1}{3}, 0\right)^T$ — oui ! C'est normal : cette solution a $z = 0$, donc elle satisfait les trois équations **pour tout** $a$. Le raccord entre les deux cas est exactement cette solution « universelle ».`,
        },
      ],
      answer: String.raw`Après échelonnement, la dernière ligne est $(0 \;\, 0 \;\, a \mid 0)$ : le système n'est jamais impossible. Si $a \neq 0$ : solution unique $\left(\frac{5}{3}, \frac{1}{3}, 0\right)^T = \frac{1}{3}(5, 1, 0)^T$. Si $a = 0$ : système simplement indéterminé, $S = \{(2, 0, -1)^T + y(-1, 1, 3)^T : y \in \mathbb{R}\}$.`,
      examTips: [
        String.raw`« En fonction du paramètre » = le correcteur attend une **discussion structurée par cas**, chacun introduit par sa condition sur $a$, et une conclusion récapitulative. Un seul cas traité = la moitié des points envolée.`,
        String.raw`N'écris jamais $z = 0$ à partir de $az = 0$ sans préciser « car $a \neq 0$ » : cette justification EST le point de la discussion.`,
        String.raw`« Forme vectorielle » : point particulier + paramètre fois vecteur directeur. Vérifie séparément que le point vérifie le système complet et que la direction vérifie le système **homogène** — deux contrôles de 15 secondes qui détectent presque toutes les erreurs de remontée.`,
      ],
      exerciseRefs: ["2.2", "2.3", "3.6"],
    },
    {
      id: "q9",
      number: 9,
      title: "Intégrale double sur un domaine triangulaire",
      points: 3,
      chapters: [8],
      kind: "exercice",
      statement: String.raw`Calculez l'intégrale suivante et représentez graphiquement le domaine d'intégration.

$$ \int_0^3 \int_{x/2}^{2x} (e^y + 2xy) \, dy \, dx $$`,
      hints: [
        String.raw`Lis les bornes de l'intérieur vers l'extérieur : pour chaque $x$ entre 0 et 3, $y$ court de la droite $y = \frac{x}{2}$ à la droite $y = 2x$. Le domaine est le secteur compris entre ces deux droites, coupé par la verticale $x = 3$ — dessine-le avant tout calcul.`,
        String.raw`Intègre d'abord en $y$ **à $x$ fixé** : une primitive de $e^y + 2xy$ par rapport à $y$ est $e^y + xy^2$ (ici $x$ est une constante !). Évalue-la entre $y = \frac{x}{2}$ et $y = 2x$.`,
        String.raw`Résultat intermédiaire de contrôle : l'intégrale intérieure vaut $e^{2x} - e^{x/2} + \frac{15}{4}x^3$. Il ne reste qu'une intégrale simple en $x$ — attention aux primitives de $e^{2x}$ et $e^{x/2}$ (facteurs $\frac{1}{2}$ et $2$).`,
      ],
      steps: [
        {
          title: "Représenter le domaine d'intégration",
          content: String.raw`Les bornes disent : $0 \leq x \leq 3$ et, pour chaque $x$, $\frac{x}{2} \leq y \leq 2x$ (bornes cohérentes car $\frac{x}{2} \leq 2x$ dès que $x \geq 0$). Le domaine est donc

$$ D = \left\{ (x, y) : 0 \leq x \leq 3,\; \frac{x}{2} \leq y \leq 2x \right\} : $$

le **triangle** délimité par la droite « basse » $y = \frac{x}{2}$, la droite « haute » $y = 2x$ — toutes deux passant par l'origine — et la verticale $x = 3$. Ses sommets : $(0, 0)$, $\left(3, \frac{3}{2}\right)$ et $(3, 6)$. Sur ton graphique : trace les deux droites depuis l'origine, la verticale $x = 3$, et hachure la zone comprise entre les deux droites.`,
        },
        {
          title: "Intégrale intérieure : intégrer en y à x fixé",
          content: String.raw`📖 Dans une intégrale itérée, on intègre d'abord la variable intérieure ($y$), en traitant $x$ comme une **constante**. Une primitive de $e^y + 2xy$ en $y$ est $e^y + xy^2$. Donc

$$ \int_{x/2}^{2x} (e^y + 2xy)\, dy = \Big[ e^y + x y^2 \Big]_{y = x/2}^{y = 2x} = \left(e^{2x} + 4x^3\right) - \left(e^{x/2} + \frac{x^3}{4}\right), $$

car $x \cdot (2x)^2 = 4x^3$ et $x \cdot \left(\frac{x}{2}\right)^2 = \frac{x^3}{4}$. D'où

$$ \int_{x/2}^{2x} (e^y + 2xy)\, dy = e^{2x} - e^{x/2} + \frac{15}{4} x^3. $$`,
        },
        {
          title: "Intégrale extérieure : primitives en x",
          content: String.raw`$$ I = \int_0^3 \left( e^{2x} - e^{x/2} + \frac{15}{4}x^3 \right) dx. $$

📖 **Rappel :** $\int e^{kx}\, dx = \frac{1}{k} e^{kx} + C$. Donc les primitives sont $\frac{1}{2}e^{2x}$, $2e^{x/2}$ (attention : diviser par $\frac{1}{2}$, c'est multiplier par 2) et $\frac{15}{4} \cdot \frac{x^4}{4} = \frac{15}{16}x^4$ :

$$ I = \left[ \frac{1}{2} e^{2x} - 2 e^{x/2} + \frac{15}{16} x^4 \right]_0^3 = \left( \frac{1}{2}e^6 - 2e^{3/2} + \frac{15 \cdot 81}{16} \right) - \left( \frac{1}{2} - 2 + 0 \right). $$`,
        },
        {
          title: "Valeur exacte et valeur numérique",
          content: String.raw`$$ I = \frac{1}{2}e^6 - 2e^{3/2} + \frac{1215}{16} + \frac{3}{2}. $$

Numériquement : $e^6 \approx 403{,}4288$ donc $\frac{1}{2}e^6 \approx 201{,}7144$ ; $e^{3/2} \approx 4{,}4817$ donc $2e^{3/2} \approx 8{,}9634$ ; $\frac{1215}{16} = 75{,}9375$ ; et $\frac{3}{2} = 1{,}5$ :

$$ I \approx 201{,}7144 - 8{,}9634 + 75{,}9375 + 1{,}5 \approx 270{,}19. $$

**Contrôle de plausibilité :** l'intégrande est positif sur $D$ (car $y \geq 0$ sur le domaine), le résultat doit être positif ✓ ; et le terme dominant $\frac{1}{2}e^6 \approx 202$ donne le bon ordre de grandeur.`,
        },
      ],
      answer: String.raw`Le domaine est le triangle de sommets $(0,0)$, $\left(3, \frac{3}{2}\right)$, $(3, 6)$, compris entre les droites $y = \frac{x}{2}$ et $y = 2x$ et la verticale $x = 3$. L'intégrale intérieure vaut $e^{2x} - e^{x/2} + \frac{15}{4}x^3$, et

$$ I = \frac{1}{2}e^6 - 2e^{3/2} + \frac{1215}{16} + \frac{3}{2} \approx 270{,}19. $$`,
      examTips: [
        String.raw`Le graphique du domaine est **exigé par l'énoncé** et noté : deux droites par l'origine, la verticale $x = 3$, zone hachurée, sommets indiqués. Deux minutes, des points garantis.`,
        String.raw`Deux pièges d'intégration : la primitive de $e^{x/2}$ est $2e^{x/2}$ (pas $\frac{1}{2}e^{x/2}$), et dans l'intégrale intérieure $x$ est une **constante** — la primitive de $2xy$ en $y$ est bien $xy^2$.`,
        String.raw`N'oublie pas la borne inférieure $x = 0$ : $e^0 = 1$ fait apparaître le terme $-\left(\frac{1}{2} - 2\right) = +\frac{3}{2}$, souvent oublié. Donne la valeur exacte ET l'arrondi ($\approx 270{,}19$), conformément à la consigne de la page de garde.`,
      ],
      exerciseRefs: ["8.4", "8.5", "8.6"],
    },
  ],
};
