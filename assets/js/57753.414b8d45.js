"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[57753],{64067:(t,e,i)=>{i.d(e,{h:()=>a,i:()=>o,m:()=>n});var s=i(42951);const n=new class{constructor(){this.menuElement=null,this.menuExpandChange=new s.T}register(t){this.menuElement?console.warn("Menu already defined"):(this.menuElement=t,this.menuElement.addEventListener("expandChange",(t=>{this.menuExpandChange.emit(t.detail)})))}async open(){return!!this.menuElement&&(this.menuElement.toggleMenu(!0),!0)}async close(){return!!this.menuElement&&(this.menuElement.toggleMenu(!1),!0)}async toggle(){return!!this.menuElement&&(this.menuElement.toggleMenu(),!0)}get nativeElement(){return this.menuElement}get expandChange(){return this.menuExpandChange}};function o(t){return t&&"IX-BASIC-NAVIGATION"===t.tagName}const a=(t,e)=>e.closest(t)},57753:(t,e,i)=>{i.r(e),i.d(e,{ix_menu:()=>m,ix_menu_about:()=>l,ix_menu_about_item:()=>h,ix_menu_about_news:()=>c,ix_menu_avatar:()=>d,ix_menu_avatar_item:()=>b,ix_menu_item:()=>g,ix_menu_settings:()=>x,ix_menu_settings_item:()=>v});var s=i(95269),n=i(64067),o=i(59350),a=i(45932),r=i(36591);const m=class{constructor(t){(0,s.r)(this,t),this.expandChange=(0,s.c)(this,"expandChange",7),this.mapExpandChange=(0,s.c)(this,"mapExpandChange",7),this.domObserver=new MutationObserver(this.onDomChange.bind(this)),this.isVisible=t=>{var e,i;return"none"!==t.style.display&&"none"!==(null===(i=null===(e=t.parentElement)||void 0===e?void 0:e.parentElement)||void 0===i?void 0:i.style.display)},this.showSettings=!1,this.showAbout=!1,this.enableToggleTheme=!1,this.enableSettings=!0,this.enableMapExpand=!1,this.applicationName=void 0,this.applicationDescription="",this.maxVisibleMenuItems=9,this.i18nLegal="About & legal information",this.i18nSettings="Settings",this.i18nToggleTheme="Toggle theme",this.i18nExpand=" Expand",this.i18nCollapse="Collapse",this.i18nMore="More\u2026",this.expand=!1,this.showMoreItems=!1,this.visibleMenuItems=0,this.countMoreNotifications=0,this.mapExpand=!0,this.activeTab=void 0,this.isMoreTabEmpty=!1,this.mode="desktop"}onWindowResize(){this.visibleMenuItems=this.getMaxTabCount()}handleNodeMutation(t){t instanceof HTMLElement&&(t.matches(".tab")&&this.onWindowResize(),t.matches("ix-menu-about")&&this.menu.contains(t)&&this.appendAbout(),t.matches("ix-menu-settings")&&this.menu.contains(t)&&this.appendSettings())}onDomChange(t){t.forEach((t=>{t.addedNodes.forEach(this.handleNodeMutation.bind(this)),t.removedNodes.forEach(this.handleNodeMutation.bind(this))}))}get popoverArea(){return this.hostElement.querySelector("#popover-area")}get overlayContainer(){return this.hostElement.querySelector(".menu-overlay")}get invisibleContainer(){return this.hostElement.querySelector(".menu-overlay-invisible")}get menu(){return this.hostElement.querySelector(".menu")}get menuItems(){return Array.from(this.hostElement.querySelectorAll('ix-menu-item:not(.internal-tab):not(.home-tab):not(.bottom-tab):not([slot="bottom"])')).filter(this.isVisible)}get menuBottomItems(){return Array.from(this.hostElement.querySelectorAll("ix-menu-item.bottom-tab:not(.internal-tab):not(.home-tab)")).filter(this.isVisible)}get homeTab(){return this.hostElement.querySelector("ix-menu-item.home-tab")}get moreItemsDropdown(){return this.hostElement.querySelector(".internal-tab ix-dropdown")}get isMoreItemsDropdownEmpty(){return 0===this.hostElement.querySelectorAll(".internal-tab ix-dropdown .appended").length}get moreItemsDropdownItems(){return this.hostElement.querySelectorAll(".internal-tab ix-dropdown ix-menu-item")}get activeMoreTabContainer(){return this.hostElement.querySelector(".active-more-tab")}get activeMoreTab(){return this.hostElement.querySelector(".active-more-tab ix-menu-item")}get aboutPopoverContainer(){return this.hostElement.querySelector(".about-news")}get aboutPopover(){return document.querySelector("ix-menu-about-news")}get aboutTab(){return this.hostElement.querySelector("#aboutAndLegal")}get about(){return this.hostElement.querySelector("ix-menu-about")}get settings(){return this.hostElement.querySelector("ix-menu-settings")}get isSettingsEmpty(){return 0===Array.from(this.hostElement.querySelectorAll("ix-menu-settings-item")).length}get avatarItem(){return this.hostElement.querySelector("ix-menu-avatar")}get tabsContainer(){return this.hostElement.querySelector("#menu-tabs")}showTab(t){return t+1<=this.visibleMenuItems}componentDidLoad(){var t,e,i,s;null===(t=this.settings)||void 0===t||t.addEventListener("close",(()=>{this.showSettings=!1,this.settings.show=this.showSettings})),null===(e=this.settings)||void 0===e||e.addEventListener("animationend",(()=>{this.showSettings||(this.settings.classList.add("d-none"),this.overlayContainer.classList.add("d-none"))})),null===(i=this.about)||void 0===i||i.addEventListener("close",(()=>{this.showAbout=!1,this.about.show=this.showAbout})),null===(s=this.about)||void 0===s||s.addEventListener("animationend",(()=>{this.showAbout||(this.about.classList.add("d-none"),this.overlayContainer.classList.add("d-none"))})),this.overlayContainer.classList.add("d-none"),this.onWindowResize(),this.domObserver.observe(this.hostElement,{attributes:!1,childList:!0,subtree:!0})}componentWillLoad(){n.m.register(this.hostElement);const t=(0,n.h)("ix-basic-navigation",this.hostElement);(0,n.i)(t)&&!1===t.hideHeader&&(a.s.onChange.on((t=>this.mode=t)),this.mode=a.s.mode)}componentWillRender(){this.appendTabs()}componentDidRender(){this.visibleMenuItems=this.getMaxTabCount(),this.appendFragments()}appendFragments(){this.appendAvatar(),this.appendAbout(),this.appendSettings(),this.appendAboutNewsPopover(),this.isMoreTabEmpty=this.isMoreItemsDropdownEmpty,this.countMoreNotifications=this.getMoreNotificationsCount()}resetActiveTab(){this.activeTab=null}isMenuItemActive(t){return t.active||t.classList.contains("active")}appendTabs(){this.activeTab=null,this.homeTab&&(this.hostElement.querySelector(".tabs-top").appendChild(this.homeTab),this.homeTab.addEventListener("click",this.resetOverlay.bind(this))),this.menuItems.forEach(((t,e)=>{var i;this.showTab(e)?t.classList.remove("d-none"):(t.classList.add("d-none"),this.isMenuItemActive(t)&&(this.activeTab=t)),null===(i=this.homeTab)||void 0===i||i.classList.remove("d-none"),t.addEventListener("click",this.resetOverlay.bind(this))}))}appendAvatar(){var t;const e=this.avatarItem;e&&(e.style.marginBottom="1rem",null===(t=this.hostElement.querySelector("#avatar-tab-placeholder"))||void 0===t||t.appendChild(e))}getAboutPopoverVerticalPosition(){const t=this.aboutTab.getBoundingClientRect(),e=window.innerHeight-(t.bottom-t.height/2+6+6);return(0,o.a)(e)}appendAboutNewsPopover(){var t;if(this.aboutPopover&&(this.aboutPopover.style.bottom=this.getAboutPopoverVerticalPosition(),!(null===(t=this.popoverArea)||void 0===t?void 0:t.contains(this.aboutPopover)))){const t=()=>{var t;(null===(t=this.aboutPopover)||void 0===t?void 0:t.aboutItemLabel)&&(this.about.activeTabLabel=this.aboutPopover.aboutItemLabel,this.toggleAbout(!0))};this.aboutPopover.addEventListener("showMore",t.bind(this)),document.body.appendChild(this.aboutPopover)}}appendSettings(){this.settings&&this.overlayContainer.appendChild(this.settings)}appendAbout(){this.about&&this.overlayContainer.appendChild(this.about)}getMoreNotificationsCount(){var t;const e=null===(t=this.moreItemsDropdown)||void 0===t?void 0:t.querySelectorAll(".appended");let i=0;return null==e||e.forEach((t=>{t.notifications&&(i+=t.notifications)})),i}getAvailableHeight(){let t=this.hostElement.clientHeight;return t-=60,this.avatarItem&&(t-=56),this.homeTab&&(t-=72),this.showAbout&&(t-=36),this.showSettings&&(t-=36),this.menuBottomItems.length&&(t-=36*this.menuBottomItems.length),this.enableMapExpand&&(t-=36),t-=72,t-=16,t}getMaxTabCount(){const t=this.getAvailableHeight(),e=Math.floor(t/48),i=this.menuItems.length;return 1===i?1:i<this.maxVisibleMenuItems?e>i?i:Math.min(e-2,i):i===this.maxVisibleMenuItems?e<this.maxVisibleMenuItems?e-2:e===this.maxVisibleMenuItems?this.maxVisibleMenuItems-2:Math.min(e,this.maxVisibleMenuItems):e===this.maxVisibleMenuItems?this.maxVisibleMenuItems-2:e>=this.maxVisibleMenuItems?this.maxVisibleMenuItems-1:Math.min(e-2,this.maxVisibleMenuItems)}async toggleMapExpand(t){this.skipAllOverlayAnimations(),this.mapExpand=void 0!==t?t:!this.mapExpand}skipAllOverlayAnimations(){this.about&&this.skipOverlayAnimationFor(this.about),this.settings&&this.skipOverlayAnimationFor(this.settings)}skipOverlayAnimationFor(t){const e="animate__animated";null==t||t.classList.remove(e),setTimeout((()=>{null==t||t.classList.add(e)}),300)}async toggleMenu(t){this.skipAllOverlayAnimations(),this.expand=void 0!==t?t:!this.expand,this.aboutPopover&&(this.aboutPopover.expanded=this.expand),this.expandChange.emit(this.expand)}async toggleSettings(t){var e;this.showAbout?this.skipAllOverlayAnimations():this.skipOverlayAnimationFor(this.about),null===(e=this.about)||void 0===e||e.classList.add("d-none"),this.resetOverlay(),this.showSettings=t,this.settings.show=this.showSettings,this.settings.classList.remove("d-none"),this.overlayContainer.classList.remove("d-none")}async toggleAbout(t){var e;this.showSettings?this.skipAllOverlayAnimations():this.skipOverlayAnimationFor(this.settings),null===(e=this.settings)||void 0===e||e.classList.add("d-none"),this.resetOverlay(),this.showAbout=t,this.about.show=this.showAbout,this.about.classList.remove("d-none"),this.overlayContainer.classList.remove("d-none")}resetOverlay(){this.showSettings=!1,this.showAbout=!1,this.settings&&(this.settings.show=this.showSettings),this.about&&(this.about.show=this.showAbout),this.toggleMenu(!1)}showMoreButton(){const t=this.menuItems.length;return 1!==t&&(t<this.maxVisibleMenuItems?this.visibleMenuItems<t:t>this.maxVisibleMenuItems?this.visibleMenuItems<this.maxVisibleMenuItems:this.visibleMenuItems<=this.maxVisibleMenuItems-2)}getCollapseText(){return this.mapExpand?this.i18nCollapse:this.i18nExpand}getCollapseIcon(){return this.mapExpand?"double-chevron-left":"double-chevron-right"}isMenuItemClicked(t){return t.composedPath().filter((t=>"ix-menu-more-tab"!==t.id)).filter((t=>"IX-MENU-ITEM"===t.tagName)).some((t=>this.tabsContainer.contains(t)))}render(){return(0,s.h)(s.H,{class:{expanded:this.expand,[`mode-${this.mode}`]:!0}},(0,s.h)("div",{class:{menu:!0,expanded:this.expand},onClick:()=>{this.resetActiveTab()}},(0,s.h)("ix-burger-menu",{onClick:async()=>this.toggleMenu(),expanded:this.expand,class:{"burger-menu":!0}}),(0,s.h)("div",{id:"avatar-tab-placeholder"}),(0,s.h)("div",{id:"menu-tabs",style:{display:"contents"},onClick:t=>{this.isMenuItemClicked(t)&&this.resetOverlay()}},(0,s.h)("div",{class:"tabs-top"}),(0,s.h)("slot",null),(0,s.h)("div",{class:"active-more-tab"},this.activeTab?(0,s.h)("ix-menu-item",{class:"internal-tab",active:!0,tabIcon:this.activeTab.tabIcon},this.activeTab.innerText):null),(0,s.h)("ix-menu-item",{id:"ix-menu-more-tab",tabIcon:"more-menu",class:{"internal-tab":!0},style:{display:this.showMoreButton()?"block":"none"},title:"Show more",notifications:this.countMoreNotifications},this.i18nMore,(0,s.h)("ix-dropdown",{trigger:"ix-menu-more-tab",positioningStrategy:"fixed",placement:"right-start"},this.menuItems.filter(((t,e)=>!this.showTab(e)&&!this.isMenuItemActive(t)&&this.isVisible(t))).map((t=>(0,s.h)("ix-menu-item",{tabIcon:t.tabIcon,active:t.active,class:"internal-tab appended",onClick:()=>{this.resetOverlay(),t.dispatchEvent(new CustomEvent("click"))}},t.innerText)))))),(0,s.h)("div",{class:"bottom-tab-divider"}),this.enableSettings&&!this.isSettingsEmpty?(0,s.h)("ix-menu-item",{id:"settings",class:{"internal-tab":!0,"bottom-tab":!0,active:this.showSettings},tabIcon:"cogwheel",onClick:async()=>this.toggleSettings(!this.showSettings)},this.i18nSettings):null,(0,s.h)("slot",{name:"bottom"}),(0,s.h)("div",{id:"popover-area"}),this.about?(0,s.h)("ix-menu-item",{id:"aboutAndLegal",class:{"internal-tab":!0,"bottom-tab":!0,active:this.showAbout},tabIcon:"info",onClick:async()=>this.toggleAbout(!this.showAbout)},this.i18nLegal):null,this.enableToggleTheme?(0,s.h)("ix-menu-item",{id:"toggleTheme",onClick:()=>r.t.toggleMode(),class:"internal-tab bottom-tab",tabIcon:"bulb"},this.i18nToggleTheme):null,this.enableMapExpand?(0,s.h)("ix-menu-item",{id:"menu-collapse",onClick:()=>this.mapExpandChange.emit(this.mapExpand),class:"internal-tab bottom-tab",tabIcon:`${this.getCollapseIcon()}`},this.getCollapseText()):null),(0,s.h)("div",{class:{"menu-overlay":!0,expanded:this.expand,"d-block":this.showAbout||this.showSettings},style:{opacity:this.showAbout||this.showSettings?"1":"0"}}),(0,s.h)("div",{class:"menu-overlay-invisible"}))}get hostElement(){return(0,s.g)(this)}};m.style="ix-menu{display:flex;flex-direction:row;position:absolute;height:100%;min-height:22.75rem;z-index:var(--theme-z-index-sticky);width:auto}ix-menu .menu{display:flex;flex-direction:column;position:relative;width:4rem;height:100%;-webkit-padding-after:1rem;padding-block-end:1rem;overflow:hidden;background-color:var(--theme-nav--background);transition:width var(--animate-duration)}ix-menu .menu.expanded{box-shadow:var(--theme-navigation--box-shadow)}ix-menu .menu .burger-menu{margin:0.75rem 0 1rem 0.75rem}ix-menu .menu-overlay{display:block;position:absolute;width:calc(100vw - 4rem);height:100%;left:4rem;z-index:-1;-webkit-backdrop-filter:blur(1rem);backdrop-filter:blur(1rem);background-color:var(--theme-sidebar-overlay-blur);transition:all 300ms ease-out}ix-menu .menu-overlay-invisible{display:none}ix-menu .menu.expanded{width:16rem}ix-menu .menu-overlay.expanded{width:calc(100vw - 16rem);left:16rem}ix-menu #avatar-tab-placeholder{max-height:3rem}ix-menu .avatar{margin-bottom:2rem}ix-menu #cui-imprint .cui-imprint-product-name{margin-bottom:1rem}ix-menu #cui-imprint .cui-imprint-product-description{margin-bottom:2rem}ix-menu #cui-imprint .cui-imprint-link-container{display:flex;align-items:center}ix-menu .bottom-tab-divider{margin-top:auto}ix-menu.mode-mobile .menu:not(.expanded){width:0}ix-menu.mode-mobile .menu{padding-top:2rem}ix-menu.mode-mobile .menu .burger-menu{display:none}ix-menu.mode-mobile .menu-overlay{left:0px;width:100vw}a[href]:has(>ix-menu-item){text-decoration:none}";const l=class{constructor(t){(0,s.r)(this,t),this.close=(0,s.c)(this,"close",7),this.activeTabLabel=void 0,this.label="About & legal information",this.show=!1,this.labels=[]}get aboutItems(){return Array.from(this.el.querySelectorAll("ix-menu-about-item"))}setTab(t){this.activeTabLabel=t,this.aboutItems.forEach((t=>{t.style.display="none",t.label===this.activeTabLabel&&(t.style.display="block")}))}componentWillLoad(){this.aboutItems.length&&this.setTab(this.activeTabLabel||this.aboutItems[0].label)}componentDidLoad(){(0,s.f)(this.el)}componentWillRender(){this.updateLabels()}updateLabels(){this.labels=this.aboutItems.map((t=>t.label))}watchActiveTabLabel(t){setTimeout((()=>this.setTab(t)))}getSelectedTabIndex(t){const e=this.aboutItems.find((e=>e.label===t));return this.aboutItems.indexOf(e)}getTabItems(){return this.aboutItems.map((t=>{let{label:e}=t;return(0,s.h)("ix-tab-item",{class:{active:e===this.activeTabLabel},onClick:()=>this.setTab(e)},e)}))}render(){return(0,s.h)(s.H,{class:{animate__animated:!0,animate__fadeInLeft:this.show,animate__fadeOutLeft:!this.show}},(0,s.h)("div",{class:"about-header"},(0,s.h)("h2",{class:"text-h2"},this.label),(0,s.h)("ix-icon-button",{ghost:!0,size:"24",icon:"close",onClick:t=>this.close.emit(t)})),(0,s.h)("ix-tabs",{selected:this.getSelectedTabIndex(this.activeTabLabel),class:"about-tabs"},this.getTabItems()),(0,s.h)("div",{class:"about-items"},(0,s.h)("slot",null)))}get el(){return(0,s.g)(this)}static get watchers(){return{activeTabLabel:["watchActiveTabLabel"]}}};l.style=".text-xs.sc-ix-menu-about{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.625rem;font-weight:400;line-height:1.4em;color:var(--theme-color-std-text)}.text-s.sc-ix-menu-about{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.75rem;font-weight:400;line-height:1.5em;color:var(--theme-color-std-text)}.text-caption.sc-ix-menu-about{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.75rem;font-weight:700;line-height:1.5em;color:var(--theme-color-std-text)}.text-caption-single.sc-ix-menu-about{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.75rem;font-weight:700;line-height:1em;color:var(--theme-color-std-text)}.text-default.sc-ix-menu-about{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:400;line-height:1.429em;color:var(--theme-color-std-text)}.text-default-single.sc-ix-menu-about{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:400;line-height:1.143em;color:var(--theme-color-std-text)}.text-default-title.sc-ix-menu-about{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:700;line-height:1.429em;color:var(--theme-color-std-text)}.text-default-title-single.sc-ix-menu-about{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:700;line-height:1.143em;color:var(--theme-color-std-text)}.text-l.sc-ix-menu-about{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:400;line-height:1.5em;color:var(--theme-color-std-text)}.text-l-single.sc-ix-menu-about{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:400;line-height:1.25em;color:var(--theme-color-std-text)}.text-l-title.sc-ix-menu-about{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:700;line-height:1.5em;color:var(--theme-color-std-text)}.text-l-title-single.sc-ix-menu-about{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:700;line-height:1.25em;color:var(--theme-color-std-text)}.text-h2.sc-ix-menu-about{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1.375rem;font-weight:700;line-height:1.455em;color:var(--theme-color-std-text)}.text-xl.sc-ix-menu-about{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1.375rem;font-weight:400;line-height:1.091em;color:var(--theme-color-std-text)}a.sc-ix-menu-about{color:var(--theme-color-primary)}.sc-ix-menu-about-h{display:block;background-color:var(--theme-nav-overlay--background);padding:0.75rem 1rem 1rem 2rem;flex-grow:1;position:absolute;width:100%;height:100%}.sc-ix-menu-about-h .about-header.sc-ix-menu-about{display:flex;justify-content:space-between;flex-direction:row;align-items:center;height:2rem;margin-bottom:0.5rem}.sc-ix-menu-about-h .about-header.sc-ix-menu-about h2.sc-ix-menu-about{color:var(--theme-nav-overlay-header--color);margin-bottom:0}.sc-ix-menu-about-h .about-tabs.sc-ix-menu-about{margin-bottom:1.5rem}.sc-ix-menu-about-h ix-menu-about-item.sc-ix-menu-about{display:none}";const h=class{constructor(t){(0,s.r)(this,t),this.label=void 0}render(){return(0,s.h)(s.H,null,(0,s.h)("slot",null))}};h.style=".sc-ix-menu-about-item-h{display:block}";const c=class{constructor(t){(0,s.r)(this,t),this.showMore=(0,s.c)(this,"showMore",7),this.closePopover=(0,s.c)(this,"closePopover",7),this.show=!1,this.label=void 0,this.i18nShowMore="Show more",this.aboutItemLabel=void 0,this.offsetBottom=0,this.expanded=!1}render(){return(0,s.h)(s.H,{class:{expanded:this.expanded,show:!this.show}},(0,s.h)("div",{class:"banner-container"},(0,s.h)("ix-icon",{color:"color-inv-contrast-text",name:"shout",size:"32"}),(0,s.h)("svg",{viewBox:"0 0 48 56",xmlns:"http://www.w3.org/2000/svg"},(0,s.h)("polygon",{points:"0 0 48 0 48 56 24 48 0 56"}))),(0,s.h)("div",{class:"cui-popover-news-header"},(0,s.h)("span",{class:"text-l-title"},this.label)),(0,s.h)("ix-icon-button",{size:"24",icon:"close-small",ghost:!0,onClick:()=>{this.show=!1,this.closePopover.emit()}}),(0,s.h)("slot",null),this.aboutItemLabel?(0,s.h)("div",{class:"cui-popover-news-footer"},(0,s.h)("button",{class:"btn btn-primary",onClick:t=>{this.show=!1,this.showMore.emit(t)}},this.i18nShowMore)):null,(0,s.h)("div",{id:"arrow"}))}};c.style=".sc-ix-menu-about-news-h{--margin:0.5rem;display:block;position:fixed;width:20rem;height:auto;background-color:var(--theme-color-1);border:var(--theme-weak-bdr-1);border-radius:0.25rem;padding:1rem;left:4rem;z-index:10000;transition:left var(--animate-duration);margin-left:var(--margin) !important;box-shadow:var(--theme-box-shadow-level-4)}.expanded.sc-ix-menu-about-news-h{left:calc(4rem + 12rem)}.show.sc-ix-menu-about-news-h{display:none}.sc-ix-menu-about-news-h .banner-container.sc-ix-menu-about-news{position:absolute;top:0.0625rem;left:1rem}.sc-ix-menu-about-news-h .banner-container.sc-ix-menu-about-news svg.sc-ix-menu-about-news{position:absolute;height:3.625rem;width:3rem}.sc-ix-menu-about-news-h .banner-container.sc-ix-menu-about-news svg.sc-ix-menu-about-news polygon.sc-ix-menu-about-news{fill:var(--theme-color-primary)}.sc-ix-menu-about-news-h .banner-container.sc-ix-menu-about-news ix-icon.sc-ix-menu-about-news{margin:0.5rem;position:absolute;z-index:1}.sc-ix-menu-about-news-h .cui-popover-news-header.sc-ix-menu-about-news{margin-bottom:2rem;margin-left:4rem;margin-top:-0.25rem}.sc-ix-menu-about-news-h .popover-body.sc-ix-menu-about-news{color:var(--theme-color-std-text)}.sc-ix-menu-about-news-h .cui-popover-news-footer.sc-ix-menu-about-news{display:flex;justify-content:flex-end;margin-top:1rem}.sc-ix-menu-about-news-h ix-icon-button.sc-ix-menu-about-news{top:0.5rem;right:0.5rem;position:absolute}.sc-ix-menu-about-news-h #arrow.sc-ix-menu-about-news{position:absolute;width:0.5rem;height:0.5rem;background-color:var(--theme-color-1);border-left:var(--theme-weak-bdr-1);border-bottom:var(--theme-weak-bdr-1);transform:translateX(calc(var(--margin) * -1 - 0.8rem)) rotateZ(45deg)}";function u(t){const{initials:e}=t;return e?(0,s.h)("div",{class:"avatar-initials"},e):(0,s.h)("svg",{class:"avatar-image",xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 32 32"},(0,s.h)("g",{fill:"none","fill-rule":"evenodd"},(0,s.h)("path",{id:"avatar-path-background",d:"M16 0C7.163 0 0 7.163 0 16s7.163 16 16 16 16-7.163\n          16-16c0-4.243-1.686-8.313-4.686-11.314C24.314 1.686 20.244 0 16 0z"}),(0,s.h)("path",{id:"avatar-path-person",d:"M17.897 17.91c3.8-.018 7.358 1.875 9.485 5.046-2.417 3.999-6.734 6.434-11.382\n        6.42-4.648.014-8.965-2.421-11.382-6.42 2.127-3.171 5.685-5.064\n        9.485-5.045h3.794zM15.821 2.129c3.682 0 6.667 2.984 6.667 6.666 0 3.682-2.985\n        6.667-6.667 6.667s-6.667-2.985-6.667-6.667 2.985-6.666 6.667-6.666z"})))}const d=class{constructor(t){(0,s.r)(this,t),this.logoutClick=(0,s.c)(this,"logoutClick",7),this.avatarElementId="ix-menu-avatar-id",this.top=void 0,this.bottom=void 0,this.image=void 0,this.initials=void 0,this.i18nLogout="Logout"}render(){return(0,s.h)(s.H,null,(0,s.h)("li",{class:"nav-item top-item avatar no-hover",title:this.top,id:this.avatarElementId},this.image?(0,s.h)("img",{src:this.image,class:"avatar-image"}):(0,s.h)(u,{initials:this.initials}),(0,s.h)("div",{class:"avatar-name"},(0,s.h)("span",{class:"text-default-single",title:this.top},this.top),(0,s.h)("span",{class:"text-default-single",title:this.bottom},this.bottom))),(0,s.h)("ix-dropdown",{trigger:this.avatarElementId,placement:"right-start",offset:{mainAxis:12}},(0,s.h)("slot",null),(0,s.h)("ix-menu-avatar-item",{label:this.i18nLogout,icon:"log-out",onClick:t=>{this.logoutClick.emit(t)}})))}get hostElement(){return(0,s.g)(this)}};d.style=".sc-ix-menu-avatar-h{display:block;position:relative;margin-bottom:0.5rem}.sc-ix-menu-avatar-h .avatar.sc-ix-menu-avatar{display:flex;align-items:center;height:2.5rem;max-height:2.5rem;padding-left:0.25rem;margin-left:0.75rem;margin-right:0.75rem;transition:0.15s;border-radius:1.25rem}.sc-ix-menu-avatar-h .avatar.sc-ix-menu-avatar>.avatar-image.sc-ix-menu-avatar{height:2rem;width:2rem;min-height:2rem;min-width:2rem;border-radius:100px}.sc-ix-menu-avatar-h .avatar.sc-ix-menu-avatar>.avatar-initials.sc-ix-menu-avatar{display:flex;align-items:center;justify-content:center;height:2rem;width:2rem;min-height:2rem;min-width:2rem;border-radius:100px;background-color:var(--theme-color-component-3)}.sc-ix-menu-avatar-h .avatar.sc-ix-menu-avatar #avatar-path-background.sc-ix-menu-avatar{fill:var(--theme-avatar--background)}.sc-ix-menu-avatar-h .avatar.sc-ix-menu-avatar #avatar-path-person.sc-ix-menu-avatar{fill:var(--theme-color-4)}.sc-ix-menu-avatar-h .avatar.sc-ix-menu-avatar .avatar-name.sc-ix-menu-avatar{display:flex;flex-direction:column;overflow:hidden;white-space:nowrap;margin-left:1rem;line-height:1.14}.sc-ix-menu-avatar-h .avatar.sc-ix-menu-avatar .avatar-name.sc-ix-menu-avatar .text-default-single.sc-ix-menu-avatar{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.sc-ix-menu-avatar-h .avatar.sc-ix-menu-avatar:not(.disabled):not(:disabled){cursor:pointer}.sc-ix-menu-avatar-h .avatar.sc-ix-menu-avatar:not(.disabled):not(:disabled):hover{background-color:var(--theme-avatar-btn--background--hover);color:var(--theme-avatar-btn--color--hover)}.sc-ix-menu-avatar-h .avatar.sc-ix-menu-avatar:not(.disabled):not(:disabled){cursor:pointer}.sc-ix-menu-avatar-h .avatar.sc-ix-menu-avatar:not(.disabled):not(:disabled):active{background-color:var(--theme-avatar-btn--background--active);color:var(--theme-avatar-btn--color--active)}";const b=class{constructor(t){(0,s.r)(this,t),this.itemClick=(0,s.c)(this,"itemClick",7),this.icon=void 0,this.label=void 0}render(){return(0,s.h)("ix-dropdown-item",{icon:this.icon,label:this.label,onClick:t=>this.itemClick.emit(t)})}get hostElement(){return(0,s.g)(this)}};b.style=".sc-ix-menu-avatar-item-h{display:block}";const g=class{constructor(t){(0,s.r)(this,t),this.home=!1,this.bottom=!1,this.tabIcon="document",this.notifications=void 0,this.active=void 0,this.disabled=void 0,this.title=void 0}get tabLabel(){return this.hostElement.querySelector(".tab-text")}componentDidRender(){const t=this.tabLabel.innerHTML.replace("&amp;","&");this.title!==t&&(this.title=t)}render(){return(0,s.h)(s.H,{class:{disabled:this.disabled,"home-tab":this.home,"bottom-tab":this.bottom,active:this.active}},(0,s.h)("li",{class:"tab",title:this.title},(0,s.h)("i",{class:`glyph glyph-${this.tabIcon}`},(0,s.h)("div",{class:"notification"},this.notifications?(0,s.h)("div",{class:"pill"},this.notifications):null)),(0,s.h)("span",{class:"tab-text text-default"},(0,s.h)("slot",null))))}get hostElement(){return(0,s.g)(this)}};g.style='.sc-ix-menu-item-h{position:relative;display:block}.sc-ix-menu-item-h .tab.sc-ix-menu-item{display:flex;position:relative;align-items:center;height:3rem;z-index:500;padding-left:1.25rem}.sc-ix-menu-item-h .tab.sc-ix-menu-item:not(.selected){cursor:pointer}.sc-ix-menu-item-h .tab.sc-ix-menu-item:not(.selected):not(.disabled):not(:disabled).hover,.sc-ix-menu-item-h .tab.sc-ix-menu-item:not(.selected):not(.disabled):not(:disabled):hover{background-color:var(--theme-ghost--background--hover)}.sc-ix-menu-item-h .tab.sc-ix-menu-item:not(.selected):not(.disabled):not(:disabled).active,.sc-ix-menu-item-h .tab.sc-ix-menu-item:not(.selected):not(.disabled):not(:disabled):active{background-color:var(--theme-ghost--background--active)}.sc-ix-menu-item-h i.glyph.sc-ix-menu-item{color:var(--theme-nav-item-primary-icon--color);position:relative}.sc-ix-menu-item-h .tab.sc-ix-menu-item:focus-visible{outline:none}.sc-ix-menu-item-h:focus-visible{outline:none}.sc-ix-menu-item-h .tab.sc-ix-menu-item:not(:last-child){margin-bottom:0.5rem}.sc-ix-menu-item-h .notification.sc-ix-menu-item{display:inline-flex;position:absolute;top:-0.5rem;right:-50%}.sc-ix-menu-item-h .notification.sc-ix-menu-item .pill.sc-ix-menu-item{display:inline-flex;justify-content:center;align-items:center;height:1rem;min-width:1rem;position:relative;border-radius:6.25rem;background-color:var(--theme-color-primary);border-radius:6.25rem;font-size:0.75rem;font-weight:bold;line-height:1;font-family:Siemens Sans, Arial, sans-serif;color:var(--theme-color-primary--contrast);padding:0.25rem}.sc-ix-menu-item-h .tab-text.sc-ix-menu-item{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--theme-nav-item-primary--color);margin:0 1.25rem;-webkit-user-select:none;-moz-user-select:none;user-select:none}.active.sc-ix-menu-item-h .tab.sc-ix-menu-item,.selected.sc-ix-menu-item-h .tab.sc-ix-menu-item{background-color:var(--theme-nav-item-primary--background--selected)}.active.sc-ix-menu-item-h .tab.sc-ix-menu-item::before,.selected.sc-ix-menu-item-h .tab.sc-ix-menu-item::before{content:"";background-color:var(--theme-nav-item-primary--border-color--selected);height:3rem;width:0.25rem;left:0;position:absolute}.active.sc-ix-menu-item-h .tab.sc-ix-menu-item>.glyph.sc-ix-menu-item,.selected.sc-ix-menu-item-h .tab.sc-ix-menu-item>.glyph.sc-ix-menu-item{color:var(--theme-nav-item-primary-icon--color--selected)}.disabled.sc-ix-menu-item-h{color:var(--theme-color-weak-text);pointer-events:none;cursor:default}.disabled.sc-ix-menu-item-h .tab.sc-ix-menu-item>.glyph.sc-ix-menu-item{color:var(--theme-color-weak-text)}.disabled.sc-ix-menu-item-h .tab-text.sc-ix-menu-item{color:var(--theme-color-weak-text)}.home-tab.sc-ix-menu-item-h,[slot=home].sc-ix-menu-item-h{margin-bottom:1.5rem}.bottom-tab.sc-ix-menu-item-h,[slot=bottom].sc-ix-menu-item-h{height:2.25rem}.bottom-tab.sc-ix-menu-item-h .tab.sc-ix-menu-item,[slot=bottom].sc-ix-menu-item-h .tab.sc-ix-menu-item{height:2.25rem}.bottom-tab.sc-ix-menu-item-h .tab.sc-ix-menu-item::before,[slot=bottom].sc-ix-menu-item-h .tab.sc-ix-menu-item::before{height:2.25rem}.bottom-tab.active.sc-ix-menu-item-h .tab.sc-ix-menu-item,.bottom-tab.selected.sc-ix-menu-item-h .tab.sc-ix-menu-item,[slot=bottom].active.sc-ix-menu-item-h .tab.sc-ix-menu-item,[slot=bottom].selected.sc-ix-menu-item-h .tab.sc-ix-menu-item{background-color:var(--theme-color-1)}';const x=class{constructor(t){(0,s.r)(this,t),this.close=(0,s.c)(this,"close",7),this.activeTabLabel=void 0,this.label="Settings",this.show=!1}get settingsItems(){return Array.from(this.el.querySelectorAll("ix-menu-settings-item"))}setTab(t){this.activeTabLabel=t,this.settingsItems.forEach((t=>{t.style.display="none",t.label===this.activeTabLabel&&(t.style.display="block")}))}componentWillLoad(){this.settingsItems.length&&this.setTab(this.activeTabLabel||this.settingsItems[0].label)}componentDidLoad(){(0,s.f)(this.el)}watchActiveTabLabel(t){this.setTab(t)}getTabItems(){return this.settingsItems.map((t=>{let{label:e}=t;return(0,s.h)("ix-tab-item",{class:{active:e===this.activeTabLabel},onClick:()=>this.setTab(e)},e)}))}render(){return(0,s.h)(s.H,{class:{animate__animated:!0,animate__fadeInLeft:this.show,animate__fadeOutLeft:!this.show}},(0,s.h)("div",{class:"settings-header"},(0,s.h)("h2",{class:"text-h2"},this.label),(0,s.h)("ix-icon-button",{ghost:!0,size:"24",icon:"close",onClick:t=>this.close.emit(t)})),(0,s.h)("ix-tabs",null,this.getTabItems()),(0,s.h)("slot",null))}get el(){return(0,s.g)(this)}static get watchers(){return{activeTabLabel:["watchActiveTabLabel"]}}};x.style=".text-xs.sc-ix-menu-settings{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.625rem;font-weight:400;line-height:1.4em;color:var(--theme-color-std-text)}.text-s.sc-ix-menu-settings{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.75rem;font-weight:400;line-height:1.5em;color:var(--theme-color-std-text)}.text-caption.sc-ix-menu-settings{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.75rem;font-weight:700;line-height:1.5em;color:var(--theme-color-std-text)}.text-caption-single.sc-ix-menu-settings{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.75rem;font-weight:700;line-height:1em;color:var(--theme-color-std-text)}.text-default.sc-ix-menu-settings{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:400;line-height:1.429em;color:var(--theme-color-std-text)}.text-default-single.sc-ix-menu-settings{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:400;line-height:1.143em;color:var(--theme-color-std-text)}.text-default-title.sc-ix-menu-settings{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:700;line-height:1.429em;color:var(--theme-color-std-text)}.text-default-title-single.sc-ix-menu-settings{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:700;line-height:1.143em;color:var(--theme-color-std-text)}.text-l.sc-ix-menu-settings{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:400;line-height:1.5em;color:var(--theme-color-std-text)}.text-l-single.sc-ix-menu-settings{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:400;line-height:1.25em;color:var(--theme-color-std-text)}.text-l-title.sc-ix-menu-settings{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:700;line-height:1.5em;color:var(--theme-color-std-text)}.text-l-title-single.sc-ix-menu-settings{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:700;line-height:1.25em;color:var(--theme-color-std-text)}.text-h2.sc-ix-menu-settings{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1.375rem;font-weight:700;line-height:1.455em;color:var(--theme-color-std-text)}.text-xl.sc-ix-menu-settings{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1.375rem;font-weight:400;line-height:1.091em;color:var(--theme-color-std-text)}a.sc-ix-menu-settings{color:var(--theme-color-primary)}.sc-ix-menu-settings-h{display:block;background-color:var(--theme-nav-overlay--background);padding:0.75rem 1rem 1rem 2rem;flex-grow:1;position:absolute;width:100%;height:100%}.sc-ix-menu-settings-h .settings-header.sc-ix-menu-settings{display:flex;justify-content:space-between;flex-direction:row;align-items:center;height:2rem;margin-bottom:0.5rem}.sc-ix-menu-settings-h .settings-header.sc-ix-menu-settings h2.sc-ix-menu-settings{color:var(--theme-nav-overlay-header--color);margin-bottom:0}.sc-ix-menu-settings-h .settings-tabs.sc-ix-menu-settings{margin-bottom:1.5rem}";const v=class{constructor(t){(0,s.r)(this,t),this.label=void 0}render(){return(0,s.h)(s.H,null,(0,s.h)("slot",null))}};v.style=".sc-ix-menu-settings-item-h{display:block}"},59350:(t,e,i)=>{i.d(e,{a:()=>s,c:()=>n});const s=t=>`${t/16}rem`,n=t=>{if(isNaN(t)||null==t)return"";let e="";return[{unit:"q",value:Math.pow(10,15)},{unit:"t",value:Math.pow(10,12)},{unit:"B",value:Math.pow(10,9)},{unit:"M",value:Math.pow(10,6)},{unit:"K",value:Math.pow(10,3)}].some((i=>{let s=Math.abs(t);return s>=i.value&&(s/=i.value,t=Math.round(10*s)/10,e=i.unit,!0)})),t+e}},45932:(t,e,i)=>{i.d(e,{s:()=>l});var s=i(42951);const n=t=>{const e=((t,e)=>{const i=t=>{e(t)},s=window.matchMedia(t);return s.addEventListener("change",i),{matchMedia:s,dispose:()=>{s.removeEventListener("change",i)}}})("only screen and (max-width: 767px)",(e=>{let{matches:i}=e;t(i?"mobile":"desktop")}));return t(e.matchMedia.matches?"mobile":"desktop"),{dispose:e.dispose,matchMedia:e.matchMedia}};var o,a,r=function(t,e,i,s){if("a"===i&&!s)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof e?t!==e||!s:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?s:"a"===i?s.call(t):s?s.value:e.get(t)},m=function(t,e,i,s,n){if("m"===s)throw new TypeError("Private method is not writable");if("a"===s&&!n)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof e?t!==e||!n:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===s?n.call(t,i):n?n.value=i:e.set(t,i),i};o=new WeakMap,a=new WeakMap;const l=new class{constructor(){o.set(this,new s.T),a.set(this,"desktop"),n((t=>{r(this,o,"f").emit(t),m(this,a,t,"f")}))}get mode(){return r(this,a,"f")}get onChange(){return r(this,o,"f")}}}}]);