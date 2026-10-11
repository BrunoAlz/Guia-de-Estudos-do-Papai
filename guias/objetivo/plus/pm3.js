/* REVISÃO TURBINADA · Matemática · M3 (Geometria)
   m-ang · m-pol · m-sem · m-pit · m-circ · m-cart
   Contas conferidas em plus/check_pm3.py */
const PLUS_M3 = {
 'm-ang': {
  base: [
   [`O que é um ângulo`, `É a "abertura" entre duas semirretas que saem do mesmo ponto (o <b>vértice</b>). Medimos em graus: volta completa = 360°, meia-volta = 180°, um quarto de volta = 90° (o canto do caderno). Ex.: às 3 h em ponto, os ponteiros do relógio formam 90°.`],
   [`Os 4 tipos de ângulo`, `<b>Agudo</b>: menor que 90° (ponta fina, ex.: 45°). <b>Reto</b>: exatamente 90° (no desenho vem com um quadradinho). <b>Obtuso</b>: entre 90° e 180° (aberto, ex.: 120°). <b>Raso</b>: 180° (vira uma reta).`],
   [`Complementar (90°) × suplementar (180°)`, `Macete: <b>C vem antes de S</b> no alfabeto, e <b>90 vem antes de 180</b>. Complementares → somam 90° (C de "Canto"); suplementares → somam 180° (S de "Segue reto"). Ex.: 30° e 60° são complementares; 30° e 150° são suplementares.`],
   [`"Complemento de x" e "suplemento de x"`, `É <b>quanto falta</b>: complemento = 90° − x; suplemento = 180° − x. Ex.: complemento de 25° = 65°; suplemento de 25° = 155°. Só ângulos menores que 90° têm complemento.`],
   [`Opostos pelo vértice (OPV)`, `Quando duas retas se cruzam, nascem 4 ângulos: os que ficam "de frente" (um de costas para o outro) são <b>iguais</b>; os vizinhos <b>somam 180°</b>. Ex.: se um mede 35°, os quatro são 35°, 145°, 35° e 145° (total 360°).`],
   [`Ângulos lado a lado numa reta e em volta de um ponto`, `Ângulos encostados que formam uma reta somam <b>180°</b>; ângulos que dão a volta inteira num ponto somam <b>360°</b>. Ex.: numa reta há ângulos de 50°, 70° e x → x = 180 − 120 = 60°.`],
   [`Bissetriz`, `É a semirreta que corta o ângulo <b>exatamente ao meio</b>. Ex.: a bissetriz de 84° forma dois ângulos de 42°.`],
   [`Transversal e paralelas`, `<b>Paralelas</b> nunca se encontram (como os trilhos do trem). A <b>transversal</b> é a reta que corta as duas. Nos 8 ângulos que aparecem, só há 2 medidas (se a transversal não for perpendicular; se for, os 8 medem 90°): os agudos são todos iguais, os obtusos também. Ex.: se um agudo mede 65°, todos os obtusos medem 180 − 65 = 115°.`]
  ],
  jeitos: [
   {n:`Pinte de duas cores`, c:`Com paralelas e transversal, pinte os agudos de azul e os obtusos de vermelho. <b>Mesma cor = iguais. Cores diferentes = somam 180°.</b> Nem precisa lembrar os nomes (alternos, correspondentes…).`,
    ex:`Um agudo mede 3x + 10° e um obtuso mede 5x + 10°. Cores diferentes → 3x + 10 + 5x + 10 = 180 → 8x = 160 → x = 20.<br>Ângulos: 3 · 20 + 10 = <b>70°</b> e 5 · 20 + 10 = <b>110°</b> (70 + 110 = 180 ✓).`},
   {n:`Conte "quanto falta" em degraus`, c:`Para complemento ou suplemento de cabeça, suba até uma dezena redonda e depois até 90 ou 180.`,
    ex:`Complemento de 37°: de 37 até 40 são 3; de 40 até 90 são 50 → 3 + 50 = <b>53°</b>.<br>Suplemento de 128°: de 128 até 130 são 2; de 130 até 180 são 50 → <b>52°</b>.`},
   {n:`Suplemento = complemento + 90`, c:`Para o mesmo ângulo, o suplemento é <b>sempre 90° maior</b> que o complemento (180 − x e 90 − x diferem em 90). Isso resolve muito problema de frase.`,
    ex:`Complemento de 25° = 65°; suplemento = 65 + 90 = <b>155°</b>.<br>"O suplemento é o triplo do complemento": chame o complemento de C. Então C + 90 = 3C → 2C = 90 → C = 45 → o ângulo é 90 − 45 = <b>45°</b>.`},
   {n:`Traduza a frase para x`, c:`"Complemento de x" → (90 − x); "suplemento" → (180 − x); "o dobro" → 2·; "a metade" → ÷ 2; "é" → =. Escreva com parênteses e só depois resolva.`,
    ex:`"Um ângulo é o dobro do seu complemento": x = 2 · (90 − x) → x = 180 − 2x → 3x = 180 → x = <b>60°</b>. Confere: complemento 30°, e 60 = 2 · 30 ✓.`},
   {n:`O "bico" entre paralelas`, c:`Se um ângulo tem o vértice entre duas paralelas (formato de bico/seta), trace uma terceira paralela passando pelo bico. Ela divide o bico em dois alternos internos: <b>bico = soma dos dois ângulos das paralelas</b>.`,
    ex:`O bico faz 35° com a reta de cima e 50° com a reta de baixo → bico = 35 + 50 = <b>85°</b>.`}
  ],
  passo: [
   `<b>Desenhe a figura</b> (ou copie a da prova) e escreva em cima de cada ângulo o que você já sabe.`,
   `Descubra a relação: são <b>iguais</b> (OPV, mesma cor nas paralelas) ou <b>somam</b> 90°, 180° ou 360°?`,
   `Monte a equação: "iguais" → expressão = expressão; "somam" → expressão + expressão = total.`,
   `Resolva e ache x.`,
   `<b>Releia a pergunta</b>: ela quer x ou o ângulo? Substitua x e confira se as medidas fazem sentido (agudo &lt; 90°, obtuso > 90°).`
  ],
  exs: [
   {q:`Duas retas se cruzam. Dois ângulos opostos pelo vértice medem 5x − 20° e 3x + 30°. Quanto medem os quatro ângulos formados?`,
    s:[`Primeiro eu lembro: opostos pelo vértice são iguais. Então 5x − 20 = 3x + 30.`,`Passo os x para um lado e os números para o outro: 5x − 3x = 30 + 20 → 2x = 50 → x = 25.`,`Cada um desses dois ângulos: 5 · 25 − 20 = 105°.`,`Os outros dois são vizinhos deles, então somam 180° com eles: 180 − 105 = 75°.`,`Confiro: 105 + 75 + 105 + 75 = 360° ✓.`],
    r:`105°, 75°, 105° e 75°`},
   {q:`Duas paralelas são cortadas por uma transversal. Um dos ângulos agudos mede x + 40° e um dos obtusos mede 3x. Quanto mede cada um?`,
    s:[`Uso o macete das duas cores: agudo e obtuso têm cores diferentes, então somam 180°.`,`x + 40 + 3x = 180 → 4x = 140 → x = 35.`,`Agudo: 35 + 40 = 75°. Obtuso: 3 · 35 = 105°.`,`Confiro: 75 + 105 = 180 ✓, e 75 é agudo, 105 é obtuso ✓.`],
    r:`75° e 105°`},
   {q:`O dobro do complemento de um ângulo, somado com a metade do suplemento desse mesmo ângulo, dá 150°. Quanto mede o ângulo?`,
    s:[`Traduzo a frase: dobro do complemento = 2 · (90 − x); metade do suplemento = [[180 − x|2]].`,`Equação: 2 · (90 − x) + [[180 − x|2]] = 150.`,`Multiplico tudo por 2 para sumir a fração: 4 · (90 − x) + 180 − x = 300 → 360 − 4x + 180 − x = 300.`,`540 − 5x = 300 → 5x = 240 → x = 48.`,`Confiro: complemento 42° (dobro 84°); suplemento 132° (metade 66°); 84 + 66 = 150 ✓.`],
    r:`48°`}
  ],
  erros: [
   `<b>Errado:</b> complemento de 40° = 140°. <b>Certo:</b> complemento = 90 − 40 = 50°; 140° é o <b>suplemento</b>.`,
   `<b>Errado:</b> achar x = 20 e marcar "20°" como resposta. <b>Certo:</b> substituir x na expressão do ângulo (ex.: 3 · 20 + 10 = 70°).`,
   `<b>Errado:</b> dizer que dois ângulos vizinhos (lado a lado numa reta) são iguais. <b>Certo:</b> vizinhos somam 180°; iguais são os opostos pelo vértice.`,
   `<b>Errado:</b> usar "alternos são iguais" quando as retas NÃO são paralelas. <b>Certo:</b> essas regras só valem se o enunciado garante que as retas são paralelas.`,
   `<b>Errado:</b> supor que um ângulo é reto porque "parece". <b>Certo:</b> só é 90° se tiver o quadradinho ou se o enunciado disser.`
  ],
  resumo: [
   `Agudo &lt; 90° · reto = 90° · obtuso entre 90° e 180° · raso = 180°.`,
   `C antes de S, 90 antes de 180 → complementar 90°, suplementar 180°.`,
   `Retas cruzadas: OPV iguais, vizinhos somam 180°.`,
   `Paralelas: mesma cor (agudo-agudo) = iguais; cores diferentes = 180°.`,
   `Bico entre paralelas = soma dos dois ângulos.`,
   `Achou x? Substitua e responda o que foi pedido.`
  ]
 },

 'm-pol': {
  base: [
   [`Nomes dos polígonos`, `Polígono é uma figura fechada só com lados retos. <table class="tb"><tr><td>3 triângulo</td><td>4 quadrilátero</td><td>5 pentágono</td></tr><tr><td>6 hexágono</td><td>7 heptágono</td><td>8 octógono</td></tr><tr><td>9 eneágono</td><td>10 decágono</td><td>12 dodecágono</td></tr></table>Dica: "hexa" = 6 (hexacampeão), "octo" = 8 (polvo = octopus, 8 braços).`],
   [`Por que o triângulo soma 180°`, `Recorte as três pontas de um triângulo de papel e encoste uma na outra: elas formam uma <b>reta</b>, ou seja, 180°. Ex.: ângulos de 50° e 60° → o terceiro é 180 − 110 = 70°.`],
   [`Por que S = (n − 2) · 180°`, `De um vértice só, trace todas as diagonais: o polígono vira <b>n − 2 triângulos</b> (os dois vizinhos não geram diagonal). Cada triângulo vale 180°. Ex.: pentágono → 5 − 2 = 3 triângulos → 3 · 180 = 540°.`],
   [`Ângulo externo`, `Prolongue um lado para fora: o ângulo entre o prolongamento e o lado vizinho é o <b>externo</b>. Interno + externo = 180° (formam uma reta). No triângulo, o externo = soma dos <b>dois internos que não encostam nele</b>. Ex.: internos 50° e 60° → externo no terceiro vértice = 110° (o interno ali é 70°, e 180 − 70 = 110 ✓).`],
   [`Externos somam sempre 360°`, `Imagine dar a volta no quarteirão: em cada esquina você vira um ângulo externo e, no fim, deu <b>uma volta completa</b> = 360°. Vale para qualquer polígono convexo. Ex.: hexágono regular → cada externo = 360 ÷ 6 = 60°, cada interno = 120°.`],
   [`Diagonais: de onde vem [[n(n − 3)|2]]`, `Diagonal liga dois vértices <b>não vizinhos</b>. De cada vértice saem n − 3 diagonais (não vai para ele mesmo nem para os 2 vizinhos). n · (n − 3) conta cada diagonal duas vezes (uma de cada ponta), por isso ÷ 2. Ex.: heptágono → [[7 · 4|2]] = 14 diagonais.`],
   [`Tipos de triângulo`, `Pelos lados: <b>equilátero</b> (3 iguais, ângulos de 60°), <b>isósceles</b> (2 iguais; os ângulos da base são iguais), <b>escaleno</b> (todos diferentes). Pelos ângulos: <b>acutângulo</b> (3 agudos), <b>retângulo</b> (um de 90°), <b>obtusângulo</b> (um obtuso). Ex.: isósceles com ângulos da base de 65° → vértice = 180 − 130 = 50°.`],
   [`Nem todo trio de lados forma triângulo`, `Cada lado tem de ser <b>menor que a soma dos outros dois</b>. Basta testar o maior. Ex.: 3, 4 e 8 → 3 + 4 = 7, que é menor que 8 → não fecha triângulo. Já 3, 4 e 6 forma (7 > 6).`],
   [`Polígono regular`, `Regular = todos os lados iguais <b>e</b> todos os ângulos iguais. Cada externo = [[360|n]]; cada interno = 180 − externo. Ex.: octógono regular → externo 360 ÷ 8 = 45°, interno 180 − 45 = 135°.`]
  ],
  jeitos: [
   {n:`Comece pelo externo`, c:`Em polígono regular, ache primeiro o externo (360 ÷ n) e depois o interno (180 − externo). É bem mais rápido que (n − 2) · 180 ÷ n. E funciona ao contrário: do interno, ache o externo e depois n = 360 ÷ externo.`,
    ex:`Decágono regular: externo = 360 ÷ 10 = 36° → interno = 180 − 36 = <b>144°</b>.<br>Interno de 156° → externo = 24° → n = 360 ÷ 24 = <b>15 lados</b>.`},
   {n:`A escadinha de 180`, c:`Cada lado a mais soma 180° na soma dos internos: 3 → 180, 4 → 360, 5 → 540, 6 → 720, 7 → 900, 8 → 1 080. Se a questão dá a soma, divida por 180 e some 2.`,
    ex:`Soma 1 260° → 1 260 ÷ 180 = 126 ÷ 18 = 7 → n − 2 = 7 → n = <b>9 lados</b> (eneágono).`},
   {n:`Externo do triângulo = "os dois de longe"`, c:`O ângulo externo de um triângulo é a soma dos dois internos que ficam longe dele. Não precisa achar o terceiro interno.`,
    ex:`Internos de 45° e 75° → externo no outro vértice = 45 + 75 = <b>120°</b>.<br>Externo de 140° e um interno de longe de 60° → o outro interno de longe = 140 − 60 = <b>80°</b>.`},
   {n:`Diagonais: "tire 3, multiplique, corte ao meio"`, c:`Faça n − 3, multiplique por n e divida por 2. Truque: divida por 2 <b>antes</b> o número que for par, para a conta ficar pequena.`,
    ex:`Decágono: 10 · 7 ÷ 2 = 5 · 7 = <b>35</b>.<br>Polígono de 20 lados: 20 · 17 ÷ 2 = 10 · 17 = <b>170</b>.`},
   {n:`Isósceles: tira e divide`, c:`Sabendo o ângulo do vértice (o diferente), tire de 180 e divida por 2 para cada ângulo da base. Sabendo o da base, dobre e tire de 180.`,
    ex:`Vértice 50° → (180 − 50) ÷ 2 = <b>65°</b> cada um na base.<br>Base 72° → vértice = 180 − 144 = <b>36°</b>.`}
  ],
  passo: [
   `<b>Desenhe a figura</b> e marque os ângulos e lados conhecidos (e os iguais, se for isósceles ou regular).`,
   `Pergunte: é triângulo (soma 180°) ou polígono de n lados (soma (n − 2) · 180°)?`,
   `Se for regular, comece pelo externo: 360 ÷ n.`,
   `Se pedir diagonais: [[n(n − 3)|2]], lembrando do ÷ 2.`,
   `Confira: interno + externo = 180° e todos os ângulos de um triângulo somam 180°.`
  ],
  exs: [
   {q:`Os ângulos internos de um triângulo medem x, 2x e 3x. Quanto mede cada um? Que tipo de triângulo é?`,
    s:[`Primeiro eu lembro: os três ângulos de um triângulo somam 180°.`,`x + 2x + 3x = 180 → 6x = 180 → x = 30.`,`Ângulos: 30°, 60° e 90°.`,`Tem um ângulo de 90° → é um triângulo retângulo.`],
    r:`30°, 60° e 90° (triângulo retângulo)`},
   {q:`Num polígono regular, cada ângulo interno é o triplo do ângulo externo. Quantos lados ele tem e quantas diagonais?`,
    s:[`Uso o fato de que interno + externo = 180°. Se o externo é e, o interno é 3e.`,`3e + e = 180 → 4e = 180 → e = 45°.`,`Começo pelo externo: n = 360 ÷ 45 = 8 lados (octógono).`,`Diagonais: 8 · 5 ÷ 2 = 4 · 5 = 20.`],
    r:`8 lados e 20 diagonais`},
   {q:`Um polígono convexo tem o número de diagonais igual ao dobro do número de lados. Qual é a soma dos seus ângulos internos?`,
    s:[`Traduzo: [[n(n − 3)|2]] = 2n.`,`Multiplico por 2: n(n − 3) = 4n. Como n não é zero, divido os dois lados por n: n − 3 = 4 → n = 7.`,`Confiro: heptágono tem 7 · 4 ÷ 2 = 14 diagonais, e 14 = 2 · 7 ✓.`,`Soma dos internos: (7 − 2) · 180 = 5 · 180 = 900°.`],
    r:`900°`}
  ],
  erros: [
   `<b>Errado:</b> diagonais do hexágono = 6 · 3 = 18. <b>Certo:</b> dividir por 2 → 9.`,
   `<b>Errado:</b> soma dos internos = n · 180°. <b>Certo:</b> (n − 2) · 180° (o pentágono tem 540°, e não 900°).`,
   `<b>Errado:</b> achar que a soma dos externos cresce com o número de lados. <b>Certo:</b> é sempre 360°.`,
   `<b>Errado:</b> confundir interno com externo (ex.: dizer que o externo do hexágono regular é 120°). <b>Certo:</b> externo 60°, interno 120°.`,
   `<b>Errado:</b> aceitar qualquer trio de medidas como triângulo. <b>Certo:</b> o maior lado tem de ser menor que a soma dos outros dois.`
  ],
  resumo: [
   `Triângulo: 180° · polígono: (n − 2) · 180°.`,
   `Externos: sempre 360° → regular: externo = 360 ÷ n.`,
   `Interno + externo = 180°.`,
   `Externo do triângulo = soma dos dois internos de longe.`,
   `Diagonais = n · (n − 3) ÷ 2.`,
   `Isósceles: ângulos da base iguais.`
  ]
 },

 'm-sem': {
  base: [
   [`Semelhante × congruente`, `<b>Semelhante</b> = mesma forma, tamanho pode mudar (como dar zoom numa foto). <b>Congruente</b> = mesma forma e mesmo tamanho (razão 1). Ex.: uma foto de 10 cm × 15 cm ampliada para 20 cm × 30 cm é semelhante à original.`],
   [`Lados correspondentes`, `São os lados que ficam <b>de frente para o mesmo ângulo</b> nos dois triângulos. Só se compara lado com seu correspondente. Ex.: se nos dois triângulos o lado oposto ao ângulo de 40° mede 3 e 6, esses dois são correspondentes.`],
   [`Razão de semelhança k`, `k = lado do grande ÷ lado correspondente do pequeno. É o "fator de zoom". Ex.: lados correspondentes 4 cm e 10 cm → k = [[10|4]] = 2,5 (o grande é 2,5 vezes o pequeno).`],
   [`Por que "AA basta"`, `Se dois ângulos são iguais, o terceiro também é, porque todos somam 180°. Ex.: um triângulo com 50° e 60° tem o terceiro de 70°; outro com 50° e 70° tem o terceiro de 60°. Mesmos ângulos → semelhantes.`],
   [`Perímetro × k, área × k²`, `O perímetro é um comprimento, então vai × k. A área é comprimento × comprimento, então vai × k × k = k². Ex.: quadrado de lado 3 → área 9; quadrado de lado 6 (k = 2) → área 36 = 4 · 9.`],
   [`Paralela a um lado gera triângulo semelhante`, `Uma reta paralela a um lado de um triângulo "corta" um triângulo menor semelhante ao grande (ângulos iguais por serem correspondentes). Ex.: DE ∥ BC, AD = 2 e AB = 6 → k = [[2|6]] = [[1|3]]; se BC = 12, então DE = 4.`],
   [`Teorema de Tales`, `Retas paralelas cortadas por duas transversais: os pedaços de uma transversal são proporcionais aos pedaços correspondentes da outra. Ex.: numa transversal, 2 e 3; na outra, 4 e x → [[2|3]] = [[4|x]] → x = 6.`],
   [`Proporção: o "multiplicar cruzado"`, `Se [[a|b]] = [[c|d]], então a · d = b · c. Ex.: [[3|x]] = [[6|10]] → 6x = 30 → x = 5.`]
  ],
  jeitos: [
   {n:`Ache o k e multiplique`, c:`Em vez de montar uma proporção para cada lado, ache o k uma vez só (grande ÷ pequeno) e multiplique todos os lados do pequeno por ele.`,
    ex:`Triângulo de lados 4, 6 e 8; num semelhante, o lado correspondente ao 4 mede 10 → k = 2,5.<br>Outros lados: 6 · 2,5 = <b>15</b> e 8 · 2,5 = <b>20</b>. Perímetro: 18 · 2,5 = <b>45</b> (10 + 15 + 20 = 45 ✓).`},
   {n:`Separe os triângulos`, c:`Quando um triângulo está dentro do outro, desenhe os dois <b>separados</b>, lado a lado, na mesma posição. Assim você não erra o lado do grande, que muitas vezes é a <b>soma</b> de dois pedaços.`,
    ex:`DE ∥ BC, AD = 3, DB = 6, DE = 5. O lado do grande é AB = 3 + 6 = 9 (não 6!).<br>k = 9 ÷ 3 = 3 → BC = 5 · 3 = <b>15</b>.`},
   {n:`Tabela pequeno × grande`, c:`Monte uma tabelinha: uma coluna para o objeto pequeno, outra para o grande; uma linha para altura, outra para sombra. A mesma "conta de zoom" vale nas duas linhas.`,
    ex:`Muro de 3 m faz sombra de 4,5 m; árvore faz sombra de 12 m.<br>Sombra = 1,5 × altura (4,5 ÷ 3 = 1,5) → altura da árvore = 12 ÷ 1,5 = <b>8 m</b>.`},
   {n:`k² na área (e voltar com a raiz)`, c:`Se os lados mudam k vezes, a área muda k² vezes. Se a questão dá a razão das áreas, tire a raiz para achar k.`,
    ex:`Planta na escala 1 : 100 (k = 100): 6 cm² no papel → 6 · 10 000 = 60 000 cm² = <b>6 m²</b> no real.<br>A área ficou 25 vezes maior → k = √{25} = <b>5</b> (lados 5 vezes maiores).`},
   {n:`Tales pelo total`, c:`Se a questão dá o total da outra transversal, some os pedaços conhecidos, ache o k (total ÷ total) e multiplique cada pedaço.`,
    ex:`Pedaços 2, 3 e 5 numa transversal (total 10); a outra tem total 30 → k = 3.<br>Pedaços da outra: <b>6, 9 e 15</b> (6 + 9 + 15 = 30 ✓).`}
  ],
  passo: [
   `<b>Desenhe a figura</b> e marque os ângulos iguais (ângulo reto, ângulo comum, paralelas).`,
   `Justifique a semelhança (quase sempre AA) ou veja se é caso de Tales (paralelas e duas transversais).`,
   `Separe os triângulos e alinhe os lados correspondentes (opostos aos mesmos ângulos).`,
   `Ache k = grande ÷ pequeno (ou monte a proporção).`,
   `Lado e perímetro → × k. Área → × k². Confira se o resultado é maior ou menor do que devia.`
  ],
  exs: [
   {q:`Dois triângulos são semelhantes. Os lados do menor medem 5 cm, 7 cm e 9 cm. O maior lado do triângulo maior mede 27 cm. Qual é o perímetro do triângulo maior?`,
    s:[`Primeiro eu emparelho: o maior lado do grande corresponde ao maior lado do pequeno, 9 cm.`,`k = 27 ÷ 9 = 3.`,`Uso o atalho do perímetro: perímetro do pequeno = 5 + 7 + 9 = 21 → do grande = 21 · 3 = 63 cm.`],
    r:`63 cm`},
   {q:`Para medir um prédio, Lia coloca um espelho no chão. Ela fica a 2 m do espelho, e seus olhos estão a 1,6 m do chão. O espelho está a 30 m da base do prédio, e ela vê o topo do prédio refletido no espelho. Qual é a altura do prédio?`,
    s:[`<b>Desenho</b>: dois triângulos retângulos com o vértice no espelho. O raio de luz bate e volta com o mesmo ângulo, e os dois têm ângulo reto → semelhantes (AA).`,`Tabela: pequeno (Lia): altura 1,6, chão 2. Grande (prédio): altura h, chão 30.`,`k = 30 ÷ 2 = 15 → h = 1,6 · 15 = 24.`],
    r:`24 m`},
   {q:`No triângulo ABC, o segmento DE é paralelo a BC, com D em AB e E em AC. Sabe-se que AD = 4 cm, DB = 6 cm e que a área do triângulo ADE é 8 cm². Qual é a área do triângulo ABC? E a do trapézio DBCE?`,
    s:[`DE ∥ BC → ADE e ABC são semelhantes.`,`Separo os triângulos: o lado do grande é AB = 4 + 6 = 10, não 6.`,`k = 10 ÷ 4 = 2,5 → áreas na razão k² = 2,5 · 2,5 = 6,25.`,`Área de ABC = 8 · 6,25 = 50 cm².`,`Trapézio = grande − pequeno = 50 − 8 = 42 cm².`],
    r:`50 cm² (e o trapézio, 42 cm²)`}
  ],
  erros: [
   `<b>Errado:</b> dividir lados que não se correspondem (o maior de um pelo menor do outro). <b>Certo:</b> compare lados de frente para o mesmo ângulo.`,
   `<b>Errado:</b> com DE ∥ BC, usar DB como lado do grande. <b>Certo:</b> o lado do grande é AB = AD + DB.`,
   `<b>Errado:</b> lado dobrou → área dobrou. <b>Certo:</b> área × k² → quadruplica.`,
   `<b>Errado:</b> na sombra, montar [[altura|sombra]] de um com [[sombra|altura]] do outro. <b>Certo:</b> mantenha a mesma ordem nas duas frações.`
  ],
  resumo: [
   `Semelhantes: ângulos iguais, lados proporcionais.`,
   `AA basta (o terceiro ângulo vem de graça).`,
   `k = grande ÷ pequeno · lado e perímetro × k · área × k².`,
   `Paralela a um lado → triângulo menor semelhante; lado grande = soma dos pedaços.`,
   `Tales: paralelas → pedaços proporcionais.`
  ]
 },

 'm-pit': {
  base: [
   [`Triângulo retângulo, hipotenusa e catetos`, `Triângulo retângulo tem um ângulo de 90° (o quadradinho). Os dois lados que formam o "L" do quadradinho são os <b>catetos</b>. O lado de frente para o quadradinho, que não encosta nele, é a <b>hipotenusa</b>: sempre o maior lado. Ex.: no triângulo 6, 8, 10, a hipotenusa é 10.`],
   [`Quadrados de 1 a 20 (decore!)`, `<table class="tb"><tr><td>1² = 1</td><td>2² = 4</td><td>3² = 9</td><td>4² = 16</td><td>5² = 25</td></tr><tr><td>6² = 36</td><td>7² = 49</td><td>8² = 64</td><td>9² = 81</td><td>10² = 100</td></tr><tr><td>11² = 121</td><td>12² = 144</td><td>13² = 169</td><td>14² = 196</td><td>15² = 225</td></tr><tr><td>16² = 256</td><td>17² = 289</td><td>18² = 324</td><td>19² = 361</td><td>20² = 400</td></tr></table>`],
   [`Raiz quadrada é a volta do quadrado`, `√{144} = 12 porque 12² = 144. Se não for exata, fica entre dois inteiros: √{50} está entre 7 (49) e 8 (64), bem perto de 7. Vale decorar: √{2} ≈ 1,41 e √{3} ≈ 1,73.`],
   [`Pitágoras com áreas`, `Desenhe um quadrado sobre cada lado: a área do quadrado da hipotenusa = soma das áreas dos quadrados dos catetos. Ex.: 3-4-5 → 9 + 16 = 25.`],
   [`Achar hipotenusa × achar cateto`, `Quer a <b>hipotenusa</b> (a maior)? <b>Some</b> os quadrados e tire a raiz. Quer um <b>cateto</b>? <b>Subtraia</b>: hipotenusa² − outro cateto². Ex.: catetos 9 e 12 → 81 + 144 = 225 → 15. Hipotenusa 10 e cateto 8 → 100 − 64 = 36 → 6.`],
   [`Ternos pitagóricos`, `Trios inteiros que já "fecham" Pitágoras: <b>3-4-5</b>, <b>5-12-13</b>, <b>8-15-17</b>, <b>7-24-25</b>. Multiplicando o trio todo pelo mesmo número, continua valendo: 6-8-10, 9-12-15, 12-16-20, 15-20-25, 10-24-26, 16-30-34.`],
   [`Diagonal do quadrado: ℓ√{2}`, `A diagonal divide o quadrado em dois triângulos retângulos com catetos ℓ e ℓ: d² = ℓ² + ℓ² = 2ℓ² → d = ℓ√{2}. Ex.: lado 5 → d = 5√{2} ≈ 5 · 1,41 = 7,05.`],
   [`Altura do equilátero: [[ℓ√{3}|2]]`, `A altura cai no meio da base, formando um triângulo retângulo com hipotenusa ℓ e cateto [[ℓ|2]]: h² = ℓ² − [[ℓ²|4]] = [[3ℓ²|4]] → h = [[ℓ√{3}|2]]. Ex.: lado 6 → h = 3√{3} ≈ 5,19.`],
   [`Relações métricas (com a altura h)`, `A altura h relativa à hipotenusa a divide em m (encostado no cateto b) e n (encostado no cateto c), com a = m + n. Então: h² = m · n · b² = a · m · c² = a · n · a · h = b · c. Ex.: no 3-4-5 (a = 5, b = 4, c = 3): m = [[16|5]] = 3,2; n = [[9|5]] = 1,8; h = [[12|5]] = 2,4. Confere: 2,4² = 5,76 = 3,2 · 1,8 ✓.`]
  ],
  jeitos: [
   {n:`Encolha o triângulo`, c:`Se os lados têm um fator comum, divida por ele, reconheça o terno e multiplique de volta. Conta grande vira conta pequena.`,
    ex:`Catetos 30 e 40 → ÷ 10 → 3 e 4 → hipotenusa 5 → × 10 = <b>50</b>.<br>Catetos 20 e 48 → ÷ 4 → 5 e 12 → 13 → × 4 = <b>52</b>.`},
   {n:`Reconheça o terno disfarçado`, c:`Antes de fazer conta, olhe se os números são um terno multiplicado. Vale também quando falta um cateto.`,
    ex:`Hipotenusa 26 e cateto 10 → é o 5-12-13 vezes 2 → outro cateto = <b>24</b>.<br>Hipotenusa 34 e cateto 16 → é o 8-15-17 vezes 2 → outro cateto = <b>30</b>.`},
   {n:`Cateto pela diferença de quadrados`, c:`a² − b² = (a − b) · (a + b). Quando a hipotenusa e o cateto são números próximos, fica muito fácil.`,
    ex:`Hipotenusa 25, cateto 24: (25 − 24) · (25 + 24) = 1 · 49 = 49 → <b>7</b>.<br>Hipotenusa 41, cateto 40: 1 · 81 = 81 → <b>9</b>.<br>Hipotenusa 17, cateto 15: 2 · 32 = 64 → <b>8</b>.`},
   {n:`Quadrado de número terminado em 5`, c:`Pegue o número sem o 5, multiplique pelo seguinte e escreva 25 no final.`,
    ex:`15² → 1 · 2 = 2 → <b>225</b>.<br>25² → 2 · 3 = 6 → <b>625</b>.<br>35² → 3 · 4 = 12 → <b>1 225</b>.`},
   {n:`Altura relativa à hipotenusa = [[b · c|a]]`, c:`Como a · h = b · c (as duas contas dão o dobro da área), a altura é catetos multiplicados ÷ hipotenusa.`,
    ex:`Catetos 9 e 12 → hipotenusa 15 (3-4-5 × 3) → h = [[9 · 12|15]] = [[108|15]] = <b>7,2</b>.`},
   {n:`Estime e elimine`, c:`A hipotenusa é maior que cada cateto e menor que a soma deles. Um quadrado perfeito nunca termina em 2, 3, 7 ou 8. Use isso para cortar alternativas.`,
    ex:`Catetos 6 e 8: a resposta está entre 8 e 14 → corta "5" e "14"; é <b>10</b>.<br>√{200}: 14² = 196, então √{200} ≈ <b>14,1</b>.`}
  ],
  passo: [
   `<b>Desenhe a figura</b> e marque o quadradinho do ângulo reto.`,
   `Ache a <b>hipotenusa</b>: o lado de frente para o quadradinho.`,
   `Olhe se é um terno conhecido (ou um múltiplo). Se for, a resposta sai sem conta.`,
   `Senão: quer hipotenusa → soma os quadrados; quer cateto → subtrai. Tire a raiz no final.`,
   `Se aparecer altura relativa à hipotenusa ou projeções, use h² = m · n, b² = a · m, c² = a · n ou a · h = b · c.`,
   `Confira: a hipotenusa tem de ser o maior lado.`
  ],
  exs: [
   {q:`Um terreno retangular mede 24 m por 7 m. Uma cerca reta vai ligar dois cantos opostos. Quanto mede a cerca?`,
    s:[`<b>Desenho</b>: a cerca é a diagonal; ela forma um triângulo retângulo com os lados 24 e 7 (catetos).`,`Reconheço o terno 7-24-25 → hipotenusa 25.`,`Se não lembrasse: 49 + 576 = 625 = 25².`],
    r:`25 m`},
   {q:`A diagonal de um quadrado mede 10 cm. Qual é a área desse quadrado?`,
    s:[`Primeiro eu desenho: a diagonal é a hipotenusa de um triângulo com dois catetos iguais ao lado ℓ.`,`Pitágoras: ℓ² + ℓ² = 10² → 2ℓ² = 100 → ℓ² = 50.`,`Sacada: a área do quadrado É ℓ². Nem preciso achar o lado!`],
    r:`50 cm²`},
   {q:`Num triângulo retângulo, a altura relativa à hipotenusa mede 12 cm e divide a hipotenusa em dois pedaços; um deles (m) mede 16 cm. Quanto medem a hipotenusa e os dois catetos?`,
    s:[`Uso h² = m · n: 144 = 16 · n → n = 9.`,`Hipotenusa: a = m + n = 16 + 9 = 25.`,`Cateto do lado de m: b² = a · m = 25 · 16 = 400 → b = 20.`,`Cateto do lado de n: c² = a · n = 25 · 9 = 225 → c = 15.`,`Confiro: 15-20-25 é o 3-4-5 vezes 5 ✓, e a · h = 25 · 12 = 300 = b · c = 20 · 15 ✓.`],
    r:`Hipotenusa 25 cm; catetos 20 cm e 15 cm`}
  ],
  erros: [
   `<b>Errado:</b> hipotenusa 13 e cateto 5 → 169 + 25. <b>Certo:</b> para cateto, subtrai: 169 − 25 = 144 → 12.`,
   `<b>Errado:</b> √{9 + 16} = 3 + 4 = 7. <b>Certo:</b> √{25} = 5 (não dá para "separar" a raiz de uma soma).`,
   `<b>Errado:</b> parar no 169 e marcar 169. <b>Certo:</b> falta a raiz: √{169} = 13.`,
   `<b>Errado:</b> usar como hipotenusa o lado que "está deitado". <b>Certo:</b> hipotenusa é sempre a oposta ao ângulo reto (e a maior).`,
   `<b>Errado:</b> h = m · n. <b>Certo:</b> h² = m · n (com m = 4 e n = 9, h = 6, e não 36).`
  ],
  resumo: [
   `a² = b² + c² · hipotenusa = maior, de frente para o ângulo de 90°.`,
   `Hipotenusa → soma · cateto → subtrai · raiz no final.`,
   `Ternos: 3-4-5, 5-12-13, 8-15-17, 7-24-25 (e múltiplos).`,
   `Quadrado: d = ℓ√{2} · equilátero: h = [[ℓ√{3}|2]].`,
   `h² = m·n · b² = a·m · c² = a·n · a·h = b·c.`
  ]
 },

 'm-circ': {
  base: [
   [`Circunferência × círculo`, `<b>Circunferência</b> é só a linha da borda (o aro de um pneu). <b>Círculo</b> é a região inteira, com "recheio" (a pizza). Comprimento é da circunferência; área é do círculo.`],
   [`Raio, diâmetro e corda`, `<b>Raio</b>: do centro até a borda. <b>Diâmetro</b>: atravessa passando pelo centro = 2 raios. <b>Corda</b>: qualquer segmento ligando dois pontos da borda; o diâmetro é a maior corda. Ex.: raio 7 cm → diâmetro 14 cm.`],
   [`A volta inteira vale 360°`, `Os arcos se medem em graus, como os ângulos. Ex.: o relógio tem 12 horas na volta → cada hora corresponde a 360 ÷ 12 = 30°.`],
   [`Ângulo central = arco`, `Vértice <b>no centro</b>. Ele mede exatamente o arco que "abraça". Ex.: pizza em 6 fatias iguais → cada fatia tem ângulo central e arco de 360 ÷ 6 = 60°.`],
   [`Ângulo inscrito = metade do arco`, `Vértice <b>na borda</b>, com os dois lados sendo cordas. Mede a metade do arco que fica "dentro" da abertura dele. Ex.: arco de 140° → inscrito de 70°.`],
   [`Inscritos no mesmo arco são iguais`, `Como pessoas sentadas na mesma arquibancada olhando o palco: todos os inscritos que olham o mesmo arco têm a mesma medida. Ex.: se um deles mede 35°, todos medem 35°.`],
   [`Semicírculo → 90°`, `Se o inscrito olha um <b>diâmetro</b>, o arco é 180° → inscrito = 90°. Todo triângulo com um lado sendo diâmetro e o outro vértice na borda é <b>retângulo</b>. Ex.: nesse triângulo, se um ângulo agudo mede 25°, o outro mede 90 − 25 = 65°.`],
   [`Comprimento C = 2πr`, `π ≈ 3,14 é "quantas vezes o diâmetro cabe na volta": um pouco mais de 3. Por isso C = π · d = 2πr. Ex.: diâmetro 10 cm → C ≈ 3,14 · 10 = 31,4 cm.`],
   [`Comprimento de um arco`, `É a fração da volta: arco de α° = [[α|360]] · 2πr. Ex.: arco de 90° (um quarto) num círculo de raio 10 cm → [[1|4]] · 62,8 = 15,7 cm (π ≈ 3,14).`]
  ],
  jeitos: [
   {n:`O centro vê o dobro`, c:`Quem está no centro (central) vê o arco inteiro; quem está na borda (inscrito) vê só a metade. Para ir da borda ao centro, dobre; do centro à borda, divida por 2.`,
    ex:`Inscrito de 40° → central = <b>80°</b> → arco = <b>80°</b>.<br>Arco de 110° → inscrito = <b>55°</b>.`},
   {n:`Dois raios = triângulo isósceles`, c:`Ligando o centro a dois pontos da borda, você ganha dois lados iguais (raios). Os ângulos da base desse triângulo são iguais.`,
    ex:`Ângulo central de 100° → cada ângulo da base = (180 − 100) ÷ 2 = <b>40°</b>.`},
   {n:`Fração da volta`, c:`Para arco em centímetros, transforme o ângulo em fração de 360 (simplificando) e aplique na volta inteira.`,
    ex:`Arco de 60° com r = 6 (π ≈ 3): volta = 2 · 3 · 6 = 36; 60° é [[1|6]] da volta → 36 ÷ 6 = <b>6</b>.<br>Arco de 45° com r = 4 (π ≈ 3,14): volta = 25,12; 45° é [[1|8]] → <b>3,14</b>.`},
   {n:`Viu diâmetro? Põe o quadradinho`, c:`Triângulo inscrito com um lado no diâmetro tem 90° no vértice oposto. Marque o quadradinho e use Pitágoras.`,
    ex:`Diâmetro 10 e um lado 6 → o outro lado é cateto: 100 − 36 = 64 → <b>8</b> (o 3-4-5 vezes 2).`},
   {n:`Quadrilátero inscrito: opostos somam 180°`, c:`Num quadrilátero com os 4 vértices na circunferência, dois ângulos opostos olham, juntos, a volta inteira (360°). Como cada um é metade do seu arco, somam 180°.`,
    ex:`Um ângulo mede 110° → o oposto mede 180 − 110 = <b>70°</b>.`},
   {n:`Voltas da roda`, c:`Uma volta da roda anda exatamente um comprimento C. Distância = voltas × C, e voltas = distância ÷ C. Cuidado com as unidades!`,
    ex:`Roda de raio 0,5 m (π ≈ 3): C = 2 · 3 · 0,5 = 3 m; 200 voltas = <b>600 m</b>.<br>Percorreu 1,2 km = 1 200 m → 1 200 ÷ 3 = <b>400 voltas</b>.`}
  ],
  passo: [
   `<b>Desenhe a figura</b>: marque o centro O e veja onde está o vértice do ângulo (no centro ou na borda?).`,
   `Ache o arco que o ângulo "olha" (o que fica dentro da abertura).`,
   `Central = arco; inscrito = metade do arco.`,
   `Tem diâmetro como lado? Ângulo de 90° → Pitágoras ou soma 180° no triângulo.`,
   `Se pedir comprimento: C = 2πr (atenção: raio, não diâmetro) e use o π que o enunciado mandar.`
  ],
  exs: [
   {q:`Qual é o menor ângulo formado pelos ponteiros de um relógio às 4 h em ponto?`,
    s:[`Primeiro eu lembro: 12 horas dão a volta de 360°, então cada hora vale 30°.`,`Às 4 h, o ponteiro grande está no 12 e o pequeno no 4: são 4 "horas" de distância.`,`4 · 30 = 120°.`],
    r:`120°`},
   {q:`O quadrilátero ABCD tem os quatro vértices sobre uma circunferência. Os ângulos dos vértices A e C (opostos) medem 3x + 10° e 2x + 20°. Quanto mede cada um?`,
    s:[`Uso o macete: em quadrilátero inscrito, ângulos opostos somam 180°.`,`3x + 10 + 2x + 20 = 180 → 5x + 30 = 180 → 5x = 150 → x = 30.`,`A = 3 · 30 + 10 = 100°; C = 2 · 30 + 20 = 80°.`,`Confiro: 100 + 80 = 180 ✓.`],
    r:`A = 100° e C = 80°`},
   {q:`Um triângulo ABC está inscrito numa circunferência de raio 5 cm, e o lado AB é um diâmetro. Sabendo que AC = 8 cm, calcule BC, a área do triângulo e o comprimento da circunferência (π ≈ 3,14).`,
    s:[`<b>Desenho</b>: AB é diâmetro → AB = 2 · 5 = 10 cm, e o ângulo em C é 90°.`,`AB é a hipotenusa. Cateto que falta: 100 − 64 = 36 → BC = 6 cm (terno 6-8-10).`,`Área do triângulo retângulo = cateto × cateto ÷ 2 = 6 · 8 ÷ 2 = 24 cm².`,`Comprimento: C = 2 · 3,14 · 5 = 31,4 cm.`],
    r:`BC = 6 cm, área 24 cm² e C = 31,4 cm`}
  ],
  erros: [
   `<b>Errado:</b> inscrito = dobro do arco. <b>Certo:</b> inscrito = metade; quem é o dobro do inscrito é o central.`,
   `<b>Errado:</b> comprimento = πr². <b>Certo:</b> comprimento = 2πr; πr² é a área do círculo.`,
   `<b>Errado:</b> colocar o diâmetro no lugar do r em 2πr (dá o dobro). <b>Certo:</b> C = 2πr = π · d.`,
   `<b>Errado:</b> tratar como central um ângulo com vértice na borda. <b>Certo:</b> olhe onde está o vértice: centro → central; borda → inscrito.`
  ],
  resumo: [
   `Diâmetro = 2 raios · volta = 360°.`,
   `Central = arco · inscrito = metade do arco.`,
   `Inscrito no diâmetro = 90° → Pitágoras.`,
   `Quadrilátero inscrito: opostos somam 180°.`,
   `C = 2πr · arco = fração da volta.`
  ]
 },

 'm-cart': {
  base: [
   [`Os eixos e a origem`, `O <b>eixo x</b> é a reta horizontal (deitada); o <b>eixo y</b> é a vertical (em pé). Eles se cruzam na <b>origem</b> (0, 0). Para a direita e para cima: positivo; para a esquerda e para baixo: negativo.`],
   [`Ler um ponto (x, y)`, `x vem antes de y no alfabeto e no par: primeiro ande na horizontal (x), depois na vertical (y), sempre saindo da origem. Ex.: (3, −2) → 3 para a direita e 2 para baixo.`],
   [`Os quatro quadrantes`, `Numerados no sentido anti-horário, começando em cima à direita: <table class="tb"><tr><td>2º (−, +)</td><td>1º (+, +)</td></tr><tr><td>3º (−, −)</td><td>4º (+, −)</td></tr></table>Ex.: (−5, 2) está no 2º quadrante.`],
   [`Ponto em cima de um eixo`, `Se uma coordenada é zero, o ponto fica <b>sobre um eixo</b> e não pertence a nenhum quadrante. Ex.: (5, 0) está no eixo x; (0, −3) está no eixo y.`],
   [`Distância na mesma linha`, `Mesma altura (mesmo y)? A distância é a diferença dos x. Mesma coluna (mesmo x)? Diferença dos y. Ex.: (−2, 4) e (5, 4) → de −2 até 5 são 7 unidades (2 até o zero + 5 depois dele).`],
   [`Ponto médio = média`, `O meio do caminho tem como coordenadas a média dos x e a média dos y. Ex.: (1, 3) e (9, 7) → ([[1 + 9|2]], [[3 + 7|2]]) = (5, 5).`],
   [`Distância = Pitágoras`, `Ligue os dois pontos e desenhe o "degrau": a parte horizontal (Δx) e a vertical (Δy) são os catetos; a distância é a hipotenusa. Ex.: (2, −1) e (5, 3) → Δx = 3, Δy = 4 → d = 5.`],
   [`Simetria nos eixos`, `Refletir no eixo x troca o sinal do y; refletir no eixo y troca o sinal do x. Ex.: o simétrico de (3, 4) em relação ao eixo x é (3, −4); em relação ao eixo y é (−3, 4).`]
  ],
  jeitos: [
   {n:`Rascunho de quadradinhos`, c:`Desenhe os eixos rapidinho, marque os pontos e complete o triângulo retângulo. Contar quadradinhos evita erro de sinal.`,
    ex:`A(1, 1) e B(4, 5): do A ande 3 para a direita e 4 para cima → catetos 3 e 4 → distância <b>5</b>.`},
   {n:`Atravessou o zero? Some os pedaços`, c:`Quando um ponto tem coordenada negativa e o outro positiva, a diferença é a soma das distâncias até o zero (ou "maior menos menor" com cuidado no sinal).`,
    ex:`De x = −3 até x = 4: 3 + 4 = <b>7</b> (= 4 − (−3)).<br>De y = −6 até y = −1: os dois são negativos → 6 − 1 = <b>5</b>.`},
   {n:`Ponto médio = meio passo`, c:`Em vez de somar e dividir, veja quanto anda de um ponto ao outro e dê só a metade do passo.`,
    ex:`A(2, 1) e B(10, 7): Δx = 8 → metade 4 → 2 + 4 = 6; Δy = 6 → metade 3 → 1 + 3 = 4 → M = <b>(6, 4)</b>.`},
   {n:`Achar a outra ponta: repita o passo`, c:`Se conhece uma ponta A e o ponto médio M, o passo de A até M é igual ao passo de M até B.`,
    ex:`A(1, 2) e M(4, 5): o passo é +3 em x e +3 em y → B = (4 + 3, 5 + 3) = <b>(7, 8)</b>.`},
   {n:`Terno na distância`, c:`Achou Δx e Δy? Veja se formam um terno (ou múltiplo) antes de elevar ao quadrado.`,
    ex:`Δx = 5, Δy = 12 → <b>13</b>.<br>Δx = 9, Δy = 12 → 3-4-5 vezes 3 → <b>15</b>.`}
  ],
  passo: [
   `<b>Desenhe</b> os eixos e marque os pontos (x primeiro, y depois).`,
   `Quadrante? Olhe só os sinais de x e de y.`,
   `Ponto médio? Média dos x e média dos y (ou meio passo).`,
   `Distância? Ache Δx e Δy (cuidado ao atravessar o zero), desenhe o triângulo e use Pitágoras ou um terno.`,
   `Confira no desenho se a resposta faz sentido (o ponto médio fica entre os dois; a distância é maior que Δx e que Δy).`
  ],
  exs: [
   {q:`Em que quadrante está o ponto P(−6, −8)? Qual é a distância de P até a origem?`,
    s:[`Sinais: x negativo e y negativo → 3º quadrante.`,`Da origem até P: anda 6 na horizontal e 8 na vertical → catetos 6 e 8.`,`Reconheço o 6-8-10 (3-4-5 vezes 2) → distância 10.`],
    r:`3º quadrante; distância 10`},
   {q:`Os pontos A(1, 1), B(7, 1) e C(7, 9) são vértices de um triângulo. Qual é o perímetro e a área desse triângulo?`,
    s:[`<b>Desenho</b>: A e B têm o mesmo y → AB é horizontal: 7 − 1 = 6. B e C têm o mesmo x → BC é vertical: 9 − 1 = 8.`,`Horizontal com vertical → ângulo reto em B. AC é a hipotenusa: 6-8-10 → AC = 10.`,`Perímetro = 6 + 8 + 10 = 24.`,`Área = 6 · 8 ÷ 2 = 24.`],
    r:`Perímetro 24 e área 24 (unidades de comprimento e de área)`},
   {q:`Dados A(−2, 3) e B(4, −5), encontre o ponto médio M do segmento AB e a medida de AM.`,
    s:[`Ponto médio: ([[−2 + 4|2]], [[3 + (−5)|2]]) = ([[2|2]], [[−2|2]]) = (1, −1).`,`Para AM, posso achar AB e dividir por 2: Δx = 4 − (−2) = 6; Δy = 3 − (−5) = 8 → AB = 10 (6-8-10).`,`AM = metade de AB = 5.`,`Confiro direto: de A(−2, 3) a M(1, −1) → Δx = 3, Δy = 4 → 5 ✓.`],
    r:`M(1, −1) e AM = 5`}
  ],
  erros: [
   `<b>Errado:</b> marcar (2, 5) subindo 2 e andando 5. <b>Certo:</b> primeiro x (horizontal), depois y: 2 para a direita, 5 para cima.`,
   `<b>Errado:</b> distância de x = −3 até x = 5 é 2. <b>Certo:</b> é 5 − (−3) = 8.`,
   `<b>Errado:</b> distância = Δx + Δy (6 + 8 = 14). <b>Certo:</b> é a hipotenusa: √{36 + 64} = 10.`,
   `<b>Errado:</b> ponto médio = (x<sub>2</sub> − x<sub>1</sub>) ÷ 2. <b>Certo:</b> é a média: (x<sub>1</sub> + x<sub>2</sub>) ÷ 2.`,
   `<b>Errado:</b> dizer que (0, 4) está no 1º quadrante. <b>Certo:</b> está sobre o eixo y, em nenhum quadrante.`
  ],
  resumo: [
   `(x, y): primeiro anda, depois sobe/desce.`,
   `Quadrantes anti-horário: 1º (+,+) · 2º (−,+) · 3º (−,−) · 4º (+,−).`,
   `Ponto médio = média dos x, média dos y.`,
   `Distância = Pitágoras com Δx e Δy.`,
   `Atravessou o zero → some as partes.`
  ]
 }
};
