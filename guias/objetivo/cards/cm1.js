/* Flashcards · Matemática · M1 (Números e operações) */
const CARDS_M1 = [
/* ---------- m-pct (12) ---------- */
 {t:'m-pct', k:'conceito', f:`O que quer dizer 35%?`, b:`<b>35 de cada 100: [[35|100]] = 0,35.</b><br>Para achar 35% de um valor, multiplique o valor por 0,35.`},
 {t:'m-pct', k:'regra', f:`Qual é o fator multiplicador de um <b>aumento</b> de i%?`, b:`<b>1 + [[i|100]]</b><br>Ex.: aumento de 15% → × 1,15 (100% + 15%).`},
 {t:'m-pct', k:'regra', f:`Qual é o fator multiplicador de um <b>desconto</b> de i%?`, b:`<b>1 − [[i|100]]</b><br>Ex.: desconto de 15% → × 0,85 (100% − 15%).`},
 {t:'m-pct', k:'regra', f:`Fórmula da taxa de variação percentual?`, b:`<b>[[novo − antigo|antigo]] · 100</b><br>A base é sempre o valor <b>antigo</b>.`},
 {t:'m-pct', k:'conceito', f:`Percentuais sucessivos: soma as porcentagens ou multiplica os fatores?`, b:`<b>Multiplica os fatores.</b><br>Cada nova porcentagem é calculada sobre o valor atual, não sobre o original.`},
 {t:'m-pct', k:'exemplo', f:`Multiplicar um preço por 0,93 equivale a quê?`, b:`<b>Desconto de 7%.</b><br>0,93 = 93% do preço → 100% − 93% = 7% a menos.`},
 {t:'m-pct', k:'conta', f:`20% de 45?`, b:`<b>9</b><br>0,2 × 45 = 9.`},
 {t:'m-pct', k:'conta', f:`25% de 120?`, b:`<b>30</b><br>25% = [[1|4]] → 120 ÷ 4 = 30.`},
 {t:'m-pct', k:'conta', f:`Um produto de R$ 50,00 com 10% de desconto sai por quanto?`, b:`<b>R$ 45,00</b><br>Fator 0,9: 50 × 0,9 = 45.`},
 {t:'m-pct', k:'conta', f:`O preço passou de R$ 40,00 para R$ 50,00. Aumento de quantos %?`, b:`<b>25%</b><br>Subiu 10 sobre 40: 10 ÷ 40 = 0,25.`},
 {t:'m-pct', k:'pegadinha', f:`Aumentar 20% e depois descontar 20% volta ao preço original?`, b:`<b>Não!</b> 1,2 × 0,8 = 0,96: o preço final fica <b>4% menor</b>.`},
 {t:'m-pct', k:'pegadinha', f:`Dois aumentos seguidos de 10% dão aumento total de 20%?`, b:`<b>Não! Dão 21%.</b><br>1,1 × 1,1 = 1,21. O 2º aumento é calculado sobre o preço já aumentado.`},

/* ---------- m-frac (12) ---------- */
 {t:'m-frac', k:'regra', f:`Como dividir uma fração por outra?`, b:`<b>Mantém a 1ª, inverte a 2ª e multiplica (MIM).</b><br>[[a|b]] ÷ [[c|d]] = [[a|b]] × [[d|c]]`},
 {t:'m-frac', k:'regra', f:`Como somar frações com denominadores diferentes?`, b:`<b>Iguale os denominadores com o MMC</b> e some só os numeradores.<br>Ex.: [[2|3]] + [[1|4]] = [[8|12]] + [[3|12]] = [[11|12]].`},
 {t:'m-frac', k:'regra', f:`Como calcular [[a|b]] de uma quantidade N?`, b:`<b>Divide N pelo de baixo (b) e multiplica pelo de cima (a).</b><br>Ex.: [[3|4]] de 60 = 60 ÷ 4 × 3 = 45.`},
 {t:'m-frac', k:'conceito', f:`Qual é o jeito mais seguro de comparar frações diferentes?`, b:`<b>Transformar em decimal</b> (dividir o de cima pelo de baixo).<br>Ex.: [[5|8]] = 0,625 e [[2|3]] ≈ 0,667 → [[2|3]] é maior.`},
 {t:'m-frac', k:'exemplo', f:`Qual fração corresponde a 0,75?`, b:`<b>[[3|4]]</b><br>0,75 = [[75|100]] = [[3|4]] (dividindo por 25).`},
 {t:'m-frac', k:'exemplo', f:`“Gastou [[1|3]] do total e depois [[1|2]] <b>do que sobrou</b>.” O [[1|2]] é calculado sobre qual base?`, b:`<b>Sobre o que sobrou ([[2|3]] do total).</b><br>[[1|2]] de [[2|3]] = [[1|3]] do total.`},
 {t:'m-frac', k:'conta', f:`[[2|3]] de 30?`, b:`<b>20</b><br>30 ÷ 3 = 10; 10 × 2 = 20.`},
 {t:'m-frac', k:'conta', f:`[[1|4]] + [[1|6]]?`, b:`<b>[[5|12]]</b><br>MMC(4, 6) = 12: [[3|12]] + [[2|12]] = [[5|12]].`},
 {t:'m-frac', k:'conta', f:`[[2|5]] × [[3|4]]?`, b:`<b>[[3|10]]</b><br>[[2 × 3|5 × 4]] = [[6|20]] = [[3|10]].`},
 {t:'m-frac', k:'conta', f:`[[3|4]] ÷ [[1|2]]?`, b:`<b>[[3|2]]</b><br>[[3|4]] × [[2|1]] = [[6|4]] = [[3|2]] (= 1,5).`},
 {t:'m-frac', k:'pegadinha', f:`[[1|2]] + [[1|3]] = [[2|5]]?`, b:`<b>Não! É [[5|6]].</b><br>Nunca some numerador com numerador e denominador com denominador: [[3|6]] + [[2|6]] = [[5|6]].`},
 {t:'m-frac', k:'pegadinha', f:`Para multiplicar frações, é preciso igualar os denominadores?`, b:`<b>Não!</b> Multiplica de cima com de cima e de baixo com de baixo. Igualar denominadores é só para somar ou subtrair.`},

/* ---------- m-reais (8) ---------- */
 {t:'m-reais', k:'conceito', f:`O que é um número racional?`, b:`<b>É o que pode ser escrito como fração [[a|b]], com b ≠ 0.</b><br>Inteiros, decimais finitos (2,75) e dízimas periódicas (0,333…).`},
 {t:'m-reais', k:'conceito', f:`O que é um número irracional?`, b:`<b>Decimal infinito e não periódico</b> (não pode ser escrito como fração).<br>Ex.: √{2} = 1,4142…, √{3}, π.`},
 {t:'m-reais', k:'regra', f:`Ordem de inclusão dos conjuntos ℕ, ℤ, ℚ e ℝ?`, b:`<b>ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ</b><br>Os irracionais são os reais que ficam fora de ℚ.`},
 {t:'m-reais', k:'exemplo', f:`√{16} é racional ou irracional?`, b:`<b>Racional</b>, pois √{16} = 4.<br>Só é irracional a raiz que não dá exata.`},
 {t:'m-reais', k:'conta', f:`√{40} está entre quais inteiros consecutivos?`, b:`<b>Entre 6 e 7.</b><br>36 &lt; 40 &lt; 49 → 6 &lt; √{40} &lt; 7.`},
 {t:'m-reais', k:'conta', f:`Fração geratriz de 0,444…?`, b:`<b>[[4|9]]</b><br>Período de 1 algarismo → um 9 embaixo.`},
 {t:'m-reais', k:'conta', f:`Fração geratriz de 0,121212…?`, b:`<b>[[4|33]]</b><br>[[12|99]], simplificando por 3 = [[4|33]].`},
 {t:'m-reais', k:'pegadinha', f:`3,14 é igual a π?`, b:`<b>Não!</b> 3,14 é racional (decimal finito), só uma <b>aproximação</b> de π, que é irracional.`},

/* ---------- m-pot (8) ---------- */
 {t:'m-pot', k:'regra', f:`Quanto vale a<sup>−n</sup> (a ≠ 0)?`, b:`<b>[[1|a<sup>n</sup>]]</b><br>O expoente negativo inverte a base; não deixa o número negativo.`},
 {t:'m-pot', k:'regra', f:`Como escrever a<sup>m/n</sup> com raiz?`, b:`<b>Raiz de índice n de a<sup>m</sup>.</b><br>“Quem está embaixo mora na raiz.” Ex.: 25<sup>1/2</sup> = √{25} = 5.`},
 {t:'m-pot', k:'conta', f:`3<sup>−2</sup>?`, b:`<b>[[1|9]]</b><br>3<sup>−2</sup> = [[1|3<sup>2</sup>]] = [[1|9]].`},
 {t:'m-pot', k:'conta', f:`27<sup>2/3</sup>?`, b:`<b>9</b><br>Raiz cúbica de 27 = 3; depois 3<sup>2</sup> = 9.`},
 {t:'m-pot', k:'conta', f:`Simplifique √{50}.`, b:`<b>5√{2}</b><br>√{50} = √{25 · 2} = 5√{2}.`},
 {t:'m-pot', k:'exemplo', f:`Racionalize [[8|√{2}]].`, b:`<b>4√{2}</b><br>Multiplique em cima e embaixo por √{2}: [[8√{2}|2]] = 4√{2}.`},
 {t:'m-pot', k:'pegadinha', f:`−3<sup>2</sup> é igual a 9?`, b:`<b>Não! −3<sup>2</sup> = −9.</b><br>Sem parênteses, só o 3 é elevado. Já (−3)<sup>2</sup> = 9.`},
 {t:'m-pot', k:'pegadinha', f:`2<sup>3</sup> · 2<sup>4</sup> = 2<sup>12</sup>?`, b:`<b>Não! É 2<sup>7</sup>.</b><br>Mesma base multiplicando: <b>soma</b> os expoentes (3 + 4). Multiplica expoentes só em (a<sup>m</sup>)<sup>n</sup>.`},

/* ---------- m-cient (8) ---------- */
 {t:'m-cient', k:'regra', f:`Qual é a forma da notação científica?`, b:`<b>a × 10<sup>n</sup>, com 1 ≤ a &lt; 10.</b><br>Ex.: 150 000 000 = 1,5 × 10<sup>8</sup>.`},
 {t:'m-cient', k:'regra', f:`Como multiplicar dois números em notação científica?`, b:`<b>Multiplica os números e soma os expoentes.</b><br>Na divisão: divide os números e subtrai os expoentes. Depois ajuste para 1 ≤ a &lt; 10.`},
 {t:'m-cient', k:'conceito', f:`Número menor que 1 em notação científica: expoente positivo ou negativo?`, b:`<b>Negativo.</b><br>Número grande, expoente positivo; número miudinho, expoente negativo.`},
 {t:'m-cient', k:'exemplo', f:`Qual potência de 10 vale o prefixo micro (µ)?`, b:`<b>10<sup>−6</sup></b><br>Mili = 10<sup>−3</sup>, micro = 10<sup>−6</sup>, nano = 10<sup>−9</sup>.`},
 {t:'m-cient', k:'conta', f:`4 500 000 em notação científica?`, b:`<b>4,5 × 10<sup>6</sup></b><br>A vírgula andou 6 casas para a esquerda.`},
 {t:'m-cient', k:'conta', f:`0,0007 em notação científica?`, b:`<b>7 × 10<sup>−4</sup></b><br>A vírgula andou 4 casas para a direita.`},
 {t:'m-cient', k:'conta', f:`(2 × 10<sup>4</sup>) × (3 × 10<sup>5</sup>)?`, b:`<b>6 × 10<sup>9</sup></b><br>2 × 3 = 6 e 4 + 5 = 9.`},
 {t:'m-cient', k:'pegadinha', f:`0,5 × 10<sup>4</sup> está em notação científica?`, b:`<b>Não!</b> 0,5 é menor que 1. O certo é <b>5 × 10<sup>3</sup></b> (mesmo valor: 5 000).`},

/* ---------- m-mmc (8) ---------- */
 {t:'m-mmc', k:'conceito', f:`“Vão se encontrar de novo”, “acontecem juntos outra vez”: MMC ou MDC?`, b:`<b>MMC</b> (mínimo múltiplo comum).<br>“Mais à frente eles se encontram.”`},
 {t:'m-mmc', k:'conceito', f:`“Dividir em partes iguais, do maior tamanho possível, sem sobra”: MMC ou MDC?`, b:`<b>MDC</b> (máximo divisor comum).<br>“Divide em pedaços.”`},
 {t:'m-mmc', k:'regra', f:`Pela fatoração, como se acham o MMC e o MDC?`, b:`<b>MMC: todos os fatores, com o maior expoente.<br>MDC: só os fatores comuns, com o menor expoente.</b>`},
 {t:'m-mmc', k:'exemplo', f:`234 é divisível por 9?`, b:`<b>Sim.</b><br>2 + 3 + 4 = 9, e a soma dos algarismos é divisível por 9.`},
 {t:'m-mmc', k:'conta', f:`MMC(6, 8)?`, b:`<b>24</b><br>6 = 2 · 3 e 8 = 2<sup>3</sup> → 2<sup>3</sup> · 3 = 24.`},
 {t:'m-mmc', k:'conta', f:`MDC(18, 30)?`, b:`<b>6</b><br>18 = 2 · 3<sup>2</sup> e 30 = 2 · 3 · 5 → 2 · 3 = 6.`},
 {t:'m-mmc', k:'conta', f:`Se a · b = 96 e MDC(a, b) = 4, quanto vale o MMC(a, b)?`, b:`<b>24</b><br>MMC × MDC = a × b → MMC = 96 ÷ 4 = 24.`},
 {t:'m-mmc', k:'pegadinha', f:`O número 1 é primo?`, b:`<b>Não!</b> Primo tem exatamente dois divisores (1 e ele mesmo). O 1 tem só um divisor.`}
];
