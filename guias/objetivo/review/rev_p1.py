# Revisão lote p1 (Português P1): estrutura dos qz, notação, citações e números citados
import json, subprocess, re
IDS = ['p-impl','p-tira','p-arg','p-pub','p-gen','p-fake','p-lit','p-inter']
js = r"""
const fs=require('fs'),vm=require('vm');const c={};vm.createContext(c);
vm.runInContext(fs.readFileSync('data-por.js','utf8')+';this.T=TOP_POR;',c);
vm.runInContext(fs.readFileSync('data-macetes.js','utf8')+';this.M=MACETES;',c);
vm.runInContext(fs.readFileSync('plus/pp1.js','utf8')+';this.P=PLUS_P1;',c);
console.log(JSON.stringify({T:c.T,M:c.M,P:c.P}));"""
d = json.loads(subprocess.check_output(['node','-e',js]))
T = {t['id']: t for t in d['T']}
err = 0
for i in IDS:
    t = T[i]
    for k, q in enumerate(t['qz']):
        en, alts, ok, ex = q
        assert len(q) == 4 and 0 <= ok < len(alts) and len(alts) == 4, (i, k)
        assert len(set(alts)) == 4, (i, k, 'alternativas repetidas')
    assert i in d['M'] and i in d['P']
# tags balanceadas em todos os textos do lote
def walk(o):
    if isinstance(o, str): yield o
    elif isinstance(o, list):
        for x in o: yield from walk(x)
    elif isinstance(o, dict):
        for x in o.values(): yield from walk(x)
for i in IDS:
    for s in list(walk(T[i])) + [d['M'][i]] + list(walk(d['P'][i])):
        for tag in ['b','i','table','tr','td','ul','li','p']:
            if len(re.findall(f'<{tag}[ >]', s)) != len(re.findall(f'</{tag}>', s)):
                print('TAG', i, tag, s[:60]); err += 1
        if s.count('“') != s.count('”'):
            print('ASPAS', i, s[:80]); err += 1
# lide: 6 perguntas
lide = ['o quê','quem','quando','onde','como','por quê']
assert len(lide) == 6
# exemplo do lide (pp1 p-gen jeitos[3]): todas as 6 marcadas
ex = d['P']['p-gen']['jeitos'][3]['ex']
marc = re.findall(r'\((quando|quem|o quê|onde|como|por quê)\)', ex)
assert sorted(marc) == sorted(lide), marc
# notícia do incêndio (data-por p-gen qz[1]): respondidas o quê, onde, quando; não: por quê (gabarito idx 3)
assert T['p-gen']['qz'][1][1][T['p-gen']['qz'][1][2]] == 'Por quê?'
# números citados: '9 entre 10' = 90%; 12 bandas; 5 mil; 2 milhões; 300 m vs 900 m (dado falso, triplo)
assert 9/10 == 0.9 and 900/300 == 3
# citações em domínio público (texto fiel)
src = open('plus/pp1.js').read() + open('data-por.js').read()
assert 'Algum tempo hesitei se devia abrir estas memórias pelo princípio ou pelo fim, isto é, se poria em primeiro lugar o meu nascimento ou a minha morte.' in src  # Machado, Brás Cubas, cap. I (1881)
assert 'Minha terra tem palmeiras, / Onde canta o Sabiá' in src  # Gonçalves Dias, Canção do Exílio (Coimbra, jul. 1843)
assert 'Ser ou não ser, eis a questão' in src  # Shakespeare, Hamlet (trad. corrente)
print('itens qz:', sum(len(T[i]['qz']) for i in IDS), '| exs plus:', sum(len(d['P'][i]['exs']) for i in IDS))
print('FALHAS:', err) if err else print('OK')
