# Revisão lote simpor: checagens estruturais + números citados nos textos
import json, subprocess, re
base='/home/claude/guia-de-estudos-do-papai/guias/objetivo/simulados/'
for f,var in [('sim_a_por.js','SIM_A_POR'),('sim_b_por.js','SIM_B_POR'),('sim_c_por.js','SIM_C_POR')]:
    js=open(base+f).read()+f'\nconsole.log(JSON.stringify({var}));'
    data=json.loads(subprocess.run(['node','-e',js],capture_output=True,text=True).stdout)
    assert len(data)==15,(f,len(data))
    tx={}
    for i,q in enumerate(data,1):
        assert len(q['o'])==5,(f,i)
        assert 0<=q['a']<5
        empt=[k for k,(t,fb) in enumerate(q['o']) if fb.strip()=='']
        assert empt==[q['a']],(f,i,empt,q['a'])
        if 'tt' in q:
            tx.setdefault(q['tt'],set()).add(q['tx'])
        for s in [q.get('tx',''),q['q'],q['e']]+[x for o in q['o'] for x in o]:
            assert s.count('<b>')==s.count('</b>') and s.count('<i>')==s.count('</i>'),(f,i,s[:60])
    for k,v in tx.items(): assert len(v)==1,(f,k)
    print(f,'OK',[ 'ABCDE'[q['a']] for q in data])
# números
assert len(['Bia','Carol','primo da Carol'])==3          # sim A Q10 "três pessoas"
assert 3+1==4                                           # sim A Q1 "contou pela quarta"
assert (2+8-1)%12+1==10                                 # sim B: prevista fev + 8 meses de atraso = outubro (coerente c/ data atual)
assert 22-7==15                                         # sim B: 7h às 22h (15 h/dia; não citado, só conferência)
print('números OK')
