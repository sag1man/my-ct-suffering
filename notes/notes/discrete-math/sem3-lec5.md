# Раскраска графа
$G = <\forall, \exists>$
$c: V \to \{1, ..., k\}$

Хроматическое число
$$\chi (G), \text{где} G_n = K_n$$
$$\chi (G_1) = 1 \qquad
\chi (G_2) = 2$$
$$k>= \geq 3 \chi(G) <= k - NPC$$

Количество способов раскрасить граф в K цветов
Pa(k) - хроматический многочлен
Попробуем с $K_3$:
$$P_{K_3}(t)=t(t-1)(t-2)$$
$$P_{K_n} = t^{\underline{n}}$$

Теорема
Граф - дерево $\iff$ $P_G(t) = t(t-1)^{n-1}$
$$t^n - (n-1)t^{n-1} + ... +- t$$

$$\omega(G) \text{ - максимальный подграф - клика}$$
$$\omega(G) <= \chi(G)$$
$$\omega(C_5) = 2 \qquad \chi(C_5) = 3$$

$$\Delta(G) \text{- максимальная степень в} G$$

Лемма 1: $\chi (G) <= \Delta(G) + 1$

Лемма 2: $\text{Если } \delta(G) != \Delta(G), \text{ то } \chi(G) <= \Delta(G)$

Теорема (Брукс):  $G$ - связный граф,
$$G \neq K_n, G_1 \neq C_{2n + 1}$$
$$\text{то } \chi(G) \leq \Delta(G)$$
$$d = \delta(G) = \Delta(G)$$
$$d \geq 3$$
$$(u, v) \notin E$$