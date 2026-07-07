import type { Demonstration } from "./types";

export const demos: Demonstration[] = [
  {
    id: "5.1",
    chapter: 5,
    title: "Inégalité de Cauchy–Schwarz",
    slideRef: "Slide 185",
    exam: "Énoncer et prouver l'inégalité de Cauchy–Schwarz",
    statement: String.raw`**Théorème (inégalité de Cauchy–Schwarz).** Quels que soient les vecteurs $X$ et $Y$ de $\mathbb{R}^n$ :

$$|X \bullet Y| \;\leq\; \|X\|\,\|Y\|$$`,
    intuition: String.raw`On applique la seule inégalité disponible du chapitre — une norme au carré est toujours positive — au vecteur $\lambda X + Y$ : le développement de $\|\lambda X + Y\|^2 \geq 0$ est un trinôme du second degré en $\lambda$ qui ne descend jamais sous l'axe, donc son discriminant est négatif ou nul… et c'est exactement l'inégalité de Cauchy–Schwarz.`,
    steps: [
      {
        title: "Comprendre l'énoncé (et le vérifier sur un exemple)",
        content: String.raw`L'inégalité compare deux nombres que tu sais déjà calculer : le produit scalaire $X \bullet Y = x_1 y_1 + \cdots + x_n y_n$ et le produit des longueurs $\|X\|\,\|Y\|$. Elle affirme que le premier ne dépasse **jamais** le second, en valeur absolue.

Mini-exemple avec $X = (1, 2, 3)^T$ et $Y = (4, 5, 6)^T$ : à gauche, $|X \bullet Y| = |4 + 10 + 18| = 32$ ; à droite, $\|X\|\,\|Y\| = \sqrt{14} \cdot \sqrt{77} \approx 32{,}83$. On a bien $32 \leq 32{,}83$ — et de peu, car les deux vecteurs pointent presque dans la même direction.

📖 **Rappel.** $\|X\| = \sqrt{X \bullet X}$, donc $\|X\|^2 = X \bullet X$ : c'est cette version « au carré » qu'on manipule dans toute la preuve. Plus tard (§5 du cours), Cauchy–Schwarz permettra justement de définir l'angle par $\cos \theta = \frac{X \bullet Y}{\|X\|\,\|Y\|}$ ; la preuve doit donc se débrouiller **sans** parler d'angle.`,
      },
      {
        title: "Évacuer le cas trivial : X = O ou Y = O",
        content: String.raw`Si $X = O$ ou $Y = O$, les deux membres valent $0$ : un produit scalaire avec le vecteur nul est nul, et $\|O\| = 0$. L'inégalité devient $0 \leq 0$ — vraie. On suppose donc désormais $X \neq O$ et $Y \neq O$.

Pourquoi ce détour dès la première ligne ? Parce que l'argument central de la preuve (le discriminant d'une parabole) exige un coefficient dominant **strictement positif** : $\|X\|^2 > 0$. Ce n'est garanti que si $X \neq O$. Traiter le cas nul à part n'est pas une coquetterie : sans lui, la preuve a un trou logique.`,
      },
      {
        title: "L'astuce de départ : pourquoi introduire ‖λX + Y‖² ?",
        content: String.raw`C'est **le** point de départ à mémoriser. On prend un réel $\lambda$ quelconque et on considère le vecteur $\lambda X + Y$. Une norme au carré étant toujours positive ou nulle :

$$\|\lambda X + Y\|^2 \;\geq\; 0 \qquad \text{pour tout } \lambda \in \mathbb{R}$$

D'où vient l'idée ? On cherche une inégalité qui mélange $X$ et $Y$, et la seule source d'inégalités dont on dispose est la positivité du produit scalaire : $Z \bullet Z \geq 0$ pour **tout** vecteur $Z$. On l'applique donc à un vecteur qui combine $X$ et $Y$. Le paramètre libre $\lambda$ est la vraie astuce : au lieu d'une seule inégalité, on en obtient une **infinité** (une par valeur de $\lambda$), et c'est cette infinité qui va contraindre le discriminant à l'étape 6.

📖 **Rappel (positivité, slide 183).** Pour tout vecteur $Z$ : $Z \bullet Z = z_1^2 + \cdots + z_n^2 \geq 0$, avec égalité si et seulement si $Z = O$. Et $\|Z\|^2 = Z \bullet Z$.`,
      },
      {
        title: "Développer avec la bilinéarité du produit scalaire",
        content: String.raw`On développe $(\lambda X + Y) \bullet (\lambda X + Y)$ comme un produit remarquable, en distribuant terme à terme :

$$\|\lambda X + Y\|^2 = \lambda^2\,(X \bullet X) + \lambda\,(X \bullet Y) + \lambda\,(Y \bullet X) + Y \bullet Y = \lambda^2\,\|X\|^2 + 2\lambda\,(X \bullet Y) + \|Y\|^2$$

Les deux termes croisés $\lambda\,(X \bullet Y)$ et $\lambda\,(Y \bullet X)$ sont égaux par commutativité : c'est de là que vient le facteur $2$.

📖 **Rappel (bilinéarité et symétrie, slide 183).** $(X + Y) \bullet Z = X \bullet Z + Y \bullet Z$, $(rX) \bullet Y = r\,(X \bullet Y)$ et $X \bullet Y = Y \bullet X$. Ce sont ces règles qui autorisent le développement « comme à l'école » — et c'est exactement la justification à écrire sur la copie.`,
      },
      {
        title: "Changer de regard : un trinôme du second degré en λ",
        content: String.raw`Les vecteurs $X$ et $Y$ sont **fixés** : $\|X\|^2$, $X \bullet Y$ et $\|Y\|^2$ sont des constantes. La seule quantité qui varie est $\lambda$, et le développement précédent est un trinôme :

$$f(\lambda) = a\,\lambda^2 + b\,\lambda + c \qquad \text{avec} \quad a = \|X\|^2, \quad b = 2\,(X \bullet Y), \quad c = \|Y\|^2$$

Comme $X \neq O$ (étape 2), on a $a = \|X\|^2 > 0$ : c'est une **vraie parabole**, tournée vers le haut. Ce changement de point de vue — lire une expression vectorielle comme un polynôme d'une variable réelle — est l'idée brillante de la preuve.`,
      },
      {
        title: "L'argument clé : une parabole positive a un discriminant négatif ou nul",
        content: String.raw`D'après l'étape 3, $f(\lambda) \geq 0$ pour **tout** $\lambda$ : la parabole ne descend jamais strictement sous l'axe horizontal. Or une parabole tournée vers le haut qui possède deux racines réelles distinctes est **strictement négative entre ses deux racines**. C'est impossible ici : $f$ admet donc au plus une racine (double), ce qui se traduit sur le discriminant (le « réalisant » du cours) par

$$\Delta = b^2 - 4ac \;\leq\; 0$$

Si tu hésites sur le sens de l'inégalité : $\Delta > 0$ signifierait deux racines distinctes, donc un passage sous l'axe — contradiction avec $f(\lambda) \geq 0$ pour tout $\lambda$. Phrase-mémo du cours : « une parabole positive a un discriminant négatif ».`,
      },
      {
        title: "Remplacer a, b, c puis prendre la racine carrée",
        content: String.raw`On remplace $a$, $b$ et $c$ par leurs valeurs :

$$\Delta = 4\,(X \bullet Y)^2 - 4\,\|X\|^2\,\|Y\|^2 \leq 0 \quad\iff\quad (X \bullet Y)^2 \leq \|X\|^2\,\|Y\|^2$$

Les deux membres sont positifs : on peut prendre la racine carrée en conservant l'inégalité. Attention au réflexe : $\sqrt{t^2} = |t|$ (et non $t$), d'où la valeur absolue de l'énoncé :

$$|X \bullet Y| \;\leq\; \|X\|\,\|Y\|$$

Remarque pour comprendre (hors examen) : le cas d'égalité correspond à $\Delta = 0$, c'est-à-dire à une racine double $\lambda_0$ telle que $\|\lambda_0 X + Y\| = 0$, donc $Y = -\lambda_0 X$ : l'égalité a lieu quand les deux vecteurs sont alignés — cohérent avec l'exemple de l'étape 1.`,
      },
    ],
    examProof: String.raw`**Théorème (inégalité de Cauchy–Schwarz).** Quels que soient les vecteurs $X$ et $Y$ de $\mathbb{R}^n$ :

$$|X \bullet Y| \;\leq\; \|X\|\,\|Y\|$$

**Preuve.** Si $X = O$ ou $Y = O$, les deux membres valent $0$ et l'inégalité est vérifiée. Supposons désormais $X \neq O$ et $Y \neq O$.

Soit $\lambda \in \mathbb{R}$. Une norme au carré étant toujours positive ou nulle, on a

$$\|\lambda X + Y\|^2 \;\geq\; 0 \qquad \text{pour tout } \lambda \in \mathbb{R}.$$

On développe grâce aux propriétés du produit scalaire (distributivité, homogénéité, commutativité) :

$$\|\lambda X + Y\|^2 = (\lambda X + Y) \bullet (\lambda X + Y) = \lambda^2\,\|X\|^2 + 2\lambda\,(X \bullet Y) + \|Y\|^2.$$

Le membre de droite est un polynôme du second degré en $\lambda$,

$$f(\lambda) = a\,\lambda^2 + b\,\lambda + c \qquad \text{avec} \quad a = \|X\|^2, \quad b = 2\,(X \bullet Y), \quad c = \|Y\|^2,$$

où $a = \|X\|^2 > 0$ car $X \neq O$, et qui vérifie $f(\lambda) \geq 0$ pour tout $\lambda \in \mathbb{R}$.

La parabole ne passant jamais strictement sous l'axe, $f$ ne peut pas admettre deux racines réelles distinctes (sinon $f$ serait strictement négative entre ces racines). Son discriminant est donc négatif ou nul :

$$\Delta = b^2 - 4ac = 4\,(X \bullet Y)^2 - 4\,\|X\|^2\,\|Y\|^2 \;\leq\; 0,$$

d'où

$$(X \bullet Y)^2 \;\leq\; \|X\|^2\,\|Y\|^2.$$

Les deux membres étant positifs, on prend la racine carrée en utilisant $\sqrt{t^2} = |t|$ :

$$|X \bullet Y| \;\leq\; \|X\|\,\|Y\|. \qquad \blacksquare$$`,
    pitfalls: [
      String.raw`Oublier le cas $X = O$ ou $Y = O$ : sans l'hypothèse $X \neq O$, rien ne garantit $a = \|X\|^2 > 0$, et l'argument du discriminant ne s'applique plus (ce n'est plus une vraie parabole).`,
      String.raw`Oublier de préciser que $f(\lambda) \geq 0$ **pour tout** $\lambda$ : c'est le cœur de l'argument — une parabole positive en un seul point ne dit strictement rien sur son discriminant.`,
      String.raw`Écrire $\sqrt{(X \bullet Y)^2} = X \bullet Y$ au lieu de $|X \bullet Y|$ : la racine carrée d'un carré est une **valeur absolue**, et l'énoncé porte bien sur $|X \bullet Y|$.`,
      String.raw`Se tromper de sens sur le discriminant : c'est $\Delta \leq 0$ (au plus une racine réelle), et non $\Delta \geq 0$. Phrase-mémo : « une parabole positive a un discriminant négatif ».`,
    ],
  },
  {
    id: "5.2",
    chapter: 5,
    title: "Inégalité de Minkowski (inégalité triangulaire)",
    slideRef: "Slide 186",
    exam: "Énoncer et prouver l'inégalité de Minkowski",
    statement: String.raw`**Théorème (inégalité de Minkowski — inégalité triangulaire).** Quels que soient les vecteurs $X$ et $Y$ de $\mathbb{R}^n$ :

$$\|X + Y\| \;\leq\; \|X\| + \|Y\|$$`,
    intuition: String.raw`Comme les racines carrées se manipulent mal, on compare les **carrés** : on développe $\|X + Y\|^2$, on majore le double produit $2\,X \bullet Y$ par $2\,|X \bullet Y|$ puis par $2\,\|X\|\,\|Y\|$ grâce à Cauchy–Schwarz, on reconnaît le carré parfait $(\|X\| + \|Y\|)^2$, et on termine en prenant la racine.`,
    steps: [
      {
        title: "Comprendre l'énoncé : le chemin direct est le plus court",
        content: String.raw`Pour aller de l'origine au point $X + Y$, passer « en ligne droite » coûte $\|X + Y\|$ ; faire le détour par $X$ puis $Y$ coûte $\|X\| + \|Y\|$. L'inégalité de Minkowski dit que la ligne droite est toujours la plus courte. C'est la règle du triangle — un côté est plus court que la somme des deux autres — d'où son autre nom : **inégalité triangulaire**.

Mini-exemple avec $X = (1, 2, 3)^T$ et $Y = (4, 5, 6)^T$ : on a $X + Y = (5, 7, 9)^T$, donc $\|X + Y\| = \sqrt{25 + 49 + 81} = \sqrt{155} \approx 12{,}45$, tandis que $\|X\| + \|Y\| = \sqrt{14} + \sqrt{77} \approx 12{,}52$. On a bien $12{,}45 \leq 12{,}52$ — c'est serré, car $X$ et $Y$ sont presque alignés : le « triangle » est presque plat.`,
      },
      {
        title: "La stratégie : comparer les carrés",
        content: String.raw`Impossible de développer directement $\|X + Y\|$ : une racine carrée d'une somme ne se simplifie pas. En revanche, $\|X + Y\|^2 = (X + Y) \bullet (X + Y)$ se développe très bien. On va donc prouver l'inégalité **au carré**, $\|X + Y\|^2 \leq (\|X\| + \|Y\|)^2$, puis revenir aux normes à la toute fin (étape 6, avec une justification indispensable).

Le plan complet, dans l'ordre — c'est la phrase-mémo du cours : « développer, valeur absolue, Cauchy–Schwarz, carré parfait » :

- développer $\|X + Y\|^2$ ;
- majorer $X \bullet Y \leq |X \bullet Y|$ ;
- majorer $|X \bullet Y| \leq \|X\|\,\|Y\|$ (Cauchy–Schwarz) ;
- reconnaître le carré parfait, puis prendre la racine.

Tu vois au passage pourquoi Minkowski se prouve **après** Cauchy–Schwarz : elle s'appuie dessus.`,
      },
      {
        title: "Développer ‖X + Y‖²",
        content: String.raw`📖 **Rappel.** $\|Z\|^2 = Z \bullet Z \geq 0$, et le produit scalaire se développe par bilinéarité (distributivité et homogénéité), avec $X \bullet Y = Y \bullet X$ (commutativité) : les deux termes croisés fusionnent en un facteur $2$.

$$\|X + Y\|^2 = (X + Y) \bullet (X + Y) = \|X\|^2 + 2\,X \bullet Y + \|Y\|^2$$

Compare avec l'objectif $(\|X\| + \|Y\|)^2 = \|X\|^2 + 2\,\|X\|\,\|Y\| + \|Y\|^2$ : les termes extrêmes coïncident déjà ! Tout se joue sur le terme du milieu — il faut majorer $X \bullet Y$ par $\|X\|\,\|Y\|$. Et majorer un produit scalaire par un produit de normes, c'est exactement le métier de Cauchy–Schwarz.`,
      },
      {
        title: "Première majoration : un nombre est plus petit que sa valeur absolue",
        content: String.raw`Petit obstacle avant d'utiliser Cauchy–Schwarz : le théorème du slide 185 majore $|X \bullet Y|$, **pas** $X \bullet Y$ (qui peut très bien être négatif). On intercale donc l'inégalité élémentaire $a \leq |a|$, vraie pour tout réel $a$ :

$$\|X\|^2 + 2\,X \bullet Y + \|Y\|^2 \;\leq\; \|X\|^2 + 2\,|X \bullet Y| + \|Y\|^2$$

Cette ligne paraît anodine, mais elle est **obligatoire** : sans elle, appliquer Cauchy–Schwarz directement à $X \bullet Y$ est formellement faux — et c'est précisément une étape que le correcteur cherche sur la copie.`,
      },
      {
        title: "Deuxième majoration : Cauchy–Schwarz",
        content: String.raw`On applique maintenant l'inégalité de Cauchy–Schwarz (slide 185), $|X \bullet Y| \leq \|X\|\,\|Y\|$, au terme du milieu :

$$\|X\|^2 + 2\,|X \bullet Y| + \|Y\|^2 \;\leq\; \|X\|^2 + 2\,\|X\|\,\|Y\| + \|Y\|^2$$

À l'examen, nomme le théorème au moment précis où tu l'utilises (« par l'inégalité de Cauchy–Schwarz… ») : c'est une justification attendue, pas un détail. Note bien la logique du chapitre : Cauchy–Schwarz d'abord (slide 185), Minkowski ensuite (slide 186), car la seconde consomme la première.`,
      },
      {
        title: "Carré parfait, puis racine carrée (en justifiant)",
        content: String.raw`Le membre de droite est une identité remarquable, $a^2 + 2ab + b^2 = (a + b)^2$ avec $a = \|X\|$ et $b = \|Y\|$ :

$$\|X\|^2 + 2\,\|X\|\,\|Y\| + \|Y\|^2 = \left(\|X\| + \|Y\|\right)^2 \qquad \text{d'où} \qquad \|X + Y\|^2 \leq \left(\|X\| + \|Y\|\right)^2$$

Dernier geste : « enlever les carrés ». On en a le droit **parce que** les deux membres sont positifs ou nuls et que la fonction racine carrée est croissante sur $[0, +\infty[$ : elle conserve donc l'ordre, et $\|X + Y\| \leq \|X\| + \|Y\|$.

Sans la positivité, cette déduction serait fausse en général : $3^2 \leq (-5)^2$ et pourtant $3 > -5$. Ici, tout est une norme ou une somme de normes, donc positif — écris-le sur ta copie.`,
      },
    ],
    examProof: String.raw`**Théorème (inégalité de Minkowski — inégalité triangulaire).** Quels que soient les vecteurs $X$ et $Y$ de $\mathbb{R}^n$ :

$$\|X + Y\| \;\leq\; \|X\| + \|Y\|$$

**Preuve.** On développe le carré de la norme grâce aux propriétés du produit scalaire (distributivité, homogénéité, commutativité) :

$$\|X + Y\|^2 = (X + Y) \bullet (X + Y) = \|X\|^2 + 2\,X \bullet Y + \|Y\|^2.$$

Tout nombre réel étant inférieur ou égal à sa valeur absolue ($a \leq |a|$) :

$$\|X\|^2 + 2\,X \bullet Y + \|Y\|^2 \;\leq\; \|X\|^2 + 2\,|X \bullet Y| + \|Y\|^2.$$

Par l'inégalité de Cauchy–Schwarz, $|X \bullet Y| \leq \|X\|\,\|Y\|$, donc

$$\|X\|^2 + 2\,|X \bullet Y| + \|Y\|^2 \;\leq\; \|X\|^2 + 2\,\|X\|\,\|Y\| + \|Y\|^2 = \left(\|X\| + \|Y\|\right)^2.$$

En combinant ces inégalités, on obtient

$$\|X + Y\|^2 \;\leq\; \left(\|X\| + \|Y\|\right)^2.$$

Les deux membres étant positifs ou nuls et la fonction racine carrée étant croissante sur $[0, +\infty[$, on en déduit

$$\|X + Y\| \;\leq\; \|X\| + \|Y\|. \qquad \blacksquare$$`,
    pitfalls: [
      String.raw`Appliquer Cauchy–Schwarz directement à $X \bullet Y$ en sautant l'étape $a \leq |a|$ : Cauchy–Schwarz majore $|X \bullet Y|$, pas $X \bullet Y$ (qui peut être négatif). L'étape « valeur absolue » doit apparaître noir sur blanc.`,
      String.raw`Prendre la racine carrée sans justification : de $u^2 \leq v^2$ on ne peut déduire $u \leq v$ que si les deux membres sont positifs ou nuls ($3^2 \leq (-5)^2$ et pourtant $3 > -5$). Écrire que les deux membres sont $\geq 0$ et que la racine carrée est croissante.`,
      String.raw`Oublier de citer nommément l'inégalité de Cauchy–Schwarz au moment de la majoration : la preuve de Minkowski s'appuie dessus, et cette justification est attendue par le correcteur.`,
      String.raw`Casser l'ordre de la chaîne : développer, puis $a \leq |a|$, puis Cauchy–Schwarz, puis carré parfait, puis racine. Inverser deux étapes ou en omettre une détruit la logique de l'enchaînement.`,
    ],
  },
];
