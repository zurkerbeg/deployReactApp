(this.webpackJsonpdeploy=this.webpackJsonpdeploy||[]).push([[0],{20:function(e,t,n){e.exports=n(32)},25:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(18),c=n.n(l),o=n(6),i=n(8),s=n(9),u=n(11),m=n(10),d=n(1);n(25);function h(){return r.a.createElement("div",{class:"lds-ring"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))}var v=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(o.b,{to:"/"},r.a.createElement("h2",null,"Back to Home")),r.a.createElement("div",{className:"container"},r.a.createElement("p",null,'At this time, results are ordered with the most recent following first \u2014 however, this ordering is subject to unannounced change and eventual consistency issues. Results are given in groups of 20 users and multiple "pages" of results can be navigated through using the next_cursor value in subsequent requests. See Using cursors to navigate collections for more information')))}}]),n}(a.Component),p=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={data:[],loading:!1},console.log(a.state.data),a}return Object(s.a)(n,[{key:"componentDidUpdate",value:function(){document.querySelectorAll(".close").forEach((function(e){e.addEventListener("click",(function(e){e.target.parentElement.style.display="none"}))}))}},{key:"componentDidMount",value:function(){var e=this;this.setState({loading:!0}),setTimeout((function(){fetch("https://api.github.com/users?page=1&per_page=5").then((function(e){return e.json()})).then((function(t){return e.setState({loading:!1,data:t})}))}),1e3)}},{key:"render",value:function(){var e="";return!0===this.state.loading&&(e=r.a.createElement("div",{className:"loading-session"},r.a.createElement(h,null))),r.a.createElement("div",{className:"container"},r.a.createElement("header",{className:"header"},r.a.createElement("h1",null,"Who to follow"),r.a.createElement("button",{type:"button",className:"refresh"},"Refresh")),e,this.state.data.map((function(e){return r.a.createElement("div",{className:"dataFollower",key:e.id},r.a.createElement("img",{src:e.avatar_url,alt:"profile"}),r.a.createElement("div",{className:"UserSpace"},r.a.createElement(o.b,{to:"/detail"},r.a.createElement("div",{className:"user"},e.login)),r.a.createElement("div",{className:"username"},"@",e.login)),r.a.createElement("button",{className:"close"},"X"))})))}}]),n}(a.Component),E=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement(o.a,null,r.a.createElement(d.c,null,r.a.createElement("div",null,r.a.createElement("ul",{className:"header"},r.a.createElement("h1",null,"Single Page Application")),r.a.createElement("div",{className:"content"},r.a.createElement(d.a,{exact:!0,path:"/",component:p}),r.a.createElement(d.a,{path:"/detail",component:v})))))}}]),n}(a.Component);n(31),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(o.a,null,r.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.7762680d.chunk.js.map