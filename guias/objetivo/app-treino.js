/* ---------- TREINO ESTILO PROVA ---------- */
const TQ=[];{const cnt={};[...TREINO_M1,...TREINO_M2,...TREINO_M3,...TREINO_M45,...TREINO_P1,...TREINO_P2,...TREINO_P3].forEach(x=>{if(!T[x.t])return;cnt[x.t]=(cnt[x.t]||0)+1;x.id='t:'+x.t+':'+cnt[x.t];x.area=T[x.t].area;TQ.push(x)})}
const TQI={};TQ.forEach(x=>TQI[x.id]=x);
function tnPts(){let p=0;for(const id in S.tn){const r=S.tn[id],x=TQI[id];if(!x)continue;if(r.f===x.a)p+=10;else if(r.l===x.a)p+=5}return p}
CATS.push(['tn','Treino estilo prova',()=>TQ.length*10,tnPts]);
function tst(x){const r=S.tn&&S.tn[x.id];if(!r)return 'new';if(r.l===x.a)return r.f===x.a?'ok':'fixed';return 'bad'}
const LETTERS='ABCDE';
let TR=Object.assign({area:'mix',foco:'all',n:10},LS.get(P+':tr')||{});
let SES=null;
function shuffle(a){a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}
function poolOf(area,foco){return TQ.filter(x=>(area==='mix'||x.area===area)&&(foco==='all'||(foco==='star3'&&T[x.t].star===3)||(foco==='new'&&tst(x)==='new')||(foco==='err'&&tst(x)==='bad')))}
function pick(pool,n){const g={new:[],bad:[],fixed:[],ok:[]};pool.forEach(x=>g[tst(x)].push(x));return [...shuffle(g.new),...shuffle(g.bad),...shuffle(g.fixed),...shuffle(g.ok)].slice(0,n)}
function buildSession(){const pool=poolOf(TR.area,TR.foco);let list;
 if(TR.area==='mix'){const m=pick(pool.filter(x=>x.area==='mat'),Math.ceil(TR.n/2)),p=pick(pool.filter(x=>x.area==='por'),TR.n);list=[];let i=0,j=0;while(list.length<TR.n&&(i<m.length||j<p.length)){if(i<m.length)list.push(m[i++]);if(list.length<TR.n&&j<p.length)list.push(p[j++])}}
 else list=pick(pool,TR.n);
 return list.map(x=>x.id)}
function startSession(ids,label){if(!ids.length){toast('Nenhuma questão nesse filtro');return}SES={list:ids,i:0,ans:{},label:label||'Treino'};renderTreino();try{window.scrollTo(0,0)}catch(e){}}
function renderTreino(){const f=!!(SES&&SES.i<SES.list.length);document.body.classList.toggle('focus',f);if(f)renderQ();else if(SES)renderEnd();else renderSetup()}

