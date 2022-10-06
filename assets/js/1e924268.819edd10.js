"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[8614],{30876:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(2784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},91870:(e,t,n)=>{n.d(t,{Z:()=>b,C:()=>g});var r=n(89817),a=n(37949),i=n(90077),o=n(6277),l=n(2784);const s="Card__List_PIGW",c="Card_EPsO",p="Card_big__rLc",u="With__Icon__M6w",m="Splitter_xIp1",d="Label_uVaA",f="Icon_ZZVP",y="Card__Primary_p1H3";function b(e){const{preferredVersion:t}=(0,a.J)();return l.createElement(r.Z,{to:function(){var n;if(!t)return(0,i.Z)(`/docs/${e.link}`);if(null!=(n=e.link)&&n.startsWith("http"))return e.link;const r=t.path;return(0,i.Z)(`${r}/${e.link}`)}(),style:{textDecoration:"none"}},l.createElement("div",{className:(0,o.Z)(c,{[y]:e.isPrimary,[u]:e.icon},"big"===e.size?p:c)},l.createElement("div",{className:(0,o.Z)(d,"text-h2")},e.label),e.icon?l.createElement(l.Fragment,null,l.createElement("div",{className:m}),l.createElement("div",{className:(0,o.Z)(f)},l.createElement("ix-icon",{name:e.icon}))):null))}function g(e){return l.createElement("div",{className:(0,o.Z)(s)},e.children)}},17258:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(7896),a=(n(2784),n(30876)),i=n(91870);const o={sidebar_position:0},l="Installation",s={unversionedId:"installation/installation",id:"installation/installation",title:"Installation",description:"Siemens iX is framework agnostic.",source:"@site/docs/installation/installation.md",sourceDirName:"installation",slug:"/installation/",permalink:"/docs/installation/",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/installation/installation.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"mySidebar",previous:{title:"Fonts",permalink:"/docs/theming/fonts"},next:{title:"Angular",permalink:"/docs/installation/angular"}},c={},p=[],u={toc:p};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"installation"},"Installation"),(0,a.kt)("p",null,"Siemens iX is framework agnostic.\nIt can be used to build apps simply by using native web technology (HTML, CSS & JavaScript).\nIn addition to that it provides support for Angular and React."),(0,a.kt)("p",null,"Follow the links below to the respective installation guides:"),(0,a.kt)(i.C,{mdxType:"CardList"},(0,a.kt)(i.Z,{label:"Siemens iX",isPrimary:!0,link:"installation/javascript",mdxType:"Card"}),(0,a.kt)(i.Z,{label:"Siemens iX for Angular",link:"installation/angular",mdxType:"Card"}),(0,a.kt)(i.Z,{label:"Siemens iX for React",link:"installation/react",mdxType:"Card"})))}m.isMDXComponent=!0}}]);