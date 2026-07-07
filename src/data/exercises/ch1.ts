import type { Exercise } from "./types";

export const exercises: Exercise[] = [
  {
    id: "1.1",
    chapter: 1,
    title: "Matrices qui commutent",
    examType: false,
    statement: String.raw`Quelles sont les matrices qui commutent avec les matrices suivantes ?`,
    method: String.raw`Deux matrices $A$ et $M$ commutent si $AM = MA$. Pose une matrice inconnue $M$ avec des coefficients $a, b, c, d, \dots$, calcule les deux produits $AM$ et $MA$, puis égalise-les coefficient par coefficient : tu obtiens un petit système d'équations qui te dit quelles contraintes doivent respecter les coefficients de $M$.`,
    theoryRefs: ["Produit matriciel", "Matrices particulières"],
    parts: [
      {
        label: "a",
        statement: String.raw`$A = \begin{pmatrix} 1 & 0 \\ -1 & 1 \end{pmatrix}$`,
        steps: [
          {
            title: "Poser la matrice inconnue",
            content: String.raw`📖 **Rappel du cours :** le produit matriciel n'est **pas commutatif** en général : $AM \neq MA$. On cherche ici précisément toutes les matrices $M$ pour lesquelles l'égalité $AM = MA$ est vraie.

Pour que les deux produits $AM$ et $MA$ existent et soient de même dimension, $M$ doit être carrée de dimension $(2 \times 2)$, comme $A$. On pose donc

$$ M = \begin{pmatrix} a & b \\ c & d \end{pmatrix}, \qquad a, b, c, d \in \mathbb{R}. $$`,
          },
          {
            title: "Calculer les deux produits",
            content: String.raw`On calcule chaque produit ligne par colonne :

$$ AM = \begin{pmatrix} 1 & 0 \\ -1 & 1 \end{pmatrix} \begin{pmatrix} a & b \\ c & d \end{pmatrix} = \begin{pmatrix} a & b \\ -a + c & -b + d \end{pmatrix} $$

$$ MA = \begin{pmatrix} a & b \\ c & d \end{pmatrix} \begin{pmatrix} 1 & 0 \\ -1 & 1 \end{pmatrix} = \begin{pmatrix} a - b & b \\ c - d & d \end{pmatrix} $$

Remarque que les deux résultats sont bien différents en général : c'est en les égalisant qu'on va trouver les contraintes sur $a, b, c, d$.`,
          },
          {
            title: "Égaliser coefficient par coefficient",
            content: String.raw`Deux matrices sont égales si et seulement si **tous** leurs coefficients correspondants sont égaux. En comparant $AM$ et $MA$ position par position :

$$ \begin{cases} a = a - b \\ b = b \\ -a + c = c - d \\ -b + d = d \end{cases} $$

- La première équation donne $b = 0$ (la quatrième redonne la même chose).
- La troisième donne $-a = -d$, c'est-à-dire $d = a$.
- Aucune contrainte sur $c$ : il reste libre.`,
          },
          {
            title: "Conclure et vérifier",
            content: String.raw`Les matrices qui commutent avec $A$ sont donc toutes les matrices de la forme

$$ M = \begin{pmatrix} a & 0 \\ c & a \end{pmatrix}, \qquad a, c \in \mathbb{R}. $$

**Vérification :** avec $M$ de cette forme,

$$ AM = \begin{pmatrix} a & 0 \\ -a + c & a \end{pmatrix} \quad \text{et} \quad MA = \begin{pmatrix} a & 0 \\ c - a & a \end{pmatrix}, $$

et comme $-a + c = c - a$, on a bien $AM = MA$ ✓. Remarque que $A$ elle-même est de cette forme (avec $a = 1$, $c = -1$), tout comme la matrice identité $I$ : c'est rassurant, car une matrice commute toujours avec elle-même et avec $I$.`,
          },
        ],
        answer: String.raw`Toutes les matrices de la forme $\begin{pmatrix} a & 0 \\ c & a \end{pmatrix}$ avec $a, c \in \mathbb{R}$.`,
      },
      {
        label: "b",
        statement: String.raw`$A = \begin{pmatrix} 2 & -1 \\ -1 & 2 \end{pmatrix}$`,
        steps: [
          {
            title: "Poser la matrice inconnue et calculer les produits",
            content: String.raw`Comme au point a), on pose $M = \begin{pmatrix} a & b \\ c & d \end{pmatrix}$ et on calcule les deux produits :

$$ AM = \begin{pmatrix} 2 & -1 \\ -1 & 2 \end{pmatrix} \begin{pmatrix} a & b \\ c & d \end{pmatrix} = \begin{pmatrix} 2a - c & 2b - d \\ -a + 2c & -b + 2d \end{pmatrix} $$

$$ MA = \begin{pmatrix} a & b \\ c & d \end{pmatrix} \begin{pmatrix} 2 & -1 \\ -1 & 2 \end{pmatrix} = \begin{pmatrix} 2a - b & -a + 2b \\ 2c - d & -c + 2d \end{pmatrix} $$`,
          },
          {
            title: "Égaliser coefficient par coefficient",
            content: String.raw`On égalise les quatre positions :

$$ \begin{cases} 2a - c = 2a - b \\ 2b - d = -a + 2b \\ -a + 2c = 2c - d \\ -b + 2d = -c + 2d \end{cases} $$

- La première équation donne $c = b$.
- La deuxième donne $-d = -a$, donc $d = a$.
- La troisième redonne $a = d$ ✓ et la quatrième redonne $b = c$ ✓ : elles n'apportent rien de neuf.

Il reste donc deux paramètres libres : $a$ et $b$.`,
          },
          {
            title: "Conclure et vérifier",
            content: String.raw`Les matrices qui commutent avec $A$ sont toutes les matrices de la forme

$$ M = \begin{pmatrix} a & b \\ b & a \end{pmatrix}, \qquad a, b \in \mathbb{R}. $$

📖 **Rappel du cours :** une matrice égale à sa transposée ($M = M^T$) est dite **symétrique**. Ici, on trouve des matrices symétriques particulières, où les deux coefficients diagonaux sont en plus égaux entre eux — exactement la même structure que $A$ elle-même.

**Vérification :** avec $M = \begin{pmatrix} a & b \\ b & a \end{pmatrix}$, les deux produits valent tous les deux $\begin{pmatrix} 2a - b & 2b - a \\ 2b - a & 2a - b \end{pmatrix}$ ✓`,
          },
        ],
        answer: String.raw`Toutes les matrices de la forme $\begin{pmatrix} a & b \\ b & a \end{pmatrix}$ avec $a, b \in \mathbb{R}$.`,
      },
      {
        label: "c",
        statement: String.raw`$A = \begin{pmatrix} 2 & 1 & 0 \\ 0 & 2 & 1 \\ 0 & 0 & 2 \end{pmatrix}$`,
        steps: [
          {
            title: "Poser la matrice inconnue",
            content: String.raw`Même méthode, mais en dimension $(3 \times 3)$ : on pose

$$ M = \begin{pmatrix} a & b & c \\ d & e & f \\ g & h & i \end{pmatrix} $$

avec neuf inconnues. Le calcul est plus long, mais la logique est identique : calculer $AM$ et $MA$, puis égaliser les neuf coefficients.

**Astuce pour alléger le calcul :** remarque que $A = 2I + N$ avec $N = \begin{pmatrix} 0 & 1 & 0 \\ 0 & 0 & 1 \\ 0 & 0 & 0 \end{pmatrix}$. Comme $2I$ commute avec tout le monde, $M$ commute avec $A$ si et seulement si $M$ commute avec $N$. On peut donc travailler avec $N$, beaucoup plus simple.`,
          },
          {
            title: "Calculer NM et MN",
            content: String.raw`Multiplier par $N$ **à gauche** décale les lignes de $M$ vers le haut (la dernière ligne devient nulle) ; multiplier par $N$ **à droite** décale les colonnes vers la droite (la première colonne devient nulle). Vérifie-le en effectuant le produit ligne par colonne :

$$ NM = \begin{pmatrix} d & e & f \\ g & h & i \\ 0 & 0 & 0 \end{pmatrix}, \qquad MN = \begin{pmatrix} 0 & a & b \\ 0 & d & e \\ 0 & g & h \end{pmatrix} $$`,
          },
          {
            title: "Égaliser coefficient par coefficient",
            content: String.raw`On égalise $NM = MN$ position par position :

- **Colonne 1 :** $d = 0$, $g = 0$, et $0 = 0$.
- **Colonne 2 :** $e = a$, $h = d = 0$, et $0 = g$ (déjà connu).
- **Colonne 3 :** $f = b$, $i = e = a$, et $0 = h$ (déjà connu).

Bilan : $d = g = h = 0$ (tout ce qui est sous la diagonale s'annule), $e = i = a$ (la diagonale est constante) et $f = b$ (la sur-diagonale est constante). Seuls $a$, $b$ et $c$ restent libres.`,
          },
          {
            title: "Conclure et vérifier",
            content: String.raw`Les matrices qui commutent avec $A$ sont toutes les matrices de la forme

$$ M = \begin{pmatrix} a & b & c \\ 0 & a & b \\ 0 & 0 & a \end{pmatrix}, \qquad a, b, c \in \mathbb{R}. $$

📖 **Rappel du cours :** une matrice dont tous les coefficients sous la diagonale principale sont nuls est dite **triangulaire supérieure**. Ici, on obtient des triangulaires supérieures très particulières : chaque « diagonale » porte une valeur constante — la même structure que $A$.

**Vérification :** on calcule les deux produits avec cette forme de $M$ :

$$ AM = MA = \begin{pmatrix} 2a & a + 2b & b + 2c \\ 0 & 2a & a + 2b \\ 0 & 0 & 2a \end{pmatrix} \; ✓ $$`,
          },
        ],
        answer: String.raw`Toutes les matrices de la forme $\begin{pmatrix} a & b & c \\ 0 & a & b \\ 0 & 0 & a \end{pmatrix}$ avec $a, b, c \in \mathbb{R}$.`,
      },
    ],
  },
  {
    id: "1.2",
    chapter: 1,
    title: "Vrai ou faux : propriétés des matrices",
    examType: false,
    statement: String.raw`Est-ce que les propositions suivantes sont vraies ou fausses ? Justifiez votre réponse. Ici, $A$ et $B$ sont des matrices carrées de dimension $(n \times n)$.`,
    method: String.raw`Pour montrer qu'une proposition est **vraie**, il faut une preuve générale, valable pour toutes les matrices : utilise les propriétés de la transposée, comme $(A + B)^T = A^T + B^T$ et $(AB)^T = B^T A^T$. Pour montrer qu'elle est **fausse**, un seul contre-exemple suffit : cherche de petites matrices $(2 \times 2)$ qui mettent la proposition en défaut. Méfie-toi surtout de la non-commutativité du produit !`,
    theoryRefs: ["Transposée", "Produit matriciel", "Matrices particulières"],
    parts: [
      {
        label: "a",
        statement: String.raw`La somme de deux matrices symétriques est une matrice symétrique.`,
        steps: [
          {
            title: "Rappeler la définition et la stratégie",
            content: String.raw`📖 **Rappel du cours :** une matrice carrée $A$ est **symétrique** si $A^T = A$, c'est-à-dire si elle est égale à sa transposée. La transposée respecte la somme : $(A + B)^T = A^T + B^T$.

On veut montrer que si $A^T = A$ et $B^T = B$, alors $(A + B)^T = A + B$. Il suffit donc de calculer la transposée de la somme.`,
          },
          {
            title: "Prouver la proposition",
            content: String.raw`On part de la transposée de $A + B$ et on utilise les hypothèses :

$$ (A + B)^T = A^T + B^T = A + B. $$

La somme $A + B$ est bien égale à sa propre transposée : elle est symétrique. La proposition est **vraie**, pour n'importe quelles matrices symétriques $A$ et $B$ de même dimension.`,
          },
        ],
        answer: String.raw`**Vrai** : $(A+B)^T = A^T + B^T = A + B$.`,
      },
      {
        label: "b",
        statement: String.raw`Le produit de deux matrices symétriques est une matrice symétrique.`,
        steps: [
          {
            title: "Tester la proposition avec la transposée",
            content: String.raw`📖 **Rappel du cours :** la transposée d'un produit **renverse l'ordre** des facteurs : $(AB)^T = B^T A^T$. C'est une source classique de pièges !

Si $A^T = A$ et $B^T = B$, alors

$$ (AB)^T = B^T A^T = BA. $$

Pour que $AB$ soit symétrique, il faudrait donc $BA = AB$, c'est-à-dire que $A$ et $B$ **commutent**. Or ce n'est pas vrai en général : la proposition est suspecte, cherchons un contre-exemple.`,
          },
          {
            title: "Construire un contre-exemple",
            content: String.raw`Prenons deux matrices symétriques simples qui ne commutent pas :

$$ A = \begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix}, \qquad B = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}. $$

Toutes deux sont symétriques ($A^T = A$ et $B^T = B$), mais leur produit vaut

$$ AB = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}, $$

qui n'est **pas** symétrique (le coefficient en position $(1,2)$ vaut $1$ alors que celui en position $(2,1)$ vaut $0$). La proposition est donc **fausse**.`,
          },
        ],
        answer: String.raw`**Faux** : $(AB)^T = BA$, qui diffère de $AB$ dès que $A$ et $B$ ne commutent pas. Contre-exemple : $A = \begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix}$ et $B = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$ donnent $AB = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}$, non symétrique.`,
      },
      {
        label: "c",
        statement: String.raw`$A^2 - I = (A - I)(A + I)$`,
        steps: [
          {
            title: "Développer le produit avec la distributivité",
            content: String.raw`📖 **Rappel du cours :** le produit matriciel est **distributif** par rapport à l'addition, mais il n'est **pas commutatif**. Les identités remarquables du calcul dans $\mathbb{R}$ ne se transposent donc pas automatiquement aux matrices : il faut développer soigneusement, sans échanger l'ordre des facteurs.

Développons le membre de droite :

$$ (A - I)(A + I) = A \cdot A + A \cdot I - I \cdot A - I \cdot I = A^2 + A - A - I. $$`,
          },
          {
            title: "Conclure grâce au rôle particulier de I",
            content: String.raw`Le point clé : la matrice identité $I$ commute avec **toutes** les matrices ($AI = IA = A$). Les deux termes croisés $A \cdot I$ et $I \cdot A$ valent donc tous les deux $A$ et se compensent exactement :

$$ (A - I)(A + I) = A^2 + A - A - I = A^2 - I. $$

La proposition est **vraie**. Remarque : la même identité avec deux matrices quelconques, $A^2 - B^2 = (A-B)(A+B)$, serait fausse en général, car $AB$ et $BA$ ne se compensent pas. Ici, ça marche uniquement parce que $I$ commute avec $A$.`,
          },
        ],
        answer: String.raw`**Vrai** : $(A - I)(A + I) = A^2 + A - A - I = A^2 - I$, car $I$ commute avec $A$.`,
      },
      {
        label: "d",
        statement: String.raw`$A^2 = I \;\Rightarrow\; A = I$ ou $A = -I$.`,
        steps: [
          {
            title: "Se méfier du réflexe venu des nombres réels",
            content: String.raw`Dans $\mathbb{R}$, l'équation $x^2 = 1$ a exactement deux solutions : $x = 1$ et $x = -1$. On serait tenté de croire qu'il en va de même pour les matrices… mais l'argument utilisé dans $\mathbb{R}$ (« un produit nul a un facteur nul ») ne fonctionne plus : il existe des matrices non nulles dont le produit est nul. Cherchons un contre-exemple.`,
          },
          {
            title: "Construire un contre-exemple",
            content: String.raw`Prenons une matrice diagonale qui mélange $1$ et $-1$ :

$$ A = \begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}. $$

Alors

$$ A^2 = \begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix} \begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix} = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} = I, $$

et pourtant $A \neq I$ et $A \neq -I$. La proposition est **fausse** : l'équation matricielle $A^2 = I$ possède beaucoup plus de solutions que ses deux solutions « évidentes ».`,
          },
        ],
        answer: String.raw`**Faux**. Contre-exemple : $A = \begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}$ vérifie $A^2 = I$ mais $A \neq \pm I$.`,
      },
      {
        label: "e",
        statement: String.raw`$A = A^T$ et $B = A^2 \;\Rightarrow\; B = B^T$.`,
        steps: [
          {
            title: "Calculer la transposée de B",
            content: String.raw`On veut montrer que $B = A^2$ est symétrique dès que $A$ l'est. Calculons $B^T$ en utilisant la règle $(AB)^T = B^T A^T$ appliquée au produit $A \cdot A$ :

$$ B^T = (A^2)^T = (A \cdot A)^T = A^T \cdot A^T. $$

Remarque que le renversement de l'ordre est invisible ici, puisque les deux facteurs sont identiques.`,
          },
          {
            title: "Utiliser l'hypothèse de symétrie",
            content: String.raw`Comme $A^T = A$ par hypothèse :

$$ B^T = A^T A^T = A \cdot A = A^2 = B. $$

La proposition est **vraie** : le carré d'une matrice symétrique est toujours symétrique. (Compare avec le point b) : c'est le cas particulier $B = A$, et là le produit commute évidemment avec lui-même !)`,
          },
        ],
        answer: String.raw`**Vrai** : $B^T = (A^2)^T = A^T A^T = A^2 = B$.`,
      },
      {
        label: "f",
        statement: String.raw`Si $A$ et $B$ commutent, alors $A^T$ et $B^T$ commutent.`,
        steps: [
          {
            title: "Traduire l'hypothèse et le but",
            content: String.raw`**Hypothèse :** $AB = BA$. **But :** montrer que $A^T B^T = B^T A^T$.

L'idée : les deux produits qu'on veut comparer sont précisément les transposées de $BA$ et de $AB$. On va donc transposer l'hypothèse.`,
          },
          {
            title: "Transposer l'égalité AB = BA",
            content: String.raw`📖 **Rappel du cours :** si deux matrices sont égales, leurs transposées le sont aussi, et $(AB)^T = B^T A^T$.

En transposant les deux membres de $AB = BA$ :

$$ (AB)^T = (BA)^T \quad \Longleftrightarrow \quad B^T A^T = A^T B^T. $$

C'est exactement dire que $A^T$ et $B^T$ commutent. La proposition est **vraie**.`,
          },
        ],
        answer: String.raw`**Vrai** : en transposant $AB = BA$, on obtient $B^T A^T = A^T B^T$.`,
      },
    ],
  },
  {
    id: "1.3",
    chapter: 1,
    title: "Inverse d'une matrice (2 × 2)",
    examType: false,
    statement: String.raw`Trouver l'inverse des matrices suivantes.`,
    method: String.raw`Pour une matrice $(2 \times 2)$, tu peux chercher directement une matrice $B$ telle que $AB = I$ en résolvant le petit système obtenu, ou utiliser la formule de l'inverse d'une matrice $(2 \times 2)$. Dans tous les cas, commence par vérifier que la matrice est inversible : si $ad - bc = 0$, il n'y a pas d'inverse.`,
    theoryRefs: ["Matrice inverse", "Produit matriciel"],
    parts: [
      {
        label: "a",
        statement: String.raw`$A = \begin{pmatrix} 5 & 0 \\ -5 & 1 \end{pmatrix}$`,
        steps: [
          {
            title: "Rappeler la définition de l'inverse",
            content: String.raw`📖 **Rappel du cours :** l'**inverse** d'une matrice carrée $A$ est la matrice $A^{-1}$ telle que

$$ A \, A^{-1} = A^{-1} A = I. $$

Toutes les matrices n'ont pas d'inverse : pour une matrice $(2 \times 2)$, $A = \begin{pmatrix} a & b \\ c & d \end{pmatrix}$ est inversible si et seulement si $ad - bc \neq 0$.

Ici, $ad - bc = 5 \cdot 1 - 0 \cdot (-5) = 5 \neq 0$ : l'inverse existe.`,
          },
          {
            title: "Poser le système AB = I",
            content: String.raw`On cherche $B = \begin{pmatrix} x & y \\ z & t \end{pmatrix}$ telle que $AB = I$ :

$$ \begin{pmatrix} 5 & 0 \\ -5 & 1 \end{pmatrix} \begin{pmatrix} x & y \\ z & t \end{pmatrix} = \begin{pmatrix} 5x & 5y \\ -5x + z & -5y + t \end{pmatrix} = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}. $$

En égalisant coefficient par coefficient :

$$ \begin{cases} 5x = 1 \\ 5y = 0 \\ -5x + z = 0 \\ -5y + t = 1 \end{cases} $$`,
          },
          {
            title: "Résoudre le système",
            content: String.raw`Le système se résout de proche en proche :

- $5x = 1$ donne $x = \dfrac{1}{5}$.
- $5y = 0$ donne $y = 0$.
- $-5x + z = 0$ donne $z = 5x = 1$.
- $-5y + t = 1$ donne $t = 1$.

D'où

$$ A^{-1} = \begin{pmatrix} 1/5 & 0 \\ 1 & 1 \end{pmatrix}. $$`,
          },
          {
            title: "Vérifier",
            content: String.raw`**Vérification :** on réinjecte dans le produit :

$$ A \, A^{-1} = \begin{pmatrix} 5 & 0 \\ -5 & 1 \end{pmatrix} \begin{pmatrix} 1/5 & 0 \\ 1 & 1 \end{pmatrix} = \begin{pmatrix} 5 \cdot \tfrac{1}{5} + 0 & 0 \\ -5 \cdot \tfrac{1}{5} + 1 & 1 \end{pmatrix} = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} = I \; ✓ $$`,
          },
        ],
        answer: String.raw`$A^{-1} = \begin{pmatrix} 1/5 & 0 \\ 1 & 1 \end{pmatrix}$`,
      },
      {
        label: "b",
        statement: String.raw`$A = \begin{pmatrix} 5 & -1 \\ -5 & 1 \end{pmatrix}$`,
        steps: [
          {
            title: "Tester l'existence de l'inverse",
            content: String.raw`Avant tout calcul, testons si l'inverse existe : pour cette matrice,

$$ ad - bc = 5 \cdot 1 - (-1) \cdot (-5) = 5 - 5 = 0. $$

Le critère d'inversibilité échoue : la matrice n'est **pas inversible**. On peut le voir directement sur la matrice : la deuxième ligne est l'opposée de la première ($L_2 = -L_1$), les lignes sont donc liées.`,
          },
          {
            title: "Comprendre pourquoi aucun inverse ne peut exister",
            content: String.raw`Pour s'en convaincre sans formule, cherchons quand même $B = \begin{pmatrix} x & y \\ z & t \end{pmatrix}$ telle que $AB = I$ :

$$ AB = \begin{pmatrix} 5x - z & 5y - t \\ -5x + z & -5y + t \end{pmatrix} = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}. $$

La première colonne impose $5x - z = 1$ **et** $-5x + z = 0$. Or la seconde équation dit exactement $5x - z = 0$ : on devrait avoir à la fois $5x - z = 1$ et $5x - z = 0$, ce qui est impossible. Aucune matrice $B$ ne convient.

**Conclusion :** $A$ n'admet pas d'inverse.`,
          },
        ],
        answer: String.raw`$A$ n'a **pas d'inverse** : $ad - bc = 5 - 5 = 0$ (les deux lignes sont proportionnelles).`,
      },
    ],
  },
  {
    id: "1.4",
    chapter: 1,
    title: "Preuves : matrices orthogonales et triangulaires",
    examType: false,
    statement: String.raw`Prouvez les affirmations suivantes.`,
    method: String.raw`Pour chaque preuve, commence par écrire précisément la **définition** de la propriété en jeu (matrice orthogonale, matrice triangulaire), puis montre que le produit $AB$ vérifie cette définition. Pour a), utilise la règle $(AB)^T = B^T A^T$. Pour b), regarde ce que vaut un coefficient du produit situé sous la diagonale, en écrivant la formule du produit matriciel.`,
    theoryRefs: ["Matrices particulières", "Transposée", "Produit matriciel", "Matrice inverse"],
    parts: [
      {
        label: "a",
        statement: String.raw`Si $A$, $B$ sont deux matrices orthogonales, alors le produit $AB$ l'est aussi.`,
        steps: [
          {
            title: "Écrire la définition et le but",
            content: String.raw`📖 **Rappel du cours :** une matrice carrée $A$ est **orthogonale** si sa transposée est son inverse :

$$ A^T A = A A^T = I, \quad \text{c'est-à-dire } A^{-1} = A^T. $$

**Hypothèses :** $A^T A = I$ et $B^T B = I$.

**But :** montrer que $(AB)^T (AB) = I$.`,
          },
          {
            title: "Calculer la transposée du produit",
            content: String.raw`On utilise la règle de transposition d'un produit, $(AB)^T = B^T A^T$ (attention : l'ordre se renverse !) :

$$ (AB)^T (AB) = B^T A^T A B. $$

Le produit matriciel est associatif : on peut regrouper les facteurs comme on veut, sans changer leur ordre.`,
          },
          {
            title: "Simplifier de l'intérieur vers l'extérieur",
            content: String.raw`On fait apparaître l'hypothèse $A^T A = I$ au centre du produit :

$$ B^T \underbrace{(A^T A)}_{= \, I} B = B^T I B = B^T B = I, $$

où la dernière égalité est l'hypothèse sur $B$. On a donc bien

$$ (AB)^T (AB) = I. $$

**Conclusion :** $AB$ est orthogonale. $\blacksquare$

**Vérification du mécanisme :** le même calcul donne $(AB)(AB)^T = A B B^T A^T = A I A^T = I$ ✓ — les deux conditions de la définition sont satisfaites.`,
          },
        ],
        answer: String.raw`$(AB)^T(AB) = B^T A^T A B = B^T B = I$, donc $AB$ est orthogonale. $\blacksquare$`,
      },
      {
        label: "b",
        statement: String.raw`Si $A$, $B$ sont deux matrices triangulaires supérieures (resp. inférieures), alors le produit $AB$ est une matrice du même type.`,
        steps: [
          {
            title: "Traduire la définition en condition sur les coefficients",
            content: String.raw`📖 **Rappel du cours :** une matrice $A = (a_{ij})$ est **triangulaire supérieure** si tous ses coefficients situés **sous** la diagonale principale sont nuls :

$$ a_{ij} = 0 \quad \text{dès que } i > j. $$

**But :** en notant $C = AB$, montrer que $c_{ij} = 0$ pour tout couple d'indices avec $i > j$.`,
          },
          {
            title: "Écrire la formule du produit",
            content: String.raw`La formule du produit matriciel donne, pour le coefficient en position $(i, j)$ :

$$ c_{ij} = \sum_{k=1}^{n} a_{ik} \, b_{kj}. $$

Fixons $i > j$ (une position sous la diagonale) et examinons chaque terme $a_{ik} b_{kj}$ de la somme, selon la valeur de $k$.`,
          },
          {
            title: "Montrer que chaque terme de la somme est nul",
            content: String.raw`On distingue deux cas, qui couvrent toutes les valeurs de $k$ (car $j < i$) :

- **Si $k < i$ :** alors $a_{ik} = 0$, car ce coefficient de $A$ est sous la diagonale ($i > k$). Le terme $a_{ik} b_{kj}$ est nul.
- **Si $k \geq i$ :** alors $k \geq i > j$, donc $b_{kj} = 0$, car ce coefficient de $B$ est sous la diagonale ($k > j$). Le terme est nul aussi.

Chaque terme de la somme est nul, donc $c_{ij} = 0$ pour tout $i > j$ : le produit $AB$ est triangulaire supérieur. $\blacksquare$`,
          },
          {
            title: "Adapter au cas triangulaire inférieur",
            content: String.raw`Pour deux matrices triangulaires **inférieures** ($a_{ij} = 0$ dès que $i < j$), le raisonnement est symétrique : pour une position $i < j$ au-dessus de la diagonale,

- si $k > i$, alors $a_{ik} = 0$ ;
- si $k \leq i$, alors $k \leq i < j$ donc $b_{kj} = 0$.

Tous les termes de $c_{ij} = \sum_k a_{ik} b_{kj}$ sont nuls : $AB$ est triangulaire inférieure. $\blacksquare$

**Vérification sur un exemple :** $\begin{pmatrix} 1 & 2 \\ 0 & 3 \end{pmatrix} \begin{pmatrix} 4 & 5 \\ 0 & 6 \end{pmatrix} = \begin{pmatrix} 4 & 17 \\ 0 & 18 \end{pmatrix}$, bien triangulaire supérieure ✓`,
          },
        ],
        answer: String.raw`Pour $i > j$, chaque terme de $c_{ij} = \sum_k a_{ik} b_{kj}$ est nul ($a_{ik} = 0$ si $k < i$, et $b_{kj} = 0$ si $k \geq i > j$), donc $AB$ est triangulaire supérieure ; le cas inférieur est symétrique. $\blacksquare$`,
      },
    ],
  },
  {
    id: "1.5",
    chapter: 1,
    title: "Location de voitures : matrice de transition",
    examType: false,
    statement: String.raw`Une firme de location de voitures a des agences à Namur, Bruxelles et Liège. Un client qui loue une voiture à une agence peut la remettre dans n'importe laquelle des trois villes. On a constaté que les voitures louées à un endroit étaient restituées à un endroit ou à un autre avec des probabilités données par le tableau suivant. Une voiture de Bruxelles est louée trois fois de suite. Où a-t-on le plus de chance de la retrouver ?

Tableau (colonnes = **lieu de location**, lignes = **lieu de remise**) :

$$ \begin{array}{l|ccc} & \text{Namur} & \text{Bruxelles} & \text{Liège} \\ \hline \text{Namur} & 0{,}8 & 0{,}3 & 0{,}2 \\ \text{Bruxelles} & 0{,}1 & 0{,}2 & 0{,}6 \\ \text{Liège} & 0{,}1 & 0{,}5 & 0{,}2 \end{array} $$`,
    method: String.raw`Traduis le tableau en une **matrice de transition** $T$ : chaque colonne correspond à un lieu de location, chaque ligne à un lieu de remise, et chaque colonne somme à 1. Si $X$ est le vecteur des probabilités de position actuelle de la voiture, alors $TX$ donne les probabilités après une location. Trois locations successives correspondent donc à $T^3 X_0$, où $X_0$ décrit la position de départ (Bruxelles, avec certitude).`,
    theoryRefs: ["Matrices de transition", "Produit matriciel"],
    parts: [
      {
        label: null,
        steps: [
          {
            title: "Modéliser : traduire le tableau en matrice de transition",
            content: String.raw`📖 **Rappel du cours :** une **matrice de transition** rassemble des probabilités de passage d'un « état » à un autre. Le coefficient en ligne $i$, colonne $j$ est la probabilité de passer de l'état $j$ à l'état $i$. Chaque colonne somme à 1 (la voiture est forcément remise quelque part).

Ordonnons les états : 1 = Namur, 2 = Bruxelles, 3 = Liège. Le tableau se lit **par colonne** : par exemple, une voiture louée à Bruxelles (colonne 2) est remise à Namur avec probabilité 0,3, à Bruxelles avec probabilité 0,2 et à Liège avec probabilité 0,5. On obtient

$$ T = \begin{pmatrix} 0{,}8 & 0{,}3 & 0{,}2 \\ 0{,}1 & 0{,}2 & 0{,}6 \\ 0{,}1 & 0{,}5 & 0{,}2 \end{pmatrix}. $$

**Contrôle :** chaque colonne somme bien à 1 : $0{,}8 + 0{,}1 + 0{,}1 = 1$, $0{,}3 + 0{,}2 + 0{,}5 = 1$, $0{,}2 + 0{,}6 + 0{,}2 = 1$ ✓`,
          },
          {
            title: "Poser le vecteur de départ et comprendre l'effet d'une location",
            content: String.raw`Au départ, la voiture est à Bruxelles avec certitude. Le vecteur des probabilités de position est donc

$$ X_0 = (0, 1, 0)^T. $$

Après **une** location, les probabilités deviennent $X_1 = T X_0$. Or multiplier $T$ par $(0, 1, 0)^T$ sélectionne exactement la **deuxième colonne** de $T$ :

$$ X_1 = T X_0 = (0{,}3;\; 0{,}2;\; 0{,}5)^T. $$

Après une location, la voiture est à Namur avec probabilité 0,3, à Bruxelles avec probabilité 0,2 et à Liège avec probabilité 0,5. Trois locations successives donneront $X_3 = T^3 X_0$ : plutôt que de calculer $T^3$ en entier, on applique $T$ trois fois de suite au vecteur, c'est bien plus rapide.`,
          },
          {
            title: "Calculer les probabilités après la deuxième location",
            content: String.raw`On applique $T$ à $X_1 = (0{,}3;\; 0{,}2;\; 0{,}5)^T$, ligne par ligne :

$$ X_2 = T X_1 = \begin{pmatrix} 0{,}8 \cdot 0{,}3 + 0{,}3 \cdot 0{,}2 + 0{,}2 \cdot 0{,}5 \\ 0{,}1 \cdot 0{,}3 + 0{,}2 \cdot 0{,}2 + 0{,}6 \cdot 0{,}5 \\ 0{,}1 \cdot 0{,}3 + 0{,}5 \cdot 0{,}2 + 0{,}2 \cdot 0{,}5 \end{pmatrix} = \begin{pmatrix} 0{,}24 + 0{,}06 + 0{,}10 \\ 0{,}03 + 0{,}04 + 0{,}30 \\ 0{,}03 + 0{,}10 + 0{,}10 \end{pmatrix} = \begin{pmatrix} 0{,}40 \\ 0{,}37 \\ 0{,}23 \end{pmatrix} $$

**Contrôle :** $0{,}40 + 0{,}37 + 0{,}23 = 1$ ✓ (un vecteur de probabilités doit toujours sommer à 1).`,
          },
          {
            title: "Calculer les probabilités après la troisième location",
            content: String.raw`On applique $T$ une dernière fois, à $X_2 = (0{,}40;\; 0{,}37;\; 0{,}23)^T$ :

$$ X_3 = T X_2 = \begin{pmatrix} 0{,}8 \cdot 0{,}40 + 0{,}3 \cdot 0{,}37 + 0{,}2 \cdot 0{,}23 \\ 0{,}1 \cdot 0{,}40 + 0{,}2 \cdot 0{,}37 + 0{,}6 \cdot 0{,}23 \\ 0{,}1 \cdot 0{,}40 + 0{,}5 \cdot 0{,}37 + 0{,}2 \cdot 0{,}23 \end{pmatrix} = \begin{pmatrix} 0{,}320 + 0{,}111 + 0{,}046 \\ 0{,}040 + 0{,}074 + 0{,}138 \\ 0{,}040 + 0{,}185 + 0{,}046 \end{pmatrix} = \begin{pmatrix} 0{,}477 \\ 0{,}252 \\ 0{,}271 \end{pmatrix} $$

**Vérification :** $0{,}477 + 0{,}252 + 0{,}271 = 1$ ✓`,
          },
          {
            title: "Interpréter le résultat",
            content: String.raw`Après trois locations successives, la voiture partie de Bruxelles se trouve :

- à **Namur** avec probabilité $0{,}477$ ;
- à **Bruxelles** avec probabilité $0{,}252$ ;
- à **Liège** avec probabilité $0{,}271$.

La probabilité la plus élevée est celle de Namur : c'est donc à **Namur** qu'on a le plus de chance de retrouver la voiture. Intuitivement, c'est logique : les voitures louées à Namur y restent avec probabilité 0,8 — Namur « retient » les voitures bien plus que les deux autres villes.`,
          },
        ],
        answer: String.raw`Après trois locations, $X_3 = (0{,}477;\; 0{,}252;\; 0{,}271)^T$ : on a le plus de chance de retrouver la voiture à **Namur** (probabilité $0{,}477$).`,
      },
    ],
  },
  {
    id: "1.6",
    chapter: 1,
    title: "Filières d'études : matrice de transition sur deux générations",
    examType: false,
    statement: String.raw`Les étudiants de notre faculté peuvent être répartis en trois catégories : sciences économiques, sciences de gestion et sciences sociales. Admettons que 80 % des enfants des étudiants en sciences économiques deviennent eux-mêmes étudiants en sciences économiques, que 10 % deviennent étudiants en sciences de gestion et 10 % en sciences sociales. Pour ce qui est des enfants des étudiants en sciences de gestion, 60 % deviennent étudiants en sciences de gestion, 20 % deviennent étudiants en sciences économiques et 20 % en sciences sociales. Enfin, parmi les enfants des étudiants en sciences sociales, 50 % deviennent étudiants en sciences sociales, 25 % en sciences économiques et 25 % en sciences de gestion.

Supposons que chaque étudiant aura un enfant. Écrivez la matrice de transition et calculez la probabilité que le petit-enfant d'un étudiant en sciences sociales devienne un étudiant en sciences économiques.`,
    method: String.raw`Commence par organiser les données de l'énoncé dans un tableau « catégorie du parent → catégorie de l'enfant », puis écris la matrice de transition $T$ (une colonne par catégorie de parent, chaque colonne somme à 1). Le petit-enfant, c'est **deux** générations : la probabilité cherchée se lit dans le vecteur $T^2 X_0$, où $X_0$ représente un étudiant en sciences sociales.`,
    theoryRefs: ["Matrices de transition", "Produit matriciel"],
    parts: [
      {
        label: null,
        steps: [
          {
            title: "Modéliser : organiser les données en tableau",
            content: String.raw`L'énoncé décrit des probabilités de passage d'une catégorie (celle du parent) vers une catégorie (celle de l'enfant). Notons les trois états : E = sciences économiques, G = sciences de gestion, S = sciences sociales. On range les données dans un tableau, en lisant attentivement l'énoncé phrase par phrase :

$$ \begin{array}{l|ccc} & \text{Parent E} & \text{Parent G} & \text{Parent S} \\ \hline \text{Enfant E} & 0{,}80 & 0{,}20 & 0{,}25 \\ \text{Enfant G} & 0{,}10 & 0{,}60 & 0{,}25 \\ \text{Enfant S} & 0{,}10 & 0{,}20 & 0{,}50 \end{array} $$

Par exemple, la colonne « Parent S » traduit la dernière phrase : 25 % des enfants vont en économie, 25 % en gestion, 50 % restent en sciences sociales.`,
          },
          {
            title: "Écrire la matrice de transition",
            content: String.raw`📖 **Rappel du cours :** dans une **matrice de transition**, le coefficient en ligne $i$, colonne $j$ est la probabilité de passer de l'état $j$ à l'état $i$ en une étape (ici, une génération). Chaque colonne somme à 1.

Le tableau donne directement

$$ T = \begin{pmatrix} 0{,}8 & 0{,}2 & 0{,}25 \\ 0{,}1 & 0{,}6 & 0{,}25 \\ 0{,}1 & 0{,}2 & 0{,}5 \end{pmatrix}. $$

**Contrôle :** chaque colonne somme à 1 : $0{,}8 + 0{,}1 + 0{,}1 = 1$, $0{,}2 + 0{,}6 + 0{,}2 = 1$, $0{,}25 + 0{,}25 + 0{,}5 = 1$ ✓`,
          },
          {
            title: "Poser le point de départ et compter les générations",
            content: String.raw`On part d'un étudiant en sciences **sociales** : dans l'ordre (E, G, S), son vecteur d'état est

$$ X_0 = (0, 0, 1)^T. $$

Attention au piège de l'énoncé : on s'intéresse au **petit-enfant**, c'est-à-dire à l'enfant de l'enfant. Il faut donc appliquer la transition **deux fois** :

$$ X_2 = T (T X_0) = T^2 X_0. $$`,
          },
          {
            title: "Première génération : l'enfant",
            content: String.raw`Multiplier $T$ par $(0, 0, 1)^T$ sélectionne la troisième colonne de $T$ :

$$ X_1 = T X_0 = (0{,}25;\; 0{,}25;\; 0{,}5)^T. $$

L'enfant d'un étudiant en sciences sociales est donc en économie avec probabilité 0,25, en gestion avec probabilité 0,25 et en sciences sociales avec probabilité 0,5 — c'est la simple relecture de l'énoncé, bon signe pour notre modélisation.`,
          },
          {
            title: "Deuxième génération : le petit-enfant",
            content: String.raw`On applique $T$ au vecteur $X_1 = (0{,}25;\; 0{,}25;\; 0{,}5)^T$, ligne par ligne :

$$ X_2 = T X_1 = \begin{pmatrix} 0{,}8 \cdot 0{,}25 + 0{,}2 \cdot 0{,}25 + 0{,}25 \cdot 0{,}5 \\ 0{,}1 \cdot 0{,}25 + 0{,}6 \cdot 0{,}25 + 0{,}25 \cdot 0{,}5 \\ 0{,}1 \cdot 0{,}25 + 0{,}2 \cdot 0{,}25 + 0{,}5 \cdot 0{,}5 \end{pmatrix} = \begin{pmatrix} 0{,}200 + 0{,}050 + 0{,}125 \\ 0{,}025 + 0{,}150 + 0{,}125 \\ 0{,}025 + 0{,}050 + 0{,}250 \end{pmatrix} = \begin{pmatrix} 0{,}375 \\ 0{,}300 \\ 0{,}325 \end{pmatrix} $$

**Vérification :** $0{,}375 + 0{,}300 + 0{,}325 = 1$ ✓

La première composante de $X_2$ répond à la question : la probabilité que le petit-enfant soit en sciences **économiques** vaut $0{,}375$.`,
          },
        ],
        answer: String.raw`La matrice de transition est $T = \begin{pmatrix} 0{,}8 & 0{,}2 & 0{,}25 \\ 0{,}1 & 0{,}6 & 0{,}25 \\ 0{,}1 & 0{,}2 & 0{,}5 \end{pmatrix}$ (ordre : économie, gestion, sociales). La probabilité que le petit-enfant d'un étudiant en sciences sociales devienne étudiant en sciences économiques est $0{,}375$.`,
      },
    ],
  },
];
