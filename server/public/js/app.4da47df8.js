(function(t){function e(e){for(var r,i,o=e[0],c=e[1],l=e[2],v=0,d=[];v<o.length;v++)i=o[v],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&d.push(s[i][0]),s[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);u&&u(e);while(d.length)d.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],r=!0,o=1;o<a.length;o++){var c=a[o];0!==s[c]&&(r=!1)}r&&(n.splice(e--,1),t=i(i.s=a[0]))}return t}var r={},s={app:0},n=[];function i(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=r,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(a,r,function(e){return t[e]}.bind(null,r));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Weather")],1)},n=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"canvas"},[a("div",{staticClass:"header"},[t._v(" Ventus - Uva Weather Station ")]),t.getWeather?a("div",{staticClass:"main-content"},[a("div",{staticClass:"left-column"},[a("div",{staticClass:"temp-label"},[t._v(" Current Temperature ")]),a("div",{staticClass:"temp"},[a("span",{staticClass:"temp-value"},[t._v(t._s(t.getWeather.metric.temp))]),a("span",{staticClass:"degree"},[t._v("°C")])])]),a("div",{staticClass:"right-column"},[a("div",{staticClass:"nav"},[a("a",{staticClass:"today",on:{click:t.getToday}},[t._v("Today")]),a("span",{staticClass:"text"},[t._v(" or")]),a("span",{staticClass:"text"},[t._v(" Get weather for ")]),a("date-picker",{attrs:{valueType:"format",placeholder:"YYYY-MM-DD","disabled-date":function(t){return t>=new Date}},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}}),a("button",{staticClass:"button",on:{click:t.getDayObservation}},[t._v(" Get Observations")])],1),t.showCurrent?a("div",{staticClass:"metric"},[a("div",{staticClass:"small-card"},[a("div",{staticClass:"small-card-title"},[t._v(" Country ")]),a("div",{staticClass:"small-card-value"},[t._v(" "+t._s(t.getWeather.country)+" ")])]),a("div",{staticClass:"small-card"},[a("div",{staticClass:"small-card-title"},[t._v(" Humidity (%) ")]),a("div",{staticClass:"small-card-value"},[t._v(" "+t._s(t.getWeather.humidity)+" ")])]),a("div",{staticClass:"small-card"},[a("div",{staticClass:"small-card-title"},[t._v(" Heat Index ")]),a("div",{staticClass:"small-card-value"},[t._v(" "+t._s(t.getWeather.metric.heatIndex)+" ")])]),a("div",{staticClass:"small-card"},[a("div",{staticClass:"small-card-title"},[t._v(" Dew Point (°C) ")]),a("div",{staticClass:"small-card-value"},[t._v(" "+t._s(t.getWeather.metric.dewpt)+" ")])]),a("div",{staticClass:"small-card"},[a("div",{staticClass:"small-card-title"},[t._v(" Wind Chill ")]),a("div",{staticClass:"small-card-value"},[t._v(" "+t._s(t.getWeather.metric.windChill)+" ")])]),a("div",{staticClass:"small-card"},[a("div",{staticClass:"small-card-title"},[t._v(" Wind Speed (km/h) ")]),a("div",{staticClass:"small-card-value"},[t._v(" "+t._s(t.getWeather.metric.windSpeed)+" ")])])]):a("div"),t.showCurrent?a("div",{staticClass:"graph"},[a("chart-component",{attrs:{tempVar:t.getWeatherObservations}})],1):!t.showCurrent&&t.getWeatherPreviousObservations.length>0?a("div",{staticClass:"oldGraph"},[a("chart-component",{attrs:{tempVar:t.getWeatherPreviousObservations}})],1):a("div",[a("h3",[t._v("No weather data from this date available. Please select a date later than 2021-06-03.")])])])]):a("div",{staticClass:"loading"},[a("span",{staticClass:"loadingText"},[t._v("Loading weather...")])])])},o=[],c=a("5530"),l=a("2f62"),u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"custom-card header-card card"},[a("div",{staticClass:"card-body pt-0"},[a("fusioncharts",{attrs:{type:"spline",dataformat:"json",width:"100%",dataEmptyMessage:"i-https://i.postimg.cc/R0QCk9vV/Rolling-0-9s-99px.gif",dataEmptyMessageImageScale:"39",datasource:t.tempChartData}})],1)])},v=[],d={props:["tempVar"],components:{},data:function(){return{tempChartData:{chart:{caption:"Day Temperature Graph",captionFontBold:"0",captionFontColor:"#000000",captionPadding:"30",baseFont:"Courier New', Courier, monospace",chartTopMargin:"30",showHoverEffect:"1",theme:"fusion",showaxislines:"1",numberSuffix:"°C",anchorBgColor:"#800000",paletteColors:"#800000",drawCrossLine:"1",plotToolText:"$label<br><hr><b>$dataValue</b>",showAxisLines:"0",showYAxisValues:"0",anchorRadius:"4",divLineAlpha:"0",labelFontSize:"13",labelAlpha:"65",labelFontBold:"0",rotateLabels:"1",slantLabels:"1",canvasPadding:"20"},data:[]}}},methods:{setChartData:function(){this.tempChartData.data=this.tempVar}},mounted:function(){this.setChartData()},watch:{tempVar:{handler:function(){this.setChartData()},deep:!0}}},h=d,p=a("2877"),f=Object(p["a"])(h,u,v,!1,null,null,null),b=f.exports,m=a("526b"),g=(a("029a"),{components:{ChartComponent:b,DatePicker:m["a"]},name:"Weather",data:function(){return{error:"",date:null,showCurrent:!0}},computed:Object(c["a"])(Object(c["a"])({},Object(l["b"])(["observation"])),{},{getWeather:function(){return this.$store.getters.observation},getWeatherObservations:function(){return this.$store.getters.observations},getWeatherPreviousObservations:function(){return this.$store.getters.olderObservations}}),created:function(){var t=this;setInterval((function(){t.$store.dispatch("fetchWeather")}),1e4),setInterval((function(){t.$store.dispatch("fetchWeatherObservations")}),1e4)},methods:{getDayObservation:function(){this.showCurrent=!1,this.$store.dispatch("previousObservations",this.date)},getToday:function(){this.showCurrent=!0}}}),C=g,O=(a("fdb6"),Object(p["a"])(C,i,o,!1,null,"7c532b6a",null)),w=O.exports,y={name:"App",components:{Weather:w}},_=y,x=(a("034f"),Object(p["a"])(_,s,n,!1,null,null,null)),W=x.exports,j=(a("a15b"),a("ac1f"),a("1276"),a("1da1")),k=a("d4ec"),P=a("bee2"),D=(a("96cf"),a("bc3a")),T=a.n(D),S="api/weather",$="api/weather/day-observations",E=function(){function t(){Object(k["a"])(this,t)}return Object(P["a"])(t,null,[{key:"getWeather",value:function(){var t=Object(j["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,T.a.get(S);case 3:e=t.sent,t.next=9;break;case 6:t.prev=6,t.t0=t["catch"](0),console.log("Error fetching weather : ".concat(t.t0));case 9:return t.abrupt("return",e.data.observations);case 10:case"end":return t.stop()}}),t,null,[[0,6]])})));function e(){return t.apply(this,arguments)}return e}()},{key:"getDailyObservations",value:function(){var t=Object(j["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,T.a.get($);case 3:e=t.sent,t.next=9;break;case 6:t.prev=6,t.t0=t["catch"](0),console.log("Error fetching weather : ".concat(t.t0));case 9:return t.abrupt("return",e.data.observations);case 10:case"end":return t.stop()}}),t,null,[[0,6]])})));function e(){return t.apply(this,arguments)}return e}()},{key:"getPreviousObservations",value:function(){var t=Object(j["a"])(regeneratorRuntime.mark((function t(e){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,T.a.get("api/weather/previous-observations",{params:{date:e}});case 3:a=t.sent,t.next=9;break;case 6:t.prev=6,t.t0=t["catch"](0),console.log("Error fetching weather : ".concat(t.t0));case 9:return t.abrupt("return",a.data.observations.finalData);case 10:case"end":return t.stop()}}),t,null,[[0,6]])})));function e(e){return t.apply(this,arguments)}return e}()}]),t}(),M=E;r["a"].use(l["a"]);var R={observation:null,dayObservations:[],previousObservations:[]},V={setWeather:function(t,e){t.observation=e},setWeatherObservations:function(t,e){t.dayObservations=e},setPreviousObservations:function(t,e){t.previousObservations=e}},L={observation:function(){return R.observation},observations:function(){return R.dayObservations},olderObservations:function(){return R.previousObservations}},A={fetchWeather:function(t,e){var a=M.getWeather();a.then((function(a){e=a,t.commit("setWeather",e)}))},fetchWeatherObservations:function(t,e){var a=M.getDailyObservations();a.then((function(a){e=a,t.commit("setWeatherObservations",e)}))},previousObservations:function(t,e){var a=e.split("-").join(""),r=M.getPreviousObservations(a);r.then((function(a){e=a,t.commit("setPreviousObservations",e)}))}},F=new l["a"].Store({state:R,mutations:V,getters:L,actions:A,modules:{}}),I=a("8f68"),Y=a.n(I),G=a("f273"),B=a.n(G),H=a("2ea3"),J=a.n(H),N=a("9397"),z=a.n(N),Q=a("5206"),U=a.n(Q),q=a("27e3"),K=a.n(q),X=a("9955"),Z=a.n(X),tt=a("2ef0"),et=a.n(tt);r["a"].config.productionTip=!1,B()(Y.a),z()(Y.a),J()(Y.a),U()(Y.a),r["a"].use(K.a,Y.a),r["a"].use(a("2ead")),r["a"].use(Z.a,{name:"custom",lodash:et.a}),new r["a"]({store:F,render:function(t){return t(W)}}).$mount("#app")},"85ec":function(t,e,a){},d04a:function(t,e,a){},fdb6:function(t,e,a){"use strict";a("d04a")}});
//# sourceMappingURL=app.4da47df8.js.map