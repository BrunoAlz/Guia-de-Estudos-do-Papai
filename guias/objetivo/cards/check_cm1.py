"""Confere cards/cm1.js (CARDS_M1): estrutura, quantidades por tópico e todas as contas.
Rodar: python3 check_cm1.py
"""
import json, math, os, re, subprocess
from collections import Counter
from fractions import Fraction as F

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
JS = os.path.join(HERE, 'cm1.js')
cards = json.loads(subprocess.check_output(
    ['node', '-e', "const fs=require('fs');eval(fs.readFileSync(process.argv[1],'utf8')+';globalThis.C=CARDS_M1');"
     "process.stdout.write(JSON.stringify(C))", JS]))
topics = json.loads(subprocess.check_output(
    ['node', '-e', "const fs=require('fs');eval(fs.readFileSync(process.argv[1],'utf8')+';globalThis.T=TOP_MAT');"
     "process.stdout.write(JSON.stringify(T.map(t=>t.id)))", os.path.join(ROOT, 'data-mat.js')]))

# ---------- estrutura ----------
KINDS = {'regra', 'conceito', 'conta', 'exemplo', 'pegadinha'}
EXPECT = {'m-pct': 12, 'm-frac': 12, 'm-reais': 8, 'm-pot': 8, 'm-cient': 8, 'm-mmc': 8}
words = lambda s: len(re.sub(r'<[^>]+>|\[\[|\]\]|\|', ' ', s).split())
for i, c in enumerate(cards):
    assert set(c) == {'t', 'k', 'f', 'b'}, (i, c)
    assert c['k'] in KINDS, (i, c['k'])
    assert c['t'] in topics, (i, c['t'])
    assert all(isinstance(c[x], str) and c[x].strip() for x in 'fb'), i
    assert '`' not in c['f'] + c['b'] and '${' not in c['f'] + c['b'], i
    assert words(c['f']) <= 27, (i, words(c['f']), c['f'])
    assert words(c['b']) <= 47, (i, words(c['b']), c['b'])
    assert c['b'].startswith('<b>'), (i, 'resposta em negrito primeiro')
cnt = Counter(c['t'] for c in cards)
assert dict(cnt) == EXPECT, cnt
assert len({c['f'] for c in cards}) == len(cards), 'frente repetida'
for t, n in EXPECT.items():
    ks = Counter(c['k'] for c in cards if c['t'] == t)
    assert ks['conta'] in (n // 3, n // 3 + 1), (t, ks)
    assert len(ks) >= 4, (t, ks)

# ---------- contas ----------
# m-pct
assert F(35, 100) == F(35, 100) and F(35, 100) == F('0.35')
assert 1 + F(15, 100) == F('1.15') and 1 - F(15, 100) == F('0.85')
assert F(93, 100) == 1 - F(7, 100)
assert F(20, 100) * 45 == 9
assert F(25, 100) * 120 == 30 and F(25, 100) == F(1, 4)
assert 50 * F(90, 100) == 45
assert F(50 - 40, 40) * 100 == 25
assert F('1.2') * F('0.8') == F('0.96') and (1 - F('0.96')) * 100 == 4
assert F('1.1') * F('1.1') == F('1.21')
# m-frac
assert F(2, 3) + F(1, 4) == F(11, 12) and F(8, 12) == F(2, 3) and F(3, 12) == F(1, 4)
assert F(3, 4) * 60 == 45 and 60 // 4 * 3 == 45
assert F(5, 8) == F('0.625') and round(2 / 3, 3) == 0.667 and F(2, 3) > F(5, 8)
assert F('0.75') == F(3, 4) == F(75, 100)
assert F(1, 2) * F(2, 3) == F(1, 3) and 1 - F(1, 3) == F(2, 3)
assert F(2, 3) * 30 == 20
assert math.lcm(4, 6) == 12 and F(1, 4) + F(1, 6) == F(5, 12) == F(3, 12) + F(2, 12)
assert F(2, 5) * F(3, 4) == F(3, 10) == F(6, 20)
assert F(3, 4) / F(1, 2) == F(3, 2) == F(6, 4) == F('1.5')
assert F(1, 2) + F(1, 3) == F(5, 6) != F(2, 5) and F(3, 6) + F(2, 6) == F(5, 6)
# m-reais
assert math.isqrt(16) ** 2 == 16 and math.isqrt(16) == 4
assert 6 ** 2 == 36 < 40 < 49 == 7 ** 2 and 6 < math.sqrt(40) < 7
assert F(4, 9) == F(4, 9) and abs(4 / 9 - 0.4444444) < 1e-6
assert F(12, 99) == F(4, 33) and abs(4 / 33 - 0.12121212) < 1e-6
assert F('3.14') != F(math.pi) and str(round(math.sqrt(2), 4)) == '1.4142'
# m-pot
assert F(3) ** -2 == F(1, 9)
assert round(27 ** (1 / 3)) == 3 and 3 ** 2 == 9 and round(27 ** (2 / 3), 9) == 9
assert 25 * 2 == 50 and math.isqrt(25) == 5 and abs(math.sqrt(50) - 5 * math.sqrt(2)) < 1e-12
assert abs(8 / math.sqrt(2) - 4 * math.sqrt(2)) < 1e-12 and 8 // 2 == 4
assert -3 ** 2 == -9 and (-3) ** 2 == 9
assert 2 ** 3 * 2 ** 4 == 2 ** 7 != 2 ** 12
assert math.isqrt(25) == 5
# m-cient
assert 150_000_000 == F('1.5') * 10 ** 8
assert 4_500_000 == F('4.5') * 10 ** 6
assert F('0.0007') == 7 * F(10) ** -4
assert (2 * 10 ** 4) * (3 * 10 ** 5) == 6 * 10 ** 9
assert F('0.5') * 10 ** 4 == 5 * 10 ** 3 == 5000
# m-mmc
assert math.lcm(6, 8) == 24 == 2 ** 3 * 3
assert math.gcd(18, 30) == 6 == 2 * 3 and 18 == 2 * 3 ** 2 and 30 == 2 * 3 * 5
assert 234 % 9 == 0 and 2 + 3 + 4 == 9
# a·b = 96 e MDC = 4: todos os pares possíveis dão MMC 24
pares = [(a, 96 // a) for a in range(1, 97) if 96 % a == 0 and math.gcd(a, 96 // a) == 4]
assert pares and all(math.lcm(a, b) == 24 for a, b in pares) and 96 // 4 == 24
divs1 = [d for d in range(1, 2) if 1 % d == 0]
assert len(divs1) == 1

print('OK:', len(cards), 'cartões')
print('Por tópico:', dict(cnt))
print('Por tipo:', dict(Counter(c['k'] for c in cards)))
for t in EXPECT:
    print(' ', t, dict(Counter(c['k'] for c in cards if c['t'] == t)))
