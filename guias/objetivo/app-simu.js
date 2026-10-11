/* ---------- SIMULADOS CRONOMETRADOS ---------- */
const SIMS=[['A',SIM_A_POR,SIM_A_MAT],['B',SIM_B_POR,SIM_B_MAT],['C',SIM_C_POR,SIM_C_MAT]].map(([id,p,m])=>({id,n:'Simulado '+id,q:[...p,...m].map((x,i)=>Object.assign({},x,{area:i<15?'por':'mat'}))}));
const SIMI={};SIMS.forEach(s=>SIMI[s.id]=s);
const SIM_SECS=3*60*60;
function simPts(){let p=0;SIMS.forEach(s=>{const r=S.sim&&S.sim[s.id];if(r&&r.runs&&r.runs.length)p+=r.runs[0].sc*10});return p}
CATS.push(['sim','Simulados (1ª tentativa)',()=>SIMS.length*300,simPts]);
let SIMV=null; // {id, run} quando vendo resultado
let simConfirm=false,simTick=null;
const fmtT=s=>{s=Math.max(0,Math.round(s));const h=Math.floor(s/3600),m=Math.floor(s%3600/60),x=s%60;return (h?h+'h':'')+String(m).padStart(h?2:1,'0')+'min'+(h?'':' '+String(x).padStart(2,'0')+'s')};
const clockT=s=>{s=Math.max(0,Math.floor(s));const h=Math.floor(s/3600),m=Math.floor(s%3600/60),x=s%60;return h+':'+String(m).padStart(2,'0')+':'+String(x).padStart(2,'0')};
function simLeft(){const r=S.simrun;return r?SIM_SECS-(Date.now()-r.start)/1000:0}
function renderSimu(){const run=S.simrun;document.body.classList.toggle('focus',!!run||!!SIMV);if(run){if(simLeft()<=0){simSubmit(true);return}renderSimQ()}else if(SIMV)renderSimRes();else renderSimList()}
function ensureTick(){if(simTick)return;simTick=setInterval(()=>{if(!S.simrun){clearInterval(simTick);simTick=null;return}const left=simLeft();if(left<=0){simSubmit(true);return}const c=$('simClock');if(c){c.textContent=clockT(left);c.classList.toggle('warn',left<=1800);c.classList.toggle('crit',left<=600)}},1000)}
if(S.simrun)ensureTick();

function renderSimList(){const el=$('simu');
 let h='<div class="card tcard"><h2 class="th" style="margin:0 0 6px">Simulados cronometrados</h2><p style="margin:0 0 8px;color:var(--muted)">Igual ao sábado: <b>30 questões</b> (15 de Português + 15 de Matemática), <b>3 horas</b>, sem correção até entregar. No fim: nota, tempo e diagnóstico dos tópicos.</p>'+
 '<details class="tip" style="margin:6px 0 0"><summary style="cursor:pointer;font-weight:700">Como fazer como se fosse a prova de verdade</summary><ul style="margin:8px 0 0;padding-left:20px"><li>Separe <b>3 horas sem interrupção</b>, lápis, borracha e folha de rascunho.</li><li>Celular no silencioso, sem calculadora e sem consultar nada.</li><li>O relógio <b>não pausa</b>: se sair do app, ele continua correndo (como na prova).</li><li>Treine a estratégia: 1ª passada no que você sabe, marque as dúvidas ⚑ e volte depois.</li><li>Deixe 10 minutos no fim para revisar a folha de respostas.</li><li>Sugestão: <b>A</b> na terça ou quarta, <b>B</b> na quinta. O <b>C</b> é reserva para quem quiser mais um.</li></ul></details></div>';
 SIMS.forEach(s=>{const r=S.sim&&S.sim[s.id];const runs=(r&&r.runs)||[];const best=runs.reduce((a,x)=>Math.max(a,x.sc),-1);const first=runs[0];
  h+='<div class="card simcard"><div class="simh"><b>'+s.n+'</b>'+(first?'<span class="pill ok">feito</span>':'<span class="pill">não feito</span>')+'</div>';
  if(first)h+='<div class="simst"><div><span>1ª tentativa</span><b>'+first.sc+'/30</b><small>nota '+(first.sc/3).toFixed(1).replace('.',',')+'</small></div><div><span>Português</span><b>'+first.por+'/15</b></div><div><span>Matemática</span><b>'+first.mat+'/15</b></div><div><span>Tempo</span><b>'+fmtT(first.t)+'</b></div></div>'+(runs.length>1?'<p class="simmini">Melhor: '+best+'/30 em '+runs.length+' tentativas</p>':'');
  h+='<div class="simb">'+(first?'<button type="button" class="btn ghost" data-sv="'+s.id+'">Ver correção</button><button type="button" class="btn" data-ss="'+s.id+'">Refazer</button>':'<button type="button" class="btn big" style="margin:0" data-ss="'+s.id+'">Começar o '+s.n+' · 3h</button>')+'</div></div>'});
 el.innerHTML=h;
 el.querySelectorAll('[data-ss]').forEach(b=>b.onclick=()=>{if(!need())return;simConfirm=b.dataset.ss;renderSimStart()});
 el.querySelectorAll('[data-sv]').forEach(b=>b.onclick=()=>{const r=S.sim[b.dataset.sv];SIMV={id:b.dataset.sv,run:r.runs[r.runs.length-1],ri:r.runs.length-1};renderSimu();try{window.scrollTo(0,0)}catch(e){}});}
