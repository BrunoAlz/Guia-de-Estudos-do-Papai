/* REVISÃO TURBINADA · Matemática · M4 (Grandezas e medidas) e M5 (Estatística, probabilidade e contagem)
   Contas conferidas por plus/check_pm45.py */
const PLUS_M45 = {

/* ============================== m-area ============================== */
'm-area': {
 base: [
  [`Perímetro × área`, `<b>Perímetro</b> é o tamanho da volta: some os lados (resposta em cm, m…). <b>Área</b> é quantos quadradinhos de 1 × 1 cabem dentro (resposta em cm², m²…). Retângulo 5 cm × 3 cm: perímetro = 5 + 3 + 5 + 3 = 16 cm; área = 15 quadradinhos = 15 cm².`],
  [`Por que retângulo é base × altura`, `Os quadradinhos formam fileiras: 3 fileiras de 5 quadradinhos = 3 × 5 = 15. Multiplicar é só um jeito rápido de contar fileiras iguais.`],
  [`Altura é sempre "em pé" (forma 90° com a base)`, `A altura é a distância reta entre a base e o lado oposto, como um prumo. O lado inclinado <b>não</b> é a altura. Num paralelogramo de base 8, lado inclinado 5 e altura 4, a área é 8 × 4 = 32 (e não 8 × 5 = 40).`],
  [`Paralelogramo vira retângulo`, `Corte o triângulo de uma ponta e cole na outra ponta: aparece um retângulo com a <b>mesma base e a mesma altura</b>. Por isso a área do paralelogramo também é base × altura. Base 9, altura 4 → 36.`],
  [`Triângulo = metade`, `Dois triângulos iguais, um girado, se encaixam e formam um paralelogramo. Então o triângulo é <b>metade</b> de base × altura. Base 7 e altura 6 → [[7 × 6|2]] = [[42|2]] = 21.`],
  [`Trapézio = média das bases × altura`, `Encaixe dois trapézios iguais (um de cabeça para baixo): forma um paralelogramo de base B + b. O trapézio é metade dele: [[(B + b)|2]] × h. E [[B + b|2]] é a <b>média</b> das bases, a "largura média" do trapézio. Bases 12 e 8, altura 5 → média 10 → 10 × 5 = 50.`],
  [`Círculo: o que é o π`, `π ≈ 3,14 é quantas vezes o diâmetro cabe na volta do círculo (um pouco mais de 3 vezes). Volta (comprimento) = 2πr. Área = πr²: dá para imaginar "um pouco mais que 3 quadrados de lado r". Raio 10 → área ≈ 3,14 × 100 = 314; volta ≈ 2 × 3,14 × 10 = 62,8.`],
  [`Quadrados que você precisa saber de cor`, `11² = 121 · 12² = 144 · 13² = 169 · 14² = 196 · 15² = 225 · 20² = 400 · 25² = 625. Eles aparecem em área de quadrado e em πr² o tempo todo.`]
 ],
 jeitos: [
  {n:`Cortar ou subtrair`, c:`Figura esquisita? Ou você <b>corta</b> em pedaços conhecidos e soma, ou completa até um retângulo grande e <b>subtrai</b> o que sobra. Escolha o caminho com menos contas; se der tempo, faça os dois para conferir.`,
   ex:`Figura em L: retângulo de 10 × 8 sem um canto de 4 × 3.<br>Subtraindo: 10 × 8 − 4 × 3 = 80 − 12 = <b>68</b>.<br>Cortando: parte de baixo 10 × 5 = 50; parte de cima 6 × 3 = 18 → 50 + 18 = <b>68</b>. Bateu!`},
  {n:`Trapézio pela média das bases`, c:`Em vez de decorar [[(B + b) × h|2]], faça a média das bases primeiro (fica um número só) e multiplique pela altura.`,
   ex:`Bases 15 e 9, altura 6 → média [[15 + 9|2]] = 12 → 12 × 6 = <b>72</b>.<br>Bases 7 e 5, altura 10 → média 6 → 6 × 10 = <b>60</b>.`},
  {n:`Divida por 2 antes`, c:`No triângulo, corte pela metade o número que for par <b>antes</b> de multiplicar. A conta fica pequena.`,
   ex:`Base 14, altura 9 → 7 × 9 = <b>63</b>.<br>Base 25, altura 8 → 25 × 4 = <b>100</b>.`},
  {n:`Lado × k → área × k²`, c:`Se todas as medidas de uma figura são multiplicadas por k, a área fica multiplicada por k × k. Dobrou o lado → área ×4. Triplicou → ×9. Lado pela metade → área ÷4. Vale para círculo também (com o raio).`,
   ex:`Quadrado de lado 6: área 36. Lado 12 (dobro): área 144 = 4 × 36.<br>Círculo de raio 3: 9π. Raio 6: 36π, que é <b>4 vezes</b> mais.<br>Triângulo de área 10 com base e altura triplicadas: 10 × 9 = <b>90</b>.`},
  {n:`π só no final (×3,14 = ×3 + ×0,14)`, c:`Calcule tudo deixando o π "guardado" (ex.: 25π) e só no fim troque pelo valor que a prova mandar. Para multiplicar por 3,14 de cabeça: multiplique por 3, depois por 0,14, e some.`,
   ex:`Raio 20 → 400π → 400 × 3 = 1 200 e 400 × 0,14 = 56 → <b>1 256</b>.<br>Semicírculo de raio 4 → [[16π|2]] = 8π → 8 × 3,14 = 24 + 1,12 = <b>25,12</b>.`},
  {n:`Mesmo perímetro, áreas diferentes`, c:`Perímetro igual <b>não</b> significa área igual. Com uma cerca de tamanho fixo, a maior área retangular é a do <b>quadrado</b>.`,
   ex:`Perímetro 20 (base + altura = 10): 1 × 9 = 9 · 4 × 6 = 24 · 5 × 5 = <b>25</b> (o maior).`}
 ],
 passo: [
  `Desenhe a figura (ou rabisque em cima da dela) e escreva as medidas.`,
  `Pergunte: é a volta (perímetro) ou o espaço de dentro (área)?`,
  `Figura composta? Decida: cortar e somar, ou subtrair o buraco.`,
  `Confira se é raio ou diâmetro e se a altura está "em pé".`,
  `Deixe tudo na mesma unidade antes de multiplicar.`,
  `Responda com a unidade certa (cm ou cm²) e veja se o tamanho faz sentido.`
 ],
 exs: [
  {q:`Um paralelogramo tem base 12 cm, lados inclinados de 7 cm e altura 5 cm. Qual é sua área e qual é seu perímetro?`,
   s:[`Primeiro eu separo: área usa base × altura "em pé"; perímetro soma os lados.`,`Área: 12 × 5 = 60 cm² (o 7 não entra, ele é inclinado).`,`Perímetro: 12 + 7 + 12 + 7 = 2 × 19 = 38 cm.`],
   r:`Área 60 cm² e perímetro 38 cm`},
  {q:`Uma bandeira retangular mede 60 cm × 40 cm. Nela há um triângulo azul com um lado ocupando todo o lado esquerdo (40 cm) e o vértice oposto no meio do lado direito. Qual é a área da parte que não é azul?`,
   s:[`Desenho: o triângulo tem base 40 (o lado esquerdo) e altura 60 (a distância até o lado direito).`,`Triângulo: [[40 × 60|2]] = 20 × 60 = 1 200 cm² (dividi por 2 antes).`,`Retângulo inteiro: 60 × 40 = 2 400 cm².`,`Parte não azul: 2 400 − 1 200 = 1 200 cm². Repare: o triângulo é exatamente metade do retângulo!`],
   r:`1 200 cm²`},
  {q:`Uma pizzaria vende pizza grande de 30 cm de diâmetro por R$ 36,00 e pizza brotinho de 15 cm de diâmetro por R$ 12,00. Qual compensa mais?`,
   s:[`O diâmetro da grande é o dobro do da brotinho. Uso o macete: medida ×2 → área ×4.`,`Então uma grande tem a mesma quantidade de pizza que 4 brotinhos.`,`4 brotinhos custam 4 × 12 = R$ 48,00; a grande custa R$ 36,00.`,`Quem pensa "o dobro do tamanho vale o dobro do preço" erra: a grande compensa muito mais.`],
   r:`A grande (equivale a 4 brotinhos, que custariam R$ 48,00)`}
 ],
 erros: [
  `<b>Errado:</b> usar o lado inclinado como altura (8 × 5 no paralelogramo). <b>Certo:</b> altura é a medida "em pé", a 90° da base.`,
  `<b>Errado:</b> lado dobrou → área dobrou. <b>Certo:</b> área fica 4 vezes maior (2 × 2).`,
  `<b>Errado:</b> esquecer o ÷ 2 do triângulo ou do trapézio. <b>Certo:</b> triângulo é metade; trapézio usa a média das bases.`,
  `<b>Errado:</b> responder área em cm ou perímetro em cm². <b>Certo:</b> volta → cm; espaço de dentro → cm².`,
  `<b>Errado:</b> usar 2πr para área. <b>Certo:</b> πr² é área; 2πr é a volta.`
 ],
 resumo: [
  `Perímetro = volta (cm) · área = quadradinhos (cm²).`,
  `Paralelogramo = retângulo "torto" → b × h.`,
  `Triângulo = metade · trapézio = média das bases × h.`,
  `Círculo: πr² área · 2πr volta.`,
  `Composta: corte e some, ou subtraia o buraco.`,
  `Lado ×2 → área ×4 · lado ×3 → área ×9.`
 ]
},

/* ============================== m-vol ============================== */
'm-vol': {
 base: [
  [`Volume = cubinhos que cabem`, `Volume mede quantos cubinhos de 1 × 1 × 1 cabem dentro, em unidades cúbicas (cm³, m³). Caixa de 4 × 3 × 2: o chão tem 4 × 3 = 12 cubinhos; são 2 andares → 24 cm³.`],
  [`Área da base × altura`, `Vale para qualquer prisma e para o cilindro: a base é uma "folha" e a altura diz quantas folhas empilhamos. Prisma de base triangular com base 6 e altura 4 no triângulo (área [[6 × 4|2]] = 12) e comprimento 10 → 12 × 10 = 120.`],
  [`Cubos de 1 a 10`, `1 · 8 · 27 · 64 · 125 · 216 · 343 · 512 · 729 · 1 000. Cubo de aresta 5 → 5 × 5 × 5 = 125.`],
  [`1 dm³ = 1 L`, `1 dm = 10 cm. Uma caixa de 10 cm × 10 cm × 10 cm tem 1 000 cm³ e cabe exatamente 1 litro (o mesmo que uma caixa de leite de 1 litro).`],
  [`1 cm³ = 1 mL`, `Um cubinho de 1 cm de lado (do tamanho de um dado pequeno) guarda 1 mL. Uma seringa de 5 mL tem 5 cm³.`],
  [`1 m³ = 1 000 L`, `Um cubo de 1 m de lado tem 10 dm em cada direção: 10 × 10 × 10 = 1 000 dm³ = 1 000 litros. Uma caixa-d’água de 1 m³ é bem grande!`],
  [`Volume × capacidade`, `Volume é o espaço que um objeto ocupa (cm³, m³). Capacidade é quanto cabe dentro de um recipiente (L, mL). Elas se ligam pelas pontes acima: dm³ ↔ L, cm³ ↔ mL.`]
 ],
 jeitos: [
  {n:`Tudo em dm = resposta em litros`, c:`Antes de multiplicar, passe as medidas para dm (cm ÷ 10; m × 10). O resultado já sai em dm³, ou seja, em litros. Nada de converter números gigantes no final.`,
   ex:`Caixa 80 cm × 50 cm × 30 cm → 8 × 5 × 3 = <b>120 L</b>.<br>Tanque 2 m × 1 m × 0,5 m → 20 × 10 × 5 = <b>1 000 L</b>.`},
  {n:`Aresta × k → volume × k³`, c:`Se todas as medidas são multiplicadas por k, o volume fica k × k × k vezes maior. Dobrou → ×8. Triplicou → ×27. Pela metade → ÷8.`,
   ex:`Cubo de aresta 2 cm: 8 cm³. Aresta 6 cm (triplo): 216 cm³ = 27 × 8.<br>Caixa de 40 L com todas as medidas pela metade → 40 ÷ 8 = <b>5 L</b>.`},
  {n:`Só a parte que importa`, c:`Para "quanto falta encher" ou "quanto de água tem", use a área da base × a altura <b>daquela parte</b>, não do recipiente inteiro.`,
   ex:`Caixa com base 2 m × 1,5 m e 1 m de altura, com água até 0,6 m. Falta: 2 × 1,5 × 0,4 = 1,2 m³ = <b>1 200 L</b>.`},
  {n:`Multiplique em ordem esperta`, c:`A multiplicação pode ser feita em qualquer ordem. Junte primeiro os pares que dão número redondo: 25 × 4 = 100, 5 × 2 = 10, 0,5 × 2 = 1.`,
   ex:`25 × 13 × 4 = 100 × 13 = <b>1 300</b>.<br>Cilindro com π ≈ 3, r = 5, h = 4: 3 × 25 × 4 = 3 × 100 = <b>300</b>.`},
  {n:`Vazão: volume ÷ tempo`, c:`Vazão diz quantos litros passam por minuto. Tempo para encher = volume ÷ vazão. Deixe volume e vazão na mesma unidade (litros).`,
   ex:`Tanque de 600 L, torneira de 20 L/min → 600 ÷ 20 = <b>30 min</b>.`}
 ],
 passo: [
  `Identifique a forma: caixa, cubo, prisma ou cilindro.`,
  `Calcule a área da base (retângulo, triângulo ou círculo).`,
  `Multiplique pela altura (só a parte cheia, se for o caso).`,
  `Coloque tudo na mesma unidade; se der, use dm para sair em litros.`,
  `Converta no final: m³ × 1 000 = L · cm³ ÷ 1 000 = L · cm³ = mL.`
 ],
 exs: [
  {q:`Uma rampa de concreto tem a forma de um prisma: a face lateral é um triângulo retângulo com 3 m de comprimento e 1 m de altura, e a rampa tem 2 m de largura. Quantos m³ de concreto foram usados?`,
   s:[`Primeiro eu vejo qual é a "folha" que se repete: o triângulo lateral.`,`Área do triângulo: [[3 × 1|2]] = 1,5 m².`,`Empilho essa folha ao longo da largura: 1,5 × 2 = 3 m³.`],
   r:`3 m³`},
  {q:`Um copo cilíndrico tem 6 cm de diâmetro e 10 cm de altura. Com uma jarra de 1,8 L de suco, quantos copos ficam completamente cheios? (Use π ≈ 3.)`,
   s:[`Diâmetro 6 → raio 3.`,`Volume do copo: 3 × 3² × 10 = 3 × 9 × 10 = 270 cm³ = 270 mL.`,`Jarra: 1,8 L = 1 800 mL.`,`1 800 ÷ 270 ≈ 6,7. Estimo: 6 × 270 = 1 620 (cabe); 7 × 270 = 1 890 (passa de 1 800).`],
   r:`6 copos cheios`},
  {q:`Um cubo de 10 cm de aresta está cheio de água. Toda essa água é despejada num recipiente em forma de paralelepípedo, com base de 25 cm × 8 cm. Que altura a água atinge?`,
   s:[`Volume da água: 10³ = 1 000 cm³ (1 litro).`,`No recipiente, volume = área da base × altura → 1 000 = 25 × 8 × h.`,`25 × 8 = 200 → h = 1 000 ÷ 200 = 5 cm.`],
   r:`5 cm`}
 ],
 erros: [
  `<b>Errado:</b> multiplicar 2 m × 50 cm × 30 cm misturando unidades. <b>Certo:</b> converta tudo antes (20 dm × 5 dm × 3 dm = 300 L).`,
  `<b>Errado:</b> 1 m³ = 100 L. <b>Certo:</b> 1 m³ = 1 000 L (10 × 10 × 10 dm³).`,
  `<b>Errado:</b> aresta dobrou → volume ×2 ou ×4. <b>Certo:</b> ×8 (2 × 2 × 2).`,
  `<b>Errado:</b> usar o diâmetro na fórmula πr²h. <b>Certo:</b> divida o diâmetro por 2 antes.`
 ],
 resumo: [
  `V = área da base × altura (pilha de folhas).`,
  `Cubo a³ · caixa c × l × a · cilindro πr²h.`,
  `1 dm³ = 1 L · 1 m³ = 1 000 L · 1 cm³ = 1 mL.`,
  `Medidas em dm → resposta direto em litros.`,
  `Aresta ×2 → volume ×8.`
 ]
},

/* ============================== m-unid ============================== */
'm-unid': {
 base: [
  [`Os prefixos dizem o tamanho`, `<b>quilo</b> = 1 000 · <b>hecto</b> = 100 · <b>deca</b> = 10 · <b>deci</b> = décimo · <b>centi</b> = centésimo · <b>mili</b> = milésimo. Igual ao dinheiro: 100 centavos = 1 real, e 100 centímetros = 1 metro.`],
  [`Descer multiplica, subir divide`, `Indo de uma unidade grande para uma pequena (m → cm), o número <b>aumenta</b>, porque cabem mais pedaços: 3,7 m = 370 cm. Indo da pequena para a grande, diminui: 450 cm = 4,5 m.`],
  [`Por que área é ×100 por degrau`, `1 m² é um quadrado de 1 m × 1 m = 10 dm × 10 dm = 100 dm². Cada degrau conta duas vezes (comprimento e largura). 3 m² = 300 dm² = 30 000 cm².`],
  [`Por que volume é ×1 000 por degrau`, `1 dm³ = 10 cm × 10 cm × 10 cm = 1 000 cm³. São três direções, então três zeros por degrau. 2 m³ = 2 000 dm³ = 2 000 000 cm³.`],
  [`Litro e grama também têm escada`, `Capacidade: L → dL → cL → mL (×10 por degrau) e 1 L = 1 000 mL. Massa: 1 kg = 1 000 g; 1 t = 1 000 kg. 2,5 kg = 2 500 g.`],
  [`Tempo é base 60, não base 10`, `1 h = 60 min · 1 min = 60 s · 1 h = 3 600 s. Por isso a vírgula da hora <b>não</b> é minuto: 0,5 h = 30 min; 0,25 h = 15 min; 0,75 h = 45 min; 1,2 h = 72 min = 1h12min.`],
  [`Minutos para horas: divide por 60`, `90 min = [[90|60]] h = 1,5 h. 20 min = [[20|60]] = [[1|3]] de hora. 45 min = [[3|4]] de hora = 0,75 h.`]
 ],
 jeitos: [
  {n:`Conte degraus × zeros`, c:`Conte quantos degraus separam as unidades e multiplique pelo "tamanho do passo": 1 casa (comprimento), 2 casas (área), 3 casas (volume). Ande a vírgula esse tanto de casas.`,
   ex:`2,5 km → m: 3 degraus × 1 casa = 3 casas → <b>2 500 m</b>.<br>0,04 m² → cm²: 2 degraus × 2 casas = 4 casas → <b>400 cm²</b>.<br>5 000 cm³ → dm³: 1 degrau × 3 casas → <b>5 dm³</b> (5 L).`},
  {n:`0,1 h = 6 min`, c:`Cada décimo de hora vale 6 minutos. Com uma casa decimal, multiplique o algarismo depois da vírgula por 6.`,
   ex:`0,7 h → 7 × 6 = <b>42 min</b>.<br>1,2 h → 1 h e 2 × 6 = 12 min → 1h12min = <b>72 min</b>.<br>2,35 h → 0,3 h = 18 min e 0,05 h = 3 min → <b>2h21min</b>.`},
  {n:`Minutos ÷ 6 = décimos de hora`, c:`O caminho contrário: divida os minutos por 6 e você tem os décimos de hora.`,
   ex:`36 min → 36 ÷ 6 = 6 → <b>0,6 h</b>.<br>1h24min → 24 ÷ 6 = 4 → <b>1,4 h</b>.`},
  {n:`Troque a unidade pelo que ela vale`, c:`Escreva o valor da unidade no lugar dela e faça a conta. Serve para qualquer conversão, inclusive velocidade.`,
   ex:`3 h em segundos: 3 × 3 600 = <b>10 800 s</b>.<br>54 km/h = [[54 000 m|3 600 s]] = <b>15 m/s</b> (o mesmo que 54 ÷ 3,6).`},
  {n:`Relógio: complete a hora cheia`, c:`Para somar horários, primeiro complete até a próxima hora cheia e depois some o resto. Para achar duração, faça o mesmo caminho.`,
   ex:`8h45 + 1h50: 8h45 + 15 min = 9h00; sobra 1h35 → <b>10h35</b>.<br>Das 9h50 às 11h20: 10 min até 10h + 1h20 = <b>1h30min</b>.`}
 ],
 passo: [
  `Escreva a escada da grandeza (comprimento, área, volume, massa, capacidade ou tempo).`,
  `Veja se vai descer (multiplica) ou subir (divide).`,
  `Conte os degraus e o tamanho do passo (1, 2 ou 3 casas).`,
  `Tempo? Lembre: base 60, nada de "andar vírgula".`,
  `Confira: unidade menor → número maior.`
 ],
 exs: [
  {q:`Uma receita pede 0,75 L de leite. Quantos copos de 250 mL são necessários?`,
   s:[`Primeiro passo tudo para mL: 0,75 L = 750 mL (L → mL anda 3 casas).`,`750 ÷ 250 = 3.`],
   r:`3 copos`},
  {q:`Pedro correu 10 km em 50 minutos, num ritmo constante. Qual foi sua velocidade média em km/h?`,
   s:[`Penso no mais simples: 10 km em 50 min é 1 km a cada 5 min.`,`Em 60 min (1 hora) ele faria 60 ÷ 5 = 12 km.`,`Conferindo pela fórmula: 50 min = [[5|6]] h → 10 ÷ [[5|6]] = 10 × [[6|5]] = 12.`],
   r:`12 km/h`},
  {q:`Quantos azulejos quadrados de 20 cm de lado são necessários para cobrir uma parede de 3 m por 2,4 m?`,
   s:[`Primeiro tudo em cm: 3 m = 300 cm; 2,4 m = 240 cm.`,`Jeito 1 (fileiras): 300 ÷ 20 = 15 azulejos na largura; 240 ÷ 20 = 12 na altura → 15 × 12 = 180.`,`Jeito 2 (áreas): parede 300 × 240 = 72 000 cm²; azulejo 20 × 20 = 400 cm² → 72 000 ÷ 400 = 180. Bateu!`],
   r:`180 azulejos`}
 ],
 erros: [
  `<b>Errado:</b> 1 m² = 100 cm². <b>Certo:</b> 1 m² = 10 000 cm² (área anda 2 casas por degrau).`,
  `<b>Errado:</b> 1,2 h = 1h20min. <b>Certo:</b> 0,2 × 60 = 12 → 1h12min.`,
  `<b>Errado:</b> 2h40min = 2,4 h. <b>Certo:</b> 40 ÷ 60 = [[2|3]] ≈ 0,67 → 2h40min ≈ 2,67 h.`,
  `<b>Errado:</b> multiplicar medidas em unidades diferentes (0,2 km × 150 m). <b>Certo:</b> converta antes de multiplicar.`
 ],
 resumo: [
  `km hm dam m dm cm mm: desce ×, sobe ÷.`,
  `Comprimento 1 casa · área 2 · volume 3 por degrau.`,
  `1 L = 1 000 mL · 1 kg = 1 000 g.`,
  `Hora é base 60: 0,1 h = 6 min · 0,5 h = 30 min.`,
  `1,2 h = 72 min · km/h ÷ 3,6 = m/s.`
 ]
},

/* ============================== m-graf ============================== */
'm-graf': {
 base: [
  [`Título e fonte`, `O título diz <b>do que</b> são os dados e <b>quando</b>. A fonte diz quem pesquisou. Muitas questões só exigem ler o título com atenção ("vendas em milhares", "em %").`],
  [`Os dois eixos`, `O eixo horizontal costuma ter as categorias ou o tempo; o vertical, os valores. Leia a unidade: se o eixo diz "em milhares", uma barra no 35 vale 35 000.`],
  [`A escala (quanto vale cada risco)`, `Veja de quanto em quanto o eixo pula. Se marca 0, 10, 20, 30…, cada risco vale 10, e uma barra no meio entre 30 e 40 vale 35.`],
  [`A legenda`, `Quando há duas ou mais cores, a legenda diz o que cada cor representa (ex.: azul = meninos, laranja = meninas). Responder olhando a cor errada é erro de leitura, não de conta.`],
  [`Eixo que não começa no zero`, `Se o eixo começa em 50, as barras mostram só o pedaço acima de 50. Barras de 60 e 80 aparecem com alturas 10 e 30: parece o triplo, mas 80 é só [[80|60]] ≈ 1,33 vez 60. Compare os <b>números</b>, nunca o desenho.`],
  [`Setores: % × 360°`, `O círculo todo (360°) é 100%. Então 1% = 3,6° e 10% = 36°. Setor de 30% → 3 × 36 = 108°.`],
  [`Tabela de dupla entrada`, `Cada número está no cruzamento de uma linha com uma coluna. Para responder, ache a linha <b>e</b> a coluna certas; para totais, some a linha ou a coluna inteira.`],
  [`Variação: quanto e quantos %`, `De 200 para 250: aumentou 50 (variação absoluta) e [[50|200]] = 25% (variação percentual, sempre sobre o valor de <b>antes</b>).`]
 ],
 jeitos: [
  {n:`10% = 36°`, c:`Guarde só isso e monte o resto: 5% = 18°, 1% = 3,6°. Para voltar de grau para %, divida por 3,6 (ou veja quantos 36° cabem).`,
   ex:`15% → 36 + 18 = <b>54°</b>.<br>45° → 45 ÷ 360 = [[1|8]] = <b>12,5%</b>.`},
  {n:`Pizza em frações`, c:`Muitos ângulos são frações fáceis do círculo: 180° = [[1|2]] · 120° = [[1|3]] · 90° = [[1|4]] · 60° = [[1|6]] · 45° = [[1|8]] · 30° = [[1|12]]. Achou a fração? Aplique no total.`,
   ex:`Setor de 60° numa pesquisa com 420 pessoas → [[1|6]] de 420 = <b>70 pessoas</b>.<br>Total de 360 pessoas: cada grau é 1 pessoa! Setor de 90° → <b>90 pessoas</b>.`},
  {n:`Some para achar o que falta`, c:`As partes de uma pizza somam 100% (ou 360°); as linhas de uma tabela somam o total. Se falta uma fatia, é o que sobra.`,
   ex:`Fatias de 35%, 25% e 20% → a quarta é 100 − 80 = <b>20%</b>.<br>Setores de 150° e 90° → os outros somam 360 − 240 = <b>120°</b>.`},
  {n:`"Quanto a mais", "quantas vezes" ou "quantos %"?`, c:`"Quanto a mais" → subtraia. "Quantas vezes" → divida. "Quantos por cento aumentou" → diferença ÷ valor de antes.`,
   ex:`De 120 para 150: <b>+30</b>; 150 ÷ 120 = <b>1,25 vez</b>; [[30|120]] = [[1|4]] = <b>25%</b> de aumento.`},
  {n:`Eixo cortado: some o início`, c:`Quando o eixo não começa no zero, o valor real é o início do eixo + a altura que você vê. Depois compare os valores reais.`,
   ex:`Eixo começa em 50; barras com altura 10 e 30 → valores 60 e 80. A diferença real é 20, e 80 não é o triplo de 60 (é <b>[[4|3]]</b> de 60).`}
 ],
 passo: [
  `Leia título, unidade e fonte (em %? em milhares?).`,
  `Leia os eixos e descubra quanto vale cada risco; confira se começa no zero.`,
  `Veja a legenda: qual cor/linha é qual.`,
  `Grife o que a pergunta quer: valor, diferença, quantas vezes ou porcentagem.`,
  `Faça a conta com os números (não com o tamanho do desenho).`,
  `Confira: a resposta é coerente com o gráfico?`
 ],
 exs: [
  {q:`Numa pesquisa com 360 alunos sobre como vão à escola, o setor "bicicleta" mede 90° e o setor "ônibus" mede 150°. Quantos alunos a mais vão de ônibus do que de bicicleta?`,
   s:[`Uso o macete: o total é 360 e o círculo tem 360°, então cada grau vale 1 aluno.`,`Bicicleta: 90 alunos. Ônibus: 150 alunos.`,`"Quantos a mais" → subtrai: 150 − 90 = 60.`],
   r:`60 alunos`},
  {q:`Lucro de uma cantina (em reais): janeiro 800, fevereiro 1 000, março 900, abril 1 350. Em qual passagem de um mês para o seguinte houve o maior aumento percentual, e de quanto foi?`,
   s:[`Calculo cada variação sobre o mês de antes.`,`Jan → fev: +200 sobre 800 = [[1|4]] = 25%.`,`Fev → mar: −100 (caiu) sobre 1 000 = −10%.`,`Mar → abr: +450 sobre 900 = [[1|2]] = 50%.`],
   r:`De março para abril, aumento de 50%`},
  {q:`Numa turma de 40 alunos, 60% são meninas. Entre as meninas, 25% usam óculos; entre os meninos, 75% usam óculos. Que porcentagem da turma usa óculos?`,
   s:[`Monto a tabela de dupla entrada com números, não com porcentagens.`,`Meninas: 60% de 40 = 24 → 25% de 24 = 6 usam óculos.`,`Meninos: 40 − 24 = 16 → 75% de 16 = 12 usam óculos.`,`Total com óculos: 6 + 12 = 18 → [[18|40]] = 45%.`,`Repare: não é a média de 25% e 75% (50%), porque os grupos têm tamanhos diferentes.`],
   r:`45%`}
 ],
 erros: [
  `<b>Errado:</b> comparar a altura das barras num eixo que começa em 50. <b>Certo:</b> some o início do eixo e compare os valores.`,
  `<b>Errado:</b> ler "35" num eixo "em milhares" como 35. <b>Certo:</b> 35 mil = 35 000.`,
  `<b>Errado:</b> calcular a variação percentual sobre o valor novo. <b>Certo:</b> divida a diferença pelo valor de antes.`,
  `<b>Errado:</b> tirar a média de porcentagens de grupos de tamanhos diferentes. <b>Certo:</b> transforme em quantidades, some, e só depois divida pelo total.`
 ],
 resumo: [
  `Título → unidade → eixos → legenda → pergunta.`,
  `Eixo começa no zero? Se não, cuidado!`,
  `Setor: 10% = 36° · 90° = [[1|4]] · 120° = [[1|3]].`,
  `A mais → subtrai · vezes → divide · % → diferença ÷ antes.`,
  `Pizza soma 100% = 360°.`
 ]
},

/* ============================== m-media ============================== */
'm-media': {
 base: [
  [`Média = "dividir igualmente"`, `A média é o valor que cada um teria se tudo fosse repartido igualmente. Três amigos com 2, 5 e 8 balas: juntando, 15 balas; repartindo, cada um fica com 5. A média é 5.`],
  [`Soma = média × quantidade`, `Se você sabe a média e quantos são, sabe a soma. Média 7 em 6 provas → soma 42. Isso resolve quase toda questão de "quanto falta" ou "quem saiu".`],
  [`Peso = quantas vezes conta`, `Na média ponderada, peso 3 significa que a nota conta como se aparecesse 3 vezes. Nota 7 (peso 3) e nota 4 (peso 1) é como 7, 7, 7, 4 → [[25|4]] = 6,25.`],
  [`Mediana: a posição do meio`, `Ordene! Com n valores e n ímpar, a mediana está na posição [[n + 1|2]]: com 7 valores, é o 4º. Com n par, é a média do par do meio: com 10 valores, média do 5º e do 6º.`],
  [`Moda: o valor campeão`, `É o valor que mais se repete. Numa tabela de frequências, a moda é o <b>valor</b> com maior frequência, e não a maior frequência. Se o valor 3 aparece 12 vezes (o máximo), a moda é 3, e não 12.`],
  [`Amplitude: o tamanho da variação`, `Maior − menor. Temperaturas de 14° a 31° → amplitude 31 − 14 = 17°. Amplitude grande = dados espalhados.`],
  [`Média sofre com extremos`, `Um valor muito alto ou muito baixo puxa a média, mas quase não mexe na mediana. 1, 2, 3, 4, 90: média [[100|5]] = 20; mediana 3. Qual representa melhor? A mediana.`]
 ],
 jeitos: [
  {n:`Acerto em relação a um valor`, c:`Escolha um valor "redondo" perto dos dados, anote quanto cada um passa (+) ou falta (−), some os acertos e divida pela quantidade. Média = valor escolhido + (soma dos acertos ÷ quantidade). Contas pequenas, sem somar números grandes.`,
   ex:`87, 92, 85, 90, 96 → base 90: −3, +2, −5, 0, +6 → soma 0 → média <b>90</b>.<br>7,5; 8; 6,5; 9 → base 8: −0,5; 0; −1,5; +1 → soma −1 → −1 ÷ 4 = −0,25 → média <b>7,75</b>.`},
  {n:`Quanto falta`, c:`Nota que falta = soma necessária − soma que já tem. Pelo jeito dos acertos: a nova nota precisa compensar o que ficou faltando.`,
   ex:`Média 6 em 4 provas; já tem 5, 7 e 4. Soma necessária 4 × 6 = 24; tem 16 → falta <b>8</b>.<br>Pelos acertos: −1, +1, −2 = −2 → a última precisa ser 6 + 2 = <b>8</b>.`},
  {n:`Peso = repetir a nota`, c:`Se os pesos são pequenos, escreva cada nota tantas vezes quanto o peso e faça uma média comum. Fica claro e evita esquecer de dividir pela soma dos pesos.`,
   ex:`8 (peso 2) e 6 (peso 3) → 8, 8, 6, 6, 6 → [[34|5]] = <b>6,8</b>.`},
  {n:`Mediana em tabela: vá acumulando`, c:`Numa tabela de frequências, some as frequências de cima para baixo até passar da posição do meio. O valor onde você "passou" é a mediana.`,
   ex:`Nota 5: 3 alunos · nota 6: 4 · nota 7: 6 · nota 8: 2 (15 alunos). Meio = 8º aluno. Acumulado: 3, 7, 13 → o 8º está na nota <b>7</b>. Moda também 7 (6 alunos).`},
  {n:`Entrou um valor: reparta a diferença`, c:`Quando entra um valor novo, a diferença dele para a média antiga é repartida entre todos (agora com um a mais).`,
   ex:`9 alunos com média 6; chega um aluno com nota 10. Ele está 4 acima da média, repartido por 10 → +0,4 → nova média <b>6,4</b>.<br>Conferindo: [[54 + 10|10]] = [[64|10]] = 6,4.`}
 ],
 passo: [
  `Identifique o que pede: média, ponderada, mediana, moda ou amplitude.`,
  `Mediana? <b>Ordene primeiro</b> e ache a posição do meio.`,
  `Média? Pense em "soma = média × quantidade".`,
  `Ponderada? Multiplique cada valor pelo peso e divida pela soma dos pesos.`,
  `Use o acerto em relação a um valor para contas mais leves.`,
  `Confira: a média fica entre o menor e o maior valor?`
 ],
 exs: [
  {q:`As idades dos 7 jogadores de um time de vôlei são 13, 14, 14, 15, 13, 14 e 15. Calcule a média, a mediana, a moda e a amplitude.`,
   s:[`Média pelo acerto em relação a 14: −1, 0, 0, +1, −1, 0, +1 → soma 0 → média 14.`,`Ordeno: 13, 13, 14, 14, 14, 15, 15. São 7 valores → o 4º é o meio → mediana 14.`,`Moda: o 14 aparece 3 vezes → 14.`,`Amplitude: 15 − 13 = 2.`],
   r:`Média 14, mediana 14, moda 14 e amplitude 2`},
  {q:`Em Matemática, a prova tem peso 4, o simulado peso 3 e a lista de exercícios peso 3. Lia tirou 7 na prova, 9 no simulado e 6 na lista. Qual é sua média?`,
   s:[`Multiplico cada nota pelo peso: 7 × 4 = 28; 9 × 3 = 27; 6 × 3 = 18.`,`Somo: 28 + 27 + 18 = 73. Soma dos pesos: 4 + 3 + 3 = 10.`,`Média = [[73|10]] = 7,3. (Dividir por 10 é só andar a vírgula!)`],
   r:`7,3`},
  {q:`Uma lista tem 5 números inteiros. A média é 10, a mediana é 9 e a moda é 8 (só o 8 é moda). Qual é o maior valor que o maior desses números pode ter?`,
   s:[`Soma = 5 × 10 = 50. Ordenados: a, b, 9, d, e (a mediana é o 3º).`,`Para o 8 ser moda, ele aparece pelo menos 2 vezes, e só cabe antes do 9: a = b = 8.`,`Para o último ser o maior possível, o 4º deve ser o menor possível. Se fosse 9, o 9 apareceria 2 vezes e empataria com o 8 na moda. Então d = 10.`,`e = 50 − 8 − 8 − 9 − 10 = 15. Lista: 8, 8, 9, 10, 15.`],
   r:`15`}
 ],
 erros: [
  `<b>Errado:</b> achar a mediana sem ordenar. <b>Certo:</b> ordene e depois pegue o meio.`,
  `<b>Errado:</b> na ponderada, dividir pela quantidade de notas. <b>Certo:</b> divida pela soma dos pesos.`,
  `<b>Errado:</b> dizer que a moda é a maior frequência da tabela (ex.: "12"). <b>Certo:</b> a moda é o valor que tem essa frequência.`,
  `<b>Errado:</b> com quantidade par, pegar só um valor do meio. <b>Certo:</b> faça a média dos dois do meio.`
 ],
 resumo: [
  `Média = soma ÷ quantidade → soma = média × quantidade.`,
  `Ponderada: soma de (valor × peso) ÷ soma dos pesos.`,
  `Mediana: ORDENE · par → média dos dois do meio.`,
  `Moda = mais aparece · amplitude = maior − menor.`,
  `Atalho: escolha um valor e some os acertos (+/−).`
 ]
},

/* ============================== m-prob ============================== */
'm-prob': {
 base: [
  [`Espaço amostral e evento`, `<b>Espaço amostral</b> é a lista de tudo o que pode acontecer. <b>Evento</b> é a parte que você quer. Dado: espaço {1, 2, 3, 4, 5, 6}; evento "sair maior que 4" = {5, 6}.`],
  [`P = favoráveis ÷ possíveis`, `Com resultados igualmente prováveis, P = [[favoráveis|possíveis]]. "Sair maior que 4" no dado: [[2|6]] = [[1|3]]. Sempre simplifique a fração no final.`],
  [`Entre 0 e 1 (ou 0% e 100%)`, `0 = impossível (sair 7 num dado). 1 = certo (sair número menor que 7). Para virar %: [[1|4]] = 25%; [[3|5]] = 60%. Se deu maior que 1, errou a conta.`],
  [`Complementar: 1 − P`, `"Não acontecer" = 1 − "acontecer". Se a chance de acertar é [[2|5]], a de errar é [[3|5]].`],
  [`Dois dados = 36 pares`, `Cada dado tem 6 faces: 6 × 6 = 36 resultados. (2, 5) e (5, 2) são resultados <b>diferentes</b> (pense num dado azul e outro vermelho).`],
  [`"E" multiplica (independentes)`, `Se um resultado não muda o outro (moeda e dado, dois dados, sorteio com reposição), a chance de acontecer um <b>e</b> outro é o produto. Duas caras em duas moedas: [[1|2]] × [[1|2]] = [[1|4]].`],
  [`"Ou" soma (quando não acontecem juntos)`, `Se os casos não podem acontecer ao mesmo tempo, some. Dado: sair 1 <b>ou</b> 6 → [[1|6]] + [[1|6]] = [[2|6]] = [[1|3]].`]
 ],
 jeitos: [
  {n:`Tabela dos 2 dados`, c:`Monte a tabela 6 × 6 com as somas. Somas iguais ficam em diagonais. O 7 é o mais comum (6 casos); a partir dele, cada passo para cima ou para baixo perde 1 caso: soma 6 ou 8 → 5 casos; 5 ou 9 → 4; 4 ou 10 → 3; 3 ou 11 → 2; 2 ou 12 → 1.`,
   ex:`<table class="tb"><tr><th>+</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th></tr><tr><th>1</th><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td></tr><tr><th>2</th><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td></tr><tr><th>3</th><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td></tr><tr><th>4</th><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td><td>10</td></tr><tr><th>5</th><td>6</td><td>7</td><td>8</td><td>9</td><td>10</td><td>11</td></tr><tr><th>6</th><td>7</td><td>8</td><td>9</td><td>10</td><td>11</td><td>12</td></tr></table>Soma 8: 5 casos → <b>[[5|36]]</b>. Soma 4: 3 casos → [[3|36]] = <b>[[1|12]]</b>.`},
  {n:`Pelo menos um = 1 − nenhum`, c:`"Pelo menos um" tem muitos casos; "nenhum" costuma ter um só. Calcule o nenhum e tire de 1.`,
   ex:`3 moedas, pelo menos uma cara: nenhuma cara = KKK = [[1|8]] → 1 − [[1|8]] = <b>[[7|8]]</b>.<br>2 dados, pelo menos um 6: nenhum 6 = [[5|6]] × [[5|6]] = [[25|36]] → 1 − [[25|36]] = <b>[[11|36]]</b>.`},
  {n:`"E" multiplica, "ou" soma`, c:`Leia a frase procurando o conectivo. "Isso <b>e</b> aquilo" (em sequência) → multiplique. "Isso <b>ou</b> aquilo" (casos separados) → some.`,
   ex:`Moeda e dado, cara <b>e</b> número par: [[1|2]] × [[3|6]] = <b>[[1|4]]</b>.<br>Dois dados, soma 2 <b>ou</b> soma 12: [[1|36]] + [[1|36]] = <b>[[1|18]]</b>.`},
  {n:`Liste quando é pequeno`, c:`Com poucas etapas, escreva todos os casos de forma organizada (ou numa árvore). É rápido e evita esquecer ordem.`,
   ex:`Família com 3 filhos, chance de exatamente 2 meninas (A = menina, O = menino): AAO, AOA, OAA → 3 casos em 2 × 2 × 2 = 8 → <b>[[3|8]]</b>.`},
  {n:`Conte o que é mais fácil`, c:`Às vezes é mais rápido contar quem <b>não</b> serve e tirar do total.`,
   ex:`Número de 1 a 50 que <b>não</b> é múltiplo de 5: múltiplos de 5 são 10 → [[10|50]] = [[1|5]] → 1 − [[1|5]] = <b>[[4|5]]</b>.`}
 ],
 passo: [
  `Escreva (ou imagine) o espaço amostral e conte os possíveis.`,
  `Grife o evento: o que exatamente eu quero?`,
  `Uma etapa? Favoráveis ÷ possíveis. Várias? "E" multiplica, "ou" soma.`,
  `Com ou sem reposição? Sem: tire 1 do total na segunda etapa.`,
  `"Pelo menos um"? Use 1 − nenhum.`,
  `Simplifique e confira: está entre 0 e 1?`
 ],
 exs: [
  {q:`Numa caixa há 12 cartões numerados de 1 a 12. Sorteando um cartão, qual é a probabilidade de sair um número maior que 8?`,
   s:[`Possíveis: 12.`,`Favoráveis: 9, 10, 11, 12 → 4.`,`P = [[4|12]] = [[1|3]].`],
   r:`[[1|3]]`},
  {q:`Lançam-se dois dados comuns. Qual é a probabilidade de o produto dos números ser par?`,
   s:[`Contar os pares dá trabalho. Penso no contrário: quando o produto é ímpar?`,`Só quando os dois números são ímpares: [[3|6]] × [[3|6]] = [[1|4]].`,`Produto par = 1 − [[1|4]] = [[3|4]].`],
   r:`[[3|4]]`},
  {q:`Um semáforo fica verde 40% do tempo. No caminho para a escola, Ana passa por dois semáforos que funcionam de forma independente. Qual é a probabilidade de ela pegar pelo menos um sinal verde?`,
   s:[`"Pelo menos um" → uso 1 − nenhum.`,`Não verde em um semáforo: 100% − 40% = 60% = 0,6.`,`Nenhum verde nos dois ("e" multiplica): 0,6 × 0,6 = 0,36.`,`Pelo menos um verde: 1 − 0,36 = 0,64 = 64%.`],
   r:`0,64 = 64%`}
 ],
 erros: [
  `<b>Errado:</b> 2 moedas → "pelo menos uma cara" = [[1|2]] + [[1|2]] = 1. <b>Certo:</b> 1 − [[1|4]] = [[3|4]] (some só casos que não acontecem juntos).`,
  `<b>Errado:</b> 2 dados têm 11 resultados (somas de 2 a 12). <b>Certo:</b> são 36 pares; as somas não têm a mesma chance.`,
  `<b>Errado:</b> contar (2, 5) e (5, 2) como um caso só. <b>Certo:</b> são dois casos diferentes.`,
  `<b>Errado:</b> resposta maior que 1. <b>Certo:</b> probabilidade fica sempre entre 0 e 1 — se passou, refaça.`
 ],
 resumo: [
  `P = [[favoráveis|possíveis]] · entre 0 e 1.`,
  `Não acontecer = 1 − P.`,
  `"E" multiplica · "ou" soma.`,
  `Pelo menos um = 1 − nenhum.`,
  `2 dados = 36 · soma 7 é a campeã (6 casos).`
 ]
},

/* ============================== m-cont ============================== */
'm-cont': {
 base: [
  [`Princípio multiplicativo`, `Se uma escolha acontece em etapas, multiplique as opções de cada etapa. Sorvete com 3 sabores e 2 coberturas: 3 × 2 = 6 (cada sabor combina com cada cobertura).`],
  [`"Ou" soma`, `Se você escolhe um caminho <b>ou</b> outro (não os dois), some. Ir à escola por 3 linhas de ônibus ou 2 de metrô: 3 + 2 = 5 maneiras.`],
  [`Com ou sem repetição`, `Com repetição, cada etapa tem todas as opções: senha de 2 algarismos → 10 × 10 = 100. Sem repetição, cada etapa tem uma a menos: 10 × 9 = 90.`],
  [`Fatorial (n!)`, `n! = n × (n − 1) × … × 1 é o número de jeitos de colocar n coisas diferentes em fila. 3! = 6 · 4! = 24 · 5! = 120 · 6! = 720.`],
  [`A ordem importa?`, `Troque a ordem e pergunte: mudou alguma coisa? Fila, senha, pódio, presidente e vice → <b>muda</b> (ordem importa). Dupla, trio, grupo, aperto de mão → <b>não muda</b> (divida as repetições).`],
  [`Anagramas`, `Anagrama é qualquer reordenação das letras de uma palavra (com sentido ou não). Com letras todas diferentes, é n!: BOLA → 4! = 24.`],
  [`Restrição vem primeiro`, `Se alguma posição tem regra (não começa com 0, termina em par…), preencha essa posição primeiro. Números de 3 algarismos: a centena não pode ser 0 → 9 × 10 × 10 = 900.`]
 ],
 jeitos: [
  {n:`Tracinhos`, c:`Desenhe um tracinho para cada etapa, escreva em cima quantas opções sobram naquela etapa e multiplique.`,
   ex:`Pódio (1º, 2º, 3º) com 8 corredores: _8_ _7_ _6_ → 8 × 7 × 6 = <b>336</b>.`},
  {n:`Comece pelo tracinho exigente`, c:`Preencha primeiro a posição com restrição; depois as livres, descontando o que já foi usado.`,
   ex:`Números pares de 3 algarismos distintos usando 1, 2, 3, 4, 5: unidade 2 opções (2 ou 4); centena 4; dezena 3 → 4 × 3 × 2 = <b>24</b>.`},
  {n:`Ordem não importa: divida`, c:`Conte como se a ordem importasse e depois divida pelo número de ordens de cada grupo: dupla ÷ 2; trio ÷ 6 (3 × 2 × 1).`,
   ex:`Apertos de mão entre 10 pessoas: [[10 × 9|2]] = <b>45</b>.<br>Trios entre 5 pessoas: [[5 × 4 × 3|3 × 2 × 1]] = [[60|6]] = <b>10</b>.`},
  {n:`Letra repetida: divida`, c:`Num anagrama, trocar duas letras iguais de lugar não cria palavra nova. Calcule como se fossem diferentes e divida pelo fatorial de quantas vezes cada letra se repete.`,
   ex:`BOLO: [[4!|2!]] = [[24|2]] = <b>12</b>.<br>ARARA (3 A e 2 R): [[5!|3! × 2!]] = [[120|12]] = <b>10</b>.`},
  {n:`Total − os que não servem`, c:`Quando a condição é "pelo menos um", conte tudo e tire os que não têm nenhum.`,
   ex:`Senhas de 4 algarismos com pelo menos um algarismo repetido: total 10 000; sem nenhuma repetição 10 × 9 × 8 × 7 = 5 040 → 10 000 − 5 040 = <b>4 960</b>.`}
 ],
 passo: [
  `Descubra as etapas da escolha e desenhe um tracinho para cada uma.`,
  `Pergunte: pode repetir? E a ordem importa?`,
  `Preencha primeiro os tracinhos com restrição.`,
  `Multiplique ("e") ou some ("ou", casos separados).`,
  `Ordem não importa ou letras repetidas? Divida.`,
  `Com números pequenos, liste alguns casos para conferir.`
 ],
 exs: [
  {q:`De quantas maneiras 5 amigos podem formar uma fila para comprar ingresso?`,
   s:[`Fila: a ordem importa e ninguém repete.`,`Tracinhos: _5_ _4_ _3_ _2_ _1_ → 5! = 120.`],
   r:`120 maneiras`},
  {q:`Quantos números ímpares de 4 algarismos distintos podemos formar com os algarismos 0, 1, 2, 3, 4 e 5?`,
   s:[`Duas restrições: a unidade é ímpar e o primeiro algarismo não pode ser 0. Começo por elas.`,`Unidade: 1, 3 ou 5 → 3 opções.`,`Milhar: não pode ser 0 nem o algarismo da unidade → 6 − 2 = 4 opções.`,`Centena: sobram 4 algarismos (agora o 0 pode) → 4. Dezena: 3.`,`Total: 3 × 4 × 4 × 3 = 144.`],
   r:`144 números`},
  {q:`Numa turma de 7 alunos, quantas comissões de 3 alunos podem ser formadas? E se a comissão tiver cargos (presidente, vice e secretário)?`,
   s:[`Com cargos, a ordem importa: _7_ _6_ _5_ → 7 × 6 × 5 = 210.`,`Sem cargos, a ordem não importa: cada trio foi contado 3 × 2 × 1 = 6 vezes.`,`210 ÷ 6 = 35.`],
   r:`35 comissões sem cargos e 210 com cargos`}
 ],
 erros: [
  `<b>Errado:</b> somar as opções das etapas (3 + 4). <b>Certo:</b> etapas em sequência ("e") multiplicam (3 × 4).`,
  `<b>Errado:</b> contar duplas ou apertos de mão sem dividir por 2. <b>Certo:</b> A com B = B com A → divida.`,
  `<b>Errado:</b> começar pelos tracinhos livres e deixar a restrição para o fim. <b>Certo:</b> restrição primeiro.`,
  `<b>Errado:</b> anagramas de BOLO = 24. <b>Certo:</b> o O se repete → 24 ÷ 2 = 12.`
 ],
 resumo: [
  `Um tracinho por etapa e multiplica.`,
  `Repetir? 10 × 10 · não repetir? 10 × 9.`,
  `Ordem importa → não divide · não importa → divide.`,
  `Anagrama = n! (letra repetida → divide).`,
  `Apertos de mão: [[n(n − 1)|2]].`
 ]
}

};
