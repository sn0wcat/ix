"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[72464],{74123:(t,e,n)=>{n.d(e,{g:()=>r});const i=t=>t.toUpperCase()==="Primary".toUpperCase(),o=t=>t.toUpperCase()==="Secondary".toUpperCase(),r=function(t,e,n,r,s,a,c){return void 0===r&&(r=!1),void 0===s&&(s=!1),{btn:!0,"btn-primary":i(t)&&!e&&!n,"btn-outline-primary":i(t)&&e&&!n,"btn-invisible-primary":i(t)&&!e&&n,"btn-secondary":o(t)&&!e&&!n,"btn-outline-secondary":o(t)&&e&&!n,"btn-invisible-secondary":o(t)&&!e&&n,"btn-icon":r,"btn-oval":s,selected:o(t)&&(e||n)&&a,disabled:c}}},72464:(t,e,n)=>{n.r(e),n.d(e,{ix_split_button:()=>s,ix_split_button_item:()=>a});var i=n(60598),o=n(74123),r=n(87776);const s=class{constructor(t){(0,i.r)(this,t),this.buttonClick=(0,i.c)(this,"buttonClick",7),this.variant="Primary",this.outline=!1,this.invisible=!1,this.ghost=!1,this.label=void 0,this.icon="",this.splitIcon="context-menu",this.disabled=!1,this.placement="bottom-start",this.toggle=!1}get splitItems(){return Array.from(this.hostElement.querySelectorAll("ix-split-button-item"))}clickOutside(t){this.hostElement.contains(t.target)||(this.toggle=!1)}componentDidLoad(){const t=this.hostElement.querySelector(".anchor");this.popover=this.hostElement.querySelector("ix-dropdown"),this.popperInstance=(0,r.c)(t,this.popover,{strategy:"fixed",placement:this.placement,modifiers:[{name:"offset",options:{offset:[0,0]}},{name:"flip",options:{padding:8}}]}),window.addEventListener("click",this.clickOutside.bind(this))}disconnectedCallback(){var t;null===(t=this.popperInstance)||void 0===t||t.destroy(),window.removeEventListener("click",this.clickOutside.bind(this))}toggleDropdown(){this.toggle=!this.toggle}render(){return(0,i.h)(i.H,{class:"btn-group"},(0,i.h)("button",{class:(0,o.g)(this.variant,this.outline,this.ghost||this.invisible,!this.label,!1,!1,this.disabled),onClick:t=>this.buttonClick.emit(t)},this.icon?(0,i.h)("ix-icon",{name:this.icon}):null," ",this.label),(0,i.h)("button",{class:Object.assign(Object.assign({},(0,o.g)(this.variant,this.outline,this.ghost||this.invisible,!0,!1,!1,this.disabled)),{anchor:!0}),onClick:()=>this.toggleDropdown()},(0,i.h)("ix-icon",{name:this.splitIcon}),(0,i.h)("ix-dropdown",{show:this.toggle},(0,i.h)("slot",null))))}get hostElement(){return(0,i.g)(this)}};s.style=".sc-ix-split-button-h{display:block}";const a=class{constructor(t){(0,i.r)(this,t),this.itemClick=(0,i.c)(this,"itemClick",7),this.icon=void 0,this.label=void 0}render(){return(0,i.h)("ix-dropdown-item",{icon:this.icon,label:this.label,onClick:t=>this.itemClick.emit(t)})}get hostElement(){return(0,i.g)(this)}};a.style=".sc-ix-split-button-item-h{display:block}"},87776:(t,e,n)=>{n.d(e,{c:()=>gt});var i="top",o="bottom",r="right",s="left",a="auto",c=[i,o,r,s],f="start",l="end",p="viewport",u="popper",d=c.reduce((function(t,e){return t.concat([e+"-"+f,e+"-"+l])}),[]),h=[].concat(c,[a]).reduce((function(t,e){return t.concat([e,e+"-"+f,e+"-"+l])}),[]),m=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function v(t){return t?(t.nodeName||"").toLowerCase():null}function g(t){if(null==t)return window;if("[object Window]"!==t.toString()){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function b(t){return t instanceof g(t).Element||t instanceof Element}function y(t){return t instanceof g(t).HTMLElement||t instanceof HTMLElement}function w(t){return"undefined"!=typeof ShadowRoot&&(t instanceof g(t).ShadowRoot||t instanceof ShadowRoot)}const x={name:"applyStyles",enabled:!0,phase:"write",fn:function(t){var e=t.state;Object.keys(e.elements).forEach((function(t){var n=e.styles[t]||{},i=e.attributes[t]||{},o=e.elements[t];y(o)&&v(o)&&(Object.assign(o.style,n),Object.keys(i).forEach((function(t){var e=i[t];!1===e?o.removeAttribute(t):o.setAttribute(t,!0===e?"":e)})))}))},effect:function(t){var e=t.state,n={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,n.popper),e.styles=n,e.elements.arrow&&Object.assign(e.elements.arrow.style,n.arrow),function(){Object.keys(e.elements).forEach((function(t){var i=e.elements[t],o=e.attributes[t]||{},r=Object.keys(e.styles.hasOwnProperty(t)?e.styles[t]:n[t]).reduce((function(t,e){return t[e]="",t}),{});y(i)&&v(i)&&(Object.assign(i.style,r),Object.keys(o).forEach((function(t){i.removeAttribute(t)})))}))}},requires:["computeStyles"]};function O(t){return t.split("-")[0]}var k=Math.max,E=Math.min,j=Math.round;function D(){var t=navigator.userAgentData;return null!=t&&t.brands?t.brands.map((function(t){return t.brand+"/"+t.version})).join(" "):navigator.userAgent}function A(){return!/^((?!chrome|android).)*safari/i.test(D())}function C(t,e,n){void 0===e&&(e=!1),void 0===n&&(n=!1);var i=t.getBoundingClientRect(),o=1,r=1;e&&y(t)&&(o=t.offsetWidth>0&&j(i.width)/t.offsetWidth||1,r=t.offsetHeight>0&&j(i.height)/t.offsetHeight||1);var s=(b(t)?g(t):window).visualViewport,a=!A()&&n,c=(i.left+(a&&s?s.offsetLeft:0))/o,f=(i.top+(a&&s?s.offsetTop:0))/r,l=i.width/o,p=i.height/r;return{width:l,height:p,top:f,right:c+l,bottom:f+p,left:c,x:c,y:f}}function L(t){var e=C(t),n=t.offsetWidth,i=t.offsetHeight;return Math.abs(e.width-n)<=1&&(n=e.width),Math.abs(e.height-i)<=1&&(i=e.height),{x:t.offsetLeft,y:t.offsetTop,width:n,height:i}}function P(t,e){var n=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(n&&w(n)){var i=e;do{if(i&&t.isSameNode(i))return!0;i=i.parentNode||i.host}while(i)}return!1}function W(t){return g(t).getComputedStyle(t)}function M(t){return["table","td","th"].indexOf(v(t))>=0}function H(t){return((b(t)?t.ownerDocument:t.document)||window.document).documentElement}function B(t){return"html"===v(t)?t:t.assignedSlot||t.parentNode||(w(t)?t.host:null)||H(t)}function S(t){return y(t)&&"fixed"!==W(t).position?t.offsetParent:null}function R(t){for(var e=g(t),n=S(t);n&&M(n)&&"static"===W(n).position;)n=S(n);return n&&("html"===v(n)||"body"===v(n)&&"static"===W(n).position)?e:n||function(t){var e=/firefox/i.test(D());if(/Trident/i.test(D())&&y(t)&&"fixed"===W(t).position)return null;var n=B(t);for(w(n)&&(n=n.host);y(n)&&["html","body"].indexOf(v(n))<0;){var i=W(n);if("none"!==i.transform||"none"!==i.perspective||"paint"===i.contain||-1!==["transform","perspective"].indexOf(i.willChange)||e&&"filter"===i.willChange||e&&i.filter&&"none"!==i.filter)return n;n=n.parentNode}return null}(t)||e}function T(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function q(t,e,n){return k(t,E(e,n))}function V(t){return Object.assign({},{top:0,right:0,bottom:0,left:0},t)}function I(t,e){return e.reduce((function(e,n){return e[n]=t,e}),{})}const U={name:"arrow",enabled:!0,phase:"main",fn:function(t){var e,n=t.state,a=t.name,f=t.options,l=n.elements.arrow,p=n.modifiersData.popperOffsets,u=O(n.placement),d=T(u),h=[s,r].indexOf(u)>=0?"height":"width";if(l&&p){var m=function(t,e){return V("number"!=typeof(t="function"==typeof t?t(Object.assign({},e.rects,{placement:e.placement})):t)?t:I(t,c))}(f.padding,n),v=L(l),g="y"===d?i:s,b="y"===d?o:r,y=n.rects.reference[h]+n.rects.reference[d]-p[d]-n.rects.popper[h],w=p[d]-n.rects.reference[d],x=R(l),k=x?"y"===d?x.clientHeight||0:x.clientWidth||0:0,E=y/2-w/2,j=m[g],D=k-v[h]-m[b],A=k/2-v[h]/2+E,C=q(j,A,D),P=d;n.modifiersData[a]=((e={})[P]=C,e.centerOffset=C-A,e)}},effect:function(t){var e=t.state,n=t.options.element,i=void 0===n?"[data-popper-arrow]":n;null!=i&&("string"!=typeof i||(i=e.elements.popper.querySelector(i)))&&P(e.elements.popper,i)&&(e.elements.arrow=i)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function _(t){return t.split("-")[1]}var N={top:"auto",right:"auto",bottom:"auto",left:"auto"};function F(t){var e,n=t.popper,a=t.popperRect,c=t.placement,f=t.variation,p=t.offsets,u=t.position,d=t.gpuAcceleration,h=t.adaptive,m=t.roundOffsets,v=t.isFixed,b=p.x,y=void 0===b?0:b,w=p.y,x=void 0===w?0:w,O="function"==typeof m?m({x:y,y:x}):{x:y,y:x};y=O.x,x=O.y;var k=p.hasOwnProperty("x"),E=p.hasOwnProperty("y"),D=s,A=i,C=window;if(h){var L=R(n),P="clientHeight",M="clientWidth";if(L===g(n)&&"static"!==W(L=H(n)).position&&"absolute"===u&&(P="scrollHeight",M="scrollWidth"),c===i||(c===s||c===r)&&f===l)A=o,x-=(v&&L===C&&C.visualViewport?C.visualViewport.height:L[P])-a.height,x*=d?1:-1;if(c===s||(c===i||c===o)&&f===l)D=r,y-=(v&&L===C&&C.visualViewport?C.visualViewport.width:L[M])-a.width,y*=d?1:-1}var B,S=Object.assign({position:u},h&&N),T=!0===m?function(t){var e=t.x,n=t.y,i=window.devicePixelRatio||1;return{x:j(e*i)/i||0,y:j(n*i)/i||0}}({x:y,y:x}):{x:y,y:x};return y=T.x,x=T.y,d?Object.assign({},S,((B={})[A]=E?"0":"",B[D]=k?"0":"",B.transform=(C.devicePixelRatio||1)<=1?"translate("+y+"px, "+x+"px)":"translate3d("+y+"px, "+x+"px, 0)",B)):Object.assign({},S,((e={})[A]=E?x+"px":"",e[D]=k?y+"px":"",e.transform="",e))}var z={passive:!0};var X={left:"right",right:"left",bottom:"top",top:"bottom"};function Y(t){return t.replace(/left|right|bottom|top/g,(function(t){return X[t]}))}var G={start:"end",end:"start"};function J(t){return t.replace(/start|end/g,(function(t){return G[t]}))}function K(t){var e=g(t);return{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function Q(t){return C(H(t)).left+K(t).scrollLeft}function Z(t){var e=W(t),n=e.overflow,i=e.overflowX,o=e.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+i)}function $(t){return["html","body","#document"].indexOf(v(t))>=0?t.ownerDocument.body:y(t)&&Z(t)?t:$(B(t))}function tt(t,e){var n;void 0===e&&(e=[]);var i=$(t),o=i===(null==(n=t.ownerDocument)?void 0:n.body),r=g(i),s=o?[r].concat(r.visualViewport||[],Z(i)?i:[]):i,a=e.concat(s);return o?a:a.concat(tt(B(s)))}function et(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function nt(t,e,n){return e===p?et(function(t,e){var n=g(t),i=H(t),o=n.visualViewport,r=i.clientWidth,s=i.clientHeight,a=0,c=0;if(o){r=o.width,s=o.height;var f=A();(f||!f&&"fixed"===e)&&(a=o.offsetLeft,c=o.offsetTop)}return{width:r,height:s,x:a+Q(t),y:c}}(t,n)):b(e)?function(t,e){var n=C(t,!1,"fixed"===e);return n.top=n.top+t.clientTop,n.left=n.left+t.clientLeft,n.bottom=n.top+t.clientHeight,n.right=n.left+t.clientWidth,n.width=t.clientWidth,n.height=t.clientHeight,n.x=n.left,n.y=n.top,n}(e,n):et(function(t){var e,n=H(t),i=K(t),o=null==(e=t.ownerDocument)?void 0:e.body,r=k(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),s=k(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),a=-i.scrollLeft+Q(t),c=-i.scrollTop;return"rtl"===W(o||n).direction&&(a+=k(n.clientWidth,o?o.clientWidth:0)-r),{width:r,height:s,x:a,y:c}}(H(t)))}function it(t,e,n,i){var o="clippingParents"===e?function(t){var e=tt(B(t)),n=["absolute","fixed"].indexOf(W(t).position)>=0&&y(t)?R(t):t;return b(n)?e.filter((function(t){return b(t)&&P(t,n)&&"body"!==v(t)})):[]}(t):[].concat(e),r=[].concat(o,[n]),s=r[0],a=r.reduce((function(e,n){var o=nt(t,n,i);return e.top=k(o.top,e.top),e.right=E(o.right,e.right),e.bottom=E(o.bottom,e.bottom),e.left=k(o.left,e.left),e}),nt(t,s,i));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function ot(t){var e,n=t.reference,a=t.element,c=t.placement,p=c?O(c):null,u=c?_(c):null,d=n.x+n.width/2-a.width/2,h=n.y+n.height/2-a.height/2;switch(p){case i:e={x:d,y:n.y-a.height};break;case o:e={x:d,y:n.y+n.height};break;case r:e={x:n.x+n.width,y:h};break;case s:e={x:n.x-a.width,y:h};break;default:e={x:n.x,y:n.y}}var m=p?T(p):null;if(null!=m){var v="y"===m?"height":"width";switch(u){case f:e[m]=e[m]-(n[v]/2-a[v]/2);break;case l:e[m]=e[m]+(n[v]/2-a[v]/2)}}return e}function rt(t,e){void 0===e&&(e={});var n=e,s=n.placement,a=void 0===s?t.placement:s,f=n.strategy,l=void 0===f?t.strategy:f,d=n.boundary,h=void 0===d?"clippingParents":d,m=n.rootBoundary,v=void 0===m?p:m,g=n.elementContext,y=void 0===g?u:g,w=n.altBoundary,x=void 0!==w&&w,O=n.padding,k=void 0===O?0:O,E=V("number"!=typeof k?k:I(k,c)),j=y===u?"reference":u,D=t.rects.popper,A=t.elements[x?j:y],L=it(b(A)?A:A.contextElement||H(t.elements.popper),h,v,l),P=C(t.elements.reference),W=ot({reference:P,element:D,strategy:"absolute",placement:a}),M=et(Object.assign({},D,W)),B=y===u?M:P,S={top:L.top-B.top+E.top,bottom:B.bottom-L.bottom+E.bottom,left:L.left-B.left+E.left,right:B.right-L.right+E.right},R=t.modifiersData.offset;if(y===u&&R){var T=R[a];Object.keys(S).forEach((function(t){var e=[r,o].indexOf(t)>=0?1:-1,n=[i,o].indexOf(t)>=0?"y":"x";S[t]+=T[n]*e}))}return S}function st(t,e){void 0===e&&(e={});var n=e,i=n.placement,o=n.boundary,r=n.rootBoundary,s=n.padding,a=n.flipVariations,f=n.allowedAutoPlacements,l=void 0===f?h:f,p=_(i),u=p?a?d:d.filter((function(t){return _(t)===p})):c,m=u.filter((function(t){return l.indexOf(t)>=0}));0===m.length&&(m=u);var v=m.reduce((function(e,n){return e[n]=rt(t,{placement:n,boundary:o,rootBoundary:r,padding:s})[O(n)],e}),{});return Object.keys(v).sort((function(t,e){return v[t]-v[e]}))}const at={name:"flip",enabled:!0,phase:"main",fn:function(t){var e=t.state,n=t.options,c=t.name;if(!e.modifiersData[c]._skip){for(var l=n.mainAxis,p=void 0===l||l,u=n.altAxis,d=void 0===u||u,h=n.fallbackPlacements,m=n.padding,v=n.boundary,g=n.rootBoundary,b=n.altBoundary,y=n.flipVariations,w=void 0===y||y,x=n.allowedAutoPlacements,k=e.options.placement,E=O(k),j=h||(E===k||!w?[Y(k)]:function(t){if(O(t)===a)return[];var e=Y(t);return[J(t),e,J(e)]}(k)),D=[k].concat(j).reduce((function(t,n){return t.concat(O(n)===a?st(e,{placement:n,boundary:v,rootBoundary:g,padding:m,flipVariations:w,allowedAutoPlacements:x}):n)}),[]),A=e.rects.reference,C=e.rects.popper,L=new Map,P=!0,W=D[0],M=0;M<D.length;M++){var H=D[M],B=O(H),S=_(H)===f,R=[i,o].indexOf(B)>=0,T=R?"width":"height",q=rt(e,{placement:H,boundary:v,rootBoundary:g,altBoundary:b,padding:m}),V=R?S?r:s:S?o:i;A[T]>C[T]&&(V=Y(V));var I=Y(V),U=[];if(p&&U.push(q[B]<=0),d&&U.push(q[V]<=0,q[I]<=0),U.every((function(t){return t}))){W=H,P=!1;break}L.set(H,U)}if(P)for(var N=function(t){var e=D.find((function(e){var n=L.get(e);if(n)return n.slice(0,t).every((function(t){return t}))}));if(e)return W=e,"break"},F=w?3:1;F>0;F--){if("break"===N(F))break}e.placement!==W&&(e.modifiersData[c]._skip=!0,e.placement=W,e.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}};function ct(t,e,n){return void 0===n&&(n={x:0,y:0}),{top:t.top-e.height-n.y,right:t.right-e.width+n.x,bottom:t.bottom-e.height+n.y,left:t.left-e.width-n.x}}function ft(t){return[i,r,o,s].some((function(e){return t[e]>=0}))}const lt={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(t){var e=t.state,n=t.options,o=t.name,a=n.offset,c=void 0===a?[0,0]:a,f=h.reduce((function(t,n){return t[n]=function(t,e,n){var o=O(t),a=[s,i].indexOf(o)>=0?-1:1,c="function"==typeof n?n(Object.assign({},e,{placement:t})):n,f=c[0],l=c[1];return f=f||0,l=(l||0)*a,[s,r].indexOf(o)>=0?{x:l,y:f}:{x:f,y:l}}(n,e.rects,c),t}),{}),l=f[e.placement],p=l.x,u=l.y;null!=e.modifiersData.popperOffsets&&(e.modifiersData.popperOffsets.x+=p,e.modifiersData.popperOffsets.y+=u),e.modifiersData[o]=f}};const pt={name:"preventOverflow",enabled:!0,phase:"main",fn:function(t){var e=t.state,n=t.options,a=t.name,c=n.mainAxis,l=void 0===c||c,p=n.altAxis,u=void 0!==p&&p,d=n.boundary,h=n.rootBoundary,m=n.altBoundary,v=n.padding,g=n.tether,b=void 0===g||g,y=n.tetherOffset,w=void 0===y?0:y,x=rt(e,{boundary:d,rootBoundary:h,padding:v,altBoundary:m}),j=O(e.placement),D=_(e.placement),A=!D,C=T(j),P="x"===C?"y":"x",W=e.modifiersData.popperOffsets,M=e.rects.reference,H=e.rects.popper,B="function"==typeof w?w(Object.assign({},e.rects,{placement:e.placement})):w,S="number"==typeof B?{mainAxis:B,altAxis:B}:Object.assign({mainAxis:0,altAxis:0},B),V=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,I={x:0,y:0};if(W){if(l){var U,N="y"===C?i:s,F="y"===C?o:r,z="y"===C?"height":"width",X=W[C],Y=X+x[N],G=X-x[F],J=b?-H[z]/2:0,K=D===f?M[z]:H[z],Q=D===f?-H[z]:-M[z],Z=e.elements.arrow,$=b&&Z?L(Z):{width:0,height:0},tt=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},et=tt[N],nt=tt[F],it=q(0,M[z],$[z]),ot=A?M[z]/2-J-it-et-S.mainAxis:K-it-et-S.mainAxis,st=A?-M[z]/2+J+it+nt+S.mainAxis:Q+it+nt+S.mainAxis,at=e.elements.arrow&&R(e.elements.arrow),ct=at?"y"===C?at.clientTop||0:at.clientLeft||0:0,ft=null!=(U=null==V?void 0:V[C])?U:0,lt=X+st-ft,pt=q(b?E(Y,X+ot-ft-ct):Y,X,b?k(G,lt):G);W[C]=pt,I[C]=pt-X}if(u){var ut,dt="x"===C?i:s,ht="x"===C?o:r,mt=W[P],vt="y"===P?"height":"width",gt=mt+x[dt],bt=mt-x[ht],yt=-1!==[i,s].indexOf(j),wt=null!=(ut=null==V?void 0:V[P])?ut:0,xt=yt?gt:mt-M[vt]-H[vt]-wt+S.altAxis,Ot=yt?mt+M[vt]+H[vt]-wt-S.altAxis:bt,kt=b&&yt?function(t,e,n){var i=q(t,e,n);return i>n?n:i}(xt,mt,Ot):q(b?xt:gt,mt,b?Ot:bt);W[P]=kt,I[P]=kt-mt}e.modifiersData[a]=I}},requiresIfExists:["offset"]};function ut(t,e,n){void 0===n&&(n=!1);var i,o,r=y(e),s=y(e)&&function(t){var e=t.getBoundingClientRect(),n=j(e.width)/t.offsetWidth||1,i=j(e.height)/t.offsetHeight||1;return 1!==n||1!==i}(e),a=H(e),c=C(t,s,n),f={scrollLeft:0,scrollTop:0},l={x:0,y:0};return(r||!r&&!n)&&(("body"!==v(e)||Z(a))&&(f=(i=e)!==g(i)&&y(i)?{scrollLeft:(o=i).scrollLeft,scrollTop:o.scrollTop}:K(i)),y(e)?((l=C(e,!0)).x+=e.clientLeft,l.y+=e.clientTop):a&&(l.x=Q(a))),{x:c.left+f.scrollLeft-l.x,y:c.top+f.scrollTop-l.y,width:c.width,height:c.height}}function dt(t){var e=new Map,n=new Set,i=[];function o(t){n.add(t.name),[].concat(t.requires||[],t.requiresIfExists||[]).forEach((function(t){if(!n.has(t)){var i=e.get(t);i&&o(i)}})),i.push(t)}return t.forEach((function(t){e.set(t.name,t)})),t.forEach((function(t){n.has(t.name)||o(t)})),i}var ht={placement:"bottom",modifiers:[],strategy:"absolute"};function mt(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return!e.some((function(t){return!(t&&"function"==typeof t.getBoundingClientRect)}))}function vt(t){void 0===t&&(t={});var e=t,n=e.defaultModifiers,i=void 0===n?[]:n,o=e.defaultOptions,r=void 0===o?ht:o;return function(t,e,n){void 0===n&&(n=r);var o,s,a={placement:"bottom",orderedModifiers:[],options:Object.assign({},ht,r),modifiersData:{},elements:{reference:t,popper:e},attributes:{},styles:{}},c=[],f=!1,l={state:a,setOptions:function(n){var o="function"==typeof n?n(a.options):n;p(),a.options=Object.assign({},r,a.options,o),a.scrollParents={reference:b(t)?tt(t):t.contextElement?tt(t.contextElement):[],popper:tt(e)};var s,f,u=function(t){var e=dt(t);return m.reduce((function(t,n){return t.concat(e.filter((function(t){return t.phase===n})))}),[])}((s=[].concat(i,a.options.modifiers),f=s.reduce((function(t,e){var n=t[e.name];return t[e.name]=n?Object.assign({},n,e,{options:Object.assign({},n.options,e.options),data:Object.assign({},n.data,e.data)}):e,t}),{}),Object.keys(f).map((function(t){return f[t]}))));return a.orderedModifiers=u.filter((function(t){return t.enabled})),a.orderedModifiers.forEach((function(t){var e=t.name,n=t.options,i=void 0===n?{}:n,o=t.effect;if("function"==typeof o){var r=o({state:a,name:e,instance:l,options:i}),s=function(){};c.push(r||s)}})),l.update()},forceUpdate:function(){if(!f){var t=a.elements,e=t.reference,n=t.popper;if(mt(e,n)){a.rects={reference:ut(e,R(n),"fixed"===a.options.strategy),popper:L(n)},a.reset=!1,a.placement=a.options.placement,a.orderedModifiers.forEach((function(t){return a.modifiersData[t.name]=Object.assign({},t.data)}));for(var i=0;i<a.orderedModifiers.length;i++)if(!0!==a.reset){var o=a.orderedModifiers[i],r=o.fn,s=o.options,c=void 0===s?{}:s,p=o.name;"function"==typeof r&&(a=r({state:a,options:c,name:p,instance:l})||a)}else a.reset=!1,i=-1}}},update:(o=function(){return new Promise((function(t){l.forceUpdate(),t(a)}))},function(){return s||(s=new Promise((function(t){Promise.resolve().then((function(){s=void 0,t(o())}))}))),s}),destroy:function(){p(),f=!0}};if(!mt(t,e))return l;function p(){c.forEach((function(t){return t()})),c=[]}return l.setOptions(n).then((function(t){!f&&n.onFirstUpdate&&n.onFirstUpdate(t)})),l}}var gt=vt({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(t){var e=t.state,n=t.instance,i=t.options,o=i.scroll,r=void 0===o||o,s=i.resize,a=void 0===s||s,c=g(e.elements.popper),f=[].concat(e.scrollParents.reference,e.scrollParents.popper);return r&&f.forEach((function(t){t.addEventListener("scroll",n.update,z)})),a&&c.addEventListener("resize",n.update,z),function(){r&&f.forEach((function(t){t.removeEventListener("scroll",n.update,z)})),a&&c.removeEventListener("resize",n.update,z)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(t){var e=t.state,n=t.name;e.modifiersData[n]=ot({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(t){var e=t.state,n=t.options,i=n.gpuAcceleration,o=void 0===i||i,r=n.adaptive,s=void 0===r||r,a=n.roundOffsets,c=void 0===a||a,f={placement:O(e.placement),variation:_(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:o,isFixed:"fixed"===e.options.strategy};null!=e.modifiersData.popperOffsets&&(e.styles.popper=Object.assign({},e.styles.popper,F(Object.assign({},f,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:s,roundOffsets:c})))),null!=e.modifiersData.arrow&&(e.styles.arrow=Object.assign({},e.styles.arrow,F(Object.assign({},f,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})},data:{}},x,lt,at,pt,U,{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(t){var e=t.state,n=t.name,i=e.rects.reference,o=e.rects.popper,r=e.modifiersData.preventOverflow,s=rt(e,{elementContext:"reference"}),a=rt(e,{altBoundary:!0}),c=ct(s,i),f=ct(a,o,r),l=ft(c),p=ft(f);e.modifiersData[n]={referenceClippingOffsets:c,popperEscapeOffsets:f,isReferenceHidden:l,hasPopperEscaped:p},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":l,"data-popper-escaped":p})}}]})}}]);