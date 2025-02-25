"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2548],{80821:function(ee,F,n){n.d(F,{Z:function(){return b}});var Z=n(5574),i=n.n(Z),W=n(24963),_=n(86738),p=n(28036),O=n(83062),T=n(67294),R=n(85893);function b(l){var I=(0,T.useState)(!1),m=i()(I,2),D=m[0],r=m[1],e=(0,T.useContext)(W.Z),N=e.lang,w=e.notice,H=e.message,x=function(){r(!0);var k=l.action();k instanceof Promise?k.then(function(V){if(r(!1),V){typeof l.onSuccess=="function"&&l.onSuccess(V);var S="";l.messageSuccess?typeof l.messageSuccess=="function"?S=l.messageSuccess(V):S=l.messageSuccess.indexOf("notification.")==0?N(l.messageSuccess):l.messageSuccess:S=N("notification.finish"),l.asynced?H.info(S):H.success(S)}}).catch(function(V){r(!1),typeof l.onError=="function"&&l.onError(V)}):r(!1)};return l.confirm?(0,R.jsx)(_.Z,{style:{width:500},title:l.confirmTitle?l.confirmTitle:N("notification.title.tip"),description:typeof l.confirm=="string"&&l.confirm.indexOf("notification.")==0?N(l.confirm):l.confirm,onConfirm:x,okText:"Yes",cancelText:"No",children:(0,R.jsx)(p.ZP,{disabled:l.disabled,icon:l.icon,loading:D,danger:l.danger,type:l.type,children:l.children})}):(0,R.jsx)(O.Z,{title:l.tips,children:(0,R.jsx)(p.ZP,{style:l.ghost?{padding:0,height:"auto"}:{},disabled:l.disabled,icon:l.icon,loading:D,onClick:x,danger:l.danger,type:l.type,children:l.children})})}},27619:function(ee,F,n){n.d(F,{Z:function(){return I}});var Z=n(97857),i=n.n(Z),W=n(19632),_=n.n(W),p=n(5574),O=n.n(p),T=n(64183),R=n(82346),b=n(67294),l=n(85893);function I(m){var D,r=(0,b.useState)("academy"),e=O()(r,2),N=e[0],w=e[1],H=Math.max.apply(Math,_()(m.data.map(function(d){var a;return(a=d[m.yField])!==null&&a!==void 0?a:0}))),x=(0,R.useModel)("@@initialState"),X=x.initialState,k=x.loading,V=x.error,S=x.refresh,h=x.setInitialState,f={xField:m.xField,yField:m.yField,height:200,axis:{y:{line:!0},x:{line:!0,grid:{visable:!0},labelAutoRotate:!0}},style:{opacity:.4},tooltip:{channel:"y",valueFormatter:m.yLabelFormatter},scale:{y:{domainMin:(D=m.yDomainMin)!==null&&D!==void 0?D:0,domainMax:m.yDomainMax?m.yDomainMax:m.yDomainMaxCallback?m.yDomainMaxCallback(H):H}},data:m.data};return m.yLabelFormatter&&(f.axis.y.labelFormatter=m.yLabelFormatter),m.colorField&&(f.colorField=m.colorField),(0,b.useEffect)(function(){(X==null?void 0:X.theme.algorithm)=="dark"?w("classicDark"):w("academy")},[X]),(0,l.jsx)(T.Z,i()({theme:N},f))}},24963:function(ee,F,n){var Z=n(67294),i=(0,Z.createContext)({});F.Z=i},76214:function(ee,F,n){n.r(F),n.d(F,{default:function(){return Ve}});var Z=n(15009),i=n.n(Z),W=n(99289),_=n.n(W),p=n(5574),O=n.n(p),T=n(19632),R=n.n(T),b=n(80821),l=n(27619),I=n(97857),m=n.n(I),D=n(28413),r=n(67294),e=n(85893),N=(0,r.forwardRef)(function(C,ne){(0,r.useImperativeHandle)(ne,function(){return{zoomIn:function(){z<=0||z-5<=0?q(1):q(z-5)},zoomOut:function(){z>C.data.length||z+5>C.data.length?q(C.data.length):q(z+5)}}});var te=(0,r.useState)(20),J=O()(te,2),z=J[0],q=J[1],ie={colorField:"value",valueField:"value",scale:{color:{range:["#4e79a7","#f28e2c","#e15759","#76b7b2","#59a14f","#edc949","#af7aa1","#ff9da7","#9c755f","#bab0ab"]}},legend:!1},se=function(){return C.data.length<=z?C.data:C.data.slice(0,z)};return(0,r.useEffect)(function(){},[]),C.data?(0,e.jsx)(D.Z,m()(m()({},ie),{},{height:500,data:{name:"root",children:se()}})):(0,e.jsx)(e.Fragment,{})}),w=N,H=n(55241),x=n(71230),X=n(15746),k=n(38703),V=(0,r.forwardRef)(function(C,ne){return(0,r.useImperativeHandle)(ne,function(){return{}}),(0,e.jsxs)(H.Z,{placement:"left",children:[(0,e.jsx)(x.Z,{justify:"center",children:(0,e.jsx)(X.Z,{children:(0,e.jsx)(k.Z,{percent:C.showPercent,type:"dashboard",format:function(J,z){return"".concat(J,"%")},size:150,status:C.showPercent>=100?"exception":"normal"})})}),(0,e.jsx)(x.Z,{justify:"center",children:(0,e.jsxs)(X.Z,{style:{marginTop:"10px"},children:[C.showLabel,": ",C.showUse," / ",C.showTotal]})})]})}),S=V,h=n(24963),f=n(62597),d=n(87662),a=n(2831),P=n(18148),s=n(89075),L=n(5251),$e=n(45605),We=n(23430),we=n(1210),le=n(12122),ke=n(35598),Ke=n(15668),U=n(38345),Te=n(184),A=n(88273),Y=n(82346),re=n(42075),de=n(28036),K=n(26412),De=n(83062),ze=n(40411),Ie=n(25593),xe=n(63490),Ge=n(86250),Ne=n(96074),Oe=n(93162);function Ve(){var C,ne,te,J,z,q,ie,se,ae,ce,me,_e,pe,he,fe,ve,ge,je,ye,Ee,He=function(o,c){switch(c.type){case"update":var M=new Date().toLocaleTimeString(),v=0,j=0,ue=0,oe=0,G=0,E=0;c.payload.map(function($){v+=$.cpu,j+=$.memory.in,ue+=$.networkIO.in,oe+=$.networkIO.out,G+=$.blockIO.in,E+=$.blockIO.out});var Q={list:c.payload,cpu:v,memory:j,network:[].concat(R()(o.network),[{date:M,usage:oe,type:"\u4E0A\u884C",source:{usage:oe}},{date:M,type:"\u4E0B\u884C",usage:ue,source:{usage:ue}}]),io:[].concat(R()(o.io),[{date:M,usage:E,type:"\u8BFB\u53D6",source:{usage:E}},{date:M,type:"\u5199\u5165",usage:G,source:{usage:G}}])};return Q}},Se=(0,Y.useAccess)(),be=(0,r.useRef)(),Xe=(0,r.useState)(),Ce=O()(Xe,2),Pe=Ce[0],Ye=Ce[1],Qe=(0,r.useState)(),Me=O()(Qe,2),t=Me[0],Je=Me[1],qe=(0,r.useState)(),Fe=O()(qe,2),y=Fe[0],en=Fe[1],nn=(0,r.useState)(),Re=O()(nn,2),u=Re[0],tn=Re[1],an=(0,r.useReducer)(He,{cpu:0,memory:0,network:[],io:[],list:[]}),Ue=O()(an,2),B=Ue[0],Ze=Ue[1],rn=(0,r.useContext)(h.Z),Le=rn.loading,Be=(0,Y.useModel)("subscriber");Be.addDataHandler("container:stat",function(g){console.log(g),Ze({type:"update",payload:g.data})});var Ae=function(){var g=_()(i()().mark(function o(){var c,M,v,j,ue;return i()().wrap(function(G){for(;;)switch(G.prev=G.next){case 0:return Le.show(),G.next=3,(0,a.Ll)();case 3:return c=G.sent,tn(c.data),G.next=7,(0,a.aF)().finally(function(){Le.destroy()});case 7:return M=G.sent,Je(M.data),v={total:0,container:0,volume:0,image:0,cache:0,item:[],updatedAt:""},j=c.data.diskUsage,j.usage.Containers&&j.usage.Containers.map(function(E){var Q,$;v.container+=E.SizeRootFs+((Q=E.SizeRw)!==null&&Q!==void 0?Q:0),v.item.push({name:E.Names[0],value:parseFloat(((E.SizeRootFs+(($=E.SizeRw)!==null&&$!==void 0?$:0))/1024/1024).toFixed(2))})}),j.usage.Volumes&&j.usage.Volumes.map(function(E){v.volume+=E.UsageData.Size,v.item.push({name:E.Name,value:parseFloat((E.UsageData.Size/1024/1024).toFixed(2))})}),j.usage.Images&&j.usage.Images.map(function(E){var Q,$;v.image+=E.Size-((Q=E.Sharedsize)!==null&&Q!==void 0?Q:0),v.item.push({name:E.RepoTags&&E.RepoTags.length>0?E.RepoTags[0]:E.Id,value:parseFloat(((E.Size-(($=E.Sharedsize)!==null&&$!==void 0?$:0))/1024/1024).toFixed(2))})}),j.usage.BuildCache&&j.usage.BuildCache.map(function(E){v.cache+=E.Size}),!j.usage.Containers&&!j.usage.Images&&!j.usage.Volumes?v.item.push({name:"\u6B63\u5728\u83B7\u53D6\u8BA1\u7B97,\u4E2A\u522B\u7CFB\u7EDF\u4F1A\u6BD4\u8F83\u8017\u65F6.",value:100}):v.updatedAt=new Date(j.updatedAt).toLocaleString(),v.total=j.usage.LayersSize,en(v),G.next=20,(0,d.Cz)({follow:!0});case 20:ue=G.sent,Ze({type:"update",payload:[]});case 22:case"end":return G.stop()}},o)}));return function(){return g.apply(this,arguments)}}();return(0,r.useEffect)(function(){return Ae(),Se.canSeePe&&(0,s.YQ)().then(function(g){Ye(g.data)}),function(){Be.progress.close("container:stat")}},[]),(0,e.jsxs)(U.Z,{direction:"column",gutter:[0,10],ghost:!0,children:[(0,e.jsxs)(U.Z,{bordered:!0,split:"vertical",children:[(0,e.jsx)(U.Z,{style:{height:"570px"},colSpan:"40%",headerBordered:!0,title:(0,e.jsx)($e.Z,{}),subTitle:"\u57FA\u7840\u4FE1\u606F",extra:(0,e.jsxs)(re.Z,{children:[(0,e.jsx)(b.Z,{type:"link",icon:(0,e.jsx)(We.Z,{}),action:function(){var o;return(0,f.XH)({md5:(o=t==null?void 0:t.dpanel.containerInfo.Id)!==null&&o!==void 0?o:"dpanel",lineTotal:-1,showTime:!1})},onSuccess:function(o){var c=new Blob([o],{type:"text/plain"});(0,Oe.saveAs)(c,"dpanel-debug.log")},children:"\u65E5\u5FD7"}),Se.canSeePe?Pe&&Pe.expireTime?(0,e.jsxs)("span",{children:["\u8FC7\u671F\u65F6\u95F4: ",new Date(Pe.expireTime).toLocaleString()]},"expireTime"):(0,e.jsx)(de.ZP,{type:"link",onClick:_()(i()().mark(function g(){var o,c;return i()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,(0,s.$w)();case 2:o=v.sent,c=new Blob([o.data.code],{type:"text/plain"}),(0,Oe.saveAs)(c,"dpanel.code");case 5:case"end":return v.stop()}},g)})),children:"\u6388\u6743\u7801"},"downloadCode"):(0,e.jsx)("a",{href:"https://dpanel.cc/#/zh-cn/manual/pro",target:"_blank",children:"Pro \u7248"},"proLink")]}),children:(0,e.jsxs)(K.Z,{column:1,labelStyle:{width:100,justifyContent:"flex-end"},children:[(0,e.jsx)(K.Z.Item,{label:"\u9762\u677F\u4FE1\u606F",children:(0,e.jsxs)(re.Z,{direction:"horizontal",children:["DPanel - ",t==null?void 0:t.dpanel.version," - ",t==null?void 0:t.dpanel.env," - ",t==null?void 0:t.dpanel.family,(0,e.jsx)(De.Z,{title:"\u5347\u7EA7\u65E5\u5FD7",children:(0,e.jsx)("a",{target:"_blank",href:"https://github.com/donknap/dpanel/releases",children:(0,e.jsx)(we.Z,{})})}),(t==null?void 0:t.dpanel.newVersion)&&t.dpanel.newVersion!=""&&(0,e.jsx)(Y.Link,{to:"/system/upgrade",children:(0,e.jsx)(ze.Z,{count:t==null?void 0:t.dpanel.newVersion,size:"small"})})]})}),(0,e.jsxs)(K.Z.Item,{label:"Docker Host",children:[t==null?void 0:t.info.Name," ",(0,e.jsx)(e.Fragment,{children:(t==null?void 0:t.info.ID)==""&&(0,e.jsx)(Y.Link,{to:"/system/env?id=local",children:"\u914D\u7F6E\u9ED8\u8BA4 Docker \u5BA2\u6237\u7AEF"})})]}),(0,e.jsx)(K.Z.Item,{label:"Docker \u7248\u672C",children:"".concat(t==null?void 0:t.info.OperatingSystem," - ").concat(t==null?void 0:t.info.ServerVersion," - ").concat(t==null?void 0:t.sdkVersion)}),(0,e.jsx)(K.Z.Item,{label:"\u6587\u4EF6\u5B58\u50A8\u9A71\u52A8",children:"".concat(t==null?void 0:t.info.Driver)}),(0,e.jsx)(K.Z.Item,{label:"\u65E5\u5FD7\u9A71\u52A8",children:"".concat(t==null?void 0:t.info.LoggingDriver)}),(0,e.jsx)(K.Z.Item,{label:"\u7CFB\u7EDF\u67B6\u6784",children:"".concat(t==null?void 0:t.info.KernelVersion," - ").concat(t==null?void 0:t.info.Architecture)}),(0,e.jsxs)(K.Z.Item,{label:"Cpu",children:[t==null?void 0:t.info.NCPU," \u6838"]}),(0,e.jsx)(K.Z.Item,{label:"Memory",children:(0,L.FI)((C=t==null?void 0:t.info.MemTotal)!==null&&C!==void 0?C:0)}),(0,e.jsx)(K.Z.Item,{label:"\u6839\u76EE\u5F55",children:t==null?void 0:t.info.DockerRootDir}),(0,e.jsx)(K.Z.Item,{label:"\u5B58\u50A8\u5377\u63D2\u4EF6",children:(0,e.jsx)(re.Z,{children:t==null?void 0:t.info.Plugins.Volume})}),(0,e.jsx)(K.Z.Item,{label:"\u7F51\u7EDC\u63D2\u4EF6",children:(0,e.jsx)(re.Z,{children:t==null?void 0:t.info.Plugins.Network})}),(0,e.jsx)(K.Z.Item,{label:"\u7CFB\u7EDF\u65F6\u95F4",children:new Date((ne=t==null?void 0:t.info.SystemTime)!==null&&ne!==void 0?ne:"").toLocaleString()})]})}),(0,e.jsxs)(U.Z,{headerBordered:!0,title:(0,e.jsx)(le.Z,{}),subTitle:"\u5BB9\u5668\u8FD0\u884C\u7EDF\u8BA1",split:"horizontal",extra:(0,e.jsx)(Te.a,{title:"\u5BB9\u5668\u72B6\u6001\u6570\u636E",submitter:!1,trigger:(0,e.jsx)(Ie.Z.Link,{children:"\u8BE6\u60C5\u6570\u636E"}),children:(0,e.jsx)(xe.Z,{pagination:!1,dataSource:B.list,rowKey:"name",columns:[{title:"\u5BB9\u5668\u540D\u79F0",dataIndex:"name"},{title:"Cpu",dataIndex:"cpu",sorter:function(o,c){return o.cpu-c.cpu},render:function(o,c,M){return"".concat(c.cpu.toFixed(2),"%")}},{title:"\u5185\u5B58",dataIndex:"memory",sorter:function(o,c){return o.memory.in-c.memory.in},render:function(o,c,M){var v,j;return"".concat((0,L.FI)((v=c==null?void 0:c.memory.in)!==null&&v!==void 0?v:0)," / ").concat((0,L.FI)((j=c==null?void 0:c.memory.out)!==null&&j!==void 0?j:0))}},{title:"\u7F51\u7EDC I/O",dataIndex:"networkIO",render:function(o,c,M){return"".concat((0,L.FI)(c.networkIO.in)," / ").concat((0,L.FI)(c.networkIO.out))}},{title:"\u78C1\u76D8 I/O",dataIndex:"blockIO",render:function(o,c,M){return"".concat((0,L.FI)(c.blockIO.in)," / ").concat((0,L.FI)(c.blockIO.out))}}]})}),children:[(0,e.jsx)(U.Z,{children:(0,e.jsxs)(Ge.Z,{gap:50,align:"center",justify:"space-evenly",children:[(0,e.jsx)(S,{showPercent:parseFloat(((te=B==null?void 0:B.cpu)!==null&&te!==void 0?te:0).toFixed(2)),showLabel:"Cpu",showUse:"".concat((((J=B==null?void 0:B.cpu)!==null&&J!==void 0?J:0)/100*((z=t==null?void 0:t.info.NCPU)!==null&&z!==void 0?z:0)).toFixed(2)),showTotal:"".concat((q=t==null?void 0:t.info.NCPU)!==null&&q!==void 0?q:0," \u6838")}),(0,e.jsx)(S,{showPercent:parseFloat((((ie=B==null?void 0:B.memory)!==null&&ie!==void 0?ie:0)/((se=t==null?void 0:t.info.MemTotal)!==null&&se!==void 0?se:0)*100).toFixed(2)),showLabel:"\u5185\u5B58",showUse:(0,L.FI)((ae=B==null?void 0:B.memory)!==null&&ae!==void 0?ae:0),showTotal:"".concat((0,L.FI)((ce=t==null?void 0:t.info.MemTotal)!==null&&ce!==void 0?ce:0))})]})}),(0,e.jsxs)(U.Z,{split:"vertical",wrap:!0,children:[(0,e.jsx)(U.Z,{colSpan:12,title:(0,e.jsx)(le.Z,{}),subTitle:"\u7F51\u7EDC",headerBordered:!0,children:(0,e.jsx)(l.Z,{yField:"usage",xField:"date",colorField:"type",data:B.network,yLabelFormatter:function(o){return(0,L.FI)(parseFloat(o))},yDomainMaxCallback:function(o){return o*1.5}})}),(0,e.jsx)(U.Z,{colSpan:12,title:(0,e.jsx)(le.Z,{}),subTitle:"\u78C1\u76D8",headerBordered:!0,children:(0,e.jsx)(l.Z,{yField:"usage",xField:"date",colorField:"type",data:B.io,yLabelFormatter:function(o){return(0,L.FI)(parseFloat(o))},yDomainMaxCallback:function(o){return o*1.5}})})]})]})]}),(0,e.jsxs)(U.Z,{bordered:!0,headerBordered:!0,title:(0,e.jsx)(le.Z,{}),subTitle:"\u7528\u91CF\u7EDF\u8BA1",extra:(0,e.jsxs)(re.Z,{children:[(0,e.jsx)(de.ZP,{icon:(0,e.jsx)(ke.Z,{}),onClick:function(){var o;(o=be.current)===null||o===void 0||o.zoomIn()},shape:"circle"}),(0,e.jsx)(de.ZP,{icon:(0,e.jsx)(Ke.Z,{}),onClick:function(){var o;(o=be.current)===null||o===void 0||o.zoomOut()},shape:"circle"}),(0,e.jsx)(Ne.Z,{type:"vertical"}),(0,e.jsx)("span",{children:y&&y.updatedAt?"\u6570\u636E\u6700\u540E\u66F4\u65B0: ".concat(y.updatedAt):""},"lastUpdate")]},"size"),children:[(0,e.jsx)(U.Z,{colSpan:"50%",ghost:!0,children:(y==null?void 0:y.item)&&(y==null?void 0:y.item.length)>0&&(0,e.jsx)(w,{ref:be,data:(me=y==null?void 0:y.item)!==null&&me!==void 0?me:[]})}),(0,e.jsxs)(U.Z,{split:"horizontal",ghost:!0,children:[(0,e.jsx)(A.Z,{statistic:{title:"\u5BB9\u5668",value:(0,L.FI)((_e=y==null?void 0:y.container)!==null&&_e!==void 0?_e:0),description:"\u5BB9\u5668\u5360\u7528\u53CA\u8FD0\u884C\u5199\u5165\u6570\u636E"}}),(0,e.jsx)(A.Z,{statistic:{title:"\u955C\u50CF",value:(0,L.FI)((pe=y==null?void 0:y.image)!==null&&pe!==void 0?pe:0),description:"\u5305\u542B\u4E2D\u95F4\u955C\u50CF"}}),(0,e.jsx)(A.Z,{statistic:{title:"\u5B58\u50A8",value:(0,L.FI)((he=y==null?void 0:y.volume)!==null&&he!==void 0?he:0),description:"\u53EA\u5305\u542B\u5B58\u50A8\u5377,\u4E0D\u5305\u542B\u6302\u8F7D\u76EE\u5F55"}}),(0,e.jsx)(A.Z,{statistic:{title:"\u6784\u5EFA\u7F13\u5B58",value:(0,L.FI)((fe=y==null?void 0:y.cache)!==null&&fe!==void 0?fe:0),description:(0,e.jsx)(b.Z,{action:function(){return(0,P.c5)()},type:"link",onSuccess:function(){Ae()},ghost:!0,children:"\u6E05\u9664"})}})]}),(0,e.jsxs)(U.Z,{ghost:!0,split:"horizontal",children:[(0,e.jsx)(U.Z,{ghost:!0,children:(0,e.jsxs)(A.Z.Group,{children:[(0,e.jsx)(A.Z,{statistic:{title:"\u5BB9\u5668",value:(ve=t==null?void 0:t.info.Containers)!==null&&ve!==void 0?ve:0,description:(0,e.jsx)(Y.Link,{to:"/app/list",children:"\u67E5\u770B"})}}),(0,e.jsx)(A.Z,{statistic:{title:"\u9884\u8B66",status:"error",valueRender:function(o){var c,M,v,j=0;return u&&u.total&&u.total.containerRunning.stop&&(j+=u.total.containerRunning.stop),u&&u.total&&u.total.containerRunning.pause&&(j+=u.total.containerRunning.pause),u&&u.total&&u.total.containerRunning.unhealthy&&(j+=u.total.containerRunning.unhealthy),(0,e.jsx)(De.Z,{title:"\u505C\u6B62\uFF1A".concat((c=u==null?void 0:u.total.containerRunning.stop)!==null&&c!==void 0?c:0,"\uFF0C\u6682\u505C\uFF1A").concat((M=u==null?void 0:u.total.containerRunning.pause)!==null&&M!==void 0?M:0,"\uFF0C\u4E0D\u5065\u5EB7\uFF1A").concat((v=u==null?void 0:u.total.containerRunning.unhealthy)!==null&&v!==void 0?v:0),children:j})}}}),(0,e.jsx)(A.Z,{statistic:{title:"\u56DE\u6536\u7AD9",value:(ge=u==null?void 0:u.total.containerTask)!==null&&ge!==void 0?ge:0,description:(0,e.jsx)(Y.Link,{to:"/app/list/recycle",children:"\u67E5\u770B"})}})]})}),(0,e.jsxs)(U.Z,{ghost:!0,children:[(0,e.jsx)(A.Z,{statistic:{title:"\u955C\u50CF",value:"".concat((je=(u==null?void 0:u.diskUsage.usage.Images)&&(u==null?void 0:u.diskUsage.usage.Images.length))!==null&&je!==void 0?je:0),description:(0,e.jsx)(Y.Link,{to:"/image/list",children:"\u67E5\u770B"})},chartPlacement:"left"}),(0,e.jsx)(A.Z,{statistic:{title:"\u4EFB\u52A1",value:(ye=u==null?void 0:u.total.imageTask)!==null&&ye!==void 0?ye:0,description:(0,e.jsx)(Y.Link,{to:"/image/list/build",children:"\u67E5\u770B"})},chartPlacement:"left"})]}),(0,e.jsxs)(U.Z,{ghost:!0,children:[(0,e.jsx)(A.Z,{statistic:{title:"\u7F51\u7EDC",value:u==null?void 0:u.total.network,description:(0,e.jsx)(Y.Link,{to:"/docker/network",children:"\u67E5\u770B"})},chartPlacement:"left"}),(0,e.jsx)(A.Z,{statistic:{title:"\u7AEF\u53E3\u6620\u5C04",value:u==null?void 0:u.total.port,description:(0,e.jsx)(Te.a,{submitter:!1,title:"\u67E5\u770B\u6620\u5C04\u7AEF\u53E3",trigger:(0,e.jsx)(Ie.Z.Link,{children:"\u67E5\u770B"}),children:(0,e.jsx)(xe.Z,{pagination:!1,dataSource:u==null?void 0:u.port,rowKey:"name",columns:[{title:"\u4E3B\u673A\u7AEF\u53E3",dataIndex:["port","host"],sorter:function(o,c){return parseInt(o.port.host)-parseInt(c.port.host)},render:function(o,c,M){return"".concat(c.port.hostIp,":").concat(c.port.host)}},{title:"\u5BB9\u5668\u7AEF\u53E3",dataIndex:["port","dest"]},{title:"\u5BB9\u5668\u540D\u79F0",dataIndex:"name"}]})})},chartPlacement:"left"})]}),(0,e.jsxs)(U.Z,{ghost:!0,children:[(0,e.jsx)(A.Z,{statistic:{title:"\u5B58\u50A8\u5377",value:(Ee=(u==null?void 0:u.diskUsage.usage.Volumes)&&(u==null?void 0:u.diskUsage.usage.Volumes.length))!==null&&Ee!==void 0?Ee:0,description:(0,e.jsx)(Y.Link,{to:"/docker/volume",children:"\u67E5\u770B"})},chartPlacement:"left"}),(0,e.jsx)(A.Z,{statistic:{title:"\u5907\u4EFD",value:u==null?void 0:u.total.backup,description:(0,e.jsx)(Y.Link,{to:"/app/backup",children:"\u67E5\u770B"})},chartPlacement:"left"})]})]})]})]})}},62597:function(ee,F,n){n.d(F,{$G:function(){return O},Ct:function(){return N},Tb:function(){return l},XH:function(){return m},cl:function(){return R},iE:function(){return r},xb:function(){return H},ze:function(){return V}});var Z=n(15009),i=n.n(Z),W=n(99289),_=n.n(W),p=n(82346);function O(h){return T.apply(this,arguments)}function T(){return T=_()(i()().mark(function h(f){return i()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,p.request)("/api/app/site/create-by-image",{method:"POST",data:f}));case 1:case"end":return a.stop()}},h)})),T.apply(this,arguments)}function R(h){return b.apply(this,arguments)}function b(){return b=_()(i()().mark(function h(f){return i()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,p.request)("/api/app/site/get-list",{method:"POST",data:f}));case 1:case"end":return a.stop()}},h)})),b.apply(this,arguments)}function l(h){return I.apply(this,arguments)}function I(){return I=_()(i()().mark(function h(f){return i()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return f.download=!1,a.next=3,(0,p.request)("/api/app/log/run",{method:"POST",data:f});case 3:return a.abrupt("return",a.sent);case 4:case"end":return a.stop()}},h)})),I.apply(this,arguments)}function m(h){return D.apply(this,arguments)}function D(){return D=_()(i()().mark(function h(f){return i()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return f.download=!0,a.next=3,(0,p.request)("/api/app/log/run",{method:"POST",data:f,responseType:"blob"});case 3:return a.abrupt("return",a.sent);case 4:case"end":return a.stop()}},h)})),D.apply(this,arguments)}function r(h){return e.apply(this,arguments)}function e(){return e=_()(i()().mark(function h(f){return i()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,(0,p.request)("/api/app/site/get-detail",{data:f,method:"POST"});case 2:return a.abrupt("return",a.sent);case 3:case"end":return a.stop()}},h)})),e.apply(this,arguments)}function N(h){return w.apply(this,arguments)}function w(){return w=_()(i()().mark(function h(f){return i()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,p.request)("/api/app/container/delete",{method:"POST",data:f}));case 1:case"end":return a.stop()}},h)})),w.apply(this,arguments)}function H(h){return x.apply(this,arguments)}function x(){return x=_()(i()().mark(function h(f){return i()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,p.request)("/api/app/site/delete",{method:"POST",data:f}));case 1:case"end":return a.stop()}},h)})),x.apply(this,arguments)}function X(h){return k.apply(this,arguments)}function k(){return k=_asyncToGenerator(_regeneratorRuntime().mark(function h(f){return _regeneratorRuntime().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,request("/api/app/site/update-title",{method:"POST",data:f});case 2:return a.abrupt("return",a.sent);case 3:case"end":return a.stop()}},h)})),k.apply(this,arguments)}function V(h){return S.apply(this,arguments)}function S(){return S=_()(i()().mark(function h(f){return i()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,p.request)("/api/app/container/ignore",{method:"POST",data:f}));case 1:case"end":return a.stop()}},h)})),S.apply(this,arguments)}},2831:function(ee,F,n){n.d(F,{Ll:function(){return R},aF:function(){return O},d6:function(){return l}});var Z=n(15009),i=n.n(Z),W=n(99289),_=n.n(W),p=n(82346);function O(){return T.apply(this,arguments)}function T(){return T=_()(i()().mark(function m(){return i()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,(0,p.request)("/api/common/home/info",{method:"POST"});case 2:return r.abrupt("return",r.sent);case 3:case"end":return r.stop()}},m)})),T.apply(this,arguments)}function R(){return b.apply(this,arguments)}function b(){return b=_()(i()().mark(function m(){return i()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,(0,p.request)("/api/common/home/usage",{method:"POST"});case 2:return r.abrupt("return",r.sent);case 3:case"end":return r.stop()}},m)})),b.apply(this,arguments)}function l(){return I.apply(this,arguments)}function I(){return I=_()(i()().mark(function m(){return i()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,(0,p.request)("/api/common/home/upgrade-script",{method:"POST"});case 2:return r.abrupt("return",r.sent);case 3:case"end":return r.stop()}},m)})),I.apply(this,arguments)}},18148:function(ee,F,n){n.d(F,{$q:function(){return r},Fj:function(){return V},KG:function(){return O},KX:function(){return h},T8:function(){return m},Xn:function(){return l},ao:function(){return N},c5:function(){return X},c7:function(){return H}});var Z=n(15009),i=n.n(Z),W=n(99289),_=n.n(W),p=n(82346);function O(d){return T.apply(this,arguments)}function T(){return T=_()(i()().mark(function d(a){return i()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",(0,p.request)("/api/app/image/get-list",{method:"POST",data:a}));case 1:case"end":return s.stop()}},d)})),T.apply(this,arguments)}function R(d){return b.apply(this,arguments)}function b(){return b=_asyncToGenerator(_regeneratorRuntime().mark(function d(a){return _regeneratorRuntime().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,request("/api/app/log/image-build",{method:"POST",data:a});case 2:return s.abrupt("return",s.sent);case 3:case"end":return s.stop()}},d)})),b.apply(this,arguments)}function l(d){return I.apply(this,arguments)}function I(){return I=_()(i()().mark(function d(a){return i()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",(0,p.request)("/api/app/image/get-list-build",{method:"POST",data:a}));case 1:case"end":return s.stop()}},d)})),I.apply(this,arguments)}function m(d){return D.apply(this,arguments)}function D(){return D=_()(i()().mark(function d(a){return i()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,(0,p.request)("/api/app/image/get-build-task",{method:"POST",data:a});case 2:return s.abrupt("return",s.sent);case 3:case"end":return s.stop()}},d)})),D.apply(this,arguments)}function r(d){return e.apply(this,arguments)}function e(){return e=_()(i()().mark(function d(a){return i()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,(0,p.request)("/api/app/image/delete-build-task",{method:"POST",data:a});case 2:return s.abrupt("return",s.sent);case 3:case"end":return s.stop()}},d)})),e.apply(this,arguments)}function N(d){return w.apply(this,arguments)}function w(){return w=_()(i()().mark(function d(a){return i()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,(0,p.request)("/api/app/image/image-delete",{method:"POST",data:a});case 2:return s.abrupt("return",s.sent);case 3:case"end":return s.stop()}},d)})),w.apply(this,arguments)}function H(){return x.apply(this,arguments)}function x(){return x=_()(i()().mark(function d(){return i()().wrap(function(P){for(;;)switch(P.prev=P.next){case 0:return P.next=2,(0,p.request)("/api/app/image/image-prune",{method:"POST"});case 2:return P.abrupt("return",P.sent);case 3:case"end":return P.stop()}},d)})),x.apply(this,arguments)}function X(){return k.apply(this,arguments)}function k(){return k=_()(i()().mark(function d(){return i()().wrap(function(P){for(;;)switch(P.prev=P.next){case 0:return P.next=2,(0,p.request)("/api/app/image/build-prune",{method:"POST"});case 2:return P.abrupt("return",P.sent);case 3:case"end":return P.stop()}},d)})),k.apply(this,arguments)}function V(d){return S.apply(this,arguments)}function S(){return S=_()(i()().mark(function d(a){return i()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,(0,p.request)("/api/app/image/update-title",{method:"POST",data:a});case 2:return s.abrupt("return",s.sent);case 3:case"end":return s.stop()}},d)})),S.apply(this,arguments)}function h(d){return f.apply(this,arguments)}function f(){return f=_()(i()().mark(function d(a){return i()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",(0,p.request)("/api/app/image/tag-sync",{method:"POST",data:a}));case 1:case"end":return s.stop()}},d)})),f.apply(this,arguments)}},89075:function(ee,F,n){n.d(F,{$w:function(){return O},YQ:function(){return R},ax:function(){return l}});var Z=n(15009),i=n.n(Z),W=n(99289),_=n.n(W),p=n(82346);function O(){return T.apply(this,arguments)}function T(){return T=_()(i()().mark(function m(){return i()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,p.request)("/api/pro/home/get-machine-id",{method:"POST"}));case 1:case"end":return r.stop()}},m)})),T.apply(this,arguments)}function R(){return b.apply(this,arguments)}function b(){return b=_()(i()().mark(function m(){return i()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,p.request)("/api/pro/home/get-license-info",{method:"POST"}));case 1:case"end":return r.stop()}},m)})),b.apply(this,arguments)}function l(){return I.apply(this,arguments)}function I(){return I=_()(i()().mark(function m(){return i()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,p.request)("/api/pro/home/login-info",{method:"POST"}));case 1:case"end":return r.stop()}},m)})),I.apply(this,arguments)}}}]);
