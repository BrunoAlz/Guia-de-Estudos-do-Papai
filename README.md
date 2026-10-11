# Guia de Estudos do Papai

Site: https://guia-de-estudos-do-papai.vercel.app

## Como o site funciona
- `site/` — o que vai para a Vercel: `index.html` (casca do hub), uma casca por guia (`2gm.html`, `geo3.html`, `objetivo.html`) e `vercel.json`.
  Cada casca baixa a página completa do Supabase Storage (`guias/<slug>.html`) e faz `document.write`.
- `guias/` — as páginas completas que ficam no Storage (bucket público `guias`): `hub.html`, `2gm.html`, `geo3.html`, `objetivo.html`.
  Atualizar conteúdo = reenviar o arquivo ao Storage (sem redeploy).
- Ranking: tabelas `guias` e `ranking` no Supabase (`htooiquctobyweffsydx`), acessadas só por funções RPC
  (`submit_score`, `get_ranking`, `delete_score`, `name_available`).

## Missão Bolsa 100% (Prova do Objetivo)
- Fonte: `guias/objetivo/app.html` (interface) + `data-mat.js` e `data-por.js` (conteúdo).
- Montar: `python3 tools/build_objetivo.py` → `guias/objetivo/dist/objetivo.html` (confere sintaxe, gabaritos e calcula a pontuação máxima).
- Testar: `python3 tools/test_objetivo.py guias/objetivo/dist/objetivo.html <pasta-prints>`.
- Ao mudar o número de tópicos/questões, atualizar `max_points` em `guias` (id `objetivo`) e o `max` no `hub.html`.
- Envio ao Storage: as políticas `tmp_guias_ins/upd/sel` em `storage.objects` ficam desativadas (`false`); reative-as só durante o envio.
