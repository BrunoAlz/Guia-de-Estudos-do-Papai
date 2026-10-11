/* TREINO · Matemática · M1 (Números e operações)
   Formato: {t, d, q, o:[[texto, feedback]...5], a, e, tx?}  ·  ver TREINO_SPEC.md */
const TREINO_M1 = [

/* ---------- m-pct · Porcentagem e percentuais sucessivos (5) ---------- */
{t:'m-pct', d:1, q:`Uma escola tem 640 alunos e 35% deles vão para a aula de ônibus escolar. Quantos alunos usam o ônibus escolar?`, o:[
  [`416`, `Esse é o número de alunos que NÃO usam o ônibus (65% de 640). A pergunta pede os 35%.`],
  [`2 240`, `Você multiplicou 640 por 3,5. Lembre: 35% = 0,35, não 3,5.`],
  [`224`, ``],
  [`22,4`, `Você usou 0,035, que é 3,5%. A forma decimal de 35% é 0,35.`],
  [`192`, `Você calculou só 30% (192) e esqueceu de somar os 5% (32).`]
 ], a:2, e:`35% = 0,35.<br>0,35 × 640 = 224.<br>Outro jeito, sem calculadora: 10% de 640 = 64 → 30% = 192; 5% = 32; 192 + 32 = <b>224 alunos</b>.`},

{t:'m-pct', d:2, q:`Um celular custa R$ 1.500,00. A loja dá 20% de desconto e, para pagamento no Pix, mais 10% de desconto sobre o novo preço. Quanto Richard paga no Pix?`, o:[
  [`R$ 1.080,00`, ``],
  [`R$ 1.050,00`, `Você somou os descontos (20% + 10% = 30%). Descontos sucessivos se multiplicam: o segundo é calculado sobre o preço já reduzido.`],
  [`R$ 1.200,00`, `Esse é o preço só com o primeiro desconto. Faltou aplicar os 10% do Pix.`],
  [`R$ 420,00`, `Esse é o total de desconto em reais (1.500 − 1.080), não o preço a pagar.`],
  [`R$ 1.350,00`, `Esse é o preço só com o desconto de 10%. Faltou aplicar os 20%.`]
 ], a:0, e:`Use os fatores:<ol><li>Desconto de 20% → × 0,80: 1.500 × 0,80 = 1.200.</li><li>Desconto de 10% → × 0,90: 1.200 × 0,90 = 1.080.</li></ol>Preço no Pix: <b>R$ 1.080,00</b> (desconto total de 28%, não de 30%).`},

{t:'m-pct', d:2, q:`Um jogo de videogame custava R$ 250,00 e, na promoção, passou a custar R$ 200,00. De quantos por cento foi o desconto?`, o:[
  [`25%`, `Você dividiu 50 por 200 (o preço novo). A base da variação é sempre o valor ANTIGO: 250.`],
  [`50%`, `50 é o desconto em reais, não em porcentagem. É preciso comparar com o preço antigo.`],
  [`80%`, `200 ÷ 250 = 0,8 mostra que o preço novo é 80% do antigo. O desconto é o que falta: 20%.`],
  [`20%`, ``],
  [`5%`, `Você fez 250 ÷ 50 = 5. A conta certa é diferença ÷ valor antigo: 50 ÷ 250.`]
 ], a:3, e:`Variação: 250 − 200 = 50 reais.<br>Taxa = [[50|250]] = [[1|5]] = 0,20 = <b>20%</b>.<br>A base é sempre o valor antigo.`},

{t:'m-pct', d:3, q:`Depois de um aumento de 25%, uma bicicleta passou a custar R$ 900,00. Qual era o preço antes do aumento?`, o:[
  [`R$ 675,00`, `Você tirou 25% de 900. Mas os 25% foram calculados sobre o preço antigo, não sobre os R$ 900,00.`],
  [`R$ 720,00`, ``],
  [`R$ 1.125,00`, `Você aplicou o aumento de novo (900 × 1,25). O caminho é o contrário: dividir por 1,25.`],
  [`R$ 225,00`, `Esse é 25% de 900, não o preço antigo.`],
  [`R$ 875,00`, `Você subtraiu 25 reais. O aumento foi de 25 por cento, não de 25 reais.`]
 ], a:1, e:`Preço antigo × 1,25 = 900.<br>Preço antigo = 900 ÷ 1,25 = 900 ÷ [[5|4]] = 900 × [[4|5]] = <b>720</b>.<br>Confere: 25% de 720 = 180, e 720 + 180 = 900. ✔`},

{t:'m-pct', d:3, q:`Um videogame custava R$ 2.000,00 e teve um aumento de 25%. Um mês depois, a loja quis voltar exatamente ao preço de R$ 2.000,00. De quantos por cento deve ser o desconto sobre o preço aumentado?`, o:[
  [`25%`, `Com 25% de desconto sobre R$ 2.500,00 o preço cairia para R$ 1.875,00. O desconto é sobre uma base maior, então a porcentagem é menor.`],
  [`80%`, `0,80 é o FATOR (o preço final é 80% do aumentado). O desconto é 100% − 80% = 20%.`],
  [`75%`, `Você fez 100% − 25%. Isso não tem relação com o desconto necessário.`],
  [`30%`, `O desconto não precisa ser maior que o aumento: como é calculado sobre R$ 2.500,00, basta uma porcentagem menor.`],
  [`20%`, ``]
 ], a:4, e:`Preço aumentado: 2.000 × 1,25 = 2.500.<br>Para voltar a 2.000, o desconto em reais é 500.<br>Taxa = [[500|2500]] = [[1|5]] = <b>20%</b>.<br>Com fatores: 1,25 × 0,80 = 1.`},

/* ---------- m-frac · Frações e números decimais (5) ---------- */
{t:'m-frac', d:1, q:`Numa pizza, Léo comeu [[2|5]] e sua irmã comeu [[1|3]]. Que fração da pizza os dois comeram juntos?`, o:[
  [`[[3|8]]`, `Você somou numerador com numerador e denominador com denominador. Para somar, primeiro iguale os denominadores.`],
  [`[[11|15]]`, ``],
  [`[[2|15]]`, `Você multiplicou as frações. A pergunta pede a soma.`],
  [`[[3|15]]`, `Você trocou os denominadores por 15, mas não ajustou os numeradores: [[2|5]] = [[6|15]] e [[1|3]] = [[5|15]].`],
  [`[[11|8]]`, `O numerador está certo, mas o denominador comum é 15 (MMC de 5 e 3), não 5 + 3.`]
 ], a:1, e:`MMC(5, 3) = 15.<br>[[2|5]] = [[6|15]] e [[1|3]] = [[5|15]].<br>[[6|15]] + [[5|15]] = <b>[[11|15]]</b>.`},

{t:'m-frac', d:2, q:`Richard tinha R$ 360,00. Gastou [[1|4]] desse valor num jogo e, depois, [[2|3]] do que sobrou num tênis. Com quanto dinheiro ele ficou?`, o:[
  [`R$ 30,00`, `Você calculou [[2|3]] do total (240), mas o enunciado diz [[2|3]] do que SOBROU.`],
  [`R$ 180,00`, `Esse é o preço do tênis, não o que sobrou.`],
  [`R$ 270,00`, `Esse é o valor que sobrou depois do jogo. Faltou descontar o tênis.`],
  [`R$ 90,00`, ``],
  [`R$ 120,00`, `Você achou que sobrou [[1|3]] do total (120). Mas antes do tênis já tinha saído [[1|4]] com o jogo.`]
 ], a:3, e:`<ol><li>Jogo: [[1|4]] de 360 = 90. Sobram 360 − 90 = 270.</li><li>Tênis: [[2|3]] de 270 = 270 ÷ 3 × 2 = 180.</li><li>Sobram 270 − 180 = <b>R$ 90,00</b>.</li></ol>`},

{t:'m-frac', d:2, q:`Uma garrafa tem [[3|2]] litro de suco. Quantos copos de [[1|4]] de litro dá para encher com ela?`, o:[
  [`6`, ``],
  [`[[3|8]]`, `Você multiplicou as frações. Para saber quantos copos cabem, divida o total pelo tamanho do copo.`],
  [`12`, `Você fez 3 × 4 e esqueceu do denominador 2 da primeira fração.`],
  [`[[1|6]]`, `Você dividiu na ordem trocada ([[1|4]] ÷ [[3|2]]). O total (suco) vem primeiro.`],
  [`3`, `Você dividiu só os numeradores (3 ÷ 1). Na divisão de frações, multiplique pelo inverso da segunda.`]
 ], a:0, e:`Quantos copos = total ÷ tamanho do copo.<br>[[3|2]] ÷ [[1|4]] = [[3|2]] × [[4|1]] = [[12|2]] = <b>6 copos</b>.<br>Em decimal: 1,5 ÷ 0,25 = 6.`},

{t:'m-frac', d:1, q:`Para um bolo, Dona Rosa usou 0,25 kg de farinha e [[3|5]] kg de açúcar. Quantos quilogramas ela usou ao todo desses dois ingredientes?`, o:[
  [`0,55 kg`, `Você trocou [[3|5]] por 0,3. Na verdade, [[3|5]] = 3 ÷ 5 = 0,6.`],
  [`0,28 kg`, `Você somou 0,25 com 0,03. Mas [[3|5]] = 0,6.`],
  [`[[4|9]] kg`, `Você escreveu 0,25 como [[1|4]] (certo) e depois somou numeradores e denominadores. Iguale os denominadores primeiro.`],
  [`[[3|20]] kg`, `Você multiplicou [[1|4]] × [[3|5]]. A pergunta pede a soma.`],
  [`0,85 kg`, ``]
 ], a:4, e:`Transforme tudo em decimal: [[3|5]] = 3 ÷ 5 = 0,6.<br>0,25 + 0,6 = <b>0,85 kg</b>.<br>Em fração: [[1|4]] + [[3|5]] = [[5|20]] + [[12|20]] = [[17|20]] = 0,85.`},

{t:'m-frac', d:3, q:`Em uma turma, [[3|5]] dos alunos são meninas e o resto são meninos. Usam óculos [[1|3]] das meninas e [[1|2]] dos meninos. Que fração da turma usa óculos?`, o:[
  [`[[5|6]]`, `Você somou [[1|3]] + [[1|2]], mas essas frações são de grupos diferentes (meninas e meninos), não da turma toda.`],
  [`[[1|5]]`, `Essa é só a parte das meninas de óculos. Faltou somar os meninos de óculos (também [[1|5]] da turma).`],
  [`[[2|5]]`, ``],
  [`[[5|12]]`, `Você fez a média de [[1|3]] e [[1|2]], como se houvesse o mesmo número de meninas e meninos.`],
  [`[[1|6]]`, `Você multiplicou [[1|3]] × [[1|2]]. Cada fração deve multiplicar a fração do seu próprio grupo.`]
 ], a:2, e:`Meninos: 1 − [[3|5]] = [[2|5]] da turma.<br>Meninas de óculos: [[1|3]] de [[3|5]] = [[1|5]].<br>Meninos de óculos: [[1|2]] de [[2|5]] = [[1|5]].<br>Total: [[1|5]] + [[1|5]] = <b>[[2|5]]</b>.<br>Teste com 30 alunos: 18 meninas (6 de óculos) e 12 meninos (6 de óculos) → 12 de 30 = [[2|5]].`},

/* ---------- m-reais · Números reais (3) ---------- */
{t:'m-reais', d:1, q:`Qual das afirmações abaixo é verdadeira?`, o:[
  [`√{16} é um número irracional, porque é uma raiz.`, `√{16} = 4, que é inteiro e, portanto, racional. Só é irracional a raiz que não dá exata.`],
  [`0,121212… é irracional, porque tem infinitas casas decimais.`, `É uma dízima periódica, e toda dízima periódica é racional: 0,1212… = [[12|99]] = [[4|33]].`],
  [`π é igual a 3,14, por isso é racional.`, `3,14 é só uma aproximação de π. O número π é irracional.`],
  [`√{2} · √{2} é um número racional.`, ``],
  [`A soma de dois números irracionais é sempre irracional.`, `Nem sempre: √{2} + (−√{2}) = 0, que é racional.`]
 ], a:3, e:`√{2} · √{2} = √{4} = 2, que é inteiro, logo <b>racional</b>.<br>Lembre: racional é o que pode virar fração (inteiros, decimais finitos e dízimas periódicas); irracional tem decimal infinito e NÃO periódico.`},

{t:'m-reais', d:2, q:`Ao dividir a conta de uma pizza, o aplicativo mostrou que cada pessoa deveria pagar uma parte igual a 0,2333… do total (o 3 se repete para sempre). Qual fração representa esse número?`, o:[
  [`[[23|99]]`, `Você tratou como dízima simples. Aqui o 2 não se repete (dízima composta), então o denominador é 90.`],
  [`[[23|90]]`, `O denominador está certo, mas faltou subtrair a parte que não se repete: 23 − 2 = 21.`],
  [`[[7|30]]`, ``],
  [`[[233|1000]]`, `Isso é 0,233, um decimal finito. A dízima continua para sempre, então não pode ter denominador 1000.`],
  [`[[21|99]]`, `O numerador 21 está certo, mas com uma casa que não se repete o denominador é 90 (um 9 e um 0).`]
 ], a:2, e:`É dízima composta: o 2 não se repete e o período é 3.<br>Numerador: 23 − 2 = 21. Denominador: um 9 (período) e um 0 (parte que não se repete) = 90.<br>[[21|90]] = <b>[[7|30]]</b> (dividindo por 3).<br>Confere: 7 ÷ 30 = 0,2333…`},

{t:'m-reais', d:3, q:`Uma praça quadrada tem 70 m² de área. Sobre a medida do lado dessa praça, é correto afirmar que ela está:`, o:[
  [`entre 8 m e 9 m, mais perto de 8 m.`, ``],
  [`entre 8 m e 9 m, mais perto de 9 m.`, `O intervalo está certo, mas 8,5² = 72,25, que já passa de 70. Então o lado é menor que 8,5 m e fica mais perto de 8.`],
  [`entre 7 m e 8 m.`, `7² = 49 e 8² = 64; como 70 é maior que 64, o lado é maior que 8 m.`],
  [`em 35 m.`, `Você dividiu a área por 2. O lado do quadrado é a raiz quadrada da área.`],
  [`em 17,5 m.`, `Você dividiu a área por 4, confundindo com o perímetro. O lado é √{70}.`]
 ], a:0, e:`Lado = √{70}.<br>Quadrados perfeitos vizinhos: 64 = 8² e 81 = 9² → 8 &lt; √{70} &lt; 9.<br>Ponto do meio: 8,5² = 72,25, que é maior que 70; então √{70} fica abaixo de 8,5: <b>mais perto de 8</b> (≈ 8,37 m).`},

/* ---------- m-pot · Potências e raízes (3) ---------- */
{t:'m-pot', d:1, q:`Qual é o valor da expressão −2<sup>4</sup> + (−2)<sup>3</sup> + 5<sup>0</sup>?`, o:[
  [`9`, `Você calculou −2<sup>4</sup> como +16. Sem parênteses, só o 2 é elevado: −2<sup>4</sup> = −16.`],
  [`−7`, `Você calculou (−2)<sup>3</sup> como +8. Expoente ímpar mantém o sinal negativo: (−2)<sup>3</sup> = −8.`],
  [`−24`, `Você considerou 5<sup>0</sup> = 0. Todo número diferente de zero elevado a 0 vale 1.`],
  [`−19`, `Você considerou 5<sup>0</sup> = 5. Todo número diferente de zero elevado a 0 vale 1.`],
  [`−23`, ``]
 ], a:4, e:`−2<sup>4</sup> = −(2·2·2·2) = −16.<br>(−2)<sup>3</sup> = (−2)·(−2)·(−2) = −8.<br>5<sup>0</sup> = 1.<br>−16 − 8 + 1 = <b>−23</b>.`},

{t:'m-pot', d:2, q:`Simplificando a expressão √{50} + √{18} − √{8}, obtemos:`, o:[
  [`√{60}`, `Você somou e subtraiu os números de dentro das raízes (50 + 18 − 8). Isso não vale: √{a} + √{b} não é √{a + b}.`],
  [`6√{2}`, ``],
  [`10√{2}`, `Você somou o √{8} (2√{2}) em vez de subtrair.`],
  [`4√{2}`, `Você simplificou √{8} como 4√{2}. O certo é √{4·2} = 2√{2}: sai a raiz de 4, que é 2.`],
  [`6`, `As contas 5 + 3 − 2 = 6 estão certas, mas a √{2} não pode sumir: o resultado é 6√{2}.`]
 ], a:1, e:`Tire os quadrados de dentro de cada raiz:<br>√{50} = √{25·2} = 5√{2}<br>√{18} = √{9·2} = 3√{2}<br>√{8} = √{4·2} = 2√{2}<br>Agora as raízes são iguais: 5√{2} + 3√{2} − 2√{2} = <b>6√{2}</b>.`},

{t:'m-pot', d:3, q:`Quanto vale 2<sup>10</sup> + 2<sup>10</sup> + 2<sup>10</sup> + 2<sup>10</sup>?`, o:[
  [`2<sup>40</sup>`, `Você somou os expoentes. Somar expoentes só vale na MULTIPLICAÇÃO de potências de mesma base, não na adição.`],
  [`8<sup>10</sup>`, `Você somou as bases (2 + 2 + 2 + 2 = 8). Isso não é propriedade de potência.`],
  [`2<sup>12</sup>`, ``],
  [`2<sup>14</sup>`, `Você trocou o 4 por 2<sup>4</sup>. Na verdade, 4 = 2<sup>2</sup>.`],
  [`8<sup>40</sup>`, `Você somou as bases e também os expoentes. Nenhuma das duas coisas vale para a adição.`]
 ], a:2, e:`São 4 parcelas iguais: 4 × 2<sup>10</sup>.<br>Como 4 = 2<sup>2</sup>: 2<sup>2</sup> × 2<sup>10</sup> = 2<sup>2+10</sup> = <b>2<sup>12</sup></b> (= 4 096).`},

/* ---------- m-cient · Notação científica (3) ---------- */
{t:'m-cient', d:1, q:`A distância média entre a Terra e a Lua é de cerca de 384 000 km. Em notação científica, essa distância é:`, o:[
  [`3,84 × 10<sup>5</sup> km`, ``],
  [`384 × 10<sup>3</sup> km`, `O valor é igual, mas não está em notação científica: 384 não está entre 1 e 10.`],
  [`3,84 × 10<sup>6</sup> km`, `Você contou uma casa a mais. Da posição final da vírgula (depois do 3) até o fim do número são 5 casas.`],
  [`38,4 × 10<sup>4</sup> km`, `O valor é igual, mas 38,4 não está entre 1 e 10, então não é notação científica.`],
  [`3,84 × 10<sup>−5</sup> km`, `Expoente negativo é para números menores que 1. Um número grande tem expoente positivo.`]
 ], a:0, e:`Coloque a vírgula depois do primeiro algarismo: 3,84.<br>Ela andou 5 casas para a esquerda (384 000 → 3,84000) → expoente +5.<br>Resposta: <b>3,84 × 10<sup>5</sup> km</b>.`},

{t:'m-cient', d:2, q:`A luz viaja a cerca de 3 × 10<sup>5</sup> km por segundo, e a distância entre o Sol e a Terra é de cerca de 1,5 × 10<sup>8</sup> km. Quanto tempo, aproximadamente, a luz do Sol leva para chegar à Terra?`, o:[
  [`50 segundos`, `Você errou uma casa ao ajustar 0,5 × 10<sup>3</sup>. Ele vale 500, não 50.`],
  [`5 000 segundos`, `Você fez 1,5 ÷ 3 = 0,5 e escreveu 5 × 10<sup>3</sup>, esquecendo que 0,5 = 5 × 10<sup>−1</sup>.`],
  [`0,002 segundo`, `Você dividiu a velocidade pela distância. Tempo = distância ÷ velocidade.`],
  [`500 segundos`, ``],
  [`4,5 × 10<sup>13</sup> segundos`, `Você multiplicou distância por velocidade. Para achar o tempo, divida a distância pela velocidade.`]
 ], a:3, e:`Tempo = distância ÷ velocidade.<br>(1,5 × 10<sup>8</sup>) ÷ (3 × 10<sup>5</sup>) = (1,5 ÷ 3) × 10<sup>8−5</sup> = 0,5 × 10<sup>3</sup>.<br>0,5 × 1 000 = <b>500 segundos</b> (pouco mais de 8 minutos).`},

{t:'m-cient', d:3, q:`Um vírus mede 120 nanômetros. Quantos desses vírus, colocados lado a lado em fila, ocupariam 1,2 milímetro? (Use 1 nm = 10<sup>−9</sup> m e 1 mm = 10<sup>−3</sup> m.)`, o:[
  [`1 000`, `Você escreveu 120 como 1,2 × 10<sup>3</sup> (contou os 3 algarismos), e aí 120 nm virou 1,2 × 10<sup>−6</sup> m. Mas 120 = 1,2 × 10<sup>2</sup>, então 120 nm = 1,2 × 10<sup>−7</sup> m.`],
  [`10 000`, ``],
  [`1 000 000`, `Você escreveu 120 nm como 1,2 × 10<sup>−9</sup> m. Mas 120 nm = 1,2 × 10<sup>2</sup> × 10<sup>−9</sup> = 1,2 × 10<sup>−7</sup> m.`],
  [`10 000 000`, `Você esqueceu de converter os milímetros: usou 1,2 m em vez de 1,2 mm.`],
  [`100`, `Você fez 120 ÷ 1,2 e ignorou as unidades (nanômetro e milímetro são muito diferentes).`]
 ], a:1, e:`Passe tudo para metros:<br>1,2 mm = 1,2 × 10<sup>−3</sup> m.<br>120 nm = 1,2 × 10<sup>2</sup> × 10<sup>−9</sup> = 1,2 × 10<sup>−7</sup> m.<br>Quantidade = (1,2 × 10<sup>−3</sup>) ÷ (1,2 × 10<sup>−7</sup>) = 1 × 10<sup>−3 − (−7)</sup> = 10<sup>4</sup> = <b>10 000 vírus</b>.`},

/* ---------- m-mmc · Múltiplos, divisores, MMC e MDC (3) ---------- */
{t:'m-mmc', d:1, q:`A senha de um cadeado é um número de três algarismos da forma 4_2 (o algarismo do meio sumiu). Richard lembra que a senha é divisível por 9. Qual é o algarismo que falta?`, o:[
  [`6`, `Com 6, a soma dos algarismos é 12: divisível por 3, mas não por 9 (462 ÷ 9 não é exato).`],
  [`0`, `Com 0, a soma dos algarismos é 6, que não é divisível por 9.`],
  [`3`, ``],
  [`9`, `Com 9, a soma dos algarismos é 15, que não é divisível por 9.`],
  [`5`, `Com 5, a soma é 11, que não é divisível por 9. Talvez você tenha pensado no critério do 5, que olha só o último algarismo.`]
 ], a:2, e:`Critério do 9: a soma dos algarismos deve ser divisível por 9.<br>4 + ? + 2 = 6 + ?. O único algarismo (de 0 a 9) que leva a um múltiplo de 9 é 3 (6 + 3 = 9).<br>Senha: 432 = 9 × 48. Algarismo: <b>3</b>.`},

{t:'m-mmc', d:2, q:`Uma professora tem 60 balas e 84 pirulitos. Ela quer montar sacolinhas iguais, com o maior número possível de sacolinhas e sem sobrar nada. Quantas balas haverá em cada sacolinha?`, o:[
  [`12`, `12 é o número de sacolinhas (o MDC). A pergunta é quantas balas vão em cada uma: 60 ÷ 12.`],
  [`7`, `7 é a quantidade de pirulitos em cada sacolinha (84 ÷ 12), não de balas.`],
  [`420`, `420 é o MMC de 60 e 84. “Dividir em partes iguais, sem sobra, do maior jeito possível” pede o MDC.`],
  [`10`, `Você usou 6 sacolinhas: 6 divide 60 e 84, mas não é o MAIOR divisor comum, então dá para montar mais sacolinhas.`],
  [`5`, ``]
 ], a:4, e:`“Maior número de sacolinhas iguais, sem sobra” → MDC.<br>60 = 2²·3·5 e 84 = 2²·3·7 → MDC = 2²·3 = 12 sacolinhas.<br>Balas em cada uma: 60 ÷ 12 = <b>5</b> (e 84 ÷ 12 = 7 pirulitos).`},

{t:'m-mmc', d:3, q:`Três amigos correm em uma pista circular. Ana dá uma volta a cada 6 minutos, Bia a cada 8 minutos e Caio a cada 10 minutos. Eles largam juntos do mesmo ponto, no mesmo sentido, e mantêm o ritmo. Quando os três passarem juntos pelo ponto de largada pela primeira vez, quantas voltas Ana terá completado?`, o:[
  [`20`, ``],
  [`120`, `120 minutos é o tempo até o encontro (o MMC). A pergunta é quantas voltas Ana deu nesse tempo.`],
  [`15`, `15 é o número de voltas da Bia (120 ÷ 8), não da Ana.`],
  [`12`, `12 é o número de voltas do Caio (120 ÷ 10), não da Ana.`],
  [`480`, `Você multiplicou 6 × 8 × 10. Isso dá um múltiplo comum, mas não o MENOR; o encontro acontece antes, em 120 minutos.`]
 ], a:0, e:`“Passar juntos de novo” → MMC.<br>6 = 2·3; 8 = 2³; 10 = 2·5 → MMC = 2³·3·5 = 120 minutos.<br>Voltas da Ana: 120 ÷ 6 = <b>20</b>.`}
];
