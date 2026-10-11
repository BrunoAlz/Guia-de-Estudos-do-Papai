"""Confere cards/cm45.js: estrutura, quantidades e TODAS as contas (M4 e M5)."""
import json, re, subprocess, os
from fractions import Fraction as F
from itertools import permutations, product, combinations

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)

js = (
    "const fs=require('fs');"
    f"eval(fs.readFileSync('{ROOT}/data-mat.js','utf8')+';globalThis.T=TOP_MAT;');"
    f"eval(fs.readFileSync('{HERE}/cm45.js','utf8')+';globalThis.C=CARDS_M45;');"
    "console.log(JSON.stringify({topics:T.map(t=>t.id),cards:C}));"
)
data = json.loads(subprocess.check_output(["node", "-e", js]))
cards, topics = data["cards"], set(data["topics"])

# ---------- estrutura ----------
KINDS = {"regra", "conceito", "conta", "exemplo", "pegadinha"}
WANT = {"m-area": 12, "m-vol": 8, "m-unid": 8, "m-graf": 12, "m-media": 12, "m-prob": 8, "m-cont": 8}
def words(s):
    s = re.sub(r"<[^>]+>", " ", s).replace("[[", " ").replace("]]", " ").replace("|", " ")
    return len(s.split())
cnt, kinds, fronts = {}, {}, set()
for i, c in enumerate(cards):
    assert set(c) == {"t", "k", "f", "b"}, (i, c)
    assert c["t"] in topics, c["t"]
    assert c["k"] in KINDS, c["k"]
    assert c["f"].strip() and c["b"].strip()
    assert c["b"].lstrip().startswith("<b>"), ("verso deve começar em negrito", i)
    assert words(c["f"]) <= 25, ("frente longa", i, words(c["f"]))
    assert words(c["b"]) <= 45, ("verso longo", i, words(c["b"]))
    assert "`" not in c["f"] + c["b"] and "${" not in c["f"] + c["b"]
    assert c["f"] not in fronts, ("frente repetida", c["f"]); fronts.add(c["f"])
    cnt[c["t"]] = cnt.get(c["t"], 0) + 1
    kinds.setdefault(c["t"], {}).setdefault(c["k"], 0); kinds[c["t"]][c["k"]] += 1
assert cnt == WANT, cnt
for t, ks in kinds.items():
    assert len(ks) >= 3, (t, ks)
    assert abs(ks.get("conta", 0) - WANT[t] / 3) <= 1, (t, ks)

# ---------- contas ----------
def ok(desc, got, exp):
    assert got == exp, f"ERRO: {desc}: {got} != {exp}"
    print(f"ok  {desc} = {exp}")

