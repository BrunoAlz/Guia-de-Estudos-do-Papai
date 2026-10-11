/* ---------- FLASHCARDS ---------- */
const FC=[];{const cnt={};[...CARDS_M1,...CARDS_M2,...CARDS_M3,...CARDS_M45,...CARDS_P1,...CARDS_P2,...CARDS_P3].forEach(c=>{if(!T[c.t])return;cnt[c.t]=(cnt[c.t]||0)+1;c.id='c:'+c.t+':'+cnt[c.t];c.area=T[c.t].area;FC.push(c)})}
const FCI={};FC.forEach(c=>FCI[c.id]=c);
const KIND={regra:['Regra','📐'],conceito:['Conceito','💡'],conta:['Conta relâmpago','⚡'],exemplo:['Exemplo','🔎'],pegadinha:['Pegadinha','⚠️']};
function fcPts(){let p=0;for(const id in S.fc){if(FCI[id]&&S.fc[id].n>0)p+=2}return p}
CATS.push(['fc','Flashcards',()=>FC.length*2,fcPts]);
function fst(c){const r=S.fc&&S.fc[c.id];if(!r)return 'new';return r.s?'ok':'bad'}
let FCO=Object.assign({area:'mix',foco:'all',n:20},LS.get(P+':fco')||{});
let FS=null;
function fcPool(area,foco){return FC.filter(c=>(area==='mix'||c.area===area)&&(foco==='all'||(foco==='star3'&&T[c.t].star===3)||(foco==='conta'&&c.k==='conta')||(foco==='pega'&&c.k==='pegadinha')||(foco==='new'&&fst(c)==='new')||(foco==='bad'&&fst(c)==='bad')))}
function fcPick(pool,n){const g={bad:[],new:[],ok:[]};pool.forEach(c=>g[fst(c)].push(c));return [...shuffle(g.bad),...shuffle(g.new),...shuffle(g.ok)].slice(0,n)}
function fcStart(ids){if(!ids.length){toast('Nenhum cartão nesse filtro');return}FS={q:ids.slice(),seen:{},ok:[],miss:{},flip:false,total:ids.length};renderCards();try{window.scrollTo(0,0)}catch(e){}}
function renderCards(){const f=!!(FS&&FS.q.length);document.body.classList.toggle('focus',f);if(f)renderCard();else if(FS)renderCardsEnd();else renderCardsSetup()}

