/* TREINO · Português · P1 (Leitura e interpretação)
   Textos-base escritos para este guia, exceto os trechos em domínio público com autoria indicada
   (Machado de Assis, Olavo Bilac, Luís de Camões, Gonçalves Dias). */
const TREINO_P1 = [

/* ================= p-impl · Explícito, implícito e inferência (5) ================= */
{t:'p-impl', d:1,
 tx:`<b>Aviso da escola</b><br>A Feira de Ciências da Escola Estadual Monte Azul será realizada no dia 24 de outubro, das 8h às 13h, no ginásio. Neste ano, os projetos dos 9º anos terão como tema a água. A entrada é gratuita, mas cada visitante deve trazer 1 kg de alimento não perecível, que será doado à creche do bairro.`,
 q:`De acordo com o aviso, o que cada visitante precisa levar para entrar na feira?`,
 o:[
  [`1 kg de alimento não perecível.`, ``],
  [`Dinheiro para pagar o ingresso.`, `O aviso diz explicitamente que a entrada é gratuita.`],
  [`Um projeto sobre o tema da água.`, `Quem apresenta projetos sobre a água são os alunos dos 9º anos, não os visitantes. Releia com atenção quem faz o quê.`],
  [`Uma garrafa de água, por causa do tema da feira.`, `Você misturou o tema da feira (a água) com o que se pede ao visitante. Isso não está escrito.`],
  [`Uma autorização assinada pela creche do bairro.`, `A creche só aparece como destino das doações; o texto não fala em autorização.`]
 ], a:0,
 e:`É uma informação <b>explícita</b>: basta voltar ao texto e localizar. A frase final diz: “cada visitante deve trazer 1 kg de alimento não perecível”.`},

{t:'p-impl', d:2,
 q:`Leia a frase de uma notícia esportiva: “Neste domingo, o time do bairro <b>voltou a vencer</b> o campeonato municipal.” A expressão destacada permite concluir que:`,
 o:[
  [`o time venceu o campeonato pela primeira vez.`, `É o contrário: “voltar a” indica que algo já tinha acontecido antes.`],
  [`o time já havia vencido esse campeonato em alguma edição anterior.`, ``],
  [`o time venceu todas as edições do campeonato.`, `“Todas” extrapola o texto. E, se tivesse vencido sempre, não faria sentido dizer “voltou a vencer”.`],
  [`o time vai vencer de novo no ano que vem.`, `O texto fala do passado e do presente; nada garante o futuro.`],
  [`o técnico do time foi trocado neste ano.`, `Nenhuma palavra do texto sustenta essa informação. Inferência precisa de pista.`]
 ], a:1,
 e:`A expressão “voltou a” carrega um <b>pressuposto</b>: só se volta a fazer algo que já se fez antes. Logo, o time já tinha vencido o campeonato em outra ocasião.`},

{t:'p-impl', d:2,
 tx:`<b>Crônica</b><br>Na reunião de condomínio, o síndico apresentou o orçamento da reforma da piscina, e a sala <b>congelou</b>. Ninguém disse uma palavra por quase um minuto, até que dona Cida perguntou, baixinho, se aquele valor era em reais mesmo.`,
 q:`No texto, a palavra “congelou” foi usada com o sentido de:`,
 o:[
  [`esfriou, porque a temperatura da sala caiu.`, `Esse é o sentido literal. O contexto (ninguém disse uma palavra) mostra um sentido figurado.`],
  [`esvaziou, porque os moradores foram embora.`, `Os moradores continuaram na sala: dona Cida até fez uma pergunta.`],
  [`animou-se, porque todos gostaram da reforma.`, `O silêncio e a pergunta de dona Cida indicam espanto, não animação.`],
  [`ficou paralisada e em silêncio, por causa do susto.`, ``],
  [`entrou em discussão, com todos falando ao mesmo tempo.`, `É o oposto: “ninguém disse uma palavra por quase um minuto”.`]
 ], a:3,
 e:`Teste as alternativas no lugar da palavra. A frase seguinte é a pista: “Ninguém disse uma palavra por quase um minuto”. A sala “congelou” = ficou parada, em silêncio, de espanto (sentido figurado).`},

{t:'p-impl', d:2,
 tx:`<b>Diálogo</b><br>No jantar, Pedro olha demoradamente para o prato cheio de brócolis e diz:<br>— Nossa, mãe… hoje o jantar está bem verde, né?`,
 q:`Considerando o contexto, a fala de Pedro sugere que ele:`,
 o:[
  [`está elogiando a cor do prato preparado pela mãe.`, `Você ficou no sentido literal. O olhar demorado e o “Nossa…” mostram outra intenção.`],
  [`quer saber de que cor é o brócolis.`, `Ele não faz uma pergunta real: o “né?” só busca a concordância da mãe.`],
  [`não ficou animado com o brócolis no jantar.`, ``],
  [`é alérgico a verduras.`, `Nada no texto fala em alergia; isso é inventar, não inferir.`],
  [`quer repetir o prato.`, `A reação dele (olhar demorado, “Nossa…”) não indica vontade de comer mais.`]
 ], a:2,
 e:`É um <b>subentendido</b>: a frase não diz “não gostei”, mas o contexto (olhar demorado para o prato, o “Nossa…” e o comentário sobre a cor) leva a essa conclusão.`},

{t:'p-impl', d:3,
 tx:`Minha avó nunca anotou uma receita. Quando eu pedia a medida do bolo de fubá, ela respondia: “Farinha até dar o ponto, açúcar a gosto”. Durante anos, achei que era má vontade. Hoje, tentando repetir o bolo sem ela, percebo que o ponto não estava na receita: estava nas mãos dela, nos anos de cozinha, nas tardes em que me deixava raspar a tigela. Há saberes que não cabem em caderno; aprendem-se ao lado de quem sabe.`,
 q:`O tema central do texto é:`,
 o:[
  [`a receita do bolo de fubá da avó.`, `Esse é o assunto do começo do texto, não a ideia central. O bolo é só o ponto de partida.`],
  [`a má vontade da avó em ensinar a receita.`, `O narrador diz que achou isso “durante anos”, mas depois muda de ideia. Essa interpretação é desmentida pelo próprio texto.`],
  [`a importância de anotar as receitas da família em cadernos.`, `É o contrário do que o texto conclui: “Há saberes que não cabem em caderno”.`],
  [`a superioridade da culinária antiga sobre a moderna.`, `O texto não compara épocas da culinária. A alternativa generaliza e extrapola.`],
  [`o conhecimento que se aprende pela convivência e pela experiência, e não só por instruções escritas.`, ``]
 ], a:4,
 e:`O <b>tema</b> é mais amplo que o assunto. O texto parte do bolo (assunto) para chegar a uma reflexão, resumida na última frase: “Há saberes que não cabem em caderno; aprendem-se ao lado de quem sabe”.`},

/* ================= p-tira · Tirinhas, charges e memes (5) ================= */
{t:'p-tira', d:1,
 tx:`<b>Tirinha</b><br><b>Quadro 1:</b> Lucas entrega o boletim ao pai, com um sorriso sem graça.<br><b>Quadro 2:</b> Close no boletim: Matemática — nota 3,0.<br><b>Quadro 3:</b> O pai, de braços cruzados e sobrancelha erguida, diz: “Excelente! Continue assim, que você vai longe!”`,
 q:`Na fala do pai, no último quadro, as palavras “Excelente!” e “vai longe” foram usadas com sentido:`,
 o:[
  [`literal, pois o pai está orgulhoso da nota.`, `A nota 3,0, os braços cruzados e a sobrancelha erguida mostram que ele não está orgulhoso.`],
  [`irônico, pois o pai está, na verdade, desaprovando a nota.`, ``],
  [`informativo, pois o pai explica como funciona o boletim.`, `O pai não explica nada; ele reage à nota.`],
  [`de dúvida, pois o pai não entendeu a nota.`, `Não há sinal de dúvida: a expressão do pai é de reprovação.`],
  [`de incentivo sincero para Lucas manter o mesmo ritmo de estudo.`, `Se fosse sincero, o pai não estaria de braços cruzados diante de uma nota baixa.`]
 ], a:1,
 e:`<b>Ironia</b> = dizer o contrário do que se pensa, e o contexto revela isso. A nota 3,0 e a expressão do pai (pista visual) mostram que “Excelente!” significa, na verdade, “isso está muito ruim”.`},

{t:'p-tira', d:2,
 tx:`<b>Tirinha</b><br><b>Quadro 1:</b> No consultório, o médico diz ao paciente: “O senhor precisa fazer mais exercícios.”<br><b>Quadro 2:</b> O paciente sai do consultório com expressão decidida, punho fechado.<br><b>Quadro 3:</b> Em casa, esparramado no sofá, ele aperta sem parar o controle remoto, trocando de canal, e diz: “Pronto! Já estou exercitando o dedo.”`,
 q:`O humor da tirinha é construído principalmente:`,
 o:[
  [`pelo fato de o médico dar uma recomendação errada.`, `A recomendação do médico é adequada; o problema está no que o paciente faz com ela.`],
  [`pela expressão decidida do paciente no segundo quadro, que já é engraçada por si só.`, `O segundo quadro cria a expectativa; a graça só aparece quando ela é quebrada no último quadro.`],
  [`pela crítica aos programas de televisão.`, `A TV é só o cenário; a tirinha não comenta os programas.`],
  [`pela quebra de expectativa: o paciente interpreta “exercício” de forma conveniente e continua parado.`, ``],
  [`pela demonstração de que trocar de canal é um bom exercício físico.`, `Você levou a fala do personagem a sério. O texto brinca justamente com o absurdo dessa ideia.`]
 ], a:3,
 e:`O 2º quadro cria a expectativa (ele vai mudar de vida!). O 3º quebra essa expectativa: ele continua no sofá e “cumpre” a ordem do médico exercitando só o dedo. <b>Humor = expectativa × surpresa</b>.`},

{t:'p-tira', d:2,
 tx:`<b>Charge</b><br>Num ponto de ônibus, várias pessoas esperam em pé. Todas têm barbas e cabelos enormes, que chegam até o chão, e há teias de aranha entre elas e o banco. Ao lado, uma placa nova e brilhante da prefeitura anuncia: “Nova linha: um ônibus a cada 10 minutos!”`,
 q:`A crítica da charge é construída principalmente:`,
 o:[
  [`pelo contraste entre a promessa da placa e o exagero visual que mostra uma espera muito longa.`, ``],
  [`pela moda de usar barba e cabelo compridos.`, `As barbas não são moda: são um exagero para mostrar quanto tempo as pessoas esperaram.`],
  [`pela falta de limpeza no ponto de ônibus, mostrada pelas teias de aranha.`, `As teias têm a mesma função das barbas: indicar tempo parado. O alvo da crítica é a espera, não a limpeza.`],
  [`pelo elogio à pontualidade da nova linha de ônibus.`, `Você leu só a placa. A imagem desmente a placa, e é daí que nasce a crítica.`],
  [`pela falta de bancos para os passageiros se sentarem.`, `Há um banco na cena; a charge não critica isso.`]
 ], a:0,
 e:`A placa promete ônibus a cada 10 minutos; a imagem mostra, com <b>exagero</b> (barbas até o chão, teias de aranha), que as pessoas esperam há muito tempo. O contraste entre o dito e o mostrado revela a crítica ao transporte público e às promessas não cumpridas.`},

{t:'p-tira', d:3,
 tx:`<b>Tirinha</b><br><b>Quadro 1:</b> O pai, deitado no sofá com o celular na mão, reclama: “Essa juventude de hoje não larga o celular!”<br><b>Quadro 2:</b> Ao lado dele, o filho, lendo um livro grosso, levanta os olhos e encara o pai em silêncio.<br><b>Quadro 3:</b> O pai, sem tirar os olhos da tela, comenta: “Olha só, mais um vídeo falando disso!”`,
 q:`A tirinha provoca humor e, ao mesmo tempo, critica:`,
 o:[
  [`os jovens, que de fato não largam o celular.`, `A imagem mostra o contrário: quem está no celular é o pai; o jovem está lendo.`],
  [`os livros grossos, que afastam os jovens da tecnologia.`, `O livro não é criticado; ele serve para contrastar a atitude do filho com a do pai.`],
  [`os vídeos da internet, por serem todos mentirosos.`, `A tirinha não fala da qualidade dos vídeos. “Todos” é generalização que o texto não sustenta.`],
  [`o filho, por não responder ao pai.`, `O silêncio do filho, olhando para o pai, é uma reação que destaca a contradição do pai, e não um defeito do menino.`],
  [`a incoerência de quem condena nos outros um hábito que também tem.`, ``]
 ], a:4,
 e:`Junte palavra e imagem: o pai critica os jovens por usarem o celular <b>enquanto usa o celular</b>, e o filho faz o oposto (lê). No último quadro, ele ainda assiste a um vídeo sobre o tema, sem perceber a contradição. O alvo da crítica é essa incoerência.`},

{t:'p-tira', d:3,
 tx:`<b>Meme</b><br>Parte de cima, texto: <i>A professora: “A prova vai ser tranquila, só cai o que vimos em aula.”</i><br>Parte de baixo, texto: <i>Eu, saindo da prova:</i><br>Imagem: um gato completamente encharcado, de pelos arrepiados e olhos arregalados, saindo de uma banheira.`,
 q:`Para entender o humor do meme, o leitor precisa perceber que:`,
 o:[
  [`o aluno tomou banho logo depois da prova.`, `Essa é uma leitura literal da imagem. O gato representa o estado do aluno, não um banho real.`],
  [`a imagem do gato assustado contradiz a promessa de que a prova seria tranquila.`, ``],
  [`a prova foi fácil, exatamente como a professora tinha dito.`, `Se fosse fácil, o aluno não sairia com a cara do gato arregalado e encharcado.`],
  [`o meme acusa a professora de ter mentido de propósito para prejudicar a turma.`, `O meme brinca com a diferença entre expectativa e realidade; acusar de má-fé extrapola o texto.`],
  [`o gato pertence à professora e aparece para criticá-la.`, `Nada no meme liga o gato à professora. O “Eu” da legenda indica que o gato representa o aluno.`]
 ], a:1,
 e:`No meme, texto e imagem se completam. A fala da professora cria a expectativa (“tranquila”); a legenda “Eu, saindo da prova” associa o aluno ao gato assustado e encharcado. O contraste mostra, com humor, que a prova não foi nada tranquila.`},

/* ================= p-arg · Texto argumentativo (5) ================= */
{t:'p-arg', d:1,
 tx:`<b>Biscoito recheado não é merenda</b><br>Há quem diga que proibir biscoitos recheados e refrigerantes nas cantinas escolares é exagero, já que cada família deveria decidir o que o filho come. O argumento parece justo, mas esquece que a escola é um espaço de educação, inclusive alimentar. Segundo nutricionistas, crianças que consomem ultraprocessados todos os dias têm mais chance de desenvolver obesidade e diabetes ainda na adolescência. Em Vila Serena, a cantina da escola municipal trocou salgadinhos por frutas e sanduíches naturais: a procura caiu na primeira semana, mas voltou ao normal em um mês. Portanto, as cantinas escolares devem deixar de vender ultraprocessados.`,
 q:`A tese defendida pelo autor é que:`,
 o:[
  [`cada família deve decidir o que o filho come.`, `Essa é a posição contrária, que o autor apresenta para depois rebater.`],
  [`crianças que consomem ultraprocessados têm mais chance de desenvolver obesidade.`, `Isso é um argumento (de autoridade) usado para sustentar a tese, não a tese em si.`],
  [`a procura na cantina de Vila Serena caiu na primeira semana.`, `É um detalhe do exemplo de Vila Serena, e o próprio texto diz que a procura voltou ao normal.`],
  [`as cantinas escolares devem deixar de vender ultraprocessados.`, ``],
  [`as escolas devem ensinar culinária saudável aos alunos.`, `O texto fala em educação alimentar, mas não propõe aulas de culinária. A alternativa extrapola.`]
 ], a:3,
 e:`A tese é a ideia que todos os argumentos sustentam. Ela aparece na conclusão, introduzida por “<b>Portanto</b>”: as cantinas devem deixar de vender ultraprocessados.`},

{t:'p-arg', d:2,
 tx:`<b>Biscoito recheado não é merenda</b><br>Há quem diga que proibir biscoitos recheados e refrigerantes nas cantinas escolares é exagero, já que cada família deveria decidir o que o filho come. O argumento parece justo, mas esquece que a escola é um espaço de educação, inclusive alimentar. Segundo nutricionistas, crianças que consomem ultraprocessados todos os dias têm mais chance de desenvolver obesidade e diabetes ainda na adolescência. Em Vila Serena, a cantina da escola municipal trocou salgadinhos por frutas e sanduíches naturais: a procura caiu na primeira semana, mas voltou ao normal em um mês. Portanto, as cantinas escolares devem deixar de vender ultraprocessados.`,
 q:`No texto, o caso da cantina de Vila Serena é usado para:`,
 o:[
  [`provar que os alunos rejeitam frutas e sanduíches naturais.`, `Você leu só a primeira parte do trecho. O “mas” mostra que a procura voltou ao normal.`],
  [`apresentar a opinião de quem é contra a proibição.`, `A opinião contrária aparece no início do texto (“Há quem diga…”), não no exemplo.`],
  [`mostrar, com um exemplo concreto, que a mudança é possível porque os alunos se adaptam.`, ``],
  [`citar a fala de um especialista em nutrição.`, `O argumento de autoridade (nutricionistas) vem antes; Vila Serena é um exemplo.`],
  [`mostrar que a cantina teve prejuízo com a mudança.`, `O texto não fala em prejuízo; diz que a procura se recuperou em um mês.`]
 ], a:2,
 e:`É um <b>argumento por exemplo</b>: um caso concreto que reforça a tese. O ponto principal está depois do “mas”: a procura voltou ao normal, ou seja, trocar o cardápio funciona.`},

{t:'p-arg', d:2,
 tx:`<b>Trecho do artigo</b><br>“Segundo nutricionistas, crianças que consomem ultraprocessados todos os dias têm mais chance de desenvolver obesidade e diabetes ainda na adolescência.”`,
 q:`Nesse trecho, o autor sustenta sua posição principalmente por meio de um argumento:`,
 o:[
  [`de exemplo, pois conta o caso de uma criança específica.`, `O trecho não narra nenhum caso particular; fala de crianças em geral.`],
  [`de comparação, pois compara duas escolas.`, `Não há comparação entre escolas nesse trecho.`],
  [`de experiência pessoal, pois o autor conta o que viveu.`, `O autor não fala de si; ele atribui a informação a outras pessoas.`],
  [`de ironia, pois diz o contrário do que pensa.`, `O trecho é sério e literal; não há sentido oposto.`],
  [`de autoridade, pois apoia a ideia no saber de especialistas.`, ``]
 ], a:4,
 e:`A expressão “<b>Segundo nutricionistas</b>” mostra que o autor usa a voz de especialistas no assunto para dar credibilidade à sua posição. Isso é <b>argumento de autoridade</b>.`},

{t:'p-arg', d:2,
 q:`O artigo “Biscoito recheado não é merenda” defende que as cantinas escolares deixem de vender ultraprocessados. Qual frase, se acrescentada ao texto, <b>reforçaria</b> essa tese?`,
 o:[
  [`Em outra cidade, alunos que deixaram de comprar refrigerante na cantina passaram a beber mais água durante as aulas.`, ``],
  [`Muitas famílias acreditam que só elas podem decidir o cardápio dos filhos.`, `Isso repete a opinião contrária, que o autor quer rebater.`],
  [`Biscoitos recheados são baratos e fáceis de levar na mochila.`, `Essa frase valoriza o biscoito e favoreceria a posição contrária à do autor.`],
  [`A cantina da escola de Vila Serena foi pintada de verde no ano passado.`, `Informação irrelevante: a cor da cantina não tem relação com a tese.`],
  [`Alguns alunos trazem lanche de casa todos os dias.`, `É uma informação neutra, que não mostra vantagem em tirar os ultraprocessados da cantina.`]
 ], a:0,
 e:`Um argumento só reforça a tese se mostrar uma razão para concordar com ela. O novo exemplo indica um efeito positivo de tirar um ultraprocessado (o refrigerante) da cantina. As outras frases são contrárias, neutras ou irrelevantes.`},

{t:'p-arg', d:3,
 tx:`<b>Cartas do leitor · Tema: dever de casa nas férias</b><br><b>Marta, mãe de aluno:</b> “Dever de casa nas férias ajuda a criança a não esquecer o que aprendeu. Quinze minutos de leitura por dia não tiram a alegria de ninguém.”<br><b>Rogério, professor:</b> “Férias existem para descansar e viver outras experiências. Visitar um museu, jogar bola e ajudar na cozinha também ensinam, e muito, sem precisar de apostila.”`,
 q:`Comparando as duas cartas, é correto afirmar que:`,
 o:[
  [`os dois leitores concordam que as férias devem servir apenas para descansar.`, `Marta defende tarefas nas férias; só Rogério fala em descanso.`],
  [`Rogério é contra qualquer tipo de aprendizado durante as férias.`, `Cuidado: Rogério diz que museu, bola e cozinha “também ensinam”. Ele é contra a tarefa escolar, não contra aprender.`],
  [`Marta acha que a leitura diária tira a alegria das crianças.`, `É o contrário: ela diz que quinze minutos de leitura “não tiram a alegria de ninguém”.`],
  [`Marta defende tarefas para manter o que foi aprendido, e Rogério defende férias sem tarefas escolares, pois outras experiências também ensinam.`, ``],
  [`os dois leitores consideram a apostila indispensável nas férias.`, `Rogério diz justamente que se aprende “sem precisar de apostila”; Marta nem fala em apostila.`]
 ], a:3,
 e:`São <b>posições distintas sobre o mesmo tema</b>. Marta: a favor do dever nas férias (argumento: evitar o esquecimento). Rogério: contra o dever escolar nas férias (argumento: outras experiências também educam). A pegadinha é achar que Rogério é contra aprender.`},

/* ================= p-pub · Publicidade, propaganda e persuasão (5) ================= */
{t:'p-pub', d:1,
 tx:`<b>Cartaz de campanha</b><br>Água parada é casa de mosquito.<br><b>Tampe, vire, limpe.</b><br>10 minutos por semana contra a dengue.`,
 q:`Os verbos “Tampe, vire, limpe”, no imperativo, foram usados para:`,
 o:[
  [`descrever como o mosquito da dengue se reproduz.`, `A reprodução do mosquito é sugerida na primeira frase; os verbos dão ordens ao leitor.`],
  [`contar o que a prefeitura já fez contra a dengue.`, `Os verbos não estão no passado nem falam da prefeitura; eles se dirigem ao leitor.`],
  [`vender produtos de limpeza.`, `Não há marca nem produto à venda. É uma campanha de conscientização.`],
  [`expressar a opinião do autor sobre os mosquitos.`, `Os verbos não avaliam nada; eles orientam ações.`],
  [`orientar o leitor, de forma direta, sobre o que ele deve fazer.`, ``]
 ], a:4,
 e:`O <b>imperativo</b> chama o leitor à ação. Os três verbos curtos indicam atitudes simples para eliminar a água parada, que é a finalidade da campanha.`},

{t:'p-pub', d:1,
 tx:`<b>Anúncio</b><br>Mochila Turma: cabe o caderno, o lanche e o skate.<br>Volta às aulas com estilo!`,
 q:`Pelas escolhas de palavras, o anúncio se dirige principalmente a:`,
 o:[
  [`estudantes jovens, que vão voltar às aulas.`, ``],
  [`professores que preparam o material das aulas.`, `Skate e “estilo” apontam para alunos, não para professores.`],
  [`pais de bebês que procuram bolsas de fraldas.`, `Bebês não levam caderno nem skate para a escola.`],
  [`atletas profissionais de skate.`, `O skate aparece ao lado de caderno e lanche: o foco é a escola, não o esporte profissional.`],
  [`empresários que viajam a trabalho.`, `Nada no anúncio fala em trabalho ou viagem.`]
 ], a:0,
 e:`Pergunte sempre “<b>para quem</b> o texto foi feito?”. Caderno, lanche, skate, “Volta às aulas” e “com estilo” compõem o universo de estudantes adolescentes.`},

{t:'p-pub', d:2,
 tx:`<b>Anúncio</b><br>Tênis <b>Voa</b>.<br>Você não corre. Você <b>decola</b>.`,
 q:`No anúncio, o uso do verbo “decola”, junto com o nome “Voa”, tem como efeito:`,
 o:[
  [`informar que o tênis foi feito para pilotos de avião.`, `Leitura literal. O anúncio usa a imagem do voo de forma figurada.`],
  [`sugerir, com exagero, que o tênis deixa a corrida tão leve e rápida que parece um voo.`, ``],
  [`criticar, com ironia, quem corre devagar.`, `Não há sentido oposto nem crítica; o anúncio elogia o produto.`],
  [`apresentar um dado técnico sobre o peso do tênis.`, `Não há nenhum número ou dado técnico no anúncio.`],
  [`aconselhar o leitor a parar de correr.`, `“Você não corre” não é um conselho: é um jogo de palavras para dizer que, com o tênis, correr vira “voar”.`]
 ], a:1,
 e:`O anúncio cria um <b>exagero</b> (hipérbole) e combina o nome da marca (Voa) com o verbo “decola”: a ideia é associar o produto à leveza e à velocidade, persuadindo o leitor.`},

{t:'p-pub', d:2,
 q:`Qual dos textos abaixo é uma <b>propaganda</b> (campanha que divulga uma ideia ou causa) e não uma <b>publicidade</b> (que vende produto ou marca)?`,
 o:[
  [`Livraria Página: 20% de desconto em livros infantis neste fim de semana.`, `Há uma loja e um desconto: o objetivo é vender. É publicidade.`],
  [`Suco Pomar: a fruta inteira na sua caixinha.`, `Divulga uma marca de suco para vender. É publicidade.`],
  [`Academia Ritmo: matrícula grátis até sexta-feira!`, `A matrícula grátis é uma isca para conquistar clientes. É publicidade.`],
  [`Leia para uma criança hoje. A imaginação dela agradece.`, ``],
  [`Banco Fácil: abra sua conta pelo celular em 5 minutos.`, `Oferece um serviço de uma empresa. É publicidade.`]
 ], a:3,
 e:`Pergunte: qual é a <b>finalidade</b>? Só “Leia para uma criança hoje” não tem marca, loja nem produto: ela incentiva um comportamento (ler para crianças). As outras querem conquistar clientes.`},

{t:'p-pub', d:3,
 tx:`<b>Anúncio de operadora de celular</b><br><i>Imagem: uma senhora sorrindo para a tela do celular, numa cozinha simples; na tela, o rosto de um menino acenando.</i><br>Sua avó do outro lado do país. O sorriso dela aqui.<br><b>Conecta</b> — ligações ilimitadas para todo o Brasil.`,
 q:`A estratégia de persuasão do anúncio consiste principalmente em:`,
 o:[
  [`criticar as famílias que moram longe umas das outras.`, `O anúncio não critica ninguém; ele apresenta a distância como algo que o produto ajuda a superar.`],
  [`apresentar dados técnicos que comprovam a qualidade do sinal.`, `Não há dados técnicos; o anúncio aposta na emoção.`],
  [`associar o serviço à aproximação afetiva entre pessoas que estão longe.`, ``],
  [`convencer os idosos a se mudarem para perto dos netos.`, `O anúncio não propõe mudança de cidade; propõe manter o contato pelo celular.`],
  [`usar a opinião de um especialista em telecomunicações.`, `Não há especialista no anúncio. Não confunda apelo emocional com apelo à autoridade.`]
 ], a:2,
 e:`É um <b>apelo à emoção</b>. A imagem e as duas primeiras frases mostram o afeto entre avó e neto; só no final aparece o produto (ligações ilimitadas), apresentado como o meio de manter esse laço apesar da distância.`},

/* ================= p-gen · Gêneros jornalísticos e fato × opinião (3) ================= */
{t:'p-gen', d:1,
 tx:`O novo parque da Lagoa foi aberto no sábado e recebeu cerca de 3 mil visitantes. O espaço conta com pista de caminhada de 2 km, playground e quadra de areia. Porém, a prefeitura não instalou bebedouros, um descuido imperdoável num verão tão quente.`,
 q:`Qual trecho expressa uma <b>opinião</b>?`,
 o:[
  [`“um descuido imperdoável”`, ``],
  [`“recebeu cerca de 3 mil visitantes”`, `É um número que pode ser conferido: é fato.`],
  [`“foi aberto no sábado”`, `A data de abertura pode ser verificada: é fato.`],
  [`“pista de caminhada de 2 km”`, `A medida da pista pode ser verificada: é fato.`],
  [`“a prefeitura não instalou bebedouros”`, `Basta ir ao parque para conferir se há bebedouros: é fato. A opinião está na avaliação que vem depois.`]
 ], a:0,
 e:`<b>Fato</b> pode ser verificado; <b>opinião</b> é julgamento. O adjetivo de avaliação “imperdoável” mostra o julgamento de quem escreve sobre a falta de bebedouros.`},

{t:'p-gen', d:2,
 tx:`Toda manhã, no ponto de ônibus da Rua das Acácias, um senhor de chapéu cumprimenta cada pessoa que chega. Ninguém sabe o nome dele. Ontem ele faltou, e o ponto pareceu mais frio, mesmo com sol. Descobri, então, que um bom-dia repetido por anos vira parte da paisagem.`,
 q:`Pelas características do texto, ele pertence ao gênero:`,
 o:[
  [`notícia, porque relata um fato recente com objetividade.`, `O texto não é objetivo: traz impressões pessoais (“pareceu mais frio”) e uma reflexão em 1ª pessoa.`],
  [`editorial, porque expressa a opinião do jornal sobre um problema da cidade.`, `Não há debate de um problema público nem a voz do jornal; há uma reflexão pessoal sobre o cotidiano.`],
  [`crônica, porque parte de um fato do cotidiano para uma reflexão pessoal.`, ``],
  [`reportagem, porque aprofunda o tema com entrevistas e dados.`, `Não há entrevistas nem dados; o narrador nem sabe o nome do senhor.`],
  [`carta do leitor, porque responde a um texto publicado no jornal.`, `O texto não se dirige ao jornal nem comenta outra publicação.`]
 ], a:2,
 e:`A <b>crônica</b> parte de uma cena simples do dia a dia (o senhor do ponto de ônibus) e a observa com olhar pessoal, em 1ª pessoa (“Descobri”), chegando a uma reflexão leve e poética.`},

{t:'p-gen', d:3,
 tx:`<b>Duas manchetes sobre o mesmo fato</b><br><b>Jornal A:</b> “Passagem de ônibus sobe de R$ 4,40 para R$ 5,00 a partir de segunda-feira”<br><b>Jornal B:</b> “Mais um golpe no bolso: trabalhador pagará R$ 5,00 para andar em ônibus lotados”`,
 q:`Comparando as manchetes, é correto afirmar que:`,
 o:[
  [`as duas tratam de fatos diferentes, pois usam palavras diferentes.`, `As duas falam do mesmo fato (o aumento para R$ 5,00); o que muda é o modo de tratá-lo.`],
  [`a manchete B é mais objetiva, porque informa o novo valor da passagem.`, `As duas informam o valor. O que diferencia B são as palavras de julgamento.`],
  [`a manchete A revela que o jornal A é contra o aumento.`, `A manchete A não usa nenhuma palavra de avaliação; não dá para saber a posição do jornal A.`],
  [`as duas manchetes são apenas opiniões, sem nenhum fato.`, `Ambas trazem um fato verificável: o novo preço da passagem.`],
  [`a manchete A informa de modo mais objetivo, e a B, com palavras como “golpe” e “lotados”, mostra uma posição crítica ao aumento.`, ``]
 ], a:4,
 e:`Textos sobre o mesmo fato podem ter <b>enfoques diferentes</b>. A manchete A só informa (o quê, quanto, quando). A B escolhe palavras de avaliação (“golpe no bolso”, “lotados”) que revelam a posição crítica do jornal.`},

/* ================= p-fake · Fake news (3) ================= */
{t:'p-fake', d:1,
 tx:`<b>Mensagem recebida num aplicativo</b><br>ATENÇÃO!!! A partir de amanhã, quem não atualizar o cadastro no link abaixo vai PERDER O CPF!!! Repasse para todos os seus contatos!!!<br>www.cpf-atualiza-governo.net.co`,
 q:`Quais elementos da mensagem são sinais de alerta de que ela pode ser falsa?`,
 o:[
  [`O uso da língua portuguesa e a menção ao CPF.`, `Escrever em português e falar de CPF não torna uma mensagem falsa.`],
  [`O fato de a mensagem ser curta e enviada por aplicativo.`, `Mensagens verdadeiras também podem ser curtas e circular por aplicativo. O tamanho não é o problema.`],
  [`A presença de uma data, já que notícias verdadeiras nunca têm prazo.`, `Notícias verdadeiras podem ter prazos. Desconfie de “nunca”.`],
  [`O tom alarmista, com caixa alta e “!!!”, o pedido urgente de compartilhamento e o endereço que imita um site do governo.`, ``],
  [`O assunto ser cadastro, porque nenhum órgão público faz cadastros.`, `Órgãos públicos fazem cadastros, sim. A generalização está errada.`]
 ], a:3,
 e:`Use o checklist: <b>tom</b> sensacionalista (CAIXA ALTA, “!!!”), <b>urgência</b> para compartilhar, ameaça exagerada e <b>endereço estranho</b>, que imita um órgão oficial sem ser um site oficial do governo.`},

{t:'p-fake', d:2,
 tx:`Uma foto de uma rua alagada, com carros quase submersos, circula hoje nas redes com a legenda: “Centro de Vila Nova do Sul AGORA!”. Uma busca reversa de imagem mostra que a mesma foto foi publicada em 2016, numa reportagem sobre uma enchente em outro país.`,
 q:`Sobre essa publicação, é correto afirmar que:`,
 o:[
  [`ela é verdadeira, porque a foto é real e não foi editada.`, `A foto é real, mas a legenda mente sobre o lugar e a data. Isso também desinforma.`],
  [`ela desinforma, porque usa uma foto verdadeira fora de seu contexto original.`, ``],
  [`ela é uma sátira, porque exagera a situação para fazer humor.`, `Não há intenção de humor: a legenda quer que o leitor acredite que a cena é de hoje.`],
  [`só seria fake news se a foto tivesse sido montada em computador.`, `Esse é o erro mais comum: desinformação não depende de montagem. Descontextualizar já engana.`],
  [`ela não causa problema, porque enchentes acontecem em todo lugar.`, `Mesmo assim, a legenda faz o leitor acreditar em algo falso sobre a cidade, o que pode gerar pânico.`]
 ], a:1,
 e:`A foto é verdadeira, mas a legenda muda o <b>lugar e a data</b>. Isso é <b>descontextualização</b>: uma informação real apresentada fora do contexto também é desinformação.`},

{t:'p-fake', d:3,
 tx:`O site <b>O Pepino Diário</b>, conhecido por publicar notícias inventadas para fazer humor, divulgou a manchete: “Aluno cria aplicativo que faz o dever de casa sozinho, e professores entram em greve de fome”.`,
 q:`Sobre essa manchete, a avaliação mais adequada é:`,
 o:[
  [`é fake news, pois toda notícia inventada é fake news, não importa onde seja publicada.`, `A sátira inventa fatos de propósito e se apresenta como humor. Não tem a intenção de enganar.`],
  [`é uma notícia confiável, pois foi publicada em um site.`, `Estar publicado em um site não garante nada; além disso, este site é conhecido pelo humor.`],
  [`é uma reportagem, pois aprofunda o tema da tecnologia na educação.`, `Não há aprofundamento, dados nem entrevistas; é uma manchete de humor.`],
  [`é uma propaganda que quer vender o aplicativo citado.`, `O aplicativo é inventado; não há produto à venda.`],
  [`é sátira, mas pode desinformar se for compartilhada sem contexto, como se fosse verdade.`, ``]
 ], a:4,
 e:`O veículo é conhecido pelo humor e a manchete é exagerada de propósito: é <b>sátira</b>, que não é fake news quando o leitor sabe que é humor. Mas, se alguém tirar a manchete do site e compartilhar como verdade, ela passa a enganar.`},

/* ================= p-lit · Narrativa e poema (3) ================= */
{t:'p-lit', d:1,
 tx:`“Uma noite destas, vindo da cidade para o Engenho Novo, encontrei no trem da Central um rapaz aqui do bairro, que eu conheço de vista e de chapéu.”<br>(Machado de Assis, <i>Dom Casmurro</i>, 1899)`,
 q:`O foco narrativo desse trecho é:`,
 o:[
  [`3ª pessoa, com narrador observador.`, `O narrador não conta de fora: ele diz “encontrei” e “eu conheço”.`],
  [`3ª pessoa, com narrador onisciente.`, `Não há narrador de fora que saiba o que os personagens pensam; quem fala participa da cena.`],
  [`1ª pessoa, com narrador-personagem.`, ``],
  [`eu lírico, porque o texto é um poema.`, `O trecho está em prosa (não há versos). Eu lírico é a voz do poema.`],
  [`não há narrador, porque o texto é um diálogo.`, `Não há falas de personagens com travessão ou aspas internas; há alguém narrando.`]
 ], a:2,
 e:`As marcas de 1ª pessoa (“<b>encontrei</b>”, “<b>eu</b> conheço”) mostram que quem conta a história também participa dela: é um <b>narrador-personagem</b>.`},

{t:'p-lit', d:2,
 tx:`— Amanhã eu trago o seu livro — prometeu Caio à colega.`,
 q:`Qual alternativa passa corretamente a fala de Caio para o <b>discurso indireto</b>?`,
 o:[
  [`Caio prometeu à colega que amanhã eu trago o seu livro.`, `Você só tirou o travessão. No indireto é preciso ajustar o tempo verbal, a pessoa (“eu”) e a marca de tempo.`],
  [`Caio prometeu à colega que no dia seguinte trouxe o livro dela.`, `“Trouxe” indica algo que já aconteceu, mas a fala era uma promessa (futuro).`],
  [`Caio prometeu à colega que no dia seguinte traria o livro dela.`, ``],
  [`Caio prometeu à colega: “Trarei o seu livro amanhã.”`, `Com dois-pontos e aspas, a fala continua em discurso direto.`],
  [`Caio prometeu à colega que no dia seguinte eu traria o seu livro.`, `O “eu” deveria virar 3ª pessoa: no indireto, é o narrador quem reconta a fala de Caio.`]
 ], a:2,
 e:`No discurso indireto, o narrador reconta a fala com “<b>que</b>” e faz ajustes: “trago” (presente com valor de futuro) → “<b>traria</b>”; “eu” → 3ª pessoa; “amanhã” → “<b>no dia seguinte</b>”; “seu livro” → “livro <b>dela</b>”.`},

{t:'p-lit', d:3,
 tx:`Na semifinal do torneio de xadrez da escola, Bia percebeu, aos vinte minutos de partida, que tinha deixado a dama desprotegida. O adversário ainda não tinha notado. Ela prendeu a respiração, fingiu calma e moveu um peão sem importância, torcendo para que ele olhasse para o outro lado do tabuleiro. Ele olhou para a dama. Sorriu. E, para espanto da plateia, ofereceu empate:<br>— Hoje não quero ganhar assim. Você jogou melhor a partida inteira.`,
 q:`O desfecho do conto surpreende o leitor porque:`,
 o:[
  [`o adversário, mesmo percebendo a falha, abre mão da vantagem por reconhecer o mérito de Bia.`, ``],
  [`Bia vence a partida ao capturar a dama do adversário.`, `Quem estava em perigo era a dama de Bia, e a partida termina em empate.`],
  [`o adversário não percebe a falha, e Bia escapa da derrota.`, `O texto diz que “ele olhou para a dama” e sorriu: ele percebeu a falha.`],
  [`Bia desiste da partida antes do fim.`, `Bia não desiste; é o adversário quem oferece o empate.`],
  [`a plateia obriga os jogadores a aceitar o empate.`, `A plateia só fica espantada; a decisão parte do adversário.`]
 ], a:0,
 e:`O <b>conflito</b> é a dama desprotegida; o <b>clímax</b>, o momento em que o adversário olha para ela. A expectativa era que ele aproveitasse o erro. O desfecho surpreende porque ele percebe a falha e, por <b>causa</b> do bom jogo de Bia (“Você jogou melhor”), oferece empate.`},

/* ================= p-inter · Intertextualidade (3) ================= */
{t:'p-inter', d:1,
 q:`O ditado popular diz: “Quem espera sempre alcança.” Qual alternativa é uma <b>paráfrase</b> desse ditado?`,
 o:[
  [`Quem tem paciência acaba conseguindo o que deseja.`, ``],
  [`Quem corre na frente chega primeiro.`, `Defende quase o contrário (pressa, e não paciência). Não mantém o sentido.`],
  [`Quem espera sempre cansa.`, `Imita a forma do ditado, mas muda o sentido: isso é paródia.`],
  [`“Quem espera sempre alcança”, diz o povo.`, `Repetir o ditado entre aspas é citação, não paráfrase.`],
  [`Quem espera demais perde a oportunidade.`, `Diz o oposto do ditado original.`]
 ], a:0,
 e:`<b>Paráfrase</b> = outras palavras, <b>mesmo sentido</b>. “Esperar” → “ter paciência”; “alcançar” → “conseguir o que deseja”. A ideia original foi mantida.`},

{t:'p-inter', d:2,
 tx:`<b>Texto 1</b><br>“Amor é fogo que arde sem se ver, / é ferida que dói, e não se sente;”<br>(Luís de Camões, século XVI)<br><br><b>Texto 2</b> (publicado no mural da escola, na semana de provas)<br>“Prova é fogo que arde sem se ver, / é questão que dói, e não se entende;”`,
 q:`A relação do Texto 2 com o Texto 1 é de:`,
 o:[
  [`paráfrase, pois diz com outras palavras o mesmo que Camões disse sobre o amor.`, `O Texto 2 não fala de amor: mudou o tema e o tom. Paráfrase manteria o sentido.`],
  [`citação, pois reproduz os versos de Camões exatamente como foram escritos.`, `As palavras foram trocadas (“Prova”, “questão”, “não se entende”). Não é cópia fiel.`],
  [`paródia, pois imita a forma dos versos de Camões, mas muda o sentido para fazer humor com as provas.`, ``],
  [`epígrafe, pois aparece no início de uma obra literária.`, `Epígrafe é um trecho de outro autor colocado no início de uma obra; o Texto 2 é um texto novo, num mural.`],
  [`coincidência, pois os dois textos não têm relação.`, `A estrutura é idêntica (“… é fogo que arde sem se ver”). A relação é proposital.`]
 ], a:2,
 e:`Compare o <b>sentido</b>: o Texto 2 copia o ritmo e a estrutura dos versos de Camões, mas troca o amor pela prova, com tom de brincadeira. Imitar mudando o sentido = <b>paródia</b>.`},

{t:'p-inter', d:3,
 tx:`<b>Texto 1</b><br>“Ora (direis) ouvir estrelas! Certo / Perdeste o senso!…”<br>(Olavo Bilac, soneto XIII de “Via Láctea”, 1888)<br><br><b>Texto 2</b> (anúncio)<br>Ora, ouvir estrelas? Pode, sim! Toda sexta-feira à noite, o Planetário Municipal tem sessões com narração ao vivo sobre as constelações. Entrada gratuita.`,
 q:`Ao retomar o verso de Bilac, o anúncio:`,
 o:[
  [`faz uma paráfrase do soneto inteiro, mantendo seu sentido amoroso.`, `O anúncio retoma só um verso e muda o assunto para o planetário. Não mantém o sentido do soneto.`],
  [`critica o poeta por ter dito algo impossível.`, `O anúncio não ataca Bilac; ele aproveita o verso para divulgar uma atração.`],
  [`cita o poeta entre aspas, com seu nome, como argumento de autoridade.`, `O anúncio não usa aspas nem cita o nome do autor; ele apenas faz referência ao verso.`],
  [`não tem relação com o poema, sendo apenas uma coincidência de palavras.`, `“Ora… ouvir estrelas” é uma referência clara e proposital a um verso famoso.`],
  [`dá sentido literal a uma imagem poética, transformando “ouvir estrelas” numa atração real.`, ``]
 ], a:4,
 e:`No poema, “ouvir estrelas” é uma imagem figurada (alguém acha que o eu lírico perdeu o juízo). O anúncio faz uma <b>alusão</b> a esse verso conhecido e o torna quase literal: no planetário você “ouve” as estrelas pela narração. O efeito é despertar curiosidade e valorizar a atração.`}
];
