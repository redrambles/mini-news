(this.webpackJsonpreminder=this.webpackJsonpreminder||[]).push([[0],{12:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(5),l=a.n(c),o=(a(12),a(2)),s=a(1),u=a(3),i=a.n(u),m=a(6),p=function(e,t){switch(t.type){case"SET_LOADING":return Object(s.a)(Object(s.a)({},e),{},{isLoading:!0});case"SET_STORIES":return Object(s.a)(Object(s.a)({},e),{},{isLoading:!1,hits:t.payload.hits,nbPages:t.payload.nbPages});case"HANDLE_SEARCH":var a=t.payload;return Object(s.a)(Object(s.a)({},e),{},{searchTerm:a});case"REMOVE_STORY":var n=t.payload,r=e.hits.filter((function(e){return e.objectID!==n}));return Object(s.a)(Object(s.a)({},e),{},{hits:r});case"HANDLE_PAGE":var c=t.payload,l=e.page;return"next"===c?l+1<e.nbPages?l+=1:l=0:"prev"===c&&(l-1<0?l=e.nbPages-1:l-=1),Object(s.a)(Object(s.a)({},e),{},{page:l});default:throw new Error('no matching "'.concat(t.type,'" action type'))}},E={isLoading:!0,searchTerm:"react",hits:[],page:0,nbPages:0},f=r.a.createContext(),b=function(e){var t=e.children,a=Object(n.useReducer)(p,E),c=Object(o.a)(a,2),l=c[0],u=c[1],b=function(){var e=Object(m.a)(i.a.mark((function e(t){var a,n,r,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u({type:"SET_LOADING"}),e.prev=1,e.next=4,fetch(t);case 4:return a=e.sent,e.next=7,a.json();case 7:n=e.sent,r=n.hits,c=n.nbPages,u({type:"SET_STORIES",payload:{hits:r,nbPages:c}}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){b("".concat("https://hn.algolia.com/api/v1/search?","query=").concat(l.searchTerm,"&page=").concat(l.page))}),[l.searchTerm,l.page]),r.a.createElement(f.Provider,{value:Object(s.a)(Object(s.a)({},l),{},{removeStory:function(e){u({type:"REMOVE_STORY",payload:e})},handleSearch:function(e){u({type:"HANDLE_SEARCH",payload:e})},handlePage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"next";u({type:"HANDLE_PAGE",payload:e})}})},t)},h=function(){return Object(n.useContext)(f)},d=function(){var e=h().handleSearch,t=Object(n.useState)(""),a=Object(o.a)(t,2),c=a[0],l=a[1],s=Object(n.useRef)(null);return Object(n.useEffect)((function(){s.current.focus()}),[]),r.a.createElement("form",{className:"search-form",onSubmit:function(t){t.preventDefault(),e(c),l("")}},r.a.createElement("h2",null,"Hacker News Search"),r.a.createElement("p",null,"Type and hit Enter for Results"),r.a.createElement("input",{ref:s,type:"text",value:c,className:"form-input",onChange:function(e){return l(e.target.value)}}))},g=function(){var e=h(),t=e.isLoading,a=e.hits,n=e.removeStory,c=e.searchTerm;return t?r.a.createElement("div",{className:"loading"}):r.a.createElement("section",{className:"stories"},r.a.createElement("h3",null,"Results for ",c),a.map((function(e){var t=e.objectID,a=e.title,c=e.num_comments,l=e.url,o=e.points,s=e.author;return r.a.createElement("article",{className:"story",key:t},r.a.createElement("h4",{className:"title"},a),r.a.createElement("p",{className:"info"},o," points by ",r.a.createElement("span",null,s," | "),c," "," comments"),r.a.createElement("div",null,r.a.createElement("a",{href:l,className:"read-link",target:" _blank",rel:"noopener noferrer"},"Read more"),r.a.createElement("button",{className:"remove-btn",onClick:function(){return n(t)}},"Remove")))})))},v=function(){var e=h(),t=e.handlePage,a=e.isLoading,n=e.nbPages,c=e.page;return r.a.createElement("div",{className:"btn-container"},r.a.createElement("button",{disabled:a,onClick:function(){return t("prev")}},"Prev Page"),r.a.createElement("p",null,c+1," of ",n," "),r.a.createElement("button",{disabled:a,onClick:function(){return t("next")}},"Next Page"))};var O=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(d,null),r.a.createElement(v,null),r.a.createElement(g,null))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null,r.a.createElement(O,null))),document.getElementById("root"))},7:function(e,t,a){e.exports=a(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.05481f1f.chunk.js.map