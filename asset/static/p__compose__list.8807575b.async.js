"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8022],{80821:function(b,v,t){t.d(v,{Z:function(){return f}});var T=t(5574),r=t.n(T),g=t(24963),d=t(86738),m=t(28036),j=t(83062),A=t(67294),Z=t(85893);function f(u){var B=(0,A.useState)(!1),o=r()(B,2),R=o[0],s=o[1],c=(0,A.useContext)(g.Z),I=c.lang,P=c.notice,M=c.message,D=function(){s(!0),u.action().then(function(p){if(s(!1),typeof u.onSuccess=="function"&&u.onSuccess(p),u.messageSuccess){var x="";typeof u.messageSuccess=="function"?x=u.messageSuccess(p):x=u.messageSuccess,x=I("notification.finish"),u.asynced?M.info(x):M.success(x)}}).catch(function(p){s(!1),typeof u.onError=="function"&&u.onError(p)})};return u.confirm?(0,Z.jsx)(d.Z,{style:{width:500},title:u.confirmTitle?u.confirmTitle:I("notification.title.tip"),description:u.confirm,onConfirm:D,okText:"Yes",cancelText:"No",children:(0,Z.jsx)(m.ZP,{disabled:u.disabled,icon:u.icon,loading:R,danger:u.danger,type:u.type,children:u.children})}):(0,Z.jsx)(j.Z,{title:u.tips,children:(0,Z.jsx)(m.ZP,{disabled:u.disabled,icon:u.icon,loading:R,onClick:D,danger:u.danger,type:u.type,children:u.children})})}},94359:function(b,v,t){t.d(v,{Z:function(){return R}});var T=t(67294),r=t(3089),g=t(98165),d=t(18429),m=t(8751),j=t(14313),A=t(30159),Z=t(87740),f=t(66309),u=t(83062),B=t(63713),o=t(85893);function R(s){var c=(0,o.jsx)(o.Fragment,{});if(s.status=="0"&&(c=(0,o.jsx)(f.Z,{icon:(0,o.jsx)(r.Z,{}),color:"default",children:"waiting"})),s.status=="10"&&(c=(0,o.jsx)(f.Z,{icon:(0,o.jsx)(g.Z,{spin:!0}),color:"processing",children:"processing"})),s.status=="20"&&(c=(0,o.jsx)(f.Z,{icon:(0,o.jsx)(d.Z,{}),color:"error",children:"error"})),s.status=="30"&&(c=(0,o.jsx)(f.Z,{icon:(0,o.jsx)(m.Z,{}),color:"success",children:"success"})),s.status=="running"||s.status=="healthy"){var I,P;c=(0,o.jsx)(f.Z,{icon:(0,o.jsx)(j.Z,{}),color:"success",children:(I=s.message)!==null&&I!==void 0&&I.showInTag?(P=s.message)===null||P===void 0?void 0:P.content:s.status})}if(s.status=="paused"){var M,D;c=(0,o.jsx)(f.Z,{icon:(0,o.jsx)(A.Z,{}),children:(M=s.message)!==null&&M!==void 0&&M.showInTag?(D=s.message)===null||D===void 0?void 0:D.content:s.status})}if(s.status=="waiting"||s.status=="starting"){var U,p;c=(0,o.jsx)(f.Z,{icon:(0,o.jsx)(Z.Z,{}),children:(U=s.message)!==null&&U!==void 0&&U.showInTag?(p=s.message)===null||p===void 0?void 0:p.content:s.status})}if(s.status=="exited"||s.status=="dead"||s.status=="removing"||s.status=="restarting"||s.status=="unhealthy"||s.status=="created"){var x,L;c=(0,o.jsx)(f.Z,{icon:(0,o.jsx)(d.Z,{}),color:"warning",children:(x=s.message)!==null&&x!==void 0&&x.showInTag?(L=s.message)===null||L===void 0?void 0:L.content:s.status})}if(s.link&&(c=(0,o.jsx)(B.Link,{to:s.link,children:c})),s.message){var _;c=(0,o.jsx)(u.Z,{placement:(_=s.message.placement)!==null&&_!==void 0?_:"top",title:s.message.content,children:c})}return(0,o.jsx)(o.Fragment,{children:c})}},24963:function(b,v,t){var T=t(67294),r=(0,T.createContext)({});v.Z=r},96781:function(b,v,t){var T=t(67294),r=(0,T.createContext)({});v.Z=r},83536:function(b,v,t){t.r(v),t.d(v,{default:function(){return k}});var T=t(15009),r=t.n(T),g=t(99289),d=t.n(g),m=t(80821),j=t(90098),A=t(43425),Z=t(86548),f=t(23430),u=t(90078),B=t(10641),o=t(63713),R=t(28036),s=t(25593),c=t(42075),I=t(96074),P=t(83062),M=t(67294),D=t(96781),U=t(94359),p=t(67255),x=t(93162),L=t(24963),_=t(66309),i=t(85893);function G(C){var w=(0,o.useIntl)(),K=(0,M.useContext)(L.Z),E=K.lang,O;if(!C.type)O=(0,i.jsx)(_.Z,{children:E("compose.type.default")});else switch(C.type){case"remoteUrl":O=(0,i.jsx)(_.Z,{color:"cyan",children:E("compose.type.".concat(C.type))});break;case"serverPath":O=(0,i.jsx)(_.Z,{color:"blue",children:E("compose.type.".concat(C.type))});break;case"storagePath":O=(0,i.jsx)(_.Z,{color:"geekblue",children:E("compose.type.".concat(C.type))});break;case"outPath":O=(0,i.jsx)(_.Z,{color:"yellow",children:E("compose.type.".concat(C.type))});break;case"store":O=(0,i.jsx)(_.Z,{color:"green",children:E("compose.type.".concat(C.type))});break;case"dangling":O=(0,i.jsx)(_.Z,{color:"error",children:E("compose.type.".concat(C.type))});break;default:O=(0,i.jsx)(_.Z,{children:E("compose.type.".concat(C.type))})}return(0,i.jsx)(P.Z,{title:C.tootip,children:O})}function k(){var C=(0,M.useContext)(D.Z),w=C.listTableRef,K=(0,M.useContext)(L.Z),E=K.lang,O=K.notice;return(0,i.jsx)(u._z,{header:{extra:[(0,i.jsx)(o.Link,{to:"/compose/create",reloadDocument:location.search.length>0,children:(0,i.jsx)(R.ZP,{type:"primary",children:"\u521B\u5EFA\u4EFB\u52A1"},"createCompose")},"create")]},children:(0,i.jsx)(B.Z,{scroll:{x:"max-content"},request:function(){var y=d()(r()().mark(function a(n){var l;return r()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,(0,j.pm)({title:n.title,name:n.name});case 2:return l=h.sent,h.abrupt("return",{data:l.data.list,success:!0,total:l.data.list.length});case 4:case"end":return h.stop()}},a)}));return function(a){return y.apply(this,arguments)}}(),rowKey:"name",columns:[{title:"\u6807\u8BC6",dataIndex:"name",width:200,render:function(a,n,l,e,h){return n.setting.type=="dangling"?(0,i.jsx)(s.Z.Link,{onClick:function(){O.info("\u65E0\u6CD5\u627E\u5230\u8BE5\u4EFB\u52A1\u7684 compose.yaml \u6587\u4EF6\uFF0C\u8BF7\u6302\u8F7D\u76F8\u5E94\u7684 compose \u6587\u4EF6\u6216\u662F\u5728\u9762\u677F\u7684 compose \u76EE\u5F55\u6DFB\u52A0\u540C\u6807\u8BC6\u7684\u4EFB\u52A1\u76EE\u5F55\u53CA compose.yaml \u6587\u4EF6")},children:n.name}):(0,i.jsx)(o.Link,{to:"/compose/deploy/"+(n.id||n.name),children:n.name},l)},sorter:function(a,n){return a.name.localeCompare(n.name)},sortDirections:["descend","ascend"]},{title:"\u9879\u76EE\u540D\u79F0",dataIndex:"title",width:200},{title:"\u7C7B\u578B",width:150,search:!1,render:function(a,n,l,e,h){var S;return(0,i.jsx)(G,{tootip:(S=n.setting.uri)!==null&&S!==void 0?S:"",type:n.setting&&n.setting.type?n.setting.type:""})}},{title:"\u5BB9\u5668\u72B6\u6001",dataIndex:"status",search:!1,width:300,render:function(a,n,l,e,h){return(0,i.jsx)(c.Z,{children:n.setting.status.split(", ").map(function(S){var W="running",F=S.indexOf("(");return F>-1?W=S.slice(0,F):W=S,(0,i.jsx)(U.Z,{status:W,message:{content:E("compose.status.".concat(W),{count:S.slice(F+1,S.length-1)}),placement:"top",showInTag:!0}},n.id)})})}},{title:"\u521B\u5EFA\u65F6\u95F4",dataIndex:"",search:!1,width:150,render:function(a,n,l,e,h){return n.setting.createdAt?new Date(n.setting.createdAt).toLocaleString():"-"}},{title:"\u66F4\u65B0\u65F6\u95F4",dataIndex:"",search:!1,width:150,render:function(a,n,l,e,h){return n.setting.updatedAt?new Date(n.setting.updatedAt).toLocaleString():"-"}},{title:"\u64CD\u4F5C",width:80,valueType:"option",key:"option",render:function(a,n,l,e,h){return n.setting.type!="dangling"&&(0,i.jsxs)(c.Z,{split:(0,i.jsx)(I.Z,{type:"vertical"}),children:[(0,i.jsx)(o.Link,{to:"/compose/deploy/"+(n.id||n.name),children:(0,i.jsx)(P.Z,{title:"\u90E8\u7F72",children:(0,i.jsx)(A.Z,{})})},"3"),(0,i.jsx)(o.Link,{to:"/compose/create?id="+(n.id||n.name),children:(0,i.jsx)(P.Z,{title:"\u7F16\u8F91",children:(0,i.jsx)(Z.Z,{})})},"4"),(0,i.jsx)(s.Z.Link,{onClick:d()(r()().mark(function S(){var W,F;return r()().wrap(function(z){for(;;)switch(z.prev=z.next){case 0:return z.next=2,(0,j.d1)({id:n.id||n.name});case 2:W=z.sent,F=new Blob([W],{type:"application/zip"}),(0,x.saveAs)(F,"compose-"+n.name+".zip");case 5:case"end":return z.stop()}},S)})),children:(0,i.jsx)(P.Z,{title:"\u4E0B\u8F7D",children:(0,i.jsx)(f.Z,{})})},"2")]})}}],rowSelection:{defaultSelectedRowKeys:[],alwaysShowAlert:!0,getCheckboxProps:function(a){return{disabled:a.setting.type=="dangling"||a.setting.type=="outPath"}}},tableAlertOptionRender:function(a){var n=a.selectedRows;return(0,i.jsx)(c.Z,{size:16,children:(0,i.jsx)(m.Z,{danger:!0,type:"primary",action:function(){return(0,j.ik)({id:n.map(function(e){return e.id})})},onSuccess:function(){var e,h;return!((e=w.current)===null||e===void 0)&&e.reloadAndRest&&((h=w.current)===null||h===void 0||h.reloadAndRest()),!0},onError:function(){var e,h;return!((e=w.current)===null||e===void 0)&&e.reset&&((h=w.current)===null||h===void 0||h.reset()),!0},messageSuccess:"delete",confirm:(0,i.jsx)(c.Z,{style:{width:280},direction:"vertical",children:(0,i.jsx)(s.Z.Text,{children:"\u5220\u9664\u524D\u8BF7\u5148\u9500\u6BC1\u76F8\u5173\u5BB9\u5668\uFF0C\u786E\u8BA4\u5417\uFF1F"})}),children:"\u6279\u91CF\u5220\u9664"})})},pagination:(0,p.O)(),search:{collapsed:!1},actionRef:w,columnsState:(0,p.j)("compose-list")})})}},90098:function(b,v,t){t.d(v,{CT:function(){return o},GG:function(){return U},MG:function(){return G},Oh:function(){return I},Pn:function(){return u},U_:function(){return _},VN:function(){return x},d1:function(){return O},iE:function(){return K},ik:function(){return s},im:function(){return j},mg:function(){return M},pm:function(){return Z},xC:function(){return C}});var T=t(15009),r=t.n(T),g=t(99289),d=t.n(g),m=t(63713);function j(a){return A.apply(this,arguments)}function A(){return A=d()(r()().mark(function a(n){return r()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,m.request)("/api/app/compose/create",{method:"POST",data:n}));case 1:case"end":return e.stop()}},a)})),A.apply(this,arguments)}function Z(a){return f.apply(this,arguments)}function f(){return f=d()(r()().mark(function a(n){return r()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,m.request)("/api/app/compose/get-list",{method:"POST",data:n}));case 1:case"end":return e.stop()}},a)})),f.apply(this,arguments)}function u(a){return B.apply(this,arguments)}function B(){return B=d()(r()().mark(function a(n){return r()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.id=String(n.id),e.abrupt("return",(0,m.request)("/api/app/compose/get-task",{method:"POST",data:n}));case 2:case"end":return e.stop()}},a)})),B.apply(this,arguments)}function o(a){return R.apply(this,arguments)}function R(){return R=d()(r()().mark(function a(n){return r()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.id=String(n.id),e.abrupt("return",(0,m.request)("/api/app/compose/get-detail",{method:"POST",data:n}));case 2:case"end":return e.stop()}},a)})),R.apply(this,arguments)}function s(a){return c.apply(this,arguments)}function c(){return c=d()(r()().mark(function a(n){return r()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,m.request)("/api/app/compose/delete",{method:"POST",data:n}));case 1:case"end":return e.stop()}},a)})),c.apply(this,arguments)}function I(a){return P.apply(this,arguments)}function P(){return P=d()(r()().mark(function a(n){return r()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.id=String(n.id),e.abrupt("return",(0,m.request)("/api/app/compose/container-deploy",{method:"POST",data:n}));case 2:case"end":return e.stop()}},a)})),P.apply(this,arguments)}function M(a){return D.apply(this,arguments)}function D(){return D=d()(r()().mark(function a(n){return r()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.id=String(n.id),e.abrupt("return",(0,m.request)("/api/app/compose/container-destroy",{method:"POST",data:n}));case 2:case"end":return e.stop()}},a)})),D.apply(this,arguments)}function U(a){return p.apply(this,arguments)}function p(){return p=d()(r()().mark(function a(n){return r()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.id=String(n.id),e.abrupt("return",(0,m.request)("/api/app/compose/container-ctrl",{method:"POST",data:n}));case 2:case"end":return e.stop()}},a)})),p.apply(this,arguments)}function x(a){return L.apply(this,arguments)}function L(){return L=d()(r()().mark(function a(n){return r()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.id=String(n.id),e.abrupt("return",(0,m.request)("/api/app/compose/container-log",{method:"POST",data:n}));case 2:case"end":return e.stop()}},a)})),L.apply(this,arguments)}function _(a){return i.apply(this,arguments)}function i(){return i=d()(r()().mark(function a(n){return r()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,m.request)("/api/app/compose/container-process-kill",{method:"POST",data:n}));case 1:case"end":return e.stop()}},a)})),i.apply(this,arguments)}function G(a){return k.apply(this,arguments)}function k(){return k=d()(r()().mark(function a(n){return r()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,m.request)("/api/app/compose/get-from-uri",{method:"POST",data:n}));case 1:case"end":return e.stop()}},a)})),k.apply(this,arguments)}function C(a){return w.apply(this,arguments)}function w(){return w=d()(r()().mark(function a(n){return r()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,m.request)("/api/app/compose/parse",{method:"POST",data:n}));case 1:case"end":return e.stop()}},a)})),w.apply(this,arguments)}function K(a){return E.apply(this,arguments)}function E(){return E=d()(r()().mark(function a(n){return r()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,m.request)("/api/common/store/deploy",{method:"POST",data:n}));case 1:case"end":return e.stop()}},a)})),E.apply(this,arguments)}function O(a){return y.apply(this,arguments)}function y(){return y=d()(r()().mark(function a(n){return r()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.id=String(n.id),e.abrupt("return",(0,m.request)("/api/app/compose/download",{method:"POST",data:n,responseType:"blob"}));case 2:case"end":return e.stop()}},a)})),y.apply(this,arguments)}},67255:function(b,v,t){t.d(v,{O:function(){return T},j:function(){return r}});function T(){var g=localStorage.getItem("dpanel-pagesize");return g=="all"?!1:{showSizeChanger:!0,defaultPageSize:parseInt(g!=null?g:"20")}}function r(g){var d="dpanel-table-column-".concat(g),m={};if(localStorage.getItem(d)){var j;m=JSON.parse((j=localStorage.getItem(d))!==null&&j!==void 0?j:"{}")}return{defaultValue:m,onChange:function(Z){localStorage.setItem("dpanel-table-column-".concat(g),JSON.stringify(Z))}}}}}]);