import{s as e,B as t,T as n,S as r,i as a,e as o,b as i,j as s,J as l,K as c,n as u,a as h,m as f,q as p,f as d,h as m,k as v,L as g,F as $,G as b,u as w,U as x,N as y,C as P,r as _,l as k,p as j,v as M}from"./chunk-dd27efbb.js";import{c as N,a as E,T as A,N as C,A as O,S,b as D,B as X,d as Y,f as H,L,e as q}from"./chunk-94babd02.js";import{_ as T,a as U}from"./chunk-3259a9e2.js";function F(n,r=t){let a;const o=[];function i(t){if(e(n,t)){if(n=t,!a)return;o.forEach(e=>e[1]()),o.forEach(e=>e[0](n))}}return{set:i,update:function(e){i(e(n))},subscribe:function(e,s=t){const l=[e,s];return o.push(l),1===o.length&&(a=r(i)||t),e(n),()=>{const e=o.indexOf(l);-1!==e&&o.splice(e,1),0===o.length&&(a(),a=null)}}}}var I,K=F(!1),G=F(!0),z=F(!1),B=F(!0),V=F(!1);function R(e){return e>1279?"xl":e>1023?"lg":e>767?"md":"sm"}function W(e){var t=this;return new Promise(function(n,r){return T(t,void 0,void 0,function(){var t,a,o,i,s,l,c,u,h,f=this;return U(this,function(p){switch(p.label){case 0:t=Object.keys(e),a=t.map(function(t){return e[t]}),o=[],i={},s=0,l=a.map(Promise.resolve,Promise),p.label=1;case 1:return s<l.length?(c=l[s],u=i,h=t[o.length],[4,c.then(function(e){return T(f,void 0,void 0,function(){return U(this,function(t){switch(t.label){case 0:return[4,e];case 1:return[2,t.sent()]}})})},r)]):[3,4];case 2:u[h]=p.sent(),o.push(i[t[o.length]]),o.length===t.length&&n(i),p.label=3;case 3:return s++,[3,1];case 4:return[2]}})})})}function Z(e){return e.map(function(e){return{to:I+e.to,text:e.text}})}var J=function(){function e(e,t,n){this.ctor=e,this.target=t,this.module=n,this.beforeenter=this.beforeenter.bind(this)}return e.prototype.importModules=function(){return T(this,void 0,void 0,function(){var e;return U(this,function(t){switch(t.label){case 0:return e={},[4,import("./page-708e2b77.js")];case 1:return e.template=t.sent(),[4,this.module];case 2:return e.data=t.sent(),[2,W(e)]}})})},e.prototype.beforeenter=function(e,t){return T(this,void 0,void 0,function(){var t,n;return U(this,function(r){switch(r.label){case 0:return this.ctor?(t=this.ctor).then?[4,this.ctor]:[3,2]:[3,3];case 1:t=r.sent().default,r.label=2;case 2:return this.component=new t({target:this.target}),[3,5];case 3:return n=e,[4,this.importModules()];case 4:n.data=r.sent(),r.label=5;case 5:return[2]}})})},Object.defineProperty(e.prototype,"route",{get:function(){var t=this;return{beforeenter:this.beforeenter,enter:function(n,r){if(n.data){var a={target:t.target},o=void 0;if(n.data.data){var i=(s=n.pathname,I?s.substring(I.length):s);o=Object.assign({},n.data.data.initialData,{partial:n.data.data[i],instance:null}),a.props=o}t.component=new n.data.template.default(a),o&&t.component.$set({instance:t.component}),console.log("Async Entered!",n),e.notify(n)}else console.log("Entered!",n),e.notify(n);var s},leave:function(e,n){e.data=null,t.component.$destroy(),console.log("Left!",e)}}},enumerable:!0,configurable:!0}),e}(),Q=N(function(e,t){e.exports=function(){var e="undefined"!=typeof document&&document.createElement("a"),t=/^([\w\-]+)(?:=([^&]*))?$/,n=["beforeenter","enter","leave","update"],r=!0;function a(e){var t=e.route,n=e.pathname,a=e.params,o=e.query,i=e.hash,s=e.scrollX,l=e.scrollY;this.pathname=n,this.params=a,this.query=o,this.hash=i,this.isInitial=r,this.scrollX=s,this.scrollY=l,this._route=t,r=!1}function o(e,t){var r=this;"/"===e[0]&&(e=e.slice(1)),this.path=e,this.segments=e.split("/"),"function"==typeof t&&(t={enter:t}),this.updateable="function"==typeof t.update,n.forEach(function(e){r[e]=function(n,r){var a;return t[e]&&(a=t[e](n,r)),w.Promise.resolve(a)}})}a.prototype={matches:function(e){return this._route.matches(e)}},o.prototype={matches:function(t){e.href=t;var n=0===e.pathname.indexOf("/")?e.pathname.slice(1):e.pathname,r=n.split("/");return function(e,t){if(e.length===t.length){for(var n=e.length;n--;)if(e[n]!==t[n]&&":"!==t[n][0])return!1;return!0}}(r,this.segments)},exec:function(n){e.href=n.href;var r=0===e.pathname.indexOf("/")?e.pathname.slice(1):e.pathname,o=e.search.slice(1),i=r.split("/");if(i.length!==this.segments.length)return!1;for(var s={},l=0;l<i.length;l+=1){var c=i[l],u=this.segments[l];if(":"===u[0])s[u.slice(1)]=c;else if(c!==u)return!1}for(var h={},f=o.split("&"),p=0;p<f.length;p+=1){var d=t.exec(f[p]);if(d){var m=d[1],v=decodeURIComponent(d[2]);h.hasOwnProperty(m)?("object"!=typeof h[m]&&(h[m]=[h[m]]),h[m].push(v)):h[m]=v}}return new a({route:this,pathname:r,params:s,query:h,hash:e.hash.slice(1),scrollX:n.scrollX,scrollY:n.scrollY})}};var i="undefined"!=typeof window?window:null,s=[];function l(e,t){if(null===e&&null===t)return!0;if(u(e)&&u(t)){var n=e.length;if(t.length!==n)return!1;for(;n--;)if(!l(e[n],t[n]))return!1;return!0}if("object"==typeof e&&"object"==typeof t){var r=Object.keys(e),a=Object.keys(t),o=r.length;if(a.length!==o)return!1;for(;o--;){var i=r[o];if(!t.hasOwnProperty(i)||!l(t[i],e[i]))return!1}return!0}return e===t}var c=Object.prototype.toString;function u(e){return"[object Array]"===c.call(e)}var h=i&&(i.history.location||i.location);function f(){}var p,d={},m={enter:function(){return w.Promise.resolve()},leave:function(){return w.Promise.resolve()}},v=!1,g={},$=1,b=$,w={base:"",Promise:Promise,add:function(e,t){return s.push(new o(e,t)),w},start:function(e){var t;void 0===e&&(e={}),e.renamePopstateEvent&&(t=e.renamePopstateEvent,i.removeEventListener("popstate",x,!1),i.addEventListener(t,x,!1));var n=s.some(function(e){return e.matches(h.href)})?h.href:e.fallback;return w.goto(n,{replaceState:!0,scrollX:i.scrollX,scrollY:i.scrollY})},goto:function(e,t){var n;void 0===t&&(t={}),g[b]={x:i.scrollX,y:i.scrollY};var r=new w.Promise(function(r,a){n=p={href:e,scrollX:t.scrollX||0,scrollY:t.scrollY||0,options:t,fulfil:r,reject:a}});return p.promise=r,v?r:(y(n),r)},getCurrentID:function(){return b}};function x(e){if((e=e.detail||e).state){var t=g[e.state.uid];y(p={href:h.href,scrollX:t?t.x:0,scrollY:t?t.y:0,popstate:!0,fulfil:f,reject:f}),b=e.state.uid}}function y(e){for(var t,n,r=0;r<s.length;r+=1){var a=s[r];if(n=a.exec(e)){t=a;break}}if(!t||(f=n,x=d,t===m&&f.hash===x.hash&&l(f.params,x.params)&&l(f.query,x.query)))e.fulfil();else if(g[b]={x:d.scrollX=i.scrollX,y:d.scrollY=i.scrollY},v=!0,(t===m&&t.updateable?t.update(n):w.Promise.all([m.leave(d,n),t.beforeenter(n,d)]).then(function(){return t.enter(n,d)})).then(function(){m=t,d=n,v=!1,p!==e?(y(p),p.promise.then(e.fulfil,e.reject)):e.fulfil()}).catch(e.reject),!e.popstate){var o=e.options,c=o.replaceState,u=o.invisible;if(!u){var h=c?b:++$;history[c?"replaceState":"pushState"]({uid:h},"",e.href),g[b=h]={x:e.scrollX,y:e.scrollY}}}var f,x}return i&&(function(e){function t(t){if(1===function(e){return null===(e=e||i.event).which?e.button:e.which}(t)&&!(t.metaKey||t.ctrlKey||t.shiftKey||t.defaultPrevented)){for(var n=t.target;n&&"A"!==n.nodeName.toUpperCase();)n=n.parentNode;if(n&&"A"===n.nodeName.toUpperCase()){var r="object"==typeof n.href&&"SVGAnimatedString"===n.href.constructor.name;if(!n.hasAttribute("download")&&"external"!==n.getAttribute("rel")&&!~n.href.indexOf("mailto:")&&(r?!n.target.baseVal:!n.target)&&(r||(l=n.href,c=location.protocol+"//"+location.hostname,location.port&&(c+=":"+location.port),l&&0===l.indexOf(c)))){var a=r?n.href.baseVal:n.pathname+n.search+(n.hash||"");"undefined"!=typeof process&&a.match(/^\/[a-zA-Z]:\//)&&(a=a.replace(/^\/[a-zA-Z]:\//,"/"));var o=a;0===a.indexOf(w.base)&&(a=a.substr(w.base.length)),w.base&&o===a||s.some(function(e){return e.matches(o)})&&(t.preventDefault(),e(o))}}}var l,c}i.addEventListener("click",t,!1),i.addEventListener("touchstart",t,!1)}(function(e){return w.goto(e)}),i.addEventListener("popstate",x,!1)),w}()});function ee(e){var n;return{c(){(n=o("h1")).textContent="Home"},m(e,t){i(e,n,t)},p:t,i:t,o:t,d(e){e&&s(n)}}}class te extends r{constructor(t){super(),a(this,t,null,ee,e,[])}}function ne(e){var t,n,r,a,$,b,w,x,y;function P(t){e.textfield_value_binding.call(null,t),n=!0,g(()=>n=!1)}let _={label:"Indivisual TextField",placeholder:"Text"};void 0!==e.text&&(_.value=e.text);var k=new A({props:_});function j(t){e.numberfield_value_binding.call(null,t),a=!0,g(()=>a=!1)}l.push(()=>c(k,"value",P));let M={label:"Indivisual NumberField",placeholder:"Number"};void 0!==e.text&&(M.value=e.text);var N=new C({props:M});return l.push(()=>c(N,"value",j)),{c(){t=o("div"),k.$$.fragment.c(),r=u(),N.$$.fragment.c(),$=u(),(b=o("div")).textContent="FormConfig",w=u(),(x=o("div")).textContent="FormGen",h(b,"class","formcfg"),h(x,"class","formgen"),h(t,"class","wrapper")},m(e,n){i(e,t,n),f(k,t,null),p(t,r),f(N,t,null),p(t,$),p(t,b),p(t,w),p(t,x),y=!0},p(e,t){var r={};!n&&e.text&&(r.value=t.text),k.$set(r);var o={};!a&&e.text&&(o.value=t.text),N.$set(o)},i(e){y||(d(k.$$.fragment,e),d(N.$$.fragment,e),y=!0)},o(e){m(k.$$.fragment,e),m(N.$$.fragment,e),y=!1},d(e){e&&s(t),v(k),v(N)}}}function re(e,t,n){let r="12345";return{text:r,textfield_value_binding:function(e){n("text",r=e)},numberfield_value_binding:function(e){n("text",r=e)}}}class ae extends r{constructor(t){super(),a(this,t,re,ne,e,[])}}var oe=function(){function e(e){this.router=Q,this.init(e)}return e.prototype.init=function(e){this.indexHandler=new J(te,e),this.aboutHandler=new J(import("./About-35cfa6c5.js"),e),this.employeeHandler=new J(null,e,import("./employee-adf554cf.js")),this.departmentHandler=new J(null,e,import("./department-e52454b3.js")),this.formgridHandler=new J(ae,e),this.router.add(I+"/",this.indexHandler.route).add(I+"/formgrid",this.formgridHandler.route).add(I+"/about",this.aboutHandler.route).add(I+"/employee",this.employeeHandler.route).add(I+"/department",this.departmentHandler.route).start({fallback:I+"/"})},e}();function ie(e){var t,n,r,a,$,b,w,x,y,P,_,k,j,M=new S({});function N(t){e.tabs_selected_binding.call(null,t),w=!0,g(()=>w=!1)}let E={navigation:!0,items:e.topMenu};void 0!==e.currentPath&&(E.selected=e.currentPath);var A=new D({props:E});l.push(()=>c(A,"selected",N));var C=new X({props:{icon:"menu",small:!0,text:!0}});return C.$on("click",e.click_handler),{c(){t=o("a"),n=o("img"),r=u(),(a=o("h6")).textContent="SMELTE",$=u(),M.$$.fragment.c(),b=u(),A.$$.fragment.c(),x=u(),y=o("div"),C.$$.fragment.c(),P=u(),_=o("a"),k=o("img"),h(n,"src",I+"/logo.png"),h(n,"alt","Smelte logo"),h(n,"width","44"),h(a,"class","pl-3 text-white tracking-widest font-thin text-lg"),h(t,"href","."),h(t,"class","px-2 md:px-8 flex items-center"),h(y,"class","md:hidden"),h(k,"src",I+"/github.png"),h(k,"alt","Github Smelte CRUD App"),h(k,"width","24"),h(k,"height","24"),h(_,"href","https://github.com/Kiho/smelte-crud-app"),h(_,"class","px-4")},m(e,o){i(e,t,o),p(t,n),p(t,r),p(t,a),i(e,$,o),f(M,e,o),i(e,b,o),f(A,e,o),i(e,x,o),i(e,y,o),f(C,y,null),i(e,P,o),i(e,_,o),p(_,k),j=!0},p(e,t){var n={};e.topMenu&&(n.items=t.topMenu),!w&&e.currentPath&&(n.selected=t.currentPath),A.$set(n)},i(e){j||(d(M.$$.fragment,e),d(A.$$.fragment,e),d(C.$$.fragment,e),j=!0)},o(e){m(M.$$.fragment,e),m(A.$$.fragment,e),m(C.$$.fragment,e),j=!1},d(e){e&&(s(t),s($)),v(M,e),e&&s(b),v(A,e),e&&(s(x),s(y)),v(C),e&&(s(P),s(_))}}}function se(e){var t,n,r,a,b,w,x;function y(t){e.navigationdrawer_showDesktop_binding.call(null,t),n=!0,g(()=>n=!1)}function _(t){e.navigationdrawer_showMobile_binding.call(null,t),r=!0,g(()=>r=!1)}let k={right:e.$right,persistent:e.$persistent,elevation:e.$elevation,breakpoint:e.$bp,$$slots:{default:[he]},$$scope:{ctx:e}};void 0!==e.$showNav&&(k.showDesktop=e.$showNav),void 0!==e.$showNavMobile&&(k.showMobile=e.$showNavMobile);var j=new Y({props:k});return l.push(()=>c(j,"showDesktop",y)),l.push(()=>c(j,"showMobile",_)),{c(){t=o("main"),j.$$.fragment.c(),a=u(),b=o("div"),h(b,"id","app"),h(t,"class","container relative p-8 lg:max-w-3xl lg:ml-64 mx-auto mb-10 mt-24\n    md:ml-56 md:max-w-md md:px-3")},m(e,n){i(e,t,n),f(j,t,null),p(t,a),p(t,b),x=!0},p(e,t){var a={};e.$right&&(a.right=t.$right),e.$persistent&&(a.persistent=t.$persistent),e.$elevation&&(a.elevation=t.$elevation),e.$bp&&(a.breakpoint=t.$bp),(e.$$scope||e.currentPath)&&(a.$$scope={changed:e,ctx:t}),!n&&e.$showNav&&(a.showDesktop=t.$showNav),!r&&e.$showNavMobile&&(a.showMobile=t.$showNavMobile),j.$set(a)},i(e){x||(d(j.$$.fragment,e),P(()=>{w||(w=$(t,H,{duration:300},!0)),w.run(1)}),x=!0)},o(e){m(j.$$.fragment,e),w||(w=$(t,H,{duration:300},!1)),w.run(0),x=!1},d(e){e&&s(t),v(j),e&&w&&w.end()}}}function le(e){var t,n,r;return{c(){t=o("hr"),n=u(),(r=o("h6")).textContent="Utilities",h(r,"class","p-6 ml-1 py-2 text-xs text-gray-900")},m(e,a){i(e,t,a),i(e,n,a),i(e,r,a)},d(e){e&&(s(t),s(n),s(r))}}}function ce(e){var t,n,r,a,l,c,g="/typography"===e.item.to&&le(),$=[{selected:e.currentPath==e.item.to},e.item,{dense:!0},{navigation:!0}];let b={};for(var w=0;w<$.length;w+=1)b=k(b,$[w]);var x=new q({props:b});function y(...t){return e.click_handler_1(e,...t)}return{c(){t=o("span"),g&&g.c(),n=u(),r=o("a"),x.$$.fragment.c(),h(r,"href",a=e.item.to),h(t,"slot","item"),h(t,"class","cursor-pointer"),c=j(r,"click",y)},m(e,a){i(e,t,a),g&&g.m(t,null),p(t,n),p(t,r),f(x,r,null),l=!0},p(o,i){"/typography"===(e=i).item.to?g||((g=le()).c(),g.m(t,n)):g&&(g.d(1),g=null);var s=o.currentPath||o.item?M($,[{selected:e.currentPath==e.item.to},o.item&&e.item,{dense:!0},{navigation:!0}]):{};x.$set(s),l&&!o.item||a===(a=e.item.to)||h(r,"href",a)},i(e){l||(d(x.$$.fragment,e),l=!0)},o(e){m(x.$$.fragment,e),l=!1},d(e){e&&s(t),g&&g.d(),v(x),c()}}}function ue(e){return{c:t,m:t,p:t,i:t,o:t,d:t}}function he(e){var t,n,r,a,l,c=new L({props:{items:e.menu,$$slots:{default:[ue],item:[ce,({item:e})=>({item:e})]},$$scope:{ctx:e}}});return{c(){(t=o("h6")).textContent="Components",n=u(),c.$$.fragment.c(),r=u(),a=o("hr"),h(t,"class","p-6 ml-1 pb-2 text-xs text-gray-900")},m(e,o){i(e,t,o),i(e,n,o),f(c,e,o),i(e,r,o),i(e,a,o),l=!0},p(e,t){var n={};e.menu&&(n.items=t.menu),(e.$$scope||e.currentPath||e.item)&&(n.$$scope={changed:e,ctx:t}),c.$set(n)},i(e){l||(d(c.$$.fragment,e),l=!0)},o(e){m(c.$$.fragment,e),l=!1},d(e){e&&(s(t),s(n)),v(c,e),e&&(s(r),s(a))}}}function fe(e){var t,n,r,a=new O({props:{$$slots:{default:[ie]},$$scope:{ctx:e}}}),o=e.$bp&&se(e);return{c(){a.$$.fragment.c(),t=u(),o&&o.c(),n=b()},m(e,s){f(a,e,s),i(e,t,s),o&&o.m(e,s),i(e,n,s),r=!0},p(e,t){var r={};(e.$$scope||e.currentPath)&&(r.$$scope={changed:e,ctx:t}),a.$set(r),t.$bp?o?(o.p(e,t),d(o,1)):((o=se(t)).c(),d(o,1),o.m(n.parentNode,n)):o&&(_(),m(o,1,1,()=>{o=null}),w())},i(e){r||(d(a.$$.fragment,e),d(o),r=!0)},o(e){m(a.$$.fragment,e),m(o),r=!1},d(e){v(a,e),e&&s(t),o&&o.d(e),e&&s(n)}}}function pe(e,t,r){let a,o,i,s,l,c;x(e,V,e=>{r("$showNavMobile",a=e)}),x(e,B,e=>{r("$showNav",i=e)}),x(e,K,e=>{r("$right",s=e)}),x(e,G,e=>{r("$persistent",l=e)}),x(e,z,e=>{r("$elevation",c=e)});const u=function(){if("undefined"==typeof window)return F(!1);var e=F(R(window.innerWidth)),t=function(t){var n=t.target;return e.set(R(n.innerWidth))};return window.addEventListener("resize",t),n(function(){return window.removeListener(t)}),{subscribe:e.subscribe}}();let h;x(e,u,e=>{r("$bp",o=e)});let{currentPath:f=""}=t;y(()=>{const e=document.querySelector("#app");h=new oe(e),J.notify=(e=>{const t=e?e.pathname:"";r("currentPath",f="/"+t),console.log("NavMenu : routeData",e,t)})}),n(()=>{});const p=Z([{to:"/",text:"Home"},{to:"/employee",text:"Employee"},{to:"/department",text:"Department"},{to:"/about",text:"About"}]),d=Z([{to:"/about",text:"About"}]);return e.$set=(e=>{"currentPath"in e&&r("currentPath",f=e.currentPath)}),{bp:u,currentPath:f,menu:p,topMenu:d,$showNavMobile:a,$bp:o,$showNav:i,$right:s,$persistent:l,$elevation:c,tabs_selected_binding:function(e){r("currentPath",f=e)},click_handler:function(){return V.set(!a)},click_handler_1:function({item:e},t){return n=t,r=e.to,n&&n.preventDefault&&n.preventDefault(),void Q.goto(r);var n,r},navigationdrawer_showDesktop_binding:function(e){i=e,B.set(i)},navigationdrawer_showMobile_binding:function(e){a=e,V.set(a)}}}(I=document.getElementsByTagName("base")[0].getAttribute("href"))&&I.length>0&&"/"===I[I.length-1]&&(I=I.substring(0,I.length-1)),console.log("basePath: ",I);new class extends r{constructor(t){super(),a(this,t,pe,fe,e,["currentPath","menu","topMenu"])}get menu(){return this.$$.ctx.menu}get topMenu(){return this.$$.ctx.topMenu}}({target:document.querySelector("#app-root")});
