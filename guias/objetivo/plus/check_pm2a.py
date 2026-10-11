#!/usr/bin/env python3
"""Confere as contas de plus/pm2a.js (PLUS_M2A) e a estrutura dos campos."""
import json, os, re, subprocess
from fractions import Fraction as F
from sympy import symbols, expand, factor, Eq, solve, simplify

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
JS = os.path.join(HERE, 'pm2a.js')
P = json.loads(subprocess.check_output(['node', '-e',
    f"const fs=require('fs');eval(fs.readFileSync({json.dumps(JS)},'utf8')+';globalThis.P=PLUS_M2A');process.stdout.write(JSON.stringify(P))"]))
x, y, a, b = symbols('x y a b')
ok = 0
def chk(cond, msg):
    global ok
    assert cond, msg
    ok += 1

# ---------- estrutura ----------
ids = {'m-eq1', 'm-sist', 'm-prod'}
chk(set(P) == ids, 'ids')
mat = open(os.path.join(ROOT, 'data-mat.js'), encoding='utf8').read()
for i in ids:
    chk(f"id:'{i}'" in mat, f'id {i} em data-mat.js')
    t = P[i]
    chk(5 <= len(t['base']) <= 9 and all(len(p) == 2 for p in t['base']), f'{i} base')
    chk(4 <= len(t['jeitos']) <= 7 and all(set(j) == {'n', 'c', 'ex'} for j in t['jeitos']), f'{i} jeitos')
    chk(4 <= len(t['passo']) <= 6, f'{i} passo')
    chk(len(t['exs']) == 3 and all(set(e) == {'q', 's', 'r'} for e in t['exs']), f'{i} exs')
    chk(3 <= len(t['erros']) <= 5 and all('<b>Errado:</b>' in e and '<b>Certo:</b>' in e for e in t['erros']), f'{i} erros')
    chk(4 <= len(t['resumo']) <= 6, f'{i} resumo')
raw = open(JS, encoding='utf8').read()
body = re.findall(r'`([^`]*)`', raw)
chk(not any('${' in s for s in body), 'sem ${')

