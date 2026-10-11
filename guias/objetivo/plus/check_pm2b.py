#!/usr/bin/env python3
"""Confere plus/pm2b.js (PLUS_M2B): estrutura, quantidades e TODAS as contas."""
import json, os, re, subprocess, math
from fractions import Fraction as F

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
JS = os.path.join(HERE, 'pm2b.js')
IDS = ['m-eq2', 'm-prop', 'm-func', 'm-seq']

# ---------- estrutura ----------
subprocess.run(['node', '--check', JS], check=True)
src = open(JS, encoding='utf8').read()
body = src.split('const PLUS_M2B', 1)[1]
assert '${' not in body
# nenhuma crase dentro do texto: todas as strings de template devem fechar bem (node --check) e
# a contagem total de crases deve ser par
assert body.count('`') % 2 == 0
dump = subprocess.run(['node', '-e',
    "const fs=require('fs');eval(fs.readFileSync(process.argv[1],'utf8')+';globalThis.P=PLUS_M2B');"
    "console.log(JSON.stringify(P))", JS], capture_output=True, text=True, check=True).stdout
P = json.loads(dump)
mat = open(os.path.join(ROOT, 'data-mat.js'), encoding='utf8').read()
for i in IDS:
    assert f"id:'{i}'" in mat, i
assert sorted(P) == sorted(IDS), sorted(P)
for i, t in P.items():
    assert 5 <= len(t['base']) <= 9, (i, 'base', len(t['base']))
    assert all(len(p) == 2 for p in t['base'])
    assert 4 <= len(t['jeitos']) <= 7, (i, 'jeitos')
    assert all(set(j) == {'n', 'c', 'ex'} and '<b>' in j['ex'] for j in t['jeitos']), i
    assert 4 <= len(t['passo']) <= 6, (i, 'passo')
    assert len(t['exs']) == 3 and all(set(e) == {'q', 's', 'r'} for e in t['exs']), i
    assert 3 <= len(t['erros']) <= 5 and all('<b>Errado:</b>' in e and '<b>Certo:</b>' in e for e in t['erros']), i
    assert 4 <= len(t['resumo']) <= 6, (i, 'resumo')
print('estrutura OK:', {i: {k: len(v) for k, v in t.items()} for i, t in P.items()})

# ---------- contas ----------
def ev(poly, x):  # poly = (a, b, c)
    a, b, c = poly
    return a * x * x + b * x + c
def delta(a, b, c): return b * b - 4 * a * c
def roots(a, b, c):
    d = delta(a, b, c)
    r = math.isqrt(d)
    assert r * r == d
    return sorted({F(-b + r, 2 * a), F(-b - r, 2 * a)})

# m-eq2 base
assert ev((1, -4, 3), 1) == 0 and ev((1, -4, 3), 2) == -1
assert delta(2, -7, -4) == 81 and -4 * 2 * -4 == 32
assert [n * n for n in range(1, 21)] == [1,4,9,16,25,36,49,64,81,100,121,144,169,196,225,256,289,324,361,400]
assert delta(1, -2, -1) == 8  # x = 1 ± √2
for x in (1 + math.sqrt(2), 1 - math.sqrt(2)): assert abs(ev((1, -2, -1), x)) < 1e-9
assert roots(1, -3, -10) == [-2, 5]
# m-eq2 jeitos
assert roots(1, -9, 20) == [4, 5]
assert roots(1, 8, 15) == [-5, -3]
assert roots(1, -4, -21) == [-3, 7]
assert roots(3, -24, 36) == [2, 6] == roots(1, -8, 12)
assert roots(5, -20, 0) == [0, 4]
assert roots(2, 0, -50) == [-5, 5]
assert delta(1, 0, 9) < 0
assert ev((1, -3, -28), 4) == -24 and ev((1, -3, -28), -7) == 42 and ev((1, -3, -28), 7) == 0
assert roots(1, -3, -28) == [-4, 7]  # só 7 entre as alternativas 4, −7, 7
assert ev((2, -3, -2), 2) == 0 and roots(2, -3, -2) == [F(-1, 2), 2] and F(3, 2) - 2 == F(-1, 2) and 2 * F(-1, 2) == -1
assert delta(1, 10, 25) == 0 and roots(1, 10, 25) == [-5]
assert delta(1, -1, 3) == -11
# m-eq2 exs
assert roots(7, 21, 0) == [-3, 0]
assert delta(2, -5, -3) == 49 and roots(2, -5, -3) == [F(-1, 2), 3] and 3 + F(-1, 2) == F(5, 2)
assert roots(1, 1, -132) == [-12, 11] and 11 * 12 == 132 and 11 < math.sqrt(132) < 12 and 11 + 12 == 23
# m-eq2 erros
assert delta(1, -5, 4) == 9
assert (6 + 2) / 2 == 4 and (6 - 2) / 2 == 2
assert roots(1, -5, 0) == [0, 5] and roots(1, 0, -36) == [-6, 6]

