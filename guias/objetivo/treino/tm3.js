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