function renderSimStart(){const el=$('simu');const s=SIMI[simConfirm];const again=S.sim&&S.sim[s.id]&&S.sim[s.id].runs.length;
 el.innerHTML='<div class="card tcard" style="text-align:center"><h2 class="th" style="margin:0 0 6px">'+s.n+'</h2><p style="font-size:44px;margin:4px 0;font-weight:800;font-family:var(--head)">3:00:00</p><p>30 questões · Português (1 a 15) e Matemática (16 a 30)</p><p style="color:var(--muted);font-size:15px">O relógio começa quando você tocar em <b>Iniciar</b> e não pausa.'+(again?' <b>Refazendo:</b> esta tentativa não soma pontos, mas entra no seu histórico.':' Os acertos da <b>1ª tentativa</b> valem 10 pontos cada.')+'</p><button type="button" class="btn big" id="simGo">Iniciar agora</button><button type="button" class="btn ghost" id="simBack" style="width:100%">Voltar</button></div>';
 $('simGo').onclick=()=>{const before=TOTAL();S.simrun={id:s.id,start:Date.now(),ans:{},mark:{},cur:0};simConfirm=false;save(before);ensureTick();renderSimu();try{window.scrollTo(0,0)}catch(e){}};
 $('simBack').onclick=()=>{simConfirm=false;renderSimList()};}

