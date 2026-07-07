import type { Exercise } from "./types";

export const exercises: Exercise[] = [
  {
    id: "2.5",
    chapter: 2,
    title: "Le prix des bières (système surdéterminé)",
    examType: false,
    statement: String.raw`Au cercle, on peut acheter trois sortes de bières. Le barman annonce que les prix sont fixes tout au long de la soirée. Jean achète 3 jupiler, 4 duvel et 6 orval pour 21 euros. Paul achète 12 jupiler, 2 duvel et 3 orval pour 21 euros. Benjamin achète 10 jupiler, 6 duvel et 5 orval pour 29 euros. En fin de soirée, Manu prend 20 jupiler et 10 duvel pour 35 euros.

Déterminez le prix de vente de chaque bière et vérifiez si le barman a respecté ses prix tout au long de la soirée.`,
    method: String.raw`Traduis chaque achat en une équation linéaire : les inconnues sont les trois prix unitaires. Tu obtiens 4 équations pour 3 inconnues, donc un système **surdéterminé**. Résous d'abord un sous-système de 3 équations par Gauss–Jordan, puis vérifie si la solution trouvée satisfait aussi la quatrième équation : c'est exactement cela, « vérifier si le barman a respecté ses prix ».`,
    theoryRefs: ["Modélisation", "Méthode de Gauss–Jordan", "Systèmes surdéterminés"],
    parts: [
      {
        label: null,
        steps: [
          {
            title: "Modéliser : traduire les achats en équations",
            content: String.raw`On commence toujours par nommer les inconnues. Note $x$ le prix d'une jupiler, $y$ le prix d'une duvel et $z$ le prix d'une orval (en euros).

Chaque achat donne une équation : « 3 jupiler + 4 duvel + 6 orval = 21 euros » se traduit par $3x + 4y + 6z = 21$. En faisant de même pour Paul, Benjamin et Manu :

$$\begin{cases} 3x + 4y + 6z = 21 & \text{(Jean)} \\ 12x + 2y + 3z = 21 & \text{(Paul)} \\ 10x + 6y + 5z = 29 & \text{(Benjamin)} \\ 20x + 10y = 35 & \text{(Manu)} \end{cases}$$

📖 **Rappel du cours :** un système qui compte plus d'équations que d'inconnues est dit **surdéterminé**. Ici : 4 équations, 3 inconnues. Un tel système n'a de solution que si les équations sont compatibles entre elles. La stratégie : résoudre avec 3 équations, puis tester la quatrième.`,
          },
          {
            title: "Poser la matrice augmentée",
            content: String.raw`On résout le sous-système formé des trois premiers achats (Jean, Paul, Benjamin) par la méthode de Gauss–Jordan. On écrit la matrice augmentée :

$$\left(\begin{array}{ccc|c} 3 & 4 & 6 & 21 \\ 12 & 2 & 3 & 21 \\ 10 & 6 & 5 & 29 \end{array}\right)$$

📖 **Rappel du cours :** les **opérations élémentaires** sur les lignes (échanger deux lignes, multiplier une ligne par un réel non nul, ajouter à une ligne un multiple d'une autre) ne changent pas l'ensemble des solutions du système.`,
          },
          {
            title: "Éliminer x dans les lignes 2 et 3",
            content: String.raw`Le pivot est le $3$ en haut à gauche. On annule les coefficients de $x$ en dessous :

$$\left(\begin{array}{ccc|c} 3 & 4 & 6 & 21 \\ 12 & 2 & 3 & 21 \\ 10 & 6 & 5 & 29 \end{array}\right) \xrightarrow{L_2 \leftarrow L_2 - 4L_1} \left(\begin{array}{ccc|c} 3 & 4 & 6 & 21 \\ 0 & -14 & -21 & -63 \\ 10 & 6 & 5 & 29 \end{array}\right)$$

Pour éviter les fractions dans $L_3$, on utilise $L_3 \leftarrow 3L_3 - 10L_1$ :

$$3L_3 - 10L_1 = (30, 18, 15 \,|\, 87) - (30, 40, 60 \,|\, 210) = (0, -22, -45 \,|\, -123)$$

On simplifie encore $L_2$ en la divisant par $-7$, et on change le signe de $L_3$ :

$$\left(\begin{array}{ccc|c} 3 & 4 & 6 & 21 \\ 0 & 2 & 3 & 9 \\ 0 & 22 & 45 & 123 \end{array}\right)$$`,
          },
          {
            title: "Éliminer y dans la ligne 3 et trouver z",
            content: String.raw`Le pivot de la deuxième colonne est le $2$ de $L_2$. On annule le $22$ en dessous :

$$\xrightarrow{L_3 \leftarrow L_3 - 11L_2} \left(\begin{array}{ccc|c} 3 & 4 & 6 & 21 \\ 0 & 2 & 3 & 9 \\ 0 & 0 & 12 & 24 \end{array}\right)$$

La dernière ligne se lit $12z = 24$, donc

$$z = 2.$$`,
          },
          {
            title: "Remonter pour trouver y puis x",
            content: String.raw`On substitue de bas en haut (c'est la phase de « remontée » de la méthode).

La ligne 2 donne : $2y + 3z = 9$, c'est-à-dire $2y + 6 = 9$, donc

$$y = \frac{3}{2}.$$

La ligne 1 donne : $3x + 4y + 6z = 21$, c'est-à-dire $3x + 6 + 12 = 21$, donc $3x = 3$ et

$$x = 1.$$

Les prix sont donc : jupiler à 1 euro, duvel à 1,50 euro, orval à 2 euros.

**Vérification :** Benjamin : $10 \cdot 1 + 6 \cdot \frac{3}{2} + 5 \cdot 2 = 10 + 9 + 10 = 29$ ✓`,
          },
          {
            title: "Tester la quatrième équation : le barman a-t-il triché ?",
            content: String.raw`Il reste à vérifier que ces prix sont compatibles avec l'achat de Manu, c'est-à-dire que la quatrième équation du système surdéterminé est satisfaite :

$$20x + 10y = 20 \cdot 1 + 10 \cdot \frac{3}{2} = 20 + 15 = 35.$$

Or Manu a bien payé 35 euros : la quatrième équation est satisfaite, le système surdéterminé est **compatible**.

**Conclusion :** le barman a respecté ses prix tout au long de la soirée.`,
          },
        ],
        answer: String.raw`Les prix sont $(x, y, z)^T = \left(1, \frac{3}{2}, 2\right)^T$ : la jupiler coûte 1 euro, la duvel 1,50 euro et l'orval 2 euros. Comme $20 \cdot 1 + 10 \cdot \frac{3}{2} = 35$, l'achat de Manu est cohérent avec ces prix : le barman a bien respecté ses prix toute la soirée.`,
      },
    ],
  },
  {
    id: "2.6",
    chapter: 2,
    title: "Le problème d'Euler (solutions entières positives)",
    examType: false,
    statement: String.raw`**(Problème d'Euler.)** Un fermier suisse achète des moutons, des chèvres et des ânes, dont le nombre total est 100, pour 100 couronnes. Les moutons lui coûtent $\frac{1}{2}$ couronne par animal, les chèvres $\frac{4}{3}$ couronnes et les ânes $\frac{7}{2}$ couronnes.`,
    method: String.raw`Note $m$, $c$ et $a$ les nombres de moutons, de chèvres et d'ânes, et traduis « nombre total » et « coût total » en deux équations. Avec la condition « 11 moutons de plus que de chèvres », tu obtiens un système de 3 équations à 3 inconnues à résoudre par Gauss–Jordan. Sans cette condition, le système est simplement indéterminé : exprime les solutions en fonction d'une inconnue libre, puis exploite le fait que des nombres d'animaux doivent être des **entiers positifs** pour ne garder que quelques solutions.`,
    theoryRefs: ["Modélisation", "Méthode de Gauss–Jordan"],
    parts: [
      {
        label: "a",
        statement: String.raw`Combien d'animaux de chaque espèce achète-t-il si le nombre de moutons est supérieur de 11 unités à celui des chèvres ?`,
        steps: [
          {
            title: "Modéliser : traduire l'énoncé en équations",
            content: String.raw`Note $m$ le nombre de moutons, $c$ le nombre de chèvres et $a$ le nombre d'ânes.

- « le nombre total est 100 » : $m + c + a = 100$
- « pour 100 couronnes », avec les prix unitaires donnés : $\frac{1}{2}m + \frac{4}{3}c + \frac{7}{2}a = 100$
- « le nombre de moutons est supérieur de 11 unités à celui des chèvres » : $m = c + 11$, c'est-à-dire $m - c = 11$

Pour chasser les fractions, on multiplie la deuxième équation par 6 :

$$\begin{cases} m + c + a = 100 \\ 3m + 8c + 21a = 600 \\ m - c = 11 \end{cases}$$

Multiplier une équation par un réel non nul ne change pas ses solutions — autant travailler avec des entiers !`,
          },
          {
            title: "Poser la matrice augmentée et éliminer m",
            content: String.raw`📖 **Rappel du cours :** la méthode de Gauss–Jordan consiste à transformer la matrice augmentée du système, par opérations élémentaires sur les lignes, jusqu'à pouvoir lire la solution.

$$\left(\begin{array}{ccc|c} 1 & 1 & 1 & 100 \\ 3 & 8 & 21 & 600 \\ 1 & -1 & 0 & 11 \end{array}\right) \xrightarrow{\substack{L_2 \leftarrow L_2 - 3L_1 \\ L_3 \leftarrow L_3 - L_1}} \left(\begin{array}{ccc|c} 1 & 1 & 1 & 100 \\ 0 & 5 & 18 & 300 \\ 0 & -2 & -1 & -89 \end{array}\right)$$`,
          },
          {
            title: "Éliminer c dans la ligne 3",
            content: String.raw`Pour annuler le $-2$ de $L_3$ avec le pivot $5$ de $L_2$ sans introduire de fractions, on utilise $L_3 \leftarrow 5L_3 + 2L_2$ :

$$5L_3 + 2L_2 = (0, -10, -5 \,|\, -445) + (0, 10, 36 \,|\, 600) = (0, 0, 31 \,|\, 155)$$

$$\left(\begin{array}{ccc|c} 1 & 1 & 1 & 100 \\ 0 & 5 & 18 & 300 \\ 0 & 0 & 31 & 155 \end{array}\right)$$

La dernière ligne donne $31a = 155$, donc

$$a = 5.$$`,
          },
          {
            title: "Remonter et vérifier",
            content: String.raw`La ligne 2 donne : $5c + 18 \cdot 5 = 300$, donc $5c = 210$ et $c = 42$.

La ligne 1 donne : $m + 42 + 5 = 100$, donc $m = 53$.

**Vérification :** on réinjecte $(53, 42, 5)$ dans les données de l'énoncé.

- Nombre total : $53 + 42 + 5 = 100$ ✓
- Coût total : $\frac{1}{2} \cdot 53 + \frac{4}{3} \cdot 42 + \frac{7}{2} \cdot 5 = 26{,}5 + 56 + 17{,}5 = 100$ couronnes ✓
- Moutons vs chèvres : $53 = 42 + 11$ ✓`,
          },
        ],
        answer: String.raw`$(m, c, a)^T = (53, 42, 5)^T$ : le fermier achète 53 moutons, 42 chèvres et 5 ânes.`,
      },
      {
        label: "b",
        statement: String.raw`Et combien d'animaux de chaque espèce achète-t-il sans cette condition ?`,
        steps: [
          {
            title: "Reconnaître un système simplement indéterminé",
            content: String.raw`Sans la condition $m = c + 11$, il ne reste que 2 équations pour 3 inconnues :

$$\begin{cases} m + c + a = 100 \\ 3m + 8c + 21a = 600 \end{cases}$$

📖 **Rappel du cours :** quand il reste une inconnue libre après élimination, le système possède une infinité de solutions dépendant d'un paramètre : il est **simplement indéterminé**. Mais attention : ici les inconnues comptent des animaux, donc seules les solutions **entières et positives** ont un sens !`,
          },
          {
            title: "Résoudre par Gauss–Jordan avec a comme inconnue libre",
            content: String.raw`$$\left(\begin{array}{ccc|c} 1 & 1 & 1 & 100 \\ 3 & 8 & 21 & 600 \end{array}\right) \xrightarrow{L_2 \leftarrow L_2 - 3L_1} \left(\begin{array}{ccc|c} 1 & 1 & 1 & 100 \\ 0 & 5 & 18 & 300 \end{array}\right)$$

On choisit $a$ comme inconnue libre. La ligne 2 donne $5c = 300 - 18a$, donc

$$c = 60 - \frac{18}{5}a.$$

La ligne 1 donne alors $m = 100 - c - a = 100 - 60 + \frac{18}{5}a - a$, donc

$$m = 40 + \frac{13}{5}a.$$`,
          },
          {
            title: "Imposer des solutions entières",
            content: String.raw`Pour que $c = 60 - \frac{18}{5}a$ et $m = 40 + \frac{13}{5}a$ soient des entiers, il faut que $a$ soit un **multiple de 5** (car ni 18 ni 13 ne sont divisibles par 5). On pose donc $a = 5k$ avec $k$ entier, ce qui donne :

$$m = 40 + 13k, \qquad c = 60 - 18k, \qquad a = 5k.$$`,
          },
          {
            title: "Imposer des solutions positives et lister les cas",
            content: String.raw`Il reste à exiger que les trois nombres soient positifs :

- $a = 5k \geq 0$ impose $k \geq 0$ ;
- $c = 60 - 18k \geq 0$ impose $k \leq \frac{60}{18} = 3{,}33\ldots$, donc $k \leq 3$ ;
- $m = 40 + 13k$ est alors automatiquement positif.

Les seules valeurs possibles sont $k = 0, 1, 2, 3$, ce qui donne quatre solutions $(m, c, a)$ :

- $k = 0$ : $(40, 60, 0)$
- $k = 1$ : $(53, 42, 5)$ — c'est la solution du point a) !
- $k = 2$ : $(66, 24, 10)$
- $k = 3$ : $(79, 6, 15)$

**Vérification** (pour $k = 3$) : $79 + 6 + 15 = 100$ ✓ et $\frac{1}{2} \cdot 79 + \frac{4}{3} \cdot 6 + \frac{7}{2} \cdot 15 = 39{,}5 + 8 + 52{,}5 = 100$ ✓`,
          },
        ],
        answer: String.raw`Sans la condition, il y a quatre possibilités : $(m, c, a)^T = (40, 60, 0)^T$, $(53, 42, 5)^T$, $(66, 24, 10)^T$ ou $(79, 6, 15)^T$.`,
      },
    ],
  },
  {
    id: "2.7",
    chapter: 2,
    title: "Commande auprès de trois fournisseurs",
    examType: false,
    statement: String.raw`Un commerçant doit acquérir 100 pièces d'un certain produit et peut s'approvisionner chez trois fournisseurs A, B, C. Les coûts de transport par unité sont respectivement de 10, 20 et 12 euros. Les prix unitaires d'achat sont respectivement de 300, 250 et 350 euros. Quelle commande le commerçant fait-il auprès de chaque fournisseur sachant que le prix global d'achat s'élève à 30 750 euros tandis que le coût de transport est de 1 330 euros ?`,
    method: String.raw`Note $x$, $y$, $z$ les quantités commandées chez A, B et C. Les trois informations chiffrées (quantité totale, prix d'achat global, coût de transport total) donnent trois équations linéaires. Simplifie d'abord les équations (divise par les facteurs communs), puis résous par Gauss–Jordan.`,
    theoryRefs: ["Modélisation", "Méthode de Gauss–Jordan"],
    parts: [
      {
        label: null,
        steps: [
          {
            title: "Modéliser : traduire l'énoncé en équations",
            content: String.raw`Note $x$, $y$ et $z$ le nombre de pièces commandées respectivement chez A, B et C. Chaque donnée chiffrée de l'énoncé fournit une équation :

- « 100 pièces » au total : $x + y + z = 100$
- « prix global d'achat de 30 750 euros », avec les prix unitaires 300, 250 et 350 : $300x + 250y + 350z = 30\,750$
- « coût de transport de 1 330 euros », avec les coûts unitaires 10, 20 et 12 : $10x + 20y + 12z = 1\,330$

$$\begin{cases} x + y + z = 100 \\ 300x + 250y + 350z = 30\,750 \\ 10x + 20y + 12z = 1\,330 \end{cases}$$`,
          },
          {
            title: "Simplifier les équations avant de calculer",
            content: String.raw`Bon réflexe avant d'appliquer Gauss–Jordan : diviser chaque équation par le plus grand facteur commun de ses coefficients (cela ne change pas les solutions et évite de trimballer de grands nombres).

- On divise la deuxième équation par 50 : $6x + 5y + 7z = 615$.
- On divise la troisième équation par 2 : $5x + 10y + 6z = 665$.

$$\begin{cases} x + y + z = 100 \\ 6x + 5y + 7z = 615 \\ 5x + 10y + 6z = 665 \end{cases}$$`,
          },
          {
            title: "Poser la matrice augmentée et éliminer x",
            content: String.raw`📖 **Rappel du cours :** la méthode de Gauss–Jordan transforme la matrice augmentée par opérations élémentaires sur les lignes, en créant des zéros sous chaque pivot, jusqu'à pouvoir lire la solution.

$$\left(\begin{array}{ccc|c} 1 & 1 & 1 & 100 \\ 6 & 5 & 7 & 615 \\ 5 & 10 & 6 & 665 \end{array}\right) \xrightarrow{\substack{L_2 \leftarrow L_2 - 6L_1 \\ L_3 \leftarrow L_3 - 5L_1}} \left(\begin{array}{ccc|c} 1 & 1 & 1 & 100 \\ 0 & -1 & 1 & 15 \\ 0 & 5 & 1 & 165 \end{array}\right)$$`,
          },
          {
            title: "Éliminer y et trouver z",
            content: String.raw`Le pivot de la deuxième colonne est le $-1$ de $L_2$. On annule le $5$ en dessous :

$$\xrightarrow{L_3 \leftarrow L_3 + 5L_2} \left(\begin{array}{ccc|c} 1 & 1 & 1 & 100 \\ 0 & -1 & 1 & 15 \\ 0 & 0 & 6 & 240 \end{array}\right)$$

La dernière ligne donne $6z = 240$, donc

$$z = 40.$$`,
          },
          {
            title: "Remonter et vérifier",
            content: String.raw`La ligne 2 donne : $-y + z = 15$, c'est-à-dire $-y + 40 = 15$, donc $y = 25$.

La ligne 1 donne : $x + 25 + 40 = 100$, donc $x = 35$.

**Vérification :** on réinjecte $(35, 25, 40)$ dans les données d'origine.

- Quantité : $35 + 25 + 40 = 100$ pièces ✓
- Prix d'achat : $300 \cdot 35 + 250 \cdot 25 + 350 \cdot 40 = 10\,500 + 6\,250 + 14\,000 = 30\,750$ euros ✓
- Transport : $10 \cdot 35 + 20 \cdot 25 + 12 \cdot 40 = 350 + 500 + 480 = 1\,330$ euros ✓`,
          },
        ],
        answer: String.raw`$X = (35, 25, 40)^T$ : le commerçant commande 35 pièces chez A, 25 chez B et 40 chez C.`,
      },
    ],
  },
  {
    id: "2.8",
    chapter: 2,
    title: "Répartition des cultures d'un agriculteur",
    examType: true,
    statement: String.raw`Un agriculteur dispose de cent hectares pour planter des laitues, des choux et des pommes de terre. La plantation d'un hectare (10 000 m²) de laitues lui prend 80 heures, 60 pour les choux et 8 pour les pommes de terre. La plantation de laitues lui revient à 2 euros au m², les choux à 0,8 euro au m² et les pommes de terre 0,5. Quelle superficie va-t-il consacrer à chaque plantation s'il dispose avec son personnel de 1 100 heures et qu'il investit 539 000 euros ?`,
    method: String.raw`Le piège de cet exercice est dans les **unités** : les surfaces sont en hectares mais les coûts sont donnés en euros au m². Commence par tout convertir en hectares (1 hectare = 10 000 m²), puis traduis les trois contraintes (surface totale, heures, budget) en un système de 3 équations à 3 inconnues et résous par Gauss–Jordan.`,
    theoryRefs: ["Modélisation", "Méthode de Gauss–Jordan"],
    parts: [
      {
        label: null,
        steps: [
          {
            title: "Choisir les inconnues et harmoniser les unités",
            content: String.raw`Note $x$, $y$ et $z$ les superficies (en **hectares**) consacrées respectivement aux laitues, aux choux et aux pommes de terre.

Attention : les temps de plantation sont donnés **par hectare**, mais les coûts sont donnés **par m²**. Avant d'écrire la moindre équation, on convertit les coûts en euros par hectare, sachant que 1 hectare = 10 000 m² :

- laitues : $2 \cdot 10\,000 = 20\,000$ euros par hectare ;
- choux : $0{,}8 \cdot 10\,000 = 8\,000$ euros par hectare ;
- pommes de terre : $0{,}5 \cdot 10\,000 = 5\,000$ euros par hectare.

Mélanger des hectares et des m² dans une même équation est l'erreur classique de cet exercice — c'est un exercice type examen, sois vigilant !`,
          },
          {
            title: "Modéliser : traduire les trois contraintes en équations",
            content: String.raw`- Surface totale de 100 hectares : $x + y + z = 100$
- Temps disponible de 1 100 heures, à raison de 80, 60 et 8 heures par hectare : $80x + 60y + 8z = 1\,100$
- Budget de 539 000 euros, à 20 000, 8 000 et 5 000 euros par hectare : $20\,000x + 8\,000y + 5\,000z = 539\,000$

On simplifie avant de calculer : la deuxième équation se divise par 4, la troisième par 1 000 :

$$\begin{cases} x + y + z = 100 \\ 20x + 15y + 2z = 275 \\ 20x + 8y + 5z = 539 \end{cases}$$`,
          },
          {
            title: "Poser la matrice augmentée et éliminer x",
            content: String.raw`📖 **Rappel du cours :** la méthode de Gauss–Jordan transforme la matrice augmentée du système par opérations élémentaires sur les lignes ; on crée des zéros sous le premier pivot, puis sous le deuxième, jusqu'à pouvoir lire la solution.

$$\left(\begin{array}{ccc|c} 1 & 1 & 1 & 100 \\ 20 & 15 & 2 & 275 \\ 20 & 8 & 5 & 539 \end{array}\right) \xrightarrow{\substack{L_2 \leftarrow L_2 - 20L_1 \\ L_3 \leftarrow L_3 - 20L_1}} \left(\begin{array}{ccc|c} 1 & 1 & 1 & 100 \\ 0 & -5 & -18 & -1\,725 \\ 0 & -12 & -15 & -1\,461 \end{array}\right)$$

On simplifie : $L_2 \leftarrow -L_2$ et $L_3 \leftarrow -\frac{1}{3}L_3$ :

$$\left(\begin{array}{ccc|c} 1 & 1 & 1 & 100 \\ 0 & 5 & 18 & 1\,725 \\ 0 & 4 & 5 & 487 \end{array}\right)$$`,
          },
          {
            title: "Éliminer y et trouver z",
            content: String.raw`Pour annuler le $4$ de $L_3$ avec le pivot $5$ de $L_2$ sans introduire de fractions, on utilise $L_3 \leftarrow 5L_3 - 4L_2$ :

$$5L_3 - 4L_2 = (0, 20, 25 \,|\, 2\,435) - (0, 20, 72 \,|\, 6\,900) = (0, 0, -47 \,|\, -4\,465)$$

$$\left(\begin{array}{ccc|c} 1 & 1 & 1 & 100 \\ 0 & 5 & 18 & 1\,725 \\ 0 & 0 & -47 & -4\,465 \end{array}\right)$$

La dernière ligne donne $-47z = -4\,465$, donc

$$z = 95.$$`,
          },
          {
            title: "Remonter pour trouver y puis x",
            content: String.raw`La ligne 2 donne : $5y + 18 \cdot 95 = 1\,725$, c'est-à-dire $5y = 1\,725 - 1\,710 = 15$, donc $y = 3$.

La ligne 1 donne : $x + 3 + 95 = 100$, donc $x = 2$.

L'agriculteur consacre donc 2 hectares aux laitues, 3 hectares aux choux et 95 hectares aux pommes de terre.`,
          },
          {
            title: "Vérifier avec les données de l'énoncé",
            content: String.raw`**Vérification :** on réinjecte $(2, 3, 95)$ dans les contraintes d'origine.

- Surface : $2 + 3 + 95 = 100$ hectares ✓
- Heures : $80 \cdot 2 + 60 \cdot 3 + 8 \cdot 95 = 160 + 180 + 760 = 1\,100$ heures ✓
- Budget : $20\,000 \cdot 2 + 8\,000 \cdot 3 + 5\,000 \cdot 95 = 40\,000 + 24\,000 + 475\,000 = 539\,000$ euros ✓

Tout colle : la solution est cohérente avec les trois contraintes.`,
          },
        ],
        answer: String.raw`$X = (2, 3, 95)^T$ en hectares : 2 hectares de laitues, 3 hectares de choux et 95 hectares de pommes de terre.`,
      },
    ],
  },
];
