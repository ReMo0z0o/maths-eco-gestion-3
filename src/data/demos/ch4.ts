import type { Demonstration } from "./types";

export const demos: Demonstration[] = [
  {
    id: "4.1",
    chapter: 4,
    title: "Critère d'indépendance linéaire",
    slideRef: "Slide 140",
    exam: "Prouver le critère d'indépendance linéaire (théorème du slide 140)",
    statement: String.raw`**Théorème (critère d'indépendance linéaire, slide 140).** Des vecteurs $X_1, \dots, X_n$ sont linéairement dépendants $\iff$ il existe $\lambda_1, \dots, \lambda_n$ **non tous nuls** tels que

$$ \lambda_1 X_1 + \dots + \lambda_n X_n = O. $$

Formulation équivalente « côté indépendance » (slide 140, seconde forme — c'est la contraposée, celle qu'on utilise en pratique) : $X_1, \dots, X_n$ sont linéairement indépendants $\iff$ la seule combinaison linéaire égale à $O$ est celle dont tous les coefficients sont nuls :

$$ \lambda_1 X_1 + \dots + \lambda_n X_n = O \;\Rightarrow\; \lambda_1 = \dots = \lambda_n = 0. $$`,
    intuition: String.raw`C'est un « $\iff$ », donc deux directions. Sens $\Rightarrow$ : si un vecteur est combinaison des autres, on fait tout passer du même côté et le coefficient $-1$ devant ce vecteur garantit « non tous nuls ». Sens $\Leftarrow$ : si un coefficient $\lambda_1 \neq 0$, on peut diviser par lui et isoler $X_1$, qui devient combinaison linéaire des autres.`,
    steps: [
      {
        title: "Comprendre l'énoncé : de la définition au critère",
        content: String.raw`📖 **Rappel (définition, slide 139).** Les vecteurs $X_1, \dots, X_n$ de $\mathbb{R}^p$ sont dits **linéairement dépendants** lorsque l'un d'eux est combinaison linéaire des autres. Dans le cas contraire, ils sont dits **linéairement indépendants**.

La définition est claire mais pénible à tester : il faudrait vérifier, vecteur par vecteur, « celui-ci est-il combinaison des autres ? ». Le critère du slide 140 transforme cette question en **une seule équation** : $\lambda_1 X_1 + \dots + \lambda_n X_n = O$ avec des coefficients non tous nuls.

Le théorème affirme que les deux points de vue sont équivalents. C'est lui qui justifie la méthode de calcul de tous les exercices : poser la combinaison nulle, la traduire en système homogène, et regarder si la solution nulle est la seule.`,
      },
      {
        title: "Le plan de bataille : un « ⟺ » = deux paragraphes",
        content: String.raw`L'énoncé est une équivalence $\iff$, donc ta preuve doit contenir **deux directions**, chacune annoncée clairement :

- ($\Rightarrow$) tu pars de « dépendants » (au sens de la définition : un vecteur est combinaison des autres) et tu fabriques une combinaison nulle à coefficients non tous nuls ;
- ($\Leftarrow$) tu pars d'une combinaison nulle à coefficients non tous nuls et tu retrouves la définition (un vecteur combinaison des autres).

Retiens le squelette : $\Rightarrow$ = « tout passer du même côté », $\Leftarrow$ = « isoler le vecteur au coefficient non nul et diviser ». Chaque direction tient en trois lignes, mais il faut les deux.`,
      },
      {
        title: "Sens ⇒ : tout passer du même côté et exhiber le −1",
        content: String.raw`Suppose $X_1, \dots, X_n$ dépendants : par définition, l'un d'eux est combinaison linéaire des autres. Petite astuce de rédaction du cours : « quitte à renuméroter », tu peux supposer que c'est $X_1$ (sinon tu échanges les noms — ça ne change rien au problème) :

$$ X_1 = \alpha_2 X_2 + \dots + \alpha_n X_n. $$

En faisant tout passer à gauche :

$$ (-1)X_1 + \alpha_2 X_2 + \dots + \alpha_n X_n = O. $$

Te voilà avec une combinaison linéaire nulle. Il reste le point qui rapporte les points : **justifier « non tous nuls »**. Il suffit d'exhiber les coefficients : $\lambda_1 = -1 \neq 0$, $\lambda_2 = \alpha_2, \dots, \lambda_n = \alpha_n$. Peu importe que les $\alpha_i$ soient nuls ou non — un seul coefficient non nul suffit, et $\lambda_1 = -1$ fait l'affaire.`,
      },
      {
        title: "Sens ⇐ : isoler grâce au coefficient non nul",
        content: String.raw`Suppose maintenant $\lambda_1 X_1 + \dots + \lambda_n X_n = O$ avec les $\lambda_i$ **non tous nuls**. « Quitte à renuméroter », disons $\lambda_1 \neq 0$. Tu isoles $\lambda_1 X_1$ puis tu divises par $\lambda_1$ :

$$ X_1 = -\frac{\lambda_2}{\lambda_1} X_2 - \dots - \frac{\lambda_n}{\lambda_1} X_n. $$

Attention : la division n'est permise **que parce que** $\lambda_1 \neq 0$ — c'est TOUT l'argument, et il faut le dire explicitement dans ta copie (« licite car $\lambda_1 \neq 0$ »). Conclusion : $X_1$ est combinaison linéaire des autres, donc les vecteurs sont linéairement dépendants au sens de la définition.`,
      },
      {
        title: "Mini-exemple dans ℝ² pour ancrer le mécanisme",
        content: String.raw`Prends $X_1 = (1, 0)^T$ et $X_2 = (3, 0)^T$ (exemple du cours : même direction, donc dépendants).

- Sens $\Rightarrow$ : $X_2 = 3X_1$, donc en passant tout à gauche : $3X_1 + (-1)X_2 = O$. Coefficients $(3, -1)$ : non tous nuls grâce au $-1$. ✓
- Sens $\Leftarrow$ : de $3X_1 - X_2 = O$ avec le coefficient $3 \neq 0$, tu divises : $X_1 = \frac{1}{3} X_2$. Un vecteur est bien combinaison de l'autre. ✓

Tu vois les deux gestes en miniature : « tout passer d'un côté » dans un sens, « isoler et diviser » dans l'autre.`,
      },
      {
        title: "La seconde forme du critère (celle des exercices)",
        content: String.raw`Remarque du cours : on peut reformuler le critère « côté indépendance » —

$X_1, \dots, X_n$ indépendants $\iff$ $\big[\lambda_1 X_1 + \dots + \lambda_n X_n = O \Rightarrow \lambda_1 = \dots = \lambda_n = 0\big]$.

C'est exactement la même chose, écrite par **contraposition** (la négation logique des deux membres). C'est cette forme que tu utilises en pratique : pour tester l'indépendance, tu poses la combinaison nulle, tu résous le système homogène (Gauss, chapitre 2), et « seule la solution nulle » signifie « indépendants ». À l'examen, on te demande la preuve de la première forme — mais connaître les deux montre que tu as compris.`,
      },
    ],
    examProof: String.raw`**Théorème (slide 140).** Des vecteurs $X_1, \dots, X_n$ sont linéairement dépendants si et seulement s'il existe $\lambda_1, \dots, \lambda_n$ non tous nuls tels que $\lambda_1 X_1 + \dots + \lambda_n X_n = O$.

**Preuve.**

($\Rightarrow$) Supposons $X_1, \dots, X_n$ linéairement dépendants. Par définition, l'un d'eux est combinaison linéaire des autres ; quitte à renuméroter les vecteurs, on peut supposer que c'est $X_1$ :

$$ X_1 = \alpha_2 X_2 + \dots + \alpha_n X_n. $$

En faisant tout passer dans le membre de gauche :

$$ (-1)X_1 + \alpha_2 X_2 + \dots + \alpha_n X_n = O. $$

On obtient une combinaison linéaire nulle dont les coefficients $\lambda_1 = -1$, $\lambda_2 = \alpha_2, \dots, \lambda_n = \alpha_n$ sont non tous nuls, puisque $\lambda_1 = -1 \neq 0$.

($\Leftarrow$) Supposons $\lambda_1 X_1 + \dots + \lambda_n X_n = O$ avec $\lambda_1, \dots, \lambda_n$ non tous nuls ; quitte à renuméroter, on peut supposer $\lambda_1 \neq 0$. On isole $\lambda_1 X_1$ puis on divise par $\lambda_1$, ce qui est licite car $\lambda_1 \neq 0$ :

$$ X_1 = -\frac{\lambda_2}{\lambda_1} X_2 - \dots - \frac{\lambda_n}{\lambda_1} X_n. $$

Ainsi $X_1$ est combinaison linéaire des autres vecteurs : $X_1, \dots, X_n$ sont linéairement dépendants. $\blacksquare$`,
    pitfalls: [
      String.raw`Oublier de justifier « non tous nuls » dans le sens $\Rightarrow$ : il faut pointer explicitement le coefficient $\lambda_1 = -1 \neq 0$ devant le vecteur qu'on a fait passer de l'autre côté.`,
      String.raw`Dans le sens $\Leftarrow$, diviser par $\lambda_1$ sans avoir écrit « $\lambda_1 \neq 0$ » : cette hypothèse est TOUT l'argument — sans elle, la division est interdite.`,
      String.raw`Ne prouver qu'un seul sens : « $\iff$ » exige deux paragraphes distincts, annoncés par ($\Rightarrow$) et ($\Leftarrow$).`,
      String.raw`Confondre le critère avec la définition : la définition (slide 139) dit « l'un des vecteurs est combinaison linéaire des autres » ; l'existence de coefficients non tous nuls est un théorème qu'il faut démontrer, pas un point de départ.`,
    ],
  },
  {
    id: "4.2",
    chapter: 4,
    title: "Théorème de Steinitz (énoncé + preuve de (a))",
    slideRef: "Slide 143",
    exam: "Énoncer le théorème de Steinitz et prouver la partie (a)",
    statement: String.raw`**Théorème de Steinitz (slide 143).**

- a) Dans $\mathbb{R}^n$, $n+1$ vecteurs sont toujours linéairement dépendants.
- b) Parmi les combinaisons linéaires de $n$ vecteurs de $\mathbb{R}^p$, il y en a au plus $n$ qui sont linéairement indépendantes.

À l'examen : restituer l'énoncé **intégralement** — les parties (a) **et** (b) — puis prouver la partie (a).`,
    intuition: String.raw`L'équation vectorielle $\lambda_1 X_1 + \dots + \lambda_{n+1} X_{n+1} = O$, lue composante par composante, est un système homogène de $n$ équations à $n+1$ inconnues : plus d'inconnues que d'équations, donc au moins une variable libre et une solution non triviale — et le critère du slide 140 conclut que les vecteurs sont dépendants.`,
    steps: [
      {
        title: "Ce que dit le théorème : trop de vecteurs, forcément du superflu",
        content: String.raw`📖 **Rappel (slide 139).** Des vecteurs sont linéairement dépendants lorsque l'un d'eux est combinaison linéaire des autres.

La partie (a) dit qu'on ne peut pas caser plus de $n$ directions réellement nouvelles dans $\mathbb{R}^n$ : chaque vecteur n'a que $n$ « cases » pour stocker de l'information, donc le $(n+1)$-ième vecteur retombe forcément dans ce que les autres savaient déjà faire. Concrètement : dans le plan $\mathbb{R}^2$, 3 flèches sont **toujours** dépendantes ; dans l'espace $\mathbb{R}^3$, 4 flèches le sont toujours.

La partie (b) dit qu'en mélangeant $n$ ingrédients, impossible de créer plus de $n$ « saveurs indépendantes » : tout ce qu'on fabrique par combinaisons linéaires reste enfermé dans ce que les $n$ vecteurs de départ engendrent.

Réflexe d'examen avant tout calcul : 3 vecteurs dans $\mathbb{R}^2$, 4 vecteurs dans $\mathbb{R}^3$ → dépendants **sans aucun calcul**, par Steinitz (a).`,
      },
      {
        title: "Le squelette de la preuve de (a)",
        content: String.raw`Mémorise la chaîne : **vecteurs → système homogène → compter équations vs inconnues → variable libre → solution non nulle → critère**.

Toute la preuve est une **traduction** (l'équation vectorielle devient un système) suivie d'un **comptage** (plus d'inconnues que d'équations). La phrase magique du cours : « $n+1$ inconnues, $n$ équations → une variable libre → une solution non triviale ». Si tu retiens cette phrase, la rédaction se reconstruit toute seule.`,
      },
      {
        title: "Étape 1 — Poser l'équation vectorielle et la traduire en système",
        content: String.raw`Prends $n+1$ vecteurs quelconques $X_1, \dots, X_{n+1}$ de $\mathbb{R}^n$ et considère l'équation

$$ \lambda_1 X_1 + \dots + \lambda_{n+1} X_{n+1} = O. $$

Chaque vecteur possède $n$ composantes : en écrivant cette égalité **composante par composante**, tu obtiens un système **homogène** de $n$ équations aux $n+1$ inconnues $\lambda_1, \dots, \lambda_{n+1}$. Attention au renversement de point de vue : les vecteurs sont des données, ce sont les $\lambda_i$ qui sont les inconnues !

Mini-exemple dans $\mathbb{R}^2$ : pour $X_1 = (1, 2)^T$, $X_2 = (3, 4)^T$, $X_3 = (5, 6)^T$, l'équation $\lambda_1 X_1 + \lambda_2 X_2 + \lambda_3 X_3 = O$ donne le système de 2 équations à 3 inconnues $\lambda_1 + 3\lambda_2 + 5\lambda_3 = 0$ et $2\lambda_1 + 4\lambda_2 + 6\lambda_3 = 0$.`,
      },
      {
        title: "Étape 2 — L'argument de comptage (l'outil du chapitre 2)",
        content: String.raw`📖 **Rappel (chapitre 2).** Un système homogène est **toujours compatible** : la solution nulle $\lambda_1 = \dots = \lambda_{n+1} = 0$ convient. Après échelonnement par la méthode de Gauss, chaque équation porte au plus un pivot.

Compte : il y a au plus $n$ pivots (au plus un par équation, et il n'y a que $n$ équations), pour $n+1$ inconnues. Il reste donc au moins

$$ (n+1) - n = 1 $$

variable libre. Un système homogène compatible avec une variable libre possède une **infinité de solutions** : la variable libre peut prendre n'importe quelle valeur, en particulier une valeur non nulle.

C'est LE point à justifier proprement dans ta copie : ne saute pas du système à « il existe une solution non triviale » sans passer par le comptage pivots/inconnues.`,
      },
      {
        title: "Étape 3 — Conclure avec le critère du slide 140",
        content: String.raw`Parmi cette infinité de solutions, il en existe donc avec $(\lambda_1, \dots, \lambda_{n+1}) \neq (0, \dots, 0)$ : tu as fabriqué une combinaison linéaire nulle des $X_i$ à coefficients **non tous nuls**.

C'est exactement l'hypothèse du critère d'indépendance linéaire (slide 140, démonstration 4.1) : les vecteurs $X_1, \dots, X_{n+1}$ sont linéairement dépendants.

Remarque la belle mécanique du cours : la preuve de Steinitz **utilise** le critère du slide 140 — apprends les deux démonstrations dans cet ordre, et cite le critère au moment de conclure.`,
      },
      {
        title: "Et la partie (b) ? (énoncé exigé, preuve non exigée)",
        content: String.raw`Tu dois savoir **énoncer** (b), mais seule la preuve de (a) est demandée. Pour ta culture, l'idée de la preuve de (b) : chaque combinaison linéaire s'écrit $Y_i = SA_i$ où $S = (X_1, \dots, X_n)$ est la matrice des vecteurs de départ et $A_i \in \mathbb{R}^n$ le vecteur des coefficients ; si tu prends $n+1$ combinaisons, les $n+1$ vecteurs $A_i$ de $\mathbb{R}^n$ sont dépendants par (a), et en multipliant la relation de dépendance par $S$ à gauche, la même relation lie les $Y_i$.

Piège de mémorisation : dans (b), les $n$ vecteurs de départ vivent dans $\mathbb{R}^p$ (pas forcément $\mathbb{R}^n$) — c'est le **nombre** de vecteurs qui limite, pas la taille de l'espace.`,
      },
    ],
    examProof: String.raw`**Théorème (Steinitz, slide 143).**

a) Dans $\mathbb{R}^n$, $n+1$ vecteurs sont toujours linéairement dépendants.

b) Parmi les combinaisons linéaires de $n$ vecteurs de $\mathbb{R}^p$, il y en a au plus $n$ qui sont linéairement indépendantes.

**Preuve de (a).** Soient $X_1, \dots, X_{n+1} \in \mathbb{R}^n$. Considérons l'équation vectorielle

$$ \lambda_1 X_1 + \dots + \lambda_{n+1} X_{n+1} = O. $$

En écrivant cette égalité composante par composante (chaque vecteur possède $n$ composantes), on obtient un système linéaire homogène de $n$ équations aux $n+1$ inconnues $\lambda_1, \dots, \lambda_{n+1}$.

Ce système homogène est toujours compatible : la solution nulle convient. Après échelonnement par la méthode de Gauss, il comporte au plus $n$ pivots (au plus un par équation), donc au moins $(n+1) - n = 1$ variable libre : le système possède une infinité de solutions.

Il existe donc des solutions $(\lambda_1, \dots, \lambda_{n+1}) \neq (0, \dots, 0)$, c'est-à-dire une combinaison linéaire nulle des $X_i$ à coefficients non tous nuls. Par le critère d'indépendance linéaire (théorème du slide 140), les vecteurs $X_1, \dots, X_{n+1}$ sont linéairement dépendants. $\blacksquare$`,
    pitfalls: [
      String.raw`N'énoncer que la partie (a) : l'examen exige l'énoncé complet, (a) ET (b), même si seule la preuve de (a) est demandée.`,
      String.raw`Inverser le comptage : c'est un système de $n$ équations (une par composante des vecteurs) à $n+1$ inconnues (les $\lambda_i$) — pas l'inverse. Les vecteurs sont des données, les $\lambda_i$ sont les inconnues.`,
      String.raw`Affirmer « il existe une solution non triviale » sans le justifier : il faut l'argument de Gauss — au plus $n$ pivots, donc au moins $(n+1) - n = 1$ variable libre, donc une infinité de solutions.`,
      String.raw`Oublier de conclure par le critère du slide 140 : la solution non nulle fournit des coefficients non tous nuls, et c'est le critère qui traduit cela en « linéairement dépendants ».`,
    ],
  },
  {
    id: "4.3",
    chapter: 4,
    title: "Toute application linéaire est une matrice",
    slideRef: "Slide 171",
    exam: "Prouver le théorème du slide 171",
    statement: String.raw`**Théorème (slide 171).** Une application $f : \mathbb{R}^n \to \mathbb{R}^p$ est linéaire $\iff$ il existe une matrice $A$ de format $p \times n$ telle que, pour tout $X$ de $\mathbb{R}^n$,

$$ f(X) = AX. $$`,
    intuition: String.raw`Sens ($\Leftarrow$) : deux lignes de calcul avec les règles du produit matriciel (distributivité, sortie du scalaire). Sens ($\Rightarrow$), l'idée-clé : décomposer $X$ sur la base canonique, laisser la linéarité faire sortir sommes et scalaires, puis reconnaître le produit $AX$ où $A$ a pour colonnes les images $f(E_1), \dots, f(E_n)$.`,
    steps: [
      {
        title: "Ce que dit le théorème (et pourquoi il est énorme)",
        content: String.raw`📖 **Rappel (définition, slide 170).** Une application $f : \mathbb{R}^n \to \mathbb{R}^p$ est dite **linéaire** si, quels que soient les vecteurs $X, Y$ de $\mathbb{R}^n$ et le scalaire $r \in \mathbb{R}$ :

$$ f(X + Y) = f(X) + f(Y) \qquad \text{et} \qquad f(rX) = r\,f(X). $$

Le théorème dit que le monde (a priori vaste et abstrait) des applications linéaires et le monde (concret et calculable) des matrices sont **le même monde** : toute matrice définit une application linéaire, et toute application linéaire se cache derrière une matrice. Conséquence pratique : pour étudier une application linéaire, il suffit de trouver sa matrice, puis d'utiliser tous les outils des chapitres 1 à 3 (produit, rang, déterminant, Gauss...).`,
      },
      {
        title: "Deux directions à ne jamais oublier",
        content: String.raw`C'est une équivalence ($\iff$), donc la preuve a **deux directions** :

- ($\Leftarrow$) « matrice $\Rightarrow$ linéaire » : la direction facile, deux lignes de calcul avec les règles du chapitre 1 ;
- ($\Rightarrow$) « linéaire $\Rightarrow$ matrice » : la direction astucieuse, où il faut **construire** $A$.

Annonce chaque direction dans ta copie. L'oubli d'une direction est LA faute classique sur ce théorème.`,
      },
      {
        title: "Sens ⇐ : une matrice donne toujours une application linéaire",
        content: String.raw`Suppose $f(X) = AX$ pour tout $X \in \mathbb{R}^n$, avec $A$ de format $p \times n$. Tu vérifies les deux conditions de la définition :

- addition : $f(X + Y) = A(X + Y) = AX + AY = f(X) + f(Y)$ — c'est la **distributivité** du produit matriciel (chapitre 1) ;
- scalaire : $f(rX) = A(rX) = r\,AX = r\,f(X)$ — un scalaire « sort » d'un produit matriciel (chapitre 1).

Les deux conditions sont vérifiées, donc $f$ est linéaire. Cite bien les règles de calcul du chapitre 1 : c'est ce qui montre que tu sais **pourquoi** tu as le droit d'écrire chaque égalité.`,
      },
      {
        title: "Sens ⇒, ligne 1 : décomposer X sur la base canonique",
        content: String.raw`📖 **Rappel (slide 148).** Les vecteurs unitaires $E_1 = (1, 0, \dots, 0)^T, \dots, E_n = (0, \dots, 0, 1)^T$ forment la **base canonique** de $\mathbb{R}^n$ : ils engendrent $\mathbb{R}^n$ et sont indépendants, et les coefficients de $X$ dans cette base sont exactement ses composantes.

L'idée de génie de la preuve : tout vecteur $X = (x_1, \dots, x_n)^T \in \mathbb{R}^n$ se décompose

$$ X = x_1 E_1 + x_2 E_2 + \dots + x_n E_n. $$

Attention : cette décomposition est vraie pour **tout** vecteur — elle n'utilise aucune hypothèse sur $f$. La linéarité n'a pas encore servi.`,
      },
      {
        title: "Sens ⇒, ligne 2 : la linéarité fait le travail",
        content: String.raw`Puisque $f$ est linéaire, elle « traverse » la somme et les scalaires :

$$ f(X) = f(x_1 E_1 + \dots + x_n E_n) = x_1 f(E_1) + \dots + x_n f(E_n). $$

Pourquoi a-t-on le droit ? On applique $f(U + V) = f(U) + f(V)$ de proche en proche, puis $f(rU) = r\,f(U)$ sur chaque terme. C'est **ici — et seulement ici** — que l'hypothèse « $f$ linéaire » est utilisée : dis-le explicitement dans ta copie (« par linéarité de $f$ »), ça rapporte des points.`,
      },
      {
        title: "Sens ⇒, ligne 3 : reconnaître un produit matriciel",
        content: String.raw`Une somme du type $x_1 f(E_1) + \dots + x_n f(E_n)$ est exactement le produit par $X$ de la matrice dont les **colonnes** sont $f(E_1), \dots, f(E_n)$ :

$$ f(X) = \big(f(E_1) \;\; f(E_2) \;\, \cdots \;\, f(E_n)\big) \begin{pmatrix} x_1 \\ \vdots \\ x_n \end{pmatrix} = AX, \qquad \text{où } A = \big(f(E_1) \; \cdots \; f(E_n)\big). $$

Pourquoi ? C'est la définition « colonne par colonne » du produit matrice-vecteur (chapitre 1) : $AX$ est la combinaison linéaire des colonnes de $A$, avec les composantes de $X$ comme coefficients.

**Contrôle des dimensions** (à mentionner, ça rapporte) : chaque $f(E_i)$ appartient à $\mathbb{R}^p$, donc $A$, formée de $n$ colonnes de taille $p$, est bien de format $p \times n$, et $AX \in \mathbb{R}^p$. Tout est cohérent.`,
      },
      {
        title: "Bonus gratuit : la recette explicite, testée dans ℝ²",
        content: String.raw`La preuve ne montre pas seulement que $A$ existe : elle donne sa **recette** — les colonnes de $A$ sont les images des vecteurs de la base canonique. C'est la formule de tous les exercices (TP 4.11 à 4.14).

Exemple du cours : $f : \mathbb{R}^2 \to \mathbb{R}^2$ définie par $f\big((x_1, x_2)^T\big) = (2x_1, \; x_1 + 3x_2)^T$. On calcule les images de la base canonique : $f(E_1) = f\big((1, 0)^T\big) = (2, 1)^T$ et $f(E_2) = f\big((0, 1)^T\big) = (0, 3)^T$, d'où

$$ A = \begin{pmatrix} 2 & 0 \\ 1 & 3 \end{pmatrix}. $$

Vérification : $A(2, 1)^T = (4, 5)^T$, et le calcul direct donne bien $f\big((2, 1)^T\big) = (2 \cdot 2, \; 2 + 3 \cdot 1)^T = (4, 5)^T$. ✓`,
      },
    ],
    examProof: String.raw`**Théorème (slide 171).** Une application $f : \mathbb{R}^n \to \mathbb{R}^p$ est linéaire si et seulement s'il existe une matrice $A$ de format $p \times n$ telle que $f(X) = AX$ pour tout $X \in \mathbb{R}^n$.

**Preuve.**

($\Leftarrow$) Supposons qu'il existe une matrice $A$ de format $p \times n$ telle que $f(X) = AX$ pour tout $X \in \mathbb{R}^n$. Pour tous $X, Y \in \mathbb{R}^n$, la distributivité du produit matriciel donne

$$ f(X + Y) = A(X + Y) = AX + AY = f(X) + f(Y), $$

et pour tout $r \in \mathbb{R}$, la sortie du scalaire d'un produit matriciel donne

$$ f(rX) = A(rX) = r\,AX = r\,f(X). $$

Les deux conditions de la définition sont vérifiées : $f$ est linéaire.

($\Rightarrow$) Supposons $f$ linéaire. Tout vecteur $X = (x_1, \dots, x_n)^T \in \mathbb{R}^n$ se décompose sur la base canonique $E_1, \dots, E_n$ de $\mathbb{R}^n$ :

$$ X = x_1 E_1 + x_2 E_2 + \dots + x_n E_n. $$

Par linéarité de $f$ :

$$ f(X) = f(x_1 E_1 + \dots + x_n E_n) = x_1 f(E_1) + \dots + x_n f(E_n). $$

Or cette somme est exactement le produit par $X$ de la matrice dont les colonnes sont $f(E_1), \dots, f(E_n)$ :

$$ f(X) = \big(f(E_1) \;\; f(E_2) \;\, \cdots \;\, f(E_n)\big) \begin{pmatrix} x_1 \\ \vdots \\ x_n \end{pmatrix} = AX, \qquad \text{où } A = \big(f(E_1) \; \cdots \; f(E_n)\big), $$

car le produit matrice-vecteur $AX$ est la combinaison linéaire des colonnes de $A$ pondérée par les composantes de $X$. Chaque $f(E_i)$ appartient à $\mathbb{R}^p$, donc $A$, formée de $n$ colonnes de taille $p$, est bien de format $p \times n$. Ainsi $f(X) = AX$ pour tout $X \in \mathbb{R}^n$. $\blacksquare$`,
    pitfalls: [
      String.raw`Oublier une direction : c'est un $\iff$ — deux preuves, pas une. Annoncer ($\Leftarrow$) puis ($\Rightarrow$).`,
      String.raw`Confondre les espaces et le format : $X \in \mathbb{R}^n$ (entrée), $f(E_i) \in \mathbb{R}^p$ (sortie), donc $A$ est de format $p \times n$ — et non $n \times p$.`,
      String.raw`Ne pas dire où la linéarité sert : elle sert exactement au passage $f(x_1 E_1 + \dots + x_n E_n) = x_1 f(E_1) + \dots + x_n f(E_n)$ ; sans elle, ce passage est faux. Écrire « par linéarité de $f$ » à cet endroit précis.`,
      String.raw`Écrire $A = (f(E_1), \dots, f(E_n))$ sans expliquer que ce sont des colonnes juxtaposées et que $AX$ est la combinaison de ces colonnes pondérée par les composantes $x_i$ (définition du produit matrice-vecteur, chapitre 1).`,
    ],
  },
];
