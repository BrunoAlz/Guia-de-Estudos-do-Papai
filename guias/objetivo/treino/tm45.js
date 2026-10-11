/* TREINO · Matemática · M4 (Grandezas e medidas) e M5 (Estatística e probabilidade)
   Contas conferidas por treino/check_tm45.py */
const TREINO_M45 = [

/* ===================== m-area (5) ===================== */
{t:'m-area', d:1, q:`Uma quadra de futsal retangular mede 15 m de comprimento por 8 m de largura. A escola quer cercá-la com uma tela, contornando toda a quadra. Quantos metros de tela são necessários?`, o:[
  [`120 m`, `Você calculou a área (15 × 8). Cercar é contornar: isso é perímetro, não área.`],
  [`23 m`, `Você somou só um comprimento e uma largura. O contorno tem quatro lados.`],
  [`46 m`, ``],
  [`38 m`, `Você esqueceu um dos lados de 8 m (15 + 15 + 8 = 38). São dois comprimentos e duas larguras.`],
  [`92 m`, `Você dobrou duas vezes: 2 × (15 + 8) = 46 já é o contorno completo.`]
 ], a:2, e:`Cercar a quadra = dar a volta = <b>perímetro</b>.<br>P = 15 + 8 + 15 + 8 = 2 × (15 + 8) = 2 × 23 = <b>46 m</b>.`},

{t:'m-area', d:2, q:`Um terreno tem a forma de um trapézio: os lados paralelos medem 30 m e 20 m, e a distância entre eles (altura) é 12 m. O metro quadrado nessa região custa R$ 50,00. Qual é o preço do terreno?`, o:[
  [`R$ 30 000,00`, `Você esqueceu de dividir por 2 na fórmula do trapézio: (30 + 20) × 12 = 600 é o dobro da área.`],
  [`R$ 9 000,00`, `Você usou só a base maior, como se fosse um triângulo ([[30 × 12|2]] = 180 m²). No trapézio, as duas bases entram na conta.`],
  [`R$ 180 000,00`, `Você multiplicou as bases (30 × 20) em vez de somá-las. A fórmula é [[(B + b) × h|2]].`],
  [`R$ 12 000,00`, `Você calculou um retângulo com a base menor (20 × 12 = 240 m²) e deixou de fora uma parte do terreno.`],
  [`R$ 15 000,00`, ``]
 ], a:4, e:`<ol><li>Área do trapézio: [[(B + b) × h|2]] = [[(30 + 20) × 12|2]] = [[600|2]] = 300 m².</li><li>Preço: 300 × 50 = <b>R$ 15 000,00</b>.</li></ol>`},

{t:'m-area', d:2, q:`A roda de uma bicicleta tem 30 cm de raio. Quantos metros a bicicleta percorre quando a roda dá 100 voltas completas? (Use π ≈ 3,14.)`, o:[
  [`94,2 m`, `Você esqueceu o 2 da fórmula: o comprimento da circunferência é 2πr, e não πr.`],
  [`188,4 m`, ``],
  [`376,8 m`, `Você usou 60 cm (o diâmetro) no lugar do raio na fórmula 2πr.`],
  [`1 884 m`, `A conta em centímetros (18 840 cm) estava certa, mas cm → m divide por 100, e não por 10.`],
  [`2 826 m`, `Você usou πr² (área). Em cada volta a roda anda o comprimento da circunferência, 2πr.`]
 ], a:1, e:`<ol><li>Em uma volta, a bicicleta anda o <b>comprimento</b> da roda: C = 2 × 3,14 × 30 = 188,4 cm.</li><li>Em 100 voltas: 188,4 × 100 = 18 840 cm.</li><li>cm → m: 18 840 ÷ 100 = <b>188,4 m</b>.</li></ol>`},

{t:'m-area', d:3, q:`Uma janela é formada por um retângulo de 2 m de largura por 1,5 m de altura, com um semicírculo em cima cujo diâmetro é igual à largura do retângulo. Quantos metros quadrados de vidro são necessários para cobrir toda a janela? (Use π ≈ 3,14.)`, o:[
  [`4,57 m²`, ``],
  [`6,14 m²`, `Você somou um círculo inteiro (3,14 m²). Em cima há só meio círculo.`],
  [`9,28 m²`, `Você usou 2 m (o diâmetro) como raio. O raio é 1 m.`],
  [`3,785 m²`, `Você calculou um quarto de círculo (0,785 m²), mas a parte de cima é meio círculo.`],
  [`1,57 m²`, `Você calculou só o semicírculo e esqueceu o retângulo de baixo.`]
 ], a:0, e:`Divida a figura em partes conhecidas e some:<ol><li>Retângulo: 2 × 1,5 = 3 m².</li><li>Semicírculo: diâmetro 2 m → raio 1 m. Área = [[3,14 × 1<sup>2</sup>|2]] = 1,57 m².</li><li>Total: 3 + 1,57 = <b>4,57 m²</b>.</li></ol>`},

{t:'m-area', d:3, q:`Uma artista aumentou em 20% a medida do lado de uma tela quadrada, que continuou quadrada. Em quantos por cento aumentou a área da tela?`, o:[
  [`20%`, `A área não cresce na mesma porcentagem do lado: ela depende do lado ao quadrado.`],
  [`40%`, `Você dobrou os 20% (pensando nos dois lados), mas é preciso multiplicar 1,2 × 1,2.`],
  [`4%`, `Você fez 0,2 × 0,2 = 0,04 e esqueceu o resto: 1,2² = 1 + 0,4 + 0,04.`],
  [`44%`, ``],
  [`144%`, `144% é a área nova comparada com a antiga (1,44). O aumento é 144% − 100% = 44%.`]
 ], a:3, e:`Teste com um lado fácil: lado 10 → área 100.<br>Aumentando 20%: lado 12 → área 12² = 144.<br>A área passou de 100 para 144: aumento de <b>44%</b>. (Ou direto: 1,2² = 1,44.)`},

/* ===================== m-vol (3) ===================== */
{t:'m-vol', d:1, q:`Uma piscina tem a forma de um paralelepípedo com 8 m de comprimento, 4 m de largura e 1,5 m de profundidade. Quantos litros de água cabem nela quando está completamente cheia?`, o:[
  [`4 800 L`, `Você multiplicou 48 por 100. Cada m³ tem 1 000 litros.`],
  [`480 000 L`, `Você multiplicou 48 por 10 000. Cada m³ tem 1 000 litros (10 000 é a conversão de m² para cm²).`],
  [`13,5 L`, `Você somou as medidas (8 + 4 + 1,5). O volume da caixa é o produto: comprimento × largura × altura.`],
  [`48 000 L`, ``],
  [`48 L`, `48 é o volume em m³. Faltou converter: 1 m³ = 1 000 L.`]
 ], a:3, e:`<ol><li>V = 8 × 4 × 1,5 = 32 × 1,5 = 48 m³.</li><li>1 m³ = 1 000 L → 48 × 1 000 = <b>48 000 L</b>.</li></ol>`},

{t:'m-vol', d:2, q:`Uma lata de tinta tem a forma de um cilindro com 10 cm de raio e 20 cm de altura. Qual é a capacidade da lata, em litros? (Use π ≈ 3.)`, o:[
  [`6 L`, ``],
  [`60 L`, `O volume (6 000 cm³) estava certo, mas cm³ → L divide por 1 000, e não por 100.`],
  [`1,2 L`, `Você usou 2πr × h, que é a área da lateral da lata. Volume do cilindro é πr² × h.`],
  [`24 L`, `Você usou 20 cm como raio. O raio é 10 cm.`],
  [`0,6 L`, `Você dividiu 6 000 por 10 000. A conversão certa é 1 000 cm³ = 1 L.`]
 ], a:0, e:`<ol><li>V = π × r² × h = 3 × 10² × 20 = 3 × 100 × 20 = 6 000 cm³.</li><li>1 000 cm³ = 1 L → 6 000 ÷ 1 000 = <b>6 L</b>.</li></ol>`},

{t:'m-vol', d:3, q:`Um aquário tem base retangular de 40 cm por 25 cm e altura de 30 cm. Ele tem água até 20 cm de altura. Uma pedra é colocada dentro e fica totalmente submersa, e o nível da água sobe para 22 cm. Qual é o volume da pedra?`, o:[
  [`22 L`, `40 × 25 × 22 = 22 000 cm³ é o volume de água e pedra juntas, e não só da pedra.`],
  [`20 L`, `20 L é o volume da água que já estava no aquário antes da pedra.`],
  [`2 L`, ``],
  [`8 L`, `Você usou 30 − 22 = 8 cm, que é o espaço vazio que sobrou no aquário. O que importa é quanto a água subiu: 2 cm.`],
  [`0,2 L`, `O volume (2 000 cm³) estava certo, mas 1 L = 1 000 cm³, então são 2 L.`]
 ], a:2, e:`A pedra ocupa o lugar da água que "subiu".<ol><li>Subida: 22 − 20 = 2 cm.</li><li>Volume da pedra = base × subida = 40 × 25 × 2 = 2 000 cm³.</li><li>2 000 cm³ = <b>2 L</b>.</li></ol>`},

/* ===================== m-unid (3) ===================== */
{t:'m-unid', d:1, q:`Uma pista de atletismo tem 400 m por volta. No treino, Ana deu 12 voltas completas. Quantos quilômetros ela correu?`, o:[
  [`48 km`, `Você dividiu 4 800 m por 100. De metro para quilômetro divide por 1 000.`],
  [`4,8 km`, ``],
  [`0,48 km`, `Você dividiu 4 800 por 10 000. De metro para quilômetro divide por 1 000.`],
  [`480 km`, `Você dividiu 4 800 m por 10. De metro para quilômetro divide por 1 000.`],
  [`4 800 km`, `4 800 é a distância em metros. Faltou converter para quilômetros.`]
 ], a:1, e:`<ol><li>12 × 400 = 4 800 m.</li><li>1 km = 1 000 m → 4 800 ÷ 1 000 = <b>4,8 km</b>.</li></ol>`},

{t:'m-unid', d:2, q:`Um filme começa às 19h40 e dura 2,4 horas. A que horas ele termina?`, o:[
  [`22h20`, `Você leu 2,4 h como 2h40min. A parte decimal da hora é multiplicada por 60: 0,4 h = 24 min.`],
  [`21h44`, `Você leu 2,4 h como 2h04min. Na verdade, 0,4 h = 0,4 × 60 = 24 min.`],
  [`21h04`, `Ao somar 40 + 24 = 64 min, você trocou 60 min por 1 hora, mas esqueceu de acrescentar essa hora.`],
  [`23h04`, `Você somou uma hora a mais: 19h40 + 2h24min = 21h64min = 22h04.`],
  [`22h04`, ``]
 ], a:4, e:`<ol><li>0,4 h = 0,4 × 60 = 24 min → 2,4 h = 2h24min.</li><li>19h40 + 2h24 = 21h64.</li><li>64 min = 1h04min → <b>22h04</b>.</li></ol>`},

{t:'m-unid', d:3, q:`Um sítio retangular mede 0,2 km de comprimento por 150 m de largura. Qual é a área do sítio em hectares?`, o:[
  [`3 ha`, ``],
  [`30 ha`, `Você converteu 0,2 km em 2 000 m. Como 1 km = 1 000 m, 0,2 km = 200 m.`],
  [`0,3 ha`, `Você converteu 0,2 km em 20 m. Como 1 km = 1 000 m, 0,2 km = 200 m.`],
  [`300 ha`, `Você usou 1 ha = 100 m². Na verdade, 1 ha = 10 000 m² (um quadrado de 100 m por 100 m).`],
  [`0,003 ha`, `Você multiplicou 0,2 × 150 sem converter as unidades. Antes de multiplicar, deixe tudo em metros.`]
 ], a:0, e:`<ol><li>Mesma unidade antes de multiplicar: 0,2 km = 200 m.</li><li>Área: 200 × 150 = 30 000 m².</li><li>1 hectare = 10 000 m² → 30 000 ÷ 10 000 = <b>3 ha</b>.</li></ol>`},

/* ===================== m-graf (5) ===================== */
{t:'m-graf', d:1, tx:`<p><b>Picolés vendidos por uma sorveteria na semana</b></p><table class="tb"><tr><th>Dia</th><th>Picolés</th></tr><tr><td>Segunda</td><td>35</td></tr><tr><td>Terça</td><td>50</td></tr><tr><td>Quarta</td><td>30</td></tr><tr><td>Quinta</td><td>60</td></tr><tr><td>Sexta</td><td>45</td></tr></table>`,
 q:`De acordo com a tabela, em qual dia a sorveteria vendeu o dobro da quantidade de picolés vendida na quarta-feira?`, o:[
  [`Segunda-feira`, `Segunda teve 35 picolés, só 5 a mais que a quarta. O dobro de 30 é 60.`],
  [`Terça-feira`, `Terça teve 50 picolés, 20 a mais que a quarta. O dobro de 30 é 60.`],
  [`Quinta-feira`, ``],
  [`Sexta-feira`, `Sexta teve 45 picolés, que é uma vez e meia o valor da quarta, não o dobro.`],
  [`Quarta-feira`, `Quarta é o dia de referência (30 picolés). A pergunta pede o dia com o dobro disso.`]
 ], a:2, e:`Quarta: 30 picolés. O dobro é 2 × 30 = 60.<br>Procurando 60 na tabela: <b>quinta-feira</b>.`},

{t:'m-graf', d:2, tx:`<p><b>Esporte preferido dos 240 alunos de uma escola</b></p><table class="tb"><tr><th>Esporte</th><th>Alunos</th></tr><tr><td>Futebol</td><td>96</td></tr><tr><td>Vôlei</td><td>60</td></tr><tr><td>Basquete</td><td>36</td></tr><tr><td>Natação</td><td>48</td></tr></table>`,
 q:`Esses dados serão mostrados num gráfico de setores (pizza). Qual deve ser o ângulo do setor que representa a natação?`, o:[
  [`48°`, `Você usou o número de alunos como se fosse o ângulo. É preciso transformar em parte do todo (360°).`],
  [`20°`, `20% é a porcentagem da natação, mas o ângulo é 20% de 360°.`],
  [`90°`, `Você dividiu os 360° igualmente entre os 4 esportes, mas eles têm quantidades diferentes de alunos.`],
  [`72°`, ``],
  [`18°`, `Você dividiu 360 por 20, em vez de calcular 20% de 360.`]
 ], a:3, e:`<ol><li>Parte da natação: [[48|240]] = [[1|5]] = 20%.</li><li>Ângulo: 20% de 360° = [[360|5]] = <b>72°</b>.</li></ol>`},

{t:'m-graf', d:2, tx:`<p><b>Gráfico de linhas: seguidores de um canal de jogos (no fim de cada mês)</b></p><table class="tb"><tr><th>Mês</th><th>Jan</th><th>Fev</th><th>Mar</th><th>Abr</th><th>Mai</th></tr><tr><td>Seguidores</td><td>1 000</td><td>1 200</td><td>1 300</td><td>1 800</td><td>2 000</td></tr></table>`,
 q:`Os pontos do gráfico de linhas estão listados na tabela. Com base neles, qual afirmação está correta?`, o:[
  [`O maior crescimento mensal foi de abril para maio.`, `De abril para maio o aumento foi de 200. De março para abril foi de 500, o trecho mais inclinado.`],
  [`De janeiro a maio, o número de seguidores dobrou.`, ``],
  [`De fevereiro para março o canal ganhou a mesma quantidade de seguidores que de janeiro para fevereiro.`, `De janeiro para fevereiro foram +200; de fevereiro para março, só +100.`],
  [`Em março, o número de seguidores caiu.`, `Em março o número subiu de 1 200 para 1 300. Crescer menos não é cair.`],
  [`De janeiro a maio, o aumento foi de 200%.`, `Passar de 1 000 para 2 000 é aumentar 1 000, que é 100% de 1 000. 200% seria chegar a 3 000.`]
 ], a:1, e:`Calcule as diferenças mês a mês: +200, +100, +500, +200. O maior salto é de março para abril.<br>De janeiro (1 000) a maio (2 000): 2 000 = 2 × 1 000, ou seja, <b>dobrou</b> (aumento de 100%).`},

{t:'m-graf', d:3, tx:`<p><b>Descrição do gráfico de colunas: intenção de voto para representante de turma</b></p><p>Coluna do candidato A, com o rótulo 41%. Coluna do candidato B, com o rótulo 39%. O eixo vertical começa em 38% e vai até 42%. No desenho, a coluna de A aparece três vezes mais alta que a coluna de B.</p>`,
 q:`Analisando o gráfico descrito, qual conclusão está correta?`, o:[
  [`O candidato A tem o triplo das intenções de voto do candidato B.`, `Você comparou a altura das colunas, e não os valores. 41% está longe de ser o triplo de 39%.`],
  [`A diferença entre os candidatos é de 3 pontos percentuais.`, `3 é quanto a coluna de A passa do início do eixo (41 − 38). A diferença entre os dois é 41 − 39.`],
  [`O candidato B tem apenas 1% das intenções de voto.`, `1 é quanto a coluna de B passa de 38%. O valor de B está no rótulo: 39%.`],
  [`O gráfico está correto: como os rótulos estão certos, a coluna de A deve mesmo ser três vezes mais alta.`, `Rótulos certos não bastam: a altura das colunas deve ser proporcional aos valores, o que exige o eixo começando no zero.`],
  [`A diferença real é de 2 pontos percentuais; o eixo começando em 38% exagera essa diferença.`, ``]
 ], a:4, e:`A diferença real é 41% − 39% = <b>2 pontos percentuais</b>.<br>Como o eixo começa em 38%, a coluna de A mostra só 41 − 38 = 3 e a de B, 39 − 38 = 1. Por isso A "parece" o triplo: é um <b>gráfico enganoso</b> (eixo cortado).`},

{t:'m-graf', d:3, tx:`<p><b>Matéria preferida dos alunos de duas turmas</b></p><table class="tb"><tr><th>Turma</th><th>Matemática</th><th>Português</th><th>Ciências</th></tr><tr><td>9º A</td><td>12</td><td>8</td><td>10</td></tr><tr><td>9º B</td><td>9</td><td>15</td><td>6</td></tr></table>`,
 q:`Cada aluno escolheu uma única matéria. Considerando as duas turmas juntas, qual porcentagem dos alunos prefere Matemática?`, o:[
  [`35%`, ``],
  [`21%`, `21 é o número de alunos que preferem Matemática, não a porcentagem. É preciso dividir pelo total de alunos.`],
  [`40%`, `40% vale só para o 9º A ([[12|30]]). A pergunta pede as duas turmas juntas.`],
  [`70%`, `Você dividiu 21 por 30, que é o total de uma turma só. As duas turmas juntas têm 60 alunos.`],
  [`30%`, `30% vale só para o 9º B ([[9|30]]). A pergunta pede as duas turmas juntas.`]
 ], a:0, e:`<ol><li>Matemática: 12 + 9 = 21 alunos.</li><li>Total: 9º A = 12 + 8 + 10 = 30; 9º B = 9 + 15 + 6 = 30; juntos, 60.</li><li>[[21|60]] = [[35|100]] = <b>35%</b>.</li></ol>`},

/* ===================== m-media (5) ===================== */
{t:'m-media', d:1, q:`Nos 6 jogos de um campeonato, o time da escola marcou estes números de gols: 1, 0, 3, 1, 5 e 2. Qual foi a média de gols por jogo?`, o:[
  [`2,4`, `Você dividiu 12 por 5, esquecendo o jogo em que o time fez 0 gol. Ele também conta: são 6 jogos.`],
  [`2`, ``],
  [`12`, `12 é a soma dos gols. Para a média, ainda falta dividir pela quantidade de jogos.`],
  [`5`, `5 é a amplitude (5 − 0), que mede a variação, e não a média.`],
  [`1`, `1 é a moda (o valor que mais aparece), e não a média.`]
 ], a:1, e:`Soma: 1 + 0 + 3 + 1 + 5 + 2 = 12 gols.<br>Média: [[12|6]] = <b>2 gols por jogo</b>.`},

{t:'m-media', d:2, q:`Oito alunos resolveram um desafio de lógica nestes tempos, em minutos: 12, 7, 15, 9, 10, 20, 8 e 11. Qual é a mediana desses tempos?`, o:[
  [`11,5 min`, `11,5 é a média ([[92|8]]), e não a mediana.`],
  [`9,5 min`, `Você pegou os dois valores do meio sem ordenar a lista (9 e 10). Sempre ordene antes!`],
  [`10,5 min`, ``],
  [`13 min`, `13 é a amplitude (20 − 7), e não a mediana.`],
  [`10 min`, `Com 8 valores (quantidade par), há dois valores no meio: 10 e 11. A mediana é a média deles.`]
 ], a:2, e:`<ol><li>Ordenando: 7, 8, 9, <b>10</b>, <b>11</b>, 12, 15, 20.</li><li>São 8 valores (par): os do meio são o 4º e o 5º, 10 e 11.</li><li>Mediana = [[10 + 11|2]] = <b>10,5 min</b>.</li></ol>`},

{t:'m-media', d:2, q:`Na escola de Caio, a média do bimestre é ponderada: prova com peso 3, trabalho com peso 2 e participação com peso 1. Caio tirou 6 na prova, 9 no trabalho e 9 na participação. Qual foi sua média?`, o:[
  [`8`, `Você fez a média simples ([[6 + 9 + 9|3]]), ignorando os pesos.`],
  [`15`, `Você somou os produtos (45) e dividiu por 3, a quantidade de notas. Na média ponderada, divide-se pela soma dos pesos (6).`],
  [`7,2`, `Você esqueceu a participação: [[18 + 18|5]] = 7,2. Todas as notas entram na conta.`],
  [`7,5`, ``],
  [`45`, `45 é só a soma dos produtos nota × peso. Falta dividir pela soma dos pesos.`]
 ], a:3, e:`<ol><li>Multiplique cada nota pelo peso: 6 × 3 = 18; 9 × 2 = 18; 9 × 1 = 9.</li><li>Some: 18 + 18 + 9 = 45. Soma dos pesos: 3 + 2 + 1 = 6.</li><li>Média = [[45|6]] = <b>7,5</b>.</li></ol>`},

{t:'m-media', d:3, q:`A média de idade dos 11 jogadores de um time de futebol é 22 anos. Um jogador foi substituído por lesão e saiu do grupo, e a média de idade dos 10 jogadores restantes passou a ser 21 anos. Qual é a idade do jogador que saiu?`, o:[
  [`32 anos`, ``],
  [`1 ano`, `1 é a diferença entre as médias, não a idade. Use as somas: soma = média × quantidade.`],
  [`43 anos`, `Você somou as duas médias (22 + 21). Use as somas das idades antes e depois.`],
  [`22 anos`, `Se ele tivesse 22 anos (igual à média), a média dos outros continuaria 22, e não cairia para 21.`],
  [`10 anos`, `Você multiplicou a diferença das médias pela quantidade de jogadores restantes (1 × 10). Compare as somas: 242 e 210.`]
 ], a:0, e:`Use a ideia de que <b>soma = média × quantidade</b>.<ol><li>Antes: 11 × 22 = 242 anos.</li><li>Depois: 10 × 21 = 210 anos.</li><li>Quem saiu: 242 − 210 = <b>32 anos</b>.</li></ol>`},

{t:'m-media', d:3, q:`Numa pequena loja trabalham 10 pessoas: 9 funcionários ganham R$ 2 000,00 por mês cada um, e o gerente ganha R$ 22 000,00. Sobre os salários dessas 10 pessoas, qual afirmação está correta?`, o:[
  [`A média salarial é R$ 12 000,00, pois [[2 000 + 22 000|2]] = 12 000.`, `Você fez a média só dos dois valores diferentes, mas 9 pessoas ganham R$ 2 000,00. Some os 10 salários.`],
  [`A mediana é R$ 4 000,00.`, `R$ 4 000,00 é a média. Ordenando os 10 salários, os dois do meio (5º e 6º) são R$ 2 000,00.`],
  [`A média e a mediana são iguais, pois quase todos ganham R$ 2 000,00.`, `A mediana é R$ 2 000,00, mas a média é puxada pelo salário alto do gerente e sobe para R$ 4 000,00.`],
  [`A média salarial é R$ 2 400,00.`, `Você somou só um salário de R$ 2 000,00 com o do gerente e dividiu por 10. São nove salários de R$ 2 000,00.`],
  [`A média é R$ 4 000,00 e a mediana é R$ 2 000,00; a mediana representa melhor o salário típico.`, ``]
 ], a:4, e:`<ol><li>Soma: 9 × 2 000 + 22 000 = 18 000 + 22 000 = 40 000. Média: [[40 000|10]] = R$ 4 000,00.</li><li>Ordenados: nove de 2 000 e um de 22 000. Com 10 valores, a mediana é a média do 5º e do 6º: R$ 2 000,00.</li><li>A média foi "puxada" pelo valor extremo; a <b>mediana</b> mostra melhor o salário típico.</li></ol>`},

/* ===================== m-prob (3) ===================== */
{t:'m-prob', d:1, q:`Numa rifa da festa junina, os bilhetes são numerados de 1 a 20 e todos foram vendidos. Um bilhete será sorteado. Qual é a probabilidade de o número sorteado ser múltiplo de 3?`, o:[
  [`[[1|3]]`, `"Um a cada três números" não é exato aqui: de 1 a 20 há 6 múltiplos de 3, e [[6|20]] não é [[1|3]].`],
  [`[[7|10]]`, `Essa é a probabilidade de <b>não</b> sair múltiplo de 3 ([[14|20]]).`],
  [`[[3|10]]`, ``],
  [`[[1|20]]`, `Há 6 números favoráveis, e não só um.`],
  [`[[1|6]]`, `Você colocou o número de casos favoráveis (6) no denominador. P = [[favoráveis|possíveis]] = [[6|20]].`]
 ], a:2, e:`<ol><li>Casos possíveis: 20.</li><li>Múltiplos de 3 até 20: 3, 6, 9, 12, 15, 18 → 6 casos favoráveis.</li><li>P = [[6|20]] = <b>[[3|10]]</b>.</li></ol>`},

{t:'m-prob', d:2, q:`Num jogo de tabuleiro, Lucas lança dois dados comuns (de 6 faces) e precisa que a soma dos pontos seja 10 para ganhar. Qual é a probabilidade de ele ganhar nessa jogada?`, o:[
  [`[[1|18]]`, `Você contou (4, 6) e (6, 4) como um caso só. Com dois dados, eles são casos diferentes.`],
  [`[[1|11]]`, `Há 11 somas possíveis (de 2 a 12), mas elas não têm a mesma chance. O espaço amostral tem 36 pares.`],
  [`[[1|36]]`, `Você contou só o par (5, 5). Também valem (4, 6) e (6, 4).`],
  [`[[1|12]]`, ``],
  [`[[1|6]]`, `[[1|6]] é a probabilidade da soma 7 (6 casos). Para a soma 10 há só 3 casos.`]
 ], a:3, e:`<ol><li>Dois dados: 6 × 6 = 36 pares possíveis.</li><li>Soma 10: (4, 6), (5, 5), (6, 4) → 3 casos.</li><li>P = [[3|36]] = <b>[[1|12]]</b>.</li></ol>`},

{t:'m-prob', d:3, q:`Numa gaveta há 3 meias pretas e 2 meias brancas, todas do mesmo modelo. No escuro, Pedro pega 2 meias ao acaso, uma depois da outra, sem devolver. Qual é a probabilidade de as duas meias serem da mesma cor?`, o:[
  [`[[2|5]]`, ``],
  [`[[3|10]]`, `[[3|10]] é só a chance de as duas serem pretas. Também é par se as duas forem brancas.`],
  [`[[13|25]]`, `Você calculou como se a primeira meia voltasse para a gaveta ([[9|25]] + [[4|25]]). Sem reposição, o total cai para 4 na segunda retirada.`],
  [`[[3|5]]`, `[[3|5]] é a chance de as meias serem de cores <b>diferentes</b>.`],
  [`[[1|10]]`, `[[1|10]] é só a chance de as duas serem brancas. Faltou somar o caso das duas pretas.`]
 ], a:0, e:`Mesma cor = duas pretas <b>ou</b> duas brancas (some os casos).<ol><li>Duas pretas: [[3|5]] × [[2|4]] = [[6|20]].</li><li>Duas brancas: [[2|5]] × [[1|4]] = [[2|20]].</li><li>Total: [[6|20]] + [[2|20]] = [[8|20]] = <b>[[2|5]]</b>.</li></ol>`},

/* ===================== m-cont (3) ===================== */
{t:'m-cont', d:1, q:`O cadeado da bicicleta de Júlia tem 3 rodinhas, e cada rodinha pode mostrar um algarismo de 0 a 9 (pode repetir). Quantas combinações diferentes esse cadeado permite?`, o:[
  [`720`, `720 = 10 × 9 × 8 seria sem repetir algarismos. No cadeado, os algarismos podem se repetir.`],
  [`30`, `Você somou as opções (10 + 10 + 10). Pelo princípio multiplicativo, as opções de cada etapa se multiplicam.`],
  [`100`, `Você contou só duas rodinhas (10 × 10). São três.`],
  [`999`, `Você esqueceu que 000 também é uma combinação. De 000 a 999 são 1 000 possibilidades.`],
  [`1 000`, ``]
 ], a:4, e:`Três etapas (rodinhas), cada uma com 10 opções, e pode repetir:<br>10 × 10 × 10 = <b>1 000 combinações</b>.`},

{t:'m-cont', d:2, q:`Quantos anagramas da palavra PRATO começam com uma vogal?`, o:[
  [`120`, `120 = 5 × 4 × 3 × 2 × 1 é o total de anagramas, sem a exigência de começar com vogal.`],
  [`24`, `Você fixou só uma vogal na primeira posição. PRATO tem duas vogais (A e O) que podem começar.`],
  [`48`, ``],
  [`60`, `Você supôs que metade dos anagramas começa com vogal, mas só 2 das 5 letras são vogais.`],
  [`8`, `Você fez 2 × 4, mas as 4 letras restantes podem ser ordenadas de 4 × 3 × 2 × 1 = 24 maneiras.`]
 ], a:2, e:`<ol><li>1ª letra: vogal → 2 opções (A ou O).</li><li>As outras 4 letras se organizam em 4 × 3 × 2 × 1 = 24 maneiras.</li><li>Total: 2 × 24 = <b>48 anagramas</b>.</li></ol>`},

{t:'m-cont', d:3, q:`Numa reunião, cada pessoa apertou a mão de todas as outras exatamente uma vez. No total, foram 28 apertos de mão. Quantas pessoas estavam na reunião?`, o:[
  [`7`, `Com 7 pessoas seriam [[7 × 6|2]] = 21 apertos. Cuidado: 56 = 8 × 7, e n é o maior desses números.`],
  [`8`, ``],
  [`14`, `Você dividiu 28 por 2. Mas 14 pessoas dariam [[14 × 13|2]] = 91 apertos.`],
  [`56`, `Você multiplicou 28 por 2 e parou aí. 56 é n × (n − 1), e não o número de pessoas.`],
  [`28`, `28 é o número de apertos, não de pessoas. Cada aperto envolve duas pessoas e cada pessoa aperta várias mãos.`]
 ], a:1, e:`Com n pessoas, o número de apertos é [[n(n − 1)|2]] (a ordem não importa).<ol><li>[[n(n − 1)|2]] = 28 → n(n − 1) = 56.</li><li>Dois números consecutivos cujo produto é 56: 8 × 7.</li><li>n = <b>8 pessoas</b>. (Confira: [[8 × 7|2]] = 28.)</li></ol>`}

];
