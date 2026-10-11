"""Confere contas, gabarito e estrutura de simulados/sim_a_mat.js (SIM_A_MAT).

Para cada questão: calcula a resposta em Python (Fraction = exato), associa um valor a
cada alternativa (na ordem do arquivo), confirma que exatamente UMA alternativa bate com
a resposta e que ela é a marcada em `a`, e que as numéricas estão em ordem crescente.
Também valida a estrutura pedida em SIMULADO_SPEC.md.
Rodar: python3 check_sim_a_mat.py
"""
import json, math, os, re, subprocess, sys
from collections import Counter
from fractions import Fraction as F
from itertools import product

HERE = os.path.dirname(os.path.abspath(__file__))
JS = os.path.join(HERE, 'sim_a_mat.js')
data = json.loads(subprocess.check_output(
    ['node', '-e', "const fs=require('fs');eval(fs.readFileSync(process.argv[1],'utf8')+';globalThis.T=SIM_A_MAT');"
     "process.stdout.write(JSON.stringify(T))", JS]))

checks = []  # (t, d, resposta, valores das alternativas, ordenar?, nota)

# 1 m-pct: 14 de 40
checks.append(('m-pct', 1, F(14, 40) * 100, [14, 40 - 14, 35, 40, F(26, 40) * 100], True, '14 de 40'))

# 2 m-frac: 3/4 -> 1/2 gastando 600
cap = F(600) / (F(3, 4) - F(1, 2))
assert F(3, 4) * cap - 600 == F(1, 2) * cap
checks.append(('m-frac', 2, cap, [600 * F(1, 4), 600 / F(3, 4), 600 / F(1, 2), F(3, 4) * cap, 2400], True, 'caixa-d\'água'))

# 3 m-pot: (0,5)^-2 + 8^(2/3) - 2^0
v = F(1, 2) ** -2 + 4 - 1
assert round(8 ** (2 / 3), 9) == 4
checks.append(('m-pot', 3, v, [-F(1, 4) + 4 - 1, F(1, 4) + 4 - 1, 4 + 4 - 2, 7, 4 + 4 - 0], True, 'potências'))

# 4 m-eq1: 3x + 84 = 150
x = F(150 - 84, 3)
assert 3 * x + 84 == 150
checks.append(('m-eq1', 4, x, [22, F(150, 4), F(150, 3), 150 - 84, F(150 + 84, 3)], True, 'cadernos'))

# 5 m-sist: m + j = 50, m - 5 = 4(j - 5)
sol = [(m, 50 - m) for m in range(51) if m - 5 == 4 * ((50 - m) - 5)]
assert sol == [(37, 13)]
m, j = sol[0]
err = [(mm, 50 - mm) for mm in range(51) if mm == 4 * ((50 - mm) - 5)]  # esqueceu o -5 da mãe
assert err == [(36, 14)]
checks.append(('m-sist', 5, m, [j - 5, j, m - 5, err[0][0], 37], True, 'idades'))

# 6 m-eq2: 600/(n-2) - 600/n = 25
ns = [n for n in range(3, 200) if F(600, n - 2) - F(600, n) == 25]
assert ns == [8]
roots = sorted(r for r in range(-50, 51) if r * r - 2 * r - 48 == 0)
assert roots == [-6, 8]
checks.append(('m-eq2', 6, ns[0], [ns[0] - 2, 8, ns[0] + 2, F(600, 25), 48], True, 'van'))

# 7 m-prop: 6 impressoras, 360 em 5 h -> 8 impressoras em 3 h
rate = F(360, 6 * 5)
ans = rate * 8 * 3
checks.append(('m-prop', 7, ans, [360 * F(6, 8) * F(3, 5), 360 * F(3, 5), 288, 360 * F(8, 6), 360 * F(8, 6) * F(5, 3)], True, 'impressoras'))

# 8 m-func: y = 90x + 60 -> compara as fórmulas em vários x
real = lambda x: 90 * x + 60
forms = [lambda x: 60 * x + 90, lambda x: 90 * x + 60, lambda x: 150 * x, lambda x: 90 * x - 60, lambda x: x + 150]
sig = lambda f: tuple(f(x) for x in range(0, 13))
checks.append(('m-func', 8, sig(real), [sig(f) for f in forms], False, 'academia'))

# 9 m-ang: agudo 48 -> obtuso
checks.append(('m-ang', 9, 180 - 48, [90 - 48, 48, 90, 132, 360 - 48], True, 'paralelas'))

# 10 m-sem: quadrado inscrito no triângulo b=12, h=8: x/12 = (8-x)/8
xq = F(12 * 8, 12 + 8)
assert xq / 12 == (8 - xq) / 8
troca = F(64, 20)  # x/8 = (8-x)/12 -> 12x = 64 - 8x
assert troca / 8 == (8 - troca) / 12
# conferindo os feedbacks: largura do triângulo na altura y é 12*(8-y)/8
larg = lambda y: F(12) * (8 - y) / 8
assert larg(4) == 6 and larg(6) == 3 and larg(xq) == xq
checks.append(('m-sem', 10, xq, [troca, F(8, 2), F(24, 5), F(12, 2), F(12 + 8, 2)], True, 'quadrado inscrito'))

# 11 m-pit: diagonal da caixa 12 x 4 x 3
D2 = 12 ** 2 + 4 ** 2 + 3 ** 2
assert math.isqrt(D2) ** 2 == D2
opts = [math.sqrt(4 ** 2 + 3 ** 2), 12, 4 * math.sqrt(10), 13, 12 + 4 + 3]
assert abs(4 * math.sqrt(10) - math.sqrt(12 ** 2 + 4 ** 2)) < 1e-12
checks.append(('m-pit', 11, round(math.sqrt(D2), 9), [round(o, 9) for o in opts], True, 'caixa'))

