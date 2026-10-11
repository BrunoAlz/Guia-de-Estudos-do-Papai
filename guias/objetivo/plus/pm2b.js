/* REVISÃO TURBINADA · M2 (parte B): m-eq2 · m-prop · m-func · m-seq
   Contas conferidas em plus/check_pm2b.py */
const PLUS_M2B = {

/* ===================== m-eq2 · Equação do 2º grau ===================== */
'm-eq2': {
 base: [
  [`Raiz = o número que "zera" a equação`, `Raiz (ou solução) é o valor que, colocado no lugar do x, deixa o lado esquerdo igual a 0. Teste em x<sup>2</sup> − 4x + 3 = 0:<br>x = 1 → 1 − 4 + 3 = <b>0</b> ✔ (é raiz).<br>x = 2 → 4 − 8 + 3 = −1 ✘ (não é raiz).`],
  [`Primeiro: tudo de um lado, 0 do outro`, `Só dá para ler a, b e c com a equação na forma ax<sup>2</sup> + bx + c = 0. Se vier x<sup>2</sup> = 3x + 10, passe os termos para a esquerda trocando o sinal: x<sup>2</sup> − 3x − 10 = 0.`],
  [`a, b e c levam o sinal junto`, `<b>a</b> é o número do x<sup>2</sup>, <b>b</b> é o número do x e <b>c</b> é o número sozinho — <b>com o sinal que está na frente</b>.<br>2x<sup>2</sup> − 7x − 4 = 0 → a = 2, <b>b = −7</b>, <b>c = −4</b>.<br>−x<sup>2</sup> + 6x = 0 → a = −1, b = 6, c = 0.<br>x<sup>2</sup> sozinho tem a = 1 (o 1 fica "escondido").`],
  [`Termo faltando vale ZERO`, `Se não aparece termo com x, então b = 0. Se não aparece número sozinho, c = 0.<br>x<sup>2</sup> − 25 = 0 → a = 1, <b>b = 0</b>, c = −25.<br>3x<sup>2</sup> + 12x = 0 → a = 3, b = 12, <b>c = 0</b>.<br>Essas são as <b>incompletas</b>: resolvem-se sem Bhaskara.`],
  [`Sinais dentro do Δ`, `Δ = b<sup>2</sup> − 4·a·c.<br>• <b>b<sup>2</sup> nunca é negativo</b>: (−7)<sup>2</sup> = (−7)·(−7) = +49.<br>• No −4ac, conte os sinais: se a e c têm sinais <b>diferentes</b>, o −4ac vira <b>soma</b>.<br>Em 2x<sup>2</sup> − 7x − 4 = 0: Δ = 49 − 4·2·(−4) = 49 + 32 = <b>81</b>.`],
  [`Quadrados perfeitos (para tirar √{Δ} de cabeça)`, `<table class="tb"><tr><td>1<sup>2</sup>=1</td><td>2<sup>2</sup>=4</td><td>3<sup>2</sup>=9</td><td>4<sup>2</sup>=16</td><td>5<sup>2</sup>=25</td></tr><tr><td>6<sup>2</sup>=36</td><td>7<sup>2</sup>=49</td><td>8<sup>2</sup>=64</td><td>9<sup>2</sup>=81</td><td>10<sup>2</sup>=100</td></tr><tr><td>11<sup>2</sup>=121</td><td>12<sup>2</sup>=144</td><td>13<sup>2</sup>=169</td><td>14<sup>2</sup>=196</td><td>15<sup>2</sup>=225</td></tr><tr><td>16<sup>2</sup>=256</td><td>17<sup>2</sup>=289</td><td>18<sup>2</sup>=324</td><td>19<sup>2</sup>=361</td><td>20<sup>2</sup>=400</td></tr></table>Dica: quadrado de número terminado em 5 → multiplique o que vem antes do 5 pelo seu sucessor e ponha 25 no fim: 15<sup>2</sup> → 1 × 2 = 2 → <b>225</b>.`],
  [`O que o Δ "conta" para você`, `O Δ é o detetive: ele diz <b>quantas</b> raízes existem antes de você calcular.<br>• Δ é quadrado perfeito (1, 4, 9, 16…) → raízes "redondinhas" (inteiras ou frações).<br>• Δ positivo mas não quadrado perfeito → raízes com raiz quadrada: x<sup>2</sup> − 2x − 1 = 0 tem Δ = 4 + 4 = 8 e x = 1 ± √{2}.<br>• Δ negativo → pare: não existe raiz real.`],
  [`Produto zero: o segredo das incompletas`, `Se A × B = 0, então <b>A = 0 ou B = 0</b> (não tem outro jeito de um produto dar zero).<br>x(x − 6) = 0 → x = 0 ou x − 6 = 0 → x = 6.`],
  [`Por que aparecem DUAS raízes`, `Número positivo e negativo têm o mesmo quadrado: 7<sup>2</sup> = 49 e (−7)<sup>2</sup> = 49. Por isso x<sup>2</sup> = 49 dá x = <b>±7</b>. Em Bhaskara, o ± faz isso: uma conta com <b>+</b>, outra com <b>−</b>.`]
 ],
 jeitos: [
  {n:`Soma e produto de cabeça`, c:`Com a = 1, as raízes são dois números que <b>somam −b</b> e <b>multiplicam c</b>. Comece pelo produto: liste os pares que dão c e veja qual par dá a soma.`,
   ex:`x<sup>2</sup> − 9x + 20 = 0 → soma 9, produto 20 → pares de 20: 1·20, 2·10, <b>4·5</b> → 4 + 5 = 9 → raízes <b>4 e 5</b>.`},
  {n:`O sinal do produto entrega os sinais`, c:`P positivo → as duas raízes têm o <b>mesmo sinal</b> (o sinal da soma). P negativo → sinais <b>opostos</b>, e a maior (sem sinal) fica com o sinal da soma.`,
   ex:`x<sup>2</sup> + 8x + 15 = 0 → S = −8, P = 15 (positivo) → as duas negativas: <b>−3 e −5</b>.<br>x<sup>2</sup> − 4x − 21 = 0 → S = 4, P = −21 (negativo) → 7 e 3 com sinais opostos, o 7 positivo: <b>7 e −3</b>.`},
  {n:`Divida tudo antes de começar`, c:`Se a, b e c têm um divisor comum, divida a equação inteira por ele. As raízes não mudam e os números ficam pequenos.`,
   ex:`3x<sup>2</sup> − 24x + 36 = 0 → ÷3 → x<sup>2</sup> − 8x + 12 = 0 → soma 8, produto 12 → <b>2 e 6</b>.`},
  {n:`Incompleta? Sem Bhaskara!`, c:`Sem c: x em evidência (uma raiz é sempre 0). Sem b: isole o x<sup>2</sup> e tire a raiz com ±. Se o x<sup>2</sup> der negativo, não há raiz real.`,
   ex:`5x<sup>2</sup> − 20x = 0 → 5x(x − 4) = 0 → <b>0 e 4</b>.<br>2x<sup>2</sup> − 50 = 0 → x<sup>2</sup> = 25 → <b>5 e −5</b>.<br>x<sup>2</sup> + 9 = 0 → x<sup>2</sup> = −9 → <b>sem raiz real</b>.`},
  {n:`Teste as alternativas`, c:`Na prova as respostas estão ali! Coloque cada alternativa no lugar do x: a que der 0 é raiz. Muitas vezes é mais rápido que resolver.`,
   ex:`"Uma raiz de x<sup>2</sup> − 3x − 28 = 0 é: 4, −7 ou 7?" → x = 4: 16 − 12 − 28 = −24 ✘. x = −7: 49 + 21 − 28 = 42 ✘. x = 7: 49 − 21 − 28 = 0 ✔ → <b>7</b>.`},
  {n:`Achou uma raiz? A outra sai da soma`, c:`Descobriu uma raiz testando? A outra é S menos ela, com S = [[−b|a]]. Confira com o produto P = [[c|a]].`,
   ex:`2x<sup>2</sup> − 3x − 2 = 0 → teste x = 2: 8 − 6 − 2 = 0 ✔. S = [[3|2]] → outra = [[3|2]] − 2 = <b>−[[1|2]]</b>. Confere: 2 × (−[[1|2]]) = −1 = [[c|a]] = [[−2|2]] ✔.`},
  {n:`Só quer saber QUANTAS raízes? Pare no Δ`, c:`Se a pergunta é "tem raiz real?", "quantas raízes?" ou "raízes iguais?", calcule só o Δ e responda.`,
   ex:`x<sup>2</sup> + 10x + 25 = 0 → Δ = 100 − 100 = 0 → <b>uma raiz só (dupla)</b>: x = [[−10|2]] = −5.<br>x<sup>2</sup> − x + 3 = 0 → Δ = 1 − 12 = −11 → <b>nenhuma raiz real</b>.`}
 ],
 passo: [
  `Arrume: tudo de um lado, = 0 do outro.`,
  `Escreva a, b e c <b>com sinal</b> (termo faltando = 0). Dá para dividir tudo por algum número? Divida.`,
  `Incompleta (b = 0 ou c = 0)? Use evidência ou isole o x<sup>2</sup>.`,
  `Completa com a = 1? Tente soma e produto. Não saiu? Δ = b<sup>2</sup> − 4ac e depois x = [[−b ± √{Δ}|2a]].`,
  `Confira uma raiz na equação e, se for problema de medida/idade/quantidade, descarte a negativa.`
 ],
 exs: [
  {q:`Resolva 7x<sup>2</sup> + 21x = 0.`, s:[`Primeiro eu vejo: não tem número sozinho → c = 0, é incompleta. Nada de Bhaskara.`,`Coloco 7x em evidência: 7x(x + 3) = 0.`,`Produto zero: 7x = 0 → x = 0; ou x + 3 = 0 → x = −3.`], r:`S = {0, −3}`},
  {q:`Resolva 2x<sup>2</sup> − 5x − 3 = 0.`, s:[`a = 2, b = −5, c = −3. Como a ≠ 1, vou de Bhaskara.`,`Δ = (−5)<sup>2</sup> − 4·2·(−3) = 25 + 24 = 49 → √{49} = 7.`,`−b = +5. x = [[5 ± 7|4]] → [[12|4]] = 3 ou [[−2|4]] = −[[1|2]].`,`Confiro com a soma: 3 + (−[[1|2]]) = [[5|2]] = [[−b|a]] ✔.`], r:`S = {3, −[[1|2]]}`},
  {q:`O produto de dois números inteiros positivos e consecutivos é 132. Qual é a soma deles?`, s:[`Chamo os números de x e x + 1: x(x + 1) = 132 → x<sup>2</sup> + x − 132 = 0.`,`Macete: consecutivos multiplicando 132 ficam perto de √{132}, que está entre 11 e 12. Testo 11 × 12 = 132 ✔.`,`(Pela soma e produto: raízes 11 e −12; como são positivos, x = 11.)`,`Números 11 e 12 → soma 23.`], r:`23`}
 ],
 erros: [
  `<b>Errado:</b> em x<sup>2</sup> − 5x + 4 = 0, fazer b<sup>2</sup> = −25. <b>Certo:</b> b<sup>2</sup> = (−5)<sup>2</sup> = +25 → Δ = 25 − 16 = 9.`,
  `<b>Errado:</b> com b = −8, escrever −b = −8. <b>Certo:</b> −b = −(−8) = <b>+8</b>.`,
  `<b>Errado:</b> dividir só a raiz por 2a: [[6 ± 2|2]] = 6 ± 1. <b>Certo:</b> o traço da fração divide TUDO: [[6 + 2|2]] = 4 e [[6 − 2|2]] = 2.`,
  `<b>Errado:</b> em x<sup>2</sup> = 5x, "cortar" o x e achar só x = 5. <b>Certo:</b> x<sup>2</sup> − 5x = 0 → x(x − 5) = 0 → x = 0 <b>ou</b> x = 5. Dividir por x apaga a raiz 0.`,
  `<b>Errado:</b> x<sup>2</sup> = 36 → x = 6 e pronto. <b>Certo:</b> x = 6 ou x = −6 (só descarte o −6 se o problema for de medida).`
 ],
 resumo: [
  `Raiz = número que zera a equação.`,
  `a, b, c com sinal; termo faltando = 0.`,
  `Incompleta → evidência ou isola x<sup>2</sup> (±).`,
  `Δ = b<sup>2</sup> − 4ac: + duas · 0 uma · − nenhuma.`,
  `x = [[−b ± √{Δ}|2a]] · S = [[−b|a]] · P = [[c|a]].`,
  `Na dúvida: teste as alternativas.`
 ]
},

/* ===================== m-prop · Razão, proporção, regra de três, escalas ===================== */
'm-prop': {
 base: [
  [`Razão = comparação por divisão (a ordem importa)`, `"Para cada 3 meninas há 2 meninos" → razão meninas para meninos = [[3|2]]. Já a razão meninos para meninas é [[2|3]]. Trocou a ordem, trocou a razão!`],
  [`Parte × todo`, `Com 3 meninas para 2 meninos, cada "grupinho" tem 3 + 2 = 5 alunos. Então as meninas são [[3|5]] da turma (e não [[3|2]]). Numa turma de 30: [[3|5]] de 30 = <b>18 meninas</b>.`],
  [`Proporção e produto cruzado`, `Proporção é igualdade de razões. Para achar o termo que falta, multiplique em "X":<br>[[3|4]] = [[x|20]] → 4·x = 3·20 → 4x = 60 → x = <b>15</b>.`],
  [`Diretamente proporcional: andam juntas`, `Se uma é multiplicada por 2, 3, 10…, a outra também. A <b>divisão</b> entre elas é sempre a mesma.<br>2 kg custam R$ 14 → cada kg R$ 7 → 5 kg custam R$ 35. ([[14|2]] = [[35|5]] = 7.)`],
  [`Inversamente proporcional: uma sobe, a outra desce`, `Se uma dobra, a outra cai pela metade. O <b>produto</b> entre elas é sempre o mesmo.<br>A 60 km/h, uma viagem leva 3 h; a 90 km/h leva 2 h. (60 × 3 = 90 × 2 = 180, a distância.)`],
  [`Escala: corte os zeros do centímetro`, `1 m = 100 cm e 1 km = 100 000 cm (5 zeros).<br>Escala <b>1 : 100 000</b> → 1 cm no mapa = 100 000 cm = <b>1 km</b>.<br>1 : 25 000 → 1 cm = 25 000 cm = 250 m.<br>1 : 50 (planta) → 1 cm = 50 cm = 0,5 m.`],
  [`Velocidade média e as horas "quebradas"`, `v = [[distância|tempo]], d = v × t e t = [[d|v]].<br>Minutos em horas: divida por 60. 15 min = 0,25 h · 30 min = 0,5 h · 45 min = 0,75 h · 12 min = 0,2 h · 20 min = [[1|3]] h.`],
  [`Divisão proporcional: cada parte vale quanto?`, `Some as partes, divida o total por essa soma e multiplique.<br><b>Inversamente</b> proporcional a 3 e 6 → use [[1|3]] e [[1|6]]; multiplicando ambos por 6 ficam 2 e 1 → o que tem MENOS recebe MAIS.`]
 ],
 jeitos: [
  {n:`"Mais → mais?" e as setas`, c:`Monte duas colunas e ponha uma seta na coluna do x. Pergunte: "se esta aumenta, a outra aumenta?". Sim → seta no mesmo sentido (direta, multiplica cruzado). Não → seta invertida (inversa, multiplica em linha).`,
   ex:`5 kg custam R$ 40; 8 kg? Mais kg → mais R$ → direta: 5x = 8 × 40 = 320 → x = <b>R$ 64</b>.<br>8 máquinas levam 12 h; e 6 máquinas? Menos máquinas → mais horas → inversa: 8 × 12 = 6 × x → 96 = 6x → x = <b>16 h</b>.`},
  {n:`Passa pelo 1 (redução à unidade)`, c:`Descubra quanto vale para 1 e depois multiplique. Funciona até em inversa: "1 pintor sozinho leva quanto?"`,
   ex:`7 canetas custam R$ 21 → 1 caneta = R$ 3 → 10 canetas = <b>R$ 30</b>.<br>4 pintores levam 9 dias → 1 pintor levaria 36 dias → 6 pintores levam 36 ÷ 6 = <b>6 dias</b>.`},
  {n:`Ache o fator e aplique`, c:`Veja quantas vezes um número "virou" o outro (×1,5, ×3, ÷2…) e faça o mesmo do outro lado (na direta) ou o contrário (na inversa).`,
   ex:`12 litros → 300 km. Com 18 litros? 18 = 12 × 1,5 → 300 × 1,5 = <b>450 km</b>.`},
  {n:`Escala em km: corte 5 zeros`, c:`Na escala 1 : N, corte 5 zeros de N e você tem quantos km vale 1 cm.`,
   ex:`1 : 250 000 → 1 cm = 2,5 km → 6 cm = 6 × 2,5 = <b>15 km</b>.<br>1 : 2 000 000 → 1 cm = 20 km.`},
  {n:`Composta: tudo comparado com a coluna do x`, c:`Na regra de três composta, compare <b>cada</b> grandeza só com a do x (as outras ficam "paradas"). Direta: multiplique pela fração "nova/antiga"; inversa: pela "antiga/nova". Outro jeito: calcule o trabalho de 1 pessoa em 1 dia.`,
   ex:`4 costureiras fazem 120 camisas em 6 dias. Em quantos dias 6 costureiras fazem 180 camisas?<br>Mais camisas → mais dias (direta: × [[180|120]]). Mais costureiras → menos dias (inversa: × [[4|6]]).<br>x = 6 × [[180|120]] × [[4|6]] = 6 × 1,5 × [[2|3]] = <b>6 dias</b>.<br>Conferindo pela unidade: 120 ÷ (4 × 6) = 5 camisas por costureira por dia → 180 ÷ (6 × 5) = 6 ✔.`},
  {n:`Velocidade "por minuto"`, c:`Se o tempo está em minutos, ache quanto anda por minuto e multiplique por 60.`,
   ex:`72 km em 1h12 (72 min) → 1 km por minuto → 60 km por hora = <b>60 km/h</b>.<br>(Ou: 1h12 = 1,2 h → 72 ÷ 1,2 = 60.)`}
 ],
 passo: [
  `Identifique as grandezas e organize em colunas, com as <b>mesmas unidades</b> (h com h, cm com cm).`,
  `Para cada grandeza, pergunte "mais → mais?": direta ou inversa.`,
  `Direta: multiplica cruzado. Inversa: multiplica em linha (o produto é constante).`,
  `Escala ou velocidade? Use a fórmula ([[desenho|real]], [[d|t]]) e converta as unidades no fim.`,
  `Confira o bom senso: mais trabalhadores devem dar MENOS dias; mais produtos, MAIS dinheiro.`
 ],
 exs: [
  {q:`Num mapa de escala 1 : 300 000, duas cidades estão a 4,5 cm uma da outra. Qual a distância real?`, s:[`Uso o macete de cortar 5 zeros: 300 000 cm = 3 km. Então 1 cm do mapa vale 3 km.`,`4,5 cm → 4,5 × 3 = 13,5 km.`], r:`13,5 km`},
  {q:`De bicicleta, a 18 km/h, Lucas vai à escola em 40 minutos. Se fosse a pé, a 6 km/h, quanto tempo levaria?`, s:[`Mais velocidade → menos tempo: inversa (o produto é a distância, que não muda).`,`18 × 40 = 6 × x → 720 = 6x → x = 120 min.`,`Conferindo: a velocidade caiu para [[1|3]] (18 ÷ 3 = 6), então o tempo triplica: 40 × 3 = 120 min = 2 h.`], r:`2 horas`},
  {q:`8 jardineiros aparam 2 400 m<sup>2</sup> de gramado em 3 horas. Quantos jardineiros são necessários para aparar 3 600 m<sup>2</sup> em 2 horas, no mesmo ritmo?`, s:[`Passo pelo 1: cada jardineiro apara 2 400 ÷ (8 × 3) = 100 m<sup>2</sup> por hora.`,`Em 2 horas, cada um apara 200 m<sup>2</sup>. Para 3 600 m<sup>2</sup>: 3 600 ÷ 200 = 18.`,`Conferindo pelas setas: mais área → mais jardineiros (× [[3600|2400]] = × 1,5); menos horas → mais jardineiros (× [[3|2]] = × 1,5). 8 × 1,5 × 1,5 = 18 ✔.`], r:`18 jardineiros`}
 ],
 erros: [
  `<b>Errado:</b> 3 pintores levam 12 dias, então 6 pintores levam 24 dias. <b>Certo:</b> mais pintores → menos dias (inversa): 3 × 12 = 6 × x → <b>6 dias</b>.`,
  `<b>Errado:</b> 1h20 = 1,2 h. <b>Certo:</b> 20 min = [[20|60]] = [[1|3]] h, então 1h20 = 1 + [[1|3]] = [[4|3]] h. (1,2 h é 1h12!)`,
  `<b>Errado:</b> 3 meninas para 2 meninos → meninas são [[3|2]] da turma. <b>Certo:</b> parte sobre o todo: [[3|3 + 2]] = [[3|5]].`,
  `<b>Errado:</b> ida a 60 km/h e volta a 40 km/h → média 50 km/h. <b>Certo:</b> use distância total ÷ tempo total. Se cada trecho tem 120 km: 2 h + 3 h = 5 h; 240 ÷ 5 = <b>48 km/h</b>.`,
  `<b>Errado:</b> escala 1 : 50 000 e 2 cm → "100 000 km". <b>Certo:</b> 2 × 50 000 = 100 000 <b>cm</b> = 1 km. Sempre veja a unidade!`
 ],
 resumo: [
  `Razão = divisão (ordem importa); proporção = razões iguais → produto cruzado.`,
  `"Mais → mais?" Sim: direta (cruzado). Não: inversa (em linha).`,
  `Escala 1 : 100 000 → 1 cm = 1 km (corte 5 zeros).`,
  `v = [[d|t]]; minutos ÷ 60 (1h30 = 1,5 h; 1h20 = [[4|3]] h).`,
  `Composta: compare cada grandeza com a do x.`,
  `Divisão proporcional: total ÷ soma das partes.`
 ]
},

/* ===================== m-func · Funções e valor numérico ===================== */
'm-func': {
 base: [
  [`Função = máquina de entrada e saída`, `Você coloca um x, a regra trabalha e sai um único y. Em f(x) = 2x + 1, colocando 4 sai 2 × 4 + 1 = 9. Escrevemos <b>f(4) = 9</b> (lê-se "f de 4 é 9").`],
  [`f(número) = troque x pelo número`, `f(5) NÃO é "f vezes 5". É "o valor da função quando x = 5". Em f(x) = x<sup>2</sup> − 2x: f(5) = 25 − 10 = <b>15</b>.`],
  [`Sempre entre parênteses`, `Ao trocar x por um número, coloque-o entre parênteses — principalmente se for negativo.<br>f(x) = x<sup>2</sup> − 2x, f(−3) = (−3)<sup>2</sup> − 2·(−3) = 9 + 6 = <b>15</b>.`],
  [`Potência de negativo`, `(−2)<sup>2</sup> = (−2)·(−2) = <b>4</b>, mas −2<sup>2</sup> = −(2·2) = <b>−4</b>. E (−2)<sup>3</sup> = −8 (expoente ímpar mantém o sinal).`],
  [`Quem é o a e quem é o b`, `Em f(x) = ax + b, <b>a é o número que multiplica o x</b> e <b>b é o número sozinho</b> — não importa a ordem em que aparecem.<br>f(x) = 7 − 3x → a = −3 e b = 7.`],
  [`a = taxa de variação ("quanto cresce por unidade")`, `É quanto o y muda quando x aumenta 1. Sempre tem cara de "por": reais <b>por</b> km, litros <b>por</b> minuto.<br>Eletricista: R$ 45 <b>por</b> hora → a = 45.`],
  [`b = valor inicial ("quando x = 0")`, `É o y quando x = 0: f(0) = b. É o valor fixo, a taxa, a bandeirada; no gráfico, é onde a reta corta o eixo y.<br>f(x) = 45x + 70 → f(0) = 70.`],
  [`Crescente, decrescente, constante`, `a &gt; 0 → sobe (f(x) = 2x + 1). a &lt; 0 → desce (vela queimando, caixa esvaziando). a = 0 → reta horizontal, y sempre igual (f(x) = 5).`],
  [`Dado o y, achar o x`, `Se a questão dá o resultado e pergunta o x, iguale e resolva a equação.<br>f(x) = 3x − 4 e f(x) = 20 → 3x − 4 = 20 → 3x = 24 → x = <b>8</b>. Se y = 0, o x achado é o <b>zero da função</b> (onde a reta corta o eixo x).`]
 ],
 jeitos: [
  {n:`Parênteses salva-vidas`, c:`Antes de calcular, reescreva a expressão trocando cada x por "( )" e só depois coloque o número dentro. Faça primeiro a potência, depois as multiplicações, por último somas e subtrações.`,
   ex:`f(x) = 3x<sup>2</sup> − x, f(−1) → 3·( )<sup>2</sup> − ( ) → 3·(−1)<sup>2</sup> − (−1) = 3·1 + 1 = <b>4</b>.`},
  {n:`a = quanto y andou ÷ quanto x andou`, c:`Se os x da tabela pulam de 1 em 1, o a é a diferença dos y. Se pulam mais, divida a variação de y pela variação de x.`,
   ex:`Tabela: x = 2 → y = 11; x = 5 → y = 20. a = [[20 − 11|5 − 2]] = [[9|3]] = 3. Depois o b: 11 = 3·2 + b → b = 5. Lei: <b>f(x) = 3x + 5</b>.`},
  {n:`Volte até o x = 0`, c:`Numa tabela que pula de 1 em 1, "ande para trás" até x = 0: o y que aparece ali é o b.`,
   ex:`x = 1, 2, 3 e y = 6, 10, 14 → sobe 4 (a = 4). Voltando para x = 0: 6 − 4 = 2 (b = 2). Lei: <b>y = 4x + 2</b>.`},
  {n:`Traduza o texto: "fixo" = b, "por" = a`, c:`Em problemas, procure as palavras: fixo, taxa, inicial, bandeirada → b. Por hora, por km, a cada → a.`,
   ex:`Eletricista: R$ 70 de visita + R$ 45 por hora → f(x) = 45x + 70.<br>3 horas → 45 × 3 + 70 = 135 + 70 = <b>R$ 205</b>.`},
  {n:`Teste a lei em dois pontos`, c:`Para escolher entre alternativas, teste a lei em dois pontos da tabela (o x = 0 é o mais rápido). A que acertar os dois é a certa.`,
   ex:`Pontos (0, −2) e (3, 4). y = x + 1? Em x = 0 dá 1 ✘. y = 2x − 2? Em x = 0 dá −2 ✔; em x = 3 dá 4 ✔ → <b>y = 2x − 2</b>.`},
  {n:`Quando dois planos empatam? Iguale`, c:`Para comparar dois preços, iguale as funções: o x encontrado é o ponto de empate. De um lado dele um plano é melhor; do outro, o outro.`,
   ex:`Plano A: 20 + 2x. Plano B: 50 + 0,5x. 20 + 2x = 50 + 0,5x → 1,5x = 30 → x = <b>20</b>. Abaixo de 20 unidades, A é mais barato.`}
 ],
 passo: [
  `Descubra quem é o x (o que você escolhe: km, horas, meses) e quem é o y (o que resulta: preço, volume).`,
  `Pediu f(número)? Substitua com parênteses e faça as contas na ordem certa.`,
  `Precisa montar a lei? b = valor fixo/inicial (x = 0); a = quanto muda por unidade.`,
  `Deu o y e pediu o x? Iguale e resolva a equação.`,
  `Confira a lei com um ponto do enunciado ou da tabela.`
 ],
 exs: [
  {q:`Dada f(x) = −2x<sup>2</sup> + 5x − 1, calcule f(−1).`, s:[`Primeiro eu troco cada x por parênteses: −2·(−1)<sup>2</sup> + 5·(−1) − 1.`,`Potência primeiro: (−1)<sup>2</sup> = 1 → −2·1 = −2.`,`Depois: 5·(−1) = −5. Soma: −2 − 5 − 1 = −8.`], r:`f(−1) = −8`},
  {q:`Uma piscina inflável está sendo enchida. A tabela mostra o volume V (litros) no tempo t (minutos): t = 0, 5, 10, 15 → V = 20, 35, 50, 65. Em quanto tempo ela terá 80 litros?`, s:[`Valor inicial: em t = 0 já há 20 L → b = 20.`,`A cada 5 min entram 15 L → a = [[15|5]] = 3 L por minuto.`,`Lei: V = 3t + 20. Confiro: t = 10 → 30 + 20 = 50 ✔.`,`80 = 3t + 20 → 3t = 60 → t = 20.`], r:`20 minutos`},
  {q:`Locadora A: R$ 100 fixos + R$ 0,80 por km. Locadora B: R$ 40 fixos + R$ 1,20 por km. A partir de quantos km a locadora A fica mais barata?`, s:[`Monto as leis: A(x) = 0,8x + 100 e B(x) = 1,2x + 40.`,`Igualo para achar o empate: 0,8x + 100 = 1,2x + 40 → 60 = 0,4x → x = 150 km.`,`Testo um ponto depois: 200 km → A = 160 + 100 = 260; B = 240 + 40 = 280. A é mais barata ✔.`], r:`Acima de 150 km`}
 ],
 erros: [
  `<b>Errado:</b> para x = −3, x<sup>2</sup> = −9. <b>Certo:</b> (−3)<sup>2</sup> = +9. Use parênteses sempre.`,
  `<b>Errado:</b> em f(x) = 5 + 2x, achar que a = 5 só porque vem primeiro. <b>Certo:</b> a é quem multiplica o x → a = 2, b = 5.`,
  `<b>Errado:</b> tabela x = 0, 2, 4 e y = 1, 7, 13 → a = 6. <b>Certo:</b> y subiu 6 enquanto x subiu 2 → a = [[6|2]] = 3. Lei: y = 3x + 1.`,
  `<b>Errado:</b> f(2) = 2·f. <b>Certo:</b> f(2) é o valor da função com x = 2 (troque o x por 2).`,
  `<b>Errado:</b> se 10 km custam R$ 30 num táxi com bandeirada, 20 km custam R$ 60. <b>Certo:</b> só dobra se b = 0. Monte a lei e calcule.`
 ],
 resumo: [
  `f(5) = troque x por 5 (com parênteses).`,
  `(−3)<sup>2</sup> = 9, mas −3<sup>2</sup> = −9.`,
  `f(x) = ax + b: a = "por unidade", b = valor em x = 0.`,
  `a = [[variação de y|variação de x]].`,
  `a &gt; 0 sobe · a &lt; 0 desce.`,
  `Deu o y? Iguale e resolva.`
 ]
},

/* ===================== m-seq · Sequências e regularidades ===================== */
'm-seq': {
 base: [
  [`Posição × valor`, `Numa sequência, cada termo tem uma <b>posição</b> (1º, 2º, 3º…) e um <b>valor</b>. a<sub>5</sub> é "o termo da posição 5". Em 4, 11, 18, 25: a<sub>1</sub> = 4 e a<sub>3</sub> = 18.`],
  [`Primeiro teste: as diferenças`, `Subtraia cada termo do anterior. Se a diferença é sempre a mesma, é uma <b>PA</b> (progressão aritmética), e essa diferença é a <b>razão r</b>.<br>4, 11, 18, 25 → diferenças 7, 7, 7 → r = 7.`],
  [`Razão negativa = sequência descendo`, `30, 26, 22, 18… → cada um menos o anterior: 26 − 30 = −4. Então <b>r = −4</b> (e não 4).`],
  [`Segundo teste: as divisões`, `Se a diferença muda, tente dividir vizinhos. Divisão constante → <b>PG</b> (progressão geométrica).<br>5, 15, 45, 135 → ×3. · 64, 32, 16, 8 → ÷2 (multiplica por [[1|2]]).`],
  [`Termo geral da PA, explicado`, `Para chegar ao termo n, você parte do a<sub>1</sub> e dá (n − 1) pulos de tamanho r.<br>12º termo de 4, 11, 18… → 4 + 11 × 7 = 4 + 77 = <b>81</b>.`],
  [`Diferenças que crescem: olhe os quadrados`, `1, 4, 9, 16, 25 são os quadrados (n<sup>2</sup>); as diferenças são 3, 5, 7, 9 (crescem de 2 em 2). Se a sequência for 2, 5, 10, 17, 26, compare com os quadrados: é <b>n<sup>2</sup> + 1</b>.`],
  [`Sequência que se repete = use o resto`, `Se o padrão tem um ciclo de tamanho k, divida a posição por k e olhe o <b>resto</b>.<br>Hoje é segunda. Daqui a 100 dias? 100 = 14 × 7 + 2 → anda 2 dias além das semanas completas → <b>quarta-feira</b>.`],
  [`Figuras: vire tabela`, `Conte o que pede (palitos, bolinhas, quadradinhos) nas figuras 1, 2, 3 e monte uma tabela "figura n → quantidade". Aí é só achar o padrão dos números.`]
 ],
 jeitos: [
  {n:`Fórmula relâmpago: r·n + "termo zero"`, c:`Numa PA, a lei é sempre r·n + (a<sub>1</sub> − r). O "termo zero" é o que viria ANTES do 1º termo.`,
   ex:`5, 8, 11, 14… → r = 3; antes do 5 viria 2 → a<sub>n</sub> = 3n + 2.<br>a<sub>30</sub> = 3 × 30 + 2 = <b>92</b>.`},
  {n:`Conte os pulos entre dois termos`, c:`Entre a<sub>3</sub> e a<sub>8</sub> há 8 − 3 = 5 pulos. Se você conhece dois termos, a diferença deles dividida pelos pulos é a razão.`,
   ex:`a<sub>3</sub> = 10 e a<sub>8</sub> = 30 → 5 pulos valem 20 → r = 4. Voltando 2 pulos do a<sub>3</sub>: a<sub>1</sub> = 10 − 8 = <b>2</b>.`},
  {n:`"Que posição tem esse valor?"`, c:`Iguale a fórmula ao valor e resolva. Ou: (valor − a<sub>1</sub>) ÷ r = número de pulos; some 1 para ter a posição.`,
   ex:`7, 11, 15, … O 203 aparece? (203 − 7) ÷ 4 = 49 pulos → posição 49 + 1 = <b>50ª</b>.<br>Pela fórmula: 4n + 3 = 203 → n = 50 ✔.`},
  {n:`Figuras: "o que já tem + o que entra"`, c:`Veja quanto entra a cada figura nova (é o r) e quanto sobra fixo. Lei = (o que entra) × n + (o que sobra).`,
   ex:`Casinhas de palitos lado a lado (quadrado + telhado triangular, dividindo a parede): 1 casa = 6 palitos, 2 casas = 11, 3 casas = 16. Entram 5 por casa; 6 − 5 = 1 fixo → 5n + 1.<br>10 casas → 5 × 10 + 1 = <b>51 palitos</b>.`},
  {n:`Confira a fórmula em n = 1 e n = 2`, c:`Depois de montar a lei, teste nas duas primeiras figuras ou termos. Se bater nas duas, pode confiar.`,
   ex:`Lei 5n + 1 → n = 1: 6 ✔; n = 2: 11 ✔ → <b>lei confirmada</b>.<br>Lei 6n (chute errado) → n = 1: 6 ✔, mas n = 2: 12 ✘ (são 11) → <b>descartada</b>.`}
 ],
 passo: [
  `Escreva os termos com as posições embaixo (1, 2, 3…).`,
  `Calcule as diferenças. Constantes → PA. Não? Tente divisões (PG), quadrados ou "soma dos anteriores".`,
  `PA: a<sub>n</sub> = a<sub>1</sub> + (n − 1)·r, ou r·n + (termo zero).`,
  `Figuras: conte 1, 2, 3, faça a tabela e ache a lei. Ciclos: use o resto da divisão.`,
  `Teste a lei em n = 1 e n = 2 antes de calcular o termo pedido.`
 ],
 exs: [
  {q:`Qual é o 15º termo da sequência 50, 46, 42, 38, …?`, s:[`Primeiro as diferenças: 46 − 50 = −4. A sequência desce → r = −4.`,`Do 1º ao 15º são 14 pulos: a<sub>15</sub> = 50 + 14 × (−4) = 50 − 56.`], r:`−6`},
  {q:`Na figura n, um quadrado de n × n lajotas brancas é cercado por uma moldura de lajotas pretas. A figura 1 tem 8 pretas, a figura 2 tem 12 e a figura 3 tem 16. Quantas lajotas pretas tem a figura 10?`, s:[`Faço a tabela: 8, 12, 16 → entram 4 pretas por figura (r = 4).`,`Termo zero: 8 − 4 = 4 → lei 4n + 4. Confiro: n = 2 → 12 ✔.`,`Outro jeito de ver: a moldura tem 4 lados de n lajotas + 4 cantos = 4n + 4.`,`Figura 10: 4 × 10 + 4 = 44.`], r:`44 lajotas pretas`},
  {q:`Numa progressão aritmética, a<sub>4</sub> = 17 e a<sub>9</sub> = 42. Qual é o 20º termo?`, s:[`Conto os pulos: de a<sub>4</sub> até a<sub>9</sub> são 5 pulos, que valem 42 − 17 = 25 → r = 5.`,`Volto do a<sub>4</sub> até o a<sub>1</sub> (3 pulos): a<sub>1</sub> = 17 − 15 = 2.`,`a<sub>20</sub> = 2 + 19 × 5 = 2 + 95 = 97. (Conferindo pela fórmula relâmpago: 5n − 3 → 5 × 4 − 3 = 17 ✔.)`], r:`97`}
 ],
 erros: [
  `<b>Errado:</b> 2, 4, 8, … → "soma 2, o próximo é 10". <b>Certo:</b> confira MAIS de uma diferença: as diferenças 2 e 4 não se repetem. É ×2 → o próximo é <b>16</b>.`,
  `<b>Errado:</b> em 30, 26, 22, usar r = 4 na fórmula. <b>Certo:</b> a sequência desce, então r = <b>−4</b>.`,
  `<b>Errado:</b> confundir posição e valor: "qual é o termo 50?" com "em que posição está o 50?". <b>Certo:</b> leia o que é dado: a posição (n) ou o valor (a<sub>n</sub>).`,
  `<b>Errado:</b> casinha de 6 palitos → 10 casinhas = 10 × 6 = 60. <b>Certo:</b> as casas dividem paredes; só entram 5 por casa → 5 × 10 + 1 = <b>51</b>.`,
  `<b>Errado:</b> hoje é segunda; daqui a 100 dias, contar hoje como dia 1. <b>Certo:</b> o resto 2 significa andar 2 dias a partir de hoje → quarta-feira.`
 ],
 resumo: [
  `Diferenças iguais → PA (r). Divisões iguais → PG.`,
  `a<sub>n</sub> = a<sub>1</sub> + (n − 1)·r = r·n + termo zero.`,
  `Do a<sub>3</sub> ao a<sub>8</sub>: 5 pulos.`,
  `Figuras: tabela → o que entra × n + o que sobra.`,
  `Ciclo → resto da divisão.`,
  `Teste em n = 1 e n = 2.`
 ]
}

};
