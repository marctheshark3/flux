(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-24a28e3c"],{"45a8":function(t,e,s){"use strict";s("c3fa")},"464d":function(t,e,s){"use strict";s("6e6c")},"6e6c":function(t,e,s){},"7db0":function(t,e,s){"use strict";var a=s("23e7"),i=s("b727").find,l=s("44d2"),n="find",r=!0;n in[]&&Array(1)[n]((function(){r=!1})),a({target:"Array",proto:!0,forced:r},{find:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),l(n)},c3fa:function(t,e,s){},d6e4:function(t,e,s){"use strict";s.d(e,"a",(function(){return m}));var a=s("2b0e"),i=s("b42e"),l=s("c637"),n=s("a723"),r=s("cf75"),u=Object(r["d"])({textTag:Object(r["c"])(n["t"],"p")},l["p"]),m=a["default"].extend({name:l["p"],functional:!0,props:u,render:function(t,e){var s=e.props,a=e.data,l=e.children;return t(s.textTag,Object(i["a"])(a,{staticClass:"card-text"}),l)}})},f03d:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("b-overlay",{attrs:{show:t.loadingPrice,variant:"transparent",blur:"5px"}},[s("b-card",{attrs:{"no-body":""}},[s("b-card-body",[s("h4",[t._v(" Price Information: $"+t._s(t.beautifyValue(t.latestPrice,2))+" USD ")])]),s("vue-apex-charts",{attrs:{type:"area",height:"250",width:"100%",options:t.lineChart.chartOptions,series:t.lineChart.series}})],1)],1),s("b-row",{staticClass:"text-center"},[s("b-col",{attrs:{sm:"12",md:"6",lg:"4"}},[s("b-card",{attrs:{title:"Cumulus Rewards"}},[s("b-card-text",[t._v("10,000 FLUX Collateral")]),s("app-timeline",{staticClass:"mt-2"},[s("app-timeline-item",[s("div",{staticClass:"d-flex flex-sm-row flex-column flex-wrap justify-content-between mb-1 mb-sm-0"},[s("div",[s("h6",{staticClass:"mb-0"},[t._v(" "+t._s(t.beautifyValue(t.cumulusWeek/7))+" FLUX ")]),s("small",{staticClass:"mt-0"},[t._v("($"+t._s(t.beautifyValue(t.cumulusUSDRewardWeek/7))+" USD)")]),s("h6",{staticClass:"mb-0 mt-1"},[t._v(" "+t._s(t.beautifyValue(.1*t.cumulusWeek*3/7))+" FLUX Tokens ")]),s("small",{staticClass:"mt-0 mt-1"},[t._v("($"+t._s(t.beautifyValue(.1*t.cumulusUSDRewardWeek*3/7))+" USD)")]),s("h6",{staticClass:"mb-0 mt-1 invisible"},[t._v(" 0 KDA ")]),s("small",{staticClass:"mt-0 invisible"},[t._v("(0 USD)")]),s("h6",{staticClass:"mt-0 mt-1 invisible"},[t._v(" 0 USD ")])]),s("small",{staticClass:"text-muted"},[t._v("Per Day")])])]),s("app-timeline-item",[s("div",{staticClass:"d-flex flex-sm-row flex-column flex-wrap justify-content-between mb-1 mb-sm-0"},[s("div",[s("h6",{staticClass:"mb-0"},[t._v(" "+t._s(t.beautifyValue(t.cumulusWeek))+" FLUX ")]),s("small",{staticClass:"mt-0"},[t._v("($"+t._s(t.beautifyValue(t.cumulusUSDRewardWeek))+" USD)")]),s("h6",{staticClass:"mb-0 mt-1"},[t._v(" "+t._s(t.beautifyValue(.1*t.cumulusWeek*3))+" FLUX Tokens ")]),s("small",{staticClass:"mt-0 mt-1"},[t._v("($"+t._s(t.beautifyValue(.1*t.cumulusUSDRewardWeek*3))+" USD)")]),s("h6",{staticClass:"mb-0 mt-1 invisible"},[t._v(" 0 KDA ")]),s("small",{staticClass:"mt-0 invisible"},[t._v("(0 USD)")]),s("h6",{staticClass:"mt-0 mt-1 invisible"},[t._v(" 0 USD ")])]),s("small",{staticClass:"text-muted"},[t._v("Per Week")])])]),s("app-timeline-item",[s("div",{staticClass:"d-flex flex-sm-row flex-column flex-wrap justify-content-between mb-1 mb-sm-0"},[s("div",[s("h6",{staticClass:"mb-0"},[t._v(" "+t._s(t.beautifyValue(t.cumulusWeek*t.weeksInAMonth))+" FLUX ")]),s("small",{staticClass:"mt-0"},[t._v("($"+t._s(t.beautifyValue(t.cumulusUSDRewardWeek*t.weeksInAMonth))+" USD)")]),s("h6",{staticClass:"mb-0 mt-1"},[t._v(" "+t._s(t.beautifyValue(t.cumulusWeek*t.weeksInAMonth*.1*3))+" FLUX Tokens ")]),s("small",{staticClass:"mt-0 mt-1"},[t._v("($"+t._s(t.beautifyValue(t.cumulusUSDRewardWeek*t.weeksInAMonth*.1*3))+" USD)")]),s("h6",{staticClass:"mb-0 mt-1 invisible"},[t._v(" 0 KDA ")]),s("small",{staticClass:"mt-0 invisible"},[t._v("(0 USD)")]),s("h6",{staticClass:"mt-0 mt-1 invisible"},[t._v(" 0 USD ")])]),s("small",{staticClass:"text-muted"},[t._v("Per Month")])])])],1),s("b-row",[s("b-col",{staticClass:"border-top mt-2"},[s("b-card-text",{staticClass:"text-muted mt-1"},[t._v(" Profitability per month ")]),s("h4",{staticClass:"font-weight-bolder mb-50"},[t._v(" Node only: $"+t._s(t.beautifyValue(t.cumulusUSDRewardWeek*t.weeksInAMonth*.1*3+t.cumulusUSDRewardWeek*t.weeksInAMonth-t.cumulusHostingCost))+" USD ")]),s("h4",{staticClass:"font-weight-bolder mb-50 invisible"},[t._v(" With KDA: 0 USD ")])],1)],1)],1)],1),s("b-col",{attrs:{sm:"12",md:"6",lg:"4"}},[s("b-card",{attrs:{title:"Nimbus Rewards"}},[s("b-card-text",[t._v("25,000 FLUX Collateral")]),s("app-timeline",{staticClass:"mt-2"},[s("app-timeline-item",{attrs:{variant:"warning"}},[s("div",{staticClass:"d-flex flex-sm-row flex-column flex-wrap justify-content-between mb-1 mb-sm-0"},[s("div",[s("h6",{staticClass:"mb-0"},[t._v(" "+t._s(t.beautifyValue(t.nimbusWeek/7))+" FLUX ")]),s("small",{staticClass:"mt-0"},[t._v("($"+t._s(t.beautifyValue(t.nimbusUSDRewardWeek/7))+" USD)")]),s("h6",{staticClass:"mb-0 mt-1"},[t._v(" "+t._s(t.beautifyValue(.1*t.nimbusWeek*3/7))+" FLUX Tokens ")]),s("small",{staticClass:"mt-0 mt-1"},[t._v("($"+t._s(t.beautifyValue(.1*t.nimbusUSDRewardWeek*3/7))+" USD)")]),s("h6",{staticClass:"mb-0 mt-1"},[t._v(" "+t._s(t.beautifyValue(t.kdaNimbusWeek/7))+" KDA ")]),s("small",{staticClass:"mt-0"},[t._v("($"+t._s(t.beautifyValue(t.nimbusUSDKDARewardWeek/7))+" USD)")]),s("h6",{staticClass:"mt-0 mt-1"},[t._v(" ~ $"+t._s(t.beautifyValue(.1*t.nimbusUSDRewardWeek*3/7+t.nimbusUSDRewardWeek/7+t.nimbusUSDKDARewardWeek/7))+" USD ")])]),s("small",{staticClass:"text-muted"},[t._v("Per Day")])])]),s("app-timeline-item",{attrs:{variant:"warning"}},[s("div",{staticClass:"d-flex flex-sm-row flex-column flex-wrap justify-content-between mb-1 mb-sm-0"},[s("div",[s("h6",{staticClass:"mb-0"},[t._v(" "+t._s(t.beautifyValue(t.nimbusWeek))+" FLUX ")]),s("small",{staticClass:"mt-0"},[t._v("($"+t._s(t.beautifyValue(t.nimbusUSDRewardWeek))+" USD)")]),s("h6",{staticClass:"mb-0 mt-1"},[t._v(" "+t._s(t.beautifyValue(.1*t.nimbusWeek*3))+" FLUX Tokens ")]),s("small",{staticClass:"mt-0 mt-1"},[t._v("($"+t._s(t.beautifyValue(.1*t.nimbusUSDRewardWeek*3))+" USD)")]),s("h6",{staticClass:"mb-0 mt-1"},[t._v(" "+t._s(t.beautifyValue(t.kdaNimbusWeek))+" KDA ")]),s("small",{staticClass:"mt-0"},[t._v("($"+t._s(t.beautifyValue(t.nimbusUSDKDARewardWeek))+" USD)")]),s("h6",{staticClass:"mt-0 mt-1"},[t._v(" ~ $"+t._s(t.beautifyValue(.1*t.nimbusUSDRewardWeek*3+t.nimbusUSDRewardWeek+t.nimbusUSDKDARewardWeek))+" USD ")])]),s("small",{staticClass:"text-muted"},[t._v("Per Week")])])]),s("app-timeline-item",{attrs:{variant:"warning"}},[s("div",{staticClass:"d-flex flex-sm-row flex-column flex-wrap justify-content-between mb-1 mb-sm-0"},[s("div",[s("h6",{staticClass:"mb-0"},[t._v(" "+t._s(t.beautifyValue(t.nimbusWeek*t.weeksInAMonth))+" FLUX ")]),s("small",{staticClass:"mt-0"},[t._v("($"+t._s(t.beautifyValue(t.nimbusUSDRewardWeek*t.weeksInAMonth))+" USD)")]),s("h6",{staticClass:"mb-0 mt-1"},[t._v(" "+t._s(t.beautifyValue(t.nimbusWeek*t.weeksInAMonth*.1*3))+" FLUX Tokens ")]),s("small",{staticClass:"mt-0 mt-1"},[t._v("($"+t._s(t.beautifyValue(t.nimbusUSDRewardWeek*t.weeksInAMonth*.1*3))+" USD)")]),s("h6",{staticClass:"mb-0 mt-1"},[t._v(" "+t._s(t.beautifyValue(t.kdaNimbusWeek*t.weeksInAMonth))+" KDA ")]),s("small",{staticClass:"mt-0"},[t._v("($"+t._s(t.beautifyValue(t.nimbusUSDKDARewardWeek*t.weeksInAMonth))+" USD)")]),s("h6",{staticClass:"mt-0 mt-1"},[t._v(" ~ $"+t._s(t.beautifyValue(t.nimbusUSDRewardWeek*t.weeksInAMonth*.1*3+t.nimbusUSDRewardWeek*t.weeksInAMonth+t.nimbusUSDKDARewardWeek*t.weeksInAMonth))+" USD ")])]),s("small",{staticClass:"text-muted"},[t._v("Per Month")])])])],1),s("b-row",[s("b-col",{staticClass:"border-top mt-2"},[s("b-card-text",{staticClass:"text-muted mt-1"},[t._v(" Profitability per month ")]),s("h4",{staticClass:"font-weight-bolder mb-50"},[t._v(" Node only: $"+t._s(t.beautifyValue(t.nimbusUSDRewardWeek*t.weeksInAMonth*.1*3+t.nimbusUSDRewardWeek*t.weeksInAMonth-t.nimbusHostingCost))+" USD ")]),s("h4",{staticClass:"font-weight-bolder mb-50"},[t._v(" With KDA: $"+t._s(t.beautifyValue(t.nimbusUSDRewardWeek*t.weeksInAMonth*.1*3+t.nimbusUSDRewardWeek*t.weeksInAMonth+t.nimbusUSDKDARewardWeek*t.weeksInAMonth-t.nimbusHostingCost))+" USD ")])],1)],1)],1)],1),s("b-col",{attrs:{sm:"12",md:"12",lg:"4"}},[s("b-card",{attrs:{title:"Stratus Rewards"}},[s("b-card-text",[t._v("100,000 FLUX Collateral")]),s("app-timeline",{staticClass:"mt-2"},[s("app-timeline-item",{attrs:{variant:"danger"}},[s("div",{staticClass:"d-flex flex-sm-row flex-column flex-wrap justify-content-between mb-1 mb-sm-0"},[s("div",[s("h6",{staticClass:"mb-0"},[t._v(" "+t._s(t.beautifyValue(t.stratusWeek/7))+" FLUX ")]),s("small",{staticClass:"mt-0"},[t._v("($"+t._s(t.beautifyValue(t.stratusUSDRewardWeek/7))+" USD)")]),s("h6",{staticClass:"mb-0 mt-1"},[t._v(" "+t._s(t.beautifyValue(.1*t.stratusWeek*3/7))+" FLUX Tokens ")]),s("small",{staticClass:"mt-0 mt-1"},[t._v("($"+t._s(t.beautifyValue(.1*t.stratusUSDRewardWeek*3/7))+" USD)")]),s("h6",{staticClass:"mb-0 mt-1"},[t._v(" "+t._s(t.beautifyValue(t.kdaStratusWeek/7))+" KDA ")]),s("small",{staticClass:"mt-0"},[t._v("($"+t._s(t.beautifyValue(t.stratusUSDKDARewardWeek/7))+" USD)")]),s("h6",{staticClass:"mt-0 mt-1"},[t._v(" ~ $"+t._s(t.beautifyValue(.1*t.stratusUSDRewardWeek*3/7+t.stratusUSDRewardWeek/7+t.stratusUSDKDARewardWeek/7))+" USD ")])]),s("small",{staticClass:"text-muted"},[t._v("Per Day")])])]),s("app-timeline-item",{attrs:{variant:"danger"}},[s("div",{staticClass:"d-flex flex-sm-row flex-column flex-wrap justify-content-between mb-1 mb-sm-0"},[s("div",[s("h6",{staticClass:"mb-0"},[t._v(" "+t._s(t.beautifyValue(t.stratusWeek))+" FLUX ")]),s("small",{staticClass:"mt-0"},[t._v("($"+t._s(t.beautifyValue(t.stratusUSDRewardWeek))+" USD)")]),s("h6",{staticClass:"mb-0 mt-1"},[t._v(" "+t._s(t.beautifyValue(.1*t.stratusWeek*3))+" FLUX Tokens ")]),s("small",{staticClass:"mt-0 mt-1"},[t._v("($"+t._s(t.beautifyValue(.1*t.stratusUSDRewardWeek*3))+" USD)")]),s("h6",{staticClass:"mb-0 mt-1"},[t._v(" "+t._s(t.beautifyValue(t.kdaStratusWeek))+" KDA ")]),s("small",{staticClass:"mt-0"},[t._v("($"+t._s(t.beautifyValue(t.stratusUSDKDARewardWeek))+" USD)")]),s("h6",{staticClass:"mt-0 mt-1"},[t._v(" ~ $"+t._s(t.beautifyValue(.1*t.stratusUSDRewardWeek*3+t.stratusUSDRewardWeek+t.stratusUSDKDARewardWeek))+" USD ")])]),s("small",{staticClass:"text-muted"},[t._v("Per Week")])])]),s("app-timeline-item",{attrs:{variant:"danger"}},[s("div",{staticClass:"d-flex flex-sm-row flex-column flex-wrap justify-content-between mb-1 mb-sm-0"},[s("div",[s("h6",{staticClass:"mb-0"},[t._v(" "+t._s(t.beautifyValue(t.stratusWeek*t.weeksInAMonth))+" FLUX ")]),s("small",{staticClass:"mt-0"},[t._v("($"+t._s(t.beautifyValue(t.stratusUSDRewardWeek*t.weeksInAMonth))+" USD)")]),s("h6",{staticClass:"mb-0 mt-1"},[t._v(" "+t._s(t.beautifyValue(t.stratusWeek*t.weeksInAMonth*.1*3))+" FLUX Tokens ")]),s("small",{staticClass:"mt-0 mt-1"},[t._v("($"+t._s(t.beautifyValue(t.stratusUSDRewardWeek*t.weeksInAMonth*.1*3))+" USD)")]),s("h6",{staticClass:"mb-0 mt-1"},[t._v(" "+t._s(t.beautifyValue(t.kdaStratusWeek*t.weeksInAMonth))+" KDA ")]),s("small",{staticClass:"mt-0"},[t._v("($"+t._s(t.beautifyValue(t.stratusUSDKDARewardWeek*t.weeksInAMonth))+" USD)")]),s("h6",{staticClass:"mt-0 mt-1"},[t._v(" ~ $"+t._s(t.beautifyValue(t.stratusUSDRewardWeek*t.weeksInAMonth*.1*3+t.stratusUSDRewardWeek*t.weeksInAMonth+t.stratusUSDKDARewardWeek*t.weeksInAMonth))+" USD ")])]),s("small",{staticClass:"text-muted"},[t._v("Per Month")])])])],1),s("b-row",[s("b-col",{staticClass:"border-top mt-2"},[s("b-card-text",{staticClass:"text-muted mt-1"},[t._v(" Profitability per month ")]),s("h4",{staticClass:"font-weight-bolder mb-50"},[t._v(" Node only: $"+t._s(t.beautifyValue(t.stratusUSDRewardWeek*t.weeksInAMonth*.1*3+t.stratusUSDRewardWeek*t.weeksInAMonth-t.stratusHostingCost))+" USD ")]),s("h4",{staticClass:"font-weight-bolder mb-50"},[t._v(" With KDA: $"+t._s(t.beautifyValue(t.stratusUSDRewardWeek*t.weeksInAMonth*.1*3+t.stratusUSDRewardWeek*t.weeksInAMonth+t.stratusUSDKDARewardWeek*t.weeksInAMonth-t.stratusHostingCost))+" USD ")])],1)],1)],1)],1)],1)],1)},i=[],l=s("2909"),n=s("1da1"),r=(s("b64b"),s("a9e3"),s("b680"),s("4de4"),s("7db0"),s("ac1f"),s("5319"),s("96cf"),s("205f")),u=s("d6e4"),m=s("6197"),c=s("a15b"),o=s("b28b"),b=s("9b03"),d=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",t._g(t._b({staticClass:"app-timeline"},"ul",t.$attrs,!1),t.$listeners),[t._t("default")],2)},f=[],w={},k=w,v=(s("45a8"),s("2877")),_=Object(v["a"])(k,d,f,!1,null,"1fc4912e",null),h=_.exports,D=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",t._g(t._b({staticClass:"timeline-item",class:["timeline-variant-"+t.variant,t.fillBorder?"timeline-item-fill-border-"+t.variant:null]},"li",t.$attrs,!1),t.$listeners),[t.icon?s("div",{staticClass:"timeline-item-icon d-flex align-items-center justify-content-center rounded-circle"},[s("feather-icon",{attrs:{icon:t.icon}})],1):s("div",{staticClass:"timeline-item-point"}),t._t("default",(function(){return[s("div",{staticClass:"d-flex flex-sm-row flex-column flex-wrap justify-content-between mb-1 mb-sm-0"},[s("h6",{domProps:{textContent:t._s(t.title)}}),s("small",{staticClass:"timeline-item-time text-nowrap text-muted",domProps:{textContent:t._s(t.time)}})]),s("p",{staticClass:"mb-0",domProps:{textContent:t._s(t.subtitle)}})]}))],2)},C=[],U={props:{variant:{type:String,default:"primary"},title:{type:String,default:null},subtitle:{type:String,default:null},time:{type:String,default:null},icon:{type:String,default:null},fillBorder:{type:Boolean,default:!1}}},p=U,S=(s("464d"),Object(v["a"])(p,D,C,!1,null,"384df2b1",null)),y=S.exports,W=s("e009"),x=s("1321"),R=s.n(x),g=s("94c8"),A=s("bc3a"),V={components:{BCard:r["a"],BCardText:u["a"],BCardBody:m["a"],BRow:c["a"],BCol:o["a"],BOverlay:b["a"],AppTimeline:h,AppTimelineItem:y,VueApexCharts:R.a},directives:{Ripple:W["a"]},data:function(){var t=this;return{cumulusHostingCost:4.7,nimbusHostingCost:6,stratusHostingCost:32,weeksInAMonth:4.34812141,loadingPrice:!0,historicalPrices:[],cumulusWeek:0,nimbusWeek:0,stratusWeek:0,cumulusUSDRewardWeek:0,nimbusUSDRewardWeek:0,stratusUSDRewardWeek:0,nimbusUSDKDARewardWeek:0,stratusUSDKDARewardWeek:0,kdaNimbusWeek:0,kdaStratusWeek:0,latestPrice:0,lineChart:{series:[],chartOptions:{colors:[g["b"].primary],labels:["Price"],grid:{show:!1,padding:{left:0,right:0}},chart:{toolbar:{show:!1},sparkline:{enabled:!0},stacked:!0},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2.5},fill:{type:"gradient",gradient:{shadeIntensity:.9,opacityFrom:.7,opacityTo:0}},xaxis:{type:"numeric",lines:{show:!1},axisBorder:{show:!1},labels:{show:!1}},yaxis:[{y:0,offsetX:0,offsetY:0,padding:{left:0,right:0}}],tooltip:{x:{formatter:function(e){return new Date(e).toLocaleString("en-GB",t.timeoptions)}},y:{formatter:function(e){return"$".concat(t.beautifyValue(e,2)," USD")}}}}}}},mounted:function(){this.getRates()},methods:{getRates:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,A.get("https://vipdrates.zelcore.io/rates");case 2:s=e.sent,t.rates=s.data,t.getZelNodeCount();case 5:case"end":return e.stop()}}),e)})))()},getZelNodeCount:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var s,a,i,n,r,u,m,c,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A.get("https://stats.runonflux.io/fluxhistorystats");case 3:s=e.sent,a=s.data.data,i=Object.keys(a),n=Math.max.apply(Math,Object(l["a"])(i)),r=a[n],u=r.cumulus,m=r.nimbus,c=r.stratus,o={},o["stratus-enabled"]=c,o["bamf-enabled"]=c,o["nimbus-enabled"]=m,o["super-enabled"]=m,o["cumulus-enabled"]=u,o["basic-enabled"]=u,t.generateEconomics(o),e.next=21;break;case 18:e.prev=18,e.t0=e["catch"](0),console.log(e.t0);case 21:case"end":return e.stop()}}),e,null,[[0,18]])})))()},generateEconomics:function(t){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function s(){var a,i,l,n,r,u,m,c,o,b,d,f,w,k,v,_,h,D,C,U,p,S,y,W,x,R;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.prev=0,e.priceInformationLoading=!0,a=t["stratus-enabled"],i=t["nimbus-enabled"],l=t["cumulus-enabled"],s.next=7,A.get("https://stats.runonflux.io/kadena/eligiblestats/7");case 7:n=s.sent,r=n.data.data,u=2300,m=r.nimbus,c=r.stratus,o=m+4*c,b=Number((u/o).toFixed(4)),d=Number((u/o*4).toFixed(4)),f=5.625,w=9.375,k=22.5,v=720*f*7/l,_=720*w*7/i,h=720*k*7/a,D=e.getFiatRate("ZEL")*f,C=e.getFiatRate("ZEL")*w,U=e.getFiatRate("ZEL")*k,p=e.getFiatRate("KDA")*b,S=e.getFiatRate("KDA")*d,y=5040*D/l,W=5040*C/i,x=5040*U/a,e.cumulusWeek=v,e.nimbusWeek=_,e.stratusWeek=h,e.cumulusUSDRewardWeek=y,e.nimbusUSDRewardWeek=W,e.stratusUSDRewardWeek=x,e.nimbusUSDKDARewardWeek=p,e.stratusUSDKDARewardWeek=S,e.kdaNimbusWeek=b,e.kdaStratusWeek=d,R=e,A.get("https://api.coingecko.com/api/v3/coins/zelcash/market_chart?vs_currency=USD&days=30").then((function(t){R.historicalPrices=t.data.prices.filter((function(t){return t[0]>14832324e5}));for(var s=[],a=0;a<R.historicalPrices.length;a+=3){var i=R.historicalPrices[a];s.push(i),e.latestPrice=i[1]}R.lineChart.series=[{name:"Price",data:s}],e.loadingPrice=!1})),s.next=46;break;case 43:s.prev=43,s.t0=s["catch"](0),console.log(s.t0);case 46:case"end":return s.stop()}}),s,null,[[0,43]])})))()},getFiatRate:function(t){var e="USD",s=this.rates[0].find((function(t){return t.code===e}));void 0===s&&(s={rate:0});var a=this.rates[1][t];void 0===a&&(a=0);var i=s.rate*a;return i},beautifyValue:function(t){var e=t.toFixed(2);return e.replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,")}}},$=V,M=Object(v["a"])($,a,i,!1,null,null,null);e["default"]=M.exports}}]);