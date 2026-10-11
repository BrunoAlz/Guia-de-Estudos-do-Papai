# Revisão lote "tp" (treino/tp1-3.js): estrutura + números citados
import json, subprocess, re, os
base = os.path.join(os.path.dirname(__file__), '..', 'treino')
def load(f, name):
    js = open(os.path.join(base, f), encoding='utf-8').read() + f"\nconsole.log(JSON.stringify({name}));"
    return json.loads(subprocess.run(['node','-e',js],capture_output=True,text=True,check=True).stdout)
tot = 0
for f, n in [('tp1.js','TREINO_P1'),('tp2.js','TREINO_P2'),('tp3.js','TREINO_P3')]:
    qs = load(f, n)
    for i, q in enumerate(qs):
        tot += 1
        assert len(q['o']) == 5, (f, i)
        assert 0 <= q['a'] < 5, (f, i)
        empty = [k for k, (_, fb) in enumerate(q['o']) if fb == '']
        assert empty == [q['a']], (f, i, empty, q['a'])  # só a correta sem feedback
        assert len({t for t, _ in q['o']}) == 5, (f, i)
        for s in [q.get('tx',''), q['q'], q['e']] + [x for o in q['o'] for x in o]:
            for tag in ['b','i','ol','li']:
                assert s.count(f'<{tag}>') == s.count(f'</{tag}>'), (f, i, tag, s[:60])
    print(f, len(qs), 'questões OK; gabaritos:', [q['a'] for q in qs])
print('total', tot)
# números citados
assert round(5.00 - 4.40, 2) == 0.60  # tp1 p-gen: aumento de R$ 4,40 -> R$ 5,00 (não há conta no texto, só o valor)
print('números: OK (sem contas a refazer além dos valores citados)')
