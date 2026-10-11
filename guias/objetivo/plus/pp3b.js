const PLUS_P3B = {
 'p-conc': {
  base: [
   [`O que é sujeito`, `É o termo de quem se fala, aquele com quem o verbo “combina”. Para achá-lo, pergunte <b>quem?</b> ou <b>o quê?</b> ao verbo: “As luzes apagaram.” → O que apagou? <b>as luzes</b> (plural) → verbo no plural.`],
   [`Sujeito posposto (depois do verbo)`, `O sujeito nem sempre vem antes. “Ainda <b>restam</b> duas fatias de bolo.” → O que resta? <b>duas fatias</b>. Ponha na ordem direta (“duas fatias restam”) e o plural fica óbvio.`],
   [`Verbo impessoal = oração sem sujeito`, `Alguns verbos não têm sujeito nenhum. Sem sujeito, não há com quem concordar: o verbo fica na <b>3ª pessoa do singular</b>. Os dois mais cobrados: <b>haver</b> (= existir) e <b>fazer</b> (= tempo que passou).`],
   [`Haver = existir / acontecer`, `“<b>Houve</b> duas brigas no jogo.” “<b>Havia</b> cinco pessoas na sala.” O que vem depois (“duas brigas”) é <b>objeto</b>, não sujeito. Já o verbo <b>existir</b> é comum e concorda: “<b>Existiam</b> cinco pessoas.”`],
   [`Fazer indicando tempo decorrido`, `“<b>Faz</b> três semanas que choveu.” “<b>Fazia</b> dez anos que não se viam.” Sempre singular, em qualquer tempo verbal.`],
   [`“A maioria de”, “grande parte de”`, `Com coletivo partitivo + plural, a norma aceita os dois: “A maioria dos jogadores <b>treinou</b>” (concorda com “maioria”) ou “<b>treinaram</b>” (concorda com “jogadores”). Na prova, as duas formas estão certas.`],
   [`Sujeito composto`, `Dois ou mais núcleos <b>antes</b> do verbo → plural: “O diretor e a coordenadora <b>chegaram</b>.” Se um dos núcleos é “eu”, vai para a 1ª do plural: “Eu e minha irmã <b>viajamos</b>.”`],
   [`Concordância nominal: palavras que mudam`, `Adjetivo combina com o substantivo em gênero e número: “<b>anexo</b>” e “<b>incluso</b>” variam (“a nota anexa”, “os documentos inclusos”); “<b>bastante</b>” varia quando significa “muitos” (“bastantes livros”).`],
   [`Palavras que NÃO mudam (advérbios)`, `Advérbio não tem plural nem feminino. “<b>Meio</b>” = um pouco: “Elas estavam <b>meio</b> cansadas.” “<b>Bastante</b>” = muito, ao lado de adjetivo: “Elas estavam <b>bastante</b> cansadas.” “<b>Em anexo</b>” também não varia: “Seguem em anexo as notas.”`]
  ],
  jeitos: [
   {n:`Ordem direta`, c:`Sempre que o verbo vier primeiro, reescreva a frase começando pelo sujeito. Se soar estranho no singular, é plural.`,
    ex:`“______ (Chegou/Chegaram) as encomendas.” → “As encomendas chegaram” → <b>Chegaram</b>.<br>“Ainda ______ (sobra/sobram) duas cadeiras.” → “Duas cadeiras sobram” → <b>sobram</b>.`},
   {n:`Teste do “existir”`, c:`Troque “haver” por “existir”. Se a troca faz sentido, “haver” é impessoal e fica no singular — mas “existir” vai para o plural.`,
    ex:`“______ muitos erros na prova.” → dá para dizer “existiam muitos erros”? Sim → com haver: <b>Havia</b> muitos erros.<br>Com locução: “Pode ______ atrasos.” → <b>Pode haver</b> atrasos (o auxiliar também fica no singular). Com existir: “Podem existir atrasos.”`},
   {n:`Teste do “já se passaram”`, c:`Se “fazer” pode ser trocado por “já se passaram / já se passou”, ele indica tempo decorrido: singular.`,
    ex:`“______ cinco anos que me mudei.” → “Já se passaram cinco anos…” → <b>Faz</b> cinco anos.<br>“______ duas horas que espero.” → <b>Faz</b> duas horas.`},
   {n:`Troca por “um pouco” ou “muito”`, c:`Para “meio”: se cabe “um pouco”, não varia; se cabe “metade”, varia. Para “bastante”: troque por “muito”; se precisar virar “muitos/muitas”, use “bastantes”.`,
    ex:`“Ela comeu ______ pizza.” → metade da pizza → <b>meia</b>.<br>“Eles são ______ simpáticos.” → muito simpáticos → <b>bastante</b>.<br>“Há ______ motivos.” → muitos motivos → <b>bastantes</b>.`},
   {n:`Teste do artigo (é proibido / é proibida)`, c:`Olhe o substantivo: se ele tem artigo (a, o, as, os) ou outra palavra que o determine, a expressão concorda; sem artigo, fica “proibido”, “necessário”, “bom” no masculino singular.`,
    ex:`“É ______ entrada de animais.” (sem artigo) → <b>proibido</b>.<br>“É ______ a entrada de animais.” (com “a”) → <b>proibida</b>.<br>“Água é ______.” → <b>bom</b>. “A água está ______.” → <b>boa</b>.`},
   {n:`“Anexo” é como “junto”`, c:`“Anexo” funciona como um adjetivo: combina com o que vem anexado. Já “em anexo” é expressão fixa e não muda.`,
    ex:`“Seguem ______ as listas.” → as listas → <b>anexas</b>.<br>“Envio ______ o boletim.” → o boletim → <b>anexo</b> (ou “em anexo”).`}
  ],
  passo: [
   `Ache o verbo da lacuna ou da frase.`,
   `Pergunte <b>quem? / o quê?</b> ao verbo e reescreva em ordem direta para achar o sujeito.`,
   `Se o verbo for <b>haver</b> (= existir) ou <b>fazer</b> (= tempo), esqueça o “sujeito”: fica no singular, inclusive o auxiliar da locução.`,
   `Na concordância nominal, descubra se a palavra é adjetivo (varia) ou advérbio (não varia) com as trocas “um pouco/metade” e “muito/muitos”.`,
   `Releia a frase inteira com a forma escolhida: o som tem que “bater” com o sujeito.`
  ],
  exs: [
   {q:`Complete conforme a norma-padrão: “Para terminar o projeto, ainda ______ (resta/restam) duas etapas.”`,
    s:[`Primeiro eu acho o verbo: “restar”.`, `Pergunto: o que resta? → “duas etapas”. É o sujeito, só que está depois do verbo.`, `Ordem direta: “duas etapas restam”. Plural.`],
    r:`<b>restam</b>`},
   {q:`Qual frase segue a norma-padrão? (A) “Devem haver vagas no turno da tarde.” (B) “Deve haver vagas no turno da tarde.”`,
    s:[`Uso o teste do “existir”: “devem existir vagas” faz sentido → “haver” aqui é impessoal.`, `Verbo impessoal não tem sujeito; na locução, o auxiliar (“dever”) acompanha o principal e também fica no singular.`, `Conferência: com “existir” seria “Devem existir vagas” (aí sim plural, porque “vagas” é sujeito de existir).`],
    r:`<b>(B) Deve haver vagas</b>`},
   {q:`Analise as frases: I. “Os atletas ficaram bastante cansados.” II. “Seguem em anexo as fotos da feira.” III. “É proibida a entrada de bicicletas.” IV. “Ela comprou bastante canetas.” Quais estão de acordo com a norma-padrão?`,
    s:[`I: troco “bastante” por “muito”: “muito cansados” → não precisa virar “muitos” → advérbio, não varia. Certa.`, `II: “em anexo” é expressão fixa, não varia. Certa.`, `III: “entrada” tem o artigo “a” → “proibida” concorda. Certa.`, `IV: troco por “muito”: “muitas canetas” → precisa de plural → deveria ser “bastantes canetas”. Errada.`],
    r:`<b>I, II e III</b>`}
  ],
  erros: [
   `<b>Errado:</b> “Haviam muitas pessoas na festa.” <b>Certo:</b> “Havia muitas pessoas na festa.” (haver = existir é impessoal)`,
   `<b>Errado:</b> achar que “Os alunos haviam saído” está errado. <b>Certo:</b> está certo! Aqui “haver” é auxiliar (= tinham saído) e concorda com o sujeito “os alunos”.`,
   `<b>Errado:</b> “Vão fazer dois anos que mudamos.” <b>Certo:</b> “Vai fazer dois anos que mudamos.” (o auxiliar de “fazer” impessoal fica no singular)`,
   `<b>Errado:</b> “Falta só três exercícios.” <b>Certo:</b> “Faltam só três exercícios.” (sujeito depois do verbo também manda)`,
   `<b>Errado:</b> “Elas estavam meias nervosas.” <b>Certo:</b> “Elas estavam meio nervosas.” (meio = um pouco, advérbio)`
  ],
  resumo: [
   `Verbo × sujeito: pergunte “quem?” e ponha em ordem direta.`,
   `Haver (= existir) e fazer (= tempo) → singular, até na locução (“deve haver”).`,
   `Existir, faltar, sobrar, restar → concordam com o sujeito.`,
   `“A maioria dos alunos” → verbo no singular ou no plural.`,
   `Meio = um pouco → não varia · bastante = muitos → varia · anexo varia, “em anexo” não.`,
   `É proibido entrada · É proibida <b>a</b> entrada.`
  ]
 },

 'p-col': {
  base: [
   [`O que é pronome oblíquo átono`, `São as palavrinhas que ficam “grudadas” no verbo: <b>me, te, se, o, a, lhe, nos, vos, os, as, lhes</b>. “Ela <b>me</b> ligou.” → o “me” completa o verbo “ligou”.`],
   [`Os três lugares possíveis`, `Antes do verbo = <b>próclise</b> (pró = antes). Depois, com hífen = <b>ênclise</b>. No meio do verbo = <b>mesóclise</b> (meso = meio). “Não <b>se</b> mexa.” · “Mexa-<b>se</b>.” · “Mexer-<b>se</b>-á.”`],
   [`Norma-padrão × fala do dia a dia`, `No Brasil, falamos “Me empresta?”. Na fala informal, isso é natural. A prova pede a <b>norma-padrão</b>, usada em textos formais: aí valem as regras abaixo.`],
   [`Regra 1: início de frase → ênclise`, `Na norma-padrão, frase não começa com pronome oblíquo. “<b>Te</b> vejo amanhã.” → “Vejo-<b>te</b> amanhã.” · “<b>Me</b> explique.” → “Explique-<b>me</b>.”`],
   [`Regra 2: palavra atrativa → próclise`, `Algumas palavras “puxam” o pronome para antes do verbo. Ganham da ênclise sempre. “Ninguém <b>se</b> machucou.” “Já <b>lhe</b> respondi.”`],
   [`Lista das atrativas`, `<b>Negativas:</b> não, nunca, jamais, nem, ninguém, nada. <b>Advérbios:</b> sempre, já, ainda, aqui, talvez, também. <b>Pronomes relativos e interrogativos:</b> que, quem, onde, qual. <b>Indefinidos:</b> alguém, tudo, todos, algo. <b>Conjunções subordinativas:</b> quando, se, porque, embora, que.`],
   [`Futuro: só reconhecer a mesóclise`, `Com verbo no futuro do presente (farei) ou do pretérito (faria) no início da frase, sem palavra atrativa, a norma-padrão usa mesóclise: “Contar-<b>te</b>-ei”, “Far-<b>se</b>-ia”. Nunca “contarei-te”. Com atrativa, volta a próclise: “Não <b>te</b> contarei.” Você só precisa reconhecer.`]
  ],
  jeitos: [
   {n:`Caça ao ímã`, c:`Antes de tudo, olhe a palavra que vem logo antes do verbo. Se for negativa, advérbio, “que/quem”, indefinido ou conjunção como “quando/se”, o pronome vai para ANTES do verbo.`,
    ex:`“Talvez ______ (o encontre / encontre-o) na festa.” → “talvez” é advérbio → <b>Talvez o encontre</b>.<br>“O livro que ______ (me deram / deram-me) é ótimo.” → “que” atrai → <b>que me deram</b>.`},
   {n:`Teste da largada`, c:`O pronome está na primeira posição da frase (ou logo depois de ponto)? Na norma-padrão, isso não pode: mande-o para depois do verbo com hífen.`,
    ex:`“Me chamaram para a festa.” → <b>Chamaram-me para a festa.</b><br>“Se aproximou devagar.” → <b>Aproximou-se devagar.</b>`},
   {n:`Ímã ganha da largada`, c:`Se existir palavra atrativa, ela vence. Só use ênclise quando não houver ímã nenhum antes do verbo.`,
    ex:`“Nunca ______ (se esqueça / esqueça-se) disso.” → “nunca” é ímã → <b>Nunca se esqueça</b>.<br>“______ (Se esqueça / Esqueça-se) disso.” → sem ímã, início de frase → <b>Esqueça-se</b>.`},
   {n:`Radar do futuro`, c:`Verbo terminando em -rei, -rá, -remos, -ria, -ríamos com pronome “no meio”? É mesóclise. Não invente: só reconheça e saiba que, com atrativa, vira próclise.`,
    ex:`“Dir-<b>lhe</b>-emos a verdade.” = diremos + lhe → <b>mesóclise</b>.<br>“Ninguém <b>lhe</b> dirá a verdade.” → “ninguém” atrai → <b>próclise</b>.`}
  ],
  passo: [
   `Ache o verbo e o pronome oblíquo (me, te, se, o, a, lhe, nos…).`,
   `Procure um “ímã” antes do verbo (negativa, advérbio, que/quem, indefinido, quando/se). Achou → próclise.`,
   `Não achou ímã e o verbo abre a frase → ênclise com hífen.`,
   `Verbo no futuro sem ímã → reconheça a mesóclise; nunca pendure o pronome no fim do futuro.`,
   `Se a pergunta for sobre adequação, lembre: “Me passa…” é natural na fala informal; a norma-padrão vale para o texto formal.`
  ],
  exs: [
   {q:`Reescreva na norma-padrão: “Te ligo depois da aula.”`,
    s:[`Primeiro eu olho a largada: a frase começa com “te”. Na norma-padrão, não pode.`, `Procuro ímã antes do verbo: não há nada antes.`, `Então mando o pronome para depois, com hífen.`],
    r:`<b>Ligo-te depois da aula.</b>`},
   {q:`Coloque o pronome “se” na posição da norma-padrão: “Alguém machucou no recreio?”`,
    s:[`O verbo é “machucou”; o pronome é “se”.`, `Antes do verbo está “alguém”, pronome indefinido: é ímã.`, `Ímã → próclise.`],
    r:`<b>Alguém se machucou no recreio?</b>`},
   {q:`Na frase “Far-se-á uma reunião com os pais”, que colocação aparece? Como ficaria a frase começando com “Não”?`,
    s:[`O verbo é “fará” (futuro do presente) e o “se” está no meio: far- + se + -á → mesóclise.`, `Com “Não” no início, entra uma palavra atrativa, e o ímã ganha.`, `O pronome vai para antes do verbo, e o verbo volta inteiro: “fará”.`],
    r:`<b>Mesóclise; “Não se fará uma reunião com os pais.”</b>`}
  ],
  erros: [
   `<b>Errado:</b> “Nada abala-me.” <b>Certo:</b> “Nada me abala.” (“nada” é ímã)`,
   `<b>Errado:</b> “Sempre lembro-me de você.” <b>Certo:</b> “Sempre me lembro de você.” (“sempre” atrai)`,
   `<b>Errado:</b> “Contarei-te tudo.” <b>Certo:</b> “Contar-te-ei tudo.” (futuro não aceita ênclise; sem ímã, a norma-padrão usa mesóclise)`,
   `<b>Errado:</b> achar que “Me liga mais tarde!” num bilhete a um amigo é um erro grave. <b>Certo:</b> é adequado ao registro informal; só não segue a norma-padrão.`
  ],
  resumo: [
   `Próclise = antes · ênclise = depois (hífen) · mesóclise = meio.`,
   `Começou a frase? → ênclise (Diga-me).`,
   `Tem ímã? → próclise (Não me diga). Ímã sempre ganha.`,
   `Ímãs: não, nunca, ninguém, já, sempre, que, quem, quando, se, tudo, alguém.`,
   `Futuro sem ímã → mesóclise (Dir-te-ei). Nunca “direi-te”.`
  ]
 },

 'p-pont': {
  base: [
   [`Vírgula marca a ordem “bagunçada”`, `A ordem direta é: <b>sujeito + verbo + complemento + circunstância</b>. “Os alunos fizeram a prova pela manhã.” Na ordem direta, não há vírgula. Quando algo se intromete ou muda de lugar, a vírgula aparece.`],
   [`Sujeito e verbo nunca se separam`, `“A irmã mais velha do Pedro<b>,</b> passou no vestibular” está errado, por maior que seja o sujeito. (Só pode haver vírgula entre eles se um termo estiver intercalado entre <b>duas</b> vírgulas: “Pedro, meu irmão, passou.”) O mesmo vale entre verbo e complemento: “Comprei<b>,</b> pão” está errado.`],
   [`Vocativo`, `É o nome de quem é <b>chamado</b>. Sempre isolado por vírgula, esteja onde estiver: “<b>Professora,</b> posso sair?” · “Posso sair<b>, professora</b>?” · “Posso<b>, professora,</b> sair?”`],
   [`Aposto`, `É uma explicação sobre o termo anterior, entre vírgulas: “Machado de Assis<b>, autor de Dom Casmurro,</b> nasceu no Rio.” Se tirar, a frase continua inteira.`],
   [`Adjunto adverbial deslocado`, `Circunstâncias (tempo, lugar, modo) que saem do fim da frase e vão para o início ou o meio pedem vírgula: “<b>No sábado de manhã,</b> haverá prova.” Se a expressão for bem curta, a vírgula é opcional: “Hoje vou cedo.”`],
   [`Vírgula antes de “mas”`, `Orações ligadas por <b>mas, porém, contudo</b> (oposição) são separadas por vírgula: “Estudei muito<b>, mas</b> fiquei nervoso.”`],
   [`Ponto e vírgula (;)`, `Pausa maior que a vírgula e menor que o ponto. Usado para separar itens de enumeração que <b>já têm vírgulas dentro</b>, ou orações longas: “No 1º ano, estudei frações; no 2º, porcentagem.”`],
   [`Dois-pontos (:)`, `Anunciam o que vem: <b>explicação</b> (“Ele faltou: estava doente.”), <b>enumeração</b> (“Leve três coisas: lápis, borracha e régua.”) ou <b>fala/citação</b> (“Ela disse: — Chega!”).`],
   [`Reticências e exclamação: efeito de sentido`, `<b>Reticências</b> sugerem algo não dito: hesitação, suspense, insinuação, interrupção. “Se você soubesse…” · <b>Exclamação</b> mostra emoção forte: surpresa, alegria, raiva, ordem. “Que golaço!”`]
  ],
  jeitos: [
   {n:`Teste do “quem fez?”`, c:`Pergunte quem fez a ação. A resposta inteira é o sujeito, e entre ela e o verbo não pode existir vírgula sozinha.`,
    ex:`“O time de basquete da escola, venceu.” → Quem venceu? “O time de basquete da escola” → vírgula no meio dos dois → <b>errada</b>.`},
   {n:`Teste do “ei, …!”`, c:`Dá para colocar “ei” ou “ó” antes da palavra e ela é a pessoa com quem se fala? Então é vocativo: vírgula obrigatória.`,
    ex:`“Bom dia Carla!” → “Bom dia, ó Carla!” faz sentido → <b>“Bom dia, Carla!”</b><br>“Carla chegou.” → Carla não está sendo chamada, é sujeito → <b>sem vírgula</b>.`},
   {n:`Teste do “que é”`, c:`Se dá para encaixar “que é / que são” antes do trecho, ele é aposto explicativo e vai entre vírgulas.`,
    ex:`“O Amazonas, (que é) o maior estado do Brasil, tem muitos rios.” → <b>aposto</b>, entre vírgulas.`},
   {n:`Teste da ordem direta`, c:`Leve a circunstância para o fim. Se ela estava no início ou no meio, foi deslocada: use vírgula (sem esquecer a segunda vírgula se ela estiver no meio).`,
    ex:`“Os alunos, durante o intervalo, jogaram bola.” → ordem direta: “Os alunos jogaram bola durante o intervalo” → deslocada para o meio → <b>duas vírgulas</b> (entre elas, não “separa” o sujeito do verbo).`},
   {n:`Vírgula dentro? Ponto e vírgula fora!`, c:`Numa lista em que algum item já tem vírgula, separe os itens maiores com ponto e vírgula para não virar confusão.`,
    ex:`“Visitei Recife, em Pernambuco; Natal, no Rio Grande do Norte; e Salvador, na Bahia.” → cada item tem vírgula interna → <b>; entre os itens</b>.`}
  ],
  passo: [
   `Ache o sujeito e o verbo. Há vírgula sozinha entre eles? Errado.`,
   `Procure termos “intrometidos”: vocativo (quem é chamado), aposto (explicação) e circunstância deslocada. Eles vão entre vírgulas.`,
   `Viu “mas/porém/contudo” ligando orações? Vírgula antes.`,
   `Enumeração com vírgulas internas → ponto e vírgula. Anúncio de lista, explicação ou fala → dois-pontos.`,
   `Se a pergunta for de efeito de sentido, pergunte “que emoção ou intenção esse sinal mostra?” (hesitação, ironia, surpresa…).`
  ],
  exs: [
   {q:`Onde está o problema de pontuação? “A professora de Ciências do 9º ano, explicou a fotossíntese com um experimento.”`,
    s:[`Primeiro pergunto quem explicou: “A professora de Ciências do 9º ano”. Esse é o sujeito.`, `A vírgula está entre o sujeito e o verbo “explicou”, sozinha.`, `Sujeito e verbo não se separam, então tiro a vírgula.`],
    r:`<b>A vírgula depois de “ano” separa sujeito e verbo: deve ser retirada.</b>`},
   {q:`Pontue a lista: “Na feira comprei frutas como maçã e banana legumes como cenoura e abobrinha e verduras.”`,
    s:[`“Na feira” é circunstância deslocada para o início → vírgula depois dela.`, `Os itens “frutas, como maçã e banana” e “legumes, como cenoura e abobrinha” já têm vírgula dentro (o “como…” é uma explicação).`, `Uso o macete: vírgula dentro, ponto e vírgula fora.`],
    r:`<b>Na feira, comprei frutas, como maçã e banana; legumes, como cenoura e abobrinha; e verduras.</b>`},
   {q:`Explique cada sinal: “Pai, eu estudei muito, mas a prova estava difícil…”`,
    s:[`“Pai” é quem está sendo chamado (teste do “ei, pai”) → vocativo, isolado por vírgula.`, `“mas” liga duas orações com oposição → vírgula antes.`, `As reticências no fim deixam algo no ar: o filho hesita em contar o resultado, insinua que não foi bem.`],
    r:`<b>Vírgula do vocativo; vírgula antes de “mas”; reticências de hesitação/insinuação.</b>`}
  ],
  erros: [
   `<b>Errado:</b> “Quem estudou toda a matéria, foi bem.” <b>Certo:</b> “Quem estudou toda a matéria foi bem.” (o sujeito é “quem estudou toda a matéria”)`,
   `<b>Errado:</b> “Obrigado Ana!” <b>Certo:</b> “Obrigado, Ana!” (vocativo sempre com vírgula)`,
   `<b>Errado:</b> “Salvador, capital da Bahia tem praias famosas.” <b>Certo:</b> “Salvador, capital da Bahia, tem praias famosas.” (aposto no meio fecha com a segunda vírgula)`,
   `<b>Errado:</b> “Ele treinou mas perdeu.” <b>Certo:</b> “Ele treinou, mas perdeu.”`
  ],
  resumo: [
   `Sujeito , verbo → nunca (vírgula sozinha). Verbo , complemento → nunca.`,
   `Vocativo e aposto explicativo → sempre isolados por vírgula.`,
   `Circunstância fora do lugar → vírgula · antes de “mas” → vírgula.`,
   `; → lista com vírgulas internas · : → explicação, lista ou fala.`,
   `… → hesitação, suspense, insinuação · ! → emoção, surpresa, ordem.`
  ]
 },

 'p-var': {
  base: [
   [`Língua varia o tempo todo`, `Toda língua viva tem variedades: o português de Recife, de Porto Alegre e de Lisboa é o mesmo idioma, com diferenças de sotaque, palavras e construções.`],
   [`Variação regional (lugar)`, `Muda de região para região: “<b>oxente</b>” (Nordeste), “<b>bah</b>” (Sul), “<b>uai</b>” (Minas); “pipa”, “papagaio” e “raia” para o mesmo brinquedo.`],
   [`Variação social (grupo)`, `Muda conforme o grupo: idade (gírias de jovens: “mó legal”), profissão (<b>jargão</b>: “o paciente está estável”, “o código deu bug”), escolaridade, comunidade.`],
   [`Variação histórica (tempo)`, `A língua muda com os anos: “<b>pharmacia</b>” virou “farmácia”; “<b>assaz</b>” (= bastante) quase saiu de uso; gírias de uma época envelhecem.`],
   [`Variação situacional (registro)`, `A mesma pessoa muda o jeito de falar conforme a situação: <b>formal</b> (entrevista, redação, e-mail ao diretor) ou <b>informal</b> (conversa, mensagem a amigo). Isso se chama <b>registro</b>.`],
   [`Norma-padrão`, `É a variedade de referência para situações formais, descrita nas gramáticas. Você precisa dominá-la, mas ela é <b>uma</b> das variedades, não a “língua verdadeira”.`],
   [`Adequado × “certo/errado”`, `Em vez de “certo ou errado”, pergunte: <b>esta forma combina com esta situação e com este interlocutor?</b> “E aí, firmeza?” é adequado entre amigos e inadequado numa redação de prova.`],
   [`Preconceito linguístico`, `É julgar ou humilhar alguém pelo jeito de falar (sotaque, região, escolaridade). Ex.: chamar alguém de “burro” por dizer “nós vai”. Não confunda com <b>ensinar a norma-padrão</b>, que é útil e não é preconceito.`],
   [`Gíria`, `Palavra ou expressão típica de um grupo e de uma época (“daora”, “top”, “cringe”). Mostra identidade e informalidade; costuma envelhecer rápido.`]
  ],
  jeitos: [
   {n:`As quatro perguntas`, c:`Diante de uma marca de variação, pergunte: <b>Onde?</b> (regional) · <b>Quem?</b> (social) · <b>Quando?</b> (histórica) · <b>Em que situação?</b> (situacional).`,
    ex:`“Uai, sô, cê vem?” → denuncia ONDE a pessoa vive → <b>regional</b>.<br>“O cliente quer um <i>deadline</i> para a entrega” numa reunião de empresa → grupo profissional → <b>social (jargão)</b>.`},
   {n:`Grife a marca`, c:`A prova quase sempre pede a palavra que revela a variedade. Sublinhe gírias, regionalismos, formas de tratamento e palavras antigas antes de ler as alternativas.`,
    ex:`“Vossa Excelência, solicito a palavra.” → marca: “Vossa Excelência” → situação <b>formal</b> (registro formal).`},
   {n:`Troca do “errado” por “inadequado a…”`, c:`Se uma alternativa chama uma variedade de “errada” ou “feia”, desconfie. A resposta boa fala em adequação à situação ou ao interlocutor.`,
    ex:`“O personagem caipira fala errado.” → melhor: “O personagem usa uma variedade rural, que <b>não segue a norma-padrão</b> e revela sua origem.”`},
   {n:`Teste do julgamento`, c:`A atitude ridiculariza, exclui ou diminui a pessoa por causa da fala? É preconceito linguístico. Só orientar sobre a norma numa situação formal não é.`,
    ex:`Imitar o sotaque do colega para a turma rir → <b>preconceito</b>.<br>O professor marcar “nós vai” na redação e explicar a forma padrão → <b>ensino da norma</b>, não preconceito.`}
  ],
  passo: [
   `Leia o texto e grife as marcas: gírias, regionalismos, tratamento, palavras antigas, termos técnicos.`,
   `Faça as quatro perguntas (onde? quem? quando? em que situação?) para dar o nome da variação.`,
   `Observe quem fala e com quem fala: isso define o registro (formal × informal).`,
   `Elimine alternativas que falam em “certo × errado” absoluto ou que zombam do falante.`,
   `Escolha a que fala em adequação ao contexto e respeita a variedade.`
  ],
  exs: [
   {q:`Numa visita a Recife, Júlia ouviu: “Oxente, que calor arretado!”. Que tipo de variação as palavras revelam?`,
    s:[`Primeiro eu grifo as marcas: “oxente” e “arretado”.`, `Faço as perguntas: elas revelam ONDE a pessoa vive (são típicas do Nordeste).`, `Logo, é variação de lugar.`],
    r:`<b>Variação regional.</b>`},
   {q:`Um jogador escreveu no chat: “Deu lag, perdi o boss e meu save sumiu.” Que variação aparece, e esse texto seria adequado num relatório escolar?`,
    s:[`Grifo as marcas: “lag”, “boss”, “save” — termos de quem joga videogame, muitos vindos do inglês.`, `Pergunta “quem?”: é a linguagem de um grupo (jogadores) → variação social, com jargão e estrangeirismos.`, `Adequação: no chat de jogo, perfeito; num relatório escolar formal, inadequado — melhor “o jogo travou e perdi o progresso salvo”.`],
    r:`<b>Variação social (jargão de jogadores); adequada ao chat, inadequada ao relatório formal.</b>`},
   {q:`Num conto, um personagem do interior diz “Esse probrema é sério”. Um leitor comentou: “O autor colocou o personagem para falar errado, que vergonha.” Qual é a melhor análise?`,
    s:[`Grifo a marca: “probrema” (troca do “l” pelo “r”), comum em certas variedades, sobretudo rurais.`, `Uso o teste do julgamento: chamar de “vergonha” desvaloriza o jeito de falar de muita gente → preconceito linguístico.`, `Troco “errado” por “inadequado a…”: no conto, a fala é adequada, pois caracteriza o personagem; numa redação formal, a forma esperada seria “problema”.`],
    r:`<b>A fala caracteriza a origem do personagem; não segue a norma-padrão, mas chamá-la de “vergonha” é preconceito linguístico.</b>`}
  ],
  erros: [
   `<b>Errado:</b> “Gíria é português errado.” <b>Certo:</b> gíria é marca de um grupo e é adequada em situações informais.`,
   `<b>Errado:</b> “Aprender a norma-padrão é preconceito.” <b>Certo:</b> preconceito é discriminar quem fala diferente; dominar a norma-padrão é necessário para situações formais.`,
   `<b>Errado:</b> classificar “mandioca/aipim/macaxeira” como variação histórica. <b>Certo:</b> é regional (muda de lugar, não de época).`,
   `<b>Errado:</b> achar que quem fala “Bom dia, senhor” ao diretor e “E aí, mano” ao amigo mudou de variedade regional. <b>Certo:</b> é variação situacional: a mesma pessoa adapta o registro ao interlocutor.`
  ],
  resumo: [
   `Onde? regional · Quem? social · Quando? histórica · Situação? situacional.`,
   `Critério: adequado × inadequado, nunca certo × errado absoluto.`,
   `Norma-padrão = a variedade das situações formais.`,
   `Preconceito linguístico = discriminar pelo jeito de falar.`,
   `Grife a marca (gíria, regionalismo, tratamento) antes de responder.`
  ]
 },

 'p-form': {
  base: [
   [`Radical, prefixo e sufixo`, `O <b>radical</b> é a parte que carrega o sentido (<b>feliz</b>). O <b>prefixo</b> entra antes (<b>in</b>feliz); o <b>sufixo</b>, depois (feliz<b>mente</b>).`],
   [`Derivação: nasce de UMA palavra`, `Prefixal (<b>des</b>fazer), sufixal (cant<b>or</b>), prefixal e sufixal (<b>des</b>igual<b>dade</b>: existem “desigual” e “igualdade”) e parassintética (<b>en</b>velh<b>ecer</b>: não existem “envelho” nem “velhecer”).`],
   [`Derivação regressiva e imprópria`, `<b>Regressiva:</b> a palavra encolhe; em geral, um verbo vira substantivo de ação: buscar → <b>a busca</b>, chorar → <b>o choro</b>. <b>Imprópria:</b> a palavra não muda de forma, só de classe: “<b>o olhar</b> dela”, “um <b>sim</b> sincero”.`],
   [`Composição: junta DOIS radicais`, `<b>Justaposição:</b> as palavras se unem sem perder nada (passatempo, couve-flor, segunda-feira). <b>Aglutinação:</b> uma delas perde som ou letra (aguardente = água + ardente; pontiagudo = ponta + agudo).`],
   [`Estrangeirismos`, `Palavras de outras línguas. <b>Adaptadas</b> ganharam grafia portuguesa (xampu, sanduíche, estresse). <b>Não adaptadas</b> mantêm a original (online, delivery). Em texto formal, prefira a palavra portuguesa quando houver (“entrega” em vez de “delivery”).`],
   [`Sílaba tônica`, `É a sílaba pronunciada com mais força. Conte de trás para frente: tônica na última = <b>oxítona</b> (ca-<b>fé</b>); na penúltima = <b>paroxítona</b> (<b>me</b>-sa); na antepenúltima = <b>proparoxítona</b> (<b>pás</b>-sa-ro).`],
   [`Regras de acento (oxítonas e proparoxítonas)`, `<b>Proparoxítonas:</b> todas (ônibus, sábado). <b>Oxítonas:</b> terminadas em a(s), e(s), o(s), em, ens (maracujá, você, cipó, também, parabéns). <b>Monossílabos tônicos:</b> terminados em a(s), e(s), o(s) (pá, pé, mês, nó).`],
   [`Regras de acento (paroxítonas)`, `Acentuadas quando terminam em <b>l, n, r, x, ps, ã(s), ão(s), i(s), us, um/uns, ditongo</b>: túnel, hífen, caráter, tórax, bíceps, ímã, órgão, táxi, vírus, álbum, série. Terminadas em a(s), e(s), o(s), em, ens: <b>sem acento</b> (casa, jovem, item, nuvens), a não ser que outra regra mande: ditongo final (sé-rie, his-tó-ria) ou hiato com i/u (sa-ú-de).`],
   [`Hiatos com i e u`, `O <b>i</b> ou <b>u</b> tônico que forma sílaba sozinho (ou com s) depois de vogal leva acento: sa-<b>ú</b>-de, pa-<b>í</b>s, ba-<b>ú</b>, sa-<b>í</b>-da. Não leva se vier seguido de nh (ra-i-nha) ou de outra consoante na mesma sílaba que não seja s (ju-iz, ca-ir, ru-im).`]
  ],
  jeitos: [
   {n:`Teste do tira-e-vê (parassíntese)`, c:`Tire só o prefixo; depois, só o sufixo. Se nenhuma das sobras existe, é parassintética. Se as duas existem, é prefixal e sufixal.`,
    ex:`“emagrecer” → “emagro”? não. “magrecer”? não → <b>parassintética</b>.<br>“desigualdade” → “igualdade” existe, “desigual” existe → <b>prefixal e sufixal</b>.`},
   {n:`Verbo encolhido = regressiva`, c:`Se o substantivo indica a AÇÃO do verbo e é “menor” que ele, é derivação regressiva.`,
    ex:`ajudar → <b>a ajuda</b> · castigar → <b>o castigo</b> · pescar → <b>a pesca</b> → <b>regressiva</b>.`},
   {n:`Artigo na frente = imprópria`, c:`Se uma palavra que não é substantivo (verbo, advérbio, adjetivo) aparece com artigo e vira “nome de coisa”, é derivação imprópria.`,
    ex:`“<b>O jantar</b> esfriou.” (verbo → substantivo) · “Ele deu <b>um não</b> seco.” (advérbio → substantivo) → <b>imprópria</b>.`},
   {n:`Perdeu pedaço? Aglutinou!`, c:`Separe a palavra composta nas duas originais. Se alguma perdeu letra ou som, é aglutinação; se ficaram inteiras, justaposição.`,
    ex:`“pontapé” → ponta + pé, inteiras → <b>justaposição</b>.<br>“pontiagudo” → ponta + agudo, o “a” de ponta virou “i” → <b>aglutinação</b>.`},
   {n:`Chame a palavra de longe`, c:`Para achar a sílaba tônica, fale a palavra como se chamasse alguém do outro lado da rua: a sílaba que “estica” é a tônica. Depois conte de trás para frente: 1 = oxítona, 2 = paroxítona, 3 = proparoxítona.`,
    ex:`“ca-já!” estica no “já” → 1ª de trás → <b>oxítona</b> em a → cajá leva acento.<br>“ál-bum” estica no “ál” → 2ª de trás → <b>paroxítona</b> em um → leva acento.`},
   {n:`Espelho das oxítonas`, c:`As paroxítonas fazem o contrário das oxítonas: oxítona em a, e, o, em, ens leva acento; paroxítona com essas terminações NÃO leva (exceto se terminar em ditongo, como “série”, ou tiver hiato com i/u, como “saúde”).`,
    ex:`<b>armazém</b> (oxítona em em) leva × <b>jovem</b> (paroxítona em em) não leva.<br><b>cipó</b> (oxítona em o) leva × <b>caso</b> (paroxítona em o) não leva.`}
  ],
  passo: [
   `Formação: separe a palavra em pedaços (prefixo, radical, sufixo, ou duas palavras).`,
   `Um radical só → derivação (use tira-e-vê, verbo encolhido ou artigo na frente). Dois radicais → composição (perdeu pedaço? aglutinação).`,
   `Estrangeirismo: a grafia ficou portuguesa? Adaptado. Ficou igual à original? Não adaptado.`,
   `Acentuação: ache a sílaba tônica (chame de longe) e classifique contando de trás para frente.`,
   `Aplique a regra da classe (proparoxítona = sempre; oxítona = a, e, o, em, ens; paroxítona = espelho) e confira se é caso de hiato com i/u.`
  ],
  exs: [
   {q:`Classifique a formação das palavras destacadas: “<b>O cantar</b> dos pássaros me acordou”, “<b>pontapé</b>” e “<b>aguardente</b>”.`,
    s:[`“O cantar”: “cantar” é verbo, mas aqui tem artigo e virou substantivo → uso o macete do artigo na frente → derivação imprópria.`, `“pontapé” → ponta + pé, as duas inteiras → justaposição.`, `“aguardente” → água + ardente, perdeu o “a” de água → aglutinação.`],
    r:`<b>Imprópria · justaposição · aglutinação.</b>`},
   {q:`“Entristecer” e “desigualdade”: qual delas é parassintética?`,
    s:[`Faço o tira-e-vê em “entristecer”: “entriste”? não existe. “tristecer”? não existe. → parassintética.`, `Em “desigualdade”: “desigual” existe e “igualdade” existe → prefixal e sufixal.`],
    r:`<b>Entristecer</b> (desigualdade é prefixal e sufixal).`},
   {q:`Explique por que “saúde”, “fácil” e “você” têm acento, mas “juiz” e “item” não têm.`,
    s:[`saúde: sa-ú-de, o “u” é tônico e forma sílaba sozinho depois de vogal → hiato → acento.`, `fácil: chamo de longe, estica no “fá” → paroxítona terminada em l → acento.`, `você: estica no “cê” → oxítona terminada em e → acento.`, `juiz: ju-iz, o “i” tônico está com “z” na mesma sílaba → sem acento.`, `item: estica no “i” → paroxítona terminada em em → espelho das oxítonas → sem acento.`],
    r:`<b>Hiato com u sozinho; paroxítona em l; oxítona em e. “Juiz” tem z na sílaba do i; “item” é paroxítona em em.</b>`}
  ],
  erros: [
   `<b>Errado:</b> “ítem”, “hífens”. <b>Certo:</b> “item”, “hifens” (paroxítonas terminadas em em/ens não levam acento; “hífen”, em n, leva).`,
   `<b>Errado:</b> “raínha”, “juíz”. <b>Certo:</b> “rainha”, “juiz” (i seguido de nh ou de z na mesma sílaba).`,
   `<b>Errado:</b> “O verbo combater virou o combate: derivação sufixal.” <b>Certo:</b> é regressiva: a palavra perdeu a terminação do verbo.`,
   `<b>Errado:</b> “passatempo” é aglutinação. <b>Certo:</b> justaposição (passa + tempo, nada se perde).`,
   `<b>Errado:</b> “ele tem / eles tem”. <b>Certo:</b> “ele tem / eles <b>têm</b>”; “ele vem / eles <b>vêm</b>” (o circunflexo marca o plural).`
  ],
  resumo: [
   `Parassintética: tira o prefixo ou o sufixo → não existe. (envelhecer)`,
   `Regressiva: verbo encolhe (buscar → busca) · Imprópria: muda a classe (o jantar).`,
   `Justaposição: nada se perde (girassol) · Aglutinação: perde pedaço (planalto).`,
   `Ache a tônica chamando de longe → conte de trás: 1 oxítona, 2 paroxítona, 3 proparoxítona.`,
   `Proparoxítona: sempre · Oxítona: a, e, o, em, ens · Paroxítona: o espelho (l, n, r, x, ps, ã, ão, i, us, um, ditongo).`,
   `Hiato: i/u sozinho na sílaba leva acento (saúde, país); rainha, juiz não.`
  ]
 }
};
