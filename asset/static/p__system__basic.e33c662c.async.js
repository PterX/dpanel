"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1050],{1699:function(N,I,n){n.d(I,{u:function(){return a}});var L=n(9783),_=n.n(L),V=n(97857),B=n.n(V),W=n(67294),t=n(82346),D=n(40411),v=n(42075),d=n(85893),a=function(m){var O=(0,t.useAccess)(),u=Array.isArray(m.access)?m.access:[m.access],j,i=m.fallback;return typeof m.children=="function"?(j=m.children(u.reduce(function(l,F){return B()(B()({},l),{},_()({},F,O[F]))},{})),j||(j=i)):u.every(function(l){return O[l]})?j=m.children:j=i,!i&&j&&m.showProTips&&O.canSeeEnableCe&&(j=(0,d.jsx)(D.Z,{offset:m.showProTipsOffset,count:"PRO",color:"gold",style:{fontWeight:"bold"},children:j})),!i&&j&&m.showProRibbonTips&&O.canSeeEnableCe&&(j=(0,d.jsx)(D.Z.Ribbon,{text:"PRO",color:"gold",style:{fontWeight:"bold"},children:j})),m.space?(0,d.jsx)(v.Z,B()(B()({},m.space),{},{children:j})):j}},80821:function(N,I,n){n.d(I,{Z:function(){return d}});var L=n(5574),_=n.n(L),V=n(24963),B=n(86738),W=n(28036),t=n(83062),D=n(67294),v=n(85893);function d(a){var z=(0,D.useState)(!1),m=_()(z,2),O=m[0],u=m[1],j=(0,D.useContext)(V.Z),i=j.lang,l=j.notice,F=j.message,M=function(){u(!0);var te=a.action();te instanceof Promise?te.then(function(K){if(u(!1),K){typeof a.onSuccess=="function"&&a.onSuccess(K);var Q="";a.messageSuccess?typeof a.messageSuccess=="function"?Q=a.messageSuccess(K):Q=a.messageSuccess.indexOf("notification.")==0?i(a.messageSuccess):a.messageSuccess:Q=i("notification.finish"),a.asynced?F.info(Q):F.success(Q)}}).catch(function(K){u(!1),typeof a.onError=="function"&&a.onError(K)}):u(!1)};return a.confirm?(0,v.jsx)(B.Z,{style:{width:500},title:a.confirmTitle?a.confirmTitle:i("notification.title.tip"),description:typeof a.confirm=="string"&&a.confirm.indexOf("notification.")==0?i(a.confirm):a.confirm,onConfirm:M,okText:"Yes",cancelText:"No",onOpenChange:a.confirmOnOpenChange,children:(0,v.jsx)(W.ZP,{block:a.block,disabled:a.disabled,icon:!a.children&&O?void 0:a.icon,loading:O,danger:a.danger,type:a.type,children:a.children})}):(0,v.jsx)(t.Z,{title:a.tips,children:(0,v.jsx)(W.ZP,{block:a.block,style:a.ghost?{padding:0,height:"auto",width:"auto"}:{},disabled:a.disabled,icon:!a.children&&O?void 0:a.icon,loading:O,onClick:M,danger:a.danger,type:a.type,children:a.children})})}},44349:function(N,I,n){var L=n(97857),_=n.n(L),V=n(17186),B=n(5966),W=n(86250),t=n(67294),D=n(85893),v=(0,t.forwardRef)(function(d,a){var z=(0,t.useRef)();(0,t.useImperativeHandle)(a,function(){return{addItem:function(u,j){var i,l=(i=z.current)===null||i===void 0?void 0:i.getList(),F=!1;if(l==null||l.map(function(e){if(e.name==u){F=!0;return}}),!F){var M;(M=z.current)===null||M===void 0||M.add({name:u,value:j})}},clear:function(){var u;(u=z.current)===null||u===void 0||(u=u.getList())===null||u===void 0||u.map(function(j,i){var l;(l=z.current)===null||l===void 0||l.remove(i)})}}});var m={};return d.hideCopyButton===!0&&(m.copyIconProps=!1),d.hideDeleteButton===!0&&(m.deleteIconProps=!1),(0,D.jsx)(V.u,_()(_()({initialValue:d.initialValue,label:d.label,name:d.name,actionRef:z,creatorButtonProps:d.showAddButton?{creatorButtonText:"\u6DFB\u52A0"+(d.label?d.label:d.name)}:!1,min:d.min?d.min:0},m),{},{children:function(u,j,i){return(0,D.jsx)(W.Z,{justify:d.justify,gap:d.gap,children:d.items.map(function(l){return l.render?(0,D.jsx)("div",{children:l.render&&l.render(u,j,i)},"".concat(d.name,"-").concat(l.name,"-").concat(u.key)):(0,D.jsx)(B.Z,{width:l.width,name:l.name,label:l.label,required:l.required,rules:[{required:l.required}],disabled:l.disabled,placeholder:l.placeholder},"".concat(d.name,"-").concat(l.name,"-").concat(u.key))})})}}))});I.Z=v},34879:function(N,I,n){n.d(I,{Z:function(){return W}});var L=n(97961),_=n(91604),V=n(1677),B=n(85893);function W(t){return t.showDragger?(0,B.jsx)(_.Z,{max:t.max?t.max:1,title:t.title,label:t.label,required:t.required,rules:[{required:t.required}],fieldProps:{multiple:!!(t.max&&t.max>1),name:"file",accept:t.accept,action:"/api/common/attach/upload",headers:{Authorization:"Bearer "+localStorage.getItem("token")},onRemove:function(v){return new Promise(function(d){var a;(0,L._2)({path:(a=v.response.data.path)!==null&&a!==void 0?a:""}).then(function(z){d(!0)})})}},name:t.name}):(0,B.jsx)(V.Z,{max:t.max?t.max:1,title:t.title,label:t.label,required:t.required,rules:[{required:t.required}],fieldProps:{multiple:!!(t.max&&t.max>1),name:"file",accept:t.accept,action:"/api/common/attach/upload",headers:{Authorization:"Bearer "+localStorage.getItem("token")},onRemove:function(v){return new Promise(function(d){var a;(0,L._2)({path:(a=v.response.data.path)!==null&&a!==void 0?a:""}).then(function(z){d(!0)})})}},name:t.name})}},2808:function(N,I,n){n.d(I,{Z:function(){return D}});var L=n(97857),_=n.n(L),V=n(62370),B=n(51663),W=n(67294),t=n(85893);function D(v){return(0,t.jsx)(V.Z,_()(_()({},v),{},{children:(0,t.jsx)(B.Z,{showText:function(a){return a.toHexString()},allowClear:!0,presets:[{label:"\u9884\u8BBE\u989C\u8272",colors:["#1677ff","#722ed1","#13c2c2","#52c41a","#eb2f96","#f5222d","#fa8c16","#fadb14","#fa541c","#2f54eb","#faad14","#a0d911","#000000","#5cdbd3","#b37feb","#b7eb8f","#61affe","#9254de","#36cfc9","#ff9c6e","#ff6f00","#ffc069","#28a745","#6610f2","#6f42c1","#007bff","#17a2b8","#20c997","#00cccc","#ff6666"]}]})}))}},24963:function(N,I,n){var L=n(67294),_=(0,L.createContext)({});I.Z=_},60737:function(N,I,n){n.r(I),n.d(I,{default:function(){return Ie}});var L=n(5574),_=n.n(L),V=n(19632),B=n.n(V),W=n(15009),t=n.n(W),D=n(99289),v=n.n(D),d=n(24963),a=n(87662),z=n(88641),m=n(38345),O=n(97269),u=n(5966),j=n(63434),i=n(67294),l=n(42075),F=n(80821),M=n(68602),e=n(85893);function te(){var P=(0,i.useRef)(),S=(0,i.useContext)(d.Z),A=S.message,s=function(){var G=v()(t()().mark(function $(){var c,y,Z,U,p,H,T;return t()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,(0,a.pe)({groupName:"setting",name:"emailServer"});case 2:T=r.sent,T.data.setting.value.emailServer&&((c=P.current)===null||c===void 0||c.setFieldsValue({host:(y=T.data.setting.value.emailServer.host)!==null&&y!==void 0?y:"",port:(Z=T.data.setting.value.emailServer.port)!==null&&Z!==void 0?Z:"",email:(U=T.data.setting.value.emailServer.email)!==null&&U!==void 0?U:"",code:(p=T.data.setting.value.emailServer.code)!==null&&p!==void 0?p:"",status:(H=T.data.setting.value.emailServer.status)!==null&&H!==void 0?H:[]}));case 4:case"end":return r.stop()}},$)}));return function(){return G.apply(this,arguments)}}();return(0,e.jsx)(m.Z,{direction:"column",gutter:[0,10],ghost:!0,children:(0,e.jsx)(m.Z,{bordered:!0,headerBordered:!0,title:(0,e.jsx)(z.Z,{}),subTitle:"\u90AE\u4EF6\u670D\u52A1",children:(0,e.jsxs)(O.A,{layout:"horizontal",labelAlign:"right",labelCol:{span:3,offset:0},formRef:P,onInit:v()(t()().mark(function G(){return t()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return s(),c.abrupt("return",!0);case 2:case"end":return c.stop()}},G)})),submitter:{render:function($,c){return[].concat(B()(c),[(0,e.jsx)(F.Z,{messageSuccess:"\u6D4B\u8BD5\u90AE\u4EF6\u5DF2\u53D1\u9001\u81F3\u53D1\u4EF6\u90AE\u7BB1\uFF0C\u5982\u672A\u6536\u5230\uFF0C\u8BF7\u68C0\u67E5\u90AE\u7BB1\u914D\u7F6E\u662F\u5426\u6B63\u786E",action:v()(t()().mark(function y(){var Z;return t()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,(0,M.jC)((Z=P.current)===null||Z===void 0?void 0:Z.getFieldsValue());case 2:return p.abrupt("return",p.sent);case 3:case"end":return p.stop()}},y)})),children:"\u6D4B\u8BD5"},"testEmail")])}},onFinish:function(){var G=v()(t()().mark(function $(c){var y,Z;return t()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return Z={groupName:"setting",name:"emailServer",value:{emailServer:{host:c.host,port:c.port,email:c.email,code:c.code}}},p.next=3,(0,a.KU)(Z);case 3:return(y=P.current)===null||y===void 0||y.resetFields(),s(),A.success("\u4FEE\u6539\u90AE\u4EF6\u914D\u7F6E\u6210\u529F"),p.abrupt("return",!0);case 7:case"end":return p.stop()}},$)}));return function($){return G.apply(this,arguments)}}(),children:[(0,e.jsx)(u.Z,{label:"SMTP\u670D\u52A1\u5668\u5730\u5740",name:"host",placeholder:"\u4F8B\u5982:smtp.163.com",required:!0,rules:[{required:!0}]}),(0,e.jsx)(u.Z,{label:"SMTP\u670D\u52A1\u5668\u7AEF\u53E3",name:"port",placeholder:"\u53D1\u9001\u90AE\u4EF6\u7AEF\u53E3\uFF0C\u901A\u5E38\u4E3A465",required:!0,rules:[{required:!0}]}),(0,e.jsx)(u.Z,{label:"SMTP\u6388\u6743\u7801",name:"code",width:"lg",placeholder:"SMTP\u6388\u6743\u7801",required:!0,rules:[{required:!0}],addonAfter:(0,e.jsxs)(l.Z,{children:[(0,e.jsx)("a",{target:"_blank",href:"https://service.mail.qq.com/detail/0/75",children:"QQ\u90AE\u7BB1\u6388\u6743\u7801"}),(0,e.jsx)("a",{target:"_blank",href:"https://help.mail.163.com/faqDetail.do?code=d7a5dc8471cd0c0e8b4b8f4f8e49998b374173cfe9171305fa1ce630d7f67ac286624f309a1a7089",children:"163\u90AE\u7BB1\u6388\u6743\u7801"})]})}),(0,e.jsx)(u.Z,{label:"\u53D1\u4EF6\u90AE\u7BB1",name:"email",placeholder:"\u53D1\u4EF6\u90AE\u7BB1\u5730\u5740",required:!0,rules:[{required:!0}]}),(0,e.jsx)(u.Z,{label:"\u90AE\u4EF6\u6807\u9898",name:"subject",placeholder:"\u90AE\u4EF6\u6807\u9898",required:!0,rules:[{required:!0}]}),(0,e.jsx)(j.Z.Group,{name:"status",label:"\u5F00\u542F\u529F\u80FD",options:[{label:"\u6CE8\u518C",value:"register"}]})]})})})}var K=n(82346);function Q(P){return ie.apply(this,arguments)}function ie(){return ie=v()(t()().mark(function P(S){return t()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",(0,K.request)("/api/pro/two-fa/enable",{method:"POST",data:S}));case 1:case"end":return s.stop()}},P)})),ie.apply(this,arguments)}function he(){return se.apply(this,arguments)}function se(){return se=v()(t()().mark(function P(){return t()().wrap(function(A){for(;;)switch(A.prev=A.next){case 0:return A.abrupt("return",(0,K.request)("/api/pro/two-fa/get-setting",{method:"POST"}));case 1:case"end":return A.stop()}},P)})),se.apply(this,arguments)}var ve=n(29177),ge=n(86548),_e=n(97937),be=n(12119),J=n(97462),re=n(52688),ee=n(62370),oe=n(28036),Ee=n(35930),ce=n(1699);function je(){var P=(0,i.useRef)(),S=(0,K.useModel)("@@initialState"),A=S.initialState,s=S.loading,G=S.error,$=S.refresh,c=S.setInitialState,y=(0,i.useContext)(d.Z),Z=y.message,U=y.notice,p=y.lang,H=(0,i.useRef)(),T=(0,i.useState)(0),b=_()(T,2),r=b[0],f=b[1],x=(0,K.useAccess)();return(0,i.useEffect)(function(){!x.canSeeEnableCe&&he().then(function(o){var g;(g=H.current)===null||g===void 0||g.setFieldsValue({enable:o.data.enable,email:o.data.email,qrcode:o.data.qrcode})})},[r]),(0,e.jsxs)(m.Z,{direction:"column",gutter:[0,10],ghost:!0,children:[(0,e.jsx)(m.Z,{bordered:!0,headerBordered:!0,title:(0,e.jsx)(ve.Z,{}),subTitle:"\u7BA1\u7406\u5458",children:(0,e.jsxs)(O.A,{layout:"horizontal",labelAlign:"right",labelCol:{span:3,offset:0},formRef:P,onFinish:function(){var o=v()(t()().mark(function g(E){var h,C;return t()().wrap(function(w){for(;;)switch(w.prev=w.next){case 0:return w.next=2,(0,a.Jn)({username:E.username,password:E.password,newPassword:E.newPassword});case 2:if(h=w.sent,!(h&&h.data)){w.next=9;break}return(C=P.current)===null||C===void 0||C.resetFields(),Z.success("\u4FEE\u6539\u7BA1\u7406\u5458\u7528\u6237\u540D\u548C\u5BC6\u7801\u6210\u529F"),localStorage.removeItem("token"),$(),w.abrupt("return",!0);case 9:case"end":return w.stop()}},g)}));return function(g){return o.apply(this,arguments)}}(),children:[(0,e.jsx)(J.Z,{name:["enableUsername"],children:function(g){var E=g.enableUsername;return(0,e.jsx)(u.Z,{label:"\u7528\u6237\u540D",name:"username",style:{width:"80%"},initialValue:A==null?void 0:A.user.username,disabled:!E,addonAfter:[(0,e.jsx)(oe.ZP,{type:"link",hidden:!!E,icon:(0,e.jsx)(ge.Z,{}),onClick:function(){var C;(C=P.current)===null||C===void 0||C.setFieldValue("enableUsername",!0)}},"editBtn"),(0,e.jsx)(oe.ZP,{type:"link",hidden:!E,icon:(0,e.jsx)(_e.Z,{}),onClick:function(){var C;(C=P.current)===null||C===void 0||C.setFieldValue("enableUsername",!1)}},"closeBtn")]},"username")}}),(0,e.jsx)(u.Z.Password,{label:"\u5F53\u524D\u5BC6\u7801",name:"password",placeholder:"\u8F93\u5165\u7BA1\u7406\u5458\u5F53\u524D\u5BC6\u7801",rules:[{required:!0}]},"password"),(0,e.jsx)(u.Z.Password,{label:"\u65B0\u5BC6\u7801",name:"newPassword"},"newPasword"),(0,e.jsx)(J.Z,{name:["newPassword"],children:function(g){var E=g.newPassword;return(0,e.jsx)(u.Z.Password,{label:"\u786E\u8BA4\u65B0\u5BC6\u7801",name:"newPassword2",dependencies:["newPassword"],rules:[{required:typeof E!="undefined"&&E!=""},function(h){var C=h.getFieldValue;return{validator:function(w,q){return!q||C("newPassword")===q?Promise.resolve():Promise.reject(new Error("\u4E24\u6B21\u8F93\u5165\u7684\u5BC6\u7801\u4E0D\u4E00\u81F4"))}}}]},"newPasword2")}})]})}),(0,e.jsx)(ce.u,{access:"canSeeEnableCe",showProRibbonTips:!0,children:function(g){var E=g.canSeeEnableCe;return(0,e.jsx)(m.Z,{bordered:!0,headerBordered:!0,title:(0,e.jsx)(be.Z,{}),subTitle:"\u767B\u5F55\u53CC\u56E0\u7D20\u914D\u7F6E",children:(0,e.jsxs)(O.A,{disabled:E,onFinish:function(){var h=v()(t()().mark(function C(R){var w,q;return t()().wrap(function(ae){for(;;)switch(ae.prev=ae.next){case 0:return ae.next=2,Q({email:R.email,enable:R.enable});case 2:w=ae.sent,w&&w.data.qrcode&&((q=H.current)===null||q===void 0||q.setFieldValue("qrcode",w.data.qrcode)),f(r+1);case 5:case"end":return ae.stop()}},C)}));return function(C){return h.apply(this,arguments)}}(),formRef:H,layout:"horizontal",labelAlign:"right",labelCol:{span:3,offset:0},children:[(0,e.jsx)(re.Z,{label:"\u5F00\u542F",name:"enable"}),(0,e.jsx)(u.Z,{label:"\u90AE\u7BB1",name:"email",placeholder:"\u8BF7\u8F93\u5165\u4F60\u7684\u90AE\u7BB1",rules:[{required:!0},{type:"email"}]}),(0,e.jsx)(ee.Z,{name:"qrcode",hidden:!0}),(0,e.jsx)(J.Z,{name:["qrcode"],children:function(C){var R=C.qrcode;if(R)return(0,e.jsx)(ee.Z,{label:"\u7ED1\u5B9A\u4E8C\u7EF4\u7801",tooltip:"\u4F7F\u7528\u652F\u6301 2fa \u7684\u9A8C\u8BC1 App \u626B\u7801\u8BE5\u4E8C\u7EF4\u7801",children:(0,e.jsx)(Ee.Z,{style:{border:"#d1d9e0b3 solid 1px",padding:"10px",borderRadius:"10px"},width:200,src:"data:image/png;base64,".concat(R)})})}})]})})}})]})}var xe={xs:6,sm:6,md:6,lg:3,xl:3,xxl:3,offset:0},me=n(43425),ne=n(86615),pe=n(64317),fe=n(86125),Ce=n(184),k=n(24739),Pe=n(25054),le=n(31199),Se=n(90672),Be=n(9361),Ae=n(21532),Fe=n(86250),de=n(34879),ye=n(44349),ue=n(65451),Te=n(2808),Y=function(S){return(0,e.jsx)(Te.Z,{name:S.name,label:S.label,tooltip:S.tooltip})},X={colorPrimary:"",colorTextBase:"",colorLink:"",colorBgContainer:"",colorBorder:"",colorBgElevated:"",colorBorderSecondary:"colorBorder"},Oe=["borderRadius","wireframe"],Ze=(0,i.forwardRef)(function(P,S){(0,i.useImperativeHandle)(S,function(){return{show:function(){$(!0)},reset:function(){var b;(b=c.current)===null||b===void 0||b.resetFields(["siteLogo","siteTitle","siteCopyright","siteLink","bgImage","bgSize"])}}});var A=(0,i.useState)(!1),s=_()(A,2),G=s[0],$=s[1],c=(0,i.useRef)(),y=(0,i.useContext)(d.Z),Z=y.message,U=y.lang,p=Be.Z.useToken(),H=p.token;return(0,e.jsx)(Ae.ZP,{children:(0,e.jsxs)(Ce.a,{drawerProps:{forceRender:!0},submitter:{render:function(b,r){return(0,e.jsx)(l.Z,{children:r[1]})}},title:"\u81EA\u5B9A\u4E49\u4E3B\u9898",formRef:c,open:G,onOpenChange:function(b){var r;(r=c.current)===null||r===void 0||r.resetFields(["bgImageUpload","siteLogoUpload"]),b&&((0,ue.Py)().then(function(f){var x=f.data.config;if(x){var o;if((o=c.current)===null||o===void 0||o.setFieldsValue({siteLogo:x.siteLogo,siteTitle:x.siteTitle,siteCopyright:x.siteCopyright,siteLink:x.siteLink,bgImage:x.bgImage,loginLogo:x.loginLogo}),!x.bgImage||!x.bgImage.width||x.bgImage.width=="100%"){var g;(g=c.current)===null||g===void 0||g.setFieldValue("bgSize","full")}else{var E;(E=c.current)===null||E===void 0||E.setFieldValue("bgSize","default")}}}),Object.keys(X).map(function(f){var x=f;X[f]!=""&&(x=X[f]),c!=null&&c.current})),$(b)},name:"theme-user",onFinish:function(){var T=v()(t()().mark(function b(r){var f,x,o;return t()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return o={token:{},bgImage:r.bgImage,siteLink:r.siteLink,siteTitle:(f=r.siteTitle)!==null&&f!==void 0?f:"",siteCopyright:r.siteCopyright,siteLogo:(x=r.siteLogo)!==null&&x!==void 0?x:"",loginLogo:r.loginLogo},r.siteLogoUpload&&r.siteLogoUpload.length>0&&(o.siteLogo=r.siteLogoUpload[0].response.data.path),o.bgImage||(o.bgImage={}),r.bgImageUpload&&r.bgImageUpload.length>0&&(o.bgImage.src=r.bgImageUpload[0].response.data.path),o.bgImage.width=r.bgSize=="full"?"100%":"",r.loginLogoUpload&&r.loginLogoUpload.length>0&&(o.loginLogo=r.loginLogoUpload[0].response.data.path),Object.keys(X).map(function(h){o.token||(o.token={});var C=h;X[h]!=""&&(C=X[h]);var R=c.current&&c.current.getFieldValue(C);R&&R.toHexString?R.cleared||(o.token[h]=R.toHexString()):o.token[h]=R}),Oe.map(function(h){o.token||(o.token={});var C=c.current&&c.current.getFieldValue(h);o.token[h]=C}),E.next=10,(0,ue.Z8)(o);case 10:return P.onFinish&&P.onFinish(),Z.success(U("notification.finishTheme")),E.abrupt("return",!0);case 13:case"end":return E.stop()}},b)}));return function(b){return T.apply(this,arguments)}}(),children:[(0,e.jsx)(k.UW,{title:"\u76AE\u80A4\u8272\u7CFB",extra:(0,e.jsx)(re.Z,{name:"enableColor"})}),(0,e.jsx)(J.Z,{name:["enableColor"],children:function(b){var r=b.enableColor;return r&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(k.UW,{children:Y({name:"colorPrimary",label:"\u54C1\u724C\u8272",tooltip:"\u54C1\u724C\u8272\u662F\u4F53\u73B0\u4EA7\u54C1\u7279\u6027\u548C\u4F20\u64AD\u7406\u5FF5\u6700\u76F4\u89C2\u7684\u89C6\u89C9\u5143\u7D20\u4E4B\u4E00\u3002\u5728\u4F60\u5B8C\u6210\u54C1\u724C\u4E3B\u8272\u7684\u9009\u53D6\u4E4B\u540E\uFF0C\u4F1A\u81EA\u52A8\u5E2E\u4F60\u751F\u6210\u4E00\u5957\u5B8C\u6574\u7684\u8272\u677F\uFF0C\u5E76\u8D4B\u4E88\u5B83\u4EEC\u6709\u6548\u7684\u8BBE\u8BA1\u8BED\u4E49"})}),(0,e.jsxs)(k.UW,{children:[Y({name:"colorBgContainer",label:"\u4E3B\u7A97\u53E3\u80CC\u666F\u8272\u53CA\u900F\u660E\u5EA6"}),Y({name:"colorBgElevated",label:"\u5F39\u51FA\u7A97\u80CC\u666F\u8272\u53CA\u900F\u660E\u5EA6"})]}),(0,e.jsxs)(k.UW,{children:[Y({name:"colorTextBase",label:"\u57FA\u7840\u6587\u672C"}),Y({name:"colorLink",label:"\u94FE\u63A5\u6587\u672C"}),Y({name:"colorBorder",label:"\u8FB9\u6846\u8272"})]})]})}}),(0,e.jsx)(k.UW,{title:"\u98CE\u683C",extra:(0,e.jsx)(re.Z,{name:"enableStyle"})}),(0,e.jsx)(J.Z,{name:["enableStyle"],children:function(b){var r=b.enableStyle;return r&&(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(k.UW,{children:(0,e.jsxs)(Fe.Z,{gap:40,children:[(0,e.jsx)(re.Z,{label:"\u7EBF\u6846\u5316",name:"wireframe"}),(0,e.jsx)(Pe.Z,{min:1,max:16,label:"\u5706\u89D2",name:"borderRadius"})]})})})}}),(0,e.jsx)(k.UW,{title:"\u9762\u677F"}),(0,e.jsx)(u.Z,{label:"\u6807\u9898",name:"siteTitle",placeholder:"\u5C55\u793A\u5728\u9762\u677F\u5DE6\u4E0A\u89D2\u53CA\u9875\u9762\u6807\u7B7E\uFF0C\u4E3A\u7A7A\u5219\u4E0D\u663E\u793A"}),(0,e.jsxs)(k.UW,{children:[(0,e.jsx)(de.Z,{label:"Logo",title:"\u4E0A\u4F20 Logo",name:"siteLogoUpload",accept:".jpg,.png,.webp,.svg"}),(0,e.jsx)(u.Z,{width:"md",placeholder:"\u4EE5 https \u6216\u662F http \u5F00\u5934\uFF0C\u4F18\u5148\u4F7F\u7528\u4E0A\u4F20\u56FE\u7247",label:"\u8FDC\u7A0BUrl",name:"siteLogo"})]}),(0,e.jsxs)(k.UW,{children:[(0,e.jsx)(de.Z,{label:"\u80CC\u666F\u56FE",title:"\u4E0A\u4F20\u80CC\u666F\u56FE",name:"bgImageUpload",accept:".jpg,.png,.webp,.svg"}),(0,e.jsx)(u.Z,{width:"md",placeholder:"\u4EE5 https \u6216\u662F http \u5F00\u5934\uFF0C\u4F18\u5148\u4F7F\u7528\u4E0A\u4F20\u56FE\u7247",label:"\u8FDC\u7A0BUrl",name:["bgImage","src"]}),(0,e.jsx)(ne.Z.Group,{name:"bgSize",label:"\u5C3A\u5BF8",initialValue:"full",valueEnum:{full:"\u5168\u5C4F",default:"\u9ED8\u8BA4"}})]}),(0,e.jsx)(k.UW,{children:(0,e.jsx)(J.Z,{name:["bgSize"],children:function(b){var r=b.bgSize;if(r=="default")return(0,e.jsxs)(k.UW,{children:[(0,e.jsx)(le.Z,{width:"xs",name:["bgImage","top"],label:"\u8DDD\u9876\u90E8\u504F\u79FB\u91CF"}),(0,e.jsx)(le.Z,{width:"xs",name:["bgImage","bottom"],label:"\u8DDD\u5E95\u90E8\u504F\u79FB\u91CF"}),(0,e.jsx)(le.Z,{width:"xs",name:["bgImage","left"],label:"\u8DDD\u5DE6\u4FA7\u504F\u79FB\u91CF"}),(0,e.jsx)(le.Z,{width:"xs",name:["bgImage","right"],label:"\u8DDD\u53F3\u4FA7\u504F\u79FB\u91CF"})]})}})}),(0,e.jsx)(ye.Z,{name:"siteLink",label:"\u5E95\u90E8\u94FE\u63A5",showAddButton:!0,hideCopyButton:!0,gap:10,items:[{name:"title",label:"\u6587\u672C"},{name:"href",label:"\u94FE\u63A5"}]}),(0,e.jsx)(Se.Z,{label:"\u7248\u6743\u4FE1\u606F",name:"siteCopyright"}),(0,e.jsxs)(k.UW,{title:"\u767B\u5F55\u9875",children:[(0,e.jsx)(de.Z,{label:"Logo",title:"Logo",name:"loginLogoUpload",accept:".jpg,.png,.webp,.svg"}),(0,e.jsx)(u.Z,{width:"md",placeholder:"\u4EE5 https \u6216\u662F http \u5F00\u5934\uFF0C\u4F18\u5148\u4F7F\u7528\u4E0A\u4F20\u56FE\u7247",label:"\u8FDC\u7A0BUrl",name:"loginLogo"})]})]})})}),De=Ze;function Me(){var P=(0,i.useRef)(),S=(0,i.useRef)(),A=(0,K.useModel)("@@initialState"),s=A.initialState,G=A.loading,$=A.error,c=A.refresh,y=A.setInitialState,Z=(0,K.useAccess)(),U=(0,i.useContext)(d.Z),p=U.message,H=U.lang,T=(0,K.useAntdConfigSetter)();return(0,i.useEffect)(function(){var b,r,f,x,o,g,E,h;(b=P.current)===null||b===void 0||b.setFieldsValue({algorithm:(r=s==null?void 0:s.theme.algorithm)!==null&&r!==void 0?r:"default",mainMenu:(f=s==null?void 0:s.theme.mainMenu)!==null&&f!==void 0?f:"top",compact:(x=s==null?void 0:s.theme.compact)!==null&&x!==void 0?x:"default",fontSize:(o=s==null?void 0:s.theme.fontSize)!==null&&o!==void 0?o:14,fontSizeConsole:(g=s==null?void 0:s.theme.fontSizeConsole)!==null&&g!==void 0?g:12,sideMenu:(E=s==null?void 0:s.theme.sideMenu)!==null&&E!==void 0?E:"default",tablePageSize:(h=s==null?void 0:s.theme.tablePageSize)!==null&&h!==void 0?h:"20"})},[s]),(0,e.jsx)(m.Z,{direction:"column",gutter:[0,10],ghost:!0,children:(0,e.jsxs)(m.Z,{bordered:!0,headerBordered:!0,title:(0,e.jsx)(me.Z,{}),subTitle:"\u57FA\u672C\u914D\u7F6E",children:[!Z.canSeeEnableCe&&(0,e.jsx)(De,{ref:S}),(0,e.jsxs)(O.A,{layout:"horizontal",labelAlign:"right",labelCol:xe,formRef:P,submitter:{render:function(r,f){return[f[1]]}},onFinish:function(){var b=v()(t()().mark(function r(f){var x;return t()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:if(x={algorithm:f.algorithm,mainMenu:f.mainMenu,sideMenu:f.sideMenu,compact:f.compact,fontSizeConsole:f.fontSizeConsole,fontSize:f.fontSize,tablePageSize:f.tablePageSize},!(f.algorithm!=(s==null?void 0:s.theme.algorithm)&&!Z.canSeeEnableCe)){g.next=4;break}return g.next=4,(0,ue.H)({clearColor:!0});case 4:return localStorage.setItem("dpanel-theme",f.algorithm),localStorage.setItem("dpanel-compact",f.compact),localStorage.setItem("dpanel-pagesize",f.tablePageSize),g.next=9,(0,M.Gk)(x);case 9:p.success(H("notification.finishTheme"));case 10:case"end":return g.stop()}},r)}));return function(r){return b.apply(this,arguments)}}(),children:[(0,e.jsx)(ne.Z.Group,{name:"algorithm",label:"\u4E3B\u9898\u76AE\u80A4",initialValue:"default",radioType:"button",valueEnum:function(){var r={default:"\u4EAE\u8272",dark:"\u6697\u8272",system:"\u8DDF\u968F\u7CFB\u7EDF"};return r}}),(0,e.jsx)(ce.u,{access:"canSeeEnableCe",showProRibbonTips:!0,children:function(r){var f=r.canSeeEnableCe;return(0,e.jsx)(J.Z,{name:["algorithm"],children:function(o){var g=o.algorithm;if(g!="system")return(0,e.jsx)(ee.Z,{label:"\u81EA\u5B9A\u4E49\u76AE\u80A4\u914D\u7F6E",children:(0,e.jsxs)(l.Z.Compact,{children:[(0,e.jsx)(oe.ZP,{disabled:f,onClick:function(){var h;(h=S.current)===null||h===void 0||h.show()},icon:(0,e.jsx)(me.Z,{}),children:"\u914D\u7F6E"}),(0,e.jsx)(F.Z,{disabled:f,action:v()(t()().mark(function E(){var h;return t()().wrap(function(R){for(;;)switch(R.prev=R.next){case 0:return R.next=2,(0,ue.H)({clearColor:!0,clearSite:!0});case 2:T(function(w){return w.theme={token:{}},w}),(h=S.current)===null||h===void 0||h.reset(),window.location.reload();case 5:case"end":return R.stop()}},E)})),children:"\u6062\u590D\u9ED8\u8BA4"})]})})}})}}),(0,e.jsx)(ne.Z.Group,{name:"mainMenu",label:"\u4E3B\u83DC\u5355\u4F4D\u7F6E",initialValue:"top",radioType:"button",valueEnum:{top:"\u9876\u90E8",side:"\u4FA7\u9762"}}),(0,e.jsx)(ne.Z.Group,{name:"sideMenu",label:"\u5DE6\u4FA7\u83DC\u5355",initialValue:"default",radioType:"button",valueEnum:{default:"\u9ED8\u8BA4\u5C55\u5F00",collapse:"\u9ED8\u8BA4\u6536\u7F29"}}),(0,e.jsx)(ne.Z.Group,{name:"compact",label:"\u6587\u672C\u5E03\u5C40",initialValue:"default",radioType:"button",valueEnum:{default:"\u9ED8\u8BA4",compact:"\u7D27\u51D1"}}),(0,e.jsx)(ee.Z,{name:"fontSize",label:"\u4E3B\u9898\u5B57\u53F7",initialValue:14,children:(0,e.jsx)(fe.Z,{step:2,max:30,min:8,marks:{8:"8",10:"10",12:"12",14:"14",16:"16",20:"20",26:"26",30:"20"}})}),(0,e.jsx)(ee.Z,{name:"fontSizeConsole",label:"\u63A7\u5236\u53F0\u5B57\u53F7",initialValue:12,children:(0,e.jsx)(fe.Z,{step:2,max:30,min:8,marks:{8:"8",10:"10",12:"12",14:"14",16:"16",20:"20",26:"26",30:"20"}})}),(0,e.jsx)(pe.Z,{initialValue:"20",label:"\u8868\u683C\u5206\u9875\u6570",name:"tablePageSize",valueEnum:{10:"\u6BCF\u987510\u6761",20:"\u6BCF\u987520\u6761",50:"\u6BCF\u987550\u6761",100:"\u6BCF\u9875100\u6761",all:"\u663E\u793A\u5168\u90E8"}})]})]})})}var Ue=n(90078),Re=n(92398);function Ie(){var P=(0,K.useSearchParams)(),S=_()(P,2),A=S[0],s=S[1],G=(0,i.useState)("user"),$=_()(G,2),c=$[0],y=$[1],Z=(0,K.useAccess)();return(0,i.useEffect)(function(){var U;y((U=A.get("tab"))!==null&&U!==void 0?U:"user")},[]),(0,e.jsx)(Ue._z,{children:(0,e.jsx)(m.Z,{children:(0,e.jsx)(Re.Z,{activeKey:c,onChange:function(p){y(p),s("tab="+p)},items:[{key:"user",label:"\u767B\u5F55\u914D\u7F6E",children:(0,e.jsx)(je,{})},{key:"theme",label:"\u754C\u9762\u914D\u7F6E",children:(0,e.jsx)(Me,{})},{key:"notice",label:"\u901A\u77E5\u670D\u52A1",children:(0,e.jsx)(te,{})}].filter(function(U){return!(Z.canSeeEnableCe&&U.key=="notice")})})})})}},97961:function(N,I,n){n.d(I,{GH:function(){return z},MF:function(){return j},_2:function(){return O},fN:function(){return D},ii:function(){return t},vC:function(){return d}});var L=n(15009),_=n.n(L),V=n(99289),B=n.n(V),W=n(82346),t=[{name:"linux/amd64",arch:"amd64",search:["amd64","x86_64","86_64"]},{name:"linux/arm64",arch:"arm64",search:["arm64","arrch64"]},{name:"linux/i386",arch:"386",search:[]},{name:"linux/arm/v6",arch:"arm",search:[]},{name:"linux/arm/v7",arch:"arm",search:[]},{name:"linux/arm/v8",arch:"arm64",search:[]},{name:"linux/ppc64le",arch:"ppc64le",search:[]},{name:"linux/riscv64",arch:"riscv64",search:[]}];function D(l){return v.apply(this,arguments)}function v(){return v=B()(_()().mark(function l(F){return _()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,W.request)("/api/app/image/create-by-dockerfile",{method:"POST",data:F}));case 1:case"end":return e.stop()}},l)})),v.apply(this,arguments)}function d(l){return a.apply(this,arguments)}function a(){return a=B()(_()().mark(function l(F){return _()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,W.request)("/api/app/image/import-by-container-tar",{method:"POST",data:F}));case 1:case"end":return e.stop()}},l)})),a.apply(this,arguments)}function z(l){return m.apply(this,arguments)}function m(){return m=B()(_()().mark(function l(F){return _()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,W.request)("/api/app/image/import-by-image-tar",{method:"POST",data:F}));case 1:case"end":return e.stop()}},l)})),m.apply(this,arguments)}function O(l){return u.apply(this,arguments)}function u(){return u=B()(_()().mark(function l(F){return _()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,W.request)("/api/common/attach/delete",{method:"POST",data:F});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},l)})),u.apply(this,arguments)}function j(){return i.apply(this,arguments)}function i(){return i=B()(_()().mark(function l(){return _()().wrap(function(M){for(;;)switch(M.prev=M.next){case 0:return M.abrupt("return",(0,W.request)("/api/app/image/get-template-list",{method:"POST"}));case 1:case"end":return M.stop()}},l)})),i.apply(this,arguments)}}}]);
