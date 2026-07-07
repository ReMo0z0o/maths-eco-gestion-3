import type { Exercise } from "./types";

export const exercises: Exercise[] = [
  {
    id: "5.1",
    chapter: 5,
    title: "Vecteur normé orthogonal à deux vecteurs",
    examType: false,
    statement: String.raw`Recherchez un vecteur normé $(x, y, z)^T \in \mathbb{R}^3$ orthogonal aux vecteurs $(-1, 0, 3)^T$ et $(-1, 4, 0)^T$.`,
    method: String.raw`Traduis chaque condition d'orthogonalité par un produit scalaire nul : cela te donne deux équations linéaires en $x$, $y$, $z$. Le système a une infinité de solutions (une droite de vecteurs orthogonaux) ; choisis-en un représentant, puis divise-le par sa norme pour le rendre normé.`,
    theoryRefs: ["Produit scalaire", "Orthogonalité", "Norme"],
    parts: [
      {
        label: null,
        steps: [
          {
            title: "Traduire l'orthogonalité en équations",
            content: String.raw`📖 **Rappel du cours :** deux vecteurs $X$ et $Y$ de $\mathbb{R}^n$ sont **orthogonaux** si leur produit scalaire est nul : $X \bullet Y = x_1 y_1 + x_2 y_2 + \cdots + x_n y_n = 0$.

On cherche $(x, y, z)^T$ orthogonal aux deux vecteurs donnés. Cela donne deux conditions :

$$\begin{cases} (x, y, z)^T \bullet (-1, 0, 3)^T = 0 \\ (x, y, z)^T \bullet (-1, 4, 0)^T = 0 \end{cases} \iff \begin{cases} -x + 3z = 0 \\ -x + 4y = 0 \end{cases}$$

Remarque : deux équations pour trois inconnues, le système sera **simplement indéterminé**. C'est normal : dans $\mathbb{R}^3$, les vecteurs orthogonaux à deux directions données forment toute une droite.`,
          },
          {
            title: "Résoudre le système",
            content: String.raw`Exprime tout en fonction de $x$ :

- la première équation donne $3z = x$, donc $z = \dfrac{x}{3}$ ;
- la deuxième donne $4y = x$, donc $y = \dfrac{x}{4}$.

Les solutions sont donc les vecteurs $\left( x, \dfrac{x}{4}, \dfrac{x}{3} \right)^T$ avec $x \in \mathbb{R}$.

Pour éviter les fractions, choisis $x = 12$ (le plus petit multiple commun de 3 et 4) :

$$V = (12, 3, 4)^T$$`,
          },
          {
            title: "Normer le vecteur",
            content: String.raw`📖 **Rappel du cours :** la **norme** d'un vecteur $X$ est $\|X\| = \sqrt{X \bullet X}$, et un vecteur est **normé** si sa norme vaut 1. Pour normer un vecteur non nul $V$, on le divise par sa norme : $\dfrac{V}{\|V\|}$.

Calcule la norme de $V = (12, 3, 4)^T$ :

$$\|V\| = \sqrt{12^2 + 3^2 + 4^2} = \sqrt{144 + 9 + 16} = \sqrt{169} = 13$$

Le vecteur normé cherché est donc

$$\frac{1}{13}(12, 3, 4)^T$$

Attention : son opposé $-\dfrac{1}{13}(12, 3, 4)^T$ convient tout aussi bien (il est lui aussi normé et orthogonal aux deux vecteurs). Il y a donc **deux** réponses possibles.`,
          },
          {
            title: "Vérifier",
            content: String.raw`**Vérification :** on réinjecte $(12, 3, 4)^T$ dans les deux produits scalaires :

- $(12, 3, 4)^T \bullet (-1, 0, 3)^T = -12 + 0 + 12 = 0$ ✓
- $(12, 3, 4)^T \bullet (-1, 4, 0)^T = -12 + 12 + 0 = 0$ ✓

Et la norme : $\left\| \dfrac{1}{13}(12, 3, 4)^T \right\| = \dfrac{13}{13} = 1$ ✓`,
          },
        ],
        answer: String.raw`$\pm \dfrac{1}{13}(12, 3, 4)^T$`,
      },
    ],
  },
  {
    id: "5.2",
    chapter: 5,
    title: "Base orthonormée d'un sous-vectoriel engendré",
    examType: true,
    statement: String.raw`Dans $\mathbb{R}^3$, donnez la dimension et une base orthonormée du sous-vectoriel engendré par`,
    method: String.raw`Commence toujours par extraire une **base** du sous-vectoriel : repère les vecteurs linéairement indépendants parmi les générateurs (déterminant ou combinaisons évidentes) — cela te donne la dimension. Ensuite seulement, applique le procédé de Gram–Schmidt à cette base pour la rendre orthonormée. Ne lance jamais Gram–Schmidt sur des vecteurs dépendants !`,
    theoryRefs: ["Procédé de Gram–Schmidt", "Bases orthonormées", "Orthogonalité", "Norme"],
    parts: [
      {
        label: "a",
        statement: String.raw`$(6, -1, -3)^T$, $(2, 0, 1)^T$, $(8, -1, -2)^T$.`,
        steps: [
          {
            title: "Extraire une base du sous-vectoriel",
            content: String.raw`📖 **Rappel du cours :** une **base** d'un sous-vectoriel est une famille génératrice de vecteurs linéairement indépendants ; le nombre de vecteurs d'une base est la **dimension**.

Avant tout Gram–Schmidt, il faut vérifier si les trois générateurs sont indépendants. Remarque que

$$(8, -1, -2)^T = (6, -1, -3)^T + (2, 0, 1)^T$$

Le troisième vecteur est donc combinaison linéaire des deux premiers : il n'apporte rien, on peut l'écarter.

Les deux premiers vecteurs, $(6, -1, -3)^T$ et $(2, 0, 1)^T$, ne sont pas multiples l'un de l'autre (regarde la deuxième composante : $-1 \neq m \cdot 0$ pour tout $m$), donc ils sont linéairement indépendants.

**Conclusion :** le sous-vectoriel est de dimension 2, et $\{(2, 0, 1)^T, (6, -1, -3)^T\}$ en est une base. On commence Gram–Schmidt par $(2, 0, 1)^T$, dont la norme est la plus simple.`,
          },
          {
            title: "Normer le premier vecteur",
            content: String.raw`📖 **Rappel du cours (procédé de Gram–Schmidt) :** à partir d'une base $V_1, V_2, \dots$, on construit une base orthonormée $E_1, E_2, \dots$ en normant $V_1$, puis en retirant à chaque $V_k$ sa « composante » selon les $E_i$ déjà construits, avant de normer le résultat.

Premier vecteur : $V_1 = (2, 0, 1)^T$, de norme

$$\|V_1\| = \sqrt{2^2 + 0^2 + 1^2} = \sqrt{5}$$

donc

$$E_1 = \frac{1}{\sqrt{5}}(2, 0, 1)^T$$`,
          },
          {
            title: "Orthogonaliser puis normer le deuxième vecteur",
            content: String.raw`On retire à $V_2 = (6, -1, -3)^T$ sa composante selon $E_1$ :

$$V_2 \bullet E_1 = \frac{1}{\sqrt{5}}(6 \cdot 2 + (-1) \cdot 0 + (-3) \cdot 1) = \frac{9}{\sqrt{5}}$$

$$W_2 = V_2 - (V_2 \bullet E_1)\, E_1 = (6, -1, -3)^T - \frac{9}{5}(2, 0, 1)^T = \left( \frac{12}{5}, -1, -\frac{24}{5} \right)^T = \frac{1}{5}(12, -5, -24)^T$$

Par construction, $W_2$ est orthogonal à $E_1$. Il reste à le normer :

$$\|(12, -5, -24)^T\| = \sqrt{144 + 25 + 576} = \sqrt{745}$$

donc

$$E_2 = \frac{1}{\sqrt{745}}(12, -5, -24)^T$$

(le facteur $\frac{1}{5}$ disparaît en normant : normer $\frac{1}{5}W$ ou $W$ donne le même vecteur).`,
          },
          {
            title: "Vérifier l'orthonormalité",
            content: String.raw`**Vérification :** il faut $E_1 \bullet E_2 = 0$ et $\|E_1\| = \|E_2\| = 1$.

- $E_1 \bullet E_2 = \dfrac{1}{\sqrt{5}\sqrt{745}}(2 \cdot 12 + 0 \cdot (-5) + 1 \cdot (-24)) = \dfrac{24 - 24}{\sqrt{5}\sqrt{745}} = 0$ ✓
- $\|E_1\|^2 = \dfrac{4 + 0 + 1}{5} = 1$ ✓ et $\|E_2\|^2 = \dfrac{144 + 25 + 576}{745} = 1$ ✓`,
          },
        ],
        answer: String.raw`Dimension 2 ; base orthonormée : $\dfrac{1}{\sqrt{5}}(2, 0, 1)^T$ et $\dfrac{1}{\sqrt{745}}(12, -5, -24)^T$.`,
      },
      {
        label: "b",
        statement: String.raw`$(1, 0, 1)^T$, $(2, 1, 2)^T$, $(-1, 0, 3)^T$.`,
        steps: [
          {
            title: "Tester l'indépendance des trois vecteurs",
            content: String.raw`📖 **Rappel du cours :** trois vecteurs de $\mathbb{R}^3$ sont linéairement indépendants si et seulement si le déterminant de la matrice qu'ils forment est non nul.

Place les trois vecteurs en colonnes et calcule le déterminant en développant selon la deuxième ligne (elle contient deux zéros) :

$$\det \begin{pmatrix} 1 & 2 & -1 \\ 0 & 1 & 0 \\ 1 & 2 & 3 \end{pmatrix} = 1 \cdot \begin{vmatrix} 1 & -1 \\ 1 & 3 \end{vmatrix} = 1 \cdot (3 - (-1)) = 4 \neq 0$$

Les trois vecteurs sont donc linéairement indépendants.`,
          },
          {
            title: "Identifier le sous-vectoriel",
            content: String.raw`Trois vecteurs linéairement indépendants dans $\mathbb{R}^3$ engendrent un sous-vectoriel de dimension 3. Or le seul sous-vectoriel de dimension 3 de $\mathbb{R}^3$ est... $\mathbb{R}^3$ tout entier !

Le sous-vectoriel engendré est donc $\mathbb{R}^3$.`,
          },
          {
            title: "Choisir la base orthonormée la plus simple",
            content: String.raw`📖 **Rappel du cours :** la **base canonique** $(1, 0, 0)^T$, $(0, 1, 0)^T$, $(0, 0, 1)^T$ de $\mathbb{R}^3$ est déjà orthonormée : chaque vecteur est de norme 1 et les produits scalaires deux à deux sont nuls.

Inutile de lancer Gram–Schmidt : puisque le sous-vectoriel est $\mathbb{R}^3$ entier, n'importe quelle base orthonormée de $\mathbb{R}^3$ convient, et la plus simple est la base canonique.

**Vérification :** $(1,0,0)^T \bullet (0,1,0)^T = 0$, $(1,0,0)^T \bullet (0,0,1)^T = 0$, $(0,1,0)^T \bullet (0,0,1)^T = 0$, et chaque vecteur est de norme 1 ✓`,
          },
        ],
        answer: String.raw`Dimension 3 : le sous-vectoriel est $\mathbb{R}^3$ tout entier. Base orthonormée : la base canonique $(1, 0, 0)^T$, $(0, 1, 0)^T$, $(0, 0, 1)^T$.`,
      },
      {
        label: "c",
        statement: String.raw`$(0, 1, -1)^T$, $(2, 1, 0)^T$, $(2, 2, -1)^T$.`,
        steps: [
          {
            title: "Extraire une base du sous-vectoriel",
            content: String.raw`Comme en a), cherche d'abord une relation entre les générateurs. Remarque que

$$(2, 2, -1)^T = (0, 1, -1)^T + (2, 1, 0)^T$$

Le troisième vecteur est superflu. Les deux premiers, $(0, 1, -1)^T$ et $(2, 1, 0)^T$, ne sont pas multiples l'un de l'autre (première composante : $0$ contre $2$), donc ils forment une base du sous-vectoriel.

**Conclusion :** dimension 2, base $\{(0, 1, -1)^T, (2, 1, 0)^T\}$.`,
          },
          {
            title: "Normer le premier vecteur",
            content: String.raw`Applique Gram–Schmidt en commençant par $V_1 = (0, 1, -1)^T$ :

$$\|V_1\| = \sqrt{0 + 1 + 1} = \sqrt{2}$$

$$E_1 = \frac{1}{\sqrt{2}}(0, 1, -1)^T = \left( 0, \frac{\sqrt{2}}{2}, -\frac{\sqrt{2}}{2} \right)^T$$

(on a utilisé $\frac{1}{\sqrt{2}} = \frac{\sqrt{2}}{2}$).`,
          },
          {
            title: "Orthogonaliser puis normer le deuxième vecteur",
            content: String.raw`Retire à $V_2 = (2, 1, 0)^T$ sa composante selon $E_1$ :

$$V_2 \bullet E_1 = \frac{1}{\sqrt{2}}(2 \cdot 0 + 1 \cdot 1 + 0 \cdot (-1)) = \frac{1}{\sqrt{2}}$$

$$W_2 = V_2 - (V_2 \bullet E_1)\, E_1 = (2, 1, 0)^T - \frac{1}{2}(0, 1, -1)^T = \left( 2, \frac{1}{2}, \frac{1}{2} \right)^T$$

Norme de $W_2$ :

$$\|W_2\| = \sqrt{4 + \frac{1}{4} + \frac{1}{4}} = \sqrt{\frac{9}{2}} = \frac{3}{\sqrt{2}}$$

donc

$$E_2 = \frac{\sqrt{2}}{3}\left( 2, \frac{1}{2}, \frac{1}{2} \right)^T = \left( \frac{2\sqrt{2}}{3}, \frac{\sqrt{2}}{6}, \frac{\sqrt{2}}{6} \right)^T$$`,
          },
          {
            title: "Vérifier l'orthonormalité",
            content: String.raw`**Vérification :**

- $E_1 \bullet E_2 = 0 \cdot \dfrac{2\sqrt{2}}{3} + \dfrac{\sqrt{2}}{2} \cdot \dfrac{\sqrt{2}}{6} - \dfrac{\sqrt{2}}{2} \cdot \dfrac{\sqrt{2}}{6} = \dfrac{1}{6} - \dfrac{1}{6} = 0$ ✓
- $\|E_2\|^2 = \dfrac{8}{9} + \dfrac{2}{36} + \dfrac{2}{36} = \dfrac{8}{9} + \dfrac{1}{9} = 1$ ✓`,
          },
        ],
        answer: String.raw`Dimension 2 ; base orthonormée : $\left( 0, \dfrac{\sqrt{2}}{2}, -\dfrac{\sqrt{2}}{2} \right)^T$ et $\left( \dfrac{2\sqrt{2}}{3}, \dfrac{\sqrt{2}}{6}, \dfrac{\sqrt{2}}{6} \right)^T$.`,
      },
    ],
  },
  {
    id: "5.3",
    chapter: 5,
    title: "Base orthonormée d'un sous-vectoriel défini par paramètres",
    examType: true,
    statement: String.raw`Soit $V = \{(x + y,\; y + z,\; y - z,\; z)^T : x, y, z \in \mathbb{R}\}$. Recherchez une base orthonormée et la dimension de $V$.`,
    method: String.raw`Le sous-vectoriel est donné sous forme paramétrique : sépare d'abord les paramètres $x$, $y$, $z$ pour faire apparaître des vecteurs générateurs. Vérifie leur indépendance linéaire (cela donne la dimension), puis applique le procédé de Gram–Schmidt pour orthonormer la base obtenue.`,
    theoryRefs: ["Procédé de Gram–Schmidt", "Bases orthonormées", "Produit scalaire", "Norme"],
    parts: [
      {
        label: null,
        steps: [
          {
            title: "Trouver des générateurs de V",
            content: String.raw`C'est l'étape de **modélisation** : il faut transformer la description paramétrique en une famille de vecteurs. Décompose le vecteur générique selon les paramètres $x$, $y$, $z$ :

$$\begin{pmatrix} x + y \\ y + z \\ y - z \\ z \end{pmatrix} = x \begin{pmatrix} 1 \\ 0 \\ 0 \\ 0 \end{pmatrix} + y \begin{pmatrix} 1 \\ 1 \\ 1 \\ 0 \end{pmatrix} + z \begin{pmatrix} 0 \\ 1 \\ -1 \\ 1 \end{pmatrix}$$

Donc $V$ est le sous-vectoriel de $\mathbb{R}^4$ engendré par

$$V_1 = (1, 0, 0, 0)^T, \quad V_2 = (1, 1, 1, 0)^T, \quad V_3 = (0, 1, -1, 1)^T$$`,
          },
          {
            title: "Vérifier l'indépendance et déterminer la dimension",
            content: String.raw`📖 **Rappel du cours :** la dimension d'un sous-vectoriel est le nombre de vecteurs de l'une de ses bases, c'est-à-dire le nombre maximal de générateurs linéairement indépendants.

Teste $\alpha V_1 + \beta V_2 + \gamma V_3 = 0$ composante par composante :

$$\begin{cases} \alpha + \beta = 0 \\ \beta + \gamma = 0 \\ \beta - \gamma = 0 \\ \gamma = 0 \end{cases}$$

La quatrième équation donne $\gamma = 0$, puis la deuxième $\beta = 0$, puis la première $\alpha = 0$. Seule la combinaison triviale annule la somme : les trois vecteurs sont **linéairement indépendants**.

**Conclusion :** $\dim V = 3$ et $\{V_1, V_2, V_3\}$ est une base de $V$. Il reste à l'orthonormer.`,
          },
          {
            title: "Gram–Schmidt : premier vecteur",
            content: String.raw`📖 **Rappel du cours (procédé de Gram–Schmidt) :** on norme le premier vecteur, puis pour chaque vecteur suivant on retranche ses composantes selon les vecteurs orthonormés déjà construits, et on norme le reste.

Coup de chance : $V_1 = (1, 0, 0, 0)^T$ est déjà normé, car $\|V_1\| = \sqrt{1} = 1$. Donc

$$E_1 = (1, 0, 0, 0)^T$$`,
          },
          {
            title: "Gram–Schmidt : deuxième vecteur",
            content: String.raw`Retire à $V_2 = (1, 1, 1, 0)^T$ sa composante selon $E_1$ :

$$V_2 \bullet E_1 = 1 \cdot 1 + 1 \cdot 0 + 1 \cdot 0 + 0 \cdot 0 = 1$$

$$W_2 = V_2 - (V_2 \bullet E_1)\, E_1 = (1, 1, 1, 0)^T - (1, 0, 0, 0)^T = (0, 1, 1, 0)^T$$

Norme : $\|W_2\| = \sqrt{0 + 1 + 1 + 0} = \sqrt{2}$, donc

$$E_2 = \frac{1}{\sqrt{2}}(0, 1, 1, 0)^T$$`,
          },
          {
            title: "Gram–Schmidt : troisième vecteur",
            content: String.raw`Retire à $V_3 = (0, 1, -1, 1)^T$ ses composantes selon $E_1$ et $E_2$ :

$$V_3 \bullet E_1 = 0, \qquad V_3 \bullet E_2 = \frac{1}{\sqrt{2}}(0 + 1 - 1 + 0) = 0$$

Bonne surprise : $V_3$ est **déjà orthogonal** à $E_1$ et à $E_2$, il n'y a rien à retrancher ($W_3 = V_3$). Il suffit de le normer :

$$\|V_3\| = \sqrt{0 + 1 + 1 + 1} = \sqrt{3}$$

$$E_3 = \frac{1}{\sqrt{3}}(0, 1, -1, 1)^T$$`,
          },
          {
            title: "Vérifier l'orthonormalité de la base",
            content: String.raw`**Vérification :** contrôle les trois produits scalaires et les trois normes.

- $E_1 \bullet E_2 = 0$, $E_1 \bullet E_3 = 0$ (première composante nulle dans $E_2$ et $E_3$) ✓
- $E_2 \bullet E_3 = \dfrac{1}{\sqrt{2}\sqrt{3}}(0 + 1 - 1 + 0) = 0$ ✓
- $\|E_1\|^2 = 1$, $\|E_2\|^2 = \dfrac{2}{2} = 1$, $\|E_3\|^2 = \dfrac{3}{3} = 1$ ✓

On a bien trois vecteurs orthonormés qui engendrent $V$.`,
          },
        ],
        answer: String.raw`$\dim V = 3$ ; base orthonormée : $(1, 0, 0, 0)^T$, $\dfrac{1}{\sqrt{2}}(0, 1, 1, 0)^T$ et $\dfrac{1}{\sqrt{3}}(0, 1, -1, 1)^T$.`,
      },
    ],
  },
  {
    id: "5.4",
    chapter: 5,
    title: "Deux propriétés de la norme et du produit scalaire",
    examType: false,
    statement: String.raw`Démontrez que pour $X, Y \in \mathbb{R}^n$, on a`,
    method: String.raw`Pour a), pars de l'inégalité triangulaire (que tu connais du cours) appliquée à une décomposition astucieuse de $X$, puis échange les rôles de $X$ et $Y$ pour couvrir les deux cas de la valeur absolue. Pour b), développe $\|X + Y\|^2$ comme un produit scalaire $(X+Y) \bullet (X+Y)$ en utilisant la bilinéarité et la symétrie du produit scalaire, puis isole $X \bullet Y$.`,
    theoryRefs: ["Norme", "Produit scalaire", "Orthogonalité"],
    parts: [
      {
        label: "a",
        statement: String.raw`$\big|\, \|X\| - \|Y\| \,\big| \leq \|X - Y\|$`,
        steps: [
          {
            title: "Identifier l'outil : l'inégalité triangulaire",
            content: String.raw`📖 **Rappel du cours (inégalité triangulaire) :** pour tous $U, V \in \mathbb{R}^n$,

$$\|U + V\| \leq \|U\| + \|V\|$$

(la longueur d'un côté d'un triangle est au plus la somme des longueurs des deux autres).

On veut montrer que $\big|\, \|X\| - \|Y\| \,\big| \leq \|X - Y\|$ : c'est une sorte d'inégalité triangulaire « inversée ». Comme la valeur absolue $\big|\, \|X\| - \|Y\| \,\big|$ vaut soit $\|X\| - \|Y\|$, soit $\|Y\| - \|X\|$, il suffit de montrer que **ces deux quantités** sont majorées par $\|X - Y\|$. L'astuce classique est de faire apparaître $X - Y$ **dans** l'inégalité triangulaire, en décomposant $X$ de façon bien choisie.`,
          },
          {
            title: "Décomposer X astucieusement",
            content: String.raw`L'idée clé : on peut toujours écrire

$$X = (X - Y) + Y$$

(on ajoute et on retranche $Y$ — vérifie : $(X - Y) + Y = X$ ✓).

Applique maintenant l'inégalité triangulaire avec $U = X - Y$ et $V = Y$ :

$$\|X\| = \|(X - Y) + Y\| \leq \|X - Y\| + \|Y\|$$`,
          },
          {
            title: "Isoler la quantité voulue",
            content: String.raw`Il ne reste qu'à faire passer $\|Y\|$ dans le membre de gauche (soustraire un même nombre des deux côtés conserve l'inégalité) :

$$\|X\| - \|Y\| \leq \|X - Y\|$$

C'est la première des deux inégalités annoncées : la valeur absolue n'est pas encore traitée.`,
          },
          {
            title: "Échanger les rôles de X et Y, puis conclure",
            content: String.raw`Le même raisonnement avec $X$ et $Y$ échangés (on écrit cette fois $Y = (Y - X) + X$) donne

$$\|Y\| - \|X\| \leq \|Y - X\| = \|X - Y\|$$

(la dernière égalité vient de $\|-U\| = \|U\|$ : changer le signe d'un vecteur ne change pas sa norme).

Or $\big|\, \|X\| - \|Y\| \,\big|$ est égal soit à $\|X\| - \|Y\|$, soit à $\|Y\| - \|X\|$, et on vient de majorer **chacune** de ces deux quantités par $\|X - Y\|$. Donc

$$\big|\, \|X\| - \|Y\| \,\big| \leq \|X - Y\| \qquad \blacksquare$$`,
          },
        ],
        answer: String.raw`En écrivant $X = (X - Y) + Y$ et en appliquant l'inégalité triangulaire : $\|X\| - \|Y\| \leq \|X - Y\|$ ; en échangeant les rôles de $X$ et $Y$ : $\|Y\| - \|X\| \leq \|X - Y\|$. Les deux ensemble donnent $\big|\, \|X\| - \|Y\| \,\big| \leq \|X - Y\|$. $\blacksquare$`,
      },
      {
        label: "b",
        statement: String.raw`$X \bullet Y = \dfrac{1}{2}\left( \|X + Y\|^2 - \|X\|^2 - \|Y\|^2 \right)$`,
        steps: [
          {
            title: "Rappeler le lien entre norme et produit scalaire",
            content: String.raw`📖 **Rappel du cours :** la norme est définie à partir du produit scalaire : $\|X\| = \sqrt{X \bullet X}$, autrement dit

$$\|X\|^2 = X \bullet X$$

De plus, le produit scalaire est **symétrique** ($X \bullet Y = Y \bullet X$) et **bilinéaire** : il se distribue sur les sommes, comme un produit ordinaire.

La stratégie : partir du membre de droite, qui contient $\|X + Y\|^2$, et le développer entièrement en produits scalaires.`,
          },
          {
            title: "Développer la norme au carré de X + Y",
            content: String.raw`En utilisant la bilinéarité (on distribue comme pour $(a+b)^2$) puis la symétrie :

$$\|X + Y\|^2 = (X + Y) \bullet (X + Y) = X \bullet X + X \bullet Y + Y \bullet X + Y \bullet Y$$

Comme $Y \bullet X = X \bullet Y$, les deux termes croisés se regroupent :

$$\|X + Y\|^2 = \|X\|^2 + 2\, (X \bullet Y) + \|Y\|^2$$

C'est l'analogue vectoriel de l'identité remarquable $(a + b)^2 = a^2 + 2ab + b^2$.`,
          },
          {
            title: "Isoler le produit scalaire et conclure",
            content: String.raw`Fais passer $\|X\|^2$ et $\|Y\|^2$ dans le membre de gauche :

$$\|X + Y\|^2 - \|X\|^2 - \|Y\|^2 = 2\, (X \bullet Y)$$

puis divise par 2 :

$$X \bullet Y = \frac{1}{2}\left( \|X + Y\|^2 - \|X\|^2 - \|Y\|^2 \right) \qquad \blacksquare$$

**Vérification** sur un exemple : $X = (1, 0)^T$, $Y = (1, 1)^T$. À gauche : $X \bullet Y = 1$. À droite : $\dfrac{1}{2}(\|(2,1)^T\|^2 - 1 - 2) = \dfrac{1}{2}(5 - 3) = 1$ ✓

**Remarque :** cette identité (dite « de polarisation ») montre que le produit scalaire peut se reconstruire uniquement à partir des normes. En particulier, si $X$ et $Y$ sont orthogonaux ($X \bullet Y = 0$), on retrouve le théorème de Pythagore : $\|X + Y\|^2 = \|X\|^2 + \|Y\|^2$.`,
          },
        ],
        answer: String.raw`En développant $\|X + Y\|^2 = (X + Y) \bullet (X + Y) = \|X\|^2 + 2\,(X \bullet Y) + \|Y\|^2$ par bilinéarité et symétrie, on isole $X \bullet Y = \dfrac{1}{2}\left( \|X + Y\|^2 - \|X\|^2 - \|Y\|^2 \right)$. $\blacksquare$`,
      },
    ],
  },
];
