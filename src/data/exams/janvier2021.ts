import type { Exam } from "./types";

export const exam: Exam = {
  id: "janvier-2021",
  title: "Examen de janvier 2021",
  subtitle: "Sujet complet (sans correction fournie)",
  official: false,
  pdf: "/pdf/examens/janvier-2021.pdf",
  durationMin: 180,
  totalPoints: 40,
  questions: [
    {
      id: "q1",
      number: 1,
      title: "Démonstration : transposée d'un produit",
      points: 3,
      chapters: [1],
      kind: "demo",
      statement: String.raw`Soit $A$ une matrice de dimension $(p \times n)$ et soit $B$ une matrice de dimension $(n \times q)$. Prouvez que

$$ (AB)^T = B^T A^T $$`,
      hints: [
        String.raw`C'est la démonstration 1.2 du référentiel (chapitre 1). Pour prouver une égalité entre deux matrices, montre d'abord qu'elles ont **le même format**, puis que leurs éléments $(i,j)$ coïncident pour tous $i, j$.`,
        String.raw`Premier geste : écris l'élément $(i,j)$ du membre de gauche. Par définition de la transposée, $\left[(AB)^T\right]_{ij} = [AB]_{ji}$, puis déroule la définition du produit matriciel avec une somme sur $k$.`,
        String.raw`Résultat intermédiaire de contrôle : tu dois arriver à $\left[(AB)^T\right]_{ij} = \sum_{k=1}^{n} a_{jk}\, b_{ki}$. Il ne reste plus qu'à reconnaître cette somme comme l'élément $(i,j)$ de $B^T A^T$ (les nombres réels commutent !).`,
      ],
      steps: [
        {
          title: "La stratégie : formats identiques + éléments identiques",
          content: String.raw`📖 **Rappel de méthode.** Deux matrices sont égales si et seulement si elles ont le même format **et** le même élément en chaque position $(i,j)$. Toute la preuve tient donc en deux vérifications.

**Les formats.** $A$ est $(p \times n)$ et $B$ est $(n \times q)$, donc $AB$ existe et est de format $(p \times q)$ ; sa transposée $(AB)^T$ est donc $(q \times p)$.

De l'autre côté, $B^T$ est $(q \times n)$ et $A^T$ est $(n \times p)$ : le produit $B^T A^T$ existe (les dimensions intérieures $n$ coïncident) et est de format $(q \times p)$.

Les deux membres ont bien le même format — remarque au passage **pourquoi l'ordre doit s'inverser** : $A^T B^T$ n'existerait même pas en général ($(n \times p)$ fois $(q \times n)$ n'est compatible que si $p = q$).`,
        },
        {
          title: "Membre de gauche : dérouler les deux définitions",
          content: String.raw`Fixe $i \in \{1, \dots, q\}$ et $j \in \{1, \dots, p\}$. Par définition de la transposée (échange des indices), puis du produit matriciel :

$$ \left[(AB)^T\right]_{ij} = [AB]_{ji} = \sum_{k=1}^{n} a_{jk}\, b_{ki} $$

📖 **Rappel.** $[AB]_{ji}$ = (ligne $j$ de $A$) $\bullet$ (colonne $i$ de $B$) : on somme les produits $a_{jk} b_{ki}$ sur l'indice commun $k$.`,
        },
        {
          title: "Membre de droite : la même somme",
          content: String.raw`Calcule maintenant l'élément $(i,j)$ de $B^T A^T$ :

$$ \left[B^T A^T\right]_{ij} = \sum_{k=1}^{n} \left[B^T\right]_{ik} \left[A^T\right]_{kj} = \sum_{k=1}^{n} b_{ki}\, a_{jk} $$

Comme les $a_{jk}$ et $b_{ki}$ sont des **nombres réels**, ils commutent : $b_{ki} a_{jk} = a_{jk} b_{ki}$. Les deux sommes sont donc identiques terme à terme.`,
        },
        {
          title: "Conclure",
          content: String.raw`Pour tous $i, j$ :

$$ \left[(AB)^T\right]_{ij} = \sum_{k=1}^{n} a_{jk} b_{ki} = \left[B^T A^T\right]_{ij} $$

Les deux matrices ont le même format $(q \times p)$ et les mêmes éléments, donc

$$ (AB)^T = B^T A^T $$

Pour la version longuement commentée (avec l'intuition sur l'inversion de l'ordre), va voir la **fiche démonstration 1.2** du site.`,
        },
      ],
      answer: String.raw`On montre que les deux membres ont le même format $(q \times p)$, puis que $\left[(AB)^T\right]_{ij} = \sum_k a_{jk} b_{ki} = \left[B^T A^T\right]_{ij}$ pour tous $i,j$ : donc $(AB)^T = B^T A^T$. L'ordre s'inverse — c'est la seule façon d'avoir des formats compatibles.`,
      examTips: [
        String.raw`3 points pour une démo du référentiel : c'est du « par cœur intelligent ». Récite-la en 5-7 minutes maximum pour garder du temps pour les exercices.`,
        String.raw`Le correcteur attend les **quantificateurs** : « pour tous $i, j$ », les bornes de la somme ($k$ de 1 à $n$) et la phrase de conclusion « même format + mêmes éléments ». Sans cela, tu perds des points même si l'idée est là.`,
        String.raw`N'oublie pas la vérification des formats au début : c'est elle qui explique pourquoi c'est $B^T A^T$ et pas $A^T B^T$.`,
      ],
      demoRef: "1.2",
      exerciseRefs: ["1.2", "1.4"],
    },
    {
      id: "q2",
      number: 2,
      title: "Démonstration : linéaire ⟺ matricielle",
      points: 3,
      chapters: [4],
      kind: "demo",
      statement: String.raw`Une application $f : \mathbb{R}^n \to \mathbb{R}^p$ est linéaire $\iff$ il existe une matrice $A$ de format $(p \times n)$ telle que, pour tout $X$ de $\mathbb{R}^n$,

$$ f(X) = AX $$

Démonstration.`,
      hints: [
        String.raw`C'est la démonstration 4.3 du référentiel (chapitre 4). Un « $\iff$ » = **deux sens à prouver** : $\Leftarrow$ (une matrice donne une application linéaire) et $\Rightarrow$ (une application linéaire cache une matrice).`,
        String.raw`Le sens $\Leftarrow$ est le plus court : vérifie $f(\alpha X + \beta Y) = \alpha f(X) + \beta f(Y)$ à partir des propriétés du produit matriciel (distributivité et sortie des scalaires).`,
        String.raw`Pour le sens $\Rightarrow$ : décompose $X = x_1 E_1 + \dots + x_n E_n$ sur la base canonique et applique la linéarité. La matrice cherchée doit avoir pour colonnes les images $f(E_1), \dots, f(E_n)$.`,
      ],
      steps: [
        {
          title: "Deux sens à prouver",
          content: String.raw`📖 **Rappel.** $f$ est linéaire si pour tous $X, Y \in \mathbb{R}^n$ et tous $\alpha, \beta \in \mathbb{R}$ :

$$ f(\alpha X + \beta Y) = \alpha f(X) + \beta f(Y) $$

L'énoncé est une équivalence : on rédige **deux paragraphes séparés**, un par sens. C'est la structure que le correcteur cherche en premier.`,
        },
        {
          title: "Sens ⇐ : une matrice donne toujours une application linéaire",
          content: String.raw`Suppose qu'il existe $A$ de format $(p \times n)$ avec $f(X) = AX$ pour tout $X$. Alors pour tous $X, Y \in \mathbb{R}^n$ et $\alpha, \beta \in \mathbb{R}$ :

$$ f(\alpha X + \beta Y) = A(\alpha X + \beta Y) = \alpha AX + \beta AY = \alpha f(X) + \beta f(Y) $$

où l'on a utilisé la **distributivité** du produit matriciel et le fait qu'un scalaire peut sortir d'un produit. Donc $f$ est linéaire.`,
        },
        {
          title: "Sens ⇒ : décomposer X sur la base canonique",
          content: String.raw`Suppose $f$ linéaire. Note $E_1, \dots, E_n$ la base canonique de $\mathbb{R}^n$ ($E_j$ a un 1 en position $j$ et des 0 ailleurs). Tout $X = (x_1, \dots, x_n)^T$ s'écrit :

$$ X = x_1 E_1 + x_2 E_2 + \dots + x_n E_n $$

C'est l'idée clé : si on connaît $f$ sur les $E_j$, la linéarité impose $f$ partout.`,
        },
        {
          title: "La linéarité fait le travail",
          content: String.raw`Applique $f$ et utilise la linéarité (étendue à $n$ termes) :

$$ f(X) = f\left(\sum_{j=1}^n x_j E_j\right) = \sum_{j=1}^n x_j\, f(E_j) $$

Chaque $f(E_j)$ est un vecteur de $\mathbb{R}^p$ : la somme est une **combinaison linéaire de $n$ vecteurs de $\mathbb{R}^p$ avec coefficients $x_1, \dots, x_n$**.`,
        },
        {
          title: "Reconnaître un produit matriciel et conclure",
          content: String.raw`📖 **Rappel.** $AX$ est exactement la combinaison linéaire des **colonnes** de $A$ avec les coefficients de $X$.

Pose donc la matrice $(p \times n)$ dont les colonnes sont les images des vecteurs de base :

$$ A = \Big( f(E_1) \;\Big|\; f(E_2) \;\Big|\; \dots \;\Big|\; f(E_n) \Big) $$

Alors $\sum_j x_j f(E_j) = AX$, c'est-à-dire $f(X) = AX$ pour tout $X$.

Bonus pratique : cette preuve donne la **recette explicite** pour trouver la matrice d'une application linéaire — calculer les images de la base canonique et les ranger en colonnes. La version détaillée est la **fiche démonstration 4.3**.`,
        },
      ],
      answer: String.raw`$\Leftarrow$ : si $f(X) = AX$, la distributivité donne $f(\alpha X + \beta Y) = \alpha f(X) + \beta f(Y)$, donc $f$ est linéaire. $\Rightarrow$ : en décomposant $X = \sum_j x_j E_j$ sur la base canonique, la linéarité donne $f(X) = \sum_j x_j f(E_j) = AX$ avec $A = (f(E_1) | \dots | f(E_n))$, matrice $(p \times n)$ dont les colonnes sont les images des vecteurs de base.`,
      examTips: [
        String.raw`Structure ta copie en deux paragraphes visibles « $\Leftarrow$ » et « $\Rightarrow$ » : le barème récompense chaque sens séparément. Un seul sens rédigé = la moitié des points au mieux.`,
        String.raw`Le sens $\Leftarrow$ prend 3 lignes — ne le saute pas sous prétexte qu'il est « évident », il est dans le barème.`,
        String.raw`Termine par la description explicite de $A$ (colonnes = images de la base canonique) : c'est la conclusion attendue du sens $\Rightarrow$.`,
      ],
      demoRef: "4.3",
      exerciseRefs: ["4.11", "4.13"],
    },
    {
      id: "q3",
      number: 3,
      title: "Vrai ou faux : matrices, systèmes et applications linéaires",
      points: 6,
      chapters: [1, 2, 3, 4, 6],
      kind: "vraifaux",
      statement: String.raw`Les affirmations suivantes, sont-elles vraies ou fausses ?

**Attention : vous obtenez $+\frac{1}{2}$ point par bonne réponse et $-\frac{1}{4}$ point par mauvaise réponse. Ne cochez donc pas au hasard !** Si la somme de tous les points obtenus est négative, vous auriez 0 point pour cette question.

**1.** Soit $A$ une matrice de dimension $(n \times p)$ et soit $B$ une matrice de dimension $(q \times r)$.

- Si les produits $AB$ et $BA$ existent, alors $A^T + B$ existe
- Si $A$ et $B$ sont orthogonales, alors le produit $AB$ existe

**2.** Soient $A$ et $B$ deux matrices de dimension $(n \times n)$.

- Si $A$ et $B$ sont symétriques, alors $A + 2B$ est une matrice symétrique
- Si $A$ et $B$ commutent, alors $(AB)^T = A^T B^T$
- Si $A$ est diagonalisable, alors $A$ est inversible
- $\det cA = c \det A$ pour $c \neq 0$ (le sujet note « dtm » le déterminant)

**3.** Soit $AX = B$ un système de $p$ équations linéaires à $n$ inconnues.

- Si $\mathrm{rg}(A\,|\,B) > \mathrm{rg}(A)$, alors le système est impossible
- Si le système possède une solution unique, alors $p = n$
- Si $p < n$, alors le système possède une infinité des solutions

**4.** Soit $A$ une matrice de dimension $(n \times n)$ et soit $f$ telle que $f(X) = AX$ pour $X \in \mathbb{R}^n$.

- Si la matrice $A$ est inversible, alors $\mathrm{noyau}(f) = \{O\}$
- L'image de $A$ est un sous-vectoriel de $\mathbb{R}^n$
- Si $\mathrm{rg}(A) = 0$, alors $A$ est la matrice nulle`,
      hints: [
        String.raw`Pour chaque affirmation, deux réflexes : (1) si tu penses « vrai », cherche la propriété du cours qui le prouve ; (2) si tu penses « faux », construis un **contre-exemple minuscule** (matrices $2 \times 2$, voire $1 \times 1$, systèmes à 2 ou 3 équations).`,
        String.raw`Groupe 1 : traduis chaque hypothèse en **égalités de dimensions**. $AB$ existe signifie « nombre de colonnes de $A$ = nombre de lignes de $B$ ». Écris toutes les égalités obtenues, puis compare les formats de $A^T$ et de $B$.`,
        String.raw`Groupe 2 : attention à l'affirmation sur les matrices qui commutent — pars de $(AB)^T = B^T A^T$ (question 1 !) et utilise l'hypothèse $AB = BA$ **avant** de transposer. Pour le déterminant, teste $c = 2$ sur $A = I$ en dimension $2$.`,
        String.raw`Groupes 3 et 4 : le théorème de Rouché-Fontené compare $\mathrm{rg}(A)$ et $\mathrm{rg}(A\,|\,B)$ ; pour les affirmations sur $p$ et $n$, pense à un système **surdéterminé** compatible et à un système incompatible avec moins d'équations que d'inconnues.`,
      ],
      steps: [
        {
          title: "Groupe 1a — AB et BA existent ⇒ Aᵀ + B existe : VRAI",
          content: String.raw`Traduisons les hypothèses en dimensions. $A$ est $(n \times p)$, $B$ est $(q \times r)$.

- $AB$ existe $\Rightarrow$ colonnes de $A$ = lignes de $B$, donc $p = q$
- $BA$ existe $\Rightarrow$ colonnes de $B$ = lignes de $A$, donc $r = n$

Donc $B$ est en réalité de format $(p \times n)$. Or $A^T$ est aussi de format $(p \times n)$. Deux matrices de même format s'additionnent toujours : $A^T + B$ existe. **VRAI.**`,
        },
        {
          title: "Groupe 1b — A et B orthogonales ⇒ AB existe : FAUX",
          content: String.raw`📖 **Rappel.** Une matrice orthogonale est par définition **carrée** ($S^T S = I$). Donc $A$ orthogonale force $n = p$ et $B$ orthogonale force $q = r$.

Mais rien ne relie $n$ et $q$ ! Contre-exemple : $A = I_2$ (orthogonale, $2 \times 2$) et $B = I_3$ (orthogonale, $3 \times 3$) : le produit $AB$ n'existe pas ($2 \neq 3$). **FAUX.**`,
        },
        {
          title: "Groupe 2a et 2b — symétrie et commutation : VRAI et VRAI",
          content: String.raw`**« $A, B$ symétriques $\Rightarrow A + 2B$ symétrique » : VRAI.** La transposition est linéaire :

$$ (A + 2B)^T = A^T + 2B^T = A + 2B $$

puisque $A^T = A$ et $B^T = B$.

**« $A, B$ commutent $\Rightarrow (AB)^T = A^T B^T$ » : VRAI** — c'est le piège classique dans l'autre sens ! En général $(AB)^T = B^T A^T \neq A^T B^T$. Mais ici on a l'hypothèse $AB = BA$, donc :

$$ (AB)^T = (BA)^T = A^T B^T $$

On transpose $BA$ avec la règle de la question 1 (l'ordre s'inverse : $B$ puis $A$ devient $A^T$ puis $B^T$). L'hypothèse de commutation rend donc l'égalité correcte.`,
        },
        {
          title: "Groupe 2c et 2d — diagonalisable et det(cA) : FAUX et FAUX",
          content: String.raw`**« $A$ diagonalisable $\Rightarrow A$ inversible » : FAUX.** Contre-exemple immédiat : la matrice nulle $(2 \times 2)$ est diagonale (donc diagonalisable !) mais pas inversible. Autre exemple :

$$ A = \begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix} $$

déjà diagonale, mais $\det A = 0$. Diagonalisable signifie « on peut réduire $A$ à une forme diagonale », inversible signifie « 0 n'est pas valeur propre » : ce sont deux propriétés indépendantes.

**« $\det cA = c \det A$ pour $c \neq 0$ » : FAUX.** 📖 **Rappel.** Multiplier **une seule ligne** par $c$ multiplie le déterminant par $c$ ; or $cA$ multiplie les $n$ lignes, donc

$$ \det(cA) = c^n \det A $$

Contre-exemple : $A = I_2$, $c = 2$ : $\det(2I_2) = \begin{vmatrix} 2 & 0 \\ 0 & 2 \end{vmatrix} = 4 \neq 2 = 2 \det I_2$. L'égalité de l'énoncé ne vaut pas en général (seulement si $n = 1$).`,
        },
        {
          title: "Groupe 3 — Rouché-Fontené et les tailles p, n : VRAI, FAUX, FAUX",
          content: String.raw`**« $\mathrm{rg}(A\,|\,B) > \mathrm{rg}(A) \Rightarrow$ impossible » : VRAI.** C'est exactement le théorème de Rouché-Fontené : le système est compatible si et seulement si $\mathrm{rg}(A\,|\,B) = \mathrm{rg}(A)$. Un rang de la matrice complétée strictement plus grand signifie qu'une ligne échelonnée est de la forme $(0 \; \dots \; 0 \,|\, c)$ avec $c \neq 0$ : équation absurde.

**« solution unique $\Rightarrow p = n$ » : FAUX.** Un système peut être surdéterminé et compatible. Contre-exemple ($p = 2$, $n = 1$) :

$$ \begin{cases} x = 1 \\ 2x = 2 \end{cases} $$

solution unique $x = 1$, pourtant $p = 2 \neq 1 = n$. (La bonne condition est $\mathrm{rg}(A) = \mathrm{rg}(A\,|\,B) = n$, ce qui n'impose rien sur $p$.)

**« $p < n \Rightarrow$ infinité de solutions » : FAUX.** Moins d'équations que d'inconnues garantit qu'il n'y a **pas unicité**, mais le système peut très bien être impossible. Contre-exemple ($p = 2 < n = 3$) :

$$ \begin{cases} x_1 + x_2 + x_3 = 1 \\ x_1 + x_2 + x_3 = 2 \end{cases} $$

aucune solution. La dichotomie correcte : si $p < n$, alors 0 ou une infinité de solutions — jamais une seule.`,
        },
        {
          title: "Groupe 4 — noyau, image, rang nul : VRAI, VRAI, VRAI",
          content: String.raw`**« $A$ inversible $\Rightarrow \mathrm{noyau}(f) = \{O\}$ » : VRAI.** Si $AX = O$, on multiplie à gauche par $A^{-1}$ : $X = A^{-1}O = O$. Le noyau se réduit donc au vecteur nul (et réciproquement d'ailleurs, pour une matrice carrée).

**« L'image de $A$ est un sous-vectoriel de $\mathbb{R}^n$ » : VRAI.** 📖 **Rappel.** L'image $\{AX : X \in \mathbb{R}^n\}$ est l'ensemble des combinaisons linéaires des colonnes de $A$, c'est-à-dire le sous-vectoriel **engendré par les colonnes** : $L(C_1, \dots, C_n)$. Comme $A$ est $(n \times n)$, les colonnes vivent dans $\mathbb{R}^n$ et l'image est bien un sous-vectoriel de $\mathbb{R}^n$.

**« $\mathrm{rg}(A) = 0 \Rightarrow A = O$ » : VRAI.** Le rang est le nombre maximal de colonnes linéairement indépendantes. Si $A$ avait un seul élément non nul, la colonne qui le contient serait un vecteur non nul, donc un système libre à elle seule : le rang vaudrait au moins 1. Par contraposée : rang 0 force toutes les colonnes nulles, donc $A = O$.`,
        },
      ],
      answer: String.raw`**Groupe 1 :** VRAI, FAUX. **Groupe 2 :** VRAI, VRAI, FAUX, FAUX. **Groupe 3 :** VRAI, FAUX, FAUX. **Groupe 4 :** VRAI, VRAI, VRAI.

Les pièges : « commutent $\Rightarrow (AB)^T = A^T B^T$ » est **vrai** (transposer $BA$), « diagonalisable $\Rightarrow$ inversible » est faux (matrice nulle), $\det(cA) = c^n \det A$ et non $c \det A$, et « $p < n$ » n'exclut pas un système impossible.`,
      examTips: [
        String.raw`Barème négatif : $+\frac{1}{2}$ par bonne réponse, $-\frac{1}{4}$ par erreur. Ne coche que si tu as **soit** une propriété du cours, **soit** un contre-exemple en tête. Une case laissée vide vaut 0, une erreur te coûte.`,
        String.raw`Le contre-exemple $2 \times 2$ (ou le mini-système) est ton meilleur ami : 30 secondes de test sur $I_2$, la matrice nulle ou $\mathrm{diag}(1, 0)$ tranchent la plupart des affirmations.`,
        String.raw`Méfie-toi des réflexes : ici, l'affirmation qui « a l'air fausse » ($(AB)^T = A^T B^T$) est vraie grâce à l'hypothèse de commutation, et deux qui « ont l'air vraies » (diagonalisable $\Rightarrow$ inversible, $p < n \Rightarrow$ infinité) sont fausses.`,
        String.raw`Gère ton temps : 6 points pour 12 cases, soit environ 15 minutes. Tranche vite au brouillon, mais sois sûr avant de cocher.`,
      ],
      exerciseRefs: ["1.2", "3.1", "4.10"],
    },
    {
      id: "q4",
      number: 4,
      title: "Chaîne de Markov : taux de chômage à long terme",
      points: 5,
      chapters: [6],
      kind: "exercice",
      statement: String.raw`On étudie, de mois en mois, l'évolution du taux de chômage dans une population fixe donnée. Une personne employée lors d'un certain mois a 8 chances sur 10 de le rester le mois suivant, tandis qu'une personne non employée lors d'un certain mois a 4 chances sur 10 de trouver un emploi le mois suivant. Quel serait le taux de chômage à longue échéance ?`,
      hints: [
        String.raw`C'est une chaîne de Markov à deux états (chapitre 6) : « employé » et « chômeur ». Commence par identifier les **quatre** probabilités de transition — l'énoncé n'en donne que deux, les deux autres s'en déduisent (chaque colonne de la matrice doit sommer à 1).`,
        String.raw`Pose la matrice de transition $A$ (convention du cours : $X_{t+1} = AX_t$, colonnes qui somment à 1, la colonne $j$ = « d'où l'on part »). Contrôle : la première colonne doit être $(0.8,\ 0.2)^T$.`,
        String.raw`« À longue échéance » = état stationnaire = vecteur propre de $A$ associé à la valeur propre $1$, normalisé pour que ses composantes somment à 1 (ce sont des proportions de la population). Résous donc $(A - I)V = O$.`,
      ],
      steps: [
        {
          title: "Modéliser : les deux états et la matrice de transition",
          content: String.raw`Deux états : employé et chômeur (non employé). Note $X_t = (e_t, c_t)^T$ le vecteur des **proportions** de la population dans chaque état au mois $t$ (donc $e_t + c_t = 1$).

L'énoncé donne :

- employé $\to$ reste employé : $0.8$, donc employé $\to$ chômeur : $1 - 0.8 = 0.2$
- chômeur $\to$ trouve un emploi : $0.4$, donc chômeur $\to$ reste chômeur : $1 - 0.4 = 0.6$

Avec la convention du cours (colonne $j$ = état de départ, $X_{t+1} = AX_t$) :

$$ A = \begin{pmatrix} 0.8 & 0.4 \\ 0.2 & 0.6 \end{pmatrix} $$

**Contrôle immédiat :** chaque colonne somme à 1 ($0.8 + 0.2 = 1$ et $0.4 + 0.6 = 1$) — c'est bien une matrice de transition de Markov.`,
        },
        {
          title: "Pourquoi « longue échéance » = vecteur propre de la valeur propre 1",
          content: String.raw`📖 **Rappel (démo 6.3).** Toute matrice de Markov admet $\lambda = 1$ comme valeur propre (ses colonnes somment à 1, donc les lignes de $A - I$ somment à la ligne nulle et $\det(A - I) = 0$).

L'état à longue échéance $V$ est un état **stationnaire** : il n'évolue plus d'un mois à l'autre, c'est-à-dire

$$ AV = V \iff (A - I)V = O $$

$V$ est donc un vecteur propre associé à $\lambda = 1$, que l'on normalise pour que ses composantes somment à 1 (ce sont des proportions).

Vérifions au passage la convergence : $\mathrm{tr}(A) = 0.8 + 0.6 = 1.4 = \lambda_1 + \lambda_2$ avec $\lambda_1 = 1$, donc $\lambda_2 = 0.4$. Comme $|\lambda_2| = 0.4 < 1$, la composante selon le second vecteur propre s'éteint quand $t \to \infty$ : la population converge vers l'état stationnaire **quel que soit** le point de départ.`,
        },
        {
          title: "Résoudre (A − I)V = O",
          content: String.raw`$$ A - I = \begin{pmatrix} -0.2 & 0.4 \\ 0.2 & -0.4 \end{pmatrix} $$

Le système $(A - I)V = O$ avec $V = (e, c)^T$ se réduit à une seule équation (la seconde ligne est l'opposée de la première — signe que $\lambda = 1$ est bien valeur propre) :

$$ -0.2\,e + 0.4\,c = 0 \iff e = 2c $$

Les vecteurs propres sont donc les multiples de $(2, 1)^T$.`,
        },
        {
          title: "Normaliser en proportions",
          content: String.raw`On veut $e + c = 1$ avec $e = 2c$ :

$$ 2c + c = 1 \iff c = \frac{1}{3}, \qquad e = \frac{2}{3} $$

L'état stationnaire est $V = \left(\frac{2}{3},\ \frac{1}{3}\right)^T$ : à longue échéance, deux tiers de la population est employée et un tiers est au chômage.`,
        },
        {
          title: "Vérification : V est bien invariant",
          content: String.raw`Réinjecte $V$ dans $A$ :

$$ AV = \begin{pmatrix} 0.8 & 0.4 \\ 0.2 & 0.6 \end{pmatrix} \begin{pmatrix} 2/3 \\ 1/3 \end{pmatrix} = \begin{pmatrix} \frac{1.6}{3} + \frac{0.4}{3} \\ \frac{0.4}{3} + \frac{0.6}{3} \end{pmatrix} = \begin{pmatrix} 2/3 \\ 1/3 \end{pmatrix} = V $$

L'état est bien stationnaire. Interprétation d'équilibre : les flux se compensent — chaque mois, $0.2 \times \frac{2}{3} = \frac{2}{15}$ de la population perd son emploi et $0.4 \times \frac{1}{3} = \frac{2}{15}$ en retrouve un.`,
        },
      ],
      answer: String.raw`Matrice de transition $A = \begin{pmatrix} 0.8 & 0.4 \\ 0.2 & 0.6 \end{pmatrix}$ ; l'état stationnaire (vecteur propre de $\lambda = 1$ normalisé) est $V = (2/3,\ 1/3)^T$. **Le taux de chômage à longue échéance vaut $\frac{1}{3} \approx 0.33$**, soit environ 33 pourcent — atteint quel que soit l'état initial, car l'autre valeur propre vaut $0.4$, de module strictement inférieur à 1.`,
      examTips: [
        String.raw`Commence toujours par écrire la matrice de transition **et** vérifie que ses colonnes somment à 1 : c'est le premier point du barème et ton filet de sécurité contre une matrice transposée.`,
        String.raw`« À longue échéance » doit déclencher le réflexe « vecteur propre de $\lambda = 1$, normalisé en proportions » — ne calcule pas $A^{20}$ à la calculatrice, ce n'est pas ce que le correcteur veut voir.`,
        String.raw`N'oublie pas la normalisation $e + c = 1$ : un vecteur propre comme $(2, 1)^T$ n'est pas encore une réponse — le taux de chômage est $\frac{1}{3}$, pas $1$.`,
        String.raw`Vérifie en 20 secondes que $AV = V$ : si ça ne retombe pas, tu as probablement mal placé une probabilité dans $A$.`,
      ],
      exerciseRefs: ["6.7", "6.8", "1.5"],
    },
    {
      id: "q5",
      number: 5,
      title: "Forme quadratique : genre, diagonalisation orthogonale, maximum",
      points: 8,
      chapters: [6, 7],
      kind: "exercice",
      statement: String.raw`Pour $X \in \mathbb{R}^3$, on considère la forme quadratique

$$ Q(X) = 3x_3^2 - 2x_2^2 - 4x_1x_3 $$

- (a) Donnez la matrice $A$ qui représente cette forme quadratique (1 point).
- (b) Trouvez les valeurs propres de $A$. Quel est le genre de $A$ (2 points) ?
- (c) Donnez la matrice orthogonale $S$ qui diagonalise $A$ (4 points).
- (d) Supposons que l'on est intéressé par le maximum $q_{\max}$ de $Q(X)$ sous la contrainte $\|X\| = 1$. Donnez $q_{\max}$ et $X$ tel que $Q(X) = q_{\max}$ et $\|X\| = 1$ (1 point).`,
      hints: [
        String.raw`(a) Règle du cours : sur la diagonale de $A$, les coefficients des $x_i^2$ ; hors diagonale, la **moitié** du coefficient de chaque terme croisé $x_ix_j$, placée symétriquement. Attention : ici il n'y a pas de terme en $x_1^2$, la position $(1,1)$ contient donc un 0.`,
        String.raw`(b) Calcule $\det(A - \lambda I)$ en développant selon la **deuxième ligne** (ou colonne) : elle ne contient qu'un seul élément non nul, le polynôme se factorise tout seul.`,
        String.raw`Contrôle intermédiaire : tu devrais trouver $\mathrm{tr}(A) = 1$ et $\det A = 8$ — la somme et le produit de tes trois valeurs propres doivent redonner ces deux nombres.`,
        String.raw`(c) Un vecteur propre par valeur propre, chacun **normé** ; ils sont automatiquement orthogonaux deux à deux ($A$ symétrique, valeurs propres distinctes). (d) Le maximum de $Q$ sur la sphère unité est lié à la plus grande valeur propre — regarde où il est atteint.`,
      ],
      steps: [
        {
          title: "(a) Poser la matrice symétrique de la forme quadratique",
          content: String.raw`📖 **Rappel (démo 7.1).** Toute forme quadratique s'écrit $Q(X) = X^T A X$ avec $A$ **symétrique** : $a_{ii}$ = coefficient de $x_i^2$, et $a_{ij} = a_{ji}$ = moitié du coefficient de $x_i x_j$ pour $i \neq j$.

Ici : coefficient de $x_1^2$ : $0$ ; de $x_2^2$ : $-2$ ; de $x_3^2$ : $3$ ; de $x_1x_3$ : $-4$, donc $a_{13} = a_{31} = -2$ ; pas de terme en $x_1x_2$ ni $x_2x_3$.

$$ A = \begin{pmatrix} 0 & 0 & -2 \\ 0 & -2 & 0 \\ -2 & 0 & 3 \end{pmatrix} $$

**Contrôle :** $X^T A X = 0 \cdot x_1^2 - 2x_2^2 + 3x_3^2 + 2 \cdot (-2)\, x_1 x_3 = 3x_3^2 - 2x_2^2 - 4x_1x_3$, c'est bien $Q$.`,
        },
        {
          title: "(b) Le polynôme caractéristique se factorise via la 2e ligne",
          content: String.raw`$$ \det(A - \lambda I) = \begin{vmatrix} -\lambda & 0 & -2 \\ 0 & -2-\lambda & 0 \\ -2 & 0 & 3-\lambda \end{vmatrix} $$

La deuxième ligne n'a qu'un élément non nul : développe selon elle.

$$ \det(A - \lambda I) = (-2-\lambda) \begin{vmatrix} -\lambda & -2 \\ -2 & 3-\lambda \end{vmatrix} = (-2-\lambda)\left[ -\lambda(3-\lambda) - 4 \right] $$

$$ = -(\lambda + 2)(\lambda^2 - 3\lambda - 4) = -(\lambda+2)(\lambda-4)(\lambda+1) $$

(le trinôme $\lambda^2 - 3\lambda - 4$ a pour racines $4$ et $-1$ : produit $-4$, somme $3$).

Les valeurs propres sont $\lambda_1 = -2$, $\lambda_2 = -1$, $\lambda_3 = 4$.`,
        },
        {
          title: "(b) Vérification trace/déterminant et genre",
          content: String.raw`**Double contrôle :**

- trace : $\mathrm{tr}(A) = 0 - 2 + 3 = 1$ et $(-2) + (-1) + 4 = 1$, ça colle
- déterminant (développement selon la 2e ligne) : $\det A = (-2) \begin{vmatrix} 0 & -2 \\ -2 & 3 \end{vmatrix} = (-2)(0 - 4) = 8$, et $(-2)(-1)(4) = 8$, ça colle aussi

📖 **Rappel (genre).** Le genre se lit sur les signes des valeurs propres : toutes strictement positives, définie positive ; toutes positives ou nulles, semi-définie positive ; idem côté négatif ; des valeurs propres **des deux signes**, indéfinie.

Ici $-2 < 0$, $-1 < 0$ et $4 > 0$ : $A$ (et donc $Q$) est **indéfinie** — $Q$ prend des valeurs strictement positives et strictement négatives.`,
        },
        {
          title: "(c) Vecteur propre pour λ = −2",
          content: String.raw`Résous $(A + 2I)V = O$ :

$$ \left(\begin{array}{ccc} 2 & 0 & -2 \\ 0 & 0 & 0 \\ -2 & 0 & 5 \end{array}\right) \begin{pmatrix} v_1 \\ v_2 \\ v_3 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix} \iff \begin{cases} 2v_1 - 2v_3 = 0 \\ -2v_1 + 5v_3 = 0 \end{cases} $$

La première équation donne $v_1 = v_3$ ; réinjectée dans la seconde : $3v_3 = 0$, donc $v_1 = v_3 = 0$ et $v_2$ est libre.

$$ V_1 = (0,\ 1,\ 0)^T, \qquad \|V_1\| = 1 $$

(logique : la variable $x_2$ est découplée dans $Q$, avec coefficient $-2$).`,
        },
        {
          title: "(c) Vecteurs propres pour λ = −1 et λ = 4",
          content: String.raw`**Pour $\lambda = -1$ :** $(A + I)V = O$ donne

$$ \begin{cases} v_1 - 2v_3 = 0 \\ -v_2 = 0 \\ -2v_1 + 4v_3 = 0 \end{cases} $$

La ligne 3 est $-2$ fois la ligne 1 (normal : le système doit être indéterminé). Donc $v_2 = 0$, $v_1 = 2v_3$ :

$$ V_2 = (2,\ 0,\ 1)^T, \qquad \|V_2\| = \sqrt{4 + 0 + 1} = \sqrt{5} $$

**Pour $\lambda = 4$ :** $(A - 4I)V = O$ donne

$$ \begin{cases} -4v_1 - 2v_3 = 0 \\ -6v_2 = 0 \\ -2v_1 - v_3 = 0 \end{cases} $$

Donc $v_2 = 0$ et $v_3 = -2v_1$ (les lignes 1 et 3 sont proportionnelles) :

$$ V_3 = (1,\ 0,\ -2)^T, \qquad \|V_3\| = \sqrt{1 + 0 + 4} = \sqrt{5} $$`,
        },
        {
          title: "(c) Assembler la matrice orthogonale S",
          content: String.raw`📖 **Rappel (démo 6.2).** $A$ étant symétrique à valeurs propres distinctes, ses vecteurs propres sont **automatiquement orthogonaux** deux à deux. Vérifions quand même : $V_1 \bullet V_2 = 0$, $V_1 \bullet V_3 = 0$, $V_2 \bullet V_3 = 2 \cdot 1 + 0 + 1 \cdot (-2) = 0$.

Il suffit donc de **normer** chaque vecteur et de les ranger en colonnes (dans l'ordre des valeurs propres annoncé) :

$$ S = \begin{pmatrix} 0 & \frac{2}{\sqrt{5}} & \frac{1}{\sqrt{5}} \\ 1 & 0 & 0 \\ 0 & \frac{1}{\sqrt{5}} & \frac{-2}{\sqrt{5}} \end{pmatrix} $$

Alors $S^T S = I$ (colonnes orthonormées) et

$$ S^T A S = \begin{pmatrix} -2 & 0 & 0 \\ 0 & -1 & 0 \\ 0 & 0 & 4 \end{pmatrix} $$

**Contrôle rapide :** $AV_3 = (0 + 0 + (-2)(-2),\ 0,\ -2 \cdot 1 + 3 \cdot (-2))^T = (4,\ 0,\ -8)^T = 4V_3$, cohérent.`,
        },
        {
          title: "(d) Maximum de Q sur la sphère unité",
          content: String.raw`📖 **Rappel (chapitre 7).** Dans la base orthonormée des vecteurs propres, $Q$ prend la forme diagonale $-2y_1^2 - y_2^2 + 4y_3^2$, et le changement de base orthogonal conserve la norme ($\|Y\| = \|X\|$). Sous $\|Y\| = 1$ :

$$ Q = -2y_1^2 - y_2^2 + 4y_3^2 \leq 4(y_1^2 + y_2^2 + y_3^2) = 4 $$

avec égalité si $y_1 = y_2 = 0$, $y_3 = \pm 1$ : le maximum est la **plus grande valeur propre**, atteint au vecteur propre normé correspondant.

$$ q_{\max} = 4, \qquad X = \pm \frac{1}{\sqrt{5}}(1,\ 0,\ -2)^T $$

**Vérification directe** avec $X = \left(\frac{1}{\sqrt 5},\ 0,\ \frac{-2}{\sqrt 5}\right)^T$ : d'abord $\|X\|^2 = \frac{1}{5} + \frac{4}{5} = 1$, puis

$$ Q(X) = 3 \cdot \frac{4}{5} - 0 - 4 \cdot \frac{1}{\sqrt 5} \cdot \frac{-2}{\sqrt 5} = \frac{12}{5} + \frac{8}{5} = 4 $$

Tout est cohérent.`,
        },
      ],
      answer: String.raw`(a) $A = \begin{pmatrix} 0 & 0 & -2 \\ 0 & -2 & 0 \\ -2 & 0 & 3 \end{pmatrix}$. (b) Valeurs propres $-2$, $-1$, $4$ (contrôles : somme $= \mathrm{tr}(A) = 1$, produit $= \det A = 8$) ; genre : **indéfinie**. (c) $S = \begin{pmatrix} 0 & 2/\sqrt{5} & 1/\sqrt{5} \\ 1 & 0 & 0 \\ 0 & 1/\sqrt{5} & -2/\sqrt{5} \end{pmatrix}$, avec $S^T A S = \mathrm{diag}(-2, -1, 4)$. (d) $q_{\max} = 4$, atteint en $X = \pm\frac{1}{\sqrt 5}(1,\ 0,\ -2)^T$.`,
      examTips: [
        String.raw`8 points, l'une des deux grosses questions : compte environ 35 minutes. Le (c) vaut 4 points à lui seul — c'est là que se joue la question.`,
        String.raw`Le piège du (a) : les coefficients croisés se **divisent par 2** ($-4x_1x_3$ donne $-2$ en positions $(1,3)$ et $(3,1)$) et le coefficient absent de $x_1^2$ donne un 0 sur la diagonale.`,
        String.raw`Vérifie systématiquement tes valeurs propres avec $\mathrm{tr}(A)$ et $\det A$ **avant** de chercher les vecteurs propres : 30 secondes qui peuvent sauver 6 points de calculs en aval.`,
        String.raw`Dans chaque système $(A - \lambda I)V = O$, une équation doit être redondante — si tu n'obtiens que $V = O$, ta valeur propre est fausse : stop et recalcule.`,
        String.raw`Pour le (d), aucune optimisation à refaire : cite le théorème du cours (max sur la sphère unité = plus grande valeur propre, atteint au vecteur propre normé) puis vérifie en réinjectant dans $Q$.`,
      ],
      exerciseRefs: ["7.2", "7.1", "6.3"],
    },
    {
      id: "q6",
      number: 6,
      title: "Sous-vectoriel : dimension et base orthonormée",
      points: 4,
      chapters: [4, 5],
      kind: "exercice",
      statement: String.raw`Soit $V = L(X_1, X_2, X_3)$ le sous-vectoriel engendré par les vecteurs

$$ X_1 = \begin{pmatrix} 2 \\ 3 \\ -2 \end{pmatrix}, \qquad X_2 = \begin{pmatrix} 4 \\ 2 \\ 0 \end{pmatrix}, \qquad X_3 = \begin{pmatrix} 4 \\ 1 \\ 1 \end{pmatrix} $$

- (a) Donnez la dimension $\dim(V)$ (1.5 points).
- (b) Trouvez une base orthonormée de $V$ (2.5 points).`,
      hints: [
        String.raw`(a) La dimension de $L(X_1, X_2, X_3)$ est le nombre maximal de vecteurs linéairement indépendants parmi les générateurs — c'est le rang de la matrice dont ils sont les colonnes. Un déterminant $3 \times 3$ tranche d'un coup le cas « dimension 3 ».`,
        String.raw`Contrôle intermédiaire : tu devrais trouver un déterminant nul. La dimension est donc au plus 2 — il reste à vérifier que deux des vecteurs ne sont pas proportionnels.`,
        String.raw`(b) Applique le procédé de Gram–Schmidt à une base extraite (deux des trois vecteurs). Astuce : tu as le droit de choisir l'ordre — commencer par $X_2 = (4, 2, 0)^T$, de norme $2\sqrt 5$, donne des calculs plus doux que commencer par $X_1$, de norme $\sqrt{17}$.`,
      ],
      steps: [
        {
          title: "(a) Tester l'indépendance par un déterminant",
          content: String.raw`Range les trois vecteurs en colonnes et calcule le déterminant (développement selon la première ligne) :

$$ \begin{vmatrix} 2 & 4 & 4 \\ 3 & 2 & 1 \\ -2 & 0 & 1 \end{vmatrix} = 2 \begin{vmatrix} 2 & 1 \\ 0 & 1 \end{vmatrix} - 4 \begin{vmatrix} 3 & 1 \\ -2 & 1 \end{vmatrix} + 4 \begin{vmatrix} 3 & 2 \\ -2 & 0 \end{vmatrix} $$

$$ = 2(2) - 4(3 + 2) + 4(0 + 4) = 4 - 20 + 16 = 0 $$

📖 **Rappel.** Déterminant nul $\iff$ les trois colonnes sont linéairement dépendantes. Donc $\dim(V) \leq 2$.`,
        },
        {
          title: "(a) Conclure : dim(V) = 2",
          content: String.raw`$X_1$ et $X_2$ ne sont pas proportionnels (il faudrait un même rapport composante par composante, or $\frac{4}{2} = 2$ mais $\frac{2}{3} \neq 2$) : ils forment un système libre. Donc

$$ \dim(V) = 2 $$

et $\{X_1, X_2\}$ est une base de $V$ (un plan de $\mathbb{R}^3$).

**Pour visualiser la dépendance** (utile en vérification) : cherche $X_3 = \alpha X_1 + \beta X_2$. La 3e composante donne $-2\alpha = 1$, soit $\alpha = -\frac{1}{2}$ ; la 1re donne $2\alpha + 4\beta = 4$, soit $\beta = \frac{5}{4}$ ; contrôle sur la 2e : $3 \cdot \left(-\frac{1}{2}\right) + 2 \cdot \frac{5}{4} = -\frac{3}{2} + \frac{5}{2} = 1$, exact. Donc $X_3 = -\frac{1}{2}X_1 + \frac{5}{4}X_2$ : $X_3$ n'apporte rien de neuf.`,
        },
        {
          title: "(b) Gram–Schmidt : choisir un ordre malin",
          content: String.raw`📖 **Rappel (procédé de Gram–Schmidt).** À partir d'une base $\{Y_1, Y_2\}$, on construit une base orthonormée en normant $Y_1$, puis en retirant de $Y_2$ sa projection sur $Y_1$ avant de normer le reste.

On travaille avec la base $\{X_2, X_1\}$ — commencer par $X_2$ est plus confortable car $\|X_2\| = \sqrt{16 + 4 + 0} = \sqrt{20} = 2\sqrt 5$ se simplifie bien :

$$ E_1 = \frac{X_2}{\|X_2\|} = \frac{1}{2\sqrt 5}(4,\ 2,\ 0)^T = \frac{1}{\sqrt 5}(2,\ 1,\ 0)^T $$`,
        },
        {
          title: "(b) Orthogonaliser X₁ contre X₂",
          content: String.raw`Retire de $X_1$ sa projection orthogonale sur $X_2$ :

$$ Z = X_1 - \frac{X_1 \bullet X_2}{X_2 \bullet X_2}\, X_2 $$

avec $X_1 \bullet X_2 = 8 + 6 + 0 = 14$ et $X_2 \bullet X_2 = 20$, donc le coefficient vaut $\frac{14}{20} = \frac{7}{10}$ :

$$ Z = \begin{pmatrix} 2 \\ 3 \\ -2 \end{pmatrix} - \frac{7}{10} \begin{pmatrix} 4 \\ 2 \\ 0 \end{pmatrix} = \begin{pmatrix} 2 - \frac{14}{5} \\ 3 - \frac{7}{5} \\ -2 \end{pmatrix} = \begin{pmatrix} -4/5 \\ 8/5 \\ -2 \end{pmatrix} $$

Pour normer sans fractions, remplace $Z$ par le vecteur proportionnel $\frac{5}{2}Z = (-2,\ 4,\ -5)^T$ (multiplier par un scalaire ne change ni la direction ni l'orthogonalité).

**Contrôle d'orthogonalité :** $(-2, 4, -5)^T \bullet (4, 2, 0)^T = -8 + 8 + 0 = 0$, parfait.`,
        },
        {
          title: "(b) Normer et conclure",
          content: String.raw`$$ \|(-2,\ 4,\ -5)^T\| = \sqrt{4 + 16 + 25} = \sqrt{45} = 3\sqrt 5 $$

$$ E_2 = \frac{1}{3\sqrt 5}(-2,\ 4,\ -5)^T $$

**Base orthonormée de $V$ :**

$$ \left\{ \frac{1}{\sqrt 5}\begin{pmatrix} 2 \\ 1 \\ 0 \end{pmatrix},\ \frac{1}{3\sqrt 5}\begin{pmatrix} -2 \\ 4 \\ -5 \end{pmatrix} \right\} $$

**Vérifications finales :** $\|E_1\| = \frac{\sqrt{4+1}}{\sqrt 5} = 1$ ; $\|E_2\| = \frac{3\sqrt 5}{3\sqrt 5} = 1$ ; $E_1 \bullet E_2 = 0$ ; et $E_2 \in V$ puisque $E_2$ est une combinaison de $X_1$ et $X_2$ par construction. (Toute autre base orthonormée de ce plan est acceptée, par exemple celle obtenue en commençant par $X_1$ : $\frac{1}{\sqrt{17}}(2,\ 3,\ -2)^T$ et $\frac{1}{3\sqrt{17}}(10,\ -2,\ 7)^T$.)`,
        },
      ],
      answer: String.raw`(a) $\det(X_1 | X_2 | X_3) = 0$ et $X_1, X_2$ non proportionnels : $\dim(V) = 2$ (on a d'ailleurs $X_3 = -\frac{1}{2}X_1 + \frac{5}{4}X_2$). (b) Une base orthonormée de $V$ : $E_1 = \frac{1}{\sqrt 5}(2,\ 1,\ 0)^T$ et $E_2 = \frac{1}{3\sqrt 5}(-2,\ 4,\ -5)^T$.`,
      examTips: [
        String.raw`Ne lance pas Gram–Schmidt sur les **trois** vecteurs : la question (a) t'avertit justement que l'un d'eux est redondant. Extrais d'abord une base (deux vecteurs indépendants), sinon tu obtiendras un vecteur nul en cours de procédé et tu perdras dix minutes.`,
        String.raw`L'ordre des vecteurs dans Gram–Schmidt est libre : choisis en premier celui dont la norme est la plus simple ($\sqrt{20}$ plutôt que $\sqrt{17}$ ici). Toutes les bases orthonormées correctes valent les mêmes points.`,
        String.raw`Vérification express avant de rendre : les deux vecteurs doivent être de norme 1 et de produit scalaire nul — trois petits calculs que le correcteur adore voir écrits.`,
        String.raw`Astuce anti-fractions : après l'orthogonalisation, remplace le vecteur obtenu par un multiple entier avant de le normer.`,
      ],
      exerciseRefs: ["5.2", "4.7", "5.3"],
    },
    {
      id: "q7",
      number: 7,
      title: "Système paramétrique : Cramer et discussion complète",
      points: 8,
      chapters: [2, 3],
      kind: "exercice",
      statement: String.raw`Pour $X = (x_1, x_2, x_3)^T$ et $a \in \mathbb{R}$, on considère le système d'équations linéaire $AX = B$, où

$$ A = \begin{pmatrix} 2 & 2a & a+1 \\ 2a-1 & a & 1 \\ a(a+2) & 3a & a+2 \end{pmatrix}, \qquad B = \begin{pmatrix} 2 \\ 1 \\ 3 \end{pmatrix} $$

- (a) Déterminez la/les valeur(s) du paramètre $a$ pour lesquelles ce système possède une solution unique. Rechercher celle-ci avec la règle de Cramer (4 points).
- (b) Pour les autres valeurs de $a$, recherchez les solutions et écrivez-les sous forme vectorielle (4 points).

*Si vous n'avez pas réussi à résoudre la question (a), recherchez les solutions pour $a = 0$, $a = 1$ et $a = -1$.*`,
      hints: [
        String.raw`(a) Solution unique $\iff \det A \neq 0$ (système de Cramer). Calcule $\det A$ en développant selon la première ligne, puis **factorise sans développer brutalement** : chaque cofacteur contient déjà un facteur commun.`,
        String.raw`Contrôle intermédiaire : chacun des trois termes du développement contient le facteur $a(a-1)$ — mets-le en évidence avant de simplifier le crochet restant. Le déterminant final est un produit de facteurs du premier degré en $a$.`,
        String.raw`Pour Cramer, calcule les trois déterminants $\det A_i$ ($i$-ième colonne remplacée par $B$) : deux d'entre eux valent 0 — si tu trouves autre chose, recompte. La solution unique est donc très simple.`,
        String.raw`(b) Pour chaque valeur critique de $a$, réécris la matrice complétée $(A|B)$ **numériquement** et applique Gauss-Jordan. Attends-toi à trois issues différentes : un cas impossible, un cas simplement indéterminé et un cas doublement indéterminé.`,
      ],
      steps: [
        {
          title: "(a) Calculer det A en développant selon la première ligne",
          content: String.raw`📖 **Rappel.** Le système carré $AX = B$ possède une solution unique $\iff \det A \neq 0$. On commence donc par $\det A$, en gardant l'œil sur les factorisations.

$$ \det A = 2 \begin{vmatrix} a & 1 \\ 3a & a+2 \end{vmatrix} - 2a \begin{vmatrix} 2a-1 & 1 \\ a(a+2) & a+2 \end{vmatrix} + (a+1) \begin{vmatrix} 2a-1 & a \\ a(a+2) & 3a \end{vmatrix} $$

Calcule chaque mineur **en factorisant au fur et à mesure** :

- $a(a+2) - 3a = a^2 - a = a(a-1)$
- $(2a-1)(a+2) - a(a+2) = (a+2)(2a - 1 - a) = (a+2)(a-1)$
- $3a(2a-1) - a \cdot a(a+2) = a\left[6a - 3 - a^2 - 2a\right] = a(-a^2 + 4a - 3) = -a(a-1)(a-3)$

D'où :

$$ \det A = 2a(a-1) - 2a(a+2)(a-1) - a(a+1)(a-1)(a-3) $$`,
        },
        {
          title: "(a) Factoriser : det A = −a(a+1)(a−1)²",
          content: String.raw`Le facteur $a(a-1)$ apparaît dans les trois termes — mets-le en évidence :

$$ \det A = a(a-1)\Big[ 2 - 2(a+2) - (a+1)(a-3) \Big] $$

Simplifie le crochet :

$$ 2 - 2a - 4 - (a^2 - 2a - 3) = -2a - 2 - a^2 + 2a + 3 = 1 - a^2 = (1-a)(1+a) $$

$$ \det A = a(a-1)(1-a)(1+a) = -a(a+1)(a-1)^2 $$

**Contrôle par valeur test** ($a = 2$) : $A = \begin{pmatrix} 2 & 4 & 3 \\ 3 & 2 & 1 \\ 8 & 6 & 4 \end{pmatrix}$, $\det A = 2(8-6) - 4(12-8) + 3(18-16) = 4 - 16 + 6 = -6$ ; la formule donne $-2 \cdot 3 \cdot 1^2 = -6$, ça colle.

**Conclusion :** $\det A = 0 \iff a \in \{0,\ 1,\ -1\}$. Le système possède une solution unique si et seulement si $a \neq 0$, $a \neq 1$ et $a \neq -1$ — exactement les trois valeurs suggérées par l'énoncé de secours du (b).`,
        },
        {
          title: "(a) Règle de Cramer : trois déterminants",
          content: String.raw`📖 **Rappel (démo 3.2).** $x_i = \frac{\det A_i}{\det A}$ où $A_i$ est $A$ avec la $i$-ième colonne remplacée par $B$.

**$\det A_1$** (colonne 1 remplacée par $B$), développement selon la première ligne :

$$ \det A_1 = \begin{vmatrix} 2 & 2a & a+1 \\ 1 & a & 1 \\ 3 & 3a & a+2 \end{vmatrix} = 2 \cdot a(a-1) - 2a(a - 1) + (a+1)(3a - 3a) = 0 $$

(mineurs : $a(a+2) - 3a = a(a-1)$ ; $(a+2) - 3 = a - 1$ ; $3a - 3a = 0$.)

**$\det A_2$** (colonne 2 remplacée par $B$) :

$$ \det A_2 = \begin{vmatrix} 2 & 2 & a+1 \\ 2a-1 & 1 & 1 \\ a(a+2) & 3 & a+2 \end{vmatrix} = 2(a-1) - 2(a+2)(a-1) - (a+1)(a-1)(a-3) $$

(mineurs : $(a+2) - 3 = a-1$ ; $(2a-1)(a+2) - a(a+2) = (a+2)(a-1)$ ; $3(2a-1) - a(a+2) = -a^2 + 4a - 3 = -(a-1)(a-3)$.)

C'est le **même crochet** que pour $\det A$, sans le facteur $a$ :

$$ \det A_2 = (a-1)\left[2 - 2(a+2) - (a+1)(a-3)\right] = (a-1)(1 - a^2) = -(a-1)^2(a+1) $$

**$\det A_3$** (colonne 3 remplacée par $B$) :

$$ \det A_3 = \begin{vmatrix} 2 & 2a & 2 \\ 2a-1 & a & 1 \\ a(a+2) & 3a & 3 \end{vmatrix} = 2(3a - 3a) - 2a\left[-(a-1)(a-3)\right] + 2\left[-a(a-1)(a-3)\right] = 0 $$

(les deux derniers termes sont opposés : $3(2a-1) - a(a+2) = -(a-1)(a-3)$ et $3a(2a-1) - a^2(a+2) = -a(a-1)(a-3)$.)`,
        },
        {
          title: "(a) La solution unique et sa vérification",
          content: String.raw`Pour $a \notin \{0,\ 1,\ -1\}$ :

$$ x_1 = \frac{0}{\det A} = 0, \qquad x_2 = \frac{-(a-1)^2(a+1)}{-a(a+1)(a-1)^2} = \frac{1}{a}, \qquad x_3 = \frac{0}{\det A} = 0 $$

$$ X = \left(0,\ \frac{1}{a},\ 0\right)^T $$

**Vérification par réinjection** (obligatoire, elle prend 15 secondes) : $AX = \frac{1}{a} \times$ (deuxième colonne de $A$) $= \frac{1}{a}(2a,\ a,\ 3a)^T = (2,\ 1,\ 3)^T = B$, exact. On voit d'ailleurs **pourquoi** la solution est si simple : $B$ est précisément $\frac{1}{a}$ fois la deuxième colonne de $A$.`,
        },
        {
          title: "(b) Cas a = 0 : système impossible",
          content: String.raw`Pour $a = 0$, la matrice complétée est :

$$ \left(\begin{array}{ccc|c} 2 & 0 & 1 & 2 \\ -1 & 0 & 1 & 1 \\ 0 & 0 & 2 & 3 \end{array}\right) \xrightarrow{L_2 \leftarrow 2L_2 + L_1} \left(\begin{array}{ccc|c} 2 & 0 & 1 & 2 \\ 0 & 0 & 3 & 4 \\ 0 & 0 & 2 & 3 \end{array}\right) \xrightarrow{L_3 \leftarrow 3L_3 - 2L_2} \left(\begin{array}{ccc|c} 2 & 0 & 1 & 2 \\ 0 & 0 & 3 & 4 \\ 0 & 0 & 0 & 1 \end{array}\right) $$

La dernière ligne se lit $0 = 1$ : **absurde**. En termes de rangs : $\mathrm{rg}(A) = 2 < 3 = \mathrm{rg}(A|B)$, donc par le théorème de Rouché-Fontené le système est **impossible** — aucune solution.

(Intuition : les lignes 2 et 3 exigeraient $x_3 = \frac{4}{3}$ et $x_3 = \frac{3}{2}$ à la fois.)`,
        },
        {
          title: "(b) Cas a = 1 : système doublement indéterminé",
          content: String.raw`Pour $a = 1$ :

$$ \left(\begin{array}{ccc|c} 2 & 2 & 2 & 2 \\ 1 & 1 & 1 & 1 \\ 3 & 3 & 3 & 3 \end{array}\right) \xrightarrow[L_3 \leftarrow L_3 - 3L_2]{L_1 \leftarrow L_1 - 2L_2} \left(\begin{array}{ccc|c} 0 & 0 & 0 & 0 \\ 1 & 1 & 1 & 1 \\ 0 & 0 & 0 & 0 \end{array}\right) $$

Les trois équations sont identiques : $\mathrm{rg}(A) = \mathrm{rg}(A|B) = 1$, avec $3 - 1 = 2$ inconnues libres — système **doublement indéterminé**. Pose $x_2 = s$, $x_3 = t$ : alors $x_1 = 1 - s - t$ et

$$ X = \begin{pmatrix} 1 \\ 0 \\ 0 \end{pmatrix} + s \begin{pmatrix} -1 \\ 1 \\ 0 \end{pmatrix} + t \begin{pmatrix} -1 \\ 0 \\ 1 \end{pmatrix}, \qquad s, t \in \mathbb{R} $$

**Vérification :** la somme des composantes de chaque solution vaut $(1 - s - t) + s + t = 1$ — c'est bien l'unique équation $x_1 + x_2 + x_3 = 1$.`,
        },
        {
          title: "(b) Cas a = −1 : système simplement indéterminé",
          content: String.raw`Pour $a = -1$ : $2a = -2$, $a + 1 = 0$, $2a - 1 = -3$, $a(a+2) = -1$, $3a = -3$, $a + 2 = 1$ :

$$ \left(\begin{array}{ccc|c} 2 & -2 & 0 & 2 \\ -3 & -1 & 1 & 1 \\ -1 & -3 & 1 & 3 \end{array}\right) \xrightarrow{L_1 \leftarrow \frac{1}{2}L_1} \left(\begin{array}{ccc|c} 1 & -1 & 0 & 1 \\ -3 & -1 & 1 & 1 \\ -1 & -3 & 1 & 3 \end{array}\right) \xrightarrow[L_3 \leftarrow L_3 + L_1]{L_2 \leftarrow L_2 + 3L_1} \left(\begin{array}{ccc|c} 1 & -1 & 0 & 1 \\ 0 & -4 & 1 & 4 \\ 0 & -4 & 1 & 4 \end{array}\right) $$

$$ \xrightarrow{L_3 \leftarrow L_3 - L_2} \left(\begin{array}{ccc|c} 1 & -1 & 0 & 1 \\ 0 & -4 & 1 & 4 \\ 0 & 0 & 0 & 0 \end{array}\right) $$

$\mathrm{rg}(A) = \mathrm{rg}(A|B) = 2$, $3 - 2 = 1$ inconnue libre : système **simplement indéterminé**. Pose $x_2 = t$ : la ligne 2 donne $x_3 = 4 + 4t$ ; la ligne 1 donne $x_1 = 1 + t$ :

$$ X = \begin{pmatrix} 1 \\ 0 \\ 4 \end{pmatrix} + t \begin{pmatrix} 1 \\ 1 \\ 4 \end{pmatrix}, \qquad t \in \mathbb{R} $$

**Vérification** (avec $t = 0$ dans le système d'origine) : ligne 1 : $2 \cdot 1 - 0 = 2$ ; ligne 2 : $-3 - 0 + 4 = 1$ ; ligne 3 : $-1 - 0 + 4 = 3$ — tout colle. Et le vecteur directeur : $A(1,\ 1,\ 4)^T = (2 - 2 + 0,\ -3 - 1 + 4,\ -1 - 3 + 4)^T = O$, il est bien dans le noyau.`,
        },
      ],
      answer: String.raw`(a) $\det A = -a(a+1)(a-1)^2$ : solution unique $\iff a \notin \{0,\ 1,\ -1\}$, et Cramer donne $X = \left(0,\ \frac{1}{a},\ 0\right)^T$ (car $\det A_1 = \det A_3 = 0$ et $\det A_2 = -(a-1)^2(a+1)$). (b) $a = 0$ : système **impossible** ($\mathrm{rg}(A|B) = 3 > 2 = \mathrm{rg}(A)$). $a = 1$ : **doublement indéterminé**, $X = (1, 0, 0)^T + s(-1, 1, 0)^T + t(-1, 0, 1)^T$. $a = -1$ : **simplement indéterminé**, $X = (1, 0, 4)^T + t(1, 1, 4)^T$.`,
      examTips: [
        String.raw`8 points : prévois 35 minutes. Le déterminant factorisé est le nœud de la question — si tu développes tout en un polynôme de degré 4 sans factoriser, tu ne retrouveras jamais les racines. Factorise chaque mineur **avant** d'additionner.`,
        String.raw`L'énoncé de secours (« traitez $a = 0$, $a = 1$ et $a = -1$ ») te souffle les valeurs critiques : si ton déterminant ne s'annule pas exactement en ces trois valeurs, il est faux — recalcule avant de continuer.`,
        String.raw`Contrôle malin : teste ta formule de $\det A$ sur une valeur simple ($a = 2$ par exemple) en recalculant le déterminant numériquement. Deux minutes qui sécurisent 4 points.`,
        String.raw`En (b), conclus chaque cas avec le vocabulaire attendu (impossible / simplement indéterminé / doublement indéterminé) et la **forme vectorielle** demandée — point de départ + vecteur(s) directeur(s). Vérifie chaque solution particulière par réinjection.`,
      ],
      exerciseRefs: ["3.6", "3.4", "2.3"],
    },
    {
      id: "q8",
      number: 8,
      title: "Intégrale double sur un domaine non rectangulaire",
      points: 3,
      chapters: [8],
      kind: "exercice",
      statement: String.raw`Calculez l'intégrale suivante et représentez graphiquement le domaine d'intégration.

$$ \int_0^1 \int_{x^2}^{1} (3 + 2xy)\, dy\, dx $$`,
      hints: [
        String.raw`Lis les bornes de l'intérieur vers l'extérieur : pour chaque $x$ fixé entre 0 et 1, $y$ court de $x^2$ à $1$. Trace la parabole $y = x^2$ et la droite $y = 1$ pour visualiser le domaine avant tout calcul.`,
        String.raw`Commence par l'intégrale intérieure en $y$ ($x$ est une constante à ce stade) : une primitive de $3 + 2xy$ en $y$ est $3y + xy^2$. Évalue soigneusement en $y = x^2$ : attention, $x \cdot (x^2)^2 = x^5$.`,
        String.raw`Contrôle intermédiaire : l'intégrale intérieure doit donner $3 + x - 3x^2 - x^5$, un polynôme en $x$ qu'il ne reste qu'à intégrer de 0 à 1.`,
      ],
      steps: [
        {
          title: "Décrire et représenter le domaine",
          content: String.raw`Les bornes signifient : $x$ parcourt $[0, 1]$ et, pour chaque $x$ fixé, $y$ va de $y = x^2$ (la parabole) à $y = 1$ (la droite horizontale). Le domaine est donc

$$ D = \{(x, y) : 0 \leq x \leq 1,\ x^2 \leq y \leq 1\} $$

c'est la région **au-dessus de la parabole $y = x^2$ et sous la droite $y = 1$**, pour $x$ entre 0 et 1 : un triangle curviligne de sommets $(0, 0)$, $(1, 1)$ et $(0, 1)$, bordé à gauche par l'axe des $y$. La parabole et la droite se coupent en $(1, 1)$.

Sur ta copie : dessine la parabole de $(0,0)$ à $(1,1)$, la droite $y = 1$, et hachure la région comprise entre les deux.`,
        },
        {
          title: "Intégrale intérieure (en y, à x fixé)",
          content: String.raw`📖 **Rappel.** Dans $\int_{x^2}^{1} (3 + 2xy)\, dy$, la variable est $y$ ; $x$ est traité comme une constante. Une primitive en $y$ de $3 + 2xy$ est $3y + xy^2$.

$$ \int_{x^2}^{1} (3 + 2xy)\, dy = \Big[ 3y + xy^2 \Big]_{y = x^2}^{y = 1} = (3 + x) - \left(3x^2 + x \cdot x^4\right) = 3 + x - 3x^2 - x^5 $$

Attention au terme en $y = x^2$ : $x \cdot (x^2)^2 = x^5$ (et non $x^4$) — c'est LE piège de la question.`,
        },
        {
          title: "Intégrale extérieure (en x)",
          content: String.raw`$$ \int_0^1 \left(3 + x - 3x^2 - x^5\right) dx = \left[ 3x + \frac{x^2}{2} - x^3 - \frac{x^6}{6} \right]_0^1 = 3 + \frac{1}{2} - 1 - \frac{1}{6} $$

Mets tout sur 6 :

$$ = \frac{18 + 3 - 6 - 1}{6} = \frac{14}{6} = \frac{7}{3} $$`,
        },
        {
          title: "Vérification indépendante : inverser l'ordre d'intégration",
          content: String.raw`Le même domaine se décrit à $y$ fixé : $y \in [0, 1]$ et $x$ de $0$ à $\sqrt y$ (on est à gauche de la parabole, c'est-à-dire $x \leq \sqrt y$). On doit retrouver le même résultat :

$$ \int_0^1 \int_0^{\sqrt y} (3 + 2xy)\, dx\, dy = \int_0^1 \Big[ 3x + x^2 y \Big]_{x=0}^{x=\sqrt y}\, dy = \int_0^1 \left(3\sqrt y + y^2\right) dy $$

$$ = \left[ 2y^{3/2} + \frac{y^3}{3} \right]_0^1 = 2 + \frac{1}{3} = \frac{7}{3} $$

Les deux ordres d'intégration coïncident : le résultat $\frac{7}{3}$ est confirmé par une méthode indépendante.`,
        },
      ],
      answer: String.raw`$$ \int_0^1 \int_{x^2}^{1} (3 + 2xy)\, dy\, dx = \frac{7}{3} \approx 2.33 $$

Domaine : $D = \{(x, y) : 0 \leq x \leq 1,\ x^2 \leq y \leq 1\}$, la région comprise entre la parabole $y = x^2$ (bord inférieur) et la droite $y = 1$ (bord supérieur), de sommets $(0, 0)$, $(1, 1)$ et $(0, 1)$.`,
      examTips: [
        String.raw`Le dessin du domaine est **explicitement demandé** et vaut des points : parabole, droite $y = 1$, région hachurée, point d'intersection $(1, 1)$. Ne le saute pas.`,
        String.raw`Piège numéro 1 : l'évaluation en $y = x^2$ donne $x \cdot (x^2)^2 = x^5$. Écris l'étape intermédiaire au lieu de la faire de tête.`,
        String.raw`Si tu as 3 minutes en fin d'examen, refais le calcul dans l'autre ordre ($x$ de 0 à $\sqrt y$) : retomber sur $\frac{7}{3}$ est la meilleure garantie possible — et la borne en $\sqrt y$ confirme que tu as bien compris le domaine.`,
        String.raw`3 points seulement : vise 10 minutes maximum, calcul propre et résultat en fraction irréductible comme l'exigent les consignes de l'examen.`,
      ],
      exerciseRefs: ["8.4", "8.5", "8.6"],
    },
  ],
};
