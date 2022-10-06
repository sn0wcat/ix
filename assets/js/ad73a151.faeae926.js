"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[9567],{30876:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(2784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),u=r,f=m["".concat(s,".").concat(u)]||m[u]||d[u]||i;return n?a.createElement(f,o(o({ref:t},p),{},{components:n})):a.createElement(f,o({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},21065:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(7896),r=(n(2784),n(30876));const i={sidebar_position:3,sidebar_title:"Javascript",title:"Javascript"},o=void 0,l={unversionedId:"installation/javascript",id:"installation/javascript",title:"Javascript",description:"Installation",source:"@site/docs/installation/javascript.md",sourceDirName:"installation",slug:"/installation/javascript",permalink:"/docs/installation/javascript",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/installation/javascript.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_title:"Javascript",title:"Javascript"},sidebar:"mySidebar",previous:{title:"React",permalink:"/docs/installation/react"},next:{title:"Changelog",permalink:"/docs/installation/CHANGELOG"}},s={},c=[{value:"Installation",id:"installation",level:3},{value:"npm",id:"npm",level:4},{value:"yarn",id:"yarn",level:4},{value:"Load styles and scripts",id:"load-styles-and-scripts",level:2},{value:"Load web fonts",id:"load-web-fonts",level:3},{value:"Load common style sheet",id:"load-common-style-sheet",level:3},{value:"Load <code>ix</code> Web Components",id:"load-ix-web-components",level:3}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"installation"},"Installation"),(0,r.kt)("p",null,"Install ",(0,r.kt)("inlineCode",{parentName:"p"},"@siemens/ix")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"@siemens/ix-icons")," using a package manager:"),(0,r.kt)("h4",{id:"npm"},"npm"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npm i -S @siemens/ix @siemens/ix-icons\n")),(0,r.kt)("h4",{id:"yarn"},"yarn"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"yarn add @siemens/ix @siemens/ix-icons\n")),(0,r.kt)("h2",{id:"load-styles-and-scripts"},"Load styles and scripts"),(0,r.kt)("h3",{id:"load-web-fonts"},"Load web fonts"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<link rel="stylesheet" href="lib/ix-icons/dist/css/ix-icons.css" />\n')),(0,r.kt)("h3",{id:"load-common-style-sheet"},"Load common style sheet"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<link rel="stylesheet" href="lib/ix/dist/siemens-ix/siemens-ix.css" />\n')),(0,r.kt)("h3",{id:"load-ix-web-components"},"Load ",(0,r.kt)("inlineCode",{parentName:"h3"},"ix")," Web Components"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"<script type=\"module\">\n  import { defineCustomElements } from './lib/ix/loader/index.js';\n  defineCustomElements();\n<\/script>\n")))}d.isMDXComponent=!0}}]);