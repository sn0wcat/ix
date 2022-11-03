"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[5980,1476,6635],{30876:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(2784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,h=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(h,l(l({ref:t},u),{},{components:n})):r.createElement(h,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},82009:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(2784),a=n(6277);const o="tabItem_OMyP";function l(e){let{children:t,hidden:n,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:n},t)}},1112:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(7896),a=n(2784),o=n(6277),l=n(89741),s=n(42244),i=n(78963),c=n(24126);const u="tabList_M0Dn",d="tabItem_ysIP";function p(e){var t;const{lazy:n,block:l,defaultValue:p,values:m,groupId:h,className:b}=e,v=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=m??v.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),g=(0,s.l)(f,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const w=null===p?p:p??(null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)??v[0].props.value;if(null!==w&&!f.some((e=>e.value===w)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${w}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:k}=(0,i.U)(),[T,O]=(0,a.useState)(w),E=[],{blockElementScrollPositionUntilNextRender:x}=(0,c.o5)();if(null!=h){const e=y[h];null!=e&&e!==T&&f.some((t=>t.value===e))&&O(e)}const M=e=>{const t=e.currentTarget,n=E.indexOf(t),r=f[n].value;r!==T&&(x(t),O(r),null!=h&&k(h,String(r)))},Z=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=E.indexOf(e.currentTarget)+1;n=E[t]??E[0];break}case"ArrowLeft":{const t=E.indexOf(e.currentTarget)-1;n=E[t]??E[E.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":l},b)},f.map((e=>{let{value:t,label:n,attributes:l}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>E.push(e),onKeyDown:Z,onFocus:M,onClick:M},l,{className:(0,o.Z)("tabs__item",d,null==l?void 0:l.className,{"tabs__item--active":T===t})}),n??t)}))),n?(0,a.cloneElement)(v.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function m(e){const t=(0,l.Z)();return a.createElement(p,(0,r.Z)({key:String(t)},e))}},77942:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(37949),a=n(90077),o=n(37614),l=n(2784),s=n(90943);function i(e){const t=(0,o.Z)(),[n]=(0,l.useState)(!1),i=(0,a.Z)("/"),[c,u]=(0,l.useState)(""),[d,p]=(0,l.useState)((0,s.V)(t)),{preferredVersion:m}=(0,r.J)();return(0,l.useEffect)((()=>{const t=null==m?void 0:m.name;u(void 0===t||"current"===t?i+`webcomponent-examples/${e.name}.html`:i+`versioned_examples/version-${t}/webcomponent-examples/${e.name}.html`)}),[i,null==m?void 0:m.name,e.name]),(0,l.useLayoutEffect)((()=>{const e=()=>{let e=(0,s.V)(t);document.body.classList.forEach((t=>{t.includes("theme-")&&(e=t)})),p(e)},n=new MutationObserver((()=>e()));return n.observe(document.body,{attributeFilter:["class"],attributes:!0}),e(),()=>{n.disconnect()}}),[]),l.createElement(l.Fragment,null,n?l.createElement("span",null,"No component preview found for ",e.name," in version"," ",null==m?void 0:m.name):l.createElement("iframe",{src:`${c}?theme=${e.theme?e.theme:d}${e.noMargin?"&no-margin=true":""}`,style:{width:"100%",height:`${e.height}`}}))}},64176:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(82009),a=n(1112),o=n(2784),l=n(77942);const s={angular:1,react:2,javascript:3,preview:4};function i(e){const t=e.children??[],n=Array.isArray(t)?t:[t];return o.createElement(a.Z,{groupId:e.name,values:[{value:"preview",label:"Preview"},...[{value:"angular",label:"Angular"},{value:"react",label:"React"},{value:"javascript",label:"Web Components"}].filter((e=>n.map((e=>e.props.value)).includes(e.value)))],defaultValue:"preview"},[o.createElement(r.Z,{value:"preview",key:"preview"},o.createElement(l.Z,{name:e.name,height:e.height,noMargin:e.noMargin})),...n].sort(((e,t)=>s[e.props.value]-s[t.props.value])))}},59166:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(7896),a=(n(2784),n(30876));const o={},l=void 0,s={unversionedId:"auto-generated/previews/web-component/html-table-striped",id:"auto-generated/previews/web-component/html-table-striped",title:"html-table-striped",description:"\x3c!--",source:"@site/docs/auto-generated/previews/web-component/html-table-striped.md",sourceDirName:"auto-generated/previews/web-component",slug:"/auto-generated/previews/web-component/html-table-striped",permalink:"/docs/auto-generated/previews/web-component/html-table-striped",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/web-component/html-table-striped.md",tags:[],version:"current",frontMatter:{}},i={},c=[],u={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<table class="table table-striped">\n  <thead>\n    <tr>\n      <th scope="col">#</th>\n      <th scope="col">First</th>\n      <th scope="col">Last</th>\n      <th scope="col">Handle</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <th scope="row">1</th>\n      <td>Mark</td>\n      <td>Otto</td>\n      <td>@mdo</td>\n    </tr>\n    <tr>\n      <th scope="row">2</th>\n      <td>Jacob</td>\n      <td>Thornton</td>\n      <td>@fat</td>\n    </tr>\n    <tr>\n      <th scope="row">3</th>\n      <td colspan="2">Larry the Bird</td>\n      <td>@twitter</td>\n    </tr>\n  </tbody>\n</table>\n')))}d.isMDXComponent=!0},99215:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(7896),a=(n(2784),n(30876));const o={},l=void 0,s={unversionedId:"auto-generated/previews/web-component/html-table",id:"auto-generated/previews/web-component/html-table",title:"html-table",description:"\x3c!--",source:"@site/docs/auto-generated/previews/web-component/html-table.md",sourceDirName:"auto-generated/previews/web-component",slug:"/auto-generated/previews/web-component/html-table",permalink:"/docs/auto-generated/previews/web-component/html-table",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/web-component/html-table.md",tags:[],version:"current",frontMatter:{}},i={},c=[],u={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<table class="table">\n  <thead>\n    <tr>\n      <th scope="col">#</th>\n      <th scope="col">First</th>\n      <th scope="col">Last</th>\n      <th scope="col">Handle</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <th scope="row">1</th>\n      <td>Mark</td>\n      <td>Otto</td>\n      <td>@mdo</td>\n    </tr>\n    <tr>\n      <th scope="row">2</th>\n      <td>Jacob</td>\n      <td>Thornton</td>\n      <td>@fat</td>\n    </tr>\n    <tr>\n      <th scope="row">3</th>\n      <td colspan="2">Larry the Bird</td>\n      <td>@twitter</td>\n    </tr>\n  </tbody>\n</table>\n')))}d.isMDXComponent=!0},34753:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>b,frontMatter:()=>c,metadata:()=>d,toc:()=>m});var r=n(7896),a=(n(2784),n(30876)),o=n(82009),l=n(64176),s=n(99215),i=n(59166);const c={},u="HTML Table",d={unversionedId:"controls/html-grid",id:"controls/html-grid",title:"HTML Table",description:"Usage",source:"@site/docs/controls/html-grid.md",sourceDirName:"controls",slug:"/controls/html-grid",permalink:"/docs/controls/html-grid",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/controls/html-grid.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Group",permalink:"/docs/controls/group"},next:{title:"Input",permalink:"/docs/controls/input"}},p={},m=[{value:"Usage",id:"usage",level:2},{value:"Striped",id:"striped",level:3}],h={toc:m};function b(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"html-table"},"HTML Table"),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)(l.Z,{name:"html-table",height:"12rem",mdxType:"Preview"},(0,a.kt)(o.Z,{value:"javascript",mdxType:"TabItem"},(0,a.kt)(s.default,{mdxType:"SourceTable"}))),(0,a.kt)("h3",{id:"striped"},"Striped"),(0,a.kt)(l.Z,{name:"html-table-striped",height:"12rem",mdxType:"Preview"},(0,a.kt)(o.Z,{value:"javascript",mdxType:"TabItem"},(0,a.kt)(i.default,{mdxType:"SourceTableStriped"}))))}b.isMDXComponent=!0}}]);