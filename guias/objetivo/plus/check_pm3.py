"""Confere as contas de plus/pm3.js (PLUS_M3) e a estrutura do arquivo.
Uso: python3 plus/check_pm3.py   (precisa de node no PATH)
"""
import json, math, os, re, subprocess
from fractions import Fraction as F

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
ok = 0
def eq(a, b, msg):
    global ok
    assert abs(F(a) - F(b)) < F(1, 10**9) if not isinstance(a, float) else abs(a - b) < 1e-9, f'FALHOU: {msg}: {a} != {b}'
    ok += 1
def approx(a, b, tol, msg):
    global ok
    assert abs(a - b) <= tol, f'FALHOU: {msg}: {a} ~ {b}'
    ok += 1
def isq(n):
    r = math.isqrt(n); assert r * r == n, n; return r

# ---------------- m-ang ----------------
eq(90 - 25, 65, 'compl 25'); eq(180 - 25, 155, 'supl 25')
eq(180 - 35, 145, 'OPV vizinho 35'); eq(35 + 145 + 35 + 145, 360, 'volta')
eq(180 - (50 + 70), 60, 'reta 50 70'); eq(F(84, 2), 42, 'bissetriz 84'); eq(180 - 65, 115, 'paralelas 65')
x = F(180 - 20, 8); eq(x, 20, 'duas cores x'); eq(3*x+10, 70, 'agudo'); eq(5*x+10, 110, 'obtuso'); eq(70+110, 180, 'soma')
eq(90 - 37, 53, 'compl 37'); eq(180 - 128, 52, 'supl 128'); eq(65 + 90, 155, 'S=C+90')
C = F(90, 2); eq(C, 45, 'C'); eq(90 - C, 45, 'x'); eq(180 - 45, 3 * (90 - 45), 'triplo')
x = F(180, 3); eq(x, 60, 'dobro compl'); eq(x, 2 * (90 - x), 'dobro check')
eq(35 + 50, 85, 'bico')
x = F(30 + 20, 2); eq(x, 25, 'OPV x'); eq(5*x-20, 105, 'OPV ang'); eq(3*x+30, 105, 'OPV ang2'); eq(180-105, 75, 'viz')
x = F(140, 4); eq(x, 35, 'ex2 x'); eq(x+40, 75, 'agudo'); eq(3*x, 105, 'obt')
x = F(540 - 300, 5); eq(x, 48, 'ex3 x'); eq(2*(90-x) + (180-x)/2, 150, 'ex3 check'); eq(2*(90-x), 84, ''); eq((180-x)/2, 66, '')
eq(90 - 40, 50, 'erro compl'); eq(180 - 40, 140, 'erro supl')

# ---------------- m-pol ----------------
eq(180 - 110, 70, 'tri 50 60'); eq((5-2)*180, 540, 'penta'); eq(50+60, 110, 'externo'); eq(180-70, 110, '')
eq(F(360, 6), 60, 'hex ext'); eq(180 - 60, 120, 'hex int'); eq(F(7*4, 2), 14, 'hepta diag')
eq(180 - 2*65, 50, 'isosc'); assert 3 + 4 < 8 and 3 + 4 > 6; ok += 1
eq(F(360, 8), 45, 'octo ext'); eq(180 - 45, 135, 'octo int')
eq(F(360, 10), 36, 'deca ext'); eq(180 - 36, 144, 'deca int'); eq(180 - 156, 24, ''); eq(F(360, 24), 15, '15 lados')
for n, s in [(3,180),(4,360),(5,540),(6,720),(7,900),(8,1080)]: eq((n-2)*180, s, f'escada {n}')
eq(F(1260, 180), 7, '1260'); eq(F(126, 18), 7, ''); eq((9-2)*180, 1260, 'enea')
eq(45 + 75, 120, 'ext tri'); eq(140 - 60, 80, 'ext tri 2')
eq(F(10*7, 2), 35, 'deca diag'); eq(F(20*17, 2), 170, 'icosa diag')
eq(F(180 - 50, 2), 65, 'isosc vert 50'); eq(180 - 2*72, 36, 'isosc base 72')
x = F(180, 6); eq(x, 30, 'x 2x 3x'); eq(3*x, 90, 'reto')
e = F(180, 4); eq(e, 45, 'e'); eq(F(360, e), 8, 'n'); eq(F(8*5, 2), 20, 'diag 8')
n = 7; eq(F(n*(n-3), 2), 2*n, 'diag=2n'); eq((n-2)*180, 900, '900')
eq(F(6*3, 2), 9, 'hex diag'); eq((5-2)*180, 540, ''); eq(5*180, 900, 'n*180 errado penta')

