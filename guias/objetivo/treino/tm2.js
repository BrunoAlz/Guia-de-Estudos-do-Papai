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
