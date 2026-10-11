/* Flashcards · PORTUGUÊS · P1 Leitura e interpretação
   Todas as frases, slogans e manchetes foram escritos para este guia (exceto trechos em domínio público, indicados). */
const CARDS_P1 = [
/* ---------- p-impl · Explícito, implícito e inferência (12) ---------- */
 {t:'p-impl', k:'conceito', f:`Informação explícita × implícita: qual a diferença?`, b:`<b>Explícita está escrita com todas as letras; implícita não está escrita, mas o texto permite concluir.</b> Para achar a explícita, volte ao texto e localize.`},
 {t:'p-impl', k:'conceito', f:`Pressuposto × subentendido: qual a diferença?`, b:`<b>Pressuposto vem marcado numa palavra; subentendido depende do contexto.</b> “Ele ainda mora lá” → já morava (pressuposto). “Que calor aqui…” → pedido para abrir a janela (subentendido).`},
 {t:'p-impl', k:'regra', f:`Cite palavras que costumam “carregar” um pressuposto.`, b:`<b>Parou de, continua, voltou a, ainda, de novo, finalmente.</b> O pressuposto vem “de brinde” na palavra.`},
 {t:'p-impl', k:'exemplo', f:`“Rafa voltou a treinar.” O que essa frase pressupõe?`, b:`<b>Que Rafa já treinava antes e tinha parado.</b> “Voltou a” carrega essa informação.`},
 {t:'p-impl', k:'exemplo', f:`“Choveu de novo no dia do passeio.” O que fica pressuposto?`, b:`<b>Que já tinha chovido antes.</b> A expressão “de novo” traz essa informação.`},
 {t:'p-impl', k:'exemplo', f:`Às 22 h, a mãe diz ao filho no videogame: “Já são dez horas, e amanhã tem aula.” Que tipo de implícito há?`, b:`<b>Subentendido: é um pedido para ele ir dormir.</b> Nada na frase diz “vá dormir”; é o contexto que mostra.`},
 {t:'p-impl', k:'exemplo', f:`“O goleiro fechou o gol na final.” Pelo contexto, o que significa “fechou o gol”?`, b:`<b>Defendeu tudo, não deixou a bola entrar.</b> Sentido descoberto pelo contexto, não pelo dicionário.`},
 {t:'p-impl', k:'regra', f:`O que diferencia uma inferência boa de uma invenção?`, b:`<b>A inferência boa tem pista no texto.</b> Inferir é concluir a partir de pistas, e não imaginar o que o texto não sustenta.`},
 {t:'p-impl', k:'conceito', f:`Tema × assunto do primeiro parágrafo: qual é mais amplo?`, b:`<b>O tema: é a ideia central, o que o texto inteiro quer discutir.</b> O primeiro parágrafo pode tratar só de um pedaço dele.`},
 {t:'p-impl', k:'regra', f:`Como descobrir o sentido de uma palavra difícil numa questão?`, b:`<b>Pelo contexto: troque a palavra por cada alternativa e veja qual mantém o sentido da frase.</b>`},
 {t:'p-impl', k:'pegadinha', f:`Uma alternativa é verdadeira no mundo real, mas o texto não fala disso. Pode ser a resposta?`, b:`<b>Não!</b> A resposta precisa caber no texto. Essa é a alternativa errada mais comum.`},
 {t:'p-impl', k:'pegadinha', f:`Alternativas com “sempre”, “nunca” ou “todos”: o que fazer?`, b:`<b>Desconfiar.</b> Essas palavras costumam extrapolar o que o texto diz.`},

/* ---------- p-tira · Tirinhas, charges e memes (12) ---------- */
 {t:'p-tira', k:'conceito', f:`Tirinha × charge: qual a diferença?`, b:`<b>Tirinha é uma sequência curta de quadros; charge critica um fato atual (política, cidade), muitas vezes com caricatura.</b>`},
 {t:'p-tira', k:'conceito', f:`Charge × cartum: qual a diferença?`, b:`<b>A charge critica um fato atual, com data; o cartum critica um comportamento, sem data.</b>`},
 {t:'p-tira', k:'conceito', f:`O que é um meme?`, b:`<b>Uma imagem conhecida reaproveitada com um texto novo.</b> O humor depende de o leitor reconhecer a imagem.`},
 {t:'p-tira', k:'regra', f:`Numa tirinha, em que quadro a graça costuma estar?`, b:`<b>No último quadro.</b> É ali que aparece a surpresa.`},
 {t:'p-tira', k:'regra', f:`De onde nasce o humor, quase sempre?`, b:`<b>Da quebra de expectativa.</b> Fontes comuns: duplo sentido, leitura literal de algo figurado, exagero e contraste entre fala e imagem.`},
 {t:'p-tira', k:'conceito', f:`O que é ironia?`, b:`<b>Dizer o contrário do que se pensa, e o contexto mostra isso.</b> Ironia = fala × situação apontando para lados opostos.`},
 {t:'p-tira', k:'exemplo', f:`Depois de duas horas na fila do banco, Léo diz: “Adorei esse passeio!”. Que recurso é esse?`, b:`<b>Ironia.</b> A situação (espera chata) mostra que ele quer dizer o contrário de “adorei”.`},
 {t:'p-tira', k:'exemplo', f:`Tirinha: o pai diz ao filho “Cai na real!”, e o menino se joga no chão. De onde vem o humor?`, b:`<b>Da interpretação literal de uma expressão figurada.</b> “Cair na real” significa encarar a realidade, não cair de verdade.`},
 {t:'p-tira', k:'exemplo', f:`Numa tirinha, o balão tem forma de nuvem e se liga ao personagem por bolinhas. O que ele indica?`, b:`<b>Pensamento.</b> O personagem não está falando em voz alta.`},
 {t:'p-tira', k:'exemplo', f:`Charge: um rio cheio de lixo e, na margem, a placa “Bem-vindo ao rio mais limpo do estado”. O que ela critica?`, b:`<b>A poluição do rio (e o descaso com ela).</b> A crítica nasce do contraste entre a placa e a imagem.`},
 {t:'p-tira', k:'pegadinha', f:`Na questão sobre charge, basta descrever o que aparece na imagem?`, b:`<b>Não!</b> É preciso interpretar o efeito: qual crítica, humor ou ironia a imagem produz.`},
 {t:'p-tira', k:'pegadinha', f:`Ironia é o mesmo que mentira?`, b:`<b>Não!</b> Quem mente quer enganar; quem usa ironia quer ser entendido, e o contexto revela o sentido oposto.`},

/* ---------- p-arg · Texto argumentativo (12) ---------- */
 {t:'p-arg', k:'conceito', f:`O que é a tese de um texto argumentativo?`, b:`<b>O ponto de vista que o autor defende.</b> Tese = O QUE o autor defende.`},
 {t:'p-arg', k:'conceito', f:`O que é um argumento?`, b:`<b>A razão que sustenta a tese, para convencer o leitor.</b> Argumento = POR QUE eu deveria concordar.`},
 {t:'p-arg', k:'regra', f:`Onde a tese costuma aparecer no texto?`, b:`<b>No começo, ou retomada na conclusão.</b> Pistas: “Por isso…”, “Portanto…”.`},
 {t:'p-arg', k:'regra', f:`O que a estrutura “É verdade que…, mas…” faz?`, b:`<b>Concessão + refutação: o autor reconhece a ideia contrária e depois a rebate.</b> Isso é um contra-argumento.`},
 {t:'p-arg', k:'exemplo', f:`“Segundo um neurologista, dormir pouco prejudica a memória.” Que tipo de argumento é esse?`, b:`<b>Argumento de autoridade.</b> Usa a fala de um especialista.`},
 {t:'p-arg', k:'exemplo', f:`“Sete em cada dez alunos dormem menos de oito horas, aponta pesquisa.” Que tipo de argumento é esse?`, b:`<b>Dados e pesquisas.</b> Usa números e estatísticas como prova.`},
 {t:'p-arg', k:'exemplo', f:`“Veja o caso de Lucas: passou a ler 20 minutos por dia e suas redações melhoraram.” Que tipo de argumento é esse?`, b:`<b>Argumento por exemplo.</b> Apresenta um caso concreto.`},
 {t:'p-arg', k:'exemplo', f:`“Se o lixo continuar na rua, os bueiros entopem e a cidade alaga.” Que tipo de argumento é esse?`, b:`<b>Causa e consequência.</b> Mostra o que acontece por causa de uma atitude.`},
 {t:'p-arg', k:'exemplo', f:`“Assim como o cinto de segurança virou hábito, o capacete também pode virar.” Que tipo de argumento é esse?`, b:`<b>Comparação.</b> Aproxima duas situações parecidas.`},
 {t:'p-arg', k:'exemplo', f:`“É claro que o uniforme custa caro, mas ele evita a competição por roupas de marca.” Qual parte é a concessão?`, b:`<b>“É claro que o uniforme custa caro”.</b> O autor cede um pouco; o “mas…” traz a refutação.`},
 {t:'p-arg', k:'pegadinha', f:`Uma alternativa traz um dos argumentos do texto. Ela pode ser a tese?`, b:`<b>Não!</b> A tese é a ideia que os argumentos sustentam. Argumento é o “porquê”, não o “quê”.`},
 {t:'p-arg', k:'pegadinha', f:`Mostrar a opinião contrária enfraquece o texto argumentativo?`, b:`<b>Não! Fortalece.</b> O autor mostra que conhece o outro lado e o rebate (concessão + refutação).`},

/* ---------- p-pub · Publicidade, propaganda e persuasão (12) ---------- */
 {t:'p-pub', k:'conceito', f:`Publicidade × propaganda (campanha): qual a diferença?`, b:`<b>Publicidade vende produtos e marcas; propaganda divulga ideias e causas.</b> PUBlicidade vende PRODUTO; PROPaganda PROPõe uma ideia.`},
 {t:'p-pub', k:'regra', f:`Cite recursos de persuasão de anúncios.`, b:`<b>Imperativo, falar com “você”, slogan, rima e trocadilho, apelo à emoção ou à autoridade, urgência, imagem e cores.</b>`},
 {t:'p-pub', k:'regra', f:`Diante de um anúncio, quais duas perguntas fazer?`, b:`<b>Qual é a finalidade do texto? Para quem ele foi feito?</b> (público-alvo)`},
 {t:'p-pub', k:'conceito', f:`O que é um slogan?`, b:`<b>Uma frase curta e fácil de lembrar que identifica a marca ou a campanha.</b> Costuma usar rima, ritmo ou trocadilho.`},
 {t:'p-pub', k:'exemplo', f:`“Experimente hoje. Você merece.” Em que modo está o verbo “Experimente” e para quê?`, b:`<b>Imperativo: chama o leitor à ação.</b> E o “você” cria proximidade.`},
 {t:'p-pub', k:'exemplo', f:`Slogan: “Pão Dourado: quentinho e caprichado.” Que recurso ajuda a memorizar?`, b:`<b>A rima (Dourado / caprichado).</b> Frase curta e sonora gruda na memória.`},
 {t:'p-pub', k:'exemplo', f:`“Só hoje! Últimas unidades!” Que recurso de persuasão é esse?`, b:`<b>Urgência e exclusividade.</b> O prazo curto pressiona o consumidor a agir logo.`},
 {t:'p-pub', k:'exemplo', f:`“Tênis Raio: o tênis do campeão olímpico.” Que apelo é esse?`, b:`<b>Apelo à autoridade (celebridade).</b> Se o campeão usa, o produto “deve ser bom”.`},
 {t:'p-pub', k:'exemplo', f:`“Colchão Nuvem: chegou a hora de deitar e rolar.” Que recurso há em “deitar e rolar”?`, b:`<b>Duplo sentido (trocadilho).</b> Literal: deitar no colchão. Figurado: aproveitar à vontade.`},
 {t:'p-pub', k:'exemplo', f:`“Mãe: o abraço que nunca envelhece. Floricultura Jardim.” Qual o principal apelo?`, b:`<b>Apelo à emoção.</b> Liga o produto ao carinho pela mãe.`},
 {t:'p-pub', k:'exemplo', f:`Cartaz: “Vacine seu filho. Proteja quem você ama.” Qual é a finalidade?`, b:`<b>Conscientizar os pais a vacinar os filhos.</b> É propaganda (campanha), com imperativo e apelo à emoção.`},
 {t:'p-pub', k:'pegadinha', f:`Uma campanha contra a dengue mostra um repelente. A finalidade é vender repelente?`, b:`<b>Não!</b> O objetivo é mudar comportamento. Não confunda o objeto que aparece com a finalidade.`},

/* ---------- p-gen · Gêneros jornalísticos e fato × opinião (8) ---------- */
 {t:'p-gen', k:'conceito', f:`O que é uma notícia?`, b:`<b>Relato objetivo de um fato recente, em 3ª pessoa.</b> A manchete resume o fato e o lide abre o texto.`},
 {t:'p-gen', k:'regra', f:`Quais perguntas o lide responde?`, b:`<b>O quê, quem, quando, onde, como e por quê.</b> O lide é o 1º parágrafo da notícia.`},
 {t:'p-gen', k:'conceito', f:`Notícia × reportagem: qual a diferença?`, b:`<b>A notícia relata o fato; a reportagem aprofunda o tema, com entrevistas, dados e mais de um ponto de vista.</b>`},
 {t:'p-gen', k:'conceito', f:`Artigo de opinião × editorial: qual a diferença?`, b:`<b>O artigo é assinado por um autor; o editorial é a opinião do próprio jornal, sem assinatura individual.</b> Os dois defendem pontos de vista.`},
 {t:'p-gen', k:'conceito', f:`O que é uma crônica?`, b:`<b>Texto que parte de um fato do dia a dia com olhar pessoal, leve, às vezes com humor.</b>`},
 {t:'p-gen', k:'exemplo', f:`“O show de ontem foi o melhor do ano.” Fato ou opinião?`, b:`<b>Opinião: “o melhor” é julgamento.</b> Fato pode ser verificado (“O show durou duas horas”). Pistas de opinião: adjetivos de avaliação, “acho”, “deveria”, “infelizmente”.`},
 {t:'p-gen', k:'exemplo', f:`Manchetes do mesmo fato: “Prefeitura entrega ponte” × “Prefeitura entrega ponte com dois anos de atraso”. O que a segunda revela?`, b:`<b>Um enfoque diferente, que destaca o atraso (tom crítico).</b> A escolha das palavras revela a posição de cada veículo.`},
 {t:'p-gen', k:'pegadinha', f:`Uma notícia cita entre aspas a opinião de um entrevistado. Ela deixa de ser notícia?`, b:`<b>Não!</b> A opinião é do entrevistado, não do jornalista.`},

/* ---------- p-fake · Fake news (8) ---------- */
 {t:'p-fake', k:'regra', f:`Qual é o checklist FADUT antes de compartilhar?`, b:`<b>Fonte, Autor, Data, URL, Tom.</b> Tom sensacionalista é sinal de alerta.`},
 {t:'p-fake', k:'exemplo', f:`“URGENTE!!! COMPARTILHE ANTES QUE APAGUEM!!!” Que sinais de alerta aparecem?`, b:`<b>Caixa alta, excesso de “!!!” e pedido urgente de compartilhamento.</b> Tom sensacionalista típico de fake news.`},
 {t:'p-fake', k:'exemplo', f:`A notícia vem do link “noticiasverdadeiras-oficial.click”, sem autor. Que sinais de alerta há?`, b:`<b>URL estranha, fonte desconhecida e autor não identificado.</b>`},
 {t:'p-fake', k:'exemplo', f:`Foto de uma enchente de outro país, de anos atrás, circula como se fosse da sua cidade hoje. Qual o problema?`, b:`<b>Imagem fora do contexto original.</b> A foto é real, mas o lugar e a data estão errados.`},
 {t:'p-fake', k:'regra', f:`O que fazer antes de acreditar numa notícia surpreendente?`, b:`<b>Procurar a informação em veículos confiáveis, consultar agências de checagem e conferir a data e a origem da imagem.</b>`},
 {t:'p-fake', k:'conceito', f:`Sátira (notícia inventada de propósito para fazer humor) é fake news?`, b:`<b>Não, desde que o leitor saiba que é humor.</b>`},
 {t:'p-fake', k:'pegadinha', f:`Uma notícia verdadeira, mas antiga, compartilhada como se fosse de hoje, desinforma?`, b:`<b>Sim!</b> É descontextualização: mesmo verdadeira, fora da data e do contexto ela engana.`},
 {t:'p-fake', k:'pegadinha', f:`A mensagem já foi compartilhada milhares de vezes. Isso prova que é verdadeira?`, b:`<b>Não!</b> Compartilhamento não é prova. Confira a fonte.`},

/* ---------- p-lit · Narrativa e poema (8) ---------- */
 {t:'p-lit', k:'regra', f:`Quais são os cinco elementos da narrativa?`, b:`<b>Narrador, personagens, tempo, espaço e enredo.</b>`},
 {t:'p-lit', k:'regra', f:`Qual é a sequência do enredo?`, b:`<b>Situação inicial → conflito → clímax → desfecho.</b> Clímax é o momento de maior tensão.`},
 {t:'p-lit', k:'conceito', f:`O que é o conflito de uma narrativa?`, b:`<b>O problema que move a história.</b> É ele que faz a ação andar.`},
 {t:'p-lit', k:'conceito', f:`Narrador observador × onisciente: qual a diferença?`, b:`<b>O observador conta de fora o que se vê; o onisciente sabe o que os personagens pensam e sentem.</b> Os dois são de 3ª pessoa.`},
 {t:'p-lit', k:'exemplo', f:`“Naquele domingo, eu e meu primo nos perdemos na feira.” Qual é o foco narrativo?`, b:`<b>1ª pessoa: narrador-personagem.</b> Quem conta participa da história (“eu”).`},
 {t:'p-lit', k:'exemplo', f:`Passe para o discurso indireto: Davi prometeu: “Eu trago o livro amanhã.”`, b:`<b>Davi prometeu que traria o livro no dia seguinte.</b> Entra o “que”; muda o verbo (trago → traria), o pronome e o “amanhã”.`},
 {t:'p-lit', k:'exemplo', f:`“Bia olhou o boletim. Que vergonha, meu Deus! Guardou o papel no fundo da mochila.” Que discurso aparece?`, b:`<b>Discurso indireto livre.</b> O pensamento de Bia se mistura à voz do narrador, sem travessão nem “disse que”.`},
 {t:'p-lit', k:'pegadinha', f:`O eu lírico de um poema é sempre o próprio autor?`, b:`<b>Não!</b> O eu lírico é a “voz” do poema, que não é necessariamente o autor.`},

/* ---------- p-inter · Intertextualidade (8) ---------- */
 {t:'p-inter', k:'conceito', f:`O que é paródia?`, b:`<b>Imitação de um texto conhecido que muda o sentido, geralmente para criticar ou fazer humor.</b> Pa-RÓ-dia faz RIr.`},
 {t:'p-inter', k:'conceito', f:`O que é paráfrase?`, b:`<b>Reescrever um texto com outras palavras, mantendo o sentido original.</b> Pa-RÁ-frase REpete o sentido.`},
 {t:'p-inter', k:'conceito', f:`Citação × alusão: qual a diferença?`, b:`<b>A citação reproduz o trecho entre aspas, indicando o autor; a alusão só lembra o outro texto, sem copiar.</b>`},
 {t:'p-inter', k:'conceito', f:`O que é epígrafe?`, b:`<b>Trecho de outro autor colocado no início de uma obra ou capítulo.</b>`},
 {t:'p-inter', k:'exemplo', f:`“Minha escola tem goteiras, / onde pinga sem parar.” Que relação há com a “Canção do Exílio”?`, b:`<b>Paródia.</b> Imita “Minha terra tem palmeiras, / Onde canta o Sabiá” (Gonçalves Dias, 1843) mudando o sentido para criticar a escola.`},
 {t:'p-inter', k:'exemplo', f:`Anúncio de loja: “Penso, logo compro.” A que frase famosa ele faz referência?`, b:`<b>“Penso, logo existo”, do filósofo Descartes.</b> O anúncio troca “existo” por “compro” para brincar com o original.`},
 {t:'p-inter', k:'exemplo', f:`Original: “Quem espera sempre alcança.” Reescrita: “Quem tem paciência consegue o que quer.” Qual é a relação?`, b:`<b>Paráfrase.</b> Outras palavras, mesmo sentido.`},
 {t:'p-inter', k:'pegadinha', f:`O novo texto imita a forma do original, mas brinca com ele e muda o sentido. É paráfrase?`, b:`<b>Não! É paródia.</b> O que decide é o sentido: se mudou, é paródia; se manteve, é paráfrase.`}
];
