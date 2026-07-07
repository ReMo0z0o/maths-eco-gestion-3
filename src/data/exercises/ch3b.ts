import type { Exercise } from "./types";

export const exercises: Exercise[] = [
  {
    id: "3.6",
    chapter: 3,
    title: "Discussion complète de deux systèmes avec paramètres",
    examType: false,
    statement: String.raw`Pour quelles valeurs des paramètres réels $a$, $b$, le système possède-t-il une solution unique ? Recherchez celle-ci. Pour les autres valeurs de $a$, $b$, recherchez les solutions sous forme vectorielle.`,
    method: String.raw`Calcule d'abord le déterminant de la matrice des coefficients en fonction du paramètre : s'il est non nul, la solution est unique (condition de Cramer). Ensuite, pour chaque valeur critique du paramètre (celles qui annulent le déterminant), réinjecte cette valeur dans le système et résous par élimination : tu tomberas soit sur une contradiction (système impossible), soit sur une équation redondante (infinité de solutions, à écrire sous forme vectorielle).`,
    theoryRefs: ["Systèmes avec paramètres", "Méthode de Cramer"],
    parts: [
      {
        label: "a",
        statement: String.raw`$$ \begin{cases} x + ay + z = 2a \\ x + y + az = 0 \\ (a+1)x + ay + z = a \end{cases}$$`,
        steps: [
          {
            title: "Calculer le déterminant du système",
            content: String.raw`📖 **Rappel du cours :** un système carré $AX = B$ possède une solution unique si et seulement si $\det A \neq 0$. C'est exactement la condition d'application de la méthode de Cramer.

On calcule donc le déterminant de la matrice des coefficients, en le simplifiant d'abord par une transformation élémentaire (qui ne change pas la valeur du déterminant) :

$$\det A = \begin{vmatrix} 1 & a & 1 \\ 1 & 1 & a \\ a+1 & a & 1 \end{vmatrix} \xrightarrow{L_3 \leftarrow L_3 - L_1} \begin{vmatrix} 1 & a & 1 \\ 1 & 1 & a \\ a & 0 & 0 \end{vmatrix}$$

La troisième ligne ne contient plus qu'un seul élément non nul : on développe selon cette ligne.

$$\det A = a \cdot \begin{vmatrix} a & 1 \\ 1 & a \end{vmatrix} = a(a^2 - 1) = a(a-1)(a+1)$$

**Conclusion :** la solution est unique si et seulement si $a \neq 0$, $a \neq 1$ et $a \neq -1$. Il faudra discuter séparément les trois valeurs critiques.`,
          },
          {
            title: "Résoudre le cas général (a ≠ 0, 1, −1)",
            content: String.raw`L'astuce vue dans le calcul du déterminant fonctionne aussi sur les équations : en soustrayant la première équation de la troisième, il ne reste que

$$ ax = a - 2a = -a \quad\Longrightarrow\quad x = -1 \qquad (\text{car } a \neq 0).$$

On réinjecte $x = -1$ dans les deux premières équations :

$$\begin{cases} ay + z = 2a + 1 \\ y + az = 1 \end{cases}$$

Pour éliminer $y$, on multiplie la seconde équation par $a$ puis on soustrait la première : $ (a^2 - 1)z = a - (2a+1) = -(a+1)$, donc

$$ z = \frac{-(a+1)}{(a-1)(a+1)} = \frac{-1}{a-1} = \frac{1}{1-a}.$$

Enfin, $y = 1 - az = 1 - \dfrac{a}{1-a} = \dfrac{1-2a}{1-a} = \dfrac{2a-1}{a-1}$.

**Vérification :** dans la deuxième équation, $x + y + az = -1 + \dfrac{2a-1}{a-1} - \dfrac{a}{a-1} = -1 + \dfrac{a-1}{a-1} = 0$ ✓`,
          },
          {
            title: "Cas a = 0 : infinité de solutions",
            content: String.raw`On remplace $a = 0$ dans le système d'origine :

$$\begin{cases} x + z = 0 \\ x + y = 0 \\ x + z = 0 \end{cases}$$

La troisième équation est identique à la première : il ne reste que deux équations indépendantes pour trois inconnues. Le système est **simplement indéterminé** (une infinité de solutions dépendant d'un paramètre).

On exprime tout en fonction de $x$ : $z = -x$ et $y = -x$. Sous forme vectorielle :

$$ (x, y, z)^T = x\,(1, -1, -1)^T, \qquad x \in \mathbb{R}.$$`,
          },
          {
            title: "Cas a = 1 : système impossible",
            content: String.raw`On remplace $a = 1$ dans le système :

$$\begin{cases} x + y + z = 2 \\ x + y + z = 0 \\ 2x + y + z = 1 \end{cases}$$

Les deux premières équations exigent que la même quantité $x + y + z$ vaille à la fois $2$ et $0$ : contradiction. Le système est **impossible** (aucune solution).`,
          },
          {
            title: "Cas a = −1 : infinité de solutions",
            content: String.raw`On remplace $a = -1$ :

$$\begin{cases} x - y + z = -2 \\ x + y - z = 0 \\ -y + z = -1 \end{cases}$$

La troisième équation donne directement $z = y - 1$. En substituant dans la deuxième : $x + y - (y-1) = 0$, donc $x = -1$. La première équation est alors automatiquement vérifiée : $-1 - y + (y - 1) = -2$ ✓. Le système est **simplement indéterminé**, avec $y$ libre :

$$ (x, y, z)^T = (-1, 0, -1)^T + y\,(0, 1, 1)^T, \qquad y \in \mathbb{R}.$$

**Vérification :** pour $y = 1$ par exemple, $(x,y,z)^T = (-1,1,0)^T$ : première équation $-1 - 1 + 0 = -2$ ✓, deuxième $-1 + 1 - 0 = 0$ ✓, troisième $-1 + 0 = -1$ ✓`,
          },
        ],
        answer: String.raw`- Si $a \neq 0$, $a \neq 1$ et $a \neq -1$ : solution unique $x = -1$, $y = \dfrac{2a-1}{a-1}$, $z = \dfrac{1}{1-a}$.
- Si $a = 0$ : simplement indéterminé, $(x,y,z)^T = x\,(1,-1,-1)^T$, $x \in \mathbb{R}$.
- Si $a = 1$ : impossible.
- Si $a = -1$ : simplement indéterminé, $(x,y,z)^T = (-1,0,-1)^T + y\,(0,1,1)^T$, $y \in \mathbb{R}$.`,
      },
      {
        label: "b",
        statement: String.raw`$$ \begin{cases} x + y + z = 1 \\ x + y + az = 2 \\ ax + a^2y + a^3z = b \end{cases}$$`,
        steps: [
          {
            title: "Calculer le déterminant du système",
            content: String.raw`📖 **Rappel du cours :** on peut mettre en évidence un facteur commun d'une ligne devant le déterminant, et retrancher une ligne à une autre sans changer sa valeur.

La troisième ligne a $a$ en facteur commun :

$$\det A = \begin{vmatrix} 1 & 1 & 1 \\ 1 & 1 & a \\ a & a^2 & a^3 \end{vmatrix} = a \begin{vmatrix} 1 & 1 & 1 \\ 1 & 1 & a \\ 1 & a & a^2 \end{vmatrix}$$

On fait apparaître des zéros : $L_2 \leftarrow L_2 - L_1$ et $L_3 \leftarrow L_3 - L_1$ :

$$\det A = a \begin{vmatrix} 1 & 1 & 1 \\ 0 & 0 & a-1 \\ 0 & a-1 & a^2-1 \end{vmatrix} = a\left[ 0 \cdot (a^2-1) - (a-1)(a-1) \right] = -a(a-1)^2$$

(on a développé selon la première colonne, puis le déterminant $2\times 2$ restant).

**Conclusion :** solution unique si et seulement si $a \neq 0$ et $a \neq 1$. Remarque que $b$ n'apparaît pas dans le déterminant : il n'intervient que dans les seconds membres, donc il ne jouera un rôle que dans les cas critiques.`,
          },
          {
            title: "Résoudre le cas général (a ≠ 0 et a ≠ 1)",
            content: String.raw`En soustrayant la première équation de la deuxième : $(a-1)z = 1$, donc

$$ z = \frac{1}{a-1}.$$

La première équation donne alors $x + y = 1 - \dfrac{1}{a-1} = \dfrac{a-2}{a-1}$.

On substitue $x = \dfrac{a-2}{a-1} - y$ dans la troisième équation $ax + a^2y + a^3z = b$ :

$$ \frac{a(a-2)}{a-1} + a(a-1)y + \frac{a^3}{a-1} = b \quad\Longrightarrow\quad a(a-1)y = b - \frac{a^3 + a^2 - 2a}{a-1}.$$

Or $a^3 + a^2 - 2a = a(a+2)(a-1)$, donc le second membre se simplifie en $b - a(a+2) = b - a^2 - 2a$ :

$$ y = \frac{b - a^2 - 2a}{a(a-1)}, \qquad x = \frac{a-2}{a-1} - y = \frac{a(a-2) - (b - a^2 - 2a)}{a(a-1)} = \frac{2a^2 - b}{a(a-1)}.$$

**Vérification :** $x + y + z = \dfrac{(2a^2 - b) + (b - a^2 - 2a)}{a(a-1)} + \dfrac{1}{a-1} = \dfrac{a-2}{a-1} + \dfrac{1}{a-1} = 1$ ✓ (première équation).`,
          },
          {
            title: "Cas a = 1 : système impossible",
            content: String.raw`Pour $a = 1$, les deux premières équations deviennent

$$\begin{cases} x + y + z = 1 \\ x + y + z = 2 \end{cases}$$

Contradiction immédiate : le système est **impossible**, quelle que soit la valeur de $b$.`,
          },
          {
            title: "Cas a = 0 : discuter selon b",
            content: String.raw`Pour $a = 0$, le système devient

$$\begin{cases} x + y + z = 1 \\ x + y = 2 \\ 0 = b \end{cases}$$

La troisième équation ne contient plus aucune inconnue ! C'est le paramètre $b$ qui décide :

- **Si $b \neq 0$ :** l'équation $0 = b$ est fausse, le système est **impossible**.
- **Si $b = 0$ :** l'équation $0 = 0$ est toujours vraie, il reste deux équations pour trois inconnues : système **simplement indéterminé**.

Dans le cas $b = 0$ : la deuxième équation donne $x = 2 - y$, et la première donne $z = 1 - (x+y) = 1 - 2 = -1$. Sous forme vectorielle :

$$ (x, y, z)^T = (2, 0, -1)^T + y\,(-1, 1, 0)^T, \qquad y \in \mathbb{R}.$$

**Vérification** (avec $y = 0$) : $2 + 0 - 1 = 1$ ✓, $2 + 0 = 2$ ✓, $0 = 0$ ✓`,
          },
        ],
        answer: String.raw`- Si $a \neq 0$ et $a \neq 1$ (pour tout $b$) : solution unique $x = \dfrac{2a^2 - b}{a(a-1)}$, $y = \dfrac{b - a^2 - 2a}{a(a-1)}$, $z = \dfrac{1}{a-1}$.
- Si $a = 1$ : impossible (pour tout $b$).
- Si $a = 0$ et $b \neq 0$ : impossible.
- Si $a = 0$ et $b = 0$ : simplement indéterminé, $(x,y,z)^T = (2,0,-1)^T + y\,(-1,1,0)^T$, $y \in \mathbb{R}$.`,
      },
    ],
  },
  {
    id: "3.7",
    chapter: 3,
    title: "Discussion d'un système à deux paramètres",
    examType: true,
    statement: String.raw`Pour quelles valeurs des paramètres réels $a$, $b$, le système possède-t-il une solution unique ? Pour quelles valeurs possède-t-il une infinité de solutions, pour quelles valeurs le système est-il impossible ?

$$ \begin{cases} ax + by + 2z = 1 \\ ax + (2b-1)y + 3z = 1 \\ ax + by + (b+3)z = 2b-1 \end{cases}$$`,
    method: String.raw`Échelonne d'abord le système : comme les trois équations commencent par $ax$, soustraire la première ligne des deux autres fait apparaître une forme triangulaire dont le déterminant se lit sur la diagonale. Discute ensuite chaque valeur critique séparément, et n'oublie pas le cas $a = 0$ : l'inconnue $x$ disparaît alors complètement du système, ce qui crée des cas supplémentaires selon $b$.`,
    theoryRefs: ["Systèmes avec paramètres", "Méthode de Cramer"],
    parts: [
      {
        label: null,
        steps: [
          {
            title: "Échelonner le système",
            content: String.raw`Les trois équations ont le même terme $ax$ : c'est une invitation à soustraire la première ligne des deux autres. Ces transformations élémentaires ne changent pas l'ensemble des solutions.

$$ \xrightarrow{\substack{L_2 \leftarrow L_2 - L_1 \\ L_3 \leftarrow L_3 - L_1}} \quad \begin{cases} ax + by + 2z = 1 \\ (b-1)y + z = 0 \\ (b+1)z = 2b - 2 \end{cases}$$

Le système est maintenant **triangulaire** : la dernière équation ne contient que $z$, l'avant-dernière $y$ et $z$, la première toutes les inconnues. Toute la discussion se fera en remontant de bas en haut.`,
          },
          {
            title: "Calculer le déterminant",
            content: String.raw`📖 **Rappel du cours :** le déterminant d'une matrice triangulaire est le produit de ses éléments diagonaux, et les transformations du type $L_i \leftarrow L_i - L_j$ ne changent pas le déterminant.

La matrice des coefficients du système échelonné est triangulaire supérieure :

$$\det A = \begin{vmatrix} a & b & 2 \\ 0 & b-1 & 1 \\ 0 & 0 & b+1 \end{vmatrix} = a(b-1)(b+1)$$

**Conclusion :** solution unique si et seulement si $a \neq 0$, $b \neq 1$ et $b \neq -1$. Les cas critiques à discuter sont $b = 1$, $b = -1$ et $a = 0$.`,
          },
          {
            title: "Cas général : calculer la solution unique",
            content: String.raw`Supposons $a \neq 0$, $b \neq 1$ et $b \neq -1$, et remontons le système échelonné.

La troisième équation donne $z = \dfrac{2(b-1)}{b+1}$.

La deuxième donne $(b-1)y = -z$, donc $y = \dfrac{-z}{b-1} = \dfrac{-2}{b+1}$.

Enfin, la première : $ax = 1 - by - 2z = 1 + \dfrac{2b}{b+1} - \dfrac{4(b-1)}{b+1} = \dfrac{(b+1) + 2b - 4b + 4}{b+1} = \dfrac{5-b}{b+1}$, d'où

$$ x = \frac{5-b}{a(b+1)}, \qquad y = \frac{-2}{b+1}, \qquad z = \frac{2(b-1)}{b+1}.$$`,
          },
          {
            title: "Cas b = 1 : infinité de solutions (pour tout a)",
            content: String.raw`Remplaçons $b = 1$ dans le système échelonné :

$$\begin{cases} ax + y + 2z = 1 \\ 0 \cdot y + z = 0 \\ 2z = 0 \end{cases}$$

Les deux dernières équations donnent toutes les deux $z = 0$ : l'une est redondante. Il reste une seule équation utile, $ax + y = 1$, pour les inconnues $x$ et $y$ : le système est **simplement indéterminé**, et ce **quelle que soit la valeur de $a$** (y compris $a = 0$, où l'on obtient simplement $y = 1$ avec $x$ libre).

$$ (x, y, z)^T = (x,\ 1 - ax,\ 0)^T = (0, 1, 0)^T + x\,(1, -a, 0)^T, \qquad x \in \mathbb{R}.$$

**Vérification :** avec $b = 1$, la troisième équation d'origine est $ax + y + 4z = 1$ : on a bien $ax + (1 - ax) + 0 = 1$ ✓`,
          },
          {
            title: "Cas b = −1 : système impossible (pour tout a)",
            content: String.raw`Remplaçons $b = -1$ dans la troisième équation du système échelonné :

$$ (b+1)z = 2b - 2 \quad\Longrightarrow\quad 0 \cdot z = -4.$$

Aucune valeur de $z$ ne peut satisfaire $0 = -4$ : le système est **impossible**, quelle que soit la valeur de $a$. (Concrètement : dans le système d'origine, les membres de gauche des équations 1 et 3 deviennent identiques alors que leurs seconds membres valent $1$ et $-3$.)`,
          },
          {
            title: "Cas a = 0 : discuter selon b",
            content: String.raw`Si $a = 0$, l'inconnue $x$ disparaît du système : il reste trois équations pour les deux inconnues $y$ et $z$ (et $x$ sera libre si le système est compatible). Supposons $b \neq 1$ et $b \neq -1$ (déjà traités). Les équations 2 et 3 échelonnées imposent

$$ y = \frac{-2}{b+1}, \qquad z = \frac{2(b-1)}{b+1},$$

et la première équation devient une **condition de compatibilité** : $by + 2z = 1$, c'est-à-dire

$$ \frac{-2b + 4(b-1)}{b+1} = 1 \quad\Longleftrightarrow\quad 2b - 4 = b + 1 \quad\Longleftrightarrow\quad b = 5.$$

- **Si $a = 0$ et $b = 5$ :** le système est compatible, $y = -\dfrac{2}{6} = -\dfrac{1}{3}$, $z = \dfrac{2 \cdot 4}{6} = \dfrac{4}{3}$, et $x$ est libre : **simplement indéterminé**, $(x, y, z)^T = \left(x,\ -\tfrac{1}{3},\ \tfrac{4}{3}\right)^T$, $x \in \mathbb{R}$.
- **Si $a = 0$ et $b \neq 1$, $b \neq 5$ :** la condition de compatibilité échoue, le système est **impossible**.

**Vérification** ($a=0$, $b=5$) : première équation $5 \cdot \left(-\tfrac{1}{3}\right) + 2 \cdot \tfrac{4}{3} = -\tfrac{5}{3} + \tfrac{8}{3} = 1$ ✓ ; troisième équation $5y + 8z = -\tfrac{5}{3} + \tfrac{32}{3} = 9 = 2b - 1$ ✓`,
          },
          {
            title: "Récapituler la discussion",
            content: String.raw`On rassemble tous les cas (c'est la réponse attendue à l'examen — vérifie qu'aucun couple $(a,b)$ n'est oublié) :

- **Solution unique** $\iff a \neq 0$ et $b \neq 1$ et $b \neq -1$.
- **Infinité de solutions** (simplement indéterminé) $\iff b = 1$ (pour tout $a$), ou $a = 0$ et $b = 5$.
- **Impossible** $\iff b = -1$ (pour tout $a$), ou $a = 0$ et $b \notin \{1, 5\}$.`,
          },
        ],
        answer: String.raw`- **Solution unique** si $a \neq 0$, $b \neq 1$ et $b \neq -1$ : $x = \dfrac{5-b}{a(b+1)}$, $y = \dfrac{-2}{b+1}$, $z = \dfrac{2(b-1)}{b+1}$.
- **Infinité de solutions** si $b = 1$ (pour tout $a$) : $(x,\ 1-ax,\ 0)^T$, $x \in \mathbb{R}$ ; ou si $a = 0$ et $b = 5$ : $\left(x,\ -\tfrac{1}{3},\ \tfrac{4}{3}\right)^T$, $x \in \mathbb{R}$.
- **Impossible** si $b = -1$ (pour tout $a$), ou si $a = 0$ et $b \notin \{1, 5\}$.`,
      },
    ],
  },
  {
    id: "3.8",
    chapter: 3,
    title: "Modèle de Leontief à deux secteurs",
    examType: true,
    statement: String.raw`On considère une économie composée de deux secteurs, $S_1$ et $S_2$. On écrit $x_{ij}$ pour désigner la quantité (intermédiaire) du bien produit par $S_i$ et livrée à $S_j$. Nous avons $x_{11} = 164$, $x_{12} = 132$, $x_{21} = 190$ et $x_{22} = 15$. La demande finale est de 204 unités pour $S_1$ et 95 unités pour $S_2$.`,
    method: String.raw`Commence par compléter le tableau d'échanges : l'output total d'un secteur est la somme de ses livraisons intermédiaires et de la demande finale (somme de la ligne). La matrice technologique s'obtient en divisant chaque échange $x_{ij}$ par l'output total $X_j$ du secteur acheteur (normalisation par colonne). Pour l'effet d'une hausse de demande, résous $X' = (I-A)^{-1}D'$ : la matrice technologique ne change pas, seule la demande change.`,
    theoryRefs: ["Modèle de Leontief", "Méthode de Cramer"],
    parts: [
      {
        label: "a",
        statement: String.raw`Dressez le tableau d'échanges inter-industriels.`,
        steps: [
          {
            title: "Traduire l'énoncé : qui livre quoi à qui ?",
            content: String.raw`📖 **Rappel du cours :** dans le tableau d'échanges inter-industriels, la **ligne** $i$ décrit comment la production du secteur $S_i$ est utilisée : livraisons intermédiaires $x_{i1}, x_{i2}, \dots$ aux différents secteurs, puis demande finale $D_i$ (consommateurs, exportations…). La somme de la ligne donne l'output total $X_i$.

Ici, l'indice se lit « de $S_i$ vers $S_j$ » : $x_{12} = 132$ signifie que $S_1$ livre 132 unités de son bien à $S_2$ comme consommation intermédiaire. On connaît les quatre échanges intermédiaires et les deux demandes finales $D_1 = 204$, $D_2 = 95$ : il ne manque que les outputs totaux.`,
          },
          {
            title: "Calculer les outputs totaux",
            content: String.raw`Chaque output total est la somme de sa ligne (tout ce qui est produit est soit consommé par les secteurs, soit livré à la demande finale) :

$$ X_1 = x_{11} + x_{12} + D_1 = 164 + 132 + 204 = 500$$

$$ X_2 = x_{21} + x_{22} + D_2 = 190 + 15 + 95 = 300$$`,
          },
          {
            title: "Dresser le tableau",
            content: String.raw`On rassemble le tout :

$$\begin{array}{l|cc|c|c} & S_1 & S_2 & \text{Demande finale } D & \text{Output total } X \\ \hline S_1 & 164 & 132 & 204 & 500 \\ S_2 & 190 & 15 & 95 & 300 \end{array}$$

**Vérification :** chaque ligne se somme bien sur son output total : $164 + 132 + 204 = 500$ ✓ et $190 + 15 + 95 = 300$ ✓`,
          },
        ],
        answer: String.raw`$$\begin{array}{l|cc|c|c} & S_1 & S_2 & D & X \\ \hline S_1 & 164 & 132 & 204 & 500 \\ S_2 & 190 & 15 & 95 & 300 \end{array}$$`,
      },
      {
        label: "b",
        statement: String.raw`Calculez $A$, la matrice technologique (ou matrice input-output), et calculez la matrice de Leontief.`,
        steps: [
          {
            title: "Rappeler la définition de la matrice technologique",
            content: String.raw`📖 **Rappel du cours :** le coefficient technique $a_{ij}$ est la quantité du bien $i$ nécessaire pour produire **une seule unité** du bien $j$ :

$$ a_{ij} = \frac{x_{ij}}{X_j}$$

Attention au piège classique : on divise chaque **colonne** du tableau d'échanges par l'output total du secteur **acheteur** $X_j$ (celui qui est en haut de la colonne), pas par celui de la ligne.`,
          },
          {
            title: "Calculer les quatre coefficients techniques",
            content: String.raw`La colonne 1 se divise par $X_1 = 500$, la colonne 2 par $X_2 = 300$ :

$$ a_{11} = \frac{164}{500} = 0{,}328 \qquad a_{12} = \frac{132}{300} = 0{,}44$$

$$ a_{21} = \frac{190}{500} = 0{,}38 \qquad a_{22} = \frac{15}{300} = 0{,}05$$

D'où la matrice technologique :

$$ A = \begin{pmatrix} 0{,}328 & 0{,}44 \\ 0{,}38 & 0{,}05 \end{pmatrix}$$

Lecture : pour produire une unité du bien 2, il faut $0{,}44$ unité du bien 1 et $0{,}05$ unité du bien 2.`,
          },
          {
            title: "Calculer la matrice de Leontief",
            content: String.raw`📖 **Rappel du cours :** la relation fondamentale du modèle est $X = AX + D$ (production = consommations intermédiaires + demande finale), qu'on réécrit $ (I - A)X = D$. La matrice $I - A$ s'appelle la **matrice de Leontief**.

$$ I - A = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} - \begin{pmatrix} 0{,}328 & 0{,}44 \\ 0{,}38 & 0{,}05 \end{pmatrix} = \begin{pmatrix} 0{,}672 & -0{,}44 \\ -0{,}38 & 0{,}95 \end{pmatrix}$$`,
          },
          {
            title: "Vérifier avec les données du tableau",
            content: String.raw`**Vérification :** on doit retrouver $(I - A)X = D$ avec $X = (500, 300)^T$ :

$$ \begin{pmatrix} 0{,}672 & -0{,}44 \\ -0{,}38 & 0{,}95 \end{pmatrix} \begin{pmatrix} 500 \\ 300 \end{pmatrix} = \begin{pmatrix} 336 - 132 \\ -190 + 285 \end{pmatrix} = \begin{pmatrix} 204 \\ 95 \end{pmatrix} = D \ \checkmark$$`,
          },
        ],
        answer: String.raw`$$ A = \begin{pmatrix} 0{,}328 & 0{,}44 \\ 0{,}38 & 0{,}05 \end{pmatrix}, \qquad I - A = \begin{pmatrix} 0{,}672 & -0{,}44 \\ -0{,}38 & 0{,}95 \end{pmatrix}$$`,
      },
      {
        label: "c",
        statement: String.raw`Supposons que la demande finale pour le secteur $S_2$ augmente de 5 unités. Quel est l'effet sur la production (c'est-à-dire, sur l'output total $X$) ?`,
        steps: [
          {
            title: "Poser le problème : nouvelle demande, même technologie",
            content: String.raw`📖 **Rappel du cours :** la matrice technologique $A$ décrit la technique de production ; elle ne change pas quand la demande varie. Pour une nouvelle demande finale $D'$, la nouvelle production s'obtient en résolvant $ (I - A)X' = D'$, c'est-à-dire

$$ X' = (I - A)^{-1} D'.$$

Ici la demande pour $S_2$ passe de 95 à 100 :

$$ D' = \begin{pmatrix} 204 \\ 100 \end{pmatrix}$$`,
          },
          {
            title: "Inverser la matrice de Leontief",
            content: String.raw`Pour une matrice $2 \times 2$, l'inverse se calcule directement : on échange les éléments diagonaux, on change le signe des deux autres, et on divise par le déterminant.

$$ \det(I - A) = 0{,}672 \cdot 0{,}95 - (-0{,}44)(-0{,}38) = 0{,}6384 - 0{,}1672 = 0{,}4712$$

$$ (I - A)^{-1} = \frac{1}{0{,}4712} \begin{pmatrix} 0{,}95 & 0{,}44 \\ 0{,}38 & 0{,}672 \end{pmatrix} \approx \begin{pmatrix} 2{,}0161 & 0{,}9338 \\ 0{,}8065 & 1{,}4261 \end{pmatrix}$$

Conseil : garde la forme exacte $\frac{1}{0{,}4712}(\cdots)$ le plus longtemps possible pour éviter d'accumuler les erreurs d'arrondi.`,
          },
          {
            title: "Calculer la nouvelle production",
            content: String.raw`$$ X' = \frac{1}{0{,}4712} \begin{pmatrix} 0{,}95 & 0{,}44 \\ 0{,}38 & 0{,}672 \end{pmatrix} \begin{pmatrix} 204 \\ 100 \end{pmatrix} = \frac{1}{0{,}4712} \begin{pmatrix} 193{,}8 + 44 \\ 77{,}52 + 67{,}2 \end{pmatrix} = \frac{1}{0{,}4712} \begin{pmatrix} 237{,}8 \\ 144{,}72 \end{pmatrix} \approx \begin{pmatrix} 504{,}67 \\ 307{,}13 \end{pmatrix}$$

Par rapport à l'ancienne production $X = (500, 300)^T$, l'effet est

$$ \Delta X = X' - X \approx \begin{pmatrix} 4{,}67 \\ 7{,}13 \end{pmatrix}$$

Remarque l'interdépendance : la demande supplémentaire ne porte que sur $S_2$, mais $S_1$ doit aussi produire environ $4{,}67$ unités de plus, car $S_2$ a besoin du bien 1 comme consommation intermédiaire (et cet effet rebondit de secteur en secteur — c'est tout l'intérêt du modèle de Leontief).`,
          },
          {
            title: "Vérifier la nouvelle production",
            content: String.raw`**Vérification :** on réinjecte $X' \approx (504{,}67 ;\ 307{,}13)^T$ dans $(I-A)X' = D'$ :

$$ 0{,}672 \cdot 504{,}67 - 0{,}44 \cdot 307{,}13 \approx 339{,}14 - 135{,}14 = 204{,}0 \ \checkmark$$

$$ -0{,}38 \cdot 504{,}67 + 0{,}95 \cdot 307{,}13 \approx -191{,}77 + 291{,}77 = 100{,}0 \ \checkmark$$`,
          },
        ],
        answer: String.raw`$$ X' = (I-A)^{-1}\begin{pmatrix} 204 \\ 100 \end{pmatrix} \approx (504{,}67 ;\ 307{,}13)^T$$

La production de $S_1$ augmente d'environ $4{,}67$ unités et celle de $S_2$ d'environ $7{,}13$ unités.

(Le solutionnaire donne $(505{,}1 ;\ 308{,}24)^T$ : il arrondit d'abord $(I-A)^{-1}$ à deux décimales avant de multiplier par $D'$, ce qui amplifie l'erreur d'arrondi. Le résultat exact ci-dessus vérifie $(I-A)X' = (204,\ 100)^T$ exactement.)`,
      },
    ],
  },
  {
    id: "3.9",
    chapter: 3,
    title: "Modèle de Leontief à trois secteurs",
    examType: true,
    statement: String.raw`On considère une économie composée de trois secteurs $S_1$, $S_2$ et $S_3$. Pour produire une unité, $S_1$ utilise $0{,}1$ unité du bien qu'il produit, $0{,}3$ unité du bien produit par $S_2$ et $0{,}2$ unité du bien produit par $S_3$, tandis que $S_2$ utilise $0{,}2$ unité du bien qu'il produit, $0{,}2$ unité du bien produit par $S_1$ et $0{,}2$ unité du bien produit par $S_3$. Finalement, $S_3$ utilise $0{,}1$ unité du bien qu'il produit, $0{,}1$ unité du bien produit par $S_1$ et $0{,}2$ unité du bien produit par $S_2$. La demande finale est de 85, 95 et 20 unités des biens produits par $S_1$, $S_2$ et $S_3$ respectivement.`,
    method: String.raw`Traduis d'abord l'énoncé en matrice input-output $A$ : ce que consomme le secteur $S_j$ pour produire une unité forme la **colonne** $j$ de $A$ (et non la ligne — c'est le piège de cet exercice). Ensuite, inverse la matrice de Leontief $I - A$ par la méthode des cofacteurs et applique $X = (I-A)^{-1}D$. Pour le tableau d'échanges, dénormalise : $x_{ij} = a_{ij}X_j$.`,
    theoryRefs: ["Modèle de Leontief", "Méthode de Cramer"],
    parts: [
      {
        label: "a",
        statement: String.raw`Rechercher les productions totales de ces secteurs en inversant la matrice de Leontief.`,
        steps: [
          {
            title: "Modéliser : construire la matrice input-output",
            content: String.raw`📖 **Rappel du cours :** $a_{ij}$ est la quantité du bien $i$ consommée pour produire une unité du bien $j$. Les besoins du secteur $S_j$ se lisent donc dans la **colonne** $j$ de $A$.

On traduit phrase par phrase :

- « $S_1$ utilise $0{,}1$ de son bien, $0{,}3$ du bien de $S_2$, $0{,}2$ du bien de $S_3$ » $\to$ colonne 1 : $a_{11} = 0{,}1$, $a_{21} = 0{,}3$, $a_{31} = 0{,}2$.
- « $S_2$ utilise $0{,}2$ de son bien, $0{,}2$ du bien de $S_1$, $0{,}2$ du bien de $S_3$ » $\to$ colonne 2 : $a_{12} = 0{,}2$, $a_{22} = 0{,}2$, $a_{32} = 0{,}2$.
- « $S_3$ utilise $0{,}1$ de son bien, $0{,}1$ du bien de $S_1$, $0{,}2$ du bien de $S_2$ » $\to$ colonne 3 : $a_{13} = 0{,}1$, $a_{23} = 0{,}2$, $a_{33} = 0{,}1$.

$$ A = \begin{pmatrix} 0{,}1 & 0{,}2 & 0{,}1 \\ 0{,}3 & 0{,}2 & 0{,}2 \\ 0{,}2 & 0{,}2 & 0{,}1 \end{pmatrix}, \qquad D = \begin{pmatrix} 85 \\ 95 \\ 20 \end{pmatrix}$$`,
          },
          {
            title: "Écrire la matrice de Leontief",
            content: String.raw`📖 **Rappel du cours :** l'équilibre production = consommations intermédiaires + demande finale s'écrit $X = AX + D$, soit $(I - A)X = D$ et donc $X = (I-A)^{-1}D$.

$$ I - A = \begin{pmatrix} 0{,}9 & -0{,}2 & -0{,}1 \\ -0{,}3 & 0{,}8 & -0{,}2 \\ -0{,}2 & -0{,}2 & 0{,}9 \end{pmatrix}$$`,
          },
          {
            title: "Calculer le déterminant de I − A",
            content: String.raw`On développe selon la première ligne :

$$ \det(I-A) = 0{,}9 \begin{vmatrix} 0{,}8 & -0{,}2 \\ -0{,}2 & 0{,}9 \end{vmatrix} - (-0{,}2) \begin{vmatrix} -0{,}3 & -0{,}2 \\ -0{,}2 & 0{,}9 \end{vmatrix} + (-0{,}1) \begin{vmatrix} -0{,}3 & 0{,}8 \\ -0{,}2 & -0{,}2 \end{vmatrix}$$

Les trois mineurs valent : $0{,}72 - 0{,}04 = 0{,}68$, puis $-0{,}27 - 0{,}04 = -0{,}31$, puis $0{,}06 + 0{,}16 = 0{,}22$. Donc

$$ \det(I-A) = 0{,}9 \cdot 0{,}68 + 0{,}2 \cdot (-0{,}31) - 0{,}1 \cdot 0{,}22 = 0{,}612 - 0{,}062 - 0{,}022 = 0{,}528 \neq 0.$$

La matrice de Leontief est bien inversible.`,
          },
          {
            title: "Inverser I − A par les cofacteurs",
            content: String.raw`📖 **Rappel du cours :** $ (I-A)^{-1} = \dfrac{1}{\det(I-A)}\,C^T$, où $C$ est la matrice des cofacteurs $C_{ij} = (-1)^{i+j}M_{ij}$ ($M_{ij}$ = mineur obtenu en barrant la ligne $i$ et la colonne $j$).

Calcul des neuf cofacteurs (les trois premiers sont déjà connus du déterminant) :

- $C_{11} = 0{,}68$, $\quad C_{12} = -(-0{,}31) = 0{,}31$, $\quad C_{13} = 0{,}22$
- $C_{21} = -(-0{,}18 - 0{,}02) = 0{,}20$, $\quad C_{22} = 0{,}81 - 0{,}02 = 0{,}79$, $\quad C_{23} = -(-0{,}18 - 0{,}04) = 0{,}22$
- $C_{31} = 0{,}04 + 0{,}08 = 0{,}12$, $\quad C_{32} = -(-0{,}18 - 0{,}03) = 0{,}21$, $\quad C_{33} = 0{,}72 - 0{,}06 = 0{,}66$

On transpose la matrice des cofacteurs et on divise par le déterminant :

$$ (I-A)^{-1} = \frac{1}{0{,}528} \begin{pmatrix} 0{,}68 & 0{,}20 & 0{,}12 \\ 0{,}31 & 0{,}79 & 0{,}21 \\ 0{,}22 & 0{,}22 & 0{,}66 \end{pmatrix}$$`,
          },
          {
            title: "Calculer les productions totales",
            content: String.raw`$$ X = (I-A)^{-1}D = \frac{1}{0{,}528} \begin{pmatrix} 0{,}68 & 0{,}20 & 0{,}12 \\ 0{,}31 & 0{,}79 & 0{,}21 \\ 0{,}22 & 0{,}22 & 0{,}66 \end{pmatrix} \begin{pmatrix} 85 \\ 95 \\ 20 \end{pmatrix}$$

Calculons chaque composante :

$$ X_1 = \frac{57{,}8 + 19 + 2{,}4}{0{,}528} = \frac{79{,}2}{0{,}528} = 150$$

$$ X_2 = \frac{26{,}35 + 75{,}05 + 4{,}2}{0{,}528} = \frac{105{,}6}{0{,}528} = 200$$

$$ X_3 = \frac{18{,}7 + 20{,}9 + 13{,}2}{0{,}528} = \frac{52{,}8}{0{,}528} = 100$$

Les trois valeurs tombent exactement juste : $X = (150,\ 200,\ 100)^T$.`,
          },
          {
            title: "Vérifier la solution",
            content: String.raw`**Vérification :** on réinjecte $X = (150, 200, 100)^T$ dans $(I-A)X$ ; on doit retrouver $D$ :

$$ \begin{pmatrix} 0{,}9 & -0{,}2 & -0{,}1 \\ -0{,}3 & 0{,}8 & -0{,}2 \\ -0{,}2 & -0{,}2 & 0{,}9 \end{pmatrix} \begin{pmatrix} 150 \\ 200 \\ 100 \end{pmatrix} = \begin{pmatrix} 135 - 40 - 10 \\ -45 + 160 - 20 \\ -30 - 40 + 90 \end{pmatrix} = \begin{pmatrix} 85 \\ 95 \\ 20 \end{pmatrix} = D \ \checkmark$$

La solution est donc exacte.`,
          },
        ],
        answer: String.raw`$$ X = (I-A)^{-1}D = (150,\ 200,\ 100)^T$$

Les productions totales sont de 150 unités pour $S_1$, 200 pour $S_2$ et 100 pour $S_3$ (valeurs exactes : $(I-A)X = D$ ✓).

(Le solutionnaire écrit $X_2 = 199{,}24$ : c'est une erreur d'arrondi de sa part — son propre tableau d'échanges en c) confirme $X_2 = 45 + 40 + 20 + 95 = 200$.)`,
      },
      {
        label: "b",
        statement: String.raw`Comparer le résultat avec celui obtenu en se limitant à $I + A + A^2$, où $A$ est la matrice input-output. Est-ce surprenant ?`,
        steps: [
          {
            title: "Comprendre l'approximation en série",
            content: String.raw`📖 **Rappel du cours :** lorsque l'économie est productive, l'inverse de la matrice de Leontief se développe en série :

$$ (I-A)^{-1} = I + A + A^2 + A^3 + \cdots$$

L'interprétation est économique : pour servir la demande $D$, il faut produire $D$ (effet direct), plus $AD$ (les inputs nécessaires pour produire $D$), plus $A^2D$ (les inputs des inputs), et ainsi de suite. Se limiter à $I + A + A^2$ revient à tronquer la série après les effets de deuxième ordre.`,
          },
          {
            title: "Calculer A²",
            content: String.raw`Produit ligne par colonne (par exemple, l'élément $(1,1)$ vaut $0{,}1 \cdot 0{,}1 + 0{,}2 \cdot 0{,}3 + 0{,}1 \cdot 0{,}2 = 0{,}09$) :

$$ A^2 = \begin{pmatrix} 0{,}09 & 0{,}08 & 0{,}06 \\ 0{,}13 & 0{,}14 & 0{,}09 \\ 0{,}10 & 0{,}10 & 0{,}07 \end{pmatrix}$$`,
          },
          {
            title: "Calculer (I + A + A²)D",
            content: String.raw`On additionne d'abord les trois matrices :

$$ I + A + A^2 = \begin{pmatrix} 1{,}19 & 0{,}28 & 0{,}16 \\ 0{,}43 & 1{,}34 & 0{,}29 \\ 0{,}30 & 0{,}30 & 1{,}17 \end{pmatrix}$$

puis on applique à $D = (85, 95, 20)^T$ :

$$ (I + A + A^2)D = \begin{pmatrix} 101{,}15 + 26{,}6 + 3{,}2 \\ 36{,}55 + 127{,}3 + 5{,}8 \\ 25{,}5 + 28{,}5 + 23{,}4 \end{pmatrix} = \begin{pmatrix} 130{,}95 \\ 169{,}65 \\ 77{,}4 \end{pmatrix}$$

(On peut aussi voir ce vecteur comme $D + AD + A^2D = (85; 95; 20)^T + (29{,}5; 48{,}5; 38)^T + (16{,}45; 26{,}15; 19{,}4)^T$ : demande directe + effets de premier et de deuxième ordre.)`,
          },
          {
            title: "Comparer et interpréter",
            content: String.raw`On compare avec le résultat exact de la sous-question a) :

$$ (I + A + A^2)D = \begin{pmatrix} 130{,}95 \\ 169{,}65 \\ 77{,}4 \end{pmatrix} \quad\text{contre}\quad X = \begin{pmatrix} 150 \\ 200 \\ 100 \end{pmatrix}$$

L'approximation **sous-estime** la production dans les trois secteurs. Ce n'est **pas surprenant** : les termes négligés $A^3D + A^4D + \cdots$ sont tous des vecteurs à composantes positives (produits de coefficients positifs), donc tronquer la série ne peut que donner un résultat trop faible. Économiquement, on a ignoré tous les effets d'entraînement d'ordre 3 et plus, qui sont encore loin d'être négligeables ici.`,
          },
        ],
        answer: String.raw`$$ (I + A + A^2)D = (130{,}95 ;\ 169{,}65 ;\ 77{,}4)^T$$

C'est inférieur au résultat exact $X = (150, 200, 100)^T$ dans chaque secteur. Ce n'est pas surprenant : $I + A + A^2$ tronque la série $(I-A)^{-1} = I + A + A^2 + A^3 + \cdots$ dont tous les termes négligés sont positifs — l'approximation sous-estime donc systématiquement la production.`,
      },
      {
        label: "c",
        statement: String.raw`Construisez le tableau d'échanges inter-industriels pour les trois secteurs.`,
        steps: [
          {
            title: "Dénormaliser les coefficients techniques",
            content: String.raw`📖 **Rappel du cours :** la définition $a_{ij} = \dfrac{x_{ij}}{X_j}$ se retourne en $x_{ij} = a_{ij} X_j$ : l'échange réel de $S_i$ vers $S_j$ est le coefficient technique multiplié par l'output total du secteur acheteur. C'est le chemin inverse de l'exercice 3.8 : là on passait du tableau à $A$, ici on passe de $A$ au tableau.

On utilise les productions totales trouvées en a) : $X = (150,\ 200,\ 100)^T$.`,
          },
          {
            title: "Calculer les neuf échanges intermédiaires",
            content: String.raw`Colonne par colonne (chaque colonne $j$ de $A$ multipliée par $X_j$) :

- Livraisons à $S_1$ ($X_1 = 150$) : $x_{11} = 0{,}1 \cdot 150 = 15$, $\ x_{21} = 0{,}3 \cdot 150 = 45$, $\ x_{31} = 0{,}2 \cdot 150 = 30$.
- Livraisons à $S_2$ ($X_2 = 200$) : $x_{12} = 0{,}2 \cdot 200 = 40$, $\ x_{22} = 0{,}2 \cdot 200 = 40$, $\ x_{32} = 0{,}2 \cdot 200 = 40$.
- Livraisons à $S_3$ ($X_3 = 100$) : $x_{13} = 0{,}1 \cdot 100 = 10$, $\ x_{23} = 0{,}2 \cdot 100 = 20$, $\ x_{33} = 0{,}1 \cdot 100 = 10$.`,
          },
          {
            title: "Dresser le tableau et vérifier",
            content: String.raw`On assemble le tableau (lignes = secteur producteur, colonnes = secteur acheteur, puis demande finale et output total) :

$$\begin{array}{l|ccc|c|c} & S_1 & S_2 & S_3 & \text{Demande finale } D & \text{Output total } X \\ \hline S_1 & 15 & 40 & 10 & 85 & 150 \\ S_2 & 45 & 40 & 20 & 95 & 200 \\ S_3 & 30 & 40 & 10 & 20 & 100 \end{array}$$

**Vérification :** chaque ligne doit se sommer sur l'output total du secteur :

- $S_1$ : $15 + 40 + 10 + 85 = 150$ ✓
- $S_2$ : $45 + 40 + 20 + 95 = 200$ ✓
- $S_3$ : $30 + 40 + 10 + 20 = 100$ ✓

Tout est cohérent : le tableau d'échanges est correct.`,
          },
        ],
        answer: String.raw`$$\begin{array}{l|ccc|c|c} & S_1 & S_2 & S_3 & D & X \\ \hline S_1 & 15 & 40 & 10 & 85 & 150 \\ S_2 & 45 & 40 & 20 & 95 & 200 \\ S_3 & 30 & 40 & 10 & 20 & 100 \end{array}$$`,
      },
    ],
  },
];
