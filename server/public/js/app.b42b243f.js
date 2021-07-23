(function(e){function t(t){for(var o,s,i=t[0],u=t[1],c=t[2],l=0,d=[];l<i.length;l++)s=i[l],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&d.push(r[s][0]),r[s]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);m&&m(t);while(d.length)d.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,i=1;i<n.length;i++){var u=n[i];0!==r[u]&&(o=!1)}o&&(a.splice(t--,1),e=s(s.s=n[0]))}return e}var o={},r={app:0},a=[];function s(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=o,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(n,o,function(t){return e[t]}.bind(null,o));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var m=u;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"2c7c":function(e,t,n){},"4fa6":function(e,t,n){"use strict";n("2c7c")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[o("img",{attrs:{width:"350",height:"170",id:"logo",alt:"Vue logo",src:n("cf05")}}),o("PostComponent")],1)},a=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("div",{staticClass:"create-post"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.search,expression:"search"}],attrs:{id:"search",placeholder:"Sök Elev"},domProps:{value:e.search},on:{input:function(t){t.target.composing||(e.search=t.target.value)}}}),n("h2",[e._v("Skriv Omdöme")]),n("form",{attrs:{id:"form-wrapper"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.namn,expression:"namn"}],attrs:{type:"text",name:"create-name",id:"create-name",placeholder:"Namn",required:""},domProps:{value:e.namn},on:{input:function(t){t.target.composing||(e.namn=t.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.moment,expression:"moment"}],attrs:{type:"text",name:"create-moment",id:"create-moment",placeholder:"Moment",required:""},domProps:{value:e.moment},on:{input:function(t){t.target.composing||(e.moment=t.target.value)}}}),n("select",{directives:[{name:"model",rawName:"v-model",value:e.omdome,expression:"omdome"}],attrs:{name:"omdome",placeholder:"Omdöme",id:"omdome",required:""},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.omdome=t.target.multiple?n:n[0]}}},[n("option",{attrs:{value:"",disabled:"",selected:"",hidden:""}},[e._v("Omdöme")]),n("option",{attrs:{value:"A",selected:""}},[e._v("A")]),n("option",{attrs:{value:"B"}},[e._v("B")]),n("option",{attrs:{value:"C"}},[e._v("C")]),n("option",{attrs:{value:"D"}},[e._v("D")]),n("option",{attrs:{value:"E"}},[e._v("E")]),n("option",{attrs:{value:"F"}},[e._v("F")])]),n("input",{attrs:{type:"submit",value:"Spara omdöme"},on:{click:e.createPost}})])]),n("h1",[e._v("Senaste Omdömen")]),n("hr"),e.error?n("p",{staticClass:"error"},[e._v(e._s(e.error))]):e._e(),n("div",{staticClass:"posts-container"},e._l(e.filteredList,(function(t,o){return n("div",{key:t._id,staticClass:"post",attrs:{item:t,index:o}},[e.editPost==t._id?n("div",[n("div",{staticClass:"editing-div"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.namn,expression:"post.namn"}],domProps:{value:t.namn},on:{keyup:function(n){return n.type.indexOf("key")||13===n.keyCode?e.updatePost(t.namn,t.moment,t.omdome,t._id):null},input:function(n){n.target.composing||e.$set(t,"namn",n.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.moment,expression:"post.moment"}],domProps:{value:t.moment},on:{keyup:function(n){return n.type.indexOf("key")||13===n.keyCode?e.updatePost(t.namn,t.moment,t.omdome,t._id):null},input:function(n){n.target.composing||e.$set(t,"moment",n.target.value)}}}),n("select",{directives:[{name:"model",rawName:"v-model",value:t.omdome,expression:"post.omdome"}],on:{keyup:function(n){return n.type.indexOf("key")||13===n.keyCode?e.updatePost(t.namn,t.moment,t.omdome,t._id):null},change:function(n){var o=Array.prototype.filter.call(n.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(t,"omdome",n.target.multiple?o:o[0])}}},[n("option",{attrs:{value:"A"}},[e._v("A")]),n("option",{attrs:{value:"B"}},[e._v("B")]),n("option",{attrs:{value:"C"}},[e._v("C")]),n("option",{attrs:{value:"D"}},[e._v("D")]),n("option",{attrs:{value:"E"}},[e._v("E")]),n("option",{attrs:{value:"F"}},[e._v("F")])])]),n("button",{attrs:{type:"submit"},on:{click:function(n){return e.updatePost(t.namn,t.moment,t.omdome,t._id)}}},[e._v("Spara")]),n("button",{attrs:{type:"reset"},on:{click:function(t){return e.cancelEdit()}}},[e._v("Avbryt")])]):n("div",[e._v(" "+e._s(t.createdAt.getDate()+"/"+t.createdAt.getMonth()+"/"+t.createdAt.getFullYear())),n("br"),n("div",{staticClass:"whole-container"},[n("div",{staticClass:"text-container"},[n("p",{staticClass:"text"},[e._v("Namn"),n("br"),n("br"),e._v(e._s(t.namn))]),n("p",{staticClass:"text"},[e._v("Moment"),n("br"),n("br"),e._v(e._s(t.moment))]),n("p",{staticClass:"text"},[e._v("Omdöme"),n("br"),n("br"),e._v(e._s(t.omdome))])]),n("div",{staticClass:"edit-section"},[n("button",{staticClass:"edit",on:{click:function(n){e.editPost=t._id}}},[e._v("✎")]),n("button",{staticClass:"delete",on:{click:function(t){return e.$vm2.open("modal-1")}}},[e._v("🗑")])]),n("modal-vue",{attrs:{name:"modal-1",headerOptions:{title:"Vill du radera detta omdöme?"},footerOptions:{btn1:"Avbryt",btn2:"Radera",btn2Style:{backgroundColor:"red"},btn2OnClick:function(){e.deletePost(t._id)},btn1OnClick:function(){e.$vm2.close("modal-1")}}},on:{"on-close":function(t){return e.$vm2.close("modal-1")}}},[e._v(" Detta går inte att ångra senare! ")])],1)])])})),0)])},i=[],u=n("1da1"),c=(n("4de4"),n("caad"),n("2532"),n("ac1f"),n("841c"),n("96cf"),n("5530")),m=n("d4ec"),l=n("bee2"),d=(n("d3b7"),n("d81d"),n("bc3a")),p=n.n(d),v="api/posts/",f=function(){function e(){Object(m["a"])(this,e)}return Object(l["a"])(e,null,[{key:"getPosts",value:function(){return new Promise((function(e,t){p.a.get(v).then((function(t){var n=t.data;e(n.map((function(e){return Object(c["a"])(Object(c["a"])({},e),{},{namn:e.namn,moment:e.moment,omdome:e.omdome,createdAt:new Date(e.createdAt)})})))})).catch((function(e){t(e)}))}))}},{key:"insertPost",value:function(e,t,n){if(e&&t&&n>"")return p.a.post(v,{namn:e,moment:t,omdome:n});console.log("Fel "+n)}},{key:"deletePost",value:function(e){return p.a.delete(v+"delete/"+e)}},{key:"updatePost",value:function(e,t,n,o){p.a.put(v+"update/"+o,{namn:e,moment:t,omdome:n})}}]),e}(),g=f,h={name:"PostComponent",data:function(){return{posts:[],error:"",namn:"",moment:"",omdome:"",editPost:null,search:""}},created:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,g.getPosts();case 3:e.posts=t.sent,t.next=9;break;case 6:t.prev=6,t.t0=t["catch"](0),e.error=t.t0.message;case 9:case"end":return t.stop()}}),t,null,[[0,6]])})))()},methods:{createPost:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,g.insertPost(e.namn,e.moment,e.omdome);case 2:return t.next=4,g.getPosts();case 4:e.posts=t.sent;case 5:case"end":return t.stop()}}),t)})))()},deletePost:function(e){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,g.deletePost(e);case 2:return t.$vm2.close("modal-1"),n.next=5,g.getPosts();case 5:t.posts=n.sent;case 6:case"end":return n.stop()}}),n)})))()},updatePost:function(e,t,n,o){var r=this;return Object(u["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,g.updatePost(e,t,n,o);case 2:r.editPost=null;case 3:case"end":return a.stop()}}),a)})))()},cancelEdit:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,g.getPosts();case 2:e.posts=t.sent,e.editPost=null;case 4:case"end":return t.stop()}}),t)})))()},test:function(e){console.log(JSON.stringify(e))}},computed:{filteredList:function(){var e=this;return this.posts.filter((function(t){var n=e;return t.namn.toLowerCase().includes(n.search.toLowerCase())}))}}},_=h,b=(n("4fa6"),n("2877")),y=Object(b["a"])(_,s,i,!1,null,"70a7733a",null),P=y.exports,w={name:"App",components:{PostComponent:P}},x=w,O=(n("034f"),Object(b["a"])(x,r,a,!1,null,null,null)),k=O.exports,C=n("5175");o["a"].use(C["a"],{componentName:"ModalVue"}),o["a"].config.productionTip=!1,new o["a"]({render:function(e){return e(k)}}).$mount("#app")},"85ec":function(e,t,n){},cf05:function(e,t,n){e.exports=n.p+"img/logo.c30ee577.png"}});
//# sourceMappingURL=app.b42b243f.js.map