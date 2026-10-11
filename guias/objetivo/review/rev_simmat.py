# Revisão independente (lote simmat): sim_a_mat, sim_b_mat, sim_c_mat.
# Cada questão refeita do zero; vals = valor de cada alternativa (ordem do arquivo); ans = resposta.
import json, math, subprocess, os
from fractions import Fraction as F
from itertools import product
H='/home/claude/guia-de-estudos-do-papai/guias/objetivo/simulados/'
def load(f,v): return json.loads(subprocess.check_output(['node','-e',f"const fs=require('fs');eval(fs.readFileSync('{H+f}','utf8')+';globalThis.T={v}');process.stdout.write(JSON.stringify(T))"]))
def chk(name,data,items):
    for i,(ans,vals) in enumerate(items):
        hits=[k for k,v in enumerate(vals) if v==ans]
        q=data[i]; ok = hits==[q['a']]
        print(name,i+1,q['t'],'ans',ans,'hits',hits,'a',q['a'],'OK' if ok else '<<< FALHOU')
        assert sum(1 for o in q['o'] if o[1]=='')==1 and q['o'][q['a']][1]==''
A=load('sim_a_mat.js','SIM_A_MAT'); B=load('sim_b_mat.js','SIM_B_MAT'); C=load('sim_c_mat.js','SIM_C_MAT')
# ---------- A ----------
it=[]
it.append((F(14*100,40),[14,26,35,40,F(26*100,40)]))
cap=600/(F(3,4)-F(1,2)); assert F(3,4)*cap-600==cap/2
it.append((cap,[600*F(1,4),600/F(3,4),600/F(1,2),F(3,4)*cap,2400]))
v=F(2)**2+round(8**(2/3))-1
it.append((v,[F(-1,4)+4-1,F(1,4)+4-1,4+4-2,7,4+4-0]))
it.append((F(66,3),[22,F(150,4),F(150,3),66,F(234,3)]))
s=[(m,50-m) for m in range(51) if m-5==4*(50-m-5)]; e=[m for m in range(51) if m==4*(50-m-5)]
it.append((s[0][0],[s[0][1]-5,s[0][1],s[0][0]-5,e[0],37]))
n=[n for n in range(3,500) if F(600,n-2)-F(600,n)==25]; assert n==[8]; assert [r for r in range(-50,50) if r*r-2*r-48==0]==[-6,8]
assert F(600,6)==100 and F(600,8)==75
it.append((8,[6,8,10,24,48]))
it.append((F(360,30)*8*3,[360*F(6,8)*F(3,5),360*F(3,5),288,360*F(8,6),360*F(8,6)*F(5,3)]))
fs=[lambda x:60*x+90,lambda x:90*x+60,lambda x:150*x,lambda x:90*x-60,lambda x:x+150]
it.append((tuple(90*x+60 for x in range(1,20)),[tuple(f(x) for x in range(1,20)) for f in fs])); assert 90*3+60==330
it.append((132,[42,48,90,132,312]))
x=F(96,20); assert x/12==(8-x)/8 and F(64,20)==F(16,5); w=lambda y:F(12)*(8-y)/8; assert w(4)==6 and w(6)==3 and w(x)==x
it.append((x,[F(16,5),4,F(24,5),6,10]))
D=math.sqrt(144+16+9); assert D==13 and abs(4*math.sqrt(10)-12.649)<1e-3 and math.sqrt(25)==5
it.append((13,[5,12,4*math.sqrt(10),13,19]))
q=F(314,100)*100/4; folha=2*(q-50); assert q==F(785,10) and folha==57
it.append((folha,[100-q,q-50,100-folha,57,q]))
c=[10,14,15,20,18,22]; var=[F(c[i]-c[i-1],c[i-1]) for i in range(1,6)]; print('A13 var %',[round(float(v)*100,1) for v in var])
it.append((max(range(5),key=lambda i:var[i]),[0,1,2,3,4]))
fr={0:5,1:9,2:4,3:2}; assert F(sum(k*v for k,v in fr.items()),20)==F(115,100)
it.append((1,[0,1,F(115,100),2,9]))
cs=list(product(range(1,7),repeat=2)); p=F(sum(a>b for a,b in cs),36)
assert sum(a>b for a,b in cs)==15 and F(sum(a>=b for a,b in cs),36)==F(7,12)
it.append((p,[F(1,6),F(5,12),F(1,2),F(7,12),F(5,6)]))
chk('A',A,it)
# ---------- B ----------
it=[]
it.append((F(60*25+40*40,100*100)*100,[15,16,31,F(65,2),65]))
assert 2.2**2<5<(9/4)**2 and abs(2.2**2-4.84)<1e-12 and F(81,16)==F(50625,10000)
r=sorted([('2.2',2.2),('r5',math.sqrt(5)),('9/4',2.25)],key=lambda t:t[1]); print('B2',r)
it.append((0,[0,1,2,3,4]))
sol=[n for n in range(201,300) if n%6==3 and n%8==3 and n%10==3]; assert sol==[243]
assert math.lcm(6,8,10)==120 and 283%6==1 and 283%8==3 and 283%10==3 and 123%6==3
it.append((sol[0],[123,237,240,243,283]))
h=[x for x in range(1,30) if 15+6*(x-1)==63]; assert F(63,21)==3 and F(63,6)==F(21,2) and F(78,6)==13
it.append((h[0],[3,8,9,F(21,2),13]))
it.append((4**2+2,[8,16-2,16,17,18]))
xs=[x for x in range(1,10) if (30-2*x)*(20-2*x)==336]; assert xs==[3]
assert [x for x in range(0,60) if x*x-25*x+66==0]==[3,22]; assert [x for x in range(0,60) if (30-x)*(20-x)==336]==[6,44]
it.append((3,[3,6,14,22,24]))
t=6*F(4,3)*F(3,2); assert F(600,4*6)==25 and F(900,75)==12
it.append((t,[6*F(3,4),6*F(3,4)*F(3,2),6*F(4,3),6*F(3,2),12]))
cores=['vermelha','laranja','amarela','verde','azul','roxa']; print('B8',cores[(100-1)%6],cores[(97-1)%6])
it.append(('verde',['amarela','verde','azul','vermelha','roxa']))
ang=lambda n:F(180*(n-2),n); print('B9',[(n,ang(n),90+2*ang(n)) for n in (6,8,9,10,12)])
it.append((360,[90+2*ang(n) for n in (6,8,9,10,12)]))
x=[x for x in range(0,10) if (9-x)**2==x*x+9]; assert x==[4] and abs(math.sqrt(72)-6*math.sqrt(2))<1e-12
it.append((4,[4,4.5,5,6,6*math.sqrt(2)]))
it.append((4*30,[30,60,90,120,150]))
V=3*1*F(3,2); falta=F(2,3)*V*1000; tmin=falta/15; print('B12 min',tmin, '20?',F(2,3)*V*100/15,'1/3',V*1000/3/15,'cheia',V*1000/15,'r=2',F(2,3)*3*4*F(3,2)*1000/15)
it.append((tmin,[20,100,200,300,800]))
vis=[12000,9000,15000,14000,18000]; d=[vis[i+1]-vis[i] for i in range(4)]; print('B13',d)
it.append((max(d),[1000,3000,4000,6000,9000]))
it.append((F(30*60+20*85,50*10),[7,F(29,4),F(20*60+30*85,500),F(145,10),F(350,20)]))
cnt=sum(1 for n in range(100,1000) if '7' in str(n)); one=sum(1 for n in range(100,1000) if str(n).count('7')==1)
assert one==225 and 900-729==171 and 8*9*9==648
it.append((cnt,[171,one,252,280,648]))
chk('B',B,it)
# ---------- C ----------
it=[]
it.append((F(10),[round(120/1320*100,1),10,F(132,1200)*100,12,F(1320,1200)*100]))
P=F(1200)/(F(3,5)*F(2,3)); assert P/3==1000 and F(2,5)*2000==800
it.append((P,[1200,1200/F(2,3),1200/F(3,5),3000,1200/(1-F(1,3)-F(2,5))]))
g=F(5000)/F(2,100); assert F(2,100)/5000==F(4,1000000) and 5000*F(2,100)==100 and 5/F(2,100)==250
it.append((g,[F(4,10**6),25,100,250,250000]))
nn=[10*a+b for a in range(1,10) for b in range(10) if a+b==11 and (10*b+a)-(10*a+b)==27]; assert nn==[47]
it.append((47,[47,56,65,74,83]))
x=[x for x in range(1,100) if (x+3)**2-x*x==81]; assert x==[12]
it.append((4*x[0],[4*(9-3),36,48,4*F(81,6),60]))
n=[n for n in range(2,50) if n*(n-1)//2==28]; assert n==[8]
it.append((n[0]-1,[7,8,14,28,56]))
v=F(360)/F(10,3); assert 90*F(6,5)==108
it.append((v,[F(90*10,3*4),90*F(7,6),108,F(360*10,32),120]))
it.append((F(18,10)*20+32,[36,52,68,20+F(18,10)*32,F(52*18,10)]))
it.append((75,[75,105,140,145,285]))
h=F(18,9); # verificação analítica: fio1 y=6-0.6x ; fio2 y=0.3x
X=F(60,9); assert 6-F(6,10)*X==F(3,10)*X==2
it.append((h,[F(3,2),F(18,10),2,3,F(9,2)]))
dk=math.hypot(-4-2,9-1)*100/1000
it.append((dk,[0.6,1.0,1.4,10,14]))
grama=400-4*F(5*15,2); assert 5**2+15**2==250 and (20-10)**2==100
it.append((grama,[100,150,200,225,250]))
L=F(5*24*60,1000); assert 5*60==300
it.append((L,[F(3,10),F(72,10),72,720,7200]))
it.append((F(130-4+9,20),[F(625,100),F(675,100),F(139,20),F(65,10)+F(5,10),F(65,10)+5]))
fav=sum(1 for k in range(1,61) if k%4==0 or k%6==0); assert fav==20
it.append((F(fav,60),[F(5,60),F(10,60),F(15,60),F(1,3),F(25,60)]))
chk('C',C,it)
print('FIM')
