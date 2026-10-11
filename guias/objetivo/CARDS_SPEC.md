# Especificação dos FLASHCARDS (Missão Bolsa 100%)

Público: Richard, 9º ano, prova de bolsa do Colégio Objetivo no sábado 17/10 (Português e Matemática).
O flashcard é para **memória rápida**: ver a frente, tentar lembrar em 5 segundos, virar e conferir. **Zero erros.**

## Arquivo
Um arquivo JS (caminho na tarefa) com uma única constante:

```js
const CARDS_XX = [
 {t:'m-pct', k:'regra', f:`frente`, b:`verso`},
 ...
];
```

- `t`: id do tópico (exatamente como em data-mat.js / data-por.js).
- `k`: tipo do cartão, um destes:
  - `regra` — fórmula ou regra (“Fórmula da área do trapézio?” → “[[(B + b)·h|2]]”).
  - `conceito` — definição/diferença (“Restritiva × explicativa?”).
  - `conta` — **conta relâmpago** para fazer de cabeça em até 10 s (“15% de 80?” → “12”). Só Matemática.
  - `exemplo` — reconhecer num exemplo (“‘Ela é uma flor.’ Que figura?” → “Metáfora…”).
  - `pegadinha` — erro comum (“(a + b)² = a² + b²?” → “Não! Falta o 2ab…”).
- `f` (frente): pergunta curta e objetiva, **no máximo ~25 palavras**. Uma só resposta possível.
- `b` (verso): resposta direta primeiro (em <b>negrito</b>), depois no máximo 1–2 frases curtas de explicação ou um exemplo. **No máximo ~45 palavras.**

Notação suportada: `[[a|b]]` = fração; `√{x}` = raiz com barra; `<sup>2</sup>`; `<sub>1</sub>`; `<b>`, `<i>`, `<br>`; `&lt;` para o sinal de menor.
Use crase de template (`` `...` ``) nas strings; nunca use crase nem `${` dentro do texto.

## Quantidade
- Por tópico ★★★: **12 cartões**; ★★: **8 cartões**; ★: **6 cartões**.
- Em Matemática, cerca de 1/3 dos cartões de cada tópico deve ser do tipo `conta` (números pequenos, de cabeça).
- Varie os tipos dentro de cada tópico.

## Regras de qualidade (obrigatórias)
1. Leia o tópico em `data-mat.js` / `data-por.js` (e os macetes em `data-macetes.js`) antes: os cartões devem bater com o que foi ensinado, com a mesma terminologia. Pode (e deve) cobrir também detalhes do conteúdo que ficaram de fora das questões.
2. Uma única resposta correta e inequívoca por cartão. Evite casos controversos de gramática.
3. **Matemática: confira TODAS as contas com Python** (deixe o script `check_<arquivo>.py` ao lado e rode). Números “limpos”.
4. Português: exemplos escritos por você (ou clássicos em domínio público, curtíssimos, com autor). Nada de letra de música. Norma-padrão e Acordo Ortográfico vigente.
5. Sem repetir o mesmo cartão com palavras diferentes.
6. Rode `node --check` no arquivo e um script que confira: campos t/k/f/b presentes, k válido, t existente, quantidades por tópico.

## Entrega
Responda com: caminho do arquivo, quantidade por tópico e por tipo, e confirmação das checagens.
