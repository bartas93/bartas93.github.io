"use strict";(self.webpackChunkbj_blog=self.webpackChunkbj_blog||[]).push([[209],{2322:(e,t,a)=>{a.d(t,{A:()=>E});var l=a(7953),r=a(8835),n=a(8094),s=a(3406),i=a(650),c=a(3521);const m={sidebar:"sidebar_u3Mb",sidebarItemTitle:"sidebarItemTitle_UPyV",sidebarItemList:"sidebarItemList_v63c",sidebarItem:"sidebarItem_L1A_",sidebarItemLink:"sidebarItemLink_ZQDu",sidebarItemLinkActive:"sidebarItemLinkActive_xMKS"};function o(e){let{sidebar:t}=e;return l.createElement("aside",{className:"col col--3"},l.createElement("nav",{className:(0,r.A)(m.sidebar,"thin-scrollbar"),"aria-label":(0,c.T)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,r.A)(m.sidebarItemTitle,"margin-bottom--md")},t.title),l.createElement("ul",{className:(0,r.A)(m.sidebarItemList,"clean-list")},t.items.map((e=>l.createElement("li",{key:e.permalink,className:m.sidebarItem},l.createElement(i.A,{isNavLink:!0,to:e.permalink,className:m.sidebarItemLink,activeClassName:m.sidebarItemLinkActive},e.title)))))))}var b=a(3061);function u(e){let{sidebar:t}=e;return l.createElement("ul",{className:"menu__list"},t.items.map((e=>l.createElement("li",{key:e.permalink,className:"menu__list-item"},l.createElement(i.A,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title)))))}function g(e){return l.createElement(b.GX,{component:u,props:e})}function d(e){let{sidebar:t}=e;const a=(0,s.l)();return t?.items.length?"mobile"===a?l.createElement(g,{sidebar:t}):l.createElement(o,{sidebar:t}):null}function E(e){const{sidebar:t,toc:a,children:s,...i}=e,c=t&&t.items.length>0;return l.createElement(n.A,i,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},l.createElement(d,{sidebar:t}),l.createElement("main",{className:(0,r.A)("col",{"col--7":c,"col--9 col--offset-1":!c}),itemScope:!0,itemType:"http://schema.org/Blog"},s),a&&l.createElement("div",{className:"col col--2"},a))))}},2358:(e,t,a)=>{a.r(t),a.d(t,{default:()=>E});var l=a(7953),r=a(8835),n=a(3521);const s=()=>(0,n.T)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});var i=a(144),c=a(5e3),m=a(2322),o=a(311);const b={tag:"tag_R63I"};function u(e){let{letterEntry:t}=e;return l.createElement("article",null,l.createElement("h2",null,t.letter),l.createElement("ul",{className:"padding--none"},t.tags.map((e=>l.createElement("li",{key:e.permalink,className:b.tag},l.createElement(o.A,e))))),l.createElement("hr",null))}function g(e){let{tags:t}=e;const a=function(e){const t={};return Object.values(e).forEach((e=>{const a=function(e){return e[0].toUpperCase()}(e.label);t[a]??=[],t[a].push(e)})),Object.entries(t).sort(((e,t)=>{let[a]=e,[l]=t;return a.localeCompare(l)})).map((e=>{let[t,a]=e;return{letter:t,tags:a.sort(((e,t)=>e.label.localeCompare(t.label)))}}))}(t);return l.createElement("section",{className:"margin-vert--lg"},a.map((e=>l.createElement(u,{key:e.letter,letterEntry:e}))))}var d=a(2032);function E(e){let{tags:t,sidebar:a}=e;const n=s();return l.createElement(i.e3,{className:(0,r.A)(c.G.wrapper.blogPages,c.G.page.blogTagsListPage)},l.createElement(i.be,{title:n}),l.createElement(d.A,{tag:"blog_tags_list"}),l.createElement(m.A,{sidebar:a},l.createElement("h1",null,n),l.createElement(g,{tags:t})))}},311:(e,t,a)=>{a.d(t,{A:()=>i});var l=a(7953),r=a(8835),n=a(650);const s={tag:"tag_nBQz",tagRegular:"tagRegular_Qula",tagWithCount:"tagWithCount_tbYB"};function i(e){let{permalink:t,label:a,count:i}=e;return l.createElement(n.A,{href:t,className:(0,r.A)(s.tag,i?s.tagWithCount:s.tagRegular)},a,i&&l.createElement("span",null,i))}}}]);