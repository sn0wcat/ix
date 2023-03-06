"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[43794,12408,91057,28081,36234],{30876:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>p});var a=n(2784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(n),p=r,f=u["".concat(s,".").concat(p)]||u[p]||m[p]||o;return n?a.createElement(f,i(i({ref:t},d),{},{components:n})):a.createElement(f,i({ref:t},d))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},63483:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(2784),r=n(731);function o(e){var t,n,o,i,l,s,c,d;return a.createElement("div",{className:"row with--border"},a.createElement("div",{className:"col-sm-6"},a.createElement("div",{className:"ApiTable__Name"},null==e||null==(t=e.attribute)?void 0:t.name,null==e||null==(n=e.attribute)||null==(o=n.tags)?void 0:o.filter((e=>"since"===e.type)).map((t=>{var n;return a.createElement(r.h,{message:t.message,key:`Tag_Since_${null==e||null==(n=e.attribute)?void 0:n.name}`})})),null==e||null==(i=e.attribute)||null==(l=i.tags)?void 0:l.filter((e=>"deprecated"===e.type)).map((t=>{var n;return a.createElement(r.Q,{message:t.message,key:`Tag_Deprecated_${null==e||null==(n=e.attribute)?void 0:n.name}`})})))),a.createElement("div",{className:"col-sm-6"},a.createElement("div",{className:"ApiTable__Content"},a.createElement("span",{className:"Attribute__Description"},null==e||null==(s=e.attribute)?void 0:s.description),a.createElement("div",{className:"container-fluid"},null==e||null==(c=e.attribute)||null==(d=c.definition)?void 0:d.map((e=>a.createElement("div",{className:"row Attribute",key:e.name},a.createElement("div",{className:"col-auto Attribute__Name"},e.name,":"),a.createElement("code",{className:"col-auto Attribute__Value"},e.value))))))))}const i=function(e){var t;return a.createElement("div",{className:"container-fluid ApiTable"},a.createElement("div",{className:"row with--border"},a.createElement("div",{className:"col-sm-6 ApiTable__Headline"},"Name"),a.createElement("div",{className:"col-sm-6 ApiTable__Headline"},"Description and specifications")),null==e||null==(t=e.attributes)?void 0:t.map((e=>a.createElement(o,{attribute:e,key:e.name}))))}},731:(e,t,n)=>{n.d(t,{Q:()=>r,h:()=>o});var a=n(2784);function r(e){return a.createElement("div",{className:"ApiTableTag"},a.createElement("div",{className:"Tag Tag--Deprecated"},"Deprecated"),a.createElement("div",{className:"Tag__Message--Deprecated"},e.message))}function o(e){return a.createElement("div",{className:"ApiTableTag"},a.createElement("div",{className:"Tag"},"Since ",e.message))}},77942:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(37949),r=n(90077),o=n(37614),i=n(2784),l=n(90943);function s(e){const t=(0,o.Z)(),[n]=(0,i.useState)(!1),s=(0,r.Z)("/"),[c,d]=(0,i.useState)(""),[m,u]=(0,i.useState)((0,l.V)(t)),{preferredVersion:p}=(0,a.J)();return(0,i.useEffect)((()=>{const t=null==p?void 0:p.name;d(void 0===t||"current"===t?s+`webcomponent-examples/dist/preview-examples/${e.name}.html`:s+`versioned_examples/version-${t}/webcomponent-examples/dist/preview-examples/${e.name}.html`)}),[s,null==p?void 0:p.name,e.name]),(0,i.useLayoutEffect)((()=>{const e=()=>{let e=(0,l.V)(t);document.body.classList.forEach((t=>{t.includes("theme-")&&(e=t)})),u(e)},n=new MutationObserver((()=>e()));return n.observe(document.body,{attributeFilter:["class"],attributes:!0}),e(),()=>{n.disconnect()}}),[]),i.createElement(i.Fragment,null,n?i.createElement("span",null,"No component preview found for ",e.name," in version"," ",null==p?void 0:p.name):i.createElement("iframe",{src:`${c}?theme=${e.theme?e.theme:m}${e.noMargin?"&no-margin=true":""}`,style:{width:"100%",height:`${e.height}`}}))}},30024:(e,t,n)=>{n.d(t,{Z:()=>M});var a,r=n(7267),o=n(90077),i=n(53849),l=n(2784);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},s.apply(this,arguments)}const c=e=>{let{title:t,titleId:n,...r}=e;return l.createElement("svg",s({style:{transform:"scale(1.5)"},"aria-hidden":"true",width:16,height:16,viewBox:"0 0 12 12",fill:"none",role:"img","aria-labelledby":n},r),t?l.createElement("title",{id:n},t):null,a||(a=l.createElement("path",{d:"M6 0C2.687 0 0 2.756 0 6.153c0 2.718 1.72 5.022 4.104 5.836.037.008.07.011.101.011.223 0 .308-.163.308-.305 0-.148-.005-.533-.008-1.048-.225.051-.426.073-.605.073-1.154 0-1.417-.898-1.417-.898-.273-.71-.667-.9-.667-.9-.522-.367-.003-.377.038-.377h.002c.603.053.919.637.919.637.3.525.702.672 1.06.672.282 0 .536-.09.686-.16.054-.397.21-.667.38-.823-1.33-.155-2.731-.683-2.731-3.04 0-.672.233-1.221.616-1.65-.062-.155-.268-.782.059-1.628 0 0 .042-.014.134-.014.217 0 .707.083 1.516.646a5.62 5.62 0 0 1 1.502-.206c.51.002 1.024.07 1.503.206.809-.563 1.3-.646 1.516-.646a.5.5 0 0 1 .134.014c.327.846.12 1.473.059 1.628.383.431.616.98.616 1.65 0 2.363-1.404 2.882-2.74 3.035.214.19.407.565.407 1.139 0 .822-.008 1.486-.008 1.687 0 .145.083.308.305.308a.52.52 0 0 0 .107-.01C10.283 11.174 12 8.868 12 6.152 12 2.756 9.313 0 6 0Z",fill:"#73849A"})))};var d;function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},m.apply(this,arguments)}const u=e=>{let{title:t,titleId:n,...a}=e;return l.createElement("svg",m({style:{transform:"scale(1.5)"},"aria-hidden":"true",width:16,height:16,viewBox:"0 0 10 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",role:"img","aria-labelledby":n},a),t?l.createElement("title",{id:n},t):null,d||(d=l.createElement("path",{d:"M5.538 5.917 7.53 1 1 8.018h3.426l-2 4.982L9 5.917H5.538Z",stroke:"#73849A",strokeLinejoin:"round"})))};var p=n(77942);let f;!function(e){e.ANGULAR="angular",e.REACT="react",e.JAVASCRIPT="javascript",e.PREVIEW="preview"}(f||(f={}));var v=["angular-cli","create-react-app","html","javascript","node","polymer","typescript","vue"],g={clickToLoad:function(e){return h("ctl",e)},devToolsHeight:function(e){return w("devtoolsheight",e)},forceEmbedLayout:function(e){return h("embed",e)},hideDevTools:function(e){return h("hidedevtools",e)},hideExplorer:function(e){return h("hideExplorer",e)},hideNavigation:function(e){return h("hideNavigation",e)},showSidebar:function(e){return function(e,t){return"boolean"==typeof t?"showSidebar="+(t?"1":"0"):""}(0,e)},openFile:function(e){return function(e,t){return(Array.isArray(t)?t:[t]).filter((function(e){return"string"==typeof e&&""!==e.trim()})).map((function(e){return"file="+encodeURIComponent(e.trim())}))}(0,e).join("&")},terminalHeight:function(e){return w("terminalHeight",e)},theme:function(e){return E("theme",["light","dark"],e)},view:function(e){return E("view",["preview","editor"],e)}};function b(e){void 0===e&&(e={});var t=Object.entries(e).map((function(e){var t=e[0],n=e[1];return null!=n&&g.hasOwnProperty(t)?g[t](n):""})).filter(Boolean);return t.length?"?"+t.join("&"):""}function h(e,t){return!0===t?e+"=1":""}function w(e,t){return"number"==typeof t&&t>=0&&t<=100?e+"="+Math.round(t):""}function E(e,t,n){return"string"==typeof n&&t.includes(n)?e+"="+n:""}function y(e,t){return""+x(t)+e+b(t)}function x(e){return void 0===e&&(e={}),"string"==typeof e.origin?e.origin:"https://stackblitz.com"}function k(e){return e&&!1===e.newWindow?"_self":"_blank"}function N(e,t){var n=document.createElement("input");return n.type="hidden",n.name=e,n.value=t,n}function C(e){if(!v.includes(e.template)){var t=v.map((function(e){return"'"+e+"'"})).join(", ");console.warn("Unsupported project.template: must be one of "+t)}var n="node"===e.template,a=document.createElement("form");return a.method="POST",a.setAttribute("style","display:none!important;"),a.appendChild(N("project[title]",e.title)),a.appendChild(N("project[description]",e.description)),a.appendChild(N("project[template]",e.template)),e.dependencies&&(n?console.warn("Invalid project.dependencies: dependencies must be provided as a 'package.json' file when using the 'node' template."):a.appendChild(N("project[dependencies]",JSON.stringify(e.dependencies)))),e.settings&&a.appendChild(N("project[settings]",JSON.stringify(e.settings))),Object.keys(e.files).forEach((function(t){"string"==typeof e.files[t]&&a.appendChild(N("project[files]["+t+"]",e.files[t]))})),a}var T=function(e,t){!function(e,t){var n=C(e);n.action=y("/run",t),n.target=k(t),document.body.appendChild(n),n.submit(),document.body.removeChild(n)}(e,t)};const A="https://github.com/siemens/ix/tree/main/packages";function O(e){let{name:t,framework:n}=e;const a=function(e){let{name:t,framework:n}=e;return n===f.ANGULAR?`${A}/angular-test-app/src/preview-examples/${t}.ts`:n===f.JAVASCRIPT?`${A}/html-test-app/src/preview-examples/${t}.html`:n===f.REACT?`${A}/react-test-app/src/preview-examples/${t}.tsx`:void 0}({framework:n,name:t});window.open(a,"_blank")}async function j(e){const t=await Promise.all(e.map((e=>fetch(e))));return Promise.all(t.map((e=>e.text())))}async function P(e){let{name:t,framework:n,files:a,baseUrl:r}=e;const o=await async function(e,t,n){const a=[];return(await j(n.map((n=>`${e}auto-generated/previews/${t}/${n}.txt`)))).forEach(((e,t)=>{a.push({filename:n[t],sourceCode:e})})),a}(r,n,a);return n===f.REACT?async function(e,t){const[n,a,r,o,i]=await j([`${e}code-runtime/react/App.tsx`,`${e}code-runtime/react/index.html`,`${e}code-runtime/react/index.tsx`,`${e}code-runtime/react/package.json`,`${e}code-runtime/react/tsconfig.json`]),[l]=t,s={};t.forEach((e=>{let{filename:t,sourceCode:n}=e;s[`src/${t}`]=n})),T({template:"node",title:"iX React App",description:"iX react playground",files:{...s,"public/index.html":a,"src/index.tsx":r,"src/App.tsx":n.replace(/\/\/@_IMPORT_COMPONENT/gms,`import Example from './${l.filename.substring(0,l.filename.lastIndexOf("."))}'\n`).replace(/\{\/\* @_RENDER_COMPONENT \*\/\}/gms,"\n<Example />\n"),"package.json":o,"tsconfig.json":i,".stackblitzrc":'{\n        "startCommand": "yarn run start"\n      }'}},{openFile:`src/${l.filename}`})}(r,o):n===f.ANGULAR?async function(e,t,n){const[a,r,o,i,l,s,c,d,m,u,p]=await j([`${e}code-runtime/angular/src/app/app.component.css`,`${e}code-runtime/angular/src/app/app.component.html`,`${e}code-runtime/angular/src/app/app.component.ts`,`${e}code-runtime/angular/src/app/app.module.ts`,`${e}code-runtime/angular/src/index.html`,`${e}code-runtime/angular/src/main.ts`,`${e}code-runtime/angular/src/styles.css`,`${e}code-runtime/angular/angular.json`,`${e}code-runtime/angular/package.json`,`${e}code-runtime/angular/tsconfig.app.json`,`${e}code-runtime/angular/tsconfig.json`]),f=[];n.forEach((e=>{let{filename:t,sourceCode:n}=e;/@Component/gms.test(n)&&f.push(t)}));const v=`\n    ${f.map(((e,t)=>`import COMPONENT_${t} from './${e.substring(0,e.lastIndexOf("."))}'`))}\n\n    export const DECLARE = [\n      //@__DELCARE__COMPONENTS\n      ${f.map(((e,t)=>`COMPONENT_${t},`))}\n    ];\n  `,g={};n.forEach((e=>{let{filename:t,sourceCode:n}=e;g[`src/app/${t}`]=n})),T({template:"node",title:"iX angular app",description:"iX angular playground",files:{"src/app/declare-component.ts":v,"src/app/app.component.css":a,"src/app/app.component.html":r,"src/app/app.component.ts":o,"src/app/app.module.ts":i,"src/index.html":l,"src/main.ts":s,"src/styles.css":c,"angular.json":d,"package.json":m,"tsconfig.app.json":u,"tsconfig.json":p,...g}},{openFile:`src/app/${t}.ts`})}(r,t,o):n===f.JAVASCRIPT?async function(e,t){const[n,a,r,o]=await j([`${e}code-runtime/html/src/index.html`,`${e}code-runtime/html/src/main.js`,`${e}code-runtime/html/package.json`,`${e}code-runtime/html/vite.config.ts`]),[i,...l]=t,s={};l.forEach((e=>{s[`src/${e.filename}`]=e.sourceCode})),T({template:"node",title:"iX html app",description:"iX html playground",files:{...s,"src/index.html":n.replace("\x3c!-- IX_INJECT_SOURCE_CODE --\x3e",i.sourceCode),"src/main.js":a,"package.json":r,"vite.config.ts":o}},{openFile:["src/index.html"]})}(r,o):void 0}function $(e){let{name:t,framework:n}=e;return l.createElement("button",{className:"btn-icon-s btn btn-invisible-primary btn-icon btn-oval",onClick:()=>O({name:t,framework:n})},l.createElement(c,null))}function S(e){let{name:t,files:n,framework:a,baseUrl:r}=e;return l.createElement("button",{className:"btn-icon-s btn btn-invisible-primary btn-icon btn-oval",onClick:()=>P({name:t,files:n,framework:a,baseUrl:r})},l.createElement(u,null))}function _(e){const[t,n]=(0,l.useState)(e.files[0].filename);return l.createElement(l.Fragment,null,l.createElement(i.Vp,null,e.files.map((e=>{e.node;return l.createElement(i.t3,{key:e.filename,onClick:()=>{return t=e.filename,n(t);var t}},e.filename)}))),function(){var n;const a=null==(n=e.files.find((e=>e.filename===t)))?void 0:n.node;return a?l.createElement(a,null):null}())}function M(e){let{name:t,height:n,noMargin:a,theme:s,frameworks:c,availableFrameworks:d}=e;const{pathname:m}=(0,r.TH)(),u=(0,o.Z)("/"),[v,g]=(0,l.useState)(!0),[b,h]=(0,l.useState)(function(e){return e&&(0!==e.length?e[0]:void 0)||f.PREVIEW}(d)),[w,E]=(0,l.useState)();(0,l.useMemo)((()=>function(e){return`docusaurus.playground${e.replace(/\//g,".")}`}(m+t)),[t,m]);(0,l.useEffect)((()=>{const e={};c&&(Object.keys(c).forEach((n=>{if("function"==typeof c[n]){let a=t;n===f.REACT&&(a=a.concat(".tsx")),n===f.JAVASCRIPT&&(a=a.concat(".html")),n===f.ANGULAR&&(a=a.concat(".ts")),e[n]=[{filename:a,node:c[n]({})}]}"object"==typeof c[n]&&(e[n]||(e[n]=[]),Object.keys(c[n]).forEach((t=>{e[n].push({filename:t,node:c[n][t]})})))})),E(e))}),[c,E]);const y=e=>{h(e)};function x(e){return d?0===d.length||d.includes(e):Object.keys(c).some((t=>t===e))}return l.createElement("div",{className:"Playground"},v?l.createElement(l.Fragment,null,l.createElement("div",{className:"Playground__Toolbar Location__Bottom"},l.createElement(i.Vp,null,l.createElement(i.t3,{selected:b===f.PREVIEW,onClick:()=>y(f.PREVIEW)},"Preview"),x(f.ANGULAR)?l.createElement(i.t3,{selected:b===f.ANGULAR,onClick:()=>y(f.ANGULAR)},"Angular"):null,x(f.REACT)?l.createElement(i.t3,{selected:b===f.REACT,onClick:()=>y(f.REACT)},"React"):null,x(f.JAVASCRIPT)?l.createElement(i.t3,{selected:b===f.JAVASCRIPT,onClick:()=>y(f.JAVASCRIPT)},"JavaScript"):null),l.createElement("div",{className:"Playground__Toolbar__Actions"},b!==f.PREVIEW?l.createElement(l.Fragment,null,l.createElement($,{name:t,framework:b}),l.createElement(S,{name:t,framework:b,baseUrl:u,files:w?b===f.PREVIEW?[]:w[b].map((e=>e.filename)):[]})):null)),function(){if(b===f.PREVIEW)return l.createElement(p.Z,{name:t,height:n,noMargin:a,theme:s});if(!w||!w[b])return null;if(1===w[b].length){const[{node:e}]=w[b];return e}return l.createElement(_,{files:w[b]})}()):null)}},6771:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var a=n(7896),r=(n(2784),n(30876)),o=n(63483);const i={},l=void 0,s={unversionedId:"auto-generated/ix-validation-tooltip/props",id:"auto-generated/ix-validation-tooltip/props",title:"props",description:"",source:"@site/docs/auto-generated/ix-validation-tooltip/props.md",sourceDirName:"auto-generated/ix-validation-tooltip",slug:"/auto-generated/ix-validation-tooltip/props",permalink:"/docs/auto-generated/ix-validation-tooltip/props",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-validation-tooltip/props.md",tags:[],version:"current",frontMatter:{}},c={},d=[],m={toc:d};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o.Z,{attributes:[{name:"message",description:"Message of the tooltip",definition:[{name:"Attribute",value:"message"},{name:"Type",value:"string"},{name:"Default"}],tags:[]},{name:"placement",description:"Placement of the tooltip",definition:[{name:"Attribute",value:"placement"},{name:"Type",value:'"auto" \uff5c "auto-end" \uff5c "auto-start" \uff5c "bottom" \uff5c "bottom-end" \uff5c "bottom-start" \uff5c "left" \uff5c "left-end" \uff5c "left-start" \uff5c "right" \uff5c "right-end" \uff5c "right-start" \uff5c "top" \uff5c "top-end" \uff5c "top-start"'},{name:"Default",value:"'top'"}],tags:[]}],mdxType:"ApiTable"}))}u.isMDXComponent=!0},39235:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(7896),r=(n(2784),n(30876));const o={},i=void 0,l={unversionedId:"auto-generated/previews/angular/validation.ts",id:"auto-generated/previews/angular/validation.ts",title:"validation.ts",description:"\x3c!--",source:"@site/docs/auto-generated/previews/angular/validation.ts.md",sourceDirName:"auto-generated/previews/angular",slug:"/auto-generated/previews/angular/validation.ts",permalink:"/docs/auto-generated/previews/angular/validation.ts",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/angular/validation.ts.md",tags:[],version:"current",frontMatter:{}},s={},c=[],d={toc:c};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { Component } from \'@angular/core\';\n\n@Component({\n  selector: \'app-example\',\n  template: `\n    <form\n      class="row g-3 needs-validation"\n      [ngClass]="{ \'was-validated\': wasValidated }"\n      no-validate\n      (submit)="onSubmit($event)"\n    >\n      <div class="col-md-4">\n        <label htmlFor="validationCustom01" class="form-label">\n          First name\n        </label>\n        <input\n          name="firstName"\n          type="text"\n          class="form-control"\n          id="validationCustom01"\n          [(ngModel)]="data.firstName"\n          #firstName="ngModel"\n          required\n        />\n        <div class="valid-feedback">Looks good!</div>\n      </div>\n      <div class="col-md-4">\n        <ix-validation-tooltip\n          message="Error hint textError hint textError hint textError hint textError hint textError hint textError hint textError hint textError hint text"\n        >\n          <label htmlFor="validationCustom02" class="form-label">\n            Last name\n          </label>\n          <input\n            name="lastName"\n            type="text"\n            class="form-control"\n            id="validationCustom02"\n            [(ngModel)]="data.lastName"\n            #lastName="ngModel"\n            required\n          />\n        </ix-validation-tooltip>\n        <div class="valid-feedback">Looks good!</div>\n      </div>\n      <div class="col-md-4">\n        <label htmlFor="validationCustomUsername" class="form-label">\n          Username\n        </label>\n        <input\n          name="userName"\n          type="text"\n          class="form-control"\n          id="validationCustomUsername"\n          aria-describedby="inputGroupPrepend"\n          [(ngModel)]="data.userName"\n          #userName="ngModel"\n          required\n        />\n        <div class="invalid-feedback">Please choose a username.</div>\n      </div>\n      <div class="col-12">\n        <button class="btn btn-primary" type="submit">Submit form</button>\n      </div>\n    </form>\n  `,\n})\nexport default class Validation {\n  data = {\n    firstName: \'\',\n    lastName: \'\',\n    userName: \'\',\n  };\n\n  wasValidated = false;\n\n  onSubmit(event: SubmitEvent) {\n    event.preventDefault();\n\n    this.wasValidated = true;\n  }\n}\n')))}m.isMDXComponent=!0},1879:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(7896),r=(n(2784),n(30876));const o={},i=void 0,l={unversionedId:"auto-generated/previews/react/validation",id:"auto-generated/previews/react/validation",title:"validation",description:"\x3c!--",source:"@site/docs/auto-generated/previews/react/validation.md",sourceDirName:"auto-generated/previews/react",slug:"/auto-generated/previews/react/validation",permalink:"/docs/auto-generated/previews/react/validation",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/react/validation.md",tags:[],version:"current",frontMatter:{}},s={},c=[],d={toc:c};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'/*\n * COPYRIGHT (c) Siemens AG\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\nimport { IxValidationTooltip } from \'@siemens/ix-react\';\nimport React, { useState } from \'react\';\nimport { useForm } from \'react-hook-form\';\n\nexport default () => {\n  const [wasValidated, setValidation] = useState(false);\n  const { register, handleSubmit, formState } = useForm({\n    defaultValues: {\n      firstName: \'\',\n      lastName: \'\',\n      userName: \'\',\n    },\n  });\n\n  const onSubmit = (data: any) => {\n    console.log(data);\n    setValidation(true);\n  };\n\n  return (\n    <>\n      <form\n        className={`row g-3 needs-validation`}\n        noValidate\n        onSubmit={handleSubmit(onSubmit)}\n      >\n        <div className="col-md-4">\n          <label htmlFor="validationCustom01" className="form-label">\n            First name\n          </label>\n          <input\n            type="text"\n            className={`form-control ${\n              formState.errors.firstName ? \'is-invalid\' : \'\'\n            }`}\n            id="validationCustom01"\n            {...register(\'firstName\', {\n              required: true,\n            })}\n          />\n          <div className="valid-feedback">Looks good!</div>\n        </div>\n        <div className="col-md-4">\n          <IxValidationTooltip message="Error hint textError hint textError hint textError hint textError hint textError hint textError hint textError hint textError hint text">\n            <label htmlFor="validationCustom02" className="form-label">\n              Last name\n            </label>\n            <input\n              type="text"\n              className={`form-control ${\n                formState.errors.lastName ? \'is-invalid\' : \'\'\n              }`}\n              id="validationCustom02"\n              {...register(\'lastName\', {\n                required: true,\n              })}\n            />\n          </IxValidationTooltip>\n          <div className="valid-feedback">Looks good!</div>\n        </div>\n        <div className="col-md-4">\n          <label htmlFor="validationCustomUsername" className="form-label">\n            Username\n          </label>\n          <input\n            type="text"\n            className={`form-control ${\n              formState.errors.userName ? \'is-invalid\' : \'\'\n            }`}\n            id="validationCustomUsername"\n            aria-describedby="inputGroupPrepend"\n            {...register(\'userName\', {\n              required: true,\n            })}\n          />\n          <div className="invalid-feedback">Please choose a username.</div>\n        </div>\n        <div className="col-12">\n          <button className="btn btn-primary" type="submit">\n            Submit form\n          </button>\n        </div>\n      </form>\n    </>\n  );\n};\n')))}m.isMDXComponent=!0},80047:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(7896),r=(n(2784),n(30876));const o={},i=void 0,l={unversionedId:"auto-generated/previews/web-component/validation",id:"auto-generated/previews/web-component/validation",title:"validation",description:"\x3c!--",source:"@site/docs/auto-generated/previews/web-component/validation.md",sourceDirName:"auto-generated/previews/web-component",slug:"/auto-generated/previews/web-component/validation",permalink:"/docs/auto-generated/previews/web-component/validation",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/web-component/validation.md",tags:[],version:"current",frontMatter:{}},s={},c=[],d={toc:c};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<form class="row g-3 needs-validation" novalidate>\n  <div class="row">\n    <div class="col-md-4">\n      <label for="validationCustom01" class="form-label">\n        First name\n      </label>\n      <input\n        type="text"\n        class="form-control"\n        id="validationCustom01"\n        value=""\n        required\n      />\n      <div class="valid-feedback">Looks good!</div>\n    </div>\n  </div>\n  <div class="row">\n    <div class="col-md-4">\n      <ix-validation-tooltip message="Cannot be empty!">\n        <label for="validationCustom02" class="form-label">\n          Last name\n        </label>\n        <input\n          type="text"\n          class="form-control"\n          id="validationCustom02"\n          value=""\n          required\n        />\n      </ix-validation-tooltip>\n      <div class="valid-feedback">Looks good!</div>\n    </div>\n  </div>\n  <div class="row">\n    <div class="col-md-4">\n      <label for="validationCustomUsername" class="form-label">\n        Username\n      </label>\n      <input\n        type="text"\n        class="form-control"\n        id="validationCustomUsername"\n        aria-describedby="inputGroupPrepend"\n        required\n        minlength="4"\n      />\n      <div class="invalid-feedback">Please choose a username.</div>\n    </div>\n  </div>\n  <div class="col-12">\n    <button class="btn btn-primary" type="submit">Submit form</button>\n  </div>\n</form>\n<script>\n  (async () => {\n    await window.customElements.whenDefined(\'ix-validation-tooltip\');\n    const forms = document.querySelector(\'form\');\n    forms.addEventListener(\'submit\', (event) => {\n      event.preventDefault();\n      forms.classList.add(\'was-validated\');\n    });\n  })();\n<\/script>\n')))}m.isMDXComponent=!0},16706:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>m,default:()=>g,frontMatter:()=>d,metadata:()=>u,toc:()=>f});var a=n(7896),r=(n(2784),n(30876)),o=n(30024),i=n(6771),l=n(80047),s=n(1879),c=n(39235);const d={},m="Form validation",u={unversionedId:"controls/validation",id:"controls/validation",title:"Form validation",description:"For the validation @siemens/ix use the validation concept of bootstrap.",source:"@site/docs/controls/validation.md",sourceDirName:"controls",slug:"/controls/validation",permalink:"/docs/controls/validation",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/controls/validation.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Upload",permalink:"/docs/controls/upload"},next:{title:"Workflow",permalink:"/docs/controls/workflow"}},p={},f=[{value:"Preview",id:"preview",level:2},{value:"Properties (Tooltip)",id:"properties-tooltip",level:2},{value:"Props",id:"props",level:2}],v={toc:f};function g(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"form-validation"},"Form validation"),(0,r.kt)("p",null,"For the validation ",(0,r.kt)("inlineCode",{parentName:"p"},"@siemens/ix")," use the validation concept of ",(0,r.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/5.2/forms/validation/"},"bootstrap"),".\nThe differences is that the validation tooltip is implemented as ",(0,r.kt)("inlineCode",{parentName:"p"},"@siemens/ix")," ",(0,r.kt)("a",{parentName:"p",href:"#properties-tooltip"},"tooltip")),(0,r.kt)("p",null,"In the following preview section you will find different implementation of a forms validation."),(0,r.kt)("h2",{id:"preview"},"Preview"),(0,r.kt)(o.Z,{name:"validation",height:"20rem",frameworks:{react:s.default,angular:c.default,javascript:l.default},mdxType:"Playground"}),(0,r.kt)("h2",{id:"properties-tooltip"},"Properties (Tooltip)"),(0,r.kt)("h2",{id:"props"},"Props"),(0,r.kt)(i.default,{mdxType:"Props"}))}g.isMDXComponent=!0}}]);