# 12 m-area: folha = 2*(quarto de círculo - triângulo), lado 10, pi = 3,14
PI = F(314, 100)
quarto = PI * 100 / 4
tri = F(10 * 10, 2)
folha = 2 * (quarto - tri)
checks.append(('m-area', 12, folha, [100 - quarto, quarto - tri, 100 - folha, F(57), quarto], True, 'folha'))
# confere com integração numérica (pi real): folha = (pi/2 - 1)*100
N = 2000; cnt = 0
for i in range(N):
    for k in range(N):
        px, py = (i + .5) * 10 / N, (k + .5) * 10 / N
        if px * px + py * py <= 100 and (px - 10) ** 2 + (py - 10) ** 2 <= 100:
            cnt += 1
area_num = cnt * (10 / N) ** 2
assert abs(area_num - (math.pi / 2 - 1) * 100) < 0.05, area_num

# 13 m-graf: maior aumento percentual
cons = [10, 14, 15, 20, 18, 22]
meses = ['Fevereiro', 'Março', 'Abril', 'Maio', 'Junho']
var = [F(cons[i] - cons[i - 1], cons[i - 1]) for i in range(1, 6)]
best = meses[max(range(5), key=lambda i: var[i])]
assert sorted(var, reverse=True)[0] > sorted(var, reverse=True)[1]
assert [cons[i] - cons[i - 1] for i in range(1, 6)] == [4, 1, 5, -2, 4]  # abril = maior absoluto
assert max(cons) == 22 and var[0] == F(2, 5) and var[2] == F(1, 3)
checks.append(('m-graf', 13, best, meses, False, 'água'))

# 14 m-media: moda da tabela
freq = {0: 5, 1: 9, 2: 4, 3: 2}
moda = max(freq, key=freq.get)
assert list(freq.values()).count(max(freq.values())) == 1
media = F(sum(k * v for k, v in freq.items()), sum(freq.values()))
assert media == F(115, 100)
checks.append(('m-media', 14, moda, [0, 1, media, 2, 9], True, 'irmãos'))

# 15 m-prob: Ana > Bia com dois dados
casos = list(product(range(1, 7), repeat=2))
p = F(sum(a > b for a, b in casos), 36)
emp = F(sum(a == b for a, b in casos), 36)
checks.append(('m-prob', 15, p, [emp, F(5, 12), F(1, 2), F(sum(a >= b for a, b in casos), 36), 1 - emp], True, 'dados'))

# ---------- comparação com o arquivo ----------
ORDEM = ['m-pct', 'm-frac', 'm-pot', 'm-eq1', 'm-sist', 'm-eq2', 'm-prop', 'm-func',
         'm-ang', 'm-sem', 'm-pit', 'm-area', 'm-graf', 'm-media', 'm-prob']
errors = []
if len(data) != 15: errors.append(f'{len(data)} questões (esperado 15)')
if len(checks) != 15: errors.append(f'{len(checks)} checagens')
for i, (q, (t, n, ans, vals, ordered, note)) in enumerate(zip(data, checks), 1):
    tag = f'#{i:02d} {t} d{q["d"]} ({note})'
    if q['t'] != t or t != ORDEM[i - 1]: errors.append(f'{tag}: tópico {q["t"]} fora da ordem')
    if len(q['o']) != 5: errors.append(f'{tag}: {len(q["o"])} alternativas')
    if not (isinstance(q['a'], int) and 0 <= q['a'] <= 4): errors.append(f'{tag}: a inválido')
    hits = [k for k, x in enumerate(vals) if x == ans]
    if len(hits) != 1: errors.append(f'{tag}: {len(hits)} alternativas corretas {hits}')
    elif hits[0] != q['a']: errors.append(f'{tag}: correta calculada={hits[0]}, marcada a={q["a"]}')
    if ordered:
        fl = [float(x) for x in vals]
        if fl != sorted(fl) or len(set(fl)) != 5: errors.append(f'{tag}: alternativas fora de ordem crescente {fl}')
    for k, (txt, fb) in enumerate(q['o']):
        if (k == q['a']) != (fb == ''): errors.append(f'{tag}: feedback da alt {k} inconsistente')
    if len({o[0] for o in q['o']}) != 5: errors.append(f'{tag}: alternativas repetidas')
    fields = [q['q'], q['e'], q.get('tx', ''), q.get('tt', '')] + [s for o in q['o'] for s in o]
    for f in fields:
        if '`' in f or '${' in f: errors.append(f'{tag}: crase/${{ no texto')
        if re.search(r'todas as anteriores|nenhuma das anteriores', f, re.I): errors.append(f'{tag}: todas/nenhuma')
    if q['d'] not in (1, 2, 3): errors.append(f'{tag}: d inválido')
    ok = len(hits) == 1 and hits[0] == q['a']
    print(f'{tag}: resposta={ans if not isinstance(ans, tuple) else "y=90x+60"} -> alt {"ABCDE"[q["a"]]} {"OK" if ok else "FALHOU"}')

dif = Counter(q['d'] for q in data)
let = Counter('ABCDE'[q['a']] for q in data)
if dict(dif) != {1: 5, 2: 6, 3: 4}: errors.append(f'dificuldade {dict(dif)} != 5/6/4')
if set(let) != set('ABCDE') or any(not 2 <= c <= 4 for c in let.values()): errors.append(f'letras {dict(let)}')
print('Dificuldade:', dict(sorted(dif.items())))
print('Letras corretas:', dict(sorted(let.items())))
if errors:
    print('\nERROS:'); [print(' -', e) for e in errors]; sys.exit(1)
print(f'\nTudo certo: {len(data)} questões conferidas.')