function renderCardsSetup(){const el=$('cards');
 const tot=FC.length,ok=FC.filter(c=>fst(c)==='ok').length,bad=FC.filter(c=>fst(c)==='bad').length;
 const avail=fcPool(FCO.area,FCO.foco).length,nn=Math.min(FCO.n,avail);
 let h='<div class="card tcard"><h2 class="th" style="margin:0 0 6px">Flashcards</h2><p style="margin:0;color:var(--muted)">'+tot+' cartões para deixar tudo na ponta da língua. Leia a frente, <b>responda de cabeça</b>, vire e seja honesto: sabia ou não? Os que você errar <b>voltam</b> na mesma rodada até grudar.</p></div>';
 h+='<div class="sum"><div><span>Dominados</span><b>'+ok+'/'+tot+'</b></div><div><span>Para rever</span><b>'+bad+'</b></div><div><span>Nunca vistos</span><b>'+(tot-ok-bad)+'</b></div></div>';
 h+='<div class="opt-g"><span class="lbl">Matéria</span><div class="chips" data-k="area">'+[['mix','Misturado'],['mat','Matemática'],['por','Português']].map(([v,l])=>'<button type="button" data-v="'+v+'" aria-pressed="'+(FCO.area===v)+'">'+l+'</button>').join('')+'</div></div>';
 h+='<div class="opt-g"><span class="lbl">Foco</span><div class="chips" data-k="foco">'+[['all','Todos'],['star3','Só ★★★'],['conta','⚡ Conta relâmpago'],['pega','⚠️ Pegadinhas'],['new','Nunca vistos'],['bad','Não sabia ('+bad+')']].map(([v,l])=>'<button type="button" data-v="'+v+'" aria-pressed="'+(FCO.foco===v)+'">'+l+'</button>').join('')+'</div></div>';
 h+='<div class="opt-g"><span class="lbl">Quantos cartões</span><div class="chips" data-k="n">'+[10,20,40,80].map(v=>'<button type="button" data-v="'+v+'" aria-pressed="'+(FCO.n===v)+'">'+v+'</button>').join('')+'</div></div>';
 h+=avail?'<button type="button" class="btn big" id="fGo">Começar · '+nn+' cartões</button>':'<p class="card" style="padding:14px;margin:0 0 16px">'+(FCO.foco==='bad'?'Nenhum cartão para rever. 👏':'Nenhum cartão nesse filtro.')+'</p>';
 h+='<div class="sec" style="--ac:var(--ink)">Baralho por tópico</div>';
 Object.keys(AREAS).forEach(a=>{const A=AREAS[a];h+='<p style="margin:14px 0 6px;font:800 16px var(--head);color:'+A.ac+'">'+A.n+'</p><div class="tlist">';
  A.tops.forEach(t=>{const cs=FC.filter(c=>c.t===t.id);if(!cs.length)return;const o=cs.filter(c=>fst(c)==='ok').length,b=cs.filter(c=>fst(c)==='bad').length;
   h+='<button type="button" class="trow" style="--ac:'+A.ac+'" data-ft="'+t.id+'"><span class="st">'+'★'.repeat(t.star)+'<span style="opacity:.25">'+'★'.repeat(3-t.star)+'</span></span><span><span class="tt">'+t.t+'</span><span class="tg">'+cs.length+' cartões</span></span><span class="ck">'+(b?'<span class="pill bad">'+b+' ✗</span>':'')+'<span class="pill'+(o===cs.length?' ok':o?' part':'')+'">'+o+'/'+cs.length+'</span></span></button>'});
  h+='</div>'});
 el.innerHTML=h;
 el.querySelectorAll('.chips').forEach(c=>c.querySelectorAll('button').forEach(b=>b.onclick=()=>{const k=c.dataset.k;FCO[k]=k==='n'?+b.dataset.v:b.dataset.v;LS.set(P+':fco',FCO);renderCardsSetup()}));
 if($('fGo'))$('fGo').onclick=()=>{if(!need())return;let list;const pool=fcPool(FCO.area,FCO.foco);
  if(FCO.area==='mix'){const m=fcPick(pool.filter(c=>c.area==='mat'),Math.ceil(FCO.n/2)),p=fcPick(pool.filter(c=>c.area==='por'),FCO.n);list=[];let i=0,j=0;while(list.length<FCO.n&&(i<m.length||j<p.length)){if(i<m.length)list.push(m[i++]);if(list.length<FCO.n&&j<p.length)list.push(p[j++])}}
  else list=fcPick(pool,FCO.n);fcStart(list.map(c=>c.id))};
 el.querySelectorAll('[data-ft]').forEach(b=>b.onclick=()=>{if(!need())return;fcStart(shuffle(FC.filter(c=>c.t===b.dataset.ft)).map(c=>c.id))});}

