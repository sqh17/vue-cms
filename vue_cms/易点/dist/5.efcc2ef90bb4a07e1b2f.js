webpackJsonp([5],{173:function(t,e,s){s(235);var n=s(2)(s(201),s(224),"data-v-0280f1dd",null);n.options.__file="C:\\Users\\tujunxiong\\Desktop\\传智21期\\06-VUE-第6天-购物车-补充知识点-打包\\4-源代码\\code\\cms_vue_pro_21\\src\\components\\news\\list.vue",n.esModule&&Object.keys(n.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),n.options.functional&&console.error("[vue-loader] list.vue: functional components are not supported with templates, they should use render functions."),t.exports=n.exports},201:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data(){return{newsList:[]}},created(){this.$http.get(this.$myConfig.host+"/api/getnewslist").then(t=>{this.newsList=t.body.message},t=>{console.log("获取新闻资讯列表失败")})}}},207:function(t,e,s){e=t.exports=s(1)(void 0),e.push([t.i,"\n.news-bottom span[data-v-0280f1dd] {\r\n    display: inline-block;\r\n    color: #04a1f0;\n}\n.news-bottom span[data-v-0280f1dd]:nth-child(1) {\r\n    float: left;\n}\n.news-bottom span[data-v-0280f1dd]:nth-child(2) {\r\n    float: right;\n}\r\n",""])},224:function(t,e,s){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"tmpl"},[s("my-title",{attrs:{title:"新闻资讯"}}),t._v(" "),s("div",[s("ul",{staticClass:"mui-table-view"},t._l(t.newsList,function(e){return s("li",{key:e.id,staticClass:"mui-table-view-cell mui-media"},[s("router-link",{attrs:{to:"/news/detail/"+e.id+"?title=新闻详情"}},[s("img",{staticClass:"mui-media-object mui-pull-left",attrs:{src:e.img_url}}),t._v(" "),s("div",{staticClass:"mui-media-body"},[t._v("\n                        "+t._s(e.title)+"\n                        "),s("div",{staticClass:"news-bottom"},[s("span",[t._v("点击数："+t._s(e.click))]),t._v(" "),s("span",[t._v("发表日期:"+t._s(t._f("convertTime")(e.add_time)))])])])])],1)}))])],1)},staticRenderFns:[]},t.exports.render._withStripped=!0},235:function(t,e,s){var n=s(207);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);s(3)("dda1ddd0",n,!1)}});