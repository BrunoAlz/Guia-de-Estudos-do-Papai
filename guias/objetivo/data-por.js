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
 hook:'Boa parte das questões de Português pergunta o que o texto diz <b>sem dizer</b>. Inferir é concluir a partir de pistas, e não inventar.',
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
  ['“Que ótimo! Meu celular descarregou bem na hora do jogo.” A palavra “ótimo” foi usada com sentido:', ['literal, mostrando alegria.','irônico, mostrando irritação.','técnico, sobre a bateria.','neutro, sem emoção.'], 1, 'O contexto (ficar sem celular bem na hora do jogo) mostra o sentido contrário: é ironia.'],
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
 trap:'No discurso indireto, o verbo e os pronomes mudam: “eu vou chegar” vira “ela iria chegar/chegaria”; “amanhã” pode virar “no dia seguinte”.',
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
  ['“<b>Caso</b> você chegue cedo, avise-me.” A conjunção expressa:', ['condição','concessão','consequência','proporção'], 0, 'Caso = se (condição).']
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
  ['“Espero <b>que você venha</b>.” A oração destacada é:', ['subordinada adjetiva','subordinada substantiva','subordinada adverbial causal','coordenada aditiva'], 1, 'Funciona como objeto direto de “espero” (espero isto): substantiva objetiva direta.']
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
<p><b>Não há crase</b> antes de verbo (“começou a chover”), de palavra masculina (regra geral) e da maioria dos pronomes (“a ela”, “a você”). Na indicação de horas: “às 10h” (mas “desde as 10h”, “após as 10h”).</p>`,
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
 body:`<p><b>Vírgula — use para separar:</b> itens de uma enumeração; o <b>vocativo</b> (“Pedro, venha cá”); o <b>aposto</b> (“Belém, capital do Pará, …”); expressões deslocadas no início (“Ontem à noite, …”); orações coordenadas (as ligadas por “mas”, “porém” etc.; antes de “e”, em geral, não se usa vírgula); orações explicativas.</p>
<p><b>Vírgula — nunca separe</b> o sujeito do verbo, nem o verbo do complemento, com uma vírgula só: “Os alunos do 9º ano<s>,</s> viajaram.” (Um termo intercalado entre <b>duas</b> vírgulas pode aparecer: “Os alunos, cansados, viajaram.”)</p>
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
 trap:'“Infelizmente” tem prefixo e sufixo, mas existem “infeliz” e “felizmente” sozinhos: não é parassíntese. Em “entardecer”, não existe “entarde” nem “tardecer”.',
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
