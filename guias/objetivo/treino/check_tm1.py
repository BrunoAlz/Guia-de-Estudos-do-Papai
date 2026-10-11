"""Confere as contas e o gabarito de treino/tm1.js (TREINO_M1).

Para cada questão: calcula a resposta em Python (Fraction = exato), associa um valor
a cada alternativa (na ordem do arquivo) e confirma que exatamente UMA alternativa
bate com a resposta e que ela é a marcada em `a`. Também valida a estrutura.
Rodar: python3 check_tm1.py
"""
import json, math, os, subprocess, sys
from collections import Counter
from fractions import Fraction as F

HERE = os.path.dirname(os.path.abspath(__file__))
JS = os.path.join(HERE, 'tm1.js')
data = json.loads(subprocess.check_output(
    ['node', '-e', "const fs=require('fs');eval(fs.readFileSync(process.argv[1],'utf8')+';globalThis.T=TREINO_M1');"
     "process.stdout.write(JSON.stringify(T))", JS]))

R = lambda x: F(x).limit_denominator(10**6) if isinstance(x, float) else F(x)
SQ2 = 'r2'  # marcador simbólico para multiplos de raiz de 2

checks = []  # (t, answer, option_values, note)

# ---------- m-pct ----------
checks.append(('m-pct', F(35, 100) * 640, [F(65, 100) * 640, F(35, 10) * 640, 224, F(35, 1000) * 640, F(30, 100) * 640], 'escola 35% de 640'))
p = 1500 * F(80, 100) * F(90, 100)
checks.append(('m-pct', p, [1080, 1500 * F(70, 100), 1500 * F(80, 100), 1500 - p, 1500 * F(90, 100)], 'celular 20% e 10%'))
checks.append(('m-pct', F(250 - 200, 250) * 100, [F(50, 200) * 100, 50, F(200, 250) * 100, 20, F(250, 50)], 'variação 250->200'))
old = F(900) / F(125, 100)
assert old * F(125, 100) == 900
checks.append(('m-pct', old, [900 * F(75, 100), 720, 900 * F(125, 100), 900 * F(25, 100), 875], 'preço antes de +25%'))
up = 2000 * F(125, 100)
desc = F(up - 2000, up) * 100
assert up * (1 - desc / 100) == 2000
checks.append(('m-pct', desc, [25, 80, 75, 30, 20], 'desconto p/ voltar'))
assert up * F(75, 100) == 1875  # citado no feedback

# ---------- m-frac ----------
checks.append(('m-frac', F(2, 5) + F(1, 3), [F(3, 8), F(11, 15), F(2, 15), F(3, 15), F(11, 8)], 'pizza'))
rest = 360 - F(1, 4) * 360
tenis = F(2, 3) * rest
assert (rest, tenis) == (270, 180)
checks.append(('m-frac', rest - tenis, [360 - 90 - F(2, 3) * 360, 180, 270, 90, F(1, 3) * 360], 'dinheiro do Richard'))
checks.append(('m-frac', F(3, 2) / F(1, 4), [6, F(3, 2) * F(1, 4), 12, F(1, 4) / F(3, 2), 3], 'copos'))
checks.append(('m-frac', F(25, 100) + F(3, 5), [F(55, 100), F(28, 100), F(4, 9), F(3, 20), F(85, 100)], 'bolo'))
assert F(1, 4) + F(3, 5) == F(17, 20)
ans = F(3, 5) * F(1, 3) + F(2, 5) * F(1, 2)
assert 30 * F(3, 5) == 18 and 18 * F(1, 3) == 6 and 12 * F(1, 2) == 6 and F(12, 30) == ans
checks.append(('m-frac', ans, [F(5, 6), F(1, 5), F(2, 5), (F(1, 3) + F(1, 2)) / 2, F(1, 6)], 'óculos'))

