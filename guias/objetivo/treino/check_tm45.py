"""Confere as contas e o gabarito de treino/tm45.js (TREINO_M45).
Para cada questão numérica: calcula a resposta, confere que a alternativa marcada
vale exatamente isso e que nenhuma outra alternativa tem o mesmo valor.
Para questões de afirmações: calcula a verdade de cada afirmação.
Também confere estrutura (5 alternativas, feedback vazio só na correta, etc.)."""
import json, os, re, subprocess
from fractions import Fraction as F
from math import factorial
from itertools import product

HERE = os.path.dirname(os.path.abspath(__file__))
JS = os.path.join(HERE, 'tm45.js')
src = open(JS, encoding='utf-8').read()
out = subprocess.run(['node', '-e', src + '\nprocess.stdout.write(JSON.stringify(TREINO_M45))'],
                     capture_output=True, text=True, check=True).stdout
Q = json.loads(out)

def num(s):
    """Lê o valor numérico de uma alternativa no formato brasileiro."""
    m = re.fullmatch(r'\[\[(\d+)\|(\d+)\]\]', s.strip())
    if m:
        return F(int(m.group(1)), int(m.group(2)))
    if 'R$' in s:  # centavos ",00" só em valores em reais
        s = re.sub(r',00$', '', s.replace('R$', '').strip())
    m = re.match(r'\s*([\d ]+(?:,\d+)?)', s)
    t = m.group(1).replace(' ', '').replace(',', '.')
    return F(t)

PI314 = F(314, 100)
D = F  # atalho
def hm(h, m):  # horário em minutos
    return h * 60 + m

checks = []  # (indice, resposta esperada, lista de valores das alternativas)

# ---------- m-area ----------
checks.append(2 * (15 + 8))                                          # 0: 46
area_trap = F(30 + 20) * 12 / 2
checks.append(area_trap * 50)                                        # 1: 15000
checks.append(2 * PI314 * 30 * 100 / 100)                            # 2: 188,4 m
checks.append(2 * D('1.5') + PI314 * 1 ** 2 / 2)                     # 3: 4,57
checks.append(((D('1.2') ** 2) - 1) * 100)                           # 4: 44 (%)
# ---------- m-vol ----------
checks.append(8 * 4 * D('1.5') * 1000)                               # 5: 48000 L
checks.append(F(3 * 10 ** 2 * 20, 1000))                             # 6: 6 L
checks.append(F(40 * 25 * (22 - 20), 1000))                          # 7: 2 L
# ---------- m-unid ----------
checks.append(F(12 * 400, 1000))                                     # 8: 4,8 km
fim = hm(19, 40) + 2 * 60 + int(D('0.4') * 60)
checks.append(('hora', fim))                                         # 9: 22h04
checks.append(F(int(D('0.2') * 1000) * 150, 10000))                  # 10: 3 ha
# ---------- m-graf ----------
vend = {'Segunda': 35, 'Terça': 40 + 10, 'Quarta': 30, 'Quinta': 60, 'Sexta': 45}
alvo = [d for d, v in vend.items() if v == 2 * vend['Quarta']]
assert alvo == ['Quinta'], alvo
checks.append(('texto', 'Quinta-feira'))                             # 11
checks.append(F(48, 96 + 60 + 36 + 48) * 360)                        # 12: 72
seg = [1000, 1200, 1300, 1800, 2000]
dif = [b - a for a, b in zip(seg, seg[1:])]
afirm13 = [dif.index(max(dif)) == 3,            # maior crescimento abr->mai
           seg[-1] == 2 * seg[0],               # dobrou
           dif[1] == dif[0],                    # mesma quantidade
           dif[1] < 0,                          # caiu em março
           F(seg[-1] - seg[0], seg[0]) * 100 == 200]
checks.append(('afirm', afirm13))                                    # 13
A, B, base = 41, 39, 38
afirm14 = [A == 3 * B,
           A - B == 3,
           B == 1,
           False,  # coluna 3x mais alta não é proporcional (41/39 != 3)
           A - B == 2 and (A - base) / (B - base) == 3 and A / B != 3]
