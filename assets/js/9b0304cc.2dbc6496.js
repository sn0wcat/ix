"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[92354,20686,45737,23984,20769,96251,9345],{30876:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(2784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(n),m=a,f=p["".concat(c,".").concat(m)]||p[m]||u[m]||i;return n?r.createElement(f,o(o({ref:t},l),{},{components:n})):r.createElement(f,o({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},77942:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(37949),a=n(90077),i=n(37614),o=n(2784),s=n(90943);function c(e){const t=(0,i.Z)(),[n]=(0,o.useState)(!1),c=(0,a.Z)("/"),[d,l]=(0,o.useState)(""),[u,p]=(0,o.useState)((0,s.V)(t)),{preferredVersion:m}=(0,r.J)();return(0,o.useEffect)((()=>{const t=null==m?void 0:m.name;l(void 0===t||"current"===t?c+`webcomponent-examples/dist/preview-examples/${e.name}.html`:c+`versioned_examples/version-${t}/webcomponent-examples/dist/preview-examples/${e.name}.html`)}),[c,null==m?void 0:m.name,e.name]),(0,o.useLayoutEffect)((()=>{const e=()=>{let e=(0,s.V)(t);document.body.classList.forEach((t=>{t.includes("theme-")&&(e=t)})),p(e)},n=new MutationObserver((()=>e()));return n.observe(document.body,{attributeFilter:["class"],attributes:!0}),e(),()=>{n.disconnect()}}),[]),o.createElement(o.Fragment,null,n?o.createElement("span",null,"No component preview found for ",e.name," in version"," ",null==m?void 0:m.name):o.createElement("iframe",{src:`${d}?theme=${e.theme?e.theme:u}${e.noMargin?"&no-margin=true":""}`,style:{width:"100%",height:`${e.height}`}}))}},30024:(e,t,n)=>{n.d(t,{Z:()=>R});var r,a=n(7267),i=n(90077),o=n(53849),s=n(2784);function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}const d=e=>{let{title:t,titleId:n,...a}=e;return s.createElement("svg",c({style:{transform:"scale(1.5)"},"aria-hidden":"true",width:16,height:16,viewBox:"0 0 12 12",fill:"none",role:"img","aria-labelledby":n},a),t?s.createElement("title",{id:n},t):null,r||(r=s.createElement("path",{d:"M6 0C2.687 0 0 2.756 0 6.153c0 2.718 1.72 5.022 4.104 5.836.037.008.07.011.101.011.223 0 .308-.163.308-.305 0-.148-.005-.533-.008-1.048-.225.051-.426.073-.605.073-1.154 0-1.417-.898-1.417-.898-.273-.71-.667-.9-.667-.9-.522-.367-.003-.377.038-.377h.002c.603.053.919.637.919.637.3.525.702.672 1.06.672.282 0 .536-.09.686-.16.054-.397.21-.667.38-.823-1.33-.155-2.731-.683-2.731-3.04 0-.672.233-1.221.616-1.65-.062-.155-.268-.782.059-1.628 0 0 .042-.014.134-.014.217 0 .707.083 1.516.646a5.62 5.62 0 0 1 1.502-.206c.51.002 1.024.07 1.503.206.809-.563 1.3-.646 1.516-.646a.5.5 0 0 1 .134.014c.327.846.12 1.473.059 1.628.383.431.616.98.616 1.65 0 2.363-1.404 2.882-2.74 3.035.214.19.407.565.407 1.139 0 .822-.008 1.486-.008 1.687 0 .145.083.308.305.308a.52.52 0 0 0 .107-.01C10.283 11.174 12 8.868 12 6.152 12 2.756 9.313 0 6 0Z",fill:"#73849A"})))};var l;function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u.apply(this,arguments)}const p=e=>{let{title:t,titleId:n,...r}=e;return s.createElement("svg",u({style:{transform:"scale(1.5)"},"aria-hidden":"true",width:16,height:16,viewBox:"0 0 10 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",role:"img","aria-labelledby":n},r),t?s.createElement("title",{id:n},t):null,l||(l=s.createElement("path",{d:"M5.538 5.917 7.53 1 1 8.018h3.426l-2 4.982L9 5.917H5.538Z",stroke:"#73849A",strokeLinejoin:"round"})))};var m=n(77942);let f;!function(e){e.ANGULAR="angular",e.REACT="react",e.JAVASCRIPT="javascript",e.PREVIEW="preview"}(f||(f={}));var v=["angular-cli","create-react-app","html","javascript","node","polymer","typescript","vue"],g={clickToLoad:function(e){return w("ctl",e)},devToolsHeight:function(e){return b("devtoolsheight",e)},forceEmbedLayout:function(e){return w("embed",e)},hideDevTools:function(e){return w("hidedevtools",e)},hideExplorer:function(e){return w("hideExplorer",e)},hideNavigation:function(e){return w("hideNavigation",e)},showSidebar:function(e){return function(e,t){return"boolean"==typeof t?"showSidebar="+(t?"1":"0"):""}(0,e)},openFile:function(e){return function(e,t){return(Array.isArray(t)?t:[t]).filter((function(e){return"string"==typeof e&&""!==e.trim()})).map((function(e){return"file="+encodeURIComponent(e.trim())}))}(0,e).join("&")},terminalHeight:function(e){return b("terminalHeight",e)},theme:function(e){return y("theme",["light","dark"],e)},view:function(e){return y("view",["preview","editor"],e)}};function h(e){void 0===e&&(e={});var t=Object.entries(e).map((function(e){var t=e[0],n=e[1];return null!=n&&g.hasOwnProperty(t)?g[t](n):""})).filter(Boolean);return t.length?"?"+t.join("&"):""}function w(e,t){return!0===t?e+"=1":""}function b(e,t){return"number"==typeof t&&t>=0&&t<=100?e+"="+Math.round(t):""}function y(e,t,n){return"string"==typeof n&&t.includes(n)?e+"="+n:""}function x(e,t){return""+E(t)+e+h(t)}function E(e){return void 0===e&&(e={}),"string"==typeof e.origin?e.origin:"https://stackblitz.com"}function k(e){return e&&!1===e.newWindow?"_self":"_blank"}function C(e,t){var n=document.createElement("input");return n.type="hidden",n.name=e,n.value=t,n}function j(e){if(!v.includes(e.template)){var t=v.map((function(e){return"'"+e+"'"})).join(", ");console.warn("Unsupported project.template: must be one of "+t)}var n="node"===e.template,r=document.createElement("form");return r.method="POST",r.setAttribute("style","display:none!important;"),r.appendChild(C("project[title]",e.title)),r.appendChild(C("project[description]",e.description)),r.appendChild(C("project[template]",e.template)),e.dependencies&&(n?console.warn("Invalid project.dependencies: dependencies must be provided as a 'package.json' file when using the 'node' template."):r.appendChild(C("project[dependencies]",JSON.stringify(e.dependencies)))),e.settings&&r.appendChild(C("project[settings]",JSON.stringify(e.settings))),Object.keys(e.files).forEach((function(t){"string"==typeof e.files[t]&&r.appendChild(C("project[files]["+t+"]",e.files[t]))})),r}var O=function(e,t){!function(e,t){var n=j(e);n.action=x("/run",t),n.target=k(t),document.body.appendChild(n),n.submit(),document.body.removeChild(n)}(e,t)};const T="https://github.com/siemens/ix/tree/main/packages";function N(e){let{name:t,framework:n}=e;const r=function(e){let{name:t,framework:n}=e;return n===f.ANGULAR?`${T}/angular-test-app/src/preview-examples/${t}.ts`:n===f.JAVASCRIPT?`${T}/html-test-app/src/preview-examples/${t}.html`:n===f.REACT?`${T}/react-test-app/src/preview-examples/${t}.tsx`:void 0}({framework:n,name:t});window.open(r,"_blank")}async function A(e){const t=await Promise.all(e.map((e=>fetch(e))));return Promise.all(t.map((e=>e.text())))}async function $(e){let{name:t,framework:n,files:r,baseUrl:a}=e;const i=await async function(e,t,n){const r=[];return(await A(n.map((n=>`${e}auto-generated/previews/${t}/${n}.txt`)))).forEach(((e,t)=>{r.push({filename:n[t],sourceCode:e})})),r}(a,n,r);return n===f.REACT?async function(e,t){const[n,r,a,i,o]=await A([`${e}code-runtime/react/App.tsx`,`${e}code-runtime/react/index.html`,`${e}code-runtime/react/index.tsx`,`${e}code-runtime/react/package.json`,`${e}code-runtime/react/tsconfig.json`]),[s]=t,c={};t.forEach((e=>{let{filename:t,sourceCode:n}=e;c[`src/${t}`]=n})),O({template:"node",title:"iX React App",description:"iX react playground",files:{...c,"public/index.html":r,"src/index.tsx":a,"src/App.tsx":n.replace(/\/\/@_IMPORT_COMPONENT/gms,`import Example from './${s.filename.substring(0,s.filename.lastIndexOf("."))}'\n`).replace(/\{\/\* @_RENDER_COMPONENT \*\/\}/gms,"\n<Example />\n"),"package.json":i,"tsconfig.json":o,".stackblitzrc":'{\n        "startCommand": "yarn run start"\n      }'}},{openFile:`src/${s.filename}`})}(a,i):n===f.ANGULAR?async function(e,t,n){const[r,a,i,o,s,c,d,l,u,p,m]=await A([`${e}code-runtime/angular/src/app/app.component.css`,`${e}code-runtime/angular/src/app/app.component.html`,`${e}code-runtime/angular/src/app/app.component.ts`,`${e}code-runtime/angular/src/app/app.module.ts`,`${e}code-runtime/angular/src/index.html`,`${e}code-runtime/angular/src/main.ts`,`${e}code-runtime/angular/src/styles.css`,`${e}code-runtime/angular/angular.json`,`${e}code-runtime/angular/package.json`,`${e}code-runtime/angular/tsconfig.app.json`,`${e}code-runtime/angular/tsconfig.json`]),f=[];n.forEach((e=>{let{filename:t,sourceCode:n}=e;/@Component/gms.test(n)&&f.push(t)}));const v=`\n    ${f.map(((e,t)=>`import COMPONENT_${t} from './${e.substring(0,e.lastIndexOf("."))}'`))}\n\n    export const DECLARE = [\n      //@__DELCARE__COMPONENTS\n      ${f.map(((e,t)=>`COMPONENT_${t},`))}\n    ];\n  `,g={};n.forEach((e=>{let{filename:t,sourceCode:n}=e;g[`src/app/${t}`]=n})),O({template:"node",title:"iX angular app",description:"iX angular playground",files:{"src/app/declare-component.ts":v,"src/app/app.component.css":r,"src/app/app.component.html":a,"src/app/app.component.ts":i,"src/app/app.module.ts":o,"src/index.html":s,"src/main.ts":c,"src/styles.css":d,"angular.json":l,"package.json":u,"tsconfig.app.json":p,"tsconfig.json":m,...g}},{openFile:`src/app/${t}.ts`})}(a,t,i):n===f.JAVASCRIPT?async function(e,t){const[n,r,a,i]=await A([`${e}code-runtime/html/src/index.html`,`${e}code-runtime/html/src/main.js`,`${e}code-runtime/html/package.json`,`${e}code-runtime/html/vite.config.ts`]),[o,...s]=t,c={};s.forEach((e=>{c[`src/${e.filename}`]=e.sourceCode})),O({template:"node",title:"iX html app",description:"iX html playground",files:{...c,"src/index.html":n.replace("\x3c!-- IX_INJECT_SOURCE_CODE --\x3e",o.sourceCode),"src/main.js":r,"package.json":a,"vite.config.ts":i}},{openFile:["src/index.html"]})}(a,i):void 0}function P(e){let{name:t,framework:n}=e;return s.createElement("button",{className:"btn-icon-s btn btn-invisible-primary btn-icon btn-oval",onClick:()=>N({name:t,framework:n})},s.createElement(d,null))}function M(e){let{name:t,files:n,framework:r,baseUrl:a}=e;return s.createElement("button",{className:"btn-icon-s btn btn-invisible-primary btn-icon btn-oval",onClick:()=>$({name:t,files:n,framework:r,baseUrl:a})},s.createElement(p,null))}function D(e){const[t,n]=(0,s.useState)(e.files[0].filename);return s.createElement(s.Fragment,null,s.createElement(o.Vp,null,e.files.map((e=>{e.node;return s.createElement(o.t3,{key:e.filename,onClick:()=>{return t=e.filename,n(t);var t}},e.filename)}))),function(){var n;const r=null==(n=e.files.find((e=>e.filename===t)))?void 0:n.node;return r?s.createElement(r,null):null}())}function R(e){let{name:t,height:n,noMargin:r,theme:c,frameworks:d,availableFrameworks:l}=e;const{pathname:u}=(0,a.TH)(),p=(0,i.Z)("/"),[v,g]=(0,s.useState)(!0),[h,w]=(0,s.useState)(function(e){return e&&(0!==e.length?e[0]:void 0)||f.PREVIEW}(l)),[b,y]=(0,s.useState)();(0,s.useMemo)((()=>function(e){return`docusaurus.playground${e.replace(/\//g,".")}`}(u+t)),[t,u]);(0,s.useEffect)((()=>{const e={};d&&(Object.keys(d).forEach((n=>{if("function"==typeof d[n]){let r=t;n===f.REACT&&(r=r.concat(".tsx")),n===f.JAVASCRIPT&&(r=r.concat(".html")),n===f.ANGULAR&&(r=r.concat(".ts")),e[n]=[{filename:r,node:d[n]({})}]}"object"==typeof d[n]&&(e[n]||(e[n]=[]),Object.keys(d[n]).forEach((t=>{e[n].push({filename:t,node:d[n][t]})})))})),y(e))}),[d,y]);const x=e=>{w(e)};function E(e){return l?0===l.length||l.includes(e):Object.keys(d).some((t=>t===e))}return s.createElement("div",{className:"Playground"},v?s.createElement(s.Fragment,null,s.createElement("div",{className:"Playground__Toolbar Location__Bottom"},s.createElement(o.Vp,null,s.createElement(o.t3,{selected:h===f.PREVIEW,onClick:()=>x(f.PREVIEW)},"Preview"),E(f.ANGULAR)?s.createElement(o.t3,{selected:h===f.ANGULAR,onClick:()=>x(f.ANGULAR)},"Angular"):null,E(f.REACT)?s.createElement(o.t3,{selected:h===f.REACT,onClick:()=>x(f.REACT)},"React"):null,E(f.JAVASCRIPT)?s.createElement(o.t3,{selected:h===f.JAVASCRIPT,onClick:()=>x(f.JAVASCRIPT)},"JavaScript"):null),s.createElement("div",{className:"Playground__Toolbar__Actions"},h!==f.PREVIEW?s.createElement(s.Fragment,null,s.createElement(P,{name:t,framework:h}),s.createElement(M,{name:t,framework:h,baseUrl:p,files:b?h===f.PREVIEW?[]:b[h].map((e=>e.filename)):[]})):null)),function(){if(h===f.PREVIEW)return s.createElement(m.Z,{name:t,height:n,noMargin:r,theme:c});if(!b||!b[h])return null;if(1===b[h].length){const[{node:e}]=b[h];return e}return s.createElement(D,{files:b[h]})}()):null)}},94446:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var r=n(7896),a=(n(2784),n(30876));const i={},o=void 0,s={unversionedId:"auto-generated/ix-divider/events",id:"auto-generated/ix-divider/events",title:"events",description:"No events available for this component.",source:"@site/docs/auto-generated/ix-divider/events.md",sourceDirName:"auto-generated/ix-divider",slug:"/auto-generated/ix-divider/events",permalink:"/docs/auto-generated/ix-divider/events",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-divider/events.md",tags:[],version:"current",frontMatter:{}},c={},d=[],l={toc:d};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No events available for this component."))}u.isMDXComponent=!0},33850:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var r=n(7896),a=(n(2784),n(30876));const i={},o=void 0,s={unversionedId:"auto-generated/ix-divider/props",id:"auto-generated/ix-divider/props",title:"props",description:"No properties available for this component.",source:"@site/docs/auto-generated/ix-divider/props.md",sourceDirName:"auto-generated/ix-divider",slug:"/auto-generated/ix-divider/props",permalink:"/docs/auto-generated/ix-divider/props",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-divider/props.md",tags:[],version:"current",frontMatter:{}},c={},d=[],l={toc:d};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No properties available for this component."))}u.isMDXComponent=!0},49174:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var r=n(7896),a=(n(2784),n(30876));const i={},o=void 0,s={unversionedId:"auto-generated/ix-divider/tags",id:"auto-generated/ix-divider/tags",title:"tags",description:"Since: 1.4.0",source:"@site/docs/auto-generated/ix-divider/tags.md",sourceDirName:"auto-generated/ix-divider",slug:"/auto-generated/ix-divider/tags",permalink:"/docs/auto-generated/ix-divider/tags",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-divider/tags.md",tags:[],version:"current",frontMatter:{}},c={},d=[],l={toc:d};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("span",{className:"Api__Table Docs__Tag"},"Since: 1.4.0"))}u.isMDXComponent=!0},69291:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var r=n(7896),a=(n(2784),n(30876));const i={},o=void 0,s={unversionedId:"auto-generated/previews/angular/divider.ts",id:"auto-generated/previews/angular/divider.ts",title:"divider.ts",description:"\x3c!--",source:"@site/docs/auto-generated/previews/angular/divider.ts.md",sourceDirName:"auto-generated/previews/angular",slug:"/auto-generated/previews/angular/divider.ts",permalink:"/docs/auto-generated/previews/angular/divider.ts",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/angular/divider.ts.md",tags:[],version:"current",frontMatter:{}},c={},d=[],l={toc:d};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { Component } from '@angular/core';\n\n@Component({\n  selector: 'app-example',\n  template: ` <ix-divider></ix-divider> `,\n})\nexport default class Divider {}\n")))}u.isMDXComponent=!0},98174:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var r=n(7896),a=(n(2784),n(30876));const i={},o=void 0,s={unversionedId:"auto-generated/previews/react/divider",id:"auto-generated/previews/react/divider",title:"divider",description:"\x3c!--",source:"@site/docs/auto-generated/previews/react/divider.md",sourceDirName:"auto-generated/previews/react",slug:"/auto-generated/previews/react/divider",permalink:"/docs/auto-generated/previews/react/divider",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/react/divider.md",tags:[],version:"current",frontMatter:{}},c={},d=[],l={toc:d};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { IxDivider } from '@siemens/ix-react';\nimport React from 'react';\n\nexport default () => {\n  return (\n    <>\n      <IxDivider></IxDivider>\n    </>\n  );\n};\n")))}u.isMDXComponent=!0},29900:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var r=n(7896),a=(n(2784),n(30876));const i={},o=void 0,s={unversionedId:"auto-generated/previews/web-component/divider",id:"auto-generated/previews/web-component/divider",title:"divider",description:"\x3c!--",source:"@site/docs/auto-generated/previews/web-component/divider.md",sourceDirName:"auto-generated/previews/web-component",slug:"/auto-generated/previews/web-component/divider",permalink:"/docs/auto-generated/previews/web-component/divider",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/web-component/divider.md",tags:[],version:"current",frontMatter:{}},c={},d=[],l={toc:d};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"<ix-divider></ix-divider>\n")))}u.isMDXComponent=!0},59544:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>u,default:()=>g,frontMatter:()=>l,metadata:()=>p,toc:()=>f});var r=n(7896),a=(n(2784),n(30876)),i=n(30024),o=(n(33850),n(94446),n(49174)),s=n(29900),c=n(98174),d=n(69291);const l={},u="Divider",p={unversionedId:"controls/divider",id:"controls/divider",title:"Divider",description:"Usage",source:"@site/docs/controls/divider.md",sourceDirName:"controls",slug:"/controls/divider",permalink:"/docs/controls/divider",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/controls/divider.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Date time picker",permalink:"/docs/controls/date-time-picker"},next:{title:"Drawer",permalink:"/docs/controls/drawer"}},m={},f=[{value:"Usage",id:"usage",level:2}],v={toc:f};function g(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"divider"},"Divider"),(0,a.kt)(o.default,{mdxType:"Tags"}),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)(i.Z,{name:"divider",height:"16rem",frameworks:{react:c.default,angular:d.default,javascript:s.default},mdxType:"Playground"}))}g.isMDXComponent=!0}}]);