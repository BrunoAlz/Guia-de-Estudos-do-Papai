"""Revisão independente do lote m3 (m-ang, m-pol, m-sem, m-pit, m-circ, m-cart):
data-mat.js, data-macetes.js, plus/pm3.js e figuras (app.html). Uso: python3 review/rev_m3.py"""
import math
from fractions import Fraction as F
n_ok = 0
def ck(c, msg):
    global n_ok
    assert c, 'FALHOU: ' + msg
    n_ok += 1
def eq(a, b, msg):
    if isinstance(a, (list, tuple)):
        ck(len(a) == len(b), msg); [eq(u, v, msg) for u, v in zip(a, b)]; return
    ck(abs(F(a) - F(b)) < F(1, 10**9) if not isinstance(a, float) and not isinstance(b, float) else abs(a - b) < 1e-9, f'{msg}: {a} != {b}')
def ap(a, b, tol, msg): ck(abs(a - b) <= tol, f'{msg}: {a} ~ {b}')
def solve_lin(a1, b1, a2, b2):  # a1 x + b1 = a2 x + b2
    return F(b2 - b1, a1 - a2)
def hyp(b, c): return math.hypot(b, c)
def cat(a, b): return math.sqrt(a*a - b*b)
def diag(n): return n*(n-3)//2
def si(n): return (n-2)*180

# ===== data-mat.js =====
# m-ang
x = solve_lin(3, 10, 5, -30); eq(x, 20, 'ang ex1 x'); eq(3*x+10, 70, 'ang ex1'); eq(5*x-30, 70, 'ang ex1b')
x = F(180-30, 3); eq(x, 50, 'ang ex2'); eq(2*x, 100, ''); eq(x+30, 80, '')
eq(90-40, 50, 'trap'); eq(180-40, 140, 'trap')
eq(180-(90-30), 120, 'qz1')
x = solve_lin(3, -20, 2, 15); eq(x, 35, 'qz2 x'); eq(3*x-20, 85, 'qz2')
eq(180-115, 65, 'qz3')
# m-pol
eq(si(6), 720, ''); eq(F(720, 6), 120, ''); eq(diag(6), 9, ''); eq(F(360, 30), 12, '')
eq(si(8), 1080, 'qz1'); eq(F(360, 180-140), 9, 'qz2'); eq(F(180-40, 2), 70, 'qz3')
# m-sem
eq(F(6)*F(16, 10)/F(12, 10), 8, 'poste'); eq(F(12, 10)*8, F(96, 10), '1,2h=9,6')
eq(F(6*6, 4), 9, 'tales ex'); eq(F(15*2, 3), 10, 'qz1'); eq(5*3**2, 45, 'qz2'); eq(F(30, 3), 10, 'qz3')
# m-pit
eq(25+36, 61, 'reciproca 5,6,7'); ck(61 != 49, 'reciproca')
eq(cat(5, 3), 4.0, 'escada'); eq(math.sqrt(4*9), 6.0, 'h=6')
eq(hyp(12, 5), 13.0, 'qz1'); eq(144-25, 119, 'distrator'); eq(hyp(80, 60), 100.0, 'qz2'); eq(6400+3600, 10000, '')
eq(math.sqrt(16), 4.0, 'qz3'); ap(cat(10, 5), 5*math.sqrt(3), 1e-12, 'qz4'); eq(100-25, 75, '')
# m-circ
eq(100/2, 50.0, ''); ap(2*3.14*50, 314, 1e-9, 'pista'); eq(35*2, 70, ''); eq(120/2, 60.0, '')
ap(2*3.14*30, 188.4, 1e-9, 'roda'); ap(3.14*30**2, 2826, 1e-9, 'area distrator')
# m-cart
eq(F(1+7, 2), 4, ''); eq(F(2+10, 2), 6, ''); eq(hyp(6, 8), 10.0, '')
eq(F(-2+6, 2), 2, 'qz1'); eq(F(5+1, 2), 3, ''); eq(hyp(5, 12), 13.0, 'qz2')
# figuras (app.html)
# paralelas: transversal (90,190)-(230,10) cruza y=60 em x~191 e y=140 em x~129
ap(90+140*(130/180), 191, 0.2, 'fig paral'); ap(90+140*(50/180), 129, 0.2, 'fig paral2')
# pitagoras: B(30,170) A(110,50) C(290,170) -> reto em A; H(110,170)
eq((30-110)*(290-110)+(170-50)*(170-50), 0, 'fig pit reto em A')
AB2 = 80**2+120**2; AC2 = 180**2+120**2; eq(AC2, 260*180, 'b2=a.m (m=HC)'); eq(AB2, 260*80, 'c2=a.n (n=BH)')
# inscrito: centro (160,105) r 80
ap(math.hypot(108.6-160, 166.3-105), 80, 0.05, 'A na circ'); ap(math.hypot(160-160, 25-105), 80, 0, 'C')
# cartesiano: origem (20,180), 15 px/unid
eq((35-20)/15, 1.0, ''); eq((180-150)/15, 2.0, ''); eq((125-20)/15, 7.0, ''); eq((180-30)/15, 10.0, ''); eq((80-20)/15, 4.0, ''); eq((180-90)/15, 6.0, '')

