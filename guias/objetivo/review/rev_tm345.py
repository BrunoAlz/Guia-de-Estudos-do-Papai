from fractions import Fraction as F
from math import sqrt, isclose, comb, perm, factorial
from itertools import product
ok=0
def c(cond,msg):
    global ok
    assert cond,msg; ok+=1
# ===== tm3 =====
# ang1
c(180-72==108 and 2*72==144 and 90-72==18,'ang1')
# ang2
x=next(x for x in range(200) if 2*x+25==4*x-15); c(x==20 and 2*x+25==65 and 180-65==115 and 130==2*65,'ang2')
c((25-15)/2==5 and 2*5+25==35,'ang2 erro sinal')
# ang3
x=next(x for x in range(200) if (3*x-12)+(2*x+42)==180); c(x==30 and 3*x-12==78 and 2*x+42==102,'ang3')
x2=next(x for x in range(200) if 3*x-12==2*x+42); c(x2==54 and 3*x2-12==150,'ang3 b')
# ang4
x=next(x for x in range(1,90) if 4*(90-x)==180-x); c(x==60 and 90-x==30 and 180-x==120,'ang4')
c(180/5==36 and (180-45)/4!=45,'ang4 b')
# ang5
x=next(x for x in range(100) if 6*x+60==180); A=4*x+20;B=2*x+40; c((A,B,A/2+B/2)==(100,80,90),'ang5')
# pol
c((5-2)*180==540 and 540/5==108 and 360/5==72 and 4*180/5==144 and (6-2)*180/6==120,'pol1')
x=next(x for x in range(100) if 3*x+10==130); c(x==40 and x+20==60 and 2*x-10==70 and 180-130==50,'pol2')
n=1440//180+2; c(n==10 and n*(n-3)//2==35 and n*(n-3)==70 and 8*5//2==20 and 9*6//2==27,'pol3')
# sem
c(isclose(12*1.5/2,9) and isclose(12*2/1.5,16) and 12*1.5==18 and 12/2==6,'sem1')
c(120*75/90==100 and 90*120/75==144 and 75+100==175,'sem2')
c((30/10)**2*150==1350 and 30*45==1350 and 150*27==4050 and 30*35==1050,'sem3')
c(45/3==15 and (4,5,6)==(12/3,15/3,18/3) and 45/9==5 and (12-8)+(15-8)+(18-8)==21,'sem4')
s=12.6/4.2; c(isclose(s,3) and isclose(6/(7+s),1.8/s) and isclose(1.8*7/6,2.1),'sem5')
# pit
c(sqrt(15**2+8**2)==17 and 225-64==161,'pit1')
c(isclose(sqrt(2.5**2-2.4**2),0.7) and isclose(2.5**2-2.4**2,0.49),'pit2')
tri=[(7,24,26),(10,20,30),(12,16,21),(8,15,18),(10,24,26)]
c([a*a+b*b==cc*cc for a,b,cc in tri]==[False]*4+[True],'pit3')
c(sqrt(15**2+20**2)==25 and 300/25==12 and 15**2/25==9 and 15*20/2==150,'pit4')
c(sqrt(8**2+15**2)==17 and 10+6+2+9==27,'pit5')
# circ
C=2*3*20; c(C/8==15 and 3*20*2/8 /2==7.5 and 2*3*40/8==30 and 3*400/8==150,'circ1')
c(180-90-34==56,'circ2')
x=360/9; c(x==40 and 4*x/2==80 and 3*x/2==60 and 2*x/2==40,'circ3')
# cart
c(((-4+6)/2,(3-7)/2)==(1,-2) and ((6+4)/2,(-7-3)/2)==(5,-5),'cart1')
c(sqrt(5**2+12**2)==13 and 1+144==145,'cart2')
B=(2*3+1,2*5-8); c(B==(7,2) and sqrt(8**2+6**2)==10 and sqrt(4**2+3**2)==5,'cart3')
# ===== tm45 =====
c(2*(15+8)==46 and 15*8==120 and 15+15+8==38,'area1')
c((30+20)*12/2*50==15000 and 600*50==30000 and 30*12/2*50==9000 and 30*20*12/2*50==180000 and 20*12*50==12000,'area2')
c(isclose(2*3.14*30*100/100,188.4) and isclose(3.14*30,94.2) and isclose(2*3.14*60,376.8) and isclose(3.14*900*100/100,2826),'area3')
c(isclose(3+3.14/2,4.57) and isclose(3+3.14,6.14) and isclose(3+3.14*4/2,9.28) and isclose(3+3.14/4,3.785),'area4')
c(isclose(1.2**2,1.44),'area5')
c(8*4*1.5*1000==48000,'vol1')
c(3*100*20==6000 and 2*3*10*20==1200 and 3*400*20==24000,'vol2')
c(40*25*2==2000 and 40*25*22==22000 and 40*25*20==20000 and 40*25*8==8000,'vol3')
c(12*400/1000==4.8,'unid1')
c(isclose(0.4*60,24) and (19*60+40+144)==22*60+4,'unid2')
c(200*150/10000==3 and 2000*150/10000==30 and 20*150/10000==0.3 and 200*150/100==300 and 0.2*150/10000==0.003,'unid3')
c(2*30==60,'graf1'); c(F(48,240)*360==72 and 360/20==18,'graf2')
v=[1000,1200,1300,1800,2000]; c([b-a for a,b in zip(v,v[1:])]==[200,100,500,200] and v[-1]==2*v[0],'graf3')
c(41-39==2 and 41-38==3*(39-38),'graf4')
c(F(21,60)==F(35,100) and F(12,30)==F(40,100) and F(9,30)==F(30,100) and F(21,30)==F(70,100),'graf5')
d=[1,0,3,1,5,2]; c(sum(d)/6==2 and sum(d)/5==2.4,'media1')
t=[12,7,15,9,10,20,8,11]; st=sorted(t); c((st[3]+st[4])/2==10.5 and sum(t)/8==11.5 and (t[3]+t[4])/2==9.5 and max(t)-min(t)==13,'media2')
c((6*3+9*2+9*1)/6==7.5 and (6+9+9)/3==8 and 45/3==15 and 36/5==7.2,'media3')
c(11*22-10*21==32,'media4')
s=[2000]*9+[22000]; c(sum(s)/10==4000 and sorted(s)[4]==sorted(s)[5]==2000 and 24000/10==2400,'media5')
fav=[k for k in range(1,21) if k%3==0]; c(F(len(fav),20)==F(3,10),'prob1')
pairs=[p for p in product(range(1,7),repeat=2) if sum(p)==10]; c(F(len(pairs),36)==F(1,12),'prob2')
pp=F(3,5)*F(2,4); bb=F(2,5)*F(1,4); c(pp+bb==F(2,5) and pp==F(3,10) and bb==F(1,10) and F(9,25)+F(4,25)==F(13,25) and 1-(pp+bb)==F(3,5),'prob3')
c(10**3==1000 and perm(10,3)==720,'cont1')
c(2*factorial(4)==48 and factorial(5)==120,'cont2')
c([n for n in range(2,100) if comb(n,2)==28]==[8] and comb(7,2)==21 and comb(14,2)==91,'cont3')
# ===== cards cm3 =====
c(90-35==55 and 180-125==55 and 180-(90-50)==140 and 130/2==65 and 180-140==40,'cm3 ang')
c(50+60==110 and (5-2)*180==540 and 360/10==36 and 180-36==144 and 5*2//2==5,'cm3 pol')
c(180-40-75==65 and 10*4==40 and 10/2==5 and 3*4/2==6,'cm3 sem')
c(4*9==36 and 6**2+8**2==100 and 169-25==144 and 64+225==289 and 100-36==64,'cm3 pit')
c(isclose(2*3.14*10,62.8) and (2+6)/2==4 and (4+10)/2==7 and 9+16==25 and 9-2==7,'cm3 circ/cart')
# ===== cards cm45 =====
c(8*5/2==20 and (9+5)*4/2==28 and 3*9==27 and 100-16==84,'cm45 area')
c(60000/1000==60 and 2**3==8 and 3**3==27 and 2*3*1*1000==6000 and 3*4*10==120,'cm45 vol')
c(3.5*1000==3500 and 0.25*60==15 and 36/3.6==10 and 0.5*60==30 and 100**3==1_000_000,'cm45 unid')
c(0.25*360==90 and 0.1*360==36 and F(72,360)==F(1,5) and F(120,360)*300==100 and 50+40+20==110,'cm45 graf')
c((4+6)/2==5 and 3*8-14==10 and (6+18)/3==8 and (6+9)/2==7.5 and 18/3==6 and sorted([9,2,5,4,7])[2]==5 and 15-3==12 and 8*5==40,'cm45 media')
c(F(2,4)*F(1,3)==F(1,6) and F(1,2)*F(1,6)==F(1,12) and isclose(1-0.3,0.7),'cm45 prob')
c(5*4==20 and 6*5//2==15 and 5*2==10 and factorial(4)==24 and comb(5,2)==10,'cm45 cont')
print('OK',ok,'verificações')
