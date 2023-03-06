"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[83851],{49091:(t,e,o)=>{function i(t){return t.split("-")[1]}function n(t){return"y"===t?"height":"width"}function l(t){return t.split("-")[0]}function r(t){return["top","bottom"].includes(l(t))?"x":"y"}function s(t,e,o){let{reference:s,floating:a}=t;const c=s.x+s.width/2-a.width/2,f=s.y+s.height/2-a.height/2,d=r(e),m=n(d),u=s[m]/2-a[m]/2,h="x"===d;let p;switch(l(e)){case"top":p={x:c,y:s.y-a.height};break;case"bottom":p={x:c,y:s.y+s.height};break;case"right":p={x:s.x+s.width,y:f};break;case"left":p={x:s.x-a.width,y:f};break;default:p={x:s.x,y:s.y}}switch(i(e)){case"start":p[d]-=u*(o&&h?-1:1);break;case"end":p[d]+=u*(o&&h?-1:1)}return p}o.d(e,{a:()=>lt,b:()=>h,c:()=>rt,d:()=>b,f:()=>E,i:()=>R,o:()=>S,s:()=>k});function a(t){return"number"!=typeof t?function(t){return{top:0,right:0,bottom:0,left:0,...t}}(t):{top:t,right:t,bottom:t,left:t}}function c(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}async function f(t,e){var o;void 0===e&&(e={});const{x:i,y:n,platform:l,rects:r,elements:s,strategy:f}=t,{boundary:d="clippingAncestors",rootBoundary:m="viewport",elementContext:u="floating",altBoundary:h=!1,padding:p=0}=e,g=a(p),x=s[h?"floating"===u?"reference":"floating":u],v=c(await l.getClippingRect({element:null==(o=await(null==l.isElement?void 0:l.isElement(x)))||o?x:x.contextElement||await(null==l.getDocumentElement?void 0:l.getDocumentElement(s.floating)),boundary:d,rootBoundary:m,strategy:f})),y="floating"===u?{...r.floating,x:i,y:n}:r.reference,w=await(null==l.getOffsetParent?void 0:l.getOffsetParent(s.floating)),b=await(null==l.isElement?void 0:l.isElement(w))&&await(null==l.getScale?void 0:l.getScale(w))||{x:1,y:1},E=c(l.convertOffsetParentRelativeRectToViewportRelativeRect?await l.convertOffsetParentRelativeRectToViewportRelativeRect({rect:y,offsetParent:w,strategy:f}):y);return{top:(v.top-E.top+g.top)/b.y,bottom:(E.bottom-v.bottom+g.bottom)/b.y,left:(v.left-E.left+g.left)/b.x,right:(E.right-v.right+g.right)/b.x}}const d=Math.min,m=Math.max;function u(t,e,o){return m(t,d(e,o))}const h=t=>({name:"arrow",options:t,async fn(e){const{element:o,padding:l=0}=t||{},{x:s,y:c,placement:f,rects:d,platform:m}=e;if(null==o)return{};const h=a(l),p={x:s,y:c},g=r(f),x=n(g),v=await m.getDimensions(o),y="y"===g?"top":"left",w="y"===g?"bottom":"right",b=d.reference[x]+d.reference[g]-p[g]-d.floating[x],E=p[g]-d.reference[g],R=await(null==m.getOffsetParent?void 0:m.getOffsetParent(o));let S=R?"y"===g?R.clientHeight||0:R.clientWidth||0:0;0===S&&(S=d.floating[x]);const k=b/2-E/2,L=h[y],z=S-v[x]-h[w],P=S/2-v[x]/2+k,T=u(L,P,z),A=null!=i(f)&&P!=T&&d.reference[x]/2-(P<L?h[y]:h[w])-v[x]/2<0;return{[g]:p[g]-(A?P<L?L-P:z-P:0),data:{[g]:T,centerOffset:P-T}}}}),p=["top","right","bottom","left"].reduce(((t,e)=>t.concat(e,e+"-start",e+"-end")),[]),g={left:"right",right:"left",bottom:"top",top:"bottom"};function x(t){return t.replace(/left|right|bottom|top/g,(t=>g[t]))}function v(t,e,o){void 0===o&&(o=!1);const l=i(t),s=r(t),a=n(s);let c="x"===s?l===(o?"end":"start")?"right":"left":"start"===l?"bottom":"top";return e.reference[a]>e.floating[a]&&(c=x(c)),{main:c,cross:x(c)}}const y={start:"end",end:"start"};function w(t){return t.replace(/start|end/g,(t=>y[t]))}const b=function(t){return void 0===t&&(t={}),{name:"autoPlacement",options:t,async fn(e){var o,n,r;const{rects:s,middlewareData:a,placement:c,platform:d,elements:m}=e,{alignment:u,allowedPlacements:h=p,autoAlignment:g=!0,...x}=t,y=void 0!==u||h===p?function(t,e,o){return(t?[...o.filter((e=>i(e)===t)),...o.filter((e=>i(e)!==t))]:o.filter((t=>l(t)===t))).filter((o=>!t||i(o)===t||!!e&&w(o)!==o))}(u||null,g,h):h,b=await f(e,x),E=(null==(o=a.autoPlacement)?void 0:o.index)||0,R=y[E];if(null==R)return{};const{main:S,cross:k}=v(R,s,await(null==d.isRTL?void 0:d.isRTL(m.floating)));if(c!==R)return{reset:{placement:y[0]}};const L=[b[l(R)],b[S],b[k]],z=[...(null==(n=a.autoPlacement)?void 0:n.overflows)||[],{placement:R,overflows:L}],P=y[E+1];if(P)return{data:{index:E+1,overflows:z},reset:{placement:P}};const T=z.slice().sort(((t,e)=>t.overflows[0]-e.overflows[0])),A=null==(r=T.find((t=>{let{overflows:e}=t;return e.every((t=>t<=0))})))?void 0:r.placement,C=A||T[0].placement;return C!==c?{data:{index:E+1,overflows:z},reset:{placement:C}}:{}}}};const E=function(t){return void 0===t&&(t={}),{name:"flip",options:t,async fn(e){var o;const{placement:n,middlewareData:r,rects:s,initialPlacement:a,platform:c,elements:d}=e,{mainAxis:m=!0,crossAxis:u=!0,fallbackPlacements:h,fallbackStrategy:p="bestFit",fallbackAxisSideDirection:g="none",flipAlignment:y=!0,...b}=t,E=l(n),R=l(a)===a,S=await(null==c.isRTL?void 0:c.isRTL(d.floating)),k=h||(R||!y?[x(a)]:function(t){const e=x(t);return[w(t),e,w(e)]}(a));h||"none"===g||k.push(...function(t,e,o,n){const r=i(t);let s=function(t,e,o){const i=["left","right"],n=["right","left"],l=["top","bottom"],r=["bottom","top"];switch(t){case"top":case"bottom":return o?e?n:i:e?i:n;case"left":case"right":return e?l:r;default:return[]}}(l(t),"start"===o,n);return r&&(s=s.map((t=>t+"-"+r)),e&&(s=s.concat(s.map(w)))),s}(a,y,g,S));const L=[a,...k],z=await f(e,b),P=[];let T=(null==(o=r.flip)?void 0:o.overflows)||[];if(m&&P.push(z[E]),u){const{main:t,cross:e}=v(n,s,S);P.push(z[t],z[e])}if(T=[...T,{placement:n,overflows:P}],!P.every((t=>t<=0))){var A;const t=((null==(A=r.flip)?void 0:A.index)||0)+1,e=L[t];if(e)return{data:{index:t,overflows:T},reset:{placement:e}};let o="bottom";switch(p){case"bestFit":{var C;const t=null==(C=T.map((t=>[t,t.overflows.filter((t=>t>0)).reduce(((t,e)=>t+e),0)])).sort(((t,e)=>t[1]-e[1]))[0])?void 0:C[0].placement;t&&(o=t);break}case"initialPlacement":o=a}if(n!==o)return{reset:{placement:o}}}return{}}}},R=function(t){return void 0===t&&(t={}),{name:"inline",options:t,async fn(e){const{placement:o,elements:i,rects:n,platform:s,strategy:f}=e,{padding:u=2,x:h,y:p}=t,g=c(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({rect:n.reference,offsetParent:await(null==s.getOffsetParent?void 0:s.getOffsetParent(i.floating)),strategy:f}):n.reference),x=await(null==s.getClientRects?void 0:s.getClientRects(i.reference))||[],v=a(u);const y=await s.getElementRects({reference:{getBoundingClientRect:function(){if(2===x.length&&x[0].left>x[1].right&&null!=h&&null!=p)return x.find((t=>h>t.left-v.left&&h<t.right+v.right&&p>t.top-v.top&&p<t.bottom+v.bottom))||g;if(x.length>=2){if("x"===r(o)){const t=x[0],e=x[x.length-1],i="top"===l(o),n=t.top,r=e.bottom,s=i?t.left:e.left,a=i?t.right:e.right;return{top:n,bottom:r,left:s,right:a,width:a-s,height:r-n,x:s,y:n}}const t="left"===l(o),e=m(...x.map((t=>t.right))),i=d(...x.map((t=>t.left))),n=x.filter((o=>t?o.left===i:o.right===e)),s=n[0].top,a=n[n.length-1].bottom;return{top:s,bottom:a,left:i,right:e,width:e-i,height:a-s,x:i,y:s}}return g}},floating:i.floating,strategy:f});return n.reference.x!==y.reference.x||n.reference.y!==y.reference.y||n.reference.width!==y.reference.width||n.reference.height!==y.reference.height?{reset:{rects:y}}:{}}}};const S=function(t){return void 0===t&&(t=0),{name:"offset",options:t,async fn(e){const{x:o,y:n}=e,s=await async function(t,e){const{placement:o,platform:n,elements:s}=t,a=await(null==n.isRTL?void 0:n.isRTL(s.floating)),c=l(o),f=i(o),d="x"===r(o),m=["left","top"].includes(c)?-1:1,u=a&&d?-1:1,h="function"==typeof e?e(t):e;let{mainAxis:p,crossAxis:g,alignmentAxis:x}="number"==typeof h?{mainAxis:h,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...h};return f&&"number"==typeof x&&(g="end"===f?-1*x:x),d?{x:g*u,y:p*m}:{x:p*m,y:g*u}}(e,t);return{x:o+s.x,y:n+s.y,data:s}}}};const k=function(t){return void 0===t&&(t={}),{name:"shift",options:t,async fn(e){const{x:o,y:i,placement:n}=e,{mainAxis:s=!0,crossAxis:a=!1,limiter:c={fn:t=>{let{x:e,y:o}=t;return{x:e,y:o}}},...d}=t,m={x:o,y:i},h=await f(e,d),p=r(l(n)),g="x"===p?"y":"x";let x=m[p],v=m[g];if(s){const t="y"===p?"bottom":"right";x=u(x+h["y"===p?"top":"left"],x,x-h[t])}if(a){const t="y"===g?"bottom":"right";v=u(v+h["y"===g?"top":"left"],v,v-h[t])}const y=c.fn({...e,[p]:x,[g]:v});return{...y,data:{x:y.x-o,y:y.y-i}}}}};function L(t){var e;return(null==(e=t.ownerDocument)?void 0:e.defaultView)||window}function z(t){return L(t).getComputedStyle(t)}function P(t){return F(t)?(t.nodeName||"").toLowerCase():""}let T;function A(){if(T)return T;const t=navigator.userAgentData;return t&&Array.isArray(t.brands)?(T=t.brands.map((t=>t.brand+"/"+t.version)).join(" "),T):navigator.userAgent}function C(t){return t instanceof L(t).HTMLElement}function D(t){return t instanceof L(t).Element}function F(t){return t instanceof L(t).Node}function O(t){if("undefined"==typeof ShadowRoot)return!1;return t instanceof L(t).ShadowRoot||t instanceof ShadowRoot}function V(t){const{overflow:e,overflowX:o,overflowY:i,display:n}=z(t);return/auto|scroll|overlay|hidden|clip/.test(e+i+o)&&!["inline","contents"].includes(n)}function B(t){return["table","td","th"].includes(P(t))}function I(t){const e=/firefox/i.test(A()),o=z(t),i=o.backdropFilter||o.WebkitBackdropFilter;return"none"!==o.transform||"none"!==o.perspective||!!i&&"none"!==i||e&&"filter"===o.willChange||e&&!!o.filter&&"none"!==o.filter||["transform","perspective"].some((t=>o.willChange.includes(t)))||["paint","layout","strict","content"].some((t=>{const e=o.contain;return null!=e&&e.includes(t)}))}function W(){return!/^((?!chrome|android).)*safari/i.test(A())}function H(t){return["html","body","#document"].includes(P(t))}const M=Math.min,U=Math.max,N=Math.round;function q(t){const e=z(t);let o=parseFloat(e.width),i=parseFloat(e.height);const n=t.offsetWidth,l=t.offsetHeight,r=N(o)!==n||N(i)!==l;return r&&(o=n,i=l),{width:o,height:i,fallback:r}}function $(t){return D(t)?t:t.contextElement}const _={x:1,y:1};function j(t){const e=$(t);if(!C(e))return _;const o=e.getBoundingClientRect(),{width:i,height:n,fallback:l}=q(e);let r=(l?N(o.width):o.width)/i,s=(l?N(o.height):o.height)/n;return r&&Number.isFinite(r)||(r=1),s&&Number.isFinite(s)||(s=1),{x:r,y:s}}function X(t,e,o,i){var n,l;void 0===e&&(e=!1),void 0===o&&(o=!1);const r=t.getBoundingClientRect(),s=$(t);let a=_;e&&(i?D(i)&&(a=j(i)):a=j(t));const c=s?L(s):window,f=!W()&&o;let d=(r.left+(f&&(null==(n=c.visualViewport)?void 0:n.offsetLeft)||0))/a.x,m=(r.top+(f&&(null==(l=c.visualViewport)?void 0:l.offsetTop)||0))/a.y,u=r.width/a.x,h=r.height/a.y;if(s){const t=L(s),e=i&&D(i)?L(i):i;let o=t.frameElement;for(;o&&i&&e!==t;){const t=j(o),e=o.getBoundingClientRect(),i=getComputedStyle(o);e.x+=(o.clientLeft+parseFloat(i.paddingLeft))*t.x,e.y+=(o.clientTop+parseFloat(i.paddingTop))*t.y,d*=t.x,m*=t.y,u*=t.x,h*=t.y,d+=e.x,m+=e.y,o=L(o).frameElement}}return{width:u,height:h,top:m,right:d+u,bottom:m+h,left:d,x:d,y:m}}function Y(t){return((F(t)?t.ownerDocument:t.document)||window.document).documentElement}function G(t){return D(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function J(t){return X(Y(t)).left+G(t).scrollLeft}function K(t,e,o){const i=C(e),n=Y(e),l=X(t,!0,"fixed"===o,e);let r={scrollLeft:0,scrollTop:0};const s={x:0,y:0};if(i||!i&&"fixed"!==o)if(("body"!==P(e)||V(n))&&(r=G(e)),C(e)){const t=X(e,!0);s.x=t.x+e.clientLeft,s.y=t.y+e.clientTop}else n&&(s.x=J(n));return{x:l.left+r.scrollLeft-s.x,y:l.top+r.scrollTop-s.y,width:l.width,height:l.height}}function Q(t){if("html"===P(t))return t;const e=t.assignedSlot||t.parentNode||(O(t)?t.host:null)||Y(t);return O(e)?e.host:e}function Z(t){return C(t)&&"fixed"!==z(t).position?t.offsetParent:null}function tt(t){const e=L(t);let o=Z(t);for(;o&&B(o)&&"static"===z(o).position;)o=Z(o);return o&&("html"===P(o)||"body"===P(o)&&"static"===z(o).position&&!I(o))?e:o||function(t){let e=Q(t);for(;C(e)&&!H(e);){if(I(e))return e;e=Q(e)}return null}(t)||e}function et(t){const e=Q(t);return H(e)?t.ownerDocument.body:C(e)&&V(e)?e:et(e)}function ot(t,e){var o;void 0===e&&(e=[]);const i=et(t),n=i===(null==(o=t.ownerDocument)?void 0:o.body),l=L(i);return n?e.concat(l,l.visualViewport||[],V(i)?i:[]):e.concat(i,ot(i))}function it(t,e,o){return"viewport"===e?c(function(t,e){const o=L(t),i=Y(t),n=o.visualViewport;let l=i.clientWidth,r=i.clientHeight,s=0,a=0;if(n){l=n.width,r=n.height;const t=W();(t||!t&&"fixed"===e)&&(s=n.offsetLeft,a=n.offsetTop)}return{width:l,height:r,x:s,y:a}}(t,o)):D(e)?function(t,e){const o=X(t,!0,"fixed"===e),i=o.top+t.clientTop,n=o.left+t.clientLeft,l=C(t)?j(t):{x:1,y:1},r=t.clientWidth*l.x,s=t.clientHeight*l.y,a=n*l.x,c=i*l.y;return{top:c,left:a,right:a+r,bottom:c+s,x:a,y:c,width:r,height:s}}(e,o):c(function(t){var e;const o=Y(t),i=G(t),n=null==(e=t.ownerDocument)?void 0:e.body,l=U(o.scrollWidth,o.clientWidth,n?n.scrollWidth:0,n?n.clientWidth:0),r=U(o.scrollHeight,o.clientHeight,n?n.scrollHeight:0,n?n.clientHeight:0);let s=-i.scrollLeft+J(t);const a=-i.scrollTop;return"rtl"===z(n||o).direction&&(s+=U(o.clientWidth,n?n.clientWidth:0)-l),{width:l,height:r,x:s,y:a}}(Y(t)))}const nt={getClippingRect:function(t){let{element:e,boundary:o,rootBoundary:i,strategy:n}=t;const l="clippingAncestors"===o?function(t,e){const o=e.get(t);if(o)return o;let i=ot(t).filter((t=>D(t)&&"body"!==P(t))),n=null;const l="fixed"===z(t).position;let r=l?Q(t):t;for(;D(r)&&!H(r);){const t=z(r),e=I(r);(l?e||n:e||"static"!==t.position||!n||!["absolute","fixed"].includes(n.position))?n=t:i=i.filter((t=>t!==r)),r=Q(r)}return e.set(t,i),i}(e,this._c):[].concat(o),r=[...l,i],s=r[0],a=r.reduce(((t,o)=>{const i=it(e,o,n);return t.top=U(i.top,t.top),t.right=M(i.right,t.right),t.bottom=M(i.bottom,t.bottom),t.left=U(i.left,t.left),t}),it(e,s,n));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}},convertOffsetParentRelativeRectToViewportRelativeRect:function(t){let{rect:e,offsetParent:o,strategy:i}=t;const n=C(o),l=Y(o);if(o===l)return e;let r={scrollLeft:0,scrollTop:0},s={x:1,y:1};const a={x:0,y:0};if((n||!n&&"fixed"!==i)&&(("body"!==P(o)||V(l))&&(r=G(o)),C(o))){const t=X(o);s=j(o),a.x=t.x+o.clientLeft,a.y=t.y+o.clientTop}return{width:e.width*s.x,height:e.height*s.y,x:e.x*s.x-r.scrollLeft*s.x+a.x,y:e.y*s.y-r.scrollTop*s.y+a.y}},isElement:D,getDimensions:function(t){return q(t)},getOffsetParent:tt,getDocumentElement:Y,getScale:j,async getElementRects(t){let{reference:e,floating:o,strategy:i}=t;const n=this.getOffsetParent||tt,l=this.getDimensions;return{reference:K(e,await n(o),i),floating:{x:0,y:0,...await l(o)}}},getClientRects:t=>Array.from(t.getClientRects()),isRTL:t=>"rtl"===z(t).direction};function lt(t,e,o,i){void 0===i&&(i={});const{ancestorScroll:n=!0,ancestorResize:l=!0,elementResize:r=!0,animationFrame:s=!1}=i,a=n&&!s,c=a||l?[...D(t)?ot(t):t.contextElement?ot(t.contextElement):[],...ot(e)]:[];c.forEach((t=>{a&&t.addEventListener("scroll",o,{passive:!0}),l&&t.addEventListener("resize",o)}));let f,d=null;if(r){let i=!0;d=new ResizeObserver((()=>{i||o(),i=!1})),D(t)&&!s&&d.observe(t),D(t)||!t.contextElement||s||d.observe(t.contextElement),d.observe(e)}let m=s?X(t):null;return s&&function e(){const i=X(t);!m||i.x===m.x&&i.y===m.y&&i.width===m.width&&i.height===m.height||o();m=i,f=requestAnimationFrame(e)}(),o(),()=>{var t;c.forEach((t=>{a&&t.removeEventListener("scroll",o),l&&t.removeEventListener("resize",o)})),null==(t=d)||t.disconnect(),d=null,s&&cancelAnimationFrame(f)}}const rt=(t,e,o)=>{const i=new Map,n={platform:nt,...o},l={...n.platform,_c:i};return(async(t,e,o)=>{const{placement:i="bottom",strategy:n="absolute",middleware:l=[],platform:r}=o,a=l.filter(Boolean),c=await(null==r.isRTL?void 0:r.isRTL(e));let f=await r.getElementRects({reference:t,floating:e,strategy:n}),{x:d,y:m}=s(f,i,c),u=i,h={},p=0;for(let g=0;g<a.length;g++){const{name:o,fn:l}=a[g],{x:x,y:v,data:y,reset:w}=await l({x:d,y:m,initialPlacement:i,placement:u,strategy:n,middlewareData:h,rects:f,platform:r,elements:{reference:t,floating:e}});d=null!=x?x:d,m=null!=v?v:m,h={...h,[o]:{...h[o],...y}},w&&p<=50&&(p++,"object"==typeof w&&(w.placement&&(u=w.placement),w.rects&&(f=!0===w.rects?await r.getElementRects({reference:t,floating:e,strategy:n}):w.rects),({x:d,y:m}=s(f,u,c))),g=-1)}return{x:d,y:m,placement:u,strategy:n,middlewareData:h}})(t,e,{...n,platform:l})}},83851:(t,e,o)=>{o.r(e),o.d(e,{ix_validation_tooltip:()=>l});var i=o(95269),n=o(49091);const l=class{constructor(t){(0,i.r)(this,t),this.onSubmitBind=this.onSubmit.bind(this),this.onInputFocusBind=this.onInputFocus.bind(this),this.message=void 0,this.placement="top",this.isInputValid=!0,this.tooltipPosition=void 0,this.arrowPosition=void 0}get arrow(){return this.hostElement.querySelector("#arrow")}get inputElement(){return this.hostElement.querySelector("input")}get formElement(){return this.inputElement.form}get tooltipElement(){return this.hostElement.querySelector(".validation-tooltip")}destoryAutoUpdate(){this.tooltipElement.style.display="none",this.autoUpdateCleanup&&this.autoUpdateCleanup()}applyTooltipPosition(){this.tooltipElement.style.display="block";let t={strategy:"fixed",middleware:[(0,n.i)(),(0,n.s)(),(0,n.o)({mainAxis:8})]};var e;this.placement.includes("auto")?t.middleware.push((0,n.d)({alignment:(e=this.placement,e.includes("-end")?"end":e.includes("-start")?"start":void 0)})):t.placement=this.placement,this.autoUpdateCleanup=(0,n.a)(this.inputElement,this.tooltipElement,(async()=>{t.middleware=[...t.middleware,(0,n.b)({element:this.arrow})];const e=await(0,n.c)(this.inputElement,this.tooltipElement,t);if(e.middlewareData.arrow){const{x:t,y:o}=e.middlewareData.arrow;this.arrowPosition={x:t,y:o},Object.assign(this.arrow.style,{left:null!=t?`${t}px`:"",top:null!=o?`${o}px`:""})}this.tooltipPosition={x:e.x,y:e.y}}),{ancestorResize:!0,ancestorScroll:!0,elementResize:!0})}componentDidLoad(){if(!this.inputElement)throw Error("Validation tooltip is only working with an direct input child.");if(!this.formElement)throw Error("Validation tooltip is only working with an form element.");this.formElement.addEventListener("submit",this.onSubmitBind),this.inputElement.addEventListener("focus",this.onInputFocusBind),this.observer=new MutationObserver((()=>{this.inputElement.classList.contains("is-invalid")&&(this.isInputValid=!1,this.validationChanged())})),this.observer.observe(this.inputElement,{childList:!1,subtree:!1,attributes:!0,attributeFilter:["class"]})}onInputFocus(){this.isInputValid=!0}onSubmit(){this.formElement.classList.contains("needs-validation")&&(this.isInputValid=this.inputElement.validity.valid)}disconnectedCallback(){var t;null===(t=this.observer)||void 0===t||t.disconnect(),this.destoryAutoUpdate(),this.formElement.removeEventListener("submit",this.onSubmitBind),this.inputElement.removeEventListener("focus",this.onInputFocusBind)}validationChanged(){this.isInputValid?this.destoryAutoUpdate():this.applyTooltipPosition()}render(){var t,e;return(0,i.h)(i.H,null,(0,i.h)("slot",null),(0,i.h)("div",{role:"tooltip",style:{display:"none",position:"fixed",top:"0",left:"0",transform:`translate(${Math.round((null===(t=this.tooltipPosition)||void 0===t?void 0:t.x)||0)}px,${Math.round((null===(e=this.tooltipPosition)||void 0===e?void 0:e.y)||0)}px)`},class:"validation-tooltip text-default"},this.message,(0,i.h)("slot",{name:"tooltip-message"}),(0,i.h)("div",{id:"arrow"})))}get hostElement(){return(0,i.g)(this)}static get watchers(){return{isInputValid:["validationChanged"]}}};l.style='.text-xs.sc-ix-validation-tooltip{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.625rem;font-weight:400;line-height:1.4em;color:var(--theme-color-std-text)}.text-s.sc-ix-validation-tooltip{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.75rem;font-weight:400;line-height:1.5em;color:var(--theme-color-std-text)}.text-caption.sc-ix-validation-tooltip{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.75rem;font-weight:700;line-height:1.5em;color:var(--theme-color-std-text)}.text-caption-single.sc-ix-validation-tooltip{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.75rem;font-weight:700;line-height:1em;color:var(--theme-color-std-text)}.text-default.sc-ix-validation-tooltip{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:400;line-height:1.429em;color:var(--theme-color-std-text)}.text-default-single.sc-ix-validation-tooltip{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:400;line-height:1.143em;color:var(--theme-color-std-text)}.text-default-title.sc-ix-validation-tooltip{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:700;line-height:1.429em;color:var(--theme-color-std-text)}.text-default-title-single.sc-ix-validation-tooltip{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:700;line-height:1.143em;color:var(--theme-color-std-text)}.text-l.sc-ix-validation-tooltip{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:400;line-height:1.5em;color:var(--theme-color-std-text)}.text-l-single.sc-ix-validation-tooltip{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:400;line-height:1.25em;color:var(--theme-color-std-text)}.text-l-title.sc-ix-validation-tooltip{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:700;line-height:1.5em;color:var(--theme-color-std-text)}.text-l-title-single.sc-ix-validation-tooltip{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:700;line-height:1.25em;color:var(--theme-color-std-text)}.text-h2.sc-ix-validation-tooltip{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1.375rem;font-weight:700;line-height:1.455em;color:var(--theme-color-std-text)}.text-xl.sc-ix-validation-tooltip{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1.375rem;font-weight:400;line-height:1.091em;color:var(--theme-color-std-text)}a.sc-ix-validation-tooltip{color:var(--theme-color-primary)}.sc-ix-validation-tooltip-h{display:inline-block;position:relative}.sc-ix-validation-tooltip-h .validation-tooltip.sc-ix-validation-tooltip{background-color:var(--theme-tootlip--background);color:var(--theme-tooltip--color);padding:5px 10px;border-radius:4px;font-size:13px;border:1px solid var(--theme-tooltip--border-color);box-shadow:0 0 2px 0 rgba(0, 0, 40, 0.1), 0 4px 8px 0 rgba(0, 0, 40, 0.1), 0 12px 18px 0 rgba(0, 0, 40, 0.1)}.sc-ix-validation-tooltip-h .validation-tooltip.sc-ix-validation-tooltip #arrow.sc-ix-validation-tooltip,.sc-ix-validation-tooltip-h .validation-tooltip.sc-ix-validation-tooltip #arrow.sc-ix-validation-tooltip::before{position:absolute;width:8px;height:8px;background:inherit}.sc-ix-validation-tooltip-h .validation-tooltip.sc-ix-validation-tooltip #arrow.sc-ix-validation-tooltip{visibility:hidden}.sc-ix-validation-tooltip-h .validation-tooltip.sc-ix-validation-tooltip #arrow.sc-ix-validation-tooltip::before{visibility:visible;content:"";transform:rotate(45deg);background-color:var(--theme-tootlip--background)}.sc-ix-validation-tooltip-h .validation-tooltip.sc-ix-validation-tooltip>#arrow.sc-ix-validation-tooltip{bottom:-5px}.sc-ix-validation-tooltip-h .validation-tooltip.sc-ix-validation-tooltip>#arrow.sc-ix-validation-tooltip::before{border-right:1px solid var(--theme-tooltip--border-color);border-bottom:1px solid var(--theme-tooltip--border-color)}'}}]);