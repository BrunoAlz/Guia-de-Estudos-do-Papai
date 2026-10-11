// Conferência de plus/pp3a.js: ids, campos, quantidades, notação
const fs = require('fs'), path = require('path');
const load = (f, n) => new Function(fs.readFileSync(path.join(__dirname, f), 'utf8') + `\nreturn ${n};`)();
const TOP = load('../data-por.js', 'TOP_POR');
const P = load('pp3a.js', 'PLUS_P3A');
const WANT = ['p-per', 'p-adj', 'p-vl', 'p-reg'];
const ids = new Set(TOP.map(t => t.id));
let err = 0; const bad = m => { console.log('ERRO', m); err++; };
const keys = Object.keys(P);
if (keys.join() !== WANT.join()) bad('ids ' + keys.join());
const R = {base: [5, 9], jeitos: [4, 6], passo: [4, 6], exs: [3, 3], erros: [3, 5], resumo: [4, 6]};
for (const id of keys) {
  if (!ids.has(id)) bad(id + ' não existe em data-por.js');
  const o = P[id];
  for (const [f, [a, b]] of Object.entries(R)) {
    const n = (o[f] || []).length;
    if (n < a || n > b) bad(`${id}.${f} = ${n} fora de [${a},${b}]`);
  }
  if (Object.keys(o).some(k => !R[k])) bad(id + ' campo extra');
  o.base.forEach((p, i) => { if (!Array.isArray(p) || p.length !== 2 || !p[0] || !p[1]) bad(`${id}.base[${i}]`); });
  o.jeitos.forEach((j, i) => { for (const k of ['n', 'c', 'ex']) if (!j[k]) bad(`${id}.jeitos[${i}].${k}`); });
  o.exs.forEach((e, i) => { if (!e.q || !e.r || !Array.isArray(e.s) || e.s.length < 2) bad(`${id}.exs[${i}]`); });
  o.erros.forEach((e, i) => { if (!/^<b>Errado:<\/b>.*<b>Certo[^<]*<\/b>/.test(e)) bad(`${id}.erros[${i}] formato`); });
  const all = JSON.stringify(o);
  if (/`|\$\{/.test(all)) bad(id + ' crase/template no texto');
  const open = (all.match(/<b>/g) || []).length, close = (all.match(/<\/b>/g) || []).length;
  if (open !== close) bad(`${id} <b> desbalanceado ${open}/${close}`);
  console.log(id, Object.fromEntries(Object.keys(R).map(f => [f, o[f].length])));
}
console.log(err ? `ERROS: ${err}` : 'OK: todas as checagens passaram');
process.exit(err ? 1 : 0);