# ---------- m-reais ----------
# afirmações: valor-verdade de cada uma
truth = [
    math.isqrt(16) ** 2 != 16,          # √16 irracional? (falso: é 4)
    False,                               # dízima periódica é racional -> afirmação falsa
    False,                               # π = 3,14 é falso
    True,                                # √2·√2 = 2 racional
    False,                               # contraexemplo √2 + (−√2) = 0
]
assert F(12, 99) == F(4, 33)
checks.append(('m-reais', True, truth, 'afirmações'))
g = F(23 - 2, 90)
assert g == F(7, 30)
# confere a dízima: 7/30 = 0,2333...
q, r, digs = divmod(7 * 10, 30)[0], (7 * 10) % 30, []
num = 7
for _ in range(8):
    num *= 10; digs.append(num // 30); num %= 30
assert digs == [2, 3, 3, 3, 3, 3, 3, 3]
checks.append(('m-reais', g, [F(23, 99), F(23, 90), F(7, 30), F(233, 1000), F(21, 99)], 'geratriz 0,2333'))
lado = math.sqrt(70)
assert 8 < lado < 9 and 8.5 ** 2 == 72.25 and lado < 8.5 and round(lado, 2) == 8.37
cls = lambda x: ('8-9 perto 8' if 8 < x < 8.5 else '8-9 perto 9' if 8.5 <= x < 9 else '7-8' if 7 < x <= 8 else x)
checks.append(('m-reais', cls(lado), ['8-9 perto 8', '8-9 perto 9', '7-8', F(70, 2), F(70, 4)], 'lado √70'))

# ---------- m-pot ----------
v = -(2 ** 4) + (-2) ** 3 + 5 ** 0
checks.append(('m-pot', v, [16 - 8 + 1, -16 + 8 + 1, -16 - 8 + 0, -16 - 8 + 5, -23], 'expressão sinais'))
# √50 + √18 − √8 = k√2 ; representa k√2 pelo valor numérico
def simp(n):
    k = max(i for i in range(1, n + 1) if n % (i * i) == 0); return k, n // (k * k)
assert simp(50) == (5, 2) and simp(18) == (3, 2) and simp(8) == (2, 2)
val = math.sqrt(50) + math.sqrt(18) - math.sqrt(8)
opts = [math.sqrt(60), 6 * math.sqrt(2), 10 * math.sqrt(2), 4 * math.sqrt(2), 6]
checks.append(('m-pot', round(val, 9), [round(x, 9) for x in opts], 'raízes'))
v = 4 * 2 ** 10
assert v == 4096
checks.append(('m-pot', v, [2 ** 40, 8 ** 10, 2 ** 12, 2 ** 14, 8 ** 40], '2^10 x4'))

# ---------- m-cient ----------
def sci_ok(m, e, target):  # notação científica válida e igual ao valor
    return 1 <= m < 10 and m * F(10) ** e == target
d = 384000
checks.append(('m-cient', True, [sci_ok(F(384, 100), 5, d), sci_ok(384, 3, d), sci_ok(F(384, 100), 6, d), sci_ok(F(384, 10), 4, d), sci_ok(F(384, 100), -5, d)], 'Terra-Lua'))
assert F(384) * 10 ** 3 == d and F(384, 10) * 10 ** 4 == d  # feedbacks dizem "valor igual"
t = F(15, 10) * 10 ** 8 / (3 * 10 ** 5)
checks.append(('m-cient', t, [50, 5000, (3 * 10 ** 5) / (F(15, 10) * 10 ** 8), 500, F(15, 10) * 10 ** 8 * 3 * 10 ** 5], 'luz Sol-Terra'))
assert (3 * 10 ** 5) / (F(15, 10) * 10 ** 8) == F(2, 1000) and F(15, 10) * 3 == F(45, 10)
n = (F(12, 10) * F(10) ** -3) / (120 * F(10) ** -9)
checks.append(('m-cient', n, [(F(12, 10) * F(10) ** -3) / (120 * F(10) ** -6), 10000, (F(12, 10) * F(10) ** -3) / (F(12, 10) * F(10) ** -9), F(12, 10) / (120 * F(10) ** -9), F(120) / F(12, 10)], 'vírus'))

# ---------- m-mmc ----------
ok = [x for x in range(10) if int(f'4{x}2') % 9 == 0]
assert ok == [3] and 432 == 9 * 48
checks.append(('m-mmc', 3, [6, 0, 3, 9, 5], 'senha 4_2'))
m = math.gcd(60, 84)
assert m == 12 and 84 // m == 7 and 60 % 6 == 0 and 84 % 6 == 0
checks.append(('m-mmc', 60 // m, [m, 84 // m, math.lcm(60, 84), 60 // 6, 5], 'sacolinhas'))
L = math.lcm(6, 8, 10)
assert L == 120 and L // 8 == 15 and L // 10 == 12
checks.append(('m-mmc', L // 6, [20, L, L // 8, L // 10, 6 * 8 * 10], 'pista'))

# ---------- comparação com o arquivo ----------
errors = []
if len(data) != len(checks):
    errors.append(f'{len(data)} questões no JS, {len(checks)} no script')
for i, (q, (t, ans, vals, note)) in enumerate(zip(data, checks), 1):
    tag = f'#{i:02d} {t} ({note})'
    if q['t'] != t: errors.append(f'{tag}: tópico no JS = {q["t"]}')
    if len(q['o']) != 5: errors.append(f'{tag}: {len(q["o"])} alternativas')
    hits = [k for k, x in enumerate(vals) if x == ans]
    if len(hits) != 1: errors.append(f'{tag}: {len(hits)} alternativas corretas {hits}')
    elif hits[0] != q['a']: errors.append(f'{tag}: correta calculada={hits[0]}, marcada a={q["a"]}')
    for k, (txt, fb) in enumerate(q['o']):
        if (k == q['a']) != (fb == ''): errors.append(f'{tag}: feedback da alt {k} inconsistente')
    for field in [q['q'], q['e']] + [s for o in q['o'] for s in o]:
        if '`' in field or '${' in field: errors.append(f'{tag}: crase/${{ no texto')
    if q['d'] not in (1, 2, 3): errors.append(f'{tag}: d inválido')
    print(f'{tag}: resposta={ans} -> alt {"ABCDE"[q["a"]]} OK' if hits == [q['a']] else f'{tag}: FALHOU')

want = {'m-pct': 5, 'm-frac': 5, 'm-reais': 3, 'm-pot': 3, 'm-cient': 3, 'm-mmc': 3}
cnt = Counter(q['t'] for q in data)
if dict(cnt) != want: errors.append(f'contagem por tópico {dict(cnt)} != {want}')
for t in want:
    lv = {q['d'] for q in data if q['t'] == t}
    if lv != {1, 2, 3}: errors.append(f'{t}: níveis {lv}')
print('Posição das corretas:', dict(Counter("ABCDE"[q['a']] for q in data)))
print('Por tópico:', dict(cnt))
if errors:
    print('\nERROS:'); [print(' -', e) for e in errors]; sys.exit(1)
print(f'\nTudo certo: {len(data)} questões conferidas.')