# ---------------- m-sem ----------------
eq(F(20, 10), F(30, 15), 'foto'); eq(F(10, 4), F(5, 2), 'k 2,5'); eq(180 - 50 - 60, 70, 'AA')
eq(6**2, 4 * 3**2, 'area k2'); eq(F(12, 3), 4, 'DE'); x = F(3*4, 2); eq(x, 6, 'tales'); eq(F(30, 6), 5, 'cruzado')
k = F(10, 4); eq(6*k, 15, ''); eq(8*k, 20, ''); eq(18*k, 45, ''); eq(10+15+20, 45, '')
eq(F(9, 3), 3, 'k sep'); eq(5*3, 15, 'BC')
eq(F(45, 10)/3, F(3, 2), 'sombra/alt'); eq(12 / F(3, 2), 8, 'arvore'); eq(F(3, F(9, 2)) * 12, 8, '')
eq(6 * 100**2, 60000, 'planta'); eq(F(60000, 10000), 6, 'm2'); eq(isq(25), 5, 'k area 25')
eq(F(30, 10), 3, 'tales total'); eq(2*3, 6, ''); eq(3*3, 9, ''); eq(5*3, 15, ''); eq(6+9+15, 30, '')
eq(F(27, 9), 3, 'ex1 k'); eq((5+7+9)*3, 63, 'ex1 per')
eq(F(30, 2) * F(16, 10), 24, 'espelho')
k = F(10, 4); eq(k*k, F(625, 100), 'k2'); eq(8*k*k, 50, 'area ABC'); eq(50-8, 42, 'trapezio')

# ---------------- m-pit ----------------
for i in range(1, 21): pass
quad = {1:1,2:4,3:9,4:16,5:25,6:36,7:49,8:64,9:81,10:100,11:121,12:144,13:169,14:196,15:225,16:256,17:289,18:324,19:361,20:400}
for i, q in quad.items(): eq(i*i, q, f'{i}^2')
assert 7**2 < 50 < 8**2; ok += 1
approx(math.sqrt(2), 1.41, 0.005, 'r2'); approx(math.sqrt(3), 1.73, 0.005, 'r3')
eq(9 + 16, 25, 'areas')
eq(isq(81 + 144), 15, '9 12'); eq(isq(100 - 64), 6, '10 8')
for a, b, c in [(3,4,5),(5,12,13),(8,15,17),(7,24,25),(6,8,10),(9,12,15),(12,16,20),(15,20,25),(10,24,26),(16,30,34)]:
    eq(a*a + b*b, c*c, f'terno {a}-{b}-{c}')
approx(5 * 1.41, 7.05, 1e-9, 'diag 5'); approx(3 * 1.73, 5.19, 1e-9, 'eq 6')
eq(F(6, 2)**2 + 27, 36, 'h equil 6: h^2=27=(3r3)^2')
a, b, c = 5, 4, 3; m = F(b*b, a); n = F(c*c, a); h = F(b*c, a)
eq(m, F(32, 10), 'm'); eq(n, F(18, 10), 'n'); eq(h, F(24, 10), 'h'); eq(h*h, F(576, 100), 'h2'); eq(m*n, h*h, 'h2=mn'); eq(m+n, a, 'a=m+n')
eq(isq(30**2 + 40**2), 50, ''); eq(isq(20**2 + 48**2), 52, '')
eq(isq(26**2 - 10**2), 24, ''); eq(isq(34**2 - 16**2), 30, '')
eq((25-24)*(25+24), 49, ''); eq(isq(25**2-24**2), 7, ''); eq(isq(41**2-40**2), 9, ''); eq((17-15)*(17+15), 64, ''); eq(isq(17**2-15**2), 8, '')
eq(15**2, 225, ''); eq(25**2, 625, ''); eq(35**2, 1225, '')
eq(isq(81 + 144), 15, ''); eq(F(9*12, 15), F(72, 10), 'h 7,2')
eq(isq(36 + 64), 10, ''); approx(math.sqrt(200), 14.1, 0.05, 'r200'); eq(14**2, 196, '')
eq(isq(24**2 + 7**2), 25, 'cerca'); eq(49 + 576, 625, '')
eq(F(10**2, 2), 50, 'area quad diag 10')
n = F(144, 16); eq(n, 9, 'n'); eq(16 + 9, 25, 'a'); eq(isq(25*16), 20, 'b'); eq(isq(25*9), 15, 'c'); eq(25*12, 20*15, 'ah=bc'); eq(25*12, 300, '')
eq(isq(169 - 25), 12, 'erro 1'); eq(isq(9 + 16), 5, ''); eq(isq(169), 13, ''); eq(isq(4*9), 6, 'h mn')

