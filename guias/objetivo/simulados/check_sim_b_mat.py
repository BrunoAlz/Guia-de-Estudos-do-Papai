"""Confere simulados/sim_b_mat.js (SIM_B_MAT).
Estrutura: 15 questões, ordem dos tópicos, 5 alternativas, `a` 0-4, feedback vazio só
na correta, dificuldade 5/6/4, cada letra correta 2 a 4 vezes, alternativas numéricas
em ordem crescente, sem crase nem ${ no texto.
Contas: recalcula cada resposta e confere que só a alternativa marcada a satisfaz."""
import json, os, re, subprocess, math
from fractions import Fraction as F
from itertools import product, permutations
from collections import Counter

HERE = os.path.dirname(os.path.abspath(__file__))
JS = os.path.join(HERE, 'sim_b_mat.js')
src = open(JS, encoding='utf-8').read()
out = subprocess.run(['node', '-e', src + '\nprocess.stdout.write(JSON.stringify(SIM_B_MAT))'],
                     capture_output=True, text=True, check=True).stdout
Q = json.loads(out)
erros = []
def ok(cond, msg):
    if not cond:
        erros.append(msg)

# ---------------- estrutura ----------------
ORDEM = ['m-pct', 'm-reais', 'm-mmc', 'm-eq1', 'm-prod', 'm-eq2', 'm-prop', 'm-seq',
         'm-pol', 'm-pit', 'm-circ', 'm-vol', 'm-graf', 'm-media', 'm-cont']
ok(len(Q) == 15, f'são {len(Q)} questões')
ok([q['t'] for q in Q] == ORDEM, 'ordem dos tópicos diferente da pedida')
mat_ids = set(re.findall(r"\{id:'(m-[a-z0-9]+)'", open(os.path.join(HERE, '..', 'data-mat.js'), encoding='utf-8').read()))
for i, q in enumerate(Q, 1):
    ok(q['t'] in mat_ids, f'{i}: tópico {q["t"]} não existe em data-mat.js')
    ok(q['d'] in (1, 2, 3), f'{i}: d inválido')
    ok(len(q['o']) == 5, f'{i}: não tem 5 alternativas')
    ok(isinstance(q['a'], int) and 0 <= q['a'] <= 4, f'{i}: a inválido')
    for j, (txt, fb) in enumerate(q['o']):
        ok(txt.strip() != '', f'{i}: alternativa {j} vazia')
        if j == q['a']:
            ok(fb == '', f'{i}: correta com feedback')
        else:
            ok(fb.strip() != '', f'{i}: errada {j} sem feedback')
    ok(len({t for t, _ in q['o']}) == 5, f'{i}: alternativas repetidas')
    ok(q['e'].strip() != '', f'{i}: sem resolução')
    for campo in [q['q'], q['e'], q.get('tx', '')] + [x for par in q['o'] for x in par]:
        ok('`' not in campo and '${' not in campo, f'{i}: crase ou ${{ no texto')
        ok(not re.search(r'todas as anteriores|nenhuma das anteriores', campo, re.I), f'{i}: todas/nenhuma')
ok(Counter(q['d'] for q in Q) == Counter({1: 5, 2: 6, 3: 4}), f'dificuldades: {Counter(q["d"] for q in Q)}')
letras = Counter('ABCDE'[q['a']] for q in Q)
ok(all(2 <= letras[L] <= 4 for L in 'ABCDE'), f'letras: {letras}')

# ---------------- leitura numérica ----------------
def num(s):
    s = re.sub(r'<[^>]+>', '', s).strip()
    m = re.fullmatch(r'(\d+) h(?: (\d+) min)?', s)          # horas -> minutos
    if m:
        return F(int(m.group(1)) * 60 + int(m.group(2) or 0))
    m = re.fullmatch(r'(\d+) min', s)
    if m:
        return F(int(m.group(1)))
    m = re.fullmatch(r'(\d+)√\{(\d+)\} m', s)              # a√b m (só para ordenar)
    if m:
        return int(m.group(1)) * math.sqrt(int(m.group(2)))
    m = re.match(r'([\d ]+(?:,\d+)?)', s)
    return F(m.group(1).replace(' ', '').replace(',', '.'))

