// Conferência de pp2.js segundo PLUS_SPEC.md
const fs = require('fs'), path = require('path'), vm = require('vm');
const dir = path.join(__dirname, '..');
const ctx = {}; vm.createContext(ctx);
vm.runInContext(fs.readFileSync(path.join(dir, 'data-por.js'), 'utf8') + '\nthis.TOP_POR = TOP_POR;', ctx);
const src = fs.readFileSync(path.join(__dirname, 'pp2.js'), 'utf8');
vm.runInContext(src + '\nthis.P = PLUS_P2;', ctx);
const want = ctx.TOP_POR.filter(t => t.mod === 'P2').map(t => t.id);
const got = Object.keys(ctx.P);
let err = 0;
const lim = { base: [5, 9], jeitos: [4, 6], passo: [4, 6], exs: [3, 3], erros: [3, 5], resumo: [4, 6] };
if (JSON.stringify([...want].sort()) !== JSON.stringify([...got].sort())) { console.log('ids diferentes', want, got); err++; }
for (const id of got) {
  const o = ctx.P[id];
  for (const f in lim) {
    const n = Array.isArray(o[f]) ? o[f].length : -1;
    if (n < lim[f][0] || n > lim[f][1]) { console.log(id, f, n, 'fora de', lim[f]); err++; }
  }
  o.base.forEach((b, i) => { if (!Array.isArray(b) || b.length !== 2 || !b[0] || !b[1]) { console.log(id, 'base', i); err++; } });
  o.jeitos.forEach((j, i) => { if (!j.n || !j.c || !j.ex) { console.log(id, 'jeito', i); err++; } });
  o.exs.forEach((e, i) => { if (!e.q || !Array.isArray(e.s) || !e.s.length || !e.r) { console.log(id, 'ex', i); err++; } });
  o.erros.forEach((e, i) => { if (!/<b>Errado:<\/b>.*<b>Certo:<\/b>/.test(e)) { console.log(id, 'erro fmt', i); err++; } });
  const all = JSON.stringify(o);
  if (/\$\{|`/.test(all)) { console.log(id, 'crase ou ${'); err++; }
  const tb = (all.match(/<table/g) || []).length, te = (all.match(/<\/table>/g) || []).length;
  if (tb !== te) { console.log(id, 'tabela desbalanceada'); err++; }
  console.log(id, Object.keys(lim).map(f => f + ':' + o[f].length).join(' '));
}
console.log(err ? 'FALHOU: ' + err + ' erro(s)' : 'OK: todas as checagens passaram');
process.exit(err ? 1 : 0);
