!(function(){var Me=Object.defineProperty,Ae=Object.defineProperties;var ze=Object.getOwnPropertyDescriptors;var le=Object.getOwnPropertySymbols;var Pe=Object.prototype.hasOwnProperty,Be=Object.prototype.propertyIsEnumerable;var ae=(O,_,r)=>_ in O?Me(O,_,{enumerable:!0,configurable:!0,writable:!0,value:r}):O[_]=r,ce=(O,_)=>{for(var r in _||(_={}))Pe.call(_,r)&&ae(O,r,_[r]);if(le)for(var r of le(_))Be.call(_,r)&&ae(O,r,_[r]);return O},he=(O,_)=>Ae(O,ze(_));(self.webpackChunk=self.webpackChunk||[]).push([[8570],{26522:function(O,_,r){"use strict";r.d(_,{Z:function(){return y}});var f=r(87462),T=r(67294),w={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M908 640H804V488c0-4.4-3.6-8-8-8H548v-96h108c8.8 0 16-7.2 16-16V80c0-8.8-7.2-16-16-16H368c-8.8 0-16 7.2-16 16v288c0 8.8 7.2 16 16 16h108v96H228c-4.4 0-8 3.6-8 8v152H116c-8.8 0-16 7.2-16 16v288c0 8.8 7.2 16 16 16h288c8.8 0 16-7.2 16-16V656c0-8.8-7.2-16-16-16H292v-88h440v88H620c-8.8 0-16 7.2-16 16v288c0 8.8 7.2 16 16 16h288c8.8 0 16-7.2 16-16V656c0-8.8-7.2-16-16-16zm-564 76v168H176V716h168zm84-408V140h168v168H428zm420 576H680V716h168v168z"}}]},name:"apartment",theme:"outlined"},m=w,p=r(84089),h=function(t,s){return T.createElement(p.Z,(0,f.Z)({},t,{ref:s,icon:m}))},b=T.forwardRef(h),y=b},64789:function(O,_,r){"use strict";r.d(_,{Z:function(){return y}});var f=r(87462),T=r(67294),w={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"plus-circle",theme:"outlined"},m=w,p=r(84089),h=function(t,s){return T.createElement(p.Z,(0,f.Z)({},t,{ref:s,icon:m}))},b=T.forwardRef(h),y=b},40666:function(O,_,r){"use strict";r.d(_,{Z:function(){return y}});var f=r(87462),T=r(67294),w={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M938 458.8l-29.6-312.6c-1.5-16.2-14.4-29-30.6-30.6L565.2 86h-.4c-3.2 0-5.7 1-7.6 2.9L88.9 557.2a9.96 9.96 0 000 14.1l363.8 363.8c1.9 1.9 4.4 2.9 7.1 2.9s5.2-1 7.1-2.9l468.3-468.3c2-2.1 3-5 2.8-8zM459.7 834.7L189.3 564.3 589 164.6 836 188l23.4 247-399.7 399.7zM680 256c-48.5 0-88 39.5-88 88s39.5 88 88 88 88-39.5 88-88-39.5-88-88-88zm0 120c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"}}]},name:"tag",theme:"outlined"},m=w,p=r(84089),h=function(t,s){return T.createElement(p.Z,(0,f.Z)({},t,{ref:s,icon:m}))},b=T.forwardRef(h),y=b},75458:function(O){(function(_,r){O.exports=r()})(self,()=>(()=>{"use strict";var _={345:(w,m)=>{Object.defineProperty(m,"__esModule",{value:!0}),m.runAndSubscribe=m.forwardEvent=m.EventEmitter=void 0,m.EventEmitter=class{constructor(){this._listeners=[],this._disposed=!1}get event(){return this._event||(this._event=p=>(this._listeners.push(p),{dispose:()=>{if(!this._disposed){for(let h=0;h<this._listeners.length;h++)if(this._listeners[h]===p)return void this._listeners.splice(h,1)}}})),this._event}fire(p,h){const b=[];for(let y=0;y<this._listeners.length;y++)b.push(this._listeners[y]);for(let y=0;y<b.length;y++)b[y].call(void 0,p,h)}dispose(){this.clearListeners(),this._disposed=!0}clearListeners(){this._listeners&&(this._listeners.length=0)}},m.forwardEvent=function(p,h){return p(b=>h.fire(b))},m.runAndSubscribe=function(p,h){return h(void 0),p(b=>h(b))}},859:(w,m)=>{function p(h){for(const b of h)b.dispose();h.length=0}Object.defineProperty(m,"__esModule",{value:!0}),m.getDisposeArrayDisposable=m.disposeArray=m.toDisposable=m.MutableDisposable=m.Disposable=void 0,m.Disposable=class{constructor(){this._disposables=[],this._isDisposed=!1}dispose(){this._isDisposed=!0;for(const h of this._disposables)h.dispose();this._disposables.length=0}register(h){return this._disposables.push(h),h}unregister(h){const b=this._disposables.indexOf(h);b!==-1&&this._disposables.splice(b,1)}},m.MutableDisposable=class{constructor(){this._isDisposed=!1}get value(){return this._isDisposed?void 0:this._value}set value(h){var b;this._isDisposed||h===this._value||((b=this._value)==null||b.dispose(),this._value=h)}clear(){this.value=void 0}dispose(){var h;this._isDisposed=!0,(h=this._value)==null||h.dispose(),this._value=void 0}},m.toDisposable=function(h){return{dispose:h}},m.disposeArray=p,m.getDisposeArrayDisposable=function(h){return{dispose:()=>p(h)}}}},r={};function f(w){var m=r[w];if(m!==void 0)return m.exports;var p=r[w]={exports:{}};return _[w](p,p.exports,f),p.exports}var T={};return(()=>{var w=T;Object.defineProperty(w,"__esModule",{value:!0}),w.SearchAddon=void 0;const m=f(345),p=f(859),h=" ~!@#$%^&*()+`-=[]{}|\\;:\"',./<>?";class b extends p.Disposable{constructor(e){var t;super(),this._highlightedLines=new Set,this._highlightDecorations=[],this._selectedDecoration=this.register(new p.MutableDisposable),this._linesCacheTimeoutId=0,this._linesCacheDisposables=new p.MutableDisposable,this._onDidChangeResults=this.register(new m.EventEmitter),this.onDidChangeResults=this._onDidChangeResults.event,this._highlightLimit=(t=e==null?void 0:e.highlightLimit)!=null?t:1e3}activate(e){this._terminal=e,this.register(this._terminal.onWriteParsed(()=>this._updateMatches())),this.register(this._terminal.onResize(()=>this._updateMatches())),this.register((0,p.toDisposable)(()=>this.clearDecorations()))}_updateMatches(){var e;this._highlightTimeout&&window.clearTimeout(this._highlightTimeout),this._cachedSearchTerm&&((e=this._lastSearchOptions)!=null&&e.decorations)&&(this._highlightTimeout=setTimeout(()=>{const t=this._cachedSearchTerm;this._cachedSearchTerm=void 0,this.findPrevious(t,he(ce({},this._lastSearchOptions),{incremental:!0,noScroll:!0}))},200))}clearDecorations(e){this._selectedDecoration.clear(),(0,p.disposeArray)(this._highlightDecorations),this._highlightDecorations=[],this._highlightedLines.clear(),e||(this._cachedSearchTerm=void 0)}clearActiveDecoration(){this._selectedDecoration.clear()}findNext(e,t){if(!this._terminal)throw new Error("Cannot use addon until it has been loaded");const s=!this._lastSearchOptions||this._didOptionsChange(this._lastSearchOptions,t);this._lastSearchOptions=t,t!=null&&t.decorations&&(this._cachedSearchTerm===void 0||e!==this._cachedSearchTerm||s)&&this._highlightAllMatches(e,t);const i=this._findNextAndSelect(e,t);return this._fireResults(t),this._cachedSearchTerm=e,i}_highlightAllMatches(e,t){if(!this._terminal)throw new Error("Cannot use addon until it has been loaded");if(!e||e.length===0)return void this.clearDecorations();t=t||{},this.clearDecorations(!0);const s=[];let i,o=this._find(e,0,0,t);for(;o&&((i==null?void 0:i.row)!==o.row||(i==null?void 0:i.col)!==o.col)&&!(s.length>=this._highlightLimit);)i=o,s.push(i),o=this._find(e,i.col+i.term.length>=this._terminal.cols?i.row+1:i.row,i.col+i.term.length>=this._terminal.cols?0:i.col+1,t);for(const n of s){const l=this._createResultDecoration(n,t.decorations);l&&(this._highlightedLines.add(l.marker.line),this._highlightDecorations.push({decoration:l,match:n,dispose(){l.dispose()}}))}}_find(e,t,s,i){var l;if(!this._terminal||!e||e.length===0)return(l=this._terminal)==null||l.clearSelection(),void this.clearDecorations();if(s>this._terminal.cols)throw new Error(`Invalid col: ${s} to search in terminal of ${this._terminal.cols} cols`);let o;this._initLinesCache();const n={startRow:t,startCol:s};if(o=this._findInLine(e,n,i),!o)for(let d=t+1;d<this._terminal.buffer.active.baseY+this._terminal.rows&&(n.startRow=d,n.startCol=0,o=this._findInLine(e,n,i),!o);d++);return o}_findNextAndSelect(e,t){var d;if(!this._terminal||!e||e.length===0)return(d=this._terminal)==null||d.clearSelection(),this.clearDecorations(),!1;const s=this._terminal.getSelectionPosition();this._terminal.clearSelection();let i=0,o=0;s&&(this._cachedSearchTerm===e?(i=s.end.x,o=s.end.y):(i=s.start.x,o=s.start.y)),this._initLinesCache();const n={startRow:o,startCol:i};let l=this._findInLine(e,n,t);if(!l)for(let S=o+1;S<this._terminal.buffer.active.baseY+this._terminal.rows&&(n.startRow=S,n.startCol=0,l=this._findInLine(e,n,t),!l);S++);if(!l&&o!==0)for(let S=0;S<o&&(n.startRow=S,n.startCol=0,l=this._findInLine(e,n,t),!l);S++);return!l&&s&&(n.startRow=s.start.y,n.startCol=0,l=this._findInLine(e,n,t)),this._selectResult(l,t==null?void 0:t.decorations,t==null?void 0:t.noScroll)}findPrevious(e,t){if(!this._terminal)throw new Error("Cannot use addon until it has been loaded");const s=!this._lastSearchOptions||this._didOptionsChange(this._lastSearchOptions,t);this._lastSearchOptions=t,t!=null&&t.decorations&&(this._cachedSearchTerm===void 0||e!==this._cachedSearchTerm||s)&&this._highlightAllMatches(e,t);const i=this._findPreviousAndSelect(e,t);return this._fireResults(t),this._cachedSearchTerm=e,i}_didOptionsChange(e,t){return!!t&&(e.caseSensitive!==t.caseSensitive||e.regex!==t.regex||e.wholeWord!==t.wholeWord)}_fireResults(e){if(e!=null&&e.decorations){let t=-1;if(this._selectedDecoration.value){const s=this._selectedDecoration.value.match;for(let i=0;i<this._highlightDecorations.length;i++){const o=this._highlightDecorations[i].match;if(o.row===s.row&&o.col===s.col&&o.size===s.size){t=i;break}}}this._onDidChangeResults.fire({resultIndex:t,resultCount:this._highlightDecorations.length})}}_findPreviousAndSelect(e,t){var S;if(!this._terminal)throw new Error("Cannot use addon until it has been loaded");if(!this._terminal||!e||e.length===0)return(S=this._terminal)==null||S.clearSelection(),this.clearDecorations(),!1;const s=this._terminal.getSelectionPosition();this._terminal.clearSelection();let i=this._terminal.buffer.active.baseY+this._terminal.rows-1,o=this._terminal.cols;const n=!0;this._initLinesCache();const l={startRow:i,startCol:o};let d;if(s&&(l.startRow=i=s.start.y,l.startCol=o=s.start.x,this._cachedSearchTerm!==e&&(d=this._findInLine(e,l,t,!1),d||(l.startRow=i=s.end.y,l.startCol=o=s.end.x))),d||(d=this._findInLine(e,l,t,n)),!d){l.startCol=Math.max(l.startCol,this._terminal.cols);for(let I=i-1;I>=0&&(l.startRow=I,d=this._findInLine(e,l,t,n),!d);I--);}if(!d&&i!==this._terminal.buffer.active.baseY+this._terminal.rows-1)for(let I=this._terminal.buffer.active.baseY+this._terminal.rows-1;I>=i&&(l.startRow=I,d=this._findInLine(e,l,t,n),!d);I--);return this._selectResult(d,t==null?void 0:t.decorations,t==null?void 0:t.noScroll)}_initLinesCache(){const e=this._terminal;this._linesCache||(this._linesCache=new Array(e.buffer.active.length),this._linesCacheDisposables.value=(0,p.getDisposeArrayDisposable)([e.onLineFeed(()=>this._destroyLinesCache()),e.onCursorMove(()=>this._destroyLinesCache()),e.onResize(()=>this._destroyLinesCache())])),window.clearTimeout(this._linesCacheTimeoutId),this._linesCacheTimeoutId=window.setTimeout(()=>this._destroyLinesCache(),15e3)}_destroyLinesCache(){this._linesCache=void 0,this._linesCacheDisposables.clear(),this._linesCacheTimeoutId&&(window.clearTimeout(this._linesCacheTimeoutId),this._linesCacheTimeoutId=0)}_isWholeWord(e,t,s){return(e===0||h.includes(t[e-1]))&&(e+s.length===t.length||h.includes(t[e+s.length]))}_findInLine(e,t,s={},i=!1){var U;const o=this._terminal,n=t.startRow,l=t.startCol,d=o.buffer.active.getLine(n);if(d!=null&&d.isWrapped)return i?void(t.startCol+=o.cols):(t.startRow--,t.startCol+=o.cols,this._findInLine(e,t,s));let S=(U=this._linesCache)==null?void 0:U[n];S||(S=this._translateBufferLineToStringWithWrap(n,!0),this._linesCache&&(this._linesCache[n]=S));const[I,A]=S,N=this._bufferColsToStringOffset(n,l),Z=s.caseSensitive?e:e.toLowerCase(),j=s.caseSensitive?I:I.toLowerCase();let R=-1;if(s.regex){const D=RegExp(Z,"g");let x;if(i)for(;x=D.exec(j.slice(0,N));)R=D.lastIndex-x[0].length,e=x[0],D.lastIndex-=e.length-1;else x=D.exec(j.slice(N)),x&&x[0].length>0&&(R=N+(D.lastIndex-x[0].length),e=x[0])}else i?N-Z.length>=0&&(R=j.lastIndexOf(Z,N-Z.length)):R=j.indexOf(Z,N);if(R>=0){if(s.wholeWord&&!this._isWholeWord(R,j,e))return;let D=0;for(;D<A.length-1&&R>=A[D+1];)D++;let x=D;for(;x<A.length-1&&R+e.length>=A[x+1];)x++;const k=R-A[D],J=R+e.length-A[x],K=this._stringLengthToBufferSize(n+D,k);return{term:e,col:K,row:n+D,size:this._stringLengthToBufferSize(n+x,J)-K+o.cols*(x-D)}}}_stringLengthToBufferSize(e,t){const s=this._terminal.buffer.active.getLine(e);if(!s)return 0;for(let i=0;i<t;i++){const o=s.getCell(i);if(!o)break;const n=o.getChars();n.length>1&&(t-=n.length-1);const l=s.getCell(i+1);l&&l.getWidth()===0&&t++}return t}_bufferColsToStringOffset(e,t){const s=this._terminal;let i=e,o=0,n=s.buffer.active.getLine(i);for(;t>0&&n;){for(let l=0;l<t&&l<s.cols;l++){const d=n.getCell(l);if(!d)break;d.getWidth()&&(o+=d.getCode()===0?1:d.getChars().length)}if(i++,n=s.buffer.active.getLine(i),n&&!n.isWrapped)break;t-=s.cols}return o}_translateBufferLineToStringWithWrap(e,t){var l;const s=this._terminal,i=[],o=[0];let n=s.buffer.active.getLine(e);for(;n;){const d=s.buffer.active.getLine(e+1),S=!!d&&d.isWrapped;let I=n.translateToString(!S&&t);if(S&&d){const A=n.getCell(n.length-1);A&&A.getCode()===0&&A.getWidth()===1&&((l=d.getCell(0))==null?void 0:l.getWidth())===2&&(I=I.slice(0,-1))}if(i.push(I),!S)break;o.push(o[o.length-1]+I.length),e++,n=d}return[i.join(""),o]}_selectResult(e,t,s){const i=this._terminal;if(this._selectedDecoration.clear(),!e)return i.clearSelection(),!1;if(i.select(e.col,e.row,e.size),t){const o=i.registerMarker(-i.buffer.active.baseY-i.buffer.active.cursorY+e.row);if(o){const n=i.registerDecoration({marker:o,x:e.col,width:e.size,backgroundColor:t.activeMatchBackground,layer:"top",overviewRulerOptions:{color:t.activeMatchColorOverviewRuler}});if(n){const l=[];l.push(o),l.push(n.onRender(d=>this._applyStyles(d,t.activeMatchBorder,!0))),l.push(n.onDispose(()=>(0,p.disposeArray)(l))),this._selectedDecoration.value={decoration:n,match:e,dispose(){n.dispose()}}}}}if(!s&&(e.row>=i.buffer.active.viewportY+i.rows||e.row<i.buffer.active.viewportY)){let o=e.row-i.buffer.active.viewportY;o-=Math.floor(i.rows/2),i.scrollLines(o)}return!0}_applyStyles(e,t,s){e.classList.contains("xterm-find-result-decoration")||(e.classList.add("xterm-find-result-decoration"),t&&(e.style.outline=`1px solid ${t}`)),s&&e.classList.add("xterm-find-active-result-decoration")}_createResultDecoration(e,t){const s=this._terminal,i=s.registerMarker(-s.buffer.active.baseY-s.buffer.active.cursorY+e.row);if(!i)return;const o=s.registerDecoration({marker:i,x:e.col,width:e.size,backgroundColor:t.matchBackground,overviewRulerOptions:this._highlightedLines.has(i.line)?void 0:{color:t.matchOverviewRuler,position:"center"}});if(o){const n=[];n.push(i),n.push(o.onRender(l=>this._applyStyles(l,t.matchBorder,!1))),n.push(o.onDispose(()=>(0,p.disposeArray)(n)))}return o}}w.SearchAddon=b})(),T})())},40056:function(O,_,r){"use strict";r.d(_,{Z:function(){return pe}});var f=r(67294),T=r(89739),w=r(4340),m=r(97937),p=r(21640),h=r(78860),b=r(93967),y=r.n(b),e=r(29372),t=r(64217),s=r(42550),i=r(96159),o=r(53124),n=r(11568),l=r(14747),d=r(83559);const S=(a,c,u,g,C)=>({background:a,border:`${(0,n.bf)(g.lineWidth)} ${g.lineType} ${c}`,[`${C}-icon`]:{color:u}}),I=a=>{const{componentCls:c,motionDurationSlow:u,marginXS:g,marginSM:C,fontSize:L,fontSizeLG:z,lineHeight:P,borderRadiusLG:W,motionEaseInOutCirc:B,withDescriptionIconSize:V,colorText:Y,colorTextHeading:G,withDescriptionPadding:X,defaultPadding:$}=a;return{[c]:Object.assign(Object.assign({},(0,l.Wf)(a)),{position:"relative",display:"flex",alignItems:"center",padding:$,wordWrap:"break-word",borderRadius:W,[`&${c}-rtl`]:{direction:"rtl"},[`${c}-content`]:{flex:1,minWidth:0},[`${c}-icon`]:{marginInlineEnd:g,lineHeight:0},"&-description":{display:"none",fontSize:L,lineHeight:P},"&-message":{color:G},[`&${c}-motion-leave`]:{overflow:"hidden",opacity:1,transition:`max-height ${u} ${B}, opacity ${u} ${B},
        padding-top ${u} ${B}, padding-bottom ${u} ${B},
        margin-bottom ${u} ${B}`},[`&${c}-motion-leave-active`]:{maxHeight:0,marginBottom:"0 !important",paddingTop:0,paddingBottom:0,opacity:0}}),[`${c}-with-description`]:{alignItems:"flex-start",padding:X,[`${c}-icon`]:{marginInlineEnd:C,fontSize:V,lineHeight:0},[`${c}-message`]:{display:"block",marginBottom:g,color:G,fontSize:z},[`${c}-description`]:{display:"block",color:Y}},[`${c}-banner`]:{marginBottom:0,border:"0 !important",borderRadius:0}}},A=a=>{const{componentCls:c,colorSuccess:u,colorSuccessBorder:g,colorSuccessBg:C,colorWarning:L,colorWarningBorder:z,colorWarningBg:P,colorError:W,colorErrorBorder:B,colorErrorBg:V,colorInfo:Y,colorInfoBorder:G,colorInfoBg:X}=a;return{[c]:{"&-success":S(C,g,u,a,c),"&-info":S(X,G,Y,a,c),"&-warning":S(P,z,L,a,c),"&-error":Object.assign(Object.assign({},S(V,B,W,a,c)),{[`${c}-description > pre`]:{margin:0,padding:0}})}}},N=a=>{const{componentCls:c,iconCls:u,motionDurationMid:g,marginXS:C,fontSizeIcon:L,colorIcon:z,colorIconHover:P}=a;return{[c]:{"&-action":{marginInlineStart:C},[`${c}-close-icon`]:{marginInlineStart:C,padding:0,overflow:"hidden",fontSize:L,lineHeight:(0,n.bf)(L),backgroundColor:"transparent",border:"none",outline:"none",cursor:"pointer",[`${u}-close`]:{color:z,transition:`color ${g}`,"&:hover":{color:P}}},"&-close-text":{color:z,transition:`color ${g}`,"&:hover":{color:P}}}}},Z=a=>({withDescriptionIconSize:a.fontSizeHeading3,defaultPadding:`${a.paddingContentVerticalSM}px 12px`,withDescriptionPadding:`${a.paddingMD}px ${a.paddingContentHorizontalLG}px`});var j=(0,d.I$)("Alert",a=>[I(a),A(a),N(a)],Z),R=function(a,c){var u={};for(var g in a)Object.prototype.hasOwnProperty.call(a,g)&&c.indexOf(g)<0&&(u[g]=a[g]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var C=0,g=Object.getOwnPropertySymbols(a);C<g.length;C++)c.indexOf(g[C])<0&&Object.prototype.propertyIsEnumerable.call(a,g[C])&&(u[g[C]]=a[g[C]]);return u};const U={success:T.Z,info:h.Z,error:w.Z,warning:p.Z},D=a=>{const{icon:c,prefixCls:u,type:g}=a,C=U[g]||null;return c?(0,i.wm)(c,f.createElement("span",{className:`${u}-icon`},c),()=>({className:y()(`${u}-icon`,c.props.className)})):f.createElement(C,{className:`${u}-icon`})},x=a=>{const{isClosable:c,prefixCls:u,closeIcon:g,handleClose:C,ariaProps:L}=a,z=g===!0||g===void 0?f.createElement(m.Z,null):g;return c?f.createElement("button",Object.assign({type:"button",onClick:C,className:`${u}-close-icon`,tabIndex:0},L),z):null};var J=f.forwardRef((a,c)=>{const{description:u,prefixCls:g,message:C,banner:L,className:z,rootClassName:P,style:W,onMouseEnter:B,onMouseLeave:V,onClick:Y,afterClose:G,showIcon:X,closable:$,closeText:Q,closeIcon:F,action:te,id:Ce}=a,be=R(a,["description","prefixCls","message","banner","className","rootClassName","style","onMouseEnter","onMouseLeave","onClick","afterClose","showIcon","closable","closeText","closeIcon","action","id"]),[ie,Se]=f.useState(!1),se=f.useRef(null);f.useImperativeHandle(c,()=>({nativeElement:se.current}));const{getPrefixCls:_e,direction:ye,alert:v}=f.useContext(o.E_),E=_e("alert",g),[we,Ie,xe]=j(E),De=M=>{var H;Se(!0),(H=a.onClose)===null||H===void 0||H.call(a,M)},ne=f.useMemo(()=>a.type!==void 0?a.type:L?"warning":"info",[a.type,L]),Oe=f.useMemo(()=>typeof $=="object"&&$.closeIcon||Q?!0:typeof $=="boolean"?$:F!==!1&&F!==null&&F!==void 0?!0:!!(v!=null&&v.closable),[Q,F,$,v==null?void 0:v.closable]),oe=L&&X===void 0?!0:X,Le=y()(E,`${E}-${ne}`,{[`${E}-with-description`]:!!u,[`${E}-no-icon`]:!oe,[`${E}-banner`]:!!L,[`${E}-rtl`]:ye==="rtl"},v==null?void 0:v.className,z,P,xe,Ie),$e=(0,t.Z)(be,{aria:!0,data:!0}),Ee=f.useMemo(()=>{var M,H;return typeof $=="object"&&$.closeIcon?$.closeIcon:Q||(F!==void 0?F:typeof(v==null?void 0:v.closable)=="object"&&(!((M=v==null?void 0:v.closable)===null||M===void 0)&&M.closeIcon)?(H=v==null?void 0:v.closable)===null||H===void 0?void 0:H.closeIcon:v==null?void 0:v.closeIcon)},[F,$,Q,v==null?void 0:v.closeIcon]),Te=f.useMemo(()=>{const M=$!=null?$:v==null?void 0:v.closable;if(typeof M=="object"){const{closeIcon:H}=M;return R(M,["closeIcon"])}return{}},[$,v==null?void 0:v.closable]);return we(f.createElement(e.ZP,{visible:!ie,motionName:`${E}-motion`,motionAppear:!1,motionEnter:!1,onLeaveStart:M=>({maxHeight:M.offsetHeight}),onLeaveEnd:G},(M,H)=>{let{className:re,style:Re}=M;return f.createElement("div",Object.assign({id:Ce,ref:(0,s.sQ)(se,H),"data-show":!ie,className:y()(Le,re),style:Object.assign(Object.assign(Object.assign({},v==null?void 0:v.style),W),Re),onMouseEnter:B,onMouseLeave:V,onClick:Y,role:"alert"},$e),oe?f.createElement(D,{description:u,icon:a.icon,prefixCls:E,type:ne}):null,f.createElement("div",{className:`${E}-content`},C?f.createElement("div",{className:`${E}-message`},C):null,u?f.createElement("div",{className:`${E}-description`},u):null),te?f.createElement("div",{className:`${E}-action`},te):null,f.createElement(x,{isClosable:Oe,prefixCls:E,closeIcon:Ee,handleClose:De,ariaProps:Te}))}))}),K=r(15671),de=r(43144),q=r(61120),ue=r(78814),fe=r(82963);function ge(a,c,u){return c=(0,q.Z)(c),(0,fe.Z)(a,(0,ue.Z)()?Reflect.construct(c,u||[],(0,q.Z)(a).constructor):c.apply(a,u))}var ve=r(60136),me=function(a){function c(){var u;return(0,K.Z)(this,c),u=ge(this,c,arguments),u.state={error:void 0,info:{componentStack:""}},u}return(0,ve.Z)(c,a),(0,de.Z)(c,[{key:"componentDidCatch",value:function(g,C){this.setState({error:g,info:C})}},{key:"render",value:function(){const{message:g,description:C,id:L,children:z}=this.props,{error:P,info:W}=this.state,B=(W==null?void 0:W.componentStack)||null,V=typeof g=="undefined"?(P||"").toString():g,Y=typeof C=="undefined"?B:C;return P?f.createElement(J,{id:L,type:"error",message:V,description:f.createElement("pre",{style:{fontSize:"0.9em",overflowX:"auto"}},Y)}):z}}])}(f.Component);const ee=J;ee.ErrorBoundary=me;var pe=ee}}]);
}());