function renderCard(){const el=$('cards');const id=FS.q[0],c=FCI[id],t=T[c.t],A=AREAS[c.area],K=KIND[c.k]||['Cartão','🃏'];
 const done=FS.ok.length,again=FS.miss[id]||0;
 let h='<div style="--ac:'+A.ac+';--abg:'+A.abg+'"><div class="qhead"><button type="button" class="lnk" id="fQuit">✕ Sair</button><span class="qn">'+done+' de '+FS.total+' dominados</span><span class="qok">'+FS.q.length+' na pilha</span></div><div class="pbar"><i style="width:'+Math.round(done/FS.total*100)+'%"></i></div>';
 h+='<div class="fc'+(FS.flip?' flip':'')+'" id="fcard" role="button" tabindex="0" aria-label="Virar cartão"><div class="fcin"><div class="face front"><div class="fk"><span>'+K[1]+' '+K[0]+'</span><span>'+A.n+' · '+t.t+'</span></div><div class="ft">'+fmt(c.f)+'</div>'+(again?'<div class="fa">voltou '+again+'× · você consegue!</div>':'')+'<div class="fh">Toque para virar</div></div><div class="face back"><div class="fk"><span>'+K[1]+' '+K[0]+'</span><span>'+t.t+'</span></div><div class="fq">'+fmt(c.f)+'</div><div class="fb">'+fmt(c.b)+'</div></div></div></div>';
 h+=FS.flip?'<div class="fbtns"><button type="button" class="btn no" id="fNo">✗ Não sabia</button><button type="button" class="btn yes" id="fYes">✓ Sabia</button></div><p class="fkeys">No computador: <b>1</b> não sabia · <b>2</b> sabia · <b>espaço</b> vira</p>':'<div class="fbtns one"><button type="button" class="btn" id="fFlip">Virar cartão</button></div><p class="fkeys">Responda de cabeça antes de virar 😉</p>';
 h+='</div>';el.innerHTML=h;
 const flip=()=>{if(FS.flip)return;FS.flip=true;renderCard()};
 $('fcard').onclick=flip;if($('fFlip'))$('fFlip').onclick=flip;
 if($('fYes'))$('fYes').onclick=()=>fcMark(true);if($('fNo'))$('fNo').onclick=()=>fcMark(false);
 $('fQuit').onclick=()=>{if(FS.ok.length||Object.keys(FS.miss).length){FS.q=[];renderCards()}else{FS=null;renderCards()}try{window.scrollTo(0,0)}catch(e){}};}
function fcMark(yes){if(!need())return;const id=FS.q.shift(),before=TOTAL();const r=S.fc[id]||(S.fc[id]={s:0,n:0});
 if(yes){r.s=1;r.n++;FS.ok.push(id)}else{r.s=0;FS.miss[id]=(FS.miss[id]||0)+1;const pos=Math.min(3,FS.q.length);FS.q.splice(pos,0,id)}
 FS.flip=false;save(before);renderCards();try{window.scrollTo(0,0)}catch(e){}}
document.addEventListener('keydown',e=>{if($('cards').hidden||!FS||!FS.q.length||!$('login').hidden)return;if(e.target&&/INPUT|TEXTAREA/.test(e.target.tagName))return;
 if(e.key===' '||e.key==='Enter'){e.preventDefault();if(!FS.flip){FS.flip=true;renderCard()}}else if(FS.flip&&e.key==='1')fcMark(false);else if(FS.flip&&e.key==='2')fcMark(true)});

function renderCardsEnd(){const el=$('cards');const missed=Object.keys(FS.miss);const first=FS.ok.filter(id=>!FS.miss[id]).length;
 let h='<div class="card score"><div class="big">'+first+'<small>/'+FS.ok.length+'</small></div><div><div class="rk">de primeira!</div><p style="margin:4px 0 0">'+(FS.q.length?'Rodada interrompida. ':'Rodada completa. ')+(missed.length?missed.length+' cartão(ões) precisaram voltar: eles estão em “Não sabia” para você rever amanhã.':'Nenhum cartão precisou voltar. 🏆')+'</p></div></div>';
 if(missed.length)h+='<div class="card" style="padding:6px 14px;margin-bottom:14px"><p style="margin:10px 0 4px;font-weight:700">Os que deram trabalho:</p><ol class="rlist">'+missed.map(id=>{const c=FCI[id];return '<li class="b"><span>'+FS.miss[id]+'×</span><span>'+fmt(c.f)+'</span></li>'}).join('')+'</ol></div>';
 h+='<div class="nav1">'+(missed.length?'<button type="button" class="btn" id="fAgain">Rever só esses '+missed.length+'</button>':'')+'<button type="button" class="btn ghost" id="fNew">Nova rodada</button></div>';
 el.innerHTML=h;
 if($('fAgain'))$('fAgain').onclick=()=>fcStart(shuffle(missed));
 $('fNew').onclick=()=>{FS=null;renderCards();try{window.scrollTo(0,0)}catch(e){}};}