# ================= m-eq1 =================
# base: sinais
chk(-3 - 5 == -8 and -7 + 10 == 3 and 4 - 9 == -5, 'sinais soma')
chk((-3) * (-4) == 12 and (-2) * 5 == -10 and F(-12, -3) == 4, 'sinais mult')
chk(2*3 + 1 == 7 and 2*4 + 1 == 9, 'raiz 2x+1=7')
chk(solve(Eq(x + 5, 12), x) == [7] and solve(Eq(3*x, 18), x) == [6], 'inversa')
chk(expand(3*(x - 4)) == 3*x - 12 and expand(-2*(x + 5)) == -2*x - 10 and expand(-(x - 4)) == -x + 4, 'distributiva')
chk(5*x - 2*x + x == 4*x and expand(7 + 3*x - 2) == 3*x + 5, 'semelhantes')
chk(solve(Eq(-x, 6), x) == [-6] and solve(Eq(-3*x, 12), x) == [-4], 'x negativo')
# jeitos
chk(solve(Eq(5*x - 3, 2*x + 12), x) == [5], 'balança')
chk((34 - 7) // 3 == 9 and 9*3 + 7 == 34, 'trás p/ frente')
f = lambda v: (2*(v + 4), 5*v - 7)
chk(f(3) == (14, 8) and f(5) == (18, 18) and f(7)[0] != f(7)[1], 'testar alternativas')
chk(solve(Eq(2*(x + 4), 5*x - 7), x) == [5], 'alt única')
chk(solve(Eq(x - F(2, 5)*x, 60), x) == [100] and 60 // 3 == 20, 'barra mesada')
chk(sum([18, 19, 20]) == 57 and 57 // 3 == 19, 'consec 3')
chk(sum(range(21, 26)) == 115 and 115 // 5 == 23, 'consec 5')
chk(solve(Eq(40 + x, 3*(10 + x)), x) == [5] and 45 == 3*15, 'idades')
# exs
chk(solve(Eq(7 - 2*(x - 3), x + 1), x) == [4] and 7 - 2*(4 - 3) == 5, 'ex1')
chk(solve(Eq(x + x + 12, 86), x) == [37] and 37 + 12 == 49, 'ex2')
s = solve(Eq(x - x/4 - F(1, 3)*(x - x/4), 90), x)
chk(s == [180] and 180//4 == 45 and (180 - 45)//3 == 45 and 180 - 90 == 90, 'ex3 livro')
# erros
chk(expand(-2*(x - 3)) == -2*x + 6 and solve(Eq(2*x + 3, 11), x) == [4] and solve(Eq(-x, 8), x) == [-8], 'erros eq1')

# ================= m-sist =================
chk(7 + 3 == 10 and 7 - 3 == 4 and 6 - 4 == 2, 'par solução')
chk(solve([Eq(3*x + 2*y, 12), Eq(x + 2*y, 8)], [x, y]) == {x: 2, y: 3}, 'subtrair')
chk(expand(3*x + 2*(20 - x)) == x + 40 and expand(x - (20 - x)) == 2*x - 20, 'substituir parenteses')
chk(solve([Eq(y, 3*x), Eq(x + y, 24)], [x, y]) == {x: 6, y: 18}, 'metodo subst')
chk(solve([Eq(2*x + y, 13), Eq(x - y, 2)], [x, y]) == {x: 5, y: 3}, 'metodo soma')
chk(solve([Eq(x + 3*y, 11), Eq(x + y, 5)], [x, y]) == {x: 2, y: 3}, 'metodo subtrai')
chk((50 + 8)//2 == 29 and (50 - 8)//2 == 21 and (40 + 6)//2 == 23 and (40 - 6)//2 == 17, 'soma e dif')
chk(25*2 == 50 and (70 - 50)//2 == 10 and 10*4 + 15*2 == 70, 'suposição')
chk(solve([Eq(2*x + y, 17), Eq(x + 2*y, 16)], [x, y]) == {x: 6, y: 5}, 'cruzado')
chk(7 + 7 == 14 and 21 - 7 == 14 and 18 - 8 == 10 and solve([Eq(x + y, 14), Eq(3*x - y, 10)], [x, y]) == {x: 6, y: 8}, 'testar par')
chk(solve([Eq(a + b, 32), Eq(b, 3*a)], [a, b]) == {a: 8, b: 24}, 'ex1 sala')
chk(solve([Eq(3*x + 2*y, 16), Eq(5*x - 4*y, 12)], [x, y]) == {x: 4, y: 2} and 20 - 8 == 12, 'ex2')
chk(solve([Eq(a + b, 40), Eq(F(1, 2)*a + F(1, 4)*b, 14)], [a, b]) == {a: 16, b: 24}, 'ex3 moedas')
chk(40*F(1, 4) == 10 and F(4) / F(1, 4) == 16 and 16*F(1, 2) == 8 and 24*F(1, 4) == 6, 'ex3 suposição')
chk(expand((3*x + 2*y) - (x - 2*y)) == 2*x + 4*y and expand(2*x - (5 - x)) == 3*x - 5, 'erros sist')

# ================= m-prod =================
chk(5**2 == 25 and expand((2*x)**2) == 4*x**2 and (-3)**2 == 9 and -3**2 == -9, 'potencias')
chk([n*n for n in range(11, 21)] == [121, 144, 169, 196, 225, 256, 289, 324, 361, 400], 'quadrados 11-20')
chk(expand(3*x*2*x) == 6*x**2 and 2*x*5 == 10*x, 'monomios')
chk(expand((x + 2)*(x + 3)) == x**2 + 5*x + 6, 'chuveirinho')
chk(expand((a + b)**2) == a**2 + 2*a*b + b**2 and expand((x + 3)**2) == x**2 + 6*x + 9, 'quadradinho')
chk(factor(4*x**2 + 6*x) == 2*x*(2*x + 3), 'fator comum')
chk(expand((x + 9)*(x - 9)) == x**2 - 81 and expand((2*x + 1)*(2*x - 1)) == 4*x**2 - 1, 'dif quadrados')
chk(factor(x**2 - 10*x + 25) == (x - 5)**2 and factor(x**2 + 5*x + 9) == x**2 + 5*x + 9, 'tqp')
chk(21**2 == 441 == 400 + 40 + 1 and 19**2 == 361 == 400 - 40 + 1 and 52**2 == 2704 == 2500 + 200 + 4, 'perto dezena')
chk(49*51 == 2499 and 47*53 == 2491 == 2500 - 9 and 18*22 == 396, 'vizinhos')
chk(35**2 == 1225 and 65**2 == 4225 and 85**2 == 7225 and expand((10*a + 5)**2) == expand(100*a*(a + 1) + 25), 'termina 5')
chk(37**2 - 33**2 == 280 == 70*4 and 55**2 - 45**2 == 1000, 'dif quad conta')
chk(17*23 + 17*77 == 1700 and 9*48 - 9*38 == 90, 'fator comum conta')
chk(factor(x**2 + 14*x + 49) == (x + 7)**2 and factor(4*x**2 - 12*x + 9) == (2*x - 3)**2, 'teste do meio')
chk((1 + 3)**2 == 16 and 1 + 9 == 10 and 1 + 6 + 9 == 16, 'prova real')
chk(simplify(factor(3*x**2 - 12) - 3*(x - 2)*(x + 2)) == 0 and expand(3*(x + 2)*(x - 2)) == 3*x**2 - 12 and 3 - 12 == -9 and 3*3*(-1) == -9, 'ex1')
chk(99**2 + 2*99 + 1 == 10000, 'ex2')
chk(2024**2 - 2023*2025 == 1, 'ex3')
chk(expand((x - 3)**2) == x**2 - 6*x + 9 and expand((x + 5)**2) == x**2 + 10*x + 25, 'erros 1')
chk(factor(6*x**2 + 9*x) == 3*x*(2*x + 3) and expand((x + 4)*(x - 4)) == x**2 - 16, 'erros 2')

print(f'OK: {ok} checagens passaram.')
