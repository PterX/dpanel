"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5738],{57165:function(ae,V,e){e.d(V,{Z:function(){return K}});var Y=e(5574),a=e.n(Y),J=e(89035),o=e(63713),d=e(83062),S=e(67294),P=e(85893);function K(i){var u=(0,S.useState)({height:800,width:1024}),x=a()(u,2),y=x[0],b=x[1],h=function(){var E=window.innerWidth,R=window.innerHeight;b({height:R,width:E})};(0,S.useEffect)(function(){window.addEventListener("resize",function(){h()}),h()},[i]);var D=i.query?Object.keys(i.query).map(function(Z){return"".concat(Z,"=").concat(i.query[Z])}):[];return(0,P.jsx)(o.Link,{target:"_blank",to:"/console/"+i.container+"?width=".concat(y.width,"&height=").concat(y.height,"&").concat(D.join("&")),children:(0,P.jsxs)(d.Z,{title:i.tips?i.tips:"\u7EC8\u7AEF",children:[(0,P.jsx)(J.Z,{})," ",i.content]})})}},75516:function(ae,V,e){e.d(V,{Z:function(){return x}});var Y=e(89035),a=e(37476),J=e(38345),o=e(97462),d=e(62370),S=e(28036),P=e(63490),K=e(78045),i=e(57165),u=e(85893);function x(y){return(0,u.jsx)(a.Y,{trigger:(0,u.jsx)(S.ZP,{type:"dashed",icon:(0,u.jsx)(Y.Z,{}),children:"Console"}),submitter:!1,children:(0,u.jsxs)(J.Z,{children:[(0,u.jsx)(o.Z,{name:["entryCmd"],children:function(h){var D=h.entryCmd,Z=D?"/bin/"+D:"/bin/sh";return(0,u.jsx)(P.Z,{columns:[{title:"\u5BB9\u5668\u540D\u79F0",key:"name",dataIndex:"name",ellipsis:!0},{title:"\u5DE5\u4F5C\u76EE\u5F55",key:"workDir",dataIndex:"workDir"},{title:"\u72B6\u6001",key:"status",dataIndex:"status",width:150},{title:"\u64CD\u4F5C",key:"status",width:150,render:function(R,w,_){return(0,u.jsx)(i.Z,{container:y.container.Id,query:{cmd:encodeURIComponent(Z),workDir:encodeURIComponent(y.workDir?y.workDir:y.container.Config.WorkingDir)}})}}],dataSource:[{key:1,name:y.container.Id,status:y.container.State.Status,workDir:y.workDir?y.workDir:y.container.Config.WorkingDir}],rowKey:"key",pagination:!1})}}),(0,u.jsx)(d.Z,{name:"entryCmd",label:"Shell\u73AF\u5883\uFF08\u4EC5\u505A\u9ED8\u8BA4\u73AF\u5883\uFF0C\u767B\u5F55\u540E\u53EF\u5207\u6362\u81F3\u5176\u4ED6\u73AF\u5883\uFF09",style:{marginTop:15},initialValue:"sh",children:(0,u.jsxs)(K.ZP.Group,{children:[(0,u.jsx)(K.ZP,{value:"bash",children:"/bin/bash"}),(0,u.jsx)(K.ZP,{value:"sh",children:"/bin/sh"})]})})]})})}},80821:function(ae,V,e){e.d(V,{Z:function(){return i}});var Y=e(5574),a=e.n(Y),J=e(24963),o=e(86738),d=e(28036),S=e(83062),P=e(67294),K=e(85893);function i(u){var x=(0,P.useState)(!1),y=a()(x,2),b=y[0],h=y[1],D=(0,P.useContext)(J.Z),Z=D.lang,E=D.notice,R=D.message,w=function(){h(!0),u.action().then(function(n){if(h(!1),n){typeof u.onSuccess=="function"&&u.onSuccess(n);var H="";u.messageSuccess?typeof u.messageSuccess=="function"?H=u.messageSuccess(n):H=u.messageSuccess.indexOf("notification.")==0?Z(u.messageSuccess):u.messageSuccess:H=Z("notification.finish"),u.asynced?R.info(H):R.success(H)}}).catch(function(n){h(!1),typeof u.onError=="function"&&u.onError(n)})};return u.confirm?(0,K.jsx)(o.Z,{style:{width:500},title:u.confirmTitle?u.confirmTitle:Z("notification.title.tip"),description:typeof u.confirm=="string"&&u.confirm.indexOf("notification.")==0?Z(u.confirm):u.confirm,onConfirm:w,okText:"Yes",cancelText:"No",children:(0,K.jsx)(d.ZP,{disabled:u.disabled,icon:u.icon,loading:b,danger:u.danger,type:u.type,children:u.children})}):(0,K.jsx)(S.Z,{title:u.tips,children:(0,K.jsx)(d.ZP,{style:u.ghost?{padding:0,height:"auto"}:{},disabled:u.disabled,icon:u.icon,loading:b,onClick:w,danger:u.danger,type:u.type,children:u.children})})}},24963:function(ae,V,e){var Y=e(67294),a=(0,Y.createContext)({});V.Z=a},38978:function(ae,V,e){e.r(V),e.d(V,{default:function(){return Se}});var Y=e(5574),a=e.n(Y),J=e(15009),o=e.n(J),d=e(99289),S=e.n(d),P=e(28031),K=e(10641),i=e(67294),u=(0,i.createContext)({}),x=u,y=e(51042),b=e(48689),h=e(42075),D=e(28036),Z=e(80821),E=e(88484),R=e(37476),w=e(91604),_=e(97961),n=e(85893);function H(){var s=(0,i.useRef)(),p=(0,i.useContext)(x),W=p.fileListRef,M=p.containerMd5,N=p.currentPath;return(0,n.jsx)(R.Y,{formRef:s,trigger:(0,n.jsx)(D.ZP,{icon:(0,n.jsx)(E.Z,{}),children:"\u4E0A\u4F20"}),title:"\u4E0A\u4F20\u6587\u4EF6\u5230\u5BB9\u5668",onFinish:function(){var B=S()(o()().mark(function g(F){var $,k,v,z;return o()().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return v=[],F.importFileList&&F.importFileList.map(function(j){v.push({name:j.name,path:j.response.data.path})}),(0,P.ZU)({fileList:v,md5:M,destPath:N}),($=s.current)===null||$===void 0||$.resetFields(),W&&typeof((k=W.current)===null||k===void 0?void 0:k.reloadAndRest)=="function"&&((z=W.current)===null||z===void 0||z.reloadAndRest()),I.abrupt("return",!0);case 6:case"end":return I.stop()}},g)}));return function(g){return B.apply(this,arguments)}}(),children:(0,n.jsx)(w.Z,{name:"importFileList",fieldProps:{multiple:!0,name:"file",action:"/api/common/attach/upload",headers:{Authorization:"Bearer "+localStorage.getItem("token")},onRemove:function(g){return new Promise(function(F){var $;(0,_._2)({path:($=g.response.data.path)!==null&&$!==void 0?$:""}).then(function(k){F(!0)})})}}})})}var re=e(23430),f=e(93162);function L(s){var p=(0,i.useContext)(x),W=p.containerMd5;return(0,n.jsx)(Z.Z,{action:function(){return(0,P._U)({md5:W,fileList:s.selectFileList})},onSuccess:function(N){var B=new Blob([N],{type:"application/zip"});(0,f.saveAs)(B,"export.zip")},icon:(0,n.jsx)(re.Z,{}),children:"\u4E0B\u8F7D"})}var l=e(38345),r=e(63434),ee=e(24739),t=e(5966),xe=e(64317),ce=e(31418),se=e(24963);function Fe(s){var p=(0,i.useContext)(se.Z),W=p.message,M=p.notice,N=p.lang,B=(0,i.useRef)(),g=(0,i.useContext)(x),F=g.currentPath,$=g.reloadFileList,k=g.containerMd5,v=(0,i.useState)(),z=a()(v,2),X=z[0],I=z[1],j=ce.Z.useApp(),m=(0,i.useState)(!1),U=a()(m,2),T=U[0],O=U[1],Q=function(C){var c=C.split(""),G=0,q=0,te=0;return c[1]=="r"&&(G+=4),c[2]=="w"&&(G+=2),c[3]=="x"&&(G+=1),c[4]=="r"&&(q+=4),c[5]=="w"&&(q+=2),c[6]=="x"&&(q+=1),c[7]=="r"&&(te+=4),c[8]=="w"&&(te+=2),c[9]=="x"&&(te+=1),"".concat(G).concat(q).concat(te)},ne=function(C){var c;if((c=B.current)===null||c===void 0||c.setFieldValue("permission",C),C.length>=1){var G;(G=B.current)===null||G===void 0||G.setFieldsValue({ownerRead:C[0]&4,ownerWrite:C[0]&2,ownerExec:C[0]&1})}if(C.length>=2){var q;(q=B.current)===null||q===void 0||q.setFieldsValue({groupRead:C[1]&4,groupWrite:C[1]&2,groupExec:C[1]&1})}if(C.length>=3){var te;(te=B.current)===null||te===void 0||te.setFieldsValue({everyoneRead:C[2]&4,everyoneWrite:C[2]&2,everyoneExec:C[2]&1})}};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(D.ZP,{onClick:function(){if(s.selectFileObject.length==0){var C;return(C=B.current)===null||C===void 0||C.resetFields(),M.error("\u8BF7\u5148\u9009\u62E9\u8981\u4FEE\u6539\u7684\u6587\u4EF6\u6216\u662F\u76EE\u5F55"),O(!1),!1}else(0,P.lE)({md5:k}).then(function(c){if(c.data.list.length==0)return M.error("\u8BE5\u5BB9\u5668\u4E0D\u652F\u6301\u4FEE\u6539\u6587\u4EF6\u6743\u9650"),O(!1),!1;I(c.data.list),O(!0)})},children:"\u6743\u9650"}),(0,n.jsxs)(R.Y,{modalProps:{forceRender:!0},title:s.selectFileObject.length==1?"\u4FEE\u6539 ".concat(s.selectFileObject[0].name," \u6743\u9650"):"\u6279\u91CF\u6587\u4EF6\u4FEE\u6539\u6743\u9650",layout:"horizontal",open:T,onOpenChange:function(C){if(O(C),s.selectFileObject.length==1){var c;ne(Q(s.selectFileObject[0].mode));var G=s.selectFileObject[0].owner;X&&X.map(function(q){q.uid==G&&(G=q.username)}),(c=B.current)===null||c===void 0||c.setFieldValue("owner",G)}},formRef:B,onValuesChange:function(C,c){if(C.permission)ne(C.permission);else{var G=["-",c.ownerRead?"r":"-",c.ownerWrite?"w":"-",c.ownerExec?"x":"-",c.groupRead?"r":"-",c.groupWrite?"w":"-",c.groupExec?"x":"-",c.everyoneRead?"r":"-",c.everyoneWrite?"w":"-",c.everyoneExec?"x":"-"];ne(Q(G.join("")))}},onFinish:function(){var A=S()(o()().mark(function C(c){var G,q,te,Ke;return o()().wrap(function(_e){for(;;)switch(_e.prev=_e.next){case 0:return te=[],s.selectFileObject.map(function(ke){te.push(ke.name)}),_e.next=4,(0,P.OQ)({md5:k,fileList:te,mod:parseInt((G=c.permission)!==null&&G!==void 0?G:"600"),hasChildren:(q=c.hasChildren)!==null&&q!==void 0?q:!0,owner:c.owner});case 4:return Ke=_e.sent,$(),_e.abrupt("return",!0);case 7:case"end":return _e.stop()}},C)}));return function(C){return A.apply(this,arguments)}}(),children:[(0,n.jsxs)(l.Z,{direction:"row",gutter:[20,10],children:[(0,n.jsxs)(l.Z,{bordered:!0,title:"\u6240\u6709\u8005",headerBordered:!0,children:[(0,n.jsx)(r.Z,{label:"\u8BFB\u53D6",name:"ownerRead"}),(0,n.jsx)(r.Z,{label:"\u5199\u5165",name:"ownerWrite"}),(0,n.jsx)(r.Z,{label:"\u6267\u884C",name:"ownerExec"})]}),(0,n.jsxs)(l.Z,{bordered:!0,title:"\u7528\u6237\u7EC4",headerBordered:!0,children:[(0,n.jsx)(r.Z,{label:"\u8BFB\u53D6",name:"groupRead"}),(0,n.jsx)(r.Z,{label:"\u5199\u5165",name:"groupWrite"}),(0,n.jsx)(r.Z,{label:"\u6267\u884C",name:"groupExec"})]}),(0,n.jsxs)(l.Z,{bordered:!0,title:"\u516C\u5171",headerBordered:!0,children:[(0,n.jsx)(r.Z,{label:"\u8BFB\u53D6",name:"everyoneRead"}),(0,n.jsx)(r.Z,{label:"\u5199\u5165",name:"everyoneWrite"}),(0,n.jsx)(r.Z,{label:"\u6267\u884C",name:"everyoneExec"})]})]}),(0,n.jsx)(l.Z,{children:(0,n.jsxs)(ee.UW,{children:[(0,n.jsx)(t.Z,{label:"\u6743\u9650",name:"permission",fieldProps:{maxLength:3},width:"xs"}),(0,n.jsx)(xe.Z,{label:"\u6240\u6709\u8005",name:"owner",width:"sm",options:X==null?void 0:X.map(function(A){return A.username})}),(0,n.jsx)(r.Z,{label:"\u5E94\u7528\u5230\u5B50\u76EE\u5F55",name:"hasChildren",initialValue:!0})]})})]})]})}function ge(s){var p=(0,i.useContext)(x),W=p.currentPath,M=p.reloadFileList,N=p.containerMd5,B=ce.Z.useApp(),g=(0,i.useContext)(se.Z),F=g.notice,$=g.message,k=g.lang;return(0,n.jsx)(D.ZP,{onClick:function(){if(s.selectFileObject.length==0)return F.error("\u8BF7\u5148\u9009\u62E9\u8981\u89E3\u538B\u7684 zip \u6587\u4EF6"),!1;if(s.selectFileObject.length>1)return F.error("\u89E3\u538B\u64CD\u4F5C\u53EA\u652F\u6301\u5355\u6587\u4EF6\u64CD\u4F5C"),!1;var z=s.selectFileObject[0];if(z.name.lastIndexOf(".zip")!=z.name.length-4)return F.error("\u89E3\u538B\u64CD\u4F5C\u53EA\u652F\u6301 zip \u6587\u4EF6"),!1;(0,P.gb)({md5:N,file:z.name}).then(function(X){M()})},children:"\u89E3\u538B"})}function je(s){var p=(0,i.useContext)(x),W=p.fileListRef,M=p.containerMd5,N=p.currentPath,B=p.editFileRef;return(0,n.jsxs)(h.Z,{size:16,wrap:!0,children:[(0,n.jsx)(L,{selectFileList:s.selectFileList}),(0,n.jsx)(H,{}),(0,n.jsx)(Fe,{selectFileObject:s.selectFileObject}),(0,n.jsx)(ge,{selectFileObject:s.selectFileObject}),(0,n.jsx)(D.ZP,{type:"primary",icon:(0,n.jsx)(y.Z,{}),onClick:function(){var F;(F=B.current)===null||F===void 0||F.newFile()},children:"\u65B0\u5EFA\u6587\u4EF6"}),(0,n.jsx)(Z.Z,{danger:!0,type:"default",icon:(0,n.jsx)(b.Z,{}),action:function(){return(0,P.Yx)({md5:M,fileList:s.selectFileList})},onSuccess:function(){var F;if(W&&typeof((F=W.current)===null||F===void 0?void 0:F.reloadAndRest)=="function"){var $;($=W.current)===null||$===void 0||$.reloadAndRest()}},confirm:"notification.confirm.title",children:"\u5220\u9664"})]})}var de=e(83062),le=e(66309);function Oe(s){return s.change==0?(0,n.jsx)(de.Z,{title:"\u5728\u5BB9\u5668\u8FD0\u884C\u65F6\u88AB\u4FEE\u6539",children:(0,n.jsx)(le.Z,{color:"blue",children:"MODIFIED"})}):s.change==1?(0,n.jsx)(de.Z,{title:"\u5728\u5BB9\u5668\u8FD0\u884C\u65F6\u65B0\u589E\u7684\u6587\u4EF6",children:(0,n.jsx)(le.Z,{color:"green",children:"ADD"})}):s.change==2?(0,n.jsx)(de.Z,{title:"\u5728\u5BB9\u5668\u8FD0\u884C\u65F6\u88AB\u5220\u9664\u6587\u4EF6",children:(0,n.jsx)(le.Z,{color:"error",children:"DELETED"})}):s.change==100?(0,n.jsx)(de.Z,{title:"\u6302\u8F7D\u7684\u6301\u4E45\u5316\u76EE\u5F55",children:(0,n.jsx)(le.Z,{color:"cyan",children:"VOLUME"})}):(0,n.jsx)(n.Fragment,{})}var Ce=e(19632),fe=e.n(Ce),ye=e(27254),me=e(25593),ue=(0,i.forwardRef)(function(s,p){var W=(0,i.useContext)(x),M=W.showPath,N=(0,i.useState)([{title:"\u6839\u76EE\u5F55",path:"/"}]),B=a()(N,2),g=B[0],F=B[1];(0,i.useImperativeHandle)(p,function(){return{addHistory:function(v,z){F([].concat(fe()(g),[{title:v,path:z}]))},initHistory:function(v){F([{title:"\u6839\u76EE\u5F55",path:"/"}].concat(fe()(v)))}}});var $=function(v){M(g[v].title,g[v].path);var z=g.filter(function(X,I){return I<=v});F(fe()(z))};return(0,n.jsx)(h.Z.Compact,{children:g.map(function(k,v){return(0,n.jsx)(D.ZP,{icon:(0,n.jsx)(ye.Z,{}),type:"dashed",onClick:function(){$(v)},children:v==g.length-1?(0,n.jsx)(me.Z.Text,{copyable:{text:k.path},children:k.title}):k.title},v)})})}),pe=ue,Pe=e(97269),ve=e(62370),Ee=e(90672),he=e(97462),Te=e(85576),oe=e(95089),ie=(0,i.forwardRef)(function(s,p){var W,M=(0,i.useContext)(se.Z),N=M.message,B=M.notice,g=(0,i.useContext)(x),F=g.currentPath,$=g.reloadFileList,k=g.containerMd5,v=(0,i.useRef)(),z=(0,i.useState)(!1),X=a()(z,2),I=X[0],j=X[1],m=ce.Z.useApp();return(0,i.useImperativeHandle)(p,function(){return{newFile:function(){var T;j(!0),(T=v.current)===null||T===void 0||T.resetFields()},editFile:function(T,O,Q){var ne;(ne=v.current)===null||ne===void 0||ne.resetFields(),N.loading("\u6B63\u5728\u83B7\u53D6\u6587\u4EF6\u5185\u5BB9"),(0,P.LK)({md5:k,file:O}).then(function(A){var C,c;if(A.data.content==""&&Q!="0"){N.error("\u4E0D\u652F\u6301\u7F16\u8F91\u7684\u6587\u4EF6\u7C7B\u578B"),j(!1);return}(C=v.current)===null||C===void 0||C.setFieldValue("newValue",A.data.content),(c=v.current)===null||c===void 0||c.setFieldValue("newName",T),N.destroy(),j(!0)}).finally(function(){N.destroy()})}}}),(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(Te.Z,{width:"800px",title:(W=v.current)!==null&&W!==void 0&&W.getFieldValue("newName")?"\u7F16\u8F91\u6587\u4EF6":"\u65B0\u5EFA\u6587\u4EF6",open:I,onCancel:function(){return j(!1)},footer:!1,forceRender:!0,children:(0,n.jsxs)(Pe.A,{formRef:v,onFinish:function(){var U=S()(o()().mark(function T(O){var Q;return o()().wrap(function(A){for(;;)switch(A.prev=A.next){case 0:return(0,P.C4)({destPath:F,file:O.newName.indexOf("/")!==0?"/"+O.newName:O.newName,content:O.newValue,md5:k}),(Q=v.current)===null||Q===void 0||Q.resetFields(),j(!1),$(),A.abrupt("return",!0);case 5:case"end":return A.stop()}},T)}));return function(T){return U.apply(this,arguments)}}(),children:[(0,n.jsx)(t.Z,{label:"\u6587\u4EF6\u540D",tooltip:"\u7F16\u8F91\u6587\u4EF6\u65F6\u4FEE\u6539\u6587\u4EF6\u540D\u53EF\u5B9E\u73B0\u590D\u5236\u529F\u80FD",name:"newName",fieldProps:{addonBefore:F},placeholder:"\u8BF7\u8F93\u5165\u6587\u4EF6\u540D\uFF1B\u652F\u6301\u65B0\u5EFA\u76EE\u5F55\uFF0C\u9700\u8981\u6307\u5B9A\u5B8C\u6574\u8DEF\u5F84\uFF0C\u4F8B\u5982\uFF1A/test/test.txt"}),(0,n.jsxs)(ve.Z,{label:"\u5185\u5BB9",children:[(0,n.jsx)(Ee.Z,{hidden:!0,name:"newValue"}),(0,n.jsx)(he.Z,{name:["newValue"],children:function(T){var O=T.newValue;return(0,n.jsx)(oe.ZP,{theme:"dark",height:"500px",value:O,onChange:function(ne){var A;(A=v.current)===null||A===void 0||A.setFieldValue("newValue",ne)}})}})]})]})})})}),Re=ie,be=e(75516),we=e(60335),Le=e(93613),Be=e(36693),Ae=e(2741);function De(s){return s.isDir?(0,n.jsx)(me.Z.Link,{onClick:function(){s.onClick&&s.onClick()},children:(0,n.jsxs)(h.Z,{children:[(0,n.jsx)(Le.Z,{}),s.showName]})}):s.isLink?(0,n.jsx)(me.Z.Text,{children:(0,n.jsxs)(h.Z,{children:[(0,n.jsx)(Be.Z,{}),s.showName]})}):(0,n.jsx)(me.Z.Text,{onClick:function(){s.onClick&&s.onClick()},style:{cursor:"pointer"},children:(0,n.jsxs)(h.Z,{children:[(0,n.jsx)(Ae.Z,{}),s.showName]})})}function Ze(s){var p=(0,i.useRef)(),W=(0,i.useRef)(),M=(0,i.useRef)(),N=(0,i.useState)("/"),B=a()(N,2),g=B[0],F=B[1],$=(0,i.useState)(),k=a()($,2),v=k[0],z=k[1];(0,i.useEffect)(function(){if(s.initialValue){for(var I,j=s.initialValue.split("/"),m=[],U="",T=1;T<j.length;T++)U+="/"+j[T],m.push({title:j[T],path:U});X(j[j.length-1],s.initialValue),(I=p.current)===null||I===void 0||I.initHistory([].concat(m))}(0,we.jV)({md5:s.md5}).then(function(O){O.data&&z(O.data.info)})},[s.initialValue]);var X=function(j,m){var U,T;if((U=p.current)===null||U===void 0||U.addHistory(j,m),F(m),M&&typeof((T=M.current)===null||T===void 0?void 0:T.reloadAndRest)=="function"){var O;(O=M.current)===null||O===void 0||O.reloadAndRest()}};return(0,n.jsxs)(x.Provider,{value:{fileListRef:M,containerMd5:s.md5,currentPath:g,showPath:X,reloadFileList:function(){var j;if(M&&typeof((j=M.current)===null||j===void 0?void 0:j.reloadAndRest)=="function"){var m;(m=M.current)===null||m===void 0||m.reloadAndRest()}},editFileRef:W},children:[(0,n.jsx)(K.Z,{scroll:{x:"max-content"},rowSelection:{defaultSelectedRowKeys:[],alwaysShowAlert:!0},toolBarRender:function(){var j=[];return v!=null&&v.Id&&j.push((0,n.jsx)(be.Z,{container:v,workDir:g},"console")),[].concat(j)},tableAlertOptionRender:function(j){var m=j.selectedRowKeys,U=j.selectedRows,T=[];return U.map(function(O){T.push(O.name)}),[(0,n.jsx)(je,{selectFileList:T,selectFileObject:U},"1")]},headerTitle:(0,n.jsx)(pe,{ref:p}),actionRef:M,search:!1,rowKey:"showName",pagination:{pageSize:1e3},request:S()(o()().mark(function I(){return o()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.abrupt("return",new Promise(function(U,T){s.md5&&(0,P.V9)({md5:s.md5,path:g}).then(function(O){if(O.data.list){var Q={data:O.data.list,success:!0,total:O.data.list.length};U(Q)}else U({data:[],success:!0,total:0})})}));case 1:case"end":return m.stop()}},I)})),columns:[{title:"\u540D\u79F0",dataIndex:"showName",key:"name",render:function(Q,m,U,T,O){var Q;return m.isDir?Q=(0,n.jsx)(De,{isDir:!0,onClick:function(){return X(m.showName,m.name)},showName:m.showName}):m.linkName?Q=(0,n.jsx)(De,{isLink:!0,showName:"".concat(m.showName)}):Q=(0,n.jsx)(De,{showName:m.showName,onClick:function(){var A;(A=W.current)===null||A===void 0||A.editFile(m.showName,m.name,m.size)}}),Q}},{title:"\u72B6\u6001",key:"status",width:110,render:function(j,m,U,T,O){return(0,n.jsx)(Oe,{change:m.change})}},{title:"\u6743\u9650",dataIndex:"mode",key:"mode"},{title:"\u7528\u6237",dataIndex:"owner"},{title:"\u7528\u6237\u7EC4",dataIndex:"group"},{title:"\u5927\u5C0F",dataIndex:"size",key:"size"},{title:"\u4FEE\u6539\u65F6\u95F4",dataIndex:"modTime",key:"modTime",sorter:function(j,m){return new Date(j.modTime).getTime()-new Date(m.modTime).getTime()}}]}),(0,n.jsx)(Re,{ref:W})]})}var We=Ze,Me=e(63713),Ie=e(50070);function Ue(){var s,p,W=(0,Me.useParams)(),M=(0,Me.useSearchParams)(),N=a()(M,2),B=N[0],g=N[1],F=(0,i.useContext)(Ie.AppDetailContext);return(0,i.useEffect)(function(){F.reload()},[]),(0,n.jsx)("div",{children:(0,n.jsx)(We,{md5:(s=W.id)!==null&&s!==void 0?s:"",initialValue:(p=B.get("path"))!==null&&p!==void 0?p:""})})}var Se=Ue},50070:function(ae,V,e){e.r(V),e.d(V,{AppDetailContext:function(){return D},default:function(){return Z}});var Y=e(15009),a=e.n(Y),J=e(99289),o=e.n(J),d=e(5574),S=e.n(d),P=e(24963),K=e(60335),i=e(55809),u=e(63713),x=e(25593),y=e(50136),b=e(67294),h=e(85893),D=(0,b.createContext)({});function Z(){var E,R=(0,b.useContext)(P.Z),w=R.lang,_=R.loading,n=R.message,H=(0,u.useParams)(),re=(0,u.useSearchParams)(),f=S()(re,2),L=f[0],l=f[1],r=(E=L.get("tab"))!==null&&E!==void 0?E:"edit",ee=(0,b.useState)("edit"),t=S()(ee,2),xe=t[0],ce=t[1],se=(0,u.useNavigate)(),Fe=(0,b.useState)(1),ge=S()(Fe,2),je=ge[0],de=ge[1],le=[{label:(0,h.jsx)(u.Link,{to:"/app/detail/edit/".concat(H.id,"?tab=edit"),children:"\u5BB9\u5668\u8BE6\u60C5"}),key:"edit"},{label:(0,h.jsx)(u.Link,{to:"/app/detail/network/".concat(H.id,"?tab=network"),children:"\u7F51\u7EDC\u7BA1\u7406"}),key:"network"},{label:(0,h.jsx)(x.Z.Link,{children:"\u6587\u4EF6\u7BA1\u7406"}),key:"file",onClick:function(){n.info(w("app.detail.createExplorerPlugin")),se("/app/detail/file/".concat(H.id,"?tab=file"))}},{label:(0,h.jsx)(x.Z.Link,{children:"\u8FD0\u884C\u65E5\u5FD7"}),key:"log",onClick:function(){se("/app/detail/log/".concat(H.id,"?tab=log"))}},{label:(0,h.jsx)(x.Z.Link,{children:"\u8FD0\u884C\u72B6\u6001"}),key:"stat",onClick:function(){se("/app/detail/stat/".concat(H.id,"?tab=stat"))}},{label:"",key:"containerName",icon:(0,h.jsx)(i.Z,{}),disabled:!0}],Oe=(0,b.useState)(le),Ce=S()(Oe,2),fe=Ce[0],ye=Ce[1];(0,b.useEffect)(function(){_.show(),ce(r);var ue=function(){var pe=o()(a()().mark(function Pe(){var ve,Ee,he;return a()().wrap(function(oe){for(;;)switch(oe.prev=oe.next){case 0:return Ee=le,oe.next=3,(0,K.jV)({md5:(ve=H.id)!==null&&ve!==void 0?ve:""});case 3:he=oe.sent,Ee.map(function(ie){return ie.key=="containerName"&&(ie.label=he.data.info.Name),(!he.data.info.State.Running||he.data.info.State.Restarting)&&(ie.key=="file"||ie.key=="stat")&&(ie.disabled=!0),ie}),ye(Ee),_.destroy();case 7:case"end":return oe.stop()}},Pe)}));return function(){return pe.apply(this,arguments)}}();ue()},[je]);var me=function(pe){ce(pe.key)};return(0,h.jsxs)(D.Provider,{value:{reload:function(){de(je+1)}},children:[(0,h.jsx)(y.Z,{mode:"horizontal",onClick:me,selectedKeys:[xe],items:fe}),(0,h.jsx)(u.Outlet,{})]})}},28031:function(ae,V,e){e.d(V,{C4:function(){return R},LK:function(){return Z},OQ:function(){return _},V9:function(){return S},Yx:function(){return y},ZU:function(){return u},_U:function(){return K},gb:function(){return h},lE:function(){return f},vp:function(){return H}});var Y=e(15009),a=e.n(Y),J=e(99289),o=e.n(J),d=e(63713);function S(l){return P.apply(this,arguments)}function P(){return P=o()(a()().mark(function l(r){return a()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,d.request)("/api/app/explorer/get-path-list",{data:r,method:"POST"});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},l)})),P.apply(this,arguments)}function K(l){return i.apply(this,arguments)}function i(){return i=o()(a()().mark(function l(r){return a()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,d.request)("/api/app/explorer/export",{data:r,method:"POST",responseType:"blob"});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},l)})),i.apply(this,arguments)}function u(l){return x.apply(this,arguments)}function x(){return x=o()(a()().mark(function l(r){return a()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,d.request)("/api/app/explorer/import",{data:r,method:"POST"});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},l)})),x.apply(this,arguments)}function y(l){return b.apply(this,arguments)}function b(){return b=o()(a()().mark(function l(r){return a()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,d.request)("/api/app/explorer/delete",{data:r,method:"POST"});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},l)})),b.apply(this,arguments)}function h(l){return D.apply(this,arguments)}function D(){return D=o()(a()().mark(function l(r){return a()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,d.request)("/api/app/explorer/unzip",{data:r,method:"POST"});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},l)})),D.apply(this,arguments)}function Z(l){return E.apply(this,arguments)}function E(){return E=o()(a()().mark(function l(r){return a()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,d.request)("/api/app/explorer/get-content",{data:r,method:"POST"});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},l)})),E.apply(this,arguments)}function R(l){return w.apply(this,arguments)}function w(){return w=o()(a()().mark(function l(r){return a()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,d.request)("/api/app/explorer/import-file-content",{data:r,method:"POST"});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},l)})),w.apply(this,arguments)}function _(l){return n.apply(this,arguments)}function n(){return n=o()(a()().mark(function l(r){return a()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,d.request)("/api/app/explorer/chmod",{data:r,method:"POST"});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},l)})),n.apply(this,arguments)}function H(l){return re.apply(this,arguments)}function re(){return re=o()(a()().mark(function l(r){return a()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,d.request)("/api/app/volume/backup",{data:r,method:"POST"});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},l)})),re.apply(this,arguments)}function f(l){return L.apply(this,arguments)}function L(){return L=o()(a()().mark(function l(r){return a()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,d.request)("/api/app/explorer/get-passwd",{data:r,method:"POST"});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},l)})),L.apply(this,arguments)}},60335:function(ae,V,e){e.d(V,{IE:function(){return K},IW:function(){return S},KK:function(){return h},LJ:function(){return Z},RF:function(){return _},Re:function(){return R},aF:function(){return H},eE:function(){return y},jV:function(){return u}});var Y=e(15009),a=e.n(Y),J=e(99289),o=e.n(J),d=e(63713);function S(f){return P.apply(this,arguments)}function P(){return P=o()(a()().mark(function f(L){return a()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,d.request)("/api/app/container/status",{method:"POST",data:L}));case 1:case"end":return r.stop()}},f)})),P.apply(this,arguments)}function K(f){return i.apply(this,arguments)}function i(){return i=o()(a()().mark(function f(L){return a()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,d.request)("/api/app/container/get-list",{data:L,method:"POST"}));case 1:case"end":return r.stop()}},f)})),i.apply(this,arguments)}function u(f){return x.apply(this,arguments)}function x(){return x=o()(a()().mark(function f(L){return a()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,d.request)("/api/app/container/get-detail",{data:L,method:"POST"}));case 1:case"end":return r.stop()}},f)})),x.apply(this,arguments)}function y(f){return b.apply(this,arguments)}function b(){return b=o()(a()().mark(function f(L){return a()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,d.request)("/api/app/container/update",{data:L,method:"POST"}));case 1:case"end":return r.stop()}},f)})),b.apply(this,arguments)}function h(){return D.apply(this,arguments)}function D(){return D=o()(a()().mark(function f(){return a()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.abrupt("return",(0,d.request)("/api/app/container/prune",{method:"POST"}));case 1:case"end":return l.stop()}},f)})),D.apply(this,arguments)}function Z(f){return E.apply(this,arguments)}function E(){return E=o()(a()().mark(function f(L){return a()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,d.request)("/api/app/container/export",{method:"POST",data:L,responseType:"blob"}));case 1:case"end":return r.stop()}},f)})),E.apply(this,arguments)}function R(f){return w.apply(this,arguments)}function w(){return w=o()(a()().mark(function f(L){return a()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,d.request)("/api/app/container/commit",{method:"POST",data:L}));case 1:case"end":return r.stop()}},f)})),w.apply(this,arguments)}function _(f){return n.apply(this,arguments)}function n(){return n=o()(a()().mark(function f(L){return a()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,d.request)("/api/app/container/upgrade",{method:"POST",data:L}));case 1:case"end":return r.stop()}},f)})),n.apply(this,arguments)}function H(f){return re.apply(this,arguments)}function re(){return re=o()(a()().mark(function f(L){return a()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,d.request)("/api/app/container/copy",{method:"POST",data:L}));case 1:case"end":return r.stop()}},f)})),re.apply(this,arguments)}},97961:function(ae,V,e){e.d(V,{GH:function(){return x},MF:function(){return D},_2:function(){return b},fN:function(){return P},ii:function(){return S},vC:function(){return i}});var Y=e(15009),a=e.n(Y),J=e(99289),o=e.n(J),d=e(63713),S=[{name:"linux/amd64",arch:"amd64",search:["amd64","x86_64","86_64"]},{name:"linux/arm64",arch:"arm64",search:["arm64","arrch64"]},{name:"linux/i386",arch:"386",search:[]},{name:"linux/arm/v6",arch:"arm",search:[]},{name:"linux/arm/v7",arch:"arm",search:[]},{name:"linux/arm/v8",arch:"arm64",search:[]},{name:"linux/ppc64le",arch:"ppc64le",search:[]},{name:"linux/riscv64",arch:"riscv64",search:[]}];function P(E){return K.apply(this,arguments)}function K(){return K=o()(a()().mark(function E(R){return a()().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.abrupt("return",(0,d.request)("/api/app/image/create-by-dockerfile",{method:"POST",data:R}));case 1:case"end":return _.stop()}},E)})),K.apply(this,arguments)}function i(E){return u.apply(this,arguments)}function u(){return u=o()(a()().mark(function E(R){return a()().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.abrupt("return",(0,d.request)("/api/app/image/import-by-container-tar",{method:"POST",data:R}));case 1:case"end":return _.stop()}},E)})),u.apply(this,arguments)}function x(E){return y.apply(this,arguments)}function y(){return y=o()(a()().mark(function E(R){return a()().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.abrupt("return",(0,d.request)("/api/app/image/import-by-image-tar",{method:"POST",data:R}));case 1:case"end":return _.stop()}},E)})),y.apply(this,arguments)}function b(E){return h.apply(this,arguments)}function h(){return h=o()(a()().mark(function E(R){return a()().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.next=2,(0,d.request)("/api/common/attach/delete",{method:"POST",data:R});case 2:return _.abrupt("return",_.sent);case 3:case"end":return _.stop()}},E)})),h.apply(this,arguments)}function D(){return Z.apply(this,arguments)}function Z(){return Z=o()(a()().mark(function E(){return a()().wrap(function(w){for(;;)switch(w.prev=w.next){case 0:return w.abrupt("return",(0,d.request)("/api/app/image/get-template-list",{method:"POST"}));case 1:case"end":return w.stop()}},E)})),Z.apply(this,arguments)}}}]);
