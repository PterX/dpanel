"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7745],{16664:function(L,h,e){e.d(h,{Z:function(){return y}});var D=e(87462),d=e(67294),_={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM104 228a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"unordered-list",theme:"outlined"},n=_,t=e(84089),c=function(g,m){return d.createElement(t.Z,(0,D.Z)({},g,{ref:m,icon:n}))},l=d.forwardRef(c),y=l},27619:function(L,h,e){e.d(h,{Z:function(){return f}});var D=e(97857),d=e.n(D),_=e(19632),n=e.n(_),t=e(5574),c=e.n(t),l=e(64183),y=e(54006),v=e(9361),g=e(67294),m=e(85893);function f(s){var C,R=(0,g.useState)("academy"),P=c()(R,2),b=P[0],O=P[1],S=Math.max.apply(Math,n()(s.data.map(function(T){var u;return(u=T[s.yField])!==null&&u!==void 0?u:0}))),E=(0,y.useAntdConfig)(),i={xField:s.xField,yField:s.yField,height:200,axis:{y:{line:!0},x:{line:!0,grid:{visable:!0},labelAutoRotate:!0}},style:{opacity:.4},tooltip:{channel:"y",valueFormatter:s.yLabelFormatter},scale:{y:{domainMin:(C=s.yDomainMin)!==null&&C!==void 0?C:0,domainMax:s.yDomainMax?s.yDomainMax:s.yDomainMaxCallback?s.yDomainMaxCallback(S):S}},data:s.data};return s.yLabelFormatter&&(i.axis.y.labelFormatter=s.yLabelFormatter),s.colorField&&(i.colorField=s.colorField),(0,g.useEffect)(function(){var T=E.theme.algorithm;T.includes(v.Z.darkAlgorithm)?O("classicDark"):O("academy")},[E]),(0,m.jsx)(l.Z,d()({theme:b},i))}},71890:function(L,h,e){var D=e(15009),d=e.n(D),_=e(99289),n=e.n(_),t=e(67294);function c(l){var y=l.reqFunction,v=l.interval,g=l.maxPolling,m=l.pollingStatus,f=l.inPath,s=(0,t.useRef)(null),C=0,R=function b(){s.current=window.setTimeout(n()(d()().mark(function O(){var S;return d()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:if(!(C++>=g)){i.next=3;break}return P(),i.abrupt("return");case 3:if(i.prev=3,!(f&&window.location.href.indexOf(f)==-1)){i.next=7;break}return P(),i.abrupt("return");case 7:return i.next=9,y();case 9:S=i.sent,b(),i.next=17;break;case 13:i.prev=13,i.t0=i.catch(3),P(),console.error("\u8F6E\u8BE2\u53D1\u751F\u9519\u8BEF\uFF1A",i.t0);case 17:case"end":return i.stop()}},O,null,[[3,13]])})),v)},P=function(){console.log("end polling"),s.current&&window.clearTimeout(s.current)};return(0,t.useEffect)(function(){return console.log((m?"start":"waiting")+" polling, max "+g),m&&R(),function(){P()}},[v,g,m]),{endPolling:P}}h.Z=c},24963:function(L,h,e){var D=e(67294),d=(0,D.createContext)({});h.Z=d},42223:function(L,h,e){e.r(h),e.d(h,{default:function(){return $}});var D=e(15009),d=e.n(D),_=e(99289),n=e.n(_),t=e(5574),c=e.n(t),l=e(19632),y=e.n(l),v=e(27619),g=e(71890),m=e(24963),f=e(54006);function s(I){return C.apply(this,arguments)}function C(){return C=n()(d()().mark(function I(Z){return d()().wrap(function(F){for(;;)switch(F.prev=F.next){case 0:return F.abrupt("return",(0,f.request)("/api/app/container/get-stat-info",{method:"POST",data:Z}));case 1:case"end":return F.stop()}},I)})),C.apply(this,arguments)}function R(I){return P.apply(this,arguments)}function P(){return P=n()(d()().mark(function I(Z){return d()().wrap(function(F){for(;;)switch(F.prev=F.next){case 0:return F.abrupt("return",(0,f.request)("/api/app/container/get-process-info",{method:"POST",data:Z}));case 1:case"end":return F.stop()}},I)})),P.apply(this,arguments)}var b=e(5251),O=e(12122),S=e(16664),E=e(38345),i=e(63490),T=e(67294),u=e(85893),A=new Date().toLocaleTimeString(),z={total:0,memory:[{date:A,usage:0,source:{usage:0,limit:0}}],cpu:[{date:A,usage:0}],network:[{usage:0,type:"rx",date:A,source:{usage:0}},{usage:0,type:"tx",date:A,source:{usage:0}}],io:[{usage:0,type:"read",date:A,source:{usage:0}},{usage:0,type:"write",date:A,source:{usage:0}}]};function $(){var I=function(r,a){switch(a.type){case"update":var x=new Date(a.payload.read).toLocaleTimeString(),p=a.payload.cpu_stats.cpu_usage.total_usage-a.payload.precpu_stats.cpu_usage.total_usage,k=a.payload.cpu_stats.system_cpu_usage-a.payload.precpu_stats.system_cpu_usage,j={total:r.total+1,memory:[],cpu:[].concat(y()(r.cpu),[{date:x,usage:p/k*a.payload.cpu_stats.online_cpus*100}]),io:[],network:[]};return a.payload.memory_stats&&a.payload.memory_stats.limit&&a.payload.memory_stats.usage&&(j.memory=[].concat(y()(r.memory),[{date:x,usage:Math.round(a.payload.memory_stats.usage),source:{usage:a.payload.memory_stats.usage,limit:a.payload.memory_stats.limit}}])),a.payload.networks&&(j.network=[].concat(y()(r.network),[{date:x,usage:parseFloat(a.payload.networks.eth0.rx_bytes.toFixed(2)),type:"rx",source:{usage:a.payload.networks.eth0.rx_bytes}},{date:x,usage:parseFloat(a.payload.networks.eth0.tx_bytes.toFixed(2)),type:"tx",source:{usage:a.payload.networks.eth0.tx_bytes}}])),a.payload.blkio_stats&&a.payload.blkio_stats.io_service_bytes_recursive&&a.payload.blkio_stats.io_service_bytes_recursive.length>0&&(j.io=[].concat(y()(r.io),[{date:x,usage:parseFloat(a.payload.blkio_stats.io_service_bytes_recursive[0].value.toFixed(2)),type:a.payload.blkio_stats.io_service_bytes_recursive[0].op,source:{usage:a.payload.blkio_stats.io_service_bytes_recursive[0].value}},{date:x,usage:parseFloat(a.payload.blkio_stats.io_service_bytes_recursive[1].value.toFixed(2)),type:a.payload.blkio_stats.io_service_bytes_recursive[1].op,source:{usage:a.payload.blkio_stats.io_service_bytes_recursive[1].value}}])),j}},Z=(0,T.useContext)(m.Z),W=Z.loading,F=(0,f.useParams)(),H=(0,T.useReducer)(I,z),B=c()(H,2),o=B[0],G=B[1],Y=(0,T.useState)(0),w=c()(Y,2),N=w[0],J=w[1],Q=(0,T.useState)(),K=c()(Q,2),U=K[0],V=K[1],X=(0,g.Z)({reqFunction:function(){var M=n()(d()().mark(function a(){var x,p;return d()().wrap(function(j){for(;;)switch(j.prev=j.next){case 0:return j.next=2,s({id:(x=F.id)!==null&&x!==void 0?x:""});case 2:p=j.sent,W.destroy(),G({type:"update",payload:p});case 5:case"end":return j.stop()}},a)}));function r(){return M.apply(this,arguments)}return r}(),interval:3e3,maxPolling:999,pollingStatus:N!=0,inPath:"tab=stat"});return(0,T.useEffect)(function(){var M,r;W.show(),s({id:(M=F.id)!==null&&M!==void 0?M:""}).then(function(a){return J(Math.round(a.memory_stats.limit)),!0}),R({id:(r=F.id)!==null&&r!==void 0?r:""}).then(function(a){var x={columns:[],data:[]};a.data.list.Titles.map(function(p){x.columns.push({title:p,label:p,dataIndex:p})}),a.data.list.Processes.map(function(p,k){x.data.push({UID:p[0],PID:p[1],PPID:p[2],C:p[3],STIME:p[4],TTY:p[5],TIME:p[6],CMD:p[7]})}),V(x)})},[]),(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(E.Z,{direction:"row",wrap:!0,gutter:[20,20],children:[o.memory&&o.memory.length>0&&(0,u.jsx)(E.Z,{colSpan:12,title:(0,u.jsx)(O.Z,{}),subTitle:"Memory usage: ".concat((0,b.FI)(o.memory[o.memory.length-1].source.usage)," / ").concat((0,b.FI)(o.memory[o.memory.length-1].source.limit)),headerBordered:!0,bordered:!0,children:(0,u.jsx)(v.Z,{yField:"usage",xField:"date",data:o.memory,yDomainMaxCallback:function(r){return r*2},yLabelFormatter:function(r){return(0,b.FI)(parseFloat(r))}})}),(0,u.jsx)(E.Z,{colSpan:12,title:(0,u.jsx)(O.Z,{}),subTitle:"Cpu usage: ".concat(o.cpu[o.cpu.length-1].usage.toFixed(2),"%"),headerBordered:!0,bordered:!0,children:(0,u.jsx)(v.Z,{yField:"usage",xField:"date",data:o.cpu,yDomainMaxCallback:function(r){return r*1.5},yLabelFormatter:function(r){return"".concat(r,"%")}})}),o.io&&o.io.length>0&&(0,u.jsx)(E.Z,{colSpan:12,title:(0,u.jsx)(O.Z,{}),subTitle:"I/O: ".concat((0,b.FI)(o.io[o.io.length-1].source.usage)," / ").concat((0,b.FI)(o.io[o.io.length-2].source.usage)),headerBordered:!0,bordered:!0,children:(0,u.jsx)(v.Z,{yField:"usage",xField:"date",colorField:"type",data:o.io,yDomainMaxCallback:function(r){return r*2},yLabelFormatter:function(r){return(0,b.FI)(parseFloat(r))}})}),o.network&&o.network.length>0&&(0,u.jsx)(E.Z,{colSpan:12,title:(0,u.jsx)(O.Z,{}),subTitle:"Network: ".concat((0,b.FI)(o.network[o.network.length-1].source.usage)," / ").concat((0,b.FI)(o.network[o.network.length-2].source.usage)),headerBordered:!0,bordered:!0,children:(0,u.jsx)(v.Z,{yField:"usage",xField:"date",colorField:"type",data:o.network,yDomainMaxCallback:function(r){return r*2},yLabelFormatter:function(r){return(0,b.FI)(parseFloat(r))}})})]}),(0,u.jsx)(E.Z,{title:(0,u.jsx)(S.Z,{}),subTitle:"Progress",children:(0,u.jsx)(i.Z,{scroll:{x:"max-content"},rowKey:"PID",columns:U==null?void 0:U.columns,dataSource:U==null?void 0:U.data,pagination:{pageSize:10}})})]})}},5251:function(L,h,e){e.d(h,{FI:function(){return d},ZM:function(){return _}});function D(n){return n.trim()}function d(n){var t="";n<.1*1024?t=n.toFixed(2)+"B":n<.1*1024*1024?t=(n/1024).toFixed(2)+"KB":n<1*1024*1024*1024?t=(n/(1024*1024)).toFixed(2)+"MB":t=(n/(1024*1024*1024)).toFixed(2)+"GB";var c=t+"",l=c.indexOf("."),y=c.substring(l+1,l+3);return y=="00"?c.substring(0,l)+c.substr(l+3,2):t}function _(n){if(n){var t=new Date(n),c=t.getFullYear()+"-",l=(t.getMonth()+1<10?"0"+(t.getMonth()+1):t.getMonth()+1)+"-",y=(t.getDate()<10?"0"+t.getDate():t.getDate())+" ",v=(t.getHours()<10?"0"+t.getHours():t.getHours())+":",g=(t.getMinutes()<10?"0"+t.getMinutes():t.getMinutes())+":",m=t.getSeconds()<10?"0"+t.getSeconds():t.getSeconds();return c+l+y+v+g+m}}},37762:function(L,h,e){e.d(h,{Z:function(){return d}});var D=e(40181);function d(_,n){var t=typeof Symbol!="undefined"&&_[Symbol.iterator]||_["@@iterator"];if(!t){if(Array.isArray(_)||(t=(0,D.Z)(_))||n&&_&&typeof _.length=="number"){t&&(_=t);var c=0,l=function(){};return{s:l,n:function(){return c>=_.length?{done:!0}:{done:!1,value:_[c++]}},e:function(f){throw f},f:l}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var y,v=!0,g=!1;return{s:function(){t=t.call(_)},n:function(){var f=t.next();return v=f.done,f},e:function(f){g=!0,y=f},f:function(){try{v||t.return==null||t.return()}finally{if(g)throw y}}}}}}]);