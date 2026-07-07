import type { Exercise } from "./types";

export const exercises: Exercise[] = [
  {
    id: "8.1",
    chapter: 8,
    title: "Intégrales partielles",
    examType: false,
    statement: String.raw`Calculez $\displaystyle\int_0^3 f(x, y)\, dx$ et $\displaystyle\int_0^4 f(x, y)\, dy$ lorsque`,
    method: String.raw`Une intégrale partielle s'intègre par rapport à UNE seule variable : l'autre variable est traitée exactement comme une constante. Applique donc les primitives usuelles en ne touchant qu'à la variable d'intégration, puis évalue entre les bornes. Le résultat n'est pas un nombre mais une fonction de la variable restante.`,
    theoryRefs: ["Intégrales itérées", "Domaines d'intégration"],
    parts: [
      {
        label: "a",
        statement: String.raw`$f(x, y) = 2x + 3x^2 y$`,
        steps: [
          {
            title: "Comprendre ce qu'est une intégrale partielle",
            content: String.raw`📖 **Rappel du cours :** dans une intégrale partielle $\int_a^b f(x, y)\, dx$, on intègre par rapport à $x$ en considérant $y$ comme une **constante**. C'est le pendant de la dérivée partielle : là où $\frac{\partial f}{\partial x}$ dérive en gelant $y$, l'intégrale partielle intègre en gelant $y$.

Ici on doit calculer deux intégrales partielles de $f(x, y) = 2x + 3x^2 y$ : l'une par rapport à $x$ (résultat : une fonction de $y$), l'autre par rapport à $y$ (résultat : une fonction de $x$).`,
          },
          {
            title: "Intégrer par rapport à x (y constant)",
            content: String.raw`Tu cherches une primitive de $2x + 3x^2 y$ **en la variable $x$**. Le facteur $y$ se comporte comme un coefficient numérique :

- une primitive de $2x$ est $x^2$ ;
- une primitive de $3x^2 y$ est $x^3 y$ (car $y$ est constant, on intègre $3x^2$ en $x^3$).

$$\int_0^3 (2x + 3x^2 y)\, dx = \Big[ x^2 + x^3 y \Big]_{x=0}^{x=3} = (9 + 27y) - (0 + 0) = 9 + 27y$$

Remarque que le résultat dépend encore de $y$ : c'est normal, on n'a intégré que sur $x$.`,
          },
          {
            title: "Intégrer par rapport à y (x constant)",
            content: String.raw`Cette fois c'est $x$ qui est gelé. Une primitive de $2x$ (constante en $y$) est $2xy$, et une primitive de $3x^2 y$ est $3x^2 \cdot \frac{y^2}{2} = \frac{3x^2 y^2}{2}$ :

$$\int_0^4 (2x + 3x^2 y)\, dy = \Big[ 2xy + \tfrac{3}{2} x^2 y^2 \Big]_{y=0}^{y=4} = 8x + \tfrac{3}{2} \cdot 16 \cdot x^2 = 8x + 24x^2$$

**Vérification :** dérive la primitive par rapport à $y$ : $\frac{\partial}{\partial y}\big(2xy + \tfrac{3}{2}x^2 y^2\big) = 2x + 3x^2 y = f(x, y)$ ✓`,
          },
        ],
        answer: String.raw`$\displaystyle\int_0^3 f\, dx = 9 + 27y$ et $\displaystyle\int_0^4 f\, dy = 8x + 24x^2$`,
      },
      {
        label: "b",
        statement: String.raw`$f(x, y) = \dfrac{y}{x+2}$`,
        steps: [
          {
            title: "Intégrer par rapport à x (y constant)",
            content: String.raw`On écrit $f(x, y) = y \cdot \dfrac{1}{x+2}$ : le facteur $y$ sort de l'intégrale puisqu'il est constant quand on intègre en $x$.

📖 **Rappel du cours :** $\displaystyle\int \frac{1}{x+2}\, dx = \ln|x+2| + C$ (primitive du type $\frac{u'}{u}$).

$$\int_0^3 \frac{y}{x+2}\, dx = y \Big[ \ln(x+2) \Big]_{x=0}^{x=3} = y\,(\ln 5 - \ln 2) = y \ln\frac{5}{2}$$

(On utilise la propriété $\ln a - \ln b = \ln\frac{a}{b}$.)`,
          },
          {
            title: "Intégrer par rapport à y (x constant)",
            content: String.raw`Maintenant c'est $\dfrac{1}{x+2}$ qui est une constante : on intègre simplement $y$ en $\dfrac{y^2}{2}$.

$$\int_0^4 \frac{y}{x+2}\, dy = \frac{1}{x+2} \Big[ \frac{y^2}{2} \Big]_{y=0}^{y=4} = \frac{1}{x+2} \cdot \frac{16}{2} = \frac{8}{x+2}$$`,
          },
          {
            title: "Interpréter les résultats",
            content: String.raw`Retiens la structure : intégrer en $x$ efface $x$ et laisse une fonction de $y$ ; intégrer en $y$ efface $y$ et laisse une fonction de $x$. C'est exactement ce mécanisme qui sera enchaîné deux fois dans les **intégrales itérées** de l'exercice suivant : la première intégration produit une fonction d'une seule variable, que la seconde intégration transforme en nombre.

**Vérification :** $\frac{\partial}{\partial y}\Big(\frac{1}{x+2}\cdot\frac{y^2}{2}\Big) = \frac{y}{x+2} = f(x,y)$ ✓`,
          },
        ],
        answer: String.raw`$\displaystyle\int_0^3 f\, dx = y \ln\frac{5}{2}$ et $\displaystyle\int_0^4 f\, dy = \dfrac{8}{x+2}$`,
      },
    ],
  },
  {
    id: "8.2",
    chapter: 8,
    title: "Intégrales itérées",
    examType: false,
    statement: String.raw`Calculez chacune des intégrales itérées suivantes :`,
    method: String.raw`Une intégrale itérée se calcule de l'intérieur vers l'extérieur : commence par l'intégrale intérieure (en gelant l'autre variable), tu obtiens une fonction d'une seule variable, puis intègre ce résultat avec l'intégrale extérieure. Repère bien quel symbole ($dx$ ou $dy$) vient en premier : c'est lui qui indique la variable de l'intégrale intérieure.`,
    theoryRefs: ["Intégrales itérées", "Théorème de Fubini", "Ordre d'intégration"],
    parts: [
      {
        label: "a",
        statement: String.raw`$\displaystyle\int_0^3 \int_1^2 x^2 y \, dy\, dx$`,
        steps: [
          {
            title: "Identifier l'ordre d'intégration",
            content: String.raw`📖 **Rappel du cours :** dans $\displaystyle\int_0^3 \int_1^2 x^2 y\, dy\, dx$, on lit de l'intérieur vers l'extérieur : le $dy$ est le plus proche de la fonction, donc on intègre **d'abord en $y$** (de 1 à 2, avec $x$ constant), **puis en $x$** (de 0 à 3).

Les bornes se lisent de la même façon : l'intégrale intérieure $\int_1^2 \ldots\, dy$ porte sur $y \in [1, 2]$, l'extérieure sur $x \in [0, 3]$.`,
          },
          {
            title: "Calculer l'intégrale intérieure (en y)",
            content: String.raw`Avec $x$ constant, $x^2$ sort de l'intégrale :

$$\int_1^2 x^2 y\, dy = x^2 \Big[ \frac{y^2}{2} \Big]_1^2 = x^2 \Big( \frac{4}{2} - \frac{1}{2} \Big) = \frac{3}{2} x^2$$

Le résultat ne dépend plus que de $x$ : on peut passer à l'intégrale extérieure.`,
          },
          {
            title: "Calculer l'intégrale extérieure (en x)",
            content: String.raw`$$\int_0^3 \frac{3}{2} x^2\, dx = \frac{3}{2} \Big[ \frac{x^3}{3} \Big]_0^3 = \frac{3}{2} \cdot \frac{27}{3} = \frac{27}{2}$$

**Vérification (Fubini) :** comme $x^2y$ est un produit $g(x)\,h(y)$, on peut aussi calculer $\Big(\int_0^3 x^2\, dx\Big)\Big(\int_1^2 y\, dy\Big) = 9 \cdot \frac{3}{2} = \frac{27}{2}$ ✓`,
          },
        ],
        answer: String.raw`$\dfrac{27}{2}$`,
      },
      {
        label: "b",
        statement: String.raw`$\displaystyle\int_0^2 \int_0^2 (16 - x^2 - 2y^2)\, dx\, dy$`,
        steps: [
          {
            title: "Identifier l'ordre d'intégration",
            content: String.raw`Ici c'est $dx$ qui vient en premier : on intègre d'abord en $x$ (avec $y$ constant), puis en $y$. Les deux variables parcourent $[0, 2]$.`,
          },
          {
            title: "Calculer l'intégrale intérieure (en x)",
            content: String.raw`Le terme $2y^2$ est une constante pour cette intégration :

$$\int_0^2 (16 - x^2 - 2y^2)\, dx = \Big[ 16x - \frac{x^3}{3} - 2y^2 x \Big]_{x=0}^{x=2} = 32 - \frac{8}{3} - 4y^2$$`,
          },
          {
            title: "Calculer l'intégrale extérieure (en y)",
            content: String.raw`$$\int_0^2 \Big( 32 - \frac{8}{3} - 4y^2 \Big) dy = \Big[ 32y - \frac{8}{3}y - \frac{4y^3}{3} \Big]_0^2 = 64 - \frac{16}{3} - \frac{32}{3}$$

Il reste à réduire au même dénominateur :

$$64 - \frac{16 + 32}{3} = 64 - \frac{48}{3} = 64 - 16 = 48$$`,
          },
        ],
        answer: String.raw`$48$`,
      },
      {
        label: "c",
        statement: String.raw`$\displaystyle\int_0^2 \int_1^2 (x - 3y^2)\, dy\, dx$`,
        steps: [
          {
            title: "Calculer l'intégrale intérieure (en y)",
            content: String.raw`On intègre d'abord en $y$ de 1 à 2, avec $x$ constant :

$$\int_1^2 (x - 3y^2)\, dy = \Big[ xy - y^3 \Big]_{y=1}^{y=2} = (2x - 8) - (x - 1) = x - 7$$

Attention au signe : n'oublie pas de distribuer le moins devant la parenthèse évaluée en $y = 1$.`,
          },
          {
            title: "Calculer l'intégrale extérieure (en x)",
            content: String.raw`$$\int_0^2 (x - 7)\, dx = \Big[ \frac{x^2}{2} - 7x \Big]_0^2 = 2 - 14 = -12$$

📖 **Rappel du cours :** une intégrale double peut parfaitement être **négative** : elle mesure un volume *algébrique*. Ici la fonction $x - 3y^2$ est négative sur la majeure partie du domaine, donc le résultat est négatif — rien d'anormal.`,
          },
        ],
        answer: String.raw`$-12$`,
      },
      {
        label: "d",
        statement: String.raw`$\displaystyle\int_{-1}^2 \int_1^4 (2x + 6x^2 y)\, dx\, dy$`,
        steps: [
          {
            title: "Calculer l'intégrale intérieure (en x)",
            content: String.raw`Le $dx$ est en premier : on intègre en $x$ de 1 à 4, avec $y$ constant :

$$\int_1^4 (2x + 6x^2 y)\, dx = \Big[ x^2 + 2x^3 y \Big]_{x=1}^{x=4} = (16 + 128y) - (1 + 2y) = 15 + 126y$$`,
          },
          {
            title: "Calculer l'intégrale extérieure (en y)",
            content: String.raw`Attention, la borne inférieure est **négative** ($y = -1$) : sois soigneux dans l'évaluation.

$$\int_{-1}^2 (15 + 126y)\, dy = \Big[ 15y + 63y^2 \Big]_{-1}^{2} = (30 + 252) - (-15 + 63)$$

$$= 282 - 48 = 234$$

**Vérification rapide :** $63 y^2$ évalué en $y = -1$ donne bien $+63$ (le carré efface le signe) et $15y$ donne $-15$ : c'est le piège classique de cet exercice.`,
          },
        ],
        answer: String.raw`$234$`,
      },
    ],
  },
  {
    id: "8.3",
    chapter: 8,
    title: "Intégrales doubles sur des rectangles",
    examType: false,
    statement: String.raw`Calculez $\displaystyle\iint_R f(x, y)\, dA$ lorsque`,
    method: String.raw`Le domaine $R = [a, b] \times [c, d]$ est un rectangle : le théorème de Fubini te permet de transformer l'intégrale double en intégrale itérée, dans l'ordre de ton choix. Choisis l'ordre qui rend les primitives les plus simples, et quand $f$ se factorise en $g(x)\,h(y)$, l'intégrale double se factorise en un produit de deux intégrales simples.`,
    theoryRefs: [
      "Théorème de Fubini",
      "Intégrales itérées",
      "Domaines d'intégration",
      "Ordre d'intégration",
    ],
    parts: [
      {
        label: "a",
        statement: String.raw`$f(x, y) = 1 + 4xy$ et $R = [0, 1] \times [1, 3]$`,
        steps: [
          {
            title: "Appliquer le théorème de Fubini",
            content: String.raw`📖 **Rappel du cours (théorème de Fubini) :** si $f$ est continue sur le rectangle $R = [a, b] \times [c, d]$, alors

$$\iint_R f(x, y)\, dA = \int_a^b \int_c^d f(x, y)\, dy\, dx = \int_c^d \int_a^b f(x, y)\, dx\, dy$$

Autrement dit, on peut calculer l'intégrale double comme une intégrale itérée, **dans l'ordre qu'on veut**. Ici $R = [0, 1] \times [1, 3]$ : le premier intervalle porte sur $x$ ($0 \le x \le 1$) et le second sur $y$ ($1 \le y \le 3$). Choisissons d'intégrer d'abord en $y$.`,
          },
          {
            title: "Calculer l'intégrale intérieure (en y)",
            content: String.raw`$$\int_1^3 (1 + 4xy)\, dy = \Big[ y + 2xy^2 \Big]_{y=1}^{y=3} = (3 + 18x) - (1 + 2x) = 2 + 16x$$`,
          },
          {
            title: "Calculer l'intégrale extérieure (en x)",
            content: String.raw`$$\int_0^1 (2 + 16x)\, dx = \Big[ 2x + 8x^2 \Big]_0^1 = 2 + 8 = 10$$

**Vérification :** en intégrant dans l'autre ordre, $\int_0^1 (1 + 4xy)\, dx = 1 + 2y$, puis $\int_1^3 (1 + 2y)\, dy = \big[y + y^2\big]_1^3 = 12 - 2 = 10$ ✓ Fubini est bien respecté.`,
          },
        ],
        answer: String.raw`$10$`,
      },
      {
        label: "b",
        statement: String.raw`$f(x, y) = \sqrt{x + y}$ et $R = [0, 1] \times [0, 3]$`,
        steps: [
          {
            title: "Poser l'intégrale itérée",
            content: String.raw`Par Fubini :

$$\iint_R \sqrt{x+y}\, dA = \int_0^1 \int_0^3 (x + y)^{1/2}\, dy\, dx$$

📖 **Rappel du cours :** une primitive de $(x + y)^{1/2}$ **par rapport à $y$** (avec $x$ constant) s'obtient comme pour $u^{1/2}$ avec $u = x + y$ et $\frac{du}{dy} = 1$ :

$$\int (x+y)^{1/2}\, dy = \frac{(x+y)^{3/2}}{3/2} = \frac{2}{3}(x+y)^{3/2}$$`,
          },
          {
            title: "Calculer l'intégrale intérieure (en y)",
            content: String.raw`$$\int_0^3 (x+y)^{1/2}\, dy = \frac{2}{3} \Big[ (x+y)^{3/2} \Big]_{y=0}^{y=3} = \frac{2}{3} \Big( (x+3)^{3/2} - x^{3/2} \Big)$$`,
          },
          {
            title: "Calculer l'intégrale extérieure (en x)",
            content: String.raw`On intègre chaque terme de la même façon : la primitive de $(x+3)^{3/2}$ en $x$ est $\frac{2}{5}(x+3)^{5/2}$, celle de $x^{3/2}$ est $\frac{2}{5}x^{5/2}$.

$$\int_0^1 \frac{2}{3} \Big( (x+3)^{3/2} - x^{3/2} \Big) dx = \frac{2}{3} \cdot \frac{2}{5} \Big[ (x+3)^{5/2} - x^{5/2} \Big]_0^1$$

$$= \frac{4}{15} \Big( 4^{5/2} - 1^{5/2} - 3^{5/2} + 0 \Big)$$`,
          },
          {
            title: "Simplifier les puissances fractionnaires",
            content: String.raw`Calcule chaque terme séparément :

- $4^{5/2} = (\sqrt{4})^5 = 2^5 = 32$
- $1^{5/2} = 1$
- $3^{5/2} = 3^2 \cdot 3^{1/2} = 9\sqrt{3}$

Donc :

$$\iint_R \sqrt{x+y}\, dA = \frac{4}{15} \big( 32 - 1 - 9\sqrt{3} \big) = \frac{4}{15} \big( 31 - 9\sqrt{3} \big) \approx 4{,}11$$`,
          },
        ],
        answer: String.raw`$\dfrac{4}{15}\big(31 - 9\sqrt{3}\big) \approx 4{,}11$`,
      },
      {
        label: "c",
        statement: String.raw`$f(x, y) = (2x + y)^8$ et $R = [0, 1] \times [0, 2]$`,
        steps: [
          {
            title: "Poser l'intégrale itérée",
            content: String.raw`$$\iint_R (2x+y)^8\, dA = \int_0^1 \int_0^2 (2x+y)^8\, dy\, dx$$

On commence par $y$ : avec $x$ constant, $u = 2x + y$ donne $\frac{du}{dy} = 1$, donc la primitive de $(2x+y)^8$ en $y$ est simplement $\frac{(2x+y)^9}{9}$ — pas de facteur correctif.`,
          },
          {
            title: "Calculer l'intégrale intérieure (en y)",
            content: String.raw`$$\int_0^2 (2x+y)^8\, dy = \Big[ \frac{(2x+y)^9}{9} \Big]_{y=0}^{y=2} = \frac{(2x+2)^9 - (2x)^9}{9}$$`,
          },
          {
            title: "Calculer l'intégrale extérieure (en x)",
            content: String.raw`Cette fois on intègre en $x$ : pour $(2x+2)^9$, la dérivée intérieure vaut $2$, il faut donc **diviser par $2$** en primitivant (idem pour $(2x)^9$) :

$$\int (2x+2)^9\, dx = \frac{(2x+2)^{10}}{2 \cdot 10}, \qquad \int (2x)^9\, dx = \frac{(2x)^{10}}{2 \cdot 10}$$

D'où :

$$\frac{1}{9} \cdot \frac{1}{20} \Big[ (2x+2)^{10} - (2x)^{10} \Big]_0^1 = \frac{1}{180} \Big( 4^{10} - 2^{10} - 2^{10} + 0 \Big)$$`,
          },
          {
            title: "Regrouper et conclure",
            content: String.raw`Les deux termes $2^{10}$ se regroupent : $2^{10} + 2^{10} = 2 \cdot 2^{10} = 2^{11}$.

$$\iint_R (2x+y)^8\, dA = \frac{4^{10} - 2^{11}}{180}$$

Numériquement : $4^{10} = 1\,048\,576$ et $2^{11} = 2048$, donc l'intégrale vaut $\frac{1\,046\,528}{180} \approx 5814$.`,
          },
        ],
        answer: String.raw`$\dfrac{4^{10} - 2^{11}}{180} = \dfrac{1\,046\,528}{180} \approx 5814$`,
      },
      {
        label: "d",
        statement: String.raw`$f(x, y) = \dfrac{x}{y} + \dfrac{y}{x}$ et $R = [1, 4] \times [1, 2]$`,
        steps: [
          {
            title: "Poser l'intégrale itérée",
            content: String.raw`$$\iint_R \Big( \frac{x}{y} + \frac{y}{x} \Big) dA = \int_1^4 \int_1^2 \Big( \frac{x}{y} + \frac{y}{x} \Big) dy\, dx$$

📖 **Rappel du cours :** $\int \frac{1}{y}\, dy = \ln|y| + C$. Sur nos intervalles, $x$ et $y$ sont strictement positifs, donc pas de souci de valeur absolue ni de division par zéro.`,
          },
          {
            title: "Calculer l'intégrale intérieure (en y)",
            content: String.raw`Avec $x$ constant, $\frac{x}{y} = x \cdot \frac{1}{y}$ et $\frac{y}{x} = \frac{1}{x} \cdot y$ :

$$\int_1^2 \Big( \frac{x}{y} + \frac{y}{x} \Big) dy = \Big[ x \ln y + \frac{y^2}{2x} \Big]_{y=1}^{y=2} = x \ln 2 + \frac{4}{2x} - 0 - \frac{1}{2x} = x \ln 2 + \frac{3}{2x}$$`,
          },
          {
            title: "Calculer l'intégrale extérieure (en x)",
            content: String.raw`$$\int_1^4 \Big( x \ln 2 + \frac{3}{2x} \Big) dx = \Big[ \frac{x^2}{2} \ln 2 + \frac{3}{2} \ln x \Big]_1^4 = 8 \ln 2 - \frac{1}{2} \ln 2 + \frac{3}{2} \ln 4$$`,
          },
          {
            title: "Regrouper les logarithmes",
            content: String.raw`Utilise $\ln 4 = \ln 2^2 = 2 \ln 2$ pour tout exprimer en $\ln 2$ :

$$8 \ln 2 - \frac{1}{2} \ln 2 + \frac{3}{2} \cdot 2 \ln 2 = \Big( 8 - \frac{1}{2} + 3 \Big) \ln 2 = \frac{21}{2} \ln 2$$

Numériquement : $\frac{21}{2} \ln 2 \approx 10{,}5 \times 0{,}693 \approx 7{,}28$.`,
          },
        ],
        answer: String.raw`$\dfrac{21}{2} \ln 2 \approx 7{,}28$`,
      },
      {
        label: "e",
        statement: String.raw`$f(x, y) = e^{2x - y}$ et $R = [0, \ln 5] \times [0, \ln 2]$`,
        steps: [
          {
            title: "Factoriser la fonction",
            content: String.raw`📖 **Rappel du cours :** si $f(x, y) = g(x)\,h(y)$ sur un rectangle $R = [a, b] \times [c, d]$, alors l'intégrale double se **factorise** :

$$\iint_R g(x)\,h(y)\, dA = \Big( \int_a^b g(x)\, dx \Big) \Big( \int_c^d h(y)\, dy \Big)$$

Or $e^{2x - y} = e^{2x} \cdot e^{-y}$ : la fonction est bien à variables séparées, et le domaine est un rectangle. On peut donc calculer deux intégrales simples et multiplier.`,
          },
          {
            title: "Calculer l'intégrale en x",
            content: String.raw`$$\int_0^{\ln 5} e^{2x}\, dx = \Big[ \frac{e^{2x}}{2} \Big]_0^{\ln 5} = \frac{e^{2\ln 5} - 1}{2} = \frac{25 - 1}{2} = 12$$

où l'on a utilisé $e^{2 \ln 5} = e^{\ln 25} = 25$.`,
          },
          {
            title: "Calculer l'intégrale en y",
            content: String.raw`$$\int_0^{\ln 2} e^{-y}\, dy = \Big[ -e^{-y} \Big]_0^{\ln 2} = -e^{-\ln 2} + 1 = -\frac{1}{2} + 1 = \frac{1}{2}$$

car $e^{-\ln 2} = \frac{1}{e^{\ln 2}} = \frac{1}{2}$.`,
          },
          {
            title: "Multiplier les deux résultats",
            content: String.raw`$$\iint_R e^{2x - y}\, dA = 12 \times \frac{1}{2} = 6$$

**Vérification :** la fonction $e^{2x-y}$ est strictement positive, le résultat doit être positif ✓ Et grâce à la factorisation, l'ordre des calculs n'a aucune importance.`,
          },
        ],
        answer: String.raw`$6$`,
      },
      {
        label: "f",
        statement: String.raw`$f(x, y) = x \sin(x + y)$ et $R = \big[0, \frac{\pi}{6}\big] \times \big[0, \frac{\pi}{3}\big]$`,
        steps: [
          {
            title: "Choisir un ordre d'intégration astucieux",
            content: String.raw`Ici la fonction ne se factorise **pas** (le $x$ apparaît aussi dans le sinus). Choisir le bon ordre change tout :

- si on intègre d'abord en $x$, il faut une intégration par parties dès la première étape, avec $y$ qui traîne partout ;
- si on intègre d'abord en $y$, le facteur $x$ est **constant** et l'intégrale intérieure est immédiate.

On pose donc :

$$\iint_R x \sin(x+y)\, dA = \int_0^{\pi/6} \int_0^{\pi/3} x \sin(x+y)\, dy\, dx$$`,
          },
          {
            title: "Calculer l'intégrale intérieure (en y)",
            content: String.raw`Avec $x$ constant, une primitive de $\sin(x+y)$ en $y$ est $-\cos(x+y)$ :

$$\int_0^{\pi/3} x \sin(x+y)\, dy = x \Big[ -\cos(x+y) \Big]_{y=0}^{y=\pi/3} = x \Big( \cos x - \cos\big(x + \tfrac{\pi}{3}\big) \Big)$$`,
          },
          {
            title: "Préparer l'intégration par parties",
            content: String.raw`Il reste :

$$\int_0^{\pi/6} x \cos x \, dx - \int_0^{\pi/6} x \cos\big(x + \tfrac{\pi}{3}\big)\, dx$$

📖 **Rappel du cours (intégration par parties) :** $\int u\, v' = u\,v - \int u'\, v$. Pour $\int x \cos(x + c)\, dx$, pose $u = x$ (donc $u' = 1$) et $v' = \cos(x+c)$ (donc $v = \sin(x+c)$) :

$$\int x \cos(x + c)\, dx = x \sin(x+c) - \int \sin(x+c)\, dx = x \sin(x+c) + \cos(x+c) + C$$

(le $\int \sin(x+c)\, dx = -\cos(x+c)$ arrive avec un signe moins devant, d'où le $+\cos$ final).`,
          },
          {
            title: "Évaluer la première intégrale",
            content: String.raw`Avec $c = 0$ :

$$\int_0^{\pi/6} x \cos x\, dx = \Big[ x \sin x + \cos x \Big]_0^{\pi/6} = \frac{\pi}{6} \cdot \frac{1}{2} + \frac{\sqrt{3}}{2} - (0 + 1) = \frac{\pi}{12} + \frac{\sqrt{3}}{2} - 1$$

(valeurs exactes : $\sin\frac{\pi}{6} = \frac{1}{2}$, $\cos\frac{\pi}{6} = \frac{\sqrt{3}}{2}$).`,
          },
          {
            title: "Évaluer la seconde intégrale",
            content: String.raw`Avec $c = \frac{\pi}{3}$ :

$$\int_0^{\pi/6} x \cos\big(x + \tfrac{\pi}{3}\big) dx = \Big[ x \sin\big(x + \tfrac{\pi}{3}\big) + \cos\big(x + \tfrac{\pi}{3}\big) \Big]_0^{\pi/6}$$

En $x = \frac{\pi}{6}$ : l'argument vaut $\frac{\pi}{6} + \frac{\pi}{3} = \frac{\pi}{2}$, donc on obtient $\frac{\pi}{6}\sin\frac{\pi}{2} + \cos\frac{\pi}{2} = \frac{\pi}{6} + 0$.

En $x = 0$ : $0 \cdot \sin\frac{\pi}{3} + \cos\frac{\pi}{3} = \frac{1}{2}$.

$$\int_0^{\pi/6} x \cos\big(x + \tfrac{\pi}{3}\big) dx = \frac{\pi}{6} - \frac{1}{2}$$`,
          },
          {
            title: "Soustraire et conclure",
            content: String.raw`$$\iint_R x \sin(x+y)\, dA = \Big( \frac{\pi}{12} + \frac{\sqrt{3}}{2} - 1 \Big) - \Big( \frac{\pi}{6} - \frac{1}{2} \Big) = -\frac{\pi}{12} + \frac{\sqrt{3}}{2} - \frac{1}{2}$$

**Vérification numérique :** $-\frac{\pi}{12} \approx -0{,}262$ et $\frac{\sqrt{3}}{2} \approx 0{,}866$, donc le résultat vaut $\approx 0{,}104$. C'est positif et petit — cohérent, car $x\sin(x+y) \ge 0$ sur ce petit domaine (les arguments du sinus restent dans $[0, \frac{\pi}{2}]$) ✓`,
          },
        ],
        answer: String.raw`$-\dfrac{1}{2} - \dfrac{\pi}{12} + \dfrac{\sqrt{3}}{2} \approx 0{,}10$`,
      },
    ],
  },
  {
    id: "8.4",
    chapter: 8,
    title: "Intégrales sur des domaines non rectangulaires",
    examType: true,
    statement: String.raw`Calculez chacune des intégrales suivantes et représentez graphiquement le domaine d'intégration.`,
    method: String.raw`Quand les bornes de l'intégrale intérieure dépendent de l'autre variable, le domaine n'est plus un rectangle : décris-le précisément (courbes frontières, sommets) avant de calculer. Puis calcule de l'intérieur vers l'extérieur ; en a), garde un œil sur la forme $\frac{u'}{u}$ qui apparaît après la première intégration.`,
    theoryRefs: ["Domaines d'intégration", "Intégrales itérées", "Ordre d'intégration"],
    parts: [
      {
        label: "a",
        statement: String.raw`$\displaystyle\int_0^1 \int_0^{x^2} \frac{30y}{x^5 + 1}\, dy\, dx$`,
        steps: [
          {
            title: "Décrire le domaine d'intégration",
            content: String.raw`📖 **Rappel du cours :** dans $\int_0^1 \int_0^{x^2} \ldots\, dy\, dx$, les bornes extérieures sont des **nombres** ($0 \le x \le 1$) et les bornes intérieures peuvent **dépendre de $x$** : ici $0 \le y \le x^2$. On découpe le domaine en tranches verticales.

Concrètement, le domaine est la région comprise entre l'axe $Ox$ (frontière inférieure $y = 0$) et la **parabole $y = x^2$** (frontière supérieure), pour $x$ allant de 0 à 1. Ses « coins » sont les points $(0, 0)$, $(1, 0)$ et $(1, 1)$.

Pour le dessiner : trace la parabole $y = x^2$ de $(0,0)$ à $(1,1)$, le segment de l'axe $Ox$ de $(0,0)$ à $(1,0)$, et le segment vertical $x = 1$ de $(1,0)$ à $(1,1)$ ; le domaine est la zone **sous** la parabole.`,
          },
          {
            title: "Calculer l'intégrale intérieure (en y)",
            content: String.raw`Avec $x$ constant, le facteur $\dfrac{30}{x^5 + 1}$ sort de l'intégrale :

$$\int_0^{x^2} \frac{30y}{x^5+1}\, dy = \frac{30}{x^5+1} \Big[ \frac{y^2}{2} \Big]_{y=0}^{y=x^2} = \frac{30}{x^5+1} \cdot \frac{x^4}{2} = \frac{15x^4}{x^5+1}$$

Remarque : la borne $x^2$ s'**élève au carré** en passant dans $\frac{y^2}{2}$, d'où le $x^4$.`,
          },
          {
            title: "Reconnaître une forme u'/u",
            content: String.raw`📖 **Rappel du cours :** $\displaystyle\int \frac{u'(x)}{u(x)}\, dx = \ln|u(x)| + C$.

Ici, avec $u = x^5 + 1$, on a $u' = 5x^4$. Le numérateur $15x^4 = 3 \cdot 5x^4$ est exactement $3\,u'$ :

$$\int_0^1 \frac{15x^4}{x^5+1}\, dx = 3 \int_0^1 \frac{5x^4}{x^5+1}\, dx = 3 \Big[ \ln(x^5 + 1) \Big]_0^1$$

(pas besoin de valeur absolue : $x^5 + 1 > 0$ sur $[0, 1]$).`,
          },
          {
            title: "Évaluer et conclure",
            content: String.raw`$$3 \Big[ \ln(x^5+1) \Big]_0^1 = 3 \big( \ln 2 - \ln 1 \big) = 3 \ln 2$$

**Vérification numérique :** $3 \ln 2 \approx 2{,}08$ ; la fonction $\frac{30y}{x^5+1}$ est positive sur le domaine, le résultat est bien positif ✓`,
          },
        ],
        answer: String.raw`$3 \ln 2 \approx 2{,}08$. Le domaine est la région entre l'axe $Ox$ et la parabole $y = x^2$, pour $0 \le x \le 1$ (coins $(0,0)$, $(1,0)$, $(1,1)$).`,
      },
      {
        label: "b",
        statement: String.raw`$\displaystyle\int_1^2 \int_y^{2y} \frac{1}{x}\, dx\, dy$`,
        steps: [
          {
            title: "Décrire le domaine d'intégration",
            content: String.raw`Ici l'ordre est inversé : les bornes extérieures portent sur $y$ ($1 \le y \le 2$) et les bornes intérieures sur $x$, qui va de $x = y$ à $x = 2y$. On découpe donc le domaine en tranches horizontales.

Les frontières sont les deux **droites** $x = y$ (c'est-à-dire $y = x$) et $x = 2y$ (c'est-à-dire $y = \frac{x}{2}$), coupées par les droites horizontales $y = 1$ et $y = 2$. Le domaine est donc le **trapèze** de sommets :

- $(1, 1)$ et $(2, 1)$ sur la droite $y = 1$ ;
- $(2, 2)$ et $(4, 2)$ sur la droite $y = 2$.

Pour le dessiner : chaque tranche horizontale à hauteur $y$ va du point $(y, y)$ (sur la droite $y = x$) au point $(2y, y)$ (sur la droite $y = \frac{x}{2}$).`,
          },
          {
            title: "Calculer l'intégrale intérieure (en x)",
            content: String.raw`$$\int_y^{2y} \frac{1}{x}\, dx = \Big[ \ln x \Big]_{x=y}^{x=2y} = \ln(2y) - \ln(y) = \ln\frac{2y}{y} = \ln 2$$

Joli résultat : la dépendance en $y$ **disparaît complètement** grâce à la propriété $\ln a - \ln b = \ln\frac{a}{b}$. C'est lié au fait que les bornes $y$ et $2y$ sont toujours dans un rapport constant (du simple au double).`,
          },
          {
            title: "Calculer l'intégrale extérieure (en y)",
            content: String.raw`On intègre la constante $\ln 2$ sur $[1, 2]$ :

$$\int_1^2 \ln 2\, dy = \ln 2 \cdot (2 - 1) = \ln 2$$

**Vérification numérique :** $\ln 2 \approx 0{,}69$ ; la fonction $\frac{1}{x}$ est positive sur le domaine (où $x \ge 1$), le résultat est bien positif ✓`,
          },
        ],
        answer: String.raw`$\ln 2 \approx 0{,}69$. Le domaine est le trapèze compris entre les droites $y = x$ et $y = \frac{x}{2}$, de sommets $(1,1)$, $(2,1)$, $(4,2)$ et $(2,2)$.`,
      },
    ],
  },
  {
    id: "8.5",
    chapter: 8,
    title: "Poser soi-même les bornes d'intégration",
    examType: true,
    statement: String.raw`Calculez $\displaystyle\iint_R y^2\, dA$ où $R$ est la région délimitée par les trois droites d'équation $x = 0$, $y = 1$ et $y = x$. Représentez graphiquement le domaine d'intégration.`,
    method: String.raw`Ici, personne ne te donne les bornes : c'est à toi de les trouver. Commence par identifier la région (dessine les trois droites et cherche leurs points d'intersection), puis découpe-la en tranches verticales ou horizontales pour écrire l'intégrale itérée. Les deux ordres fonctionnent — choisis, calcule, et vérifie avec l'autre ordre.`,
    theoryRefs: [
      "Domaines d'intégration",
      "Ordre d'intégration",
      "Théorème de Fubini",
      "Intégrales itérées",
    ],
    parts: [
      {
        label: null,
        steps: [
          {
            title: "Identifier la région R",
            content: String.raw`Cherche les points d'intersection des trois droites deux à deux :

- $x = 0$ et $y = x$ se coupent en $(0, 0)$ ;
- $x = 0$ et $y = 1$ se coupent en $(0, 1)$ ;
- $y = x$ et $y = 1$ se coupent en $(1, 1)$.

$R$ est donc le **triangle de sommets $(0,0)$, $(0,1)$ et $(1,1)$** : il est bordé à gauche par l'axe $Oy$ (droite $x = 0$), en haut par la droite horizontale $y = 1$, et en bas à droite par la droite $y = x$ (l'hypoténuse, qui monte de l'origine vers $(1,1)$).`,
          },
          {
            title: "Choisir un ordre et poser les bornes",
            content: String.raw`📖 **Rappel du cours :** pour un domaine non rectangulaire, on le découpe en tranches. En tranches **horizontales** (on fixe $y$ et on regarde où va $x$) : pour $y$ fixé entre 0 et 1, la tranche part du bord gauche $x = 0$ et s'arrête sur l'hypoténuse $y = x$, c'est-à-dire $x = y$. D'où :

$$\iint_R y^2\, dA = \int_0^1 \int_0^{y} y^2\, dx\, dy$$

Cet ordre est le plus confortable ici, car $y^2$ est **constant** par rapport à $x$ : l'intégrale intérieure sera immédiate.`,
          },
          {
            title: "Calculer l'intégrale intérieure (en x)",
            content: String.raw`$y^2$ est une constante pour cette intégration :

$$\int_0^{y} y^2\, dx = y^2 \Big[ x \Big]_{x=0}^{x=y} = y^2 \cdot y = y^3$$`,
          },
          {
            title: "Calculer l'intégrale extérieure (en y)",
            content: String.raw`$$\int_0^1 y^3\, dy = \Big[ \frac{y^4}{4} \Big]_0^1 = \frac{1}{4}$$`,
          },
          {
            title: "Vérifier avec l'autre ordre d'intégration",
            content: String.raw`**Vérification (Fubini) :** en tranches **verticales**, pour $x$ fixé entre 0 et 1, la tranche part de l'hypoténuse $y = x$ et monte jusqu'à $y = 1$ :

$$\int_0^1 \int_x^1 y^2\, dy\, dx = \int_0^1 \Big[ \frac{y^3}{3} \Big]_{y=x}^{y=1} dx = \int_0^1 \frac{1 - x^3}{3}\, dx = \frac{1}{3} \Big[ x - \frac{x^4}{4} \Big]_0^1 = \frac{1}{3} \cdot \frac{3}{4} = \frac{1}{4}$$

Les deux ordres donnent bien le même résultat ✓`,
          },
        ],
        answer: String.raw`$\dfrac{1}{4}$. Le domaine est le triangle de sommets $(0,0)$, $(0,1)$ et $(1,1)$.`,
      },
    ],
  },
  {
    id: "8.6",
    chapter: 8,
    title: "Domaine entre une droite et une hyperbole",
    examType: true,
    statement: String.raw`Calculez l'intégrale suivante et représentez graphiquement le domaine d'intégration :

$$\int_1^2 \int_{1/x}^{x} \frac{x}{y^3}\, dy\, dx$$`,
    method: String.raw`Décris d'abord le domaine : les bornes intérieures $y = \frac{1}{x}$ et $y = x$ sont deux courbes qui se coupent en $(1, 1)$. Ensuite calcule l'intégrale intérieure en $y$ (le facteur $x$ est constant, et $\frac{1}{y^3} = y^{-3}$ s'intègre avec la règle des puissances), puis termine par l'intégrale en $x$ où apparaît un logarithme.`,
    theoryRefs: ["Domaines d'intégration", "Intégrales itérées", "Ordre d'intégration"],
    parts: [
      {
        label: null,
        steps: [
          {
            title: "Décrire le domaine d'intégration",
            content: String.raw`Les bornes se lisent ainsi : $x$ va de 1 à 2, et pour chaque $x$ fixé, $y$ va de $\frac{1}{x}$ à $x$. Le domaine est donc la région comprise entre :

- l'**hyperbole $y = \frac{1}{x}$** (frontière inférieure, qui descend de $(1,1)$ vers $(2, \frac{1}{2})$) ;
- la **droite $y = x$** (frontière supérieure, qui monte de $(1,1)$ vers $(2,2)$) ;
- la **droite verticale $x = 2$** (frontière droite : le segment de $(2, \frac{1}{2})$ à $(2, 2)$).

Les deux courbes se rejoignent en $(1, 1)$ (car $\frac{1}{1} = 1$) : le domaine a la forme d'un « éventail » pointu à gauche, qui s'ouvre vers la droite. Sur tout $[1, 2]$ on a bien $\frac{1}{x} \le x$, donc les bornes sont dans le bon ordre.`,
          },
          {
            title: "Calculer l'intégrale intérieure (en y)",
            content: String.raw`📖 **Rappel du cours :** $\displaystyle\int y^{-3}\, dy = \frac{y^{-2}}{-2} = -\frac{1}{2y^2} + C$ (règle des puissances, valable car l'exposant $-3 \ne -1$).

Avec $x$ constant :

$$\int_{1/x}^{x} \frac{x}{y^3}\, dy = x \Big[ -\frac{1}{2y^2} \Big]_{y=1/x}^{y=x} = x \Big( -\frac{1}{2x^2} + \frac{1}{2 \cdot (1/x)^2} \Big)$$

Attention à la borne inférieure : $\dfrac{1}{(1/x)^2} = x^2$, donc :

$$= x \Big( -\frac{1}{2x^2} + \frac{x^2}{2} \Big) = -\frac{1}{2x} + \frac{x^3}{2}$$`,
          },
          {
            title: "Calculer l'intégrale extérieure (en x)",
            content: String.raw`$$\int_1^2 \Big( -\frac{1}{2x} + \frac{x^3}{2} \Big) dx = \Big[ -\frac{1}{2} \ln x + \frac{x^4}{8} \Big]_1^2$$

Évalue chaque borne :

- en $x = 2$ : $-\frac{1}{2}\ln 2 + \frac{16}{8} = -\frac{\ln 2}{2} + 2$ ;
- en $x = 1$ : $-\frac{1}{2}\ln 1 + \frac{1}{8} = 0 + \frac{1}{8}$.

$$\int_1^2 \int_{1/x}^{x} \frac{x}{y^3}\, dy\, dx = \Big( 2 - \frac{\ln 2}{2} \Big) - \frac{1}{8} = \frac{15}{8} - \frac{\ln 2}{2}$$`,
          },
          {
            title: "Vérifier la cohérence du résultat",
            content: String.raw`**Vérification numérique :** $\frac{15}{8} = 1{,}875$ et $\frac{\ln 2}{2} \approx 0{,}347$, donc l'intégrale vaut environ $1{,}53$.

Cohérence : sur le domaine, $x > 0$ et $y > 0$, donc la fonction $\frac{x}{y^3}$ est strictement **positive** — le résultat doit être positif ✓ Tu peux aussi revérifier l'intégrale intérieure en dérivant : $\frac{d}{dy}\Big(-\frac{x}{2y^2}\Big) = \frac{x}{y^3}$ ✓`,
          },
        ],
        answer: String.raw`$\dfrac{15}{8} - \dfrac{\ln 2}{2} \approx 1{,}53$. Le domaine est la région comprise entre l'hyperbole $y = \frac{1}{x}$ et la droite $y = x$, pour $x$ allant de 1 à 2 (pointe en $(1,1)$, fermée à droite par le segment vertical $x = 2$).`,
      },
    ],
  },
];
