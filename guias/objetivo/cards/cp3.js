/* Flashcards — Módulo P3: Gramática a serviço do texto */
const CARDS_P3 = [
/* p-per — Período composto (12) */
 {t:'p-per', k:'conceito', f:`Período simples × período composto: qual a diferença?`, b:`<b>Simples tem uma oração (um verbo); composto tem duas ou mais.</b><br>“Choveu.” é simples; “Choveu e esfriou.” é composto.`},
 {t:'p-per', k:'regra', f:`Como descobrir quantas orações há num período?`, b:`<b>Conte os verbos: cada verbo ou locução verbal = uma oração.</b><br>“Vou estudar” é locução verbal: conta como uma só.`},
 {t:'p-per', k:'conceito', f:`Oração coordenada × oração subordinada?`, b:`<b>Coordenada é independente; subordinada depende da oração principal.</b><br>Macete: coordenada anda sozinha; SUBordinada é SUBmissa.`},
 {t:'p-per', k:'conceito', f:`Coordenada assindética × coordenada sindética?`, b:`<b>Assindética: sem conjunção (só vírgula). Sindética: com conjunção.</b><br>“Acordei, tomei café, saí.” (assindéticas) · “Acordei <b>e saí</b>.” (a destacada é sindética aditiva)`},
 {t:'p-per', k:'exemplo', f:`“Treinou muito, <b>mas perdeu o jogo</b>.” Como se classifica a oração destacada?`, b:`<b>Coordenada sindética adversativa.</b><br>“Mas” indica oposição, e as duas orações são independentes.`},
 {t:'p-per', k:'exemplo', f:`“Revisei a matéria, <b>portanto estou tranquilo</b>.” Como se classifica a oração destacada?`, b:`<b>Coordenada sindética conclusiva.</b><br>“Portanto” (como “logo” e “por isso”) introduz uma conclusão.`},
 {t:'p-per', k:'regra', f:`Quais são os três tipos de oração subordinada?`, b:`<b>Substantiva, adjetiva e adverbial.</b><br>Substantiva funciona como substantivo; adjetiva caracteriza um nome; adverbial dá uma circunstância (tempo, causa, condição…).`},
 {t:'p-per', k:'exemplo', f:`“É importante <b>que você estude</b>.” A oração destacada é subordinada de que tipo?`, b:`<b>Subordinada substantiva.</b><br>Ela funciona como sujeito de “é importante” (isto é importante).`},
 {t:'p-per', k:'exemplo', f:`“<b>Ora</b> chove, <b>ora</b> faz sol.” Como se classificam essas orações?`, b:`<b>Coordenadas sindéticas alternativas.</b><br>“Ora… ora” (como “ou… ou”) indica fatos que se alternam.`},
 {t:'p-per', k:'exemplo', f:`“<b>Se chover</b>, o passeio será adiado.” Que circunstância a oração destacada indica?`, b:`<b>Condição (subordinada adverbial condicional).</b><br>O adiamento depende de chover.`},
 {t:'p-per', k:'conceito', f:`O que é uma oração reduzida?`, b:`<b>Oração sem conjunção, com verbo no infinitivo, gerúndio ou particípio.</b><br>“Ao chegar, liguei.” = “Quando cheguei, liguei.”`},
 {t:'p-per', k:'pegadinha', f:`Toda oração iniciada por “que” é adjetiva?`, b:`<b>Não!</b> Só é adjetiva se “que” for pronome relativo (dá para trocar por “o qual”). Em “Espero que você venha”, a oração é substantiva.`},

/* p-adj — Orações adjetivas (12) */
 {t:'p-adj', k:'conceito', f:`Com que tipo de palavra começa uma oração adjetiva?`, b:`<b>Com um pronome relativo</b> (que, o qual, onde, cujo…).<br>Ela caracteriza um nome: “O livro <b>que comprei</b> é ótimo.”`},
 {t:'p-adj', k:'conceito', f:`Por que a oração adjetiva tem esse nome?`, b:`<b>Porque funciona como um adjetivo: caracteriza um substantivo.</b><br>“Aluno <b>que estuda</b>” = “aluno <b>estudioso</b>”.`},
 {t:'p-adj', k:'regra', f:`Oração adjetiva restritiva: com ou sem vírgula? O que ela faz?`, b:`<b>Sem vírgula. Restringe: separa só uma parte do grupo.</b><br>Macete: sem vírgula = só ALGUNS.`},
 {t:'p-adj', k:'regra', f:`Oração adjetiva explicativa: com ou sem vírgula? O que ela faz?`, b:`<b>Entre vírgulas. Acrescenta informação sobre todo o grupo</b> e pode ser retirada.<br>Macete: com vírgula = vale para TODOS.`},
 {t:'p-adj', k:'exemplo', f:`“Os alunos que estudaram passaram.” Todos os alunos passaram?`, b:`<b>Não. Só os que estudaram passaram.</b><br>Oração restritiva (sem vírgula): separa um grupo dentro da turma.`},
 {t:'p-adj', k:'exemplo', f:`“Os convidados, que chegaram cedo, ganharam um brinde.” Quantos convidados chegaram cedo?`, b:`<b>Todos.</b><br>Oração explicativa (entre vírgulas): a informação vale para todos os convidados, e todos ganharam o brinde.`},
 {t:'p-adj', k:'exemplo', f:`“Meu irmão que mora em Recife vem me visitar.” O que se pode deduzir da falta de vírgulas?`, b:`<b>Que a pessoa tem mais de um irmão.</b><br>A restritiva separa este irmão dos outros.`},
 {t:'p-adj', k:'exemplo', f:`“Os gatos, que são independentes, dormem muito.” O que as vírgulas fazem a frase afirmar?`, b:`<b>Que todos os gatos são independentes.</b><br>A explicativa atribui a característica ao grupo inteiro; sem vírgulas, falaria só dos gatos independentes.`},
 {t:'p-adj', k:'pegadinha', f:`“O Sol que é uma estrela ilumina a Terra.” A pontuação está correta?`, b:`<b>Não!</b> Correto: “O Sol, que é uma estrela, ilumina a Terra.”<br>Só existe um Sol: com nome único, a oração é explicativa.`},
 {t:'p-adj', k:'pegadinha', f:`“O Sol, que é uma estrela ilumina a Terra.” O que está errado?`, b:`<b>Falta a segunda vírgula</b> (depois de “estrela”).<br>A oração explicativa fica <b>entre</b> vírgulas: abre e fecha.`},
 {t:'p-adj', k:'exemplo', f:`“A professora, <b>que é muito paciente</b>, explicou de novo.” A oração destacada é restritiva ou explicativa?`, b:`<b>Explicativa.</b><br>Está entre vírgulas e só acrescenta uma informação sobre a professora: pode ser retirada.`},
 {t:'p-adj', k:'regra', f:`Que expressão pode substituir o “que” para confirmar que ele é pronome relativo?`, b:`<b>“O qual” (a qual, os quais, as quais).</b><br>“O aluno <b>que</b> faltou” = “o aluno <b>o qual</b> faltou”. Se a troca funciona, a oração é adjetiva.`},

/* p-vl — Verbos de ligação e predicativo (8) */
 {t:'p-vl', k:'conceito', f:`O que é um verbo de ligação?`, b:`<b>Verbo que não indica ação: liga o sujeito a um estado ou qualidade.</b><br>“Pedro <b>é</b> calmo.”`},
 {t:'p-vl', k:'conceito', f:`Em “O dia está lindo”, qual é o predicativo do sujeito?`, b:`<b>“Lindo”.</b><br>É a característica atribuída ao sujeito (“o dia”) por meio do verbo de ligação “está”.`},
 {t:'p-vl', k:'regra', f:`Cite os principais verbos de ligação.`, b:`<b>Ser, estar, parecer, permanecer, ficar, continuar, andar, virar</b> (e tornar-se).<br>Teste: depois dele vem uma característica do sujeito?`},
 {t:'p-vl', k:'exemplo', f:`“Pedro é nervoso” × “Pedro está nervoso”: qual a diferença de sentido?`, b:`<b>“É” = característica permanente; “está” = estado passageiro.</b><br>Ser = essência; estar = momento.`},
 {t:'p-vl', k:'exemplo', f:`“O céu ficou escuro.” Que sentido o verbo de ligação expressa?`, b:`<b>Mudança de estado.</b><br>O céu não era escuro e passou a ser.`},
 {t:'p-vl', k:'exemplo', f:`“Ana parece cansada.” Que sentido o verbo de ligação expressa?`, b:`<b>Aparência.</b><br>Ana dá a impressão de estar cansada, sem certeza de que está.`},
 {t:'p-vl', k:'pegadinha', f:`“Ele ficou em casa.” O verbo “ficar” é de ligação?`, b:`<b>Não!</b> “Em casa” é lugar, não característica do sujeito. Em “Ele ficou triste”, aí sim é de ligação.`},
 {t:'p-vl', k:'pegadinha', f:`“Ana anda preocupada” × “Ana anda pela praça”: em qual “andar” é verbo de ligação?`, b:`<b>Em “Ana anda preocupada”.</b><br>Indica estado frequente. Em “anda pela praça”, é a ação de andar.`},

/* p-reg — Regência e crase (8) */
 {t:'p-reg', k:'regra', f:`Na norma-padrão, “assistir” no sentido de “ver” pede qual preposição?`, b:`<b>A preposição “a”.</b><br>“Assisti <b>ao</b> jogo.” (Na fala: “assisti o jogo”.)`},
 {t:'p-reg', k:'pegadinha', f:`“Prefiro mais pizza do que lasanha.” Está de acordo com a norma-padrão?`, b:`<b>Não!</b> Correto: “Prefiro pizza <b>a</b> lasanha.”<br>Preferir algo A outra coisa, sem “mais” e sem “do que”.`},
 {t:'p-reg', k:'pegadinha', f:`“Cheguei na escola cedo.” Como fica na norma-padrão?`, b:`<b>“Cheguei à escola cedo.”</b><br>Chegar e ir pedem a preposição “a”, não “em”.`},
 {t:'p-reg', k:'conceito', f:`O que é a crase?`, b:`<b>A fusão da preposição “a” com o artigo “a”, marcada pelo acento grave: à.</b><br>Vou a + a feira → vou <b>à</b> feira.`},
 {t:'p-reg', k:'exemplo', f:`Complete com “a” ou “à”: “Vou ___ feira.” Qual o truque para conferir?`, b:`<b>“Vou à feira.”</b><br>Truque: troque por uma palavra masculina. “Vou <b>ao</b> mercado” → deu “ao”, então tem crase.`},
 {t:'p-reg', k:'pegadinha', f:`“Começou à chover.” A crase está correta?`, b:`<b>Não!</b> Correto: “Começou a chover.”<br>Nunca há crase antes de verbo (nem antes de palavra masculina).`},
 {t:'p-reg', k:'exemplo', f:`Complete: “A aula começa ___ 10h.”`, b:`<b>“às 10h”.</b><br>Hora exata leva crase. Mas: “desde as 10h”, “após as 10h”.`},
 {t:'p-reg', k:'exemplo', f:`Complete: “Vou ___ Bahia” e “Vou ___ Recife”.`, b:`<b>“Vou à Bahia” e “Vou a Recife”.</b><br>Macete: volto DA Bahia (crase há!); volto DE Recife (crase pra quê?).`},

/* p-conc — Concordância (8) */
 {t:'p-conc', k:'conceito', f:`Concordância verbal × concordância nominal?`, b:`<b>Verbal: o verbo concorda com o sujeito. Nominal: o adjetivo concorda com o substantivo.</b><br>“Os alunos <b>chegaram</b>.” · “Casas <b>antigas</b>.”`},
 {t:'p-conc', k:'regra', f:`“Haver” no sentido de “existir” vai para o plural?`, b:`<b>Não: é impessoal, fica no singular.</b><br>“<b>Havia</b> muitos alunos no pátio.” (nunca “haviam”)`},
 {t:'p-conc', k:'exemplo', f:`“Existia muitas pessoas na fila” ou “Existiam muitas pessoas na fila”?`, b:`<b>“Existiam”.</b><br>Diferente de “haver”, “existir” concorda com o sujeito “muitas pessoas”.`},
 {t:'p-conc', k:'regra', f:`“Faz dois anos” ou “Fazem dois anos”?`, b:`<b>“Faz dois anos.”</b><br>“Fazer” indicando tempo decorrido é impessoal: fica no singular.`},
 {t:'p-conc', k:'exemplo', f:`Complete: “______ três dias para as férias.” (Falta / Faltam)`, b:`<b>“Faltam”.</b><br>O sujeito é “três dias” (plural), mesmo vindo depois do verbo.`},
 {t:'p-conc', k:'pegadinha', f:`“Ela ficou meia preocupada.” Está na norma-padrão?`, b:`<b>Não!</b> Correto: “meio preocupada”.<br>“Meio” = um pouco (advérbio) não varia. Varia como numeral: “meia hora”.`},
 {t:'p-conc', k:'pegadinha', f:`Uma menina agradece um presente. Ela deve dizer “obrigado” ou “obrigada”?`, b:`<b>“Obrigada”.</b><br>A palavra concorda com quem fala: mulher diz “obrigada”; homem, “obrigado”.`},
 {t:'p-conc', k:'exemplo', f:`Complete: “Seguem ______ as fotos.” (anexo / anexas)`, b:`<b>“anexas”.</b><br>“Anexo” é adjetivo e concorda com o substantivo: fotos anexas.`},

/* p-col — Colocação pronominal (8) */
 {t:'p-col', k:'conceito', f:`Próclise, ênclise e mesóclise: onde fica o pronome em cada uma?`, b:`<b>Próclise: antes do verbo. Ênclise: depois (com hífen). Mesóclise: no meio.</b><br>“Não <b>me</b> deixe.” · “Diga-<b>me</b>.” · “Dir-<b>te</b>-ei.”`},
 {t:'p-col', k:'regra', f:`Na norma-padrão, pode-se começar uma frase com pronome oblíquo (me, te, se…)?`, b:`<b>Não: no início da frase, usa-se ênclise.</b><br>“Empreste-<b>me</b> o lápis.” (Na fala: “Me empresta o lápis”.)`},
 {t:'p-col', k:'regra', f:`Que palavras “atraem” o pronome para antes do verbo?`, b:`<b>Negativas, advérbios, pronomes relativos, indefinidos e conjunções subordinativas.</b><br>Ex.: não, nunca, ninguém, sempre, já, que, alguém, quando, se.`},
 {t:'p-col', k:'pegadinha', f:`“Não deixe-me sozinho.” Está na norma-padrão?`, b:`<b>Não!</b> Correto: “Não <b>me</b> deixe sozinho.”<br>O “não” atrai o pronome para antes do verbo.`},
 {t:'p-col', k:'pegadinha', f:`“Quando vi-te, sorri.” Está na norma-padrão?`, b:`<b>Não!</b> Correto: “Quando <b>te</b> vi, sorri.”<br>A conjunção “quando” atrai o pronome (próclise).`},
 {t:'p-col', k:'exemplo', f:`Ponha o pronome “me” na norma-padrão: “Ninguém avisou.”`, b:`<b>“Ninguém me avisou.”</b><br>“Ninguém” é palavra negativa: atrai o pronome.`},
 {t:'p-col', k:'exemplo', f:`“Dir-te-ei a verdade.” Que colocação pronominal é essa?`, b:`<b>Mesóclise.</b><br>O pronome fica no meio do verbo no futuro (direi). É rara e muito formal.`},
 {t:'p-col', k:'conceito', f:`Numa conversa entre amigos, “Me passa o sal?” é adequado?`, b:`<b>Sim: a próclise é natural no português brasileiro falado e informal.</b><br>Num texto formal, a norma-padrão pede “Passe-me o sal”.`},

/* p-pont — Pontuação (8) */
 {t:'p-pont', k:'regra', f:`Pode-se separar o sujeito do verbo com vírgula?`, b:`<b>Nunca.</b> Nem o verbo do complemento.<br>Errado: “Os alunos do 9º ano, viajaram.” Macete: sujeito e verbo são namorados. (Um aposto entre duas vírgulas pode ficar no meio.)`},
 {t:'p-pont', k:'exemplo', f:`“Pedro, venha cá.” O que a vírgula separa?`, b:`<b>O vocativo</b> (“Pedro”, a pessoa com quem se fala).<br>O vocativo sempre leva vírgula.`},
 {t:'p-pont', k:'exemplo', f:`“Belém, capital do Pará, recebe muitos turistas.” O que fica entre as vírgulas?`, b:`<b>Um aposto.</b><br>Ele explica quem é o termo anterior (Belém).`},
 {t:'p-pont', k:'pegadinha', f:`“Não, espere!” × “Não espere!”: a vírgula muda o sentido?`, b:`<b>Sim! Inverte o sentido.</b><br>“Não, espere!” pede que a pessoa espere; “Não espere!” pede que ela não espere.`},
 {t:'p-pont', k:'exemplo', f:`“Bem… acho que não vou à festa.” O que as reticências indicam?`, b:`<b>Hesitação.</b><br>As reticências também podem indicar suspense, ideia interrompida ou ironia.`},
 {t:'p-pont', k:'conceito', f:`Para que servem os dois-pontos (:)?`, b:`<b>Para anunciar uma explicação, uma enumeração ou uma fala.</b><br>“Comprei três frutas: maçã, pera e uva.”`},
 {t:'p-pont', k:'exemplo', f:`“Que dia ‘ótimo’: choveu e perdi o ônibus.” Que efeito as aspas criam em “ótimo”?`, b:`<b>Ironia.</b><br>A palavra é usada no sentido contrário: o dia foi ruim.`},
 {t:'p-pont', k:'regra', f:`“Ontem à noite, fomos ao cinema.” Por que há vírgula depois de “noite”?`, b:`<b>Porque a expressão de tempo foi deslocada para o início da frase.</b><br>Ordem direta: “Fomos ao cinema ontem à noite.”`},

/* p-var — Variação linguística (8) */
 {t:'p-var', k:'regra', f:`Quais são os quatro tipos de variação linguística?`, b:`<b>Regional, social (ou etária), situacional e histórica.</b><br>O critério não é certo × errado, e sim adequado × inadequado.`},
 {t:'p-var', k:'exemplo', f:`“Bergamota”, “mexerica” e “tangerina” nomeiam a mesma fruta. Que tipo de variação é essa?`, b:`<b>Variação regional.</b><br>Cada região do país usa um nome.`},
 {t:'p-var', k:'exemplo', f:`“Vossa mercê” → “vosmecê” → “você” → “cê”. Que tipo de variação é essa?`, b:`<b>Variação histórica.</b><br>A língua muda com o passar do tempo.`},
 {t:'p-var', k:'exemplo', f:`Gírias como “mano” e “rolê”, comuns entre adolescentes, são marcas de que tipo de variação?`, b:`<b>Variação social (etária).</b><br>Revelam o grupo e a idade de quem fala.`},
 {t:'p-var', k:'exemplo', f:`Lucas diz “E aí, beleza?” ao amigo e “Bom dia, como vai o senhor?” ao diretor. Que variação é essa?`, b:`<b>Variação situacional</b> (informal × formal).<br>A mesma pessoa adapta a fala à situação e ao interlocutor.`},
 {t:'p-var', k:'conceito', f:`O que é a norma-padrão?`, b:`<b>O modelo de língua usado em situações formais</b> (documentos, provas, notícias).<br>Saber usá-la é importante, mas isso não torna as outras variedades “erradas”.`},
 {t:'p-var', k:'conceito', f:`O que é preconceito linguístico?`, b:`<b>Discriminar alguém pelo jeito de falar</b> (sotaque, origem, escolaridade).<br>Ex.: rir do sotaque de um colega de outro estado.`},
 {t:'p-var', k:'pegadinha', f:`Uma conversa informal entre amigos, cheia de gírias, está “errada”?`, b:`<b>Não!</b> Está adequada à situação.<br>Macete: língua é como roupa: chinelo na praia, terno no casamento.`},

/* p-form — Formação de palavras, estrangeirismos e acentuação (6) */
 {t:'p-form', k:'exemplo', f:`Como se forma a palavra “entardecer”?`, b:`<b>Derivação parassintética.</b><br>Prefixo “en-” e sufixo “-ecer” entram juntos: não existe “entarde” nem “tardecer”.`},
 {t:'p-form', k:'pegadinha', f:`“Infelizmente” é formada por derivação parassintética?`, b:`<b>Não!</b> Existem “infeliz” e “felizmente” sozinhas: prefixo e sufixo não entraram ao mesmo tempo (derivação prefixal e sufixal).`},
 {t:'p-form', k:'exemplo', f:`“Planalto” (plano + alto): que processo de formação é esse?`, b:`<b>Composição por aglutinação.</b><br>As palavras se juntam e uma perde parte do som (o “o” de plano). Em “girassol”, nada se perde: justaposição.`},
 {t:'p-form', k:'conceito', f:`Estrangeirismo adaptado × não adaptado: dê um exemplo de cada.`, b:`<b>Adaptado: futebol (de “football”). Não adaptado: delivery.</b><br>O adaptado ganhou grafia portuguesa; o outro mantém a original.`},
 {t:'p-form', k:'regra', f:`Quais proparoxítonas são acentuadas?`, b:`<b>Todas.</b><br>Ex.: lâmpada, matemática, música.`},
 {t:'p-form', k:'pegadinha', f:`“Idéia”, “heróico” e “vôo” estão corretas pelo Acordo Ortográfico em vigor?`, b:`<b>Não!</b> Escreve-se <b>ideia, heroico, voo</b>, sem acento.`}
];
