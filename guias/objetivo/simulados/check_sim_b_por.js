const fs=require('fs'),vm=require('vm');
const src=fs.readFileSync(process.argv[2],'utf8');
if(/\$\{/.test(src.replace(/^.*\n/,''))) console.log('WARN ${');
const ctx={};vm.createContext(ctx);vm.runInContext(src+';this.X=SIM_B_POR;',ctx);
const Q=ctx.X;let err=[];const d={1:0,2:0,3:0},L=[0,0,0,0,0];
const valid=new Set(['p-gen','p-impl','p-coes','p-fig','p-sent','p-tira','p-pub','p-modal','p-per','p-pont','p-col','p-var']);
if(Q.length!==15)err.push('len '+Q.length);
const byTT={};
Q.forEach((q,i)=>{
 if(!valid.has(q.t))err.push(i+' t');
 if(q.o.length!==5)err.push(i+' nopts');
 if(!(q.a>=0&&q.a<=4))err.push(i+' a');
 q.o.forEach((o,j)=>{ if(o.length!==2)err.push(i+' pair'); if((o[1]==='')!==(j===q.a))err.push(i+' fb'+j);});
 if(new Set(q.o.map(o=>o[0])).size!==5)err.push(i+' dup');
 d[q.d]++;L[q.a]++;
 if(q.tt){ if(byTT[q.tt]!==undefined && byTT[q.tt]!==q.tx)err.push(i+' tx mismatch'); byTT[q.tt]=q.tx;}
 if(!q.e)err.push(i+' e');
 console.log(i+1,q.t,'d'+q.d,'ABCDE'[q.a],q.tt||'avulsa');
});
console.log('dif',d,'letras',L.join(','));
if(d[1]!==5||d[2]!==6||d[3]!==4)err.push('dif dist');
if(L.some(x=>x<2||x>4))err.push('letter dist');
console.log(err.length?'ERRORS: '+err.join('; '):'ALL CHECKS OK');
