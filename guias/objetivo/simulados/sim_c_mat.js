/* SIMULADO C · Matemática (15 questões, na ordem da prova)
   Formato: {t, d, q, o:[[texto, feedback]...5], a, e, tx?, tt?}  ·  ver SIMULADO_SPEC.md
   Conferido em check_sim_c_mat.py */
const SIM_C_MAT = [

/* 1 · m-pct · d1 · B */
{t:'m-pct', d:1, q:`Uma loja vende uma geladeira por R$ 1.200,00 à vista ou em 10 parcelas de R$ 132,00, sem entrada. Em relação ao preço à vista, quantos por cento a mais paga quem compra parcelado?`, o:[
  [`cerca de 9,1%`, `Você dividiu a diferença (R$ 120,00) pelo total parcelado (R$ 1.320,00). A base da comparação é o preço à vista: 120 ÷ 1 200.`],
  [`10%`, ``],
  [`11%`, `Você comparou uma parcela (R$ 132,00) com o preço à vista. É preciso somar as 10 parcelas primeiro: 10 × 132 = 1 320.`],
  [`12%`, `Você leu a diferença de R$ 120,00 como 12%. Mas R$ 120,00 seria 12% de R$ 1.000,00, não de R$ 1.200,00.`],
  [`110%`, `1 320 ÷ 1 200 = 1,10 mostra que o parcelado é 110% DO preço à vista, ou seja, 10% A MAIS.`]
 ], a:1, e:`Total parcelado: 10 × 132 = R$ 1.320,00.<br>Diferença: 1 320 − 1 200 = R$ 120,00.<br>Em relação ao preço à vista: [[120|1 200]] = 0,10 = <b>10%</b> a mais.`},

/* 2 · m-frac · d2 · D */
{t:'m-frac', d:2, q:`O prêmio de um concurso de redação foi dividido entre os três primeiros colocados. O 1º lugar recebeu [[1|3]] do prêmio; o 2º lugar recebeu [[2|5]] do que sobrou; e o 3º lugar recebeu o restante, que foi R$ 1.200,00. Qual era o valor total do prêmio?`, o:[
  [`R$ 1.200,00`, `Esse é só o valor do 3º lugar. A pergunta pede o prêmio inteiro.`],
  [`R$ 1.800,00`, `Você achou que os R$ 1.200,00 eram tudo o que sobrou depois do 1º lugar ([[2|3]] do prêmio). Mas o 2º lugar ainda tirou uma parte desse resto.`],
  [`R$ 2.000,00`, `Você esqueceu o 1º lugar: considerou que R$ 1.200,00 eram [[3|5]] do prêmio inteiro. Na verdade, são [[3|5]] de [[2|3]] do prêmio.`],
  [`R$ 3.000,00`, ``],
  [`R$ 4.500,00`, `Você calculou os [[2|5]] do 2º lugar sobre o prêmio todo (1 − [[1|3]] − [[2|5]] = [[4|15]]). O texto diz “[[2|5]] do que sobrou”.`]
 ], a:3, e:`Depois do 1º lugar, sobram [[2|3]] do prêmio.<br>O 2º leva [[2|5]] desse resto, então o 3º fica com [[3|5]] do resto: [[3|5]] × [[2|3]] = [[2|5]] do prêmio.<br>[[2|5]] do prêmio = R$ 1.200,00 → [[1|5]] = R$ 600,00 → prêmio = 5 × 600 = <b>R$ 3.000,00</b>.<br>Conferindo: 1º = 1 000; sobram 2 000; 2º = [[2|5]] × 2 000 = 800; 3º = 2 000 − 800 = 1 200. ✔`},

/* 3 · m-cient · d1 · E */
{t:'m-cient', d:1, q:`Um grão de arroz tem massa de aproximadamente 2 × 10<sup>−2</sup> grama. Quantos grãos de arroz há, aproximadamente, num pacote de 5 kg?`, o:[
  [`4 × 10<sup>−6</sup>`, `Você dividiu ao contrário: a massa de UM grão pela massa do pacote. O certo é massa do pacote ÷ massa de um grão.`],
  [`2,5 × 10<sup>1</sup>`, `Erro de sinal no expoente: na divisão, 10<sup>3</sup> ÷ 10<sup>−2</sup> = 10<sup>3 − (−2)</sup> = 10<sup>5</sup>, e não 10<sup>1</sup>.`],
  [`1 × 10<sup>2</sup>`, `Você multiplicou (5 000 × 0,02 = 100). Para saber quantos grãos cabem, divide-se a massa total pela massa de um grão.`],
  [`2,5 × 10<sup>2</sup>`, `Você esqueceu de passar 5 kg para gramas (5 ÷ 0,02 = 250). As duas massas precisam estar na mesma unidade.`],
  [`2,5 × 10<sup>5</sup>`, ``]
 ], a:4, e:`5 kg = 5 000 g = 5 × 10<sup>3</sup> g.<br>Número de grãos = [[5 × 10<sup>3</sup>|2 × 10<sup>−2</sup>]] = 2,5 × 10<sup>3 − (−2)</sup> = <b>2,5 × 10<sup>5</sup></b> (250 mil grãos).`},

/* 4 · m-sist · d2 · A */
{t:'m-sist', d:2, q:`O número da casa de Richard tem dois algarismos, e a soma deles é 11. Se os algarismos trocarem de lugar, o número obtido é 27 unidades maior que o número da casa. Qual é o número da casa?`, o:[
  [`47`, ``],
  [`56`, `A soma dos algarismos é 11, mas, trocando, 65 − 56 = 9, e não 27. Confira sempre as duas condições.`],
  [`65`, `A soma é 11, mas trocando os algarismos o número diminui (65 → 56). O número invertido tem de ser MAIOR.`],
  [`74`, `Esse é o número já com os algarismos trocados. A casa é o número menor, 47.`],
  [`83`, `A soma é 11, mas 38 é menor que 83. A segunda condição não é atendida.`]
 ], a:0, e:`Seja o número 10x + y (x = dezena, y = unidade).<br>x + y = 11<br>(10y + x) − (10x + y) = 27 → 9y − 9x = 27 → y − x = 3<br>Somando: 2y = 14 → y = 7 e x = 4.<br>A casa é a de número <b>47</b> (invertido: 74; 74 − 47 = 27 ✔).`},

/* 5 · m-prod · d3 · C */
{t:'m-prod', d:3, q:`Um terreno tem a forma de um quadrado. O dono comprou uma faixa de terra vizinha e cada lado do terreno aumentou 3 m, continuando quadrado. Com isso, a área aumentou 81 m<sup>2</sup>. Qual era o perímetro do terreno antes da ampliação?`, o:[
  [`24 m`, `Você usou √{81} = 9 como lado novo e tirou 3 (lado 6). Mas 81 m<sup>2</sup> é só o AUMENTO de área, não a área do terreno novo.`],
  [`36 m`, `Você usou √{81} = 9 como lado antigo. O aumento de área não é um quadrado sozinho: é (x + 3)<sup>2</sup> − x<sup>2</sup>.`],
  [`48 m`, ``],
  [`54 m`, `Você esqueceu o 9 do produto notável: (x + 3)<sup>2</sup> = x<sup>2</sup> + 6x + <b>9</b>. Ficou 6x = 81, x = 13,5.`],
  [`60 m`, `Esse é o perímetro DEPOIS da ampliação (lado 15 m). A pergunta pede o de antes.`]
 ], a:2, e:`Lado antigo: x. Lado novo: x + 3.<br>Aumento de área: (x + 3)<sup>2</sup> − x<sup>2</sup> = x<sup>2</sup> + 6x + 9 − x<sup>2</sup> = 6x + 9.<br>6x + 9 = 81 → 6x = 72 → x = 12 m.<br>Perímetro antes: 4 × 12 = <b>48 m</b>.<br>Conferindo: 15<sup>2</sup> − 12<sup>2</sup> = 225 − 144 = 81 ✔`},

/* 6 · m-eq2 · d2 · A */
{t:'m-eq2', d:2, q:`Num campeonato de futsal em turno único, cada time enfrenta cada um dos outros exatamente uma vez. Ao todo, foram disputados 28 jogos. Quantos jogos cada time disputou?`, o:[
  [`7`, ``],
  [`8`, `8 é o número de TIMES. Cada time enfrenta todos os outros, ou seja, 8 − 1 = 7 adversários.`],
  [`14`, `Você só dividiu 28 por 2. É preciso descobrir primeiro quantos times há.`],
  [`28`, `28 é o total de jogos do campeonato, não o número de jogos de cada time.`],
  [`56`, `56 = 2 × 28 é o total de “participações” (cada jogo tem 2 times). Ainda falta dividir pelo número de times: 56 ÷ 8 = 7.`]
 ], a:0, e:`Com n times, cada um joga n − 1 vezes e cada jogo é contado duas vezes: jogos = [[n(n − 1)|2]].<br>[[n(n − 1)|2]] = 28 → n<sup>2</sup> − n − 56 = 0.<br>Δ = 1 + 224 = 225 → n = [[1 ± 15|2]] → n = 8 (o −7 não serve).<br>São 8 times, então cada um disputou 8 − 1 = <b>7 jogos</b>.`},

/* 7 · m-prop · d2 · C */
{t:'m-prop', d:2, q:`Um ônibus faz a viagem entre duas cidades em 4 horas, com velocidade média de 90 km/h. Para fazer a mesma viagem em 3h20min, qual deveria ser a velocidade média?`, o:[
  [`75 km/h`, `Você tratou velocidade e tempo como diretamente proporcionais. Para chegar mais rápido, a velocidade tem de AUMENTAR: são grandezas inversamente proporcionais.`],
  [`105 km/h`, `O tempo diminuiu [[1|6]], mas a velocidade não aumenta [[1|6]]. Como são inversas, ela é multiplicada por [[6|5]], não por [[7|6]].`],
  [`108 km/h`, ``],
  [`112,5 km/h`, `Você usou 3h20min = 3,2 h. Mas 20 min = [[20|60]] h = [[1|3]] h, então 3h20min = [[10|3]] h.`],
  [`120 km/h`, `Você usou só 3 horas e esqueceu os 20 minutos.`]
 ], a:2, e:`Distância: 90 × 4 = 360 km.<br>3h20min = 3 + [[1|3]] = [[10|3]] h.<br>Velocidade = 360 ÷ [[10|3]] = 360 × [[3|10]] = <b>108 km/h</b>.<br>(Pela proporção inversa: o tempo passa a ser [[10|3]] ÷ 4 = [[5|6]] do original, então a velocidade é multiplicada por [[6|5]]: 90 × 1,2 = 108.)`},

/* 8 · m-func · d1 · C */
{t:'m-func', d:1, q:`Nos Estados Unidos, a temperatura é medida em graus Fahrenheit (°F). Para converter uma temperatura C, em graus Celsius, para F, em graus Fahrenheit, usa-se a função F = 1,8C + 32. Num dia em que os termômetros de São Paulo marcam 20 °C, quanto marcaria um termômetro em graus Fahrenheit?`, o:[
  [`36 °F`, `Você calculou só 1,8 × 20 e esqueceu de somar 32.`],
  [`52 °F`, `Você somou 20 + 32 e esqueceu de multiplicar o 20 por 1,8.`],
  [`68 °F`, ``],
  [`77,6 °F`, `Você multiplicou o 32 por 1,8 (20 + 1,8 × 32). Na função, o 1,8 multiplica a temperatura C.`],
  [`93,6 °F`, `Você somou primeiro e multiplicou depois: (20 + 32) × 1,8. A multiplicação 1,8 × C vem antes da soma.`]
 ], a:2, e:`Substitua C = 20 na função:<br>F = 1,8 × 20 + 32 = 36 + 32 = <b>68 °F</b>.`},

/* 9 · m-ang · d2 · A */
{t:'m-ang', d:2, q:`As ruas r e s são retas e paralelas, e r fica ao norte de s. Uma trilha sai do ponto A da rua r, vai em linha reta até o ponto P (entre as duas ruas, a leste de A e de B) e depois segue em linha reta até o ponto B da rua s, formando um “bico” apontado para o leste. O ângulo entre o trecho AP e a rua r, medido do lado leste de A, é de 40°. O ângulo entre o trecho PB e a rua s, medido do lado leste de B, é de 35°. Quanto mede o ângulo APB, no bico da trilha?`, o:[
  [`75°`, ``],
  [`105°`, `Esse é o suplemento de 75°. Pela paralela traçada por P, os ângulos 40° e 35° aparecem como alternos internos e se SOMAM no bico.`],
  [`140°`, `Esse é o suplemento de 40° (o ângulo do outro lado de A). O bico é formado pelos dois trechos, não pela rua r.`],
  [`145°`, `Esse é o suplemento de 35° (o ângulo do outro lado de B).`],
  [`285°`, `Esse é o ângulo “por fora” do bico (360° − 75°). A pergunta pede o ângulo APB no bico.`]
 ], a:0, e:`Trace por P uma reta paralela a r e s.<br>O ângulo entre AP e essa paralela é alterno interno do ângulo de 40° → 40°.<br>O ângulo entre PB e essa paralela é alterno interno do ângulo de 35° → 35°.<br>APB = 40° + 35° = <b>75°</b>.`},

/* 10 · m-sem · d3 · C */
{t:'m-sem', d:3, q:`Para a festa junina, dois postes verticais, de 6 m e de 3 m de altura, foram fincados a 10 m um do outro, num chão plano. Esticaram-se dois fios retos: um do topo do poste maior até o pé do poste menor, e outro do topo do poste menor até o pé do poste maior. A que altura do chão os dois fios se cruzam?`, o:[
  [`1,5 m`, `Você tomou a metade do poste menor. A altura do cruzamento depende dos dois postes.`],
  [`1,8 m`, `Você dividiu 6 × 3 = 18 pela distância (10 m). Na semelhança, a distância entre os postes se cancela: divide-se por 6 + 3.`],
  [`2 m`, ``],
  [`3 m`, `Você tomou a metade do poste maior. O cruzamento fica mais perto do chão, porque o poste menor “puxa” o fio para baixo.`],
  [`4,5 m`, `Você fez a média das alturas (6 + 3) ÷ 2. O cruzamento fica abaixo do topo do poste menor, então não pode passar de 3 m.`]
 ], a:2, e:`Seja h a altura do cruzamento e d a distância (no chão) do pé do poste maior até o ponto abaixo do cruzamento.<br>Fio que sai do topo do poste menor (3 m) e desce até o pé do maior: triângulos semelhantes → [[h|3]] = [[d|10]].<br>Fio que sai do topo do poste maior (6 m) e desce até o pé do menor: [[h|6]] = [[10 − d|10]].<br>Somando: [[h|3]] + [[h|6]] = [[d + 10 − d|10]] = 1 → [[3h|6]] = 1 → h = <b>2 m</b>.<br>(Atalho: h = [[6 × 3|6 + 3]] = [[18|9]] = 2. A distância de 10 m não interfere.)`},

/* 11 · m-cart · d1 · B */
{t:'m-cart', d:1, q:`No mapa quadriculado de um bairro, cada unidade dos eixos corresponde a 100 m. A escola está no ponto (2, 1) e a casa de Richard está no ponto (−4, 9). Qual é a distância, em linha reta, entre a escola e a casa?`, o:[
  [`0,6 km`, `Você considerou só a diferença na horizontal (6 unidades). A distância em linha reta usa as duas diferenças (Pitágoras).`],
  [`1 km`, ``],
  [`1,4 km`, `Você somou 6 + 8 = 14 unidades: esse é o caminho andando pelas ruas do quadriculado, não em linha reta.`],
  [`10 km`, `Você esqueceu de tirar a raiz: 6<sup>2</sup> + 8<sup>2</sup> = 100 é o QUADRADO da distância. Distância = √{100} = 10 unidades.`],
  [`14 km`, `Você somou 6 + 8 (caminho pelas ruas) e ainda tomou cada unidade como 1 km. Cada unidade vale 100 m.`]
 ], a:1, e:`Diferenças: Δx = −4 − 2 = −6; Δy = 9 − 1 = 8.<br>d = √{(−6)<sup>2</sup> + 8<sup>2</sup>} = √{36 + 64} = √{100} = 10 unidades.<br>10 × 100 m = 1 000 m = <b>1 km</b>.`},

/* 12 · m-area · d3 · E */
{t:'m-area', d:3, q:`Um jardim tem a forma de um quadrado ABCD de 20 m de lado. Em cada lado, marcou-se um ponto a 5 m de um dos vértices, sempre no mesmo sentido de giro: P em AB com AP = 5 m, Q em BC com BQ = 5 m, R em CD com CR = 5 m e S em DA com DS = 5 m. O quadrilátero PQRS será coberto de grama, e os quatro cantos triangulares que sobram receberão flores. Qual é a área coberta de grama?`, o:[
  [`100 m<sup>2</sup>`, `Você imaginou um quadrado de lado 20 − 2 × 5 = 10 m, com lados paralelos aos do jardim. PQRS é um quadrado “girado”, bem maior.`],
  [`150 m<sup>2</sup>`, `Essa é a área dos quatro cantos com flores (4 × [[5 × 15|2]]). A pergunta pede a grama.`],
  [`200 m<sup>2</sup>`, `Metade do jardim só seria o resultado se os pontos fossem os pontos médios dos lados (a 10 m dos vértices).`],
  [`225 m<sup>2</sup>`, `Você usou como lado de PQRS o cateto de 15 m. O lado de PQRS é a hipotenusa do triângulo de catetos 5 e 15.`],
  [`250 m<sup>2</sup>`, ``]
 ], a:4, e:`Cada canto é um triângulo retângulo de catetos 5 m e 15 m: área = [[5 × 15|2]] = 37,5 m<sup>2</sup>.<br>Quatro cantos: 4 × 37,5 = 150 m<sup>2</sup>.<br>Grama: 20<sup>2</sup> − 150 = 400 − 150 = <b>250 m<sup>2</sup></b>.<br>(Conferindo por Pitágoras: lado de PQRS<sup>2</sup> = 5<sup>2</sup> + 15<sup>2</sup> = 250.)`},

/* 13 · m-unid · d1 · B */
{t:'m-unid', d:1, q:`Uma torneira mal fechada desperdiça 5 mL de água por minuto. Quantos litros ela desperdiça em um dia inteiro (24 horas)?`, o:[
  [`0,3 L`, `Esse é o desperdício de 1 hora (5 × 60 = 300 mL). Faltou multiplicar por 24.`],
  [`7,2 L`, ``],
  [`72 L`, `Você dividiu 7 200 mL por 100. Para passar de mL para L, divide-se por 1 000.`],
  [`720 L`, `Você dividiu 7 200 mL por 10. Para passar de mL para L, divide-se por 1 000.`],
  [`7 200 L`, `7 200 é o resultado em MILILITROS. Faltou converter para litros.`]
 ], a:1, e:`1 dia = 24 × 60 = 1 440 minutos.<br>5 × 1 440 = 7 200 mL.<br>7 200 mL ÷ 1 000 = <b>7,2 L</b>.`},

/* 14 · m-media · d2 · B */
{t:'m-media', d:2, q:`Um professor calculou a média das notas dos 20 alunos de uma turma e obteve 6,5. Depois, percebeu que tinha lançado a nota de um aluno como 4,0, quando o certo era 9,0. Corrigido o erro, qual é a média da turma?`, o:[
  [`6,25`, `Você subtraiu a correção. A nota certa (9,0) é MAIOR que a lançada (4,0), então a média tem de subir.`],
  [`6,75`, ``],
  [`6,95`, `Você somou a nota 9,0 à soma das notas, mas esqueceu de retirar o 4,0 lançado por engano.`],
  [`7,00`, `Você dividiu a diferença de 5 pontos por 10. A turma tem 20 alunos: 5 ÷ 20 = 0,25.`],
  [`11,50`, `Você somou os 5 pontos direto na média. A diferença tem de ser dividida entre os 20 alunos.`]
 ], a:1, e:`Soma das notas lançadas: 20 × 6,5 = 130.<br>Corrigindo: 130 − 4 + 9 = 135.<br>Média correta: [[135|20]] = <b>6,75</b>.<br>(Atalho: a soma aumentou 5 pontos, e 5 ÷ 20 = 0,25 → 6,5 + 0,25 = 6,75.)`},

/* 15 · m-prob · d3 · D */
{t:'m-prob', d:3, q:`Numa gincana, cada aluno sorteia uma ficha de uma urna com 60 fichas numeradas de 1 a 60. Ganha um brinde quem tirar um número que seja múltiplo de 4 ou múltiplo de 6. Qual é a probabilidade de um aluno ganhar o brinde?`, o:[
  [`[[1|12]]`, `Você contou só os números que são múltiplos de 4 E de 6 ao mesmo tempo (múltiplos de 12). O “ou” inclui os que são de pelo menos um tipo.`],
  [`[[1|6]]`, `Você contou só os múltiplos de 6 (10 números). Faltaram os múltiplos de 4.`],
  [`[[1|4]]`, `Você contou só os múltiplos de 4 (15 números). Faltaram os múltiplos de 6 que não são múltiplos de 4.`],
  [`[[1|3]]`, ``],
  [`[[5|12]]`, `Você somou 15 + 10 = 25, mas os múltiplos de 12 (12, 24, 36, 48, 60) foram contados duas vezes.`]
 ], a:3, e:`Múltiplos de 4 de 1 a 60: 60 ÷ 4 = 15.<br>Múltiplos de 6: 60 ÷ 6 = 10.<br>Múltiplos de 4 e de 6 ao mesmo tempo (múltiplos de 12): 60 ÷ 12 = 5 → foram contados duas vezes.<br>Casos favoráveis: 15 + 10 − 5 = 20.<br>P = [[20|60]] = <b>[[1|3]]</b>.`}

];
