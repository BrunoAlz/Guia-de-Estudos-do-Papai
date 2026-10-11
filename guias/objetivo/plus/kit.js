/* Kit básico: o que não pode esquecer — cola de sobrevivência para o Desafio Objetivo (17/10, sem calculadora)
   Formato: {id, n (nome), ic (ícone), area ('mat'|'por'|'geral'), it:[[título, explicação com exemplo em HTML], ...]}
   Notação: [[a|b]] = fração · √{x} = raiz com barra · <sup> = expoente · tabelas com class="tb"
   Todas as contas conferidas em plus/check_kit.py */
const KIT = [

/* ===================== 1. CONTAS DE CABEÇA ===================== */
{id:'k-conta', n:'Contas de cabeça', ic:'🧮', area:'mat', it:[
 [`Tabuada do 9 com os dedos`,
  `Abra as duas mãos na mesa (10 dedos). Para 9 × 7, abaixe o <b>7º dedo</b> (contando da esquerda). Dedos à esquerda dele = dezenas (6), dedos à direita = unidades (3) → <b>63</b>.<br>Confere: os algarismos sempre somam 9 (6 + 3 = 9) e a dezena é "o número menos 1" (9 × 4 → 3 e 6 → <b>36</b>).`],
 [`× 5 = × 10 e depois ÷ 2`,
  `Multiplicar por 5 é o mesmo que multiplicar por 10 e pegar a metade.<br>48 × 5 → 480 ÷ 2 = <b>240</b>.<br>3,6 × 5 → 36 ÷ 2 = <b>18</b>.`],
 [`÷ 5 = × 2 e depois ÷ 10`,
  `Dividir por 5 é dobrar e andar a vírgula uma casa para a esquerda.<br>85 ÷ 5 → 170 ÷ 10 = <b>17</b>.<br>340 ÷ 5 → 680 ÷ 10 = <b>68</b>.`],
 [`× 11 (número de 2 algarismos)`,
  `Separe os dois algarismos e coloque a <b>soma</b> deles no meio.<br>34 × 11 → 3 _ 4, meio = 3 + 4 = 7 → <b>374</b>.<br>Se a soma passar de 9, "vai 1" para a esquerda: 78 × 11 → 7 _ 8, meio = 15 → 7+1 | 5 | 8 = <b>858</b>.`],
 [`× 25 = × 100 e depois ÷ 4`,
  `Porque 25 = [[100|4]] (quatro moedas de 25 centavos dão 1 real).<br>36 × 25 → 3600 ÷ 4 = <b>900</b>.<br>48 × 25 → 4800 ÷ 4 = <b>1200</b>.`],
 [`× 99 e × 9: multiplique pelo redondo e tire 1 vez`,
  `× 99 = × 100 menos uma vez o número. 23 × 99 → 2300 − 23 = <b>2277</b>.<br>× 9 = × 10 menos uma vez. 47 × 9 → 470 − 47 = <b>423</b>.`],
 [`Decompor: troque por um número redondo`,
  `7 × 38 = 7 × 40 − 7 × 2 = 280 − 14 = <b>266</b>.<br>6 × 53 = 6 × 50 + 6 × 3 = 300 + 18 = <b>318</b>.<br>Use o redondo mais perto e corrija a diferença.`],
 [`Dobrar um e dividir o outro pela metade`,
  `O resultado não muda, e a conta fica "redonda".<br>16 × 35 → 8 × 70 = <b>560</b>.<br>14 × 45 → 7 × 90 = <b>630</b>.`],
 [`Quadrado de número terminado em 5`,
  `Pegue o que vem antes do 5, multiplique pelo seguinte e cole <b>25</b> no fim.<br>35<sup>2</sup> → 3 × 4 = 12 → <b>1225</b>.<br>65<sup>2</sup> → 6 × 7 = 42 → <b>4225</b>.<br>85<sup>2</sup> → 8 × 9 = 72 → <b>7225</b>.`],
 [`Somar e subtrair arredondando`,
  `398 + 247 → 400 + 247 = 647, mas eu somei 2 a mais → 647 − 2 = <b>645</b>.<br>503 − 198 → 503 − 200 = 303, mas tirei 2 a mais → 303 + 2 = <b>305</b>.`],
 [`× 4 e ÷ 4: dobro do dobro, metade da metade`,
  `37 × 4 → dobro 74 → dobro <b>148</b>.<br>92 ÷ 4 → metade 46 → metade <b>23</b>.<br>Mesma ideia para × 8 (dobrar 3 vezes): 15 × 8 → 30 → 60 → <b>120</b>.`],
 [`Divisão: simplifique antes de dividir`,
  `Divida os dois números pelo mesmo valor: o resultado não muda.<br>840 ÷ 24 → (÷4 nos dois) 210 ÷ 6 = <b>35</b>.<br>Dividir por 0,5 = × 2 (7 ÷ 0,5 = <b>14</b>); dividir por 0,25 = × 4 (3 ÷ 0,25 = <b>12</b>).`]
]},

/* ===================== 2. SINAIS E ORDEM ===================== */
{id:'k-sinal', n:'Sinais e ordem das operações', ic:'➖', area:'mat', it:[
 [`Somar e subtrair com sinais (pense em dinheiro)`,
  `Negativo = dívida, positivo = dinheiro no bolso.<br><b>Sinais iguais:</b> soma e mantém o sinal. −7 − 5 = <b>−12</b> (devo 7 e devo mais 5).<br><b>Sinais diferentes:</b> subtrai e fica o sinal do que tem o maior valor absoluto (o maior "sem o sinal"). −7 + 5 = <b>−2</b>; 9 − 13 = <b>−4</b>.`],
 [`Multiplicar e dividir com sinais`,
  `<b>Sinais iguais → +</b> · <b>sinais diferentes → −</b>.<br>(−3) × (−4) = <b>12</b> · (−20) ÷ 4 = <b>−5</b> · 6 × (−2) = <b>−12</b> · (−18) ÷ (−3) = <b>6</b>.`],
 [`Vários fatores: conte os negativos`,
  `Quantidade <b>par</b> de sinais de menos → resultado positivo; <b>ímpar</b> → negativo.<br>(−1) × (−2) × (−3) = <b>−6</b> (3 negativos).<br>(−2) × (−2) × (−5) × (−1) = <b>20</b> (4 negativos).`],
 [`Menos antes do parêntese troca todos os sinais`,
  `10 − (3 − 8) = 10 − 3 + 8 = <b>15</b>.<br>Confere pelo outro caminho: 3 − 8 = −5, e 10 − (−5) = 10 + 5 = 15. "Menos com menos dá mais."`],
 [`Ordem das operações`,
  `1º parênteses ( ) → colchetes [ ] → chaves { } (de dentro para fora)<br>2º potências e raízes<br>3º × e ÷ (na ordem em que aparecem)<br>4º + e − (na ordem em que aparecem)<br>Ex.: 2 + 3 × 4 = 2 + 12 = <b>14</b> (e não 20!).`],
 [`× e ÷ (ou + e −) juntos: da esquerda para a direita`,
  `Eles têm a mesma "força"; resolva na ordem em que aparecem.<br>24 ÷ 4 × 2 = 6 × 2 = <b>12</b> (e não 24 ÷ 8 = 3).<br>10 − 4 + 3 = 6 + 3 = <b>9</b> (e não 10 − 7 = 3).`],
 [`Expressão completa, passo a passo`,
  `5 + 2 × (8 − 3)<sup>2</sup> − √{16}<br>parêntese: 8 − 3 = 5 → 5 + 2 × 5<sup>2</sup> − √{16}<br>potência e raiz: 5<sup>2</sup> = 25, √{16} = 4 → 5 + 2 × 25 − 4<br>multiplicação: 2 × 25 = 50 → 5 + 50 − 4 = <b>51</b>.`],
 [`De dentro para fora: ( ) → [ ] → { }`,
  `20 − [4 + (6 − 2 × 5)]<br>dentro do ( ): 2 × 5 = 10, 6 − 10 = −4<br>dentro do [ ]: 4 + (−4) = 0<br>fim: 20 − 0 = <b>20</b>.`],
 [`(−2)<sup>2</sup> NÃO é igual a −2<sup>2</sup>`,
  `Com parênteses, o sinal entra na potência: (−2)<sup>2</sup> = (−2) × (−2) = <b>4</b>.<br>Sem parênteses, só o 2 é elevado: −2<sup>2</sup> = −(2 × 2) = <b>−4</b>.<br>Base negativa: expoente par → +, ímpar → −. (−3)<sup>3</sup> = <b>−27</b>; (−1)<sup>10</sup> = <b>1</b>.`],
 [`Regras de potência que salvam tempo`,
  `Qualquer número (≠ 0) elevado a 0 é 1: 7<sup>0</sup> = <b>1</b>. Elevado a 1 é ele mesmo: 7<sup>1</sup> = 7.<br>Mesma base multiplicando → <b>soma</b> os expoentes: 2<sup>3</sup> × 2<sup>2</sup> = 2<sup>5</sup> = <b>32</b>.<br>Mesma base dividindo → <b>subtrai</b>: 3<sup>5</sup> ÷ 3<sup>3</sup> = 3<sup>2</sup> = <b>9</b>.<br>Expoente negativo vira fração: 2<sup>−1</sup> = [[1|2]].`]
]},

/* ===================== 3. FRAÇÕES, DECIMAIS, % ===================== */
{id:'k-frac', n:'Frações, decimais e porcentagens de cor', ic:'🍕', area:'mat', it:[
 [`A tabela que você precisa saber de cor`,
  `<table class="tb"><tr><th>Fração</th><th>Decimal</th><th>%</th></tr>
<tr><td>[[1|2]]</td><td>0,5</td><td>50%</td></tr>
<tr><td>[[1|4]]</td><td>0,25</td><td>25%</td></tr>
<tr><td>[[3|4]]</td><td>0,75</td><td>75%</td></tr>
<tr><td>[[1|5]]</td><td>0,2</td><td>20%</td></tr>
<tr><td>[[2|5]]</td><td>0,4</td><td>40%</td></tr>
<tr><td>[[1|8]]</td><td>0,125</td><td>12,5%</td></tr>
<tr><td>[[1|10]]</td><td>0,1</td><td>10%</td></tr>
<tr><td>[[1|3]]</td><td>0,333...</td><td>≈ 33,3%</td></tr>
<tr><td>[[2|3]]</td><td>0,666...</td><td>≈ 66,7%</td></tr>
<tr><td>[[1|20]]</td><td>0,05</td><td>5%</td></tr>
<tr><td>[[1|25]]</td><td>0,04</td><td>4%</td></tr></table>
Ex.: 25% de 360 = [[1|4]] de 360 = 360 ÷ 4 = <b>90</b>.`],
 [`Porcentagem vira divisão simples`,
  `Use a tabela ao contrário:<br>12,5% de 64 = [[1|8]] de 64 = <b>8</b> · 20% de 45 = 45 ÷ 5 = <b>9</b><br>75% de 48 = 48 ÷ 4 × 3 = <b>36</b> · 5% de 340 = 340 ÷ 20 = <b>17</b> · 4% de 75 = 75 ÷ 25 = <b>3</b>.`],
 [`Simplificar: divida em cima e embaixo pelo mesmo número`,
  `[[45|60]] → ÷ 15 nos dois → <b>[[3|4]]</b>.<br>Não achou o maior divisor? Vá aos poucos: [[48|72]] → ÷ 2 → [[24|36]] → ÷ 12 → <b>[[2|3]]</b>.`],
 [`Somar e subtrair frações`,
  `Mesmo denominador: soma só em cima. [[2|7]] + [[3|7]] = <b>[[5|7]]</b>.<br>Diferentes: iguale pelo MMC. [[1|4]] + [[1|6]] = [[3|12]] + [[2|12]] = <b>[[5|12]]</b>.<br>Nunca some os de baixo: [[1|2]] + [[1|3]] não é [[2|5]].`],
 [`Atalho "borboleta" para somar duas frações`,
  `[[a|b]] + [[c|d]] = [[a×d + b×c|b×d]]. Depois simplifique, se der.<br>[[2|3]] + [[1|5]] = [[2×5 + 3×1|3×5]] = <b>[[13|15]]</b>.<br>[[3|4]] − [[1|3]] = [[9 − 4|12]] = <b>[[5|12]]</b>.`],
 [`Multiplicar: cima × cima, baixo × baixo (corte antes!)`,
  `[[4|9]] × [[3|8]]: corte 4 com 8 (÷ 4) e 3 com 9 (÷ 3) → [[1|3]] × [[1|2]] = <b>[[1|6]]</b>.<br>Sem cortar daria [[12|72]], que também é [[1|6]], só que dá mais trabalho.`],
 [`Dividir: mantém a primeira, inverte a segunda`,
  `[[2|5]] ÷ [[4|15]] = [[2|5]] × [[15|4]] = [[30|20]] = <b>[[3|2]]</b>.<br>Número inteiro ÷ fração: 6 ÷ [[3|4]] = 6 × [[4|3]] = <b>8</b>.`],
 [`Fração de uma quantidade: ÷ embaixo, × em cima`,
  `[[2|3]] de 45 → 45 ÷ 3 = 15 → 15 × 2 = <b>30</b>.<br>[[5|8]] de 72 → 72 ÷ 8 = 9 → 9 × 5 = <b>45</b>.`],
 [`Número misto ↔ fração imprópria`,
  `2 e [[1|3]] → (2 × 3 + 1) sobre 3 = <b>[[7|3]]</b>.<br>[[17|5]] → 17 ÷ 5 = 3 e sobra 2 → <b>3 e [[2|5]]</b>.`],
 [`Comparar frações: multiplicação cruzada`,
  `Qual é maior, [[3|7]] ou [[4|9]]? Cruze: 3 × 9 = 27 e 4 × 7 = 28.<br>O lado do 28 é o da [[4|9]] → <b>[[4|9]] é maior</b>.`],
 [`Multiplicar decimais: tire a vírgula e conte as casas`,
  `0,3 × 0,2 → 3 × 2 = 6; são 2 casas no total → <b>0,06</b>.<br>1,5 × 0,4 → 15 × 4 = 60; 2 casas → 0,60 = <b>0,6</b>.<br>× 10, × 100, × 1000: a vírgula anda para a direita. 3,7 × 100 = <b>370</b>.`],
 [`Dividir decimais: iguale as casas e apague a vírgula`,
  `4,8 ÷ 0,12 → deixe as duas com 2 casas: 4,80 ÷ 0,12 → 480 ÷ 12 = <b>40</b>.<br>6 ÷ 0,5 → 60 ÷ 5 = <b>12</b>.<br>÷ 10, ÷ 100: a vírgula anda para a esquerda. 45 ÷ 100 = <b>0,45</b>.`]
]},

/* ===================== 4. NÚMEROS QUE CAEM SEMPRE ===================== */
{id:'k-num', n:'Números que caem sempre', ic:'🔢', area:'mat', it:[
 [`Quadrados de 1 a 20`,
  `<table class="tb"><tr><th>n</th><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td><td>10</td></tr>
<tr><th>n<sup>2</sup></th><td>1</td><td>4</td><td>9</td><td>16</td><td>25</td><td>36</td><td>49</td><td>64</td><td>81</td><td>100</td></tr>
<tr><th>n</th><td>11</td><td>12</td><td>13</td><td>14</td><td>15</td><td>16</td><td>17</td><td>18</td><td>19</td><td>20</td></tr>
<tr><th>n<sup>2</sup></th><td>121</td><td>144</td><td>169</td><td>196</td><td>225</td><td>256</td><td>289</td><td>324</td><td>361</td><td>400</td></tr></table>
Serve para raiz também: √{196} = <b>14</b>, √{289} = <b>17</b>.`],
 [`Cubos de 1 a 10`,
  `1 · 8 · 27 · 64 · 125 · 216 · 343 · 512 · 729 · 1000.<br>Ex.: um cubo de volume 343 cm<sup>3</sup> tem aresta <b>7 cm</b> (7 × 7 × 7 = 343).`],
 [`Potências de 2 até 2<sup>10</sup>`,
  `2 · 4 · 8 · 16 · 32 · 64 · 128 · 256 · 512 · 1024.<br>Cada uma é o dobro da anterior. 2<sup>10</sup> = <b>1024</b> (quase mil). Ex.: uma bactéria que dobra a cada hora vira <b>64</b> em 6 horas (2<sup>6</sup>).`],
 [`√2, √3 e π aproximados`,
  `√{2} ≈ <b>1,41</b> · √{3} ≈ <b>1,73</b> · π ≈ <b>3,14</b>.<br>Diagonal de um quadrado de lado 10 = 10√{2} ≈ <b>14,1</b>.<br>Altura de triângulo equilátero de lado 2 = √{3} ≈ <b>1,73</b>.`],
 [`Estimar uma raiz que não é exata`,
  `√{50}: 50 fica entre 49 (7<sup>2</sup>) e 64 (8<sup>2</sup>), bem perto do 49 → √{50} ≈ <b>7,1</b>.<br>√{90}: entre 81 e 100, quase no meio → ≈ <b>9,5</b>. Ótimo para eliminar alternativas.`],
 [`Primos até 50`,
  `2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47 (são 15).<br>O <b>1 não é primo</b> e o <b>2 é o único primo par</b>.<br>Pegadinhas que parecem primos mas não são: 51 = 3 × 17, 57 = 3 × 19, 91 = 7 × 13.`],
 [`Divisível por 2, 5 e 10`,
  `<b>2:</b> termina em algarismo par (0, 2, 4, 6, 8) → 3.578 é.<br><b>5:</b> termina em 0 ou 5 → 1.245 é.<br><b>10:</b> termina em 0 → 7.030 é.`],
 [`Divisível por 3 e por 9: some os algarismos`,
  `<b>3:</b> a soma dos algarismos é múltiplo de 3. <b>9:</b> a soma é múltiplo de 9.<br>4.317 → 4 + 3 + 1 + 7 = 15 → divisível por 3 (4.317 ÷ 3 = 1.439), mas <b>não</b> por 9.<br>5.427 → 5 + 4 + 2 + 7 = 18 → divisível por 9 (÷ 9 = 603).`],
 [`Divisível por 4 e por 8: olhe o final`,
  `<b>4:</b> os dois últimos algarismos formam múltiplo de 4. 1.716 → 16 ✔ (1.716 ÷ 4 = 429).<br><b>8:</b> os três últimos formam múltiplo de 8. 3.128 → 128 = 8 × 16 ✔ (3.128 ÷ 8 = 391).`],
 [`Divisível por 6: por 2 E por 3 ao mesmo tempo`,
  `2.334 → é par ✔ e 2 + 3 + 3 + 4 = 12 ✔ → divisível por 6 (2.334 ÷ 6 = 389).<br>2.335 → soma 13 e é ímpar → não é.`],
 [`MMC e MDC pela fatoração`,
  `12 = 2<sup>2</sup> × 3 e 18 = 2 × 3<sup>2</sup>.<br><b>MDC</b> (maior divisor comum): só os comuns, com o <b>menor</b> expoente → 2 × 3 = <b>6</b>.<br><b>MMC</b> (menor múltiplo comum): todos, com o <b>maior</b> expoente → 2<sup>2</sup> × 3<sup>2</sup> = <b>36</b>.<br>Ex.: ônibus que passam a cada 12 e 18 min voltam a sair juntos depois de <b>36 min</b> (MMC).`],
 [`Potências de 10 e notação científica`,
  `10<sup>3</sup> = 1000 (3 zeros) · 10<sup>−2</sup> = 0,01.<br>3,2 × 10<sup>4</sup> = <b>32.000</b> (vírgula anda 4 casas para a direita).<br>0,005 = <b>5 × 10<sup>−3</sup></b> (vírgula andou 3 casas para a direita).`]
]},

/* ===================== 5. GEOMETRIA E MEDIDAS ===================== */
{id:'k-form', n:'Fórmulas de geometria e medidas', ic:'📐', area:'mat', it:[
 [`Áreas e perímetro dos quadriláteros`,
  `Quadrado l<sup>2</sup> · retângulo e paralelogramo b × h · losango [[D × d|2]] · trapézio [[(B + b) × h|2]].<br>Trapézio com bases 10 e 6, altura 4 → [[16 × 4|2]] = <b>32</b>. Losango de diagonais 8 e 6 → [[48|2]] = <b>24</b>.<br><b>Perímetro</b> = soma dos lados: retângulo 8 × 5 → 8 + 5 + 8 + 5 = <b>26</b>.`],
 [`Área do triângulo`,
  `A = [[b × h|2]] (a altura é perpendicular à base).<br>Base 12 e altura 5 → [[60|2]] = <b>30</b>.<br>Triângulo retângulo: os catetos são base e altura. Catetos 6 e 8 → [[48|2]] = <b>24</b>.`],
 [`Círculo e circunferência`,
  `Área: A = πr<sup>2</sup> · comprimento da circunferência: C = 2πr · diâmetro = 2r.<br>r = 3: A = 9π ≈ <b>28,26</b> e C = 6π ≈ <b>18,84</b>.<br>Cuidado: se o problema der o <b>diâmetro</b> 10, o raio é 5.`],
 [`Volumes`,
  `Cubo a<sup>3</sup> · paralelepípedo a × b × c · prisma e cilindro = área da base × altura · pirâmide e cone = [[1|3]] × base × altura.<br>Caixa 2 × 3 × 5 = <b>30</b>. Cilindro r = 2, h = 5 → π × 4 × 5 = 20π ≈ <b>62,8</b>.<br>Cone r = 3, h = 4 → [[1|3]] × 9π × 4 = <b>12π</b>.`],
 [`Soma dos ângulos internos`,
  `Triângulo <b>180°</b> · quadrilátero <b>360°</b> · polígono de n lados: (n − 2) × 180°.<br>Pentágono: 3 × 180 = <b>540°</b> (regular: cada um 108°).<br>Hexágono: 4 × 180 = <b>720°</b> (regular: cada um 120°).`],
 [`Ângulos que você precisa reconhecer`,
  `Reto 90° · raso 180° · volta 360°.<br><b>Complementares</b> somam 90°; <b>suplementares</b> somam 180°; <b>opostos pelo vértice</b> são iguais.<br>Complemento de 35° = <b>55°</b>; suplemento de 35° = <b>145°</b>.`],
 [`Pitágoras: a<sup>2</sup> = b<sup>2</sup> + c<sup>2</sup>`,
  `Só em triângulo retângulo. A <b>hipotenusa</b> (a) fica de frente para o ângulo de 90° e é o maior lado.<br>Catetos 6 e 8: 36 + 64 = 100 → hipotenusa <b>10</b>.<br>Hipotenusa 13 e cateto 5: 169 − 25 = 144 → outro cateto <b>12</b>.`],
 [`Ternos pitagóricos (economizam a conta)`,
  `<b>3-4-5 · 5-12-13 · 8-15-17 · 7-24-25</b> e seus múltiplos: 6-8-10, 9-12-15, 12-16-20, 10-24-26.<br>Catetos 9 e 12 → é o 3-4-5 vezes 3 → hipotenusa <b>15</b>.`],
 [`Comprimento: km · hm · dam · m · dm · cm · mm`,
  `Cada degrau para a direita: × 10. Para a esquerda: ÷ 10.<br>2,5 km = <b>2500 m</b> · 340 cm = <b>3,4 m</b> · 1 m = 100 cm = <b>1000 mm</b>.`],
 [`Área: cada degrau vale × 100`,
  `1 m<sup>2</sup> = 100 dm<sup>2</sup> = <b>10.000 cm<sup>2</sup></b> · 1 km<sup>2</sup> = 1.000.000 m<sup>2</sup> · 1 hectare = 10.000 m<sup>2</sup>.<br>3 m<sup>2</sup> = <b>30.000 cm<sup>2</sup></b> (e não 300!).`],
 [`Volume e capacidade: 1 dm<sup>3</sup> = 1 L`,
  `1 m<sup>3</sup> = 1000 dm<sup>3</sup> = <b>1000 L</b> · 1 cm<sup>3</sup> = 1 mL · 1 L = 1000 mL.<br>Caixa-d'água 2 m × 1 m × 1,5 m = 3 m<sup>3</sup> = <b>3000 L</b>.<br>250 mL = <b>0,25 L</b>.`],
 [`Tempo: a base é 60, não 10!`,
  `1 h = 60 min = 3600 s · 1 dia = 24 h.<br>2,5 h = 2 h + meia hora = <b>2 h 30 min</b> (e não 2 h 50!). 1,2 h = 1 h + 0,2 × 60 = <b>1 h 12 min</b>. 150 min = <b>2 h 30 min</b>.<br>A 90 km/h, em 20 min ([[1|3]] de hora) anda 90 ÷ 3 = <b>30 km</b>.`]
]},

/* ===================== 6. ÁLGEBRA DE BOLSO ===================== */
{id:'k-alg', n:'Álgebra de bolso', ic:'🔤', area:'mat', it:[
 [`Traduzir frases em equação`,
  `dobro → 2x · triplo → 3x · metade → [[x|2]] · quadrado → x<sup>2</sup> · consecutivos → x e x + 1.<br>"o triplo de um número mais 5" → 3x + 5 · "o triplo da soma de um número com 5" → 3(x + 5).<br>Ex.: "o dobro de um número mais 7 é 31" → 2x + 7 = 31 → 2x = 24 → x = <b>12</b>.`],
 [`Equação do 1º grau: o que passa para o outro lado inverte`,
  `+ vira −, × vira ÷.<br>3x − 4 = 2x + 9 → 3x − 2x = 9 + 4 → x = <b>13</b>.<br>5(x − 2) = 3x + 4 → 5x − 10 = 3x + 4 → 2x = 14 → x = <b>7</b>.`],
 [`Equação com frações: multiplique tudo pelo MMC`,
  `[[x|2]] + [[x|3]] = 10 → multiplique tudo por 6 → 3x + 2x = 60 → 5x = 60 → x = <b>12</b>.<br>Confere: 6 + 4 = 10 ✔.`],
 [`Quadrado da soma e da diferença`,
  `(a + b)<sup>2</sup> = a<sup>2</sup> + 2ab + b<sup>2</sup> · (a − b)<sup>2</sup> = a<sup>2</sup> − 2ab + b<sup>2</sup> ("o quadrado do 1º, duas vezes o 1º pelo 2º, o quadrado do 2º").<br>(x + 3)<sup>2</sup> = x<sup>2</sup> + 6x + 9 · (x − 5)<sup>2</sup> = x<sup>2</sup> − 10x + 25.<br>Conta de cabeça: 51<sup>2</sup> = (50 + 1)<sup>2</sup> = 2500 + 100 + 1 = <b>2601</b>; 49<sup>2</sup> = (50 − 1)<sup>2</sup> = 2500 − 100 + 1 = <b>2401</b>.`],
 [`Produto da soma pela diferença`,
  `(a + b)(a − b) = a<sup>2</sup> − b<sup>2</sup>.<br>(x + 4)(x − 4) = x<sup>2</sup> − 16.<br>Conta de cabeça: 21 × 19 = (20 + 1)(20 − 1) = 400 − 1 = <b>399</b>; 103 × 97 = 10.000 − 9 = <b>9991</b>.`],
 [`Fatorar = fazer o caminho de volta`,
  `Fator comum: 6x<sup>2</sup> − 9x = <b>3x(2x − 3)</b>.<br>Diferença de quadrados: x<sup>2</sup> − 49 = <b>(x + 7)(x − 7)</b>.<br>Trinômio quadrado perfeito: x<sup>2</sup> + 10x + 25 = <b>(x + 5)<sup>2</sup></b>.`],
 [`Bhaskara`,
  `ax<sup>2</sup> + bx + c = 0 → Δ = b<sup>2</sup> − 4ac → x = [[−b ± √{Δ}|2a]].<br>x<sup>2</sup> − 5x + 6 = 0: Δ = 25 − 24 = 1 → x = [[5 ± 1|2]] → <b>3 e 2</b>.<br>Δ &gt; 0: duas raízes · Δ = 0: duas raízes iguais · Δ &lt; 0: nenhuma raiz real.`],
 [`Bhaskara com b positivo e c negativo (atenção aos sinais)`,
  `2x<sup>2</sup> + 3x − 2 = 0 → a = 2, b = 3, c = −2.<br>Δ = 3<sup>2</sup> − 4 × 2 × (−2) = 9 + 16 = 25 → x = [[−3 ± 5|4]] → <b>[[1|2]] e −2</b>.<br>Lembre: −4ac com c negativo vira <b>soma</b>.`],
 [`Soma e produto das raízes`,
  `Soma = [[−b|a]] · Produto = [[c|a]]. Com a = 1, procure dois números com essa soma e esse produto.<br>x<sup>2</sup> − 7x + 12 = 0 → soma 7, produto 12 → <b>3 e 4</b>.<br>x<sup>2</sup> + 2x − 15 = 0 → soma −2, produto −15 → <b>3 e −5</b>.`],
 [`Equações do 2º grau incompletas (sem Bhaskara)`,
  `Sem o b: x<sup>2</sup> − 36 = 0 → x<sup>2</sup> = 36 → x = <b>6 ou −6</b> (não esqueça o negativo!).<br>Sem o c: x<sup>2</sup> − 4x = 0 → x(x − 4) = 0 → x = <b>0 ou 4</b>.`],
 [`Regra de três direta`,
  `Um aumenta, o outro aumenta na mesma proporção. Multiplica cruzado.<br>3 kg custam R$ 12. Quanto custam 5 kg? 1 kg = 12 ÷ 3 = 4 → 5 × 4 = <b>R$ 20</b>.`],
 [`Regra de três inversa`,
  `Um aumenta, o outro <b>diminui</b> (mais gente → menos tempo; mais velocidade → menos tempo). Multiplica "em linha".<br>4 pedreiros fazem um muro em 12 dias. E 6 pedreiros? Trabalho total = 4 × 12 = 48 → 48 ÷ 6 = <b>8 dias</b>.`]
]},

/* ===================== 7. PORTUGUÊS ===================== */
{id:'k-por', n:'Português: as 10 regras que mais caem', ic:'✍️', area:'por', it:[
 [`1. Crase (à = a + a)`,
  `Crase é a junção da preposição "a" com o artigo "a". <b>Teste:</b> troque a palavra feminina por uma masculina; se aparecer "ao", tem crase.<br>"Fui <b>à</b> escola" → "Fui <b>ao</b> colégio" ✔. "Comprei a bicicleta" → "Comprei o carro" (sem "ao") → sem crase.<br>Em regra, não há crase antes de palavra masculina, de verbo ("começou a chover") e de "ela/esta". Há crase na indicação de horas ("chego <b>às</b> 8 h") e em expressões femininas como <b>à</b> noite e <b>às</b> vezes.<br>Lugar: "vou <b>à</b> Bahia" (volto <b>da</b>) × "vou <b>a</b> Roma" (volto <b>de</b>).`],
 [`2. Por que · porque · por quê · porquê`,
  `<b>Por que</b> → pergunta (ou "pelo qual"): "<b>Por que</b> você faltou?"<br><b>Porque</b> → resposta, explicação (= pois): "Faltei <b>porque</b> estava doente."<br><b>Por quê</b> → no fim da frase (antes de ponto) ou sozinho: "Você faltou <b>por quê</b>?"<br><b>Porquê</b> → substantivo, vem com artigo (= o motivo): "Não sei <b>o porquê</b> da falta."`],
 [`3. Mas × mais`,
  `<b>Mas</b> = porém (oposição). <b>Mais</b> = contrário de menos.<br>Teste: dá para trocar por "porém"? Então é <b>mas</b>.<br>"Estudei, <b>mas</b> não fui bem" (porém ✔). "Quero <b>mais</b> tempo" (menos tempo ✔).`],
 [`4. Mal × mau`,
  `<b>Mal</b> é o contrário de <b>bem</b>; <b>mau</b> é o contrário de <b>bom</b>.<br>"Ele dormiu <b>mal</b>" (dormiu bem ✔). "Ele é um <b>mau</b> jogador" (bom jogador ✔).<br>"Mal" também pode ser "assim que": "<b>Mal</b> cheguei, começou a chover."`],
 [`5. Há × a (tempo)`,
  `<b>Há</b> → tempo que já passou (dá para trocar por "faz"): "Moro aqui <b>há</b> dez anos" (faz dez anos ✔).<br><b>A</b> → tempo futuro ou distância: "A prova será daqui <b>a</b> seis dias." "A escola fica <b>a</b> dois quilômetros."<br>Evite "há dez anos atrás": é repetição. Use "há dez anos" ou "dez anos atrás".`],
 [`6. Onde × aonde`,
  `<b>Onde</b> → lugar parado (estar, ficar, morar): "<b>Onde</b> você mora?"<br><b>Aonde</b> = a + onde → movimento, com verbos que pedem "a" (ir a, chegar a): "<b>Aonde</b> você vai?"<br>Teste: "vou <b>a</b> algum lugar" → aonde; "estou <b>em</b> algum lugar" → onde.`],
 [`7. Verbo haver (= existir) fica no singular`,
  `Com sentido de existir ou de tempo passado, "haver" é impessoal: não tem sujeito, fica no <b>singular</b>.<br>"<b>Havia</b> muitos alunos" (e não "haviam"). "<b>Houve</b> problemas." "<b>Deve haver</b> soluções" (o verbo que acompanha também fica no singular).<br>Já "existir" concorda: "<b>Existiam</b> muitos alunos."`],
 [`8. Nunca separe sujeito e verbo com UMA vírgula`,
  `Errado: "Os alunos do 9º ano<b>,</b> fizeram a prova." Certo: "Os alunos do 9º ano fizeram a prova."<br>Pode haver algo <b>entre duas vírgulas</b> no meio: "Os alunos, animados, fizeram a prova."<br>Vírgula obrigatória no vocativo (quem é chamado): "Richard, venha cá."`],
 [`9. Acentuação básica`,
  `<b>Proparoxítonas</b> (sílaba forte é a antepenúltima): todas têm acento → lâmpada, matemática, pássaro.<br><b>Oxítonas</b> (forte é a última): acento se terminam em a(s), e(s), o(s), em, ens → sofá, café, avô, também, parabéns.<br><b>Paroxítonas</b> (forte é a penúltima): acento se terminam em l, r, x, n, i(s), us, ã(s), ão(s), um, ps ou ditongo → fácil, açúcar, tórax, lápis, vírus, órfão, álbum, história.<br>Pelo Acordo Ortográfico, paroxítonas com "ei" e "oi" abertos perderam o acento: <b>ideia</b>, <b>heroico</b>, assembleia.`],
 [`10. Conjunções-chave: que relação elas criam`,
  `<table class="tb"><tr><th>Relação</th><th>Conjunções</th></tr>
<tr><td>Adição</td><td>e, nem, não só... mas também</td></tr>
<tr><td>Oposição (adversativa)</td><td>mas, porém, contudo, todavia, entretanto, no entanto</td></tr>
<tr><td>Concessão</td><td>embora, ainda que, mesmo que, apesar de que</td></tr>
<tr><td>Causa</td><td>porque, já que, visto que, uma vez que</td></tr>
<tr><td>Conclusão</td><td>logo, portanto, por isso, então</td></tr>
<tr><td>Consequência</td><td>tão... que, tanto... que, de modo que</td></tr>
<tr><td>Condição</td><td>se, caso, desde que</td></tr>
<tr><td>Finalidade</td><td>para que, a fim de que</td></tr>
<tr><td>Tempo</td><td>quando, assim que, enquanto</td></tr>
<tr><td>Conformidade</td><td>conforme, segundo, consoante</td></tr></table>
Ex.: "<b>Embora</b> estivesse cansado, estudou" = concessão. Mesmo sentido com oposição: "Estava cansado, <b>mas</b> estudou."`]
]},

/* ===================== 8. ESTRATÉGIA DE PROVA ===================== */
{id:'k-prova', n:'Estratégia de prova', ic:'🎯', area:'geral', it:[
 [`Faça a conta do tempo`,
  `3 h = 180 min para 30 questões → 180 ÷ 30 = <b>6 min por questão</b>.<br>Mire em 5 min: 30 × 5 = 150 min, e sobram <b>30 min</b> para revisar e passar o gabarito.<br>Checkpoints: com 1 h de prova, ~10 questões feitas; com 2 h, ~20.`],
 [`Ordem de resolução: as fáceis primeiro`,
  `1ª passada: resolva tudo o que você sabe na hora.<br>2ª passada: as que dão trabalho, mas você sabe o caminho.<br>3ª passada: as difíceis. Assim você garante os pontos certos antes de gastar tempo.`],
 [`Pular e voltar (sem culpa)`,
  `Travou por mais de 3 minutos sem avançar? Marque um "?" na questão e siga.<br>Muitas vezes, quando você volta, a ideia aparece. Ficar 15 min numa questão pode custar o tempo de duas ou três fáceis.`],
 [`Leia o que a pergunta pede de verdade`,
  `Grife a pergunta final: "o dobro", "a soma das raízes", "quanto falta", "INCORRETA", "EXCETO", e a unidade (cm ou m? min ou h?).<br>Ex.: você achou x = 4, mas a pergunta pede 2x + 1 → a resposta é <b>9</b>, não 4. A alternativa "4" estará lá para pegar quem não leu.`],
 [`Elimine alternativas absurdas (estimando)`,
  `48 × 21 com alternativas 908, 1008, 1208 e 10.008. Estime: 48 × 20 = 960, e a resposta tem de ser um pouco maior que isso → <b>1008</b>.<br>Na conta exata: 48 × 21 = 48 × 20 + 48 = 960 + 48 = 1008 ✔.`],
 [`Na matemática, teste as alternativas`,
  `Às vezes é mais rápido substituir do que resolver.<br>"x<sup>2</sup> − x = 12. Qual é o valor positivo de x? (a) 2 (b) 3 (c) 4 (d) 5 (e) 6"<br>Teste 4: 16 − 4 = 12 ✔ → <b>(c)</b>. Comece pelas alternativas do meio.`],
 [`No Português, a resposta está no texto`,
  `Leia a pergunta <b>antes</b> do texto: você já sabe o que procurar.<br>Volte ao trecho citado para confirmar; não responda pela sua opinião.<br>Desconfie de alternativas com "sempre", "nunca", "apenas", "todos": costumam exagerar o que o texto diz.`],
 [`Arme a conta e confira com a operação inversa`,
  `Mais de 2 passos? Escreva no rascunho, em um espaço separado para cada questão.<br>Confira com a inversa: achou 7 × 38 = 266? Teste 266 ÷ 7 = <b>38</b> ✔. Achou x = 7 em 5(x − 2) = 3x + 4? Substitua: 25 = 25 ✔.`],
 [`Marque o gabarito com calma`,
  `Passe para o gabarito a cada bloco de questões (por exemplo, a cada 10), sem deixar tudo para o fim.<br>Confira sempre: número da questão = número da linha. Um "pulo" de linha pode errar várias questões de uma vez.<br>Reserve uns <b>15 min</b> finais para conferir tudo.`],
 [`Chute consciente`,
  `Sem tempo ou sem ideia? Elimine o que tem certeza que está errado (por estimativa, unidade, sinal, sentido do texto) e escolha entre as que sobraram.<br>Com 5 alternativas, eliminar 2 faz a chance de acertar subir de 20% para <b>1 em 3</b> (cerca de 33%).<br>Confira nas instruções da prova se resposta errada desconta ponto; se não descontar, não deixe nenhuma em branco.`],
 [`Cabeça e corpo também contam`,
  `Na véspera: durma cedo, separe documento, lápis, caneta e borracha (confira nas instruções a cor de caneta pedida).<br>No dia: café da manhã, água e chegar com antecedência.<br>Bateu o nervoso? Respire fundo contando 4 segundos para entrar e 4 para sair, e volte para uma questão fácil.`]
]}

];
