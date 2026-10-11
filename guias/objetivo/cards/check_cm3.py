"""Checa cm3.js: estrutura (t/k/f/b, tipos, tópicos, quantidades) e todas as contas."""
import json, math, os, re, subprocess
from collections import Counter

HERE = os.path.dirname(os.path.abspath(__file__))
JS = os.path.join(HERE, 'cm3.js')
MAT = os.path.join(HERE, '..', 'data-mat.js')

# ---------- estrutura ----------
src = open(JS, encoding='utf-8').read()
assert '${' not in src, 'não pode haver ${'
cards = json.loads(subprocess.check_output(
    ['node', '-e', open(JS, encoding='utf-8').read() + '\nprocess.stdout.write(JSON.stringify(CARDS_M3))'],
    text=True))
topics = set(re.findall(r"\{id:'(m-[a-z0-9]+)'", open(MAT, encoding='utf-8').read()))
KINDS = {'regra', 'conceito', 'conta', 'exemplo', 'pegadinha'}
WANT = {'m-ang': 12, 'm-pol': 8, 'm-sem': 12, 'm-pit': 12, 'm-circ': 8, 'm-cart': 8}
fronts = set()
for c in cards:
    assert set(c) == {'t', 'k', 'f', 'b'}, c
    assert c['t'] in topics, c['t']
    assert c['k'] in KINDS, c['k']
    assert '`' not in c['f'] + c['b']
    assert c['f'] not in fronts, 'frente repetida: ' + c['f']; fronts.add(c['f'])
    words = lambda s: len(re.sub(r'<[^>]+>', ' ', s).split())
    assert words(c['f']) <= 25, ('frente longa', c['f'])
    assert words(c['b']) <= 45, ('verso longo', c['b'])
    assert c['b'].startswith('<b>'), ('verso sem negrito no início', c['b'])
cnt = Counter(c['t'] for c in cards)
assert dict(cnt) == WANT, cnt
assert len(cards) == 60

# ---------- contas ----------
# m-ang
assert 90 - 30 == 60 and 110 + 70 == 180
assert 90 - 35 == 55
assert 180 - 125 == 55
assert 180 - (90 - 50) == 140
assert 130 / 2 == 65
assert 90 - 40 == 50 and 180 - 40 == 140
# m-pol
assert 50 + 60 == 110 and 180 - 50 - 60 == 70  # externo = soma dos não vizinhos
assert (5 - 2) * 180 == 540
assert 360 / 10 == 36 and 180 - 36 == 144
assert 5 * (5 - 3) / 2 == 5
# m-sem
assert 180 - 40 - 75 == 65 and 180 - 40 - 65 == 75
assert 6 / 3 == 8 / 4 == 10 / 5 == 2
assert 10 * 2 ** 2 == 40
assert 1 / 2 == 5 / 10  # vara 1 m sombra 2 m; árvore 5 m sombra 10 m
assert 2 / 3 == 4 / 6 and 2 * 6 == 12
assert 3 ** 2 == 9
# m-pit
assert math.isclose(math.sqrt(10 ** 2 - 5 ** 2), 5 * math.sqrt(3))  # altura do equilátero de lado 10
assert 4 * 9 == 36 and math.isqrt(36) == 6
assert 6 ** 2 + 8 ** 2 == 100 == 10 ** 2
assert 13 ** 2 - 5 ** 2 == 144 and math.isqrt(144) == 12
assert 8 ** 2 + 15 ** 2 == 289 and math.isqrt(289) == 17
assert 1 * 9 == 9 and math.isqrt(9) == 3
assert 10 ** 2 - 6 ** 2 == 64 and math.isqrt(64) == 8
assert math.isclose(math.sqrt(2 * 5 ** 2), 5 * math.sqrt(2))
# m-circ
assert 80 / 2 == 40
assert 25 * 2 == 50
assert round(2 * 3.14 * 10, 2) == 62.8
# m-cart
assert ((2 + 6) / 2, (4 + 10) / 2) == (4, 7)
assert math.hypot(4 - 1, 5 - 1) == 5
assert math.hypot(9 - 2, 3 - 3) == 7
assert 3 > 0 and -2 < 0  # (3, -2) no 4º quadrante

print('OK:', len(cards), 'cartões')
print('por tópico:', dict(cnt))
print('por tipo:', dict(Counter(c['k'] for c in cards)))
for t in WANT:
    print(' ', t, dict(Counter(c['k'] for c in cards if c['t'] == t)))
