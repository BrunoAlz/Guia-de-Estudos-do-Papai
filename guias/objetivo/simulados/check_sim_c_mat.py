"""Confere contas, gabarito e estrutura de simulados/sim_c_mat.js (SIM_C_MAT).

Para cada questão: calcula a resposta em Python (Fraction = exato), associa um valor a
cada alternativa (na ordem do arquivo), confirma que exatamente UMA alternativa bate com
a resposta e que ela é a marcada em `a`, que o TEXTO de cada alternativa mostra o valor
calculado e que as alternativas numéricas estão em ordem crescente.
Também valida a estrutura pedida em SIMULADO_SPEC.md.
Rodar: python3 check_sim_c_mat.py
"""
import json, math, os, re, subprocess, sys
from collections import Counter
from fractions import Fraction as F

HERE = os.path.dirname(os.path.abspath(__file__))
JS = os.path.join(HERE, 'sim_c_mat.js')
data = json.loads(subprocess.check_output(
    ['node', '-e', "const fs=require('fs');eval(fs.readFileSync(process.argv[1],'utf8')+';globalThis.T=SIM_C_MAT');"
     "process.stdout.write(JSON.stringify(T))", JS]))

checks = []  # (t, resposta, valores das alternativas, ordenar?, nota)

# 1 m-pct: à vista 1200, 10 x 132
tot = 10 * 132
ans = F(tot - 1200, 1200) * 100
assert ans == 10
checks.append(('m-pct', ans, [round(F(tot - 1200, tot) * 100, 1), ans, F(132, 1200) * 100, 12, F(tot, 1200) * 100], True, 'parcelado'))

# 2 m-frac: 1º 1/3, 2º 2/5 do resto, 3º resto = 1200
T = F(1200) / ((1 - F(1, 3)) * (1 - F(2, 5)))
p1 = T / 3; p2 = F(2, 5) * (T - p1); p3 = T - p1 - p2
assert p3 == 1200 and T == 3000
e_sobra = 1200 / (1 - F(1, 3))          # 1200 = tudo após o 1º
e_sem1 = 1200 / (1 - F(2, 5))           # esqueceu o 1º
e_tot = 1200 / (1 - F(1, 3) - F(2, 5))  # 2/5 do total
checks.append(('m-frac', T, [1200, e_sobra, e_sem1, T, e_tot], True, 'prêmio'))

# 3 m-cient: 5 kg / 2e-2 g
graos = F(5000) / F(2, 100)
assert graos == F(25, 10) * 10 ** 5
checks.append(('m-cient', graos, [F(2, 100) / 5000, F(25, 10) * 10 ** 1, 5000 * F(2, 100), F(5) / F(2, 100), graos], True, 'arroz'))

# 4 m-sist: dois algarismos, soma 11, invertido = número + 27
sol = [10 * x + y for x in range(1, 10) for y in range(10) if x + y == 11 and (10 * y + x) - (10 * x + y) == 27]
assert sol == [47]
opts4 = [47, 56, 65, 74, 83]
for n in opts4[1:]:
    x, y = divmod(n, 10)
    assert not (x + y == 11 and (10 * y + x) - n == 27)
checks.append(('m-sist', sol[0], opts4, True, 'número da casa'))

# 5 m-prod: (x+3)^2 - x^2 = 81 -> perímetro 4x
xs = [x for x in range(1, 100) if (x + 3) ** 2 - x ** 2 == 81]
assert xs == [12]
x = xs[0]
assert 6 * F(27, 2) == 81  # esqueceu o 9 -> x = 13,5
checks.append(('m-prod', 4 * x, [4 * (9 - 3), 4 * 9, 4 * x, 4 * F(27, 2), 4 * (x + 3)], True, 'terreno'))

