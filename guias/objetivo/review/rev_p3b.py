# Revisão p3b: sem contas numéricas nestes tópicos; checa estrutura dos quizzes, tags HTML e grafias-chave
import re, subprocess, json
IDS=['p-conc','p-col','p-pont','p-var','p-form']
js = r"""
const fs=require('fs');
const T=new Function(fs.readFileSync('data-por.js','utf8')+'\nreturn TOP_POR;')();
const M=new Function(fs.readFileSync('data-macetes.js','utf8')+'\nreturn typeof MACETES!=="undefined"?MACETES:null;')();
const P=new Function(fs.readFileSync('plus/pp3b.js','utf8')+'\nreturn PLUS_P3B;')();
const ids=%s;
console.log(JSON.stringify({t:T.filter(x=>ids.includes(x.id)),m:M?ids.map(i=>M[i]):null,p:P}));
""" % json.dumps(IDS)
d=json.loads(subprocess.run(['node','-e',js],capture_output=True,text=True,check=True).stdout)
err=0
def tags(s,where):
    global err
    for t in ['b','i','s','p','ul','li']:
        o=len(re.findall(r'<%s>'%t,s)); c=len(re.findall(r'</%s>'%t,s))
        if o!=c: print('TAG',where,t,o,c); err+=1
def walk(x,w):
    if isinstance(x,str): tags(x,w)
    elif isinstance(x,list): [walk(y,w) for y in x]
    elif isinstance(x,dict): [walk(v,w+'.'+k) for k,v in x.items()]
for t in d['t']:
    walk(t,t['id'])
    for q in t['qz']:
        assert 0<=q[2]<len(q[1]), q
        assert len(set(q[1]))==len(q[1])
        print(t['id'],'| correta:',q[1][q[2]])
walk(d['m'],'macetes'); walk(d['p'],'plus')
txt=json.dumps(d,ensure_ascii=False)
for bad in ['idéia','heróico','vôo','lêem','ítem','hífens','felizidade','pharmácia']:
    if bad in txt: print('GRAFIA suspeita:',bad); 
print('ERROS de tag:',err)
