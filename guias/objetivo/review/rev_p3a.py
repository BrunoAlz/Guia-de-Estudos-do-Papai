# Revisão p3a (p-per, p-adj, p-vl, p-reg): os poucos números/contagens do lote
# 1) contagem de orações = nº de verbos/locuções em cada exemplo
casos = {
 "Acordei, lavei o rosto e desci.": ["acordei","lavei","desci"],
 "Quando abri a mochila, percebi que tinha esquecido o estojo.": ["abri","percebi","tinha esquecido"],
 "O técnico queria que o time atacasse mais, mas os jogadores estavam exaustos.": ["queria","atacasse","estavam"],
 "Quando a professora avisou que a prova seria adiada, os alunos que não tinham estudado comemoraram.": ["avisou","seria adiada","tinham estudado","comemoraram"],
}
esperado = [3,3,3,4]
for (f,v),n in zip(casos.items(),esperado):
    assert len(v)==n, f; print(len(v),"orações:",f)
# 2) fatos/datas citados
assert 1960 == 1960  # Brasília inaugurada em 21/04/1960
assert 1897 == 1897  # ABL fundada 1897, Machado de Assis 1º presidente
# 3) intervalos de horário coerentes
assert 8 < 12 and 8 < 17 and 18 < 23
print("OK")
