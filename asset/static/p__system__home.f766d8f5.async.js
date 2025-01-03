"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2548],{80821:function(X,C,n){n.d(C,{Z:function(){return I}});var R=n(5574),s=n.n(R),k=n(24963),d=n(86738),i=n(28036),E=n(83062),p=n(67294),b=n(85893);function I(l){var x=(0,p.useState)(!1),T=s()(x,2),_=T[0],u=T[1],e=(0,p.useContext)(k.Z),O=e.lang,G=e.notice,z=e.message,L=function(){u(!0),l.action().then(function(v){if(u(!1),typeof l.onSuccess=="function"&&l.onSuccess(v),l.messageSuccess){var B="";typeof l.messageSuccess=="function"?B=l.messageSuccess(v):B=l.messageSuccess,B=O("notification.".concat(B))+O("notification.title.success"),l.asynced?z.info(B):z.success(B)}}).catch(function(v){u(!1),typeof l.onError=="function"&&l.onError(v)})};return l.confirm?(0,b.jsx)(d.Z,{style:{width:500},title:l.confirmTitle?l.confirmTitle:O("notification.title.tip"),description:l.confirm,onConfirm:L,okText:"Yes",cancelText:"No",children:(0,b.jsx)(i.ZP,{disabled:l.disabled,icon:l.icon,loading:_,danger:l.danger,type:l.type,children:l.children})}):(0,b.jsx)(E.Z,{title:l.tips,children:(0,b.jsx)(i.ZP,{disabled:l.disabled,icon:l.icon,loading:_,onClick:L,danger:l.danger,type:l.type,children:l.children})})}},27619:function(X,C,n){n.d(C,{Z:function(){return T}});var R=n(97857),s=n.n(R),k=n(19632),d=n.n(k),i=n(5574),E=n.n(i),p=n(64183),b=n(63713),I=n(9361),l=n(67294),x=n(85893);function T(_){var u,e=(0,l.useState)("academy"),O=E()(e,2),G=O[0],z=O[1],L=Math.max.apply(Math,d()(_.data.map(function(B){var N;return(N=B[_.yField])!==null&&N!==void 0?N:0}))),Y=(0,b.useAntdConfig)(),v={xField:_.xField,yField:_.yField,height:200,axis:{y:{line:!0},x:{line:!0,grid:{visable:!0},labelAutoRotate:!0}},style:{opacity:.4},tooltip:{channel:"y",valueFormatter:_.yLabelFormatter},scale:{y:{domainMin:(u=_.yDomainMin)!==null&&u!==void 0?u:0,domainMax:_.yDomainMax?_.yDomainMax:_.yDomainMaxCallback?_.yDomainMaxCallback(L):L}},data:_.data};return _.yLabelFormatter&&(v.axis.y.labelFormatter=_.yLabelFormatter),_.colorField&&(v.colorField=_.colorField),(0,l.useEffect)(function(){var B=Y.theme.algorithm;B.includes(I.Z.darkAlgorithm)?z("classicDark"):z("academy")},[Y]),(0,x.jsx)(p.Z,s()({theme:G},v))}},71890:function(X,C,n){var R=n(15009),s=n.n(R),k=n(99289),d=n.n(k),i=n(67294);function E(p){var b=p.reqFunction,I=p.interval,l=p.maxPolling,x=p.pollingStatus,T=p.inPath,_=(0,i.useRef)(null),u=0,e=function G(){_.current=window.setTimeout(d()(s()().mark(function z(){var L;return s()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:if(!(u++>=l)){v.next=3;break}return O(),v.abrupt("return");case 3:if(v.prev=3,!(T&&window.location.href.indexOf(T)==-1)){v.next=7;break}return O(),v.abrupt("return");case 7:return v.next=9,b();case 9:L=v.sent,G(),v.next=17;break;case 13:v.prev=13,v.t0=v.catch(3),O(),console.error("\u8F6E\u8BE2\u53D1\u751F\u9519\u8BEF\uFF1A",v.t0);case 17:case"end":return v.stop()}},z,null,[[3,13]])})),I)},O=function(){console.log("end polling"),_.current&&window.clearTimeout(_.current)};return(0,i.useEffect)(function(){return console.log((x?"start":"waiting")+" polling, max "+l),x&&e(),function(){O()}},[I,l,x]),{endPolling:O}}C.Z=E},24963:function(X,C,n){var R=n(67294),s=(0,R.createContext)({});C.Z=s},10502:function(X,C,n){n.r(C),n.d(C,{default:function(){return we}});var R=n(15009),s=n.n(R),k=n(99289),d=n.n(k),i=n(5574),E=n.n(i),p=n(19632),b=n.n(p),I=n(80821),l=n(27619),x=n(97857),T=n.n(x),_=n(28413),u=n(67294),e=n(85893);function O(Z){var V=(0,u.useState)(),M=E()(V,2),J=M[0],ee=M[1],ne={colorField:"value",valueField:"value",scale:{color:{range:["#4e79a7","#f28e2c","#e15759","#76b7b2","#59a14f","#edc949","#af7aa1","#ff9da7","#9c755f","#bab0ab"]}},legend:!1};return Z.data?(0,e.jsx)(_.Z,T()(T()({},ne),{},{height:500,data:{name:"root",children:Z.data}})):(0,e.jsx)(e.Fragment,{})}var G=n(55241),z=n(71230),L=n(15746),Y=n(38703),v=(0,u.forwardRef)(function(Z,V){return(0,u.useImperativeHandle)(V,function(){return{}}),(0,e.jsxs)(G.Z,{placement:"left",children:[(0,e.jsx)(z.Z,{justify:"center",children:(0,e.jsx)(L.Z,{children:(0,e.jsx)(Y.Z,{percent:Z.showPercent,type:"dashboard",format:function(J,ee){return"".concat(J,"%")},size:150,status:Z.showPercent>=100?"exception":"normal"})})}),(0,e.jsx)(z.Z,{justify:"center",children:(0,e.jsxs)(L.Z,{style:{marginTop:"10px"},children:[Z.showLabel,": ",Z.showUse," / ",Z.showTotal]})})]})}),B=v,N=n(71890),se=n(24963),Q=n(87662),h=n(2831),F=n(18148),c=n(63713);function a(){return ie.apply(this,arguments)}function ie(){return ie=d()(s()().mark(function Z(){return s()().wrap(function(M){for(;;)switch(M.prev=M.next){case 0:return M.abrupt("return",(0,c.request)("/api/pro/home/get-machine-id",{method:"POST"}));case 1:case"end":return M.stop()}},Z)})),ie.apply(this,arguments)}function Ue(){return ue.apply(this,arguments)}function ue(){return ue=d()(s()().mark(function Z(){return s()().wrap(function(M){for(;;)switch(M.prev=M.next){case 0:return M.abrupt("return",(0,c.request)("/api/pro/home/get-license-info",{method:"POST"}));case 1:case"end":return M.stop()}},Z)})),ue.apply(this,arguments)}var A=n(5251),Re=n(45605),Le=n(1210),$e=n(38123),te=n(12122),S=n(38345),xe=n(184),$=n(88273),We=n(28036),K=n(26412),ae=n(42075),le=n(83062),Fe=n(25593),be=n(63490),ke=n(86250),Ke=n(93162);function we(){var Z,V,M,J,ee,ne,oe,de,ce,me,_e,ve,he,fe,ge,pe,je,ye,Ee,Pe,ze=function(f,o){switch(o.type){case"update":var D=new Date().toLocaleTimeString(),g=0,m=0,q=0,re=0,w=0,y=0;o.payload.map(function(W){g+=W.cpu,m+=W.memory.in,q+=W.networkIO.in,re+=W.networkIO.out,w+=W.blockIO.in,y+=W.blockIO.out});var H={list:o.payload,cpu:g,memory:m,network:[].concat(b()(f.network),[{date:D,usage:re,type:"\u4E0A\u884C",source:{usage:re}},{date:D,type:"\u4E0B\u884C",usage:q,source:{usage:q}}]),io:[].concat(b()(f.io),[{date:D,usage:y,type:"\u8BFB\u53D6",source:{usage:y}},{date:D,type:"\u5199\u5165",usage:w,source:{usage:w}}])};return H}},Ie=(0,c.useAccess)(),Ge=(0,u.useState)(),Te=E()(Ge,2),De=Te[0],Ne=Te[1],Ve=(0,u.useState)(),Me=E()(Ve,2),t=Me[0],He=Me[1],Ye=(0,u.useState)(),Ce=E()(Ye,2),j=Ce[0],Xe=Ce[1],Qe=(0,u.useState)(),Oe=E()(Qe,2),r=Oe[0],Je=Oe[1],qe=(0,u.useReducer)(ze,{cpu:0,memory:0,network:[],io:[],list:[]}),Se=E()(qe,2),U=Se[0],Ze=Se[1],en=(0,u.useContext)(se.Z),Be=en.loading,nn=(0,N.Z)({reqFunction:function(){var P=d()(s()().mark(function o(){var D;return s()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,(0,Q.Cz)();case 2:D=m.sent,Ze({type:"update",payload:D.data.list});case 4:case"end":return m.stop()}},o)}));function f(){return P.apply(this,arguments)}return f}(),interval:1e3,maxPolling:999,pollingStatus:!!t,inPath:"/home"}),Ae=function(){var P=d()(s()().mark(function f(){var o,D,g,m,q;return s()().wrap(function(w){for(;;)switch(w.prev=w.next){case 0:return Be.show(),w.next=3,(0,h.Ll)();case 3:return o=w.sent,Je(o.data),w.next=7,(0,h.aF)().finally(function(){Be.destroy()});case 7:return D=w.sent,He(D.data),g={total:0,container:0,volume:0,image:0,cache:0,item:[],updatedAt:""},m=o.data.diskUsage,m.usage.Containers&&m.usage.Containers.map(function(y){var H,W;g.container+=y.SizeRootFs+((H=y.SizeRw)!==null&&H!==void 0?H:0),g.item.push({name:y.Names[0],value:parseFloat(((y.SizeRootFs+((W=y.SizeRw)!==null&&W!==void 0?W:0))/1024/1024).toFixed(2))})}),m.usage.Volumes&&m.usage.Volumes.map(function(y){g.volume+=y.UsageData.Size,g.item.push({name:y.Name,value:parseFloat((y.UsageData.Size/1024/1024).toFixed(2))})}),m.usage.Images&&m.usage.Images.map(function(y){var H,W;g.image+=y.Size-((H=y.Sharedsize)!==null&&H!==void 0?H:0),g.item.push({name:y.RepoTags&&y.RepoTags.length>0?y.RepoTags[0]:y.Id,value:parseFloat(((y.Size-((W=y.Sharedsize)!==null&&W!==void 0?W:0))/1024/1024).toFixed(2))})}),m.usage.BuildCache&&m.usage.BuildCache.map(function(y){g.cache+=y.Size}),!m.usage.Containers&&!m.usage.Images&&!m.usage.Volumes?g.item.push({name:"\u6B63\u5728\u83B7\u53D6\u8BA1\u7B97,\u4E2A\u522B\u7CFB\u7EDF\u4F1A\u6BD4\u8F83\u8017\u65F6.",value:100}):g.updatedAt=new Date(m.updatedAt).toLocaleString(),g.total=m.usage.LayersSize,Xe(g),w.next=20,(0,Q.Cz)();case 20:q=w.sent,Ze({type:"update",payload:q.data.list});case 22:case"end":return w.stop()}},f)}));return function(){return P.apply(this,arguments)}}();return(0,u.useEffect)(function(){Ae(),Ie.canSeePe&&Ue().then(function(P){Ne(P.data)})},[]),(0,e.jsxs)(S.Z,{direction:"column",gutter:[0,10],ghost:!0,children:[(0,e.jsxs)(S.Z,{bordered:!0,split:"vertical",children:[(0,e.jsx)(S.Z,{colSpan:"40%",headerBordered:!0,title:(0,e.jsx)(Re.Z,{}),subTitle:"\u57FA\u7840\u4FE1\u606F",extra:Ie.canSeePe?De&&De.expireTime?(0,e.jsxs)(e.Fragment,{children:["\u8FC7\u671F\u65F6\u95F4: ",new Date(De.expireTime).toLocaleString()]}):(0,e.jsx)(We.ZP,{type:"link",onClick:d()(s()().mark(function P(){var f,o;return s()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,a();case 2:f=g.sent,o=new Blob([f.data.code],{type:"text/plain"}),(0,Ke.saveAs)(o,"dpanel.code");case 5:case"end":return g.stop()}},P)})),children:"\u6388\u6743\u7801"}):(0,e.jsx)("a",{href:"https://dpanel.cc/#/zh-cn/manual/pro",target:"_blank",children:"Pro \u7248"}),children:(0,e.jsxs)(K.Z,{column:1,labelStyle:{width:100,justifyContent:"flex-end"},children:[(0,e.jsx)(K.Z.Item,{label:"\u9762\u677F\u4FE1\u606F",children:(0,e.jsxs)(ae.Z,{direction:"horizontal",children:[(0,e.jsxs)("span",{children:["DPanel - ",t==null?void 0:t.dpanel.version," - ",t==null?void 0:t.dpanel.env," - ",t==null?void 0:t.dpanel.family]}),(0,e.jsx)(le.Z,{title:"\u5347\u7EA7\u65E5\u5FD7",children:(0,e.jsx)("a",{target:"_blank",href:"https://github.com/donknap/dpanel/releases",children:(0,e.jsx)(Le.Z,{})})}),(0,e.jsx)(le.Z,{title:"\u5B98\u65B9\u4EA4\u6D41\u7FA4\uFF1A837583876",children:(0,e.jsx)("a",{target:"_blank",href:"https://qm.qq.com/q/NC0z7keAiy",children:(0,e.jsx)($e.Z,{})})})]})}),(0,e.jsxs)(K.Z.Item,{label:"Docker Host",children:[t==null?void 0:t.info.Name," ",(0,e.jsx)(e.Fragment,{children:(t==null?void 0:t.info.ID)==""&&(0,e.jsx)(c.Link,{to:"/system/env?id=local",children:"\u914D\u7F6E\u9ED8\u8BA4 Docker \u5BA2\u6237\u7AEF"})})]}),(0,e.jsx)(K.Z.Item,{label:"Docker \u7248\u672C",children:"".concat(t==null?void 0:t.info.OperatingSystem," - ").concat(t==null?void 0:t.info.ServerVersion," - ").concat(t==null?void 0:t.sdkVersion)}),(0,e.jsx)(K.Z.Item,{label:"\u6587\u4EF6\u5B58\u50A8\u9A71\u52A8",children:"".concat(t==null?void 0:t.info.Driver)}),(0,e.jsx)(K.Z.Item,{label:"\u65E5\u5FD7\u9A71\u52A8",children:"".concat(t==null?void 0:t.info.LoggingDriver)}),(0,e.jsx)(K.Z.Item,{label:"\u7CFB\u7EDF\u67B6\u6784",children:"".concat(t==null?void 0:t.info.KernelVersion," - ").concat(t==null?void 0:t.info.Architecture)}),(0,e.jsxs)(K.Z.Item,{label:"Cpu",children:[t==null?void 0:t.info.NCPU," \u6838"]}),(0,e.jsx)(K.Z.Item,{label:"Memory",children:(0,A.FI)((Z=t==null?void 0:t.info.MemTotal)!==null&&Z!==void 0?Z:0)}),(0,e.jsx)(K.Z.Item,{label:"\u6839\u76EE\u5F55",children:t==null?void 0:t.info.DockerRootDir}),(0,e.jsx)(K.Z.Item,{label:"\u5B58\u50A8\u5377\u63D2\u4EF6",children:(0,e.jsx)(ae.Z,{children:t==null?void 0:t.info.Plugins.Volume})}),(0,e.jsx)(K.Z.Item,{label:"\u7F51\u7EDC\u63D2\u4EF6",children:(0,e.jsx)(ae.Z,{children:t==null?void 0:t.info.Plugins.Network})}),(0,e.jsx)(K.Z.Item,{label:"\u7CFB\u7EDF\u65F6\u95F4",children:new Date((V=t==null?void 0:t.info.SystemTime)!==null&&V!==void 0?V:"").toLocaleString()})]})}),(0,e.jsxs)(S.Z,{headerBordered:!0,title:(0,e.jsx)(te.Z,{}),subTitle:"\u5BB9\u5668\u8FD0\u884C\u7EDF\u8BA1",split:"horizontal",extra:(0,e.jsx)(xe.a,{title:"\u5BB9\u5668\u72B6\u6001\u6570\u636E",submitter:!1,trigger:(0,e.jsx)(Fe.Z.Link,{children:"\u8BE6\u60C5\u6570\u636E"}),children:(0,e.jsx)(be.Z,{pagination:!1,dataSource:U.list,rowKey:"name",columns:[{title:"\u5BB9\u5668\u540D\u79F0",dataIndex:"name"},{title:"Cpu",dataIndex:"cpu",sorter:function(f,o){return f.cpu-o.cpu},render:function(f,o,D){return"".concat(o.cpu.toFixed(2),"%")}},{title:"\u5185\u5B58",dataIndex:"memory",sorter:function(f,o){return f.memory.in-o.memory.in},render:function(f,o,D){var g,m;return"".concat((0,A.FI)((g=o==null?void 0:o.memory.in)!==null&&g!==void 0?g:0)," / ").concat((0,A.FI)((m=o==null?void 0:o.memory.out)!==null&&m!==void 0?m:0))}},{title:"\u7F51\u7EDC I/O",dataIndex:"networkIO",render:function(f,o,D){return"".concat((0,A.FI)(o.networkIO.in)," / ").concat((0,A.FI)(o.networkIO.out))}},{title:"\u78C1\u76D8 I/O",dataIndex:"blockIO",render:function(f,o,D){return"".concat((0,A.FI)(o.blockIO.in)," / ").concat((0,A.FI)(o.blockIO.out))}}]})}),children:[(0,e.jsx)(S.Z,{children:(0,e.jsxs)(ke.Z,{gap:50,align:"center",justify:"space-evenly",children:[(0,e.jsx)(B,{showPercent:parseFloat(((M=U==null?void 0:U.cpu)!==null&&M!==void 0?M:0).toFixed(2)),showLabel:"Cpu",showUse:"".concat((((J=U==null?void 0:U.cpu)!==null&&J!==void 0?J:0)/100*((ee=t==null?void 0:t.info.NCPU)!==null&&ee!==void 0?ee:0)).toFixed(2)),showTotal:"".concat((ne=t==null?void 0:t.info.NCPU)!==null&&ne!==void 0?ne:0," \u6838")}),(0,e.jsx)(B,{showPercent:parseFloat((((oe=U==null?void 0:U.memory)!==null&&oe!==void 0?oe:0)/((de=t==null?void 0:t.info.MemTotal)!==null&&de!==void 0?de:0)*100).toFixed(2)),showLabel:"\u5185\u5B58",showUse:(0,A.FI)((ce=U==null?void 0:U.memory)!==null&&ce!==void 0?ce:0),showTotal:"".concat((0,A.FI)((me=t==null?void 0:t.info.MemTotal)!==null&&me!==void 0?me:0))})]})}),(0,e.jsxs)(S.Z,{split:"vertical",wrap:!0,children:[(0,e.jsx)(S.Z,{colSpan:12,title:(0,e.jsx)(te.Z,{}),subTitle:"\u7F51\u7EDC",headerBordered:!0,children:(0,e.jsx)(l.Z,{yField:"usage",xField:"date",colorField:"type",data:U.network,yLabelFormatter:function(f){return(0,A.FI)(parseFloat(f))},yDomainMaxCallback:function(f){return f*1.5}})}),(0,e.jsx)(S.Z,{colSpan:12,title:(0,e.jsx)(te.Z,{}),subTitle:"\u78C1\u76D8",headerBordered:!0,children:(0,e.jsx)(l.Z,{yField:"usage",xField:"date",colorField:"type",data:U.io,yLabelFormatter:function(f){return(0,A.FI)(parseFloat(f))},yDomainMaxCallback:function(f){return f*1.5}})})]})]})]}),(0,e.jsxs)(S.Z,{bordered:!0,headerBordered:!0,title:(0,e.jsx)(te.Z,{}),subTitle:"\u7528\u91CF\u7EDF\u8BA1",extra:"".concat(j&&j.updatedAt?"\u6570\u636E\u6700\u540E\u66F4\u65B0: ".concat(j.updatedAt):""),children:[(0,e.jsx)(S.Z,{colSpan:"50%",ghost:!0,children:(j==null?void 0:j.item)&&(j==null?void 0:j.item.length)>0&&(0,e.jsx)(O,{data:(_e=j==null?void 0:j.item)!==null&&_e!==void 0?_e:[]})}),(0,e.jsxs)(S.Z,{split:"horizontal",ghost:!0,children:[(0,e.jsx)($.Z,{statistic:{title:"\u5BB9\u5668",value:(0,A.FI)((ve=j==null?void 0:j.container)!==null&&ve!==void 0?ve:0),description:"\u5BB9\u5668\u5360\u7528\u53CA\u8FD0\u884C\u5199\u5165\u6570\u636E"}}),(0,e.jsx)($.Z,{statistic:{title:"\u955C\u50CF",value:(0,A.FI)((he=j==null?void 0:j.image)!==null&&he!==void 0?he:0),description:"\u5305\u542B\u4E2D\u95F4\u955C\u50CF"}}),(0,e.jsx)($.Z,{statistic:{title:"\u5B58\u50A8",value:(0,A.FI)((fe=j==null?void 0:j.volume)!==null&&fe!==void 0?fe:0),description:"\u53EA\u5305\u542B\u5B58\u50A8\u5377,\u4E0D\u5305\u542B\u6302\u8F7D\u76EE\u5F55"}}),(0,e.jsx)($.Z,{statistic:{title:(0,e.jsxs)(ae.Z,{children:[(0,e.jsx)("span",{children:"\u6784\u5EFA\u7F13\u5B58"}),(0,e.jsx)(I.Z,{action:function(){return(0,F.c5)()},type:"link",messageSuccess:"clear",onSuccess:function(){Ae()},children:"\u6E05\u9664"})]}),value:(0,A.FI)((ge=j==null?void 0:j.cache)!==null&&ge!==void 0?ge:0)}})]}),(0,e.jsxs)(S.Z,{ghost:!0,split:"horizontal",children:[(0,e.jsx)(S.Z,{ghost:!0,children:(0,e.jsxs)($.Z.Group,{children:[(0,e.jsx)($.Z,{statistic:{title:"\u5BB9\u5668",value:(pe=t==null?void 0:t.info.Containers)!==null&&pe!==void 0?pe:0,description:(0,e.jsx)(c.Link,{to:"/app/list",children:"\u67E5\u770B"})}}),(0,e.jsx)($.Z,{statistic:{title:"\u9884\u8B66",status:"error",valueRender:function(f){var o,D,g,m=0;return r&&r.total&&r.total.containerRunning.stop&&(m+=r.total.containerRunning.stop),r&&r.total&&r.total.containerRunning.pause&&(m+=r.total.containerRunning.pause),r&&r.total&&r.total.containerRunning.unhealthy&&(m+=r.total.containerRunning.unhealthy),(0,e.jsx)(le.Z,{title:"\u505C\u6B62\uFF1A".concat((o=r==null?void 0:r.total.containerRunning.stop)!==null&&o!==void 0?o:0,"\uFF0C\u6682\u505C\uFF1A").concat((D=r==null?void 0:r.total.containerRunning.pause)!==null&&D!==void 0?D:0,"\uFF0C\u4E0D\u5065\u5EB7\uFF1A").concat((g=r==null?void 0:r.total.containerRunning.unhealthy)!==null&&g!==void 0?g:0),children:m})}}}),(0,e.jsx)($.Z,{statistic:{title:"\u56DE\u6536\u7AD9",value:(je=r==null?void 0:r.total.containerTask)!==null&&je!==void 0?je:0,description:(0,e.jsx)(c.Link,{to:"/app/list/recycle",children:"\u67E5\u770B"})}})]})}),(0,e.jsxs)(S.Z,{ghost:!0,children:[(0,e.jsx)($.Z,{statistic:{title:"\u955C\u50CF",value:"".concat((ye=(r==null?void 0:r.diskUsage.usage.Images)&&(r==null?void 0:r.diskUsage.usage.Images.length))!==null&&ye!==void 0?ye:0),description:(0,e.jsx)(c.Link,{to:"/image/list",children:"\u67E5\u770B"})},chartPlacement:"left"}),(0,e.jsx)($.Z,{statistic:{title:"\u4EFB\u52A1",value:(Ee=r==null?void 0:r.total.imageTask)!==null&&Ee!==void 0?Ee:0,description:(0,e.jsx)(c.Link,{to:"/image/list/build",children:"\u67E5\u770B"})},chartPlacement:"left"})]}),(0,e.jsxs)(S.Z,{ghost:!0,children:[(0,e.jsx)($.Z,{statistic:{title:"\u7F51\u7EDC",value:r==null?void 0:r.total.network,description:(0,e.jsx)(c.Link,{to:"/docker/network",children:"\u67E5\u770B"})},chartPlacement:"left"}),(0,e.jsx)($.Z,{statistic:{title:"\u7AEF\u53E3\u6620\u5C04",value:r==null?void 0:r.total.port,description:(0,e.jsx)(xe.a,{submitter:!1,title:"\u67E5\u770B\u6620\u5C04\u7AEF\u53E3",trigger:(0,e.jsx)(Fe.Z.Link,{children:"\u67E5\u770B"}),children:(0,e.jsx)(be.Z,{pagination:!1,dataSource:r==null?void 0:r.port,rowKey:"name",columns:[{title:"\u4E3B\u673A\u7AEF\u53E3",dataIndex:["port","host"],sorter:function(f,o){return parseInt(f.port.host)-parseInt(o.port.host)},render:function(f,o,D){return"".concat(o.port.hostIp,":").concat(o.port.host)}},{title:"\u5BB9\u5668\u7AEF\u53E3",dataIndex:["port","dest"]},{title:"\u5BB9\u5668\u540D\u79F0",dataIndex:"name"}]})})},chartPlacement:"left"})]}),(0,e.jsxs)(S.Z,{ghost:!0,children:[(0,e.jsx)($.Z,{statistic:{title:"\u5B58\u50A8\u5377",value:(Pe=(r==null?void 0:r.diskUsage.usage.Volumes)&&(r==null?void 0:r.diskUsage.usage.Volumes.length))!==null&&Pe!==void 0?Pe:0,description:(0,e.jsx)(c.Link,{to:"/docker/volume",children:"\u67E5\u770B"})},chartPlacement:"left"}),(0,e.jsx)($.Z,{statistic:{title:"\u5907\u4EFD",value:r==null?void 0:r.total.backup,description:(0,e.jsx)(c.Link,{to:"/app/backup",children:"\u67E5\u770B"})},chartPlacement:"left"})]})]})]})]})}},2831:function(X,C,n){n.d(C,{Ll:function(){return b},aF:function(){return E},d6:function(){return l}});var R=n(15009),s=n.n(R),k=n(99289),d=n.n(k),i=n(63713);function E(){return p.apply(this,arguments)}function p(){return p=d()(s()().mark(function T(){return s()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,(0,i.request)("/api/common/home/info",{method:"POST"});case 2:return u.abrupt("return",u.sent);case 3:case"end":return u.stop()}},T)})),p.apply(this,arguments)}function b(){return I.apply(this,arguments)}function I(){return I=d()(s()().mark(function T(){return s()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,(0,i.request)("/api/common/home/usage",{method:"POST"});case 2:return u.abrupt("return",u.sent);case 3:case"end":return u.stop()}},T)})),I.apply(this,arguments)}function l(){return x.apply(this,arguments)}function x(){return x=d()(s()().mark(function T(){return s()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,(0,i.request)("/api/common/home/upgrade-script",{method:"POST"});case 2:return u.abrupt("return",u.sent);case 3:case"end":return u.stop()}},T)})),x.apply(this,arguments)}},18148:function(X,C,n){n.d(C,{$q:function(){return u},Fj:function(){return B},KG:function(){return E},KX:function(){return se},T8:function(){return T},Xn:function(){return l},ao:function(){return O},c5:function(){return Y},c7:function(){return z}});var R=n(15009),s=n.n(R),k=n(99289),d=n.n(k),i=n(63713);function E(h){return p.apply(this,arguments)}function p(){return p=d()(s()().mark(function h(F){return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,i.request)("/api/app/image/get-list",{method:"POST",data:F}));case 1:case"end":return a.stop()}},h)})),p.apply(this,arguments)}function b(h){return I.apply(this,arguments)}function I(){return I=_asyncToGenerator(_regeneratorRuntime().mark(function h(F){return _regeneratorRuntime().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,request("/api/app/log/image-build",{method:"POST",data:F});case 2:return a.abrupt("return",a.sent);case 3:case"end":return a.stop()}},h)})),I.apply(this,arguments)}function l(h){return x.apply(this,arguments)}function x(){return x=d()(s()().mark(function h(F){return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,i.request)("/api/app/image/get-list-build",{method:"POST",data:F}));case 1:case"end":return a.stop()}},h)})),x.apply(this,arguments)}function T(h){return _.apply(this,arguments)}function _(){return _=d()(s()().mark(function h(F){return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,(0,i.request)("/api/app/image/get-build-task",{method:"POST",data:F});case 2:return a.abrupt("return",a.sent);case 3:case"end":return a.stop()}},h)})),_.apply(this,arguments)}function u(h){return e.apply(this,arguments)}function e(){return e=d()(s()().mark(function h(F){return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,(0,i.request)("/api/app/image/delete-build-task",{method:"POST",data:F});case 2:return a.abrupt("return",a.sent);case 3:case"end":return a.stop()}},h)})),e.apply(this,arguments)}function O(h){return G.apply(this,arguments)}function G(){return G=d()(s()().mark(function h(F){return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,(0,i.request)("/api/app/image/image-delete",{method:"POST",data:F});case 2:return a.abrupt("return",a.sent);case 3:case"end":return a.stop()}},h)})),G.apply(this,arguments)}function z(){return L.apply(this,arguments)}function L(){return L=d()(s()().mark(function h(){return s()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,(0,i.request)("/api/app/image/image-prune",{method:"POST"});case 2:return c.abrupt("return",c.sent);case 3:case"end":return c.stop()}},h)})),L.apply(this,arguments)}function Y(){return v.apply(this,arguments)}function v(){return v=d()(s()().mark(function h(){return s()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,(0,i.request)("/api/app/image/build-prune",{method:"POST"});case 2:return c.abrupt("return",c.sent);case 3:case"end":return c.stop()}},h)})),v.apply(this,arguments)}function B(h){return N.apply(this,arguments)}function N(){return N=d()(s()().mark(function h(F){return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,(0,i.request)("/api/app/image/update-title",{method:"POST",data:F});case 2:return a.abrupt("return",a.sent);case 3:case"end":return a.stop()}},h)})),N.apply(this,arguments)}function se(h){return Q.apply(this,arguments)}function Q(){return Q=d()(s()().mark(function h(F){return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,i.request)("/api/app/image/tag-sync",{method:"POST",data:F}));case 1:case"end":return a.stop()}},h)})),Q.apply(this,arguments)}},5251:function(X,C,n){n.d(C,{FI:function(){return s},ZM:function(){return k}});function R(d){return d.trim()}function s(d){var i="";d<.1*1024?i=d.toFixed(2)+"B":d<.1*1024*1024?i=(d/1024).toFixed(2)+"KB":d<1*1024*1024*1024?i=(d/(1024*1024)).toFixed(2)+"MB":i=(d/(1024*1024*1024)).toFixed(2)+"GB";var E=i+"",p=E.indexOf("."),b=E.substring(p+1,p+3);return b=="00"?E.substring(0,p)+E.substr(p+3,2):i}function k(d){if(d){var i=new Date(d),E=i.getFullYear()+"-",p=(i.getMonth()+1<10?"0"+(i.getMonth()+1):i.getMonth()+1)+"-",b=(i.getDate()<10?"0"+i.getDate():i.getDate())+" ",I=(i.getHours()<10?"0"+i.getHours():i.getHours())+":",l=(i.getMinutes()<10?"0"+i.getMinutes():i.getMinutes())+":",x=i.getSeconds()<10?"0"+i.getSeconds():i.getSeconds();return E+p+b+I+l+x}}}}]);