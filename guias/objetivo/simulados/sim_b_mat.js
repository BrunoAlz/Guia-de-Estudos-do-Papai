/* SIMULADO B · Matemática (15 questões, na ordem da prova)
   Formato: {t, d, q, o:[[texto, feedback]...5], a, e, tx?, tt?}  ·  ver SIMULADO_SPEC.md
   Conferido por simulados/check_sim_b_mat.py */
const SIM_B_MAT = [

/* 1 · m-pct */
{t:'m-pct', d:2, q:`Numa escola, 60% dos alunos são meninas e os demais são meninos. Entre as meninas, 25% fazem parte de algum time esportivo da escola; entre os meninos, 40% fazem parte de algum time. Que porcentagem do total de alunos da escola faz parte de algum time esportivo?`, o:[
  [`15%`, `Esse é só o grupo das meninas que estão em times (25% de 60% = 15% do total). Faltou somar os meninos.`],
  [`16%`, `Esse é só o grupo dos meninos que estão em times (40% de 40% = 16% do total). Faltou somar as meninas.`],
  [`31%`, ``],
  [`32,5%`, `Você fez a média simples de 25% e 40%. Mas há mais meninas (60%) que meninos (40%), então cada porcentagem pesa diferente.`],
  [`65%`, `Você somou 25% + 40%. Essas porcentagens são de grupos diferentes (meninas e meninos), não do total da escola.`]
 ], a:2, e:`Pense numa escola com 100 alunos: 60 meninas e 40 meninos.<br>Meninas em times: 25% de 60 = 15.<br>Meninos em times: 40% de 40 = 16.<br>Total em times: 15 + 16 = 31 de 100 alunos → <b>31%</b>.`},

/* 2 · m-reais */
{t:'m-reais', d:1, q:`Três barras de ferro têm comprimentos √{5} m, 2,2 m e [[9|4]] m. Qual alternativa mostra esses comprimentos em ordem <b>crescente</b>?`, o:[
  [`2,2 &lt; √{5} &lt; [[9|4]]`, ``],
  [`√{5} &lt; 2,2 &lt; [[9|4]]`, `√{5} é maior que 2,2, porque 2,2² = 4,84, que é menor que 5.`],
  [`2,2 &lt; [[9|4]] &lt; √{5}`, `[[9|4]] = 2,25 e 2,25² = 5,0625, que é maior que 5. Logo, [[9|4]] é maior que √{5} (que vale cerca de 2,236).`],
  [`[[9|4]] &lt; 2,2 &lt; √{5}`, `9 ÷ 4 = 2,25, que é maior que 2,2. Faça a divisão com cuidado antes de comparar.`],
  [`[[9|4]] &lt; √{5} &lt; 2,2`, `Essa é a ordem do maior para o menor (decrescente), escrita com o sinal &lt;. A pergunta pede do menor para o maior.`]
 ], a:0, e:`Para comparar números positivos sem calculadora, compare os quadrados:<br>2,2² = 4,84 · (√{5})² = 5 · ([[9|4]])² = [[81|16]] = 5,0625.<br>Como 4,84 &lt; 5 &lt; 5,0625, temos <b>2,2 &lt; √{5} &lt; [[9|4]]</b>.<br>(Em decimais: 2,2 &lt; 2,236… &lt; 2,25.)`},

/* 3 · m-mmc */
{t:'m-mmc', d:2, q:`Richard tem mais de 200 e menos de 300 figurinhas. Se ele as separa em montes de 6, sobram 3 figurinhas; em montes de 8, também sobram 3; e em montes de 10, também sobram 3. Quantas figurinhas Richard tem?`, o:[
  [`123`, `123 deixa resto 3 nas três divisões, mas é menor que 200. É preciso usar o próximo múltiplo do MMC: 240 + 3.`],
  [`237`, `Você subtraiu 3 do múltiplo do MMC. Se sobram 3, o número é 3 a <b>mais</b> que um múltiplo de 6, 8 e 10.`],
  [`240`, `240 é o múltiplo comum de 6, 8 e 10, mas nessas divisões ele deixa resto 0. Faltou somar as 3 figurinhas que sobram.`],
  [`243`, ``],
  [`283`, `280 + 3 deixa resto 3 na divisão por 8 e por 10, mas 280 não é múltiplo de 6: 283 em montes de 6 deixa resto 1. Use o MMC dos três números.`]
 ], a:3, e:`Tirando as 3 que sobram, o resto é múltiplo de 6, de 8 e de 10 ao mesmo tempo, ou seja, múltiplo do MMC.<br>6 = 2 · 3; 8 = 2³; 10 = 2 · 5 → MMC = 2³ · 3 · 5 = 120.<br>Múltiplos de 120: 120, 240, 360… Somando 3: 123, 243, 363…<br>O único entre 200 e 300 é <b>243</b>.`},

/* 4 · m-eq1 */
{t:'m-eq1', d:1, q:`Um estacionamento cobra R$ 15,00 pela primeira hora e R$ 6,00 por hora adicional, e só cobra horas inteiras. Ao retirar o carro, o pai de Richard pagou R$ 63,00. Por quantas horas o carro ficou estacionado?`, o:[
  [`3 h`, `Você dividiu 63 por 21 (15 + 6), como se toda hora custasse R$ 21,00. Só a primeira hora custa R$ 15,00; as outras custam R$ 6,00 cada.`],
  [`8 h`, `8 é o número de horas <b>adicionais</b>. Faltou somar a primeira hora.`],
  [`9 h`, ``],
  [`10 h 30 min`, `Você dividiu 63 por 6, como se todas as horas custassem R$ 6,00. A primeira hora tem preço diferente (R$ 15,00).`],
  [`13 h`, `Você somou 15 a 63 em vez de subtrair: (63 + 15) ÷ 6 = 13. Os R$ 15,00 da primeira hora já estão dentro dos R$ 63,00.`]
 ], a:2, e:`Seja x o total de horas. A primeira custa 15 e as outras (x − 1) custam 6 cada:<br>15 + 6(x − 1) = 63<br>6(x − 1) = 48 → x − 1 = 8 → x = <b>9 horas</b>.<br>Confere: 15 + 8 · 6 = 15 + 48 = 63. ✔`},

/* 5 · m-prod */
{t:'m-prod', d:2, q:`Um número real positivo x satisfaz x − [[1|x]] = 4. Qual é o valor de x² + [[1|x²]]?`, o:[
  [`8`, `Você multiplicou 4 por 2. Para chegar em x² e [[1|x²]], é preciso elevar a igualdade ao quadrado.`],
  [`14`, `Você trocou o sinal do termo do meio. Em (a − b)² o termo do meio é −2ab, que aqui vale −2; para isolar x² + [[1|x²]], soma-se 2.`],
  [`16`, `Você elevou ao quadrado esquecendo o termo do meio, como se (x − [[1|x]])² fosse x² + [[1|x²]]. Na verdade, (x − [[1|x]])² = x² − 2 + [[1|x²]].`],
  [`17`, `Você esqueceu o “2” do termo do meio: 2 · x · [[1|x]] = 2, não 1.`],
  [`18`, ``]
 ], a:4, e:`Eleve os dois lados ao quadrado, usando (a − b)² = a² − 2ab + b²:<br>(x − [[1|x]])² = x² − 2 · x · [[1|x]] + [[1|x²]] = x² − 2 + [[1|x²]].<br>Então x² − 2 + [[1|x²]] = 4² = 16 → x² + [[1|x²]] = 16 + 2 = <b>18</b>.`},

/* 6 · m-eq2 */
{t:'m-eq2', d:3, q:`De uma folha retangular de papelão de 30 cm por 20 cm, recorta-se um quadrado de lado x cm em cada um dos quatro cantos. Depois, dobram-se as abas para cima, formando uma caixa sem tampa. Para que o fundo da caixa tenha área de 336 cm², quanto deve medir x?`, o:[
  [`3 cm`, ``],
  [`6 cm`, `Você descontou x só uma vez de cada medida: (30 − x)(20 − x) = 336. Como há um quadrado recortado em cada ponta, cada medida perde 2x.`],
  [`14 cm`, `14 cm é a largura do fundo da caixa (20 − 2 × 3), não o lado do quadrado recortado.`],
  [`22 cm`, `22 é a outra raiz da equação, mas não serve: a folha tem só 20 cm de largura, e 20 − 2 × 22 daria uma medida negativa.`],
  [`24 cm`, `24 cm é o comprimento do fundo da caixa (30 − 2 × 3), não o lado do quadrado recortado.`]
 ], a:0, e:`Cada medida da folha perde x em cada ponta, ou seja, 2x. O fundo mede (30 − 2x) por (20 − 2x).<br>(30 − 2x)(20 − 2x) = 336 → 600 − 60x − 40x + 4x² = 336 → 4x² − 100x + 264 = 0.<br>Dividindo por 4: x² − 25x + 66 = 0.<br>Δ = 625 − 264 = 361 → √{361} = 19 → x = [[25 ± 19|2]] → x = 22 ou x = 3.<br>x = 22 não serve (20 − 44 é negativo). Resposta: <b>x = 3 cm</b>.<br>Confere: fundo de 24 cm por 14 cm → 24 × 14 = 336 cm². ✔`},

/* 7 · m-prop */
{t:'m-prop', d:2, q:`Numa gráfica, 4 impressoras iguais, trabalhando juntas, imprimem 600 cartazes em 6 horas. Uma das impressoras quebrou, e as 3 restantes, no mesmo ritmo, precisam imprimir 900 cartazes. Quanto tempo elas vão levar?`, o:[
  [`4 h 30 min`, `Você achou que, com menos impressoras, o tempo diminui (6 × [[3|4]]) e ainda esqueceu que há mais cartazes. Menos impressoras → <b>mais</b> tempo.`],
  [`6 h 45 min`, `Você tratou impressoras e tempo como diretamente proporcionais (6 × [[3|4]] × [[3|2]]). Com menos impressoras, o tempo aumenta: o fator é [[4|3]].`],
  [`8 h`, `Você considerou só a impressora quebrada (6 × [[4|3]]) e esqueceu que agora são 900 cartazes, não 600.`],
  [`9 h`, `Você considerou só o aumento de cartazes (6 × [[3|2]]) e esqueceu que agora há só 3 impressoras.`],
  [`12 h`, ``]
 ], a:4, e:`Regra de três composta. Compare cada grandeza com o tempo:<br>• impressoras: 4 → 3 (menos impressoras, <b>mais</b> tempo: inversa) → fator [[4|3]];<br>• cartazes: 600 → 900 (mais cartazes, mais tempo: direta) → fator [[900|600]] = [[3|2]].<br>Tempo = 6 × [[4|3]] × [[3|2]] = 6 × 2 = <b>12 horas</b>.<br>Outro jeito: cada impressora faz 600 ÷ 4 ÷ 6 = 25 cartazes por hora; 3 impressoras fazem 75 por hora; 900 ÷ 75 = 12 h.`},

/* 8 · m-seq */
{t:'m-seq', d:1, q:`Para a festa junina, Bia pendurou bandeirinhas numa fila, sempre nesta ordem de cores: vermelha, laranja, amarela, verde, azul, roxa. Depois da roxa, a sequência recomeça na vermelha, e assim por diante. Qual é a cor da 100ª bandeirinha?`, o:[
  [`Amarela`, `Você parou uma posição antes. O resto da divisão de 100 por 6 é 4, e a 4ª cor do ciclo é a verde.`],
  [`Verde`, ``],
  [`Azul`, `Você avançou uma posição a mais. O resto 4 indica a 4ª cor do ciclo (verde), não a 5ª.`],
  [`Vermelha`, `A vermelha é a 97ª bandeirinha (logo depois da 96ª, que fecha um ciclo). A 100ª está 3 posições depois dela.`],
  [`Roxa`, `A roxa ocupa as posições múltiplas de 6 (6, 12, …, 96). Como 100 não é múltiplo de 6, a 100ª não é roxa.`]
 ], a:1, e:`O padrão se repete a cada 6 bandeirinhas. Divida 100 por 6:<br>100 = 6 × 16 + 4.<br>Depois de 16 ciclos completos (96 bandeirinhas), a 100ª é a 4ª cor do ciclo: vermelha (1ª), laranja (2ª), amarela (3ª), <b>verde</b> (4ª).`},

/* 9 · m-pol */
{t:'m-pol', d:2, q:`Um piso é coberto por ladrilhos em forma de polígonos regulares, sem frestas e sem sobreposição. Em cada vértice do desenho encontram-se exatamente três ladrilhos: um quadrado e dois polígonos regulares iguais entre si. Quantos lados tem cada um desses dois polígonos?`, o:[
  [`6`, `O ângulo interno do hexágono regular é 120°: 90° + 2 · 120° = 330°. Faltariam 30° para fechar a volta.`],
  [`8`, ``],
  [`9`, `O ângulo interno do eneágono regular é 140°: 90° + 2 · 140° = 370°. Passa de 360° e os ladrilhos se sobreporiam.`],
  [`10`, `O ângulo interno do decágono regular é 144°: 90° + 2 · 144° = 378°. Passa de 360°.`],
  [`12`, `O ângulo interno do dodecágono regular é 150°: 90° + 2 · 150° = 390°. Passa de 360°.`]
 ], a:1, e:`Em torno de um vértice, os ângulos somam 360°.<br>O quadrado ocupa 90°, então cada um dos outros dois ocupa (360° − 90°) ÷ 2 = 135°.<br>Ângulo interno de 135° → ângulo externo de 180° − 135° = 45°.<br>Número de lados: 360° ÷ 45° = <b>8</b> (octógono).<br>Confere: [[(8 − 2) · 180°|8]] = [[1 080°|8]] = 135°. ✔`},

/* 10 · m-pit */
{t:'m-pit', d:3, q:`Um bambu de 9 m de altura estava em pé, perpendicular a um chão plano. O vento o quebrou a certa altura: a parte de cima tombou sem se soltar, e a sua ponta encostou no chão a 3 m da base do bambu. A que altura do chão o bambu quebrou?`, o:[
  [`4 m`, ``],
  [`4,5 m`, `Você supôs que o bambu quebrou na metade. Nesse caso, a parte tombada (4,5 m) teria de ser a hipotenusa, mas 4,5² ≠ 4,5² + 3².`],
  [`5 m`, `5 m é o comprimento da parte que tombou (a hipotenusa), não a altura em que o bambu quebrou.`],
  [`6 m`, `Você fez 9 − 3. A distância de 3 m está no chão (um cateto) e não se subtrai da altura assim; é preciso usar Pitágoras.`],
  [`6√{2} m`, `Você usou 9 m como hipotenusa: √{9² − 3²} = √{72} = 6√{2}. Mas a hipotenusa é só a parte que tombou (9 − x), não o bambu inteiro.`]
 ], a:0, e:`Seja x a altura da quebra. A parte que ficou em pé (x) e a distância no chão (3) são os catetos; a parte tombada (9 − x) é a hipotenusa.<br>(9 − x)² = x² + 3²<br>81 − 18x + x² = x² + 9<br>72 = 18x → x = <b>4 m</b>.<br>Confere: parte tombada 5 m; 4² + 3² = 16 + 9 = 25 = 5². ✔`},

/* 11 · m-circ */
{t:'m-circ', d:1, q:`Uma roda-gigante tem 12 cabines, numeradas de 1 a 12 em sequência e igualmente espaçadas ao longo de uma circunferência. Qual é a medida do <b>menor</b> ângulo central formado pelos raios que ligam o centro da roda às cabines 1 e 5?`, o:[
  [`30°`, `30° é o ângulo entre duas cabines <b>vizinhas</b>. Da 1 à 5 há 4 desses espaços.`],
  [`60°`, `Você calculou a metade de 120°, que seria um ângulo inscrito. A pergunta pede o ângulo <b>central</b>, que é igual ao arco.`],
  [`90°`, `Você contou 3 espaços. Da cabine 1 à 5 há 4 espaços: 1→2, 2→3, 3→4, 4→5.`],
  [`120°`, ``],
  [`150°`, `Você contou 5 espaços (cabines 1, 2, 3, 4 e 5). Mas entre 5 cabines há 4 espaços, não 5.`]
 ], a:3, e:`As 12 cabines dividem a volta (360°) em 12 arcos iguais: 360° ÷ 12 = 30° cada.<br>Da cabine 1 à cabine 5 há 4 arcos: 4 × 30° = <b>120°</b>.<br>(O outro ângulo, pelo lado de fora, mede 360° − 120° = 240°; o menor é 120°.)`},

/* 12 · m-vol */
{t:'m-vol', d:3, q:`Uma caixa-d’água tem a forma de um cilindro com 2 m de diâmetro e 1,5 m de altura, e está com água até [[1|3]] de sua capacidade. Abre-se uma torneira com vazão de 15 litros por minuto para terminar de enchê-la. Em quanto tempo a caixa-d’água ficará cheia? (Use π ≈ 3.)`, o:[
  [`20 min`, `Você usou 1 m³ = 100 L. O certo é 1 m³ = 1 000 L.`],
  [`1 h 40 min`, `Você calculou o tempo para encher só [[1|3]] da caixa. Como ela já tem [[1|3]], faltam [[2|3]].`],
  [`3 h 20 min`, ``],
  [`5 h`, `Esse é o tempo para encher a caixa vazia. Ela já tem [[1|3]] de água; faltam só [[2|3]].`],
  [`13 h 20 min`, `Você usou 2 m como raio. O raio é a metade do diâmetro: 1 m.`]
 ], a:2, e:`Raio = 2 ÷ 2 = 1 m.<br>Volume = π · r² · h = 3 · 1² · 1,5 = 4,5 m³ = 4 500 L.<br>Falta encher [[2|3]]: [[2|3]] · 4 500 = 3 000 L.<br>Tempo: 3 000 ÷ 15 = 200 min = 3 h 20 min → <b>3 h 20 min</b>.`},

/* 13 · m-graf */
{t:'m-graf', d:1, tx:`<p><b>Visitantes de um museu de ciências, por mês</b></p><table class="tb"><tr><th>Mês</th><th>Visitantes</th></tr><tr><td>Janeiro</td><td>12 000</td></tr><tr><td>Fevereiro</td><td>9 000</td></tr><tr><td>Março</td><td>15 000</td></tr><tr><td>Abril</td><td>14 000</td></tr><tr><td>Maio</td><td>18 000</td></tr></table>`,
 q:`De acordo com a tabela, qual foi o maior <b>aumento</b> no número de visitantes de um mês para o mês seguinte?`, o:[
  [`1 000`, `De março para abril o número caiu 1 000 (de 15 000 para 14 000). Foi uma queda, não um aumento.`],
  [`3 000`, `De janeiro para fevereiro o número caiu 3 000. Foi uma queda, não um aumento.`],
  [`4 000`, `De abril para maio houve aumento de 4 000, mas de fevereiro para março o aumento foi maior.`],
  [`6 000`, ``],
  [`9 000`, `9 000 é a diferença entre o maior valor (maio) e o menor (fevereiro), que não são meses seguidos.`]
 ], a:3, e:`Variações de um mês para o seguinte:<br>jan → fev: 9 000 − 12 000 = −3 000 (queda)<br>fev → mar: 15 000 − 9 000 = +6 000<br>mar → abr: 14 000 − 15 000 = −1 000 (queda)<br>abr → mai: 18 000 − 14 000 = +4 000<br>Maior aumento: <b>6 000 visitantes</b> (de fevereiro para março).`},

/* 14 · m-media */
{t:'m-media', d:2, q:`Duas turmas do 9º ano fizeram a mesma prova. A turma A, com 30 alunos, teve média 6,0; a turma B, com 20 alunos, teve média 8,5. Qual foi a média das notas dos 50 alunos juntos?`, o:[
  [`7,0`, ``],
  [`7,25`, `Você fez a média simples de 6,0 e 8,5. As turmas têm tamanhos diferentes, então cada média pesa conforme o número de alunos.`],
  [`7,5`, `Você trocou os pesos: usou 20 alunos com média 6,0 e 30 com média 8,5. A turma maior (30) é a de média 6,0.`],
  [`14,5`, `Você somou as duas médias (6,0 + 8,5). Média não se soma; é preciso dividir o total de pontos pelo total de alunos.`],
  [`17,5`, `Você dividiu o total de pontos (350) por 20, que é só o número de alunos da turma B. São 50 alunos ao todo.`]
 ], a:0, e:`Soma das notas da turma A: 30 × 6,0 = 180.<br>Soma das notas da turma B: 20 × 8,5 = 170.<br>Total: 180 + 170 = 350 pontos para 50 alunos.<br>Média geral: 350 ÷ 50 = <b>7,0</b>.`},

/* 15 · m-cont */
{t:'m-cont', d:3, q:`Numa rifa, os bilhetes são numerados de 100 a 999, sem repetição. Ganha um brinde quem tiver um bilhete cujo número tenha <b>pelo menos um</b> algarismo 7. Quantos bilhetes dão direito a brinde?`, o:[
  [`171`, `Você calculou os números sem nenhum 7 como 9 × 9 × 9 = 729. Mas o algarismo das centenas não pode ser 0: são 8 opções (1 a 9, sem o 7), e o total sem 7 é 648.`],
  [`225`, `225 são os números com <b>exatamente um</b> algarismo 7. Faltaram os que têm dois ou três setes (como 377 ou 777).`],
  [`252`, ``],
  [`280`, `Você somou “7 nas centenas” (100) + “7 nas dezenas” (90) + “7 nas unidades” (90). Assim, números como 777 e 707 são contados mais de uma vez.`],
  [`648`, `648 é a quantidade de bilhetes <b>sem nenhum</b> 7. Faltou subtrair do total de 900 bilhetes.`]
 ], a:2, e:`Conte pelo complementar: total − bilhetes sem nenhum 7.<br>Total de 100 a 999: 900 bilhetes.<br>Sem nenhum 7: centenas com 8 opções (1 a 9, menos o 7), dezenas com 9 (0 a 9, menos o 7) e unidades com 9 → 8 × 9 × 9 = 648.<br>Com pelo menos um 7: 900 − 648 = <b>252</b>.`}
];
