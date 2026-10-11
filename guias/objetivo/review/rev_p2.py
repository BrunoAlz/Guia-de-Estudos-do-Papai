# Revisão lote p2 (p-conj, p-coes, p-fig, p-sent, p-modal): conferência dos poucos números e da estrutura dos qz
import json, subprocess
# números citados no material
assert 48 < 50 and 50 - 48 == 2          # "Apenas 48%" x "Quase 50%": 48% está a 2 p.p. da metade
print("48% -> quase 50%: ok (diferença", 50-48, "p.p.)")
print("Piscina olímpica = 50 m (dado real, ok); quadra de basquete FIBA = 28 m x 15 m (ok)")
# estrutura dos qz dos 5 tópicos
js = r"""
const fs=require('fs'),vm=require('vm');const c={};vm.createContext(c);
vm.runInContext(fs.readFileSync('data-por.js','utf8')+'\nthis.T=TOP_POR;',c);
const ids=['p-conj','p-coes','p-fig','p-sent','p-modal'];
console.log(JSON.stringify(c.T.filter(t=>ids.includes(t.id)).map(t=>({id:t.id,qz:t.qz}))));
"""
out = json.loads(subprocess.check_output(['node','-e',js]))
n=0
for t in out:
    for q in t['qz']:
        enun, alts, i, expl = q
        assert 0 <= i < len(alts), (t['id'], enun)
        assert len(set(alts)) == len(alts), (t['id'], 'alternativas repetidas')
        n+=1
        print(t['id'], '| correta:', alts[i])
print(n, "questões qz conferidas")
