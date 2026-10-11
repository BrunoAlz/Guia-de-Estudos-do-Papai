"""Confere as contas e o gabarito de tm3.js (TREINO_M3).
Uso: python3 check_tm3.py   (precisa de node no PATH)
Para cada questão: calcula a resposta, verifica que a alternativa marcada (a)
tem esse valor e que NENHUMA outra alternativa também está correta.
"""
import json, math, re, subprocess, os
from fractions import Fraction as F
from collections import Counter

HERE = os.path.dirname(os.path.abspath(__file__))
js = subprocess.run(
    ['node', '-e',
     "const fs=require('fs');eval(fs.readFileSync(process.argv[1],'utf8')+';globalThis.T=TREINO_M3');"
     "console.log(JSON.stringify(T))", os.path.join(HERE, 'tm3.js')],
    capture_output=True, text=True, check=True).stdout
Q = json.loads(js)

def num(s):
    """Primeiro número de um texto em formato brasileiro (1 350 / 2,5 / −4)."""
    s = s.replace('−', '-').replace(' ', ' ')
    m = re.search(r'-?\d+(?: \d{3})*(?:,\d+)?', s)
    return F(m.group(0).replace(' ', '').replace(',', '.'))

def nums(s):
    s = s.replace('−', '-')
    return [F(x.replace(',', '.')) for x in re.findall(r'-?\d+(?:,\d+)?', s)]

def sqrt_exact(n):
    r = math.isqrt(int(n))
    assert r * r == n, f'{n} não é quadrado perfeito'
    return r

checks = []
def check(fn):
    checks.append(fn); return fn

# ---------- m-ang ----------
@check
def q1(o):  # retas concorrentes, 72°
    x = 72; exp = sorted([x, 180 - x, 180 - x])           # oposto + 2 vizinhos
    return [sorted(nums(t)) == exp for t in o]
@check
def q2(o):  # alternos externos 2x+25 = 4x-15
    x = F(25 + 15, 4 - 2); ang = 2 * x + 25
    assert ang == 4 * x - 15
    return [num(t) == ang for t in o]
@check
def q3(o):  # agudo + obtuso = 180
    x = F(180 - 30, 5); agudo = 3 * x - 12; obtuso = 2 * x + 42
    assert agudo + obtuso == 180 and agudo < 90 < obtuso
    return [num(t) == agudo for t in o]
@check
def q4(o):  # 90-x = (180-x)/4
    sol = [x for x in range(1, 90) if 4 * (90 - x) == 180 - x]
    assert sol == [60]
    return [num(t) == 60 for t in o]
@check
def q5(o):  # bissetrizes
    x = F(180 - 60, 6); aob = 4 * x + 20; boc = 2 * x + 40
    assert aob + boc == 180
    return [num(t) == aob / 2 + boc / 2 for t in o]
# ---------- m-pol ----------
@check
def q6(o):
    n = 5; ang = F((n - 2) * 180, n)
    return [num(t) == ang for t in o]
@check
def q7(o):
    x = F(130 - 10, 3); A = x + 20; B = 2 * x - 10; C = 180 - 130
    assert A + B + C == 180
    return [num(t) == A for t in o]
@check
def q8(o):
    n = 1440 // 180 + 2; d = n * (n - 3) // 2
    assert (n - 2) * 180 == 1440
    return [num(t) == d for t in o]
# ---------- m-sem ----------
@check
def q9(o):
    h = F(12) * F('1.5') / 2
    return [num(t) == h for t in o]
@check
def q10(o):
    x = F(120 * 75, 90)
    return [num(t) == x for t in o]
@check
def q11(o):
    k = F(30, 10); area = 150 * k ** 2
    assert area == 30 * (15 * k)
    return [num(t) == area for t in o]
@check
def q12(o):
    k = F(4, 12); p = (12 + 15 + 18) * k
    return [num(t) == p for t in o]