# 6 m-eq2: n(n-1)/2 = 28 -> cada time joga n-1
ns = [n for n in range(2, 100) if n * (n - 1) // 2 == 28 and n * (n - 1) % 2 == 0]
assert ns == [8]
assert sorted(r for r in range(-50, 51) if r * r - r - 56 == 0) == [-7, 8]
n = ns[0]
checks.append(('m-eq2', n - 1, [n - 1, n, 14, 28, 56], True, 'campeonato'))

# 7 m-prop: 360 km em 3h20
dist = 90 * 4
t = 3 + F(20, 60)
v = dist / t
assert v == 108 and 90 * F(6, 5) == 108
checks.append(('m-prop', v, [90 * t / 4, 90 * F(7, 6), v, dist / F(32, 10), dist / 3], True, 'ônibus'))

# 8 m-func: F = 1,8C + 32, C = 20
fF = lambda c: F(18, 10) * c + 32
checks.append(('m-func', fF(20), [F(18, 10) * 20, 20 + 32, fF(20), 20 + F(18, 10) * 32, (20 + 32) * F(18, 10)], True, 'Fahrenheit'))

# 9 m-ang: bico entre paralelas -> 40 + 35. Confere com coordenadas.
# r: y = 0 (norte), s: y = -10. A = (0,0); AP faz 40° abaixo do leste.
A = (0.0, 0.0); B = (2.0, -10.0)
dir_ap = (math.cos(math.radians(-40)), math.sin(math.radians(-40)))
dir_bp = (math.cos(math.radians(35)), math.sin(math.radians(35)))
# P = A + s*dir_ap = B + u*dir_bp
det = dir_ap[0] * (-dir_bp[1]) - dir_ap[1] * (-dir_bp[0])
s_ = ((B[0] - A[0]) * (-dir_bp[1]) - (B[1] - A[1]) * (-dir_bp[0])) / det
P = (A[0] + s_ * dir_ap[0], A[1] + s_ * dir_ap[1])
assert -10 < P[1] < 0 and P[0] > max(A[0], B[0])  # P entre as ruas e a leste de A e B
va = (A[0] - P[0], A[1] - P[1]); vb = (B[0] - P[0], B[1] - P[1])
ang = math.degrees(math.acos((va[0] * vb[0] + va[1] * vb[1]) / math.hypot(*va) / math.hypot(*vb)))
assert abs(ang - 75) < 1e-9
checks.append(('m-ang', 75, [75, 180 - 75, 180 - 40, 180 - 35, 360 - 75], True, 'bico'))

# 10 m-sem: postes 6 e 3 a 10 m: cruzamento
# poste maior em x=0, menor em x=10. Fio1: (10,3)->(0,0): y = 0.3x. Fio2: (0,6)->(10,0): y = 6 - 0.6x
xc = F(6) / (F(3, 10) + F(6, 10))
h = F(3, 10) * xc
assert h == 2 and h == F(6 * 3, 6 + 3)
for D in (4, 10, 25):  # independe da distância
    xc2 = F(6) / (F(3, D) + F(6, D)); assert F(3, D) * xc2 == 2
checks.append(('m-sem', h, [F(3, 2), F(18, 10), h, 3, F(9, 2)], True, 'postes'))

# 11 m-cart: (2,1) a (-4,9), unidade = 100 m -> km
dx, dy = -4 - 2, 9 - 1
d2 = dx * dx + dy * dy
assert math.isqrt(d2) ** 2 == d2
dkm = F(math.isqrt(d2) * 100, 1000)
checks.append(('m-cart', dkm, [F(abs(dx) * 100, 1000), dkm, F((abs(dx) + abs(dy)) * 100, 1000), F(d2 * 100, 1000), abs(dx) + abs(dy)], True, 'mapa'))

# 12 m-area: quadrado 20, pontos a 5 m girando
L, a_ = 20, 5
Pp, Q, R, S = (a_, 0), (L, a_), (L - a_, L), (0, L - a_)  # A=(0,0),B=(20,0),C=(20,20),D=(0,20)
poly = [Pp, Q, R, S]
shoe = abs(sum(poly[i][0] * poly[(i + 1) % 4][1] - poly[(i + 1) % 4][0] * poly[i][1] for i in range(4))) / F(2)
cantos = 4 * F(a_ * (L - a_), 2)
assert shoe == L * L - cantos == 250
checks.append(('m-area', shoe, [(L - 2 * a_) ** 2, cantos, F(L * L, 2), (L - a_) ** 2, shoe], True, 'jardim'))

# 13 m-unid: 5 mL/min por 24 h
ml = 5 * 60 * 24
litros = F(ml, 1000)
checks.append(('m-unid', litros, [F(5 * 60, 1000), litros, F(ml, 100), F(ml, 10), ml], True, 'torneira'))

# 14 m-media: 20 notas, média 6,5; lançou 4 em vez de 9
soma = 20 * F(65, 10)
med = (soma - 4 + 9) / 20
assert med == F(675, 100)
checks.append(('m-media', med, [F(65, 10) - F(5, 20), med, (soma + 9) / 20, F(65, 10) + F(5, 10), F(65, 10) + 5], True, 'nota corrigida'))

# 15 m-prob: múltiplo de 4 ou de 6 em 1..60
fav = [k for k in range(1, 61) if k % 4 == 0 or k % 6 == 0]
p = F(len(fav), 60)
m4 = sum(k % 4 == 0 for k in range(1, 61)); m6 = sum(k % 6 == 0 for k in range(1, 61)); m12 = sum(k % 12 == 0 for k in range(1, 61))
assert (m4, m6, m12, len(fav)) == (15, 10, 5, 20)
checks.append(('m-prob', p, [F(m12, 60), F(m6, 60), F(m4, 60), p, F(m4 + m6, 60)], True, 'fichas'))


# ---------- leitura do texto das alternativas ----------
def parse(txt):
    s = re.sub(r'(m|km)<sup>2</sup>', '', txt).replace('°F', '')  # unidade de área
    m = re.fullmatch(r'\s*\[\[(\d+)\|(\d+)\]\]\s*', s)
    if m: return F(int(m.group(1)), int(m.group(2)))
    m = re.search(r'([\d.,]+)\s*×\s*10<sup>(−?\d+)</sup>', s)
    if m:
        return F(m.group(1).replace(',', '.')) * F(10) ** int(m.group(2).replace('−', '-'))
    m = re.search(r'-?[\d][\d .]*(,\d+)?', s.replace('R$', ''))
    num = m.group(0).strip()
    if 'R$' in s or re.search(r'\d\.\d{3}', num): num = num.replace('.', '')
    return F(num.replace(' ', '').replace(',', '.'))


ORDEM = ['m-pct', 'm-frac', 'm-cient', 'm-sist', 'm-prod', 'm-eq2', 'm-prop', 'm-func',
         'm-ang', 'm-sem', 'm-cart', 'm-area', 'm-unid', 'm-media', 'm-prob']
errors = []
if len(data) != 15: errors.append(f'{len(data)} questões (esperado 15)')
if len(checks) != 15: errors.append(f'{len(checks)} checagens')
for i, (q, (t, ans, vals, ordered, note)) in enumerate(zip(data, checks), 1):
    tag = f'#{i:02d} {t} d{q["d"]} ({note})'
    if q['t'] != t or t != ORDEM[i - 1]: errors.append(f'{tag}: tópico {q["t"]} fora da ordem')
    if len(q['o']) != 5: errors.append(f'{tag}: {len(q["o"])} alternativas')
    if not (isinstance(q['a'], int) and 0 <= q['a'] <= 4): errors.append(f'{tag}: a inválido')
    vals = [F(v) if not isinstance(v, F) else v for v in vals]
    hits = [k for k, x in enumerate(vals) if x == ans]
    if len(hits) != 1: errors.append(f'{tag}: {len(hits)} alternativas corretas {hits}')
    elif hits[0] != q['a']: errors.append(f'{tag}: correta calculada={hits[0]}, marcada a={q["a"]}')
    shown = [parse(o[0]) for o in q['o']]
    if shown != vals: errors.append(f'{tag}: texto das alternativas {[str(x) for x in shown]} != calculado {[str(x) for x in vals]}')
    if ordered:
        fl = [float(x) for x in shown]
        if fl != sorted(fl) or len(set(fl)) != 5: errors.append(f'{tag}: alternativas fora de ordem crescente {fl}')
    for k, (txt, fb) in enumerate(q['o']):
        if (k == q['a']) != (fb == ''): errors.append(f'{tag}: feedback da alt {k} inconsistente')
    if len({o[0] for o in q['o']}) != 5: errors.append(f'{tag}: alternativas repetidas')
    fields = [q['q'], q['e'], q.get('tx', ''), q.get('tt', '')] + [s for o in q['o'] for s in o]
    for f in fields:
        if '`' in f or '${' in f: errors.append(f'{tag}: crase/${{ no texto')
        if re.search(r'todas as anteriores|nenhuma das anteriores', f, re.I): errors.append(f'{tag}: todas/nenhuma')
        if f.count('[[') != f.count(']]'): errors.append(f'{tag}: [[ ]] desbalanceado')
        if f.count('<sup>') != f.count('</sup>'): errors.append(f'{tag}: <sup> desbalanceado')
    if q['d'] not in (1, 2, 3): errors.append(f'{tag}: d inválido')
    ok = len(hits) == 1 and hits[0] == q['a']
    print(f'{tag}: resposta={ans} -> alt {"ABCDE"[q["a"]]} {"OK" if ok else "FALHOU"}')

dif = Counter(q['d'] for q in data)
let = Counter('ABCDE'[q['a']] for q in data)
if dict(dif) != {1: 5, 2: 6, 3: 4}: errors.append(f'dificuldade {dict(dif)} != 5/6/4')
if set(let) != set('ABCDE') or any(not 2 <= c <= 4 for c in let.values()): errors.append(f'letras {dict(let)}')
print('Dificuldade:', dict(sorted(dif.items())))
print('Letras corretas:', dict(sorted(let.items())))
if errors:
    print('\nERROS:'); [print(' -', e) for e in errors]; sys.exit(1)
print(f'\nTudo certo: {len(data)} questões conferidas.')
