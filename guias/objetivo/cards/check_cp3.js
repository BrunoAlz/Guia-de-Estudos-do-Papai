// Conferência de cards/cp3.js: campos, tipos, tópicos, quantidades, tamanho
const fs = require('fs');
const path = require('path');
const dir = __dirname;
const load = (f, name) => new Function(fs.readFileSync(path.join(dir, f), 'utf8') + `\nreturn ${name};`)();
const TOPICS = load('../data-por.js', 'TOP_POR');
const CARDS = load('cp3.js', 'CARDS_P3');
const ids = new Set(TOPICS.map(t => t.id));
const K = new Set(['regra', 'conceito', 'exemplo', 'pegadinha']);
const WANT = {'p-per':12,'p-adj':12,'p-vl':8,'p-reg':8,'p-conc':8,'p-col':8,'p-pont':8,'p-var':8,'p-form':6};
const words = s => s.replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length;
let err = 0; const cnt = {}, kinds = {}, seen = new Set();
CARDS.forEach((c, i) => {
  for (const f of ['t','k','f','b']) if (!c[f]) { console.log(i, 'falta', f); err++; }
  if (!K.has(c.k)) { console.log(i, 'k inválido', c.k); err++; }
  if (!ids.has(c.t)) { console.log(i, 't inexistente', c.t); err++; }
  if (!WANT[c.t]) { console.log(i, 't fora do módulo', c.t); err++; }
  if (words(c.f) > 25) { console.log(i, 'frente longa', words(c.f)); err++; }
  if (words(c.b) > 45) { console.log(i, 'verso longo', words(c.b)); err++; }
  if (!c.b.startsWith('<b>')) { console.log(i, 'verso não começa em negrito'); err++; }
  if (/[`]|\$\{/.test(c.f + c.b)) { console.log(i, 'crase/template'); err++; }
  if (seen.has(c.f)) { console.log(i, 'frente duplicada'); err++; } seen.add(c.f);
  cnt[c.t] = (cnt[c.t] || 0) + 1;
  kinds[c.t] = kinds[c.t] || {}; kinds[c.t][c.k] = (kinds[c.t][c.k] || 0) + 1;
});
for (const [t, n] of Object.entries(WANT)) if (cnt[t] !== n) { console.log('quantidade', t, cnt[t], '≠', n); err++; }
console.log('Total', CARDS.length);
console.table(kinds);
const tot = {}; CARDS.forEach(c => tot[c.k] = (tot[c.k] || 0) + 1); console.log('Por tipo', tot);
console.log(err ? `ERROS: ${err}` : 'OK: todas as checagens passaram');
process.exit(err ? 1 : 0);
