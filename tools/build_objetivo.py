#!/usr/bin/env python3
"""Monta guias/objetivo/dist/objetivo.html juntando o app com os dados."""
import pathlib, re, json, subprocess, sys

ROOT = pathlib.Path(__file__).resolve().parent.parent / "guias" / "objetivo"
app = (ROOT / "app.html").read_text(encoding="utf-8")
data = "\n".join((ROOT / f).read_text(encoding="utf-8") for f in ("data-mat.js", "data-por.js", "data-macetes.js") + tuple("treino/" + n + ".js" for n in ("tm1","tm2","tm3","tm45","tp1","tp2","tp3")) + tuple("cards/" + n + ".js" for n in ("cm1","cm2","cm3","cm45","cp1","cp2","cp3")) + tuple("simulados/sim_" + n + ".js" for n in ("a_por","a_mat","b_por","b_mat","c_por","c_mat")) + tuple("plus/" + n + ".js" for n in ("pm1","pm2a","pm2b","pm3","pm45","pp1","pp2","pp3a","pp3b","kit")))
out = app.replace("/*__DATA__*/", data).replace("/*__TREINO__*/", (ROOT / "app-treino.js").read_text(encoding="utf-8")).replace("/*__CARDS__*/", (ROOT / "app-cards.js").read_text(encoding="utf-8")).replace("/*__SIMU__*/", (ROOT / "app-simu.js").read_text(encoding="utf-8"))
dist = ROOT / "dist"
dist.mkdir(exist_ok=True)
(dist / "objetivo.html").write_text(out, encoding="utf-8")

# checagem de sintaxe dos <script> com node
scripts = re.findall(r"<script>(.*?)</script>", out, flags=re.S)
js = "\n;\n".join(scripts)
(dist / "_check.js").write_text(js, encoding="utf-8")
r = subprocess.run(["node", "--check", str(dist / "_check.js")], capture_output=True, text=True)
if r.returncode:
    print(r.stderr); sys.exit(1)

# contagem e pontuação máxima
probe = data + """
const TOPS=[...TOP_MAT,...TOP_POR];const T0={};TOPS.forEach(t=>T0[t.id]=1);
let q=0, bad=[];
TOPS.forEach(t=>{(t.qz||[]).forEach((x,i)=>{q++; if(!(x[2]>=0 && x[2]<x[1].length)) bad.push(t.id+':'+i); if(new Set(x[1]).size!==x[1].length) bad.push('dup '+t.id+':'+i)});
 ['id','mod','t','hook','body','rule','trap','qz'].forEach(k=>{if(!t[k]) bad.push('falta '+k+' em '+t.id)})});
const ids=TOPS.map(t=>t.id); if(new Set(ids).size!==ids.length) bad.push('ids repetidos');
const TQ=[...TREINO_M1,...TREINO_M2,...TREINO_M3,...TREINO_M45,...TREINO_P1,...TREINO_P2,...TREINO_P3];
TQ.forEach((x,i)=>{if(!TOPS.find(t=>t.id===x.t))bad.push('treino topico '+x.t);if(x.o.length!==5)bad.push('treino '+i)});
TOPS.forEach(t=>{if(!MACETES[t.id])bad.push('sem macete '+t.id)});
const FC=[...CARDS_M1,...CARDS_M2,...CARDS_M3,...CARDS_M45,...CARDS_P1,...CARDS_P2,...CARDS_P3];FC.forEach((c,i)=>{if(!TOPS.find(t=>t.id===c.t)||!c.f||!c.b)bad.push('card '+i)});
const SM=[SIM_A_POR,SIM_A_MAT,SIM_B_POR,SIM_B_MAT,SIM_C_POR,SIM_C_MAT];SM.forEach((a,k)=>{if(a.length!==15)bad.push('sim '+k+' tem '+a.length);a.forEach((x,i)=>{if(!TOPS.find(t=>t.id===x.t)||x.o.length!==5||!(x.a>=0&&x.a<5))bad.push('sim '+k+':'+i)})});
const PL=Object.assign({},PLUS_M1,PLUS_M2A,PLUS_M2B,PLUS_M3,PLUS_M45,PLUS_P1,PLUS_P2,PLUS_P3A,PLUS_P3B);TOPS.forEach(t=>{const x=PL[t.id];if(!x)bad.push('sem plus '+t.id);else ['base','jeitos','passo','exs','erros','resumo'].forEach(k=>{if(!x[k]||!x[k].length)bad.push('plus '+t.id+' '+k)})});Object.keys(PL).forEach(k=>{if(!T0[k])bad.push('plus id '+k)});
console.log(JSON.stringify({plus:Object.keys(PL).length,kit:KIT.reduce((a,s)=>a+s.it.length,0),sim:SM.length*15,max_total2:TOPS.length*5+q*5+TQ.length*10+FC.length*2+900,cards:FC.length,treino:TQ.length,max_total:TOPS.length*5+q*5+TQ.length*10+FC.length*2,topicos:TOPS.length, mat:TOP_MAT.length, por:TOP_POR.length, questoes:q, max:TOPS.length*5+q*5, bad}));
"""
(dist / "_probe.js").write_text(probe, encoding="utf-8")
r = subprocess.run(["node", str(dist / "_probe.js")], capture_output=True, text=True)
print(r.stdout or r.stderr)
print("ok:", dist / "objetivo.html", (dist / "objetivo.html").stat().st_size, "bytes")