function renderSimQ(){const el=$('simu');const r=S.simrun,s=SIMI[r.id],i=r.cur,x=s.q[i],A=AREAS[x.area];const left=simLeft();
 const nAns=Object.keys(r.ans).length,prev=s.q[i-1];
 let h='<div class="simbar"><span class="clock'+(left<=600?' crit':left<=1800?' warn':'')+'" id="simClock">'+clockT(left)+'</span><span class="sp">'+s.n+' · '+nAns+'/30 respondidas</span><button type="button" class="btn sm" id="simEnd">Entregar</button></div>';
 h+='<article style="--ac:'+A.ac+';--abg:'+A.abg+'"><div class="tags" style="margin:12px 0 8px"><span class="tag">Questão '+(i+1)+'</span><span class="tag">'+A.n+'</span>'+(r.mark[i]?'<span class="tag" style="background:var(--hl);color:#3b2f00">⚑ dúvida</span>':'')+'</div>';
 if(x.tx){const same=prev&&prev.tx===x.tx;h+='<details class="txt simtx"'+(same?'':' open')+'><summary><b>'+(x.tt||'Texto')+'</b>'+(same?' · mesmo texto da questão anterior (toque para ver)':'')+'</summary><div>'+fmt(x.tx).replace(/<table class="tb">/g,'<div class="tbw"><table class="tb">').replace(/<\/table>/g,'</table></div>')+'</div></details>'}
 h+='<div class="qq big"><div class="qt">'+fmt(x.q)+'</div><div class="opts">';
 x.o.forEach((o,oi)=>{h+='<button type="button" class="opt'+(r.ans[i]===oi?' sel':'')+'" data-o="'+oi+'"><span class="l">'+LETTERS[oi]+'</span><span>'+fmt(o[0])+'</span></button>'});
 h+='</div></div><div class="simnav"><button type="button" class="btn ghost" id="simPrev"'+(i?'':' disabled')+'>←</button><button type="button" class="btn ghost" id="simMark">'+(r.mark[i]?'⚑ Tirar dúvida':'⚑ Marcar dúvida')+'</button><button type="button" class="btn" id="simNext">'+(i<29?'Próxima →':'Revisar folha')+'</button></div>';
 h+='<div class="sheet"><p><b>Folha de respostas</b> · toque para ir</p><div class="cells2">'+s.q.map((q,k)=>'<button type="button" class="c2'+(k===i?' cur':'')+(r.ans[k]!=null?' an':'')+(r.mark[k]?' mk':'')+(k===15?' br':'')+'" data-go="'+k+'"><small>'+(k+1)+'</small>'+(r.ans[k]!=null?LETTERS[r.ans[k]]:'·')+'</button>').join('')+'</div><p class="leg2"><span><i class="an"></i>respondida</span><span><i class="mk"></i>dúvida</span><span>1–15 Português · 16–30 Matemática</span></p></div>';
 if(simConfirm==='end'){const blank=30-nAns,mk=Object.keys(r.mark).length;h+='<div class="card endbox" id="endBox"><h3>Entregar o simulado?</h3><p>'+(blank?'<b>'+blank+' em branco.</b> Na prova, chute com estratégia: elimine as absurdas. ':'Todas respondidas. ')+(mk?mk+' marcada(s) como dúvida. ':'')+'Ainda faltam <b>'+fmtT(left)+'</b>.</p><div class="nav1"><button type="button" class="btn ghost" id="endNo">Continuar a prova</button><button type="button" class="btn" id="endYes" style="background:var(--red);border-color:var(--red)">Entregar agora</button></div><p style="text-align:center;margin:0"><button type="button" class="lnk" id="simAbort">Desistir sem salvar</button></p></div>'}
 h+='</article>';el.innerHTML=h;
 const go=k=>{r.cur=k;if(CUR){USERS[CUR].s=S;LS.set(P+':users',USERS)}renderSimQ();try{window.scrollTo(0,0)}catch(e){}};
 el.querySelectorAll('.opt').forEach(b=>b.onclick=()=>{const o=+b.dataset.o;if(r.ans[i]===o)delete r.ans[i];else r.ans[i]=o;if(CUR){USERS[CUR].s=S;LS.set(P+':users',USERS)}el.querySelectorAll('.opt').forEach(z=>z.classList.toggle('sel',r.ans[i]===+z.dataset.o));const c=el.querySelector('.c2.cur');if(c){c.classList.toggle('an',r.ans[i]!=null);c.lastChild.textContent=r.ans[i]!=null?LETTERS[r.ans[i]]:'·'}el.querySelector('.simbar .sp').textContent=s.n+' · '+Object.keys(r.ans).length+'/30 respondidas'});
 $('simPrev').onclick=()=>{if(i)go(i-1)};$('simNext').onclick=()=>{if(i<29)go(i+1);else{const sh=el.querySelector('.sheet');if(sh)sh.scrollIntoView({behavior:'smooth'})}};
 $('simMark').onclick=()=>{if(r.mark[i])delete r.mark[i];else r.mark[i]=1;go(i)};
 el.querySelectorAll('[data-go]').forEach(b=>b.onclick=()=>go(+b.dataset.go));
 $('simEnd').onclick=()=>{simConfirm='end';renderSimQ();const e=$('endBox');if(e)e.scrollIntoView({behavior:'smooth',block:'center'})};
 if($('endNo'))$('endNo').onclick=()=>{simConfirm=false;renderSimQ()};
 if($('endYes'))$('endYes').onclick=()=>{simConfirm=false;simSubmit(false)};
 if($('simAbort'))$('simAbort').onclick=()=>{if($('simAbort').dataset.sure){simConfirm=false;S.simrun=null;if(CUR){USERS[CUR].s=S;LS.set(P+':users',USERS)}renderSimu();return}$('simAbort').dataset.sure=1;$('simAbort').textContent='Toque de novo para confirmar: a tentativa será apagada'};}

function simSubmit(auto){const r=S.simrun;if(!r)return;const s=SIMI[r.id];const before=TOTAL();
 const ans=[];let por=0,mat=0;s.q.forEach((x,k)=>{const v=r.ans[k]!=null?r.ans[k]:null;ans.push(v);if(v===x.a){if(x.area==='por')por++;else mat++}});
 const t=Math.min(SIM_SECS,(Date.now()-r.start)/1000);const run={ans,mark:Object.keys(r.mark).map(Number),t:Math.round(t),sc:por+mat,por,mat,date:Date.now(),auto:!!auto};
 S.sim=S.sim||{};S.sim[r.id]=S.sim[r.id]||{runs:[]};S.sim[r.id].runs.push(run);S.simrun=null;
 SIMV={id:r.id,run,ri:S.sim[r.id].runs.length-1,fresh:true};save(before);if(auto)toast('Tempo esgotado! Simulado entregue.');
 if(!$('simu').hidden){renderSimu();try{window.scrollTo(0,0)}catch(e){}}}

