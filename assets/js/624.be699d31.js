(self.webpackChunkkosiec_dev=self.webpackChunkkosiec_dev||[]).push([[624],{952:(e,t,n)=>{"use strict";n.d(t,{c:()=>P});var s=n(1504),a=n(7624);function o(e){const{mdxAdmonitionTitle:t,rest:n}=function(e){const t=s.Children.toArray(e),n=t.find((e=>s.isValidElement(e)&&"mdxAdmonitionTitle"===e.type)),o=t.filter((e=>e!==n)),r=n?.props.children;return{mdxAdmonitionTitle:r,rest:o.length>0?(0,a.jsx)(a.Fragment,{children:o}):null}}(e.children),o=e.title??t;return{...e,...o&&{title:o},children:n}}var r=n(5456),i=n(7932),c=n(5808);const l={admonition:"admonition_xJq3",admonitionHeading:"admonitionHeading_Gvgb",admonitionIcon:"admonitionIcon_Rf37",admonitionContent:"admonitionContent_BuS1"};function d(e){let{type:t,className:n,children:s}=e;return(0,a.jsx)("div",{className:(0,r.c)(c.W.common.admonition,c.W.common.admonitionType(t),l.admonition,n),children:s})}function u(e){let{icon:t,title:n}=e;return(0,a.jsxs)("div",{className:l.admonitionHeading,children:[(0,a.jsx)("span",{className:l.admonitionIcon,children:t}),n]})}function m(e){let{children:t}=e;return t?(0,a.jsx)("div",{className:l.admonitionContent,children:t}):null}function h(e){const{type:t,icon:n,title:s,children:o,className:r}=e;return(0,a.jsxs)(d,{type:t,className:r,children:[(0,a.jsx)(u,{title:s,icon:n}),(0,a.jsx)(m,{children:o})]})}function g(e){return(0,a.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})})}const p={icon:(0,a.jsx)(g,{}),title:(0,a.jsx)(i.c,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})};function f(e){return(0,a.jsx)(h,{...p,...e,className:(0,r.c)("alert alert--secondary",e.className),children:e.children})}function x(e){return(0,a.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})})}const j={icon:(0,a.jsx)(x,{}),title:(0,a.jsx)(i.c,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})};function b(e){return(0,a.jsx)(h,{...j,...e,className:(0,r.c)("alert alert--success",e.className),children:e.children})}function v(e){return(0,a.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})})}const N={icon:(0,a.jsx)(v,{}),title:(0,a.jsx)(i.c,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})};function k(e){return(0,a.jsx)(h,{...N,...e,className:(0,r.c)("alert alert--info",e.className),children:e.children})}function y(e){return(0,a.jsx)("svg",{viewBox:"0 0 16 16",...e,children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})})}const B={icon:(0,a.jsx)(y,{}),title:(0,a.jsx)(i.c,{id:"theme.admonition.warning",description:"The default label used for the Warning admonition (:::warning)",children:"warning"})};function C(e){return(0,a.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})})}const w={icon:(0,a.jsx)(C,{}),title:(0,a.jsx)(i.c,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})};const _={icon:(0,a.jsx)(y,{}),title:(0,a.jsx)(i.c,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})};const L={...{note:f,tip:b,info:k,warning:function(e){return(0,a.jsx)(h,{...B,...e,className:(0,r.c)("alert alert--warning",e.className),children:e.children})},danger:function(e){return(0,a.jsx)(h,{...w,...e,className:(0,r.c)("alert alert--danger",e.className),children:e.children})}},...{secondary:e=>(0,a.jsx)(f,{title:"secondary",...e}),important:e=>(0,a.jsx)(k,{title:"important",...e}),success:e=>(0,a.jsx)(b,{title:"success",...e}),caution:function(e){return(0,a.jsx)(h,{..._,...e,className:(0,r.c)("alert alert--warning",e.className),children:e.children})}}};function P(e){const t=o(e),n=(s=t.type,L[s]||(console.warn(`No admonition component found for admonition type "${s}". Using Info as fallback.`),L.info));var s;return(0,a.jsx)(n,{...t})}},8936:(e,t,n)=>{"use strict";n.d(t,{c:()=>b});var s=n(1504),a=n(5456),o=n(8018),r=n(9936),i=n(5800),c=n(7932),l=n(5592),d=n(5253);function u(e){const{pathname:t}=(0,l.IT)();return(0,s.useMemo)((()=>e.filter((e=>function(e,t){return!(e.unlisted&&!(0,d.Sc)(e.permalink,t))}(e,t)))),[e,t])}const m={sidebar:"sidebar_re4s",sidebarItemTitle:"sidebarItemTitle_pO2u",sidebarItemList:"sidebarItemList_Yudw",sidebarItem:"sidebarItem__DBe",sidebarItemLink:"sidebarItemLink_mo7H",sidebarItemLinkActive:"sidebarItemLinkActive_I1ZP"};var h=n(7624);function g(e){let{sidebar:t}=e;const n=u(t.items);return(0,h.jsx)("aside",{className:"col col--3",children:(0,h.jsxs)("nav",{className:(0,a.c)(m.sidebar,"thin-scrollbar"),"aria-label":(0,c.G)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"}),children:[(0,h.jsx)("div",{className:(0,a.c)(m.sidebarItemTitle,"margin-bottom--md"),children:t.title}),(0,h.jsx)("ul",{className:(0,a.c)(m.sidebarItemList,"clean-list"),children:n.map((e=>(0,h.jsx)("li",{className:m.sidebarItem,children:(0,h.jsx)(i.c,{isNavLink:!0,to:e.permalink,className:m.sidebarItemLink,activeClassName:m.sidebarItemLinkActive,children:e.title})},e.permalink)))})]})})}var p=n(8392);function f(e){let{sidebar:t}=e;const n=u(t.items);return(0,h.jsx)("ul",{className:"menu__list",children:n.map((e=>(0,h.jsx)("li",{className:"menu__list-item",children:(0,h.jsx)(i.c,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active",children:e.title})},e.permalink)))})}function x(e){return(0,h.jsx)(p.Mx,{component:f,props:e})}function j(e){let{sidebar:t}=e;const n=(0,r.U)();return t?.items.length?"mobile"===n?(0,h.jsx)(x,{sidebar:t}):(0,h.jsx)(g,{sidebar:t}):null}function b(e){const{sidebar:t,toc:n,children:s,...r}=e,i=t&&t.items.length>0;return(0,h.jsx)(o.c,{...r,children:(0,h.jsx)("div",{className:"container margin-vert--lg",children:(0,h.jsxs)("div",{className:"row",children:[(0,h.jsx)(j,{sidebar:t}),(0,h.jsx)("main",{className:(0,a.c)("col",{"col--7":i,"col--9 col--offset-1":!i}),itemScope:!0,itemType:"https://schema.org/Blog",children:s}),n&&(0,h.jsx)("div",{className:"col col--2",children:n})]})})})}},5904:(e,t,n)=>{"use strict";n.d(t,{c:()=>Se});var s=n(1504),a=n(5456),o=n(6064),r=n(9908),i=n(7624);function c(e){let{children:t,className:n}=e;const{frontMatter:s,assets:a,metadata:{description:c}}=(0,o.g)(),{withBaseUrl:l}=(0,r.E)(),d=a.image??s.image,u=s.keywords??[];return(0,i.jsxs)("article",{className:n,itemProp:"blogPost",itemScope:!0,itemType:"https://schema.org/BlogPosting",children:[c&&(0,i.jsx)("meta",{itemProp:"description",content:c}),d&&(0,i.jsx)("link",{itemProp:"image",href:l(d,{absolute:!0})}),u.length>0&&(0,i.jsx)("meta",{itemProp:"keywords",content:u.join(",")}),t]})}var l=n(5800);const d={title:"title_f1Hy"};function u(e){let{className:t}=e;const{metadata:n,isBlogPostPage:s}=(0,o.g)(),{permalink:r,title:c}=n,u=s?"h1":"h2";return(0,i.jsx)(u,{className:(0,a.c)(d.title,t),itemProp:"headline",children:s?c:(0,i.jsx)(l.c,{itemProp:"url",to:r,children:c})})}var m=n(7932),h=n(5648);const g={container:"container_mt6G"};function p(e){let{readingTime:t}=e;const n=function(){const{selectMessage:e}=(0,h.A)();return t=>{const n=Math.ceil(t);return e(n,(0,m.G)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:n}))}}();return(0,i.jsx)(i.Fragment,{children:n(t)})}function f(e){let{date:t,formattedDate:n}=e;return(0,i.jsx)("time",{dateTime:t,itemProp:"datePublished",children:n})}function x(){return(0,i.jsx)(i.Fragment,{children:" \xb7 "})}function j(e){let{className:t}=e;const{metadata:n}=(0,o.g)(),{date:s,formattedDate:r,readingTime:c}=n;return(0,i.jsxs)("div",{className:(0,a.c)(g.container,"margin-vert--md",t),children:[(0,i.jsx)(f,{date:s,formattedDate:r}),void 0!==c&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(x,{}),(0,i.jsx)(p,{readingTime:c})]})]})}function b(e){return e.href?(0,i.jsx)(l.c,{...e}):(0,i.jsx)(i.Fragment,{children:e.children})}function v(e){let{author:t,className:n}=e;const{name:s,title:o,url:r,imageURL:c,email:l}=t,d=r||l&&`mailto:${l}`||void 0;return(0,i.jsxs)("div",{className:(0,a.c)("avatar margin-bottom--sm",n),children:[c&&(0,i.jsx)(b,{href:d,className:"avatar__photo-link",children:(0,i.jsx)("img",{className:"avatar__photo",src:c,alt:s,itemProp:"image"})}),s&&(0,i.jsxs)("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person",children:[(0,i.jsx)("div",{className:"avatar__name",children:(0,i.jsx)(b,{href:d,itemProp:"url",children:(0,i.jsx)("span",{itemProp:"name",children:s})})}),o&&(0,i.jsx)("small",{className:"avatar__subtitle",itemProp:"description",children:o})]})]})}const N={authorCol:"authorCol_Hf19",imageOnlyAuthorRow:"imageOnlyAuthorRow_pa_O",imageOnlyAuthorCol:"imageOnlyAuthorCol_G86a"};function k(e){let{className:t}=e;const{metadata:{authors:n},assets:s}=(0,o.g)();if(0===n.length)return null;const r=n.every((e=>{let{name:t}=e;return!t}));return(0,i.jsx)("div",{className:(0,a.c)("margin-top--md margin-bottom--sm",r?N.imageOnlyAuthorRow:"row",t),children:n.map(((e,t)=>(0,i.jsx)("div",{className:(0,a.c)(!r&&"col col--6",r?N.imageOnlyAuthorCol:N.authorCol),children:(0,i.jsx)(v,{author:{...e,imageURL:s.authorsImageUrls[t]??e.imageURL}})},t)))})}function y(){return(0,i.jsxs)("header",{children:[(0,i.jsx)(u,{}),(0,i.jsx)(j,{}),(0,i.jsx)(k,{})]})}var B=n(3989),C=n(4552),w=n(8300),_=n(9788),L=n(768),P=n(3912);function T(){const{prism:e}=(0,P.y)(),{colorMode:t}=(0,L.U)(),n=e.theme,s=e.darkTheme||n;return"dark"===t?s:n}var E=n(5808),I=n(6504),A=n.n(I);const M=/title=(?<quote>["'])(?<title>.*?)\1/,R=/\{(?<range>[\d,-]+)\}/,S={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},z={...S,lua:{start:"--",end:""},wasm:{start:"\\;\\;",end:""},tex:{start:"%",end:""},vb:{start:"['\u2018\u2019]",end:""},vbnet:{start:"(?:_\\s*)?['\u2018\u2019]",end:""},rem:{start:"[Rr][Ee][Mm]\\b",end:""},f90:{start:"!",end:""},ml:{start:"\\(\\*",end:"\\*\\)"},cobol:{start:"\\*>",end:""}},H=Object.keys(S);function F(e,t){const n=e.map((e=>{const{start:n,end:s}=z[e];return`(?:${n}\\s*(${t.flatMap((e=>[e.line,e.block?.start,e.block?.end].filter(Boolean))).join("|")})\\s*${s})`})).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)}function $(e,t){let n=e.replace(/\n$/,"");const{language:s,magicComments:a,metastring:o}=t;if(o&&R.test(o)){const e=o.match(R).groups.range;if(0===a.length)throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${o}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);const t=a[0].className,s=A()(e).filter((e=>e>0)).map((e=>[e-1,[t]]));return{lineClassNames:Object.fromEntries(s),code:n}}if(void 0===s)return{lineClassNames:{},code:n};const r=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return F(["js","jsBlock"],t);case"jsx":case"tsx":return F(["js","jsBlock","jsx"],t);case"html":return F(["js","jsBlock","html"],t);case"python":case"py":case"bash":return F(["bash"],t);case"markdown":case"md":return F(["html","jsx","bash"],t);case"tex":case"latex":case"matlab":return F(["tex"],t);case"lua":case"haskell":case"sql":return F(["lua"],t);case"wasm":return F(["wasm"],t);case"vb":case"vba":case"visual-basic":return F(["vb","rem"],t);case"vbnet":return F(["vbnet","rem"],t);case"batch":return F(["rem"],t);case"basic":return F(["rem","f90"],t);case"fsharp":return F(["js","ml"],t);case"ocaml":case"sml":return F(["ml"],t);case"fortran":return F(["f90"],t);case"cobol":return F(["cobol"],t);default:return F(H,t)}}(s,a),i=n.split("\n"),c=Object.fromEntries(a.map((e=>[e.className,{start:0,range:""}]))),l=Object.fromEntries(a.filter((e=>e.line)).map((e=>{let{className:t,line:n}=e;return[n,t]}))),d=Object.fromEntries(a.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.start,t]}))),u=Object.fromEntries(a.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.end,t]})));for(let h=0;h<i.length;){const e=i[h].match(r);if(!e){h+=1;continue}const t=e.slice(1).find((e=>void 0!==e));l[t]?c[l[t]].range+=`${h},`:d[t]?c[d[t]].start=h:u[t]&&(c[u[t]].range+=`${c[u[t]].start}-${h-1},`),i.splice(h,1)}n=i.join("\n");const m={};return Object.entries(c).forEach((e=>{let[t,{range:n}]=e;A()(n).forEach((e=>{m[e]??=[],m[e].push(t)}))})),{lineClassNames:m,code:n}}const W={codeBlockContainer:"codeBlockContainer_Ckt0"};function O(e){let{as:t,...n}=e;const s=function(e){const t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((e=>{let[s,a]=e;const o=t[s];o&&"string"==typeof a&&(n[o]=a)})),n}(T());return(0,i.jsx)(t,{...n,style:s,className:(0,a.c)(n.className,W.codeBlockContainer,E.W.common.codeBlock)})}const V={codeBlockContent:"codeBlockContent_biex",codeBlockTitle:"codeBlockTitle_Ktv7",codeBlock:"codeBlock_bY9V",codeBlockStandalone:"codeBlockStandalone_MEMb",codeBlockLines:"codeBlockLines_e6Vv",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_o6Pm",buttonGroup:"buttonGroup__atx"};function D(e){let{children:t,className:n}=e;return(0,i.jsx)(O,{as:"pre",tabIndex:0,className:(0,a.c)(V.codeBlockStandalone,"thin-scrollbar",n),children:(0,i.jsx)("code",{className:V.codeBlockLines,children:t})})}var U=n(1352);const G={attributes:!0,characterData:!0,childList:!0,subtree:!0};function q(e,t){const[n,a]=(0,s.useState)(),o=(0,s.useCallback)((()=>{a(e.current?.closest("[role=tabpanel][hidden]"))}),[e,a]);(0,s.useEffect)((()=>{o()}),[o]),function(e,t,n){void 0===n&&(n=G);const a=(0,U.yA)(t),o=(0,U.Mh)(n);(0,s.useEffect)((()=>{const t=new MutationObserver(a);return e&&t.observe(e,o),()=>t.disconnect()}),[e,a,o])}(n,(e=>{e.forEach((e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),o())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}var Z=n(5720);const Y={codeLine:"codeLine_lJS_",codeLineNumber:"codeLineNumber_Tfdd",codeLineContent:"codeLineContent_feaV"};function J(e){let{line:t,classNames:n,showLineNumbers:s,getLineProps:o,getTokenProps:r}=e;1===t.length&&"\n"===t[0].content&&(t[0].content="");const c=o({line:t,className:(0,a.c)(n,s&&Y.codeLine)}),l=t.map(((e,t)=>(0,i.jsx)("span",{...r({token:e,key:t})},t)));return(0,i.jsxs)("span",{...c,children:[s?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("span",{className:Y.codeLineNumber}),(0,i.jsx)("span",{className:Y.codeLineContent,children:l})]}):l,(0,i.jsx)("br",{})]})}function K(e){return(0,i.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,i.jsx)("path",{fill:"currentColor",d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})})}function Q(e){return(0,i.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,i.jsx)("path",{fill:"currentColor",d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"})})}const X={copyButtonCopied:"copyButtonCopied_obH4",copyButtonIcons:"copyButtonIcons_eSgA",copyButtonIcon:"copyButtonIcon_y97N",copyButtonSuccessIcon:"copyButtonSuccessIcon_LjdS"};function ee(e){let{code:t,className:n}=e;const[o,r]=(0,s.useState)(!1),c=(0,s.useRef)(void 0),l=(0,s.useCallback)((()=>{!function(e,{target:t=document.body}={}){if("string"!=typeof e)throw new TypeError(`Expected parameter \`text\` to be a \`string\`, got \`${typeof e}\`.`);const n=document.createElement("textarea"),s=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const a=document.getSelection(),o=a.rangeCount>0&&a.getRangeAt(0);t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let r=!1;try{r=document.execCommand("copy")}catch{}n.remove(),o&&(a.removeAllRanges(),a.addRange(o)),s&&s.focus()}(t),r(!0),c.current=window.setTimeout((()=>{r(!1)}),1e3)}),[t]);return(0,s.useEffect)((()=>()=>window.clearTimeout(c.current)),[]),(0,i.jsx)("button",{type:"button","aria-label":o?(0,m.G)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,m.G)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,m.G)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,a.c)("clean-btn",n,X.copyButton,o&&X.copyButtonCopied),onClick:l,children:(0,i.jsxs)("span",{className:X.copyButtonIcons,"aria-hidden":"true",children:[(0,i.jsx)(K,{className:X.copyButtonIcon}),(0,i.jsx)(Q,{className:X.copyButtonSuccessIcon})]})})}function te(e){return(0,i.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,i.jsx)("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})})}const ne={wordWrapButtonIcon:"wordWrapButtonIcon_Bwma",wordWrapButtonEnabled:"wordWrapButtonEnabled_EoeP"};function se(e){let{className:t,onClick:n,isEnabled:s}=e;const o=(0,m.G)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return(0,i.jsx)("button",{type:"button",onClick:n,className:(0,a.c)("clean-btn",t,s&&ne.wordWrapButtonEnabled),"aria-label":o,title:o,children:(0,i.jsx)(te,{className:ne.wordWrapButtonIcon,"aria-hidden":"true"})})}function ae(e){let{children:t,className:n="",metastring:o,title:r,showLineNumbers:c,language:l}=e;const{prism:{defaultLanguage:d,magicComments:u}}=(0,P.y)(),m=function(e){return e?.toLowerCase()}(l??function(e){const t=e.split(" ").find((e=>e.startsWith("language-")));return t?.replace(/language-/,"")}(n)??d),h=T(),g=function(){const[e,t]=(0,s.useState)(!1),[n,a]=(0,s.useState)(!1),o=(0,s.useRef)(null),r=(0,s.useCallback)((()=>{const n=o.current.querySelector("code");e?n.removeAttribute("style"):(n.style.whiteSpace="pre-wrap",n.style.overflowWrap="anywhere"),t((e=>!e))}),[o,e]),i=(0,s.useCallback)((()=>{const{scrollWidth:e,clientWidth:t}=o.current,n=e>t||o.current.querySelector("code").hasAttribute("style");a(n)}),[o]);return q(o,i),(0,s.useEffect)((()=>{i()}),[e,i]),(0,s.useEffect)((()=>(window.addEventListener("resize",i,{passive:!0}),()=>{window.removeEventListener("resize",i)})),[i]),{codeBlockRef:o,isEnabled:e,isCodeScrollable:n,toggle:r}}(),p=function(e){return e?.match(M)?.groups.title??""}(o)||r,{lineClassNames:f,code:x}=$(t,{metastring:o,language:m,magicComments:u}),j=c??function(e){return Boolean(e?.includes("showLineNumbers"))}(o);return(0,i.jsxs)(O,{as:"div",className:(0,a.c)(n,m&&!n.includes(`language-${m}`)&&`language-${m}`),children:[p&&(0,i.jsx)("div",{className:V.codeBlockTitle,children:p}),(0,i.jsxs)("div",{className:V.codeBlockContent,children:[(0,i.jsx)(Z.gl,{theme:h,code:x,language:m??"text",children:e=>{let{className:t,style:n,tokens:s,getLineProps:o,getTokenProps:r}=e;return(0,i.jsx)("pre",{tabIndex:0,ref:g.codeBlockRef,className:(0,a.c)(t,V.codeBlock,"thin-scrollbar"),style:n,children:(0,i.jsx)("code",{className:(0,a.c)(V.codeBlockLines,j&&V.codeBlockLinesWithNumbering),children:s.map(((e,t)=>(0,i.jsx)(J,{line:e,getLineProps:o,getTokenProps:r,classNames:f[t],showLineNumbers:j},t)))})})}}),(0,i.jsxs)("div",{className:V.buttonGroup,children:[(g.isEnabled||g.isCodeScrollable)&&(0,i.jsx)(se,{className:V.codeButton,onClick:()=>g.toggle(),isEnabled:g.isEnabled}),(0,i.jsx)(ee,{className:V.codeButton,code:x})]})]})]})}function oe(e){let{children:t,...n}=e;const a=(0,_.c)(),o=function(e){return s.Children.toArray(e).some((e=>(0,s.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(t),r="string"==typeof o?ae:D;return(0,i.jsx)(r,{...n,children:o},String(a))}function re(e){return(0,i.jsx)("code",{...e})}var ie=n(2344),ce=n(7792);const le={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"};function de(e){return!!e&&("SUMMARY"===e.tagName||de(e.parentElement))}function ue(e,t){return!!e&&(e===t||ue(e.parentElement,t))}function me(e){let{summary:t,children:n,...o}=e;(0,ie.c)().collectAnchor(o.id);const r=(0,_.c)(),c=(0,s.useRef)(null),{collapsed:l,setCollapsed:d}=(0,ce.a)({initialState:!o.open}),[u,m]=(0,s.useState)(o.open),h=s.isValidElement(t)?t:(0,i.jsx)("summary",{children:t??"Details"});return(0,i.jsxs)("details",{...o,ref:c,open:u,"data-collapsed":l,className:(0,a.c)(le.details,r&&le.isBrowser,o.className),onMouseDown:e=>{de(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;de(t)&&ue(t,c.current)&&(e.preventDefault(),l?(d(!1),m(!0)):d(!0))},children:[h,(0,i.jsx)(ce.U,{lazy:!1,collapsed:l,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{d(e),m(!e)},children:(0,i.jsx)("div",{className:le.collapsibleContent,children:n})})]})}const he={details:"details_b_Ee"},ge="alert alert--info";function pe(e){let{...t}=e;return(0,i.jsx)(me,{...t,className:(0,a.c)(ge,he.details,t.className)})}function fe(e){const t=s.Children.toArray(e.children),n=t.find((e=>s.isValidElement(e)&&"summary"===e.type)),a=(0,i.jsx)(i.Fragment,{children:t.filter((e=>e!==n))});return(0,i.jsx)(pe,{...e,summary:n,children:a})}var xe=n(28);function je(e){return(0,i.jsx)(xe.c,{...e})}const be={containsTaskList:"containsTaskList_mC6p"};function ve(e){if(void 0!==e)return(0,a.c)(e,e?.includes("contains-task-list")&&be.containsTaskList)}const Ne={img:"img_ev3q"};var ke=n(952);const ye={Head:w.c,details:fe,Details:fe,code:function(e){return function(e){return void 0!==e.children&&s.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")))}(e)?(0,i.jsx)(re,{...e}):(0,i.jsx)(oe,{...e})},a:function(e){return(0,i.jsx)(l.c,{...e})},pre:function(e){return(0,i.jsx)(i.Fragment,{children:e.children})},ul:function(e){return(0,i.jsx)("ul",{...e,className:ve(e.className)})},li:function(e){return(0,ie.c)().collectAnchor(e.id),(0,i.jsx)("li",{...e})},img:function(e){return(0,i.jsx)("img",{decoding:"async",loading:"lazy",...e,className:(t=e.className,(0,a.c)(t,Ne.img))});var t},h1:e=>(0,i.jsx)(je,{as:"h1",...e}),h2:e=>(0,i.jsx)(je,{as:"h2",...e}),h3:e=>(0,i.jsx)(je,{as:"h3",...e}),h4:e=>(0,i.jsx)(je,{as:"h4",...e}),h5:e=>(0,i.jsx)(je,{as:"h5",...e}),h6:e=>(0,i.jsx)(je,{as:"h6",...e}),admonition:ke.c,mermaid:()=>null};function Be(e){let{children:t}=e;return(0,i.jsx)(C.I,{components:ye,children:t})}function Ce(e){let{children:t,className:n}=e;const{isBlogPostPage:s}=(0,o.g)();return(0,i.jsx)("div",{id:s?B.blogPostContainerID:void 0,className:(0,a.c)("markdown",n),itemProp:"articleBody",children:(0,i.jsx)(Be,{children:t})})}const we={iconEdit:"iconEdit_Z9Sw"};function _e(e){let{className:t,...n}=e;return(0,i.jsx)("svg",{fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,a.c)(we.iconEdit,t),"aria-hidden":"true",...n,children:(0,i.jsx)("g",{children:(0,i.jsx)("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})})})}function Le(e){let{editUrl:t}=e;return(0,i.jsxs)(l.c,{to:t,className:E.W.common.editThisPage,children:[(0,i.jsx)(_e,{}),(0,i.jsx)(m.c,{id:"theme.common.editThisPage",description:"The link label to edit the current page",children:"Edit this page"})]})}var Pe=n(3736);const Te={tags:"tags_jXut",tag:"tag_QGVx"};function Ee(e){let{tags:t}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("b",{children:(0,i.jsx)(m.c,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,i.jsx)("ul",{className:(0,a.c)(Te.tags,"padding--none","margin-left--sm"),children:t.map((e=>{let{label:t,permalink:n}=e;return(0,i.jsx)("li",{className:Te.tag,children:(0,i.jsx)(Pe.c,{label:t,permalink:n})},n)}))})]})}function Ie(){return(0,i.jsx)("b",{children:(0,i.jsx)(m.c,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read More"})})}function Ae(e){const{blogPostTitle:t,...n}=e;return(0,i.jsx)(l.c,{"aria-label":(0,m.G)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t}),...n,children:(0,i.jsx)(Ie,{})})}const Me={blogPostFooterDetailsFull:"blogPostFooterDetailsFull_mRVl"};function Re(){const{metadata:e,isBlogPostPage:t}=(0,o.g)(),{tags:n,title:s,editUrl:r,hasTruncateMarker:c}=e,l=!t&&c,d=n.length>0;return d||l||r?(0,i.jsxs)("footer",{className:(0,a.c)("row docusaurus-mt-lg",t&&Me.blogPostFooterDetailsFull),children:[d&&(0,i.jsx)("div",{className:(0,a.c)("col",{"col--9":l}),children:(0,i.jsx)(Ee,{tags:n})}),t&&r&&(0,i.jsx)("div",{className:"col margin-top--sm",children:(0,i.jsx)(Le,{editUrl:r})}),l&&(0,i.jsx)("div",{className:(0,a.c)("col text--right",{"col--3":d}),children:(0,i.jsx)(Ae,{blogPostTitle:s,to:e.permalink})})]}):null}function Se(e){let{children:t,className:n}=e;const s=function(){const{isBlogPostPage:e}=(0,o.g)();return e?void 0:"margin-bottom--xl"}();return(0,i.jsxs)(c,{className:(0,a.c)(s,n),children:[(0,i.jsx)(y,{}),(0,i.jsx)(Ce,{children:t}),(0,i.jsx)(Re,{})]})}},1152:(e,t,n)=>{"use strict";n.d(t,{c:()=>r});n(1504);var s=n(5456),a=n(5800),o=n(7624);function r(e){const{permalink:t,title:n,subLabel:r,isNext:i}=e;return(0,o.jsxs)(a.c,{className:(0,s.c)("pagination-nav__link",i?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[r&&(0,o.jsx)("div",{className:"pagination-nav__sublabel",children:r}),(0,o.jsx)("div",{className:"pagination-nav__label",children:n})]})}},3736:(e,t,n)=>{"use strict";n.d(t,{c:()=>i});n(1504);var s=n(5456),a=n(5800);const o={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};var r=n(7624);function i(e){let{permalink:t,label:n,count:i}=e;return(0,r.jsxs)(a.c,{href:t,className:(0,s.c)(o.tag,i?o.tagWithCount:o.tagRegular),children:[n,i&&(0,r.jsx)("span",{children:i})]})}},6064:(e,t,n)=>{"use strict";n.d(t,{E:()=>i,g:()=>c});var s=n(1504),a=n(1352),o=n(7624);const r=s.createContext(null);function i(e){let{children:t,content:n,isBlogPostPage:a=!1}=e;const i=function(e){let{content:t,isBlogPostPage:n}=e;return(0,s.useMemo)((()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:n})),[t,n])}({content:n,isBlogPostPage:a});return(0,o.jsx)(r.Provider,{value:i,children:t})}function c(){const e=(0,s.useContext)(r);if(null===e)throw new a.AH("BlogPostProvider");return e}},5648:(e,t,n)=>{"use strict";n.d(t,{A:()=>l});var s=n(1504),a=n(4596);const o=["zero","one","two","few","many","other"];function r(e){return o.filter((t=>e.includes(t)))}const i={locale:"en",pluralForms:r(["one","other"]),select:e=>1===e?"one":"other"};function c(){const{i18n:{currentLocale:e}}=(0,a.c)();return(0,s.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:r(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),i}}),[e])}function l(){const e=c();return{selectMessage:(t,n)=>function(e,t,n){const s=e.split("|");if(1===s.length)return s[0];s.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${s.length}: ${e}`);const a=n.select(t),o=n.pluralForms.indexOf(a);return s[Math.min(o,s.length-1)]}(n,t,e)}}},6504:(e,t)=>{function n(e){let t,n=[];for(let s of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(s))n.push(parseInt(s,10));else if(t=s.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,s,a,o]=t;if(s&&o){s=parseInt(s),o=parseInt(o);const e=s<o?1:-1;"-"!==a&&".."!==a&&"\u2025"!==a||(o+=e);for(let t=s;t!==o;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},4552:(e,t,n)=>{"use strict";n.d(t,{I:()=>i,M:()=>r});var s=n(1504);const a={},o=s.createContext(a);function r(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);