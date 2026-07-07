import type { Exercise } from "./types";

export const exercises: Exercise[] = [
  {
    id: "4.1",
    chapter: 4,
    title: "Indépendance linéaire dans R³",
    examType: false,
    statement: String.raw`Est-ce que les vecteurs suivants sont linéairement indépendants dans $\mathbb{R}^3$ ? Justifiez votre réponse.`,
    method: String.raw`Adapte ta méthode au nombre de vecteurs : pour **trois** vecteurs de $\mathbb{R}^3$, range-les en colonnes dans une matrice carrée et calcule son déterminant. Pour **plus de trois** vecteurs, un argument de dimension suffit. Pour **deux** vecteurs, teste simplement si l'un est multiple de l'autre.`,
    theoryRefs: ["Indépendance linéaire", "Déterminant et indépendance"],
    parts: [
      {
        label: "a",
        statement: String.raw`$(1, 5, 4)^T$, $(0, 1, 2)^T$, $(1, 0, 1)^T$.`,
        steps: [
          {
            title: "Rappeler le critère du déterminant",
            content: String.raw`📖 **Rappel du cours :** des vecteurs $V_1, \dots, V_k$ sont **linéairement indépendants** si la seule combinaison linéaire nulle $c_1 V_1 + \dots + c_k V_k = 0$ est celle où tous les coefficients $c_i$ sont nuls.

Quand on a exactement $n$ vecteurs dans $\mathbb{R}^n$ (ici $3$ vecteurs dans $\mathbb{R}^3$), il y a un critère très pratique : on les range en colonnes dans une matrice carrée $A$, et les vecteurs sont linéairement indépendants **si et seulement si** $\det A \neq 0$.`,
          },
          {
            title: "Poser la matrice et calculer le déterminant",
            content: String.raw`On place les trois vecteurs en colonnes :

$$A = \begin{pmatrix} 1 & 0 & 1 \\ 5 & 1 & 0 \\ 4 & 2 & 1 \end{pmatrix}$$

On développe le déterminant selon la première ligne (elle contient un zéro, ça réduit le travail) :

$$\det A = 1 \cdot \begin{vmatrix} 1 & 0 \\ 2 & 1 \end{vmatrix} - 0 \cdot \begin{vmatrix} 5 & 0 \\ 4 & 1 \end{vmatrix} + 1 \cdot \begin{vmatrix} 5 & 1 \\ 4 & 2 \end{vmatrix}$$

$$\det A = 1 \cdot (1 \cdot 1 - 0 \cdot 2) + 1 \cdot (5 \cdot 2 - 1 \cdot 4) = 1 + 6 = 7$$`,
          },
          {
            title: "Conclure",
            content: String.raw`Comme $\det A = 7 \neq 0$, les trois vecteurs sont **linéairement indépendants**.

**Vérification :** un déterminant non nul signifie aussi que le système $c_1 V_1 + c_2 V_2 + c_3 V_3 = 0$ possède une solution unique, à savoir $c_1 = c_2 = c_3 = 0$ : c'est exactement la définition de l'indépendance linéaire.`,
          },
        ],
        answer: String.raw`$\det A = 7 \neq 0$ : les vecteurs sont **linéairement indépendants**.`,
      },
      {
        label: "b",
        statement: String.raw`$(0, 1, 1)^T$, $(2, -1, 0)^T$, $(-1, 5, 4)^T$, $(1, 1, 8)^T$.`,
        steps: [
          {
            title: "Repérer l'argument de dimension",
            content: String.raw`📖 **Rappel du cours :** dans $\mathbb{R}^n$, on ne peut jamais trouver plus de $n$ vecteurs linéairement indépendants, car la dimension de $\mathbb{R}^n$ vaut $n$.

Ici on nous donne **4 vecteurs dans $\mathbb{R}^3$** : inutile de calculer quoi que ce soit, ils sont d'office linéairement dépendants.`,
          },
          {
            title: "Comprendre pourquoi",
            content: String.raw`Si tu veux voir concrètement d'où vient cet argument : chercher une combinaison linéaire nulle

$$c_1 \begin{pmatrix} 0 \\ 1 \\ 1 \end{pmatrix} + c_2 \begin{pmatrix} 2 \\ -1 \\ 0 \end{pmatrix} + c_3 \begin{pmatrix} -1 \\ 5 \\ 4 \end{pmatrix} + c_4 \begin{pmatrix} 1 \\ 1 \\ 8 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix}$$

revient à résoudre un système homogène de **3 équations** (une par composante) à **4 inconnues** ($c_1, c_2, c_3, c_4$). Un système homogène qui a plus d'inconnues que d'équations possède toujours une infinité de solutions, donc en particulier une solution avec des coefficients non tous nuls.`,
          },
          {
            title: "Conclure",
            content: String.raw`Il existe donc une combinaison linéaire nulle à coefficients non tous nuls : les quatre vecteurs sont **linéairement dépendants**.

Retiens ce réflexe : dès que le nombre de vecteurs dépasse la dimension de l'espace, la réponse est immédiate.`,
          },
        ],
        answer: String.raw`Quatre vecteurs dans $\mathbb{R}^3$ sont d'office **linéairement dépendants** (argument de dimension : $4 > 3$).`,
      },
      {
        label: "c",
        statement: String.raw`$(1, 2, 3)^T$, $(1/6, 1/2, 1/3)^T$.`,
        steps: [
          {
            title: "Rappeler le cas de deux vecteurs",
            content: String.raw`📖 **Rappel du cours :** deux vecteurs sont linéairement dépendants **si et seulement si** l'un est un multiple de l'autre. C'est le seul cas où le test est aussi simple : pas besoin de déterminant ni de système.

On cherche donc s'il existe $m \in \mathbb{R}$ tel que $(1, 2, 3)^T = m \cdot (1/6, 1/2, 1/3)^T$.`,
          },
          {
            title: "Tester composante par composante",
            content: String.raw`L'égalité de vecteurs se lit composante par composante :

$$\begin{cases} 1 = m \cdot \dfrac{1}{6} \\ 2 = m \cdot \dfrac{1}{2} \\ 3 = m \cdot \dfrac{1}{3} \end{cases} \iff \begin{cases} m = 6 \\ m = 4 \\ m = 9 \end{cases}$$

Le même $m$ devrait valoir à la fois $6$, $4$ et $9$ : c'est impossible.`,
          },
          {
            title: "Conclure",
            content: String.raw`Aucun réel $m$ ne convient : aucun des deux vecteurs n'est multiple de l'autre. Les deux vecteurs sont donc **linéairement indépendants**.

Attention au piège : les composantes du second vecteur « ressemblent » à des inverses ($1/6$, $1/2$, $1/3$), mais les rapports $\frac{1}{1/6} = 6$, $\frac{2}{1/2} = 4$ et $\frac{3}{1/3} = 9$ ne sont pas égaux — la proportionnalité doit valoir pour **toutes** les composantes.`,
          },
        ],
        answer: String.raw`Aucun $m$ ne vérifie $(1, 2, 3)^T = m\,(1/6, 1/2, 1/3)^T$ (on trouverait $m = 6$, $m = 4$ et $m = 9$ à la fois) : les vecteurs sont **linéairement indépendants**.`,
      },
      {
        label: "d",
        statement: String.raw`$(2, 3, 4)^T$, $(0, 1, 1)^T$.`,
        steps: [
          {
            title: "Tester si l'un est multiple de l'autre",
            content: String.raw`Comme au point c), deux vecteurs sont dépendants si et seulement si l'un est multiple de l'autre. On cherche $m \in \mathbb{R}$ tel que $(2, 3, 4)^T = m \cdot (0, 1, 1)^T$ :

$$\begin{cases} 2 = m \cdot 0 \\ 3 = m \cdot 1 \\ 4 = m \cdot 1 \end{cases}$$`,
          },
          {
            title: "Constater la contradiction",
            content: String.raw`La première équation donne $2 = 0$, ce qui est déjà impossible. (Et même sans elle, les deux dernières exigeraient $m = 3$ et $m = 4$ en même temps.)

Remarque : il faudrait aussi vérifier le sens inverse, $(0, 1, 1)^T = m\,(2, 3, 4)^T$ — mais la première composante donnerait $0 = 2m$, donc $m = 0$, ce qui est incompatible avec $1 = 3m$. Aucun des deux vecteurs n'est multiple de l'autre.`,
          },
          {
            title: "Conclure",
            content: String.raw`Les deux vecteurs ne sont pas proportionnels : ils sont **linéairement indépendants**.`,
          },
        ],
        answer: String.raw`Aucun des deux vecteurs n'est multiple de l'autre ($2 = m \cdot 0$ est impossible) : les vecteurs sont **linéairement indépendants**.`,
      },
    ],
  },
  {
    id: "4.2",
    chapter: 4,
    title: "Indépendance linéaire dans R⁴",
    examType: false,
    statement: String.raw`Est-ce que les vecteurs suivants sont linéairement indépendants dans $\mathbb{R}^4$ ? Justifiez votre réponse.`,
    method: String.raw`Quand tu as exactement 4 vecteurs dans $\mathbb{R}^4$, la matrice formée est carrée : calcule son déterminant. Quand tu n'as que 3 vecteurs dans $\mathbb{R}^4$, la matrice est rectangulaire : cherche un sous-déterminant $3 \times 3$ non nul (autrement dit, montre que le rang vaut 3).`,
    theoryRefs: ["Indépendance linéaire", "Déterminant et indépendance", "Rang"],
    parts: [
      {
        label: "a",
        statement: String.raw`$(1, 1, 0, 0)^T$, $(-1, 1, 2, 0)^T$, $(0, 2, 1, 3)^T$.`,
        steps: [
          {
            title: "Identifier la bonne méthode",
            content: String.raw`On a 3 vecteurs dans $\mathbb{R}^4$ : la matrice qu'ils forment est rectangulaire ($4 \times 3$), donc on ne peut pas calculer directement « le » déterminant.

📖 **Rappel du cours :** des vecteurs sont linéairement indépendants si et seulement si le **rang** de la matrice qu'ils forment est égal au nombre de vecteurs. Et le rang de $A$ est la taille du plus grand sous-déterminant non nul que l'on peut extraire de $A$.

Ici, il suffit donc de trouver **un** sous-déterminant $3 \times 3$ non nul pour conclure que le rang vaut $3$.`,
          },
          {
            title: "Extraire un sous-déterminant 3 × 3",
            content: String.raw`Plaçons les vecteurs en colonnes :

$$A = \begin{pmatrix} 1 & -1 & 0 \\ 1 & 1 & 2 \\ 0 & 2 & 1 \\ 0 & 0 & 3 \end{pmatrix}$$

Choisissons le sous-déterminant formé des **trois premières lignes** :

$$\begin{vmatrix} 1 & -1 & 0 \\ 1 & 1 & 2 \\ 0 & 2 & 1 \end{vmatrix} = 1 \cdot \begin{vmatrix} 1 & 2 \\ 2 & 1 \end{vmatrix} - (-1) \cdot \begin{vmatrix} 1 & 2 \\ 0 & 1 \end{vmatrix} + 0 = (1 - 4) + (1 - 0) = -2$$`,
          },
          {
            title: "Conclure",
            content: String.raw`On a trouvé un sous-déterminant $3 \times 3$ non nul ($-2 \neq 0$), donc le rang de $A$ vaut $3$, c'est-à-dire exactement le nombre de vecteurs.

Les trois vecteurs sont **linéairement indépendants**.`,
          },
        ],
        answer: String.raw`Le sous-déterminant formé des trois premières composantes vaut $-2 \neq 0$, donc le rang vaut 3 : les vecteurs sont **linéairement indépendants**.`,
      },
      {
        label: "b",
        statement: String.raw`$(0, 1, 1, -1)^T$, $(1, 0, 0, 2)^T$, $(1, 2, 0, 0)^T$, $(-1, 0, 1, 0)^T$.`,
        steps: [
          {
            title: "Poser la matrice carrée",
            content: String.raw`Cette fois on a 4 vecteurs dans $\mathbb{R}^4$ : la matrice est carrée, on peut appliquer directement le critère du déterminant. On range les vecteurs en colonnes :

$$A = \begin{pmatrix} 0 & 1 & 1 & -1 \\ 1 & 0 & 2 & 0 \\ 1 & 0 & 0 & 1 \\ -1 & 2 & 0 & 0 \end{pmatrix}$$`,
          },
          {
            title: "Choisir une ligne ou une colonne avec beaucoup de zéros",
            content: String.raw`📖 **Rappel du cours :** pour développer un déterminant $4 \times 4$, on choisit la ligne ou la colonne qui contient le plus de zéros — chaque zéro évite le calcul d'un mineur $3 \times 3$. Le signe du cofacteur en position $(i, j)$ est $(-1)^{i+j}$.

La **deuxième colonne** contient deux zéros (lignes 2 et 3) : seuls les éléments $a_{12} = 1$ et $a_{42} = 2$ contribuent.

$$\det A = (-1)^{1+2} \cdot 1 \cdot \begin{vmatrix} 1 & 2 & 0 \\ 1 & 0 & 1 \\ -1 & 0 & 0 \end{vmatrix} + (-1)^{4+2} \cdot 2 \cdot \begin{vmatrix} 0 & 1 & -1 \\ 1 & 2 & 0 \\ 1 & 0 & 1 \end{vmatrix}$$`,
          },
          {
            title: "Calculer les deux mineurs 3 × 3",
            content: String.raw`Premier mineur (on développe selon la troisième ligne, qui contient deux zéros) :

$$\begin{vmatrix} 1 & 2 & 0 \\ 1 & 0 & 1 \\ -1 & 0 & 0 \end{vmatrix} = (-1) \cdot (-1)^{3+1} \begin{vmatrix} 2 & 0 \\ 0 & 1 \end{vmatrix} = -1 \cdot 2 = -2$$

Second mineur (développement selon la première ligne) :

$$\begin{vmatrix} 0 & 1 & -1 \\ 1 & 2 & 0 \\ 1 & 0 & 1 \end{vmatrix} = 0 - 1 \cdot \begin{vmatrix} 1 & 0 \\ 1 & 1 \end{vmatrix} + (-1) \cdot \begin{vmatrix} 1 & 2 \\ 1 & 0 \end{vmatrix} = -1 - (0 - 2) = 1$$`,
          },
          {
            title: "Assembler et conclure",
            content: String.raw`On remonte au déterminant complet :

$$\det A = (-1) \cdot 1 \cdot (-2) + (+1) \cdot 2 \cdot 1 = 2 + 2 = 4$$

Comme $\det A = 4 \neq 0$, les quatre vecteurs sont **linéairement indépendants**.`,
          },
        ],
        answer: String.raw`$\det A = 4 \neq 0$ : les vecteurs sont **linéairement indépendants**.`,
      },
      {
        label: "c",
        statement: String.raw`$(1, 2, 1, -1)^T$, $(0, 1, 0, 4)^T$, $(1, 0, -1, 0)^T$.`,
        steps: [
          {
            title: "Poser la matrice rectangulaire",
            content: String.raw`Comme au point a), on a 3 vecteurs dans $\mathbb{R}^4$ : on cherche un sous-déterminant $3 \times 3$ non nul. Les vecteurs en colonnes :

$$A = \begin{pmatrix} 1 & 0 & 1 \\ 2 & 1 & 0 \\ 1 & 0 & -1 \\ -1 & 4 & 0 \end{pmatrix}$$`,
          },
          {
            title: "Calculer un sous-déterminant 3 × 3",
            content: String.raw`Prenons les **trois premières lignes** et développons selon la deuxième colonne (deux zéros) :

$$\begin{vmatrix} 1 & 0 & 1 \\ 2 & 1 & 0 \\ 1 & 0 & -1 \end{vmatrix} = 1 \cdot (-1)^{2+2} \begin{vmatrix} 1 & 1 \\ 1 & -1 \end{vmatrix} = 1 \cdot (-1 - 1) = -2$$`,
          },
          {
            title: "Conclure",
            content: String.raw`Ce sous-déterminant vaut $-2 \neq 0$, donc le rang de $A$ vaut $3$ : il est égal au nombre de vecteurs.

Les trois vecteurs sont **linéairement indépendants**.

**Vérification rapide :** le rang ne peut pas dépasser $\min(4, 3) = 3$ pour une matrice $4 \times 3$ ; on a bien atteint la valeur maximale possible.`,
          },
        ],
        answer: String.raw`Le sous-déterminant formé des trois premières composantes vaut $-2 \neq 0$, donc le rang vaut 3 : les vecteurs sont **linéairement indépendants**.`,
      },
    ],
  },
  {
    id: "4.3",
    chapter: 4,
    title: "Dépendance linéaire avec paramètre",
    examType: true,
    statement: String.raw`Pour quelles valeurs du paramètre $m$ les vecteurs suivants sont-ils linéairement dépendants ?`,
    method: String.raw`Range les vecteurs en colonnes dans une matrice carrée $A$ : ils sont linéairement dépendants exactement quand $\det A = 0$. Calcule donc $\det A$ en fonction de $m$ (choisis une ligne ou colonne avec des zéros pour le développement), puis résous l'équation $\det A = 0$. Pour un polynôme de degré 3, cherche d'abord une racine évidente parmi les petits entiers.`,
    theoryRefs: ["Indépendance linéaire", "Déterminant et indépendance"],
    parts: [
      {
        label: "a",
        statement: String.raw`$(m, 2)^T$, $(8, m)^T$ dans $\mathbb{R}^2$.`,
        steps: [
          {
            title: "Rappeler le critère de dépendance",
            content: String.raw`📖 **Rappel du cours :** $n$ vecteurs de $\mathbb{R}^n$ rangés en colonnes dans une matrice carrée $A$ sont **linéairement dépendants si et seulement si** $\det A = 0$. C'est la contraposée du critère d'indépendance vu à l'exercice 4.1.

Ici $n = 2$ :

$$A = \begin{pmatrix} m & 8 \\ 2 & m \end{pmatrix}$$`,
          },
          {
            title: "Calculer le déterminant et l'annuler",
            content: String.raw`Pour une matrice $2 \times 2$, le déterminant est le produit de la diagonale principale moins le produit de l'autre diagonale :

$$\det A = m \cdot m - 8 \cdot 2 = m^2 - 16$$

Les vecteurs sont dépendants quand $m^2 - 16 = 0$, c'est-à-dire $m^2 = 16$, donc $m = 4$ ou $m = -4$.`,
          },
          {
            title: "Vérifier",
            content: String.raw`**Vérification :** pour $m = 4$, les vecteurs sont $(4, 2)^T$ et $(8, 4)^T$, et on voit que $(8, 4)^T = 2 \cdot (4, 2)^T$ : l'un est bien multiple de l'autre. Pour $m = -4$ : $(-4, 2)^T$ et $(8, -4)^T = -2 \cdot (-4, 2)^T$. ✓`,
          },
        ],
        answer: String.raw`$\det A = m^2 - 16 = 0 \iff m = 4$ ou $m = -4$. Les vecteurs sont linéairement dépendants pour $m = \pm 4$.`,
      },
      {
        label: "b",
        statement: String.raw`$(m, 1, 0)^T$, $(1, 1, 0)^T$, $(-1, 1, 2)^T$ dans $\mathbb{R}^3$.`,
        steps: [
          {
            title: "Poser la matrice",
            content: String.raw`On range les trois vecteurs en colonnes :

$$A = \begin{pmatrix} m & 1 & -1 \\ 1 & 1 & 1 \\ 0 & 0 & 2 \end{pmatrix}$$

Les vecteurs sont dépendants si et seulement si $\det A = 0$.`,
          },
          {
            title: "Développer selon la troisième ligne",
            content: String.raw`La troisième ligne $(0, 0, 2)$ contient deux zéros : c'est le développement le plus rapide. Le seul terme non nul vient de $a_{33} = 2$, de signe $(-1)^{3+3} = +1$ :

$$\det A = 2 \cdot \begin{vmatrix} m & 1 \\ 1 & 1 \end{vmatrix} = 2(m \cdot 1 - 1 \cdot 1) = 2(m - 1)$$`,
          },
          {
            title: "Résoudre et vérifier",
            content: String.raw`$$\det A = 0 \iff 2(m - 1) = 0 \iff m = 1$$

**Vérification :** pour $m = 1$, les deux premiers vecteurs deviennent tous deux $(1, 1, 0)^T$ : ils sont identiques, donc évidemment linéairement dépendants. ✓`,
          },
        ],
        answer: String.raw`$\det A = 2(m - 1) = 0 \iff m = 1$. Les vecteurs sont linéairement dépendants pour $m = 1$ (les deux premiers vecteurs sont alors égaux).`,
      },
      {
        label: "c",
        statement: String.raw`$(m, 3, 0)^T$, $(2, m, 1)^T$, $(-1, -2, m)^T$ dans $\mathbb{R}^3$.`,
        steps: [
          {
            title: "Poser la matrice et développer le déterminant",
            content: String.raw`Les vecteurs en colonnes :

$$A = \begin{pmatrix} m & 2 & -1 \\ 3 & m & -2 \\ 0 & 1 & m \end{pmatrix}$$

La troisième ligne $(0, 1, m)$ contient un zéro : développons selon elle. Attention aux signes des cofacteurs : $(-1)^{3+2} = -1$ pour la position $(3,2)$ et $(-1)^{3+3} = +1$ pour la position $(3,3)$.

$$\det A = -1 \cdot \begin{vmatrix} m & -1 \\ 3 & -2 \end{vmatrix} + m \cdot \begin{vmatrix} m & 2 \\ 3 & m \end{vmatrix}$$`,
          },
          {
            title: "Simplifier le polynôme en m",
            content: String.raw`On calcule chaque mineur $2 \times 2$ :

$$\begin{vmatrix} m & -1 \\ 3 & -2 \end{vmatrix} = -2m + 3 \qquad \text{et} \qquad \begin{vmatrix} m & 2 \\ 3 & m \end{vmatrix} = m^2 - 6$$

D'où :

$$\det A = -(-2m + 3) + m(m^2 - 6) = 2m - 3 + m^3 - 6m = m^3 - 4m - 3$$`,
          },
          {
            title: "Chercher une racine évidente",
            content: String.raw`📖 **Rappel du cours :** pour factoriser un polynôme de degré 3, on teste d'abord les racines « évidentes » ($0, \pm 1, \pm 2, \dots$), puis on met le facteur correspondant en évidence (division ou méthode de Horner).

Testons $m = -1$ :

$$(-1)^3 - 4(-1) - 3 = -1 + 4 - 3 = 0 \checkmark$$

Donc $(m + 1)$ divise le polynôme. En effectuant la division :

$$m^3 - 4m - 3 = (m + 1)(m^2 - m - 3)$$

(Contrôle rapide en développant : $m^3 - m^2 - 3m + m^2 - m - 3 = m^3 - 4m - 3$ ✓)`,
          },
          {
            title: "Résoudre le facteur du second degré",
            content: String.raw`Il reste à annuler $m^2 - m - 3$. Le discriminant vaut :

$$\Delta = (-1)^2 - 4 \cdot 1 \cdot (-3) = 1 + 12 = 13 > 0$$

Deux racines réelles :

$$m = \frac{1 \pm \sqrt{13}}{2}$$`,
          },
          {
            title: "Conclure",
            content: String.raw`$$\det A = (m+1)\left(m^2 - m - 3\right) = 0 \iff m = -1 \ \text{ ou } \ m = \frac{1 + \sqrt{13}}{2} \ \text{ ou } \ m = \frac{1 - \sqrt{13}}{2}$$

Pour ces trois valeurs de $m$, les vecteurs sont **linéairement dépendants** ; pour toute autre valeur de $m$, ils sont linéairement indépendants.`,
          },
        ],
        answer: String.raw`$\det A = m^3 - 4m - 3 = (m+1)(m^2 - m - 3) = 0$ : les vecteurs sont linéairement dépendants pour $m = -1$, $m = \dfrac{1 + \sqrt{13}}{2}$ ou $m = \dfrac{1 - \sqrt{13}}{2}$.`,
      },
    ],
  },
  {
    id: "4.4",
    chapter: 4,
    title: "Indépendance de combinaisons de vecteurs abstraits",
    examType: false,
    statement: String.raw`Dans un espace vectoriel, on donne trois vecteurs linéairement indépendants, $V_1$, $V_2$, $V_3$. Est-ce que les vecteurs définis ci-dessous sont linéairement indépendants ? Justifiez.`,
    method: String.raw`Ici, pas de coordonnées : tu dois raisonner directement avec la **définition**. Pour montrer la dépendance, exhibe une combinaison linéaire nulle à coefficients non tous nuls. Pour montrer l'indépendance, pose une combinaison nulle des $U_i$, réécris-la en fonction de $V_1, V_2, V_3$, puis utilise l'indépendance des $V_i$ pour conclure que tous les coefficients sont nuls.`,
    theoryRefs: ["Indépendance linéaire"],
    parts: [
      {
        label: "a",
        statement: String.raw`$U_1$, $U_2$ et $U_3$, où $U_1 = V_1$, $U_2 = V_2$, et $U_3 = V_1 + V_2$.`,
        steps: [
          {
            title: "Rappeler la définition de la dépendance",
            content: String.raw`📖 **Rappel du cours :** des vecteurs sont **linéairement dépendants** s'il existe une combinaison linéaire nulle dont les coefficients ne sont pas tous nuls. De manière équivalente : l'un des vecteurs s'écrit comme combinaison linéaire des autres.

Ici, l'énoncé nous dit directement que $U_3 = V_1 + V_2$ : regardons si on peut réécrire cela avec $U_1$ et $U_2$.`,
          },
          {
            title: "Exhiber la combinaison linéaire",
            content: String.raw`Comme $U_1 = V_1$ et $U_2 = V_2$, on a immédiatement :

$$U_3 = V_1 + V_2 = 1 \cdot U_1 + 1 \cdot U_2$$

Autrement dit, $U_1 + U_2 - U_3 = 0$ est une combinaison linéaire nulle dont les coefficients $(1, 1, -1)$ ne sont **pas tous nuls**.`,
          },
          {
            title: "Conclure",
            content: String.raw`Le vecteur $U_3$ est une combinaison linéaire de $U_1$ et $U_2$ : les trois vecteurs $U_1$, $U_2$, $U_3$ sont **linéairement dépendants**.

Remarque : peu importe que $V_1, V_2, V_3$ soient indépendants — la dépendance des $U_i$ vient de leur construction même.`,
          },
        ],
        answer: String.raw`**Linéairement dépendants** : $U_3 = 1 \cdot U_1 + 1 \cdot U_2$, donc $U_1 + U_2 - U_3 = 0$ avec des coefficients non tous nuls.`,
      },
      {
        label: "b",
        statement: String.raw`$U_1$, $U_2$, $U_3$ et $U_4$, où $U_1 = V_1$, $U_2 = V_2$, $U_3 = V_3$, et $U_4 = V_1 + V_3$.`,
        steps: [
          {
            title: "Chercher une combinaison entre les vecteurs donnés",
            content: String.raw`Le quatrième vecteur est construit à partir du premier et du troisième vecteur de la liste : $U_4 = V_1 + V_3$, avec $U_1 = V_1$ et $U_3 = V_3$. Donc :

$$U_4 = 1 \cdot U_1 + 0 \cdot U_2 + 1 \cdot U_3$$`,
          },
          {
            title: "Écrire la combinaison nulle",
            content: String.raw`On en déduit :

$$U_1 + 0 \cdot U_2 + U_3 - U_4 = 0$$

Les coefficients $(1, 0, 1, -1)$ ne sont pas tous nuls (peu importe que l'un d'eux soit nul — il suffit qu'**au moins un** soit non nul).`,
          },
          {
            title: "Conclure",
            content: String.raw`$U_4$ est une combinaison linéaire des autres : les quatre vecteurs sont **linéairement dépendants**.

Autre argument possible : ces 4 vecteurs vivent dans le sous-vectoriel engendré par $V_1, V_2, V_3$, qui est de dimension 3 — et 4 vecteurs dans un espace de dimension 3 sont toujours dépendants.`,
          },
        ],
        answer: String.raw`**Linéairement dépendants** : $U_4 = 1 \cdot U_1 + 0 \cdot U_2 + 1 \cdot U_3$.`,
      },
      {
        label: "c",
        statement: String.raw`$U_1$, $U_2$ et $U_3$, où $U_1 = V_1$, $U_2 = V_1 + V_2$, et $U_3 = V_1 + V_2 + V_3$.`,
        steps: [
          {
            title: "Poser une combinaison linéaire nulle",
            content: String.raw`📖 **Rappel du cours :** pour prouver l'**indépendance**, on suppose qu'une combinaison linéaire est nulle et on montre que tous les coefficients sont forcément nuls.

Supposons donc :

$$a\,U_1 + b\,U_2 + c\,U_3 = 0$$`,
          },
          {
            title: "Réécrire en fonction des V et regrouper",
            content: String.raw`On remplace chaque $U_i$ par sa définition :

$$a\,V_1 + b\,(V_1 + V_2) + c\,(V_1 + V_2 + V_3) = 0$$

puis on regroupe les termes selon $V_1$, $V_2$ et $V_3$ :

$$(a + b + c)\,V_1 + (b + c)\,V_2 + c\,V_3 = 0$$`,
          },
          {
            title: "Utiliser l'indépendance des V",
            content: String.raw`Comme $V_1$, $V_2$, $V_3$ sont linéairement indépendants, **tous** les coefficients de cette combinaison doivent être nuls :

$$\begin{cases} a + b + c = 0 \\ b + c = 0 \\ c = 0 \end{cases}$$

Ce système est triangulaire : on le résout en remontant. La troisième équation donne $c = 0$ ; la deuxième donne alors $b = 0$ ; la première donne enfin $a = 0$.`,
          },
          {
            title: "Conclure",
            content: String.raw`La seule combinaison linéaire nulle des $U_i$ est celle à coefficients tous nuls : $U_1$, $U_2$, $U_3$ sont **linéairement indépendants**.

Intuition : $U_2$ fait apparaître $V_2$ (introuvable à partir de $U_1$ seul), et $U_3$ fait apparaître $V_3$ (introuvable à partir de $U_1$ et $U_2$) — chaque nouveau vecteur apporte une « direction » nouvelle.`,
          },
        ],
        answer: String.raw`**Linéairement indépendants** : $a U_1 + b U_2 + c U_3 = 0$ donne $(a+b+c)V_1 + (b+c)V_2 + cV_3 = 0$, d'où $c = 0$, puis $b = 0$, puis $a = 0$.`,
      },
      {
        label: "d",
        statement: String.raw`$U_1$ et $U_2$, où $U_1 = V_1 + V_2$ et $U_2 = V_3$.`,
        steps: [
          {
            title: "Poser une combinaison linéaire nulle",
            content: String.raw`Supposons $a\,U_1 + b\,U_2 = 0$ et remplaçons :

$$a\,(V_1 + V_2) + b\,V_3 = 0 \quad \iff \quad a\,V_1 + a\,V_2 + b\,V_3 = 0$$`,
          },
          {
            title: "Utiliser l'indépendance des V",
            content: String.raw`Puisque $V_1$, $V_2$, $V_3$ sont linéairement indépendants, les coefficients doivent tous être nuls :

$$\begin{cases} a = 0 \\ a = 0 \\ b = 0 \end{cases}$$

donc $a = b = 0$.`,
          },
          {
            title: "Conclure",
            content: String.raw`La seule combinaison nulle est la combinaison triviale : $U_1$ et $U_2$ sont **linéairement indépendants**.

Intuition : $V_3$ ne peut pas s'écrire à partir de $V_1$ et $V_2$ (sinon les $V_i$ seraient dépendants), donc $U_2 = V_3$ ne peut pas être un multiple de $U_1 = V_1 + V_2$.`,
          },
        ],
        answer: String.raw`**Linéairement indépendants** : $a(V_1 + V_2) + b V_3 = 0$ force $a = b = 0$ par indépendance des $V_i$.`,
      },
      {
        label: "e",
        statement: String.raw`$U_1$, $U_2$ et $U_3$, où $U_1 = V_1 - V_2$, $U_2 = V_2 - V_3$, et $U_3 = V_3 - V_1$.`,
        steps: [
          {
            title: "Observer la structure « en boucle »",
            content: String.raw`Remarque que les trois vecteurs forment une boucle : $V_1 \to V_2 \to V_3 \to V_1$. Chaque $V_i$ apparaît une fois avec le signe $+$ et une fois avec le signe $-$. Que se passe-t-il si on additionne tout ?`,
          },
          {
            title: "Calculer la somme",
            content: String.raw`$$U_1 + U_2 + U_3 = (V_1 - V_2) + (V_2 - V_3) + (V_3 - V_1) = 0$$

Tous les termes se télescopent : la somme est le vecteur nul.`,
          },
          {
            title: "Conclure",
            content: String.raw`On a trouvé la combinaison linéaire nulle

$$1 \cdot U_1 + 1 \cdot U_2 + 1 \cdot U_3 = 0$$

dont les coefficients $(1, 1, 1)$ ne sont pas tous nuls : $U_1$, $U_2$, $U_3$ sont **linéairement dépendants**.

Moralité : même construits à partir de vecteurs indépendants, des vecteurs « en boucle » de ce type sont toujours dépendants — leur somme s'annule.`,
          },
        ],
        answer: String.raw`**Linéairement dépendants** : $U_1 + U_2 + U_3 = (V_1 - V_2) + (V_2 - V_3) + (V_3 - V_1) = 0$, combinaison nulle à coefficients $(1, 1, 1)$ non tous nuls.`,
      },
    ],
  },
  {
    id: "4.5",
    chapter: 4,
    title: "Calcul du rang d'une matrice",
    examType: false,
    statement: String.raw`Calculez le rang des matrices suivantes :`,
    method: String.raw`Pour une matrice $3 \times 3$, commence toujours par calculer $\det A$ : s'il est non nul, le rang vaut directement 3. S'il est nul, le rang est au plus 2 : cherche alors un sous-déterminant $2 \times 2$ non nul pour conclure que le rang vaut 2 (sinon, il vaudrait 1 ou 0).`,
    theoryRefs: ["Rang", "Déterminant et indépendance"],
    parts: [
      {
        label: "a",
        statement: String.raw`$$A = \begin{pmatrix} 1 & 1 & -1 \\ 2 & 1 & 0 \\ 1 & 2 & 2 \end{pmatrix}$$`,
        steps: [
          {
            title: "Rappeler la définition du rang",
            content: String.raw`📖 **Rappel du cours :** le **rang** d'une matrice $A$ est la taille du plus grand sous-déterminant non nul que l'on peut extraire de $A$. C'est aussi le nombre maximal de lignes (ou de colonnes) linéairement indépendantes.

Pour une matrice $3 \times 3$, la stratégie est donc : calculer $\det A$ ; si $\det A \neq 0$, alors $\text{rg}(A) = 3$ et c'est terminé.`,
          },
          {
            title: "Calculer le déterminant",
            content: String.raw`Développons selon la première ligne :

$$\det A = 1 \cdot \begin{vmatrix} 1 & 0 \\ 2 & 2 \end{vmatrix} - 1 \cdot \begin{vmatrix} 2 & 0 \\ 1 & 2 \end{vmatrix} + (-1) \cdot \begin{vmatrix} 2 & 1 \\ 1 & 2 \end{vmatrix}$$

$$\det A = 1 \cdot (2 - 0) - 1 \cdot (4 - 0) - 1 \cdot (4 - 1) = 2 - 4 - 3 = -5$$`,
          },
          {
            title: "Conclure",
            content: String.raw`Comme $\det A = -5 \neq 0$, le plus grand sous-déterminant non nul est de taille 3 :

$$\text{rg}(A) = 3$$

Autrement dit, les trois lignes (et les trois colonnes) de $A$ sont linéairement indépendantes.`,
          },
        ],
        answer: String.raw`$\det A = -5 \neq 0$, donc $\text{rg}(A) = 3$.`,
      },
      {
        label: "b",
        statement: String.raw`$$A = \begin{pmatrix} -2 & 2 & 4 \\ -1 & 1 & 2 \\ 0 & 3 & 9 \end{pmatrix}$$`,
        steps: [
          {
            title: "Repérer une dépendance entre les lignes",
            content: String.raw`Avant de calculer, observe la matrice : la première ligne est exactement le **double** de la deuxième :

$$L_1 = (-2, 2, 4) = 2 \cdot (-1, 1, 2) = 2 L_2$$

📖 **Rappel du cours :** si une ligne d'une matrice est multiple d'une autre, son déterminant est nul. Donc $\det A = 0$ sans aucun calcul, et le rang est **au plus 2**.`,
          },
          {
            title: "Chercher un sous-déterminant 2 × 2 non nul",
            content: String.raw`Pour montrer que le rang vaut exactement 2 (et pas 1), il suffit d'exhiber un sous-déterminant $2 \times 2$ non nul. Prenons les lignes 2 et 3 et les colonnes 1 et 2 :

$$\begin{vmatrix} -1 & 1 \\ 0 & 3 \end{vmatrix} = (-1) \cdot 3 - 1 \cdot 0 = -3 \neq 0$$`,
          },
          {
            title: "Conclure",
            content: String.raw`Le plus grand sous-déterminant non nul est de taille 2 :

$$\text{rg}(A) = 2$$

**Vérification :** les lignes $L_2$ et $L_3$ ne sont pas proportionnelles (le rapport des premières composantes serait $0$, celui des deuxièmes $3$), donc il y a bien 2 lignes indépendantes — mais pas 3, puisque $L_1 = 2 L_2$. ✓`,
          },
        ],
        answer: String.raw`$\det A = 0$ (car $L_1 = 2 L_2$), mais le sous-déterminant $\begin{vmatrix} -1 & 1 \\ 0 & 3 \end{vmatrix} = -3 \neq 0$, donc $\text{rg}(A) = 2$.`,
      },
      {
        label: "c",
        statement: String.raw`$$A = \begin{pmatrix} 3 & 2 & 4 \\ 1 & -2 & 3 \\ -3 & -10 & 1 \end{pmatrix}$$`,
        steps: [
          {
            title: "Calculer le déterminant",
            content: String.raw`Ici, aucune dépendance ne saute aux yeux : calculons $\det A$ en développant selon la première ligne.

$$\det A = 3 \cdot \begin{vmatrix} -2 & 3 \\ -10 & 1 \end{vmatrix} - 2 \cdot \begin{vmatrix} 1 & 3 \\ -3 & 1 \end{vmatrix} + 4 \cdot \begin{vmatrix} 1 & -2 \\ -3 & -10 \end{vmatrix}$$

On calcule chaque mineur :

- $(-2) \cdot 1 - 3 \cdot (-10) = -2 + 30 = 28$
- $1 \cdot 1 - 3 \cdot (-3) = 1 + 9 = 10$
- $1 \cdot (-10) - (-2)(-3) = -10 - 6 = -16$

$$\det A = 3 \cdot 28 - 2 \cdot 10 + 4 \cdot (-16) = 84 - 20 - 64 = 0$$`,
          },
          {
            title: "Interpréter : le rang est au plus 2",
            content: String.raw`$\det A = 0$ signifie que les trois lignes sont linéairement dépendantes : le rang est au plus 2. En effet, on peut vérifier que

$$L_3 = -2 L_1 + 3 L_2$$

puisque $-2(3, 2, 4) + 3(1, -2, 3) = (-6 + 3, \ -4 - 6, \ -8 + 9) = (-3, -10, 1)$. ✓`,
          },
          {
            title: "Trouver un sous-déterminant 2 × 2 non nul et conclure",
            content: String.raw`Prenons le coin supérieur gauche (lignes 1 et 2, colonnes 1 et 2) :

$$\begin{vmatrix} 3 & 2 \\ 1 & -2 \end{vmatrix} = 3 \cdot (-2) - 2 \cdot 1 = -8 \neq 0$$

Le plus grand sous-déterminant non nul est donc de taille 2 :

$$\text{rg}(A) = 2$$`,
          },
        ],
        answer: String.raw`$\det A = 0$, mais le sous-déterminant $\begin{vmatrix} 3 & 2 \\ 1 & -2 \end{vmatrix} = -8 \neq 0$, donc $\text{rg}(A) = 2$.`,
      },
    ],
  },
];
