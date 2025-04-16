"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4214],{1699:function(K,O,e){e.d(O,{u:function(){return t}});var x=e(9783),r=e.n(x),F=e(97857),i=e.n(F),P=e(67294),s=e(82346),T=e(40411),g=e(42075),C=e(85893),t=function(_){var R=(0,s.useAccess)(),A=Array.isArray(_.access)?_.access:[_.access],d,M=_.fallback;return typeof _.children=="function"?(d=_.children(A.reduce(function(E,p){return i()(i()({},E),{},r()({},p,R[p]))},{})),d||(d=M)):A.every(function(E){return R[E]})?d=_.children:d=M,!M&&d&&_.showProTips&&R.canSeeEnableCe&&(d=(0,C.jsx)(T.Z,{offset:_.showProTipsOffset,count:"PRO",color:"gold",style:{fontWeight:"bold"},children:d})),!M&&d&&_.showProRibbonTips&&R.canSeeEnableCe&&(d=(0,C.jsx)(T.Z.Ribbon,{text:"PRO",color:"gold",style:{fontWeight:"bold"},children:d})),_.space?(0,C.jsx)(g.Z,i()(i()({},_.space),{},{children:d})):d}},28307:function(K,O,e){var x=e(15009),r=e.n(x),F=e(99289),i=e.n(F),P=e(5574),s=e.n(P),T=e(38345),g=e(97269),C=e(62370),t=e(5966),h=e(64317),_=e(28036),R=e(85265),A=e(42075),d=e(67294),M=e(3393),E=e(97961),p=e(92754),o=e(82346),v=e(96042),D=e(85893),m=(0,d.forwardRef)(function(u,y){var l=(0,d.useState)(!1),k=s()(l,2),ne=k[0],Q=k[1],V=(0,d.useRef)(),G=(0,d.useRef)(),fe=(0,d.useState)(!1),le=s()(fe,2),oe=le[0],te=le[1];return(0,d.useImperativeHandle)(y,function(){return{upgradeImage:function(B){var b;return Q(!0),(b=V.current)===null||b===void 0||b.setFieldValue("imageUrl",B),(0,M.Gb)({tag:B,type:"pull"})},setImageName:function(B){var b;Q(!0),(b=V.current)===null||b===void 0||b.setFieldValue("imageUrl",B)}}}),[(0,D.jsx)(_.ZP,{type:u.buttonType?u.buttonType:"default",onClick:function(){var B,b;u.onClick&&u.onClick(),Q(!0),(B=V.current)===null||B===void 0||B.resetFields(),(b=G.current)===null||b===void 0||b.setStart("")},children:"\u62C9\u53D6\u955C\u50CF"},"remoteBtn"),(0,D.jsxs)(R.Z,{forceRender:!0,open:ne,title:"\u62C9\u53D6\u8FDC\u7A0B\u955C\u50CF",width:800,onClose:function(){var B;Q(!1),(B=G.current)===null||B===void 0||B.close()},footer:!1,children:[(0,D.jsx)(T.Z,{children:(0,D.jsxs)(A.Z,{direction:"vertical",size:"middle",children:[(0,D.jsxs)("div",{children:["1\u3001\u955C\u50CF\u540D\u79F0\u4E2D\u4E0D\u5305\u542B\u4ED3\u5E93\u5730\u5740\u65F6\uFF0C \u9ED8\u8BA4\u4ECE ",(0,D.jsx)("a",{href:"https://hub.docker.com/",target:"_blank",children:"docker hub"})," \u4E2D\u4E0B\u8F7D\uFF0C \u4F60\u53EF\u4EE5",(0,D.jsx)("a",{href:"https://hub.docker.com/search?q=",target:"_blank",children:"\u3010\u67E5\u627E\u3011"})," \u9700\u8981\u7684\u955C\u50CF"]}),(0,D.jsx)("div",{children:"2\u3001\u62C9\u53D6\u975E docker hub \u955C\u50CF\u65F6\uFF0C\u8BF7\u586B\u5199\u5B8C\u6574\u7684\u955C\u50CF\u5730\u5740\u3002"}),(0,D.jsxs)("div",{children:["3\u3001\u76EE\u6807\u4ED3\u5E93\u6709\u6743\u9650\u9A8C\u8BC1\u65F6\uFF0C\u8BF7",(0,D.jsx)(o.Link,{to:"/image/registry",children:"\u3010\u6DFB\u52A0\u3011"}),"\u8BE5\u4ED3\u5E93\uFF0C\u5E76\u914D\u7F6E\u7528\u6237\u540D\u548C\u5BC6\u7801\u6743\u9650"]}),(0,D.jsxs)("div",{children:["4\u3001\u65E0\u6CD5\u6B63\u5E38\u62C9\u53D6\u955C\u50CF\u65F6\u8BF7\u5728 ",(0,D.jsx)(o.Link,{to:"/image/registry",children:"\u3010\u4ED3\u5E93\u7BA1\u7406\u3011"}),"\u4E2D\u914D\u7F6E\u955C\u50CF\u7684\u52A0\u901F\u5730\u5740"]})]})}),(0,D.jsx)(T.Z,{title:"\u62C9\u53D6\u955C\u50CF",headerBordered:!0,children:(0,D.jsxs)(g.A,{formRef:V,submitter:!1,isKeyPressSubmit:!0,onFinish:function(){var S=i()(r()().mark(function B(b){var z,w,re,ae,Y,ce;return r()().wrap(function(H){for(;;)switch(H.prev=H.next){case 0:return Y=(z=b.imageUrl)!==null&&z!==void 0?z:"",b.registry&&(Y=b.registry.serverAddress+"/"+Y),te(!0),(w=G.current)===null||w===void 0||w.setStart(Y),H.next=6,(0,M.Gb)({tag:Y,type:"pull",platform:(re=b.platform)!==null&&re!==void 0?re:""}).finally(function(){te(!1)});case 6:return ce=H.sent,(ae=G.current)===null||ae===void 0||ae.setFinish(),Q(!1),u.onFinish&&u.onFinish(ce.data.tag),H.abrupt("return",!0);case 11:case"end":return H.stop()}},B)}));return function(B){return S.apply(this,arguments)}}(),children:[(0,D.jsxs)(A.Z.Compact,{children:[(0,D.jsx)(C.Z,{name:"registry",children:(0,D.jsx)(v.Z,{width:"150px"})}),(0,D.jsx)(t.Z,{disabled:oe,width:270,name:"imageUrl",placeholder:"\u8BF7\u8F93\u5165\u955C\u50CF\u5730\u5740",required:!0,rules:[{required:!0}]}),(0,D.jsx)(h.Z,{name:"platform",style:{width:100},placeholder:"\u9ED8\u8BA4\u5F53\u524D\u67B6\u6784",options:E.ii.map(function(S){return{label:S.name,value:S.name}})}),(0,D.jsx)(_.ZP,{loading:oe,onClick:i()(r()().mark(function S(){var B;return r()().wrap(function(z){for(;;)switch(z.prev=z.next){case 0:(B=V.current)===null||B===void 0||B.submit();case 1:case"end":return z.stop()}},S)})),children:"\u62C9\u53D6\u955C\u50CF"}),(0,D.jsx)(_.ZP,{danger:!0,onClick:function(){var B;(B=G.current)===null||B===void 0||B.close()},children:"\u4E2D\u6B62\u6267\u884C"})]}),(0,D.jsx)(C.Z,{label:"\u62C9\u53D6\u8FDB\u5EA6",children:(0,D.jsx)(p.Z,{ref:G})})]})})]},"remoteDrawer")]});O.Z=m},80821:function(K,O,e){e.d(O,{Z:function(){return C}});var x=e(5574),r=e.n(x),F=e(24963),i=e(86738),P=e(28036),s=e(83062),T=e(67294),g=e(85893);function C(t){var h=(0,T.useState)(!1),_=r()(h,2),R=_[0],A=_[1],d=(0,T.useContext)(F.Z),M=d.lang,E=d.notice,p=d.message,o=function(){A(!0);var D=t.action();D instanceof Promise?D.then(function(m){if(A(!1),m){typeof t.onSuccess=="function"&&t.onSuccess(m);var u="";t.messageSuccess?typeof t.messageSuccess=="function"?u=t.messageSuccess(m):u=t.messageSuccess.indexOf("notification.")==0?M(t.messageSuccess):t.messageSuccess:u=M("notification.finish"),t.asynced?p.info(u):p.success(u)}}).catch(function(m){A(!1),typeof t.onError=="function"&&t.onError(m)}):A(!1)};return t.confirm?(0,g.jsx)(i.Z,{style:{width:500},title:t.confirmTitle?t.confirmTitle:M("notification.title.tip"),description:typeof t.confirm=="string"&&t.confirm.indexOf("notification.")==0?M(t.confirm):t.confirm,onConfirm:o,okText:"Yes",cancelText:"No",onOpenChange:t.confirmOnOpenChange,children:(0,g.jsx)(P.ZP,{block:t.block,disabled:t.disabled,icon:!t.children&&R?void 0:t.icon,loading:R,danger:t.danger,type:t.type,children:t.children})}):(0,g.jsx)(s.Z,{title:t.tips,children:(0,g.jsx)(P.ZP,{block:t.block,style:t.ghost?{padding:0,height:"auto",width:"auto"}:{},disabled:t.disabled,icon:!t.children&&R?void 0:t.icon,loading:R,onClick:o,danger:t.danger,type:t.type,children:t.children})})}},81366:function(K,O,e){var x=e(19632),r=e.n(x),F=e(5574),i=e.n(F),P=e(27254),s=e(42075),T=e(28036),g=e(25593),C=e(67294),t=e(31112),h=e(85893),_=(0,C.forwardRef)(function(R,A){var d=(0,C.useContext)(t.Z),M=d.showPath,E=(0,C.useState)([{title:"\u6839\u76EE\u5F55",path:"/"}]),p=i()(E,2),o=p[0],v=p[1];(0,C.useImperativeHandle)(A,function(){return{addHistory:function(u,y){v([].concat(r()(o),[{title:u,path:y}]))},initHistory:function(u){v([{title:"\u6839\u76EE\u5F55",path:"/"}].concat(r()(u)))}}});var D=function(u){M?M(o[u].title,o[u].path):R.showPath&&R.showPath(o[u].title,o[u].path);var y=o.filter(function(l,k){return k<=u});v(r()(y))};return(0,h.jsxs)(s.Z,{children:[(0,h.jsx)(s.Z.Compact,{children:o.map(function(m,u){return(0,h.jsx)(T.ZP,{icon:(0,h.jsx)(P.Z,{}),type:"dashed",onClick:function(){D(u)},children:m.title},u)})}),o.length>=2&&(0,h.jsx)(g.Z.Text,{copyable:{text:o[o.length-1].path}})]})});O.Z=_},31112:function(K,O,e){var x=e(67294),r=(0,x.createContext)({});O.Z=r},68536:function(K,O,e){e.d(O,{Z:function(){return t}});var x=e(24963),r=e(93613),F=e(36693),i=e(2741),P=e(25593),s=e(42075),T=e(67294),g=e(85893),C=0;function t(h){var _=(0,T.useContext)(x.Z),R=_.message;return h.isDir?(0,g.jsx)(P.Z.Link,{onClick:function(){h.onClick&&h.onClick()},children:(0,g.jsxs)(s.Z,{children:[(0,g.jsx)(r.Z,{}),h.showName]})}):h.isLink?(0,g.jsx)(P.Z.Link,{onClick:function(){h.onClick&&h.onClick()},children:(0,g.jsxs)(s.Z,{children:[(0,g.jsx)(F.Z,{}),h.showName]})}):(0,g.jsx)(P.Z.Text,{onClick:function(){if(C++,C==2){C=0,h.onClick&&h.onClick();return}setTimeout(function(){C==1&&R.info("\u53CC\u51FB\u67E5\u770B\u6587\u4EF6\u5185\u5BB9"),C=0},400)},style:{cursor:"pointer"},children:(0,g.jsxs)(s.Z,{children:[(0,g.jsx)(i.Z,{}),h.showName]})})}},34879:function(K,O,e){e.d(O,{Z:function(){return P}});var x=e(97961),r=e(91604),F=e(1677),i=e(85893);function P(s){return s.showDragger?(0,i.jsx)(r.Z,{max:s.max?s.max:1,title:s.title,label:s.label,required:s.required,rules:[{required:s.required}],fieldProps:{multiple:!!(s.max&&s.max>1),name:"file",accept:s.accept,action:"/api/common/attach/upload",headers:{Authorization:"Bearer "+localStorage.getItem("token")},onRemove:function(g){return new Promise(function(C){var t;(0,x._2)({path:(t=g.response.data.path)!==null&&t!==void 0?t:""}).then(function(h){C(!0)})})}},name:s.name}):(0,i.jsx)(F.Z,{max:s.max?s.max:1,title:s.title,label:s.label,required:s.required,rules:[{required:s.required}],fieldProps:{multiple:!!(s.max&&s.max>1),name:"file",accept:s.accept,action:"/api/common/attach/upload",headers:{Authorization:"Bearer "+localStorage.getItem("token")},onRemove:function(g){return new Promise(function(C){var t;(0,x._2)({path:(t=g.response.data.path)!==null&&t!==void 0?t:""}).then(function(h){C(!0)})})}},name:s.name})}},92754:function(K,O,e){var x=e(5574),r=e.n(x),F=e(67294),i=e(82346),P=e(38703),s=e(85893),T=(0,F.forwardRef)(function(g,C){var t=(0,F.useState)(""),h=r()(t,2),_=h[0],R=h[1];(0,F.useImperativeHandle)(C,function(){return{setFinish:function(){p({finish:{downloading:100,extracting:100}})},setStart:function(v){v&&R(v),p({start:{downloading:0,extracting:0}})},close:function(){A.progress.close("image:pull:"+_),p({start:{downloading:0,extracting:0}})}}});var A=(0,i.useModel)("subscriber");A.addDataHandler("image:pull:"+_,function(o){p(o.data)});var d=(0,F.useState)(),M=r()(d,2),E=M[0],p=M[1];return(0,F.useEffect)(function(){return p({start:{downloading:0,extracting:0}}),function(){A.progress.close("image:pull:"+_)}},[]),(0,s.jsx)(s.Fragment,{children:E&&Object.keys(E).map(function(o){return(0,s.jsx)(P.Z,{percent:E[o].downloading,success:{percent:E[o].extracting}},o)})})});O.Z=T},78451:function(K,O,e){e.d(O,{Z:function(){return F}});var x=e(67294),r=e(85893);function F(i){return(0,r.jsx)("span",{style:{width:i.width?i.width:"auto",wordBreak:"break-word"},children:i.content})}},24963:function(K,O,e){var x=e(67294),r=(0,x.createContext)({});O.Z=r},65913:function(K,O,e){var x=e(5574),r=e.n(x),F=e(74330),i=e(67294),P=e(85893),s=(0,i.forwardRef)(function(T,g){(0,i.useImperativeHandle)(g,function(){return{show:function(){_(!0)},destroy:function(){_(!1)}}});var C=(0,i.useState)(!1),t=r()(C,2),h=t[0],_=t[1];return(0,P.jsx)(F.Z,{spinning:h,size:"default",children:T.children})});O.Z=s},17550:function(K,O,e){e.r(O),e.d(O,{default:function(){return De}});var x=e(19632),r=e.n(x),F=e(15009),i=e.n(F),P=e(99289),s=e.n(P),T=e(5574),g=e.n(T),C=e(90078),t=e(78099),h=e(97269),_=e(62370),R=e(37476),A=e(5966),d=e(28036),M=e(96074),E=e(25593),p=e(42075),o=e(66309),v=e(83062),D=e(84567),m=e(50136),u=e(67294),y=e(82346),l=e(18148),k=e(5251),ne=e(80821),Q=e(43425),V=e(64789),G=e(58638),fe=e(1912),le=e(28307),oe=e(96042),te=e(67255),S=e(24963),B=e(3393),b=e(93162),z=e(78914),w=e(1699),re=e(184),ae=e(34879),Y=e(44349),ce=e(97961),n=e(85893),H=(0,u.forwardRef)(function(X,ve){(0,u.useImperativeHandle)(ve,function(){return{}});var _e=(0,u.useRef)();return(0,n.jsxs)(re.a,{title:"\u5BFC\u5165\u955C\u50CF",trigger:(0,n.jsx)(d.ZP,{children:"\u5BFC\u5165\u955C\u50CF"},"create"),formRef:_e,onFinish:function(){var he=s()(i()().mark(function ue(I){var se,de;return i()().wrap(function(N){for(;;)switch(N.prev=N.next){case 0:return N.next=2,(0,ce.GH)({localUrl:I.imageTarUpload?I.imageTarUpload.map(function(J){return J.response.data.path}):[],remoteUrl:I.remoteUrl?I.remoteUrl.map(function(J){return J.url}):[]});case 2:return de=N.sent,!((se=_e.current)===null||se===void 0)&&se.resetFields&&_e.current.resetFields(),X.onFinish&&X.onFinish(),N.abrupt("return",!0);case 6:case"end":return N.stop()}},ue)}));return function(ue){return he.apply(this,arguments)}}(),children:[(0,n.jsx)(ae.Z,{label:"\u672C\u5730\u955C\u50CF",showDragger:!0,max:10,title:"\u5BFC\u5165\u955C\u50CF\u5305, \u6700\u591A\u4E0A\u4F20\u652F\u6301 10 \u4E2A\u3002\uFF08\u53EA\u5141\u8BB8\u4E0A\u4F20 .tar \u6587\u4EF6\uFF0C\u901A\u8FC7\u5BFC\u51FA\u955C\u50CF\u751F\u6210\uFF09",name:"imageTarUpload",accept:".tar"}),(0,n.jsx)(Y.Z,{label:"\u8FDC\u7A0B\u5730\u5740",name:"remoteUrl",showAddButton:!0,hideCopyButton:!0,min:1,items:[{width:"lg",name:"url",placeholder:"\u6307\u5B9A\u8FDC\u7A0B\u5730\u5740 http \u6216\u662F https \u5F00\u5934"}]})]})}),Ce=H;function De(){var X=(0,u.useContext)(S.Z),ve=X.message,_e=X.notice,he=X.lang,ue=(0,y.useAccess)(),I=(0,u.useRef)(),se=(0,u.useState)({force:!1}),de=g()(se,2),ge=de[0],N=de[1],J=(0,u.useRef)(),ie=(0,u.useRef)(),me=(0,u.useRef)();return(0,n.jsxs)(C._z,{header:{extra:[(0,n.jsx)(w.u,{access:"canSeeImageListManageCreate",children:(0,n.jsx)(y.Link,{to:"/image/create",children:(0,n.jsx)(d.ZP,{type:"primary",children:"\u521B\u5EFA\u955C\u50CF"},"create")},"create")},"create"),(0,n.jsxs)(w.u,{access:"canSeeImageListManageCreate",children:[(0,n.jsx)(M.Z,{type:"vertical"}),(0,n.jsx)(Ce,{onFinish:function(){var j;!((j=I.current)===null||j===void 0)&&j.reloadAndRest&&I.current.reloadAndRest()}})]},"import"),(0,n.jsx)(w.u,{access:"canSeeImageListPull",children:(0,n.jsx)(le.Z,{onFinish:function(){var j,a;!((j=I.current)===null||j===void 0)&&j.reloadAndRest&&((a=I.current)===null||a===void 0||a.reloadAndRest())}},"remote")},"remote")]},children:[(0,n.jsx)(z.Z,{ref:ie,onClose:function(){var j,a;!((j=I.current)===null||j===void 0)&&j.reloadAndRest&&((a=I.current)===null||a===void 0||a.reloadAndRest())}}),(0,n.jsx)(t.Z,{scroll:{x:"max-content"},rowKey:"Id",columns:[{title:"Id",dataIndex:"title",search:!1,render:function(j,a,U,L,c){var f=a.Id.substring(7,19);return a.Title&&(f=a.Title),(0,n.jsx)(E.Z.Link,{onClick:function(){var $;!(($=ie.current)===null||$===void 0)&&$.show&&ie.current.show(a.Id)},children:f},"title-".concat(U))}},{title:"\u540D\u79F0",dataIndex:"tag",render:function(j,a,U,L){return(0,n.jsx)(p.Z,{direction:"vertical",style:{textAlign:"left"},children:a.RepoTags.map(function(c,f){return(0,n.jsxs)(p.Z,{children:[(0,n.jsx)(o.Z,{color:"#2db7f5",children:(0,n.jsx)(E.Z.Text,{copyable:!0,title:c,style:{color:"#ffffff"},children:c},"tag-"+f)},"tag-".concat(f)),a.Containers>0&&(0,n.jsx)(o.Z,{color:"cyan",children:"\u4F7F\u7528\u4E2D"},"use-".concat(f))]},f)})},a.Id)}},{title:"Digest",search:!1,tooltip:"\u8BE5\u955C\u50CF\u5728\u4ED3\u5E93\u4E2D\u7684\u6807\u8BC6\uFF0C\u4E0D\u5305\u542B\u6B64\u503C\u7684\u955C\u50CF\u65E0\u6CD5\u68C0\u6D4B\u66F4\u65B0",render:function(j,a,U,L,c){return a.RepoDigests.map(function(f){return f.substring(f.indexOf("@")+8).substring(0,12)})}},{title:"\u67B6\u6784",width:80,search:!1,render:function(j,a,U,L,c){if(a.Labels&&a.Labels["com.dpanel.image.arch"])return(0,n.jsx)(o.Z,{children:a.Labels["com.dpanel.image.arch"]},"arch"+a.Id)}},{title:"\u5927\u5C0F",dataIndex:"size",ellipsis:!0,width:"120px",search:!1,sorter:function(j,a){return parseFloat(j.Size)-parseFloat(a.Size)},render:function(j,a,U,L){return(0,n.jsx)("div",{children:(0,k.FI)(parseFloat(a.Size))},a.Id)}},{title:"\u521B\u5EFA\u65E5\u671F",dataIndex:"Created",ellipsis:!0,search:!1,width:"180px",render:function(j,a,U,L){return(0,n.jsx)("div",{children:(0,k.ZM)(a.Created*1e3)},a.Id)},sorter:function(j,a){return j.Created-a.Created}},{title:"\u64CD\u4F5C",valueType:"option",key:"option",width:100,fixed:"right",hidden:!ue.canSeeImageListManage,render:function(j,a,U,L){return(0,n.jsxs)(p.Z,{split:(0,n.jsx)(M.Z,{type:"vertical"}),children:[(0,n.jsx)(E.Z.Link,{onClick:function(){var f;!((f=ie.current)===null||f===void 0)&&f.show&&ie.current.show(a.Id)},children:(0,n.jsx)(v.Z,{title:"\u7BA1\u7406",children:(0,n.jsx)(Q.Z,{})})},"edit"),(0,n.jsx)(y.Link,{to:"/app/create/image?imageId="+a.RepoTags[0],children:(0,n.jsx)(v.Z,{title:"\u521B\u5EFA\u5BB9\u5668",children:(0,n.jsx)(V.Z,{})})},"create")]})}}],request:function(){var Z=s()(i()().mark(function j(a,U,L){var c;return i()().wrap(function(W){for(;;)switch(W.prev=W.next){case 0:return W.next=2,(0,l.KG)({tag:a.tag,title:a.title,use:a.use?a.use=="1"?1:2:0});case 2:if(c=W.sent,!(!c||!c.data||!c.data.list)){W.next=5;break}return W.abrupt("return",{data:[],success:!0,total:0});case 5:return c.data.list.map(function($){var q="";$.RepoTags.map(function(Ee){c.data.title[Ee]&&(q=c.data.title[Ee])}),$.Title=q}),W.abrupt("return",{data:c.data.list,success:!0,total:c.data.list.length});case 7:case"end":return W.stop()}},j)}));return function(j,a,U){return Z.apply(this,arguments)}}(),pagination:(0,te.O)(),search:{collapsed:!1},rowSelection:ue.canSeeImageListManage?{defaultSelectedRowKeys:[],alwaysShowAlert:!0}:void 0,actionRef:I,tableAlertOptionRender:function(j){var a=j.selectedRowKeys,U=j.selectedRows;return(0,n.jsxs)(p.Z,{size:16,children:[(0,n.jsx)(ne.Z,{icon:(0,n.jsx)(G.Z,{}),confirm:(0,n.jsxs)(p.Z,{style:{width:500,marginTop:"10px",paddingRight:"10px"},direction:"vertical",size:20,children:[(0,n.jsx)(E.Z.Text,{children:(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:"\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u5BFC\u51FA\u955C\u50CF\u540E\u4F1A\u81EA\u52A8\u901A\u8FC7\u6D4F\u89C8\u5668\u4E0B\u8F7D\u81F3\u672C\u5730"}),(0,n.jsx)("li",{children:"\u5F53\u914D\u7F6E\u3010\u5BFC\u51FA\u5230\u9762\u677F\u5BB9\u5668\u76EE\u5F55\u3011\u540E\u5C06\u4FDD\u5B58\u81F3 /dpanel/storage \u76EE\u5F55"}),(0,n.jsx)("li",{children:"\u6D4F\u89C8\u5668\u4E0B\u8F7D\u5931\u8D25\u65F6\uFF0C\u8BF7\u68C0\u67E5\u662F\u5426\u5B89\u88C5\u4E86\u76F8\u5173\u4E0B\u8F7D\u63D2\u4EF6"})]})}),(0,n.jsx)(h.A,{layout:"horizontal",formRef:me,submitter:!1,children:(0,n.jsx)(_.Z,{valuePropName:"checked",name:"enableExportToPath",children:(0,n.jsx)(D.Z,{children:"\u5BFC\u51FA\u5230\u9762\u677F\u5BB9\u5668\u76EE\u5F55"})},"enableExportToPath")})]}),confirmOnOpenChange:function(){var c;!((c=me.current)===null||c===void 0)&&c.resetFields&&me.current.resetFields()},action:function(){var c,f=[];return U.map(function(W){f.push.apply(f,r()(W.RepoTags))}),(0,B.Rb)({md5:f,enableExportToPath:(c=me.current)===null||c===void 0?void 0:c.getFieldValue("enableExportToPath")})},onSuccess:function(c){var f,W=U.map(function(q){return q.RepoTags[0]});if(c.size>29){var $=new Blob([c],{type:"application/tar"});(0,b.saveAs)($,W.join("-")+".tar")}!((f=I.current)===null||f===void 0)&&f.reset&&I.current.reset()},children:"\u5BFC\u51FA"}),(0,n.jsxs)(R.Y,{formRef:J,title:"\u6279\u91CF\u63A8\u9001\u955C\u50CF",trigger:(0,n.jsx)(d.ZP,{icon:(0,n.jsx)(fe.Z,{}),children:"\u540C\u6B65\u81F3\u5176\u5B83\u4ED3\u5E93"}),onFinish:function(){var L=s()(i()().mark(function c(f){var W,$,q;return i()().wrap(function(ee){for(;;)switch(ee.prev=ee.next){case 0:return ee.next=2,(0,l.KX)({md5:a,registryId:f.registryId,newNamespace:f.newNamespace});case 2:return q=ee.sent,(W=I.current)===null||W===void 0||W.reload(),!(($=I.current)===null||$===void 0)&&$.clearSelected&&I.current.clearSelected(),ee.abrupt("return",!0);case 6:case"end":return ee.stop()}},c)}));return function(c){return L.apply(this,arguments)}}(),children:[(0,n.jsx)(_.Z,{name:"registryId",hidden:!0}),(0,n.jsx)(_.Z,{label:"\u955C\u50CF\u4ED3\u5E93",name:"imageRespo",tooltip:(0,n.jsxs)(n.Fragment,{children:["\u63A8\u9001\u524D\u8BF7\u4FDD\u8BC1\u4ED3\u5E93\u4E2D\u6709\u6307\u5B9A\u7684\u547D\u540D\u7A7A\u95F4, \u5982\u6CA1\u6709\u8BF7\u5148 ",(0,n.jsx)("a",{href:"",target:"_blank",children:"\u6DFB\u52A0\u4ED3\u5E93"})]}),children:(0,n.jsx)(oe.Z,{multiple:!0,top:!0,onChangeList:function(c){var f;(f=J.current)===null||f===void 0||f.setFieldValue("registryId",c.map(function(W){return W.id}))}})}),(0,n.jsx)(A.Z,{tooltip:"\u53EF\u4EE5\u901A\u8FC7\u6B64\u9879\u91CD\u65B0\u5B9A\u4E49\u547D\u540D\u7A7A\u95F4\uFF0Cdocker hub \u4E0D\u53D7\u8BE5\u914D\u7F6E\u7684\u5F71\u54CD\u3002 \u914D\u7F6E\u6B64\u9879\u540E mysql:latest \u4F1A\u63A8\u9001\u81F3 {\u547D\u540D\u7A7A\u95F4}/mysql:latest\uFF0C dpanel/dpanel:latest \u4F1A\u63A8\u9001\u81F3 {\u547D\u540D\u7A7A\u95F4}/dpanel:latest",label:"\u91CD\u5199\u4ED3\u5E93\u547D\u540D\u7A7A\u95F4",name:"newNamespace"})]}),(0,n.jsx)(w.u,{access:"canSeeImageListManageDelete",children:(0,n.jsx)(ne.Z,{danger:!0,type:"primary",action:function(){return(0,l.ao)({md5:a,force:ge.force})},onSuccess:function(){var c,f;return!((c=I.current)===null||c===void 0)&&c.reloadAndRest&&((f=I.current)===null||f===void 0||f.reloadAndRest()),!0},onError:function(){var c,f;return!((c=I.current)===null||c===void 0)&&c.reset&&((f=I.current)===null||f===void 0||f.reset()),!0},confirm:(0,n.jsxs)(p.Z,{style:{width:280},direction:"vertical",children:[(0,n.jsx)(E.Z.Text,{children:he("notification.confirm.title")}),(0,n.jsx)(D.Z,{name:"deleteVolume",onChange:function(c){return N({force:c.target.checked})},children:"\u5F3A\u5236\u5220\u9664\uFF1F"})]}),children:"\u6279\u91CF\u5220\u9664"})})]})},tableExtraRender:function(){return(0,n.jsx)(w.u,{access:"canSeeImageListManageCreate",children:(0,n.jsx)(m.Z,{mode:"horizontal",selectedKeys:["all"],items:[{label:(0,n.jsx)(y.Link,{to:"/image/list",replace:!0,children:"\u5168\u90E8\u955C\u50CF"}),key:"all"},{label:(0,n.jsx)(y.Link,{to:"/image/list/recycle",replace:!0,children:"\u6784\u5EFA\u4EFB\u52A1"}),key:"build"}]})})},toolBarRender:function(){return[(0,n.jsx)(w.u,{access:"canSeeImageListManageDelete",children:(0,n.jsx)(ne.Z,{action:function(){return(0,l.c7)()},onSuccess:function(){var a,U;return!((a=I.current)===null||a===void 0)&&a.reloadAndRest&&((U=I.current)===null||U===void 0||U.reloadAndRest()),!0},onError:function(){var a,U;return!((a=I.current)===null||a===void 0)&&a.reset&&((U=I.current)===null||U===void 0||U.reset()),!0},confirm:"notification.confirm.title",children:"\u6E05\u7406\u672A\u4F7F\u7528\u955C\u50CF"})},"prune")]},columnsState:(0,te.j)("image-list")})]})}},97961:function(K,O,e){e.d(O,{GH:function(){return h},MF:function(){return d},_2:function(){return R},fN:function(){return T},ii:function(){return s},vC:function(){return C}});var x=e(15009),r=e.n(x),F=e(99289),i=e.n(F),P=e(82346),s=[{name:"linux/amd64",arch:"amd64",search:["amd64","x86_64","86_64"]},{name:"linux/arm64",arch:"arm64",search:["arm64","arrch64"]},{name:"linux/i386",arch:"386",search:[]},{name:"linux/arm/v6",arch:"arm",search:[]},{name:"linux/arm/v7",arch:"arm",search:[]},{name:"linux/arm/v8",arch:"arm64",search:[]},{name:"linux/ppc64le",arch:"ppc64le",search:[]},{name:"linux/riscv64",arch:"riscv64",search:[]}];function T(E){return g.apply(this,arguments)}function g(){return g=i()(r()().mark(function E(p){return r()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.abrupt("return",(0,P.request)("/api/app/image/create-by-dockerfile",{method:"POST",data:p}));case 1:case"end":return v.stop()}},E)})),g.apply(this,arguments)}function C(E){return t.apply(this,arguments)}function t(){return t=i()(r()().mark(function E(p){return r()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.abrupt("return",(0,P.request)("/api/app/image/import-by-container-tar",{method:"POST",data:p}));case 1:case"end":return v.stop()}},E)})),t.apply(this,arguments)}function h(E){return _.apply(this,arguments)}function _(){return _=i()(r()().mark(function E(p){return r()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.abrupt("return",(0,P.request)("/api/app/image/import-by-image-tar",{method:"POST",data:p}));case 1:case"end":return v.stop()}},E)})),_.apply(this,arguments)}function R(E){return A.apply(this,arguments)}function A(){return A=i()(r()().mark(function E(p){return r()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,(0,P.request)("/api/common/attach/delete",{method:"POST",data:p});case 2:return v.abrupt("return",v.sent);case 3:case"end":return v.stop()}},E)})),A.apply(this,arguments)}function d(){return M.apply(this,arguments)}function M(){return M=i()(r()().mark(function E(){return r()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.abrupt("return",(0,P.request)("/api/app/image/get-template-list",{method:"POST"}));case 1:case"end":return o.stop()}},E)})),M.apply(this,arguments)}},3393:function(K,O,e){e.d(O,{Gb:function(){return g},Pn:function(){return _},Rb:function(){return A},YU:function(){return s},ZQ:function(){return p},_U:function(){return t},cD:function(){return v},cd:function(){return M}});var x=e(15009),r=e.n(x),F=e(99289),i=e.n(F),P=e(82346);function s(m){return T.apply(this,arguments)}function T(){return T=i()(r()().mark(function m(u){return r()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.abrupt("return",(0,P.request)("/api/app/image/get-detail",{method:"POST",data:u}));case 1:case"end":return l.stop()}},m)})),T.apply(this,arguments)}function g(m){return C.apply(this,arguments)}function C(){return C=i()(r()().mark(function m(u){return r()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.abrupt("return",(0,P.request)("/api/app/image/tag-remote",{method:"POST",data:u}));case 1:case"end":return l.stop()}},m)})),C.apply(this,arguments)}function t(m){return h.apply(this,arguments)}function h(){return h=i()(r()().mark(function m(u){return r()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.abrupt("return",(0,P.request)("/api/app/image/tag-add",{method:"POST",data:u}));case 1:case"end":return l.stop()}},m)})),h.apply(this,arguments)}function _(m){return R.apply(this,arguments)}function R(){return R=i()(r()().mark(function m(u){return r()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.abrupt("return",(0,P.request)("/api/app/image/tag-delete",{method:"POST",data:u}));case 1:case"end":return l.stop()}},m)})),R.apply(this,arguments)}function A(m){return d.apply(this,arguments)}function d(){return d=i()(r()().mark(function m(u){return r()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.abrupt("return",(0,P.request)("/api/app/image/export",{method:"POST",data:u,responseType:"blob"}));case 1:case"end":return l.stop()}},m)})),d.apply(this,arguments)}function M(m){return E.apply(this,arguments)}function E(){return E=i()(r()().mark(function m(u){return r()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.abrupt("return",(0,P.request)("/api/pro/image/get-remote-tag",{method:"POST",data:u}));case 1:case"end":return l.stop()}},m)})),E.apply(this,arguments)}function p(m){return o.apply(this,arguments)}function o(){return o=i()(r()().mark(function m(u){return r()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.abrupt("return",(0,P.request)("/api/app/image/check-upgrade",{method:"POST",data:u}));case 1:case"end":return l.stop()}},m)})),o.apply(this,arguments)}function v(m){return D.apply(this,arguments)}function D(){return D=i()(r()().mark(function m(u){return r()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.abrupt("return",(0,P.request)("/api/app/image/get-rootfs",{method:"POST",data:u}));case 1:case"end":return l.stop()}},m)})),D.apply(this,arguments)}}}]);
