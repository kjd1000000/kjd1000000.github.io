(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3f380e3e"],{"0c13":function(t,e,n){"use strict";n("86f9")},"3c34":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container documentation-container"},[n("iframeDseign"),n("div",{staticClass:"block1"}),n("div",{staticClass:"block2"})],1)},a=[],s=n("7c70"),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"designPage"},[n("iframe",{staticClass:"designPage",attrs:{src:"http://form.making.link/basic-version/#/zh-CN/",frameborder:"0"},on:{load:t.load}})])},o=[],r={components:{},data:function(){return{loading:!0,timmer:null}},deactivated:function(){clearTimeout(this.timmer),window.onkeydown=window.onkeyup=window.onkeypress=function(t){t.keyCode=123},window.oncontextmenu=function(){}},methods:{load:function(){this.loading=!1,console.log(12312)}}},l=r,u=(n("487a"),n("4ac2")),f=Object(u["a"])(l,c,o,!1,null,"05d9a046",null),d=f.exports,p={name:"Documentation",components:{DropdownMenu:s["a"],iframeDseign:d},data:function(){return{articleList:[{title:"基础篇",href:"https://juejin.im/post/59097cd7a22b9d0065fb61d2"},{title:"登录权限篇",href:"https://juejin.im/post/591aa14f570c35006961acac"},{title:"实战篇",href:"https://juejin.im/post/593121aa0ce4630057f70d35"},{title:"vue-admin-template 篇",href:"https://juejin.im/post/595b4d776fb9a06bbe7dba56"},{title:"v4.0 篇",href:"https://juejin.im/post/5c92ff94f265da6128275a85"},{title:"自行封装 component",href:"https://segmentfault.com/a/1190000009090836"},{title:"优雅的使用 icon",href:"https://juejin.im/post/59bb864b5188257e7a427c09"},{title:"webpack4（上）",href:"https://juejin.im/post/59bb864b5188257e7a427c09"},{title:"webpack4（下）",href:"https://juejin.im/post/5b5d6d6f6fb9a04fea58aabc"}]}}},m=p,h=(n("0c13"),Object(u["a"])(m,i,a,!1,null,"24922c6f",null));e["default"]=h.exports},"487a":function(t,e,n){"use strict";n("a388")},"4ba3":function(t,e,n){"use strict";n("65f3")},"65f3":function(t,e,n){},"7c70":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"share-dropdown-menu",class:{active:t.isActive}},[n("div",{staticClass:"share-dropdown-menu-wrapper"},[n("span",{staticClass:"share-dropdown-menu-title",on:{click:function(e){return e.target!==e.currentTarget?null:t.clickTitle(e)}}},[t._v(t._s(t.title))]),t._l(t.items,(function(e,i){return n("div",{key:i,staticClass:"share-dropdown-menu-item"},[e.href?n("a",{attrs:{href:e.href,target:"_blank"}},[t._v(t._s(e.title))]):n("span",[t._v(t._s(e.title))])])}))],2)])},a=[],s={props:{items:{type:Array,default:function(){return[]}},title:{type:String,default:"vue"}},data:function(){return{isActive:!1}},methods:{clickTitle:function(){this.isActive=!this.isActive}}},c=s,o=(n("4ba3"),n("4ac2")),r=Object(o["a"])(c,i,a,!1,null,null,null);e["a"]=r.exports},"86f9":function(t,e,n){},a388:function(t,e,n){}}]);