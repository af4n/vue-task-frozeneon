(function(e){function t(t){for(var s,r,i=t[0],g=t[1],o=t[2],u=0,A=[];u<i.length;u++)r=i[u],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&A.push(n[r][0]),n[r]=0;for(s in g)Object.prototype.hasOwnProperty.call(g,s)&&(e[s]=g[s]);l&&l(t);while(A.length)A.shift()();return c.push.apply(c,o||[]),a()}function a(){for(var e,t=0;t<c.length;t++){for(var a=c[t],s=!0,i=1;i<a.length;i++){var g=a[i];0!==n[g]&&(s=!1)}s&&(c.splice(t--,1),e=r(r.s=a[0]))}return e}var s={},n={app:0},c=[];function r(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=s,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)r.d(a,s,function(t){return e[t]}.bind(null,s));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/vue-task-frozeneon/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],g=i.push.bind(i);i.push=t,i=i.slice();for(var o=0;o<i.length;o++)t(i[o]);var l=g;c.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"4e41":function(e,t,a){},"4f3c":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"container"},[a("Modal",{attrs:{packageInfo:e.packageInfo,pack:e.pack}}),a("Search",{on:{search:e.search}}),a("Table",{attrs:{packages:e.resultPackages},on:{detailedInfo:e.detailedInfo}}),a("Footer")],1)])},c=[],r=a("2909"),i=a("5530"),g=(a("4de4"),a("caad"),a("2532"),a("b0c0"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"modal fade",attrs:{id:"modal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[e._v(e._s(e.pack.name))]),e._m(0)]),a("div",{staticClass:"modal-body"},[a("div",[e._v(" Type: "+e._s(e.pack.type)+" ")]),a("div",[e._v(" Hits: "+e._s(e.pack.hits)+" ")]),e.packageInfo.tags.latest?a("div",[e._v(" Latest version: "+e._s(e.packageInfo.tags.latest)+" ")]):e._e(),e.packageInfo.tags.next?a("div",[e._v(" Next version: "+e._s(e.packageInfo.tags.next)+" ")]):e._e(),e.packageInfo.tags.previous?a("div",[e._v(" Previous version: "+e._s(e.packageInfo.tags.previous)+" ")]):e._e()]),e._m(1)])])])}),o=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[e._v("×")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-primary",attrs:{type:"button","data-dismiss":"modal"}},[e._v("Ok")])])}],l={name:"Modal",props:{packageInfo:Object,pack:Object}},u=l,A=a("2877"),d=Object(A["a"])(u,g,o,!1,null,null,null),I=d.exports,p=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"input-group mt-3 mb-3"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.searchValue,expression:"searchValue"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Search"},domProps:{value:e.searchValue},on:{input:function(t){t.target.composing||(e.searchValue=t.target.value)}}}),a("div",{staticClass:"input-group-append"},[a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(t){return e.$emit("search",e.searchValue)}}},[e._v("Search")])])])},k=[],B={name:"Search",data:function(){return{searchValue:""}}},f=B,E=Object(A["a"])(f,p,k,!1,null,null,null),Q=E.exports,h=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("table",{staticClass:"table"},[e._m(0),a("tbody",e._l(e.paginatedPackages,(function(t,s){return a("tr",{key:s},[a("td",{staticClass:"name",attrs:{"data-toggle":"modal","data-target":"#modal"},on:{click:function(a){return e.$emit("detailedInfo",t)}}},[e._v(e._s(t.name)+" ")]),a("td",[e._v(e._s(t.type))]),a("td",[e._v(e._s(t.hits))])])})),0)]),a("Pagination",{attrs:{pages:e.pages,pageNumber:e.pageNumber},on:{pageClick:e.pageClick}})],1)},C=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("thead",[a("tr",[a("th",{attrs:{scope:"col"}},[e._v("Name")]),a("th",{attrs:{scope:"col"}},[e._v("Type")]),a("th",{attrs:{scope:"col"}},[e._v("Hits")])])])}],m=(a("fb6a"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("nav",[a("ul",{staticClass:"pagination"},e._l(e.pages,(function(t,s){return a("li",{key:s,staticClass:"page-item",class:{active:e.pageNumber===t},on:{click:function(a){return e.$emit("pageClick",t)}}},[a("a",{staticClass:"page-link"},[e._v(e._s(t))])])})),0)])}),v=[],y=(a("a9e3"),{name:"Pagination",props:{pages:Number,pageNumber:Number}}),S=y,b=(a("c1d2"),Object(A["a"])(S,m,v,!1,null,"70005490",null)),x=b.exports,H={name:"Table",components:{Pagination:x},props:{packages:Array,modalShow:Boolean},data:function(){return{pageNumber:1,packagesPerPage:10}},computed:{pages:function(){return Math.ceil(this.packages.length/this.packagesPerPage)},paginatedPackages:function(){var e=(this.pageNumber-1)*this.packagesPerPage,t=e+this.packagesPerPage;return this.packages.slice(e,t)}},methods:{pageClick:function(e){this.pageNumber=e}}},O=H,_=(a("d143"),Object(A["a"])(O,h,C,!1,null,null,null)),D=_.exports,L=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},P=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"footer"},[s("div",{staticClass:"photo"},[s("img",{attrs:{src:a("cf05"),alt:"img"}})]),s("div",{staticClass:"content"},[s("div",[e._v("Alexey Afanaskin")]),s("div",[s("a",{attrs:{href:"https://github.com/af4n"}},[e._v("https://github.com/af4n")])])])])}],J={name:"Footer"},Y=J,Z=(a("94ae"),Object(A["a"])(Y,L,P,!1,null,"442833d0",null)),M=Z.exports,j=a("2f62"),V={name:"App",components:{Modal:I,Search:Q,Table:D,Footer:M},data:function(){return{modalShow:!1,pack:{},searchPackages:[]}},computed:Object(i["a"])(Object(i["a"])({},Object(j["c"])(["packages","packageInfo","searchValue"])),{},{resultPackages:function(){return this.searchPackages.length?this.searchPackages:this.packages}}),methods:Object(i["a"])(Object(i["a"])({},Object(j["b"])(["getPackages","getPackageInfo","getSearchValue"])),{},{detailedInfo:function(e){this.getPackageInfo(e),this.pack=e},search:function(e){this.getSearchValue(e)},seacrhByValue:function(e){this.searchPackages=Object(r["a"])(this.packages),this.searchPackages=e?this.searchPackages.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())})):this.packages}}),watch:{searchValue:function(){this.seacrhByValue(this.searchValue)}},mounted:function(){var e=this;this.getPackages().then((function(t){t&&e.seacrhByValue(e.searchValue)}))}},w=V,W=(a("5c0b"),Object(A["a"])(w,n,c,!1,null,null,null)),N=W.exports,$=(a("99af"),a("bc3a")),z=a.n($);s["a"].use(j["a"]);var T=new j["a"].Store({state:{packages:[],packageInfo:{},searchValue:""},mutations:{setPackages:function(e,t){e.packages=t},setPackageInfo:function(e,t){e.packageInfo=t},setSearchValue:function(e,t){e.searchValue=t}},actions:{getPackages:function(e){var t=e.commit;return z.a.get("https://data.jsdelivr.com/v1/stats/packages").then((function(e){t("setPackages",e.data)}))},getPackageInfo:function(e,t){var a=e.commit;return z.a.get("https://data.jsdelivr.com/v1/package/".concat(t.type,"/").concat(t.name)).then((function(e){a("setPackageInfo",e.data)}))},getSearchValue:function(e,t){var a=e.commit;a("setSearchValue",t)}},getters:{packages:function(e){return e.packages},packageInfo:function(e){return e.packageInfo},searchValue:function(e){return e.searchValue}},modules:{}});a("3e48");s["a"].config.productionTip=!1,new s["a"]({store:T,render:function(e){return e(N)}}).$mount("#app")},"5c0b":function(e,t,a){"use strict";a("9c0c")},"94ae":function(e,t,a){"use strict";a("a9dd")},"9c0c":function(e,t,a){},a9dd:function(e,t,a){},c1d2:function(e,t,a){"use strict";a("4f3c")},cf05:function(e,t){e.exports="data:image/png;base64,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"},d143:function(e,t,a){"use strict";a("4e41")}});
//# sourceMappingURL=app.368a0310.js.map