// Conferência de cp1.js segundo CARDS_SPEC.md
const fs = require('fs'), path = require('path'), vm = require('vm');
const dir = path.join(__dirname, '..');
const ctx = {};
vm.createContext(ctx);
vm.runInContext(fs.readFileSync(path.join(dir, 'data-por.js'), 'utf8') + '\nthis.TOP_POR = TOP_POR;', ctx);
vm.runInContext(fs.readFileSync(path.join(__dirname, 'cp1.js'), 'utf8') + '\nthis.CARDS = CARDS_P1;', ctx);
const ids = new Set(ctx.TOP_POR.map(t => t.id));
const K = ['regra', 'conceito', 'conta', 'exemplo', 'pegadinha'];
const want = { 'p-impl': 12, 'p-tira': 12, 'p-arg': 12, 'p-pub': 12, 'p-gen': 8, 'p-fake': 8, 'p-lit': 8, 'p-inter': 8 };
const words = s => s.replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length;
let err = 0; const byT = {}, byK = {}, byTK = {}; const seen = new Set();
ctx.CARDS.forEach((c, i) => {
  for (const f of ['t', 'k', 'f', 'b']) if (!c[f] || typeof c[f] !== 'string') { console.log('#' + i, 'campo faltando', f); err++; }
  if (!K.includes(c.k)) { console.log('#' + i, 'k inválido', c.k); err++; }
  if (c.k === 'conta') { console.log('#' + i, 'conta em Português'); err++; }
  if (!ids.has(c.t)) { console.log('#' + i, 't inexistente', c.t); err++; }
  if (!(c.t in want)) { console.log('#' + i, 't fora do P1', c.t); err++; }
  if (!/^<b>/.test(c.b)) { console.log('#' + i, 'verso não começa em negrito'); err++; }
  if (words(c.f) > 28) { console.log('#' + i, 'frente longa', words(c.f)); err++; }
  if (words(c.b) > 48) { console.log('#' + i, 'verso longo', words(c.b)); err++; }
  if (/\$\{|`/.test(c.f + c.b)) { console.log('#' + i, 'crase ou ${'); err++; }
  if (seen.has(c.f)) { console.log('#' + i, 'frente duplicada'); err++; } seen.add(c.f);
  byT[c.t] = (byT[c.t] || 0) + 1; byK[c.k] = (byK[c.k] || 0) + 1;
  byTK[c.t] = byTK[c.t] || {}; byTK[c.t][c.k] = (byTK[c.t][c.k] || 0) + 1;
});
for (const t in want) if (byT[t] !== want[t]) { console.log('quantidade', t, byT[t], '≠', want[t]); err++; }
console.log('Total:', ctx.CARDS.length);
for (const t in byTK) console.log(t, byT[t], JSON.stringify(byTK[t]));
console.log('Por tipo:', JSON.stringify(byK));
console.log(err ? 'FALHOU: ' + err + ' erro(s)' : 'OK: todas as checagens passaram');
process.exit(err ? 1 : 0);
