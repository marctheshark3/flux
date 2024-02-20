"use strict";(globalThis["webpackChunkflux"]=globalThis["webpackChunkflux"]||[]).push([[9875],{34547:(t,e,a)=>{a.d(e,{Z:()=>u});var r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"toastification"},[e("div",{staticClass:"d-flex align-items-start"},[e("b-avatar",{staticClass:"mr-75 flex-shrink-0",attrs:{variant:t.variant,size:"1.8rem"}},[e("feather-icon",{attrs:{icon:t.icon,size:"15"}})],1),e("div",{staticClass:"d-flex flex-grow-1"},[e("div",[t.title?e("h5",{staticClass:"mb-0 font-weight-bolder toastification-title",class:`text-${t.variant}`,domProps:{textContent:t._s(t.title)}}):t._e(),t.text?e("small",{staticClass:"d-inline-block text-body",domProps:{textContent:t._s(t.text)}}):t._e()]),e("span",{staticClass:"cursor-pointer toastification-close-icon ml-auto",on:{click:function(e){return t.$emit("close-toast")}}},[t.hideClose?t._e():e("feather-icon",{staticClass:"text-body",attrs:{icon:"XIcon"}})],1)])],1)])},s=[],n=a(47389);const l={components:{BAvatar:n.SH},props:{variant:{type:String,default:"primary"},icon:{type:String,default:null},title:{type:String,default:null},text:{type:String,default:null},hideClose:{type:Boolean,default:!1}}},i=l;var c=a(1001),o=(0,c.Z)(i,r,s,!1,null,"22d964ca",null);const u=o.exports},59875:(t,e,a)=>{a.r(e),a.d(e,{default:()=>p});var r=function(){var t=this,e=t._self._c;return e("b-card",[e("list-entry",{attrs:{title:"Status",data:t.callResponse.data.status}}),e("list-entry",{attrs:{title:"Benchmarking",data:t.callResponse.data.benchmarking}}),e("list-entry",{attrs:{title:"Flux",data:t.callResponse.data.zelback||t.callResponse.data.flux}}),t.callResponse.data.errors?e("list-entry",{attrs:{title:"Error",data:t.callResponse.data.errors,variant:"danger"}}):t._e()],1)},s=[],n=a(86855),l=a(34547),i=a(51748),c=a(39569);const o=a(63005),u={components:{ListEntry:i.Z,BCard:n._,ToastificationContent:l.Z},data(){return{timeoptions:o,callResponse:{status:"",data:""}}},mounted(){this.benchmarkGetStatus()},methods:{async benchmarkGetStatus(){const t=await c.Z.getStatus();"error"===t.data.status?this.$toast({component:l.Z,props:{title:t.data.data.message||t.data.data,icon:"InfoIcon",variant:"danger"}}):(this.callResponse.status=t.data.status,this.callResponse.data=t.data.data)}}},d=u;var h=a(1001),m=(0,h.Z)(d,r,s,!1,null,null,null);const p=m.exports},51748:(t,e,a)=>{a.d(e,{Z:()=>u});var r=function(){var t=this,e=t._self._c;return e("dl",{staticClass:"row",class:t.classes},[e("dt",{staticClass:"col-sm-3"},[t._v(" "+t._s(t.title)+" ")]),t.href.length>0?e("dd",{staticClass:"col-sm-9 mb-0",class:`text-${t.variant}`},[t.href.length>0?e("b-link",{attrs:{href:t.href,target:"_blank",rel:"noopener noreferrer"}},[t._v(" "+t._s(t.data.length>0?t.data:t.number!==Number.MAX_VALUE?t.number:"")+" ")]):t._e()],1):t.click?e("dd",{staticClass:"col-sm-9 mb-0",class:`text-${t.variant}`,on:{click:function(e){return t.$emit("click")}}},[e("b-link",[t._v(" "+t._s(t.data.length>0?t.data:t.number!==Number.MAX_VALUE?t.number:"")+" ")])],1):e("dd",{staticClass:"col-sm-9 mb-0",class:`text-${t.variant}`},[t._v(" "+t._s(t.data.length>0?t.data:t.number!==Number.MAX_VALUE?t.number:"")+" ")])])},s=[],n=a(67347);const l={components:{BLink:n.we},props:{title:{type:String,required:!0},classes:{type:String,required:!1,default:"mb-1"},data:{type:String,required:!1,default:""},number:{type:Number,required:!1,default:Number.MAX_VALUE},variant:{type:String,required:!1,default:"secondary"},href:{type:String,required:!1,default:""},click:{type:Boolean,required:!1,default:!1}}},i=l;var c=a(1001),o=(0,c.Z)(i,r,s,!1,null,null,null);const u=o.exports},63005:(t,e,a)=>{a.r(e),a.d(e,{default:()=>n});const r={year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"},s={year:"numeric",month:"short",day:"numeric"},n={shortDate:r,date:s}},39569:(t,e,a)=>{a.d(e,{Z:()=>s});var r=a(80914);const s={start(t){return(0,r.Z)().get("/benchmark/start",{headers:{zelidauth:t}})},restart(t){return(0,r.Z)().get("/benchmark/restart",{headers:{zelidauth:t}})},getStatus(){return(0,r.Z)().get("/benchmark/getstatus")},restartNodeBenchmarks(t){return(0,r.Z)().get("/benchmark/restartnodebenchmarks",{headers:{zelidauth:t}})},signFluxTransaction(t,e){return(0,r.Z)().get(`/benchmark/signzelnodetransaction/${e}`,{headers:{zelidauth:t}})},helpSpecific(t){return(0,r.Z)().get(`/benchmark/help/${t}`)},help(){return(0,r.Z)().get("/benchmark/help")},stop(t){return(0,r.Z)().get("/benchmark/stop",{headers:{zelidauth:t}})},getBenchmarks(){return(0,r.Z)().get("/benchmark/getbenchmarks")},getInfo(){return(0,r.Z)().get("/benchmark/getinfo")},tailBenchmarkDebug(t){return(0,r.Z)().get("/flux/tailbenchmarkdebug",{headers:{zelidauth:t}})},justAPI(){return(0,r.Z)()},cancelToken(){return r.S}}}}]);