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