def vals(i):
    return [num(t) for t, _ in Q[i]['o']]

def unica(i, cond, nome):
    """cond(valor) True só para a alternativa marcada."""
    v = vals(i)
    certos = [j for j, x in enumerate(v) if cond(x)]
    ok(certos == [Q[i]['a']], f'{i+1} ({nome}): alternativas que satisfazem = {certos}, marcada = {Q[i]["a"]}')

def crescente(i):
    v = [float(x) for x in vals(i)]
    ok(v == sorted(v) and len(set(v)) == 5, f'{i+1}: alternativas numéricas fora de ordem crescente {v}')

NUMERICAS = [0, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13, 14]
for i in NUMERICAS:
    crescente(i)

# 1 · m-pct: 60% meninas (25% em times), 40% meninos (40% em times)
r1 = F(60) * F(25, 100) + F(40) * F(40, 100)
unica(0, lambda x: x == r1, 'pct')
ok(r1 == 31, '1: resposta não é 31%')

# 2 · m-reais: ordem crescente de √5, 2,2 e 9/4 (comparando quadrados, exato)
quad = {'√{5}': F(5), '2,2': F(22, 10) ** 2, '[[9|4]]': F(9, 4) ** 2}
certa = tuple(sorted(quad, key=quad.get))
def ordem_alt(t):
    return tuple(x.strip() for x in t.split('&lt;'))
cert2 = [j for j, (t, _) in enumerate(Q[1]['o']) if ordem_alt(t) == certa]
ok(cert2 == [Q[1]['a']], f'2: ordem correta {certa}, marcadas {cert2}')
ok(len({ordem_alt(t) for t, _ in Q[1]['o']}) == 5 and all(set(ordem_alt(t)) == set(quad) for t, _ in Q[1]['o']), '2: alternativas mal formadas')

# 3 · m-mmc: 200 < N < 300, resto 3 por 6, 8 e 10
cond3 = lambda n: 200 < n < 300 and n % 6 == 3 and n % 8 == 3 and n % 10 == 3
sol3 = [n for n in range(201, 300) if cond3(n)]
ok(sol3 == [243], f'3: soluções {sol3}')
unica(2, lambda x: x.denominator == 1 and cond3(int(x)), 'mmc')

# 4 · m-eq1: 15 + 6(x − 1) = 63 (x em horas; alternativas em minutos)
x4 = F(63 - 15, 6) + 1
ok(x4 == 9, '4: x ≠ 9')
unica(3, lambda m: m == x4 * 60, 'eq1')

# 5 · m-prod: x − 1/x = 4, x > 0 → x² + 1/x²  (numérico com x = 2 + √5)
x5 = 2 + math.sqrt(5)
ok(abs(x5 - 1 / x5 - 4) < 1e-12, '5: x não satisfaz')
r5 = x5 ** 2 + 1 / x5 ** 2
ok(abs(r5 - 18) < 1e-9, f'5: resultado {r5}')
unica(4, lambda v: abs(float(v) - r5) < 1e-9, 'prod')

# 6 · m-eq2: 1200/(n−2) − 1200/n = 50
sol6 = [n for n in range(3, 1000) if F(1200, n - 2) - F(1200, n) == 50]
ok(sol6 == [8], f'6: soluções {sol6}')
unica(5, lambda v: v in sol6, 'eq2')

# 7 · m-prop: 4 impressoras, 600 cartazes, 6 h → 3 impressoras, 900 cartazes
ritmo = F(600, 4 * 6)              # cartazes por impressora por hora
h7 = F(900) / (3 * ritmo)
ok(h7 == 12, f'7: {h7} h')
unica(6, lambda m: m == h7 * 60, 'prop')

# 8 · m-seq: cor da 100ª bandeirinha
cores = ['Vermelha', 'Laranja', 'Amarela', 'Verde', 'Azul', 'Roxa']
c8 = cores[(100 - 1) % 6]
fila = [cores[k % 6] for k in range(100)]
ok(fila[99] == c8 == 'Verde', '8: cor errada')
cert8 = [j for j, (t, _) in enumerate(Q[7]['o']) if t == c8]
ok(cert8 == [Q[7]['a']], f'8: marcadas {cert8}')
ok(all(t in cores for t, _ in Q[7]['o']), '8: cor fora do ciclo')

