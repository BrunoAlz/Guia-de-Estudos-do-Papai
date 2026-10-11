#!/usr/bin/env python3
"""Confere TODAS as contas de treino/tm2.js (TREINO_M2).

Para cada questão: recalcula a resposta a partir do enunciado, lê os textos das
5 alternativas direto do arquivo JS (via node), converte-os em número / conjunto /
expressão e confirma que (1) a alternativa marcada em `a` é a correta e
(2) nenhuma outra alternativa também é correta. Confere também formato
(5 alternativas, feedback '' só na correta, d em 1..3) e as quantidades por tópico.
"""
import json, os, re, subprocess, random
from fractions import Fraction as F

HERE = os.path.dirname(os.path.abspath(__file__))
JS = os.path.join(HERE, 'tm2.js')
data = json.loads(subprocess.check_output(
    ['node', '-e', f"const fs=require('fs');eval(fs.readFileSync({json.dumps(JS)},'utf8')+';globalThis.T=TREINO_M2');process.stdout.write(JSON.stringify(T))"]))

# ---------- parsers dos textos das alternativas ----------
def num(s):
    """Primeiro número no padrão pt-BR (espaço de milhar, vírgula decimal)."""
    s = s.replace('−', '-')
    m = re.search(r'-?\d{1,3}(?: \d{3})*(?:,\d+)?|-?\d+(?:,\d+)?', s)
    return F(m.group(0).replace(' ', '').replace(',', '.'))

def numset(s):
    inner = re.search(r'\{(.*)\}', s).group(1).replace('−', '-')
    return frozenset(F(v.strip().replace(',', '.')) for v in inner.split(','))

def to_py(s):
    s = s.replace('−', '-').replace('<sup>2</sup>', '**2')
    s = re.sub(r'\[\[(.+?)\|(.+?)\]\]', r'((\1)/(\2))', s)
    s = re.sub(r'(\d|\))\s*(?=[a-z(])', r'\1*', s)   # multiplicação implícita
    return s

def expr_fn(s):
    code = to_py(s)
    return lambda x: eval(code, {}, {'x': F(x)})

PTS = [F(p) for p in (-7, -5, -2, 1, 2, 5, 7, 11, F(1, 3), F(5, 2))]   # evita x = ±3
def same_expr(f, g):
    return all(f(p) == g(p) for p in PTS)

# ---------- recálculo de cada questão (na ordem do arquivo) ----------
def solve_lin(a1, b1, c1, a2, b2, c2):
    det = a1 * b2 - a2 * b1
    return F(c1 * b2 - c2 * b1, det), F(a1 * c2 - a2 * c1, det)

def roots2(a, b, c):
    d = b * b - 4 * a * c
    r = int(round(d ** 0.5)); assert r * r == d, 'Δ não é quadrado perfeito'
    return frozenset({F(-b + r, 2 * a), F(-b - r, 2 * a)})

checks = []   # (tipo, valor correto)

