(this.webpackJsonpreact_js_finedust_app=this.webpackJsonpreact_js_finedust_app||[]).push([[0],{19:function(e,t,a){e.exports=a(44)},43:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(12),s=a.n(l),c=a(2),o=a.n(c),u=a(13),m=a(14),i=a(17),p=a(15),h=a(18),d=a(16),E=a.n(d);a(43);var v=function(e){var t=e.name,a=e.pm10,n=e.pm25,l=e.so2,s=e.co,c=e.o3,o=e.no2;return r.a.createElement("div",{className:"each_and_name"},r.a.createElement("h1",{className:"element_name"},t),r.a.createElement("div",{className:"each_element"},r.a.createElement("h3",null,"\ubbf8\uc138\uba3c\uc9c0(pm10) : ",a," \u338d/\u33a5"),r.a.createElement("h3",null,"\ubbf8\uc138\uba3c\uc9c0(pm2.5) : ",n," \u338d/\u33a5"),r.a.createElement("h3",null,"\uc544\ud669\uc0b0\uac00\uc2a4 : ",l," ppm"),r.a.createElement("h3",null,"\uc77c\uc0b0\ud654\ud0c4\uc18c : ",s," ppm"),r.a.createElement("h3",null,"\uc624\uc874 : ",c," ppm"),r.a.createElement("h3",null,"\uc774\uc0b0\ud654\uc9c8\uc18c : ",o," ppm")))},f="http://openapi.airkorea.or.kr/openapi/services/rest/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty?serviceKey=uAQWEIMklVDma9RwEnhvmKOt2rXaCalkDx8c2h0w6OPnRnc7Zt7D4lrzYpq0TeV4QtOFGph1UEbbOfA4zNbk9w%3D%3D&numOfRows=102&pageNo=1&sidoName=%EA%B2%BD%EA%B8%B0&ver=1.3&_returnType=json",D=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={isLoading:!0,dustData:[]},a.getDustData=function(){var e,t;return o.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.a.awrap(E.a.get(f,{headers:{"Access-Control-Allow-Origin":"*"}}));case 2:e=n.sent,t=e.data.list,a.setState({dustData:t,isLoading:!1});case 5:case"end":return n.stop()}}))},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.getDustData()}},{key:"render",value:function(){return r.a.createElement("section",null,this.state.isLoading?r.a.createElement("h1",null,"\ub85c\ub529\uc911..."):r.a.createElement("div",null,r.a.createElement("h1",null,"\uce21\uc815\uae30\uc900\uc2dc\uac04 : ",this.state.dustData[0].dataTime),r.a.createElement("div",{className:"all_element"},this.state.dustData.map((function(e,t){return r.a.createElement(v,{key:t,name:e.stationName,pm10:e.pm10Value,so2:e.so2Value,co:e.coValue,o3:e.o3Value,no2:e.no2Value})})))))}}]),t}(r.a.Component);s.a.render(r.a.createElement(D,null),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.24070ad7.chunk.js.map