"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[64470],{30876:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>v});var i=t(2784);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},l=Object.keys(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=i.createContext({}),d=function(e){var n=i.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=d(e.components);return i.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=d(t),v=r,u=m["".concat(p,".").concat(v)]||m[v]||s[v]||l;return t?i.createElement(u,a(a({ref:n},c),{},{components:t})):i.createElement(u,a({ref:n},c))}));function v(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,a=new Array(l);a[0]=m;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,a[1]=o;for(var d=2;d<l;d++)a[d]=t[d];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},34833:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>a,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var i=t(7896),r=(t(2784),t(30876));const l={},a=void 0,o={unversionedId:"auto-generated/previews/vue/flip-tile",id:"auto-generated/previews/vue/flip-tile",title:"flip-tile",description:"\x3c!--",source:"@site/docs/auto-generated/previews/vue/flip-tile.md",sourceDirName:"auto-generated/previews/vue",slug:"/auto-generated/previews/vue/flip-tile",permalink:"/version-dev/docs/auto-generated/previews/vue/flip-tile",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/vue/flip-tile.md",tags:[],version:"current",frontMatter:{}},p={},d=[],c={toc:d};function s(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,i.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<script setup lang="ts">\nimport { FlipTileState } from \'@siemens/ix\';\nimport { IxFlipTile, IxFlipTileContent, IxIcon } from \'@siemens/ix-vue\';\n<\/script>\n\n<template>\n  <div className="example">\n    <IxFlipTile>\n      <div slot="header">Flip header</div>\n\n      <div slot="footer">\n        <div>Predicted maintenance date</div>\n        <div className="d-flex align-items-center">\n          <IxIcon name="info" size="16"></IxIcon>2021-06-22\n        </div>\n      </div>\n\n      <IxFlipTileContent> Example 1 </IxFlipTileContent>\n      <IxFlipTileContent> Example 2 </IxFlipTileContent>\n    </IxFlipTile>\n\n    <IxFlipTile :state="FlipTileState.Primary">\n      <div slot="header">Flip header</div>\n      <div slot="footer">\n        <div>Predicted maintenance date</div>\n        <div className="d-flex align-items-center">\n          <IxIcon name="info" size="16"></IxIcon>2021-06-22\n        </div>\n      </div>\n      <IxFlipTileContent> Example 1 </IxFlipTileContent>\n      <IxFlipTileContent> Example 2 </IxFlipTileContent>\n    </IxFlipTile>\n\n    <IxFlipTile :state="FlipTileState.Info">\n      <div slot="header">Flip header</div>\n      <div slot="footer">\n        <div>Predicted maintenance date</div>\n        <div className="d-flex align-items-center">\n          <IxIcon name="info" size="16"></IxIcon>2021-06-22\n        </div>\n      </div>\n      <IxFlipTileContent> Example 1 </IxFlipTileContent>\n      <IxFlipTileContent> Example 2 </IxFlipTileContent>\n    </IxFlipTile>\n\n    <IxFlipTile :state="FlipTileState.Warning">\n      <div slot="header">Flip header</div>\n      <div slot="footer">\n        <div>Predicted maintenance date</div>\n        <div className="d-flex align-items-center">\n          <IxIcon name="info" size="16"></IxIcon>2021-06-22\n        </div>\n      </div>\n      <IxFlipTileContent> Example 1 </IxFlipTileContent>\n      <IxFlipTileContent> Example 2 </IxFlipTileContent>\n    </IxFlipTile>\n\n    <IxFlipTile :state="FlipTileState.Alarm">\n      <div slot="header">Flip header</div>\n      <div slot="footer">\n        <div>Predicted maintenance date</div>\n        <div className="d-flex align-items-center">\n          <IxIcon name="info" size="16"></IxIcon>2021-06-22\n        </div>\n      </div>\n      <IxFlipTileContent> Example 1 </IxFlipTileContent>\n      <IxFlipTileContent> Example 2 </IxFlipTileContent>\n    </IxFlipTile>\n  </div>\n</template>\n')))}s.isMDXComponent=!0}}]);