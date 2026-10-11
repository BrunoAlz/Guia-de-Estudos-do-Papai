/* REVISÃO TURBINADA · MATEMÁTICA · M1 (Números e operações)
   Tópicos: m-pct, m-frac, m-reais, m-pot, m-cient, m-mmc
   Contas conferidas em plus/check_pm1.py */
const PLUS_M1 = {
 'm-pct': {
  base: [
   [`Porcentagem = "por cem"`, `40% quer dizer 40 de cada 100 → [[40|100]] = 0,4. Se a sala tivesse 100 cadeiras, 40% seriam 40 cadeiras. Se tiver 50 cadeiras, 40% são 20 (metade de 40, porque o todo é metade de 100).`],
   [`100% é o todo`, `100% de 75 = 75 (é tudo). 200% é o dobro (200% de 75 = 150) e 150% é "uma vez e meia": 150% de 40 = 40 + 20 = 60. Porcentagem pode passar de 100%!`],
   [`De % para decimal: a vírgula anda 2 casas`, `Dividir por 100 = andar a vírgula 2 casas para a esquerda: 7% = 0,07 · 12,5% = 0,125 · 120% = 1,2. No caminho de volta, anda 2 casas para a direita: 0,3 = 30%.`],
   [`Porcentagens que são frações famosas`, `50% = [[1|2]] · 25% = [[1|4]] · 75% = [[3|4]] · 20% = [[1|5]] · 10% = [[1|10]] · 12,5% = [[1|8]]. Ex.: 25% de uma pizza = [[1|4]] da pizza = 2 fatias de 8.`],
   [`Toda porcentagem é "DE" alguma coisa`, `A palavra "de" mostra a <b>base</b> (o todo). 10% de 300 = 30, mas 10% de 30 = 3. Mesmo "10%", valores bem diferentes. Antes de calcular, pergunte: "por cento de quem?"`],
   [`Fator multiplicador`, `É o número que transforma o valor antigo no novo de uma vez só. Aumento de 8% → você fica com 108% → × 1,08. Desconto de 8% → sobram 92% → × 0,92. Ex.: R$ 50 com aumento de 8% → 50 × 1,08 = R$ 54.`],
   [`Variação percentual compara com o ANTIGO`, `Preço foi de R$ 40 para R$ 46: subiu 6 reais. Agora pergunte "6 é quantos % de 40?" → [[6|40]] = 0,15 = 15%. A base é sempre o valor de onde se partiu.`],
   [`Achar o valor antes da mudança`, `Se depois de 20% de desconto o preço ficou R$ 64, então 80% do preço antigo é 64. Valor antigo = 64 ÷ 0,8 = R$ 80. Confira: 20% de 80 = 16 e 80 − 16 = 64. ✔`]
  ],
  jeitos: [
   {n:`Decomposição pelos 10%`, c:`10% de qualquer número = anda a vírgula <b>uma</b> casa para a esquerda. 5% = metade de 10%. 1% = anda a vírgula <b>duas</b> casas. Depois monte o que precisa somando ou tirando pedaços.`,
    ex:`30% de 70 → 10% = 7 → 3 × 7 = <b>21</b>.<br>15% de 260 → 10% = 26 e 5% = 13 (metade) → 26 + 13 = <b>39</b>.<br>9% de 300 → 10% = 30 e 1% = 3 → 30 − 3 = <b>27</b>.`},
   {n:`Porcentagem que vira divisão`, c:`Algumas porcentagens são só uma divisão disfarçada: 50% = ÷ 2 (metade) · 25% = ÷ 4 (metade da metade) · 20% = ÷ 5 · 75% = ÷ 4 e × 3.`,
    ex:`25% de 360 → 360 ÷ 2 = 180 → ÷ 2 = <b>90</b>.<br>20% de 85 → 85 ÷ 5 = <b>17</b> (ou 10% = 8,5 → dobro = 17).<br>75% de 48 → 48 ÷ 4 = 12 → 12 × 3 = <b>36</b>.`},
   {n:`Troca-troca: x% de y = y% de x`, c:`Pode inverter os dois números que o resultado é o mesmo (porque [[x|100]] × y = [[y|100]] × x). Use quando um dos lados vira uma porcentagem fácil.`,
    ex:`8% de 25 = 25% de 8 = 8 ÷ 4 = <b>2</b>.<br>16% de 50 = 50% de 16 = <b>8</b>.<br>4% de 75 = 75% de 4 = <b>3</b>.`},
   {n:`Fator multiplicador (um passo só)`, c:`Aumento de i% → × (1 + [[i|100]]). Desconto de i% → × (1 − [[i|100]]). Se forem vários seguidos, multiplique os fatores. No fim, leia o fator: acima de 1 é aumento, abaixo de 1 é desconto.`,
    ex:`R$ 60 com aumento de 5% → 60 × 1,05 = <b>R$ 63</b>.<br>Dois descontos de 10%: 0,9 × 0,9 = 0,81 → sobram 81% → desconto total de <b>19%</b>.<br>Fator 1,32 = aumento de <b>32%</b> · fator 0,75 = desconto de <b>25%</b>.`},
   {n:`Variação: "quanto mudou sobre de onde saiu"`, c:`Faça a diferença e divida pelo valor ANTIGO. Se der uma fração famosa, você já sabe a porcentagem.`,
    ex:`De 80 para 100: mudou 20 → [[20|80]] = [[1|4]] = <b>25% de aumento</b>.<br>De 100 para 80: mudou 20 → [[20|100]] = <b>20% de queda</b>. (Mesma diferença, base diferente, porcentagem diferente!)`},
   {n:`Voltar ao preço antigo: divide pelo fator`, c:`Se o novo valor = antigo × fator, então antigo = novo ÷ fator. Nunca "tire a porcentagem" do valor novo.`,
    ex:`Depois de aumento de 10%, custa R$ 77 → 77 ÷ 1,1 = <b>R$ 70</b>.<br>Depois de desconto de 30%, custa R$ 56 → 56 ÷ 0,7 = <b>R$ 80</b>.`}
  ],
  passo: [
   `Leia e grife: é "x% DE", "aumento", "desconto", "quanto % variou" ou "quanto custava antes"?`,
   `Ache a base: por cento de quem? Do total, do que sobrou, do preço antigo?`,
   `Escolha a ferramenta: x% de → pedaços de 10%/5%/1%; aumento ou desconto → fator; variação → diferença ÷ antigo; valor antigo → divide pelo fator.`,
   `Mais de uma porcentagem seguida? Multiplique os fatores, nunca some as porcentagens.`,
   `Confira o bom senso: desconto tem que diminuir, aumento tem que crescer. Elimine alternativas absurdas.`
  ],
  exs: [
   {q:`Num show com 1 200 pessoas, 15% ganharam uma camiseta. Quantas pessoas ganharam camiseta?`,
    s:[`Uso a decomposição pelos 10%: 10% de 1 200 = 120 (andei a vírgula uma casa).`,`5% é metade de 10%: 60.`,`15% = 10% + 5% = 120 + 60 = 180.`],
    r:`180 pessoas`},
   {q:`Uma bermuda de R$ 120,00 subiu 15% e, no mês seguinte, teve desconto de 15%. Qual é o preço final? Voltou a R$ 120,00?`,
    s:[`Primeiro o aumento: 15% de 120 = 12 + 6 = 18 → 120 + 18 = 138.`,`Agora o desconto é sobre 138 (o valor atual!): 10% = 13,80 e 5% = 6,90 → 15% = 20,70.`,`138 − 20,70 = 117,30. Pelo fator: 1,15 × 0,85 = 0,9775 → ficou 2,25% mais barato.`],
    r:`R$ 117,30 · não volta ao preço inicial`},
   {q:`Em janeiro, o quilo do tomate custava R$ 8,00. Em fevereiro subiu 25% e, em março, passou a custar R$ 9,00. Qual foi a variação de fevereiro para março? E de janeiro para março?`,
    s:[`Fevereiro: 25% de 8 = 8 ÷ 4 = 2 → 8 + 2 = R$ 10,00.`,`Fevereiro → março: de 10 para 9, mudou 1. Base é o antigo (10): [[1|10]] = 10% de queda.`,`Janeiro → março: de 8 para 9, mudou 1. Base 8: [[1|8]] = 12,5% de aumento.`],
    r:`Queda de 10% (fev → mar) · aumento de 12,5% (jan → mar)`}
  ],
  erros: [
   `<b>Errado:</b> dois descontos seguidos de 10% dão 20% de desconto. <b>Certo:</b> 0,9 × 0,9 = 0,81 → o desconto total é 19%.`,
   `<b>Errado:</b> de R$ 80 para R$ 100, aumento de [[20|100]] = 20%. <b>Certo:</b> divida pelo valor antigo: [[20|80]] = 25%.`,
   `<b>Errado:</b> "após 20% de desconto pagou R$ 64; o preço era 64 + 20% de 64 = R$ 76,80". <b>Certo:</b> 64 ÷ 0,8 = R$ 80.`,
   `<b>Errado:</b> 5% = 0,5 e desconto de 8% = × 0,8. <b>Certo:</b> 5% = 0,05 (duas casas!) e desconto de 8% = × 0,92.`
  ],
  resumo: [
   `10% → vírgula 1 casa · 1% → 2 casas · 5% = metade de 10%`,
   `50% = ÷2 · 25% = ÷4 · 20% = ÷5 · 75% = ÷4 × 3`,
   `x% de y = y% de x (8% de 25 = 25% de 8 = 2)`,
   `Aumento i% → × (1 + i%) · desconto → × (1 − i%) · seguidos → multiplica`,
   `Variação = (novo − antigo) ÷ ANTIGO`,
   `Preço de antes = preço novo ÷ fator`
  ]
 },

 'm-frac': {
  base: [
   [`O que a fração diz`, `Em [[3|5]], o de baixo (<b>denominador</b>) diz em quantas partes iguais o inteiro foi cortado; o de cima (<b>numerador</b>) diz quantas partes você pegou. Pizza de 8 fatias, comi 3 → comi [[3|8]].`],
   [`Fração é uma divisão`, `O traço da fração é um "÷". [[3|4]] = 3 ÷ 4 = 0,75. [[9|3]] = 9 ÷ 3 = 3. Por isso o denominador nunca pode ser zero.`],
   [`Frações equivalentes`, `Multiplicar ou dividir em cima e embaixo pelo MESMO número não muda o valor: [[1|2]] = [[2|4]] = [[5|10]] = [[50|100]]. É assim que simplificamos e igualamos denominadores.`],
   [`Fração maior que 1 (imprópria) e número misto`, `[[7|4]] = 7 ÷ 4 = 1 inteiro e sobram 3 quartos → 1 [[3|4]] = 1,75. Quando o de cima é maior que o de baixo, a fração passa de 1 inteiro.`],
   [`Decimal vira fração pela casa decimal`, `Leia o decimal em voz alta: 0,35 = "trinta e cinco centésimos" = [[35|100]] = [[7|20]]. 0,125 = "cento e vinte e cinco milésimos" = [[125|1000]] = [[1|8]].`],
   [`Fração de uma quantidade`, `[[2|5]] de 45: divido 45 em 5 partes (45 ÷ 5 = 9) e pego 2 delas (2 × 9 = 18). Primeiro divide pelo de baixo, depois multiplica pelo de cima.`],
   [`O inverso de um número`, `Inverter é trocar de lugar o de cima com o de baixo: o inverso de [[2|3]] é [[3|2]]; o inverso de 5 (= [[5|1]]) é [[1|5]]. Um número vezes o seu inverso dá sempre 1.`],
   [`O inteiro também é fração`, `1 = [[5|5]] = [[8|8]]. Isso ajuda no "quanto sobrou": comeu [[3|8]] → sobrou [[8|8]] − [[3|8]] = [[5|8]].`]
  ],
  jeitos: [
   {n:`Tabela das frações famosas`, c:`Decore esta tabela: ela transforma fração em decimal e em porcentagem sem fazer conta. Para as outras, multiplique a "fração-unidade": [[3|8]] = 3 × [[1|8]].`,
    ex:`<table class="tb"><tr><th>Fração</th><th>Decimal</th><th>%</th></tr><tr><td>[[1|2]]</td><td>0,5</td><td>50%</td></tr><tr><td>[[1|4]]</td><td>0,25</td><td>25%</td></tr><tr><td>[[3|4]]</td><td>0,75</td><td>75%</td></tr><tr><td>[[1|5]]</td><td>0,2</td><td>20%</td></tr><tr><td>[[1|8]]</td><td>0,125</td><td>12,5%</td></tr><tr><td>[[1|3]]</td><td>0,333…</td><td>≈ 33,3%</td></tr><tr><td>[[2|3]]</td><td>0,666…</td><td>≈ 66,7%</td></tr></table>[[3|8]] = 3 × 0,125 = <b>0,375 = 37,5%</b>.<br>[[2|5]] = 2 × 0,2 = <b>0,4 = 40%</b>.<br>0,6 = 3 × 0,2 = <b>[[3|5]]</b>.`},
   {n:`Simplifica ANTES de multiplicar (corta cruzado)`, c:`Na multiplicação, qualquer número de cima pode ser simplificado com qualquer número de baixo, mesmo em frações diferentes. Os números ficam pequenos e a conta fica de cabeça.`,
    ex:`[[4|9]] × [[15|8]] → 4 com 8 (÷ 4): fica 1 e 2; 15 com 9 (÷ 3): fica 5 e 3 → [[1|3]] × [[5|2]] = <b>[[5|6]]</b>.<br>[[14|15]] × [[25|21]] → 14 com 21 (÷ 7): 2 e 3; 25 com 15 (÷ 5): 5 e 3 → [[2|3]] × [[5|3]] = <b>[[10|9]]</b>.`},
   {n:`Soma pelo MMC: "divide pelo de baixo, multiplica pelo de cima"`, c:`Ache o MMC dos denominadores: ele vira o novo denominador. Para cada fração, divida o MMC pelo denominador antigo e multiplique o resultado pelo numerador.`,
    ex:`[[5|6]] + [[3|8]] → MMC(6, 8) = 24 → 24 ÷ 6 × 5 = 20 e 24 ÷ 8 × 3 = 9 → [[20|24]] + [[9|24]] = <b>[[29|24]]</b>.<br>[[7|10]] − [[2|15]] → MMC = 30 → [[21|30]] − [[4|30]] = <b>[[17|30]]</b>.`},
   {n:`Dividir = multiplicar pelo inverso ("quantos cabem?")`, c:`Mantém a primeira, inverte a segunda e multiplica. Pense: "quantas vezes a segunda cabe na primeira?". Dividir por [[1|3]] é o mesmo que multiplicar por 3.`,
    ex:`[[3|4]] ÷ [[3|8]] = [[3|4]] × [[8|3]] = <b>2</b> (cabem 2 pedaços de [[3|8]] em [[3|4]]).<br>5 ÷ [[1|3]] = 5 × 3 = <b>15</b>.<br>[[2|5]] ÷ 4 = [[2|5]] × [[1|4]] = [[2|20]] = <b>[[1|10]]</b>.`},
   {n:`Comparar por produto cruzado`, c:`Para comparar [[a|b]] com [[c|d]], multiplique em X: compare a × d (lado esquerdo) com c × b (lado direito). O lado com o produto maior tem a fração maior.`,
    ex:`[[5|7]] ou [[7|10]]? 5 × 10 = 50 e 7 × 7 = 49 → 50 &gt; 49 → <b>[[5|7]] é maior</b>.<br>[[4|9]] ou [[5|11]]? 4 × 11 = 44 e 5 × 9 = 45 → <b>[[5|11]] é maior</b>.`},
   {n:`Ache o valor de UMA parte`, c:`Quando a questão dá quanto vale um pedaço da fração e pede o todo: divida pelo numerador para achar 1 parte, depois multiplique pelo denominador.`,
    ex:`[[3|5]] de um número é 24 → [[1|5]] vale 24 ÷ 3 = 8 → o todo ([[5|5]]) vale 8 × 5 = <b>40</b>.<br>[[2|7]] de x = 18 → [[1|7]] = 9 → x = 9 × 7 = <b>63</b>.`}
  ],
  passo: [
   `Identifique o tipo: conta direta, "fração DE", "do que sobrou" ou "uma parte vale tanto, ache o todo".`,
   `Grife a base de cada fração: é do total ou do que sobrou?`,
   `Simplifique tudo o que der antes de fazer qualquer conta.`,
   `Soma ou subtração → MMC · multiplicação → corta cruzado · divisão → inverte a segunda.`,
   `Para comparar ou estimar: decimal da tabela famosa ou produto cruzado.`,
   `Responda ao que foi pedido (fração, quantidade ou o que sobrou) e simplifique o resultado.`
  ],
  exs: [
   {q:`Quanto vale [[2|3]] + [[5|6]] − [[3|4]]?`,
    s:[`Denominadores 3, 6 e 4 → MMC = 12.`,`12 ÷ 3 × 2 = 8 · 12 ÷ 6 × 5 = 10 · 12 ÷ 4 × 3 = 9.`,`[[8|12]] + [[10|12]] − [[9|12]] = [[9|12]] → simplifico por 3 → [[3|4]].`],
    r:`[[3|4]]`},
   {q:`Calcule ([[8|15]] × [[25|12]]) ÷ [[10|9]].`,
    s:[`Primeiro o parêntese, cortando cruzado: 8 com 12 (÷ 4) → 2 e 3; 25 com 15 (÷ 5) → 5 e 3.`,`Fica [[2|3]] × [[5|3]] = [[10|9]].`,`Agora [[10|9]] ÷ [[10|9]]: um número dividido por ele mesmo dá 1 (ou: [[10|9]] × [[9|10]] = 1).`],
    r:`1`},
   {q:`Numa excursão, [[3|8]] dos alunos são do 8º ano, [[2|5]] são do 9º ano e os 18 restantes são do 7º ano. Quantos alunos foram à excursão?`,
    s:[`Somo as frações conhecidas: MMC(8, 5) = 40 → [[15|40]] + [[16|40]] = [[31|40]].`,`O que falta: [[40|40]] − [[31|40]] = [[9|40]]. Esses [[9|40]] são os 18 alunos.`,`Valor de uma parte: [[1|40]] = 18 ÷ 9 = 2 → total = 40 × 2 = 80.`,`Confiro: 30 do 8º + 32 do 9º + 18 do 7º = 80. ✔`],
    r:`80 alunos`}
  ],
  erros: [
   `<b>Errado:</b> [[2|3]] + [[1|5]] = [[3|8]] (somou em cima e embaixo). <b>Certo:</b> [[10|15]] + [[3|15]] = [[13|15]].`,
   `<b>Errado:</b> em [[2|3]] ÷ [[4|5]], inverter a primeira. <b>Certo:</b> mantém a primeira e inverte a segunda: [[2|3]] × [[5|4]] = [[10|12]] = [[5|6]].`,
   `<b>Errado:</b> em [[2 + 5|5]], "cortar o 5" e dar 2. <b>Certo:</b> só se corta o que está multiplicando; aqui é [[7|5]].`,
   `<b>Errado:</b> achar que [[1|8]] é maior que [[1|4]] porque 8 &gt; 4. <b>Certo:</b> mais partes = pedaços menores: [[1|8]] = 0,125 &lt; 0,25 = [[1|4]].`,
   `<b>Errado:</b> 0,3 = [[1|3]]. <b>Certo:</b> 0,3 = [[3|10]]; já [[1|3]] = 0,333…`
  ],
  resumo: [
   `[[1|2]] = 0,5 · [[1|4]] = 0,25 · [[3|4]] = 0,75 · [[1|5]] = 0,2 · [[1|8]] = 0,125 · [[1|3]] = 0,333…`,
   `Somar → MMC · multiplicar → corta cruzado antes`,
   `Dividir → mantém, inverte a segunda, multiplica`,
   `Comparar → produto em X`,
   `"Do que sobrou" → a base mudou!`,
   `Parte vale tanto → ÷ numerador × denominador`
  ]
 },

 'm-reais': {
  base: [
   [`Naturais (ℕ)`, `Os números de contar: 0, 1, 2, 3, 4… Não têm negativos nem vírgula. Ex.: o número de alunos de uma sala.`],
   [`Inteiros (ℤ)`, `Os naturais mais os negativos: …, −3, −2, −1, 0, 1, 2, 3… Ex.: temperatura de −5 °C, saldo de −20 reais.`],
   [`Racionais (ℚ)`, `Todo número que dá para escrever como fração de inteiros (com denominador diferente de 0). Entram os inteiros (−3 = [[−3|1]]), os decimais finitos (0,75 = [[3|4]]) e as dízimas periódicas (0,333… = [[1|3]]).`],
   [`Dízima periódica e período`, `É um decimal infinito em que um bloco se repete para sempre. Esse bloco é o <b>período</b>. Em 0,454545… o período é 45. Em 2,1777… a parte "1" não se repete e o período é 7.`],
   [`Irracionais`, `Decimais infinitos que <b>não</b> repetem bloco nenhum. Não existe fração para eles. Exemplos: √{2} = 1,41421…, √{3}, √{5}, π = 3,14159…, e 0,1010010001… (os zeros vão aumentando, nunca repete).`],
   [`Reais (ℝ)`, `Racionais + irracionais = todos os pontos da reta numérica. Ordem dos conjuntos: ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ, e os irracionais são a parte de ℝ que fica fora de ℚ.`],
   [`Raiz exata x raiz não exata`, `Se o número natural dentro da raiz é um quadrado perfeito (1, 4, 9, 16, 25, 36, 49, 64, 81, 100…), a raiz é exata e o número é racional: √{64} = 8. Se não é (2, 3, 5, 20…), a raiz é irracional: √{20} fica entre 4 e 5.`],
   [`Aproximações que valem ouro`, `√{2} ≈ 1,41 · √{3} ≈ 1,73 · √{5} ≈ 2,24 · π ≈ 3,14. Com elas você estima e ordena sem calculadora. Ex.: 2√{3} ≈ 2 × 1,73 = 3,46.`]
  ],
  jeitos: [
   {n:`Teste da fração`, c:`Para classificar, pergunte só uma coisa: "consigo escrever como fração de inteiros?". Simplifique o número antes: muita coisa que parece irracional é racional disfarçado.`,
    ex:`0,8 = [[8|10]] = [[4|5]] → <b>racional</b>.<br>√{49} = 7 → <b>racional</b>.<br>√{0,25} = 0,5 = [[1|2]] → <b>racional</b> (raiz de decimal também pode ser exata!).`},
   {n:`Sanduíche de quadrados perfeitos`, c:`Para localizar uma raiz, ache os quadrados perfeitos logo abaixo e logo acima. A raiz fica entre as raízes deles e mais perto da raiz do quadrado perfeito de que o número estiver mais próximo. Para afinar, teste uma casa decimal ao quadrado.`,
    ex:`√{60}: 49 &lt; 60 &lt; 64 → entre 7 e 8, mais perto de 8 (60 está a 4 de 64 e a 11 de 49).<br>Afinando: 7,7<sup>2</sup> = 59,29 e 7,8<sup>2</sup> = 60,84 → <b>√{60} está entre 7,7 e 7,8</b>.`},
   {n:`Dízima simples: "período sobre noves"`, c:`Se a dízima começa a repetir logo depois da vírgula, a fração é o período sobre tantos 9 quantos algarismos ele tiver. Se tiver parte inteira, some no final.`,
    ex:`0,777… = <b>[[7|9]]</b>.<br>0,151515… = [[15|99]] = <b>[[5|33]]</b>.<br>2,333… = 2 + [[3|9]] = 2 + [[1|3]] = <b>[[7|3]]</b>.`},
   {n:`Dízima composta: "× 10 e subtrai"`, c:`Chame a dízima de x. Multiplique por 10, 100… até ter duas versões com a MESMA parte que se repete depois da vírgula. Subtraia uma da outra: a parte infinita some.`,
    ex:`x = 0,8333… → 10x = 8,333… e 100x = 83,333…<br>100x − 10x = 83,333… − 8,333… → 90x = 75 → x = [[75|90]] = <b>[[5|6]]</b>.`},
   {n:`Irracional com irracional pode dar racional`, c:`Multiplicar, dividir ou subtrair irracionais às vezes dá um número "bonito". Junte tudo debaixo de uma raiz só e veja se vira quadrado perfeito.`,
    ex:`√{3} × √{12} = √{36} = <b>6</b> (racional).<br>√{8} ÷ √{2} = √{4} = <b>2</b> (racional).<br>π − π = <b>0</b> (racional).`},
   {n:`Para comparar raízes: eleve ao quadrado`, c:`Se os números são positivos, quem tem o quadrado maior é o maior. Assim você compara sem tirar raiz nenhuma.`,
    ex:`3√{2} ou 2√{5}? (3√{2})<sup>2</sup> = 9 × 2 = 18 e (2√{5})<sup>2</sup> = 4 × 5 = 20 → <b>2√{5} é maior</b>.<br>2,8 ou √{8}? 2,8<sup>2</sup> = 7,84 &lt; 8 → <b>√{8} é maior</b>.`}
  ],
  passo: [
   `Simplifique cada número primeiro: a raiz é exata? O decimal acaba? Repete?`,
   `Classifique com o teste da fração: dá para escrever como fração de inteiros → racional; raiz não exata ou π → irracional.`,
   `Para localizar uma raiz, faça o sanduíche de quadrados perfeitos.`,
   `Para ordenar, passe tudo para decimal aproximado ou eleve ao quadrado.`,
   `Dízima → fração: simples = período sobre noves; composta = "× 10 e subtrai".`,
   `Afirmação com "sempre" ou "nunca"? Procure um contraexemplo.`
  ],
  exs: [
   {q:`Classifique cada número em racional ou irracional: √{36}, √{12}, 0,1010010001…, [[−2|3]] e 1,050505…`,
    s:[`√{36} = 6 → racional.`,`√{12}: 12 não é quadrado perfeito (está entre 9 e 16) → irracional.`,`0,1010010001…: infinito e a quantidade de zeros sempre aumenta, não repete bloco → irracional.`,`[[−2|3]] já é fração → racional. 1,050505… repete "05" → dízima periódica → racional.`],
    r:`Racionais: √{36}, [[−2|3]], 1,0505… · Irracionais: √{12}, 0,1010010001…`},
   {q:`Qual é a fração geratriz de 1,2444…?`,
    s:[`Separo a parte inteira: 1,2444… = 1 + 0,2444…`,`x = 0,2444… → 10x = 2,444… e 100x = 24,444…`,`100x − 10x = 22 → 90x = 22 → x = [[22|90]] = [[11|45]].`,`Junto o 1: 1 + [[11|45]] = [[45|45]] + [[11|45]] = [[56|45]].`],
    r:`[[56|45]]`},
   {q:`Coloque em ordem crescente: √{13}, 2√{3}, 3,7 e [[11|3]].`,
    s:[`Todos são positivos, então comparo os quadrados.`,`(√{13})<sup>2</sup> = 13 · (2√{3})<sup>2</sup> = 4 × 3 = 12 · 3,7<sup>2</sup> = 13,69 · ([[11|3]])<sup>2</sup> = [[121|9]] ≈ 13,44.`,`Ordem dos quadrados: 12 &lt; 13 &lt; 13,44 &lt; 13,69.`],
    r:`2√{3} &lt; √{13} &lt; [[11|3]] &lt; 3,7`}
  ],
  erros: [
   `<b>Errado:</b> "toda raiz é irracional". <b>Certo:</b> √{81} = 9 e √{0,04} = 0,2 são racionais. Só a raiz não exata é irracional.`,
   `<b>Errado:</b> "tem infinitas casas, então é irracional". <b>Certo:</b> se repete um bloco, é racional: 0,4545… = [[45|99]] = [[5|11]].`,
   `<b>Errado:</b> √{9 + 16} = √{9} + √{16} = 3 + 4 = 7. <b>Certo:</b> √{9 + 16} = √{25} = 5. Raiz não se separa na soma.`,
   `<b>Errado:</b> 0,2555… = [[25|99]]. <b>Certo:</b> é dízima composta: [[25 − 2|90]] = [[23|90]].`
  ],
  resumo: [
   `ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ`,
   `Racional = vira fração (inclui dízima periódica)`,
   `Irracional = infinito SEM repetir (√ não exata, π)`,
   `Raiz entre inteiros → sanduíche de quadrados perfeitos`,
   `0,ababab… = [[ab|99]] · composta → "× 10 e subtrai"`,
   `Comparar raízes → eleve ao quadrado`
  ]
 },

 'm-pot': {
  base: [
   [`Potência é multiplicação repetida`, `2<sup>5</sup> = 2 × 2 × 2 × 2 × 2 = 32. O 2 é a <b>base</b> (quem se repete) e o 5 é o <b>expoente</b> (quantas vezes). Não é 2 × 5 = 10!`],
   [`Quadrado e cubo`, `"Ao quadrado" é expoente 2 (área de um quadrado: 7<sup>2</sup> = 49). "Ao cubo" é expoente 3 (volume de um cubo: 3<sup>3</sup> = 27).`],
   [`Raiz é o caminho de volta`, `√{49} = 7 porque 7<sup>2</sup> = 49. ∛{64} = 4 porque 4<sup>3</sup> = 64. A raiz pergunta: "que número, elevado a esse índice, dá isso?"`],
   [`Potências de 10`, `10<sup>n</sup> = 1 seguido de n zeros: 10<sup>4</sup> = 10 000. 10<sup>−n</sup> = vírgula com n casas: 10<sup>−3</sup> = 0,001.`],
   [`Sinal da base negativa`, `Expoente par → resultado positivo; ímpar → negativo. (−1)<sup>100</sup> = 1 · (−1)<sup>7</sup> = −1 · (−3)<sup>3</sup> = −27. Sem parênteses, o sinal fica de fora: −3<sup>2</sup> = −9.`],
   [`Por que a<sup>0</sup> = 1`, `2<sup>3</sup> ÷ 2<sup>3</sup> = 2<sup>3−3</sup> = 2<sup>0</sup>. Mas 8 ÷ 8 = 1. Então 2<sup>0</sup> = 1. Vale para qualquer base diferente de zero: 1 000<sup>0</sup> = 1.`],
   [`Expoente negativo inverte`, `5<sup>−2</sup> = [[1|5<sup>2</sup>]] = [[1|25]]. Se a base já é fração, é só virar: ([[2|3]])<sup>−2</sup> = ([[3|2]])<sup>2</sup> = [[9|4]].`],
   [`Potência de fração e de decimal`, `Eleva o de cima e o de baixo: ([[3|4]])<sup>2</sup> = [[9|16]]. No decimal, as casas se multiplicam: 0,3<sup>2</sup> = 0,09 (2 casas) e 0,2<sup>3</sup> = 0,008 (3 casas).`]
  ],
  jeitos: [
   {n:`Tabela de potências e quadrados perfeitos`, c:`Saber essa tabela de cor resolve metade das questões de raiz e potência. Leia nas duas direções: 13<sup>2</sup> = 169 e √{169} = 13.`,
    ex:`<table class="tb"><tr><th>n</th><th>n<sup>2</sup></th><th>n</th><th>n<sup>2</sup></th><th>n</th><th>n<sup>2</sup></th></tr><tr><td>1</td><td>1</td><td>6</td><td>36</td><td>11</td><td>121</td></tr><tr><td>2</td><td>4</td><td>7</td><td>49</td><td>12</td><td>144</td></tr><tr><td>3</td><td>9</td><td>8</td><td>64</td><td>13</td><td>169</td></tr><tr><td>4</td><td>16</td><td>9</td><td>81</td><td>14</td><td>196</td></tr><tr><td>5</td><td>25</td><td>10</td><td>100</td><td>15</td><td>225</td></tr></table>Potências de 2: 2, 4, 8, 16, 32, 64, 128, 256, 512, <b>1 024</b> (2<sup>10</sup>).<br>Potências de 3: 3, 9, 27, 81, <b>243</b> · de 5: 5, 25, 125, <b>625</b> · cubos: 1, 8, 27, 64, 125, <b>216</b>.`},
   {n:`Propriedades: "mesma base, mexe só no expoente"`, c:`Multiplicação de mesma base → <b>soma</b> os expoentes. Divisão → <b>subtrai</b>. Potência de potência → <b>multiplica</b>. A base nunca muda.`,
    ex:`3<sup>4</sup> · 3<sup>2</sup> = 3<sup>6</sup> = <b>729</b>.<br>5<sup>7</sup> ÷ 5<sup>5</sup> = 5<sup>2</sup> = <b>25</b>.<br>(2<sup>3</sup>)<sup>2</sup> = 2<sup>6</sup> = <b>64</b>.`},
   {n:`Iguale as bases (ou os expoentes)`, c:`Bases diferentes? Escreva todas como potência do mesmo número (4 = 2<sup>2</sup>, 8 = 2<sup>3</sup>, 9 = 3<sup>2</sup>, 27 = 3<sup>3</sup>). Expoentes iguais? Multiplique as bases: a<sup>n</sup> · b<sup>n</sup> = (a · b)<sup>n</sup>.`,
    ex:`4<sup>3</sup> · 8 = 2<sup>6</sup> · 2<sup>3</sup> = 2<sup>9</sup> = <b>512</b>.<br>9<sup>2</sup> ÷ 27 = 3<sup>4</sup> ÷ 3<sup>3</sup> = <b>3</b>.<br>2<sup>5</sup> · 5<sup>5</sup> = 10<sup>5</sup> = <b>100 000</b>.`},
   {n:`A escada do expoente (zero e negativo)`, c:`Cada degrau que o expoente desce, você divide pela base. Descendo de 2<sup>3</sup>: 8, 4, 2, 1, [[1|2]], [[1|4]]… Por isso 2<sup>0</sup> = 1 e 2<sup>−2</sup> = [[1|4]].`,
    ex:`10<sup>−2</sup> = [[1|100]] = <b>0,01</b>.<br>([[1|2]])<sup>−3</sup> = 2<sup>3</sup> = <b>8</b>.<br>0,2<sup>−1</sup> = ([[1|5]])<sup>−1</sup> = <b>5</b>.`},
   {n:`Raiz por fatoração: divide o expoente pelo índice`, c:`Fatore o número em primos. Na raiz quadrada, divida cada expoente por 2 (na cúbica, por 3). O que não dividir certinho fica dentro da raiz.`,
    ex:`√{324} = √{2<sup>2</sup> · 3<sup>4</sup>} = 2 · 3<sup>2</sup> = <b>18</b>.<br>∛{216} = ∛{2<sup>3</sup> · 3<sup>3</sup>} = 2 · 3 = <b>6</b>.<br>√{180} = √{2<sup>2</sup> · 3<sup>2</sup> · 5} = 2 · 3 · √{5} = <b>6√{5}</b>.`},
   {n:`Raiz exata pelo último algarismo`, c:`Para raiz de quadrado perfeito grande: o último algarismo diz como a raiz termina (…1 → 1 ou 9; …4 → 2 ou 8; …5 → 5; …6 → 4 ou 6; …9 → 3 ou 7). As dezenas você acha pelo sanduíche (40<sup>2</sup> = 1 600, 50<sup>2</sup> = 2 500).`,
    ex:`√{2 209}: termina em 9 → 3 ou 7. Entre 40<sup>2</sup> e 50<sup>2</sup> → 43 ou 47. Como 45<sup>2</sup> = 2 025 é menor que 2 209 → <b>47</b>.<br>√{1 764}: termina em 4 → 2 ou 8. 40<sup>2</sup> = 1 600 e 45<sup>2</sup> = 2 025 → <b>42</b>.`},
   {n:`Quadrado de número terminado em 5`, c:`Pegue o que vem antes do 5, multiplique pelo seu sucessor e escreva 25 no final.`,
    ex:`35<sup>2</sup> → 3 × 4 = 12 → <b>1 225</b>.<br>65<sup>2</sup> → 6 × 7 = 42 → <b>4 225</b>.`}
  ],
  passo: [
   `Resolva sinais e parênteses: (−a)<sup>n</sup> é diferente de −a<sup>n</sup>.`,
   `Expoente zero → 1. Expoente negativo → inverta a base e deixe o expoente positivo.`,
   `Bases diferentes? Reescreva como potências da mesma base (2, 3, 5 ou 10).`,
   `Aplique as propriedades: multiplica soma, divide subtrai, potência de potência multiplica.`,
   `Raiz: fatore e divida os expoentes pelo índice; o que sobra fica dentro.`,
   `Só no final transforme em número e confira com a tabela.`
  ],
  exs: [
   {q:`Calcule (−2)<sup>3</sup> + 3<sup>2</sup> − 4<sup>0</sup> + 2<sup>−1</sup>.`,
    s:[`(−2)<sup>3</sup>: base negativa com expoente ímpar → −8.`,`3<sup>2</sup> = 9 · 4<sup>0</sup> = 1 · 2<sup>−1</sup> = [[1|2]] (inverte).`,`−8 + 9 − 1 + [[1|2]] = 0 + [[1|2]] = [[1|2]].`],
    r:`[[1|2]]`},
   {q:`Quanto vale (8<sup>2</sup> · 4<sup>3</sup>) ÷ 2<sup>10</sup>?`,
    s:[`Uso o macete de igualar as bases: 8 = 2<sup>3</sup> e 4 = 2<sup>2</sup>.`,`8<sup>2</sup> = (2<sup>3</sup>)<sup>2</sup> = 2<sup>6</sup> e 4<sup>3</sup> = (2<sup>2</sup>)<sup>3</sup> = 2<sup>6</sup>.`,`2<sup>6</sup> · 2<sup>6</sup> = 2<sup>12</sup>. Depois 2<sup>12</sup> ÷ 2<sup>10</sup> = 2<sup>2</sup> = 4.`],
    r:`4`},
   {q:`Quantos algarismos tem o número 5<sup>10</sup> · 2<sup>12</sup>?`,
    s:[`Calcular tudo seria enorme. Uso o macete do "mesmo expoente": separo 2<sup>12</sup> = 2<sup>10</sup> · 2<sup>2</sup>.`,`5<sup>10</sup> · 2<sup>10</sup> = (5 · 2)<sup>10</sup> = 10<sup>10</sup>.`,`Sobra 2<sup>2</sup> = 4 → o número é 4 · 10<sup>10</sup> = 4 seguido de 10 zeros.`,`1 + 10 = 11 algarismos.`],
    r:`11 algarismos`}
  ],
  erros: [
   `<b>Errado:</b> 3<sup>4</sup> = 3 × 4 = 12. <b>Certo:</b> 3 × 3 × 3 × 3 = 81.`,
   `<b>Errado:</b> 2<sup>3</sup> · 2<sup>4</sup> = 4<sup>7</sup> (multiplicou as bases). <b>Certo:</b> a base fica: 2<sup>7</sup> = 128.`,
   `<b>Errado:</b> 5<sup>−2</sup> = −25. <b>Certo:</b> 5<sup>−2</sup> = [[1|25]] (positivo e pequeno).`,
   `<b>Errado:</b> 2<sup>3</sup> + 2<sup>3</sup> = 2<sup>6</sup>. <b>Certo:</b> soma não tem propriedade: 8 + 8 = 16 = 2<sup>4</sup>.`,
   `<b>Errado:</b> √{16} = ±4. <b>Certo:</b> √{16} = 4. Quem tem duas respostas é a equação x<sup>2</sup> = 16 (x = 4 ou x = −4).`
  ],
  resumo: [
   `a<sup>0</sup> = 1 · a<sup>−n</sup> = [[1|a<sup>n</sup>]] (inverte, não fica negativo)`,
   `Mesma base: × → soma · ÷ → subtrai · potência de potência → multiplica`,
   `Mesmo expoente: 2<sup>n</sup> · 5<sup>n</sup> = 10<sup>n</sup>`,
   `Base negativa: par → +, ímpar → −`,
   `Raiz: fatora e divide o expoente pelo índice`,
   `Quadrados até 15<sup>2</sup> = 225 e 2<sup>10</sup> = 1 024 de cor`
  ]
 },

 'm-cient': {
  base: [
   [`A forma certa: a × 10<sup>n</sup>`, `O número da frente (a) tem que ter <b>um só algarismo, diferente de zero, antes da vírgula</b>: 1 ≤ a &lt; 10. 7,2 × 10<sup>6</sup> está certo; 72 × 10<sup>5</sup> e 0,72 × 10<sup>7</sup> valem o mesmo, mas não estão em notação científica.`],
   [`Potências de 10 positivas`, `10<sup>1</sup> = 10 · 10<sup>2</sup> = 100 · 10<sup>3</sup> = mil · 10<sup>6</sup> = milhão · 10<sup>9</sup> = bilhão. O expoente é o número de zeros.`],
   [`Potências de 10 negativas`, `10<sup>−1</sup> = 0,1 (décimo) · 10<sup>−2</sup> = 0,01 (centésimo) · 10<sup>−3</sup> = 0,001 (milésimo) · 10<sup>−6</sup> = 0,000001 (milionésimo). O expoente diz quantas casas depois da vírgula.`],
   [`Multiplicar por 10<sup>n</sup> = mover a vírgula`, `Expoente positivo → a vírgula vai para a direita (o número cresce): 3,4 × 10<sup>3</sup> = 3 400. Expoente negativo → vai para a esquerda: 3,4 × 10<sup>−3</sup> = 0,0034.`],
   [`Prefixos das unidades`, `<table class="tb"><tr><th>Prefixo</th><th>Vale</th><th>Exemplo</th></tr><tr><td>giga (G)</td><td>10<sup>9</sup></td><td>1 GB = 10<sup>9</sup> bytes</td></tr><tr><td>mega (M)</td><td>10<sup>6</sup></td><td>1 MW = 10<sup>6</sup> W</td></tr><tr><td>quilo (k)</td><td>10<sup>3</sup></td><td>1 km = 10<sup>3</sup> m</td></tr><tr><td>mili (m)</td><td>10<sup>−3</sup></td><td>1 mm = 10<sup>−3</sup> m</td></tr><tr><td>micro (µ)</td><td>10<sup>−6</sup></td><td>1 µm = 10<sup>−6</sup> m</td></tr><tr><td>nano (n)</td><td>10<sup>−9</sup></td><td>1 nm = 10<sup>−9</sup> m</td></tr></table>`],
   [`Comparar números em notação científica`, `Primeiro olhe o expoente: o maior expoente vence (se os dois estiverem na forma certa). 4 × 10<sup>8</sup> &gt; 9 × 10<sup>7</sup>, porque 10<sup>8</sup> é 10 vezes 10<sup>7</sup>. Expoentes iguais? Aí compare os números da frente.`],
   [`Milhão e bilhão em palavras`, `2,3 milhões = 2,3 × 10<sup>6</sup> = 2 300 000. 45 bilhões = 45 × 10<sup>9</sup> = 4,5 × 10<sup>10</sup>. Notícias usam muito isso!`]
  ],
  jeitos: [
   {n:`Conte as casas da vírgula`, c:`Ande com a vírgula até ficar um só algarismo (diferente de zero) antes dela. O número de casas é o expoente: número grande → positivo; número miudinho → negativo.`,
    ex:`52 000 000 → 5,2 (a vírgula andou 7 casas para a esquerda) → <b>5,2 × 10<sup>7</sup></b>.<br>0,00009 → 9 (andou 5 casas para a direita) → <b>9 × 10<sup>−5</sup></b>.`},
   {n:`Gangorra: o que um perde, o outro ganha`, c:`Ao ajustar, se o número da frente fica 10 vezes menor, o expoente sobe 1 (e vice-versa). Assim o valor não muda.`,
    ex:`45 × 10<sup>3</sup> = <b>4,5 × 10<sup>4</sup></b> (frente ÷ 10, expoente + 1).<br>0,6 × 10<sup>−2</sup> = <b>6 × 10<sup>−3</sup></b> (frente × 10, expoente − 1).<br>350 × 10<sup>−8</sup> = <b>3,5 × 10<sup>−6</sup></b> (frente ÷ 100, expoente + 2).`},
   {n:`Separa: números com números, potências com potências`, c:`Na multiplicação, multiplique os números da frente e <b>some</b> os expoentes. Na divisão, divida os números e <b>subtraia</b> os expoentes. No fim, use a gangorra para ajustar.`,
    ex:`(2,5 × 10<sup>4</sup>) × (4 × 10<sup>−7</sup>) = 10 × 10<sup>−3</sup> = <b>1 × 10<sup>−2</sup></b>.<br>(9 × 10<sup>5</sup>) ÷ (3 × 10<sup>−2</sup>) = 3 × 10<sup>5 − (−2)</sup> = <b>3 × 10<sup>7</sup></b>.`},
   {n:`Soma: iguale os expoentes antes`, c:`Só dá para somar os números da frente se as potências forem iguais (como somar "laranjas com laranjas"). Use a gangorra para igualar.`,
    ex:`3 × 10<sup>5</sup> + 2 × 10<sup>4</sup> = 30 × 10<sup>4</sup> + 2 × 10<sup>4</sup> = 32 × 10<sup>4</sup> = <b>3,2 × 10<sup>5</sup></b>.`},
   {n:`Palavra vira potência`, c:`Troque a palavra pela potência: mil = 10<sup>3</sup>, milhão = 10<sup>6</sup>, bilhão = 10<sup>9</sup>. Depois ajuste a frente.`,
    ex:`1,8 bilhão = <b>1,8 × 10<sup>9</sup></b>.<br>250 mil = 250 × 10<sup>3</sup> = <b>2,5 × 10<sup>5</sup></b>.`},
   {n:`Trocar unidade = trocar o prefixo pela potência`, c:`Substitua o prefixo pela potência de 10 que ele vale e faça a conta com as potências.`,
    ex:`3 km = 3 × 10<sup>3</sup> m = <b>3 000 m</b>.<br>5 µm em mm: 5 × 10<sup>−6</sup> m e 1 mm = 10<sup>−3</sup> m → 5 × 10<sup>−6</sup> ÷ 10<sup>−3</sup> = <b>5 × 10<sup>−3</sup> mm</b>.`}
  ],
  passo: [
   `Grife números e unidades. Se as unidades forem diferentes, converta para a mesma.`,
   `Escreva cada número como a × 10<sup>n</sup> (palavras como "milhão" viram potência).`,
   `Multiplicação ou divisão: números com números, potências com potências (soma ou subtrai expoentes).`,
   `Soma ou subtração: iguale os expoentes antes.`,
   `Ajuste o resultado para 1 ≤ a &lt; 10 usando a gangorra.`,
   `Confira o bom senso: coisa enorme → expoente positivo; coisa minúscula → negativo.`
  ],
  exs: [
   {q:`Uma bactéria mede 0,000002 m. Escreva essa medida em notação científica e com o prefixo adequado.`,
    s:[`Conto as casas: a vírgula anda 6 casas para a direita até o 2.`,`Número pequeno → expoente negativo: 2 × 10<sup>−6</sup> m.`,`10<sup>−6</sup> é o micro (µ) → 2 µm.`],
    r:`2 × 10<sup>−6</sup> m = 2 µm`},
   {q:`O coração de uma pessoa bate cerca de 1 × 10<sup>5</sup> vezes por dia. Quantas vezes, aproximadamente, ele bate em um ano de 365 dias?`,
    s:[`Escrevo 365 em notação científica: 3,65 × 10<sup>2</sup>.`,`Multiplico separando: (1 × 3,65) × 10<sup>5 + 2</sup> = 3,65 × 10<sup>7</sup>.`,`Isso é 36 500 000, uns 36 milhões e meio de batidas.`],
    r:`3,65 × 10<sup>7</sup> batidas`},
   {q:`O Brasil tem cerca de 2,1 × 10<sup>8</sup> habitantes, e cada pessoa produz em média 1,2 kg de lixo por dia. Quantas toneladas de lixo são produzidas por dia, aproximadamente? (1 t = 10<sup>3</sup> kg)`,
    s:[`Total em kg: (2,1 × 10<sup>8</sup>) × 1,2 = 2,52 × 10<sup>8</sup> kg (2,1 × 1,2 = 2,52).`,`Para toneladas, divido por 10<sup>3</sup>: 2,52 × 10<sup>8 − 3</sup> = 2,52 × 10<sup>5</sup> t.`,`Isso é 252 000 toneladas por dia.`],
    r:`2,52 × 10<sup>5</sup> t (252 mil toneladas)`}
  ],
  erros: [
   `<b>Errado:</b> 0,0005 = 5 × 10<sup>4</sup>. <b>Certo:</b> número menor que 1 tem expoente negativo: 5 × 10<sup>−4</sup>.`,
   `<b>Errado:</b> (3 × 10<sup>4</sup>) × (2 × 10<sup>5</sup>) = 6 × 10<sup>20</sup>. <b>Certo:</b> some os expoentes: 6 × 10<sup>9</sup>.`,
   `<b>Errado:</b> 2 × 10<sup>3</sup> + 3 × 10<sup>3</sup> = 5 × 10<sup>6</sup>. <b>Certo:</b> com potências iguais, só some a frente: 5 × 10<sup>3</sup>.`,
   `<b>Errado:</b> ajustar 23 × 10<sup>4</sup> para 2,3 × 10<sup>3</sup>. <b>Certo:</b> a frente diminuiu, o expoente sobe: 2,3 × 10<sup>5</sup>.`,
   `<b>Errado:</b> achar que 10<sup>−3</sup> é um número negativo. <b>Certo:</b> 10<sup>−3</sup> = 0,001, positivo e pequeno.`
  ],
  resumo: [
   `Forma: a × 10<sup>n</sup>, com 1 ≤ a &lt; 10`,
   `Grande → expoente +; miudinho → expoente −`,
   `Gangorra: frente ÷ 10 ↔ expoente + 1`,
   `× soma expoentes · ÷ subtrai · + iguala antes`,
   `k 10<sup>3</sup> · M 10<sup>6</sup> · G 10<sup>9</sup> · m 10<sup>−3</sup> · µ 10<sup>−6</sup> · n 10<sup>−9</sup>`
  ]
 },

 'm-mmc': {
  base: [
   [`Múltiplo`, `É o resultado da tabuada de um número. Múltiplos de 6: 0, 6, 12, 18, 24, 30… São infinitos.`],
   [`Divisor`, `É quem divide o número sem deixar resto. Divisores de 12: 1, 2, 3, 4, 6 e 12. São poucos (finitos), e o maior é o próprio número.`],
   [`Três frases que dizem a mesma coisa`, `"36 é divisível por 4" = "4 é divisor de 36" = "36 é múltiplo de 4". Todas querem dizer que 36 ÷ 4 dá exato (9).`],
   [`Número primo`, `Tem exatamente dois divisores: 1 e ele mesmo. Primos até 30: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29. O 2 é o único primo par, e o 1 não é primo (só tem um divisor).`],
   [`Fatoração (decomposição em primos)`, `Todo número maior que 1 pode ser escrito como multiplicação de primos, de um jeito só. 60 = 2 · 2 · 3 · 5 = 2<sup>2</sup> · 3 · 5. É a "impressão digital" do número.`],
   [`MMC e MDC: quem é maior?`, `O MMC é o menor múltiplo em comum (fica maior ou igual ao maior número). O MDC é o maior divisor em comum (fica menor ou igual ao menor número). MMC(4, 6) = 12 e MDC(4, 6) = 2.`],
   [`Primos entre si`, `Quando o MDC é 1, não há fator em comum. Aí o MMC é o produto: MMC(8, 9) = 72 e MDC(8, 9) = 1.`],
   [`Um divide o outro`, `Se o menor divide o maior, o MMC é o maior e o MDC é o menor: MMC(5, 20) = 20 e MDC(5, 20) = 5.`]
  ],
  jeitos: [
   {n:`Critérios do fim: 2, 4, 5 e 10`, c:`Olhe só o final do número. Por 2: termina em par (0, 2, 4, 6, 8). Por 5: termina em 0 ou 5. Por 10: termina em 0. Por 4: os <b>dois últimos algarismos</b> formam um número divisível por 4 (ou terminam em 00).`,
    ex:`3 470 → termina em 0 → <b>divisível por 2, 5 e 10</b>.<br>1 316 → dois últimos: 16, e 16 ÷ 4 = 4 → <b>divisível por 4</b>.<br>3 418 → dois últimos: 18, que não é múltiplo de 4 → <b>não é divisível por 4</b> (mesmo sendo par).`},
   {n:`Critérios da soma: 3 e 9`, c:`Some os algarismos. Se a soma for múltiplo de 3, o número é divisível por 3; se for múltiplo de 9, é divisível por 9. Se a soma ainda for grande, some de novo.`,
    ex:`4 128 → 4 + 1 + 2 + 8 = 15 → <b>divisível por 3</b>, mas não por 9.<br>7 362 → 7 + 3 + 6 + 2 = 18 → <b>divisível por 3 e por 9</b> (7 362 ÷ 9 = 818).`},
   {n:`Critério do 6: "2 e 3 ao mesmo tempo"`, c:`Para ser divisível por 6, o número precisa passar nos DOIS testes: ser par e ter soma dos algarismos múltipla de 3.`,
    ex:`2 514 → é par e 2 + 5 + 1 + 4 = 12 → <b>divisível por 6</b> (2 514 ÷ 6 = 419).<br>1 215 → soma 9, mas é ímpar → <b>não é divisível por 6</b>.`},
   {n:`Fatoração simultânea (o "varal")`, c:`Coloque os números lado a lado e divida todos pelos primos (2, 3, 5…), baixando quem não divide. Marque (*) o primo que dividiu TODOS de uma vez. MMC = produto de todos os primos usados; MDC = produto só dos marcados.`,
    ex:`<table class="tb"><tr><th>12</th><th>18</th><th>30</th><th>primo</th></tr><tr><td>6</td><td>9</td><td>15</td><td>2 *</td></tr><tr><td>3</td><td>9</td><td>15</td><td>2</td></tr><tr><td>1</td><td>3</td><td>5</td><td>3 *</td></tr><tr><td>1</td><td>1</td><td>5</td><td>3</td></tr><tr><td>1</td><td>1</td><td>1</td><td>5</td></tr></table>MMC = 2 · 2 · 3 · 3 · 5 = <b>180</b> · MDC = 2 · 3 = <b>6</b> (só os marcados).`},
   {n:`MMC rápido: múltiplos do maior`, c:`Para dois números pequenos, vá escrevendo a tabuada do MAIOR e pare no primeiro que o menor também divide.`,
    ex:`MMC(8, 12): 12 (8 não divide), 24 (8 divide!) → <b>24</b>.<br>MMC(15, 20): 20, 40, 60 → 15 divide 60 → <b>60</b>.`},
   {n:`Atalho MMC × MDC = a × b`, c:`Para dois números, se você já tem um dos dois (MMC ou MDC), o outro sai por divisão.`,
    ex:`MDC(18, 24) = 6 → MMC = 18 × 24 ÷ 6 = 432 ÷ 6 = <b>72</b>.`}
  ],
  passo: [
   `Leia o verbo: "encontrar de novo", "coincidir", "próxima vez juntos" → MMC. "Dividir", "repartir", "maior tamanho possível", "sem sobra" → MDC.`,
   `Fatore os números (de preferência na fatoração simultânea).`,
   `MMC → todos os primos usados. MDC → só os que dividiram todos ao mesmo tempo.`,
   `Responda à pergunta de verdade: horário (some ao início), quantidade de pedaços ou kits (divida cada número pelo MDC).`,
   `Confira: o MMC tem que ser múltiplo de todos; o MDC tem que dividir todos.`
  ],
  exs: [
   {q:`Qual destes números é divisível ao mesmo tempo por 2, 3, 4, 5, 6, 9 e 10: 4 410, 1 254, 3 105 ou 2 340?`,
    s:[`Por 10 elimino rápido: tem que terminar em 0. Sobram 4 410 e 2 340.`,`Teste do 4 (dois últimos): 4 410 → 10 não é múltiplo de 4 ✘. 2 340 → 40 ÷ 4 = 10 ✔.`,`Teste da soma em 2 340: 2 + 3 + 4 + 0 = 9 → divisível por 3 e por 9; sendo par, também por 6.`],
    r:`2 340`},
   {q:`Lia toma o remédio A a cada 6 horas e o remédio B a cada 8 horas. Ela tomou os dois juntos às 7h de segunda-feira. Quando vai tomá-los juntos de novo?`,
    s:[`"Juntos de novo" → MMC.`,`Múltiplos do maior (8): 8, 16, 24 → 6 divide 24. MMC = 24 horas.`,`24 horas depois de 7h de segunda é 7h de terça.`],
    r:`Às 7h de terça-feira`},
   {q:`Um terreno retangular mede 84 m por 120 m. Ele será cercado com estacas igualmente espaçadas, com a maior distância possível entre elas e uma estaca em cada canto. Quantas estacas serão usadas?`,
    s:[`"Maior distância possível" e tem que caber certinho nos dois lados → MDC(84, 120).`,`84 = 2<sup>2</sup> · 3 · 7 e 120 = 2<sup>3</sup> · 3 · 5 → comuns com menor expoente: 2<sup>2</sup> · 3 = 12 m.`,`Perímetro: 2 × (84 + 120) = 408 m. Numa cerca fechada, nº de estacas = nº de espaços = 408 ÷ 12 = 34.`],
    r:`34 estacas (espaçadas de 12 m)`}
  ],
  erros: [
   `<b>Errado:</b> usar MMC num problema de "dividir em grupos iguais do maior tamanho". <b>Certo:</b> dividir/repartir é MDC; o MMC é para "encontrar de novo".`,
   `<b>Errado:</b> parar no MDC quando a pergunta é "quantos pedaços". <b>Certo:</b> depois do MDC, divida cada quantidade por ele e some.`,
   `<b>Errado:</b> "18 é par, então é divisível por 4". <b>Certo:</b> o teste do 4 olha os dois últimos algarismos: 18 não é múltiplo de 4 (mas 116 é, pois 16 é).`,
   `<b>Errado:</b> "15 é divisível por 3, então é divisível por 6". <b>Certo:</b> para o 6, precisa ser par E divisível por 3.`,
   `<b>Errado:</b> o 1 e o 9 são primos. <b>Certo:</b> o 1 tem só um divisor e 9 = 3 × 3. O menor primo é o 2.`
  ],
  resumo: [
   `Fim: 2 → par · 5 → 0 ou 5 · 10 → 0 · 4 → dois últimos`,
   `Soma dos algarismos: 3 e 9 · 6 = par + soma múltipla de 3`,
   `Encontrar de novo → MMC · dividir sem sobra → MDC`,
   `Varal: MMC = todos os primos · MDC = só os que dividiram todos`,
   `Dois números: MMC × MDC = a × b`
  ]
 }
};