function renderSetup(){const el=$('treino');
 const tot=TQ.length,done=TQ.filter(x=>tst(x)!=='new').length,first=TQ.filter(x=>tst(x)==='ok').length,bad=TQ.filter(x=>tst(x)==='bad').length;
 const avail=poolOf(TR.area,TR.foco).length,nn=Math.min(TR.n,avail);
 let h='<div class="card tcard"><h2 class="th" style="margin:0 0 6px">Treino estilo prova</h2><p style="margin:0;color:var(--muted)">'+tot+' questões inéditas com <b>5 alternativas</b>, como na prova. Errou? Você vê <b>por que aquela alternativa está errada</b>, a resolução e um macete.</p></div>';
 h+='<div class="sum"><div><span>Respondidas</span><b>'+done+'/'+tot+'</b></div><div><span>Acertos de 1ª</span><b>'+first+'</b></div><div><span>Para refazer</span><b>'+bad+'</b></div></div>';
 h+='<div class="opt-g"><span class="lbl">Matéria</span><div class="chips" data-k="area">'+[['mix','Misturado'],['mat','Matemática'],['por','Português']].map(([v,l])=>'<button type="button" data-v="'+v+'" aria-pressed="'+(TR.area===v)+'">'+l+'</button>').join('')+'</div></div>';
 h+='<div class="opt-g"><span class="lbl">Foco</span><div class="chips" data-k="foco">'+[['all','Tudo'],['star3','Só ★★★'],['new','Ainda não fiz'],['err','Meus erros ('+bad+')']].map(([v,l])=>'<button type="button" data-v="'+v+'" aria-pressed="'+(TR.foco===v)+'">'+l+'</button>').join('')+'</div></div>';
 h+='<div class="opt-g"><span class="lbl">Quantas questões</span><div class="chips" data-k="n">'+[5,10,15,30].map(v=>'<button type="button" data-v="'+v+'" aria-pressed="'+(TR.n===v)+'">'+v+'</button>').join('')+'</div></div>';
 h+=avail?'<button type="button" class="btn big" id="tGo">Começar treino · '+nn+' questões</button>':'<p class="card" style="padding:14px;margin:0 0 16px">'+(TR.foco==='err'?'Nenhum erro para refazer. 👏':'Você já respondeu todas deste filtro. Escolha “Tudo” para treinar de novo.')+'</p>';
 h+='<div class="sec" style="--ac:var(--ink)">Treinar um tópico</div><p style="margin:-4px 0 12px;font-size:14px;color:var(--muted)">Todas as questões do tópico, da mais fácil para a mais difícil.</p>';
 Object.keys(AREAS).forEach(a=>{const A=AREAS[a];h+='<p style="margin:14px 0 6px;font:800 16px var(--head);color:'+A.ac+'">'+A.n+'</p><div class="tlist">';
  A.tops.forEach(t=>{const qs=TQ.filter(x=>x.t===t.id);if(!qs.length)return;const ok=qs.filter(x=>{const s=tst(x);return s==='ok'||s==='fixed'}).length,bd=qs.filter(x=>tst(x)==='bad').length;
   h+='<button type="button" class="trow" style="--ac:'+A.ac+'" data-tt="'+t.id+'"><span class="st">'+'★'.repeat(t.star)+'<span style="opacity:.25">'+'★'.repeat(3-t.star)+'</span></span><span><span class="tt">'+t.t+'</span><span class="tg">'+qs.length+' questões</span></span><span class="ck">'+(bd?'<span class="pill bad">'+bd+' ✗</span>':'')+'<span class="pill'+(ok===qs.length?' ok':ok?' part':'')+'">'+ok+'/'+qs.length+'</span></span></button>'});
  h+='</div>'});
 el.innerHTML=h;
 el.querySelectorAll('.chips').forEach(c=>c.querySelectorAll('button').forEach(b=>b.onclick=()=>{const k=c.dataset.k;TR[k]=k==='n'?+b.dataset.v:b.dataset.v;LS.set(P+':tr',TR);renderSetup()}));
 if($('tGo'))$('tGo').onclick=()=>{if(!need())return;startSession(buildSession(),'Treino')};
 el.querySelectorAll('[data-tt]').forEach(b=>b.onclick=()=>{if(!need())return;const t=b.dataset.tt;startSession(TQ.filter(x=>x.t===t).sort((p,q)=>p.d-q.d).map(x=>x.id),T[t].t)});}

function renderQ(){const el=$('treino');const id=SES.list[SES.i],x=TQI[id],t=T[x.t],A=AREAS[x.area];const ord=order(id,5);const v=SES.ans[id];const ans=v!=null;
 let h='<article style="--ac:'+A.ac+';--abg:'+A.abg+'"><div class="qhead"><button type="button" class="lnk" id="tQuit">✕ Sair</button><span class="qn">Questão '+(SES.i+1)+' de '+SES.list.length+'</span><span class="qok">'+Object.keys(SES.ans).filter(k=>SES.ans[k]===TQI[k].a).length+' ✓</span></div><div class="pbar"><i style="width:'+Math.round(SES.i/SES.list.length*100)+'%"></i></div>';
 h+='<div class="tags" style="margin-top:12px"><span class="tag">'+A.n+'</span><span class="tag">'+t.t+'</span><span class="tag dif" title="dificuldade">'+['','Fácil','Média','Difícil'][x.d]+' '+'●'.repeat(x.d)+'<span style="opacity:.3">'+'●'.repeat(3-x.d)+'</span></span></div>';
 if(x.tx)h+='<div class="txt">'+fmt(x.tx).replace(/<table class="tb">/g,'<div class="tbw"><table class="tb">').replace(/<\/table>/g,'</table></div>')+'</div>';
 h+='<div class="qq big"><div class="qt">'+fmt(x.q)+'</div><div class="opts">';
 ord.forEach((oi,pos)=>{let c='';if(ans){if(oi===x.a)c=' right';else if(oi===v)c=' wrong'}h+='<button type="button" class="opt'+c+'" data-o="'+oi+'"'+(ans?' disabled':'')+'><span class="l">'+LETTERS[pos]+'</span><span>'+fmt(x.o[oi][0])+'</span></button>'});
 h+='</div></div>';
 if(ans){const ok=v===x.a,L=i=>LETTERS[ord.indexOf(i)];const prev=S.tn[id];
  h+='<div class="verdict '+(ok?'good':'bad')+'">'+(ok?'✓ Acertou!':'✗ Não foi dessa vez. A correta é a <b>'+L(x.a)+'</b>.')+'</div>';
  if(!ok)h+='<div class="why"><b>Por que a '+L(v)+' está errada:</b> '+fmt(x.o[v][1])+'</div>';
  h+='<div class="res"><b class="h">Resolução</b>'+fmt(x.e)+'</div>';
  if(MACETES[x.t])h+='<div class="mac"><b class="h">Macete</b>'+fmt(MACETES[x.t])+'</div>';
  h+='<details class="tip"><summary style="cursor:pointer;font-weight:700">Comentário de todas as alternativas</summary><ul class="allo">'+ord.map((oi,pos)=>'<li class="'+(oi===x.a?'c':'')+'"><b>'+LETTERS[pos]+')</b> '+fmt(x.o[oi][0])+'<br><span>'+(oi===x.a?'✓ Correta.':fmt(x.o[oi][1]))+'</span></li>').join('')+'</ul></details>';
  h+='<div class="nav1"><button type="button" class="btn ghost" id="tTheory">📖 Rever a teoria</button><button type="button" class="btn" id="tNext">'+(SES.i+1<SES.list.length?'Próxima questão →':'Ver resultado')+'</button></div>'}
 h+='</article>';el.innerHTML=h;
 $('tQuit').onclick=()=>{if(Object.keys(SES.ans).length){SES.list=SES.list.slice(0,SES.i+(ans?1:0));SES.i=SES.list.length;renderTreino()}else{SES=null;renderTreino()}try{window.scrollTo(0,0)}catch(e){}};
 if(!ans)el.querySelectorAll('.opt').forEach(b=>b.onclick=()=>{if(!need())return;const c=+b.dataset.o;const before=TOTAL();SES.ans[id]=c;const r=S.tn[id];if(!r)S.tn[id]={f:c,l:c};else r.l=c;save(before);renderQ();const vd=el.querySelector('.verdict');if(vd)vd.scrollIntoView({behavior:'smooth',block:'nearest'});if(c!==x.a)toast('Leia por que errou 👇')});
 else{$('tNext').onclick=()=>{SES.i++;renderTreino();try{window.scrollTo(0,0)}catch(e){}};$('tTheory').onclick=()=>go('rev/'+x.t)}}

