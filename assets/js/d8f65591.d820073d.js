"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[11899,99891,43003,55623,1666,68251,24452,83132,74859,51909],{30876:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(2784);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(a),m=r,f=p["".concat(c,".").concat(m)]||p[m]||u[m]||o;return a?n.createElement(f,i(i({ref:t},d),{},{components:a})):n.createElement(f,i({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},77942:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(37949),r=a(90077),o=a(37614),i=a(2784),s=a(90943);function c(e){const t=(0,o.Z)(),[a]=(0,i.useState)(!1),c=(0,r.Z)("/"),[l,d]=(0,i.useState)(""),[u,p]=(0,i.useState)((0,s.V)(t)),{preferredVersion:m}=(0,n.J)();return(0,i.useEffect)((()=>{const t=null==m?void 0:m.name;d(void 0===t||"current"===t?c+`webcomponent-examples/dist/preview-examples/${e.name}.html`:c+`versioned_examples/version-${t}/webcomponent-examples/dist/preview-examples/${e.name}.html`)}),[c,null==m?void 0:m.name,e.name]),(0,i.useLayoutEffect)((()=>{const e=()=>{let e=(0,s.V)(t);document.body.classList.forEach((t=>{t.includes("theme-")&&(e=t)})),p(e)},a=new MutationObserver((()=>e()));return a.observe(document.body,{attributeFilter:["class"],attributes:!0}),e(),()=>{a.disconnect()}}),[]),i.createElement(i.Fragment,null,a?i.createElement("span",null,"No component preview found for ",e.name," in version"," ",null==m?void 0:m.name):i.createElement("iframe",{src:`${l}?theme=${e.theme?e.theme:u}${e.noMargin?"&no-margin=true":""}`,style:{width:"100%",height:`${e.height}`}}))}},30024:(e,t,a)=>{a.d(t,{Z:()=>D});var n,r=a(7267),o=a(90077),i=a(53849),s=a(2784);function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},c.apply(this,arguments)}const l=e=>{let{title:t,titleId:a,...r}=e;return s.createElement("svg",c({style:{transform:"scale(1.5)"},"aria-hidden":"true",width:16,height:16,viewBox:"0 0 12 12",fill:"none",role:"img","aria-labelledby":a},r),t?s.createElement("title",{id:a},t):null,n||(n=s.createElement("path",{d:"M6 0C2.687 0 0 2.756 0 6.153c0 2.718 1.72 5.022 4.104 5.836.037.008.07.011.101.011.223 0 .308-.163.308-.305 0-.148-.005-.533-.008-1.048-.225.051-.426.073-.605.073-1.154 0-1.417-.898-1.417-.898-.273-.71-.667-.9-.667-.9-.522-.367-.003-.377.038-.377h.002c.603.053.919.637.919.637.3.525.702.672 1.06.672.282 0 .536-.09.686-.16.054-.397.21-.667.38-.823-1.33-.155-2.731-.683-2.731-3.04 0-.672.233-1.221.616-1.65-.062-.155-.268-.782.059-1.628 0 0 .042-.014.134-.014.217 0 .707.083 1.516.646a5.62 5.62 0 0 1 1.502-.206c.51.002 1.024.07 1.503.206.809-.563 1.3-.646 1.516-.646a.5.5 0 0 1 .134.014c.327.846.12 1.473.059 1.628.383.431.616.98.616 1.65 0 2.363-1.404 2.882-2.74 3.035.214.19.407.565.407 1.139 0 .822-.008 1.486-.008 1.687 0 .145.083.308.305.308a.52.52 0 0 0 .107-.01C10.283 11.174 12 8.868 12 6.152 12 2.756 9.313 0 6 0Z",fill:"#73849A"})))};var d;function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},u.apply(this,arguments)}const p=e=>{let{title:t,titleId:a,...n}=e;return s.createElement("svg",u({style:{transform:"scale(1.5)"},"aria-hidden":"true",width:16,height:16,viewBox:"0 0 10 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",role:"img","aria-labelledby":a},n),t?s.createElement("title",{id:a},t):null,d||(d=s.createElement("path",{d:"M5.538 5.917 7.53 1 1 8.018h3.426l-2 4.982L9 5.917H5.538Z",stroke:"#73849A",strokeLinejoin:"round"})))};var m=a(77942);let f;!function(e){e.ANGULAR="angular",e.REACT="react",e.JAVASCRIPT="javascript",e.PREVIEW="preview"}(f||(f={}));var g=["angular-cli","create-react-app","html","javascript","node","polymer","typescript","vue"],v={clickToLoad:function(e){return w("ctl",e)},devToolsHeight:function(e){return h("devtoolsheight",e)},forceEmbedLayout:function(e){return w("embed",e)},hideDevTools:function(e){return w("hidedevtools",e)},hideExplorer:function(e){return w("hideExplorer",e)},hideNavigation:function(e){return w("hideNavigation",e)},showSidebar:function(e){return function(e,t){return"boolean"==typeof t?"showSidebar="+(t?"1":"0"):""}(0,e)},openFile:function(e){return function(e,t){return(Array.isArray(t)?t:[t]).filter((function(e){return"string"==typeof e&&""!==e.trim()})).map((function(e){return"file="+encodeURIComponent(e.trim())}))}(0,e).join("&")},terminalHeight:function(e){return h("terminalHeight",e)},theme:function(e){return b("theme",["light","dark"],e)},view:function(e){return b("view",["preview","editor"],e)}};function x(e){void 0===e&&(e={});var t=Object.entries(e).map((function(e){var t=e[0],a=e[1];return null!=a&&v.hasOwnProperty(t)?v[t](a):""})).filter(Boolean);return t.length?"?"+t.join("&"):""}function w(e,t){return!0===t?e+"=1":""}function h(e,t){return"number"==typeof t&&t>=0&&t<=100?e+"="+Math.round(t):""}function b(e,t,a){return"string"==typeof a&&t.includes(a)?e+"="+a:""}function y(e,t){return""+k(t)+e+x(t)}function k(e){return void 0===e&&(e={}),"string"==typeof e.origin?e.origin:"https://stackblitz.com"}function E(e){return e&&!1===e.newWindow?"_self":"_blank"}function C(e,t){var a=document.createElement("input");return a.type="hidden",a.name=e,a.value=t,a}function T(e){if(!g.includes(e.template)){var t=g.map((function(e){return"'"+e+"'"})).join(", ");console.warn("Unsupported project.template: must be one of "+t)}var a="node"===e.template,n=document.createElement("form");return n.method="POST",n.setAttribute("style","display:none!important;"),n.appendChild(C("project[title]",e.title)),n.appendChild(C("project[description]",e.description)),n.appendChild(C("project[template]",e.template)),e.dependencies&&(a?console.warn("Invalid project.dependencies: dependencies must be provided as a 'package.json' file when using the 'node' template."):n.appendChild(C("project[dependencies]",JSON.stringify(e.dependencies)))),e.settings&&n.appendChild(C("project[settings]",JSON.stringify(e.settings))),Object.keys(e.files).forEach((function(t){"string"==typeof e.files[t]&&n.appendChild(C("project[files]["+t+"]",e.files[t]))})),n}var N=function(e,t){!function(e,t){var a=T(e);a.action=y("/run",t),a.target=E(t),document.body.appendChild(a),a.submit(),document.body.removeChild(a)}(e,t)};const j="https://github.com/siemens/ix/tree/main/packages";function O(e){let{name:t,framework:a}=e;const n=function(e){let{name:t,framework:a}=e;return a===f.ANGULAR?`${j}/angular-test-app/src/preview-examples/${t}.ts`:a===f.JAVASCRIPT?`${j}/html-test-app/src/preview-examples/${t}.html`:a===f.REACT?`${j}/react-test-app/src/preview-examples/${t}.tsx`:void 0}({framework:a,name:t});window.open(n,"_blank")}async function M(e){const t=await Promise.all(e.map((e=>fetch(e))));return Promise.all(t.map((e=>e.text())))}async function A(e){let{name:t,framework:a,files:n,baseUrl:r}=e;const o=await async function(e,t,a){const n=[];return(await M(a.map((a=>`${e}auto-generated/previews/${t}/${a}.txt`)))).forEach(((e,t)=>{n.push({filename:a[t],sourceCode:e})})),n}(r,a,n);return a===f.REACT?async function(e,t){const[a,n,r,o,i]=await M([`${e}code-runtime/react/App.tsx`,`${e}code-runtime/react/index.html`,`${e}code-runtime/react/index.tsx`,`${e}code-runtime/react/package.json`,`${e}code-runtime/react/tsconfig.json`]),[s]=t,c={};t.forEach((e=>{let{filename:t,sourceCode:a}=e;c[`src/${t}`]=a})),N({template:"node",title:"iX React App",description:"iX react playground",files:{...c,"public/index.html":n,"src/index.tsx":r,"src/App.tsx":a.replace(/\/\/@_IMPORT_COMPONENT/gms,`import Example from './${s.filename.substring(0,s.filename.lastIndexOf("."))}'\n`).replace(/\{\/\* @_RENDER_COMPONENT \*\/\}/gms,"\n<Example />\n"),"package.json":o,"tsconfig.json":i,".stackblitzrc":'{\n        "startCommand": "yarn run start"\n      }'}},{openFile:`src/${s.filename}`})}(r,o):a===f.ANGULAR?async function(e,t,a){const[n,r,o,i,s,c,l,d,u,p,m]=await M([`${e}code-runtime/angular/src/app/app.component.css`,`${e}code-runtime/angular/src/app/app.component.html`,`${e}code-runtime/angular/src/app/app.component.ts`,`${e}code-runtime/angular/src/app/app.module.ts`,`${e}code-runtime/angular/src/index.html`,`${e}code-runtime/angular/src/main.ts`,`${e}code-runtime/angular/src/styles.css`,`${e}code-runtime/angular/angular.json`,`${e}code-runtime/angular/package.json`,`${e}code-runtime/angular/tsconfig.app.json`,`${e}code-runtime/angular/tsconfig.json`]),f=[];a.forEach((e=>{let{filename:t,sourceCode:a}=e;/@Component/gms.test(a)&&f.push(t)}));const g=`\n    ${f.map(((e,t)=>`import COMPONENT_${t} from './${e.substring(0,e.lastIndexOf("."))}'`))}\n\n    export const DECLARE = [\n      //@__DELCARE__COMPONENTS\n      ${f.map(((e,t)=>`COMPONENT_${t},`))}\n    ];\n  `,v={};a.forEach((e=>{let{filename:t,sourceCode:a}=e;v[`src/app/${t}`]=a})),N({template:"node",title:"iX angular app",description:"iX angular playground",files:{"src/app/declare-component.ts":g,"src/app/app.component.css":n,"src/app/app.component.html":r,"src/app/app.component.ts":o,"src/app/app.module.ts":i,"src/index.html":s,"src/main.ts":c,"src/styles.css":l,"angular.json":d,"package.json":u,"tsconfig.app.json":p,"tsconfig.json":m,...v}},{openFile:`src/app/${t}.ts`})}(r,t,o):a===f.JAVASCRIPT?async function(e,t){const[a,n,r,o]=await M([`${e}code-runtime/html/src/index.html`,`${e}code-runtime/html/src/main.js`,`${e}code-runtime/html/package.json`,`${e}code-runtime/html/vite.config.ts`]),[i,...s]=t,c={};s.forEach((e=>{c[`src/${e.filename}`]=e.sourceCode})),N({template:"node",title:"iX html app",description:"iX html playground",files:{...c,"src/index.html":a.replace("\x3c!-- IX_INJECT_SOURCE_CODE --\x3e",i.sourceCode),"src/main.js":n,"package.json":r,"vite.config.ts":o}},{openFile:["src/index.html"]})}(r,o):void 0}function P(e){let{name:t,framework:a}=e;return s.createElement("button",{className:"btn-icon-s btn btn-invisible-primary btn-icon btn-oval",onClick:()=>O({name:t,framework:a})},s.createElement(l,null))}function $(e){let{name:t,files:a,framework:n,baseUrl:r}=e;return s.createElement("button",{className:"btn-icon-s btn btn-invisible-primary btn-icon btn-oval",onClick:()=>A({name:t,files:a,framework:n,baseUrl:r})},s.createElement(p,null))}function R(e){const[t,a]=(0,s.useState)(e.files[0].filename);return s.createElement(s.Fragment,null,s.createElement(i.Vp,null,e.files.map((e=>{e.node;return s.createElement(i.t3,{key:e.filename,onClick:()=>{return t=e.filename,a(t);var t}},e.filename)}))),function(){var a;const n=null==(a=e.files.find((e=>e.filename===t)))?void 0:a.node;return n?s.createElement(n,null):null}())}function D(e){let{name:t,height:a,noMargin:n,theme:c,frameworks:l,availableFrameworks:d}=e;const{pathname:u}=(0,r.TH)(),p=(0,o.Z)("/"),[g,v]=(0,s.useState)(!0),[x,w]=(0,s.useState)(function(e){return e&&(0!==e.length?e[0]:void 0)||f.PREVIEW}(d)),[h,b]=(0,s.useState)();(0,s.useMemo)((()=>function(e){return`docusaurus.playground${e.replace(/\//g,".")}`}(u+t)),[t,u]);(0,s.useEffect)((()=>{const e={};l&&(Object.keys(l).forEach((a=>{if("function"==typeof l[a]){let n=t;a===f.REACT&&(n=n.concat(".tsx")),a===f.JAVASCRIPT&&(n=n.concat(".html")),a===f.ANGULAR&&(n=n.concat(".ts")),e[a]=[{filename:n,node:l[a]({})}]}"object"==typeof l[a]&&(e[a]||(e[a]=[]),Object.keys(l[a]).forEach((t=>{e[a].push({filename:t,node:l[a][t]})})))})),b(e))}),[l,b]);const y=e=>{w(e)};function k(e){return d?0===d.length||d.includes(e):Object.keys(l).some((t=>t===e))}return s.createElement("div",{className:"Playground"},g?s.createElement(s.Fragment,null,s.createElement("div",{className:"Playground__Toolbar Location__Bottom"},s.createElement(i.Vp,null,s.createElement(i.t3,{selected:x===f.PREVIEW,onClick:()=>y(f.PREVIEW)},"Preview"),k(f.ANGULAR)?s.createElement(i.t3,{selected:x===f.ANGULAR,onClick:()=>y(f.ANGULAR)},"Angular"):null,k(f.REACT)?s.createElement(i.t3,{selected:x===f.REACT,onClick:()=>y(f.REACT)},"React"):null,k(f.JAVASCRIPT)?s.createElement(i.t3,{selected:x===f.JAVASCRIPT,onClick:()=>y(f.JAVASCRIPT)},"JavaScript"):null),s.createElement("div",{className:"Playground__Toolbar__Actions"},x!==f.PREVIEW?s.createElement(s.Fragment,null,s.createElement(P,{name:t,framework:x}),s.createElement($,{name:t,framework:x,baseUrl:p,files:h?x===f.PREVIEW?[]:h[x].map((e=>e.filename)):[]})):null)),function(){if(x===f.PREVIEW)return s.createElement(m.Z,{name:t,height:a,noMargin:n,theme:c});if(!h||!h[x])return null;if(1===h[x].length){const[{node:e}]=h[x];return e}return s.createElement(R,{files:h[x]})}()):null)}},44376:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=a(7896),r=(a(2784),a(30876));const o={},i=void 0,s={unversionedId:"auto-generated/previews/angular/textarea-disabled.ts",id:"auto-generated/previews/angular/textarea-disabled.ts",title:"textarea-disabled.ts",description:"\x3c!--",source:"@site/docs/auto-generated/previews/angular/textarea-disabled.ts.md",sourceDirName:"auto-generated/previews/angular",slug:"/auto-generated/previews/angular/textarea-disabled.ts",permalink:"/docs/auto-generated/previews/angular/textarea-disabled.ts",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/angular/textarea-disabled.ts.md",tags:[],version:"current",frontMatter:{}},c={},l=[],d={toc:l};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { Component } from '@angular/core';\n\n@Component({\n  selector: 'app-example',\n  template: `\n    <textarea class=\"form-control\" placeholder=\"Enter text here\" disabled>\n  Some example text\n</textarea>\n  `,\n})\nexport default class TextareaDisabled {}\n")))}u.isMDXComponent=!0},11478:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=a(7896),r=(a(2784),a(30876));const o={},i=void 0,s={unversionedId:"auto-generated/previews/angular/textarea-readonly.ts",id:"auto-generated/previews/angular/textarea-readonly.ts",title:"textarea-readonly.ts",description:"\x3c!--",source:"@site/docs/auto-generated/previews/angular/textarea-readonly.ts.md",sourceDirName:"auto-generated/previews/angular",slug:"/auto-generated/previews/angular/textarea-readonly.ts",permalink:"/docs/auto-generated/previews/angular/textarea-readonly.ts",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/angular/textarea-readonly.ts.md",tags:[],version:"current",frontMatter:{}},c={},l=[],d={toc:l};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { Component } from '@angular/core';\n\n@Component({\n  selector: 'app-example',\n  template: `\n    <textarea class=\"form-control\" placeholder=\"Enter text here\" readonly>\n  Some example text\n</textarea>\n  `,\n})\nexport default class TextareaReadonly {}\n")))}u.isMDXComponent=!0},64370:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=a(7896),r=(a(2784),a(30876));const o={},i=void 0,s={unversionedId:"auto-generated/previews/angular/textarea.ts",id:"auto-generated/previews/angular/textarea.ts",title:"textarea.ts",description:"\x3c!--",source:"@site/docs/auto-generated/previews/angular/textarea.ts.md",sourceDirName:"auto-generated/previews/angular",slug:"/auto-generated/previews/angular/textarea.ts",permalink:"/docs/auto-generated/previews/angular/textarea.ts",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/angular/textarea.ts.md",tags:[],version:"current",frontMatter:{}},c={},l=[],d={toc:l};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { Component } from '@angular/core';\n\n@Component({\n  selector: 'app-example',\n  template: `\n    <textarea class=\"form-control\" placeholder=\"Enter text here\">\n  Some example text\n</textarea>\n  `,\n})\nexport default class Textarea {}\n")))}u.isMDXComponent=!0},22455:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=a(7896),r=(a(2784),a(30876));const o={},i=void 0,s={unversionedId:"auto-generated/previews/react/textarea-disabled",id:"auto-generated/previews/react/textarea-disabled",title:"textarea-disabled",description:"\x3c!--",source:"@site/docs/auto-generated/previews/react/textarea-disabled.md",sourceDirName:"auto-generated/previews/react",slug:"/auto-generated/previews/react/textarea-disabled",permalink:"/docs/auto-generated/previews/react/textarea-disabled",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/react/textarea-disabled.md",tags:[],version:"current",frontMatter:{}},c={},l=[],d={toc:l};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import React from \'react\';\n\nexport default () => {\n  return (\n    <textarea\n      className="form-control"\n      placeholder="Enter text here"\n      disabled\n    ></textarea>\n  );\n};\n')))}u.isMDXComponent=!0},17128:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=a(7896),r=(a(2784),a(30876));const o={},i=void 0,s={unversionedId:"auto-generated/previews/react/textarea-readonly",id:"auto-generated/previews/react/textarea-readonly",title:"textarea-readonly",description:"\x3c!--",source:"@site/docs/auto-generated/previews/react/textarea-readonly.md",sourceDirName:"auto-generated/previews/react",slug:"/auto-generated/previews/react/textarea-readonly",permalink:"/docs/auto-generated/previews/react/textarea-readonly",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/react/textarea-readonly.md",tags:[],version:"current",frontMatter:{}},c={},l=[],d={toc:l};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import React from \'react\';\n\nexport default () => {\n  return (\n    <textarea\n      className="form-control"\n      placeholder="Enter text here"\n      readOnly\n    ></textarea>\n  );\n};\n')))}u.isMDXComponent=!0},58483:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=a(7896),r=(a(2784),a(30876));const o={},i=void 0,s={unversionedId:"auto-generated/previews/react/textarea",id:"auto-generated/previews/react/textarea",title:"textarea",description:"\x3c!--",source:"@site/docs/auto-generated/previews/react/textarea.md",sourceDirName:"auto-generated/previews/react",slug:"/auto-generated/previews/react/textarea",permalink:"/docs/auto-generated/previews/react/textarea",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/react/textarea.md",tags:[],version:"current",frontMatter:{}},c={},l=[],d={toc:l};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import React from \'react\';\n\nexport default () => {\n  return (\n    <textarea className="form-control" placeholder="Enter text here"></textarea>\n  );\n};\n')))}u.isMDXComponent=!0},42613:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=a(7896),r=(a(2784),a(30876));const o={},i=void 0,s={unversionedId:"auto-generated/previews/web-component/textarea-disabled",id:"auto-generated/previews/web-component/textarea-disabled",title:"textarea-disabled",description:"\x3c!--",source:"@site/docs/auto-generated/previews/web-component/textarea-disabled.md",sourceDirName:"auto-generated/previews/web-component",slug:"/auto-generated/previews/web-component/textarea-disabled",permalink:"/docs/auto-generated/previews/web-component/textarea-disabled",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/web-component/textarea-disabled.md",tags:[],version:"current",frontMatter:{}},c={},l=[],d={toc:l};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<textarea class="form-control" placeholder="Enter text here" disabled>\n  Some example text\n</textarea>\n')))}u.isMDXComponent=!0},35018:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=a(7896),r=(a(2784),a(30876));const o={},i=void 0,s={unversionedId:"auto-generated/previews/web-component/textarea-readonly",id:"auto-generated/previews/web-component/textarea-readonly",title:"textarea-readonly",description:"\x3c!--",source:"@site/docs/auto-generated/previews/web-component/textarea-readonly.md",sourceDirName:"auto-generated/previews/web-component",slug:"/auto-generated/previews/web-component/textarea-readonly",permalink:"/docs/auto-generated/previews/web-component/textarea-readonly",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/web-component/textarea-readonly.md",tags:[],version:"current",frontMatter:{}},c={},l=[],d={toc:l};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<textarea class="form-control" placeholder="Enter text here" readonly>\n  Some example text\n</textarea>\n')))}u.isMDXComponent=!0},15370:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=a(7896),r=(a(2784),a(30876));const o={},i=void 0,s={unversionedId:"auto-generated/previews/web-component/textarea",id:"auto-generated/previews/web-component/textarea",title:"textarea",description:"\x3c!--",source:"@site/docs/auto-generated/previews/web-component/textarea.md",sourceDirName:"auto-generated/previews/web-component",slug:"/auto-generated/previews/web-component/textarea",permalink:"/docs/auto-generated/previews/web-component/textarea",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/web-component/textarea.md",tags:[],version:"current",frontMatter:{}},c={},l=[],d={toc:l};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<textarea class="form-control" placeholder="Enter text here"></textarea>\n')))}u.isMDXComponent=!0},93591:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>w,contentTitle:()=>v,default:()=>y,frontMatter:()=>g,metadata:()=>x,toc:()=>h});var n=a(7896),r=(a(2784),a(30876)),o=a(30024),i=a(15370),s=a(42613),c=a(35018),l=a(58483),d=a(22455),u=a(17128),p=a(64370),m=a(44376),f=a(11478);const g={},v="Text area",x={unversionedId:"controls/textarea",id:"controls/textarea",title:"Text area",description:"Usage",source:"@site/docs/controls/textarea.md",sourceDirName:"controls",slug:"/controls/textarea",permalink:"/docs/controls/textarea",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/controls/textarea.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Tabs",permalink:"/docs/controls/tabs"},next:{title:"Tile",permalink:"/docs/controls/tile"}},w={},h=[{value:"Usage",id:"usage",level:2},{value:"Disabled",id:"disabled",level:3},{value:"Readonly",id:"readonly",level:3}],b={toc:h};function y(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"text-area"},"Text area"),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)(o.Z,{name:"textarea",height:"7rem",frameworks:{react:l.default,angular:p.default,javascript:i.default},mdxType:"Playground"}),(0,r.kt)("h3",{id:"disabled"},"Disabled"),(0,r.kt)(o.Z,{name:"textarea-disabled",height:"7rem",hideInitalCodePreview:!0,frameworks:{react:d.default,angular:m.default,javascript:s.default},mdxType:"Playground"}),(0,r.kt)("h3",{id:"readonly"},"Readonly"),(0,r.kt)(o.Z,{name:"textarea-readonly",height:"7rem",hideInitalCodePreview:!0,frameworks:{react:u.default,angular:f.default,javascript:c.default},mdxType:"Playground"}))}y.isMDXComponent=!0}}]);