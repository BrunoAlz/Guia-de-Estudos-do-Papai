#!/usr/bin/env python3
"""Confere cards/cm2.js (CARDS_M2): estrutura, quantidades, tamanhos e TODAS as contas."""
import json, os, re, subprocess
from collections import Counter
from fractions import Fraction as F
import sympy as sp

HERE = os.path.dirname(os.path.abspath(__file__))
JS = os.path.join(HERE, 'cm2.js')
MAT = os.path.join(HERE, '..', 'data-mat.js')

cards = json.loads(subprocess.check_output(['node', '-e',
    f"const fs=require('fs');eval(fs.readFileSync({json.dumps(JS)},'utf8')+';globalThis.C=CARDS_M2');process.stdout.write(JSON.stringify(C))"]))
src = open(JS, encoding='utf8').read()
topic_ids = set(re.findall(r"\{id:'(m-[a-z0-9]+)'", open(MAT, encoding='utf8').read()))

# ---------- estrutura ----------
K = {'regra', 'conceito', 'conta', 'exemplo', 'pegadinha'}
WANT = {'m-eq1': 12, 'm-sist': 12, 'm-prod': 12, 'm-eq2': 12, 'm-prop': 12, 'm-func': 8, 'm-seq': 6}
def words(s):
    s = re.sub(r'<[^>]+>', ' ', s)
    s = re.sub(r'\[\[(.*?)\|(.*?)\]\]', r'\1 \2', s)
    return len(s.split())
for c in cards:
    assert set(c) == {'t', 'k', 'f', 'b'}, c
    assert c['k'] in K, c
    assert c['t'] in topic_ids, c
    assert words(c['f']) <= 25, ('frente longa', c['f'])
    assert words(c['b']) <= 45, ('verso longo', c['b'])
    assert c['b'].startswith('<b>'), ('verso deve começar em negrito', c['b'])
    for s in (c['f'], c['b']):
        assert '`' not in s and '${' not in s
        assert '<' not in re.sub(r'</?(b|i|br|sup|sub)>', '', s), ('< solto', s)
cnt = Counter(c['t'] for c in cards)
assert dict(cnt) == WANT, cnt
assert len(cards) == 74
fs = [c['f'] for c in cards]; assert len(fs) == len(set(fs)), 'frente repetida'

# ---------- contas ----------
x, y, a, b = sp.symbols('x y a b')
def sol(eq): return sp.solve(eq, x)
def roots(p): return sorted(sp.solve(p, x))
E = sp.Eq

# m-eq1
assert sol(E(2*x + 6, 20)) == [7]
assert sol(E(5*x - 3, 2*x + 9)) == [4]
assert sol(E(x/4, 6)) == [24]
assert sol(E(4*(x - 1), 20)) == [6]
assert sol(E(2*x + 5, 17)) == [6]
assert sol(E(x + x + 1 + x + 2, 72)) == [23]
assert sol(E(x/2 + 3, 5)) == [4] and sp.expand(2*(x/2 + 3)) == x + 6
assert sol(E(3*x, 12)) == [4]
# m-sist
def sys2(e1, e2, u=x, v=y): return sp.solve([e1, e2], [u, v], dict=True)[0]
assert sys2(E(x + y, 10), E(x - y, 2)) == {x: 6, y: 4}
assert sys2(E(x + y, 9), E(x - y, 1)) == {x: 5, y: 4}
assert sys2(E(y, 2*x), E(x + y, 15)) == {x: 5, y: 10}
s = sys2(E(a + b, 7), E(a - b, 3), a, b); assert s == {a: 5, b: 2} and s[a]*s[b] == 10
c_, m_ = sp.symbols('c m')
assert sys2(E(c_ + m_, 20), E(4*c_ + 2*m_, 60), c_, m_) == {c_: 10, m_: 10}
i_ = sp.Symbol('i')
assert sys2(E(i_ + m_, 40), E(20*i_ + 10*m_, 600), i_, m_) == {i_: 20, m_: 20}
assert sys2(E(2*x + y, 8), E(x + y, 5)) == {x: 3, y: 2}
# m-prod
assert sp.expand((a + b)**2) == a**2 + 2*a*b + b**2
assert sp.expand((a - b)**2) == a**2 - 2*a*b + b**2
assert sp.expand((a + b)*(a - b)) == a**2 - b**2
assert sp.expand(3*(2*x + 3*y)) == 6*x + 9*y
assert sp.factor(x**2 + 6*x + 9) == (x + 3)**2
assert sp.expand((x + 5)*(x - 5)) == x**2 - 25
assert sp.simplify((x**2 - 9)/(x + 3)) == x - 3
assert 31**2 == 961 == 900 + 60 + 1
assert 29*31 == 899 == 30**2 - 1
assert 102**2 - 98**2 == 800 == 200*4
assert sp.expand((x + 5)**2) == x**2 + 10*x + 25
assert (2 + 3)**2 == 25 and 2**2 + 3**2 == 13
# m-eq2
assert roots(x**2 - 5*x + 6) == [2, 3]
assert roots(x**2 - 7*x + 12) == [3, 4]
assert 2**2 - 4*1*(-3) == 16 and roots(x**2 + 2*x - 3) == [-3, 1]
assert roots(x**2 - 3*x) == [0, 3]
assert roots(x**2 - 16) == [-4, 4]
assert roots(x**2 - 9) == [-3, 3]
assert roots(x**2 - 6*x + 8) == [2, 4]
assert roots(x*(x + 3) - 40) == [-8, 5]
# m-prop
assert 6*10 == 4*15
assert 3*100_000 == 300_000 and 300_000 // 100_000 == 3 and 100_000 == 1000*100
assert F(12, 3)*5 == 20
assert F(90) / F(3, 2) == 60
assert [F(100, 5)*2, F(100, 5)*3] == [40, 60]
# m-func
f1 = lambda v: 3*v - 1; assert f1(4) == 11
assert (-3)**2 + (-3) == 6
assert [3*v + 1 for v in (0, 1, 2)] == [1, 4, 7]
taxi = lambda km: 2*km + 4; assert taxi(1) == 6 and taxi(2) == 8 and taxi(2) != 2*taxi(1)
# m-seq
assert 54*3 == 162 and [2*3**k for k in range(4)] == [2, 6, 18, 54]
assert 3 + 9*4 == 39 and [3 + 4*k for k in range(4)] == [3, 7, 11, 15]
fib = [1, 1]
while len(fib) < 7: fib.append(fib[-1] + fib[-2])
assert fib == [1, 1, 2, 3, 5, 8, 13]
assert 20 - 1 == 19

print('OK:', len(cards), 'cartões')
print('por tópico:', dict(cnt))
print('por tipo:', dict(Counter(c['k'] for c in cards)))
for t in WANT:
    print(' ', t, dict(Counter(c['k'] for c in cards if c['t'] == t)))
