"""Confere todas as contas de plus/pm45.js (PLUS_M45)."""
from fractions import Fraction as F
from itertools import permutations, product, combinations
from math import factorial, pi, isclose

ok = 0
def chk(label, got, exp):
    global ok
    if isinstance(got, float) or isinstance(exp, float):
        good = isclose(got, exp, rel_tol=1e-9, abs_tol=1e-9)
    else:
        good = got == exp
    assert good, f"FALHOU {label}: {got} != {exp}"
    ok += 1

# ---------------- m-area ----------------
chk('ret 5x3 P', 2*(5+3), 16); chk('ret 5x3 A', 5*3, 15)
chk('paral 8x4', 8*4, 32); chk('paral errado', 8*5, 40); chk('paral 9x4', 9*4, 36)
chk('tri 7x6', F(7*6, 2), 21)
chk('trap 12,8,5', F(12+8, 2)*5, 50)
chk('circ r10 A', 3.14*100, 314.0); chk('circ r10 C', 2*3.14*10, 62.8)
for n, q in [(11,121),(12,144),(13,169),(14,196),(15,225),(20,400),(25,625)]: chk(f'{n}^2', n*n, q)
chk('L sub', 10*8 - 4*3, 68); chk('L cut', 10*5 + 6*3, 68)
chk('trap 15,9,6', F(15+9,2)*6, 72); chk('trap 15,9,6 formula', F((15+9)*6, 2), 72)
chk('trap 7,5,10', F(7+5,2)*10, 60)
chk('tri 14x9', F(14*9,2), 63); chk('tri 25x8', F(25*8,2), 100)
chk('quad 6', 36, 6*6); chk('quad 12', 12*12, 144); chk('x4', 144, 4*36)
chk('circ 3->6', 6**2, 4*3**2); chk('tri x9', 10*9, 90)
chk('400*3,14', 400*3.14, 1256.0); chk('400*3+400*0,14', 400*3 + 400*0.14, 1256.0)
chk('semic r4', 4**2/2, 8); chk('8*3,14', 8*3.14, 25.12); chk('24+1,12', 24+1.12, 25.12)
chk('per20 1x9', 1*9, 9); chk('per20 4x6', 4*6, 24); chk('per20 5x5', 5*5, 25)
chk('max area per 20', max(b*(10-b) for b in range(0, 11)), 25)
# exs
chk('ex1 A', 12*5, 60); chk('ex1 P', 2*(12+7), 38)
chk('ex2 tri', F(40*60,2), 1200); chk('ex2 ret', 60*40, 2400); chk('ex2 resto', 2400-1200, 1200)
chk('ex3 razao areas', (pi*15**2)/(pi*7.5**2), 4.0); chk('ex3 4 brotos', 4*12, 48)

