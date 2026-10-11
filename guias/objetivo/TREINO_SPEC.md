# Especificação do banco de questões do TREINO (Missão Bolsa 100%)

Público: Richard, 9º ano, vai fazer no sábado (17/10) o Desafio de Português e Matemática do Colégio Objetivo
(30 questões de múltipla escolha, 15 + 15, para a 1ª série do Ensino Médio, valendo bolsa de até 100%).
A nota dele depende deste material: **zero erros** de conteúdo, de conta ou de gabarito.

## O que você deve produzir
Um arquivo JavaScript (o caminho será indicado na tarefa) que declara uma única constante, por exemplo:

```js
const TREINO_M1 = [
 {t:'m-pct', d:2, q:`enunciado`, o:[
   [`alternativa A`, `por que está errada (ou '' se for a correta)`],
   [`alternativa B`, ``],
   ...5 alternativas...
 ], a:1, e:`resolução passo a passo da correta`, tx:`(opcional) texto-base`},
 ...
];
```

Campos:
- `t`: id do tópico (exatamente como em data-mat.js / data-por.js).
- `d`: dificuldade 1 (direta), 2 (prova típica), 3 (desafio, estilo OBMEP 1ª fase nível 2 / Vestibulinho Etec). Mistura por tópico: pelo menos uma de cada nível quando o tópico tiver 3 ou mais questões.
- `q`: enunciado. Contextualizado sempre que fizer sentido (compras, esporte, escola, mapas, receitas, celulares, jogos), como na prova real.
- `o`: **exatamente 5 alternativas** (A–E). Cada uma é `[texto, feedback]`. O feedback da correta é `''`. O feedback de cada errada explica **o erro típico que leva àquela alternativa** (ex.: "Você somou as porcentagens em vez de multiplicar os fatores.").
- `a`: índice (0 a 4) da correta. Varie a posição da correta entre as questões (não deixe sempre na mesma letra).
- `e`: resolução didática, passo a passo, em linguagem de 9º ano, curta e clara. Pode usar <b>, <br>, <ol><li>.
- `tx`: opcional; texto-base (Português) ou tabela/dado (Matemática). Use quando a questão precisar.

Notação suportada no texto: `[[a|b]]` = fração a/b (não use colchetes duplos para outra coisa); `√{x}` = raiz de x com barra;
`<sup>2</sup>` para expoente; `&lt;` para o sinal de menor. Não use crase de template (`` ` ``) dentro dos textos, nem `${`.
Prefira strings com crase de template (`` `...` ``) para não brigar com aspas e apóstrofos.

## Quantidade por tópico
- Tópicos ★★★ (star:3): **5 questões**.
- Tópicos ★★ (star:2): **3 questões**.
- Tópicos ★ (star:1): **2 questões**.

## Regras de qualidade (obrigatórias)
1. Leia o tópico correspondente em `data-mat.js` / `data-por.js` antes de escrever: as questões devem cobrar o que foi ensinado ali (e o nível da BNCC 9º ano), com a mesma terminologia. Não repita as questões do teste rápido (`qz`) nem os exemplos (`ex`) do tópico.
2. Uma única alternativa correta e defensável. Nada de "todas as anteriores", "nenhuma das anteriores", "A e B estão corretas" (as alternativas serão embaralhadas).
3. Distratores plausíveis, nascidos de erros reais de alunos (sinal trocado, esquecer o 2ab, somar porcentagens, confundir raio e diâmetro, inverter proporção, confundir concessão com oposição, etc.).
4. **Matemática: confira TODAS as contas executando Python** (um script com cada questão: calcule a resposta e confirme que bate com a alternativa marcada, e que nenhuma outra alternativa também está certa). Números "limpos", sem precisar de calculadora pesada (a prova é sem calculadora). Use π ≈ 3,14 ou π ≈ 3 informando no enunciado.
5. **Português**: textos-base escritos por você (originais) ou de autores clássicos em **domínio público** (ex.: Machado de Assis, Gonçalves Dias, Castro Alves, Olavo Bilac, Lima Barreto, Camões; trechos curtos, até 6 linhas, com autor indicado). **Nunca** use letras de música, trechos de livros didáticos, tirinhas reais (descreva tirinhas inventadas por você, quadro a quadro), nem textos de jornais reais. Siga a norma-padrão e a gramática escolar brasileira; acentuação pelo Acordo Ortográfico vigente.
6. Português no 9º ano é principalmente leitura: a maioria das questões deve partir de um texto/frase em contexto e pedir efeito de sentido, relação, inferência, não decoreba de nomenclatura.
7. Linguagem: português do Brasil, frases claras, sem pegadinhas desonestas (pegadinha boa = erro comum que vale a pena treinar).
8. Formato JS válido: rode `node --check <arquivo>` antes de terminar e corrija qualquer erro.

## Entrega
Ao terminar, responda com: caminho do arquivo, quantidade de questões por tópico e confirmação de que rodou o Python (Matemática) e o node --check.
