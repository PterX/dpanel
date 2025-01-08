"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8022],{80821:function(K,g,t){t.d(g,{Z:function(){return h}});var x=t(5574),r=t.n(x),_=t(24963),l=t(86738),m=t(28036),E=t(83062),R=t(67294),T=t(85893);function h(u){var W=(0,R.useState)(!1),i=r()(W,2),L=i[0],a=i[1],c=(0,R.useContext)(_.Z),S=c.lang,y=c.notice,D=c.message,M=function(){a(!0),u.action().then(function(v){if(a(!1),typeof u.onSuccess=="function"&&u.onSuccess(v),u.messageSuccess){var p="";typeof u.messageSuccess=="function"?p=u.messageSuccess(v):p=u.messageSuccess,p=S("notification.".concat(p))+S("notification.title.success"),u.asynced?D.info(p):D.success(p)}}).catch(function(v){a(!1),typeof u.onError=="function"&&u.onError(v)})};return u.confirm?(0,T.jsx)(l.Z,{style:{width:500},title:u.confirmTitle?u.confirmTitle:S("notification.title.tip"),description:u.confirm,onConfirm:M,okText:"Yes",cancelText:"No",children:(0,T.jsx)(m.ZP,{disabled:u.disabled,icon:u.icon,loading:L,danger:u.danger,type:u.type,children:u.children})}):(0,T.jsx)(E.Z,{title:u.tips,children:(0,T.jsx)(m.ZP,{disabled:u.disabled,icon:u.icon,loading:L,onClick:M,danger:u.danger,type:u.type,children:u.children})})}},94359:function(K,g,t){t.d(g,{Z:function(){return L}});var x=t(67294),r=t(3089),_=t(98165),l=t(18429),m=t(8751),E=t(14313),R=t(30159),T=t(87740),h=t(66309),u=t(83062),W=t(63713),i=t(85893);function L(a){var c=(0,i.jsx)(i.Fragment,{});if(a.status=="0"&&(c=(0,i.jsx)(h.Z,{icon:(0,i.jsx)(r.Z,{}),color:"default",children:"waiting"})),a.status=="10"&&(c=(0,i.jsx)(h.Z,{icon:(0,i.jsx)(_.Z,{spin:!0}),color:"processing",children:"processing"})),a.status=="20"&&(c=(0,i.jsx)(h.Z,{icon:(0,i.jsx)(l.Z,{}),color:"error",children:"error"})),a.status=="30"&&(c=(0,i.jsx)(h.Z,{icon:(0,i.jsx)(m.Z,{}),color:"success",children:"success"})),a.status=="running"||a.status=="healthy"){var S,y;c=(0,i.jsx)(h.Z,{icon:(0,i.jsx)(E.Z,{}),color:"success",children:(S=a.message)!==null&&S!==void 0&&S.showInTag?(y=a.message)===null||y===void 0?void 0:y.content:a.status})}if(a.status=="paused"){var D,M;c=(0,i.jsx)(h.Z,{icon:(0,i.jsx)(R.Z,{}),children:(D=a.message)!==null&&D!==void 0&&D.showInTag?(M=a.message)===null||M===void 0?void 0:M.content:a.status})}if(a.status=="waiting"||a.status=="starting"){var w,v;c=(0,i.jsx)(h.Z,{icon:(0,i.jsx)(T.Z,{}),children:(w=a.message)!==null&&w!==void 0&&w.showInTag?(v=a.message)===null||v===void 0?void 0:v.content:a.status})}if(a.status=="exited"||a.status=="dead"||a.status=="removing"||a.status=="restarting"||a.status=="unhealthy"||a.status=="created"){var p,I;c=(0,i.jsx)(h.Z,{icon:(0,i.jsx)(l.Z,{}),color:"warning",children:(p=a.message)!==null&&p!==void 0&&p.showInTag?(I=a.message)===null||I===void 0?void 0:I.content:a.status})}if(a.link&&(c=(0,i.jsx)(W.Link,{to:a.link,children:c})),a.message){var P;c=(0,i.jsx)(u.Z,{placement:(P=a.message.placement)!==null&&P!==void 0?P:"top",title:a.message.content,children:c})}return(0,i.jsx)(i.Fragment,{children:c})}},24963:function(K,g,t){var x=t(67294),r=(0,x.createContext)({});g.Z=r},96781:function(K,g,t){var x=t(67294),r=(0,x.createContext)({});g.Z=r},83536:function(K,g,t){t.r(g),t.d(g,{default:function(){return k}});var x=t(15009),r=t.n(x),_=t(99289),l=t.n(_),m=t(80821),E=t(90098),R=t(43425),T=t(86548),h=t(23430),u=t(90078),W=t(10641),i=t(63713),L=t(28036),a=t(25593),c=t(42075),S=t(96074),y=t(83062),D=t(67294),M=t(96781),w=t(94359),v=t(67255),p=t(93162),I=t(24963),P=t(66309),s=t(85893);function z(j){var B=(0,i.useIntl)(),b=(0,D.useContext)(I.Z),O=b.lang,n;if(!j.type)n=(0,s.jsx)(P.Z,{children:O("compose.type.default")});else switch(j.type){case"remoteUrl":n=(0,s.jsx)(P.Z,{color:"cyan",children:O("compose.type.".concat(j.type))});break;case"serverPath":n=(0,s.jsx)(P.Z,{color:"blue",children:O("compose.type.".concat(j.type))});break;case"storagePath":n=(0,s.jsx)(P.Z,{color:"geekblue",children:O("compose.type.".concat(j.type))});break;case"outPath":n=(0,s.jsx)(P.Z,{color:"yellow",children:O("compose.type.".concat(j.type))});break;case"store":n=(0,s.jsx)(P.Z,{color:"green",children:O("compose.type.".concat(j.type))});break;default:n=(0,s.jsx)(P.Z,{children:O("compose.type.".concat(j.type))})}return(0,s.jsx)(y.Z,{title:j.tootip,children:n})}function k(){var j=(0,D.useContext)(M.Z),B=j.listTableRef,b=(0,D.useContext)(I.Z),O=b.lang,n=b.notice;return(0,s.jsx)(u._z,{header:{extra:[(0,s.jsx)(i.Link,{to:"/compose/create",reloadDocument:location.search.length>0,children:(0,s.jsx)(L.ZP,{type:"primary",children:"\u521B\u5EFA\u4EFB\u52A1"},"createCompose")},"create")]},children:(0,s.jsx)(W.Z,{scroll:{x:"max-content"},request:function(){var o=l()(r()().mark(function d(e){var A;return r()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,(0,E.pm)({title:e.title,name:e.name});case 2:return A=f.sent,f.abrupt("return",{data:A.data.list,success:!0,total:A.data.list.length});case 4:case"end":return f.stop()}},d)}));return function(d){return o.apply(this,arguments)}}(),rowKey:"name",columns:[{title:"\u6807\u8BC6",dataIndex:"name",width:200,render:function(d,e,A,C,f){return e.setting.type=="outPath"?(0,s.jsx)(a.Z.Link,{onClick:function(){n.info("\u5916\u90E8\u4EFB\u52A1\u65E0\u7BA1\u7406\u6743\u9650\uFF0C\u8BF7\u5728\u9762\u677F compose \u76EE\u5F55\u6DFB\u52A0\u540C\u6807\u8BC6\u7684\u4EFB\u52A1\u76EE\u5F55\u53CA compose.yaml \u6587\u4EF6")},children:e.name}):(0,s.jsx)(i.Link,{to:"/compose/deploy/"+e.id,children:e.name},A)},sorter:function(d,e){return d.name.toLowerCase()>e.name.toLowerCase()}},{title:"\u9879\u76EE\u540D\u79F0",dataIndex:"title",width:200},{title:"\u7C7B\u578B",width:150,search:!1,render:function(d,e,A,C,f){var Z;return(0,s.jsx)(z,{tootip:(Z=e.setting.uri)!==null&&Z!==void 0?Z:"",type:e.setting&&e.setting.type?e.setting.type:""})}},{title:"\u5BB9\u5668\u72B6\u6001",dataIndex:"status",search:!1,width:300,render:function(d,e,A,C,f){return(0,s.jsx)(c.Z,{children:e.setting.status.split(", ").map(function(Z){var U="running",F=Z.indexOf("(");return F>-1?U=Z.slice(0,F):U=Z,(0,s.jsx)(w.Z,{status:U,message:{content:O("compose.status.".concat(U),{count:Z.slice(F+1,Z.length-1)}),placement:"top",showInTag:!0}},e.id)})})}},{title:"\u64CD\u4F5C",width:80,valueType:"option",key:"option",render:function(d,e,A,C,f){return e.setting.type!="outPath"&&(0,s.jsxs)(c.Z,{split:(0,s.jsx)(S.Z,{type:"vertical"}),children:[(0,s.jsx)(i.Link,{to:"/compose/deploy/"+e.id,children:(0,s.jsx)(y.Z,{title:"\u90E8\u7F72",children:(0,s.jsx)(R.Z,{})})},"3"),(0,s.jsx)(i.Link,{to:"/compose/create?id="+e.id,children:(0,s.jsx)(y.Z,{title:"\u7F16\u8F91",children:(0,s.jsx)(T.Z,{})})},"4"),(0,s.jsx)(a.Z.Link,{onClick:l()(r()().mark(function Z(){var U,F;return r()().wrap(function(G){for(;;)switch(G.prev=G.next){case 0:return G.next=2,(0,E.Pn)({id:e.id});case 2:U=G.sent,U&&U.data&&U.data.detail&&(F=new Blob([U.data.detail.yaml],{type:"text/plain"}),(0,p.saveAs)(F,e.name+"-compose.yaml"));case 4:case"end":return G.stop()}},Z)})),children:(0,s.jsx)(y.Z,{title:"\u4E0B\u8F7D",children:(0,s.jsx)(h.Z,{})})},"2")]})}}],rowSelection:{defaultSelectedRowKeys:[],alwaysShowAlert:!0,getCheckboxProps:function(d){return{disabled:d.setting.type=="outPath"}}},tableAlertOptionRender:function(d){var e=d.selectedRows;return(0,s.jsx)(c.Z,{size:16,children:(0,s.jsx)(m.Z,{danger:!0,type:"primary",action:function(){return(0,E.ik)({id:e.map(function(C){return C.id})})},onSuccess:function(){var C,f;return!((C=B.current)===null||C===void 0)&&C.reloadAndRest&&((f=B.current)===null||f===void 0||f.reloadAndRest()),!0},onError:function(){var C,f;return!((C=B.current)===null||C===void 0)&&C.reset&&((f=B.current)===null||f===void 0||f.reset()),!0},messageSuccess:"delete",confirm:(0,s.jsx)(c.Z,{style:{width:280},direction:"vertical",children:(0,s.jsx)(a.Z.Text,{children:"\u5220\u9664\u524D\u8BF7\u5148\u9500\u6BC1\u76F8\u5173\u5BB9\u5668\uFF0C\u786E\u8BA4\u5417\uFF1F"})}),children:"\u6279\u91CF\u5220\u9664"})})},pagination:(0,v.O)(),search:{collapsed:!1},actionRef:B,columnsState:(0,v.j)("compose-list")})})}},90098:function(K,g,t){t.d(g,{CT:function(){return i},GG:function(){return w},MG:function(){return z},Oh:function(){return S},Pn:function(){return u},U_:function(){return P},VN:function(){return p},iE:function(){return b},ik:function(){return a},im:function(){return E},mg:function(){return D},pm:function(){return T},xC:function(){return j}});var x=t(15009),r=t.n(x),_=t(99289),l=t.n(_),m=t(63713);function E(n){return R.apply(this,arguments)}function R(){return R=l()(r()().mark(function n(o){return r()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,m.request)("/api/app/compose/create",{method:"POST",data:o}));case 1:case"end":return e.stop()}},n)})),R.apply(this,arguments)}function T(n){return h.apply(this,arguments)}function h(){return h=l()(r()().mark(function n(o){return r()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,m.request)("/api/app/compose/get-list",{method:"POST",data:o}));case 1:case"end":return e.stop()}},n)})),h.apply(this,arguments)}function u(n){return W.apply(this,arguments)}function W(){return W=l()(r()().mark(function n(o){return r()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,m.request)("/api/app/compose/get-task",{method:"POST",data:o}));case 1:case"end":return e.stop()}},n)})),W.apply(this,arguments)}function i(n){return L.apply(this,arguments)}function L(){return L=l()(r()().mark(function n(o){return r()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,m.request)("/api/app/compose/get-detail",{method:"POST",data:o}));case 1:case"end":return e.stop()}},n)})),L.apply(this,arguments)}function a(n){return c.apply(this,arguments)}function c(){return c=l()(r()().mark(function n(o){return r()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,m.request)("/api/app/compose/delete",{method:"POST",data:o}));case 1:case"end":return e.stop()}},n)})),c.apply(this,arguments)}function S(n){return y.apply(this,arguments)}function y(){return y=l()(r()().mark(function n(o){return r()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,m.request)("/api/app/compose/container-deploy",{method:"POST",data:o}));case 1:case"end":return e.stop()}},n)})),y.apply(this,arguments)}function D(n){return M.apply(this,arguments)}function M(){return M=l()(r()().mark(function n(o){return r()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,m.request)("/api/app/compose/container-destroy",{method:"POST",data:o}));case 1:case"end":return e.stop()}},n)})),M.apply(this,arguments)}function w(n){return v.apply(this,arguments)}function v(){return v=l()(r()().mark(function n(o){return r()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,m.request)("/api/app/compose/container-ctrl",{method:"POST",data:o}));case 1:case"end":return e.stop()}},n)})),v.apply(this,arguments)}function p(n){return I.apply(this,arguments)}function I(){return I=l()(r()().mark(function n(o){return r()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,m.request)("/api/app/compose/container-log",{method:"POST",data:o}));case 1:case"end":return e.stop()}},n)})),I.apply(this,arguments)}function P(n){return s.apply(this,arguments)}function s(){return s=l()(r()().mark(function n(o){return r()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,m.request)("/api/app/compose/container-process-kill",{method:"POST",data:o}));case 1:case"end":return e.stop()}},n)})),s.apply(this,arguments)}function z(n){return k.apply(this,arguments)}function k(){return k=l()(r()().mark(function n(o){return r()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,m.request)("/api/app/compose/get-from-uri",{method:"POST",data:o}));case 1:case"end":return e.stop()}},n)})),k.apply(this,arguments)}function j(n){return B.apply(this,arguments)}function B(){return B=l()(r()().mark(function n(o){return r()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,m.request)("/api/app/compose/parse",{method:"POST",data:o}));case 1:case"end":return e.stop()}},n)})),B.apply(this,arguments)}function b(n){return O.apply(this,arguments)}function O(){return O=l()(r()().mark(function n(o){return r()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,m.request)("/api/common/store/deploy",{method:"POST",data:o}));case 1:case"end":return e.stop()}},n)})),O.apply(this,arguments)}},67255:function(K,g,t){t.d(g,{O:function(){return x},j:function(){return r}});function x(){var _,l=parseInt((_=localStorage.getItem("dpanel-pagesize"))!==null&&_!==void 0?_:"0");return{showSizeChanger:!0,defaultPageSize:l!=null?l:20}}function r(_){var l="dpanel-table-column-".concat(_),m={};if(localStorage.getItem(l)){var E;m=JSON.parse((E=localStorage.getItem(l))!==null&&E!==void 0?E:"{}")}return{defaultValue:m,onChange:function(T){localStorage.setItem("dpanel-table-column-".concat(_),JSON.stringify(T))}}}}}]);