(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1fe6e0c0"],{"01e3":function(t,e,n){"use strict";n.d(e,"a",(function(){return b}));var a=n("2f79"),r=n("b42e"),i=n("c637"),o=n("a723"),s=n("9b76"),c=n("365c"),l=n("cf75");function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var d=Object(l["d"])({label:Object(l["c"])(o["t"]),role:Object(l["c"])(o["t"],"status"),small:Object(l["c"])(o["g"],!1),tag:Object(l["c"])(o["t"],"span"),type:Object(l["c"])(o["t"],"border"),variant:Object(l["c"])(o["t"])},i["pb"]),b=Object(a["c"])({name:i["pb"],functional:!0,props:d,render:function(t,e){var n,a=e.props,i=e.data,o=e.slots,l=e.scopedSlots,d=o(),b=l||{},f=Object(c["b"])(s["s"],{},b,d)||a.label;return f&&(f=t("span",{staticClass:"sr-only"},f)),t(a.tag,Object(r["a"])(i,{attrs:{role:f?a.role||"status":null,"aria-hidden":f?null:"true"},class:(n={},u(n,"spinner-".concat(a.type),a.type),u(n,"spinner-".concat(a.type,"-sm"),a.small),u(n,"text-".concat(a.variant),a.variant),n)}),[f||t()])}})},"0e6e":function(t,e,n){"use strict";n("8ef4")},3710:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-overlay",{attrs:{show:t.fluxListLoading,variant:"transparent",blur:"5px"}},[n("b-card",[n("b-row",[n("b-col",{staticClass:"my-1",attrs:{md:"4",sm:"4"}},[n("b-form-group",{staticClass:"mb-0"},[n("label",{staticClass:"d-inline-block text-left mr-50"},[t._v("Per page")]),n("b-form-select",{staticClass:"w-50",attrs:{id:"perPageSelect",size:"sm",options:t.pageOptions},model:{value:t.perPage,callback:function(e){t.perPage=e},expression:"perPage"}})],1)],1),n("b-col",{staticClass:"my-1",attrs:{md:"8"}},[n("b-form-group",{staticClass:"mb-0",attrs:{label:"Filter","label-cols-sm":"1","label-align-sm":"right","label-for":"filterInput"}},[n("b-input-group",{attrs:{size:"sm"}},[n("b-form-input",{attrs:{id:"filterInput",type:"search",placeholder:"Type to Search"},model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}}),n("b-input-group-append",[n("b-button",{attrs:{disabled:!t.filter},on:{click:function(e){t.filter=""}}},[t._v(" Clear ")])],1)],1)],1)],1),n("b-col",{attrs:{cols:"12"}},[n("b-table",{staticClass:"fluxnode-table",attrs:{striped:"",hover:"",responsive:"","per-page":t.perPage,"current-page":t.currentPage,items:t.items,fields:t.fields,"sort-by":t.sortBy,"sort-desc":t.sortDesc,"sort-direction":t.sortDirection,filter:t.filter,"filter-included-fields":t.filterOn},on:{"update:sortBy":function(e){t.sortBy=e},"update:sort-by":function(e){t.sortBy=e},"update:sortDesc":function(e){t.sortDesc=e},"update:sort-desc":function(e){t.sortDesc=e},filtered:t.onFiltered},scopedSlots:t._u([{key:"cell(show_details)",fn:function(e){return[n("a",{on:{click:e.toggleDetails}},[e.detailsShowing?t._e():n("v-icon",{attrs:{name:"chevron-down"}}),e.detailsShowing?n("v-icon",{attrs:{name:"chevron-up"}}):t._e()],1)]}},{key:"cell(payment_address)",fn:function(e){return[t._v(" "+t._s(e.item.payment_address||"Node Expired")+" ")]}},{key:"row-details",fn:function(e){return[n("b-card",{staticClass:"mx-2"},[e.item.collateral?n("list-entry",{attrs:{title:"Collateral",data:e.item.collateral}}):t._e(),e.item.lastpaid?n("list-entry",{attrs:{title:"Last Paid",data:new Date(1e3*e.item.lastpaid).toLocaleString("en-GB",t.timeoptions.shortDate)}}):t._e(),e.item.activesince?n("list-entry",{attrs:{title:"Active Since",data:new Date(1e3*e.item.activesince).toLocaleString("en-GB",t.timeoptions.shortDate)}}):t._e(),e.item.last_paid_height?n("list-entry",{attrs:{title:"Last Paid Height",data:e.item.last_paid_height.toFixed(0)}}):t._e(),e.item.confirmed_height?n("list-entry",{attrs:{title:"Confirmed Height",data:e.item.confirmed_height.toFixed(0)}}):t._e(),e.item.last_confirmed_height?n("list-entry",{attrs:{title:"Last Confirmed Height",data:e.item.last_confirmed_height.toFixed(0)}}):t._e(),e.item.rank>=0?n("list-entry",{attrs:{title:"Rank",data:e.item.rank.toFixed(0)}}):t._e()],1)]}}])})],1),n("b-col",{attrs:{cols:"12"}},[n("b-pagination",{staticClass:"my-0",attrs:{"total-rows":t.totalRows,"per-page":t.perPage,align:"center",size:"sm"},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}}),n("span",{staticClass:"table-total"},[t._v("Total: "+t._s(t.totalRows))])],1)],1)],1)],1)},r=[],i=n("c7eb"),o=n("1da1"),s=(n("d81d"),n("4de4"),n("d3b7"),n("159b"),n("14d9"),n("205f")),c=n("29a1"),l=n("a15b"),u=n("b28b"),d=n("26d2"),b=n("8226"),f=n("8361"),p=n("5e12"),m=n("4797"),g=n("ccc0"),h=n("1947"),O=n("9b03"),y=n("b307"),v=n("9e7b"),j=n("6076"),_=n("c9ae"),k={components:{BCard:s["a"],BTable:c["a"],BRow:l["a"],BCol:u["a"],BPagination:d["a"],BFormGroup:b["a"],BFormSelect:f["a"],BInputGroup:p["a"],BFormInput:m["a"],BInputGroupAppend:g["a"],BButton:h["a"],BOverlay:O["a"],ListEntry:v["a"],ToastificationContent:y["a"]},data:function(){return{timeoptions:_,callResponse:{status:"",data:""},perPage:10,pageOptions:[10,25,50,100],sortBy:"",sortDesc:!1,sortDirection:"asc",items:[],filter:"",filterOn:[],fields:[{key:"show_details",label:""},{key:"payment_address",label:"Address",sortable:!0},{key:"ip",label:"IP",sortable:!0},{key:"tier",label:"Tier",sortable:!0},{key:"added_height",label:"Added Height",sortable:!0}],totalRows:1,currentPage:1,fluxListLoading:!0}},computed:{sortOptions:function(){return this.fields.filter((function(t){return t.sortable})).map((function(t){return{text:t.label,value:t.key}}))}},mounted:function(){this.daemonListFluxNodes()},methods:{daemonListFluxNodes:function(){var t=this;return Object(o["a"])(Object(i["a"])().mark((function e(){var n,a;return Object(i["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,j["a"].listFluxNodes();case 2:n=e.sent,"error"===n.data.status?t.$toast({component:y["a"],props:{title:n.data.data.message||n.data.data,icon:"InfoIcon",variant:"danger"}}):(a=t,n.data.data.forEach((function(t){a.items.push(t)})),t.totalRows=t.items.length,t.currentPage=1),t.fluxListLoading=!1;case 5:case"end":return e.stop()}}),e)})))()},onFiltered:function(t){this.totalRows=t.length,this.currentPage=1}}},w=k,x=(n("0e6e"),n("2877")),C=Object(x["a"])(w,a,r,!1,null,null,null);e["default"]=C.exports},6076:function(t,e,n){"use strict";n("99af");var a=n("b4c0");e["a"]={help:function(){return Object(a["a"])().get("/daemon/help")},helpSpecific:function(t){return Object(a["a"])().get("/daemon/help/".concat(t))},getInfo:function(){return Object(a["a"])().get("/daemon/getinfo")},getFluxNodeStatus:function(){return Object(a["a"])().get("/daemon/getzelnodestatus")},getRawTransaction:function(t,e){return Object(a["a"])().get("/daemon/getrawtransaction/".concat(t,"/").concat(e))},listFluxNodes:function(){return Object(a["a"])().get("/daemon/listzelnodes")},viewDeterministicFluxNodeList:function(){return Object(a["a"])().get("/daemon/viewdeterministiczelnodelist")},getFluxNodeCount:function(){return Object(a["a"])().get("/daemon/getzelnodecount")},getStartList:function(){return Object(a["a"])().get("/daemon/getstartlist")},getDOSList:function(){return Object(a["a"])().get("/daemon/getdoslist")},fluxCurrentWinner:function(){return Object(a["a"])().get("/daemon/fluxcurrentwinner")},getBenchmarks:function(){return Object(a["a"])().get("/daemon/getbenchmarks")},getBenchStatus:function(){return Object(a["a"])().get("/daemon/getbenchstatus")},startBenchmark:function(t){return Object(a["a"])().get("/daemon/startbenchmark",{headers:{zelidauth:t}})},stopBenchmark:function(t){return Object(a["a"])().get("/daemon/stopbenchmark",{headers:{zelidauth:t}})},getBlockchainInfo:function(){return Object(a["a"])().get("/daemon/getblockchaininfo")},getMiningInfo:function(){return Object(a["a"])().get("/daemon/getmininginfo")},getNetworkInfo:function(){return Object(a["a"])().get("/daemon/getnetworkinfo")},validateAddress:function(t,e){return Object(a["a"])().get("/daemon/validateaddress/".concat(e),{headers:{zelidauth:t}})},getWalletInfo:function(t){return Object(a["a"])().get("/daemon/getwalletinfo",{headers:{zelidauth:t}})},listFluxNodeConf:function(t){return Object(a["a"])().get("/daemon/listzelnodeconf",{headers:{zelidauth:t}})},start:function(t){return Object(a["a"])().get("/daemon/start",{headers:{zelidauth:t}})},restart:function(t){return Object(a["a"])().get("/daemon/restart",{headers:{zelidauth:t}})},stopDaemon:function(t){return Object(a["a"])().get("/daemon/stop",{headers:{zelidauth:t}})},rescanDaemon:function(t,e){return Object(a["a"])().get("/daemon/rescanblockchain/".concat(e),{headers:{zelidauth:t}})},getBlock:function(t,e){return Object(a["a"])().get("/daemon/getblock/".concat(t,"/").concat(e))},tailDaemonDebug:function(t){return Object(a["a"])().get("/flux/taildaemondebug",{headers:{zelidauth:t}})},justAPI:function(){return Object(a["a"])()},cancelToken:function(){return a["b"]}}},"8ef4":function(t,e,n){},"9b03":function(t,e,n){"use strict";n.d(e,"a",(function(){return O}));var a=n("2f79"),r=n("c637"),i=n("0056"),o=n("a723"),s=n("9b76"),c=n("3a58"),l=n("8c18"),u=n("cf75"),d=n("01e3"),b=n("ce2a");function f(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?f(Object(n),!0).forEach((function(e){m(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function m(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var g={top:0,left:0,bottom:0,right:0},h=Object(u["d"])({bgColor:Object(u["c"])(o["t"]),blur:Object(u["c"])(o["t"],"2px"),fixed:Object(u["c"])(o["g"],!1),noCenter:Object(u["c"])(o["g"],!1),noFade:Object(u["c"])(o["g"],!1),noWrap:Object(u["c"])(o["g"],!1),opacity:Object(u["c"])(o["o"],.85,(function(t){var e=Object(c["b"])(t,0);return e>=0&&e<=1})),overlayTag:Object(u["c"])(o["t"],"div"),rounded:Object(u["c"])(o["j"],!1),show:Object(u["c"])(o["g"],!1),spinnerSmall:Object(u["c"])(o["g"],!1),spinnerType:Object(u["c"])(o["t"],"border"),spinnerVariant:Object(u["c"])(o["t"]),variant:Object(u["c"])(o["t"],"light"),wrapTag:Object(u["c"])(o["t"],"div"),zIndex:Object(u["c"])(o["o"],10)},r["gb"]),O=Object(a["c"])({name:r["gb"],mixins:[l["a"]],props:h,computed:{computedRounded:function(){var t=this.rounded;return!0===t||""===t?"rounded":t?"rounded-".concat(t):""},computedVariant:function(){var t=this.variant;return t&&!this.bgColor?"bg-".concat(t):""},slotScope:function(){return{spinnerType:this.spinnerType||null,spinnerVariant:this.spinnerVariant||null,spinnerSmall:this.spinnerSmall}}},methods:{defaultOverlayFn:function(t){var e=t.spinnerType,n=t.spinnerVariant,a=t.spinnerSmall;return this.$createElement(d["a"],{props:{type:e,variant:n,small:a}})}},render:function(t){var e=this,n=this.show,a=this.fixed,r=this.noFade,o=this.noWrap,c=this.slotScope,l=t();if(n){var u=t("div",{staticClass:"position-absolute",class:[this.computedVariant,this.computedRounded],style:p(p({},g),{},{opacity:this.opacity,backgroundColor:this.bgColor||null,backdropFilter:this.blur?"blur(".concat(this.blur,")"):null})}),d=t("div",{staticClass:"position-absolute",style:this.noCenter?p({},g):{top:"50%",left:"50%",transform:"translateX(-50%) translateY(-50%)"}},[this.normalizeSlot(s["C"],c)||this.defaultOverlayFn(c)]);l=t(this.overlayTag,{staticClass:"b-overlay",class:{"position-absolute":!o||o&&!a,"position-fixed":o&&a},style:p(p({},g),{},{zIndex:this.zIndex||10}),on:{click:function(t){return e.$emit(i["f"],t)}},key:"overlay"},[u,d])}return l=t(b["a"],{props:{noFade:r,appear:!0},on:{"after-enter":function(){return e.$emit(i["O"])},"after-leave":function(){return e.$emit(i["s"])}}},[l]),o?l:t(this.wrapTag,{staticClass:"b-overlay-wrap position-relative",attrs:{"aria-busy":n?"true":null}},o?[l]:[this.normalizeSlot(),l])}})},"9e7b":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("dl",{staticClass:"row",class:t.classes},[n("dt",{staticClass:"col-sm-3"},[t._v(" "+t._s(t.title)+" ")]),t.href.length>0?n("dd",{staticClass:"col-sm-9 mb-0",class:"text-"+t.variant},[t.href.length>0?n("b-link",{attrs:{href:t.href,target:"_blank",rel:"noopener noreferrer"}},[t._v(" "+t._s(t.data.length>0?t.data:t.number!==Number.MAX_VALUE?t.number:"")+" ")]):t._e()],1):t.click?n("dd",{staticClass:"col-sm-9 mb-0",class:"text-"+t.variant,on:{click:function(e){return t.$emit("click")}}},[n("b-link",[t._v(" "+t._s(t.data.length>0?t.data:t.number!==Number.MAX_VALUE?t.number:"")+" ")])],1):n("dd",{staticClass:"col-sm-9 mb-0",class:"text-"+t.variant},[t._v(" "+t._s(t.data.length>0?t.data:t.number!==Number.MAX_VALUE?t.number:"")+" ")])])},r=[],i=(n("a9e3"),n("aa59")),o={components:{BLink:i["a"]},props:{title:{type:String,required:!0},classes:{type:String,required:!1,default:"mb-1"},data:{type:String,required:!1,default:""},number:{type:Number,required:!1,default:Number.MAX_VALUE},variant:{type:String,required:!1,default:"secondary"},href:{type:String,required:!1,default:""},click:{type:Boolean,required:!1,default:!1}}},s=o,c=n("2877"),l=Object(c["a"])(s,a,r,!1,null,null,null);e["a"]=l.exports},c9ae:function(t,e,n){"use strict";n.r(e);var a={year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"},r={year:"numeric",month:"short",day:"numeric"};e["default"]={shortDate:a,date:r}},f07e:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var a=function(){}}}]);