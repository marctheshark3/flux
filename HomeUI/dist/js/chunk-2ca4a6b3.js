(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2ca4a6b3"],{3828:function(t,e,n){"use strict";n.d(e,"a",(function(){return j}));var o=n("2f79"),a=n("c637"),i=n("0056"),r=n("a723"),c=n("9b76"),s=n("cf75"),l=n("b4ae"),u=n("8df8"),d=n("7b1e"),p=n("df44"),b=Object(o["c"])({name:a["kb"],extends:p["a"],computed:{templateType:function(){return"popover"}},methods:{renderTemplate:function(t){var e=this.title,n=this.content,o=Object(d["e"])(e)?e({}):e,a=Object(d["e"])(n)?n({}):n,i=this.html&&!Object(d["e"])(e)?{innerHTML:e}:{},r=this.html&&!Object(d["e"])(n)?{innerHTML:n}:{};return t("div",{staticClass:"popover b-popover",class:this.templateClasses,attrs:this.templateAttributes,on:this.templateListeners},[t("div",{staticClass:"arrow",ref:"arrow"}),Object(d["o"])(o)||""===o?t():t("h3",{staticClass:"popover-header",domProps:i},[o]),Object(d["o"])(a)||""===a?t():t("div",{staticClass:"popover-body",domProps:r},[a])])}}}),h=Object(o["c"])({name:a["jb"],extends:u["a"],computed:{templateType:function(){return"popover"}},methods:{getTemplate:function(){return b}}}),f=n("d82f");function m(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function g(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?m(Object(n),!0).forEach((function(e){O(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function O(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var v=Object(s["d"])(Object(f["m"])(g(g({},l["b"]),{},{content:Object(s["c"])(r["t"]),placement:Object(s["c"])(r["t"],"right"),triggers:Object(s["c"])(r["f"],i["f"])})),a["ib"]),j=Object(o["c"])({name:a["ib"],extends:l["a"],inheritAttrs:!1,props:v,methods:{getComponent:function(){return h},updateContent:function(){this.setContent(this.normalizeSlot()||this.content),this.setTitle(this.normalizeSlot(c["N"])||this.title)}}})},6076:function(t,e,n){"use strict";n("99af");var o=n("b4c0");e["a"]={help:function(){return Object(o["a"])().get("/daemon/help")},helpSpecific:function(t){return Object(o["a"])().get("/daemon/help/".concat(t))},getInfo:function(){return Object(o["a"])().get("/daemon/getinfo")},getFluxNodeStatus:function(){return Object(o["a"])().get("/daemon/getzelnodestatus")},getRawTransaction:function(t,e){return Object(o["a"])().get("/daemon/getrawtransaction/".concat(t,"/").concat(e))},listFluxNodes:function(){return Object(o["a"])().get("/daemon/listzelnodes")},viewDeterministicFluxNodeList:function(){return Object(o["a"])().get("/daemon/viewdeterministiczelnodelist")},getFluxNodeCount:function(){return Object(o["a"])().get("/daemon/getzelnodecount")},getStartList:function(){return Object(o["a"])().get("/daemon/getstartlist")},getDOSList:function(){return Object(o["a"])().get("/daemon/getdoslist")},fluxCurrentWinner:function(){return Object(o["a"])().get("/daemon/fluxcurrentwinner")},getBenchmarks:function(){return Object(o["a"])().get("/daemon/getbenchmarks")},getBenchStatus:function(){return Object(o["a"])().get("/daemon/getbenchstatus")},startBenchmark:function(t){return Object(o["a"])().get("/daemon/startbenchmark",{headers:{zelidauth:t}})},stopBenchmark:function(t){return Object(o["a"])().get("/daemon/stopbenchmark",{headers:{zelidauth:t}})},getBlockchainInfo:function(){return Object(o["a"])().get("/daemon/getblockchaininfo")},getMiningInfo:function(){return Object(o["a"])().get("/daemon/getmininginfo")},getNetworkInfo:function(){return Object(o["a"])().get("/daemon/getnetworkinfo")},validateAddress:function(t,e){return Object(o["a"])().get("/daemon/validateaddress/".concat(e),{headers:{zelidauth:t}})},getWalletInfo:function(t){return Object(o["a"])().get("/daemon/getwalletinfo",{headers:{zelidauth:t}})},listFluxNodeConf:function(t){return Object(o["a"])().get("/daemon/listzelnodeconf",{headers:{zelidauth:t}})},start:function(t){return Object(o["a"])().get("/daemon/start",{headers:{zelidauth:t}})},restart:function(t){return Object(o["a"])().get("/daemon/restart",{headers:{zelidauth:t}})},stopDaemon:function(t){return Object(o["a"])().get("/daemon/stop",{headers:{zelidauth:t}})},rescanDaemon:function(t,e){return Object(o["a"])().get("/daemon/rescanblockchain/".concat(e),{headers:{zelidauth:t}})},getBlock:function(t,e){return Object(o["a"])().get("/daemon/getblock/".concat(t,"/").concat(e))},tailDaemonDebug:function(t){return Object(o["a"])().get("/flux/taildaemondebug",{headers:{zelidauth:t}})},justAPI:function(){return Object(o["a"])()},cancelToken:function(){return o["b"]}}},7731:function(t,e,n){},"7bb2":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-card",[n("div",[n("label",{staticClass:"mr-1",attrs:{for:"sb-inline"}},[t._v("Block Height")]),n("input-spin-button",{attrs:{id:"sb-inline","repeat-step-multiplier":"100",inline:""},model:{value:t.rescanDaemonHeight,callback:function(e){t.rescanDaemonHeight=e},expression:"rescanDaemonHeight"}}),n("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"ml-1 mt-1",attrs:{id:"rescan-daemon",disabled:0===t.blockHeight,variant:"outline-primary",size:"md"}},[t._v(" Rescan Daemon ")]),n("b-popover",{ref:"popover",attrs:{target:"rescan-daemon",triggers:"click",show:t.popoverShow,placement:"auto",container:"my-container"},on:{"update:show":function(e){t.popoverShow=e}},scopedSlots:t._u([{key:"title",fn:function(){return[n("div",{staticClass:"d-flex justify-content-between align-items-center"},[n("span",[t._v("Are You Sure?")]),n("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"close",attrs:{variant:"transparent","aria-label":"Close"},on:{click:t.onClose}},[n("span",{staticClass:"d-inline-block text-white",attrs:{"aria-hidden":"true"}},[t._v("×")])])],1)]},proxy:!0}])},[n("div",[n("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"mr-1",attrs:{size:"sm",variant:"danger"},on:{click:t.onClose}},[t._v(" Cancel ")]),n("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],attrs:{size:"sm",variant:"primary"},on:{click:t.onOk}},[t._v(" Rescan Blockchain ")])],1)]),n("b-modal",{attrs:{id:"modal-center",centered:"",title:"Blockchain Rescanning","ok-only":"","ok-title":"OK"},model:{value:t.modalShow,callback:function(e){t.modalShow=e},expression:"modalShow"}},[n("b-card-text",[t._v(" The daemon will now start rescanning the blockchain. This will take up to an hour. ")])],1)],1)])},a=[],i=n("c7eb"),r=n("1da1"),c=n("205f"),s=n("1947"),l=n("3828"),u=n("6aac"),d=n("d6e4"),p=n("b307"),b=n("e009"),h=n("6076"),f=n("d052"),m={components:{BCard:c["a"],BButton:s["a"],BPopover:l["a"],BModal:u["a"],BCardText:d["a"],InputSpinButton:f["a"],ToastificationContent:p["a"]},directives:{Ripple:b["a"]},data:function(){return{blockHeight:0,rescanDaemonHeight:0,popoverShow:!1,modalShow:!1}},mounted:function(){this.daemonGetInfo()},methods:{daemonGetInfo:function(){var t=this;return Object(r["a"])(Object(i["a"])().mark((function e(){var n;return Object(i["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,h["a"].getInfo();case 2:n=e.sent,"error"===n.data.status?t.$toast({component:p["a"],props:{title:n.data.data.message||n.data.data,icon:"InfoIcon",variant:"danger"}}):t.blockHeight=n.data.data.blocks;case 4:case"end":return e.stop()}}),e)})))()},onClose:function(){this.popoverShow=!1},onOk:function(){var t=this;this.popoverShow=!1,this.modalShow=!0;var e=localStorage.getItem("zelidauth"),n=this.rescanDaemonHeight>0?this.rescanDaemonHeight:0;h["a"].rescanDaemon(e,n).then((function(e){t.$toast({component:p["a"],props:{title:e.data.data.message||e.data.data,icon:"InfoIcon",variant:"success"}})})).catch((function(){t.$toast({component:p["a"],props:{title:"Error while trying to rescan Daemon",icon:"InfoIcon",variant:"danger"}})}))}}},g=m,O=n("2877"),v=Object(O["a"])(g,o,a,!1,null,null,null);e["default"]=v.exports},b4ae:function(t,e,n){"use strict";n.d(e,"b",(function(){return y})),n.d(e,"a",(function(){return S}));var o,a,i=n("2f79"),r=n("c637"),c=n("0056"),s=n("a723"),l=n("ca88"),u=n("8878"),d=n("be29"),p=n("7b1e"),b=n("d82f"),h=n("cf75"),f=n("39ad"),m=n("8c18"),g=n("8df8");function O(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function v(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?O(Object(n),!0).forEach((function(e){j(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function j(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var w="disabled",k=c["W"]+w,$="show",C=c["W"]+$,y=Object(h["d"])((o={boundary:Object(h["c"])([l["c"],s["p"],s["t"]],"scrollParent"),boundaryPadding:Object(h["c"])(s["o"],50),container:Object(h["c"])([l["c"],s["p"],s["t"]]),customClass:Object(h["c"])(s["t"]),delay:Object(h["c"])(s["n"],50)},j(o,w,Object(h["c"])(s["g"],!1)),j(o,"fallbackPlacement",Object(h["c"])(s["f"],"flip")),j(o,"id",Object(h["c"])(s["t"])),j(o,"noFade",Object(h["c"])(s["g"],!1)),j(o,"noninteractive",Object(h["c"])(s["g"],!1)),j(o,"offset",Object(h["c"])(s["o"],0)),j(o,"placement",Object(h["c"])(s["t"],"top")),j(o,$,Object(h["c"])(s["g"],!1)),j(o,"target",Object(h["c"])([l["c"],l["d"],s["k"],s["p"],s["t"]],void 0,!0)),j(o,"title",Object(h["c"])(s["t"])),j(o,"triggers",Object(h["c"])(s["f"],"hover focus")),j(o,"variant",Object(h["c"])(s["t"])),o),r["Cb"]),S=Object(i["c"])({name:r["Cb"],mixins:[m["a"],u["a"]],inheritAttrs:!1,props:y,data:function(){return{localShow:this[$],localTitle:"",localContent:""}},computed:{templateData:function(){return v({title:this.localTitle,content:this.localContent,interactive:!this.noninteractive},Object(b["k"])(this.$props,["boundary","boundaryPadding","container","customClass","delay","fallbackPlacement","id","noFade","offset","placement","target","target","triggers","variant",w]))},templateTitleContent:function(){var t=this.title,e=this.content;return{title:t,content:e}}},watch:(a={},j(a,$,(function(t,e){t!==e&&t!==this.localShow&&this.$_toolpop&&(t?this.$_toolpop.show():this.$_toolpop.forceHide())})),j(a,w,(function(t){t?this.doDisable():this.doEnable()})),j(a,"localShow",(function(t){this.$emit(C,t)})),j(a,"templateData",(function(){var t=this;this.$nextTick((function(){t.$_toolpop&&t.$_toolpop.updateData(t.templateData)}))})),j(a,"templateTitleContent",(function(){this.$nextTick(this.updateContent)})),a),created:function(){this.$_toolpop=null},updated:function(){this.$nextTick(this.updateContent)},beforeDestroy:function(){this.$off(c["B"],this.doOpen),this.$off(c["g"],this.doClose),this.$off(c["j"],this.doDisable),this.$off(c["l"],this.doEnable),this.$_toolpop&&(this.$_toolpop.$destroy(),this.$_toolpop=null)},mounted:function(){var t=this;this.$nextTick((function(){var e=t.getComponent();t.updateContent();var n=Object(d["a"])(t)||Object(d["a"])(t.bvParent),o=t.$_toolpop=Object(f["a"])(t,e,{_scopeId:n||void 0});o.updateData(t.templateData),o.$on(c["N"],t.onShow),o.$on(c["O"],t.onShown),o.$on(c["t"],t.onHide),o.$on(c["s"],t.onHidden),o.$on(c["k"],t.onDisabled),o.$on(c["m"],t.onEnabled),t[w]&&t.doDisable(),t.$on(c["B"],t.doOpen),t.$on(c["g"],t.doClose),t.$on(c["j"],t.doDisable),t.$on(c["l"],t.doEnable),t.localShow&&o.show()}))},methods:{getComponent:function(){return g["a"]},updateContent:function(){this.setTitle(this.normalizeSlot()||this.title)},setTitle:function(t){t=Object(p["o"])(t)?"":t,this.localTitle!==t&&(this.localTitle=t)},setContent:function(t){t=Object(p["o"])(t)?"":t,this.localContent!==t&&(this.localContent=t)},onShow:function(t){this.$emit(c["N"],t),t&&(this.localShow=!t.defaultPrevented)},onShown:function(t){this.localShow=!0,this.$emit(c["O"],t)},onHide:function(t){this.$emit(c["t"],t)},onHidden:function(t){this.$emit(c["s"],t),this.localShow=!1},onDisabled:function(t){t&&t.type===c["k"]&&(this.$emit(k,!0),this.$emit(c["k"],t))},onEnabled:function(t){t&&t.type===c["m"]&&(this.$emit(k,!1),this.$emit(c["m"],t))},doOpen:function(){!this.localShow&&this.$_toolpop&&this.$_toolpop.show()},doClose:function(){this.localShow&&this.$_toolpop&&this.$_toolpop.hide()},doDisable:function(){this.$_toolpop&&this.$_toolpop.disable()},doEnable:function(){this.$_toolpop&&this.$_toolpop.enable()}},render:function(t){return t()}})},b4fd:function(t,e,n){"use strict";n("7731")},d052:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-input-group",[n("b-input-group-prepend",[n("b-button",{staticClass:"py-0",attrs:{variant:"outline-dark",size:"sm"},on:{click:function(e){return t.valueChange(t.value-1)}}},[n("b-icon",{attrs:{icon:"dash","font-scale":"1.6"}})],1)],1),n("b-form-input",{staticClass:"border-secondary text-center",attrs:{id:t.id,size:t.size,value:t.value,type:"number",min:"0",number:""},on:{update:t.valueChange}}),n("b-input-group-append",[n("b-button",{staticClass:"py-0",attrs:{variant:"outline-dark",size:"sm"},on:{click:function(e){return t.valueChange(t.value+1)}}},[n("b-icon",{attrs:{icon:"plus","font-scale":"1.6"}})],1)],1)],1)},a=[],i=(n("caad"),n("a9e3"),n("0759")),r=n("1947"),c=n("4797"),s=n("7386"),l=n("5e12"),u=n("3656"),d=n("ccc0"),p={name:"InputSpinButton",components:{BIcon:i["a"],BButton:r["a"],BFormInput:c["a"],BIconDash:s["b"],BIconPlus:s["d"],BInputGroup:l["a"],BInputGroupPrepend:u["a"],BInputGroupAppend:d["a"]},props:{id:{type:String,required:!0},size:{type:String,required:!1,default:"md",validator:function(t){return["sm","md","lg"].includes(t)}},value:{type:Number,required:!0}},methods:{valueChange:function(t){t<=0?this.$emit("input",0):this.$emit("input",t)}}},b=p,h=(n("b4fd"),n("2877")),f=Object(h["a"])(b,o,a,!1,null,"2f5aba03",null);e["a"]=f.exports},d6e4:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var o=n("2f79"),a=n("b42e"),i=n("c637"),r=n("a723"),c=n("cf75"),s=Object(c["d"])({textTag:Object(c["c"])(r["t"],"p")},i["p"]),l=Object(o["c"])({name:i["p"],functional:!0,props:s,render:function(t,e){var n=e.props,o=e.data,i=e.children;return t(n.textTag,Object(a["a"])(o,{staticClass:"card-text"}),i)}})}}]);