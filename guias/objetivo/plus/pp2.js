/* REVISÃO TURBINADA · Português · P2 (Sentido, coesão e argumentação)
   Exemplos escritos para este guia, exceto os trechos de autores clássicos em domínio público,
   sempre com a autoria indicada (Camões, Machado de Assis, Cruz e Sousa). */
const PLUS_P2 = {

/* ======================================================================
   p-conj · Conjunções e relações de sentido
   ====================================================================== */
'p-conj': {
 base: [
  [`O que é conjunção (ou conectivo)`, `É a palavra que <b>liga</b> duas orações ou dois termos e, ao ligar, diz <b>qual é a relação</b> entre eles. Ex.: “Treinei, <b>mas</b> perdi” (uma ideia contraria a outra) × “Treinei, <b>por isso</b> ganhei” (uma ideia é resultado da outra). As orações são as mesmas; só o conectivo mudou o sentido.`],
  [`O que é oração`, `Oração é cada trecho organizado em torno de um verbo. “Choveu / e o jogo parou” = 2 verbos → 2 orações. Para achar a relação, primeiro separe as duas orações; depois pergunte: “o que uma faz com a outra?”.`],
  [`A tabela grande das relações`, `<table class="tb"><tr><th>Relação</th><th>Pergunta que ela responde</th><th>Conectivos</th><th>Exemplo</th></tr>
<tr><td>Adição</td><td>E tem mais?</td><td>e, nem (= e não), não só… mas também, além disso</td><td>Não só lavou a louça, <b>mas também</b> secou.</td></tr>
<tr><td>Oposição</td><td>Mas o que contraria?</td><td>mas, porém, contudo, todavia, entretanto, no entanto</td><td>O bolo cresceu; <b>contudo</b>, ficou cru por dentro.</td></tr>
<tr><td>Causa</td><td>Por quê? (o motivo)</td><td>porque, já que, visto que, uma vez que, como (no início)</td><td><b>Visto que</b> faltou luz, a aula acabou cedo.</td></tr>
<tr><td>Consequência</td><td>E aí, o que resultou?</td><td>tão… que, tanto… que, tal… que, de modo que, de forma que</td><td>Riu <b>tanto que</b> perdeu o fôlego.</td></tr>
<tr><td>Conclusão</td><td>Então, o que se conclui?</td><td>logo, portanto, por isso, assim, então, pois (deslocado)</td><td>Ele tem febre; <b>logo</b>, não vai ao treino.</td></tr>
<tr><td>Explicação</td><td>Por que eu digo isso?</td><td>pois, porque, que (depois de ordem, pedido ou opinião)</td><td>Leve o casaco, <b>pois</b> a noite esfria.</td></tr>
<tr><td>Condição</td><td>Em que caso?</td><td>se, caso, desde que (+ subjuntivo), contanto que, a menos que</td><td><b>Contanto que</b> termine a lição, pode jogar.</td></tr>
<tr><td>Concessão</td><td>Apesar de quê?</td><td>embora, ainda que, mesmo que, se bem que, apesar de que</td><td><b>Ainda que</b> estivesse com sono, leu o capítulo.</td></tr>
<tr><td>Finalidade</td><td>Para quê? (o objetivo)</td><td>para que, a fim de que, para (+ infinitivo)</td><td>Falou baixo <b>para que</b> o bebê não acordasse.</td></tr>
<tr><td>Tempo</td><td>Quando?</td><td>quando, enquanto, assim que, logo que, depois que, desde que (+ indicativo), sempre que</td><td><b>Assim que</b> o sinal tocou, todos saíram.</td></tr>
<tr><td>Comparação</td><td>Parecido com quê? Mais ou menos que quê?</td><td>como, assim como, tal qual, mais… (do) que, menos… (do) que</td><td>Corre <b>mais do que</b> o irmão.</td></tr>
<tr><td>Conformidade</td><td>De acordo com quê?</td><td>conforme, segundo, como (= conforme), consoante</td><td><b>Segundo</b> o técnico explicou, o jogo começa às 9h.</td></tr>
<tr><td>Proporção</td><td>Uma coisa cresce junto com outra?</td><td>à medida que, à proporção que, quanto mais… (mais/menos)</td><td><b>Quanto mais</b> leio, <b>mais</b> palavras conheço.</td></tr></table>`],
  [`Causa × consequência: as duas pontas da mesma corda`, `“Choveu muito” (causa) → “a rua alagou” (consequência). O conectivo diz em qual ponta você está: “A rua alagou <b>porque</b> choveu muito” (o “porque” abre a CAUSA) × “Choveu <b>tanto que</b> a rua alagou” (o “que” abre a CONSEQUÊNCIA). Mesma história, ponta diferente.`],
  [`Causa × explicação`, `Na <b>causa</b>, a oração dá o motivo do FATO: “O chão está molhado <b>porque</b> choveu” (a chuva molhou o chão). Na <b>explicação</b>, ela justifica o que a pessoa DISSE, ordenou ou concluiu: “Choveu, <b>pois</b> o chão está molhado” (o chão molhado não faz chover; ele é a prova de que choveu). Dica: depois de ordem ou pedido (“Corra, <b>que</b> o ônibus vai sair”), é explicação.`],
  [`Oposição × concessão: o obstáculo que não impede`, `As duas mostram ideias que “brigam”. Na <b>oposição</b> (mas, porém), a ideia mais forte vem depois do conectivo. Na <b>concessão</b> (embora, ainda que), o conectivo abre a ideia FRACA, o obstáculo admitido, e a principal fica na outra oração. “Estava cansado, <b>mas</b> terminou” = “<b>Embora</b> estivesse cansado, terminou”.`],
  [`Modo subjuntivo (pré-requisito)`, `É o modo do verbo para dúvida, hipótese, desejo: “que eu <b>esteja</b>”, “se eu <b>estivesse</b>”, “quando eu <b>estiver</b>”. As concessivas (embora, ainda que, mesmo que) e “caso” pedem subjuntivo: “Embora <b>esteja</b> frio…” (e nunca “embora está”). “Caso <b>chova</b>…” (e nunca “caso chover”).`],
  [`Um conectivo, vários sentidos`, `Alguns conectivos “trocam de roupa” conforme a frase:<br>• <b>como</b>: causa (“<b>Como</b> era tarde, saí”), comparação (“forte <b>como</b> um touro”), conformidade (“fiz <b>como</b> mandaram”).<br>• <b>desde que</b>: condição (“Vou, <b>desde que</b> você <b>vá</b>”, subjuntivo) × tempo (“<b>Desde que</b> <b>mudou</b>, está feliz”, indicativo).<br>• <b>pois</b>: no início da oração = causa/explicação; deslocado, entre vírgulas = conclusão.`]
 ],
 jeitos: [
  {n:`O teste da substituição pelo “chefe da família”`,
   c:`Cada relação tem um conectivo “chefe”, o mais fácil de reconhecer. Troque o conectivo da prova pelo chefe de cada família: aquele que mantém o sentido é a resposta.<br>Chefes: adição → <b>e</b> · oposição → <b>mas</b> · concessão → <b>embora</b> · causa → <b>porque</b> · conclusão → <b>portanto</b> · consequência → <b>tão… que</b> · condição → <b>se</b> · finalidade → <b>para que</b> · tempo → <b>quando</b> · proporção → <b>à medida que</b> · conformidade → <b>conforme</b> · comparação → <b>como</b>.`,
   ex:`“<b>Uma vez que</b> o filme acabou tarde, dormimos no sofá.” Testo: “<b>Porque</b> o filme acabou tarde…” → mantém! → <b>causa</b>.<br>“<b>Conquanto</b> fosse difícil, a prova foi justa.” Palavra desconhecida? Testo: “<b>Embora</b> fosse difícil…” → encaixa perfeitamente → <b>concessão</b>.`},
  {n:`O teste do “mas” (oposição ou concessão?)`,
   c:`Se você conseguir reescrever a frase com “mas” sem mudar a ideia, existe uma contradição entre as partes. Aí olhe o conectivo original: se ele abre o obstáculo que não impede (embora, mesmo que), é concessão; se ele abre a ideia vencedora (porém, contudo), é oposição.`,
   ex:`“<b>Mesmo que</b> o ingresso esteja caro, vou ao show.” → “O ingresso está caro, <b>mas</b> vou ao show.” Funciona, e “mesmo que” abre o obstáculo → <b>concessão</b>.<br>“Estudou o ano todo; <b>todavia</b>, ficou nervoso.” → “Estudou o ano todo, <b>mas</b> ficou nervoso.” “Todavia” abre a ideia vencedora → <b>oposição</b>.`},
  {n:`A pergunta da relação`,
   c:`Pergunte à oração principal a pergunta da tabela: <b>Por quê?</b> (causa) · <b>Para quê?</b> (finalidade) · <b>Quando?</b> (tempo) · <b>Em que caso?</b> (condição) · <b>Apesar de quê?</b> (concessão) · <b>E o resultado?</b> (consequência). A oração com o conectivo responde a uma delas.`,
   ex:`“Desligou o celular <b>a fim de que</b> ninguém o interrompesse.” Desligou PARA QUÊ? → para ninguém interromper → <b>finalidade</b>.<br>“<b>Sempre que</b> chove, o portão emperra.” O portão emperra QUANDO? → sempre que chove → <b>tempo</b>.`},
  {n:`O teste da seta (causa → efeito)`,
   c:`Desenhe uma seta do que vem ANTES na realidade para o que vem DEPOIS. Se o conectivo está na ponta de trás da seta, é causa; se está na ponta da frente, é consequência ou conclusão.`,
   ex:`“O pneu furou, <b>de modo que</b> chegamos atrasados.” Seta: pneu furou → atraso. “De modo que” abre o atraso (a ponta da frente) → <b>consequência</b>.<br>“Chegamos atrasados <b>porque</b> o pneu furou.” “Porque” abre o pneu furado (a ponta de trás) → <b>causa</b>.`},
  {n:`O teste do verbo (subjuntivo ou indicativo?)`,
   c:`Quando o conectivo tem dois sentidos (como “desde que”), olhe o verbo. Subjuntivo (vá, fosse, estiver) costuma indicar hipótese: condição, concessão, finalidade. Indicativo (vai, foi, está) indica fato: tempo, causa.`,
   ex:`“Empresto a bicicleta, <b>desde que</b> você a <b>devolva</b> amanhã.” “Devolva” = subjuntivo, hipótese → <b>condição</b> (= se você devolver).<br>“<b>Desde que</b> <b>entrou</b> no time, treina todo dia.” “Entrou” = indicativo, fato → <b>tempo</b> (= a partir do momento em que).`},
  {n:`O teste da posição do “pois”`,
   c:`“Pois” no início da oração = <b>porque</b> (causa/explicação). “Pois” depois do verbo, entre vírgulas = <b>portanto</b> (conclusão). Troque e confira.`,
   ex:`“Feche a janela, <b>pois</b> vai ventar.” → “Feche a janela, <b>porque</b> vai ventar” → explicação.<br>“O prazo acabou ontem. Não aceitaremos, <b>pois</b>, trabalhos atrasados.” → “Não aceitaremos, <b>portanto</b>, trabalhos atrasados” → <b>conclusão</b>.`}
 ],
 passo: [
  `Ache o conectivo destacado e separe as duas ideias que ele liga (quem vem antes, quem vem depois).`,
  `Conte a “história” das duas ideias com suas palavras: uma é motivo, resultado, obstáculo, objetivo, momento?`,
  `Faça o teste da substituição: troque pelo “chefe” de cada família até achar o que mantém o sentido.`,
  `Se o conectivo for “como”, “pois” ou “desde que”, olhe a posição e o modo do verbo antes de decidir.`,
  `Em questão de reescrita: confira se o novo conectivo mantém a relação E se o verbo foi ajustado (embora + subjuntivo).`
 ],
 exs: [
  {q:`“Os ingressos acabaram em dez minutos, <b>de forma que</b> muitos fãs ficaram de fora.” A expressão destacada pode ser trocada, sem mudar o sentido, por: (a) porque (b) de modo que (c) embora (d) para que`,
   s:[`Primeiro eu conto a história: os ingressos acabaram → por isso muita gente ficou de fora. A segunda parte é o RESULTADO.`,
      `Uso o teste da seta: ingressos acabaram → fãs de fora. “De forma que” abre a ponta da frente = consequência.`,
      `Procuro outro conectivo de consequência nas alternativas: “de modo que”. “Porque” inverteria a seta (os fãs ficarem de fora não causa o fim dos ingressos).`],
   r:`(b) de modo que — relação de consequência.`},
  {q:`“<b>Desde que</b> a cantina passou a vender frutas, o consumo de refrigerante caiu.” Qual a relação?`,
   s:[`“Desde que” tem dois sentidos possíveis (condição ou tempo), então olho o verbo.`,
      `“Passou” está no indicativo: é um fato que já aconteceu, não uma hipótese.`,
      `Teste da substituição: “<b>A partir do momento em que</b> a cantina passou a vender frutas…” mantém o sentido. “<b>Se</b> a cantina passou…” fica estranho.`],
   r:`Tempo (= a partir do momento em que).`},
  {q:`Reescreva sem mudar o sentido, começando por “Embora”: “O time perdeu o primeiro jogo; no entanto, chegou à final.”`,
   s:[`Primeiro eu vejo a relação: “no entanto” = mas → oposição. Perder o primeiro jogo é o obstáculo; chegar à final é o resultado que venceu.`,
      `Na concessão, “embora” abre o OBSTÁCULO, não o resultado. Então: “Embora + perder o primeiro jogo”.`,
      `Ajusto o verbo para o subjuntivo: “perdeu” → “tenha perdido”.`,
      `Confiro: “Embora tenha perdido o primeiro jogo, o time chegou à final.” Mesmo sentido, norma-padrão.`],
   r:`“Embora tenha perdido o primeiro jogo, o time chegou à final.”`}
 ],
 erros: [
  `<b>Errado:</b> usar indicativo depois de “embora”: “Embora estava cansado, terminou a prova.” <b>Certo:</b> “Embora <b>estivesse</b> cansado…” — concessiva pede subjuntivo.`,
  `<b>Errado:</b> colocar “embora” na ideia vencedora: “Estudou pouco, embora tenha passado.” (inverte o sentido) <b>Certo:</b> “<b>Embora</b> tenha estudado pouco, passou.” — “embora” abre o obstáculo.`,
  `<b>Errado:</b> marcar “causa” para “tão… que”. <b>Certo:</b> “tão… que” abre o RESULTADO → consequência (“Correu <b>tão</b> rápido <b>que</b> tropeçou”).`,
  `<b>Errado:</b> ler todo “como” como comparação. <b>Certo:</b> no início da frase, com sentido de “já que”, é causa (“<b>Como</b> faltou água, adiaram a aula”).`,
  `<b>Errado:</b> confundir “mas” com “mais”. <b>Certo:</b> “mas” = oposição (= porém); “mais” = quantidade (o contrário de “menos”).`
 ],
 resumo: [
  `Troque pelo “chefe”: mas · embora · porque · portanto · se · para que · quando.`,
  `Mas = porém = contudo = todavia = no entanto.`,
  `Embora / ainda que / mesmo que → obstáculo que NÃO impede + subjuntivo.`,
  `Causa (porque) = ponta de trás da seta; consequência (tão… que) = ponta da frente.`,
  `“Pois” no início = porque; “pois” entre vírgulas, depois do verbo = portanto.`,
  `“Desde que” + subjuntivo = condição; + indicativo = tempo.`
 ]
},

/* ======================================================================
   p-coes · Coesão referencial
   ====================================================================== */
'p-coes': {
 base: [
  [`Coesão: a “cola” do texto`, `Coesão é o conjunto de recursos que ligam as frases, para o texto não virar uma lista solta. Na coesão <b>referencial</b>, uma palavra aponta para outra já citada (ou que ainda vai aparecer), para não repetir. Ex.: “A girafa abaixou o pescoço. <b>Ela</b> queria beber água.” → “Ela” aponta para “a girafa”.`],
  [`Referente: o “dono” da palavra`, `O termo que um pronome retoma é chamado de <b>referente</b>. Toda pergunta de coesão na prova é, no fundo: “Quem é o referente?”. Em “Comprei tênis novos e já <b>os</b> sujei”, o referente de “os” é “tênis novos”.`],
  [`Pronomes que retomam`, `<table class="tb"><tr><th>Tipo</th><th>Exemplos</th><th>Em ação</th></tr>
<tr><td>Pessoais</td><td>ele, ela, eles, o, a, lhe, -lo, -la</td><td>Vi o filme e adorei-<b>o</b>.</td></tr>
<tr><td>Possessivos</td><td>seu, sua, dele, dela</td><td>Ana trouxe <b>sua</b> flauta.</td></tr>
<tr><td>Demonstrativos</td><td>este, esse, aquele, isso, isto, o (= aquilo)</td><td>Ninguém ligou. <b>Isso</b> me preocupou.</td></tr>
<tr><td>Relativos</td><td>que, quem, o qual, cujo, onde</td><td>A ponte <b>que</b> caiu era antiga.</td></tr></table>`],
  [`Elipse: a palavra que some (e todo mundo entende)`, `Elipse é omitir um termo que o leitor recupera sozinho. “O cachorro latiu a noite toda. Ø Só parou de manhã.” Quem parou? O cachorro, que não precisou ser repetido. Na prova, a pergunta pode ser “qual é o sujeito de ‘parou’?” — a resposta está na frase anterior.`],
  [`Sinônimos, hiperônimos e expressões que “apelidam”`, `• <b>Sinônimo</b>: palavra de sentido parecido (“o carro… o automóvel”).<br>• <b>Hiperônimo</b>: palavra mais GERAL que engloba a outra (“a rosa… a flor”; “o tubarão… o animal”). O contrário, a palavra mais específica, é o <b>hipônimo</b>.<br>• <b>Expressão que caracteriza</b>: “Santos Dumont… <b>o inventor brasileiro</b>… <b>o pai da aviação</b>”. Essas expressões ainda acrescentam informação sobre o referente.`],
  [`Anáfora × catáfora`, `<b>Anáfora</b> retoma algo que JÁ apareceu (olha para trás): “Lia ganhou o prêmio. <b>Ela</b> chorou.” <b>Catáfora</b> anuncia algo que AINDA vai aparecer (olha para a frente): “Só quero <b>isto</b>: que você volte cedo.” Por isso, “este/isto” costuma anunciar, e “esse/isso” costuma retomar.`],
  [`Pronome relativo: retoma E abre oração`, `O relativo substitui o termo anterior dentro de uma nova oração. Teste: desfaça em duas frases. “O livro <b>que</b> perdi era da biblioteca” = “Perdi <b>o livro</b>. O livro era da biblioteca.” Com “cujo”: “A aluna <b>cujo</b> caderno sumiu” = “O caderno <b>da aluna</b> sumiu” (cujo = posse, concorda com a coisa possuída: cujo caderno, cuja mochila, cujos livros).`]
 ],
 jeitos: [
  {n:`Pergunte “a quem?” e substitua`,
   c:`Pare no pronome e pergunte: “a quem (ou a quê) ele se refere?”. Pegue o candidato e coloque no lugar do pronome. Se a frase faz sentido e conta a mesma história, achou o referente.`,
   ex:`“Os bombeiros resgataram o gato do telhado e <b>o</b> entregaram à dona.” Candidatos: telhado ou gato? Substituo: “entregaram <b>o telhado</b> à dona” (absurdo) × “entregaram <b>o gato</b> à dona” (faz sentido) → referente: <b>o gato</b>.`},
  {n:`Filtro do gênero e do número`,
   c:`Antes de pensar no sentido, elimine candidatos que não concordam com o pronome: “ela” é feminino singular; “eles” é masculino plural. Isso costuma derrubar metade das alternativas em segundos.`,
   ex:`“As meninas encontraram o professor na feira. <b>Eles</b> conversaram muito.” “Eles” (masculino plural) não pode ser só “as meninas” nem só “o professor” → é <b>o grupo todo</b> (meninas + professor; masculino plural engloba os dois).`},
  {n:`O teste de quem pode fazer a ação`,
   c:`Olhe o verbo ligado ao pronome e pergunte: qual dos candidatos consegue fazer (ou sofrer) essa ação? Coisas não falam; animais não assinam contratos.`,
   ex:`“O menino jogou a pedra na lagoa, e <b>ela</b> afundou na hora.” Candidatos femininos: “a pedra” e “a lagoa”. A lagoa não afunda; quem afunda é a pedra → referente: <b>a pedra</b>.`},
  {n:`“Isso” pode valer uma frase inteira`,
   c:`Os demonstrativos neutros (isso, isto, aquilo, o) podem retomar uma IDEIA inteira, não só uma palavra. Se nenhuma palavra sozinha encaixa, procure o fato que veio antes.`,
   ex:`“O ônibus quebrou na estrada e os passageiros esperaram três horas. <b>Isso</b> gerou muitas reclamações.” Não foi “a estrada” nem “as horas”: foi <b>a quebra do ônibus e a longa espera</b>.`},
  {n:`Desmonte o relativo em duas frases`,
   c:`Para saber a quem “que”, “onde”, “cujo” ou “o qual” se refere, divida o período em duas frases, repetindo o candidato. A versão que faz sentido revela o referente — e mostra se o relativo foi bem usado.`,
   ex:`“Visitei a casa do escritor <b>onde</b> ele escreveu seus livros.” → “Ele escreveu seus livros <b>na casa</b>” (lugar físico, ok) → referente: <b>a casa</b>.<br>“A pintora <b>cujas</b> telas vimos é mineira.” → “Vimos <b>as telas da pintora</b>” → “cujas” liga a pintora (dona) às telas (coisa possuída).`}
 ],
 passo: [
  `Sublinhe o pronome (ou a expressão) que a questão destaca.`,
  `Volte no texto e liste os candidatos a referente (às vezes ele está depois, quando é catáfora).`,
  `Corte quem não concorda em gênero e número.`,
  `Substitua o pronome por cada candidato que sobrou e veja qual mantém o sentido (e quem pode fazer a ação).`,
  `Se nenhuma palavra sozinha serve, procure uma ideia inteira (comum com isso, isto, o).`
 ],
 exs: [
  {q:`“A coruja-buraqueira vive em campos abertos. A <b>ave</b>, que costuma cavar tocas no chão, fica ativa também durante o dia.” Que recurso de coesão é “a ave”?`,
   s:[`Primeiro eu pergunto: “a ave” se refere a quem? Substituo: “A coruja-buraqueira, que costuma cavar tocas…” → faz sentido.`,
      `Agora vejo a relação entre as palavras: “ave” é uma palavra mais geral — toda coruja é ave, mas nem toda ave é coruja.`,
      `Palavra mais geral que retoma a mais específica = hiperônimo.`],
   r:`Hiperônimo (“a ave” retoma “a coruja-buraqueira”).`},
  {q:`“Paula ligou para Renata porque <b>ela</b> tinha esquecido a chave de casa.” Por que a frase é ambígua? Reescreva-a deixando claro que quem esqueceu a chave foi Renata.`,
   s:[`Faço o filtro de gênero: Paula e Renata são femininas e singulares. O filtro não elimina ninguém.`,
      `Faço o teste da ação: as duas podem ter esquecido a chave. O sentido também não decide → a frase é ambígua.`,
      `Para resolver, troco o pronome por algo que só sirva para Renata: o próprio nome ou uma reorganização da frase.`],
   r:`“Ela” pode ser Paula ou Renata. Uma solução: “Renata tinha esquecido a chave de casa, por isso Paula ligou para ela.”`},
  {q:`“Meu avô me deixou <b>esta</b> recomendação: nunca durma brigado com ninguém. <b>Essa</b> frase eu levo comigo até hoje.” Explique a diferença de uso entre “esta” e “essa”.`,
   s:[`Primeiro eu olho a direção de cada pronome: “esta” vem ANTES da recomendação, ou seja, anuncia o que vai ser dito (catáfora).`,
      `“Essa” aparece DEPOIS da recomendação e a retoma (anáfora).`,
      `Confiro com a regra: este/isto anuncia; esse/isso retoma.`],
   r:`“Esta” anuncia a recomendação que ainda vai aparecer; “essa” retoma a frase já dita.`}
 ],
 erros: [
  `<b>Errado:</b> escolher sempre a palavra mais próxima do pronome. <b>Certo:</b> o referente pode estar longe; teste pela substituição e pelo sentido.`,
  `<b>Errado:</b> “A empresa cujo o dono viajou.” <b>Certo:</b> “A empresa <b>cujo dono</b> viajou.” — depois de “cujo” não vem artigo.`,
  `<b>Errado:</b> “Foi uma época onde tudo era mais barato.” <b>Certo:</b> “uma época <b>em que</b> (na qual) tudo era mais barato.” — “onde” só para lugar físico.`,
  `<b>Errado:</b> “O menino que eu gosto.” <b>Certo:</b> “O menino <b>de que</b> (de quem) eu gosto.” — quem gosta, gosta DE algo; a preposição vai antes do relativo.`,
  `<b>Errado:</b> achar que “isso” sempre retoma uma palavra. <b>Certo:</b> muitas vezes retoma uma ideia inteira (um fato, uma decisão).`
 ],
 resumo: [
  `Pergunte “a quem?” → substitua → confira o sentido.`,
  `Filtro rápido: gênero e número do pronome.`,
  `Retomam sem repetir: pronome · elipse · sinônimo · hiperônimo (ave ⊃ coruja).`,
  `Este/isto anuncia → · ← esse/isso retoma.`,
  `Onde = lugar físico · cujo = posse, sem artigo.`
 ]
},

/* ======================================================================
   p-fig · Figuras de linguagem
   ====================================================================== */
'p-fig': {
 base: [
  [`Figura de linguagem: quando a palavra sai do “modo dicionário”`, `É um uso especial da linguagem para dar ênfase, beleza, humor ou emoção. Quase todas usam o sentido <b>figurado</b> (conotativo). Ex.: “Minha mochila pesa uma tonelada” — ninguém mediu; é um jeito expressivo de reclamar do peso.`],
  [`A tabela com o macete de cada figura`, `<table class="tb"><tr><th>Figura</th><th>Macete</th><th>Exemplo</th></tr>
<tr><td>Comparação</td><td>Tem “como”, “feito”, “tal qual”, “parece”</td><td>Dormiu <b>feito</b> uma pedra.</td></tr>
<tr><td>Metáfora</td><td>Comparação sem conectivo: “A é B”</td><td>Aquele lateral é um <b>foguete</b>.</td></tr>
<tr><td>Metonímia</td><td>Troca por um VIZINHO de verdade (autor/obra, lugar/pessoas, recipiente/conteúdo, parte/todo)</td><td>A <b>escola inteira</b> aplaudiu. (as pessoas da escola)</td></tr>
<tr><td>Hipérbole</td><td>HIPER exagero: impossível de ser literal</td><td>Chorei um <b>oceano</b>.</td></tr>
<tr><td>Eufemismo</td><td>Almofada: amacia o que é duro</td><td>Ele <b>não foi muito feliz</b> na prova. (foi mal)</td></tr>
<tr><td>Ironia</td><td>Diz o contrário; o contexto “entrega”</td><td>Que dia lindo para um piquenique! (debaixo de temporal)</td></tr>
<tr><td>Personificação</td><td>Coisa ou bicho fazendo coisa de GENTE</td><td>O velho relógio <b>resmungava</b> as horas.</td></tr>
<tr><td>Antítese</td><td>Opostos LADO A LADO, cada um no seu canto</td><td>Uns <b>chegam</b>, outros <b>partem</b>.</td></tr>
<tr><td>Paradoxo</td><td>Opostos GRUDADOS na mesma coisa: parece impossível</td><td>“É um <b>contentamento descontente</b>” (Camões).</td></tr>
<tr><td>Onomatopeia</td><td>A palavra É o som</td><td>O balão fez <b>pou!</b></td></tr>
<tr><td>Aliteração</td><td>Repete CONSOANTE (som)</td><td>“<b>V</b>ozes <b>v</b>eladas, <b>v</b>eludosas <b>v</b>ozes” (Cruz e Sousa).</td></tr>
<tr><td>Assonância</td><td>Repete VOGAL (som)</td><td>A v<b>a</b>c<b>a</b> m<b>a</b>lh<b>a</b>d<b>a</b> m<b>a</b>stig<b>a</b> <b>a</b> p<b>a</b>lh<b>a</b>.</td></tr>
<tr><td>Gradação</td><td>Escadinha: ideias que sobem (ou descem) de intensidade</td><td>Tropeçou, cambaleou, despencou.</td></tr>
<tr><td>Pleonasmo</td><td>Repetição de ideia: de propósito (reforço) ou por erro (vício)</td><td>Vi <b>com meus próprios olhos</b>. (reforço)</td></tr></table>`],
  [`Metáfora × comparação, de perto`, `As duas aproximam duas coisas por uma semelhança. A <b>comparação</b> mostra a “ponte” (como, feito, tal qual, parecer): “Seus olhos brilhavam <b>como</b> faróis.” A <b>metáfora</b> tira a ponte e funde as coisas: “Seus olhos eram <b>faróis</b>.” Clássico: Machado de Assis, em <i>Dom Casmurro</i>, descreve os olhos de Capitu como “<b>olhos de ressaca</b>” — metáfora: atraem e puxam como o mar.`],
  [`Metonímia: a troca por proximidade`, `A metonímia troca uma palavra por outra que tem ligação REAL com ela:<br>• autor pela obra: “Estou lendo <b>Machado</b>.”<br>• recipiente pelo conteúdo: “Comeu <b>um prato</b> de arroz.”<br>• lugar pelas pessoas: “<b>O estádio</b> vaiou o juiz.”<br>• parte pelo todo: “Não tinha <b>um teto</b> onde morar.” (teto = casa)<br>Na metáfora a ligação é de SEMELHANÇA (parece); na metonímia, de VIZINHANÇA (está junto).`],
  [`Ironia × eufemismo × hipérbole: as três “mexem” na intensidade`, `• <b>Hipérbole</b> AUMENTA: “Esperei uma eternidade.”<br>• <b>Eufemismo</b> DIMINUI para suavizar: “Ele está <b>acima do peso</b>” (em vez de algo grosseiro).<br>• <b>Ironia</b> INVERTE: “Que pontual!” para quem chegou uma hora atrasado.<br>Pergunta-chave: o autor está exagerando, amaciando ou dizendo o contrário?`],
  [`Antítese × paradoxo, de perto`, `Na <b>antítese</b>, os opostos ficam em lados diferentes, sem contradição: “De dia trabalha, de noite estuda.” No <b>paradoxo</b>, os opostos se aplicam à MESMA coisa ao mesmo tempo, e a frase parece impossível: “Sentia-se <b>sozinho no meio da multidão</b>.” (estar sozinho e cercado de gente ao mesmo tempo).`],
  [`Pleonasmo: reforço ou erro?`, `É repetir uma ideia já contida na outra palavra. Se a repetição serve para dar ênfase, é figura (<b>pleonasmo literário</b>): “Sonhei um sonho bonito.” Se é só descuido, é <b>pleonasmo vicioso</b> e deve ser evitado: “subir para cima”, “entrar para dentro”, “elo de ligação”, “há anos atrás”.`],
  [`Sons: onomatopeia, aliteração e assonância`, `As três trabalham com o SOM. A <b>onomatopeia</b> é uma palavra que imita um som (“au-au”, “tique-taque”, “zum-zum”). A <b>aliteração</b> repete sons de consoantes em várias palavras (“o <b>r</b>onco <b>r</b>ouco do <b>r</b>io”). A <b>assonância</b> repete sons de vogais (“s<b>o</b>l, s<b>o</b>m, s<b>o</b>n<b>o</b>”). Macete: aLiteração = Letra consoante; Assonância = A, E, I, O, U.`]
 ],
 jeitos: [
  {n:`O teste do “como”`,
   c:`Procure o conectivo de comparação (como, feito, tal qual, assim como, parecer). Tem? Comparação. Não tem, mas há uma coisa sendo chamada de outra (“A é B”)? Metáfora.`,
   ex:`“A sala de aula virou uma <b>sauna</b>.” Não há “como”; a sala é chamada de sauna → <b>metáfora</b>.<br>“A sala estava quente <b>feito</b> uma sauna.” Há “feito” → <b>comparação</b>.`},
  {n:`O teste do “parece ou está junto?”`,
   c:`Quando uma palavra está no lugar de outra, pergunte: elas se PARECEM (metáfora) ou estão JUNTAS na vida real (metonímia: o autor e sua obra, o copo e a água, o lugar e as pessoas)?`,
   ex:`“<b>O Brasil</b> parou para ver a final.” País e torcedores estão juntos (lugar pelas pessoas) → <b>metonímia</b>.<br>“Meu irmão é um <b>poço</b> de paciência.” Paciência não está num poço; há só a ideia de “muito, fundo” → <b>metáfora</b>.`},
  {n:`O termômetro da intensidade`,
   c:`Compare a frase com a versão “normal”. Ficou MAIOR que a realidade? Hipérbole. Ficou mais SUAVE? Eufemismo. Ficou o CONTRÁRIO, e o contexto mostra isso? Ironia.`,
   ex:`“Ele <b>pegou emprestado</b> meu lanche sem pedir.” Versão normal: “roubou meu lanche” → a frase amacia → <b>eufemismo</b> (se o tom for de deboche, pode ter ironia junto: leia o contexto).<br>“Tenho <b>uma montanha</b> de lição.” Maior que a realidade → <b>hipérbole</b>.`},
  {n:`O teste da mesma coisa (antítese ou paradoxo?)`,
   c:`Achou opostos? Pergunte: os dois se referem à MESMA coisa, ao mesmo tempo? Se sim, é paradoxo (soa impossível). Se cada um fica no seu canto (dois momentos, duas pessoas, dois lugares), é antítese.`,
   ex:`“Nos treinos era <b>lento</b>; nos jogos, <b>veloz</b>.” Opostos em momentos diferentes → <b>antítese</b>.<br>“Naquele dia, sentia uma <b>alegria triste</b>.” Alegria e tristeza na MESMA emoção, ao mesmo tempo → <b>paradoxo</b>.`},
  {n:`Leia em voz alta (figuras de som)`,
   c:`Para aliteração e assonância, leia a frase em voz alta (ou mentalmente bem devagar) e escute o que se repete. Consoante repetida → aliteração. Vogal repetida → assonância. Palavra que É um barulho → onomatopeia.`,
   ex:`“O <b>t</b>ambor <b>t</b>roava, <b>t</b>enso e <b>t</b>eimoso.” Repete o som de T → <b>aliteração</b>.<br>“Bum! A porta bateu com o vento.” “Bum” imita o som → <b>onomatopeia</b>.`},
  {n:`A escadinha (gradação)`,
   c:`Viu uma sequência de três ou mais palavras do mesmo tipo? Verifique se elas sobem (ou descem) de força, como degraus. Se sobem, é gradação.`,
   ex:`“Primeiro ele <b>sorriu</b>, depois <b>riu</b>, por fim <b>gargalhou</b>.” Cada verbo é mais intenso que o anterior → <b>gradação</b> (crescente).`}
 ],
 passo: [
  `Leia o trecho destacado e pergunte: está em sentido literal ou figurado?`,
  `Tem “como/feito/tal qual”? → comparação. Não tem, mas “A é B”? → metáfora.`,
  `Troca de palavras? Parece (metáfora) ou está junto (metonímia)?`,
  `Mexe na intensidade? Aumenta (hipérbole), amacia (eufemismo) ou inverte (ironia)?`,
  `Há opostos? Na mesma coisa (paradoxo) ou lado a lado (antítese)? Há som repetido ou imitado? (aliteração, assonância, onomatopeia)`,
  `Por fim, pense no EFEITO: a prova costuma perguntar para que a figura foi usada (ênfase, humor, crítica, beleza).`
 ],
 exs: [
  {q:`“Quando o professor anunciou prova surpresa, <b>a sala inteira</b> suspirou.” A figura de linguagem é:`,
   s:[`Primeiro eu pergunto: a sala (as paredes, as carteiras) suspirou? Não: quem suspirou foram os alunos.`,
      `Então “a sala” está no lugar de “os alunos”. Uso o teste: elas se parecem ou estão juntas? Estão juntas — os alunos estão DENTRO da sala.`,
      `Troca por vizinhança (lugar pelas pessoas) = metonímia. Não é personificação, porque o texto não quer que imaginemos a sala como um ser vivo.`],
   r:`Metonímia (o lugar pelas pessoas que estão nele).`},
  {q:`“Com aquele professor era assim: odiávamos as provas dele e adorávamos as aulas.” Há antítese ou paradoxo no trecho “odiávamos as provas dele e adorávamos as aulas”?`,
   s:[`Acho os opostos: odiar × adorar.`,
      `Aplico o teste da mesma coisa: odiar se refere às PROVAS; adorar se refere às AULAS. Cada oposto está no seu canto.`,
      `Como não há contradição (é possível odiar uma coisa e adorar outra), não é paradoxo.`],
   r:`Antítese (opostos lado a lado, aplicados a coisas diferentes).`},
  {q:`Na frase “Recebi um aviso de que o meu celular ‘descansaria’ por uns dias — ou seja, foi confiscado pela coordenação”, a palavra “descansaria” é exemplo de qual figura e com que efeito?`,
   s:[`Comparo com a versão “normal”: “o celular será confiscado”.`,
      `A palavra escolhida deixa a notícia mais leve, menos dura. No termômetro, isso é AMACIAR → eufemismo.`,
      `Observo também o efeito: o autor brinca com a situação, suavizando-a com humor (o “ou seja” revela o sentido verdadeiro).`,
      `Atenção: o celular “descansar” também dá ao objeto uma ação de gente (personificação), mas ela está a serviço da figura principal: amaciar a notícia.`],
   r:`Eufemismo: suaviza o fato desagradável (o confisco), com efeito de humor.`}
 ],
 erros: [
  `<b>Errado:</b> chamar de metáfora qualquer frase com “como”. <b>Certo:</b> com conectivo é <b>comparação</b>; metáfora não tem conectivo.`,
  `<b>Errado:</b> marcar personificação em “O estádio vaiou o juiz”. <b>Certo:</b> é <b>metonímia</b> (lugar pelas pessoas); quem vaiou foram os torcedores.`,
  `<b>Errado:</b> chamar de paradoxo qualquer par de opostos. <b>Certo:</b> só é paradoxo quando os opostos se aplicam à mesma coisa; lado a lado é <b>antítese</b>.`,
  `<b>Errado:</b> trocar aliteração por assonância. <b>Certo:</b> aLiteração = consoantes; Assonância = vogais (A, E, I, O, U).`,
  `<b>Errado:</b> achar que todo pleonasmo é erro. <b>Certo:</b> “Vi com meus próprios olhos” é reforço intencional (figura); “subir para cima” é vício.`
 ],
 resumo: [
  `Com “como” = comparação · sem = metáfora.`,
  `Parece = metáfora · está junto = metonímia.`,
  `Aumenta = hipérbole · amacia = eufemismo · inverte = ironia.`,
  `Opostos lado a lado = antítese · na mesma coisa = paradoxo.`,
  `aLiteração = consoante · Assonância = vogal · onomatopeia = o próprio som.`,
  `Escadinha = gradação · repetição de ideia = pleonasmo.`
 ]
},

/* ======================================================================
   p-sent · Denotação, conotação, polissemia e ambiguidade
   ====================================================================== */
'p-sent': {
 base: [
  [`Sentido literal e sentido figurado`, `<b>Denotação</b> é o sentido “de dicionário”, o primeiro, concreto: “O <b>gelo</b> derreteu no copo.” <b>Conotação</b> é o sentido figurado, criado pelo contexto: “Ela me deu um <b>gelo</b> a semana toda” (= me ignorou). A palavra é a mesma; o contexto decide.`],
  [`Contexto: o juiz que decide o sentido`, `Contexto é tudo o que está em volta da palavra: a frase, o texto, a situação, o gênero (notícia, tirinha, anúncio). Na prova, NUNCA responda pela palavra isolada; leia a frase inteira. “Ele é uma <b>fera</b>” pode ser elogio (fera em matemática = muito bom) ou crítica (ficou uma fera = muito bravo).`],
  [`Polissemia: uma palavra, vários sentidos aparentados`, `Polissemia é quando a MESMA palavra tem vários sentidos ligados por uma ideia comum. “<b>Linha</b>” de costura, linha de ônibus, linha do telefone, linha de raciocínio — todas guardam a ideia de “fio, sequência”. “<b>Pé</b>” de gente, pé da mesa, pé de alface, pé da montanha: todos guardam a ideia de “base, parte de baixo”.`],
  [`Homônimos: som ou grafia iguais, sentidos diferentes`, `• <b>Homófonos</b> (mesmo som, grafia diferente): cela (prisão) × sela (do cavalo); conserto (reparo) × concerto (apresentação musical); sessão × seção × cessão.<br>• <b>Homógrafos</b> (mesma grafia, som diferente): o <b>governo</b> (ô) × eu <b>governo</b> (ó); o <b>jogo</b> (ô) × eu <b>jogo</b> (ó).`],
  [`Parônimos: parecidos, mas diferentes`, `São palavras de grafia e som PARECIDOS (não iguais) e sentidos diferentes: comprimento × cumprimento · descrição × discrição · eminente × iminente · tráfego × tráfico · ratificar (confirmar) × retificar (corrigir) · mandado (ordem judicial) × mandato (período de um cargo).`],
  [`Ambiguidade: quando a frase pode ser lida de dois jeitos`, `As causas mais comuns na prova:<br>• <b>pronome</b> com dois candidatos: “O pai disse ao filho que <b>seu</b> time perdeu” (time de quem?);<br>• <b>posição</b> de um termo: “Vi o acidente <b>do ônibus</b>” (eu estava no ônibus ou o ônibus se acidentou?);<br>• <b>palavra polissêmica</b>: “O banco está quebrado” (o assento ou a instituição financeira?).`],
  [`Ambiguidade: defeito ou recurso?`, `Depende da intenção e do gênero. Em notícia, aviso, manual ou redação, é <b>defeito</b> (o leitor pode entender errado). Em piada, tirinha, anúncio ou poema, costuma ser <b>recurso</b> proposital para criar humor ou chamar atenção.`]
 ],
 jeitos: [
  {n:`O teste do “é de verdade?”`,
   c:`Pergunte se aquilo pode acontecer literalmente, no mundo real. Pode? Denotação. Não pode, e a palavra está “emprestando” uma ideia? Conotação.`,
   ex:`“O <b>peso</b> da mochila machucou meu ombro.” A mochila pesa de verdade → <b>denotação</b>.<br>“Ele carrega o <b>peso</b> da culpa.” Culpa não tem quilos → <b>conotação</b> (peso = sofrimento, preocupação).`},
  {n:`Troque por um sinônimo`,
   c:`Para descobrir qual sentido de uma palavra polissêmica foi usado, troque por um sinônimo que caiba naquele contexto. O sinônimo que encaixa revela o sentido.`,
   ex:`“O médico <b>receitou</b> repouso.” → “indicou” encaixa.<br>“Ela <b>tirou</b> 10 na prova.” → “obteve” encaixa; “arrancou” não.<br>“Ele <b>tirou</b> o casaco.” → “despiu” encaixa. Mesmo verbo, sentidos diferentes: <b>polissemia</b>.`},
  {n:`Desenhe as duas cenas`,
   c:`Para saber se uma frase é ambígua, tente imaginar (ou rabiscar) duas cenas diferentes para ela. Se conseguir, é ambígua. Depois, procure a palavra culpada: geralmente um pronome ou um termo mal posicionado.`,
   ex:`“Encontrei a vizinha com o cachorro <b>de chapéu</b>.” Cena 1: a vizinha de chapéu. Cena 2: o cachorro de chapéu → <b>ambígua</b>. Culpado: a posição de “de chapéu”. Correção: “Encontrei a vizinha, que estava de chapéu, com o cachorro.”`},
  {n:`A palavra-gancho dos parônimos e homônimos`,
   c:`Ligue cada palavra a uma “parente” fácil que dá a grafia certa.`,
   ex:`com<b>pri</b>mento ← com<b>pri</b>do (medida) · <b>cum</b>primento ← <b>cum</b>primentar (saudação).<br><b>ce</b>ssão ← <b>ce</b>der · con<b>s</b>erto ← con<b>s</b>ertar (reparo) · con<b>c</b>erto ← <b>c</b>oncertista (música).<br><b>i</b>minente ← <b>i</b>mediato (já vai acontecer) · <b>e</b>minente ← <b>e</b>levado (importante).<br>dis<b>cri</b>ção ← dis<b>cre</b>to · des<b>cri</b>ção ← des<b>cre</b>ver.`},
  {n:`Pergunte pelo gênero do texto`,
   c:`Quando a prova perguntar se a ambiguidade é falha ou recurso, olhe ONDE a frase está. Texto que quer informar com precisão → falha. Texto que quer divertir ou chamar atenção → recurso.`,
   ex:`Placa de rua: “Proibido estacionar carros de visitantes azuis.” → falha (o aviso precisa ser claro).<br>Anúncio de uma ótica: “Aqui, você vai ver o que é qualidade.” → recurso (“ver” = enxergar e “ver” = comprovar).`}
 ],
 passo: [
  `Leia a frase inteira (e o texto, se houver) antes de olhar a palavra destacada.`,
  `Pergunte: “é de verdade?” → literal (denotação) ou figurado (conotação).`,
  `Se a palavra tem vários sentidos, troque por um sinônimo que caiba no contexto.`,
  `Se a questão fala em duplo sentido, desenhe as duas cenas e ache a palavra culpada.`,
  `Decida pelo gênero: ambiguidade em texto informativo é falha; em humor ou propaganda, recurso.`
 ],
 exs: [
  {q:`Em qual frase a palavra “raiz” está em sentido <b>denotativo</b>? (a) Precisamos atacar a raiz do problema. (b) A raiz da mandioca é comestível. (c) Ele criou raízes naquela cidade. (d) Ela nunca esquece suas raízes nordestinas.`,
   s:[`Uso o teste do “é de verdade?” em cada uma.`,
      `(a) Problema não tem raiz de planta → figurado. (c) Pessoa não cria raízes no chão → figurado (= se fixou). (d) Raízes = origem → figurado.`,
      `(b) A mandioca é uma planta e tem raiz de verdade → literal.`],
   r:`(b) — denotação.`},
  {q:`Explique o duplo sentido do aviso de uma academia: “Venha <b>pegar pesado</b> com a gente!”.`,
   s:[`Desenho as duas cenas: na primeira, a pessoa levanta pesos de verdade; na segunda, “pegar pesado” significa “se esforçar muito”.`,
      `Os dois sentidos combinam com uma academia, então o duplo sentido é proposital.`,
      `Gênero: anúncio → ambiguidade como recurso para chamar atenção.`],
   r:`“Pegar pesado” = levantar pesos (literal) e se esforçar muito (figurado); a ambiguidade é recurso do anúncio.`},
  {q:`“O diretor conversou com o aluno <b>em sua sala</b>.” A frase é ambígua? Se for, reescreva deixando claro que a sala é do aluno (a sala de aula da turma dele).`,
   s:[`Desenho as cenas: “sua sala” pode ser a sala do diretor ou a sala do aluno. Duas cenas → ambígua.`,
      `Culpado: o possessivo “sua”, que serve para os dois.`,
      `Troco “sua” por algo que só sirva para o aluno. “Na sala dele” ainda confundiria (dele = do diretor?). Melhor reorganizar a frase e nomear o lugar.`],
   r:`Sim. Reescrita possível: “O diretor foi até a sala de aula do aluno e conversou com ele lá.”`}
 ],
 erros: [
  `<b>Errado:</b> responder pelo sentido mais comum da palavra, sem ler a frase. <b>Certo:</b> o contexto decide o sentido.`,
  `<b>Errado:</b> “O cumprimento da quadra é de 28 metros.” <b>Certo:</b> “O <b>comprimento</b>…” (de comprido). Cumprimento é saudação ou ato de cumprir.`,
  `<b>Errado:</b> “O tráfico na rodovia está intenso.” <b>Certo:</b> “O <b>tráfego</b>…” — tráfego é trânsito; tráfico é comércio ilegal.`,
  `<b>Errado:</b> achar que toda ambiguidade é erro. <b>Certo:</b> em tirinhas e anúncios ela costuma ser proposital (recurso).`
 ],
 resumo: [
  `DENOtação = Dicionário · CONOtação = COm imaginação.`,
  `“É de verdade?” sim = literal · não = figurado.`,
  `Polissemia = 1 palavra, vários sentidos (linha, pé, tirar).`,
  `Comprido → comprimento · cumprimentar → cumprimento · imediato → iminente.`,
  `Ambiguidade: desenhe 2 cenas · ache o culpado (pronome ou posição).`,
  `Falha em notícia/aviso · recurso em piada/anúncio.`
 ]
},

/* ======================================================================
   p-modal · Modalização e operadores argumentativos
   ====================================================================== */
'p-modal': {
 base: [
  [`O que é modalizar`, `Modalizar é deixar marcas, no texto, do que o autor PENSA sobre o que diz: se tem certeza, se duvida, se acha bom ou ruim, se é obrigatório. Compare: “A ponte <b>caiu</b>” (só informa) × “<b>Infelizmente</b>, a ponte caiu” (o autor lamenta) × “A ponte <b>talvez</b> caia” (o autor não tem certeza).`],
  [`O termômetro da certeza`, `<table class="tb"><tr><th>Grau</th><th>Palavras</th></tr>
<tr><td>Certeza total</td><td>certamente, sem dúvida, com certeza, evidentemente, é claro que, é fato que</td></tr>
<tr><td>Alta probabilidade</td><td>provavelmente, ao que tudo indica, é provável que</td></tr>
<tr><td>Possibilidade</td><td>talvez, possivelmente, pode ser que, é possível que</td></tr>
<tr><td>Obrigação/necessidade</td><td>é preciso, é necessário, deve-se, é obrigatório, tem de</td></tr></table>`],
  [`Avaliação: o autor dá nota`, `Advérbios e adjetivos também opinam: <b>felizmente</b>, <b>infelizmente</b>, <b>lamentavelmente</b>, <b>curiosamente</b>; “uma decisão <b>corajosa</b>” × “uma decisão <b>irresponsável</b>” (o mesmo fato, julgado de jeitos opostos). Se troca o adjetivo e muda a opinião, ele é modalizador de avaliação.`],
  [`O verbo “dever” e o “poder” têm duas caras`, `• “Você <b>deve</b> usar capacete” = obrigação.<br>• “<b>Deve</b> chover à tarde” = probabilidade (= provavelmente vai chover).<br>• “Você <b>pode</b> sair” = permissão.<br>• “<b>Pode</b> faltar luz” = possibilidade.<br>O contexto diz qual é.`],
  [`Futuro do pretérito e aspas: “não fui eu que disse”`, `Em notícias, o futuro do pretérito (“o prefeito <b>teria recebido</b> o dinheiro”) mostra que a informação <b>não está confirmada</b>: o jornal se protege. As <b>aspas</b> em uma palavra (o “especialista”) também podem indicar que o autor desconfia ou discorda do termo.`],
  [`Operadores argumentativos: as setas do texto`, `São palavras que orientam o leitor para uma conclusão:<br>• <b>até, inclusive, mesmo</b> → o argumento mais forte ou inesperado;<br>• <b>apenas, só, somente</b> → restrição (“é pouco”);<br>• <b>quase</b> → aproxima do limite (“falta pouco”);<br>• <b>ainda</b> → continuidade ou expectativa (“ainda não chegou” = esperava-se que chegasse);<br>• <b>já</b> → algo aconteceu antes do esperado;<br>• <b>aliás, além disso, também</b> → acréscimo;<br>• <b>ou seja, isto é</b> → explicação/reformulação;<br>• <b>afinal, enfim</b> → fechamento.`],
  [`O “mas” decide quem ganha`, `Num período com “mas”, o argumento que vale para a conclusão é o que vem <b>depois</b> dele. “O hotel é caro, <b>mas</b> é limpíssimo” → indica que vale a pena. “O hotel é limpíssimo, <b>mas</b> é caro” → indica que não vale. Mesmas informações, conclusões opostas.`]
 ],
 jeitos: [
  {n:`Tire a palavrinha e compare`,
   c:`Apague o modalizador ou operador e leia a frase sem ele. O que se perdeu é exatamente o papel dele: certeza, dúvida, opinião, surpresa, restrição.`,
   ex:`“<b>Só</b> três alunos fizeram a tarefa.” Sem “só”: “Três alunos fizeram a tarefa” (apenas informa). Com “só”: o autor acha POUCO → <b>restrição</b> (crítica).`},
  {n:`O mesmo número, duas setas`,
   c:`Operadores como “apenas” e “quase” podem apontar o MESMO fato para conclusões opostas. Pergunte: o autor quer que eu ache isso muito ou pouco?`,
   ex:`Fato: 48% dos alunos passaram.<br>“<b>Apenas</b> 48% dos alunos passaram.” → seta para baixo: o autor acha POUCO (crítica).<br>“<b>Quase</b> 50% dos alunos passaram.” → seta para cima: o autor destaca que chegou PERTO da metade (valoriza).`},
  {n:`O teste do “e, por incrível que pareça,”`,
   c:`Para conferir se “até”, “inclusive” ou “mesmo” marcam o argumento mais forte, troque por “e, por incrível que pareça,”. Se encaixa, é isso.`,
   ex:`“Todos ajudaram na mudança, <b>até</b> o caçula de quatro anos.” → “…e, por incrível que pareça, o caçula de quatro anos” → encaixa → “até” traz o caso <b>mais surpreendente</b>, reforçando que todos ajudaram mesmo.`},
  {n:`Termômetro da certeza (troca de grau)`,
   c:`Quando a questão pergunta se uma troca “mantém o sentido”, posicione as duas palavras no termômetro. Se estão em graus diferentes (talvez × certamente), o sentido muda.`,
   ex:`“<b>Possivelmente</b> a excursão será cancelada.” Trocar por “<b>Certamente</b>” → de possibilidade para certeza → <b>muda o sentido</b>.<br>Trocar por “<b>Talvez</b> a excursão seja cancelada” → mesmo grau → <b>mantém</b> (com o verbo no subjuntivo).`},
  {n:`O detetive do verbo de fala`,
   c:`Em notícia, olhe o verbo que introduz a fala ou o tempo verbal. Ele mostra se o jornalista acredita, duvida ou só registra.`,
   ex:`“O atleta <b>garantiu</b> que vai se recuperar” → fala com convicção.<br>“O atleta <b>alegou</b> que estava machucado” → disse sem provar.<br>“O atleta <b>teria se machucado</b> no treino” → informação não confirmada (futuro do pretérito).`}
 ],
 passo: [
  `Ache a palavra destacada e leia a frase sem ela: o que mudou?`,
  `Classifique: certeza, dúvida, obrigação, avaliação (modalizador) ou direção do argumento (operador)?`,
  `Se é troca de palavras, use o termômetro: as duas estão no mesmo grau?`,
  `Em notícia, observe verbos de fala (alegou, admitiu, revelou) e o futuro do pretérito (teria, seria).`,
  `Com “mas”, procure a conclusão do autor no que vem DEPOIS dele.`
 ],
 exs: [
  {q:`“<b>Lamentavelmente</b>, a biblioteca do bairro fechará às 17h a partir de segunda.” O que a palavra destacada revela?`,
   s:[`Tiro a palavra: “A biblioteca do bairro fechará às 17h…” → só informa.`,
      `Com “lamentavelmente”, aparece um sentimento do autor: ele acha a notícia ruim.`,
      `Isso é modalizador de avaliação (negativa), e não de dúvida ou de tempo.`],
   r:`Avaliação negativa do autor (ele lamenta a mudança).`},
  {q:`Compare: (I) “O celular é leve, mas a bateria dura pouco.” (II) “A bateria dura pouco, mas o celular é leve.” Em qual delas o autor tende a recomendar o celular?`,
   s:[`Uso a regra do “mas”: o argumento que vale é o que vem DEPOIS dele.`,
      `Em (I), depois do “mas” vem um defeito (bateria dura pouco) → o autor tende a não recomendar.`,
      `Em (II), depois do “mas” vem uma qualidade (é leve) → o autor tende a recomendar.`],
   r:`Em (II).`},
  {q:`Numa notícia: “Segundo testemunhas, o motorista <b>estaria</b> acima da velocidade permitida.” Por que o jornal usou “estaria”, e não “estava”?`,
   s:[`Primeiro eu identifico o tempo verbal: “estaria” é futuro do pretérito.`,
      `Em notícias, esse tempo indica que a informação não foi confirmada; o jornal apenas reproduz o que dizem as testemunhas (“segundo testemunhas” reforça isso).`,
      `Se usasse “estava”, o jornal afirmaria o fato como certo e assumiria a responsabilidade por ele.`],
   r:`Para mostrar que a informação não está confirmada: o jornal não assume a acusação como verdade.`}
 ],
 erros: [
  `<b>Errado:</b> achar que “provavelmente” e “certamente” são sinônimos. <b>Certo:</b> estão em graus diferentes do termômetro (probabilidade × certeza).`,
  `<b>Errado:</b> ler todo “até” como limite (“até as 5h”). <b>Certo:</b> em “até o diretor veio”, ele marca o caso mais surpreendente (= inclusive).`,
  `<b>Errado:</b> ler todo “deve” como obrigação. <b>Certo:</b> “Deve chover hoje” = provavelmente vai chover (probabilidade).`,
  `<b>Errado:</b> tratar “alegou”, “admitiu” e “afirmou” como iguais. <b>Certo:</b> alegou = sem prova; admitiu = reconheceu algo negativo; afirmou = neutro.`
 ],
 resumo: [
  `Termômetro: certamente > provavelmente > talvez.`,
  `Até/inclusive = argumento mais forte · só/apenas = é pouco.`,
  `Com “mas”, vale o que vem DEPOIS.`,
  `“Teria/seria” em notícia = não confirmado.`,
  `Alegou = sem prova · admitiu = reconheceu algo ruim.`,
  `Tire a palavra e compare: o que sumiu é o papel dela.`
 ]
}

};
