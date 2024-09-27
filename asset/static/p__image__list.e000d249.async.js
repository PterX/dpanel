"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4214],{5966:function(ae,W,e){var v=e(97685),s=e(1413),O=e(45987),y=e(21770),S=e(72723),D=e(55241),I=e(97435),K=e(67294),M=e(73406),i=e(85893),z=["fieldProps","proFieldProps"],o=["fieldProps","proFieldProps"],T="text",p=function(g){var c=g.fieldProps,B=g.proFieldProps,j=(0,O.Z)(g,z);return(0,i.jsx)(M.Z,(0,s.Z)({valueType:T,fieldProps:c,filedConfig:{valueType:T},proFieldProps:B},j))},E=function(g){var c=(0,y.Z)(g.open||!1,{value:g.open,onChange:g.onOpenChange}),B=(0,v.Z)(c,2),j=B[0],U=B[1];return(0,i.jsx)(S.Z.Item,{shouldUpdate:!0,noStyle:!0,children:function(X){var $,re=X.getFieldValue(g.name||[]);return(0,i.jsx)(D.Z,(0,s.Z)((0,s.Z)({getPopupContainer:function(F){return F&&F.parentNode?F.parentNode:F},onOpenChange:function(F){return U(F)},content:(0,i.jsxs)("div",{style:{padding:"4px 0"},children:[($=g.statusRender)===null||$===void 0?void 0:$.call(g,re),g.strengthText?(0,i.jsx)("div",{style:{marginTop:10},children:(0,i.jsx)("span",{children:g.strengthText})}):null]}),overlayStyle:{width:240},placement:"rightTop"},g.popoverProps),{},{open:j,children:g.children}))}})},_=function(g){var c=g.fieldProps,B=g.proFieldProps,j=(0,O.Z)(g,o),U=(0,K.useState)(!1),N=(0,v.Z)(U,2),X=N[0],$=N[1];return c!=null&&c.statusRender&&j.name?(0,i.jsx)(E,{name:j.name,statusRender:c==null?void 0:c.statusRender,popoverProps:c==null?void 0:c.popoverProps,strengthText:c==null?void 0:c.strengthText,open:X,onOpenChange:$,children:(0,i.jsx)("div",{children:(0,i.jsx)(M.Z,(0,s.Z)({valueType:"password",fieldProps:(0,s.Z)((0,s.Z)({},(0,I.Z)(c,["statusRender","popoverProps","strengthText"])),{},{onBlur:function(q){var F;c==null||(F=c.onBlur)===null||F===void 0||F.call(c,q),$(!1)},onClick:function(q){var F;c==null||(F=c.onClick)===null||F===void 0||F.call(c,q),$(!0)}}),proFieldProps:B,filedConfig:{valueType:T}},j))})}):(0,i.jsx)(M.Z,(0,s.Z)({valueType:"password",fieldProps:c,proFieldProps:B,filedConfig:{valueType:T}},j))},l=p;l.Password=_,l.displayName="ProFormComponent",W.Z=l},80821:function(ae,W,e){e.d(W,{Z:function(){return z}});var v=e(5574),s=e.n(v),O=e(93246),y=e(54006),S=e(31418),D=e(86738),I=e(14726),K=e(83062),M=e(67294),i=e(85893);function z(o){var T=(0,M.useState)(!1),p=s()(T,2),E=p[0],_=p[1],l=S.Z.useApp(),H=(0,y.useIntl)(),g=function(){_(!0),o.action().then(function(B){if(_(!1),typeof o.onSuccess=="function"&&o.onSuccess(B),o.messageSuccess){var j="";typeof o.messageSuccess=="function"?j=o.messageSuccess(B):j=o.messageSuccess,j.indexOf(".")>-1&&(j=H.formatMessage({id:j})),o.asynced?(0,O.Rk)(l,j):(0,O.$h)(l,j)}}).catch(function(B){_(!1),typeof o.onError=="function"&&o.onError(B)})};return o.confirm?(0,i.jsx)(D.Z,{style:{width:500},title:"\u63D0\u793A",description:o.confirm,onConfirm:g,okText:"Yes",cancelText:"No",children:(0,i.jsx)(I.ZP,{disabled:o.disabled,icon:o.icon,loading:E,danger:o.danger,type:o.type,children:o.children})}):(0,i.jsx)(K.Z,{title:o.tips,children:(0,i.jsx)(I.ZP,{disabled:o.disabled,icon:o.icon,loading:E,onClick:g,danger:o.danger,type:o.type,children:o.children})})}},96042:function(ae,W,e){e.d(W,{Z:function(){return M}});var v=e(97857),s=e.n(v),O=e(5574),y=e.n(O),S=e(75870),D=e(34041),I=e(67294),K=e(85893);function M(i){var z=(0,I.useState)([]),o=y()(z,2),T=o[0],p=o[1];(0,I.useEffect)(function(){(0,S.Ot)().then(function(_){_&&p(_.data.list)})},[]);var E={};return i.multiple&&(E.mode="multiple"),i.top&&(E.placement="topLeft"),(0,K.jsx)(D.Z,s()({onChange:function(l){if(i.multiple){var H=l.map(function(g){return T[g]});i.onChangeList&&i.onChangeList(H)}else i.onChange&&i.onChange(T[l])},placeholder:"\u9009\u62E9\u955C\u50CF\u4ED3\u5E93\uFF0C\u672C\u5730\u4F7F\u7528\u7559\u7A7A\u5373\u53EF",options:T.map(function(_,l){return{value:l,label:_.title+"("+_.serverAddress+")"}})},E))}},31810:function(ae,W,e){e.r(W),e.d(W,{default:function(){return Q}});var v=e(15009),s=e.n(v),O=e(99289),y=e.n(O),S=e(5574),D=e.n(S),I=e(90078),K=e(10641),M=e(37476),i=e(62370),z=e(5966),o=e(31418),T=e(14726),p=e(46464),E=e(42075),_=e(66309),l=e(96074),H=e(83062),g=e(72723),c=e(25278),B=e(84567),j=e(50136),U=e(67294),N=e(54006),X=e(18148),$=e(5251),re=e(80821),q=e(43425),F=e(87462),ce=e(3803),he=e(84089),t=function(C,te){return U.createElement(he.Z,(0,F.Z)({},C,{ref:te,icon:ce.Z}))},d=U.forwardRef(t),P=d,a=e(93246),u=e(28307),G=e(96042),b=e(67255),n=e(85893);function Q(){var ee=(0,N.useParams)(),C=(0,U.useRef)(),te=(0,U.useState)({force:!1}),w=D()(te,2),ue=w[0],ie=w[1],J=(0,U.useState)([]),le=D()(J,2),oe=le[0],pe=le[1],de=o.Z.useApp(),fe=(0,U.useState)(1),se=D()(fe,2),me=se[0],V=se[1],ve=(0,U.useRef)();return(0,U.useEffect)(function(){var R;(R=C.current)===null||R===void 0||R.reload(),(0,X.Xn)({page:1,pageSize:9999,all:!0}).then(function(f){return pe(f.data.list),!0})},[ee,me]),(0,n.jsx)(I._z,{header:{extra:[(0,n.jsx)(T.ZP,{type:"primary",children:(0,n.jsx)(N.Link,{to:"/image/create",children:"\u6784\u5EFA\u955C\u50CF"})},"create"),(0,n.jsx)(u.Z,{onFinish:function(){var f,r;!((f=C.current)===null||f===void 0)&&f.reloadAndRest&&((r=C.current)===null||r===void 0||r.reloadAndRest())}},"remote")]},children:(0,n.jsx)(K.Z,{scroll:{x:"max-content"},rowKey:"Id",columns:[{title:"\u540D\u79F0",dataIndex:"title",render:function(f,r,A,L,m){var h=r.Id.substring(7,19);return oe.map(function(x){r.RepoTags.map(function(k){k==x.tag&&(h=x.title)})}),(0,n.jsx)(p.Z.Text,{editable:{tooltip:"\u4FEE\u6539\u955C\u50CF\u5907\u6CE8\u540D\u79F0",onChange:function(){var x=y()(s()().mark(function Y(ge){var Z;return s()().wrap(function(ne){for(;;)switch(ne.prev=ne.next){case 0:return ne.next=2,(0,X.Fj)({tag:r.RepoTags[0],title:ge});case 2:Z=ne.sent,V(me+1),(0,a.$h)(de,"\u4FEE\u6539\u955C\u50CF\u540D\u79F0\u6210\u529F");case 5:case"end":return ne.stop()}},Y)}));function k(Y){return x.apply(this,arguments)}return k}()},children:h?(0,n.jsx)(N.Link,{to:"/image/detail/"+r.Id,children:h},"edit"):"---"})}},{title:"Tag",dataIndex:"tag",render:function(f,r,A,L){return(0,n.jsx)(E.Z,{direction:"vertical",style:{textAlign:"left"},children:r.RepoTags.map(function(m,h){return(0,n.jsxs)(E.Z,{children:[(0,n.jsx)(_.Z,{color:"#2db7f5",children:(0,n.jsx)(p.Z.Text,{copyable:!0,style:{color:"#ffffff",maxWidth:"300px"},ellipsis:!0,title:m,children:m},h)},h),r.Containers>0&&(0,n.jsx)(_.Z,{color:"cyan",children:"\u4F7F\u7528\u4E2D"})]})})},r.Id)}},{title:"\u5C3A\u5BF8",dataIndex:"size",ellipsis:!0,width:"120px",search:!1,sorter:function(f,r){return f.Size-r.Size},render:function(f,r,A,L){return(0,n.jsx)("div",{children:(0,$.FI)(parseFloat(r.Size))},r.Id)}},{title:"\u521B\u5EFA\u65E5\u671F",dataIndex:"Created",ellipsis:!0,search:!1,width:"180px",render:function(f,r,A,L){return(0,n.jsx)("div",{children:(0,$.ZM)(r.Created*1e3)},r.Id)},sorter:function(f,r){return f.Created-r.Created}},{title:"\u64CD\u4F5C",valueType:"option",key:"option",width:"150px",render:function(f,r,A,L){return(0,n.jsxs)(E.Z,{split:(0,n.jsx)(l.Z,{type:"vertical"}),children:[(0,n.jsx)(N.Link,{to:"/image/detail/"+r.Id,children:(0,n.jsx)(H.Z,{title:"\u7BA1\u7406",children:(0,n.jsx)(q.Z,{})})},"edit"),(0,n.jsx)(N.Link,{to:"/app/create/image?imageId="+r.Id,children:(0,n.jsx)(H.Z,{title:"\u521B\u5EFA\u5BB9\u5668",children:(0,n.jsx)(P,{})})},"create")]})}}],request:function(){var R=y()(s()().mark(function f(r,A,L){var m;return s()().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return x.next=2,(0,X.KG)({tag:r.tag,title:r.title});case 2:if(m=x.sent,!(!m||!m.data||!m.data.list)){x.next=5;break}return x.abrupt("return",{data:[],success:!0,total:0});case 5:return x.abrupt("return",{data:m.data.list,success:!0,total:m.data.list.length});case 6:case"end":return x.stop()}},f)}));return function(f,r,A){return R.apply(this,arguments)}}(),pagination:(0,b.O)(),search:{collapsed:!1},rowSelection:{defaultSelectedRowKeys:[],alwaysShowAlert:!0},actionRef:C,tableAlertOptionRender:function(f){var r=f.selectedRowKeys,A=f.selectedRows;return(0,n.jsxs)(E.Z,{size:16,children:[(0,n.jsxs)(M.Y,{formRef:ve,title:"\u6279\u91CF\u63A8\u9001\u955C\u50CF",trigger:(0,n.jsx)(T.ZP,{children:"\u6279\u91CF\u63A8\u9001"}),onFinish:function(){var L=y()(s()().mark(function m(h){var x,k,Y;return s()().wrap(function(Z){for(;;)switch(Z.prev=Z.next){case 0:return Z.next=2,(0,X.KX)({md5:r,registryId:h.registryId,newNamespace:h.newNamespace});case 2:return Y=Z.sent,(x=C.current)===null||x===void 0||x.reload(),!((k=C.current)===null||k===void 0)&&k.clearSelected&&C.current.clearSelected(),Z.abrupt("return",!0);case 6:case"end":return Z.stop()}},m)}));return function(m){return L.apply(this,arguments)}}(),children:[(0,n.jsx)(g.Z.List,{name:"registryId",children:function(m){return m.map(function(h,x){return console.log(h),(0,n.jsx)(c.Z,{hidden:!0},x)})}}),(0,n.jsx)(i.Z,{label:"\u955C\u50CF\u4ED3\u5E93",name:"imageRespo",tooltip:(0,n.jsxs)(n.Fragment,{children:["\u63A8\u9001\u524D\u8BF7\u4FDD\u8BC1\u4ED3\u5E93\u4E2D\u6709\u6307\u5B9A\u7684\u547D\u540D\u7A7A\u95F4, \u5982\u6CA1\u6709\u8BF7\u5148 ",(0,n.jsx)("a",{href:"",target:"_blank",children:"\u6DFB\u52A0\u4ED3\u5E93"})]}),children:(0,n.jsx)(G.Z,{multiple:!0,top:!0,onChangeList:function(m){var h;(h=ve.current)===null||h===void 0||h.setFieldValue("registryId",m.map(function(x){return x.id}))}})}),(0,n.jsx)(z.Z,{tooltip:"\u53EF\u4EE5\u901A\u8FC7\u6B64\u9879\u91CD\u65B0\u5B9A\u4E49\u547D\u540D\u7A7A\u95F4\uFF0Cdocker hub \u4E0D\u53D7\u8BE5\u914D\u7F6E\u7684\u5F71\u54CD\u3002 \u914D\u7F6E\u6B64\u9879\u540E mysql:latest \u4F1A\u63A8\u9001\u81F3 {\u547D\u540D\u7A7A\u95F4}/mysql:latest\uFF0C dpanel/dpanel:latest \u4F1A\u63A8\u9001\u81F3 {\u547D\u540D\u7A7A\u95F4}/dpanel:latest",label:"\u91CD\u5199\u975E\u5B98\u65B9\u4ED3\u5E93\u547D\u540D\u7A7A\u95F4",name:"newNamespace"})]}),(0,n.jsx)(re.Z,{danger:!0,type:"primary",action:function(){return(0,X.ao)({md5:r,force:ue.force})},onSuccess:function(){var m,h;return!((m=C.current)===null||m===void 0)&&m.reloadAndRest&&((h=C.current)===null||h===void 0||h.reloadAndRest()),!0},onError:function(){var m,h;return!((m=C.current)===null||m===void 0)&&m.reset&&((h=C.current)===null||h===void 0||h.reset()),!0},messageSuccess:"\u5220\u9664\u6210\u529F",confirm:(0,n.jsxs)(E.Z,{style:{width:280},direction:"vertical",children:[(0,n.jsx)(p.Z.Text,{children:"\u5220\u9664\u955C\u50CF\u540E\u65E0\u6CD5\u6062\u590D,\u786E\u8BA4\u5417\uFF1F"}),(0,n.jsx)(B.Z,{name:"deleteVolume",onChange:function(m){return ie({force:m.target.checked})},children:"\u5F3A\u5236\u5220\u9664\uFF1F"})]}),children:"\u6279\u91CF\u5220\u9664"})]})},tableExtraRender:function(){var f;return(0,n.jsx)(j.Z,{mode:"horizontal",selectedKeys:[(f=ee.type)!==null&&f!==void 0?f:"all"],items:[{label:(0,n.jsx)(N.Link,{to:"/image/list/all",replace:!0,children:"\u5168\u90E8\u955C\u50CF"}),key:"all"},{label:(0,n.jsx)(N.Link,{to:"/image/list/build",replace:!0,children:"\u6784\u5EFA\u4EFB\u52A1"}),key:"build"}]})},toolBarRender:function(){return[(0,n.jsx)(re.Z,{action:function(){return(0,X.c7)()},onSuccess:function(){var r,A;return!((r=C.current)===null||r===void 0)&&r.reloadAndRest&&((A=C.current)===null||A===void 0||A.reloadAndRest()),!0},onError:function(){var r,A;return!((r=C.current)===null||r===void 0)&&r.reset&&((A=C.current)===null||A===void 0||A.reset()),!0},messageSuccess:"\u6E05\u9664\u6210\u529F",confirm:"\u662F\u5426\u6E05\u7406\u672A\u4F7F\u7528\u6216\u662F\u672A\u8FD0\u884C\u7684\u955C\u50CF",children:"\u6E05\u7406\u672A\u4F7F\u7528\u955C\u50CF"})]},columnsState:(0,b.j)("image-list")})})}},75870:function(ae,W,e){e.d(W,{Ot:function(){return D},ZH:function(){return K},ix:function(){return i},t1:function(){return o}});var v=e(15009),s=e.n(v),O=e(99289),y=e.n(O),S=e(54006);function D(p){return I.apply(this,arguments)}function I(){return I=y()(s()().mark(function p(E){return s()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.abrupt("return",(0,S.request)("/api/common/registry/get-list",{method:"POST",data:E}));case 1:case"end":return l.stop()}},p)})),I.apply(this,arguments)}function K(p){return M.apply(this,arguments)}function M(){return M=y()(s()().mark(function p(E){return s()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.abrupt("return",(0,S.request)("/api/common/registry/create",{method:"POST",data:E}));case 1:case"end":return l.stop()}},p)})),M.apply(this,arguments)}function i(p){return z.apply(this,arguments)}function z(){return z=y()(s()().mark(function p(E){return s()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.abrupt("return",(0,S.request)("/api/common/registry/delete",{method:"POST",data:E}));case 1:case"end":return l.stop()}},p)})),z.apply(this,arguments)}function o(p){return T.apply(this,arguments)}function T(){return T=y()(s()().mark(function p(E){return s()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.abrupt("return",(0,S.request)("/api/common/registry/get-detail",{method:"POST",data:E}));case 1:case"end":return l.stop()}},p)})),T.apply(this,arguments)}},67255:function(ae,W,e){e.d(W,{O:function(){return v},j:function(){return s}});function v(){var O,y=parseInt((O=localStorage.getItem("dpanel-pagesize"))!==null&&O!==void 0?O:"0");return{showSizeChanger:!0,defaultPageSize:y!=null?y:20}}function s(O){var y="dpanel-table-column-".concat(O),S={};if(localStorage.getItem(y)){var D;S=JSON.parse((D=localStorage.getItem(y))!==null&&D!==void 0?D:"{}")}return{defaultValue:S,onChange:function(K){localStorage.setItem("dpanel-table-column-".concat(O),JSON.stringify(K))}}}},66309:function(ae,W,e){e.d(W,{Z:function(){return he}});var v=e(67294),s=e(93967),O=e.n(s),y=e(98423),S=e(98787),D=e(69760),I=e(96159),K=e(45353),M=e(53124),i=e(11568),z=e(10274),o=e(14747),T=e(83262),p=e(83559);const E=t=>{const{paddingXXS:d,lineWidth:P,tagPaddingHorizontal:a,componentCls:u,calc:G}=t,b=G(a).sub(P).equal(),n=G(d).sub(P).equal();return{[u]:Object.assign(Object.assign({},(0,o.Wf)(t)),{display:"inline-block",height:"auto",marginInlineEnd:t.marginXS,paddingInline:b,fontSize:t.tagFontSize,lineHeight:t.tagLineHeight,whiteSpace:"nowrap",background:t.defaultBg,border:`${(0,i.bf)(t.lineWidth)} ${t.lineType} ${t.colorBorder}`,borderRadius:t.borderRadiusSM,opacity:1,transition:`all ${t.motionDurationMid}`,textAlign:"start",position:"relative",[`&${u}-rtl`]:{direction:"rtl"},"&, a, a:hover":{color:t.defaultColor},[`${u}-close-icon`]:{marginInlineStart:n,fontSize:t.tagIconSize,color:t.colorTextDescription,cursor:"pointer",transition:`all ${t.motionDurationMid}`,"&:hover":{color:t.colorTextHeading}},[`&${u}-has-color`]:{borderColor:"transparent",[`&, a, a:hover, ${t.iconCls}-close, ${t.iconCls}-close:hover`]:{color:t.colorTextLightSolid}},"&-checkable":{backgroundColor:"transparent",borderColor:"transparent",cursor:"pointer",[`&:not(${u}-checkable-checked):hover`]:{color:t.colorPrimary,backgroundColor:t.colorFillSecondary},"&:active, &-checked":{color:t.colorTextLightSolid},"&-checked":{backgroundColor:t.colorPrimary,"&:hover":{backgroundColor:t.colorPrimaryHover}},"&:active":{backgroundColor:t.colorPrimaryActive}},"&-hidden":{display:"none"},[`> ${t.iconCls} + span, > span + ${t.iconCls}`]:{marginInlineStart:b}}),[`${u}-borderless`]:{borderColor:"transparent",background:t.tagBorderlessBg}}},_=t=>{const{lineWidth:d,fontSizeIcon:P,calc:a}=t,u=t.fontSizeSM;return(0,T.IX)(t,{tagFontSize:u,tagLineHeight:(0,i.bf)(a(t.lineHeightSM).mul(u).equal()),tagIconSize:a(P).sub(a(d).mul(2)).equal(),tagPaddingHorizontal:8,tagBorderlessBg:t.defaultBg})},l=t=>({defaultBg:new z.C(t.colorFillQuaternary).onBackground(t.colorBgContainer).toHexString(),defaultColor:t.colorText});var H=(0,p.I$)("Tag",t=>{const d=_(t);return E(d)},l),g=function(t,d){var P={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&d.indexOf(a)<0&&(P[a]=t[a]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var u=0,a=Object.getOwnPropertySymbols(t);u<a.length;u++)d.indexOf(a[u])<0&&Object.prototype.propertyIsEnumerable.call(t,a[u])&&(P[a[u]]=t[a[u]]);return P},B=v.forwardRef((t,d)=>{const{prefixCls:P,style:a,className:u,checked:G,onChange:b,onClick:n}=t,Q=g(t,["prefixCls","style","className","checked","onChange","onClick"]),{getPrefixCls:ee,tag:C}=v.useContext(M.E_),te=oe=>{b==null||b(!G),n==null||n(oe)},w=ee("tag",P),[ue,ie,J]=H(w),le=O()(w,`${w}-checkable`,{[`${w}-checkable-checked`]:G},C==null?void 0:C.className,u,ie,J);return ue(v.createElement("span",Object.assign({},Q,{ref:d,style:Object.assign(Object.assign({},a),C==null?void 0:C.style),className:le,onClick:te})))}),j=e(98719);const U=t=>(0,j.Z)(t,(d,P)=>{let{textColor:a,lightBorderColor:u,lightColor:G,darkColor:b}=P;return{[`${t.componentCls}${t.componentCls}-${d}`]:{color:a,background:G,borderColor:u,"&-inverse":{color:t.colorTextLightSolid,background:b,borderColor:b},[`&${t.componentCls}-borderless`]:{borderColor:"transparent"}}}});var N=(0,p.bk)(["Tag","preset"],t=>{const d=_(t);return U(d)},l);function X(t){return typeof t!="string"?t:t.charAt(0).toUpperCase()+t.slice(1)}const $=(t,d,P)=>{const a=X(P);return{[`${t.componentCls}${t.componentCls}-${d}`]:{color:t[`color${P}`],background:t[`color${a}Bg`],borderColor:t[`color${a}Border`],[`&${t.componentCls}-borderless`]:{borderColor:"transparent"}}}};var re=(0,p.bk)(["Tag","status"],t=>{const d=_(t);return[$(d,"success","Success"),$(d,"processing","Info"),$(d,"error","Error"),$(d,"warning","Warning")]},l),q=function(t,d){var P={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&d.indexOf(a)<0&&(P[a]=t[a]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var u=0,a=Object.getOwnPropertySymbols(t);u<a.length;u++)d.indexOf(a[u])<0&&Object.prototype.propertyIsEnumerable.call(t,a[u])&&(P[a[u]]=t[a[u]]);return P};const ce=v.forwardRef((t,d)=>{const{prefixCls:P,className:a,rootClassName:u,style:G,children:b,icon:n,color:Q,onClose:ee,bordered:C=!0,visible:te}=t,w=q(t,["prefixCls","className","rootClassName","style","children","icon","color","onClose","bordered","visible"]),{getPrefixCls:ue,direction:ie,tag:J}=v.useContext(M.E_),[le,oe]=v.useState(!0),pe=(0,y.Z)(w,["closeIcon","closable"]);v.useEffect(()=>{te!==void 0&&oe(te)},[te]);const de=(0,S.o2)(Q),fe=(0,S.yT)(Q),se=de||fe,me=Object.assign(Object.assign({backgroundColor:Q&&!se?Q:void 0},J==null?void 0:J.style),G),V=ue("tag",P),[ve,R,f]=H(V),r=O()(V,J==null?void 0:J.className,{[`${V}-${Q}`]:se,[`${V}-has-color`]:Q&&!se,[`${V}-hidden`]:!le,[`${V}-rtl`]:ie==="rtl",[`${V}-borderless`]:!C},a,u,R,f),A=Y=>{Y.stopPropagation(),ee==null||ee(Y),!Y.defaultPrevented&&oe(!1)},[,L]=(0,D.Z)((0,D.w)(t),(0,D.w)(J),{closable:!1,closeIconRender:Y=>{const ge=v.createElement("span",{className:`${V}-close-icon`,onClick:A},Y);return(0,I.wm)(Y,ge,Z=>({onClick:Ce=>{var ne;(ne=Z==null?void 0:Z.onClick)===null||ne===void 0||ne.call(Z,Ce),A(Ce)},className:O()(Z==null?void 0:Z.className,`${V}-close-icon`)}))}}),m=typeof w.onClick=="function"||b&&b.type==="a",h=n||null,x=h?v.createElement(v.Fragment,null,h,b&&v.createElement("span",null,b)):b,k=v.createElement("span",Object.assign({},pe,{ref:d,className:r,style:me}),x,L,de&&v.createElement(N,{key:"preset",prefixCls:V}),fe&&v.createElement(re,{key:"status",prefixCls:V}));return ve(m?v.createElement(K.Z,{component:"Tag"},k):k)});ce.CheckableTag=B;var he=ce}}]);