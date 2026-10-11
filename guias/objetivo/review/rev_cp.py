# Lote cp (flashcards de Português): quase não há contas. Conferências numéricas presentes nos cartões:
assert 22 - 12 == 10            # cp1: "Às 22 h ... Já são dez horas"
assert 7/10 > 0.5               # cp1: "Sete em cada dez alunos" (maioria)
assert 1843 < 1888              # cp1: Canção do Exílio (Gonçalves Dias, 1843) -> domínio público
# contagem de cartões por seção conforme cabeçalhos
import re
for f, exp in [("cards/cp1.js", [12,12,12,12,8,8,8,8]), ("cards/cp2.js", [12,12,12,8,8]), ("cards/cp3.js", [12,12,8,8,8,8,8,8,6])]:
    src = open(f, encoding="utf-8").read()
    parts = re.split(r"/\* -*\s*p-", src)[1:]
    got = [len(re.findall(r"\{t:'", p)) for p in parts]
    print(f, got, "OK" if got == exp else f"ESPERADO {exp}")
print("ok")