# m-area
ok("hectare 100 x 100 m2", 100 * 100, 10000)
ok("circulo diam 10: raio^2", (10 // 2) ** 2, 25)
ok("1 m2 em cm2", 100 * 100, 10000)
ok("triangulo 8x5/2", F(8 * 5, 2), 20)
ok("trapezio (9+5)*4/2", F((9 + 5) * 4, 2), 28)
ok("trapezio (9+5)*4", (9 + 5) * 4, 56)
ok("circulo r3 pi=3", 3 * 3 ** 2, 27)
ok("quadrado 10 - furo 4", 10 ** 2 - 4 ** 2, 84)
# m-vol
ok("60000 cm3 em L", F(60000, 1000), 60)
ok("cubo aresta dobra", F((2 * 5) ** 3, 5 ** 3), 8)
ok("cubo 3", 3 ** 3, 27)
ok("caixa 2x3x1 m3", 2 * 3 * 1, 6)
ok("6 m3 em L", 6 * 1000, 6000)
ok("cilindro r2 h10 pi=3", 3 * 2 ** 2 * 10, 120)
# m-unid
ok("1,5 h -> min da parte decimal", F(1, 2) * 60, 30)
ok("2 m2 em cm2", 2 * 10000, 20000)
ok("3,5 km em m", F(35, 10) * 1000, 3500)
ok("0,25 h em min", F(1, 4) * 60, 15)
ok("36 km/h em m/s", F(36) / F(36, 10), 10)
ok("36 km/h = 36000 m / 3600 s", F(36000, 3600), 10)
# m-graf
ok("50% de 360", F(50, 100) * 360, 180)
ok("pizza 50+40+20", 50 + 40 + 20, 110)
ok("25% de 360", F(25, 100) * 360, 90)
ok("10% de 360", F(10, 100) * 360, 36)
ok("72/360 em %", F(72, 360) * 100, 20)
ok("72/360", F(72, 360), F(1, 5))
ok("120/360", F(120, 360), F(1, 3))
ok("1/3 de 300", F(120, 360) * 300, 100)
# m-media
ok("mediana 2,4,6,10", F(4 + 6, 2), 5)
def mediana(v):
    v = sorted(v); n = len(v)
    return F(v[n // 2]) if n % 2 else F(v[n // 2 - 1] + v[n // 2], 2)
ok("mediana 2,4,6,10 (func)", mediana([2, 4, 6, 10]), 5)
from collections import Counter
cc = Counter([2, 4, 4, 5, 5, 9]); m = max(cc.values())
ok("moda 2,4,4,5,5,9", sorted(k for k, v in cc.items() if v == m), [4, 5])
ok("nota que falta (6, 8, media 8)", 3 * 8 - (6 + 8), 10)
ok("mediana 9,2,7", mediana([9, 2, 7]), 7)
ok("ponderada 6(p1) 9(p2)", F(6 * 1 + 9 * 2, 1 + 2), 8)
ok("soma ponderada", 6 * 1 + 9 * 2, 24)
ok("media simples 6 e 9", F(6 + 9, 2), F(15, 2))
ok("media 4,6,8", F(4 + 6 + 8, 3), 6)
ok("mediana 9,2,5,4,7", mediana([9, 2, 5, 4, 7]), 5)
ok("amplitude 3,12,7,15", max([3, 12, 7, 15]) - min([3, 12, 7, 15]), 12)
ok("soma = 8 x 5", 8 * 5, 40)
# m-prob
ok("nao chover", F(1) - F(3, 10), F(7, 10))
ok("dois dados", len(list(product(range(1, 7), repeat=2))), 36)
urna = ["V", "V", "A", "A"]
pares = list(permutations(range(4), 2))
ok("2 vermelhas sem reposicao", F(sum(urna[a] == urna[b] == "V" for a, b in pares), len(pares)), F(1, 6))
ok("2/4 x 1/3", F(2, 4) * F(1, 3), F(1, 6))
ok("dado par", F(sum(x % 2 == 0 for x in range(1, 7)), 6), F(1, 2))
ok("cara e 6", F(1, 2) * F(1, 6), F(1, 12))
ok("vermelha 2 de 5", F(2, 5), F(2, 5))
# m-cont
ok("presidente e vice entre 5", len(list(permutations(range(5), 2))), 20)
ok("senha com repeticao", len(list(product(range(10), repeat=3))), 1000)
ok("senha sem repeticao", len(list(permutations(range(10), 3))), 720)
ok("6 times todos x todos", len(list(combinations(range(6), 2))), 15)
ok("6 x 5", 6 * 5, 30)
ok("5 camisas x 2 bermudas", 5 * 2, 10)
ok("anagramas GATO", len(set(permutations("GATO"))), 24)
ok("apertos 5 pessoas", len(list(combinations(range(5), 2))), 10)
ok("5x4/2", F(5 * 4, 2), 10)

print("\nEstrutura OK:", len(cards), "cartões")
for t in WANT:
    print(f"  {t}: {cnt[t]}  {kinds[t]}")
tot = Counter(c["k"] for c in cards)
print("Por tipo:", dict(tot))