# ===== plus/pm3.js =====
# m-ang
eq(90-25, 65, ''); eq(180-25, 155, ''); eq(180-35, 145, ''); eq(35+145+35+145, 360, '')
eq(180-50-70, 60, ''); eq(84/2, 42.0, ''); eq(180-65, 115, '')
x = F(180-20, 8); eq(x, 20, 'duas cores'); eq(3*x+10, 70, ''); eq(5*x+10, 110, '')
eq(90-37, 53, ''); eq(3+50, 53, ''); eq(180-128, 52, ''); eq(2+50, 52, '')
C = F(90, 2); eq(90-C, 45, 'triplo'); eq(180-45, 3*(90-45), 'triplo check')
x = F(180, 3); eq(x, 2*(90-x), 'dobro compl'); eq(x, 60, '')
eq(35+50, 85, 'bico')
x = solve_lin(5, -20, 3, 30); eq(x, 25, ''); eq(5*x-20, 105, ''); eq(180-105, 75, '')
x = F(180-40, 4); eq(x, 35, ''); eq(x+40, 75, ''); eq(3*x, 105, '')
x = F(540-300, 5); eq(x, 48, ''); eq(2*(90-x)+F(180-x, 2), 150, 'dobro+metade'); eq(2*(90-x), 84, ''); eq(F(180-x, 2), 66, '')
# m-pol
eq(180-110, 70, ''); eq(si(5), 540, ''); eq(50+60, 110, ''); eq(360/6, 60.0, ''); eq(diag(7), 14, ''); eq(180-130, 50, '')
ck(3+4 < 8 and 3+4 > 6, 'desig triang'); eq(360/8, 45.0, ''); eq(180-45, 135, '')
eq(180-36, 144, ''); eq(F(360, 180-156), 15, '')
ck([si(n) for n in range(3, 9)] == [180, 360, 540, 720, 900, 1080], 'escadinha'); eq(F(1260, 180)+2, 9, '')
eq(45+75, 120, ''); eq(140-60, 80, ''); eq(diag(10), 35, ''); eq(diag(20), 170, '')
eq(F(180-50, 2), 65, ''); eq(180-144, 36, '')
x = F(180, 6); eq([x, 2*x, 3*x], [30, 60, 90], 'x,2x,3x')
e = F(180, 4); eq(e, 45, ''); eq(F(360, e), 8, ''); eq(diag(8), 20, '')
n = 7; eq(diag(n), 2*n, 'diag=2n'); eq(si(7), 900, ''); eq(5*180, 900, 'erro n*180 pentagono')
# m-sem
eq(F(10, 4), F(5, 2), 'k 2,5'); eq(F(2, 6)*12, 4, 'DE'); eq(F(3*4, 2), 6, 'tales'); eq(F(30, 6), 5, 'cruzado')
eq(6*F(5, 2), 15, ''); eq(8*F(5, 2), 20, ''); eq(18*F(5, 2), 45, '')
eq(F(9, 3)*5, 15, 'separe'); eq(F(12)/F(45, 30), 8, 'muro'); eq(6*100**2, 60000, ''); eq(F(60000, 10000), 6, 'm2')
eq(math.isqrt(25), 5, ''); eq([2*3, 3*3, 5*3], [6, 9, 15], 'tales total')
eq((5+7+9)*F(27, 9), 63, 'perim'); eq(F(16, 10)*F(30, 2), 24, 'espelho')
eq(8*F(10, 4)**2, 50, 'area ABC'); eq(50-8, 42, 'trapezio')
# m-pit
ck(all(F(i*i) == i**2 for i in range(1, 21)), ''); ck([i*i for i in range(11, 21)] == [121, 144, 169, 196, 225, 256, 289, 324, 361, 400], 'tabela')
ck(49 < 50 < 64, 'raiz50'); ap(math.sqrt(2), 1.41, 0.005, ''); ap(math.sqrt(3), 1.73, 0.005, '')
eq(hyp(9, 12), 15.0, ''); eq(cat(10, 8), 6.0, '')
for t in [(6, 8, 10), (9, 12, 15), (12, 16, 20), (15, 20, 25), (10, 24, 26), (16, 30, 34), (7, 24, 25), (8, 15, 17)]:
    eq(t[0]**2+t[1]**2, t[2]**2, f'terno {t}')
