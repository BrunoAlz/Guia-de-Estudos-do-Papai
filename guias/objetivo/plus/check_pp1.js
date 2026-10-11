// Conferência de pp1.js segundo PLUS_SPEC.md
const fs = require('fs'), path = require('path'), vm = require('vm');
const dir = path.join(__dirname, '..'); const ctx = {}; vm.createContext(ctx);
vm.runInContext(fs.readFileSync(path.join(dir, 'data-por.js'), 'utf8') + '\nthis.TOP_POR = TOP_POR;', ctx);
const src = fs.readFileSync(path.join(__dirname, 'pp1.js'), 'utf8');
vm.runInContext(src + '\nthis.P = PLUS_P1;', ctx);
const want = ['p-impl','p-tira','p-arg','p-pub','p-gen','p-fake','p-lit','p-inter'];
const ids = new Set(ctx.TOP_POR.map(t => t.id)); let err = 0;
const bad = m => { console.log('ERRO', m); err++; };
const keys = Object.keys(ctx.P);
if (JSON.stringify(keys) !== JSON.stringify(want)) bad('ids ' + keys);
const lim = {base:[5,9], jeitos:[4,6], passo:[4,6], exs:[3,3], erros:[3,5], resumo:[4,6]};
const strs = [];
for (const id of keys) {
  if (!ids.has(id)) bad(id + ' não existe em data-por.js');
  const o = ctx.P[id];
  for (const f in lim) { const n = (o[f] || []).length; if (n < lim[f][0] || n > lim[f][1]) bad(`${id}.${f} = ${n}`); }
  if (Object.keys(o).some(k => !(k in lim))) bad(id + ' campo extra');
  o.base.forEach((b, i) => { if (!Array.isArray(b) || b.length !== 2 || !b[0] || !b[1]) bad(`${id}.base[${i}]`); strs.push(...b); });
  o.jeitos.forEach((j, i) => { for (const k of ['n','c','ex']) if (!j[k]) bad(`${id}.jeitos[${i}].${k}`); strs.push(j.n, j.c, j.ex); });
  o.exs.forEach((e, i) => { if (!e.q || !e.r || !Array.isArray(e.s) || !e.s.length) bad(`${id}.exs[${i}]`); strs.push(e.q, e.r, ...e.s); });
  o.erros.forEach((e, i) => { if (!/<b>Errado:<\/b>.*<b>Certo:<\/b>/.test(e)) bad(`${id}.erros[${i}] formato`); });
  strs.push(...o.passo, ...o.erros, ...o.resumo);
  console.log(id, Object.keys(lim).map(f => f + ':' + o[f].length).join(' '));
}
strs.forEach(s => { if (typeof s !== 'string') bad('não-string'); else if (/\$\{|`/.test(s)) bad('crase/${ em: ' + s.slice(0, 50)); });
const tags = src.match(/<\/?([a-z]+)/g) || []; const cnt = {};
tags.forEach(t => { const n = t.replace(/[<\/]/g, ''); cnt[n] = (cnt[n] || 0) + (t[1] === '/' ? -1 : 1); });
for (const t of ['b','i','table','tr','td']) if (cnt[t]) bad('tags desbalanceadas: ' + t + ' ' + cnt[t]);
console.log(err ? 'FALHOU: ' + err : 'OK: todas as checagens passaram'); process.exit(err ? 1 : 0);
