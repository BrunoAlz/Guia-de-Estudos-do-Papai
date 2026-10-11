#!/usr/bin/env python3
"""Monta guias/objetivo/dist/objetivo.html juntando o app com os dados."""
import pathlib, re, json, subprocess, sys

ROOT = pathlib.Path(__file__).resolve().parent.parent / "guias" / "objetivo"
app = (ROOT / "app.html").read_text(encoding="utf-8")
data = "\n".join((ROOT / f).read_text(encoding="utf-8") for f in ("data-mat.js", "data-por.js", "data-macetes.js") + tuple("treino/" + n + ".js" for n in ("tm1","tm2","tm3","tm45","tp1","tp2","tp3")))
out = app.replace("/*__DATA__*/", data).replace("/*__TREINO__*/", (ROOT / "app-treino.js").read_text(encoding="utf-8"))
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
const TOPS=[...TOP_MAT,...TOP_POR];
let q=0, bad=[];
TOPS.forEach(t=>{(t.qz||[]).forEach((x,i)=>{q++; if(!(x[2]>=0 && x[2]<x[1].length)) bad.push(t.id+':'+i); if(new Set(x[1]).size!==x[1].length) bad.push('dup '+t.id+':'+i)});
 ['id','mod','t','hook','body','rule','trap','qz'].forEach(k=>{if(!t[k]) bad.push('falta '+k+' em '+t.id)})});
const ids=TOPS.map(t=>t.id); if(new Set(ids).size!==ids.length) bad.push('ids repetidos');
const TQ=[...TREINO_M1,...TREINO_M2,...TREINO_M3,...TREINO_M45,...TREINO_P1,...TREINO_P2,...TREINO_P3];
TQ.forEach((x,i)=>{if(!TOPS.find(t=>t.id===x.t))bad.push('treino topico '+x.t);if(x.o.length!==5)bad.push('treino '+i)});
TOPS.forEach(t=>{if(!MACETES[t.id])bad.push('sem macete '+t.id)});
console.log(JSON.stringify({treino:TQ.length,max_total:TOPS.length*5+q*5+TQ.length*10,topicos:TOPS.length, mat:TOP_MAT.length, por:TOP_POR.length, questoes:q, max:TOPS.length*5+q*5, bad}));
"""
(dist / "_probe.js").write_text(probe, encoding="utf-8")
r = subprocess.run(["node", str(dist / "_probe.js")], capture_output=True, text=True)
print(r.stdout or r.stderr)
print("ok:", dist / "objetivo.html", (dist / "objetivo.html").stat().st_size, "bytes")
