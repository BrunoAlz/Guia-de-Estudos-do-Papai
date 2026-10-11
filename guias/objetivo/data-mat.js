/* Revisão Completa · MATEMÁTICA
   Notação: [[a|b]] = fração · √{x} = raiz com barra · <sup> = expoente
   Teste rápido: [enunciado, [alternativas], índice da correta, explicação] */
const MODS_MAT = [
 {id:'M1', n:'Números e operações', ic:'num'},
 {id:'M2', n:'Álgebra', ic:'alg'},
 {id:'M3', n:'Geometria', ic:'geo'},
 {id:'M4', n:'Grandezas e medidas', ic:'med'},
 {id:'M5', n:'Estatística e probabilidade', ic:'est'}
];

const TOP_MAT = [
/* ============ M1 · NÚMEROS ============ */
{id:'m-pct', mod:'M1', star:3, t:'Porcentagem e percentuais sucessivos', bncc:'EF09MA05 · EF07MA02',
 hook:'Porcentagem é só uma fração com denominador 100. O segredo para não errar é pensar em <b>fator multiplicador</b>.',
 body:`<p><b>35%</b> quer dizer 35 de cada 100: [[35|100]] = 0,35. Para achar <b>x% de um valor</b>, multiplique o valor pela forma decimal: 35% de 80 = 0,35 × 80 = 28.</p>
<p><b>Aumentar ou descontar de uma vez só:</b> em vez de calcular a parte e depois somar ou subtrair, use o fator.</p>
<ul><li>Aumento de 15% → multiplica por <b>1,15</b> (100% + 15%).</li><li>Desconto de 15% → multiplica por <b>0,85</b> (100% − 15%).</li></ul>
<p><b>Percentuais sucessivos</b> (um depois do outro): <b>multiplique os fatores</b>, nunca some as porcentagens. Cada nova porcentagem é calculada sobre o valor <i>atual</i>, não sobre o original.</p>
<p><b>Taxa de variação</b> (quanto mudou em %): [[novo − antigo|antigo]] × 100.</p>`,
 rule:`x% de N = [[x|100]] · N<br>Aumento de i% → × (1 + [[i|100]]) · Desconto de i% → × (1 − [[i|100]])<br>Sucessivos → multiplica os fatores<br>Variação % = [[novo − antigo|antigo]] · 100`,
 ex:[
  {q:'Uma camiseta custa R$ 80,00 e está com 15% de desconto. Qual é o novo preço?', s:['Desconto de 15% → fator 0,85.','80 × 0,85 = 68.'], r:'R$ 68,00'},
  {q:'Um produto de R$ 200,00 sofreu dois aumentos seguidos de 10%. Quanto passou a custar? O aumento total foi de 20%?', s:['Fator de cada aumento: 1,10.','200 × 1,10 × 1,10 = 200 × 1,21 = 242.','1,21 significa aumento total de 21%, não 20%.'], r:'R$ 242,00 · aumento total de 21%'},
  {q:'A mensalidade passou de R$ 50,00 para R$ 65,00. Qual foi o aumento percentual?', s:['Variação: 65 − 50 = 15.','15 ÷ 50 = 0,30 = 30%.'], r:'30%'}
 ],
 trap:'Aumentar 20% e depois descontar 20% <b>não</b> volta ao preço original: 1,2 × 0,8 = 0,96, ou seja, o preço final fica 4% <b>menor</b>.',
 tip:'Na prova, transforme tudo em fator e multiplique em sequência. É mais rápido e evita o erro de somar porcentagens.',
 qz:[
  ['Um tênis de R$ 250,00 teve 12% de desconto. Qual é o preço final?', ['R$ 238,00','R$ 220,00','R$ 212,00','R$ 230,00'], 1, 'Fator 0,88: 250 × 0,88 = 220.'],
  ['Um preço sobe 30% e, depois, cai 30%. Em relação ao preço inicial, o preço final é:', ['igual','9% menor','9% maior','3% menor'], 1, '1,3 × 0,7 = 0,91 → 91% do original, ou seja, 9% menor.'],
  ['A conta de luz passou de R$ 120,00 para R$ 150,00. O aumento foi de:', ['30%','25%','20%','15%'], 1, 'Aumentou 30 reais sobre 120: 30 ÷ 120 = 0,25 = 25%. A base é sempre o valor antigo.']
 ]},

{id:'m-frac', mod:'M1', star:3, t:'Frações e números decimais', bncc:'EF07MA12 · EF07MA08',
 hook:'Frações aparecem em quase todo problema da prova: partes de um todo, divisões, receitas, “do que sobrou”…',
 body:`<p><b>Simplificar:</b> divida numerador e denominador pelo mesmo número: [[18|24]] = [[3|4]].</p>
<p><b>Somar ou subtrair:</b> só com o mesmo denominador. Se forem diferentes, use o MMC: [[2|3]] + [[1|4]] = [[8|12]] + [[3|12]] = [[11|12]].</p>
<p><b>Multiplicar:</b> de cima com de cima, de baixo com de baixo: [[2|3]] × [[5|7]] = [[10|21]].</p>
<p><b>Dividir:</b> conserve a primeira e multiplique pelo <b>inverso</b> da segunda: [[3|5]] ÷ [[9|10]] = [[3|5]] × [[10|9]] = [[30|45]] = [[2|3]].</p>
<p><b>Fração de uma quantidade:</b> divida pelo de baixo e multiplique pelo de cima: [[3|4]] de 60 = 60 ÷ 4 × 3 = 45.</p>
<p><b>Comparar:</b> transforme em decimal (divida o de cima pelo de baixo). Frações úteis: [[1|2]] = 0,5 · [[1|4]] = 0,25 · [[3|4]] = 0,75 · [[1|5]] = 0,2 · [[1|8]] = 0,125.</p>`,
 rule:`[[a|b]] ÷ [[c|d]] = [[a|b]] × [[d|c]]<br>Somar: iguale os denominadores (MMC)<br>[[a|b]] de N = N ÷ b × a`,
 ex:[
  {q:'Ana gastou [[1|3]] do salário com aluguel e [[1|4]] com mercado. Que fração sobrou?', s:['Gastou [[1|3]] + [[1|4]] = [[4|12]] + [[3|12]] = [[7|12]].','Sobrou 1 − [[7|12]] = [[5|12]].'], r:'[[5|12]] do salário'},
  {q:'Um livro tem 300 páginas. Léo leu [[2|5]] no sábado e [[1|3]] do que faltava no domingo. Quantas páginas ainda faltam?', s:['Sábado: [[2|5]] de 300 = 120. Faltam 180.','Domingo: [[1|3]] de 180 = 60 (é do que <b>faltava</b>, não do total!).','Faltam 180 − 60 = 120.'], r:'120 páginas'}
 ],
 trap:'“[[1|3]] do que sobrou” é diferente de “[[1|3]] do total”. Leia com atenção qual é a base da fração.',
 qz:[
  ['Quanto é [[3|4]] − [[2|3]]?', ['[[1|12]]','[[1|7]]','[[5|12]]','[[1|4]]'], 0, '[[9|12]] − [[8|12]] = [[1|12]]. Nunca subtraia numerador e denominador separados.'],
  ['Qual destes números é o maior?', ['[[5|8]]','[[2|3]]','0,68','0,7'], 3, '[[5|8]] = 0,625; [[2|3]] ≈ 0,667; 0,68; 0,7. O maior é 0,7.'],
  ['Uma receita pede [[3|4]] de xícara de açúcar. Para fazer meia receita, quanto usar?', ['[[3|2]] de xícara','[[3|8]] de xícara','[[1|4]] de xícara','[[1|2]] xícara'], 1, 'Metade de [[3|4]] = [[1|2]] × [[3|4]] = [[3|8]].']
 ]},

{id:'m-reais', mod:'M1', star:2, t:'Números reais: racionais e irracionais', bncc:'EF09MA01 · EF09MA02 · EF08MA05',
 hook:'Todo número da reta é <b>real</b>. A pergunta é: ele pode ou não ser escrito como fração?',
 body:`<p><b>Racional</b> = pode ser escrito como fração [[a|b]] (com b ≠ 0). Entram aqui os inteiros, os decimais finitos (2,75) e as <b>dízimas periódicas</b> (0,333…).</p>
<p><b>Irracional</b> = decimal <b>infinito e não periódico</b>: não tem fração. Exemplos: √{2} = 1,4142…, √{3}, √{5}, π = 3,14159…</p>
<p>Atenção: √{9} = 3 e √{16} = 4 são <b>racionais</b>. Só é irracional a raiz que não dá exata.</p>
<p>A diagonal de um quadrado de lado 1 mede √{2}: é um segmento de verdade cuja medida não é uma fração.</p>
<p><b>Localizar na reta:</b> procure os quadrados perfeitos vizinhos. √{30}: 25 &lt; 30 &lt; 36, então 5 &lt; √{30} &lt; 6 (mais perto de 5, ≈ 5,48).</p>
<p><b>Fração geratriz</b> de dízima simples: o período sobre tantos 9 quantos algarismos ele tiver. 0,272727… = [[27|99]] = [[3|11]].</p>
<p><b>Dízima composta</b> (tem uma parte que não se repete): em cima, o número formado pela parte que não se repete seguida do período, menos a parte que não se repete; embaixo, um 9 para cada algarismo do período e um 0 para cada algarismo que não se repete. 0,1666… = [[16 − 1|90]] = [[15|90]] = [[1|6]].</p>`,
 rule:`ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ · Irracionais = ℝ fora de ℚ<br>Dízima 0,abab… = [[ab|99]] · 0,aaa… = [[a|9]]`,
 ex:[
  {q:'Entre quais inteiros está √{50}?', s:['Quadrados perfeitos vizinhos: 49 = 7² e 64 = 8².','49 &lt; 50 &lt; 64 → 7 &lt; √{50} &lt; 8.'], r:'Entre 7 e 8 (bem perto de 7)'},
  {q:'Qual é a fração geratriz de 0,1666…?', s:['É dízima composta (o 1 não se repete).','Regra: (16 − 1) sobre 90 → [[15|90]].','Simplificando: [[1|6]].'], r:'[[1|6]]'}
 ],
 trap:'3,14 é racional (decimal finito). Ele é só uma <b>aproximação</b> de π, que é irracional.',
 qz:[
  ['Qual destes números é irracional?', ['√{25}','0,333…','√{7}','1,25'], 2, '√{7} não dá exata: 2,6457… sem período. √{25} = 5, 0,333… = [[1|3]] e 1,25 = [[5|4]] são racionais.'],
  ['O número √{90} está entre:', ['8 e 9','9 e 10','10 e 11','44 e 46'], 1, '81 &lt; 90 &lt; 100 → entre 9 e 10.'],
  ['A fração geratriz de 0,363636… é:', ['[[36|100]]','[[4|11]]','[[9|25]]','[[3|8]]'], 1, '[[36|99]] = [[4|11]] (dividindo por 9).']
 ]},

{id:'m-pot', mod:'M1', star:2, t:'Potências e raízes', bncc:'EF09MA03 · EF08MA01',
 hook:'As propriedades de potência economizam conta. Expoente negativo e fracionário são os favoritos do 9º ano.',
 body:`<p><b>Casos especiais:</b> a<sup>0</sup> = 1 · a<sup>1</sup> = a · a<sup>−n</sup> = [[1|a<sup>n</sup>]] (o negativo <b>inverte</b>, não deixa negativo).</p>
<p><b>Propriedades:</b> a<sup>m</sup>·a<sup>n</sup> = a<sup>m+n</sup> · a<sup>m</sup>÷a<sup>n</sup> = a<sup>m−n</sup> · (a<sup>m</sup>)<sup>n</sup> = a<sup>m·n</sup> · (a·b)<sup>n</sup> = a<sup>n</sup>·b<sup>n</sup>.</p>
<p><b>Expoente fracionário:</b> a<sup>m/n</sup> = raiz de índice n de a<sup>m</sup>. Ex.: 8<sup>2/3</sup> = (∛8)² = 2² = 4 · 25<sup>1/2</sup> = √{25} = 5.</p>
<p><b>Sinais:</b> (−2)<sup>4</sup> = 16 · (−2)<sup>3</sup> = −8 · −2<sup>4</sup> = −16 (sem parênteses, só o 2 é elevado).</p>
<p><b>Simplificar raiz:</b> tire os quadrados de dentro: √{12} = √{4·3} = 2√{3} · √{72} = √{36·2} = 6√{2}.</p>
<p><b>Somar raízes:</b> só se forem iguais: 3√{2} + 5√{2} = 8√{2}. Mas √{2} + √{3} <b>não</b> é √{5}.</p>
<p><b>Racionalizar</b> (tirar a raiz do denominador): multiplique em cima e embaixo pela raiz. [[6|√{3}]] = [[6√{3}|3]] = 2√{3}.</p>`,
 rule:`a<sup>−n</sup> = [[1|a<sup>n</sup>]] · a<sup>m/n</sup> = <sup>n</sup>√{a<sup>m</sup>}<br>a<sup>m</sup>·a<sup>n</sup> = a<sup>m+n</sup> · (a<sup>m</sup>)<sup>n</sup> = a<sup>mn</sup><br>[[k|√{a}]] = [[k√{a}|a]]`,
 ex:[
  {q:'Calcule 2<sup>−3</sup> e 25<sup>3/2</sup>.', s:['2<sup>−3</sup> = [[1|2<sup>3</sup>]] = [[1|8]].','25<sup>3/2</sup> = (√{25})<sup>3</sup> = 5<sup>3</sup> = 125.'], r:'[[1|8]] e 125'},
  {q:'Racionalize [[10|√{5}]].', s:['Multiplique por √{5} em cima e embaixo: [[10√{5}|5]].','Simplifique 10 ÷ 5 = 2.'], r:'2√{5}'}
 ],
 trap:'−3² = −9, mas (−3)² = 9. E 2<sup>−3</sup> é positivo ([[1|8]]): expoente negativo inverte, não muda o sinal.',
 qz:[
  ['Quanto vale 4<sup>−2</sup> + 2<sup>0</sup>?', ['−15','[[17|16]]','[[1|16]]','−7'], 1, '4<sup>−2</sup> = [[1|16]] e 2<sup>0</sup> = 1. Soma: [[1|16]] + [[16|16]] = [[17|16]].'],
  ['Quanto vale 32<sup>2/5</sup>?', ['4','8','16','2'], 0, 'Raiz quinta de 32 é 2 (2<sup>5</sup> = 32). Depois, 2² = 4.'],
  ['Racionalizando [[12|√{3}]], obtemos:', ['4√{3}','12√{3}','4','36'], 0, '[[12√{3}|3]] = 4√{3}.']
 ]},

{id:'m-cient', mod:'M1', star:2, t:'Notação científica e medidas gigantes ou minúsculas', bncc:'EF09MA04 · EF09MA18',
 hook:'Distância entre planetas e tamanho de vírus cabem na mesma escrita: um número entre 1 e 10 vezes uma potência de 10.',
 body:`<p><b>Notação científica:</b> a × 10<sup>n</sup>, com <b>1 ≤ a &lt; 10</b>.</p>
<ul><li>150 000 000 km = 1,5 × 10<sup>8</sup> km (a vírgula andou 8 casas para a esquerda → expoente +8).</li><li>0,00025 m = 2,5 × 10<sup>−4</sup> m (andou 4 casas para a direita → expoente −4).</li></ul>
<p><b>Contas:</b> multiplique os números e <b>some</b> os expoentes; na divisão, divida os números e <b>subtraia</b> os expoentes. Depois ajuste para o número ficar entre 1 e 10.</p>
<p><b>Prefixos:</b> quilo (k) 10<sup>3</sup> · mega (M) 10<sup>6</sup> · giga (G) 10<sup>9</sup> · tera (T) 10<sup>12</sup> · mili (m) 10<sup>−3</sup> · micro (µ) 10<sup>−6</sup> · nano (n) 10<sup>−9</sup>.</p>
<p>Na informática, siga o que o enunciado disser (1 GB = 1 000 MB ou 1 024 MB). O ano-luz (distância que a luz percorre em 1 ano) é cerca de 9,46 × 10<sup>12</sup> km.</p>`,
 rule:`a × 10<sup>n</sup> com 1 ≤ a &lt; 10<br>(a·10<sup>m</sup>)·(b·10<sup>n</sup>) = (a·b)·10<sup>m+n</sup><br>k 10³ · M 10⁶ · G 10⁹ · m 10⁻³ · µ 10⁻⁶ · n 10⁻⁹`,
 ex:[
  {q:'Calcule (3 × 10<sup>5</sup>) × (4 × 10<sup>3</sup>) em notação científica.', s:['3 × 4 = 12 e 10<sup>5+3</sup> = 10<sup>8</sup> → 12 × 10<sup>8</sup>.','12 não está entre 1 e 10: 12 = 1,2 × 10<sup>1</sup>.','Resultado: 1,2 × 10<sup>9</sup>.'], r:'1,2 × 10<sup>9</sup>'},
  {q:'Um vírus mede 100 nanômetros. Quanto é isso em metros?', s:['1 nm = 10<sup>−9</sup> m.','100 × 10<sup>−9</sup> = 10<sup>2</sup> × 10<sup>−9</sup> = 10<sup>−7</sup> m.'], r:'10<sup>−7</sup> m (0,0000001 m)'}
 ],
 trap:'25 × 10<sup>3</sup> vale 25 000, mas <b>não</b> está em notação científica. O certo é 2,5 × 10<sup>4</sup>.',
 qz:[
  ['O número 0,000036 em notação científica é:', ['36 × 10<sup>−6</sup>','3,6 × 10<sup>−5</sup>','3,6 × 10<sup>5</sup>','3,6 × 10<sup>−6</sup>'], 1, 'A vírgula anda 5 casas para a direita até 3,6 → 10<sup>−5</sup>. 36 × 10<sup>−6</sup> tem o mesmo valor, mas 36 não está entre 1 e 10.'],
  ['Quanto é (6 × 10<sup>8</sup>) ÷ (2 × 10<sup>3</sup>)?', ['3 × 10<sup>5</sup>','3 × 10<sup>11</sup>','4 × 10<sup>5</sup>','12 × 10<sup>5</sup>'], 0, '6 ÷ 2 = 3 e 10<sup>8−3</sup> = 10<sup>5</sup>.'],
  ['Um arquivo tem 2,5 GB. Considerando 1 GB = 1 000 MB, isso equivale a:', ['250 MB','2 500 MB','25 000 MB','0,0025 MB'], 1, '2,5 × 1 000 = 2 500 MB. De unidade maior para menor, multiplica.']
 ]},

{id:'m-mmc', mod:'M1', star:2, t:'Múltiplos, divisores, MMC e MDC', bncc:'EF07MA01',
 hook:'O difícil não é calcular: é perceber se o problema pede MMC ou MDC.',
 body:`<p><b>Critérios de divisibilidade:</b> por 2 (termina em par) · por 3 (soma dos algarismos divisível por 3) · por 5 (termina em 0 ou 5) · por 9 (soma divisível por 9) · por 10 (termina em 0).</p>
<p><b>Número primo</b> tem exatamente dois divisores: 1 e ele mesmo (2, 3, 5, 7, 11, 13…). O 1 não é primo.</p>
<p><b>MMC</b> (mínimo múltiplo comum): o menor número que é múltiplo de todos. Aparece em “<b>vão se encontrar de novo</b>”, “acontecem juntos outra vez”.</p>
<p><b>MDC</b> (máximo divisor comum): o maior número que divide todos. Aparece em “<b>dividir em partes iguais do maior tamanho possível</b>”, “sem sobrar”.</p>
<p>Na fatoração: MMC = todos os fatores com o <b>maior</b> expoente; MDC = só os fatores comuns com o <b>menor</b> expoente. E vale: MMC × MDC = a × b.</p>`,
 rule:`Encontro/repetição → <b>MMC</b><br>Dividir em partes iguais máximas → <b>MDC</b><br>MMC(a,b) × MDC(a,b) = a × b`,
 ex:[
  {q:'Dois ônibus saem juntos às 8h. Um passa a cada 12 min e o outro a cada 18 min. Quando saem juntos de novo?', s:['“Juntos de novo” → MMC.','12 = 2²·3 e 18 = 2·3² → MMC = 2²·3² = 36.','8h + 36 min.'], r:'8h36'},
  {q:'Fitas de 24 cm e 36 cm serão cortadas em pedaços iguais, do maior tamanho possível, sem sobra. Qual o tamanho e quantos pedaços?', s:['“Maior tamanho possível sem sobra” → MDC(24, 36) = 12.','24 ÷ 12 = 2 e 36 ÷ 12 = 3.'], r:'Pedaços de 12 cm, 5 pedaços no total'}
 ],
 trap:'Depois de achar o MDC, a pergunta pode ser “quantos pedaços/kits”. Aí é preciso dividir cada quantidade pelo MDC.',
 qz:[
  ['Três luzes piscam a cada 4 s, 6 s e 10 s. Elas piscaram juntas agora. Daqui a quantos segundos piscarão juntas outra vez?', ['20','30','60','240'], 2, 'Juntas de novo → MMC(4, 6, 10) = 60.'],
  ['Com 48 lápis e 72 canetas, quero montar kits iguais, sem sobra, com o maior número possível de kits. Quantos kits?', ['6','12','24','144'], 2, 'MDC(48, 72) = 24 kits, cada um com 2 lápis e 3 canetas.'],
  ['Qual número é divisível por 3 e por 5 ao mesmo tempo?', ['125','135','143','152'], 1, '135 termina em 5 e 1 + 3 + 5 = 9 (divisível por 3).']
 ]},

/* ============ M2 · ÁLGEBRA ============ */
{id:'m-eq1', mod:'M2', star:3, t:'Equação do 1º grau e problemas', bncc:'EF07MA18',
 hook:'Equação é uma balança: o que você faz de um lado, faz do outro. O mais difícil é <b>montar</b> a equação a partir do texto.',
 body:`<p><b>Passo a passo:</b> 1) tire os parênteses (distributiva); 2) leve os termos com x para um lado e os números para o outro (trocando o sinal); 3) divida pelo número que multiplica o x.</p>
<p><b>Com frações:</b> multiplique <b>todos os termos</b> pelo MMC dos denominadores para “sumir” com eles.</p>
<p><b>Dicionário do problema:</b></p>
<ul><li>o dobro / o triplo de um número → 2x / 3x</li><li>a metade / a terça parte → [[x|2]] / [[x|3]]</li><li>três números consecutivos → x, x + 1, x + 2</li><li>A tem 5 a mais que B → A = B + 5</li><li>“o mesmo que”, “resulta em” → =</li></ul>
<p>Sempre <b>confira</b> substituindo o valor encontrado no enunciado.</p>`,
 rule:`ax + b = c → x = [[c − b|a]]<br>Com frações: multiplique tudo pelo MMC`,
 ex:[
  {q:'Resolva 3(x − 2) = 2x + 5.', s:['Distributiva: 3x − 6 = 2x + 5.','3x − 2x = 5 + 6.','x = 11.'], r:'x = 11'},
  {q:'Resolva [[x|2]] + [[x|3]] = 10.', s:['MMC(2, 3) = 6. Multiplique tudo por 6: 3x + 2x = 60.','5x = 60 → x = 12.'], r:'x = 12'},
  {q:'A soma de três números consecutivos é 72. Quais são?', s:['x + (x + 1) + (x + 2) = 72.','3x + 3 = 72 → 3x = 69 → x = 23.'], r:'23, 24 e 25'}
 ],
 trap:'Ao multiplicar pelo MMC, muita gente esquece de multiplicar o lado direito ou o número sem fração. É <b>todo</b> termo.',
 qz:[
  ['Qual é a solução de 5x − 7 = 2x + 8?', ['x = 5','x = 3','x = 15','x = 1'], 0, '5x − 2x = 8 + 7 → 3x = 15 → x = 5.'],
  ['Um pai tem o triplo da idade do filho. Juntos, somam 48 anos. Quantos anos tem o filho?', ['12','16','36','24'], 0, 'x + 3x = 48 → 4x = 48 → x = 12 (o pai tem 36).'],
  ['Resolva [[x + 1|2]] − [[x|3]] = 2.', ['x = 9','x = 3','x = 6','x = 15'], 0, 'Multiplique tudo por 6: 3(x + 1) − 2x = 12 → 3x + 3 − 2x = 12 → x = 9.']
 ]},

{id:'m-sist', mod:'M2', star:3, t:'Sistemas de equações do 1º grau', bncc:'EF08MA08',
 hook:'Duas incógnitas pedem duas equações. Use <b>adição</b> quando der para cancelar uma letra e <b>substituição</b> quando uma letra já estiver “sozinha”.',
 body:`<p><b>Método da adição:</b> some (ou subtraia) as equações para eliminar uma incógnita. Se precisar, multiplique uma equação antes para os coeficientes ficarem opostos.</p>
<p><b>Método da substituição:</b> isole uma letra numa equação e substitua na outra.</p>
<p><b>Problemas típicos:</b> carros e motos (rodas), ingressos inteira e meia, acertos e erros, cédulas de dois valores. Monte uma equação para a <b>quantidade</b> e outra para o <b>valor</b> (ou rodas, pontos…).</p>`,
 rule:`Equação 1: quantidade total · Equação 2: valor total<br>Adição: some para sumir com uma letra`,
 ex:[
  {q:'Resolva: x + y = 10 e x − y = 4.', s:['Somando: 2x = 14 → x = 7.','Volte numa equação: 7 + y = 10 → y = 3.'], r:'x = 7 e y = 3'},
  {q:'Num estacionamento há 30 veículos entre carros e motos, com 100 rodas. Quantos carros?', s:['c + m = 30 e 4c + 2m = 100.','Da 1ª: m = 30 − c. Na 2ª: 4c + 60 − 2c = 100 → 2c = 40.','c = 20 e m = 10.'], r:'20 carros (e 10 motos)'}
 ],
 trap:'Ache as duas incógnitas e responda o que foi <b>perguntado</b>: muitas alternativas trazem o valor da outra letra.',
 qz:[
  ['Se 2x + y = 11 e x − y = 1, quanto vale x + y?', ['7','5','12','1'], 0, 'Somando: 3x = 12 → x = 4; y = 3. Então x + y = 7.'],
  ['Numa prova de 20 questões, cada acerto vale +3 e cada erro −1. Um aluno respondeu todas e fez 40 pontos. Quantas acertou?', ['15','10','13','16'], 0, 'a + e = 20 e 3a − e = 40. Somando: 4a = 60 → a = 15.'],
  ['Foram vendidos 50 ingressos (inteira R$ 30, meia R$ 15), arrecadando R$ 1 050. Quantas meias?', ['20','30','25','35'], 1, 'i + m = 50 e 30i + 15m = 1 050 → dividindo por 15: 2i + m = 70. Subtraindo: i = 20, m = 30.']
 ]},

{id:'m-prod', mod:'M2', star:3, t:'Produtos notáveis e fatoração', bncc:'EF09MA09',
 hook:'São “atalhos” de multiplicação. Servem para simplificar expressões, resolver equações e até fazer contas de cabeça.',
 body:`<p><b>Quadrado da soma:</b> (a + b)² = a² + 2ab + b² → “o quadrado do 1º, mais 2 vezes o 1º pelo 2º, mais o quadrado do 2º”.</p>
<p><b>Quadrado da diferença:</b> (a − b)² = a² − 2ab + b².</p>
<p><b>Produto da soma pela diferença:</b> (a + b)(a − b) = a² − b².</p>
<p><b>Fatorar</b> é fazer o caminho de volta, transformar soma em produto:</p>
<ul><li>Fator comum: 6x + 9y = 3(2x + 3y)</li><li>Diferença de quadrados: x² − 25 = (x + 5)(x − 5)</li><li>Trinômio quadrado perfeito: x² + 6x + 9 = (x + 3)²</li><li>Agrupamento: ax + ay + bx + by = (a + b)(x + y)</li></ul>
<p><b>Conta de cabeça:</b> 51² = (50 + 1)² = 2 500 + 100 + 1 = 2 601 · 49 × 51 = 50² − 1 = 2 499.</p>`,
 rule:`(a + b)² = a² + 2ab + b²<br>(a − b)² = a² − 2ab + b²<br>(a + b)(a − b) = a² − b²`,
 ex:[
  {q:'Desenvolva (x + 3)².', s:['x² + 2·x·3 + 3².'], r:'x² + 6x + 9'},
  {q:'Simplifique [[x² − 9|x + 3]] (com x ≠ −3).', s:['x² − 9 = (x + 3)(x − 3).','Corta (x + 3) em cima e embaixo.'], r:'x − 3'}
 ],
 trap:'(a + b)² <b>não</b> é a² + b². Teste: (2 + 3)² = 25, mas 2² + 3² = 13. Falta o 2ab!',
 qz:[
  ['Desenvolvendo (2x − 5)², obtemos:', ['4x² − 25','4x² − 20x + 25','4x² − 10x + 25','2x² − 20x + 25'], 1, '(2x)² − 2·(2x)·5 + 5² = 4x² − 20x + 25.'],
  ['A forma fatorada de x² − 49 é:', ['(x − 7)²','(x + 7)(x − 7)','x(x − 49)','(x + 7)²'], 1, 'Diferença de quadrados: x² − 7² = (x + 7)(x − 7).'],
  ['Quanto vale 101² − 99²?', ['4','200','400','2 000'], 2, '(101 + 99)(101 − 99) = 200 × 2 = 400. Sem calcular os quadrados!']
 ]},

{id:'m-eq2', mod:'M2', star:3, t:'Equação do 2º grau', bncc:'EF09MA09 · EF08MA09',
 hook:'ax² + bx + c = 0. Antes de correr para Bhaskara, veja se a equação é incompleta: é bem mais rápido.',
 body:`<p><b>Incompleta sem c</b> (ax² + bx = 0): coloque x em evidência → x(ax + b) = 0 → x = 0 ou x = [[−b|a]].</p>
<p><b>Incompleta sem b</b> (ax² + c = 0): isole o x² e tire a raiz → <b>duas</b> respostas, ± (se o número ficar negativo, não há raiz real).</p>
<p><b>Completa</b>: Δ = b² − 4ac e x = [[−b ± √{Δ}|2a]].</p>
<ul><li>Δ &gt; 0 → duas raízes reais diferentes</li><li>Δ = 0 → duas raízes iguais (uma só)</li><li>Δ &lt; 0 → nenhuma raiz real</li></ul>
<p><b>Soma e produto</b> (atalho): S = [[−b|a]] e P = [[c|a]]. Em x² − 5x + 6 = 0, procure dois números que somam 5 e multiplicam 6: 2 e 3.</p>
<p><b>Em problemas</b> de medida (lado, idade, quantidade), descarte a raiz negativa.</p>`,
 rule:`Δ = b² − 4ac · x = [[−b ± √{Δ}|2a]]<br>S = [[−b|a]] · P = [[c|a]]`,
 ex:[
  {q:'Resolva x² − 5x + 6 = 0.', s:['a = 1, b = −5, c = 6. Δ = 25 − 24 = 1.','x = [[5 ± 1|2]] → 3 ou 2.'], r:'S = {2, 3}'},
  {q:'Um retângulo tem lados x e x + 3 e área 40. Quanto mede x?', s:['x(x + 3) = 40 → x² + 3x − 40 = 0.','Δ = 9 + 160 = 169 → √{169} = 13.','x = [[−3 ± 13|2]] → 5 ou −8. Medida não é negativa.'], r:'x = 5 (lados 5 e 8)'}
 ],
 trap:'x² = 9 tem <b>duas</b> soluções: 3 e −3. E cuidado com o sinal em −b: se b = −5, então −b = +5.',
 qz:[
  ['As raízes de x² − 7x + 10 = 0 são:', ['2 e 5','−2 e −5','1 e 10','−2 e 5'], 0, 'Soma 7 e produto 10 → 2 e 5. (Δ = 49 − 40 = 9.)'],
  ['A equação x² + 4x + 5 = 0:', ['tem duas raízes reais diferentes','tem duas raízes iguais','não tem raiz real','tem raiz −2'], 2, 'Δ = 16 − 20 = −4 &lt; 0 → nenhuma raiz real.'],
  ['O quadrado de um número positivo, menos o dobro dele, é 15. Que número é esse?', ['3','5','15','−3'], 1, 'x² − 2x − 15 = 0 → (x − 5)(x + 3) = 0 → 5 ou −3. Como é positivo, 5.']
 ]},

{id:'m-prop', mod:'M2', star:3, t:'Razão, proporção, regra de três e escalas', bncc:'EF09MA07 · EF09MA08 · EF08MA13',
 hook:'Antes de montar a regra de três, pergunte: <b>se uma grandeza aumenta, a outra aumenta ou diminui?</b>',
 body:`<p><b>Razão</b> é uma divisão que compara: [[a|b]]. <b>Proporção</b> é uma igualdade de razões: [[a|b]] = [[c|d]] → a·d = b·c (multiplica cruzado).</p>
<p><b>Diretamente proporcionais:</b> uma dobra, a outra dobra (quantidade e preço, tempo e distância com velocidade fixa). A razão é constante.</p>
<p><b>Inversamente proporcionais:</b> uma dobra, a outra cai pela metade (operários e dias, velocidade e tempo). O <b>produto</b> é constante.</p>
<p><b>Escala</b> = [[medida no desenho|medida real]] (mesma unidade). 1 : 50 000 → 1 cm no mapa = 50 000 cm = 500 m reais. Lembre: 1 km = 100 000 cm.</p>
<p><b>Divisão proporcional:</b> dividir 120 em partes proporcionais a 2, 3 e 5 → some as partes (10), 120 ÷ 10 = 12 → 24, 36 e 60.</p>
<p><b>Razões entre grandezas diferentes:</b> velocidade média = [[distância|tempo]] (km/h) · densidade demográfica = [[habitantes|área]] (hab/km²).</p>`,
 rule:`Direta: [[a|b]] = [[c|d]] · Inversa: a·b = c·d<br>Escala = [[desenho|real]] · v = [[d|t]] · densidade = [[hab|km²]]`,
 ex:[
  {q:'6 pedreiros fazem um muro em 10 dias. Em quantos dias 4 pedreiros fazem o mesmo muro?', s:['Menos pedreiros → mais dias: inversa.','6 × 10 = 4 × x → x = 15.'], r:'15 dias'},
  {q:'Num mapa de escala 1 : 200 000, duas cidades estão a 3,5 cm. Qual a distância real?', s:['3,5 × 200 000 = 700 000 cm.','700 000 cm ÷ 100 000 = 7 km.'], r:'7 km'},
  {q:'Um carro percorreu 180 km em 2h30. Qual a velocidade média?', s:['2h30 = 2,5 h (meia hora é 0,5).','180 ÷ 2,5 = 72.'], r:'72 km/h'}
 ],
 trap:'2h30 é 2,5 h, e não 2,3 h! E em escala, sempre converta para a mesma unidade antes de comparar.',
 qz:[
  ['Uma torneira enche um tanque em 6 h. Três torneiras iguais, juntas, enchem o mesmo tanque em:', ['18 h','2 h','3 h','9 h'], 1, 'Mais torneiras → menos tempo (inversa): 1 × 6 = 3 × x → x = 2 h.'],
  ['Num mapa de escala 1 : 500 000, duas cidades estão a 4 cm. A distância real é:', ['2 km','20 km','200 km','125 km'], 1, '4 × 500 000 = 2 000 000 cm = 20 km.'],
  ['R$ 900 serão divididos entre três irmãos em partes proporcionais às idades 10, 12 e 14. Quanto recebe o mais velho?', ['R$ 300','R$ 350','R$ 400','R$ 450'], 1, '10 + 12 + 14 = 36; 900 ÷ 36 = 25; 14 × 25 = 350.'],
  ['Um ciclista percorreu 30 km em 1h15min. Sua velocidade média foi:', ['24 km/h','26 km/h','20 km/h','30 km/h'], 0, '1h15 = 1,25 h. 30 ÷ 1,25 = 24 km/h.']
 ]},

{id:'m-func', mod:'M2', star:2, t:'Funções e valor numérico', bncc:'EF09MA06 · EF08MA06 · EF08MA07',
 hook:'Função é uma regra: para cada x que entra, sai <b>um único</b> y. Ela pode aparecer como tabela, fórmula ou gráfico.',
 body:`<p><b>Função afim</b>: y = ax + b. O <b>a</b> é a taxa de variação (quanto y muda quando x aumenta 1) e o <b>b</b> é o valor inicial (onde o gráfico corta o eixo y).</p>
<ul><li>Táxi: bandeirada R$ 5 + R$ 2,50 por km → y = 2,5x + 5.</li><li>a &gt; 0: gráfico <b>crescente</b>; a &lt; 0: <b>decrescente</b>.</li><li>Se b = 0 (y = ax), as grandezas são diretamente proporcionais.</li></ul>
<p><b>Da tabela para a fórmula:</b> veja quanto y aumenta a cada passo de x (é o a) e descubra o b com um ponto.</p>
<p><b>Valor numérico:</b> troque a letra pelo número, <b>com parênteses</b> se for negativo: para x = −2, x² = (−2)² = 4.</p>
<p>A função quadrática (y = ax² + bx + c) tem gráfico em forma de <b>parábola</b>.</p>`,
 rule:`y = ax + b · a = taxa de variação · b = valor inicial<br>Valor numérico: substitua com parênteses`,
 ex:[
  {q:'Táxi: R$ 5 de bandeirada + R$ 2,50 por km. Quanto custa uma corrida de 12 km?', s:['y = 2,5x + 5.','y = 2,5 × 12 + 5 = 30 + 5.'], r:'R$ 35,00'},
  {q:'Tabela: x = 0, 1, 2, 3 e y = 3, 5, 7, 9. Qual a lei?', s:['y aumenta 2 quando x aumenta 1 → a = 2.','Quando x = 0, y = 3 → b = 3.'], r:'y = 2x + 3'}
 ],
 trap:'No táxi, dobrar os quilômetros <b>não</b> dobra o preço, por causa da bandeirada (o b). Só é proporcional quando b = 0.',
 qz:[
  ['Na tabela x = 1, 2, 3, 4 e y = 7, 10, 13, 16, a lei da função é:', ['y = 3x + 4','y = 7x','y = x + 6','y = 4x + 3'], 0, 'y cresce 3 a cada passo → a = 3. Para x = 1: 3 + b = 7 → b = 4.'],
  ['Uma vela de 30 cm queima 2 cm por hora. Depois de quantas horas ela terá 12 cm?', ['6','9','12','15'], 1, 'h = 30 − 2t → 12 = 30 − 2t → 2t = 18 → t = 9.'],
  ['Qual o valor de 2x² − 3x + 1 para x = −2?', ['15','3','−1','1'], 0, '2·(−2)² − 3·(−2) + 1 = 8 + 6 + 1 = 15.']
 ]},

{id:'m-seq', mod:'M2', star:1, t:'Sequências e regularidades', bncc:'EF08MA10 · EF08MA11',
 hook:'Descubra o padrão: soma sempre o mesmo número? Multiplica sempre pelo mesmo?',
 body:`<p><b>Soma constante</b> (progressão aritmética): 5, 9, 13, 17… soma 4. Termo geral: a<sub>n</sub> = a<sub>1</sub> + (n − 1)·r.</p>
<p><b>Multiplicação constante</b> (progressão geométrica): 3, 6, 12, 24… multiplica por 2.</p>
<p><b>Sequência recursiva:</b> cada termo depende do anterior (ex.: “some os dois anteriores”: 1, 1, 2, 3, 5, 8…).</p>
<p><b>Figuras com palitos/bolinhas:</b> conte para 1, 2, 3 figuras, veja quanto aumenta e monte a fórmula.</p>`,
 rule:`a<sub>n</sub> = a<sub>1</sub> + (n − 1)·r`,
 ex:[
  {q:'Qual o 20º termo de 5, 9, 13, 17…?', s:['a<sub>1</sub> = 5 e r = 4.','a<sub>20</sub> = 5 + 19 × 4 = 5 + 76.'], r:'81'},
  {q:'Quadrados enfileirados feitos com palitos: 1 quadrado usa 4, 2 usam 7, 3 usam 10. E n quadrados?', s:['Cada quadrado novo acrescenta 3 palitos.','Fórmula: 3n + 1 (confira: n = 1 → 4).'], r:'3n + 1 palitos'}
 ],
 trap:'Em a<sub>n</sub> = a<sub>1</sub> + (n − 1)r, é <b>n − 1</b>: do 1º ao 20º termo são só 19 “pulos”.',
 qz:[
  ['Qual o próximo termo de 3, 6, 12, 24, …?', ['30','36','48','42'], 2, 'Multiplica por 2: 24 × 2 = 48.'],
  ['Na sequência 2, 7, 12, 17, …, o 15º termo é:', ['72','75','77','70'], 0, '2 + 14 × 5 = 72.'],
  ['Triângulos lado a lado formam uma faixa: 1 triângulo usa 3 palitos, 2 usam 5, 3 usam 7. Quantos palitos para 10 triângulos?', ['30','21','20','23'], 1, 'Aumenta 2 por triângulo: 2n + 1 → 2 × 10 + 1 = 21.']
 ]},

/* ============ M3 · GEOMETRIA ============ */
{id:'m-ang', mod:'M3', star:3, t:'Ângulos e retas paralelas', bncc:'EF09MA10 · EF07MA23', fig:'paralelas',
 hook:'Quando duas paralelas são cortadas por uma transversal, só aparecem <b>dois</b> tamanhos de ângulo: um agudo e um obtuso, que somam 180° (se a transversal for perpendicular, todos medem 90°).',
 body:`<p><b>Classificação:</b> agudo (&lt; 90°), reto (90°), obtuso (entre 90° e 180°), raso (180°).</p>
<p><b>Complementares</b> somam 90° · <b>suplementares</b> somam 180° · <b>opostos pelo vértice</b> são iguais. A <b>bissetriz</b> divide o ângulo ao meio.</p>
<p><b>Paralelas cortadas por transversal</b> (veja a figura):</p>
<ul><li><b>Correspondentes</b> (mesma posição em cada cruzamento): iguais.</li><li><b>Alternos internos</b> (entre as paralelas, lados opostos da transversal): iguais.</li><li><b>Alternos externos</b>: iguais.</li><li><b>Colaterais internos</b> (entre as paralelas, mesmo lado): somam 180°.</li></ul>`,
 rule:`Complemento de x = 90° − x · Suplemento = 180° − x<br>Paralelas: ângulos “do mesmo tipo” são iguais; agudo + obtuso = 180°`,
 ex:[
  {q:'Dois ângulos alternos internos medem 3x + 10° e 5x − 30°. Quanto mede cada um?', s:['Alternos internos são iguais: 3x + 10 = 5x − 30.','40 = 2x → x = 20.','3 · 20 + 10 = 70°.'], r:'70°'},
  {q:'Dois colaterais internos medem 2x e x + 30°. Quanto vale x?', s:['Colaterais somam 180°: 3x + 30 = 180.','x = 50°.'], r:'x = 50° (ângulos de 100° e 80°)'}
 ],
 trap:'Complemento de 40° é 50° e suplemento é 140°. Leia com calma expressões como “o suplemento do complemento”.',
 qz:[
  ['Qual é o suplemento do complemento de 30°?', ['60°','120°','150°','90°'], 1, 'Complemento de 30° = 60°. Suplemento de 60° = 120°.'],
  ['Duas paralelas são cortadas por uma transversal. Dois ângulos correspondentes medem 3x − 20° e 2x + 15°. Cada um mede:', ['35°','85°','95°','105°'], 1, 'Correspondentes são iguais: x = 35 → 3 · 35 − 20 = 85°.'],
  ['Dois ângulos colaterais internos: um mede 115°. O outro mede:', ['115°','65°','25°','245°'], 1, 'Colaterais internos somam 180°: 180 − 115 = 65°.']
 ]},

{id:'m-pol', mod:'M3', star:2, t:'Triângulos e polígonos', bncc:'EF07MA27 · EF08MA14',
 hook:'Um polígono de n lados pode ser dividido em (n − 2) triângulos. Daí vem a fórmula da soma dos ângulos.',
 body:`<p><b>Triângulo:</b> ângulos internos somam 180°. O ângulo <b>externo</b> é igual à soma dos dois internos não vizinhos a ele. Isósceles: ângulos da base iguais. Equilátero: três ângulos de 60°.</p>
<p><b>Soma dos ângulos internos</b> de um polígono: S<sub>i</sub> = (n − 2) · 180°.</p>
<p><b>Polígono regular</b> (lados e ângulos iguais): cada interno = [[S<sub>i</sub>|n]], cada externo = [[360°|n]]. Interno + externo = 180°.</p>
<p><b>Diagonais:</b> d = [[n(n − 3)|2]].</p>
<p><b>Quadriláteros:</b> paralelogramo (lados opostos paralelos e iguais; ângulos opostos iguais), retângulo (4 ângulos retos), losango (4 lados iguais), quadrado (os dois), trapézio (só um par de lados paralelos).</p>`,
 rule:`S<sub>i</sub> = (n − 2)·180° · externos somam 360°<br>Regular: externo = [[360°|n]] · d = [[n(n − 3)|2]]`,
 ex:[
  {q:'Para o hexágono regular: soma dos internos, cada ângulo e número de diagonais.', s:['S<sub>i</sub> = (6 − 2) · 180 = 720°.','Cada ângulo: 720 ÷ 6 = 120°.','d = [[6 · 3|2]] = 9.'], r:'720°, 120° e 9 diagonais'},
  {q:'Um polígono regular tem ângulo externo de 30°. Quantos lados tem?', s:['Externo = [[360|n]] → 30 = [[360|n]].','n = 12.'], r:'12 lados (dodecágono)'}
 ],
 trap:'Na fórmula das diagonais, não esqueça de dividir por 2 (cada diagonal seria contada duas vezes).',
 qz:[
  ['A soma dos ângulos internos de um octógono é:', ['900°','1 080°','1 440°','720°'], 1, '(8 − 2) × 180 = 1 080°.'],
  ['Um polígono regular tem ângulo interno de 140°. Quantos lados ele tem?', ['7','8','9','10'], 2, 'Externo = 180 − 140 = 40° → n = 360 ÷ 40 = 9.'],
  ['Num triângulo isósceles, o ângulo do vértice mede 40°. Cada ângulo da base mede:', ['40°','70°','140°','50°'], 1, '(180 − 40) ÷ 2 = 70°.']
 ]},

{id:'m-sem', mod:'M3', star:3, t:'Semelhança de triângulos e Teorema de Tales', bncc:'EF09MA12 · EF09MA14', fig:'sombra',
 hook:'Mesma forma, tamanhos diferentes: ângulos iguais e lados proporcionais. É assim que se mede a altura de um prédio pela sombra.',
 body:`<p><b>Figuras semelhantes</b> têm ângulos correspondentes iguais e lados correspondentes proporcionais. A <b>razão de semelhança</b> k é a divisão entre lados correspondentes.</p>
<p><b>Para dois triângulos serem semelhantes, basta:</b></p>
<ul><li><b>AA</b>: dois ângulos iguais (o caso mais usado);</li><li><b>LAL</b>: dois lados proporcionais e o ângulo entre eles igual;</li><li><b>LLL</b>: os três lados proporcionais.</li></ul>
<p><b>Atenção:</b> se os lados estão na razão k, os perímetros também estão na razão k, mas as <b>áreas</b> ficam na razão <b>k²</b>.</p>
<p><b>Sombras:</b> no mesmo instante, os raios de sol são paralelos, então [[altura|sombra]] é igual para todos os objetos.</p>
<p><b>Teorema de Tales:</b> um feixe de retas paralelas cortado por duas transversais determina segmentos proporcionais: [[a|b]] = [[c|d]].</p>`,
 rule:`Semelhantes: [[a|a’]] = [[b|b’]] = [[c|c’]] = k<br>Perímetros: k · Áreas: k²<br>Tales: [[a|b]] = [[c|d]]`,
 ex:[
  {q:'Um poste faz sombra de 6 m. Ao mesmo tempo, uma pessoa de 1,6 m faz sombra de 1,2 m. Qual a altura do poste?', s:['[[h|6]] = [[1,6|1,2]].','1,2h = 9,6 → h = 8.'], r:'8 m'},
  {q:'Num feixe de paralelas, uma transversal tem segmentos 4 e 6; a outra, 6 e x. Quanto vale x?', s:['[[4|6]] = [[6|x]].','4x = 36 → x = 9.'], r:'x = 9'}
 ],
 trap:'Se o lado triplica, a área fica <b>9 vezes</b> maior (3²), e não 3 vezes. E compare sempre lados <b>correspondentes</b> (opostos ao mesmo ângulo).',
 qz:[
  ['Um prédio faz sombra de 15 m. No mesmo instante, uma vara de 2 m faz sombra de 3 m. A altura do prédio é:', ['10 m','22,5 m','20 m','7,5 m'], 0, '[[h|15]] = [[2|3]] → h = 10 m.'],
  ['Duas figuras semelhantes têm razão 1 : 3. Se a menor tem 5 cm² de área, a maior tem:', ['15 cm²','45 cm²','30 cm²','125 cm²'], 1, 'Áreas na razão k² = 9: 5 × 9 = 45 cm².'],
  ['Pelo Teorema de Tales, se [[3|5]] = [[6|x]], então x vale:', ['8','10','2,5','9'], 1, '3x = 30 → x = 10.']
 ]},

{id:'m-pit', mod:'M3', star:3, t:'Teorema de Pitágoras e relações métricas', bncc:'EF09MA13 · EF09MA14', fig:'pitagoras',
 hook:'No triângulo retângulo: o quadrado da hipotenusa é igual à soma dos quadrados dos catetos. É o assunto mais cobrado de geometria.',
 body:`<p><b>Hipotenusa</b> (a): lado oposto ao ângulo de 90°, sempre o <b>maior</b>. <b>Catetos</b> (b e c): os lados que formam o ângulo reto.</p>
<p><b>Pitágoras:</b> a² = b² + c². Se pedir um cateto: c² = a² − b².</p>
<p><b>Ternos famosos</b> (economizam conta): 3-4-5 · 5-12-13 · 8-15-17 · 7-24-25 e seus múltiplos (6-8-10, 9-12-15…).</p>
<p><b>Aplicações:</b> escada na parede, rampa, diagonal de TV, distância no mapa. Diagonal do quadrado: d = ℓ√{2}. Altura do triângulo equilátero: h = [[ℓ√{3}|2]].</p>
<p><b>Relações métricas</b> (com a altura h relativa à hipotenusa, que a divide em m e n, sendo m a projeção do cateto b e n a projeção do cateto c): b² = a·m · c² = a·n · h² = m·n · a·h = b·c.</p>
<p><b>Recíproca:</b> se a² = b² + c², o triângulo é retângulo. Com 5, 6 e 7: 25 + 36 ≠ 49 → não é.</p>`,
 rule:`a² = b² + c² (a = hipotenusa)<br>h² = m·n · b² = a·m · c² = a·n · a·h = b·c<br>Diagonal do quadrado ℓ√{2} · altura do equilátero [[ℓ√{3}|2]]`,
 ex:[
  {q:'Uma escada de 5 m está apoiada numa parede, com o pé a 3 m da parede. A que altura ela toca a parede?', s:['A escada é a hipotenusa: 5² = 3² + h².','25 = 9 + h² → h² = 16 → h = 4.'], r:'4 m'},
  {q:'No triângulo retângulo, a altura divide a hipotenusa em m = 4 e n = 9. Quanto mede a altura?', s:['h² = m · n = 36.','h = 6.'], r:'h = 6'}
 ],
 trap:'Antes de aplicar a fórmula, identifique a hipotenusa. Se o problema dá a hipotenusa e um cateto, você <b>subtrai</b> os quadrados.',
 qz:[
  ['Uma rampa tem base de 12 m e altura de 5 m. O comprimento da rampa é:', ['17 m','13 m','7 m','√{119} m'], 1, '12² + 5² = 144 + 25 = 169 → √{169} = 13 m (terno 5-12-13).'],
  ['Uma TV retangular mede 80 cm por 60 cm. A diagonal mede:', ['140 cm','100 cm','120 cm','90 cm'], 1, '80² + 60² = 6 400 + 3 600 = 10 000 → 100 cm (é o 3-4-5 multiplicado por 20).'],
  ['A altura relativa à hipotenusa divide-a em segmentos de 2 e 8. A altura mede:', ['4','5','10','16'], 0, 'h² = 2 × 8 = 16 → h = 4.'],
  ['A altura de um triângulo equilátero de lado 10 mede:', ['5','5√{3}','10√{3}','5√{2}'], 1, 'h = [[10√{3}|2]] = 5√{3}. (Pitágoras: 10² = 5² + h² → h² = 75.)']
 ]},

{id:'m-circ', mod:'M3', star:2, t:'Circunferência: arcos, ângulo central e inscrito', bncc:'EF09MA11 · EF07MA33', fig:'inscrito',
 hook:'O ângulo inscrito vale <b>metade</b> do ângulo central que “olha” para o mesmo arco.',
 body:`<p><b>Elementos:</b> raio (r), diâmetro (2r, a maior corda), corda (liga dois pontos da circunferência), arco (pedaço da circunferência).</p>
<p><b>Ângulo central</b>: vértice no centro. Mede o mesmo que o arco que ele determina.</p>
<p><b>Ângulo inscrito</b>: vértice <b>na</b> circunferência. Mede a <b>metade</b> do arco (e do central correspondente).</p>
<ul><li>Inscritos que olham o mesmo arco são iguais.</li><li>Inscrito que olha para um <b>diâmetro</b> mede 90°: todo triângulo inscrito com um lado sendo diâmetro é retângulo.</li></ul>
<p><b>Comprimento:</b> C = 2πr. Arco de α°: [[α|360]] · 2πr.</p>`,
 rule:`Central = arco · Inscrito = [[arco|2]]<br>C = 2πr · arco de α° = [[α|360]]·2πr`,
 ex:[
  {q:'Um ângulo central mede 100°. Quanto mede um ângulo inscrito que olha o mesmo arco?', s:['Inscrito = metade do central.'], r:'50°'},
  {q:'Qual o comprimento de uma pista circular de raio 50 m? (π ≈ 3,14)', s:['C = 2 × 3,14 × 50 = 314.'], r:'314 m'}
 ],
 trap:'Inscrito é a <b>metade</b>; o central é o <b>dobro</b>. Não inverta!',
 qz:[
  ['Um ângulo inscrito mede 35°. O ângulo central que olha o mesmo arco mede:', ['17,5°','35°','70°','145°'], 2, 'Central é o dobro do inscrito: 70°.'],
  ['Um arco de uma circunferência mede 120°. Um ângulo inscrito que olha esse arco mede:', ['60°','120°','240°','30°'], 0, 'Metade do arco: 60°.'],
  ['Uma roda tem raio de 30 cm. Seu comprimento é (π ≈ 3,14):', ['94,2 cm','188,4 cm','2 826 cm','60 cm'], 1, 'C = 2 × 3,14 × 30 = 188,4 cm. (2 826 seria a área.)']
 ]},

{id:'m-cart', mod:'M3', star:2, t:'Plano cartesiano: ponto médio e distância', bncc:'EF09MA16 · EF08MA07', fig:'cartesiano',
 hook:'Distância entre dois pontos é Pitágoras disfarçado: desenhe o triângulo retângulo.',
 body:`<p><b>Par ordenado (x, y):</b> primeiro o x (horizontal, abscissa), depois o y (vertical, ordenada). (2, 3) ≠ (3, 2).</p>
<p><b>Quadrantes</b> (sentido anti-horário): 1º (+, +) · 2º (−, +) · 3º (−, −) · 4º (+, −).</p>
<p><b>Ponto médio:</b> a média das coordenadas: M = ([[x<sub>1</sub> + x<sub>2</sub>|2]], [[y<sub>1</sub> + y<sub>2</sub>|2]]).</p>
<p><b>Distância:</b> ande na horizontal (Δx) e na vertical (Δy): eles são os catetos. A distância é a hipotenusa: d² = Δx² + Δy².</p>
<p>Pontos na mesma horizontal: a distância é só a diferença dos x. Na mesma vertical, a diferença dos y.</p>`,
 rule:`M = (média dos x, média dos y)<br>d² = (Δx)² + (Δy)²`,
 ex:[
  {q:'A(1, 2) e B(7, 10): ponto médio e distância.', s:['M = ([[1 + 7|2]], [[2 + 10|2]]) = (4, 6).','Δx = 6, Δy = 8 → d² = 36 + 64 = 100 → d = 10.'], r:'M(4, 6) e d = 10'}
 ],
 trap:'Distância nunca é negativa: use a diferença “do maior para o menor” (ou eleve ao quadrado, que some o sinal).',
 qz:[
  ['O ponto médio entre (−2, 5) e (6, 1) é:', ['(2, 3)','(4, 6)','(4, 3)','(8, −4)'], 0, '([[−2 + 6|2]], [[5 + 1|2]]) = (2, 3).'],
  ['A distância entre (0, 0) e (5, 12) é:', ['17','13','7','12'], 1, 'd² = 25 + 144 = 169 → d = 13.'],
  ['O ponto (−3, 4) fica no:', ['1º quadrante','2º quadrante','3º quadrante','4º quadrante'], 1, 'x negativo e y positivo → 2º quadrante.']
 ]},

/* ============ M4 · MEDIDAS ============ */
{id:'m-area', mod:'M4', star:3, t:'Áreas e perímetros', bncc:'EF08MA19 · EF07MA32 · EF07MA33', fig:'areas',
 hook:'Perímetro é a volta (contorno). Área é o espaço de dentro, em unidades ao quadrado.',
 body:`<p><b>Fórmulas que você precisa saber de cor:</b></p>
<ul><li>Retângulo e paralelogramo: base × altura</li><li>Quadrado: ℓ²</li><li>Triângulo: [[b × h|2]]</li><li>Trapézio: [[(B + b) × h|2]]</li><li>Losango: [[D × d|2]] (diagonais)</li><li>Círculo: πr² · comprimento da circunferência: 2πr</li><li>Setor circular de α°: [[α|360]] · πr²</li><li>Coroa (anel): π(R² − r²)</li></ul>
<p><b>Figuras compostas:</b> divida em figuras conhecidas e some, ou calcule a figura grande e <b>subtraia</b> o buraco.</p>
<p><b>Unidades:</b> 1 m² = 10 000 cm² (porque 100 × 100). 1 hectare = 10 000 m².</p>`,
 rule:`□ b·h · △ [[b·h|2]] · trapézio [[(B + b)·h|2]] · losango [[D·d|2]]<br>○ área πr² · comprimento 2πr`,
 ex:[
  {q:'Trapézio com bases 10 e 6 e altura 4. Área?', s:['[[(10 + 6) × 4|2]] = [[64|2]].'], r:'32'},
  {q:'Um terreno retangular de 20 m × 30 m tem uma piscina de 4 m × 8 m. Qual a área livre?', s:['Terreno: 600 m². Piscina: 32 m².','600 − 32.'], r:'568 m²'}
 ],
 trap:'Se o problema dá o <b>diâmetro</b>, divida por 2 antes de usar πr². E não confunda 2πr (comprimento) com πr² (área).',
 qz:[
  ['A área de um círculo de diâmetro 10 cm é (π ≈ 3,14):', ['31,4 cm²','78,5 cm²','314 cm²','15,7 cm²'], 1, 'Raio 5: 3,14 × 25 = 78,5 cm².'],
  ['Um losango tem diagonais de 12 cm e 8 cm. Sua área é:', ['96 cm²','48 cm²','40 cm²','20 cm²'], 1, '[[12 × 8|2]] = 48 cm².'],
  ['Uma praça quadrada de lado 20 m tem um canteiro circular de raio 5 m. A área da praça fora do canteiro é (π ≈ 3):', ['325 m²','385 m²','300 m²','375 m²'], 0, '400 − 3 × 25 = 400 − 75 = 325 m².']
 ]},

{id:'m-vol', mod:'M4', star:2, t:'Volume e capacidade', bncc:'EF09MA19 · EF08MA20',
 hook:'Volume de prisma ou cilindro: <b>área da base × altura</b>. E 1 dm³ é exatamente 1 litro.',
 body:`<p><b>Paralelepípedo</b> (caixa): comprimento × largura × altura. <b>Cubo</b>: a³.</p>
<p><b>Prisma qualquer</b>: área da base × altura. <b>Cilindro</b>: πr² × h.</p>
<p><b>Capacidade:</b> 1 dm³ = 1 L · 1 m³ = 1 000 L · 1 cm³ = 1 mL.</p>
<p>Se as medidas estiverem em unidades diferentes, converta <b>antes</b> de multiplicar.</p>
<p>Se a aresta de um cubo dobra, o volume fica 2³ = <b>8 vezes</b> maior.</p>`,
 rule:`V = A<sub>base</sub> × h · cilindro πr²h · cubo a³<br>1 dm³ = 1 L · 1 m³ = 1 000 L · 1 cm³ = 1 mL`,
 ex:[
  {q:'Uma caixa-d’água mede 2 m × 1,5 m × 1 m. Quantos litros cabem?', s:['V = 2 × 1,5 × 1 = 3 m³.','3 × 1 000 = 3 000 L.'], r:'3 000 litros'},
  {q:'Uma lata cilíndrica tem raio 4 cm e altura 10 cm. Qual o volume? (π ≈ 3,14)', s:['V = 3,14 × 4² × 10 = 3,14 × 160 = 502,4 cm³.','502,4 cm³ = 502,4 mL ≈ meio litro.'], r:'502,4 cm³'}
 ],
 trap:'cm³ → litros: <b>divide</b> por 1 000 (1 000 cm³ = 1 L). Um aquário de 60 000 cm³ tem 60 L, e não 6 000 L. Já m³ → litros: <b>multiplica</b> por 1 000.',
 qz:[
  ['Um aquário mede 50 cm × 30 cm × 40 cm. Sua capacidade é:', ['6 L','60 L','600 L','6 000 L'], 1, '50 × 30 × 40 = 60 000 cm³ = 60 000 mL = 60 L.'],
  ['Um cilindro tem raio 2 m e altura 5 m. Seu volume é (π ≈ 3):', ['30 m³','60 m³','120 m³','20 m³'], 1, '3 × 2² × 5 = 3 × 4 × 5 = 60 m³.'],
  ['Se a aresta de um cubo dobra, o volume fica:', ['2 vezes maior','4 vezes maior','6 vezes maior','8 vezes maior'], 3, '(2a)³ = 8a³.']
 ]},

{id:'m-unid', mod:'M4', star:2, t:'Conversão de unidades', bncc:'EF07MA29 · EF09MA18',
 hook:'Cada degrau da escada multiplica por 10 no comprimento, por 100 na área e por 1 000 no volume. E o tempo é na base 60!',
 body:`<p><b>Comprimento:</b> km · hm · dam · <b>m</b> · dm · cm · mm (cada degrau ×10 para a direita, ÷10 para a esquerda).</p>
<p><b>Área:</b> cada degrau ×100 (km², m², cm²…). <b>Volume:</b> cada degrau ×1 000.</p>
<p><b>Massa:</b> 1 kg = 1 000 g · 1 t = 1 000 kg. <b>Capacidade:</b> 1 L = 1 000 mL.</p>
<p><b>Tempo (base 60):</b> 1 h = 60 min · 1 min = 60 s. Então 0,5 h = 30 min, 0,25 h = 15 min, 1,2 h = 1h12min.</p>
<p><b>Velocidade:</b> km/h ÷ 3,6 = m/s (e m/s × 3,6 = km/h).</p>`,
 rule:`Comprimento ×10 · área ×100 · volume ×1 000 (por degrau)<br>Tempo: 1 h = 60 min · km/h ÷ 3,6 = m/s`,
 ex:[
  {q:'Converta 1,2 h em horas e minutos.', s:['0,2 h × 60 = 12 min.'], r:'1h12min'},
  {q:'Converta 90 km/h para m/s.', s:['90 ÷ 3,6 = 25.'], r:'25 m/s'}
 ],
 trap:'1,5 h é 1h30min, e não 1h50! A parte decimal da hora é multiplicada por 60.',
 qz:[
  ['1h45min corresponde a quantas horas?', ['1,45 h','1,75 h','1,5 h','1,8 h'], 1, '45 min = [[45|60]] h = 0,75 h.'],
  ['0,8 m² corresponde a:', ['80 cm²','800 cm²','8 000 cm²','80 000 cm²'], 2, '1 m² = 10 000 cm² → 0,8 × 10 000 = 8 000 cm².'],
  ['72 km/h equivalem a:', ['20 m/s','72 m/s','259,2 m/s','2 m/s'], 0, '72 ÷ 3,6 = 20 m/s.']
 ]},

/* ============ M5 · ESTATÍSTICA ============ */
{id:'m-graf', mod:'M5', star:3, t:'Leitura de gráficos e tabelas', bncc:'EF09MA21 · EF09MA22 · EF07MA37',
 hook:'Antes de responder, leia o título, os eixos, as unidades, a legenda e a fonte. Muitas questões são sobre <b>gráficos enganosos</b>.',
 body:`<p><b>Qual gráfico usar:</b></p>
<ul><li><b>Colunas/barras:</b> comparar categorias (votos por candidato).</li><li><b>Linhas:</b> mostrar variação ao longo do tempo (temperatura no mês).</li><li><b>Setores (pizza):</b> partes de um todo; soma 100% (ou 360°). Ângulo = porcentagem × 360°: 25% → 90°.</li><li><b>Tabela:</b> valores exatos.</li></ul>
<p><b>Gráficos enganosos:</b> eixo vertical que não começa no zero (exagera diferenças), escalas irregulares, pizza que soma mais de 100%, ausência de fonte ou data, figuras em 3D que distorcem o tamanho.</p>
<p>Num gráfico de linhas, o maior crescimento é o trecho mais <b>inclinado</b>.</p>`,
 rule:`Setor: ângulo = % × 360° · 25% = 90° · 50% = 180°<br>Confira o eixo: começa no zero?`,
 ex:[
  {q:'Numa pesquisa com 200 alunos, o setor “futebol” mede 108°. Quantos alunos escolheram futebol?', s:['108 ÷ 360 = 0,3 = 30%.','30% de 200 = 60.'], r:'60 alunos'}
 ],
 trap:'Compare <b>valores</b>, não o tamanho visual das colunas. Uma coluna duas vezes mais alta pode significar só 2% a mais se o eixo começar em 100.',
 qz:[
  ['Numa pesquisa com 200 alunos, o setor de “vôlei” mede 54°. Quantos escolheram vôlei?', ['54','30','27','15'], 1, '54 ÷ 360 = 0,15 = 15% → 15% de 200 = 30.'],
  ['Um gráfico mostra vendas de 102 mil em janeiro e 104 mil em fevereiro, mas o eixo começa em 100 mil, e a coluna de fevereiro parece o dobro da de janeiro. O que é correto afirmar?', ['As vendas dobraram.','O aumento real foi de cerca de 2%, e o gráfico exagera a diferença.','As vendas caíram.','O gráfico está correto e mostra um aumento de 100%.'], 1, '(104 − 102) ÷ 102 ≈ 2%. Cortar o eixo exagera visualmente.'],
  ['Qual gráfico é mais adequado para mostrar a temperatura de uma cidade dia a dia durante um mês?', ['Setores','Linhas','Pictograma','Tabela de dupla entrada'], 1, 'Variação ao longo do tempo → gráfico de linhas.']
 ]},

{id:'m-media', mod:'M5', star:3, t:'Média, moda, mediana e amplitude', bncc:'EF08MA25 · EF09MA23',
 hook:'Três jeitos de resumir um conjunto de dados num número só. E uma pegadinha clássica: “a média de 5 números é 8” → a soma é 40.',
 body:`<p><b>Média aritmética:</b> soma de tudo ÷ quantidade.</p>
<p><b>Média ponderada:</b> cada valor tem um peso: [[soma (valor × peso)|soma dos pesos]].</p>
<p><b>Moda:</b> o valor que mais aparece (pode haver mais de uma ou nenhuma).</p>
<p><b>Mediana:</b> o valor do meio depois de <b>ordenar</b>. Se a quantidade for par, é a média dos dois do meio.</p>
<p><b>Amplitude:</b> maior − menor (mostra quanto os dados variam).</p>
<p>A média é “puxada” por valores extremos; a mediana, não. Por isso salários são bem representados pela mediana.</p>`,
 rule:`Média = [[soma|quantidade]] → soma = média × quantidade<br>Mediana: ordene e pegue o meio · Amplitude = maior − menor`,
 ex:[
  {q:'Prova (peso 2): nota 8. Trabalho (peso 1): nota 5. Média ponderada?', s:['[[8 × 2 + 5 × 1|2 + 1]] = [[21|3]].'], r:'7'},
  {q:'Mediana de 3, 7, 1, 9, 5, 2.', s:['Ordene: 1, 2, 3, 5, 7, 9.','Seis valores (par): média dos do meio: [[3 + 5|2]].'], r:'4'}
 ],
 trap:'Esqueceu de ordenar antes de achar a mediana? Resposta errada na certa.',
 qz:[
  ['A média de 4 provas de Bia é 7. Que nota ela precisa na 5ª para ficar com média 7,5?', ['8','9','9,5','10'], 2, 'Precisa somar 5 × 7,5 = 37,5. Já tem 4 × 7 = 28. Falta 9,5.'],
  ['A mediana de 12, 5, 8, 20, 7 é:', ['8','10,4','12','7'], 0, 'Ordenando: 5, 7, 8, 12, 20 → o do meio é 8. (10,4 é a média.)'],
  ['Nos dados 2, 3, 3, 5, 7, 7, 7, 9, a moda e a amplitude são:', ['7 e 7','3 e 7','7 e 9','5 e 7'], 0, 'Moda: 7 (aparece 3 vezes). Amplitude: 9 − 2 = 7.']
 ]},

{id:'m-prob', mod:'M5', star:2, t:'Probabilidade', bncc:'EF09MA20 · EF08MA22',
 hook:'Probabilidade = o que eu quero ÷ tudo o que pode acontecer. Com duas etapas, preste atenção se há <b>reposição</b>.',
 body:`<p><b>P = [[casos favoráveis|casos possíveis]]</b> (quando todos têm a mesma chance). Vai de 0 (impossível) a 1 (certo). P(não acontecer) = 1 − P.</p>
<p><b>Espaço amostral:</b> uma moeda → 2 · um dado → 6 · duas moedas → 4 · dois dados → 36.</p>
<p><b>Eventos independentes</b> (um não muda o outro: moeda e dado, sorteio <b>com</b> reposição): P(A e B) = P(A) × P(B).</p>
<p><b>Eventos dependentes</b> (sorteio <b>sem</b> reposição): depois da 1ª retirada, o total e os favoráveis mudam.</p>`,
 rule:`P = [[favoráveis|possíveis]] · P(não A) = 1 − P(A)<br>A e B: multiplica (sem reposição, ajuste os números)`,
 ex:[
  {q:'Urna com 3 bolas azuis e 2 vermelhas. Tirar 2 azuis com reposição e sem reposição.', s:['Com reposição: [[3|5]] × [[3|5]] = [[9|25]].','Sem reposição: [[3|5]] × [[2|4]] = [[6|20]] = [[3|10]].'], r:'[[9|25]] e [[3|10]]'},
  {q:'Dois dados: probabilidade de a soma ser 7.', s:['Casos: (1,6) (2,5) (3,4) (4,3) (5,2) (6,1) = 6.','[[6|36]] = [[1|6]].'], r:'[[1|6]]'}
 ],
 trap:'“Sem reposição”: na segunda retirada há uma bola a menos no total. E (1, 6) e (6, 1) são casos diferentes com dois dados.',
 qz:[
  ['Ao lançar um dado, qual a probabilidade de sair um número primo?', ['[[1|3]]','[[1|2]]','[[2|3]]','[[1|6]]'], 1, 'Primos: 2, 3 e 5 → [[3|6]] = [[1|2]].'],
  ['Uma sacola tem 4 bolas verdes e 6 brancas. Tiram-se duas, sem reposição. A probabilidade de as duas serem verdes é:', ['[[4|25]]','[[2|15]]','[[1|5]]','[[2|5]]'], 1, '[[4|10]] × [[3|9]] = [[12|90]] = [[2|15]].'],
  ['Lançando duas moedas, a probabilidade de sair pelo menos uma cara é:', ['[[1|4]]','[[1|2]]','[[3|4]]','1'], 2, 'Possíveis (C = cara, K = coroa): CC, CK, KC, KK. Só KK não tem cara → 1 − [[1|4]] = [[3|4]].']
 ]},

{id:'m-cont', mod:'M5', star:2, t:'Contagem: princípio multiplicativo', bncc:'EF08MA03',
 hook:'Se uma escolha tem m opções e a seguinte tem n, juntas têm m × n possibilidades.',
 body:`<p><b>Princípio multiplicativo:</b> desenhe os “tracinhos” das etapas e multiplique as opções de cada uma.</p>
<ul><li>3 camisetas e 4 calças → 3 × 4 = 12 combinações.</li><li>Senha de 3 algarismos <b>sem repetir</b>: 10 × 9 × 8 = 720.</li><li>Com repetição: 10 × 10 × 10 = 1 000.</li></ul>
<p><b>Anagramas</b> (ordenar letras diferentes): 4 letras → 4 × 3 × 2 × 1 = 24.</p>
<p><b>Quando a ordem não importa</b> (duplas, apertos de mão, partidas entre times), divida para não contar duas vezes: n pessoas → [[n(n − 1)|2]] apertos de mão.</p>`,
 rule:`Etapas: multiplique as opções · n objetos em fila: n! = n·(n − 1)·…·1<br>Ordem não importa (pares): [[n(n − 1)|2]]`,
 ex:[
  {q:'Quantos números de 3 algarismos distintos podem ser formados com 1, 2, 3, 4 e 5?', s:['Centena: 5 opções; dezena: 4; unidade: 3.','5 × 4 × 3.'], r:'60 números'},
  {q:'Num campeonato, 6 times jogam todos contra todos uma vez. Quantas partidas?', s:['6 × 5 = 30, mas A×B e B×A são o mesmo jogo.','30 ÷ 2 = 15.'], r:'15 partidas'}
 ],
 trap:'Repetição permitida ou não? Isso muda tudo: 10 × 10 × 10 é diferente de 10 × 9 × 8.',
 qz:[
  ['Uma lanchonete oferece 4 sanduíches, 3 sucos e 2 sobremesas. Quantos combos diferentes com um item de cada?', ['9','24','12','18'], 1, '4 × 3 × 2 = 24.'],
  ['Placas com 2 letras (26 opções cada) seguidas de 1 algarismo. Quantas placas possíveis?', ['6 760','676','2 600','520'], 0, '26 × 26 × 10 = 6 760.'],
  ['Quantos anagramas tem a palavra AMOR?', ['4','12','16','24'], 3, '4 × 3 × 2 × 1 = 24.']
 ]}
];
