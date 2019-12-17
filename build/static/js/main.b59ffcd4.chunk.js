(this["webpackJsonpweb-portfolio"]=this["webpackJsonpweb-portfolio"]||[]).push([[0],{10:function(e){e.exports=JSON.parse('{"name":"Ian Walston","title":"Web Developer","bio":"I use frameworks and open source package managers to make web applications. I\'ve worked as a frontend developer in the biotech, digital marketing, and entertainment fields. I prefer React.","projects":[{"siteUrl":"https://dmvnt.com","codeUrl":"https://github.com/IanWalston/DMVNT","tech":"React | Express | AWS-S3","name":"DMV Entertainment","summary":"Video host","description":"An express server holds urls for videos stored in aws-s3 buckets. These urls are served to a react frontend via API. The react frontend is optimized for iphone but is also compatible with most modern browsers."},{"siteUrl":"https://ianwalston.github.io/QuickMaths/","codeUrl":"https://github.com/IanWalston/QuickMaths","tech":"jQuery","name":"Quick Maths","summary":"Math game"},{"siteUrl":"https://ianwalston.github.io/Color-Memory/","codeUrl":"https://github.com/IanWalston/Memory-Balls","tech":"React","name":"Color Memory","summary":"Memory game"},{"siteUrl":"https://goodcobeats.web.app","tech":"jQuery | Firebase","name":"Good Co Beats","summary":"Simple e-commerce site"}],"links":[{"name":"email","url":"mailto:ikwalston@comcast.net","displayText":"IKWalston@Comcast.net"},{"name":"phone","url":"tel:3017856988","displayText":"+1 301-785-6988"},{"name":"resume","url":"https://docs.google.com/document/d/1lAU7CjmXdeQg7WOp6yfqbPaLAsR5iG5-zzhj0KVKlOw"},{"name":"github","url":"https://github.com/IanWalston"},{"name":"linkedin","url":"https://linkedin.com/in/ianwalston"}]}')},11:function(e,t,n){e.exports=n(36)},16:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(8),s=n.n(o),i=(n(16),n(1)),l=n(2),c=n(4),m=n(3),u=n(5),p=(n(17),function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.ian;return r.a.createElement("div",{className:"info"},r.a.createElement("h1",null,e.name),r.a.createElement("h2",null,e.title),r.a.createElement("p",null,e.bio))}}]),t}(a.Component)),h=(n(18),function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"projects"},this.props.projects.map((function(e){return r.a.createElement("div",{className:"project"},r.a.createElement("div",null,e.summary),r.a.createElement("div",null,e.tech),r.a.createElement("div",null,r.a.createElement("a",{href:e.siteUrl},"site")),r.a.createElement("div",null,r.a.createElement("a",{href:e.codeUrl},"code")))})))}}]),t}(a.Component)),d=n(9),f=n.n(d),b=(n(34),function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={mode:"html"},n.availableModes=["html","icons","json","plaintext"],n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"iconsMode",value:function(){return r.a.createElement("div",{className:"iconLinks"},this.props.links.map((function(e){return r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:e.url},r.a.createElement("img",{className:"icon",alt:e.name,src:"/svg/".concat(e.name,".svg")}))})))}},{key:"jsonMode",value:function(){var e=JSON.stringify(this.props.links,null,4);return r.a.createElement("textarea",{className:"json",value:e})}},{key:"plaintextMode",value:function(){var e="";return this.props.links.map((function(t){return e+="".concat(t.name,": ").concat(t.displayText?t.displayText:t.url,"\n\n")})),r.a.createElement("textarea",{value:e})}},{key:"htmlMode",value:function(){return r.a.createElement("div",{className:"regalurLinks"},this.props.links.map((function(e){var t="";return e.displayText?t=e.displayText:(t=e.url.replace(/^https:\/\//,"")).length>=40&&(t=t.slice(0,39)+"..."),r.a.createElement("div",null,r.a.createElement("span",null,e.name,": "),r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:e.url},t))})))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"Links"},r.a.createElement("div",{className:"buttons"},this.availableModes.map((function(t){return r.a.createElement("button",{onClick:function(){return e.setState({mode:t})}},t)}))),this[this.state.mode+"Mode"](),r.a.createElement(f.a,null))}}]),t}(a.Component));n(35);function v(){return r.a.createElement("div",null,r.a.createElement("button",null,"Export the information on this page as a json file"))}var k=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.ian;return r.a.createElement("div",null,r.a.createElement("div",{className:"sidebarBlock"},r.a.createElement(p,this.props),r.a.createElement(b,{links:e.links})),r.a.createElement(h,{projects:e.projects}),r.a.createElement(v,this.props))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var E=n(10);s.a.render(r.a.createElement(k,{ian:E}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[11,1,2]]]);
//# sourceMappingURL=main.b59ffcd4.chunk.js.map