var mr=Array.isArray,Ut=Array.prototype.indexOf,Tr=Array.from,gr=Object.defineProperty,it=Object.getOwnPropertyDescriptor,xr=Object.prototype,Ar=Array.prototype,Rr=Object.getPrototypeOf;const kr=()=>{};function Bt(t){for(var r=0;r<t.length;r++)t[r]()}const y=2,ct=4,Q=8,pt=16,g=32,X=64,$=128,C=256,G=512,w=1024,P=2048,U=4096,I=8192,b=16384,jt=32768,ht=65536,Vt=1<<19,dt=1<<20,Dr=Symbol("$state"),Sr=Symbol("legacy props");function Kt(t){return t===this.v}function $t(t,r){return t!=t?r==r:t!==r||t!==null&&typeof t=="object"||typeof t=="function"}function Or(t){return!$t(t,this.v)}function Gt(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Zt(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function Wt(t){throw new Error("https://svelte.dev/e/effect_orphan")}function zt(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Nr(){throw new Error("https://svelte.dev/e/hydration_failed")}function Ir(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function Fr(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Cr(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function Jt(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function Pr(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}const br=1,qr=4,Lr=8,Yr=16,Mr=1,Hr=2,Qt="[",Xt="[!",tr="]",wt={},Ur=Symbol();function Et(t){console.warn("https://svelte.dev/e/hydration_mismatch")}let F=!1;function Br(t){F=t}let m;function L(t){if(t===null)throw Et(),wt;return m=t}function jr(){return L(q(m))}function Vr(t){if(F){if(q(m)!==null)throw Et(),wt;m=t}}function Kr(){for(var t=0,r=m;;){if(r.nodeType===8){var n=r.data;if(n===tr){if(t===0)return r;t-=1}else(n===Qt||n===Xt)&&(t+=1)}var e=q(r);r.remove(),r=e}}var ft,yt,mt;function $r(){if(ft===void 0){ft=window;var t=Element.prototype,r=Node.prototype;yt=it(r,"firstChild").get,mt=it(r,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function rt(t=""){return document.createTextNode(t)}function nt(t){return yt.call(t)}function q(t){return mt.call(t)}function Gr(t,r){if(!F)return nt(t);var n=nt(m);if(n===null)n=m.appendChild(rt());else if(r&&n.nodeType!==3){var e=rt();return n==null||n.before(e),L(e),e}return L(n),n}function Zr(t,r){if(!F){var n=nt(t);return n instanceof Comment&&n.data===""?q(n):n}return m}function Wr(t,r=1,n=!1){let e=F?m:t;for(var l;r--;)l=e,e=q(e);if(!F)return e;var s=e==null?void 0:e.nodeType;if(n&&s!==3){var a=rt();return e===null?l==null||l.after(a):e.before(a),L(a),a}return L(e),e}function zr(t){t.textContent=""}function rr(t){var r=y|P;v===null?r|=C:v.f|=dt;var n=u!==null&&u.f&y?u:null;const e={children:null,ctx:d,deps:null,equals:Kt,f:r,fn:t,reactions:null,rv:0,v:null,wv:0,parent:n??v};return n!==null&&(n.children??(n.children=[])).push(e),e}function Tt(t){var r=t.children;if(r!==null){t.children=null;for(var n=0;n<r.length;n+=1){var e=r[n];e.f&y?lt(e):D(e)}}}function nr(t){for(var r=t.parent;r!==null;){if(!(r.f&y))return r;r=r.parent}return null}function gt(t){var r,n=v;z(nr(t));try{Tt(t),r=qt(t)}finally{z(n)}return r}function xt(t){var r=gt(t),n=(R||t.f&C)&&t.deps!==null?U:w;T(t,n),t.equals(r)||(t.v=r,t.wv=_r())}function lt(t){Tt(t),H(t,0),T(t,b),t.v=t.children=t.deps=t.ctx=t.reactions=null}function At(t){v===null&&u===null&&Wt(),u!==null&&u.f&C&&Zt(),st&&Gt()}function er(t,r){var n=r.last;n===null?r.last=r.first=t:(n.next=t,t.prev=n,r.last=t)}function B(t,r,n,e=!0){var l=(t&X)!==0,s=v,a={ctx:d,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|P,first:null,fn:r,last:null,next:null,parent:l?null:s,prev:null,teardown:null,transitions:null,wv:0};if(n){var o=S;try{_t(!0),at(a),a.f|=jt}catch(E){throw D(a),E}finally{_t(o)}}else r!==null&&ut(a);var i=n&&a.deps===null&&a.first===null&&a.nodes_start===null&&a.teardown===null&&(a.f&(dt|$))===0;if(!i&&!l&&e&&(s!==null&&er(a,s),u!==null&&u.f&y)){var f=u;(f.children??(f.children=[])).push(a)}return a}function Jr(t){At();var r=v!==null&&(v.f&g)!==0&&d!==null&&!d.m;if(r){var n=d;(n.e??(n.e=[])).push({fn:t,effect:v,reaction:u})}else{var e=Rt(t);return e}}function Qr(t){return At(),lr(t)}function Xr(t){const r=B(X,t,!0);return(n={})=>new Promise(e=>{n.outro?ur(r,()=>{D(r),e(void 0)}):(D(r),e(void 0))})}function Rt(t){return B(ct,t,!1)}function lr(t){return B(Q,t,!0)}function tn(t,r=[],n=rr){const e=r.map(n);return sr(()=>t(...e.map(Er)))}function sr(t,r=0){return B(Q|pt|r,t,!0)}function rn(t,r=!0){return B(Q|g,t,!0,r)}function kt(t){var r=t.teardown;if(r!==null){const n=st,e=u;vt(!0),W(null);try{r.call(null)}finally{vt(n),W(e)}}}function Dt(t){var r=t.deriveds;if(r!==null){t.deriveds=null;for(var n=0;n<r.length;n+=1)lt(r[n])}}function St(t,r=!1){var n=t.first;for(t.first=t.last=null;n!==null;){var e=n.next;D(n,r),n=e}}function ar(t){for(var r=t.first;r!==null;){var n=r.next;r.f&g||D(r),r=n}}function D(t,r=!0){var n=!1;if((r||t.f&Vt)&&t.nodes_start!==null){for(var e=t.nodes_start,l=t.nodes_end;e!==null;){var s=e===l?null:q(e);e.remove(),e=s}n=!0}St(t,r&&!n),Dt(t),H(t,0),T(t,b);var a=t.transitions;if(a!==null)for(const i of a)i.stop();kt(t);var o=t.parent;o!==null&&o.first!==null&&Ot(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function Ot(t){var r=t.parent,n=t.prev,e=t.next;n!==null&&(n.next=e),e!==null&&(e.prev=n),r!==null&&(r.first===t&&(r.first=e),r.last===t&&(r.last=n))}function ur(t,r){var n=[];Nt(t,n,!0),or(n,()=>{D(t),r&&r()})}function or(t,r){var n=t.length;if(n>0){var e=()=>--n||r();for(var l of t)l.out(e)}else r()}function Nt(t,r,n){if(!(t.f&I)){if(t.f^=I,t.transitions!==null)for(const a of t.transitions)(a.is_global||n)&&r.push(a);for(var e=t.first;e!==null;){var l=e.next,s=(e.f&ht)!==0||(e.f&g)!==0;Nt(e,r,s?n:!1),e=l}}}function nn(t){It(t,!0)}function It(t,r){if(t.f&I){t.f^=I,t.f&w||(t.f^=w),j(t)&&(T(t,P),ut(t));for(var n=t.first;n!==null;){var e=n.next,l=(n.f&ht)!==0||(n.f&g)!==0;It(n,l?r:!1),n=e}if(t.transitions!==null)for(const s of t.transitions)(s.is_global||r)&&s.in()}}let Z=!1,et=[];function Ft(){Z=!1;const t=et.slice();et=[],Bt(t)}function en(t){Z||(Z=!0,queueMicrotask(Ft)),et.push(t)}function ir(){Z&&Ft()}const Ct=0,fr=1;let V=!1,K=Ct,Y=!1,M=null,S=!1,st=!1;function _t(t){S=t}function vt(t){st=t}let A=[],O=0;let u=null,k=!1;function W(t){u=t}let v=null;function z(t){v=t}let N=null;function ln(t){N=t}let c=null,h=0,x=null;function sn(t){x=t}let Pt=1,J=0,R=!1,d=null;function _r(){return++Pt}function vr(){return!0}function j(t){var f;var r=t.f;if(r&P)return!0;if(r&U){var n=t.deps,e=(r&C)!==0;if(n!==null){var l,s,a=(r&G)!==0,o=e&&v!==null&&!R,i=n.length;if(a||o){for(l=0;l<i;l++)s=n[l],(a||!((f=s==null?void 0:s.reactions)!=null&&f.includes(t)))&&(s.reactions??(s.reactions=[])).push(t);a&&(t.f^=G)}for(l=0;l<i;l++)if(s=n[l],j(s)&&xt(s),s.wv>t.wv)return!0}(!e||v!==null&&!R)&&T(t,w)}return!1}function cr(t,r){for(var n=r;n!==null;){if(n.f&$)try{n.fn(t);return}catch{n.f^=$}n=n.parent}throw V=!1,t}function pr(t){return(t.f&b)===0&&(t.parent===null||(t.parent.f&$)===0)}function tt(t,r,n,e){if(V){if(n===null&&(V=!1),pr(r))throw t;return}n!==null&&(V=!0);{cr(t,r);return}}function bt(t,r,n=0){var e=t.reactions;if(e!==null)for(var l=0;l<e.length;l++){var s=e[l];s.f&y?bt(s,r,n+1):r===s&&(n===0?T(s,P):s.f&w&&T(s,U),ut(s))}}function qt(t){var ot;var r=c,n=h,e=x,l=u,s=R,a=N,o=d,i=k,f=t.f;c=null,h=0,x=null,u=f&(g|X)?null:t,R=!S&&(f&C)!==0,N=null,d=t.ctx,k=!1,J++;try{var E=(0,t.fn)(),_=t.deps;if(c!==null){var p;if(H(t,h),_!==null&&h>0)for(_.length=h+c.length,p=0;p<c.length;p++)_[h+p]=c[p];else t.deps=_=c;if(!R)for(p=h;p<_.length;p++)((ot=_[p]).reactions??(ot.reactions=[])).push(t)}else _!==null&&h<_.length&&(H(t,h),_.length=h);if(vr()&&x!==null&&!(t.f&(y|U|P)))for(p=0;p<x.length;p++)bt(x[p],t);return l!==null&&J++,E}finally{c=r,h=n,x=e,u=l,R=s,N=a,d=o,k=i}}function hr(t,r){let n=r.reactions;if(n!==null){var e=Ut.call(n,t);if(e!==-1){var l=n.length-1;l===0?n=r.reactions=null:(n[e]=n[l],n.pop())}}n===null&&r.f&y&&(c===null||!c.includes(r))&&(T(r,U),r.f&(C|G)||(r.f^=G),H(r,0))}function H(t,r){var n=t.deps;if(n!==null)for(var e=r;e<n.length;e++)hr(t,n[e])}function at(t){var r=t.f;if(!(r&b)){T(t,w);var n=v,e=d;v=t;try{r&pt?ar(t):St(t),Dt(t),kt(t);var l=qt(t);t.teardown=typeof l=="function"?l:null,t.wv=Pt;var s=t.deps,a}catch(o){tt(o,t,n,e||t.ctx)}finally{v=n}}}function Lt(){if(O>1e3){O=0;try{zt()}catch(t){if(M!==null)tt(t,M,null);else throw t}}O++}function Yt(t){var r=t.length;if(r!==0){Lt();var n=S;S=!0;try{for(var e=0;e<r;e++){var l=t[e];l.f&w||(l.f^=w);var s=[];Mt(l,s),dr(s)}}finally{S=n}}}function dr(t){var r=t.length;if(r!==0)for(var n=0;n<r;n++){var e=t[n];if(!(e.f&(b|I)))try{j(e)&&(at(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Ot(e):e.fn=null))}catch(l){tt(l,e,null,e.ctx)}}}function wr(){if(Y=!1,O>1001)return;const t=A;A=[],Yt(t),Y||(O=0,M=null)}function ut(t){K===Ct&&(Y||(Y=!0,queueMicrotask(wr))),M=t;for(var r=t;r.parent!==null;){r=r.parent;var n=r.f;if(n&(X|g)){if(!(n&w))return;r.f^=w}}A.push(r)}function Mt(t,r){var n=t.first,e=[];t:for(;n!==null;){var l=n.f,s=(l&g)!==0,a=s&&(l&w)!==0,o=n.next;if(!a&&!(l&I))if(l&Q){if(s)n.f^=w;else try{j(n)&&at(n)}catch(_){tt(_,n,null,n.ctx)}var i=n.first;if(i!==null){n=i;continue}}else l&ct&&e.push(n);if(o===null){let _=n.parent;for(;_!==null;){if(t===_)break t;var f=_.next;if(f!==null){n=f;continue t}_=_.parent}}n=o}for(var E=0;E<e.length;E++)i=e[E],r.push(i),Mt(i,r)}function Ht(t){var r=K,n=A;try{Lt();const l=[];K=fr,A=l,Y=!1,Yt(n);var e=t==null?void 0:t();return ir(),(A.length>0||l.length>0)&&Ht(),O=0,M=null,e}finally{K=r,A=n}}async function an(){await Promise.resolve(),Ht()}function Er(t){var E;var r=t.f,n=(r&y)!==0;if(n&&r&b){var e=gt(t);return lt(t),e}if(u!==null&&!k){N!==null&&N.includes(t)&&Jt();var l=u.deps;t.rv<J&&(t.rv=J,c===null&&l!==null&&l[h]===t?h++:c===null?c=[t]:c.push(t))}else if(n&&t.deps===null)for(var s=t,a=s.parent,o=s;a!==null;)if(a.f&y){var i=a;o=i,a=i.parent}else{var f=a;(E=f.deriveds)!=null&&E.includes(o)||(f.deriveds??(f.deriveds=[])).push(o);break}return n&&(s=t,j(s)&&xt(s)),t.v}function un(t){var r=k;try{return k=!0,t()}finally{k=r}}const yr=-7169;function T(t,r){t.f=t.f&yr|r}function on(t,r=!1,n){d={p:d,c:null,e:null,m:!1,s:t,x:null,l:null}}function fn(t){const r=d;if(r!==null){const a=r.e;if(a!==null){var n=v,e=u;r.e=null;try{for(var l=0;l<a.length;l++){var s=a[l];z(s.effect),W(s.reaction),Rt(s.fn)}}finally{z(n),W(e)}}d=r.p,r.m=!0}return{}}export{un as $,Xr as A,rt as B,rn as C,F as D,d as E,y as F,vr as G,Qt as H,pt as I,N as J,Pr as K,_r as L,w as M,g as N,P as O,T as P,ut as Q,X as R,ln as S,x as T,C as U,sn as V,U as W,Or as X,k as Y,Kt as Z,Jr as _,on as a,sr as a0,ht as a1,kr as a2,D as a3,Mr as a4,Hr as a5,Dr as a6,xr as a7,Ar as a8,Fr as a9,Ur as aa,it as ab,Er as ac,Cr as ad,Rr as ae,Xt as af,Kr as ag,nn as ah,ur as ai,Rt as aj,lr as ak,en as al,Ir as am,qr as an,br as ao,Lr as ap,Sr as aq,rr as ar,Yr as as,Ht as at,Qr as au,an as av,$t as aw,W as b,Gr as c,gr as d,z as e,Zr as f,u as g,v as h,mr as i,$r as j,nt as k,q as l,wt as m,Br as n,L as o,fn as p,jr as q,Vr as r,Wr as s,tn as t,m as u,tr as v,Et as w,Nr as x,zr as y,Tr as z};
