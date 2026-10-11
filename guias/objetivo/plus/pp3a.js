/* REVISÃO TURBINADA · P3 (parte A): período composto, orações adjetivas, verbos de ligação, regência e crase */
const PLUS_P3A = {

/* ================= p-per · Período composto ================= */
'p-per': {
 base: [
  [`O que é verbo`, `É a palavra que muda conforme o <b>tempo</b> (passado, presente, futuro) e a <b>pessoa</b> (eu, ele, nós). Indica ação, estado ou fenômeno da natureza.<br>Teste rápido: dá para dizer “ontem eu ___” ou “amanhã ele ___”? Então é verbo. Ex.: corri, estudaremos, choveu, parece.`],
  [`Locução verbal = um verbo só`, `Locução é um <b>auxiliar</b> (ir, estar, ter, poder, dever, querer…) + um verbo principal no infinitivo, gerúndio ou particípio. Juntos, valem por <b>um</b> verbo.<br>Ex.: “<b>vou viajar</b>”, “<b>estava dormindo</b>”, “<b>tinha saído</b>”, “<b>pode chover</b>” → cada uma conta como 1.`],
  [`Cada verbo = uma oração`, `Oração é o pedaço da frase organizado em volta de um verbo. Então: <b>conte os verbos e você saberá quantas orações há</b>.<br>Ex.: “Acordei, lavei o rosto e desci.” → acordei · lavei · desci = <b>3 orações</b>.`],
  [`Sujeito × predicado`, `<b>Sujeito</b> é de quem se fala. Para achá-lo, pergunte <b>“quem?”</b> ou <b>“o quê?”</b> ao verbo. <b>Predicado</b> é tudo o que se diz do sujeito.<br>Ex.: “Os vizinhos do 3º andar <b>reclamaram</b> do barulho.” Quem reclamou? <b>os vizinhos do 3º andar</b> (sujeito). O sujeito pode vir depois do verbo: “<b>Chegaram</b> as notas.” O que chegou? <b>as notas</b>.`],
  [`Conjunção: a placa de trânsito da frase`, `Conjunção é a palavra que <b>liga orações</b> e mostra a relação entre elas: e, mas, ou, porque, quando, se, embora, portanto…<br>Mudar a conjunção muda o sentido: “Estudei <b>e</b> passei” (soma) × “Estudei, <b>mas</b> não passei” (oposição).`],
  [`Coordenadas: cada uma anda sozinha`, `São orações independentes: se você colocar um ponto final entre elas, as duas continuam com sentido completo.<br><b>Assindéticas</b> = sem conjunção (só vírgula): “Cheguei, vi, venci.” <b>Sindéticas</b> = com conjunção. Tipos: <b>aditiva</b> (e, nem) · <b>adversativa</b> (mas, porém, contudo, todavia, entretanto) · <b>alternativa</b> (ou… ou, ora… ora) · <b>conclusiva</b> (logo, portanto, por isso) · <b>explicativa</b> (pois, porque — geralmente depois de uma ordem ou opinião: “Leve o casaco, <b>pois</b> vai esfriar”).`],
  [`Subordinadas: precisam da principal`, `Sozinha, a subordinada fica “pendurada”: “<b>Quando o ônibus chegou</b>.” → incompleta! Ela depende de outra oração, a <b>principal</b>: “Quando o ônibus chegou, <b>entramos</b>.”<br>São três famílias, com nome de classe de palavra: <b>substantiva</b> (vale por um substantivo: “isso”), <b>adjetiva</b> (vale por um adjetivo), <b>adverbial</b> (vale por um advérbio: circunstância).`],
  [`Adjunto adverbial: a circunstância`, `Adjunto adverbial é o termo que diz <b>quando, onde, como, por quê</b>… Ex.: “Saímos <b>cedo</b>.” (quando?)<br>A oração adverbial faz o mesmo papel, só que com verbo: “Saímos <b>assim que o sol nasceu</b>.” (quando?) → ela é um adjunto adverbial “em forma de oração”.`],
  [`Mapa das conjunções adverbiais`, `<table class="tb"><tr><td><b>causa</b></td><td>porque, já que, visto que, como (no início)</td></tr><tr><td><b>tempo</b></td><td>quando, enquanto, assim que, logo que</td></tr><tr><td><b>condição</b></td><td>se, caso, desde que (+ subjuntivo)</td></tr><tr><td><b>concessão</b></td><td>embora, ainda que, mesmo que</td></tr><tr><td><b>finalidade</b></td><td>para que, a fim de que</td></tr><tr><td><b>consequência</b></td><td>tão… que, tanto… que</td></tr><tr><td><b>comparação</b></td><td>como, mais… (do) que</td></tr><tr><td><b>conformidade</b></td><td>conforme, segundo, como (= conforme)</td></tr><tr><td><b>proporção</b></td><td>à medida que, quanto mais… mais</td></tr></table>`]
 ],
 jeitos: [
  {n:`Circule os verbos`, c:`Antes de qualquer coisa, circule todos os verbos (locução verbal = um círculo só). O número de círculos é o número de orações. Isso evita metade dos erros de classificação.`,
   ex:`“Quando abri a mochila, percebi que tinha esquecido o estojo.” → abri · percebi · tinha esquecido → <b>3 orações</b>.`},
  {n:`Teste do ponto final`, c:`Troque a vírgula ou a conjunção por um ponto final. Os dois pedaços fazem sentido sozinhos? <b>Coordenadas</b>. Um deles ficou “pendurado”? <b>Subordinada</b>.`,
   ex:`“Fiz a lição e fui jogar.” → “Fiz a lição. Fui jogar.” Os dois funcionam → <b>coordenadas</b>.<br>“Se eu fizer a lição, vou jogar.” → “Se eu fizer a lição.” Ficou incompleto → <b>subordinada</b> (condicional).`},
  {n:`Teste do ISSO (substantiva)`, c:`Troque a oração inteira por <b>“isso”</b>. Se a frase continua de pé, a oração é <b>substantiva</b> (ela ocupa o lugar de um substantivo: sujeito ou complemento).`,
   ex:`“Ninguém sabia <i>que a prova tinha mudado de sala</i>.” → “Ninguém sabia <b>isso</b>.” ✔ → <b>substantiva</b>.<br>“É necessário <i>que todos cheguem cedo</i>.” → “<b>Isso</b> é necessário.” ✔ → <b>substantiva</b>.`},
  {n:`Teste do ADJETIVO (adjetiva)`, c:`Troque a oração por um <b>adjetivo</b>. Se der certo, a oração é <b>adjetiva</b>: ela caracteriza o substantivo que vem antes.`,
   ex:`“Árvore <i>que dá frutos</i>” → “árvore <b>frutífera</b>” ✔ → <b>adjetiva</b>.<br>“Aluno <i>que falta muito</i>” → “aluno <b>faltoso</b>” ✔ → <b>adjetiva</b>.`},
  {n:`Teste do ADVÉRBIO (adverbial)`, c:`Pergunte à oração: responde <b>quando? por quê? em que condição? apesar de quê? para quê? com que resultado?</b> Se responde, é <b>adverbial</b> — e a pergunta já diz o tipo.`,
   ex:`“Saímos <i>assim que a chuva parou</i>.” → Quando saímos? → <b>adverbial temporal</b> (= “saímos depois”).<br>“Fechei a janela <i>para que o gato não fugisse</i>.” → Para quê? → <b>adverbial final</b> (finalidade).`},
  {n:`Troque pela conjunção “famosa”`, c:`Na dúvida sobre a relação, troque a conjunção pela mais conhecida de cada tipo: <b>mas</b> (oposição), <b>porque</b> (causa), <b>quando</b> (tempo), <b>se</b> (condição), <b>embora</b> (concessão), <b>portanto</b> (conclusão). Se o sentido não muda, achou.`,
   ex:`“Estava com febre; <b>contudo</b>, foi à aula.” → “Estava com febre, <b>mas</b> foi à aula.” ✔ → <b>adversativa</b>.<br>“<b>Como</b> chovia, ficamos em casa.” → “<b>Porque</b> chovia, ficamos em casa.” ✔ → <b>causa</b>.`}
 ],
 passo: [
  `Circule os verbos e conte as orações (locução verbal = 1).`,
  `Grife a palavra que liga as orações (conjunção ou pronome relativo).`,
  `Faça o teste do ponto final: independente → coordenada; “pendurada” → subordinada.`,
  `Se for subordinada: vira “isso”? substantiva · vira adjetivo? adjetiva · responde quando/por quê/se…? adverbial.`,
  `Descubra a relação de sentido trocando pela conjunção “famosa” (mas, porque, quando, se, embora, portanto).`,
  `Nas reescritas, confira se a nova conjunção mantém a MESMA relação e se o fato continua real (não virou hipótese).`
 ],
 exs: [
  {q:`Quantas orações há no período abaixo? Classifique as que não são a principal.<br>“O técnico queria que o time atacasse mais, mas os jogadores estavam exaustos.”`,
   s:[`Primeiro eu circulo os verbos: <b>queria</b> · <b>atacasse</b> · <b>estavam</b> → 3 verbos, então 3 orações.`,
      `“que o time atacasse mais”: faço o teste do ISSO → “O técnico queria <b>isso</b>.” ✔ → subordinada <b>substantiva objetiva direta</b> (completa “queria”).`,
      `“mas os jogadores estavam exaustos”: teste do ponto final → “Os jogadores estavam exaustos.” faz sentido sozinha → coordenada; “mas” = oposição → <b>sindética adversativa</b>.`],
   r:`3 orações: “que o time atacasse mais” = subordinada substantiva objetiva direta; “mas os jogadores estavam exaustos” = coordenada sindética adversativa.`},
  {q:`Compare:<br>(I) “Falei baixo <b>para que</b> o bebê não acordasse.”<br>(II) “Falei <b>tão</b> baixo <b>que</b> o bebê não acordou.”<br>Que relação de sentido cada oração destacada expressa?`,
   s:[`Em (I), pergunto: “falei baixo para quê?” → para o bebê não acordar. É o <b>objetivo</b> de quem falou → <b>finalidade</b>. Repare: a frase não garante que o bebê ficou dormindo.`,
      `Em (II), o “tão… que” mostra o <b>resultado</b> de falar baixo: o bebê, de fato, não acordou → <b>consequência</b>.`,
      `Macete: finalidade = intenção (antes do fato); consequência = resultado (depois do fato).`],
   r:`(I) finalidade (para que); (II) consequência (tão… que).`},
  {q:`Classifique todas as orações:<br>“Quando a professora avisou que a prova seria adiada, os alunos que não tinham estudado comemoraram.”`,
   s:[`Circulo os verbos: <b>avisou</b> · <b>seria adiada</b> (locução = 1) · <b>tinham estudado</b> (locução = 1) · <b>comemoraram</b> → 4 orações.`,
      `Procuro a principal (a que fica de pé sozinha): “os alunos… <b>comemoraram</b>.”`,
      `“Quando a professora avisou” → responde “quando?” → <b>adverbial temporal</b>.`,
      `“que a prova seria adiada” → “avisou <b>isso</b>” ✔ → <b>substantiva</b>.`,
      `“que não tinham estudado” → “o qual” funciona (os alunos <i>os quais</i> não tinham estudado) e vira adjetivo (“os alunos <b>despreparados</b>”) → <b>adjetiva</b> (restritiva, sem vírgula).`],
   r:`Principal: “os alunos comemoraram”; temporal: “Quando a professora avisou”; substantiva: “que a prova seria adiada”; adjetiva restritiva: “que não tinham estudado”.`}
 ],
 erros: [
  `<b>Errado:</b> contar “vou estudar” ou “estava chovendo” como duas orações. <b>Certo:</b> locução verbal é um verbo só → uma oração.`,
  `<b>Errado:</b> achar que todo “que” abre oração adjetiva. <b>Certo:</b> só é adjetiva se o “que” virar “o qual”. Se a oração virar “isso”, é substantiva; se vier depois de “tão/tanto”, é consecutiva.`,
  `<b>Errado:</b> confundir “para que” com “tão… que”. <b>Certo:</b> “para que” = finalidade (intenção); “tão… que” = consequência (resultado).`,
  `<b>Errado:</b> achar que “como” é sempre comparação. <b>Certo:</b> “<b>Como</b> chovia, ficamos em casa” = causa; “Fiz <b>como</b> você mandou” = conformidade; “Corre <b>como</b> um raio” = comparação.`,
  `<b>Errado:</b> trocar “embora” por “porque” numa reescrita. <b>Certo:</b> concessão (obstáculo que não impede) é o contrário de causa (motivo que provoca).`
 ],
 resumo: [
  `Conte os verbos → conte as orações (locução = 1).`,
  `Ponto final não estraga? → coordenada (e · mas · ou · logo · pois).`,
  `Ficou pendurada? → subordinada: “isso” = substantiva · adjetivo = adjetiva · advérbio = adverbial.`,
  `Relação: troque por mas / porque / quando / se / embora / portanto.`,
  `Para que = intenção · tão… que = resultado.`
 ]
},

/* ================= p-adj · Orações adjetivas ================= */
'p-adj': {
 base: [
  [`Substantivo × adjetivo`, `<b>Substantivo</b> dá nome: aluno, cidade, cachorro. <b>Adjetivo</b> dá característica ao substantivo: aluno <b>atento</b>, cidade <b>grande</b>.<br>A oração adjetiva tem esse nome porque faz o papel de um adjetivo: “cachorro <b>que late muito</b>” = “cachorro <b>barulhento</b>”.`],
  [`Adjunto adnominal`, `É o termo que fica “colado” no substantivo para caracterizá-lo ou determiná-lo: artigos, adjetivos, expressões como “de ouro”.<br>Ex.: “<b>O</b> anel <b>de ouro</b>”. A oração adjetiva funciona como um adjunto adnominal com verbo: “o anel <b>que ganhei</b>”.`],
  [`Pronome relativo: o “gancho”`, `É a palavra que <b>retoma um nome dito antes</b> e abre a oração adjetiva. Os principais: <b>que</b>, <b>o qual</b> (a qual, os quais, as quais), <b>quem</b> (para pessoas, depois de preposição), <b>onde</b> (só lugar), <b>cujo</b> (posse).<br>Ex.: “A cidade <b>onde</b> nasci” = “a cidade <b>na qual</b> nasci”.`],
  [`Antecedente: quem é retomado`, `É o nome que o pronome relativo retoma. Achar o antecedente diz <b>a quem a informação se refere</b>.<br>Ex.: “O bolo <b>que</b> a vó fez sumiu.” O que a vó fez? <b>o bolo</b> → antecedente = bolo.`],
  [`Os três “que” mais cobrados`, `<b>Pronome relativo</b>: retoma um nome e vira “o qual” → abre oração adjetiva (“a música <b>que</b> ouvi”).<br><b>Conjunção integrante</b>: não retoma nada; a oração vira “isso” → substantiva (“Sei <b>que</b> ele vem”).<br><b>Parte do “tão… que”</b>: consequência (“Riu tanto <b>que</b> chorou”).`],
  [`Restritiva = filtro`, `Sem vírgula, a oração faz parte da identificação: <b>separa</b> um pedaço do grupo, como um filtro. Sem ela, você não sabe de quais se fala.<br>Ex.: “Os ônibus <b>que saem depois das 22h</b> param no terminal.” → só esses ônibus.`],
  [`Explicativa = comentário extra`, `Entre vírgulas, a oração funciona como um <b>parêntese</b>: acrescenta um dado sobre o grupo <b>inteiro</b> ou sobre um ser único. Pode ser retirada sem mudar de quem se fala.<br>Ex.: “Brasília, <b>que foi inaugurada em 1960</b>, é a capital do país.”`],
  [`Relativo com preposição`, `Se o verbo da oração adjetiva pede preposição, ela vem <b>antes</b> do relativo, na norma-padrão.<br>Ex.: precisar <b>de</b> → “o livro <b>de que</b> preciso”; confiar <b>em</b> → “a amiga <b>em quem</b> confio”; gostar <b>de</b> → “o time <b>de que</b> gosto”.`]
 ],
 jeitos: [
  {n:`Teste do “o qual”`, c:`Troque o “que” por <b>o qual / a qual / os quais / as quais</b> (concordando com o nome de antes). Funcionou? É pronome relativo e a oração é <b>adjetiva</b>. Não funcionou? Procure outro tipo.`,
   ex:`“A bicicleta <b>que</b> ganhei” → “a bicicleta <b>a qual</b> ganhei” ✔ → adjetiva.<br>“Sei <b>que</b> ganhei” → “sei o qual ganhei” ✘ → não é adjetiva (é substantiva: “sei <b>isso</b>”).`},
  {n:`Teste da tesoura`, c:`Corte a oração adjetiva e releia. O grupo de quem se fala <b>continua o mesmo</b>? Explicativa (vírgulas). O grupo <b>aumentou</b> (passou a falar de todos)? Restritiva (sem vírgulas).`,
   ex:`“Os ônibus que saem depois das 22h param no terminal.” ✂ “Os ônibus param no terminal.” → agora são todos os ônibus: o grupo mudou → <b>restritiva</b>.<br>“A Lua, que gira em torno da Terra, não tem luz própria.” ✂ “A Lua não tem luz própria.” → a mesma Lua → <b>explicativa</b>.`},
  {n:`Pergunta “TODOS ou SÓ ALGUNS?”`, c:`Pergunte: a característica vale para <b>todos</b> do grupo? Use vírgulas. Vale <b>só para alguns</b>? Sem vírgulas.`,
   ex:`“As baleias, que são mamíferos, respiram ar.” → todas as baleias são mamíferos → <b>explicativa</b>.<br>“As baleias que encalharam na praia foram resgatadas.” → só algumas encalharam → <b>restritiva</b>.`},
  {n:`Teste do “ser único”`, c:`O nome é <b>único</b> no mundo ou na situação (nome próprio, “meu pai”, “a capital do Brasil”, “o Sol”)? Não há o que filtrar → a oração tem de ser <b>explicativa</b>, com vírgulas.`,
   ex:`“Machado de Assis, que foi o primeiro presidente da Academia Brasileira de Letras, escreveu <i>Dom Casmurro</i>.” → só existe um Machado de Assis → <b>vírgulas obrigatórias</b>.`},
  {n:`Caça ao antecedente`, c:`Pergunte “quem?” ou “o quê?” ao verbo da oração adjetiva. Se houver <b>dois candidatos</b>, a frase é ambígua; troque “que” por “o qual” / “a qual” para deixar claro.`,
   ex:`“Encontrei o primo da Bia que mora em Natal.” Quem mora em Natal? O primo ou a Bia? → <b>ambígua</b>.<br>Solução: “o primo da Bia, <b>o qual</b> mora em Natal” (o primo) ou “o primo da Bia, <b>a qual</b> mora em Natal” (a Bia).`}
 ],
 passo: [
  `Ache o pronome relativo (que = o qual, onde, cujo, quem).`,
  `Ache o antecedente: o que esse relativo está retomando?`,
  `Olhe a pontuação: tem vírgulas abrindo e fechando a oração?`,
  `Pergunte “todos ou só alguns?” e faça o teste da tesoura.`,
  `Nas alternativas, procure “todos / informação extra” (explicativa) ou “apenas parte / separa um grupo” (restritiva).`
 ],
 exs: [
  {q:`Pontue de acordo com a norma-padrão: “A Lua que gira em torno da Terra não tem luz própria.”`,
   s:[`Primeiro eu acho o relativo: “que” = “a qual” ✔ → oração adjetiva “que gira em torno da Terra”.`,
      `Uso o teste do ser único: só existe uma Lua da Terra. Não há o que filtrar → explicativa.`,
      `Explicativa vai <b>entre</b> vírgulas: uma antes do “que” e outra no fim da oração.`],
   r:`“A Lua, que gira em torno da Terra, não tem luz própria.”`},
  {q:`Compare:<br>(I) “Os brasileiros que gostam de futebol assistiram à final.”<br>(II) “Os brasileiros, que gostam de futebol, assistiram à final.”<br>Qual delas faz uma <b>generalização</b> sobre os brasileiros?`,
   s:[`Pergunto “todos ou só alguns?”.`,
      `Em (I), sem vírgulas: a oração filtra — só os brasileiros que gostam de futebol assistiram. Fica entendido que há brasileiros que não gostam.`,
      `Em (II), com vírgulas: o teste da tesoura dá “Os brasileiros assistiram à final” — todos. E a oração diz que <b>todos</b> gostam de futebol.`],
   r:`A (II): as vírgulas atribuem o gosto por futebol a todos os brasileiros, o que é uma generalização.`},
  {q:`Junte as duas frases em uma só, usando pronome relativo, na norma-padrão:<br>“A professora elogiou o aluno. O pai do aluno é bombeiro.”`,
   s:[`O ponto em comum é “o aluno”; na 2ª frase há ideia de <b>posse</b> (o pai <b>do</b> aluno).`,
      `Posse pede o relativo <b>cujo</b>, que concorda com a coisa possuída: pai (masculino singular) → <b>cujo</b>.`,
      `Depois de “cujo” não entra artigo: “cujo pai”, nunca “cujo o pai”.`,
      `Como a oração identifica qual aluno foi elogiado, ela é restritiva → sem vírgula.`],
   r:`“A professora elogiou o aluno cujo pai é bombeiro.”`}
 ],
 erros: [
  `<b>Errado:</b> “A Lua, que gira em torno da Terra não tem luz própria.” <b>Certo:</b> a explicativa abre <b>e fecha</b> com vírgula: “…da Terra, não tem…”.`,
  `<b>Errado:</b> achar que a vírgula é só uma pausa para respirar. <b>Certo:</b> ela muda quem está incluído (todos × só alguns).`,
  `<b>Errado:</b> chamar de explicativa porque a oração “explica algo”. <b>Certo:</b> o critério é: vale para todos / ser único / pode ser retirada → explicativa.`,
  `<b>Errado:</b> “O livro que eu preciso está esgotado.” <b>Certo:</b> precisar <b>de</b> → “O livro <b>de que</b> preciso está esgotado.”`,
  `<b>Errado:</b> tratar o “que” de “Sei que ele vem” como relativo. <b>Certo:</b> não vira “o qual”; a oração vira “isso” → substantiva.`
 ],
 resumo: [
  `Adjetiva = começa com relativo (que = o qual) e vale por um adjetivo.`,
  `Sem vírgula = filtro = só alguns (restritiva).`,
  `Entre vírgulas = parêntese = todos / ser único (explicativa).`,
  `Tesoura: tirou e o grupo mudou → restritiva.`,
  `cujo = posse, concorda com o possuído, sem artigo depois.`
 ]
},

/* ================= p-vl · Verbos de ligação ================= */
'p-vl': {
 base: [
  [`Verbo de ação × verbo de ligação`, `<b>Ação</b>: o sujeito faz alguma coisa (correr, comprar, escrever). <b>Ligação</b>: ninguém faz nada; o verbo só <b>liga</b> o sujeito a um estado ou qualidade.<br>Ex.: “Lia <b>correu</b> 5 km.” (ação) × “Lia <b>está</b> cansada.” (ligação)`],
  [`Ache o sujeito primeiro`, `Pergunte “quem?” ou “o quê?” ao verbo.<br>Ex.: “A sala ficou silenciosa.” O que ficou silencioso? <b>a sala</b> → sujeito. Só depois de achar o sujeito você consegue ver se o resto é uma característica <b>dele</b>.`],
  [`Predicativo do sujeito`, `É a característica que o verbo de ligação “entrega” ao sujeito. Pode ser adjetivo (que <b>concorda com o sujeito</b>) ou substantivo.<br>Ex.: “As meninas estão <b>cansadas</b>.” · “Meu tio é <b>médico</b>.” (médico = o próprio tio)`],
  [`Os oito da lista`, `<b>ser, estar, parecer, permanecer, ficar, continuar, andar, virar</b> (e também tornar-se). Só são de ligação quando, depois deles, vem uma característica do sujeito.<br>Ex.: “O pão <b>continua</b> quentinho.” ✔ · “O pão <b>continua</b> no forno.” ✘ (lugar)`],
  [`Adjunto adverbial: lugar, tempo, modo`, `Adjunto adverbial responde <b>onde? quando? como?</b> Ele não é característica do sujeito.<br>Ex.: “Ele ficou <b>em casa</b>” (onde?) → não há predicativo → “ficar”, aqui, não é de ligação.`],
  [`Predicativo × objeto direto`, `<b>Objeto direto</b> é <b>outra coisa</b>, que recebe a ação: “Ana comprou <b>um vestido</b>” (Ana ≠ vestido).<br><b>Predicativo</b> é <b>o próprio sujeito</b> descrito: “Ana é <b>uma ótima atleta</b>” (Ana = ótima atleta).`],
  [`Predicado nominal × predicado verbal`, `<b>Nominal</b>: verbo de ligação + predicativo; o mais importante é a característica. “O bolo ficou <b>pronto</b>.”<br><b>Verbal</b>: o mais importante é a ação do verbo. “O bolo <b>ficou</b> na geladeira.”`]
 ],
 jeitos: [
  {n:`Teste do “é”`, c:`Troque o verbo por <b>“é”</b> (ou “ser”). Se a frase continua fazendo sentido — mesmo mudando a nuance —, o que vem depois é característica → verbo de <b>ligação</b>. Se ficar absurdo, é verbo de ação.`,
   ex:`“Ana <b>anda</b> preocupada.” → “Ana <b>é</b> preocupada.” ✔ (nuance muda, mas funciona) → ligação.<br>“Ana <b>anda</b> pela praça.” → “Ana é pela praça.” ✘ → ação.<br>“Pedro <b>virou</b> goleiro.” → “Pedro <b>é</b> goleiro.” ✔ → ligação.`},
  {n:`Teste da concordância`, c:`Passe o sujeito para o plural ou para o feminino. Se a palavra depois do verbo <b>muda junto</b>, é característica do sujeito (predicativo). Se não muda, é lugar, tempo ou objeto.`,
   ex:`“O menino continua <b>quieto</b>.” → “As meninas continuam <b>quietas</b>.” → mudou → <b>predicativo</b> → ligação.<br>“O menino continua <b>em casa</b>.” → “As meninas continuam <b>em casa</b>.” → não mudou → não é ligação.`},
  {n:`O que vem depois? (três caminhos)`, c:`Olhe a palavra depois do verbo: <b>característica</b> do sujeito → ligação; <b>coisa que recebe a ação</b> → objeto (ação); <b>lugar/tempo/direção</b> → adjunto adverbial (ação).`,
   ex:`“Ele <b>virou</b> campeão.” → característica → <b>ligação</b>.<br>“Ele <b>virou</b> a página.” → coisa que recebe a ação → <b>ação</b> (objeto).<br>“Ele <b>virou</b> à direita.” → direção → <b>ação</b> (adjunto adverbial).`},
  {n:`Linha do tempo do verbo`, c:`Cada verbo de ligação conta uma “história” sobre o antes e o depois. As questões adoram perguntar o que fica <b>pressuposto</b> (subentendido).<br><b>continuar/permanecer</b> → já era assim antes · <b>ficar/virar</b> → antes não era · <b>andar</b> → tem sido assim ultimamente · <b>parecer</b> → é o que aparenta.`,
   ex:`“A rua <b>continua</b> esburacada.” → pressuposto: <b>já estava</b> esburacada antes.<br>“O terreno <b>virou</b> praça.” → pressuposto: <b>antes não era</b> praça.`},
  {n:`Predicativo pode ser substantivo`, c:`Não espere só adjetivo: profissão, cargo ou função também podem ser característica do sujeito. Use o “sinal de igual”: sujeito = predicativo?`,
   ex:`“Meu primo virou <b>chef</b>.” → meu primo = chef ✔ → predicativo → ligação.<br>“Meu primo viu <b>um chef</b>.” → meu primo ≠ chef → objeto direto → ação.`}
 ],
 passo: [
  `Ache o verbo e pergunte “quem?” para achar o sujeito.`,
  `Olhe o que vem depois do verbo: característica, coisa ou lugar/tempo?`,
  `Confirme com o teste do “é” e o teste da concordância.`,
  `Se for de ligação, identifique a nuance: permanente, passageiro, mudança, aparência, continuidade ou frequência.`,
  `Se a questão pede o que está subentendido, use a linha do tempo do verbo (antes × depois).`
 ],
 exs: [
  {q:`Em “As crianças permaneceram caladas durante o filme”, identifique o sujeito, o verbo de ligação, o predicativo e a circunstância.`,
   s:[`Primeiro pergunto “quem permaneceu?” → <b>as crianças</b> (sujeito).`,
      `Teste do “é”: “As crianças são caladas” ✔ → “permaneceram” é de ligação.`,
      `Teste da concordância: “O menino permaneceu <b>calado</b>” → “caladas” acompanha o sujeito → predicativo.`,
      `“durante o filme” responde “quando?” e não muda com o sujeito → adjunto adverbial de tempo.`],
   r:`Sujeito: as crianças · verbo de ligação: permaneceram · predicativo: caladas · adjunto adverbial de tempo: durante o filme.`},
  {q:`Que informação fica subentendida em cada frase?<br>(I) “O time <b>continua</b> invicto.”<br>(II) “O antigo cinema <b>virou</b> uma igreja.”`,
   s:[`Uso a linha do tempo do verbo.`,
      `(I) “continuar” = não mudou → o time <b>já estava</b> invicto antes (e segue assim).`,
      `(II) “virar” = mudança de estado → o prédio <b>antes não era</b> igreja (era cinema).`],
   r:`(I) O time já estava invicto antes. (II) Antes, o prédio era um cinema e não uma igreja.`},
  {q:`Em quais frases o verbo destacado é de ligação?<br>I. “O garoto <b>virou</b> a página.”<br>II. “O garoto <b>virou</b> um ótimo leitor.”<br>III. “Os dias <b>andam</b> corridos.”<br>IV. “Os turistas <b>andam</b> pela orla.”`,
   s:[`I: depois vem “a página”, coisa que recebe a ação. Teste do “é”: “O garoto é a página” ✘ → ação.`,
      `II: “O garoto é um ótimo leitor” ✔; garoto = leitor → predicativo → <b>ligação</b>.`,
      `III: “Os dias são corridos” ✔; concordância: “a semana anda corrid<b>a</b>” → muda junto → <b>ligação</b> (estado frequente).`,
      `IV: “pela orla” = lugar; “Os turistas são pela orla” ✘ → ação de andar.`],
   r:`Apenas em II e III.`}
 ],
 erros: [
  `<b>Errado:</b> achar que “ficar”, “andar” ou “continuar” são sempre de ligação. <b>Certo:</b> só quando vem característica: “ficou <b>feliz</b>” ✔ × “ficou <b>no clube</b>” ✘.`,
  `<b>Errado:</b> confundir predicativo com objeto, analisando “Ele parece um atleta” como “Ele viu um atleta”. <b>Certo:</b> no 1º, ele = atleta (predicativo); no 2º, ele ≠ atleta (objeto).`,
  `<b>Errado:</b> “As portas ficaram aberto.” <b>Certo:</b> o predicativo concorda com o sujeito: “As portas ficaram <b>abertas</b>.”`,
  `<b>Errado:</b> achar que trocar “está” por “é” “dá no mesmo”. <b>Certo:</b> a prova cobra a nuance: “é” = permanente; “está” = passageiro.`
 ],
 resumo: [
  `Ser · estar · parecer · permanecer · ficar · continuar · andar · virar.`,
  `Depois vem característica do sujeito? → ligação + predicativo.`,
  `Teste: troque por “é” · passe o sujeito para o plural/feminino.`,
  `Lugar/tempo depois → não é ligação.`,
  `continua = já era · virou/ficou = não era · anda = ultimamente.`
 ]
},

/* ================= p-reg · Regência e crase ================= */
'p-reg': {
 base: [
  [`Regência: quem manda, pede`, `Alguns verbos e nomes <b>exigem</b> uma preposição para se ligar ao complemento. Regência é saber qual.<br>Ex.: quem gosta, gosta <b>de</b> algo; quem mora, mora <b>em</b> algum lugar; quem obedece, obedece <b>a</b> alguém.`],
  [`Preposição`, `Palavra que <b>liga</b> dois termos e <b>nunca varia</b>: a, de, em, com, para, por, sem, sobre…<br>Ex.: “andar <b>a</b> pé”, “copo <b>de</b> vidro”. Antes de palavra masculina, o “a” sozinho é só preposição (o artigo seria “o”): “a cavalo”, “a lápis”.`],
  [`Artigo`, `Palavra que vem antes do substantivo e <b>varia</b> com ele: o, a, os, as.<br>Ex.: “<b>a</b> escola” → “<b>o</b> colégio” → “<b>as</b> escolas”. Se o “a” vira “o” quando você troca por masculino, ele é artigo.`],
  [`Os três “a” (e o relativo)`, `<b>Artigo</b>: “<b>A</b> bola sumiu.” (vira “o”: o chinelo sumiu) · <b>Preposição</b>: “Fui <b>a</b> pé.” (não varia) · <b>Pronome</b>: “Eu <b>a</b> vi.” (= vi a menina; substitui um nome).<br>E o <b>pronome relativo</b> retoma um nome e abre oração: “a escola <b>que</b> escolhi” (= a qual). Crase só junta <b>preposição + artigo</b>.`],
  [`Objeto direto × objeto indireto`, `Pergunte: o verbo <b>pede preposição</b> para ligar o complemento?<br>Não pede → <b>objeto direto</b>: “Comprei <b>um livro</b>.” · Pede → <b>objeto indireto</b>: “Gosto <b>de livros</b>.” · “Obedeço <b>aos</b> pais.”`],
  [`Crase = a + a (duas condições)`, `Só há crase quando <b>as duas coisas</b> acontecem juntas:<br>① a palavra de antes <b>pede a preposição “a”</b> (ir a, chegar a, obedecer a, referir-se a…);<br>② a palavra de depois é <b>feminina e aceita o artigo “a”</b>.<br>Ex.: “Cheguei” (pede <b>a</b>) + “<b>a</b> escola” = cheguei <b>à</b> escola.`],
  [`Verbos mais cobrados`, `<table class="tb"><tr><td><b>assistir a</b></td><td>= ver: assisti <b>ao</b> filme</td></tr><tr><td><b>visar a</b></td><td>= ter como objetivo: visa <b>ao</b> título</td></tr><tr><td><b>aspirar a</b></td><td>= desejar: aspira <b>ao</b> cargo</td></tr><tr><td><b>obedecer a</b></td><td>obedeça <b>às</b> regras</td></tr><tr><td><b>preferir X a Y</b></td><td>prefiro praia <b>a</b> campo</td></tr><tr><td><b>ir a / chegar a</b></td><td>fui <b>ao</b> clube, cheguei <b>à</b> praça</td></tr><tr><td><b>morar em</b></td><td>moro <b>em</b> Santos</td></tr><tr><td><b>gostar de</b></td><td>gosto <b>de</b> xadrez</td></tr><tr><td><b>esquecer</b> / <b>esquecer-se de</b></td><td>esqueci <b>o</b> nome · esqueci-<b>me do</b> nome</td></tr></table>`],
  [`O sentido muda a regência`, `O mesmo verbo pode pedir preposição em um sentido e não em outro.<br>“O médico <b>assistiu o</b> paciente” (= ajudou, sem preposição) × “<b>Assisti ao</b> jogo” (= vi).<br>“<b>Aspirei o</b> ar puro” (= inspirei) × “<b>Aspiro ao</b> cargo” (= desejo).<br>“O atirador <b>visou o</b> alvo” (= mirou) × “O plano <b>visa ao</b> lucro” (= tem como objetivo).`],
  [`Crase obrigatória: horas e “à moda de”`, `<b>Horas</b> (hora marcada): “às 9h”, “à 1h” (uma hora), “das 8h às 12h”.<br><b>“À moda de”</b> (mesmo escondido e mesmo antes de masculino): “bife <b>à</b> milanesa”, “bacalhau <b>à</b> Gomes de Sá”.<br><b>Expressões femininas</b> de tempo e modo: <b>à</b> noite, <b>às</b> vezes, <b>às</b> pressas.`]
 ],
 jeitos: [
  {n:`Troque por masculino (“ao”)`, c:`Troque a palavra feminina por uma masculina do mesmo tipo. Apareceu <b>“ao”</b>? Então no feminino é <b>“à”</b>. Apareceu só “o” ou só “a”? Sem crase.`,
   ex:`“Fui ___ padaria.” → “Fui <b>ao</b> mercado.” → <b>à</b> padaria.<br>“Comprei ___ bolsa.” → “Comprei <b>o</b> chapéu.” (só artigo) → <b>a</b> bolsa, sem crase.`},
  {n:`Vou A, volto DA`, c:`Para nomes de lugar, monte a frase com “voltar de”. Se você diz “volto <b>da</b>”, há crase em “vou <b>à</b>”. Se diz “volto <b>de</b>”, não há.`,
   ex:`“Vou ___ Argentina.” → volto <b>da</b> Argentina → vou <b>à</b> Argentina.<br>“Vou ___ Lisboa.” → volto <b>de</b> Lisboa → vou <b>a</b> Lisboa.`},
  {n:`Pergunte ao verbo: pede preposição?`, c:`Monte a frase com “algo” ou “alguém”: “quem obedece, obedece <b>a</b> algo”; “quem mora, mora <b>em</b> algum lugar”. Se a preposição pedida é “a” e vem palavra feminina com artigo, tem crase.`,
   ex:`“Os motoristas devem obedecer ___ sinalização.” → obedecer <b>a</b> + <b>a</b> sinalização → <b>à</b> sinalização (confira: “ao semáforo”).<br>“Os motoristas devem respeitar ___ sinalização.” → respeitar algo (não pede preposição) → <b>a</b> sinalização.`},
  {n:`Os 4 proibidos`, c:`Antes de pensar, cheque a lista onde não há crase: antes de <b>verbo</b>, de <b>palavra masculina</b> (fora o caso de “à moda de”), de <b>pronome pessoal</b> (ela, mim, nós…) ou de <b>“você”</b> e <b>entre palavras repetidas</b>.`,
   ex:`“Começou <b>a</b> nevar.” (verbo) · “Fomos <b>a</b> pé.” (masculino) · “Entreguei o bilhete <b>a</b> ela.” (pronome) · “Ficaram frente <b>a</b> frente.” (repetidas)`},
  {n:`Hora certa e “à moda de”`, c:`Para horas, troque por <b>“meio-dia”</b>: se fica “ao meio-dia”, a hora leva crase. Para pratos e estilos, se cabe “à moda de”, há crase mesmo antes de masculino.`,
   ex:`“Chego ___ 10h.” → “Chego <b>ao</b> meio-dia.” → <b>às</b> 10h.<br>“Desde ___ 10h.” → “desde <b>o</b> meio-dia” → desde <b>as</b> 10h, sem crase.<br>“Bacalhau ___ Gomes de Sá” = bacalhau à moda de Gomes de Sá → <b>à</b> Gomes de Sá.`}
 ],
 passo: [
  `Descubra quem “manda”: a palavra de antes pede preposição? Qual? (monte a frase com “algo”).`,
  `Cheque os 4 proibidos: verbo, masculino, pronome pessoal ou “você”, palavras repetidas.`,
  `Se a palavra depois é feminina, faça o teste do masculino (“ao”) ou do “volto da”.`,
  `Lembre os casos obrigatórios: horas (“às 10h”), “à moda de”, à noite / às vezes / às pressas.`,
  `Em questões de regência, compare com a tabela (assistir a, visar a, aspirar a, obedecer a, preferir X a Y, chegar a, morar em, gostar de).`,
  `Desconfie de alternativas com “mais… do que” (preferir), “chegar em” e “assistir o” (= ver).`
 ],
 exs: [
  {q:`Em qual frase o acento grave (crase) está correto?<br>(a) “Fiquei cara à cara com o goleiro.”<br>(b) “Mandei uma mensagem à você.”<br>(c) “Amanhã vamos à praia.”<br>(d) “Ele saiu à correr.”`,
   s:[`Primeiro eu checo os 4 proibidos: (a) palavras repetidas ✘ · (b) pronome “você” ✘ · (d) verbo “correr” ✘.`,
      `Sobra (c). Confirmo com o masculino: “vamos <b>ao</b> clube” → apareceu “ao” → “vamos <b>à</b> praia” ✔.`],
   r:`(c) “Amanhã vamos à praia.”`},
  {q:`Reescreva na norma-padrão:<br>“O time aspira o título e visa a vaga na final; antes do jogo, os atletas assistiram o vídeo do adversário.”`,
   s:[`“aspirar” no sentido de desejar pede “a” → aspira <b>a</b> + <b>o</b> título = <b>ao</b> título.`,
      `“visar” no sentido de ter como objetivo pede “a” → visa <b>a</b> + <b>a</b> vaga = <b>à</b> vaga (teste: “visa <b>ao</b> título”).`,
      `“assistir” no sentido de ver pede “a” → assistiram <b>a</b> + <b>o</b> vídeo = <b>ao</b> vídeo.`],
   r:`“O time aspira ao título e visa à vaga na final; antes do jogo, os atletas assistiram ao vídeo do adversário.”`},
  {q:`Complete o cardápio de acordo com a norma-padrão:<br>“Filé ___ parmegiana: servido de terça ___ domingo, das 18h ___ 23h. Pedidos ___ partir de hoje.”`,
   s:[`1ª lacuna: cabe “à moda” (filé à moda parmegiana) → <b>à</b>.`,
      `2ª lacuna: “domingo” é masculino, e antes de masculino não há crase. Além disso, começou com “de” (sem artigo), fecha com “a” (sem artigo) → <b>a</b>.`,
      `3ª lacuna: começou com “das” (de + as) → fecha com “às” (a + as) → <b>às</b> 23h.`,
      `4ª lacuna: “partir” é verbo → proibido → <b>a</b>.`],
   r:`à — a — às — a`}
 ],
 erros: [
  `<b>Errado:</b> “Fui à pé.” <b>Certo:</b> “Fui <b>a</b> pé.” → “pé” é masculino; ali só há preposição.`,
  `<b>Errado:</b> “Refiro-me à você.” <b>Certo:</b> “Refiro-me <b>a</b> você.” → “você” (pronome de tratamento) não aceita artigo.`,
  `<b>Errado:</b> “O expediente vai das 8h as 17h.” <b>Certo:</b> “das 8h <b>às</b> 17h” (das → às). Sem artigo no início, sem crase no fim: “de 8h a 17h”.`,
  `<b>Errado:</b> “Esqueci do nome dela.” <b>Certo (norma-padrão):</b> “Esqueci <b>o</b> nome dela” ou “Esqueci-<b>me do</b> nome dela”. Com “de”, o pronome “me” é obrigatório.`,
  `<b>Errado:</b> “Cheguei no colégio às 7h.” <b>Certo:</b> chegar <b>a</b> → “Cheguei <b>ao</b> colégio às 7h.” (E “Moro <b>na</b> rua tal”: morar pede <b>em</b>.)`
 ],
 resumo: [
  `Crase = preposição a + artigo a.`,
  `Troque por masculino: deu “ao”? → “à”.`,
  `Vou A, volto DA → crase; volto DE → sem crase.`,
  `Sem crase: verbo · masculino (fora “à moda de”) · ela/você/mim · cara a cara.`,
  `Com crase: às 10h (hora marcada) · à moda de · à noite, às vezes.`,
  `assistir a · visar a · aspirar a · obedecer a · preferir X a Y · morar em · gostar de.`
 ]
}

};
