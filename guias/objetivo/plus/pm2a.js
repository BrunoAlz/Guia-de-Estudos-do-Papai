/* REVISÃO TURBINADA · Matemática · M2 (parte A)
   m-eq1 · m-sist · m-prod
   Contas conferidas por plus/check_pm2a.py */
const PLUS_M2A = {

/* ===================== m-eq1 · Equação do 1º grau e problemas ===================== */
'm-eq1': {
 base: [
  [`Regra de sinais na soma e subtração`, `Sinais <b>iguais</b>: soma e repete o sinal. Sinais <b>diferentes</b>: subtrai e fica o sinal do “mais forte” (o de maior valor sem sinal). Pense em dinheiro: dívida + dívida = dívida maior.<br>−3 − 5 = <b>−8</b> · −7 + 10 = <b>3</b> · 4 − 9 = <b>−5</b>`],
  [`Regra de sinais na multiplicação e divisão`, `Sinais iguais → <b>+</b>. Sinais diferentes → <b>−</b>.<br>(+)·(+) = + · (−)·(−) = + · (+)·(−) = − · (−)·(+) = −<br>(−3)·(−4) = <b>12</b> · (−2)·5 = <b>−10</b> · (−12) ÷ (−3) = <b>4</b>`],
  [`O que é a solução (raiz) de uma equação`, `É o número que, colocado no lugar do x, deixa a igualdade <b>verdadeira</b>. Em 2x + 1 = 7, a solução é 3, porque 2·3 + 1 = 7. Se colocar 4: 2·4 + 1 = 9 ≠ 7, não serve.`],
  [`“Passar para o outro lado” = operação inversa nos DOIS lados`, `Ninguém “passa” nada: você faz a operação contrária <b>dos dois lados</b> da balança, e por isso parece que o número pulou e trocou de operação. Inversas: + ↔ − e × ↔ ÷.<br>x + 5 = 12 → tiro 5 dos dois lados → x = <b>7</b>.<br>3x = 18 → divido os dois lados por 3 → x = <b>6</b>.`],
  [`Distributiva: o número de fora multiplica TODOS de dentro`, `3(x − 4) = 3x − 12.<br>Com sinal de menos, o sinal entra junto: −2(x + 5) = −2x − 10 e −(x − 4) = −x + 4 (o menos na frente troca todos os sinais de dentro).`],
  [`Juntar termos semelhantes`, `Só se juntam “iguais com iguais”: x com x, número com número. O x sozinho vale <b>1x</b>.<br>5x − 2x + x = <b>4x</b> · 7 + 3x − 2 = <b>3x + 5</b>`],
  [`x com sinal de menos no final`, `Se chegar em −x = 6, multiplique os dois lados por −1: x = <b>−6</b>. Em −3x = 12, divida por −3: x = <b>−4</b> (sinais diferentes dão negativo).`],
  [`Dicionário português → matemática`, `<table class="tb"><tr><td>o dobro / o triplo de um número</td><td>2x / 3x</td></tr><tr><td>a metade / a quarta parte</td><td>[[x|2]] / [[x|4]]</td></tr><tr><td>consecutivos</td><td>x, x + 1, x + 2</td></tr><tr><td>pares (ou ímpares) consecutivos</td><td>x, x + 2, x + 4</td></tr><tr><td>A excede B em 7</td><td>A = B + 7 (ou A − B = 7)</td></tr><tr><td>o triplo de um número, diminuído de 4</td><td>3x − 4</td></tr><tr><td>o triplo da diferença entre um número e 4</td><td>3(x − 4)</td></tr></table>`]
 ],
 jeitos: [
  {n:`A balança`, c:`Imagine os dois lados numa balança em equilíbrio. Tudo o que você tirar, somar, multiplicar ou dividir de um lado, faz igual do outro. Primeiro some com o x de um lado, depois com o número.`,
   ex:`5x − 3 = 2x + 12<br>Tiro 2x dos dois lados: 3x − 3 = 12.<br>Somo 3 dos dois lados: 3x = 15.<br>Divido os dois lados por 3: x = <b>5</b>.`},
  {n:`Desfazer de trás para frente`, c:`Em “pensei num número…”, faça o caminho de volta, do fim para o começo, usando as operações inversas. Nem precisa montar equação.`,
   ex:`“Pensei num número, multipliquei por 3, somei 7 e deu 34.”<br>Volta: 34 − 7 = 27 → 27 ÷ 3 = <b>9</b>. Confere: 9·3 + 7 = 34. ✔`},
  {n:`Testar as alternativas`, c:`Na prova de múltipla escolha, você pode colocar cada alternativa no lugar do x e ver qual deixa os dois lados iguais. Comece pela do meio ou pela mais “redonda”.`,
   ex:`2(x + 4) = 5x − 7, alternativas 3, 5 ou 7?<br>x = 3: 2·7 = 14 e 15 − 7 = 8 ✗<br>x = 5: 2·9 = 18 e 25 − 7 = 18 ✔ → <b>x = 5</b>.`},
  {n:`Barra de pedaços (frações do todo)`, c:`Quando o problema fala em “gastei [[2|5]]” e “sobrou tanto”, desenhe uma barra dividida em partes iguais. Descubra quanto vale UMA parte e multiplique.`,
   ex:`Gastei [[2|5]] da mesada e sobraram R$ 60.<br>Barra com 5 partes: gastei 2, sobraram 3 partes = 60.<br>1 parte = 60 ÷ 3 = 20 → mesada = 5 × 20 = <b>R$ 100</b>.`},
  {n:`Consecutivos: ache o do meio`, c:`Numa quantidade ímpar de números consecutivos, a soma = quantidade × número do meio. Então divida a soma pela quantidade e já ache o meio.`,
   ex:`3 consecutivos somam 57 → meio = 57 ÷ 3 = 19 → <b>18, 19 e 20</b>.<br>5 consecutivos somam 115 → meio = 115 ÷ 5 = 23 → <b>21, 22, 23, 24 e 25</b>.`},
  {n:`Idades: a diferença nunca muda`, c:`O tempo passa igual para todo mundo, então a diferença de idade entre duas pessoas é sempre a mesma. Use isso para montar a equação com uma letra só.`,
   ex:`Pai tem 40, filho tem 10 (diferença 30). Quando o pai terá o triplo da idade do filho?<br>Pai = 3F e Pai − F = 30 → 3F − F = 30 → 2F = 30 → F = 15.<br>O filho terá 15 anos, ou seja, daqui a <b>5 anos</b> (pai com 45 = 3 × 15 ✔).`}
 ],
 passo: [
  `Leia e diga em voz baixa: “x é ___” (o que estou procurando).`,
  `Traduza o texto com o dicionário (dobro, metade, excede, consecutivos) e monte a equação.`,
  `Tire parênteses (distributiva, cuidado com o sinal) e frações (multiplique tudo pelo MMC).`,
  `Balança: x para um lado, números para o outro, fazendo a operação inversa dos dois lados.`,
  `Divida pelo número que acompanha o x.`,
  `Confira colocando o valor no enunciado e responda o que foi PERGUNTADO.`
 ],
 exs: [
  {q:`Resolva 7 − 2(x − 3) = x + 1.`,
   s:[`Primeiro a distributiva com o −2: −2·x = −2x e −2·(−3) = +6. Fica 7 − 2x + 6 = x + 1.`,
      `Junto os números: 13 − 2x = x + 1.`,
      `Balança: somo 2x dos dois lados → 13 = 3x + 1. Tiro 1 dos dois lados → 12 = 3x.`,
      `Divido por 3: x = 4. Confiro: 7 − 2·(4 − 3) = 5 e 4 + 1 = 5. ✔`],
   r:`x = 4`},
  {q:`Um número excede outro em 12 unidades, e a soma dos dois é 86. Qual é o maior número?`,
   s:[`“Excede em 12” → o maior é o menor + 12. Chamo o menor de x e o maior de x + 12.`,
      `Soma: x + x + 12 = 86 → 2x + 12 = 86.`,
      `Tiro 12 dos dois lados: 2x = 74 → x = 37 (o menor).`,
      `O maior é 37 + 12 = 49. Confiro: 37 + 49 = 86 ✔ e 49 − 37 = 12 ✔.`],
   r:`49`},
  {q:`Richard leu [[1|4]] de um livro no sábado e, no domingo, leu [[1|3]] do que restava. Ainda faltam 90 páginas. Quantas páginas tem o livro?`,
   s:[`Uso a barra: divido o livro em 4 partes. No sábado leu 1 parte; restaram 3 partes.`,
      `No domingo leu [[1|3]] dessas 3 partes = 1 parte. Faltam 2 partes.`,
      `2 partes = 90 páginas → 1 parte = 45 → livro = 4 × 45 = 180.`,
      `Com equação: x − [[x|4]] − [[x|4]] = 90 → [[x|2]] = 90 → x = 180. Confiro: 45 no sábado, 45 no domingo, faltam 90. ✔`],
   r:`180 páginas`}
 ],
 erros: [
  `<b>Errado:</b> −2(x − 3) = −2x − 6. <b>Certo:</b> −2·(−3) = +6, então −2x + 6. Menos com menos dá mais.`,
  `<b>Errado:</b> 2x + 3 = 11 → 2x = 11 (o 3 “sumiu”). <b>Certo:</b> tirar 3 dos dois lados → 2x = 8 → x = 4.`,
  `<b>Errado:</b> −x = 8 → x = 8. <b>Certo:</b> multiplicando por −1 dos dois lados, x = −8.`,
  `<b>Errado:</b> “A excede B em 7” → B = A + 7. <b>Certo:</b> A é o maior, então A = B + 7.`,
  `<b>Errado:</b> −5 − 3 = −2. <b>Certo:</b> sinais iguais somam e repetem o sinal: −8.`
 ],
 resumo: [
  `Sinais: iguais → +, diferentes → − (na × e ÷).`,
  `“Passar para o outro lado” = operação inversa dos DOIS lados.`,
  `−(…) troca todos os sinais de dentro.`,
  `Excede em 7 → A = B + 7 · consecutivos → x, x + 1, x + 2.`,
  `Travou? Teste as alternativas ou desfaça de trás para frente.`,
  `Sempre confira pondo o valor de volta.`
 ]
},

/* ===================== m-sist · Sistemas de equações do 1º grau ===================== */
'm-sist': {
 base: [
  [`O que é a solução de um sistema`, `É o <b>par</b> de valores (x, y) que funciona nas <b>duas</b> equações ao mesmo tempo.<br>x + y = 10 e x − y = 4: o par (7, 3) serve nas duas (7 + 3 = 10 e 7 − 3 = 4). O par (6, 4) serve só na primeira (6 − 4 = 2), então não é solução.`],
  [`Por que precisa de duas equações`, `Com uma só, existem infinitas respostas: x + y = 10 aceita 1 e 9, 2 e 8, 3 e 7… A segunda equação “trava” e deixa só um par.`],
  [`Somar duas equações`, `Soma esquerda com esquerda e direita com direita. Termos opostos (+y e −y) se anulam.<br>(x + y) + (x − y) = 10 + 4 → 2x = 14.`],
  [`Subtrair duas equações (cuidado com o sinal)`, `Subtrair é trocar todos os sinais da equação de baixo e somar.<br>3x + 2y = 12 e x + 2y = 8 → (3x + 2y) − (x + 2y) = 12 − 8 → 2x = 4 → x = 2. Daí 2 + 2y = 8 → y = 3.`],
  [`Pode multiplicar uma equação INTEIRA`, `Multiplicando todos os termos pelo mesmo número, a equação continua valendo (a balança continua equilibrada).<br>x + y = 5 vezes 2 → 2x + 2y = <b>10</b> (o 5 também dobra!).`],
  [`Isolar uma letra`, `Deixe uma letra sozinha usando a operação inversa nos dois lados.<br>x + y = 20 → y = 20 − x.<br>2x − y = 1 → y = 2x − 1.`],
  [`Substituir SEMPRE com parênteses`, `Ao trocar a letra pela expressão, coloque parênteses e faça a distributiva.<br>y = 20 − x em 3x + 2y: 3x + 2(20 − x) = 3x + 40 − 2x = x + 40.<br>Com menos na frente: x − (20 − x) = x − 20 + x = 2x − 20.`],
  [`Montar as duas equações`, `Em problemas, quase sempre: uma equação para a <b>quantidade</b> (quantos objetos ao todo) e outra para o <b>valor</b> (reais, rodas, pontos, patas). “Juntos” → soma; “a diferença” → subtração.`]
 ],
 jeitos: [
  {n:`Escolha do método em 3 segundos`, c:`Olhe o sistema antes de começar. Letra já sozinha (y = … ou x = …) → <b>substituição</b>. Mesmo número na frente da mesma letra: sinais opostos → <b>some</b>; sinais iguais → <b>subtraia</b>. Nenhum caso → multiplique uma equação para criar opostos e some.`,
   ex:`y = 3x e x + y = 24 → substituição: x + 3x = 24 → x = 6, y = <b>18</b>.<br>2x + y = 13 e x − y = 2 → +y e −y: some → 3x = 15 → x = <b>5</b>, y = 3.<br>x + 3y = 11 e x + y = 5 → os dois têm +x: subtraia → 2y = 6 → y = <b>3</b>, x = 2.`},
  {n:`Soma e diferença`, c:`Se você sabe a soma S e a diferença D de dois números: maior = [[S + D|2]] e menor = [[S − D|2]]. Resolve na hora, sem montar nada.`,
   ex:`Soma 50, diferença 8 → maior = 58 ÷ 2 = <b>29</b>, menor = 42 ÷ 2 = <b>21</b>.<br>Dois irmãos somam 40 anos e um tem 6 a mais → <b>23</b> e <b>17</b>.`},
  {n:`Suponha que todos são do mesmo tipo`, c:`Em problema de “quantidade e valor”, finja que todos são do tipo mais barato. Veja quanto faltou e divida pelo que cada troca acrescenta.`,
   ex:`25 animais entre galinhas e coelhos, com 70 patas.<br>Se todos fossem galinhas: 25 × 2 = 50 patas. Faltam 70 − 50 = 20.<br>Cada galinha trocada por coelho dá +2 patas → 20 ÷ 2 = <b>10 coelhos</b> e 15 galinhas. Confere: 40 + 30 = 70. ✔`},
  {n:`Olhe a pergunta antes: às vezes nem precisa de x e y`, c:`Se a pergunta é x + y (ou outra combinação), tente somar ou subtrair as equações inteiras. Quando os números aparecem “cruzados”, somar tudo dá a resposta direta.`,
   ex:`2x + y = 17 e x + 2y = 16. Quanto vale x + y?<br>Somando tudo: 3x + 3y = 33 → x + y = <b>11</b>.<br>(Se quiser cada um: subtraindo, x − y = 1 → x = 6 e y = 5.)`},
  {n:`Teste as alternativas nas DUAS equações`, c:`Se as alternativas dão o par (x, y), coloque cada par nas duas equações. Só vale se funcionar nas duas.`,
   ex:`x + y = 14 e 3x − y = 10.<br>Par (7, 7): 7 + 7 = 14 ✔, mas 21 − 7 = 14 ✗.<br>Par (6, 8): 6 + 8 = 14 ✔ e 18 − 8 = 10 ✔ → <b>x = 6 e y = 8</b>.`}
 ],
 passo: [
  `Dê nome às letras: “x = número de ___, y = número de ___”.`,
  `Monte uma equação para a quantidade e outra para o valor (ou o que o texto der).`,
  `Escolha o método: letra sozinha → substituição; letras que se cancelam → adição.`,
  `Ache a primeira letra e volte numa equação para achar a segunda.`,
  `Confira o par nas DUAS equações.`,
  `Responda o que foi perguntado (x, y, a soma, o produto…).`
 ],
 exs: [
  {q:`Numa sala há 32 alunos, e o número de meninas é o triplo do número de meninos. Quantas meninas há na sala?`,
   s:[`Nomeio: a = meninos, m = meninas. Equações: a + m = 32 e m = 3a.`,
      `O m já está sozinho → substituição: a + 3a = 32 → 4a = 32 → a = 8.`,
      `Volto: m = 3 × 8 = 24. Confiro: 8 + 24 = 32 ✔ e 24 é o triplo de 8 ✔.`,
      `A pergunta é meninas: 24 (e não 8!).`],
   r:`24 meninas`},
  {q:`Resolva o sistema 3x + 2y = 16 e 5x − 4y = 12.`,
   s:[`Nenhuma letra sozinha. Olho o y: +2y e −4y. Se eu multiplicar a primeira por 2, vira +4y, oposto do −4y.`,
      `Primeira × 2: 6x + 4y = 32 (o 16 também dobra!).`,
      `Somo com a segunda: 6x + 5x + 4y − 4y = 32 + 12 → 11x = 44 → x = 4.`,
      `Volto na primeira: 3·4 + 2y = 16 → 2y = 4 → y = 2. Confiro na segunda: 20 − 8 = 12 ✔.`],
   r:`x = 4 e y = 2`},
  {q:`Um cofrinho tem 40 moedas, umas de R$ 0,50 e outras de R$ 0,25, totalizando R$ 14,00. Quantas moedas de R$ 0,50 há?`,
   s:[`Nomeio: c = moedas de 0,50 e v = moedas de 0,25. Quantidade: c + v = 40. Valor: 0,50c + 0,25v = 14.`,
      `Para sumir com a vírgula, multiplico a de valor por 4: 2c + v = 56.`,
      `Subtraio a de quantidade: (2c + v) − (c + v) = 56 − 40 → c = 16.`,
      `Confiro pelo macete da suposição: se as 40 fossem de 0,25, daria R$ 10,00. Faltam R$ 4,00, e cada troca por 0,50 soma R$ 0,25 → 4 ÷ 0,25 = 16. ✔ (16 × 0,50 = 8 e 24 × 0,25 = 6; 8 + 6 = 14.)`],
   r:`16 moedas de R$ 0,50`}
 ],
 erros: [
  `<b>Errado:</b> (3x + 2y) − (x − 2y) = 2x. <b>Certo:</b> o menos troca os dois sinais: 3x + 2y − x + 2y = 2x + 4y.`,
  `<b>Errado:</b> multiplicar x + y = 5 por 3 e escrever 3x + 3y = 5. <b>Certo:</b> todos os termos: 3x + 3y = 15.`,
  `<b>Errado:</b> trocar y por 5 − x em 2x − y e escrever 2x − 5 − x. <b>Certo:</b> com parênteses: 2x − (5 − x) = 2x − 5 + x = 3x − 5.`,
  `<b>Errado:</b> “30 veículos e 100 rodas” → c + m = 100. <b>Certo:</b> c + m = 30 (quantidade) e 4c + 2m = 100 (rodas).`
 ],
 resumo: [
  `Solução = par que funciona nas DUAS equações.`,
  `Letra sozinha → substituição · letras opostas → some.`,
  `Multiplicou a equação? TODOS os termos, inclusive o resultado.`,
  `Substituiu? Use parênteses.`,
  `Soma S e diferença D → maior = (S + D) ÷ 2.`,
  `Quantidade + valor · suponha todos iguais e corrija.`
 ]
},

/* ===================== m-prod · Produtos notáveis e fatoração ===================== */
'm-prod': {
 base: [
  [`Quadrado é vezes ele mesmo (não vezes 2)`, `a² = a · a. Então 5² = 25 (não 10).<br>(2x)² = 2x · 2x = <b>4x²</b>, mas 2x² = 2 · x · x (só o x está ao quadrado).<br>(−3)² = 9, mas −3² = −9 (o menos fica de fora).`],
  [`Quadrados de 11 a 20 (decore!)`, `<table class="tb"><tr><td>11² = 121</td><td>12² = 144</td><td>13² = 169</td><td>14² = 196</td><td>15² = 225</td></tr><tr><td>16² = 256</td><td>17² = 289</td><td>18² = 324</td><td>19² = 361</td><td>20² = 400</td></tr></table>Eles ajudam a reconhecer quadrados perfeitos como 169 = 13² e 324 = 18².`],
  [`Multiplicar termos com letra`, `Multiplique os números e junte as letras: x · x = x², 3x · 2x = <b>6x²</b>, 2 · x · 5 = <b>10x</b>.`],
  [`Distributiva dupla (“chuveirinho”)`, `Cada termo do 1º parênteses multiplica cada termo do 2º.<br>(x + 2)(x + 3) = x² + 3x + 2x + 6 = <b>x² + 5x + 6</b>.<br>Os produtos notáveis são só “chuveirinhos” que aparecem tanto que viraram fórmula.`],
  [`O quadradinho geométrico de (a + b)²`, `(a + b)² é a área de um quadrado de lado a + b. Corte em 4 pedaços:<table class="tb"><tr><td>a²</td><td>ab</td></tr><tr><td>ab</td><td>b²</td></tr></table>Somando: a² + ab + ab + b² = a² + <b>2ab</b> + b². Os dois retângulos ab são o “2ab” que todo mundo esquece!<br>Ex.: (x + 3)² = x² + 3x + 3x + 9 = x² + 6x + 9.`],
  [`Fatorar = escrever como multiplicação`, `<b>Fator comum:</b> procure o maior número que divide todos e a letra que aparece em todos (com o menor expoente). Coloque “em evidência” e divida cada termo por ele.<br>4x² + 6x = <b>2x(2x + 3)</b>. Confira fazendo a distributiva de volta: 2x · 2x + 2x · 3 = 4x² + 6x ✔.`],
  [`Reconhecer a diferença de quadrados`, `Dois quadrados separados por <b>menos</b>: vira (soma)·(diferença) das raízes.<br>x² − 81 = (x + 9)(x − 9) · 4x² − 1 = (2x + 1)(2x − 1).<br>Atenção: soma de quadrados (x² + 9) <b>não</b> fatora assim.`],
  [`Reconhecer o trinômio quadrado perfeito`, `Três termos em que as pontas são quadrados e o meio é 2 × (raiz de uma ponta) × (raiz da outra).<br>x² − 10x + 25: pontas x² e 5², meio 2·x·5 = 10x ✔ → <b>(x − 5)²</b> (o sinal do meio vai para dentro).<br>x² + 5x + 9: o meio deveria ser 2·x·3 = 6x ✗ → não é quadrado perfeito.`]
 ],
 jeitos: [
  {n:`Quadrado “perto da dezena redonda”`, c:`Quebre o número em dezena redonda ± um pedacinho e use (a + b)² ou (a − b)²: quadrado da dezena, 2 vezes a dezena pelo pedacinho, quadrado do pedacinho.`,
   ex:`21² = (20 + 1)² = 400 + 40 + 1 = <b>441</b>.<br>19² = (20 − 1)² = 400 − 40 + 1 = <b>361</b>.<br>52² = (50 + 2)² = 2 500 + 200 + 4 = <b>2 704</b>.`},
  {n:`Vizinhos do meio: (a − b)(a + b)`, c:`Se os dois números estão à mesma distância de um número redondo, o produto é (meio)² − (distância)².`,
   ex:`49 × 51 = 50² − 1² = 2 500 − 1 = <b>2 499</b>.<br>47 × 53 = 50² − 3² = 2 500 − 9 = <b>2 491</b>.<br>18 × 22 = 20² − 2² = 400 − 4 = <b>396</b>.`},
  {n:`Terminado em 5 ao quadrado`, c:`Pegue o que vem antes do 5, multiplique pelo seu sucessor e escreva 25 no final. (Vem de (10a + 5)² = 100a(a + 1) + 25.)`,
   ex:`35²: 3 × 4 = 12 → <b>1 225</b>.<br>65²: 6 × 7 = 42 → <b>4 225</b>.<br>85²: 8 × 9 = 72 → <b>7 225</b>.`},
  {n:`Diferença de quadrados ao contrário`, c:`Viu “número² − número²”? Não calcule os quadrados: faça (soma) × (diferença).`,
   ex:`37² − 33² = (37 + 33)(37 − 33) = 70 × 4 = <b>280</b>.<br>55² − 45² = 100 × 10 = <b>1 000</b>.`},
  {n:`Fator comum para fazer conta`, c:`Quando o mesmo número aparece multiplicando em duas parcelas, coloque-o em evidência e some o resto primeiro. Muitas vezes sai um número redondo.`,
   ex:`17 × 23 + 17 × 77 = 17 × (23 + 77) = 17 × 100 = <b>1 700</b>.<br>9 × 48 − 9 × 38 = 9 × 10 = <b>90</b>.`},
  {n:`Teste do meio (é quadrado perfeito?)`, c:`Tire a raiz das pontas e multiplique por 2. Se der o termo do meio, fatore direto como (raiz ± raiz)².`,
   ex:`x² + 14x + 49: raízes x e 7 → 2·x·7 = 14x ✔ → <b>(x + 7)²</b>.<br>4x² − 12x + 9: raízes 2x e 3 → 2·2x·3 = 12x ✔ → <b>(2x − 3)²</b>.`},
  {n:`Prova real com um número`, c:`Na dúvida se desenvolveu certo, troque x por 1 (ou 2) nos dois lados. Se der diferente, está errado. Se der igual, é bom sinal (para mais segurança, teste também outro valor).`,
   ex:`(x + 3)² = x² + 9? Com x = 1: 4² = 16, mas 1 + 9 = 10 ✗.<br>(x + 3)² = x² + 6x + 9? Com x = 1: 16 e 1 + 6 + 9 = 16 ✔ → <b>esta é a certa</b>.`}
 ],
 passo: [
  `Identifique o que pedem: desenvolver (abrir), fatorar (fechar) ou calcular/simplificar.`,
  `Para fatorar, SEMPRE tente primeiro o fator comum.`,
  `Depois veja: são 2 termos com menos? → diferença de quadrados. São 3 termos? → teste do meio.`,
  `Em frações, fatore em cima e embaixo e corte só fatores (coisas multiplicando) iguais.`,
  `Em contas grandes, procure (a ± b)², (a + b)(a − b) ou um fator comum escondido.`,
  `Confira com a prova real (x = 1) ou fazendo a distributiva de volta.`
 ],
 exs: [
  {q:`Fatore completamente 3x² − 12.`,
   s:[`Primeiro o fator comum: 3 divide 3 e 12 → 3(x² − 4).`,
      `Dentro sobraram dois quadrados com menos: x² − 2² → diferença de quadrados.`,
      `Fica 3(x + 2)(x − 2).`,
      `Prova real com x = 1: 3 − 12 = −9 e 3 · 3 · (−1) = −9 ✔.`],
   r:`3(x + 2)(x − 2)`},
  {q:`Sem calculadora, calcule 99² + 2 · 99 + 1.`,
   s:[`Fazer 99² na mão dá trabalho. Olho o formato: a² + 2·a·1 + 1², com a = 99.`,
      `É um trinômio quadrado perfeito: (99 + 1)².`,
      `(99 + 1)² = 100² = 10 000.`],
   r:`10 000`},
  {q:`Calcule 2 024² − 2 023 × 2 025.`,
   s:[`Não vou fazer essas contas enormes! Percebo que 2 023 e 2 025 são vizinhos do 2 024 (um a menos e um a mais).`,
      `Uso (a − 1)(a + 1) = a² − 1 com a = 2 024: 2 023 × 2 025 = 2 024² − 1.`,
      `Então: 2 024² − (2 024² − 1) = 2 024² − 2 024² + 1 = 1 (o menos troca o sinal do −1).`],
   r:`1`}
 ],
 erros: [
  `<b>Errado:</b> (x − 3)² = x² − 9. <b>Certo:</b> x² − 6x + 9 (faltou o 2ab, e o 9 é positivo).`,
  `<b>Errado:</b> (3x)² = 3x². <b>Certo:</b> o 3 também vai ao quadrado: 9x².`,
  `<b>Errado:</b> (x + 5)² = x² + 5x + 25. <b>Certo:</b> o meio é 2·x·5 = 10x → x² + 10x + 25.`,
  `<b>Errado:</b> 6x² + 9x = 3(2x² + 3x) como resposta final. <b>Certo:</b> o x também é comum: 3x(2x + 3).`,
  `<b>Errado:</b> x² + 16 = (x + 4)(x − 4). <b>Certo:</b> (x + 4)(x − 4) = x² − 16; soma de quadrados não vira esse produto.`
 ],
 resumo: [
  `(a ± b)² = a² ± 2ab + b² → não esqueça o 2ab (os 2 retângulos do quadradinho).`,
  `(a + b)(a − b) = a² − b² → 49 × 51 = 2 500 − 1 = 2 499.`,
  `21² = 400 + 40 + 1 = 441 · 35² = 3 × 4 e 25 → 1 225.`,
  `Fatorar: 1º fator comum, depois diferença de quadrados ou teste do meio.`,
  `Dúvida? Prova real com x = 1.`
 ]
}

};