# ---------------- m-circ ----------------
eq(2*7, 14, 'diam'); eq(F(360, 12), 30, 'hora'); eq(F(360, 6), 60, 'pizza'); eq(F(140, 2), 70, 'inscr')
eq(90 - 25, 65, 'semic'); approx(3.14 * 10, 31.4, 1e-9, 'C d10'); approx(2*3.14*10/4, 15.7, 1e-9, 'arco 90')
eq(2*40, 80, ''); eq(F(110, 2), 55, ''); eq(F(180-100, 2), 40, 'isosc raio')
eq(2*3*6, 36, ''); eq(F(36, 6), 6, 'arco 60'); approx(2*3.14*4, 25.12, 1e-9, ''); approx(2*3.14*4/8, 3.14, 1e-9, 'arco 45')
eq(isq(100 - 36), 8, 'diam pit'); eq(180 - 110, 70, 'quad insc')
eq(2*3*F(1, 2), 3, 'roda C'); eq(200*3, 600, ''); eq(F(1200, 3), 400, '')
eq(4*30, 120, 'relogio')
x = F(150, 5); eq(x, 30, 'quad x'); eq(3*x+10, 100, ''); eq(2*x+20, 80, '')
eq(2*5, 10, 'AB'); eq(isq(100 - 64), 6, 'BC'); eq(F(6*8, 2), 24, 'area'); approx(2*3.14*5, 31.4, 1e-9, 'C r5')

# ---------------- m-cart ----------------
eq(5 - (-2), 7, 'horiz'); eq(F(1+9, 2), 5, ''); eq(F(3+7, 2), 5, '')
eq(isq((5-2)**2 + (3-(-1))**2), 5, 'dist 2,-1 5,3')
eq(isq(3**2 + 4**2), 5, 'A1,1 B4,5')
eq(4 - (-3), 7, ''); eq(-1 - (-6), 5, '')
eq(F(2+10, 2), 6, ''); eq(F(1+7, 2), 4, '')
eq(4 + (4-1), 7, ''); eq(5 + (5-2), 8, ''); eq(F(1+7, 2), 4, 'M back x'); eq(F(2+8, 2), 5, 'M back y')
eq(isq(25 + 144), 13, ''); eq(isq(81 + 144), 15, '')
eq(isq(36 + 64), 10, 'P origem')
AB, BC = 7-1, 9-1; eq(AB, 6, ''); eq(BC, 8, ''); AC = isq(AB**2 + BC**2); eq(AC, 10, ''); eq(AB+BC+AC, 24, 'per'); eq(F(AB*BC, 2), 24, 'area')
M = (F(-2+4, 2), F(3-5, 2)); eq(M[0], 1, ''); eq(M[1], -1, '')
eq(isq((4+2)**2 + (3+5)**2), 10, 'AB'); eq(isq((1+2)**2 + (3+1)**2), 5, 'AM')
eq(5 - (-3), 8, 'erro'); eq(isq(36 + 64), 10, '')

# ---------------- estrutura ----------------
js = subprocess.run(['node', '-e',
    "const fs=require('fs');eval(fs.readFileSync(process.argv[1],'utf8')+';globalThis.P=PLUS_M3');console.log(JSON.stringify(P))",
    os.path.join(HERE, 'pm3.js')], capture_output=True, text=True, check=True).stdout
P = json.loads(js)
src = open(os.path.join(ROOT, 'data-mat.js'), encoding='utf8').read()
ids_m3 = re.findall(r"\{id:'(m-[a-z0-9]+)', mod:'M3'", src)
assert sorted(P) == sorted(ids_m3), (sorted(P), ids_m3)
lim = {'base': (5, 9), 'jeitos': (4, 7), 'passo': (4, 6), 'exs': (3, 3), 'erros': (3, 5), 'resumo': (4, 6)}
for t, d in P.items():
    assert set(d) == set(lim), (t, set(d))
    for k, (lo, hi) in lim.items():
        assert lo <= len(d[k]) <= hi, (t, k, len(d[k]))
    assert all(len(b) == 2 for b in d['base'])
    assert all(set(j) == {'n', 'c', 'ex'} for j in d['jeitos'])
    assert all(set(e) == {'q', 's', 'r'} and e['s'] for e in d['exs'])
    assert all('<b>Errado:</b>' in e and '<b>Certo:</b>' in e for e in d['erros'])
raw = open(os.path.join(HERE, 'pm3.js'), encoding='utf8').read()
assert '${' not in raw
print(f'OK: {ok} contas conferidas; ids {sorted(P)}; limites de campos respeitados.')