assert F(A - base, B - base) == 3
checks.append(('afirm', afirm14))                                    # 14
mat = 12 + 9; tot = (12 + 8 + 10) + (9 + 15 + 6)
checks.append(F(mat, tot) * 100)                                     # 15: 35
# ---------- m-media ----------
gols = [1, 0, 3, 1, 5, 2]
checks.append(F(sum(gols), len(gols)))                               # 16: 2
t = [12, 7, 15, 9, 10, 20, 8, 11]; ts = sorted(t)
checks.append(F(ts[3] + ts[4], 2))                                   # 17: 10,5
assert F(sum(t), 8) == D('11.5') and F(t[3] + t[4], 2) == D('9.5') and max(t) - min(t) == 13
checks.append(F(6 * 3 + 9 * 2 + 9 * 1, 3 + 2 + 1))                  # 18: 7,5
assert F(6 + 9 + 9, 3) == 8 and F(18 + 18, 5) == D('7.2')
checks.append(F(11 * 22 - 10 * 21))                                  # 19: 32
sal = [2000] * 9 + [22000]; ss = sorted(sal)
media = F(sum(sal), 10); mediana = F(ss[4] + ss[5], 2)
afirm20 = [media == 12000, mediana == 4000, media == mediana, media == 2400,
           media == 4000 and mediana == 2000]
checks.append(('afirm', afirm20))                                    # 20
# ---------- m-prob ----------
fav = [n for n in range(1, 21) if n % 3 == 0]
checks.append(F(len(fav), 20))                                       # 21: 3/10
pares = list(product(range(1, 7), repeat=2))
checks.append(F(sum(1 for a, b in pares if a + b == 10), len(pares)))  # 22: 1/12
pp = F(3, 5) * F(2, 4); bb = F(2, 5) * F(1, 4)
checks.append(pp + bb)                                               # 23: 2/5
assert pp == F(3, 10) and bb == F(1, 10) and F(9, 25) + F(4, 25) == F(13, 25) and 1 - (pp + bb) == F(3, 5)
# ---------- m-cont ----------
checks.append(F(10 ** 3))                                            # 24: 1000
assert len([1 for c in product(range(10), repeat=3)]) == 1000
checks.append(F(2 * factorial(4)))                                   # 25: 48
from itertools import permutations
assert len({p for p in permutations('PRATO') if p[0] in 'AO'}) == 48
n = next(n for n in range(2, 100) if n * (n - 1) // 2 == 28)
checks.append(F(n))                                                  # 26: 8

# ---------- verificação ----------
assert len(Q) == 27, len(Q)
from collections import Counter
cont = Counter(q['t'] for q in Q)
assert cont == {'m-area': 5, 'm-vol': 3, 'm-unid': 3, 'm-graf': 5, 'm-media': 5, 'm-prob': 3, 'm-cont': 3}, cont
for tp in cont:
    ds = {q['d'] for q in Q if q['t'] == tp}
    assert ds == {1, 2, 3}, (tp, ds)

def horario(s):
    h, m = s.split('h'); return int(h) * 60 + int(m)

for i, (q, exp) in enumerate(zip(Q, checks)):
    opts = [o[0] for o in q['o']]
    assert len(opts) == 5, i
    assert all((o[1] == '') == (k == q['a']) for k, o in enumerate(q['o'])), f'feedback {i}'
    assert len(set(opts)) == 5, f'alternativas repetidas {i}'
    for s in [q['q'], q['e'], q.get('tx', '')] + [x for o in q['o'] for x in o]:
        assert '`' not in s and '${' not in s, i
    if isinstance(exp, tuple) and exp[0] == 'afirm':
        assert exp[1].count(True) == 1 and exp[1].index(True) == q['a'], (i, exp[1], q['a'])
        ok = 'afirmações'
    elif isinstance(exp, tuple) and exp[0] == 'texto':
        assert opts[q['a']] == exp[1] and opts.count(exp[1]) == 1, i
        ok = exp[1]
    elif isinstance(exp, tuple) and exp[0] == 'hora':
        vals = [horario(o) for o in opts]
        assert vals[q['a']] == exp[1] and vals.count(exp[1]) == 1, (i, vals, exp)
        ok = f'{exp[1] // 60}h{exp[1] % 60:02d}'
    else:
        vals = [num(o) for o in opts]
        assert vals[q['a']] == exp, (i, vals, exp)
        assert vals.count(exp) == 1, (i, vals)
        ok = str(exp)
    print(f'Q{i + 1:02d} {q["t"]:8s} d{q["d"]}  correta={"ABCDE"[q["a"]]} ({opts[q["a"]][:40]})  calculado={ok}  OK')

print('\nPosições das corretas:', Counter('ABCDE'[q['a']] for q in Q))
print('TODAS AS 27 QUESTÕES CONFERIDAS.')
