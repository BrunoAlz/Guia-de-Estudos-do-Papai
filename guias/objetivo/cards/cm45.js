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
