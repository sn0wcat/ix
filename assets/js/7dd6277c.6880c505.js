"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[78275],{30876:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>u});var n=t(2784);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),m=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},l=function(e){var r=m(e.components);return n.createElement(s.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=m(t),u=o,b=p["".concat(s,".").concat(u)]||p[u]||d[u]||a;return t?n.createElement(b,c(c({ref:r},l),{},{components:t})):n.createElement(b,c({ref:r},l))}));function u(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=p;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var m=2;m<a;m++)c[m]=t[m];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},96547:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>h,contentTitle:()=>u,default:()=>g,frontMatter:()=>p,metadata:()=>b,toc:()=>f});var n=t(7896),o=t(2784),a=t(30876),c=t(76233),i=t(53849);const s=["--theme-primary-bdr-1","--theme-primary-bdr-2","--theme-dynamic-bdr-1","--theme-dynamic-bdr-2","--theme-contrast-bdr-1","--theme-contrast-bdr-2","--theme-std-bdr-1","--theme-std-bdr-2","--theme-soft-bdr-1","--theme-soft-bdr-2","--theme-soft-dashed-bdr-1","--theme-soft-dashed-bdr-2","--theme-weak-bdr-1","--theme-weak-bdr-2","--theme-x-weak-bdr-1","--theme-x-weak-bdr-2","--theme-alarm-bdr-1","--theme-alarm-bdr-2","--theme-critical-bdr-1","--theme-critical-bdr-2","--theme-warning-bdr-1","--theme-warning-bdr-2","--theme-success-bdr-1","--theme-success-bdr-2","--theme-info-bdr-1","--theme-info-bdr-2","--theme-neutral-bdr-1","--theme-neutral-bdr-2"];function m(e){return o.createElement(i.pZ,{style:{marginBottom:"2rem"}},o.createElement(i.RI,{name:"search",slot:"input-start",size:"16",color:"color-primary"}),o.createElement("input",{type:"text",className:"form-control",placeholder:"Search",onChange:r=>{const t=r.target.value;e.onChange(t)}}))}function l(e){return o.createElement("div",{className:`col-${e.col} Border__Preview`},o.createElement("div",{style:{borderTop:`var(${e.border})`}}))}const d=function(){const[e,r]=(0,o.useState)(s);return o.createElement("div",{className:"Theme__Borders"},o.createElement(m,{onChange:e=>{return t=e,void r([...s.filter((e=>!t||e.toLowerCase().includes(t.toLowerCase())))]);var t}}),o.createElement("div",{className:"container-fluid"},e.map((e=>o.createElement("div",{key:e,className:"Section row"},o.createElement(l,{border:e,col:"2"}),o.createElement("div",{className:"col-8 Border__Name"},e),o.createElement(i.AN,{icon:"copy",ghost:!0,style:{marginRight:"1rem"},className:"col-1 Copy__Icon",oval:!0,onClick:()=>(async e=>{await navigator.clipboard.writeText(e),c.Am.success({message:"Copied to clipboard!",autoCloseDelay:800})})(e)}))))))},p={},u="Borders",b={unversionedId:"theming/borders",id:"theming/borders",title:"Borders",description:"All borders are provided as custom properties.",source:"@site/docs/theming/borders.md",sourceDirName:"theming",slug:"/theming/borders",permalink:"/docs/theming/borders",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/theming/borders.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Animations",permalink:"/docs/theming/animation"},next:{title:"Colors",permalink:"/docs/theming/colors"}},h={},f=[],y={toc:f};function g(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},y,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"borders"},"Borders"),(0,a.kt)("p",null,"All borders are provided as custom properties.\nTo access them the ",(0,a.kt)("inlineCode",{parentName:"p"},"var()")," CSS function can be called with the border's name:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},".some-example {\n  border: var(--theme-primary-bdr-1);\n}\n")),(0,a.kt)(d,{mdxType:"ThemeBorders"}))}g.isMDXComponent=!0}}]);