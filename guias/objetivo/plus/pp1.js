/* REVISÃO TURBINADA · PORTUGUÊS · P1 (Leitura e interpretação)
   Textos de exemplo escritos para este guia, exceto os trechos em domínio público com autoria indicada
   (Machado de Assis, Gonçalves Dias, fábula atribuída a Esopo, provérbios populares). */
const PLUS_P1 = {

/* ===================== p-impl · Explícito, implícito e inferência ===================== */
'p-impl': {
 base: [
  [`Explícito = está escrito`, `A informação aparece com todas as letras. Você só precisa <b>localizar</b>. Ex.: “A feira abre às 8h.” Pergunta: “Que horas a feira abre?” → está lá, é só copiar com os olhos.`],
  [`Implícito = não está escrito, mas dá para concluir`, `O texto deixa pistas e você junta as peças. Ex.: “Cheguei encharcado na escola.” Não diz “choveu”, mas permite concluir que quem fala pegou chuva (ou caiu na água!) no caminho.`],
  [`Inferência = pista + raciocínio`, `Inferir é tirar uma conclusão <b>apoiada</b> em algo do texto. Fórmula: <b>pista do texto + lógica = conclusão</b>. Sem pista, não é inferência: é chute.`],
  [`Palavras que “escondem” informação (pressupostos)`, `Algumas palavras trazem uma informação extra embutida: <b>deixou de</b>, <b>começou a</b>, <b>voltou a</b>, <b>continua</b>, <b>ainda</b>, <b>já</b>, <b>outra vez</b>, <b>também</b>, <b>até</b>. Ex.: “<b>Até</b> o diretor dançou na festa” → outras pessoas dançaram e não se esperava que ele dançasse.`],
  [`Subentendido = recado nas entrelinhas`, `Quem fala quer dizer algo sem dizer. Ex.: o amigo olha seu pacote de biscoito e comenta: “Eu nem almocei hoje…” → ele está pedindo um biscoito.`],
  [`Assunto × tema`, `<b>Assunto</b> = do que o texto fala (um cachorro que fugiu). <b>Tema</b> = a ideia maior que ele discute (a lealdade entre bichos e pessoas). O tema responde: “o que o texto quer que eu pense sobre isso?”.`],
  [`Sentido de palavra pelo contexto`, `Uma mesma palavra muda de sentido conforme a frase. “O ônibus estava <b>lotado</b>” (cheio) × “O professor foi <b>lotado</b> em outra escola” (designado para trabalhar lá). Quem decide é a frase em volta.`],
  [`Os 3 jeitos de uma alternativa errar`, `<b>Extrapola</b> (vai além do texto), <b>reduz</b> (pega só um detalhe e chama de ideia central) ou <b>contradiz</b> (diz o contrário do texto). Quase toda alternativa errada cai num desses três.`]
 ],
 jeitos: [
  {n:`Enunciado primeiro, texto depois`, c:`Antes de ler o texto, leia a pergunta (e passe o olho nas alternativas). Assim você lê sabendo o que procurar, como quem entra no mercado com a lista na mão.`,
   ex:`Pergunta: “Por que a loja fechou mais cedo?” → já sei que preciso caçar uma <b>causa</b>. Leio o texto e paro em “<b>por causa da</b> falta de luz”. Resposta: <b>a falta de luz</b>.`},
  {n:`Prove com o dedo`, c:`Para cada alternativa, coloque o dedo na linha do texto que a comprova. Achou a linha? Fica. Não achou? Risca. A resposta certa sempre tem “endereço” no texto.`,
   ex:`Texto: “Rita estudou a semana toda e tirou 9.”<br>Alternativa “Rita é a melhor aluna da sala” → não há linha que prove → <b>risca</b>.<br>Alternativa “Rita se preparou para a prova” → linha “estudou a semana toda” → <b>fica</b>.`},
  {n:`Alarme das palavras absolutas`, c:`<b>Sempre, nunca, todos, nenhum, só, apenas, totalmente, qualquer</b>: quando aparecem na alternativa e NÃO no texto, quase sempre ela está extrapolando. Acenda o alarme e confira.`,
   ex:`Texto: “Muitos alunos preferem estudar à noite.”<br>Alternativa: “<b>Todos</b> os alunos estudam à noite.” → o texto diz “muitos”, não “todos” → <b>extrapola, risca</b>.`},
  {n:`Caça à palavra-gatilho`, c:`Em questão de “pressupõe” ou “deixa implícito”, procure a palavrinha que carrega o recado escondido (deixou de, ainda, voltou a, até, finalmente…). A resposta é o que essa palavra obriga a ser verdade.`,
   ex:`“O time <b>ainda</b> não marcou neste campeonato.” → “ainda” indica que se espera que marque. Implícito: <b>há expectativa de que o time marque gols</b>.<br>“Ana <b>deixou de</b> roer unha.” → <b>antes ela roía</b>.`},
  {n:`A frase vizinha explica a palavra`, c:`Para descobrir o sentido de uma palavra, leia a frase de antes e a de depois. O texto quase sempre “traduz” a palavra logo ao lado, com um exemplo ou uma consequência.`,
   ex:`“O discurso do prefeito foi <b>prolixo</b>: falou por duas horas e não disse nada de novo.” → a frase depois dos dois-pontos explica: <b>prolixo = que fala demais, cansativo, sem ir ao ponto</b>.`},
  {n:`Tema em uma frase`, c:`Para achar o tema, complete: “O texto quer mostrar que…”. Use a última frase ou o último parágrafo, onde o autor costuma “fechar” a ideia. Depois escolha a alternativa mais parecida com a sua frase.`,
   ex:`Texto sobre uma avó que ensina o neto a plantar e termina com “Quem planta aprende a esperar”. → “O texto quer mostrar que <b>cuidar de algo ensina paciência</b>.” Esse é o tema, não “plantar tomates”.`}
 ],
 passo: [
  `Leia a pergunta primeiro e grife o que ela pede: localizar, inferir, sentido de palavra ou tema.`,
  `Leia o texto inteiro uma vez, com calma, procurando aquilo que a pergunta pediu.`,
  `Antes de olhar as alternativas, tente responder com suas palavras.`,
  `Teste cada alternativa com o “prove com o dedo”: tem linha no texto que sustente?`,
  `Risque as que extrapolam (palavras absolutas), reduzem (só um detalhe) ou contradizem o texto.`,
  `Fique com a que tem pista no texto, mesmo que pareça “simples” demais.`
 ],
 exs: [
  {q:`“Desde que o novo zelador chegou, o elevador do prédio <b>deixou de</b> quebrar toda semana.” O que essa frase pressupõe?`,
   s:[`Primeiro eu caço a palavra-gatilho: “deixou de”.`,`Só deixa de fazer algo quem fazia antes. Então, antes do novo zelador, o elevador quebrava toda semana.`,`Cuidado para não inventar: a frase não diz que o zelador consertou o elevador com as próprias mãos. Fico só com o que a palavra garante.`],
   r:`Que, antes da chegada do novo zelador, o elevador quebrava toda semana.`},
  {q:`<b>Texto:</b> “Antes de o ônibus da excursão sair, a professora conferiu a lista de nomes três vezes. Na volta, contou os alunos de novo, um por um, na porta da escola.”<br>Pode-se inferir que a professora:<br>(a) não confiava nos alunos.<br>(b) estava preocupada em não deixar nenhum aluno para trás.<br>(c) sempre erra quando faz contas.<br>(d) já tinha perdido um aluno em outra excursão.`,
   s:[`Li a pergunta antes: “inferir” → preciso de uma conclusão com pista.`,`Pistas: conferiu a lista três vezes, contou de novo, um por um. Isso mostra cuidado com a presença de todos.`,`(a) Desconfiança? Nenhuma linha fala que os alunos aprontam → risca. (c) Tem “sempre” → alarme! E o texto não fala de erro → risca. (d) Inventa um passado que o texto não conta; o “de novo” se refere à contagem, não a outra excursão → risca.`,`Sobra (b), que tem pista no texto.`],
   r:`(b) estava preocupada em não deixar nenhum aluno para trás.`},
  {q:`<b>Texto:</b> “Seu Joaquim conserta guarda-chuvas há quarenta anos numa portinha da Rua Direita. Os clientes estão cada vez mais raros: um guarda-chuva novo custa quase o mesmo que o conserto. Mesmo assim, ele abre a loja às oito em ponto. ‘Coisa boa não se joga fora’, repete, enquanto troca uma vareta.”<br>O tema do texto é:<br>(a) o preço dos guarda-chuvas.<br>(b) o horário de uma loja.<br>(c) a resistência de um ofício antigo diante do hábito de jogar fora e comprar outro.<br>(d) a falência de todo o comércio das cidades.`,
   s:[`Uso o “tema em uma frase”: “O texto quer mostrar que… seu Joaquim continua consertando, mesmo com pouca gente consertando as coisas hoje em dia”.`,`A fala final é a chave: “Coisa boa não se joga fora” contrasta com “um guarda-chuva novo custa quase o mesmo”.`,`(a) e (b) são detalhes → <b>reduzem</b>. (d) tem “todo” e fala de todas as cidades → <b>extrapola</b>.`,`A (c) é a mais ampla e tem apoio no texto inteiro.`],
   r:`(c) a resistência de um ofício antigo diante do hábito de jogar fora e comprar outro.`}
 ],
 erros: [
  `<b>Errado:</b> escolher a alternativa que você acha verdadeira na vida real. <b>Certo:</b> escolher a que o TEXTO sustenta, mesmo que você pense diferente.`,
  `<b>Errado:</b> marcar como tema o assunto do primeiro parágrafo. <b>Certo:</b> procurar a ideia que amarra o texto todo (geralmente fechada no final).`,
  `<b>Errado:</b> achar o sentido de uma palavra “pelo dicionário da cabeça”. <b>Certo:</b> ler a frase vizinha e testar qual sentido combina com o contexto.`,
  `<b>Errado:</b> aceitar “todos”, “sempre”, “nunca” sem conferir. <b>Certo:</b> verificar se o texto diz exatamente isso; se disser “muitos” ou “às vezes”, a alternativa extrapola.`,
  `<b>Errado:</b> ler a alternativa pela metade e marcar porque o começo está certo. <b>Certo:</b> ler até o fim: muitas erram só na última parte.`
 ],
 resumo: [
  `Pergunta primeiro → texto depois.`,
  `Inferência = pista + lógica (sem pista = chute).`,
  `Palavra-gatilho: deixou de, ainda, voltou a, até → informação escondida.`,
  `Sempre/nunca/todos na alternativa → alarme de extrapolação.`,
  `Tema = “o texto quer mostrar que…” (maior que o assunto).`,
  `Alternativa errada: extrapola, reduz ou contradiz.`
 ]
},

/* ===================== p-tira · Tirinhas, charges e memes ===================== */
'p-tira': {
 base: [
  [`Linguagem verbal + não verbal`, `<b>Verbal</b> = palavras (falas, legendas, placas). <b>Não verbal</b> = imagem (desenho, cores, gestos, rosto). Nas tirinhas e charges, o sentido só aparece quando você junta as duas. Ex.: a fala “Tudo bem!” + um rosto chorando = não está nada bem.`],
  [`Como se lê uma tirinha`, `Os quadros seguem a ordem da leitura: da esquerda para a direita, de cima para baixo. Entre um quadro e outro pode passar tempo. Os primeiros quadros <b>preparam</b>; o último <b>surpreende</b>.`],
  [`O formato do balão fala`, `Contorno liso = fala normal. Nuvem com bolinhas = <b>pensamento</b>. Contorno em zigue-zague = <b>grito</b> ou som de aparelho. Contorno tracejado = <b>cochicho</b>. Letras grandes e grossas = voz alta ou emoção forte.`],
  [`Onomatopeia`, `Palavra que imita um som: <i>toc-toc</i> (porta), <i>bum!</i> (explosão), <i>zzz</i> (sono), <i>atchim!</i> (espirro). Ajuda a entender o que acontece na cena sem precisar de fala.`],
  [`Charge × cartum`, `<b>Charge</b> comenta um fato do momento (uma eleição, uma obra atrasada, um aumento de preço): ela “envelhece”. <b>Cartum</b> critica um comportamento humano que vale em qualquer época (pressa, vaidade, vício no celular).`],
  [`Quebra de expectativa`, `O texto faz você esperar uma coisa e entrega outra. Ex.: o menino promete “Vou estudar a tarde toda!” e, no último quadro, está dormindo em cima do livro. O riso nasce dessa surpresa.`],
  [`Ironia × mentira`, `Na <b>ironia</b>, quem fala QUER que você perceba o sentido contrário (o contexto mostra). Na <b>mentira</b>, quem fala quer que você acredite. “Que pontualidade!”, dito a quem chegou uma hora atrasado, é ironia.`],
  [`Literal × figurado`, `<b>Literal</b> = sentido “ao pé da letra”. <b>Figurado</b> = sentido criado por comparação. “Pisar na bola” literal = pisar numa bola; figurado = errar. Muitas tirinhas fazem graça com um personagem que entende ao pé da letra.`]
 ],
 jeitos: [
  {n:`Esperava × aconteceu`, c:`Escreva mentalmente duas linhas: “O que eu esperava depois dos primeiros quadros” e “O que aconteceu no último”. O humor (e a resposta) está na diferença entre as duas.`,
   ex:`Q1: o cachorro olha triste para o dono, que come um sanduíche. Q2: o dono, com pena, dá um pedaço ao cachorro. Q3: o gato, escondido, aparece com uma plaquinha: “Funcionou! Minha vez!”<br>Esperava: o cachorro estava triste mesmo. Aconteceu: era um <b>plano combinado</b> dos bichos. Graça = a surpresa.`},
  {n:`Palavra + imagem = sentido`, c:`Leia a fala sozinha e pergunte “o que ela diz?”. Depois olhe a imagem e pergunte “o que ela mostra?”. Se uma desmente a outra, achou a ironia ou a crítica.`,
   ex:`Fala: “Nossa cidade cuida bem das árvores!”. Imagem: uma única árvore, seca, cercada de concreto.<br>Fala diz “cuida bem”; imagem mostra descuido → <b>crítica irônica ao abandono das áreas verdes</b>.`},
  {n:`Detetive do corpo`, c:`Rostos, gestos e postura são “falas sem palavras”. Sobrancelha erguida, braços cruzados, gota de suor, olhos arregalados contam o que o personagem sente de verdade.`,
   ex:`O aluno diz “Estou supertranquilo para a prova!” enquanto roe as unhas e tem gotas de suor na testa.<br>A imagem desmente a fala → ele está <b>nervoso</b>; a frase é um disfarce.`},
  {n:`Qual é a notícia por trás?`, c:`Na charge, pergunte: “Que problema real da sociedade está sendo criticado?”. O alvo nunca é o objeto desenhado em si (o guarda-chuva, o ônibus), mas a situação que ele representa.`,
   ex:`Charge: uma fila enorme na porta de um posto de saúde, que dá a volta no quarteirão e termina num esqueleto sentado.<br>O esqueleto não é o assunto: é exagero para mostrar <b>a demora no atendimento da saúde pública</b>.`},
  {n:`Teste do ao pé da letra`, c:`Se o humor parece “sem sentido”, procure uma expressão figurada que algum personagem entendeu literalmente (ou o contrário). Leia a expressão dos dois jeitos.`,
   ex:`A mãe diz: “Filho, <b>dá uma mão</b> aqui na cozinha!”. No quadro seguinte, o filho estende só a mão pela porta, sem sair do videogame.<br>“Dar uma mão” = ajudar (figurado); ele fez o literal → <b>humor pelo duplo sentido</b>.`}
 ],
 passo: [
  `Leia a pergunta: ela quer o humor, a crítica, a ironia ou um detalhe da imagem?`,
  `Leia os quadros em ordem e descreva para você mesmo o que acontece em cada um.`,
  `Junte palavra + imagem: alguma desmente a outra? Algum rosto ou gesto muda o sentido da fala?`,
  `Compare o que você esperava com o que aconteceu no último quadro.`,
  `Na charge, diga qual problema real está sendo criticado.`,
  `Escolha a alternativa que explica o EFEITO (humor, crítica, ironia), e não a que só descreve a imagem.`
 ],
 exs: [
  {q:`<b>Tirinha:</b> Q1: o pai abre a caixa de um armário para montar, com dezenas de peças espalhadas e um manual na mão. Q2: o pai, suado, diz: “Ninguém precisa de manual!”. Q3: o armário está montado, e o pai olha, desconfiado, para três parafusos e uma porta que sobraram no chão.<br>O humor do último quadro depende principalmente:`,
   s:[`Primeiro eu faço o “esperava × aconteceu”: depois do Q2, espero que ele monte tudo certinho, sem manual.`,`No Q3 não há fala nenhuma: a graça está na <b>imagem</b> das peças que sobraram.`,`Peças sobrando = o armário foi montado errado. A confiança do Q2 é desmentida pela imagem do Q3.`],
   r:`Da imagem das peças que sobraram, que revela que o pai montou o armário errado, contrariando a confiança da fala anterior.`},
  {q:`<b>Charge:</b> num terreno de terra cheio de poças e entulho, crianças jogam bola com traves feitas de chinelos. Ao fundo, um estádio gigante e moderno exibe a faixa: “Arena Nova — 80 mil lugares — ingressos a partir de R$ 300”.<br>Qual é a crítica da charge?`,
   s:[`Uso o “qual é a notícia por trás?”: o alvo não é a bola nem o estádio em si.`,`Junto palavra + imagem: a faixa mostra luxo e preço alto; a frente da cena mostra crianças sem um campo digno.`,`O contraste entre os dois planos (fundo rico × frente pobre) é a crítica.`],
   r:`A desigualdade: há dinheiro para grandes arenas caras, mas faltam espaços de esporte e lazer para crianças pobres.`},
  {q:`<b>Tirinha:</b> Q1: no intervalo do jogo, o técnico diz aos jogadores: “Estamos ganhando de 1 a 0. Agora, <b>segurem o resultado</b>!”. Q2: os jogadores se olham, confusos. Q3: todos os jogadores aparecem pendurados no placar eletrônico, agarrando-o com as duas mãos.<br>O humor da tirinha é construído:`,
   s:[`Uso o “teste do ao pé da letra”: qual expressão tem dois sentidos?`,`“Segurar o resultado”, no futebol, é figurado: defender-se para manter a vantagem.`,`No Q3, os jogadores entendem literalmente e seguram o placar com as mãos. O Q2 (rostos confusos) prepara essa leitura errada.`],
   r:`Pela interpretação literal de uma expressão figurada (“segurar o resultado”), mostrada na imagem do último quadro.`}
 ],
 erros: [
  `<b>Errado:</b> responder descrevendo o desenho (“aparecem crianças jogando bola”). <b>Certo:</b> dizer o efeito: o que aquilo critica ou por que é engraçado.`,
  `<b>Errado:</b> ler só as falas e ignorar a imagem. <b>Certo:</b> olhar rostos, gestos, objetos e placas: muitas vezes a resposta está só no desenho.`,
  `<b>Errado:</b> levar a fala irônica a sério (“o pai elogiou a nota”). <b>Certo:</b> conferir se o contexto mostra o contrário do que foi dito.`,
  `<b>Errado:</b> achar que a charge critica o objeto desenhado (o ônibus, a placa). <b>Certo:</b> identificar a situação real que o objeto representa.`
 ],
 resumo: [
  `Palavra + imagem juntas = sentido.`,
  `Primeiros quadros preparam, último surpreende.`,
  `Humor = esperava × aconteceu.`,
  `Ironia = fala × contexto em lados opostos.`,
  `Charge → fato atual; cartum → comportamento de sempre.`,
  `Responda o EFEITO, não descreva o desenho.`
 ]
},

/* ===================== p-arg · Texto argumentativo ===================== */
'p-arg': {
 base: [
  [`Para que serve um texto argumentativo`, `Para <b>convencer</b>. Ele não só informa: toma partido. Ex.: “Os parques deveriam abrir à noite” é uma posição; o texto inteiro trabalha para você concordar com ela.`],
  [`Tese = a ideia defendida`, `É a opinião central, aquela que o autor quer que você aceite no final. Costuma ser uma frase que alguém poderia discutir: “A escola deve ter horta”, “Videogame pode ensinar”.`],
  [`Argumento = a razão para acreditar`, `Responde à pergunta “por quê?” feita à tese. Tese: “A escola deve ter horta.” Por quê? “Porque os alunos aprendem de onde vem o alimento” → argumento.`],
  [`Estrutura em 3 partes`, `<b>Introdução</b> (apresenta o tema e, muitas vezes, a tese) → <b>desenvolvimento</b> (argumentos) → <b>conclusão</b> (retoma a tese ou propõe uma solução).`],
  [`Contra-argumento: a voz do “outro lado”`, `O autor mostra o que pensa quem discorda e depois responde. Isso deixa o texto mais forte, porque mostra que ele pensou nas objeções. Ex.: “Alguns dizem que a horta dá trabalho; no entanto, os próprios alunos podem cuidar dela.”`],
  [`Conectivos são placas de trânsito`, `<b>Portanto, logo, por isso, assim</b> → vem a conclusão (muitas vezes a tese). <b>Pois, porque, já que</b> → vem a justificativa. <b>Mas, porém, no entanto, contudo</b> → vem a oposição (e, muitas vezes, depois deles vem a opinião do autor). <b>Além disso, também</b> → vem mais um argumento.`],
  [`Onde mora o texto argumentativo`, `Artigo de opinião, editorial, carta do leitor, resenha crítica, debate, post de opinião. Em comum: alguém defendendo um ponto de vista.`]
 ],
 jeitos: [
  {n:`Caça à tese nas pontas`, c:`Procure a tese no 1º e no último parágrafo. Pistas: “portanto”, “por isso”, “é preciso”, “deve”, “deveria”, “é fundamental”. Se aparecer nas duas pontas, com palavras diferentes, é ela mesma.`,
   ex:`Início: “Ler por prazer deveria fazer parte do horário escolar.” Final: “Por isso, reservar 20 minutos diários para leitura livre é um investimento.” → a mesma ideia nas duas pontas → <b>tese: a escola deve reservar tempo para a leitura livre</b>.`},
  {n:`Teste do “por quê?”`, c:`Pegue a alternativa candidata a tese e pergunte “por quê?”. Se o resto do texto responde, ela é a tese. Se ela própria é uma resposta a outro “por quê?”, é argumento.`,
   ex:`“A cidade deve criar ciclovias.” Por quê? → “porque reduzem a poluição” e “porque diminuem o trânsito”. A primeira é a <b>tese</b>; as outras duas são <b>argumentos</b>.`},
  {n:`Teste do “porque” no meio`, c:`Junte duas frases do texto com “porque”: [tese] PORQUE [argumento]. Se a frase fica natural, você descobriu quem é quem. Se ficar estranha, inverta.`,
   ex:`“Devemos dormir 8 horas PORQUE o sono organiza a memória.” → natural. <b>Tese</b>: dormir 8 horas; <b>argumento</b>: o sono organiza a memória.<br>Ao contrário (“O sono organiza a memória PORQUE devemos dormir 8 horas”) fica sem sentido.`},
  {n:`Etiqueta pelo sinal`, c:`Descubra o tipo de argumento por uma marca na frase: <b>números/%</b> → dados; <b>“segundo…”, “de acordo com…”</b> → autoridade; <b>“veja o caso de…”</b> → exemplo; <b>“se… então…”</b> → causa e consequência; <b>“assim como…”</b> → comparação.`,
   ex:`“De acordo com a Organização Mundial da Saúde…” → <b>autoridade</b>.<br>“Em 2024, 62% dos entrevistados…” → <b>dados</b>.<br>“Se a praça não tiver luz, ninguém vai usá-la à noite.” → <b>causa e consequência</b>.`},
  {n:`Depois do “mas” mora o autor`, c:`Em “É verdade que X, <b>mas</b> Y”, o X é a concessão (o autor cede um pouquinho) e o Y é o que ele realmente defende. Na dúvida sobre a posição do autor, leia o que vem depois do “mas”.`,
   ex:`“É claro que o uniforme custa caro, <b>mas</b> ele protege os alunos na rua.” → a posição do autor é <b>a favor do uniforme</b>; o preço alto é só a objeção que ele reconhece.`},
  {n:`Reforça, enfraquece ou nada?`, c:`Em questões de “qual frase reforçaria (ou enfraqueceria) a tese”, coloque a frase depois da tese e pergunte: “isso me dá mais vontade de concordar, menos vontade, ou não muda nada?”.`,
   ex:`Tese: “A escola deve ter horta.”<br>“Alunos que cultivam hortas comem mais verduras.” → <b>reforça</b>.<br>“As hortas atraem pragas para o pátio.” → <b>enfraquece</b>.<br>“O pátio é pintado de azul.” → <b>não muda nada</b>.`}
 ],
 passo: [
  `Leia a pergunta: ela quer a tese, o tipo de argumento, a função de um trecho ou o que reforça/enfraquece?`,
  `Leia o 1º e o último parágrafo com atenção redobrada: é ali que a tese costuma aparecer.`,
  `Grife os conectivos (portanto, mas, além disso, porque) e veja que papel cada trecho cumpre.`,
  `Use o teste do “por quê?” para separar tese de argumento.`,
  `Para o tipo de argumento, procure a marca na frase (número, “segundo”, caso concreto, “se… então”, “assim como”).`,
  `Elimine a alternativa que traz a opinião CONTRÁRIA como se fosse a do autor.`
 ],
 exs: [
  {q:`<b>Recreio sem bola?</b><br>“A direção da escola proibiu o futebol no recreio depois que uma janela foi quebrada. A decisão é compreensível, mas resolve o problema errado. Segundo pediatras, correr no intervalo melhora a atenção nas aulas seguintes. Além disso, a quadra fica vazia durante o recreio, enquanto o pátio, cheio de janelas, lota. Portanto, em vez de proibir a bola, a escola deveria levar o jogo para a quadra.”<br>Qual é a tese do texto?`,
   s:[`Uso a “caça à tese nas pontas”: o 1º período só conta o fato (a proibição). A tese aparece no fim, depois do “Portanto”.`,`Confiro com o teste do “por quê?”: “A escola deveria levar o jogo para a quadra.” Por quê? → porque correr melhora a atenção; porque a quadra fica vazia. O resto do texto responde. É a tese!`],
   r:`Em vez de proibir o futebol, a escola deveria transferir o jogo do pátio para a quadra.`},
  {q:`No mesmo texto, qual é a função do trecho “A decisão é compreensível, mas resolve o problema errado”?`,
   s:[`Aplico o “depois do ‘mas’ mora o autor”.`,`Antes do “mas”: “A decisão é compreensível” → o autor reconhece que a direção teve um motivo (concessão).`,`Depois do “mas”: “resolve o problema errado” → é a crítica dele (refutação).`],
   r:`Fazer uma concessão (reconhecer o motivo da direção) e, em seguida, refutar a decisão, mostrando que ela não ataca o problema certo.`},
  {q:`Qual destas frases, se acrescentada ao texto, <b>enfraqueceria</b> a tese do autor?<br>(a) Alunos que se movimentam no recreio voltam mais calmos para a sala.<br>(b) A quadra da escola fica ao lado da sala dos professores.<br>(c) A quadra está interditada por risco de desabamento do telhado.<br>(d) Outras escolas do bairro também têm quadra.`,
   s:[`Uso o “reforça, enfraquece ou nada?”, lembrando que a tese é levar o jogo para a quadra.`,`(a) dá mais um motivo para manter o futebol → <b>reforça</b>. (b) e (d) são informações que não mudam a decisão → <b>nada</b>.`,`(c) Se a quadra não pode ser usada, a solução do autor fica impossível → <b>enfraquece</b>.`],
   r:`(c) A quadra está interditada por risco de desabamento do telhado.`}
 ],
 erros: [
  `<b>Errado:</b> marcar como tese um dado ou exemplo do texto (“a quadra fica vazia”). <b>Certo:</b> a tese é a ideia que esses dados sustentam.`,
  `<b>Errado:</b> marcar como posição principal do autor o que vem antes do “mas” (“a decisão é compreensível”). <b>Certo:</b> isso é só uma concessão; o que ele defende vem depois do “mas”.`,
  `<b>Errado:</b> achar que mostrar o lado contrário enfraquece o texto. <b>Certo:</b> o contra-argumento, quando rebatido, deixa a argumentação mais forte.`,
  `<b>Errado:</b> confundir “segundo pediatras” (autoridade) com exemplo. <b>Certo:</b> exemplo é um caso concreto; autoridade é a voz de quem entende do assunto.`
 ],
 resumo: [
  `Tese = O QUE o autor defende · Argumento = POR QUÊ.`,
  `Tese nas pontas: 1º e último parágrafo (portanto, deve, é preciso).`,
  `[tese] PORQUE [argumento] → teste rápido.`,
  `Número = dados · “segundo” = autoridade · caso = exemplo.`,
  `“É verdade que… mas…” → a opinião do autor vem depois do “mas”.`
 ]
},

/* ===================== p-pub · Publicidade, propaganda e persuasão ===================== */
'p-pub': {
 base: [
  [`Persuadir = levar alguém a agir`, `Todo anúncio quer uma <b>ação</b> do leitor: comprar, doar, votar, vacinar, economizar água. Ex.: “Desligue a torneira enquanto escova os dentes” quer que você mude um hábito.`],
  [`Quem paga diz muito`, `Anúncio assinado por loja ou marca → quer <b>vender</b> (publicidade). Assinado por governo, ONG ou campanha → quer <b>mudar comportamento ou ideia</b> (propaganda/campanha). Olhe o nome no canto do anúncio.`],
  [`O que é o modo imperativo`, `É o modo do verbo usado para <b>ordenar, pedir, convidar ou aconselhar</b>: compre, venha, experimente, doe. Também existe o imperativo negativo: <b>não jogue</b>, <b>não perca</b>. Num anúncio, ele “empurra” o leitor para a ação.`],
  [`Público-alvo`, `É para quem o anúncio foi feito. As palavras e imagens entregam: gíria e skate → adolescentes; “seu bebê” → pais; “aposentado” → idosos. Ex.: “Volta às aulas com estilo!” fala com estudantes.`],
  [`Interlocutor direto: o “você”`, `Anúncios conversam com o leitor (“você merece”, “sua família”). Isso cria proximidade, como se a mensagem fosse só para você.`],
  [`Slogan`, `Frase curta e marcante que acompanha a marca ou a campanha. Usa rima, ritmo, repetição ou duplo sentido para grudar na memória. Ex.: “Pão Bom: de manhã, de tarde, de montão.”`],
  [`Tipos de apelo`, `<b>Emoção</b> (família, medo, saudade, alegria), <b>autoridade</b> (médico, atleta, especialista), <b>pertencimento</b> (“todo mundo já tem”), <b>urgência</b> (“só hoje”), <b>exclusividade</b> (“para poucos”), <b>humor</b>.`],
  [`Imagem também argumenta`, `Cores, fotos e tipos de letra reforçam a mensagem. Verde e folhas sugerem natureza; um sorriso sugere satisfação; letras enormes em vermelho sugerem urgência.`]
 ],
 jeitos: [
  {n:`A pergunta-mestra: o que ele quer que eu FAÇA?`, c:`Antes de qualquer coisa, responda numa frase: “Este texto quer que eu…”. A resposta é a finalidade, e ela elimina metade das alternativas.`,
   ex:`“Sua garrafinha reutilizável evita 150 copos descartáveis por ano. Leve a sua.” → quer que eu <b>use garrafinha reutilizável</b> (mudar hábito), não que eu compre copos.`},
  {n:`Circule os verbos-ordem`, c:`Passe o olho caçando verbos no imperativo (afirmativo e negativo). Eles mostram a ação desejada e, muitas vezes, são o próprio recurso de persuasão pedido na questão.`,
   ex:`“<b>Venha</b> conhecer. <b>Prove</b> sem compromisso. <b>Não perca</b>!” → três imperativos → efeito: <b>chamar o leitor à ação imediata</b>.`},
  {n:`Retrato falado do público`, c:`Liste as palavras e imagens “típicas de alguém” (gírias, objetos, situações). Elas desenham o público-alvo.`,
   ex:`“Chegou o lanche que cabe na lancheira e no recreio! Seu filho vai pedir bis.” → “lancheira”, “recreio”, “seu filho” → público: <b>pais de crianças em idade escolar</b>.`},
  {n:`Caça ao duplo sentido`, c:`Procure a palavra do slogan que pode ser lida de dois jeitos: um ligado ao produto e outro a uma ideia boa. Esse trocadilho é um recurso clássico.`,
   ex:`Ótica Foco: “<b>Enxergue</b> o seu futuro.” → enxergar com os olhos (óculos) + enxergar o futuro (ter perspectiva) → <b>duplo sentido</b>.`},
  {n:`Quem assina?`, c:`Olhe o nome no fim do anúncio. Marca ou loja → publicidade (vender). Governo, ONG, instituição → propaganda/campanha (conscientizar). Isso resolve na hora as questões de finalidade.`,
   ex:`“Cada gota conta. Feche a torneira.” — <i>Companhia de Saneamento do Estado</i> → órgão público, não vende nada aqui → <b>campanha de conscientização</b>.`}
 ],
 passo: [
  `Faça a pergunta-mestra: o que esse texto quer que eu faça?`,
  `Veja quem assina: empresa (vender) ou instituição (conscientizar)?`,
  `Circule os verbos no imperativo e as palavras que falam com “você”.`,
  `Descubra o público-alvo pelas palavras e pela imagem.`,
  `Identifique o apelo (emoção, autoridade, urgência, pertencimento, humor) e algum duplo sentido no slogan.`,
  `Escolha a alternativa que explica o EFEITO do recurso, não só o nome dele.`
 ],
 exs: [
  {q:`<b>Anúncio:</b> “Bicicletaria Pedal Livre. <b>Deixe o trânsito para trás.</b>”<br>Que recursos de persuasão aparecem no slogan?`,
   s:[`Primeiro circulo o verbo-ordem: “Deixe” → imperativo, chamando o leitor à ação.`,`Depois caço o duplo sentido em “deixar para trás”: literal = passar os carros parados, pedalando; figurado = livrar-se do problema do trânsito.`,`Os dois sentidos favorecem a bicicleta.`],
   r:`Verbo no imperativo (“Deixe”) e duplo sentido em “deixar para trás” (ultrapassar os carros e livrar-se do trânsito).`},
  {q:`<b>Cartaz:</b> foto de uma tartaruga marinha presa num saco plástico. Texto: “Para você, é só um saquinho. Para ela, é o fim.” Assinatura: <i>Instituto Mar Limpo</i>.<br>Qual é a finalidade e o principal apelo do cartaz?`,
   s:[`Uso o “quem assina?”: um instituto, não uma loja → é campanha, não vende produto.`,`Pergunta-mestra: quer que eu… <b>pare de jogar plástico no ambiente</b> / use menos sacos plásticos.`,`O apelo: a foto da tartaruga e o contraste “para você / para ela” e “só um saquinho / o fim” mexem com a emoção (culpa e compaixão).`],
   r:`Finalidade: conscientizar sobre o descarte de plástico. Apelo: emoção, reforçado pela imagem e pelo contraste entre “só um saquinho” e “o fim”.`},
  {q:`<b>Anúncio:</b> “Todo mundo da sua turma já tem. E você? <b>Fone Pulso</b> — o som de quem está por dentro.”<br>Qual estratégia de persuasão o anúncio usa e a quem ele se dirige?`,
   s:[`Retrato falado do público: “sua turma” → adolescentes, estudantes.`,`O apelo é de <b>pertencimento</b>: “todo mundo já tem” faz o leitor sentir que vai ficar de fora.`,`Ainda tem duplo sentido: “estar por dentro” = estar atualizado e, também, o fone que fica dentro da orelha.`],
   r:`Apelo ao pertencimento (pressão do grupo), dirigido a adolescentes, com duplo sentido em “estar por dentro”.`}
 ],
 erros: [
  `<b>Errado:</b> dizer que uma campanha de vacinação quer “vender vacina”. <b>Certo:</b> ela quer mudar um comportamento (levar as pessoas a se vacinarem).`,
  `<b>Errado:</b> apontar só o nome do recurso (“imperativo”). <b>Certo:</b> dizer para que ele serve (“chamar o leitor à ação”).`,
  `<b>Errado:</b> ignorar a imagem e a assinatura. <b>Certo:</b> elas revelam a finalidade e o público tanto quanto as palavras.`,
  `<b>Errado:</b> achar que todo anúncio com “você” é dirigido a qualquer pessoa. <b>Certo:</b> procure as pistas (gírias, objetos, situações) que mostram o público específico.`
 ],
 resumo: [
  `Pergunta-mestra: o que ele quer que eu FAÇA?`,
  `Marca assina → vende · instituição assina → conscientiza.`,
  `Imperativo (compre, doe, não perca) = chamado à ação.`,
  `Apelos: emoção, autoridade, urgência, pertencimento, humor.`,
  `Slogan esperto = duplo sentido + rima + ritmo.`
 ]
},

/* ===================== p-gen · Gêneros jornalísticos e fato × opinião ===================== */
'p-gen': {
 base: [
  [`Fato = dá para conferir`, `Um fato pode ser comprovado com documento, medida, registro ou testemunha. Ex.: “A ponte tem 300 metros.” Basta medir.`],
  [`Opinião = julgamento de alguém`, `É a avaliação pessoal, e outra pessoa pode discordar. Ex.: “A ponte é linda.” Não há régua para “linda”.`],
  [`Marcas de opinião`, `<b>Adjetivos de avaliação</b> (ótimo, péssimo, vergonhoso, incrível); <b>advérbios</b> (infelizmente, felizmente, lamentavelmente); <b>verbos de opinião</b> (acho, creio, penso, considero); <b>verbos de dever</b> (deve, deveria, é preciso); exclamações e ironia.`],
  [`Manchete, linha fina e lide`, `<b>Manchete</b> = título principal da notícia. <b>Linha fina</b> = frase logo abaixo, que completa a manchete. <b>Lide</b> = 1º parágrafo, que resume o fato respondendo: o quê, quem, quando, onde, como e por quê.`],
  [`Notícia e reportagem`, `<b>Notícia</b>: fato recente, curto, linguagem objetiva, 3ª pessoa. <b>Reportagem</b>: vai mais fundo num tema, ouve várias fontes, traz dados, pode ter boxes e gráficos.`],
  [`Textos de opinião no jornal`, `<b>Artigo de opinião</b>: assinado por uma pessoa. <b>Editorial</b>: opinião do próprio jornal, sem assinatura individual. <b>Carta do leitor</b>: o leitor opina ou reclama. <b>Crônica</b>: olhar pessoal e leve sobre o dia a dia.`],
  [`Fala entre aspas = voz de outra pessoa`, `Quando a notícia escreve “Foi um susto”, disse a moradora, a opinião é da <b>moradora</b>, não do jornalista. O jornalista só registrou a fala (e isso é um fato: ela disse isso).`],
  [`Enfoque: o mesmo fato, olhares diferentes`, `A escolha das palavras mostra a posição do veículo. “Prefeitura entrega escola” × “Prefeitura <b>finalmente</b> entrega escola” → o “finalmente” destaca a demora.`]
 ],
 jeitos: [
  {n:`Teste da régua`, c:`Pergunte: “Dá para conferir isso com régua, relógio, documento, foto ou contagem?”. Se dá, é fato. Se depende do gosto de quem fala, é opinião.`,
   ex:`“O show durou 3 horas.” → relógio confere → <b>fato</b>.<br>“O show foi longo demais.” → “demais” para quem? → <b>opinião</b>.`},
  {n:`Caça às marcas de opinião`, c:`Varra a frase atrás de adjetivos que avaliam, advérbios como “infelizmente” e verbos como “acho”, “deveria”. Uma única marca dessas já transforma a frase em opinião.`,
   ex:`“<b>Infelizmente</b>, a biblioteca fechou às 17h.” → o horário é fato, mas “infelizmente” acrescenta um julgamento → a frase expressa <b>opinião</b> sobre o fato.`},
  {n:`Teste do “alguém discordaria?”`, c:`Imagine uma pessoa razoável discordando da frase. Se é possível discordar sem ser maluco, é opinião. Se discordar seria só errar a informação, é fato.`,
   ex:`“O novo uniforme é mais bonito.” → alguém pode achar o antigo mais bonito → <b>opinião</b>.<br>“O novo uniforme é azul.” → discordar seria errar → <b>fato</b>.`},
  {n:`Checklist das 6 perguntas`, c:`Para o lide, anote ao lado do 1º parágrafo: QUÊ, QUEM, QUANDO, ONDE, COMO, POR QUÊ, e risque cada uma que encontrar. A que sobrar é a resposta da questão “qual não é respondida”.`,
   ex:`“Ontem à noite (quando), um caminhão de frutas (quem) tombou (o quê) na rodovia estadual (onde) depois de frear bruscamente (como) para desviar de um buraco (por quê).” → as 6 encontradas → <b>lide completo</b>.`},
  {n:`Gênero pela finalidade + assinatura`, c:`Informar um fato novo → notícia. Aprofundar com várias fontes → reportagem. Opinar com nome do autor → artigo. Opinar em nome do jornal → editorial. Contar o cotidiano com olhar pessoal → crônica.`,
   ex:`Texto na página 2, título “Nossa posição”, sem nome de autor, criticando o preço da passagem → opina em nome do jornal → <b>editorial</b>.`}
 ],
 passo: [
  `Leia a pergunta: ela quer fato/opinião, lide, gênero ou enfoque?`,
  `Para fato × opinião, aplique o teste da régua e procure as marcas de opinião.`,
  `Para o lide, faça o checklist das 6 perguntas no 1º parágrafo.`,
  `Para o gênero, pergunte qual é a finalidade (informar ou opinar) e quem assina.`,
  `Lembre: fala entre aspas é a voz do entrevistado, não do jornalista.`,
  `Compare as palavras escolhidas quando houver dois textos sobre o mesmo fato.`
 ],
 exs: [
  {q:`Classifique cada frase como fato ou opinião:<br>I. O festival reuniu 12 bandas no domingo.<br>II. Infelizmente, o som estava baixo demais.<br>III. Segundo a organização, 5 mil pessoas compareceram.<br>IV. O evento deveria acontecer todo mês.`,
   s:[`I → teste da régua: dá para contar as bandas → fato.`,`II → caço as marcas: “infelizmente” e “baixo demais” → opinião.`,`III → é fato: a organização informou um número que pode ser conferido. O “segundo” só indica a fonte.`,`IV → “deveria” é verbo de dever, uma proposta → opinião.`],
   r:`I fato · II opinião · III fato · IV opinião.`},
  {q:`<b>Notícia:</b> “Um cachorro caramelo invadiu o campo durante a final do campeonato amador do bairro, na tarde de ontem, no estádio municipal. Correndo atrás da bola, o animal interrompeu a partida por dez minutos. Segundo o juiz, o portão lateral tinha ficado aberto.”<br>Que trecho responde à pergunta “por quê?” (por que o cachorro conseguiu entrar)?`,
   s:[`Faço o checklist: quê = invadiu o campo e interrompeu o jogo; quem = um cachorro caramelo; quando = tarde de ontem; onde = estádio municipal; como = correndo atrás da bola.`,`Sobra o “por quê?”: o motivo de ele ter entrado aparece na fala atribuída ao juiz.`],
   r:`“O portão lateral tinha ficado aberto.”`},
  {q:`<b>Duas manchetes sobre o mesmo fato:</b><br>Jornal A: “Escola Municipal do Jardim Sol é reaberta após reforma”.<br>Jornal B: “Depois de três anos e duas promessas, Jardim Sol finalmente tem sua escola de volta”.<br>O que diferencia as duas?`,
   s:[`Fato comum: a escola foi reaberta depois de uma reforma.`,`Jornal A: só informa, sem marcas de opinião → enfoque mais neutro.`,`Jornal B: “três anos e duas promessas” e “finalmente” destacam a demora e as promessas não cumpridas → enfoque crítico.`],
   r:`A manchete A informa de forma neutra; a B, pela escolha das palavras (“finalmente”, “duas promessas”), critica a demora da obra.`}
 ],
 erros: [
  `<b>Errado:</b> achar que número é sempre fato. <b>Certo:</b> “Apenas 2 mil pessoas, um fracasso” mistura dado (2 mil) com opinião (“apenas”, “fracasso”).`,
  `<b>Errado:</b> dizer que uma notícia com fala entre aspas virou texto de opinião. <b>Certo:</b> a opinião é do entrevistado; a notícia continua informando.`,
  `<b>Errado:</b> confundir editorial com artigo de opinião. <b>Certo:</b> editorial = voz do jornal, sem autor individual; artigo = assinado por alguém.`,
  `<b>Errado:</b> achar que uma informação errada vira opinião. <b>Certo:</b> “A ponte tem 900 metros” (quando tem 300) é um dado falso, mas não é opinião: dá para conferir e desmentir com uma medida.`
 ],
 resumo: [
  `Fato = dá para conferir · Opinião = dá para discordar.`,
  `Marcas de opinião: adjetivo que avalia, infelizmente, acho, deveria.`,
  `Lide = quê, quem, quando, onde, como, por quê.`,
  `Artigo tem autor · editorial é a voz do jornal.`,
  `Aspas = opinião do entrevistado, não do jornalista.`
 ]
},

/* ===================== p-fake · Fake news ===================== */
'p-fake': {
 base: [
  [`O que é fake news`, `É uma informação <b>falsa</b> feita para parecer notícia de verdade, com o objetivo de enganar (para ganhar cliques, dinheiro ou influenciar opiniões). Ex.: um “alerta” inventado com cara de reportagem.`],
  [`Desinformação nem sempre é mentira inteira`, `Também desinforma: foto verdadeira com legenda falsa, notícia antiga como se fosse nova, número verdadeiro cortado do contexto. Ex.: vídeo de uma enchente de 2015 postado como “agora”.`],
  [`Por que ela se espalha tão rápido`, `Porque mexe com <b>emoções fortes</b>: medo, raiva, espanto. Quem sente isso compartilha antes de pensar. Ex.: “URGENTE: vão cancelar as férias!” dá vontade de avisar todo mundo.`],
  [`Fonte confiável`, `É a que pode ser identificada e cobrada: tem nome, endereço, responsável, histórico. Um portal de notícias conhecido, um órgão oficial, uma universidade. “Um amigo de um primo que é médico” não é fonte.`],
  [`Caça-cliques`, `Título exagerado que promete algo chocante para você clicar (“Você não vai acreditar no que aconteceu!”). Nem todo caça-cliques é falso, mas é sinal de alerta.`],
  [`Agência de checagem`, `Equipe de jornalistas que investiga boatos e diz se são verdadeiros, falsos ou enganosos, mostrando as provas. Ferramenta ótima antes de compartilhar.`],
  [`Sátira`, `Texto de humor que inventa notícias de propósito, num site conhecido por isso. Não é fake news enquanto o leitor sabe que é piada; vira problema quando circula sem esse aviso e alguém acredita.`]
 ],
 jeitos: [
  {n:`Termômetro da emoção`, c:`Se a mensagem te deixa com muito medo, raiva ou espanto, acenda o alerta: emoção forte é o “combustível” da fake news. Respire e confira antes de acreditar.`,
   ex:`“ABSURDO!!! Escolas vão proibir o recreio a partir de segunda!!!” → muita indignação, caixa alta e exclamações → <b>pare e verifique</b> antes de repassar.`},
  {n:`Fonte com nome e sobrenome`, c:`Procure quem disse: nome da pessoa, da instituição, do estudo. Expressões vagas como “cientistas afirmam”, “especialistas garantem”, “um médico disse” sem nome são sinal de alerta.`,
   ex:`“Cientistas confirmam que água gelada causa gripe.” → quais cientistas? que estudo? → <b>fonte vaga = alerta</b>.`},
  {n:`Leitura lateral`, c:`Em vez de ler a mensagem várias vezes, abra outra aba e procure o mesmo assunto em veículos conhecidos e agências de checagem. Se nenhum fala disso, desconfie.`,
   ex:`Mensagem: “Prefeitura vai dar celular grátis a todos os alunos.” → procuro no site da prefeitura e em jornais → nada encontrado → <b>provavelmente falso</b>.`},
  {n:`Raio X do link`, c:`Confira o endereço do site letra por letra. Sites falsos imitam nomes famosos trocando letras, acrescentando hífens ou terminações estranhas.`,
   ex:`Jornal verdadeiro: <i>jornalvalesereno.com.br</i>. Link recebido: <i>jornal-vale-sereno.news.co</i> → hífens e terminação diferente → <b>imitação</b>.`},
  {n:`Na prova: escolha a atitude prudente`, c:`Em questões sobre “atitude adequada”, a resposta certa é quase sempre a que manda <b>verificar</b> (fonte, data, outros veículos). Elimine “compartilhar logo”, “acreditar porque muitos compartilharam” e “acreditar porque veio de alguém da família”.`,
   ex:`Alternativas: compartilhar para avisar / confiar porque tem 10 mil curtidas / <b>conferir em sites confiáveis antes de repassar</b> / responder com opinião. → fico com a terceira.`}
 ],
 passo: [
  `Leia a pergunta: ela quer os sinais de alerta, a atitude correta ou o tipo de problema (falso, antigo, fora de contexto, sátira)?`,
  `Meça o termômetro da emoção: caixa alta, “!!!”, “URGENTE”, “compartilhe”.`,
  `Procure fonte com nome, autor e data. Vago ou ausente = alerta.`,
  `Confira o link e se a data e o lugar batem com o que a mensagem diz.`,
  `Na dúvida entre alternativas, fique com a que manda verificar antes de compartilhar.`
 ],
 exs: [
  {q:`<b>Mensagem:</b> “Cientistas confirmam: comer 3 bananas por dia faz você crescer 5 cm em um mês!!! Os médicos não querem que você saiba. COMPARTILHE!”<br>Aponte os sinais de que ela pode ser falsa.`,
   s:[`Termômetro da emoção: exclamações em série e “COMPARTILHE” em caixa alta → alerta.`,`Fonte com nome? “Cientistas confirmam” → quais? Nenhum nome, nenhum estudo → alerta.`,`A promessa é exagerada (5 cm em um mês) e a frase “os médicos não querem que você saiba” tenta fazer você desconfiar justamente de quem entende do assunto.`],
   r:`Fonte vaga, ausência de autor e de dados, promessa exagerada, tom sensacionalista e pedido de compartilhamento.`},
  {q:`Você recebe uma notícia com o link <i>jornal-vale-sereno.news.co</i>, mas o jornal da sua cidade é o <i>jornalvalesereno.com.br</i>. A notícia não tem nome de autor. O que esses detalhes indicam e o que fazer?`,
   s:[`Uso o raio X do link: os hífens e a terminação “.news.co” não são do jornal verdadeiro → é uma imitação.`,`Sem autor, ninguém se responsabiliza pelo conteúdo → outro alerta.`,`Faço a leitura lateral: procuro a mesma notícia no site verdadeiro do jornal.`],
   r:`Indicam que o site imita o jornal verdadeiro; antes de acreditar, é preciso procurar a notícia no site oficial e em outros veículos confiáveis.`},
  {q:`Um vídeo mostra um tubarão nadando numa avenida alagada, com a legenda “Enchente na Avenida Beira-Rio, HOJE!”. Uma busca mostra que o vídeo é uma montagem que circula há anos, com legendas de cidades diferentes. Que tipo de desinformação é essa e qual seria a melhor forma de descobrir?`,
   s:[`O vídeo é falso (montagem) E foi reaproveitado com novas legendas → descontextualização de lugar e de data.`,`O jeito de descobrir: busca reversa de imagem (procurar de onde o vídeo veio) e consulta a agências de checagem.`],
   r:`Conteúdo manipulado e descontextualizado (reaproveitado com lugar e data falsos). Descobre-se com busca reversa de imagem e consulta a agências de checagem.`}
 ],
 erros: [
  `<b>Errado:</b> “Tem milhares de compartilhamentos, então é verdade.” <b>Certo:</b> número de compartilhamentos não prova nada; mentira também viraliza.`,
  `<b>Errado:</b> “A notícia é verdadeira, então não há problema em repassar.” <b>Certo:</b> notícia verdadeira e antiga, apresentada como nova, também desinforma.`,
  `<b>Errado:</b> confiar porque veio de alguém conhecido. <b>Certo:</b> quem repassa pode ter sido enganado; confira a origem, não o mensageiro.`,
  `<b>Errado:</b> chamar toda sátira de fake news. <b>Certo:</b> sátira é humor assumido; o problema é quando circula sem contexto e alguém acredita.`
 ],
 resumo: [
  `Emoção forte → pare e confira.`,
  `Fonte com nome · autor · data · link verdadeiro.`,
  `Leitura lateral: procure em outros veículos.`,
  `Verdade antiga como nova = desinformação.`,
  `Na prova: a atitude certa é VERIFICAR antes de compartilhar.`
 ]
},

/* ===================== p-lit · Narrativa e poema ===================== */
'p-lit': {
 base: [
  [`Autor × narrador`, `O <b>autor</b> é a pessoa real que escreveu. O <b>narrador</b> é a voz que conta a história dentro do texto. Uma escritora adulta pode criar um narrador que é um menino de 10 anos ou até um gato.`],
  [`Narrador em 1ª pessoa`, `Usa <b>eu/nós</b> fora das falas e participa da história. Pode ser o protagonista (“Eu perdi o ônibus e…”) ou uma testemunha que conta a história de outro (“Eu vi quando meu vizinho…”).`],
  [`Narrador em 3ª pessoa`, `Conta de fora (<b>ele/ela/eles</b>). <b>Observador</b>: só relata o que se vê e se ouve, como uma câmera. <b>Onisciente</b>: sabe o que os personagens pensam e sentem por dentro.`],
  [`Personagens`, `<b>Protagonista</b> = personagem principal. <b>Antagonista</b> = quem se opõe a ele (pode ser uma pessoa, um bicho ou até a natureza). <b>Secundárias</b> = ajudam a história a andar.`],
  [`Tempo e espaço`, `<b>Espaço</b> = onde acontece. <b>Tempo cronológico</b> = o do relógio e do calendário, em ordem (“às 7h”, “no dia seguinte”). <b>Tempo psicológico</b> = como o personagem sente o tempo (“aquele minuto durou uma eternidade”) ou lembranças fora de ordem.`],
  [`Enredo em 4 momentos`, `<b>Situação inicial</b> (tudo calmo) → <b>conflito</b> (algo dá errado) → <b>clímax</b> (ponto de maior tensão) → <b>desfecho</b> (como termina). Ex.: festa preparada → bolo cai → todos tentam salvar a festa → acabam comendo o bolo de colher, rindo.`],
  [`Verbos de dizer`, `Disse, perguntou, respondeu, gritou, sussurrou, prometeu, pediu: são os verbos que introduzem a fala dos personagens. Ajudam a reconhecer o discurso direto e o indireto.`],
  [`Poema: verso, estrofe e eu lírico`, `<b>Verso</b> = cada linha do poema. <b>Estrofe</b> = grupo de versos. <b>Rima</b> = repetição de som no fim dos versos. <b>Eu lírico</b> = a voz que fala no poema, que pode ser bem diferente do poeta.`]
 ],
 jeitos: [
  {n:`Teste do “eu” fora das aspas`, c:`Procure “eu, me, meu, nós” no texto do NARRADOR, fora dos travessões e aspas. Se aparece → 1ª pessoa. Se só aparece dentro das falas dos personagens → 3ª pessoa.`,
   ex:`“— Eu não vou! — gritou Pedro. A mãe suspirou e fechou a porta.” → o “eu” está dentro da fala de Pedro; o narrador usa “gritou Pedro”, “a mãe suspirou” → <b>3ª pessoa</b>.`},
  {n:`Teste do pensamento`, c:`Num texto em 3ª pessoa, pergunte: o narrador conta o que o personagem pensa ou sente por dentro, sem ele dizer em voz alta? Se sim → onisciente. Se só mostra ações e falas → observador.`,
   ex:`“Lia entregou o presente. <b>Torcia, em silêncio, para que ninguém percebesse que era usado.</b>” → o narrador revela o que Lia deseja em silêncio → <b>onisciente</b>.`},
  {n:`O que dá errado?`, c:`Para achar o conflito, pergunte: “O que o personagem quer e o que atrapalha?”. O conflito é o obstáculo, não o desejo nem o final.`,
   ex:`Marcos quer apresentar o trabalho, mas o pen drive não abre a 5 minutos da apresentação.<br>Desejo: apresentar. Obstáculo: <b>o pen drive que não abre → conflito</b>.`},
  {n:`Raio X do discurso`, c:`Travessão ou aspas com a fala exata → <b>direto</b>. Verbo de dizer + “que” ou “se” → <b>indireto</b>. Pensamento do personagem misturado à frase do narrador, sem aviso → <b>indireto livre</b>.`,
   ex:`“Rui perguntou <b>se</b> o jogo já tinha começado.” → indireto.<br>“Rui olhou o relógio. <b>Atrasado de novo, que droga!</b> Correu para o ponto.” → indireto livre.`},
  {n:`Tabela da conversão para o indireto`, c:`Ao passar do direto para o indireto, tudo “se afasta” um passo:<br><table class="tb"><tr><td>eu / meu</td><td>ele / seu (dele)</td></tr><tr><td>vou fazer / farei</td><td>iria fazer / faria</td></tr><tr><td>fiz</td><td>tinha feito</td></tr><tr><td>aqui / este</td><td>ali / aquele</td></tr><tr><td>hoje / amanhã</td><td>naquele dia / no dia seguinte</td></tr><tr><td>Faça! (imperativo)</td><td>que fizesse</td></tr></table>`,
   ex:`“— Fiz a lição hoje — disse Tiago.” → Tiago disse que <b>tinha feito</b> a lição <b>naquele dia</b>.`}
 ],
 passo: [
  `Leia a pergunta: ela quer foco narrativo, conflito, tipo de discurso, elementos (tempo/espaço/personagem) ou algo do poema?`,
  `Para o foco, faça o teste do “eu” fora das aspas; se for 3ª pessoa, faça o teste do pensamento.`,
  `Para o conflito, pergunte o que o personagem quer e o que atrapalha.`,
  `Para o discurso, procure travessão/aspas (direto), verbo de dizer + “que/se” (indireto) ou pensamento sem aviso (indireto livre).`,
  `Na conversão para o indireto, use a tabela: pessoa, tempo do verbo, lugar e dia se “afastam”.`,
  `No poema, separe poeta de eu lírico e conte versos e estrofes com calma.`
 ],
 exs: [
  {q:`“Algum tempo hesitei se devia abrir estas memórias pelo princípio ou pelo fim, isto é, se poria em primeiro lugar o meu nascimento ou a minha morte.” (Machado de Assis, <i>Memórias Póstumas de Brás Cubas</i>, 1881)<br>Qual é o foco narrativo do trecho?`,
   s:[`Faço o teste do “eu” fora das aspas: não há aspas de personagem; o próprio narrador diz “hesitei”, “estas memórias”, “o meu nascimento”, “a minha morte”.`,`Verbo e pronomes em 1ª pessoa no texto do narrador → 1ª pessoa.`,`E ele conta a própria vida (até a própria morte!): é o protagonista da história.`],
   r:`1ª pessoa: narrador-personagem (protagonista que conta as próprias memórias).`},
  {q:`“Marta sorriu para a tia e agradeceu o suéter de lã. Por dentro, contava os dias para o verão e calculava quantos domingos teria de usar aquilo nas visitas.”<br>Qual é o tipo de narrador?`,
   s:[`Teste do “eu”: não aparece → 3ª pessoa (“Marta sorriu”).`,`Teste do pensamento: “Por dentro, contava os dias… e calculava…” → o narrador sabe o que Marta pensa sem ela falar.`,`Ainda tem um contraste: por fora sorri, por dentro não gostou. Só um narrador onisciente mostra isso.`],
   r:`Narrador em 3ª pessoa, onisciente (conhece os pensamentos de Marta).`},
  {q:`Passe para o discurso indireto: “— Feche a janela, Lia! — pediu a mãe.”`,
   s:[`Raio X: travessão + fala exata → está no direto.`,`Uso a tabela: verbo de dizer (“pediu”) + “que”. O imperativo “Feche” vira “que fechasse”.`,`Lia, que era chamada (vocativo), passa a ser a pessoa a quem a mãe pede: “pediu a Lia”.`],
   r:`A mãe pediu a Lia que fechasse a janela.`}
 ],
 erros: [
  `<b>Errado:</b> achar que o narrador é sempre o autor. <b>Certo:</b> o narrador é uma voz criada; Machado de Assis não morreu antes de escrever Brás Cubas.`,
  `<b>Errado:</b> dizer que é 1ª pessoa porque há “eu” dentro de uma fala com travessão. <b>Certo:</b> só conta o “eu” do narrador, fora das falas.`,
  `<b>Errado:</b> apontar o desfecho ou o desejo do personagem como conflito. <b>Certo:</b> conflito é o problema que atrapalha e faz a história andar.`,
  `<b>Errado:</b> passar para o indireto só tirando as aspas (“Ela disse que vou chegar amanhã”). <b>Certo:</b> ajustar pessoa, tempo e dia: “Ela disse que chegaria no dia seguinte”.`
 ],
 resumo: [
  `“Eu” fora das falas → 1ª pessoa.`,
  `3ª pessoa + sabe o que pensam → onisciente; só mostra → observador.`,
  `Conflito = o que atrapalha o desejo do personagem.`,
  `Direto: travessão · Indireto: disse que · Livre: pensamento sem aviso.`,
  `Indireto: eu→ele, vou→iria, aqui→ali, amanhã→no dia seguinte.`,
  `Poema: verso = linha, estrofe = grupo, eu lírico ≠ poeta.`
 ]
},

/* ===================== p-inter · Intertextualidade ===================== */
'p-inter': {
 base: [
  [`Intertextualidade = texto que conversa com texto`, `Acontece quando um texto retoma outro, já conhecido: copiando, imitando, lembrando ou brincando com ele. Ex.: um anúncio que diz “Era uma vez um preço baixo…” conversa com os contos de fadas.`],
  [`Texto-fonte`, `É o texto original, o que está sendo retomado. Para entender a conversa, você precisa reconhecer o texto-fonte; por isso, quanto mais você lê, mais fácil fica.`],
  [`Paródia`, `Imita um texto famoso (forma, ritmo, palavras) mas <b>muda o sentido</b>, para criticar ou fazer rir. Ex.: “Minha terra tem palmeiras” vira “Minha rua tem buracos”.`],
  [`Paráfrase`, `Diz a mesma coisa com outras palavras, <b>sem mudar o sentido</b>. Ex.: “Quem espera sempre alcança” → “Quem tem paciência consegue o que deseja”.`],
  [`Citação`, `Reproduz o trecho exatamente, entre aspas, e indica de quem é. Ex.: Como escreveu Gonçalves Dias, “Minha terra tem palmeiras, / Onde canta o Sabiá”.`],
  [`Alusão (referência)`, `Apenas lembra o outro texto, de passagem, sem copiar nem dizer a fonte. Quem conhece o original percebe. Ex.: chamar alguém de “a Cinderela da festa” (saiu correndo à meia-noite).`],
  [`Epígrafe`, `Trecho de outro autor colocado no começo de um livro, capítulo ou poema, separado do texto, para anunciar o tom ou o tema da obra.`],
  [`Clássicos bastante retomados (domínio público)`, `“Canção do Exílio” (Gonçalves Dias, 1843); fábulas como “A cigarra e a formiga” (atribuída a Esopo); “Ser ou não ser, eis a questão” (Shakespeare, <i>Hamlet</i>); contos de fadas; provérbios populares.`]
 ],
 jeitos: [
  {n:`Ouça o eco da forma`, c:`Se um verso, um slogan ou uma frase tem um ritmo “familiar”, pare e pergunte: de onde conheço isso? A estrutura repetida (mesmo número de sílabas, mesma ordem de palavras) denuncia o texto-fonte.`,
   ex:`“Água mole em celular duro, tanto cai até que quebra.” → mesmo ritmo e estrutura de “Água mole em pedra dura, tanto bate até que fura” → <b>texto-fonte: o provérbio</b>.`},
  {n:`Mesmo sentido ou outro sentido?`, c:`Compare a mensagem do texto novo com a do original. Mesma ideia, outras palavras → <b>paráfrase</b>. Mesma forma, ideia mudada (zoeira, crítica, inversão) → <b>paródia</b>.`,
   ex:`Original: “Quem com ferro fere, com ferro será ferido.”<br>A: “Quem faz mal aos outros acaba recebendo o mesmo mal.” → <b>paráfrase</b>.<br>B: “Quem com spoiler fere, com spoiler será ferido.” → muda o assunto para fazer humor → <b>paródia</b>.`},
  {n:`Aspas + nome = citação`, c:`Tem o trecho exato entre aspas e o nome do autor? É citação. Só lembra o outro texto, sem aspas nem fonte? É alusão. Fica sozinho no começo da obra, separado? É epígrafe.`,
   ex:`Como escreveu Shakespeare em <i>Hamlet</i>: “Ser ou não ser, eis a questão.” → <b>citação</b>.<br>“Prova surpresa? Estudar ou não estudar, eis a questão.” → <b>alusão</b> (só lembra a fala).`},
  {n:`Por que ele chamou esse texto?`, c:`Depois de achar a referência, pergunte qual EFEITO ela cria: humor, crítica, chamar atenção (anúncios adoram), dar autoridade ao argumento ou emocionar. As questões costumam pedir esse efeito.`,
   ex:`Anúncio de imobiliária: “Sua casa tem palmeiras, onde canta o sabiá?” → retoma a “Canção do Exílio” para associar o imóvel à <b>beleza e ao orgulho da terra natal</b> e chamar atenção do leitor.`}
 ],
 passo: [
  `Leia a pergunta: ela quer o texto-fonte, o tipo de relação ou o efeito da retomada?`,
  `Procure o eco: palavras, ritmo ou estrutura que lembram um texto famoso.`,
  `Compare os sentidos: o novo texto mantém (paráfrase) ou muda (paródia) a mensagem?`,
  `Confira a forma: aspas + autor (citação), só lembrança (alusão), trecho no começo da obra (epígrafe).`,
  `Explique o efeito: humor, crítica, autoridade ou chamar a atenção.`
 ],
 exs: [
  {q:`Provérbio: “Água mole em pedra dura, tanto bate até que fura.” Classifique as reescritas:<br>A. “Quem insiste com paciência acaba vencendo a resistência.”<br>B. “Celular velho em tomada frouxa, tanto cai até que quebra.”`,
   s:[`Uso o “mesmo sentido ou outro sentido?”.`,`A: diz que a persistência vence a dificuldade, exatamente a ideia do provérbio, com outras palavras → paráfrase.`,`B: copia o ritmo e a estrutura, mas fala de um celular que cai e quebra; o sentido muda para fazer humor → paródia.`],
   r:`A é paráfrase; B é paródia.`},
  {q:`Em qual trecho há <b>citação</b>?<br>(a) “Minha rua tem buracos onde canta o pneu.”<br>(b) Como escreveu Gonçalves Dias em 1843: “Minha terra tem palmeiras, / Onde canta o Sabiá”.<br>(c) “Ela é a Cinderela da turma: some antes da meia-noite.”<br>(d) “Estudar ou não estudar, eis a questão.”`,
   s:[`Aplico o “aspas + nome = citação”.`,`(a) imita e muda o sentido → paródia. (c) e (d) só lembram outros textos, sem reproduzir o trecho exato nem indicar o autor → alusão.`,`(b) traz o trecho exato entre aspas e o nome do autor → citação.`],
   r:`(b)`},
  {q:`<b>Cartum:</b> no verão, a formiga carrega folhas sob o sol, enquanto a cigarra, deitada numa espreguiçadeira, grava vídeos com o celular. Legenda: “No inverno, a cigarra tinha 2 milhões de seguidores e patrocínio, e foi a formiga quem bateu à porta dela pedindo ajuda.”<br>Que relação o cartum estabelece com a fábula “A cigarra e a formiga” e com que efeito?`,
   s:[`Ouço o eco: cigarra que se diverte no verão, formiga que trabalha, inverno, pedir ajuda → texto-fonte: a fábula atribuída a Esopo.`,`Na fábula, quem passa necessidade no inverno e pede ajuda é a cigarra. No cartum, isso se inverte: a formiga é quem pede.`,`A forma é mantida e o sentido é invertido → paródia. Efeito: humor e crítica a um mundo em que a fama na internet pode render mais que o trabalho tradicional.`],
   r:`É uma paródia: retoma a fábula e inverte a moral, criando humor e criticando a valorização da fama nas redes sociais.`}
 ],
 erros: [
  `<b>Errado:</b> chamar de paráfrase todo texto parecido com o original. <b>Certo:</b> se o sentido mudou (humor, crítica, inversão), é paródia.`,
  `<b>Errado:</b> achar que paródia é sempre engraçada. <b>Certo:</b> ela também pode ser séria, quando usa o original para criticar algo.`,
  `<b>Errado:</b> confundir citação com alusão. <b>Certo:</b> citação tem o trecho exato com aspas e autor; alusão só lembra o original.`,
  `<b>Errado:</b> parar em “é intertextualidade” e não explicar o efeito. <b>Certo:</b> dizer para que serve a retomada (rir, criticar, convencer, chamar atenção).`
 ],
 resumo: [
  `Intertextualidade = um texto conversando com outro.`,
  `Paródia = mesma forma, sentido mudado (ri ou critica).`,
  `Paráfrase = mesmo sentido, outras palavras.`,
  `Citação = aspas + autor · Alusão = só lembra · Epígrafe = no começo da obra.`,
  `Achou a referência? Diga o EFEITO.`
 ]
}

};
