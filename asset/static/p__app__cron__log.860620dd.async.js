"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4250],{6812:function(te,A,r){r.r(A),r.d(A,{default:function(){return k}});var $=r(15009),T=r.n($),K=r(99289),Z=r.n(K),S=r(5574),f=r.n(S),F=r(22191),R=r(80821),m=r(83727),b=r(67255),y=r(43425),z=r(90078),d=r(38345),N=r(10641),G=r(95213),C=r(95089),H=r(63713),h=r(42075),J=r(66309),L=r(96074),Q=r(28036),V=r(25593),X=r(40411),Y=r(86250),O=r(55054),v=r(67294),a=r(85893);function k(){var M,p,D=(0,H.useParams)(),w=(0,v.useState)(),I=f()(w,2),t=I[0],g=I[1],_=(0,v.useRef)(),q=(0,v.useState)(),W=f()(q,2),o=W[0],ee=W[1],j=(0,v.useRef)(),ne=(0,v.useState)(0),B=f()(ne,2),P=B[0],x=B[1];return(0,v.useEffect)(function(){var s;(0,m.Ih)({id:parseInt((s=D.id)!==null&&s!==void 0?s:"")}).then(function(e){ee(e.data.detail)})},[P]),(0,a.jsx)(z._z,{children:(0,a.jsxs)(d.Z,{ghost:!0,direction:"column",gutter:[0,10],children:[(0,a.jsx)(d.Z,{title:(0,a.jsx)(y.Z,{}),subTitle:o==null?void 0:o.title,extra:(0,a.jsxs)(h.Z,{children:[(0,a.jsx)("span",{children:"\u4E0B\u6B21\u8FD0\u884C\u65F6\u95F4\uFF1A"}),o&&o.setting.nextRunTime&&o.setting.nextRunTime.map(function(s,e){return(0,a.jsx)(J.Z,{children:new Date(s).toLocaleString()},"runNextTime-".concat(e))})]}),children:(0,a.jsxs)(h.Z,{children:[(0,a.jsx)(R.Z,{action:function(){var e;return(0,m.yh)({id:parseInt((e=D.id)!==null&&e!==void 0?e:"")})},onSuccess:function(){var e,n;return!((e=_.current)===null||e===void 0)&&e.reloadAndRest&&((n=_.current)===null||n===void 0||n.reloadAndRest()),!0},onError:function(){var e,n;return!((e=_.current)===null||e===void 0)&&e.reloadAndRest&&((n=_.current)===null||n===void 0||n.reloadAndRest()),!0},type:"primary",children:"\u7ACB\u5373\u6267\u884C"},"runOnce"),o&&(0,a.jsx)(R.Z,{action:function(){var e,n,u,c,l,i,U={id:o.id,title:o.title,expression:(e=o.setting.expression)!==null&&e!==void 0?e:[],containerName:(n=o.setting.containerName)!==null&&n!==void 0?n:"",script:(u=o.setting.script)!==null&&u!==void 0?u:"",enableRunBlock:(c=o.setting.enableRunBlock)!==null&&c!==void 0?c:!1,environment:(l=o.setting.environment)!==null&&l!==void 0?l:[],keepLogTotal:(i=o.setting.keepLogTotal)!==null&&i!==void 0?i:10,disable:!o.setting.disable};return(0,m.FS)(U)},onSuccess:function(){return x(P+1),!0},onError:function(){return x(P+1),!0},children:o.setting.disable?"\u6062\u590D":"\u6682\u505C"},"pause"),(0,a.jsx)(L.Z,{type:"vertical"}),(0,a.jsx)(R.Z,{action:function(){var e;return g({}),(0,m.wb)({id:parseInt((e=D.id)!==null&&e!==void 0?e:"")})},onSuccess:function(){var e,n;return!((e=_.current)===null||e===void 0)&&e.reloadAndRest&&((n=_.current)===null||n===void 0||n.reloadAndRest()),!0},onError:function(){var e,n;return!((e=_.current)===null||e===void 0)&&e.reloadAndRest&&((n=_.current)===null||n===void 0||n.reloadAndRest()),!0},type:"primary",confirm:"notification.confirm.title",danger:!0,children:"\u6E05\u7A7A\u65E5\u5FD7"},"clear"),(0,a.jsx)(L.Z,{type:"vertical"}),(0,a.jsx)(F.Z,{ref:j,onFinish:function(){x(P+1)}},"create"),(0,a.jsx)(Q.ZP,{onClick:function(){var e;!((e=j.current)===null||e===void 0)&&e.edit&&o&&j.current.edit(o)},children:"\u7F16\u8F91\u4EFB\u52A1"})]})}),(0,a.jsxs)(d.Z,{split:"vertical",children:[(0,a.jsx)(d.Z,{ghost:!0,colSpan:"30%",children:(0,a.jsx)(N.Z,{actionRef:_,rowKey:"id",pagination:(0,b.O)(),columns:[{title:"Id",dataIndex:"id",render:function(e,n,u,c,l){return(0,a.jsxs)(h.Z,{children:[(0,a.jsx)(V.Z.Link,{onClick:function(){g(n)},children:n.id}),t!=null&&t.id&&t.id==n.id?(0,a.jsx)(X.Z,{status:"processing"}):""]})}},{title:"\u5F00\u59CB\u65F6\u95F4",render:function(e,n,u,c,l){return new Date(n.value.runTime).toLocaleString()}},{title:"\u8017\u65F6",render:function(e,n,u,c,l){return"".concat(n.value.useTime?n.value.useTime.toFixed(2)+"s":"-")}}],search:!1,request:function(){var s=Z()(T()().mark(function e(n,u,c){var l,i;return T()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.next=2,(0,m.bk)({id:parseInt((l=D.id)!==null&&l!==void 0?l:""),page:n.current,pageSize:n.pageSize});case 2:return i=E.sent,i.data.list&&i.data.list.length>0&&g(i.data.list[0]),E.abrupt("return",{data:i.data.list,success:!0,total:i.data.total});case 5:case"end":return E.stop()}},e)}));return function(e,n,u){return s.apply(this,arguments)}}()})}),(0,a.jsxs)(d.Z,{ghost:!0,colSpan:"70%",split:"horizontal",children:[(0,a.jsx)(d.Z,{children:(0,a.jsxs)(Y.Z,{gap:50,align:"center",justify:"space-evenly",children:[(0,a.jsx)(O.Z,{title:"\u65E5\u5FD7Id",value:(t==null?void 0:t.id)&&(t==null?void 0:t.id)}),(0,a.jsx)(O.Z,{title:"\u6267\u884C\u65F6\u95F4",value:(t==null?void 0:t.value)&&new Date((M=t==null?void 0:t.value.runTime)!==null&&M!==void 0?M:"").toLocaleString()}),(0,a.jsx)(O.Z,{title:"\u6D88\u8017\u65F6\u95F4",value:(t==null?void 0:t.value)&&"".concat(t!=null&&t.value.useTime?t.value.useTime.toFixed(2)+"s":"-")})]})}),(0,a.jsx)(d.Z,{children:(0,a.jsx)(C.ZP,{theme:"dark",height:"100vh",value:(t==null?void 0:t.value)&&((p=t.value.message)!==null&&p!==void 0?p:t==null?void 0:t.value.error),extensions:[G.RI.shell(),C.tk.lineWrapping]})})]})]})]})})}}}]);
