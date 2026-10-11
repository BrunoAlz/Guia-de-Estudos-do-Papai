
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

/* Revisão Completa · PORTUGUÊS
   Todos os textos de exemplo foram escritos para este guia (exceto trechos em domínio público, indicados).
   saeb: descritores da Matriz de Referência de Língua Portuguesa do SAEB · 9º ano */
const SAEB = {
 D1:'Localizar informações explícitas em um texto',
 D2:'Estabelecer relações entre partes de um texto (repetições e substituições)',
 D3:'Inferir o sentido de uma palavra ou expressão',
 D4:'Inferir uma informação implícita em um texto',
 D5:'Interpretar texto com auxílio de material gráfico (propaganda, quadrinho, foto etc.)',
 D6:'Identificar o tema de um texto',
 D7:'Identificar a tese de um texto',
 D8:'Estabelecer relação entre a tese e os argumentos',
 D9:'Diferenciar as partes principais das secundárias em um texto',
 D10:'Identificar o conflito gerador do enredo e os elementos da narrativa',
 D11:'Estabelecer relação causa/consequência entre partes de um texto',
 D12:'Identificar a finalidade de textos de diferentes gêneros',
 D13:'Identificar as marcas linguísticas que evidenciam o locutor e o interlocutor',
 D14:'Distinguir um fato da opinião relativa a esse fato',
 D15:'Estabelecer relações lógico-discursivas marcadas por conjunções, advérbios etc.',
 D16:'Identificar efeitos de ironia ou humor em textos variados',
 D17:'Reconhecer o efeito de sentido da pontuação e de outras notações',
 D18:'Reconhecer o efeito de sentido de uma palavra ou expressão escolhida',
 D19:'Reconhecer o efeito de sentido de recursos ortográficos e/ou morfossintáticos',
 D20:'Reconhecer formas diferentes de tratar uma informação em textos sobre o mesmo tema',
 D21:'Reconhecer posições distintas entre opiniões sobre o mesmo fato ou tema'
};

const MODS_POR = [
 {id:'P1', n:'Leitura e interpretação', ic:'ler'},
 {id:'P2', n:'Sentido, coesão e argumentação', ic:'sen'},
 {id:'P3', n:'Gramática a serviço do texto', ic:'gra'}
];

const TOP_POR = [
/* ============ P1 · LEITURA ============ */
{id:'p-impl', mod:'P1', star:3, t:'Explícito, implícito e inferência', bncc:'EF69LP03 · SAEB', saeb:['D1','D3','D4','D6'],
 hook:'Metade das questões de Português pergunta o que o texto diz <b>sem dizer</b>. Inferir é concluir a partir de pistas, e não inventar.',
 body:`<p><b>Explícito:</b> está escrito com todas as letras. Para achar, volte ao texto e localize.</p>
<p><b>Implícito:</b> não está escrito, mas o texto permite concluir. Há dois tipos:</p>
<ul><li><b>Pressuposto</b>: uma palavra “carrega” a informação. “Lia <b>parou de</b> fumar” → ela fumava antes. “Ele <b>ainda</b> mora lá” → já morava. “Choveu <b>de novo</b>” → já tinha chovido.</li><li><b>Subentendido</b>: depende do contexto. “Nossa, que calor aqui dentro…” pode ser um pedido para abrir a janela.</li></ul>
<p><b>Sentido de palavra:</b> descubra pelo contexto, não pelo dicionário. Teste trocando a palavra pelas alternativas.</p>
<p><b>Tema</b> é a ideia central (o que o texto quer discutir), mais amplo que o assunto do primeiro parágrafo.</p>`,
 rule:`Inferência boa = tem <b>pista no texto</b><br>Desconfie de “sempre”, “nunca”, “todos”: costumam extrapolar`,
 ex:[
  {q:'“Finalmente o prefeito inaugurou a ponte.” O que a palavra “finalmente” deixa implícito?', s:['“Finalmente” indica espera, demora ou expectativa.'], r:'Que a obra demorou ou era muito esperada.'}
 ],
 trap:'A alternativa errada mais comum é uma frase <b>verdadeira no mundo</b>, mas que o texto não sustenta. A resposta precisa caber no texto.',
 tip:'Leia a pergunta antes do texto. Assim você já lê procurando a pista.',
 txt:`<b>Texto:</b> Depois que a biblioteca do bairro passou a abrir aos sábados, a fila de empréstimos dobrou. “Muita gente só tinha tempo no fim de semana”, contou a bibliotecária. Agora, o desafio é conseguir mais voluntários para os plantões.`,
 qz:[
  ['De acordo com o texto, pode-se inferir que:', ['muitas pessoas não conseguiam ir à biblioteca durante a semana.','os moradores do bairro não gostavam de ler antes.','a biblioteca vai fechar aos domingos.','os voluntários não querem mais trabalhar.'], 0, 'A fala da bibliotecária é a pista: “só tinha tempo no fim de semana”. As outras extrapolam o texto.'],
  ['“Marina <b>continua</b> morando em Santos.” Essa frase pressupõe que:', ['Marina vai se mudar.','Marina já morava em Santos antes.','Marina não gosta de Santos.','Marina mora sozinha.'], 1, '“Continua” só faz sentido se ela já morava lá.'],
  ['“O técnico <b>blindou</b> o time contra as críticas.” Nesse contexto, “blindou” significa:', ['protegeu','colocou armadura','criticou','escondeu'], 0, 'Sentido figurado: proteger, deixar os jogadores longe das críticas.']
 ]},

{id:'p-tira', mod:'P1', star:3, t:'Tirinhas, charges e memes: humor e ironia', bncc:'EF69LP05 · SAEB', saeb:['D5','D16'],
 hook:'Nesses textos, imagem e palavra trabalham juntas. O humor quase sempre nasce de uma <b>quebra de expectativa</b>.',
 body:`<p><b>Tirinha:</b> sequência curta de quadros; a graça costuma estar no <b>último</b>. <b>Charge:</b> crítica a um fato atual (política, cidade), muitas vezes com caricatura. <b>Cartum:</b> crítica a um comportamento, sem data. <b>Meme:</b> imagem conhecida reaproveitada com texto novo.</p>
<p><b>De onde vem o humor:</b> duplo sentido, interpretação literal de algo figurado, exagero, contraste entre o que se diz e o que a imagem mostra.</p>
<p><b>Ironia:</b> dizer o contrário do que se pensa, e o contexto mostra isso. Num dia de tempestade: “Que dia lindo para ir à praia!”.</p>
<p><b>Pistas visuais:</b> formato do balão (fala, pensamento, grito), expressão do rosto, onomatopeias, letras grandes, objetos no cenário.</p>`,
 rule:`Humor = expectativa × surpresa<br>Ironia = dito × contexto (sentido oposto)`,
 ex:[
  {q:'Tirinha: (1) A mãe pergunta: “Filho, arrumou o quarto?” (2) Ele responde: “Arrumei!” (3) A mãe abre o armário e uma avalanche de roupas cai em cima dela. Onde está o humor?', s:['O 3º quadro revela que “arrumar”, para o filho, foi só esconder a bagunça.'], r:'Na quebra de expectativa: o quarto parecia arrumado, mas a bagunça estava escondida no armário.'}
 ],
 trap:'Não descreva a imagem: interprete. A pergunta quer saber o <b>efeito</b> (crítica, humor, ironia), não só o que aparece.',
 qz:[
  ['Charge: dentro de uma sala de aula, alunos assistem à aula de guarda-chuva aberto, com goteiras caindo do teto. Na parede, uma placa: “Escola reformada — obra concluída”. A charge critica:', ['a falta de guarda-chuvas nas escolas.','a má qualidade ou o abandono de obras em escolas públicas.','os alunos que não prestam atenção.','o excesso de chuva na cidade.'], 1, 'O contraste entre a placa (“obra concluída”) e as goteiras revela a crítica.'],
  ['“Que ótimo! Meu celular descarregou bem na hora do jogo.” A palavra “ótimo” foi usada com sentido:', ['literal, mostrando alegria.','irônico, mostrando irritação.','técnico, sobre a bateria.','neutro, sem emoção.'], 1, 'O contexto (perder o jogo) mostra o sentido contrário: é ironia.'],
  ['Tirinha: (1) O professor pergunta: “Onde fica a Linha do Equador?” (2) Um aluno levanta a mão, confiante: “No mapa, professor!”. O humor vem de:', ['o aluno não saber o que é mapa.','o aluno responder de forma literal e inesperada.','o professor errar a pergunta.','a pergunta ser muito difícil.'], 1, 'O aluno dá uma resposta “certa”, mas não a esperada: quebra de expectativa.']
 ]},

{id:'p-arg', mod:'P1', star:3, t:'Texto argumentativo: tese, argumentos e contra-argumentos', bncc:'EF89LP04 · EF89LP14 · EF89LP23', saeb:['D7','D8','D21'],
 hook:'Todo texto de opinião defende uma ideia central (a <b>tese</b>) e tenta convencer o leitor com <b>argumentos</b>.',
 body:`<p><b>Tese:</b> o ponto de vista defendido. Costuma aparecer no começo ou ser retomada na conclusão (“Por isso…”, “Portanto…”).</p>
<p><b>Tipos de argumento:</b></p>
<ul><li><b>Dados e pesquisas</b> (números, estatísticas)</li><li><b>Autoridade</b> (fala de especialista ou instituição)</li><li><b>Exemplo</b> (caso concreto)</li><li><b>Causa e consequência</b></li><li><b>Comparação</b></li></ul>
<p><b>Contra-argumento:</b> o autor apresenta a opinião contrária para depois rebatê-la: “É verdade que…, <b>mas</b>…”. Isso é uma <b>concessão</b> seguida de <b>refutação</b>.</p>
<p><b>Gêneros:</b> artigo de opinião (assinado), editorial (opinião do jornal), carta do leitor, resenha crítica, comentário.</p>`,
 rule:`Tese = o que o autor defende<br>Argumento = por que o leitor deveria concordar<br>“É verdade que… mas…” = concessão + refutação`,
 ex:[],
 trap:'Cuidado com a alternativa que traz um <b>argumento</b> como se fosse a tese. A tese é a ideia que os argumentos sustentam.',
 txt:`<b>Celular na sala de aula: proibir é o caminho?</b><br>Muitos defendem que o celular ajuda na pesquisa. É verdade que ele pode ser útil, mas estudos mostram que um aluno interrompido por uma notificação leva vários minutos para recuperar a concentração. Além disso, escolas que restringiram o aparelho relatam mais conversa entre os alunos no recreio. Por isso, o celular deve ficar guardado durante as aulas e ser usado apenas quando o professor pedir.`,
 qz:[
  ['A tese defendida no texto é que:', ['o celular ajuda na pesquisa.','o celular deve ficar guardado nas aulas e ser usado só quando o professor pedir.','os alunos conversam mais no recreio.','as notificações atrapalham a concentração.'], 1, 'É a conclusão que todo o texto sustenta (“Por isso…”). As outras são argumentos ou a ideia contrária.'],
  ['O trecho “É verdade que ele pode ser útil, mas…” tem a função de:', ['apresentar a tese.','reconhecer a posição contrária para, em seguida, rebatê-la.','dar um exemplo pessoal.','encerrar o texto.'], 1, 'É uma concessão seguida de refutação: um contra-argumento.'],
  ['“Estudos mostram que um aluno interrompido leva vários minutos para recuperar a concentração” é um argumento baseado em:', ['autoridade de uma celebridade','pesquisa/evidência','experiência pessoal do autor','comparação histórica'], 1, 'O autor usa o resultado de estudos como prova.']
 ]},

{id:'p-pub', mod:'P1', star:3, t:'Publicidade, propaganda e persuasão', bncc:'EF69LP02 · EF69LP04', saeb:['D5','D12','D18'],
 hook:'Anúncios querem que você <b>faça</b> algo: compre, doe, mude um hábito. Toda escolha de palavra e imagem serve a isso.',
 body:`<p><b>Publicidade</b> vende produtos e marcas. <b>Propaganda</b> (ou campanha) divulga ideias e causas: vacinação, doação de sangue, trânsito seguro.</p>
<p><b>Recursos de persuasão:</b></p>
<ul><li>Verbos no <b>imperativo</b> (“Experimente”, “Doe”, “Corra!”) → chamam à ação;</li><li>Falar diretamente com o leitor (“você”), linguagem próxima;</li><li><b>Slogan</b> curto e fácil de lembrar, rimas, trocadilhos e duplo sentido;</li><li>Apelo à emoção (família, medo, alegria) ou à <b>autoridade</b> (especialista, celebridade);</li><li>Urgência e exclusividade (“só hoje”, “últimas unidades”);</li><li>Imagem, cores e tipo de letra que reforçam a mensagem.</li></ul>
<p>Pergunte sempre: <b>qual é a finalidade</b> do texto e <b>para quem</b> ele foi feito?</p>`,
 rule:`Finalidade: vender (publicidade) ou conscientizar (campanha)<br>Imperativo + emoção + slogan = persuasão`,
 ex:[
  {q:'“Doe sangue. Doe vida.” Que recursos aparecem?', s:['Verbo no imperativo (“Doe”), repetido.','Paralelismo: sangue = vida (doar sangue salva vidas).'], r:'Imperativo e repetição/paralelismo, ligando o gesto de doar ao valor da vida.'}
 ],
 trap:'Não confunda o <b>produto</b> com a <b>finalidade</b>: numa campanha contra a dengue, o objetivo não é vender repelente, é mudar comportamento.',
 qz:[
  ['“Sabonete Pureza: o preferido de 9 entre 10 dermatologistas.” O principal recurso de persuasão é:', ['o humor','o apelo à autoridade','a ironia','a rima'], 1, 'Dermatologistas são especialistas: usar a opinião deles é argumento de autoridade.'],
  ['Campanha: “Na estrada, o celular pode esperar. A sua vida, não.” A finalidade do texto é:', ['vender celulares.','conscientizar motoristas a não usarem o celular ao dirigir.','divulgar uma estrada nova.','ensinar a usar o celular.'], 1, 'É uma campanha de conscientização; o contraste “pode esperar / não” reforça a mensagem.'],
  ['Em “Corra! Últimos dias de promoção!”, o verbo no imperativo e a expressão “últimos dias” buscam:', ['informar o horário da loja.','criar urgência para o consumidor agir logo.','criticar a loja.','mostrar a opinião de um especialista.'], 1, 'Imperativo + prazo curto = sensação de urgência.']
 ]},

{id:'p-gen', mod:'P1', star:2, t:'Gêneros jornalísticos e fato × opinião', bncc:'EF69LP03 · EF69LP16 · EF89LP03', saeb:['D12','D14','D20'],
 hook:'Fato pode ser verificado. Opinião é julgamento. Essa diferença cai muito.',
 body:`<p><b>Notícia:</b> relata um fato recente, de forma objetiva, em 3ª pessoa. Começa pelo <b>lide</b>, o 1º parágrafo, que responde: <b>o quê, quem, quando, onde, como e por quê</b>. A manchete resume o fato.</p>
<p><b>Reportagem:</b> aprofunda um tema, com entrevistas, dados e mais de um ponto de vista.</p>
<p><b>Artigo de opinião</b> (assinado por alguém) e <b>editorial</b> (opinião do próprio jornal, sem assinatura individual) defendem pontos de vista.</p>
<p><b>Crônica:</b> parte de um fato do dia a dia com olhar pessoal, leve, às vezes com humor.</p>
<p><b>Fato × opinião:</b> “A ciclovia tem 5 km” é fato. “A ciclovia é a melhor obra da cidade” é opinião. Pistas de opinião: adjetivos de avaliação (ótimo, péssimo, absurdo), “acho”, “deveria”, “infelizmente”.</p>
<p>Dois textos sobre o mesmo fato podem dar <b>enfoques diferentes</b>: a escolha das palavras e das fontes revela a posição de cada um.</p>`,
 rule:`Lide: o quê, quem, quando, onde, como, por quê<br>Fato = verificável · Opinião = julgamento`,
 ex:[],
 trap:'Uma notícia pode citar a opinião de alguém entre aspas e continuar sendo notícia: a opinião é do entrevistado, não do jornalista.',
 txt:`<b>Notícia:</b> Um incêndio atingiu, na madrugada desta terça-feira, um galpão de materiais recicláveis na zona norte de Belém. Segundo os bombeiros, ninguém ficou ferido.`,
 qz:[
  ['Qual destas frases expressa uma <b>opinião</b>?', ['A prefeitura inaugurou ontem uma ciclovia de 5 km.','A ciclovia liga o centro ao bairro Jardim.','A nova ciclovia é a melhor obra da cidade.','A obra custou R$ 2 milhões.'], 2, '“A melhor obra” é um julgamento; as outras podem ser verificadas.'],
  ['No trecho de notícia acima, qual pergunta do lide <b>não</b> é respondida?', ['O quê?','Onde?','Quando?','Por quê?'], 3, 'O texto diz o que (incêndio), onde (zona norte de Belém) e quando (madrugada de terça), mas não a causa.'],
  ['O gênero que expressa a opinião do próprio jornal, sem assinatura de um autor específico, é:', ['a notícia','a reportagem','o editorial','a crônica'], 2, 'Editorial = voz do veículo.']
 ]},

{id:'p-fake', mod:'P1', star:2, t:'Fake news: como reconhecer', bncc:'EF09LP01 · EF89LP01', saeb:['D12','D20'],
 hook:'Antes de acreditar ou compartilhar, faça o “checklist do detetive”.',
 body:`<p><b>Sinais de alerta:</b></p>
<ul><li><b>Fonte</b> desconhecida ou que imita um site famoso (endereço/URL estranho);</li><li><b>Autor</b> não identificado;</li><li><b>Data</b> antiga circulando como se fosse nova;</li><li>Manchete <b>sensacionalista</b>, CAIXA ALTA, muitos “!!!”;</li><li>Pede para compartilhar com urgência (“antes que apaguem”);</li><li>Não cita dados, documentos ou especialistas que possam ser conferidos;</li><li>Foto ou vídeo fora do contexto original.</li></ul>
<p><b>O que fazer:</b> procurar a mesma informação em veículos confiáveis, consultar agências de checagem e verificar a data e a origem da imagem.</p>
<p>Atenção: <b>sátira</b> (texto de humor que inventa notícias de propósito) não é fake news, desde que o leitor saiba que é humor.</p>`,
 rule:`Fonte · autor · data · URL · tom · provas<br>Na dúvida, não compartilhe: confira`,
 ex:[],
 trap:'Uma notícia verdadeira, mas antiga, compartilhada como se fosse de hoje, também desinforma (descontextualização).',
 qz:[
  ['Qual mensagem tem mais sinais de ser falsa?', ['“Ministério da Saúde divulga calendário de vacinação de 2026”, com link para o site oficial.','“URGENTE!!! COMPARTILHE ANTES QUE APAGUEM: cientistas escondem a cura do resfriado!”','“Estudo de universidade aponta aumento no uso de bicicletas”, com nome dos pesquisadores.','“Prefeitura anuncia obras na avenida principal”, publicada no jornal da cidade.'], 1, 'Sensacionalismo, pedido de compartilhamento urgente e ausência de fonte.'],
  ['Diante de uma notícia surpreendente no grupo da família, a atitude mais adequada é:', ['compartilhar logo, para avisar todos.','conferir em fontes confiáveis e checar a data antes de compartilhar.','acreditar, se tiver muitos compartilhamentos.','responder com uma opinião sobre o tema.'], 1, 'Verificar antes de compartilhar.'],
  ['Uma reportagem verdadeira de 2019 volta a circular hoje como se fosse recente. O problema é:', ['a falta de imagens.','a descontextualização (data e contexto errados).','o tamanho do texto.','a linguagem formal.'], 1, 'Mesmo verdadeira, fora de contexto ela engana.']
 ]},

{id:'p-lit', mod:'P1', star:2, t:'Narrativa e poema: elementos e foco narrativo', bncc:'EF69LP47 · EF69LP48 · EF89LP05', saeb:['D10','D11'],
 hook:'Quem conta a história? O que dispara o problema? Como as falas aparecem? Essas são as perguntas clássicas sobre narrativas.',
 body:`<p><b>Elementos da narrativa:</b> narrador, personagens, tempo, espaço e enredo.</p>
<p><b>Enredo:</b> situação inicial → <b>conflito</b> (o problema que move a história) → clímax (momento de maior tensão) → desfecho.</p>
<p><b>Foco narrativo:</b></p>
<ul><li><b>1ª pessoa:</b> narrador-personagem (“Eu nunca tinha visto o mar…”).</li><li><b>3ª pessoa:</b> narrador observador (conta de fora) ou onisciente (sabe o que os personagens pensam).</li></ul>
<p><b>Discurso direto:</b> a fala do personagem aparece como foi dita, com travessão ou aspas. <b>Indireto:</b> o narrador reconta (“Ana disse <b>que</b> chegaria tarde”). <b>Indireto livre:</b> o pensamento do personagem se mistura à voz do narrador, sem aviso.</p>
<p><b>Poema:</b> versos e estrofes, rima, ritmo e o <b>eu lírico</b> (a “voz” do poema, que não é necessariamente o autor). Atenção à forma visual nos poemas concretos.</p>`,
 rule:`Conflito = o problema que move a história<br>Direto: — Vou chegar tarde. · Indireto: disse que chegaria tarde`,
 ex:[
  {q:'Passe para o discurso indireto: Ana disse: “Vou chegar tarde.”', s:['Tire as aspas, use “que” e ajuste o tempo verbal (vou chegar → chegaria).'], r:'Ana disse que chegaria tarde.'}
 ],
 trap:'No discurso indireto, o verbo e os pronomes mudam: “eu vou” vira “ela iria/chegaria”; “amanhã” pode virar “no dia seguinte”.',
 txt:`<b>Miniconto:</b> Tião guardou moedas por oito meses para comprar a bicicleta. Na véspera da compra, o cofrinho sumiu da prateleira. Revirou a casa inteira até encontrar o irmão caçula, todo orgulhoso, “alimentando” o porquinho de barro com balas.`,
 qz:[
  ['O conflito gerador do miniconto é:', ['Tião guardar dinheiro por oito meses.','o sumiço do cofrinho na véspera da compra.','o irmão gostar de balas.','a bicicleta ser cara.'], 1, 'É o problema que dispara a ação (a busca).'],
  ['“Eu nunca tinha visto o mar até aquela manhã.” O foco narrativo é:', ['3ª pessoa, narrador observador','1ª pessoa, narrador-personagem','3ª pessoa, narrador onisciente','não há narrador'], 1, 'O narrador fala de si mesmo (“eu”) e participa da história.'],
  ['Qual frase está em discurso indireto?', ['— Eu vou junto! — gritou Léo.','Léo gritou: “Eu vou junto!”','Léo gritou que iria junto.','Eu vou junto, pensou Léo.'], 2, 'O narrador reconta a fala usando “que” e muda o tempo verbal.']
 ]},

{id:'p-inter', mod:'P1', star:2, t:'Intertextualidade: paródia, paráfrase e alusão', bncc:'EF89LP32', saeb:['D20'],
 hook:'Textos conversam com outros textos. Reconhecer a “referência” é metade da interpretação, principalmente em anúncios e memes.',
 body:`<p><b>Paródia:</b> imita um texto conhecido mudando o sentido, geralmente para criticar ou fazer humor.</p>
<p><b>Paráfrase:</b> reescreve com outras palavras, <b>mantendo</b> o sentido original.</p>
<p><b>Citação:</b> reproduz o trecho entre aspas, indicando o autor. <b>Alusão ou referência:</b> só lembra o outro texto, sem copiar. <b>Epígrafe:</b> trecho de outro autor no início de uma obra.</p>
<p>Exemplo de texto muito parodiado (domínio público, Gonçalves Dias, 1843): “Minha terra tem palmeiras, / Onde canta o Sabiá”.</p>`,
 rule:`Paródia = imita e muda o sentido · Paráfrase = mesmo sentido, outras palavras`,
 ex:[],
 trap:'Para identificar paródia, compare o <b>sentido</b>: se o novo texto critica ou brinca com o original, é paródia, não paráfrase.',
 txt:`<b>Versinho:</b> “Minha terra tem engarrafamentos, / onde buzina o caminhão; / os carros que aqui avançam / não avançam como lá não.”`,
 qz:[
  ['O versinho acima dialoga com a “Canção do Exílio”, de Gonçalves Dias. Esse diálogo é uma:', ['paráfrase, porque mantém o sentido original.','paródia, porque imita o original para criticar o trânsito.','citação, porque copia o poema entre aspas.','epígrafe, porque aparece no início de um livro.'], 1, 'Mantém a estrutura do poema, mas muda o sentido para criticar o trânsito.'],
  ['Um anúncio diz: “Ser ou não ser cliente? Eis a questão.” Ele faz referência a:', ['um ditado popular sem autor','uma fala famosa da peça Hamlet, de Shakespeare','uma notícia de jornal','uma propaganda antiga da própria empresa'], 1, 'É uma alusão a “Ser ou não ser, eis a questão”, de Hamlet.'],
  ['Reescrever um texto com outras palavras, mantendo seu sentido, é fazer uma:', ['paródia','paráfrase','charge','ironia'], 1, 'Paráfrase preserva o sentido.']
 ]},

/* ============ P2 · SENTIDO E COESÃO ============ */
{id:'p-conj', mod:'P2', star:3, t:'Conjunções e relações de sentido', bncc:'EF09LP08 · EF09LP11', saeb:['D15','D11'],
 hook:'É a questão mais previsível da prova: “a conjunção destacada estabelece relação de…” ou “pode ser substituída, sem mudar o sentido, por…”.',
 body:`<table class="tb"><tr><th>Relação</th><th>Conectivos</th></tr>
<tr><td>Adição</td><td>e, nem, não só… mas também, além disso</td></tr>
<tr><td>Oposição (adversativa)</td><td>mas, porém, contudo, todavia, entretanto, no entanto</td></tr>
<tr><td>Concessão</td><td>embora, ainda que, mesmo que, apesar de (que), se bem que</td></tr>
<tr><td>Causa</td><td>porque, pois (no início da oração), já que, visto que, uma vez que, como (no início)</td></tr>
<tr><td>Consequência</td><td>tão… que, tanto… que, de modo que, de forma que</td></tr>
<tr><td>Conclusão</td><td>logo, portanto, por isso, assim, pois (deslocado, depois de um termo da oração, entre vírgulas)</td></tr>
<tr><td>Condição</td><td>se, caso, desde que, contanto que</td></tr>
<tr><td>Finalidade</td><td>para que, a fim de que, para (+ infinitivo)</td></tr>
<tr><td>Tempo</td><td>quando, enquanto, assim que, logo que, depois que</td></tr>
<tr><td>Conformidade</td><td>conforme, segundo, como (= conforme)</td></tr>
<tr><td>Proporção</td><td>à medida que, à proporção que, quanto mais… mais</td></tr>
<tr><td>Comparação</td><td>como, mais… (do) que, menos… (do) que</td></tr>
<tr><td>Alternância</td><td>ou… ou, ora… ora, seja… seja</td></tr></table>
<p><b>Oposição × concessão:</b> as duas mostram ideias contrárias. Na concessão, o obstáculo é admitido mas <b>não impede</b> o resultado, e o verbo costuma ir para o subjuntivo: “<b>Embora estivesse</b> cansado, terminou a corrida” = “Estava cansado, <b>mas</b> terminou a corrida”.</p>`,
 rule:`mas = porém = contudo = no entanto<br>embora = ainda que = mesmo que (+ subjuntivo)<br>portanto = logo = por isso`,
 ex:[
  {q:'Reescreva sem mudar o sentido: “Estudou muito, mas não passou.”', s:['Oposição → pode virar concessão, ajustando o verbo.'], r:'“Embora tenha estudado muito, não passou.”'}
 ],
 trap:'“Pois” muda de sentido pela posição: “Saí cedo, <b>pois</b> tinha prova” (causa) × “Choveu; o jogo foi, <b>pois</b>, adiado” (conclusão). E “mas” (oposição) ≠ “mais” (quantidade).',
 qz:[
  ['“<b>Embora</b> estivesse cansado, Léo terminou a corrida.” A relação é de:', ['causa','concessão','conclusão','condição'], 1, 'O cansaço é admitido, mas não impede que ele termine: concessão.'],
  ['“O time jogou bem; <b>porém</b>, perdeu.” Sem mudar o sentido, “porém” pode ser trocado por:', ['portanto','contudo','porque','quando'], 1, 'Porém = contudo (oposição).'],
  ['“Choveu muito; o jogo foi, <b>pois</b>, adiado.” Aqui, “pois” indica:', ['causa','conclusão','tempo','finalidade'], 1, 'Deslocado para o meio da oração e entre vírgulas, “pois” = portanto (conclusão).'],
  ['“<b>Caso</b> você chegue cedo, me avise.” A conjunção expressa:', ['condição','concessão','consequência','proporção'], 0, 'Caso = se (condição).']
 ]},

{id:'p-coes', mod:'P2', star:3, t:'Coesão referencial: quem é quem no texto', bncc:'EF89LP29', saeb:['D2'],
 hook:'Para não repetir palavras, o texto usa pronomes, sinônimos e outras expressões. A prova pergunta: <b>a que termo isso se refere?</b>',
 body:`<p><b>Retomar sem repetir:</b></p>
<ul><li>Pronomes: ele, ela, o, a, lhe, isso, este, esse, aquele…</li><li>Sinônimos e expressões: “Neymar… o atacante… o craque…”</li><li>Hiperônimos (palavra mais geral): “o cachorro… o animal”</li><li>Elipse (omitir): “Rafa chegou cedo. Ø Trouxe bolo.”</li></ul>
<p><b>Pronomes relativos</b> (retomam um termo anterior e iniciam uma oração):</p>
<ul><li><b>que</b>: pessoas e coisas — “o livro <b>que</b> li”;</li><li><b>quem</b>: pessoas, geralmente com preposição — “a amiga <b>de quem</b> falei”;</li><li><b>cujo(a)</b>: posse, sem artigo depois — “o autor <b>cujo</b> livro li” (nunca “cujo o”);</li><li><b>onde</b>: só para <b>lugar físico</b> — “a cidade <b>onde</b> nasci”.</li></ul>
<p><b>Este × esse:</b> “este” anuncia o que vem; “esse” retoma o que já foi dito.</p>`,
 rule:`Volte ao texto e teste: troque o pronome pelo termo candidato<br>onde = lugar · cujo = posse (sem artigo)`,
 ex:[],
 trap:'Frases como “Pedro avisou ao pai que <b>ele</b> estava atrasado” são <b>ambíguas</b>: “ele” pode ser Pedro ou o pai.',
 qz:[
  ['“O Brasil tem a maior floresta tropical do mundo. <b>Ela</b> abriga milhares de espécies.” O pronome “Ela” retoma:', ['o Brasil','a maior floresta tropical do mundo','o mundo','as espécies'], 1, 'Quem abriga as espécies é a floresta.'],
  ['Em qual frase o pronome “cujo” está de acordo com a norma-padrão?', ['Conheci a menina cujo o pai é piloto.','Conheci a menina cujo pai é piloto.','Conheci a menina que o pai dela é piloto.','Conheci a menina onde o pai é piloto.'], 1, '“Cujo” indica posse e não vem seguido de artigo.'],
  ['Em qual frase “onde” está empregado de acordo com a norma-padrão?', ['Foi uma reunião onde todos discordaram.','A cidade onde nasci fica no Pará.','Chegou o momento onde tudo mudou.','É um livro onde há muitos erros.'], 1, '“Onde” deve indicar lugar físico. Nas outras, o adequado é “em que” ou “na qual”.']
 ]},

{id:'p-fig', mod:'P2', star:3, t:'Figuras de linguagem', bncc:'EF89LP37 · EF69LP48', saeb:['D18'],
 hook:'Recursos que dão força, beleza ou humor ao texto. Conheça a “família” de cada uma.',
 body:`<table class="tb"><tr><th>Figura</th><th>O que faz</th><th>Exemplo</th></tr>
<tr><td>Comparação</td><td>aproxima dois seres <b>com conectivo</b></td><td>Ele é forte <b>como</b> um touro.</td></tr>
<tr><td>Metáfora</td><td>comparação <b>sem conectivo</b></td><td>Ele é um touro.</td></tr>
<tr><td>Metonímia</td><td>troca uma palavra por outra relacionada</td><td>Li Machado de Assis (a obra). Bebi dois copos (o conteúdo).</td></tr>
<tr><td>Personificação</td><td>dá ações humanas a coisas ou animais</td><td>O vento cochichava na janela.</td></tr>
<tr><td>Hipérbole</td><td>exagero</td><td>Já falei mil vezes!</td></tr>
<tr><td>Eufemismo</td><td>suaviza algo desagradável</td><td>Ele partiu desta para melhor.</td></tr>
<tr><td>Ironia</td><td>diz o contrário do que pensa</td><td>Que educado! Furou a fila.</td></tr>
<tr><td>Antítese</td><td>ideias opostas lado a lado</td><td>Entre risos e lágrimas.</td></tr>
<tr><td>Paradoxo</td><td>ideias opostas ao mesmo tempo (contradição aparente)</td><td>Um silêncio ensurdecedor.</td></tr>
<tr><td>Sinestesia</td><td>mistura sentidos</td><td>Uma voz doce.</td></tr>
<tr><td>Aliteração</td><td>repete sons consonantais</td><td>O rato roeu a roupa do rei de Roma.</td></tr>
<tr><td>Assonância</td><td>repete sons vocálicos</td><td>A arara clara cantava na mata.</td></tr>
<tr><td>Onomatopeia</td><td>imita sons</td><td>Tic-tac, toc-toc.</td></tr></table>`,
 rule:`com “como” = comparação · sem = metáfora<br>Opostos lado a lado = antítese · opostos fundidos = paradoxo`,
 ex:[],
 trap:'Antítese × paradoxo: “amor e ódio” (opostos lado a lado) é antítese; “amor é fogo que arde sem se ver” (Camões, domínio público: arder sem ser visto) é paradoxo, uma contradição aparente.',
 qz:[
  ['“As árvores <b>dançavam</b> com o vento.” A figura é:', ['hipérbole','personificação','metonímia','antítese'], 1, 'Dançar é ação humana atribuída às árvores.'],
  ['“Estou <b>morrendo de fome</b>.” A figura é:', ['eufemismo','hipérbole','ironia','paradoxo'], 1, 'Exagero intencional.'],
  ['“Seus olhos são duas estrelas.” A figura é:', ['comparação','metáfora','metonímia','sinestesia'], 1, 'Aproximação sem conectivo (“como”).'],
  ['“Estava com tanta sede que bebi dois <b>copos</b>.” Usar “copo” no lugar do líquido é:', ['metonímia','metáfora','hipérbole','aliteração'], 0, 'Troca do continente (copo) pelo conteúdo (o líquido).']
 ]},

{id:'p-sent', mod:'P2', star:2, t:'Denotação, conotação, polissemia e ambiguidade', bncc:'EF69LP05 · EF89LP06', saeb:['D3','D18'],
 hook:'A mesma palavra pode ter vários sentidos. O contexto decide qual vale.',
 body:`<p><b>Denotação:</b> sentido literal, de dicionário (“A <b>muralha</b> protegia o castelo”). <b>Conotação:</b> sentido figurado (“O goleiro foi uma <b>muralha</b>”).</p>
<p><b>Polissemia:</b> uma palavra, vários sentidos ligados: “pegar” ônibus, gripe, sol, o jeito.</p>
<p><b>Homônimos</b> (mesmo som, sentidos diferentes): sessão (de cinema), seção (setor), cessão (ato de ceder); concerto (música) × conserto (reparo).</p>
<p><b>Parônimos</b> (parecidos): comprimento (medida) × cumprimento (saudação) · descrição × discrição · tráfego (trânsito) × tráfico (comércio ilegal) · eminente (importante) × iminente (prestes a acontecer).</p>
<p><b>Ambiguidade:</b> duplo sentido. Pode ser defeito (frase mal construída) ou recurso intencional (humor, publicidade). “Encontrei o professor de bicicleta” → quem estava de bicicleta?</p>`,
 rule:`Literal = denotação · figurado = conotação<br>Ambiguidade: defeito ou recurso? Depende da intenção`,
 ex:[],
 trap:'Em anúncios e tirinhas, a ambiguidade costuma ser <b>proposital</b>. Na redação ou num texto informativo, é falha.',
 qz:[
  ['Em qual frase a palavra destacada está em sentido <b>conotativo</b>?', ['A <b>muralha</b> da cidade tem 800 anos.','Aquele zagueiro é uma <b>muralha</b>.','Construíram uma <b>muralha</b> de pedra.','A <b>muralha</b> cercava o castelo.'], 1, 'O zagueiro não é uma muralha de verdade: sentido figurado.'],
  ['Qual frase é ambígua?', ['A mãe pediu à filha que lavasse o carro dela.','A mãe lavou o próprio carro.','A filha lavou o carro da mãe.','O carro da mãe foi lavado.'], 0, '“Dela” pode ser da mãe ou da filha.'],
  ['Complete corretamente: “O ______ da piscina olímpica é de 50 metros.”', ['cumprimento','comprimento','conprimento','cumprimeto'], 1, 'Comprimento = medida. Cumprimento = saudação.']
 ]},

{id:'p-modal', mod:'P2', star:2, t:'Modalização e operadores argumentativos', bncc:'EF89LP16 · EF89LP31 · EF69LP18', saeb:['D15','D18'],
 hook:'Pequenas palavras revelam a posição do autor: certeza, dúvida, avaliação, força do argumento.',
 body:`<p><b>Modalizadores</b> mostram a atitude de quem escreve:</p>
<ul><li><b>Certeza:</b> certamente, sem dúvida, evidentemente, é claro que</li><li><b>Possibilidade/dúvida:</b> talvez, provavelmente, possivelmente, pode ser que</li><li><b>Obrigação:</b> é preciso, deve-se, é necessário</li><li><b>Avaliação:</b> felizmente, infelizmente, lamentavelmente, adjetivos como “absurdo”, “admirável”</li></ul>
<p><b>Operadores argumentativos:</b> “<b>até</b>” e “<b>inclusive</b>” (introduzem o argumento mais forte ou inesperado), “<b>ou seja</b>” e “<b>isto é</b>” (explicação), “<b>aliás</b>” (acréscimo), “<b>por exemplo</b>”, “<b>em primeiro lugar</b>”, “<b>por outro lado</b>”, “<b>apenas</b>/<b>só</b>” (restrição), “<b>afinal</b>” (conclusão).</p>
<p><b>Verbos que introduzem falas</b> também opinam: “afirmou” é neutro; “<b>alegou</b>” sugere que não está provado; “<b>admitiu</b>” sugere que era algo negativo; “<b>revelou</b>” sugere segredo.</p>`,
 rule:`talvez/provavelmente = dúvida · certamente = certeza<br>até = argumento mais forte · ou seja = explicação`,
 ex:[],
 trap:'Trocar “provavelmente” por “certamente” muda o sentido: de hipótese para certeza.',
 qz:[
  ['“<b>Infelizmente</b>, o parque será fechado para reforma.” A palavra destacada expressa:', ['tempo','avaliação negativa do autor','lugar','dúvida'], 1, 'Mostra que o autor lamenta o fato.'],
  ['“<b>Até</b> o goleiro fez gol no treino.” A palavra “até” indica que:', ['o goleiro sempre faz gols.','esse era o fato mais inesperado.','o treino acabou.','ninguém fez gol.'], 1, '“Até” introduz o caso mais surpreendente.'],
  ['Qual verbo mostra que o jornalista não assume como verdade a fala do suspeito?', ['O suspeito comprovou que estava em casa.','O suspeito alegou que estava em casa.','O suspeito demonstrou que estava em casa.','O suspeito provou que estava em casa.'], 1, '“Alegar” é dizer sem provar.']
 ]},

/* ============ P3 · GRAMÁTICA ============ */
{id:'p-per', mod:'P3', star:3, t:'Período composto: coordenação e subordinação', bncc:'EF09LP08 · EF09LP04', saeb:['D15'],
 hook:'Cada verbo (ou locução verbal) = uma oração. Se as orações são independentes, há <b>coordenação</b>; se uma depende da outra, <b>subordinação</b>.',
 body:`<p><b>Período simples:</b> uma oração (um verbo). <b>Composto:</b> duas ou mais.</p>
<p><b>Coordenadas</b> (independentes): sem conjunção, só vírgula (assindéticas) ou com conjunção (sindéticas): aditivas (e, nem), adversativas (mas, porém), alternativas (ou… ou), conclusivas (logo, portanto), explicativas (pois, porque).</p>
<p><b>Subordinadas</b> (dependem da principal):</p>
<ul><li><b>Substantivas:</b> funcionam como substantivo (sujeito, objeto…). “É importante <b>que você estude</b>.” “Espero <b>que venha</b>.”</li><li><b>Adjetivas:</b> caracterizam um nome, iniciadas por pronome relativo. “O livro <b>que comprei</b> é ótimo.”</li><li><b>Adverbiais:</b> dão uma circunstância: causa, tempo, condição, concessão, finalidade, consequência, comparação, conformidade, proporção.</li></ul>
<p><b>Reduzidas:</b> sem conjunção, com verbo no infinitivo, gerúndio ou particípio: “<b>Ao chegar</b>, liguei” = “Quando cheguei, liguei”.</p>`,
 rule:`Conte os verbos (locução verbal conta como um) → conte as orações<br>Independente = coordenada · depende = subordinada (substantiva, adjetiva, adverbial)`,
 ex:[],
 trap:'Na prova, a classificação vale menos que o <b>sentido</b>: saber que “quando” indica tempo e “embora” indica concessão resolve a maioria das questões.',
 qz:[
  ['“Estudei bastante, <b>por isso fui bem na prova</b>.” A oração destacada é:', ['coordenada conclusiva','coordenada adversativa','subordinada causal','subordinada temporal'], 0, '“Por isso” = conclusão; as orações são independentes.'],
  ['“<b>Quando o sinal tocou</b>, todos saíram.” A oração destacada indica:', ['causa','tempo','condição','finalidade'], 1, '“Quando” introduz uma circunstância de tempo (subordinada adverbial temporal).'],
  ['“Espero <b>que você venha</b>.” A oração destacada é:', ['subordinada adjetiva','subordinada substantiva','subordinada adverbial causal','coordenada aditiva'], 1, 'Funciona como objeto de “espero” (espero isto): substantiva.']
 ]},

{id:'p-adj', mod:'P3', star:3, t:'Orações adjetivas restritivas e explicativas', bncc:'EF09LP09', saeb:['D17','D19'],
 hook:'Uma vírgula muda tudo: “os alunos que estudaram” não é o mesmo que “os alunos, que estudaram,”.',
 body:`<p>As orações adjetivas começam com pronome relativo (que, o qual, onde, cujo…) e caracterizam um nome.</p>
<p><b>Restritiva</b> (sem vírgula): <b>restringe</b>, separa uma parte do grupo. “Os alunos <b>que estudaram</b> passaram.” → só os que estudaram passaram; outros não.</p>
<p><b>Explicativa</b> (entre vírgulas): acrescenta uma informação sobre <b>todo</b> o grupo e pode ser retirada sem mudar o sujeito. “Os alunos, <b>que estudaram</b>, passaram.” → todos estudaram e todos passaram.</p>
<p>Com nomes únicos, a explicativa é obrigatória: “O Sol, <b>que é uma estrela</b>, ilumina a Terra.”</p>`,
 rule:`Sem vírgula = restritiva (só uma parte)<br>Com vírgulas = explicativa (todos; informação extra)`,
 ex:[
  {q:'Qual a diferença de sentido? (a) “Meu irmão que mora em Recife vem me visitar.” (b) “Meu irmão, que mora em Recife, vem me visitar.”', s:['(a) Restritiva: separa um irmão entre outros → tenho mais de um irmão.','(b) Explicativa: só acrescenta onde ele mora → posso ter um irmão só.'], r:'Em (a), há mais de um irmão; em (b), a vírgula indica que é o único (ou que a informação é só extra).'}
 ],
 trap:'Não é questão de “gramática decorada”: a prova pede o <b>efeito de sentido</b> da vírgula.',
 qz:[
  ['“Os jogadores <b>que estavam machucados</b> não viajaram.” A frase indica que:', ['nenhum jogador viajou.','somente os jogadores machucados não viajaram.','todos os jogadores estavam machucados.','os machucados viajaram.'], 1, 'Restritiva: separa um grupo dentro do time.'],
  ['Qual frase está pontuada corretamente?', ['O Sol que é uma estrela ilumina a Terra.','O Sol, que é uma estrela, ilumina a Terra.','O Sol, que é uma estrela ilumina a Terra.','O Sol que é, uma estrela, ilumina a Terra.'], 1, 'Só existe um Sol: a oração é explicativa, entre vírgulas.'],
  ['“Os turistas, que estavam cansados, voltaram ao hotel.” Pela pontuação, entende-se que:', ['só alguns turistas estavam cansados.','todos os turistas estavam cansados e voltaram.','nenhum turista voltou.','os turistas cansados ficaram.'], 1, 'Explicativa: a informação vale para todos.']
 ]},

{id:'p-vl', mod:'P3', star:2, t:'Verbos de ligação e predicativo', bncc:'EF09LP05 · EF09LP06', saeb:['D18','D19'],
 hook:'Ser, estar, ficar, parecer, permanecer… ligam o sujeito a uma característica. E cada um muda o sentido.',
 body:`<p>O <b>verbo de ligação</b> não indica ação: liga o sujeito a um estado ou qualidade (o <b>predicativo do sujeito</b>).</p>
<ul><li><b>ser</b> → característica permanente/essencial: “Pedro <b>é</b> calmo.”</li><li><b>estar</b> → estado passageiro: “Pedro <b>está</b> calmo (hoje).”</li><li><b>ficar / tornar-se / virar</b> → mudança de estado: “O céu <b>ficou</b> escuro.”</li><li><b>parecer</b> → aparência: “Ana <b>parece</b> cansada.”</li><li><b>permanecer / continuar</b> → continuidade: “A loja <b>continua</b> fechada.”</li><li><b>andar</b> → estado frequente: “Ele <b>anda</b> preocupado.”</li></ul>
<p>O mesmo verbo pode ser de ação: “Ele <b>ficou</b> em casa” (lugar, não característica) · “Ana <b>anda</b> pela praça” (ação de andar).</p>`,
 rule:`Sujeito + verbo de ligação + característica (predicativo)<br>é = permanente · está = passageiro · ficou = mudou · parece = aparência`,
 ex:[],
 trap:'Para saber se é de ligação, veja o que vem depois: uma <b>característica</b> do sujeito (sim) ou um lugar/ação (não).',
 qz:[
  ['“O céu <b>ficou</b> escuro.” O verbo indica:', ['ação de ficar em um lugar','mudança de estado','aparência','característica permanente'], 1, 'O céu passou a estar escuro: mudança de estado.'],
  ['Em qual frase há verbo de ligação?', ['Ana anda pela praça.','Ana parece cansada.','Ana ficou em casa.','Ana está no colégio.'], 1, '“Cansada” é característica de Ana. Nas outras, há lugar ou ação.'],
  ['A diferença entre “Pedro <b>é</b> nervoso” e “Pedro <b>está</b> nervoso” é que:', ['não há diferença.','a 1ª indica característica permanente; a 2ª, estado passageiro.','a 1ª indica estado passageiro; a 2ª, permanente.','as duas indicam mudança de estado.'], 1, 'Ser = essência; estar = momento.']
 ]},

{id:'p-reg', mod:'P3', star:2, t:'Regência e crase', bncc:'EF09LP07', saeb:['D19'],
 hook:'Alguns verbos e nomes pedem preposição. Na fala do dia a dia isso muda, e a prova adora comparar o coloquial com a norma-padrão.',
 body:`<p><b>Regência verbal na norma-padrão:</b></p>
<ul><li><b>assistir a</b> (ver): “Assisti <b>ao</b> jogo.” (coloquial: “assisti o jogo”)</li><li><b>ir a / chegar a</b>: “Cheguei <b>à</b> escola.” (coloquial: “cheguei na escola”)</li><li><b>preferir algo a outra coisa</b>: “Prefiro suco <b>a</b> refrigerante.” (sem “mais” e sem “do que”)</li><li><b>obedecer a</b>, <b>simpatizar com</b>, <b>gostar de</b>, <b>morar em</b>, <b>namorar alguém</b> (sem “com”)</li><li><b>esquecer algo</b> ou <b>esquecer-se de algo</b>; <b>lembrar algo</b> ou <b>lembrar-se de algo</b></li></ul>
<p><b>Regência nominal:</b> acessível <b>a</b>, apto <b>a/para</b>, contrário <b>a</b>, orgulho <b>de</b>, respeito <b>a/por</b>.</p>
<p><b>Crase</b> = preposição <b>a</b> + artigo <b>a</b> = <b>à</b>. Truque: troque a palavra feminina por uma masculina. Se aparecer “<b>ao</b>”, tem crase: “Vou <b>à</b> feira” → “Vou <b>ao</b> mercado”.</p>
<p><b>Nunca há crase</b> antes de palavra masculina, de verbo (“começou a chover”) e da maioria dos pronomes (“a ela”, “a você”). Nas horas exatas: “às 10h” (mas “desde as 10h”, “após as 10h”).</p>`,
 rule:`assistir AO jogo · ir/chegar À escola · preferir X A Y<br>Crase: troque por masculino → deu “ao”? então é “à”`,
 ex:[],
 trap:'“Prefiro <b>mais</b> pizza <b>do que</b> lasanha” é comum na fala, mas a norma-padrão pede: “Prefiro pizza <b>a</b> lasanha”.',
 qz:[
  ['De acordo com a norma-padrão, qual frase está correta?', ['Assisti o filme ontem.','Assisti ao filme ontem.','Assisti no filme ontem.','Assisti do filme ontem.'], 1, 'No sentido de “ver”, assistir pede a preposição “a”.'],
  ['Qual frase segue a norma-padrão?', ['Prefiro mais suco do que refrigerante.','Prefiro suco do que refrigerante.','Prefiro suco a refrigerante.','Prefiro mais suco a refrigerante.'], 2, 'Preferir algo A outra coisa, sem “mais” e sem “do que”.'],
  ['Em qual frase o acento grave (crase) está correto?', ['Começou à chover.','Fui à feira comprar frutas.','Entreguei o livro à ele.','Saímos à pé.'], 1, '“Fui ao mercado” → “fui à feira”. Antes de verbo, masculino e “ele”, não há crase.']
 ]},

{id:'p-conc', mod:'P3', star:2, t:'Concordância verbal e nominal', bncc:'EF09LP04 · EF69LP56', saeb:['D19'],
 hook:'O verbo concorda com o sujeito; o adjetivo concorda com o substantivo. As pegadinhas estão nos casos especiais.',
 body:`<p><b>Verbal:</b> o verbo concorda com o sujeito em número e pessoa, mesmo quando o sujeito vem <b>depois</b>: “<b>Chegaram</b> os convidados.” “<b>Faltam</b> dois dias.”</p>
<ul><li><b>Haver</b> no sentido de existir é <b>impessoal</b> (fica no singular): “<b>Havia</b> muitas pessoas.” Mas “<b>Existiam</b> muitas pessoas.”</li><li><b>Fazer</b> indicando tempo: singular. “<b>Faz</b> dois anos.”</li><li>“A maioria dos alunos” aceita singular ou plural: “A maioria dos alunos <b>votou/votaram</b>.”</li><li>Sujeito composto antes do verbo → plural: “Ana e Léo <b>saíram</b>.”</li></ul>
<p><b>Nominal:</b> adjetivo concorda com o substantivo. Casos especiais:</p>
<ul><li><b>meio</b> como advérbio (= um pouco) não varia: “Ela ficou <b>meio</b> preocupada.” Como numeral varia: “<b>meia</b> hora”.</li><li><b>obrigado/obrigada</b> concorda com quem fala.</li><li>“É proibido entrada” (sem artigo) × “É proibid<b>a a</b> entrada” (com artigo).</li><li><b>anexo, incluso</b> concordam: “Seguem <b>anexas</b> as fotos.”</li></ul>`,
 rule:`Haver (existir) e fazer (tempo) → singular<br>Sujeito depois do verbo também concorda · meio (= um pouco) não varia`,
 ex:[],
 trap:'“Faltam dois dias” e “Sobraram três vagas”: o sujeito vem depois do verbo, mas o verbo vai para o plural.',
 qz:[
  ['De acordo com a norma-padrão, qual frase está correta?', ['Haviam muitos alunos no pátio.','Havia muitos alunos no pátio.','Houveram muitos alunos no pátio.','Hão muitos alunos no pátio.'], 1, 'Haver = existir → impessoal, no singular.'],
  ['Complete: “______ apenas dois dias para a prova.”', ['Falta','Faltam','Faltará','Faltou'], 1, 'Sujeito “dois dias” (plural), mesmo depois do verbo.'],
  ['Qual frase está de acordo com a norma-padrão?', ['Ela ficou meia preocupada.','Ela ficou meio preocupada.','Ela ficou meios preocupada.','Ela ficou meias preocupada.'], 1, '“Meio” = um pouco (advérbio): não varia.']
 ]},

{id:'p-col', mod:'P3', star:2, t:'Colocação pronominal', bncc:'EF09LP10', saeb:['D19','D13'],
 hook:'Onde vai o pronome oblíquo (me, te, se, o, a, lhe, nos)? Antes ou depois do verbo?',
 body:`<p><b>Próclise</b> (antes): “Não <b>me</b> deixe.” · <b>Ênclise</b> (depois, com hífen): “Diga-<b>me</b>.” · <b>Mesóclise</b> (no meio, rara): “Dir-<b>te</b>-ei.”</p>
<p><b>Na norma-padrão:</b></p>
<ul><li><b>Não se inicia frase com pronome oblíquo:</b> “Empreste-<b>me</b> o lápis” (padrão) × “<b>Me</b> empresta o lápis” (coloquial).</li><li><b>Palavras que “atraem” o pronome</b> pedem próclise: negativas (não, nunca, ninguém), advérbios (sempre, já, aqui), pronomes relativos (que), indefinidos (alguém, tudo), conjunções subordinativas (quando, se, porque). “Ninguém <b>me</b> avisou.” “Sempre <b>te</b> ajudo.”</li></ul>
<p><b>No português brasileiro falado</b>, a próclise é natural (“Me dá um minuto”). É adequada em situações informais; a prova costuma pedir para comparar com a norma-padrão.</p>`,
 rule:`Início de frase → ênclise (Diga-me)<br>Não, nunca, que, quando, sempre… → próclise (Não me diga)`,
 ex:[],
 trap:'“Não deixe-me sozinho” está errado na norma-padrão: o “não” atrai o pronome → “Não <b>me</b> deixe sozinho”.',
 qz:[
  ['De acordo com a norma-padrão, qual frase está correta?', ['Não deixe-me sozinho.','Não me deixe sozinho.','Não deixe sozinho-me.','Me não deixe sozinho.'], 1, 'O “não” atrai o pronome para antes do verbo.'],
  ['Qual frase segue a norma-padrão?', ['Me diga a verdade.','Diga-me a verdade.','Diga a verdade-me.','Me diga-me a verdade.'], 1, 'Não se começa frase com pronome oblíquo.'],
  ['Numa conversa entre amigos, alguém diz: “Me passa o sal?”. Essa construção é:', ['um erro grave em qualquer situação.','típica do português brasileiro informal e adequada ao contexto.','obrigatória em textos oficiais.','um exemplo de mesóclise.'], 1, 'Na fala informal brasileira, a próclise é natural. Adequação depende da situação.']
 ]},

{id:'p-pont', mod:'P3', star:2, t:'Pontuação e efeitos de sentido', bncc:'EF69LP56', saeb:['D17'],
 hook:'Uma vírgula pode salvar vidas: “Vamos comer, crianças!” × “Vamos comer crianças!”.',
 body:`<p><b>Vírgula — use para separar:</b> itens de uma enumeração; o <b>vocativo</b> (“Pedro, venha cá”); o <b>aposto</b> (“Belém, capital do Pará, …”); expressões deslocadas no início (“Ontem à noite, …”); orações coordenadas; orações explicativas.</p>
<p><b>Vírgula — nunca separe</b> o sujeito do verbo, nem o verbo do complemento: “Os alunos do 9º ano<s>,</s> viajaram.”</p>
<p><b>Outros sinais:</b></p>
<ul><li><b>Reticências (…):</b> hesitação, suspense, ideia interrompida, ironia.</li><li><b>Exclamação (!):</b> emoção, surpresa, ordem.</li><li><b>Dois-pontos (:)</b> anunciam explicação, enumeração ou fala.</li><li><b>Aspas (“ ”):</b> citação, ironia, palavra estrangeira ou sentido especial.</li><li><b>Travessão (—):</b> fala de personagem ou destaque.</li><li><b>Parênteses:</b> informação extra.</li></ul>`,
 rule:`Sujeito , verbo → <b>nunca</b><br>Vocativo e aposto explicativo → <b>sempre</b> com vírgula`,
 ex:[],
 trap:'“Não, espere!” (pede que a pessoa espere) × “Não espere!” (pede que a pessoa não espere). A vírgula inverte o sentido.',
 qz:[
  ['Qual frase está pontuada corretamente?', ['Os alunos do 9º ano, viajaram para Paraty.','Os alunos do 9º ano viajaram, para Paraty.','Os alunos do 9º ano viajaram para Paraty.','Os alunos, do 9º ano viajaram para Paraty.'], 2, 'Não se separa o sujeito do verbo nem o verbo do complemento.'],
  ['“Eu ia te contar… mas esquece.” As reticências indicam:', ['enumeração','hesitação/interrupção','citação','ordem'], 1, 'A pessoa começa, hesita e desiste.'],
  ['Em “Maria, traga o livro.”, a vírgula separa:', ['o sujeito do verbo','um vocativo','um aposto','uma enumeração'], 1, '“Maria” é com quem se fala: vocativo.']
 ]},

{id:'p-var', mod:'P3', star:2, t:'Variação linguística e preconceito linguístico', bncc:'EF69LP55', saeb:['D13'],
 hook:'Não existe português “certo” ou “errado” em absoluto: existe o <b>adequado</b> ou <b>inadequado</b> à situação.',
 body:`<p><b>Tipos de variação:</b></p>
<ul><li><b>Regional:</b> mandioca, aipim, macaxeira; sotaques; “tu” e “você”.</li><li><b>Social/etária:</b> gírias de jovens, linguagem de profissões (jargão).</li><li><b>Situacional:</b> formal × informal (conversa com amigos × entrevista de emprego).</li><li><b>Histórica:</b> a língua muda com o tempo: “vossa mercê” → “vosmecê” → “você” → “cê”; “pharmacia” → “farmácia”.</li></ul>
<p><b>Norma-padrão:</b> o modelo usado em situações formais (documentos, provas, notícias). Saber usá-la é importante, mas isso não torna as outras variedades “erradas”.</p>
<p><b>Preconceito linguístico:</b> discriminar alguém pelo jeito de falar (sotaque, origem, escolaridade).</p>
<p><b>Marcas de quem fala e para quem fala:</b> gírias, formas de tratamento (“Vossa Excelência”, “mano”), vocativos e regionalismos revelam locutor e interlocutor.</p>`,
 rule:`Variação: regional · social · situacional · histórica<br>Critério: adequação ao contexto`,
 ex:[],
 trap:'Questões costumam perguntar <b>que marca</b> do texto revela a variedade (uma gíria, um regionalismo, a forma de tratamento). Aponte a palavra.',
 qz:[
  ['“Mano, bora no rolê depois da aula?” Essa fala revela uma variedade:', ['formal, típica de documentos','informal, ligada à linguagem dos jovens','histórica, do século XIX','técnica, de uma profissão'], 1, '“Mano”, “bora”, “rolê” são marcas de linguagem jovem e informal.'],
  ['“Aipim”, “macaxeira” e “mandioca” nomeiam o mesmo alimento. Isso é um exemplo de variação:', ['histórica','regional','situacional','de registro formal'], 1, 'Cada região usa um nome.'],
  ['Qual atitude é um exemplo de preconceito linguístico?', ['Usar linguagem formal numa entrevista de emprego.','Rir do sotaque de um colega que veio de outro estado.','Explicar uma gíria a alguém mais velho.','Consultar o dicionário.'], 1, 'Discriminar alguém pelo jeito de falar.']
 ]},

{id:'p-form', mod:'P3', star:1, t:'Formação de palavras, estrangeirismos e acentuação', bncc:'EF09LP12 · EF08LP05', saeb:['D19'],
 hook:'Revisão rápida de detalhes que podem aparecer em uma ou duas questões.',
 body:`<p><b>Derivação</b> (a partir de uma palavra): prefixal (<b>in</b>feliz), sufixal (feliz<b>mente</b>), parassintética (prefixo e sufixo juntos: <b>en</b>tard<b>ecer</b>, <b>a</b>manh<b>ecer</b>), regressiva (combater → combate) e imprópria (muda a classe: “o <b>não</b>”, “o <b>jantar</b>”).</p>
<p><b>Composição</b> (junta palavras): justaposição (girassol, guarda-chuva) e aglutinação (planalto = plano + alto; embora = em boa hora).</p>
<p><b>Outros:</b> sigla (ONU), abreviação (moto, foto), hibridismo (auto + móvel), onomatopeia.</p>
<p><b>Estrangeirismos:</b> adaptados (futebol, abajur, estresse) ou não adaptados (show, delivery, mouse). Avalie se há palavra portuguesa equivalente (“entrega” para “delivery”).</p>
<p><b>Acentuação:</b> proparoxítonas — todas (lâmpada, matemática). Oxítonas terminadas em a(s), e(s), o(s), em, ens (sofá, cafés, avô, também). Paroxítonas terminadas em l, n, r, x, ps, ã, ão, i, us, um, ditongo (fácil, açúcar, órfão, júri, história). Pelo Acordo Ortográfico: <b>ideia, heroico, voo, leem</b> (sem acento).</p>`,
 rule:`Parassíntese = prefixo + sufixo ao mesmo tempo<br>Proparoxítona: sempre acentuada · ideia, heroico, voo: sem acento`,
 ex:[],
 trap:'“Infelizmente” tem prefixo e sufixo, mas existe “infeliz” e “felizmente” sozinhos: não é parassíntese. Em “entardecer”, não existe “entarde” nem “tardecer”.',
 qz:[
  ['A palavra “entardecer” é formada por:', ['composição por justaposição','derivação parassintética','derivação regressiva','aglutinação'], 1, 'Prefixo “en-” e sufixo “-ecer” entram juntos.'],
  ['Qual é um estrangeirismo já adaptado ao português?', ['delivery','show','futebol','mouse'], 2, 'Futebol vem do inglês “football”, com grafia aportuguesada.'],
  ['Segundo o Acordo Ortográfico em vigor, qual palavra está grafada corretamente?', ['idéia','heróico','ideia','vôo'], 2, 'Ditongos abertos “ei”, “oi” em paroxítonas perderam o acento; “voo” também.']
 ]}
];

/* Estratégia de prova (card de abertura) */
const ESTRATEGIA = {
 t:'Como é a prova e como atacar',
 body:`<ul>
<li><b>30 questões</b> de múltipla escolha: 15 de Português e 15 de Matemática.</li>
<li><b>3 horas</b> de prova (mínimo de 1 hora na sala) → cerca de <b>6 minutos por questão</b>. Tempo não é problema: atenção é.</li>
<li>Leve <b>RG original</b>. Não há revisão de prova.</li>
</ul>
<p><b>Estratégia:</b></p>
<ol>
<li>Faça uma 1ª passada resolvendo as questões que você domina.</li>
<li>Marque com um sinal as dúvidas e volte depois.</li>
<li>Em Português, <b>leia a pergunta antes do texto</b> e volte ao texto para justificar.</li>
<li>Em Matemática, <b>sublinhe o que o problema pede</b> e confira se a resposta faz sentido (idade negativa? 300% de desconto?).</li>
<li><b>Elimine alternativas</b> absurdas: mesmo na dúvida, a chance sobe.</li>
<li>Guarde 10 minutos finais para passar tudo ao gabarito com calma.</li>
</ol>`
};

/* Macetes (mnemônicos) por tópico — aparecem na Revisão e no Treino */
const MACETES = {
/* Matemática */
'm-pct':`<b>“Fator é rei.”</b> Aumento: soma ao 100 (+15% → ×1,15). Desconto: tira do 100 (−15% → ×0,85). Vários seguidos? <b>Multiplica, nunca soma.</b>`,
'm-frac':`Dividir fração é <b>“MIM”</b>: <b>M</b>antém a primeira, <b>I</b>nverte a segunda, <b>M</b>ultiplica.`,
'm-reais':`<b>Irracional é “irritante”</b>: nunca acaba e nunca se repete (√2, √3, π). Se a raiz é exata (√9 = 3), é racional.`,
'm-pot':`Expoente <b>negativo vira de cabeça para baixo</b> (2<sup>−3</sup> = [[1|8]]), não fica negativo. No expoente fracionário, <b>“quem está embaixo mora na raiz”</b>: 8<sup>2/3</sup> = (∛8)² = 4.`,
'm-cient':`<b>Número grande, expoente positivo; número miudinho, expoente negativo.</b> Conte quantas casas a vírgula andou até sobrar um só algarismo antes dela.`,
'm-mmc':`<b>MMC = “Mais à frente eles se encontram”</b> (é maior que os números). <b>MDC = “Divide em pedaços”</b> (é menor que os números).`,
'm-eq1':`<b>“Mudou de lado, muda de operação.”</b> Somando vira subtraindo; multiplicando vira dividindo.`,
'm-sist':`<b>“Duas letras, duas equações”:</b> uma para a <b>quantidade</b>, outra para o <b>valor</b> (rodas, pontos, reais).`,
'm-prod':`(a + b)² = <b>“quadrado do 1º, duas vezes o 1º pelo 2º, quadrado do 2º”</b>. E <b>soma vezes diferença dá diferença dos quadrados</b>: (a + b)(a − b) = a² − b².`,
'm-eq2':`Δ = <b>“bê-dois menos quatro-a-cê”</b>. Δ positivo: duas raízes; Δ zero: uma; Δ negativo: <b>nenhuma real</b> (não existe raiz de número negativo).`,
'm-prop':`<b>Sobe-sobe = direta; sobe-desce = inversa.</b> Mais pedreiros → menos dias? Inversa: multiplica em linha (6 × 10 = 4 × x).`,
'm-func':`Em y = ax + b: <b>a = “anda”</b> (quanto sobe a cada passo) e <b>b = “base”</b> (onde começa, quando x = 0).`,
'm-seq':`<b>Do 1º ao 20º são só 19 pulos</b>: a<sub>n</sub> = a<sub>1</sub> + (n − 1)·r.`,
'm-ang':`Com paralelas, procure as letras: <b>“Z” = alternos</b> (iguais), <b>“F” = correspondentes</b> (iguais), <b>“U” = colaterais</b> (somam 180°).`,
'm-pol':`Todo polígono de n lados vira <b>(n − 2) triângulos</b> → soma = (n − 2)·180°. Os ângulos <b>externos sempre somam 360°</b>, a volta completa.`,
'm-sem':`Semelhança: <b>“AA já basta”</b> (dois ângulos iguais). Lados ×k, perímetro ×k, <b>área ×k²</b>.`,
'm-pit':`<b>A hipotenusa é a chefe:</b> é o maior lado e fica sozinha do lado do “=”. Ternos para decorar como telefone: <b>3-4-5, 5-12-13, 8-15-17</b>.`,
'm-circ':`O inscrito está <b>na borda, longe do centro: enxerga só a metade</b> do que o central enxerga.`,
'm-cart':`<b>Primeiro corre, depois pula</b>: (x, y) = anda na horizontal, depois sobe ou desce.`,
'm-area':`<b>Triângulo é meio retângulo</b> ([[b·h|2]]). Círculo: <b>“pi-erre-dois” é área</b> (πr²); <b>“dois-pi-erre” é a volta</b> (2πr).`,
'm-vol':`<b>Volume = área da base × altura</b> (imagine pilhas de folhas). <b>1 dm³ = 1 litro</b>: uma caixinha de 10 cm × 10 cm × 10 cm é uma caixa de leite.`,
'm-unid':`Escada <b>km · hm · dam · m · dm · cm · mm</b>. Por degrau: <b>1 zero</b> no comprimento, <b>2 zeros</b> na área, <b>3 zeros</b> no volume. Hora é base 60: 0,5 h = 30 min.`,
'm-graf':`<b>Pizza = parte do todo. Linha = tempo. Coluna = comparar.</b> E sempre pergunte: o eixo começa no zero?`,
'm-media':`<b>MéDia → Divide</b> a soma. <b>MOda → a que está na MOda</b> (mais aparece). <b>MEDiana → a do MEio</b> (depois de ordenar).`,
'm-prob':`<b>P = [[o que eu quero|tudo o que pode acontecer]]</b>. “E” multiplica. Sem reposição, <b>tira uma do total</b>.`,
'm-cont':`<b>Um tracinho por etapa</b>, escreva as opções em cada tracinho e multiplique. Se a ordem não importa (duplas, apertos de mão), divida.`,
/* Português */
'p-impl':`<b>Pressuposto vem “de brinde” numa palavra:</b> parou de, continua, voltou a, ainda, de novo, finalmente.`,
'p-tira':`<b>A graça mora no último quadro.</b> Ironia = <b>fala × situação</b> apontando para lados opostos.`,
'p-arg':`<b>Tese = O QUE o autor defende. Argumento = POR QUE eu deveria concordar.</b> “É verdade que… mas…” = cede um pouco e rebate.`,
'p-pub':`<b>PUBlicidade vende PRODUTO; PROPaganda PROPõe uma ideia.</b> Imperativo + emoção + slogan = persuasão.`,
'p-gen':`Lide responde às <b>6 perguntas: QUÊ, QUEM, QUANDO, ONDE, COMO, POR QUÊ</b>. Fato dá para conferir; opinião é julgamento.`,
'p-fake':`Antes de compartilhar, faça o <b>FADUT</b>: <b>F</b>onte, <b>A</b>utor, <b>D</b>ata, <b>U</b>RL, <b>T</b>om (sensacionalista?).`,
'p-lit':`<b>Direto = diálogo</b> (travessão ou aspas). <b>Indireto = “disse que…”</b>. Conflito = o problema que faz a história andar.`,
'p-inter':`<b>Pa-RÓ-dia faz RIr</b> (ou critica: muda o sentido). <b>Pa-RÁ-frase REpete</b> o sentido com outras palavras.`,
'p-conj':`Adversativas no ritmo de canto: <b>“MAS, PORÉM, CONTUDO, TODAVIA, ENTRETANTO, NO ENTANTO”</b>. Concessivas: <b>“EMBORA, AINDA QUE, MESMO QUE”</b> pedem subjuntivo. Conclusivas: <b>“LOGO, PORTANTO, POR ISSO”</b>.`,
'p-coes':`<b>Onde só se pisa:</b> use “onde” apenas para lugar físico. <b>Cujo não anda com artigo:</b> “cujo o” não existe.`,
'p-fig':`<b>Com “como” = comparação; sem “como” = metáfora.</b> <b>HIPER-bole = hiper exagero.</b> <b>Antítese = opostos lado a lado; paradoxo = opostos grudados</b> (“silêncio ensurdecedor”).`,
'p-sent':`<b>DENOtação = Dicionário; CONOtação = COm imaginação</b> (sentido figurado).`,
'p-modal':`<b>“Alegou” = disse sem provar.</b> “Até” = o caso mais surpreendente. Talvez/provavelmente = dúvida; certamente = certeza.`,
'p-per':`<b>COORDENADA anda sozinha; SUBordinada é SUBmissa</b> (depende da principal).`,
'p-adj':`<b>Com vírgula = vale para TODOS</b> (informação extra, dá para tirar). <b>Sem vírgula = só ALGUNS</b> (restringe).`,
'p-vl':`Verbos de ligação: <b>“SER, ESTAR, PARECER, PERMANECER, FICAR, CONTINUAR, ANDAR, VIRAR”</b>. Teste: depois dele vem uma <b>característica</b> do sujeito?`,
'p-reg':`<b>“Vou A, volto DA? Crase há! Vou A, volto DE? Crase pra quê?”</b> (Vou à Bahia / volto da Bahia × vou a Recife / volto de Recife.)`,
'p-conc':`<b>Haver de “existir” não tem plural:</b> “havia muitos alunos”. <b>Fazer de tempo também:</b> “faz dois anos”.`,
'p-col':`<b>Palavra negativa é ímã:</b> não, nunca, ninguém, que, quando, sempre <b>puxam o pronome para antes</b> do verbo. E não se começa frase com “me”, “te”, “se” na norma-padrão.`,
'p-pont':`<b>Sujeito e verbo são namorados: vírgula não separa.</b> Vocativo (quem é chamado) sempre leva vírgula.`,
'p-var':`<b>Língua é como roupa:</b> chinelo na praia, terno no casamento. Não é certo × errado, é <b>adequado × inadequado</b>.`,
'p-form':`<b>Parassíntese: prefixo e sufixo entram de mãos dadas</b> (en-tard-ecer: não existe “entarde” nem “tardecer”).`
};

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

/* TREINO · Matemática · M2 (Álgebra) — 30 questões
   m-eq1 (5) · m-sist (5) · m-prod (5) · m-eq2 (5) · m-prop (5) · m-func (3) · m-seq (2)
   Contas conferidas por check_tm2.py */
const TREINO_M2 = [

/* ===================== m-eq1 · Equação do 1º grau ===================== */
{t:'m-eq1', d:1, q:`Qual é a solução da equação 4(x + 3) = 2x + 20?`, o:[
  [`x = 16`, `Ao passar o +12 para o outro lado você manteve o sinal: o certo é 20 − 12, e não 20 + 12.`],
  [`x = 8`, `Você chegou em 2x = 8 e parou. Falta dividir por 2.`],
  [`x = 4`, ``],
  [`x = 2`, `Você dividiu 8 por 4 (o número que multiplicava o x no começo). Depois de juntar os termos, o x fica multiplicado por 2.`],
  [`x = 10`, `Você sumiu com o 12 da distributiva e resolveu 4x = 2x + 20. O certo é 4(x + 3) = 4x + 12.`]
 ], a:2, e:`<ol><li>Distributiva: 4x + 12 = 2x + 20.</li><li>Letras para um lado, números para o outro: 4x − 2x = 20 − 12.</li><li>2x = 8 → x = 4.</li></ol>Conferindo: 4(4 + 3) = 28 e 2·4 + 20 = 28. ✔`},

{t:'m-eq1', d:2, q:`Numa loja de games, um jogo de corrida custa R$ 30,00 a mais que um jogo de futebol. Comprando os dois, Richard pagou R$ 210,00. Quanto custa o jogo de futebol (o mais barato)?`, o:[
  [`R$ 90,00`, ``],
  [`R$ 120,00`, `Esse é o preço do jogo de corrida (90 + 30). A pergunta é o mais barato.`],
  [`R$ 105,00`, `Você dividiu 210 por 2, como se os jogos tivessem o mesmo preço. Um custa 30 a mais.`],
  [`R$ 75,00`, `Você tirou 30 duas vezes do total. O "a mais" aparece só uma vez: x + (x + 30) = 210.`],
  [`R$ 180,00`, `Você chegou em 2x = 180 e esqueceu de dividir por 2.`]
 ], a:0, e:`Futebol: x · Corrida: x + 30.<br>x + (x + 30) = 210 → 2x + 30 = 210 → 2x = 180 → x = 90.<br>Futebol R$ 90,00 e corrida R$ 120,00 (soma 210 ✔).`},

{t:'m-eq1', d:2, q:`Richard gastou [[1|3]] da mesada com lanches e [[1|4]] com figurinhas. Ainda sobraram R$ 50,00. Qual é o valor da mesada?`, o:[
  [`R$ 70,00`, `Você somou as frações "em cima com em cima, embaixo com embaixo": [[1|3]] + [[1|4]] não é [[2|7]]. O certo é [[4|12]] + [[3|12]] = [[7|12]].`],
  [`R$ 10,00`, `Ao multiplicar pelo MMC (12), você esqueceu de multiplicar o 50. É <b>todo</b> termo: 12x − 4x − 3x = 600.`],
  [`R$ 600,00`, `Você chegou em 5x = 600 e esqueceu de dividir por 5.`],
  [`R$ 120,00`, ``],
  [`R$ 75,00`, `Você considerou só o gasto com lanches (x − [[x|3]] = 50) e esqueceu as figurinhas.`]
 ], a:3, e:`Mesada: x. Sobra = x − [[x|3]] − [[x|4]] = 50.<br>MMC(3, 4) = 12. Multiplicando <b>tudo</b> por 12: 12x − 4x − 3x = 600 → 5x = 600 → x = 120.<br>Conferindo: lanches 40, figurinhas 30, sobra 120 − 70 = 50 ✔.`},

{t:'m-eq1', d:3, q:`Hoje, a idade de um pai é o quádruplo da idade do filho. Daqui a 20 anos, a idade do pai será o dobro da idade do filho. Quantos anos o filho tem hoje?`, o:[
  [`40`, `Essa é a idade do pai hoje (4 × 10). A pergunta é a do filho.`],
  [`10`, ``],
  [`20`, `Você somou os 20 anos só ao filho: 4x = 2(x + 20). O pai também envelhece 20 anos!`],
  [`30`, `Essa é a idade do filho daqui a 20 anos. A pergunta é a de hoje.`],
  [`60`, `Essa é a idade do pai daqui a 20 anos.`]
 ], a:1, e:`Filho hoje: x · Pai hoje: 4x.<br>Daqui a 20 anos: filho x + 20 e pai 4x + 20.<br>4x + 20 = 2(x + 20) → 4x + 20 = 2x + 40 → 2x = 20 → x = 10.<br>Conferindo: hoje 10 e 40; daqui a 20 anos, 30 e 60 (60 é o dobro de 30 ✔).`},

{t:'m-eq1', d:3, q:`Numa excursão, se cada aluno sentar sozinho em um banco do pátio, 8 alunos ficam em pé. Se os alunos sentarem 2 em cada banco, sobram 5 bancos vazios. Quantos alunos há na excursão?`, o:[
  [`18`, `18 é o número de <b>bancos</b>. Os alunos são 18 + 8.`],
  [`36`, `Você multiplicou todos os 18 bancos por 2, mas 5 bancos ficaram vazios: são só 13 bancos ocupados.`],
  [`21`, `Você interpretou "sobram 5 bancos" como "sobram 5 lugares" e montou b + 8 = 2b − 5. São 5 <b>bancos</b> vazios, ou seja, 2(b − 5).`],
  [`13`, `13 é o número de bancos ocupados na 2ª arrumação, não o número de alunos.`],
  [`26`, ``]
 ], a:4, e:`Bancos: b.<br>1ª situação: alunos = b + 8.<br>2ª situação: só b − 5 bancos ocupados, com 2 alunos cada → alunos = 2(b − 5).<br>b + 8 = 2b − 10 → b = 18 bancos → alunos = 18 + 8 = 26.<br>Conferindo: 13 bancos × 2 = 26 ✔.`},

/* ===================== m-sist · Sistemas ===================== */
{t:'m-sist', d:1, q:`Resolva o sistema y = 2x e x + y = 18. Qual é o valor de y?`, o:[
  [`6`, `6 é o valor de x. Responda o que foi perguntado: y = 2x.`],
  [`12`, ``],
  [`9`, `Você dividiu 18 por 2, como se x e y fossem iguais. Mas y é o dobro de x.`],
  [`36`, `Você fez 2 × 18. O 18 é a soma x + y, não o valor de x.`],
  [`18`, `18 é a soma x + y, não o valor de y.`]
 ], a:1, e:`Substituição (y já está "sozinho"): x + 2x = 18 → 3x = 18 → x = 6.<br>y = 2 · 6 = 12.`},

{t:'m-sist', d:2, q:`Carla juntou 25 cédulas, umas de R$ 10,00 e outras de R$ 20,00, totalizando R$ 360,00. Quantas cédulas de R$ 20,00 ela tem?`, o:[
  [`14`, `14 é a quantidade de cédulas de R$ 10,00.`],
  [`18`, `Você dividiu 360 por 20, como se todas as cédulas fossem de R$ 20,00. Assim seriam 18 cédulas, e não 25.`],
  [`7`, `Você fez 360 ÷ 20 = 18 e 25 − 18 = 7, mas essa conta não tem sentido no problema. Monte o sistema.`],
  [`11`, ``],
  [`36`, `36 vem de dividir a 2ª equação por 10 (d + 2v = 36), mas ainda falta resolver o sistema.`]
 ], a:3, e:`d + v = 25 (quantidade) e 10d + 20v = 360 (valor).<br>Dividindo a 2ª por 10: d + 2v = 36.<br>Subtraindo a 1ª: (d + 2v) − (d + v) = 36 − 25 → v = 11. Então d = 14.<br>Conferindo: 14 × 10 + 11 × 20 = 140 + 220 = 360 ✔.`},

{t:'m-sist', d:2, q:`Num jogo de basquete, um time acertou 14 cestas, algumas de 2 pontos e outras de 3 pontos, e fez 33 pontos ao todo. Quantas cestas de 3 pontos o time fez?`, o:[
  [`5`, ``],
  [`9`, `9 é a quantidade de cestas de 2 pontos.`],
  [`11`, `Você dividiu 33 por 3, como se todas as cestas fossem de 3 pontos. Mas foram 14 cestas.`],
  [`7`, `Você dividiu 14 cestas ao meio. Nada diz que são metade de cada tipo.`],
  [`15`, `15 são os <b>pontos</b> feitos com cestas de 3 (5 × 3). A pergunta é a quantidade de cestas.`]
 ], a:0, e:`d + t = 14 e 2d + 3t = 33.<br>Multiplique a 1ª por 2: 2d + 2t = 28. Subtraindo da 2ª: t = 33 − 28 = 5. Então d = 9.<br>Conferindo: 9 × 2 + 5 × 3 = 18 + 15 = 33 ✔.`},

{t:'m-sist', d:3, q:`Pedro e Ana têm, juntos, 60 figurinhas. Se Pedro der 10 figurinhas para Ana, os dois ficarão com a mesma quantidade. Quantas figurinhas Pedro tem?`, o:[
  [`30`, `30 é quanto cada um terá <b>depois</b> da troca, não quanto Pedro tem agora.`],
  [`20`, `20 é a quantidade de Ana.`],
  [`40`, ``],
  [`35`, `Você esqueceu que Ana também <b>ganha</b> 10: montou P − 10 = A. O certo é P − 10 = A + 10.`],
  [`25`, `Esse é o valor de Ana na montagem errada P − 10 = A (esquecendo que ela ganha 10).`]
 ], a:2, e:`P + A = 60 e P − 10 = A + 10 → P − A = 20.<br>Somando as equações: 2P = 80 → P = 40 e A = 20.<br>Conferindo: Pedro dá 10 → fica com 30; Ana recebe 10 → fica com 30 ✔.`},

{t:'m-sist', d:3, q:`Numa feira, 3 maçãs e 2 laranjas pesam juntas 700 g, e 2 maçãs e 3 laranjas pesam 650 g. Todas as maçãs têm o mesmo peso, e todas as laranjas também. Quanto pesa uma maçã?`, o:[
  [`110 g`, `110 g é o peso de uma laranja.`],
  [`140 g`, `Você dividiu 700 g por 5 frutas, como se maçã e laranja pesassem o mesmo.`],
  [`270 g`, `270 g é o peso de 1 maçã + 1 laranja juntas.`],
  [`50 g`, `50 g é quanto a maçã pesa <b>a mais</b> que a laranja (m − l), não o peso dela.`],
  [`160 g`, ``]
 ], a:4, e:`3m + 2l = 700 e 2m + 3l = 650.<br>Somando: 5m + 5l = 1 350 → m + l = 270.<br>Subtraindo: m − l = 50.<br>Somando essas duas: 2m = 320 → m = 160 g (e l = 110 g).<br>Conferindo: 3 · 160 + 2 · 110 = 480 + 220 = 700 ✔.`},

/* ===================== m-prod · Produtos notáveis e fatoração ===================== */
{t:'m-prod', d:1, q:`Desenvolvendo (x + 4)<sup>2</sup>, obtemos:`, o:[
  [`x<sup>2</sup> + 8x + 16`, ``],
  [`x<sup>2</sup> + 16`, `Faltou o termo do meio, o 2ab = 2 · x · 4 = 8x. (a + b)<sup>2</sup> não é a<sup>2</sup> + b<sup>2</sup>.`],
  [`x<sup>2</sup> + 4x + 16`, `Você esqueceu o 2 do "2 vezes o 1º pelo 2º": 2 · x · 4 = 8x.`],
  [`x<sup>2</sup> + 8x + 8`, `Você calculou 4 · 2 = 8 em vez de 4<sup>2</sup> = 16 no último termo.`],
  [`x<sup>2</sup> − 8x + 16`, `O sinal do meio é o mesmo do parêntese: na soma, é + 8x.`]
 ], a:0, e:`(a + b)<sup>2</sup> = a<sup>2</sup> + 2ab + b<sup>2</sup> com a = x e b = 4:<br>x<sup>2</sup> + 2 · x · 4 + 4<sup>2</sup> = x<sup>2</sup> + 8x + 16.`},

{t:'m-prod', d:2, q:`A forma fatorada de 9x<sup>2</sup> − 16 é:`, o:[
  [`(3x − 4)<sup>2</sup>`, `(3x − 4)<sup>2</sup> = 9x<sup>2</sup> − 24x + 16: aparece um termo do meio e o 16 fica positivo. Diferença de quadrados vira soma vezes diferença.`],
  [`(9x + 4)(9x − 4)`, `Você não tirou a raiz do 9. Como 9x<sup>2</sup> = (3x)<sup>2</sup>, o primeiro termo é 3x.`],
  [`(3x + 4)(3x − 4)`, ``],
  [`(4 + 3x)(4 − 3x)`, `Isso dá 16 − 9x<sup>2</sup>, com os sinais trocados. O termo positivo é o 9x<sup>2</sup>.`],
  [`(3x + 8)(3x − 8)`, `Você dividiu 16 por 2 em vez de tirar a raiz: √{16} = 4.`]
 ], a:2, e:`9x<sup>2</sup> = (3x)<sup>2</sup> e 16 = 4<sup>2</sup>. É uma diferença de quadrados: a<sup>2</sup> − b<sup>2</sup> = (a + b)(a − b).<br>9x<sup>2</sup> − 16 = (3x + 4)(3x − 4).`},

{t:'m-prod', d:2, q:`Sem calculadora e usando produtos notáveis, qual é o resultado de 998 × 1 002?`, o:[
  [`1 000 004`, `O sinal está trocado: (a − b)(a + b) = a<sup>2</sup> <b>−</b> b<sup>2</sup>.`],
  [`999 998`, `Você subtraiu 2, mas o que se subtrai é 2<sup>2</sup> = 4.`],
  [`1 000 000`, `Você calculou só o 1 000<sup>2</sup> e esqueceu de subtrair o 2<sup>2</sup>.`],
  [`996 000`, `Você subtraiu 4 000, como se houvesse um termo 2ab. No produto da soma pela diferença, o termo do meio some.`],
  [`999 996`, ``]
 ], a:4, e:`998 = 1 000 − 2 e 1 002 = 1 000 + 2.<br>(1 000 − 2)(1 000 + 2) = 1 000<sup>2</sup> − 2<sup>2</sup> = 1 000 000 − 4 = 999 996.`},

{t:'m-prod', d:2, q:`Para x ≠ 3 e x ≠ −3, a expressão [[x<sup>2</sup> − 6x + 9|x<sup>2</sup> − 9]] é igual a:`, o:[
  [`[[x + 3|x − 3]]`, `Você inverteu: o (x − 3) que sobra está em cima, porque o numerador é (x − 3)<sup>2</sup>.`],
  [`[[x − 3|x + 3]]`, ``],
  [`x − 3`, `Você cortou o (x + 3) do denominador sem que ele aparecesse no numerador. Só se cancela fator igual em cima e embaixo.`],
  [`[[2x − 3|3]]`, `Você "cortou" x<sup>2</sup> com x<sup>2</sup>. Não se cancelam termos de uma soma, só fatores de um produto.`],
  [`[[1|x + 3]]`, `Você cancelou o (x − 3)<sup>2</sup> inteiro com um único (x − 3). Em cima há dois fatores (x − 3): sobra um.`]
 ], a:1, e:`Fatore em cima e embaixo:<br>x<sup>2</sup> − 6x + 9 = (x − 3)<sup>2</sup> = (x − 3)(x − 3) (trinômio quadrado perfeito);<br>x<sup>2</sup> − 9 = (x + 3)(x − 3) (diferença de quadrados).<br>Cancelando um (x − 3): [[x − 3|x + 3]].`},

{t:'m-prod', d:3, q:`Dois números a e b são tais que a + b = 7 e a · b = 10. Quanto vale a<sup>2</sup> + b<sup>2</sup>?`, o:[
  [`49`, `49 é (a + b)<sup>2</sup>. Você esqueceu que (a + b)<sup>2</sup> = a<sup>2</sup> + <b>2ab</b> + b<sup>2</sup>.`],
  [`39`, `Você descontou só ab = 10. O termo é 2ab = 20.`],
  [`69`, `Você somou 2ab em vez de subtrair: a<sup>2</sup> + b<sup>2</sup> = (a + b)<sup>2</sup> − 2ab.`],
  [`29`, ``],
  [`9`, `9 é (a − b)<sup>2</sup> = a<sup>2</sup> + b<sup>2</sup> − 2ab. Você descontou o 2ab duas vezes.`]
 ], a:3, e:`(a + b)<sup>2</sup> = a<sup>2</sup> + 2ab + b<sup>2</sup> → 7<sup>2</sup> = a<sup>2</sup> + b<sup>2</sup> + 2 · 10.<br>49 = a<sup>2</sup> + b<sup>2</sup> + 20 → a<sup>2</sup> + b<sup>2</sup> = 29.<br>(Conferindo: os números são 2 e 5, e 4 + 25 = 29 ✔.)`},

/* ===================== m-eq2 · Equação do 2º grau ===================== */
{t:'m-eq2', d:1, q:`O conjunto solução de 3x<sup>2</sup> − 48 = 0, nos números reais, é:`, o:[
  [`S = {4}`, `Faltou a raiz negativa: (−4)<sup>2</sup> também é 16.`],
  [`S = {16}`, `Você parou em x<sup>2</sup> = 16. Falta tirar a raiz.`],
  [`S = {−16, 16}`, `Você colocou ± no 16, mas 16 é o valor de x<sup>2</sup>. Falta tirar a raiz.`],
  [`S = {−4, 4}`, ``],
  [`S = {−8, 8}`, `Você calculou a metade de 16 em vez da raiz: √{16} = 4.`]
 ], a:3, e:`Incompleta sem b: isole o x<sup>2</sup>.<br>3x<sup>2</sup> = 48 → x<sup>2</sup> = 16 → x = 4 ou x = −4.`},

{t:'m-eq2', d:1, q:`O conjunto solução de x<sup>2</sup> − 9x = 0 é:`, o:[
  [`S = {0, 9}`, ``],
  [`S = {9}`, `Você dividiu tudo por x e perdeu a solução x = 0. Coloque x em evidência.`],
  [`S = {0, −9}`, `Sinal errado: x − 9 = 0 dá x = +9.`],
  [`S = {−3, 3}`, `Você tratou como se fosse x<sup>2</sup> − 9 = 0. Aqui o 9 está multiplicando o x.`],
  [`S = {3}`, `Você tirou a raiz de 9, mas a equação não é x<sup>2</sup> = 9.`]
 ], a:0, e:`Incompleta sem c: x em evidência.<br>x(x − 9) = 0 → x = 0 ou x − 9 = 0 → x = 9.`},

{t:'m-eq2', d:2, q:`Um terreno retangular tem o comprimento 4 m maior que a largura, e sua área é 96 m<sup>2</sup>. Quanto mede a largura?`, o:[
  [`12 m`, `12 m é o comprimento (8 + 4). A pergunta é a largura.`],
  [`−12 m`, `−12 é a outra raiz da equação, mas medida não pode ser negativa.`],
  [`8 m`, ``],
  [`24 m`, `Você dividiu 96 por 4, mas o 4 é quanto o comprimento é <b>maior</b>, não um lado.`],
  [`10 m`, `Você fez √{400} ÷ 2 = 10 e esqueceu o −b: x = [[−4 + 20|2]].`]
 ], a:2, e:`Largura x, comprimento x + 4.<br>x(x + 4) = 96 → x<sup>2</sup> + 4x − 96 = 0.<br>Δ = 16 + 384 = 400 → √{400} = 20.<br>x = [[−4 ± 20|2]] → 8 ou −12. Medida é positiva: x = 8 m (comprimento 12 m; 8 × 12 = 96 ✔).`},

{t:'m-eq2', d:2, q:`As idades de dois irmãos são as raízes da equação x<sup>2</sup> − 11x + 24 = 0. Qual é a diferença entre as idades deles?`, o:[
  [`11 anos`, `11 é a <b>soma</b> das raízes ([[−b|a]]), não a diferença.`],
  [`24 anos`, `24 é o <b>produto</b> das raízes ([[c|a]]).`],
  [`8 anos`, `8 é a idade do irmão mais velho. Falta subtrair a do mais novo.`],
  [`3 anos`, `3 é a idade do irmão mais novo, não a diferença.`],
  [`5 anos`, ``]
 ], a:4, e:`Soma e produto: dois números que somam 11 e multiplicam 24 → 3 e 8.<br>(Ou Δ = 121 − 96 = 25 → x = [[11 ± 5|2]] → 8 ou 3.)<br>Diferença: 8 − 3 = 5 anos.`},

{t:'m-eq2', d:3, q:`Para qual valor de k a equação x<sup>2</sup> − 6x + k = 0 tem duas raízes reais iguais?`, o:[
  [`k = 36`, `Você igualou k a b<sup>2</sup>, esquecendo o 4a: Δ = 36 − 4k = 0.`],
  [`k = 9`, ``],
  [`k = 6`, `Você usou o valor de b. A condição é Δ = 0.`],
  [`k = 3`, `3 é a raiz dupla da equação (x = 3), não o valor de k.`],
  [`k = −9`, `Erro de sinal: 36 − 4k = 0 → 4k = 36 → k = +9.`]
 ], a:1, e:`Duas raízes iguais ⇔ Δ = 0.<br>Δ = (−6)<sup>2</sup> − 4 · 1 · k = 36 − 4k = 0 → k = 9.<br>Conferindo: x<sup>2</sup> − 6x + 9 = (x − 3)<sup>2</sup>, raiz dupla 3 ✔.`},

/* ===================== m-prop · Razão, proporção, regra de três, escalas ===================== */
{t:'m-prop', d:1, q:`Uma receita usa 4 ovos para fazer 12 cupcakes. Mantendo a proporção, quantos ovos são necessários para 30 cupcakes?`, o:[
  [`22`, `Você somou 18 (30 − 12) aos 4 ovos. Proporção é multiplicação, não soma.`],
  [`90`, `Você montou a regra de três invertida (12 × 30 ÷ 4). Mais cupcakes → mais ovos, na mesma razão: 4 para 12.`],
  [`8`, `Você só dobrou a receita, mas 30 não é o dobro de 12.`],
  [`120`, `Você multiplicou 4 × 30 e esqueceu de dividir por 12.`],
  [`10`, ``]
 ], a:4, e:`Diretamente proporcional: [[4|12]] = [[x|30]] → 12x = 120 → x = 10.<br>(Ou: 1 ovo para cada 3 cupcakes → 30 ÷ 3 = 10.)`},

{t:'m-prop', d:2, q:`Um saco de ração dura 15 dias para 4 cachorros. Se forem 6 cachorros, comendo a mesma quantidade cada um, o mesmo saco durará:`, o:[
  [`22,5 dias`, `Você montou como diretamente proporcional. Mais cachorros → a ração dura <b>menos</b>: é inversa.`],
  [`10 dias`, ``],
  [`13 dias`, `Raciocínio de soma: "2 cachorros a mais, 2 dias a menos". Grandezas inversas se comparam pelo produto.`],
  [`60 dias`, `60 = 4 × 15 é o total de "porções de um dia". Falta dividir pelos 6 cachorros.`],
  [`7,5 dias`, `Você tratou 6 cachorros como o dobro de 4 e dividiu os dias por 2. O dobro de 4 seria 8.`]
 ], a:1, e:`Mais cachorros → menos dias: inversamente proporcional (produto constante).<br>4 × 15 = 6 × x → 60 = 6x → x = 10 dias.`},

{t:'m-prop', d:2, q:`Na planta de um apartamento, desenhada na escala 1 : 50, a sala é um retângulo de 8 cm por 6 cm. Qual é a área real da sala?`, o:[
  [`48 m<sup>2</sup>`, `Você multiplicou as medidas do desenho (8 × 6) e não aplicou a escala.`],
  [`24 m<sup>2</sup>`, `Você aplicou a escala só em uma das medidas (4 m × 6). As duas precisam ser convertidas.`],
  [`1 200 m<sup>2</sup>`, `Erro na conversão: 400 cm = 4 m (divide por 100), e não 40 m.`],
  [`12 m<sup>2</sup>`, ``],
  [`14 m<sup>2</sup>`, `14 m é o <b>perímetro</b> (4 + 3 + 4 + 3). A pergunta é a área.`]
 ], a:3, e:`Escala 1 : 50 → cada 1 cm do desenho vale 50 cm reais.<br>8 × 50 = 400 cm = 4 m · 6 × 50 = 300 cm = 3 m.<br>Área real: 4 × 3 = 12 m<sup>2</sup>.`},

{t:'m-prop', d:2, q:`No aplicativo de corrida, Richard viu que percorreu 10 km em 50 minutos. Qual foi sua velocidade média, em km/h?`, o:[
  [`12 km/h`, ``],
  [`0,2 km/h`, `10 ÷ 50 = 0,2 é em km <b>por minuto</b>. Faltou converter o tempo para horas.`],
  [`20 km/h`, `Você tratou 50 min como 0,5 h. Meia hora são 30 min; 50 min = [[5|6]] h.`],
  [`5 km/h`, `Você dividiu 50 por 10: isso é o ritmo (5 min por km), não a velocidade.`],
  [`10 km/h`, `Você arredondou 50 min para 1 h. A conta precisa ser exata.`]
 ], a:0, e:`50 min = [[50|60]] h = [[5|6]] h.<br>v = [[d|t]] = 10 ÷ [[5|6]] = 10 × [[6|5]] = 12 km/h.<br>(Ou por regra de três: 10 km em 50 min → 12 km em 60 min.)`},

{t:'m-prop', d:3, q:`Um prêmio de R$ 1 500,00 será dividido entre dois funcionários em partes <b>inversamente</b> proporcionais ao número de faltas de cada um no ano: um faltou 2 vezes e o outro, 3 vezes. Quanto receberá o funcionário que faltou 2 vezes?`, o:[
  [`R$ 600,00`, `Você dividiu de forma diretamente proporcional (2 e 3). Inversa: quem falta menos ganha mais.`],
  [`R$ 750,00`, `Você dividiu igualmente. A divisão depende das faltas.`],
  [`R$ 900,00`, ``],
  [`R$ 500,00`, `Você dividiu 1 500 por 3 sem montar a proporção.`],
  [`R$ 1 000,00`, `Você deu [[2|3]] do prêmio para quem faltou 2 vezes. As partes são proporcionais a [[1|2]] e [[1|3]], ou seja, 3 : 2.`]
 ], a:2, e:`Inversamente proporcional a 2 e 3 = diretamente proporcional a [[1|2]] e [[1|3]].<br>Multiplicando por 6: proporcional a 3 e 2. Total de partes: 5.<br>1 500 ÷ 5 = 300 → quem faltou 2 vezes: 3 × 300 = 900; quem faltou 3 vezes: 2 × 300 = 600.`},

/* ===================== m-func · Funções ===================== */
{t:'m-func', d:1, q:`Um plano de celular custa R$ 40,00 fixos por mês mais R$ 0,50 por minuto que passar da franquia. Quanto paga, no mês, quem passou 30 minutos da franquia?`, o:[
  [`R$ 15,00`, `Esse é só o valor dos minutos extras. Faltou somar os R$ 40,00 fixos (o b da função).`],
  [`R$ 70,00`, `Você somou 30 reais em vez de 30 × 0,50.`],
  [`R$ 55,00`, ``],
  [`R$ 41,50`, `Erro de vírgula: 0,50 × 30 = 15, e não 1,50.`],
  [`R$ 190,00`, `Erro de vírgula: 0,50 × 30 = 15, e não 150.`]
 ], a:2, e:`y = 0,5x + 40.<br>Para x = 30: y = 0,5 × 30 + 40 = 15 + 40 = R$ 55,00.`},

{t:'m-func', d:2, q:`Uma caixa-d'água com 600 litros começa a ser esvaziada a uma vazão constante. Depois de 4 horas, ela está com 480 litros. Mantendo esse ritmo, quanto tempo, contado desde o início, leva para ela ficar vazia?`, o:[
  [`16 h`, `16 h é quanto ainda falta depois das 4 horas iniciais. A pergunta conta desde o início: 4 + 16.`],
  [`5 h`, `Você dividiu 600 por 120, mas 120 L é o que sai em 4 horas, não em 1 hora.`],
  [`30 h`, `30 é a vazão (litros por hora), não o tempo.`],
  [`120 h`, `120 são os litros que saíram nas 4 primeiras horas, não um tempo.`],
  [`20 h`, ``]
 ], a:4, e:`Saíram 600 − 480 = 120 L em 4 h → taxa de 30 L/h (a = −30).<br>y = 600 − 30t. Vazia: 600 − 30t = 0 → t = 20 h.`},

{t:'m-func', d:3, q:`Considere a função y = x<sup>2</sup> − 3x. Qual é a diferença entre o valor de y para x = −2 e o valor de y para x = 2 (nessa ordem)?`, o:[
  [`12`, ``],
  [`4`, `Você calculou −2<sup>2</sup> = −4 sem parênteses. O certo é (−2)<sup>2</sup> = 4.`],
  [`0`, `Você supôs que x = −2 e x = 2 dão o mesmo y. Isso não vale por causa do termo −3x.`],
  [`8`, `Você fez 10 − 2, mas y(2) = −2, então 10 − (−2) = 12.`],
  [`−12`, `Você fez a subtração na ordem contrária.`]
 ], a:0, e:`x = −2: y = (−2)<sup>2</sup> − 3 · (−2) = 4 + 6 = 10.<br>x = 2: y = 2<sup>2</sup> − 3 · 2 = 4 − 6 = −2.<br>Diferença: 10 − (−2) = 12.`},

/* ===================== m-seq · Sequências ===================== */
{t:'m-seq', d:1, q:`No treino de corrida, Richard correu 2 km na 1ª semana e decidiu aumentar 0,5 km a cada semana. Quantos km ele vai correr na 13ª semana?`, o:[
  [`8,5 km`, `Você usou 13 "pulos". Da 1ª à 13ª semana são só 12: a<sub>13</sub> = 2 + 12 · 0,5.`],
  [`6,5 km`, `Você fez 13 × 0,5 e esqueceu de partir dos 2 km iniciais.`],
  [`26 km`, `Você multiplicou 2 × 13, como se ele corresse sempre 2 km a mais.`],
  [`8 km`, ``],
  [`7,5 km`, `Você contou 11 pulos. Da 1ª à 13ª semana são 12.`]
 ], a:3, e:`a<sub>1</sub> = 2 e r = 0,5.<br>a<sub>13</sub> = 2 + (13 − 1) · 0,5 = 2 + 6 = 8 km.`},

{t:'m-seq', d:2, q:`Numa festa, mesas quadradas são colocadas lado a lado formando uma fila. Com 1 mesa, sentam 4 pessoas; com 2 mesas, 6 pessoas; com 3 mesas, 8 pessoas. Quantas mesas são necessárias para sentar exatamente 50 pessoas?`, o:[
  [`25`, `Você dividiu 50 por 2, esquecendo as 2 pessoas das pontas da fila.`],
  [`24`, ``],
  [`13`, `Você contou 4 lugares por mesa, mas, juntas, as mesas perdem os lugares onde se encostam.`],
  [`23`, `Você usou a fórmula 2n + 4. Confira com 1 mesa: 2 · 1 + 2 = 4 → a fórmula é 2n + 2.`],
  [`26`, `Você somou 2 em vez de subtrair: (50 + 2) ÷ 2. O certo é (50 − 2) ÷ 2.`]
 ], a:1, e:`A cada mesa nova, entram 2 pessoas → fórmula 2n + 2 (confira: n = 1 → 4).<br>2n + 2 = 50 → 2n = 48 → n = 24 mesas.`}

];

/* TREINO · Matemática · M3 (Geometria)
   m-ang (5) · m-pol (3) · m-sem (5) · m-pit (5) · m-circ (3) · m-cart (3) = 24 questões
   Contas conferidas em check_tm3.py */
const TREINO_M3 = [
/* ===== m-ang · Ângulos e retas paralelas (5) ===== */
 {t:'m-ang', d:1, q:`Duas retas se cruzam num ponto e formam quatro ângulos. Um desses ângulos mede 72°. Quais são as medidas dos outros três ângulos?`, o:[
   [`108°, 108° e 108°`, `Só os dois ângulos vizinhos ao de 72° são suplementares dele (108°). O ângulo oposto pelo vértice é igual a ele: 72°.`],
   [`18°, 72° e 18°`, `Você usou o complemento (90° − 72°), mas ângulos vizinhos formados por duas retas que se cruzam são suplementares: somam 180°.`],
   [`72°, 108° e 108°`, ``],
   [`72°, 72° e 72°`, `Os quatro ângulos só são iguais quando as retas são perpendiculares (todos de 90°). Aqui os vizinhos somam 180°.`],
   [`72°, 144° e 144°`, `Você dobrou o ângulo. Os vizinhos do ângulo de 72° são os suplementos dele: 180° − 72° = 108°.`]
 ], a:2, e:`<ol><li>O ângulo <b>oposto pelo vértice</b> ao de 72° é igual a ele: <b>72°</b>.</li><li>Os dois ângulos vizinhos formam com ele um ângulo raso, então são suplementares: 180° − 72° = <b>108°</b>.</li><li>Conferindo: 72 + 108 + 72 + 108 = 360°, uma volta completa.</li></ol>`},

 {t:'m-ang', d:2, q:`Duas retas paralelas r e s são cortadas por uma transversal t. Dois ângulos <b>alternos externos</b> medem 2x + 25° e 4x − 15°. Quanto mede cada um desses ângulos?`, o:[
   [`65°`, ``],
   [`20°`, `20 é o valor de x, não a medida do ângulo. Falta substituir: 2 · 20 + 25 = 65°.`],
   [`115°`, `115° é o suplemento da resposta. Alternos externos são iguais, então a medida é a própria expressão com x = 20: 65°.`],
   [`35°`, `Erro de sinal ao passar os números: de 2x + 25 = 4x − 15 vem 25 + 15 = 4x − 2x, ou seja, 40 = 2x (e não 10 = 2x).`],
   [`130°`, `Você somou os dois ângulos. A pergunta é quanto mede <b>cada um</b>: 65°.`]
 ], a:0, e:`<ol><li>Alternos externos são <b>iguais</b>: 2x + 25 = 4x − 15.</li><li>25 + 15 = 4x − 2x → 40 = 2x → x = 20.</li><li>Ângulo: 2 · 20 + 25 = <b>65°</b> (confira: 4 · 20 − 15 = 65°).</li></ol>`},

 {t:'m-ang', d:2, q:`A Rua das Flores e a Rua dos Ipês são paralelas e são cortadas pela Avenida Central, que não é perpendicular a elas. No cruzamento com a Rua das Flores, o ângulo <b>agudo</b> entre a avenida e a rua mede 3x − 12°. No cruzamento com a Rua dos Ipês, o ângulo <b>obtuso</b> entre a avenida e a rua mede 2x + 42°. Quanto mede o ângulo agudo?`, o:[
   [`30°`, `30 é o valor de x. Substituindo: 3 · 30 − 12 = 78°.`],
   [`102°`, `102° é o ângulo obtuso (2 · 30 + 42). A pergunta pede o agudo.`],
   [`150°`, `Você igualou o agudo ao obtuso (x = 54), mas eles não são iguais: com paralelas, um agudo e um obtuso somam 180°. E 150° nem é agudo!`],
   [`78°`, ``],
   [`54°`, `Você igualou as expressões (3x − 12 = 2x + 42) e parou no x. Agudo e obtuso não são iguais: somam 180°.`]
 ], a:3, e:`<ol><li>Com paralelas cortadas por uma transversal só há dois tamanhos de ângulo, e <b>agudo + obtuso = 180°</b>.</li><li>(3x − 12) + (2x + 42) = 180 → 5x + 30 = 180 → 5x = 150 → x = 30.</li><li>Agudo: 3 · 30 − 12 = <b>78°</b> (obtuso: 102°; 78 + 102 = 180 ✔).</li></ol>`},

 {t:'m-ang', d:3, q:`O complemento de um ângulo é igual à quarta parte do suplemento desse mesmo ângulo. Quanto mede esse ângulo?`, o:[
   [`30°`, `30° é o complemento do ângulo procurado, não o ângulo. Releia a pergunta.`],
   [`60°`, ``],
   [`36°`, `Erro de sinal ao juntar os termos: 360 − 4x = 180 − x dá 180 = 3x, e não 180 = 5x.`],
   [`120°`, `120° é o suplemento do ângulo procurado, não o ângulo.`],
   [`45°`, `Teste: o complemento de 45° é 45° e o suplemento é 135°; 135 ÷ 4 não dá 45. Monte a equação em vez de chutar.`]
 ], a:1, e:`<ol><li>Ângulo = x. Complemento = 90 − x; suplemento = 180 − x.</li><li>Equação: 90 − x = [[180 − x|4]] → 4 · (90 − x) = 180 − x.</li><li>360 − 4x = 180 − x → 360 − 180 = 4x − x → 180 = 3x → x = <b>60°</b>.</li><li>Confira: complemento 30°, suplemento 120°, e 120 ÷ 4 = 30 ✔.</li></ol>`},

 {t:'m-ang', d:3, q:`Os ângulos AÔB e BÔC são adjacentes e, juntos, formam um ângulo raso (as semirretas OA e OC são opostas). Sabe-se que AÔB = 4x + 20° e BÔC = 2x + 40°. Traçam-se a bissetriz de AÔB e a bissetriz de BÔC. Qual é a medida do ângulo formado por essas duas bissetrizes?`, o:[
   [`180°`, `Você somou os ângulos inteiros, mas cada bissetriz pega só a <b>metade</b> do seu ângulo: 50° + 40°.`],
   [`45°`, `Você dividiu por 4. Cada bissetriz divide o seu ângulo por 2: 100 ÷ 2 + 80 ÷ 2 = 90°.`],
   [`100°`, `100° é a medida de AÔB. O ângulo entre as bissetrizes é a metade de AÔB mais a metade de BÔC.`],
   [`50°`, `50° é só a metade de AÔB. Falta somar a metade de BÔC (40°).`],
   [`90°`, ``]
 ], a:4, e:`<ol><li>Juntos formam um ângulo raso: (4x + 20) + (2x + 40) = 180 → 6x + 60 = 180 → x = 20.</li><li>AÔB = 4 · 20 + 20 = 100° e BÔC = 2 · 20 + 40 = 80°.</li><li>Entre as bissetrizes ficam a metade de cada um: 50° + 40° = <b>90°</b>.</li></ol><b>Curiosidade:</b> isso sempre dá 90°, porque é a metade de 180°.`},

/* ===== m-pol · Triângulos e polígonos (3) ===== */
 {t:'m-pol', d:1, q:`O piso de um coreto tem a forma de um pentágono regular. Quanto mede cada ângulo interno desse pentágono?`, o:[
   [`540°`, `540° é a <b>soma</b> dos cinco ângulos internos. Falta dividir por 5.`],
   [`108°`, ``],
   [`72°`, `72° é o ângulo <b>externo</b> (360 ÷ 5). O interno é 180° − 72° = 108°.`],
   [`144°`, `Você usou (n − 1) na fórmula. O certo é S<sub>i</sub> = (n − 2) · 180°.`],
   [`120°`, `120° é o ângulo interno do hexágono regular (6 lados), não do pentágono.`]
 ], a:1, e:`<ol><li>Soma dos internos: S<sub>i</sub> = (5 − 2) · 180° = 540°.</li><li>Regular: ângulos iguais → 540° ÷ 5 = <b>108°</b>.</li><li>Outro caminho: externo = 360° ÷ 5 = 72°, interno = 180° − 72° = 108°.</li></ol>`},

 {t:'m-pol', d:2, q:`No triângulo ABC, o ângulo externo junto ao vértice C mede 130°. Os ângulos internos dos vértices A e B medem, respectivamente, x + 20° e 2x − 10°. Quanto mede o ângulo interno do vértice A?`, o:[
   [`40°`, `40 é o valor de x. O ângulo A é x + 20 = 60°.`],
   [`70°`, `70° é o ângulo B (2 · 40 − 10). A pergunta pede o ângulo A.`],
   [`50°`, `50° é o ângulo interno C (180° − 130°). A pergunta pede o ângulo A.`],
   [`65°`, `Você dividiu 130° igualmente entre A e B, mas eles têm expressões diferentes. Monte a equação.`],
   [`60°`, ``]
 ], a:4, e:`<ol><li>O ângulo externo é igual à soma dos dois internos <b>não vizinhos</b> a ele: (x + 20) + (2x − 10) = 130.</li><li>3x + 10 = 130 → 3x = 120 → x = 40.</li><li>Ângulo A = 40 + 20 = <b>60°</b>. (B = 70°, C = 50°; 60 + 70 + 50 = 180 ✔)</li></ol>`},

 {t:'m-pol', d:3, q:`A soma dos ângulos internos de um polígono convexo é 1 440°. Quantas diagonais esse polígono tem?`, o:[
   [`10`, `10 é o número de lados. A pergunta pede o número de diagonais.`],
   [`70`, `Você esqueceu de dividir por 2 na fórmula das diagonais (cada diagonal seria contada duas vezes).`],
   [`35`, ``],
   [`20`, `Você usou n = 8 (resultado de 1 440 ÷ 180), mas esse 8 é n − 2. O polígono tem 10 lados.`],
   [`27`, `Você usou 9 lados. De 1 440 ÷ 180 = 8 = n − 2, temos n = 10.`]
 ], a:2, e:`<ol><li>(n − 2) · 180 = 1 440 → n − 2 = 8 → n = 10 (decágono).</li><li>d = [[n(n − 3)|2]] = [[10 · 7|2]] = <b>35</b> diagonais.</li></ol>`},

/* ===== m-sem · Semelhança e Tales (5) ===== */
 {t:'m-sem', d:1, q:`Num fim de tarde, uma árvore projeta no chão uma sombra de 12 m. No mesmo instante, Richard, que tem 1,5 m de altura, projeta uma sombra de 2 m. Qual é a altura da árvore?`, o:[
   [`9 m`, ``],
   [`16 m`, `Você inverteu a proporção (usou sombra ÷ altura de um lado e altura ÷ sombra do outro). O certo é [[h|12]] = [[1,5|2]].`],
   [`11,5 m`, `Você achou que a diferença entre sombra e altura (0,5 m) é a mesma para todos. O que se mantém é a <b>razão</b>, não a diferença.`],
   [`18 m`, `Você multiplicou 12 por 1,5 e esqueceu de dividir por 2.`],
   [`6 m`, `Você dividiu 12 por 2 e esqueceu de multiplicar por 1,5.`]
 ], a:0, e:`<ol><li>No mesmo instante os raios de sol são paralelos: [[altura|sombra]] é igual para todos.</li><li>[[h|12]] = [[1,5|2]] → 2h = 18 → h = <b>9 m</b>.</li></ol>`},

 {t:'m-sem', d:2, q:`Três ruas paralelas cortam duas avenidas. Na Avenida 1, os dois quarteirões entre essas ruas medem 90 m e 120 m. Na Avenida 2, o quarteirão correspondente ao de 90 m mede 75 m. Quanto mede, na Avenida 2, o quarteirão correspondente ao de 120 m?`, o:[
   [`105 m`, `Você somou a diferença (120 − 90 = 30) a 75. No Teorema de Tales os segmentos são <b>proporcionais</b>; a diferença não se mantém.`],
   [`144 m`, `Você montou a proporção trocando os pares: [[90|75]] = [[x|120]]. O correto é [[90|120]] = [[75|x]].`],
   [`175 m`, `Esse é o comprimento total dos dois quarteirões da Avenida 2 (75 + 100). A pergunta pede só um quarteirão.`],
   [`100 m`, ``],
   [`210 m`, `Você somou os quarteirões da Avenida 1 (90 + 120). A pergunta é sobre a Avenida 2.`]
 ], a:3, e:`<ol><li>Teorema de Tales: [[90|120]] = [[75|x]].</li><li>90x = 120 · 75 = 9 000 → x = <b>100 m</b>.</li><li>Atalho: [[90|120]] = [[3|4]], e 75 = 3 · 25, então x = 4 · 25 = 100.</li></ol>`},

 {t:'m-sem', d:2, q:`Uma foto de 10 cm por 15 cm foi ampliada sem distorcer, de modo que o lado menor passou a medir 30 cm. A foto original tinha 150 cm² de área. Qual é a área da foto ampliada?`, o:[
   [`450 cm²`, `Você multiplicou a área pela razão k = 3. As áreas ficam na razão k² = 9.`],
   [`1 050 cm²`, `Você somou 20 cm aos dois lados (30 × 35). Na ampliação os lados são <b>multiplicados</b> por 3: 30 cm × 45 cm.`],
   [`1 350 cm²`, ``],
   [`4 050 cm²`, `Você usou k³ = 27, que vale para volumes. Para áreas é k² = 9.`],
   [`900 cm²`, `Você multiplicou por 6 (o dobro de 3). Para áreas é preciso elevar a razão ao quadrado: 3² = 9.`]
 ], a:2, e:`<ol><li>Razão de semelhança: k = [[30|10]] = 3.</li><li>Áreas ficam na razão k² = 9: 150 × 9 = <b>1 350 cm²</b>.</li><li>Conferindo pelos lados: 30 × 45 = 1 350 ✔.</li></ol>`},

 {t:'m-sem', d:2, q:`No triângulo ABC, AB = 12 cm, AC = 15 cm e BC = 18 cm. Uma reta paralela ao lado BC corta AB no ponto D e AC no ponto E, com AD = 4 cm. Qual é o perímetro do triângulo ADE?`, o:[
   [`6 cm`, `6 cm é só o lado DE. O perímetro soma os três lados: 4 + 5 + 6.`],
   [`15 cm`, ``],
   [`45 cm`, `45 cm é o perímetro do triângulo grande ABC. O triângulo ADE é 3 vezes menor.`],
   [`5 cm`, `Você dividiu por 9 (k²), mas isso vale para áreas. Perímetros ficam na razão k = 3.`],
   [`21 cm`, `Você subtraiu 8 cm de cada lado (porque 12 − 4 = 8). Em triângulos semelhantes os lados são proporcionais, não diminuem a mesma quantidade.`]
 ], a:1, e:`<ol><li>DE paralelo a BC → os triângulos ADE e ABC são semelhantes (caso AA).</li><li>Razão: [[AD|AB]] = [[4|12]] = [[1|3]].</li><li>Perímetro de ABC = 12 + 15 + 18 = 45 cm → perímetro de ADE = 45 ÷ 3 = <b>15 cm</b> (lados 4, 5 e 6).</li></ol>`},

 {t:'m-sem', d:3, q:`À noite, uma lâmpada no topo de um poste de 6 m ilumina Ana, que tem 1,8 m de altura e está em pé a 7 m da base do poste, de costas para ele. A sombra de Ana se estende no chão, a partir dos pés dela, no sentido oposto ao do poste. Qual é o comprimento dessa sombra?`, o:[
   [`2,1 m`, `Você usou 7 m como a base do triângulo grande, mas a base grande vai do poste até a ponta da sombra: 7 + s.`],
   [`10 m`, `10 m é a distância do poste até a ponta da sombra (7 + 3). A sombra em si mede 3 m.`],
   [`4,2 m`, `4,2 é o número que multiplica s na equação (4,2s = 12,6). Falta dividir: s = 12,6 ÷ 4,2.`],
   [`5,2 m`, `Você fez 7 − 1,8, como se a diferença se mantivesse. Em semelhança o que se mantém é a razão.`],
   [`3 m`, ``]
 ], a:4, e:`<ol><li>Há dois triângulos retângulos semelhantes com o mesmo ângulo na ponta da sombra: o grande (poste de 6 m, base 7 + s) e o pequeno (Ana, 1,8 m, base s).</li><li>[[6|7 + s]] = [[1,8|s]] → 6s = 1,8 · (7 + s) → 6s = 12,6 + 1,8s.</li><li>4,2s = 12,6 → s = <b>3 m</b>.</li></ol>`},

/* ===== m-pit · Pitágoras e relações métricas (5) ===== */
 {t:'m-pit', d:1, q:`Uma pipa está a 15 m de altura, exatamente acima de um ponto do chão que fica a 8 m da mão de Lucas. Desprezando a altura de Lucas e supondo a linha bem esticada (reta), qual é o comprimento da linha?`, o:[
   [`23 m`, `Você somou os catetos (15 + 8). Em Pitágoras somamos os <b>quadrados</b>.`],
   [`7 m`, `Você subtraiu os catetos (15 − 8). A linha é a hipotenusa: some os quadrados.`],
   [`√{161} m`, `Você subtraiu os quadrados (225 − 64), mas a linha é a <b>hipotenusa</b>: aqui os quadrados se somam.`],
   [`17 m`, ``],
   [`289 m`, `289 é o quadrado da hipotenusa. Faltou tirar a raiz: √{289} = 17.`]
 ], a:3, e:`<ol><li>Altura (15) e distância no chão (8) são os catetos; a linha é a hipotenusa.</li><li>a² = 15² + 8² = 225 + 64 = 289 → a = <b>17 m</b> (terno 8-15-17).</li></ol>`},

 {t:'m-pit', d:2, q:`Uma escada de 2,5 m está apoiada num muro vertical e toca o muro a 2,4 m de altura. A que distância do muro está o pé da escada?`, o:[
   [`0,7 m`, ``],
   [`0,1 m`, `Você subtraiu as medidas (2,5 − 2,4). É preciso subtrair os <b>quadrados</b> e depois tirar a raiz.`],
   [`0,49 m`, `0,49 é o quadrado da distância. Faltou tirar a raiz: √{0,49} = 0,7.`],
   [`4,9 m`, `Você somou 2,5 + 2,4. Além disso, a distância tem que ser menor que a escada (a hipotenusa)!`],
   [`0,07 m`, `Errou a vírgula na raiz: 0,07² = 0,0049. O certo é 0,7² = 0,49.`]
 ], a:0, e:`<ol><li>A escada (2,5 m) é a hipotenusa; a altura (2,4 m) é um cateto.</li><li>d² = 2,5² − 2,4² = 6,25 − 5,76 = 0,49.</li><li>d = √{0,49} = <b>0,7 m</b> (é o terno 7-24-25 dividido por 10).</li></ol>`},

 {t:'m-pit', d:2, q:`Um marceneiro quer montar um esquadro (triângulo retângulo) com três ripas de madeira. Qual destes trios de medidas, em centímetros, forma um triângulo retângulo?`, o:[
   [`7, 24 e 26`, `7² + 24² = 49 + 576 = 625 = 25², e não 26² (676). Quase, mas não é retângulo.`],
   [`10, 20 e 30`, `Você conferiu se a soma dos menores dá o maior (10 + 20 = 30), mas a recíproca de Pitágoras usa quadrados. Aliás, com essas medidas nem se forma um triângulo.`],
   [`12, 16 e 21`, `12² + 16² = 144 + 256 = 400 = 20², e não 21² (441).`],
   [`8, 15 e 18`, `8² + 15² = 64 + 225 = 289 = 17², e não 18² (324).`],
   [`10, 24 e 26`, ``]
 ], a:4, e:`Pela <b>recíproca de Pitágoras</b>, o triângulo é retângulo se o quadrado do maior lado for igual à soma dos quadrados dos outros dois.<br>10² + 24² = 100 + 576 = 676 = 26² ✔ (é o terno 5-12-13 multiplicado por 2).`},

 {t:'m-pit', d:3, q:`Um triângulo retângulo tem catetos de 15 cm e 20 cm. Qual é a medida da altura relativa à hipotenusa?`, o:[
   [`25 cm`, `25 cm é a hipotenusa. A altura relativa à hipotenusa é perpendicular a ela e sai do vértice do ângulo reto.`],
   [`9 cm`, `9 cm é a projeção do cateto de 15 cm sobre a hipotenusa (15² ÷ 25), não a altura.`],
   [`12 cm`, ``],
   [`150 cm`, `150 é a área do triângulo (em cm²). Use a · h = b · c para achar a altura.`],
   [`17,5 cm`, `Você fez a média dos catetos. Não existe essa regra; use a · h = b · c.`]
 ], a:2, e:`<ol><li>Hipotenusa: a² = 15² + 20² = 225 + 400 = 625 → a = 25 (terno 3-4-5 × 5).</li><li>Relação métrica: a · h = b · c → 25h = 15 · 20 = 300.</li><li>h = 300 ÷ 25 = <b>12 cm</b>.</li></ol>`},

 {t:'m-pit', d:3, q:`Num jogo de caça ao tesouro, Bia sai da largada e anda 10 km para o norte, depois 6 km para o leste, depois 2 km para o sul e, por fim, 9 km para o leste. Qual é a distância, em linha reta, entre o ponto final e a largada?`, o:[
   [`27 km`, `27 km é o total percorrido (10 + 6 + 2 + 9). A pergunta pede a distância em linha reta.`],
   [`17 km`, ``],
   [`23 km`, `Você achou os deslocamentos certos (8 km e 15 km), mas somou. Eles são catetos: use Pitágoras.`],
   [`7 km`, `Você subtraiu os deslocamentos (15 − 8). Eles são catetos: some os quadrados.`],
   [`289 km`, `289 é o quadrado da distância. Faltou tirar a raiz.`]
 ], a:1, e:`<ol><li>Deslocamento norte–sul: 10 − 2 = 8 km para o norte.</li><li>Deslocamento leste: 6 + 9 = 15 km.</li><li>Esses são os catetos: d² = 8² + 15² = 64 + 225 = 289 → d = <b>17 km</b>.</li></ol>`},

/* ===== m-circ · Circunferência (3) ===== */
 {t:'m-circ', d:1, q:`Uma pizza circular de 20 cm de raio é cortada em 8 fatias iguais, com todos os cortes passando pelo centro. Qual é o comprimento da borda (o arco) de cada fatia? (Use π ≈ 3.)`, o:[
   [`7,5 cm`, `Você usou π · r (60 cm) para a volta toda. O comprimento da circunferência é 2πr.`],
   [`30 cm`, `Você usou o diâmetro (40 cm) no lugar do raio na fórmula C = 2πr.`],
   [`150 cm`, `Você calculou a área de cada fatia (π · r² ÷ 8, em cm²), e não o comprimento da borda.`],
   [`15 cm`, ``],
   [`120 cm`, `120 cm é a borda da pizza inteira. Falta dividir por 8 fatias.`]
 ], a:3, e:`<ol><li>Borda inteira: C = 2πr = 2 · 3 · 20 = 120 cm.</li><li>Cada fatia tem ângulo central de 360° ÷ 8 = 45°, isto é, [[1|8]] da volta.</li><li>Arco: 120 ÷ 8 = <b>15 cm</b>.</li></ol>`},

 {t:'m-circ', d:2, q:`O triângulo ABC está inscrito numa circunferência (seus três vértices estão sobre ela), e o lado AB é um diâmetro. Se o ângulo do vértice A mede 34°, quanto mede o ângulo do vértice B?`, o:[
   [`56°`, ``],
   [`34°`, `Você supôs que o triângulo é isósceles, mas nada garante isso. Use o ângulo reto em C.`],
   [`146°`, `Você fez 180° − 34° e esqueceu o ângulo C, que mede 90°.`],
   [`68°`, `Você dobrou o ângulo A. Não há ângulo central aqui; o que importa é que C é reto.`],
   [`90°`, `90° é o ângulo do vértice C (inscrito que "olha" o diâmetro), não o de B.`]
 ], a:0, e:`<ol><li>O ângulo C é inscrito e "olha" para o diâmetro AB → C = 90°.</li><li>Soma dos ângulos do triângulo: 34° + B + 90° = 180°.</li><li>B = 180° − 124° = <b>56°</b>.</li></ol>`},

 {t:'m-circ', d:3, q:`Três pontos A, B e C estão sobre uma circunferência e a dividem em três arcos: o arco AB que não contém C mede 2x, o arco BC que não contém A mede 3x e o arco CA que não contém B mede 4x. Quanto mede o ângulo inscrito ABC (com vértice em B)?`, o:[
   [`160°`, `160° é o arco CA. O ângulo inscrito mede a <b>metade</b> do arco que ele "olha".`],
   [`40°`, `40 é o valor de x. O ângulo ABC olha o arco CA (4x = 160°) e mede a metade dele.`],
   [`80°`, ``],
   [`60°`, `60° é a metade do arco BC, que é o ângulo do vértice A. O ângulo com vértice em B olha o arco CA.`],
   [`100°`, `Você calculou o suplemento de 80°. O ângulo inscrito é simplesmente a metade do arco: 160 ÷ 2 = 80°.`]
 ], a:2, e:`<ol><li>Os três arcos fecham a volta: 2x + 3x + 4x = 360° → 9x = 360 → x = 40.</li><li>O ângulo com vértice em B "olha" o arco CA, que não contém B: 4x = 160°.</li><li>Inscrito = metade do arco: 160 ÷ 2 = <b>80°</b>.</li></ol>(Os outros ângulos: A = 60° e C = 40°; 80 + 60 + 40 = 180 ✔)`},

/* ===== m-cart · Plano cartesiano (3) ===== */
 {t:'m-cart', d:1, q:`No mapa quadriculado de um jogo, o personagem está no ponto (−4, 3) e o baú do tesouro no ponto (6, −7). Um portal será colocado exatamente no ponto médio entre os dois. Quais são as coordenadas do portal?`, o:[
   [`(5, −5)`, `Você subtraiu as coordenadas antes de dividir por 2. O ponto médio usa a <b>soma</b>: [[−4 + 6|2]] e [[3 + (−7)|2]].`],
   [`(2, −4)`, `Você somou as coordenadas mas esqueceu de dividir por 2.`],
   [`(−2, 1)`, `Você trocou a ordem do par: primeiro vem o x, depois o y. O certo é (1, −2).`],
   [`(1, 2)`, `Erro de sinal no y: 3 + (−7) = −4, e −4 ÷ 2 = −2.`],
   [`(1, −2)`, ``]
 ], a:4, e:`<ol><li>x do ponto médio: [[−4 + 6|2]] = [[2|2]] = 1.</li><li>y do ponto médio: [[3 + (−7)|2]] = [[−4|2]] = −2.</li><li>Portal em <b>(1, −2)</b>.</li></ol>`},

 {t:'m-cart', d:2, q:`Qual é a distância entre os pontos A(−3, 2) e B(2, 14) do plano cartesiano?`, o:[
   [`17`, `Você somou Δx e Δy (5 + 12). Eles são catetos: some os quadrados.`],
   [`13`, ``],
   [`7`, `Você subtraiu Δy − Δx (12 − 5). Use d² = Δx² + Δy².`],
   [`169`, `169 é d². Faltou tirar a raiz: √{169} = 13.`],
   [`√{145}`, `Erro de sinal no Δx: 2 − (−3) = 2 + 3 = 5, e não −1.`]
 ], a:1, e:`<ol><li>Δx = 2 − (−3) = 5 e Δy = 14 − 2 = 12.</li><li>d² = 5² + 12² = 25 + 144 = 169.</li><li>d = <b>13</b> (terno 5-12-13).</li></ol>`},

 {t:'m-cart', d:3, q:`O ponto M(3, 5) é o ponto médio do segmento AB, e A = (−1, 8). Qual é o comprimento do segmento AB?`, o:[
   [`10`, ``],
   [`5`, `5 é a distância de A até M, que é só a <b>metade</b> do segmento AB.`],
   [`14`, `Você somou Δx e Δy de A até B (8 + 6). Eles são catetos: use Pitágoras.`],
   [`100`, `100 é AB². Faltou tirar a raiz: √{100} = 10.`],
   [`7`, `Você somou Δx e Δy de A até M (4 + 3). Além de não usar Pitágoras, isso é só metade do segmento.`]
 ], a:0, e:`<ol><li>Como M é a média das coordenadas, B = (2 · 3 − (−1), 2 · 5 − 8) = (7, 2).</li><li>De A(−1, 8) a B(7, 2): Δx = 8 e Δy = 6.</li><li>AB² = 8² + 6² = 64 + 36 = 100 → AB = <b>10</b>.</li></ol>Atalho: AM² = 4² + 3² = 25 → AM = 5, e AB = 2 · AM = 10.`}
];

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

/* TREINO · Português · P1 (Leitura e interpretação)
   Textos-base escritos para este guia, exceto os trechos em domínio público com autoria indicada
   (Machado de Assis, Olavo Bilac, Luís de Camões, Gonçalves Dias). */
const TREINO_P1 = [

/* ================= p-impl · Explícito, implícito e inferência (5) ================= */
{t:'p-impl', d:1,
 tx:`<b>Aviso da escola</b><br>A Feira de Ciências da Escola Estadual Monte Azul será realizada no dia 24 de outubro, das 8h às 13h, no ginásio. Neste ano, os projetos dos 9º anos terão como tema a água. A entrada é gratuita, mas cada visitante deve trazer 1 kg de alimento não perecível, que será doado à creche do bairro.`,
 q:`De acordo com o aviso, o que cada visitante precisa levar para entrar na feira?`,
 o:[
  [`1 kg de alimento não perecível.`, ``],
  [`Dinheiro para pagar o ingresso.`, `O aviso diz explicitamente que a entrada é gratuita.`],
  [`Um projeto sobre o tema da água.`, `Quem apresenta projetos sobre a água são os alunos dos 9º anos, não os visitantes. Releia com atenção quem faz o quê.`],
  [`Uma garrafa de água, por causa do tema da feira.`, `Você misturou o tema da feira (a água) com o que se pede ao visitante. Isso não está escrito.`],
  [`Uma autorização assinada pela creche do bairro.`, `A creche só aparece como destino das doações; o texto não fala em autorização.`]
 ], a:0,
 e:`É uma informação <b>explícita</b>: basta voltar ao texto e localizar. A frase final diz: “cada visitante deve trazer 1 kg de alimento não perecível”.`},

{t:'p-impl', d:2,
 q:`Leia a frase de uma notícia esportiva: “Neste domingo, o time do bairro <b>voltou a vencer</b> o campeonato municipal.” A expressão destacada permite concluir que:`,
 o:[
  [`o time venceu o campeonato pela primeira vez.`, `É o contrário: “voltar a” indica que algo já tinha acontecido antes.`],
  [`o time já havia vencido esse campeonato em alguma edição anterior.`, ``],
  [`o time venceu todas as edições do campeonato.`, `“Todas” extrapola o texto. E, se tivesse vencido sempre, não faria sentido dizer “voltou a vencer”.`],
  [`o time vai vencer de novo no ano que vem.`, `O texto fala do passado e do presente; nada garante o futuro.`],
  [`o técnico do time foi trocado neste ano.`, `Nenhuma palavra do texto sustenta essa informação. Inferência precisa de pista.`]
 ], a:1,
 e:`A expressão “voltou a” carrega um <b>pressuposto</b>: só se volta a fazer algo que já se fez antes. Logo, o time já tinha vencido o campeonato em outra ocasião.`},

{t:'p-impl', d:2,
 tx:`<b>Crônica</b><br>Na reunião de condomínio, o síndico apresentou o orçamento da reforma da piscina, e a sala <b>congelou</b>. Ninguém disse uma palavra por quase um minuto, até que dona Cida perguntou, baixinho, se aquele valor era em reais mesmo.`,
 q:`No texto, a palavra “congelou” foi usada com o sentido de:`,
 o:[
  [`esfriou, porque a temperatura da sala caiu.`, `Esse é o sentido literal. O contexto (ninguém disse uma palavra) mostra um sentido figurado.`],
  [`esvaziou, porque os moradores foram embora.`, `Os moradores continuaram na sala: dona Cida até fez uma pergunta.`],
  [`animou-se, porque todos gostaram da reforma.`, `O silêncio e a pergunta de dona Cida indicam espanto, não animação.`],
  [`ficou paralisada e em silêncio, por causa do susto.`, ``],
  [`entrou em discussão, com todos falando ao mesmo tempo.`, `É o oposto: “ninguém disse uma palavra por quase um minuto”.`]
 ], a:3,
 e:`Teste as alternativas no lugar da palavra. A frase seguinte é a pista: “Ninguém disse uma palavra por quase um minuto”. A sala “congelou” = ficou parada, em silêncio, de espanto (sentido figurado).`},

{t:'p-impl', d:2,
 tx:`<b>Diálogo</b><br>No jantar, Pedro olha demoradamente para o prato cheio de brócolis e diz:<br>— Nossa, mãe… hoje o jantar está bem verde, né?`,
 q:`Considerando o contexto, a fala de Pedro sugere que ele:`,
 o:[
  [`está elogiando a cor do prato preparado pela mãe.`, `Você ficou no sentido literal. O olhar demorado e o “Nossa…” mostram outra intenção.`],
  [`quer saber de que cor é o brócolis.`, `Ele não faz uma pergunta real: o “né?” só busca a concordância da mãe.`],
  [`não ficou animado com o brócolis no jantar.`, ``],
  [`é alérgico a verduras.`, `Nada no texto fala em alergia; isso é inventar, não inferir.`],
  [`quer repetir o prato.`, `A reação dele (olhar demorado, “Nossa…”) não indica vontade de comer mais.`]
 ], a:2,
 e:`É um <b>subentendido</b>: a frase não diz “não gostei”, mas o contexto (olhar demorado para o prato, o “Nossa…” e o comentário sobre a cor) leva a essa conclusão.`},

{t:'p-impl', d:3,
 tx:`Minha avó nunca anotou uma receita. Quando eu pedia a medida do bolo de fubá, ela respondia: “Farinha até dar o ponto, açúcar a gosto”. Durante anos, achei que era má vontade. Hoje, tentando repetir o bolo sem ela, percebo que o ponto não estava na receita: estava nas mãos dela, nos anos de cozinha, nas tardes em que me deixava raspar a tigela. Há saberes que não cabem em caderno; aprendem-se ao lado de quem sabe.`,
 q:`O tema central do texto é:`,
 o:[
  [`a receita do bolo de fubá da avó.`, `Esse é o assunto do começo do texto, não a ideia central. O bolo é só o ponto de partida.`],
  [`a má vontade da avó em ensinar a receita.`, `O narrador diz que achou isso “durante anos”, mas depois muda de ideia. Essa interpretação é desmentida pelo próprio texto.`],
  [`a importância de anotar as receitas da família em cadernos.`, `É o contrário do que o texto conclui: “Há saberes que não cabem em caderno”.`],
  [`a superioridade da culinária antiga sobre a moderna.`, `O texto não compara épocas da culinária. A alternativa generaliza e extrapola.`],
  [`o conhecimento que se aprende pela convivência e pela experiência, e não só por instruções escritas.`, ``]
 ], a:4,
 e:`O <b>tema</b> é mais amplo que o assunto. O texto parte do bolo (assunto) para chegar a uma reflexão, resumida na última frase: “Há saberes que não cabem em caderno; aprendem-se ao lado de quem sabe”.`},

/* ================= p-tira · Tirinhas, charges e memes (5) ================= */
{t:'p-tira', d:1,
 tx:`<b>Tirinha</b><br><b>Quadro 1:</b> Lucas entrega o boletim ao pai, com um sorriso sem graça.<br><b>Quadro 2:</b> Close no boletim: Matemática — nota 3,0.<br><b>Quadro 3:</b> O pai, de braços cruzados e sobrancelha erguida, diz: “Excelente! Continue assim que você vai longe!”`,
 q:`Na fala do pai, no último quadro, as palavras “Excelente!” e “vai longe” foram usadas com sentido:`,
 o:[
  [`literal, pois o pai está orgulhoso da nota.`, `A nota 3,0, os braços cruzados e a sobrancelha erguida mostram que ele não está orgulhoso.`],
  [`irônico, pois o pai está, na verdade, desaprovando a nota.`, ``],
  [`informativo, pois o pai explica como funciona o boletim.`, `O pai não explica nada; ele reage à nota.`],
  [`de dúvida, pois o pai não entendeu a nota.`, `Não há sinal de dúvida: a expressão do pai é de reprovação.`],
  [`de incentivo sincero para Lucas manter o mesmo ritmo de estudo.`, `Se fosse sincero, o pai não estaria de braços cruzados diante de uma nota baixa.`]
 ], a:1,
 e:`<b>Ironia</b> = dizer o contrário do que se pensa, e o contexto revela isso. A nota 3,0 e a expressão do pai (pista visual) mostram que “Excelente!” significa, na verdade, “isso está muito ruim”.`},

{t:'p-tira', d:2,
 tx:`<b>Tirinha</b><br><b>Quadro 1:</b> No consultório, o médico diz ao paciente: “O senhor precisa fazer mais exercícios.”<br><b>Quadro 2:</b> O paciente sai do consultório com expressão decidida, punho fechado.<br><b>Quadro 3:</b> Em casa, esparramado no sofá, ele aperta sem parar o controle remoto, trocando de canal, e diz: “Pronto! Já estou exercitando o dedo.”`,
 q:`O humor da tirinha é construído principalmente:`,
 o:[
  [`pelo fato de o médico dar uma recomendação errada.`, `A recomendação do médico é adequada; o problema está no que o paciente faz com ela.`],
  [`pela expressão decidida do paciente no segundo quadro, que já é engraçada por si só.`, `O segundo quadro cria a expectativa; a graça só aparece quando ela é quebrada no último quadro.`],
  [`pela crítica aos programas de televisão.`, `A TV é só o cenário; a tirinha não comenta os programas.`],
  [`pela quebra de expectativa: o paciente interpreta “exercício” de forma conveniente e continua parado.`, ``],
  [`pela demonstração de que trocar de canal é um bom exercício físico.`, `Você levou a fala do personagem a sério. O texto brinca justamente com o absurdo dessa ideia.`]
 ], a:3,
 e:`O 2º quadro cria a expectativa (ele vai mudar de vida!). O 3º quebra essa expectativa: ele continua no sofá e “cumpre” a ordem do médico exercitando só o dedo. <b>Humor = expectativa × surpresa</b>.`},

{t:'p-tira', d:2,
 tx:`<b>Charge</b><br>Num ponto de ônibus, várias pessoas esperam em pé. Todas têm barbas e cabelos enormes, que chegam até o chão, e há teias de aranha entre elas e o banco. Ao lado, uma placa nova e brilhante da prefeitura anuncia: “Nova linha: um ônibus a cada 10 minutos!”`,
 q:`A crítica da charge é construída principalmente:`,
 o:[
  [`pelo contraste entre a promessa da placa e o exagero visual que mostra uma espera muito longa.`, ``],
  [`pela moda de usar barba e cabelo compridos.`, `As barbas não são moda: são um exagero para mostrar quanto tempo as pessoas esperaram.`],
  [`pela falta de limpeza no ponto de ônibus, mostrada pelas teias de aranha.`, `As teias têm a mesma função das barbas: indicar tempo parado. O alvo da crítica é a espera, não a limpeza.`],
  [`pelo elogio à pontualidade da nova linha de ônibus.`, `Você leu só a placa. A imagem desmente a placa, e é daí que nasce a crítica.`],
  [`pela falta de bancos para os passageiros se sentarem.`, `Há um banco na cena; a charge não critica isso.`]
 ], a:0,
 e:`A placa promete ônibus a cada 10 minutos; a imagem mostra, com <b>exagero</b> (barbas até o chão, teias de aranha), que as pessoas esperam há muito tempo. O contraste entre o dito e o mostrado revela a crítica ao transporte público e às promessas não cumpridas.`},

{t:'p-tira', d:3,
 tx:`<b>Tirinha</b><br><b>Quadro 1:</b> O pai, deitado no sofá com o celular na mão, reclama: “Essa juventude de hoje não larga o celular!”<br><b>Quadro 2:</b> Ao lado dele, o filho, lendo um livro grosso, levanta os olhos e encara o pai em silêncio.<br><b>Quadro 3:</b> O pai, sem tirar os olhos da tela, comenta: “Olha só, mais um vídeo falando disso!”`,
 q:`A tirinha provoca humor e, ao mesmo tempo, critica:`,
 o:[
  [`os jovens, que de fato não largam o celular.`, `A imagem mostra o contrário: quem está no celular é o pai; o jovem está lendo.`],
  [`os livros grossos, que afastam os jovens da tecnologia.`, `O livro não é criticado; ele serve para contrastar a atitude do filho com a do pai.`],
  [`os vídeos da internet, por serem todos mentirosos.`, `A tirinha não fala da qualidade dos vídeos. “Todos” é generalização que o texto não sustenta.`],
  [`o filho, por não responder ao pai.`, `O silêncio do filho, olhando para o pai, é uma reação que destaca a contradição do pai, e não um defeito do menino.`],
  [`a incoerência de quem condena nos outros um hábito que também tem.`, ``]
 ], a:4,
 e:`Junte palavra e imagem: o pai critica os jovens por usarem o celular <b>enquanto usa o celular</b>, e o filho faz o oposto (lê). No último quadro, ele ainda assiste a um vídeo sobre o tema, sem perceber a contradição. O alvo da crítica é essa incoerência.`},

{t:'p-tira', d:3,
 tx:`<b>Meme</b><br>Parte de cima, texto: <i>A professora: “A prova vai ser tranquila, só cai o que vimos em aula.”</i><br>Parte de baixo, texto: <i>Eu, saindo da prova:</i><br>Imagem: um gato completamente encharcado, de pelos arrepiados e olhos arregalados, saindo de uma banheira.`,
 q:`Para entender o humor do meme, o leitor precisa perceber que:`,
 o:[
  [`o aluno tomou banho logo depois da prova.`, `Essa é uma leitura literal da imagem. O gato representa o estado do aluno, não um banho real.`],
  [`a imagem do gato assustado contradiz a promessa de que a prova seria tranquila.`, ``],
  [`a prova foi fácil, exatamente como a professora tinha dito.`, `Se fosse fácil, o aluno não sairia com a cara do gato arregalado e encharcado.`],
  [`o meme acusa a professora de ter mentido de propósito para prejudicar a turma.`, `O meme brinca com a diferença entre expectativa e realidade; acusar de má-fé extrapola o texto.`],
  [`o gato pertence à professora e aparece para criticá-la.`, `Nada no meme liga o gato à professora. O “Eu” da legenda indica que o gato representa o aluno.`]
 ], a:1,
 e:`No meme, texto e imagem se completam. A fala da professora cria a expectativa (“tranquila”); a legenda “Eu, saindo da prova” associa o aluno ao gato assustado e encharcado. O contraste mostra, com humor, que a prova não foi nada tranquila.`},

/* ================= p-arg · Texto argumentativo (5) ================= */
{t:'p-arg', d:1,
 tx:`<b>Biscoito recheado não é merenda</b><br>Há quem diga que proibir biscoitos recheados e refrigerantes nas cantinas escolares é exagero, já que cada família deveria decidir o que o filho come. O argumento parece justo, mas esquece que a escola é um espaço de educação, inclusive alimentar. Segundo nutricionistas, crianças que consomem ultraprocessados todos os dias têm mais chance de desenvolver obesidade e diabetes ainda na adolescência. Em Vila Serena, a cantina da escola municipal trocou salgadinhos por frutas e sanduíches naturais: a procura caiu na primeira semana, mas voltou ao normal em um mês. Portanto, as cantinas escolares devem deixar de vender ultraprocessados.`,
 q:`A tese defendida pelo autor é que:`,
 o:[
  [`cada família deve decidir o que o filho come.`, `Essa é a posição contrária, que o autor apresenta para depois rebater.`],
  [`crianças que consomem ultraprocessados têm mais chance de desenvolver obesidade.`, `Isso é um argumento (de autoridade) usado para sustentar a tese, não a tese em si.`],
  [`a procura na cantina de Vila Serena caiu na primeira semana.`, `É um detalhe do exemplo de Vila Serena, e o próprio texto diz que a procura voltou ao normal.`],
  [`as cantinas escolares devem deixar de vender ultraprocessados.`, ``],
  [`as escolas devem ensinar culinária saudável aos alunos.`, `O texto fala em educação alimentar, mas não propõe aulas de culinária. A alternativa extrapola.`]
 ], a:3,
 e:`A tese é a ideia que todos os argumentos sustentam. Ela aparece na conclusão, introduzida por “<b>Portanto</b>”: as cantinas devem deixar de vender ultraprocessados.`},

{t:'p-arg', d:2,
 tx:`<b>Biscoito recheado não é merenda</b><br>Há quem diga que proibir biscoitos recheados e refrigerantes nas cantinas escolares é exagero, já que cada família deveria decidir o que o filho come. O argumento parece justo, mas esquece que a escola é um espaço de educação, inclusive alimentar. Segundo nutricionistas, crianças que consomem ultraprocessados todos os dias têm mais chance de desenvolver obesidade e diabetes ainda na adolescência. Em Vila Serena, a cantina da escola municipal trocou salgadinhos por frutas e sanduíches naturais: a procura caiu na primeira semana, mas voltou ao normal em um mês. Portanto, as cantinas escolares devem deixar de vender ultraprocessados.`,
 q:`No texto, o caso da cantina de Vila Serena é usado para:`,
 o:[
  [`provar que os alunos rejeitam frutas e sanduíches naturais.`, `Você leu só a primeira parte do trecho. O “mas” mostra que a procura voltou ao normal.`],
  [`apresentar a opinião de quem é contra a proibição.`, `A opinião contrária aparece no início do texto (“Há quem diga…”), não no exemplo.`],
  [`mostrar, com um exemplo concreto, que a mudança é possível porque os alunos se adaptam.`, ``],
  [`citar a fala de um especialista em nutrição.`, `O argumento de autoridade (nutricionistas) vem antes; Vila Serena é um exemplo.`],
  [`mostrar que a cantina teve prejuízo com a mudança.`, `O texto não fala em prejuízo; diz que a procura se recuperou em um mês.`]
 ], a:2,
 e:`É um <b>argumento por exemplo</b>: um caso concreto que reforça a tese. O ponto principal está depois do “mas”: a procura voltou ao normal, ou seja, trocar o cardápio funciona.`},

{t:'p-arg', d:2,
 tx:`<b>Trecho do artigo</b><br>“Segundo nutricionistas, crianças que consomem ultraprocessados todos os dias têm mais chance de desenvolver obesidade e diabetes ainda na adolescência.”`,
 q:`Nesse trecho, o autor sustenta sua posição principalmente por meio de um argumento:`,
 o:[
  [`de exemplo, pois conta o caso de uma criança específica.`, `O trecho não narra nenhum caso particular; fala de crianças em geral.`],
  [`de comparação, pois compara duas escolas.`, `Não há comparação entre escolas nesse trecho.`],
  [`de experiência pessoal, pois o autor conta o que viveu.`, `O autor não fala de si; ele atribui a informação a outras pessoas.`],
  [`de ironia, pois diz o contrário do que pensa.`, `O trecho é sério e literal; não há sentido oposto.`],
  [`de autoridade, pois apoia a ideia no saber de especialistas.`, ``]
 ], a:4,
 e:`A expressão “<b>Segundo nutricionistas</b>” mostra que o autor usa a voz de especialistas no assunto para dar credibilidade à sua posição. Isso é <b>argumento de autoridade</b>.`},

{t:'p-arg', d:2,
 q:`O artigo “Biscoito recheado não é merenda” defende que as cantinas escolares deixem de vender ultraprocessados. Qual frase, se acrescentada ao texto, <b>reforçaria</b> essa tese?`,
 o:[
  [`Em outra cidade, alunos que deixaram de comprar refrigerante na cantina passaram a beber mais água durante as aulas.`, ``],
  [`Muitas famílias acreditam que só elas podem decidir o cardápio dos filhos.`, `Isso repete a opinião contrária, que o autor quer rebater.`],
  [`Biscoitos recheados são baratos e fáceis de levar na mochila.`, `Essa frase valoriza o biscoito e favoreceria a posição contrária à do autor.`],
  [`A cantina da escola de Vila Serena foi pintada de verde no ano passado.`, `Informação irrelevante: a cor da cantina não tem relação com a tese.`],
  [`Alguns alunos trazem lanche de casa todos os dias.`, `É uma informação neutra, que não mostra vantagem em tirar os ultraprocessados da cantina.`]
 ], a:0,
 e:`Um argumento só reforça a tese se mostrar uma razão para concordar com ela. O novo exemplo indica um efeito positivo de tirar um ultraprocessado (o refrigerante) da cantina. As outras frases são contrárias, neutras ou irrelevantes.`},

{t:'p-arg', d:3,
 tx:`<b>Cartas do leitor · Tema: dever de casa nas férias</b><br><b>Marta, mãe de aluno:</b> “Dever de casa nas férias ajuda a criança a não esquecer o que aprendeu. Quinze minutos de leitura por dia não tiram a alegria de ninguém.”<br><b>Rogério, professor:</b> “Férias existem para descansar e viver outras experiências. Visitar um museu, jogar bola e ajudar na cozinha também ensinam, e muito, sem precisar de apostila.”`,
 q:`Comparando as duas cartas, é correto afirmar que:`,
 o:[
  [`os dois leitores concordam que as férias devem servir apenas para descansar.`, `Marta defende tarefas nas férias; só Rogério fala em descanso.`],
  [`Rogério é contra qualquer tipo de aprendizado durante as férias.`, `Cuidado: Rogério diz que museu, bola e cozinha “também ensinam”. Ele é contra a tarefa escolar, não contra aprender.`],
  [`Marta acha que a leitura diária tira a alegria das crianças.`, `É o contrário: ela diz que quinze minutos de leitura “não tiram a alegria de ninguém”.`],
  [`Marta defende tarefas para manter o que foi aprendido, e Rogério defende férias sem tarefas escolares, pois outras experiências também ensinam.`, ``],
  [`os dois leitores consideram a apostila indispensável nas férias.`, `Rogério diz justamente que se aprende “sem precisar de apostila”; Marta nem fala em apostila.`]
 ], a:3,
 e:`São <b>posições distintas sobre o mesmo tema</b>. Marta: a favor do dever nas férias (argumento: evitar o esquecimento). Rogério: contra o dever escolar nas férias (argumento: outras experiências também educam). A pegadinha é achar que Rogério é contra aprender.`},

/* ================= p-pub · Publicidade, propaganda e persuasão (5) ================= */
{t:'p-pub', d:1,
 tx:`<b>Cartaz de campanha</b><br>Água parada é casa de mosquito.<br><b>Tampe, vire, limpe.</b><br>10 minutos por semana contra a dengue.`,
 q:`Os verbos “Tampe, vire, limpe”, no imperativo, foram usados para:`,
 o:[
  [`descrever como o mosquito da dengue se reproduz.`, `A reprodução do mosquito é sugerida na primeira frase; os verbos dão ordens ao leitor.`],
  [`contar o que a prefeitura já fez contra a dengue.`, `Os verbos não estão no passado nem falam da prefeitura; eles se dirigem ao leitor.`],
  [`vender produtos de limpeza.`, `Não há marca nem produto à venda. É uma campanha de conscientização.`],
  [`expressar a opinião do autor sobre os mosquitos.`, `Os verbos não avaliam nada; eles orientam ações.`],
  [`orientar o leitor, de forma direta, sobre o que ele deve fazer.`, ``]
 ], a:4,
 e:`O <b>imperativo</b> chama o leitor à ação. Os três verbos curtos indicam atitudes simples para eliminar a água parada, que é a finalidade da campanha.`},

{t:'p-pub', d:1,
 tx:`<b>Anúncio</b><br>Mochila Turma: cabe o caderno, o lanche e o skate.<br>Volta às aulas com estilo!`,
 q:`Pelas escolhas de palavras, o anúncio se dirige principalmente a:`,
 o:[
  [`estudantes jovens, que vão voltar às aulas.`, ``],
  [`professores que preparam o material das aulas.`, `Skate e “estilo” apontam para alunos, não para professores.`],
  [`pais de bebês que procuram bolsas de fraldas.`, `Bebês não levam caderno nem skate para a escola.`],
  [`atletas profissionais de skate.`, `O skate aparece ao lado de caderno e lanche: o foco é a escola, não o esporte profissional.`],
  [`empresários que viajam a trabalho.`, `Nada no anúncio fala em trabalho ou viagem.`]
 ], a:0,
 e:`Pergunte sempre “<b>para quem</b> o texto foi feito?”. Caderno, lanche, skate, “Volta às aulas” e “com estilo” compõem o universo de estudantes adolescentes.`},

{t:'p-pub', d:2,
 tx:`<b>Anúncio</b><br>Tênis <b>Voa</b>.<br>Você não corre. Você <b>decola</b>.`,
 q:`No anúncio, o uso do verbo “decola”, junto com o nome “Voa”, tem como efeito:`,
 o:[
  [`informar que o tênis foi feito para pilotos de avião.`, `Leitura literal. O anúncio usa a imagem do voo de forma figurada.`],
  [`sugerir, com exagero, que o tênis deixa a corrida tão leve e rápida que parece um voo.`, ``],
  [`criticar, com ironia, quem corre devagar.`, `Não há sentido oposto nem crítica; o anúncio elogia o produto.`],
  [`apresentar um dado técnico sobre o peso do tênis.`, `Não há nenhum número ou dado técnico no anúncio.`],
  [`aconselhar o leitor a parar de correr.`, `“Você não corre” não é um conselho: é um jogo de palavras para dizer que, com o tênis, correr vira “voar”.`]
 ], a:1,
 e:`O anúncio cria um <b>exagero</b> (hipérbole) e combina o nome da marca (Voa) com o verbo “decola”: a ideia é associar o produto à leveza e à velocidade, persuadindo o leitor.`},

{t:'p-pub', d:2,
 q:`Qual dos textos abaixo é uma <b>propaganda</b> (campanha que divulga uma ideia ou causa) e não uma <b>publicidade</b> (que vende produto ou marca)?`,
 o:[
  [`Livraria Página: 20% de desconto em livros infantis neste fim de semana.`, `Há uma loja e um desconto: o objetivo é vender. É publicidade.`],
  [`Suco Pomar: a fruta inteira na sua caixinha.`, `Divulga uma marca de suco para vender. É publicidade.`],
  [`Academia Ritmo: matrícula grátis até sexta-feira!`, `A matrícula grátis é uma isca para conquistar clientes. É publicidade.`],
  [`Leia para uma criança hoje. A imaginação dela agradece.`, ``],
  [`Banco Fácil: abra sua conta pelo celular em 5 minutos.`, `Oferece um serviço de uma empresa. É publicidade.`]
 ], a:3,
 e:`Pergunte: qual é a <b>finalidade</b>? Só “Leia para uma criança hoje” não tem marca, loja nem produto: ela incentiva um comportamento (ler para crianças). As outras querem conquistar clientes.`},

{t:'p-pub', d:3,
 tx:`<b>Anúncio de operadora de celular</b><br><i>Imagem: uma senhora sorrindo para a tela do celular, numa cozinha simples; na tela, o rosto de um menino acenando.</i><br>Sua avó do outro lado do país. O sorriso dela aqui.<br><b>Conecta</b> — ligações ilimitadas para todo o Brasil.`,
 q:`A estratégia de persuasão do anúncio consiste principalmente em:`,
 o:[
  [`criticar as famílias que moram longe umas das outras.`, `O anúncio não critica ninguém; ele apresenta a distância como algo que o produto ajuda a superar.`],
  [`apresentar dados técnicos que comprovam a qualidade do sinal.`, `Não há dados técnicos; o anúncio aposta na emoção.`],
  [`associar o serviço à aproximação afetiva entre pessoas que estão longe.`, ``],
  [`convencer os idosos a se mudarem para perto dos netos.`, `O anúncio não propõe mudança de cidade; propõe manter o contato pelo celular.`],
  [`usar a opinião de um especialista em telecomunicações.`, `Não há especialista no anúncio. Não confunda apelo emocional com apelo à autoridade.`]
 ], a:2,
 e:`É um <b>apelo à emoção</b>. A imagem e as duas primeiras frases mostram o afeto entre avó e neto; só no final aparece o produto (ligações ilimitadas), apresentado como o meio de manter esse laço apesar da distância.`},

/* ================= p-gen · Gêneros jornalísticos e fato × opinião (3) ================= */
{t:'p-gen', d:1,
 tx:`O novo parque da Lagoa foi aberto no sábado e recebeu cerca de 3 mil visitantes. O espaço conta com pista de caminhada de 2 km, playground e quadra de areia. Porém, a prefeitura não instalou bebedouros, um descuido imperdoável num verão tão quente.`,
 q:`Qual trecho expressa uma <b>opinião</b>?`,
 o:[
  [`“um descuido imperdoável”`, ``],
  [`“recebeu cerca de 3 mil visitantes”`, `É um número que pode ser conferido: é fato.`],
  [`“foi aberto no sábado”`, `A data de abertura pode ser verificada: é fato.`],
  [`“pista de caminhada de 2 km”`, `A medida da pista pode ser verificada: é fato.`],
  [`“a prefeitura não instalou bebedouros”`, `Basta ir ao parque para conferir se há bebedouros: é fato. A opinião está na avaliação que vem depois.`]
 ], a:0,
 e:`<b>Fato</b> pode ser verificado; <b>opinião</b> é julgamento. O adjetivo de avaliação “imperdoável” mostra o julgamento de quem escreve sobre a falta de bebedouros.`},

{t:'p-gen', d:2,
 tx:`Toda manhã, no ponto de ônibus da Rua das Acácias, um senhor de chapéu cumprimenta cada pessoa que chega. Ninguém sabe o nome dele. Ontem ele faltou, e o ponto pareceu mais frio, mesmo com sol. Descobri, então, que um bom-dia repetido por anos vira parte da paisagem.`,
 q:`Pelas características do texto, ele pertence ao gênero:`,
 o:[
  [`notícia, porque relata um fato recente com objetividade.`, `O texto não é objetivo: traz impressões pessoais (“pareceu mais frio”) e uma reflexão em 1ª pessoa.`],
  [`editorial, porque expressa a opinião do jornal sobre um problema da cidade.`, `Não há debate de um problema público nem a voz do jornal; há uma reflexão pessoal sobre o cotidiano.`],
  [`crônica, porque parte de um fato do cotidiano para uma reflexão pessoal.`, ``],
  [`reportagem, porque aprofunda o tema com entrevistas e dados.`, `Não há entrevistas nem dados; o narrador nem sabe o nome do senhor.`],
  [`carta do leitor, porque responde a um texto publicado no jornal.`, `O texto não se dirige ao jornal nem comenta outra publicação.`]
 ], a:2,
 e:`A <b>crônica</b> parte de uma cena simples do dia a dia (o senhor do ponto de ônibus) e a observa com olhar pessoal, em 1ª pessoa (“Descobri”), chegando a uma reflexão leve e poética.`},

{t:'p-gen', d:3,
 tx:`<b>Duas manchetes sobre o mesmo fato</b><br><b>Jornal A:</b> “Passagem de ônibus sobe de R$ 4,40 para R$ 5,00 a partir de segunda-feira”<br><b>Jornal B:</b> “Mais um golpe no bolso: trabalhador pagará R$ 5,00 para andar em ônibus lotados”`,
 q:`Comparando as manchetes, é correto afirmar que:`,
 o:[
  [`as duas tratam de fatos diferentes, pois usam palavras diferentes.`, `As duas falam do mesmo fato (o aumento para R$ 5,00); o que muda é o modo de tratá-lo.`],
  [`a manchete B é mais objetiva, porque informa o novo valor da passagem.`, `As duas informam o valor. O que diferencia B são as palavras de julgamento.`],
  [`a manchete A revela que o jornal A é contra o aumento.`, `A manchete A não usa nenhuma palavra de avaliação; não dá para saber a posição do jornal A.`],
  [`as duas manchetes são apenas opiniões, sem nenhum fato.`, `Ambas trazem um fato verificável: o novo preço da passagem.`],
  [`a manchete A informa de modo mais objetivo, e a B, com palavras como “golpe” e “lotados”, mostra uma posição crítica ao aumento.`, ``]
 ], a:4,
 e:`Textos sobre o mesmo fato podem ter <b>enfoques diferentes</b>. A manchete A só informa (o quê, quanto, quando). A B escolhe palavras de avaliação (“golpe no bolso”, “lotados”) que revelam a posição crítica do jornal.`},

/* ================= p-fake · Fake news (3) ================= */
{t:'p-fake', d:1,
 tx:`<b>Mensagem recebida num aplicativo</b><br>ATENÇÃO!!! A partir de amanhã, quem não atualizar o cadastro no link abaixo vai PERDER O CPF!!! Repasse para todos os seus contatos!!!<br>www.cpf-atualiza-governo.net.co`,
 q:`Quais elementos da mensagem são sinais de alerta de que ela pode ser falsa?`,
 o:[
  [`O uso da língua portuguesa e a menção ao CPF.`, `Escrever em português e falar de CPF não torna uma mensagem falsa.`],
  [`O fato de a mensagem ser curta e enviada por aplicativo.`, `Mensagens verdadeiras também podem ser curtas e circular por aplicativo. O tamanho não é o problema.`],
  [`A presença de uma data, já que notícias verdadeiras nunca têm prazo.`, `Notícias verdadeiras podem ter prazos. Desconfie de “nunca”.`],
  [`O tom alarmista, com caixa alta e “!!!”, o pedido urgente de compartilhamento e o endereço que imita um site do governo.`, ``],
  [`O assunto ser cadastro, porque nenhum órgão público faz cadastros.`, `Órgãos públicos fazem cadastros, sim. A generalização está errada.`]
 ], a:3,
 e:`Use o checklist: <b>tom</b> sensacionalista (CAIXA ALTA, “!!!”), <b>urgência</b> para compartilhar, ameaça exagerada e <b>endereço estranho</b>, que imita um órgão oficial sem ser um site oficial do governo.`},

{t:'p-fake', d:2,
 tx:`Uma foto de uma rua alagada, com carros quase submersos, circula hoje nas redes com a legenda: “Centro de Vila Nova do Sul AGORA!”. Uma busca reversa de imagem mostra que a mesma foto foi publicada em 2016, numa reportagem sobre uma enchente em outro país.`,
 q:`Sobre essa publicação, é correto afirmar que:`,
 o:[
  [`ela é verdadeira, porque a foto é real e não foi editada.`, `A foto é real, mas a legenda mente sobre o lugar e a data. Isso também desinforma.`],
  [`ela desinforma, porque usa uma foto verdadeira fora de seu contexto original.`, ``],
  [`ela é uma sátira, porque exagera a situação para fazer humor.`, `Não há intenção de humor: a legenda quer que o leitor acredite que a cena é de hoje.`],
  [`só seria fake news se a foto tivesse sido montada em computador.`, `Esse é o erro mais comum: desinformação não depende de montagem. Descontextualizar já engana.`],
  [`ela não causa problema, porque enchentes acontecem em todo lugar.`, `Mesmo assim, a legenda faz o leitor acreditar em algo falso sobre a cidade, o que pode gerar pânico.`]
 ], a:1,
 e:`A foto é verdadeira, mas a legenda muda o <b>lugar e a data</b>. Isso é <b>descontextualização</b>: uma informação real apresentada fora do contexto também é desinformação.`},

{t:'p-fake', d:3,
 tx:`O site <b>O Pepino Diário</b>, conhecido por publicar notícias inventadas para fazer humor, divulgou a manchete: “Aluno cria aplicativo que faz o dever de casa sozinho, e professores entram em greve de fome”.`,
 q:`Sobre essa manchete, a avaliação mais adequada é:`,
 o:[
  [`é fake news, pois toda notícia inventada é fake news, não importa onde seja publicada.`, `A sátira inventa fatos de propósito e se apresenta como humor. Não tem a intenção de enganar.`],
  [`é uma notícia confiável, pois foi publicada em um site.`, `Estar publicado em um site não garante nada; além disso, este site é conhecido pelo humor.`],
  [`é uma reportagem, pois aprofunda o tema da tecnologia na educação.`, `Não há aprofundamento, dados nem entrevistas; é uma manchete de humor.`],
  [`é uma propaganda que quer vender o aplicativo citado.`, `O aplicativo é inventado; não há produto à venda.`],
  [`é sátira, mas pode desinformar se for compartilhada sem contexto, como se fosse verdade.`, ``]
 ], a:4,
 e:`O veículo é conhecido pelo humor e a manchete é exagerada de propósito: é <b>sátira</b>, que não é fake news quando o leitor sabe que é humor. Mas, se alguém tirar a manchete do site e compartilhar como verdade, ela passa a enganar.`},

/* ================= p-lit · Narrativa e poema (3) ================= */
{t:'p-lit', d:1,
 tx:`“Uma noite destas, vindo da cidade para o Engenho Novo, encontrei no trem da Central um rapaz aqui do bairro, que eu conheço de vista e de chapéu.”<br>(Machado de Assis, <i>Dom Casmurro</i>, 1899)`,
 q:`O foco narrativo desse trecho é:`,
 o:[
  [`3ª pessoa, com narrador observador.`, `O narrador não conta de fora: ele diz “encontrei” e “eu conheço”.`],
  [`3ª pessoa, com narrador onisciente.`, `Não há narrador de fora que saiba o que os personagens pensam; quem fala participa da cena.`],
  [`1ª pessoa, com narrador-personagem.`, ``],
  [`eu lírico, porque o texto é um poema.`, `O trecho está em prosa (não há versos). Eu lírico é a voz do poema.`],
  [`não há narrador, porque o texto é um diálogo.`, `Não há falas de personagens com travessão ou aspas internas; há alguém narrando.`]
 ], a:2,
 e:`As marcas de 1ª pessoa (“<b>encontrei</b>”, “<b>eu</b> conheço”) mostram que quem conta a história também participa dela: é um <b>narrador-personagem</b>.`},

{t:'p-lit', d:2,
 tx:`— Amanhã eu trago o seu livro — prometeu Caio à colega.`,
 q:`Qual alternativa passa corretamente a fala de Caio para o <b>discurso indireto</b>?`,
 o:[
  [`Caio prometeu à colega que amanhã eu trago o seu livro.`, `Você só tirou o travessão. No indireto é preciso ajustar o tempo verbal, a pessoa (“eu”) e a marca de tempo.`],
  [`Caio prometeu à colega que no dia seguinte trouxe o livro dela.`, `“Trouxe” indica algo que já aconteceu, mas a fala era uma promessa (futuro).`],
  [`Caio prometeu à colega que no dia seguinte traria o livro dela.`, ``],
  [`Caio prometeu à colega: “Trarei o seu livro amanhã.”`, `Com dois-pontos e aspas, a fala continua em discurso direto.`],
  [`Caio prometeu à colega que no dia seguinte eu traria o seu livro.`, `O “eu” deveria virar 3ª pessoa: no indireto, é o narrador quem reconta a fala de Caio.`]
 ], a:2,
 e:`No discurso indireto, o narrador reconta a fala com “<b>que</b>” e faz ajustes: “trago” (presente com valor de futuro) → “<b>traria</b>”; “eu” → 3ª pessoa; “amanhã” → “<b>no dia seguinte</b>”; “seu livro” → “livro <b>dela</b>”.`},

{t:'p-lit', d:3,
 tx:`Na semifinal do torneio de xadrez da escola, Bia percebeu, aos vinte minutos de partida, que tinha deixado a dama desprotegida. O adversário ainda não tinha notado. Ela prendeu a respiração, fingiu calma e moveu um peão sem importância, torcendo para que ele olhasse para o outro lado do tabuleiro. Ele olhou para a dama. Sorriu. E, para espanto da plateia, ofereceu empate:<br>— Hoje não quero ganhar assim. Você jogou melhor a partida inteira.`,
 q:`O desfecho do conto surpreende o leitor porque:`,
 o:[
  [`o adversário, mesmo percebendo a falha, abre mão da vantagem por reconhecer o mérito de Bia.`, ``],
  [`Bia vence a partida ao capturar a dama do adversário.`, `Quem estava em perigo era a dama de Bia, e a partida termina em empate.`],
  [`o adversário não percebe a falha, e Bia escapa da derrota.`, `O texto diz que “ele olhou para a dama” e sorriu: ele percebeu a falha.`],
  [`Bia desiste da partida antes do fim.`, `Bia não desiste; é o adversário quem oferece o empate.`],
  [`a plateia obriga os jogadores a aceitar o empate.`, `A plateia só fica espantada; a decisão parte do adversário.`]
 ], a:0,
 e:`O <b>conflito</b> é a dama desprotegida; o <b>clímax</b>, o momento em que o adversário olha para ela. A expectativa era que ele aproveitasse o erro. O desfecho surpreende porque ele percebe a falha e, por <b>causa</b> do bom jogo de Bia (“Você jogou melhor”), oferece empate.`},

/* ================= p-inter · Intertextualidade (3) ================= */
{t:'p-inter', d:1,
 q:`O ditado popular diz: “Quem espera sempre alcança.” Qual alternativa é uma <b>paráfrase</b> desse ditado?`,
 o:[
  [`Quem tem paciência acaba conseguindo o que deseja.`, ``],
  [`Quem corre na frente chega primeiro.`, `Defende quase o contrário (pressa, e não paciência). Não mantém o sentido.`],
  [`Quem espera sempre cansa.`, `Imita a forma do ditado, mas muda o sentido: isso é paródia.`],
  [`“Quem espera sempre alcança”, diz o povo.`, `Repetir o ditado entre aspas é citação, não paráfrase.`],
  [`Quem espera demais perde a oportunidade.`, `Diz o oposto do ditado original.`]
 ], a:0,
 e:`<b>Paráfrase</b> = outras palavras, <b>mesmo sentido</b>. “Esperar” → “ter paciência”; “alcançar” → “conseguir o que deseja”. A ideia original foi mantida.`},

{t:'p-inter', d:2,
 tx:`<b>Texto 1</b><br>“Amor é fogo que arde sem se ver, / é ferida que dói, e não se sente;”<br>(Luís de Camões, século XVI)<br><br><b>Texto 2</b> (publicado no mural da escola, na semana de provas)<br>“Prova é fogo que arde sem se ver, / é questão que dói, e não se entende;”`,
 q:`A relação do Texto 2 com o Texto 1 é de:`,
 o:[
  [`paráfrase, pois diz com outras palavras o mesmo que Camões disse sobre o amor.`, `O Texto 2 não fala de amor: mudou o tema e o tom. Paráfrase manteria o sentido.`],
  [`citação, pois reproduz os versos de Camões exatamente como foram escritos.`, `As palavras foram trocadas (“Prova”, “questão”, “não se entende”). Não é cópia fiel.`],
  [`paródia, pois imita a forma dos versos de Camões, mas muda o sentido para fazer humor com as provas.`, ``],
  [`epígrafe, pois aparece no início de uma obra literária.`, `Epígrafe é um trecho de outro autor colocado no início de uma obra; o Texto 2 é um texto novo, num mural.`],
  [`coincidência, pois os dois textos não têm relação.`, `A estrutura é idêntica (“… é fogo que arde sem se ver”). A relação é proposital.`]
 ], a:2,
 e:`Compare o <b>sentido</b>: o Texto 2 copia o ritmo e a estrutura dos versos de Camões, mas troca o amor pela prova, com tom de brincadeira. Imitar mudando o sentido = <b>paródia</b>.`},

{t:'p-inter', d:3,
 tx:`<b>Texto 1</b><br>“Ora (direis) ouvir estrelas! Certo / Perdeste o senso!…”<br>(Olavo Bilac, soneto XIII de “Via Láctea”, 1888)<br><br><b>Texto 2</b> (anúncio)<br>Ora, ouvir estrelas? Pode, sim! Toda sexta-feira à noite, o Planetário Municipal tem sessões com narração ao vivo sobre as constelações. Entrada gratuita.`,
 q:`Ao retomar o verso de Bilac, o anúncio:`,
 o:[
  [`faz uma paráfrase do soneto inteiro, mantendo seu sentido amoroso.`, `O anúncio retoma só um verso e muda o assunto para o planetário. Não mantém o sentido do soneto.`],
  [`critica o poeta por ter dito algo impossível.`, `O anúncio não ataca Bilac; ele aproveita o verso para divulgar uma atração.`],
  [`cita o poeta entre aspas, com seu nome, como argumento de autoridade.`, `O anúncio não usa aspas nem cita o nome do autor; ele apenas faz referência ao verso.`],
  [`não tem relação com o poema, sendo apenas uma coincidência de palavras.`, `“Ora… ouvir estrelas” é uma referência clara e proposital a um verso famoso.`],
  [`dá sentido literal a uma imagem poética, transformando “ouvir estrelas” numa atração real.`, ``]
 ], a:4,
 e:`No poema, “ouvir estrelas” é uma imagem figurada (alguém acha que o eu lírico perdeu o juízo). O anúncio faz uma <b>alusão</b> a esse verso conhecido e o torna quase literal: no planetário você “ouve” as estrelas pela narração. O efeito é despertar curiosidade e valorizar a atração.`}
];

/* TREINO · P2 · Sentido, coesão e argumentação (Português) */
const TREINO_P2 = [

/* ===================== p-conj (5) ===================== */
{t:'p-conj', d:1,
 q:`Leia o aviso enviado no grupo da turma:<br><br>“<b>Já que</b> o ônibus da excursão atrasou, a professora adiou a saída do museu em vinte minutos.”<br><br>A expressão destacada estabelece entre as orações uma relação de:`,
 o:[
  [`condição`, `Condição seria “se” ou “caso”: algo que pode ou não acontecer. Aqui o atraso já aconteceu e é o motivo do adiamento.`],
  [`concessão`, `Concessão (embora, ainda que) mostra um obstáculo que não impede o resultado. O atraso não é obstáculo: é o que provoca o adiamento.`],
  [`causa`, ``],
  [`conclusão`, `A conclusão viria depois de “portanto” ou “por isso”. “Já que” introduz o motivo, não a conclusão.`],
  [`tempo`, `Tempo seria “quando” ou “assim que”. “Já que” não indica o momento, e sim o motivo.`]
 ], a:2,
 e:`“Já que” = porque, visto que, uma vez que. A oração “o ônibus da excursão atrasou” é o <b>motivo</b> de a professora adiar a saída. Logo, a relação é de <b>causa</b>.`},

{t:'p-conj', d:2,
 q:`Leia o cartaz afixado no pátio:<br><br>“<b>Mesmo que</b> chova no sábado, a gincana da escola vai acontecer na quadra coberta.”<br><br>Sem alterar o sentido do cartaz, a expressão destacada pode ser substituída por:`,
 o:[
  [`Ainda que`, ``],
  [`Desde que`, `“Desde que” indica condição: a gincana só aconteceria se chovesse. O cartaz diz que ela acontece com ou sem chuva.`],
  [`Visto que`, `“Visto que” indica causa e afirmaria que a chuva é certa e é o motivo da gincana, o que não é o sentido do cartaz.`],
  [`Logo que`, `“Logo que” indica tempo (assim que). A gincana não depende do momento em que a chuva começa.`],
  [`Para que`, `“Para que” indica finalidade: a gincana aconteceria com o objetivo de fazer chover, o que não faz sentido.`]
 ], a:0,
 e:`“Mesmo que” é conjunção <b>concessiva</b>: admite um obstáculo (a chuva) que <b>não impede</b> o fato principal (a gincana). A outra concessiva da lista é “ainda que” (também valem “embora” e “se bem que”). O verbo continua no subjuntivo: “Ainda que chova…”.`},

{t:'p-conj', d:2,
 q:`Leia a frase de uma reportagem esportiva do jornal da escola:<br><br>“O goleiro machucou a mão no aquecimento, <b>mas</b> defendeu dois pênaltis na final.”<br><br>Qual reescrita <b>mantém o sentido</b> da frase original e está de acordo com a <b>norma-padrão</b>?`,
 o:[
  [`Como machucou a mão no aquecimento, o goleiro defendeu dois pênaltis na final.`, `“Como” no início da frase indica causa: diria que ele defendeu os pênaltis POR CAUSA da mão machucada. O sentido mudou.`],
  [`O goleiro machucou a mão no aquecimento, portanto defendeu dois pênaltis na final.`, `“Portanto” indica conclusão: as defesas seriam consequência lógica da lesão. O original mostra ideias que se opõem.`],
  [`Se machucasse a mão no aquecimento, o goleiro defenderia dois pênaltis na final.`, `“Se” cria uma condição hipotética; o original conta fatos que aconteceram.`],
  [`Embora machucou a mão no aquecimento, o goleiro defendeu dois pênaltis na final.`, `O sentido de concessão está certo, mas “embora” exige verbo no subjuntivo: “embora tenha machucado” (ou “embora houvesse machucado”). “Embora machucou” fere a norma-padrão.`],
  [`Embora tenha machucado a mão no aquecimento, o goleiro defendeu dois pênaltis na final.`, ``]
 ], a:4,
 e:`<ol><li>“Mas” liga duas ideias que se opõem: a lesão (obstáculo) × as defesas (resultado).</li><li>A mesma ideia pode ser dita com <b>concessão</b>: o obstáculo é admitido, mas não impede o resultado.</li><li>Com “embora”, o verbo vai para o <b>subjuntivo</b>: “Embora <b>tenha machucado</b>…”.</li></ol>`},

{t:'p-conj', d:3,
 q:`Leia o trecho do diário de classe:<br><br>“O laboratório de ciências ficou sem energia durante a manhã. A experiência com o microscópio foi, <b>pois</b>, transferida para a tarde. A turma não reclamou, <b>pois</b> já sabia do problema desde a véspera.”<br><br>As duas ocorrências de “pois” indicam, respectivamente:`,
 o:[
  [`causa e causa`, `O primeiro “pois” está deslocado, no meio da oração e entre vírgulas: aí ele equivale a “portanto”, e não a “porque”.`],
  [`conclusão e causa`, ``],
  [`conclusão e conclusão`, `O segundo “pois” abre a oração e explica o motivo de a turma não reclamar (= porque). Não é conclusão.`],
  [`causa e conclusão`, `Você inverteu as posições: deslocado entre vírgulas = conclusão; no início da oração = causa.`],
  [`finalidade e causa`, `Finalidade seria “para que” ou “a fim de que”. Nenhum dos “pois” indica objetivo.`]
 ], a:1,
 e:`O sentido de “pois” depende da <b>posição</b>:<ol><li>“A experiência foi, <b>pois</b>, transferida” → deslocado, entre vírgulas = <b>portanto</b> (conclusão da falta de energia).</li><li>“Não reclamou, <b>pois</b> já sabia” → no início da oração = <b>porque</b> (causa). Algumas gramáticas chamam esse segundo caso de <b>explicação</b>; em qualquer caso, ele dá o motivo, e não a conclusão.</li></ol>`},

{t:'p-conj', d:3,
 q:`Assinale a alternativa em que a relação de sentido indicada entre parênteses para a expressão destacada está <b>correta</b>.`,
 o:[
  [`“<b>Conforme</b> o regulamento, cada equipe terá cinco jogadores.” (tempo)`, `“Conforme” aqui significa “de acordo com”: é conformidade, não tempo.`],
  [`“<b>Quanto mais</b> a gente pratica, mais fácil fica tocar violão.” (comparação)`, `“Quanto mais… mais” mostra que uma coisa aumenta junto com a outra: é proporção.`],
  [`“Ela falou <b>tão</b> alto <b>que</b> acordou o bebê.” (causa)`, `“Tão… que” introduz o efeito de falar alto (acordar o bebê): é consequência. A causa é falar alto, que não vem depois do “que”.`],
  [`“<b>Como</b> estava frio, vestimos o casaco.” (comparação)`, `“Como” no início da frase, com sentido de “já que”, indica causa. Só é comparação em frases como “forte como um touro”.`],
  [`“Saímos cedo <b>para que</b> pegássemos o primeiro ônibus.” (finalidade)`, ``]
 ], a:4,
 e:`“Para que” introduz o <b>objetivo</b> de sair cedo: finalidade. As outras: “conforme” = conformidade; “quanto mais… mais” = proporção; “tão… que” = consequência; “como” no início = causa.`},

/* ===================== p-coes (5) ===================== */
{t:'p-coes', d:1,
 q:`Leia a notícia do mural da escola:<br><br>“Os alunos do 9º ano plantaram vinte mudas de ipê no pátio da escola. Daqui a alguns anos, <b>elas</b> vão dar sombra para quem estiver no recreio.”<br><br>O pronome “elas” retoma:`,
 o:[
  [`os alunos do 9º ano`, `“Os alunos” é masculino; o pronome seria “eles”. E quem vai dar sombra são as árvores, não os alunos.`],
  [`o pátio da escola`, `“O pátio” é masculino e singular; “elas” está no feminino plural.`],
  [`alguns anos`, `“Anos” é masculino. Além disso, anos não dão sombra.`],
  [`as mudas de ipê`, ``],
  [`a escola`, `“A escola” é singular; o pronome seria “ela”. E quem dará sombra são os ipês plantados.`]
 ], a:3,
 e:`Teste trocando o pronome pelo candidato: “Daqui a alguns anos, <b>as mudas de ipê</b> vão dar sombra”. Faz sentido e concorda em gênero e número (feminino plural).`},

{t:'p-coes', d:2,
 q:`Leia a notícia:<br><br>“Na última quinta-feira, um filhote de lobo-guará foi encontrado perto de uma estrada em Minas Gerais. O <b>animal</b>, que estava desidratado, foi levado a um centro de reabilitação. Lá, os veterinários cuidaram <b>dele</b> por duas semanas antes de devolvê-<b>lo</b> à natureza.”<br><br>Sobre as palavras destacadas, é correto afirmar que:`,
 o:[
  [`“animal” retoma o filhote de lobo-guará; “dele” e “lo” retomam o centro de reabilitação.`, `Os veterinários cuidaram do filhote, e não do centro; e quem foi devolvido à natureza também foi o filhote.`],
  [`as três retomam “os veterinários”.`, `“Os veterinários” é plural; “dele” e “lo” estão no singular. Além disso, são os veterinários que cuidam, não os que são cuidados.`],
  [`as três retomam “um filhote de lobo-guará”.`, ``],
  [`“animal” retoma a estrada; “dele” e “lo”, o filhote.`, `“Estrada” é feminino e não estava desidratada. Quem foi levado ao centro foi o filhote.`],
  [`“animal” e “dele” retomam o filhote; “lo” retoma o centro de reabilitação.`, `O centro não poderia ser “devolvido à natureza”. Quem volta para a natureza é o filhote.`]
 ], a:2,
 e:`O texto evita repetir “filhote de lobo-guará” usando três recursos:<ol><li>“o <b>animal</b>”: palavra mais geral (hiperônimo);</li><li>“<b>dele</b>”: pronome (de + ele);</li><li>“devolvê-<b>lo</b>”: pronome oblíquo.</li></ol>Todos se referem ao mesmo ser: o filhote.`},

{t:'p-coes', d:2,
 q:`Leia o trecho do jornal da escola:<br><br>“Na reunião de ontem, a diretora anunciou que a feira de ciências seria adiada e que os projetos poderiam ser entregues até dezembro. <b>Isso</b> deixou os alunos aliviados.”<br><br>O pronome “Isso” retoma:`,
 o:[
  [`o adiamento da feira e a ampliação do prazo para entregar os projetos`, ``],
  [`a diretora`, `“Isso” não se usa para retomar pessoas; para a diretora, o pronome seria “ela”.`],
  [`a reunião de ontem`, `Não foi a reunião em si que aliviou os alunos, e sim o que foi anunciado nela.`],
  [`apenas a palavra “dezembro”`, `Você pegou a palavra mais próxima do pronome. “Isso” retoma uma ideia inteira, não uma palavra isolada.`],
  [`a feira de ciências`, `A feira em si não aliviou ninguém: o que trouxe alívio foi a notícia de que ela seria adiada e de que haveria mais prazo.`]
 ], a:0,
 e:`O pronome demonstrativo “isso” pode retomar uma <b>ideia inteira</b> já dita. O que deixou os alunos aliviados foi o conteúdo do anúncio: a feira adiada e o prazo maior. Teste: “<b>O adiamento e o novo prazo</b> deixaram os alunos aliviados”.`},

{t:'p-coes', d:3,
 q:`Leia a frase:<br><br>“O técnico conversou com o atacante depois do jogo e disse que <b>ele</b> precisava descansar mais.”<br><br>A frase é ambígua, porque não se sabe a quem “ele” se refere. Qual reescrita elimina a dúvida e deixa claro que <b>quem precisa descansar é o atacante</b>?`,
 o:[
  [`O técnico, depois do jogo, conversou com o atacante e disse que ele precisava descansar mais.`, `Mudar a ordem dos termos não resolve: “ele” continua podendo ser o técnico ou o atacante.`],
  [`Depois do jogo, o técnico conversou com o atacante e disse a ele: “Você precisa descansar mais.”`, ``],
  [`O técnico conversou com o atacante depois do jogo e disse que ele mesmo precisava descansar mais.`, `“Ele mesmo” continua ambíguo e ainda sugere que pode ser o próprio técnico.`],
  [`Depois do jogo, o técnico conversou com o atacante e disse: “Eu preciso descansar mais.”`, `A dúvida acabou, mas agora quem precisa descansar é o técnico (“eu”), e não o atacante.`],
  [`O técnico conversou com o atacante depois do jogo e disse que ele, o técnico, precisava descansar mais.`, `A dúvida acabou, mas o sentido ficou o oposto do pedido: quem precisa descansar passou a ser o técnico.`]
 ], a:1,
 e:`Com o discurso direto, o técnico fala com o atacante usando “<b>você</b>”, que só pode ser a pessoa com quem ele conversa: o atacante. Assim a ambiguidade desaparece e o sentido pedido é mantido.`},

{t:'p-coes', d:2,
 q:`Leia o relato de uma viagem de estudo:<br><br>“Visitamos, na cidade, o museu de ciências, <b>cujas</b> salas interativas são famosas, e depois almoçamos no restaurante <b>onde</b> meu avô trabalhou por trinta anos.”<br><br>Os pronomes relativos destacados se referem, respectivamente, a:`,
 o:[
  [`a cidade e o restaurante`, `As salas interativas são do museu, que é o termo imediatamente antes de “cujas”.`],
  [`as salas interativas e o avô`, `“Cujas” indica a quem pertencem as salas, então não pode se referir às próprias salas. E “onde” indica lugar; o avô é uma pessoa.`],
  [`o museu de ciências e a cidade`, `O avô trabalhou no restaurante; “onde” retoma o lugar que vem logo antes dele.`],
  [`a cidade e o museu de ciências`, `Você trocou os dois: as salas são do museu, e o lugar onde o avô trabalhou é o restaurante.`],
  [`o museu de ciências e o restaurante`, ``]
 ], a:4,
 e:`<ol><li>“<b>cujas</b> salas” = as salas <b>do museu</b> (cujo indica posse).</li><li>“o restaurante <b>onde</b> meu avô trabalhou” = trabalhou <b>no restaurante</b> (onde indica lugar físico).</li></ol>`},

/* ===================== p-fig (5) ===================== */
{t:'p-fig', d:1,
 q:`Leia:<br><br>“Quando o despertador tocou, o sol já <b>espiava</b> pela fresta da cortina.”<br><br>A figura de linguagem presente no trecho destacado é:`,
 o:[
  [`metonímia`, `Metonímia troca uma palavra por outra relacionada (ex.: “li Machado de Assis”). Aqui não há troca de palavras, e sim uma ação humana atribuída ao sol.`],
  [`hipérbole`, `Não há exagero na frase.`],
  [`personificação`, ``],
  [`antítese`, `Antítese exige ideias opostas lado a lado, o que não aparece aqui.`],
  [`onomatopeia`, `Onomatopeia imita sons (trim-trim). “Espiava” não reproduz som algum.`]
 ], a:2,
 e:`“Espiar” (olhar de modo disfarçado) é ação de gente. Ao dizer que o sol espiava, o texto dá ao sol um comportamento humano: <b>personificação</b>. O efeito é deixar a cena mais viva, como se o sol estivesse curioso.`},

{t:'p-fig', d:2,
 q:`Lucas mandou esta mensagem para a mãe:<br><br>“Mãe, já estou na fila da cantina há uns <b>três séculos</b>. Acho que vou perder o recreio inteiro!”<br><br>A expressão destacada é um exemplo de:`,
 o:[
  [`hipérbole, usada para enfatizar a demora e a impaciência de Lucas.`, ``],
  [`eufemismo, usado para suavizar a reclamação sobre a fila.`, `Eufemismo suaviza. Lucas faz o contrário: aumenta a demora para reclamar com mais força.`],
  [`ironia, porque Lucas diz o contrário do que pensa.`, `Lucas pensa mesmo que a fila está demorando; ele só exagera. Na ironia, o sentido é o oposto do que se diz.`],
  [`comparação, porque aproxima a fila de três séculos.`, `Comparação precisa de conectivo (“como”, “feito”). Aqui há apenas um exagero de tempo.`],
  [`metonímia, porque troca o tempo pelo lugar.`, `Não há troca de uma palavra por outra relacionada; “três séculos” é um exagero da duração.`]
 ], a:0,
 e:`Ninguém fica três séculos numa fila: é um <b>exagero intencional</b> (hipérbole). O efeito é mostrar a impaciência de Lucas e dar força à reclamação.`},

{t:'p-fig', d:2,
 q:`Leia o trecho de uma crônica sobre a final do campeonato escolar:<br><br>“Quando a bola entrou no último minuto, <b>a arquibancada</b> gritou o nome do goleiro.”<br><br>Na expressão destacada, ocorre:`,
 o:[
  [`antítese, porque o goleiro é oposto à arquibancada.`, `Não há ideias opostas colocadas lado a lado na frase.`],
  [`eufemismo, porque suaviza a comemoração da torcida.`, `Nada foi suavizado; a frase descreve uma comemoração animada.`],
  [`sinestesia, porque mistura a visão com a audição.`, `Sinestesia mistura sensações (ex.: “voz doce”). Aqui não há mistura de sentidos.`],
  [`metonímia, porque o lugar (arquibancada) é usado no lugar das pessoas que estão nele.`, ``],
  [`comparação, porque a torcida é comparada a uma arquibancada.`, `Comparação exige conectivo, como “como”. Não há comparação explícita na frase.`]
 ], a:3,
 e:`Quem gritou foram os <b>torcedores</b> que estavam na arquibancada. O texto troca as pessoas pelo lugar que elas ocupam (continente pelo conteúdo), como em “bebi dois copos”: é <b>metonímia</b>.`},

{t:'p-fig', d:3,
 q:`Leia as duas frases:<br><br>I. “Ontem a torcida chorava; hoje, sorri.”<br>II. “Aquele domingo foi um <b>descanso cansativo</b>: arrumei a casa o dia todo.”<br><br>As figuras de linguagem predominantes em I e II são, respectivamente:`,
 o:[
  [`paradoxo e antítese`, `Você inverteu. Em I, os opostos (chorar × sorrir) estão lado a lado, em momentos diferentes: antítese. Em II, os opostos se fundem na mesma ideia: paradoxo.`],
  [`comparação e sinestesia`, `Não há conectivo de comparação em I, nem mistura de sentidos em II.`],
  [`antítese e hipérbole`, `I está certa, mas em II não há exagero: há a união de ideias contraditórias (descanso que cansa).`],
  [`ironia e paradoxo`, `Em I, não se diz o contrário do que se pensa; apenas se opõem dois momentos (ontem × hoje).`],
  [`antítese e paradoxo`, ``]
 ], a:4,
 e:`<ol><li>Em I, “chorava” e “sorri” são opostos <b>lado a lado</b>, cada um num momento (ontem × hoje): <b>antítese</b>.</li><li>Em II, “descanso” e “cansativo” se <b>fundem</b> numa mesma ideia, uma contradição aparente (o dia de folga cansou): <b>paradoxo</b>.</li></ol>`},

{t:'p-fig', d:3,
 q:`Imagine uma tirinha em três quadros:<br>1º quadro: Caio, distraído, derruba um copo de suco no caderno novo da irmã, Júlia.<br>2º quadro: Júlia olha o caderno encharcado, com as folhas grudadas.<br>3º quadro: Júlia, de braços cruzados, diz: “Parabéns, maninho! Que cuidado admirável!”<br><br>A fala de Júlia no último quadro produz efeito por meio de:`,
 o:[
  [`hipérbole, pois ela exagera o elogio para deixar Caio feliz.`, `Júlia não quer deixar Caio feliz e não está exagerando um elogio sincero: ela critica o descuido.`],
  [`ironia, pois ela elogia o “cuidado” de Caio para, na verdade, criticar seu descuido.`, ``],
  [`eufemismo, pois ela suaviza o problema para não magoar o irmão.`, `Os braços cruzados e a situação mostram irritação. Ela não está suavizando: está criticando de forma indireta.`],
  [`personificação, pois ela atribui sentimentos humanos ao caderno.`, `Caio é uma pessoa e o elogio é dirigido a ele; não há objeto agindo como gente.`],
  [`antítese, pois ela opõe o caderno novo ao caderno molhado.`, `A oposição está na situação desenhada, não na fala. A fala diz o contrário do que Júlia pensa.`]
 ], a:1,
 e:`Júlia diz “cuidado admirável” justamente depois de um grande <b>descuido</b>. Ela afirma o contrário do que pensa para criticar: <b>ironia</b>. O contexto (o suco derramado e os braços cruzados) é o que revela o sentido verdadeiro.`},

/* ===================== p-sent (3) ===================== */
{t:'p-sent', d:1,
 q:`Em qual frase a palavra “pesado” está empregada em sentido <b>conotativo</b> (figurado)?`,
 o:[
  [`A caixa de livros ficou pesada demais para levar sozinho.`, `A caixa tem peso de verdade: sentido literal (denotativo).`],
  [`O caminhão pesado não pôde passar pela ponte velha.`, `O caminhão tem muitas toneladas de verdade: sentido literal.`],
  [`Esse haltere é pesado para quem está começando a treinar.`, `O haltere tem peso real: sentido literal.`],
  [`Depois da discussão, o clima na sala ficou pesado.`, ``],
  [`A mala pesada ficou no porta-malas do carro.`, `A mala tem peso real: sentido literal.`]
 ], a:3,
 e:`Um “clima” não tem quilos. “Pesado”, aí, significa <b>tenso, desconfortável</b>: sentido figurado, ou <b>conotativo</b>. Nas outras frases, “pesado” fala do peso real de objetos (denotação).`},

{t:'p-sent', d:2,
 q:`Imagine uma tirinha em três quadros:<br>1º quadro: O pai, segurando o boletim, chama: “Léo, quero ver as suas <b>notas</b>!”<br>2º quadro: Léo pega o violão, sorridente, e toca: “Dó, ré, mi, fá, sol…”<br>3º quadro: O pai, sério: “As do boletim, Léo.”<br><br>O humor da tirinha se constrói principalmente a partir:`,
 o:[
  [`da ironia do pai, que elogia o filho dizendo o contrário do que pensa.`, `O pai não elogia ninguém; ele apenas esclarece qual sentido de “notas” queria.`],
  [`do exagero do pai ao cobrar as notas do boletim.`, `Não há exagero na fala do pai. A graça vem da confusão entre dois sentidos da mesma palavra.`],
  [`da polissemia da palavra “notas”, que Léo entende (ou finge entender) como notas musicais, e não como notas escolares.`, ``],
  [`de um erro de concordância na fala do pai.`, `“Quero ver as suas notas” está de acordo com a norma-padrão. O humor não vem de erro gramatical.`],
  [`do uso de parônimos, palavras de grafia parecida e sentidos diferentes.`, `Parônimos são palavras diferentes e parecidas (comprimento × cumprimento). Aqui é a mesma palavra, “notas”, com dois sentidos.`]
 ], a:2,
 e:`“Nota” é uma palavra <b>polissêmica</b>: pode ser a avaliação escolar ou o som musical. O pai pensa no boletim; Léo responde com as notas musicais. O 3º quadro desfaz o mal-entendido, e é daí que vem o humor. Aqui o duplo sentido é <b>proposital</b>, um recurso da tirinha.`},

{t:'p-sent', d:3,
 q:`Um anúncio num site de vendas dizia:<br><br>“Vendo bicicleta de criança azul.”<br><br>A frase é ambígua: não fica claro se “azul” se refere à bicicleta ou à criança. Qual reescrita elimina essa ambiguidade, deixando claro que <b>a bicicleta é azul</b>?`,
 o:[
  [`Vende-se bicicleta de criança azul.`, `Trocar “vendo” por “vende-se” não mexe no problema: “azul” continua logo depois de “criança”.`],
  [`Vendo bicicleta de criança que é azul.`, `O “que” pode retomar tanto “bicicleta” quanto “criança”, então a dúvida continua.`],
  [`Vendo bicicleta de uma criança azul.`, `Piorou: com “uma criança azul”, a leitura mais provável passa a ser a de que a criança é azul.`],
  [`Vendo bicicleta azul de criança.`, ``],
  [`Vendo, com urgência, bicicleta de criança azul.`, `A informação nova não muda a posição de “azul”, que segue ao lado de “criança”.`]
 ], a:3,
 e:`A ambiguidade nasce da <b>posição</b> do adjetivo: colado em “criança”, “azul” parece qualificar a criança. Colocando-o logo depois de “bicicleta” (“bicicleta <b>azul</b> de criança”), só há uma leitura. Num anúncio de venda, esse duplo sentido é <b>falha</b>, não recurso de humor.`},

/* ===================== p-modal (3) ===================== */
{t:'p-modal', d:1,
 q:`Leia o aviso da coordenação:<br><br>“<b>Provavelmente</b>, a nova quadra poliesportiva será inaugurada em março.”<br><br>A palavra destacada indica que a coordenação:`,
 o:[
  [`considera a inauguração em março possível, mas não garantida.`, ``],
  [`tem certeza absoluta da data de inauguração.`, `Para certeza, o aviso usaria “certamente” ou “sem dúvida”. “Provavelmente” deixa margem para mudança.`],
  [`lamenta que a quadra só fique pronta em março.`, `Lamento seria expresso por “infelizmente”. “Provavelmente” não traz avaliação de bom ou ruim.`],
  [`está obrigada por lei a inaugurar a quadra em março.`, `Obrigação seria “é preciso”, “deve-se”. Não há ideia de dever na frase.`],
  [`informa o local exato da inauguração.`, `“Provavelmente” não indica lugar; ele mostra o grau de certeza de quem escreve.`]
 ], a:0,
 e:`“Provavelmente” é um <b>modalizador de possibilidade</b>: mostra que quem escreve acha a informação provável, mas não certa. Trocar por “certamente” mudaria o sentido de hipótese para certeza.`},

{t:'p-modal', d:2,
 q:`Leia a frase do jornal da escola:<br><br>“Em entrevista, o organizador do interclasse <b>admitiu</b> que houve atraso na entrega das camisetas dos times.”<br><br>Ao escolher o verbo “admitiu”, e não “afirmou”, o redator sugere que:`,
 o:[
  [`a informação sobre o atraso não está comprovada e pode ser falsa.`, `Essa ideia seria transmitida por “alegou”. “Admitir” é reconhecer algo como verdadeiro.`],
  [`o organizador apenas deu uma informação neutra, sem peso nenhum.`, `Esse seria o efeito de “afirmou” ou “disse”, verbos neutros. “Admitiu” não é neutro.`],
  [`o atraso ainda vai acontecer no futuro.`, `“Houve atraso” está no passado. O verbo de fala não muda o tempo do fato.`],
  [`o organizador reconheceu, talvez a contragosto, um fato negativo.`, ``],
  [`o organizador comemorou o atraso das camisetas.`, `“Admitir” não expressa alegria; ao contrário, indica reconhecer algo desfavorável.`]
 ], a:3,
 e:`Verbos que introduzem falas também opinam. “<b>Admitiu</b>” indica que o organizador <b>reconheceu</b> algo negativo (o atraso), talvez a contragosto. “Afirmou” seria neutro; “alegou” sugeriria falta de prova.`},

{t:'p-modal', d:3,
 q:`Leia o trecho de um artigo de opinião publicado no jornal da escola. Assinale a alternativa que explica corretamente o papel das palavras destacadas.`,
 tx:`A biblioteca da escola precisa funcionar em mais horários. Hoje, ela abre <b>apenas</b> duas tardes por semana. Muitos alunos dependem do espaço para estudar e fazer pesquisas; <b>até</b> os professores reclamam que não conseguem retirar livros a tempo. <b>Ou seja</b>, o horário atual não atende à comunidade escolar.`,
 o:[
  [`“apenas” indica tempo; “até” indica um limite de lugar; “ou seja” indica oposição ao que foi dito.`, `“Apenas” não marca tempo, “até” não marca lugar nesse trecho, e “ou seja” não opõe ideias: ele reformula.`],
  [`“apenas” expressa dúvida do autor; “até” acrescenta um argumento fraco; “ou seja” apresenta uma alternativa, como “ou”.`, `“Apenas” não indica dúvida; “até” traz o argumento mais forte, não o mais fraco; e “ou seja” não oferece escolha entre opções.`],
  [`“apenas” restringe e reforça que o horário é pequeno; “até” introduz o argumento mais forte e inesperado; “ou seja” introduz uma explicação que reformula e resume o que foi dito.`, ``],
  [`“apenas” restringe o horário; “até” indica limite de tempo, como em “até as cinco horas”; “ou seja” introduz uma explicação.`, `Duas partes estão certas, mas “até os professores” não indica limite de tempo: indica que o problema atinge até quem menos se esperaria.`],
  [`“apenas” amplia o número de horários; “até” introduz uma conclusão; “ou seja” indica causa.`, `“Apenas” faz o contrário de ampliar: restringe. A conclusão do texto vem com “ou seja”, e “até” não indica conclusão.`]
 ], a:2,
 e:`Os <b>operadores argumentativos</b> orientam o leitor:<ol><li>“<b>apenas</b>” restringe: duas tardes são pouco;</li><li>“<b>até</b>” traz o argumento mais forte (se até os professores são prejudicados, o problema é sério);</li><li>“<b>ou seja</b>” reformula, explicando o que os dados mostram.</li></ol>`}

];

/* TREINO · P3 · Gramática a serviço do texto (30 questões) */
const TREINO_P3 = [

/* ===== p-per · Período composto (5) ===== */
{t:'p-per', d:1, q:`“Choveu muito durante a madrugada, <b>mas</b> o jogo foi mantido.”<br>A conjunção “mas” estabelece entre as duas orações uma relação de:`, o:[
  [`conclusão.`, `Conclusão seria “logo”, “portanto”: o jogo mantido não é consequência lógica da chuva.`],
  [`causa.`, `A chuva não é a causa de o jogo ser mantido; ao contrário, ela poderia ter cancelado o jogo.`],
  [`oposição, com quebra de expectativa.`, ``],
  [`alternância.`, `Alternância seria “ou… ou”: as duas ideias aconteceram, não uma excluindo a outra.`],
  [`explicação.`, `Explicação seria “pois”, “porque”: a segunda oração não explica a primeira.`]
 ], a:2, e:`<b>Mas</b> é conjunção coordenativa <b>adversativa</b>: liga duas orações independentes com ideia de oposição.<br>Quem lê “choveu muito” espera que o jogo seja cancelado; o “mas” anuncia o contrário: o jogo foi mantido.`},

{t:'p-per', d:2, q:`Leia a manchete de um jornal escolar:<br>“<b>Embora</b> estivesse perdendo por 2 a 0 no intervalo, o time do 9º ano conseguiu virar o jogo.”<br>Qual conjunção pode substituir “embora” <b>sem alterar o sentido</b> da frase?`, o:[
  [`Porque`, `“Porque” indica causa. Estar perdendo não é o motivo da virada; é um obstáculo a ela.`],
  [`Desde que`, `“Desde que” + subjuntivo indica condição (= “contanto que”), e o sentido seria outro.`],
  [`À medida que`, `“À medida que” indica proporção (uma coisa aumenta junto com outra).`],
  [`Ainda que`, ``],
  [`Para que`, `“Para que” indica finalidade: o time não estava perdendo com o objetivo de virar.`]
 ], a:3, e:`“Embora” introduz uma oração subordinada adverbial <b>concessiva</b>: apresenta um obstáculo (estar perdendo) que <b>não impediu</b> o fato principal (virar o jogo).<br>Outras conjunções concessivas: <b>ainda que, mesmo que, se bem que</b>.<br>“Ainda que estivesse perdendo por 2 a 0…” mantém o mesmo sentido.`},

{t:'p-per', d:2, q:`“<b>Ao perceber o erro no placar</b>, o árbitro corrigiu a súmula.”<br>A oração destacada é reduzida de infinitivo. Qual alternativa a transforma em oração desenvolvida, <b>mantendo o sentido</b>?`, o:[
  [`Embora tenha percebido o erro no placar, o árbitro corrigiu a súmula.`, `“Embora” traz ideia de concessão (obstáculo), o que não combina: perceber o erro não atrapalha a correção.`],
  [`Quando percebeu o erro no placar, o árbitro corrigiu a súmula.`, ``],
  [`Para perceber o erro no placar, o árbitro corrigiu a súmula.`, `“Para” indica finalidade: ele não corrigiu a súmula com o objetivo de perceber o erro; foi o contrário.`],
  [`Se não percebesse o erro no placar, o árbitro corrigiu a súmula.`, `Essa versão cria uma condição negativa sem lógica: ele corrigiu justamente porque percebeu.`],
  [`Assim como percebeu o erro no placar, o árbitro corrigiu a súmula.`, `“Assim como” indica comparação, ideia que não existe na frase original.`]
 ], a:1, e:`A construção <b>ao + infinitivo</b> indica, em geral, <b>tempo</b>: “ao perceber” = “quando percebeu”.<br>Desenvolver a oração é colocar a conjunção e o verbo conjugado: <b>Quando percebeu</b> o erro, o árbitro corrigiu a súmula.`},

{t:'p-per', d:3, q:`“O ingresso estava <b>tão</b> caro <b>que</b> muitos torcedores desistiram de ir ao estádio.”<br>Qual reescrita mantém a mesma relação de sentido entre os dois fatos?`, o:[
  [`Embora o ingresso estivesse muito caro, muitos torcedores desistiram de ir ao estádio.`, `“Embora” indica concessão: daria a ideia de que o preço alto deveria levar as pessoas ao estádio, o que é ilógico.`],
  [`Se o ingresso estivesse muito caro, muitos torcedores desistiriam de ir ao estádio.`, `A conjunção “se” transforma um fato em hipótese; no original, o preço alto realmente aconteceu.`],
  [`O ingresso estava muito caro, mas muitos torcedores desistiram de ir ao estádio.`, `“Mas” indica oposição; porém desistir é exatamente o esperado diante do preço alto, não o contrário.`],
  [`Quanto mais caro estava o ingresso, mais torcedores compareceram ao estádio.`, `Essa frase cria uma proporção e ainda inverte o fato: no original, os torcedores desistiram.`],
  [`Como o ingresso estava muito caro, muitos torcedores desistiram de ir ao estádio.`, ``]
 ], a:4, e:`No original, “<b>tão</b> caro <b>que</b>…” liga uma <b>causa</b> (o preço alto) a uma <b>consequência</b> (a desistência). A oração “que muitos torcedores desistiram” é <b>consecutiva</b>.<br>Para manter a mesma relação, basta apresentar a causa com uma conjunção causal: “<b>Como</b> o ingresso estava muito caro, muitos torcedores desistiram”. (“Como” no início da frase = “já que”.)`},

{t:'p-per', d:3, q:`“O aviso <b>que</b> a escola mandou diz <b>que</b> a excursão foi adiada.”<br>Sobre as duas ocorrências da palavra “que”, é correto afirmar:`, o:[
  [`A 1ª inicia uma oração adjetiva (pode ser trocada por “o qual”); a 2ª inicia uma oração substantiva, que completa o sentido de “diz”.`, ``],
  [`As duas iniciam orações adjetivas, pois ambas se referem à palavra “aviso”.`, `Só o 1º “que” retoma “aviso”. O 2º não pode ser trocado por “o qual”: “diz o qual a excursão…” não faz sentido.`],
  [`As duas iniciam orações substantivas, pois completam o sentido de verbos.`, `O 1º “que” não completa verbo nenhum: ele caracteriza o substantivo “aviso” (qual aviso? o que a escola mandou).`],
  [`A 1ª inicia uma oração substantiva e a 2ª, uma oração adjetiva.`, `Você inverteu as funções. Teste: “o aviso, o qual a escola mandou” funciona; “diz o qual…” não funciona.`],
  [`A 1ª inicia uma oração adverbial causal e a 2ª, uma oração adjetiva.`, `Não há ideia de causa no 1º “que”: ele não equivale a “porque”, e sim a “o qual”.`]
 ], a:0, e:`<ol><li>1º “que”: retoma “aviso” e pode ser trocado por <b>o qual</b> → pronome relativo → oração <b>adjetiva</b> (qual aviso? <i>o que a escola mandou</i>).</li><li>2º “que”: não retoma nada; introduz o que o aviso diz. Dá para trocar a oração por <b>isso</b>: “diz <i>isso</i>” → oração <b>substantiva</b> (objeto de “diz”).</li></ol>`},

/* ===== p-adj · Orações adjetivas (5) ===== */
{t:'p-adj', d:1, q:`Em uma corrida de bicicletas, o organizador anunciou:<br>“As bicicletas <b>que estavam sem freio</b> foram retiradas da competição.”<br>A partir da frase, entende-se que:`, o:[
  [`todas as bicicletas estavam sem freio e todas foram retiradas.`, `Isso seria o sentido com vírgulas (oração explicativa). Sem vírgulas, a oração restringe o grupo.`],
  [`nenhuma bicicleta foi retirada da competição.`, `A frase afirma claramente que bicicletas foram retiradas.`],
  [`as bicicletas com freio foram retiradas da competição.`, `Você inverteu o grupo: foram retiradas justamente as que estavam sem freio.`],
  [`só uma parte das bicicletas estava sem freio, e apenas essas foram retiradas.`, ``],
  [`todas as bicicletas foram retiradas, mesmo as que tinham freio.`, `A oração sem vírgulas separa um grupo; as bicicletas com freio continuaram na corrida.`]
 ], a:3, e:`Sem vírgulas, a oração “que estavam sem freio” é <b>restritiva</b>: separa uma parte do grupo de bicicletas.<br>Logo, havia bicicletas com freio (que continuaram) e bicicletas sem freio (que foram retiradas).`},

{t:'p-adj', d:2, q:`Em qual das frases a <b>retirada das vírgulas</b> produziria um sentido estranho, sugerindo que a pessoa tem mais de um daquilo que é nomeado?`, o:[
  [`Os livros que estão na estante são da Ana.`, `Aqui a oração restritiva é natural: separa os livros da estante dos outros livros. Não há vírgulas a retirar.`],
  [`Minha mãe, que é enfermeira, trabalha no hospital da cidade.`, ``],
  [`Os alunos que faltaram farão a prova amanhã.`, `Restritiva natural: só os alunos que faltaram farão a prova amanhã. Não há vírgulas a retirar.`],
  [`Comprei a camiseta que estava em promoção.`, `Restritiva natural: entre várias camisetas, comprei a que estava em promoção.`],
  [`As frutas que caíram no chão foram jogadas fora.`, `Restritiva natural: só as frutas que caíram foram descartadas.`]
 ], a:1, e:`Cada pessoa tem uma só mãe. Por isso a oração “que é enfermeira” deve ser <b>explicativa</b> (entre vírgulas): apenas acrescenta uma informação.<br>Sem vírgulas — “Minha mãe que é enfermeira trabalha…” — ela viraria <b>restritiva</b> e daria a entender que existe outra mãe, que não é enfermeira.`},

{t:'p-adj', d:2, q:`Complete a frase de acordo com a norma-padrão:<br>“Conheci um escritor ______ livros foram traduzidos para dez línguas.”`, o:[
  [`cujos os`, `Depois de “cujo” nunca se usa artigo: “cujos os livros” está errado.`],
  [`que os`, `“Um escritor que os livros foram traduzidos” é comum na fala, mas não segue a norma-padrão: falta indicar que os livros são <i>do escritor</i>.`],
  [`cujo`, `“Cujo” concorda com a coisa possuída (livros, masculino plural), e não com o possuidor (escritor).`],
  [`onde os`, `“Onde” só se usa para lugar; escritor não é lugar.`],
  [`cujos`, ``]
 ], a:4, e:`O pronome relativo <b>cujo</b> indica posse (= “do qual”, “de quem”): os livros <b>do escritor</b> → “escritor <b>cujos</b> livros”.<br>Regras: “cujo” concorda com o que vem <b>depois</b> (livros → cujos) e <b>não</b> é seguido de artigo.`},

{t:'p-adj', d:2, q:`Um site de concurso publicou:<br>(I) “Os candidatos que fizeram a prova pela manhã receberão o resultado hoje.”<br>Depois, corrigiu para:<br>(II) “Os candidatos, que fizeram a prova pela manhã, receberão o resultado hoje.”<br>O que a mudança na pontuação alterou?`, o:[
  [`Nada, pois as vírgulas apenas marcam uma pausa na leitura.`, `As vírgulas mudam a oração de restritiva para explicativa, e isso muda quem está incluído no grupo.`],
  [`Em (I), todos fizeram a prova pela manhã; em (II), só alguns.`, `Você inverteu os sentidos: sem vírgulas é que se separa uma parte do grupo.`],
  [`Em (I), havia candidatos que fizeram a prova em outro horário; em (II), entende-se que todos fizeram a prova pela manhã.`, ``],
  [`Em (II), só os candidatos da manhã receberão o resultado hoje; os outros, depois.`, `Esse é o sentido de (I). Em (II), a informação vale para todos os candidatos.`],
  [`Em (II), os candidatos não receberão o resultado hoje.`, `As duas versões afirmam que o resultado sai hoje.`]
 ], a:2, e:`(I) <b>Restritiva</b> (sem vírgulas): separa os candidatos da manhã dos de outro horário. Só eles recebem hoje.<br>(II) <b>Explicativa</b> (entre vírgulas): fala de todos os candidatos e acrescenta que todos fizeram a prova pela manhã.`},

{t:'p-adj', d:3, tx:`<b>AVISO AOS MORADORES</b><br>Os moradores que deixaram bicicletas na garagem devem identificá-las até sexta-feira. As bicicletas, que serão levadas para o novo bicicletário, receberão uma etiqueta com o número do apartamento.<br><i>A administração</i>`, q:`Considerando a pontuação das orações adjetivas do aviso, é correto concluir que:`, o:[
  [`apenas parte dos moradores deixou bicicletas na garagem, mas todas as bicicletas mencionadas irão para o novo bicicletário.`, ``],
  [`todos os moradores deixaram bicicletas na garagem, e apenas algumas bicicletas irão para o novo bicicletário.`, `Você inverteu as duas orações: a 1ª (sem vírgulas) é restritiva; a 2ª (com vírgulas) é explicativa.`],
  [`todos os moradores deixaram bicicletas na garagem, e todas as bicicletas irão para o novo bicicletário.`, `A 1ª oração não tem vírgulas: é restritiva, por isso indica só uma parte dos moradores.`],
  [`apenas parte dos moradores deixou bicicletas, e apenas parte das bicicletas irá para o novo bicicletário.`, `A 2ª oração está entre vírgulas: é explicativa e vale para todas as bicicletas mencionadas.`],
  [`só as bicicletas que não receberem etiqueta irão para o novo bicicletário.`, `O aviso diz que as bicicletas levadas para o bicicletário <i>receberão</i> etiqueta; nada indica exceção.`]
 ], a:0, e:`<ol><li>“Os moradores <b>que deixaram bicicletas na garagem</b>” — sem vírgulas → <b>restritiva</b>: só esse grupo de moradores precisa agir.</li><li>“As bicicletas, <b>que serão levadas para o novo bicicletário</b>,” — com vírgulas → <b>explicativa</b>: a informação vale para todas as bicicletas de que o aviso fala.</li></ol>`},

/* ===== p-vl · Verbos de ligação (3) ===== */
{t:'p-vl', d:1, q:`Em qual frase o verbo “ficar” é <b>de ligação</b>, ligando o sujeito a uma característica?`, o:[
  [`O goleiro ficou na concentração por dois dias.`, `“Na concentração” é lugar, não característica do goleiro: “ficar” aqui = permanecer em um lugar.`],
  [`O goleiro ficou abatido após o gol.`, ``],
  [`O goleiro ficou com a camisa do adversário.`, `“Ficar com” aqui significa guardar, possuir algo: não é característica do goleiro.`],
  [`O goleiro ficou até o fim do treino.`, `“Até o fim do treino” indica tempo, não característica do sujeito.`],
  [`O goleiro ficou no banco de reservas.`, `“No banco de reservas” é lugar: o verbo indica permanência, não estado.`]
 ], a:1, e:`Verbo de ligação liga o sujeito a uma <b>característica/estado</b> (predicativo do sujeito).<br>“Abatido” é um estado do goleiro → “ficou” indica <b>mudança de estado</b> (ele passou a estar abatido).<br>Nas outras frases, depois de “ficou” vem lugar, tempo ou posse.`},

{t:'p-vl', d:2, q:`Ao buscar o filho na casa da avó, a mãe comentou, sorrindo:<br>“Nossa, você <b>está</b> muito educado hoje!”<br>A escolha do verbo “estar”, em vez de “ser”, sugere que:`, o:[
  [`ser educado é uma característica permanente do menino.`, `Essa ideia seria expressa por “ser”: “você é muito educado”.`],
  [`o menino acabou de mudar de comportamento e assim ficará para sempre.`, `“Estar” não indica mudança definitiva; mudança de estado seria “ficar”/“tornar-se”.`],
  [`a mãe não tem certeza de que o menino está educado; é só uma impressão.`, `Essa nuance de aparência seria expressa por “parecer”: “você parece educado”.`],
  [`o bom comportamento é visto como algo do momento, talvez fora do comum para o menino.`, ``],
  [`não há diferença de sentido entre “você é educado” e “você está educado”.`, `Há diferença: “ser” indica característica permanente; “estar”, estado passageiro.`]
 ], a:3, e:`<b>Ser</b> = característica permanente; <b>estar</b> = estado passageiro.<br>Ao dizer “você <b>está</b> educado <b>hoje</b>”, a mãe apresenta o comportamento como algo do momento, o que sugere (com bom humor) que isso não é tão comum.`},

{t:'p-vl', d:3, q:`Compare:<br>(I) “Desde o início do campeonato, Lucas <b>anda</b> nervoso e quase não dorme.”<br>(II) “Todos os dias, Lucas <b>anda</b> até a escola com os colegas.”<br>Sobre o verbo “andar”, é correto afirmar:`, o:[
  [`Nas duas frases, indica a ação de caminhar.`, `Em (I), Lucas não está caminhando: “nervoso” é um estado dele.`],
  [`Nas duas frases, é verbo de ligação.`, `Em (II), depois do verbo vem um lugar (“até a escola”), não uma característica: é ação.`],
  [`Em (I), indica ação; em (II), liga o sujeito a um estado.`, `Você inverteu: é em (I) que aparece a característica (“nervoso”).`],
  [`Em (I), indica característica permanente de Lucas, como “ser”.`, `“Andar” como verbo de ligação indica estado frequente em um período, não característica permanente.`],
  [`Em (I), liga Lucas a um estado frequente naquele período; em (II), indica a ação de caminhar.`, ``]
 ], a:4, e:`Para saber se o verbo é de ligação, veja o que vem depois:<ol><li>(I) “anda <b>nervoso</b>” → característica do sujeito → verbo de ligação, com sentido de estado frequente (= “tem estado nervoso”).</li><li>(II) “anda <b>até a escola</b>” → lugar → verbo de ação (caminhar).</li></ol>`},

/* ===== p-reg · Regência e crase (3) ===== */
{t:'p-reg', d:1, q:`Complete conforme a norma-padrão:<br>“Hoje vou ____ biblioteca e, depois, ____ ginásio.”`, o:[
  [`à — ao`, ``],
  [`a — ao`, `Faltou a crase: “ir a” + “a biblioteca” = “à biblioteca” (troque por masculino: “vou ao museu”).`],
  [`à — à`, `“Ginásio” é masculino: não existe crase antes de palavra masculina.`],
  [`à — o`, `“Ir” pede a preposição “a”: “vou ao ginásio”, e não “vou o ginásio”.`],
  [`a — o`, `Faltou a crase em “à biblioteca” e a preposição em “ao ginásio”: quem vai, vai <b>a</b> algum lugar.`]
 ], a:0, e:`Quem vai, vai <b>a</b> algum lugar.<ol><li>“a” (preposição) + “a biblioteca” (artigo) = <b>à</b> biblioteca.</li><li>“a” (preposição) + “o ginásio” (artigo) = <b>ao</b> ginásio.</li></ol>Truque: se no masculino aparece “ao”, no feminino aparece “à”.`},

{t:'p-reg', d:2, q:`Qual frase segue a norma-padrão quanto à <b>regência</b>?`, o:[
  [`Ela namora com o primo do Léo.`, `Na norma-padrão, “namorar” não pede preposição: “Ela namora o primo do Léo”.`],
  [`Os alunos obedecem o regulamento da escola.`, `“Obedecer” pede a preposição “a”: “obedecem ao regulamento”.`],
  [`Simpatizei com a nova professora de Ciências.`, ``],
  [`Prefiro mais estudar de manhã do que à noite.`, `“Preferir” não admite “mais” nem “do que”: “Prefiro estudar de manhã a estudar à noite”.`],
  [`Assistimos o show pela televisão.`, `No sentido de “ver”, “assistir” pede a preposição “a”: “Assistimos ao show”.`]
 ], a:2, e:`Na norma-padrão: <b>simpatizar com</b> alguém ✔ · <b>namorar</b> alguém (sem “com”) · <b>obedecer a</b> · <b>preferir</b> X <b>a</b> Y · <b>assistir a</b> (ver).<br>As formas erradas das outras alternativas são comuns na fala informal, mas não seguem a norma-padrão.`},

{t:'p-reg', d:3, tx:`<b>COMUNICADO</b><br>O ginásio abrirá ____ 7h. ____ partir desse horário, os atletas terão acesso ____ quadra principal.`, q:`Assinale a alternativa que completa as lacunas de acordo com a norma-padrão:`, o:[
  [`as — A — à`, `Hora exata determinada pede crase: “abrirá às 7h” (compare: “abrirá ao meio-dia”).`],
  [`às — À — à`, `“Partir” é verbo, e antes de verbo nunca há crase: “a partir”.`],
  [`às — A — a`, `“Ter acesso a” + “a quadra” = “à quadra” (compare: “acesso ao campo”).`],
  [`às — A — à`, ``],
  [`as — À — a`, `As três lacunas estão erradas: “às 7h”, “a partir” (verbo) e “à quadra”.`]
 ], a:3, e:`<ol><li>“abrirá <b>às</b> 7h” → hora exata: preposição + artigo “as” (compare “ao meio-dia”).</li><li>“<b>A</b> partir” → antes de verbo nunca há crase.</li><li>“acesso <b>à</b> quadra” → “acesso a” + “a quadra” (troque: “acesso <b>ao</b> campo”).</li></ol>`},

/* ===== p-conc · Concordância (3) ===== */
{t:'p-conc', d:1, q:`Complete conforme a norma-padrão:<br>“Na revisão, a professora percebeu que ______ muitos erros de acentuação na redação.”`, o:[
  [`haviam`, `“Haver” no sentido de existir é impessoal: fica sempre no singular (“havia”).`],
  [`existia`, `“Existir” não é impessoal: concorda com o sujeito “muitos erros” (plural).`],
  [`houveram`, `“Haver” = existir não vai para o plural em nenhum tempo: o certo seria “houve”.`],
  [`hão`, `“Haver” = existir fica no singular; além disso, o tempo verbal não combina com “percebeu”.`],
  [`existiam`, ``]
 ], a:4, e:`Atenção à diferença:<ol><li><b>Haver</b> (= existir) é impessoal → singular: “havia muitos erros”.</li><li><b>Existir</b> é um verbo comum → concorda com o sujeito: “muitos erros <b>existiam</b>” → “<b>existiam</b> muitos erros”.</li></ol>Entre as opções, só “existiam” está correta.`},

{t:'p-conc', d:2, q:`Em qual frase a concordância segue a norma-padrão?`, o:[
  [`Fazem dois anos que o clube não vence um clássico.`, `“Fazer” indicando tempo decorrido é impessoal: “Faz dois anos”.`],
  [`Depois da explicação, ela ficou meia confusa.`, `“Meio” = um pouco (advérbio) não varia: “meio confusa”.`],
  [`Sobrou três vagas para a excursão ao museu.`, `O sujeito “três vagas” está depois do verbo, mas o verbo concorda com ele: “Sobraram três vagas”.`],
  [`Seguem anexas as fotos do passeio da turma.`, ``],
  [`— Muito obrigado, pessoal! — disse a capitã do time.`, `“Obrigado” concorda com quem fala: a capitã deveria dizer “obrigada”.`]
 ], a:3, e:`“<b>Anexo</b>” é adjetivo e concorda com o substantivo: as fotos (feminino plural) → <b>anexas</b>. O verbo “seguem” concorda com o sujeito “as fotos”.<br>Correções das outras: <b>Faz</b> dois anos · <b>meio</b> confusa · <b>Sobraram</b> três vagas · <b>obrigada</b> (dito por mulher).`},

{t:'p-conc', d:3, q:`Complete o trecho conforme a norma-padrão:<br>“No fim do campeonato, ______ ao clube os troféus conquistados, mas ainda ______ muitas dúvidas sobre o futuro do técnico.”`, o:[
  [`chegaram — havia`, ``],
  [`chegou — havia`, `O sujeito de “chegar” é “os troféus conquistados” (plural), mesmo vindo depois do verbo.`],
  [`chegaram — haviam`, `“Haver” no sentido de existir é impessoal: fica no singular.`],
  [`chegou — haviam`, `Os dois verbos estão errados: “os troféus chegaram” e “havia dúvidas”.`],
  [`chegaram — houveram`, `“Haver” = existir não vai para o plural: o certo seria “houve” ou “havia”.`]
 ], a:0, e:`<ol><li>Quem chegou? <b>os troféus conquistados</b> → sujeito no plural, depois do verbo → <b>chegaram</b>. (Ponha na ordem direta: “os troféus chegaram ao clube”.)</li><li>“Haver” = existir → impessoal → <b>havia</b> muitas dúvidas.</li></ol>`},

/* ===== p-col · Colocação pronominal (3) ===== */
{t:'p-col', d:1, q:`De acordo com a norma-padrão, qual frase apresenta a colocação do pronome correta?`, o:[
  [`Já disse-lhe tudo o que sabia.`, `O advérbio “já” atrai o pronome: “Já lhe disse tudo”.`],
  [`Sempre ajudo-te nas tarefas.`, `O advérbio “sempre” atrai o pronome: “Sempre te ajudo”.`],
  [`Ninguém me contou a novidade.`, ``],
  [`Quando vi-o no corredor, corri para cumprimentá-lo.`, `A conjunção “quando” atrai o pronome: “Quando o vi no corredor”.`],
  [`Te espero na saída da escola.`, `Na norma-padrão, não se inicia frase com pronome oblíquo: “Espero-te na saída”.`]
 ], a:2, e:`Palavras como <b>ninguém</b> (pronome indefinido/negativo), <b>já</b>, <b>sempre</b> (advérbios) e <b>quando</b> (conjunção) atraem o pronome para antes do verbo (próclise).<br>Em “<b>Ninguém me</b> contou”, o pronome está corretamente antes do verbo.`},

{t:'p-col', d:2, q:`No grupo de amigos, Bia escreveu: “Me manda o horário da reunião?”. Depois, precisou fazer um pedido parecido por e-mail à diretora da escola. Qual versão é a mais adequada à situação formal e à norma-padrão?`, o:[
  [`Me envie, por favor, o horário da reunião.`, `Na norma-padrão, não se inicia frase com pronome oblíquo.`],
  [`Envie-me, por favor, o horário da reunião.`, ``],
  [`Envia-me aí o horário, beleza?`, `“Aí” e “beleza?” são marcas de linguagem informal, inadequadas num e-mail à diretora.`],
  [`Não envie-me o horário da reunião.`, `Além de mudar o sentido do pedido, o “não” atrai o pronome: seria “Não me envie”.`],
  [`Te peço que me envie o horário da reunião.`, `Começa com pronome oblíquo e mistura “te” com o tratamento formal à diretora.`]
 ], a:1, e:`Entre amigos, “Me manda…” é natural no português brasileiro. Mas num e-mail formal a norma-padrão é a mais adequada: frase iniciada pelo verbo → pronome depois, com hífen (<b>ênclise</b>): “<b>Envie-me</b>, por favor…”.`},

{t:'p-col', d:3, q:`Assinale a alternativa em que a colocação do pronome está de acordo com a norma-padrão <b>e</b> a justificativa está correta.`, o:[
  [`“Quando encontrei-o, já era tarde.” — Ênclise, porque o verbo está no passado.`, `Colocação errada: “quando” atrai o pronome (“Quando o encontrei”). O tempo verbal não decide a colocação.`],
  [`“Me chamaram para o time.” — Próclise, porque o pronome é de 1ª pessoa.`, `Colocação errada na norma-padrão: não se inicia frase com pronome oblíquo (“Chamaram-me”).`],
  [`“Tudo se resolveu no fim.” — Próclise, porque a frase é curta.`, `A colocação está certa, mas a justificativa não: o pronome indefinido “tudo” é que atrai o pronome.`],
  [`“Não esqueça-se do uniforme.” — Ênclise, porque a frase é uma ordem.`, `Colocação errada: o “não” atrai o pronome (“Não se esqueça do uniforme”).`],
  [`“Os alunos que se inscreveram receberão o crachá.” — Próclise, porque o pronome relativo “que” atrai o pronome.`, ``]
 ], a:4, e:`Na norma-padrão, palavras atrativas pedem próclise: negativas (não, nunca), advérbios (já, sempre), pronomes relativos (<b>que</b>), indefinidos (tudo, ninguém) e conjunções subordinativas (quando, se).<br>Em “Os alunos <b>que se</b> inscreveram”, o relativo “que” atrai o pronome: colocação e justificativa corretas.`},

/* ===== p-pont · Pontuação (3) ===== */
{t:'p-pont', d:1, q:`Léo saiu sem guarda-chuva e voltou encharcado. Ao entrar em casa, disse:<br>— Que “ótimo” dia para esquecer o guarda-chuva!<br>As aspas em “ótimo” indicam:`, o:[
  [`ironia: Léo quer dizer o contrário, que o dia foi péssimo para isso.`, ``],
  [`citação da fala de outra pessoa.`, `As aspas não marcam a fala de outra pessoa: é o próprio Léo falando.`],
  [`que “ótimo” é uma palavra estrangeira.`, `“Ótimo” é palavra da língua portuguesa.`],
  [`um elogio sincero ao dia.`, `Léo voltou encharcado: o contexto mostra que ele não está elogiando o dia.`],
  [`o título de uma obra.`, `Não há nenhum livro, filme ou música mencionado.`]
 ], a:0, e:`Aspas podem marcar <b>ironia</b>: a palavra é usada com sentido oposto ao normal.<br>Léo voltou molhado; portanto, o dia foi “ótimo” só ironicamente — na verdade, foi péssimo para esquecer o guarda-chuva.`},

{t:'p-pont', d:2, q:`Compare:<br>(I) “Ana, minha vizinha, viajou.”<br>(II) “Ana, minha vizinha viajou.”<br>Qual é a diferença de sentido provocada pela pontuação?`, o:[
  [`Não há diferença: a vírgula depois de “vizinha” é opcional.`, `A segunda vírgula muda a função de “minha vizinha” e, portanto, quem viajou.`],
  [`Em (I), fala-se com Ana; em (II), Ana é a vizinha que viajou.`, `Você inverteu: em (II) é que “Ana” fica isolada como vocativo.`],
  [`Em (I), “minha vizinha” é aposto, e quem viajou foi Ana; em (II), “Ana” é vocativo: fala-se com Ana para contar que a vizinha viajou.`, ``],
  [`Nas duas frases, “Ana” é vocativo.`, `Em (I), “minha vizinha” está entre vírgulas explicando quem é Ana: é aposto, e Ana é o sujeito.`],
  [`Em (I), duas pessoas viajaram: Ana e a vizinha.`, `Se fossem duas pessoas, seria “Ana e minha vizinha viajaram”. Em (I), “minha vizinha” explica quem é Ana.`]
 ], a:2, e:`<ol><li>(I) “minha vizinha” está <b>entre vírgulas</b> logo após “Ana”: é um <b>aposto</b> (explica quem é Ana). Quem viajou: Ana.</li><li>(II) Só “Ana” está separada: é um <b>vocativo</b> (a pessoa com quem se fala). O sujeito de “viajou” é “minha vizinha”.</li></ol>`},

{t:'p-pont', d:3, q:`Um aluno perguntou à coordenadora: “Vou ter que ficar até o fim da aula?”. Ela respondeu por bilhete, mas há duas versões possíveis:<br>(I) “Não pode sair mais cedo hoje.”<br>(II) “Não, pode sair mais cedo hoje.”<br>Qual é o efeito da vírgula?`, o:[
  [`Nenhum: nas duas versões o aluno é proibido de sair.`, `Em (II), a vírgula separa o “não” do verbo, e o sentido muda para permissão.`],
  [`Em (I), o aluno é liberado; em (II), é proibido de sair.`, `Você inverteu: sem vírgula, o “não” nega “pode sair”.`],
  [`A vírgula apenas indica uma pausa para respirar, sem mudar o sentido.`, `A vírgula aqui muda o sentido da resposta.`],
  [`Em (I), o aluno é proibido de sair mais cedo; em (II), o “não” responde à pergunta (ele não terá que ficar) e o aluno é liberado.`, ``],
  [`Nas duas versões o aluno é liberado, mas (II) é mais educada.`, `Em (I), o “não” está ligado ao verbo: “não pode sair” é uma proibição.`]
 ], a:3, e:`<ol><li>(I) Sem vírgula, o “não” nega o verbo: “<b>não pode</b> sair” → proibição (sim, vai ter que ficar).</li><li>(II) Com vírgula, o “Não” é a resposta à pergunta (“Vou ter que ficar?” — “Não”) e depois vem a permissão: “pode sair mais cedo”.</li></ol>`},

/* ===== p-var · Variação linguística (3) ===== */
{t:'p-var', d:1, q:`Num aplicativo de mensagens, Gabriel, que mora em Porto Alegre, escreveu ao primo:<br>“Bah, que frio hoje! Tu vais ao jogo amanhã?”<br>Qual palavra da mensagem é uma marca de <b>variação regional</b> típica do Sul do país?`, o:[
  [`frio`, `“Frio” é usada em todo o Brasil; não revela a região de quem fala.`],
  [`Bah`, ``],
  [`jogo`, `“Jogo” é palavra comum a todas as regiões.`],
  [`amanhã`, `“Amanhã” é usada do mesmo jeito em todo o país.`],
  [`hoje`, `“Hoje” não é marca regional.`]
 ], a:1, e:`<b>“Bah”</b> é uma interjeição típica da fala gaúcha: revela a origem regional de Gabriel. (O uso de “tu vais” também é comum no Sul, mas não aparece entre as alternativas.)<br>As outras palavras são usadas em todo o país.`},

{t:'p-var', d:2, tx:`Anúncio fictício, imitando textos antigos:<br>“PHARMACIA CENTRAL — Xarope para a tosse e pastilhas para a garganta. Vossa Mercê não se arrependerá!”`, q:`Comparando o anúncio com o português atual (“Farmácia”, “você”), percebe-se um exemplo de variação:`, o:[
  [`regional, pois cada estado escreve “farmácia” de um jeito.`, `A diferença não é de região: é de época. Hoje, todas as regiões escrevem “farmácia”.`],
  [`social, pois é um jargão usado apenas por farmacêuticos.`, `“Pharmacia” e “Vossa Mercê” não são termos técnicos de uma profissão.`],
  [`resultante de erros de ortografia do anunciante.`, `Na época, “pharmacia” era a grafia usada; não é erro, é outra fase da língua.`],
  [`situacional, pois o anúncio usa linguagem informal.`, `O anúncio não é informal: “Vossa Mercê” era até uma forma respeitosa de tratamento.`],
  [`histórica, que aparece na grafia (“pharmacia”) e nas formas de tratamento (“Vossa Mercê”).`, ``]
 ], a:4, e:`A língua muda com o tempo: isso é <b>variação histórica</b>.<ol><li>Grafia: “pharmacia” → “farmácia”.</li><li>Tratamento: “Vossa Mercê” → “vosmecê” → “você” → “cê”.</li></ol>`},

{t:'p-var', d:3, q:`Em uma rede social, alguém comentou: “Quem fala ‘nós vai’ não sabe falar português.”<br>Com base no que se estuda sobre variação linguística, a avaliação mais adequada desse comentário é:`, o:[
  [`O comentário está correto, pois só existe uma forma certa de falar a língua.`, `Toda língua tem variedades. Julgar uma delas como “a única certa” é a base do preconceito linguístico.`],
  [`O comentário é falso, pois “nós vai” segue a norma-padrão.`, `Na norma-padrão, o verbo concorda com “nós”: “nós vamos”. A crítica ao comentário não depende de negar isso.`],
  [`O comentário é preconceituoso: “nós vai” pertence a uma variedade usada por muitos falantes e comunica bem, embora não siga a norma-padrão, que é a esperada em situações formais.`, ``],
  [`O comentário mostra que a escola deveria parar de ensinar a norma-padrão.`, `Conclusão exagerada: conhecer a norma-padrão é importante para situações formais; o problema é discriminar quem não a usa.`],
  [`O comentário é adequado, porque quem diz “nós vai” não consegue se comunicar.`, `Quem diz “nós vai” é perfeitamente compreendido: a comunicação acontece.`]
 ], a:2, e:`Não há português “certo” ou “errado” em absoluto, e sim <b>adequado</b> ou <b>inadequado</b> à situação.<br>“Nós vai” não segue a norma-padrão (que pede “nós vamos”), mas é uma forma real da língua. Dizer que quem fala assim “não sabe português” é <b>preconceito linguístico</b>. Ao mesmo tempo, a norma-padrão continua sendo a esperada em situações formais.`},

/* ===== p-form · Formação de palavras e acentuação (2) ===== */
{t:'p-form', d:1, q:`Em qual grupo todas as palavras estão grafadas de acordo com o Acordo Ortográfico em vigor?`, o:[
  [`ideia — heroico — voo — lâmpada`, ``],
  [`idéia — heróico — vôo — lâmpada`, `Pelo Acordo, “ideia” e “heroico” perderam o acento (ditongo aberto em paroxítona), e “voo” também.`],
  [`ideia — heroico — voo — lampada`, `“Lâmpada” é proparoxítona, e toda proparoxítona é acentuada.`],
  [`ideia — herói — vôo — fácil`, `“Voo” perdeu o acento circunflexo com o Acordo. (“Herói”, oxítona, mantém o acento.)`],
  [`idéia — herói — voo — fácil`, `“Ideia” é paroxítona com ditongo aberto “ei”: perdeu o acento.`]
 ], a:0, e:`Pelo Acordo Ortográfico: <b>ideia</b>, <b>heroico</b> (paroxítonas com ditongo aberto: sem acento) e <b>voo</b> (sem circunflexo).<br><b>Lâmpada</b> é proparoxítona: sempre acentuada.`},

{t:'p-form', d:2, q:`Em qual palavra o prefixo e o sufixo foram acrescentados <b>ao mesmo tempo</b> (derivação parassintética)?`, o:[
  [`infelizmente`, `Existem “infeliz” e “felizmente” sozinhos: o prefixo e o sufixo não entraram juntos.`],
  [`deslealdade`, `Existem “desleal” e “lealdade”: não é parassíntese.`],
  [`girassol`, `“Girassol” junta duas palavras (gira + sol): é composição por justaposição.`],
  [`anoitecer`, ``],
  [`reescrever`, `Só houve acréscimo de prefixo (re- + escrever): derivação prefixal.`]
 ], a:3, e:`Em “<b>a</b>noit<b>ecer</b>”, não existem “anoite” nem “noitecer”: o prefixo <b>a-</b> e o sufixo <b>-ecer</b> entraram juntos na palavra “noite”. Isso é <b>derivação parassintética</b>.<br>Teste: tire o prefixo ou o sufixo; se a palavra que sobra não existe, é parassíntese.`}
];

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

/* Flashcards · M2 · Álgebra (ver CARDS_SPEC.md) — contas conferidas em check_cm2.py */
const CARDS_M2 = [
/* ---------- m-eq1 · Equação do 1º grau (12) ---------- */
 {t:'m-eq1', k:'regra', f:`Quais são os 3 passos para resolver uma equação do 1º grau?`, b:`<b>1) Tire os parênteses; 2) termos com x de um lado, números do outro; 3) divida pelo número que multiplica o x.</b>`},
 {t:'m-eq1', k:'regra', f:`Equação com frações: qual é o primeiro passo?`, b:`<b>Multiplicar todos os termos pelo MMC dos denominadores.</b> Assim as frações “somem”.`},
 {t:'m-eq1', k:'conta', f:`2x + 6 = 20. Quanto vale x?`, b:`<b>x = 7</b><br>2x = 14 → x = 7.`},
 {t:'m-eq1', k:'conta', f:`5x − 3 = 2x + 9. Quanto vale x?`, b:`<b>x = 4</b><br>5x − 2x = 9 + 3 → 3x = 12.`},
 {t:'m-eq1', k:'conta', f:`[[x|4]] = 6. Quanto vale x?`, b:`<b>x = 24</b><br>O 4 está dividindo, passa multiplicando: 6 × 4.`},
 {t:'m-eq1', k:'conta', f:`4(x − 1) = 20. Quanto vale x?`, b:`<b>x = 6</b><br>Distributiva: 4x − 4 = 20 → 4x = 24.`},
 {t:'m-eq1', k:'exemplo', f:`“O dobro de um número, mais 5, é 17.” Qual é a equação?`, b:`<b>2x + 5 = 17</b><br>Resolvendo: 2x = 12 → x = 6.`},
 {t:'m-eq1', k:'exemplo', f:`Como escrever três números consecutivos?`, b:`<b>x, x + 1 e x + 2</b><br>Ex.: soma 72 → 3x + 3 = 72 → 23, 24 e 25.`},
 {t:'m-eq1', k:'exemplo', f:`“A tem 5 a mais que B.” Como se escreve?`, b:`<b>A = B + 5</b><br>Quem tem “a mais” é o A, então o +5 vai do lado do B.`},
 {t:'m-eq1', k:'pegadinha', f:`[[x|2]] + 3 = 5. Multiplicando tudo por 2, fica x + 3 = 10?`, b:`<b>Não!</b> O 3 também é multiplicado: x + 6 = 10 → x = 4. É <b>todo</b> termo.`},
 {t:'m-eq1', k:'pegadinha', f:`3x = 12, então x = 12 − 3 = 9?`, b:`<b>Não!</b> O 3 está multiplicando, então passa <b>dividindo</b>: x = 12 ÷ 3 = 4.`},
 {t:'m-eq1', k:'conceito', f:`Achei o valor de x num problema. Como ter certeza de que está certo?`, b:`<b>Substitua o valor no enunciado</b> e veja se a igualdade (e a história) funciona.`},

/* ---------- m-sist · Sistemas (12) ---------- */
 {t:'m-sist', k:'regra', f:`Como funciona o método da adição?`, b:`<b>Some (ou subtraia) as equações para eliminar uma letra.</b> Se preciso, multiplique uma equação antes para os coeficientes ficarem opostos.`},
 {t:'m-sist', k:'regra', f:`Como funciona o método da substituição?`, b:`<b>Isole uma letra numa equação e substitua na outra.</b> Ex.: y = 2x vai direto para a outra equação.`},
 {t:'m-sist', k:'conceito', f:`Quando é melhor usar adição e quando usar substituição?`, b:`<b>Adição:</b> quando dá para cancelar uma letra. <b>Substituição:</b> quando uma letra já está “sozinha”.`},
 {t:'m-sist', k:'regra', f:`Problema de quantidade e valor (carros e rodas, ingressos e reais): que duas equações montar?`, b:`<b>Uma para a quantidade e outra para o valor</b> (rodas, pontos, reais…).`},
 {t:'m-sist', k:'conta', f:`x + y = 10 e x − y = 2. Quanto vale x?`, b:`<b>x = 6</b><br>Somando: 2x = 12. (E y = 4.)`},
 {t:'m-sist', k:'conta', f:`x + y = 9 e x − y = 1. Quanto vale y?`, b:`<b>y = 4</b><br>Somando: 2x = 10 → x = 5; 5 + y = 9.`},
 {t:'m-sist', k:'conta', f:`y = 2x e x + y = 15. Quanto vale x?`, b:`<b>x = 5</b><br>Substituindo: x + 2x = 15 → 3x = 15. (E y = 10.)`},
 {t:'m-sist', k:'conta', f:`a + b = 7 e a − b = 3. Quanto vale a · b?`, b:`<b>10</b><br>Somando: 2a = 10 → a = 5; b = 2; 5 × 2 = 10.`},
 {t:'m-sist', k:'exemplo', f:`20 veículos entre carros e motos, com 60 rodas. Quais são as duas equações?`, b:`<b>c + m = 20 e 4c + 2m = 60</b><br>Resolvendo: 10 carros e 10 motos.`},
 {t:'m-sist', k:'exemplo', f:`40 ingressos vendidos (inteira R$ 20, meia R$ 10), total R$ 600. Quais são as equações?`, b:`<b>i + m = 40 e 20i + 10m = 600</b><br>Resolvendo: 20 inteiras e 20 meias.`},
 {t:'m-sist', k:'pegadinha', f:`2x + y = 8 e x + y = 5. Somar as equações faz o y sumir?`, b:`<b>Não!</b> Aqui é preciso <b>subtrair</b>: (2x + y) − (x + y) = 8 − 5 → x = 3 (e y = 2).`},
 {t:'m-sist', k:'pegadinha', f:`Achei x = 7 e y = 3, mas a pergunta era o y. Posso marcar 7?`, b:`<b>Não!</b> Responda o que foi <b>perguntado</b>: y = 3. Muitas alternativas trazem o valor da outra letra.`},

/* ---------- m-prod · Produtos notáveis e fatoração (12) ---------- */
 {t:'m-prod', k:'regra', f:`(a + b)² = ?`, b:`<b>a² + 2ab + b²</b><br>“Quadrado do 1º, duas vezes o 1º pelo 2º, quadrado do 2º.”`},
 {t:'m-prod', k:'regra', f:`(a − b)² = ?`, b:`<b>a² − 2ab + b²</b><br>Só o termo do meio fica negativo.`},
 {t:'m-prod', k:'regra', f:`(a + b)(a − b) = ?`, b:`<b>a² − b²</b><br>Soma vezes diferença dá diferença dos quadrados.`},
 {t:'m-prod', k:'conceito', f:`O que é fatorar uma expressão?`, b:`<b>Transformar uma soma em produto</b> (o caminho de volta). Ex.: 6x + 9y = 3(2x + 3y), fator comum.`},
 {t:'m-prod', k:'exemplo', f:`x² + 6x + 9 fatorado é…?`, b:`<b>(x + 3)²</b><br>É um trinômio quadrado perfeito: x², 2·x·3 e 3².`},
 {t:'m-prod', k:'exemplo', f:`x² − 25 fatorado é…?`, b:`<b>(x + 5)(x − 5)</b><br>Diferença de quadrados: x² − 5².`},
 {t:'m-prod', k:'exemplo', f:`Simplifique [[x² − 9|x + 3]] (com x ≠ −3).`, b:`<b>x − 3</b><br>x² − 9 = (x + 3)(x − 3); corta o (x + 3).`},
 {t:'m-prod', k:'conta', f:`31² de cabeça?`, b:`<b>961</b><br>(30 + 1)² = 900 + 60 + 1.`},
 {t:'m-prod', k:'conta', f:`29 × 31 de cabeça?`, b:`<b>899</b><br>(30 − 1)(30 + 1) = 30² − 1 = 900 − 1.`},
 {t:'m-prod', k:'conta', f:`102² − 98² de cabeça?`, b:`<b>800</b><br>(102 + 98)(102 − 98) = 200 × 4.`},
 {t:'m-prod', k:'conta', f:`Desenvolva (x + 5)².`, b:`<b>x² + 10x + 25</b><br>x², 2·x·5 = 10x e 5² = 25.`},
 {t:'m-prod', k:'pegadinha', f:`(a + b)² = a² + b²?`, b:`<b>Não!</b> Falta o 2ab. Teste: (2 + 3)² = 25, mas 2² + 3² = 13.`},

/* ---------- m-eq2 · Equação do 2º grau (12) ---------- */
 {t:'m-eq2', k:'regra', f:`Fórmula do Δ (delta)?`, b:`<b>Δ = b² − 4ac</b><br>“Bê-dois menos quatro-a-cê.”`},
 {t:'m-eq2', k:'regra', f:`Fórmula de Bhaskara para x?`, b:`<b>x = [[−b ± √{Δ}|2a]]</b><br>O ± dá as duas raízes.`},
 {t:'m-eq2', k:'conceito', f:`O que o sinal do Δ diz sobre as raízes?`, b:`<b>Δ &gt; 0: duas raízes reais diferentes; Δ = 0: duas iguais (uma só); Δ &lt; 0: nenhuma raiz real.</b>`},
 {t:'m-eq2', k:'regra', f:`Em ax² + bx + c = 0, quanto valem a soma S e o produto P das raízes?`, b:`<b>S = [[−b|a]] e P = [[c|a]]</b><br>Ex.: x² − 5x + 6 = 0 → soma 5, produto 6 → 2 e 3.`},
 {t:'m-eq2', k:'regra', f:`Como resolver ax² + bx = 0 (sem o c)?`, b:`<b>Coloque x em evidência: x(ax + b) = 0 → x = 0 ou x = [[−b|a]].</b>`},
 {t:'m-eq2', k:'conta', f:`Raízes de x² − 7x + 12 = 0?`, b:`<b>3 e 4</b><br>Soma 7 e produto 12.`},
 {t:'m-eq2', k:'conta', f:`Δ de x² + 2x − 3 = 0?`, b:`<b>Δ = 16</b><br>2² − 4·1·(−3) = 4 + 12. Raízes: 1 e −3.`},
 {t:'m-eq2', k:'conta', f:`Raízes de x² − 3x = 0?`, b:`<b>0 e 3</b><br>x(x − 3) = 0.`},
 {t:'m-eq2', k:'conta', f:`Raízes de x² − 16 = 0?`, b:`<b>4 e −4</b><br>x² = 16 → x = ±4.`},
 {t:'m-eq2', k:'pegadinha', f:`x² = 9. Então x = 3, e só?`, b:`<b>Não!</b> São <b>duas</b> soluções: 3 e −3, porque (−3)² também é 9.`},
 {t:'m-eq2', k:'pegadinha', f:`Em x² − 6x + 8 = 0, quanto vale −b na fórmula?`, b:`<b>+6</b><br>Aqui b = −6, então −b = −(−6) = 6. Raízes: 2 e 4.`},
 {t:'m-eq2', k:'exemplo', f:`Problema do lado de um terreno deu raízes 5 e −8. Qual é a resposta?`, b:`<b>5</b><br>Medida (lado, idade, quantidade) não é negativa: descarte o −8.`},

/* ---------- m-prop · Razão, proporção, regra de três e escalas (12) ---------- */
 {t:'m-prop', k:'conceito', f:`Razão × proporção: qual a diferença?`, b:`<b>Razão</b> é uma divisão que compara ([[a|b]]); <b>proporção</b> é uma igualdade de razões ([[a|b]] = [[c|d]]).`},
 {t:'m-prop', k:'regra', f:`[[a|b]] = [[c|d]]. O que vale pela propriedade fundamental?`, b:`<b>a · d = b · c</b><br>Multiplica cruzado.`},
 {t:'m-prop', k:'conceito', f:`Diretamente × inversamente proporcionais?`, b:`<b>Direta:</b> uma dobra, a outra dobra (razão constante). <b>Inversa:</b> uma dobra, a outra cai pela metade (produto constante).`},
 {t:'m-prop', k:'exemplo', f:`Operários e dias para fazer a mesma obra: direta ou inversa?`, b:`<b>Inversa.</b> Mais operários → menos dias. Ex.: 6 fazem em 10 dias; 4 fazem em x: 6 × 10 = 4 × x → 15 dias.`},
 {t:'m-prop', k:'regra', f:`Como se calcula a escala?`, b:`<b>Escala = [[medida no desenho|medida real]]</b>, as duas na mesma unidade.`},
 {t:'m-prop', k:'regra', f:`1 km tem quantos centímetros?`, b:`<b>100 000 cm</b><br>1 km = 1 000 m e 1 m = 100 cm.`},
 {t:'m-prop', k:'regra', f:`Fórmulas da velocidade média e da densidade demográfica?`, b:`<b>v = [[distância|tempo]]</b> (km/h) e <b>densidade = [[habitantes|área]]</b> (hab/km²).`},
 {t:'m-prop', k:'conta', f:`Escala 1 : 100 000. 3 cm no mapa são quantos km reais?`, b:`<b>3 km</b><br>3 × 100 000 = 300 000 cm = 3 km.`},
 {t:'m-prop', k:'conta', f:`3 cadernos custam R$ 12. Quanto custam 5?`, b:`<b>R$ 20</b><br>Cada um custa R$ 4 (direta).`},
 {t:'m-prop', k:'conta', f:`Um carro fez 90 km em 1h30. Velocidade média?`, b:`<b>60 km/h</b><br>1h30 = 1,5 h; 90 ÷ 1,5 = 60.`},
 {t:'m-prop', k:'conta', f:`Divida 100 em partes proporcionais a 2 e 3.`, b:`<b>40 e 60</b><br>2 + 3 = 5 partes; 100 ÷ 5 = 20 → 2 × 20 e 3 × 20.`},
 {t:'m-prop', k:'pegadinha', f:`2h30 é o mesmo que 2,3 h?`, b:`<b>Não!</b> 2h30 = <b>2,5 h</b>, porque meia hora é 0,5 h.`},

/* ---------- m-func · Funções e valor numérico (8) ---------- */
 {t:'m-func', k:'conceito', f:`O que é uma função?`, b:`<b>Uma regra que, para cada x que entra, dá um único y.</b> Pode vir como tabela, fórmula ou gráfico.`},
 {t:'m-func', k:'regra', f:`Em y = ax + b, o que são o a e o b?`, b:`<b>a = taxa de variação</b> (“anda”) e <b>b = valor inicial</b> (“base”, onde o gráfico corta o eixo y).`},
 {t:'m-func', k:'exemplo', f:`y = −3x + 2: o gráfico é crescente ou decrescente?`, b:`<b>Decrescente</b>, porque a = −3 &lt; 0.`},
 {t:'m-func', k:'conceito', f:`Que forma tem o gráfico de y = ax² + bx + c?`, b:`<b>Parábola.</b> É o gráfico da função quadrática.`},
 {t:'m-func', k:'conta', f:`y = 3x − 1. Quanto vale y para x = 4?`, b:`<b>11</b><br>3 × 4 − 1 = 12 − 1.`},
 {t:'m-func', k:'conta', f:`Valor de x² + x para x = −3?`, b:`<b>6</b><br>(−3)² + (−3) = 9 − 3. Use parênteses: (−3)² = 9, não −9.`},
 {t:'m-func', k:'conta', f:`Tabela: x = 0, 1, 2 e y = 1, 4, 7. Qual é a lei?`, b:`<b>y = 3x + 1</b><br>y sobe 3 a cada passo (a = 3); em x = 0, y = 1 (b = 1).`},
 {t:'m-func', k:'pegadinha', f:`Táxi: y = 2x + 4. Dobrando os quilômetros, o preço dobra?`, b:`<b>Não!</b> 1 km custa 6 e 2 km custam 8, por causa da bandeirada (o b). Só é proporcional quando b = 0.`},

/* ---------- m-seq · Sequências (6) ---------- */
 {t:'m-seq', k:'regra', f:`Termo geral da sequência que soma sempre o mesmo número (r)?`, b:`<b>a<sub>n</sub> = a<sub>1</sub> + (n − 1)·r</b>`},
 {t:'m-seq', k:'conceito', f:`Progressão aritmética × geométrica?`, b:`<b>Aritmética:</b> soma sempre o mesmo número (5, 9, 13…). <b>Geométrica:</b> multiplica sempre pelo mesmo (3, 6, 12…).`},
 {t:'m-seq', k:'conta', f:`Próximo termo de 2, 6, 18, 54, …?`, b:`<b>162</b><br>Multiplica por 3: 54 × 3.`},
 {t:'m-seq', k:'conta', f:`10º termo de 3, 7, 11, 15, …?`, b:`<b>39</b><br>3 + 9 × 4 = 3 + 36.`},
 {t:'m-seq', k:'exemplo', f:`1, 1, 2, 3, 5, 8, … Qual é o próximo termo?`, b:`<b>13</b><br>Cada termo é a soma dos dois anteriores: 5 + 8.`},
 {t:'m-seq', k:'pegadinha', f:`Do 1º ao 20º termo de uma sequência, quantos “pulos” de r há?`, b:`<b>19</b>, e não 20! Por isso é (n − 1) na fórmula.`}
];

const CARDS_M3 = [
 /* ===== m-ang · Ângulos e retas paralelas (12) ===== */
 {t:'m-ang', k:'regra', f:`Dois ângulos complementares somam quanto?`, b:`<b>90°</b>. Ex.: 30° e 60° são complementares.`},
 {t:'m-ang', k:'regra', f:`Dois ângulos suplementares somam quanto?`, b:`<b>180°</b>. Ex.: 110° e 70° são suplementares.`},
 {t:'m-ang', k:'conceito', f:`O que se sabe sobre dois ângulos opostos pelo vértice?`, b:`<b>São iguais.</b> Quando duas retas se cruzam, os ângulos “de frente” um para o outro têm a mesma medida.`},
 {t:'m-ang', k:'exemplo', f:`Um ângulo de exatamente 180° (meia-volta, formando uma reta) se chama como?`, b:`<b>Ângulo raso.</b> Lembre: agudo &lt; 90°, reto = 90°, obtuso entre 90° e 180°.`},
 {t:'m-ang', k:'conceito', f:`Paralelas cortadas por transversal: ângulos alternos internos são iguais ou somam 180°?`, b:`<b>São iguais.</b> Ficam entre as paralelas, em lados opostos da transversal: formam a letra “Z”.`},
 {t:'m-ang', k:'conceito', f:`Paralelas cortadas por transversal: como são os ângulos correspondentes (mesma posição em cada cruzamento)?`, b:`<b>Iguais.</b> Formam a letra “F”.`},
 {t:'m-ang', k:'regra', f:`Paralelas cortadas por transversal: quanto somam dois colaterais internos?`, b:`<b>180°.</b> Ficam entre as paralelas, do mesmo lado da transversal: formam a letra “U”.`},
 {t:'m-ang', k:'conta', f:`Complemento de 35°?`, b:`<b>55°</b>. 90 − 35 = 55.`},
 {t:'m-ang', k:'conta', f:`Suplemento de 125°?`, b:`<b>55°</b>. 180 − 125 = 55.`},
 {t:'m-ang', k:'conta', f:`Suplemento do complemento de 50°?`, b:`<b>140°</b>. Complemento de 50° = 40°; suplemento de 40° = 140°.`},
 {t:'m-ang', k:'conta', f:`A bissetriz divide um ângulo de 130° em dois ângulos de quanto?`, b:`<b>65°</b> cada. A bissetriz corta o ângulo ao meio: 130 ÷ 2 = 65.`},
 {t:'m-ang', k:'pegadinha', f:`“O complemento de 40° é 140°.” Certo?`, b:`<b>Não!</b> 140° é o <b>suplemento</b> (soma 180°). O complemento (soma 90°) é <b>50°</b>.`},

 /* ===== m-pol · Triângulos e polígonos (8) ===== */
 {t:'m-pol', k:'regra', f:`Fórmula da soma dos ângulos internos de um polígono de n lados?`, b:`<b>S<sub>i</sub> = (n − 2)·180°</b>. O polígono se divide em (n − 2) triângulos.`},
 {t:'m-pol', k:'regra', f:`Fórmula do número de diagonais de um polígono de n lados?`, b:`<b>d = [[n(n − 3)|2]]</b>. Divide por 2 porque cada diagonal seria contada duas vezes.`},
 {t:'m-pol', k:'regra', f:`Quanto somam os ângulos externos de qualquer polígono convexo?`, b:`<b>360°</b>, sempre (uma volta completa). No regular, cada externo = [[360°|n]].`},
 {t:'m-pol', k:'conceito', f:`O ângulo externo de um triângulo é igual a quê?`, b:`<b>À soma dos dois ângulos internos não vizinhos a ele.</b> Ex.: internos 50° e 60° → externo oposto = 110°.`},
 {t:'m-pol', k:'conta', f:`Soma dos ângulos internos de um pentágono?`, b:`<b>540°</b>. (5 − 2)·180 = 3·180 = 540.`},
 {t:'m-pol', k:'conta', f:`Cada ângulo externo de um decágono regular (10 lados) mede?`, b:`<b>36°</b>. 360 ÷ 10 = 36. (O interno é 180 − 36 = 144°.)`},
 {t:'m-pol', k:'conta', f:`Quantas diagonais tem um pentágono?`, b:`<b>5</b>. d = [[5·2|2]] = 5.`},
 {t:'m-pol', k:'pegadinha', f:`Todo losango é um quadrado?`, b:`<b>Não!</b> O losango tem 4 lados iguais, mas o quadrado precisa também de 4 ângulos retos. (Todo quadrado é losango, não o contrário.)`},

 /* ===== m-sem · Semelhança e Tales (12) ===== */
 {t:'m-sem', k:'conceito', f:`O que duas figuras semelhantes têm em comum?`, b:`<b>Ângulos correspondentes iguais e lados correspondentes proporcionais.</b> Mesma forma, tamanhos diferentes.`},
 {t:'m-sem', k:'regra', f:`Quais são os três casos de semelhança de triângulos?`, b:`<b>AA, LAL e LLL.</b> AA (dois ângulos iguais) é o mais usado.`},
 {t:'m-sem', k:'exemplo', f:`Um triângulo tem ângulos de 40° e 75°; outro, de 40° e 65°. São semelhantes?`, b:`<b>Sim, pelo caso AA.</b> O terceiro ângulo do primeiro é 65°, então os dois têm 40°, 65° e 75°.`},
 {t:'m-sem', k:'regra', f:`Se a razão de semelhança entre os lados é k, qual a razão entre os perímetros?`, b:`<b>k</b> (a mesma dos lados).`},
 {t:'m-sem', k:'regra', f:`Se a razão de semelhança entre os lados é k, qual a razão entre as áreas?`, b:`<b>k²</b>. Ex.: lados ×2 → área ×4.`},
 {t:'m-sem', k:'regra', f:`O que diz o Teorema de Tales?`, b:`<b>Um feixe de paralelas cortado por duas transversais determina segmentos proporcionais:</b> [[a|b]] = [[c|d]].`},
 {t:'m-sem', k:'conceito', f:`Por que dá para medir a altura de um prédio pela sombra?`, b:`<b>No mesmo instante, os raios de sol são paralelos</b>, então os triângulos são semelhantes e [[altura|sombra]] é igual para todos os objetos.`},
 {t:'m-sem', k:'conta', f:`Triângulos de lados 3, 4, 5 e 6, 8, 10. Razão de semelhança (maior ÷ menor)?`, b:`<b>k = 2</b>. [[6|3]] = [[8|4]] = [[10|5]] = 2.`},
 {t:'m-sem', k:'conta', f:`Figuras semelhantes com razão k = 2. A menor tem 10 cm² de área. Área da maior?`, b:`<b>40 cm²</b>. Áreas na razão k² = 4: 10 × 4 = 40.`},
 {t:'m-sem', k:'conta', f:`Uma vara de 1 m faz sombra de 2 m. No mesmo instante, uma árvore faz sombra de 10 m. Altura da árvore?`, b:`<b>5 m</b>. A sombra é o dobro da altura: 10 ÷ 2 = 5.`},
 {t:'m-sem', k:'conta', f:`Tales: [[2|3]] = [[4|x]]. Quanto vale x?`, b:`<b>x = 6</b>. 2x = 12 → x = 6.`},
 {t:'m-sem', k:'pegadinha', f:`Os lados de uma figura triplicam. A área fica 3 vezes maior?`, b:`<b>Não!</b> Fica <b>9 vezes</b> maior (3² = 9). Só o perímetro triplica.`},

 /* ===== m-pit · Pitágoras e relações métricas (12) ===== */
 {t:'m-pit', k:'regra', f:`Teorema de Pitágoras (a = hipotenusa; b e c = catetos)?`, b:`<b>a² = b² + c²</b>. O quadrado da hipotenusa é a soma dos quadrados dos catetos.`},
 {t:'m-pit', k:'conceito', f:`O que é a hipotenusa num triângulo retângulo?`, b:`<b>O lado oposto ao ângulo de 90°</b>, sempre o maior. Os outros dois (que formam o ângulo reto) são os catetos.`},
 {t:'m-pit', k:'regra', f:`Diagonal de um quadrado de lado ℓ?`, b:`<b>d = ℓ√{2}</b>. Ex.: lado 5 → diagonal 5√{2}.`},
 {t:'m-pit', k:'regra', f:`Altura de um triângulo equilátero de lado ℓ?`, b:`<b>h = [[ℓ√{3}|2]]</b>. Ex.: lado 10 → h = 5√{3}.`},
 {t:'m-pit', k:'regra', f:`A altura relativa à hipotenusa a divide em m e n. Quanto vale h²?`, b:`<b>h² = m·n</b>. Ex.: m = 4 e n = 9 → h² = 36 → h = 6.`},
 {t:'m-pit', k:'regra', f:`No triângulo retângulo, hipotenusa × altura relativa a ela é igual a quê?`, b:`<b>Ao produto dos catetos: a·h = b·c</b>.`},
 {t:'m-pit', k:'exemplo', f:`Um triângulo de lados 6, 8 e 10 é retângulo?`, b:`<b>Sim.</b> 6² + 8² = 36 + 64 = 100 = 10². (É o 3-4-5 vezes 2.)`},
 {t:'m-pit', k:'conta', f:`Catetos 6 e 8. Hipotenusa?`, b:`<b>10</b>. 36 + 64 = 100 → √{100} = 10.`},
 {t:'m-pit', k:'conta', f:`Hipotenusa 13 e um cateto 5. O outro cateto?`, b:`<b>12</b>. 169 − 25 = 144 → √{144} = 12 (terno 5-12-13).`},
 {t:'m-pit', k:'conta', f:`Catetos 8 e 15. Hipotenusa?`, b:`<b>17</b>. 64 + 225 = 289 → √{289} = 17 (terno 8-15-17).`},
 {t:'m-pit', k:'conta', f:`A altura relativa à hipotenusa a divide em m = 1 e n = 9. Altura?`, b:`<b>3</b>. h² = 1 · 9 = 9 → h = 3.`},
 {t:'m-pit', k:'pegadinha', f:`Hipotenusa 10 e cateto 6. O outro cateto é √{10² + 6²}?`, b:`<b>Não!</b> Quando falta um cateto, <b>subtraia</b>: 100 − 36 = 64 → cateto = <b>8</b>.`},

 /* ===== m-circ · Circunferência (8) ===== */
 {t:'m-circ', k:'conceito', f:`Onde fica o vértice do ângulo central e quanto ele mede?`, b:`<b>No centro da circunferência</b>, e mede o mesmo que o arco que ele determina.`},
 {t:'m-circ', k:'regra', f:`Quanto mede um ângulo inscrito em relação ao arco que ele “olha”?`, b:`<b>A metade do arco</b> (e metade do central correspondente). Vértice na própria circunferência.`},
 {t:'m-circ', k:'conceito', f:`Quanto mede um ângulo inscrito que “olha” para um diâmetro?`, b:`<b>90°.</b> Todo triângulo inscrito com um lado sendo diâmetro é retângulo.`},
 {t:'m-circ', k:'regra', f:`Fórmula do comprimento de uma circunferência de raio r?`, b:`<b>C = 2πr</b>. Um arco de α° mede [[α|360]]·2πr.`},
 {t:'m-circ', k:'conta', f:`Ângulo central de 80°. Quanto mede o inscrito que olha o mesmo arco?`, b:`<b>40°</b>. Inscrito = metade do central.`},
 {t:'m-circ', k:'conta', f:`Ângulo inscrito de 25°. Quanto mede o central que olha o mesmo arco?`, b:`<b>50°</b>. Central = dobro do inscrito.`},
 {t:'m-circ', k:'conta', f:`Comprimento de uma circunferência de raio 10 cm (π ≈ 3,14)?`, b:`<b>62,8 cm</b>. 2 × 3,14 × 10 = 62,8.`},
 {t:'m-circ', k:'pegadinha', f:`O comprimento da circunferência é πr²?`, b:`<b>Não!</b> πr² é a <b>área</b> do círculo. O comprimento é <b>2πr</b>.`},

 /* ===== m-cart · Plano cartesiano (8) ===== */
 {t:'m-cart', k:'pegadinha', f:`Os pares (2, 3) e (3, 2) representam o mesmo ponto?`, b:`<b>Não!</b> A ordem importa: primeiro o x (horizontal, abscissa), depois o y (vertical, ordenada).`},
 {t:'m-cart', k:'regra', f:`Quais são os sinais (x, y) dos pontos do 2º quadrante?`, b:`<b>(−, +)</b>. Ordem anti-horária: 1º (+, +), 2º (−, +), 3º (−, −), 4º (+, −).`},
 {t:'m-cart', k:'exemplo', f:`Em que quadrante fica o ponto (3, −2)?`, b:`<b>4º quadrante</b>: x positivo e y negativo.`},
 {t:'m-cart', k:'regra', f:`Como calcular o ponto médio entre dois pontos?`, b:`<b>Média dos x e média dos y:</b> M = ([[x<sub>1</sub> + x<sub>2</sub>|2]], [[y<sub>1</sub> + y<sub>2</sub>|2]]).`},
 {t:'m-cart', k:'regra', f:`Fórmula da distância entre dois pontos?`, b:`<b>d² = (Δx)² + (Δy)²</b>. É Pitágoras: Δx e Δy são os catetos, d é a hipotenusa.`},
 {t:'m-cart', k:'conta', f:`Ponto médio entre (2, 4) e (6, 10)?`, b:`<b>(4, 7)</b>. [[2 + 6|2]] = 4 e [[4 + 10|2]] = 7.`},
 {t:'m-cart', k:'conta', f:`Distância entre (1, 1) e (4, 5)?`, b:`<b>5</b>. Δx = 3, Δy = 4 → d² = 9 + 16 = 25 → d = 5.`},
 {t:'m-cart', k:'conta', f:`Distância entre (2, 3) e (9, 3)?`, b:`<b>7</b>. Mesma horizontal (mesmo y): basta a diferença dos x, 9 − 2 = 7.`},
];

/* Flashcards · Matemática · M4 (Medidas) e M5 (Estatística) */
const CARDS_M45 = [
 /* ---------- m-area (12) ---------- */
 {t:'m-area', k:'regra', f:`Fórmula da área do trapézio?`, b:`<b>[[(B + b)·h|2]]</b><br>B = base maior, b = base menor, h = altura.`},
 {t:'m-area', k:'regra', f:`Fórmula da área do losango?`, b:`<b>[[D·d|2]]</b><br>D e d são as duas diagonais.`},
 {t:'m-area', k:'regra', f:`Fórmula da área da coroa circular (anel) de raio maior R e raio menor r?`, b:`<b>π(R² − r²)</b><br>Círculo grande menos o círculo do buraco: πR² − πr².`},
 {t:'m-area', k:'regra', f:`Fórmula da área de um setor circular de α graus?`, b:`<b>[[α|360]] · πr²</b><br>É a fração do círculo inteiro que o setor ocupa.`},
 {t:'m-area', k:'conceito', f:`Perímetro × área: qual é a diferença?`, b:`<b>Perímetro é a volta (contorno); área é o espaço de dentro.</b><br>Perímetro em m; área em m² (unidade ao quadrado).`},
 {t:'m-area', k:'regra', f:`1 hectare equivale a quantos m²?`, b:`<b>10 000 m²</b><br>É um quadrado de 100 m × 100 m.`},
 {t:'m-area', k:'pegadinha', f:`Círculo de diâmetro 10 cm: a área é π · 10²?`, b:`<b>Não! O raio é 5.</b><br>Área = π · 5² = 25π cm². Divida o diâmetro por 2 antes.`},
 {t:'m-area', k:'pegadinha', f:`1 m² = 100 cm²?`, b:`<b>Não! 1 m² = 10 000 cm².</b><br>Porque 100 cm × 100 cm.`},
 {t:'m-area', k:'conta', f:`Área do triângulo de base 8 cm e altura 5 cm?`, b:`<b>20 cm²</b><br>[[8 × 5|2]] = [[40|2]] = 20.`},
 {t:'m-area', k:'conta', f:`Área do trapézio de bases 9 e 5 e altura 4?`, b:`<b>28</b><br>[[(9 + 5) × 4|2]] = [[56|2]] = 28.`},
 {t:'m-area', k:'conta', f:`Área do círculo de raio 3 m (use π ≈ 3)?`, b:`<b>27 m²</b><br>3 × 3² = 3 × 9 = 27.`},
 {t:'m-area', k:'conta', f:`Quadrado de lado 10 cm com um furo quadrado de lado 4 cm. Área que sobra?`, b:`<b>84 cm²</b><br>Grande menos o buraco: 100 − 16 = 84.`},

 /* ---------- m-vol (8) ---------- */
 {t:'m-vol', k:'regra', f:`Fórmula do volume do cilindro?`, b:`<b>V = πr² · h</b><br>Área da base (círculo) × altura.`},
 {t:'m-vol', k:'conceito', f:`Regra geral do volume de qualquer prisma ou cilindro?`, b:`<b>Área da base × altura</b><br>Imagine pilhas de folhas iguais à base.`},
 {t:'m-vol', k:'regra', f:`1 m³ equivale a quantos litros?`, b:`<b>1 000 litros</b><br>E 1 dm³ = 1 L; 1 cm³ = 1 mL.`},
 {t:'m-vol', k:'pegadinha', f:`Um aquário de 60 000 cm³ tem 6 000 litros?`, b:`<b>Não! Tem 60 litros.</b><br>cm³ → litros: divide por 1 000 (1 000 cm³ = 1 L).`},
 {t:'m-vol', k:'pegadinha', f:`Se a aresta de um cubo dobra, o volume dobra?`, b:`<b>Não! Fica 8 vezes maior.</b><br>(2a)³ = 2³ · a³ = 8a³.`},
 {t:'m-vol', k:'conta', f:`Volume de um cubo de aresta 3 cm?`, b:`<b>27 cm³</b><br>3³ = 3 × 3 × 3 = 27.`},
 {t:'m-vol', k:'conta', f:`Uma caixa-d’água mede 2 m × 3 m × 1 m. Quantos litros cabem?`, b:`<b>6 000 litros</b><br>2 × 3 × 1 = 6 m³; 6 × 1 000 = 6 000 L.`},
 {t:'m-vol', k:'conta', f:`Volume do cilindro de raio 2 cm e altura 10 cm (use π ≈ 3)?`, b:`<b>120 cm³</b><br>3 × 2² × 10 = 3 × 4 × 10 = 120.`},

 /* ---------- m-unid (8) ---------- */
 {t:'m-unid', k:'regra', f:`Na escada km-hm-dam-m-dm-cm-mm, quanto vale cada degrau no comprimento, na área e no volume?`, b:`<b>×10, ×100 e ×1 000</b><br>1 zero, 2 zeros e 3 zeros por degrau.`},
 {t:'m-unid', k:'regra', f:`Como converter km/h em m/s?`, b:`<b>Divida por 3,6.</b><br>E de m/s para km/h, multiplique por 3,6.`},
 {t:'m-unid', k:'conceito', f:`Para converter de uma unidade maior para uma menor (ex.: m → cm), multiplica ou divide?`, b:`<b>Multiplica.</b><br>A unidade menor cabe mais vezes, então o número aumenta: 2 m = 200 cm.`},
 {t:'m-unid', k:'pegadinha', f:`1,5 h é 1h50min?`, b:`<b>Não! É 1h30min.</b><br>Hora é base 60: 0,5 h × 60 = 30 min.`},
 {t:'m-unid', k:'pegadinha', f:`1 m³ = 100 cm³?`, b:`<b>Não! 1 m³ = 1 000 000 cm³.</b><br>Volume anda de 1 000 em 1 000 por degrau: 100 cm × 100 cm × 100 cm.`},
 {t:'m-unid', k:'conta', f:`3,5 km em metros?`, b:`<b>3 500 m</b><br>1 km = 1 000 m: 3,5 × 1 000.`},
 {t:'m-unid', k:'conta', f:`0,25 h em minutos?`, b:`<b>15 min</b><br>0,25 × 60 = 15.`},
 {t:'m-unid', k:'conta', f:`36 km/h em m/s?`, b:`<b>10 m/s</b><br>36 ÷ 3,6 = 10.`},

 /* ---------- m-graf (12) ---------- */
 {t:'m-graf', k:'regra', f:`Num gráfico de setores (pizza), como achar o ângulo de um setor?`, b:`<b>Ângulo = porcentagem × 360°</b><br>Ex.: 50% → 180°.`},
 {t:'m-graf', k:'exemplo', f:`Temperatura de uma cidade dia a dia durante um mês. Qual gráfico usar?`, b:`<b>Gráfico de linhas</b><br>Linha = variação ao longo do tempo.`},
 {t:'m-graf', k:'exemplo', f:`Número de votos de cada candidato. Qual gráfico usar?`, b:`<b>Colunas (ou barras)</b><br>Coluna = comparar categorias.`},
 {t:'m-graf', k:'exemplo', f:`Como a renda de uma família se divide entre os gastos (em %). Qual gráfico usar?`, b:`<b>Setores (pizza)</b><br>Pizza = partes de um todo, somando 100%.`},
 {t:'m-graf', k:'conceito', f:`Num gráfico de linhas, onde está o maior crescimento?`, b:`<b>No trecho mais inclinado (subida mais íngreme).</b>`},
 {t:'m-graf', k:'conceito', f:`O que ler antes de responder a uma questão com gráfico?`, b:`<b>Título, eixos, unidades, legenda e fonte.</b><br>E se o eixo começa no zero.`},
 {t:'m-graf', k:'pegadinha', f:`O eixo vertical começa em 100, e uma coluna parece o dobro da outra. O valor dobrou?`, b:`<b>Não necessariamente!</b><br>Eixo que não começa no zero exagera as diferenças. Compare os valores, não o tamanho.`},
 {t:'m-graf', k:'pegadinha', f:`Um gráfico de pizza mostra fatias de 50%, 40% e 20%. Está correto?`, b:`<b>Não! Soma 110%.</b><br>As partes de uma pizza devem somar 100% (360°).`},
 {t:'m-graf', k:'conta', f:`Setor de 25% numa pizza: quantos graus?`, b:`<b>90°</b><br>[[1|4]] de 360° = 90°.`},
 {t:'m-graf', k:'conta', f:`Setor de 10% numa pizza: quantos graus?`, b:`<b>36°</b><br>10% de 360° = 36°.`},
 {t:'m-graf', k:'conta', f:`Um setor mede 72°. Que porcentagem ele representa?`, b:`<b>20%</b><br>[[72|360]] = [[1|5]] = 20%.`},
 {t:'m-graf', k:'conta', f:`Pesquisa com 300 alunos: o setor “futebol” mede 120°. Quantos alunos escolheram futebol?`, b:`<b>100 alunos</b><br>[[120|360]] = [[1|3]]; [[1|3]] de 300 = 100.`},

 /* ---------- m-media (12) ---------- */
 {t:'m-media', k:'regra', f:`Fórmula da média ponderada?`, b:`<b>[[soma (valor × peso)|soma dos pesos]]</b><br>Cada valor conta tantas vezes quanto o seu peso.`},
 {t:'m-media', k:'regra', f:`Como achar a mediana quando a quantidade de dados é par?`, b:`<b>Ordene e faça a média dos dois do meio.</b><br>Ex.: 2, 4, 6, 10 → [[4 + 6|2]] = 5.`},
 {t:'m-media', k:'conceito', f:`Moda × mediana: qual é a diferença?`, b:`<b>Moda é o valor que mais aparece; mediana é o do meio (depois de ordenar).</b>`},
 {t:'m-media', k:'conceito', f:`Qual medida é “puxada” por um valor muito alto ou muito baixo: média ou mediana?`, b:`<b>A média.</b><br>A mediana não muda muito; por isso salários são bem representados pela mediana.`},
 {t:'m-media', k:'exemplo', f:`Qual é a moda de 2, 4, 4, 5, 5, 9?`, b:`<b>4 e 5</b><br>Os dois aparecem 2 vezes: pode haver mais de uma moda (ou nenhuma).`},
 {t:'m-media', k:'exemplo', f:`Notas 6 e 8 nas duas primeiras provas. Quanto tirar na 3ª para a média ser 8?`, b:`<b>10</b><br>Soma precisa ser 3 × 8 = 24; já tem 14; falta 10.`},
 {t:'m-media', k:'pegadinha', f:`Mediana de 9, 2, 7: é o 2, que está no meio?`, b:`<b>Não! Primeiro ordene: 2, 7, 9.</b><br>A mediana é 7.`},
 {t:'m-media', k:'pegadinha', f:`Nota 6 (peso 1) e nota 9 (peso 2). A média ponderada é 7,5?`, b:`<b>Não! É 8.</b><br>[[6 × 1 + 9 × 2|1 + 2]] = [[24|3]] = 8. (7,5 é a média simples.)`},
 {t:'m-media', k:'conta', f:`Média de 4, 6 e 8?`, b:`<b>6</b><br>[[4 + 6 + 8|3]] = [[18|3]] = 6.`},
 {t:'m-media', k:'conta', f:`Mediana de 9, 2, 5, 4, 7?`, b:`<b>5</b><br>Ordene: 2, 4, 5, 7, 9 → o do meio é 5.`},
 {t:'m-media', k:'conta', f:`Amplitude de 3, 12, 7, 15?`, b:`<b>12</b><br>Maior − menor: 15 − 3 = 12.`},
 {t:'m-media', k:'conta', f:`A média de 5 números é 8. Qual é a soma deles?`, b:`<b>40</b><br>Soma = média × quantidade = 8 × 5.`},

 /* ---------- m-prob (8) ---------- */
 {t:'m-prob', k:'regra', f:`Fórmula da probabilidade (todos os casos com a mesma chance)?`, b:`<b>P = [[casos favoráveis|casos possíveis]]</b><br>O que eu quero ÷ tudo o que pode acontecer.`},
 {t:'m-prob', k:'regra', f:`A chance de chover é 0,3. Qual a chance de não chover?`, b:`<b>0,7</b><br>P(não A) = 1 − P(A) = 1 − 0,3.`},
 {t:'m-prob', k:'conceito', f:`Probabilidade 0 e probabilidade 1 significam o quê?`, b:`<b>0 = impossível; 1 = certo.</b><br>Toda probabilidade fica entre 0 e 1 (0% a 100%).`},
 {t:'m-prob', k:'pegadinha', f:`Dois dados: (1, 6) e (6, 1) são o mesmo caso?`, b:`<b>Não! São casos diferentes.</b><br>Por isso dois dados têm 6 × 6 = 36 resultados.`},
 {t:'m-prob', k:'pegadinha', f:`Urna com 2 bolas vermelhas e 2 azuis. Tirar 2 vermelhas sem reposição: [[2|4]] × [[2|4]]?`, b:`<b>Não! [[2|4]] × [[1|3]] = [[1|6]].</b><br>Sem reposição, tira uma do total e uma das favoráveis.`},
 {t:'m-prob', k:'conta', f:`Ao lançar um dado, qual a probabilidade de sair número par?`, b:`<b>[[1|2]]</b><br>Pares: 2, 4, 6 → [[3|6]] = [[1|2]].`},
 {t:'m-prob', k:'conta', f:`Lançam-se uma moeda e um dado. Probabilidade de cara e 6?`, b:`<b>[[1|12]]</b><br>“E” multiplica: [[1|2]] × [[1|6]] = [[1|12]].`},
 {t:'m-prob', k:'conta', f:`Urna com 2 bolas vermelhas e 3 azuis. Probabilidade de tirar vermelha?`, b:`<b>[[2|5]]</b><br>2 favoráveis em 5 possíveis.`},

 /* ---------- m-cont (8) ---------- */
 {t:'m-cont', k:'regra', f:`O que diz o princípio multiplicativo?`, b:`<b>Multiplique as opções de cada etapa.</b><br>Um tracinho por etapa: m opções e depois n → m × n.`},
 {t:'m-cont', k:'regra', f:`Fórmula do número de apertos de mão entre n pessoas (todos com todos)?`, b:`<b>[[n(n − 1)|2]]</b><br>Divide por 2 porque A com B é o mesmo que B com A.`},
 {t:'m-cont', k:'exemplo', f:`Escolher presidente e vice entre 5 pessoas: a ordem importa? Quantas formas?`, b:`<b>Sim, importa: 20 formas.</b><br>Presidente: 5 opções; vice: 4 → 5 × 4 = 20.`},
 {t:'m-cont', k:'pegadinha', f:`Senhas de 3 algarismos: com e sem repetição dá o mesmo total?`, b:`<b>Não!</b><br>Com repetição: 10 × 10 × 10 = 1 000. Sem repetir: 10 × 9 × 8 = 720.`},
 {t:'m-cont', k:'pegadinha', f:`6 times, todos contra todos uma vez: 6 × 5 = 30 partidas?`, b:`<b>Não! São 15.</b><br>A × B e B × A são o mesmo jogo: 30 ÷ 2 = 15.`},
 {t:'m-cont', k:'conta', f:`5 camisas e 2 bermudas. Quantos conjuntos diferentes?`, b:`<b>10</b><br>5 × 2 = 10.`},
 {t:'m-cont', k:'conta', f:`Quantos anagramas tem a palavra GATO?`, b:`<b>24</b><br>4 letras diferentes: 4 × 3 × 2 × 1 = 24.`},
 {t:'m-cont', k:'conta', f:`5 pessoas, todas se cumprimentam uma vez. Quantos apertos de mão?`, b:`<b>10</b><br>[[5 × 4|2]] = [[20|2]] = 10.`}
];

/* Flashcards · PORTUGUÊS · P1 Leitura e interpretação
   Todas as frases, slogans e manchetes foram escritos para este guia (exceto trechos em domínio público, indicados). */
const CARDS_P1 = [
/* ---------- p-impl · Explícito, implícito e inferência (12) ---------- */
 {t:'p-impl', k:'conceito', f:`Informação explícita × implícita: qual a diferença?`, b:`<b>Explícita está escrita com todas as letras; implícita não está escrita, mas o texto permite concluir.</b> Para achar a explícita, volte ao texto e localize.`},
 {t:'p-impl', k:'conceito', f:`Pressuposto × subentendido: qual a diferença?`, b:`<b>Pressuposto vem marcado numa palavra; subentendido depende do contexto.</b> “Ele ainda mora lá” → já morava (pressuposto). “Que calor aqui…” → pedido para abrir a janela (subentendido).`},
 {t:'p-impl', k:'regra', f:`Cite palavras que costumam “carregar” um pressuposto.`, b:`<b>Parou de, continua, voltou a, ainda, de novo, finalmente.</b> O pressuposto vem “de brinde” na palavra.`},
 {t:'p-impl', k:'exemplo', f:`“Rafa voltou a treinar.” O que essa frase pressupõe?`, b:`<b>Que Rafa já treinava antes e tinha parado.</b> “Voltou a” carrega essa informação.`},
 {t:'p-impl', k:'exemplo', f:`“Choveu de novo no dia do passeio.” O que fica pressuposto?`, b:`<b>Que já tinha chovido antes.</b> A expressão “de novo” traz essa informação.`},
 {t:'p-impl', k:'exemplo', f:`Às 22 h, a mãe diz ao filho no videogame: “Já são dez horas, e amanhã tem aula.” Que tipo de implícito há?`, b:`<b>Subentendido: é um pedido para ele ir dormir.</b> Nada na frase diz “vá dormir”; é o contexto que mostra.`},
 {t:'p-impl', k:'exemplo', f:`“O goleiro fechou o gol na final.” Pelo contexto, o que significa “fechou o gol”?`, b:`<b>Defendeu tudo, não deixou a bola entrar.</b> Sentido descoberto pelo contexto, não pelo dicionário.`},
 {t:'p-impl', k:'regra', f:`O que diferencia uma inferência boa de uma invenção?`, b:`<b>A inferência boa tem pista no texto.</b> Inferir é concluir a partir de pistas, e não imaginar o que o texto não sustenta.`},
 {t:'p-impl', k:'conceito', f:`Tema × assunto do primeiro parágrafo: qual é mais amplo?`, b:`<b>O tema: é a ideia central, o que o texto inteiro quer discutir.</b> O primeiro parágrafo pode tratar só de um pedaço dele.`},
 {t:'p-impl', k:'regra', f:`Como descobrir o sentido de uma palavra difícil numa questão?`, b:`<b>Pelo contexto: troque a palavra por cada alternativa e veja qual mantém o sentido da frase.</b>`},
 {t:'p-impl', k:'pegadinha', f:`Uma alternativa é verdadeira no mundo real, mas o texto não fala disso. Pode ser a resposta?`, b:`<b>Não!</b> A resposta precisa caber no texto. Essa é a alternativa errada mais comum.`},
 {t:'p-impl', k:'pegadinha', f:`Alternativas com “sempre”, “nunca” ou “todos”: o que fazer?`, b:`<b>Desconfiar.</b> Essas palavras costumam extrapolar o que o texto diz.`},

/* ---------- p-tira · Tirinhas, charges e memes (12) ---------- */
 {t:'p-tira', k:'conceito', f:`Tirinha × charge: qual a diferença?`, b:`<b>Tirinha é uma sequência curta de quadros; charge critica um fato atual (política, cidade), muitas vezes com caricatura.</b>`},
 {t:'p-tira', k:'conceito', f:`Charge × cartum: qual a diferença?`, b:`<b>A charge critica um fato atual, com data; o cartum critica um comportamento, sem data.</b>`},
 {t:'p-tira', k:'conceito', f:`O que é um meme?`, b:`<b>Uma imagem conhecida reaproveitada com um texto novo.</b> O humor depende de o leitor reconhecer a imagem.`},
 {t:'p-tira', k:'regra', f:`Numa tirinha, em que quadro a graça costuma estar?`, b:`<b>No último quadro.</b> É ali que aparece a surpresa.`},
 {t:'p-tira', k:'regra', f:`De onde nasce o humor, quase sempre?`, b:`<b>Da quebra de expectativa.</b> Fontes comuns: duplo sentido, leitura literal de algo figurado, exagero e contraste entre fala e imagem.`},
 {t:'p-tira', k:'conceito', f:`O que é ironia?`, b:`<b>Dizer o contrário do que se pensa, e o contexto mostra isso.</b> Ironia = fala × situação apontando para lados opostos.`},
 {t:'p-tira', k:'exemplo', f:`Depois de duas horas na fila do banco, Léo diz: “Adorei esse passeio!”. Que recurso é esse?`, b:`<b>Ironia.</b> A situação (espera chata) mostra que ele quer dizer o contrário de “adorei”.`},
 {t:'p-tira', k:'exemplo', f:`Tirinha: o pai diz ao filho “Cai na real!”, e o menino se joga no chão. De onde vem o humor?`, b:`<b>Da interpretação literal de uma expressão figurada.</b> “Cair na real” significa encarar a realidade, não cair de verdade.`},
 {t:'p-tira', k:'exemplo', f:`Numa tirinha, o balão tem forma de nuvem e se liga ao personagem por bolinhas. O que ele indica?`, b:`<b>Pensamento.</b> O personagem não está falando em voz alta.`},
 {t:'p-tira', k:'exemplo', f:`Charge: um rio cheio de lixo e, na margem, a placa “Bem-vindo ao rio mais limpo do estado”. O que ela critica?`, b:`<b>A poluição do rio (e o descaso com ela).</b> A crítica nasce do contraste entre a placa e a imagem.`},
 {t:'p-tira', k:'pegadinha', f:`Na questão sobre charge, basta descrever o que aparece na imagem?`, b:`<b>Não!</b> É preciso interpretar o efeito: qual crítica, humor ou ironia a imagem produz.`},
 {t:'p-tira', k:'pegadinha', f:`Ironia é o mesmo que mentira?`, b:`<b>Não!</b> Quem mente quer enganar; quem usa ironia quer ser entendido, e o contexto revela o sentido oposto.`},

/* ---------- p-arg · Texto argumentativo (12) ---------- */
 {t:'p-arg', k:'conceito', f:`O que é a tese de um texto argumentativo?`, b:`<b>O ponto de vista que o autor defende.</b> Tese = O QUE o autor defende.`},
 {t:'p-arg', k:'conceito', f:`O que é um argumento?`, b:`<b>A razão que sustenta a tese, para convencer o leitor.</b> Argumento = POR QUE eu deveria concordar.`},
 {t:'p-arg', k:'regra', f:`Onde a tese costuma aparecer no texto?`, b:`<b>No começo, ou retomada na conclusão.</b> Pistas: “Por isso…”, “Portanto…”.`},
 {t:'p-arg', k:'regra', f:`O que a estrutura “É verdade que…, mas…” faz?`, b:`<b>Concessão + refutação: o autor reconhece a ideia contrária e depois a rebate.</b> Isso é um contra-argumento.`},
 {t:'p-arg', k:'exemplo', f:`“Segundo um neurologista, dormir pouco prejudica a memória.” Que tipo de argumento é esse?`, b:`<b>Argumento de autoridade.</b> Usa a fala de um especialista.`},
 {t:'p-arg', k:'exemplo', f:`“Sete em cada dez alunos dormem menos de oito horas, aponta pesquisa.” Que tipo de argumento é esse?`, b:`<b>Dados e pesquisas.</b> Usa números e estatísticas como prova.`},
 {t:'p-arg', k:'exemplo', f:`“Veja o caso de Lucas: passou a ler 20 minutos por dia e suas redações melhoraram.” Que tipo de argumento é esse?`, b:`<b>Argumento por exemplo.</b> Apresenta um caso concreto.`},
 {t:'p-arg', k:'exemplo', f:`“Se o lixo continuar na rua, os bueiros entopem e a cidade alaga.” Que tipo de argumento é esse?`, b:`<b>Causa e consequência.</b> Mostra o que acontece por causa de uma atitude.`},
 {t:'p-arg', k:'exemplo', f:`“Assim como o cinto de segurança virou hábito, o capacete também pode virar.” Que tipo de argumento é esse?`, b:`<b>Comparação.</b> Aproxima duas situações parecidas.`},
 {t:'p-arg', k:'exemplo', f:`“É claro que o uniforme custa caro, mas ele evita a competição por roupas de marca.” Qual parte é a concessão?`, b:`<b>“É claro que o uniforme custa caro”.</b> O autor cede um pouco; o “mas…” traz a refutação.`},
 {t:'p-arg', k:'pegadinha', f:`Uma alternativa traz um dos argumentos do texto. Ela pode ser a tese?`, b:`<b>Não!</b> A tese é a ideia que os argumentos sustentam. Argumento é o “porquê”, não o “quê”.`},
 {t:'p-arg', k:'pegadinha', f:`Mostrar a opinião contrária enfraquece o texto argumentativo?`, b:`<b>Não! Fortalece.</b> O autor mostra que conhece o outro lado e o rebate (concessão + refutação).`},

/* ---------- p-pub · Publicidade, propaganda e persuasão (12) ---------- */
 {t:'p-pub', k:'conceito', f:`Publicidade × propaganda (campanha): qual a diferença?`, b:`<b>Publicidade vende produtos e marcas; propaganda divulga ideias e causas.</b> PUBlicidade vende PRODUTO; PROPaganda PROPõe uma ideia.`},
 {t:'p-pub', k:'regra', f:`Cite recursos de persuasão de anúncios.`, b:`<b>Imperativo, falar com “você”, slogan, rima e trocadilho, apelo à emoção ou à autoridade, urgência, imagem e cores.</b>`},
 {t:'p-pub', k:'regra', f:`Diante de um anúncio, quais duas perguntas fazer?`, b:`<b>Qual é a finalidade do texto? Para quem ele foi feito?</b> (público-alvo)`},
 {t:'p-pub', k:'conceito', f:`O que é um slogan?`, b:`<b>Uma frase curta e fácil de lembrar que identifica a marca ou a campanha.</b> Costuma usar rima, ritmo ou trocadilho.`},
 {t:'p-pub', k:'exemplo', f:`“Experimente hoje. Você merece.” Em que modo está o verbo “Experimente” e para quê?`, b:`<b>Imperativo: chama o leitor à ação.</b> E o “você” cria proximidade.`},
 {t:'p-pub', k:'exemplo', f:`Slogan: “Pão Dourado: quentinho e caprichado.” Que recurso ajuda a memorizar?`, b:`<b>A rima (Dourado / caprichado).</b> Frase curta e sonora gruda na memória.`},
 {t:'p-pub', k:'exemplo', f:`“Só hoje! Últimas unidades!” Que recurso de persuasão é esse?`, b:`<b>Urgência e exclusividade.</b> O prazo curto pressiona o consumidor a agir logo.`},
 {t:'p-pub', k:'exemplo', f:`“Tênis Raio: o tênis do campeão olímpico.” Que apelo é esse?`, b:`<b>Apelo à autoridade (celebridade).</b> Se o campeão usa, o produto “deve ser bom”.`},
 {t:'p-pub', k:'exemplo', f:`“Colchão Nuvem: chegou a hora de deitar e rolar.” Que recurso há em “deitar e rolar”?`, b:`<b>Duplo sentido (trocadilho).</b> Literal: deitar no colchão. Figurado: aproveitar à vontade.`},
 {t:'p-pub', k:'exemplo', f:`“Mãe: o abraço que nunca envelhece. Floricultura Jardim.” Qual o principal apelo?`, b:`<b>Apelo à emoção.</b> Liga o produto ao carinho pela mãe.`},
 {t:'p-pub', k:'exemplo', f:`Cartaz: “Vacine seu filho. Proteja quem você ama.” Qual é a finalidade?`, b:`<b>Conscientizar os pais a vacinar os filhos.</b> É propaganda (campanha), com imperativo e apelo à emoção.`},
 {t:'p-pub', k:'pegadinha', f:`Uma campanha contra a dengue mostra um repelente. A finalidade é vender repelente?`, b:`<b>Não!</b> O objetivo é mudar comportamento. Não confunda o objeto que aparece com a finalidade.`},

/* ---------- p-gen · Gêneros jornalísticos e fato × opinião (8) ---------- */
 {t:'p-gen', k:'conceito', f:`O que é uma notícia?`, b:`<b>Relato objetivo de um fato recente, em 3ª pessoa.</b> A manchete resume o fato e o lide abre o texto.`},
 {t:'p-gen', k:'regra', f:`Quais perguntas o lide responde?`, b:`<b>O quê, quem, quando, onde, como e por quê.</b> O lide é o 1º parágrafo da notícia.`},
 {t:'p-gen', k:'conceito', f:`Notícia × reportagem: qual a diferença?`, b:`<b>A notícia relata o fato; a reportagem aprofunda o tema, com entrevistas, dados e mais de um ponto de vista.</b>`},
 {t:'p-gen', k:'conceito', f:`Artigo de opinião × editorial: qual a diferença?`, b:`<b>O artigo é assinado por um autor; o editorial é a opinião do próprio jornal, sem assinatura individual.</b> Os dois defendem pontos de vista.`},
 {t:'p-gen', k:'conceito', f:`O que é uma crônica?`, b:`<b>Texto que parte de um fato do dia a dia com olhar pessoal, leve, às vezes com humor.</b>`},
 {t:'p-gen', k:'exemplo', f:`“O show de ontem foi o melhor do ano.” Fato ou opinião?`, b:`<b>Opinião: “o melhor” é julgamento.</b> Fato pode ser verificado (“O show durou duas horas”). Pistas de opinião: adjetivos de avaliação, “acho”, “deveria”, “infelizmente”.`},
 {t:'p-gen', k:'exemplo', f:`Manchetes do mesmo fato: “Prefeitura entrega ponte” × “Prefeitura entrega ponte com dois anos de atraso”. O que a segunda revela?`, b:`<b>Um enfoque diferente, que destaca o atraso (tom crítico).</b> A escolha das palavras revela a posição de cada veículo.`},
 {t:'p-gen', k:'pegadinha', f:`Uma notícia cita entre aspas a opinião de um entrevistado. Ela deixa de ser notícia?`, b:`<b>Não!</b> A opinião é do entrevistado, não do jornalista.`},

/* ---------- p-fake · Fake news (8) ---------- */
 {t:'p-fake', k:'regra', f:`Qual é o checklist FADUT antes de compartilhar?`, b:`<b>Fonte, Autor, Data, URL, Tom.</b> Tom sensacionalista é sinal de alerta.`},
 {t:'p-fake', k:'exemplo', f:`“URGENTE!!! COMPARTILHE ANTES QUE APAGUEM!!!” Que sinais de alerta aparecem?`, b:`<b>Caixa alta, excesso de “!!!” e pedido urgente de compartilhamento.</b> Tom sensacionalista típico de fake news.`},
 {t:'p-fake', k:'exemplo', f:`A notícia vem do link “noticiasverdadeiras-oficial.click”, sem autor. Que sinais de alerta há?`, b:`<b>URL estranha, fonte desconhecida e autor não identificado.</b>`},
 {t:'p-fake', k:'exemplo', f:`Foto de uma enchente de outro país, de anos atrás, circula como se fosse da sua cidade hoje. Qual o problema?`, b:`<b>Imagem fora do contexto original.</b> A foto é real, mas o lugar e a data estão errados.`},
 {t:'p-fake', k:'regra', f:`O que fazer antes de acreditar numa notícia surpreendente?`, b:`<b>Procurar a informação em veículos confiáveis, consultar agências de checagem e conferir a data e a origem da imagem.</b>`},
 {t:'p-fake', k:'conceito', f:`Sátira (notícia inventada de propósito para fazer humor) é fake news?`, b:`<b>Não, desde que o leitor saiba que é humor.</b>`},
 {t:'p-fake', k:'pegadinha', f:`Uma notícia verdadeira, mas antiga, compartilhada como se fosse de hoje, desinforma?`, b:`<b>Sim!</b> É descontextualização: mesmo verdadeira, fora da data e do contexto ela engana.`},
 {t:'p-fake', k:'pegadinha', f:`A mensagem já foi compartilhada milhares de vezes. Isso prova que é verdadeira?`, b:`<b>Não!</b> Compartilhamento não é prova. Confira a fonte.`},

/* ---------- p-lit · Narrativa e poema (8) ---------- */
 {t:'p-lit', k:'regra', f:`Quais são os cinco elementos da narrativa?`, b:`<b>Narrador, personagens, tempo, espaço e enredo.</b>`},
 {t:'p-lit', k:'regra', f:`Qual é a sequência do enredo?`, b:`<b>Situação inicial → conflito → clímax → desfecho.</b> Clímax é o momento de maior tensão.`},
 {t:'p-lit', k:'conceito', f:`O que é o conflito de uma narrativa?`, b:`<b>O problema que move a história.</b> É ele que faz a ação andar.`},
 {t:'p-lit', k:'conceito', f:`Narrador observador × onisciente: qual a diferença?`, b:`<b>O observador conta de fora o que se vê; o onisciente sabe o que os personagens pensam e sentem.</b> Os dois são de 3ª pessoa.`},
 {t:'p-lit', k:'exemplo', f:`“Naquele domingo, eu e meu primo nos perdemos na feira.” Qual é o foco narrativo?`, b:`<b>1ª pessoa: narrador-personagem.</b> Quem conta participa da história (“eu”).`},
 {t:'p-lit', k:'exemplo', f:`Passe para o discurso indireto: Davi prometeu: “Eu trago o livro amanhã.”`, b:`<b>Davi prometeu que traria o livro no dia seguinte.</b> Entra o “que”; muda o verbo (trago → traria), o pronome e o “amanhã”.`},
 {t:'p-lit', k:'exemplo', f:`“Bia olhou o boletim. Que vergonha, meu Deus! Guardou o papel no fundo da mochila.” Que discurso aparece?`, b:`<b>Discurso indireto livre.</b> O pensamento de Bia se mistura à voz do narrador, sem travessão nem “disse que”.`},
 {t:'p-lit', k:'pegadinha', f:`O eu lírico de um poema é sempre o próprio autor?`, b:`<b>Não!</b> O eu lírico é a “voz” do poema, que não é necessariamente o autor.`},

/* ---------- p-inter · Intertextualidade (8) ---------- */
 {t:'p-inter', k:'conceito', f:`O que é paródia?`, b:`<b>Imitação de um texto conhecido que muda o sentido, geralmente para criticar ou fazer humor.</b> Pa-RÓ-dia faz RIr.`},
 {t:'p-inter', k:'conceito', f:`O que é paráfrase?`, b:`<b>Reescrever um texto com outras palavras, mantendo o sentido original.</b> Pa-RÁ-frase REpete o sentido.`},
 {t:'p-inter', k:'conceito', f:`Citação × alusão: qual a diferença?`, b:`<b>A citação reproduz o trecho entre aspas, indicando o autor; a alusão só lembra o outro texto, sem copiar.</b>`},
 {t:'p-inter', k:'conceito', f:`O que é epígrafe?`, b:`<b>Trecho de outro autor colocado no início de uma obra ou capítulo.</b>`},
 {t:'p-inter', k:'exemplo', f:`“Minha escola tem goteiras, / onde pinga sem parar.” Que relação há com a “Canção do Exílio”?`, b:`<b>Paródia.</b> Imita “Minha terra tem palmeiras, / Onde canta o Sabiá” (Gonçalves Dias, 1843) mudando o sentido para criticar a escola.`},
 {t:'p-inter', k:'exemplo', f:`Anúncio de loja: “Penso, logo compro.” A que frase famosa ele faz referência?`, b:`<b>“Penso, logo existo”, do filósofo Descartes.</b> O anúncio troca “existo” por “compro” para brincar com o original.`},
 {t:'p-inter', k:'exemplo', f:`Original: “Quem espera sempre alcança.” Reescrita: “Quem tem paciência consegue o que quer.” Qual é a relação?`, b:`<b>Paráfrase.</b> Outras palavras, mesmo sentido.`},
 {t:'p-inter', k:'pegadinha', f:`O novo texto imita a forma do original, mas brinca com ele e muda o sentido. É paráfrase?`, b:`<b>Não! É paródia.</b> O que decide é o sentido: se mudou, é paródia; se manteve, é paráfrase.`}
];

/* Flashcards · Português · P2 (Sentido, coesão e argumentação)
   Todos os exemplos foram escritos para este guia (exceto o trecho de Camões, domínio público, indicado). */
const CARDS_P2 = [
/* ---------- p-conj · Conjunções e relações de sentido (12) ---------- */
 {t:'p-conj', k:'regra', f:`Cite as conjunções de <b>oposição</b> (adversativas) do “ritmo de canto”.`, b:`<b>Mas, porém, contudo, todavia, entretanto, no entanto.</b><br>Uma pode substituir a outra sem mudar o sentido.`},
 {t:'p-conj', k:'conceito', f:`Qual a diferença entre <b>oposição</b> e <b>concessão</b>?`, b:`<b>Na concessão, o obstáculo é admitido, mas não impede o resultado</b>, e o verbo costuma ir para o subjuntivo. “Embora estivesse cansado, terminou” = “Estava cansado, mas terminou”.`},
 {t:'p-conj', k:'regra', f:`As conjunções concessivas (embora, ainda que, mesmo que) pedem o verbo em qual modo?`, b:`<b>Subjuntivo.</b><br>“Embora <b>esteja</b> frio, vou sair.” (e não “embora está”).`},
 {t:'p-conj', k:'exemplo', f:`“<b>Embora</b> chovesse, fomos à praia.” Qual a relação de sentido?`, b:`<b>Concessão.</b><br>A chuva é admitida, mas não impede o passeio.`},
 {t:'p-conj', k:'exemplo', f:`“Fiquei em casa <b>porque</b> estava gripado.” Qual a relação de sentido?`, b:`<b>Causa.</b><br>Estar gripado é o motivo de ficar em casa.`},
 {t:'p-conj', k:'exemplo', f:`“<b>Como</b> estava chovendo, levei o guarda-chuva.” O que indica “como” no início da frase?`, b:`<b>Causa</b> (= já que, visto que).<br>Atenção: “como” também pode ser comparação ou conformidade, dependendo da frase.`},
 {t:'p-conj', k:'exemplo', f:`“Falou <b>tão</b> alto <b>que</b> acordou o bebê.” Qual a relação de sentido?`, b:`<b>Consequência.</b><br>“Tão… que” mostra o resultado de falar alto.`},
 {t:'p-conj', k:'exemplo', f:`“Saiu cedo <b>para que</b> não pegasse trânsito.” Qual a relação de sentido?`, b:`<b>Finalidade.</b><br>Mostra o objetivo de sair cedo (= a fim de que).`},
 {t:'p-conj', k:'exemplo', f:`“<b>À medida que</b> subíamos a serra, o ar ficava mais frio.” Qual a relação de sentido?`, b:`<b>Proporção.</b><br>Uma coisa aumenta junto com a outra (= à proporção que).`},
 {t:'p-conj', k:'exemplo', f:`“Fiz o bolo <b>conforme</b> a receita mandava.” Qual a relação de sentido?`, b:`<b>Conformidade.</b><br>Conforme = segundo = como (de acordo com).`},
 {t:'p-conj', k:'pegadinha', f:`“Pois” sempre indica causa?`, b:`<b>Não!</b> No início da oração = causa/explicação (“Saí cedo, pois tinha prova”). Deslocado, entre vírgulas = conclusão (“O jogo foi, pois, adiado”).`},
 {t:'p-conj', k:'pegadinha', f:`“Queria ir, <b>mais</b> não deu.” Está correto?`, b:`<b>Não!</b> O certo é “<b>mas</b>” (oposição).<br>“Mais” indica quantidade: “quero mais suco”.`},

/* ---------- p-coes · Coesão referencial (12) ---------- */
 {t:'p-coes', k:'regra', f:`Como descobrir a que termo um pronome se refere?`, b:`<b>Troque o pronome pelo termo candidato</b> e veja se a frase faz sentido.<br>Volte sempre ao texto para conferir.`},
 {t:'p-coes', k:'regra', f:`Pela norma-padrão, o pronome relativo “<b>onde</b>” só deve ser usado para quê?`, b:`<b>Para lugar físico.</b><br>“A cidade <b>onde</b> nasci.” Para tempo ou situação, use “em que” ou “no qual”.`},
 {t:'p-coes', k:'pegadinha', f:`“Chegou o momento <b>onde</b> tudo mudou.” Está de acordo com a norma-padrão?`, b:`<b>Não!</b> Momento não é lugar físico.<br>Certo: “o momento <b>em que</b> tudo mudou”.`},
 {t:'p-coes', k:'pegadinha', f:`“Conheci o menino <b>cujo o</b> pai é piloto.” Está correto?`, b:`<b>Não!</b> “Cujo” indica posse e não vem seguido de artigo.<br>Certo: “o menino <b>cujo pai</b> é piloto”.`},
 {t:'p-coes', k:'conceito', f:`<b>Este</b> × <b>esse</b>: qual anuncia e qual retoma?`, b:`<b>“Este” anuncia</b> o que ainda vem; <b>“esse” retoma</b> o que já foi dito.<br>“Meu pedido é <b>este</b>: silêncio.” · “Silêncio: <b>esse</b> foi meu pedido.”`},
 {t:'p-coes', k:'conceito', f:`O que é um <b>hiperônimo</b> na coesão do texto?`, b:`<b>Uma palavra de sentido mais geral</b> que retoma outra mais específica.<br>“O cachorro latiu. O <b>animal</b> estava assustado.”`},
 {t:'p-coes', k:'conceito', f:`O pronome relativo “<b>quem</b>” se refere a quê?`, b:`<b>A pessoas</b>, geralmente depois de preposição.<br>“A amiga <b>de quem</b> falei chegou.”`},
 {t:'p-coes', k:'exemplo', f:`“Comprei um livro e uma caneta. <b>Ela</b> custou dois reais.” A que termo “Ela” se refere?`, b:`<b>À caneta.</b><br>“Ela” é feminino; “livro” é masculino.`},
 {t:'p-coes', k:'exemplo', f:`“Lia adotou um gato. <b>O bichano</b> dorme o dia todo.” A que termo “O bichano” se refere?`, b:`<b>Ao gato.</b><br>É um sinônimo usado para não repetir a palavra.`},
 {t:'p-coes', k:'exemplo', f:`“Marta chegou cedo. Trouxe pão.” Quem trouxe pão, e qual recurso de coesão foi usado?`, b:`<b>Marta; elipse.</b><br>O sujeito foi omitido porque já se sabe quem é: “Marta chegou cedo. (Ø) Trouxe pão.”`},
 {t:'p-coes', k:'exemplo', f:`“Visitei o museu <b>de que</b> você gostou.” A que termo o “que” se refere?`, b:`<b>Ao museu.</b><br>É pronome relativo: retoma “museu” e inicia nova oração (= do qual).`},
 {t:'p-coes', k:'pegadinha', f:`“Pedro avisou ao pai que <b>ele</b> estava atrasado.” Quem estava atrasado?`, b:`<b>Não dá para saber: a frase é ambígua.</b><br>“Ele” pode ser Pedro ou o pai.`},

/* ---------- p-fig · Figuras de linguagem (12) ---------- */
 {t:'p-fig', k:'pegadinha', f:`“Ela é delicada <b>como</b> uma flor.” É metáfora?`, b:`<b>Não! É comparação</b>, porque tem o conectivo “como”.<br>Metáfora seria: “Ela é uma flor.”`},
 {t:'p-fig', k:'exemplo', f:`“Meu irmão é uma tartaruga.” Que figura de linguagem?`, b:`<b>Metáfora.</b><br>Compara o irmão a uma tartaruga (lentidão) sem usar conectivo.`},
 {t:'p-fig', k:'exemplo', f:`“Adoro ler Monteiro Lobato.” Que figura de linguagem?`, b:`<b>Metonímia.</b><br>O nome do autor está no lugar da obra dele.`},
 {t:'p-fig', k:'exemplo', f:`“A lua espiava os namorados pela janela.” Que figura de linguagem?`, b:`<b>Personificação.</b><br>“Espiar” é ação humana atribuída à lua.`},
 {t:'p-fig', k:'exemplo', f:`“Já te liguei um milhão de vezes!” Que figura de linguagem?`, b:`<b>Hipérbole.</b><br>Exagero intencional para dar ênfase.`},
 {t:'p-fig', k:'exemplo', f:`“O vendedor <b>faltou com a verdade</b>.” Que figura de linguagem?`, b:`<b>Eufemismo.</b><br>Suaviza algo desagradável: em vez de “mentiu”.`},
 {t:'p-fig', k:'exemplo', f:`“Que menino organizado! Deixou o quarto todo bagunçado.” Que figura de linguagem?`, b:`<b>Ironia.</b><br>Diz “organizado” querendo dizer o contrário.`},
 {t:'p-fig', k:'exemplo', f:`“Na vitória e na derrota, estaremos juntos.” Que figura de linguagem?`, b:`<b>Antítese.</b><br>Ideias opostas (vitória × derrota) lado a lado.`},
 {t:'p-fig', k:'exemplo', f:`“É ferida que dói, e não se sente.” (Camões) Que figura de linguagem?`, b:`<b>Paradoxo.</b><br>Opostos fundidos numa mesma ideia: doer sem se sentir é uma contradição aparente.`},
 {t:'p-fig', k:'exemplo', f:`“Senti um cheiro <b>doce</b> vindo da cozinha.” Que figura de linguagem?`, b:`<b>Sinestesia.</b><br>Mistura sentidos: olfato (cheiro) com paladar (doce).`},
 {t:'p-fig', k:'conceito', f:`<b>Antítese</b> × <b>paradoxo</b>: qual a diferença?`, b:`<b>Antítese = opostos lado a lado</b> (“amor e ódio”). <b>Paradoxo = opostos grudados</b>, contradição aparente (“silêncio ensurdecedor”).`},
 {t:'p-fig', k:'conceito', f:`<b>Aliteração</b> × <b>assonância</b>: qual repete consoantes e qual repete vogais?`, b:`<b>Aliteração = sons consonantais</b> (“O rato roeu a roupa do rei de Roma”).<br><b>Assonância = sons vocálicos</b> (“A arara clara cantava na mata”).`},

/* ---------- p-sent · Denotação, conotação, polissemia e ambiguidade (8) ---------- */
 {t:'p-sent', k:'conceito', f:`<b>Denotação</b> × <b>conotação</b>: qual a diferença?`, b:`<b>Denotação = sentido literal, de dicionário; conotação = sentido figurado.</b><br>Macete: DENOtação = Dicionário; CONOtação = COm imaginação.`},
 {t:'p-sent', k:'exemplo', f:`“Meu tio tem um coração de <b>pedra</b>.” A palavra “pedra” está em sentido denotativo ou conotativo?`, b:`<b>Conotativo</b> (figurado).<br>Quer dizer que ele é insensível, e não que o coração seja de pedra de verdade.`},
 {t:'p-sent', k:'conceito', f:`O que é <b>polissemia</b>?`, b:`<b>Uma mesma palavra com vários sentidos ligados entre si.</b><br>“Pegar” ônibus, pegar gripe, pegar sol, pegar o jeito.`},
 {t:'p-sent', k:'regra', f:`<b>Sessão</b>, <b>seção</b> e <b>cessão</b>: o que significa cada uma?`, b:`<b>Sessão</b> = reunião, exibição (de cinema). <b>Seção</b> = setor, divisão. <b>Cessão</b> = ato de ceder.`},
 {t:'p-sent', k:'regra', f:`<b>Eminente</b> × <b>iminente</b>: o que significa cada uma?`, b:`<b>Eminente = importante</b> (“um eminente cientista”).<br><b>Iminente = prestes a acontecer</b> (“chuva iminente”).`},
 {t:'p-sent', k:'pegadinha', f:`“O <b>tráfico</b> na avenida está lento hoje.” Está correto?`, b:`<b>Não!</b> O certo é “<b>tráfego</b>” (trânsito).<br>“Tráfico” é comércio ilegal.`},
 {t:'p-sent', k:'exemplo', f:`“O policial viu o ladrão correndo.” Por que a frase é ambígua?`, b:`<b>Não se sabe quem estava correndo:</b> o policial ou o ladrão.`},
 {t:'p-sent', k:'pegadinha', f:`A ambiguidade é sempre um defeito do texto?`, b:`<b>Não!</b> Em anúncios e tirinhas costuma ser <b>proposital</b> (humor, criatividade). Em texto informativo ou na redação, é falha.`},

/* ---------- p-modal · Modalização e operadores argumentativos (8) ---------- */
 {t:'p-modal', k:'exemplo', f:`“<b>Talvez</b> o show seja adiado.” O que a palavra destacada expressa?`, b:`<b>Possibilidade/dúvida.</b><br>O autor não tem certeza do adiamento.`},
 {t:'p-modal', k:'pegadinha', f:`Trocar “<b>provavelmente</b>” por “<b>certamente</b>” mantém o sentido da frase?`, b:`<b>Não!</b> Muda de hipótese (dúvida) para certeza.`},
 {t:'p-modal', k:'exemplo', f:`“<b>É preciso</b> economizar água.” Que atitude do autor a expressão revela?`, b:`<b>Obrigação/necessidade.</b><br>Equivale a “deve-se”, “é necessário”.`},
 {t:'p-modal', k:'exemplo', f:`“<b>Felizmente</b>, ninguém se feriu.” O que a palavra destacada expressa?`, b:`<b>Avaliação positiva do autor.</b><br>Mostra que ele se alegra com o fato.`},
 {t:'p-modal', k:'exemplo', f:`“Todos vieram à festa, <b>inclusive</b> o diretor.” O que “inclusive” indica?`, b:`<b>O argumento mais forte ou inesperado.</b><br>Funciona como “até”: a presença do diretor é a mais surpreendente.`},
 {t:'p-modal', k:'regra', f:`Que sentido introduzem “<b>ou seja</b>” e “<b>isto é</b>”?`, b:`<b>Explicação</b> (reformulam o que foi dito).<br>“Choveu 100 mm, <b>ou seja</b>, muita chuva.”`},
 {t:'p-modal', k:'exemplo', f:`“O técnico <b>admitiu</b> o erro.” O que o verbo “admitiu” sugere?`, b:`<b>Que se trata de algo negativo</b>, reconhecido por ele.<br>“Afirmou” seria neutro.`},
 {t:'p-modal', k:'conceito', f:`Ao introduzir uma fala, que diferença há entre “<b>afirmou</b>” e “<b>alegou</b>”?`, b:`<b>“Afirmou” é neutro; “alegou” sugere que a fala não está provada.</b><br>Macete: alegou = disse sem provar.`}
];

/* Flashcards — Módulo P3: Gramática a serviço do texto */
const CARDS_P3 = [
/* p-per — Período composto (12) */
 {t:'p-per', k:'conceito', f:`Período simples × período composto: qual a diferença?`, b:`<b>Simples tem uma oração (um verbo); composto tem duas ou mais.</b><br>“Choveu.” é simples; “Choveu e esfriou.” é composto.`},
 {t:'p-per', k:'regra', f:`Como descobrir quantas orações há num período?`, b:`<b>Conte os verbos: cada verbo ou locução verbal = uma oração.</b><br>“Vou estudar” é locução verbal: conta como uma só.`},
 {t:'p-per', k:'conceito', f:`Oração coordenada × oração subordinada?`, b:`<b>Coordenada é independente; subordinada depende da oração principal.</b><br>Macete: coordenada anda sozinha; SUBordinada é SUBmissa.`},
 {t:'p-per', k:'conceito', f:`Coordenada assindética × coordenada sindética?`, b:`<b>Assindética: sem conjunção (só vírgula). Sindética: com conjunção.</b><br>“Acordei, tomei café, saí.” (assindéticas) · “Acordei <b>e saí</b>.” (a destacada é sindética aditiva)`},
 {t:'p-per', k:'exemplo', f:`“Treinou muito, <b>mas perdeu o jogo</b>.” Como se classifica a oração destacada?`, b:`<b>Coordenada sindética adversativa.</b><br>“Mas” indica oposição, e as duas orações são independentes.`},
 {t:'p-per', k:'exemplo', f:`“Revisei a matéria, <b>portanto estou tranquilo</b>.” Como se classifica a oração destacada?`, b:`<b>Coordenada sindética conclusiva.</b><br>“Portanto” (como “logo” e “por isso”) introduz uma conclusão.`},
 {t:'p-per', k:'regra', f:`Quais são os três tipos de oração subordinada?`, b:`<b>Substantiva, adjetiva e adverbial.</b><br>Substantiva funciona como substantivo; adjetiva caracteriza um nome; adverbial dá uma circunstância (tempo, causa, condição…).`},
 {t:'p-per', k:'exemplo', f:`“É importante <b>que você estude</b>.” A oração destacada é subordinada de que tipo?`, b:`<b>Subordinada substantiva.</b><br>Ela funciona como sujeito de “é importante” (isto é importante).`},
 {t:'p-per', k:'exemplo', f:`“<b>Ora</b> chove, <b>ora</b> faz sol.” Como se classificam essas orações?`, b:`<b>Coordenadas sindéticas alternativas.</b><br>“Ora… ora” (como “ou… ou”) indica fatos que se alternam.`},
 {t:'p-per', k:'exemplo', f:`“<b>Se chover</b>, o passeio será adiado.” Que circunstância a oração destacada indica?`, b:`<b>Condição (subordinada adverbial condicional).</b><br>O adiamento depende de chover.`},
 {t:'p-per', k:'conceito', f:`O que é uma oração reduzida?`, b:`<b>Oração sem conjunção, com verbo no infinitivo, gerúndio ou particípio.</b><br>“Ao chegar, liguei.” = “Quando cheguei, liguei.”`},
 {t:'p-per', k:'pegadinha', f:`Toda oração iniciada por “que” é adjetiva?`, b:`<b>Não!</b> Só é adjetiva se “que” for pronome relativo (dá para trocar por “o qual”). Em “Espero que você venha”, a oração é substantiva.`},

/* p-adj — Orações adjetivas (12) */
 {t:'p-adj', k:'conceito', f:`Com que tipo de palavra começa uma oração adjetiva?`, b:`<b>Com um pronome relativo</b> (que, o qual, onde, cujo…).<br>Ela caracteriza um nome: “O livro <b>que comprei</b> é ótimo.”`},
 {t:'p-adj', k:'conceito', f:`Por que a oração adjetiva tem esse nome?`, b:`<b>Porque funciona como um adjetivo: caracteriza um substantivo.</b><br>“Aluno <b>que estuda</b>” = “aluno <b>estudioso</b>”.`},
 {t:'p-adj', k:'regra', f:`Oração adjetiva restritiva: com ou sem vírgula? O que ela faz?`, b:`<b>Sem vírgula. Restringe: separa só uma parte do grupo.</b><br>Macete: sem vírgula = só ALGUNS.`},
 {t:'p-adj', k:'regra', f:`Oração adjetiva explicativa: com ou sem vírgula? O que ela faz?`, b:`<b>Entre vírgulas. Acrescenta informação sobre todo o grupo</b> e pode ser retirada.<br>Macete: com vírgula = vale para TODOS.`},
 {t:'p-adj', k:'exemplo', f:`“Os alunos que estudaram passaram.” Todos os alunos passaram?`, b:`<b>Não. Só os que estudaram passaram.</b><br>Oração restritiva (sem vírgula): separa um grupo dentro da turma.`},
 {t:'p-adj', k:'exemplo', f:`“Os convidados, que chegaram cedo, ganharam um brinde.” Quantos convidados chegaram cedo?`, b:`<b>Todos.</b><br>Oração explicativa (entre vírgulas): a informação vale para todos os convidados, e todos ganharam o brinde.`},
 {t:'p-adj', k:'exemplo', f:`“Meu irmão que mora em Recife vem me visitar.” O que se pode deduzir da falta de vírgulas?`, b:`<b>Que a pessoa tem mais de um irmão.</b><br>A restritiva separa este irmão dos outros.`},
 {t:'p-adj', k:'exemplo', f:`“Os gatos, que são independentes, dormem muito.” O que as vírgulas fazem a frase afirmar?`, b:`<b>Que todos os gatos são independentes.</b><br>A explicativa atribui a característica ao grupo inteiro; sem vírgulas, falaria só dos gatos independentes.`},
 {t:'p-adj', k:'pegadinha', f:`“O Sol que é uma estrela ilumina a Terra.” A pontuação está correta?`, b:`<b>Não!</b> Correto: “O Sol, que é uma estrela, ilumina a Terra.”<br>Só existe um Sol: com nome único, a oração é explicativa.`},
 {t:'p-adj', k:'pegadinha', f:`“O Sol, que é uma estrela ilumina a Terra.” O que está errado?`, b:`<b>Falta a segunda vírgula</b> (depois de “estrela”).<br>A oração explicativa fica <b>entre</b> vírgulas: abre e fecha.`},
 {t:'p-adj', k:'exemplo', f:`“A professora, <b>que é muito paciente</b>, explicou de novo.” A oração destacada é restritiva ou explicativa?`, b:`<b>Explicativa.</b><br>Está entre vírgulas e só acrescenta uma informação sobre a professora: pode ser retirada.`},
 {t:'p-adj', k:'regra', f:`Que expressão pode substituir o “que” para confirmar que ele é pronome relativo?`, b:`<b>“O qual” (a qual, os quais, as quais).</b><br>“O aluno <b>que</b> faltou” = “o aluno <b>o qual</b> faltou”. Se a troca funciona, a oração é adjetiva.`},

/* p-vl — Verbos de ligação e predicativo (8) */
 {t:'p-vl', k:'conceito', f:`O que é um verbo de ligação?`, b:`<b>Verbo que não indica ação: liga o sujeito a um estado ou qualidade.</b><br>“Pedro <b>é</b> calmo.”`},
 {t:'p-vl', k:'conceito', f:`Em “O dia está lindo”, qual é o predicativo do sujeito?`, b:`<b>“Lindo”.</b><br>É a característica atribuída ao sujeito (“o dia”) por meio do verbo de ligação “está”.`},
 {t:'p-vl', k:'regra', f:`Cite os principais verbos de ligação.`, b:`<b>Ser, estar, parecer, permanecer, ficar, continuar, andar, virar</b> (e tornar-se).<br>Teste: depois dele vem uma característica do sujeito?`},
 {t:'p-vl', k:'exemplo', f:`“Pedro é nervoso” × “Pedro está nervoso”: qual a diferença de sentido?`, b:`<b>“É” = característica permanente; “está” = estado passageiro.</b><br>Ser = essência; estar = momento.`},
 {t:'p-vl', k:'exemplo', f:`“O céu ficou escuro.” Que sentido o verbo de ligação expressa?`, b:`<b>Mudança de estado.</b><br>O céu não era escuro e passou a ser.`},
 {t:'p-vl', k:'exemplo', f:`“Ana parece cansada.” Que sentido o verbo de ligação expressa?`, b:`<b>Aparência.</b><br>Ana dá a impressão de estar cansada, sem certeza de que está.`},
 {t:'p-vl', k:'pegadinha', f:`“Ele ficou em casa.” O verbo “ficar” é de ligação?`, b:`<b>Não!</b> “Em casa” é lugar, não característica do sujeito. Em “Ele ficou triste”, aí sim é de ligação.`},
 {t:'p-vl', k:'pegadinha', f:`“Ana anda preocupada” × “Ana anda pela praça”: em qual “andar” é verbo de ligação?`, b:`<b>Em “Ana anda preocupada”.</b><br>Indica estado frequente. Em “anda pela praça”, é a ação de andar.`},

/* p-reg — Regência e crase (8) */
 {t:'p-reg', k:'regra', f:`Na norma-padrão, “assistir” no sentido de “ver” pede qual preposição?`, b:`<b>A preposição “a”.</b><br>“Assisti <b>ao</b> jogo.” (Na fala: “assisti o jogo”.)`},
 {t:'p-reg', k:'pegadinha', f:`“Prefiro mais pizza do que lasanha.” Está de acordo com a norma-padrão?`, b:`<b>Não!</b> Correto: “Prefiro pizza <b>a</b> lasanha.”<br>Preferir algo A outra coisa, sem “mais” e sem “do que”.`},
 {t:'p-reg', k:'pegadinha', f:`“Cheguei na escola cedo.” Como fica na norma-padrão?`, b:`<b>“Cheguei à escola cedo.”</b><br>Chegar e ir pedem a preposição “a”, não “em”.`},
 {t:'p-reg', k:'conceito', f:`O que é a crase?`, b:`<b>A fusão da preposição “a” com o artigo “a”, marcada pelo acento grave: à.</b><br>Vou a + a feira → vou <b>à</b> feira.`},
 {t:'p-reg', k:'exemplo', f:`Complete com “a” ou “à”: “Vou ___ feira.” Qual o truque para conferir?`, b:`<b>“Vou à feira.”</b><br>Truque: troque por uma palavra masculina. “Vou <b>ao</b> mercado” → deu “ao”, então tem crase.`},
 {t:'p-reg', k:'pegadinha', f:`“Começou à chover.” A crase está correta?`, b:`<b>Não!</b> Correto: “Começou a chover.”<br>Nunca há crase antes de verbo (nem antes de palavra masculina).`},
 {t:'p-reg', k:'exemplo', f:`Complete: “A aula começa ___ 10h.”`, b:`<b>“às 10h”.</b><br>Hora exata leva crase. Mas: “desde as 10h”, “após as 10h”.`},
 {t:'p-reg', k:'exemplo', f:`Complete: “Vou ___ Bahia” e “Vou ___ Recife”.`, b:`<b>“Vou à Bahia” e “Vou a Recife”.</b><br>Macete: volto DA Bahia (crase há!); volto DE Recife (crase pra quê?).`},

/* p-conc — Concordância (8) */
 {t:'p-conc', k:'conceito', f:`Concordância verbal × concordância nominal?`, b:`<b>Verbal: o verbo concorda com o sujeito. Nominal: o adjetivo concorda com o substantivo.</b><br>“Os alunos <b>chegaram</b>.” · “Casas <b>antigas</b>.”`},
 {t:'p-conc', k:'regra', f:`“Haver” no sentido de “existir” vai para o plural?`, b:`<b>Não: é impessoal, fica no singular.</b><br>“<b>Havia</b> muitos alunos no pátio.” (nunca “haviam”)`},
 {t:'p-conc', k:'exemplo', f:`“Existia muitas pessoas na fila” ou “Existiam muitas pessoas na fila”?`, b:`<b>“Existiam”.</b><br>Diferente de “haver”, “existir” concorda com o sujeito “muitas pessoas”.`},
 {t:'p-conc', k:'regra', f:`“Faz dois anos” ou “Fazem dois anos”?`, b:`<b>“Faz dois anos.”</b><br>“Fazer” indicando tempo decorrido é impessoal: fica no singular.`},
 {t:'p-conc', k:'exemplo', f:`Complete: “______ três dias para as férias.” (Falta / Faltam)`, b:`<b>“Faltam”.</b><br>O sujeito é “três dias” (plural), mesmo vindo depois do verbo.`},
 {t:'p-conc', k:'pegadinha', f:`“Ela ficou meia preocupada.” Está na norma-padrão?`, b:`<b>Não!</b> Correto: “meio preocupada”.<br>“Meio” = um pouco (advérbio) não varia. Varia como numeral: “meia hora”.`},
 {t:'p-conc', k:'pegadinha', f:`Uma menina agradece um presente. Ela deve dizer “obrigado” ou “obrigada”?`, b:`<b>“Obrigada”.</b><br>A palavra concorda com quem fala: mulher diz “obrigada”; homem, “obrigado”.`},
 {t:'p-conc', k:'exemplo', f:`Complete: “Seguem ______ as fotos.” (anexo / anexas)`, b:`<b>“anexas”.</b><br>“Anexo” é adjetivo e concorda com o substantivo: fotos anexas.`},

/* p-col — Colocação pronominal (8) */
 {t:'p-col', k:'conceito', f:`Próclise, ênclise e mesóclise: onde fica o pronome em cada uma?`, b:`<b>Próclise: antes do verbo. Ênclise: depois (com hífen). Mesóclise: no meio.</b><br>“Não <b>me</b> deixe.” · “Diga-<b>me</b>.” · “Dir-<b>te</b>-ei.”`},
 {t:'p-col', k:'regra', f:`Na norma-padrão, pode-se começar uma frase com pronome oblíquo (me, te, se…)?`, b:`<b>Não: no início da frase, usa-se ênclise.</b><br>“Empreste-<b>me</b> o lápis.” (Na fala: “Me empresta o lápis”.)`},
 {t:'p-col', k:'regra', f:`Que palavras “atraem” o pronome para antes do verbo?`, b:`<b>Negativas, advérbios, pronomes relativos, indefinidos e conjunções subordinativas.</b><br>Ex.: não, nunca, ninguém, sempre, já, que, alguém, quando, se.`},
 {t:'p-col', k:'pegadinha', f:`“Não deixe-me sozinho.” Está na norma-padrão?`, b:`<b>Não!</b> Correto: “Não <b>me</b> deixe sozinho.”<br>O “não” atrai o pronome para antes do verbo.`},
 {t:'p-col', k:'pegadinha', f:`“Quando vi-te, sorri.” Está na norma-padrão?`, b:`<b>Não!</b> Correto: “Quando <b>te</b> vi, sorri.”<br>A conjunção “quando” atrai o pronome (próclise).`},
 {t:'p-col', k:'exemplo', f:`Ponha o pronome “me” na norma-padrão: “Ninguém avisou.”`, b:`<b>“Ninguém me avisou.”</b><br>“Ninguém” é palavra negativa: atrai o pronome.`},
 {t:'p-col', k:'exemplo', f:`“Dir-te-ei a verdade.” Que colocação pronominal é essa?`, b:`<b>Mesóclise.</b><br>O pronome fica no meio do verbo no futuro (direi). É rara e muito formal.`},
 {t:'p-col', k:'conceito', f:`Numa conversa entre amigos, “Me passa o sal?” é adequado?`, b:`<b>Sim: a próclise é natural no português brasileiro falado e informal.</b><br>Num texto formal, a norma-padrão pede “Passe-me o sal”.`},

/* p-pont — Pontuação (8) */
 {t:'p-pont', k:'regra', f:`Pode-se separar o sujeito do verbo com vírgula?`, b:`<b>Nunca.</b> Nem o verbo do complemento.<br>Errado: “Os alunos do 9º ano, viajaram.” Macete: sujeito e verbo são namorados. (Um aposto entre duas vírgulas pode ficar no meio.)`},
 {t:'p-pont', k:'exemplo', f:`“Pedro, venha cá.” O que a vírgula separa?`, b:`<b>O vocativo</b> (“Pedro”, a pessoa com quem se fala).<br>O vocativo sempre leva vírgula.`},
 {t:'p-pont', k:'exemplo', f:`“Belém, capital do Pará, recebe muitos turistas.” O que fica entre as vírgulas?`, b:`<b>Um aposto.</b><br>Ele explica quem é o termo anterior (Belém).`},
 {t:'p-pont', k:'pegadinha', f:`“Não, espere!” × “Não espere!”: a vírgula muda o sentido?`, b:`<b>Sim! Inverte o sentido.</b><br>“Não, espere!” pede que a pessoa espere; “Não espere!” pede que ela não espere.`},
 {t:'p-pont', k:'exemplo', f:`“Bem… acho que não vou à festa.” O que as reticências indicam?`, b:`<b>Hesitação.</b><br>As reticências também podem indicar suspense, ideia interrompida ou ironia.`},
 {t:'p-pont', k:'conceito', f:`Para que servem os dois-pontos (:)?`, b:`<b>Para anunciar uma explicação, uma enumeração ou uma fala.</b><br>“Comprei três frutas: maçã, pera e uva.”`},
 {t:'p-pont', k:'exemplo', f:`“Que dia ‘ótimo’: choveu e perdi o ônibus.” Que efeito as aspas criam em “ótimo”?`, b:`<b>Ironia.</b><br>A palavra é usada no sentido contrário: o dia foi ruim.`},
 {t:'p-pont', k:'regra', f:`“Ontem à noite, fomos ao cinema.” Por que há vírgula depois de “noite”?`, b:`<b>Porque a expressão de tempo foi deslocada para o início da frase.</b><br>Ordem direta: “Fomos ao cinema ontem à noite.”`},

/* p-var — Variação linguística (8) */
 {t:'p-var', k:'regra', f:`Quais são os quatro tipos de variação linguística?`, b:`<b>Regional, social (ou etária), situacional e histórica.</b><br>O critério não é certo × errado, e sim adequado × inadequado.`},
 {t:'p-var', k:'exemplo', f:`“Bergamota”, “mexerica” e “tangerina” nomeiam a mesma fruta. Que tipo de variação é essa?`, b:`<b>Variação regional.</b><br>Cada região do país usa um nome.`},
 {t:'p-var', k:'exemplo', f:`“Vossa mercê” → “vosmecê” → “você” → “cê”. Que tipo de variação é essa?`, b:`<b>Variação histórica.</b><br>A língua muda com o passar do tempo.`},
 {t:'p-var', k:'exemplo', f:`Gírias como “mano” e “rolê”, comuns entre adolescentes, são marcas de que tipo de variação?`, b:`<b>Variação social (etária).</b><br>Revelam o grupo e a idade de quem fala.`},
 {t:'p-var', k:'exemplo', f:`Lucas diz “E aí, beleza?” ao amigo e “Bom dia, como vai o senhor?” ao diretor. Que variação é essa?`, b:`<b>Variação situacional</b> (informal × formal).<br>A mesma pessoa adapta a fala à situação e ao interlocutor.`},
 {t:'p-var', k:'conceito', f:`O que é a norma-padrão?`, b:`<b>O modelo de língua usado em situações formais</b> (documentos, provas, notícias).<br>Saber usá-la é importante, mas isso não torna as outras variedades “erradas”.`},
 {t:'p-var', k:'conceito', f:`O que é preconceito linguístico?`, b:`<b>Discriminar alguém pelo jeito de falar</b> (sotaque, origem, escolaridade).<br>Ex.: rir do sotaque de um colega de outro estado.`},
 {t:'p-var', k:'pegadinha', f:`Uma conversa informal entre amigos, cheia de gírias, está “errada”?`, b:`<b>Não!</b> Está adequada à situação.<br>Macete: língua é como roupa: chinelo na praia, terno no casamento.`},

/* p-form — Formação de palavras, estrangeirismos e acentuação (6) */
 {t:'p-form', k:'exemplo', f:`Como se forma a palavra “entardecer”?`, b:`<b>Derivação parassintética.</b><br>Prefixo “en-” e sufixo “-ecer” entram juntos: não existe “entarde” nem “tardecer”.`},
 {t:'p-form', k:'pegadinha', f:`“Infelizmente” é formada por derivação parassintética?`, b:`<b>Não!</b> Existem “infeliz” e “felizmente” sozinhas: prefixo e sufixo não entraram ao mesmo tempo (derivação prefixal e sufixal).`},
 {t:'p-form', k:'exemplo', f:`“Planalto” (plano + alto): que processo de formação é esse?`, b:`<b>Composição por aglutinação.</b><br>As palavras se juntam e uma perde parte do som (o “o” de plano). Em “girassol”, nada se perde: justaposição.`},
 {t:'p-form', k:'conceito', f:`Estrangeirismo adaptado × não adaptado: dê um exemplo de cada.`, b:`<b>Adaptado: futebol (de “football”). Não adaptado: delivery.</b><br>O adaptado ganhou grafia portuguesa; o outro mantém a original.`},
 {t:'p-form', k:'regra', f:`Quais proparoxítonas são acentuadas?`, b:`<b>Todas.</b><br>Ex.: lâmpada, matemática, música.`},
 {t:'p-form', k:'pegadinha', f:`“Idéia”, “heróico” e “vôo” estão corretas pelo Acordo Ortográfico em vigor?`, b:`<b>Não!</b> Escreve-se <b>ideia, heroico, voo</b>, sem acento.`}
];

/* SIMULADO A · PORTUGUÊS (15 questões, na ordem da prova)
   Todos os textos-base foram escritos para este guia (originais). */
const SIM_A_POR = [

/* 01 · p-impl */
{t:'p-impl', d:2,
 tt:`Texto 1`,
 tx:`<b>O fone</b><br>Meu filho, Tomás, tem catorze anos e um par de fones de ouvido que, há uns oito meses, parece ter criado raízes nas orelhas dele. Ele toma café de fone, faz a lição de fone, atravessa a sala de fone. Já me acostumei a conversar com ele por gestos, como quem orienta um avião na pista.<br>Na terça-feira passada, porém, o fio arrebentou. Tomás apareceu na cozinha segurando as duas pontas, com a cara de quem acabou de perder o último ônibus. Ofereci cola, fita isolante e solidariedade. Ele recusou as três.<br>Como a loja só abriria no dia seguinte, ele precisou atravessar uma noite inteira com os ouvidos desocupados. Sentou-se à mesa do jantar, estranhou o barulho dos talheres e, de repente, perguntou à irmã como tinha sido a apresentação de teatro. Ela, que já tinha contado a história três vezes na semana anterior, contou pela quarta, agora com plateia.<br>Depois do jantar, ele ficou na sala. Descobriu que a avó ri alto com a novela, que o vizinho de cima ensaia trompete às nove e que eu canto mal enquanto lavo a louça. Esta última descoberta ele fez questão de comentar.<br>No dia seguinte, comprou fones novos, sem fio, para não arrebentarem mais. Na hora do jantar, porém, eu os vi pendurados no pescoço dele, desligados, enquanto ele perguntava à irmã se a peça ia ter outra sessão.`,
 q:`O trecho “Ela, que já tinha contado a história três vezes na semana anterior, contou pela quarta, <b>agora com plateia</b>” permite inferir que:`,
 o:[
  [`a irmã de Tomás costuma repetir as histórias porque esquece que já as contou.`, `O texto não fala em esquecimento. Essa explicação é inventada: não há pista para ela.`],
  [`Tomás tinha assistido à apresentação de teatro da irmã.`, `Ao contrário: ele pergunta “como tinha sido” a apresentação, o que sugere que não esteve lá.`],
  [`nas vezes anteriores, Tomás não tinha realmente ouvido o relato da irmã, por causa dos fones.`, ``],
  [`a apresentação de teatro tinha acontecido naquela mesma terça-feira.`, `A irmã já tinha contado a história “na semana anterior”; logo, a apresentação foi antes.`],
  [`a irmã ficou irritada por ter de contar a mesma história mais uma vez.`, `Nada indica irritação. A expressão “agora com plateia” sugere justamente que, desta vez, ela teve quem a escutasse.`],
 ], a:2,
 e:`A pista está em “<b>agora com plateia</b>”: a irmã já contara a história três vezes, mas só nesta quarta vez teve um ouvinte de verdade. Como o texto mostra que Tomás vivia de fone, conclui-se que antes ele não a escutava. É uma inferência apoiada no texto, e não uma invenção.`},

/* 02 · p-lit */
{t:'p-lit', d:1,
 tt:`Texto 1`,
 tx:`<b>O fone</b><br>Meu filho, Tomás, tem catorze anos e um par de fones de ouvido que, há uns oito meses, parece ter criado raízes nas orelhas dele. Ele toma café de fone, faz a lição de fone, atravessa a sala de fone. Já me acostumei a conversar com ele por gestos, como quem orienta um avião na pista.<br>Na terça-feira passada, porém, o fio arrebentou. Tomás apareceu na cozinha segurando as duas pontas, com a cara de quem acabou de perder o último ônibus. Ofereci cola, fita isolante e solidariedade. Ele recusou as três.<br>Como a loja só abriria no dia seguinte, ele precisou atravessar uma noite inteira com os ouvidos desocupados. Sentou-se à mesa do jantar, estranhou o barulho dos talheres e, de repente, perguntou à irmã como tinha sido a apresentação de teatro. Ela, que já tinha contado a história três vezes na semana anterior, contou pela quarta, agora com plateia.<br>Depois do jantar, ele ficou na sala. Descobriu que a avó ri alto com a novela, que o vizinho de cima ensaia trompete às nove e que eu canto mal enquanto lavo a louça. Esta última descoberta ele fez questão de comentar.<br>No dia seguinte, comprou fones novos, sem fio, para não arrebentarem mais. Na hora do jantar, porém, eu os vi pendurados no pescoço dele, desligados, enquanto ele perguntava à irmã se a peça ia ter outra sessão.`,
 q:`Sobre o narrador do Texto 1, é correto afirmar que ele:`,
 o:[
  [`narra em 1ª pessoa e participa dos fatos, como pai de Tomás.`, ``],
  [`narra em 3ª pessoa e apenas observa os fatos, sem participar deles.`, `Expressões como “Meu filho”, “Ofereci cola” e “eu canto mal” mostram um narrador em 1ª pessoa, que age na história.`],
  [`narra em 3ª pessoa e conhece todos os pensamentos de todas as personagens.`, `O narrador não é de 3ª pessoa (usa “eu”, “meu”) e só conta o que vê; não revela, por exemplo, o que a irmã pensa.`],
  [`é o próprio Tomás, que conta a história da perda dos seus fones.`, `Tomás é chamado de “Meu filho”: quem narra é o pai, não ele.`],
  [`é a irmã de Tomás, que finalmente conseguiu contar sua história.`, `A irmã aparece em 3ª pessoa (“Ela, que já tinha contado…”); quem narra é o pai.`],
 ], a:0,
 e:`O foco narrativo é de <b>1ª pessoa</b>, com <b>narrador-personagem</b>: “<b>Meu</b> filho, Tomás…”, “<b>Ofereci</b> cola…”, “<b>eu</b> canto mal enquanto lavo a louça”. Quem conta é o pai, que participa das cenas.`},

/* 03 · p-sent */
{t:'p-sent', d:2,
 tt:`Texto 1`,
 tx:`<b>O fone</b><br>Meu filho, Tomás, tem catorze anos e um par de fones de ouvido que, há uns oito meses, parece ter criado raízes nas orelhas dele. Ele toma café de fone, faz a lição de fone, atravessa a sala de fone. Já me acostumei a conversar com ele por gestos, como quem orienta um avião na pista.<br>Na terça-feira passada, porém, o fio arrebentou. Tomás apareceu na cozinha segurando as duas pontas, com a cara de quem acabou de perder o último ônibus. Ofereci cola, fita isolante e solidariedade. Ele recusou as três.<br>Como a loja só abriria no dia seguinte, ele precisou atravessar uma noite inteira com os ouvidos desocupados. Sentou-se à mesa do jantar, estranhou o barulho dos talheres e, de repente, perguntou à irmã como tinha sido a apresentação de teatro. Ela, que já tinha contado a história três vezes na semana anterior, contou pela quarta, agora com plateia.<br>Depois do jantar, ele ficou na sala. Descobriu que a avó ri alto com a novela, que o vizinho de cima ensaia trompete às nove e que eu canto mal enquanto lavo a louça. Esta última descoberta ele fez questão de comentar.<br>No dia seguinte, comprou fones novos, sem fio, para não arrebentarem mais. Na hora do jantar, porém, eu os vi pendurados no pescoço dele, desligados, enquanto ele perguntava à irmã se a peça ia ter outra sessão.`,
 q:`No primeiro parágrafo, ao dizer que o par de fones “parece ter <b>criado raízes</b> nas orelhas dele”, o narrador quer dizer que:`,
 o:[
  [`os fones machucavam as orelhas do garoto, de tanto que apertavam.`, `O texto não fala em dor nem em aperto. A expressão não é literal.`],
  [`os fones estavam presos às orelhas por causa de um defeito.`, `Essa é uma leitura literal (algo realmente “preso”). O defeito só aparece depois, e é no fio.`],
  [`Tomás usava aqueles mesmos fones desde que era pequeno.`, `O texto informa que isso acontece “há uns oito meses”, e não desde a infância.`],
  [`os fones eram um presente de família, com grande valor sentimental.`, `Você associou “raízes” a “origem, família”, mas o texto não fala de presente nem de valor sentimental.`],
  [`Tomás quase nunca tirava os fones, como se eles fizessem parte do corpo dele.`, ``],
 ], a:4,
 e:`“Criar raízes” está em sentido <b>conotativo</b> (figurado): o que cria raízes fica fixo, não sai do lugar. O próprio texto confirma logo em seguida: “toma café de fone, faz a lição de fone, atravessa a sala de fone”.`},

/* 04 · p-conj */
{t:'p-conj', d:3,
 tt:`Texto 1`,
 tx:`<b>O fone</b><br>Meu filho, Tomás, tem catorze anos e um par de fones de ouvido que, há uns oito meses, parece ter criado raízes nas orelhas dele. Ele toma café de fone, faz a lição de fone, atravessa a sala de fone. Já me acostumei a conversar com ele por gestos, como quem orienta um avião na pista.<br>Na terça-feira passada, porém, o fio arrebentou. Tomás apareceu na cozinha segurando as duas pontas, com a cara de quem acabou de perder o último ônibus. Ofereci cola, fita isolante e solidariedade. Ele recusou as três.<br>Como a loja só abriria no dia seguinte, ele precisou atravessar uma noite inteira com os ouvidos desocupados. Sentou-se à mesa do jantar, estranhou o barulho dos talheres e, de repente, perguntou à irmã como tinha sido a apresentação de teatro. Ela, que já tinha contado a história três vezes na semana anterior, contou pela quarta, agora com plateia.<br>Depois do jantar, ele ficou na sala. Descobriu que a avó ri alto com a novela, que o vizinho de cima ensaia trompete às nove e que eu canto mal enquanto lavo a louça. Esta última descoberta ele fez questão de comentar.<br>No dia seguinte, comprou fones novos, sem fio, para não arrebentarem mais. Na hora do jantar, porém, eu os vi pendurados no pescoço dele, desligados, enquanto ele perguntava à irmã se a peça ia ter outra sessão.`,
 q:`No trecho “<b>Como</b> a loja só abriria no dia seguinte, ele precisou atravessar uma noite inteira com os ouvidos desocupados”, a palavra destacada estabelece a mesma relação de sentido que a expressão destacada em:`,
 o:[
  [`“<b>Como</b> prometeu, a professora trouxe as provas corrigidas.”`, `Aqui “como” equivale a “conforme”: a professora agiu de acordo com o que prometeu. É <b>conformidade</b>, não causa.`],
  [`“<b>Visto que</b> a quadra estava molhada, o treino foi transferido para o ginásio.”`, ``],
  [`“Ele dança <b>como</b> o pai dançava na juventude.”`, `Aqui “como” compara o jeito de dançar de dois personagens: é <b>comparação</b>.`],
  [`“<b>Embora</b> a loja estivesse aberta, ninguém entrou.”`, `“Embora” indica <b>concessão</b>: um fato que poderia impedir o outro, mas não impede.`],
  [`“<b>Assim que</b> a loja abriu, ele comprou fones novos.”`, `“Assim que” indica <b>tempo</b> (logo depois que). Não há relação de causa.`],
 ], a:1,
 e:`No texto, “como” introduz a <b>causa</b>: a loja estar fechada é o motivo de Tomás ficar sem fone a noite toda (dá para trocar por “Já que” ou “Visto que”). A mesma relação aparece em “<b>Visto que</b> a quadra estava molhada…”. Atenção: “como” pode indicar causa, conformidade ou comparação; quem decide é o contexto.`},

/* 05 · p-arg */
{t:'p-arg', d:1,
 tt:`Texto 2`,
 tx:`<b>Proibir a inteligência artificial não ensina ninguém a pensar</b><br>Desde que os aplicativos de inteligência artificial passaram a escrever redações e resolver exercícios em segundos, muitas escolas reagiram da forma mais rápida: proibiram o seu uso. A medida parece firme, mas é ineficaz. O melhor caminho é ensinar os alunos a usar essas ferramentas com critério.<br>Em primeiro lugar, a proibição é quase impossível de fiscalizar. A lição de casa é feita longe dos olhos do professor, e o aluno que quiser burlar a regra terá sempre um celular por perto. Uma regra que não pode ser cumprida acaba ensinando apenas a disfarçar.<br>Além disso, a escola já viveu situação parecida. Quando as calculadoras se tornaram baratas, houve quem previsse o fim do raciocínio matemático. As escolas, no entanto, aprenderam a separar momentos: há atividades em que a calculadora é proibida e outras em que ela é bem-vinda, porque o objetivo é interpretar o problema, e não fazer contas.<br>É verdade que alguns estudantes usam a ferramenta apenas para copiar respostas prontas. Esse comportamento, porém, não nasceu com a tecnologia: antes dela, já havia quem copiasse o trabalho do colega. A solução está em mudar o tipo de tarefa. Uma professora pode, por exemplo, entregar à turma um texto produzido pelo aplicativo e pedir que os alunos encontrem os erros do texto. Para isso, eles precisam estudar o assunto de verdade.<br>Talvez a escola não consiga impedir que os jovens recorram à inteligência artificial. Certamente consegue, porém, ensiná-los a desconfiar dela, a conferir informações e a assumir a autoria do que entregam. Isso é bem mais útil do que fingir que ela não existe.`,
 q:`A tese defendida no Texto 2 é a de que:`,
 o:[
  [`a inteligência artificial deve ser proibida nas escolas, porque estimula a cópia.`, `É a posição contrária, que o autor critica desde o título.`],
  [`as calculadoras prejudicaram o raciocínio matemático dos estudantes.`, `O autor diz que “houve quem previsse” isso, mas mostra que as escolas aprenderam a lidar com a calculadora.`],
  [`a lição de casa deve deixar de existir, já que não pode ser fiscalizada.`, `O autor usa a dificuldade de fiscalizar como argumento contra a proibição, não propõe acabar com a lição.`],
  [`a escola deve ensinar os alunos a usar a inteligência artificial com critério, em vez de proibi-la.`, ``],
  [`os professores devem usar a inteligência artificial para corrigir as tarefas dos alunos.`, `O texto não fala em professores corrigindo com a ferramenta; essa ideia extrapola o texto.`],
 ], a:3,
 e:`A tese aparece no 1º parágrafo (“O melhor caminho é ensinar os alunos a usar essas ferramentas com critério”) e é retomada na conclusão (“ensiná-los a desconfiar dela, a conferir informações…”). Todos os outros parágrafos servem para sustentá-la.`},

/* 06 · p-arg */
{t:'p-arg', d:3,
 tt:`Texto 2`,
 tx:`<b>Proibir a inteligência artificial não ensina ninguém a pensar</b><br>Desde que os aplicativos de inteligência artificial passaram a escrever redações e resolver exercícios em segundos, muitas escolas reagiram da forma mais rápida: proibiram o seu uso. A medida parece firme, mas é ineficaz. O melhor caminho é ensinar os alunos a usar essas ferramentas com critério.<br>Em primeiro lugar, a proibição é quase impossível de fiscalizar. A lição de casa é feita longe dos olhos do professor, e o aluno que quiser burlar a regra terá sempre um celular por perto. Uma regra que não pode ser cumprida acaba ensinando apenas a disfarçar.<br>Além disso, a escola já viveu situação parecida. Quando as calculadoras se tornaram baratas, houve quem previsse o fim do raciocínio matemático. As escolas, no entanto, aprenderam a separar momentos: há atividades em que a calculadora é proibida e outras em que ela é bem-vinda, porque o objetivo é interpretar o problema, e não fazer contas.<br>É verdade que alguns estudantes usam a ferramenta apenas para copiar respostas prontas. Esse comportamento, porém, não nasceu com a tecnologia: antes dela, já havia quem copiasse o trabalho do colega. A solução está em mudar o tipo de tarefa. Uma professora pode, por exemplo, entregar à turma um texto produzido pelo aplicativo e pedir que os alunos encontrem os erros do texto. Para isso, eles precisam estudar o assunto de verdade.<br>Talvez a escola não consiga impedir que os jovens recorram à inteligência artificial. Certamente consegue, porém, ensiná-los a desconfiar dela, a conferir informações e a assumir a autoria do que entregam. Isso é bem mais útil do que fingir que ela não existe.`,
 q:`Para sustentar sua tese, o autor usa, no 2º e no 3º parágrafos, respectivamente, argumentos baseados em:`,
 o:[
  [`relação de causa e consequência e comparação com uma situação semelhante do passado.`, ``],
  [`dados estatísticos e opinião de um especialista.`, `O texto não apresenta números nem cita especialistas. Cuidado para não marcar “tipos de argumento” que não aparecem.`],
  [`comparação com uma situação do passado e relação de causa e consequência.`, `Os dois tipos estão no texto, mas na ordem trocada. O 2º parágrafo trata da fiscalização; a comparação com as calculadoras está no 3º. Atenção ao “respectivamente”.`],
  [`experiência pessoal do autor e dados de uma pesquisa.`, `O autor não conta nenhuma experiência própria e não cita pesquisa.`],
  [`opinião de um especialista e exemplo de uma professora real.`, `Não há especialista citado. E a professora do 4º parágrafo é um exemplo hipotético (“pode, por exemplo”), que nem está no 2º ou no 3º parágrafo.`],
 ], a:0,
 e:`<b>2º parágrafo:</b> a proibição não pode ser fiscalizada (causa) e, por isso, acaba “ensinando apenas a disfarçar” (consequência). <b>3º parágrafo:</b> o autor compara a situação atual com a chegada das calculadoras, que também assustou e foi resolvida pela escola. Logo, causa e consequência e, depois, comparação.`},

/* 07 · p-modal */
{t:'p-modal', d:2,
 tt:`Texto 2`,
 tx:`<b>Proibir a inteligência artificial não ensina ninguém a pensar</b><br>Desde que os aplicativos de inteligência artificial passaram a escrever redações e resolver exercícios em segundos, muitas escolas reagiram da forma mais rápida: proibiram o seu uso. A medida parece firme, mas é ineficaz. O melhor caminho é ensinar os alunos a usar essas ferramentas com critério.<br>Em primeiro lugar, a proibição é quase impossível de fiscalizar. A lição de casa é feita longe dos olhos do professor, e o aluno que quiser burlar a regra terá sempre um celular por perto. Uma regra que não pode ser cumprida acaba ensinando apenas a disfarçar.<br>Além disso, a escola já viveu situação parecida. Quando as calculadoras se tornaram baratas, houve quem previsse o fim do raciocínio matemático. As escolas, no entanto, aprenderam a separar momentos: há atividades em que a calculadora é proibida e outras em que ela é bem-vinda, porque o objetivo é interpretar o problema, e não fazer contas.<br>É verdade que alguns estudantes usam a ferramenta apenas para copiar respostas prontas. Esse comportamento, porém, não nasceu com a tecnologia: antes dela, já havia quem copiasse o trabalho do colega. A solução está em mudar o tipo de tarefa. Uma professora pode, por exemplo, entregar à turma um texto produzido pelo aplicativo e pedir que os alunos encontrem os erros do texto. Para isso, eles precisam estudar o assunto de verdade.<br>Talvez a escola não consiga impedir que os jovens recorram à inteligência artificial. Certamente consegue, porém, ensiná-los a desconfiar dela, a conferir informações e a assumir a autoria do que entregam. Isso é bem mais útil do que fingir que ela não existe.`,
 q:`No último parágrafo, as palavras “<b>Talvez</b>” e “<b>Certamente</b>” foram empregadas para:`,
 o:[
  [`indicar que o autor tem dúvida tanto sobre impedir o uso da ferramenta quanto sobre ensinar a usá-la.`, `“Certamente” não exprime dúvida, e sim certeza. Só “Talvez” indica dúvida.`],
  [`marcar o tempo em que os fatos acontecem: primeiro, o presente; depois, o futuro.`, `Essas palavras não situam os fatos no tempo; elas mostram o grau de certeza do autor.`],
  [`mostrar que o autor admite não ter certeza de que a escola possa impedir o uso, mas tem convicção de que ela pode ensinar a usá-lo bem.`, ``],
  [`revelar que o autor mudou de ideia e passou a defender a proibição.`, `Não há mudança de opinião: o parágrafo reforça a tese de ensinar a usar com critério.`],
  [`expressar certeza de que a escola vai conseguir impedir o uso da inteligência artificial.`, `É o contrário: “Talvez a escola não consiga impedir” mostra dúvida sobre essa possibilidade.`],
 ], a:2,
 e:`“Talvez” e “certamente” são <b>modalizadores</b>: mostram o grau de certeza de quem escreve. O autor contrapõe a dúvida (“<b>Talvez</b> a escola não consiga impedir…”) à certeza (“<b>Certamente</b> consegue, porém, ensiná-los…”), e isso fortalece a tese: o que é seguro é ensinar.`},

/* 08 · p-coes */
{t:'p-coes', d:2,
 tt:`Texto 2`,
 tx:`<b>Proibir a inteligência artificial não ensina ninguém a pensar</b><br>Desde que os aplicativos de inteligência artificial passaram a escrever redações e resolver exercícios em segundos, muitas escolas reagiram da forma mais rápida: proibiram o seu uso. A medida parece firme, mas é ineficaz. O melhor caminho é ensinar os alunos a usar essas ferramentas com critério.<br>Em primeiro lugar, a proibição é quase impossível de fiscalizar. A lição de casa é feita longe dos olhos do professor, e o aluno que quiser burlar a regra terá sempre um celular por perto. Uma regra que não pode ser cumprida acaba ensinando apenas a disfarçar.<br>Além disso, a escola já viveu situação parecida. Quando as calculadoras se tornaram baratas, houve quem previsse o fim do raciocínio matemático. As escolas, no entanto, aprenderam a separar momentos: há atividades em que a calculadora é proibida e outras em que ela é bem-vinda, porque o objetivo é interpretar o problema, e não fazer contas.<br>É verdade que alguns estudantes usam a ferramenta apenas para copiar respostas prontas. Esse comportamento, porém, não nasceu com a tecnologia: antes dela, já havia quem copiasse o trabalho do colega. A solução está em mudar o tipo de tarefa. Uma professora pode, por exemplo, entregar à turma um texto produzido pelo aplicativo e pedir que os alunos encontrem os erros do texto. Para isso, eles precisam estudar o assunto de verdade.<br>Talvez a escola não consiga impedir que os jovens recorram à inteligência artificial. Certamente consegue, porém, ensiná-los a desconfiar dela, a conferir informações e a assumir a autoria do que entregam. Isso é bem mais útil do que fingir que ela não existe.`,
 q:`No último parágrafo, os termos destacados em “ensiná-<b>los</b> a desconfiar <b>dela</b>” e em “<b>Isso</b> é bem mais útil” retomam, respectivamente:`,
 o:[
  [`os professores; a escola; impedir o uso da inteligência artificial.`, `“Professores” nem aparece no parágrafo; e “desconfiar da escola” contraria o texto, já que é a escola quem ensina.`],
  [`os jovens; a escola; recorrer à inteligência artificial.`, `Desconfiar “da escola” não faz sentido no texto, e “Isso” não retoma recorrer à ferramenta, que o autor não apresenta como “útil”.`],
  [`os aplicativos; a tecnologia; fingir que a inteligência artificial não existe.`, `“Fingir que ela não existe” é justamente aquilo com que “Isso” está sendo comparado, não o que ele retoma.`],
  [`os alunos; a inteligência artificial; proibir o uso da inteligência artificial.`, `Os dois primeiros referentes estão certos, mas “Isso” não retoma a proibição: o autor é contra ela.`],
  [`os jovens; a inteligência artificial; ensinar os jovens a desconfiar da ferramenta, conferir informações e assumir a autoria do que entregam.`, ``],
 ], a:4,
 e:`“-los” retoma “os jovens” (mencionados na frase anterior); “dela”, “a inteligência artificial”, aquilo de que se deve desconfiar. Já “Isso” resume toda a ideia anterior: ensinar os jovens a desconfiar da ferramenta, a conferir informações e a assumir a autoria. É essa atitude que o autor considera “bem mais útil do que fingir que ela não existe”.`},

/* 09 · p-tira */
{t:'p-tira', d:1,
 tt:`Texto 3`,
 tx:`<b>Tirinha</b><br><b>Quadro 1:</b> Nina, de 13 anos, entra animada na sala, onde a mãe lê um livro no sofá. Nina: “Mãe, posso ir ao show no sábado? Todo mundo vai!”<br><b>Quadro 2:</b> A mãe, sem tirar os olhos do livro: “Todo mundo quem?”<br><b>Quadro 3:</b> Nina, contando nos dedos, com a voz cada vez mais baixa: “A Bia… a Carol… e o primo da Carol. Talvez.”<br><b>Quadro 4:</b> A mãe fecha o livro e sorri: “Nossa! Que multidão!”. Nina, de braços cruzados e cara emburrada, olha para o leitor.`,
 q:`No 2º quadro, ao perguntar “Todo mundo quem?”, a mãe:`,
 o:[
  [`mostra que não ouviu o pedido da filha, porque estava concentrada no livro.`, `Ela ouviu, tanto que repete as palavras da filha (“Todo mundo”). Não tirar os olhos do livro não significa não ouvir.`],
  [`põe em dúvida a expressão “todo mundo” e pede que a filha diga quem, de fato, vai ao show.`, ``],
  [`proíbe a filha de ir ao show no sábado.`, `Nesse quadro ela apenas faz uma pergunta; não há proibição.`],
  [`revela que não conhece nenhuma das amigas da filha.`, `Nada na tirinha mostra isso; é uma conclusão sem pista.`],
  [`concorda com a filha e autoriza a ida ao show.`, `Uma pergunta como essa não é autorização; ela questiona o argumento da filha.`],
 ], a:1,
 e:`A mãe retoma as palavras da filha (“Todo mundo”) e pede que ela as explique. Com isso, mostra que <b>desconfia da generalização</b>, e o 3º quadro confirma que essa desconfiança tinha motivo.`},

/* 10 · p-tira */
{t:'p-tira', d:3,
 tt:`Texto 3`,
 tx:`<b>Tirinha</b><br><b>Quadro 1:</b> Nina, de 13 anos, entra animada na sala, onde a mãe lê um livro no sofá. Nina: “Mãe, posso ir ao show no sábado? Todo mundo vai!”<br><b>Quadro 2:</b> A mãe, sem tirar os olhos do livro: “Todo mundo quem?”<br><b>Quadro 3:</b> Nina, contando nos dedos, com a voz cada vez mais baixa: “A Bia… a Carol… e o primo da Carol. Talvez.”<br><b>Quadro 4:</b> A mãe fecha o livro e sorri: “Nossa! Que multidão!”. Nina, de braços cruzados e cara emburrada, olha para o leitor.`,
 q:`Considerando os quatro quadros, o humor da tirinha resulta principalmente:`,
 o:[
  [`da mudança de opinião da mãe, que, no último quadro, sorri porque passa a apoiar a ida da filha ao show.`, `O sorriso da mãe não é de apoio, e a reação emburrada de Nina mostra que ela entendeu a crítica.`],
  [`da interpretação literal que a mãe faz da palavra “show”.`, `A mãe não se prende à palavra “show”; ela questiona a expressão “todo mundo”.`],
  [`da tristeza de Nina por perceber que não tem amigos.`, `Nina fica contrariada por ter perdido o argumento, não triste por falta de amigos.`],
  [`do contraste entre a generalização “todo mundo” e a lista de apenas três pessoas, uma delas incerta, contraste que a mãe ressalta com ironia em “Que multidão!”.`, ``],
  [`do exagero da mãe, que acredita sinceramente que três pessoas formam uma multidão.`, `“Que multidão!” não é dito com sinceridade: é ironia. A mãe diz o contrário do que pensa para mostrar que são poucas pessoas.`],
 ], a:3,
 e:`Nina usa uma <b>generalização</b> (“Todo mundo vai!”) como argumento. Ao ser questionada, ela só consegue citar três pessoas, e a voz baixa e o “Talvez” mostram que nem ela acredita mais no que disse. A mãe fecha a tira com <b>ironia</b>: “Que multidão!” significa o contrário (“é quase ninguém”). O humor está nessa quebra de expectativa, e a cara emburrada de Nina mostra que ela entendeu.`},

/* 11 · p-pub */
{t:'p-pub', d:1,
 tt:`Texto 4`,
 tx:`<b>Cartaz de campanha</b><br>[Imagem: à esquerda, um livro coberto de poeira numa estante escura. À direita, o mesmo livro aberto nas mãos de uma menina, numa sala iluminada, cheia de crianças lendo.]<br>Aquele livro que você já leu…<br><b>Na sua estante, ele dorme. Aqui, ele acorda alguém.</b><br>Doe livros infantis e juvenis em bom estado.<br>Pontos de coleta: secretaria da Escola Municipal Nova Aurora e Biblioteca Comunitária do Parque das Águas, de segunda a sábado, das 9h às 17h.<br><b>Ler muda histórias. Comece pela de alguém.</b>`,
 q:`O principal objetivo do cartaz é:`,
 o:[
  [`vender livros infantis e juvenis em promoção.`, `Nada é vendido: o cartaz pede doações. É uma campanha, e não uma publicidade.`],
  [`convidar as crianças para uma tarde de leitura na biblioteca.`, `A imagem mostra crianças lendo, mas o pedido do texto é “Doe livros”.`],
  [`convencer o leitor a doar livros que já leu para que outras pessoas possam lê-los.`, ``],
  [`informar o horário de funcionamento da escola municipal.`, `O horário aparece só como informação de apoio, para dizer quando entregar as doações.`],
  [`incentivar o leitor a reler os livros que tem na estante.`, `O cartaz sugere tirar o livro da estante para entregá-lo a outra pessoa, e não relê-lo.`],
 ], a:2,
 e:`O verbo no imperativo “<b>Doe</b>”, os pontos de coleta e a imagem (o livro empoeirado que vai parar nas mãos de uma menina) mostram a finalidade: <b>mobilizar o leitor a doar</b> livros já lidos. É uma campanha que divulga uma causa.`},

/* 12 · p-fig */
{t:'p-fig', d:2,
 tt:`Texto 4`,
 tx:`<b>Cartaz de campanha</b><br>[Imagem: à esquerda, um livro coberto de poeira numa estante escura. À direita, o mesmo livro aberto nas mãos de uma menina, numa sala iluminada, cheia de crianças lendo.]<br>Aquele livro que você já leu…<br><b>Na sua estante, ele dorme. Aqui, ele acorda alguém.</b><br>Doe livros infantis e juvenis em bom estado.<br>Pontos de coleta: secretaria da Escola Municipal Nova Aurora e Biblioteca Comunitária do Parque das Águas, de segunda a sábado, das 9h às 17h.<br><b>Ler muda histórias. Comece pela de alguém.</b>`,
 q:`No slogan “Na sua estante, ele <b>dorme</b>. Aqui, ele <b>acorda</b> alguém.”, há:`,
 o:[
  [`personificação, pois se atribuem ao livro ações próprias de seres vivos, e antítese, pela oposição entre “dorme” e “acorda”.`, ``],
  [`hipérbole, pois há exagero ao falar do livro, e metonímia, pois “estante” substitui “biblioteca”.`, `Não há exagero; e “estante” está em sentido próprio (a estante da casa do leitor), sem substituir outra palavra.`],
  [`comparação, pois o livro é comparado a uma pessoa por meio de um conectivo, e eufemismo.`, `Não há conectivo de comparação (“como”, “tal qual”), e nada é dito de modo suavizado.`],
  [`ironia, pois o cartaz diz o contrário do que pensa, e pleonasmo, pela repetição de “ele”.`, `O cartaz fala a sério; e repetir o pronome não é pleonasmo (redundância de sentido).`],
  [`paradoxo, pois as duas ações são impossíveis de acontecer juntas, e metonímia.`, `As ações não acontecem ao mesmo tempo nem no mesmo lugar (“Na sua estante” × “Aqui”); por isso há antítese, e não paradoxo. Também não há metonímia.`],
 ], a:0,
 e:`Dormir é próprio de seres vivos; dizer que o livro “dorme” na estante é <b>personificação</b> (prosopopeia): o livro parado, sem leitor. “Dorme” e “acorda” têm sentidos opostos, colocados lado a lado em situações diferentes: é <b>antítese</b>. O efeito é mostrar que o mesmo livro pode passar de esquecido a transformador.`},

/* 13 · p-adj */
{t:'p-adj', d:3,
 q:`A coordenadora de uma escola queria dar o direito de refazer a prova <b>somente</b> aos alunos que tivessem entregado o trabalho até sexta-feira. Ela, porém, escreveu no mural:<br>“Os alunos do 9º ano<b>,</b> que entregaram o trabalho de Ciências até sexta-feira<b>,</b> poderão refazer a prova.”<br>Para que a frase expresse corretamente a intenção da coordenadora, ela deveria:`,
 o:[
  [`manter a frase como está, pois a oração entre vírgulas já separa os alunos que entregaram dos que não entregaram.`, `Entre vírgulas, a oração é explicativa: informa algo sobre <b>todos</b> os alunos do 9º ano, como se todos tivessem entregado. Ela não separa grupo nenhum.`],
  [`trocar “que” por “os quais”, mantendo as vírgulas.`, `Com vírgulas, “os quais” continua introduzindo uma oração explicativa; o sentido não muda.`],
  [`retirar apenas a vírgula depois de “sexta-feira”.`, `Ficaria uma vírgula sozinha separando o sujeito “Os alunos do 9º ano” do resto, o que quebra a frase e não resolve o sentido.`],
  [`trocar “que” por “onde”, mantendo as vírgulas.`, `“Onde” só retoma lugar, e “alunos” não é lugar. Além disso, as vírgulas continuariam.`],
  [`retirar as duas vírgulas, transformando a oração em adjetiva restritiva.`, ``],
 ], a:4,
 e:`Com vírgulas, a oração adjetiva é <b>explicativa</b>: diz que os alunos do 9º ano (todos) entregaram o trabalho e que todos podem refazer a prova. Sem as vírgulas, ela vira <b>restritiva</b>: “Os alunos do 9º ano que entregaram o trabalho… poderão refazer a prova”, ou seja, <b>só</b> esses. Era essa a intenção da coordenadora.`},

/* 14 · p-reg */
{t:'p-reg', d:2,
 q:`Na mensagem para a turma, a professora escreveu:<br>“O documentário ______ assistimos na excursão vai ser tema da próxima redação.”<br>De acordo com a norma-padrão, a lacuna deve ser preenchida por:`,
 o:[
  [`que`, `É a forma comum na fala, mas, na norma-padrão, “assistir” no sentido de “ver” pede a preposição “a” (quem assiste, assiste <b>a</b> algo).`],
  [`o qual`, `Falta a preposição exigida pelo verbo: assistimos <b>ao</b> documentário, então seria “ao qual”.`],
  [`onde`, `“Onde” só retoma lugar, e documentário não é lugar.`],
  [`a que`, ``],
  [`em que`, `“Assistir”, no sentido de “ver”, pede a preposição “a”, e não “em”.`],
 ], a:3,
 e:`Desfaça a oração: “assistimos <b>ao</b> documentário na excursão”. No sentido de “ver”, o verbo assistir é transitivo indireto e exige a preposição <b>a</b>. Essa preposição vai para antes do pronome relativo: o documentário <b>a que</b> assistimos (ou <b>ao qual</b> assistimos).`},

/* 15 · p-conc */
{t:'p-conc', d:1,
 q:`No grupo da excursão, um aluno escreveu:<br>“______ dez minutos que o ônibus saiu da escola, e a Júlia ainda não chegou ao ponto.”<br>De acordo com a norma-padrão, a lacuna deve ser preenchida por:`,
 o:[
  [`Fazem`, `Indicando tempo decorrido, “fazer” é impessoal (não tem sujeito) e fica sempre no singular. “Dez minutos” não é sujeito.`],
  [`Faz`, ``],
  [`Fizeram`, `Além do plural, que é proibido no verbo impessoal, o pretérito não serve: o tempo é contado até o momento em que o aluno escreve (Júlia “ainda não chegou”), o que pede o presente.`],
  [`Farão`, `O futuro não faz sentido (o ônibus já saiu) e o verbo impessoal não vai para o plural.`],
  [`Estão fazendo`, `O verbo impessoal não vai para o plural, nem mesmo em locução verbal: na locução, o auxiliar também fica no singular.`],
 ], a:1,
 e:`O verbo <b>fazer</b>, quando indica tempo decorrido, é <b>impessoal</b>: a oração não tem sujeito, e o verbo fica na 3ª pessoa do <b>singular</b>. Por isso: “<b>Faz</b> dez minutos que o ônibus saiu”, como em “Faz dois anos”, “Faz muito tempo”.`},
];

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

/* SIMULADO B · Português (15 questões)
   Todos os textos foram escritos para este simulado (notícia, carta do leitor, poema, charge e anúncio são fictícios). */
const SIM_B_POR = [

/* ================= Texto 1 · Notícia + carta do leitor ================= */
{t:'p-gen', d:1, tt:`Texto 1`,
 tx:`<b>Notícia</b><br><b>Quadra do Jardim Primavera é entregue com oito meses de atraso</b><br>A Prefeitura de Campo Verde do Oeste entregou, no último sábado, a cobertura da quadra poliesportiva do Jardim Primavera. A obra custou R$ 640 mil e estava prevista para fevereiro. Segundo a Secretaria de Obras, o atraso ocorreu por falta de material. Com o telhado e a nova iluminação, a quadra poderá ser usada também em dias de chuva e à noite. O espaço funcionará das 7h às 22h, e o uso por times deverá ser agendado pelo aplicativo da prefeitura.<br><br><b>Carta do leitor</b><br>Moro no Jardim Primavera há vinte anos e vi, enfim, a quadra coberta. Pena que a alegria durou pouco. Para jogar lá, agora é preciso agendar horário pelo aplicativo da prefeitura, que vive fora do ar. Na primeira semana, os meninos do bairro, que antes chegavam e jogavam, ficaram do lado de fora do alambrado, olhando a quadra vazia. Uma obra que demorou oito meses a mais merecia, no mínimo, regras pensadas para quem mora aqui.<br><i>Sílvia Moraes, Campo Verde do Oeste</i>`,
 q:`Entre os trechos abaixo, retirados do Texto 1, qual expressa uma <b>opinião</b>?`,
 o:[
  [`“A obra custou R$ 640 mil”`, `É um dado que pode ser conferido (em documentos da prefeitura, por exemplo): é fato.`],
  [`“O espaço funcionará das 7h às 22h”`, `O horário de funcionamento é uma informação verificável, não um julgamento.`],
  [`“Uma obra que demorou oito meses a mais merecia, no mínimo, regras pensadas para quem mora aqui”`, ``],
  [`“Moro no Jardim Primavera há vinte anos”`, `Estar na carta do leitor não transforma tudo em opinião. Há quanto tempo alguém mora num bairro é um fato que pode ser comprovado.`],
  [`“[A obra] estava prevista para fevereiro”`, `A data prevista no cronograma é um fato verificável.`]
 ], a:2,
 e:`<b>Fato</b> pode ser verificado; <b>opinião</b> é um julgamento de quem escreve. Em “merecia, no mínimo, regras pensadas para quem mora aqui”, a leitora avalia como a obra <b>deveria</b> ter sido conduzida: o verbo “merecia” e a expressão “no mínimo” revelam o julgamento. As demais alternativas trazem dados (custo, horário, data, tempo de moradia) que podem ser conferidos.`},

{t:'p-gen', d:2, tt:`Texto 1`,
 tx:`<b>Notícia</b><br><b>Quadra do Jardim Primavera é entregue com oito meses de atraso</b><br>A Prefeitura de Campo Verde do Oeste entregou, no último sábado, a cobertura da quadra poliesportiva do Jardim Primavera. A obra custou R$ 640 mil e estava prevista para fevereiro. Segundo a Secretaria de Obras, o atraso ocorreu por falta de material. Com o telhado e a nova iluminação, a quadra poderá ser usada também em dias de chuva e à noite. O espaço funcionará das 7h às 22h, e o uso por times deverá ser agendado pelo aplicativo da prefeitura.<br><br><b>Carta do leitor</b><br>Moro no Jardim Primavera há vinte anos e vi, enfim, a quadra coberta. Pena que a alegria durou pouco. Para jogar lá, agora é preciso agendar horário pelo aplicativo da prefeitura, que vive fora do ar. Na primeira semana, os meninos do bairro, que antes chegavam e jogavam, ficaram do lado de fora do alambrado, olhando a quadra vazia. Uma obra que demorou oito meses a mais merecia, no mínimo, regras pensadas para quem mora aqui.<br><i>Sílvia Moraes, Campo Verde do Oeste</i>`,
 q:`Comparando a notícia e a carta do leitor, é correto afirmar que:`,
 o:[
  [`a notícia relata o fato em 3ª pessoa e atribui a explicação do atraso a uma fonte (a Secretaria de Obras); a carta, em 1ª pessoa, avalia o fato a partir da experiência de quem mora no bairro.`, ``],
  [`os dois textos são opinativos, pois ambos tratam do atraso da obra.`, `Falar do mesmo assunto não torna um texto opinativo. A notícia apenas informa; quem julga é a carta.`],
  [`a notícia critica abertamente a prefeitura, ao classificar o atraso como inaceitável.`, `A palavra “inaceitável” não aparece. A notícia informa o atraso e a explicação da Secretaria, sem julgar.`],
  [`a carta é mais objetiva que a notícia, porque informa há quanto tempo a autora mora no bairro.`, `Um dado isolado não torna o texto objetivo. A carta é escrita em 1ª pessoa e cheia de avaliações (“Pena que”, “merecia, no mínimo”).`],
  [`a notícia é, na verdade, uma reportagem, pois ouve moradores e apresenta vários pontos de vista.`, `A notícia não ouve nenhum morador: a única fonte citada é a Secretaria de Obras. E ela é curta, sem o aprofundamento de uma reportagem.`]
 ], a:0,
 e:`Os dois textos tratam do mesmo fato, mas com finalidades diferentes. A <b>notícia</b> informa de forma objetiva, em 3ª pessoa, e atribui a explicação a uma fonte (“Segundo a Secretaria de Obras…”). A <b>carta do leitor</b> é escrita em 1ª pessoa (“Moro”, “vi”) e expressa a avaliação da leitora (“Pena que a alegria durou pouco”, “merecia, no mínimo…”).`},

{t:'p-impl', d:3, tt:`Texto 1`,
 tx:`<b>Notícia</b><br><b>Quadra do Jardim Primavera é entregue com oito meses de atraso</b><br>A Prefeitura de Campo Verde do Oeste entregou, no último sábado, a cobertura da quadra poliesportiva do Jardim Primavera. A obra custou R$ 640 mil e estava prevista para fevereiro. Segundo a Secretaria de Obras, o atraso ocorreu por falta de material. Com o telhado e a nova iluminação, a quadra poderá ser usada também em dias de chuva e à noite. O espaço funcionará das 7h às 22h, e o uso por times deverá ser agendado pelo aplicativo da prefeitura.<br><br><b>Carta do leitor</b><br>Moro no Jardim Primavera há vinte anos e vi, enfim, a quadra coberta. Pena que a alegria durou pouco. Para jogar lá, agora é preciso agendar horário pelo aplicativo da prefeitura, que vive fora do ar. Na primeira semana, os meninos do bairro, que antes chegavam e jogavam, ficaram do lado de fora do alambrado, olhando a quadra vazia. Uma obra que demorou oito meses a mais merecia, no mínimo, regras pensadas para quem mora aqui.<br><i>Sílvia Moraes, Campo Verde do Oeste</i>`,
 q:`Lendo os dois textos em conjunto, pode-se inferir que:`,
 o:[
  [`a leitora contesta o valor de R$ 640 mil divulgado na notícia, por considerá-lo alto demais.`, `A carta não menciona o custo da obra. A queixa da leitora é sobre as regras de uso.`],
  [`a leitora preferia que a quadra não tivesse sido coberta, pois o bairro estava melhor antes da obra.`, `Ela diz que sentiu “alegria” ao ver a quadra coberta. O problema, para ela, não é a cobertura, e sim a exigência de agendamento.`],
  [`a notícia já antecipava que o aplicativo da prefeitura apresentaria falhas.`, `A notícia só informa que o uso será agendado pelo aplicativo; quem diz que ele “vive fora do ar” é a leitora.`],
  [`os meninos do bairro deixaram de jogar porque a quadra passou a funcionar apenas à noite.`, `A notícia informa que a quadra funciona das 7h às 22h. Na carta, a causa apontada é o agendamento pelo aplicativo.`],
  [`o agendamento pelo aplicativo, apresentado na notícia como simples informação prática, é justamente o ponto que a leitora aponta como problema.`, ``]
 ], a:4,
 e:`A notícia termina com um detalhe aparentemente neutro: “o uso por times deverá ser agendado pelo aplicativo da prefeitura”. A carta retoma exatamente esse ponto e mostra a consequência: o aplicativo “vive fora do ar”, e os meninos que “antes chegavam e jogavam” ficaram do lado de fora, com a quadra vazia. Cruzando as pistas dos dois textos, conclui-se que a regra de agendamento é o centro da crítica. As outras alternativas atribuem aos textos informações que eles não trazem.`},

{t:'p-coes', d:1, tt:`Texto 1`,
 tx:`<b>Notícia</b><br><b>Quadra do Jardim Primavera é entregue com oito meses de atraso</b><br>A Prefeitura de Campo Verde do Oeste entregou, no último sábado, a cobertura da quadra poliesportiva do Jardim Primavera. A obra custou R$ 640 mil e estava prevista para fevereiro. Segundo a Secretaria de Obras, o atraso ocorreu por falta de material. Com o telhado e a nova iluminação, a quadra poderá ser usada também em dias de chuva e à noite. O espaço funcionará das 7h às 22h, e o uso por times deverá ser agendado pelo aplicativo da prefeitura.<br><br><b>Carta do leitor</b><br>Moro no Jardim Primavera há vinte anos e vi, enfim, a quadra coberta. Pena que a alegria durou pouco. Para jogar lá, agora é preciso agendar horário pelo aplicativo da prefeitura, que vive fora do ar. Na primeira semana, os meninos do bairro, que antes chegavam e jogavam, ficaram do lado de fora do alambrado, olhando a quadra vazia. Uma obra que demorou oito meses a mais merecia, no mínimo, regras pensadas para quem mora aqui.<br><i>Sílvia Moraes, Campo Verde do Oeste</i>`,
 q:`Na carta do leitor, a expressão “a alegria”, em “Pena que <b>a alegria</b> durou pouco”, retoma:`,
 o:[
  [`a festa de inauguração organizada pela prefeitura.`, `Nenhum dos textos fala em festa de inauguração.`],
  [`a satisfação da leitora ao ver, enfim, a quadra coberta.`, ``],
  [`o prazer dos meninos de jogar sem precisar agendar horário.`, `Os meninos só aparecem depois, e o que se conta sobre eles é que ficaram do lado de fora. A expressão retoma algo dito antes dela.`],
  [`o orgulho da leitora por morar no bairro há vinte anos.`, `A leitora não fala em orgulho, e morar no bairro não é algo que “durou pouco”.`],
  [`a reação da Secretaria de Obras ao concluir a obra.`, `A Secretaria aparece só na notícia, e nada é dito sobre a reação dela.`]
 ], a:1,
 e:`A expressão “a alegria” resume uma ideia que veio logo antes: “vi, enfim, a quadra coberta”. É um caso de <b>coesão por retomada</b>: em vez de repetir a frase, a autora usa um substantivo que a condensa. Teste: “Pena que a satisfação de ver a quadra coberta durou pouco” faz sentido completo.`},

/* ================= Texto 2 · Poema ================= */
{t:'p-fig', d:1, tt:`Texto 2`,
 tx:`<b>Rodoviária</b><br>A rodoviária acorda cedo<br>e boceja ônibus na avenida.<br>Minha mãe me aperta com medo<br>num abraço do tamanho da vida.<br><br>Levo na mala um cheiro dourado<br>de bolo de milho, ainda morno,<br>e deixo no portão, do outro lado,<br>a promessa de um breve retorno.<br><br>O ônibus parte. E eu, partido,<br>metade estrada, metade abrigo.<br><i>(poema escrito para este simulado)</i>`,
 q:`Nos versos 1 e 2, a rodoviária “acorda” e “boceja ônibus”. A figura de linguagem predominante nesses versos é:`,
 o:[
  [`hipérbole`, `Hipérbole é exagero de quantidade ou intensidade. Aqui, o que chama atenção é a rodoviária fazer coisas de gente.`],
  [`metonímia`, `Não há troca de um termo por outro relacionado (como autor pela obra ou continente pelo conteúdo).`],
  [`comparação`, `Não há conectivo comparativo (“como”, “feito”, “tal qual”).`],
  [`personificação`, ``],
  [`antítese`, `Não há ideias opostas lado a lado nesses dois versos.`]
 ], a:3,
 e:`Acordar e bocejar são ações de seres vivos, típicas de pessoas. Atribuí-las a um lugar (a rodoviária) é <b>personificação</b>. O efeito é mostrar a rodoviária “despertando” de manhã e “soltando” os ônibus como quem boceja, de forma preguiçosa.`},

{t:'p-fig', d:2, tt:`Texto 2`,
 tx:`<b>Rodoviária</b><br>A rodoviária acorda cedo<br>e boceja ônibus na avenida.<br>Minha mãe me aperta com medo<br>num abraço do tamanho da vida.<br><br>Levo na mala um cheiro dourado<br>de bolo de milho, ainda morno,<br>e deixo no portão, do outro lado,<br>a promessa de um breve retorno.<br><br>O ônibus parte. E eu, partido,<br>metade estrada, metade abrigo.<br><i>(poema escrito para este simulado)</i>`,
 q:`Na expressão “um cheiro dourado” (verso 5), ocorre:`,
 o:[
  [`sinestesia, pois mistura uma sensação do olfato (cheiro) com uma da visão (dourado).`, ``],
  [`personificação, pois o cheiro realiza uma ação humana.`, `“Dourado” é uma cor, não uma ação humana. Nenhuma ação de pessoa é atribuída ao cheiro.`],
  [`metonímia, pois o cheiro é usado no lugar da mala.`, `O cheiro não substitui a mala: ele é o que vai dentro dela, junto com a lembrança do bolo.`],
  [`comparação, pois aproxima o cheiro da cor do ouro por meio de um conectivo.`, `Não há conectivo (“como”, “feito”) na expressão.`],
  [`onomatopeia, pois imita o som do bolo assando.`, `Onomatopeia imita sons. “Cheiro dourado” não reproduz som nenhum.`]
 ], a:0,
 e:`<b>Sinestesia</b> é a mistura de sensações de sentidos diferentes. “Cheiro” pertence ao olfato; “dourado”, à visão. A combinação torna a lembrança do bolo da mãe mais viva, como se o eu lírico pudesse ver o cheiro.`},

{t:'p-sent', d:3, tt:`Texto 2`,
 tx:`<b>Rodoviária</b><br>A rodoviária acorda cedo<br>e boceja ônibus na avenida.<br>Minha mãe me aperta com medo<br>num abraço do tamanho da vida.<br><br>Levo na mala um cheiro dourado<br>de bolo de milho, ainda morno,<br>e deixo no portão, do outro lado,<br>a promessa de um breve retorno.<br><br>O ônibus parte. E eu, partido,<br>metade estrada, metade abrigo.<br><i>(poema escrito para este simulado)</i>`,
 q:`No verso 9, “O ônibus parte. E eu, <b>partido</b>,”, a palavra destacada ganha força no poema porque:`,
 o:[
  [`tem apenas o sentido denotativo de “que foi embora”, repetindo a informação do verbo “parte”.`, `Essa é só uma das leituras. O último verso (“metade estrada, metade abrigo”) mostra que o poema também explora a ideia de estar dividido.`],
  [`significa “membro de um partido político”, um dos sentidos da palavra no dicionário.`, `É de fato um dos sentidos de “partido”, mas não tem relação nenhuma com o contexto do poema.`],
  [`é polissêmica: sugere, ao mesmo tempo, que o eu lírico partiu (foi embora) e que está dividido, “quebrado” por dentro, ideia reforçada no último verso.`, ``],
  [`cria uma ambiguidade que é um defeito do poema, pois o leitor não consegue saber o sentido pretendido.`, `No poema, o duplo sentido é intencional: é um recurso expressivo, e os dois sentidos se somam em vez de confundir.`],
  [`é empregada no sentido conotativo de “zangado”, pois o eu lírico está irritado com a mãe.`, `Nada no poema indica irritação. O abraço e a “promessa de um breve retorno” mostram afeto.`]
 ], a:2,
 e:`“Partido” pode vir de <b>partir</b> no sentido de “ir embora” (eu, que parti) e de <b>partir</b> no sentido de “dividir, quebrar” (como em “coração partido”). O poema aproveita os dois sentidos ao mesmo tempo (<b>polissemia</b>): o eu lírico vai embora e, por isso, fica dividido. O último verso confirma: “metade estrada” (a viagem) e “metade abrigo” (a casa que ficou).`},

/* ================= Texto 3 · Charge ================= */
{t:'p-tira', d:2, tt:`Texto 3`,
 tx:`<b>Charge</b> (descrição)<br>Uma calçada estreita está completamente ocupada por carros estacionados, um atrás do outro. Uma senhora empurra um carrinho de bebê pelo meio da rua, espremida entre os veículos que passam. Num poste, um cartaz da prefeitura anuncia: “SEMANA DO PEDESTRE — Nesta cidade, quem anda a pé tem prioridade!”. De dentro de um carro, um motorista buzina e grita: “Sai da rua, minha senhora! Rua é lugar de carro!”`,
 q:`A crítica da charge é construída principalmente:`,
 o:[
  [`pela imprudência da senhora, que decidiu andar pelo meio da rua com um bebê.`, `Essa é a leitura do motorista, não a da charge. A cena mostra que a senhora não tem outra opção, porque a calçada está ocupada.`],
  [`pela falta de cartazes sobre os direitos dos pedestres na cidade.`, `Há um cartaz bem visível. O problema não é a falta de aviso, e sim a distância entre o que ele promete e o que acontece.`],
  [`pela defesa de mais estacionamentos, já que os carros não têm onde parar.`, `A charge se coloca do lado do pedestre. Os carros sobre a calçada são parte do problema criticado, e não vítimas.`],
  [`pelo exagero no número de carrinhos de bebê nas ruas da cidade.`, `Há um único carrinho na cena; ele serve para mostrar como o pedestre fica vulnerável.`],
  [`pelo contraste entre a promessa do cartaz e a situação real do pedestre, agravado pela fala do motorista, que culpa justamente quem foi prejudicado.`, ``]
 ], a:4,
 e:`O humor crítico nasce do <b>contraste</b>: o cartaz garante “prioridade” a quem anda a pé, mas a calçada foi tomada pelos carros e a senhora é obrigada a disputar espaço com eles. A fala do motorista (“Rua é lugar de carro!”) completa a ironia: ele expulsa da rua a pessoa que só está ali porque os carros ocuparam o espaço dela.`},

{t:'p-impl', d:1, tt:`Texto 3`,
 tx:`<b>Charge</b> (descrição)<br>Uma calçada estreita está completamente ocupada por carros estacionados, um atrás do outro. Uma senhora empurra um carrinho de bebê pelo meio da rua, espremida entre os veículos que passam. Num poste, um cartaz da prefeitura anuncia: “SEMANA DO PEDESTRE — Nesta cidade, quem anda a pé tem prioridade!”. De dentro de um carro, um motorista buzina e grita: “Sai da rua, minha senhora! Rua é lugar de carro!”`,
 q:`Pela cena descrita, pode-se inferir que a senhora anda pelo meio da rua porque:`,
 o:[
  [`o cartaz da prefeitura manda os pedestres usarem a rua durante a Semana do Pedestre.`, `O cartaz fala em “prioridade” ao pedestre; não manda ninguém andar na rua.`],
  [`a calçada está tomada pelos carros estacionados e não há espaço para passar com o carrinho.`, ``],
  [`ela quer protestar contra o motorista que buzina.`, `O motorista reage depois que ela já está na rua. Nada indica que ela esteja protestando.`],
  [`a rua está fechada para carros durante a Semana do Pedestre.`, `A cena mostra veículos passando e um motorista buzinando: a rua não está fechada.`],
  [`ela não sabe que a calçada é o lugar dos pedestres.`, `Não há nenhuma pista disso. A cena mostra que a calçada está ocupada, e não que ela a ignore.`]
 ], a:1,
 e:`A pista está logo na primeira frase: a calçada estreita está “completamente ocupada por carros estacionados”. Sem espaço para o carrinho de bebê, a senhora é obrigada a ir pela rua. Uma inferência boa sempre se apoia numa pista do texto.`},

/* ================= Texto 4 · Anúncio ================= */
{t:'p-pub', d:2, tt:`Texto 4`,
 tx:`<b>Anúncio</b><br>[Imagem: um garoto de capacete e mochila pedala, sorrindo, numa ciclovia, ao lado de uma longa fila de carros parados no congestionamento.]<br><b>BIKE ELÉTRICA PULSO</b><br>Enquanto o trânsito para, você chega.<br>Bateria que dura até 60 km por carga. Recarregue em qualquer tomada.<br>Certamente, o seu caminho para a escola nunca mais será o mesmo.<br><b>Pulso. Sua cidade em outro ritmo.</b>`,
 q:`Considerando a imagem e a frase “Enquanto o trânsito para, você chega”, a principal estratégia de persuasão do anúncio é:`,
 o:[
  [`apelar à autoridade de um especialista em mobilidade urbana.`, `Nenhum especialista é citado no anúncio.`],
  [`conscientizar sobre o uso do capacete, como numa campanha de trânsito.`, `O capacete é um detalhe da imagem. O texto quer vender a bicicleta (publicidade), e não divulgar uma causa (propaganda).`],
  [`criticar a prefeitura pela falta de ciclovias na cidade.`, `A imagem mostra justamente uma ciclovia, e a finalidade do anúncio é vender um produto, não fazer crítica.`],
  [`mostrar, por contraste, a vantagem de quem usa o produto: enquanto os carros ficam parados, o ciclista avança.`, ``],
  [`apresentar dados técnicos de forma neutra, sem tentar convencer o leitor.`, `Um anúncio nunca é neutro: frase de efeito, “você” e slogan servem para convencer.`]
 ], a:3,
 e:`O anúncio monta uma <b>oposição</b> entre “o trânsito para” e “você chega”, reforçada pela imagem (carros parados × garoto sorrindo e avançando). Assim, o produto aparece como a solução para um problema que o leitor conhece. O uso de “você” e a referência ao “caminho para a escola” mostram que o público são estudantes jovens.`},

{t:'p-modal', d:3, tt:`Texto 4`,
 tx:`<b>Anúncio</b><br>[Imagem: um garoto de capacete e mochila pedala, sorrindo, numa ciclovia, ao lado de uma longa fila de carros parados no congestionamento.]<br><b>BIKE ELÉTRICA PULSO</b><br>Enquanto o trânsito para, você chega.<br>Bateria que dura até 60 km por carga. Recarregue em qualquer tomada.<br>Certamente, o seu caminho para a escola nunca mais será o mesmo.<br><b>Pulso. Sua cidade em outro ritmo.</b>`,
 q:`Observe as palavras “<b>até</b>” (em “dura até 60 km por carga”) e “<b>Certamente</b>”. É correto afirmar que:`,
 o:[
  [`“até” introduz o argumento mais forte, como em “Até o goleiro fez gol”, e “certamente” indica dúvida.`, `Aqui “até” não introduz o caso mais surpreendente: ele marca um limite (60 km). E “certamente” expressa certeza, não dúvida.`],
  [`“até” marca um limite máximo, de modo que a bateria pode durar menos que 60 km; “certamente” apresenta como certeza o que é, na verdade, uma promessa do anunciante.`, ``],
  [`“até” garante que a bateria dura, no mínimo, 60 km; “certamente” expressa apenas uma possibilidade.`, `É o contrário: “até” indica o máximo, não o mínimo. E “certamente” é um modalizador de certeza; possibilidade seria “talvez” ou “provavelmente”.`],
  [`“até” indica tempo, como em “até amanhã”, e “certamente” expressa uma obrigação do leitor.`, `“60 km” é distância, não tempo. E obrigação seria “é preciso” ou “deve”, não “certamente”.`],
  [`as duas palavras são neutras e poderiam ser retiradas sem nenhuma mudança de sentido.`, `Sem “até”, pareceria que a bateria sempre dura 60 km; sem “certamente”, a frase perderia o tom de garantia. As duas mudam o sentido.`]
 ], a:1,
 e:`A mesma palavra pode ter funções diferentes. Em “dura <b>até</b> 60 km”, “até” marca o <b>limite máximo</b>: a bateria pode durar 60 km ou menos, um detalhe que protege o anunciante. Já “<b>Certamente</b>” é um modalizador de <b>certeza</b>: apresenta como garantida uma previsão sobre o futuro (“nunca mais será o mesmo”), o que aumenta o poder de convencimento do anúncio.`},

/* ================= Questões avulsas de gramática em contexto ================= */
{t:'p-per', d:3,
 q:`Leia a frase de uma crônica esportiva:<br>“<b>Por mais que treinasse todos os dias</b>, o goleiro estava tão inseguro <b>que o técnico escalou o reserva para a final</b>.”<br>As orações destacadas expressam, respectivamente, relações de:`,
 o:[
  [`concessão e consequência`, ``],
  [`causa e consequência`, `Treinar não é a causa da insegurança. “Por mais que” apresenta um fato que deveria levar a outro resultado, mas não leva: isso é concessão.`],
  [`concessão e finalidade`, `O técnico não escalou o reserva “para que” o goleiro ficasse inseguro. Depois de “tão”, o “que” introduz o resultado (consequência).`],
  [`condição e consequência`, `“Por mais que” não equivale a “se”: o treino é um fato admitido, não uma hipótese.`],
  [`proporção e conclusão`, `“Por mais que” lembra “quanto mais”, mas não indica proporção; e o par “tão… que” indica consequência, não conclusão.`]
 ], a:0,
 e:`“<b>Por mais que</b> treinasse” = “<b>embora</b> treinasse”: admite-se um fato (o treino diário) que não impede o resultado contrário (a insegurança) → <b>concessão</b>. Em “<b>tão</b> inseguro <b>que</b> o técnico escalou o reserva”, a segunda parte é o efeito da insegurança → <b>consequência</b>.`},

{t:'p-pont', d:2,
 q:`Lia mandou esta mensagem para a mãe:<br>“Para o meu aniversário, convidei meus vizinhos, o Caio e a Luana.”<br>A mãe ficou em dúvida: Caio e Luana são os vizinhos ou são outras duas pessoas convidadas? Qual reescrita deixa claro que <b>Caio e Luana são os vizinhos</b>?`,
 o:[
  [`Para o meu aniversário, convidei meus vizinhos e o Caio e a Luana.`, `O “e” separa os vizinhos de Caio e Luana: a frase passa a dizer que são pessoas diferentes, o contrário do pedido.`],
  [`Para o meu aniversário, convidei, meus vizinhos, o Caio e a Luana.`, `Entre vírgulas, logo após o verbo, “meus vizinhos” parece um vocativo (como se Lia falasse com os vizinhos), mas a mensagem é para a mãe. A frase fica confusa.`],
  [`Para o meu aniversário convidei meus vizinhos o Caio e a Luana.`, `Sem nenhuma vírgula, a relação entre “meus vizinhos” e os nomes fica ainda mais confusa. A dúvida não é resolvida.`],
  [`Para o meu aniversário, convidei meus vizinhos, o Caio, e a Luana.`, `A vírgula antes do “e” reforça a ideia de uma lista de itens separados: parece que foram convidados os vizinhos, o Caio e também a Luana.`],
  [`Para o meu aniversário, convidei o Caio e a Luana, meus vizinhos.`, ``]
 ], a:4,
 e:`Na frase original, “o Caio e a Luana” pode ser lido como <b>aposto</b> (explicando quem são os vizinhos) ou como mais itens de uma <b>enumeração</b>. Ao colocar os nomes primeiro e “meus vizinhos” depois da vírgula, no fim da frase, a expressão só pode ser aposto: ela explica quem são Caio e Luana. Como a mensagem é para a mãe, não há como ler “meus vizinhos” como vocativo.`},

{t:'p-col', d:2,
 q:`Leia o aviso enviado pela escola:<br>“Senhores pais: os boletins do 3º bimestre já estão prontos. <b>Retirem-nos</b> na secretaria até sexta-feira.”<br>Sobre a forma destacada, é correto afirmar que:`,
 o:[
  [`o pronome “nos” representa a escola que escreve o aviso (nós), e o certo seria “Nos retirem”.`, `Quem será retirado são os boletins, não a escola. E, na norma-padrão, não se inicia frase com pronome oblíquo.`],
  [`o pronome deveria vir antes do verbo (“Nos retirem”), pois a norma-padrão prefere a próclise em avisos formais.`, `É o contrário: no início da frase, a norma-padrão pede o pronome depois do verbo (ênclise).`],
  [`“nos” retoma “os boletins”: é a forma que o pronome “os” assume depois de verbo terminado em -m, e fica após o verbo porque a norma-padrão não inicia frase com pronome oblíquo.`, ``],
  [`o correto seria “Retirem-os”, pois o pronome “os” não muda de forma depois do verbo.`, `Depois de verbo terminado em som nasal (-m, -ão, -õe), “o, a, os, as” viram “no, na, nos, nas”: retirem + os = retirem-nos.`],
  [`o correto seria “Retirem-lhes”, pois o verbo “retirar” pede pronome que indique pessoa.`, `“Os boletins” é objeto direto (retirar algo), por isso o pronome é “os” (aqui, “nos”). “Lhes” indica objeto indireto (a alguém).`]
 ], a:2,
 e:`Dois pontos se juntam aqui. 1) <b>Forma do pronome</b>: depois de verbo terminado em som nasal, “os” vira “nos” (retirem + os → retirem-<b>nos</b>), e ele retoma “os boletins”. 2) <b>Colocação</b>: o verbo inicia a frase, e a norma-padrão não começa frase com pronome oblíquo; por isso, ênclise (“Retirem-nos”).`},

{t:'p-var', d:1,
 q:`No hospital, a médica falou com a equipe: “A paciente teve uma <b>cefaleia</b> intensa, mas o quadro está estável.” Logo depois, conversando com o filho da paciente, disse: “Sua mãe teve uma forte <b>dor de cabeça</b>, mas já está bem.”<br>A mudança na forma de falar da médica mostra que ela:`,
 o:[
  [`corrigiu um erro de português que tinha cometido na primeira fala.`, `A primeira fala não tem erro: é a linguagem técnica da medicina, adequada para falar com a equipe.`],
  [`usou, na segunda fala, uma variedade regional típica do lugar onde o filho mora.`, `“Dor de cabeça” é usada em todo o país; não é marca regional.`],
  [`demonstrou preconceito linguístico ao simplificar a fala para o filho.`, `Adequar a linguagem para ser compreendido não é discriminar ninguém; é cuidado com o interlocutor.`],
  [`adequou a linguagem ao interlocutor: usou o jargão médico com a equipe e palavras do dia a dia com o familiar.`, ``],
  [`exemplificou a variação histórica, pois “cefaleia” é uma palavra que caiu em desuso.`, `“Cefaleia” é um termo técnico usado até hoje na medicina; não é uma palavra antiga.`]
 ], a:3,
 e:`É um caso de <b>variação situacional</b> (ou de registro): a médica escolhe as palavras conforme <b>com quem</b> fala. Com colegas, o <b>jargão</b> técnico (“cefaleia”, “quadro estável”) é preciso e adequado; com o filho da paciente, palavras do dia a dia garantem a compreensão. Nenhuma das falas está “errada”.`}

];

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
 ], a:3, e:`Tirando as 3 que sobram, o resto é múltiplo de 6, de 8 e de 10 ao mesmo tempo, ou seja, múltiplo do MMC.<br>6 = 2 · 3 · 8 = 2³ · 10 = 2 · 5 → MMC = 2³ · 3 · 5 = 120.<br>Múltiplos de 120: 120, 240, 360… Somando 3: 123, 243, 363…<br>O único entre 200 e 300 é <b>243</b>.`},

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

/* SIMULADO C · Português (15 questões)
   Textos-base escritos para este simulado, exceto o trecho em domínio público de Casimiro de Abreu (“Meus oito anos”, 1859). */
const SIM_C_POR = [

/* 1 · p-impl */
{t:'p-impl', d:2,
 tt:`Texto 1`,
 tx:`<b>Pequenos, mas resistentes</b><br>A maioria dos tardígrados mede menos de um milímetro, tem oito patas gordinhas e anda devagar, como se estivesse sempre com preguiça. Por causa desse jeito desajeitado, eles ganharam o apelido de ursos-d'água. Vivem em lugares úmidos, como o musgo dos muros e das árvores, e já foram encontrados do alto das montanhas ao fundo do mar.<br>O que deixou esses bichinhos famosos, porém, foi a sua resistência. Quando o ambiente seca, o tardígrado recolhe as patas, perde quase toda a água do corpo e se enrola numa espécie de barrilzinho. Nesse estado, seu metabolismo fica tão lento que mal pode ser medido. Assim, ele aguenta frio intenso, calor forte e até radiação. Em 2007, cientistas enviaram alguns deles à órbita da Terra e os deixaram expostos ao vácuo do espaço; ao voltar, muitos se reidrataram e continuaram vivos.<br>Nas redes, é comum ler que os tardígrados são “indestrutíveis”. A fama é exagerada. Quando estão ativos, eles são tão frágeis quanto qualquer animal pequeno: precisam de uma película de água ao redor do corpo para se mover, comer e se reproduzir. A resistência só aparece no “modo barrilzinho”, e mesmo assim tem limite. Os tardígrados, portanto, não são super-heróis: são especialistas em esperar a hora certa de voltar à vida.<br>Entender como eles fazem isso pode ajudar a ciência a, um dia, conservar vacinas sem precisar de geladeira.<br><i>(Texto escrito para este simulado.)</i>`,
 q:`O último parágrafo do texto permite inferir que:`,
 o:[
  [`os tardígrados já são usados como ingrediente na fabricação de vacinas.`, `O texto fala de algo que <b>pode</b> acontecer <b>um dia</b>; não afirma que isso já ocorre.`],
  [`as vacinas atuais deixaram de funcionar e precisam ser substituídas.`, `Nada no texto sugere que as vacinas não funcionem; fala-se apenas da forma de conservá-las.`],
  [`atualmente, ao menos parte das vacinas precisa de refrigeração para ser conservada.`, ``],
  [`as geladeiras estragam as vacinas, por isso os cientistas querem eliminá-las.`, `Inferência sem base: o texto não diz que a geladeira prejudica as vacinas, só que seria bom não depender dela.`],
  [`a ciência já sabe exatamente como os tardígrados resistem; falta só aplicar esse conhecimento.`, `“Entender como eles fazem isso” mostra que o mecanismo ainda está sendo estudado, não que já esteja totalmente compreendido.`]
 ], a:2,
 e:`Se a ciência quer, um dia, “conservar vacinas <b>sem precisar de geladeira</b>”, é porque hoje ao menos parte delas <b>precisa</b> de geladeira. Essa informação não está escrita, mas está implícita na frase. As demais alternativas vão além do texto ou o contradizem (“pode”, “um dia” indicam possibilidade futura).`},

/* 2 · p-coes */
{t:'p-coes', d:1,
 tt:`Texto 1`,
 tx:`<b>Pequenos, mas resistentes</b><br>A maioria dos tardígrados mede menos de um milímetro, tem oito patas gordinhas e anda devagar, como se estivesse sempre com preguiça. Por causa desse jeito desajeitado, eles ganharam o apelido de ursos-d'água. Vivem em lugares úmidos, como o musgo dos muros e das árvores, e já foram encontrados do alto das montanhas ao fundo do mar.<br>O que deixou esses bichinhos famosos, porém, foi a sua resistência. Quando o ambiente seca, o tardígrado recolhe as patas, perde quase toda a água do corpo e se enrola numa espécie de barrilzinho. Nesse estado, seu metabolismo fica tão lento que mal pode ser medido. Assim, ele aguenta frio intenso, calor forte e até radiação. Em 2007, cientistas enviaram alguns deles à órbita da Terra e os deixaram expostos ao vácuo do espaço; ao voltar, muitos se reidrataram e continuaram vivos.<br>Nas redes, é comum ler que os tardígrados são “indestrutíveis”. A fama é exagerada. Quando estão ativos, eles são tão frágeis quanto qualquer animal pequeno: precisam de uma película de água ao redor do corpo para se mover, comer e se reproduzir. A resistência só aparece no “modo barrilzinho”, e mesmo assim tem limite. Os tardígrados, portanto, não são super-heróis: são especialistas em esperar a hora certa de voltar à vida.<br>Entender como eles fazem isso pode ajudar a ciência a, um dia, conservar vacinas sem precisar de geladeira.<br><i>(Texto escrito para este simulado.)</i>`,
 q:`No segundo parágrafo, no trecho “cientistas enviaram alguns deles à órbita da Terra e <b>os</b> deixaram expostos ao vácuo do espaço”, o pronome destacado retoma:`,
 o:[
  [`os cientistas.`, `Os cientistas são quem pratica a ação (o sujeito de “deixaram”); quem foi deixado exposto ao vácuo foram os animais.`],
  [`os lugares úmidos citados no primeiro parágrafo.`, `Lugares úmidos não foram levados ao espaço; o referente está bem mais perto, na mesma frase.`],
  [`o frio intenso e o calor forte.`, `Frio e calor são condições que o animal suporta, não o que foi enviado à órbita.`],
  [`os músculos das patas gordinhas.`, `O texto não fala em músculos; as patas aparecem no primeiro parágrafo e não têm relação com essa frase.`],
  [`os tardígrados enviados à órbita (“alguns deles”).`, ``]
 ], a:4,
 e:`Pergunte ao verbo: os cientistas deixaram <b>quem</b> exposto ao vácuo? “Alguns deles”, isto é, os tardígrados que foram enviados à órbita. O pronome “os” retoma esse termo e evita repeti-lo.`},

/* 3 · p-sent */
{t:'p-sent', d:2,
 tt:`Texto 1`,
 tx:`<b>Pequenos, mas resistentes</b><br>A maioria dos tardígrados mede menos de um milímetro, tem oito patas gordinhas e anda devagar, como se estivesse sempre com preguiça. Por causa desse jeito desajeitado, eles ganharam o apelido de ursos-d'água. Vivem em lugares úmidos, como o musgo dos muros e das árvores, e já foram encontrados do alto das montanhas ao fundo do mar.<br>O que deixou esses bichinhos famosos, porém, foi a sua resistência. Quando o ambiente seca, o tardígrado recolhe as patas, perde quase toda a água do corpo e se enrola numa espécie de barrilzinho. Nesse estado, seu metabolismo fica tão lento que mal pode ser medido. Assim, ele aguenta frio intenso, calor forte e até radiação. Em 2007, cientistas enviaram alguns deles à órbita da Terra e os deixaram expostos ao vácuo do espaço; ao voltar, muitos se reidrataram e continuaram vivos.<br>Nas redes, é comum ler que os tardígrados são “indestrutíveis”. A fama é exagerada. Quando estão ativos, eles são tão frágeis quanto qualquer animal pequeno: precisam de uma película de água ao redor do corpo para se mover, comer e se reproduzir. A resistência só aparece no “modo barrilzinho”, e mesmo assim tem limite. Os tardígrados, portanto, não são super-heróis: são especialistas em esperar a hora certa de voltar à vida.<br>Entender como eles fazem isso pode ajudar a ciência a, um dia, conservar vacinas sem precisar de geladeira.<br><i>(Texto escrito para este simulado.)</i>`,
 q:`No trecho “Os tardígrados, portanto, não são <b>super-heróis</b>”, a palavra destacada foi empregada em sentido:`,
 o:[
  [`conotativo, representando seres de resistência ilimitada, imagem que o texto procura desfazer.`, ``],
  [`denotativo, porque os tardígrados aparecem como personagens em filmes e quadrinhos.`, `O texto não fala de filmes nem de quadrinhos; a palavra não se refere a personagens de ficção.`],
  [`conotativo, para elogiar os tardígrados como os animais mais fortes do planeta.`, `É o contrário: a frase <b>nega</b> que eles tenham poderes ilimitados (“A fama é exagerada”).`],
  [`denotativo, pois o autor só quer informar que os tardígrados não são personagens inventados.`, `Essa é a leitura ao pé da letra. O autor usa “super-heróis” como imagem de invencibilidade, para corrigir o exagero das redes.`],
  [`conotativo, para indicar que os tardígrados são perigosos para o ser humano.`, `Nada no texto fala em perigo para as pessoas; “super-herói” remete a força e invencibilidade, não a ameaça.`]
 ], a:0,
 e:`“Super-heróis” está em sentido <b>figurado (conotativo)</b>: representa a ideia de “indestrutível”, que circula nas redes. Ao dizer que eles <b>não</b> são super-heróis, o texto conclui (“portanto”) que a resistência existe, mas tem limites.`},

/* 4 · p-conj */
{t:'p-conj', d:3,
 tt:`Texto 1`,
 tx:`<b>Pequenos, mas resistentes</b><br>A maioria dos tardígrados mede menos de um milímetro, tem oito patas gordinhas e anda devagar, como se estivesse sempre com preguiça. Por causa desse jeito desajeitado, eles ganharam o apelido de ursos-d'água. Vivem em lugares úmidos, como o musgo dos muros e das árvores, e já foram encontrados do alto das montanhas ao fundo do mar.<br>O que deixou esses bichinhos famosos, porém, foi a sua resistência. Quando o ambiente seca, o tardígrado recolhe as patas, perde quase toda a água do corpo e se enrola numa espécie de barrilzinho. Nesse estado, seu metabolismo fica tão lento que mal pode ser medido. Assim, ele aguenta frio intenso, calor forte e até radiação. Em 2007, cientistas enviaram alguns deles à órbita da Terra e os deixaram expostos ao vácuo do espaço; ao voltar, muitos se reidrataram e continuaram vivos.<br>Nas redes, é comum ler que os tardígrados são “indestrutíveis”. A fama é exagerada. Quando estão ativos, eles são tão frágeis quanto qualquer animal pequeno: precisam de uma película de água ao redor do corpo para se mover, comer e se reproduzir. A resistência só aparece no “modo barrilzinho”, e mesmo assim tem limite. Os tardígrados, portanto, não são super-heróis: são especialistas em esperar a hora certa de voltar à vida.<br>Entender como eles fazem isso pode ajudar a ciência a, um dia, conservar vacinas sem precisar de geladeira.<br><i>(Texto escrito para este simulado.)</i>`,
 q:`Assinale a alternativa em que a relação de sentido indicada para a expressão retirada do texto está correta.`,
 o:[
  [`“O que deixou esses bichinhos famosos, <b>porém</b>, foi a sua resistência”: causa.`, `“Porém” é adversativo: opõe a fama de resistente ao tamanho minúsculo e ao jeito desajeitado descritos no 1º parágrafo.`],
  [`“<b>Por causa desse</b> jeito desajeitado, eles ganharam o apelido”: consequência.`, `A expressão introduz a <b>causa</b> do apelido; a consequência é “ganharam o apelido de ursos-d'água”.`],
  [`“anda devagar, <b>como se</b> estivesse sempre com preguiça”: conformidade.`, `“Como se” estabelece uma <b>comparação</b> (hipotética). Conformidade seria “como” no sentido de “conforme” (“fiz como você mandou”).`],
  [`“<b>Assim</b>, ele aguenta frio intenso, calor forte e até radiação”: conclusão ou consequência do que foi descrito antes, com o sentido de “dessa forma”.`, ``],
  [`“A resistência só aparece no ‘modo barrilzinho’, e <b>mesmo assim</b> tem limite”: explicação.`, `“Mesmo assim” tem valor <b>concessivo</b>: apesar de estar no modo barrilzinho, a resistência tem limite.`]
 ], a:3,
 e:`Depois de explicar o que o tardígrado faz quando o ambiente seca (recolhe as patas, perde água, desacelera o metabolismo), o texto apresenta o <b>resultado</b> disso: “Assim (= dessa forma, por isso), ele aguenta...”. Revise: porém = oposição; por causa de = causa; como se = comparação; mesmo assim = concessão.`},

/* 5 · p-fake */
{t:'p-fake', d:1,
 tt:`Texto 2`,
 tx:`<b>Postagem compartilhada numa rede social</b><br><i>@alerta.saude.verdade · 1,2 mil compartilhamentos</i><br>ATENÇÃO, PAIS!!! Cientistas COMPROVARAM: quem passa mais de 3 horas por dia no celular PERDE 10 PONTOS DE INTELIGÊNCIA POR ANO!!! O estudo foi feito numa universidade famosa dos Estados Unidos, mas a grande imprensa está escondendo. COMPARTILHE ANTES QUE APAGUEM!!!<br><br><b>Checagem publicada pela agência Fato em Foco</b><br>Classificação: <b>FALSO</b>. A postagem não informa o nome da universidade, dos pesquisadores nem da revista em que o suposto estudo teria sido publicado. Nossa equipe procurou nas principais bases de pesquisas científicas e não encontrou nenhum trabalho com essa conclusão. A pesquisadora Marina Teles, especialista em desenvolvimento infantil, explica que o uso excessivo de telas <b>pode</b> prejudicar o sono e a concentração, o que <b>talvez</b> afete o desempenho escolar. “Mas não existe nenhuma pesquisa que mostre perda de 10 pontos de inteligência por ano. Esse número foi inventado”, afirma.<br><i>(Postagem, agência e pesquisadora fictícias, criadas para este simulado.)</i>`,
 q:`Qual alternativa reúne <b>apenas</b> sinais de alerta presentes na postagem?`,
 o:[
  [`O tema ligado à saúde e o uso da palavra “cientistas”.`, `Falar de saúde ou mencionar cientistas não é, por si só, sinal de falsidade; textos confiáveis também fazem isso.`],
  [`Perfil que não identifica quem escreveu, ausência do nome da universidade e dos pesquisadores e pedido urgente de compartilhamento.`, ``],
  [`O número de compartilhamentos e a menção aos Estados Unidos.`, `Ser muito compartilhada não prova nada, nem a favor nem contra; e citar um país não é sinal de alerta.`],
  [`A linguagem formal e a citação de dados que podem ser conferidos.`, `É o oposto: a postagem usa CAIXA ALTA e exclamações e não traz dados verificáveis.`],
  [`A data recente e o link para o estudo original.`, `A postagem não traz data nem link; a falta deles é que seria um sinal de alerta.`]
 ], a:1,
 e:`Checklist do detetive: <b>autor</b> não identificado, <b>fonte</b> vaga (“uma universidade famosa”), tom sensacionalista e apelo do tipo “compartilhe antes que apaguem”. Todos esses sinais estão na alternativa B.`},

/* 6 · p-fake */
{t:'p-fake', d:3,
 tt:`Texto 2`,
 tx:`<b>Postagem compartilhada numa rede social</b><br><i>@alerta.saude.verdade · 1,2 mil compartilhamentos</i><br>ATENÇÃO, PAIS!!! Cientistas COMPROVARAM: quem passa mais de 3 horas por dia no celular PERDE 10 PONTOS DE INTELIGÊNCIA POR ANO!!! O estudo foi feito numa universidade famosa dos Estados Unidos, mas a grande imprensa está escondendo. COMPARTILHE ANTES QUE APAGUEM!!!<br><br><b>Checagem publicada pela agência Fato em Foco</b><br>Classificação: <b>FALSO</b>. A postagem não informa o nome da universidade, dos pesquisadores nem da revista em que o suposto estudo teria sido publicado. Nossa equipe procurou nas principais bases de pesquisas científicas e não encontrou nenhum trabalho com essa conclusão. A pesquisadora Marina Teles, especialista em desenvolvimento infantil, explica que o uso excessivo de telas <b>pode</b> prejudicar o sono e a concentração, o que <b>talvez</b> afete o desempenho escolar. “Mas não existe nenhuma pesquisa que mostre perda de 10 pontos de inteligência por ano. Esse número foi inventado”, afirma.<br><i>(Postagem, agência e pesquisadora fictícias, criadas para este simulado.)</i>`,
 q:`Comparando a postagem e a checagem, é correto afirmar que a checagem:`,
 o:[
  [`confirma a postagem em parte, porque admite que o celular reduz a inteligência, embora menos de 10 pontos por ano.`, `A checagem não fala em redução de inteligência; a pesquisadora afirma que esse número “foi inventado”.`],
  [`afirma que a universidade citada na postagem não existe.`, `A postagem nem chega a dizer o nome da universidade; a checagem critica justamente essa falta de informação.`],
  [`considera o uso do celular inofensivo, desde que não passe de 3 horas por dia.`, `A checagem não estabelece limite de horas nem diz que o celular é inofensivo; você trouxe o número da postagem para a checagem.`],
  [`classifica a postagem como falsa porque a grande imprensa não publicou o estudo.`, `O motivo é outro: nenhuma pesquisa com essa conclusão foi encontrada nas bases científicas. O silêncio da imprensa é argumento da própria postagem.`],
  [`reconhece que o excesso de telas pode trazer prejuízos, mas desmente o dado sobre a perda de inteligência, que não tem base em pesquisa.`, ``]
 ], a:4,
 e:`A checagem é equilibrada: <b>não</b> diz que telas são inofensivas (admite possíveis efeitos no sono e na concentração), mas mostra que o dado central da postagem (10 pontos de inteligência por ano) não aparece em nenhum estudo. Uma fake news muitas vezes mistura um assunto real com um dado inventado.`},

/* 7 · p-modal */
{t:'p-modal', d:2,
 tt:`Texto 2`,
 tx:`<b>Postagem compartilhada numa rede social</b><br><i>@alerta.saude.verdade · 1,2 mil compartilhamentos</i><br>ATENÇÃO, PAIS!!! Cientistas COMPROVARAM: quem passa mais de 3 horas por dia no celular PERDE 10 PONTOS DE INTELIGÊNCIA POR ANO!!! O estudo foi feito numa universidade famosa dos Estados Unidos, mas a grande imprensa está escondendo. COMPARTILHE ANTES QUE APAGUEM!!!<br><br><b>Checagem publicada pela agência Fato em Foco</b><br>Classificação: <b>FALSO</b>. A postagem não informa o nome da universidade, dos pesquisadores nem da revista em que o suposto estudo teria sido publicado. Nossa equipe procurou nas principais bases de pesquisas científicas e não encontrou nenhum trabalho com essa conclusão. A pesquisadora Marina Teles, especialista em desenvolvimento infantil, explica que o uso excessivo de telas <b>pode</b> prejudicar o sono e a concentração, o que <b>talvez</b> afete o desempenho escolar. “Mas não existe nenhuma pesquisa que mostre perda de 10 pontos de inteligência por ano. Esse número foi inventado”, afirma.<br><i>(Postagem, agência e pesquisadora fictícias, criadas para este simulado.)</i>`,
 q:`Na checagem, as palavras destacadas “<b>pode</b>” e “<b>talvez</b>”, em contraste com “COMPROVARAM”, da postagem, mostram que:`,
 o:[
  [`a pesquisadora apresenta os efeitos das telas como possibilidades, com cautela, enquanto a postagem apresenta sua afirmação como certeza absoluta.`, ``],
  [`a pesquisadora tem certeza de que o celular prejudica o sono de todas as crianças.`, `“Pode” e “talvez” indicam possibilidade, não certeza; e o texto não fala em “todas as crianças”.`],
  [`a pesquisadora concorda com a postagem, mas usa uma linguagem mais educada.`, `Ela discorda do dado principal (“Esse número foi inventado”); a diferença não é só de educação, é de grau de certeza.`],
  [`as duas falas expressam o mesmo grau de certeza, só que com palavras diferentes.`, `“Comprovaram” expressa certeza total; “pode” e “talvez” relativizam a afirmação.`],
  [`“pode” indica permissão: a pesquisadora autoriza o uso do celular por até 3 horas.`, `“Poder” tem vários sentidos, mas aqui é possibilidade (“é possível que prejudique”), não permissão.`]
 ], a:0,
 e:`São <b>modalizadores</b>: palavras que mostram o grau de certeza de quem fala. Quem conhece a ciência costuma ser cauteloso (pode, talvez, é possível); a postagem falsa usa a certeza absoluta (COMPROVARAM) para convencer.`},

/* 8 · p-inter */
{t:'p-inter', d:1,
 tt:`Texto 3`,
 tx:`<b>Texto A</b><br>“Oh! que saudades que tenho<br>Da aurora da minha vida,<br>Da minha infância querida<br>Que os anos não trazem mais!”<br>(Casimiro de Abreu, “Meus oito anos”, em <i>As primaveras</i>, 1859)<br><br><b>Texto B</b> (publicado no mural da escola)<br><b>Meus oito por cento</b><br>Oh! que saudades que tenho<br>Da carga da bateria,<br>Dos cem por cento do dia<br>Que o cabo quebrado não traz mais!`,
 q:`A relação do Texto B com o Texto A é de:`,
 o:[
  [`paráfrase, porque o Texto B diz a mesma coisa que o Texto A com outras palavras.`, `O sentido mudou completamente: a saudade da infância virou saudade da bateria cheia. Paráfrase mantém o sentido.`],
  [`citação, porque o Texto B reproduz o poema entre aspas e indica o autor.`, `Só o primeiro verso é igual; os outros foram alterados, e o Texto B não cita o autor.`],
  [`paródia, porque imita a estrutura (e até o título) do poema, mudando o sentido para fazer humor com a bateria do celular.`, ``],
  [`epígrafe, porque o Texto B aparece no início de um livro de Casimiro de Abreu.`, `Epígrafe é um trecho de outro autor colocado no início de uma obra; não é o caso.`],
  [`cópia sem modificações, porque o Texto B repete todos os versos do Texto A.`, `Apenas o primeiro verso foi mantido; os demais foram trocados de propósito.`]
 ], a:2,
 e:`O Texto B conserva a forma do original (o primeiro verso, a rima no 2º e no 3º versos, o fim “não traz mais” e até o título “Meus oito...”), mas troca a saudade da infância pela saudade da bateria carregada. Imitar e mudar o sentido com humor é <b>paródia</b>.`},

/* 9 · p-fig */
{t:'p-fig', d:2,
 tt:`Texto 3`,
 tx:`<b>Texto A</b><br>“Oh! que saudades que tenho<br>Da aurora da minha vida,<br>Da minha infância querida<br>Que os anos não trazem mais!”<br>(Casimiro de Abreu, “Meus oito anos”, em <i>As primaveras</i>, 1859)<br><br><b>Texto B</b> (publicado no mural da escola)<br><b>Meus oito por cento</b><br>Oh! que saudades que tenho<br>Da carga da bateria,<br>Dos cem por cento do dia<br>Que o cabo quebrado não traz mais!`,
 q:`No Texto A, a expressão “aurora da minha vida” constitui uma:`,
 o:[
  [`hipérbole, porque exagera a saudade que o eu lírico sente.`, `Hipérbole é exagero intencional (“morri de rir”); “aurora” não exagera nada, ela substitui a palavra “infância”.`],
  [`comparação, porque aproxima a vida de um dia por meio de um conectivo.`, `Não há conectivo comparativo (como, tal qual, feito). Sem conectivo, a aproximação é metáfora.`],
  [`personificação, porque atribui características humanas à aurora.`, `A aurora não faz nada de humano no verso; ela apenas representa o começo da vida.`],
  [`metáfora, porque a aurora, o começo do dia, representa a infância, o começo da vida.`, ``],
  [`antítese, porque opõe a aurora aos anos que passam.`, `Antítese é a oposição de ideias contrárias (dia × noite) na mesma frase; “aurora” e “anos” não são opostos.`]
 ], a:3,
 e:`Aurora é o nascer do dia. O poeta aproxima o começo do dia do começo da vida, sem usar conectivo: “aurora da minha vida” = infância. Isso é <b>metáfora</b>. O verso seguinte confirma a leitura: “Da minha infância querida”.`},

/* 10 · p-lit */
{t:'p-lit', d:1,
 tt:`Texto 4`,
 tx:`<b>O vulcão</b><br>Faltavam dez minutos para a apresentação da feira de ciências quando Davi tropeçou no fio da extensão. O vulcão de gesso, que ele e Lia tinham levado três semanas para construir, rachou ao meio no chão do ginásio.<br>— Acabou — disse ele, sentando-se ao lado dos cacos. — A gente vai ter que desistir.<br>Lia olhou para a mesa vizinha. Ali estava a equipe de Otávio, a mesma que tinha rido do projeto deles na semana anterior. Otávio segurava um rolo de fita adesiva prateada e um tubo de cola.<br>Pedir ajuda logo para ele? Nem pensar. Mas o relógio do ginásio não esperava ninguém.<br>— Otávio, você me empresta a fita? — perguntou ela, sem conseguir olhar nos olhos dele.<br>Ele hesitou, olhou para os cacos e, em vez de responder, ajoelhou-se ao lado de Davi e começou a juntar as partes.<br>Quando a professora chegou à mesa, o vulcão tinha uma cicatriz prateada de um lado a outro. Lia, embora tremesse um pouco, explicou que, na natureza, as montanhas também se rompem e se refazem.<br>— Este foi o único vulcão da feira que passou por um terremoto de verdade — disse a professora, sorrindo.<br><i>(Conto escrito para este simulado.)</i>`,
 q:`O conflito que movimenta o conto é:`,
 o:[
  [`o tempo que Lia e Davi levaram para construir o vulcão.`, `As três semanas de construção fazem parte da situação inicial, antes de surgir o problema.`],
  [`a quebra do vulcão minutos antes da apresentação, que obriga Lia a decidir se pede ajuda à equipe rival.`, ``],
  [`o elogio da professora ao vulcão consertado.`, `Esse é o desfecho, o momento em que o problema já foi resolvido.`],
  [`o fato de a feira acontecer num ginásio cheio de fios.`, `O fio é só o que causa o tropeço; o texto não trata o ginásio como problema.`],
  [`a vontade de Otávio de vencer a feira de ciências.`, `O texto não diz que Otávio queria vencer; ele, aliás, ajuda a consertar o trabalho dos colegas.`]
 ], a:1,
 e:`O conflito é o problema que dispara a ação: o vulcão racha a dez minutos da apresentação. A tensão aumenta porque a única ajuda à mão é a da equipe que tinha rido do projeto. O clímax é o pedido de Lia; o desfecho, a fala da professora.`},

/* 11 · p-lit */
{t:'p-lit', d:3,
 tt:`Texto 4`,
 tx:`<b>O vulcão</b><br>Faltavam dez minutos para a apresentação da feira de ciências quando Davi tropeçou no fio da extensão. O vulcão de gesso, que ele e Lia tinham levado três semanas para construir, rachou ao meio no chão do ginásio.<br>— Acabou — disse ele, sentando-se ao lado dos cacos. — A gente vai ter que desistir.<br>Lia olhou para a mesa vizinha. Ali estava a equipe de Otávio, a mesma que tinha rido do projeto deles na semana anterior. Otávio segurava um rolo de fita adesiva prateada e um tubo de cola.<br>Pedir ajuda logo para ele? Nem pensar. Mas o relógio do ginásio não esperava ninguém.<br>— Otávio, você me empresta a fita? — perguntou ela, sem conseguir olhar nos olhos dele.<br>Ele hesitou, olhou para os cacos e, em vez de responder, ajoelhou-se ao lado de Davi e começou a juntar as partes.<br>Quando a professora chegou à mesa, o vulcão tinha uma cicatriz prateada de um lado a outro. Lia, embora tremesse um pouco, explicou que, na natureza, as montanhas também se rompem e se refazem.<br>— Este foi o único vulcão da feira que passou por um terremoto de verdade — disse a professora, sorrindo.<br><i>(Conto escrito para este simulado.)</i>`,
 q:`No trecho “Pedir ajuda logo para ele? Nem pensar.”, ocorre:`,
 o:[
  [`discurso direto, com a fala de Lia dirigida a Davi.`, `Não há travessão nem verbo que introduza fala; Lia não diz isso em voz alta a ninguém.`],
  [`discurso indireto, pois o narrador relata o que Lia disse usando a palavra “que”.`, `No discurso indireto, a fala vem introduzida por verbo de dizer + “que” (“Lia disse que...”), o que não acontece aqui.`],
  [`a voz de um narrador em 1ª pessoa, que participa da história.`, `O narrador é de 3ª pessoa (“Lia olhou”, “disse ele”); ele não é personagem.`],
  [`o pensamento de Davi, que não queria pedir ajuda a Otávio.`, `Quem olha para a mesa de Otávio e depois pede a fita é Lia; o pensamento é dela.`],
  [`discurso indireto livre: o pensamento de Lia aparece misturado à voz do narrador, sem travessão nem verbo de dizer.`, ``]
 ], a:4,
 e:`O narrador está contando a cena em 3ª pessoa e, de repente, “entra” a voz interior de Lia, com pergunta e exclamação típicas de quem pensa (“Nem pensar.”), sem aviso. Esse é o <b>discurso indireto livre</b>. Repare que logo depois ela faz o contrário do que pensou, o que mostra o tamanho do conflito.`},

/* 12 · p-conj */
{t:'p-conj', d:2,
 tt:`Texto 4`,
 tx:`<b>O vulcão</b><br>Faltavam dez minutos para a apresentação da feira de ciências quando Davi tropeçou no fio da extensão. O vulcão de gesso, que ele e Lia tinham levado três semanas para construir, rachou ao meio no chão do ginásio.<br>— Acabou — disse ele, sentando-se ao lado dos cacos. — A gente vai ter que desistir.<br>Lia olhou para a mesa vizinha. Ali estava a equipe de Otávio, a mesma que tinha rido do projeto deles na semana anterior. Otávio segurava um rolo de fita adesiva prateada e um tubo de cola.<br>Pedir ajuda logo para ele? Nem pensar. Mas o relógio do ginásio não esperava ninguém.<br>— Otávio, você me empresta a fita? — perguntou ela, sem conseguir olhar nos olhos dele.<br>Ele hesitou, olhou para os cacos e, em vez de responder, ajoelhou-se ao lado de Davi e começou a juntar as partes.<br>Quando a professora chegou à mesa, o vulcão tinha uma cicatriz prateada de um lado a outro. Lia, embora tremesse um pouco, explicou que, na natureza, as montanhas também se rompem e se refazem.<br>— Este foi o único vulcão da feira que passou por um terremoto de verdade — disse a professora, sorrindo.<br><i>(Conto escrito para este simulado.)</i>`,
 q:`No trecho “Lia, <b>embora</b> tremesse um pouco, explicou que, na natureza, as montanhas também se rompem e se refazem”, a conjunção destacada pode ser substituída, sem alteração de sentido, por:`,
 o:[
  [`visto que`, `“Visto que” indica causa: diria que ela explicou <b>porque</b> tremia, o que não faz sentido.`],
  [`contanto que`, `“Contanto que” indica condição, como se ela só explicasse se tremesse.`],
  [`ainda que`, ``],
  [`à medida que`, `“À medida que” indica proporção (quanto mais tremia, mais explicava), sentido que o texto não tem.`],
  [`a fim de que`, `“A fim de que” indica finalidade, como se ela explicasse para tremer.`]
 ], a:2,
 e:`“Embora” é <b>concessiva</b>: apresenta um obstáculo (o nervosismo) que não impediu a ação (explicar). “Ainda que” tem o mesmo valor e também pede o verbo no subjuntivo: “ainda que tremesse um pouco”.`},

/* 13 · p-adj */
{t:'p-adj', d:3,
 q:`Para o jornal da escola, cinco alunos escreveram frases sobre a feira de ciências. Assinale a frase em que o pronome relativo foi empregado de acordo com a norma-padrão.`,
 o:[
  [`“O projeto que eu mais gostei foi o do vulcão.”`, `Quem gosta, gosta <b>de</b> algo: o correto é “o projeto <b>de que</b> eu mais gostei”.`],
  [`“A professora que todos confiam é a de Ciências.”`, `Quem confia, confia <b>em</b> alguém: “a professora <b>em quem</b> todos confiam”.`],
  [`“O momento onde o vulcão rachou foi assustador.”`, `“Onde” só se usa para lugar físico. Para tempo: “o momento <b>em que</b> o vulcão rachou”.`],
  [`“O tema de que trata o melhor trabalho é a reciclagem de água.”`, ``],
  [`“O ginásio que a feira aconteceu estava lotado.”`, `Algo acontece <b>em</b> um lugar: “o ginásio <b>em que</b> (ou <b>onde</b>) a feira aconteceu”.`]
 ], a:3,
 e:`Truque: desfaça a oração adjetiva e veja a regência do verbo. “O melhor trabalho trata <b>do</b> tema” → tratar <b>de</b> → “o tema <b>de que</b> trata o melhor trabalho”. A preposição exigida pelo verbo vai para antes do pronome relativo.`},

/* 14 · p-vl */
{t:'p-vl', d:2,
 q:`Leia a frase publicada no grupo dos pais: “Mesmo depois do aviso da diretora, a turma continuou <b>agitada</b>.” Sobre o termo destacado e o verbo “continuou”, é correto afirmar que são, respectivamente:`,
 o:[
  [`predicativo do sujeito; verbo de ligação que indica mudança de estado.`, `A função está certa, mas “continuar” não indica mudança: a turma <b>já estava</b> agitada e permaneceu assim. Mudança de estado seria “ficou”, “tornou-se”.`],
  [`predicativo do sujeito; verbo de ligação que indica continuidade (permanência) de um estado.`, ``],
  [`objeto direto; verbo transitivo direto.`, `“Agitada” não é algo que a turma “continuou” como ação sobre um objeto; é uma característica da própria turma.`],
  [`adjunto adverbial de modo; verbo intransitivo.`, `“Agitada” concorda com “turma” (feminino singular), como um adjetivo; um advérbio não teria concordância.`],
  [`adjunto adnominal; verbo de ligação que indica aparência.`, `Adjunto adnominal fica colado ao nome (“a turma agitada”); aqui o adjetivo vem ligado pelo verbo. E aparência seria “parecer”.`]
 ], a:1,
 e:`“Continuar” liga o sujeito (“a turma”) a um estado dele (“agitada”), que é o <b>predicativo do sujeito</b>. Cada verbo de ligação traz uma nuance: ser (permanente), estar (passageiro), ficar/tornar-se (mudança), parecer (aparência), <b>continuar/permanecer</b> (continuidade).`},

/* 15 · p-form */
{t:'p-form', d:1,
 q:`Leia a legenda de uma foto de laboratório: “Depois de passarem anos sem água, os tardígrados foram <b>reidratados</b> e voltaram a se mexer.” O verbo “reidratar”, de onde vem a forma destacada, foi formado por:`,
 o:[
  [`derivação prefixal: o prefixo <i>re-</i> (de novo) foi acrescentado a “hidratar”.`, ``],
  [`derivação sufixal: o sufixo <i>-ado</i> foi acrescentado a “reidratar”.`, `O <i>-ado</i> de “reidratados” é só a terminação do particípio (flexão do verbo); a pergunta é sobre a formação do verbo “reidratar”.`],
  [`derivação parassintética, com prefixo e sufixo acrescentados ao mesmo tempo.`, `Existe “hidratar” sem o prefixo; logo, o prefixo foi acrescentado a uma palavra que já existia. Na parassíntese, sem um dos dois a palavra não existe (como “entardecer”).`],
  [`composição por justaposição, juntando duas palavras sem alteração.`, `<i>Re-</i> é prefixo, não palavra independente; composição junta dois radicais.`],
  [`derivação regressiva, pela redução de uma palavra maior.`, `Na regressiva a palavra encolhe (como “o combate”, de “combater”); aqui ela cresce com um prefixo.`]
 ], a:0,
 e:`Reidratar = <b>re-</b> (repetição) + hidratar → “hidratar de novo”. Repare na grafia: diante do prefixo, o <i>h</i> de “hidratar” cai e as palavras se juntam (reidratar, reaver, desumano).`}
];

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


;

(function(){
'use strict';
const $=id=>document.getElementById(id);
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function fmt(s){if(s==null)return '';s=String(s);
 s=s.replace(/√\{([^{}]+)\}/g,'<span class="sq">√<span>$1</span></span>');
 for(let k=0;k<3;k++)s=s.replace(/\[\[([^\[\]|]+)\|([^\[\]]+?)\]\]/g,'<span class="fr"><span>$1</span><span>$2</span></span>');
 return s;}
const LS={get(k){try{const v=localStorage.getItem(k);return v?JSON.parse(v):null}catch(e){return null}},set(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}}};
const P='gobj';
const slug=s=>s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');

/* ---------- dados ---------- */
const AREAS={mat:{n:'Matemática',mods:MODS_MAT,tops:TOP_MAT,ac:'var(--mat)',abg:'var(--mat-bg)'},por:{n:'Português',mods:MODS_POR,tops:TOP_POR,ac:'var(--por)',abg:'var(--por-bg)'}};
const TOPS=[...TOP_MAT,...TOP_POR];const T={};TOPS.forEach(t=>{t.area=t.id[0]==='m'?'mat':'por';T[t.id]=t});
const QS=[];TOPS.forEach(t=>(t.qz||[]).forEach((q,i)=>QS.push({id:t.id+':'+i,t:t.id,q})));
const QN=QS.length;
function hash(s){let h=2166136261;for(let i=0;i<s.length;i++){h^=s.charCodeAt(i);h=Math.imul(h,16777619)}return h>>>0}
function order(id,n){const a=[...Array(n).keys()];let h=hash(id);for(let i=n-1;i>0;i--){h=Math.imul(h^(h>>>15),2246822507)>>>0;const j=h%(i+1);[a[i],a[j]]=[a[j],a[i]]}return a}

/* ---------- jogador e pontos ---------- */
let USERS=LS.get(P+':users')||{},CUR=LS.get(P+':cur');if(CUR&&!USERS[CUR])CUR=null;
const blank=()=>({rev:{},tr:{},sol:{},tn:{},fc:{},sim:{},simrun:null});
let S=CUR?Object.assign(blank(),USERS[CUR].s):blank();
const sum=o=>Object.values(o).reduce((a,v)=>a+(+v||0),0);
const trOk=()=>QS.filter(x=>S.tr[x.id]===x.q[2]).length;
const CATS=[
 ['rev','Tópicos revisados',()=>TOPS.length*5,()=>Object.keys(S.rev).filter(k=>T[k]).length*5],
 ['tr','Testes rápidos',()=>QN*5,()=>trOk()*5]
];
const MAX=()=>CATS.reduce((a,c)=>a+c[2](),0);
const TOTAL=()=>CATS.reduce((a,c)=>a+c[3](),0);
const RANKS=[[0,'Candidato'],[10,'Inscrito'],[25,'Concorrente'],[40,'Classificado'],[55,'Aprovado'],[70,'Bolsista 50%'],[85,'Bolsista 80%'],[95,'Bolsa 100%']];
const patente=p=>{let r=RANKS[0][1];RANKS.forEach(([m,n])=>{if(p>=m)r=n});return r};
const pctOf=t=>Math.round(t/MAX()*100);
function toast(t){const el=$('toast');el.textContent=t;el.hidden=false;clearTimeout(toast.t);toast.t=setTimeout(()=>el.hidden=true,1700)}
function save(before){if(!CUR)return;USERS[CUR].s=S;LS.set(P+':users',USERS);const d=TOTAL()-before;if(d>0)toast('+'+d+' pontos');renderBar();queueSync()}
function need(){if(!CUR){openLogin();return false}return true}

/* ---------- ranking (Supabase fora do Claude; db do Claude dentro do artefato) ---------- */
const SB=window.claude?null:{url:'https://htooiquctobyweffsydx.supabase.co/rest/v1/rpc/',key:'sb_publishable_NsOxvadWUPRl4pGLfpIvEQ_vfaXA7QK',guia:'objetivo'};
async function rpc(fn,body){const r=await fetch(SB.url+fn,{method:'POST',headers:{apikey:SB.key,'Content-Type':'application/json'},body:JSON.stringify(body)});if(!r.ok)throw new Error(await r.text());const t=await r.text();return t?JSON.parse(t):null}
function secret(){const u=USERS[CUR];if(!u.secret){let v='';try{v=crypto.randomUUID()+'-'+crypto.randomUUID()}catch(e){v=Date.now().toString(36)+Math.random().toString(36).slice(2)+Math.random().toString(36).slice(2)}u.secret=v;LS.set(P+':users',USERS)}return u.secret}
let RANK=null,syncState='local',NAMETAKEN=false,writing=false,again=false,syncT=null,DB=null,UID=null,canWrite=false;
const docId=()=>((UID||'anon').replace(/[^A-Za-z0-9_\-~:@+]/g,'_').slice(0,120))+'__'+CUR;
async function fetchRank(){if(!SB)return;try{const d=await rpc('get_ranking',{p_guia:SB.guia,p_secret:CUR?secret():null});RANK=(d||[]).map(r=>({name:r.name,total:r.total,pct:r.pct,is_me:r.is_me}));syncState='online'}catch(e){if(!RANK)syncState='offline'}if(!$('placar').hidden)renderPlacar()}
function queueSync(){if(!CUR)return;if(!SB&&(!DB||!canWrite))return;clearTimeout(syncT);syncT=setTimeout(doSync,1200)}
async function doSync(){if(writing){again=true;return}writing=true;const cats={};CATS.forEach(c=>cats[c[0]]=c[3]());
 if(SB){try{await rpc('submit_score',{p_guia:SB.guia,p_secret:secret(),p_name:USERS[CUR].name,p_total:TOTAL(),p_cats:cats});NAMETAKEN=false;await fetchRank()}catch(e){if(/nome_em_uso/.test(String(e&&e.message))){NAMETAKEN=true;if(!$('placar').hidden)renderPlacar()}else syncState='offline'}}
 else{try{const t=TOTAL();await DB.doc('ranking/'+docId()).set({name:USERS[CUR].name,total:t,pct:pctOf(t),cats,updated:Date.now()});syncState='online'}catch(e){if(e&&(e.code==='invalid_argument'||e.code==='not_granted')){canWrite=false;syncState='readonly'}}}
 writing=false;if(again){again=false;doSync()}}
if(SB){fetchRank();setInterval(()=>{if(!document.hidden&&!$('placar').hidden)fetchRank()},20000)}
(async()=>{try{if(!window.claude||!claude.use)return;const [db,u]=await Promise.all([claude.use('db'),claude.use('user')]);if(!db)return;DB=db;
 if(u){try{UID=await u.id()}catch(e){}try{const c=await u.can('data.write');canWrite=c!==false}catch(e){canWrite=true}}else canWrite=true;
 syncState=canWrite?'online':'readonly';
 DB.collection('ranking').orderBy('total','desc').limit(300).onSnapshot(s=>{RANK=s.docs.map(d=>{const x=d.data();return{name:x.name,total:x.total,pct:x.pct,is_me:d.id===docId()}});if(!$('placar').hidden)renderPlacar()},()=>{});queueSync()}catch(e){}})();

/* ---------- barra do jogador e login ---------- */
function renderBar(){const b=$('player');const u=CUR&&USERS[CUR];
 if(!u){b.innerHTML='<span class="who pr">Entre com seu nome para ganhar pontos e aparecer no ranking.</span><button class="btn sm" id="pbIn">Entrar</button>';$('pbIn').onclick=openLogin;return}
 const t=TOTAL(),p=pctOf(t);b.innerHTML='<span class="who"><span class="pn">'+esc(u.name)+'</span><span class="pr">'+patente(p)+' · <b>'+t+'</b> pts · '+p+'%</span></span><button class="btn ghost sm" id="pbSw">Trocar</button>';$('pbSw').onclick=openLogin}
function openLogin(){const m=$('login');m.hidden=false;const L=$('loginList');L.innerHTML='';const ks=Object.keys(USERS);$('loginOld').hidden=!ks.length;
 ks.forEach(k=>{const b=document.createElement('button');b.type='button';b.className='btn ghost sm';b.textContent=USERS[k].name;b.onclick=()=>login(USERS[k].name);L.appendChild(b)});
 $('nameIn').value='';$('loginErr').textContent='';setTimeout(()=>$('nameIn').focus(),60)}
async function login(name){name=String(name).trim().replace(/\s+/g,' ').slice(0,40);const pw=name.split(' ');const E=$('loginErr');
 if(pw.length<2||pw[0].length<2||pw[pw.length-1].length<2){E.textContent='Digite seu nome e sobrenome.';return}
 const k=slug(name);
 if(SB){try{E.textContent='Conferindo se o nome está livre…';const free=await rpc('name_available',{p_guia:SB.guia,p_name:name,p_secret:USERS[k]&&USERS[k].secret||null});if(free===false){E.textContent='Esse nome já está no ranking. Se for outro aluno, acrescente o segundo sobrenome.';return}}catch(e){}E.textContent=''}
 if(!USERS[k])USERS[k]={name,s:blank()};CUR=k;LS.set(P+':cur',k);LS.set(P+':users',USERS);S=Object.assign(blank(),USERS[k].s);
 $('login').hidden=true;renderBar();route();queueSync();if(SB)fetchRank();toast('Bem-vindo(a), '+name.split(' ')[0]+'!')}
$('loginForm').addEventListener('submit',e=>{e.preventDefault();login($('nameIn').value)});
$('loginClose').onclick=()=>{$('login').hidden=true};
document.addEventListener('keydown',e=>{if(e.key==='Escape')$('login').hidden=true});

/* ---------- ícones e figuras ---------- */
const IC={num:'<path d="M5 9h14M5 15h14M10 4 8 20M16 4l-2 16"/>',alg:'<path d="M4 7h6M7 4v6M14 7h6M4 17l5-5M4 12l5 5M14 15h6M14 19h6"/>',geo:'<path d="M12 3 3 20h18z"/><path d="M12 3v17"/>',med:'<path d="M3 17 17 3l4 4L7 21z"/><path d="M7 13l2 2M10 10l2 2M13 7l2 2"/>',est:'<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
 ler:'<path d="M2 5c3-1.5 7-1.5 10 1 3-2.5 7-2.5 10-1v14c-3-1.5-7-1.5-10 1-3-2.5-7-2.5-10-1z"/><path d="M12 6v14"/>',sen:'<path d="M4 12c3-6 13-6 16 0-3 6-13 6-16 0z"/><circle cx="12" cy="12" r="2.5"/>',gra:'<path d="M4 6h16M4 12h10M4 18h7"/><path d="m15 16 2 2 4-4"/>'};
const FIG={
paralelas:'<svg viewBox="0 0 320 200" role="img" aria-label="Duas paralelas r e s cortadas por uma transversal t, com oito ângulos"><g fill="none" stroke="currentColor" stroke-width="2"><path d="M20 60H300M20 140H300"/><path d="M90 190 230 10" stroke-dasharray="0"/></g>'+
 '<g stroke="none"><path d="M191 60 L209 60 A18 18 0 0 0 202.1 45.8Z" fill="var(--mat)" opacity=".85"/><path d="M191 60 L173 60 A18 18 0 0 0 179.9 74.2Z" fill="var(--mat)" opacity=".85"/><path d="M191 60 L173 60 A18 18 0 0 1 202.1 45.8Z" fill="var(--por)" opacity=".45"/><path d="M191 60 L209 60 A18 18 0 0 1 179.9 74.2Z" fill="var(--por)" opacity=".45"/>'+
 '<path d="M129 140 L147 140 A18 18 0 0 0 140.1 125.8Z" fill="var(--mat)" opacity=".85"/><path d="M129 140 L111 140 A18 18 0 0 0 117.9 154.2Z" fill="var(--mat)" opacity=".85"/><path d="M129 140 L111 140 A18 18 0 0 1 140.1 125.8Z" fill="var(--por)" opacity=".45"/><path d="M129 140 L147 140 A18 18 0 0 1 117.9 154.2Z" fill="var(--por)" opacity=".45"/></g>'+
 '<g font-family="Atkinson Hyperlegible,sans-serif" font-size="15" font-weight="700" fill="currentColor" text-anchor="middle"><text x="178" y="38">a</text><text x="220" y="52">b</text><text x="164" y="78">c</text><text x="206" y="92">d</text><text x="116" y="118">e</text><text x="158" y="132">f</text><text x="102" y="158">g</text><text x="144" y="172">h</text><text x="308" y="56">r</text><text x="308" y="136">s</text><text x="236" y="16">t</text></g></svg>',
sombra:'<svg viewBox="0 0 320 170" role="img" aria-label="Poste e pessoa com suas sombras formando triângulos semelhantes"><g fill="none" stroke="currentColor" stroke-width="2"><path d="M10 150H310"/><path d="M70 150V30" stroke-width="4"/><path d="M70 30 190 150" stroke-dasharray="5 4" stroke="var(--gold)"/><path d="M240 150V118" stroke-width="4"/><path d="M240 118 270 150" stroke-dasharray="5 4" stroke="var(--gold)"/></g><circle cx="240" cy="112" r="6" fill="currentColor"/><path d="M70 150h14v-14h-14" fill="none" stroke="currentColor"/><path d="M240 150h8v-8h-8" fill="none" stroke="currentColor"/>'+
 '<g font-family="Atkinson Hyperlegible,sans-serif" font-size="14" font-weight="700" fill="currentColor"><text x="40" y="95">h</text><text x="118" y="166">sombra 6 m</text><text x="200" y="138">1,6 m</text><text x="236" y="166">1,2 m</text></g><g fill="var(--gold)"><circle cx="300" cy="22" r="10"/></g></svg>',
pitagoras:'<svg viewBox="0 0 320 200" role="img" aria-label="Triângulo retângulo com hipotenusa a, catetos b e c, altura h e projeções m e n"><g fill="none" stroke="currentColor" stroke-width="2"><path d="M30 170 110 50 290 170Z"/><path d="M110 50V170" stroke-dasharray="5 4" stroke="var(--mat)"/><path d="M110 170h10v-10h-10" stroke="var(--mat)"/><path d="M103.3 60l9.4 6.3 6.3-9.4"/></g>'+
 '<g font-family="Atkinson Hyperlegible,sans-serif" font-size="15" font-weight="700" fill="currentColor" text-anchor="middle"><text x="60" y="104">c</text><text x="210" y="102">b</text><text x="160" y="192">a</text><text x="98" y="118" fill="var(--mat)">h</text><text x="70" y="160" fill="var(--por)">n</text><text x="200" y="160" fill="var(--por)">m</text><text x="110" y="40">A</text><text x="20" y="186">B</text><text x="300" y="186">C</text><text x="112" y="190" font-size="12">H</text></g></svg>',
inscrito:'<svg viewBox="0 0 320 200" role="img" aria-label="Circunferência com ângulo central AOB e ângulo inscrito ACB olhando o mesmo arco"><circle cx="160" cy="105" r="80" fill="none" stroke="currentColor" stroke-width="2"/><path d="M108.6 166.3A80 80 0 0 0 211.4 166.3" fill="none" stroke="var(--red)" stroke-width="6" stroke-linecap="round"/><g fill="none" stroke-width="2"><path d="M108.6 166.3 160 105 211.4 166.3" stroke="var(--mat)"/><path d="M108.6 166.3 160 25 211.4 166.3" stroke="var(--por)"/></g><circle cx="160" cy="105" r="3.5" fill="currentColor"/>'+
 '<g font-family="Atkinson Hyperlegible,sans-serif" font-size="14" font-weight="700" text-anchor="middle"><text x="160" y="18" fill="currentColor">C</text><text x="96" y="182" fill="currentColor">A</text><text x="224" y="182" fill="currentColor">B</text><text x="174" y="104" fill="currentColor">O</text><text x="160" y="140" fill="var(--mat)">central = 2α</text><text x="160" y="60" fill="var(--por)">inscrito = α</text><text x="270" y="190" fill="var(--red)">arco AB</text></g></svg>',
cartesiano:'<svg viewBox="0 0 220 200" role="img" aria-label="Plano cartesiano com A(1,2), B(7,10), ponto médio M(4,6) e o triângulo retângulo de catetos 6 e 8"><g stroke="var(--line)" stroke-width="1">'+Array.from({length:9},(_,i)=>'<path d="M'+(20+i*15)+' 15V180"/>').join('')+Array.from({length:12},(_,i)=>'<path d="M20 '+(180-i*15)+'H150"/>').join('')+'</g><g stroke="currentColor" stroke-width="2" fill="none"><path d="M20 190V8M10 180H160"/></g><g stroke-width="2.5" fill="none"><path d="M35 150 125 30" stroke="var(--red)"/><path d="M35 150H125V30" stroke="var(--mat)" stroke-dasharray="5 4"/></g><g fill="currentColor"><circle cx="35" cy="150" r="4"/><circle cx="125" cy="30" r="4"/><circle cx="80" cy="90" r="4" fill="var(--red)"/></g>'+
 '<g font-family="Atkinson Hyperlegible,sans-serif" font-size="12" font-weight="700" fill="currentColor"><text x="28" y="166">A(1,2)</text><text x="98" y="22">B(7,10)</text><text x="86" y="88" fill="var(--red)">M(4,6)</text><text x="66" y="164" fill="var(--mat)">Δx = 6</text><text x="130" y="96" fill="var(--mat)">Δy = 8</text><text x="52" y="110" fill="var(--red)">d = 10</text></g></svg>',
areas:'<svg viewBox="0 0 340 110" role="img" aria-label="Triângulo, trapézio, losango e círculo com suas medidas"><g fill="none" stroke="currentColor" stroke-width="2"><path d="M10 90 80 90 50 25Z"/><path d="M50 25V90" stroke-dasharray="4 3" stroke="var(--mat)"/><path d="M100 90H180L160 30H120Z"/><path d="M140 30V90" stroke-dasharray="4 3" stroke="var(--mat)"/><path d="M240 18 270 58 240 98 210 58Z"/><path d="M240 18V98M210 58H270" stroke-dasharray="4 3" stroke="var(--mat)"/><circle cx="305" cy="58" r="28"/><path d="M305 58H333" stroke="var(--mat)"/></g>'+
 '<g font-family="Atkinson Hyperlegible,sans-serif" font-size="12" font-weight="700" fill="currentColor" text-anchor="middle"><text x="45" y="106">b</text><text x="58" y="66" fill="var(--mat)">h</text><text x="140" y="106">B</text><text x="140" y="24">b</text><text x="148" y="66" fill="var(--mat)">h</text><text x="250" y="42" fill="var(--mat)">D</text><text x="226" y="54" fill="var(--mat)">d</text><text x="318" y="52" fill="var(--mat)">r</text></g></svg>'
};
const FIGCAP={paralelas:'Mesma cor = mesmo ângulo. Azul + rosa = 180°. Correspondentes: b e f · alternos internos: c e f · colaterais internos: c e e (somam 180°).',sombra:'Raios de sol paralelos → triângulos semelhantes: [[h|6]] = [[1,6|1,2]].',pitagoras:'a² = b² + c² · h² = m·n · b² = a·m · c² = a·n · a·h = b·c',inscrito:'O ângulo inscrito (vértice na circunferência) vale metade do central que olha o mesmo arco.',cartesiano:'Os deslocamentos Δx e Δy são os catetos; a distância é a hipotenusa.',areas:'Triângulo [[b·h|2]] · trapézio [[(B + b)·h|2]] · losango [[D·d|2]] · círculo πr²'};

/* ---------- contagem regressiva ---------- */
function renderCount(){const el=$('count');const now=new Date(),d0=new Date(now.getFullYear(),now.getMonth(),now.getDate()),prova=new Date(2026,9,17);const d=Math.round((prova-d0)/864e5);
 if(d<0){el.hidden=true;return}el.hidden=false;el.innerHTML=d===0?'<b>É HOJE!</b> Respira, lê com calma e boa prova! 🍀':'<b>'+d+'</b><span>'+(d===1?'dia':'dias')+' para a prova<br><small>sábado, 17 de outubro</small></span>'}

/* ---------- navegação (hash) ---------- */
let AREA=LS.get(P+':area')||'mat';
function go(h){if(location.hash!=='#'+h)location.hash=h;else route()}
function setTab(k){document.querySelectorAll('.tab').forEach(b=>b.setAttribute('aria-selected',String(b.dataset.tab===k)));document.querySelectorAll('section.panel').forEach(s=>s.hidden=s.id!==k)}
document.querySelectorAll('.tab').forEach(b=>b.addEventListener('click',()=>go(b.dataset.tab)));
function route(){const h=(location.hash||'#rev').slice(1);const [tab,arg]=h.split('/');
 const k=['rev','treino','cards','simu','placar'].includes(tab)?tab:'rev';setTab(k);document.body.classList.remove('focus');
 if(k==='rev'){if(arg==='folha')renderFolha();else if(arg&&T[arg])renderTopic(arg);else renderList()}
 else if(k==='placar')renderPlacar();else if(k==='treino')renderTreino();else if(k==='cards')renderCards();else if(k==='simu')renderSimu();else renderSoon(k);
 try{window.scrollTo(0,0)}catch(e){}}
addEventListener('hashchange',route);

/* ---------- lista de tópicos ---------- */
function stat(t){const r=!!S.rev[t.id];const n=(t.qz||[]).length;let ok=0,ans=0;(t.qz||[]).forEach((q,i)=>{const v=S.tr[t.id+':'+i];if(v!=null){ans++;if(v===q[2])ok++}});return{r,n,ok,ans}}
function renderList(){const A=AREAS[AREA];const el=$('rev');
 const tops=A.tops,done=tops.filter(t=>S.rev[t.id]).length,qn=tops.reduce((a,t)=>a+t.qz.length,0),qok=tops.reduce((a,t)=>a+stat(t).ok,0);
 let h='<details class="card strat"'+(LS.get(P+':stratSeen')?'':' open')+'><summary>🎯 '+ESTRATEGIA.t+'</summary><div class="in body">'+ESTRATEGIA.body+'</div></details>';
 h+='<div class="seg" role="group" aria-label="Matéria">'+Object.keys(AREAS).map(a=>'<button type="button" data-a="'+a+'" aria-pressed="'+(a===AREA)+'">'+AREAS[a].n+' <small>'+AREAS[a].tops.length+' tópicos</small></button>').join('')+'</div>';
 h+='<div class="sum"><div><span>Revisados</span><b>'+done+'/'+tops.length+'</b></div><div><span>Testes certos</span><b>'+qok+'/'+qn+'</b></div><div><span>Pontos aqui</span><b>'+(done*5+qok*5)+'</b></div></div>';
 h+='<p class="leg">Prioridade: <b>★★★</b> quase certo de cair · <b>★★</b> provável · <b>★</b> revisão rápida</p>';
 A.mods.forEach(m=>{const ts=tops.filter(t=>t.mod===m.id),d=ts.filter(t=>S.rev[t.id]).length;
  h+='<section class="mod" style="--ac:'+A.ac+';--abg:'+A.abg+'"><div class="mh"><span class="ic"><svg viewBox="0 0 24 24">'+IC[m.ic]+'</svg></span><div><h3>'+m.n+'</h3><small>'+d+' de '+ts.length+' revisados</small></div><span class="mb"><i style="width:'+Math.round(d/ts.length*100)+'%"></i></span></div><div class="tlist">';
  ts.forEach(t=>{const s=stat(t);
   h+='<button type="button" class="trow" data-t="'+t.id+'"><span class="st" aria-label="prioridade '+t.star+'">'+'★'.repeat(t.star)+'<span style="opacity:.25">'+'★'.repeat(3-t.star)+'</span></span><span><span class="tt">'+t.t+'</span><span class="tg">'+(t.saeb?'SAEB '+t.saeb.join(' · '):t.bncc)+'</span></span><span class="ck">'+(s.ans?'<span class="pill'+(s.ok===s.n?' ok':' part')+'">'+s.ok+'/'+s.n+'</span>':'')+(s.r?'<span class="pill ok">✓</span>':'')+'</span></button>'});
  h+='</div></section>'});
 h+='<button type="button" class="btn ghost folhaBtn" id="fBtn">📄 Folha de revisão: todas as regras de '+A.n+'</button>';
 el.innerHTML=h;
 el.querySelector('details.strat').addEventListener('toggle',e=>{if(!e.target.open)LS.set(P+':stratSeen',1)});
 el.querySelectorAll('.seg button').forEach(b=>b.onclick=()=>{AREA=b.dataset.a;LS.set(P+':area',AREA);renderList()});
 el.querySelectorAll('.trow').forEach(b=>b.onclick=()=>go('rev/'+b.dataset.t));
 $('fBtn').onclick=()=>go('rev/folha');}

/* ---------- página do tópico ---------- */
function renderTopic(id){const t=T[id];AREA=t.area;LS.set(P+':area',AREA);const A=AREAS[t.area];const el=$('rev');const mod=A.mods.find(m=>m.id===t.mod);
 const list=A.tops,ix=list.indexOf(t),prev=list[ix-1],next=list[ix+1];
 let h='<article style="--ac:'+A.ac+';--abg:'+A.abg+'">';
 h+='<div class="crumb"><button type="button" id="bk">← '+A.n+' · '+mod.n+'</button></div>';
 h+='<h2 class="th">'+t.t+'</h2><div class="tags"><span class="tag star">'+'★'.repeat(t.star)+'</span><span class="tag">BNCC '+t.bncc.replace(' · SAEB','')+'</span>'+(t.saeb?t.saeb.map(d=>'<span class="tag" title="'+esc(SAEB[d])+'">SAEB '+d+'</span>').join(''):'')+'</div>';
 h+='<p class="hook">'+fmt(t.hook)+'</p>';
 if(t.saeb)h+='<details class="tip"><summary style="cursor:pointer;font-weight:700">O que o SAEB cobra aqui</summary><ul style="margin:8px 0 0;padding-left:20px">'+t.saeb.map(d=>'<li><b>'+d+'</b>: '+SAEB[d]+'</li>').join('')+'</ul></details>';
 h+='<div class="sec">Entenda</div><div class="body">'+fmt(t.body).replace(/<table class="tb">/g,'<div class="tbw"><table class="tb">').replace(/<\/table>/g,'</table></div>')+'</div>';
 if(t.fig&&FIG[t.fig])h+='<figure>'+FIG[t.fig]+'<figcaption>'+fmt(FIGCAP[t.fig])+'</figcaption></figure>';
 h+='<div class="rule"><span class="lb">Regra de ouro</span>'+fmt(t.rule)+'</div>';
 if(MACETES[t.id])h+='<div class="mac"><b class="h">Macete</b>'+fmt(MACETES[t.id])+'</div>';
 if(t.ex&&t.ex.length){h+='<div class="sec">Exemplos resolvidos</div><p style="margin:-2px 0 10px;font-size:14px;color:var(--muted)">Tente resolver antes de abrir a resolução.</p>';
  t.ex.forEach((e,i)=>{const k=t.id+':'+i,open=!!S.sol[k];h+='<div class="ex"><div class="q" data-n="'+(i+1)+'">'+fmt(e.q)+'</div><div class="sol" '+(open?'':'hidden')+'><ol>'+e.s.map(x=>'<li>'+fmt(x)+'</li>').join('')+'</ol><span class="ans">Resposta: '+fmt(e.r)+'</span></div>'+(open?'':'<button type="button" class="btn ghost sm show" data-k="'+k+'">Tentei! Mostrar resolução</button>')+'</div>'})}
 h+='<div class="trap"><b class="h">Pegadinha!</b>'+fmt(t.trap)+'</div>';
 if(t.tip)h+='<div class="tip"><b class="h">Dica de prova</b>'+fmt(t.tip)+'</div>';
 h+='<div class="sec">Teste rápido · +5 por acerto</div>';
 if(t.txt)h+='<div class="txt">'+fmt(t.txt)+'</div>';
 t.qz.forEach((q,i)=>{const qid=t.id+':'+i;const ord=order(qid,q[1].length);const v=S.tr[qid];const ans=v!=null;
  h+='<div class="qq" data-q="'+qid+'"><div class="qt"><span class="n">'+(i+1)+'.</span>'+fmt(q[0])+'</div><div class="opts">';
  ord.forEach((oi,pos)=>{let c='';if(ans){if(oi===q[2])c=' right';else if(oi===v)c=' wrong'}
   h+='<button type="button" class="opt'+c+'" data-o="'+oi+'"'+(ans?' disabled':'')+'><span class="l">'+'ABCD'[pos]+'</span><span>'+fmt(q[1][oi])+'</span></button>'});
  h+='</div>'+(ans?'<div class="expl'+(v===q[2]?'':' bad')+'"><b>'+(v===q[2]?'Certo! ':'Resposta: '+'ABCD'[ord.indexOf(q[2])]+'. ')+'</b>'+fmt(q[3])+'</div>':'')+'</div>'});
 const rv=!!S.rev[t.id];
 h+='<div class="done">'+(rv?'<button type="button" class="btn ok" id="mk" disabled>✓ Tópico revisado</button>':'<button type="button" class="btn" id="mk">Revisei este tópico (+5)</button>')+'<small style="color:var(--muted)">Marque quando conseguir explicar a regra de ouro sem olhar.</small></div>';
 h+='<div class="nav">'+(prev?'<button type="button" class="btn ghost" data-go="'+prev.id+'">← Anterior<span>'+prev.t+'</span></button>':'<span></span>')+(next?'<button type="button" class="btn ghost" data-go="'+next.id+'">Próximo →<span>'+next.t+'</span></button>':'<button type="button" class="btn ghost" data-go="">Fim de '+A.n+' ✓<span>voltar à lista</span></button>')+'</div></article>';
 el.innerHTML=h;
 $('bk').onclick=()=>go('rev');
 el.querySelectorAll('.show').forEach(b=>b.onclick=()=>{S.sol[b.dataset.k]=1;if(CUR){USERS[CUR].s=S;LS.set(P+':users',USERS)}b.previousElementSibling.hidden=false;b.remove()});
 el.querySelectorAll('.qq').forEach(box=>{const qid=box.dataset.q,i=+qid.split(':')[1],q=t.qz[i];
  box.querySelectorAll('.opt').forEach(b=>b.onclick=()=>{if(!need())return;if(S.tr[qid]!=null)return;const before=TOTAL();S.tr[qid]=+b.dataset.o;save(before);
   const v=S.tr[qid],ord=order(qid,q[1].length);box.querySelectorAll('.opt').forEach(o=>{o.disabled=true;const oi=+o.dataset.o;if(oi===q[2])o.classList.add('right');else if(oi===v)o.classList.add('wrong')});
   const d=document.createElement('div');d.className='expl'+(v===q[2]?'':' bad');d.innerHTML='<b>'+(v===q[2]?'Certo! ':'Resposta: '+'ABCD'[ord.indexOf(q[2])]+'. ')+'</b>'+fmt(q[3]);box.appendChild(d);if(v!==q[2])toast('Quase! Leia a explicação.')})});
 const mk=$('mk');if(!rv)mk.onclick=()=>{if(!need())return;const before=TOTAL();S.rev[t.id]=1;save(before);mk.textContent='✓ Tópico revisado';mk.classList.add('ok');mk.disabled=true};
 el.querySelectorAll('[data-go]').forEach(b=>b.onclick=()=>go(b.dataset.go?'rev/'+b.dataset.go:'rev'));}

/* ---------- folha de revisão ---------- */
function renderFolha(){const A=AREAS[AREA];let h='<div class="crumb noprint"><button type="button" id="bk">← Voltar para a lista</button></div><h2 class="th">Folha de revisão · '+A.n+'</h2><p style="color:var(--muted);margin-top:0">Todas as regras de ouro numa página só. Leia na véspera ou imprima.</p>';
 h+='<div class="seg noprint" role="group">'+Object.keys(AREAS).map(a=>'<button type="button" data-a="'+a+'" aria-pressed="'+(a===AREA)+'">'+AREAS[a].n+'</button>').join('')+'</div><div class="folha">';
 A.mods.forEach(m=>{h+='<div class="sec" style="--ac:'+A.ac+'">'+m.n+'</div>';A.tops.filter(t=>t.mod===m.id).forEach(t=>{h+='<div class="fi" style="--ac:'+A.ac+'"><b>'+t.t+'</b><div>'+fmt(t.rule)+'</div></div>'})});
 h+='</div><p class="noprint" style="text-align:center"><button type="button" class="btn ghost" onclick="print()">🖨️ Imprimir</button></p>';
 $('rev').innerHTML=h;$('bk').onclick=()=>go('rev');$('rev').querySelectorAll('.seg button').forEach(b=>b.onclick=()=>{AREA=b.dataset.a;LS.set(P+':area',AREA);renderFolha()})}

/* ---------- em breve ---------- */
const SOON={treino:['Treino por tópico','Banco de questões no formato da prova, escolhendo matéria e tópico, com explicação de cada alternativa. Inclui questões no estilo OBMEP (Nível 2), Olimpíada de Língua Portuguesa e Vestibulinho Etec.'],
 cards:['Flashcards','Fórmulas, regras e definições para virar e testar a memória, com “Rever os que errei”.'],
 simu:['Simulado cronometrado','30 questões inéditas (15 + 15) em 3 horas, igual à prova real, com nota final, tempo por questão e diagnóstico dos tópicos para revisar.']};
function renderSoon(k){const s=SOON[k];$(k).innerHTML='<div class="card soonp"><h2>🔒 '+s[0]+'</h2><p>'+s[1]+'</p><p><b>Chega na próxima entrega.</b> Enquanto isso, termine a Revisão completa: tudo o que você revisar agora conta no seu placar.</p><button type="button" class="btn" id="toRev">Ir para a Revisão</button></div>';$('toRev').onclick=()=>go('rev')}

/* ---------- placar ---------- */
let confirmReset=false;
function renderPlacar(){const el=$('placar');const t=TOTAL(),p=pctOf(t);
 let h='<div class="card hero"><div><div class="big">'+t+'<small style="font-size:16px;color:var(--muted)"> / '+MAX()+' pts</small></div><div class="rk">'+patente(p)+'</div><small style="color:var(--muted)">'+p+'% da missão</small></div></div>';
 if(!CUR)h+='<p class="card" style="padding:14px">Entre com seu nome para salvar seus pontos. <button type="button" class="btn sm" id="plIn">Entrar</button></p>';
 h+='<div class="card bars"><h3>Pontos por atividade</h3>'+CATS.map(c=>{const m=c[2](),v=c[3]();return '<div class="r"><span>'+c[1]+'</span><b>'+v+' / '+m+'</b><span class="b"><i style="width:'+Math.round(v/m*100)+'%"></i></span></div>'}).join('')+'</div>';
 h+='<div class="card heat"><h3>Mapa dos tópicos</h3>';
 Object.keys(AREAS).forEach(a=>{const A=AREAS[a];h+='<p style="margin:6px 0;font-weight:700;color:'+A.ac+'">'+A.n+'</p><div class="cells">'+A.tops.map(x=>{const s=stat(x);const lv=s.r&&s.ok===s.n?2:(s.r||s.ans)?1:0;return '<button type="button" class="cell r'+lv+'" title="'+esc(x.t)+'" aria-label="'+esc(x.t)+'" data-t="'+x.id+'"></button>'}).join('')+'</div>'});
 h+='<div class="hleg"><span><i></i>não começado</span><span><i style="background:var(--hl)"></i>em andamento</span><span><i style="background:var(--ok)"></i>revisado e teste 100%</span></div></div>';
 h+='<div class="card rank"><h3>Ranking da turma</h3>';
 if(NAMETAKEN)h+='<p class="warn">Seu nome já está em uso no ranking por outro aparelho. Toque em “Trocar” e acrescente o segundo sobrenome.</p>';
 const list=(RANK||[]).filter(r=>r.total>0||r.is_me);
 if(RANK===null)h+='<p class="st">'+(syncState==='offline'?'Sem conexão com o ranking agora.':'Carregando…')+'</p>';
 else if(!list.length)h+='<p class="st">Ninguém pontuou ainda. Seja o primeiro! 🏁</p>';
 else h+='<ol>'+list.slice(0,15).map((r,i)=>'<li class="'+(r.is_me?'me':'')+'"><span class="p">'+(i+1)+'º</span><span class="n">'+esc(String(r.name).toLowerCase())+'</span><span>'+r.total+' pts</span></li>').join('')+'</ol>';
 h+='</div><div class="reset">'+(confirmReset?'<p>Apagar todo o seu progresso desta missão?</p><button type="button" class="btn ghost" id="rsNo">Cancelar</button> <button type="button" class="btn" id="rsYes" style="background:var(--red);border-color:var(--red)">Sim, zerar</button>':(CUR?'<button type="button" class="btn ghost sm" id="rsAsk">Zerar meu progresso</button>':''))+'</div>';
 el.innerHTML=h;
 if($('plIn'))$('plIn').onclick=openLogin;
 el.querySelectorAll('.cell').forEach(b=>b.onclick=()=>go('rev/'+b.dataset.t));
 if($('rsAsk'))$('rsAsk').onclick=()=>{confirmReset=true;renderPlacar()};
 if($('rsNo'))$('rsNo').onclick=()=>{confirmReset=false;renderPlacar()};
 if($('rsYes'))$('rsYes').onclick=async()=>{confirmReset=false;S=blank();USERS[CUR].s=S;LS.set(P+':users',USERS);if(SB){try{await rpc('delete_score',{p_guia:SB.guia,p_secret:secret()});await fetchRank()}catch(e){}}renderBar();renderPlacar();toast('Progresso zerado')};}

/* ---------- TREINO ESTILO PROVA ---------- */
const TQ=[];{const cnt={};[...TREINO_M1,...TREINO_M2,...TREINO_M3,...TREINO_M45,...TREINO_P1,...TREINO_P2,...TREINO_P3].forEach(x=>{if(!T[x.t])return;cnt[x.t]=(cnt[x.t]||0)+1;x.id='t:'+x.t+':'+cnt[x.t];x.area=T[x.t].area;TQ.push(x)})}
const TQI={};TQ.forEach(x=>TQI[x.id]=x);
function tnPts(){let p=0;for(const id in S.tn){const r=S.tn[id],x=TQI[id];if(!x)continue;if(r.f===x.a)p+=10;else if(r.l===x.a)p+=5}return p}
CATS.push(['tn','Treino estilo prova',()=>TQ.length*10,tnPts]);
function tst(x){const r=S.tn&&S.tn[x.id];if(!r)return 'new';if(r.l===x.a)return r.f===x.a?'ok':'fixed';return 'bad'}
const LETTERS='ABCDE';
let TR=Object.assign({area:'mix',foco:'all',n:10},LS.get(P+':tr')||{});
let SES=null;
function shuffle(a){a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}
function poolOf(area,foco){return TQ.filter(x=>(area==='mix'||x.area===area)&&(foco==='all'||(foco==='star3'&&T[x.t].star===3)||(foco==='new'&&tst(x)==='new')||(foco==='err'&&tst(x)==='bad')))}
function pick(pool,n){const g={new:[],bad:[],fixed:[],ok:[]};pool.forEach(x=>g[tst(x)].push(x));return [...shuffle(g.new),...shuffle(g.bad),...shuffle(g.fixed),...shuffle(g.ok)].slice(0,n)}
function buildSession(){const pool=poolOf(TR.area,TR.foco);let list;
 if(TR.area==='mix'){const m=pick(pool.filter(x=>x.area==='mat'),Math.ceil(TR.n/2)),p=pick(pool.filter(x=>x.area==='por'),TR.n);list=[];let i=0,j=0;while(list.length<TR.n&&(i<m.length||j<p.length)){if(i<m.length)list.push(m[i++]);if(list.length<TR.n&&j<p.length)list.push(p[j++])}}
 else list=pick(pool,TR.n);
 return list.map(x=>x.id)}
function startSession(ids,label){if(!ids.length){toast('Nenhuma questão nesse filtro');return}SES={list:ids,i:0,ans:{},label:label||'Treino'};renderTreino();try{window.scrollTo(0,0)}catch(e){}}
function renderTreino(){const f=!!(SES&&SES.i<SES.list.length);document.body.classList.toggle('focus',f);if(f)renderQ();else if(SES)renderEnd();else renderSetup()}

function renderSetup(){const el=$('treino');
 const tot=TQ.length,done=TQ.filter(x=>tst(x)!=='new').length,first=TQ.filter(x=>tst(x)==='ok').length,bad=TQ.filter(x=>tst(x)==='bad').length;
 const avail=poolOf(TR.area,TR.foco).length,nn=Math.min(TR.n,avail);
 let h='<div class="card tcard"><h2 class="th" style="margin:0 0 6px">Treino estilo prova</h2><p style="margin:0;color:var(--muted)">'+tot+' questões inéditas com <b>5 alternativas</b>, como na prova. Errou? Você vê <b>por que aquela alternativa está errada</b>, a resolução e um macete.</p></div>';
 h+='<div class="sum"><div><span>Respondidas</span><b>'+done+'/'+tot+'</b></div><div><span>Acertos de 1ª</span><b>'+first+'</b></div><div><span>Para refazer</span><b>'+bad+'</b></div></div>';
 h+='<div class="opt-g"><span class="lbl">Matéria</span><div class="chips" data-k="area">'+[['mix','Misturado'],['mat','Matemática'],['por','Português']].map(([v,l])=>'<button type="button" data-v="'+v+'" aria-pressed="'+(TR.area===v)+'">'+l+'</button>').join('')+'</div></div>';
 h+='<div class="opt-g"><span class="lbl">Foco</span><div class="chips" data-k="foco">'+[['all','Tudo'],['star3','Só ★★★'],['new','Ainda não fiz'],['err','Meus erros ('+bad+')']].map(([v,l])=>'<button type="button" data-v="'+v+'" aria-pressed="'+(TR.foco===v)+'">'+l+'</button>').join('')+'</div></div>';
 h+='<div class="opt-g"><span class="lbl">Quantas questões</span><div class="chips" data-k="n">'+[5,10,15,30].map(v=>'<button type="button" data-v="'+v+'" aria-pressed="'+(TR.n===v)+'">'+v+'</button>').join('')+'</div></div>';
 h+=avail?'<button type="button" class="btn big" id="tGo">Começar treino · '+nn+' questões</button>':'<p class="card" style="padding:14px;margin:0 0 16px">'+(TR.foco==='err'?'Nenhum erro para refazer. 👏':'Você já respondeu todas deste filtro. Escolha “Tudo” para treinar de novo.')+'</p>';
 h+='<div class="sec" style="--ac:var(--ink)">Treinar um tópico</div><p style="margin:-4px 0 12px;font-size:14px;color:var(--muted)">Todas as questões do tópico, da mais fácil para a mais difícil.</p>';
 Object.keys(AREAS).forEach(a=>{const A=AREAS[a];h+='<p style="margin:14px 0 6px;font:800 16px var(--head);color:'+A.ac+'">'+A.n+'</p><div class="tlist">';
  A.tops.forEach(t=>{const qs=TQ.filter(x=>x.t===t.id);if(!qs.length)return;const ok=qs.filter(x=>{const s=tst(x);return s==='ok'||s==='fixed'}).length,bd=qs.filter(x=>tst(x)==='bad').length;
   h+='<button type="button" class="trow" style="--ac:'+A.ac+'" data-tt="'+t.id+'"><span class="st">'+'★'.repeat(t.star)+'<span style="opacity:.25">'+'★'.repeat(3-t.star)+'</span></span><span><span class="tt">'+t.t+'</span><span class="tg">'+qs.length+' questões</span></span><span class="ck">'+(bd?'<span class="pill bad">'+bd+' ✗</span>':'')+'<span class="pill'+(ok===qs.length?' ok':ok?' part':'')+'">'+ok+'/'+qs.length+'</span></span></button>'});
  h+='</div>'});
 el.innerHTML=h;
 el.querySelectorAll('.chips').forEach(c=>c.querySelectorAll('button').forEach(b=>b.onclick=()=>{const k=c.dataset.k;TR[k]=k==='n'?+b.dataset.v:b.dataset.v;LS.set(P+':tr',TR);renderSetup()}));
 if($('tGo'))$('tGo').onclick=()=>{if(!need())return;startSession(buildSession(),'Treino')};
 el.querySelectorAll('[data-tt]').forEach(b=>b.onclick=()=>{if(!need())return;const t=b.dataset.tt;startSession(TQ.filter(x=>x.t===t).sort((p,q)=>p.d-q.d).map(x=>x.id),T[t].t)});}

function renderQ(){const el=$('treino');const id=SES.list[SES.i],x=TQI[id],t=T[x.t],A=AREAS[x.area];const ord=order(id,5);const v=SES.ans[id];const ans=v!=null;
 let h='<article style="--ac:'+A.ac+';--abg:'+A.abg+'"><div class="qhead"><button type="button" class="lnk" id="tQuit">✕ Sair</button><span class="qn">Questão '+(SES.i+1)+' de '+SES.list.length+'</span><span class="qok">'+Object.keys(SES.ans).filter(k=>SES.ans[k]===TQI[k].a).length+' ✓</span></div><div class="pbar"><i style="width:'+Math.round(SES.i/SES.list.length*100)+'%"></i></div>';
 h+='<div class="tags" style="margin-top:12px"><span class="tag">'+A.n+'</span><span class="tag">'+t.t+'</span><span class="tag dif" title="dificuldade">'+['','Fácil','Média','Difícil'][x.d]+' '+'●'.repeat(x.d)+'<span style="opacity:.3">'+'●'.repeat(3-x.d)+'</span></span></div>';
 if(x.tx)h+='<div class="txt">'+fmt(x.tx).replace(/<table class="tb">/g,'<div class="tbw"><table class="tb">').replace(/<\/table>/g,'</table></div>')+'</div>';
 h+='<div class="qq big"><div class="qt">'+fmt(x.q)+'</div><div class="opts">';
 ord.forEach((oi,pos)=>{let c='';if(ans){if(oi===x.a)c=' right';else if(oi===v)c=' wrong'}h+='<button type="button" class="opt'+c+'" data-o="'+oi+'"'+(ans?' disabled':'')+'><span class="l">'+LETTERS[pos]+'</span><span>'+fmt(x.o[oi][0])+'</span></button>'});
 h+='</div></div>';
 if(ans){const ok=v===x.a,L=i=>LETTERS[ord.indexOf(i)];const prev=S.tn[id];
  h+='<div class="verdict '+(ok?'good':'bad')+'">'+(ok?'✓ Acertou!':'✗ Não foi dessa vez. A correta é a <b>'+L(x.a)+'</b>.')+'</div>';
  if(!ok)h+='<div class="why"><b>Por que a '+L(v)+' está errada:</b> '+fmt(x.o[v][1])+'</div>';
  h+='<div class="res"><b class="h">Resolução</b>'+fmt(x.e)+'</div>';
  if(MACETES[x.t])h+='<div class="mac"><b class="h">Macete</b>'+fmt(MACETES[x.t])+'</div>';
  h+='<details class="tip"><summary style="cursor:pointer;font-weight:700">Comentário de todas as alternativas</summary><ul class="allo">'+ord.map((oi,pos)=>'<li class="'+(oi===x.a?'c':'')+'"><b>'+LETTERS[pos]+')</b> '+fmt(x.o[oi][0])+'<br><span>'+(oi===x.a?'✓ Correta.':fmt(x.o[oi][1]))+'</span></li>').join('')+'</ul></details>';
  h+='<div class="nav1"><button type="button" class="btn ghost" id="tTheory">📖 Rever a teoria</button><button type="button" class="btn" id="tNext">'+(SES.i+1<SES.list.length?'Próxima questão →':'Ver resultado')+'</button></div>'}
 h+='</article>';el.innerHTML=h;
 $('tQuit').onclick=()=>{if(Object.keys(SES.ans).length){SES.list=SES.list.slice(0,SES.i+(ans?1:0));SES.i=SES.list.length;renderTreino()}else{SES=null;renderTreino()}try{window.scrollTo(0,0)}catch(e){}};
 if(!ans)el.querySelectorAll('.opt').forEach(b=>b.onclick=()=>{if(!need())return;const c=+b.dataset.o;const before=TOTAL();SES.ans[id]=c;const r=S.tn[id];if(!r)S.tn[id]={f:c,l:c};else r.l=c;save(before);renderQ();const vd=el.querySelector('.verdict');if(vd)vd.scrollIntoView({behavior:'smooth',block:'nearest'});if(c!==x.a)toast('Leia por que errou 👇')});
 else{$('tNext').onclick=()=>{SES.i++;renderTreino();try{window.scrollTo(0,0)}catch(e){}};$('tTheory').onclick=()=>go('rev/'+x.t)}}

function renderEnd(){const el=$('treino');const ids=SES.list.filter(id=>SES.ans[id]!=null);const ok=ids.filter(id=>SES.ans[id]===TQI[id].a),wrong=ids.filter(id=>SES.ans[id]!==TQI[id].a);const pct=ids.length?Math.round(ok.length/ids.length*100):0;
 const msg=pct>=90?'Nível bolsa 100%! 🏆':pct>=70?'Muito bom! Falta pouco. 💪':pct>=50?'No caminho. Revise os erros e tente de novo.':'Calma: errar aqui é o que faz acertar no sábado. Revise a teoria e refaça.';
 const byT={};wrong.forEach(id=>{const t=TQI[id].t;byT[t]=(byT[t]||0)+1});const weak=Object.keys(byT).sort((a,b)=>byT[b]-byT[a]);
 let h='<div class="card score"><div class="big">'+ok.length+'<small>/'+ids.length+'</small></div><div><div class="rk">'+pct+'% de acertos</div><p style="margin:4px 0 0">'+msg+'</p></div></div>';
 if(weak.length)h+='<div class="card" style="padding:14px 16px;margin-bottom:14px"><b>Tópicos para revisar:</b><div class="tlist" style="margin-top:8px">'+weak.slice(0,4).map(t=>'<button type="button" class="trow" style="--ac:'+AREAS[T[t].area].ac+'" data-rv="'+t+'"><span class="st">'+byT[t]+' ✗</span><span><span class="tt">'+T[t].t+'</span><span class="tg">abrir a teoria</span></span><span class="ck">→</span></button>').join('')+'</div></div>';
 h+='<div class="card" style="padding:6px 14px;margin-bottom:14px"><ol class="rlist">'+ids.map((id,i)=>{const x=TQI[id],g=SES.ans[id]===x.a;return '<li class="'+(g?'g':'b')+'"><span>'+(g?'✓':'✗')+'</span><span>'+(i+1)+'. '+T[x.t].t+'</span></li>'}).join('')+'</ol></div>';
 h+='<div class="nav1">'+(wrong.length?'<button type="button" class="btn" id="tRedo">Refazer os '+wrong.length+' erros</button>':'')+'<button type="button" class="btn ghost" id="tNew">Novo treino</button></div>';
 el.innerHTML=h;
 el.querySelectorAll('[data-rv]').forEach(b=>b.onclick=()=>go('rev/'+b.dataset.rv));
 if($('tRedo'))$('tRedo').onclick=()=>startSession(shuffle(wrong),'Refazendo erros');
 $('tNew').onclick=()=>{SES=null;renderTreino();try{window.scrollTo(0,0)}catch(e){}};}

/* ---------- FLASHCARDS ---------- */
const FC=[];{const cnt={};[...CARDS_M1,...CARDS_M2,...CARDS_M3,...CARDS_M45,...CARDS_P1,...CARDS_P2,...CARDS_P3].forEach(c=>{if(!T[c.t])return;cnt[c.t]=(cnt[c.t]||0)+1;c.id='c:'+c.t+':'+cnt[c.t];c.area=T[c.t].area;FC.push(c)})}
const FCI={};FC.forEach(c=>FCI[c.id]=c);
const KIND={regra:['Regra','📐'],conceito:['Conceito','💡'],conta:['Conta relâmpago','⚡'],exemplo:['Exemplo','🔎'],pegadinha:['Pegadinha','⚠️']};
function fcPts(){let p=0;for(const id in S.fc){if(FCI[id]&&S.fc[id].n>0)p+=2}return p}
CATS.push(['fc','Flashcards',()=>FC.length*2,fcPts]);
function fst(c){const r=S.fc&&S.fc[c.id];if(!r)return 'new';return r.s?'ok':'bad'}
let FCO=Object.assign({area:'mix',foco:'all',n:20},LS.get(P+':fco')||{});
let FS=null;
function fcPool(area,foco){return FC.filter(c=>(area==='mix'||c.area===area)&&(foco==='all'||(foco==='star3'&&T[c.t].star===3)||(foco==='conta'&&c.k==='conta')||(foco==='pega'&&c.k==='pegadinha')||(foco==='new'&&fst(c)==='new')||(foco==='bad'&&fst(c)==='bad')))}
function fcPick(pool,n){const g={bad:[],new:[],ok:[]};pool.forEach(c=>g[fst(c)].push(c));return [...shuffle(g.bad),...shuffle(g.new),...shuffle(g.ok)].slice(0,n)}
function fcStart(ids){if(!ids.length){toast('Nenhum cartão nesse filtro');return}FS={q:ids.slice(),seen:{},ok:[],miss:{},flip:false,total:ids.length};renderCards();try{window.scrollTo(0,0)}catch(e){}}
function renderCards(){const f=!!(FS&&FS.q.length);document.body.classList.toggle('focus',f);if(f)renderCard();else if(FS)renderCardsEnd();else renderCardsSetup()}

function renderCardsSetup(){const el=$('cards');
 const tot=FC.length,ok=FC.filter(c=>fst(c)==='ok').length,bad=FC.filter(c=>fst(c)==='bad').length;
 const avail=fcPool(FCO.area,FCO.foco).length,nn=Math.min(FCO.n,avail);
 let h='<div class="card tcard"><h2 class="th" style="margin:0 0 6px">Flashcards</h2><p style="margin:0;color:var(--muted)">'+tot+' cartões para deixar tudo na ponta da língua. Leia a frente, <b>responda de cabeça</b>, vire e seja honesto: sabia ou não? Os que você errar <b>voltam</b> na mesma rodada até grudar.</p></div>';
 h+='<div class="sum"><div><span>Dominados</span><b>'+ok+'/'+tot+'</b></div><div><span>Para rever</span><b>'+bad+'</b></div><div><span>Nunca vistos</span><b>'+(tot-ok-bad)+'</b></div></div>';
 h+='<div class="opt-g"><span class="lbl">Matéria</span><div class="chips" data-k="area">'+[['mix','Misturado'],['mat','Matemática'],['por','Português']].map(([v,l])=>'<button type="button" data-v="'+v+'" aria-pressed="'+(FCO.area===v)+'">'+l+'</button>').join('')+'</div></div>';
 h+='<div class="opt-g"><span class="lbl">Foco</span><div class="chips" data-k="foco">'+[['all','Todos'],['star3','Só ★★★'],['conta','⚡ Conta relâmpago'],['pega','⚠️ Pegadinhas'],['new','Nunca vistos'],['bad','Não sabia ('+bad+')']].map(([v,l])=>'<button type="button" data-v="'+v+'" aria-pressed="'+(FCO.foco===v)+'">'+l+'</button>').join('')+'</div></div>';
 h+='<div class="opt-g"><span class="lbl">Quantos cartões</span><div class="chips" data-k="n">'+[10,20,40,80].map(v=>'<button type="button" data-v="'+v+'" aria-pressed="'+(FCO.n===v)+'">'+v+'</button>').join('')+'</div></div>';
 h+=avail?'<button type="button" class="btn big" id="fGo">Começar · '+nn+' cartões</button>':'<p class="card" style="padding:14px;margin:0 0 16px">'+(FCO.foco==='bad'?'Nenhum cartão para rever. 👏':'Nenhum cartão nesse filtro.')+'</p>';
 h+='<div class="sec" style="--ac:var(--ink)">Baralho por tópico</div>';
 Object.keys(AREAS).forEach(a=>{const A=AREAS[a];h+='<p style="margin:14px 0 6px;font:800 16px var(--head);color:'+A.ac+'">'+A.n+'</p><div class="tlist">';
  A.tops.forEach(t=>{const cs=FC.filter(c=>c.t===t.id);if(!cs.length)return;const o=cs.filter(c=>fst(c)==='ok').length,b=cs.filter(c=>fst(c)==='bad').length;
   h+='<button type="button" class="trow" style="--ac:'+A.ac+'" data-ft="'+t.id+'"><span class="st">'+'★'.repeat(t.star)+'<span style="opacity:.25">'+'★'.repeat(3-t.star)+'</span></span><span><span class="tt">'+t.t+'</span><span class="tg">'+cs.length+' cartões</span></span><span class="ck">'+(b?'<span class="pill bad">'+b+' ✗</span>':'')+'<span class="pill'+(o===cs.length?' ok':o?' part':'')+'">'+o+'/'+cs.length+'</span></span></button>'});
  h+='</div>'});
 el.innerHTML=h;
 el.querySelectorAll('.chips').forEach(c=>c.querySelectorAll('button').forEach(b=>b.onclick=()=>{const k=c.dataset.k;FCO[k]=k==='n'?+b.dataset.v:b.dataset.v;LS.set(P+':fco',FCO);renderCardsSetup()}));
 if($('fGo'))$('fGo').onclick=()=>{if(!need())return;let list;const pool=fcPool(FCO.area,FCO.foco);
  if(FCO.area==='mix'){const m=fcPick(pool.filter(c=>c.area==='mat'),Math.ceil(FCO.n/2)),p=fcPick(pool.filter(c=>c.area==='por'),FCO.n);list=[];let i=0,j=0;while(list.length<FCO.n&&(i<m.length||j<p.length)){if(i<m.length)list.push(m[i++]);if(list.length<FCO.n&&j<p.length)list.push(p[j++])}}
  else list=fcPick(pool,FCO.n);fcStart(list.map(c=>c.id))};
 el.querySelectorAll('[data-ft]').forEach(b=>b.onclick=()=>{if(!need())return;fcStart(shuffle(FC.filter(c=>c.t===b.dataset.ft)).map(c=>c.id))});}

function renderCard(){const el=$('cards');const id=FS.q[0],c=FCI[id],t=T[c.t],A=AREAS[c.area],K=KIND[c.k]||['Cartão','🃏'];
 const done=FS.ok.length,again=FS.miss[id]||0;
 let h='<div style="--ac:'+A.ac+';--abg:'+A.abg+'"><div class="qhead"><button type="button" class="lnk" id="fQuit">✕ Sair</button><span class="qn">'+done+' de '+FS.total+' dominados</span><span class="qok">'+FS.q.length+' na pilha</span></div><div class="pbar"><i style="width:'+Math.round(done/FS.total*100)+'%"></i></div>';
 h+='<div class="fc'+(FS.flip?' flip':'')+'" id="fcard" role="button" tabindex="0" aria-label="Virar cartão"><div class="fcin"><div class="face front"><div class="fk"><span>'+K[1]+' '+K[0]+'</span><span>'+A.n+' · '+t.t+'</span></div><div class="ft">'+fmt(c.f)+'</div>'+(again?'<div class="fa">voltou '+again+'× · você consegue!</div>':'')+'<div class="fh">Toque para virar</div></div><div class="face back"><div class="fk"><span>'+K[1]+' '+K[0]+'</span><span>'+t.t+'</span></div><div class="fq">'+fmt(c.f)+'</div><div class="fb">'+fmt(c.b)+'</div></div></div></div>';
 h+=FS.flip?'<div class="fbtns"><button type="button" class="btn no" id="fNo">✗ Não sabia</button><button type="button" class="btn yes" id="fYes">✓ Sabia</button></div><p class="fkeys">No computador: <b>1</b> não sabia · <b>2</b> sabia · <b>espaço</b> vira</p>':'<div class="fbtns one"><button type="button" class="btn" id="fFlip">Virar cartão</button></div><p class="fkeys">Responda de cabeça antes de virar 😉</p>';
 h+='</div>';el.innerHTML=h;
 const flip=()=>{if(FS.flip)return;FS.flip=true;renderCard()};
 $('fcard').onclick=flip;if($('fFlip'))$('fFlip').onclick=flip;
 if($('fYes'))$('fYes').onclick=()=>fcMark(true);if($('fNo'))$('fNo').onclick=()=>fcMark(false);
 $('fQuit').onclick=()=>{if(FS.ok.length||Object.keys(FS.miss).length){FS.q=[];renderCards()}else{FS=null;renderCards()}try{window.scrollTo(0,0)}catch(e){}};}
function fcMark(yes){if(!need())return;const id=FS.q.shift(),before=TOTAL();const r=S.fc[id]||(S.fc[id]={s:0,n:0});
 if(yes){r.s=1;r.n++;FS.ok.push(id)}else{r.s=0;FS.miss[id]=(FS.miss[id]||0)+1;const pos=Math.min(3,FS.q.length);FS.q.splice(pos,0,id)}
 FS.flip=false;save(before);renderCards();try{window.scrollTo(0,0)}catch(e){}}
document.addEventListener('keydown',e=>{if($('cards').hidden||!FS||!FS.q.length||!$('login').hidden)return;if(e.target&&/INPUT|TEXTAREA/.test(e.target.tagName))return;
 if(e.key===' '||e.key==='Enter'){e.preventDefault();if(!FS.flip){FS.flip=true;renderCard()}}else if(FS.flip&&e.key==='1')fcMark(false);else if(FS.flip&&e.key==='2')fcMark(true)});

function renderCardsEnd(){const el=$('cards');const missed=Object.keys(FS.miss);const first=FS.ok.filter(id=>!FS.miss[id]).length;
 let h='<div class="card score"><div class="big">'+first+'<small>/'+FS.ok.length+'</small></div><div><div class="rk">de primeira!</div><p style="margin:4px 0 0">'+(FS.q.length?'Rodada interrompida. ':'Rodada completa. ')+(missed.length?missed.length+' cartão(ões) precisaram voltar: eles estão em “Não sabia” para você rever amanhã.':'Nenhum cartão precisou voltar. 🏆')+'</p></div></div>';
 if(missed.length)h+='<div class="card" style="padding:6px 14px;margin-bottom:14px"><p style="margin:10px 0 4px;font-weight:700">Os que deram trabalho:</p><ol class="rlist">'+missed.map(id=>{const c=FCI[id];return '<li class="b"><span>'+FS.miss[id]+'×</span><span>'+fmt(c.f)+'</span></li>'}).join('')+'</ol></div>';
 h+='<div class="nav1">'+(missed.length?'<button type="button" class="btn" id="fAgain">Rever só esses '+missed.length+'</button>':'')+'<button type="button" class="btn ghost" id="fNew">Nova rodada</button></div>';
 el.innerHTML=h;
 if($('fAgain'))$('fAgain').onclick=()=>fcStart(shuffle(missed));
 $('fNew').onclick=()=>{FS=null;renderCards();try{window.scrollTo(0,0)}catch(e){}};}

/* ---------- SIMULADOS CRONOMETRADOS ---------- */
const SIMS=[['A',SIM_A_POR,SIM_A_MAT],['B',SIM_B_POR,SIM_B_MAT],['C',SIM_C_POR,SIM_C_MAT]].map(([id,p,m])=>({id,n:'Simulado '+id,q:[...p,...m].map((x,i)=>Object.assign({},x,{area:i<15?'por':'mat'}))}));
const SIMI={};SIMS.forEach(s=>SIMI[s.id]=s);
const SIM_SECS=3*60*60;
function simPts(){let p=0;SIMS.forEach(s=>{const r=S.sim&&S.sim[s.id];if(r&&r.runs&&r.runs.length)p+=r.runs[0].sc*10});return p}
CATS.push(['sim','Simulados (1ª tentativa)',()=>SIMS.length*300,simPts]);
let SIMV=null; // {id, run} quando vendo resultado
let simConfirm=false,simTick=null;
const fmtT=s=>{s=Math.max(0,Math.round(s));const h=Math.floor(s/3600),m=Math.floor(s%3600/60),x=s%60;return (h?h+'h':'')+String(m).padStart(h?2:1,'0')+'min'+(h?'':' '+String(x).padStart(2,'0')+'s')};
const clockT=s=>{s=Math.max(0,Math.floor(s));const h=Math.floor(s/3600),m=Math.floor(s%3600/60),x=s%60;return h+':'+String(m).padStart(2,'0')+':'+String(x).padStart(2,'0')};
function simLeft(){const r=S.simrun;return r?SIM_SECS-(Date.now()-r.start)/1000:0}
function renderSimu(){const run=S.simrun;document.body.classList.toggle('focus',!!run||!!SIMV);if(run){if(simLeft()<=0){simSubmit(true);return}renderSimQ()}else if(SIMV)renderSimRes();else renderSimList()}
function ensureTick(){if(simTick)return;simTick=setInterval(()=>{if(!S.simrun){clearInterval(simTick);simTick=null;return}const left=simLeft();if(left<=0){simSubmit(true);return}const c=$('simClock');if(c){c.textContent=clockT(left);c.classList.toggle('warn',left<=1800);c.classList.toggle('crit',left<=600)}},1000)}
if(S.simrun)ensureTick();

function renderSimList(){const el=$('simu');
 let h='<div class="card tcard"><h2 class="th" style="margin:0 0 6px">Simulados cronometrados</h2><p style="margin:0 0 8px;color:var(--muted)">Igual ao sábado: <b>30 questões</b> (15 de Português + 15 de Matemática), <b>3 horas</b>, sem correção até entregar. No fim: nota, tempo e diagnóstico dos tópicos.</p>'+
 '<details class="tip" style="margin:6px 0 0"><summary style="cursor:pointer;font-weight:700">Como fazer como se fosse a prova de verdade</summary><ul style="margin:8px 0 0;padding-left:20px"><li>Separe <b>3 horas sem interrupção</b>, lápis, borracha e folha de rascunho.</li><li>Celular no silencioso, sem calculadora e sem consultar nada.</li><li>O relógio <b>não pausa</b>: se sair do app, ele continua correndo (como na prova).</li><li>Treine a estratégia: 1ª passada no que você sabe, marque as dúvidas ⚑ e volte depois.</li><li>Deixe 10 minutos no fim para revisar a folha de respostas.</li><li>Sugestão: <b>A</b> na terça ou quarta, <b>B</b> na quinta. O <b>C</b> é reserva para quem quiser mais um.</li></ul></details></div>';
 SIMS.forEach(s=>{const r=S.sim&&S.sim[s.id];const runs=(r&&r.runs)||[];const best=runs.reduce((a,x)=>Math.max(a,x.sc),-1);const first=runs[0];
  h+='<div class="card simcard"><div class="simh"><b>'+s.n+'</b>'+(first?'<span class="pill ok">feito</span>':'<span class="pill">não feito</span>')+'</div>';
  if(first)h+='<div class="simst"><div><span>1ª tentativa</span><b>'+first.sc+'/30</b><small>nota '+(first.sc/3).toFixed(1).replace('.',',')+'</small></div><div><span>Português</span><b>'+first.por+'/15</b></div><div><span>Matemática</span><b>'+first.mat+'/15</b></div><div><span>Tempo</span><b>'+fmtT(first.t)+'</b></div></div>'+(runs.length>1?'<p class="simmini">Melhor: '+best+'/30 em '+runs.length+' tentativas</p>':'');
  h+='<div class="simb">'+(first?'<button type="button" class="btn ghost" data-sv="'+s.id+'">Ver correção</button><button type="button" class="btn" data-ss="'+s.id+'">Refazer</button>':'<button type="button" class="btn big" style="margin:0" data-ss="'+s.id+'">Começar o '+s.n+' · 3h</button>')+'</div></div>'});
 el.innerHTML=h;
 el.querySelectorAll('[data-ss]').forEach(b=>b.onclick=()=>{if(!need())return;simConfirm=b.dataset.ss;renderSimStart()});
 el.querySelectorAll('[data-sv]').forEach(b=>b.onclick=()=>{const r=S.sim[b.dataset.sv];SIMV={id:b.dataset.sv,run:r.runs[r.runs.length-1],ri:r.runs.length-1};renderSimu();try{window.scrollTo(0,0)}catch(e){}});}
function renderSimStart(){const el=$('simu');const s=SIMI[simConfirm];const again=S.sim&&S.sim[s.id]&&S.sim[s.id].runs.length;
 el.innerHTML='<div class="card tcard" style="text-align:center"><h2 class="th" style="margin:0 0 6px">'+s.n+'</h2><p style="font-size:44px;margin:4px 0;font-weight:800;font-family:var(--head)">3:00:00</p><p>30 questões · Português (1 a 15) e Matemática (16 a 30)</p><p style="color:var(--muted);font-size:15px">O relógio começa quando você tocar em <b>Iniciar</b> e não pausa.'+(again?' <b>Refazendo:</b> esta tentativa não soma pontos, mas entra no seu histórico.':' Os acertos da <b>1ª tentativa</b> valem 10 pontos cada.')+'</p><button type="button" class="btn big" id="simGo">Iniciar agora</button><button type="button" class="btn ghost" id="simBack" style="width:100%">Voltar</button></div>';
 $('simGo').onclick=()=>{const before=TOTAL();S.simrun={id:s.id,start:Date.now(),ans:{},mark:{},cur:0};simConfirm=false;save(before);ensureTick();renderSimu();try{window.scrollTo(0,0)}catch(e){}};
 $('simBack').onclick=()=>{simConfirm=false;renderSimList()};}

function renderSimQ(){const el=$('simu');const r=S.simrun,s=SIMI[r.id],i=r.cur,x=s.q[i],A=AREAS[x.area];const left=simLeft();
 const nAns=Object.keys(r.ans).length,prev=s.q[i-1];
 let h='<div class="simbar"><span class="clock'+(left<=600?' crit':left<=1800?' warn':'')+'" id="simClock">'+clockT(left)+'</span><span class="sp">'+s.n+' · '+nAns+'/30 respondidas</span><button type="button" class="btn sm" id="simEnd">Entregar</button></div>';
 h+='<article style="--ac:'+A.ac+';--abg:'+A.abg+'"><div class="tags" style="margin:12px 0 8px"><span class="tag">Questão '+(i+1)+'</span><span class="tag">'+A.n+'</span>'+(r.mark[i]?'<span class="tag" style="background:var(--hl);color:#3b2f00">⚑ dúvida</span>':'')+'</div>';
 if(x.tx){const same=prev&&prev.tx===x.tx;h+='<details class="txt simtx"'+(same?'':' open')+'><summary><b>'+(x.tt||'Texto')+'</b>'+(same?' · mesmo texto da questão anterior (toque para ver)':'')+'</summary><div>'+fmt(x.tx).replace(/<table class="tb">/g,'<div class="tbw"><table class="tb">').replace(/<\/table>/g,'</table></div>')+'</div></details>'}
 h+='<div class="qq big"><div class="qt">'+fmt(x.q)+'</div><div class="opts">';
 x.o.forEach((o,oi)=>{h+='<button type="button" class="opt'+(r.ans[i]===oi?' sel':'')+'" data-o="'+oi+'"><span class="l">'+LETTERS[oi]+'</span><span>'+fmt(o[0])+'</span></button>'});
 h+='</div></div><div class="simnav"><button type="button" class="btn ghost" id="simPrev"'+(i?'':' disabled')+'>←</button><button type="button" class="btn ghost" id="simMark">'+(r.mark[i]?'⚑ Tirar dúvida':'⚑ Marcar dúvida')+'</button><button type="button" class="btn" id="simNext">'+(i<29?'Próxima →':'Revisar folha')+'</button></div>';
 h+='<div class="sheet"><p><b>Folha de respostas</b> · toque para ir</p><div class="cells2">'+s.q.map((q,k)=>'<button type="button" class="c2'+(k===i?' cur':'')+(r.ans[k]!=null?' an':'')+(r.mark[k]?' mk':'')+(k===15?' br':'')+'" data-go="'+k+'"><small>'+(k+1)+'</small>'+(r.ans[k]!=null?LETTERS[r.ans[k]]:'·')+'</button>').join('')+'</div><p class="leg2"><span><i class="an"></i>respondida</span><span><i class="mk"></i>dúvida</span><span>1–15 Português · 16–30 Matemática</span></p></div>';
 if(simConfirm==='end'){const blank=30-nAns,mk=Object.keys(r.mark).length;h+='<div class="card endbox" id="endBox"><h3>Entregar o simulado?</h3><p>'+(blank?'<b>'+blank+' em branco.</b> Na prova, chute com estratégia: elimine as absurdas. ':'Todas respondidas. ')+(mk?mk+' marcada(s) como dúvida. ':'')+'Ainda faltam <b>'+fmtT(left)+'</b>.</p><div class="nav1"><button type="button" class="btn ghost" id="endNo">Continuar a prova</button><button type="button" class="btn" id="endYes" style="background:var(--red);border-color:var(--red)">Entregar agora</button></div><p style="text-align:center;margin:0"><button type="button" class="lnk" id="simAbort">Desistir sem salvar</button></p></div>'}
 h+='</article>';el.innerHTML=h;
 const go=k=>{r.cur=k;if(CUR){USERS[CUR].s=S;LS.set(P+':users',USERS)}renderSimQ();try{window.scrollTo(0,0)}catch(e){}};
 el.querySelectorAll('.opt').forEach(b=>b.onclick=()=>{const o=+b.dataset.o;if(r.ans[i]===o)delete r.ans[i];else r.ans[i]=o;if(CUR){USERS[CUR].s=S;LS.set(P+':users',USERS)}el.querySelectorAll('.opt').forEach(z=>z.classList.toggle('sel',r.ans[i]===+z.dataset.o));const c=el.querySelector('.c2.cur');if(c){c.classList.toggle('an',r.ans[i]!=null);c.lastChild.textContent=r.ans[i]!=null?LETTERS[r.ans[i]]:'·'}el.querySelector('.simbar .sp').textContent=s.n+' · '+Object.keys(r.ans).length+'/30 respondidas'});
 $('simPrev').onclick=()=>{if(i)go(i-1)};$('simNext').onclick=()=>{if(i<29)go(i+1);else{const sh=el.querySelector('.sheet');if(sh)sh.scrollIntoView({behavior:'smooth'})}};
 $('simMark').onclick=()=>{if(r.mark[i])delete r.mark[i];else r.mark[i]=1;go(i)};
 el.querySelectorAll('[data-go]').forEach(b=>b.onclick=()=>go(+b.dataset.go));
 $('simEnd').onclick=()=>{simConfirm='end';renderSimQ();const e=$('endBox');if(e)e.scrollIntoView({behavior:'smooth',block:'center'})};
 if($('endNo'))$('endNo').onclick=()=>{simConfirm=false;renderSimQ()};
 if($('endYes'))$('endYes').onclick=()=>{simConfirm=false;simSubmit(false)};
 if($('simAbort'))$('simAbort').onclick=()=>{if($('simAbort').dataset.sure){simConfirm=false;S.simrun=null;if(CUR){USERS[CUR].s=S;LS.set(P+':users',USERS)}renderSimu();return}$('simAbort').dataset.sure=1;$('simAbort').textContent='Toque de novo para confirmar: a tentativa será apagada'};}

function simSubmit(auto){const r=S.simrun;if(!r)return;const s=SIMI[r.id];const before=TOTAL();
 const ans=[];let por=0,mat=0;s.q.forEach((x,k)=>{const v=r.ans[k]!=null?r.ans[k]:null;ans.push(v);if(v===x.a){if(x.area==='por')por++;else mat++}});
 const t=Math.min(SIM_SECS,(Date.now()-r.start)/1000);const run={ans,mark:Object.keys(r.mark).map(Number),t:Math.round(t),sc:por+mat,por,mat,date:Date.now(),auto:!!auto};
 S.sim=S.sim||{};S.sim[r.id]=S.sim[r.id]||{runs:[]};S.sim[r.id].runs.push(run);S.simrun=null;
 SIMV={id:r.id,run,ri:S.sim[r.id].runs.length-1,fresh:true};save(before);if(auto)toast('Tempo esgotado! Simulado entregue.');
 if(!$('simu').hidden){renderSimu();try{window.scrollTo(0,0)}catch(e){}}}

function renderSimRes(){const el=$('simu');const {id,run}=SIMV,s=SIMI[id];const nota=(run.sc/3).toFixed(1).replace('.',',');
 const msg=run.sc>=27?'Nível bolsa 100%! 🏆':run.sc>=23?'Muito forte! Ajuste os detalhes abaixo. 💪':run.sc>=18?'Bom caminho. O diagnóstico mostra onde ganhar pontos.':'Ótimo treino para descobrir os pontos fracos. Revise os tópicos abaixo e refaça.';
 const wrong={};s.q.forEach((x,k)=>{if(run.ans[k]!==x.a){wrong[x.t]=(wrong[x.t]||0)+1}});const wk=Object.keys(wrong).sort((a,b)=>wrong[b]-wrong[a]||T[b].star-T[a].star);
 let h='<div class="crumb"><button type="button" id="resBack">← Simulados</button></div>';
 h+='<div class="card score"><div class="big">'+run.sc+'<small>/30</small></div><div><div class="rk">nota '+nota+'</div><p style="margin:4px 0 0">'+msg+'</p></div></div>';
 h+='<div class="sum"><div><span>Português</span><b>'+run.por+'/15</b></div><div><span>Matemática</span><b>'+run.mat+'/15</b></div><div><span>Tempo'+(run.auto?' (esgotou)':'')+'</span><b>'+fmtT(run.t)+'</b></div></div>';
 if(wk.length){h+='<div class="card" style="padding:14px 16px;margin-bottom:14px"><h3 style="margin:0 0 6px;font:800 17px var(--head)">Diagnóstico: onde estão os pontos perdidos</h3><p style="margin:0 0 10px;font-size:14px;color:var(--muted)">Revise a teoria e depois treine o tópico.</p>';
  wk.forEach(t=>{const A=AREAS[T[t].area];h+='<div class="diag" style="--ac:'+A.ac+'"><span class="dn">'+wrong[t]+' ✗</span><span class="dt">'+T[t].t+'<small>'+A.n+' · '+'★'.repeat(T[t].star)+'</small></span><button type="button" class="btn ghost sm" data-rv="'+t+'">Revisar</button><button type="button" class="btn sm" data-tr="'+t+'">Treinar</button></div>'});h+='</div>'}
 h+='<h3 class="sec" style="--ac:var(--ink)">Gabarito comentado</h3><div class="glist">';
 s.q.forEach((x,k)=>{const v=run.ans[k],ok=v===x.a;h+='<details class="gq '+(ok?'g':'b')+'"><summary><span class="gn">'+(k+1)+'</span><span class="gs">'+(ok?'✓':v==null?'em branco':'✗')+'</span><span class="gt">'+T[x.t].t+'</span><span class="ga">'+(v!=null?LETTERS[v]:'–')+' → <b>'+LETTERS[x.a]+'</b></span></summary><div class="gb">'+
  (x.tx?'<details class="txt"><summary><b>'+(x.tt||'Texto')+'</b> (ver)</summary><div>'+fmt(x.tx).replace(/<table class="tb">/g,'<div class="tbw"><table class="tb">').replace(/<\/table>/g,'</table></div>')+'</div></details>':'')+
  '<div class="qt" style="font-weight:700;margin-bottom:8px">'+fmt(x.q)+'</div><div class="opts">'+x.o.map((o,oi)=>'<div class="opt'+(oi===x.a?' right':oi===v?' wrong':'')+'"><span class="l">'+LETTERS[oi]+'</span><span>'+fmt(o[0])+'</span></div>').join('')+'</div>'+
  (v!=null&&!ok?'<div class="why" style="margin-top:10px"><b>Por que a '+LETTERS[v]+' está errada:</b> '+fmt(x.o[v][1])+'</div>':'')+
  '<div class="res" style="margin-top:10px"><b class="h">Resolução</b>'+fmt(x.e)+'</div>'+(MACETES[x.t]?'<div class="mac" style="--ac:'+AREAS[x.area].ac+'"><b class="h">Macete</b>'+fmt(MACETES[x.t])+'</div>':'')+'</div></details>'});
 h+='</div><div class="nav1"><button type="button" class="btn ghost" id="resList">Voltar aos simulados</button><button type="button" class="btn" id="resRedo">Refazer o '+s.n+'</button></div>';
 el.innerHTML=h;
 const back=()=>{SIMV=null;renderSimu();try{window.scrollTo(0,0)}catch(e){}};
 $('resBack').onclick=back;$('resList').onclick=back;
 $('resRedo').onclick=()=>{SIMV=null;simConfirm=id;document.body.classList.remove('focus');renderSimStart()};
 el.querySelectorAll('[data-rv]').forEach(b=>b.onclick=()=>{SIMV=null;go('rev/'+b.dataset.rv)});
 el.querySelectorAll('[data-tr]').forEach(b=>b.onclick=()=>{SIMV=null;const t=b.dataset.tr;go('treino');setTimeout(()=>startSession(TQ.filter(q=>q.t===t).sort((p,q)=>p.d-q.d).map(q=>q.id),T[t].t),0)});}

window.__OBJ={ids:TOPS.map(t=>t.id),tq:TQ.map(x=>x.id),fc:FC.map(c=>c.id),sims:SIMS.map(s=>s.id),simA:SIMI.A.q.map(x=>x.a)};
renderCount();
renderBar();route();
if(!CUR)setTimeout(openLogin,600);
})();
