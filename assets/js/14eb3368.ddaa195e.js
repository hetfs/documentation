"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[6969],{111:(e,t,n)=>{n.d(t,{W:()=>c});var s=n(274),r=n(5262);const i=["zero","one","two","few","many","other"];function a(e){return i.filter((t=>e.includes(t)))}const l={locale:"en",pluralForms:a(["one","other"]),select:e=>1===e?"one":"other"};function o(){const{i18n:{currentLocale:e}}=(0,r.A)();return(0,s.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:a(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),l}}),[e])}function c(){const e=o();return{selectMessage:(t,n)=>function(e,t,n){const s=e.split("|");if(1===s.length)return s[0];s.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${s.length}: ${e}`);const r=n.select(t),i=n.pluralForms.indexOf(r);return s[Math.min(i,s.length-1)]}(n,t,e)}}},2716:(e,t,n)=>{n.d(t,{A:()=>o});n(274);var s=n(4780),r=n(1835),i=n(1717),a=n(667),l=n(1050);function o(e){let{className:t}=e;const n=(0,a.r)();return n.badge?(0,l.jsx)("span",{className:(0,s.A)(t,i.G.docs.docVersionBadge,"badge badge--secondary"),children:(0,l.jsx)(r.A,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label},children:"Version: {versionLabel}"})}):null}},2985:(e,t,n)=>{n.d(t,{A:()=>g});n(274);var s=n(4780),r=n(1717),i=n(6382),a=n(8539),l=n(6378),o=n(1835),c=n(9797),d=n(1050);function u(e){return(0,d.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,d.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})})}const m={breadcrumbHomeIcon:"breadcrumbHomeIcon__tWh"};function h(){const e=(0,c.Ay)("/");return(0,d.jsx)("li",{className:"breadcrumbs__item",children:(0,d.jsx)(l.A,{"aria-label":(0,o.T)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,d.jsx)(u,{className:m.breadcrumbHomeIcon})})})}const b={breadcrumbsContainer:"breadcrumbsContainer_LROs"};function p(e){let{children:t,href:n,isLast:s}=e;const r="breadcrumbs__link";return s?(0,d.jsx)("span",{className:r,itemProp:"name",children:t}):n?(0,d.jsx)(l.A,{className:r,href:n,itemProp:"item",children:(0,d.jsx)("span",{itemProp:"name",children:t})}):(0,d.jsx)("span",{className:r,children:t})}function x(e){let{children:t,active:n,index:r,addMicrodata:i}=e;return(0,d.jsxs)("li",{...i&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},className:(0,s.A)("breadcrumbs__item",{"breadcrumbs__item--active":n}),children:[t,(0,d.jsx)("meta",{itemProp:"position",content:String(r+1)})]})}function g(){const e=(0,i.OF)(),t=(0,a.Dt)();return e?(0,d.jsx)("nav",{className:(0,s.A)(r.G.docs.docBreadcrumbs,b.breadcrumbsContainer),"aria-label":(0,o.T)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,d.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[t&&(0,d.jsx)(h,{}),e.map(((t,n)=>{const s=n===e.length-1,r="category"===t.type&&t.linkUnlisted?void 0:t.href;return(0,d.jsx)(x,{active:s,index:n,addMicrodata:!!r,children:(0,d.jsx)(p,{href:r,isLast:s,children:t.label})},n)}))]})}):null}},3330:(e,t,n)=>{n.d(t,{A:()=>a});n(274);var s=n(1835),r=n(4899),i=n(1050);function a(e){const{previous:t,next:n}=e;return(0,i.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,s.T)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[t&&(0,i.jsx)(r.A,{...t,subLabel:(0,i.jsx)(s.A,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})}),n&&(0,i.jsx)(r.A,{...n,subLabel:(0,i.jsx)(s.A,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0})]})}},4899:(e,t,n)=>{n.d(t,{A:()=>a});n(274);var s=n(4780),r=n(6378),i=n(1050);function a(e){const{permalink:t,title:n,subLabel:a,isNext:l}=e;return(0,i.jsxs)(r.A,{className:(0,s.A)("pagination-nav__link",l?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[a&&(0,i.jsx)("div",{className:"pagination-nav__sublabel",children:a}),(0,i.jsx)("div",{className:"pagination-nav__label",children:n})]})}},6143:(e,t,n)=>{n.d(t,{A:()=>x});n(274);var s=n(4780),r=n(5262),i=n(6378),a=n(1835),l=n(9279),o=n(1717),c=n(6364),d=n(667),u=n(1050);const m={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,u.jsx)(a.A,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:(0,u.jsx)("b",{children:n.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,u.jsx)(a.A,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:(0,u.jsx)("b",{children:n.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function h(e){const t=m[e.versionMetadata.banner];return(0,u.jsx)(t,{...e})}function b(e){let{versionLabel:t,to:n,onClick:s}=e;return(0,u.jsx)(a.A,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:(0,u.jsx)("b",{children:(0,u.jsx)(i.A,{to:n,onClick:s,children:(0,u.jsx)(a.A,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function p(e){let{className:t,versionMetadata:n}=e;const{siteConfig:{title:i}}=(0,r.A)(),{pluginId:a}=(0,l.vT)({failfast:!0}),{savePreferredVersionName:d}=(0,c.g1)(a),{latestDocSuggestion:m,latestVersionSuggestion:p}=(0,l.HW)(a),x=m??(g=p).docs.find((e=>e.id===g.mainDocId));var g;return(0,u.jsxs)("div",{className:(0,s.A)(t,o.G.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,u.jsx)("div",{children:(0,u.jsx)(h,{siteTitle:i,versionMetadata:n})}),(0,u.jsx)("div",{className:"margin-top--md",children:(0,u.jsx)(b,{versionLabel:p.label,to:x.path,onClick:()=>d(p.name)})})]})}function x(e){let{className:t}=e;const n=(0,d.r)();return n.banner?(0,u.jsx)(p,{className:t,versionMetadata:n}):null}},7155:(e,t,n)=>{n.r(t),n.d(t,{default:()=>w});n(274);var s=n(6927),r=n(6382),i=n(9797),a=n(4780),l=n(6378),o=n(111),c=n(9634),d=n(1835),u=n(4961);const m={cardContainer:"cardContainer_jR8k",cardTitle:"cardTitle_Ih8c",cardDescription:"cardDescription_bmWD"};var h=n(1050);function b(e){let{href:t,children:n}=e;return(0,h.jsx)(l.A,{href:t,className:(0,a.A)("card padding--lg",m.cardContainer),children:n})}function p(e){let{href:t,icon:n,title:s,description:r}=e;return(0,h.jsxs)(b,{href:t,children:[(0,h.jsxs)(u.A,{as:"h2",className:(0,a.A)("text--truncate",m.cardTitle),title:s,children:[n," ",s]}),r&&(0,h.jsx)("p",{className:(0,a.A)("text--truncate",m.cardDescription),title:r,children:r})]})}function x(e){let{item:t}=e;const n=(0,r.Nr)(t),s=function(){const{selectMessage:e}=(0,o.W)();return t=>e(t,(0,d.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,h.jsx)(p,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??s(t.items.length)}):null}function g(e){let{item:t}=e;const n=(0,c.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",s=(0,r.cC)(t.docId??void 0);return(0,h.jsx)(p,{href:t.href,icon:n,title:t.label,description:t.description??s?.description})}function v(e){let{item:t}=e;switch(t.type){case"link":return(0,h.jsx)(g,{item:t});case"category":return(0,h.jsx)(x,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function f(e){let{className:t}=e;const n=(0,r.$S)();return(0,h.jsx)(j,{items:n.items,className:t})}function j(e){const{items:t,className:n}=e;if(!t)return(0,h.jsx)(f,{...e});const s=(0,r.d1)(t);return(0,h.jsx)("section",{className:(0,a.A)("row",n),children:s.map(((e,t)=>(0,h.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,h.jsx)(v,{item:e})},t)))})}var A=n(3330),N=n(6143),L=n(2716),T=n(2985);const _={generatedIndexPage:"generatedIndexPage_A1ae",list:"list_EIZe",title:"title_C210"};function k(e){let{categoryGeneratedIndex:t}=e;return(0,h.jsx)(s.be,{title:t.title,description:t.description,keywords:t.keywords,image:(0,i.Ay)(t.image)})}function y(e){let{categoryGeneratedIndex:t}=e;const n=(0,r.$S)();return(0,h.jsxs)("div",{className:_.generatedIndexPage,children:[(0,h.jsx)(N.A,{}),(0,h.jsx)(T.A,{}),(0,h.jsx)(L.A,{}),(0,h.jsxs)("header",{children:[(0,h.jsx)(u.A,{as:"h1",className:_.title,children:t.title}),t.description&&(0,h.jsx)("p",{children:t.description})]}),(0,h.jsx)("article",{className:"margin-top--lg",children:(0,h.jsx)(j,{items:n.items,className:_.list})}),(0,h.jsx)("footer",{className:"margin-top--lg",children:(0,h.jsx)(A.A,{previous:t.navigation.previous,next:t.navigation.next})})]})}function w(e){return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(k,{...e}),(0,h.jsx)(y,{...e})]})}}}]);