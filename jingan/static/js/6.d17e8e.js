webpackJsonp([6],{228:function(n,t,e){function o(n){i||e(370)}var i=!1,s=e(99)(e(276),e(349),o,null,null);s.options.__file="/Users/baidu/workspace/work-self/dianlan/src/pages/introduce/index.vue",s.esModule&&Object.keys(s.esModule).some(function(n){return"default"!==n&&"__"!==n.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),s.options.functional&&console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."),n.exports=s.exports},232:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:["left"],data:function(){return{}},methods:{searchClick:function(){alert("go")},rightClick:function(){this.$emit("rightClick")}}}},233:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{ins:0},components:{},data:function(){return{}},created:function(){},methods:{loadMore:function(){},clickfn:function(n){location.href="/"+n}}}},234:function(n,t,e){"use strict";var o=e(3);t.a=new o.default({})},235:function(n,t,e){t=n.exports=e(31)(!0),t.push([n.i,"\n.footer[data-v-23fdb903] {\n  text-align: center;\n  position: fixed;\n  width: 100%;\n  bottom: 0;\n  background: #F5F5F5;\n}\n.footer .f-itemlist[data-v-23fdb903] {\n  clear: both;\n  height: auto;\n  overflow: hidden;\n  padding-top: 15px;\n  height: 135px;\n  padding-left: 200px;\n}\n.footer .f-itemlist .f-item[data-v-23fdb903] {\n  float: left;\n  width: 132px;\n  border-left: 1px solid #ddd;\n  height: 120px;\n}\n.footer .f-itemlist .f-item h3[data-v-23fdb903] {\n  color: #333;\n  font-size: 14px;\n  line-height: 20px;\n  margin-bottom: 5px;\n}\n.footer .f-itemlist .f-item li[data-v-23fdb903] {\n  font-size: 12px;\n  line-height: 17px;\n  color: #666;\n  cursor: pointer;\n}\n.footer .footer-section[data-v-23fdb903] {\n  background: #232C39;\n  font-size: 12px;\n  color: #999;\n  line-height: 40px;\n  height: 40px;\n}\n","",{version:3,sources:["/Users/baidu/workspace/work-self/dianlan/src/components/footer.vue","/Users/baidu/workspace/work-self/dianlan/src/components/footer.vue"],names:[],mappings:";AA6FA;EACI,mBAAA;EACA,gBAAA;EACA,YAAA;EACA,UAAA;EACC,oBAAA;CC5FJ;ADuFD;EAOQ,YAAA;EACA,aAAA;EACA,iBAAA;EAEA,kBAAA;EACA,cAAA;EACA,oBAAA;CC5FP;AD+ED;EAeY,YAAA;EACA,aAAA;EACA,4BAAA;EACA,cAAA;CC3FX;ADyED;EAoBgB,YAAA;EACA,gBAAA;EACA,kBAAA;EACA,mBAAA;CC1Ff;ADmED;EA0BgB,gBAAA;EACA,kBAAA;EACA,YAAA;EACA,gBAAA;CC1Ff;AD6DD;EAkCQ,oBAAA;EACA,gBAAA;EACA,YAAA;EACA,kBAAA;EACA,aAAA;CC5FP",file:"footer.vue",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.footer{\n    text-align: center;\n    position:fixed;\n    width:100%;\n    bottom:0;\n     background:#F5F5F5;\n    .f-itemlist{\n        clear:both;\n        height:auto;\n        overflow:hidden;\n       \n        padding-top:15px;\n        height:135px;\n        padding-left:200px;\n        .f-item{\n            float:left;\n            width:132px;\n            border-left:1px solid #ddd;\n            height:120px;\n            h3{\n                color:#333;\n                font-size:14px;\n                line-height:20px;\n                margin-bottom:5px;\n            }\n            li{\n                font-size:12px;\n                line-height:17px;\n                color:#666;\n                cursor: pointer;\n            }\n        }\n    }\n    .footer-section{\n        background:#232C39;\n        font-size:12px;\n        color:#999;\n        line-height:40px;\n        height:40px;\n    }\n}\n",".footer {\n  text-align: center;\n  position: fixed;\n  width: 100%;\n  bottom: 0;\n  background: #F5F5F5;\n}\n.footer .f-itemlist {\n  clear: both;\n  height: auto;\n  overflow: hidden;\n  padding-top: 15px;\n  height: 135px;\n  padding-left: 200px;\n}\n.footer .f-itemlist .f-item {\n  float: left;\n  width: 132px;\n  border-left: 1px solid #ddd;\n  height: 120px;\n}\n.footer .f-itemlist .f-item h3 {\n  color: #333;\n  font-size: 14px;\n  line-height: 20px;\n  margin-bottom: 5px;\n}\n.footer .f-itemlist .f-item li {\n  font-size: 12px;\n  line-height: 17px;\n  color: #666;\n  cursor: pointer;\n}\n.footer .footer-section {\n  background: #232C39;\n  font-size: 12px;\n  color: #999;\n  line-height: 40px;\n  height: 40px;\n}\n"],sourceRoot:""}])},236:function(n,t,e){t=n.exports=e(31)(!0),t.push([n.i,'\n.nav[data-v-cbf2c42a] {\n  position: relative;\n  top: 0;\n  width: 100%;\n  background: #fff;\n  height: 60px;\n}\n.nav a[data-v-cbf2c42a] {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n.nav .logo[data-v-cbf2c42a] {\n  position: absolute;\n  top: 50%;\n  left: 100px;\n  margin-top: -15px;\n}\n.nav .container[data-v-cbf2c42a] {\n  margin: 0 auto;\n}\n.nav .icons[data-v-cbf2c42a] {\n  width: 22px;\n  height: 22px;\n  margin: 0 auto;\n  text-align: center;\n  background: #fff;\n}\n.nav .icons i[data-v-cbf2c42a] {\n  font-size: 22px;\n  color: #999;\n}\n.nav .containers[data-v-cbf2c42a] {\n  position: absolute;\n  left: 508px;\n  top: 0;\n}\n.nav .c-rows[data-v-cbf2c42a] {\n  display: block;\n  overflow: auto;\n  width: auto;\n}\n.nav .c-spans[data-v-cbf2c42a] {\n  cursor: pointer;\n  float: left;\n  height: 60px;\n}\n.nav p[data-v-cbf2c42a] {\n  padding: 0 20px;\n  font: 16px/56px Arial, Helvetica, sans-serif;\n  text-align: center;\n  color: #333;\n}\n.active p[data-v-cbf2c42a] {\n  text-align: center;\n  color: #326ed2;\n  border-bottom: 4px solid #326ed2;\n}\n.nav[data-v-cbf2c42a]:after {\n  content: "  ";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 1px;\n  background-color: #ebeef0;\n  -webkit-transform: scaleY(0.5);\n  transform: scaleY(0.5);\n}\n',"",{version:3,sources:["/Users/baidu/workspace/work-self/dianlan/src/components/nav.vue","/Users/baidu/workspace/work-self/dianlan/src/components/nav.vue"],names:[],mappings:";AA4DA;EACI,mBAAA;EACA,OAAA;EACA,YAAA;EACA,iBAAA;EACA,aAAA;CC3DH;ADsDD;EAOQ,eAAA;EACA,YAAA;EACA,aAAA;CC1DP;ADiDD;EAYQ,mBAAA;EACA,SAAA;EACA,YAAA;EACA,kBAAA;CC1DP;AD2CD;EAmBQ,eAAA;CC3DP;ADwCD;EAsBQ,YAAA;EACA,aAAA;EACA,eAAA;EACA,mBAAA;EACA,iBAAA;CC3DP;ADiCD;EA4BY,gBAAA;EACA,YAAA;CC1DX;AD6BD;EAiCQ,mBAAA;EACA,YAAA;EACA,OAAA;CC3DP;ADwBD;EAsCQ,eAAA;EACA,eAAA;EACA,YAAA;CC3DP;ADmBD;EA2CQ,gBAAA;EACA,YAAA;EACA,aAAA;CC3DP;ADcD;EAiDQ,gBAAA;EACA,6CAAA;EACA,mBAAA;EACA,YAAA;CC5DP;ADiED;EAEQ,mBAAA;EACA,eAAA;EACA,iCAAA;CChEP;ADoED;EACI,cAAA;EACA,mBAAA;EACA,OAAA;EACA,QAAA;EACA,YAAA;EACA,YAAA;EACA,0BAAA;EACA,+BAAA;EACQ,uBAAA;CClEX",file:"nav.vue",sourcesContent:['\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.nav {\n    position: relative;\n    top: 0;\n    width: 100%;\n    background: #fff;\n    height:60px;\n    a {\n        display: block;\n        width: 100%;\n        height: 100%;\n    }\n    .logo{\n        position:absolute;\n        top:50%;\n        left:100px;\n        margin-top:-15px;\n    }\n    .container{\n        \n        margin:0 auto;\n    }\n    .icons {\n        width: 22px;\n        height: 22px;\n        margin: 0 auto;\n        text-align: center;\n        background: #fff;\n        i {\n            font-size: 22px;\n            color: #999;\n        }\n    }\n    .containers {\n        position:absolute;\n        left:508px;\n        top:0;\n    }\n    .c-rows {\n        display: block;\n        overflow: auto;\n        width: auto;\n    }\n    .c-spans {\n        cursor:pointer;\n        float:left;\n        height:60px;\n    }\n    p {\n        \n        padding:0 20px;\n        font: 16px/56px Arial, Helvetica, sans-serif;\n        text-align: center;\n        color: #333;\n        \n    }\n}\n\n.active {\n    p {\n        text-align: center;\n        color: #326ed2;\n        border-bottom:4px solid #326ed2\n    }\n}\n\n.nav:after {\n    content: "  ";\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 1px;\n    background-color: #ebeef0;\n    -webkit-transform: scaleY(.5);\n            transform: scaleY(.5);\n}\n','.nav {\n  position: relative;\n  top: 0;\n  width: 100%;\n  background: #fff;\n  height: 60px;\n}\n.nav a {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n.nav .logo {\n  position: absolute;\n  top: 50%;\n  left: 100px;\n  margin-top: -15px;\n}\n.nav .container {\n  margin: 0 auto;\n}\n.nav .icons {\n  width: 22px;\n  height: 22px;\n  margin: 0 auto;\n  text-align: center;\n  background: #fff;\n}\n.nav .icons i {\n  font-size: 22px;\n  color: #999;\n}\n.nav .containers {\n  position: absolute;\n  left: 508px;\n  top: 0;\n}\n.nav .c-rows {\n  display: block;\n  overflow: auto;\n  width: auto;\n}\n.nav .c-spans {\n  cursor: pointer;\n  float: left;\n  height: 60px;\n}\n.nav p {\n  padding: 0 20px;\n  font: 16px/56px Arial, Helvetica, sans-serif;\n  text-align: center;\n  color: #333;\n}\n.active p {\n  text-align: center;\n  color: #326ed2;\n  border-bottom: 4px solid #326ed2;\n}\n.nav:after {\n  content: "  ";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 1px;\n  background-color: #ebeef0;\n  -webkit-transform: scaleY(0.5);\n  transform: scaleY(0.5);\n}\n'],sourceRoot:""}])},237:function(n,t,e){n.exports=e.p+"static/img/logo.a89b036.png"},238:function(n,t,e){function o(n){i||e(242)}var i=!1,s=e(99)(e(232),e(240),o,"data-v-23fdb903",null);s.options.__file="/Users/baidu/workspace/work-self/dianlan/src/components/footer.vue",s.esModule&&Object.keys(s.esModule).some(function(n){return"default"!==n&&"__"!==n.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),s.options.functional&&console.error("[vue-loader] footer.vue: functional components are not supported with templates, they should use render functions."),n.exports=s.exports},239:function(n,t,e){function o(n){i||e(243)}var i=!1,s=e(99)(e(233),e(241),o,"data-v-cbf2c42a",null);s.options.__file="/Users/baidu/workspace/work-self/dianlan/src/components/nav.vue",s.esModule&&Object.keys(s.esModule).some(function(n){return"default"!==n&&"__"!==n.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),s.options.functional&&console.error("[vue-loader] nav.vue: functional components are not supported with templates, they should use render functions."),n.exports=s.exports},240:function(n,t,e){n.exports={render:function(){var n=this,t=n.$createElement;n._self._c;return n._m(0)},staticRenderFns:[function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"footer"},[e("div",{staticClass:"f-content max-width"},[e("div",{staticClass:"f-itemlist"},[e("section",{staticClass:"f-item"},[e("h3",[n._v("公司介绍")]),n._v(" "),e("ul",[e("li",[n._v("\n                        公司文化\n                    ")]),n._v(" "),e("li",[n._v("\n                        公司致辞\n                    ")]),n._v(" "),e("li",[n._v("\n                        公司资质\n                    ")])])]),n._v(" "),e("section",{staticClass:"f-item"},[e("h3",[n._v("产品服务")]),n._v(" "),e("ul",[e("li",[n._v("\n                        公司文化\n                    ")]),n._v(" "),e("li",[n._v("\n                        公司致辞\n                    ")]),n._v(" "),e("li",[n._v("\n                        公司资质\n                    ")])])]),n._v(" "),e("section",{staticClass:"f-item"},[e("h3",[n._v("工程案例")]),n._v(" "),e("ul",[e("li",[n._v("\n                        公司文化\n                    ")]),n._v(" "),e("li",[n._v("\n                        公司致辞\n                    ")]),n._v(" "),e("li",[n._v("\n                        公司资质\n                    ")])])]),n._v(" "),e("section",{staticClass:"f-item"},[e("h3",[n._v("合作伙伴")]),n._v(" "),e("ul",[e("li",[n._v("\n                        公司文化\n                    ")]),n._v(" "),e("li",[n._v("\n                        公司致辞\n                    ")]),n._v(" "),e("li",[n._v("\n                        公司资质\n                    ")])])])])]),n._v(" "),e("div",{staticClass:"footer-section max-widt"},[e("p",[n._v("@2018 北京铸安精电科技有限公司  版权所有 京备:0987656789")])])])}]},n.exports.render._withStripped=!0},241:function(n,t,e){n.exports={render:function(){var n=this,t=n.$createElement,o=n._self._c||t;return o("section",{staticClass:"nav max-width"},[o("img",{staticClass:"logo",attrs:{src:e(237),height:"30",alt:"logo"}}),n._v(" "),o("div",{staticClass:"containers"},[o("div",{staticClass:"c-rows"},[o("div",{staticClass:"c-spans",class:{active:0==n.ins},on:{click:function(t){n.clickfn("index",0)}}},[o("p",[n._v("\n                    首页\n                ")])]),n._v(" "),o("div",{staticClass:"c-spans",class:{active:1==n.ins},on:{click:function(t){n.clickfn("introduce",1)}}},[o("p",[n._v("\n                    企业介绍\n                ")])]),n._v(" "),o("div",{staticClass:"c-spans",class:{active:2==n.ins},on:{click:function(t){n.clickfn("product",2)}}},[o("p",[n._v("\n                    产品服务\n                ")])]),n._v(" "),o("div",{staticClass:"c-spans",class:{active:3==n.ins},on:{click:function(t){n.clickfn("case")}}},[o("p",[n._v("\n                    工程案例\n                ")])]),n._v(" "),o("div",{staticClass:"c-spans",class:{active:4==n.ins},on:{click:function(t){n.clickfn("contact")}}},[o("p",[n._v("\n                    联系我们\n                ")])]),n._v(" "),o("div",{staticClass:"c-spans",class:{active:5==n.ins},on:{click:function(t){n.clickfn("news")}}},[o("p",[n._v("\n                    新闻资讯\n                ")])])])])])},staticRenderFns:[]},n.exports.render._withStripped=!0},242:function(n,t,e){var o=e(235);"string"==typeof o&&(o=[[n.i,o,""]]),o.locals&&(n.exports=o.locals);e(53)("7764e212",o,!1,{})},243:function(n,t,e){var o=e(236);"string"==typeof o&&(o=[[n.i,o,""]]),o.locals&&(n.exports=o.locals);e(53)("3905a6a6",o,!1,{})},244:function(n,t,e){function o(n){i||e(254)}var i=!1,s=e(99)(e(245),e(252),o,"data-v-3df377e4",null);s.options.__file="/Users/baidu/workspace/work-self/dianlan/src/components/leftNav.vue",s.esModule&&Object.keys(s.esModule).some(function(n){return"default"!==n&&"__"!==n.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),s.options.functional&&console.error("[vue-loader] leftNav.vue: functional components are not supported with templates, they should use render functions."),n.exports=s.exports},245:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:["list","value"],data:function(){return{val:this.value}},mounted:function(){window.addEventListener("scroll",this.handleScroll)},watch:{value:function(n){console.log(n),this.val=this.value}},methods:{tab:function(n){this.val=n,this.$emit("input",this.val)},leftClick:function(){if(this.left)return void(location.href=this.left);history.back()}}}},246:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:["content"],components:{},data:function(){return{}},created:function(){},methods:{loadMore:function(){}}}},247:function(n,t,e){t=n.exports=e(31)(!0),t.push([n.i,"\n.t-header[data-v-2b296ec0] {\n  position: relative;\n  width: 100%;\n  height: auto;\n  overflow: hidden;\n}\n.t-header img[data-v-2b296ec0] {\n  display: block;\n  width: 100%;\n}\n.t-header .s-t[data-v-2b296ec0] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.t-header .s-t .s-content[data-v-2b296ec0] {\n  width: 1200px;\n  position: absolute;\n  top: 50%;\n  left: 0;\n  margin-top: -25px;\n}\n.t-header .s-t h2[data-v-2b296ec0] {\n  font-size: 24px;\n  color: #84DC60;\n  line-height: 33px;\n}\n.t-header .s-t p[data-v-2b296ec0] {\n  font-size: 12px;\n  color: #4C98E8;\n  line-height: 17px;\n}\n","",{version:3,sources:["/Users/baidu/workspace/work-self/dianlan/src/components/title.vue","/Users/baidu/workspace/work-self/dianlan/src/components/title.vue"],names:[],mappings:";AAuCA;EACI,mBAAA;EACA,YAAA;EACA,aAAA;EACA,iBAAA;CCtCH;ADkCD;EAMQ,eAAA;EACA,YAAA;CCrCP;AD8BD;EAUQ,mBAAA;EACA,YAAA;EACA,aAAA;CCrCP;ADyBD;EAcY,cAAA;EACC,mBAAA;EACA,SAAA;EACA,QAAA;EACA,kBAAA;CCpCZ;ADkBD;EAqBY,gBAAA;EACA,eAAA;EACA,kBAAA;CCpCX;ADaD;EA2BY,gBAAA;EACA,eAAA;EACA,kBAAA;CCrCX",file:"title.vue",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.t-header {\n    position: relative;\n    width: 100%;\n    height: auto;\n    overflow: hidden;\n    img {\n        display: block;\n        width: 100%;\n    }\n    .s-t {\n        position: absolute;\n        width: 100%;\n        height: 100%;\n        .s-content{\n            width:1200px;\n             position: absolute;\n             top:50%;\n             left:0;\n             margin-top:-25px;\n        }\n        h2 {\n            font-size: 24px;\n            color: #84DC60;\n            line-height: 33px;\n            \n        }\n        p {\n            font-size: 12px;\n            color: #4C98E8;\n            line-height: 17px;\n        }\n    }\n}\n",".t-header {\n  position: relative;\n  width: 100%;\n  height: auto;\n  overflow: hidden;\n}\n.t-header img {\n  display: block;\n  width: 100%;\n}\n.t-header .s-t {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.t-header .s-t .s-content {\n  width: 1200px;\n  position: absolute;\n  top: 50%;\n  left: 0;\n  margin-top: -25px;\n}\n.t-header .s-t h2 {\n  font-size: 24px;\n  color: #84DC60;\n  line-height: 33px;\n}\n.t-header .s-t p {\n  font-size: 12px;\n  color: #4C98E8;\n  line-height: 17px;\n}\n"],sourceRoot:""}])},248:function(n,t,e){t=n.exports=e(31)(!0),t.push([n.i,"\n.left-bar[data-v-3df377e4] {\n  width: 180px;\n  height: auto;\n  min-height: 600px;\n  border-left: 1px solid #eee;\n  float: left;\n}\n.left-bar ul[data-v-3df377e4] {\n  padding-top: 20px;\n}\n.left-bar li[data-v-3df377e4] {\n  height: 40px;\n  margin-bottom: 21px;\n  cursor: pointer;\n}\n.left-bar li div[data-v-3df377e4] {\n  padding-left: 20px;\n}\n.left-bar li h3[data-v-3df377e4] {\n  font-size: 14px;\n  line-height: 20px;\n  color: #000;\n}\n.left-bar li p[data-v-3df377e4] {\n  font-size: 12px;\n  line-height: 17px;\n  color: #999;\n}\n.left-bar .active div[data-v-3df377e4] {\n  border-left: 4px solid #7ccf5a;\n}\n","",{version:3,sources:["/Users/baidu/workspace/work-self/dianlan/src/components/leftNav.vue","/Users/baidu/workspace/work-self/dianlan/src/components/leftNav.vue"],names:[],mappings:";AAuDA;EACI,aAAA;EACA,aAAA;EACA,kBAAA;EACA,4BAAA;EACA,YAAA;CCtDH;ADiDD;EAOQ,kBAAA;CCrDP;AD8CD;EAUQ,aAAA;EACA,oBAAA;EACA,gBAAA;CCrDP;ADyCD;EAcY,mBAAA;CCpDX;ADsCD;EAiBY,gBAAA;EACA,kBAAA;EACA,YAAA;CCpDX;ADiCD;EAsBY,gBAAA;EACA,kBAAA;EACA,YAAA;CCpDX;AD4BD;EA4BQ,+BAAA;CCrDP",file:"leftNav.vue",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.left-bar {\n    width: 180px;\n    height: auto;\n    min-height: 600px;\n    border-left: 1px solid #eee;\n    float:left;\n    ul {\n        padding-top: 20px;\n    }\n    li {\n        height: 40px;\n        margin-bottom: 21px;\n        cursor:pointer;\n        div {\n            padding-left: 20px;\n        }\n        h3 {\n            font-size: 14px;\n            line-height: 20px;\n            color: #000;\n        }\n        p {\n            font-size: 12px;\n            line-height: 17px;\n            color: #999;\n        }\n    }\n    .active div {\n        border-left: 4px solid #7ccf5a;\n    }\n}\n",".left-bar {\n  width: 180px;\n  height: auto;\n  min-height: 600px;\n  border-left: 1px solid #eee;\n  float: left;\n}\n.left-bar ul {\n  padding-top: 20px;\n}\n.left-bar li {\n  height: 40px;\n  margin-bottom: 21px;\n  cursor: pointer;\n}\n.left-bar li div {\n  padding-left: 20px;\n}\n.left-bar li h3 {\n  font-size: 14px;\n  line-height: 20px;\n  color: #000;\n}\n.left-bar li p {\n  font-size: 12px;\n  line-height: 17px;\n  color: #999;\n}\n.left-bar .active div {\n  border-left: 4px solid #7ccf5a;\n}\n"],sourceRoot:""}])},249:function(n,t,e){n.exports=e.p+"static/img/top-b.19760da.png"},250:function(n,t,e){function o(n){i||e(253)}var i=!1,s=e(99)(e(246),e(251),o,"data-v-2b296ec0",null);s.options.__file="/Users/baidu/workspace/work-self/dianlan/src/components/title.vue",s.esModule&&Object.keys(s.esModule).some(function(n){return"default"!==n&&"__"!==n.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),s.options.functional&&console.error("[vue-loader] title.vue: functional components are not supported with templates, they should use render functions."),n.exports=s.exports},251:function(n,t,e){n.exports={render:function(){var n=this,t=n.$createElement,o=n._self._c||t;return o("section",{staticClass:"t-header"},[o("div",{staticClass:"s-t"},[o("div",{staticClass:"max-width2"},[o("div",{staticClass:"s-content"},[o("h2",[n._v(n._s(n.content.title))]),n._v(" "),o("p",[n._v(n._s(n.content.des))])])])]),n._v(" "),o("img",{attrs:{src:e(249),alt:""}})])},staticRenderFns:[]},n.exports.render._withStripped=!0},252:function(n,t,e){n.exports={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("section",{staticClass:"left-bar"},[e("ul",n._l(n.list,function(t,o){return e("li",{class:{active:o==n.val},on:{click:function(t){n.tab(o)}}},[e("div",[e("h3",[n._v(n._s(t.title)+" ")]),n._v(" "),e("p",[n._v("\n                    "+n._s(t.des)+"\n                ")])])])}))])},staticRenderFns:[]},n.exports.render._withStripped=!0},253:function(n,t,e){var o=e(247);"string"==typeof o&&(o=[[n.i,o,""]]),o.locals&&(n.exports=o.locals);e(53)("91516564",o,!1,{})},254:function(n,t,e){var o=e(248);"string"==typeof o&&(o=[[n.i,o,""]]),o.locals&&(n.exports=o.locals);e(53)("cb04fc30",o,!1,{})},275:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=e(244),i=e.n(o);t.default={components:{cLeftNav:i.a},data:function(){return{num:0,list:[{title:"公司介绍",des:"des sdssd  sdds",id:"01"},{title:"公司介绍",des:"des sdds",id:"01"},{title:"31 公司介绍",des:"des dsds",id:"01"}]}},created:function(){},mounted:function(){},methods:{loadMore:function(){}}}},276:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=e(239),i=e.n(o),s=e(250),a=e.n(s),r=e(325),A=e.n(r),c=e(238),l=e.n(c),p=e(234);t.default={components:{cTitle:a.a,Cnav:i.a,cContent:A.a,cFooter:l.a},data:function(){return{masklock:!1,num:0,scontent:{title:"公司介绍",des:"因为专注，所以专业"}}},beforeDestroy:function(){this.removeEvent()},created:function(){},mounted:function(){},methods:{bd:function(){this.num=2},loadMore:function(){},init:function(){this.initEvent()},initEvent:function(){p.a.$on("showMask",this.showMask)},removeEvent:function(){p.a.$off("showMask",this.showMask)},showMask:function(n){this.masklock=n},send:function(){this.$http.post("/hackathon/infer",{id:111,is_default:111,tg_default:1}).then(function(n){console.log(n)})},getArticleList:function(){var n=this,t=this.search;this.$http({method:"get",url:"/youyi/common/getArticle",params:t}).then(function(t){var e=t.data.articleInfo||[];e.length?(e.forEach(function(t){n.list.push(t)}),n.busy=!1,n.search.page++):n.isNoMoreData=!0})}}}},287:function(n,t,e){t=n.exports=e(31)(!0),t.push([n.i,"\n.infroduce-content[data-v-066342c2] {\n  padding-top: 20px;\n  height: auto;\n  overflow: auto;\n  min-height: 600px;\n}\n.infroduce-content .s-content[data-v-066342c2] {\n  float: right;\n  width: 980px;\n}\n.infroduce-content .s-content p[data-v-066342c2] {\n  font-size: 14px;\n  line-height: 24px;\n  letter-spacing: 0;\n  color: #333;\n  margin-bottom: 20px ;\n}\n","",{version:3,sources:["/Users/baidu/workspace/work-self/dianlan/src/pages/introduce/comps/content.vue","/Users/baidu/workspace/work-self/dianlan/src/pages/introduce/comps/content.vue"],names:[],mappings:";AAkFA;EACI,kBAAA;EACA,aAAA;EACA,eAAA;EACA,kBAAA;CCjFH;AD6ED;EAMQ,aAAA;EACA,aAAA;CChFP;ADyED;EASY,gBAAA;EACA,kBAAA;EACA,kBAAA;EACA,YAAA;EACD,qBAAA;CC/EV",file:"content.vue",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.infroduce-content {\n    padding-top: 20px;\n    height:auto;\n    overflow:auto;\n    min-height:600px;\n    .s-content {\n        float:right;\n        width: 980px;\n        p {\n            font-size: 14px;\n            line-height: 24px;\n            letter-spacing: 0;\n            color: #333;\n           margin-bottom:20px ;\n        }\n        img{\n            \n        }\n    }\n}\n",".infroduce-content {\n  padding-top: 20px;\n  height: auto;\n  overflow: auto;\n  min-height: 600px;\n}\n.infroduce-content .s-content {\n  float: right;\n  width: 980px;\n}\n.infroduce-content .s-content p {\n  font-size: 14px;\n  line-height: 24px;\n  letter-spacing: 0;\n  color: #333;\n  margin-bottom: 20px ;\n}\n"],sourceRoot:""}])},305:function(n,t,e){t=n.exports=e(31)(!0),t.push([n.i,"\n.index-page {\n    position: relative;\n}\n","",{version:3,sources:["/Users/baidu/workspace/work-self/dianlan/src/pages/introduce/index.vue?528f4676"],names:[],mappings:";AAsGA;IACA,mBAAA;CACA",file:"index.vue",sourcesContent:["<template>\n    <section class=\"index-page\">\n        <cnav :ins=\"1\"></cnav>\n        <c-title :content=\"scontent\">\n        </c-title>\n        <c-content></c-content>\n        \n       \n        <c-footer></c-footer>\n    </section>\n</template>\n\n<script>\n    import Cnav from '@/components/nav.vue';\n    import cTitle from '@/components/title.vue';\n    import cContent from './comps/content.vue';\n    import cFooter from '@/components/footer.vue';\n    import hub from '@/common/hub';\n    export default {\n        components: {\n            cTitle,\n            Cnav,\n            cContent,\n            cFooter\n        },\n        data() {\n            \n            return {\n                masklock: false,\n                num: 0,\n                scontent:{\n                    title:'公司介绍',\n                    des:'因为专注，所以专业'\n                },\n                \n            };\n        },\n        beforeDestroy() {\n            this.removeEvent();\n        },\n        created() {\n            \n        },\n        mounted() {\n            \n            \n        },\n        methods: {\n            bd(){\n                this.num = 2;\n            },\n            loadMore() {},\n            init() {\n                this.initEvent();\n            },\n            initEvent() {\n                hub.$on('showMask', this.showMask);\n            },\n            removeEvent() {\n                hub.$off('showMask', this.showMask);\n    \n            },\n            showMask(st) {\n                this.masklock = st;\n            },\n            send() {\n    \n                this.$http\n                    .post('/hackathon/infer', {\n                        id: 111,\n                        is_default: 111,\n                        tg_default: 1\n                    })\n                    .then(err => {\n                        console.log(err);\n                    });\n            },\n            getArticleList() {\n                let url = '/youyi/common/getArticle';\n                let params = this.search;\n                this.$http({\n                    method: 'get',\n                    url,\n                    params\n                }).then(res => {\n                    let list = res.data.articleInfo || [];\n                    if (list.length) {\n                        list.forEach(item => {\n                            this.list.push(item);\n                        });\n                        this.busy = false;\n                        this.search.page++;\n                    } else {\n                        this.isNoMoreData = true;\n                    }\n                });\n            }\n        }\n    };\n<\/script>\n\n<style>\n    .index-page {\n        position: relative;\n    }\n</style>\n"],sourceRoot:""}])},325:function(n,t,e){function o(n){i||e(352)}var i=!1,s=e(99)(e(275),e(330),o,"data-v-066342c2",null);s.options.__file="/Users/baidu/workspace/work-self/dianlan/src/pages/introduce/comps/content.vue",s.esModule&&Object.keys(s.esModule).some(function(n){return"default"!==n&&"__"!==n.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),s.options.functional&&console.error("[vue-loader] content.vue: functional components are not supported with templates, they should use render functions."),n.exports=s.exports},330:function(n,t,e){n.exports={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("section",{staticClass:"infroduce-content max-width2"},[e("c-left-nav",{attrs:{list:n.list},model:{value:n.num,callback:function(t){n.num=t},expression:"num"}}),n._v(" "),0==n.num?e("div",{staticClass:"s-content"},[e("p",[n._v("\n            电缆实业有限公司始创于1982年,座落于广州市增城国家经济技术开发区创新大道27号，注册资金11380万元，占地面积40000余平方米，是增城招商引资的38个重点项目之一，总投资2.2亿元。企业主要生产电线、电气装备用电线电缆、电力电缆、数据信号电缆以及特种电缆产品，2000多个品种规格。与电力电网系统形成配套供应关系，拥有固定客户10万余家。公司年生产力20多个亿，以“产品优质、品牌优势、迅捷的服务、满意的售后”的卓越形象，赢得了全国各地客户的长期信赖，成为消费者及大型工程项目的不二之选。 公司通过ISO9001质量体系、ISO14001环境体系、ISO10012计量体系等相继通过国内外权威机构认证，获得中国驰名商标、高新技术企业称号、广东省名牌产品、广东省著名商标证书，并通过国家标准化委员会AAAA级标准化良好行为认证。\n        ")]),n._v(" "),e("p",[n._v("\n            电缆实业有限公司始创于1982年,座落于广州市增城国家经济技术开发区创新大道27号，注册资金11380万元，占地面积40000余平方米，是增城招商引资的38个重点项目之一，总投资2.2亿元。企业主要生产电线、电气装备用电线电缆、电力电缆、数据信号电缆以及特种电缆产品，2000多个品种规格。与电力电网系统形成配套供应关系，拥有固定客户10万余家。公司年生产力20多个亿，以“产品优质、品牌优势、迅捷的服务、满意的售后”的卓越形象，赢得了全国各地客户的长期信赖，成为消费者及大型工程项目的不二之选。 公司通过ISO9001质量体系、ISO14001环境体系、ISO10012计量体系等相继通过国内外权威机构认证，获得中国驰名商标、高新技术企业称号、广东省名牌产品、广东省著名商标证书，并通过国家标准化委员会AAAA级标准化良好行为认证。\n        ")]),n._v(" "),e("img",{attrs:{src:"https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=4019536220,2237632415&fm=173&app=25&f=JPEG?w=218&h=146&s=F106D71509D2CCD25E2478C70300E0E0",alt:""}}),n._v(" "),e("p",[n._v("\n            电缆实业有限公司始创于1982年,座落于广州市增城国家经济技术开发区创新大道27号，注册资金11380万元，占地面积40000余平方米，是增城招商引资的38个重点项目之一，总投资2.2亿元。企业主要生产电线、电气装备用电线电缆、电力电缆、数据信号电缆以及特种电缆产品，2000多个品种规格。与电力电网系统形成配套供应关系，拥有固定客户10万余家。公司年生产力20多个亿，以“产品优质、品牌优势、迅捷的服务、满意的售后”的卓越形象，赢得了全国各地客户的长期信赖，成为消费者及大型工程项目的不二之选。 公司通过ISO9001质量体系、ISO14001环境体系、ISO10012计量体系等相继通过国内外权威机构认证，获得中国驰名商标、高新技术企业称号、广东省名牌产品、广东省著名商标证书，并通过国家标准化委员会AAAA级标准化良好行为认证。\n        ")]),n._v(" "),e("p",[n._v("\n            电缆实业有限公司始创于1982年,座落于广州市增城国家经济技术开发区创新大道27号，注册资金11380万元，占地面积40000余平方米，是增城招商引资的38个重点项目之一，总投资2.2亿元。企业主要生产电线、电气装备用电线电缆、电力电缆、数据信号电缆以及特种电缆产品，2000多个品种规格。与电力电网系统形成配套供应关系，拥有固定客户10万余家。公司年生产力20多个亿，以“产品优质、品牌优势、迅捷的服务、满意的售后”的卓越形象，赢得了全国各地客户的长期信赖，成为消费者及大型工程项目的不二之选。 公司通过ISO9001质量体系、ISO14001环境体系、ISO10012计量体系等相继通过国内外权威机构认证，获得中国驰名商标、高新技术企业称号、广东省名牌产品、广东省著名商标证书，并通过国家标准化委员会AAAA级标准化良好行为认证。\n        ")]),n._v(" "),e("p",[n._v("\n            电缆实业有限公司始创于1982年,座落于广州市增城国家经济技术开发区创新大道27号，注册资金11380万元，占地面积40000余平方米，是增城招商引资的38个重点项目之一，总投资2.2亿元。企业主要生产电线、电气装备用电线电缆、电力电缆、数据信号电缆以及特种电缆产品，2000多个品种规格。与电力电网系统形成配套供应关系，拥有固定客户10万余家。公司年生产力20多个亿，以“产品优质、品牌优势、迅捷的服务、满意的售后”的卓越形象，赢得了全国各地客户的长期信赖，成为消费者及大型工程项目的不二之选。 公司通过ISO9001质量体系、ISO14001环境体系、ISO10012计量体系等相继通过国内外权威机构认证，获得中国驰名商标、高新技术企业称号、广东省名牌产品、广东省著名商标证书，并通过国家标准化委员会AAAA级标准化良好行为认证。\n        ")])]):n._e(),n._v(" "),1==n.num?e("div",{staticClass:"s-content"},[e("p",[n._v("\n            电缆实业有限公司始创于1982年,座落于广州市增城国家经济技术开发区创新大道27号，注册资金11380万元，占地面积40000余平方米，是增城招商引资的38个重点项目之一，总投资2.2亿元。企业主要生产电线、电气装备用电线电缆、电力电缆、数据信号电缆以及特种电缆产品，2000多个品种规格。与电力电网系统形成配套供应关系，拥有固定客户10万余家。公司年生产力20多个亿，以“产品优质、品牌优势、迅捷的服务、满意的售后”的卓越形象，赢得了全国各地客户的长期信赖，成为消费者及大型工程项目的不二之选。 公司通过ISO9001质量体系、ISO14001环境体系、ISO10012计量体系等相继通过国内外权威机构认证，获得中国驰名商标、高新技术企业称号、广东省名牌产品、广东省著名商标证书，并通过国家标准化委员会AAAA级标准化良好行为认证。\n        ")])]):n._e(),n._v(" "),2==n.num?e("div",{staticClass:"s-content"},[e("img",{attrs:{src:"https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=4019536220,2237632415&fm=173&app=25&f=JPEG?w=218&h=146&s=F106D71509D2CCD25E2478C70300E0E0",alt:""}}),n._v(" "),e("p",[n._v("\n            电缆实业有限公司始创于1982年,座落于广州市增城国家经济技术开发区创新大道27号，注册资金11380万元，占地面积40000余平方米，是增城招商引资的38个重点项目之一，总投资2.2亿元。企业主要生产电线、电气装备用电线电缆、电力电缆、数据信号电缆以及特种电缆产品，2000多个品种规格。与电力电网系统形成配套供应关系，拥有固定客户10万余家。公司年生产力20多个亿，以“产品优质、品牌优势、迅捷的服务、满意的售后”的卓越形象，赢得了全国各地客户的长期信赖，成为消费者及大型工程项目的不二之选。 公司通过ISO9001质量体系、ISO14001环境体系、ISO10012计量体系等相继通过国内外权威机构认证，获得中国驰名商标、高新技术企业称号、广东省名牌产品、广东省著名商标证书，并通过国家标准化委员会AAAA级标准化良好行为认证。\n        ")]),n._v(" "),e("p",[n._v("\n            电缆实业有限公司始创于1982年,座落于广州市增城国家经济技术开发区创新大道27号，注册资金11380万元，占地面积40000余平方米，是增城招商引资的38个重点项目之一，总投资2.2亿元。企业主要生产电线、电气装备用电线电缆、电力电缆、数据信号电缆以及特种电缆产品，2000多个品种规格。与电力电网系统形成配套供应关系，拥有固定客户10万余家。公司年生产力20多个亿，以“产品优质、品牌优势、迅捷的服务、满意的售后”的卓越形象，赢得了全国各地客户的长期信赖，成为消费者及大型工程项目的不二之选。 公司通过ISO9001质量体系、ISO14001环境体系、ISO10012计量体系等相继通过国内外权威机构认证，获得中国驰名商标、高新技术企业称号、广东省名牌产品、广东省著名商标证书，并通过国家标准化委员会AAAA级标准化良好行为认证。\n        ")]),n._v(" "),e("p",[n._v("\n            电缆实业有限公司始创于1982年,座落于广州市增城国家经济技术开发区创新大道27号，注册资金11380万元，占地面积40000余平方米，是增城招商引资的38个重点项目之一，总投资2.2亿元。企业主要生产电线、电气装备用电线电缆、电力电缆、数据信号电缆以及特种电缆产品，2000多个品种规格。与电力电网系统形成配套供应关系，拥有固定客户10万余家。公司年生产力20多个亿，以“产品优质、品牌优势、迅捷的服务、满意的售后”的卓越形象，赢得了全国各地客户的长期信赖，成为消费者及大型工程项目的不二之选。 公司通过ISO9001质量体系、ISO14001环境体系、ISO10012计量体系等相继通过国内外权威机构认证，获得中国驰名商标、高新技术企业称号、广东省名牌产品、广东省著名商标证书，并通过国家标准化委员会AAAA级标准化良好行为认证。\n        ")])]):n._e()],1)},staticRenderFns:[]},n.exports.render._withStripped=!0},349:function(n,t,e){n.exports={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("section",{staticClass:"index-page"},[e("cnav",{attrs:{ins:1}}),n._v(" "),e("c-title",{attrs:{content:n.scontent}}),n._v(" "),e("c-content"),n._v(" "),e("c-footer")],1)},staticRenderFns:[]},n.exports.render._withStripped=!0},352:function(n,t,e){var o=e(287);"string"==typeof o&&(o=[[n.i,o,""]]),o.locals&&(n.exports=o.locals);e(53)("d1ad9850",o,!1,{})},370:function(n,t,e){var o=e(305);"string"==typeof o&&(o=[[n.i,o,""]]),o.locals&&(n.exports=o.locals);e(53)("a4ef0982",o,!1,{})}});
//# sourceMappingURL=6.d17e8e.js.map