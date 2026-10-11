/* TREINO · P2 · Sentido, coesão e argumentação (Português) */
const TREINO_P2 = [

/* ===================== p-conj (5) ===================== */
{t:'p-conj', d:1,
 q:`Leia o aviso enviado no grupo da turma:<br><br>“<b>Já que</b> o ônibus da excursão atrasou, a professora adiou a saída do museu em vinte minutos.”<br><br>A expressão destacada estabelece entre as orações uma relação de:`,
 o:[
  [`condição`, `Condição seria “se” ou “caso”: algo que pode ou não acontecer. Aqui o atraso já aconteceu e é o motivo do adiamento.`],
  [`concessão`, `Concessão (embora, ainda que) mostra um obstáculo que não impede o resultado. O atraso não é obstáculo: é o que provoca o adiamento.`],
  [`causa`, ``],
  [`conclusão`, `A conclusão viria depois de “portanto” ou “por isso”. “Já que” introduz o motivo, não a conclusão.`],
  [`tempo`, `Tempo seria “quando” ou “assim que”. “Já que” não indica o momento, e sim o motivo.`]
 ], a:2,
 e:`“Já que” = porque, visto que, uma vez que. A oração “o ônibus da excursão atrasou” é o <b>motivo</b> de a professora adiar a saída. Logo, a relação é de <b>causa</b>.`},

{t:'p-conj', d:2,
 q:`Leia o cartaz afixado no pátio:<br><br>“<b>Mesmo que</b> chova no sábado, a gincana da escola vai acontecer na quadra coberta.”<br><br>Sem alterar o sentido do cartaz, a expressão destacada pode ser substituída por:`,
 o:[
  [`Ainda que`, ``],
  [`Desde que`, `“Desde que” indica condição: a gincana só aconteceria se chovesse. O cartaz diz que ela acontece com ou sem chuva.`],
  [`Visto que`, `“Visto que” indica causa e afirmaria que a chuva é certa e é o motivo da gincana, o que não é o sentido do cartaz.`],
  [`Logo que`, `“Logo que” indica tempo (assim que). A gincana não depende do momento em que a chuva começa.`],
  [`Para que`, `“Para que” indica finalidade: a gincana aconteceria com o objetivo de fazer chover, o que não faz sentido.`]
 ], a:0,
 e:`“Mesmo que” é conjunção <b>concessiva</b>: admite um obstáculo (a chuva) que <b>não impede</b> o fato principal (a gincana). A outra concessiva da lista é “ainda que” (também valem “embora” e “se bem que”). O verbo continua no subjuntivo: “Ainda que chova…”.`},

{t:'p-conj', d:2,
 q:`Leia a frase de uma reportagem esportiva do jornal da escola:<br><br>“O goleiro machucou a mão no aquecimento, <b>mas</b> defendeu dois pênaltis na final.”<br><br>Qual reescrita <b>mantém o sentido</b> da frase original e está de acordo com a <b>norma-padrão</b>?`,
 o:[
  [`Como machucou a mão no aquecimento, o goleiro defendeu dois pênaltis na final.`, `“Como” no início da frase indica causa: diria que ele defendeu os pênaltis POR CAUSA da mão machucada. O sentido mudou.`],
  [`O goleiro machucou a mão no aquecimento, portanto defendeu dois pênaltis na final.`, `“Portanto” indica conclusão: as defesas seriam consequência lógica da lesão. O original mostra ideias que se opõem.`],
  [`Se machucasse a mão no aquecimento, o goleiro defenderia dois pênaltis na final.`, `“Se” cria uma condição hipotética; o original conta fatos que aconteceram.`],
  [`Embora machucou a mão no aquecimento, o goleiro defendeu dois pênaltis na final.`, `O sentido de concessão está certo, mas “embora” exige verbo no subjuntivo: “embora tenha machucado” (ou “embora houvesse machucado”). “Embora machucou” fere a norma-padrão.`],
  [`Embora tenha machucado a mão no aquecimento, o goleiro defendeu dois pênaltis na final.`, ``]
 ], a:4,
 e:`<ol><li>“Mas” liga duas ideias que se opõem: a lesão (obstáculo) × as defesas (resultado).</li><li>A mesma ideia pode ser dita com <b>concessão</b>: o obstáculo é admitido, mas não impede o resultado.</li><li>Com “embora”, o verbo vai para o <b>subjuntivo</b>: “Embora <b>tenha machucado</b>…”.</li></ol>`},

{t:'p-conj', d:3,
 q:`Leia o trecho do diário de classe:<br><br>“O laboratório de ciências ficou sem energia durante a manhã. A experiência com o microscópio foi, <b>pois</b>, transferida para a tarde. A turma não reclamou, <b>pois</b> já sabia do problema desde a véspera.”<br><br>As duas ocorrências de “pois” indicam, respectivamente:`,
 o:[
  [`causa e causa`, `O primeiro “pois” está deslocado, no meio da oração e entre vírgulas: aí ele equivale a “portanto”, e não a “porque”.`],
  [`conclusão e causa`, ``],
  [`conclusão e conclusão`, `O segundo “pois” abre a oração e explica o motivo de a turma não reclamar (= porque). Não é conclusão.`],
  [`causa e conclusão`, `Você inverteu as posições: deslocado entre vírgulas = conclusão; no início da oração = causa.`],
  [`finalidade e causa`, `Finalidade seria “para que” ou “a fim de que”. Nenhum dos “pois” indica objetivo.`]
 ], a:1,
 e:`O sentido de “pois” depende da <b>posição</b>:<ol><li>“A experiência foi, <b>pois</b>, transferida” → deslocado, entre vírgulas = <b>portanto</b> (conclusão da falta de energia).</li><li>“Não reclamou, <b>pois</b> já sabia” → no início da oração = <b>porque</b> (causa). Algumas gramáticas chamam esse segundo caso de <b>explicação</b>; em qualquer caso, ele dá o motivo, e não a conclusão.</li></ol>`},

{t:'p-conj', d:3,
 q:`Assinale a alternativa em que a relação de sentido indicada entre parênteses para a expressão destacada está <b>correta</b>.`,
 o:[
  [`“<b>Conforme</b> o regulamento, cada equipe terá cinco jogadores.” (tempo)`, `“Conforme” aqui significa “de acordo com”: é conformidade, não tempo.`],
  [`“<b>Quanto mais</b> a gente pratica, mais fácil fica tocar violão.” (comparação)`, `“Quanto mais… mais” mostra que uma coisa aumenta junto com a outra: é proporção.`],
  [`“Ela falou <b>tão</b> alto <b>que</b> acordou o bebê.” (causa)`, `“Tão… que” introduz o efeito de falar alto (acordar o bebê): é consequência. A causa é falar alto, que não vem depois do “que”.`],
  [`“<b>Como</b> estava frio, vestimos o casaco.” (comparação)`, `“Como” no início da frase, com sentido de “já que”, indica causa. Só é comparação em frases como “forte como um touro”.`],
  [`“Saímos cedo <b>para que</b> pegássemos o primeiro ônibus.” (finalidade)`, ``]
 ], a:4,
 e:`“Para que” introduz o <b>objetivo</b> de sair cedo: finalidade. As outras: “conforme” = conformidade; “quanto mais… mais” = proporção; “tão… que” = consequência; “como” no início = causa.`},

/* ===================== p-coes (5) ===================== */
{t:'p-coes', d:1,
 q:`Leia a notícia do mural da escola:<br><br>“Os alunos do 9º ano plantaram vinte mudas de ipê no pátio da escola. Daqui a alguns anos, <b>elas</b> vão dar sombra para quem estiver no recreio.”<br><br>O pronome “elas” retoma:`,
 o:[
  [`os alunos do 9º ano`, `“Os alunos” é masculino; o pronome seria “eles”. E quem vai dar sombra são as árvores, não os alunos.`],
  [`o pátio da escola`, `“O pátio” é masculino e singular; “elas” está no feminino plural.`],
  [`alguns anos`, `“Anos” é masculino. Além disso, anos não dão sombra.`],
  [`as mudas de ipê`, ``],
  [`a escola`, `“A escola” é singular; o pronome seria “ela”. E quem dará sombra são os ipês plantados.`]
 ], a:3,
 e:`Teste trocando o pronome pelo candidato: “Daqui a alguns anos, <b>as mudas de ipê</b> vão dar sombra”. Faz sentido e concorda em gênero e número (feminino plural).`},

{t:'p-coes', d:2,
 q:`Leia a notícia:<br><br>“Na última quinta-feira, um filhote de lobo-guará foi encontrado perto de uma estrada em Minas Gerais. O <b>animal</b>, que estava desidratado, foi levado a um centro de reabilitação. Lá, os veterinários cuidaram <b>dele</b> por duas semanas antes de devolvê-<b>lo</b> à natureza.”<br><br>Sobre as palavras destacadas, é correto afirmar que:`,
 o:[
  [`“animal” retoma o filhote de lobo-guará; “dele” e “lo” retomam o centro de reabilitação.`, `Os veterinários cuidaram do filhote, e não do centro; e quem foi devolvido à natureza também foi o filhote.`],
  [`as três retomam “os veterinários”.`, `“Os veterinários” é plural; “dele” e “lo” estão no singular. Além disso, são os veterinários que cuidam, não os que são cuidados.`],
  [`as três retomam “um filhote de lobo-guará”.`, ``],
  [`“animal” retoma a estrada; “dele” e “lo”, o filhote.`, `“Estrada” é feminino e não estava desidratada. Quem foi levado ao centro foi o filhote.`],
  [`“animal” e “dele” retomam o filhote; “lo” retoma o centro de reabilitação.`, `O centro não poderia ser “devolvido à natureza”. Quem volta para a natureza é o filhote.`]
 ], a:2,
 e:`O texto evita repetir “filhote de lobo-guará” usando três recursos:<ol><li>“o <b>animal</b>”: palavra mais geral (hiperônimo);</li><li>“<b>dele</b>”: pronome (de + ele);</li><li>“devolvê-<b>lo</b>”: pronome oblíquo.</li></ol>Todos se referem ao mesmo ser: o filhote.`},

{t:'p-coes', d:2,
 q:`Leia o trecho do jornal da escola:<br><br>“Na reunião de ontem, a diretora anunciou que a feira de ciências seria adiada e que os projetos poderiam ser entregues até dezembro. <b>Isso</b> deixou os alunos aliviados.”<br><br>O pronome “Isso” retoma:`,
 o:[
  [`o adiamento da feira e a ampliação do prazo para entregar os projetos`, ``],
  [`a diretora`, `“Isso” não se usa para retomar pessoas; para a diretora, o pronome seria “ela”.`],
  [`a reunião de ontem`, `Não foi a reunião em si que aliviou os alunos, e sim o que foi anunciado nela.`],
  [`apenas a palavra “dezembro”`, `Você pegou a palavra mais próxima do pronome. “Isso” retoma uma ideia inteira, não uma palavra isolada.`],
  [`a feira de ciências`, `A feira em si não aliviou ninguém: o que trouxe alívio foi a notícia de que ela seria adiada e de que haveria mais prazo.`]
 ], a:0,
 e:`O pronome demonstrativo “isso” pode retomar uma <b>ideia inteira</b> já dita. O que deixou os alunos aliviados foi o conteúdo do anúncio: a feira adiada e o prazo maior. Teste: “<b>O adiamento e o novo prazo</b> deixaram os alunos aliviados”.`},

{t:'p-coes', d:3,
 q:`Leia a frase:<br><br>“O técnico conversou com o atacante depois do jogo e disse que <b>ele</b> precisava descansar mais.”<br><br>A frase é ambígua, porque não se sabe a quem “ele” se refere. Qual reescrita elimina a dúvida e deixa claro que <b>quem precisa descansar é o atacante</b>?`,
 o:[
  [`O técnico, depois do jogo, conversou com o atacante e disse que ele precisava descansar mais.`, `Mudar a ordem dos termos não resolve: “ele” continua podendo ser o técnico ou o atacante.`],
  [`Depois do jogo, o técnico conversou com o atacante e disse a ele: “Você precisa descansar mais.”`, ``],
  [`O técnico conversou com o atacante depois do jogo e disse que ele mesmo precisava descansar mais.`, `“Ele mesmo” continua ambíguo e ainda sugere que pode ser o próprio técnico.`],
  [`Depois do jogo, o técnico conversou com o atacante e disse: “Eu preciso descansar mais.”`, `A dúvida acabou, mas agora quem precisa descansar é o técnico (“eu”), e não o atacante.`],
  [`O técnico conversou com o atacante depois do jogo e disse que ele, o técnico, precisava descansar mais.`, `A dúvida acabou, mas o sentido ficou o oposto do pedido: quem precisa descansar passou a ser o técnico.`]
 ], a:1,
 e:`Com o discurso direto, o técnico fala com o atacante usando “<b>você</b>”, que só pode ser a pessoa com quem ele conversa: o atacante. Assim a ambiguidade desaparece e o sentido pedido é mantido.`},

{t:'p-coes', d:2,
 q:`Leia o relato de uma viagem de estudo:<br><br>“Visitamos, na cidade, o museu de ciências, <b>cujas</b> salas interativas são famosas, e depois almoçamos no restaurante <b>onde</b> meu avô trabalhou por trinta anos.”<br><br>Os pronomes relativos destacados se referem, respectivamente, a:`,
 o:[
  [`a cidade e o restaurante`, `As salas interativas são do museu, que é o termo imediatamente antes de “cujas”.`],
  [`as salas interativas e o avô`, `“Cujas” indica a quem pertencem as salas, então não pode se referir às próprias salas. E “onde” indica lugar; o avô é uma pessoa.`],
  [`o museu de ciências e a cidade`, `O avô trabalhou no restaurante; “onde” retoma o lugar que vem logo antes dele.`],
  [`a cidade e o museu de ciências`, `Você trocou os dois: as salas são do museu, e o lugar onde o avô trabalhou é o restaurante.`],
  [`o museu de ciências e o restaurante`, ``]
 ], a:4,
 e:`<ol><li>“<b>cujas</b> salas” = as salas <b>do museu</b> (cujo indica posse).</li><li>“o restaurante <b>onde</b> meu avô trabalhou” = trabalhou <b>no restaurante</b> (onde indica lugar físico).</li></ol>`},

/* ===================== p-fig (5) ===================== */
{t:'p-fig', d:1,
 q:`Leia:<br><br>“Quando o despertador tocou, o sol já <b>espiava</b> pela fresta da cortina.”<br><br>A figura de linguagem presente no trecho destacado é:`,
 o:[
  [`metonímia`, `Metonímia troca uma palavra por outra relacionada (ex.: “li Machado de Assis”). Aqui não há troca de palavras, e sim uma ação humana atribuída ao sol.`],
  [`hipérbole`, `Não há exagero na frase.`],
  [`personificação`, ``],
  [`antítese`, `Antítese exige ideias opostas lado a lado, o que não aparece aqui.`],
  [`onomatopeia`, `Onomatopeia imita sons (trim-trim). “Espiava” não reproduz som algum.`]
 ], a:2,
 e:`“Espiar” (olhar de modo disfarçado) é ação de gente. Ao dizer que o sol espiava, o texto dá ao sol um comportamento humano: <b>personificação</b>. O efeito é deixar a cena mais viva, como se o sol estivesse curioso.`},

{t:'p-fig', d:2,
 q:`Lucas mandou esta mensagem para a mãe:<br><br>“Mãe, já estou na fila da cantina há uns <b>três séculos</b>. Acho que vou perder o recreio inteiro!”<br><br>A expressão destacada é um exemplo de:`,
 o:[
  [`hipérbole, usada para enfatizar a demora e a impaciência de Lucas.`, ``],
  [`eufemismo, usado para suavizar a reclamação sobre a fila.`, `Eufemismo suaviza. Lucas faz o contrário: aumenta a demora para reclamar com mais força.`],
  [`ironia, porque Lucas diz o contrário do que pensa.`, `Lucas pensa mesmo que a fila está demorando; ele só exagera. Na ironia, o sentido é o oposto do que se diz.`],
  [`comparação, porque aproxima a fila de três séculos.`, `Comparação precisa de conectivo (“como”, “feito”). Aqui há apenas um exagero de tempo.`],
  [`metonímia, porque troca o tempo pelo lugar.`, `Não há troca de uma palavra por outra relacionada; “três séculos” é um exagero da duração.`]
 ], a:0,
 e:`Ninguém fica três séculos numa fila: é um <b>exagero intencional</b> (hipérbole). O efeito é mostrar a impaciência de Lucas e dar força à reclamação.`},

{t:'p-fig', d:2,
 q:`Leia o trecho de uma crônica sobre a final do campeonato escolar:<br><br>“Quando a bola entrou no último minuto, <b>a arquibancada</b> gritou o nome do goleiro.”<br><br>Na expressão destacada, ocorre:`,
 o:[
  [`antítese, porque o goleiro é oposto à arquibancada.`, `Não há ideias opostas colocadas lado a lado na frase.`],
  [`eufemismo, porque suaviza a comemoração da torcida.`, `Nada foi suavizado; a frase descreve uma comemoração animada.`],
  [`sinestesia, porque mistura a visão com a audição.`, `Sinestesia mistura sensações (ex.: “voz doce”). Aqui não há mistura de sentidos.`],
  [`metonímia, porque o lugar (arquibancada) é usado no lugar das pessoas que estão nele.`, ``],
  [`comparação, porque a torcida é comparada a uma arquibancada.`, `Comparação exige conectivo, como “como”. Não há comparação explícita na frase.`]
 ], a:3,
 e:`Quem gritou foram os <b>torcedores</b> que estavam na arquibancada. O texto troca as pessoas pelo lugar que elas ocupam (continente pelo conteúdo), como em “bebi dois copos”: é <b>metonímia</b>.`},

{t:'p-fig', d:3,
 q:`Leia as duas frases:<br><br>I. “Ontem a torcida chorava; hoje, sorri.”<br>II. “Aquele domingo foi um <b>descanso cansativo</b>: arrumei a casa o dia todo.”<br><br>As figuras de linguagem predominantes em I e II são, respectivamente:`,
 o:[
  [`paradoxo e antítese`, `Você inverteu. Em I, os opostos (chorar × sorrir) estão lado a lado, em momentos diferentes: antítese. Em II, os opostos se fundem na mesma ideia: paradoxo.`],
  [`comparação e sinestesia`, `Não há conectivo de comparação em I, nem mistura de sentidos em II.`],
  [`antítese e hipérbole`, `I está certa, mas em II não há exagero: há a união de ideias contraditórias (descanso que cansa).`],
  [`ironia e paradoxo`, `Em I, não se diz o contrário do que se pensa; apenas se opõem dois momentos (ontem × hoje).`],
  [`antítese e paradoxo`, ``]
 ], a:4,
 e:`<ol><li>Em I, “chorava” e “sorri” são opostos <b>lado a lado</b>, cada um num momento (ontem × hoje): <b>antítese</b>.</li><li>Em II, “descanso” e “cansativo” se <b>fundem</b> numa mesma ideia, uma contradição aparente (o dia de folga cansou): <b>paradoxo</b>.</li></ol>`},

{t:'p-fig', d:3,
 q:`Imagine uma tirinha em três quadros:<br>1º quadro: Caio, distraído, derruba um copo de suco no caderno novo da irmã, Júlia.<br>2º quadro: Júlia olha o caderno encharcado, com as folhas grudadas.<br>3º quadro: Júlia, de braços cruzados, diz: “Parabéns, maninho! Que cuidado admirável!”<br><br>A fala de Júlia no último quadro produz efeito por meio de:`,
 o:[
  [`hipérbole, pois ela exagera o elogio para deixar Caio feliz.`, `Júlia não quer deixar Caio feliz e não está exagerando um elogio sincero: ela critica o descuido.`],
  [`ironia, pois ela elogia o “cuidado” de Caio para, na verdade, criticar seu descuido.`, ``],
  [`eufemismo, pois ela suaviza o problema para não magoar o irmão.`, `Os braços cruzados e a situação mostram irritação. Ela não está suavizando: está criticando de forma indireta.`],
  [`personificação, pois ela atribui sentimentos humanos ao caderno.`, `Caio é uma pessoa e o elogio é dirigido a ele; não há objeto agindo como gente.`],
  [`antítese, pois ela opõe o caderno novo ao caderno molhado.`, `A oposição está na situação desenhada, não na fala. A fala diz o contrário do que Júlia pensa.`]
 ], a:1,
 e:`Júlia diz “cuidado admirável” justamente depois de um grande <b>descuido</b>. Ela afirma o contrário do que pensa para criticar: <b>ironia</b>. O contexto (o suco derramado e os braços cruzados) é o que revela o sentido verdadeiro.`},

/* ===================== p-sent (3) ===================== */
{t:'p-sent', d:1,
 q:`Em qual frase a palavra “pesado” está empregada em sentido <b>conotativo</b> (figurado)?`,
 o:[
  [`A caixa de livros ficou pesada demais para levar sozinho.`, `A caixa tem peso de verdade: sentido literal (denotativo).`],
  [`O caminhão pesado não pôde passar pela ponte velha.`, `O caminhão tem muitas toneladas de verdade: sentido literal.`],
  [`Esse haltere é pesado para quem está começando a treinar.`, `O haltere tem peso real: sentido literal.`],
  [`Depois da discussão, o clima na sala ficou pesado.`, ``],
  [`A mala pesada ficou no porta-malas do carro.`, `A mala tem peso real: sentido literal.`]
 ], a:3,
 e:`Um “clima” não tem quilos. “Pesado”, aí, significa <b>tenso, desconfortável</b>: sentido figurado, ou <b>conotativo</b>. Nas outras frases, “pesado” fala do peso real de objetos (denotação).`},

{t:'p-sent', d:2,
 q:`Imagine uma tirinha em três quadros:<br>1º quadro: O pai, segurando o boletim, chama: “Léo, quero ver as suas <b>notas</b>!”<br>2º quadro: Léo pega o violão, sorridente, e toca: “Dó, ré, mi, fá, sol…”<br>3º quadro: O pai, sério: “As do boletim, Léo.”<br><br>O humor da tirinha se constrói principalmente a partir:`,
 o:[
  [`da ironia do pai, que elogia o filho dizendo o contrário do que pensa.`, `O pai não elogia ninguém; ele apenas esclarece qual sentido de “notas” queria.`],
  [`do exagero do pai ao cobrar as notas do boletim.`, `Não há exagero na fala do pai. A graça vem da confusão entre dois sentidos da mesma palavra.`],
  [`da polissemia da palavra “notas”, que Léo entende (ou finge entender) como notas musicais, e não como notas escolares.`, ``],
  [`de um erro de concordância na fala do pai.`, `“Quero ver as suas notas” está de acordo com a norma-padrão. O humor não vem de erro gramatical.`],
  [`do uso de parônimos, palavras de grafia parecida e sentidos diferentes.`, `Parônimos são palavras diferentes e parecidas (comprimento × cumprimento). Aqui é a mesma palavra, “notas”, com dois sentidos.`]
 ], a:2,
 e:`“Nota” é uma palavra <b>polissêmica</b>: pode ser a avaliação escolar ou o som musical. O pai pensa no boletim; Léo responde com as notas musicais. O 3º quadro desfaz o mal-entendido, e é daí que vem o humor. Aqui o duplo sentido é <b>proposital</b>, um recurso da tirinha.`},

{t:'p-sent', d:3,
 q:`Um anúncio num site de vendas dizia:<br><br>“Vendo bicicleta de criança azul.”<br><br>A frase é ambígua: não fica claro se “azul” se refere à bicicleta ou à criança. Qual reescrita elimina essa ambiguidade, deixando claro que <b>a bicicleta é azul</b>?`,
 o:[
  [`Vende-se bicicleta de criança azul.`, `Trocar “vendo” por “vende-se” não mexe no problema: “azul” continua logo depois de “criança”.`],
  [`Vendo bicicleta de criança que é azul.`, `O “que” pode retomar tanto “bicicleta” quanto “criança”, então a dúvida continua.`],
  [`Vendo bicicleta de uma criança azul.`, `Piorou: com “uma criança azul”, a leitura mais provável passa a ser a de que a criança é azul.`],
  [`Vendo bicicleta azul de criança.`, ``],
  [`Vendo, com urgência, bicicleta de criança azul.`, `A informação nova não muda a posição de “azul”, que segue ao lado de “criança”.`]
 ], a:3,
 e:`A ambiguidade nasce da <b>posição</b> do adjetivo: colado em “criança”, “azul” parece qualificar a criança. Colocando-o logo depois de “bicicleta” (“bicicleta <b>azul</b> de criança”), só há uma leitura. Num anúncio de venda, esse duplo sentido é <b>falha</b>, não recurso de humor.`},

/* ===================== p-modal (3) ===================== */
{t:'p-modal', d:1,
 q:`Leia o aviso da coordenação:<br><br>“<b>Provavelmente</b>, a nova quadra poliesportiva será inaugurada em março.”<br><br>A palavra destacada indica que a coordenação:`,
 o:[
  [`considera a inauguração em março possível, mas não garantida.`, ``],
  [`tem certeza absoluta da data de inauguração.`, `Para certeza, o aviso usaria “certamente” ou “sem dúvida”. “Provavelmente” deixa margem para mudança.`],
  [`lamenta que a quadra só fique pronta em março.`, `Lamento seria expresso por “infelizmente”. “Provavelmente” não traz avaliação de bom ou ruim.`],
  [`está obrigada por lei a inaugurar a quadra em março.`, `Obrigação seria “é preciso”, “deve-se”. Não há ideia de dever na frase.`],
  [`informa o local exato da inauguração.`, `“Provavelmente” não indica lugar; ele mostra o grau de certeza de quem escreve.`]
 ], a:0,
 e:`“Provavelmente” é um <b>modalizador de possibilidade</b>: mostra que quem escreve acha a informação provável, mas não certa. Trocar por “certamente” mudaria o sentido de hipótese para certeza.`},

{t:'p-modal', d:2,
 q:`Leia a frase do jornal da escola:<br><br>“Em entrevista, o organizador do interclasse <b>admitiu</b> que houve atraso na entrega das camisetas dos times.”<br><br>Ao escolher o verbo “admitiu”, e não “afirmou”, o redator sugere que:`,
 o:[
  [`a informação sobre o atraso não está comprovada e pode ser falsa.`, `Essa ideia seria transmitida por “alegou”. “Admitir” é reconhecer algo como verdadeiro.`],
  [`o organizador apenas deu uma informação neutra, sem peso nenhum.`, `Esse seria o efeito de “afirmou” ou “disse”, verbos neutros. “Admitiu” não é neutro.`],
  [`o atraso ainda vai acontecer no futuro.`, `“Houve atraso” está no passado. O verbo de fala não muda o tempo do fato.`],
  [`o organizador reconheceu, talvez a contragosto, um fato negativo.`, ``],
  [`o organizador comemorou o atraso das camisetas.`, `“Admitir” não expressa alegria; ao contrário, indica reconhecer algo desfavorável.`]
 ], a:3,
 e:`Verbos que introduzem falas também opinam. “<b>Admitiu</b>” indica que o organizador <b>reconheceu</b> algo negativo (o atraso), talvez a contragosto. “Afirmou” seria neutro; “alegou” sugeriria falta de prova.`},

{t:'p-modal', d:3,
 q:`Leia o trecho de um artigo de opinião publicado no jornal da escola. Assinale a alternativa que explica corretamente o papel das palavras destacadas.`,
 tx:`A biblioteca da escola precisa funcionar em mais horários. Hoje, ela abre <b>apenas</b> duas tardes por semana. Muitos alunos dependem do espaço para estudar e fazer pesquisas; <b>até</b> os professores reclamam que não conseguem retirar livros a tempo. <b>Ou seja</b>, o horário atual não atende à comunidade escolar.`,
 o:[
  [`“apenas” indica tempo; “até” indica um limite de lugar; “ou seja” indica oposição ao que foi dito.`, `“Apenas” não marca tempo, “até” não marca lugar nesse trecho, e “ou seja” não opõe ideias: ele reformula.`],
  [`“apenas” expressa dúvida do autor; “até” acrescenta um argumento fraco; “ou seja” apresenta uma alternativa, como “ou”.`, `“Apenas” não indica dúvida; “até” traz o argumento mais forte, não o mais fraco; e “ou seja” não oferece escolha entre opções.`],
  [`“apenas” restringe e reforça que o horário é pequeno; “até” introduz o argumento mais forte e inesperado; “ou seja” introduz uma explicação que reformula e resume o que foi dito.`, ``],
  [`“apenas” restringe o horário; “até” indica limite de tempo, como em “até as cinco horas”; “ou seja” introduz uma explicação.`, `Duas partes estão certas, mas “até os professores” não indica limite de tempo: indica que o problema atinge até quem menos se esperaria.`],
  [`“apenas” amplia o número de horários; “até” introduz uma conclusão; “ou seja” indica causa.`, `“Apenas” faz o contrário de ampliar: restringe. A conclusão do texto vem com “ou seja”, e “até” não indica conclusão.`]
 ], a:2,
 e:`Os <b>operadores argumentativos</b> orientam o leitor:<ol><li>“<b>apenas</b>” restringe: duas tardes são pouco;</li><li>“<b>até</b>” traz o argumento mais forte (se até os professores são prejudicados, o problema é sério);</li><li>“<b>ou seja</b>” reformula, explicando o que os dados mostram.</li></ol>`}

];
