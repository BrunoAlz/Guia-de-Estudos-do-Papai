/* Flashcards · Português · P2 (Sentido, coesão e argumentação)
   Todos os exemplos foram escritos para este guia (exceto o trecho de Camões, domínio público, indicado). */
const CARDS_P2 = [
/* ---------- p-conj · Conjunções e relações de sentido (12) ---------- */
 {t:'p-conj', k:'regra', f:`Cite as conjunções de <b>oposição</b> (adversativas) do “ritmo de canto”.`, b:`<b>Mas, porém, contudo, todavia, entretanto, no entanto.</b><br>Uma pode substituir a outra sem mudar o sentido.`},
 {t:'p-conj', k:'conceito', f:`Qual a diferença entre <b>oposição</b> e <b>concessão</b>?`, b:`<b>Na concessão, o obstáculo é admitido, mas não impede o resultado</b>, e o verbo costuma ir para o subjuntivo. “Embora estivesse cansado, terminou” = “Estava cansado, mas terminou”.`},
 {t:'p-conj', k:'regra', f:`As conjunções concessivas (embora, ainda que, mesmo que) pedem o verbo em qual modo?`, b:`<b>Subjuntivo.</b><br>“Embora <b>esteja</b> frio, vou sair.” (e não “embora está”).`},
 {t:'p-conj', k:'exemplo', f:`“<b>Embora</b> chovesse, fomos à praia.” Qual a relação de sentido?`, b:`<b>Concessão.</b><br>A chuva é admitida, mas não impede o passeio.`},
 {t:'p-conj', k:'exemplo', f:`“Fiquei em casa <b>porque</b> estava gripado.” Qual a relação de sentido?`, b:`<b>Causa.</b><br>Estar gripado é o motivo de ficar em casa.`},
 {t:'p-conj', k:'exemplo', f:`“<b>Como</b> estava chovendo, levei o guarda-chuva.” O que indica “como” no início da frase?`, b:`<b>Causa</b> (= já que, visto que).<br>Atenção: “como” também pode ser comparação ou conformidade, dependendo da frase.`},
 {t:'p-conj', k:'exemplo', f:`“Falou <b>tão</b> alto <b>que</b> acordou o bebê.” Qual a relação de sentido?`, b:`<b>Consequência.</b><br>“Tão… que” mostra o resultado de falar alto.`},
 {t:'p-conj', k:'exemplo', f:`“Saiu cedo <b>para que</b> não pegasse trânsito.” Qual a relação de sentido?`, b:`<b>Finalidade.</b><br>Mostra o objetivo de sair cedo (= a fim de que).`},
 {t:'p-conj', k:'exemplo', f:`“<b>À medida que</b> subíamos a serra, o ar ficava mais frio.” Qual a relação de sentido?`, b:`<b>Proporção.</b><br>Uma coisa aumenta junto com a outra (= à proporção que).`},
 {t:'p-conj', k:'exemplo', f:`“Fiz o bolo <b>conforme</b> a receita mandava.” Qual a relação de sentido?`, b:`<b>Conformidade.</b><br>Conforme = segundo = como (de acordo com).`},
 {t:'p-conj', k:'pegadinha', f:`“Pois” sempre indica causa?`, b:`<b>Não!</b> No início da oração = causa/explicação (“Saí cedo, pois tinha prova”). Deslocado, entre vírgulas = conclusão (“O jogo foi, pois, adiado”).`},
 {t:'p-conj', k:'pegadinha', f:`“Queria ir, <b>mais</b> não deu.” Está correto?`, b:`<b>Não!</b> O certo é “<b>mas</b>” (oposição).<br>“Mais” indica quantidade: “quero mais suco”.`},

/* ---------- p-coes · Coesão referencial (12) ---------- */
 {t:'p-coes', k:'regra', f:`Como descobrir a que termo um pronome se refere?`, b:`<b>Troque o pronome pelo termo candidato</b> e veja se a frase faz sentido.<br>Volte sempre ao texto para conferir.`},
 {t:'p-coes', k:'regra', f:`Pela norma-padrão, o pronome relativo “<b>onde</b>” só deve ser usado para quê?`, b:`<b>Para lugar.</b><br>“A cidade <b>onde</b> nasci.” Para tempo ou situação, use “em que” ou “no qual”.`},
 {t:'p-coes', k:'pegadinha', f:`“Chegou o momento <b>onde</b> tudo mudou.” Está de acordo com a norma-padrão?`, b:`<b>Não!</b> Momento é tempo, não lugar.<br>Certo: “o momento <b>em que</b> tudo mudou”.`},
 {t:'p-coes', k:'pegadinha', f:`“Conheci o menino <b>cujo o</b> pai é piloto.” Está correto?`, b:`<b>Não!</b> “Cujo” indica posse e não vem seguido de artigo.<br>Certo: “o menino <b>cujo pai</b> é piloto”.`},
 {t:'p-coes', k:'conceito', f:`<b>Este</b> × <b>esse</b>: qual anuncia e qual retoma?`, b:`<b>“Este” anuncia</b> o que ainda vem; <b>“esse” retoma</b> o que já foi dito.<br>“Meu pedido é <b>este</b>: silêncio.” · “Silêncio: <b>esse</b> foi meu pedido.”`},
 {t:'p-coes', k:'conceito', f:`O que é um <b>hiperônimo</b> na coesão do texto?`, b:`<b>Uma palavra de sentido mais geral</b> que retoma outra mais específica.<br>“O cachorro latiu. O <b>animal</b> estava assustado.”`},
 {t:'p-coes', k:'conceito', f:`O pronome relativo “<b>quem</b>” se refere a quê?`, b:`<b>A pessoas</b>, geralmente depois de preposição.<br>“A amiga <b>de quem</b> falei chegou.”`},
 {t:'p-coes', k:'exemplo', f:`“Comprei um livro e uma caneta. <b>Ela</b> custou dois reais.” A que termo “Ela” se refere?`, b:`<b>À caneta.</b><br>“Ela” é feminino; “livro” é masculino.`},
 {t:'p-coes', k:'exemplo', f:`“Lia adotou um gato. <b>O bichano</b> dorme o dia todo.” A que termo “O bichano” se refere?`, b:`<b>Ao gato.</b><br>É um sinônimo usado para não repetir a palavra.`},
 {t:'p-coes', k:'exemplo', f:`“Marta chegou cedo. Trouxe pão.” Quem trouxe pão, e qual recurso de coesão foi usado?`, b:`<b>Marta; elipse.</b><br>O sujeito foi omitido porque já se sabe quem é: “Marta chegou cedo. (Ø) Trouxe pão.”`},
 {t:'p-coes', k:'exemplo', f:`“Visitei o museu <b>de que</b> você gostou.” A que termo o “que” se refere?`, b:`<b>Ao museu.</b><br>É pronome relativo: retoma “museu” e inicia nova oração (= do qual).`},
 {t:'p-coes', k:'pegadinha', f:`“Pedro avisou ao pai que <b>ele</b> estava atrasado.” Quem estava atrasado?`, b:`<b>Não dá para saber: a frase é ambígua.</b><br>“Ele” pode ser Pedro ou o pai.`},

/* ---------- p-fig · Figuras de linguagem (12) ---------- */
 {t:'p-fig', k:'pegadinha', f:`“Ela é delicada <b>como</b> uma flor.” É metáfora?`, b:`<b>Não! É comparação</b>, porque tem o conectivo “como”.<br>Metáfora seria: “Ela é uma flor.”`},
 {t:'p-fig', k:'exemplo', f:`“Meu irmão é uma tartaruga.” Que figura de linguagem?`, b:`<b>Metáfora.</b><br>Compara o irmão a uma tartaruga (lentidão) sem usar conectivo.`},
 {t:'p-fig', k:'exemplo', f:`“Adoro ler Monteiro Lobato.” Que figura de linguagem?`, b:`<b>Metonímia.</b><br>O nome do autor está no lugar da obra dele.`},
 {t:'p-fig', k:'exemplo', f:`“A lua espiava os namorados pela janela.” Que figura de linguagem?`, b:`<b>Personificação.</b><br>“Espiar” é ação humana atribuída à lua.`},
 {t:'p-fig', k:'exemplo', f:`“Já te liguei um milhão de vezes!” Que figura de linguagem?`, b:`<b>Hipérbole.</b><br>Exagero intencional para dar ênfase.`},
 {t:'p-fig', k:'exemplo', f:`“O vendedor <b>faltou com a verdade</b>.” Que figura de linguagem?`, b:`<b>Eufemismo.</b><br>Suaviza algo desagradável: em vez de “mentiu”.`},
 {t:'p-fig', k:'exemplo', f:`“Que menino organizado! Deixou o quarto todo bagunçado.” Que figura de linguagem?`, b:`<b>Ironia.</b><br>Diz “organizado” querendo dizer o contrário.`},
 {t:'p-fig', k:'exemplo', f:`“Na vitória e na derrota, estaremos juntos.” Que figura de linguagem?`, b:`<b>Antítese.</b><br>Ideias opostas (vitória × derrota) lado a lado.`},
 {t:'p-fig', k:'exemplo', f:`“É ferida que dói, e não se sente.” (Camões) Que figura de linguagem?`, b:`<b>Paradoxo.</b><br>Opostos fundidos numa mesma ideia: doer sem se sentir é uma contradição aparente.`},
 {t:'p-fig', k:'exemplo', f:`“Senti um cheiro <b>doce</b> vindo da cozinha.” Que figura de linguagem?`, b:`<b>Sinestesia.</b><br>Mistura sentidos: olfato (cheiro) com paladar (doce).`},
 {t:'p-fig', k:'conceito', f:`<b>Antítese</b> × <b>paradoxo</b>: qual a diferença?`, b:`<b>Antítese = opostos lado a lado</b> (“amor e ódio”). <b>Paradoxo = opostos grudados</b>, contradição aparente (“silêncio ensurdecedor”).`},
 {t:'p-fig', k:'conceito', f:`<b>Aliteração</b> × <b>assonância</b>: qual repete consoantes e qual repete vogais?`, b:`<b>Aliteração = sons consonantais</b> (“O rato roeu a roupa do rei de Roma”).<br><b>Assonância = sons vocálicos</b> (“A arara clara cantava na mata”).`},

/* ---------- p-sent · Denotação, conotação, polissemia e ambiguidade (8) ---------- */
 {t:'p-sent', k:'conceito', f:`<b>Denotação</b> × <b>conotação</b>: qual a diferença?`, b:`<b>Denotação = sentido literal, de dicionário; conotação = sentido figurado.</b><br>Macete: DENOtação = Dicionário; CONOtação = COm imaginação.`},
 {t:'p-sent', k:'exemplo', f:`“Meu tio tem um coração de <b>pedra</b>.” A palavra “pedra” está em sentido denotativo ou conotativo?`, b:`<b>Conotativo</b> (figurado).<br>Quer dizer que ele é insensível, e não que o coração seja de pedra de verdade.`},
 {t:'p-sent', k:'conceito', f:`O que é <b>polissemia</b>?`, b:`<b>Uma mesma palavra com vários sentidos ligados entre si.</b><br>“Pegar” ônibus, pegar gripe, pegar sol, pegar o jeito.`},
 {t:'p-sent', k:'regra', f:`<b>Sessão</b>, <b>seção</b> e <b>cessão</b>: o que significa cada uma?`, b:`<b>Sessão</b> = reunião, exibição (de cinema). <b>Seção</b> = setor, divisão. <b>Cessão</b> = ato de ceder.`},
 {t:'p-sent', k:'regra', f:`<b>Eminente</b> × <b>iminente</b>: o que significa cada uma?`, b:`<b>Eminente = importante</b> (“um eminente cientista”).<br><b>Iminente = prestes a acontecer</b> (“chuva iminente”).`},
 {t:'p-sent', k:'pegadinha', f:`“O <b>tráfico</b> na avenida está lento hoje.” Está correto?`, b:`<b>Não!</b> O certo é “<b>tráfego</b>” (trânsito).<br>“Tráfico” é comércio ilegal.`},
 {t:'p-sent', k:'exemplo', f:`“O policial viu o ladrão correndo.” Por que a frase é ambígua?`, b:`<b>Não se sabe quem estava correndo:</b> o policial ou o ladrão.`},
 {t:'p-sent', k:'pegadinha', f:`A ambiguidade é sempre um defeito do texto?`, b:`<b>Não!</b> Em anúncios e tirinhas costuma ser <b>proposital</b> (humor, criatividade). Em texto informativo ou na redação, é falha.`},

/* ---------- p-modal · Modalização e operadores argumentativos (8) ---------- */
 {t:'p-modal', k:'exemplo', f:`“<b>Talvez</b> o show seja adiado.” O que a palavra destacada expressa?`, b:`<b>Possibilidade/dúvida.</b><br>O autor não tem certeza do adiamento.`},
 {t:'p-modal', k:'pegadinha', f:`Trocar “<b>provavelmente</b>” por “<b>certamente</b>” mantém o sentido da frase?`, b:`<b>Não!</b> Muda de hipótese (dúvida) para certeza.`},
 {t:'p-modal', k:'exemplo', f:`“<b>É preciso</b> economizar água.” Que atitude do autor a expressão revela?`, b:`<b>Obrigação/necessidade.</b><br>Equivale a “deve-se”, “é necessário”.`},
 {t:'p-modal', k:'exemplo', f:`“<b>Felizmente</b>, ninguém se feriu.” O que a palavra destacada expressa?`, b:`<b>Avaliação positiva do autor.</b><br>Mostra que ele se alegra com o fato.`},
 {t:'p-modal', k:'exemplo', f:`“Todos vieram à festa, <b>inclusive</b> o diretor.” O que “inclusive” indica?`, b:`<b>O argumento mais forte ou inesperado.</b><br>Funciona como “até”: a presença do diretor é a mais surpreendente.`},
 {t:'p-modal', k:'regra', f:`Que sentido introduzem “<b>ou seja</b>” e “<b>isto é</b>”?`, b:`<b>Explicação</b> (reformulam o que foi dito).<br>“Choveu 100 mm, <b>ou seja</b>, muita chuva.”`},
 {t:'p-modal', k:'exemplo', f:`“O técnico <b>admitiu</b> o erro.” O que o verbo “admitiu” sugere?`, b:`<b>Que se trata de algo negativo</b>, reconhecido por ele.<br>“Afirmou” seria neutro.`},
 {t:'p-modal', k:'conceito', f:`Ao introduzir uma fala, que diferença há entre “<b>afirmou</b>” e “<b>alegou</b>”?`, b:`<b>“Afirmou” é neutro; “alegou” sugere que a fala não está provada.</b><br>Macete: alegou = disse sem provar.`}
];