# m-eq1
x = F(20 - 12, 4 - 2); assert 4 * (x + 3) == 2 * x + 20; checks.append(('num', x))            # 4
x = F(210 - 30, 2); checks.append(('num', x))                                               # 90
x = F(50) / (1 - F(1, 3) - F(1, 4)); checks.append(('num', x))                              # 120
f = next(f for f in range(1, 100) if 4 * f + 20 == 2 * (f + 20)); checks.append(('num', F(f)))  # 10
b = next(b for b in range(6, 100) if b + 8 == 2 * (b - 5)); checks.append(('num', F(b + 8)))     # 26
# m-sist
xx, yy = solve_lin(1, 1, 18, -2, 1, 0); checks.append(('num', yy))                          # y = 12
d, v = solve_lin(1, 1, 25, 10, 20, 360); checks.append(('num', v))                           # 11
d, t = solve_lin(1, 1, 14, 2, 3, 33); checks.append(('num', t))                              # 5
P, A = solve_lin(1, 1, 60, 1, -1, 20); assert P - 10 == A + 10; checks.append(('num', P))    # 40
m, l = solve_lin(3, 2, 700, 2, 3, 650); checks.append(('num', m))                            # 160
# m-prod
checks.append(('expr', lambda x: (x + 4) ** 2))
checks.append(('expr', lambda x: 9 * x ** 2 - 16))
checks.append(('num', F(998 * 1002)))
checks.append(('expr', lambda x: (x * x - 6 * x + 9) / (x * x - 9)))
s_, p_ = 7, 10
ab = [(a_, s_ - a_) for a_ in range(-20, 21) if a_ * (s_ - a_) == p_]
assert ab; val = {a_ ** 2 + b_ ** 2 for a_, b_ in ab}; assert len(val) == 1
checks.append(('num', F(val.pop())))                                                         # 29
# m-eq2
checks.append(('set', frozenset({F(4), F(-4)})))
assert all(3 * r * r - 48 == 0 for r in checks[-1][1])
checks.append(('set', frozenset({F(0), F(9)})))
assert all(r * r - 9 * r == 0 for r in checks[-1][1])
rs = roots2(1, 4, -96); w = max(rs); assert w * (w + 4) == 96; checks.append(('num', w))     # 8
rs = roots2(1, -11, 24); checks.append(('num', max(rs) - min(rs)))                           # 5
k = F(36, 4); assert 36 - 4 * k == 0; checks.append(('num', k))                              # 9
# m-prop
checks.append(('num', F(4 * 30, 12)))                                                        # 10
checks.append(('num', F(4 * 15, 6)))                                                         # 10
checks.append(('num', F(8 * 50, 100) * F(6 * 50, 100)))                                      # 12
checks.append(('num', F(10) / F(50, 60)))                                                    # 12
inv = [F(1, 2), F(1, 3)]; checks.append(('num', 1500 * inv[0] / sum(inv)))                   # 900
# m-func
checks.append(('num', F(1, 2) * 30 + 40))                                                    # 55
rate = F(600 - 480, 4); checks.append(('num', F(600) / rate))                                # 20
yf = lambda x: x * x - 3 * x; checks.append(('num', F(yf(-2) - yf(2))))                      # 12
# m-seq
checks.append(('num', 2 + (13 - 1) * F(1, 2)))                                               # 8
n = next(n for n in range(1, 100) if 2 * n + 2 == 50)
assert [2 * i + 2 for i in (1, 2, 3)] == [4, 6, 8]; checks.append(('num', F(n)))             # 24

# ---------- conferência ----------
assert len(data) == len(checks) == 30, (len(data), len(checks))
expected = {'m-eq1': 5, 'm-sist': 5, 'm-prod': 5, 'm-eq2': 5, 'm-prop': 5, 'm-func': 3, 'm-seq': 2}
count, levels = {}, {}
errors = 0
for i, (Q, (kind, val)) in enumerate(zip(data, checks), 1):
    count[Q['t']] = count.get(Q['t'], 0) + 1
    levels.setdefault(Q['t'], set()).add(Q['d'])
    texts = [o[0] for o in Q['o']]
    assert len(Q['o']) == 5 and Q['d'] in (1, 2, 3) and 0 <= Q['a'] <= 4
    assert all((o[1] == '') == (j == Q['a']) for j, o in enumerate(Q['o'])), f'Q{i}: feedbacks'
    assert '`' not in json.dumps(Q) and '${' not in json.dumps(Q)
    if kind == 'num':
        ok = [num(s) == val for s in texts]
    elif kind == 'set':
        ok = [numset(s) == val for s in texts]
    else:
        ok = [same_expr(expr_fn(s), val) for s in texts]
    good = ok.count(True) == 1 and ok[Q['a']]
    errors += not good
    shown = val if kind != 'expr' else '(expressão)'
    print(f"{'OK ' if good else 'ERRO'} Q{i:02d} {Q['t']:7s} d{Q['d']} a={'ABCDE'[Q['a']]} "
          f"correta={shown!s:>12} -> '{texts[Q['a']]}'  corretas={ok.count(True)}")

assert count == expected, count
for t_, c in count.items():
    if c >= 3: assert levels[t_] == {1, 2, 3}, (t_, levels[t_])
pos = [Q['a'] for Q in data]
print('Posições da correta:', {L: pos.count(j) for j, L in enumerate('ABCDE')})
print('Por tópico:', count)
print('RESULTADO:', 'TUDO CERTO' if errors == 0 else f'{errors} ERRO(S)')
raise SystemExit(1 if errors else 0)
