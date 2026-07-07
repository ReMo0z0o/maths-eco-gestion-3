import type { Exercise } from "./types";

export const exercises: Exercise[] = [
  {
    id: "2.1",
    chapter: 2,
    title: "Résolution de systèmes par Gauss–Jordan",
    examType: false,
    statement: String.raw`Résolvez les systèmes suivants par la méthode de Gauss–Jordan.`,
    method: String.raw`Écris chaque système sous forme de matrice augmentée, puis applique des opérations élémentaires sur les lignes pour faire apparaître des pivots égaux à 1 et des zéros partout ailleurs dans les colonnes des pivots. Quand tu tombes sur une ligne entièrement nulle, une inconnue reste libre : le système est indéterminé et tu exprimes la solution en fonction de cette inconnue.`,
    theoryRefs: ["Méthode de Gauss–Jordan", "Discussion de solutions"],
    parts: [
      {
        label: "a",
        statement: String.raw`$$\begin{cases} 2x - 3y + z = -10 \\ x + y + z = 0 \\ 3x + 2y - 2z = 22 \end{cases}$$`,
        steps: [
          {
            title: "Poser la matrice augmentée",
            content: String.raw`📖 **Rappel du cours :** la méthode de Gauss–Jordan consiste à représenter le système par sa **matrice augmentée** (coefficients à gauche du trait, termes indépendants à droite), puis à la transformer par trois types d'opérations élémentaires qui ne changent pas l'ensemble des solutions : échanger deux lignes, multiplier une ligne par un réel non nul, ajouter à une ligne un multiple d'une autre.

Ici, la matrice augmentée est :

$$\left(\begin{array}{ccc|c} 2 & -3 & 1 & -10 \\ 1 & 1 & 1 & 0 \\ 3 & 2 & -2 & 22 \end{array}\right)$$`,
          },
          {
            title: "Choisir un pivot égal à 1",
            content: String.raw`Pour éviter les fractions, on veut un $1$ en haut à gauche (le premier **pivot**). La deuxième ligne commence justement par $1$ : on échange donc $L_1$ et $L_2$.

$$\left(\begin{array}{ccc|c} 2 & -3 & 1 & -10 \\ 1 & 1 & 1 & 0 \\ 3 & 2 & -2 & 22 \end{array}\right) \xrightarrow{L_1 \leftrightarrow L_2} \left(\begin{array}{ccc|c} 1 & 1 & 1 & 0 \\ 2 & -3 & 1 & -10 \\ 3 & 2 & -2 & 22 \end{array}\right)$$`,
          },
          {
            title: "Éliminer x des lignes 2 et 3",
            content: String.raw`On annule les coefficients de $x$ sous le pivot en retranchant les bons multiples de $L_1$ :

$$\xrightarrow[L_3 \leftarrow L_3 - 3L_1]{L_2 \leftarrow L_2 - 2L_1} \left(\begin{array}{ccc|c} 1 & 1 & 1 & 0 \\ 0 & -5 & -1 & -10 \\ 0 & -1 & -5 & 22 \end{array}\right)$$

Par exemple, pour $L_2$ : $2 - 2 \cdot 1 = 0$, $-3 - 2 \cdot 1 = -5$, $1 - 2 \cdot 1 = -1$ et $-10 - 2 \cdot 0 = -10$.`,
          },
          {
            title: "Éliminer y et isoler z",
            content: String.raw`Nouveau réflexe anti-fractions : la ligne $L_3$ a un coefficient $-1$ pour $y$, plus pratique que le $-5$ de $L_2$. On échange $L_2$ et $L_3$, on change le signe de la nouvelle $L_2$, puis on élimine $y$ dans $L_3$ :

$$\xrightarrow[L_2 \leftarrow -L_2]{L_2 \leftrightarrow L_3} \left(\begin{array}{ccc|c} 1 & 1 & 1 & 0 \\ 0 & 1 & 5 & -22 \\ 0 & -5 & -1 & -10 \end{array}\right) \xrightarrow{L_3 \leftarrow L_3 + 5L_2} \left(\begin{array}{ccc|c} 1 & 1 & 1 & 0 \\ 0 & 1 & 5 & -22 \\ 0 & 0 & 24 & -120 \end{array}\right)$$

La dernière ligne se lit $24z = -120$, donc en divisant par $24$ :

$$\xrightarrow{L_3 \leftarrow L_3 / 24} \left(\begin{array}{ccc|c} 1 & 1 & 1 & 0 \\ 0 & 1 & 5 & -22 \\ 0 & 0 & 1 & -5 \end{array}\right)$$`,
          },
          {
            title: "Remonter pour diagonaliser (phase Jordan)",
            content: String.raw`📖 **Rappel du cours :** dans Gauss–Jordan, on ne s'arrête pas à la forme triangulaire : on annule aussi les coefficients **au-dessus** des pivots pour lire directement la solution.

On élimine $z$ dans $L_1$ et $L_2$, puis $y$ dans $L_1$ :

$$\xrightarrow[L_1 \leftarrow L_1 - L_3]{L_2 \leftarrow L_2 - 5L_3} \left(\begin{array}{ccc|c} 1 & 1 & 0 & 5 \\ 0 & 1 & 0 & 3 \\ 0 & 0 & 1 & -5 \end{array}\right) \xrightarrow{L_1 \leftarrow L_1 - L_2} \left(\begin{array}{ccc|c} 1 & 0 & 0 & 2 \\ 0 & 1 & 0 & 3 \\ 0 & 0 & 1 & -5 \end{array}\right)$$

On lit directement $x = 2$, $y = 3$, $z = -5$.

**Vérification :** dans le système de départ : $2 \cdot 2 - 3 \cdot 3 + (-5) = 4 - 9 - 5 = -10$ ✓, $2 + 3 - 5 = 0$ ✓, $3 \cdot 2 + 2 \cdot 3 - 2 \cdot (-5) = 6 + 6 + 10 = 22$ ✓.`,
          },
        ],
        answer: String.raw`Le système possède une solution unique : $(x, y, z)^T = (2, 3, -5)^T$.`,
      },
      {
        label: "b",
        statement: String.raw`$$\begin{cases} x - 2y + z = 1 \\ 2x - y + z = 3 \\ x + y = 2 \end{cases}$$`,
        steps: [
          {
            title: "Poser la matrice augmentée et éliminer x",
            content: String.raw`Le pivot $1$ est déjà en place en haut à gauche. On élimine $x$ des lignes 2 et 3 :

$$\left(\begin{array}{ccc|c} 1 & -2 & 1 & 1 \\ 2 & -1 & 1 & 3 \\ 1 & 1 & 0 & 2 \end{array}\right) \xrightarrow[L_3 \leftarrow L_3 - L_1]{L_2 \leftarrow L_2 - 2L_1} \left(\begin{array}{ccc|c} 1 & -2 & 1 & 1 \\ 0 & 3 & -1 & 1 \\ 0 & 3 & -1 & 1 \end{array}\right)$$

Remarque que les lignes $L_2$ et $L_3$ sont devenues **identiques** : les deux dernières équations du système contenaient en fait la même information.`,
          },
          {
            title: "Faire apparaître la ligne nulle et interpréter",
            content: String.raw`On retranche $L_2$ de $L_3$ :

$$\xrightarrow{L_3 \leftarrow L_3 - L_2} \left(\begin{array}{ccc|c} 1 & -2 & 1 & 1 \\ 0 & 3 & -1 & 1 \\ 0 & 0 & 0 & 0 \end{array}\right)$$

📖 **Rappel du cours :** une ligne nulle $\left(\begin{array}{ccc|c} 0 & 0 & 0 & 0 \end{array}\right)$ correspond à l'équation $0 = 0$, toujours vraie : elle ne contraint rien. Il reste 2 équations utiles pour 3 inconnues, donc **une** inconnue reste libre : le système est **simplement indéterminé** (une infinité de solutions dépendant d'un paramètre).`,
          },
          {
            title: "Terminer la réduction de Jordan",
            content: String.raw`On normalise le pivot de $L_2$ puis on annule le coefficient de $y$ dans $L_1$ :

$$\xrightarrow{L_2 \leftarrow L_2 / 3} \left(\begin{array}{ccc|c} 1 & -2 & 1 & 1 \\ 0 & 1 & -\frac{1}{3} & \frac{1}{3} \\ 0 & 0 & 0 & 0 \end{array}\right) \xrightarrow{L_1 \leftarrow L_1 + 2L_2} \left(\begin{array}{ccc|c} 1 & 0 & \frac{1}{3} & \frac{5}{3} \\ 0 & 1 & -\frac{1}{3} & \frac{1}{3} \\ 0 & 0 & 0 & 0 \end{array}\right)$$

Les pivots portent sur $x$ et $y$ ; l'inconnue $z$, sans pivot, joue le rôle de **paramètre libre**.`,
          },
          {
            title: "Exprimer la solution sous forme vectorielle",
            content: String.raw`On lit dans le tableau réduit :

$$\begin{cases} x = \dfrac{5}{3} - \dfrac{z}{3} \\[4pt] y = \dfrac{1}{3} + \dfrac{z}{3} \end{cases} \qquad z \in \mathbb{R}$$

Sous forme vectorielle (partie fixe + partie proportionnelle au paramètre) :

$$(x, y, z)^T = \frac{1}{3}(5, 1, 0)^T + \frac{z}{3}(-1, 1, 3)^T, \qquad z \in \mathbb{R}$$

**Vérification :** avec $z = 2$ par exemple, $(x, y, z) = (1, 1, 2)$ : $1 - 2 + 2 = 1$ ✓, $2 - 1 + 2 = 3$ ✓, $1 + 1 = 2$ ✓.`,
          },
        ],
        answer: String.raw`Le système est simplement indéterminé : $(x, y, z)^T = \frac{1}{3}(5, 1, 0)^T + \frac{z}{3}(-1, 1, 3)^T$ avec $z \in \mathbb{R}$.`,
      },
    ],
  },
  {
    id: "2.2",
    chapter: 2,
    title: "Discussion de systèmes avec paramètre (I)",
    examType: true,
    statement: String.raw`Discutez et résolvez les systèmes suivants, où $m \in \mathbb{R}$ est un paramètre.`,
    method: String.raw`Applique Gauss–Jordan en traitant $m$ comme un nombre inconnu mais fixé. Le point délicat : à chaque fois que tu veux diviser par une expression contenant $m$ (ou l'utiliser comme pivot), tu dois distinguer le cas où elle s'annule. À la fin, tu présentes la discussion complète : pour quelles valeurs de $m$ le système a une solution unique, une infinité de solutions, ou aucune.`,
    theoryRefs: ["Méthode de Gauss–Jordan", "Systèmes avec paramètre", "Discussion de solutions"],
    parts: [
      {
        label: "a",
        statement: String.raw`$$\begin{cases} x + y + z = 4 \\ 3x - 2y + 5z = 11 \\ 4x - y + 6z = m \end{cases}$$`,
        steps: [
          {
            title: "Poser la matrice augmentée et éliminer x",
            content: String.raw`Ici le paramètre $m$ n'apparaît que dans le terme indépendant : les opérations élémentaires ne poseront donc aucun problème de division par zéro. On élimine $x$ sous le pivot :

$$\left(\begin{array}{ccc|c} 1 & 1 & 1 & 4 \\ 3 & -2 & 5 & 11 \\ 4 & -1 & 6 & m \end{array}\right) \xrightarrow[L_3 \leftarrow L_3 - 4L_1]{L_2 \leftarrow L_2 - 3L_1} \left(\begin{array}{ccc|c} 1 & 1 & 1 & 4 \\ 0 & -5 & 2 & -1 \\ 0 & -5 & 2 & m - 16 \end{array}\right)$$`,
          },
          {
            title: "Faire apparaître la condition de compatibilité",
            content: String.raw`Les lignes $L_2$ et $L_3$ ont les mêmes coefficients à gauche du trait : on les soustrait.

$$\xrightarrow{L_3 \leftarrow L_3 - L_2} \left(\begin{array}{ccc|c} 1 & 1 & 1 & 4 \\ 0 & -5 & 2 & -1 \\ 0 & 0 & 0 & m - 15 \end{array}\right)$$

📖 **Rappel du cours :** une ligne de la forme $\left(\begin{array}{ccc|c} 0 & 0 & 0 & c \end{array}\right)$ correspond à l'équation $0 = c$. Si $c \neq 0$, cette équation est absurde et le système est **impossible** ; si $c = 0$, la ligne disparaît et il reste moins d'équations que d'inconnues.`,
          },
          {
            title: "Cas m différent de 15 : système impossible",
            content: String.raw`Si $m \neq 15$, la troisième ligne dit $0 = m - 15 \neq 0$ : contradiction. Le système n'a **aucune solution**.

Géométriquement : les deux premières équations définissent une droite de $\mathbb{R}^3$, et le troisième plan ne passe par cette droite que pour la valeur bien précise $m = 15$.`,
          },
          {
            title: "Cas m = 15 : résoudre le système restant",
            content: String.raw`Si $m = 15$, la ligne devient $0 = 0$ : il reste 2 équations pour 3 inconnues, le système est **simplement indéterminé**, avec $z$ comme paramètre libre. On termine la réduction :

$$\left(\begin{array}{ccc|c} 1 & 1 & 1 & 4 \\ 0 & -5 & 2 & -1 \\ 0 & 0 & 0 & 0 \end{array}\right) \xrightarrow{L_2 \leftarrow L_2 / (-5)} \left(\begin{array}{ccc|c} 1 & 1 & 1 & 4 \\ 0 & 1 & -\frac{2}{5} & \frac{1}{5} \\ 0 & 0 & 0 & 0 \end{array}\right) \xrightarrow{L_1 \leftarrow L_1 - L_2} \left(\begin{array}{ccc|c} 1 & 0 & \frac{7}{5} & \frac{19}{5} \\ 0 & 1 & -\frac{2}{5} & \frac{1}{5} \\ 0 & 0 & 0 & 0 \end{array}\right)$$

Donc $x = \frac{19 - 7z}{5}$ et $y = \frac{1 + 2z}{5}$, avec $z \in \mathbb{R}$.`,
          },
          {
            title: "Écrire la solution vectorielle et vérifier",
            content: String.raw`Sous forme vectorielle :

$$(x, y, z)^T = \frac{1}{5}\left[(19, 1, 0)^T + z(-7, 2, 5)^T\right], \qquad z \in \mathbb{R}$$

**Vérification :** avec $z = 0$ : $(x, y, z) = \left(\frac{19}{5}, \frac{1}{5}, 0\right)$ : $\frac{19}{5} + \frac{1}{5} = \frac{20}{5} = 4$ ✓ et $3 \cdot \frac{19}{5} - 2 \cdot \frac{1}{5} = \frac{57 - 2}{5} = 11$ ✓ et $4 \cdot \frac{19}{5} - \frac{1}{5} = \frac{75}{5} = 15 = m$ ✓.`,
          },
        ],
        answer: String.raw`- Si $m \neq 15$ : le système est **impossible**.
- Si $m = 15$ : simplement indéterminé, $(x, y, z)^T = \frac{1}{5}\left[(19, 1, 0)^T + z(-7, 2, 5)^T\right]$, $z \in \mathbb{R}$.`,
      },
      {
        label: "b",
        statement: String.raw`$$\begin{cases} x + my + z = m \\ mx - z = 0 \\ x - z = 0 \end{cases}$$`,
        steps: [
          {
            title: "Poser la matrice augmentée dans un ordre malin",
            content: String.raw`Cette fois, $m$ apparaît dans les **coefficients** : il faudra discuter. Pour avoir un pivot sans paramètre en haut à gauche, on place la ligne la plus simple ($x - z = 0$) en premier :

$$\left(\begin{array}{ccc|c} 1 & m & 1 & m \\ m & 0 & -1 & 0 \\ 1 & 0 & -1 & 0 \end{array}\right) \xrightarrow{L_1 \leftrightarrow L_3} \left(\begin{array}{ccc|c} 1 & 0 & -1 & 0 \\ m & 0 & -1 & 0 \\ 1 & m & 1 & m \end{array}\right)$$`,
          },
          {
            title: "Éliminer x et échelonner",
            content: String.raw`On élimine $x$ dans $L_2$ et $L_3$ (soustraire $m$ fois ou $1$ fois $L_1$ est permis quel que soit $m$ : aucune division ici) :

$$\xrightarrow[L_3 \leftarrow L_3 - L_1]{L_2 \leftarrow L_2 - mL_1} \left(\begin{array}{ccc|c} 1 & 0 & -1 & 0 \\ 0 & 0 & m - 1 & 0 \\ 0 & m & 2 & m \end{array}\right) \xrightarrow{L_2 \leftrightarrow L_3} \left(\begin{array}{ccc|c} 1 & 0 & -1 & 0 \\ 0 & m & 2 & m \\ 0 & 0 & m - 1 & 0 \end{array}\right)$$

📖 **Rappel du cours :** on ne peut prendre comme pivot qu'un coefficient **non nul**. Ici les pivots candidats sont $m$ (ligne 2) et $m - 1$ (ligne 3) : la discussion portera donc sur $m = 0$ et $m = 1$.`,
          },
          {
            title: "Cas général : m différent de 0 et de 1",
            content: String.raw`Les trois pivots $1$, $m$, $m-1$ sont non nuls : le système a une **solution unique**. La ligne 3 donne $(m-1)z = 0$, donc $z = 0$. La ligne 2 donne $my + 2z = m$, donc $my = m$ et $y = 1$ (division par $m \neq 0$ permise). La ligne 1 donne $x = z = 0$.

Solution unique : $(x, y, z)^T = (0, 1, 0)^T$.`,
          },
          {
            title: "Cas m = 1",
            content: String.raw`Le tableau devient :

$$\left(\begin{array}{ccc|c} 1 & 0 & -1 & 0 \\ 0 & 1 & 2 & 1 \\ 0 & 0 & 0 & 0 \end{array}\right)$$

La dernière ligne est nulle : 2 pivots pour 3 inconnues, système **simplement indéterminé** avec $z$ libre. On lit $x = z$ et $y = 1 - 2z$ :

$$(x, y, z)^T = (0, 1, 0)^T + z(1, -2, 1)^T, \qquad z \in \mathbb{R}$$`,
          },
          {
            title: "Cas m = 0",
            content: String.raw`Le tableau devient :

$$\left(\begin{array}{ccc|c} 1 & 0 & -1 & 0 \\ 0 & 0 & 2 & 0 \\ 0 & 0 & -1 & 0 \end{array}\right)$$

Les lignes 2 et 3 donnent toutes deux $z = 0$, puis la ligne 1 donne $x = z = 0$. Aucun pivot ne porte sur $y$ : cette inconnue est **libre**. Le système est simplement indéterminé :

$$(x, y, z)^T = y(0, 1, 0)^T, \qquad y \in \mathbb{R}$$

**Vérification** (cas général, $(0,1,0)$) : $0 + m \cdot 1 + 0 = m$ ✓, $m \cdot 0 - 0 = 0$ ✓, $0 - 0 = 0$ ✓.`,
          },
        ],
        answer: String.raw`- Si $m \neq 0$ et $m \neq 1$ : solution unique $(x, y, z)^T = (0, 1, 0)^T$.
- Si $m = 1$ : simplement indéterminé, $(x, y, z)^T = (0, 1, 0)^T + z(1, -2, 1)^T$, $z \in \mathbb{R}$.
- Si $m = 0$ : simplement indéterminé, $(x, y, z)^T = y(0, 1, 0)^T$, $y \in \mathbb{R}$.`,
      },
      {
        label: "c",
        statement: String.raw`$$\begin{cases} mx + y + z = 1 \\ x + my + z = m \\ x + y + mz = m^2 \end{cases}$$`,
        steps: [
          {
            title: "Réordonner pour un pivot sans paramètre",
            content: String.raw`Le coefficient en haut à gauche vaut $m$, qui pourrait être nul : mauvais candidat pour un pivot. On échange $L_1$ et $L_3$ pour démarrer avec un $1$ :

$$\left(\begin{array}{ccc|c} m & 1 & 1 & 1 \\ 1 & m & 1 & m \\ 1 & 1 & m & m^2 \end{array}\right) \xrightarrow{L_1 \leftrightarrow L_3} \left(\begin{array}{ccc|c} 1 & 1 & m & m^2 \\ 1 & m & 1 & m \\ m & 1 & 1 & 1 \end{array}\right)$$`,
          },
          {
            title: "Éliminer x et factoriser",
            content: String.raw`$$\xrightarrow[L_3 \leftarrow L_3 - mL_1]{L_2 \leftarrow L_2 - L_1} \left(\begin{array}{ccc|c} 1 & 1 & m & m^2 \\ 0 & m-1 & 1-m & m - m^2 \\ 0 & 1-m & 1-m^2 & 1 - m^3 \end{array}\right)$$

Astuce essentielle avec un paramètre : **factoriser** chaque ligne. On reconnaît $1 - m = -(m-1)$, $m - m^2 = -m(m-1)$, $1 - m^2 = -(m-1)(m+1)$ et $1 - m^3 = -(m-1)(m^2 + m + 1)$ : le facteur $(m-1)$ apparaît dans toutes les entrées des lignes 2 et 3. Le premier cas à part sera donc $m = 1$.`,
          },
          {
            title: "Cas m = 1 : système doublement indéterminé",
            content: String.raw`Si $m = 1$, les lignes 2 et 3 sont entièrement nulles : les trois équations de départ se réduisent toutes à $x + y + z = 1$. Une seule équation pour trois inconnues : le système est **doublement indéterminé** ($y$ et $z$ libres). On lit $x = 1 - y - z$ :

$$(x, y, z)^T = (1, 0, 0)^T - y(1, -1, 0)^T - z(1, 0, -1)^T, \qquad y, z \in \mathbb{R}$$`,
          },
          {
            title: "Cas m différent de 1 : simplifier par (m - 1)",
            content: String.raw`📖 **Rappel du cours :** multiplier une ligne par un réel **non nul** est une opération élémentaire. Comme $m \neq 1$, on peut diviser $L_2$ par $(m-1)$ et $L_3$ par $-(m-1)$ :

$$\left(\begin{array}{ccc|c} 1 & 1 & m & m^2 \\ 0 & 1 & -1 & -m \\ 0 & 1 & m+1 & m^2 + m + 1 \end{array}\right) \xrightarrow{L_3 \leftarrow L_3 - L_2} \left(\begin{array}{ccc|c} 1 & 1 & m & m^2 \\ 0 & 1 & -1 & -m \\ 0 & 0 & m+2 & (m+1)^2 \end{array}\right)$$

En effet, $m + 1 - (-1) = m + 2$ et $m^2 + m + 1 - (-m) = m^2 + 2m + 1 = (m+1)^2$. Le dernier pivot candidat est $m + 2$ : deuxième cas à part, $m = -2$.`,
          },
          {
            title: "Cas m = -2 : système impossible",
            content: String.raw`Si $m = -2$, la dernière ligne devient $\left(\begin{array}{ccc|c} 0 & 0 & 0 & 1 \end{array}\right)$, car $(m+1)^2 = (-1)^2 = 1 \neq 0$. C'est l'équation absurde $0 = 1$ : le système est **impossible**.

(On peut le voir directement : pour $m = -2$, la somme des trois membres de gauche vaut $0 \cdot x + 0 \cdot y + 0 \cdot z = 0$, alors que la somme des membres de droite vaut $1 - 2 + 4 = 3 \neq 0$.)`,
          },
          {
            title: "Cas général et vérification",
            content: String.raw`Si $m \neq 1$ et $m \neq -2$, les trois pivots sont non nuls : **solution unique**. On remonte :

- $z = \dfrac{(m+1)^2}{m+2}$
- $y = -m + z = \dfrac{-m(m+2) + (m+1)^2}{m+2} = \dfrac{1}{m+2}$
- $x = m^2 - y - mz = \dfrac{m^2(m+2) - 1 - m(m+1)^2}{m+2} = \dfrac{-m - 1}{m+2}$

Donc :

$$(x, y, z)^T = \frac{1}{m+2}\left(-1 - m,\; 1,\; (m+1)^2\right)^T$$

**Vérification** avec la première équation : $mx + y + z = \dfrac{-m(m+1) + 1 + (m+1)^2}{m+2} = \dfrac{(m+1)(-m + m + 1) + 1}{m+2} = \dfrac{m + 2}{m+2} = 1$ ✓`,
          },
        ],
        answer: String.raw`- Si $m \neq 1$ et $m \neq -2$ : solution unique $(x, y, z)^T = \frac{1}{m+2}\left(-1 - m,\; 1,\; (m+1)^2\right)^T$.
- Si $m = 1$ : doublement indéterminé, $(x, y, z)^T = (1, 0, 0)^T - y(1, -1, 0)^T - z(1, 0, -1)^T$, $y, z \in \mathbb{R}$.
- Si $m = -2$ : le système est **impossible**.`,
      },
    ],
  },
  {
    id: "2.3",
    chapter: 2,
    title: "Discussion de systèmes avec paramètre (II)",
    examType: true,
    statement: String.raw`Discutez et résolvez les systèmes suivants, où $m \in \mathbb{R}$ est un paramètre.`,
    method: String.raw`Même stratégie qu'à l'exercice 2.2 : Gauss–Jordan en surveillant les pivots qui contiennent $m$. Pense à factoriser les expressions en $m$ qui apparaissent — les valeurs qui annulent un pivot sont exactement les cas à discuter séparément. Pour le b), attention : il y a plus d'équations que d'inconnues, donc le cas « générique » sera un système impossible.`,
    theoryRefs: ["Méthode de Gauss–Jordan", "Systèmes avec paramètre", "Discussion de solutions"],
    parts: [
      {
        label: "a",
        statement: String.raw`$$\begin{cases} mx + y + z = m \\ x + my + z = 1 \\ x + y + mz = 1 \end{cases}$$`,
        steps: [
          {
            title: "Réordonner et éliminer x",
            content: String.raw`Comme le coefficient $m$ en haut à gauche peut s'annuler, on échange $L_1$ et $L_2$ pour avoir un pivot $1$, puis on élimine $x$ :

$$\left(\begin{array}{ccc|c} m & 1 & 1 & m \\ 1 & m & 1 & 1 \\ 1 & 1 & m & 1 \end{array}\right) \xrightarrow{L_1 \leftrightarrow L_2} \left(\begin{array}{ccc|c} 1 & m & 1 & 1 \\ m & 1 & 1 & m \\ 1 & 1 & m & 1 \end{array}\right) \xrightarrow[L_3 \leftarrow L_3 - L_1]{L_2 \leftarrow L_2 - mL_1} \left(\begin{array}{ccc|c} 1 & m & 1 & 1 \\ 0 & 1 - m^2 & 1 - m & 0 \\ 0 & 1 - m & m - 1 & 0 \end{array}\right)$$`,
          },
          {
            title: "Factoriser et repérer les cas critiques",
            content: String.raw`On factorise : $1 - m^2 = -(m-1)(m+1)$, $1 - m = -(m-1)$ et $m - 1 = (m-1)$. Le facteur $(m-1)$ apparaît partout dans les lignes 2 et 3.

**Cas $m = 1$ :** les lignes 2 et 3 s'annulent complètement ; les trois équations se réduisent à $x + y + z = 1$. Le système est **doublement indéterminé** :

$$(x, y, z)^T = (1, 0, 0)^T + y(-1, 1, 0)^T + z(-1, 0, 1)^T, \qquad y, z \in \mathbb{R}$$`,
          },
          {
            title: "Cas m différent de 1 : poursuivre l'échelonnement",
            content: String.raw`On divise $L_2$ par $-(m-1) \neq 0$ et $L_3$ par $-(m-1) \neq 0$ :

$$\left(\begin{array}{ccc|c} 1 & m & 1 & 1 \\ 0 & m + 1 & 1 & 0 \\ 0 & 1 & -1 & 0 \end{array}\right) \xrightarrow{L_2 \leftrightarrow L_3} \left(\begin{array}{ccc|c} 1 & m & 1 & 1 \\ 0 & 1 & -1 & 0 \\ 0 & m + 1 & 1 & 0 \end{array}\right) \xrightarrow{L_3 \leftarrow L_3 - (m+1)L_2} \left(\begin{array}{ccc|c} 1 & m & 1 & 1 \\ 0 & 1 & -1 & 0 \\ 0 & 0 & m + 2 & 0 \end{array}\right)$$

Le dernier pivot est $m + 2$ : nouveau cas critique, $m = -2$.`,
          },
          {
            title: "Cas m = -2",
            content: String.raw`La dernière ligne devient $0 = 0$ (le second membre est déjà nul, donc pas d'impossibilité ici, contrairement au 2.2 c). Il reste 2 pivots pour 3 inconnues : système **simplement indéterminé**, $z$ libre. La ligne 2 donne $y = z$ ; la ligne 1 (avec $m = -2$) donne $x = 1 + 2y - z = 1 + z$ :

$$(x, y, z)^T = (1, 0, 0)^T + z(1, 1, 1)^T, \qquad z \in \mathbb{R}$$

**Vérification** avec $z = 1$, soit $(2, 1, 1)$ : $-2 \cdot 2 + 1 + 1 = -2 = m$ ✓, $2 - 2 + 1 = 1$ ✓, $2 + 1 - 2 = 1$ ✓.`,
          },
          {
            title: "Cas général et vérification",
            content: String.raw`Si $m \neq 1$ et $m \neq -2$ : trois pivots non nuls, **solution unique**. La ligne 3 donne $(m+2)z = 0$, donc $z = 0$ ; la ligne 2 donne $y = z = 0$ ; la ligne 1 donne $x = 1 - my - z = 1$.

$$(x, y, z)^T = (1, 0, 0)^T$$

**Vérification :** $m \cdot 1 + 0 + 0 = m$ ✓, $1 + 0 + 0 = 1$ ✓, $1 + 0 + 0 = 1$ ✓ — et ce, quel que soit $m$.`,
          },
        ],
        answer: String.raw`- Si $m \neq 1$ et $m \neq -2$ : solution unique $(x, y, z)^T = (1, 0, 0)^T$.
- Si $m = 1$ : doublement indéterminé, $(x, y, z)^T = (1, 0, 0)^T + y(-1, 1, 0)^T + z(-1, 0, 1)^T$, $y, z \in \mathbb{R}$.
- Si $m = -2$ : simplement indéterminé, $(x, y, z)^T = (1, 0, 0)^T + z(1, 1, 1)^T$, $z \in \mathbb{R}$.`,
      },
      {
        label: "b",
        statement: String.raw`$$\begin{cases} mx + y = 1 \\ x + my = 1 \\ x + y = m \end{cases}$$`,
        steps: [
          {
            title: "Observer la structure du système",
            content: String.raw`📖 **Rappel du cours :** un système peut avoir plus d'équations que d'inconnues. Ici : 3 équations pour 2 inconnues. Deux équations suffisent en général à déterminer $(x, y)$ ; la troisième impose alors une **condition de compatibilité** sur $m$. On s'attend donc à ce que le système soit impossible pour la plupart des valeurs de $m$.

On place la ligne sans paramètre en premier :

$$\left(\begin{array}{cc|c} m & 1 & 1 \\ 1 & m & 1 \\ 1 & 1 & m \end{array}\right) \xrightarrow{L_1 \leftrightarrow L_3} \left(\begin{array}{cc|c} 1 & 1 & m \\ 1 & m & 1 \\ m & 1 & 1 \end{array}\right)$$`,
          },
          {
            title: "Éliminer x et factoriser",
            content: String.raw`$$\xrightarrow[L_3 \leftarrow L_3 - mL_1]{L_2 \leftarrow L_2 - L_1} \left(\begin{array}{cc|c} 1 & 1 & m \\ 0 & m - 1 & 1 - m \\ 0 & 1 - m & 1 - m^2 \end{array}\right)$$

On factorise : $1 - m = -(m - 1)$ et $1 - m^2 = -(m-1)(m+1)$. Le facteur commun $(m-1)$ signale le premier cas à part : $m = 1$.`,
          },
          {
            title: "Cas m = 1",
            content: String.raw`Les lignes 2 et 3 s'annulent : les trois équations se réduisent à $x + y = 1$. Une équation pour deux inconnues : système **simplement indéterminé**, $y$ libre, $x = 1 - y$ :

$$(x, y)^T = (1, 0)^T + y(-1, 1)^T, \qquad y \in \mathbb{R}$$`,
          },
          {
            title: "Cas m différent de 1 : confronter les deux dernières lignes",
            content: String.raw`On divise $L_2$ par $(m-1) \neq 0$ et $L_3$ par $-(m-1) \neq 0$ :

$$\left(\begin{array}{cc|c} 1 & 1 & m \\ 0 & 1 & -1 \\ 0 & 1 & m + 1 \end{array}\right) \xrightarrow{L_3 \leftarrow L_3 - L_2} \left(\begin{array}{cc|c} 1 & 1 & m \\ 0 & 1 & -1 \\ 0 & 0 & m + 2 \end{array}\right)$$

La dernière ligne se lit $0 = m + 2$ : c'est la condition de compatibilité annoncée. Elle n'est satisfaite que si $m = -2$.`,
          },
          {
            title: "Conclure les deux sous-cas et vérifier",
            content: String.raw`**Cas $m = -2$ :** la dernière ligne devient $0 = 0$. La ligne 2 donne $y = -1$, la ligne 1 donne $x = m - y = -2 + 1 = -1$. Solution unique : $(x, y)^T = (-1, -1)^T$.

**Cas $m \neq 1$ et $m \neq -2$ :** la dernière ligne se lit $0 = m + 2 \neq 0$ : système **impossible**.

**Vérification** pour $m = -2$ avec $(-1, -1)$ : $-2 \cdot (-1) + (-1) = 1$ ✓, $-1 + (-2)(-1) = 1$ ✓, $-1 - 1 = -2 = m$ ✓.`,
          },
        ],
        answer: String.raw`- Si $m = -2$ : solution unique $(x, y)^T = (-1, -1)^T$.
- Si $m = 1$ : simplement indéterminé, $(x, y)^T = (1, 0)^T + y(-1, 1)^T$, $y \in \mathbb{R}$.
- Si $m \neq -2$ et $m \neq 1$ : le système est **impossible**.`,
      },
    ],
  },
  {
    id: "2.4",
    chapter: 2,
    title: "Inverse d'une matrice par Gauss–Jordan",
    examType: false,
    statement: String.raw`Recherchez l'inverse des matrices suivantes par la méthode de Gauss–Jordan.`,
    method: String.raw`Juxtapose la matrice $A$ et l'identité $I$ dans un grand tableau $\left(A \,|\, I\right)$, puis applique Gauss–Jordan jusqu'à transformer la partie gauche en $I$ : la partie droite est alors $A^{-1}$. Les mêmes opérations élémentaires s'appliquent simultanément aux deux blocs. Vérifie toujours ton résultat en calculant $A \cdot A^{-1}$, qui doit redonner $I$.`,
    theoryRefs: ["Inverse par Gauss–Jordan", "Méthode de Gauss–Jordan"],
    parts: [
      {
        label: "a",
        statement: String.raw`$$A = \begin{pmatrix} 1 & 2 & 2 \\ 0 & 2 & 0 \\ 1 & 4 & 0 \end{pmatrix}$$`,
        steps: [
          {
            title: "Poser le tableau (A | I)",
            content: String.raw`📖 **Rappel du cours :** pour inverser $A$ par Gauss–Jordan, on forme le tableau $\left(A \,|\, I\right)$ et on applique des opérations élémentaires sur les lignes jusqu'à obtenir $\left(I \,|\, B\right)$. Alors $B = A^{-1}$. Si une ligne de la partie gauche devient entièrement nulle en cours de route, $A$ n'est pas inversible.

$$\left(\begin{array}{ccc|ccc} 1 & 2 & 2 & 1 & 0 & 0 \\ 0 & 2 & 0 & 0 & 1 & 0 \\ 1 & 4 & 0 & 0 & 0 & 1 \end{array}\right)$$`,
          },
          {
            title: "Échelonner la partie gauche",
            content: String.raw`Le pivot $1$ est en place. On élimine le $1$ de la ligne 3, puis le $2$ (colonne 2) de la ligne 3 :

$$\xrightarrow{L_3 \leftarrow L_3 - L_1} \left(\begin{array}{ccc|ccc} 1 & 2 & 2 & 1 & 0 & 0 \\ 0 & 2 & 0 & 0 & 1 & 0 \\ 0 & 2 & -2 & -1 & 0 & 1 \end{array}\right) \xrightarrow{L_3 \leftarrow L_3 - L_2} \left(\begin{array}{ccc|ccc} 1 & 2 & 2 & 1 & 0 & 0 \\ 0 & 2 & 0 & 0 & 1 & 0 \\ 0 & 0 & -2 & -1 & -1 & 1 \end{array}\right)$$`,
          },
          {
            title: "Normaliser les pivots et remonter",
            content: String.raw`On ramène chaque pivot à $1$ :

$$\xrightarrow[L_3 \leftarrow L_3 / (-2)]{L_2 \leftarrow L_2 / 2} \left(\begin{array}{ccc|ccc} 1 & 2 & 2 & 1 & 0 & 0 \\ 0 & 1 & 0 & 0 & \frac{1}{2} & 0 \\ 0 & 0 & 1 & \frac{1}{2} & \frac{1}{2} & -\frac{1}{2} \end{array}\right)$$

Puis on annule au-dessus des pivots : $L_1 \leftarrow L_1 - 2L_2 - 2L_3$, c'est-à-dire qu'on retire à $L_1$ deux fois la ligne 2 et deux fois la ligne 3 :

$$\left(\begin{array}{ccc|ccc} 1 & 0 & 0 & 0 & -2 & 1 \\ 0 & 1 & 0 & 0 & \frac{1}{2} & 0 \\ 0 & 0 & 1 & \frac{1}{2} & \frac{1}{2} & -\frac{1}{2} \end{array}\right)$$

À droite du trait, à gauche : $1 - 0 - 1 = 0$ ; au milieu : $0 - 1 - 1 = -2$ ; à droite : $0 - 0 + 1 = 1$.`,
          },
          {
            title: "Lire l'inverse et vérifier",
            content: String.raw`$$A^{-1} = \begin{pmatrix} 0 & -2 & 1 \\ 0 & \frac{1}{2} & 0 \\ \frac{1}{2} & \frac{1}{2} & -\frac{1}{2} \end{pmatrix}$$

**Vérification :** calcule $A \cdot A^{-1}$. Par exemple, ligne 1 de $A$ fois colonne 2 de $A^{-1}$ : $1 \cdot (-2) + 2 \cdot \frac{1}{2} + 2 \cdot \frac{1}{2} = -2 + 1 + 1 = 0$ ✓ ; ligne 3 fois colonne 3 : $1 \cdot 1 + 4 \cdot 0 + 0 \cdot \left(-\frac{1}{2}\right) = 1$ ✓. Le calcul complet donne bien $A \cdot A^{-1} = I$.`,
          },
        ],
        answer: String.raw`$$A^{-1} = \begin{pmatrix} 0 & -2 & 1 \\ 0 & \frac{1}{2} & 0 \\ \frac{1}{2} & \frac{1}{2} & -\frac{1}{2} \end{pmatrix}$$`,
      },
      {
        label: "b",
        statement: String.raw`$$A = \begin{pmatrix} 1 & 0 & 0 \\ 1 & 0 & 1 \\ 0 & 1 & 1 \end{pmatrix}$$`,
        steps: [
          {
            title: "Poser (A | I) et éliminer sous le premier pivot",
            content: String.raw`$$\left(\begin{array}{ccc|ccc} 1 & 0 & 0 & 1 & 0 & 0 \\ 1 & 0 & 1 & 0 & 1 & 0 \\ 0 & 1 & 1 & 0 & 0 & 1 \end{array}\right) \xrightarrow{L_2 \leftarrow L_2 - L_1} \left(\begin{array}{ccc|ccc} 1 & 0 & 0 & 1 & 0 & 0 \\ 0 & 0 & 1 & -1 & 1 & 0 \\ 0 & 1 & 1 & 0 & 0 & 1 \end{array}\right)$$`,
          },
          {
            title: "Remettre les pivots en ordre",
            content: String.raw`La ligne 2 n'a pas de pivot en colonne 2, mais la ligne 3 en a un : on les échange.

$$\xrightarrow{L_2 \leftrightarrow L_3} \left(\begin{array}{ccc|ccc} 1 & 0 & 0 & 1 & 0 & 0 \\ 0 & 1 & 1 & 0 & 0 & 1 \\ 0 & 0 & 1 & -1 & 1 & 0 \end{array}\right)$$

📖 **Rappel du cours :** l'échange de lignes est une opération élémentaire à part entière — n'hésite pas à l'utiliser pour placer les pivots sur la diagonale.`,
          },
          {
            title: "Annuler au-dessus du dernier pivot et conclure",
            content: String.raw`Il reste un $1$ au-dessus du pivot de la colonne 3 :

$$\xrightarrow{L_2 \leftarrow L_2 - L_3} \left(\begin{array}{ccc|ccc} 1 & 0 & 0 & 1 & 0 & 0 \\ 0 & 1 & 0 & 1 & -1 & 1 \\ 0 & 0 & 1 & -1 & 1 & 0 \end{array}\right)$$

Donc :

$$A^{-1} = \begin{pmatrix} 1 & 0 & 0 \\ 1 & -1 & 1 \\ -1 & 1 & 0 \end{pmatrix}$$

**Vérification :** ligne 2 de $A$, soit $(1, 0, 1)$, fois les colonnes de $A^{-1}$ : colonne 1 : $1 \cdot 1 + 0 \cdot 1 + 1 \cdot (-1) = 0$ ✓, colonne 2 : $1 \cdot 0 + 0 \cdot (-1) + 1 \cdot 1 = 1$ ✓, colonne 3 : $1 \cdot 0 + 0 \cdot 1 + 1 \cdot 0 = 0$ ✓. On obtient bien la ligne $(0, 1, 0)$ de $I$, et le produit complet donne $A \cdot A^{-1} = I$.`,
          },
        ],
        answer: String.raw`$$A^{-1} = \begin{pmatrix} 1 & 0 & 0 \\ 1 & -1 & 1 \\ -1 & 1 & 0 \end{pmatrix}$$`,
      },
      {
        label: "c",
        statement: String.raw`$$A = \begin{pmatrix} -1 & 1 & 0 \\ 0 & 2 & 1 \\ 1 & 0 & 0 \end{pmatrix}$$`,
        steps: [
          {
            title: "Poser (A | I) et choisir un bon premier pivot",
            content: String.raw`La ligne 3 commence par $1$ : on la remonte en première position pour éviter de travailler avec le $-1$.

$$\left(\begin{array}{ccc|ccc} -1 & 1 & 0 & 1 & 0 & 0 \\ 0 & 2 & 1 & 0 & 1 & 0 \\ 1 & 0 & 0 & 0 & 0 & 1 \end{array}\right) \xrightarrow{L_1 \leftrightarrow L_3} \left(\begin{array}{ccc|ccc} 1 & 0 & 0 & 0 & 0 & 1 \\ 0 & 2 & 1 & 0 & 1 & 0 \\ -1 & 1 & 0 & 1 & 0 & 0 \end{array}\right)$$`,
          },
          {
            title: "Éliminer x et réordonner les pivots",
            content: String.raw`$$\xrightarrow{L_3 \leftarrow L_3 + L_1} \left(\begin{array}{ccc|ccc} 1 & 0 & 0 & 0 & 0 & 1 \\ 0 & 2 & 1 & 0 & 1 & 0 \\ 0 & 1 & 0 & 1 & 0 & 1 \end{array}\right) \xrightarrow{L_2 \leftrightarrow L_3} \left(\begin{array}{ccc|ccc} 1 & 0 & 0 & 0 & 0 & 1 \\ 0 & 1 & 0 & 1 & 0 & 1 \\ 0 & 2 & 1 & 0 & 1 & 0 \end{array}\right)$$

Nouvel échange payant : la ligne $(0, 1, 0)$ fait un pivot tout trouvé pour la colonne 2, sans division.`,
          },
          {
            title: "Dernier pivot et lecture de l'inverse",
            content: String.raw`$$\xrightarrow{L_3 \leftarrow L_3 - 2L_2} \left(\begin{array}{ccc|ccc} 1 & 0 & 0 & 0 & 0 & 1 \\ 0 & 1 & 0 & 1 & 0 & 1 \\ 0 & 0 & 1 & -2 & 1 & -2 \end{array}\right)$$

La partie gauche est déjà l'identité (aucune remontée nécessaire) :

$$A^{-1} = \begin{pmatrix} 0 & 0 & 1 \\ 1 & 0 & 1 \\ -2 & 1 & -2 \end{pmatrix}$$

**Vérification :** ligne 2 de $A$, soit $(0, 2, 1)$, fois colonne 1 de $A^{-1}$ : $0 \cdot 0 + 2 \cdot 1 + 1 \cdot (-2) = 0$ ✓ ; fois colonne 2 : $0 + 0 + 1 = 1$ ✓ ; fois colonne 3 : $0 + 2 - 2 = 0$ ✓. Le produit complet donne bien $A \cdot A^{-1} = I$.`,
          },
        ],
        answer: String.raw`$$A^{-1} = \begin{pmatrix} 0 & 0 & 1 \\ 1 & 0 & 1 \\ -2 & 1 & -2 \end{pmatrix}$$`,
      },
      {
        label: "d",
        statement: String.raw`$$A = \begin{pmatrix} -1 & 2 & 0 \\ 1 & 3 & 1 \\ 5 & 3 & 1 \end{pmatrix}$$`,
        steps: [
          {
            title: "Poser (A | I) et préparer le premier pivot",
            content: String.raw`On échange $L_1$ et $L_2$ pour avoir un pivot $1$ en haut à gauche :

$$\left(\begin{array}{ccc|ccc} -1 & 2 & 0 & 1 & 0 & 0 \\ 1 & 3 & 1 & 0 & 1 & 0 \\ 5 & 3 & 1 & 0 & 0 & 1 \end{array}\right) \xrightarrow{L_1 \leftrightarrow L_2} \left(\begin{array}{ccc|ccc} 1 & 3 & 1 & 0 & 1 & 0 \\ -1 & 2 & 0 & 1 & 0 & 0 \\ 5 & 3 & 1 & 0 & 0 & 1 \end{array}\right)$$`,
          },
          {
            title: "Éliminer la première colonne",
            content: String.raw`$$\xrightarrow[L_3 \leftarrow L_3 - 5L_1]{L_2 \leftarrow L_2 + L_1} \left(\begin{array}{ccc|ccc} 1 & 3 & 1 & 0 & 1 & 0 \\ 0 & 5 & 1 & 1 & 1 & 0 \\ 0 & -12 & -4 & 0 & -5 & 1 \end{array}\right)$$`,
          },
          {
            title: "Éliminer la deuxième colonne",
            content: String.raw`Pour éviter les fractions le plus longtemps possible, on remplace $L_3$ par $5L_3 + 12L_2$ (combinaison qui annule le $-12$ : $5 \cdot (-12) + 12 \cdot 5 = 0$) :

$$\xrightarrow{L_3 \leftarrow 5L_3 + 12L_2} \left(\begin{array}{ccc|ccc} 1 & 3 & 1 & 0 & 1 & 0 \\ 0 & 5 & 1 & 1 & 1 & 0 \\ 0 & 0 & -8 & 12 & -13 & 5 \end{array}\right)$$

En effet : $5 \cdot (-4) + 12 \cdot 1 = -8$, puis à droite du trait : $5 \cdot 0 + 12 \cdot 1 = 12$, $5 \cdot (-5) + 12 \cdot 1 = -13$, $5 \cdot 1 + 12 \cdot 0 = 5$.

📖 **Rappel du cours :** remplacer $L_3$ par $aL_3 + bL_2$ avec $a \neq 0$ est bien une opération élémentaire licite (c'est la combinaison d'une multiplication par $a$ et d'un ajout de $bL_2$).`,
          },
          {
            title: "Normaliser le dernier pivot et remonter",
            content: String.raw`$$\xrightarrow{L_3 \leftarrow L_3 / (-8)} \left(\begin{array}{ccc|ccc} 1 & 3 & 1 & 0 & 1 & 0 \\ 0 & 5 & 1 & 1 & 1 & 0 \\ 0 & 0 & 1 & -\frac{3}{2} & \frac{13}{8} & -\frac{5}{8} \end{array}\right)$$

On annule la colonne 3 au-dessus du pivot, puis on normalise $L_2$ :

$$\xrightarrow[L_1 \leftarrow L_1 - L_3]{L_2 \leftarrow L_2 - L_3} \left(\begin{array}{ccc|ccc} 1 & 3 & 0 & \frac{3}{2} & -\frac{5}{8} & \frac{5}{8} \\ 0 & 5 & 0 & \frac{5}{2} & -\frac{5}{8} & \frac{5}{8} \\ 0 & 0 & 1 & -\frac{3}{2} & \frac{13}{8} & -\frac{5}{8} \end{array}\right) \xrightarrow{L_2 \leftarrow L_2 / 5} \left(\begin{array}{ccc|ccc} 1 & 3 & 0 & \frac{3}{2} & -\frac{5}{8} & \frac{5}{8} \\ 0 & 1 & 0 & \frac{1}{2} & -\frac{1}{8} & \frac{1}{8} \\ 0 & 0 & 1 & -\frac{3}{2} & \frac{13}{8} & -\frac{5}{8} \end{array}\right)$$`,
          },
          {
            title: "Dernière remontée et lecture de l'inverse",
            content: String.raw`$$\xrightarrow{L_1 \leftarrow L_1 - 3L_2} \left(\begin{array}{ccc|ccc} 1 & 0 & 0 & 0 & -\frac{1}{4} & \frac{1}{4} \\ 0 & 1 & 0 & \frac{1}{2} & -\frac{1}{8} & \frac{1}{8} \\ 0 & 0 & 1 & -\frac{3}{2} & \frac{13}{8} & -\frac{5}{8} \end{array}\right)$$

En effet : $\frac{3}{2} - 3 \cdot \frac{1}{2} = 0$, $-\frac{5}{8} + \frac{3}{8} = -\frac{2}{8} = -\frac{1}{4}$ et $\frac{5}{8} - \frac{3}{8} = \frac{1}{4}$. En mettant $\frac{1}{8}$ en évidence pour y voir plus clair :

$$A^{-1} = \begin{pmatrix} 0 & -\frac{1}{4} & \frac{1}{4} \\ \frac{1}{2} & -\frac{1}{8} & \frac{1}{8} \\ -\frac{3}{2} & \frac{13}{8} & -\frac{5}{8} \end{pmatrix} = \frac{1}{8}\begin{pmatrix} 0 & -2 & 2 \\ 4 & -1 & 1 \\ -12 & 13 & -5 \end{pmatrix}$$`,
          },
          {
            title: "Vérifier que A fois A inverse = I",
            content: String.raw`On calcule $A \cdot A^{-1}$ avec la forme $\frac{1}{8}(\cdots)$, ligne par ligne :

- Ligne 1 de $A$, $(-1, 2, 0)$ : $\frac{1}{8}(0 + 8 + 0) = 1$, $\frac{1}{8}(2 - 2 + 0) = 0$, $\frac{1}{8}(-2 + 2 + 0) = 0$ ✓
- Ligne 2 de $A$, $(1, 3, 1)$ : $\frac{1}{8}(0 + 12 - 12) = 0$, $\frac{1}{8}(-2 - 3 + 13) = 1$, $\frac{1}{8}(2 + 3 - 5) = 0$ ✓
- Ligne 3 de $A$, $(5, 3, 1)$ : $\frac{1}{8}(0 + 12 - 12) = 0$, $\frac{1}{8}(-10 - 3 + 13) = 0$, $\frac{1}{8}(10 + 3 - 5) = 1$ ✓

On obtient bien $A \cdot A^{-1} = I$ : l'inverse est correct.`,
          },
        ],
        answer: String.raw`$$A^{-1} = \frac{1}{8}\begin{pmatrix} 0 & -2 & 2 \\ 4 & -1 & 1 \\ -12 & 13 & -5 \end{pmatrix}$$`,
      },
    ],
  },
];