ap(5*1.41, 7.05, 1e-9, ''); ap(3*1.73, 5.19, 1e-9, '')
eq(F(16, 5), F(32, 10), 'm'); eq(F(9, 5), F(18, 10), 'n'); eq(F(12, 5), F(24, 10), 'h'); eq(F(24, 10)**2, F(32, 10)*F(18, 10), '')
eq(hyp(30, 40), 50.0, ''); eq(hyp(20, 48), 52.0, ''); eq(cat(26, 10), 24.0, ''); eq(cat(34, 16), 30.0, '')
eq(cat(25, 24), 7.0, ''); eq(cat(41, 40), 9.0, ''); eq(cat(17, 15), 8.0, ''); eq((17-15)*(17+15), 64, '')
eq(15**2, 225, ''); eq(25**2, 625, ''); eq(35**2, 1225, ''); eq(F(9*12, 15), F(72, 10), '')
ck(all((k*k) % 10 not in (2, 3, 7, 8) for k in range(1000)), 'final quadrado'); ap(math.sqrt(200), 14.1, 0.05, '')
eq(hyp(24, 7), 25.0, ''); eq(49+576, 625, ''); eq(F(100, 2), 50, 'diag10 area')
nn = F(144, 16); eq(nn, 9, ''); eq(16+nn, 25, ''); eq(math.isqrt(25*16), 20, ''); eq(math.isqrt(25*9), 15, ''); eq(25*12, 20*15, '')
eq(169-25, 144, ''); eq(math.isqrt(4*9), 6, '')
# m-circ
eq(2*7, 14, ''); eq(360/12, 30.0, ''); eq(360/6, 60.0, ''); eq(140/2, 70.0, ''); eq(90-25, 65, '')
ap(3.14*10, 31.4, 1e-9, ''); ap(2*3.14*10/4, 15.7, 1e-9, '')
eq(40*2, 80, ''); eq(110/2, 55.0, ''); eq(F(180-100, 2), 40, '')
eq(2*3*6/6, 6.0, ''); ap(2*3.14*4, 25.12, 1e-9, ''); ap(25.12/8, 3.14, 1e-9, '')
eq(cat(10, 6), 8.0, ''); eq(180-110, 70, ''); eq(2*3*0.5, 3.0, ''); eq(200*3, 600, ''); eq(1200/3, 400.0, '')
eq(4*30, 120, 'relogio 4h')
x = F(180-30, 5); eq(x, 30, ''); eq(3*x+10, 100, ''); eq(2*x+20, 80, '')
eq(cat(10, 8), 6.0, ''); eq(6*8/2, 24.0, ''); ap(2*3.14*5, 31.4, 1e-9, '')
# m-cart
eq(5-(-2), 7, ''); eq((F(1+9, 2), F(3+7, 2)), (5, 5), ''); eq(hyp(5-2, 3-(-1)), 5.0, '')
eq(hyp(3, 4), 5.0, ''); eq(4-(-3), 7, ''); eq(-1-(-6), 5, '')
eq((2+8/2, 1+6/2), (6.0, 4.0), ''); eq((F(2+10, 2), F(1+7, 2)), (6, 4), '')
eq((4+3, 5+3), (7, 8), ''); eq((F(1+7, 2), F(2+8, 2)), (4, 5), 'B volta')
eq(hyp(5, 12), 13.0, ''); eq(hyp(9, 12), 15.0, '')
eq(hyp(6, 8), 10.0, 'P origem'); eq(6+8+10, 24, ''); eq(6*8/2, 24.0, '')
eq((F(-2+4, 2), F(3-5, 2)), (1, -1), 'M'); eq(hyp(6, 8), 10.0, ''); eq(hyp(1-(-2), -1-3), 5.0, 'AM')
eq(5-(-3), 8, ''); eq(6+8, 14, ''); eq(math.sqrt(36+64), 10.0, '')
print(f'OK: {n_ok} conferências do lote m3 passaram.')