# 9 · m-pol: 90° + 2·interno(n) = 360°
interno = lambda n: F((n - 2) * 180, n)
sol9 = [n for n in range(3, 200) if 90 + 2 * interno(n) == 360]
ok(sol9 == [8], f'9: soluções {sol9}')
unica(8, lambda v: v in sol9, 'pol')
for t, fb in Q[8]['o']:               # ângulos citados nos feedbacks
    n = int(num(t))
    if fb:
        ok(f'{interno(n)}°' in fb and f'{90 + 2 * interno(n)}°' in fb, f'9: feedback de {n} com conta errada')

# 10 · m-pit: (9 − x)² = x² + 3²
x10 = F(81 - 9, 18)
ok((9 - x10) ** 2 == x10 ** 2 + 9 and x10 == 4, '10: x ≠ 4')
unica(9, lambda v: isinstance(v, F) and v == x10, 'pit')
ok(abs(6 * math.sqrt(2) - math.sqrt(81 - 9)) < 1e-12, '10: 6√2 ≠ √72')

# 11 · m-circ: 12 cabines, menor ângulo central entre 1 e 5
k = (5 - 1) % 12
a11 = min(k, 12 - k) * F(360, 12)
ok(a11 == 120, '11: ≠ 120°')
unica(10, lambda v: v == a11, 'circ')

# 12 · m-vol: cilindro d = 2 m, h = 1,5 m, π = 3, cheio até 1/3, vazão 15 L/min
V = 3 * F(1) ** 2 * F(3, 2) * 1000     # litros
t12 = (1 - F(1, 3)) * V / 15           # minutos
ok(t12 == 200, f'12: {t12} min')
unica(11, lambda m: m == t12, 'vol')
# distratores: 1 m³ = 100 L; só 1/3; caixa vazia; raio = diâmetro
ok(vals(11) == sorted([(F(2, 3) * V / 10) / 15, F(1, 3) * V / 15, t12, V / 15, F(2, 3) * 3 * 4 * F(3, 2) * 1000 / 15]), '12: distratores não batem')

# 13 · m-graf: maior aumento entre meses consecutivos
tab = re.findall(r'<td>([^<]+)</td><td>([\d ]+)</td>', Q[12]['tx'])
v13 = [int(x.replace(' ', '')) for _, x in tab]
ok(len(v13) == 5, '13: tabela')
dif = [b - a for a, b in zip(v13, v13[1:])]
r13 = max(dif)
ok(r13 == 6000 and dif.count(r13) == 1, f'13: diferenças {dif}')
unica(12, lambda v: v == r13, 'graf')

# 14 · m-media: 30 alunos média 6,0 e 20 alunos média 8,5
r14 = (30 * F(6) + 20 * F(85, 10)) / 50
ok(r14 == 7, f'14: {r14}')
unica(13, lambda v: v == r14, 'media')

# 15 · m-cont: números de 100 a 999 com pelo menos um 7
r15 = sum(1 for n in range(100, 1000) if '7' in str(n))
ok(r15 == 252 == 900 - 8 * 9 * 9, f'15: {r15}')
unica(14, lambda v: v == r15, 'cont')
exato1 = sum(1 for n in range(100, 1000) if str(n).count('7') == 1)
ok(vals(14) == sorted([900 - 729, exato1, r15, 100 + 90 + 90, 648]), '15: distratores não batem')

# ---------------- resultado ----------------
print('Gabarito:')
for i, q in enumerate(Q, 1):
    print(f'{i:2d}. {q["t"]:8s} d{q["d"]}  {"ABCDE"[q["a"]]}  {re.sub(r"<[^>]+>", "", q["o"][q["a"]][0])}')
print('Dificuldades:', dict(sorted(Counter(q['d'] for q in Q).items())), '· Letras:', dict(sorted(letras.items())))
if erros:
    print('\nERROS:')
    for e in erros:
        print(' -', e)
    raise SystemExit(1)
print('\nTudo certo: estrutura e contas conferidas.')
