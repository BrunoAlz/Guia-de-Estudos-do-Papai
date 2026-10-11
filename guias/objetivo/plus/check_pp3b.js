// Conferência de plus/pp3b.js: ids, campos, quantidades, notação
const fs = require('fs'), path = require('path');
const load = (f, n) => new Function(fs.readFileSync(path.join(__dirname, f), 'utf8') + `\nreturn ${n};`)();
const TOP = load('../data-por.js', 'TOP_POR');
const P = load('pp3b.js', 'PLUS_P3B');
const WANT = ['p-conc','p-col','p-pont','p-var','p-form'];
const ids = new Set(TOP.map(t => t.id));
let err = 0; const bad = m => { console.log('ERRO', m); err++; };
const keys = Object.keys(P);
if (JSON.stringify(keys.sort()) !== JSON.stringify([...WANT].sort())) bad('ids: ' + keys);
const rng = (id, f, n, a, b) => { if (n < a || n > b) bad(`${id}.${f} = ${n} (esperado ${a}–${b})`); };
const chk = (id, s) => { if (typeof s !== 'string' || !s.trim()) bad(id + ' string vazia'); else if (/[`]|\$\{/.test(s)) bad(id + ' crase/template'); };
for (const id of WANT) {
  const t = P[id]; if (!t) continue;
  if (!ids.has(id)) bad('id inexistente ' + id);
  for (const f of ['base','jeitos','passo','exs','erros','resumo']) if (!Array.isArray(t[f])) bad(`${id} falta ${f}`);
  rng(id,'base',t.base.length,5,9); rng(id,'jeitos',t.jeitos.length,4,6); rng(id,'passo',t.passo.length,4,6);
  rng(id,'exs',t.exs.length,3,3); rng(id,'erros',t.erros.length,3,5); rng(id,'resumo',t.resumo.length,4,6);
  t.base.forEach(b => { if (b.length !== 2) bad(id + ' base par'); b.forEach(x => chk(id, x)); });
  t.jeitos.forEach(j => ['n','c','ex'].forEach(k => chk(id + ' jeito.' + k, j[k])));
  t.passo.forEach(x => chk(id, x)); t.resumo.forEach(x => chk(id, x));
  t.exs.forEach(e => { chk(id, e.q); chk(id, e.r); if (!Array.isArray(e.s) || !e.s.length) bad(id + ' exs.s'); else e.s.forEach(x => chk(id, x)); });
  t.erros.forEach(x => { chk(id, x); if (!/<b>Errado:<\/b>.*<b>Certo:<\/b>/.test(x)) bad(id + ' formato erro'); });
  console.log(id, Object.fromEntries(['base','jeitos','passo','exs','erros','resumo'].map(f => [f, t[f].length])));
}
console.log(err ? `ERROS: ${err}` : 'OK: todas as checagens passaram'); process.exit(err ? 1 : 0);