function renderSimRes(){const el=$('simu');const {id,run}=SIMV,s=SIMI[id];const nota=(run.sc/3).toFixed(1).replace('.',',');
 const msg=run.sc>=27?'Nível bolsa 100%! 🏆':run.sc>=23?'Muito forte! Ajuste os detalhes abaixo. 💪':run.sc>=18?'Bom caminho. O diagnóstico mostra onde ganhar pontos.':'Ótimo treino para descobrir os pontos fracos. Revise os tópicos abaixo e refaça.';
 const wrong={};s.q.forEach((x,k)=>{if(run.ans[k]!==x.a){wrong[x.t]=(wrong[x.t]||0)+1}});const wk=Object.keys(wrong).sort((a,b)=>wrong[b]-wrong[a]||T[b].star-T[a].star);
 let h='<div class="crumb"><button type="button" id="resBack">← Simulados</button></div>';
 h+='<div class="card score"><div class="big">'+run.sc+'<small>/30</small></div><div><div class="rk">nota '+nota+'</div><p style="margin:4px 0 0">'+msg+'</p></div></div>';
 h+='<div class="sum"><div><span>Português</span><b>'+run.por+'/15</b></div><div><span>Matemática</span><b>'+run.mat+'/15</b></div><div><span>Tempo'+(run.auto?' (esgotou)':'')+'</span><b>'+fmtT(run.t)+'</b></div></div>';
 if(wk.length){h+='<div class="card" style="padding:14px 16px;margin-bottom:14px"><h3 style="margin:0 0 6px;font:800 17px var(--head)">Diagnóstico: onde estão os pontos perdidos</h3><p style="margin:0 0 10px;font-size:14px;color:var(--muted)">Revise a teoria e depois treine o tópico.</p>';
  wk.forEach(t=>{const A=AREAS[T[t].area];h+='<div class="diag" style="--ac:'+A.ac+'"><span class="dn">'+wrong[t]+' ✗</span><span class="dt">'+T[t].t+'<small>'+A.n+' · '+'★'.repeat(T[t].star)+'</small></span><button type="button" class="btn ghost sm" data-rv="'+t+'">Revisar</button><button type="button" class="btn sm" data-tr="'+t+'">Treinar</button></div>'});h+='</div>'}
 h+='<h3 class="sec" style="--ac:var(--ink)">Gabarito comentado</h3><div class="glist">';
 s.q.forEach((x,k)=>{const v=run.ans[k],ok=v===x.a;h+='<details class="gq '+(ok?'g':'b')+'"><summary><span class="gn">'+(k+1)+'</span><span class="gs">'+(ok?'✓':v==null?'em branco':'✗')+'</span><span class="gt">'+T[x.t].t+'</span><span class="ga">'+(v!=null?LETTERS[v]:'–')+' → <b>'+LETTERS[x.a]+'</b></span></summary><div class="gb">'+
  (x.tx?'<details class="txt"><summary><b>'+(x.tt||'Texto')+'</b> (ver)</summary><div>'+fmt(x.tx).replace(/<table class="tb">/g,'<div class="tbw"><table class="tb">').replace(/<\/table>/g,'</table></div>')+'</div></details>':'')+
  '<div class="qt" style="font-weight:700;margin-bottom:8px">'+fmt(x.q)+'</div><div class="opts">'+x.o.map((o,oi)=>'<div class="opt'+(oi===x.a?' right':oi===v?' wrong':'')+'"><span class="l">'+LETTERS[oi]+'</span><span>'+fmt(o[0])+'</span></div>').join('')+'</div>'+
  (v!=null&&!ok?'<div class="why" style="margin-top:10px"><b>Por que a '+LETTERS[v]+' está errada:</b> '+fmt(x.o[v][1])+'</div>':'')+
  '<div class="res" style="margin-top:10px"><b class="h">Resolução</b>'+fmt(x.e)+'</div>'+(MACETES[x.t]?'<div class="mac" style="--ac:'+AREAS[x.area].ac+'"><b class="h">Macete</b>'+fmt(MACETES[x.t])+'</div>':'')+'</div></details>'});
 h+='</div><div class="nav1"><button type="button" class="btn ghost" id="resList">Voltar aos simulados</button><button type="button" class="btn" id="resRedo">Refazer o '+s.n+'</button></div>';
 el.innerHTML=h;
 const back=()=>{SIMV=null;renderSimu();try{window.scrollTo(0,0)}catch(e){}};
 $('resBack').onclick=back;$('resList').onclick=back;
 $('resRedo').onclick=()=>{SIMV=null;simConfirm=id;document.body.classList.remove('focus');renderSimStart()};
 el.querySelectorAll('[data-rv]').forEach(b=>b.onclick=()=>{SIMV=null;go('rev/'+b.dataset.rv)});
 el.querySelectorAll('[data-tr]').forEach(b=>b.onclick=()=>{SIMV=null;const t=b.dataset.tr;go('treino');setTimeout(()=>startSession(TQ.filter(q=>q.t===t).sort((p,q)=>p.d-q.d).map(q=>q.id),T[t].t),0)});}
