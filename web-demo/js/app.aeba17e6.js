(function(t){function e(e){for(var s,i,c=e[0],o=e[1],l=e[2],p=0,d=[];p<c.length;p++)i=c[p],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&d.push(a[i][0]),a[i]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s]);u&&u(e);while(d.length)d.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],s=!0,c=1;c<n.length;c++){var o=n[c];0!==a[o]&&(s=!1)}s&&(r.splice(e--,1),t=i(i.s=n[0]))}return t}var s={},a={app:0},r=[];function i(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=s,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(n,s,function(e){return t[e]}.bind(null,s));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=o;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},1408:function(t,e,n){t.exports=n.p+"img/logo.78578442.png"},"3abe":function(t,e,n){t.exports=n.p+"img/ziceBg.6be65c52.png"},"4b7e":function(t,e,n){t.exports=n.p+"img/clickBtn.1d0a4fb3.png"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},r=[],i={name:"App",mounted:function(){}},c=i,o=(n("034f"),n("2877")),l=Object(o["a"])(c,a,r,!1,null,null,null),u=l.exports,p=n("8c4f"),d=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[s("div",{staticClass:"header-box"},[s("div",{staticClass:"header-list"},[t._m(0),s("div",{staticClass:"menu-list"},[s("p",[s("router-link",{attrs:{to:{path:"/index",query:{name:1}}}},[t._v("首      页")])],1),s("p",[s("router-link",{attrs:{to:{path:"/index",query:{name:1}}}},[t._v("注册/登陆")])],1),s("p",[s("router-link",{attrs:{to:{path:"/index",query:{name:1}}}},[t._v("患教手册")])],1),s("p",[s("router-link",{attrs:{to:{path:"/index",query:{name:1}}}},[t._v("案例分享")])],1),s("p",[s("router-link",{attrs:{to:{path:"/index",query:{name:1}}}},[t._v("订单查询")])],1),s("p",[s("router-link",{attrs:{to:{path:"/index",query:{name:1}}}},[t._v("个人中心")])],1)])]),s("div",{staticClass:"header-swiper"},[s("el-carousel",{staticClass:"container",attrs:{height:"86rem"}},[s("el-carousel-item",[s("img",{attrs:{src:n("ab6b"),alt:"",srcset:""}})]),s("el-carousel-item",[s("img",{attrs:{src:n("5b69"),alt:"",srcset:""}})]),s("el-carousel-item",[s("img",{attrs:{src:n("580b"),alt:"",srcset:""}})])],1)],1)]),s("div",{staticClass:"inspect-box"},[s("div",{staticClass:"inspect"},[s("h6",[t._v("发现肺结节，犹豫是否再做进一步检查？")]),s("div",{staticClass:"title"},[t._v("进入自测了解结节的风险")]),s("div",{staticClass:"list"},[t._m(1),t._m(2),s("p",{staticClass:"p3"},[t._v("是否有肿瘤家史？")]),s("div",{staticClass:"ziceImg-box"},[s("transition",{attrs:{name:"el-fade-in-linear"}},[s("img",{staticClass:"transition-box",attrs:{src:n("3abe"),alt:"",srcset:""}})])],1),s("span",{staticClass:"spot"})]),s("div",{staticClass:"tip"},[t._v("温馨提示 :   如果您符合以上条件之一或者以上，请马上进入自测")])])]),s("div",{staticClass:"expert-recommendation-box"},[s("div",{staticClass:"expert-recommendation"},[t._m(3),s("el-carousel",{attrs:{interval:4e3,type:"card","indicator-position":"none",height:"80rem",autoplay:!0},on:{change:t.swiperChange}},[t._l(t.swiperArr,(function(t){return s("el-carousel-item",{key:t.index},[s("div",{staticClass:"content-box"},[s("div",{staticClass:"list listImg1"},[s("img",{attrs:{src:t.url,alt:"",srcset:""}})])])])})),t._l(t.textContent,(function(e){return s("div",{key:e.name},[e.key==t.selectIndex?s("div",{staticClass:"text-content"},[s("h6",[t._v(t._s(e.name))]),s("p",[t._v(" "+t._s(e.p1)+" ")]),s("p",[t._v(" "+t._s(e.p2)+" ")]),s("p",[t._v(" "+t._s(e.p3)+" ")])]):t._e()])}))],2),s("div",{staticClass:"bg-left"}),s("div",{staticClass:"bg-right"})],1)]),t._m(4),t._m(5)])},f=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h1",[s("img",{attrs:{src:n("1408"),alt:"",srcset:""}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"p1"},[t._v("肺结节尺寸是否"),n("br"),t._v("在5-30mm之间")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"p2"},[t._v("是否吸烟或者"),n("br"),t._v("被动吸二手烟？")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h4",[n("span"),t._v("专家推荐"),n("span")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"cac-testing-box"},[s("div",{staticClass:"cac-testing"},[s("h4",[s("span"),t._v("CAC检测国际顶尖肺癌早诊技术"),s("span")]),s("div",{staticClass:"content"},[s("img",{staticClass:"bg1",attrs:{src:n("dde1"),alt:"",srcset:""}}),s("div",{staticClass:"pos1 postList"},[s("h3",[t._v("严谨科学")]),s("p",[t._v("国际顶尖团队研发，中外")]),s("p",[t._v("数据循证支持")]),s("button",[t._v("点击了解")])]),s("div",{staticClass:"pos2 postList"},[s("h3",[t._v("创新技术")]),s("p",[t._v('CAC检测全球首个"5-10mm"')]),s("p",[t._v("肺部结节在诊技术")]),s("button",[t._v("点击了解")])]),s("div",{staticClass:"pos3 postList"},[s("h3",[t._v("舒适体验")]),s("p",[t._v("使用10ml外围血检测,上")]),s("p",[t._v("门采血,无创便捷，")]),s("button",[t._v("点击了解")])]),s("div",{staticClass:"pos4 postList"},[s("h3",[t._v("使用经验")]),s("p",[t._v("来自患者的亲身经历，")]),s("p",[t._v("见证科技改变生命的故事")]),s("button",[t._v("点击了解")])]),s("button",{staticClass:"btn btn1"},[s("img",{attrs:{src:n("4b7e"),alt:"",srcset:""}})]),s("button",{staticClass:"btn btn2"},[s("img",{attrs:{src:n("4b7e"),alt:"",srcset:""}})]),s("button",{staticClass:"btn btn3"},[s("img",{attrs:{src:n("4b7e"),alt:"",srcset:""}})]),s("button",{staticClass:"btn btn4"},[s("img",{attrs:{src:n("4b7e"),alt:"",srcset:""}})])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"join-subscription-box"},[s("div",{staticClass:"join-subscription"},[s("img",{attrs:{src:n("8551"),alt:"",srcset:""}})])])}],m={name:"index",data:function(){return{swiperArr:[{url:n("cba8"),index:0},{url:n("aaad"),index:1},{url:n("ed4d"),index:2}],selectIndex:0,textContent:[{key:"0",name:"白春学教授",p1:"“我牵头进行的中国多项临床研究显示：针对5~10mm肺小结节，CAC良恶性判断准确率近80%，I期肺癌灵敏度达76.2%。仅需10ml外周血，3~7天即可出具检测结果，很适合肺癌早期诊断。”",p2:"中国肺癌防治联盟主席，中山呼吸病防治联盟主席，上海控烟协会会长",p3:"复旦大学附属中山医院教授，上海市呼吸病研究所所长，复旦大学呼吸病研究所所长"},{key:"1",name:"王悦虹教授",p1:"“CAC&CT AI 总体诊断效能针对10mm以下结节，准确度可以达81.76%，可以为临床提供更好鉴别肺结节良恶性的手段”",p2:"浙江大学医学院附属第一医院呼吸与危重症医学科副主任；美国MD Anderson 癌症中心访问学者；中华医学会呼吸病学分会胸膜疾病学组委员；中国医师协会呼吸医师分会肺癌工作组委员；中国肺癌防治联盟肺癌免疫治疗委员会副主委",p3:""},{key:"2",name:"刘红教授",p1:"“肺结节患者规范诊治极具挑战性，需要影像、活检等多维度综合评估首诊患者肺结节的恶性概率；传统诊疗手段+新技术辅助肺结节良恶性准确鉴别(如CAC检测、CT AI等),为临床提供有效的决策参考,有其积极且深远的应用价值。”",p2:"郑州大学第一附属医院呼吸与危重症医学二科副主任；医学博士，主任医师，教授，硕士生",p3:"导师，省级知名专家"}]}},mounted:function(){},methods:{swiperChange:function(t){console.log(t),this.selectIndex=t},onSwiper:function(t){console.log(t)},onSlideChange:function(){console.log("slide change")}}},v=m,b=(n("8e6a"),Object(o["a"])(v,d,f,!1,null,null,null)),_=b.exports;s["default"].use(p["a"]);var g=[{path:"/",name:"首页",redirect:"/index",menuShow:!1},{path:"/index",name:"首页",component:_,menuShow:!1},{path:"*",redirect:"/index"}],h=p["a"].prototype.push;p["a"].prototype.push=function(t){return h.call(this,t).catch((function(t){return t}))};var C=new p["a"]({routes:g}),x=n("bc3a"),y=n.n(x),w=n("2106"),k=n.n(w),j=n("5c96"),O=n.n(j),A=(n("0fae"),n("fb0c"),n("7212")),E=n.n(A);n("bbe3");s["default"].use(E.a),s["default"].use(O.a),s["default"].use(p["a"]),s["default"].use(k.a,y.a),s["default"].config.productionTip=!1,s["default"].prototype.$axios=y.a,y.a.defaults.baseURL="/api",new s["default"]({router:C,render:function(t){return t(u)}}).$mount("#app")},"580b":function(t,e,n){t.exports=n.p+"img/slider2.68b36545.png"},"5b69":function(t,e,n){t.exports=n.p+"img/slider1.365f3825.png"},"7d06":function(t,e,n){},8551:function(t,e,n){t.exports=n.p+"img/footr.25cbabfe.png"},"85ec":function(t,e,n){},"8e6a":function(t,e,n){"use strict";n("7d06")},aaad:function(t,e,n){t.exports=n.p+"img/user2.2f4df04f.png"},ab6b:function(t,e,n){t.exports=n.p+"img/slider0.6062c8ec.png"},cba8:function(t,e,n){t.exports=n.p+"img/user1.0f24eab1.png"},dde1:function(t,e,n){t.exports=n.p+"img/bg1.b278ff9c.png"},ed4d:function(t,e,n){t.exports=n.p+"img/user3.9714f469.png"},fb0c:function(t,e){var n=10;function s(){var t=document.documentElement.clientWidth/1920;document.documentElement.style.fontSize=n*Math.min(t,2)+"px"}s(),window.onresize=function(){s()}}});
//# sourceMappingURL=app.aeba17e6.js.map