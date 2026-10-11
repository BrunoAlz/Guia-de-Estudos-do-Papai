# Especificação dos SIMULADOS (Missão Bolsa 100%)

Richard (9º ano) faz no sábado 17/10 o Desafio do Colégio Objetivo: **30 questões de múltipla escolha, 15 de Português e 15 de Matemática, 3 horas**, valendo bolsa de até 100%.
Vamos ter 3 simulados completos (A, B, C). Cada um deve parecer uma prova de verdade de seleção para a 1ª série do Ensino Médio
(nível de colégios particulares fortes de SP, Vestibulinho Etec, OBMEP 1ª fase nível 2). **Zero erros.**

## Formato (igual ao do treino)
Arquivo JS com uma constante (nome indicado na tarefa):
```js
const SIM_A_MAT = [
 {t:'m-pct', d:2, q:`enunciado`, o:[[`alt A`,`por que está errada (ou '' na correta)`], ...5 alternativas], a:2, e:`resolução passo a passo`, tx:`(opcional) texto/tabela`, tt:`(opcional) título do texto, ex.: Texto 1`},
 ...15 questões na ordem da prova...
];
```
- `t`: id do tópico (exatamente como em data-mat.js / data-por.js). `d`: 1, 2 ou 3.
- **5 alternativas**; feedback vazio só na correta; cada errada explica o erro típico que leva a ela.
- Varie a letra da correta (cada letra A–E deve ser a correta 2 a 4 vezes em 15 questões). **As alternativas NÃO serão embaralhadas** no simulado: a ordem que você escrever é a da prova. Em Matemática, coloque as alternativas numéricas em ordem crescente (como em provas reais).
- Mistura de dificuldade em cada bloco de 15: **5 fáceis (d1), 6 médias (d2), 4 difíceis (d3)**.
- Notação: `[[a|b]]` = fração, `√{x}` = raiz, `<sup>`, `<sub>`, `<b>`, `<br>`, `&lt;`; tabelas com `<table class="tb">`. Strings com crase de template; nunca crase nem `${` dentro do texto.

## Regras
1. As questões têm de ser **inéditas**: não repita nem “clone” (mesmo enunciado com outros números) questões de `data-mat.js`/`data-por.js` (qz e ex), de `treino/*.js` nem cartões de `cards/*.js`. Leia esses arquivos dos tópicos que você vai cobrir antes de escrever.
2. Única alternativa correta; nada de "todas/nenhuma das anteriores".
3. **Matemática:** enunciados contextualizados como em prova real, números limpos (prova sem calculadora; informe π quando usar). **Confira tudo com Python** (`check_<arquivo>.py` ao lado, executado), inclusive que nenhuma outra alternativa também está certa.
4. **Português:** a maior parte parte de textos. Textos escritos por você (originais) ou trechos curtos de autores clássicos em domínio público, com autoria. Nunca letras de música, textos de jornal reais ou de livros didáticos. Tirinhas/charges inventadas, descritas quadro a quadro. Questões que usam o mesmo texto devem repetir o `tx` igualzinho e ter o mesmo `tt` ("Texto 1", "Texto 2"…). Norma-padrão; evite casos gramaticais controversos; procure ativamente uma segunda leitura possível e elimine-a.
5. Rode `node --check` no arquivo e um script de conferência de estrutura (15 questões, 5 alternativas, `a` 0–4, feedback vazio só na correta, distribuição de dificuldade e de letras).

## Entrega
Responda com o caminho do arquivo, a lista das 15 questões (tópico, dificuldade, letra correta) e a confirmação das checagens.
