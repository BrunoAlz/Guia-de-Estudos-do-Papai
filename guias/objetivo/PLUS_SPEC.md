# Especificação da REVISÃO TURBINADA (Missão Bolsa 100%)

Richard (9º ano) faz no sábado 17/10 o Desafio do Colégio Objetivo (15 questões de Português + 15 de Matemática, sem calculadora).
Ele disse ao pai que **tem dificuldade de lembrar coisas básicas**. O pai pediu para a revisão de cada tópico ganhar
**muito mais parte conceitual, exemplos, explicações e MACETES** — sobretudo os "jeitos espertos" de fazer conta de cabeça.
Exemplo do próprio pai (é o espírito de tudo):

> 30% de 100? Penso no mais simples: 10% de 100 é 10 (é só "andar a vírgula" uma casa). 30% é 3 vezes isso: 3 × 10 = 30.

Cada tópico já tem, em `data-mat.js` / `data-por.js`: `hook`, `body` (Entenda), `rule` (Regra de ouro), `ex` (exemplos), `trap`, `tip`, `qz`;
e em `data-macetes.js` um mnemônico curto. **Leia tudo isso do tópico antes de escrever.** O seu conteúdo vem SOMAR, não repetir:
não copie frases do body/rule/ex; aprofunde, explique de outro jeito, dê os atalhos.

## Formato
Arquivo JS com UMA constante (nome indicado na tarefa), um objeto indexado pelo id do tópico:

```js
const PLUS_M1 = {
 'm-pct': {
  base: [
   [`Porcentagem = "por cem"`, `35% é 35 de cada 100 → [[35|100]] = 0,35. Ex.: 35% da turma de 100 alunos = 35 alunos.`],
   ...
  ],
  jeitos: [
   {n:`Decomposição pelos 10%`, c:`10% de qualquer número = anda a vírgula uma casa para a esquerda. Depois monte o que precisa somando pedaços.`,
    ex:`30% de 240 → 10% = 24 → 3 × 24 = <b>72</b>.<br>15% de 80 → 10% = 8, 5% = 4 (metade) → 8 + 4 = <b>12</b>.`},
   ...
  ],
  passo: [`Leia e grife: é "x% DE", "aumento", "desconto" ou "quanto % variou"?`, ...],
  exs: [ {q:`...`, s:[`passo 1`, `passo 2`], r:`resposta`}, ... ],
  erros: [`<b>Errado:</b> somar 10% + 10% = 20%. <b>Certo:</b> 1,1 × 1,1 = 1,21 → 21%.`, ...],
  resumo: [`linha curta`, ...]
 },
 ...
};
```

### Campos (todos obrigatórios)
- **base** — "O básico que não pode esquecer". 5 a 9 pares `[conceito, explicação]`. Definições e fatos fundamentais
  explicados do zero, cada um com um mini-exemplo concreto. Inclua os PRÉ-REQUISITOS que um aluno esquece
  (ex.: em equação do 2º grau: o que é raiz, regra de sinais no Δ, √ de quadrados perfeitos; em Pitágoras: quadrados de 1 a 20,
  o que é hipotenusa e como achá-la; em crase: o que é artigo, o que é preposição; em orações: o que é verbo/oração).
- **jeitos** — "Jeitos espertos de pensar" (macetes). Matemática: **4 a 7** atalhos de cálculo mental / estratégias de resolução,
  cada um com `n` (nome curto e memorável), `c` (como funciona, 1–3 frases) e `ex` (1 a 3 contas feitas, passo a passo, com resultado em <b>).
  Exemplos do tipo que queremos: decomposição pelos 10%/5%/1%; "x% de y = y% de x" (8% de 25 = 25% de 8 = 2); multiplicar por 5 = ×10 ÷2;
  dividir por 0,25 = ×4; simplificar antes de multiplicar; testar as alternativas; ternos pitagóricos (3-4-5, 5-12-13, 8-15-17 e múltiplos);
  soma e produto das raízes; estimar e eliminar alternativas absurdas; desenhar; regra de três "seta"; etc.
  Português: **4 a 6** testes práticos para reconhecer/decidir (ex.: "troque por 'ao' para testar a crase", "troque a conjunção por
  'mas' / 'porque' para ver a relação", "tire a oração entre vírgulas: o sentido muda? então é explicativa", "pergunte quem? ao verbo
  para achar o sujeito"), cada um com exemplo resolvido.
- **passo** — "Passo a passo para resolver": 4 a 6 passos curtos — um roteiro que serve para QUALQUER questão do tópico na prova.
- **exs** — 3 exemplos resolvidos NOVOS (não repetir os de `ex`, `qz`, `treino/*.js`, `cards/*.js`, `simulados/*.js` do tópico), do fácil
  para o difícil, estilo prova. Em `s`, mostre o **raciocínio de quem pensa** ("Primeiro eu…", "Uso o macete…"), aplicando os jeitos acima
  sempre que der. `r` = resposta final.
- **erros** — "Erros que tiram ponto": 3 a 5 itens no formato `<b>Errado:</b> … <b>Certo:</b> …`.
- **resumo** — "Resumo em 30 segundos": 4 a 6 linhas curtíssimas para ler na véspera (pode usar → e símbolos).

### Linguagem e notação
- Fale com o Richard (você), 14 anos: frases curtas, clareza absoluta, tom animado sem infantilizar. Nada de jargão sem explicar.
- Notação suportada: `[[a|b]]` = fração; `√{x}` = raiz com barra; `<sup>2</sup>`, `<sub>`, `<b>`, `<i>`, `<br>`, `&lt;` para "menor que".
  Tabelas pequenas permitidas: `<table class="tb">…</table>`. Use × para multiplicar, ÷ para dividir, − (sinal de menos), vírgula decimal.
- Strings com crase de template (`` `...` ``); **nunca** use crase (`` ` ``) nem `${` dentro do texto.

## Regras de qualidade (obrigatórias — a nota dele depende disso)
1. **Zero erros**: conceito correto, terminologia da norma/BNCC, contas certas. Português: norma-padrão, sem casos controversos;
   não cite letras de música nem trechos com direitos autorais (frases suas ou de autores clássicos em domínio público).
2. **Matemática: confira TODAS as contas com Python** — crie e EXECUTE `plus/check_<arquivo>.py` que recalcula cada número
   que aparece nos `jeitos.ex`, `exs` e `base`. Corrija o que não bater.
3. Rode `node --check` no arquivo e um script que confere: todos os ids de tópico do seu bloco presentes (exatamente os ids de data-*.js),
   e as quantidades de cada campo dentro dos limites.
4. Seja generoso e concreto: o objetivo é que, depois de ler, ele consiga resolver sozinho e LEMBRAR.

## Entrega
Responda com o caminho do arquivo, os ids cobertos e a confirmação das checagens (resumo curto).