# m-prop base
assert F(3, 5) * 30 == 18
assert F(3 * 20, 4) == 15
assert F(14, 2) == F(35, 5) == 7
assert 60 * 3 == 90 * 2 == 180
assert 25000 / 100 == 250 and 50 / 100 == 0.5 and 100000 // 100000 == 1
assert [F(m, 60) for m in (15, 30, 45, 12, 20)] == [F(1, 4), F(1, 2), F(3, 4), F(1, 5), F(1, 3)]
assert F(1, 3) * 6 == 2 and F(1, 6) * 6 == 1
# m-prop jeitos
assert F(8 * 40, 5) == 64 and 8 * 40 == 320
assert F(8 * 12, 6) == 16
assert 21 / 7 == 3 and 3 * 10 == 30 and 4 * 9 == 36 and 36 / 6 == 6
assert 18 / 12 == 1.5 and 300 * 1.5 == 450
assert 250000 / 100000 == 2.5 and 6 * 2.5 == 15 and 2000000 / 100000 == 20
assert 6 * F(180, 120) * F(4, 6) == 6 and 120 / (4 * 6) == 5 and 180 / (6 * 5) == 6
assert 72 / 72 * 60 == 60 and abs(72 / 1.2 - 60) < 1e-9
# m-prop exs
assert 300000 / 100000 == 3 and 4.5 * 3 == 13.5
assert 18 * 40 == 720 and 720 / 6 == 120 and 18 / 3 == 6 and 40 * 3 == 120
assert 2400 / (8 * 3) == 100 and 3600 / 200 == 18 and 8 * F(3600, 2400) * F(3, 2) == 18
# m-prop erros
assert 3 * 12 / 6 == 6
assert 1 + F(20, 60) == F(4, 3) and 1 + F(12, 60) == F(6, 5)
assert 120 / 60 + 120 / 40 == 5 and 240 / 5 == 48
assert 2 * 50000 == 100000

# m-func base
f = lambda x: 2 * x + 1; assert f(4) == 9
g = lambda x: x * x - 2 * x; assert g(5) == 15 and g(-3) == 15
assert (-2) ** 2 == 4 and -2 ** 2 == -4 and (-2) ** 3 == -8
assert 45 * 0 + 70 == 70
assert F(24, 3) == 8 and 3 * 8 - 4 == 20
# m-func jeitos
assert 3 * (-1) ** 2 - (-1) == 4
assert F(20 - 11, 5 - 2) == 3 and 11 - 3 * 2 == 5 and 3 * 5 + 5 == 20
assert [4 * x + 2 for x in (1, 2, 3)] == [6, 10, 14]
assert 45 * 3 + 70 == 205
assert 0 + 1 != -2 and 2 * 0 - 2 == -2 and 2 * 3 - 2 == 4
assert 20 + 2 * 20 == 50 + 0.5 * 20 and 20 + 2 * 0 < 50 + 0.5 * 0 and 20 + 2 * 10 < 50 + 0.5 * 10
# m-func exs
assert -2 * (-1) ** 2 + 5 * (-1) - 1 == -8
V = lambda t: 3 * t + 20
assert [V(t) for t in (0, 5, 10, 15)] == [20, 35, 50, 65] and V(20) == 80
A = lambda x: F(4, 5) * x + 100; B = lambda x: F(6, 5) * x + 40
assert A(150) == B(150) and A(200) == 260 and B(200) == 280 and A(100) > B(100)
# m-func erros
assert [3 * x + 1 for x in (0, 2, 4)] == [1, 7, 13]

# m-seq base
pa = lambda a1, r, n: a1 + (n - 1) * r
assert [pa(4, 7, n) for n in (1, 2, 3, 4)] == [4, 11, 18, 25] and pa(4, 7, 12) == 81
assert [pa(30, -4, n) for n in (1, 2, 3, 4)] == [30, 26, 22, 18]
assert [5 * 3 ** k for k in range(4)] == [5, 15, 45, 135] and [64 // 2 ** k for k in range(4)] == [64, 32, 16, 8]
assert [n * n + 1 for n in range(1, 6)] == [2, 5, 10, 17, 26]
assert divmod(100, 7) == (14, 2)
# m-seq jeitos
assert [3 * n + 2 for n in (1, 2, 3, 4)] == [5, 8, 11, 14] and 3 * 30 + 2 == 92
assert F(30 - 10, 8 - 3) == 4 and 10 - 2 * 4 == 2
assert (203 - 7) / 4 == 49 and 4 * 50 + 3 == 203 and pa(7, 4, 50) == 203
# casinhas: paredes verticais n+1, chão n, teto n, telhado 2n
casa = lambda n: (n + 1) + n + n + 2 * n
assert [casa(n) for n in (1, 2, 3)] == [6, 11, 16] and casa(10) == 51 == 5 * 10 + 1
assert 6 * 2 == 12 != casa(2)
# m-seq exs
assert pa(50, -4, 15) == -6 and 14 * 4 == 56
mold = lambda n: (n + 2) ** 2 - n * n
assert [mold(n) for n in (1, 2, 3)] == [8, 12, 16] and mold(10) == 44 == 4 * 10 + 4
assert F(42 - 17, 5) == 5 and 17 - 3 * 5 == 2 and pa(2, 5, 20) == 97 and 5 * 4 - 3 == 17 and 19 * 5 == 95
# m-seq erros
assert 4 * 2 == 8 and 8 * 2 == 16

print('contas OK')