# ---------------- m-vol ----------------
chk('caixa 4x3x2', 4*3*2, 24); chk('chao 4x3', 4*3, 12)
chk('prisma tri', F(6*4,2)*10, 120)
chk('cubos', [n**3 for n in range(1,11)], [1,8,27,64,125,216,343,512,729,1000])
chk('1dm3', 10*10*10, 1000)
chk('80x50x30 cm3->L', F(80*50*30, 1000), 120); chk('8x5x3', 8*5*3, 120)
chk('2x1x0,5 m3->L', 2*1*0.5*1000, 1000.0); chk('20x10x5', 20*10*5, 1000)
chk('cubo 2', 2**3, 8); chk('cubo 6', 6**3, 216); chk('216=27x8', 27*8, 216)
chk('40/8', F(40,8), 5)
chk('falta', 2*1.5*(1-0.6), 1.2); chk('falta L', 1.2*1000, 1200.0)
chk('25x13x4', 25*13*4, 1300); chk('cil 3x25x4', 3*5**2*4, 300)
chk('vazao', F(600,20), 30)
chk('erro unid', 20*5*3, 300); chk('erro unid cm3', F(200*50*30, 1000), 300)
# exs
chk('rampa tri', F(3*1,2), F(3,2)); chk('rampa V', F(3,2)*2, 3)
chk('copo', 3*3**2*10, 270); chk('1800/270 floor', 1800//270, 6)
chk('6*270', 6*270, 1620); chk('7*270', 7*270, 1890)
chk('cubo agua', 10**3, 1000); chk('25*8', 25*8, 200); chk('h', F(1000,200), 5)

# ---------------- m-unid ----------------
chk('3,7m', round(3.7*100), 370); chk('450cm', 450/100, 4.5)
chk('3m2 dm2', 3*100, 300); chk('3m2 cm2', 3*10000, 30000)
chk('2m3 dm3', 2*1000, 2000); chk('2m3 cm3', 2*10**6, 2000000)
chk('2,5kg', 2.5*1000, 2500.0)
chk('0,5h', 0.5*60, 30.0); chk('0,25h', 0.25*60, 15.0); chk('0,75h', 0.75*60, 45.0)
chk('1,2h', round(1.2*60), 72); chk('1h', 60*60, 3600)
chk('90min', F(90,60), F(3,2)); chk('20min', F(20,60), F(1,3)); chk('45min', F(45,60), F(3,4))
chk('2,5km', 2.5*1000, 2500.0); chk('0,04m2', round(0.04*10000), 400); chk('5000cm3', F(5000,1000), 5)
chk('0,7h', round(0.7*60), 42); chk('0,2h', round(0.2*60), 12)
chk('0,35h', round(0.35*60), 21); chk('0,3h', round(0.3*60), 18); chk('0,05h', round(0.05*60), 3)
chk('36min', F(36,60), F(6,10)); chk('24min', F(24,60), F(4,10))
chk('3h s', 3*3600, 10800); chk('54kmh', F(54000,3600), 15); chk('54/3,6', F(540,36), 15)
chk('8h45+1h50', (8*60+45+110), 10*60+35); chk('9h50->11h20', 11*60+20-(9*60+50), 90)
# exs
chk('0,75L', round(0.75*1000), 750); chk('750/250', F(750,250), 3)
chk('ritmo', F(60,5), 12); chk('10/(5/6)', F(10)/F(5,6), 12)
chk('azulejos fileiras', (300//20)*(240//20), 180); chk('15', 300/20, 15.0); chk('12', 240/20, 12.0)
chk('parede cm2', 300*240, 72000); chk('azulejo cm2', 20*20, 400); chk('azulejos', F(72000,400), 180)
chk('2h40', F(40,60), F(2,3))

# ---------------- m-graf ----------------
chk('80/60', F(80,60), F(4,3))
chk('1%', 360/100, 3.6); chk('10%', 0.10*360, 36.0); chk('30%', 0.30*360, 108.0); chk('3x36', 3*36, 108)
chk('200->250', 250-200, 50); chk('50/200', F(50,200), F(1,4))
chk('15%', 0.15*360, 54.0); chk('36+18', 36+18, 54); chk('45 graus', F(45,360), F(1,8)); chk('12,5%', F(1,8), F(125,1000))
for g, fr in [(180,F(1,2)),(120,F(1,3)),(90,F(1,4)),(60,F(1,6)),(45,F(1,8)),(30,F(1,12))]: chk(f'{g}g', F(g,360), fr)
chk('60g de 420', F(1,6)*420, 70); chk('90g de 360', F(90,360)*360, 90)
chk('fatia', 100-(35+25+20), 20); chk('graus resto', 360-(150+90), 120)
chk('120->150', 150-120, 30); chk('150/120', F(150,120), F(125,100)); chk('30/120', F(30,120), F(1,4))
chk('eixo 50', (50+10, 50+30), (60, 80)); chk('80-60', 80-60, 20)
# exs
chk('onibus-bici', 150-90, 60)
chk('jan-fev', F(1000-800,800), F(25,100)); chk('fev-mar', F(900-1000,1000), F(-10,100)); chk('mar-abr', F(1350-900,900), F(50,100))
chk('melhor', max([F(200,800), F(-100,1000), F(450,900)]), F(1,2))
meninas = F(60,100)*40; chk('meninas', meninas, 24)
chk('oculos meninas', F(25,100)*24, 6); chk('meninos', 40-24, 16); chk('oculos meninos', F(75,100)*16, 12)
chk('oculos %', F(6+12,40), F(45,100))

# ---------------- m-media ----------------
chk('balas', F(2+5+8,3), 5); chk('soma 6 provas', 7*6, 42)
chk('pond 7,7,7,4', F(7*3+4*1,4), F(625,100))
chk('pos 7', (7+1)//2, 4)
chk('amp temp', 31-14, 17); chk('1..90 media', F(1+2+3+4+90,5), 20); chk('1..90 mediana', sorted([1,2,3,4,90])[2], 3)
d = [87,92,85,90,96]; chk('desvios', [x-90 for x in d], [-3,2,-5,0,6]); chk('media 90', F(sum(d),5), 90)
d = [F(75,10),8,F(65,10),9]; chk('desvios2', sum(x-8 for x in d), -1); chk('media 7,75', sum(d)/4, F(775,100))
chk('falta 8', 4*6 - (5+7+4), 8); chk('desvio falta', sum(x-6 for x in [5,7,4]), -2)
chk('peso repetir', F(8+8+6+6+6,5), F(68,10)); chk('peso formula', F(8*2+6*3,5), F(68,10))
freq = {5:3, 6:4, 7:6, 8:2}
lista = [v for v,f in freq.items() for _ in range(f)]
chk('n=15', len(lista), 15); chk('mediana tabela', sorted(lista)[7], 7); chk('moda tabela', max(freq, key=freq.get), 7)
chk('acum', [3,7,13,15], [sum(list(freq.values())[:i+1]) for i in range(4)])
chk('entra 10', F(9*6+10,10), F(64,10)); chk('reparte', 6+F(10-6,10), F(64,10))
# exs
idades = [13,14,14,15,13,14,15]
chk('media idades', F(sum(idades),7), 14); chk('mediana idades', sorted(idades)[3], 14)
chk('moda idades', max(set(idades), key=idades.count), 14); chk('amp idades', max(idades)-min(idades), 2)
chk('desv idades', sum(x-14 for x in idades), 0)
chk('Lia', F(7*4+9*3+6*3, 10), F(73,10)); chk('Lia parciais', (7*4,9*3,6*3), (28,27,18))
# ex3: busca exaustiva
from collections import Counter
melhor = -10**9
for a in range(-20, 10):
    for b in range(a, 10):
        for dd in range(9, 50):
            e = 50 - a - b - 9 - dd
            if e < dd: continue
            L = [a, b, 9, dd, e]
            c = Counter(L); m = max(c.values())
            modas = [k for k,v in c.items() if v == m]
            if m >= 2 and modas == [8]:
                melhor = max(melhor, e)
chk('ex3 max', melhor, 15); chk('ex3 lista soma', 8+8+9+10+15, 50)

# ---------------- m-prob ----------------
chk('>4 dado', F(2,6), F(1,3))
chk('1/4 %', F(1,4)*100, 25); chk('3/5 %', F(3,5)*100, 60); chk('compl 2/5', 1-F(2,5), F(3,5))
chk('2 dados', 6*6, 36); chk('2 caras', F(1,2)*F(1,2), F(1,4)); chk('1 ou 6', F(1,6)+F(1,6), F(1,3))
somas = Counter(i+j for i in range(1,7) for j in range(1,7))
chk('tabela somas', [somas[s] for s in range(2,13)], [6-abs(s-7) for s in range(2,13)])
chk('soma 8', F(somas[8],36), F(5,36)); chk('soma 4', F(somas[4],36), F(1,12))
chk('3 moedas', 1-F(1,8), F(7,8))
pelo6 = sum(1 for i in range(1,7) for j in range(1,7) if 6 in (i,j))
chk('pelo menos um 6', F(pelo6,36), F(11,36)); chk('1-25/36', 1-F(25,36), F(11,36))
chk('cara e par', F(1,2)*F(3,6), F(1,4)); chk('2 ou 12', F(somas[2]+somas[12],36), F(1,18))
filhos = [p for p in product('AO', repeat=3) if p.count('A') == 2]
chk('2 meninas', F(len(filhos),8), F(3,8))
chk('nao mult 5', F(sum(1 for n in range(1,51) if n%5), 50), F(4,5))
# exs
chk('>8 de 12', F(sum(1 for n in range(1,13) if n>8),12), F(1,3))
par = sum(1 for i in range(1,7) for j in range(1,7) if (i*j)%2==0)
chk('produto par', F(par,36), F(3,4))
chk('semaforo', 1-0.6*0.6, 0.64)
chk('erro 2 moedas', 1-F(1,4), F(3,4))

# ---------------- m-cont ----------------
chk('sorvete', 3*2, 6); chk('onibus ou metro', 3+2, 5); chk('100', 10*10, 100); chk('90', 10*9, 90)
chk('fatoriais', [factorial(n) for n in (3,4,5,6)], [6,24,120,720])
chk('BOLA', len(set(permutations('BOLA'))), 24)
chk('3 algarismos', sum(1 for n in range(100,1000)), 900)
chk('podio', 8*7*6, 336)
pares = sum(1 for p in permutations('12345',3) if int(p[2])%2==0)
chk('pares distintos', pares, 24); chk('4x3x2', 4*3*2, 24)
chk('apertos 10', len(list(combinations(range(10),2))), 45)
chk('trios 5', len(list(combinations(range(5),3))), 10); chk('60/6', F(60,6), 10)
chk('BOLO', len(set(permutations('BOLO'))), 12)
chk('ARARA', len(set(permutations('ARARA'))), 10); chk('120/12', F(120, factorial(3)*factorial(2)), 10)
rep = sum(1 for p in product(range(10), repeat=4) if len(set(p)) < 4)
chk('senhas rep', rep, 4960); chk('5040', 10*9*8*7, 5040)
# exs
chk('fila 5', len(list(permutations(range(5)))), 120)
imp = sum(1 for p in permutations('012345',4) if p[0]!='0' and int(p[3])%2==1)
chk('impares 4 alg', imp, 144); chk('3x4x4x3', 3*4*4*3, 144)
chk('comissoes', len(list(combinations(range(7),3))), 35); chk('com cargos', len(list(permutations(range(7),3))), 210)
chk('210/6', F(210,6), 35)

print(f"OK: {ok} checagens passaram.")