function renderEnd(){const el=$('treino');const ids=SES.list.filter(id=>SES.ans[id]!=null);const ok=ids.filter(id=>SES.ans[id]===TQI[id].a),wrong=ids.filter(id=>SES.ans[id]!==TQI[id].a);const pct=ids.length?Math.round(ok.length/ids.length*100):0;
 const msg=pct>=90?'Nível bolsa 100%! 🏆':pct>=70?'Muito bom! Falta pouco. 💪':pct>=50?'No caminho. Revise os erros e tente de novo.':'Calma: errar aqui é o que faz acertar no sábado. Revise a teoria e refaça.';
 const byT={};wrong.forEach(id=>{const t=TQI[id].t;byT[t]=(byT[t]||0)+1});const weak=Object.keys(byT).sort((a,b)=>byT[b]-byT[a]);
 let h='<div class="card score"><div class="big">'+ok.length+'<small>/'+ids.length+'</small></div><div><div class="rk">'+pct+'% de acertos</div><p style="margin:4px 0 0">'+msg+'</p></div></div>';
 if(weak.length)h+='<div class="card" style="padding:14px 16px;margin-bottom:14px"><b>Tópicos para revisar:</b><div class="tlist" style="margin-top:8px">'+weak.slice(0,4).map(t=>'<button type="button" class="trow" style="--ac:'+AREAS[T[t].area].ac+'" data-rv="'+t+'"><span class="st">'+byT[t]+' ✗</span><span><span class="tt">'+T[t].t+'</span><span class="tg">abrir a teoria</span></span><span class="ck">→</span></button>').join('')+'</div></div>';
 h+='<div class="card" style="padding:6px 14px;margin-bottom:14px"><ol class="rlist">'+ids.map((id,i)=>{const x=TQI[id],g=SES.ans[id]===x.a;return '<li class="'+(g?'g':'b')+'"><span>'+(g?'✓':'✗')+'</span><span>'+(i+1)+'. '+T[x.t].t+'</span></li>'}).join('')+'</ol></div>';
 h+='<div class="nav1">'+(wrong.length?'<button type="button" class="btn" id="tRedo">Refazer os '+wrong.length+' erros</button>':'')+'<button type="button" class="btn ghost" id="tNew">Novo treino</button></div>';
 el.innerHTML=h;
 el.querySelectorAll('[data-rv]').forEach(b=>b.onclick=()=>go('rev/'+b.dataset.rv));
 if($('tRedo'))$('tRedo').onclick=()=>startSession(shuffle(wrong),'Refazendo erros');
 $('tNew').onclick=()=>{SES=null;renderTreino();try{window.scrollTo(0,0)}catch(e){}};}