@check
def q13(o):
    # 6/(7+s) = 1,8/s  ->  6s = 1,8(7+s)
    s = F('1.8') * 7 / (6 - F('1.8'))
    assert 6 * s == F('1.8') * (7 + s)
    return [num(t) == s for t in o]
# ---------- m-pit ----------
@check
def q14(o):
    a = sqrt_exact(15 ** 2 + 8 ** 2)
    return [('√' not in t) and num(t) == a for t in o]
@check
def q15(o):
    d2 = F('2.5') ** 2 - F('2.4') ** 2
    assert d2 == F('0.49'); d = F(7, 10)
    assert d * d == d2
    return [num(t) == d for t in o]
@check
def q16(o):
    def reto(t):
        a, b, c = sorted(nums(t))
        return a + b > c and a * a + b * b == c * c
    return [reto(t) for t in o]
@check
def q17(o):
    b, c = 15, 20; a = sqrt_exact(b * b + c * c); h = F(b * c, a)
    assert h * h == F(b * b, a) * F(c * c, a)   # h² = m·n
    return [num(t) == h for t in o]
@check
def q18(o):
    norte = 10 - 2; leste = 6 + 9; d = sqrt_exact(norte ** 2 + leste ** 2)
    return [num(t) == d for t in o]
# ---------- m-circ ----------
@check
def q19(o):
    arco = F(2 * 3 * 20, 8)
    return [num(t) == arco for t in o]
@check
def q20(o):
    B = 180 - 90 - 34
    return [num(t) == B for t in o]
@check
def q21(o):
    x = F(360, 9); arcoCA = 4 * x; B = arcoCA / 2
    A = 3 * x / 2; C = 2 * x / 2
    assert A + B + C == 180
    return [num(t) == B for t in o]
# ---------- m-cart ----------
@check
def q22(o):
    M = (F(-4 + 6, 2), F(3 + -7, 2))
    return [tuple(nums(t)) == M for t in o]
@check
def q23(o):
    d = sqrt_exact((2 - -3) ** 2 + (14 - 2) ** 2)
    return [('√' not in t) and num(t) == d for t in o]
@check
def q24(o):
    A = (-1, 8); M = (3, 5); B = (2 * M[0] - A[0], 2 * M[1] - A[1])
    assert B == (7, 2)
    d = sqrt_exact((B[0] - A[0]) ** 2 + (B[1] - A[1]) ** 2)
    return [num(t) == d for t in o]

# ---------- execução ----------
assert len(Q) == len(checks) == 24, (len(Q), len(checks))
erros = 0
for i, (q, fn) in enumerate(zip(Q, checks), 1):
    textos = [op[0] for op in q['o']]
    assert len(q['o']) == 5, f'Q{i}: precisa de 5 alternativas'
    assert len(set(textos)) == 5, f'Q{i}: alternativas repetidas'
    ok = fn(textos)
    corretas = [j for j, v in enumerate(ok) if v]
    fb_ok = all((op[1] == '') == (j == q['a']) for j, op in enumerate(q['o']))
    status = corretas == [q['a']] and fb_ok
    if not status:
        erros += 1
    print(f"Q{i:2} {q['t']:7} d{q['d']} a={'ABCDE'[q['a']]} corretas={['ABCDE'[j] for j in corretas]} "
          f"feedback_ok={fb_ok} -> {'OK' if status else 'ERRO'}  [{textos[q['a']]}]")
    for campo in ('q', 'e'):
        assert '`' not in q[campo] and '${' not in q[campo]

print()
print('Por tópico:', dict(Counter(q['t'] for q in Q)))
print('Dificuldades por tópico:', {t: sorted(q['d'] for q in Q if q['t'] == t) for t in dict.fromkeys(q['t'] for q in Q)})
print('Posição da correta:', dict(sorted(Counter('ABCDE'[q['a']] for q in Q).items())))
print('RESULTADO:', 'TUDO OK' if erros == 0 else f'{erros} ERRO(S)')
raise SystemExit(1 if erros else 0)
