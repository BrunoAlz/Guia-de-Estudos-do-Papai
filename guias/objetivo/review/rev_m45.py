# Revisão lote m45: m-area, m-vol, m-unid, m-graf, m-media, m-prob, m-cont
from fractions import Fraction as F
from itertools import product, permutations, combinations
from statistics import mean, median, multimode
ok=0
def chk(name,got,exp):
    global ok
    assert abs(got-exp)<1e-9 if isinstance(exp,float) else got==exp, (name,got,exp)
    ok+=1
pi=3.14
# ===== data-mat m-area
chk('trap',(10+6)*4/2,32); chk('terreno',20*30-4*8,568)
chk('circ d10',pi*5**2,78.5); chk('2pir',2*pi*5,31.4); chk('r10',pi*100,314.0); chk('pir',pi*5,15.7)
chk('losango',12*8/2,48); chk('praca',400-3*25,325)
# m-vol
chk('caixa',2*1.5*1*1000,3000.0); chk('lata',pi*16*10,502.4)
chk('aquario',50*30*40/1000,60); chk('cil',3*4*5,60); chk('cubo',2**3,8)
# m-unid
chk('1,2h',0.2*60,12.0); chk('90kmh',90/3.6,25.0); chk('45min',45/60,0.75)
chk('0,8m2',0.8*10000,8000.0); chk('72kmh',72/3.6,20.0); chk('72x3.6',72*3.6,259.2)
# m-graf
chk('108',108/360*200,60.0); chk('54',54/360*200,30.0); chk('54pct',54/360,0.15)
print('var',(104-102)/102)
# m-media
chk('pond',F(8*2+5,3),7); chk('med',median([3,7,1,9,5,2]),4)
chk('bia',5*7.5-4*7,9.5); chk('med2',median([12,5,8,20,7]),8); chk('mean2',mean([12,5,8,20,7]),10.4)
d=[2,3,3,5,7,7,7,9]; chk('moda',multimode(d),[7]); chk('amp',max(d)-min(d),7)
# m-prob (força bruta)
dado=range(1,7)
chk('primo',F(sum(1 for x in dado if x in(2,3,5)),6),F(1,2))
bolas=['A']*3+['V']*2
chk('com rep',F(sum(1 for a,b in product(bolas,bolas) if a==b=='A'),25),F(9,25))
chk('sem rep',F(sum(1 for a,b in permutations(bolas,2) if a==b=='A'),20),F(3,10))
chk('soma7',F(sum(1 for a,b in product(dado,dado) if a+b==7),36),F(1,6))
s=['G']*4+['B']*6
chk('verdes',F(sum(1 for a,b in permutations(s,2) if a==b=='G'),90),F(2,15))
chk('verdes rep',F(16,100),F(4,25))
chk('cara',F(sum(1 for t in product('CK',repeat=2) if 'C' in t),4),F(3,4))
# m-cont
chk('3dig',len(list(permutations(range(1,6),3))),60)
chk('times',len(list(combinations(range(6),2))),15)
chk('combo',len(list(product(range(4),range(3),range(2)))),24)
chk('placas',26*26*10,6760); chk('AMOR',len(set(permutations('AMOR'))),24)
chk('senha s/rep',len(list(permutations(range(10),3))),720)
# ===== pm45 m-area
chk('ret',5+3+5+3,16); chk('par',8*4,32); chk('par9',9*4,36); chk('tri',7*6/2,21); chk('trapb',(12+8)/2*5,50)
chk('r10v',2*pi*10,62.8)
for n,q in [(11,121),(12,144),(13,169),(14,196),(15,225),(20,400),(25,625)]: chk('q',n*n,q)
chk('L',10*8-4*3,68); chk('Lc',10*5+6*3,68)
chk('t15',(15+9)/2*6,72); chk('t7',(7+5)/2*10,60); chk('d14',14*9/2,63); chk('d25',25*8/2,100)
chk('k',12*12,4*36); chk('k3',10*9,90)
chk('r20',400*3.14,1256.0); chk('semi',8*3.14,25.12)
print('perim20',[(b,10-b,b*(10-b)) for b in range(1,10)])
chk('pg',12*5,60); chk('pgp',2*(12+7),38)
chk('band',40*60/2,1200); chk('band2',60*40-1200,1200)
chk('pizza area',(30/2)**2,4*(15/2)**2); chk('4bro',4*12,48)
# m-vol
chk('cx',4*3*2,24); chk('prisma',6*4/2*10,120)
chk('cubos',[i**3 for i in range(1,11)],[1,8,27,64,125,216,343,512,729,1000])
chk('dm',8*5*3,120); chk('tanque',20*10*5,1000)
chk('k3v',6**3,27*8); chk('40L',40/8,5)
chk('falta',2*1.5*0.4,1.2); chk('ordem',25*13*4,1300); chk('cil3',3*25*4,300); chk('vaz',600/20,30)
chk('rampa',3*1/2*2,3); chk('copo',3*9*10,270); print('copos',1800/270, 6*270,7*270)
chk('cubo10',1000/(25*8),5); chk('erro',20*5*3,300)
# m-unid
chk('3,7',3.7*100,370.0); chk('450',450/100,4.5); chk('3m2',3*10000,30000)
chk('2m3',2*10**6,2000000); chk('2,5kg',2.5*1000,2500)
chk('1,2h',1.2*60,72.0); chk('90min',90/60,1.5)
chk('2,5km',2.5*1000,2500); chk('0,04',0.04*10000,400.0); chk('5000cm3',5000/1000,5)
chk('0,7',0.7*60,42.0); chk('2,35',0.35*60,21.0)
chk('36',36/60,0.6); chk('24',24/60,0.4); chk('3h',3*3600,10800); chk('54',54000/3600,15)
chk('8h45',(8*60+45+110)//60*100+(8*60+45+110)%60,1035); chk('dur',11*60+20-(9*60+50),90)
chk('rec',750/250,3); chk('ped',F(10)/F(5,6),12); chk('az',(300//20)*(240//20),180); chk('az2',300*240/400,180)
chk('2h40',40/60,2/3)
# m-graf
chk('80/60',round(80/60,2),1.33); chk('30%',0.3*360,108.0); chk('var',50/200,0.25)
chk('15%',0.15*360,54.0); chk('45°',45/360,0.125)
for g,f in [(180,F(1,2)),(120,F(1,3)),(90,F(1,4)),(60,F(1,6)),(45,F(1,8)),(30,F(1,12))]: chk('fr',F(g,360),f)
chk('420',420/6,70); chk('falta',100-(35+25+20),20); chk('360',360-240,120)
chk('120',150/120,1.25); chk('pct',F(30,120),F(1,4))
chk('cant',[F(1000-800,800),F(900-1000,1000),F(1350-900,900)],[F(1,4),F(-1,10),F(1,2)])
chk('oculos',F(int(0.25*24)+int(0.75*16),40),F(9,20))
# m-media
chk('balas',mean([2,5,8]),5); chk('42',7*6,42); chk('6,25',mean([7,7,7,4]),6.25)
chk('ext',(mean([1,2,3,4,90]),median([1,2,3,4,90])),(20,3))
chk('m1',mean([87,92,85,90,96]),90); chk('m2',mean([7.5,8,6.5,9]),7.75)
chk('falta',4*6-(5+7+4),8); chk('rep',mean([8,8,6,6,6]),6.8)
tab=[5]*3+[6]*4+[7]*6+[8]*2; chk('medtab',median(tab),7); chk('modatab',multimode(tab),[7])
chk('novo',(9*6+10)/10,6.4)
v=[13,14,14,15,13,14,15]; chk('volei',(mean(v),median(v),multimode(v),max(v)-min(v)),(14,14,[14],2))
chk('lia',(7*4+9*3+6*3)/10,7.3)
# brute force smarter: sorted lists a<=b<=9<=d<=e, sum 50
cands=[]
for a in range(-40,10):
  for b in range(a,10):
    for d in range(9,50):
      e=50-a-b-9-d
      if e<d: continue
      s=[a,b,9,d,e]
      if multimode(s)==[8]: cands.append(e)
chk('maxe',max(cands),15)
# m-prob
chk('>4',F(sum(1 for x in dado if x>4),6),F(1,3))
chk('2moedas',F(sum(1 for t in product('CK',repeat=2) if t==('C','C')),4),F(1,4))
chk('1ou6',F(2,6),F(1,3))
somas={s:sum(1 for a,b in product(dado,dado) if a+b==s) for s in range(2,13)}
chk('somas',somas,{2:1,3:2,4:3,5:4,6:5,7:6,8:5,9:4,10:3,11:2,12:1})
chk('tab',all(True for _ in [0]),True)
chk('3moedas',F(sum(1 for t in product('CK',repeat=3) if 'C' in t),8),F(7,8))
chk('pelo6',F(sum(1 for t in product(dado,dado) if 6 in t),36),F(11,36))
chk('cara par',F(sum(1 for m,x in product('CK',dado) if m=='C' and x%2==0),12),F(1,4))
chk('2ou12',F(somas[2]+somas[12],36),F(1,18))
chk('filhos',F(sum(1 for t in product('AO',repeat=3) if t.count('A')==2),8),F(3,8))
chk('mult5',F(sum(1 for x in range(1,51) if x%5),50),F(4,5))
chk('>8',F(sum(1 for x in range(1,13) if x>8),12),F(1,3))
chk('prodpar',F(sum(1 for a,b in product(dado,dado) if a*b%2==0),36),F(3,4))
chk('semaf',round(1-0.6*0.6,10),0.64)
# m-cont
chk('sorv',3*2,6); chk('fat',[6,24,120,720],[len(list(permutations(range(n)))) for n in (3,4,5,6)])
chk('BOLA',len(set(permutations('BOLA'))),24)
chk('3alg',sum(1 for n in range(100,1000)),900)
chk('podio',len(list(permutations(range(8),3))),336)
chk('pares',sum(1 for p in permutations([1,2,3,4,5],3) if p[2]%2==0),24)
chk('maos',len(list(combinations(range(10),2))),45); chk('trios',len(list(combinations(range(5),3))),10)
chk('BOLO',len(set(permutations('BOLO'))),12); chk('ARARA',len(set(permutations('ARARA'))),10)
chk('senha4',sum(1 for t in product(range(10),repeat=4) if len(set(t))<4),4960)
chk('fila5',len(list(permutations(range(5)))),120)
chk('impares',sum(1 for p in permutations(range(6),4) if p[0]!=0 and p[3]%2==1),144)
chk('com',len(list(combinations(range(7),3))),35); chk('cargos',len(list(permutations(range(7),3))),210)
chk('2alg',(len(list(product(range(10),repeat=2))),len(list(permutations(range(10),2)))),(100,90))
print('OK',ok,'checks')
