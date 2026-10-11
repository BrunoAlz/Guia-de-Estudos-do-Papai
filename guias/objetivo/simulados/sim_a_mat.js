/* SIMULADO A · Matemática (15 questões, na ordem da prova)
   Formato: {t, d, q, o:[[texto, feedback]...5], a, e, tx?, tt?}  ·  ver SIMULADO_SPEC.md
   Alternativas NÃO são embaralhadas: a ordem abaixo é a da prova. */
const SIM_A_MAT = [

/* 1 · m-pct · d1 */
{t:'m-pct', d:1, q:`Numa turma de 40 alunos, 14 vão para a escola de bicicleta. Que porcentagem da turma vai de bicicleta?`, o:[
  [`14%`, `14 é a quantidade de alunos, não a porcentagem. É preciso comparar 14 com o total de 40.`],
  [`26%`, `26 é o número de alunos que NÃO vão de bicicleta (40 − 14), e ainda assim não é porcentagem.`],
  [`35%`, ``],
  [`40%`, `40 é o total de alunos da turma, não a porcentagem procurada.`],
  [`65%`, `Essa é a porcentagem dos que NÃO vão de bicicleta (26 de 40). A pergunta pede os que vão.`]
 ], a:2, e:`Porcentagem = parte ÷ total × 100.<br>14 ÷ 40 = 0,35 = 35%.<br>Outro jeito: [[14|40]] = [[35|100]] (multiplicando em cima e embaixo por 2,5).`},

/* 2 · m-frac · d2 */
{t:'m-frac', d:2, q:`Uma caixa-d'água estava com [[3|4]] da sua capacidade. Foram gastos 600 litros e ela ficou com metade da capacidade. Qual é a capacidade total da caixa-d'água?`, o:[
  [`150 litros`, `Você multiplicou 600 por [[1|4]]. Mas 600 litros SÃO [[1|4]] da caixa: é preciso multiplicar por 4.`],
  [`800 litros`, `Você dividiu 600 por [[3|4]], como se 600 litros fossem [[3|4]] da caixa. Os 600 litros são a diferença entre [[3|4]] e [[1|2]].`],
  [`1 200 litros`, `Você dividiu 600 por [[1|2]], como se 600 litros fossem metade da caixa. Os 600 litros correspondem a [[3|4]] − [[1|2]].`],
  [`1 800 litros`, `Esse é o volume que havia no começo ([[3|4]] de 2 400). A pergunta pede a capacidade total.`],
  [`2 400 litros`, ``]
 ], a:4, e:`A parte gasta é [[3|4]] − [[1|2]] = [[3|4]] − [[2|4]] = [[1|4]] da capacidade.<br>Então [[1|4]] da capacidade = 600 L.<br>Capacidade = 600 × 4 = 2 400 L.<br>Conferindo: [[3|4]] de 2 400 = 1 800; 1 800 − 600 = 1 200 = metade de 2 400. ✔`},

/* 3 · m-pot · d2 */
{t:'m-pot', d:2, q:`Qual é o valor da expressão (0,5)<sup>−2</sup> + 8<sup>2/3</sup> − 2<sup>0</sup>?`, o:[
  [`2,75`, `Você trocou o expoente negativo por sinal negativo: (0,5)<sup>−2</sup> não é −0,25. Expoente negativo inverte a base: (0,5)<sup>−2</sup> = 2<sup>2</sup> = 4.`],
  [`3,25`, `Você calculou (0,5)<sup>2</sup> = 0,25, ignorando o sinal do expoente. (0,5)<sup>−2</sup> = ([[1|2]])<sup>−2</sup> = 2<sup>2</sup> = 4.`],
  [`6`, `Você considerou 2<sup>0</sup> = 2. Todo número diferente de zero elevado a 0 vale 1.`],
  [`7`, ``],
  [`8`, `Você considerou 2<sup>0</sup> = 0. Todo número diferente de zero elevado a 0 vale 1.`]
 ], a:3, e:`(0,5)<sup>−2</sup> = ([[1|2]])<sup>−2</sup> = 2<sup>2</sup> = 4 (expoente negativo inverte a base).<br>8<sup>2/3</sup> = (∛8)<sup>2</sup> = 2<sup>2</sup> = 4.<br>2<sup>0</sup> = 1.<br>Total: 4 + 4 − 1 = 7.`},

/* 4 · m-eq1 · d1 */
{t:'m-eq1', d:1, q:`Lucas comprou 3 cadernos iguais e uma mochila de R$ 84,00, pagando R$ 150,00 ao todo. Quanto custou cada caderno?`, o:[
  [`R$ 22,00`, ``],
  [`R$ 37,50`, `Você dividiu R$ 150,00 por 4 itens, como se a mochila custasse o mesmo que um caderno.`],
  [`R$ 50,00`, `Você dividiu o total por 3 e esqueceu de descontar o preço da mochila.`],
  [`R$ 66,00`, `Esse é o preço dos 3 cadernos juntos. Falta dividir por 3.`],
  [`R$ 78,00`, `Você somou 84 a 150 em vez de subtrair: ao passar o 84 para o outro lado, o sinal troca para menos.`]
 ], a:0, e:`Seja x o preço de um caderno: 3x + 84 = 150.<br>3x = 150 − 84 = 66.<br>x = 66 ÷ 3 = 22.<br>Conferindo: 3 × 22 + 84 = 66 + 84 = 150. ✔`},

/* 5 · m-sist · d2 */
{t:'m-sist', d:2, q:`Hoje, a soma das idades de Marta e de sua filha Júlia é 50 anos. Há 5 anos, a idade de Marta era o quádruplo da idade de Júlia. Quantos anos Marta tem hoje?`, o:[
  [`8`, `Essa é a idade de Júlia há 5 anos. A pergunta é a idade de Marta hoje.`],
  [`13`, `Essa é a idade de Júlia hoje. A pergunta é a idade de Marta.`],
  [`32`, `Essa é a idade de Marta há 5 anos. Falta somar 5 para chegar à idade de hoje.`],
  [`36`, `Você tirou 5 anos só da idade de Júlia e esqueceu de tirar da idade de Marta: há 5 anos, as DUAS eram 5 anos mais novas.`],
  [`37`, ``]
 ], a:4, e:`Idades hoje: Marta = m e Júlia = j.<br>1ª equação: m + j = 50.<br>Há 5 anos: m − 5 = 4(j − 5) → m − 5 = 4j − 20 → m = 4j − 15.<br>Substituindo: 4j − 15 + j = 50 → 5j = 65 → j = 13.<br>m = 50 − 13 = 37.<br>Conferindo: há 5 anos, 32 e 8, e 32 = 4 × 8. ✔`},

/* 6 · m-eq2 · d3 */
{t:'m-eq2', d:3, q:`Um grupo de amigos alugou uma van por R$ 600,00, e o valor seria dividido igualmente entre todos. Na véspera, 2 amigos desistiram, e cada um dos que foram teve de pagar R$ 25,00 a mais do que o combinado. Quantos amigos havia no grupo inicialmente?`, o:[
  [`6`, `6 é o número de amigos que FORAM (e pagaram R$ 100,00 cada). A pergunta pede quantos havia no início.`],
  [`8`, ``],
  [`10`, `Você achou 8 e somou os 2 que desistiram, mas 8 já é o grupo inicial: 600 ÷ 8 = 75 e 600 ÷ 6 = 100, diferença de 25.`],
  [`24`, `Você fez 600 ÷ 25. Mas R$ 25,00 é o aumento por pessoa, não o valor que cada um pagaria.`],
  [`48`, `48 é o termo independente da equação n<sup>2</sup> − 2n − 48 = 0, não a raiz. É preciso resolver a equação.`]
 ], a:1, e:`Seja n o número inicial de amigos. Combinado: [[600|n]] por pessoa. Depois: [[600|n − 2]].<br>[[600|n − 2]] − [[600|n]] = 25.<br>Multiplicando tudo por n(n − 2): 600n − 600(n − 2) = 25n(n − 2) → 1 200 = 25n<sup>2</sup> − 50n.<br>Dividindo por 25: n<sup>2</sup> − 2n − 48 = 0.<br>Δ = 4 + 192 = 196 → √{196} = 14 → n = [[2 ± 14|2]] → 8 ou −6. Não existe grupo negativo: n = 8.<br>Conferindo: 600 ÷ 8 = 75 e 600 ÷ 6 = 100; 100 − 75 = 25. ✔`},

/* 7 · m-prop · d2 */
{t:'m-prop', d:2, q:`Numa gráfica, 6 impressoras iguais imprimem 360 cartazes em 5 horas. Trabalhando no mesmo ritmo, quantos cartazes 8 dessas impressoras imprimem em 3 horas?`, o:[
  [`162`, `Você tratou o número de impressoras como inversamente proporcional (360 × [[6|8]] × [[3|5]]). Mais impressoras produzem MAIS cartazes: as duas grandezas são diretamente proporcionais à produção.`],
  [`216`, `Você só ajustou o tempo (360 × [[3|5]]) e esqueceu que agora são 8 impressoras, e não 6.`],
  [`288`, ``],
  [`480`, `Você só ajustou o número de impressoras (360 × [[8|6]]) e esqueceu que agora são só 3 horas, e não 5.`],
  [`800`, `Você tratou o tempo como inversamente proporcional. Menos horas de trabalho produzem MENOS cartazes.`]
 ], a:2, e:`Regra de três composta: cartazes são diretamente proporcionais às impressoras e às horas.<br>Uma impressora em 1 hora: 360 ÷ (6 × 5) = 360 ÷ 30 = 12 cartazes.<br>8 impressoras em 3 horas: 12 × 8 × 3 = 288 cartazes.<br>Ou: 360 × [[8|6]] × [[3|5]] = 288.`},

/* 8 · m-func · d1 */
{t:'m-func', d:1, q:`Uma academia cobra uma taxa de matrícula de R$ 60,00, paga uma única vez, e uma mensalidade de R$ 90,00. Qual expressão dá o gasto total y, em reais, de quem frequenta a academia por x meses (incluindo a matrícula)?`, o:[
  [`y = 60x + 90`, `Você trocou os papéis: o valor que se repete todo mês (e por isso multiplica x) é a mensalidade de R$ 90,00. A matrícula é paga uma vez só.`],
  [`y = 90x + 60`, ``],
  [`y = 150x`, `Assim a matrícula seria cobrada todo mês. Ela é paga uma única vez, então não multiplica x.`],
  [`y = 90x − 60`, `A matrícula é um gasto a mais, então deve ser somada, e não subtraída.`],
  [`y = x + 150`, `Assim cada mês custaria só R$ 1,00. A mensalidade de R$ 90,00 precisa multiplicar o número de meses.`]
 ], a:1, e:`O que se repete a cada mês multiplica x: 90x.<br>O que é pago uma vez só é o valor fixo: + 60.<br>y = 90x + 60. Exemplo: 3 meses → 90 × 3 + 60 = 330 reais.`},

/* 9 · m-ang · d1 */
{t:'m-ang', d:1, q:`Uma ciclovia reta atravessa duas linhas de trem paralelas, sem ser perpendicular a elas. No primeiro cruzamento, o ângulo agudo entre a ciclovia e o trilho mede 48°. Quanto mede cada ângulo obtuso formado no segundo cruzamento?`, o:[
  [`42°`, `42° é o complemento de 48° (soma 90°). O ângulo agudo e o obtuso formados com a transversal são suplementares: somam 180°.`],
  [`48°`, `48° é a medida de cada ângulo AGUDO. A pergunta pede os ângulos obtusos.`],
  [`90°`, `Os ângulos só seriam de 90° se a ciclovia fosse perpendicular aos trilhos, e o enunciado diz que não é.`],
  [`132°`, ``],
  [`312°`, `Você subtraiu 48° de 360°. O agudo e o obtuso vizinhos ficam sobre uma reta e somam 180°.`]
 ], a:3, e:`Paralelas cortadas por uma transversal formam só dois tamanhos de ângulo: um agudo e um obtuso, que somam 180°.<br>Nos dois cruzamentos os agudos medem 48° (ângulos correspondentes ou alternos são iguais).<br>Cada obtuso: 180° − 48° = 132°.`},

/* 10 · m-sem · d3 */
{t:'m-sem', d:3, q:`Uma placa de madeira tem a forma de um triângulo com base de 12 dm e altura de 8 dm (altura relativa a essa base). Dela será recortada uma placa quadrada, com um lado apoiado sobre a base do triângulo e os outros dois vértices sobre os outros dois lados do triângulo. Quanto mede o lado do quadrado?`, o:[
  [`3,2 dm`, `Você trocou as medidas correspondentes na proporção ([[x|8]] = [[8 − x|12]]). O lado de cima do quadrado corresponde à BASE (12), e a altura do triângulo pequeno corresponde à ALTURA (8).`],
  [`4 dm`, `4 é a metade da altura. Com lado 4, o topo do quadrado ficaria a 4 dm de altura, onde o triângulo tem 6 dm de largura: o quadrado não encostaria nos dois lados.`],
  [`4,8 dm`, ``],
  [`6 dm`, `6 é a metade da base. Com lado 6, o topo do quadrado ficaria a 6 dm de altura, onde o triângulo tem só 3 dm de largura: o quadrado não caberia.`],
  [`10 dm`, `10 é a média entre 12 e 8, e nem caberia: o lado do quadrado tem de ser menor que a altura, 8 dm.`]
 ], a:2, e:`Acima do quadrado sobra um triângulo pequeno, semelhante ao grande (o lado de cima do quadrado é paralelo à base).<br>No triângulo pequeno: base = x (lado do quadrado) e altura = 8 − x.<br>Semelhança (base com base, altura com altura): [[x|12]] = [[8 − x|8]].<br>8x = 12(8 − x) → 8x = 96 − 12x → 20x = 96 → x = 4,8 dm.<br>Conferindo: [[4,8|12]] = 0,4 e [[3,2|8]] = 0,4. ✔`},

/* 11 · m-pit · d2 */
{t:'m-pit', d:2, q:`Uma caixa de presente tem a forma de um paralelepípedo de 12 cm de comprimento, 4 cm de largura e 3 cm de altura. Qual é o comprimento do maior palito reto (desprezando a espessura) que cabe dentro da caixa fechada, indo de um canto do fundo até o canto oposto da tampa?`, o:[
  [`5 cm`, `5 cm é a diagonal da lateral de 4 cm por 3 cm. O palito precisa atravessar a caixa inteira, incluindo os 12 cm.`],
  [`12 cm`, `12 cm é só a maior aresta. Na diagonal cabe um palito maior.`],
  [`4√{10} cm`, `4√{10} cm (cerca de 12,6 cm) é só a diagonal do fundo (12 por 4). Falta usar Pitágoras de novo com a altura de 3 cm.`],
  [`13 cm`, ``],
  [`19 cm`, `Você somou as três medidas (12 + 4 + 3). Isso seria andar pelas arestas, e não em linha reta.`]
 ], a:3, e:`1º Pitágoras (diagonal do fundo): d<sup>2</sup> = 12<sup>2</sup> + 4<sup>2</sup> = 144 + 16 = 160.<br>2º Pitágoras (diagonal da caixa, com a altura 3): D<sup>2</sup> = d<sup>2</sup> + 3<sup>2</sup> = 160 + 9 = 169.<br>D = √{169} = 13 cm.`},

/* 12 · m-area · d3 */
{t:'m-area', d:3, q:`Um azulejo quadrado ABCD tem 10 cm de lado. Nele foram desenhados dois arcos, ambos ligando B a D: um é o quarto de circunferência de centro A e raio 10 cm, e o outro é o quarto de circunferência de centro C e raio 10 cm. A região entre os dois arcos, que lembra uma folha, foi pintada de verde. Qual é a área pintada de verde? (Use π ≈ 3,14.)`, o:[
  [`21,5 cm<sup>2</sup>`, `Esse é o que sobra do quadrado fora de UM quarto de círculo (100 − 78,5). A folha é a parte comum aos dois quartos de círculo.`],
  [`28,5 cm<sup>2</sup>`, `Essa é só a metade da folha (quarto de círculo menos o triângulo ABD). A diagonal BD divide a folha em duas metades iguais.`],
  [`43 cm<sup>2</sup>`, `Essa é a área do azulejo que ficou FORA da folha (100 − 57).`],
  [`57 cm<sup>2</sup>`, ``],
  [`78,5 cm<sup>2</sup>`, `Essa é a área de um quarto de círculo inteiro ([[1|4]] × 3,14 × 100). A folha é só a parte comum aos dois.`]
 ], a:3, e:`A diagonal BD divide a folha em duas metades iguais.<br>Cada metade = quarto de círculo − triângulo retângulo.<br>Quarto de círculo: [[1|4]] × 3,14 × 10<sup>2</sup> = 78,5 cm<sup>2</sup>.<br>Triângulo (metade do quadrado): [[10 × 10|2]] = 50 cm<sup>2</sup>.<br>Meia folha: 78,5 − 50 = 28,5 cm<sup>2</sup>. Folha inteira: 2 × 28,5 = 57 cm<sup>2</sup>.`},

/* 13 · m-graf · d2 */
{t:'m-graf', d:2, tx:`<p><b>Consumo de água de uma casa (em m<sup>3</sup>), de janeiro a junho</b></p><table class="tb"><tr><th>Mês</th><th>Jan</th><th>Fev</th><th>Mar</th><th>Abr</th><th>Mai</th><th>Jun</th></tr><tr><td>Consumo (m<sup>3</sup>)</td><td>10</td><td>14</td><td>15</td><td>20</td><td>18</td><td>22</td></tr></table>`,
 q:`De acordo com a tabela, em qual mês houve o maior aumento <b>percentual</b> do consumo em relação ao mês anterior?`, o:[
  [`Fevereiro`, ``],
  [`Março`, `Em março o consumo subiu só 1 m<sup>3</sup> sobre 14, cerca de 7%, o menor aumento do período.`],
  [`Abril`, `Abril teve o maior aumento em m<sup>3</sup> (5), mas sobre uma base de 15: 5 ÷ 15 ≈ 33%. Em fevereiro, 4 sobre 10 deu 40%.`],
  [`Maio`, `Em maio o consumo caiu (de 20 para 18). Não houve aumento.`],
  [`Junho`, `Junho tem o MAIOR consumo, mas o aumento foi de 4 sobre 18, cerca de 22%.`]
 ], a:0, e:`Aumento percentual = [[novo − antigo|antigo]] × 100.<br>Fev: [[4|10]] = 40% · Mar: [[1|14]] ≈ 7% · Abr: [[5|15]] ≈ 33% · Mai: queda · Jun: [[4|18]] ≈ 22%.<br>O maior é fevereiro, com 40%. Cuidado: o maior aumento em m<sup>3</sup> (abril) não é o maior em porcentagem, porque a base é diferente.`},

/* 14 · m-media · d1 */
{t:'m-media', d:1, tx:`<p><b>Número de irmãos dos alunos do 9º ano B</b></p><table class="tb"><tr><th>Número de irmãos</th><th>Quantidade de alunos</th></tr><tr><td>0</td><td>5</td></tr><tr><td>1</td><td>9</td></tr><tr><td>2</td><td>4</td></tr><tr><td>3</td><td>2</td></tr></table>`,
 q:`Considerando os dados da tabela, qual é a moda do número de irmãos dos alunos dessa turma?`, o:[
  [`0`, `0 irmão foi a resposta de 5 alunos, que não é a mais frequente.`],
  [`1`, ``],
  [`1,15`, `1,15 é a média de irmãos por aluno (23 irmãos ÷ 20 alunos), não a moda.`],
  [`2`, `2 irmãos foi a resposta de só 4 alunos.`],
  [`9`, `9 é a QUANTIDADE de alunos que deram a resposta mais comum. A moda é o próprio valor: 1 irmão.`]
 ], a:1, e:`A moda é o valor que mais aparece.<br>O valor "1 irmão" aparece 9 vezes, mais que qualquer outro (5, 4 e 2 vezes).<br>Moda = 1 irmão. Atenção: a moda é o valor (1), e não a frequência (9).`},

/* 15 · m-prob · d3 */
{t:'m-prob', d:3, q:`Ana e Bia lançam, cada uma, um dado comum de 6 faces. Ganha quem tirar o número maior; se os números forem iguais, ninguém ganha. Qual é a probabilidade de Ana ganhar?`, o:[
  [`[[1|6]]`, `[[1|6]] é a probabilidade de EMPATE (6 casos iguais em 36).`],
  [`[[5|12]]`, ``],
  [`[[1|2]]`, `Você dividiu as chances igualmente entre Ana e Bia, esquecendo os empates: Ana ganha em 15 casos, Bia em 15 e há 6 empates.`],
  [`[[7|12]]`, `Você contou também os empates (15 + 6 = 21 casos). Em caso de empate, Ana não ganha.`],
  [`[[5|6]]`, `[[5|6]] é a probabilidade de os números serem DIFERENTES (alguém ganhar), não de Ana ganhar.`]
 ], a:1, e:`São 6 × 6 = 36 resultados igualmente prováveis.<br>Empates: 6 casos. Sobram 30, metade com Ana maior e metade com Bia maior (por simetria): 15 casos.<br>Contando direto: Ana tira 2 (1 caso), 3 (2), 4 (3), 5 (4), 6 (5) → 1 + 2 + 3 + 4 + 5 = 15.<br>P = [[15|36]] = [[5|12]].`}

];
